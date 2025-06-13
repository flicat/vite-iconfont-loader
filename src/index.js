import {globSync} from 'glob'
import {readFileSync} from 'fs'
import {compileTemplate} from 'vue/compiler-sfc'
import {optimize} from 'svgo'

export default function lowIconPlugin({moduleId, iconFontPath, iconAttrs}) {
  if (!iconFontPath) {
    throw 'iconFontPath is required'
  }
  if (!moduleId) {
    throw 'moduleId is required'
  }

  const svgIconMap = {}
  const svgArr = globSync(iconFontPath, {eager: true, as: 'raw'})

  svgArr.forEach(path => {
    const code = readFileSync(path)
    const iconSymbols = code.toString().match(/<symbol[^>]*>.*?<\/symbol>/gim)
    if (Array.isArray(iconSymbols) && iconSymbols.length) {
      iconSymbols.forEach(symbol => {
        const id = symbol.replace(/.*id="([^"]+)".*/, '$1').replace(/(^|-|_)(\w)/g, (match, prefix, firstChar) => {
          return firstChar.toUpperCase()
        })
        const virtualId = 'virtual:' + id + '.svg'
        svgIconMap[id] = {
          id,
          virtualModuleId: virtualId,
          code: symbol.replace(/(.*?)id="[^"]+"(.*?)/, '$1id="' + id + '"$2').replaceAll('symbol', 'svg'),
          resolvedVirtualModuleId: '\0' + 'virtual:' + id
        }
      })
    }
  })

  const iconList = Object.values(svgIconMap)
  const virtualModuleId = `virtual:${moduleId}`
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vite-iconfont-loader',
    resolveId(id) {
      const target = iconList.find(item => item.virtualModuleId === id)
      if (target) {
        return target.resolvedVirtualModuleId
      } else if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      const target = iconList.find(item => item.resolvedVirtualModuleId === id)
      if (target) {
        const svgAttrStr = Object.entries(
          Object.assign(
            {
              class: 'iconfont',
              width: '1em',
              height: '1em',
              fill: 'currentColor',
              color: 'currentColor'
            },
            iconAttrs
          )
        )
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ')

        let svg = optimize(target.code).data

        svg = svg
          .replace(/<style/g, '<component is="style"')
          .replace(/<\/style/g, '</component')
          .replace(/<svg/g, `<svg ${svgAttrStr}`)

        const {code} = compileTemplate({
          id: JSON.stringify(id),
          source: svg,
          filename: target.id + '.svg',
          transformAssetUrls: false
        })

        return `${code}\nexport default { render: render }`
      } else if (id === resolvedVirtualModuleId) {
        const importCode = []
        const exportCode = []
        iconList.forEach(({id, virtualModuleId}) => {
          importCode.push(`import ${id} from '${virtualModuleId}'`)
          exportCode.push(id)
        })
        return [importCode.join('\n'), 'export {', exportCode.join(',\n'), '}'].join('\n')
      }
    }
  }
}
