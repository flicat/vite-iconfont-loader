import {globSync} from 'glob'
import {readFileSync} from 'fs'
import {compileTemplate} from 'vue/compiler-sfc'
import {optimize} from 'svgo'

const svgIconMap = {}

const iconList = globSync('./src/iconfont/*/iconfont.js', {eager: true, as: 'raw'})

iconList.forEach(path => {
  const code = readFileSync(path)
  const iconSymbols = code.toString().match(/<symbol[^>]*>.*?<\/symbol>/gim)
  if (Array.isArray(iconSymbols) && iconSymbols.length) {
    iconSymbols.forEach(symbol => {
      const id = symbol.replace(/.*id="([^"]+)".*/, '$1').replace(/(^|-|_)(\w)/g, (match, prefix, firstChar) => {
        return firstChar.toUpperCase()
      })
      const virtualModuleId = 'virtual:' + id + '.svg'
      svgIconMap[id] = {
        id,
        virtualModuleId,
        code: symbol.replace(/(.*?)id="[^"]+"(.*?)/, '$1id="' + id + '"$2').replaceAll('symbol', 'svg'),
        resolvedVirtualModuleId: '\0' + 'virtual:' + id
      }
    })
  }
})

export default function lowIconPlugin() {
  const iconList = Object.values(svgIconMap)
  const virtualModuleId = 'virtual:icon-import'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'icon-import-plugin',
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
        let svg = optimize(target.code).data
        svg = svg
          .replace(/<style/g, '<component is="style"')
          .replace(/<\/style/g, '</component')
          .replace(/<svg/g, '<svg class="iconfont" width="1em" height="1em" fill="currentColor" color="currentColor"')

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
