import { globSync as ad } from "glob";
import { readFileSync as od } from "fs";
import { optimize as ud } from "svgo";
/**
* @vue/compiler-sfc v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oe(t) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) s[r] = 1;
  return (r) => r in s;
}
const ld = Object.freeze({}), Vi = () => {
}, Os = () => !1, hc = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), tt = Object.assign, cd = Object.prototype.hasOwnProperty, hd = (t, s) => cd.call(t, s), Ae = Array.isArray, pd = (t) => oa(t) === "[object Map]", fd = (t) => oa(t) === "[object Set]", dd = (t) => typeof t == "function", ne = (t) => typeof t == "string", vt = (t) => typeof t == "symbol", Ct = (t) => t !== null && typeof t == "object", pc = Object.prototype.toString, oa = (t) => pc.call(t), fc = (t) => oa(t) === "[object Object]", xu = /* @__PURE__ */ Oe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), dc = /* @__PURE__ */ Oe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Hr = (t) => {
  const s = /* @__PURE__ */ Object.create(null);
  return (r) => s[r] || (s[r] = t(r));
}, md = /-(\w)/g, st = Hr(
  (t) => t.replace(md, (s, r) => r ? r.toUpperCase() : "")
), yd = /\B([A-Z])/g, gd = Hr(
  (t) => t.replace(yd, "-$1").toLowerCase()
), Ws = Hr((t) => t.charAt(0).toUpperCase() + t.slice(1)), bd = Hr(
  (t) => t ? `on${Ws(t)}` : ""
), xd = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function Su(t) {
  return xd.test(t) ? `__props.${t}` : `__props[${JSON.stringify(t)}]`;
}
const Sr = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
}, Sd = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Ed = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", mc = /* @__PURE__ */ Oe(Ed), Eu = 2;
function yc(t, s = 0, r = t.length) {
  if (s = Math.max(0, Math.min(s, t.length)), r = Math.max(0, Math.min(r, t.length)), s > r) return "";
  let o = t.split(/(\r?\n)/);
  const u = o.filter((h, p) => p % 2 === 1);
  o = o.filter((h, p) => p % 2 === 0);
  let c = 0;
  const l = [];
  for (let h = 0; h < o.length; h++)
    if (c += o[h].length + (u[h] && u[h].length || 0), c >= s) {
      for (let p = h - Eu; p <= h + Eu || r > c; p++) {
        if (p < 0 || p >= o.length) continue;
        const m = p + 1;
        l.push(
          `${m}${" ".repeat(Math.max(3 - String(m).length, 0))}|  ${o[p]}`
        );
        const d = o[p].length, b = u[p] && u[p].length || 0;
        if (p === h) {
          const g = s - (c - (d + b)), x = Math.max(
            1,
            r > c ? d - g : r - s
          );
          l.push("   |  " + " ".repeat(g) + "^".repeat(x));
        } else if (p > h) {
          if (r > c) {
            const g = Math.max(Math.min(r - c, d), 1);
            l.push("   |  " + "^".repeat(g));
          }
          c += d + b;
        }
      }
      break;
    }
  return l.join(`
`);
}
function gc(t) {
  if (Ae(t)) {
    const s = {};
    for (let r = 0; r < t.length; r++) {
      const o = t[r], u = ne(o) ? bc(o) : gc(o);
      if (u)
        for (const c in u)
          s[c] = u[c];
    }
    return s;
  } else if (ne(t) || Ct(t))
    return t;
}
const Pd = /;(?![^(]*\))/g, Td = /:([^]+)/, Ad = /\/\*[^]*?\*\//g;
function bc(t) {
  const s = {};
  return t.replace(Ad, "").split(Pd).forEach((r) => {
    if (r) {
      const o = r.split(Td);
      o.length > 1 && (s[o[0].trim()] = o[1].trim());
    }
  }), s;
}
function wd(t) {
  if (!t) return "";
  if (ne(t)) return t;
  let s = "";
  for (const r in t) {
    const o = t[r];
    if (ne(o) || typeof o == "number") {
      const u = r.startsWith("--") ? r : gd(r);
      s += `${u}:${o};`;
    }
  }
  return s;
}
function xc(t) {
  let s = "";
  if (ne(t))
    s = t;
  else if (Ae(t))
    for (let r = 0; r < t.length; r++) {
      const o = xc(t[r]);
      o && (s += o + " ");
    }
  else if (Ct(t))
    for (const r in t)
      t[r] && (s += r + " ");
  return s.trim();
}
const vd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Cd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Id = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Nd = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", _d = /* @__PURE__ */ Oe(vd), Od = /* @__PURE__ */ Oe(Cd), kd = /* @__PURE__ */ Oe(Id), Sc = /* @__PURE__ */ Oe(Nd), Ld = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ec = /* @__PURE__ */ Oe(
  Ld + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
), Md = /[>/="'\u0009\u000a\u000c\u0020]/, ji = {};
function Rd(t) {
  if (ji.hasOwnProperty(t))
    return ji[t];
  const s = Md.test(t);
  return s && console.error(`unsafe attribute name: ${t}`), ji[t] = !s;
}
const Dd = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
}, Fd = /* @__PURE__ */ Oe(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), Bd = /* @__PURE__ */ Oe(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
), Ud = /* @__PURE__ */ Oe(
  "accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns"
), $d = /["'&<>]/;
function Ze(t) {
  const s = "" + t, r = $d.exec(s);
  if (!r)
    return s;
  let o = "", u, c, l = 0;
  for (c = r.index; c < s.length; c++) {
    switch (s.charCodeAt(c)) {
      case 34:
        u = "&quot;";
        break;
      case 38:
        u = "&amp;";
        break;
      case 39:
        u = "&#39;";
        break;
      case 60:
        u = "&lt;";
        break;
      case 62:
        u = "&gt;";
        break;
      default:
        continue;
    }
    l !== c && (o += s.slice(l, c)), l = c + 1, o += u;
  }
  return l !== c ? o + s.slice(l, c) : o;
}
const Vd = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function jd(t, s) {
  return t.replace(
    Vd,
    (r) => s ? r === '"' ? '\\\\\\"' : `\\\\${r}` : `\\${r}`
  );
}
const Pc = (t) => !!(t && t.__v_isRef === !0), zr = (t) => ne(t) ? t : t == null ? "" : Ae(t) || Ct(t) && (t.toString === pc || !dd(t.toString)) ? Pc(t) ? zr(t.value) : JSON.stringify(t, Tc, 2) : String(t), Tc = (t, s) => Pc(s) ? Tc(t, s.value) : pd(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (r, [o, u], c) => (r[qi(o, c) + " =>"] = u, r),
    {}
  )
} : fd(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((r) => qi(r))
} : vt(s) ? qi(s) : Ct(s) && !Ae(s) && !fc(s) ? String(s) : s, qi = (t, s = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vt(t) ? `Symbol(${(r = t.description) != null ? r : s})` : t
  );
}, ls = Symbol("Fragment"), Bt = Symbol("Teleport"), ds = Symbol("Suspense"), Ds = Symbol("KeepAlive"), ua = Symbol(
  "BaseTransition"
), At = Symbol("openBlock"), la = Symbol("createBlock"), ca = Symbol(
  "createElementBlock"
), Gs = Symbol("createVNode"), Xr = Symbol(
  "createElementVNode"
), ms = Symbol(
  "createCommentVNode"
), Wr = Symbol(
  "createTextVNode"
), Gr = Symbol(
  "createStaticVNode"
), Fs = Symbol(
  "resolveComponent"
), Ks = Symbol(
  "resolveDynamicComponent"
), Kr = Symbol(
  "resolveDirective"
), Ac = Symbol(
  "resolveFilter"
), Jr = Symbol(
  "withDirectives"
), Yr = Symbol("renderList"), ha = Symbol("renderSlot"), pa = Symbol("createSlots"), Js = Symbol(
  "toDisplayString"
), jt = Symbol("mergeProps"), Qr = Symbol(
  "normalizeClass"
), Zr = Symbol(
  "normalizeStyle"
), cs = Symbol(
  "normalizeProps"
), ys = Symbol(
  "guardReactiveProps"
), ei = Symbol("toHandlers"), _r = Symbol("camelize"), wc = Symbol("capitalize"), Or = Symbol(
  "toHandlerKey"
), Bs = Symbol(
  "setBlockTracking"
), vc = Symbol("pushScopeId"), Cc = Symbol("popScopeId"), ti = Symbol("withCtx"), Us = Symbol("unref"), $s = Symbol("isRef"), si = Symbol("withMemo"), fa = Symbol("isMemoSame"), Be = {
  [ls]: "Fragment",
  [Bt]: "Teleport",
  [ds]: "Suspense",
  [Ds]: "KeepAlive",
  [ua]: "BaseTransition",
  [At]: "openBlock",
  [la]: "createBlock",
  [ca]: "createElementBlock",
  [Gs]: "createVNode",
  [Xr]: "createElementVNode",
  [ms]: "createCommentVNode",
  [Wr]: "createTextVNode",
  [Gr]: "createStaticVNode",
  [Fs]: "resolveComponent",
  [Ks]: "resolveDynamicComponent",
  [Kr]: "resolveDirective",
  [Ac]: "resolveFilter",
  [Jr]: "withDirectives",
  [Yr]: "renderList",
  [ha]: "renderSlot",
  [pa]: "createSlots",
  [Js]: "toDisplayString",
  [jt]: "mergeProps",
  [Qr]: "normalizeClass",
  [Zr]: "normalizeStyle",
  [cs]: "normalizeProps",
  [ys]: "guardReactiveProps",
  [ei]: "toHandlers",
  [_r]: "camelize",
  [wc]: "capitalize",
  [Or]: "toHandlerKey",
  [Bs]: "setBlockTracking",
  [vc]: "pushScopeId",
  [Cc]: "popScopeId",
  [ti]: "withCtx",
  [Us]: "unref",
  [$s]: "isRef",
  [si]: "withMemo",
  [fa]: "isMemoSame"
};
function da(t) {
  Object.getOwnPropertySymbols(t).forEach((s) => {
    Be[s] = t[s];
  });
}
const qd = {
  HTML: 0,
  0: "HTML",
  SVG: 1,
  1: "SVG",
  MATH_ML: 2,
  2: "MATH_ML"
}, Hd = {
  ROOT: 0,
  0: "ROOT",
  ELEMENT: 1,
  1: "ELEMENT",
  TEXT: 2,
  2: "TEXT",
  COMMENT: 3,
  3: "COMMENT",
  SIMPLE_EXPRESSION: 4,
  4: "SIMPLE_EXPRESSION",
  INTERPOLATION: 5,
  5: "INTERPOLATION",
  ATTRIBUTE: 6,
  6: "ATTRIBUTE",
  DIRECTIVE: 7,
  7: "DIRECTIVE",
  COMPOUND_EXPRESSION: 8,
  8: "COMPOUND_EXPRESSION",
  IF: 9,
  9: "IF",
  IF_BRANCH: 10,
  10: "IF_BRANCH",
  FOR: 11,
  11: "FOR",
  TEXT_CALL: 12,
  12: "TEXT_CALL",
  VNODE_CALL: 13,
  13: "VNODE_CALL",
  JS_CALL_EXPRESSION: 14,
  14: "JS_CALL_EXPRESSION",
  JS_OBJECT_EXPRESSION: 15,
  15: "JS_OBJECT_EXPRESSION",
  JS_PROPERTY: 16,
  16: "JS_PROPERTY",
  JS_ARRAY_EXPRESSION: 17,
  17: "JS_ARRAY_EXPRESSION",
  JS_FUNCTION_EXPRESSION: 18,
  18: "JS_FUNCTION_EXPRESSION",
  JS_CONDITIONAL_EXPRESSION: 19,
  19: "JS_CONDITIONAL_EXPRESSION",
  JS_CACHE_EXPRESSION: 20,
  20: "JS_CACHE_EXPRESSION",
  JS_BLOCK_STATEMENT: 21,
  21: "JS_BLOCK_STATEMENT",
  JS_TEMPLATE_LITERAL: 22,
  22: "JS_TEMPLATE_LITERAL",
  JS_IF_STATEMENT: 23,
  23: "JS_IF_STATEMENT",
  JS_ASSIGNMENT_EXPRESSION: 24,
  24: "JS_ASSIGNMENT_EXPRESSION",
  JS_SEQUENCE_EXPRESSION: 25,
  25: "JS_SEQUENCE_EXPRESSION",
  JS_RETURN_STATEMENT: 26,
  26: "JS_RETURN_STATEMENT"
}, zd = {
  ELEMENT: 0,
  0: "ELEMENT",
  COMPONENT: 1,
  1: "COMPONENT",
  SLOT: 2,
  2: "SLOT",
  TEMPLATE: 3,
  3: "TEMPLATE"
}, Xd = {
  NOT_CONSTANT: 0,
  0: "NOT_CONSTANT",
  CAN_SKIP_PATCH: 1,
  1: "CAN_SKIP_PATCH",
  CAN_CACHE: 2,
  2: "CAN_CACHE",
  CAN_STRINGIFY: 3,
  3: "CAN_STRINGIFY"
}, ye = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function Ys(t, s = "") {
  return {
    type: 0,
    source: s,
    children: t,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: ye
  };
}
function hs(t, s, r, o, u, c, l, h = !1, p = !1, m = !1, d = ye) {
  return t && (h ? (t.helper(At), t.helper(Ht(t.inSSR, m))) : t.helper(qt(t.inSSR, m)), l && t.helper(Jr)), {
    type: 13,
    tag: s,
    props: r,
    children: o,
    patchFlag: u,
    dynamicProps: c,
    directives: l,
    isBlock: h,
    disableTracking: p,
    isComponent: m,
    loc: d
  };
}
function lt(t, s = ye) {
  return {
    type: 17,
    loc: s,
    elements: t
  };
}
function Ue(t, s = ye) {
  return {
    type: 15,
    loc: s,
    properties: t
  };
}
function le(t, s) {
  return {
    type: 16,
    loc: ye,
    key: ne(t) ? z(t, !0) : t,
    value: s
  };
}
function z(t, s = !1, r = ye, o = 0) {
  return {
    type: 4,
    loc: r,
    content: t,
    isStatic: s,
    constType: s ? 3 : o
  };
}
function kr(t, s) {
  return {
    type: 5,
    loc: s,
    content: ne(t) ? z(t, !1, s) : t
  };
}
function we(t, s = ye) {
  return {
    type: 8,
    loc: s,
    children: t
  };
}
function Q(t, s = [], r = ye) {
  return {
    type: 14,
    loc: r,
    callee: t,
    arguments: s
  };
}
function ze(t, s = void 0, r = !1, o = !1, u = ye) {
  return {
    type: 18,
    params: t,
    returns: s,
    newline: r,
    isSlot: o,
    loc: u
  };
}
function Ge(t, s, r, o = !0) {
  return {
    type: 19,
    test: t,
    consequent: s,
    alternate: r,
    newline: o,
    loc: ye
  };
}
function Ic(t, s, r = !1, o = !1) {
  return {
    type: 20,
    index: t,
    value: s,
    needPauseTracking: r,
    inVOnce: o,
    needArraySpread: !1,
    loc: ye
  };
}
function Qs(t) {
  return {
    type: 21,
    body: t,
    loc: ye
  };
}
function ma(t) {
  return {
    type: 22,
    elements: t,
    loc: ye
  };
}
function Lr(t, s, r) {
  return {
    type: 23,
    test: t,
    consequent: s,
    alternate: r,
    loc: ye
  };
}
function Er(t, s) {
  return {
    type: 24,
    left: t,
    right: s,
    loc: ye
  };
}
function Nc(t) {
  return {
    type: 25,
    expressions: t,
    loc: ye
  };
}
function _c(t) {
  return {
    type: 26,
    returns: t,
    loc: ye
  };
}
function qt(t, s) {
  return t || s ? Gs : Xr;
}
function Ht(t, s) {
  return t || s ? la : ca;
}
function ri(t, { helper: s, removeHelper: r, inSSR: o }) {
  t.isBlock || (t.isBlock = !0, r(qt(o, t.isComponent)), s(At), s(Ht(o, t.isComponent)));
}
var Oc = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((t) => t.charCodeAt(0))
), Wd = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((t) => t.charCodeAt(0))
), Hi;
const Gd = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Un = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Hi = String.fromCodePoint) !== null && Hi !== void 0 ? Hi : function(t) {
    let s = "";
    return t > 65535 && (t -= 65536, s += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), s += String.fromCharCode(t), s;
  }
);
function Kd(t) {
  var s;
  return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (s = Gd.get(t)) !== null && s !== void 0 ? s : t;
}
var ve;
(function(t) {
  t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z";
})(ve || (ve = {}));
const Jd = 32;
var Tt;
(function(t) {
  t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Tt || (Tt = {}));
function $n(t) {
  return t >= ve.ZERO && t <= ve.NINE;
}
function Yd(t) {
  return t >= ve.UPPER_A && t <= ve.UPPER_F || t >= ve.LOWER_A && t <= ve.LOWER_F;
}
function Qd(t) {
  return t >= ve.UPPER_A && t <= ve.UPPER_Z || t >= ve.LOWER_A && t <= ve.LOWER_Z || $n(t);
}
function Zd(t) {
  return t === ve.EQUALS || Qd(t);
}
var Te;
(function(t) {
  t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity";
})(Te || (Te = {}));
var Je;
(function(t) {
  t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute";
})(Je || (Je = {}));
class kc {
  constructor(s, r, o) {
    this.decodeTree = s, this.emitCodePoint = r, this.errors = o, this.state = Te.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Je.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(s) {
    this.decodeMode = s, this.state = Te.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(s, r) {
    switch (this.state) {
      case Te.EntityStart:
        return s.charCodeAt(r) === ve.NUM ? (this.state = Te.NumericStart, this.consumed += 1, this.stateNumericStart(s, r + 1)) : (this.state = Te.NamedEntity, this.stateNamedEntity(s, r));
      case Te.NumericStart:
        return this.stateNumericStart(s, r);
      case Te.NumericDecimal:
        return this.stateNumericDecimal(s, r);
      case Te.NumericHex:
        return this.stateNumericHex(s, r);
      case Te.NamedEntity:
        return this.stateNamedEntity(s, r);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(s, r) {
    return r >= s.length ? -1 : (s.charCodeAt(r) | Jd) === ve.LOWER_X ? (this.state = Te.NumericHex, this.consumed += 1, this.stateNumericHex(s, r + 1)) : (this.state = Te.NumericDecimal, this.stateNumericDecimal(s, r));
  }
  addToNumericResult(s, r, o, u) {
    if (r !== o) {
      const c = o - r;
      this.result = this.result * Math.pow(u, c) + parseInt(s.substr(r, c), u), this.consumed += c;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(s, r) {
    const o = r;
    for (; r < s.length; ) {
      const u = s.charCodeAt(r);
      if ($n(u) || Yd(u))
        r += 1;
      else
        return this.addToNumericResult(s, o, r, 16), this.emitNumericEntity(u, 3);
    }
    return this.addToNumericResult(s, o, r, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(s, r) {
    const o = r;
    for (; r < s.length; ) {
      const u = s.charCodeAt(r);
      if ($n(u))
        r += 1;
      else
        return this.addToNumericResult(s, o, r, 10), this.emitNumericEntity(u, 2);
    }
    return this.addToNumericResult(s, o, r, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(s, r) {
    var o;
    if (this.consumed <= r)
      return (o = this.errors) === null || o === void 0 || o.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (s === ve.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Je.Strict)
      return 0;
    return this.emitCodePoint(Kd(this.result), this.consumed), this.errors && (s !== ve.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(s, r) {
    const { decodeTree: o } = this;
    let u = o[this.treeIndex], c = (u & Tt.VALUE_LENGTH) >> 14;
    for (; r < s.length; r++, this.excess++) {
      const l = s.charCodeAt(r);
      if (this.treeIndex = e0(o, u, this.treeIndex + Math.max(1, c), l), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Je.Attribute && // We shouldn't have consumed any characters after the entity,
        (c === 0 || // And there should be no invalid characters.
        Zd(l)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (u = o[this.treeIndex], c = (u & Tt.VALUE_LENGTH) >> 14, c !== 0) {
        if (l === ve.SEMI)
          return this.emitNamedEntityData(this.treeIndex, c, this.consumed + this.excess);
        this.decodeMode !== Je.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var s;
    const { result: r, decodeTree: o } = this, u = (o[r] & Tt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(r, u, this.consumed), (s = this.errors) === null || s === void 0 || s.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(s, r, o) {
    const { decodeTree: u } = this;
    return this.emitCodePoint(r === 1 ? u[s] & ~Tt.VALUE_LENGTH : u[s + 1], o), r === 3 && this.emitCodePoint(u[s + 2], o), o;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var s;
    switch (this.state) {
      case Te.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Je.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case Te.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case Te.NumericHex:
        return this.emitNumericEntity(0, 3);
      case Te.NumericStart:
        return (s = this.errors) === null || s === void 0 || s.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case Te.EntityStart:
        return 0;
    }
  }
}
function Lc(t) {
  let s = "";
  const r = new kc(t, (o) => s += Un(o));
  return function(u, c) {
    let l = 0, h = 0;
    for (; (h = u.indexOf("&", h)) >= 0; ) {
      s += u.slice(l, h), r.startEntity(c);
      const m = r.write(
        u,
        // Skip the "&"
        h + 1
      );
      if (m < 0) {
        l = h + r.end();
        break;
      }
      l = h + m, h = m === 0 ? l + 1 : l;
    }
    const p = s + u.slice(l);
    return s = "", p;
  };
}
function e0(t, s, r, o) {
  const u = (s & Tt.BRANCH_LENGTH) >> 7, c = s & Tt.JUMP_TABLE;
  if (u === 0)
    return c !== 0 && o === c ? r : -1;
  if (c) {
    const p = o - c;
    return p < 0 || p >= u ? -1 : t[r + p] - 1;
  }
  let l = r, h = l + u - 1;
  for (; l <= h; ) {
    const p = l + h >>> 1, m = t[p];
    if (m < o)
      l = p + 1;
    else if (m > o)
      h = p - 1;
    else
      return t[p + u];
  }
  return -1;
}
const t0 = Lc(Oc);
Lc(Wd);
function s0(t, s = Je.Legacy) {
  return t0(t, s);
}
const Pu = new Uint8Array([123, 123]), Tu = new Uint8Array([125, 125]);
function Au(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function qe(t) {
  return t === 32 || t === 10 || t === 9 || t === 12 || t === 13;
}
function xt(t) {
  return t === 47 || t === 62 || qe(t);
}
function Mr(t) {
  const s = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++)
    s[r] = t.charCodeAt(r);
  return s;
}
const Ne = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class r0 {
  constructor(s, r) {
    this.stack = s, this.cbs = r, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Pu, this.delimiterClose = Tu, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0, this.entityDecoder = new kc(
      Oc,
      (o, u) => this.emitCodePoint(o, u)
    );
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Pu, this.delimiterClose = Tu;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(s) {
    let r = 1, o = s + 1;
    for (let u = this.newlines.length - 1; u >= 0; u--) {
      const c = this.newlines[u];
      if (s > c) {
        r = u + 2, o = s - c;
        break;
      }
    }
    return {
      column: o,
      line: r,
      offset: s
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(s) {
    s === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : s === 38 ? this.startEntity() : !this.inVPre && s === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(s));
  }
  stateInterpolationOpen(s) {
    if (s === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const r = this.index + 1 - this.delimiterOpen.length;
        r > this.sectionStart && this.cbs.ontext(this.sectionStart, r), this.state = 3, this.sectionStart = r;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(s)) : (this.state = 1, this.stateText(s));
  }
  stateInterpolation(s) {
    s === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(s));
  }
  stateInterpolationClose(s) {
    s === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(s));
  }
  stateSpecialStartSequence(s) {
    const r = this.sequenceIndex === this.currentSequence.length;
    if (!(r ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      xt(s)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (s | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!r) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(s);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(s) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (s === 62 || qe(s)) {
        const r = this.index - this.currentSequence.length;
        if (this.sectionStart < r) {
          const o = this.index;
          this.index = r, this.cbs.ontext(this.sectionStart, r), this.index = o;
        }
        this.sectionStart = r + 2, this.stateInClosingTagName(s), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (s | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ne.TitleEnd || this.currentSequence === Ne.TextareaEnd && !this.inSFCRoot ? s === 38 ? this.startEntity() : !this.inVPre && s === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(s)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(s === 60);
  }
  stateCDATASequence(s) {
    s === Ne.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ne.Cdata.length && (this.state = 28, this.currentSequence = Ne.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(s));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(s) {
    for (; ++this.index < this.buffer.length; ) {
      const r = this.buffer.charCodeAt(this.index);
      if (r === 10 && this.newlines.push(this.index), r === s)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(s) {
    s === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ne.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : s !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(s, r) {
    this.enterRCDATA(s, r), this.state = 31;
  }
  enterRCDATA(s, r) {
    this.inRCDATA = !0, this.currentSequence = s, this.sequenceIndex = r;
  }
  stateBeforeTagName(s) {
    s === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : s === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : Au(s) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : s === 116 ? this.state = 30 : this.state = s === 115 ? 29 : 6) : s === 47 ? this.state = 8 : (this.state = 1, this.stateText(s));
  }
  stateInTagName(s) {
    xt(s) && this.handleTagName(s);
  }
  stateInSFCRootTagName(s) {
    if (xt(s)) {
      const r = this.buffer.slice(this.sectionStart, this.index);
      r !== "template" && this.enterRCDATA(Mr("</" + r), 0), this.handleTagName(s);
    }
  }
  handleTagName(s) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(s);
  }
  stateBeforeClosingTagName(s) {
    qe(s) || (s === 62 ? (this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = Au(s) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(s) {
    (s === 62 || qe(s)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(s));
  }
  stateAfterClosingTagName(s) {
    s === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(s) {
    s === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : s === 47 ? (this.state = 7, this.peek() !== 62 && this.cbs.onerr(22, this.index)) : s === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : qe(s) || (s === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(s));
  }
  handleAttrStart(s) {
    s === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : s === 46 || s === 58 || s === 64 || s === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(s) {
    s === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : qe(s) || (this.state = 11, this.stateBeforeAttrName(s));
  }
  stateInAttrName(s) {
    s === 61 || xt(s) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(s)) : (s === 34 || s === 39 || s === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(s) {
    s === 61 || xt(s) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(s)) : s === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : s === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(s) {
    s === 61 || xt(s) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(s)) : s === 91 ? this.state = 15 : s === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(s) {
    s === 93 ? this.state = 14 : (s === 61 || xt(s)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(s), this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(s) {
    s === 61 || xt(s) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(s)) : s === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(s) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(s);
  }
  stateAfterAttrName(s) {
    s === 61 ? this.state = 18 : s === 47 || s === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(s)) : qe(s) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(s));
  }
  stateBeforeAttrValue(s) {
    s === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : s === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : qe(s) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(s));
  }
  handleInAttrValue(s, r) {
    s === r ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      r === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11) : s === 38 && this.startEntity();
  }
  stateInAttrValueDoubleQuotes(s) {
    this.handleInAttrValue(s, 34);
  }
  stateInAttrValueSingleQuotes(s) {
    this.handleInAttrValue(s, 39);
  }
  stateInAttrValueNoQuotes(s) {
    qe(s) || s === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(s)) : s === 34 || s === 39 || s === 60 || s === 61 || s === 96 ? this.cbs.onerr(
      18,
      this.index
    ) : s === 38 && this.startEntity();
  }
  stateBeforeDeclaration(s) {
    s === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = s === 45 ? 25 : 23;
  }
  stateInDeclaration(s) {
    (s === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(s) {
    (s === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(s) {
    s === 45 ? (this.state = 28, this.currentSequence = Ne.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(s) {
    (s === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(s) {
    s === Ne.ScriptEnd[3] ? this.startSpecial(Ne.ScriptEnd, 4) : s === Ne.StyleEnd[3] ? this.startSpecial(Ne.StyleEnd, 4) : (this.state = 6, this.stateInTagName(s));
  }
  stateBeforeSpecialT(s) {
    s === Ne.TitleEnd[3] ? this.startSpecial(Ne.TitleEnd, 4) : s === Ne.TextareaEnd[3] ? this.startSpecial(Ne.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(s));
  }
  startEntity() {
    this.baseState = this.state, this.state = 33, this.entityStart = this.index, this.entityDecoder.startEntity(
      this.baseState === 1 || this.baseState === 32 ? Je.Legacy : Je.Attribute
    );
  }
  stateInEntity() {
    {
      const s = this.entityDecoder.write(this.buffer, this.index);
      s >= 0 ? (this.state = this.baseState, s === 0 && (this.index = this.entityStart)) : this.index = this.buffer.length - 1;
    }
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(s) {
    for (this.buffer = s; this.index < this.buffer.length; ) {
      const r = this.buffer.charCodeAt(this.index);
      switch (r === 10 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(r);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(r);
          break;
        }
        case 3: {
          this.stateInterpolation(r);
          break;
        }
        case 4: {
          this.stateInterpolationClose(r);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(r);
          break;
        }
        case 32: {
          this.stateInRCDATA(r);
          break;
        }
        case 26: {
          this.stateCDATASequence(r);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(r);
          break;
        }
        case 12: {
          this.stateInAttrName(r);
          break;
        }
        case 13: {
          this.stateInDirName(r);
          break;
        }
        case 14: {
          this.stateInDirArg(r);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(r);
          break;
        }
        case 16: {
          this.stateInDirModifier(r);
          break;
        }
        case 28: {
          this.stateInCommentLike(r);
          break;
        }
        case 27: {
          this.stateInSpecialComment(r);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(r);
          break;
        }
        case 6: {
          this.stateInTagName(r);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(r);
          break;
        }
        case 9: {
          this.stateInClosingTagName(r);
          break;
        }
        case 5: {
          this.stateBeforeTagName(r);
          break;
        }
        case 17: {
          this.stateAfterAttrName(r);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(r);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(r);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(r);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(r);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(r);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(r);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(r);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(r);
          break;
        }
        case 23: {
          this.stateInDeclaration(r);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(r);
          break;
        }
        case 25: {
          this.stateBeforeComment(r);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(r);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.state === 33 && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const s = this.buffer.length;
    this.sectionStart >= s || (this.state === 28 ? this.currentSequence === Ne.CdataEnd ? this.cbs.oncdata(this.sectionStart, s) : this.cbs.oncomment(this.sectionStart, s) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, s));
  }
  emitCodePoint(s, r) {
    this.baseState !== 1 && this.baseState !== 32 ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.onattribentity(
      Un(s),
      this.entityStart,
      this.sectionStart
    )) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.ontextentity(
      Un(s),
      this.entityStart,
      this.sectionStart
    ));
  }
}
const i0 = {
  COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT",
  COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC",
  COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER",
  COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE",
  COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE",
  COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE",
  COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE",
  COMPILER_FILTERS: "COMPILER_FILTERS"
}, n0 = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (t) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${t}.sync\` should be changed to \`v-model:${t}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function Vn(t, { compatConfig: s }) {
  const r = s && s[t];
  return t === "MODE" ? r || 3 : r;
}
function a0(t, s) {
  const r = Vn("MODE", s), o = Vn(t, s);
  return r === 3 ? o === !0 : o !== !1;
}
function o0(t, s, r, ...o) {
  const u = a0(t, s);
  return u && Mc(t, s, r, ...o), u;
}
function Mc(t, s, r, ...o) {
  if (Vn(t, s) === "suppress-warning")
    return;
  const { message: c, link: l } = n0[t], h = `(deprecation ${t}) ${typeof c == "function" ? c(...o) : c}${l ? `
  Details: ${l}` : ""}`, p = new SyntaxError(h);
  p.code = t, r && (p.loc = r), s.onWarn(p);
}
function ya(t) {
  throw t;
}
function Rc(t) {
  console.warn(`[Vue warn] ${t.message}`);
}
function ae(t, s, r, o) {
  const u = (r || ga)[t] + (o || ""), c = new SyntaxError(String(u));
  return c.code = t, c.loc = s, c;
}
const u0 = {
  ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0,
  0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT",
  CDATA_IN_HTML_CONTENT: 1,
  1: "CDATA_IN_HTML_CONTENT",
  DUPLICATE_ATTRIBUTE: 2,
  2: "DUPLICATE_ATTRIBUTE",
  END_TAG_WITH_ATTRIBUTES: 3,
  3: "END_TAG_WITH_ATTRIBUTES",
  END_TAG_WITH_TRAILING_SOLIDUS: 4,
  4: "END_TAG_WITH_TRAILING_SOLIDUS",
  EOF_BEFORE_TAG_NAME: 5,
  5: "EOF_BEFORE_TAG_NAME",
  EOF_IN_CDATA: 6,
  6: "EOF_IN_CDATA",
  EOF_IN_COMMENT: 7,
  7: "EOF_IN_COMMENT",
  EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8,
  8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",
  EOF_IN_TAG: 9,
  9: "EOF_IN_TAG",
  INCORRECTLY_CLOSED_COMMENT: 10,
  10: "INCORRECTLY_CLOSED_COMMENT",
  INCORRECTLY_OPENED_COMMENT: 11,
  11: "INCORRECTLY_OPENED_COMMENT",
  INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12,
  12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME",
  MISSING_ATTRIBUTE_VALUE: 13,
  13: "MISSING_ATTRIBUTE_VALUE",
  MISSING_END_TAG_NAME: 14,
  14: "MISSING_END_TAG_NAME",
  MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15,
  15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",
  NESTED_COMMENT: 16,
  16: "NESTED_COMMENT",
  UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17,
  17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",
  UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18,
  18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",
  UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19,
  19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",
  UNEXPECTED_NULL_CHARACTER: 20,
  20: "UNEXPECTED_NULL_CHARACTER",
  UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21,
  21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",
  UNEXPECTED_SOLIDUS_IN_TAG: 22,
  22: "UNEXPECTED_SOLIDUS_IN_TAG",
  X_INVALID_END_TAG: 23,
  23: "X_INVALID_END_TAG",
  X_MISSING_END_TAG: 24,
  24: "X_MISSING_END_TAG",
  X_MISSING_INTERPOLATION_END: 25,
  25: "X_MISSING_INTERPOLATION_END",
  X_MISSING_DIRECTIVE_NAME: 26,
  26: "X_MISSING_DIRECTIVE_NAME",
  X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27,
  27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",
  X_V_IF_NO_EXPRESSION: 28,
  28: "X_V_IF_NO_EXPRESSION",
  X_V_IF_SAME_KEY: 29,
  29: "X_V_IF_SAME_KEY",
  X_V_ELSE_NO_ADJACENT_IF: 30,
  30: "X_V_ELSE_NO_ADJACENT_IF",
  X_V_FOR_NO_EXPRESSION: 31,
  31: "X_V_FOR_NO_EXPRESSION",
  X_V_FOR_MALFORMED_EXPRESSION: 32,
  32: "X_V_FOR_MALFORMED_EXPRESSION",
  X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33,
  33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT",
  X_V_BIND_NO_EXPRESSION: 34,
  34: "X_V_BIND_NO_EXPRESSION",
  X_V_ON_NO_EXPRESSION: 35,
  35: "X_V_ON_NO_EXPRESSION",
  X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36,
  36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",
  X_V_SLOT_MIXED_SLOT_USAGE: 37,
  37: "X_V_SLOT_MIXED_SLOT_USAGE",
  X_V_SLOT_DUPLICATE_SLOT_NAMES: 38,
  38: "X_V_SLOT_DUPLICATE_SLOT_NAMES",
  X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39,
  39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",
  X_V_SLOT_MISPLACED: 40,
  40: "X_V_SLOT_MISPLACED",
  X_V_MODEL_NO_EXPRESSION: 41,
  41: "X_V_MODEL_NO_EXPRESSION",
  X_V_MODEL_MALFORMED_EXPRESSION: 42,
  42: "X_V_MODEL_MALFORMED_EXPRESSION",
  X_V_MODEL_ON_SCOPE_VARIABLE: 43,
  43: "X_V_MODEL_ON_SCOPE_VARIABLE",
  X_V_MODEL_ON_PROPS: 44,
  44: "X_V_MODEL_ON_PROPS",
  X_INVALID_EXPRESSION: 45,
  45: "X_INVALID_EXPRESSION",
  X_KEEP_ALIVE_INVALID_CHILDREN: 46,
  46: "X_KEEP_ALIVE_INVALID_CHILDREN",
  X_PREFIX_ID_NOT_SUPPORTED: 47,
  47: "X_PREFIX_ID_NOT_SUPPORTED",
  X_MODULE_MODE_NOT_SUPPORTED: 48,
  48: "X_MODULE_MODE_NOT_SUPPORTED",
  X_CACHE_HANDLER_NOT_SUPPORTED: 49,
  49: "X_CACHE_HANDLER_NOT_SUPPORTED",
  X_SCOPE_ID_NOT_SUPPORTED: 50,
  50: "X_SCOPE_ID_NOT_SUPPORTED",
  X_VNODE_HOOKS: 51,
  51: "X_VNODE_HOOKS",
  X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 52,
  52: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT",
  __EXTEND_POINT__: 53,
  53: "__EXTEND_POINT__"
}, ga = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
};
function Dc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ba(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var s = t.default;
  if (typeof s == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(s, arguments, this.constructor) : s.apply(this, arguments);
    };
    r.prototype = s.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(o) {
    var u = Object.getOwnPropertyDescriptor(t, o);
    Object.defineProperty(r, o, u.get ? u : {
      enumerable: !0,
      get: function() {
        return t[o];
      }
    });
  }), r;
}
var es = {}, wu;
function l0() {
  if (wu) return es;
  wu = 1, Object.defineProperty(es, "__esModule", {
    value: !0
  });
  function t(S, i) {
    if (S == null) return {};
    var e = {};
    for (var n in S) if ({}.hasOwnProperty.call(S, n)) {
      if (i.indexOf(n) !== -1) continue;
      e[n] = S[n];
    }
    return e;
  }
  class s {
    constructor(i, e, n) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = i, this.column = e, this.index = n;
    }
  }
  class r {
    constructor(i, e) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = i, this.end = e;
    }
  }
  function o(S, i) {
    const {
      line: e,
      column: n,
      index: a
    } = S;
    return new s(e, n + i, a + i);
  }
  const u = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
  var c = {
    ImportMetaOutsideModule: {
      message: `import.meta may appear only with 'sourceType: "module"'`,
      code: u
    },
    ImportOutsideModule: {
      message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
      code: u
    }
  };
  const l = {
    ArrayPattern: "array destructuring pattern",
    AssignmentExpression: "assignment expression",
    AssignmentPattern: "assignment expression",
    ArrowFunctionExpression: "arrow function expression",
    ConditionalExpression: "conditional expression",
    CatchClause: "catch clause",
    ForOfStatement: "for-of statement",
    ForInStatement: "for-in statement",
    ForStatement: "for-loop",
    FormalParameters: "function parameter list",
    Identifier: "identifier",
    ImportSpecifier: "import specifier",
    ImportDefaultSpecifier: "import default specifier",
    ImportNamespaceSpecifier: "import namespace specifier",
    ObjectPattern: "object destructuring pattern",
    ParenthesizedExpression: "parenthesized expression",
    RestElement: "rest element",
    UpdateExpression: {
      true: "prefix operation",
      false: "postfix operation"
    },
    VariableDeclarator: "variable declaration",
    YieldExpression: "yield expression"
  }, h = (S) => S.type === "UpdateExpression" ? l.UpdateExpression[`${S.prefix}`] : l[S.type];
  var p = {
    AccessorIsGenerator: ({
      kind: S
    }) => `A ${S}ter cannot be a generator.`,
    ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
    AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
    AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
    AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
    AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
    AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
    AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
    BadGetterArity: "A 'get' accessor must not have any formal parameters.",
    BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
    BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
    ConstructorClassField: "Classes may not have a field named 'constructor'.",
    ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
    ConstructorIsAccessor: "Class constructor may not be an accessor.",
    ConstructorIsAsync: "Constructor can't be an async function.",
    ConstructorIsGenerator: "Constructor can't be a generator.",
    DeclarationMissingInitializer: ({
      kind: S
    }) => `Missing initializer in ${S} declaration.`,
    DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
    DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
    DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
    DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
    DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
    DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
    DecoratorStaticBlock: "Decorators can't be used with a static block.",
    DeferImportRequiresNamespace: 'Only `import defer * as x from "./module"` is valid.',
    DeletePrivateField: "Deleting a private field is not allowed.",
    DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
    DuplicateConstructor: "Duplicate constructor in the same class.",
    DuplicateDefaultExport: "Only one default export allowed per module.",
    DuplicateExport: ({
      exportName: S
    }) => `\`${S}\` has already been exported. Exported identifiers must be unique.`,
    DuplicateProto: "Redefinition of __proto__ property.",
    DuplicateRegExpFlags: "Duplicate regular expression flag.",
    DynamicImportPhaseRequiresImportExpressions: ({
      phase: S
    }) => `'import.${S}(...)' can only be parsed when using the 'createImportExpressions' option.`,
    ElementAfterRest: "Rest element must be last element.",
    EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
    ExportBindingIsString: ({
      localName: S,
      exportName: i
    }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${S}' as '${i}' } from 'some-module'\`?`,
    ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
    ForInOfLoopInitializer: ({
      type: S
    }) => `'${S === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
    ForInUsing: "For-in loop may not start with 'using' declaration.",
    ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
    ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
    GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
    IllegalBreakContinue: ({
      type: S
    }) => `Unsyntactic ${S === "BreakStatement" ? "break" : "continue"}.`,
    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
    IllegalReturn: "'return' outside of function.",
    ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",
    ImportBindingIsString: ({
      importName: S
    }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${S}" as foo }\`?`,
    ImportCallArity: "`import()` requires exactly one or two arguments.",
    ImportCallNotNewExpression: "Cannot use new with import(...).",
    ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
    ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
    ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
    ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
    IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
    InvalidBigIntLiteral: "Invalid BigIntLiteral.",
    InvalidCodePoint: "Code point out of bounds.",
    InvalidCoverInitializedName: "Invalid shorthand property initializer.",
    InvalidDecimal: "Invalid decimal.",
    InvalidDigit: ({
      radix: S
    }) => `Expected number in radix ${S}.`,
    InvalidEscapeSequence: "Bad character escape sequence.",
    InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
    InvalidEscapedReservedWord: ({
      reservedWord: S
    }) => `Escape sequence in keyword ${S}.`,
    InvalidIdentifier: ({
      identifierName: S
    }) => `Invalid identifier ${S}.`,
    InvalidLhs: ({
      ancestor: S
    }) => `Invalid left-hand side in ${h(S)}.`,
    InvalidLhsBinding: ({
      ancestor: S
    }) => `Binding invalid left-hand side in ${h(S)}.`,
    InvalidLhsOptionalChaining: ({
      ancestor: S
    }) => `Invalid optional chaining in the left-hand side of ${h(S)}.`,
    InvalidNumber: "Invalid number.",
    InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
    InvalidOrUnexpectedToken: ({
      unexpected: S
    }) => `Unexpected character '${S}'.`,
    InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
    InvalidPrivateFieldResolution: ({
      identifierName: S
    }) => `Private name #${S} is not defined.`,
    InvalidPropertyBindingPattern: "Binding member expression.",
    InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
    InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
    LabelRedeclaration: ({
      labelName: S
    }) => `Label '${S}' is already declared.`,
    LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
    LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
    MalformedRegExpFlags: "Invalid regular expression flag.",
    MissingClassName: "A class name is required.",
    MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
    MissingSemicolon: "Missing semicolon.",
    MissingPlugin: ({
      missingPlugin: S
    }) => `This experimental syntax requires enabling the parser plugin: ${S.map((i) => JSON.stringify(i)).join(", ")}.`,
    MissingOneOfPlugins: ({
      missingPlugin: S
    }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${S.map((i) => JSON.stringify(i)).join(", ")}.`,
    MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
    MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
    ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
    ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
    ModuleAttributesWithDuplicateKeys: ({
      key: S
    }) => `Duplicate key "${S}" is not allowed in module attributes.`,
    ModuleExportNameHasLoneSurrogate: ({
      surrogateCharCode: S
    }) => `An export name cannot include a lone surrogate, found '\\u${S.toString(16)}'.`,
    ModuleExportUndefined: ({
      localName: S
    }) => `Export '${S}' is not defined.`,
    MultipleDefaultsInSwitch: "Multiple default clauses.",
    NewlineAfterThrow: "Illegal newline after throw.",
    NoCatchOrFinally: "Missing catch or finally clause.",
    NumberIdentifier: "Identifier directly after number.",
    NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
    ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
    OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
    OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
    OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
    ParamDupe: "Argument name clash.",
    PatternHasAccessor: "Object pattern can't contain getter or setter.",
    PatternHasMethod: "Object pattern can't contain methods.",
    PrivateInExpectedIn: ({
      identifierName: S
    }) => `Private names are only allowed in property accesses (\`obj.#${S}\`) or in \`in\` expressions (\`#${S} in obj\`).`,
    PrivateNameRedeclaration: ({
      identifierName: S
    }) => `Duplicate private name #${S}.`,
    RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    RecordNoProto: "'__proto__' is not allowed in Record expressions.",
    RestTrailingComma: "Unexpected trailing comma after rest element.",
    SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
    SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
    SourcePhaseImportRequiresDefault: 'Only `import source x from "./module"` is valid.',
    StaticPrototype: "Classes may not have static property named prototype.",
    SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
    SuperPrivateField: "Private fields can't be accessed on super.",
    TrailingDecorator: "Decorators must be attached to a class element.",
    TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
    UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
    UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
    UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
    UnexpectedKeyword: ({
      keyword: S
    }) => `Unexpected keyword '${S}'.`,
    UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
    UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
    UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
    UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
    UnexpectedPrivateField: "Unexpected private name.",
    UnexpectedReservedWord: ({
      reservedWord: S
    }) => `Unexpected reserved word '${S}'.`,
    UnexpectedSuper: "'super' is only allowed in object methods and classes.",
    UnexpectedToken: ({
      expected: S,
      unexpected: i
    }) => `Unexpected token${i ? ` '${i}'.` : ""}${S ? `, expected "${S}"` : ""}`,
    UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
    UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.",
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
    UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
    UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
    UnsupportedMetaProperty: ({
      target: S,
      onlyValidPropertyName: i
    }) => `The only valid meta property for ${S} is ${S}.${i}.`,
    UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
    UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
    UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
    UnterminatedComment: "Unterminated comment.",
    UnterminatedRegExp: "Unterminated regular expression.",
    UnterminatedString: "Unterminated string constant.",
    UnterminatedTemplate: "Unterminated template.",
    UsingDeclarationExport: "Using declaration cannot be exported.",
    UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
    VarRedeclaration: ({
      identifierName: S
    }) => `Identifier '${S}' has already been declared.`,
    YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
    YieldInParameter: "Yield expression is not allowed in formal parameters.",
    YieldNotInGeneratorFunction: "'yield' is only allowed within generator functions.",
    ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
  }, m = {
    StrictDelete: "Deleting local variable in strict mode.",
    StrictEvalArguments: ({
      referenceName: S
    }) => `Assigning to '${S}' in strict mode.`,
    StrictEvalArgumentsBinding: ({
      bindingName: S
    }) => `Binding '${S}' in strict mode.`,
    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
    StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
    StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
    StrictWith: "'with' in strict mode."
  };
  const d = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
  var b = Object.assign({
    PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
    PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
    PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
    PipeTopicUnconfiguredToken: ({
      token: S
    }) => `Invalid topic token ${S}. In order to use ${S} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${S}" }.`,
    PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
    PipeUnparenthesizedBody: ({
      type: S
    }) => `Hack-style pipe body cannot be an unparenthesized ${h({
      type: S
    })}; please wrap it in parentheses.`
  }, {
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
    PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
  });
  const g = ["message"];
  function x(S, i, e) {
    Object.defineProperty(S, i, {
      enumerable: !1,
      configurable: !0,
      value: e
    });
  }
  function T({
    toMessage: S,
    code: i,
    reasonCode: e,
    syntaxPlugin: n
  }) {
    const a = e === "MissingPlugin" || e === "MissingOneOfPlugins";
    {
      const f = {
        AccessorCannotDeclareThisParameter: "AccesorCannotDeclareThisParameter",
        AccessorCannotHaveTypeParameters: "AccesorCannotHaveTypeParameters",
        ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference",
        SetAccessorCannotHaveOptionalParameter: "SetAccesorCannotHaveOptionalParameter",
        SetAccessorCannotHaveRestParameter: "SetAccesorCannotHaveRestParameter",
        SetAccessorCannotHaveReturnType: "SetAccesorCannotHaveReturnType"
      };
      f[e] && (e = f[e]);
    }
    return function f(E, A) {
      const w = new SyntaxError();
      return w.code = i, w.reasonCode = e, w.loc = E, w.pos = E.index, w.syntaxPlugin = n, a && (w.missingPlugin = A.missingPlugin), x(w, "clone", function(k = {}) {
        var B;
        const {
          line: q,
          column: H,
          index: G
        } = (B = k.loc) != null ? B : E;
        return f(new s(q, H, G), Object.assign({}, A, k.details));
      }), x(w, "details", A), Object.defineProperty(w, "message", {
        configurable: !0,
        get() {
          const _ = `${S(A)} (${E.line}:${E.column})`;
          return this.message = _, _;
        },
        set(_) {
          Object.defineProperty(this, "message", {
            value: _,
            writable: !0
          });
        }
      }), w;
    };
  }
  function P(S, i) {
    if (Array.isArray(S))
      return (n) => P(n, S[0]);
    const e = {};
    for (const n of Object.keys(S)) {
      const a = S[n], f = typeof a == "string" ? {
        message: () => a
      } : typeof a == "function" ? {
        message: a
      } : a, {
        message: E
      } = f, A = t(f, g), w = typeof E == "string" ? () => E : E;
      e[n] = T(Object.assign({
        code: "BABEL_PARSER_SYNTAX_ERROR",
        reasonCode: n,
        toMessage: w
      }, i ? {
        syntaxPlugin: i
      } : {}, A));
    }
    return e;
  }
  const y = Object.assign({}, P(c), P(p), P(m), P`pipelineOperator`(b));
  function C() {
    return {
      sourceType: "script",
      sourceFilename: void 0,
      startIndex: 0,
      startColumn: 0,
      startLine: 1,
      allowAwaitOutsideFunction: !1,
      allowReturnOutsideFunction: !1,
      allowNewTargetOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowSuperOutsideMethod: !1,
      allowUndeclaredExports: !1,
      allowYieldOutsideFunction: !1,
      plugins: [],
      strictMode: null,
      ranges: !1,
      tokens: !1,
      createImportExpressions: !1,
      createParenthesizedExpressions: !1,
      errorRecovery: !1,
      attachComment: !0,
      annexB: !0
    };
  }
  function N(S) {
    const i = C();
    if (S == null)
      return i;
    if (S.annexB != null && S.annexB !== !1)
      throw new Error("The `annexB` option can only be set to `false`.");
    for (const e of Object.keys(i))
      S[e] != null && (i[e] = S[e]);
    if (i.startLine === 1)
      S.startIndex == null && i.startColumn > 0 ? i.startIndex = i.startColumn : S.startColumn == null && i.startIndex > 0 && (i.startColumn = i.startIndex);
    else if ((S.startColumn == null || S.startIndex == null) && S.startIndex != null)
      throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");
    return i;
  }
  const {
    defineProperty: L
  } = Object, F = (S, i) => {
    S && L(S, i, {
      enumerable: !1,
      value: S[i]
    });
  };
  function M(S) {
    return F(S.loc.start, "index"), F(S.loc.end, "index"), S;
  }
  var D = (S) => class extends S {
    parse() {
      const e = M(super.parse());
      return this.optionFlags & 256 && (e.tokens = e.tokens.map(M)), e;
    }
    parseRegExpLiteral({
      pattern: e,
      flags: n
    }) {
      let a = null;
      try {
        a = new RegExp(e, n);
      } catch {
      }
      const f = this.estreeParseLiteral(a);
      return f.regex = {
        pattern: e,
        flags: n
      }, f;
    }
    parseBigIntLiteral(e) {
      let n;
      try {
        n = BigInt(e);
      } catch {
        n = null;
      }
      const a = this.estreeParseLiteral(n);
      return a.bigint = String(a.value || e), a;
    }
    parseDecimalLiteral(e) {
      const a = this.estreeParseLiteral(null);
      return a.decimal = String(a.value || e), a;
    }
    estreeParseLiteral(e) {
      return this.parseLiteral(e, "Literal");
    }
    parseStringLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNumericLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNullLiteral() {
      return this.estreeParseLiteral(null);
    }
    parseBooleanLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    estreeParseChainExpression(e, n) {
      const a = this.startNodeAtNode(e);
      return a.expression = e, this.finishNodeAt(a, "ChainExpression", n);
    }
    directiveToStmt(e) {
      const n = e.value;
      delete e.value, this.castNodeTo(n, "Literal"), n.raw = n.extra.raw, n.value = n.extra.expressionValue;
      const a = this.castNodeTo(e, "ExpressionStatement");
      return a.expression = n, a.directive = n.extra.rawValue, delete n.extra, a;
    }
    fillOptionalPropertiesForTSESLint(e) {
    }
    cloneEstreeStringLiteral(e) {
      const {
        start: n,
        end: a,
        loc: f,
        range: E,
        raw: A,
        value: w
      } = e, _ = Object.create(e.constructor.prototype);
      return _.type = "Literal", _.start = n, _.end = a, _.loc = f, _.range = E, _.raw = A, _.value = w, _;
    }
    initFunction(e, n) {
      super.initFunction(e, n), e.expression = !1;
    }
    checkDeclaration(e) {
      e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
    }
    getObjectOrClassMethodParams(e) {
      return e.value.params;
    }
    isValidDirective(e) {
      var n;
      return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((n = e.expression.extra) != null && n.parenthesized);
    }
    parseBlockBody(e, n, a, f, E) {
      super.parseBlockBody(e, n, a, f, E);
      const A = e.directives.map((w) => this.directiveToStmt(w));
      e.body = A.concat(e.body), delete e.directives;
    }
    parsePrivateName() {
      const e = super.parsePrivateName();
      return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
    }
    convertPrivateNameToPrivateIdentifier(e) {
      const n = super.getPrivateNameSV(e);
      return e = e, delete e.id, e.name = n, this.castNodeTo(e, "PrivateIdentifier");
    }
    isPrivateName(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
    }
    getPrivateNameSV(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
    }
    parseLiteral(e, n) {
      const a = super.parseLiteral(e, n);
      return a.raw = a.extra.raw, delete a.extra, a;
    }
    parseFunctionBody(e, n, a = !1) {
      super.parseFunctionBody(e, n, a), e.expression = e.body.type !== "BlockStatement";
    }
    parseMethod(e, n, a, f, E, A, w = !1) {
      let _ = this.startNode();
      _.kind = e.kind, _ = super.parseMethod(_, n, a, f, E, A, w), delete _.kind;
      const {
        typeParameters: k
      } = e;
      k && (delete e.typeParameters, _.typeParameters = k, this.resetStartLocationFromNode(_, k));
      const B = this.castNodeTo(_, "FunctionExpression");
      return e.value = B, A === "ClassPrivateMethod" && (e.computed = !1), A === "ObjectMethod" ? (e.kind === "method" && (e.kind = "init"), e.shorthand = !1, this.finishNode(e, "Property")) : this.finishNode(e, "MethodDefinition");
    }
    nameIsConstructor(e) {
      return e.type === "Literal" ? e.value === "constructor" : super.nameIsConstructor(e);
    }
    parseClassProperty(...e) {
      const n = super.parseClassProperty(...e);
      return this.getPluginOption("estree", "classFeatures") && this.castNodeTo(n, "PropertyDefinition"), n;
    }
    parseClassPrivateProperty(...e) {
      const n = super.parseClassPrivateProperty(...e);
      return this.getPluginOption("estree", "classFeatures") && (this.castNodeTo(n, "PropertyDefinition"), n.computed = !1), n;
    }
    parseClassAccessorProperty(e) {
      const n = super.parseClassAccessorProperty(e);
      return this.getPluginOption("estree", "classFeatures") && (n.abstract && this.hasPlugin("typescript") ? (delete n.abstract, this.castNodeTo(n, "TSAbstractAccessorProperty")) : this.castNodeTo(n, "AccessorProperty")), n;
    }
    parseObjectProperty(e, n, a, f) {
      const E = super.parseObjectProperty(e, n, a, f);
      return E && (E.kind = "init", this.castNodeTo(E, "Property")), E;
    }
    finishObjectProperty(e) {
      return e.kind = "init", this.finishNode(e, "Property");
    }
    isValidLVal(e, n, a) {
      return e === "Property" ? "value" : super.isValidLVal(e, n, a);
    }
    isAssignable(e, n) {
      return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, n) : super.isAssignable(e, n);
    }
    toAssignable(e, n = !1) {
      if (e != null && this.isObjectProperty(e)) {
        const {
          key: a,
          value: f
        } = e;
        this.isPrivateName(a) && this.classScope.usePrivateName(this.getPrivateNameSV(a), a.loc.start), this.toAssignable(f, n);
      } else
        super.toAssignable(e, n);
    }
    toAssignableObjectExpressionProp(e, n, a) {
      e.type === "Property" && (e.kind === "get" || e.kind === "set") ? this.raise(y.PatternHasAccessor, e.key) : e.type === "Property" && e.method ? this.raise(y.PatternHasMethod, e.key) : super.toAssignableObjectExpressionProp(e, n, a);
    }
    finishCallExpression(e, n) {
      const a = super.finishCallExpression(e, n);
      if (a.callee.type === "Import") {
        var f, E;
        this.castNodeTo(a, "ImportExpression"), a.source = a.arguments[0], a.options = (f = a.arguments[1]) != null ? f : null, a.attributes = (E = a.arguments[1]) != null ? E : null, delete a.arguments, delete a.callee;
      } else a.type === "OptionalCallExpression" ? this.castNodeTo(a, "CallExpression") : a.optional = !1;
      return a;
    }
    toReferencedArguments(e) {
      e.type !== "ImportExpression" && super.toReferencedArguments(e);
    }
    parseExport(e, n) {
      const a = this.state.lastTokStartLoc, f = super.parseExport(e, n);
      switch (f.type) {
        case "ExportAllDeclaration":
          f.exported = null;
          break;
        case "ExportNamedDeclaration":
          f.specifiers.length === 1 && f.specifiers[0].type === "ExportNamespaceSpecifier" && (this.castNodeTo(f, "ExportAllDeclaration"), f.exported = f.specifiers[0].exported, delete f.specifiers);
        case "ExportDefaultDeclaration":
          {
            var E;
            const {
              declaration: A
            } = f;
            (A == null ? void 0 : A.type) === "ClassDeclaration" && ((E = A.decorators) == null ? void 0 : E.length) > 0 && A.start === f.start && this.resetStartLocation(f, a);
          }
          break;
      }
      return f;
    }
    stopParseSubscript(e, n) {
      const a = super.stopParseSubscript(e, n);
      return n.optionalChainMember ? this.estreeParseChainExpression(a, e.loc.end) : a;
    }
    parseMember(e, n, a, f, E) {
      const A = super.parseMember(e, n, a, f, E);
      return A.type === "OptionalMemberExpression" ? this.castNodeTo(A, "MemberExpression") : A.optional = !1, A;
    }
    isOptionalMemberExpression(e) {
      return e.type === "ChainExpression" ? e.expression.type === "MemberExpression" : super.isOptionalMemberExpression(e);
    }
    hasPropertyAsPrivateName(e) {
      return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
    }
    isObjectProperty(e) {
      return e.type === "Property" && e.kind === "init" && !e.method;
    }
    isObjectMethod(e) {
      return e.type === "Property" && (e.method || e.kind === "get" || e.kind === "set");
    }
    castNodeTo(e, n) {
      const a = super.castNodeTo(e, n);
      return this.fillOptionalPropertiesForTSESLint(a), a;
    }
    cloneIdentifier(e) {
      const n = super.cloneIdentifier(e);
      return this.fillOptionalPropertiesForTSESLint(n), n;
    }
    cloneStringLiteral(e) {
      return e.type === "Literal" ? this.cloneEstreeStringLiteral(e) : super.cloneStringLiteral(e);
    }
    finishNodeAt(e, n, a) {
      return M(super.finishNodeAt(e, n, a));
    }
    finishNode(e, n) {
      const a = super.finishNode(e, n);
      return this.fillOptionalPropertiesForTSESLint(a), a;
    }
    resetStartLocation(e, n) {
      super.resetStartLocation(e, n), M(e);
    }
    resetEndLocation(e, n = this.state.lastTokEndLoc) {
      super.resetEndLocation(e, n), M(e);
    }
  };
  class U {
    constructor(i, e) {
      this.token = void 0, this.preserveSpace = void 0, this.token = i, this.preserveSpace = !!e;
    }
  }
  const v = {
    brace: new U("{"),
    j_oTag: new U("<tag"),
    j_cTag: new U("</tag"),
    j_expr: new U("<tag>...</tag>", !0)
  };
  v.template = new U("`", !0);
  const I = !0, O = !0, R = !0, j = !0, W = !0, ee = !0;
  class $ {
    constructor(i, e = {}) {
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = i, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
    }
  }
  const pe = /* @__PURE__ */ new Map();
  function X(S, i = {}) {
    i.keyword = S;
    const e = J(S, i);
    return pe.set(S, e), e;
  }
  function oe(S, i) {
    return J(S, {
      beforeExpr: I,
      binop: i
    });
  }
  let Re = -1;
  const de = [], Ke = [], Kt = [], Z = [], It = [], dt = [];
  function J(S, i = {}) {
    var e, n, a, f;
    return ++Re, Ke.push(S), Kt.push((e = i.binop) != null ? e : -1), Z.push((n = i.beforeExpr) != null ? n : !1), It.push((a = i.startsExpr) != null ? a : !1), dt.push((f = i.prefix) != null ? f : !1), de.push(new $(S, i)), Re;
  }
  function te(S, i = {}) {
    var e, n, a, f;
    return ++Re, pe.set(S, Re), Ke.push(S), Kt.push((e = i.binop) != null ? e : -1), Z.push((n = i.beforeExpr) != null ? n : !1), It.push((a = i.startsExpr) != null ? a : !1), dt.push((f = i.prefix) != null ? f : !1), de.push(new $("name", i)), Re;
  }
  const vi = {
    bracketL: J("[", {
      beforeExpr: I,
      startsExpr: O
    }),
    bracketHashL: J("#[", {
      beforeExpr: I,
      startsExpr: O
    }),
    bracketBarL: J("[|", {
      beforeExpr: I,
      startsExpr: O
    }),
    bracketR: J("]"),
    bracketBarR: J("|]"),
    braceL: J("{", {
      beforeExpr: I,
      startsExpr: O
    }),
    braceBarL: J("{|", {
      beforeExpr: I,
      startsExpr: O
    }),
    braceHashL: J("#{", {
      beforeExpr: I,
      startsExpr: O
    }),
    braceR: J("}"),
    braceBarR: J("|}"),
    parenL: J("(", {
      beforeExpr: I,
      startsExpr: O
    }),
    parenR: J(")"),
    comma: J(",", {
      beforeExpr: I
    }),
    semi: J(";", {
      beforeExpr: I
    }),
    colon: J(":", {
      beforeExpr: I
    }),
    doubleColon: J("::", {
      beforeExpr: I
    }),
    dot: J("."),
    question: J("?", {
      beforeExpr: I
    }),
    questionDot: J("?."),
    arrow: J("=>", {
      beforeExpr: I
    }),
    template: J("template"),
    ellipsis: J("...", {
      beforeExpr: I
    }),
    backQuote: J("`", {
      startsExpr: O
    }),
    dollarBraceL: J("${", {
      beforeExpr: I,
      startsExpr: O
    }),
    templateTail: J("...`", {
      startsExpr: O
    }),
    templateNonTail: J("...${", {
      beforeExpr: I,
      startsExpr: O
    }),
    at: J("@"),
    hash: J("#", {
      startsExpr: O
    }),
    interpreterDirective: J("#!..."),
    eq: J("=", {
      beforeExpr: I,
      isAssign: j
    }),
    assign: J("_=", {
      beforeExpr: I,
      isAssign: j
    }),
    slashAssign: J("_=", {
      beforeExpr: I,
      isAssign: j
    }),
    xorAssign: J("_=", {
      beforeExpr: I,
      isAssign: j
    }),
    moduloAssign: J("_=", {
      beforeExpr: I,
      isAssign: j
    }),
    incDec: J("++/--", {
      prefix: W,
      postfix: ee,
      startsExpr: O
    }),
    bang: J("!", {
      beforeExpr: I,
      prefix: W,
      startsExpr: O
    }),
    tilde: J("~", {
      beforeExpr: I,
      prefix: W,
      startsExpr: O
    }),
    doubleCaret: J("^^", {
      startsExpr: O
    }),
    doubleAt: J("@@", {
      startsExpr: O
    }),
    pipeline: oe("|>", 0),
    nullishCoalescing: oe("??", 1),
    logicalOR: oe("||", 1),
    logicalAND: oe("&&", 2),
    bitwiseOR: oe("|", 3),
    bitwiseXOR: oe("^", 4),
    bitwiseAND: oe("&", 5),
    equality: oe("==/!=/===/!==", 6),
    lt: oe("</>/<=/>=", 7),
    gt: oe("</>/<=/>=", 7),
    relational: oe("</>/<=/>=", 7),
    bitShift: oe("<</>>/>>>", 8),
    bitShiftL: oe("<</>>/>>>", 8),
    bitShiftR: oe("<</>>/>>>", 8),
    plusMin: J("+/-", {
      beforeExpr: I,
      binop: 9,
      prefix: W,
      startsExpr: O
    }),
    modulo: J("%", {
      binop: 10,
      startsExpr: O
    }),
    star: J("*", {
      binop: 10
    }),
    slash: oe("/", 10),
    exponent: J("**", {
      beforeExpr: I,
      binop: 11,
      rightAssociative: !0
    }),
    _in: X("in", {
      beforeExpr: I,
      binop: 7
    }),
    _instanceof: X("instanceof", {
      beforeExpr: I,
      binop: 7
    }),
    _break: X("break"),
    _case: X("case", {
      beforeExpr: I
    }),
    _catch: X("catch"),
    _continue: X("continue"),
    _debugger: X("debugger"),
    _default: X("default", {
      beforeExpr: I
    }),
    _else: X("else", {
      beforeExpr: I
    }),
    _finally: X("finally"),
    _function: X("function", {
      startsExpr: O
    }),
    _if: X("if"),
    _return: X("return", {
      beforeExpr: I
    }),
    _switch: X("switch"),
    _throw: X("throw", {
      beforeExpr: I,
      prefix: W,
      startsExpr: O
    }),
    _try: X("try"),
    _var: X("var"),
    _const: X("const"),
    _with: X("with"),
    _new: X("new", {
      beforeExpr: I,
      startsExpr: O
    }),
    _this: X("this", {
      startsExpr: O
    }),
    _super: X("super", {
      startsExpr: O
    }),
    _class: X("class", {
      startsExpr: O
    }),
    _extends: X("extends", {
      beforeExpr: I
    }),
    _export: X("export"),
    _import: X("import", {
      startsExpr: O
    }),
    _null: X("null", {
      startsExpr: O
    }),
    _true: X("true", {
      startsExpr: O
    }),
    _false: X("false", {
      startsExpr: O
    }),
    _typeof: X("typeof", {
      beforeExpr: I,
      prefix: W,
      startsExpr: O
    }),
    _void: X("void", {
      beforeExpr: I,
      prefix: W,
      startsExpr: O
    }),
    _delete: X("delete", {
      beforeExpr: I,
      prefix: W,
      startsExpr: O
    }),
    _do: X("do", {
      isLoop: R,
      beforeExpr: I
    }),
    _for: X("for", {
      isLoop: R
    }),
    _while: X("while", {
      isLoop: R
    }),
    _as: te("as", {
      startsExpr: O
    }),
    _assert: te("assert", {
      startsExpr: O
    }),
    _async: te("async", {
      startsExpr: O
    }),
    _await: te("await", {
      startsExpr: O
    }),
    _defer: te("defer", {
      startsExpr: O
    }),
    _from: te("from", {
      startsExpr: O
    }),
    _get: te("get", {
      startsExpr: O
    }),
    _let: te("let", {
      startsExpr: O
    }),
    _meta: te("meta", {
      startsExpr: O
    }),
    _of: te("of", {
      startsExpr: O
    }),
    _sent: te("sent", {
      startsExpr: O
    }),
    _set: te("set", {
      startsExpr: O
    }),
    _source: te("source", {
      startsExpr: O
    }),
    _static: te("static", {
      startsExpr: O
    }),
    _using: te("using", {
      startsExpr: O
    }),
    _yield: te("yield", {
      startsExpr: O
    }),
    _asserts: te("asserts", {
      startsExpr: O
    }),
    _checks: te("checks", {
      startsExpr: O
    }),
    _exports: te("exports", {
      startsExpr: O
    }),
    _global: te("global", {
      startsExpr: O
    }),
    _implements: te("implements", {
      startsExpr: O
    }),
    _intrinsic: te("intrinsic", {
      startsExpr: O
    }),
    _infer: te("infer", {
      startsExpr: O
    }),
    _is: te("is", {
      startsExpr: O
    }),
    _mixins: te("mixins", {
      startsExpr: O
    }),
    _proto: te("proto", {
      startsExpr: O
    }),
    _require: te("require", {
      startsExpr: O
    }),
    _satisfies: te("satisfies", {
      startsExpr: O
    }),
    _keyof: te("keyof", {
      startsExpr: O
    }),
    _readonly: te("readonly", {
      startsExpr: O
    }),
    _unique: te("unique", {
      startsExpr: O
    }),
    _abstract: te("abstract", {
      startsExpr: O
    }),
    _declare: te("declare", {
      startsExpr: O
    }),
    _enum: te("enum", {
      startsExpr: O
    }),
    _module: te("module", {
      startsExpr: O
    }),
    _namespace: te("namespace", {
      startsExpr: O
    }),
    _interface: te("interface", {
      startsExpr: O
    }),
    _type: te("type", {
      startsExpr: O
    }),
    _opaque: te("opaque", {
      startsExpr: O
    }),
    name: J("name", {
      startsExpr: O
    }),
    placeholder: J("%%", {
      startsExpr: !0
    }),
    string: J("string", {
      startsExpr: O
    }),
    num: J("num", {
      startsExpr: O
    }),
    bigint: J("bigint", {
      startsExpr: O
    }),
    decimal: J("decimal", {
      startsExpr: O
    }),
    regexp: J("regexp", {
      startsExpr: O
    }),
    privateName: J("#name", {
      startsExpr: O
    }),
    eof: J("eof"),
    jsxName: J("jsxName"),
    jsxText: J("jsxText", {
      beforeExpr: !0
    }),
    jsxTagStart: J("jsxTagStart", {
      startsExpr: !0
    }),
    jsxTagEnd: J("jsxTagEnd")
  };
  function ie(S) {
    return S >= 93 && S <= 133;
  }
  function Ci(S) {
    return S <= 92;
  }
  function Pe(S) {
    return S >= 58 && S <= 133;
  }
  function Jt(S) {
    return S >= 58 && S <= 137;
  }
  function rr(S) {
    return Z[S];
  }
  function As(S) {
    return It[S];
  }
  function jp(S) {
    return S >= 29 && S <= 33;
  }
  function bo(S) {
    return S >= 129 && S <= 131;
  }
  function qp(S) {
    return S >= 90 && S <= 92;
  }
  function Ii(S) {
    return S >= 58 && S <= 92;
  }
  function Hp(S) {
    return S >= 39 && S <= 59;
  }
  function zp(S) {
    return S === 34;
  }
  function Xp(S) {
    return dt[S];
  }
  function Wp(S) {
    return S >= 121 && S <= 123;
  }
  function Gp(S) {
    return S >= 124 && S <= 130;
  }
  function mt(S) {
    return Ke[S];
  }
  function ir(S) {
    return Kt[S];
  }
  function Kp(S) {
    return S === 57;
  }
  function nr(S) {
    return S >= 24 && S <= 25;
  }
  function it(S) {
    return de[S];
  }
  de[8].updateContext = (S) => {
    S.pop();
  }, de[5].updateContext = de[7].updateContext = de[23].updateContext = (S) => {
    S.push(v.brace);
  }, de[22].updateContext = (S) => {
    S[S.length - 1] === v.template ? S.pop() : S.push(v.template);
  }, de[143].updateContext = (S) => {
    S.push(v.j_expr, v.j_oTag);
  };
  let Ni = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", xo = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
  const Jp = new RegExp("[" + Ni + "]"), Yp = new RegExp("[" + Ni + xo + "]");
  Ni = xo = null;
  const So = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Qp = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function _i(S, i) {
    let e = 65536;
    for (let n = 0, a = i.length; n < a; n += 2) {
      if (e += i[n], e > S) return !1;
      if (e += i[n + 1], e >= S) return !0;
    }
    return !1;
  }
  function nt(S) {
    return S < 65 ? S === 36 : S <= 90 ? !0 : S < 97 ? S === 95 : S <= 122 ? !0 : S <= 65535 ? S >= 170 && Jp.test(String.fromCharCode(S)) : _i(S, So);
  }
  function Yt(S) {
    return S < 48 ? S === 36 : S < 58 ? !0 : S < 65 ? !1 : S <= 90 ? !0 : S < 97 ? S === 95 : S <= 122 ? !0 : S <= 65535 ? S >= 170 && Yp.test(String.fromCharCode(S)) : _i(S, So) || _i(S, Qp);
  }
  const Oi = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  }, Zp = new Set(Oi.keyword), ef = new Set(Oi.strict), tf = new Set(Oi.strictBind);
  function Eo(S, i) {
    return i && S === "await" || S === "enum";
  }
  function Po(S, i) {
    return Eo(S, i) || ef.has(S);
  }
  function To(S) {
    return tf.has(S);
  }
  function Ao(S, i) {
    return Po(S, i) || To(S);
  }
  function sf(S) {
    return Zp.has(S);
  }
  function rf(S, i, e) {
    return S === 64 && i === 64 && nt(e);
  }
  const nf = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
  function af(S) {
    return nf.has(S);
  }
  class ki {
    constructor(i) {
      this.flags = 0, this.names = /* @__PURE__ */ new Map(), this.firstLexicalName = "", this.flags = i;
    }
  }
  class Li {
    constructor(i, e) {
      this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = i, this.inModule = e;
    }
    get inTopLevel() {
      return (this.currentScope().flags & 1) > 0;
    }
    get inFunction() {
      return (this.currentVarScopeFlags() & 2) > 0;
    }
    get allowSuper() {
      return (this.currentThisScopeFlags() & 16) > 0;
    }
    get allowDirectSuper() {
      return (this.currentThisScopeFlags() & 32) > 0;
    }
    get inClass() {
      return (this.currentThisScopeFlags() & 64) > 0;
    }
    get inClassAndNotInNonArrowFunction() {
      const i = this.currentThisScopeFlags();
      return (i & 64) > 0 && (i & 2) === 0;
    }
    get inStaticBlock() {
      for (let i = this.scopeStack.length - 1; ; i--) {
        const {
          flags: e
        } = this.scopeStack[i];
        if (e & 128)
          return !0;
        if (e & 451)
          return !1;
      }
    }
    get inNonArrowFunction() {
      return (this.currentThisScopeFlags() & 2) > 0;
    }
    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }
    createScope(i) {
      return new ki(i);
    }
    enter(i) {
      this.scopeStack.push(this.createScope(i));
    }
    exit() {
      return this.scopeStack.pop().flags;
    }
    treatFunctionsAsVarInScope(i) {
      return !!(i.flags & 130 || !this.parser.inModule && i.flags & 1);
    }
    declareName(i, e, n) {
      let a = this.currentScope();
      if (e & 8 || e & 16) {
        this.checkRedeclarationInScope(a, i, e, n);
        let f = a.names.get(i) || 0;
        e & 16 ? f = f | 4 : (a.firstLexicalName || (a.firstLexicalName = i), f = f | 2), a.names.set(i, f), e & 8 && this.maybeExportDefined(a, i);
      } else if (e & 4)
        for (let f = this.scopeStack.length - 1; f >= 0 && (a = this.scopeStack[f], this.checkRedeclarationInScope(a, i, e, n), a.names.set(i, (a.names.get(i) || 0) | 1), this.maybeExportDefined(a, i), !(a.flags & 387)); --f)
          ;
      this.parser.inModule && a.flags & 1 && this.undefinedExports.delete(i);
    }
    maybeExportDefined(i, e) {
      this.parser.inModule && i.flags & 1 && this.undefinedExports.delete(e);
    }
    checkRedeclarationInScope(i, e, n, a) {
      this.isRedeclaredInScope(i, e, n) && this.parser.raise(y.VarRedeclaration, a, {
        identifierName: e
      });
    }
    isRedeclaredInScope(i, e, n) {
      if (!(n & 1)) return !1;
      if (n & 8)
        return i.names.has(e);
      const a = i.names.get(e);
      return n & 16 ? (a & 2) > 0 || !this.treatFunctionsAsVarInScope(i) && (a & 1) > 0 : (a & 2) > 0 && !(i.flags & 8 && i.firstLexicalName === e) || !this.treatFunctionsAsVarInScope(i) && (a & 4) > 0;
    }
    checkLocalExport(i) {
      const {
        name: e
      } = i;
      this.scopeStack[0].names.has(e) || this.undefinedExports.set(e, i.loc.start);
    }
    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }
    currentVarScopeFlags() {
      for (let i = this.scopeStack.length - 1; ; i--) {
        const {
          flags: e
        } = this.scopeStack[i];
        if (e & 387)
          return e;
      }
    }
    currentThisScopeFlags() {
      for (let i = this.scopeStack.length - 1; ; i--) {
        const {
          flags: e
        } = this.scopeStack[i];
        if (e & 451 && !(e & 4))
          return e;
      }
    }
  }
  class of extends ki {
    constructor(...i) {
      super(...i), this.declareFunctions = /* @__PURE__ */ new Set();
    }
  }
  class uf extends Li {
    createScope(i) {
      return new of(i);
    }
    declareName(i, e, n) {
      const a = this.currentScope();
      if (e & 2048) {
        this.checkRedeclarationInScope(a, i, e, n), this.maybeExportDefined(a, i), a.declareFunctions.add(i);
        return;
      }
      super.declareName(i, e, n);
    }
    isRedeclaredInScope(i, e, n) {
      if (super.isRedeclaredInScope(i, e, n)) return !0;
      if (n & 2048 && !i.declareFunctions.has(e)) {
        const a = i.names.get(e);
        return (a & 4) > 0 || (a & 2) > 0;
      }
      return !1;
    }
    checkLocalExport(i) {
      this.scopeStack[0].declareFunctions.has(i.name) || super.checkLocalExport(i);
    }
  }
  const lf = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), Y = P`flow`({
    AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
    AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
    AssignReservedType: ({
      reservedType: S
    }) => `Cannot overwrite reserved type ${S}.`,
    DeclareClassElement: "The `declare` modifier can only appear on class fields.",
    DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
    DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
    EnumBooleanMemberNotInitialized: ({
      memberName: S,
      enumName: i
    }) => `Boolean enum members need to be initialized. Use either \`${S} = true,\` or \`${S} = false,\` in enum \`${i}\`.`,
    EnumDuplicateMemberName: ({
      memberName: S,
      enumName: i
    }) => `Enum member names need to be unique, but the name \`${S}\` has already been used before in enum \`${i}\`.`,
    EnumInconsistentMemberValues: ({
      enumName: S
    }) => `Enum \`${S}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
    EnumInvalidExplicitType: ({
      invalidEnumType: S,
      enumName: i
    }) => `Enum type \`${S}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${i}\`.`,
    EnumInvalidExplicitTypeUnknownSupplied: ({
      enumName: S
    }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${S}\`.`,
    EnumInvalidMemberInitializerPrimaryType: ({
      enumName: S,
      memberName: i,
      explicitType: e
    }) => `Enum \`${S}\` has type \`${e}\`, so the initializer of \`${i}\` needs to be a ${e} literal.`,
    EnumInvalidMemberInitializerSymbolType: ({
      enumName: S,
      memberName: i
    }) => `Symbol enum members cannot be initialized. Use \`${i},\` in enum \`${S}\`.`,
    EnumInvalidMemberInitializerUnknownType: ({
      enumName: S,
      memberName: i
    }) => `The enum member initializer for \`${i}\` needs to be a literal (either a boolean, number, or string) in enum \`${S}\`.`,
    EnumInvalidMemberName: ({
      enumName: S,
      memberName: i,
      suggestion: e
    }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${i}\`, consider using \`${e}\`, in enum \`${S}\`.`,
    EnumNumberMemberNotInitialized: ({
      enumName: S,
      memberName: i
    }) => `Number enum members need to be initialized, e.g. \`${i} = 1\` in enum \`${S}\`.`,
    EnumStringMemberInconsistentlyInitialized: ({
      enumName: S
    }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${S}\`.`,
    GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
    ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
    ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
    InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
    InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
    InexactVariance: "Explicit inexact syntax cannot have variance.",
    InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
    MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
    NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
    NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
    PatternIsOptional: Object.assign({
      message: "A binding pattern parameter cannot be optional in an implementation signature."
    }, {
      reasonCode: "OptionalBindingPattern"
    }),
    SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
    SpreadVariance: "Spread properties cannot have variance.",
    ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
    ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
    ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
    ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
    ThisParamNoDefault: "The `this` parameter may not have a default value.",
    TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
    UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
    UnexpectedReservedType: ({
      reservedType: S
    }) => `Unexpected reserved type ${S}.`,
    UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
    UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
    UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
    UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
    UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
    UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
    UnsupportedDeclareExportKind: ({
      unsupportedExportKind: S,
      suggestion: i
    }) => `\`declare export ${S}\` is not supported. Use \`${i}\` instead.`,
    UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
    UnterminatedFlowComment: "Unterminated flow-comment."
  });
  function cf(S) {
    return S.type === "DeclareExportAllDeclaration" || S.type === "DeclareExportDeclaration" && (!S.declaration || S.declaration.type !== "TypeAlias" && S.declaration.type !== "InterfaceDeclaration");
  }
  function wo(S) {
    return S.importKind === "type" || S.importKind === "typeof";
  }
  const hf = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };
  function pf(S, i) {
    const e = [], n = [];
    for (let a = 0; a < S.length; a++)
      (i(S[a], a, S) ? e : n).push(S[a]);
    return [e, n];
  }
  const ff = /\*?\s*@((?:no)?flow)\b/;
  var df = (S) => class extends S {
    constructor(...e) {
      super(...e), this.flowPragma = void 0;
    }
    getScopeHandler() {
      return uf;
    }
    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }
    finishToken(e, n) {
      e !== 134 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, n);
    }
    addComment(e) {
      if (this.flowPragma === void 0) {
        const n = ff.exec(e.value);
        if (n) if (n[1] === "flow")
          this.flowPragma = "flow";
        else if (n[1] === "noflow")
          this.flowPragma = "noflow";
        else
          throw new Error("Unexpected flow pragma");
      }
      super.addComment(e);
    }
    flowParseTypeInitialiser(e) {
      const n = this.state.inType;
      this.state.inType = !0, this.expect(e || 14);
      const a = this.flowParseType();
      return this.state.inType = n, a;
    }
    flowParsePredicate() {
      const e = this.startNode(), n = this.state.startLoc;
      return this.next(), this.expectContextual(110), this.state.lastTokStartLoc.index > n.index + 1 && this.raise(Y.UnexpectedSpaceBetweenModuloChecks, n), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
    }
    flowParseTypeAndPredicateInitialiser() {
      const e = this.state.inType;
      this.state.inType = !0, this.expect(14);
      let n = null, a = null;
      return this.match(54) ? (this.state.inType = e, a = this.flowParsePredicate()) : (n = this.flowParseType(), this.state.inType = e, this.match(54) && (a = this.flowParsePredicate())), [n, a];
    }
    flowParseDeclareClass(e) {
      return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, "DeclareClass");
    }
    flowParseDeclareFunction(e) {
      this.next();
      const n = e.id = this.parseIdentifier(), a = this.startNode(), f = this.startNode();
      this.match(47) ? a.typeParameters = this.flowParseTypeParameterDeclaration() : a.typeParameters = null, this.expect(10);
      const E = this.flowParseFunctionTypeParams();
      return a.params = E.params, a.rest = E.rest, a.this = E._this, this.expect(11), [a.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), f.typeAnnotation = this.finishNode(a, "FunctionTypeAnnotation"), n.typeAnnotation = this.finishNode(f, "TypeAnnotation"), this.resetEndLocation(n), this.semicolon(), this.scope.declareName(e.id.name, 2048, e.id.loc.start), this.finishNode(e, "DeclareFunction");
    }
    flowParseDeclare(e, n) {
      if (this.match(80))
        return this.flowParseDeclareClass(e);
      if (this.match(68))
        return this.flowParseDeclareFunction(e);
      if (this.match(74))
        return this.flowParseDeclareVariable(e);
      if (this.eatContextual(127))
        return this.match(16) ? this.flowParseDeclareModuleExports(e) : (n && this.raise(Y.NestedDeclareModule, this.state.lastTokStartLoc), this.flowParseDeclareModule(e));
      if (this.isContextual(130))
        return this.flowParseDeclareTypeAlias(e);
      if (this.isContextual(131))
        return this.flowParseDeclareOpaqueType(e);
      if (this.isContextual(129))
        return this.flowParseDeclareInterface(e);
      if (this.match(82))
        return this.flowParseDeclareExportDeclaration(e, n);
      this.unexpected();
    }
    flowParseDeclareVariable(e) {
      return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(e.id.name, 5, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
    }
    flowParseDeclareModule(e) {
      this.scope.enter(0), this.match(134) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
      const n = e.body = this.startNode(), a = n.body = [];
      for (this.expect(5); !this.match(8); ) {
        let A = this.startNode();
        this.match(83) ? (this.next(), !this.isContextual(130) && !this.match(87) && this.raise(Y.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc), super.parseImport(A)) : (this.expectContextual(125, Y.UnsupportedStatementInDeclareModule), A = this.flowParseDeclare(A, !0)), a.push(A);
      }
      this.scope.exit(), this.expect(8), this.finishNode(n, "BlockStatement");
      let f = null, E = !1;
      return a.forEach((A) => {
        cf(A) ? (f === "CommonJS" && this.raise(Y.AmbiguousDeclareModuleKind, A), f = "ES") : A.type === "DeclareModuleExports" && (E && this.raise(Y.DuplicateDeclareModuleExports, A), f === "ES" && this.raise(Y.AmbiguousDeclareModuleKind, A), f = "CommonJS", E = !0);
      }), e.kind = f || "CommonJS", this.finishNode(e, "DeclareModule");
    }
    flowParseDeclareExportDeclaration(e, n) {
      if (this.expect(82), this.eat(65))
        return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !n) {
        const a = this.state.value;
        throw this.raise(Y.UnsupportedDeclareExportKind, this.state.startLoc, {
          unsupportedExportKind: a,
          suggestion: hf[a]
        });
      }
      if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(131))
        return e.declaration = this.flowParseDeclare(this.startNode()), e.default = !1, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(55) || this.match(5) || this.isContextual(129) || this.isContextual(130) || this.isContextual(131))
        return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" ? (e.default = !1, delete e.exportKind, this.castNodeTo(e, "DeclareExportDeclaration")) : this.castNodeTo(e, "DeclareExportAllDeclaration");
      this.unexpected();
    }
    flowParseDeclareModuleExports(e) {
      return this.next(), this.expectContextual(111), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
    }
    flowParseDeclareTypeAlias(e) {
      this.next();
      const n = this.flowParseTypeAlias(e);
      return this.castNodeTo(n, "DeclareTypeAlias"), n;
    }
    flowParseDeclareOpaqueType(e) {
      this.next();
      const n = this.flowParseOpaqueType(e, !0);
      return this.castNodeTo(n, "DeclareOpaqueType"), n;
    }
    flowParseDeclareInterface(e) {
      return this.next(), this.flowParseInterfaceish(e, !1), this.finishNode(e, "DeclareInterface");
    }
    flowParseInterfaceish(e, n) {
      if (e.id = this.flowParseRestrictedIdentifier(!n, !0), this.scope.declareName(e.id.name, n ? 17 : 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (!n && this.eat(12));
      if (n) {
        if (e.implements = [], e.mixins = [], this.eatContextual(117))
          do
            e.mixins.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
        if (this.eatContextual(113))
          do
            e.implements.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
      }
      e.body = this.flowParseObjectType({
        allowStatic: n,
        allowExact: !1,
        allowSpread: !1,
        allowProto: n,
        allowInexact: !1
      });
    }
    flowParseInterfaceExtends() {
      const e = this.startNode();
      return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
    }
    flowParseInterface(e) {
      return this.flowParseInterfaceish(e, !1), this.finishNode(e, "InterfaceDeclaration");
    }
    checkNotUnderscore(e) {
      e === "_" && this.raise(Y.UnexpectedReservedUnderscore, this.state.startLoc);
    }
    checkReservedType(e, n, a) {
      lf.has(e) && this.raise(a ? Y.AssignReservedType : Y.UnexpectedReservedType, n, {
        reservedType: e
      });
    }
    flowParseRestrictedIdentifier(e, n) {
      return this.checkReservedType(this.state.value, this.state.startLoc, n), this.parseIdentifier(e);
    }
    flowParseTypeAlias(e) {
      return e.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
    }
    flowParseOpaqueType(e, n) {
      return this.expectContextual(130), e.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, n || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
    }
    flowParseTypeParameter(e = !1) {
      const n = this.state.startLoc, a = this.startNode(), f = this.flowParseVariance(), E = this.flowParseTypeAnnotatableIdentifier();
      return a.name = E.name, a.variance = f, a.bound = E.typeAnnotation, this.match(29) ? (this.eat(29), a.default = this.flowParseType()) : e && this.raise(Y.MissingTypeParamDefault, n), this.finishNode(a, "TypeParameter");
    }
    flowParseTypeParameterDeclaration() {
      const e = this.state.inType, n = this.startNode();
      n.params = [], this.state.inType = !0, this.match(47) || this.match(143) ? this.next() : this.unexpected();
      let a = !1;
      do {
        const f = this.flowParseTypeParameter(a);
        n.params.push(f), f.default && (a = !0), this.match(48) || this.expect(12);
      } while (!this.match(48));
      return this.expect(48), this.state.inType = e, this.finishNode(n, "TypeParameterDeclaration");
    }
    flowInTopLevelContext(e) {
      if (this.curContext() !== v.brace) {
        const n = this.state.context;
        this.state.context = [n[0]];
        try {
          return e();
        } finally {
          this.state.context = n;
        }
      } else
        return e();
    }
    flowParseTypeParameterInstantiationInExpression() {
      if (this.reScan_lt() === 47)
        return this.flowParseTypeParameterInstantiation();
    }
    flowParseTypeParameterInstantiation() {
      const e = this.startNode(), n = this.state.inType;
      return this.state.inType = !0, e.params = [], this.flowInTopLevelContext(() => {
        this.expect(47);
        const a = this.state.noAnonFunctionType;
        for (this.state.noAnonFunctionType = !1; !this.match(48); )
          e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
        this.state.noAnonFunctionType = a;
      }), this.state.inType = n, !this.state.inType && this.curContext() === v.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseTypeParameterInstantiationCallOrNew() {
      if (this.reScan_lt() !== 47) return;
      const e = this.startNode(), n = this.state.inType;
      for (e.params = [], this.state.inType = !0, this.expect(47); !this.match(48); )
        e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
      return this.expect(48), this.state.inType = n, this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseInterfaceType() {
      const e = this.startNode();
      if (this.expectContextual(129), e.extends = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (this.eat(12));
      return e.body = this.flowParseObjectType({
        allowStatic: !1,
        allowExact: !1,
        allowSpread: !1,
        allowProto: !1,
        allowInexact: !1
      }), this.finishNode(e, "InterfaceTypeAnnotation");
    }
    flowParseObjectPropertyKey() {
      return this.match(135) || this.match(134) ? super.parseExprAtom() : this.parseIdentifier(!0);
    }
    flowParseObjectTypeIndexer(e, n, a) {
      return e.static = n, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = a, this.finishNode(e, "ObjectTypeIndexer");
    }
    flowParseObjectTypeInternalSlot(e, n) {
      return e.static = n, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = !0, e.optional = !1, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = !1, this.eat(17) && (e.optional = !0), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
    }
    flowParseObjectTypeMethodish(e) {
      for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(!0), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
      return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
    }
    flowParseObjectTypeCallProperty(e, n) {
      const a = this.startNode();
      return e.static = n, e.value = this.flowParseObjectTypeMethodish(a), this.finishNode(e, "ObjectTypeCallProperty");
    }
    flowParseObjectType({
      allowStatic: e,
      allowExact: n,
      allowSpread: a,
      allowProto: f,
      allowInexact: E
    }) {
      const A = this.state.inType;
      this.state.inType = !0;
      const w = this.startNode();
      w.callProperties = [], w.properties = [], w.indexers = [], w.internalSlots = [];
      let _, k, B = !1;
      for (n && this.match(6) ? (this.expect(6), _ = 9, k = !0) : (this.expect(5), _ = 8, k = !1), w.exact = k; !this.match(_); ) {
        let H = !1, G = null, se = null;
        const be = this.startNode();
        if (f && this.isContextual(118)) {
          const ce = this.lookahead();
          ce.type !== 14 && ce.type !== 17 && (this.next(), G = this.state.startLoc, e = !1);
        }
        if (e && this.isContextual(106)) {
          const ce = this.lookahead();
          ce.type !== 14 && ce.type !== 17 && (this.next(), H = !0);
        }
        const re = this.flowParseVariance();
        if (this.eat(0))
          G != null && this.unexpected(G), this.eat(0) ? (re && this.unexpected(re.loc.start), w.internalSlots.push(this.flowParseObjectTypeInternalSlot(be, H))) : w.indexers.push(this.flowParseObjectTypeIndexer(be, H, re));
        else if (this.match(10) || this.match(47))
          G != null && this.unexpected(G), re && this.unexpected(re.loc.start), w.callProperties.push(this.flowParseObjectTypeCallProperty(be, H));
        else {
          let ce = "init";
          if (this.isContextual(99) || this.isContextual(104)) {
            const bt = this.lookahead();
            Jt(bt.type) && (ce = this.state.value, this.next());
          }
          const Ot = this.flowParseObjectTypeProperty(be, H, G, re, ce, a, E ?? !k);
          Ot === null ? (B = !0, se = this.state.lastTokStartLoc) : w.properties.push(Ot);
        }
        this.flowObjectTypeSemicolon(), se && !this.match(8) && !this.match(9) && this.raise(Y.UnexpectedExplicitInexactInObject, se);
      }
      this.expect(_), a && (w.inexact = B);
      const q = this.finishNode(w, "ObjectTypeAnnotation");
      return this.state.inType = A, q;
    }
    flowParseObjectTypeProperty(e, n, a, f, E, A, w) {
      if (this.eat(21))
        return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (A ? w || this.raise(Y.InexactInsideExact, this.state.lastTokStartLoc) : this.raise(Y.InexactInsideNonObject, this.state.lastTokStartLoc), f && this.raise(Y.InexactVariance, f), null) : (A || this.raise(Y.UnexpectedSpreadType, this.state.lastTokStartLoc), a != null && this.unexpected(a), f && this.raise(Y.SpreadVariance, f), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
      {
        e.key = this.flowParseObjectPropertyKey(), e.static = n, e.proto = a != null, e.kind = E;
        let _ = !1;
        return this.match(47) || this.match(10) ? (e.method = !0, a != null && this.unexpected(a), f && this.unexpected(f.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (E === "get" || E === "set") && this.flowCheckGetterSetterParams(e), !A && e.key.name === "constructor" && e.value.this && this.raise(Y.ThisParamBannedInConstructor, e.value.this)) : (E !== "init" && this.unexpected(), e.method = !1, this.eat(17) && (_ = !0), e.value = this.flowParseTypeInitialiser(), e.variance = f), e.optional = _, this.finishNode(e, "ObjectTypeProperty");
      }
    }
    flowCheckGetterSetterParams(e) {
      const n = e.kind === "get" ? 0 : 1, a = e.value.params.length + (e.value.rest ? 1 : 0);
      e.value.this && this.raise(e.kind === "get" ? Y.GetterMayNotHaveThisParam : Y.SetterMayNotHaveThisParam, e.value.this), a !== n && this.raise(e.kind === "get" ? y.BadGetterArity : y.BadSetterArity, e), e.kind === "set" && e.value.rest && this.raise(y.BadSetterRestParameter, e);
    }
    flowObjectTypeSemicolon() {
      !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
    }
    flowParseQualifiedTypeIdentifier(e, n) {
      e ?? (e = this.state.startLoc);
      let a = n || this.flowParseRestrictedIdentifier(!0);
      for (; this.eat(16); ) {
        const f = this.startNodeAt(e);
        f.qualification = a, f.id = this.flowParseRestrictedIdentifier(!0), a = this.finishNode(f, "QualifiedTypeIdentifier");
      }
      return a;
    }
    flowParseGenericType(e, n) {
      const a = this.startNodeAt(e);
      return a.typeParameters = null, a.id = this.flowParseQualifiedTypeIdentifier(e, n), this.match(47) && (a.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(a, "GenericTypeAnnotation");
    }
    flowParseTypeofType() {
      const e = this.startNode();
      return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
    }
    flowParseTupleType() {
      const e = this.startNode();
      for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
        this.expect(12);
      return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
    }
    flowParseFunctionTypeParam(e) {
      let n = null, a = !1, f = null;
      const E = this.startNode(), A = this.lookahead(), w = this.state.type === 78;
      return A.type === 14 || A.type === 17 ? (w && !e && this.raise(Y.ThisParamMustBeFirst, E), n = this.parseIdentifier(w), this.eat(17) && (a = !0, w && this.raise(Y.ThisParamMayNotBeOptional, E)), f = this.flowParseTypeInitialiser()) : f = this.flowParseType(), E.name = n, E.optional = a, E.typeAnnotation = f, this.finishNode(E, "FunctionTypeParam");
    }
    reinterpretTypeAsFunctionTypeParam(e) {
      const n = this.startNodeAt(e.loc.start);
      return n.name = null, n.optional = !1, n.typeAnnotation = e, this.finishNode(n, "FunctionTypeParam");
    }
    flowParseFunctionTypeParams(e = []) {
      let n = null, a = null;
      for (this.match(78) && (a = this.flowParseFunctionTypeParam(!0), a.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
      return this.eat(21) && (n = this.flowParseFunctionTypeParam(!1)), {
        params: e,
        rest: n,
        _this: a
      };
    }
    flowIdentToTypeAnnotation(e, n, a) {
      switch (a.name) {
        case "any":
          return this.finishNode(n, "AnyTypeAnnotation");
        case "bool":
        case "boolean":
          return this.finishNode(n, "BooleanTypeAnnotation");
        case "mixed":
          return this.finishNode(n, "MixedTypeAnnotation");
        case "empty":
          return this.finishNode(n, "EmptyTypeAnnotation");
        case "number":
          return this.finishNode(n, "NumberTypeAnnotation");
        case "string":
          return this.finishNode(n, "StringTypeAnnotation");
        case "symbol":
          return this.finishNode(n, "SymbolTypeAnnotation");
        default:
          return this.checkNotUnderscore(a.name), this.flowParseGenericType(e, a);
      }
    }
    flowParsePrimaryType() {
      const e = this.state.startLoc, n = this.startNode();
      let a, f, E = !1;
      const A = this.state.noAnonFunctionType;
      switch (this.state.type) {
        case 5:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !1,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !0
          });
        case 6:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !0,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !1
          });
        case 0:
          return this.state.noAnonFunctionType = !1, f = this.flowParseTupleType(), this.state.noAnonFunctionType = A, f;
        case 47: {
          const w = this.startNode();
          return w.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), a = this.flowParseFunctionTypeParams(), w.params = a.params, w.rest = a.rest, w.this = a._this, this.expect(11), this.expect(19), w.returnType = this.flowParseType(), this.finishNode(w, "FunctionTypeAnnotation");
        }
        case 10: {
          const w = this.startNode();
          if (this.next(), !this.match(11) && !this.match(21))
            if (ie(this.state.type) || this.match(78)) {
              const _ = this.lookahead().type;
              E = _ !== 17 && _ !== 14;
            } else
              E = !0;
          if (E) {
            if (this.state.noAnonFunctionType = !1, f = this.flowParseType(), this.state.noAnonFunctionType = A, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
              return this.expect(11), f;
            this.eat(12);
          }
          return f ? a = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(f)]) : a = this.flowParseFunctionTypeParams(), w.params = a.params, w.rest = a.rest, w.this = a._this, this.expect(11), this.expect(19), w.returnType = this.flowParseType(), w.typeParameters = null, this.finishNode(w, "FunctionTypeAnnotation");
        }
        case 134:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
        case 85:
        case 86:
          return n.value = this.match(85), this.next(), this.finishNode(n, "BooleanLiteralTypeAnnotation");
        case 53:
          if (this.state.value === "-") {
            if (this.next(), this.match(135))
              return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", n);
            if (this.match(136))
              return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", n);
            throw this.raise(Y.UnexpectedSubtractionOperand, this.state.startLoc);
          }
          this.unexpected();
          return;
        case 135:
          return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
        case 136:
          return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
        case 88:
          return this.next(), this.finishNode(n, "VoidTypeAnnotation");
        case 84:
          return this.next(), this.finishNode(n, "NullLiteralTypeAnnotation");
        case 78:
          return this.next(), this.finishNode(n, "ThisTypeAnnotation");
        case 55:
          return this.next(), this.finishNode(n, "ExistsTypeAnnotation");
        case 87:
          return this.flowParseTypeofType();
        default:
          if (Ii(this.state.type)) {
            const w = mt(this.state.type);
            return this.next(), super.createIdentifier(n, w);
          } else if (ie(this.state.type))
            return this.isContextual(129) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, n, this.parseIdentifier());
      }
      this.unexpected();
    }
    flowParsePostfixType() {
      const e = this.state.startLoc;
      let n = this.flowParsePrimaryType(), a = !1;
      for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
        const f = this.startNodeAt(e), E = this.eat(18);
        a = a || E, this.expect(0), !E && this.match(3) ? (f.elementType = n, this.next(), n = this.finishNode(f, "ArrayTypeAnnotation")) : (f.objectType = n, f.indexType = this.flowParseType(), this.expect(3), a ? (f.optional = E, n = this.finishNode(f, "OptionalIndexedAccessType")) : n = this.finishNode(f, "IndexedAccessType"));
      }
      return n;
    }
    flowParsePrefixType() {
      const e = this.startNode();
      return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
    }
    flowParseAnonFunctionWithoutParens() {
      const e = this.flowParsePrefixType();
      if (!this.state.noAnonFunctionType && this.eat(19)) {
        const n = this.startNodeAt(e.loc.start);
        return n.params = [this.reinterpretTypeAsFunctionTypeParam(e)], n.rest = null, n.this = null, n.returnType = this.flowParseType(), n.typeParameters = null, this.finishNode(n, "FunctionTypeAnnotation");
      }
      return e;
    }
    flowParseIntersectionType() {
      const e = this.startNode();
      this.eat(45);
      const n = this.flowParseAnonFunctionWithoutParens();
      for (e.types = [n]; this.eat(45); )
        e.types.push(this.flowParseAnonFunctionWithoutParens());
      return e.types.length === 1 ? n : this.finishNode(e, "IntersectionTypeAnnotation");
    }
    flowParseUnionType() {
      const e = this.startNode();
      this.eat(43);
      const n = this.flowParseIntersectionType();
      for (e.types = [n]; this.eat(43); )
        e.types.push(this.flowParseIntersectionType());
      return e.types.length === 1 ? n : this.finishNode(e, "UnionTypeAnnotation");
    }
    flowParseType() {
      const e = this.state.inType;
      this.state.inType = !0;
      const n = this.flowParseUnionType();
      return this.state.inType = e, n;
    }
    flowParseTypeOrImplicitInstantiation() {
      if (this.state.type === 132 && this.state.value === "_") {
        const e = this.state.startLoc, n = this.parseIdentifier();
        return this.flowParseGenericType(e, n);
      } else
        return this.flowParseType();
    }
    flowParseTypeAnnotation() {
      const e = this.startNode();
      return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
    }
    flowParseTypeAnnotatableIdentifier(e) {
      const n = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
      return this.match(14) && (n.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(n)), n;
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    flowParseVariance() {
      let e = null;
      return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e;
    }
    parseFunctionBody(e, n, a = !1) {
      if (n) {
        this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, !0, a));
        return;
      }
      super.parseFunctionBody(e, !1, a);
    }
    parseFunctionBodyAndFinish(e, n, a = !1) {
      if (this.match(14)) {
        const f = this.startNode();
        [f.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = f.typeAnnotation ? this.finishNode(f, "TypeAnnotation") : null;
      }
      return super.parseFunctionBodyAndFinish(e, n, a);
    }
    parseStatementLike(e) {
      if (this.state.strict && this.isContextual(129)) {
        const a = this.lookahead();
        if (Pe(a.type)) {
          const f = this.startNode();
          return this.next(), this.flowParseInterface(f);
        }
      } else if (this.isContextual(126)) {
        const a = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(a);
      }
      const n = super.parseStatementLike(e);
      return this.flowPragma === void 0 && !this.isValidDirective(n) && (this.flowPragma = null), n;
    }
    parseExpressionStatement(e, n, a) {
      if (n.type === "Identifier") {
        if (n.name === "declare") {
          if (this.match(80) || ie(this.state.type) || this.match(68) || this.match(74) || this.match(82))
            return this.flowParseDeclare(e);
        } else if (ie(this.state.type)) {
          if (n.name === "interface")
            return this.flowParseInterface(e);
          if (n.name === "type")
            return this.flowParseTypeAlias(e);
          if (n.name === "opaque")
            return this.flowParseOpaqueType(e, !1);
        }
      }
      return super.parseExpressionStatement(e, n, a);
    }
    shouldParseExportDeclaration() {
      const {
        type: e
      } = this.state;
      return e === 126 || bo(e) ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }
    isExportDefaultSpecifier() {
      const {
        type: e
      } = this.state;
      return e === 126 || bo(e) ? this.state.containsEsc : super.isExportDefaultSpecifier();
    }
    parseExportDefaultExpression() {
      if (this.isContextual(126)) {
        const e = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(e);
      }
      return super.parseExportDefaultExpression();
    }
    parseConditional(e, n, a) {
      if (!this.match(17)) return e;
      if (this.state.maybeInArrowParameters) {
        const q = this.lookaheadCharCode();
        if (q === 44 || q === 61 || q === 58 || q === 41)
          return this.setOptionalParametersError(a), e;
      }
      this.expect(17);
      const f = this.state.clone(), E = this.state.noArrowAt, A = this.startNodeAt(n);
      let {
        consequent: w,
        failed: _
      } = this.tryParseConditionalConsequent(), [k, B] = this.getArrowLikeExpressions(w);
      if (_ || B.length > 0) {
        const q = [...E];
        if (B.length > 0) {
          this.state = f, this.state.noArrowAt = q;
          for (let H = 0; H < B.length; H++)
            q.push(B[H].start);
          ({
            consequent: w,
            failed: _
          } = this.tryParseConditionalConsequent()), [k, B] = this.getArrowLikeExpressions(w);
        }
        _ && k.length > 1 && this.raise(Y.AmbiguousConditionalArrow, f.startLoc), _ && k.length === 1 && (this.state = f, q.push(k[0].start), this.state.noArrowAt = q, {
          consequent: w,
          failed: _
        } = this.tryParseConditionalConsequent());
      }
      return this.getArrowLikeExpressions(w, !0), this.state.noArrowAt = E, this.expect(14), A.test = e, A.consequent = w, A.alternate = this.forwardNoArrowParamsConversionAt(A, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(A, "ConditionalExpression");
    }
    tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      const e = this.parseMaybeAssignAllowIn(), n = !this.match(14);
      return this.state.noArrowParamsConversionAt.pop(), {
        consequent: e,
        failed: n
      };
    }
    getArrowLikeExpressions(e, n) {
      const a = [e], f = [];
      for (; a.length !== 0; ) {
        const E = a.pop();
        E.type === "ArrowFunctionExpression" && E.body.type !== "BlockStatement" ? (E.typeParameters || !E.returnType ? this.finishArrowValidation(E) : f.push(E), a.push(E.body)) : E.type === "ConditionalExpression" && (a.push(E.consequent), a.push(E.alternate));
      }
      return n ? (f.forEach((E) => this.finishArrowValidation(E)), [f, []]) : pf(f, (E) => E.params.every((A) => this.isAssignable(A, !0)));
    }
    finishArrowValidation(e) {
      var n;
      this.toAssignableList(e.params, (n = e.extra) == null ? void 0 : n.trailingCommaLoc, !1), this.scope.enter(6), super.checkParams(e, !1, !0), this.scope.exit();
    }
    forwardNoArrowParamsConversionAt(e, n) {
      let a;
      return this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)) ? (this.state.noArrowParamsConversionAt.push(this.state.start), a = n(), this.state.noArrowParamsConversionAt.pop()) : a = n(), a;
    }
    parseParenItem(e, n) {
      const a = super.parseParenItem(e, n);
      if (this.eat(17) && (a.optional = !0, this.resetEndLocation(e)), this.match(14)) {
        const f = this.startNodeAt(n);
        return f.expression = a, f.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(f, "TypeCastExpression");
      }
      return a;
    }
    assertModuleNodeAllowed(e) {
      e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
    }
    parseExportDeclaration(e) {
      if (this.isContextual(130)) {
        e.exportKind = "type";
        const n = this.startNode();
        return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0), super.parseExportFrom(e), null) : this.flowParseTypeAlias(n);
      } else if (this.isContextual(131)) {
        e.exportKind = "type";
        const n = this.startNode();
        return this.next(), this.flowParseOpaqueType(n, !1);
      } else if (this.isContextual(129)) {
        e.exportKind = "type";
        const n = this.startNode();
        return this.next(), this.flowParseInterface(n);
      } else if (this.isContextual(126)) {
        e.exportKind = "value";
        const n = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(n);
      } else
        return super.parseExportDeclaration(e);
    }
    eatExportStar(e) {
      return super.eatExportStar(e) ? !0 : this.isContextual(130) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), !0) : !1;
    }
    maybeParseExportNamespaceSpecifier(e) {
      const {
        startLoc: n
      } = this.state, a = super.maybeParseExportNamespaceSpecifier(e);
      return a && e.exportKind === "type" && this.unexpected(n), a;
    }
    parseClassId(e, n, a) {
      super.parseClassId(e, n, a), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
    }
    parseClassMember(e, n, a) {
      const {
        startLoc: f
      } = this.state;
      if (this.isContextual(125)) {
        if (super.parseClassMemberFromModifier(e, n))
          return;
        n.declare = !0;
      }
      super.parseClassMember(e, n, a), n.declare && (n.type !== "ClassProperty" && n.type !== "ClassPrivateProperty" && n.type !== "PropertyDefinition" ? this.raise(Y.DeclareClassElement, f) : n.value && this.raise(Y.DeclareClassFieldInitializer, n.value));
    }
    isIterator(e) {
      return e === "iterator" || e === "asyncIterator";
    }
    readIterator() {
      const e = super.readWord1(), n = "@@" + e;
      (!this.isIterator(e) || !this.state.inType) && this.raise(y.InvalidIdentifier, this.state.curPosition(), {
        identifierName: n
      }), this.finishToken(132, n);
    }
    getTokenFromCode(e) {
      const n = this.input.charCodeAt(this.state.pos + 1);
      e === 123 && n === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? n === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : rf(e, n, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
    }
    isAssignable(e, n) {
      return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, n) : super.isAssignable(e, n);
    }
    toAssignable(e, n = !1) {
      !n && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, n);
    }
    toAssignableList(e, n, a) {
      for (let f = 0; f < e.length; f++) {
        const E = e[f];
        (E == null ? void 0 : E.type) === "TypeCastExpression" && (e[f] = this.typeCastToParameter(E));
      }
      super.toAssignableList(e, n, a);
    }
    toReferencedList(e, n) {
      for (let f = 0; f < e.length; f++) {
        var a;
        const E = e[f];
        E && E.type === "TypeCastExpression" && !((a = E.extra) != null && a.parenthesized) && (e.length > 1 || !n) && this.raise(Y.TypeCastInPattern, E.typeAnnotation);
      }
      return e;
    }
    parseArrayLike(e, n, a, f) {
      const E = super.parseArrayLike(e, n, a, f);
      return n && !this.state.maybeInArrowParameters && this.toReferencedList(E.elements), E;
    }
    isValidLVal(e, n, a) {
      return e === "TypeCastExpression" || super.isValidLVal(e, n, a);
    }
    parseClassProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(14) || super.isClassProperty();
    }
    isNonstaticConstructor(e) {
      return !this.match(14) && super.isNonstaticConstructor(e);
    }
    pushClassMethod(e, n, a, f, E, A) {
      if (n.variance && this.unexpected(n.variance.loc.start), delete n.variance, this.match(47) && (n.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, n, a, f, E, A), n.params && E) {
        const w = n.params;
        w.length > 0 && this.isThisParam(w[0]) && this.raise(Y.ThisParamBannedInConstructor, n);
      } else if (n.type === "MethodDefinition" && E && n.value.params) {
        const w = n.value.params;
        w.length > 0 && this.isThisParam(w[0]) && this.raise(Y.ThisParamBannedInConstructor, n);
      }
    }
    pushClassPrivateMethod(e, n, a, f) {
      n.variance && this.unexpected(n.variance.loc.start), delete n.variance, this.match(47) && (n.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, n, a, f);
    }
    parseClassSuper(e) {
      if (super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.flowParseTypeParameterInstantiationInExpression()), this.isContextual(113)) {
        this.next();
        const n = e.implements = [];
        do {
          const a = this.startNode();
          a.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? a.typeParameters = this.flowParseTypeParameterInstantiation() : a.typeParameters = null, n.push(this.finishNode(a, "ClassImplements"));
        } while (this.eat(12));
      }
    }
    checkGetterSetterParams(e) {
      super.checkGetterSetterParams(e);
      const n = this.getObjectOrClassMethodParams(e);
      if (n.length > 0) {
        const a = n[0];
        this.isThisParam(a) && e.kind === "get" ? this.raise(Y.GetterMayNotHaveThisParam, a) : this.isThisParam(a) && this.raise(Y.SetterMayNotHaveThisParam, a);
      }
    }
    parsePropertyNamePrefixOperator(e) {
      e.variance = this.flowParseVariance();
    }
    parseObjPropValue(e, n, a, f, E, A, w) {
      e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
      let _;
      this.match(47) && !A && (_ = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
      const k = super.parseObjPropValue(e, n, a, f, E, A, w);
      return _ && ((k.value || k).typeParameters = _), k;
    }
    parseFunctionParamType(e) {
      return this.eat(17) && (e.type !== "Identifier" && this.raise(Y.PatternIsOptional, e), this.isThisParam(e) && this.raise(Y.ThisParamMayNotBeOptional, e), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(Y.ThisParamAnnotationRequired, e), this.match(29) && this.isThisParam(e) && this.raise(Y.ThisParamNoDefault, e), this.resetEndLocation(e), e;
    }
    parseMaybeDefault(e, n) {
      const a = super.parseMaybeDefault(e, n);
      return a.type === "AssignmentPattern" && a.typeAnnotation && a.right.start < a.typeAnnotation.start && this.raise(Y.TypeBeforeInitializer, a.typeAnnotation), a;
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(Y.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    parseImportSpecifierLocal(e, n, a) {
      n.local = wo(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(n, a));
    }
    isPotentialImportPhase(e) {
      if (super.isPotentialImportPhase(e)) return !0;
      if (this.isContextual(130)) {
        if (!e) return !0;
        const n = this.lookaheadCharCode();
        return n === 123 || n === 42;
      }
      return !e && this.isContextual(87);
    }
    applyImportPhase(e, n, a, f) {
      if (super.applyImportPhase(e, n, a, f), n) {
        if (!a && this.match(65))
          return;
        e.exportKind = a === "type" ? a : "value";
      } else
        a === "type" && this.match(55) && this.unexpected(), e.importKind = a === "type" || a === "typeof" ? a : "value";
    }
    parseImportSpecifier(e, n, a, f, E) {
      const A = e.imported;
      let w = null;
      A.type === "Identifier" && (A.name === "type" ? w = "type" : A.name === "typeof" && (w = "typeof"));
      let _ = !1;
      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        const B = this.parseIdentifier(!0);
        w !== null && !Pe(this.state.type) ? (e.imported = B, e.importKind = w, e.local = this.cloneIdentifier(B)) : (e.imported = A, e.importKind = null, e.local = this.parseIdentifier());
      } else {
        if (w !== null && Pe(this.state.type))
          e.imported = this.parseIdentifier(!0), e.importKind = w;
        else {
          if (n)
            throw this.raise(y.ImportBindingIsString, e, {
              importName: A.value
            });
          e.imported = A, e.importKind = null;
        }
        this.eatContextual(93) ? e.local = this.parseIdentifier() : (_ = !0, e.local = this.cloneIdentifier(e.imported));
      }
      const k = wo(e);
      return a && k && this.raise(Y.ImportTypeShorthandOnlyInPureImport, e), (a || k) && this.checkReservedType(e.local.name, e.local.loc.start, !0), _ && !a && !k && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 78:
          return this.parseIdentifier(!0);
        default:
          return super.parseBindingAtom();
      }
    }
    parseFunctionParams(e, n) {
      const a = e.kind;
      a !== "get" && a !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, n);
    }
    parseVarId(e, n) {
      super.parseVarId(e, n), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, n) {
      if (this.match(14)) {
        const a = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = a;
      }
      return super.parseAsyncArrowFromCallExpression(e, n);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    parseMaybeAssign(e, n) {
      var a;
      let f = null, E;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (f = this.state.clone(), E = this.tryParse(() => super.parseMaybeAssign(e, n), f), !E.error) return E.node;
        const {
          context: _
        } = this.state, k = _[_.length - 1];
        (k === v.j_oTag || k === v.j_expr) && _.pop();
      }
      if ((a = E) != null && a.error || this.match(47)) {
        var A, w;
        f = f || this.state.clone();
        let _;
        const k = this.tryParse((q) => {
          var H;
          _ = this.flowParseTypeParameterDeclaration();
          const G = this.forwardNoArrowParamsConversionAt(_, () => {
            const be = super.parseMaybeAssign(e, n);
            return this.resetStartLocationFromNode(be, _), be;
          });
          (H = G.extra) != null && H.parenthesized && q();
          const se = this.maybeUnwrapTypeCastExpression(G);
          return se.type !== "ArrowFunctionExpression" && q(), se.typeParameters = _, this.resetStartLocationFromNode(se, _), G;
        }, f);
        let B = null;
        if (k.node && this.maybeUnwrapTypeCastExpression(k.node).type === "ArrowFunctionExpression") {
          if (!k.error && !k.aborted)
            return k.node.async && this.raise(Y.UnexpectedTypeParameterBeforeAsyncArrowFunction, _), k.node;
          B = k.node;
        }
        if ((A = E) != null && A.node)
          return this.state = E.failState, E.node;
        if (B)
          return this.state = k.failState, B;
        throw (w = E) != null && w.thrown ? E.error : k.thrown ? k.error : this.raise(Y.UnexpectedTokenAfterTypeParameter, _);
      }
      return super.parseMaybeAssign(e, n);
    }
    parseArrow(e) {
      if (this.match(14)) {
        const n = this.tryParse(() => {
          const a = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = !0;
          const f = this.startNode();
          return [f.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = a, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), f;
        });
        if (n.thrown) return null;
        n.error && (this.state = n.failState), e.returnType = n.node.typeAnnotation ? this.finishNode(n.node, "TypeAnnotation") : null;
      }
      return super.parseArrow(e);
    }
    shouldParseArrow(e) {
      return this.match(14) || super.shouldParseArrow(e);
    }
    setArrowFunctionParameters(e, n) {
      this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)) ? e.params = n : super.setArrowFunctionParameters(e, n);
    }
    checkParams(e, n, a, f = !0) {
      if (!(a && this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)))) {
        for (let E = 0; E < e.params.length; E++)
          this.isThisParam(e.params[E]) && E > 0 && this.raise(Y.ThisParamMustBeFirst, e.params[E]);
        super.checkParams(e, n, a, f);
      }
    }
    parseParenAndDistinguishExpression(e) {
      return super.parseParenAndDistinguishExpression(e && !this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)));
    }
    parseSubscripts(e, n, a) {
      if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.includes(n.index)) {
        this.next();
        const f = this.startNodeAt(n);
        f.callee = e, f.arguments = super.parseCallExpressionArguments(11), e = this.finishNode(f, "CallExpression");
      } else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
        const f = this.state.clone(), E = this.tryParse((w) => this.parseAsyncArrowWithTypeParameters(n) || w(), f);
        if (!E.error && !E.aborted) return E.node;
        const A = this.tryParse(() => super.parseSubscripts(e, n, a), f);
        if (A.node && !A.error) return A.node;
        if (E.node)
          return this.state = E.failState, E.node;
        if (A.node)
          return this.state = A.failState, A.node;
        throw E.error || A.error;
      }
      return super.parseSubscripts(e, n, a);
    }
    parseSubscript(e, n, a, f) {
      if (this.match(18) && this.isLookaheadToken_lt()) {
        if (f.optionalChainMember = !0, a)
          return f.stop = !0, e;
        this.next();
        const E = this.startNodeAt(n);
        return E.callee = e, E.typeArguments = this.flowParseTypeParameterInstantiationInExpression(), this.expect(10), E.arguments = this.parseCallExpressionArguments(11), E.optional = !0, this.finishCallExpression(E, !0);
      } else if (!a && this.shouldParseTypes() && (this.match(47) || this.match(51))) {
        const E = this.startNodeAt(n);
        E.callee = e;
        const A = this.tryParse(() => (E.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), E.arguments = super.parseCallExpressionArguments(11), f.optionalChainMember && (E.optional = !1), this.finishCallExpression(E, f.optionalChainMember)));
        if (A.node)
          return A.error && (this.state = A.failState), A.node;
      }
      return super.parseSubscript(e, n, a, f);
    }
    parseNewCallee(e) {
      super.parseNewCallee(e);
      let n = null;
      this.shouldParseTypes() && this.match(47) && (n = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = n;
    }
    parseAsyncArrowWithTypeParameters(e) {
      const n = this.startNodeAt(e);
      if (this.parseFunctionParams(n, !1), !!this.parseArrow(n))
        return super.parseArrowExpression(n, void 0, !0);
    }
    readToken_mult_modulo(e) {
      const n = this.input.charCodeAt(this.state.pos + 1);
      if (e === 42 && n === 47 && this.state.hasFlowComment) {
        this.state.hasFlowComment = !1, this.state.pos += 2, this.nextToken();
        return;
      }
      super.readToken_mult_modulo(e);
    }
    readToken_pipe_amp(e) {
      const n = this.input.charCodeAt(this.state.pos + 1);
      if (e === 124 && n === 125) {
        this.finishOp(9, 2);
        return;
      }
      super.readToken_pipe_amp(e);
    }
    parseTopLevel(e, n) {
      const a = super.parseTopLevel(e, n);
      return this.state.hasFlowComment && this.raise(Y.UnterminatedFlowComment, this.state.curPosition()), a;
    }
    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment)
          throw this.raise(Y.NestedFlowComment, this.state.startLoc);
        this.hasFlowCommentCompletion();
        const e = this.skipFlowComment();
        e && (this.state.pos += e, this.state.hasFlowComment = !0);
        return;
      }
      return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
    }
    skipFlowComment() {
      const {
        pos: e
      } = this.state;
      let n = 2;
      for (; [32, 9].includes(this.input.charCodeAt(e + n)); )
        n++;
      const a = this.input.charCodeAt(n + e), f = this.input.charCodeAt(n + e + 1);
      return a === 58 && f === 58 ? n + 2 : this.input.slice(n + e, n + e + 12) === "flow-include" ? n + 12 : a === 58 && f !== 58 ? n : !1;
    }
    hasFlowCommentCompletion() {
      if (this.input.indexOf("*/", this.state.pos) === -1)
        throw this.raise(y.UnterminatedComment, this.state.curPosition());
    }
    flowEnumErrorBooleanMemberNotInitialized(e, {
      enumName: n,
      memberName: a
    }) {
      this.raise(Y.EnumBooleanMemberNotInitialized, e, {
        memberName: a,
        enumName: n
      });
    }
    flowEnumErrorInvalidMemberInitializer(e, n) {
      return this.raise(n.explicitType ? n.explicitType === "symbol" ? Y.EnumInvalidMemberInitializerSymbolType : Y.EnumInvalidMemberInitializerPrimaryType : Y.EnumInvalidMemberInitializerUnknownType, e, n);
    }
    flowEnumErrorNumberMemberNotInitialized(e, n) {
      this.raise(Y.EnumNumberMemberNotInitialized, e, n);
    }
    flowEnumErrorStringMemberInconsistentlyInitialized(e, n) {
      this.raise(Y.EnumStringMemberInconsistentlyInitialized, e, n);
    }
    flowEnumMemberInit() {
      const e = this.state.startLoc, n = () => this.match(12) || this.match(8);
      switch (this.state.type) {
        case 135: {
          const a = this.parseNumericLiteral(this.state.value);
          return n() ? {
            type: "number",
            loc: a.loc.start,
            value: a
          } : {
            type: "invalid",
            loc: e
          };
        }
        case 134: {
          const a = this.parseStringLiteral(this.state.value);
          return n() ? {
            type: "string",
            loc: a.loc.start,
            value: a
          } : {
            type: "invalid",
            loc: e
          };
        }
        case 85:
        case 86: {
          const a = this.parseBooleanLiteral(this.match(85));
          return n() ? {
            type: "boolean",
            loc: a.loc.start,
            value: a
          } : {
            type: "invalid",
            loc: e
          };
        }
        default:
          return {
            type: "invalid",
            loc: e
          };
      }
    }
    flowEnumMemberRaw() {
      const e = this.state.startLoc, n = this.parseIdentifier(!0), a = this.eat(29) ? this.flowEnumMemberInit() : {
        type: "none",
        loc: e
      };
      return {
        id: n,
        init: a
      };
    }
    flowEnumCheckExplicitTypeMismatch(e, n, a) {
      const {
        explicitType: f
      } = n;
      f !== null && f !== a && this.flowEnumErrorInvalidMemberInitializer(e, n);
    }
    flowEnumMembers({
      enumName: e,
      explicitType: n
    }) {
      const a = /* @__PURE__ */ new Set(), f = {
        booleanMembers: [],
        numberMembers: [],
        stringMembers: [],
        defaultedMembers: []
      };
      let E = !1;
      for (; !this.match(8); ) {
        if (this.eat(21)) {
          E = !0;
          break;
        }
        const A = this.startNode(), {
          id: w,
          init: _
        } = this.flowEnumMemberRaw(), k = w.name;
        if (k === "")
          continue;
        /^[a-z]/.test(k) && this.raise(Y.EnumInvalidMemberName, w, {
          memberName: k,
          suggestion: k[0].toUpperCase() + k.slice(1),
          enumName: e
        }), a.has(k) && this.raise(Y.EnumDuplicateMemberName, w, {
          memberName: k,
          enumName: e
        }), a.add(k);
        const B = {
          enumName: e,
          explicitType: n,
          memberName: k
        };
        switch (A.id = w, _.type) {
          case "boolean": {
            this.flowEnumCheckExplicitTypeMismatch(_.loc, B, "boolean"), A.init = _.value, f.booleanMembers.push(this.finishNode(A, "EnumBooleanMember"));
            break;
          }
          case "number": {
            this.flowEnumCheckExplicitTypeMismatch(_.loc, B, "number"), A.init = _.value, f.numberMembers.push(this.finishNode(A, "EnumNumberMember"));
            break;
          }
          case "string": {
            this.flowEnumCheckExplicitTypeMismatch(_.loc, B, "string"), A.init = _.value, f.stringMembers.push(this.finishNode(A, "EnumStringMember"));
            break;
          }
          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(_.loc, B);
          case "none":
            switch (n) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(_.loc, B);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(_.loc, B);
                break;
              default:
                f.defaultedMembers.push(this.finishNode(A, "EnumDefaultedMember"));
            }
        }
        this.match(8) || this.expect(12);
      }
      return {
        members: f,
        hasUnknownMembers: E
      };
    }
    flowEnumStringMembers(e, n, {
      enumName: a
    }) {
      if (e.length === 0)
        return n;
      if (n.length === 0)
        return e;
      if (n.length > e.length) {
        for (const f of e)
          this.flowEnumErrorStringMemberInconsistentlyInitialized(f, {
            enumName: a
          });
        return n;
      } else {
        for (const f of n)
          this.flowEnumErrorStringMemberInconsistentlyInitialized(f, {
            enumName: a
          });
        return e;
      }
    }
    flowEnumParseExplicitType({
      enumName: e
    }) {
      if (!this.eatContextual(102)) return null;
      if (!ie(this.state.type))
        throw this.raise(Y.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
          enumName: e
        });
      const {
        value: n
      } = this.state;
      return this.next(), n !== "boolean" && n !== "number" && n !== "string" && n !== "symbol" && this.raise(Y.EnumInvalidExplicitType, this.state.startLoc, {
        enumName: e,
        invalidEnumType: n
      }), n;
    }
    flowEnumBody(e, n) {
      const a = n.name, f = n.loc.start, E = this.flowEnumParseExplicitType({
        enumName: a
      });
      this.expect(5);
      const {
        members: A,
        hasUnknownMembers: w
      } = this.flowEnumMembers({
        enumName: a,
        explicitType: E
      });
      switch (e.hasUnknownMembers = w, E) {
        case "boolean":
          return e.explicitType = !0, e.members = A.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
        case "number":
          return e.explicitType = !0, e.members = A.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
        case "string":
          return e.explicitType = !0, e.members = this.flowEnumStringMembers(A.stringMembers, A.defaultedMembers, {
            enumName: a
          }), this.expect(8), this.finishNode(e, "EnumStringBody");
        case "symbol":
          return e.members = A.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
        default: {
          const _ = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
          e.explicitType = !1;
          const k = A.booleanMembers.length, B = A.numberMembers.length, q = A.stringMembers.length, H = A.defaultedMembers.length;
          if (!k && !B && !q && !H)
            return _();
          if (!k && !B)
            return e.members = this.flowEnumStringMembers(A.stringMembers, A.defaultedMembers, {
              enumName: a
            }), this.expect(8), this.finishNode(e, "EnumStringBody");
          if (!B && !q && k >= H) {
            for (const G of A.defaultedMembers)
              this.flowEnumErrorBooleanMemberNotInitialized(G.loc.start, {
                enumName: a,
                memberName: G.id.name
              });
            return e.members = A.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
          } else if (!k && !q && B >= H) {
            for (const G of A.defaultedMembers)
              this.flowEnumErrorNumberMemberNotInitialized(G.loc.start, {
                enumName: a,
                memberName: G.id.name
              });
            return e.members = A.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
          } else
            return this.raise(Y.EnumInconsistentMemberValues, f, {
              enumName: a
            }), _();
        }
      }
    }
    flowParseEnumDeclaration(e) {
      const n = this.parseIdentifier();
      return e.id = n, e.body = this.flowEnumBody(this.startNode(), n), this.finishNode(e, "EnumDeclaration");
    }
    jsxParseOpeningElementAfterName(e) {
      return this.shouldParseTypes() && (this.match(47) || this.match(51)) && (e.typeArguments = this.flowParseTypeParameterInstantiationInExpression()), super.jsxParseOpeningElementAfterName(e);
    }
    isLookaheadToken_lt() {
      const e = this.nextTokenStart();
      if (this.input.charCodeAt(e) === 60) {
        const n = this.input.charCodeAt(e + 1);
        return n !== 60 && n !== 61;
      }
      return !1;
    }
    reScan_lt_gt() {
      const {
        type: e
      } = this.state;
      e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
    }
    reScan_lt() {
      const {
        type: e
      } = this.state;
      return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
    }
    maybeUnwrapTypeCastExpression(e) {
      return e.type === "TypeCastExpression" ? e.expression : e;
    }
  };
  const mf = {
    __proto__: null,
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    frasl: "⁄",
    euro: "€",
    image: "ℑ",
    weierp: "℘",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
  }, yf = /\r\n|[\r\n\u2028\u2029]/, ar = new RegExp(yf.source, "g");
  function Qt(S) {
    switch (S) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return !0;
      default:
        return !1;
    }
  }
  function vo(S, i, e) {
    for (let n = i; n < e; n++)
      if (Qt(S.charCodeAt(n)))
        return !0;
    return !1;
  }
  const Mi = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Ri = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
  function gf(S) {
    switch (S) {
      case 9:
      case 11:
      case 12:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return !0;
      default:
        return !1;
    }
  }
  const Nt = P`jsx`({
    AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
    MissingClosingTagElement: ({
      openingTagName: S
    }) => `Expected corresponding JSX closing tag for <${S}>.`,
    MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
    UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
    UnexpectedToken: ({
      unexpected: S,
      HTMLEntity: i
    }) => `Unexpected token \`${S}\`. Did you mean \`${i}\` or \`{'${S}'}\`?`,
    UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
    UnterminatedJsxContent: "Unterminated JSX contents.",
    UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
  });
  function yt(S) {
    return S ? S.type === "JSXOpeningFragment" || S.type === "JSXClosingFragment" : !1;
  }
  function Zt(S) {
    if (S.type === "JSXIdentifier")
      return S.name;
    if (S.type === "JSXNamespacedName")
      return S.namespace.name + ":" + S.name.name;
    if (S.type === "JSXMemberExpression")
      return Zt(S.object) + "." + Zt(S.property);
    throw new Error("Node had unexpected type: " + S.type);
  }
  var bf = (S) => class extends S {
    jsxReadToken() {
      let e = "", n = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(Nt.UnterminatedJsxContent, this.state.startLoc);
        const a = this.input.charCodeAt(this.state.pos);
        switch (a) {
          case 60:
          case 123:
            if (this.state.pos === this.state.start) {
              a === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(143)) : super.getTokenFromCode(a);
              return;
            }
            e += this.input.slice(n, this.state.pos), this.finishToken(142, e);
            return;
          case 38:
            e += this.input.slice(n, this.state.pos), e += this.jsxReadEntity(), n = this.state.pos;
            break;
          case 62:
          case 125:
          default:
            Qt(a) ? (e += this.input.slice(n, this.state.pos), e += this.jsxReadNewLine(!0), n = this.state.pos) : ++this.state.pos;
        }
      }
    }
    jsxReadNewLine(e) {
      const n = this.input.charCodeAt(this.state.pos);
      let a;
      return ++this.state.pos, n === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, a = e ? `
` : `\r
`) : a = String.fromCharCode(n), ++this.state.curLine, this.state.lineStart = this.state.pos, a;
    }
    jsxReadString(e) {
      let n = "", a = ++this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(y.UnterminatedString, this.state.startLoc);
        const f = this.input.charCodeAt(this.state.pos);
        if (f === e) break;
        f === 38 ? (n += this.input.slice(a, this.state.pos), n += this.jsxReadEntity(), a = this.state.pos) : Qt(f) ? (n += this.input.slice(a, this.state.pos), n += this.jsxReadNewLine(!1), a = this.state.pos) : ++this.state.pos;
      }
      n += this.input.slice(a, this.state.pos++), this.finishToken(134, n);
    }
    jsxReadEntity() {
      const e = ++this.state.pos;
      if (this.codePointAtPos(this.state.pos) === 35) {
        ++this.state.pos;
        let n = 10;
        this.codePointAtPos(this.state.pos) === 120 && (n = 16, ++this.state.pos);
        const a = this.readInt(n, void 0, !1, "bail");
        if (a !== null && this.codePointAtPos(this.state.pos) === 59)
          return ++this.state.pos, String.fromCodePoint(a);
      } else {
        let n = 0, a = !1;
        for (; n++ < 10 && this.state.pos < this.length && !(a = this.codePointAtPos(this.state.pos) === 59); )
          ++this.state.pos;
        if (a) {
          const f = this.input.slice(e, this.state.pos), E = mf[f];
          if (++this.state.pos, E)
            return E;
        }
      }
      return this.state.pos = e, "&";
    }
    jsxReadWord() {
      let e;
      const n = this.state.pos;
      do
        e = this.input.charCodeAt(++this.state.pos);
      while (Yt(e) || e === 45);
      this.finishToken(141, this.input.slice(n, this.state.pos));
    }
    jsxParseIdentifier() {
      const e = this.startNode();
      return this.match(141) ? e.name = this.state.value : Ii(this.state.type) ? e.name = mt(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
    }
    jsxParseNamespacedName() {
      const e = this.state.startLoc, n = this.jsxParseIdentifier();
      if (!this.eat(14)) return n;
      const a = this.startNodeAt(e);
      return a.namespace = n, a.name = this.jsxParseIdentifier(), this.finishNode(a, "JSXNamespacedName");
    }
    jsxParseElementName() {
      const e = this.state.startLoc;
      let n = this.jsxParseNamespacedName();
      if (n.type === "JSXNamespacedName")
        return n;
      for (; this.eat(16); ) {
        const a = this.startNodeAt(e);
        a.object = n, a.property = this.jsxParseIdentifier(), n = this.finishNode(a, "JSXMemberExpression");
      }
      return n;
    }
    jsxParseAttributeValue() {
      let e;
      switch (this.state.type) {
        case 5:
          return e = this.startNode(), this.setContext(v.brace), this.next(), e = this.jsxParseExpressionContainer(e, v.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(Nt.AttributeIsEmpty, e), e;
        case 143:
        case 134:
          return this.parseExprAtom();
        default:
          throw this.raise(Nt.UnsupportedJsxValue, this.state.startLoc);
      }
    }
    jsxParseEmptyExpression() {
      const e = this.startNodeAt(this.state.lastTokEndLoc);
      return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
    }
    jsxParseSpreadChild(e) {
      return this.next(), e.expression = this.parseExpression(), this.setContext(v.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild");
    }
    jsxParseExpressionContainer(e, n) {
      if (this.match(8))
        e.expression = this.jsxParseEmptyExpression();
      else {
        const a = this.parseExpression();
        e.expression = a;
      }
      return this.setContext(n), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXExpressionContainer");
    }
    jsxParseAttribute() {
      const e = this.startNode();
      return this.match(5) ? (this.setContext(v.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(v.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
    }
    jsxParseOpeningElementAt(e) {
      const n = this.startNodeAt(e);
      return this.eat(144) ? this.finishNode(n, "JSXOpeningFragment") : (n.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(n));
    }
    jsxParseOpeningElementAfterName(e) {
      const n = [];
      for (; !this.match(56) && !this.match(144); )
        n.push(this.jsxParseAttribute());
      return e.attributes = n, e.selfClosing = this.eat(56), this.expect(144), this.finishNode(e, "JSXOpeningElement");
    }
    jsxParseClosingElementAt(e) {
      const n = this.startNodeAt(e);
      return this.eat(144) ? this.finishNode(n, "JSXClosingFragment") : (n.name = this.jsxParseElementName(), this.expect(144), this.finishNode(n, "JSXClosingElement"));
    }
    jsxParseElementAt(e) {
      const n = this.startNodeAt(e), a = [], f = this.jsxParseOpeningElementAt(e);
      let E = null;
      if (!f.selfClosing) {
        e: for (; ; )
          switch (this.state.type) {
            case 143:
              if (e = this.state.startLoc, this.next(), this.eat(56)) {
                E = this.jsxParseClosingElementAt(e);
                break e;
              }
              a.push(this.jsxParseElementAt(e));
              break;
            case 142:
              a.push(this.parseLiteral(this.state.value, "JSXText"));
              break;
            case 5: {
              const A = this.startNode();
              this.setContext(v.brace), this.next(), this.match(21) ? a.push(this.jsxParseSpreadChild(A)) : a.push(this.jsxParseExpressionContainer(A, v.j_expr));
              break;
            }
            default:
              this.unexpected();
          }
        yt(f) && !yt(E) && E !== null ? this.raise(Nt.MissingClosingTagFragment, E) : !yt(f) && yt(E) ? this.raise(Nt.MissingClosingTagElement, E, {
          openingTagName: Zt(f.name)
        }) : !yt(f) && !yt(E) && Zt(E.name) !== Zt(f.name) && this.raise(Nt.MissingClosingTagElement, E, {
          openingTagName: Zt(f.name)
        });
      }
      if (yt(f) ? (n.openingFragment = f, n.closingFragment = E) : (n.openingElement = f, n.closingElement = E), n.children = a, this.match(47))
        throw this.raise(Nt.UnwrappedAdjacentJSXElements, this.state.startLoc);
      return yt(f) ? this.finishNode(n, "JSXFragment") : this.finishNode(n, "JSXElement");
    }
    jsxParseElement() {
      const e = this.state.startLoc;
      return this.next(), this.jsxParseElementAt(e);
    }
    setContext(e) {
      const {
        context: n
      } = this.state;
      n[n.length - 1] = e;
    }
    parseExprAtom(e) {
      return this.match(143) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(143), this.jsxParseElement()) : super.parseExprAtom(e);
    }
    skipSpace() {
      this.curContext().preserveSpace || super.skipSpace();
    }
    getTokenFromCode(e) {
      const n = this.curContext();
      if (n === v.j_expr) {
        this.jsxReadToken();
        return;
      }
      if (n === v.j_oTag || n === v.j_cTag) {
        if (nt(e)) {
          this.jsxReadWord();
          return;
        }
        if (e === 62) {
          ++this.state.pos, this.finishToken(144);
          return;
        }
        if ((e === 34 || e === 39) && n === v.j_oTag) {
          this.jsxReadString(e);
          return;
        }
      }
      if (e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
        ++this.state.pos, this.finishToken(143);
        return;
      }
      super.getTokenFromCode(e);
    }
    updateContext(e) {
      const {
        context: n,
        type: a
      } = this.state;
      if (a === 56 && e === 143)
        n.splice(-2, 2, v.j_cTag), this.state.canStartJSXElement = !1;
      else if (a === 143)
        n.push(v.j_oTag);
      else if (a === 144) {
        const f = n[n.length - 1];
        f === v.j_oTag && e === 56 || f === v.j_cTag ? (n.pop(), this.state.canStartJSXElement = n[n.length - 1] === v.j_expr) : (this.setContext(v.j_expr), this.state.canStartJSXElement = !0);
      } else
        this.state.canStartJSXElement = rr(a);
    }
  };
  class xf extends ki {
    constructor(...i) {
      super(...i), this.tsNames = /* @__PURE__ */ new Map();
    }
  }
  class Sf extends Li {
    constructor(...i) {
      super(...i), this.importsStack = [];
    }
    createScope(i) {
      return this.importsStack.push(/* @__PURE__ */ new Set()), new xf(i);
    }
    enter(i) {
      i === 256 && this.importsStack.push(/* @__PURE__ */ new Set()), super.enter(i);
    }
    exit() {
      const i = super.exit();
      return i === 256 && this.importsStack.pop(), i;
    }
    hasImport(i, e) {
      const n = this.importsStack.length;
      if (this.importsStack[n - 1].has(i))
        return !0;
      if (!e && n > 1) {
        for (let a = 0; a < n - 1; a++)
          if (this.importsStack[a].has(i)) return !0;
      }
      return !1;
    }
    declareName(i, e, n) {
      if (e & 4096) {
        this.hasImport(i, !0) && this.parser.raise(y.VarRedeclaration, n, {
          identifierName: i
        }), this.importsStack[this.importsStack.length - 1].add(i);
        return;
      }
      const a = this.currentScope();
      let f = a.tsNames.get(i) || 0;
      if (e & 1024) {
        this.maybeExportDefined(a, i), a.tsNames.set(i, f | 16);
        return;
      }
      super.declareName(i, e, n), e & 2 && (e & 1 || (this.checkRedeclarationInScope(a, i, e, n), this.maybeExportDefined(a, i)), f = f | 1), e & 256 && (f = f | 2), e & 512 && (f = f | 4), e & 128 && (f = f | 8), f && a.tsNames.set(i, f);
    }
    isRedeclaredInScope(i, e, n) {
      const a = i.tsNames.get(e);
      if ((a & 2) > 0) {
        if (n & 256) {
          const f = !!(n & 512), E = (a & 4) > 0;
          return f !== E;
        }
        return !0;
      }
      return n & 128 && (a & 8) > 0 ? i.names.get(e) & 2 ? !!(n & 1) : !1 : n & 2 && (a & 1) > 0 ? !0 : super.isRedeclaredInScope(i, e, n);
    }
    checkLocalExport(i) {
      const {
        name: e
      } = i;
      if (this.hasImport(e)) return;
      const n = this.scopeStack.length;
      for (let a = n - 1; a >= 0; a--) {
        const E = this.scopeStack[a].tsNames.get(e);
        if ((E & 1) > 0 || (E & 16) > 0)
          return;
      }
      super.checkLocalExport(i);
    }
  }
  class Ef {
    constructor() {
      this.stacks = [];
    }
    enter(i) {
      this.stacks.push(i);
    }
    exit() {
      this.stacks.pop();
    }
    currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }
    get hasAwait() {
      return (this.currentFlags() & 2) > 0;
    }
    get hasYield() {
      return (this.currentFlags() & 1) > 0;
    }
    get hasReturn() {
      return (this.currentFlags() & 4) > 0;
    }
    get hasIn() {
      return (this.currentFlags() & 8) > 0;
    }
  }
  function or(S, i) {
    return (S ? 2 : 0) | (i ? 1 : 0);
  }
  class Pf {
    constructor() {
      this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1;
    }
    sourceToOffsetPos(i) {
      return i + this.startIndex;
    }
    offsetToSourcePos(i) {
      return i - this.startIndex;
    }
    hasPlugin(i) {
      if (typeof i == "string")
        return this.plugins.has(i);
      {
        const [e, n] = i;
        if (!this.hasPlugin(e))
          return !1;
        const a = this.plugins.get(e);
        for (const f of Object.keys(n))
          if ((a == null ? void 0 : a[f]) !== n[f])
            return !1;
        return !0;
      }
    }
    getPluginOption(i, e) {
      var n;
      return (n = this.plugins.get(i)) == null ? void 0 : n[e];
    }
  }
  function Co(S, i) {
    S.trailingComments === void 0 ? S.trailingComments = i : S.trailingComments.unshift(...i);
  }
  function Tf(S, i) {
    S.leadingComments === void 0 ? S.leadingComments = i : S.leadingComments.unshift(...i);
  }
  function ws(S, i) {
    S.innerComments === void 0 ? S.innerComments = i : S.innerComments.unshift(...i);
  }
  function _t(S, i, e) {
    let n = null, a = i.length;
    for (; n === null && a > 0; )
      n = i[--a];
    n === null || n.start > e.start ? ws(S, e.comments) : Co(n, e.comments);
  }
  class Af extends Pf {
    addComment(i) {
      this.filename && (i.loc.filename = this.filename);
      const {
        commentsLen: e
      } = this.state;
      this.comments.length !== e && (this.comments.length = e), this.comments.push(i), this.state.commentsLen++;
    }
    processComment(i) {
      const {
        commentStack: e
      } = this.state, n = e.length;
      if (n === 0) return;
      let a = n - 1;
      const f = e[a];
      f.start === i.end && (f.leadingNode = i, a--);
      const {
        start: E
      } = i;
      for (; a >= 0; a--) {
        const A = e[a], w = A.end;
        if (w > E)
          A.containingNode = i, this.finalizeComment(A), e.splice(a, 1);
        else {
          w === E && (A.trailingNode = i);
          break;
        }
      }
    }
    finalizeComment(i) {
      const {
        comments: e
      } = i;
      if (i.leadingNode !== null || i.trailingNode !== null)
        i.leadingNode !== null && Co(i.leadingNode, e), i.trailingNode !== null && Tf(i.trailingNode, e);
      else {
        const {
          containingNode: n,
          start: a
        } = i;
        if (this.input.charCodeAt(this.offsetToSourcePos(a) - 1) === 44)
          switch (n.type) {
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              _t(n, n.properties, i);
              break;
            case "CallExpression":
            case "OptionalCallExpression":
              _t(n, n.arguments, i);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
              _t(n, n.params, i);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              _t(n, n.elements, i);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              _t(n, n.specifiers, i);
              break;
            case "TSEnumDeclaration":
              _t(n, n.members, i);
              break;
            case "TSEnumBody":
              _t(n, n.members, i);
              break;
            default:
              ws(n, e);
          }
        else
          ws(n, e);
      }
    }
    finalizeRemainingComments() {
      const {
        commentStack: i
      } = this.state;
      for (let e = i.length - 1; e >= 0; e--)
        this.finalizeComment(i[e]);
      this.state.commentStack = [];
    }
    resetPreviousNodeTrailingComments(i) {
      const {
        commentStack: e
      } = this.state, {
        length: n
      } = e;
      if (n === 0) return;
      const a = e[n - 1];
      a.leadingNode === i && (a.leadingNode = null);
    }
    resetPreviousIdentifierLeadingComments(i) {
      const {
        commentStack: e
      } = this.state, {
        length: n
      } = e;
      n !== 0 && (e[n - 1].trailingNode === i ? e[n - 1].trailingNode = null : n >= 2 && e[n - 2].trailingNode === i && (e[n - 2].trailingNode = null));
    }
    takeSurroundingComments(i, e, n) {
      const {
        commentStack: a
      } = this.state, f = a.length;
      if (f === 0) return;
      let E = f - 1;
      for (; E >= 0; E--) {
        const A = a[E], w = A.end;
        if (A.start === n)
          A.leadingNode = i;
        else if (w === e)
          A.trailingNode = i;
        else if (w < e)
          break;
      }
    }
  }
  class Di {
    constructor() {
      this.flags = 1024, this.startIndex = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      }, this.labels = [], this.commentsLen = 0, this.commentStack = [], this.pos = 0, this.type = 140, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.context = [v.brace], this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
    }
    get strict() {
      return (this.flags & 1) > 0;
    }
    set strict(i) {
      i ? this.flags |= 1 : this.flags &= -2;
    }
    init({
      strictMode: i,
      sourceType: e,
      startIndex: n,
      startLine: a,
      startColumn: f
    }) {
      this.strict = i === !1 ? !1 : i === !0 ? !0 : e === "module", this.startIndex = n, this.curLine = a, this.lineStart = -f, this.startLoc = this.endLoc = new s(a, f, n);
    }
    get maybeInArrowParameters() {
      return (this.flags & 2) > 0;
    }
    set maybeInArrowParameters(i) {
      i ? this.flags |= 2 : this.flags &= -3;
    }
    get inType() {
      return (this.flags & 4) > 0;
    }
    set inType(i) {
      i ? this.flags |= 4 : this.flags &= -5;
    }
    get noAnonFunctionType() {
      return (this.flags & 8) > 0;
    }
    set noAnonFunctionType(i) {
      i ? this.flags |= 8 : this.flags &= -9;
    }
    get hasFlowComment() {
      return (this.flags & 16) > 0;
    }
    set hasFlowComment(i) {
      i ? this.flags |= 16 : this.flags &= -17;
    }
    get isAmbientContext() {
      return (this.flags & 32) > 0;
    }
    set isAmbientContext(i) {
      i ? this.flags |= 32 : this.flags &= -33;
    }
    get inAbstractClass() {
      return (this.flags & 64) > 0;
    }
    set inAbstractClass(i) {
      i ? this.flags |= 64 : this.flags &= -65;
    }
    get inDisallowConditionalTypesContext() {
      return (this.flags & 128) > 0;
    }
    set inDisallowConditionalTypesContext(i) {
      i ? this.flags |= 128 : this.flags &= -129;
    }
    get soloAwait() {
      return (this.flags & 256) > 0;
    }
    set soloAwait(i) {
      i ? this.flags |= 256 : this.flags &= -257;
    }
    get inFSharpPipelineDirectBody() {
      return (this.flags & 512) > 0;
    }
    set inFSharpPipelineDirectBody(i) {
      i ? this.flags |= 512 : this.flags &= -513;
    }
    get canStartJSXElement() {
      return (this.flags & 1024) > 0;
    }
    set canStartJSXElement(i) {
      i ? this.flags |= 1024 : this.flags &= -1025;
    }
    get containsEsc() {
      return (this.flags & 2048) > 0;
    }
    set containsEsc(i) {
      i ? this.flags |= 2048 : this.flags &= -2049;
    }
    get hasTopLevelAwait() {
      return (this.flags & 4096) > 0;
    }
    set hasTopLevelAwait(i) {
      i ? this.flags |= 4096 : this.flags &= -4097;
    }
    curPosition() {
      return new s(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
    }
    clone() {
      const i = new Di();
      return i.flags = this.flags, i.startIndex = this.startIndex, i.curLine = this.curLine, i.lineStart = this.lineStart, i.startLoc = this.startLoc, i.endLoc = this.endLoc, i.errors = this.errors.slice(), i.potentialArrowAt = this.potentialArrowAt, i.noArrowAt = this.noArrowAt.slice(), i.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice(), i.topicContext = this.topicContext, i.labels = this.labels.slice(), i.commentsLen = this.commentsLen, i.commentStack = this.commentStack.slice(), i.pos = this.pos, i.type = this.type, i.value = this.value, i.start = this.start, i.end = this.end, i.lastTokEndLoc = this.lastTokEndLoc, i.lastTokStartLoc = this.lastTokStartLoc, i.context = this.context.slice(), i.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos, i.strictErrors = this.strictErrors, i.tokensLength = this.tokensLength, i;
    }
  }
  var wf = function(i) {
    return i >= 48 && i <= 57;
  };
  const Io = {
    decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
  }, ur = {
    bin: (S) => S === 48 || S === 49,
    oct: (S) => S >= 48 && S <= 55,
    dec: (S) => S >= 48 && S <= 57,
    hex: (S) => S >= 48 && S <= 57 || S >= 65 && S <= 70 || S >= 97 && S <= 102
  };
  function No(S, i, e, n, a, f) {
    const E = e, A = n, w = a;
    let _ = "", k = null, B = e;
    const {
      length: q
    } = i;
    for (; ; ) {
      if (e >= q) {
        f.unterminated(E, A, w), _ += i.slice(B, e);
        break;
      }
      const H = i.charCodeAt(e);
      if (vf(S, H, i, e)) {
        _ += i.slice(B, e);
        break;
      }
      if (H === 92) {
        _ += i.slice(B, e);
        const G = Cf(i, e, n, a, S === "template", f);
        G.ch === null && !k ? k = {
          pos: e,
          lineStart: n,
          curLine: a
        } : _ += G.ch, {
          pos: e,
          lineStart: n,
          curLine: a
        } = G, B = e;
      } else H === 8232 || H === 8233 ? (++e, ++a, n = e) : H === 10 || H === 13 ? S === "template" ? (_ += i.slice(B, e) + `
`, ++e, H === 13 && i.charCodeAt(e) === 10 && ++e, ++a, B = n = e) : f.unterminated(E, A, w) : ++e;
    }
    return {
      pos: e,
      str: _,
      firstInvalidLoc: k,
      lineStart: n,
      curLine: a,
      containsInvalid: !!k
    };
  }
  function vf(S, i, e, n) {
    return S === "template" ? i === 96 || i === 36 && e.charCodeAt(n + 1) === 123 : i === (S === "double" ? 34 : 39);
  }
  function Cf(S, i, e, n, a, f) {
    const E = !a;
    i++;
    const A = (_) => ({
      pos: i,
      ch: _,
      lineStart: e,
      curLine: n
    }), w = S.charCodeAt(i++);
    switch (w) {
      case 110:
        return A(`
`);
      case 114:
        return A("\r");
      case 120: {
        let _;
        return {
          code: _,
          pos: i
        } = Fi(S, i, e, n, 2, !1, E, f), A(_ === null ? null : String.fromCharCode(_));
      }
      case 117: {
        let _;
        return {
          code: _,
          pos: i
        } = Oo(S, i, e, n, E, f), A(_ === null ? null : String.fromCodePoint(_));
      }
      case 116:
        return A("	");
      case 98:
        return A("\b");
      case 118:
        return A("\v");
      case 102:
        return A("\f");
      case 13:
        S.charCodeAt(i) === 10 && ++i;
      case 10:
        e = i, ++n;
      case 8232:
      case 8233:
        return A("");
      case 56:
      case 57:
        if (a)
          return A(null);
        f.strictNumericEscape(i - 1, e, n);
      default:
        if (w >= 48 && w <= 55) {
          const _ = i - 1;
          let B = /^[0-7]+/.exec(S.slice(_, i + 2))[0], q = parseInt(B, 8);
          q > 255 && (B = B.slice(0, -1), q = parseInt(B, 8)), i += B.length - 1;
          const H = S.charCodeAt(i);
          if (B !== "0" || H === 56 || H === 57) {
            if (a)
              return A(null);
            f.strictNumericEscape(_, e, n);
          }
          return A(String.fromCharCode(q));
        }
        return A(String.fromCharCode(w));
    }
  }
  function Fi(S, i, e, n, a, f, E, A) {
    const w = i;
    let _;
    return {
      n: _,
      pos: i
    } = _o(S, i, e, n, 16, a, f, !1, A, !E), _ === null && (E ? A.invalidEscapeSequence(w, e, n) : i = w - 1), {
      code: _,
      pos: i
    };
  }
  function _o(S, i, e, n, a, f, E, A, w, _) {
    const k = i, B = a === 16 ? Io.hex : Io.decBinOct, q = a === 16 ? ur.hex : a === 10 ? ur.dec : a === 8 ? ur.oct : ur.bin;
    let H = !1, G = 0;
    for (let se = 0, be = f ?? 1 / 0; se < be; ++se) {
      const re = S.charCodeAt(i);
      let ce;
      if (re === 95 && A !== "bail") {
        const Ot = S.charCodeAt(i - 1), bt = S.charCodeAt(i + 1);
        if (A) {
          if (Number.isNaN(bt) || !q(bt) || B.has(Ot) || B.has(bt)) {
            if (_) return {
              n: null,
              pos: i
            };
            w.unexpectedNumericSeparator(i, e, n);
          }
        } else {
          if (_) return {
            n: null,
            pos: i
          };
          w.numericSeparatorInEscapeSequence(i, e, n);
        }
        ++i;
        continue;
      }
      if (re >= 97 ? ce = re - 97 + 10 : re >= 65 ? ce = re - 65 + 10 : wf(re) ? ce = re - 48 : ce = 1 / 0, ce >= a) {
        if (ce <= 9 && _)
          return {
            n: null,
            pos: i
          };
        if (ce <= 9 && w.invalidDigit(i, e, n, a))
          ce = 0;
        else if (E)
          ce = 0, H = !0;
        else
          break;
      }
      ++i, G = G * a + ce;
    }
    return i === k || f != null && i - k !== f || H ? {
      n: null,
      pos: i
    } : {
      n: G,
      pos: i
    };
  }
  function Oo(S, i, e, n, a, f) {
    const E = S.charCodeAt(i);
    let A;
    if (E === 123) {
      if (++i, {
        code: A,
        pos: i
      } = Fi(S, i, e, n, S.indexOf("}", i) - i, !0, a, f), ++i, A !== null && A > 1114111)
        if (a)
          f.invalidCodePoint(i, e, n);
        else
          return {
            code: null,
            pos: i
          };
    } else
      ({
        code: A,
        pos: i
      } = Fi(S, i, e, n, 4, !1, a, f));
    return {
      code: A,
      pos: i
    };
  }
  function vs(S, i, e) {
    return new s(e, S - i, S);
  }
  const If = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]);
  class gt {
    constructor(i) {
      const e = i.startIndex || 0;
      this.type = i.type, this.value = i.value, this.start = e + i.start, this.end = e + i.end, this.loc = new r(i.startLoc, i.endLoc);
    }
  }
  class Nf extends Af {
    constructor(i, e) {
      super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
        invalidDigit: (n, a, f, E) => this.optionFlags & 2048 ? (this.raise(y.InvalidDigit, vs(n, a, f), {
          radix: E
        }), !0) : !1,
        numericSeparatorInEscapeSequence: this.errorBuilder(y.NumericSeparatorInEscapeSequence),
        unexpectedNumericSeparator: this.errorBuilder(y.UnexpectedNumericSeparator)
      }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
        invalidEscapeSequence: this.errorBuilder(y.InvalidEscapeSequence),
        invalidCodePoint: this.errorBuilder(y.InvalidCodePoint)
      }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: (n, a, f) => {
          this.recordStrictModeErrors(y.StrictNumericEscape, vs(n, a, f));
        },
        unterminated: (n, a, f) => {
          throw this.raise(y.UnterminatedString, vs(n - 1, a, f));
        }
      }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: this.errorBuilder(y.StrictNumericEscape),
        unterminated: (n, a, f) => {
          throw this.raise(y.UnterminatedTemplate, vs(n, a, f));
        }
      }), this.state = new Di(), this.state.init(i), this.input = e, this.length = e.length, this.comments = [], this.isLookahead = !1;
    }
    pushToken(i) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(i), ++this.state.tokensLength;
    }
    next() {
      this.checkKeywordEscapes(), this.optionFlags & 256 && this.pushToken(new gt(this.state)), this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
    }
    eat(i) {
      return this.match(i) ? (this.next(), !0) : !1;
    }
    match(i) {
      return this.state.type === i;
    }
    createLookaheadState(i) {
      return {
        pos: i.pos,
        value: null,
        type: i.type,
        start: i.start,
        end: i.end,
        context: [this.curContext()],
        inType: i.inType,
        startLoc: i.startLoc,
        lastTokEndLoc: i.lastTokEndLoc,
        curLine: i.curLine,
        lineStart: i.lineStart,
        curPosition: i.curPosition
      };
    }
    lookahead() {
      const i = this.state;
      this.state = this.createLookaheadState(i), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1;
      const e = this.state;
      return this.state = i, e;
    }
    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }
    nextTokenStartSince(i) {
      return Mi.lastIndex = i, Mi.test(this.input) ? Mi.lastIndex : i;
    }
    lookaheadCharCode() {
      return this.lookaheadCharCodeSince(this.state.pos);
    }
    lookaheadCharCodeSince(i) {
      return this.input.charCodeAt(this.nextTokenStartSince(i));
    }
    nextTokenInLineStart() {
      return this.nextTokenInLineStartSince(this.state.pos);
    }
    nextTokenInLineStartSince(i) {
      return Ri.lastIndex = i, Ri.test(this.input) ? Ri.lastIndex : i;
    }
    lookaheadInLineCharCode() {
      return this.input.charCodeAt(this.nextTokenInLineStart());
    }
    codePointAtPos(i) {
      let e = this.input.charCodeAt(i);
      if ((e & 64512) === 55296 && ++i < this.input.length) {
        const n = this.input.charCodeAt(i);
        (n & 64512) === 56320 && (e = 65536 + ((e & 1023) << 10) + (n & 1023));
      }
      return e;
    }
    setStrict(i) {
      this.state.strict = i, i && (this.state.strictErrors.forEach(([e, n]) => this.raise(e, n)), this.state.strictErrors.clear());
    }
    curContext() {
      return this.state.context[this.state.context.length - 1];
    }
    nextToken() {
      if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
        this.finishToken(140);
        return;
      }
      this.getTokenFromCode(this.codePointAtPos(this.state.pos));
    }
    skipBlockComment(i) {
      let e;
      this.isLookahead || (e = this.state.curPosition());
      const n = this.state.pos, a = this.input.indexOf(i, n + 2);
      if (a === -1)
        throw this.raise(y.UnterminatedComment, this.state.curPosition());
      for (this.state.pos = a + i.length, ar.lastIndex = n + 2; ar.test(this.input) && ar.lastIndex <= a; )
        ++this.state.curLine, this.state.lineStart = ar.lastIndex;
      if (this.isLookahead) return;
      const f = {
        type: "CommentBlock",
        value: this.input.slice(n + 2, a),
        start: this.sourceToOffsetPos(n),
        end: this.sourceToOffsetPos(a + i.length),
        loc: new r(e, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(f), f;
    }
    skipLineComment(i) {
      const e = this.state.pos;
      let n;
      this.isLookahead || (n = this.state.curPosition());
      let a = this.input.charCodeAt(this.state.pos += i);
      if (this.state.pos < this.length)
        for (; !Qt(a) && ++this.state.pos < this.length; )
          a = this.input.charCodeAt(this.state.pos);
      if (this.isLookahead) return;
      const f = this.state.pos, A = {
        type: "CommentLine",
        value: this.input.slice(e + i, f),
        start: this.sourceToOffsetPos(e),
        end: this.sourceToOffsetPos(f),
        loc: new r(n, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(A), A;
    }
    skipSpace() {
      const i = this.state.pos, e = this.optionFlags & 4096 ? [] : null;
      e: for (; this.state.pos < this.length; ) {
        const n = this.input.charCodeAt(this.state.pos);
        switch (n) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;
          case 13:
            this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42: {
                const a = this.skipBlockComment("*/");
                a !== void 0 && (this.addComment(a), e == null || e.push(a));
                break;
              }
              case 47: {
                const a = this.skipLineComment(2);
                a !== void 0 && (this.addComment(a), e == null || e.push(a));
                break;
              }
              default:
                break e;
            }
            break;
          default:
            if (gf(n))
              ++this.state.pos;
            else if (n === 45 && !this.inModule && this.optionFlags & 8192) {
              const a = this.state.pos;
              if (this.input.charCodeAt(a + 1) === 45 && this.input.charCodeAt(a + 2) === 62 && (i === 0 || this.state.lineStart > i)) {
                const f = this.skipLineComment(3);
                f !== void 0 && (this.addComment(f), e == null || e.push(f));
              } else
                break e;
            } else if (n === 60 && !this.inModule && this.optionFlags & 8192) {
              const a = this.state.pos;
              if (this.input.charCodeAt(a + 1) === 33 && this.input.charCodeAt(a + 2) === 45 && this.input.charCodeAt(a + 3) === 45) {
                const f = this.skipLineComment(4);
                f !== void 0 && (this.addComment(f), e == null || e.push(f));
              } else
                break e;
            } else
              break e;
        }
      }
      if ((e == null ? void 0 : e.length) > 0) {
        const n = this.state.pos, a = {
          start: this.sourceToOffsetPos(i),
          end: this.sourceToOffsetPos(n),
          comments: e,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        };
        this.state.commentStack.push(a);
      }
    }
    finishToken(i, e) {
      this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
      const n = this.state.type;
      this.state.type = i, this.state.value = e, this.isLookahead || this.updateContext(n);
    }
    replaceToken(i) {
      this.state.type = i, this.updateContext();
    }
    readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter())
        return;
      const i = this.state.pos + 1, e = this.codePointAtPos(i);
      if (e >= 48 && e <= 57)
        throw this.raise(y.UnexpectedDigitAfterHash, this.state.curPosition());
      if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
          throw this.raise(e === 123 ? y.RecordExpressionHashIncorrectStartSyntaxType : y.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
        this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
      } else nt(e) ? (++this.state.pos, this.finishToken(139, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(139, this.readWord1())) : this.finishOp(27, 1);
    }
    readToken_dot() {
      const i = this.input.charCodeAt(this.state.pos + 1);
      if (i >= 48 && i <= 57) {
        this.readNumber(!0);
        return;
      }
      i === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
    }
    readToken_slash() {
      this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
    }
    readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2) return !1;
      let i = this.input.charCodeAt(this.state.pos + 1);
      if (i !== 33) return !1;
      const e = this.state.pos;
      for (this.state.pos += 1; !Qt(i) && ++this.state.pos < this.length; )
        i = this.input.charCodeAt(this.state.pos);
      const n = this.input.slice(e + 2, this.state.pos);
      return this.finishToken(28, n), !0;
    }
    readToken_mult_modulo(i) {
      let e = i === 42 ? 55 : 54, n = 1, a = this.input.charCodeAt(this.state.pos + 1);
      i === 42 && a === 42 && (n++, a = this.input.charCodeAt(this.state.pos + 2), e = 57), a === 61 && !this.state.inType && (n++, e = i === 37 ? 33 : 30), this.finishOp(e, n);
    }
    readToken_pipe_amp(i) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === i) {
        this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(i === 124 ? 41 : 42, 2);
        return;
      }
      if (i === 124) {
        if (e === 62) {
          this.finishOp(39, 2);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(y.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(9);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(y.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(4);
          return;
        }
      }
      if (e === 61) {
        this.finishOp(30, 2);
        return;
      }
      this.finishOp(i === 124 ? 43 : 45, 1);
    }
    readToken_caret() {
      const i = this.input.charCodeAt(this.state.pos + 1);
      i === 61 && !this.state.inType ? this.finishOp(32, 2) : i === 94 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "^^"
      }]) ? (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94 && this.unexpected()) : this.finishOp(44, 1);
    }
    readToken_atSign() {
      this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "@@"
      }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
    }
    readToken_plus_min(i) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === i) {
        this.finishOp(34, 2);
        return;
      }
      e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
    }
    readToken_lt() {
      const {
        pos: i
      } = this.state, e = this.input.charCodeAt(i + 1);
      if (e === 60) {
        if (this.input.charCodeAt(i + 2) === 61) {
          this.finishOp(30, 3);
          return;
        }
        this.finishOp(51, 2);
        return;
      }
      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(47, 1);
    }
    readToken_gt() {
      const {
        pos: i
      } = this.state, e = this.input.charCodeAt(i + 1);
      if (e === 62) {
        const n = this.input.charCodeAt(i + 2) === 62 ? 3 : 2;
        if (this.input.charCodeAt(i + n) === 61) {
          this.finishOp(30, n + 1);
          return;
        }
        this.finishOp(52, n);
        return;
      }
      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(48, 1);
    }
    readToken_eq_excl(i) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === 61) {
        this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }
      if (i === 61 && e === 62) {
        this.state.pos += 2, this.finishToken(19);
        return;
      }
      this.finishOp(i === 61 ? 29 : 35, 1);
    }
    readToken_question() {
      const i = this.input.charCodeAt(this.state.pos + 1), e = this.input.charCodeAt(this.state.pos + 2);
      i === 63 ? e === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : i === 46 && !(e >= 48 && e <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
    }
    getTokenFromCode(i) {
      switch (i) {
        case 46:
          this.readToken_dot();
          return;
        case 40:
          ++this.state.pos, this.finishToken(10);
          return;
        case 41:
          ++this.state.pos, this.finishToken(11);
          return;
        case 59:
          ++this.state.pos, this.finishToken(13);
          return;
        case 44:
          ++this.state.pos, this.finishToken(12);
          return;
        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(y.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            this.state.pos += 2, this.finishToken(2);
          } else
            ++this.state.pos, this.finishToken(0);
          return;
        case 93:
          ++this.state.pos, this.finishToken(3);
          return;
        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(y.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            this.state.pos += 2, this.finishToken(6);
          } else
            ++this.state.pos, this.finishToken(5);
          return;
        case 125:
          ++this.state.pos, this.finishToken(8);
          return;
        case 58:
          this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
          return;
        case 63:
          this.readToken_question();
          return;
        case 96:
          this.readTemplateToken();
          return;
        case 48: {
          const e = this.input.charCodeAt(this.state.pos + 1);
          if (e === 120 || e === 88) {
            this.readRadixNumber(16);
            return;
          }
          if (e === 111 || e === 79) {
            this.readRadixNumber(8);
            return;
          }
          if (e === 98 || e === 66) {
            this.readRadixNumber(2);
            return;
          }
        }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(!1);
          return;
        case 34:
        case 39:
          this.readString(i);
          return;
        case 47:
          this.readToken_slash();
          return;
        case 37:
        case 42:
          this.readToken_mult_modulo(i);
          return;
        case 124:
        case 38:
          this.readToken_pipe_amp(i);
          return;
        case 94:
          this.readToken_caret();
          return;
        case 43:
        case 45:
          this.readToken_plus_min(i);
          return;
        case 60:
          this.readToken_lt();
          return;
        case 62:
          this.readToken_gt();
          return;
        case 61:
        case 33:
          this.readToken_eq_excl(i);
          return;
        case 126:
          this.finishOp(36, 1);
          return;
        case 64:
          this.readToken_atSign();
          return;
        case 35:
          this.readToken_numberSign();
          return;
        case 92:
          this.readWord();
          return;
        default:
          if (nt(i)) {
            this.readWord(i);
            return;
          }
      }
      throw this.raise(y.InvalidOrUnexpectedToken, this.state.curPosition(), {
        unexpected: String.fromCodePoint(i)
      });
    }
    finishOp(i, e) {
      const n = this.input.slice(this.state.pos, this.state.pos + e);
      this.state.pos += e, this.finishToken(i, n);
    }
    readRegexp() {
      const i = this.state.startLoc, e = this.state.start + 1;
      let n, a, {
        pos: f
      } = this.state;
      for (; ; ++f) {
        if (f >= this.length)
          throw this.raise(y.UnterminatedRegExp, o(i, 1));
        const _ = this.input.charCodeAt(f);
        if (Qt(_))
          throw this.raise(y.UnterminatedRegExp, o(i, 1));
        if (n)
          n = !1;
        else {
          if (_ === 91)
            a = !0;
          else if (_ === 93 && a)
            a = !1;
          else if (_ === 47 && !a)
            break;
          n = _ === 92;
        }
      }
      const E = this.input.slice(e, f);
      ++f;
      let A = "";
      const w = () => o(i, f + 2 - e);
      for (; f < this.length; ) {
        const _ = this.codePointAtPos(f), k = String.fromCharCode(_);
        if (If.has(_))
          _ === 118 ? A.includes("u") && this.raise(y.IncompatibleRegExpUVFlags, w()) : _ === 117 && A.includes("v") && this.raise(y.IncompatibleRegExpUVFlags, w()), A.includes(k) && this.raise(y.DuplicateRegExpFlags, w());
        else if (Yt(_) || _ === 92)
          this.raise(y.MalformedRegExpFlags, w());
        else
          break;
        ++f, A += k;
      }
      this.state.pos = f, this.finishToken(138, {
        pattern: E,
        flags: A
      });
    }
    readInt(i, e, n = !1, a = !0) {
      const {
        n: f,
        pos: E
      } = _o(this.input, this.state.pos, this.state.lineStart, this.state.curLine, i, e, n, a, this.errorHandlers_readInt, !1);
      return this.state.pos = E, f;
    }
    readRadixNumber(i) {
      const e = this.state.pos, n = this.state.curPosition();
      let a = !1;
      this.state.pos += 2;
      const f = this.readInt(i);
      f == null && this.raise(y.InvalidDigit, o(n, 2), {
        radix: i
      });
      const E = this.input.charCodeAt(this.state.pos);
      if (E === 110)
        ++this.state.pos, a = !0;
      else if (E === 109)
        throw this.raise(y.InvalidDecimal, n);
      if (nt(this.codePointAtPos(this.state.pos)))
        throw this.raise(y.NumberIdentifier, this.state.curPosition());
      if (a) {
        const A = this.input.slice(e, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(136, A);
        return;
      }
      this.finishToken(135, f);
    }
    readNumber(i) {
      const e = this.state.pos, n = this.state.curPosition();
      let a = !1, f = !1, E = !1, A = !1;
      !i && this.readInt(10) === null && this.raise(y.InvalidNumber, this.state.curPosition());
      const w = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
      if (w) {
        const H = this.input.slice(e, this.state.pos);
        if (this.recordStrictModeErrors(y.StrictOctalLiteral, n), !this.state.strict) {
          const G = H.indexOf("_");
          G > 0 && this.raise(y.ZeroDigitNumericSeparator, o(n, G));
        }
        A = w && !/[89]/.test(H);
      }
      let _ = this.input.charCodeAt(this.state.pos);
      if (_ === 46 && !A && (++this.state.pos, this.readInt(10), a = !0, _ = this.input.charCodeAt(this.state.pos)), (_ === 69 || _ === 101) && !A && (_ = this.input.charCodeAt(++this.state.pos), (_ === 43 || _ === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(y.InvalidOrMissingExponent, n), a = !0, E = !0, _ = this.input.charCodeAt(this.state.pos)), _ === 110 && ((a || w) && this.raise(y.InvalidBigIntLiteral, n), ++this.state.pos, f = !0), _ === 109) {
        this.expectPlugin("decimal", this.state.curPosition()), (E || w) && this.raise(y.InvalidDecimal, n), ++this.state.pos;
        var k = !0;
      }
      if (nt(this.codePointAtPos(this.state.pos)))
        throw this.raise(y.NumberIdentifier, this.state.curPosition());
      const B = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
      if (f) {
        this.finishToken(136, B);
        return;
      }
      if (k) {
        this.finishToken(137, B);
        return;
      }
      const q = A ? parseInt(B, 8) : parseFloat(B);
      this.finishToken(135, q);
    }
    readCodePoint(i) {
      const {
        code: e,
        pos: n
      } = Oo(this.input, this.state.pos, this.state.lineStart, this.state.curLine, i, this.errorHandlers_readCodePoint);
      return this.state.pos = n, e;
    }
    readString(i) {
      const {
        str: e,
        pos: n,
        curLine: a,
        lineStart: f
      } = No(i === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
      this.state.pos = n + 1, this.state.lineStart = f, this.state.curLine = a, this.finishToken(134, e);
    }
    readTemplateContinuation() {
      this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
    }
    readTemplateToken() {
      const i = this.input[this.state.pos], {
        str: e,
        firstInvalidLoc: n,
        pos: a,
        curLine: f,
        lineStart: E
      } = No("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
      this.state.pos = a + 1, this.state.lineStart = E, this.state.curLine = f, n && (this.state.firstInvalidTemplateEscapePos = new s(n.curLine, n.pos - n.lineStart, this.sourceToOffsetPos(n.pos))), this.input.codePointAt(a) === 96 ? this.finishToken(24, n ? null : i + e + "`") : (this.state.pos++, this.finishToken(25, n ? null : i + e + "${"));
    }
    recordStrictModeErrors(i, e) {
      const n = e.index;
      this.state.strict && !this.state.strictErrors.has(n) ? this.raise(i, e) : this.state.strictErrors.set(n, [i, e]);
    }
    readWord1(i) {
      this.state.containsEsc = !1;
      let e = "";
      const n = this.state.pos;
      let a = this.state.pos;
      for (i !== void 0 && (this.state.pos += i <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
        const f = this.codePointAtPos(this.state.pos);
        if (Yt(f))
          this.state.pos += f <= 65535 ? 1 : 2;
        else if (f === 92) {
          this.state.containsEsc = !0, e += this.input.slice(a, this.state.pos);
          const E = this.state.curPosition(), A = this.state.pos === n ? nt : Yt;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(y.MissingUnicodeEscape, this.state.curPosition()), a = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          const w = this.readCodePoint(!0);
          w !== null && (A(w) || this.raise(y.EscapedCharNotAnIdentifier, E), e += String.fromCodePoint(w)), a = this.state.pos;
        } else
          break;
      }
      return e + this.input.slice(a, this.state.pos);
    }
    readWord(i) {
      const e = this.readWord1(i), n = pe.get(e);
      n !== void 0 ? this.finishToken(n, mt(n)) : this.finishToken(132, e);
    }
    checkKeywordEscapes() {
      const {
        type: i
      } = this.state;
      Ii(i) && this.state.containsEsc && this.raise(y.InvalidEscapedReservedWord, this.state.startLoc, {
        reservedWord: mt(i)
      });
    }
    raise(i, e, n = {}) {
      const a = e instanceof s ? e : e.loc.start, f = i(a, n);
      if (!(this.optionFlags & 2048)) throw f;
      return this.isLookahead || this.state.errors.push(f), f;
    }
    raiseOverwrite(i, e, n = {}) {
      const a = e instanceof s ? e : e.loc.start, f = a.index, E = this.state.errors;
      for (let A = E.length - 1; A >= 0; A--) {
        const w = E[A];
        if (w.loc.index === f)
          return E[A] = i(a, n);
        if (w.loc.index < f) break;
      }
      return this.raise(i, e, n);
    }
    updateContext(i) {
    }
    unexpected(i, e) {
      throw this.raise(y.UnexpectedToken, i ?? this.state.startLoc, {
        expected: e ? mt(e) : null
      });
    }
    expectPlugin(i, e) {
      if (this.hasPlugin(i))
        return !0;
      throw this.raise(y.MissingPlugin, e ?? this.state.startLoc, {
        missingPlugin: [i]
      });
    }
    expectOnePlugin(i) {
      if (!i.some((e) => this.hasPlugin(e)))
        throw this.raise(y.MissingOneOfPlugins, this.state.startLoc, {
          missingPlugin: i
        });
    }
    errorBuilder(i) {
      return (e, n, a) => {
        this.raise(i, vs(e, n, a));
      };
    }
  }
  class _f {
    constructor() {
      this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
    }
  }
  class Of {
    constructor(i) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = i;
    }
    current() {
      return this.stack[this.stack.length - 1];
    }
    enter() {
      this.stack.push(new _f());
    }
    exit() {
      const i = this.stack.pop(), e = this.current();
      for (const [n, a] of Array.from(i.undefinedPrivateNames))
        e ? e.undefinedPrivateNames.has(n) || e.undefinedPrivateNames.set(n, a) : this.parser.raise(y.InvalidPrivateFieldResolution, a, {
          identifierName: n
        });
    }
    declarePrivateName(i, e, n) {
      const {
        privateNames: a,
        loneAccessors: f,
        undefinedPrivateNames: E
      } = this.current();
      let A = a.has(i);
      if (e & 3) {
        const w = A && f.get(i);
        if (w) {
          const _ = w & 4, k = e & 4, B = w & 3, q = e & 3;
          A = B === q || _ !== k, A || f.delete(i);
        } else A || f.set(i, e);
      }
      A && this.parser.raise(y.PrivateNameRedeclaration, n, {
        identifierName: i
      }), a.add(i), E.delete(i);
    }
    usePrivateName(i, e) {
      let n;
      for (n of this.stack)
        if (n.privateNames.has(i)) return;
      n ? n.undefinedPrivateNames.set(i, e) : this.parser.raise(y.InvalidPrivateFieldResolution, e, {
        identifierName: i
      });
    }
  }
  class lr {
    constructor(i = 0) {
      this.type = i;
    }
    canBeArrowParameterDeclaration() {
      return this.type === 2 || this.type === 1;
    }
    isCertainlyParameterDeclaration() {
      return this.type === 3;
    }
  }
  class ko extends lr {
    constructor(i) {
      super(i), this.declarationErrors = /* @__PURE__ */ new Map();
    }
    recordDeclarationError(i, e) {
      const n = e.index;
      this.declarationErrors.set(n, [i, e]);
    }
    clearDeclarationError(i) {
      this.declarationErrors.delete(i);
    }
    iterateErrors(i) {
      this.declarationErrors.forEach(i);
    }
  }
  class kf {
    constructor(i) {
      this.parser = void 0, this.stack = [new lr()], this.parser = i;
    }
    enter(i) {
      this.stack.push(i);
    }
    exit() {
      this.stack.pop();
    }
    recordParameterInitializerError(i, e) {
      const n = e.loc.start, {
        stack: a
      } = this;
      let f = a.length - 1, E = a[f];
      for (; !E.isCertainlyParameterDeclaration(); ) {
        if (E.canBeArrowParameterDeclaration())
          E.recordDeclarationError(i, n);
        else
          return;
        E = a[--f];
      }
      this.parser.raise(i, n);
    }
    recordArrowParameterBindingError(i, e) {
      const {
        stack: n
      } = this, a = n[n.length - 1], f = e.loc.start;
      if (a.isCertainlyParameterDeclaration())
        this.parser.raise(i, f);
      else if (a.canBeArrowParameterDeclaration())
        a.recordDeclarationError(i, f);
      else
        return;
    }
    recordAsyncArrowParametersError(i) {
      const {
        stack: e
      } = this;
      let n = e.length - 1, a = e[n];
      for (; a.canBeArrowParameterDeclaration(); )
        a.type === 2 && a.recordDeclarationError(y.AwaitBindingIdentifier, i), a = e[--n];
    }
    validateAsPattern() {
      const {
        stack: i
      } = this, e = i[i.length - 1];
      e.canBeArrowParameterDeclaration() && e.iterateErrors(([n, a]) => {
        this.parser.raise(n, a);
        let f = i.length - 2, E = i[f];
        for (; E.canBeArrowParameterDeclaration(); )
          E.clearDeclarationError(a.index), E = i[--f];
      });
    }
  }
  function Lf() {
    return new lr(3);
  }
  function Mf() {
    return new ko(1);
  }
  function Rf() {
    return new ko(2);
  }
  function Lo() {
    return new lr();
  }
  class Df extends Nf {
    addExtra(i, e, n, a = !0) {
      if (!i) return;
      let {
        extra: f
      } = i;
      f == null && (f = {}, i.extra = f), a ? f[e] = n : Object.defineProperty(f, e, {
        enumerable: a,
        value: n
      });
    }
    isContextual(i) {
      return this.state.type === i && !this.state.containsEsc;
    }
    isUnparsedContextual(i, e) {
      const n = i + e.length;
      if (this.input.slice(i, n) === e) {
        const a = this.input.charCodeAt(n);
        return !(Yt(a) || (a & 64512) === 55296);
      }
      return !1;
    }
    isLookaheadContextual(i) {
      const e = this.nextTokenStart();
      return this.isUnparsedContextual(e, i);
    }
    eatContextual(i) {
      return this.isContextual(i) ? (this.next(), !0) : !1;
    }
    expectContextual(i, e) {
      if (!this.eatContextual(i)) {
        if (e != null)
          throw this.raise(e, this.state.startLoc);
        this.unexpected(null, i);
      }
    }
    canInsertSemicolon() {
      return this.match(140) || this.match(8) || this.hasPrecedingLineBreak();
    }
    hasPrecedingLineBreak() {
      return vo(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
    }
    hasFollowingLineBreak() {
      return vo(this.input, this.state.end, this.nextTokenStart());
    }
    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }
    semicolon(i = !0) {
      (i ? this.isLineTerminator() : this.eat(13)) || this.raise(y.MissingSemicolon, this.state.lastTokEndLoc);
    }
    expect(i, e) {
      this.eat(i) || this.unexpected(e, i);
    }
    tryParse(i, e = this.state.clone()) {
      const n = {
        node: null
      };
      try {
        const a = i((f = null) => {
          throw n.node = f, n;
        });
        if (this.state.errors.length > e.errors.length) {
          const f = this.state;
          return this.state = e, this.state.tokensLength = f.tokensLength, {
            node: a,
            error: f.errors[e.errors.length],
            thrown: !1,
            aborted: !1,
            failState: f
          };
        }
        return {
          node: a,
          error: null,
          thrown: !1,
          aborted: !1,
          failState: null
        };
      } catch (a) {
        const f = this.state;
        if (this.state = e, a instanceof SyntaxError)
          return {
            node: null,
            error: a,
            thrown: !0,
            aborted: !1,
            failState: f
          };
        if (a === n)
          return {
            node: n.node,
            error: null,
            thrown: !1,
            aborted: !0,
            failState: f
          };
        throw a;
      }
    }
    checkExpressionErrors(i, e) {
      if (!i) return !1;
      const {
        shorthandAssignLoc: n,
        doubleProtoLoc: a,
        privateKeyLoc: f,
        optionalParametersLoc: E
      } = i, A = !!n || !!a || !!E || !!f;
      if (!e)
        return A;
      n != null && this.raise(y.InvalidCoverInitializedName, n), a != null && this.raise(y.DuplicateProto, a), f != null && this.raise(y.UnexpectedPrivateField, f), E != null && this.unexpected(E);
    }
    isLiteralPropertyName() {
      return Jt(this.state.type);
    }
    isPrivateName(i) {
      return i.type === "PrivateName";
    }
    getPrivateNameSV(i) {
      return i.id.name;
    }
    hasPropertyAsPrivateName(i) {
      return (i.type === "MemberExpression" || i.type === "OptionalMemberExpression") && this.isPrivateName(i.property);
    }
    isObjectProperty(i) {
      return i.type === "ObjectProperty";
    }
    isObjectMethod(i) {
      return i.type === "ObjectMethod";
    }
    initializeScopes(i = this.options.sourceType === "module") {
      const e = this.state.labels;
      this.state.labels = [];
      const n = this.exportedIdentifiers;
      this.exportedIdentifiers = /* @__PURE__ */ new Set();
      const a = this.inModule;
      this.inModule = i;
      const f = this.scope, E = this.getScopeHandler();
      this.scope = new E(this, i);
      const A = this.prodParam;
      this.prodParam = new Ef();
      const w = this.classScope;
      this.classScope = new Of(this);
      const _ = this.expressionScope;
      return this.expressionScope = new kf(this), () => {
        this.state.labels = e, this.exportedIdentifiers = n, this.inModule = a, this.scope = f, this.prodParam = A, this.classScope = w, this.expressionScope = _;
      };
    }
    enterInitialScopes() {
      let i = 0;
      this.inModule && (i |= 2), this.optionFlags & 32 && (i |= 1), this.scope.enter(1), this.prodParam.enter(i);
    }
    checkDestructuringPrivate(i) {
      const {
        privateKeyLoc: e
      } = i;
      e !== null && this.expectPlugin("destructuringPrivate", e);
    }
  }
  class cr {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
    }
  }
  class hr {
    constructor(i, e, n) {
      this.type = "", this.start = e, this.end = 0, this.loc = new r(n), (i == null ? void 0 : i.optionFlags) & 128 && (this.range = [e, 0]), i != null && i.filename && (this.loc.filename = i.filename);
    }
  }
  const Bi = hr.prototype;
  Bi.__clone = function() {
    const S = new hr(void 0, this.start, this.loc.start), i = Object.keys(this);
    for (let e = 0, n = i.length; e < n; e++) {
      const a = i[e];
      a !== "leadingComments" && a !== "trailingComments" && a !== "innerComments" && (S[a] = this[a]);
    }
    return S;
  };
  class Ff extends Df {
    startNode() {
      const i = this.state.startLoc;
      return new hr(this, i.index, i);
    }
    startNodeAt(i) {
      return new hr(this, i.index, i);
    }
    startNodeAtNode(i) {
      return this.startNodeAt(i.loc.start);
    }
    finishNode(i, e) {
      return this.finishNodeAt(i, e, this.state.lastTokEndLoc);
    }
    finishNodeAt(i, e, n) {
      return i.type = e, i.end = n.index, i.loc.end = n, this.optionFlags & 128 && (i.range[1] = n.index), this.optionFlags & 4096 && this.processComment(i), i;
    }
    resetStartLocation(i, e) {
      i.start = e.index, i.loc.start = e, this.optionFlags & 128 && (i.range[0] = e.index);
    }
    resetEndLocation(i, e = this.state.lastTokEndLoc) {
      i.end = e.index, i.loc.end = e, this.optionFlags & 128 && (i.range[1] = e.index);
    }
    resetStartLocationFromNode(i, e) {
      this.resetStartLocation(i, e.loc.start);
    }
    castNodeTo(i, e) {
      return i.type = e, i;
    }
    cloneIdentifier(i) {
      const {
        type: e,
        start: n,
        end: a,
        loc: f,
        range: E,
        name: A
      } = i, w = Object.create(Bi);
      return w.type = e, w.start = n, w.end = a, w.loc = f, w.range = E, w.name = A, i.extra && (w.extra = i.extra), w;
    }
    cloneStringLiteral(i) {
      const {
        type: e,
        start: n,
        end: a,
        loc: f,
        range: E,
        extra: A
      } = i, w = Object.create(Bi);
      return w.type = e, w.start = n, w.end = a, w.loc = f, w.range = E, w.extra = A, w.value = i.value, w;
    }
  }
  const Mo = (S) => S.type === "ParenthesizedExpression" ? Mo(S.expression) : S;
  class Bf extends Ff {
    toAssignable(i, e = !1) {
      var n, a;
      let f;
      switch ((i.type === "ParenthesizedExpression" || (n = i.extra) != null && n.parenthesized) && (f = Mo(i), e ? f.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(y.InvalidParenthesizedAssignment, i) : f.type !== "MemberExpression" && !this.isOptionalMemberExpression(f) && this.raise(y.InvalidParenthesizedAssignment, i) : this.raise(y.InvalidParenthesizedAssignment, i)), i.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          this.castNodeTo(i, "ObjectPattern");
          for (let A = 0, w = i.properties.length, _ = w - 1; A < w; A++) {
            var E;
            const k = i.properties[A], B = A === _;
            this.toAssignableObjectExpressionProp(k, B, e), B && k.type === "RestElement" && (E = i.extra) != null && E.trailingCommaLoc && this.raise(y.RestTrailingComma, i.extra.trailingCommaLoc);
          }
          break;
        case "ObjectProperty": {
          const {
            key: A,
            value: w
          } = i;
          this.isPrivateName(A) && this.classScope.usePrivateName(this.getPrivateNameSV(A), A.loc.start), this.toAssignable(w, e);
          break;
        }
        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
        case "ArrayExpression":
          this.castNodeTo(i, "ArrayPattern"), this.toAssignableList(i.elements, (a = i.extra) == null ? void 0 : a.trailingCommaLoc, e);
          break;
        case "AssignmentExpression":
          i.operator !== "=" && this.raise(y.MissingEqInAssignment, i.left.loc.end), this.castNodeTo(i, "AssignmentPattern"), delete i.operator, this.toAssignable(i.left, e);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(f, e);
          break;
      }
    }
    toAssignableObjectExpressionProp(i, e, n) {
      if (i.type === "ObjectMethod")
        this.raise(i.kind === "get" || i.kind === "set" ? y.PatternHasAccessor : y.PatternHasMethod, i.key);
      else if (i.type === "SpreadElement") {
        this.castNodeTo(i, "RestElement");
        const a = i.argument;
        this.checkToRestConversion(a, !1), this.toAssignable(a, n), e || this.raise(y.RestTrailingComma, i);
      } else
        this.toAssignable(i, n);
    }
    toAssignableList(i, e, n) {
      const a = i.length - 1;
      for (let f = 0; f <= a; f++) {
        const E = i[f];
        E && (this.toAssignableListItem(i, f, n), E.type === "RestElement" && (f < a ? this.raise(y.RestTrailingComma, E) : e && this.raise(y.RestTrailingComma, e)));
      }
    }
    toAssignableListItem(i, e, n) {
      const a = i[e];
      if (a.type === "SpreadElement") {
        this.castNodeTo(a, "RestElement");
        const f = a.argument;
        this.checkToRestConversion(f, !0), this.toAssignable(f, n);
      } else
        this.toAssignable(a, n);
    }
    isAssignable(i, e) {
      switch (i.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          return !0;
        case "ObjectExpression": {
          const n = i.properties.length - 1;
          return i.properties.every((a, f) => a.type !== "ObjectMethod" && (f === n || a.type !== "SpreadElement") && this.isAssignable(a));
        }
        case "ObjectProperty":
          return this.isAssignable(i.value);
        case "SpreadElement":
          return this.isAssignable(i.argument);
        case "ArrayExpression":
          return i.elements.every((n) => n === null || this.isAssignable(n));
        case "AssignmentExpression":
          return i.operator === "=";
        case "ParenthesizedExpression":
          return this.isAssignable(i.expression);
        case "MemberExpression":
        case "OptionalMemberExpression":
          return !e;
        default:
          return !1;
      }
    }
    toReferencedList(i, e) {
      return i;
    }
    toReferencedListDeep(i, e) {
      this.toReferencedList(i, e);
      for (const n of i)
        (n == null ? void 0 : n.type) === "ArrayExpression" && this.toReferencedListDeep(n.elements);
    }
    parseSpread(i) {
      const e = this.startNode();
      return this.next(), e.argument = this.parseMaybeAssignAllowIn(i, void 0), this.finishNode(e, "SpreadElement");
    }
    parseRestBinding() {
      const i = this.startNode();
      return this.next(), i.argument = this.parseBindingAtom(), this.finishNode(i, "RestElement");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 0: {
          const i = this.startNode();
          return this.next(), i.elements = this.parseBindingList(3, 93, 1), this.finishNode(i, "ArrayPattern");
        }
        case 5:
          return this.parseObjectLike(8, !0);
      }
      return this.parseIdentifier();
    }
    parseBindingList(i, e, n) {
      const a = n & 1, f = [];
      let E = !0;
      for (; !this.eat(i); )
        if (E ? E = !1 : this.expect(12), a && this.match(12))
          f.push(null);
        else {
          if (this.eat(i))
            break;
          if (this.match(21)) {
            let A = this.parseRestBinding();
            if ((this.hasPlugin("flow") || n & 2) && (A = this.parseFunctionParamType(A)), f.push(A), !this.checkCommaAfterRest(e)) {
              this.expect(i);
              break;
            }
          } else {
            const A = [];
            if (n & 2)
              for (this.match(26) && this.hasPlugin("decorators") && this.raise(y.UnsupportedParameterDecorator, this.state.startLoc); this.match(26); )
                A.push(this.parseDecorator());
            f.push(this.parseBindingElement(n, A));
          }
        }
      return f;
    }
    parseBindingRestProperty(i) {
      return this.next(), i.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(i, "RestElement");
    }
    parseBindingProperty() {
      const {
        type: i,
        startLoc: e
      } = this.state;
      if (i === 21)
        return this.parseBindingRestProperty(this.startNode());
      const n = this.startNode();
      return i === 139 ? (this.expectPlugin("destructuringPrivate", e), this.classScope.usePrivateName(this.state.value, e), n.key = this.parsePrivateName()) : this.parsePropertyName(n), n.method = !1, this.parseObjPropValue(n, e, !1, !1, !0, !1);
    }
    parseBindingElement(i, e) {
      const n = this.parseMaybeDefault();
      return (this.hasPlugin("flow") || i & 2) && this.parseFunctionParamType(n), e.length && (n.decorators = e, this.resetStartLocationFromNode(n, e[0])), this.parseMaybeDefault(n.loc.start, n);
    }
    parseFunctionParamType(i) {
      return i;
    }
    parseMaybeDefault(i, e) {
      if (i ?? (i = this.state.startLoc), e = e ?? this.parseBindingAtom(), !this.eat(29)) return e;
      const n = this.startNodeAt(i);
      return n.left = e, n.right = this.parseMaybeAssignAllowIn(), this.finishNode(n, "AssignmentPattern");
    }
    isValidLVal(i, e, n) {
      switch (i) {
        case "AssignmentPattern":
          return "left";
        case "RestElement":
          return "argument";
        case "ObjectProperty":
          return "value";
        case "ParenthesizedExpression":
          return "expression";
        case "ArrayPattern":
          return "elements";
        case "ObjectPattern":
          return "properties";
      }
      return !1;
    }
    isOptionalMemberExpression(i) {
      return i.type === "OptionalMemberExpression";
    }
    checkLVal(i, e, n = 64, a = !1, f = !1, E = !1) {
      var A;
      const w = i.type;
      if (this.isObjectMethod(i)) return;
      const _ = this.isOptionalMemberExpression(i);
      if (_ || w === "MemberExpression") {
        _ && (this.expectPlugin("optionalChainingAssign", i.loc.start), e.type !== "AssignmentExpression" && this.raise(y.InvalidLhsOptionalChaining, i, {
          ancestor: e
        })), n !== 64 && this.raise(y.InvalidPropertyBindingPattern, i);
        return;
      }
      if (w === "Identifier") {
        this.checkIdentifier(i, n, f);
        const {
          name: se
        } = i;
        a && (a.has(se) ? this.raise(y.ParamDupe, i) : a.add(se));
        return;
      }
      const k = this.isValidLVal(w, !(E || (A = i.extra) != null && A.parenthesized) && e.type === "AssignmentExpression", n);
      if (k === !0) return;
      if (k === !1) {
        const se = n === 64 ? y.InvalidLhs : y.InvalidLhsBinding;
        this.raise(se, i, {
          ancestor: e
        });
        return;
      }
      let B, q;
      typeof k == "string" ? (B = k, q = w === "ParenthesizedExpression") : [B, q] = k;
      const H = w === "ArrayPattern" || w === "ObjectPattern" ? {
        type: w
      } : e, G = i[B];
      if (Array.isArray(G))
        for (const se of G)
          se && this.checkLVal(se, H, n, a, f, q);
      else G && this.checkLVal(G, H, n, a, f, q);
    }
    checkIdentifier(i, e, n = !1) {
      this.state.strict && (n ? Ao(i.name, this.inModule) : To(i.name)) && (e === 64 ? this.raise(y.StrictEvalArguments, i, {
        referenceName: i.name
      }) : this.raise(y.StrictEvalArgumentsBinding, i, {
        bindingName: i.name
      })), e & 8192 && i.name === "let" && this.raise(y.LetInLexicalBinding, i), e & 64 || this.declareNameFromIdentifier(i, e);
    }
    declareNameFromIdentifier(i, e) {
      this.scope.declareName(i.name, e, i.loc.start);
    }
    checkToRestConversion(i, e) {
      switch (i.type) {
        case "ParenthesizedExpression":
          this.checkToRestConversion(i.expression, e);
          break;
        case "Identifier":
        case "MemberExpression":
          break;
        case "ArrayExpression":
        case "ObjectExpression":
          if (e) break;
        default:
          this.raise(y.InvalidRestAssignmentPattern, i);
      }
    }
    checkCommaAfterRest(i) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === i ? y.RestTrailingComma : y.ElementAfterRest, this.state.startLoc), !0) : !1;
    }
  }
  function Uf(S) {
    if (S == null)
      throw new Error(`Unexpected ${S} value.`);
    return S;
  }
  function Ro(S) {
    if (!S)
      throw new Error("Assert fail");
  }
  const K = P`typescript`({
    AbstractMethodHasImplementation: ({
      methodName: S
    }) => `Method '${S}' cannot have an implementation because it is marked abstract.`,
    AbstractPropertyHasInitializer: ({
      propertyName: S
    }) => `Property '${S}' cannot have an initializer because it is marked abstract.`,
    AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
    AccessorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
    AccessorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
    ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
    ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
    ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
    ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
    DeclareAccessor: ({
      kind: S
    }) => `'declare' is not allowed in ${S}ters.`,
    DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
    DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
    DuplicateAccessibilityModifier: ({
      modifier: S
    }) => "Accessibility modifier already seen.",
    DuplicateModifier: ({
      modifier: S
    }) => `Duplicate modifier: '${S}'.`,
    EmptyHeritageClauseType: ({
      token: S
    }) => `'${S}' list cannot be empty.`,
    EmptyTypeArguments: "Type argument list cannot be empty.",
    EmptyTypeParameters: "Type parameter list cannot be empty.",
    ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
    ImportAliasHasImportType: "An import alias can not use 'import type'.",
    ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
    IncompatibleModifiers: ({
      modifiers: S
    }) => `'${S[0]}' modifier cannot be used with '${S[1]}' modifier.`,
    IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
    IndexSignatureHasAccessibility: ({
      modifier: S
    }) => `Index signatures cannot have an accessibility modifier ('${S}').`,
    IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
    IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
    IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
    InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
    InvalidHeritageClauseType: ({
      token: S
    }) => `'${S}' list can only include identifiers or qualified-names with optional type arguments.`,
    InvalidModifierOnTypeMember: ({
      modifier: S
    }) => `'${S}' modifier cannot appear on a type member.`,
    InvalidModifierOnTypeParameter: ({
      modifier: S
    }) => `'${S}' modifier cannot appear on a type parameter.`,
    InvalidModifierOnTypeParameterPositions: ({
      modifier: S
    }) => `'${S}' modifier can only appear on a type parameter of a class, interface or type alias.`,
    InvalidModifiersOrder: ({
      orderedModifiers: S
    }) => `'${S[0]}' modifier must precede '${S[1]}' modifier.`,
    InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
    InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
    MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
    NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
    NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
    OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
    OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
    PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
    PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
    PrivateElementHasAccessibility: ({
      modifier: S
    }) => `Private elements cannot have an accessibility modifier ('${S}').`,
    ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
    ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
    ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
    SetAccessorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
    SetAccessorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
    SetAccessorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
    SingleTypeParameterWithoutTrailingComma: ({
      typeParameterName: S
    }) => `Single type parameter ${S} should have a trailing comma. Example usage: <${S},>.`,
    StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
    TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
    TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
    TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
    TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
    UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
    UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
    UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
    UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
    UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
    UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
    UnsupportedSignatureParameterKind: ({
      type: S
    }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${S}.`
  });
  function $f(S) {
    switch (S) {
      case "any":
        return "TSAnyKeyword";
      case "boolean":
        return "TSBooleanKeyword";
      case "bigint":
        return "TSBigIntKeyword";
      case "never":
        return "TSNeverKeyword";
      case "number":
        return "TSNumberKeyword";
      case "object":
        return "TSObjectKeyword";
      case "string":
        return "TSStringKeyword";
      case "symbol":
        return "TSSymbolKeyword";
      case "undefined":
        return "TSUndefinedKeyword";
      case "unknown":
        return "TSUnknownKeyword";
      default:
        return;
    }
  }
  function Do(S) {
    return S === "private" || S === "public" || S === "protected";
  }
  function Vf(S) {
    return S === "in" || S === "out";
  }
  var jf = (S) => class extends S {
    constructor(...e) {
      super(...e), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out"],
        disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: K.InvalidModifierOnTypeParameter
      }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["const"],
        disallowedModifiers: ["in", "out"],
        errorTemplate: K.InvalidModifierOnTypeParameterPositions
      }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out", "const"],
        disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: K.InvalidModifierOnTypeParameter
      });
    }
    getScopeHandler() {
      return Sf;
    }
    tsIsIdentifier() {
      return ie(this.state.type);
    }
    tsTokenCanFollowModifier() {
      return this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(139) || this.isLiteralPropertyName();
    }
    tsNextTokenOnSameLineAndCanFollowModifier() {
      return this.next(), this.hasPrecedingLineBreak() ? !1 : this.tsTokenCanFollowModifier();
    }
    tsNextTokenCanFollowModifier() {
      return this.match(106) ? (this.next(), this.tsTokenCanFollowModifier()) : this.tsNextTokenOnSameLineAndCanFollowModifier();
    }
    tsParseModifier(e, n) {
      if (!ie(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
        return;
      const a = this.state.value;
      if (e.includes(a)) {
        if (n && this.tsIsStartOfStaticBlocks())
          return;
        if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
          return a;
      }
    }
    tsParseModifiers({
      allowedModifiers: e,
      disallowedModifiers: n,
      stopOnStartOfClassStaticBlock: a,
      errorTemplate: f = K.InvalidModifierOnTypeMember
    }, E) {
      const A = (_, k, B, q) => {
        k === B && E[q] && this.raise(K.InvalidModifiersOrder, _, {
          orderedModifiers: [B, q]
        });
      }, w = (_, k, B, q) => {
        (E[B] && k === q || E[q] && k === B) && this.raise(K.IncompatibleModifiers, _, {
          modifiers: [B, q]
        });
      };
      for (; ; ) {
        const {
          startLoc: _
        } = this.state, k = this.tsParseModifier(e.concat(n ?? []), a);
        if (!k) break;
        Do(k) ? E.accessibility ? this.raise(K.DuplicateAccessibilityModifier, _, {
          modifier: k
        }) : (A(_, k, k, "override"), A(_, k, k, "static"), A(_, k, k, "readonly"), E.accessibility = k) : Vf(k) ? (E[k] && this.raise(K.DuplicateModifier, _, {
          modifier: k
        }), E[k] = !0, A(_, k, "in", "out")) : (hasOwnProperty.call(E, k) ? this.raise(K.DuplicateModifier, _, {
          modifier: k
        }) : (A(_, k, "static", "readonly"), A(_, k, "static", "override"), A(_, k, "override", "readonly"), A(_, k, "abstract", "override"), w(_, k, "declare", "override"), w(_, k, "static", "abstract")), E[k] = !0), n != null && n.includes(k) && this.raise(f, _, {
          modifier: k
        });
      }
    }
    tsIsListTerminator(e) {
      switch (e) {
        case "EnumMembers":
        case "TypeMembers":
          return this.match(8);
        case "HeritageClauseElement":
          return this.match(5);
        case "TupleElementTypes":
          return this.match(3);
        case "TypeParametersOrArguments":
          return this.match(48);
      }
    }
    tsParseList(e, n) {
      const a = [];
      for (; !this.tsIsListTerminator(e); )
        a.push(n());
      return a;
    }
    tsParseDelimitedList(e, n, a) {
      return Uf(this.tsParseDelimitedListWorker(e, n, !0, a));
    }
    tsParseDelimitedListWorker(e, n, a, f) {
      const E = [];
      let A = -1;
      for (; !this.tsIsListTerminator(e); ) {
        A = -1;
        const w = n();
        if (w == null)
          return;
        if (E.push(w), this.eat(12)) {
          A = this.state.lastTokStartLoc.index;
          continue;
        }
        if (this.tsIsListTerminator(e))
          break;
        a && this.expect(12);
        return;
      }
      return f && (f.value = A), E;
    }
    tsParseBracketedList(e, n, a, f, E) {
      f || (a ? this.expect(0) : this.expect(47));
      const A = this.tsParseDelimitedList(e, n, E);
      return a ? this.expect(3) : this.expect(48), A;
    }
    tsParseImportType() {
      const e = this.startNode();
      return this.expect(83), this.expect(10), this.match(134) ? e.argument = this.parseStringLiteral(this.state.value) : (this.raise(K.UnsupportedImportTypeArgument, this.state.startLoc), e.argument = super.parseExprAtom()), this.eat(12) ? e.options = this.tsParseImportTypeOptions() : e.options = null, this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName(3)), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
    }
    tsParseImportTypeOptions() {
      const e = this.startNode();
      this.expect(5);
      const n = this.startNode();
      return this.isContextual(76) ? (n.method = !1, n.key = this.parseIdentifier(!0), n.computed = !1, n.shorthand = !1) : this.unexpected(null, 76), this.expect(14), n.value = this.tsParseImportTypeWithPropertyValue(), e.properties = [this.finishObjectProperty(n)], this.expect(8), this.finishNode(e, "ObjectExpression");
    }
    tsParseImportTypeWithPropertyValue() {
      const e = this.startNode(), n = [];
      for (this.expect(5); !this.match(8); ) {
        const a = this.state.type;
        ie(a) || a === 134 ? n.push(super.parsePropertyDefinition(null)) : this.unexpected(), this.eat(12);
      }
      return e.properties = n, this.next(), this.finishNode(e, "ObjectExpression");
    }
    tsParseEntityName(e) {
      let n;
      if (e & 1 && this.match(78))
        if (e & 2)
          n = this.parseIdentifier(!0);
        else {
          const a = this.startNode();
          this.next(), n = this.finishNode(a, "ThisExpression");
        }
      else
        n = this.parseIdentifier(!!(e & 1));
      for (; this.eat(16); ) {
        const a = this.startNodeAtNode(n);
        a.left = n, a.right = this.parseIdentifier(!!(e & 1)), n = this.finishNode(a, "TSQualifiedName");
      }
      return n;
    }
    tsParseTypeReference() {
      const e = this.startNode();
      return e.typeName = this.tsParseEntityName(1), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
    }
    tsParseThisTypePredicate(e) {
      this.next();
      const n = this.startNodeAtNode(e);
      return n.parameterName = e, n.typeAnnotation = this.tsParseTypeAnnotation(!1), n.asserts = !1, this.finishNode(n, "TSTypePredicate");
    }
    tsParseThisTypeNode() {
      const e = this.startNode();
      return this.next(), this.finishNode(e, "TSThisType");
    }
    tsParseTypeQuery() {
      const e = this.startNode();
      return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(3), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery");
    }
    tsParseTypeParameter(e) {
      const n = this.startNode();
      return e(n), n.name = this.tsParseTypeParameterName(), n.constraint = this.tsEatThenParseType(81), n.default = this.tsEatThenParseType(29), this.finishNode(n, "TSTypeParameter");
    }
    tsTryParseTypeParameters(e) {
      if (this.match(47))
        return this.tsParseTypeParameters(e);
    }
    tsParseTypeParameters(e) {
      const n = this.startNode();
      this.match(47) || this.match(143) ? this.next() : this.unexpected();
      const a = {
        value: -1
      };
      return n.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, a), n.params.length === 0 && this.raise(K.EmptyTypeParameters, n), a.value !== -1 && this.addExtra(n, "trailingComma", a.value), this.finishNode(n, "TSTypeParameterDeclaration");
    }
    tsFillSignature(e, n) {
      const a = e === 19, f = "parameters", E = "typeAnnotation";
      n.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), n[f] = this.tsParseBindingListForSignature(), a ? n[E] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (n[E] = this.tsParseTypeOrTypePredicateAnnotation(e));
    }
    tsParseBindingListForSignature() {
      const e = super.parseBindingList(11, 41, 2);
      for (const n of e) {
        const {
          type: a
        } = n;
        (a === "AssignmentPattern" || a === "TSParameterProperty") && this.raise(K.UnsupportedSignatureParameterKind, n, {
          type: a
        });
      }
      return e;
    }
    tsParseTypeMemberSemicolon() {
      !this.eat(12) && !this.isLineTerminator() && this.expect(13);
    }
    tsParseSignatureMember(e, n) {
      return this.tsFillSignature(14, n), this.tsParseTypeMemberSemicolon(), this.finishNode(n, e);
    }
    tsIsUnambiguouslyIndexSignature() {
      return this.next(), ie(this.state.type) ? (this.next(), this.match(14)) : !1;
    }
    tsTryParseIndexSignature(e) {
      if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
        return;
      this.expect(0);
      const n = this.parseIdentifier();
      n.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(n), this.expect(3), e.parameters = [n];
      const a = this.tsTryParseTypeAnnotation();
      return a && (e.typeAnnotation = a), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
    }
    tsParsePropertyOrMethodSignature(e, n) {
      if (this.eat(17) && (e.optional = !0), this.match(10) || this.match(47)) {
        n && this.raise(K.ReadonlyForMethodSignature, e);
        const a = e;
        a.kind && this.match(47) && this.raise(K.AccessorCannotHaveTypeParameters, this.state.curPosition()), this.tsFillSignature(14, a), this.tsParseTypeMemberSemicolon();
        const f = "parameters", E = "typeAnnotation";
        if (a.kind === "get")
          a[f].length > 0 && (this.raise(y.BadGetterArity, this.state.curPosition()), this.isThisParam(a[f][0]) && this.raise(K.AccessorCannotDeclareThisParameter, this.state.curPosition()));
        else if (a.kind === "set") {
          if (a[f].length !== 1)
            this.raise(y.BadSetterArity, this.state.curPosition());
          else {
            const A = a[f][0];
            this.isThisParam(A) && this.raise(K.AccessorCannotDeclareThisParameter, this.state.curPosition()), A.type === "Identifier" && A.optional && this.raise(K.SetAccessorCannotHaveOptionalParameter, this.state.curPosition()), A.type === "RestElement" && this.raise(K.SetAccessorCannotHaveRestParameter, this.state.curPosition());
          }
          a[E] && this.raise(K.SetAccessorCannotHaveReturnType, a[E]);
        } else
          a.kind = "method";
        return this.finishNode(a, "TSMethodSignature");
      } else {
        const a = e;
        n && (a.readonly = !0);
        const f = this.tsTryParseTypeAnnotation();
        return f && (a.typeAnnotation = f), this.tsParseTypeMemberSemicolon(), this.finishNode(a, "TSPropertySignature");
      }
    }
    tsParseTypeMember() {
      const e = this.startNode();
      if (this.match(10) || this.match(47))
        return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
      if (this.match(77)) {
        const a = this.startNode();
        return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(a, "new"), this.tsParsePropertyOrMethodSignature(e, !1));
      }
      this.tsParseModifiers({
        allowedModifiers: ["readonly"],
        disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
      }, e);
      const n = this.tsTryParseIndexSignature(e);
      return n || (super.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e), !this.match(10) && !this.match(47) && this.unexpected(null, 10)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
    }
    tsParseTypeLiteral() {
      const e = this.startNode();
      return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
    }
    tsParseObjectTypeMembers() {
      this.expect(5);
      const e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
      return this.expect(8), e;
    }
    tsIsStartOfMappedType() {
      return this.next(), this.eat(53) ? this.isContextual(122) : (this.isContextual(122) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? !1 : (this.next(), this.match(58)));
    }
    tsParseMappedType() {
      const e = this.startNode();
      this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(122)) : this.eatContextual(122) && (e.readonly = !0), this.expect(0);
      {
        const n = this.startNode();
        n.name = this.tsParseTypeParameterName(), n.constraint = this.tsExpectThenParseType(58), e.typeParameter = this.finishNode(n, "TSTypeParameter");
      }
      return e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = !0), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
    }
    tsParseTupleType() {
      const e = this.startNode();
      e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
      let n = !1;
      return e.elementTypes.forEach((a) => {
        const {
          type: f
        } = a;
        n && f !== "TSRestType" && f !== "TSOptionalType" && !(f === "TSNamedTupleMember" && a.optional) && this.raise(K.OptionalTypeBeforeRequired, a), n || (n = f === "TSNamedTupleMember" && a.optional || f === "TSOptionalType");
      }), this.finishNode(e, "TSTupleType");
    }
    tsParseTupleElementType() {
      const e = this.state.startLoc, n = this.eat(21), {
        startLoc: a
      } = this.state;
      let f, E, A, w;
      const k = Pe(this.state.type) ? this.lookaheadCharCode() : null;
      if (k === 58)
        f = !0, A = !1, E = this.parseIdentifier(!0), this.expect(14), w = this.tsParseType();
      else if (k === 63) {
        A = !0;
        const B = this.state.value, q = this.tsParseNonArrayType();
        this.lookaheadCharCode() === 58 ? (f = !0, E = this.createIdentifier(this.startNodeAt(a), B), this.expect(17), this.expect(14), w = this.tsParseType()) : (f = !1, w = q, this.expect(17));
      } else
        w = this.tsParseType(), A = this.eat(17), f = this.eat(14);
      if (f) {
        let B;
        E ? (B = this.startNodeAt(a), B.optional = A, B.label = E, B.elementType = w, this.eat(17) && (B.optional = !0, this.raise(K.TupleOptionalAfterType, this.state.lastTokStartLoc))) : (B = this.startNodeAt(a), B.optional = A, this.raise(K.InvalidTupleMemberLabel, w), B.label = w, B.elementType = this.tsParseType()), w = this.finishNode(B, "TSNamedTupleMember");
      } else if (A) {
        const B = this.startNodeAt(a);
        B.typeAnnotation = w, w = this.finishNode(B, "TSOptionalType");
      }
      if (n) {
        const B = this.startNodeAt(e);
        B.typeAnnotation = w, w = this.finishNode(B, "TSRestType");
      }
      return w;
    }
    tsParseParenthesizedType() {
      const e = this.startNode();
      return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
    }
    tsParseFunctionOrConstructorType(e, n) {
      const a = this.startNode();
      return e === "TSConstructorType" && (a.abstract = !!n, n && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, a)), this.finishNode(a, e);
    }
    tsParseLiteralTypeNode() {
      const e = this.startNode();
      switch (this.state.type) {
        case 135:
        case 136:
        case 134:
        case 85:
        case 86:
          e.literal = super.parseExprAtom();
          break;
        default:
          this.unexpected();
      }
      return this.finishNode(e, "TSLiteralType");
    }
    tsParseTemplateLiteralType() {
      {
        const e = this.startNode();
        return e.literal = super.parseTemplate(!1), this.finishNode(e, "TSLiteralType");
      }
    }
    parseTemplateSubstitution() {
      return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
    }
    tsParseThisTypeOrThisTypePredicate() {
      const e = this.tsParseThisTypeNode();
      return this.isContextual(116) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
    }
    tsParseNonArrayType() {
      switch (this.state.type) {
        case 134:
        case 135:
        case 136:
        case 85:
        case 86:
          return this.tsParseLiteralTypeNode();
        case 53:
          if (this.state.value === "-") {
            const e = this.startNode(), n = this.lookahead();
            return n.type !== 135 && n.type !== 136 && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
          }
          break;
        case 78:
          return this.tsParseThisTypeOrThisTypePredicate();
        case 87:
          return this.tsParseTypeQuery();
        case 83:
          return this.tsParseImportType();
        case 5:
          return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
        case 0:
          return this.tsParseTupleType();
        case 10:
          return this.tsParseParenthesizedType();
        case 25:
        case 24:
          return this.tsParseTemplateLiteralType();
        default: {
          const {
            type: e
          } = this.state;
          if (ie(e) || e === 88 || e === 84) {
            const n = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : $f(this.state.value);
            if (n !== void 0 && this.lookaheadCharCode() !== 46) {
              const a = this.startNode();
              return this.next(), this.finishNode(a, n);
            }
            return this.tsParseTypeReference();
          }
        }
      }
      this.unexpected();
    }
    tsParseArrayTypeOrHigher() {
      const {
        startLoc: e
      } = this.state;
      let n = this.tsParseNonArrayType();
      for (; !this.hasPrecedingLineBreak() && this.eat(0); )
        if (this.match(3)) {
          const a = this.startNodeAt(e);
          a.elementType = n, this.expect(3), n = this.finishNode(a, "TSArrayType");
        } else {
          const a = this.startNodeAt(e);
          a.objectType = n, a.indexType = this.tsParseType(), this.expect(3), n = this.finishNode(a, "TSIndexedAccessType");
        }
      return n;
    }
    tsParseTypeOperator() {
      const e = this.startNode(), n = this.state.value;
      return this.next(), e.operator = n, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), n === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
    }
    tsCheckTypeAnnotationForReadOnly(e) {
      switch (e.typeAnnotation.type) {
        case "TSTupleType":
        case "TSArrayType":
          return;
        default:
          this.raise(K.UnexpectedReadonly, e);
      }
    }
    tsParseInferType() {
      const e = this.startNode();
      this.expectContextual(115);
      const n = this.startNode();
      return n.name = this.tsParseTypeParameterName(), n.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), e.typeParameter = this.finishNode(n, "TSTypeParameter"), this.finishNode(e, "TSInferType");
    }
    tsParseConstraintForInferType() {
      if (this.eat(81)) {
        const e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
        if (this.state.inDisallowConditionalTypesContext || !this.match(17))
          return e;
      }
    }
    tsParseTypeOperatorOrHigher() {
      return Wp(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
    }
    tsParseUnionOrIntersectionType(e, n, a) {
      const f = this.startNode(), E = this.eat(a), A = [];
      do
        A.push(n());
      while (this.eat(a));
      return A.length === 1 && !E ? A[0] : (f.types = A, this.finishNode(f, e));
    }
    tsParseIntersectionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
    }
    tsParseUnionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
    }
    tsIsStartOfFunctionType() {
      return this.match(47) ? !0 : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
    }
    tsSkipParameterStart() {
      if (ie(this.state.type) || this.match(78))
        return this.next(), !0;
      if (this.match(5)) {
        const {
          errors: e
        } = this.state, n = e.length;
        try {
          return this.parseObjectLike(8, !0), e.length === n;
        } catch {
          return !1;
        }
      }
      if (this.match(0)) {
        this.next();
        const {
          errors: e
        } = this.state, n = e.length;
        try {
          return super.parseBindingList(3, 93, 1), e.length === n;
        } catch {
          return !1;
        }
      }
      return !1;
    }
    tsIsUnambiguouslyStartOfFunctionType() {
      return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
    }
    tsParseTypeOrTypePredicateAnnotation(e) {
      return this.tsInType(() => {
        const n = this.startNode();
        this.expect(e);
        const a = this.startNode(), f = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
        if (f && this.match(78)) {
          let w = this.tsParseThisTypeOrThisTypePredicate();
          return w.type === "TSThisType" ? (a.parameterName = w, a.asserts = !0, a.typeAnnotation = null, w = this.finishNode(a, "TSTypePredicate")) : (this.resetStartLocationFromNode(w, a), w.asserts = !0), n.typeAnnotation = w, this.finishNode(n, "TSTypeAnnotation");
        }
        const E = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!E)
          return f ? (a.parameterName = this.parseIdentifier(), a.asserts = f, a.typeAnnotation = null, n.typeAnnotation = this.finishNode(a, "TSTypePredicate"), this.finishNode(n, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, n);
        const A = this.tsParseTypeAnnotation(!1);
        return a.parameterName = E, a.typeAnnotation = A, a.asserts = f, n.typeAnnotation = this.finishNode(a, "TSTypePredicate"), this.finishNode(n, "TSTypeAnnotation");
      });
    }
    tsTryParseTypeOrTypePredicateAnnotation() {
      if (this.match(14))
        return this.tsParseTypeOrTypePredicateAnnotation(14);
    }
    tsTryParseTypeAnnotation() {
      if (this.match(14))
        return this.tsParseTypeAnnotation();
    }
    tsTryParseType() {
      return this.tsEatThenParseType(14);
    }
    tsParseTypePredicatePrefix() {
      const e = this.parseIdentifier();
      if (this.isContextual(116) && !this.hasPrecedingLineBreak())
        return this.next(), e;
    }
    tsParseTypePredicateAsserts() {
      if (this.state.type !== 109)
        return !1;
      const e = this.state.containsEsc;
      return this.next(), !ie(this.state.type) && !this.match(78) ? !1 : (e && this.raise(y.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
        reservedWord: "asserts"
      }), !0);
    }
    tsParseTypeAnnotation(e = !0, n = this.startNode()) {
      return this.tsInType(() => {
        e && this.expect(14), n.typeAnnotation = this.tsParseType();
      }), this.finishNode(n, "TSTypeAnnotation");
    }
    tsParseType() {
      Ro(this.state.inType);
      const e = this.tsParseNonConditionalType();
      if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
        return e;
      const n = this.startNodeAtNode(e);
      return n.checkType = e, n.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), n.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), n.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(n, "TSConditionalType");
    }
    isAbstractConstructorSignature() {
      return this.isContextual(124) && this.lookahead().type === 77;
    }
    tsParseNonConditionalType() {
      return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
    }
    tsParseTypeAssertion() {
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(K.ReservedTypeAssertion, this.state.startLoc);
      const e = this.startNode();
      return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
    }
    tsParseHeritageClause(e) {
      const n = this.state.startLoc, a = this.tsParseDelimitedList("HeritageClauseElement", () => {
        {
          const f = this.startNode();
          return f.expression = this.tsParseEntityName(3), this.match(47) && (f.typeParameters = this.tsParseTypeArguments()), this.finishNode(f, "TSExpressionWithTypeArguments");
        }
      });
      return a.length || this.raise(K.EmptyHeritageClauseType, n, {
        token: e
      }), a;
    }
    tsParseInterfaceDeclaration(e, n = {}) {
      if (this.hasFollowingLineBreak()) return null;
      this.expectContextual(129), n.declare && (e.declare = !0), ie(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 130)) : (e.id = null, this.raise(K.MissingInterfaceName, this.state.startLoc)), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
      const a = this.startNode();
      return a.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(a, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
    }
    tsParseTypeAliasDeclaration(e) {
      return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 2), e.typeAnnotation = this.tsInType(() => {
        if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers), this.expect(29), this.isContextual(114) && this.lookahead().type !== 16) {
          const n = this.startNode();
          return this.next(), this.finishNode(n, "TSIntrinsicKeyword");
        }
        return this.tsParseType();
      }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
    }
    tsInTopLevelContext(e) {
      if (this.curContext() !== v.brace) {
        const n = this.state.context;
        this.state.context = [n[0]];
        try {
          return e();
        } finally {
          this.state.context = n;
        }
      } else
        return e();
    }
    tsInType(e) {
      const n = this.state.inType;
      this.state.inType = !0;
      try {
        return e();
      } finally {
        this.state.inType = n;
      }
    }
    tsInDisallowConditionalTypesContext(e) {
      const n = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !0;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = n;
      }
    }
    tsInAllowConditionalTypesContext(e) {
      const n = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !1;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = n;
      }
    }
    tsEatThenParseType(e) {
      if (this.match(e))
        return this.tsNextThenParseType();
    }
    tsExpectThenParseType(e) {
      return this.tsInType(() => (this.expect(e), this.tsParseType()));
    }
    tsNextThenParseType() {
      return this.tsInType(() => (this.next(), this.tsParseType()));
    }
    tsParseEnumMember() {
      const e = this.startNode();
      return e.id = this.match(134) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(!0), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
    }
    tsParseEnumDeclaration(e, n = {}) {
      return n.const && (e.const = !0), n.declare && (e.declare = !0), this.expectContextual(126), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? 8971 : 8459), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
    }
    tsParseEnumBody() {
      const e = this.startNode();
      return this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumBody");
    }
    tsParseModuleBlock() {
      const e = this.startNode();
      return this.scope.enter(0), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
    }
    tsParseModuleOrNamespaceDeclaration(e, n = !1) {
      if (e.id = this.parseIdentifier(), n || this.checkIdentifier(e.id, 1024), this.eat(16)) {
        const a = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(a, !0), e.body = a;
      } else
        this.scope.enter(256), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
      return this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseAmbientExternalModuleDeclaration(e) {
      return this.isContextual(112) ? (e.kind = "global", e.global = !0, e.id = this.parseIdentifier()) : this.match(134) ? (e.kind = "module", e.id = super.parseStringLiteral(this.state.value)) : this.unexpected(), this.match(5) ? (this.scope.enter(256), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseImportEqualsDeclaration(e, n, a) {
      e.isExport = a || !1, e.id = n || this.parseIdentifier(), this.checkIdentifier(e.id, 4096), this.expect(29);
      const f = this.tsParseModuleReference();
      return e.importKind === "type" && f.type !== "TSExternalModuleReference" && this.raise(K.ImportAliasHasImportType, f), e.moduleReference = f, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
    }
    tsIsExternalModuleReference() {
      return this.isContextual(119) && this.lookaheadCharCode() === 40;
    }
    tsParseModuleReference() {
      return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(0);
    }
    tsParseExternalModuleReference() {
      const e = this.startNode();
      return this.expectContextual(119), this.expect(10), this.match(134) || this.unexpected(), e.expression = super.parseExprAtom(), this.expect(11), this.sawUnambiguousESM = !0, this.finishNode(e, "TSExternalModuleReference");
    }
    tsLookAhead(e) {
      const n = this.state.clone(), a = e();
      return this.state = n, a;
    }
    tsTryParseAndCatch(e) {
      const n = this.tryParse((a) => e() || a());
      if (!(n.aborted || !n.node))
        return n.error && (this.state = n.failState), n.node;
    }
    tsTryParse(e) {
      const n = this.state.clone(), a = e();
      if (a !== void 0 && a !== !1)
        return a;
      this.state = n;
    }
    tsTryParseDeclare(e) {
      if (this.isLineTerminator())
        return;
      let n = this.state.type, a;
      return this.isContextual(100) && (n = 74, a = "let"), this.tsInAmbientContext(() => {
        switch (n) {
          case 68:
            return e.declare = !0, super.parseFunctionStatement(e, !1, !1);
          case 80:
            return e.declare = !0, this.parseClass(e, !0, !1);
          case 126:
            return this.tsParseEnumDeclaration(e, {
              declare: !0
            });
          case 112:
            return this.tsParseAmbientExternalModuleDeclaration(e);
          case 75:
          case 74:
            return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = !0, this.parseVarStatement(e, a || this.state.value, !0)) : (this.expect(75), this.tsParseEnumDeclaration(e, {
              const: !0,
              declare: !0
            }));
          case 129: {
            const f = this.tsParseInterfaceDeclaration(e, {
              declare: !0
            });
            if (f) return f;
          }
          default:
            if (ie(n))
              return this.tsParseDeclaration(e, this.state.value, !0, null);
        }
      });
    }
    tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.value, !0, null);
    }
    tsParseExpressionStatement(e, n, a) {
      switch (n.name) {
        case "declare": {
          const f = this.tsTryParseDeclare(e);
          return f && (f.declare = !0), f;
        }
        case "global":
          if (this.match(5)) {
            this.scope.enter(256), this.prodParam.enter(0);
            const f = e;
            return f.kind = "global", e.global = !0, f.id = n, f.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(f, "TSModuleDeclaration");
          }
          break;
        default:
          return this.tsParseDeclaration(e, n.name, !1, a);
      }
    }
    tsParseDeclaration(e, n, a, f) {
      switch (n) {
        case "abstract":
          if (this.tsCheckLineTerminator(a) && (this.match(80) || ie(this.state.type)))
            return this.tsParseAbstractDeclaration(e, f);
          break;
        case "module":
          if (this.tsCheckLineTerminator(a)) {
            if (this.match(134))
              return this.tsParseAmbientExternalModuleDeclaration(e);
            if (ie(this.state.type))
              return e.kind = "module", this.tsParseModuleOrNamespaceDeclaration(e);
          }
          break;
        case "namespace":
          if (this.tsCheckLineTerminator(a) && ie(this.state.type))
            return e.kind = "namespace", this.tsParseModuleOrNamespaceDeclaration(e);
          break;
        case "type":
          if (this.tsCheckLineTerminator(a) && ie(this.state.type))
            return this.tsParseTypeAliasDeclaration(e);
          break;
      }
    }
    tsCheckLineTerminator(e) {
      return e ? this.hasFollowingLineBreak() ? !1 : (this.next(), !0) : !this.isLineTerminator();
    }
    tsTryParseGenericAsyncArrowFunction(e) {
      if (!this.match(47)) return;
      const n = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = !0;
      const a = this.tsTryParseAndCatch(() => {
        const f = this.startNodeAt(e);
        return f.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier), super.parseFunctionParams(f), f.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), f;
      });
      if (this.state.maybeInArrowParameters = n, !!a)
        return super.parseArrowExpression(a, null, !0);
    }
    tsParseTypeArgumentsInExpression() {
      if (this.reScan_lt() === 47)
        return this.tsParseTypeArguments();
    }
    tsParseTypeArguments() {
      const e = this.startNode();
      return e.params = this.tsInType(() => this.tsInTopLevelContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 ? this.raise(K.EmptyTypeArguments, e) : !this.state.inType && this.curContext() === v.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
    }
    tsIsDeclarationStart() {
      return Gp(this.state.type);
    }
    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
    }
    parseBindingElement(e, n) {
      const a = n.length ? n[0].loc.start : this.state.startLoc, f = {};
      this.tsParseModifiers({
        allowedModifiers: ["public", "private", "protected", "override", "readonly"]
      }, f);
      const E = f.accessibility, A = f.override, w = f.readonly;
      !(e & 4) && (E || w || A) && this.raise(K.UnexpectedParameterModifier, a);
      const _ = this.parseMaybeDefault();
      e & 2 && this.parseFunctionParamType(_);
      const k = this.parseMaybeDefault(_.loc.start, _);
      if (E || w || A) {
        const B = this.startNodeAt(a);
        return n.length && (B.decorators = n), E && (B.accessibility = E), w && (B.readonly = w), A && (B.override = A), k.type !== "Identifier" && k.type !== "AssignmentPattern" && this.raise(K.UnsupportedParameterPropertyKind, B), B.parameter = k, this.finishNode(B, "TSParameterProperty");
      }
      return n.length && (_.decorators = n), k;
    }
    isSimpleParameter(e) {
      return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
    }
    tsDisallowOptionalPattern(e) {
      for (const n of e.params)
        n.type !== "Identifier" && n.optional && !this.state.isAmbientContext && this.raise(K.PatternIsOptional, n);
    }
    setArrowFunctionParameters(e, n, a) {
      super.setArrowFunctionParameters(e, n, a), this.tsDisallowOptionalPattern(e);
    }
    parseFunctionBodyAndFinish(e, n, a = !1) {
      this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      const f = n === "FunctionDeclaration" ? "TSDeclareFunction" : n === "ClassMethod" || n === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
      return f && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, f) : f === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(K.DeclareFunctionHasImplementation, e), e.declare) ? super.parseFunctionBodyAndFinish(e, f, a) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, n, a));
    }
    registerFunctionStatementId(e) {
      !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
    }
    tsCheckForInvalidTypeCasts(e) {
      e.forEach((n) => {
        (n == null ? void 0 : n.type) === "TSTypeCastExpression" && this.raise(K.UnexpectedTypeAnnotation, n.typeAnnotation);
      });
    }
    toReferencedList(e, n) {
      return this.tsCheckForInvalidTypeCasts(e), e;
    }
    parseArrayLike(e, n, a, f) {
      const E = super.parseArrayLike(e, n, a, f);
      return E.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(E.elements), E;
    }
    parseSubscript(e, n, a, f) {
      if (!this.hasPrecedingLineBreak() && this.match(35)) {
        this.state.canStartJSXElement = !1, this.next();
        const A = this.startNodeAt(n);
        return A.expression = e, this.finishNode(A, "TSNonNullExpression");
      }
      let E = !1;
      if (this.match(18) && this.lookaheadCharCode() === 60) {
        if (a)
          return f.stop = !0, e;
        f.optionalChainMember = E = !0, this.next();
      }
      if (this.match(47) || this.match(51)) {
        let A;
        const w = this.tsTryParseAndCatch(() => {
          if (!a && this.atPossibleAsyncArrow(e)) {
            const q = this.tsTryParseGenericAsyncArrowFunction(n);
            if (q)
              return q;
          }
          const _ = this.tsParseTypeArgumentsInExpression();
          if (!_) return;
          if (E && !this.match(10)) {
            A = this.state.curPosition();
            return;
          }
          if (nr(this.state.type)) {
            const q = super.parseTaggedTemplateExpression(e, n, f);
            return q.typeParameters = _, q;
          }
          if (!a && this.eat(10)) {
            const q = this.startNodeAt(n);
            return q.callee = e, q.arguments = this.parseCallExpressionArguments(11), this.tsCheckForInvalidTypeCasts(q.arguments), q.typeParameters = _, f.optionalChainMember && (q.optional = E), this.finishCallExpression(q, f.optionalChainMember);
          }
          const k = this.state.type;
          if (k === 48 || k === 52 || k !== 10 && As(k) && !this.hasPrecedingLineBreak())
            return;
          const B = this.startNodeAt(n);
          return B.expression = e, B.typeParameters = _, this.finishNode(B, "TSInstantiationExpression");
        });
        if (A && this.unexpected(A, 10), w)
          return w.type === "TSInstantiationExpression" && ((this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(K.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc), !this.match(16) && !this.match(18) && (w.expression = super.stopParseSubscript(e, f))), w;
      }
      return super.parseSubscript(e, n, a, f);
    }
    parseNewCallee(e) {
      var n;
      super.parseNewCallee(e);
      const {
        callee: a
      } = e;
      a.type === "TSInstantiationExpression" && !((n = a.extra) != null && n.parenthesized) && (e.typeParameters = a.typeParameters, e.callee = a.expression);
    }
    parseExprOp(e, n, a) {
      let f;
      if (ir(58) > a && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (f = this.isContextual(120)))) {
        const E = this.startNodeAt(n);
        return E.expression = e, E.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (f && this.raise(y.UnexpectedKeyword, this.state.startLoc, {
          keyword: "const"
        }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(E, f ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(E, n, a);
      }
      return super.parseExprOp(e, n, a);
    }
    checkReservedWord(e, n, a, f) {
      this.state.isAmbientContext || super.checkReservedWord(e, n, a, f);
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(K.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    checkDuplicateExports() {
    }
    isPotentialImportPhase(e) {
      if (super.isPotentialImportPhase(e)) return !0;
      if (this.isContextual(130)) {
        const n = this.lookaheadCharCode();
        return e ? n === 123 || n === 42 : n !== 61;
      }
      return !e && this.isContextual(87);
    }
    applyImportPhase(e, n, a, f) {
      super.applyImportPhase(e, n, a, f), n ? e.exportKind = a === "type" ? "type" : "value" : e.importKind = a === "type" || a === "typeof" ? a : "value";
    }
    parseImport(e) {
      if (this.match(134))
        return e.importKind = "value", super.parseImport(e);
      let n;
      if (ie(this.state.type) && this.lookaheadCharCode() === 61)
        return e.importKind = "value", this.tsParseImportEqualsDeclaration(e);
      if (this.isContextual(130)) {
        const a = this.parseMaybeImportPhase(e, !1);
        if (this.lookaheadCharCode() === 61)
          return this.tsParseImportEqualsDeclaration(e, a);
        n = super.parseImportSpecifiersAndAfter(e, a);
      } else
        n = super.parseImport(e);
      return n.importKind === "type" && n.specifiers.length > 1 && n.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(K.TypeImportCannotSpecifyDefaultAndNamed, n), n;
    }
    parseExport(e, n) {
      if (this.match(83)) {
        const a = e;
        this.next();
        let f = null;
        return this.isContextual(130) && this.isPotentialImportPhase(!1) ? f = this.parseMaybeImportPhase(a, !1) : a.importKind = "value", this.tsParseImportEqualsDeclaration(a, f, !0);
      } else if (this.eat(29)) {
        const a = e;
        return a.expression = super.parseExpression(), this.semicolon(), this.sawUnambiguousESM = !0, this.finishNode(a, "TSExportAssignment");
      } else if (this.eatContextual(93)) {
        const a = e;
        return this.expectContextual(128), a.id = this.parseIdentifier(), this.semicolon(), this.finishNode(a, "TSNamespaceExportDeclaration");
      } else
        return super.parseExport(e, n);
    }
    isAbstractClass() {
      return this.isContextual(124) && this.lookahead().type === 80;
    }
    parseExportDefaultExpression() {
      if (this.isAbstractClass()) {
        const e = this.startNode();
        return this.next(), e.abstract = !0, this.parseClass(e, !0, !0);
      }
      if (this.match(129)) {
        const e = this.tsParseInterfaceDeclaration(this.startNode());
        if (e) return e;
      }
      return super.parseExportDefaultExpression();
    }
    parseVarStatement(e, n, a = !1) {
      const {
        isAmbientContext: f
      } = this.state, E = super.parseVarStatement(e, n, a || f);
      if (!f) return E;
      for (const {
        id: A,
        init: w
      } of E.declarations)
        w && (n !== "const" || A.typeAnnotation ? this.raise(K.InitializerNotAllowedInAmbientContext, w) : Hf(w, this.hasPlugin("estree")) || this.raise(K.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, w));
      return E;
    }
    parseStatementContent(e, n) {
      if (this.match(75) && this.isLookaheadContextual("enum")) {
        const a = this.startNode();
        return this.expect(75), this.tsParseEnumDeclaration(a, {
          const: !0
        });
      }
      if (this.isContextual(126))
        return this.tsParseEnumDeclaration(this.startNode());
      if (this.isContextual(129)) {
        const a = this.tsParseInterfaceDeclaration(this.startNode());
        if (a) return a;
      }
      return super.parseStatementContent(e, n);
    }
    parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    }
    tsHasSomeModifiers(e, n) {
      return n.some((a) => Do(a) ? e.accessibility === a : !!e[a]);
    }
    tsIsStartOfStaticBlocks() {
      return this.isContextual(106) && this.lookaheadCharCode() === 123;
    }
    parseClassMember(e, n, a) {
      const f = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
      this.tsParseModifiers({
        allowedModifiers: f,
        disallowedModifiers: ["in", "out"],
        stopOnStartOfClassStaticBlock: !0,
        errorTemplate: K.InvalidModifierOnTypeParameterPositions
      }, n);
      const E = () => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(n, f) && this.raise(K.StaticBlockCannotHaveModifier, this.state.curPosition()), super.parseClassStaticBlock(e, n)) : this.parseClassMemberWithIsStatic(e, n, a, !!n.static);
      };
      n.declare ? this.tsInAmbientContext(E) : E();
    }
    parseClassMemberWithIsStatic(e, n, a, f) {
      const E = this.tsTryParseIndexSignature(n);
      if (E) {
        e.body.push(E), n.abstract && this.raise(K.IndexSignatureHasAbstract, n), n.accessibility && this.raise(K.IndexSignatureHasAccessibility, n, {
          modifier: n.accessibility
        }), n.declare && this.raise(K.IndexSignatureHasDeclare, n), n.override && this.raise(K.IndexSignatureHasOverride, n);
        return;
      }
      !this.state.inAbstractClass && n.abstract && this.raise(K.NonAbstractClassHasAbstractMethod, n), n.override && (a.hadSuperClass || this.raise(K.OverrideNotInSubClass, n)), super.parseClassMemberWithIsStatic(e, n, a, f);
    }
    parsePostMemberNameModifiers(e) {
      this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(K.ClassMethodHasReadonly, e), e.declare && this.match(10) && this.raise(K.ClassMethodHasDeclare, e);
    }
    parseExpressionStatement(e, n, a) {
      return (n.type === "Identifier" ? this.tsParseExpressionStatement(e, n, a) : void 0) || super.parseExpressionStatement(e, n, a);
    }
    shouldParseExportDeclaration() {
      return this.tsIsDeclarationStart() ? !0 : super.shouldParseExportDeclaration();
    }
    parseConditional(e, n, a) {
      if (!this.match(17)) return e;
      if (this.state.maybeInArrowParameters) {
        const f = this.lookaheadCharCode();
        if (f === 44 || f === 61 || f === 58 || f === 41)
          return this.setOptionalParametersError(a), e;
      }
      return super.parseConditional(e, n, a);
    }
    parseParenItem(e, n) {
      const a = super.parseParenItem(e, n);
      if (this.eat(17) && (a.optional = !0, this.resetEndLocation(e)), this.match(14)) {
        const f = this.startNodeAt(n);
        return f.expression = e, f.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(f, "TSTypeCastExpression");
      }
      return e;
    }
    parseExportDeclaration(e) {
      if (!this.state.isAmbientContext && this.isContextual(125))
        return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
      const n = this.state.startLoc, a = this.eatContextual(125);
      if (a && (this.isContextual(125) || !this.shouldParseExportDeclaration()))
        throw this.raise(K.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
      const E = ie(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
      return E ? ((E.type === "TSInterfaceDeclaration" || E.type === "TSTypeAliasDeclaration" || a) && (e.exportKind = "type"), a && E.type !== "TSImportEqualsDeclaration" && (this.resetStartLocation(E, n), E.declare = !0), E) : null;
    }
    parseClassId(e, n, a, f) {
      if ((!n || a) && this.isContextual(113))
        return;
      super.parseClassId(e, n, a, e.declare ? 1024 : 8331);
      const E = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
      E && (e.typeParameters = E);
    }
    parseClassPropertyAnnotation(e) {
      e.optional || (this.eat(35) ? e.definite = !0 : this.eat(17) && (e.optional = !0));
      const n = this.tsTryParseTypeAnnotation();
      n && (e.typeAnnotation = n);
    }
    parseClassProperty(e) {
      if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(K.DeclareClassFieldHasInitializer, this.state.startLoc), e.abstract && this.match(29)) {
        const {
          key: n
        } = e;
        this.raise(K.AbstractPropertyHasInitializer, this.state.startLoc, {
          propertyName: n.type === "Identifier" && !e.computed ? n.name : `[${this.input.slice(this.offsetToSourcePos(n.start), this.offsetToSourcePos(n.end))}]`
        });
      }
      return super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return e.abstract && this.raise(K.PrivateElementHasAbstract, e), e.accessibility && this.raise(K.PrivateElementHasAccessibility, e, {
        modifier: e.accessibility
      }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
    }
    parseClassAccessorProperty(e) {
      return this.parseClassPropertyAnnotation(e), e.optional && this.raise(K.AccessorCannotBeOptional, e), super.parseClassAccessorProperty(e);
    }
    pushClassMethod(e, n, a, f, E, A) {
      const w = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      w && E && this.raise(K.ConstructorHasTypeParameters, w);
      const {
        declare: _ = !1,
        kind: k
      } = n;
      _ && (k === "get" || k === "set") && this.raise(K.DeclareAccessor, n, {
        kind: k
      }), w && (n.typeParameters = w), super.pushClassMethod(e, n, a, f, E, A);
    }
    pushClassPrivateMethod(e, n, a, f) {
      const E = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      E && (n.typeParameters = E), super.pushClassPrivateMethod(e, n, a, f);
    }
    declareClassPrivateMethodInScope(e, n) {
      e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && e.value.body == null || super.declareClassPrivateMethodInScope(e, n));
    }
    parseClassSuper(e) {
      super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(113) && (e.implements = this.tsParseHeritageClause("implements"));
    }
    parseObjPropValue(e, n, a, f, E, A, w) {
      const _ = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      return _ && (e.typeParameters = _), super.parseObjPropValue(e, n, a, f, E, A, w);
    }
    parseFunctionParams(e, n) {
      const a = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      a && (e.typeParameters = a), super.parseFunctionParams(e, n);
    }
    parseVarId(e, n) {
      super.parseVarId(e, n), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = !0);
      const a = this.tsTryParseTypeAnnotation();
      a && (e.id.typeAnnotation = a, this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, n) {
      return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, n);
    }
    parseMaybeAssign(e, n) {
      var a, f, E, A, w;
      let _, k, B;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (_ = this.state.clone(), k = this.tryParse(() => super.parseMaybeAssign(e, n), _), !k.error) return k.node;
        const {
          context: G
        } = this.state, se = G[G.length - 1];
        (se === v.j_oTag || se === v.j_expr) && G.pop();
      }
      if (!((a = k) != null && a.error) && !this.match(47))
        return super.parseMaybeAssign(e, n);
      (!_ || _ === this.state) && (_ = this.state.clone());
      let q;
      const H = this.tryParse((G) => {
        var se, be;
        q = this.tsParseTypeParameters(this.tsParseConstModifier);
        const re = super.parseMaybeAssign(e, n);
        return (re.type !== "ArrowFunctionExpression" || (se = re.extra) != null && se.parenthesized) && G(), ((be = q) == null ? void 0 : be.params.length) !== 0 && this.resetStartLocationFromNode(re, q), re.typeParameters = q, re;
      }, _);
      if (!H.error && !H.aborted)
        return q && this.reportReservedArrowTypeParam(q), H.node;
      if (!k && (Ro(!this.hasPlugin("jsx")), B = this.tryParse(() => super.parseMaybeAssign(e, n), _), !B.error))
        return B.node;
      if ((f = k) != null && f.node)
        return this.state = k.failState, k.node;
      if (H.node)
        return this.state = H.failState, q && this.reportReservedArrowTypeParam(q), H.node;
      if ((E = B) != null && E.node)
        return this.state = B.failState, B.node;
      throw ((A = k) == null ? void 0 : A.error) || H.error || ((w = B) == null ? void 0 : w.error);
    }
    reportReservedArrowTypeParam(e) {
      var n;
      e.params.length === 1 && !e.params[0].constraint && !((n = e.extra) != null && n.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(K.ReservedArrowTypeParam, e);
    }
    parseMaybeUnary(e, n) {
      return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, n);
    }
    parseArrow(e) {
      if (this.match(14)) {
        const n = this.tryParse((a) => {
          const f = this.tsParseTypeOrTypePredicateAnnotation(14);
          return (this.canInsertSemicolon() || !this.match(19)) && a(), f;
        });
        if (n.aborted) return;
        n.thrown || (n.error && (this.state = n.failState), e.returnType = n.node);
      }
      return super.parseArrow(e);
    }
    parseFunctionParamType(e) {
      this.eat(17) && (e.optional = !0);
      const n = this.tsTryParseTypeAnnotation();
      return n && (e.typeAnnotation = n), this.resetEndLocation(e), e;
    }
    isAssignable(e, n) {
      switch (e.type) {
        case "TSTypeCastExpression":
          return this.isAssignable(e.expression, n);
        case "TSParameterProperty":
          return !0;
        default:
          return super.isAssignable(e, n);
      }
    }
    toAssignable(e, n = !1) {
      switch (e.type) {
        case "ParenthesizedExpression":
          this.toAssignableParenthesizedExpression(e, n);
          break;
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          n ? this.expressionScope.recordArrowParameterBindingError(K.UnexpectedTypeCastInParameter, e) : this.raise(K.UnexpectedTypeCastInParameter, e), this.toAssignable(e.expression, n);
          break;
        case "AssignmentExpression":
          !n && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
        default:
          super.toAssignable(e, n);
      }
    }
    toAssignableParenthesizedExpression(e, n) {
      switch (e.expression.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
        case "ParenthesizedExpression":
          this.toAssignable(e.expression, n);
          break;
        default:
          super.toAssignable(e, n);
      }
    }
    checkToRestConversion(e, n) {
      switch (e.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
        case "TSNonNullExpression":
          this.checkToRestConversion(e.expression, !1);
          break;
        default:
          super.checkToRestConversion(e, n);
      }
    }
    isValidLVal(e, n, a) {
      switch (e) {
        case "TSTypeCastExpression":
          return !0;
        case "TSParameterProperty":
          return "parameter";
        case "TSNonNullExpression":
          return "expression";
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
          return (a !== 64 || !n) && ["expression", !0];
        default:
          return super.isValidLVal(e, n, a);
      }
    }
    parseBindingAtom() {
      return this.state.type === 78 ? this.parseIdentifier(!0) : super.parseBindingAtom();
    }
    parseMaybeDecoratorArguments(e, n) {
      if (this.match(47) || this.match(51)) {
        const a = this.tsParseTypeArgumentsInExpression();
        if (this.match(10)) {
          const f = super.parseMaybeDecoratorArguments(e, n);
          return f.typeParameters = a, f;
        }
        this.unexpected(null, 10);
      }
      return super.parseMaybeDecoratorArguments(e, n);
    }
    checkCommaAfterRest(e) {
      return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), !1) : super.checkCommaAfterRest(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(35) || this.match(14) || super.isClassProperty();
    }
    parseMaybeDefault(e, n) {
      const a = super.parseMaybeDefault(e, n);
      return a.type === "AssignmentPattern" && a.typeAnnotation && a.right.start < a.typeAnnotation.start && this.raise(K.TypeAnnotationAfterAssign, a.typeAnnotation), a;
    }
    getTokenFromCode(e) {
      if (this.state.inType) {
        if (e === 62) {
          this.finishOp(48, 1);
          return;
        }
        if (e === 60) {
          this.finishOp(47, 1);
          return;
        }
      }
      super.getTokenFromCode(e);
    }
    reScan_lt_gt() {
      const {
        type: e
      } = this.state;
      e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
    }
    reScan_lt() {
      const {
        type: e
      } = this.state;
      return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
    }
    toAssignableListItem(e, n, a) {
      const f = e[n];
      f.type === "TSTypeCastExpression" && (e[n] = this.typeCastToParameter(f)), super.toAssignableListItem(e, n, a);
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    shouldParseArrow(e) {
      return this.match(14) ? e.every((n) => this.isAssignable(n, !0)) : super.shouldParseArrow(e);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    canHaveLeadingDecorator() {
      return super.canHaveLeadingDecorator() || this.isAbstractClass();
    }
    jsxParseOpeningElementAfterName(e) {
      if (this.match(47) || this.match(51)) {
        const n = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
        n && (e.typeParameters = n);
      }
      return super.jsxParseOpeningElementAfterName(e);
    }
    getGetterSetterExpectedParamCount(e) {
      const n = super.getGetterSetterExpectedParamCount(e), f = this.getObjectOrClassMethodParams(e)[0];
      return f && this.isThisParam(f) ? n + 1 : n;
    }
    parseCatchClauseParam() {
      const e = super.parseCatchClauseParam(), n = this.tsTryParseTypeAnnotation();
      return n && (e.typeAnnotation = n, this.resetEndLocation(e)), e;
    }
    tsInAmbientContext(e) {
      const {
        isAmbientContext: n,
        strict: a
      } = this.state;
      this.state.isAmbientContext = !0, this.state.strict = !1;
      try {
        return e();
      } finally {
        this.state.isAmbientContext = n, this.state.strict = a;
      }
    }
    parseClass(e, n, a) {
      const f = this.state.inAbstractClass;
      this.state.inAbstractClass = !!e.abstract;
      try {
        return super.parseClass(e, n, a);
      } finally {
        this.state.inAbstractClass = f;
      }
    }
    tsParseAbstractDeclaration(e, n) {
      if (this.match(80))
        return e.abstract = !0, this.maybeTakeDecorators(n, this.parseClass(e, !0, !1));
      if (this.isContextual(129)) {
        if (!this.hasFollowingLineBreak())
          return e.abstract = !0, this.raise(K.NonClassMethodPropertyHasAbstractModifer, e), this.tsParseInterfaceDeclaration(e);
      } else
        this.unexpected(null, 80);
    }
    parseMethod(e, n, a, f, E, A, w) {
      const _ = super.parseMethod(e, n, a, f, E, A, w);
      if ((_.abstract || _.type === "TSAbstractMethodDefinition") && (this.hasPlugin("estree") ? _.value : _).body) {
        const {
          key: q
        } = _;
        this.raise(K.AbstractMethodHasImplementation, _, {
          methodName: q.type === "Identifier" && !_.computed ? q.name : `[${this.input.slice(this.offsetToSourcePos(q.start), this.offsetToSourcePos(q.end))}]`
        });
      }
      return _;
    }
    tsParseTypeParameterName() {
      return this.parseIdentifier().name;
    }
    shouldParseAsAmbientContext() {
      return !!this.getPluginOption("typescript", "dts");
    }
    parse() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.parse();
    }
    getExpression() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.getExpression();
    }
    parseExportSpecifier(e, n, a, f) {
      return !n && f ? (this.parseTypeOnlyImportExportSpecifier(e, !1, a), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, n, a, f));
    }
    parseImportSpecifier(e, n, a, f, E) {
      return !n && f ? (this.parseTypeOnlyImportExportSpecifier(e, !0, a), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, n, a, f, a ? 4098 : 4096));
    }
    parseTypeOnlyImportExportSpecifier(e, n, a) {
      const f = n ? "imported" : "local", E = n ? "local" : "exported";
      let A = e[f], w, _ = !1, k = !0;
      const B = A.loc.start;
      if (this.isContextual(93)) {
        const H = this.parseIdentifier();
        if (this.isContextual(93)) {
          const G = this.parseIdentifier();
          Pe(this.state.type) ? (_ = !0, A = H, w = n ? this.parseIdentifier() : this.parseModuleExportName(), k = !1) : (w = G, k = !1);
        } else Pe(this.state.type) ? (k = !1, w = n ? this.parseIdentifier() : this.parseModuleExportName()) : (_ = !0, A = H);
      } else Pe(this.state.type) && (_ = !0, n ? (A = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(A.name, A.loc.start, !0, !0)) : A = this.parseModuleExportName());
      _ && a && this.raise(n ? K.TypeModifierIsUsedInTypeImports : K.TypeModifierIsUsedInTypeExports, B), e[f] = A, e[E] = w;
      const q = n ? "importKind" : "exportKind";
      e[q] = _ ? "type" : "value", k && this.eatContextual(93) && (e[E] = n ? this.parseIdentifier() : this.parseModuleExportName()), e[E] || (e[E] = this.cloneIdentifier(e[f])), n && this.checkIdentifier(e[E], _ ? 4098 : 4096);
    }
    fillOptionalPropertiesForTSESLint(e) {
      var n, a, f, E, A, w, _, k, B, q, H, G, se, be, re, ce, Ot, bt, zo, Xo, Wo, Go, Ko, Jo, Yo, Qo, Zo, eu, tu, su, ru, iu, nu, au, ou, uu, lu, cu, hu, pu, fu, du, mu, yu, gu, bu;
      switch (e.type) {
        case "ExpressionStatement":
          (n = e.directive) != null || (e.directive = void 0);
          return;
        case "RestElement":
          e.value = void 0;
        case "Identifier":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "ObjectPattern":
          (a = e.decorators) != null || (e.decorators = []), (f = e.optional) != null || (e.optional = !1), (E = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
          return;
        case "TSParameterProperty":
          (A = e.accessibility) != null || (e.accessibility = void 0), (w = e.decorators) != null || (e.decorators = []), (_ = e.override) != null || (e.override = !1), (k = e.readonly) != null || (e.readonly = !1), (B = e.static) != null || (e.static = !1);
          return;
        case "TSEmptyBodyFunctionExpression":
          e.body = null;
        case "TSDeclareFunction":
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ClassMethod":
        case "ClassPrivateMethod":
          (q = e.declare) != null || (e.declare = !1), (H = e.returnType) != null || (e.returnType = void 0), (G = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "Property":
          (se = e.optional) != null || (e.optional = !1);
          return;
        case "TSMethodSignature":
        case "TSPropertySignature":
          (be = e.optional) != null || (e.optional = !1);
        case "TSIndexSignature":
          (re = e.accessibility) != null || (e.accessibility = void 0), (ce = e.readonly) != null || (e.readonly = !1), (Ot = e.static) != null || (e.static = !1);
          return;
        case "TSAbstractPropertyDefinition":
        case "PropertyDefinition":
        case "TSAbstractAccessorProperty":
        case "AccessorProperty":
          (bt = e.declare) != null || (e.declare = !1), (zo = e.definite) != null || (e.definite = !1), (Xo = e.readonly) != null || (e.readonly = !1), (Wo = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
        case "TSAbstractMethodDefinition":
        case "MethodDefinition":
          (Go = e.accessibility) != null || (e.accessibility = void 0), (Ko = e.decorators) != null || (e.decorators = []), (Jo = e.override) != null || (e.override = !1), (Yo = e.optional) != null || (e.optional = !1);
          return;
        case "ClassExpression":
          (Qo = e.id) != null || (e.id = null);
        case "ClassDeclaration":
          (Zo = e.abstract) != null || (e.abstract = !1), (eu = e.declare) != null || (e.declare = !1), (tu = e.decorators) != null || (e.decorators = []), (su = e.implements) != null || (e.implements = []), (ru = e.superTypeArguments) != null || (e.superTypeArguments = void 0), (iu = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "TSTypeAliasDeclaration":
        case "VariableDeclaration":
          (nu = e.declare) != null || (e.declare = !1);
          return;
        case "VariableDeclarator":
          (au = e.definite) != null || (e.definite = !1);
          return;
        case "TSEnumDeclaration":
          (ou = e.const) != null || (e.const = !1), (uu = e.declare) != null || (e.declare = !1);
          return;
        case "TSEnumMember":
          (lu = e.computed) != null || (e.computed = !1);
          return;
        case "TSImportType":
          (cu = e.qualifier) != null || (e.qualifier = null), (hu = e.options) != null || (e.options = null);
          return;
        case "TSInterfaceDeclaration":
          (pu = e.declare) != null || (e.declare = !1), (fu = e.extends) != null || (e.extends = []);
          return;
        case "TSModuleDeclaration":
          (du = e.declare) != null || (e.declare = !1), (mu = e.global) != null || (e.global = e.kind === "global");
          return;
        case "TSTypeParameter":
          (yu = e.const) != null || (e.const = !1), (gu = e.in) != null || (e.in = !1), (bu = e.out) != null || (e.out = !1);
          return;
      }
    }
  };
  function qf(S) {
    if (S.type !== "MemberExpression") return !1;
    const {
      computed: i,
      property: e
    } = S;
    return i && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : Bo(S.object);
  }
  function Hf(S, i) {
    var e;
    const {
      type: n
    } = S;
    if ((e = S.extra) != null && e.parenthesized)
      return !1;
    if (i) {
      if (n === "Literal") {
        const {
          value: a
        } = S;
        if (typeof a == "string" || typeof a == "boolean")
          return !0;
      }
    } else if (n === "StringLiteral" || n === "BooleanLiteral")
      return !0;
    return !!(Fo(S, i) || zf(S, i) || n === "TemplateLiteral" && S.expressions.length === 0 || qf(S));
  }
  function Fo(S, i) {
    return i ? S.type === "Literal" && (typeof S.value == "number" || "bigint" in S) : S.type === "NumericLiteral" || S.type === "BigIntLiteral";
  }
  function zf(S, i) {
    if (S.type === "UnaryExpression") {
      const {
        operator: e,
        argument: n
      } = S;
      if (e === "-" && Fo(n, i))
        return !0;
    }
    return !1;
  }
  function Bo(S) {
    return S.type === "Identifier" ? !0 : S.type !== "MemberExpression" || S.computed ? !1 : Bo(S.object);
  }
  const Uo = P`placeholders`({
    ClassNameIsRequired: "A class name is required.",
    UnexpectedSpace: "Unexpected space in placeholder."
  });
  var Xf = (S) => class extends S {
    parsePlaceholder(e) {
      if (this.match(133)) {
        const n = this.startNode();
        return this.next(), this.assertNoSpace(), n.name = super.parseIdentifier(!0), this.assertNoSpace(), this.expect(133), this.finishPlaceholder(n, e);
      }
    }
    finishPlaceholder(e, n) {
      let a = e;
      return (!a.expectedNode || !a.type) && (a = this.finishNode(a, "Placeholder")), a.expectedNode = n, a;
    }
    getTokenFromCode(e) {
      e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(133, 2) : super.getTokenFromCode(e);
    }
    parseExprAtom(e) {
      return this.parsePlaceholder("Expression") || super.parseExprAtom(e);
    }
    parseIdentifier(e) {
      return this.parsePlaceholder("Identifier") || super.parseIdentifier(e);
    }
    checkReservedWord(e, n, a, f) {
      e !== void 0 && super.checkReservedWord(e, n, a, f);
    }
    cloneIdentifier(e) {
      const n = super.cloneIdentifier(e);
      return n.type === "Placeholder" && (n.expectedNode = e.expectedNode), n;
    }
    cloneStringLiteral(e) {
      return e.type === "Placeholder" ? this.cloneIdentifier(e) : super.cloneStringLiteral(e);
    }
    parseBindingAtom() {
      return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
    }
    isValidLVal(e, n, a) {
      return e === "Placeholder" || super.isValidLVal(e, n, a);
    }
    toAssignable(e, n) {
      e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : super.toAssignable(e, n);
    }
    chStartsBindingIdentifier(e, n) {
      return !!(super.chStartsBindingIdentifier(e, n) || this.lookahead().type === 133);
    }
    verifyBreakContinue(e, n) {
      e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(e, n);
    }
    parseExpressionStatement(e, n) {
      var a;
      if (n.type !== "Placeholder" || (a = n.extra) != null && a.parenthesized)
        return super.parseExpressionStatement(e, n);
      if (this.match(14)) {
        const E = e;
        return E.label = this.finishPlaceholder(n, "Identifier"), this.next(), E.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(), this.finishNode(E, "LabeledStatement");
      }
      this.semicolon();
      const f = e;
      return f.name = n.name, this.finishPlaceholder(f, "Statement");
    }
    parseBlock(e, n, a) {
      return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, n, a);
    }
    parseFunctionId(e) {
      return this.parsePlaceholder("Identifier") || super.parseFunctionId(e);
    }
    parseClass(e, n, a) {
      const f = n ? "ClassDeclaration" : "ClassExpression";
      this.next();
      const E = this.state.strict, A = this.parsePlaceholder("Identifier");
      if (A)
        if (this.match(81) || this.match(133) || this.match(5))
          e.id = A;
        else {
          if (a || !n)
            return e.id = null, e.body = this.finishPlaceholder(A, "ClassBody"), this.finishNode(e, f);
          throw this.raise(Uo.ClassNameIsRequired, this.state.startLoc);
        }
      else
        this.parseClassId(e, n, a);
      return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, E), this.finishNode(e, f);
    }
    parseExport(e, n) {
      const a = this.parsePlaceholder("Identifier");
      if (!a) return super.parseExport(e, n);
      const f = e;
      if (!this.isContextual(98) && !this.match(12))
        return f.specifiers = [], f.source = null, f.declaration = this.finishPlaceholder(a, "Declaration"), this.finishNode(f, "ExportNamedDeclaration");
      this.expectPlugin("exportDefaultFrom");
      const E = this.startNode();
      return E.exported = a, f.specifiers = [this.finishNode(E, "ExportDefaultSpecifier")], super.parseExport(f, n);
    }
    isExportDefaultSpecifier() {
      if (this.match(65)) {
        const e = this.nextTokenStart();
        if (this.isUnparsedContextual(e, "from") && this.input.startsWith(mt(133), this.nextTokenStartSince(e + 4)))
          return !0;
      }
      return super.isExportDefaultSpecifier();
    }
    maybeParseExportDefaultSpecifier(e, n) {
      var a;
      return (a = e.specifiers) != null && a.length ? !0 : super.maybeParseExportDefaultSpecifier(e, n);
    }
    checkExport(e) {
      const {
        specifiers: n
      } = e;
      n != null && n.length && (e.specifiers = n.filter((a) => a.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = n;
    }
    parseImport(e) {
      const n = this.parsePlaceholder("Identifier");
      if (!n) return super.parseImport(e);
      if (e.specifiers = [], !this.isContextual(98) && !this.match(12))
        return e.source = this.finishPlaceholder(n, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
      const a = this.startNodeAtNode(n);
      return a.local = n, e.specifiers.push(this.finishNode(a, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(98), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }
    parseImportSource() {
      return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
    }
    assertNoSpace() {
      this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index) && this.raise(Uo.UnexpectedSpace, this.state.lastTokEndLoc);
    }
  }, Wf = (S) => class extends S {
    parseV8Intrinsic() {
      if (this.match(54)) {
        const e = this.state.startLoc, n = this.startNode();
        if (this.next(), ie(this.state.type)) {
          const a = this.parseIdentifierName(), f = this.createIdentifier(n, a);
          if (this.castNodeTo(f, "V8IntrinsicIdentifier"), this.match(10))
            return f;
        }
        this.unexpected(e);
      }
    }
    parseExprAtom(e) {
      return this.parseV8Intrinsic() || super.parseExprAtom(e);
    }
  };
  const $o = ["minimal", "fsharp", "hack", "smart"], Vo = ["^^", "@@", "^", "%", "#"];
  function Gf(S) {
    if (S.has("decorators")) {
      if (S.has("decorators-legacy"))
        throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      const n = S.get("decorators").decoratorsBeforeExport;
      if (n != null && typeof n != "boolean")
        throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
      const a = S.get("decorators").allowCallParenthesized;
      if (a != null && typeof a != "boolean")
        throw new Error("'allowCallParenthesized' must be a boolean.");
    }
    if (S.has("flow") && S.has("typescript"))
      throw new Error("Cannot combine flow and typescript plugins.");
    if (S.has("placeholders") && S.has("v8intrinsic"))
      throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
    if (S.has("pipelineOperator")) {
      var i;
      const n = S.get("pipelineOperator").proposal;
      if (!$o.includes(n)) {
        const a = $o.map((f) => `"${f}"`).join(", ");
        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${a}.`);
      }
      if (n === "hack") {
        if (S.has("placeholders"))
          throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (S.has("v8intrinsic"))
          throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        const a = S.get("pipelineOperator").topicToken;
        if (!Vo.includes(a)) {
          const f = Vo.map((E) => `"${E}"`).join(", ");
          throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${f}.`);
        }
        {
          var e;
          if (a === "#" && ((e = S.get("recordAndTuple")) == null ? void 0 : e.syntaxType) === "hash")
            throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "hack", topicToken: "#" }]\` and \`${JSON.stringify(["recordAndTuple", S.get("recordAndTuple")])}\`.`);
        }
      } else if (n === "smart" && ((i = S.get("recordAndTuple")) == null ? void 0 : i.syntaxType) === "hash")
        throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "smart" }]\` and \`${JSON.stringify(["recordAndTuple", S.get("recordAndTuple")])}\`.`);
    }
    if (S.has("moduleAttributes")) {
      if (S.has("deprecatedImportAssert") || S.has("importAssertions"))
        throw new Error("Cannot combine importAssertions, deprecatedImportAssert and moduleAttributes plugins.");
      if (S.get("moduleAttributes").version !== "may-2020")
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
    }
    if (S.has("importAssertions") && S.has("deprecatedImportAssert"))
      throw new Error("Cannot combine importAssertions and deprecatedImportAssert plugins.");
    if (!S.has("deprecatedImportAssert") && S.has("importAttributes") && S.get("importAttributes").deprecatedAssertSyntax && S.set("deprecatedImportAssert", {}), S.has("recordAndTuple")) {
      const n = S.get("recordAndTuple").syntaxType;
      if (n != null) {
        const a = ["hash", "bar"];
        if (!a.includes(n))
          throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + a.map((f) => `'${f}'`).join(", "));
      }
    }
    if (S.has("asyncDoExpressions") && !S.has("doExpressions")) {
      const n = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
      throw n.missingPlugins = "doExpressions", n;
    }
    if (S.has("optionalChainingAssign") && S.get("optionalChainingAssign").version !== "2023-07")
      throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is '2023-07'.");
  }
  const jo = {
    estree: D,
    jsx: bf,
    flow: df,
    typescript: jf,
    v8intrinsic: Wf,
    placeholders: Xf
  }, Kf = Object.keys(jo);
  class Jf extends Bf {
    checkProto(i, e, n, a) {
      if (i.type === "SpreadElement" || this.isObjectMethod(i) || i.computed || i.shorthand)
        return n;
      const f = i.key;
      return (f.type === "Identifier" ? f.name : f.value) === "__proto__" ? e ? (this.raise(y.RecordNoProto, f), !0) : (n && (a ? a.doubleProtoLoc === null && (a.doubleProtoLoc = f.loc.start) : this.raise(y.DuplicateProto, f)), !0) : n;
    }
    shouldExitDescending(i, e) {
      return i.type === "ArrowFunctionExpression" && this.offsetToSourcePos(i.start) === e;
    }
    getExpression() {
      this.enterInitialScopes(), this.nextToken();
      const i = this.parseExpression();
      return this.match(140) || this.unexpected(), this.finalizeRemainingComments(), i.comments = this.comments, i.errors = this.state.errors, this.optionFlags & 256 && (i.tokens = this.tokens), i;
    }
    parseExpression(i, e) {
      return i ? this.disallowInAnd(() => this.parseExpressionBase(e)) : this.allowInAnd(() => this.parseExpressionBase(e));
    }
    parseExpressionBase(i) {
      const e = this.state.startLoc, n = this.parseMaybeAssign(i);
      if (this.match(12)) {
        const a = this.startNodeAt(e);
        for (a.expressions = [n]; this.eat(12); )
          a.expressions.push(this.parseMaybeAssign(i));
        return this.toReferencedList(a.expressions), this.finishNode(a, "SequenceExpression");
      }
      return n;
    }
    parseMaybeAssignDisallowIn(i, e) {
      return this.disallowInAnd(() => this.parseMaybeAssign(i, e));
    }
    parseMaybeAssignAllowIn(i, e) {
      return this.allowInAnd(() => this.parseMaybeAssign(i, e));
    }
    setOptionalParametersError(i) {
      i.optionalParametersLoc = this.state.startLoc;
    }
    parseMaybeAssign(i, e) {
      const n = this.state.startLoc, a = this.isContextual(108);
      if (a && this.prodParam.hasYield) {
        this.next();
        let w = this.parseYield(n);
        return e && (w = e.call(this, w, n)), w;
      }
      let f;
      i ? f = !1 : (i = new cr(), f = !0);
      const {
        type: E
      } = this.state;
      (E === 10 || ie(E)) && (this.state.potentialArrowAt = this.state.start);
      let A = this.parseMaybeConditional(i);
      if (e && (A = e.call(this, A, n)), jp(this.state.type)) {
        const w = this.startNodeAt(n), _ = this.state.value;
        if (w.operator = _, this.match(29)) {
          this.toAssignable(A, !0), w.left = A;
          const k = n.index;
          i.doubleProtoLoc != null && i.doubleProtoLoc.index >= k && (i.doubleProtoLoc = null), i.shorthandAssignLoc != null && i.shorthandAssignLoc.index >= k && (i.shorthandAssignLoc = null), i.privateKeyLoc != null && i.privateKeyLoc.index >= k && (this.checkDestructuringPrivate(i), i.privateKeyLoc = null);
        } else
          w.left = A;
        return this.next(), w.right = this.parseMaybeAssign(), this.checkLVal(A, this.finishNode(w, "AssignmentExpression")), w;
      } else f && this.checkExpressionErrors(i, !0);
      if (a) {
        const {
          type: w
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? As(w) : As(w) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(y.YieldNotInGeneratorFunction, n), this.parseYield(n);
      }
      return A;
    }
    parseMaybeConditional(i) {
      const e = this.state.startLoc, n = this.state.potentialArrowAt, a = this.parseExprOps(i);
      return this.shouldExitDescending(a, n) ? a : this.parseConditional(a, e, i);
    }
    parseConditional(i, e, n) {
      if (this.eat(17)) {
        const a = this.startNodeAt(e);
        return a.test = i, a.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), a.alternate = this.parseMaybeAssign(), this.finishNode(a, "ConditionalExpression");
      }
      return i;
    }
    parseMaybeUnaryOrPrivate(i) {
      return this.match(139) ? this.parsePrivateName() : this.parseMaybeUnary(i);
    }
    parseExprOps(i) {
      const e = this.state.startLoc, n = this.state.potentialArrowAt, a = this.parseMaybeUnaryOrPrivate(i);
      return this.shouldExitDescending(a, n) ? a : this.parseExprOp(a, e, -1);
    }
    parseExprOp(i, e, n) {
      if (this.isPrivateName(i)) {
        const f = this.getPrivateNameSV(i);
        (n >= ir(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(y.PrivateInExpectedIn, i, {
          identifierName: f
        }), this.classScope.usePrivateName(f, i.loc.start);
      }
      const a = this.state.type;
      if (Hp(a) && (this.prodParam.hasIn || !this.match(58))) {
        let f = ir(a);
        if (f > n) {
          if (a === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
              return i;
            this.checkPipelineAtInfixOperator(i, e);
          }
          const E = this.startNodeAt(e);
          E.left = i, E.operator = this.state.value;
          const A = a === 41 || a === 42, w = a === 40;
          if (w && (f = ir(42)), this.next(), a === 39 && this.hasPlugin(["pipelineOperator", {
            proposal: "minimal"
          }]) && this.state.type === 96 && this.prodParam.hasAwait)
            throw this.raise(y.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
          E.right = this.parseExprOpRightExpr(a, f);
          const _ = this.finishNode(E, A || w ? "LogicalExpression" : "BinaryExpression"), k = this.state.type;
          if (w && (k === 41 || k === 42) || A && k === 40)
            throw this.raise(y.MixingCoalesceWithLogical, this.state.startLoc);
          return this.parseExprOp(_, e, n);
        }
      }
      return i;
    }
    parseExprOpRightExpr(i, e) {
      const n = this.state.startLoc;
      switch (i) {
        case 39:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "hack":
              return this.withTopicBindingContext(() => this.parseHackPipeBody());
            case "fsharp":
              return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e));
          }
          if (this.getPluginOption("pipelineOperator", "proposal") === "smart")
            return this.withTopicBindingContext(() => {
              if (this.prodParam.hasYield && this.isContextual(108))
                throw this.raise(y.PipeBodyIsTighter, this.state.startLoc);
              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(i, e), n);
            });
        default:
          return this.parseExprOpBaseRightExpr(i, e);
      }
    }
    parseExprOpBaseRightExpr(i, e) {
      const n = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), n, Kp(i) ? e - 1 : e);
    }
    parseHackPipeBody() {
      var i;
      const {
        startLoc: e
      } = this.state, n = this.parseMaybeAssign();
      return d.has(n.type) && !((i = n.extra) != null && i.parenthesized) && this.raise(y.PipeUnparenthesizedBody, e, {
        type: n.type
      }), this.topicReferenceWasUsedInCurrentContext() || this.raise(y.PipeTopicUnused, e), n;
    }
    checkExponentialAfterUnary(i) {
      this.match(57) && this.raise(y.UnexpectedTokenUnaryExponentiation, i.argument);
    }
    parseMaybeUnary(i, e) {
      const n = this.state.startLoc, a = this.isContextual(96);
      if (a && this.recordAwaitIfAllowed()) {
        this.next();
        const w = this.parseAwait(n);
        return e || this.checkExponentialAfterUnary(w), w;
      }
      const f = this.match(34), E = this.startNode();
      if (Xp(this.state.type)) {
        E.operator = this.state.value, E.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
        const w = this.match(89);
        if (this.next(), E.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(i, !0), this.state.strict && w) {
          const _ = E.argument;
          _.type === "Identifier" ? this.raise(y.StrictDelete, E) : this.hasPropertyAsPrivateName(_) && this.raise(y.DeletePrivateField, E);
        }
        if (!f)
          return e || this.checkExponentialAfterUnary(E), this.finishNode(E, "UnaryExpression");
      }
      const A = this.parseUpdate(E, f, i);
      if (a) {
        const {
          type: w
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? As(w) : As(w) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(y.AwaitNotInAsyncContext, n), this.parseAwait(n);
      }
      return A;
    }
    parseUpdate(i, e, n) {
      if (e) {
        const E = i;
        return this.checkLVal(E.argument, this.finishNode(E, "UpdateExpression")), i;
      }
      const a = this.state.startLoc;
      let f = this.parseExprSubscripts(n);
      if (this.checkExpressionErrors(n, !1)) return f;
      for (; zp(this.state.type) && !this.canInsertSemicolon(); ) {
        const E = this.startNodeAt(a);
        E.operator = this.state.value, E.prefix = !1, E.argument = f, this.next(), this.checkLVal(f, f = this.finishNode(E, "UpdateExpression"));
      }
      return f;
    }
    parseExprSubscripts(i) {
      const e = this.state.startLoc, n = this.state.potentialArrowAt, a = this.parseExprAtom(i);
      return this.shouldExitDescending(a, n) ? a : this.parseSubscripts(a, e);
    }
    parseSubscripts(i, e, n) {
      const a = {
        optionalChainMember: !1,
        maybeAsyncArrow: this.atPossibleAsyncArrow(i),
        stop: !1
      };
      do
        i = this.parseSubscript(i, e, n, a), a.maybeAsyncArrow = !1;
      while (!a.stop);
      return i;
    }
    parseSubscript(i, e, n, a) {
      const {
        type: f
      } = this.state;
      if (!n && f === 15)
        return this.parseBind(i, e, n, a);
      if (nr(f))
        return this.parseTaggedTemplateExpression(i, e, a);
      let E = !1;
      if (f === 18) {
        if (n && (this.raise(y.OptionalChainingNoNew, this.state.startLoc), this.lookaheadCharCode() === 40))
          return this.stopParseSubscript(i, a);
        a.optionalChainMember = E = !0, this.next();
      }
      if (!n && this.match(10))
        return this.parseCoverCallAndAsyncArrowHead(i, e, a, E);
      {
        const A = this.eat(0);
        return A || E || this.eat(16) ? this.parseMember(i, e, a, A, E) : this.stopParseSubscript(i, a);
      }
    }
    stopParseSubscript(i, e) {
      return e.stop = !0, i;
    }
    parseMember(i, e, n, a, f) {
      const E = this.startNodeAt(e);
      return E.object = i, E.computed = a, a ? (E.property = this.parseExpression(), this.expect(3)) : this.match(139) ? (i.type === "Super" && this.raise(y.SuperPrivateField, e), this.classScope.usePrivateName(this.state.value, this.state.startLoc), E.property = this.parsePrivateName()) : E.property = this.parseIdentifier(!0), n.optionalChainMember ? (E.optional = f, this.finishNode(E, "OptionalMemberExpression")) : this.finishNode(E, "MemberExpression");
    }
    parseBind(i, e, n, a) {
      const f = this.startNodeAt(e);
      return f.object = i, this.next(), f.callee = this.parseNoCallExpr(), a.stop = !0, this.parseSubscripts(this.finishNode(f, "BindExpression"), e, n);
    }
    parseCoverCallAndAsyncArrowHead(i, e, n, a) {
      const f = this.state.maybeInArrowParameters;
      let E = null;
      this.state.maybeInArrowParameters = !0, this.next();
      const A = this.startNodeAt(e);
      A.callee = i;
      const {
        maybeAsyncArrow: w,
        optionalChainMember: _
      } = n;
      w && (this.expressionScope.enter(Rf()), E = new cr()), _ && (A.optional = a), a ? A.arguments = this.parseCallExpressionArguments(11) : A.arguments = this.parseCallExpressionArguments(11, i.type !== "Super", A, E);
      let k = this.finishCallExpression(A, _);
      return w && this.shouldParseAsyncArrow() && !a ? (n.stop = !0, this.checkDestructuringPrivate(E), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), k = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e), k)) : (w && (this.checkExpressionErrors(E, !0), this.expressionScope.exit()), this.toReferencedArguments(k)), this.state.maybeInArrowParameters = f, k;
    }
    toReferencedArguments(i, e) {
      this.toReferencedListDeep(i.arguments, e);
    }
    parseTaggedTemplateExpression(i, e, n) {
      const a = this.startNodeAt(e);
      return a.tag = i, a.quasi = this.parseTemplate(!0), n.optionalChainMember && this.raise(y.OptionalChainingNoTemplate, e), this.finishNode(a, "TaggedTemplateExpression");
    }
    atPossibleAsyncArrow(i) {
      return i.type === "Identifier" && i.name === "async" && this.state.lastTokEndLoc.index === i.end && !this.canInsertSemicolon() && i.end - i.start === 5 && this.offsetToSourcePos(i.start) === this.state.potentialArrowAt;
    }
    finishCallExpression(i, e) {
      if (i.callee.type === "Import")
        if (i.arguments.length === 0 || i.arguments.length > 2)
          this.raise(y.ImportCallArity, i);
        else
          for (const n of i.arguments)
            n.type === "SpreadElement" && this.raise(y.ImportCallSpreadArgument, n);
      return this.finishNode(i, e ? "OptionalCallExpression" : "CallExpression");
    }
    parseCallExpressionArguments(i, e, n, a) {
      const f = [];
      let E = !0;
      const A = this.state.inFSharpPipelineDirectBody;
      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(i); ) {
        if (E)
          E = !1;
        else if (this.expect(12), this.match(i)) {
          n && this.addTrailingCommaExtraToNode(n), this.next();
          break;
        }
        f.push(this.parseExprListItem(!1, a, e));
      }
      return this.state.inFSharpPipelineDirectBody = A, f;
    }
    shouldParseAsyncArrow() {
      return this.match(19) && !this.canInsertSemicolon();
    }
    parseAsyncArrowFromCallExpression(i, e) {
      var n;
      return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(i, e.arguments, !0, (n = e.extra) == null ? void 0 : n.trailingCommaLoc), e.innerComments && ws(i, e.innerComments), e.callee.trailingComments && ws(i, e.callee.trailingComments), i;
    }
    parseNoCallExpr() {
      const i = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), i, !0);
    }
    parseExprAtom(i) {
      let e, n = null;
      const {
        type: a
      } = this.state;
      switch (a) {
        case 79:
          return this.parseSuper();
        case 83:
          return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(e) : this.match(10) ? this.optionFlags & 512 ? this.parseImportCall(e) : this.finishNode(e, "Import") : (this.raise(y.UnsupportedImport, this.state.lastTokStartLoc), this.finishNode(e, "Import"));
        case 78:
          return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
        case 90:
          return this.parseDo(this.startNode(), !1);
        case 56:
        case 31:
          return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
        case 135:
          return this.parseNumericLiteral(this.state.value);
        case 136:
          return this.parseBigIntLiteral(this.state.value);
        case 134:
          return this.parseStringLiteral(this.state.value);
        case 84:
          return this.parseNullLiteral();
        case 85:
          return this.parseBooleanLiteral(!0);
        case 86:
          return this.parseBooleanLiteral(!1);
        case 10: {
          const f = this.state.potentialArrowAt === this.state.start;
          return this.parseParenAndDistinguishExpression(f);
        }
        case 0:
          return this.parseArrayLike(3, !0, !1, i);
        case 5:
          return this.parseObjectLike(8, !1, !1, i);
        case 68:
          return this.parseFunctionOrFunctionSent();
        case 26:
          n = this.parseDecorators();
        case 80:
          return this.parseClass(this.maybeTakeDecorators(n, this.startNode()), !1);
        case 77:
          return this.parseNewOrNewTarget();
        case 25:
        case 24:
          return this.parseTemplate(!1);
        case 15: {
          e = this.startNode(), this.next(), e.object = null;
          const f = e.callee = this.parseNoCallExpr();
          if (f.type === "MemberExpression")
            return this.finishNode(e, "BindExpression");
          throw this.raise(y.UnsupportedBind, f);
        }
        case 139:
          return this.raise(y.PrivateInExpectedIn, this.state.startLoc, {
            identifierName: this.state.value
          }), this.parsePrivateName();
        case 33:
          return this.parseTopicReferenceThenEqualsSign(54, "%");
        case 32:
          return this.parseTopicReferenceThenEqualsSign(44, "^");
        case 37:
        case 38:
          return this.parseTopicReference("hack");
        case 44:
        case 54:
        case 27: {
          const f = this.getPluginOption("pipelineOperator", "proposal");
          if (f)
            return this.parseTopicReference(f);
          this.unexpected();
          break;
        }
        case 47: {
          const f = this.input.codePointAt(this.nextTokenStart());
          nt(f) || f === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
          break;
        }
        default:
          {
            if (a === 137)
              return this.parseDecimalLiteral(this.state.value);
            if (a === 2 || a === 1)
              return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !1, !0);
            if (a === 6 || a === 7)
              return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
          }
          if (ie(a)) {
            if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123)
              return this.parseModuleExpression();
            const f = this.state.potentialArrowAt === this.state.start, E = this.state.containsEsc, A = this.parseIdentifier();
            if (!E && A.name === "async" && !this.canInsertSemicolon()) {
              const {
                type: w
              } = this.state;
              if (w === 68)
                return this.resetPreviousNodeTrailingComments(A), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(A));
              if (ie(w))
                return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(A)) : A;
              if (w === 90)
                return this.resetPreviousNodeTrailingComments(A), this.parseDo(this.startNodeAtNode(A), !0);
            }
            return f && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(A), [A], !1)) : A;
          } else
            this.unexpected();
      }
    }
    parseTopicReferenceThenEqualsSign(i, e) {
      const n = this.getPluginOption("pipelineOperator", "proposal");
      if (n)
        return this.state.type = i, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = o(this.state.endLoc, -1), this.parseTopicReference(n);
      this.unexpected();
    }
    parseTopicReference(i) {
      const e = this.startNode(), n = this.state.startLoc, a = this.state.type;
      return this.next(), this.finishTopicReference(e, n, i, a);
    }
    finishTopicReference(i, e, n, a) {
      if (this.testTopicReferenceConfiguration(n, e, a))
        return n === "hack" ? (this.topicReferenceIsAllowedInCurrentContext() || this.raise(y.PipeTopicUnbound, e), this.registerTopicReference(), this.finishNode(i, "TopicReference")) : (this.topicReferenceIsAllowedInCurrentContext() || this.raise(y.PrimaryTopicNotAllowed, e), this.registerTopicReference(), this.finishNode(i, "PipelinePrimaryTopicReference"));
      throw this.raise(y.PipeTopicUnconfiguredToken, e, {
        token: mt(a)
      });
    }
    testTopicReferenceConfiguration(i, e, n) {
      switch (i) {
        case "hack":
          return this.hasPlugin(["pipelineOperator", {
            topicToken: mt(n)
          }]);
        case "smart":
          return n === 27;
        default:
          throw this.raise(y.PipeTopicRequiresHackPipes, e);
      }
    }
    parseAsyncArrowUnaryFunction(i) {
      this.prodParam.enter(or(!0, this.prodParam.hasYield));
      const e = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(y.LineTerminatorBeforeArrow, this.state.curPosition()), this.expect(19), this.parseArrowExpression(i, e, !0);
    }
    parseDo(i, e) {
      this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), i.async = e, this.next();
      const n = this.state.labels;
      return this.state.labels = [], e ? (this.prodParam.enter(2), i.body = this.parseBlock(), this.prodParam.exit()) : i.body = this.parseBlock(), this.state.labels = n, this.finishNode(i, "DoExpression");
    }
    parseSuper() {
      const i = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper && !(this.optionFlags & 16) ? this.raise(y.SuperNotAllowed, i) : !this.scope.allowSuper && !(this.optionFlags & 16) && this.raise(y.UnexpectedSuper, i), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(y.UnsupportedSuper, i), this.finishNode(i, "Super");
    }
    parsePrivateName() {
      const i = this.startNode(), e = this.startNodeAt(o(this.state.startLoc, 1)), n = this.state.value;
      return this.next(), i.id = this.createIdentifier(e, n), this.finishNode(i, "PrivateName");
    }
    parseFunctionOrFunctionSent() {
      const i = this.startNode();
      if (this.next(), this.prodParam.hasYield && this.match(16)) {
        const e = this.createIdentifier(this.startNodeAtNode(i), "function");
        return this.next(), this.match(103) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(i, e, "sent");
      }
      return this.parseFunction(i);
    }
    parseMetaProperty(i, e, n) {
      i.meta = e;
      const a = this.state.containsEsc;
      return i.property = this.parseIdentifier(!0), (i.property.name !== n || a) && this.raise(y.UnsupportedMetaProperty, i.property, {
        target: e.name,
        onlyValidPropertyName: n
      }), this.finishNode(i, "MetaProperty");
    }
    parseImportMetaProperty(i) {
      const e = this.createIdentifier(this.startNodeAtNode(i), "import");
      if (this.next(), this.isContextual(101))
        this.inModule || this.raise(y.ImportMetaOutsideModule, e), this.sawUnambiguousESM = !0;
      else if (this.isContextual(105) || this.isContextual(97)) {
        const n = this.isContextual(105);
        if (this.expectPlugin(n ? "sourcePhaseImports" : "deferredImportEvaluation"), !(this.optionFlags & 512))
          throw this.raise(y.DynamicImportPhaseRequiresImportExpressions, this.state.startLoc, {
            phase: this.state.value
          });
        return this.next(), i.phase = n ? "source" : "defer", this.parseImportCall(i);
      }
      return this.parseMetaProperty(i, e, "meta");
    }
    parseLiteralAtNode(i, e, n) {
      return this.addExtra(n, "rawValue", i), this.addExtra(n, "raw", this.input.slice(this.offsetToSourcePos(n.start), this.state.end)), n.value = i, this.next(), this.finishNode(n, e);
    }
    parseLiteral(i, e) {
      const n = this.startNode();
      return this.parseLiteralAtNode(i, e, n);
    }
    parseStringLiteral(i) {
      return this.parseLiteral(i, "StringLiteral");
    }
    parseNumericLiteral(i) {
      return this.parseLiteral(i, "NumericLiteral");
    }
    parseBigIntLiteral(i) {
      return this.parseLiteral(i, "BigIntLiteral");
    }
    parseDecimalLiteral(i) {
      return this.parseLiteral(i, "DecimalLiteral");
    }
    parseRegExpLiteral(i) {
      const e = this.startNode();
      return this.addExtra(e, "raw", this.input.slice(this.offsetToSourcePos(e.start), this.state.end)), e.pattern = i.pattern, e.flags = i.flags, this.next(), this.finishNode(e, "RegExpLiteral");
    }
    parseBooleanLiteral(i) {
      const e = this.startNode();
      return e.value = i, this.next(), this.finishNode(e, "BooleanLiteral");
    }
    parseNullLiteral() {
      const i = this.startNode();
      return this.next(), this.finishNode(i, "NullLiteral");
    }
    parseParenAndDistinguishExpression(i) {
      const e = this.state.startLoc;
      let n;
      this.next(), this.expressionScope.enter(Mf());
      const a = this.state.maybeInArrowParameters, f = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
      const E = this.state.startLoc, A = [], w = new cr();
      let _ = !0, k, B;
      for (; !this.match(11); ) {
        if (_)
          _ = !1;
        else if (this.expect(12, w.optionalParametersLoc === null ? null : w.optionalParametersLoc), this.match(11)) {
          B = this.state.startLoc;
          break;
        }
        if (this.match(21)) {
          const G = this.state.startLoc;
          if (k = this.state.startLoc, A.push(this.parseParenItem(this.parseRestBinding(), G)), !this.checkCommaAfterRest(41))
            break;
        } else
          A.push(this.parseMaybeAssignAllowIn(w, this.parseParenItem));
      }
      const q = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = a, this.state.inFSharpPipelineDirectBody = f;
      let H = this.startNodeAt(e);
      return i && this.shouldParseArrow(A) && (H = this.parseArrow(H)) ? (this.checkDestructuringPrivate(w), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(H, A, !1), H) : (this.expressionScope.exit(), A.length || this.unexpected(this.state.lastTokStartLoc), B && this.unexpected(B), k && this.unexpected(k), this.checkExpressionErrors(w, !0), this.toReferencedListDeep(A, !0), A.length > 1 ? (n = this.startNodeAt(E), n.expressions = A, this.finishNode(n, "SequenceExpression"), this.resetEndLocation(n, q)) : n = A[0], this.wrapParenthesis(e, n));
    }
    wrapParenthesis(i, e) {
      if (!(this.optionFlags & 1024))
        return this.addExtra(e, "parenthesized", !0), this.addExtra(e, "parenStart", i.index), this.takeSurroundingComments(e, i.index, this.state.lastTokEndLoc.index), e;
      const n = this.startNodeAt(i);
      return n.expression = e, this.finishNode(n, "ParenthesizedExpression");
    }
    shouldParseArrow(i) {
      return !this.canInsertSemicolon();
    }
    parseArrow(i) {
      if (this.eat(19))
        return i;
    }
    parseParenItem(i, e) {
      return i;
    }
    parseNewOrNewTarget() {
      const i = this.startNode();
      if (this.next(), this.match(16)) {
        const e = this.createIdentifier(this.startNodeAtNode(i), "new");
        this.next();
        const n = this.parseMetaProperty(i, e, "target");
        return !this.scope.inNonArrowFunction && !this.scope.inClass && !(this.optionFlags & 4) && this.raise(y.UnexpectedNewTarget, n), n;
      }
      return this.parseNew(i);
    }
    parseNew(i) {
      if (this.parseNewCallee(i), this.eat(10)) {
        const e = this.parseExprList(11);
        this.toReferencedList(e), i.arguments = e;
      } else
        i.arguments = [];
      return this.finishNode(i, "NewExpression");
    }
    parseNewCallee(i) {
      const e = this.match(83), n = this.parseNoCallExpr();
      i.callee = n, e && (n.type === "Import" || n.type === "ImportExpression") && this.raise(y.ImportCallNotNewExpression, n);
    }
    parseTemplateElement(i) {
      const {
        start: e,
        startLoc: n,
        end: a,
        value: f
      } = this.state, E = e + 1, A = this.startNodeAt(o(n, 1));
      f === null && (i || this.raise(y.InvalidEscapeSequenceTemplate, o(this.state.firstInvalidTemplateEscapePos, 1)));
      const w = this.match(24), _ = w ? -1 : -2, k = a + _;
      A.value = {
        raw: this.input.slice(E, k).replace(/\r\n?/g, `
`),
        cooked: f === null ? null : f.slice(1, _)
      }, A.tail = w, this.next();
      const B = this.finishNode(A, "TemplateElement");
      return this.resetEndLocation(B, o(this.state.lastTokEndLoc, _)), B;
    }
    parseTemplate(i) {
      const e = this.startNode();
      let n = this.parseTemplateElement(i);
      const a = [n], f = [];
      for (; !n.tail; )
        f.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), a.push(n = this.parseTemplateElement(i));
      return e.expressions = f, e.quasis = a, this.finishNode(e, "TemplateLiteral");
    }
    parseTemplateSubstitution() {
      return this.parseExpression();
    }
    parseObjectLike(i, e, n, a) {
      n && this.expectPlugin("recordAndTuple");
      const f = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      let E = !1, A = !0;
      const w = this.startNode();
      for (w.properties = [], this.next(); !this.match(i); ) {
        if (A)
          A = !1;
        else if (this.expect(12), this.match(i)) {
          this.addTrailingCommaExtraToNode(w);
          break;
        }
        let k;
        e ? k = this.parseBindingProperty() : (k = this.parsePropertyDefinition(a), E = this.checkProto(k, n, E, a)), n && !this.isObjectProperty(k) && k.type !== "SpreadElement" && this.raise(y.InvalidRecordProperty, k), k.shorthand && this.addExtra(k, "shorthand", !0), w.properties.push(k);
      }
      this.next(), this.state.inFSharpPipelineDirectBody = f;
      let _ = "ObjectExpression";
      return e ? _ = "ObjectPattern" : n && (_ = "RecordExpression"), this.finishNode(w, _);
    }
    addTrailingCommaExtraToNode(i) {
      this.addExtra(i, "trailingComma", this.state.lastTokStartLoc.index), this.addExtra(i, "trailingCommaLoc", this.state.lastTokStartLoc, !1);
    }
    maybeAsyncOrAccessorProp(i) {
      return !i.computed && i.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
    }
    parsePropertyDefinition(i) {
      let e = [];
      if (this.match(26))
        for (this.hasPlugin("decorators") && this.raise(y.UnsupportedPropertyDecorator, this.state.startLoc); this.match(26); )
          e.push(this.parseDecorator());
      const n = this.startNode();
      let a = !1, f = !1, E;
      if (this.match(21))
        return e.length && this.unexpected(), this.parseSpread();
      e.length && (n.decorators = e, e = []), n.method = !1, i && (E = this.state.startLoc);
      let A = this.eat(55);
      this.parsePropertyNamePrefixOperator(n);
      const w = this.state.containsEsc;
      if (this.parsePropertyName(n, i), !A && !w && this.maybeAsyncOrAccessorProp(n)) {
        const {
          key: _
        } = n, k = _.name;
        k === "async" && !this.hasPrecedingLineBreak() && (a = !0, this.resetPreviousNodeTrailingComments(_), A = this.eat(55), this.parsePropertyName(n)), (k === "get" || k === "set") && (f = !0, this.resetPreviousNodeTrailingComments(_), n.kind = k, this.match(55) && (A = !0, this.raise(y.AccessorIsGenerator, this.state.curPosition(), {
          kind: k
        }), this.next()), this.parsePropertyName(n));
      }
      return this.parseObjPropValue(n, E, A, a, !1, f, i);
    }
    getGetterSetterExpectedParamCount(i) {
      return i.kind === "get" ? 0 : 1;
    }
    getObjectOrClassMethodParams(i) {
      return i.params;
    }
    checkGetterSetterParams(i) {
      var e;
      const n = this.getGetterSetterExpectedParamCount(i), a = this.getObjectOrClassMethodParams(i);
      a.length !== n && this.raise(i.kind === "get" ? y.BadGetterArity : y.BadSetterArity, i), i.kind === "set" && ((e = a[a.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(y.BadSetterRestParameter, i);
    }
    parseObjectMethod(i, e, n, a, f) {
      if (f) {
        const E = this.parseMethod(i, e, !1, !1, !1, "ObjectMethod");
        return this.checkGetterSetterParams(E), E;
      }
      if (n || e || this.match(10))
        return a && this.unexpected(), i.kind = "method", i.method = !0, this.parseMethod(i, e, n, !1, !1, "ObjectMethod");
    }
    parseObjectProperty(i, e, n, a) {
      if (i.shorthand = !1, this.eat(14))
        return i.value = n ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(a), this.finishObjectProperty(i);
      if (!i.computed && i.key.type === "Identifier") {
        if (this.checkReservedWord(i.key.name, i.key.loc.start, !0, !1), n)
          i.value = this.parseMaybeDefault(e, this.cloneIdentifier(i.key));
        else if (this.match(29)) {
          const f = this.state.startLoc;
          a != null ? a.shorthandAssignLoc === null && (a.shorthandAssignLoc = f) : this.raise(y.InvalidCoverInitializedName, f), i.value = this.parseMaybeDefault(e, this.cloneIdentifier(i.key));
        } else
          i.value = this.cloneIdentifier(i.key);
        return i.shorthand = !0, this.finishObjectProperty(i);
      }
    }
    finishObjectProperty(i) {
      return this.finishNode(i, "ObjectProperty");
    }
    parseObjPropValue(i, e, n, a, f, E, A) {
      const w = this.parseObjectMethod(i, n, a, f, E) || this.parseObjectProperty(i, e, f, A);
      return w || this.unexpected(), w;
    }
    parsePropertyName(i, e) {
      if (this.eat(0))
        i.computed = !0, i.key = this.parseMaybeAssignAllowIn(), this.expect(3);
      else {
        const {
          type: n,
          value: a
        } = this.state;
        let f;
        if (Pe(n))
          f = this.parseIdentifier(!0);
        else
          switch (n) {
            case 135:
              f = this.parseNumericLiteral(a);
              break;
            case 134:
              f = this.parseStringLiteral(a);
              break;
            case 136:
              f = this.parseBigIntLiteral(a);
              break;
            case 139: {
              const E = this.state.startLoc;
              e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = E) : this.raise(y.UnexpectedPrivateField, E), f = this.parsePrivateName();
              break;
            }
            default:
              if (n === 137) {
                f = this.parseDecimalLiteral(a);
                break;
              }
              this.unexpected();
          }
        i.key = f, n !== 139 && (i.computed = !1);
      }
    }
    initFunction(i, e) {
      i.id = null, i.generator = !1, i.async = e;
    }
    parseMethod(i, e, n, a, f, E, A = !1) {
      this.initFunction(i, n), i.generator = e, this.scope.enter(18 | (A ? 64 : 0) | (f ? 32 : 0)), this.prodParam.enter(or(n, i.generator)), this.parseFunctionParams(i, a);
      const w = this.parseFunctionBodyAndFinish(i, E, !0);
      return this.prodParam.exit(), this.scope.exit(), w;
    }
    parseArrayLike(i, e, n, a) {
      n && this.expectPlugin("recordAndTuple");
      const f = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      const E = this.startNode();
      return this.next(), E.elements = this.parseExprList(i, !n, a, E), this.state.inFSharpPipelineDirectBody = f, this.finishNode(E, n ? "TupleExpression" : "ArrayExpression");
    }
    parseArrowExpression(i, e, n, a) {
      this.scope.enter(6);
      let f = or(n, !1);
      !this.match(5) && this.prodParam.hasIn && (f |= 8), this.prodParam.enter(f), this.initFunction(i, n);
      const E = this.state.maybeInArrowParameters;
      return e && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(i, e, a)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(i, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = E, this.finishNode(i, "ArrowFunctionExpression");
    }
    setArrowFunctionParameters(i, e, n) {
      this.toAssignableList(e, n, !1), i.params = e;
    }
    parseFunctionBodyAndFinish(i, e, n = !1) {
      return this.parseFunctionBody(i, !1, n), this.finishNode(i, e);
    }
    parseFunctionBody(i, e, n = !1) {
      const a = e && !this.match(5);
      if (this.expressionScope.enter(Lo()), a)
        i.body = this.parseMaybeAssign(), this.checkParams(i, !1, e, !1);
      else {
        const f = this.state.strict, E = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | 4), i.body = this.parseBlock(!0, !1, (A) => {
          const w = !this.isSimpleParamList(i.params);
          A && w && this.raise(y.IllegalLanguageModeDirective, (i.kind === "method" || i.kind === "constructor") && i.key ? i.key.loc.end : i);
          const _ = !f && this.state.strict;
          this.checkParams(i, !this.state.strict && !e && !n && !w, e, _), this.state.strict && i.id && this.checkIdentifier(i.id, 65, _);
        }), this.prodParam.exit(), this.state.labels = E;
      }
      this.expressionScope.exit();
    }
    isSimpleParameter(i) {
      return i.type === "Identifier";
    }
    isSimpleParamList(i) {
      for (let e = 0, n = i.length; e < n; e++)
        if (!this.isSimpleParameter(i[e])) return !1;
      return !0;
    }
    checkParams(i, e, n, a = !0) {
      const f = !e && /* @__PURE__ */ new Set(), E = {
        type: "FormalParameters"
      };
      for (const A of i.params)
        this.checkLVal(A, E, 5, f, a);
    }
    parseExprList(i, e, n, a) {
      const f = [];
      let E = !0;
      for (; !this.eat(i); ) {
        if (E)
          E = !1;
        else if (this.expect(12), this.match(i)) {
          a && this.addTrailingCommaExtraToNode(a), this.next();
          break;
        }
        f.push(this.parseExprListItem(e, n));
      }
      return f;
    }
    parseExprListItem(i, e, n) {
      let a;
      if (this.match(12))
        i || this.raise(y.UnexpectedToken, this.state.curPosition(), {
          unexpected: ","
        }), a = null;
      else if (this.match(21)) {
        const f = this.state.startLoc;
        a = this.parseParenItem(this.parseSpread(e), f);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), n || this.raise(y.UnexpectedArgumentPlaceholder, this.state.startLoc);
        const f = this.startNode();
        this.next(), a = this.finishNode(f, "ArgumentPlaceholder");
      } else
        a = this.parseMaybeAssignAllowIn(e, this.parseParenItem);
      return a;
    }
    parseIdentifier(i) {
      const e = this.startNode(), n = this.parseIdentifierName(i);
      return this.createIdentifier(e, n);
    }
    createIdentifier(i, e) {
      return i.name = e, i.loc.identifierName = e, this.finishNode(i, "Identifier");
    }
    parseIdentifierName(i) {
      let e;
      const {
        startLoc: n,
        type: a
      } = this.state;
      Pe(a) ? e = this.state.value : this.unexpected();
      const f = Ci(a);
      return i ? f && this.replaceToken(132) : this.checkReservedWord(e, n, f, !1), this.next(), e;
    }
    checkReservedWord(i, e, n, a) {
      if (i.length > 10 || !af(i))
        return;
      if (n && sf(i)) {
        this.raise(y.UnexpectedKeyword, e, {
          keyword: i
        });
        return;
      }
      if ((this.state.strict ? a ? Ao : Po : Eo)(i, this.inModule)) {
        this.raise(y.UnexpectedReservedWord, e, {
          reservedWord: i
        });
        return;
      } else if (i === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(y.YieldBindingIdentifier, e);
          return;
        }
      } else if (i === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(y.AwaitBindingIdentifier, e);
          return;
        }
        if (this.scope.inStaticBlock) {
          this.raise(y.AwaitBindingIdentifierInStaticBlock, e);
          return;
        }
        this.expressionScope.recordAsyncArrowParametersError(e);
      } else if (i === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(y.ArgumentsInClass, e);
        return;
      }
    }
    recordAwaitIfAllowed() {
      const i = this.prodParam.hasAwait || this.optionFlags & 1 && !this.scope.inFunction;
      return i && !this.scope.inFunction && (this.state.hasTopLevelAwait = !0), i;
    }
    parseAwait(i) {
      const e = this.startNodeAt(i);
      return this.expressionScope.recordParameterInitializerError(y.AwaitExpressionFormalParameter, e), this.eat(55) && this.raise(y.ObsoleteAwaitStar, e), !this.scope.inFunction && !(this.optionFlags & 1) && (this.isAmbiguousPrefixOrIdentifier() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, !0)), this.finishNode(e, "AwaitExpression");
    }
    isAmbiguousPrefixOrIdentifier() {
      if (this.hasPrecedingLineBreak()) return !0;
      const {
        type: i
      } = this.state;
      return i === 53 || i === 10 || i === 0 || nr(i) || i === 102 && !this.state.containsEsc || i === 138 || i === 56 || this.hasPlugin("v8intrinsic") && i === 54;
    }
    parseYield(i) {
      const e = this.startNodeAt(i);
      this.expressionScope.recordParameterInitializerError(y.YieldInParameter, e);
      let n = !1, a = null;
      if (!this.hasPrecedingLineBreak())
        switch (n = this.eat(55), this.state.type) {
          case 13:
          case 140:
          case 8:
          case 11:
          case 3:
          case 9:
          case 14:
          case 12:
            if (!n) break;
          default:
            a = this.parseMaybeAssign();
        }
      return e.delegate = n, e.argument = a, this.finishNode(e, "YieldExpression");
    }
    parseImportCall(i) {
      if (this.next(), i.source = this.parseMaybeAssignAllowIn(), i.options = null, this.eat(12) && !this.match(11) && (i.options = this.parseMaybeAssignAllowIn(), this.eat(12) && !this.match(11))) {
        do
          this.parseMaybeAssignAllowIn();
        while (this.eat(12) && !this.match(11));
        this.raise(y.ImportCallArity, i);
      }
      return this.expect(11), this.finishNode(i, "ImportExpression");
    }
    checkPipelineAtInfixOperator(i, e) {
      this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }]) && i.type === "SequenceExpression" && this.raise(y.PipelineHeadSequenceExpression, e);
    }
    parseSmartPipelineBodyInStyle(i, e) {
      if (this.isSimpleReference(i)) {
        const n = this.startNodeAt(e);
        return n.callee = i, this.finishNode(n, "PipelineBareFunction");
      } else {
        const n = this.startNodeAt(e);
        return this.checkSmartPipeTopicBodyEarlyErrors(e), n.expression = i, this.finishNode(n, "PipelineTopicExpression");
      }
    }
    isSimpleReference(i) {
      switch (i.type) {
        case "MemberExpression":
          return !i.computed && this.isSimpleReference(i.object);
        case "Identifier":
          return !0;
        default:
          return !1;
      }
    }
    checkSmartPipeTopicBodyEarlyErrors(i) {
      if (this.match(19))
        throw this.raise(y.PipelineBodyNoArrow, this.state.startLoc);
      this.topicReferenceWasUsedInCurrentContext() || this.raise(y.PipelineTopicUnused, i);
    }
    withTopicBindingContext(i) {
      const e = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };
      try {
        return i();
      } finally {
        this.state.topicContext = e;
      }
    }
    withSmartMixTopicForbiddingContext(i) {
      if (this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }])) {
        const e = this.state.topicContext;
        this.state.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        };
        try {
          return i();
        } finally {
          this.state.topicContext = e;
        }
      } else
        return i();
    }
    withSoloAwaitPermittingContext(i) {
      const e = this.state.soloAwait;
      this.state.soloAwait = !0;
      try {
        return i();
      } finally {
        this.state.soloAwait = e;
      }
    }
    allowInAnd(i) {
      const e = this.prodParam.currentFlags();
      if (8 & ~e) {
        this.prodParam.enter(e | 8);
        try {
          return i();
        } finally {
          this.prodParam.exit();
        }
      }
      return i();
    }
    disallowInAnd(i) {
      const e = this.prodParam.currentFlags();
      if (8 & e) {
        this.prodParam.enter(e & -9);
        try {
          return i();
        } finally {
          this.prodParam.exit();
        }
      }
      return i();
    }
    registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0;
    }
    topicReferenceIsAllowedInCurrentContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }
    topicReferenceWasUsedInCurrentContext() {
      return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
    }
    parseFSharpPipelineBody(i) {
      const e = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      const n = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !0;
      const a = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, i);
      return this.state.inFSharpPipelineDirectBody = n, a;
    }
    parseModuleExpression() {
      this.expectPlugin("moduleBlocks");
      const i = this.startNode();
      this.next(), this.match(5) || this.unexpected(null, 5);
      const e = this.startNodeAt(this.state.endLoc);
      this.next();
      const n = this.initializeScopes(!0);
      this.enterInitialScopes();
      try {
        i.body = this.parseProgram(e, 8, "module");
      } finally {
        n();
      }
      return this.finishNode(i, "ModuleExpression");
    }
    parsePropertyNamePrefixOperator(i) {
    }
  }
  const Ui = {
    kind: 1
  }, Yf = {
    kind: 2
  }, Qf = /[\uD800-\uDFFF]/u, $i = /in(?:stanceof)?/y;
  function Zf(S, i, e) {
    for (let n = 0; n < S.length; n++) {
      const a = S[n], {
        type: f
      } = a;
      if (typeof f == "number") {
        {
          if (f === 139) {
            const {
              loc: E,
              start: A,
              value: w,
              end: _
            } = a, k = A + 1, B = o(E.start, 1);
            S.splice(n, 1, new gt({
              type: it(27),
              value: "#",
              start: A,
              end: k,
              startLoc: E.start,
              endLoc: B
            }), new gt({
              type: it(132),
              value: w,
              start: k,
              end: _,
              startLoc: B,
              endLoc: E.end
            })), n++;
            continue;
          }
          if (nr(f)) {
            const {
              loc: E,
              start: A,
              value: w,
              end: _
            } = a, k = A + 1, B = o(E.start, 1);
            let q;
            i.charCodeAt(A - e) === 96 ? q = new gt({
              type: it(22),
              value: "`",
              start: A,
              end: k,
              startLoc: E.start,
              endLoc: B
            }) : q = new gt({
              type: it(8),
              value: "}",
              start: A,
              end: k,
              startLoc: E.start,
              endLoc: B
            });
            let H, G, se, be;
            f === 24 ? (G = _ - 1, se = o(E.end, -1), H = w === null ? null : w.slice(1, -1), be = new gt({
              type: it(22),
              value: "`",
              start: G,
              end: _,
              startLoc: se,
              endLoc: E.end
            })) : (G = _ - 2, se = o(E.end, -2), H = w === null ? null : w.slice(1, -2), be = new gt({
              type: it(23),
              value: "${",
              start: G,
              end: _,
              startLoc: se,
              endLoc: E.end
            })), S.splice(n, 1, q, new gt({
              type: it(20),
              value: H,
              start: k,
              end: G,
              startLoc: B,
              endLoc: se
            }), be), n += 2;
            continue;
          }
        }
        a.type = it(f);
      }
    }
    return S;
  }
  class ed extends Jf {
    parseTopLevel(i, e) {
      return i.program = this.parseProgram(e), i.comments = this.comments, this.optionFlags & 256 && (i.tokens = Zf(this.tokens, this.input, this.startIndex)), this.finishNode(i, "File");
    }
    parseProgram(i, e = 140, n = this.options.sourceType) {
      if (i.sourceType = n, i.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(i, !0, !0, e), this.inModule) {
        if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0)
          for (const [f, E] of Array.from(this.scope.undefinedExports))
            this.raise(y.ModuleExportUndefined, E, {
              localName: f
            });
        this.addExtra(i, "topLevelAwait", this.state.hasTopLevelAwait);
      }
      let a;
      return e === 140 ? a = this.finishNode(i, "Program") : a = this.finishNodeAt(i, "Program", o(this.state.startLoc, -1)), a;
    }
    stmtToDirective(i) {
      const e = this.castNodeTo(i, "Directive"), n = this.castNodeTo(i.expression, "DirectiveLiteral"), a = n.value, f = this.input.slice(this.offsetToSourcePos(n.start), this.offsetToSourcePos(n.end)), E = n.value = f.slice(1, -1);
      return this.addExtra(n, "raw", f), this.addExtra(n, "rawValue", E), this.addExtra(n, "expressionValue", a), e.value = n, delete i.expression, e;
    }
    parseInterpreterDirective() {
      if (!this.match(28))
        return null;
      const i = this.startNode();
      return i.value = this.state.value, this.next(), this.finishNode(i, "InterpreterDirective");
    }
    isLet() {
      return this.isContextual(100) ? this.hasFollowingBindingAtom() : !1;
    }
    chStartsBindingIdentifier(i, e) {
      if (nt(i)) {
        if ($i.lastIndex = e, $i.test(this.input)) {
          const n = this.codePointAtPos($i.lastIndex);
          if (!Yt(n) && n !== 92)
            return !1;
        }
        return !0;
      } else return i === 92;
    }
    chStartsBindingPattern(i) {
      return i === 91 || i === 123;
    }
    hasFollowingBindingAtom() {
      const i = this.nextTokenStart(), e = this.codePointAtPos(i);
      return this.chStartsBindingPattern(e) || this.chStartsBindingIdentifier(e, i);
    }
    hasInLineFollowingBindingIdentifierOrBrace() {
      const i = this.nextTokenInLineStart(), e = this.codePointAtPos(i);
      return e === 123 || this.chStartsBindingIdentifier(e, i);
    }
    allowsForUsing() {
      const {
        type: i,
        containsEsc: e,
        end: n
      } = this.lookahead();
      if (i === 102 && !e) {
        const a = this.lookaheadCharCodeSince(n);
        if (a !== 61 && a !== 58 && a !== 59)
          return !1;
      }
      return ie(i) && !this.hasFollowingLineBreak() ? (this.expectPlugin("explicitResourceManagement"), !0) : !1;
    }
    startsAwaitUsing() {
      let i = this.nextTokenInLineStart();
      if (this.isUnparsedContextual(i, "using")) {
        i = this.nextTokenInLineStartSince(i + 5);
        const e = this.codePointAtPos(i);
        if (this.chStartsBindingIdentifier(e, i))
          return this.expectPlugin("explicitResourceManagement"), !0;
      }
      return !1;
    }
    parseModuleItem() {
      return this.parseStatementLike(15);
    }
    parseStatementListItem() {
      return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8));
    }
    parseStatementOrSloppyAnnexBFunctionDeclaration(i = !1) {
      let e = 0;
      return this.options.annexB && !this.state.strict && (e |= 4, i && (e |= 8)), this.parseStatementLike(e);
    }
    parseStatement() {
      return this.parseStatementLike(0);
    }
    parseStatementLike(i) {
      let e = null;
      return this.match(26) && (e = this.parseDecorators(!0)), this.parseStatementContent(i, e);
    }
    parseStatementContent(i, e) {
      const n = this.state.type, a = this.startNode(), f = !!(i & 2), E = !!(i & 4), A = i & 1;
      switch (n) {
        case 60:
          return this.parseBreakContinueStatement(a, !0);
        case 63:
          return this.parseBreakContinueStatement(a, !1);
        case 64:
          return this.parseDebuggerStatement(a);
        case 90:
          return this.parseDoWhileStatement(a);
        case 91:
          return this.parseForStatement(a);
        case 68:
          if (this.lookaheadCharCode() === 46) break;
          return E || this.raise(this.state.strict ? y.StrictFunction : this.options.annexB ? y.SloppyFunctionAnnexB : y.SloppyFunction, this.state.startLoc), this.parseFunctionStatement(a, !1, !f && E);
        case 80:
          return f || this.unexpected(), this.parseClass(this.maybeTakeDecorators(e, a), !0);
        case 69:
          return this.parseIfStatement(a);
        case 70:
          return this.parseReturnStatement(a);
        case 71:
          return this.parseSwitchStatement(a);
        case 72:
          return this.parseThrowStatement(a);
        case 73:
          return this.parseTryStatement(a);
        case 96:
          if (!this.state.containsEsc && this.startsAwaitUsing())
            return this.recordAwaitIfAllowed() ? f || this.raise(y.UnexpectedLexicalDeclaration, a) : this.raise(y.AwaitUsingNotInAsyncContext, a), this.next(), this.parseVarStatement(a, "await using");
          break;
        case 107:
          if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace())
            break;
          return this.expectPlugin("explicitResourceManagement"), !this.scope.inModule && this.scope.inTopLevel ? this.raise(y.UnexpectedUsingDeclaration, this.state.startLoc) : f || this.raise(y.UnexpectedLexicalDeclaration, this.state.startLoc), this.parseVarStatement(a, "using");
        case 100: {
          if (this.state.containsEsc)
            break;
          const k = this.nextTokenStart(), B = this.codePointAtPos(k);
          if (B !== 91 && (!f && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(B, k) && B !== 123))
            break;
        }
        case 75:
          f || this.raise(y.UnexpectedLexicalDeclaration, this.state.startLoc);
        case 74: {
          const k = this.state.value;
          return this.parseVarStatement(a, k);
        }
        case 92:
          return this.parseWhileStatement(a);
        case 76:
          return this.parseWithStatement(a);
        case 5:
          return this.parseBlock();
        case 13:
          return this.parseEmptyStatement(a);
        case 83: {
          const k = this.lookaheadCharCode();
          if (k === 40 || k === 46)
            break;
        }
        case 82: {
          !(this.optionFlags & 8) && !A && this.raise(y.UnexpectedImportExport, this.state.startLoc), this.next();
          let k;
          return n === 83 ? k = this.parseImport(a) : k = this.parseExport(a, e), this.assertModuleNodeAllowed(k), k;
        }
        default:
          if (this.isAsyncFunction())
            return f || this.raise(y.AsyncFunctionInSingleStatementContext, this.state.startLoc), this.next(), this.parseFunctionStatement(a, !0, !f && E);
      }
      const w = this.state.value, _ = this.parseExpression();
      return ie(n) && _.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(a, w, _, i) : this.parseExpressionStatement(a, _, e);
    }
    assertModuleNodeAllowed(i) {
      !(this.optionFlags & 8) && !this.inModule && this.raise(y.ImportOutsideModule, i);
    }
    decoratorsEnabledBeforeExport() {
      return this.hasPlugin("decorators-legacy") ? !0 : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== !1;
    }
    maybeTakeDecorators(i, e, n) {
      if (i) {
        var a;
        (a = e.decorators) != null && a.length ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(y.DecoratorsBeforeAfterExport, e.decorators[0]), e.decorators.unshift(...i)) : e.decorators = i, this.resetStartLocationFromNode(e, i[0]), n && this.resetStartLocationFromNode(n, e);
      }
      return e;
    }
    canHaveLeadingDecorator() {
      return this.match(80);
    }
    parseDecorators(i) {
      const e = [];
      do
        e.push(this.parseDecorator());
      while (this.match(26));
      if (this.match(82))
        i || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(y.DecoratorExportClass, this.state.startLoc);
      else if (!this.canHaveLeadingDecorator())
        throw this.raise(y.UnexpectedLeadingDecorator, this.state.startLoc);
      return e;
    }
    parseDecorator() {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);
      const i = this.startNode();
      if (this.next(), this.hasPlugin("decorators")) {
        const e = this.state.startLoc;
        let n;
        if (this.match(10)) {
          const a = this.state.startLoc;
          this.next(), n = this.parseExpression(), this.expect(11), n = this.wrapParenthesis(a, n);
          const f = this.state.startLoc;
          i.expression = this.parseMaybeDecoratorArguments(n, a), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && i.expression !== n && this.raise(y.DecoratorArgumentsOutsideParentheses, f);
        } else {
          for (n = this.parseIdentifier(!1); this.eat(16); ) {
            const a = this.startNodeAt(e);
            a.object = n, this.match(139) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), a.property = this.parsePrivateName()) : a.property = this.parseIdentifier(!0), a.computed = !1, n = this.finishNode(a, "MemberExpression");
          }
          i.expression = this.parseMaybeDecoratorArguments(n, e);
        }
      } else
        i.expression = this.parseExprSubscripts();
      return this.finishNode(i, "Decorator");
    }
    parseMaybeDecoratorArguments(i, e) {
      if (this.eat(10)) {
        const n = this.startNodeAt(e);
        return n.callee = i, n.arguments = this.parseCallExpressionArguments(11), this.toReferencedList(n.arguments), this.finishNode(n, "CallExpression");
      }
      return i;
    }
    parseBreakContinueStatement(i, e) {
      return this.next(), this.isLineTerminator() ? i.label = null : (i.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(i, e), this.finishNode(i, e ? "BreakStatement" : "ContinueStatement");
    }
    verifyBreakContinue(i, e) {
      let n;
      for (n = 0; n < this.state.labels.length; ++n) {
        const a = this.state.labels[n];
        if ((i.label == null || a.name === i.label.name) && (a.kind != null && (e || a.kind === 1) || i.label && e))
          break;
      }
      if (n === this.state.labels.length) {
        const a = e ? "BreakStatement" : "ContinueStatement";
        this.raise(y.IllegalBreakContinue, i, {
          type: a
        });
      }
    }
    parseDebuggerStatement(i) {
      return this.next(), this.semicolon(), this.finishNode(i, "DebuggerStatement");
    }
    parseHeaderExpression() {
      this.expect(10);
      const i = this.parseExpression();
      return this.expect(11), i;
    }
    parseDoWhileStatement(i) {
      return this.next(), this.state.labels.push(Ui), i.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), i.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(i, "DoWhileStatement");
    }
    parseForStatement(i) {
      this.next(), this.state.labels.push(Ui);
      let e = null;
      if (this.isContextual(96) && this.recordAwaitIfAllowed() && (e = this.state.startLoc, this.next()), this.scope.enter(0), this.expect(10), this.match(13))
        return e !== null && this.unexpected(e), this.parseFor(i, null);
      const n = this.isContextual(100);
      {
        const w = this.isContextual(96) && this.startsAwaitUsing(), _ = w || this.isContextual(107) && this.allowsForUsing(), k = n && this.hasFollowingBindingAtom() || _;
        if (this.match(74) || this.match(75) || k) {
          const B = this.startNode();
          let q;
          w ? (q = "await using", this.recordAwaitIfAllowed() || this.raise(y.AwaitUsingNotInAsyncContext, this.state.startLoc), this.next()) : q = this.state.value, this.next(), this.parseVar(B, !0, q);
          const H = this.finishNode(B, "VariableDeclaration"), G = this.match(58);
          return G && _ && this.raise(y.ForInUsing, H), (G || this.isContextual(102)) && H.declarations.length === 1 ? this.parseForIn(i, H, e) : (e !== null && this.unexpected(e), this.parseFor(i, H));
        }
      }
      const a = this.isContextual(95), f = new cr(), E = this.parseExpression(!0, f), A = this.isContextual(102);
      if (A && (n && this.raise(y.ForOfLet, E), e === null && a && E.type === "Identifier" && this.raise(y.ForOfAsync, E)), A || this.match(58)) {
        this.checkDestructuringPrivate(f), this.toAssignable(E, !0);
        const w = A ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(E, {
          type: w
        }), this.parseForIn(i, E, e);
      } else
        this.checkExpressionErrors(f, !0);
      return e !== null && this.unexpected(e), this.parseFor(i, E);
    }
    parseFunctionStatement(i, e, n) {
      return this.next(), this.parseFunction(i, 1 | (n ? 2 : 0) | (e ? 8 : 0));
    }
    parseIfStatement(i) {
      return this.next(), i.test = this.parseHeaderExpression(), i.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), i.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(i, "IfStatement");
    }
    parseReturnStatement(i) {
      return !this.prodParam.hasReturn && !(this.optionFlags & 2) && this.raise(y.IllegalReturn, this.state.startLoc), this.next(), this.isLineTerminator() ? i.argument = null : (i.argument = this.parseExpression(), this.semicolon()), this.finishNode(i, "ReturnStatement");
    }
    parseSwitchStatement(i) {
      this.next(), i.discriminant = this.parseHeaderExpression();
      const e = i.cases = [];
      this.expect(5), this.state.labels.push(Yf), this.scope.enter(0);
      let n;
      for (let a; !this.match(8); )
        if (this.match(61) || this.match(65)) {
          const f = this.match(61);
          n && this.finishNode(n, "SwitchCase"), e.push(n = this.startNode()), n.consequent = [], this.next(), f ? n.test = this.parseExpression() : (a && this.raise(y.MultipleDefaultsInSwitch, this.state.lastTokStartLoc), a = !0, n.test = null), this.expect(14);
        } else
          n ? n.consequent.push(this.parseStatementListItem()) : this.unexpected();
      return this.scope.exit(), n && this.finishNode(n, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(i, "SwitchStatement");
    }
    parseThrowStatement(i) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(y.NewlineAfterThrow, this.state.lastTokEndLoc), i.argument = this.parseExpression(), this.semicolon(), this.finishNode(i, "ThrowStatement");
    }
    parseCatchClauseParam() {
      const i = this.parseBindingAtom();
      return this.scope.enter(this.options.annexB && i.type === "Identifier" ? 8 : 0), this.checkLVal(i, {
        type: "CatchClause"
      }, 9), i;
    }
    parseTryStatement(i) {
      if (this.next(), i.block = this.parseBlock(), i.handler = null, this.match(62)) {
        const e = this.startNode();
        this.next(), this.match(10) ? (this.expect(10), e.param = this.parseCatchClauseParam(), this.expect(11)) : (e.param = null, this.scope.enter(0)), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(!1, !1)), this.scope.exit(), i.handler = this.finishNode(e, "CatchClause");
      }
      return i.finalizer = this.eat(67) ? this.parseBlock() : null, !i.handler && !i.finalizer && this.raise(y.NoCatchOrFinally, i), this.finishNode(i, "TryStatement");
    }
    parseVarStatement(i, e, n = !1) {
      return this.next(), this.parseVar(i, !1, e, n), this.semicolon(), this.finishNode(i, "VariableDeclaration");
    }
    parseWhileStatement(i) {
      return this.next(), i.test = this.parseHeaderExpression(), this.state.labels.push(Ui), i.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(i, "WhileStatement");
    }
    parseWithStatement(i) {
      return this.state.strict && this.raise(y.StrictWith, this.state.startLoc), this.next(), i.object = this.parseHeaderExpression(), i.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(i, "WithStatement");
    }
    parseEmptyStatement(i) {
      return this.next(), this.finishNode(i, "EmptyStatement");
    }
    parseLabeledStatement(i, e, n, a) {
      for (const E of this.state.labels)
        E.name === e && this.raise(y.LabelRedeclaration, n, {
          labelName: e
        });
      const f = qp(this.state.type) ? 1 : this.match(71) ? 2 : null;
      for (let E = this.state.labels.length - 1; E >= 0; E--) {
        const A = this.state.labels[E];
        if (A.statementStart === i.start)
          A.statementStart = this.sourceToOffsetPos(this.state.start), A.kind = f;
        else
          break;
      }
      return this.state.labels.push({
        name: e,
        kind: f,
        statementStart: this.sourceToOffsetPos(this.state.start)
      }), i.body = a & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement(), this.state.labels.pop(), i.label = n, this.finishNode(i, "LabeledStatement");
    }
    parseExpressionStatement(i, e, n) {
      return i.expression = e, this.semicolon(), this.finishNode(i, "ExpressionStatement");
    }
    parseBlock(i = !1, e = !0, n) {
      const a = this.startNode();
      return i && this.state.strictErrors.clear(), this.expect(5), e && this.scope.enter(0), this.parseBlockBody(a, i, !1, 8, n), e && this.scope.exit(), this.finishNode(a, "BlockStatement");
    }
    isValidDirective(i) {
      return i.type === "ExpressionStatement" && i.expression.type === "StringLiteral" && !i.expression.extra.parenthesized;
    }
    parseBlockBody(i, e, n, a, f) {
      const E = i.body = [], A = i.directives = [];
      this.parseBlockOrModuleBlockBody(E, e ? A : void 0, n, a, f);
    }
    parseBlockOrModuleBlockBody(i, e, n, a, f) {
      const E = this.state.strict;
      let A = !1, w = !1;
      for (; !this.match(a); ) {
        const _ = n ? this.parseModuleItem() : this.parseStatementListItem();
        if (e && !w) {
          if (this.isValidDirective(_)) {
            const k = this.stmtToDirective(_);
            e.push(k), !A && k.value.value === "use strict" && (A = !0, this.setStrict(!0));
            continue;
          }
          w = !0, this.state.strictErrors.clear();
        }
        i.push(_);
      }
      f == null || f.call(this, A), E || this.setStrict(!1), this.next();
    }
    parseFor(i, e) {
      return i.init = e, this.semicolon(!1), i.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), i.update = this.match(11) ? null : this.parseExpression(), this.expect(11), i.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(i, "ForStatement");
    }
    parseForIn(i, e, n) {
      const a = this.match(58);
      return this.next(), a ? n !== null && this.unexpected(n) : i.await = n !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!a || !this.options.annexB || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(y.ForInOfLoopInitializer, e, {
        type: a ? "ForInStatement" : "ForOfStatement"
      }), e.type === "AssignmentPattern" && this.raise(y.InvalidLhs, e, {
        ancestor: {
          type: "ForStatement"
        }
      }), i.left = e, i.right = a ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), i.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(i, a ? "ForInStatement" : "ForOfStatement");
    }
    parseVar(i, e, n, a = !1) {
      const f = i.declarations = [];
      for (i.kind = n; ; ) {
        const E = this.startNode();
        if (this.parseVarId(E, n), E.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, E.init === null && !a && (E.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(102))) ? this.raise(y.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: "destructuring"
        }) : (n === "const" || n === "using" || n === "await using") && !(this.match(58) || this.isContextual(102)) && this.raise(y.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: n
        })), f.push(this.finishNode(E, "VariableDeclarator")), !this.eat(12)) break;
      }
      return i;
    }
    parseVarId(i, e) {
      const n = this.parseBindingAtom();
      (e === "using" || e === "await using") && (n.type === "ArrayPattern" || n.type === "ObjectPattern") && this.raise(y.UsingDeclarationHasBindingPattern, n.loc.start), this.checkLVal(n, {
        type: "VariableDeclarator"
      }, e === "var" ? 5 : 8201), i.id = n;
    }
    parseAsyncFunctionExpression(i) {
      return this.parseFunction(i, 8);
    }
    parseFunction(i, e = 0) {
      const n = e & 2, a = !!(e & 1), f = a && !(e & 4), E = !!(e & 8);
      this.initFunction(i, E), this.match(55) && (n && this.raise(y.GeneratorInSingleStatementContext, this.state.startLoc), this.next(), i.generator = !0), a && (i.id = this.parseFunctionId(f));
      const A = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = !1, this.scope.enter(2), this.prodParam.enter(or(E, i.generator)), a || (i.id = this.parseFunctionId()), this.parseFunctionParams(i, !1), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(i, a ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), a && !n && this.registerFunctionStatementId(i), this.state.maybeInArrowParameters = A, i;
    }
    parseFunctionId(i) {
      return i || ie(this.state.type) ? this.parseIdentifier() : null;
    }
    parseFunctionParams(i, e) {
      this.expect(10), this.expressionScope.enter(Lf()), i.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0)), this.expressionScope.exit();
    }
    registerFunctionStatementId(i) {
      i.id && this.scope.declareName(i.id.name, !this.options.annexB || this.state.strict || i.generator || i.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, i.id.loc.start);
    }
    parseClass(i, e, n) {
      this.next();
      const a = this.state.strict;
      return this.state.strict = !0, this.parseClassId(i, e, n), this.parseClassSuper(i), i.body = this.parseClassBody(!!i.superClass, a), this.finishNode(i, e ? "ClassDeclaration" : "ClassExpression");
    }
    isClassProperty() {
      return this.match(29) || this.match(13) || this.match(8);
    }
    isClassMethod() {
      return this.match(10);
    }
    nameIsConstructor(i) {
      return i.type === "Identifier" && i.name === "constructor" || i.type === "StringLiteral" && i.value === "constructor";
    }
    isNonstaticConstructor(i) {
      return !i.computed && !i.static && this.nameIsConstructor(i.key);
    }
    parseClassBody(i, e) {
      this.classScope.enter();
      const n = {
        hadConstructor: !1,
        hadSuperClass: i
      };
      let a = [];
      const f = this.startNode();
      if (f.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
        for (; !this.match(8); ) {
          if (this.eat(13)) {
            if (a.length > 0)
              throw this.raise(y.DecoratorSemicolon, this.state.lastTokEndLoc);
            continue;
          }
          if (this.match(26)) {
            a.push(this.parseDecorator());
            continue;
          }
          const E = this.startNode();
          a.length && (E.decorators = a, this.resetStartLocationFromNode(E, a[0]), a = []), this.parseClassMember(f, E, n), E.kind === "constructor" && E.decorators && E.decorators.length > 0 && this.raise(y.DecoratorConstructor, E);
        }
      }), this.state.strict = e, this.next(), a.length)
        throw this.raise(y.TrailingDecorator, this.state.startLoc);
      return this.classScope.exit(), this.finishNode(f, "ClassBody");
    }
    parseClassMemberFromModifier(i, e) {
      const n = this.parseIdentifier(!0);
      if (this.isClassMethod()) {
        const a = e;
        return a.kind = "method", a.computed = !1, a.key = n, a.static = !1, this.pushClassMethod(i, a, !1, !1, !1, !1), !0;
      } else if (this.isClassProperty()) {
        const a = e;
        return a.computed = !1, a.key = n, a.static = !1, i.body.push(this.parseClassProperty(a)), !0;
      }
      return this.resetPreviousNodeTrailingComments(n), !1;
    }
    parseClassMember(i, e, n) {
      const a = this.isContextual(106);
      if (a) {
        if (this.parseClassMemberFromModifier(i, e))
          return;
        if (this.eat(5)) {
          this.parseClassStaticBlock(i, e);
          return;
        }
      }
      this.parseClassMemberWithIsStatic(i, e, n, a);
    }
    parseClassMemberWithIsStatic(i, e, n, a) {
      const f = e, E = e, A = e, w = e, _ = e, k = f, B = f;
      if (e.static = a, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
        k.kind = "method";
        const re = this.match(139);
        if (this.parseClassElementName(k), re) {
          this.pushClassPrivateMethod(i, E, !0, !1);
          return;
        }
        this.isNonstaticConstructor(f) && this.raise(y.ConstructorIsGenerator, f.key), this.pushClassMethod(i, f, !0, !1, !1, !1);
        return;
      }
      const q = !this.state.containsEsc && ie(this.state.type), H = this.parseClassElementName(e), G = q ? H.name : null, se = this.isPrivateName(H), be = this.state.startLoc;
      if (this.parsePostMemberNameModifiers(B), this.isClassMethod()) {
        if (k.kind = "method", se) {
          this.pushClassPrivateMethod(i, E, !1, !1);
          return;
        }
        const re = this.isNonstaticConstructor(f);
        let ce = !1;
        re && (f.kind = "constructor", n.hadConstructor && !this.hasPlugin("typescript") && this.raise(y.DuplicateConstructor, H), re && this.hasPlugin("typescript") && e.override && this.raise(y.OverrideOnConstructor, H), n.hadConstructor = !0, ce = n.hadSuperClass), this.pushClassMethod(i, f, !1, !1, re, ce);
      } else if (this.isClassProperty())
        se ? this.pushClassPrivateProperty(i, w) : this.pushClassProperty(i, A);
      else if (G === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(H);
        const re = this.eat(55);
        B.optional && this.unexpected(be), k.kind = "method";
        const ce = this.match(139);
        this.parseClassElementName(k), this.parsePostMemberNameModifiers(B), ce ? this.pushClassPrivateMethod(i, E, re, !0) : (this.isNonstaticConstructor(f) && this.raise(y.ConstructorIsAsync, f.key), this.pushClassMethod(i, f, re, !0, !1, !1));
      } else if ((G === "get" || G === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(H), k.kind = G;
        const re = this.match(139);
        this.parseClassElementName(f), re ? this.pushClassPrivateMethod(i, E, !1, !1) : (this.isNonstaticConstructor(f) && this.raise(y.ConstructorIsAccessor, f.key), this.pushClassMethod(i, f, !1, !1, !1, !1)), this.checkGetterSetterParams(f);
      } else if (G === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(H);
        const re = this.match(139);
        this.parseClassElementName(A), this.pushClassAccessorProperty(i, _, re);
      } else this.isLineTerminator() ? se ? this.pushClassPrivateProperty(i, w) : this.pushClassProperty(i, A) : this.unexpected();
    }
    parseClassElementName(i) {
      const {
        type: e,
        value: n
      } = this.state;
      if ((e === 132 || e === 134) && i.static && n === "prototype" && this.raise(y.StaticPrototype, this.state.startLoc), e === 139) {
        n === "constructor" && this.raise(y.ConstructorClassPrivateField, this.state.startLoc);
        const a = this.parsePrivateName();
        return i.key = a, a;
      }
      return this.parsePropertyName(i), i.key;
    }
    parseClassStaticBlock(i, e) {
      var n;
      this.scope.enter(208);
      const a = this.state.labels;
      this.state.labels = [], this.prodParam.enter(0);
      const f = e.body = [];
      this.parseBlockOrModuleBlockBody(f, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = a, i.body.push(this.finishNode(e, "StaticBlock")), (n = e.decorators) != null && n.length && this.raise(y.DecoratorStaticBlock, e);
    }
    pushClassProperty(i, e) {
      !e.computed && this.nameIsConstructor(e.key) && this.raise(y.ConstructorClassField, e.key), i.body.push(this.parseClassProperty(e));
    }
    pushClassPrivateProperty(i, e) {
      const n = this.parseClassPrivateProperty(e);
      i.body.push(n), this.classScope.declarePrivateName(this.getPrivateNameSV(n.key), 0, n.key.loc.start);
    }
    pushClassAccessorProperty(i, e, n) {
      !n && !e.computed && this.nameIsConstructor(e.key) && this.raise(y.ConstructorClassField, e.key);
      const a = this.parseClassAccessorProperty(e);
      i.body.push(a), n && this.classScope.declarePrivateName(this.getPrivateNameSV(a.key), 0, a.key.loc.start);
    }
    pushClassMethod(i, e, n, a, f, E) {
      i.body.push(this.parseMethod(e, n, a, f, E, "ClassMethod", !0));
    }
    pushClassPrivateMethod(i, e, n, a) {
      const f = this.parseMethod(e, n, a, !1, !1, "ClassPrivateMethod", !0);
      i.body.push(f);
      const E = f.kind === "get" ? f.static ? 6 : 2 : f.kind === "set" ? f.static ? 5 : 1 : 0;
      this.declareClassPrivateMethodInScope(f, E);
    }
    declareClassPrivateMethodInScope(i, e) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), e, i.key.loc.start);
    }
    parsePostMemberNameModifiers(i) {
    }
    parseClassPrivateProperty(i) {
      return this.parseInitializer(i), this.semicolon(), this.finishNode(i, "ClassPrivateProperty");
    }
    parseClassProperty(i) {
      return this.parseInitializer(i), this.semicolon(), this.finishNode(i, "ClassProperty");
    }
    parseClassAccessorProperty(i) {
      return this.parseInitializer(i), this.semicolon(), this.finishNode(i, "ClassAccessorProperty");
    }
    parseInitializer(i) {
      this.scope.enter(80), this.expressionScope.enter(Lo()), this.prodParam.enter(0), i.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }
    parseClassId(i, e, n, a = 8331) {
      if (ie(this.state.type))
        i.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(i.id, a);
      else if (n || !e)
        i.id = null;
      else
        throw this.raise(y.MissingClassName, this.state.startLoc);
    }
    parseClassSuper(i) {
      i.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }
    parseExport(i, e) {
      const n = this.parseMaybeImportPhase(i, !0), a = this.maybeParseExportDefaultSpecifier(i, n), f = !a || this.eat(12), E = f && this.eatExportStar(i), A = E && this.maybeParseExportNamespaceSpecifier(i), w = f && (!A || this.eat(12)), _ = a || E;
      if (E && !A) {
        if (a && this.unexpected(), e)
          throw this.raise(y.UnsupportedDecoratorExport, i);
        return this.parseExportFrom(i, !0), this.sawUnambiguousESM = !0, this.finishNode(i, "ExportAllDeclaration");
      }
      const k = this.maybeParseExportNamedSpecifiers(i);
      a && f && !E && !k && this.unexpected(null, 5), A && w && this.unexpected(null, 98);
      let B;
      if (_ || k) {
        if (B = !1, e)
          throw this.raise(y.UnsupportedDecoratorExport, i);
        this.parseExportFrom(i, _);
      } else
        B = this.maybeParseExportDeclaration(i);
      if (_ || k || B) {
        var q;
        const H = i;
        if (this.checkExport(H, !0, !1, !!H.source), ((q = H.declaration) == null ? void 0 : q.type) === "ClassDeclaration")
          this.maybeTakeDecorators(e, H.declaration, H);
        else if (e)
          throw this.raise(y.UnsupportedDecoratorExport, i);
        return this.sawUnambiguousESM = !0, this.finishNode(H, "ExportNamedDeclaration");
      }
      if (this.eat(65)) {
        const H = i, G = this.parseExportDefaultExpression();
        if (H.declaration = G, G.type === "ClassDeclaration")
          this.maybeTakeDecorators(e, G, H);
        else if (e)
          throw this.raise(y.UnsupportedDecoratorExport, i);
        return this.checkExport(H, !0, !0), this.sawUnambiguousESM = !0, this.finishNode(H, "ExportDefaultDeclaration");
      }
      this.unexpected(null, 5);
    }
    eatExportStar(i) {
      return this.eat(55);
    }
    maybeParseExportDefaultSpecifier(i, e) {
      if (e || this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom", e == null ? void 0 : e.loc.start);
        const n = e || this.parseIdentifier(!0), a = this.startNodeAtNode(n);
        return a.exported = n, i.specifiers = [this.finishNode(a, "ExportDefaultSpecifier")], !0;
      }
      return !1;
    }
    maybeParseExportNamespaceSpecifier(i) {
      if (this.isContextual(93)) {
        var e, n;
        (n = (e = i).specifiers) != null || (e.specifiers = []);
        const a = this.startNodeAt(this.state.lastTokStartLoc);
        return this.next(), a.exported = this.parseModuleExportName(), i.specifiers.push(this.finishNode(a, "ExportNamespaceSpecifier")), !0;
      }
      return !1;
    }
    maybeParseExportNamedSpecifiers(i) {
      if (this.match(5)) {
        const e = i;
        e.specifiers || (e.specifiers = []);
        const n = e.exportKind === "type";
        return e.specifiers.push(...this.parseExportSpecifiers(n)), e.source = null, this.hasPlugin("importAssertions") ? e.assertions = [] : e.attributes = [], e.declaration = null, !0;
      }
      return !1;
    }
    maybeParseExportDeclaration(i) {
      return this.shouldParseExportDeclaration() ? (i.specifiers = [], i.source = null, this.hasPlugin("importAssertions") ? i.assertions = [] : i.attributes = [], i.declaration = this.parseExportDeclaration(i), !0) : !1;
    }
    isAsyncFunction() {
      if (!this.isContextual(95)) return !1;
      const i = this.nextTokenInLineStart();
      return this.isUnparsedContextual(i, "function");
    }
    parseExportDefaultExpression() {
      const i = this.startNode();
      if (this.match(68))
        return this.next(), this.parseFunction(i, 5);
      if (this.isAsyncFunction())
        return this.next(), this.next(), this.parseFunction(i, 13);
      if (this.match(80))
        return this.parseClass(i, !0, !0);
      if (this.match(26))
        return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(y.DecoratorBeforeExport, this.state.startLoc), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
      if (this.match(75) || this.match(74) || this.isLet())
        throw this.raise(y.UnsupportedDefaultExport, this.state.startLoc);
      const e = this.parseMaybeAssignAllowIn();
      return this.semicolon(), e;
    }
    parseExportDeclaration(i) {
      return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem();
    }
    isExportDefaultSpecifier() {
      const {
        type: i
      } = this.state;
      if (ie(i)) {
        if (i === 95 && !this.state.containsEsc || i === 100)
          return !1;
        if ((i === 130 || i === 129) && !this.state.containsEsc) {
          const {
            type: a
          } = this.lookahead();
          if (ie(a) && a !== 98 || a === 5)
            return this.expectOnePlugin(["flow", "typescript"]), !1;
        }
      } else if (!this.match(65))
        return !1;
      const e = this.nextTokenStart(), n = this.isUnparsedContextual(e, "from");
      if (this.input.charCodeAt(e) === 44 || ie(this.state.type) && n)
        return !0;
      if (this.match(65) && n) {
        const a = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
        return a === 34 || a === 39;
      }
      return !1;
    }
    parseExportFrom(i, e) {
      this.eatContextual(98) ? (i.source = this.parseImportSource(), this.checkExport(i), this.maybeParseImportAttributes(i), this.checkJSONModuleImport(i)) : e && this.unexpected(), this.semicolon();
    }
    shouldParseExportDeclaration() {
      const {
        type: i
      } = this.state;
      return i === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(y.DecoratorBeforeExport, this.state.startLoc), !0) : this.isContextual(107) ? (this.raise(y.UsingDeclarationExport, this.state.startLoc), !0) : this.isContextual(96) && this.startsAwaitUsing() ? (this.raise(y.UsingDeclarationExport, this.state.startLoc), !0) : i === 74 || i === 75 || i === 68 || i === 80 || this.isLet() || this.isAsyncFunction();
    }
    checkExport(i, e, n, a) {
      if (e) {
        var f;
        if (n) {
          if (this.checkDuplicateExports(i, "default"), this.hasPlugin("exportDefaultFrom")) {
            var E;
            const A = i.declaration;
            A.type === "Identifier" && A.name === "from" && A.end - A.start === 4 && !((E = A.extra) != null && E.parenthesized) && this.raise(y.ExportDefaultFromAsIdentifier, A);
          }
        } else if ((f = i.specifiers) != null && f.length)
          for (const A of i.specifiers) {
            const {
              exported: w
            } = A, _ = w.type === "Identifier" ? w.name : w.value;
            if (this.checkDuplicateExports(A, _), !a && A.local) {
              const {
                local: k
              } = A;
              k.type !== "Identifier" ? this.raise(y.ExportBindingIsString, A, {
                localName: k.value,
                exportName: _
              }) : (this.checkReservedWord(k.name, k.loc.start, !0, !1), this.scope.checkLocalExport(k));
            }
          }
        else if (i.declaration) {
          const A = i.declaration;
          if (A.type === "FunctionDeclaration" || A.type === "ClassDeclaration") {
            const {
              id: w
            } = A;
            if (!w) throw new Error("Assertion failure");
            this.checkDuplicateExports(i, w.name);
          } else if (A.type === "VariableDeclaration")
            for (const w of A.declarations)
              this.checkDeclaration(w.id);
        }
      }
    }
    checkDeclaration(i) {
      if (i.type === "Identifier")
        this.checkDuplicateExports(i, i.name);
      else if (i.type === "ObjectPattern")
        for (const e of i.properties)
          this.checkDeclaration(e);
      else if (i.type === "ArrayPattern")
        for (const e of i.elements)
          e && this.checkDeclaration(e);
      else i.type === "ObjectProperty" ? this.checkDeclaration(i.value) : i.type === "RestElement" ? this.checkDeclaration(i.argument) : i.type === "AssignmentPattern" && this.checkDeclaration(i.left);
    }
    checkDuplicateExports(i, e) {
      this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(y.DuplicateDefaultExport, i) : this.raise(y.DuplicateExport, i, {
        exportName: e
      })), this.exportedIdentifiers.add(e);
    }
    parseExportSpecifiers(i) {
      const e = [];
      let n = !0;
      for (this.expect(5); !this.eat(8); ) {
        if (n)
          n = !1;
        else if (this.expect(12), this.eat(8)) break;
        const a = this.isContextual(130), f = this.match(134), E = this.startNode();
        E.local = this.parseModuleExportName(), e.push(this.parseExportSpecifier(E, f, i, a));
      }
      return e;
    }
    parseExportSpecifier(i, e, n, a) {
      return this.eatContextual(93) ? i.exported = this.parseModuleExportName() : e ? i.exported = this.cloneStringLiteral(i.local) : i.exported || (i.exported = this.cloneIdentifier(i.local)), this.finishNode(i, "ExportSpecifier");
    }
    parseModuleExportName() {
      if (this.match(134)) {
        const i = this.parseStringLiteral(this.state.value), e = Qf.exec(i.value);
        return e && this.raise(y.ModuleExportNameHasLoneSurrogate, i, {
          surrogateCharCode: e[0].charCodeAt(0)
        }), i;
      }
      return this.parseIdentifier(!0);
    }
    isJSONModuleImport(i) {
      return i.assertions != null ? i.assertions.some(({
        key: e,
        value: n
      }) => n.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type")) : !1;
    }
    checkImportReflection(i) {
      const {
        specifiers: e
      } = i, n = e.length === 1 ? e[0].type : null;
      if (i.phase === "source")
        n !== "ImportDefaultSpecifier" && this.raise(y.SourcePhaseImportRequiresDefault, e[0].loc.start);
      else if (i.phase === "defer")
        n !== "ImportNamespaceSpecifier" && this.raise(y.DeferImportRequiresNamespace, e[0].loc.start);
      else if (i.module) {
        var a;
        n !== "ImportDefaultSpecifier" && this.raise(y.ImportReflectionNotBinding, e[0].loc.start), ((a = i.assertions) == null ? void 0 : a.length) > 0 && this.raise(y.ImportReflectionHasAssertion, e[0].loc.start);
      }
    }
    checkJSONModuleImport(i) {
      if (this.isJSONModuleImport(i) && i.type !== "ExportAllDeclaration") {
        const {
          specifiers: e
        } = i;
        if (e != null) {
          const n = e.find((a) => {
            let f;
            if (a.type === "ExportSpecifier" ? f = a.local : a.type === "ImportSpecifier" && (f = a.imported), f !== void 0)
              return f.type === "Identifier" ? f.name !== "default" : f.value !== "default";
          });
          n !== void 0 && this.raise(y.ImportJSONBindingNotDefault, n.loc.start);
        }
      }
    }
    isPotentialImportPhase(i) {
      return i ? !1 : this.isContextual(105) || this.isContextual(97) || this.isContextual(127);
    }
    applyImportPhase(i, e, n, a) {
      e || (n === "module" ? (this.expectPlugin("importReflection", a), i.module = !0) : this.hasPlugin("importReflection") && (i.module = !1), n === "source" ? (this.expectPlugin("sourcePhaseImports", a), i.phase = "source") : n === "defer" ? (this.expectPlugin("deferredImportEvaluation", a), i.phase = "defer") : this.hasPlugin("sourcePhaseImports") && (i.phase = null));
    }
    parseMaybeImportPhase(i, e) {
      if (!this.isPotentialImportPhase(e))
        return this.applyImportPhase(i, e, null), null;
      const n = this.parseIdentifier(!0), {
        type: a
      } = this.state;
      return (Pe(a) ? a !== 98 || this.lookaheadCharCode() === 102 : a !== 12) ? (this.resetPreviousIdentifierLeadingComments(n), this.applyImportPhase(i, e, n.name, n.loc.start), null) : (this.applyImportPhase(i, e, null), n);
    }
    isPrecedingIdImportPhase(i) {
      const {
        type: e
      } = this.state;
      return ie(e) ? e !== 98 || this.lookaheadCharCode() === 102 : e !== 12;
    }
    parseImport(i) {
      return this.match(134) ? this.parseImportSourceAndAttributes(i) : this.parseImportSpecifiersAndAfter(i, this.parseMaybeImportPhase(i, !1));
    }
    parseImportSpecifiersAndAfter(i, e) {
      i.specifiers = [];
      const a = !this.maybeParseDefaultImportSpecifier(i, e) || this.eat(12), f = a && this.maybeParseStarImportSpecifier(i);
      return a && !f && this.parseNamedImportSpecifiers(i), this.expectContextual(98), this.parseImportSourceAndAttributes(i);
    }
    parseImportSourceAndAttributes(i) {
      var e;
      return (e = i.specifiers) != null || (i.specifiers = []), i.source = this.parseImportSource(), this.maybeParseImportAttributes(i), this.checkImportReflection(i), this.checkJSONModuleImport(i), this.semicolon(), this.sawUnambiguousESM = !0, this.finishNode(i, "ImportDeclaration");
    }
    parseImportSource() {
      return this.match(134) || this.unexpected(), this.parseExprAtom();
    }
    parseImportSpecifierLocal(i, e, n) {
      e.local = this.parseIdentifier(), i.specifiers.push(this.finishImportSpecifier(e, n));
    }
    finishImportSpecifier(i, e, n = 8201) {
      return this.checkLVal(i.local, {
        type: e
      }, n), this.finishNode(i, e);
    }
    parseImportAttributes() {
      this.expect(5);
      const i = [], e = /* @__PURE__ */ new Set();
      do {
        if (this.match(8))
          break;
        const n = this.startNode(), a = this.state.value;
        if (e.has(a) && this.raise(y.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
          key: a
        }), e.add(a), this.match(134) ? n.key = this.parseStringLiteral(a) : n.key = this.parseIdentifier(!0), this.expect(14), !this.match(134))
          throw this.raise(y.ModuleAttributeInvalidValue, this.state.startLoc);
        n.value = this.parseStringLiteral(this.state.value), i.push(this.finishNode(n, "ImportAttribute"));
      } while (this.eat(12));
      return this.expect(8), i;
    }
    parseModuleAttributes() {
      const i = [], e = /* @__PURE__ */ new Set();
      do {
        const n = this.startNode();
        if (n.key = this.parseIdentifier(!0), n.key.name !== "type" && this.raise(y.ModuleAttributeDifferentFromType, n.key), e.has(n.key.name) && this.raise(y.ModuleAttributesWithDuplicateKeys, n.key, {
          key: n.key.name
        }), e.add(n.key.name), this.expect(14), !this.match(134))
          throw this.raise(y.ModuleAttributeInvalidValue, this.state.startLoc);
        n.value = this.parseStringLiteral(this.state.value), i.push(this.finishNode(n, "ImportAttribute"));
      } while (this.eat(12));
      return i;
    }
    maybeParseImportAttributes(i) {
      let e;
      var n = !1;
      if (this.match(76)) {
        if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40)
          return;
        this.next(), this.hasPlugin("moduleAttributes") ? (e = this.parseModuleAttributes(), this.addExtra(i, "deprecatedWithLegacySyntax", !0)) : e = this.parseImportAttributes(), n = !0;
      } else this.isContextual(94) && !this.hasPrecedingLineBreak() ? (!this.hasPlugin("deprecatedImportAssert") && !this.hasPlugin("importAssertions") && this.raise(y.ImportAttributesUseAssert, this.state.startLoc), this.hasPlugin("importAssertions") || this.addExtra(i, "deprecatedAssertSyntax", !0), this.next(), e = this.parseImportAttributes()) : e = [];
      !n && this.hasPlugin("importAssertions") ? i.assertions = e : i.attributes = e;
    }
    maybeParseDefaultImportSpecifier(i, e) {
      if (e) {
        const n = this.startNodeAtNode(e);
        return n.local = e, i.specifiers.push(this.finishImportSpecifier(n, "ImportDefaultSpecifier")), !0;
      } else if (Pe(this.state.type))
        return this.parseImportSpecifierLocal(i, this.startNode(), "ImportDefaultSpecifier"), !0;
      return !1;
    }
    maybeParseStarImportSpecifier(i) {
      if (this.match(55)) {
        const e = this.startNode();
        return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(i, e, "ImportNamespaceSpecifier"), !0;
      }
      return !1;
    }
    parseNamedImportSpecifiers(i) {
      let e = !0;
      for (this.expect(5); !this.eat(8); ) {
        if (e)
          e = !1;
        else {
          if (this.eat(14))
            throw this.raise(y.DestructureNamedImport, this.state.startLoc);
          if (this.expect(12), this.eat(8)) break;
        }
        const n = this.startNode(), a = this.match(134), f = this.isContextual(130);
        n.imported = this.parseModuleExportName();
        const E = this.parseImportSpecifier(n, a, i.importKind === "type" || i.importKind === "typeof", f, void 0);
        i.specifiers.push(E);
      }
    }
    parseImportSpecifier(i, e, n, a, f) {
      if (this.eatContextual(93))
        i.local = this.parseIdentifier();
      else {
        const {
          imported: E
        } = i;
        if (e)
          throw this.raise(y.ImportBindingIsString, i, {
            importName: E.value
          });
        this.checkReservedWord(E.name, i.loc.start, !0, !0), i.local || (i.local = this.cloneIdentifier(E));
      }
      return this.finishImportSpecifier(i, "ImportSpecifier", f);
    }
    isThisParam(i) {
      return i.type === "Identifier" && i.name === "this";
    }
  }
  class qo extends ed {
    constructor(i, e, n) {
      i = N(i), super(i, e), this.options = i, this.initializeScopes(), this.plugins = n, this.filename = i.sourceFilename, this.startIndex = i.startIndex;
      let a = 0;
      i.allowAwaitOutsideFunction && (a |= 1), i.allowReturnOutsideFunction && (a |= 2), i.allowImportExportEverywhere && (a |= 8), i.allowSuperOutsideMethod && (a |= 16), i.allowUndeclaredExports && (a |= 64), i.allowNewTargetOutsideFunction && (a |= 4), i.allowYieldOutsideFunction && (a |= 32), i.ranges && (a |= 128), i.tokens && (a |= 256), i.createImportExpressions && (a |= 512), i.createParenthesizedExpressions && (a |= 1024), i.errorRecovery && (a |= 2048), i.attachComment && (a |= 4096), i.annexB && (a |= 8192), this.optionFlags = a;
    }
    getScopeHandler() {
      return Li;
    }
    parse() {
      this.enterInitialScopes();
      const i = this.startNode(), e = this.startNode();
      return this.nextToken(), i.errors = null, this.parseTopLevel(i, e), i.errors = this.state.errors, i.comments.length = this.state.commentsLen, i;
    }
  }
  function td(S, i) {
    var e;
    if (((e = i) == null ? void 0 : e.sourceType) === "unambiguous") {
      i = Object.assign({}, i);
      try {
        i.sourceType = "module";
        const n = Cs(i, S), a = n.parse();
        if (n.sawUnambiguousESM)
          return a;
        if (n.ambiguousScriptDifferentAst)
          try {
            return i.sourceType = "script", Cs(i, S).parse();
          } catch {
          }
        else
          a.program.sourceType = "script";
        return a;
      } catch (n) {
        try {
          return i.sourceType = "script", Cs(i, S).parse();
        } catch {
        }
        throw n;
      }
    } else
      return Cs(i, S).parse();
  }
  function sd(S, i) {
    const e = Cs(i, S);
    return e.options.strictMode && (e.state.strict = !0), e.getExpression();
  }
  function rd(S) {
    const i = {};
    for (const e of Object.keys(S))
      i[e] = it(S[e]);
    return i;
  }
  const id = rd(vi);
  function Cs(S, i) {
    let e = qo;
    const n = /* @__PURE__ */ new Map();
    if (S != null && S.plugins) {
      for (const a of S.plugins) {
        let f, E;
        typeof a == "string" ? f = a : [f, E] = a, n.has(f) || n.set(f, E || {});
      }
      Gf(n), e = nd(n);
    }
    return new e(S, i, n);
  }
  const Ho = /* @__PURE__ */ new Map();
  function nd(S) {
    const i = [];
    for (const a of Kf)
      S.has(a) && i.push(a);
    const e = i.join("|");
    let n = Ho.get(e);
    if (!n) {
      n = qo;
      for (const a of i)
        n = jo[a](n);
      Ho.set(e, n);
    }
    return n;
  }
  return es.parse = td, es.parseExpression = sd, es.tokTypes = id, es;
}
var Ut = /* @__PURE__ */ l0();
class c0 {
  constructor() {
    this.should_skip = !1, this.should_remove = !1, this.replacement = null, this.context = {
      skip: () => this.should_skip = !0,
      remove: () => this.should_remove = !0,
      replace: (s) => this.replacement = s
    };
  }
  /**
   *
   * @param {any} parent
   * @param {string} prop
   * @param {number} index
   * @param {BaseNode} node
   */
  replace(s, r, o, u) {
    s && (o !== null ? s[r][o] = u : s[r] = u);
  }
  /**
   *
   * @param {any} parent
   * @param {string} prop
   * @param {number} index
   */
  remove(s, r, o) {
    s && (o !== null ? s[r].splice(o, 1) : delete s[r]);
  }
}
class h0 extends c0 {
  /**
   *
   * @param {SyncHandler} enter
   * @param {SyncHandler} leave
   */
  constructor(s, r) {
    super(), this.enter = s, this.leave = r;
  }
  /**
   *
   * @param {BaseNode} node
   * @param {BaseNode} parent
   * @param {string} [prop]
   * @param {number} [index]
   * @returns {BaseNode}
   */
  visit(s, r, o, u) {
    if (s) {
      if (this.enter) {
        const c = this.should_skip, l = this.should_remove, h = this.replacement;
        this.should_skip = !1, this.should_remove = !1, this.replacement = null, this.enter.call(this.context, s, r, o, u), this.replacement && (s = this.replacement, this.replace(r, o, u, s)), this.should_remove && this.remove(r, o, u);
        const p = this.should_skip, m = this.should_remove;
        if (this.should_skip = c, this.should_remove = l, this.replacement = h, p) return s;
        if (m) return null;
      }
      for (const c in s) {
        const l = s[c];
        if (typeof l == "object")
          if (Array.isArray(l))
            for (let h = 0; h < l.length; h += 1)
              l[h] !== null && typeof l[h].type == "string" && (this.visit(l[h], s, c, h) || h--);
          else l !== null && typeof l.type == "string" && this.visit(l, s, c, null);
      }
      if (this.leave) {
        const c = this.replacement, l = this.should_remove;
        this.replacement = null, this.should_remove = !1, this.leave.call(this.context, s, r, o, u), this.replacement && (s = this.replacement, this.replace(r, o, u, s)), this.should_remove && this.remove(r, o, u);
        const h = this.should_remove;
        if (this.replacement = c, this.should_remove = l, h) return null;
      }
    }
    return s;
  }
}
function p0(t, { enter: s, leave: r }) {
  return new h0(s, r).visit(t, null);
}
function Fc(t, s, r = !1, o = [], u = /* @__PURE__ */ Object.create(null)) {
  const c = t.type === "Program" ? t.body[0].type === "ExpressionStatement" && t.body[0].expression : t;
  p0(t, {
    enter(l, h) {
      if (h && o.push(h), h && h.type.startsWith("TS") && !Ea.includes(h.type))
        return this.skip();
      if (l.type === "Identifier") {
        const p = !!u[l.name], m = Bc(l, h, o);
        (r || m && !p) && s(l, h, o, m, p);
      } else if (l.type === "ObjectProperty" && // eslint-disable-next-line no-restricted-syntax
      (h == null ? void 0 : h.type) === "ObjectPattern")
        l.inPattern = !0;
      else if (Hc(l))
        l.scopeIds ? l.scopeIds.forEach((p) => jn(p, u)) : $c(
          l,
          (p) => pr(l, p, u)
        );
      else if (l.type === "BlockStatement")
        l.scopeIds ? l.scopeIds.forEach((p) => jn(p, u)) : Vc(
          l,
          (p) => pr(l, p, u)
        );
      else if (l.type === "CatchClause" && l.param)
        for (const p of Ye(l.param))
          pr(l, p, u);
      else jc(l) && qc(
        l,
        !1,
        (p) => pr(l, p, u)
      );
    },
    leave(l, h) {
      if (h && o.pop(), l !== c && l.scopeIds)
        for (const p of l.scopeIds)
          u[p]--, u[p] === 0 && delete u[p];
    }
  });
}
function Bc(t, s, r) {
  if (!s)
    return !0;
  if (t.name === "arguments")
    return !1;
  if (f0(t, s))
    return !0;
  switch (s.type) {
    case "AssignmentExpression":
    case "AssignmentPattern":
      return !0;
    case "ObjectPattern":
    case "ArrayPattern":
      return xa(s, r);
  }
  return !1;
}
function xa(t, s) {
  if (t && (t.type === "ObjectProperty" || t.type === "ArrayPattern")) {
    let r = s.length;
    for (; r--; ) {
      const o = s[r];
      if (o.type === "AssignmentExpression")
        return !0;
      if (o.type !== "ObjectProperty" && !o.type.endsWith("Pattern"))
        break;
    }
  }
  return !1;
}
function Uc(t) {
  let s = t.length;
  for (; s--; ) {
    const r = t[s];
    if (r.type === "NewExpression")
      return !0;
    if (r.type !== "MemberExpression")
      break;
  }
  return !1;
}
function $c(t, s) {
  for (const r of t.params)
    for (const o of Ye(r))
      s(o);
}
function Vc(t, s) {
  for (const r of t.body)
    if (r.type === "VariableDeclaration") {
      if (r.declare) continue;
      for (const o of r.declarations)
        for (const u of Ye(o.id))
          s(u);
    } else if (r.type === "FunctionDeclaration" || r.type === "ClassDeclaration") {
      if (r.declare || !r.id) continue;
      s(r.id);
    } else jc(r) && qc(r, !0, s);
}
function jc(t) {
  return t.type === "ForOfStatement" || t.type === "ForInStatement" || t.type === "ForStatement";
}
function qc(t, s, r) {
  const o = t.type === "ForStatement" ? t.init : t.left;
  if (o && o.type === "VariableDeclaration" && (o.kind === "var" ? s : !s))
    for (const u of o.declarations)
      for (const c of Ye(u.id))
        r(c);
}
function Ye(t, s = []) {
  switch (t.type) {
    case "Identifier":
      s.push(t);
      break;
    case "MemberExpression":
      let r = t;
      for (; r.type === "MemberExpression"; )
        r = r.object;
      s.push(r);
      break;
    case "ObjectPattern":
      for (const o of t.properties)
        o.type === "RestElement" ? Ye(o.argument, s) : Ye(o.value, s);
      break;
    case "ArrayPattern":
      t.elements.forEach((o) => {
        o && Ye(o, s);
      });
      break;
    case "RestElement":
      Ye(t.argument, s);
      break;
    case "AssignmentPattern":
      Ye(t.left, s);
      break;
  }
  return s;
}
function jn(t, s) {
  t in s ? s[t]++ : s[t] = 1;
}
function pr(t, s, r) {
  const { name: o } = s;
  t.scopeIds && t.scopeIds.has(o) || (jn(o, r), (t.scopeIds || (t.scopeIds = /* @__PURE__ */ new Set())).add(o));
}
const Hc = (t) => /Function(?:Expression|Declaration)$|Method$/.test(t.type), Sa = (t) => t && (t.type === "ObjectProperty" || t.type === "ObjectMethod") && !t.computed, zc = (t, s) => Sa(s) && s.key === t;
function f0(t, s, r) {
  switch (s.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      return s.property === t ? !!s.computed : s.object === t;
    case "JSXMemberExpression":
      return s.object === t;
    case "VariableDeclarator":
      return s.init === t;
    case "ArrowFunctionExpression":
      return s.body === t;
    case "PrivateName":
      return !1;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      return s.key === t ? !!s.computed : !1;
    case "ObjectProperty":
      return s.key === t ? !!s.computed : !0;
    case "ClassProperty":
      return s.key === t ? !!s.computed : !0;
    case "ClassPrivateProperty":
      return s.key !== t;
    case "ClassDeclaration":
    case "ClassExpression":
      return s.superClass === t;
    case "AssignmentExpression":
      return s.right === t;
    case "AssignmentPattern":
      return s.right === t;
    case "LabeledStatement":
      return !1;
    case "CatchClause":
      return !1;
    case "RestElement":
      return !1;
    case "BreakStatement":
    case "ContinueStatement":
      return !1;
    case "FunctionDeclaration":
    case "FunctionExpression":
      return !1;
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return !1;
    case "ExportSpecifier":
      return s.local === t;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return !1;
    case "ImportAttribute":
      return !1;
    case "JSXAttribute":
      return !1;
    case "ObjectPattern":
    case "ArrayPattern":
      return !1;
    case "MetaProperty":
      return !1;
    case "ObjectTypeProperty":
      return s.key !== t;
    case "TSEnumMember":
      return s.id !== t;
    case "TSPropertySignature":
      return s.key === t ? !!s.computed : !0;
  }
  return !0;
}
const Ea = [
  "TSAsExpression",
  // foo as number
  "TSTypeAssertion",
  // (<number>foo)
  "TSNonNullExpression",
  // foo!
  "TSInstantiationExpression",
  // foo<string>
  "TSSatisfiesExpression"
  // foo satisfies T
];
function ii(t) {
  return Ea.includes(t.type) ? ii(t.expression) : t;
}
const _e = (t) => t.type === 4 && t.isStatic;
function Pa(t) {
  switch (t) {
    case "Teleport":
    case "teleport":
      return Bt;
    case "Suspense":
    case "suspense":
      return ds;
    case "KeepAlive":
    case "keep-alive":
      return Ds;
    case "BaseTransition":
    case "base-transition":
      return ua;
  }
}
const d0 = /^\d|[^\$\w\xA0-\uFFFF]/, pt = (t) => !d0.test(t), m0 = /[A-Za-z_$\xA0-\uFFFF]/, y0 = /[\.\?\w$\xA0-\uFFFF]/, g0 = /\s+[.[]\s*|\s*[.[]\s+/g, ni = (t) => t.type === 4 ? t.content : t.loc.source, b0 = (t) => {
  const s = ni(t).trim().replace(g0, (h) => h.trim());
  let r = 0, o = [], u = 0, c = 0, l = null;
  for (let h = 0; h < s.length; h++) {
    const p = s.charAt(h);
    switch (r) {
      case 0:
        if (p === "[")
          o.push(r), r = 1, u++;
        else if (p === "(")
          o.push(r), r = 2, c++;
        else if (!(h === 0 ? m0 : y0).test(p))
          return !1;
        break;
      case 1:
        p === "'" || p === '"' || p === "`" ? (o.push(r), r = 3, l = p) : p === "[" ? u++ : p === "]" && (--u || (r = o.pop()));
        break;
      case 2:
        if (p === "'" || p === '"' || p === "`")
          o.push(r), r = 3, l = p;
        else if (p === "(")
          c++;
        else if (p === ")") {
          if (h === s.length - 1)
            return !1;
          --c || (r = o.pop());
        }
        break;
      case 3:
        p === l && (r = o.pop(), l = null);
        break;
    }
  }
  return !u && !c;
}, Xc = (t, s) => {
  try {
    let r = t.ast || Ut.parseExpression(ni(t), {
      plugins: s.expressionPlugins ? [...s.expressionPlugins, "typescript"] : ["typescript"]
    });
    return r = ii(r), r.type === "MemberExpression" || r.type === "OptionalMemberExpression" || r.type === "Identifier" && r.name !== "undefined";
  } catch {
    return !1;
  }
}, Ta = Xc, x0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, S0 = (t) => x0.test(ni(t)), Wc = (t, s) => {
  try {
    let r = t.ast || Ut.parseExpression(ni(t), {
      plugins: s.expressionPlugins ? [...s.expressionPlugins, "typescript"] : ["typescript"]
    });
    return r.type === "Program" && (r = r.body[0], r.type === "ExpressionStatement" && (r = r.expression)), r = ii(r), r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression";
  } catch {
    return !1;
  }
}, Gc = Wc;
function qn(t, s, r = s.length) {
  return Aa(
    {
      offset: t.offset,
      line: t.line,
      column: t.column
    },
    s,
    r
  );
}
function Aa(t, s, r = s.length) {
  let o = 0, u = -1;
  for (let c = 0; c < r; c++)
    s.charCodeAt(c) === 10 && (o++, u = c);
  return t.offset += r, t.line += o, t.column = u === -1 ? t.column + r : r - u, t;
}
function Hn(t, s) {
  if (!t)
    throw new Error(s || "unexpected compiler condition");
}
function Ee(t, s, r = !1) {
  for (let o = 0; o < t.props.length; o++) {
    const u = t.props[o];
    if (u.type === 7 && (r || u.exp) && (ne(s) ? u.name === s : s.test(u.name)))
      return u;
  }
}
function Ve(t, s, r = !1, o = !1) {
  for (let u = 0; u < t.props.length; u++) {
    const c = t.props[u];
    if (c.type === 6) {
      if (r) continue;
      if (c.name === s && (c.value || o))
        return c;
    } else if (c.name === "bind" && (c.exp || o) && et(c.arg, s))
      return c;
  }
}
function et(t, s) {
  return !!(t && _e(t) && t.content === s);
}
function ai(t) {
  return t.props.some(
    (s) => s.type === 7 && s.name === "bind" && (!s.arg || // v-bind="obj"
    s.arg.type !== 4 || // v-bind:[_ctx.foo]
    !s.arg.isStatic)
    // v-bind:[foo]
  );
}
function Ls(t) {
  return t.type === 5 || t.type === 2;
}
function wa(t) {
  return t.type === 7 && t.name === "slot";
}
function ps(t) {
  return t.type === 1 && t.tagType === 3;
}
function fs(t) {
  return t.type === 1 && t.tagType === 2;
}
const E0 = /* @__PURE__ */ new Set([cs, ys]);
function Kc(t, s = []) {
  if (t && !ne(t) && t.type === 14) {
    const r = t.callee;
    if (!ne(r) && E0.has(r))
      return Kc(
        t.arguments[0],
        s.concat(t)
      );
  }
  return [t, s];
}
function Vs(t, s, r) {
  let o, u = t.type === 13 ? t.props : t.arguments[2], c = [], l;
  if (u && !ne(u) && u.type === 14) {
    const h = Kc(u);
    u = h[0], c = h[1], l = c[c.length - 1];
  }
  if (u == null || ne(u))
    o = Ue([s]);
  else if (u.type === 14) {
    const h = u.arguments[0];
    !ne(h) && h.type === 15 ? vu(s, h) || h.properties.unshift(s) : u.callee === ei ? o = Q(r.helper(jt), [
      Ue([s]),
      u
    ]) : u.arguments.unshift(Ue([s])), !o && (o = u);
  } else u.type === 15 ? (vu(s, u) || u.properties.unshift(s), o = u) : (o = Q(r.helper(jt), [
    Ue([s]),
    u
  ]), l && l.callee === ys && (l = c[c.length - 2]));
  t.type === 13 ? l ? l.arguments[0] = o : t.props = o : l ? l.arguments[0] = o : t.arguments[2] = o;
}
function vu(t, s) {
  let r = !1;
  if (t.key.type === 4) {
    const o = t.key.content;
    r = s.properties.some(
      (u) => u.key.type === 4 && u.key.content === o
    );
  }
  return r;
}
function js(t, s) {
  return `_${s}_${t.replace(/[^\w]/g, (r, o) => r === "-" ? "_" : t.charCodeAt(o).toString())}`;
}
function Fe(t, s) {
  if (!t || Object.keys(s).length === 0)
    return !1;
  switch (t.type) {
    case 1:
      for (let r = 0; r < t.props.length; r++) {
        const o = t.props[r];
        if (o.type === 7 && (Fe(o.arg, s) || Fe(o.exp, s)))
          return !0;
      }
      return t.children.some((r) => Fe(r, s));
    case 11:
      return Fe(t.source, s) ? !0 : t.children.some((r) => Fe(r, s));
    case 9:
      return t.branches.some((r) => Fe(r, s));
    case 10:
      return Fe(t.condition, s) ? !0 : t.children.some((r) => Fe(r, s));
    case 4:
      return !t.isStatic && pt(t.content) && !!s[t.content];
    case 8:
      return t.children.some((r) => Ct(r) && Fe(r, s));
    case 5:
    case 12:
      return Fe(t.content, s);
    case 2:
    case 3:
    case 20:
      return !1;
    default:
      return !1;
  }
}
function Jc(t) {
  return t.type === 14 && t.callee === si ? t.arguments[1].returns : t;
}
const Yc = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, Qc = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Os,
  isPreTag: Os,
  isIgnoreNewlineTag: Os,
  isCustomElement: Os,
  onError: ya,
  onWarn: Rc,
  comments: !0,
  prefixIdentifiers: !1
};
let he = Qc, Rr = null, ct = "", Le = null, ue = null, Xe = "", at = -1, kt = -1, va = 0, Pt = !1, zn = null;
const xe = [], fe = new r0(xe, {
  onerr: De,
  ontext(t, s) {
    fr(ke(t, s), t, s);
  },
  ontextentity(t, s, r) {
    fr(t, s, r);
  },
  oninterpolation(t, s) {
    if (Pt)
      return fr(ke(t, s), t, s);
    let r = t + fe.delimiterOpen.length, o = s - fe.delimiterClose.length;
    for (; qe(ct.charCodeAt(r)); )
      r++;
    for (; qe(ct.charCodeAt(o - 1)); )
      o--;
    let u = ke(r, o);
    u.includes("&") && (u = s0(u)), Xn({
      type: 5,
      content: Tr(u, !1, Se(r, o)),
      loc: Se(t, s)
    });
  },
  onopentagname(t, s) {
    const r = ke(t, s);
    Le = {
      type: 1,
      tag: r,
      ns: he.getNamespace(r, xe[0], he.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Se(t - 1, s),
      codegenNode: void 0
    };
  },
  onopentagend(t) {
    Iu(t);
  },
  onclosetag(t, s) {
    const r = ke(t, s);
    if (!he.isVoidTag(r)) {
      let o = !1;
      for (let u = 0; u < xe.length; u++)
        if (xe[u].tag.toLowerCase() === r.toLowerCase()) {
          o = !0, u > 0 && De(24, xe[0].loc.start.offset);
          for (let l = 0; l <= u; l++) {
            const h = xe.shift();
            Pr(h, s, l < u);
          }
          break;
        }
      o || De(23, Zc(t, 60));
    }
  },
  onselfclosingtag(t) {
    const s = Le.tag;
    Le.isSelfClosing = !0, Iu(t), xe[0] && xe[0].tag === s && Pr(xe.shift(), t);
  },
  onattribname(t, s) {
    ue = {
      type: 6,
      name: ke(t, s),
      nameLoc: Se(t, s),
      value: void 0,
      loc: Se(t)
    };
  },
  ondirname(t, s) {
    const r = ke(t, s), o = r === "." || r === ":" ? "bind" : r === "@" ? "on" : r === "#" ? "slot" : r.slice(2);
    if (!Pt && o === "" && De(26, t), Pt || o === "")
      ue = {
        type: 6,
        name: r,
        nameLoc: Se(t, s),
        value: void 0,
        loc: Se(t)
      };
    else if (ue = {
      type: 7,
      name: o,
      rawName: r,
      exp: void 0,
      arg: void 0,
      modifiers: r === "." ? [z("prop")] : [],
      loc: Se(t)
    }, o === "pre") {
      Pt = fe.inVPre = !0, zn = Le;
      const u = Le.props;
      for (let c = 0; c < u.length; c++)
        u[c].type === 7 && (u[c] = L0(u[c]));
    }
  },
  ondirarg(t, s) {
    if (t === s) return;
    const r = ke(t, s);
    if (Pt)
      ue.name += r, Rt(ue.nameLoc, s);
    else {
      const o = r[0] !== "[";
      ue.arg = Tr(
        o ? r : r.slice(1, -1),
        o,
        Se(t, s),
        o ? 3 : 0
      );
    }
  },
  ondirmodifier(t, s) {
    const r = ke(t, s);
    if (Pt)
      ue.name += "." + r, Rt(ue.nameLoc, s);
    else if (ue.name === "slot") {
      const o = ue.arg;
      o && (o.content += "." + r, Rt(o.loc, s));
    } else {
      const o = z(r, !0, Se(t, s));
      ue.modifiers.push(o);
    }
  },
  onattribdata(t, s) {
    Xe += ke(t, s), at < 0 && (at = t), kt = s;
  },
  onattribentity(t, s, r) {
    Xe += t, at < 0 && (at = s), kt = r;
  },
  onattribnameend(t) {
    const s = ue.loc.start.offset, r = ke(s, t);
    ue.type === 7 && (ue.rawName = r), Le.props.some(
      (o) => (o.type === 7 ? o.rawName : o.name) === r
    ) && De(2, s);
  },
  onattribend(t, s) {
    if (Le && ue) {
      if (Rt(ue.loc, s), t !== 0)
        if (ue.type === 6)
          ue.name === "class" && (Xe = th(Xe).trim()), t === 1 && !Xe && De(13, s), ue.value = {
            type: 2,
            content: Xe,
            loc: t === 1 ? Se(at, kt) : Se(at - 1, kt + 1)
          }, fe.inSFCRoot && Le.tag === "template" && ue.name === "lang" && Xe && Xe !== "html" && fe.enterRCDATA(Mr("</template"), 0);
        else {
          let r = 0;
          ue.name === "for" ? r = 3 : ue.name === "slot" ? r = 1 : ue.name === "on" && Xe.includes(";") && (r = 2), ue.exp = Tr(
            Xe,
            !1,
            Se(at, kt),
            0,
            r
          ), ue.name === "for" && (ue.forParseResult = T0(ue.exp));
        }
      (ue.type !== 7 || ue.name !== "pre") && Le.props.push(ue);
    }
    Xe = "", at = kt = -1;
  },
  oncomment(t, s) {
    he.comments && Xn({
      type: 3,
      content: ke(t, s),
      loc: Se(t - 4, s + 3)
    });
  },
  onend() {
    const t = ct.length;
    if (fe.state !== 1)
      switch (fe.state) {
        case 5:
        case 8:
          De(5, t);
          break;
        case 3:
        case 4:
          De(
            25,
            fe.sectionStart
          );
          break;
        case 28:
          fe.currentSequence === Ne.CdataEnd ? De(6, t) : De(7, t);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          De(9, t);
          break;
      }
    for (let s = 0; s < xe.length; s++)
      Pr(xe[s], t - 1), De(24, xe[s].loc.start.offset);
  },
  oncdata(t, s) {
    xe[0].ns !== 0 ? fr(ke(t, s), t, s) : De(1, t - 9);
  },
  onprocessinginstruction(t) {
    (xe[0] ? xe[0].ns : he.ns) === 0 && De(
      21,
      t - 1
    );
  }
}), Cu = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, P0 = /^\(|\)$/g;
function T0(t) {
  const s = t.loc, r = t.content, o = r.match(Yc);
  if (!o) return;
  const [, u, c] = o, l = (b, g, x = !1) => {
    const T = s.start.offset + g, P = T + b.length;
    return Tr(
      b,
      !1,
      Se(T, P),
      0,
      x ? 1 : 0
      /* Normal */
    );
  }, h = {
    source: l(c.trim(), r.indexOf(c, u.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let p = u.trim().replace(P0, "").trim();
  const m = u.indexOf(p), d = p.match(Cu);
  if (d) {
    p = p.replace(Cu, "").trim();
    const b = d[1].trim();
    let g;
    if (b && (g = r.indexOf(b, m + p.length), h.key = l(b, g, !0)), d[2]) {
      const x = d[2].trim();
      x && (h.index = l(
        x,
        r.indexOf(
          x,
          h.key ? g + b.length : m + p.length
        ),
        !0
      ));
    }
  }
  return p && (h.value = l(p, m, !0)), h;
}
function ke(t, s) {
  return ct.slice(t, s);
}
function Iu(t) {
  fe.inSFCRoot && (Le.innerLoc = Se(t + 1, t + 1)), Xn(Le);
  const { tag: s, ns: r } = Le;
  r === 0 && he.isPreTag(s) && va++, he.isVoidTag(s) ? Pr(Le, t) : (xe.unshift(Le), (r === 1 || r === 2) && (fe.inXML = !0)), Le = null;
}
function fr(t, s, r) {
  const o = xe[0] || Rr, u = o.children[o.children.length - 1];
  u && u.type === 2 ? (u.content += t, Rt(u.loc, r)) : o.children.push({
    type: 2,
    content: t,
    loc: Se(s, r)
  });
}
function Pr(t, s, r = !1) {
  r ? Rt(t.loc, Zc(s, 60)) : Rt(t.loc, A0(s, 62) + 1), fe.inSFCRoot && (t.children.length ? t.innerLoc.end = tt({}, t.children[t.children.length - 1].loc.end) : t.innerLoc.end = tt({}, t.innerLoc.start), t.innerLoc.source = ke(
    t.innerLoc.start.offset,
    t.innerLoc.end.offset
  ));
  const { tag: o, ns: u, children: c } = t;
  if (Pt || (o === "slot" ? t.tagType = 2 : v0(t) ? t.tagType = 3 : C0(t) && (t.tagType = 1)), fe.inRCDATA || (t.children = eh(c)), u === 0 && he.isIgnoreNewlineTag(o)) {
    const l = c[0];
    l && l.type === 2 && (l.content = l.content.replace(/^\r?\n/, ""));
  }
  u === 0 && he.isPreTag(o) && va--, zn === t && (Pt = fe.inVPre = !1, zn = null), fe.inXML && (xe[0] ? xe[0].ns : he.ns) === 0 && (fe.inXML = !1);
}
function A0(t, s) {
  let r = t;
  for (; ct.charCodeAt(r) !== s && r < ct.length - 1; ) r++;
  return r;
}
function Zc(t, s) {
  let r = t;
  for (; ct.charCodeAt(r) !== s && r >= 0; ) r--;
  return r;
}
const w0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function v0({ tag: t, props: s }) {
  if (t === "template") {
    for (let r = 0; r < s.length; r++)
      if (s[r].type === 7 && w0.has(s[r].name))
        return !0;
  }
  return !1;
}
function C0({ tag: t, props: s }) {
  if (he.isCustomElement(t))
    return !1;
  if (t === "component" || I0(t.charCodeAt(0)) || Pa(t) || he.isBuiltInComponent && he.isBuiltInComponent(t) || he.isNativeTag && !he.isNativeTag(t))
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (o.type === 6 && o.name === "is" && o.value && o.value.content.startsWith("vue:"))
      return !0;
  }
  return !1;
}
function I0(t) {
  return t > 64 && t < 91;
}
const N0 = /\r\n/g;
function eh(t, s) {
  const r = he.whitespace !== "preserve";
  let o = !1;
  for (let u = 0; u < t.length; u++) {
    const c = t[u];
    if (c.type === 2)
      if (va)
        c.content = c.content.replace(N0, `
`);
      else if (_0(c.content)) {
        const l = t[u - 1] && t[u - 1].type, h = t[u + 1] && t[u + 1].type;
        !l || !h || r && (l === 3 && (h === 3 || h === 1) || l === 1 && (h === 3 || h === 1 && O0(c.content))) ? (o = !0, t[u] = null) : c.content = " ";
      } else r && (c.content = th(c.content));
  }
  return o ? t.filter(Boolean) : t;
}
function _0(t) {
  for (let s = 0; s < t.length; s++)
    if (!qe(t.charCodeAt(s)))
      return !1;
  return !0;
}
function O0(t) {
  for (let s = 0; s < t.length; s++) {
    const r = t.charCodeAt(s);
    if (r === 10 || r === 13)
      return !0;
  }
  return !1;
}
function th(t) {
  let s = "", r = !1;
  for (let o = 0; o < t.length; o++)
    qe(t.charCodeAt(o)) ? r || (s += " ", r = !0) : (s += t[o], r = !1);
  return s;
}
function Xn(t) {
  (xe[0] || Rr).children.push(t);
}
function Se(t, s) {
  return {
    start: fe.getPos(t),
    // @ts-expect-error allow late attachment
    end: s == null ? s : fe.getPos(s),
    // @ts-expect-error allow late attachment
    source: s == null ? s : ke(t, s)
  };
}
function k0(t) {
  return Se(t.start.offset, t.end.offset);
}
function Rt(t, s) {
  t.end = fe.getPos(s), t.source = ke(t.start.offset, s);
}
function L0(t) {
  const s = {
    type: 6,
    name: t.rawName,
    nameLoc: Se(
      t.loc.start.offset,
      t.loc.start.offset + t.rawName.length
    ),
    value: void 0,
    loc: t.loc
  };
  if (t.exp) {
    const r = t.exp.loc;
    r.end.offset < t.loc.end.offset && (r.start.offset--, r.start.column--, r.end.offset++, r.end.column++), s.value = {
      type: 2,
      content: t.exp.content,
      loc: r
    };
  }
  return s;
}
function Tr(t, s = !1, r, o = 0, u = 0) {
  const c = z(t, s, r, o);
  if (!s && he.prefixIdentifiers && u !== 3 && t.trim()) {
    if (pt(t))
      return c.ast = null, c;
    try {
      const l = he.expressionPlugins, h = {
        plugins: l ? [...l, "typescript"] : ["typescript"]
      };
      u === 2 ? c.ast = Ut.parse(` ${t} `, h).program : u === 1 ? c.ast = Ut.parseExpression(`(${t})=>{}`, h) : c.ast = Ut.parseExpression(`(${t})`, h);
    } catch (l) {
      c.ast = !1, De(45, r.start.offset, l.message);
    }
  }
  return c;
}
function De(t, s, r) {
  he.onError(
    ae(t, Se(s, s), void 0, r)
  );
}
function M0() {
  fe.reset(), Le = null, ue = null, Xe = "", at = -1, kt = -1, xe.length = 0;
}
function oi(t, s) {
  if (M0(), ct = t, he = tt({}, Qc), s) {
    let u;
    for (u in s)
      s[u] != null && (he[u] = s[u]);
  }
  he.decodeEntities && console.warn(
    "[@vue/compiler-core] decodeEntities option is passed but will be ignored in non-browser builds."
  ), fe.mode = he.parseMode === "html" ? 1 : he.parseMode === "sfc" ? 2 : 0, fe.inXML = he.ns === 1 || he.ns === 2;
  const r = s && s.delimiters;
  r && (fe.delimiterOpen = Mr(r[0]), fe.delimiterClose = Mr(r[1]));
  const o = Rr = Ys([], t);
  return fe.parse(ct), o.loc = Se(0, t.length), o.children = eh(o.children), Rr = null, o;
}
function R0(t, s) {
  Ar(
    t,
    void 0,
    s,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    sh(t, t.children[0])
  );
}
function sh(t, s) {
  const { children: r } = t;
  return r.length === 1 && s.type === 1 && !fs(s);
}
function Ar(t, s, r, o = !1, u = !1) {
  const { children: c } = t, l = [];
  for (let b = 0; b < c.length; b++) {
    const g = c[b];
    if (g.type === 1 && g.tagType === 0) {
      const x = o ? 0 : $e(g, r);
      if (x > 0) {
        if (x >= 2) {
          g.codegenNode.patchFlag = -1, l.push(g);
          continue;
        }
      } else {
        const T = g.codegenNode;
        if (T.type === 13) {
          const P = T.patchFlag;
          if ((P === void 0 || P === 512 || P === 1) && ih(g, r) >= 2) {
            const y = nh(g);
            y && (T.props = r.hoist(y));
          }
          T.dynamicProps && (T.dynamicProps = r.hoist(T.dynamicProps));
        }
      }
    } else if (g.type === 12 && (o ? 0 : $e(g, r)) >= 2) {
      l.push(g);
      continue;
    }
    if (g.type === 1) {
      const x = g.tagType === 1;
      x && r.scopes.vSlot++, Ar(g, t, r, !1, u), x && r.scopes.vSlot--;
    } else if (g.type === 11)
      Ar(g, t, r, g.children.length === 1, !0);
    else if (g.type === 9)
      for (let x = 0; x < g.branches.length; x++)
        Ar(
          g.branches[x],
          t,
          r,
          g.branches[x].children.length === 1,
          u
        );
  }
  let h = !1;
  const p = [];
  if (l.length === c.length && t.type === 1) {
    if (t.tagType === 0 && t.codegenNode && t.codegenNode.type === 13 && Ae(t.codegenNode.children))
      t.codegenNode.children = m(
        lt(t.codegenNode.children)
      ), h = !0;
    else if (t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Ae(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const b = d(t.codegenNode, "default");
      b && (p.push(r.cached.length), b.returns = m(
        lt(b.returns)
      ), h = !0);
    } else if (t.tagType === 3 && s && s.type === 1 && s.tagType === 1 && s.codegenNode && s.codegenNode.type === 13 && s.codegenNode.children && !Ae(s.codegenNode.children) && s.codegenNode.children.type === 15) {
      const b = Ee(t, "slot", !0), g = b && b.arg && d(s.codegenNode, b.arg);
      g && (p.push(r.cached.length), g.returns = m(
        lt(g.returns)
      ), h = !0);
    }
  }
  if (!h)
    for (const b of l)
      p.push(r.cached.length), b.codegenNode = r.cache(b.codegenNode);
  p.length && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Ae(t.codegenNode.children) && t.codegenNode.children.type === 15 && t.codegenNode.children.properties.push(
    le(
      "__",
      z(JSON.stringify(p), !1)
    )
  );
  function m(b) {
    const g = r.cache(b);
    return u && r.hmr && (g.needArraySpread = !0), g;
  }
  function d(b, g) {
    if (b.children && !Ae(b.children) && b.children.type === 15) {
      const x = b.children.properties.find(
        (T) => T.key === g || T.key.content === g
      );
      return x && x.value;
    }
  }
  l.length && r.transformHoist && r.transformHoist(c, r, t);
}
function $e(t, s) {
  const { constantCache: r } = s;
  switch (t.type) {
    case 1:
      if (t.tagType !== 0)
        return 0;
      const o = r.get(t);
      if (o !== void 0)
        return o;
      const u = t.codegenNode;
      if (u.type !== 13 || u.isBlock && t.tag !== "svg" && t.tag !== "foreignObject" && t.tag !== "math")
        return 0;
      if (u.patchFlag === void 0) {
        let l = 3;
        const h = ih(t, s);
        if (h === 0)
          return r.set(t, 0), 0;
        h < l && (l = h);
        for (let p = 0; p < t.children.length; p++) {
          const m = $e(t.children[p], s);
          if (m === 0)
            return r.set(t, 0), 0;
          m < l && (l = m);
        }
        if (l > 1)
          for (let p = 0; p < t.props.length; p++) {
            const m = t.props[p];
            if (m.type === 7 && m.name === "bind" && m.exp) {
              const d = $e(m.exp, s);
              if (d === 0)
                return r.set(t, 0), 0;
              d < l && (l = d);
            }
          }
        if (u.isBlock) {
          for (let p = 0; p < t.props.length; p++)
            if (t.props[p].type === 7)
              return r.set(t, 0), 0;
          s.removeHelper(At), s.removeHelper(
            Ht(s.inSSR, u.isComponent)
          ), u.isBlock = !1, s.helper(qt(s.inSSR, u.isComponent));
        }
        return r.set(t, l), l;
      } else
        return r.set(t, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return $e(t.content, s);
    case 4:
      return t.constType;
    case 8:
      let c = 3;
      for (let l = 0; l < t.children.length; l++) {
        const h = t.children[l];
        if (ne(h) || vt(h))
          continue;
        const p = $e(h, s);
        if (p === 0)
          return 0;
        p < c && (c = p);
      }
      return c;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const D0 = /* @__PURE__ */ new Set([
  Qr,
  Zr,
  cs,
  ys
]);
function rh(t, s) {
  if (t.type === 14 && !ne(t.callee) && D0.has(t.callee)) {
    const r = t.arguments[0];
    if (r.type === 4)
      return $e(r, s);
    if (r.type === 14)
      return rh(r, s);
  }
  return 0;
}
function ih(t, s) {
  let r = 3;
  const o = nh(t);
  if (o && o.type === 15) {
    const { properties: u } = o;
    for (let c = 0; c < u.length; c++) {
      const { key: l, value: h } = u[c], p = $e(l, s);
      if (p === 0)
        return p;
      p < r && (r = p);
      let m;
      if (h.type === 4 ? m = $e(h, s) : h.type === 14 ? m = rh(h, s) : m = 0, m === 0)
        return m;
      m < r && (r = m);
    }
  }
  return r;
}
function nh(t) {
  const s = t.codegenNode;
  if (s.type === 13)
    return s.props;
}
function ui(t, {
  filename: s = "",
  prefixIdentifiers: r = !1,
  hoistStatic: o = !1,
  hmr: u = !1,
  cacheHandlers: c = !1,
  nodeTransforms: l = [],
  directiveTransforms: h = {},
  transformHoist: p = null,
  isBuiltInComponent: m = Vi,
  isCustomElement: d = Vi,
  expressionPlugins: b = [],
  scopeId: g = null,
  slotted: x = !0,
  ssr: T = !1,
  inSSR: P = !1,
  ssrCssVars: y = "",
  bindingMetadata: C = ld,
  inline: N = !1,
  isTS: L = !1,
  onError: F = ya,
  onWarn: M = Rc,
  compatConfig: D
}) {
  const U = s.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), v = {
    // options
    filename: s,
    selfName: U && Ws(st(U[1])),
    prefixIdentifiers: r,
    hoistStatic: o,
    hmr: u,
    cacheHandlers: c,
    nodeTransforms: l,
    directiveTransforms: h,
    transformHoist: p,
    isBuiltInComponent: m,
    isCustomElement: d,
    expressionPlugins: b,
    scopeId: g,
    slotted: x,
    ssr: T,
    inSSR: P,
    ssrCssVars: y,
    bindingMetadata: C,
    inline: N,
    isTS: L,
    onError: F,
    onWarn: M,
    compatConfig: D,
    // state
    root: t,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: t,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(R) {
      const j = v.helpers.get(R) || 0;
      return v.helpers.set(R, j + 1), R;
    },
    removeHelper(R) {
      const j = v.helpers.get(R);
      if (j) {
        const W = j - 1;
        W ? v.helpers.set(R, W) : v.helpers.delete(R);
      }
    },
    helperString(R) {
      return `_${Be[v.helper(R)]}`;
    },
    replaceNode(R) {
      {
        if (!v.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!v.parent)
          throw new Error("Cannot replace root node.");
      }
      v.parent.children[v.childIndex] = v.currentNode = R;
    },
    removeNode(R) {
      if (!v.parent)
        throw new Error("Cannot remove root node.");
      const j = v.parent.children, W = R ? j.indexOf(R) : v.currentNode ? v.childIndex : -1;
      if (W < 0)
        throw new Error("node being removed is not a child of current parent");
      !R || R === v.currentNode ? (v.currentNode = null, v.onNodeRemoved()) : v.childIndex > W && (v.childIndex--, v.onNodeRemoved()), v.parent.children.splice(W, 1);
    },
    onNodeRemoved: Vi,
    addIdentifiers(R) {
      ne(R) ? I(R) : R.identifiers ? R.identifiers.forEach(I) : R.type === 4 && I(R.content);
    },
    removeIdentifiers(R) {
      ne(R) ? O(R) : R.identifiers ? R.identifiers.forEach(O) : R.type === 4 && O(R.content);
    },
    hoist(R) {
      ne(R) && (R = z(R)), v.hoists.push(R);
      const j = z(
        `_hoisted_${v.hoists.length}`,
        !1,
        R.loc,
        2
      );
      return j.hoisted = R, j;
    },
    cache(R, j = !1, W = !1) {
      const ee = Ic(
        v.cached.length,
        R,
        j,
        W
      );
      return v.cached.push(ee), ee;
    }
  };
  function I(R) {
    const { identifiers: j } = v;
    j[R] === void 0 && (j[R] = 0), j[R]++;
  }
  function O(R) {
    v.identifiers[R]--;
  }
  return v;
}
function Ca(t, s) {
  const r = ui(t, s);
  gs(t, r), s.hoistStatic && R0(t, r), s.ssr || F0(t, r), t.helpers = /* @__PURE__ */ new Set([...r.helpers.keys()]), t.components = [...r.components], t.directives = [...r.directives], t.imports = r.imports, t.hoists = r.hoists, t.temps = r.temps, t.cached = r.cached, t.transformed = !0;
}
function F0(t, s) {
  const { helper: r } = s, { children: o } = t;
  if (o.length === 1) {
    const u = o[0];
    if (sh(t, u) && u.codegenNode) {
      const c = u.codegenNode;
      c.type === 13 && ri(c, s), t.codegenNode = c;
    } else
      t.codegenNode = u;
  } else if (o.length > 1) {
    let u = 64;
    o.filter((c) => c.type !== 3).length === 1 && (u |= 2048), t.codegenNode = hs(
      s,
      r(ls),
      void 0,
      t.children,
      u,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function B0(t, s) {
  let r = 0;
  const o = () => {
    r--;
  };
  for (; r < t.children.length; r++) {
    const u = t.children[r];
    ne(u) || (s.grandParent = s.parent, s.parent = t, s.childIndex = r, s.onNodeRemoved = o, gs(u, s));
  }
}
function gs(t, s) {
  s.currentNode = t;
  const { nodeTransforms: r } = s, o = [];
  for (let c = 0; c < r.length; c++) {
    const l = r[c](t, s);
    if (l && (Ae(l) ? o.push(...l) : o.push(l)), s.currentNode)
      t = s.currentNode;
    else
      return;
  }
  switch (t.type) {
    case 3:
      s.ssr || s.helper(ms);
      break;
    case 5:
      s.ssr || s.helper(Js);
      break;
    case 9:
      for (let c = 0; c < t.branches.length; c++)
        gs(t.branches[c], s);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      B0(t, s);
      break;
  }
  s.currentNode = t;
  let u = o.length;
  for (; u--; )
    o[u]();
}
function Zs(t, s) {
  const r = ne(t) ? (o) => o === t : (o) => t.test(o);
  return (o, u) => {
    if (o.type === 1) {
      const { props: c } = o;
      if (o.tagType === 3 && c.some(wa))
        return;
      const l = [];
      for (let h = 0; h < c.length; h++) {
        const p = c[h];
        if (p.type === 7 && r(p.name)) {
          c.splice(h, 1), h--;
          const m = s(o, p, u);
          m && l.push(m);
        }
      }
      return l;
    }
  };
}
var Is = {}, zi = {}, dr = {}, mr = {}, Nu;
function U0() {
  if (Nu) return mr;
  Nu = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return mr.encode = function(s) {
    if (0 <= s && s < t.length)
      return t[s];
    throw new TypeError("Must be between 0 and 63: " + s);
  }, mr.decode = function(s) {
    var r = 65, o = 90, u = 97, c = 122, l = 48, h = 57, p = 43, m = 47, d = 26, b = 52;
    return r <= s && s <= o ? s - r : u <= s && s <= c ? s - u + d : l <= s && s <= h ? s - l + b : s == p ? 62 : s == m ? 63 : -1;
  }, mr;
}
var _u;
function ah() {
  if (_u) return dr;
  _u = 1;
  var t = /* @__PURE__ */ U0(), s = 5, r = 1 << s, o = r - 1, u = r;
  function c(h) {
    return h < 0 ? (-h << 1) + 1 : (h << 1) + 0;
  }
  function l(h) {
    var p = (h & 1) === 1, m = h >> 1;
    return p ? -m : m;
  }
  return dr.encode = function(p) {
    var m = "", d, b = c(p);
    do
      d = b & o, b >>>= s, b > 0 && (d |= u), m += t.encode(d);
    while (b > 0);
    return m;
  }, dr.decode = function(p, m, d) {
    var b = p.length, g = 0, x = 0, T, P;
    do {
      if (m >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (P = t.decode(p.charCodeAt(m++)), P === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(m - 1));
      T = !!(P & u), P &= o, g = g + (P << x), x += s;
    } while (T);
    d.value = l(g), d.rest = m;
  }, dr;
}
var Xi = {}, Ou;
function er() {
  return Ou || (Ou = 1, function(t) {
    function s(v, I, O) {
      if (I in v)
        return v[I];
      if (arguments.length === 3)
        return O;
      throw new Error('"' + I + '" is a required argument.');
    }
    t.getArg = s;
    var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, o = /^data:.+\,.+$/;
    function u(v) {
      var I = v.match(r);
      return I ? {
        scheme: I[1],
        auth: I[2],
        host: I[3],
        port: I[4],
        path: I[5]
      } : null;
    }
    t.urlParse = u;
    function c(v) {
      var I = "";
      return v.scheme && (I += v.scheme + ":"), I += "//", v.auth && (I += v.auth + "@"), v.host && (I += v.host), v.port && (I += ":" + v.port), v.path && (I += v.path), I;
    }
    t.urlGenerate = c;
    var l = 32;
    function h(v) {
      var I = [];
      return function(O) {
        for (var R = 0; R < I.length; R++)
          if (I[R].input === O) {
            var j = I[0];
            return I[0] = I[R], I[R] = j, I[0].result;
          }
        var W = v(O);
        return I.unshift({
          input: O,
          result: W
        }), I.length > l && I.pop(), W;
      };
    }
    var p = h(function(I) {
      var O = I, R = u(I);
      if (R) {
        if (!R.path)
          return I;
        O = R.path;
      }
      for (var j = t.isAbsolute(O), W = [], ee = 0, $ = 0; ; )
        if (ee = $, $ = O.indexOf("/", ee), $ === -1) {
          W.push(O.slice(ee));
          break;
        } else
          for (W.push(O.slice(ee, $)); $ < O.length && O[$] === "/"; )
            $++;
      for (var pe, X = 0, $ = W.length - 1; $ >= 0; $--)
        pe = W[$], pe === "." ? W.splice($, 1) : pe === ".." ? X++ : X > 0 && (pe === "" ? (W.splice($ + 1, X), X = 0) : (W.splice($, 2), X--));
      return O = W.join("/"), O === "" && (O = j ? "/" : "."), R ? (R.path = O, c(R)) : O;
    });
    t.normalize = p;
    function m(v, I) {
      v === "" && (v = "."), I === "" && (I = ".");
      var O = u(I), R = u(v);
      if (R && (v = R.path || "/"), O && !O.scheme)
        return R && (O.scheme = R.scheme), c(O);
      if (O || I.match(o))
        return I;
      if (R && !R.host && !R.path)
        return R.host = I, c(R);
      var j = I.charAt(0) === "/" ? I : p(v.replace(/\/+$/, "") + "/" + I);
      return R ? (R.path = j, c(R)) : j;
    }
    t.join = m, t.isAbsolute = function(v) {
      return v.charAt(0) === "/" || r.test(v);
    };
    function d(v, I) {
      v === "" && (v = "."), v = v.replace(/\/$/, "");
      for (var O = 0; I.indexOf(v + "/") !== 0; ) {
        var R = v.lastIndexOf("/");
        if (R < 0 || (v = v.slice(0, R), v.match(/^([^\/]+:\/)?\/*$/)))
          return I;
        ++O;
      }
      return Array(O + 1).join("../") + I.substr(v.length + 1);
    }
    t.relative = d;
    var b = function() {
      var v = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in v);
    }();
    function g(v) {
      return v;
    }
    function x(v) {
      return P(v) ? "$" + v : v;
    }
    t.toSetString = b ? g : x;
    function T(v) {
      return P(v) ? v.slice(1) : v;
    }
    t.fromSetString = b ? g : T;
    function P(v) {
      if (!v)
        return !1;
      var I = v.length;
      if (I < 9 || v.charCodeAt(I - 1) !== 95 || v.charCodeAt(I - 2) !== 95 || v.charCodeAt(I - 3) !== 111 || v.charCodeAt(I - 4) !== 116 || v.charCodeAt(I - 5) !== 111 || v.charCodeAt(I - 6) !== 114 || v.charCodeAt(I - 7) !== 112 || v.charCodeAt(I - 8) !== 95 || v.charCodeAt(I - 9) !== 95)
        return !1;
      for (var O = I - 10; O >= 0; O--)
        if (v.charCodeAt(O) !== 36)
          return !1;
      return !0;
    }
    function y(v, I, O) {
      var R = F(v.source, I.source);
      return R !== 0 || (R = v.originalLine - I.originalLine, R !== 0) || (R = v.originalColumn - I.originalColumn, R !== 0 || O) || (R = v.generatedColumn - I.generatedColumn, R !== 0) || (R = v.generatedLine - I.generatedLine, R !== 0) ? R : F(v.name, I.name);
    }
    t.compareByOriginalPositions = y;
    function C(v, I, O) {
      var R;
      return R = v.originalLine - I.originalLine, R !== 0 || (R = v.originalColumn - I.originalColumn, R !== 0 || O) || (R = v.generatedColumn - I.generatedColumn, R !== 0) || (R = v.generatedLine - I.generatedLine, R !== 0) ? R : F(v.name, I.name);
    }
    t.compareByOriginalPositionsNoSource = C;
    function N(v, I, O) {
      var R = v.generatedLine - I.generatedLine;
      return R !== 0 || (R = v.generatedColumn - I.generatedColumn, R !== 0 || O) || (R = F(v.source, I.source), R !== 0) || (R = v.originalLine - I.originalLine, R !== 0) || (R = v.originalColumn - I.originalColumn, R !== 0) ? R : F(v.name, I.name);
    }
    t.compareByGeneratedPositionsDeflated = N;
    function L(v, I, O) {
      var R = v.generatedColumn - I.generatedColumn;
      return R !== 0 || O || (R = F(v.source, I.source), R !== 0) || (R = v.originalLine - I.originalLine, R !== 0) || (R = v.originalColumn - I.originalColumn, R !== 0) ? R : F(v.name, I.name);
    }
    t.compareByGeneratedPositionsDeflatedNoLine = L;
    function F(v, I) {
      return v === I ? 0 : v === null ? 1 : I === null ? -1 : v > I ? 1 : -1;
    }
    function M(v, I) {
      var O = v.generatedLine - I.generatedLine;
      return O !== 0 || (O = v.generatedColumn - I.generatedColumn, O !== 0) || (O = F(v.source, I.source), O !== 0) || (O = v.originalLine - I.originalLine, O !== 0) || (O = v.originalColumn - I.originalColumn, O !== 0) ? O : F(v.name, I.name);
    }
    t.compareByGeneratedPositionsInflated = M;
    function D(v) {
      return JSON.parse(v.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = D;
    function U(v, I, O) {
      if (I = I || "", v && (v[v.length - 1] !== "/" && I[0] !== "/" && (v += "/"), I = v + I), O) {
        var R = u(O);
        if (!R)
          throw new Error("sourceMapURL could not be parsed");
        if (R.path) {
          var j = R.path.lastIndexOf("/");
          j >= 0 && (R.path = R.path.substring(0, j + 1));
        }
        I = m(c(R), I);
      }
      return p(I);
    }
    t.computeSourceURL = U;
  }(Xi)), Xi;
}
var Wi = {}, ku;
function oh() {
  if (ku) return Wi;
  ku = 1;
  var t = /* @__PURE__ */ er(), s = Object.prototype.hasOwnProperty, r = typeof Map < "u";
  function o() {
    this._array = [], this._set = r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return o.fromArray = function(c, l) {
    for (var h = new o(), p = 0, m = c.length; p < m; p++)
      h.add(c[p], l);
    return h;
  }, o.prototype.size = function() {
    return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, o.prototype.add = function(c, l) {
    var h = r ? c : t.toSetString(c), p = r ? this.has(c) : s.call(this._set, h), m = this._array.length;
    (!p || l) && this._array.push(c), p || (r ? this._set.set(c, m) : this._set[h] = m);
  }, o.prototype.has = function(c) {
    if (r)
      return this._set.has(c);
    var l = t.toSetString(c);
    return s.call(this._set, l);
  }, o.prototype.indexOf = function(c) {
    if (r) {
      var l = this._set.get(c);
      if (l >= 0)
        return l;
    } else {
      var h = t.toSetString(c);
      if (s.call(this._set, h))
        return this._set[h];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, o.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, o.prototype.toArray = function() {
    return this._array.slice();
  }, Wi.ArraySet = o, Wi;
}
var Gi = {}, Lu;
function $0() {
  if (Lu) return Gi;
  Lu = 1;
  var t = /* @__PURE__ */ er();
  function s(o, u) {
    var c = o.generatedLine, l = u.generatedLine, h = o.generatedColumn, p = u.generatedColumn;
    return l > c || l == c && p >= h || t.compareByGeneratedPositionsInflated(o, u) <= 0;
  }
  function r() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return r.prototype.unsortedForEach = function(u, c) {
    this._array.forEach(u, c);
  }, r.prototype.add = function(u) {
    s(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, r.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, Gi.MappingList = r, Gi;
}
var Mu;
function uh() {
  if (Mu) return zi;
  Mu = 1;
  var t = /* @__PURE__ */ ah(), s = /* @__PURE__ */ er(), r = oh().ArraySet, o = $0().MappingList;
  function u(c) {
    c || (c = {}), this._file = s.getArg(c, "file", null), this._sourceRoot = s.getArg(c, "sourceRoot", null), this._skipValidation = s.getArg(c, "skipValidation", !1), this._ignoreInvalidMapping = s.getArg(c, "ignoreInvalidMapping", !1), this._sources = new r(), this._names = new r(), this._mappings = new o(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(l, h) {
    var p = l.sourceRoot, m = new u(Object.assign(h || {}, {
      file: l.file,
      sourceRoot: p
    }));
    return l.eachMapping(function(d) {
      var b = {
        generated: {
          line: d.generatedLine,
          column: d.generatedColumn
        }
      };
      d.source != null && (b.source = d.source, p != null && (b.source = s.relative(p, b.source)), b.original = {
        line: d.originalLine,
        column: d.originalColumn
      }, d.name != null && (b.name = d.name)), m.addMapping(b);
    }), l.sources.forEach(function(d) {
      var b = d;
      p !== null && (b = s.relative(p, d)), m._sources.has(b) || m._sources.add(b);
      var g = l.sourceContentFor(d);
      g != null && m.setSourceContent(d, g);
    }), m;
  }, u.prototype.addMapping = function(l) {
    var h = s.getArg(l, "generated"), p = s.getArg(l, "original", null), m = s.getArg(l, "source", null), d = s.getArg(l, "name", null);
    !this._skipValidation && this._validateMapping(h, p, m, d) === !1 || (m != null && (m = String(m), this._sources.has(m) || this._sources.add(m)), d != null && (d = String(d), this._names.has(d) || this._names.add(d)), this._mappings.add({
      generatedLine: h.line,
      generatedColumn: h.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: m,
      name: d
    }));
  }, u.prototype.setSourceContent = function(l, h) {
    var p = l;
    this._sourceRoot != null && (p = s.relative(this._sourceRoot, p)), h != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[s.toSetString(p)] = h) : this._sourcesContents && (delete this._sourcesContents[s.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(l, h, p) {
    var m = h;
    if (h == null) {
      if (l.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      m = l.file;
    }
    var d = this._sourceRoot;
    d != null && (m = s.relative(d, m));
    var b = new r(), g = new r();
    this._mappings.unsortedForEach(function(x) {
      if (x.source === m && x.originalLine != null) {
        var T = l.originalPositionFor({
          line: x.originalLine,
          column: x.originalColumn
        });
        T.source != null && (x.source = T.source, p != null && (x.source = s.join(p, x.source)), d != null && (x.source = s.relative(d, x.source)), x.originalLine = T.line, x.originalColumn = T.column, T.name != null && (x.name = T.name));
      }
      var P = x.source;
      P != null && !b.has(P) && b.add(P);
      var y = x.name;
      y != null && !g.has(y) && g.add(y);
    }, this), this._sources = b, this._names = g, l.sources.forEach(function(x) {
      var T = l.sourceContentFor(x);
      T != null && (p != null && (x = s.join(p, x)), d != null && (x = s.relative(d, x)), this.setSourceContent(x, T));
    }, this);
  }, u.prototype._validateMapping = function(l, h, p, m) {
    if (h && typeof h.line != "number" && typeof h.column != "number") {
      var d = "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";
      if (this._ignoreInvalidMapping)
        return typeof console < "u" && console.warn && console.warn(d), !1;
      throw new Error(d);
    }
    if (!(l && "line" in l && "column" in l && l.line > 0 && l.column >= 0 && !h && !p && !m)) {
      if (l && "line" in l && "column" in l && h && "line" in h && "column" in h && l.line > 0 && l.column >= 0 && h.line > 0 && h.column >= 0 && p)
        return;
      var d = "Invalid mapping: " + JSON.stringify({
        generated: l,
        source: p,
        original: h,
        name: m
      });
      if (this._ignoreInvalidMapping)
        return typeof console < "u" && console.warn && console.warn(d), !1;
      throw new Error(d);
    }
  }, u.prototype._serializeMappings = function() {
    for (var l = 0, h = 1, p = 0, m = 0, d = 0, b = 0, g = "", x, T, P, y, C = this._mappings.toArray(), N = 0, L = C.length; N < L; N++) {
      if (T = C[N], x = "", T.generatedLine !== h)
        for (l = 0; T.generatedLine !== h; )
          x += ";", h++;
      else if (N > 0) {
        if (!s.compareByGeneratedPositionsInflated(T, C[N - 1]))
          continue;
        x += ",";
      }
      x += t.encode(T.generatedColumn - l), l = T.generatedColumn, T.source != null && (y = this._sources.indexOf(T.source), x += t.encode(y - b), b = y, x += t.encode(T.originalLine - 1 - m), m = T.originalLine - 1, x += t.encode(T.originalColumn - p), p = T.originalColumn, T.name != null && (P = this._names.indexOf(T.name), x += t.encode(P - d), d = P)), g += x;
    }
    return g;
  }, u.prototype._generateSourcesContent = function(l, h) {
    return l.map(function(p) {
      if (!this._sourcesContents)
        return null;
      h != null && (p = s.relative(h, p));
      var m = s.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, m) ? this._sourcesContents[m] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var l = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (l.file = this._file), this._sourceRoot != null && (l.sourceRoot = this._sourceRoot), this._sourcesContents && (l.sourcesContent = this._generateSourcesContent(l.sources, l.sourceRoot)), l;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, zi.SourceMapGenerator = u, zi;
}
var Ns = {}, Ki = {}, Ru;
function V0() {
  return Ru || (Ru = 1, function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function s(r, o, u, c, l, h) {
      var p = Math.floor((o - r) / 2) + r, m = l(u, c[p], !0);
      return m === 0 ? p : m > 0 ? o - p > 1 ? s(p, o, u, c, l, h) : h == t.LEAST_UPPER_BOUND ? o < c.length ? o : -1 : p : p - r > 1 ? s(r, p, u, c, l, h) : h == t.LEAST_UPPER_BOUND ? p : r < 0 ? -1 : r;
    }
    t.search = function(o, u, c, l) {
      if (u.length === 0)
        return -1;
      var h = s(
        -1,
        u.length,
        o,
        u,
        c,
        l || t.GREATEST_LOWER_BOUND
      );
      if (h < 0)
        return -1;
      for (; h - 1 >= 0 && c(u[h], u[h - 1], !0) === 0; )
        --h;
      return h;
    };
  }(Ki)), Ki;
}
var Ji = {}, Du;
function j0() {
  if (Du) return Ji;
  Du = 1;
  function t(o) {
    function u(h, p, m) {
      var d = h[p];
      h[p] = h[m], h[m] = d;
    }
    function c(h, p) {
      return Math.round(h + Math.random() * (p - h));
    }
    function l(h, p, m, d) {
      if (m < d) {
        var b = c(m, d), g = m - 1;
        u(h, b, d);
        for (var x = h[d], T = m; T < d; T++)
          p(h[T], x, !1) <= 0 && (g += 1, u(h, g, T));
        u(h, g + 1, T);
        var P = g + 1;
        l(h, p, m, P - 1), l(h, p, P + 1, d);
      }
    }
    return l;
  }
  function s(o) {
    let u = t.toString();
    return new Function(`return ${u}`)()(o);
  }
  let r = /* @__PURE__ */ new WeakMap();
  return Ji.quickSort = function(o, u, c = 0) {
    let l = r.get(u);
    l === void 0 && (l = s(u), r.set(u, l)), l(o, u, c, o.length - 1);
  }, Ji;
}
var Fu;
function q0() {
  if (Fu) return Ns;
  Fu = 1;
  var t = /* @__PURE__ */ er(), s = /* @__PURE__ */ V0(), r = oh().ArraySet, o = /* @__PURE__ */ ah(), u = j0().quickSort;
  function c(b, g) {
    var x = b;
    return typeof b == "string" && (x = t.parseSourceMapInput(b)), x.sections != null ? new d(x, g) : new l(x, g);
  }
  c.fromSourceMap = function(b, g) {
    return l.fromSourceMap(b, g);
  }, c.prototype._version = 3, c.prototype.__generatedMappings = null, Object.defineProperty(c.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), c.prototype.__originalMappings = null, Object.defineProperty(c.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), c.prototype._charIsMappingSeparator = function(g, x) {
    var T = g.charAt(x);
    return T === ";" || T === ",";
  }, c.prototype._parseMappings = function(g, x) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(g, x, T) {
    var P = x || null, y = T || c.GENERATED_ORDER, C;
    switch (y) {
      case c.GENERATED_ORDER:
        C = this._generatedMappings;
        break;
      case c.ORIGINAL_ORDER:
        C = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    for (var N = this.sourceRoot, L = g.bind(P), F = this._names, M = this._sources, D = this._sourceMapURL, U = 0, v = C.length; U < v; U++) {
      var I = C[U], O = I.source === null ? null : M.at(I.source);
      O !== null && (O = t.computeSourceURL(N, O, D)), L({
        source: O,
        generatedLine: I.generatedLine,
        generatedColumn: I.generatedColumn,
        originalLine: I.originalLine,
        originalColumn: I.originalColumn,
        name: I.name === null ? null : F.at(I.name)
      });
    }
  }, c.prototype.allGeneratedPositionsFor = function(g) {
    var x = t.getArg(g, "line"), T = {
      source: t.getArg(g, "source"),
      originalLine: x,
      originalColumn: t.getArg(g, "column", 0)
    };
    if (T.source = this._findSourceIndex(T.source), T.source < 0)
      return [];
    var P = [], y = this._findMapping(
      T,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      s.LEAST_UPPER_BOUND
    );
    if (y >= 0) {
      var C = this._originalMappings[y];
      if (g.column === void 0)
        for (var N = C.originalLine; C && C.originalLine === N; )
          P.push({
            line: t.getArg(C, "generatedLine", null),
            column: t.getArg(C, "generatedColumn", null),
            lastColumn: t.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++y];
      else
        for (var L = C.originalColumn; C && C.originalLine === x && C.originalColumn == L; )
          P.push({
            line: t.getArg(C, "generatedLine", null),
            column: t.getArg(C, "generatedColumn", null),
            lastColumn: t.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++y];
    }
    return P;
  }, Ns.SourceMapConsumer = c;
  function l(b, g) {
    var x = b;
    typeof b == "string" && (x = t.parseSourceMapInput(b));
    var T = t.getArg(x, "version"), P = t.getArg(x, "sources"), y = t.getArg(x, "names", []), C = t.getArg(x, "sourceRoot", null), N = t.getArg(x, "sourcesContent", null), L = t.getArg(x, "mappings"), F = t.getArg(x, "file", null);
    if (T != this._version)
      throw new Error("Unsupported version: " + T);
    C && (C = t.normalize(C)), P = P.map(String).map(t.normalize).map(function(M) {
      return C && t.isAbsolute(C) && t.isAbsolute(M) ? t.relative(C, M) : M;
    }), this._names = r.fromArray(y.map(String), !0), this._sources = r.fromArray(P, !0), this._absoluteSources = this._sources.toArray().map(function(M) {
      return t.computeSourceURL(C, M, g);
    }), this.sourceRoot = C, this.sourcesContent = N, this._mappings = L, this._sourceMapURL = g, this.file = F;
  }
  l.prototype = Object.create(c.prototype), l.prototype.consumer = c, l.prototype._findSourceIndex = function(b) {
    var g = b;
    if (this.sourceRoot != null && (g = t.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var x;
    for (x = 0; x < this._absoluteSources.length; ++x)
      if (this._absoluteSources[x] == b)
        return x;
    return -1;
  }, l.fromSourceMap = function(g, x) {
    var T = Object.create(l.prototype), P = T._names = r.fromArray(g._names.toArray(), !0), y = T._sources = r.fromArray(g._sources.toArray(), !0);
    T.sourceRoot = g._sourceRoot, T.sourcesContent = g._generateSourcesContent(
      T._sources.toArray(),
      T.sourceRoot
    ), T.file = g._file, T._sourceMapURL = x, T._absoluteSources = T._sources.toArray().map(function(v) {
      return t.computeSourceURL(T.sourceRoot, v, x);
    });
    for (var C = g._mappings.toArray().slice(), N = T.__generatedMappings = [], L = T.__originalMappings = [], F = 0, M = C.length; F < M; F++) {
      var D = C[F], U = new h();
      U.generatedLine = D.generatedLine, U.generatedColumn = D.generatedColumn, D.source && (U.source = y.indexOf(D.source), U.originalLine = D.originalLine, U.originalColumn = D.originalColumn, D.name && (U.name = P.indexOf(D.name)), L.push(U)), N.push(U);
    }
    return u(T.__originalMappings, t.compareByOriginalPositions), T;
  }, l.prototype._version = 3, Object.defineProperty(l.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function h() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  const p = t.compareByGeneratedPositionsDeflatedNoLine;
  function m(b, g) {
    let x = b.length, T = b.length - g;
    if (!(T <= 1))
      if (T == 2) {
        let P = b[g], y = b[g + 1];
        p(P, y) > 0 && (b[g] = y, b[g + 1] = P);
      } else if (T < 20)
        for (let P = g; P < x; P++)
          for (let y = P; y > g; y--) {
            let C = b[y - 1], N = b[y];
            if (p(C, N) <= 0)
              break;
            b[y - 1] = N, b[y] = C;
          }
      else
        u(b, p, g);
  }
  l.prototype._parseMappings = function(g, x) {
    var T = 1, P = 0, y = 0, C = 0, N = 0, L = 0, F = g.length, M = 0, D = {}, U = [], v = [], I, O, R, j;
    let W = 0;
    for (; M < F; )
      if (g.charAt(M) === ";")
        T++, M++, P = 0, m(v, W), W = v.length;
      else if (g.charAt(M) === ",")
        M++;
      else {
        for (I = new h(), I.generatedLine = T, R = M; R < F && !this._charIsMappingSeparator(g, R); R++)
          ;
        for (g.slice(M, R), O = []; M < R; )
          o.decode(g, M, D), j = D.value, M = D.rest, O.push(j);
        if (O.length === 2)
          throw new Error("Found a source, but no line and column");
        if (O.length === 3)
          throw new Error("Found a source and line, but no column");
        if (I.generatedColumn = P + O[0], P = I.generatedColumn, O.length > 1 && (I.source = N + O[1], N += O[1], I.originalLine = y + O[2], y = I.originalLine, I.originalLine += 1, I.originalColumn = C + O[3], C = I.originalColumn, O.length > 4 && (I.name = L + O[4], L += O[4])), v.push(I), typeof I.originalLine == "number") {
          let $ = I.source;
          for (; U.length <= $; )
            U.push(null);
          U[$] === null && (U[$] = []), U[$].push(I);
        }
      }
    m(v, W), this.__generatedMappings = v;
    for (var ee = 0; ee < U.length; ee++)
      U[ee] != null && u(U[ee], t.compareByOriginalPositionsNoSource);
    this.__originalMappings = [].concat(...U);
  }, l.prototype._findMapping = function(g, x, T, P, y, C) {
    if (g[T] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[T]);
    if (g[P] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[P]);
    return s.search(g, x, y, C);
  }, l.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var x = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var T = this._generatedMappings[g + 1];
        if (x.generatedLine === T.generatedLine) {
          x.lastGeneratedColumn = T.generatedColumn - 1;
          continue;
        }
      }
      x.lastGeneratedColumn = 1 / 0;
    }
  }, l.prototype.originalPositionFor = function(g) {
    var x = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, T = this._findMapping(
      x,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (T >= 0) {
      var P = this._generatedMappings[T];
      if (P.generatedLine === x.generatedLine) {
        var y = t.getArg(P, "source", null);
        y !== null && (y = this._sources.at(y), y = t.computeSourceURL(this.sourceRoot, y, this._sourceMapURL));
        var C = t.getArg(P, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: y,
          line: t.getArg(P, "originalLine", null),
          column: t.getArg(P, "originalColumn", null),
          name: C
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, l.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, l.prototype.sourceContentFor = function(g, x) {
    if (!this.sourcesContent)
      return null;
    var T = this._findSourceIndex(g);
    if (T >= 0)
      return this.sourcesContent[T];
    var P = g;
    this.sourceRoot != null && (P = t.relative(this.sourceRoot, P));
    var y;
    if (this.sourceRoot != null && (y = t.urlParse(this.sourceRoot))) {
      var C = P.replace(/^file:\/\//, "");
      if (y.scheme == "file" && this._sources.has(C))
        return this.sourcesContent[this._sources.indexOf(C)];
      if ((!y.path || y.path == "/") && this._sources.has("/" + P))
        return this.sourcesContent[this._sources.indexOf("/" + P)];
    }
    if (x)
      return null;
    throw new Error('"' + P + '" is not in the SourceMap.');
  }, l.prototype.generatedPositionFor = function(g) {
    var x = t.getArg(g, "source");
    if (x = this._findSourceIndex(x), x < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var T = {
      source: x,
      originalLine: t.getArg(g, "line"),
      originalColumn: t.getArg(g, "column")
    }, P = this._findMapping(
      T,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (P >= 0) {
      var y = this._originalMappings[P];
      if (y.source === T.source)
        return {
          line: t.getArg(y, "generatedLine", null),
          column: t.getArg(y, "generatedColumn", null),
          lastColumn: t.getArg(y, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Ns.BasicSourceMapConsumer = l;
  function d(b, g) {
    var x = b;
    typeof b == "string" && (x = t.parseSourceMapInput(b));
    var T = t.getArg(x, "version"), P = t.getArg(x, "sections");
    if (T != this._version)
      throw new Error("Unsupported version: " + T);
    this._sources = new r(), this._names = new r();
    var y = {
      line: -1,
      column: 0
    };
    this._sections = P.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var N = t.getArg(C, "offset"), L = t.getArg(N, "line"), F = t.getArg(N, "column");
      if (L < y.line || L === y.line && F < y.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return y = N, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: L + 1,
          generatedColumn: F + 1
        },
        consumer: new c(t.getArg(C, "map"), g)
      };
    });
  }
  return d.prototype = Object.create(c.prototype), d.prototype.constructor = c, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
    get: function() {
      for (var b = [], g = 0; g < this._sections.length; g++)
        for (var x = 0; x < this._sections[g].consumer.sources.length; x++)
          b.push(this._sections[g].consumer.sources[x]);
      return b;
    }
  }), d.prototype.originalPositionFor = function(g) {
    var x = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, T = s.search(
      x,
      this._sections,
      function(y, C) {
        var N = y.generatedLine - C.generatedOffset.generatedLine;
        return N || y.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), P = this._sections[T];
    return P ? P.consumer.originalPositionFor({
      line: x.generatedLine - (P.generatedOffset.generatedLine - 1),
      column: x.generatedColumn - (P.generatedOffset.generatedLine === x.generatedLine ? P.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, d.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, d.prototype.sourceContentFor = function(g, x) {
    for (var T = 0; T < this._sections.length; T++) {
      var P = this._sections[T], y = P.consumer.sourceContentFor(g, !0);
      if (y || y === "")
        return y;
    }
    if (x)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, d.prototype.generatedPositionFor = function(g) {
    for (var x = 0; x < this._sections.length; x++) {
      var T = this._sections[x];
      if (T.consumer._findSourceIndex(t.getArg(g, "source")) !== -1) {
        var P = T.consumer.generatedPositionFor(g);
        if (P) {
          var y = {
            line: P.line + (T.generatedOffset.generatedLine - 1),
            column: P.column + (T.generatedOffset.generatedLine === P.line ? T.generatedOffset.generatedColumn - 1 : 0)
          };
          return y;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, d.prototype._parseMappings = function(g, x) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var T = 0; T < this._sections.length; T++)
      for (var P = this._sections[T], y = P.consumer._generatedMappings, C = 0; C < y.length; C++) {
        var N = y[C], L = P.consumer._sources.at(N.source);
        L !== null && (L = t.computeSourceURL(P.consumer.sourceRoot, L, this._sourceMapURL)), this._sources.add(L), L = this._sources.indexOf(L);
        var F = null;
        N.name && (F = P.consumer._names.at(N.name), this._names.add(F), F = this._names.indexOf(F));
        var M = {
          source: L,
          generatedLine: N.generatedLine + (P.generatedOffset.generatedLine - 1),
          generatedColumn: N.generatedColumn + (P.generatedOffset.generatedLine === N.generatedLine ? P.generatedOffset.generatedColumn - 1 : 0),
          originalLine: N.originalLine,
          originalColumn: N.originalColumn,
          name: F
        };
        this.__generatedMappings.push(M), typeof M.originalLine == "number" && this.__originalMappings.push(M);
      }
    u(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), u(this.__originalMappings, t.compareByOriginalPositions);
  }, Ns.IndexedSourceMapConsumer = d, Ns;
}
var Yi = {}, Bu;
function H0() {
  if (Bu) return Yi;
  Bu = 1;
  var t = uh().SourceMapGenerator, s = /* @__PURE__ */ er(), r = /(\r?\n)/, o = 10, u = "$$$isSourceNode$$$";
  function c(l, h, p, m, d) {
    this.children = [], this.sourceContents = {}, this.line = l ?? null, this.column = h ?? null, this.source = p ?? null, this.name = d ?? null, this[u] = !0, m != null && this.add(m);
  }
  return c.fromStringWithSourceMap = function(h, p, m) {
    var d = new c(), b = h.split(r), g = 0, x = function() {
      var N = F(), L = F() || "";
      return N + L;
      function F() {
        return g < b.length ? b[g++] : void 0;
      }
    }, T = 1, P = 0, y = null;
    return p.eachMapping(function(N) {
      if (y !== null)
        if (T < N.generatedLine)
          C(y, x()), T++, P = 0;
        else {
          var L = b[g] || "", F = L.substr(0, N.generatedColumn - P);
          b[g] = L.substr(N.generatedColumn - P), P = N.generatedColumn, C(y, F), y = N;
          return;
        }
      for (; T < N.generatedLine; )
        d.add(x()), T++;
      if (P < N.generatedColumn) {
        var L = b[g] || "";
        d.add(L.substr(0, N.generatedColumn)), b[g] = L.substr(N.generatedColumn), P = N.generatedColumn;
      }
      y = N;
    }, this), g < b.length && (y && C(y, x()), d.add(b.splice(g).join(""))), p.sources.forEach(function(N) {
      var L = p.sourceContentFor(N);
      L != null && (m != null && (N = s.join(m, N)), d.setSourceContent(N, L));
    }), d;
    function C(N, L) {
      if (N === null || N.source === void 0)
        d.add(L);
      else {
        var F = m ? s.join(m, N.source) : N.source;
        d.add(new c(
          N.originalLine,
          N.originalColumn,
          F,
          L,
          N.name
        ));
      }
    }
  }, c.prototype.add = function(h) {
    if (Array.isArray(h))
      h.forEach(function(p) {
        this.add(p);
      }, this);
    else if (h[u] || typeof h == "string")
      h && this.children.push(h);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + h
      );
    return this;
  }, c.prototype.prepend = function(h) {
    if (Array.isArray(h))
      for (var p = h.length - 1; p >= 0; p--)
        this.prepend(h[p]);
    else if (h[u] || typeof h == "string")
      this.children.unshift(h);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + h
      );
    return this;
  }, c.prototype.walk = function(h) {
    for (var p, m = 0, d = this.children.length; m < d; m++)
      p = this.children[m], p[u] ? p.walk(h) : p !== "" && h(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(h) {
    var p, m, d = this.children.length;
    if (d > 0) {
      for (p = [], m = 0; m < d - 1; m++)
        p.push(this.children[m]), p.push(h);
      p.push(this.children[m]), this.children = p;
    }
    return this;
  }, c.prototype.replaceRight = function(h, p) {
    var m = this.children[this.children.length - 1];
    return m[u] ? m.replaceRight(h, p) : typeof m == "string" ? this.children[this.children.length - 1] = m.replace(h, p) : this.children.push("".replace(h, p)), this;
  }, c.prototype.setSourceContent = function(h, p) {
    this.sourceContents[s.toSetString(h)] = p;
  }, c.prototype.walkSourceContents = function(h) {
    for (var p = 0, m = this.children.length; p < m; p++)
      this.children[p][u] && this.children[p].walkSourceContents(h);
    for (var d = Object.keys(this.sourceContents), p = 0, m = d.length; p < m; p++)
      h(s.fromSetString(d[p]), this.sourceContents[d[p]]);
  }, c.prototype.toString = function() {
    var h = "";
    return this.walk(function(p) {
      h += p;
    }), h;
  }, c.prototype.toStringWithSourceMap = function(h) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, m = new t(h), d = !1, b = null, g = null, x = null, T = null;
    return this.walk(function(P, y) {
      p.code += P, y.source !== null && y.line !== null && y.column !== null ? ((b !== y.source || g !== y.line || x !== y.column || T !== y.name) && m.addMapping({
        source: y.source,
        original: {
          line: y.line,
          column: y.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: y.name
      }), b = y.source, g = y.line, x = y.column, T = y.name, d = !0) : d && (m.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), b = null, d = !1);
      for (var C = 0, N = P.length; C < N; C++)
        P.charCodeAt(C) === o ? (p.line++, p.column = 0, C + 1 === N ? (b = null, d = !1) : d && m.addMapping({
          source: y.source,
          original: {
            line: y.line,
            column: y.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: y.name
        })) : p.column++;
    }), this.walkSourceContents(function(P, y) {
      m.setSourceContent(P, y);
    }), { code: p.code, map: m };
  }, Yi.SourceNode = c, Yi;
}
var Uu;
function li() {
  return Uu || (Uu = 1, Is.SourceMapGenerator = uh().SourceMapGenerator, Is.SourceMapConsumer = q0().SourceMapConsumer, Is.SourceNode = H0().SourceNode), Is;
}
var wr = /* @__PURE__ */ li();
const ci = "/*@__PURE__*/", vr = (t) => `${Be[t]}: _${Be[t]}`;
function $u(t, {
  mode: s = "function",
  prefixIdentifiers: r = s === "module",
  sourceMap: o = !1,
  filename: u = "template.vue.html",
  scopeId: c = null,
  optimizeImports: l = !1,
  runtimeGlobalName: h = "Vue",
  runtimeModuleName: p = "vue",
  ssrRuntimeModuleName: m = "vue/server-renderer",
  ssr: d = !1,
  isTS: b = !1,
  inSSR: g = !1
}) {
  const x = {
    mode: s,
    prefixIdentifiers: r,
    sourceMap: o,
    filename: u,
    scopeId: c,
    optimizeImports: l,
    runtimeGlobalName: h,
    runtimeModuleName: p,
    ssrRuntimeModuleName: m,
    ssr: d,
    isTS: b,
    inSSR: g,
    source: t.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(y) {
      return `_${Be[y]}`;
    },
    push(y, C = -2, N) {
      if (x.code += y, x.map) {
        if (N) {
          let L;
          if (N.type === 4 && !N.isStatic) {
            const F = N.content.replace(/^_ctx\./, "");
            F !== N.content && pt(F) && (L = F);
          }
          N.loc.source && P(N.loc.start, L);
        }
        C === -3 ? Aa(x, y) : (x.offset += y.length, C === -2 ? x.column += y.length : (C === -1 && (C = y.length - 1), x.line++, x.column = y.length - C)), N && N.loc !== ye && N.loc.source && P(N.loc.end);
      }
    },
    indent() {
      T(++x.indentLevel);
    },
    deindent(y = !1) {
      y ? --x.indentLevel : T(--x.indentLevel);
    },
    newline() {
      T(x.indentLevel);
    }
  };
  function T(y) {
    x.push(
      `
` + "  ".repeat(y),
      0
      /* Start */
    );
  }
  function P(y, C = null) {
    const { _names: N, _mappings: L } = x.map;
    C !== null && !N.has(C) && N.add(C), L.add({
      originalLine: y.line,
      originalColumn: y.column - 1,
      // source-map column is 0 based
      generatedLine: x.line,
      generatedColumn: x.column - 1,
      source: u,
      name: C
    });
  }
  return o && (x.map = new wr.SourceMapGenerator(), x.map.setSourceContent(u, x.source), x.map._sources.add(u)), x;
}
function Ia(t, s = {}) {
  const r = $u(t, s);
  s.onContextCreated && s.onContextCreated(r);
  const {
    mode: o,
    push: u,
    prefixIdentifiers: c,
    indent: l,
    deindent: h,
    newline: p,
    scopeId: m,
    ssr: d
  } = r, b = Array.from(t.helpers), g = b.length > 0, x = !c && o !== "module", T = m != null && o === "module", P = !!s.inline, y = P ? $u(t, s) : r;
  o === "module" ? X0(t, y, T, P) : z0(t, y);
  const C = d ? "ssrRender" : "render", N = d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  s.bindingMetadata && !s.inline && N.push("$props", "$setup", "$data", "$options");
  const L = s.isTS ? N.map((F) => `${F}: any`).join(",") : N.join(", ");
  if (u(P ? `(${L}) => {` : `function ${C}(${L}) {`), l(), x && (u("with (_ctx) {"), l(), g && (u(
    `const { ${b.map(vr).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), p())), t.components.length && (Vu(t.components, "component", r), (t.directives.length || t.temps > 0) && p()), t.directives.length && (Vu(t.directives, "directive", r), t.temps > 0 && p()), t.temps > 0) {
    u("let ");
    for (let F = 0; F < t.temps; F++)
      u(`${F > 0 ? ", " : ""}_temp${F}`);
  }
  return (t.components.length || t.directives.length || t.temps) && (u(
    `
`,
    0
    /* Start */
  ), p()), d || u("return "), t.codegenNode ? me(t.codegenNode, r) : u("null"), x && (h(), u("}")), h(), u("}"), {
    ast: t,
    code: r.code,
    preamble: P ? y.code : "",
    map: r.map ? r.map.toJSON() : void 0
  };
}
function z0(t, s) {
  const {
    ssr: r,
    prefixIdentifiers: o,
    push: u,
    newline: c,
    runtimeModuleName: l,
    runtimeGlobalName: h,
    ssrRuntimeModuleName: p
  } = s, m = r ? `require(${JSON.stringify(l)})` : h, d = Array.from(t.helpers);
  if (d.length > 0) {
    if (o)
      u(
        `const { ${d.map(vr).join(", ")} } = ${m}
`,
        -1
        /* End */
      );
    else if (u(
      `const _Vue = ${m}
`,
      -1
      /* End */
    ), t.hoists.length) {
      const b = [
        Gs,
        Xr,
        ms,
        Wr,
        Gr
      ].filter((g) => d.includes(g)).map(vr).join(", ");
      u(
        `const { ${b} } = _Vue
`,
        -1
        /* End */
      );
    }
  }
  t.ssrHelpers && t.ssrHelpers.length && u(
    `const { ${t.ssrHelpers.map(vr).join(", ")} } = require("${p}")
`,
    -1
    /* End */
  ), lh(t.hoists, s), c(), u("return ");
}
function X0(t, s, r, o) {
  const {
    push: u,
    newline: c,
    optimizeImports: l,
    runtimeModuleName: h,
    ssrRuntimeModuleName: p
  } = s;
  if (t.helpers.size) {
    const m = Array.from(t.helpers);
    l ? (u(
      `import { ${m.map((d) => Be[d]).join(", ")} } from ${JSON.stringify(h)}
`,
      -1
      /* End */
    ), u(
      `
// Binding optimization for webpack code-split
const ${m.map((d) => `_${Be[d]} = ${Be[d]}`).join(", ")}
`,
      -1
      /* End */
    )) : u(
      `import { ${m.map((d) => `${Be[d]} as _${Be[d]}`).join(", ")} } from ${JSON.stringify(h)}
`,
      -1
      /* End */
    );
  }
  t.ssrHelpers && t.ssrHelpers.length && u(
    `import { ${t.ssrHelpers.map((m) => `${Be[m]} as _${Be[m]}`).join(", ")} } from "${p}"
`,
    -1
    /* End */
  ), t.imports.length && (W0(t.imports, s), c()), lh(t.hoists, s), c(), o || u("export ");
}
function Vu(t, s, { helper: r, push: o, newline: u, isTS: c }) {
  const l = r(
    s === "component" ? Fs : Kr
  );
  for (let h = 0; h < t.length; h++) {
    let p = t[h];
    const m = p.endsWith("__self");
    m && (p = p.slice(0, -6)), o(
      `const ${js(p, s)} = ${l}(${JSON.stringify(p)}${m ? ", true" : ""})${c ? "!" : ""}`
    ), h < t.length - 1 && u();
  }
}
function lh(t, s) {
  if (!t.length)
    return;
  s.pure = !0;
  const { push: r, newline: o } = s;
  o();
  for (let u = 0; u < t.length; u++) {
    const c = t[u];
    c && (r(`const _hoisted_${u + 1} = `), me(c, s), o());
  }
  s.pure = !1;
}
function W0(t, s) {
  t.length && t.forEach((r) => {
    s.push("import "), me(r.exp, s), s.push(` from '${r.path}'`), s.newline();
  });
}
function G0(t) {
  return ne(t) || t.type === 4 || t.type === 2 || t.type === 5 || t.type === 8;
}
function hi(t, s) {
  const r = t.length > 3 || t.some((o) => Ae(o) || !G0(o));
  s.push("["), r && s.indent(), bs(t, s, r), r && s.deindent(), s.push("]");
}
function bs(t, s, r = !1, o = !0) {
  const { push: u, newline: c } = s;
  for (let l = 0; l < t.length; l++) {
    const h = t[l];
    ne(h) ? u(
      h,
      -3
      /* Unknown */
    ) : Ae(h) ? hi(h, s) : me(h, s), l < t.length - 1 && (r ? (o && u(","), c()) : o && u(", "));
  }
}
function me(t, s) {
  if (ne(t)) {
    s.push(
      t,
      -3
      /* Unknown */
    );
    return;
  }
  if (vt(t)) {
    s.push(s.helper(t));
    return;
  }
  switch (t.type) {
    case 1:
    case 9:
    case 11:
      Hn(
        t.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), me(t.codegenNode, s);
      break;
    case 2:
      K0(t, s);
      break;
    case 4:
      ch(t, s);
      break;
    case 5:
      J0(t, s);
      break;
    case 12:
      me(t.codegenNode, s);
      break;
    case 8:
      hh(t, s);
      break;
    case 3:
      Q0(t, s);
      break;
    case 13:
      Z0(t, s);
      break;
    case 14:
      tm(t, s);
      break;
    case 15:
      sm(t, s);
      break;
    case 17:
      rm(t, s);
      break;
    case 18:
      im(t, s);
      break;
    case 19:
      nm(t, s);
      break;
    case 20:
      am(t, s);
      break;
    case 21:
      bs(t.body, s, !0, !1);
      break;
    case 22:
      om(t, s);
      break;
    case 23:
      ph(t, s);
      break;
    case 24:
      um(t, s);
      break;
    case 25:
      lm(t, s);
      break;
    case 26:
      cm(t, s);
      break;
    case 10:
      break;
    default:
      return Hn(!1, `unhandled codegen node type: ${t.type}`), t;
  }
}
function K0(t, s) {
  s.push(JSON.stringify(t.content), -3, t);
}
function ch(t, s) {
  const { content: r, isStatic: o } = t;
  s.push(
    o ? JSON.stringify(r) : r,
    -3,
    t
  );
}
function J0(t, s) {
  const { push: r, helper: o, pure: u } = s;
  u && r(ci), r(`${o(Js)}(`), me(t.content, s), r(")");
}
function hh(t, s) {
  for (let r = 0; r < t.children.length; r++) {
    const o = t.children[r];
    ne(o) ? s.push(
      o,
      -3
      /* Unknown */
    ) : me(o, s);
  }
}
function Y0(t, s) {
  const { push: r } = s;
  if (t.type === 8)
    r("["), hh(t, s), r("]");
  else if (t.isStatic) {
    const o = pt(t.content) ? t.content : JSON.stringify(t.content);
    r(o, -2, t);
  } else
    r(`[${t.content}]`, -3, t);
}
function Q0(t, s) {
  const { push: r, helper: o, pure: u } = s;
  u && r(ci), r(
    `${o(ms)}(${JSON.stringify(t.content)})`,
    -3,
    t
  );
}
function Z0(t, s) {
  const { push: r, helper: o, pure: u } = s, {
    tag: c,
    props: l,
    children: h,
    patchFlag: p,
    dynamicProps: m,
    directives: d,
    isBlock: b,
    disableTracking: g,
    isComponent: x
  } = t;
  let T;
  if (p)
    if (p < 0)
      T = p + ` /* ${Sr[p]} */`;
    else {
      const y = Object.keys(Sr).map(Number).filter((C) => C > 0 && p & C).map((C) => Sr[C]).join(", ");
      T = p + ` /* ${y} */`;
    }
  d && r(o(Jr) + "("), b && r(`(${o(At)}(${g ? "true" : ""}), `), u && r(ci);
  const P = b ? Ht(s.inSSR, x) : qt(s.inSSR, x);
  r(o(P) + "(", -2, t), bs(
    em([c, l, h, T, m]),
    s
  ), r(")"), b && r(")"), d && (r(", "), me(d, s), r(")"));
}
function em(t) {
  let s = t.length;
  for (; s-- && t[s] == null; )
    ;
  return t.slice(0, s + 1).map((r) => r || "null");
}
function tm(t, s) {
  const { push: r, helper: o, pure: u } = s, c = ne(t.callee) ? t.callee : o(t.callee);
  u && r(ci), r(c + "(", -2, t), bs(t.arguments, s), r(")");
}
function sm(t, s) {
  const { push: r, indent: o, deindent: u, newline: c } = s, { properties: l } = t;
  if (!l.length) {
    r("{}", -2, t);
    return;
  }
  const h = l.length > 1 || l.some((p) => p.value.type !== 4);
  r(h ? "{" : "{ "), h && o();
  for (let p = 0; p < l.length; p++) {
    const { key: m, value: d } = l[p];
    Y0(m, s), r(": "), me(d, s), p < l.length - 1 && (r(","), c());
  }
  h && u(), r(h ? "}" : " }");
}
function rm(t, s) {
  hi(t.elements, s);
}
function im(t, s) {
  const { push: r, indent: o, deindent: u } = s, { params: c, returns: l, body: h, newline: p, isSlot: m } = t;
  m && r(`_${Be[ti]}(`), r("(", -2, t), Ae(c) ? bs(c, s) : c && me(c, s), r(") => "), (p || h) && (r("{"), o()), l ? (p && r("return "), Ae(l) ? hi(l, s) : me(l, s)) : h && me(h, s), (p || h) && (u(), r("}")), m && r(")");
}
function nm(t, s) {
  const { test: r, consequent: o, alternate: u, newline: c } = t, { push: l, indent: h, deindent: p, newline: m } = s;
  if (r.type === 4) {
    const b = !pt(r.content);
    b && l("("), ch(r, s), b && l(")");
  } else
    l("("), me(r, s), l(")");
  c && h(), s.indentLevel++, c || l(" "), l("? "), me(o, s), s.indentLevel--, c && m(), c || l(" "), l(": ");
  const d = u.type === 19;
  d || s.indentLevel++, me(u, s), d || s.indentLevel--, c && p(
    !0
    /* without newline */
  );
}
function am(t, s) {
  const { push: r, helper: o, indent: u, deindent: c, newline: l } = s, { needPauseTracking: h, needArraySpread: p } = t;
  p && r("[...("), r(`_cache[${t.index}] || (`), h && (u(), r(`${o(Bs)}(-1`), t.inVOnce && r(", true"), r("),"), l(), r("(")), r(`_cache[${t.index}] = `), me(t.value, s), h && (r(`).cacheIndex = ${t.index},`), l(), r(`${o(Bs)}(1),`), l(), r(`_cache[${t.index}]`), c()), r(")"), p && r(")]");
}
function om(t, s) {
  const { push: r, indent: o, deindent: u } = s;
  r("`");
  const c = t.elements.length, l = c > 3;
  for (let h = 0; h < c; h++) {
    const p = t.elements[h];
    ne(p) ? r(
      p.replace(/(`|\$|\\)/g, "\\$1"),
      -3
      /* Unknown */
    ) : (r("${"), l && o(), me(p, s), l && u(), r("}"));
  }
  r("`");
}
function ph(t, s) {
  const { push: r, indent: o, deindent: u } = s, { test: c, consequent: l, alternate: h } = t;
  r("if ("), me(c, s), r(") {"), o(), me(l, s), u(), r("}"), h && (r(" else "), h.type === 23 ? ph(h, s) : (r("{"), o(), me(h, s), u(), r("}")));
}
function um(t, s) {
  me(t.left, s), s.push(" = "), me(t.right, s);
}
function lm(t, s) {
  s.push("("), bs(t.expressions, s), s.push(")");
}
function cm({ returns: t }, s) {
  s.push("return "), Ae(t) ? hi(t, s) : me(t, s);
}
const hm = /* @__PURE__ */ Oe("true,false,null,this"), Na = (t, s) => {
  if (t.type === 5)
    t.content = Ce(
      t.content,
      s
    );
  else if (t.type === 1) {
    const r = Ee(t, "memo");
    for (let o = 0; o < t.props.length; o++) {
      const u = t.props[o];
      if (u.type === 7 && u.name !== "for") {
        const c = u.exp, l = u.arg;
        c && c.type === 4 && !(u.name === "on" && l) && // key has been processed in transformFor(vMemo + vFor)
        !(r && l && l.type === 4 && l.content === "key") && (u.exp = Ce(
          c,
          s,
          // slot args must be processed as function params
          u.name === "slot"
        )), l && l.type === 4 && !l.isStatic && (u.arg = Ce(l, s));
      }
    }
  }
};
function Ce(t, s, r = !1, o = !1, u = Object.create(s.identifiers)) {
  if (!s.prefixIdentifiers || !t.content.trim())
    return t;
  const { inline: c, bindingMetadata: l } = s, h = (P, y, C) => {
    const N = hd(l, P) && l[P];
    if (c) {
      const L = y && y.type === "AssignmentExpression" && y.left === C, F = y && y.type === "UpdateExpression" && y.argument === C, M = y && xa(y, b), D = y && Uc(b), U = (v) => {
        const I = `${s.helperString(Us)}(${v})`;
        return D ? `(${I})` : I;
      };
      if (ju(N) || N === "setup-reactive-const" || u[P])
        return P;
      if (N === "setup-ref")
        return `${P}.value`;
      if (N === "setup-maybe-ref")
        return L || F || M ? `${P}.value` : U(P);
      if (N === "setup-let")
        if (L) {
          const { right: v, operator: I } = y, O = p.slice(v.start - 1, v.end - 1), R = pi(
            Ce(
              z(O, !1),
              s,
              !1,
              !1,
              g
            )
          );
          return `${s.helperString($s)}(${P})${s.isTS ? ` //@ts-ignore
` : ""} ? ${P}.value ${I} ${R} : ${P}`;
        } else if (F) {
          C.start = y.start, C.end = y.end;
          const { prefix: v, operator: I } = y, O = v ? I : "", R = v ? "" : I;
          return `${s.helperString($s)}(${P})${s.isTS ? ` //@ts-ignore
` : ""} ? ${O}${P}.value${R} : ${O}${P}${R}`;
        } else return M ? P : U(P);
      else {
        if (N === "props")
          return Su(P);
        if (N === "props-aliased")
          return Su(l.__propsAliases[P]);
      }
    } else {
      if (N && N.startsWith("setup") || N === "literal-const")
        return `$setup.${P}`;
      if (N === "props-aliased")
        return `$props['${l.__propsAliases[P]}']`;
      if (N)
        return `$${N}.${P}`;
    }
    return `_ctx.${P}`;
  }, p = t.content;
  let m = t.ast;
  if (m === !1)
    return t;
  if (m === null || !m && pt(p)) {
    const P = s.identifiers[p], y = mc(p), C = hm(p);
    return !r && !P && !C && (!y || l[p]) ? (ju(l[p]) && (t.constType = 1), t.content = h(p)) : P || (C ? t.constType = 3 : t.constType = 2), t;
  }
  if (!m) {
    const P = o ? ` ${p} ` : `(${p})${r ? "=>{}" : ""}`;
    try {
      m = Ut.parseExpression(P, {
        sourceType: "module",
        plugins: s.expressionPlugins
      });
    } catch (y) {
      return s.onError(
        ae(
          45,
          t.loc,
          void 0,
          y.message
        )
      ), t;
    }
  }
  const d = [], b = [], g = Object.create(s.identifiers);
  Fc(
    m,
    (P, y, C, N, L) => {
      if (zc(P, y))
        return;
      const F = N && pm(P);
      F && !L ? (Sa(y) && y.shorthand && (P.prefix = `${P.name}: `), P.name = h(P.name, y, P), d.push(P)) : (!(F && L) && (!y || y.type !== "CallExpression" && y.type !== "NewExpression" && y.type !== "MemberExpression") && (P.isConstant = !0), d.push(P));
    },
    !0,
    // invoke on ALL identifiers
    b,
    g
  );
  const x = [];
  d.sort((P, y) => P.start - y.start), d.forEach((P, y) => {
    const C = P.start - 1, N = P.end - 1, L = d[y - 1], F = p.slice(L ? L.end - 1 : 0, C);
    (F.length || P.prefix) && x.push(F + (P.prefix || ""));
    const M = p.slice(C, N);
    x.push(
      z(
        P.name,
        !1,
        {
          start: qn(t.loc.start, M, C),
          end: qn(t.loc.start, M, N),
          source: M
        },
        P.isConstant ? 3 : 0
      )
    ), y === d.length - 1 && N < p.length && x.push(p.slice(N));
  });
  let T;
  return x.length ? (T = we(x, t.loc), T.ast = m) : (T = t, T.constType = 3), T.identifiers = Object.keys(g), T;
}
function pm(t) {
  return !(mc(t.name) || t.name === "require");
}
function pi(t) {
  return ne(t) ? t : t.type === 4 ? t.content : t.children.map(pi).join("");
}
function ju(t) {
  return t === "setup-const" || t === "literal-const";
}
const fm = Zs(
  /^(if|else|else-if)$/,
  (t, s, r) => _a(t, s, r, (o, u, c) => {
    const l = r.parent.children;
    let h = l.indexOf(o), p = 0;
    for (; h-- >= 0; ) {
      const m = l[h];
      m && m.type === 9 && (p += m.branches.length);
    }
    return () => {
      if (c)
        o.codegenNode = Hu(
          u,
          p,
          r
        );
      else {
        const m = mm(o.codegenNode);
        m.alternate = Hu(
          u,
          p + o.branches.length - 1,
          r
        );
      }
    };
  })
);
function _a(t, s, r, o) {
  if (s.name !== "else" && (!s.exp || !s.exp.content.trim())) {
    const u = s.exp ? s.exp.loc : t.loc;
    r.onError(
      ae(28, s.loc)
    ), s.exp = z("true", !1, u);
  }
  if (r.prefixIdentifiers && s.exp && (s.exp = Ce(s.exp, r)), s.name === "if") {
    const u = qu(t, s), c = {
      type: 9,
      loc: k0(t.loc),
      branches: [u]
    };
    if (r.replaceNode(c), o)
      return o(c, u, !0);
  } else {
    const u = r.parent.children, c = [];
    let l = u.indexOf(t);
    for (; l-- >= -1; ) {
      const h = u[l];
      if (h && h.type === 3) {
        r.removeNode(h), c.unshift(h);
        continue;
      }
      if (h && h.type === 2 && !h.content.trim().length) {
        r.removeNode(h);
        continue;
      }
      if (h && h.type === 9) {
        s.name === "else-if" && h.branches[h.branches.length - 1].condition === void 0 && r.onError(
          ae(30, t.loc)
        ), r.removeNode();
        const p = qu(t, s);
        c.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(r.parent && r.parent.type === 1 && (r.parent.tag === "transition" || r.parent.tag === "Transition")) && (p.children = [...c, ...p.children]);
        {
          const d = p.userKey;
          d && h.branches.forEach(({ userKey: b }) => {
            dm(b, d) && r.onError(
              ae(
                29,
                p.userKey.loc
              )
            );
          });
        }
        h.branches.push(p);
        const m = o && o(h, p, !1);
        gs(p, r), m && m(), r.currentNode = null;
      } else
        r.onError(
          ae(30, t.loc)
        );
      break;
    }
  }
}
function qu(t, s) {
  const r = t.tagType === 3;
  return {
    type: 10,
    loc: t.loc,
    condition: s.name === "else" ? void 0 : s.exp,
    children: r && !Ee(t, "for") ? t.children : [t],
    userKey: Ve(t, "key"),
    isTemplateIf: r
  };
}
function Hu(t, s, r) {
  return t.condition ? Ge(
    t.condition,
    zu(t, s, r),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Q(r.helper(ms), [
      '"v-if"',
      "true"
    ])
  ) : zu(t, s, r);
}
function zu(t, s, r) {
  const { helper: o } = r, u = le(
    "key",
    z(
      `${s}`,
      !1,
      ye,
      2
    )
  ), { children: c } = t, l = c[0];
  if (c.length !== 1 || l.type !== 1)
    if (c.length === 1 && l.type === 11) {
      const p = l.codegenNode;
      return Vs(p, u, r), p;
    } else {
      let p = 64;
      return !t.isTemplateIf && c.filter((m) => m.type !== 3).length === 1 && (p |= 2048), hs(
        r,
        o(ls),
        Ue([u]),
        c,
        p,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        t.loc
      );
    }
  else {
    const p = l.codegenNode, m = Jc(p);
    return m.type === 13 && ri(m, r), Vs(m, u, r), p;
  }
}
function dm(t, s) {
  if (!t || t.type !== s.type)
    return !1;
  if (t.type === 6) {
    if (t.value.content !== s.value.content)
      return !1;
  } else {
    const r = t.exp, o = s.exp;
    if (r.type !== o.type || r.type !== 4 || r.isStatic !== o.isStatic || r.content !== o.content)
      return !1;
  }
  return !0;
}
function mm(t) {
  for (; ; )
    if (t.type === 19)
      if (t.alternate.type === 19)
        t = t.alternate;
      else
        return t;
    else t.type === 20 && (t = t.value);
}
const Oa = (t, s, r) => {
  const { modifiers: o, loc: u } = t, c = t.arg;
  let { exp: l } = t;
  if (l && l.type === 4 && !l.content.trim())
    return r.onError(
      ae(34, u)
    ), {
      props: [
        le(c, z("", !0, u))
      ]
    };
  if (!l) {
    if (c.type !== 4 || !c.isStatic)
      return r.onError(
        ae(
          52,
          c.loc
        )
      ), {
        props: [
          le(c, z("", !0, u))
        ]
      };
    fh(t, r), l = t.exp;
  }
  return c.type !== 4 ? (c.children.unshift("("), c.children.push(') || ""')) : c.isStatic || (c.content = `${c.content} || ""`), o.some((h) => h.content === "camel") && (c.type === 4 ? c.isStatic ? c.content = st(c.content) : c.content = `${r.helperString(_r)}(${c.content})` : (c.children.unshift(`${r.helperString(_r)}(`), c.children.push(")"))), r.inSSR || (o.some((h) => h.content === "prop") && Xu(c, "."), o.some((h) => h.content === "attr") && Xu(c, "^")), {
    props: [le(c, l)]
  };
}, fh = (t, s) => {
  const r = t.arg, o = st(r.content);
  t.exp = z(o, !1, r.loc), t.exp = Ce(t.exp, s);
}, Xu = (t, s) => {
  t.type === 4 ? t.isStatic ? t.content = s + t.content : t.content = `\`${s}\${${t.content}}\`` : (t.children.unshift(`'${s}' + (`), t.children.push(")"));
}, ym = Zs(
  "for",
  (t, s, r) => {
    const { helper: o, removeHelper: u } = r;
    return ka(t, s, r, (c) => {
      const l = Q(o(Yr), [
        c.source
      ]), h = ps(t), p = Ee(t, "memo"), m = Ve(t, "key", !1, !0), d = m && m.type === 7;
      d && !m.exp && fh(m, r);
      let b = m && (m.type === 6 ? m.value ? z(m.value.content, !0) : void 0 : m.exp);
      p && b && d && (m.exp = b = Ce(
        b,
        r
      ));
      const g = m && b ? le("key", b) : null;
      h && (p && (p.exp = Ce(
        p.exp,
        r
      )), g && m.type !== 6 && (g.value = Ce(
        g.value,
        r
      )));
      const x = c.source.type === 4 && c.source.constType > 0, T = x ? 64 : m ? 128 : 256;
      return c.codegenNode = hs(
        r,
        o(ls),
        void 0,
        l,
        T,
        void 0,
        void 0,
        !0,
        !x,
        !1,
        t.loc
      ), () => {
        let P;
        const { children: y } = c;
        h && t.children.some((L) => {
          if (L.type === 1) {
            const F = Ve(L, "key");
            if (F)
              return r.onError(
                ae(
                  33,
                  F.loc
                )
              ), !0;
          }
        });
        const C = y.length !== 1 || y[0].type !== 1, N = fs(t) ? t : h && t.children.length === 1 && fs(t.children[0]) ? t.children[0] : null;
        if (N ? (P = N.codegenNode, h && g && Vs(P, g, r)) : C ? P = hs(
          r,
          o(ls),
          g ? Ue([g]) : void 0,
          t.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (P = y[0].codegenNode, h && g && Vs(P, g, r), P.isBlock !== !x && (P.isBlock ? (u(At), u(
          Ht(r.inSSR, P.isComponent)
        )) : u(
          qt(r.inSSR, P.isComponent)
        )), P.isBlock = !x, P.isBlock ? (o(At), o(Ht(r.inSSR, P.isComponent))) : o(qt(r.inSSR, P.isComponent))), p) {
          const L = ze(
            qs(c.parseResult, [
              z("_cached")
            ])
          );
          L.body = Qs([
            we(["const _memo = (", p.exp, ")"]),
            we([
              "if (_cached",
              ...b ? [" && _cached.key === ", b] : [],
              ` && ${r.helperString(
                fa
              )}(_cached, _memo)) return _cached`
            ]),
            we(["const _item = ", P]),
            z("_item.memo = _memo"),
            z("return _item")
          ]), l.arguments.push(
            L,
            z("_cache"),
            z(String(r.cached.length))
          ), r.cached.push(null);
        } else
          l.arguments.push(
            ze(
              qs(c.parseResult),
              P,
              !0
            )
          );
      };
    });
  }
);
function ka(t, s, r, o) {
  if (!s.exp) {
    r.onError(
      ae(31, s.loc)
    );
    return;
  }
  const u = s.forParseResult;
  if (!u) {
    r.onError(
      ae(32, s.loc)
    );
    return;
  }
  La(u, r);
  const { addIdentifiers: c, removeIdentifiers: l, scopes: h } = r, { source: p, value: m, key: d, index: b } = u, g = {
    type: 11,
    loc: s.loc,
    source: p,
    valueAlias: m,
    keyAlias: d,
    objectIndexAlias: b,
    parseResult: u,
    children: ps(t) ? t.children : [t]
  };
  r.replaceNode(g), h.vFor++, r.prefixIdentifiers && (m && c(m), d && c(d), b && c(b));
  const x = o && o(g);
  return () => {
    h.vFor--, r.prefixIdentifiers && (m && l(m), d && l(d), b && l(b)), x && x();
  };
}
function La(t, s) {
  t.finalized || (s.prefixIdentifiers && (t.source = Ce(
    t.source,
    s
  ), t.key && (t.key = Ce(
    t.key,
    s,
    !0
  )), t.index && (t.index = Ce(
    t.index,
    s,
    !0
  )), t.value && (t.value = Ce(
    t.value,
    s,
    !0
  ))), t.finalized = !0);
}
function qs({ value: t, key: s, index: r }, o = []) {
  return gm([t, s, r, ...o]);
}
function gm(t) {
  let s = t.length;
  for (; s-- && !t[s]; )
    ;
  return t.slice(0, s + 1).map((r, o) => r || z("_".repeat(o + 1), !1));
}
const Wu = z("undefined", !1), Ma = (t, s) => {
  if (t.type === 1 && (t.tagType === 1 || t.tagType === 3)) {
    const r = Ee(t, "slot");
    if (r) {
      const o = r.exp;
      return s.prefixIdentifiers && o && s.addIdentifiers(o), s.scopes.vSlot++, () => {
        s.prefixIdentifiers && o && s.removeIdentifiers(o), s.scopes.vSlot--;
      };
    }
  }
}, Ra = (t, s) => {
  let r;
  if (ps(t) && t.props.some(wa) && (r = Ee(t, "for"))) {
    const o = r.forParseResult;
    if (o) {
      La(o, s);
      const { value: u, key: c, index: l } = o, { addIdentifiers: h, removeIdentifiers: p } = s;
      return u && h(u), c && h(c), l && h(l), () => {
        u && p(u), c && p(c), l && p(l);
      };
    }
  }
}, bm = (t, s, r, o) => ze(
  t,
  r,
  !1,
  !0,
  r.length ? r[0].loc : o
);
function Hs(t, s, r = bm) {
  s.helper(ti);
  const { children: o, loc: u } = t, c = [], l = [];
  let h = s.scopes.vSlot > 0 || s.scopes.vFor > 0;
  !s.ssr && s.prefixIdentifiers && (h = Fe(t, s.identifiers));
  const p = Ee(t, "slot", !0);
  if (p) {
    const { arg: y, exp: C } = p;
    y && !_e(y) && (h = !0), c.push(
      le(
        y || z("default", !0),
        r(C, void 0, o, u)
      )
    );
  }
  let m = !1, d = !1;
  const b = [], g = /* @__PURE__ */ new Set();
  let x = 0;
  for (let y = 0; y < o.length; y++) {
    const C = o[y];
    let N;
    if (!ps(C) || !(N = Ee(C, "slot", !0))) {
      C.type !== 3 && b.push(C);
      continue;
    }
    if (p) {
      s.onError(
        ae(37, N.loc)
      );
      break;
    }
    m = !0;
    const { children: L, loc: F } = C, {
      arg: M = z("default", !0),
      exp: D,
      loc: U
    } = N;
    let v;
    _e(M) ? v = M ? M.content : "default" : h = !0;
    const I = Ee(C, "for"), O = r(D, I, L, F);
    let R, j;
    if (R = Ee(C, "if"))
      h = !0, l.push(
        Ge(
          R.exp,
          yr(M, O, x++),
          Wu
        )
      );
    else if (j = Ee(
      C,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let W = y, ee;
      for (; W-- && (ee = o[W], ee.type === 3); )
        ;
      if (ee && ps(ee) && Ee(ee, /^(else-)?if$/)) {
        let $ = l[l.length - 1];
        for (; $.alternate.type === 19; )
          $ = $.alternate;
        $.alternate = j.exp ? Ge(
          j.exp,
          yr(
            M,
            O,
            x++
          ),
          Wu
        ) : yr(M, O, x++);
      } else
        s.onError(
          ae(30, j.loc)
        );
    } else if (I) {
      h = !0;
      const W = I.forParseResult;
      W ? (La(W, s), l.push(
        Q(s.helper(Yr), [
          W.source,
          ze(
            qs(W),
            yr(M, O),
            !0
          )
        ])
      )) : s.onError(
        ae(
          32,
          I.loc
        )
      );
    } else {
      if (v) {
        if (g.has(v)) {
          s.onError(
            ae(
              38,
              U
            )
          );
          continue;
        }
        g.add(v), v === "default" && (d = !0);
      }
      c.push(le(M, O));
    }
  }
  if (!p) {
    const y = (C, N) => {
      const L = r(C, void 0, N, u);
      return le("default", L);
    };
    m ? b.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    b.some((C) => dh(C)) && (d ? s.onError(
      ae(
        39,
        b[0].loc
      )
    ) : c.push(
      y(void 0, b)
    )) : c.push(y(void 0, o));
  }
  const T = h ? 2 : Cr(t.children) ? 3 : 1;
  let P = Ue(
    c.concat(
      le(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        z(
          T + ` /* ${Sd[T]} */`,
          !1
        )
      )
    ),
    u
  );
  return l.length && (P = Q(s.helper(pa), [
    P,
    lt(l)
  ])), {
    slots: P,
    hasDynamicSlots: h
  };
}
function yr(t, s, r) {
  const o = [
    le("name", t),
    le("fn", s)
  ];
  return r != null && o.push(
    le("key", z(String(r), !0))
  ), Ue(o);
}
function Cr(t) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    switch (r.type) {
      case 1:
        if (r.tagType === 2 || Cr(r.children))
          return !0;
        break;
      case 9:
        if (Cr(r.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Cr(r.children)) return !0;
        break;
    }
  }
  return !1;
}
function dh(t) {
  return t.type !== 2 && t.type !== 12 ? !0 : t.type === 2 ? !!t.content.trim() : dh(t.content);
}
const mh = /* @__PURE__ */ new WeakMap(), yh = (t, s) => function() {
  if (t = s.currentNode, !(t.type === 1 && (t.tagType === 0 || t.tagType === 1)))
    return;
  const { tag: o, props: u } = t, c = t.tagType === 1;
  let l = c ? fi(t, s) : `"${o}"`;
  const h = Ct(l) && l.callee === Ks;
  let p, m, d = 0, b, g, x, T = (
    // dynamic component may resolve to plain elements
    h || l === Bt || l === ds || !c && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (o === "svg" || o === "foreignObject" || o === "math")
  );
  if (u.length > 0) {
    const P = xs(
      t,
      s,
      void 0,
      c,
      h
    );
    p = P.props, d = P.patchFlag, g = P.dynamicPropNames;
    const y = P.directives;
    x = y && y.length ? lt(
      y.map((C) => Da(C, s))
    ) : void 0, P.shouldUseBlock && (T = !0);
  }
  if (t.children.length > 0)
    if (l === Ds && (T = !0, d |= 1024, t.children.length > 1 && s.onError(
      ae(46, {
        start: t.children[0].loc.start,
        end: t.children[t.children.length - 1].loc.end,
        source: ""
      })
    )), c && // Teleport is not a real component and has dedicated runtime handling
    l !== Bt && // explained above.
    l !== Ds) {
      const { slots: y, hasDynamicSlots: C } = Hs(t, s);
      m = y, C && (d |= 1024);
    } else if (t.children.length === 1 && l !== Bt) {
      const y = t.children[0], C = y.type, N = C === 5 || C === 8;
      N && $e(y, s) === 0 && (d |= 1), N || C === 2 ? m = y : m = t.children;
    } else
      m = t.children;
  g && g.length && (b = Sm(g)), t.codegenNode = hs(
    s,
    l,
    p,
    m,
    d === 0 ? void 0 : d,
    b,
    x,
    !!T,
    !1,
    c,
    t.loc
  );
};
function fi(t, s, r = !1) {
  let { tag: o } = t;
  const u = Gn(o), c = Ve(
    t,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (c)
    if (u) {
      let h;
      if (c.type === 6 ? h = c.value && z(c.value.content, !0) : (h = c.exp, h || (h = z("is", !1, c.arg.loc), h = c.exp = Ce(h, s))), h)
        return Q(s.helper(Ks), [
          h
        ]);
    } else c.type === 6 && c.value.content.startsWith("vue:") && (o = c.value.content.slice(4));
  const l = Pa(o) || s.isBuiltInComponent(o);
  if (l)
    return r || s.helper(l), l;
  {
    const h = Wn(o, s);
    if (h)
      return h;
    const p = o.indexOf(".");
    if (p > 0) {
      const m = Wn(o.slice(0, p), s);
      if (m)
        return m + o.slice(p);
    }
  }
  return s.selfName && Ws(st(o)) === s.selfName ? (s.helper(Fs), s.components.add(o + "__self"), js(o, "component")) : (s.helper(Fs), s.components.add(o), js(o, "component"));
}
function Wn(t, s) {
  const r = s.bindingMetadata;
  if (!r || r.__isScriptSetup === !1)
    return;
  const o = st(t), u = Ws(o), c = (m) => {
    if (r[t] === m)
      return t;
    if (r[o] === m)
      return o;
    if (r[u] === m)
      return u;
  }, l = c("setup-const") || c("setup-reactive-const") || c("literal-const");
  if (l)
    return s.inline ? (
      // in inline mode, const setup bindings (e.g. imports) can be used as-is
      l
    ) : `$setup[${JSON.stringify(l)}]`;
  const h = c("setup-let") || c("setup-ref") || c("setup-maybe-ref");
  if (h)
    return s.inline ? (
      // setup scope bindings that may be refs need to be unrefed
      `${s.helperString(Us)}(${h})`
    ) : `$setup[${JSON.stringify(h)}]`;
  const p = c("props");
  if (p)
    return `${s.helperString(Us)}(${s.inline ? "__props" : "$props"}[${JSON.stringify(p)}])`;
}
function xs(t, s, r = t.props, o, u, c = !1) {
  const { tag: l, loc: h, children: p } = t;
  let m = [];
  const d = [], b = [], g = p.length > 0;
  let x = !1, T = 0, P = !1, y = !1, C = !1, N = !1, L = !1, F = !1;
  const M = [], D = (O) => {
    m.length && (d.push(
      Ue(Gu(m), h)
    ), m = []), O && d.push(O);
  }, U = () => {
    s.scopes.vFor > 0 && m.push(
      le(
        z("ref_for", !0),
        z("true")
      )
    );
  }, v = ({ key: O, value: R }) => {
    if (_e(O)) {
      const j = O.content, W = hc(j);
      if (W && (!o || u) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      j.toLowerCase() !== "onclick" && // omit v-model handlers
      j !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !xu(j) && (N = !0), W && xu(j) && (F = !0), W && R.type === 14 && (R = R.arguments[0]), R.type === 20 || (R.type === 4 || R.type === 8) && $e(R, s) > 0)
        return;
      j === "ref" ? P = !0 : j === "class" ? y = !0 : j === "style" ? C = !0 : j !== "key" && !M.includes(j) && M.push(j), o && (j === "class" || j === "style") && !M.includes(j) && M.push(j);
    } else
      L = !0;
  };
  for (let O = 0; O < r.length; O++) {
    const R = r[O];
    if (R.type === 6) {
      const { loc: j, name: W, nameLoc: ee, value: $ } = R;
      let pe = !0;
      if (W === "ref" && (P = !0, U(), $ && s.inline)) {
        const X = s.bindingMetadata[$.content];
        (X === "setup-let" || X === "setup-ref" || X === "setup-maybe-ref") && (pe = !1, m.push(
          le(
            z("ref_key", !0),
            z($.content, !0, $.loc)
          )
        ));
      }
      if (W === "is" && (Gn(l) || $ && $.content.startsWith("vue:")))
        continue;
      m.push(
        le(
          z(W, !0, ee),
          z(
            $ ? $.content : "",
            pe,
            $ ? $.loc : j
          )
        )
      );
    } else {
      const { name: j, arg: W, exp: ee, loc: $, modifiers: pe } = R, X = j === "bind", oe = j === "on";
      if (j === "slot") {
        o || s.onError(
          ae(40, $)
        );
        continue;
      }
      if (j === "once" || j === "memo" || j === "is" || X && et(W, "is") && Gn(l) || oe && c)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (X && et(W, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        oe && g && et(W, "vue:before-update")) && (x = !0), X && et(W, "ref") && U(), !W && (X || oe)
      ) {
        L = !0, ee ? X ? (U(), D(), d.push(ee)) : D({
          type: 14,
          loc: $,
          callee: s.helper(ei),
          arguments: o ? [ee] : [ee, "true"]
        }) : s.onError(
          ae(
            X ? 34 : 35,
            $
          )
        );
        continue;
      }
      X && pe.some((de) => de.content === "prop") && (T |= 32);
      const Re = s.directiveTransforms[j];
      if (Re) {
        const { props: de, needRuntime: Ke } = Re(R, t, s);
        !c && de.forEach(v), oe && W && !_e(W) ? D(Ue(de, h)) : m.push(...de), Ke && (b.push(R), vt(Ke) && mh.set(R, Ke));
      } else dc(j) || (b.push(R), g && (x = !0));
    }
  }
  let I;
  if (d.length ? (D(), d.length > 1 ? I = Q(
    s.helper(jt),
    d,
    h
  ) : I = d[0]) : m.length && (I = Ue(
    Gu(m),
    h
  )), L ? T |= 16 : (y && !o && (T |= 2), C && !o && (T |= 4), M.length && (T |= 8), N && (T |= 32)), !x && (T === 0 || T === 32) && (P || F || b.length > 0) && (T |= 512), !s.inSSR && I)
    switch (I.type) {
      case 15:
        let O = -1, R = -1, j = !1;
        for (let $ = 0; $ < I.properties.length; $++) {
          const pe = I.properties[$].key;
          _e(pe) ? pe.content === "class" ? O = $ : pe.content === "style" && (R = $) : pe.isHandlerKey || (j = !0);
        }
        const W = I.properties[O], ee = I.properties[R];
        j ? I = Q(
          s.helper(cs),
          [I]
        ) : (W && !_e(W.value) && (W.value = Q(
          s.helper(Qr),
          [W.value]
        )), ee && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (C || ee.value.type === 4 && ee.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        ee.value.type === 17) && (ee.value = Q(
          s.helper(Zr),
          [ee.value]
        )));
        break;
      case 14:
        break;
      default:
        I = Q(
          s.helper(cs),
          [
            Q(s.helper(ys), [
              I
            ])
          ]
        );
        break;
    }
  return {
    props: I,
    directives: b,
    patchFlag: T,
    dynamicPropNames: M,
    shouldUseBlock: x
  };
}
function Gu(t) {
  const s = /* @__PURE__ */ new Map(), r = [];
  for (let o = 0; o < t.length; o++) {
    const u = t[o];
    if (u.key.type === 8 || !u.key.isStatic) {
      r.push(u);
      continue;
    }
    const c = u.key.content, l = s.get(c);
    l ? (c === "style" || c === "class" || hc(c)) && xm(l, u) : (s.set(c, u), r.push(u));
  }
  return r;
}
function xm(t, s) {
  t.value.type === 17 ? t.value.elements.push(s.value) : t.value = lt(
    [t.value, s.value],
    t.loc
  );
}
function Da(t, s) {
  const r = [], o = mh.get(t);
  if (o)
    r.push(s.helperString(o));
  else {
    const c = Wn("v-" + t.name, s);
    c ? r.push(c) : (s.helper(Kr), s.directives.add(t.name), r.push(js(t.name, "directive")));
  }
  const { loc: u } = t;
  if (t.exp && r.push(t.exp), t.arg && (t.exp || r.push("void 0"), r.push(t.arg)), Object.keys(t.modifiers).length) {
    t.arg || (t.exp || r.push("void 0"), r.push("void 0"));
    const c = z("true", !1, u);
    r.push(
      Ue(
        t.modifiers.map(
          (l) => le(l, c)
        ),
        u
      )
    );
  }
  return lt(r, t.loc);
}
function Sm(t) {
  let s = "[";
  for (let r = 0, o = t.length; r < o; r++)
    s += JSON.stringify(t[r]), r < o - 1 && (s += ", ");
  return s + "]";
}
function Gn(t) {
  return t === "component" || t === "Component";
}
const Em = (t, s) => {
  if (fs(t)) {
    const { children: r, loc: o } = t, { slotName: u, slotProps: c } = Fa(t, s), l = [
      s.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      u,
      "{}",
      "undefined",
      "true"
    ];
    let h = 2;
    c && (l[2] = c, h = 3), r.length && (l[3] = ze([], r, !1, !1, o), h = 4), s.scopeId && !s.slotted && (h = 5), l.splice(h), t.codegenNode = Q(
      s.helper(ha),
      l,
      o
    );
  }
};
function Fa(t, s) {
  let r = '"default"', o;
  const u = [];
  for (let c = 0; c < t.props.length; c++) {
    const l = t.props[c];
    if (l.type === 6)
      l.value && (l.name === "name" ? r = JSON.stringify(l.value.content) : (l.name = st(l.name), u.push(l)));
    else if (l.name === "bind" && et(l.arg, "name")) {
      if (l.exp)
        r = l.exp;
      else if (l.arg && l.arg.type === 4) {
        const h = st(l.arg.content);
        r = l.exp = z(h, !1, l.arg.loc), r = l.exp = Ce(l.exp, s);
      }
    } else
      l.name === "bind" && l.arg && _e(l.arg) && (l.arg.content = st(l.arg.content)), u.push(l);
  }
  if (u.length > 0) {
    const { props: c, directives: l } = xs(
      t,
      s,
      u,
      !1,
      !1
    );
    o = c, l.length && s.onError(
      ae(
        36,
        l[0].loc
      )
    );
  }
  return {
    slotName: r,
    slotProps: o
  };
}
const di = (t, s, r, o) => {
  const { loc: u, modifiers: c, arg: l } = t;
  !t.exp && !c.length && r.onError(ae(35, u));
  let h;
  if (l.type === 4)
    if (l.isStatic) {
      let b = l.content;
      b.startsWith("vnode") && r.onError(ae(51, l.loc)), b.startsWith("vue:") && (b = `vnode-${b.slice(4)}`);
      const g = s.tagType !== 0 || b.startsWith("vnode") || !/[A-Z]/.test(b) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        bd(st(b))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${b}`
      );
      h = z(g, !0, l.loc);
    } else
      h = we([
        `${r.helperString(Or)}(`,
        l,
        ")"
      ]);
  else
    h = l, h.children.unshift(`${r.helperString(Or)}(`), h.children.push(")");
  let p = t.exp;
  p && !p.content.trim() && (p = void 0);
  let m = r.cacheHandlers && !p && !r.inVOnce;
  if (p) {
    const b = Ta(p, r), g = !(b || Gc(p, r)), x = p.content.includes(";");
    r.prefixIdentifiers && (g && r.addIdentifiers("$event"), p = t.exp = Ce(
      p,
      r,
      !1,
      x
    ), g && r.removeIdentifiers("$event"), m = r.cacheHandlers && // unnecessary to cache inside v-once
    !r.inVOnce && // runtime constants don't need to be cached
    // (this is analyzed by compileScript in SFC <script setup>)
    !(p.type === 4 && p.constType > 0) && // #1541 bail if this is a member exp handler passed to a component -
    // we need to use the original function to preserve arity,
    // e.g. <transition> relies on checking cb.length to determine
    // transition end handling. Inline function is ok since its arity
    // is preserved even when cached.
    !(b && s.tagType === 1) && // bail if the function references closure variables (v-for, v-slot)
    // it must be passed fresh to avoid stale values.
    !Fe(p, r.identifiers), m && b && (p.type === 4 ? p.content = `${p.content} && ${p.content}(...args)` : p.children = [...p.children, " && ", ...p.children, "(...args)"])), (g || m && b) && (p = we([
      `${g ? r.isTS ? "($event: any)" : "$event" : `${r.isTS ? `
//@ts-ignore
` : ""}(...args)`} => ${x ? "{" : "("}`,
      p,
      x ? "}" : ")"
    ]));
  }
  let d = {
    props: [
      le(
        h,
        p || z("() => {}", !1, u)
      )
    ]
  };
  return o && (d = o(d)), m && (d.props[0].value = r.cache(d.props[0].value)), d.props.forEach((b) => b.key.isHandlerKey = !0), d;
}, Pm = (t, s) => {
  if (t.type === 0 || t.type === 1 || t.type === 11 || t.type === 10)
    return () => {
      const r = t.children;
      let o, u = !1;
      for (let c = 0; c < r.length; c++) {
        const l = r[c];
        if (Ls(l)) {
          u = !0;
          for (let h = c + 1; h < r.length; h++) {
            const p = r[h];
            if (Ls(p))
              o || (o = r[c] = we(
                [l],
                l.loc
              )), o.children.push(" + ", p), r.splice(h, 1), h--;
            else {
              o = void 0;
              break;
            }
          }
        }
      }
      if (!(!u || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      r.length === 1 && (t.type === 0 || t.type === 1 && t.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !t.props.find(
        (c) => c.type === 7 && !s.directiveTransforms[c.name]
      ))))
        for (let c = 0; c < r.length; c++) {
          const l = r[c];
          if (Ls(l) || l.type === 8) {
            const h = [];
            (l.type !== 2 || l.content !== " ") && h.push(l), !s.ssr && $e(l, s) === 0 && h.push(
              `1 /* ${Sr[1]} */`
            ), r[c] = {
              type: 12,
              content: l,
              loc: l.loc,
              codegenNode: Q(
                s.helper(Wr),
                h
              )
            };
          }
        }
    };
}, Ku = /* @__PURE__ */ new WeakSet(), Tm = (t, s) => {
  if (t.type === 1 && Ee(t, "once", !0))
    return Ku.has(t) || s.inVOnce || s.inSSR ? void 0 : (Ku.add(t), s.inVOnce = !0, s.helper(Bs), () => {
      s.inVOnce = !1;
      const r = s.currentNode;
      r.codegenNode && (r.codegenNode = s.cache(
        r.codegenNode,
        !0,
        !0
      ));
    });
}, mi = (t, s, r) => {
  const { exp: o, arg: u } = t;
  if (!o)
    return r.onError(
      ae(41, t.loc)
    ), _s();
  const c = o.loc.source.trim(), l = o.type === 4 ? o.content : c, h = r.bindingMetadata[c];
  if (h === "props" || h === "props-aliased")
    return r.onError(ae(44, o.loc)), _s();
  const p = r.inline && (h === "setup-let" || h === "setup-ref" || h === "setup-maybe-ref");
  if (!l.trim() || !Ta(o, r) && !p)
    return r.onError(
      ae(42, o.loc)
    ), _s();
  if (r.prefixIdentifiers && pt(l) && r.identifiers[l])
    return r.onError(
      ae(43, o.loc)
    ), _s();
  const m = u || z("modelValue", !0), d = u ? _e(u) ? `onUpdate:${st(u.content)}` : we(['"onUpdate:" + ', u]) : "onUpdate:modelValue";
  let b;
  const g = r.isTS ? "($event: any)" : "$event";
  if (p)
    if (h === "setup-ref")
      b = we([
        `${g} => ((`,
        z(c, !1, o.loc),
        ").value = $event)"
      ]);
    else {
      const T = h === "setup-let" ? `${c} = $event` : "null";
      b = we([
        `${g} => (${r.helperString($s)}(${c}) ? (`,
        z(c, !1, o.loc),
        `).value = $event : ${T})`
      ]);
    }
  else
    b = we([
      `${g} => ((`,
      o,
      ") = $event)"
    ]);
  const x = [
    // modelValue: foo
    le(m, t.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    le(d, b)
  ];
  if (r.prefixIdentifiers && !r.inVOnce && r.cacheHandlers && !Fe(o, r.identifiers) && (x[1].value = r.cache(x[1].value)), t.modifiers.length && s.tagType === 1) {
    const T = t.modifiers.map((y) => y.content).map((y) => (pt(y) ? y : JSON.stringify(y)) + ": true").join(", "), P = u ? _e(u) ? `${u.content}Modifiers` : we([u, ' + "Modifiers"']) : "modelModifiers";
    x.push(
      le(
        P,
        z(
          `{ ${T} }`,
          !1,
          t.loc,
          2
        )
      )
    );
  }
  return _s(x);
};
function _s(t = []) {
  return { props: t };
}
const Ju = /* @__PURE__ */ new WeakSet(), Am = (t, s) => {
  if (t.type === 1) {
    const r = Ee(t, "memo");
    return !r || Ju.has(t) ? void 0 : (Ju.add(t), () => {
      const o = t.codegenNode || s.currentNode.codegenNode;
      o && o.type === 13 && (t.tagType !== 1 && ri(o, s), t.codegenNode = Q(s.helper(si), [
        r.exp,
        ze(void 0, o),
        "_cache",
        String(s.cached.length)
      ]), s.cached.push(null));
    });
  }
};
function Ba(t) {
  return [
    [
      Tm,
      fm,
      Am,
      ym,
      ...t ? [
        // order is important
        Ra,
        Na
      ] : [],
      Em,
      yh,
      Ma,
      Pm
    ],
    {
      on: di,
      bind: Oa,
      model: mi
    }
  ];
}
function gh(t, s = {}) {
  const r = s.onError || ya, o = s.mode === "module", u = s.prefixIdentifiers === !0 || o;
  !u && s.cacheHandlers && r(ae(49)), s.scopeId && !o && r(ae(50));
  const c = tt({}, s, {
    prefixIdentifiers: u
  }), l = ne(t) ? oi(t, c) : t, [h, p] = Ba(u);
  if (s.isTS) {
    const { expressionPlugins: m } = s;
    (!m || !m.includes("typescript")) && (s.expressionPlugins = [...m || [], "typescript"]);
  }
  return Ca(
    l,
    tt({}, c, {
      nodeTransforms: [
        ...h,
        ...s.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: tt(
        {},
        p,
        s.directiveTransforms || {}
        // user transforms
      )
    })
  ), Ia(l, c);
}
const wm = {
  DATA: "data",
  PROPS: "props",
  PROPS_ALIASED: "props-aliased",
  SETUP_LET: "setup-let",
  SETUP_CONST: "setup-const",
  SETUP_REACTIVE_CONST: "setup-reactive-const",
  SETUP_MAYBE_REF: "setup-maybe-ref",
  SETUP_REF: "setup-ref",
  OPTIONS: "options",
  LITERAL_CONST: "literal-const"
}, Ms = () => ({ props: [] }), Ua = Symbol("vModelRadio"), $a = Symbol(
  "vModelCheckbox"
), Va = Symbol("vModelText"), ja = Symbol(
  "vModelSelect"
), Dr = Symbol(
  "vModelDynamic"
), qa = Symbol(
  "vOnModifiersGuard"
), Ha = Symbol(
  "vOnKeysGuard"
), za = Symbol("vShow"), Xt = Symbol("Transition"), Ss = Symbol(
  "TransitionGroup"
);
da({
  [Ua]: "vModelRadio",
  [$a]: "vModelCheckbox",
  [Va]: "vModelText",
  [ja]: "vModelSelect",
  [Dr]: "vModelDynamic",
  [qa]: "withModifiers",
  [Ha]: "withKeys",
  [za]: "vShow",
  [Xt]: "Transition",
  [Ss]: "TransitionGroup"
});
const yi = {
  parseMode: "html",
  isVoidTag: Sc,
  isNativeTag: (t) => _d(t) || Od(t) || kd(t),
  isPreTag: (t) => t === "pre",
  isIgnoreNewlineTag: (t) => t === "pre" || t === "textarea",
  decodeEntities: void 0,
  isBuiltInComponent: (t) => {
    if (t === "Transition" || t === "transition")
      return Xt;
    if (t === "TransitionGroup" || t === "transition-group")
      return Ss;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(t, s, r) {
    let o = s ? s.ns : r;
    if (s && o === 2)
      if (s.tag === "annotation-xml") {
        if (t === "svg")
          return 1;
        s.props.some(
          (u) => u.type === 6 && u.name === "encoding" && u.value != null && (u.value.content === "text/html" || u.value.content === "application/xhtml+xml")
        ) && (o = 0);
      } else /^m(?:[ions]|text)$/.test(s.tag) && t !== "mglyph" && t !== "malignmark" && (o = 0);
    else s && o === 1 && (s.tag === "foreignObject" || s.tag === "desc" || s.tag === "title") && (o = 0);
    if (o === 0) {
      if (t === "svg")
        return 1;
      if (t === "math")
        return 2;
    }
    return o;
  }
}, Xa = (t) => {
  t.type === 1 && t.props.forEach((s, r) => {
    s.type === 6 && s.name === "style" && s.value && (t.props[r] = {
      type: 7,
      name: "bind",
      arg: z("style", !0, s.loc),
      exp: vm(s.value.content, s.loc),
      modifiers: [],
      loc: s.loc
    });
  });
}, vm = (t, s) => {
  const r = bc(t);
  return z(
    JSON.stringify(r),
    !1,
    s,
    3
  );
};
function Me(t, s) {
  return ae(
    t,
    s,
    Wa
  );
}
const Cm = {
  X_V_HTML_NO_EXPRESSION: 53,
  53: "X_V_HTML_NO_EXPRESSION",
  X_V_HTML_WITH_CHILDREN: 54,
  54: "X_V_HTML_WITH_CHILDREN",
  X_V_TEXT_NO_EXPRESSION: 55,
  55: "X_V_TEXT_NO_EXPRESSION",
  X_V_TEXT_WITH_CHILDREN: 56,
  56: "X_V_TEXT_WITH_CHILDREN",
  X_V_MODEL_ON_INVALID_ELEMENT: 57,
  57: "X_V_MODEL_ON_INVALID_ELEMENT",
  X_V_MODEL_ARG_ON_ELEMENT: 58,
  58: "X_V_MODEL_ARG_ON_ELEMENT",
  X_V_MODEL_ON_FILE_INPUT_ELEMENT: 59,
  59: "X_V_MODEL_ON_FILE_INPUT_ELEMENT",
  X_V_MODEL_UNNECESSARY_VALUE: 60,
  60: "X_V_MODEL_UNNECESSARY_VALUE",
  X_V_SHOW_NO_EXPRESSION: 61,
  61: "X_V_SHOW_NO_EXPRESSION",
  X_TRANSITION_INVALID_CHILDREN: 62,
  62: "X_TRANSITION_INVALID_CHILDREN",
  X_IGNORED_SIDE_EFFECT_TAG: 63,
  63: "X_IGNORED_SIDE_EFFECT_TAG",
  __EXTEND_POINT__: 64,
  64: "__EXTEND_POINT__"
}, Wa = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, Im = (t, s, r) => {
  const { exp: o, loc: u } = t;
  return o || r.onError(
    Me(53, u)
  ), s.children.length && (r.onError(
    Me(54, u)
  ), s.children.length = 0), {
    props: [
      le(
        z("innerHTML", !0, u),
        o || z("", !0)
      )
    ]
  };
}, Nm = (t, s, r) => {
  const { exp: o, loc: u } = t;
  return o || r.onError(
    Me(55, u)
  ), s.children.length && (r.onError(
    Me(56, u)
  ), s.children.length = 0), {
    props: [
      le(
        z("textContent", !0),
        o ? $e(o, r) > 0 ? o : Q(
          r.helperString(Js),
          [o],
          u
        ) : z("", !0)
      )
    ]
  };
}, _m = (t, s, r) => {
  const o = mi(t, s, r);
  if (!o.props.length || s.tagType === 1)
    return o;
  t.arg && r.onError(
    Me(
      58,
      t.arg.loc
    )
  );
  function u() {
    const h = Ee(s, "bind");
    h && et(h.arg, "value") && r.onError(
      Me(
        60,
        h.loc
      )
    );
  }
  const { tag: c } = s, l = r.isCustomElement(c);
  if (c === "input" || c === "textarea" || c === "select" || l) {
    let h = Va, p = !1;
    if (c === "input" || l) {
      const m = Ve(s, "type");
      if (m) {
        if (m.type === 7)
          h = Dr;
        else if (m.value)
          switch (m.value.content) {
            case "radio":
              h = Ua;
              break;
            case "checkbox":
              h = $a;
              break;
            case "file":
              p = !0, r.onError(
                Me(
                  59,
                  t.loc
                )
              );
              break;
            default:
              u();
              break;
          }
      } else ai(s) ? h = Dr : u();
    } else c === "select" ? h = ja : u();
    p || (o.needRuntime = r.helper(h));
  } else
    r.onError(
      Me(
        57,
        t.loc
      )
    );
  return o.props = o.props.filter(
    (h) => !(h.key.type === 4 && h.key.content === "modelValue")
  ), o;
}, Om = /* @__PURE__ */ Oe("passive,once,capture"), km = /* @__PURE__ */ Oe(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Lm = /* @__PURE__ */ Oe("left,right"), bh = /* @__PURE__ */ Oe("onkeyup,onkeydown,onkeypress"), Mm = (t, s, r, o) => {
  const u = [], c = [], l = [];
  for (let h = 0; h < s.length; h++) {
    const p = s[h].content;
    Om(p) ? l.push(p) : Lm(p) ? _e(t) ? bh(t.content.toLowerCase()) ? u.push(p) : c.push(p) : (u.push(p), c.push(p)) : km(p) ? c.push(p) : u.push(p);
  }
  return {
    keyModifiers: u,
    nonKeyModifiers: c,
    eventOptionModifiers: l
  };
}, Yu = (t, s) => _e(t) && t.content.toLowerCase() === "onclick" ? z(s, !0) : t.type !== 4 ? we([
  "(",
  t,
  `) === "onClick" ? "${s}" : (`,
  t,
  ")"
]) : t, Rm = (t, s, r) => di(t, s, r, (o) => {
  const { modifiers: u } = t;
  if (!u.length) return o;
  let { key: c, value: l } = o.props[0];
  const { keyModifiers: h, nonKeyModifiers: p, eventOptionModifiers: m } = Mm(c, u, r, t.loc);
  if (p.includes("right") && (c = Yu(c, "onContextmenu")), p.includes("middle") && (c = Yu(c, "onMouseup")), p.length && (l = Q(r.helper(qa), [
    l,
    JSON.stringify(p)
  ])), h.length && // if event name is dynamic, always wrap with keys guard
  (!_e(c) || bh(c.content.toLowerCase())) && (l = Q(r.helper(Ha), [
    l,
    JSON.stringify(h)
  ])), m.length) {
    const d = m.map(Ws).join("");
    c = _e(c) ? z(`${c.content}${d}`, !0) : we(["(", c, `) + "${d}"`]);
  }
  return {
    props: [le(c, l)]
  };
}), Dm = (t, s, r) => {
  const { exp: o, loc: u } = t;
  return o || r.onError(
    Me(61, u)
  ), {
    props: [],
    needRuntime: r.helper(za)
  };
}, Fm = (t, s) => {
  if (t.type === 1 && t.tagType === 1 && s.isBuiltInComponent(t.tag) === Xt)
    return () => {
      if (!t.children.length)
        return;
      xh(t) && s.onError(
        Me(
          62,
          {
            start: t.children[0].loc.start,
            end: t.children[t.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const o = t.children[0];
      if (o.type === 1)
        for (const u of o.props)
          u.type === 7 && u.name === "show" && t.props.push({
            type: 6,
            name: "persisted",
            nameLoc: t.loc,
            value: void 0,
            loc: t.loc
          });
    };
};
function xh(t) {
  const s = t.children = t.children.filter(
    (o) => o.type !== 3 && !(o.type === 2 && !o.content.trim())
  ), r = s[0];
  return s.length !== 1 || r.type === 11 || r.type === 9 && r.branches.some(xh);
}
const Bm = /__VUE_EXP_START__(.*?)__VUE_EXP_END__/g, Um = (t, s, r) => {
  if (s.scopes.vSlot > 0)
    return;
  const o = r.type === 1 && r.codegenNode && r.codegenNode.type === 13 && r.codegenNode.children && !Ae(r.codegenNode.children) && r.codegenNode.children.type === 20;
  let u = 0, c = 0;
  const l = [], h = (m) => {
    if (u >= 20 || c >= 5) {
      const d = Q(s.helper(Gr), [
        JSON.stringify(
          l.map((g) => Ga(g, s)).join("")
        ).replace(Bm, '" + $1 + "'),
        // the 2nd argument indicates the number of DOM nodes this static vnode
        // will insert / hydrate
        String(l.length)
      ]), b = l.length - 1;
      if (o)
        t.splice(
          m - l.length,
          l.length,
          // @ts-expect-error
          d
        );
      else if (l[0].codegenNode.value = d, l.length > 1) {
        t.splice(m - l.length + 1, b);
        const g = s.cached.indexOf(
          l[l.length - 1].codegenNode
        );
        if (g > -1) {
          for (let x = g; x < s.cached.length; x++) {
            const T = s.cached[x];
            T && (T.index -= b);
          }
          s.cached.splice(g - b + 1, b);
        }
      }
      return b;
    }
    return 0;
  };
  let p = 0;
  for (; p < t.length; p++) {
    const m = t[p];
    if (o || $m(m)) {
      const b = qm(m);
      if (b) {
        u += b[0], c += b[1], l.push(m);
        continue;
      }
    }
    p -= h(p), u = 0, c = 0, l.length = 0;
  }
  h(p);
}, $m = (t) => {
  if ((t.type === 1 && t.tagType === 0 || t.type === 12) && t.codegenNode && t.codegenNode.type === 20)
    return t.codegenNode;
}, Vm = /^(data|aria)-/, Qu = (t, s) => (s === 0 ? Fd(t) : s === 1 ? Bd(t) : s === 2 ? Ud(t) : !1) || Vm.test(t), jm = /* @__PURE__ */ Oe(
  "caption,thead,tr,th,tbody,td,tfoot,colgroup,col"
);
function qm(t) {
  if (t.type === 1 && jm(t.tag))
    return !1;
  if (t.type === 12)
    return [1, 0];
  let s = 1, r = t.props.length > 0 ? 1 : 0, o = !1;
  const u = () => (o = !0, !1);
  function c(l) {
    const h = l.tag === "option" && l.ns === 0;
    for (let p = 0; p < l.props.length; p++) {
      const m = l.props[p];
      if (m.type === 6 && !Qu(m.name, l.ns) || m.type === 7 && m.name === "bind" && (m.arg && (m.arg.type === 8 || m.arg.isStatic && !Qu(m.arg.content, l.ns)) || m.exp && (m.exp.type === 8 || m.exp.constType < 3) || h && et(m.arg, "value") && m.exp && !m.exp.isStatic))
        return u();
    }
    for (let p = 0; p < l.children.length; p++) {
      s++;
      const m = l.children[p];
      if (m.type === 1 && (m.props.length > 0 && r++, c(m), o))
        return !1;
    }
    return !0;
  }
  return c(t) ? [s, r] : !1;
}
function Ga(t, s) {
  if (ne(t))
    return t;
  if (vt(t))
    return "";
  switch (t.type) {
    case 1:
      return Hm(t, s);
    case 2:
      return Ze(t.content);
    case 3:
      return `<!--${Ze(t.content)}-->`;
    case 5:
      return Ze(zr($t(t.content)));
    case 8:
      return Ze($t(t));
    case 12:
      return Ga(t.content, s);
    default:
      return "";
  }
}
function Hm(t, s) {
  let r = `<${t.tag}`, o = "";
  for (let u = 0; u < t.props.length; u++) {
    const c = t.props[u];
    if (c.type === 6)
      r += ` ${c.name}`, c.value && (r += `="${Ze(c.value.content)}"`);
    else if (c.type === 7)
      if (c.name === "bind") {
        const l = c.exp;
        if (l.content[0] === "_") {
          r += ` ${c.arg.content}="__VUE_EXP_START__${l.content}__VUE_EXP_END__"`;
          continue;
        }
        if (Ec(c.arg.content) && l.content === "false")
          continue;
        let h = $t(l);
        if (h != null) {
          const p = c.arg && c.arg.content;
          p === "class" ? h = xc(h) : p === "style" && (h = wd(gc(h))), r += ` ${c.arg.content}="${Ze(
            h
          )}"`;
        }
      } else c.name === "html" ? o = $t(c.exp) : c.name === "text" && (o = Ze(
        zr($t(c.exp))
      ));
  }
  if (s.scopeId && (r += ` ${s.scopeId}`), r += ">", o)
    r += o;
  else
    for (let u = 0; u < t.children.length; u++)
      r += Ga(t.children[u], s);
  return Sc(t.tag) || (r += `</${t.tag}>`), r;
}
function $t(t) {
  if (t.type === 4)
    return new Function(`return (${t.content})`)();
  {
    let s = "";
    return t.children.forEach((r) => {
      ne(r) || vt(r) || (r.type === 2 ? s += r.content : r.type === 5 ? s += zr($t(r.content)) : s += $t(r));
    }), s;
  }
}
const zm = (t, s) => {
  t.type === 1 && t.tagType === 0 && (t.tag === "script" || t.tag === "style") && (s.onError(
    Me(
      63,
      t.loc
    )
  ), s.removeNode());
};
function Xm(t, s) {
  return t === "template" ? !0 : t in Zu ? Zu[t].has(s) : s in el ? el[s].has(t) : !(t in tl && tl[t].has(s) || s in sl && sl[s].has(t));
}
const ts = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Lt = /* @__PURE__ */ new Set([]), Zu = {
  head: /* @__PURE__ */ new Set([
    "base",
    "basefront",
    "bgsound",
    "link",
    "meta",
    "title",
    "noscript",
    "noframes",
    "style",
    "script",
    "template"
  ]),
  optgroup: /* @__PURE__ */ new Set(["option"]),
  select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
  // table
  table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
  tr: /* @__PURE__ */ new Set(["td", "th"]),
  colgroup: /* @__PURE__ */ new Set(["col"]),
  tbody: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["tr"]),
  tfoot: /* @__PURE__ */ new Set(["tr"]),
  // these elements can not have any children elements
  script: Lt,
  iframe: Lt,
  option: Lt,
  textarea: Lt,
  style: Lt,
  title: Lt
}, el = {
  // sections
  html: Lt,
  body: /* @__PURE__ */ new Set(["html"]),
  head: /* @__PURE__ */ new Set(["html"]),
  // table
  td: /* @__PURE__ */ new Set(["tr"]),
  colgroup: /* @__PURE__ */ new Set(["table"]),
  caption: /* @__PURE__ */ new Set(["table"]),
  tbody: /* @__PURE__ */ new Set(["table"]),
  tfoot: /* @__PURE__ */ new Set(["table"]),
  col: /* @__PURE__ */ new Set(["colgroup"]),
  th: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["table"]),
  tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
  // data list
  dd: /* @__PURE__ */ new Set(["dl", "div"]),
  dt: /* @__PURE__ */ new Set(["dl", "div"]),
  // other
  figcaption: /* @__PURE__ */ new Set(["figure"]),
  // li: new Set(["ul", "ol"]),
  summary: /* @__PURE__ */ new Set(["details"]),
  area: /* @__PURE__ */ new Set(["map"])
}, tl = {
  p: /* @__PURE__ */ new Set([
    "address",
    "article",
    "aside",
    "blockquote",
    "center",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "fieldset",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "menu",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]),
  svg: /* @__PURE__ */ new Set([
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "menu",
    "meta",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "u",
    "ul",
    "var"
  ])
}, sl = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: ts,
  h2: ts,
  h3: ts,
  h4: ts,
  h5: ts,
  h6: ts
}, Wm = (t, s) => {
  if (t.type === 1 && t.tagType === 0 && s.parent && s.parent.type === 1 && s.parent.tagType === 0 && !Xm(s.parent.tag, t.tag)) {
    const r = new SyntaxError(
      `<${t.tag}> cannot be child of <${s.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    r.loc = t.loc, s.onWarn(r);
  }
}, Ka = [
  Xa,
  Fm,
  Wm
], Ja = {
  cloak: Ms,
  html: Im,
  text: Nm,
  model: _m,
  // override compiler-core
  on: Rm,
  // override compiler-core
  show: Dm
};
function Gm(t, s = {}) {
  return gh(
    t,
    tt({}, yi, s, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        zm,
        ...Ka,
        ...s.nodeTransforms || []
      ],
      directiveTransforms: tt(
        {},
        Ja,
        s.directiveTransforms || {}
      ),
      transformHoist: Um
    })
  );
}
function Km(t, s = {}) {
  return oi(t, tt({}, yi, s));
}
var rl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BASE_TRANSITION: ua,
  BindingTypes: wm,
  CAMELIZE: _r,
  CAPITALIZE: wc,
  CREATE_BLOCK: la,
  CREATE_COMMENT: ms,
  CREATE_ELEMENT_BLOCK: ca,
  CREATE_ELEMENT_VNODE: Xr,
  CREATE_SLOTS: pa,
  CREATE_STATIC: Gr,
  CREATE_TEXT: Wr,
  CREATE_VNODE: Gs,
  CompilerDeprecationTypes: i0,
  ConstantTypes: Xd,
  DOMDirectiveTransforms: Ja,
  DOMErrorCodes: Cm,
  DOMErrorMessages: Wa,
  DOMNodeTransforms: Ka,
  ElementTypes: zd,
  ErrorCodes: u0,
  FRAGMENT: ls,
  GUARD_REACTIVE_PROPS: ys,
  IS_MEMO_SAME: fa,
  IS_REF: $s,
  KEEP_ALIVE: Ds,
  MERGE_PROPS: jt,
  NORMALIZE_CLASS: Qr,
  NORMALIZE_PROPS: cs,
  NORMALIZE_STYLE: Zr,
  Namespaces: qd,
  NodeTypes: Hd,
  OPEN_BLOCK: At,
  POP_SCOPE_ID: Cc,
  PUSH_SCOPE_ID: vc,
  RENDER_LIST: Yr,
  RENDER_SLOT: ha,
  RESOLVE_COMPONENT: Fs,
  RESOLVE_DIRECTIVE: Kr,
  RESOLVE_DYNAMIC_COMPONENT: Ks,
  RESOLVE_FILTER: Ac,
  SET_BLOCK_TRACKING: Bs,
  SUSPENSE: ds,
  TELEPORT: Bt,
  TO_DISPLAY_STRING: Js,
  TO_HANDLERS: ei,
  TO_HANDLER_KEY: Or,
  TRANSITION: Xt,
  TRANSITION_GROUP: Ss,
  TS_NODE_TYPES: Ea,
  UNREF: Us,
  V_MODEL_CHECKBOX: $a,
  V_MODEL_DYNAMIC: Dr,
  V_MODEL_RADIO: Ua,
  V_MODEL_SELECT: ja,
  V_MODEL_TEXT: Va,
  V_ON_WITH_KEYS: Ha,
  V_ON_WITH_MODIFIERS: qa,
  V_SHOW: za,
  WITH_CTX: ti,
  WITH_DIRECTIVES: Jr,
  WITH_MEMO: si,
  advancePositionWithClone: qn,
  advancePositionWithMutation: Aa,
  assert: Hn,
  baseCompile: gh,
  baseParse: oi,
  buildDirectiveArgs: Da,
  buildProps: xs,
  buildSlots: Hs,
  checkCompatEnabled: o0,
  compile: Gm,
  convertToBlock: ri,
  createArrayExpression: lt,
  createAssignmentExpression: Er,
  createBlockStatement: Qs,
  createCacheExpression: Ic,
  createCallExpression: Q,
  createCompilerError: ae,
  createCompoundExpression: we,
  createConditionalExpression: Ge,
  createDOMCompilerError: Me,
  createForLoopParams: qs,
  createFunctionExpression: ze,
  createIfStatement: Lr,
  createInterpolation: kr,
  createObjectExpression: Ue,
  createObjectProperty: le,
  createReturnStatement: _c,
  createRoot: Ys,
  createSequenceExpression: Nc,
  createSimpleExpression: z,
  createStructuralDirectiveTransform: Zs,
  createTemplateLiteral: ma,
  createTransformContext: ui,
  createVNodeCall: hs,
  errorMessages: ga,
  extractIdentifiers: Ye,
  findDir: Ee,
  findProp: Ve,
  forAliasRE: Yc,
  generate: Ia,
  generateCodeFrame: yc,
  getBaseTransformPreset: Ba,
  getConstantType: $e,
  getMemoedVNodeCall: Jc,
  getVNodeBlockHelper: Ht,
  getVNodeHelper: qt,
  hasDynamicKeyVBind: ai,
  hasScopeRef: Fe,
  helperNameMap: Be,
  injectProp: Vs,
  isCoreComponent: Pa,
  isFnExpression: Gc,
  isFnExpressionBrowser: S0,
  isFnExpressionNode: Wc,
  isFunctionType: Hc,
  isInDestructureAssignment: xa,
  isInNewExpression: Uc,
  isMemberExpression: Ta,
  isMemberExpressionBrowser: b0,
  isMemberExpressionNode: Xc,
  isReferencedIdentifier: Bc,
  isSimpleIdentifier: pt,
  isSlotOutlet: fs,
  isStaticArgOf: et,
  isStaticExp: _e,
  isStaticProperty: Sa,
  isStaticPropertyKey: zc,
  isTemplateNode: ps,
  isText: Ls,
  isVSlot: wa,
  locStub: ye,
  noopDirectiveTransform: Ms,
  parse: Km,
  parserOptions: yi,
  processExpression: Ce,
  processFor: ka,
  processIf: _a,
  processSlotOutlet: Fa,
  registerRuntimeHelpers: da,
  resolveComponentType: fi,
  stringifyExpression: pi,
  toValidAssetId: js,
  trackSlotScopes: Ma,
  trackVForSlotScopes: Ra,
  transform: Ca,
  transformBind: Oa,
  transformElement: yh,
  transformExpression: Na,
  transformModel: mi,
  transformOn: di,
  transformStyle: Xa,
  traverseNode: gs,
  unwrapTSNode: ii,
  walkBlockDeclarations: Vc,
  walkFunctionParams: $c,
  walkIdentifiers: Fc,
  warnDeprecation: Mc
}), Qi, il;
function Jm() {
  if (il) return Qi;
  il = 1;
  function t(l, h) {
    for (; l.length < h; )
      l = "0" + l;
    return l;
  }
  function s(l, h) {
    var p, m, d;
    if (h.length === 0)
      return l;
    for (p = 0, d = h.length; p < d; p++)
      m = h.charCodeAt(p), l = (l << 5) - l + m, l |= 0;
    return l < 0 ? l * -2 : l;
  }
  function r(l, h, p) {
    return Object.keys(h).sort().reduce(m, l);
    function m(d, b) {
      return o(d, h[b], b, p);
    }
  }
  function o(l, h, p, m) {
    var d = s(s(s(l, p), u(h)), typeof h);
    if (h === null)
      return s(d, "null");
    if (h === void 0)
      return s(d, "undefined");
    if (typeof h == "object" || typeof h == "function") {
      if (m.indexOf(h) !== -1)
        return s(d, "[Circular]" + p);
      m.push(h);
      var b = r(d, h, m);
      if (!("valueOf" in h) || typeof h.valueOf != "function")
        return b;
      try {
        return s(b, String(h.valueOf()));
      } catch (g) {
        return s(b, "[valueOf exception]" + (g.stack || g.message));
      }
    }
    return s(d, h.toString());
  }
  function u(l) {
    return Object.prototype.toString.call(l);
  }
  function c(l) {
    return t(o(0, l, "", []).toString(16), 8);
  }
  return Qi = c, Qi;
}
var Ym = /* @__PURE__ */ Jm(), Qm = /* @__PURE__ */ Dc(Ym);
function Zm(t, s, r, o = !1) {
  return `{
  ${t.map(
    (u) => `"${o ? "--" : ""}${e1(s, u, r, o)}": (${u})`
  ).join(`,
  `)}
}`;
}
function e1(t, s, r, o = !1) {
  return r ? Qm(t + s) : `${t}-${jd(s, o)}`;
}
var zt = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {};
function Sh() {
  throw new Error("setTimeout has not been defined");
}
function Eh() {
  throw new Error("clearTimeout has not been defined");
}
var St = Sh, Et = Eh;
typeof zt.setTimeout == "function" && (St = setTimeout);
typeof zt.clearTimeout == "function" && (Et = clearTimeout);
function Ph(t) {
  if (St === setTimeout)
    return setTimeout(t, 0);
  if ((St === Sh || !St) && setTimeout)
    return St = setTimeout, setTimeout(t, 0);
  try {
    return St(t, 0);
  } catch {
    try {
      return St.call(null, t, 0);
    } catch {
      return St.call(this, t, 0);
    }
  }
}
function t1(t) {
  if (Et === clearTimeout)
    return clearTimeout(t);
  if ((Et === Eh || !Et) && clearTimeout)
    return Et = clearTimeout, clearTimeout(t);
  try {
    return Et(t);
  } catch {
    try {
      return Et.call(null, t);
    } catch {
      return Et.call(this, t);
    }
  }
}
var ot = [], as = !1, Dt, Ir = -1;
function s1() {
  !as || !Dt || (as = !1, Dt.length ? ot = Dt.concat(ot) : Ir = -1, ot.length && Th());
}
function Th() {
  if (!as) {
    var t = Ph(s1);
    as = !0;
    for (var s = ot.length; s; ) {
      for (Dt = ot, ot = []; ++Ir < s; )
        Dt && Dt[Ir].run();
      Ir = -1, s = ot.length;
    }
    Dt = null, as = !1, t1(t);
  }
}
function r1(t) {
  var s = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      s[r - 1] = arguments[r];
  ot.push(new Ah(t, s)), ot.length === 1 && !as && Ph(Th);
}
function Ah(t, s) {
  this.fun = t, this.array = s;
}
Ah.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var i1 = "browser", n1 = "browser", a1 = !0, o1 = {}, u1 = [], l1 = "", c1 = {}, h1 = {}, p1 = {};
function Wt() {
}
var f1 = Wt, d1 = Wt, m1 = Wt, y1 = Wt, g1 = Wt, b1 = Wt, x1 = Wt;
function S1(t) {
  throw new Error("process.binding is not supported");
}
function E1() {
  return "/";
}
function P1(t) {
  throw new Error("process.chdir is not supported");
}
function T1() {
  return 0;
}
var ss = zt.performance || {}, A1 = ss.now || ss.mozNow || ss.msNow || ss.oNow || ss.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function w1(t) {
  var s = A1.call(ss) * 1e-3, r = Math.floor(s), o = Math.floor(s % 1 * 1e9);
  return t && (r = r - t[0], o = o - t[1], o < 0 && (r--, o += 1e9)), [r, o];
}
var v1 = /* @__PURE__ */ new Date();
function C1() {
  var t = /* @__PURE__ */ new Date(), s = t - v1;
  return s / 1e3;
}
var wt = {
  nextTick: r1,
  title: i1,
  browser: a1,
  env: o1,
  argv: u1,
  version: l1,
  versions: c1,
  on: f1,
  addListener: d1,
  once: m1,
  off: y1,
  removeListener: g1,
  removeAllListeners: b1,
  emit: x1,
  binding: S1,
  cwd: E1,
  chdir: P1,
  umask: T1,
  hrtime: w1,
  platform: n1,
  release: h1,
  config: p1,
  uptime: C1
};
function wh(t, s) {
  for (var r = 0, o = t.length - 1; o >= 0; o--) {
    var u = t[o];
    u === "." ? t.splice(o, 1) : u === ".." ? (t.splice(o, 1), r++) : r && (t.splice(o, 1), r--);
  }
  if (s)
    for (; r--; r)
      t.unshift("..");
  return t;
}
var I1 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Ya = function(t) {
  return I1.exec(t).slice(1);
};
function Fr() {
  for (var t = "", s = !1, r = arguments.length - 1; r >= -1 && !s; r--) {
    var o = r >= 0 ? arguments[r] : "/";
    if (typeof o != "string")
      throw new TypeError("Arguments to path.resolve must be strings");
    if (!o)
      continue;
    t = o + "/" + t, s = o.charAt(0) === "/";
  }
  return t = wh(eo(t.split("/"), function(u) {
    return !!u;
  }), !s).join("/"), (s ? "/" : "") + t || ".";
}
function Qa(t) {
  var s = Za(t), r = N1(t, -1) === "/";
  return t = wh(eo(t.split("/"), function(o) {
    return !!o;
  }), !s).join("/"), !t && !s && (t = "."), t && r && (t += "/"), (s ? "/" : "") + t;
}
function Za(t) {
  return t.charAt(0) === "/";
}
function vh() {
  var t = Array.prototype.slice.call(arguments, 0);
  return Qa(eo(t, function(s, r) {
    if (typeof s != "string")
      throw new TypeError("Arguments to path.join must be strings");
    return s;
  }).join("/"));
}
function Ch(t, s) {
  t = Fr(t).substr(1), s = Fr(s).substr(1);
  function r(m) {
    for (var d = 0; d < m.length && m[d] === ""; d++)
      ;
    for (var b = m.length - 1; b >= 0 && m[b] === ""; b--)
      ;
    return d > b ? [] : m.slice(d, b - d + 1);
  }
  for (var o = r(t.split("/")), u = r(s.split("/")), c = Math.min(o.length, u.length), l = c, h = 0; h < c; h++)
    if (o[h] !== u[h]) {
      l = h;
      break;
    }
  for (var p = [], h = l; h < o.length; h++)
    p.push("..");
  return p = p.concat(u.slice(l)), p.join("/");
}
var Ih = "/", Nh = ":";
function _h(t) {
  var s = Ya(t), r = s[0], o = s[1];
  return !r && !o ? "." : (o && (o = o.substr(0, o.length - 1)), r + o);
}
function Oh(t, s) {
  var r = Ya(t)[2];
  return s && r.substr(-1 * s.length) === s && (r = r.substr(0, r.length - s.length)), r;
}
function kh(t) {
  return Ya(t)[3];
}
var ft = {
  extname: kh,
  basename: Oh,
  dirname: _h,
  sep: Ih,
  delimiter: Nh,
  relative: Ch,
  join: vh,
  isAbsolute: Za,
  normalize: Qa,
  resolve: Fr
};
function eo(t, s) {
  if (t.filter) return t.filter(s);
  for (var r = [], o = 0; o < t.length; o++)
    s(t[o], o, t) && r.push(t[o]);
  return r;
}
var N1 = "ab".substr(-1) === "b" ? function(t, s, r) {
  return t.substr(s, r);
} : function(t, s, r) {
  return s < 0 && (s = t.length + s), t.substr(s, r);
}, _1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  basename: Oh,
  default: ft,
  delimiter: Nh,
  dirname: _h,
  extname: kh,
  isAbsolute: Za,
  join: vh,
  normalize: Qa,
  relative: Ch,
  resolve: Fr,
  sep: Ih
});
/*! https://mths.be/punycode v1.4.1 by @mathias */
var Zi = 2147483647, Rs = 36, Lh = 1, Kn = 26, O1 = 38, k1 = 700, L1 = 72, M1 = 128, R1 = "-", D1 = /[^\x20-\x7E]/, F1 = /[\x2E\u3002\uFF0E\uFF61]/g, B1 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, en = Rs - Lh, rs = Math.floor, tn = String.fromCharCode;
function nl(t) {
  throw new RangeError(B1[t]);
}
function U1(t, s) {
  for (var r = t.length, o = []; r--; )
    o[r] = s(t[r]);
  return o;
}
function $1(t, s) {
  var r = t.split("@"), o = "";
  r.length > 1 && (o = r[0] + "@", t = r[1]), t = t.replace(F1, ".");
  var u = t.split("."), c = U1(u, s).join(".");
  return o + c;
}
function V1(t) {
  for (var s = [], r = 0, o = t.length, u, c; r < o; )
    u = t.charCodeAt(r++), u >= 55296 && u <= 56319 && r < o ? (c = t.charCodeAt(r++), (c & 64512) == 56320 ? s.push(((u & 1023) << 10) + (c & 1023) + 65536) : (s.push(u), r--)) : s.push(u);
  return s;
}
function al(t, s) {
  return t + 22 + 75 * (t < 26) - ((s != 0) << 5);
}
function j1(t, s, r) {
  var o = 0;
  for (t = r ? rs(t / k1) : t >> 1, t += rs(t / s); t > en * Kn >> 1; o += Rs)
    t = rs(t / en);
  return rs(o + (en + 1) * t / (t + O1));
}
function q1(t) {
  var s, r, o, u, c, l, h, p, m, d, b, g = [], x, T, P, y;
  for (t = V1(t), x = t.length, s = M1, r = 0, c = L1, l = 0; l < x; ++l)
    b = t[l], b < 128 && g.push(tn(b));
  for (o = u = g.length, u && g.push(R1); o < x; ) {
    for (h = Zi, l = 0; l < x; ++l)
      b = t[l], b >= s && b < h && (h = b);
    for (T = o + 1, h - s > rs((Zi - r) / T) && nl("overflow"), r += (h - s) * T, s = h, l = 0; l < x; ++l)
      if (b = t[l], b < s && ++r > Zi && nl("overflow"), b == s) {
        for (p = r, m = Rs; d = m <= c ? Lh : m >= c + Kn ? Kn : m - c, !(p < d); m += Rs)
          y = p - d, P = Rs - d, g.push(
            tn(al(d + y % P, 0))
          ), p = rs(y / P);
        g.push(tn(al(p, 0))), c = j1(r, T, o == u), r = 0, ++o;
      }
    ++r, ++s;
  }
  return g.join("");
}
function H1(t) {
  return $1(t, function(s) {
    return D1.test(s) ? "xn--" + q1(s) : s;
  });
}
var Qe = [], We = [], z1 = typeof Uint8Array < "u" ? Uint8Array : Array, to = !1;
function Mh() {
  to = !0;
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, r = t.length; s < r; ++s)
    Qe[s] = t[s], We[t.charCodeAt(s)] = s;
  We[45] = 62, We[95] = 63;
}
function X1(t) {
  to || Mh();
  var s, r, o, u, c, l, h = t.length;
  if (h % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  c = t[h - 2] === "=" ? 2 : t[h - 1] === "=" ? 1 : 0, l = new z1(h * 3 / 4 - c), o = c > 0 ? h - 4 : h;
  var p = 0;
  for (s = 0, r = 0; s < o; s += 4, r += 3)
    u = We[t.charCodeAt(s)] << 18 | We[t.charCodeAt(s + 1)] << 12 | We[t.charCodeAt(s + 2)] << 6 | We[t.charCodeAt(s + 3)], l[p++] = u >> 16 & 255, l[p++] = u >> 8 & 255, l[p++] = u & 255;
  return c === 2 ? (u = We[t.charCodeAt(s)] << 2 | We[t.charCodeAt(s + 1)] >> 4, l[p++] = u & 255) : c === 1 && (u = We[t.charCodeAt(s)] << 10 | We[t.charCodeAt(s + 1)] << 4 | We[t.charCodeAt(s + 2)] >> 2, l[p++] = u >> 8 & 255, l[p++] = u & 255), l;
}
function W1(t) {
  return Qe[t >> 18 & 63] + Qe[t >> 12 & 63] + Qe[t >> 6 & 63] + Qe[t & 63];
}
function G1(t, s, r) {
  for (var o, u = [], c = s; c < r; c += 3)
    o = (t[c] << 16) + (t[c + 1] << 8) + t[c + 2], u.push(W1(o));
  return u.join("");
}
function ol(t) {
  to || Mh();
  for (var s, r = t.length, o = r % 3, u = "", c = [], l = 16383, h = 0, p = r - o; h < p; h += l)
    c.push(G1(t, h, h + l > p ? p : h + l));
  return o === 1 ? (s = t[r - 1], u += Qe[s >> 2], u += Qe[s << 4 & 63], u += "==") : o === 2 && (s = (t[r - 2] << 8) + t[r - 1], u += Qe[s >> 10], u += Qe[s >> 4 & 63], u += Qe[s << 2 & 63], u += "="), c.push(u), c.join("");
}
function gi(t, s, r, o, u) {
  var c, l, h = u * 8 - o - 1, p = (1 << h) - 1, m = p >> 1, d = -7, b = r ? u - 1 : 0, g = r ? -1 : 1, x = t[s + b];
  for (b += g, c = x & (1 << -d) - 1, x >>= -d, d += h; d > 0; c = c * 256 + t[s + b], b += g, d -= 8)
    ;
  for (l = c & (1 << -d) - 1, c >>= -d, d += o; d > 0; l = l * 256 + t[s + b], b += g, d -= 8)
    ;
  if (c === 0)
    c = 1 - m;
  else {
    if (c === p)
      return l ? NaN : (x ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, o), c = c - m;
  }
  return (x ? -1 : 1) * l * Math.pow(2, c - o);
}
function Rh(t, s, r, o, u, c) {
  var l, h, p, m = c * 8 - u - 1, d = (1 << m) - 1, b = d >> 1, g = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = o ? 0 : c - 1, T = o ? 1 : -1, P = s < 0 || s === 0 && 1 / s < 0 ? 1 : 0;
  for (s = Math.abs(s), isNaN(s) || s === 1 / 0 ? (h = isNaN(s) ? 1 : 0, l = d) : (l = Math.floor(Math.log(s) / Math.LN2), s * (p = Math.pow(2, -l)) < 1 && (l--, p *= 2), l + b >= 1 ? s += g / p : s += g * Math.pow(2, 1 - b), s * p >= 2 && (l++, p /= 2), l + b >= d ? (h = 0, l = d) : l + b >= 1 ? (h = (s * p - 1) * Math.pow(2, u), l = l + b) : (h = s * Math.pow(2, b - 1) * Math.pow(2, u), l = 0)); u >= 8; t[r + x] = h & 255, x += T, h /= 256, u -= 8)
    ;
  for (l = l << u | h, m += u; m > 0; t[r + x] = l & 255, x += T, l /= 256, m -= 8)
    ;
  t[r + x - T] |= P * 128;
}
var K1 = {}.toString, Dh = Array.isArray || function(t) {
  return K1.call(t) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var J1 = 50;
V.TYPED_ARRAY_SUPPORT = zt.TYPED_ARRAY_SUPPORT !== void 0 ? zt.TYPED_ARRAY_SUPPORT : !0;
Br();
function Br() {
  return V.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function ut(t, s) {
  if (Br() < s)
    throw new RangeError("Invalid typed array length");
  return V.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(s), t.__proto__ = V.prototype) : (t === null && (t = new V(s)), t.length = s), t;
}
function V(t, s, r) {
  if (!V.TYPED_ARRAY_SUPPORT && !(this instanceof V))
    return new V(t, s, r);
  if (typeof t == "number") {
    if (typeof s == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return so(this, t);
  }
  return Fh(this, t, s, r);
}
V.poolSize = 8192;
V._augment = function(t) {
  return t.__proto__ = V.prototype, t;
};
function Fh(t, s, r, o) {
  if (typeof s == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && s instanceof ArrayBuffer ? Z1(t, s, r, o) : typeof s == "string" ? Q1(t, s, r) : ey(t, s);
}
V.from = function(t, s, r) {
  return Fh(null, t, s, r);
};
V.TYPED_ARRAY_SUPPORT && (V.prototype.__proto__ = Uint8Array.prototype, V.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && V[Symbol.species]);
function Bh(t) {
  if (typeof t != "number")
    throw new TypeError('"size" argument must be a number');
  if (t < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Y1(t, s, r, o) {
  return Bh(s), s <= 0 ? ut(t, s) : r !== void 0 ? typeof o == "string" ? ut(t, s).fill(r, o) : ut(t, s).fill(r) : ut(t, s);
}
V.alloc = function(t, s, r) {
  return Y1(null, t, s, r);
};
function so(t, s) {
  if (Bh(s), t = ut(t, s < 0 ? 0 : ro(s) | 0), !V.TYPED_ARRAY_SUPPORT)
    for (var r = 0; r < s; ++r)
      t[r] = 0;
  return t;
}
V.allocUnsafe = function(t) {
  return so(null, t);
};
V.allocUnsafeSlow = function(t) {
  return so(null, t);
};
function Q1(t, s, r) {
  if ((typeof r != "string" || r === "") && (r = "utf8"), !V.isEncoding(r))
    throw new TypeError('"encoding" must be a valid string encoding');
  var o = Uh(s, r) | 0;
  t = ut(t, o);
  var u = t.write(s, r);
  return u !== o && (t = t.slice(0, u)), t;
}
function Jn(t, s) {
  var r = s.length < 0 ? 0 : ro(s.length) | 0;
  t = ut(t, r);
  for (var o = 0; o < r; o += 1)
    t[o] = s[o] & 255;
  return t;
}
function Z1(t, s, r, o) {
  if (s.byteLength, r < 0 || s.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (s.byteLength < r + (o || 0))
    throw new RangeError("'length' is out of bounds");
  return r === void 0 && o === void 0 ? s = new Uint8Array(s) : o === void 0 ? s = new Uint8Array(s, r) : s = new Uint8Array(s, r, o), V.TYPED_ARRAY_SUPPORT ? (t = s, t.__proto__ = V.prototype) : t = Jn(t, s), t;
}
function ey(t, s) {
  if (rt(s)) {
    var r = ro(s.length) | 0;
    return t = ut(t, r), t.length === 0 || s.copy(t, 0, 0, r), t;
  }
  if (s) {
    if (typeof ArrayBuffer < "u" && s.buffer instanceof ArrayBuffer || "length" in s)
      return typeof s.length != "number" || xy(s.length) ? ut(t, 0) : Jn(t, s);
    if (s.type === "Buffer" && Dh(s.data))
      return Jn(t, s.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function ro(t) {
  if (t >= Br())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Br().toString(16) + " bytes");
  return t | 0;
}
V.isBuffer = Sy;
function rt(t) {
  return !!(t != null && t._isBuffer);
}
V.compare = function(s, r) {
  if (!rt(s) || !rt(r))
    throw new TypeError("Arguments must be Buffers");
  if (s === r) return 0;
  for (var o = s.length, u = r.length, c = 0, l = Math.min(o, u); c < l; ++c)
    if (s[c] !== r[c]) {
      o = s[c], u = r[c];
      break;
    }
  return o < u ? -1 : u < o ? 1 : 0;
};
V.isEncoding = function(s) {
  switch (String(s).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
V.concat = function(s, r) {
  if (!Dh(s))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (s.length === 0)
    return V.alloc(0);
  var o;
  if (r === void 0)
    for (r = 0, o = 0; o < s.length; ++o)
      r += s[o].length;
  var u = V.allocUnsafe(r), c = 0;
  for (o = 0; o < s.length; ++o) {
    var l = s[o];
    if (!rt(l))
      throw new TypeError('"list" argument must be an Array of Buffers');
    l.copy(u, c), c += l.length;
  }
  return u;
};
function Uh(t, s) {
  if (rt(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var r = t.length;
  if (r === 0) return 0;
  for (var o = !1; ; )
    switch (s) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
      case void 0:
        return Ur(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return r * 2;
      case "hex":
        return r >>> 1;
      case "base64":
        return Xh(t).length;
      default:
        if (o) return Ur(t).length;
        s = ("" + s).toLowerCase(), o = !0;
    }
}
V.byteLength = Uh;
function ty(t, s, r) {
  var o = !1;
  if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, s >>>= 0, r <= s))
    return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return hy(this, s, r);
      case "utf8":
      case "utf-8":
        return jh(this, s, r);
      case "ascii":
        return ly(this, s, r);
      case "latin1":
      case "binary":
        return cy(this, s, r);
      case "base64":
        return oy(this, s, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return py(this, s, r);
      default:
        if (o) throw new TypeError("Unknown encoding: " + t);
        t = (t + "").toLowerCase(), o = !0;
    }
}
V.prototype._isBuffer = !0;
function Ft(t, s, r) {
  var o = t[s];
  t[s] = t[r], t[r] = o;
}
V.prototype.swap16 = function() {
  var s = this.length;
  if (s % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var r = 0; r < s; r += 2)
    Ft(this, r, r + 1);
  return this;
};
V.prototype.swap32 = function() {
  var s = this.length;
  if (s % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var r = 0; r < s; r += 4)
    Ft(this, r, r + 3), Ft(this, r + 1, r + 2);
  return this;
};
V.prototype.swap64 = function() {
  var s = this.length;
  if (s % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var r = 0; r < s; r += 8)
    Ft(this, r, r + 7), Ft(this, r + 1, r + 6), Ft(this, r + 2, r + 5), Ft(this, r + 3, r + 4);
  return this;
};
V.prototype.toString = function() {
  var s = this.length | 0;
  return s === 0 ? "" : arguments.length === 0 ? jh(this, 0, s) : ty.apply(this, arguments);
};
V.prototype.equals = function(s) {
  if (!rt(s)) throw new TypeError("Argument must be a Buffer");
  return this === s ? !0 : V.compare(this, s) === 0;
};
V.prototype.inspect = function() {
  var s = "", r = J1;
  return this.length > 0 && (s = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (s += " ... ")), "<Buffer " + s + ">";
};
V.prototype.compare = function(s, r, o, u, c) {
  if (!rt(s))
    throw new TypeError("Argument must be a Buffer");
  if (r === void 0 && (r = 0), o === void 0 && (o = s ? s.length : 0), u === void 0 && (u = 0), c === void 0 && (c = this.length), r < 0 || o > s.length || u < 0 || c > this.length)
    throw new RangeError("out of range index");
  if (u >= c && r >= o)
    return 0;
  if (u >= c)
    return -1;
  if (r >= o)
    return 1;
  if (r >>>= 0, o >>>= 0, u >>>= 0, c >>>= 0, this === s) return 0;
  for (var l = c - u, h = o - r, p = Math.min(l, h), m = this.slice(u, c), d = s.slice(r, o), b = 0; b < p; ++b)
    if (m[b] !== d[b]) {
      l = m[b], h = d[b];
      break;
    }
  return l < h ? -1 : h < l ? 1 : 0;
};
function $h(t, s, r, o, u) {
  if (t.length === 0) return -1;
  if (typeof r == "string" ? (o = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = u ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
    if (u) return -1;
    r = t.length - 1;
  } else if (r < 0)
    if (u) r = 0;
    else return -1;
  if (typeof s == "string" && (s = V.from(s, o)), rt(s))
    return s.length === 0 ? -1 : ul(t, s, r, o, u);
  if (typeof s == "number")
    return s = s & 255, V.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(t, s, r) : Uint8Array.prototype.lastIndexOf.call(t, s, r) : ul(t, [s], r, o, u);
  throw new TypeError("val must be string, number or Buffer");
}
function ul(t, s, r, o, u) {
  var c = 1, l = t.length, h = s.length;
  if (o !== void 0 && (o = String(o).toLowerCase(), o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le")) {
    if (t.length < 2 || s.length < 2)
      return -1;
    c = 2, l /= 2, h /= 2, r /= 2;
  }
  function p(x, T) {
    return c === 1 ? x[T] : x.readUInt16BE(T * c);
  }
  var m;
  if (u) {
    var d = -1;
    for (m = r; m < l; m++)
      if (p(t, m) === p(s, d === -1 ? 0 : m - d)) {
        if (d === -1 && (d = m), m - d + 1 === h) return d * c;
      } else
        d !== -1 && (m -= m - d), d = -1;
  } else
    for (r + h > l && (r = l - h), m = r; m >= 0; m--) {
      for (var b = !0, g = 0; g < h; g++)
        if (p(t, m + g) !== p(s, g)) {
          b = !1;
          break;
        }
      if (b) return m;
    }
  return -1;
}
V.prototype.includes = function(s, r, o) {
  return this.indexOf(s, r, o) !== -1;
};
V.prototype.indexOf = function(s, r, o) {
  return $h(this, s, r, o, !0);
};
V.prototype.lastIndexOf = function(s, r, o) {
  return $h(this, s, r, o, !1);
};
function sy(t, s, r, o) {
  r = Number(r) || 0;
  var u = t.length - r;
  o ? (o = Number(o), o > u && (o = u)) : o = u;
  var c = s.length;
  if (c % 2 !== 0) throw new TypeError("Invalid hex string");
  o > c / 2 && (o = c / 2);
  for (var l = 0; l < o; ++l) {
    var h = parseInt(s.substr(l * 2, 2), 16);
    if (isNaN(h)) return l;
    t[r + l] = h;
  }
  return l;
}
function ry(t, s, r, o) {
  return Si(Ur(s, t.length - r), t, r, o);
}
function Vh(t, s, r, o) {
  return Si(gy(s), t, r, o);
}
function iy(t, s, r, o) {
  return Vh(t, s, r, o);
}
function ny(t, s, r, o) {
  return Si(Xh(s), t, r, o);
}
function ay(t, s, r, o) {
  return Si(by(s, t.length - r), t, r, o);
}
V.prototype.write = function(s, r, o, u) {
  if (r === void 0)
    u = "utf8", o = this.length, r = 0;
  else if (o === void 0 && typeof r == "string")
    u = r, o = this.length, r = 0;
  else if (isFinite(r))
    r = r | 0, isFinite(o) ? (o = o | 0, u === void 0 && (u = "utf8")) : (u = o, o = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var c = this.length - r;
  if ((o === void 0 || o > c) && (o = c), s.length > 0 && (o < 0 || r < 0) || r > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  u || (u = "utf8");
  for (var l = !1; ; )
    switch (u) {
      case "hex":
        return sy(this, s, r, o);
      case "utf8":
      case "utf-8":
        return ry(this, s, r, o);
      case "ascii":
        return Vh(this, s, r, o);
      case "latin1":
      case "binary":
        return iy(this, s, r, o);
      case "base64":
        return ny(this, s, r, o);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ay(this, s, r, o);
      default:
        if (l) throw new TypeError("Unknown encoding: " + u);
        u = ("" + u).toLowerCase(), l = !0;
    }
};
V.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function oy(t, s, r) {
  return s === 0 && r === t.length ? ol(t) : ol(t.slice(s, r));
}
function jh(t, s, r) {
  r = Math.min(t.length, r);
  for (var o = [], u = s; u < r; ) {
    var c = t[u], l = null, h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
    if (u + h <= r) {
      var p, m, d, b;
      switch (h) {
        case 1:
          c < 128 && (l = c);
          break;
        case 2:
          p = t[u + 1], (p & 192) === 128 && (b = (c & 31) << 6 | p & 63, b > 127 && (l = b));
          break;
        case 3:
          p = t[u + 1], m = t[u + 2], (p & 192) === 128 && (m & 192) === 128 && (b = (c & 15) << 12 | (p & 63) << 6 | m & 63, b > 2047 && (b < 55296 || b > 57343) && (l = b));
          break;
        case 4:
          p = t[u + 1], m = t[u + 2], d = t[u + 3], (p & 192) === 128 && (m & 192) === 128 && (d & 192) === 128 && (b = (c & 15) << 18 | (p & 63) << 12 | (m & 63) << 6 | d & 63, b > 65535 && b < 1114112 && (l = b));
      }
    }
    l === null ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, o.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), o.push(l), u += h;
  }
  return uy(o);
}
var ll = 4096;
function uy(t) {
  var s = t.length;
  if (s <= ll)
    return String.fromCharCode.apply(String, t);
  for (var r = "", o = 0; o < s; )
    r += String.fromCharCode.apply(
      String,
      t.slice(o, o += ll)
    );
  return r;
}
function ly(t, s, r) {
  var o = "";
  r = Math.min(t.length, r);
  for (var u = s; u < r; ++u)
    o += String.fromCharCode(t[u] & 127);
  return o;
}
function cy(t, s, r) {
  var o = "";
  r = Math.min(t.length, r);
  for (var u = s; u < r; ++u)
    o += String.fromCharCode(t[u]);
  return o;
}
function hy(t, s, r) {
  var o = t.length;
  (!s || s < 0) && (s = 0), (!r || r < 0 || r > o) && (r = o);
  for (var u = "", c = s; c < r; ++c)
    u += yy(t[c]);
  return u;
}
function py(t, s, r) {
  for (var o = t.slice(s, r), u = "", c = 0; c < o.length; c += 2)
    u += String.fromCharCode(o[c] + o[c + 1] * 256);
  return u;
}
V.prototype.slice = function(s, r) {
  var o = this.length;
  s = ~~s, r = r === void 0 ? o : ~~r, s < 0 ? (s += o, s < 0 && (s = 0)) : s > o && (s = o), r < 0 ? (r += o, r < 0 && (r = 0)) : r > o && (r = o), r < s && (r = s);
  var u;
  if (V.TYPED_ARRAY_SUPPORT)
    u = this.subarray(s, r), u.__proto__ = V.prototype;
  else {
    var c = r - s;
    u = new V(c, void 0);
    for (var l = 0; l < c; ++l)
      u[l] = this[l + s];
  }
  return u;
};
function Ie(t, s, r) {
  if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + s > r) throw new RangeError("Trying to access beyond buffer length");
}
V.prototype.readUIntLE = function(s, r, o) {
  s = s | 0, r = r | 0, o || Ie(s, r, this.length);
  for (var u = this[s], c = 1, l = 0; ++l < r && (c *= 256); )
    u += this[s + l] * c;
  return u;
};
V.prototype.readUIntBE = function(s, r, o) {
  s = s | 0, r = r | 0, o || Ie(s, r, this.length);
  for (var u = this[s + --r], c = 1; r > 0 && (c *= 256); )
    u += this[s + --r] * c;
  return u;
};
V.prototype.readUInt8 = function(s, r) {
  return r || Ie(s, 1, this.length), this[s];
};
V.prototype.readUInt16LE = function(s, r) {
  return r || Ie(s, 2, this.length), this[s] | this[s + 1] << 8;
};
V.prototype.readUInt16BE = function(s, r) {
  return r || Ie(s, 2, this.length), this[s] << 8 | this[s + 1];
};
V.prototype.readUInt32LE = function(s, r) {
  return r || Ie(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
};
V.prototype.readUInt32BE = function(s, r) {
  return r || Ie(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
};
V.prototype.readIntLE = function(s, r, o) {
  s = s | 0, r = r | 0, o || Ie(s, r, this.length);
  for (var u = this[s], c = 1, l = 0; ++l < r && (c *= 256); )
    u += this[s + l] * c;
  return c *= 128, u >= c && (u -= Math.pow(2, 8 * r)), u;
};
V.prototype.readIntBE = function(s, r, o) {
  s = s | 0, r = r | 0, o || Ie(s, r, this.length);
  for (var u = r, c = 1, l = this[s + --u]; u > 0 && (c *= 256); )
    l += this[s + --u] * c;
  return c *= 128, l >= c && (l -= Math.pow(2, 8 * r)), l;
};
V.prototype.readInt8 = function(s, r) {
  return r || Ie(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
};
V.prototype.readInt16LE = function(s, r) {
  r || Ie(s, 2, this.length);
  var o = this[s] | this[s + 1] << 8;
  return o & 32768 ? o | 4294901760 : o;
};
V.prototype.readInt16BE = function(s, r) {
  r || Ie(s, 2, this.length);
  var o = this[s + 1] | this[s] << 8;
  return o & 32768 ? o | 4294901760 : o;
};
V.prototype.readInt32LE = function(s, r) {
  return r || Ie(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
};
V.prototype.readInt32BE = function(s, r) {
  return r || Ie(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
};
V.prototype.readFloatLE = function(s, r) {
  return r || Ie(s, 4, this.length), gi(this, s, !0, 23, 4);
};
V.prototype.readFloatBE = function(s, r) {
  return r || Ie(s, 4, this.length), gi(this, s, !1, 23, 4);
};
V.prototype.readDoubleLE = function(s, r) {
  return r || Ie(s, 8, this.length), gi(this, s, !0, 52, 8);
};
V.prototype.readDoubleBE = function(s, r) {
  return r || Ie(s, 8, this.length), gi(this, s, !1, 52, 8);
};
function je(t, s, r, o, u, c) {
  if (!rt(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (s > u || s < c) throw new RangeError('"value" argument is out of bounds');
  if (r + o > t.length) throw new RangeError("Index out of range");
}
V.prototype.writeUIntLE = function(s, r, o, u) {
  if (s = +s, r = r | 0, o = o | 0, !u) {
    var c = Math.pow(2, 8 * o) - 1;
    je(this, s, r, o, c, 0);
  }
  var l = 1, h = 0;
  for (this[r] = s & 255; ++h < o && (l *= 256); )
    this[r + h] = s / l & 255;
  return r + o;
};
V.prototype.writeUIntBE = function(s, r, o, u) {
  if (s = +s, r = r | 0, o = o | 0, !u) {
    var c = Math.pow(2, 8 * o) - 1;
    je(this, s, r, o, c, 0);
  }
  var l = o - 1, h = 1;
  for (this[r + l] = s & 255; --l >= 0 && (h *= 256); )
    this[r + l] = s / h & 255;
  return r + o;
};
V.prototype.writeUInt8 = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 1, 255, 0), V.TYPED_ARRAY_SUPPORT || (s = Math.floor(s)), this[r] = s & 255, r + 1;
};
function bi(t, s, r, o) {
  s < 0 && (s = 65535 + s + 1);
  for (var u = 0, c = Math.min(t.length - r, 2); u < c; ++u)
    t[r + u] = (s & 255 << 8 * (o ? u : 1 - u)) >>> (o ? u : 1 - u) * 8;
}
V.prototype.writeUInt16LE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 2, 65535, 0), V.TYPED_ARRAY_SUPPORT ? (this[r] = s & 255, this[r + 1] = s >>> 8) : bi(this, s, r, !0), r + 2;
};
V.prototype.writeUInt16BE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 2, 65535, 0), V.TYPED_ARRAY_SUPPORT ? (this[r] = s >>> 8, this[r + 1] = s & 255) : bi(this, s, r, !1), r + 2;
};
function xi(t, s, r, o) {
  s < 0 && (s = 4294967295 + s + 1);
  for (var u = 0, c = Math.min(t.length - r, 4); u < c; ++u)
    t[r + u] = s >>> (o ? u : 3 - u) * 8 & 255;
}
V.prototype.writeUInt32LE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 4, 4294967295, 0), V.TYPED_ARRAY_SUPPORT ? (this[r + 3] = s >>> 24, this[r + 2] = s >>> 16, this[r + 1] = s >>> 8, this[r] = s & 255) : xi(this, s, r, !0), r + 4;
};
V.prototype.writeUInt32BE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 4, 4294967295, 0), V.TYPED_ARRAY_SUPPORT ? (this[r] = s >>> 24, this[r + 1] = s >>> 16, this[r + 2] = s >>> 8, this[r + 3] = s & 255) : xi(this, s, r, !1), r + 4;
};
V.prototype.writeIntLE = function(s, r, o, u) {
  if (s = +s, r = r | 0, !u) {
    var c = Math.pow(2, 8 * o - 1);
    je(this, s, r, o, c - 1, -c);
  }
  var l = 0, h = 1, p = 0;
  for (this[r] = s & 255; ++l < o && (h *= 256); )
    s < 0 && p === 0 && this[r + l - 1] !== 0 && (p = 1), this[r + l] = (s / h >> 0) - p & 255;
  return r + o;
};
V.prototype.writeIntBE = function(s, r, o, u) {
  if (s = +s, r = r | 0, !u) {
    var c = Math.pow(2, 8 * o - 1);
    je(this, s, r, o, c - 1, -c);
  }
  var l = o - 1, h = 1, p = 0;
  for (this[r + l] = s & 255; --l >= 0 && (h *= 256); )
    s < 0 && p === 0 && this[r + l + 1] !== 0 && (p = 1), this[r + l] = (s / h >> 0) - p & 255;
  return r + o;
};
V.prototype.writeInt8 = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 1, 127, -128), V.TYPED_ARRAY_SUPPORT || (s = Math.floor(s)), s < 0 && (s = 255 + s + 1), this[r] = s & 255, r + 1;
};
V.prototype.writeInt16LE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 2, 32767, -32768), V.TYPED_ARRAY_SUPPORT ? (this[r] = s & 255, this[r + 1] = s >>> 8) : bi(this, s, r, !0), r + 2;
};
V.prototype.writeInt16BE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 2, 32767, -32768), V.TYPED_ARRAY_SUPPORT ? (this[r] = s >>> 8, this[r + 1] = s & 255) : bi(this, s, r, !1), r + 2;
};
V.prototype.writeInt32LE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 4, 2147483647, -2147483648), V.TYPED_ARRAY_SUPPORT ? (this[r] = s & 255, this[r + 1] = s >>> 8, this[r + 2] = s >>> 16, this[r + 3] = s >>> 24) : xi(this, s, r, !0), r + 4;
};
V.prototype.writeInt32BE = function(s, r, o) {
  return s = +s, r = r | 0, o || je(this, s, r, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), V.TYPED_ARRAY_SUPPORT ? (this[r] = s >>> 24, this[r + 1] = s >>> 16, this[r + 2] = s >>> 8, this[r + 3] = s & 255) : xi(this, s, r, !1), r + 4;
};
function qh(t, s, r, o, u, c) {
  if (r + o > t.length) throw new RangeError("Index out of range");
  if (r < 0) throw new RangeError("Index out of range");
}
function Hh(t, s, r, o, u) {
  return u || qh(t, s, r, 4), Rh(t, s, r, o, 23, 4), r + 4;
}
V.prototype.writeFloatLE = function(s, r, o) {
  return Hh(this, s, r, !0, o);
};
V.prototype.writeFloatBE = function(s, r, o) {
  return Hh(this, s, r, !1, o);
};
function zh(t, s, r, o, u) {
  return u || qh(t, s, r, 8), Rh(t, s, r, o, 52, 8), r + 8;
}
V.prototype.writeDoubleLE = function(s, r, o) {
  return zh(this, s, r, !0, o);
};
V.prototype.writeDoubleBE = function(s, r, o) {
  return zh(this, s, r, !1, o);
};
V.prototype.copy = function(s, r, o, u) {
  if (o || (o = 0), !u && u !== 0 && (u = this.length), r >= s.length && (r = s.length), r || (r = 0), u > 0 && u < o && (u = o), u === o || s.length === 0 || this.length === 0) return 0;
  if (r < 0)
    throw new RangeError("targetStart out of bounds");
  if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
  if (u < 0) throw new RangeError("sourceEnd out of bounds");
  u > this.length && (u = this.length), s.length - r < u - o && (u = s.length - r + o);
  var c = u - o, l;
  if (this === s && o < r && r < u)
    for (l = c - 1; l >= 0; --l)
      s[l + r] = this[l + o];
  else if (c < 1e3 || !V.TYPED_ARRAY_SUPPORT)
    for (l = 0; l < c; ++l)
      s[l + r] = this[l + o];
  else
    Uint8Array.prototype.set.call(
      s,
      this.subarray(o, o + c),
      r
    );
  return c;
};
V.prototype.fill = function(s, r, o, u) {
  if (typeof s == "string") {
    if (typeof r == "string" ? (u = r, r = 0, o = this.length) : typeof o == "string" && (u = o, o = this.length), s.length === 1) {
      var c = s.charCodeAt(0);
      c < 256 && (s = c);
    }
    if (u !== void 0 && typeof u != "string")
      throw new TypeError("encoding must be a string");
    if (typeof u == "string" && !V.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
  } else typeof s == "number" && (s = s & 255);
  if (r < 0 || this.length < r || this.length < o)
    throw new RangeError("Out of range index");
  if (o <= r)
    return this;
  r = r >>> 0, o = o === void 0 ? this.length : o >>> 0, s || (s = 0);
  var l;
  if (typeof s == "number")
    for (l = r; l < o; ++l)
      this[l] = s;
  else {
    var h = rt(s) ? s : Ur(new V(s, u).toString()), p = h.length;
    for (l = 0; l < o - r; ++l)
      this[l + r] = h[l % p];
  }
  return this;
};
var fy = /[^+\/0-9A-Za-z-_]/g;
function dy(t) {
  if (t = my(t).replace(fy, ""), t.length < 2) return "";
  for (; t.length % 4 !== 0; )
    t = t + "=";
  return t;
}
function my(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function yy(t) {
  return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function Ur(t, s) {
  s = s || 1 / 0;
  for (var r, o = t.length, u = null, c = [], l = 0; l < o; ++l) {
    if (r = t.charCodeAt(l), r > 55295 && r < 57344) {
      if (!u) {
        if (r > 56319) {
          (s -= 3) > -1 && c.push(239, 191, 189);
          continue;
        } else if (l + 1 === o) {
          (s -= 3) > -1 && c.push(239, 191, 189);
          continue;
        }
        u = r;
        continue;
      }
      if (r < 56320) {
        (s -= 3) > -1 && c.push(239, 191, 189), u = r;
        continue;
      }
      r = (u - 55296 << 10 | r - 56320) + 65536;
    } else u && (s -= 3) > -1 && c.push(239, 191, 189);
    if (u = null, r < 128) {
      if ((s -= 1) < 0) break;
      c.push(r);
    } else if (r < 2048) {
      if ((s -= 2) < 0) break;
      c.push(
        r >> 6 | 192,
        r & 63 | 128
      );
    } else if (r < 65536) {
      if ((s -= 3) < 0) break;
      c.push(
        r >> 12 | 224,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else if (r < 1114112) {
      if ((s -= 4) < 0) break;
      c.push(
        r >> 18 | 240,
        r >> 12 & 63 | 128,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return c;
}
function gy(t) {
  for (var s = [], r = 0; r < t.length; ++r)
    s.push(t.charCodeAt(r) & 255);
  return s;
}
function by(t, s) {
  for (var r, o, u, c = [], l = 0; l < t.length && !((s -= 2) < 0); ++l)
    r = t.charCodeAt(l), o = r >> 8, u = r % 256, c.push(u), c.push(o);
  return c;
}
function Xh(t) {
  return X1(dy(t));
}
function Si(t, s, r, o) {
  for (var u = 0; u < o && !(u + r >= s.length || u >= t.length); ++u)
    s[u + r] = t[u];
  return u;
}
function xy(t) {
  return t !== t;
}
function Sy(t) {
  return t != null && (!!t._isBuffer || Wh(t) || Ey(t));
}
function Wh(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function Ey(t) {
  return typeof t.readFloatLE == "function" && typeof t.slice == "function" && Wh(t.slice(0, 0));
}
var Py = Object.getOwnPropertyDescriptors || function(s) {
  for (var r = Object.keys(s), o = {}, u = 0; u < r.length; u++)
    o[r[u]] = Object.getOwnPropertyDescriptor(s, r[u]);
  return o;
};
function os(t, s) {
  var r = {
    seen: [],
    stylize: Ay
  };
  return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), Gh(s) ? r.showHidden = s : s && ky(r, s), ns(r.showHidden) && (r.showHidden = !1), ns(r.depth) && (r.depth = 2), ns(r.colors) && (r.colors = !1), ns(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = Ty), $r(r, t, r.depth);
}
os.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
os.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  // "name": intentionally not styling
  regexp: "red"
};
function Ty(t, s) {
  var r = os.styles[s];
  return r ? "\x1B[" + os.colors[r][0] + "m" + t + "\x1B[" + os.colors[r][1] + "m" : t;
}
function Ay(t, s) {
  return t;
}
function wy(t) {
  var s = {};
  return t.forEach(function(r, o) {
    s[r] = !0;
  }), s;
}
function $r(t, s, r) {
  if (t.customInspect && s && an(s.inspect) && // Filter out the util module, it's inspect function is special
  s.inspect !== os && // Also filter out any prototype objects using the circular check.
  !(s.constructor && s.constructor.prototype === s)) {
    var o = s.inspect(r, t);
    return tr(o) || (o = $r(t, o, r)), o;
  }
  var u = vy(t, s);
  if (u)
    return u;
  var c = Object.keys(s), l = wy(c);
  if (t.showHidden && (c = Object.getOwnPropertyNames(s)), nn(s) && (c.indexOf("message") >= 0 || c.indexOf("description") >= 0))
    return sn(s);
  if (c.length === 0) {
    if (an(s)) {
      var h = s.name ? ": " + s.name : "";
      return t.stylize("[Function" + h + "]", "special");
    }
    if (rn(s))
      return t.stylize(RegExp.prototype.toString.call(s), "regexp");
    if (cl(s))
      return t.stylize(Date.prototype.toString.call(s), "date");
    if (nn(s))
      return sn(s);
  }
  var p = "", m = !1, d = ["{", "}"];
  if (Ny(s) && (m = !0, d = ["[", "]"]), an(s)) {
    var b = s.name ? ": " + s.name : "";
    p = " [Function" + b + "]";
  }
  if (rn(s) && (p = " " + RegExp.prototype.toString.call(s)), cl(s) && (p = " " + Date.prototype.toUTCString.call(s)), nn(s) && (p = " " + sn(s)), c.length === 0 && (!m || s.length == 0))
    return d[0] + p + d[1];
  if (r < 0)
    return rn(s) ? t.stylize(RegExp.prototype.toString.call(s), "regexp") : t.stylize("[Object]", "special");
  t.seen.push(s);
  var g;
  return m ? g = Cy(t, s, r, l, c) : g = c.map(function(x) {
    return Yn(t, s, r, l, x, m);
  }), t.seen.pop(), Iy(g, p, d);
}
function vy(t, s) {
  if (ns(s))
    return t.stylize("undefined", "undefined");
  if (tr(s)) {
    var r = "'" + JSON.stringify(s).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return t.stylize(r, "string");
  }
  if (Oy(s))
    return t.stylize("" + s, "number");
  if (Gh(s))
    return t.stylize("" + s, "boolean");
  if (is(s))
    return t.stylize("null", "null");
}
function sn(t) {
  return "[" + Error.prototype.toString.call(t) + "]";
}
function Cy(t, s, r, o, u) {
  for (var c = [], l = 0, h = s.length; l < h; ++l)
    Kh(s, String(l)) ? c.push(Yn(
      t,
      s,
      r,
      o,
      String(l),
      !0
    )) : c.push("");
  return u.forEach(function(p) {
    p.match(/^\d+$/) || c.push(Yn(
      t,
      s,
      r,
      o,
      p,
      !0
    ));
  }), c;
}
function Yn(t, s, r, o, u, c) {
  var l, h, p;
  if (p = Object.getOwnPropertyDescriptor(s, u) || { value: s[u] }, p.get ? p.set ? h = t.stylize("[Getter/Setter]", "special") : h = t.stylize("[Getter]", "special") : p.set && (h = t.stylize("[Setter]", "special")), Kh(o, u) || (l = "[" + u + "]"), h || (t.seen.indexOf(p.value) < 0 ? (is(r) ? h = $r(t, p.value, null) : h = $r(t, p.value, r - 1), h.indexOf(`
`) > -1 && (c ? h = h.split(`
`).map(function(m) {
    return "  " + m;
  }).join(`
`).substr(2) : h = `
` + h.split(`
`).map(function(m) {
    return "   " + m;
  }).join(`
`))) : h = t.stylize("[Circular]", "special")), ns(l)) {
    if (c && u.match(/^\d+$/))
      return h;
    l = JSON.stringify("" + u), l.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (l = l.substr(1, l.length - 2), l = t.stylize(l, "name")) : (l = l.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), l = t.stylize(l, "string"));
  }
  return l + ": " + h;
}
function Iy(t, s, r) {
  var o = t.reduce(function(u, c) {
    return c.indexOf(`
`) >= 0, u + c.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  return o > 60 ? r[0] + (s === "" ? "" : s + `
 `) + " " + t.join(`,
  `) + " " + r[1] : r[0] + s + " " + t.join(", ") + " " + r[1];
}
function Ny(t) {
  return Array.isArray(t);
}
function Gh(t) {
  return typeof t == "boolean";
}
function is(t) {
  return t === null;
}
function _y(t) {
  return t == null;
}
function Oy(t) {
  return typeof t == "number";
}
function tr(t) {
  return typeof t == "string";
}
function ns(t) {
  return t === void 0;
}
function rn(t) {
  return Es(t) && io(t) === "[object RegExp]";
}
function Es(t) {
  return typeof t == "object" && t !== null;
}
function cl(t) {
  return Es(t) && io(t) === "[object Date]";
}
function nn(t) {
  return Es(t) && (io(t) === "[object Error]" || t instanceof Error);
}
function an(t) {
  return typeof t == "function";
}
function io(t) {
  return Object.prototype.toString.call(t);
}
function ky(t, s) {
  if (!s || !Es(s)) return t;
  for (var r = Object.keys(s), o = r.length; o--; )
    t[r[o]] = s[r[o]];
  return t;
}
function Kh(t, s) {
  return Object.prototype.hasOwnProperty.call(t, s);
}
var Mt = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
function Ly(t) {
  if (typeof t != "function")
    throw new TypeError('The "original" argument must be of type Function');
  if (Mt && t[Mt]) {
    var s = t[Mt];
    if (typeof s != "function")
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    return Object.defineProperty(s, Mt, {
      value: s,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), s;
  }
  function s() {
    for (var r, o, u = new Promise(function(h, p) {
      r = h, o = p;
    }), c = [], l = 0; l < arguments.length; l++)
      c.push(arguments[l]);
    c.push(function(h, p) {
      h ? o(h) : r(p);
    });
    try {
      t.apply(this, c);
    } catch (h) {
      o(h);
    }
    return u;
  }
  return Object.setPrototypeOf(s, Object.getPrototypeOf(t)), Mt && Object.defineProperty(s, Mt, {
    value: s,
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), Object.defineProperties(
    s,
    Py(t)
  );
}
Ly.custom = Mt;
function My(t, s) {
  return Object.prototype.hasOwnProperty.call(t, s);
}
var Jh = Array.isArray || function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
};
function on(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "boolean":
      return t ? "true" : "false";
    case "number":
      return isFinite(t) ? t : "";
    default:
      return "";
  }
}
function Ry(t, s, r, o) {
  return s = s || "&", r = r || "=", t === null && (t = void 0), typeof t == "object" ? hl(Dy(t), function(u) {
    var c = encodeURIComponent(on(u)) + r;
    return Jh(t[u]) ? hl(t[u], function(l) {
      return c + encodeURIComponent(on(l));
    }).join(s) : c + encodeURIComponent(on(t[u]));
  }).join(s) : "";
}
function hl(t, s) {
  if (t.map) return t.map(s);
  for (var r = [], o = 0; o < t.length; o++)
    r.push(s(t[o], o));
  return r;
}
var Dy = Object.keys || function(t) {
  var s = [];
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && s.push(r);
  return s;
};
function pl(t, s, r, o) {
  s = s || "&", r = r || "=";
  var u = {};
  if (typeof t != "string" || t.length === 0)
    return u;
  var c = /\+/g;
  t = t.split(s);
  var l = 1e3, h = t.length;
  h > l && (h = l);
  for (var p = 0; p < h; ++p) {
    var m = t[p].replace(c, "%20"), d = m.indexOf(r), b, g, x, T;
    d >= 0 ? (b = m.substr(0, d), g = m.substr(d + 1)) : (b = m, g = ""), x = decodeURIComponent(b), T = decodeURIComponent(g), My(u, x) ? Jh(u[x]) ? u[x].push(T) : u[x] = [u[x], T] : u[x] = T;
  }
  return u;
}
const Yh = zt.URL, Qh = zt.URLSearchParams;
var Fy = {
  parse: Ps,
  resolve: sp,
  resolveObject: rp,
  fileURLToPath: ep,
  format: tp,
  Url: He,
  // WHATWG API
  URL: Yh,
  URLSearchParams: Qh
};
function He() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var By = /^([a-z0-9.+-]+:)/i, Uy = /:[0-9]*$/, $y = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Vy = ["<", ">", '"', "`", " ", "\r", `
`, "	"], jy = ["{", "}", "|", "\\", "^", "`"].concat(Vy), Qn = ["'"].concat(jy), fl = ["%", "/", "?", ";", "#"].concat(Qn), dl = ["/", "?", "#"], qy = 255, ml = /^[+a-z0-9A-Z_-]{0,63}$/, Hy = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, zy = {
  javascript: !0,
  "javascript:": !0
}, Zn = {
  javascript: !0,
  "javascript:": !0
}, us = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Ps(t, s, r) {
  if (t && Es(t) && t instanceof He) return t;
  var o = new He();
  return o.parse(t, s, r), o;
}
He.prototype.parse = function(t, s, r) {
  return Zh(this, t, s, r);
};
function Zh(t, s, r, o) {
  if (!tr(s))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof s);
  var u = s.indexOf("?"), c = u !== -1 && u < s.indexOf("#") ? "?" : "#", l = s.split(c), h = /\\/g;
  l[0] = l[0].replace(h, "/"), s = l.join(c);
  var p = s;
  if (p = p.trim(), !o && s.split("#").length === 1) {
    var m = $y.exec(p);
    if (m)
      return t.path = p, t.href = p, t.pathname = m[1], m[2] ? (t.search = m[2], r ? t.query = pl(t.search.substr(1)) : t.query = t.search.substr(1)) : r && (t.search = "", t.query = {}), t;
  }
  var d = By.exec(p);
  if (d) {
    d = d[0];
    var b = d.toLowerCase();
    t.protocol = b, p = p.substr(d.length);
  }
  if (o || d || p.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var g = p.substr(0, 2) === "//";
    g && !(d && Zn[d]) && (p = p.substr(2), t.slashes = !0);
  }
  var x, T, P, y;
  if (!Zn[d] && (g || d && !us[d])) {
    var C = -1;
    for (x = 0; x < dl.length; x++)
      T = p.indexOf(dl[x]), T !== -1 && (C === -1 || T < C) && (C = T);
    var N, L;
    for (C === -1 ? L = p.lastIndexOf("@") : L = p.lastIndexOf("@", C), L !== -1 && (N = p.slice(0, L), p = p.slice(L + 1), t.auth = decodeURIComponent(N)), C = -1, x = 0; x < fl.length; x++)
      T = p.indexOf(fl[x]), T !== -1 && (C === -1 || T < C) && (C = T);
    C === -1 && (C = p.length), t.host = p.slice(0, C), p = p.slice(C), ip(t), t.hostname = t.hostname || "";
    var F = t.hostname[0] === "[" && t.hostname[t.hostname.length - 1] === "]";
    if (!F) {
      var M = t.hostname.split(/\./);
      for (x = 0, P = M.length; x < P; x++) {
        var D = M[x];
        if (D && !D.match(ml)) {
          for (var U = "", v = 0, I = D.length; v < I; v++)
            D.charCodeAt(v) > 127 ? U += "x" : U += D[v];
          if (!U.match(ml)) {
            var O = M.slice(0, x), R = M.slice(x + 1), j = D.match(Hy);
            j && (O.push(j[1]), R.unshift(j[2])), R.length && (p = "/" + R.join(".") + p), t.hostname = O.join(".");
            break;
          }
        }
      }
    }
    t.hostname.length > qy ? t.hostname = "" : t.hostname = t.hostname.toLowerCase(), F || (t.hostname = H1(t.hostname)), y = t.port ? ":" + t.port : "";
    var W = t.hostname || "";
    t.host = W + y, t.href += t.host, F && (t.hostname = t.hostname.substr(1, t.hostname.length - 2), p[0] !== "/" && (p = "/" + p));
  }
  if (!zy[b])
    for (x = 0, P = Qn.length; x < P; x++) {
      var ee = Qn[x];
      if (p.indexOf(ee) !== -1) {
        var $ = encodeURIComponent(ee);
        $ === ee && ($ = escape(ee)), p = p.split(ee).join($);
      }
    }
  var pe = p.indexOf("#");
  pe !== -1 && (t.hash = p.substr(pe), p = p.slice(0, pe));
  var X = p.indexOf("?");
  if (X !== -1 ? (t.search = p.substr(X), t.query = p.substr(X + 1), r && (t.query = pl(t.query)), p = p.slice(0, X)) : r && (t.search = "", t.query = {}), p && (t.pathname = p), us[b] && t.hostname && !t.pathname && (t.pathname = "/"), t.pathname || t.search) {
    y = t.pathname || "";
    var oe = t.search || "";
    t.path = y + oe;
  }
  return t.href = no(t), t;
}
function ep(t) {
  if (typeof t == "string")
    t = new He().parse(t);
  else if (!(t instanceof He))
    throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + typeof t + String(t));
  if (t.protocol !== "file:")
    throw new TypeError("The URL must be of scheme file");
  return Xy(t);
}
function Xy(t) {
  const s = t.pathname;
  for (let r = 0; r < s.length; r++)
    if (s[r] === "%") {
      const o = s.codePointAt(r + 2) | 32;
      if (s[r + 1] === "2" && o === 102)
        throw new TypeError(
          "must not include encoded / characters"
        );
    }
  return decodeURIComponent(s);
}
function tp(t) {
  return tr(t) && (t = Zh({}, t)), no(t);
}
function no(t) {
  var s = t.auth || "";
  s && (s = encodeURIComponent(s), s = s.replace(/%3A/i, ":"), s += "@");
  var r = t.protocol || "", o = t.pathname || "", u = t.hash || "", c = !1, l = "";
  t.host ? c = s + t.host : t.hostname && (c = s + (t.hostname.indexOf(":") === -1 ? t.hostname : "[" + this.hostname + "]"), t.port && (c += ":" + t.port)), t.query && Es(t.query) && Object.keys(t.query).length && (l = Ry(t.query));
  var h = t.search || l && "?" + l || "";
  return r && r.substr(-1) !== ":" && (r += ":"), t.slashes || (!r || us[r]) && c !== !1 ? (c = "//" + (c || ""), o && o.charAt(0) !== "/" && (o = "/" + o)) : c || (c = ""), u && u.charAt(0) !== "#" && (u = "#" + u), h && h.charAt(0) !== "?" && (h = "?" + h), o = o.replace(/[?#]/g, function(p) {
    return encodeURIComponent(p);
  }), h = h.replace("#", "%23"), r + c + o + h + u;
}
He.prototype.format = function() {
  return no(this);
};
function sp(t, s) {
  return Ps(t, !1, !0).resolve(s);
}
He.prototype.resolve = function(t) {
  return this.resolveObject(Ps(t, !1, !0)).format();
};
function rp(t, s) {
  return t ? Ps(t, !1, !0).resolveObject(s) : s;
}
He.prototype.resolveObject = function(t) {
  if (tr(t)) {
    var s = new He();
    s.parse(t, !1, !0), t = s;
  }
  for (var r = new He(), o = Object.keys(this), u = 0; u < o.length; u++) {
    var c = o[u];
    r[c] = this[c];
  }
  if (r.hash = t.hash, t.href === "")
    return r.href = r.format(), r;
  if (t.slashes && !t.protocol) {
    for (var l = Object.keys(t), h = 0; h < l.length; h++) {
      var p = l[h];
      p !== "protocol" && (r[p] = t[p]);
    }
    return us[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  var m;
  if (t.protocol && t.protocol !== r.protocol) {
    if (!us[t.protocol]) {
      for (var d = Object.keys(t), b = 0; b < d.length; b++) {
        var g = d[b];
        r[g] = t[g];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = t.protocol, !t.host && !Zn[t.protocol]) {
      for (m = (t.pathname || "").split("/"); m.length && !(t.host = m.shift()); ) ;
      t.host || (t.host = ""), t.hostname || (t.hostname = ""), m[0] !== "" && m.unshift(""), m.length < 2 && m.unshift(""), r.pathname = m.join("/");
    } else
      r.pathname = t.pathname;
    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
      var x = r.pathname || "", T = r.search || "";
      r.path = x + T;
    }
    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
  }
  var P = r.pathname && r.pathname.charAt(0) === "/", y = t.host || t.pathname && t.pathname.charAt(0) === "/", C = y || P || r.host && t.pathname, N = C, L = r.pathname && r.pathname.split("/") || [], F = r.protocol && !us[r.protocol];
  m = t.pathname && t.pathname.split("/") || [], F && (r.hostname = "", r.port = null, r.host && (L[0] === "" ? L[0] = r.host : L.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && (m[0] === "" ? m[0] = t.host : m.unshift(t.host)), t.host = null), C = C && (m[0] === "" || L[0] === ""));
  var M;
  if (y)
    r.host = t.host || t.host === "" ? t.host : r.host, r.hostname = t.hostname || t.hostname === "" ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, L = m;
  else if (m.length)
    L || (L = []), L.pop(), L = L.concat(m), r.search = t.search, r.query = t.query;
  else if (!_y(t.search))
    return F && (r.hostname = r.host = L.shift(), M = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1, M && (r.auth = M.shift(), r.host = r.hostname = M.shift())), r.search = t.search, r.query = t.query, (!is(r.pathname) || !is(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  if (!L.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var D = L.slice(-1)[0], U = (r.host || t.host || L.length > 1) && (D === "." || D === "..") || D === "", v = 0, I = L.length; I >= 0; I--)
    D = L[I], D === "." ? L.splice(I, 1) : D === ".." ? (L.splice(I, 1), v++) : v && (L.splice(I, 1), v--);
  if (!C && !N)
    for (; v--; v)
      L.unshift("..");
  C && L[0] !== "" && (!L[0] || L[0].charAt(0) !== "/") && L.unshift(""), U && L.join("/").substr(-1) !== "/" && L.push("");
  var O = L[0] === "" || L[0] && L[0].charAt(0) === "/";
  return F && (r.hostname = r.host = O ? "" : L.length ? L.shift() : "", M = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1, M && (r.auth = M.shift(), r.host = r.hostname = M.shift())), C = C || r.host && L.length, C && !O && L.unshift(""), L.length ? r.pathname = L.join("/") : (r.pathname = null, r.path = null), (!is(r.pathname) || !is(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
};
He.prototype.parseHost = function() {
  return ip(this);
};
function ip(t) {
  var s = t.host, r = Uy.exec(s);
  r && (r = r[0], r !== ":" && (t.port = r.substr(1)), s = s.substr(0, s.length - r.length)), s && (t.hostname = s);
}
var Wy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  URL: Yh,
  URLSearchParams: Qh,
  Url: He,
  default: Fy,
  fileURLToPath: ep,
  format: tp,
  parse: Ps,
  resolve: sp,
  resolveObject: rp
});
function np(t) {
  const s = t.charAt(0);
  return s === "." || s === "~" || s === "@";
}
const Gy = /^(https?:)?\/\//;
function ap(t) {
  return Gy.test(t);
}
const Ky = /^\s*data:/i;
function ea(t) {
  return Ky.test(t);
}
function ta(t) {
  if (t.charAt(0) === "~") {
    const r = t.charAt(1);
    t = t.slice(r === "/" ? 2 : 1);
  }
  return Jy(t);
}
function Jy(t) {
  return Ps(ne(t) ? t : "", !1, !0);
}
var Yy = Object.defineProperty, Qy = Object.defineProperties, Zy = Object.getOwnPropertyDescriptors, yl = Object.getOwnPropertySymbols, eg = Object.prototype.hasOwnProperty, tg = Object.prototype.propertyIsEnumerable, gl = (t, s, r) => s in t ? Yy(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r, un = (t, s) => {
  for (var r in s || (s = {}))
    eg.call(s, r) && gl(t, r, s[r]);
  if (yl)
    for (var r of yl(s))
      tg.call(s, r) && gl(t, r, s[r]);
  return t;
}, sg = (t, s) => Qy(t, Zy(s));
const zs = {
  base: null,
  includeAbsolute: !1,
  tags: {
    video: ["src", "poster"],
    source: ["src"],
    img: ["src"],
    image: ["xlink:href", "href"],
    use: ["xlink:href", "href"]
  }
}, rg = (t) => Object.keys(t).some((s) => Ae(t[s])) ? sg(un({}, zs), {
  tags: t
}) : un(un({}, zs), t), ig = (t) => (s, r) => op(s, r, t), op = (t, s, r = zs) => {
  if (t.type === 1) {
    if (!t.props.length)
      return;
    const o = r.tags || zs.tags, u = o[t.tag], c = o["*"];
    if (!u && !c)
      return;
    const l = (u || []).concat(c || []);
    t.props.forEach((h, p) => {
      if (h.type !== 6 || !l.includes(h.name) || !h.value || ap(h.value.content) || ea(h.value.content) || h.value.content[0] === "#" || !r.includeAbsolute && !np(h.value.content))
        return;
      const m = ta(h.value.content);
      if (r.base && h.value.content[0] === ".") {
        const b = ta(r.base), g = b.protocol || "", x = b.host ? g + "//" + b.host : "", T = b.path || "/";
        h.value.content = x + (ft.posix || ft).join(T, m.path + (m.hash || ""));
        return;
      }
      const d = ng(m.path, m.hash, h.loc, s);
      t.props[p] = {
        type: 7,
        name: "bind",
        arg: z(h.name, !0, h.loc),
        exp: d,
        modifiers: [],
        loc: h.loc
      };
    });
  }
};
function ng(t, s, r, o) {
  if (t) {
    let u, c;
    const l = o.imports.findIndex((d) => d.path === t);
    if (l > -1 ? (u = `_imports_${l}`, c = o.imports[l].exp) : (u = `_imports_${o.imports.length}`, c = z(
      u,
      !1,
      r,
      3
    ), o.imports.push({
      exp: c,
      path: decodeURIComponent(t)
    })), !s)
      return c;
    const h = `${u} + '${s}'`, p = z(
      h,
      !1,
      r,
      3
    );
    if (!o.hoistStatic)
      return p;
    const m = o.hoists.findIndex((d) => d && d.type === 4 && !d.isStatic && d.content === h);
    return m > -1 ? z(
      `_hoisted_${m + 1}`,
      !1,
      r,
      3
    ) : o.hoist(p);
  } else
    return z("''", !1, r, 3);
}
const ag = ["img", "source"], og = /( |\\t|\\n|\\f|\\r)+/g, ug = (t) => (s, r) => up(s, r, t), up = (t, s, r = zs) => {
  t.type === 1 && ag.includes(t.tag) && t.props.length && t.props.forEach((o, u) => {
    if (o.name === "srcset" && o.type === 6) {
      if (!o.value) return;
      const c = o.value.content;
      if (!c) return;
      const l = c.split(",").map((d) => {
        const [b, g] = d.replace(og, " ").trim().split(" ", 2);
        return { url: b, descriptor: g };
      });
      for (let d = 0; d < l.length; d++) {
        const { url: b } = l[d];
        ea(b) && (l[d + 1].url = b + "," + l[d + 1].url, l.splice(d, 1));
      }
      const h = (d) => !ap(d) && !ea(d) && (r.includeAbsolute || np(d));
      if (!l.some(({ url: d }) => h(d)))
        return;
      if (r.base) {
        const d = r.base, b = [];
        let g = !1;
        if (l.forEach((x) => {
          let { url: T, descriptor: P } = x;
          P = P ? ` ${P}` : "", T[0] === "." ? (x.url = (ft.posix || ft).join(d, T), b.push(x.url + P)) : h(T) ? g = !0 : b.push(T + P);
        }), !g) {
          o.value.content = b.join(", ");
          return;
        }
      }
      const p = we([], o.loc);
      l.forEach(({ url: d, descriptor: b }, g) => {
        if (h(d)) {
          const { path: T } = ta(d);
          let P;
          if (T) {
            const y = s.imports.findIndex(
              (C) => C.path === T
            );
            y > -1 ? P = z(
              `_imports_${y}`,
              !1,
              o.loc,
              3
            ) : (P = z(
              `_imports_${s.imports.length}`,
              !1,
              o.loc,
              3
            ), s.imports.push({ exp: P, path: T })), p.children.push(P);
          }
        } else {
          const T = z(
            `"${d}"`,
            !1,
            o.loc,
            3
          );
          p.children.push(T);
        }
        const x = l.length - 1 > g;
        b && x ? p.children.push(` + ' ${b}, ' + `) : b ? p.children.push(` + ' ${b}'`) : x && p.children.push(" + ', ' + ");
      });
      let m = p;
      s.hoistStatic && (m = s.hoist(p), m.constType = 3), t.props[u] = {
        type: 7,
        name: "bind",
        arg: z("srcset", !0, o.loc),
        exp: m,
        modifiers: [],
        loc: o.loc
      };
    }
  });
}, Vr = Symbol("ssrInterpolate"), lp = Symbol("ssrRenderVNode"), cp = Symbol("ssrRenderComponent"), hp = Symbol("ssrRenderSlot"), pp = Symbol("ssrRenderSlotInner"), fp = Symbol("ssrRenderClass"), dp = Symbol("ssrRenderStyle"), ao = Symbol("ssrRenderAttrs"), mp = Symbol("ssrRenderAttr"), yp = Symbol("ssrRenderDynamicAttr"), gp = Symbol("ssrRenderList"), oo = Symbol(
  "ssrIncludeBooleanAttr"
), Nr = Symbol("ssrLooseEqual"), sa = Symbol("ssrLooseContain"), bp = Symbol(
  "ssrRenderDynamicModel"
), xp = Symbol(
  "ssrGetDynamicModelProps"
), Sp = Symbol("ssrRenderTeleport"), Ep = Symbol("ssrRenderSuspense"), Pp = Symbol("ssrGetDirectiveProps"), ra = {
  [Vr]: "ssrInterpolate",
  [lp]: "ssrRenderVNode",
  [cp]: "ssrRenderComponent",
  [hp]: "ssrRenderSlot",
  [pp]: "ssrRenderSlotInner",
  [fp]: "ssrRenderClass",
  [dp]: "ssrRenderStyle",
  [ao]: "ssrRenderAttrs",
  [mp]: "ssrRenderAttr",
  [yp]: "ssrRenderDynamicAttr",
  [gp]: "ssrRenderList",
  [oo]: "ssrIncludeBooleanAttr",
  [Nr]: "ssrLooseEqual",
  [sa]: "ssrLooseContain",
  [bp]: "ssrRenderDynamicModel",
  [xp]: "ssrGetDynamicModelProps",
  [Sp]: "ssrRenderTeleport",
  [Ep]: "ssrRenderSuspense",
  [Pp]: "ssrGetDirectiveProps"
};
da(ra);
const lg = Zs(
  /^(if|else|else-if)$/,
  _a
);
function cg(t, s, r = !1, o = !1) {
  const [u] = t.branches, c = Lr(
    u.condition,
    bl(u, s, r)
  );
  s.pushStatement(c);
  let l = c;
  for (let h = 1; h < t.branches.length; h++) {
    const p = t.branches[h], m = bl(
      p,
      s,
      r
    );
    p.condition ? l = l.alternate = Lr(
      p.condition,
      m
    ) : l.alternate = m;
  }
  !l.alternate && !o && (l.alternate = Qs([
    Q("_push", ["`<!---->`"])
  ]));
}
function bl(t, s, r = !1) {
  const { children: o } = t, u = !r && (o.length !== 1 || o[0].type !== 1) && // optimize away nested fragments when the only child is a ForNode
  !(o.length === 1 && o[0].type === 11);
  return Ts(t, s, u);
}
const hg = Zs("for", ka);
function pg(t, s, r = !1) {
  const o = !r && (t.children.length !== 1 || t.children[0].type !== 1), u = ze(
    qs(t.parseResult)
  );
  u.body = Ts(
    t,
    s,
    o
  ), r || s.pushStringPart("<!--[-->"), s.pushStatement(
    Q(s.helper(gp), [
      t.source,
      u
    ])
  ), r || s.pushStringPart("<!--]-->");
}
const fg = (t, s) => {
  if (fs(t)) {
    const { slotName: r, slotProps: o } = Fa(t, s), u = [
      "_ctx.$slots",
      r,
      o || "{}",
      // fallback content placeholder. will be replaced in the process phase
      "null",
      "_push",
      "_parent"
    ];
    s.scopeId && s.slotted !== !1 && u.push(`"${s.scopeId}-s"`);
    let c = hp, l = s.parent;
    if (l) {
      const h = l.children;
      l.type === 10 && (l = s.grandParent);
      let p;
      l.type === 1 && l.tagType === 1 && ((p = fi(l, s, !0)) === Xt || p === Ss) && h.filter((m) => m.type === 1).length === 1 && (c = pp, s.scopeId && s.slotted !== !1 || u.push("null"), u.push("true"));
    }
    t.ssrCodegenNode = Q(s.helper(c), u);
  }
};
function dg(t, s) {
  const r = t.ssrCodegenNode;
  if (t.children.length) {
    const o = ze([]);
    o.body = Ts(t, s), r.arguments[3] = o;
  }
  if (s.withSlotScopeId) {
    const o = r.arguments[6];
    r.arguments[6] = o ? `${o} + _scopeId` : "_scopeId";
  }
  s.pushStatement(t.ssrCodegenNode);
}
function Xs(t, s) {
  return ae(t, s, mg);
}
const mg = {
  65: "Unsafe attribute name for SSR.",
  66: "Missing the 'to' prop on teleport element.",
  67: "Invalid AST node during SSR transform."
};
function yg(t, s) {
  const r = Ve(t, "to");
  if (!r) {
    s.onError(
      Xs(66, t.loc)
    );
    return;
  }
  let o;
  if (r.type === 6 ? o = r.value && z(r.value.content, !0) : o = r.exp, !o) {
    s.onError(
      Xs(
        66,
        r.loc
      )
    );
    return;
  }
  const u = Ve(
    t,
    "disabled",
    !1,
    !0
    /* allow empty */
  ), c = u ? u.type === 6 ? "true" : u.exp || "false" : "false", l = ze(
    ["_push"],
    void 0,
    // Body is added later
    !0,
    // newline
    !1,
    // isSlot
    t.loc
  );
  l.body = Ts(t, s), s.pushStatement(
    Q(s.helper(Sp), [
      "_push",
      l,
      o,
      c,
      "_parent"
    ])
  );
}
const Tp = /* @__PURE__ */ new WeakMap();
function gg(t, s) {
  return () => {
    if (t.children.length) {
      const r = {
        slotsExp: null,
        // to be immediately set
        wipSlots: []
      };
      Tp.set(t, r), r.slotsExp = Hs(
        t,
        s,
        (o, u, c, l) => {
          const h = ze(
            [],
            void 0,
            // no return, assign body later
            !0,
            // newline
            !1,
            // suspense slots are not treated as normal slots
            l
          );
          return r.wipSlots.push({
            fn: h,
            children: c
          }), h;
        }
      ).slots;
    }
  };
}
function bg(t, s) {
  const r = Tp.get(t);
  if (!r)
    return;
  const { slotsExp: o, wipSlots: u } = r;
  for (let c = 0; c < u.length; c++) {
    const l = u[c];
    l.fn.body = Ts(l, s);
  }
  s.pushStatement(
    Q(s.helper(Ep), [
      "_push",
      o
    ])
  );
}
const ks = /* @__PURE__ */ new WeakMap(), xg = (t, s) => {
  if (!(t.type !== 1 || t.tagType !== 0))
    return function() {
      const o = [`<${t.tag}`], u = t.tag === "textarea" || t.tag.indexOf("-") > 0, c = ai(t), l = t.props.some(
        (b) => b.type === 7 && !dc(b.name)
      ), h = c || l;
      if (h) {
        const { props: b, directives: g } = xs(
          t,
          s,
          t.props,
          !1,
          !1,
          !0
        );
        if (b || g.length) {
          const x = uo(b, g, s), T = Q(
            s.helper(ao),
            [x]
          );
          if (t.tag === "textarea") {
            const P = t.children[0];
            if (!P || P.type !== 5) {
              const y = `_temp${s.temps++}`;
              T.arguments = [
                Er(
                  z(y, !1),
                  x
                )
              ], ks.set(
                t,
                Q(s.helper(Vr), [
                  Ge(
                    z(`"value" in ${y}`, !1),
                    z(`${y}.value`, !1),
                    z(
                      P ? P.content : "",
                      !0
                    ),
                    !1
                  )
                ])
              );
            }
          } else if (t.tag === "input") {
            const P = Tg(t);
            if (P) {
              const y = `_temp${s.temps++}`, C = z(y, !1);
              T.arguments = [
                Nc([
                  Er(C, x),
                  Q(s.helper(jt), [
                    C,
                    Q(
                      s.helper(xp),
                      [
                        C,
                        // existing props
                        P.exp
                        // model
                      ]
                    )
                  ])
                ])
              ];
            }
          } else if (g.length && !t.children.length && !Ee(t, "text")) {
            const y = `_temp${s.temps++}`;
            T.arguments = [
              Er(
                z(y, !1),
                x
              )
            ], ks.set(
              t,
              Ge(
                z(`"textContent" in ${y}`, !1),
                Q(s.helper(Vr), [
                  z(`${y}.textContent`, !1)
                ]),
                z(`${y}.innerHTML ?? ''`, !1),
                !1
              )
            );
          }
          u && T.arguments.push(`"${t.tag}"`), o.push(T);
        }
      }
      let p, m, d;
      for (let b = 0; b < t.props.length; b++) {
        const g = t.props[b];
        if (!(t.tag === "input" && Sg(g)))
          if (g.type === 7) {
            if (g.name === "html" && g.exp)
              ks.set(
                t,
                we(["(", g.exp, ") ?? ''"])
              );
            else if (g.name === "text" && g.exp)
              t.children = [kr(g.exp, g.loc)];
            else if (g.name === "slot")
              s.onError(
                ae(40, g.loc)
              );
            else if (Eg(t, g) && g.exp)
              h || (t.children = [kr(g.exp, g.loc)]);
            else if (!h && g.name !== "on") {
              const x = s.directiveTransforms[g.name];
              if (x) {
                const { props: T, ssrTagParts: P } = x(
                  g,
                  t,
                  s
                );
                P && o.push(...P);
                for (let y = 0; y < T.length; y++) {
                  const { key: C, value: N } = T[y];
                  if (_e(C)) {
                    let L = C.content;
                    if (L === "key" || L === "ref")
                      continue;
                    L === "class" ? o.push(
                      ' class="',
                      p = Q(
                        s.helper(fp),
                        [N]
                      ),
                      '"'
                    ) : L === "style" ? d ? xl(d, N) : o.push(
                      ' style="',
                      d = Q(
                        s.helper(dp),
                        [N]
                      ),
                      '"'
                    ) : (L = t.tag.indexOf("-") > 0 ? L : Dd[L] || L.toLowerCase(), Ec(L) ? o.push(
                      Ge(
                        Q(
                          s.helper(oo),
                          [N]
                        ),
                        z(" " + L, !0),
                        z("", !0),
                        !1
                      )
                    ) : Rd(L) ? o.push(
                      Q(s.helper(mp), [
                        C,
                        N
                      ])
                    ) : s.onError(
                      Xs(
                        65,
                        C.loc
                      )
                    ));
                  } else {
                    const L = [C, N];
                    u && L.push(`"${t.tag}"`), o.push(
                      Q(
                        s.helper(yp),
                        L
                      )
                    );
                  }
                }
              }
            }
          } else {
            const x = g.name;
            if (t.tag === "textarea" && x === "value" && g.value)
              ks.set(t, Ze(g.value.content));
            else if (!h) {
              if (x === "key" || x === "ref")
                continue;
              x === "class" && g.value && (m = JSON.stringify(g.value.content)), o.push(
                ` ${g.name}` + (g.value ? `="${Ze(g.value.content)}"` : "")
              );
            }
          }
      }
      p && m && (xl(p, m), Pg(o, "class")), s.scopeId && o.push(` ${s.scopeId}`), t.ssrCodegenNode = ma(o);
    };
};
function uo(t, s, r) {
  let o = [];
  if (t && (t.type === 14 ? o = t.arguments : o.push(t)), s.length)
    for (const u of s)
      o.push(
        Q(r.helper(Pp), [
          "_ctx",
          ...Da(u, r).elements
        ])
      );
  return o.length > 1 ? Q(r.helper(jt), o) : o[0];
}
function Sg(t) {
  return t.type === 7 ? t.name === "bind" && t.arg && _e(t.arg) && (t.arg.content === "true-value" || t.arg.content === "false-value") : t.name === "true-value" || t.name === "false-value";
}
function Eg(t, s) {
  return !!(t.tag === "textarea" && s.name === "bind" && et(s.arg, "value"));
}
function xl(t, s) {
  const r = t.arguments[0];
  r.type === 17 ? r.elements.push(s) : t.arguments[0] = lt([r, s]);
}
function Pg(t, s) {
  const r = new RegExp(`^ ${s}=".+"$`), o = t.findIndex((u) => typeof u == "string" && r.test(u));
  o > -1 && t.splice(o, 1);
}
function Tg(t) {
  return t.props.find(
    (s) => s.type === 7 && s.name === "model" && s.exp
  );
}
function Ag(t, s) {
  const r = s.options.isVoidTag || Os, o = t.ssrCodegenNode.elements;
  for (let c = 0; c < o.length; c++)
    s.pushStringPart(o[c]);
  s.withSlotScopeId && s.pushStringPart(z("_scopeId", !1)), s.pushStringPart(">");
  const u = ks.get(t);
  u ? s.pushStringPart(u) : t.children.length && ht(t, s), r(t.tag) || s.pushStringPart(`</${t.tag}>`);
}
const Ap = /* @__PURE__ */ new WeakMap();
function wg(t, s) {
  return () => {
    const r = Ve(t, "tag");
    if (r) {
      const o = t.props.filter((h) => h !== r), { props: u, directives: c } = xs(
        t,
        s,
        o,
        !0,
        !1,
        !0
      );
      let l = null;
      (u || c.length) && (l = Q(s.helper(ao), [
        uo(u, c, s)
      ])), Ap.set(t, {
        tag: r,
        propsExp: l,
        scopeId: s.scopeId || null
      });
    }
  };
}
function vg(t, s) {
  const r = Ap.get(t);
  if (r) {
    const { tag: o, propsExp: u, scopeId: c } = r;
    o.type === 7 ? (s.pushStringPart("<"), s.pushStringPart(o.exp), u && s.pushStringPart(u), c && s.pushStringPart(` ${c}`), s.pushStringPart(">"), ht(
      t,
      s,
      !1,
      /**
       * TransitionGroup has the special runtime behavior of flattening and
       * concatenating all children into a single fragment (in order for them to
       * be patched using the same key map) so we need to account for that here
       * by disabling nested fragment wrappers from being generated.
       */
      !0,
      /**
       * TransitionGroup filters out comment children at runtime and thus
       * doesn't expect comments to be present during hydration. We need to
       * account for that by disabling the empty comment that is otherwise
       * rendered for a falsy v-if that has no v-else specified. (#6715)
       */
      !0
    ), s.pushStringPart("</"), s.pushStringPart(o.exp), s.pushStringPart(">")) : (s.pushStringPart(`<${o.value.content}`), u && s.pushStringPart(u), c && s.pushStringPart(` ${c}`), s.pushStringPart(">"), ht(t, s, !1, !0, !0), s.pushStringPart(`</${o.value.content}>`));
  } else
    ht(t, s, !0, !0, !0);
}
const wp = /* @__PURE__ */ new WeakMap();
function Cg(t, s) {
  return () => {
    const r = Ve(t, "appear", !1, !0);
    wp.set(t, !!r);
  };
}
function Ig(t, s) {
  t.children = t.children.filter((o) => o.type !== 3), wp.get(t) ? (s.pushStringPart("<template>"), ht(t, s, !1, !0), s.pushStringPart("</template>")) : ht(t, s, !1, !0);
}
var Ng = Object.defineProperty, _g = Object.defineProperties, Og = Object.getOwnPropertyDescriptors, Sl = Object.getOwnPropertySymbols, kg = Object.prototype.hasOwnProperty, Lg = Object.prototype.propertyIsEnumerable, El = (t, s, r) => s in t ? Ng(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r, Vt = (t, s) => {
  for (var r in s || (s = {}))
    kg.call(s, r) && El(t, r, s[r]);
  if (Sl)
    for (var r of Sl(s))
      Lg.call(s, r) && El(t, r, s[r]);
  return t;
}, Mg = (t, s) => _g(t, Og(s));
const vp = /* @__PURE__ */ new WeakMap(), Cp = Symbol(), Ip = /* @__PURE__ */ new WeakMap(), Rg = (t, s) => {
  if (t.type !== 1 || t.tagType !== 1)
    return;
  const r = fi(
    t,
    s,
    !0
    /* ssr */
  ), o = Ct(r) && r.callee === Ks;
  if (Ip.set(t, r), vt(r))
    return r === ds ? gg(t, s) : r === Ss ? wg(t, s) : r === Xt ? Cg(t) : void 0;
  const u = [], c = ia(t);
  return function() {
    c.children.length && Hs(c, s, (b, g, x) => (u.push(
      Vg(b, g, x, s)
    ), ze(void 0)));
    let h = "null";
    if (t.props.length) {
      const { props: b, directives: g } = xs(
        t,
        s,
        void 0,
        !0,
        o
      );
      (b || g.length) && (h = uo(b, g, s));
    }
    const p = [];
    vp.set(t, p);
    const m = (b, g, x, T) => {
      const P = b && pi(b) || "_", y = ze(
        [P, "_push", "_parent", "_scopeId"],
        void 0,
        // no return, assign body later
        !0,
        // newline
        !0,
        // isSlot
        T
      );
      return p.push({
        type: Cp,
        fn: y,
        children: x,
        // also collect the corresponding vnode branch built earlier
        vnodeBranch: u[p.length]
      }), y;
    }, d = t.children.length ? Hs(t, s, m).slots : "null";
    typeof r != "string" ? t.ssrCodegenNode = Q(
      s.helper(lp),
      [
        "_push",
        Q(s.helper(Gs), [
          r,
          h,
          d
        ]),
        "_parent"
      ]
    ) : t.ssrCodegenNode = Q(
      s.helper(cp),
      [r, h, d, "_parent"]
    );
  };
};
function Dg(t, s, r) {
  const o = Ip.get(t);
  if (t.ssrCodegenNode) {
    const u = vp.get(t) || [];
    for (let c = 0; c < u.length; c++) {
      const { fn: l, vnodeBranch: h } = u[c];
      l.body = Lr(
        z("_push", !1),
        Ts(
          u[c],
          s,
          !1,
          !0
        ),
        h
      );
    }
    s.withSlotScopeId && t.ssrCodegenNode.arguments.push("_scopeId"), typeof o == "string" ? s.pushStatement(
      Q("_push", [t.ssrCodegenNode])
    ) : s.pushStatement(t.ssrCodegenNode);
  } else {
    if (o === Bt)
      return yg(t, s);
    if (o === ds)
      return bg(t, s);
    if (o === Ss)
      return vg(t, s);
    if (r.type === Cp && s.pushStringPart(""), o === Xt)
      return Ig(t, s);
    ht(t, s);
  }
}
const Np = /* @__PURE__ */ new WeakMap(), [Fg, Bg] = Ba(!0), Ug = [...Fg, ...Ka], $g = Vt(Vt({}, Bg), Ja);
function Vg(t, s, r, o) {
  const u = Np.get(o.root), c = Mg(Vt({}, u), {
    // overwrite with vnode-based transforms
    nodeTransforms: [
      ...Ug,
      ...u.nodeTransforms || []
    ],
    directiveTransforms: Vt(Vt({}, $g), u.directiveTransforms || {})
  }), l = [];
  return t && l.push({
    type: 7,
    name: "slot",
    exp: t,
    arg: void 0,
    modifiers: [],
    loc: ye
  }), s && l.push(tt({}, s)), jg({
    type: 1,
    ns: 0,
    tag: "template",
    tagType: 3,
    props: l,
    children: r,
    loc: ye,
    codegenNode: void 0
  }, c, o), _c(r);
}
function jg(t, s, r) {
  const o = Ys([t]), u = ui(o, s);
  u.ssr = !1, u.scopes = Vt({}, r.scopes), u.identifiers = Vt({}, r.identifiers), u.imports = r.imports, gs(o, u), ["helpers", "components", "directives"].forEach((c) => {
    u[c].forEach((l, h) => {
      if (c === "helpers") {
        const p = r.helpers.get(h);
        p === void 0 ? r.helpers.set(h, l) : r.helpers.set(h, l + p);
      } else
        r[c].add(l);
    });
  });
}
function ia(t) {
  if (Ae(t))
    return t.map(ia);
  if (fc(t)) {
    const s = {};
    for (const r in t)
      s[r] = ia(t[r]);
    return s;
  } else
    return t;
}
function qg(t, s) {
  const r = _p(t, s);
  if (s.ssrCssVars) {
    const u = ui(Ys([]), s), c = Ce(
      z(s.ssrCssVars, !1),
      u
    );
    r.body.push(
      we(["const _cssVars = { style: ", c, "}"])
    ), Array.from(u.helpers.keys()).forEach((l) => {
      t.helpers.add(l);
    });
  }
  const o = t.children.length > 1 && t.children.some((u) => !Ls(u));
  ht(t, r, o), t.codegenNode = Qs(r.body), t.ssrHelpers = Array.from(
    /* @__PURE__ */ new Set([
      ...Array.from(t.helpers).filter((u) => u in ra),
      ...r.helpers
    ])
  ), t.helpers = new Set(Array.from(t.helpers).filter((u) => !(u in ra)));
}
function _p(t, s, r = /* @__PURE__ */ new Set(), o = !1) {
  const u = [];
  let c = null;
  return {
    root: t,
    options: s,
    body: u,
    helpers: r,
    withSlotScopeId: o,
    onError: s.onError || ((l) => {
      throw l;
    }),
    helper(l) {
      return r.add(l), l;
    },
    pushStringPart(l) {
      if (!c) {
        const m = Q("_push");
        u.push(m), c = ma([]), m.arguments.push(c);
      }
      const h = c.elements, p = h[h.length - 1];
      ne(l) && ne(p) ? h[h.length - 1] += l : h.push(l);
    },
    pushStatement(l) {
      c = null, u.push(l);
    }
  };
}
function Hg(t, s = t.withSlotScopeId) {
  return _p(
    t.root,
    t.options,
    t.helpers,
    s
  );
}
function ht(t, s, r = !1, o = !1, u = !1) {
  r && s.pushStringPart("<!--[-->");
  const { children: c } = t;
  for (let l = 0; l < c.length; l++) {
    const h = c[l];
    switch (h.type) {
      case 1:
        switch (h.tagType) {
          case 0:
            Ag(h, s);
            break;
          case 1:
            Dg(h, s, t);
            break;
          case 2:
            dg(h, s);
            break;
          case 3:
            break;
          default:
            return s.onError(
              Xs(
                67,
                h.loc
              )
            ), h;
        }
        break;
      case 2:
        s.pushStringPart(Ze(h.content));
        break;
      case 3:
        u || s.pushStringPart(`<!--${h.content}-->`);
        break;
      case 5:
        s.pushStringPart(
          Q(s.helper(Vr), [
            h.content
          ])
        );
        break;
      case 9:
        cg(h, s, o, u);
        break;
      case 11:
        pg(h, s, o);
        break;
      case 10:
        break;
      case 12:
      case 8:
        break;
      default:
        return s.onError(
          Xs(
            67,
            h.loc
          )
        ), h;
    }
  }
  r && s.pushStringPart("<!--]-->");
}
function Ts(t, s, r = !1, o = s.withSlotScopeId) {
  const u = Hg(s, o);
  return ht(t, u, r), Qs(u.body);
}
const zg = (t, s, r) => {
  const o = t.exp;
  function u() {
    const l = Ve(s, "value");
    l && r.onError(
      Me(
        60,
        l.loc
      )
    );
  }
  function c(l) {
    if (l.tag === "option") {
      if (l.props.findIndex((h) => h.name === "selected") === -1) {
        const h = Pl(l);
        l.ssrCodegenNode.elements.push(
          Ge(
            Q(r.helper(oo), [
              Ge(
                Q("Array.isArray", [o]),
                Q(r.helper(sa), [
                  o,
                  h
                ]),
                Q(r.helper(Nr), [
                  o,
                  h
                ])
              )
            ]),
            z(" selected", !0),
            z("", !0),
            !1
          )
        );
      }
    } else l.tag === "optgroup" && l.children.forEach(
      (h) => c(h)
    );
  }
  if (s.tagType === 0) {
    const l = { props: [] }, h = [
      // default value binding for text type inputs
      le("value", o)
    ];
    if (s.tag === "input") {
      const p = Ve(s, "type");
      if (p) {
        const m = Pl(s);
        if (p.type === 7)
          l.ssrTagParts = [
            Q(r.helper(bp), [
              p.exp,
              o,
              m
            ])
          ];
        else if (p.value)
          switch (p.value.content) {
            case "radio":
              l.props = [
                le(
                  "checked",
                  Q(r.helper(Nr), [
                    o,
                    m
                  ])
                )
              ];
              break;
            case "checkbox":
              const d = Ve(s, "true-value");
              if (d) {
                const b = d.type === 6 ? JSON.stringify(d.value.content) : d.exp;
                l.props = [
                  le(
                    "checked",
                    Q(r.helper(Nr), [
                      o,
                      b
                    ])
                  )
                ];
              } else
                l.props = [
                  le(
                    "checked",
                    Ge(
                      Q("Array.isArray", [o]),
                      Q(r.helper(sa), [
                        o,
                        m
                      ]),
                      o
                    )
                  )
                ];
              break;
            case "file":
              r.onError(
                Me(
                  59,
                  t.loc
                )
              );
              break;
            default:
              u(), l.props = h;
              break;
          }
      } else ai(s) || (u(), l.props = h);
    } else if (s.tag === "textarea")
      u(), s.children = [kr(o, o.loc)];
    else if (s.tag === "select") {
      const p = (m) => {
        m.forEach((d) => {
          d.type === 1 ? c(d) : d.type === 11 ? p(d.children) : d.type === 9 && d.branches.forEach((b) => p(b.children));
        });
      };
      p(s.children);
    } else
      r.onError(
        Me(
          57,
          t.loc
        )
      );
    return l;
  } else
    return mi(t, s, r);
};
function Pl(t) {
  const s = Ve(t, "value");
  return s ? s.type === 7 ? s.exp : z(s.value.content, !0) : z("null", !1);
}
const Xg = (t, s, r) => (t.exp || r.onError(
  Me(61)
), {
  props: [
    le(
      "style",
      Ge(
        t.exp,
        z("null", !1),
        Ue([
          le(
            "display",
            z("none", !0)
          )
        ]),
        !1
      )
    )
  ]
}), na = (t) => t.children.filter((s) => s.type !== 3), ln = (t) => na(t).length === 1, Wg = (t, s) => {
  if (t.type === 0 && (s.identifiers._attrs = 1), t.type === 1 && t.tagType === 1 && (t.tag === "transition" || t.tag === "Transition" || t.tag === "KeepAlive" || t.tag === "keep-alive")) {
    const o = na(s.root);
    if (o.length === 1 && o[0] === t) {
      ln(t) && cn(t.children[0]);
      return;
    }
  }
  const r = s.parent;
  if (!(!r || r.type !== 0))
    if (t.type === 10 && ln(t)) {
      let o = !1;
      for (const u of na(r))
        if (u.type === 9 || u.type === 1 && Ee(u, "if")) {
          if (o) return;
          o = !0;
        } else if (
          // node before v-if
          !o || // non else nodes
          !(u.type === 1 && Ee(u, /else/, !0))
        )
          return;
      cn(t.children[0]);
    } else ln(r) && cn(t);
};
function cn(t) {
  t.type === 1 && (t.tagType === 0 || t.tagType === 1) && !Ee(t, "for") && t.props.push({
    type: 7,
    name: "bind",
    arg: void 0,
    exp: z("_attrs", !1),
    modifiers: [],
    loc: ye
  });
}
const Gg = (t, s) => {
  if (!s.ssrCssVars)
    return;
  t.type === 0 && (s.identifiers._cssVars = 1);
  const r = s.parent;
  if (!(!r || r.type !== 0))
    if (t.type === 10)
      for (const o of t.children)
        jr(o);
    else
      jr(t);
};
function jr(t) {
  if (t.type === 1 && (t.tagType === 0 || t.tagType === 1) && !Ee(t, "for"))
    if (t.tag === "suspense" || t.tag === "Suspense")
      for (const s of t.children)
        s.type === 1 && s.tagType === 3 ? s.children.forEach(jr) : jr(s);
    else
      t.props.push({
        type: 7,
        name: "bind",
        arg: void 0,
        exp: z("_cssVars", !1),
        modifiers: [],
        loc: ye
      });
}
var Kg = Object.defineProperty, Jg = Object.defineProperties, Yg = Object.getOwnPropertyDescriptors, Tl = Object.getOwnPropertySymbols, Qg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, Al = (t, s, r) => s in t ? Kg(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r, gr = (t, s) => {
  for (var r in s || (s = {}))
    Qg.call(s, r) && Al(t, r, s[r]);
  if (Tl)
    for (var r of Tl(s))
      Zg.call(s, r) && Al(t, r, s[r]);
  return t;
}, wl = (t, s) => Jg(t, Yg(s));
function e2(t, s = {}) {
  s = wl(gr(gr({}, s), yi), {
    ssr: !0,
    inSSR: !0,
    scopeId: s.mode === "function" ? null : s.scopeId,
    // always prefix since compiler-ssr doesn't have size concern
    prefixIdentifiers: !0,
    // disable optimizations that are unnecessary for ssr
    cacheHandlers: !1,
    hoistStatic: !1
  });
  const r = typeof t == "string" ? oi(t, s) : t;
  return Np.set(r, s), Ca(r, wl(gr({}, s), {
    hoistStatic: !1,
    nodeTransforms: [
      lg,
      hg,
      Ra,
      Na,
      fg,
      Wg,
      Gg,
      xg,
      Rg,
      Ma,
      Xa,
      ...s.nodeTransforms || []
      // user transforms
    ],
    directiveTransforms: gr({
      // reusing core v-bind
      bind: Oa,
      on: di,
      // model and show have dedicated SSR handling
      model: zg,
      show: Xg,
      // the following are ignored during SSR
      // on: noopDirectiveTransform,
      cloak: Ms,
      once: Ms,
      memo: Ms
    }, s.directiveTransforms || {})
  })), qg(r, s), Ia(r, s);
}
var t2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  compile: e2
}), s2 = {}, r2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: s2
}), i2 = /* @__PURE__ */ ba(r2), lo = /* @__PURE__ */ ba(_1);
const vl = {};
function Cl(t) {
  !(typeof process < "u" && process.env.NODE_ENV === "production") && !vl[t] && (vl[t] = !0, n2(t));
}
function n2(t) {
  console.warn(
    `\x1B[1m\x1B[33m[@vue/compiler-sfc]\x1B[0m\x1B[33m ${t}\x1B[0m
`
  );
}
var a2 = Object.defineProperty, o2 = Object.defineProperties, u2 = Object.getOwnPropertyDescriptors, Il = Object.getOwnPropertySymbols, l2 = Object.prototype.hasOwnProperty, c2 = Object.prototype.propertyIsEnumerable, Nl = (t, s, r) => s in t ? a2(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r, qr = (t, s) => {
  for (var r in s || (s = {}))
    l2.call(s, r) && Nl(t, r, s[r]);
  if (Il)
    for (var r of Il(s))
      c2.call(s, r) && Nl(t, r, s[r]);
  return t;
}, aa = (t, s) => o2(t, u2(s));
function h2({ source: t, filename: s, preprocessOptions: r }, o) {
  let u = "", c = null;
  if (o.render(
    t,
    qr({ filename: s }, r),
    (l, h) => {
      l && (c = l), u = h;
    }
  ), c) throw c;
  return u;
}
function p2(t) {
  const { preprocessLang: s, preprocessCustomRequire: r } = t;
  if (s && !r)
    throw new Error(
      "[@vue/compiler-sfc] Template preprocessing in the browser build must provide the `preprocessCustomRequire` option to return the in-browser version of the preprocessor in the shape of { render(): string }."
    );
  const o = s ? r ? r(s) : void 0 : !1;
  if (o)
    try {
      return _l(aa(qr({}, t), {
        source: h2(t, o),
        ast: void 0
        // invalidate AST if template goes through preprocessor
      }));
    } catch (u) {
      return {
        code: "export default function render() {}",
        source: t.source,
        tips: [],
        errors: [u]
      };
    }
  else return s ? {
    code: "export default function render() {}",
    source: t.source,
    tips: [
      `Component ${t.filename} uses lang ${s} for template. Please install the language preprocessor.`
    ],
    errors: [
      `Component ${t.filename} uses lang ${s} for template, however it is not installed.`
    ]
  } : _l(t);
}
function _l({
  filename: t,
  id: s,
  scoped: r,
  slotted: o,
  inMap: u,
  source: c,
  ast: l,
  ssr: h = !1,
  ssrCssVars: p,
  isProd: m = !1,
  compiler: d,
  compilerOptions: b = {},
  transformAssetUrls: g
}) {
  const x = [], T = [];
  let P = [];
  if (Ct(g)) {
    const v = rg(g);
    P = [
      ig(v),
      ug(v)
    ];
  } else g !== !1 && (P = [op, up]);
  h && !p && Cl(
    "compileTemplate is called with `ssr: true` but no corresponding `cssVars` option."
  ), s || (Cl("compileTemplate now requires the `id` option."), s = "");
  const y = s.replace(/^data-v-/, ""), C = `data-v-${y}`, N = h ? t2 : rl;
  if (d = d || N, d !== N && (l = void 0), l != null && l.transformed) {
    const I = (h ? rl : d).parse(l.source, aa(qr({
      prefixIdentifiers: !0
    }, b), {
      parseMode: "sfc",
      onError: (O) => x.push(O)
    })).children.find(
      (O) => O.type === 1 && O.tag === "template"
    );
    l = Ys(I.children, l.source);
  }
  let { code: L, ast: F, preamble: M, map: D } = d.compile(l || c, aa(qr({
    mode: "module",
    prefixIdentifiers: !0,
    hoistStatic: !0,
    cacheHandlers: !0,
    ssrCssVars: h && p && p.length ? Zm(p, y, m, !0) : "",
    scopeId: r ? C : void 0,
    slotted: o,
    sourceMap: !0
  }, b), {
    hmr: !m,
    nodeTransforms: P.concat(b.nodeTransforms || []),
    filename: t,
    onError: (v) => x.push(v),
    onWarn: (v) => T.push(v)
  }));
  u && !l && (D && (D = f2(u, D)), x.length && d2(x, c, u));
  const U = T.map((v) => {
    let I = v.message;
    return v.loc && (I += `
${yc(
      (l == null ? void 0 : l.source) || c,
      v.loc.start.offset,
      v.loc.end.offset
    )}`), I;
  });
  return { code: L, ast: F, preamble: M, source: c, errors: x, tips: U, map: D };
}
function f2(t, s) {
  if (!t) return s;
  if (!s) return t;
  const r = new wr.SourceMapConsumer(t), o = new wr.SourceMapConsumer(s), u = new wr.SourceMapGenerator();
  o.eachMapping((l) => {
    if (l.originalLine == null)
      return;
    const h = r.originalPositionFor({
      line: l.originalLine,
      column: l.originalColumn
    });
    h.source != null && u.addMapping({
      generated: {
        line: l.generatedLine,
        column: l.generatedColumn
      },
      original: {
        line: h.line,
        // map line
        // use current column, since the oldMap produced by @vue/compiler-sfc
        // does not
        column: l.originalColumn
      },
      source: h.source,
      name: h.name
    });
  });
  const c = u;
  return r.sources.forEach((l) => {
    c._sources.add(l);
    const h = r.sourceContentFor(l);
    h != null && u.setSourceContent(l, h);
  }), c._sourceRoot = t.sourceRoot, c._file = t.file, c.toJSON();
}
function d2(t, s, r) {
  const o = r.sourcesContent[0], u = o.indexOf(s), c = o.slice(0, u).split(/\r?\n/).length - 1;
  t.forEach((l) => {
    l.loc && (l.loc.start.line += c, l.loc.start.offset += u, l.loc.end !== l.loc.start && (l.loc.end.line += c, l.loc.end.offset += u));
  });
}
var br = { exports: {} }, Ol;
function Op() {
  if (Ol) return br.exports;
  Ol = 1;
  let t = wt || {}, s = t.argv || [], r = t.env || {}, o = !(r.NO_COLOR || s.includes("--no-color")) && (!!r.FORCE_COLOR || s.includes("--color") || t.platform === "win32" || (t.stdout || {}).isTTY && r.TERM !== "dumb" || !!r.CI), u = (h, p, m = h) => (d) => {
    let b = "" + d, g = b.indexOf(p, h.length);
    return ~g ? h + c(b, p, m, g) + p : h + b + p;
  }, c = (h, p, m, d) => {
    let b = "", g = 0;
    do
      b += h.substring(g, d) + m, g = d + p.length, d = h.indexOf(p, g);
    while (~d);
    return b + h.substring(g);
  }, l = (h = o) => {
    let p = h ? u : () => String;
    return {
      isColorSupported: h,
      reset: p("\x1B[0m", "\x1B[0m"),
      bold: p("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
      dim: p("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
      italic: p("\x1B[3m", "\x1B[23m"),
      underline: p("\x1B[4m", "\x1B[24m"),
      inverse: p("\x1B[7m", "\x1B[27m"),
      hidden: p("\x1B[8m", "\x1B[28m"),
      strikethrough: p("\x1B[9m", "\x1B[29m"),
      black: p("\x1B[30m", "\x1B[39m"),
      red: p("\x1B[31m", "\x1B[39m"),
      green: p("\x1B[32m", "\x1B[39m"),
      yellow: p("\x1B[33m", "\x1B[39m"),
      blue: p("\x1B[34m", "\x1B[39m"),
      magenta: p("\x1B[35m", "\x1B[39m"),
      cyan: p("\x1B[36m", "\x1B[39m"),
      white: p("\x1B[37m", "\x1B[39m"),
      gray: p("\x1B[90m", "\x1B[39m"),
      bgBlack: p("\x1B[40m", "\x1B[49m"),
      bgRed: p("\x1B[41m", "\x1B[49m"),
      bgGreen: p("\x1B[42m", "\x1B[49m"),
      bgYellow: p("\x1B[43m", "\x1B[49m"),
      bgBlue: p("\x1B[44m", "\x1B[49m"),
      bgMagenta: p("\x1B[45m", "\x1B[49m"),
      bgCyan: p("\x1B[46m", "\x1B[49m"),
      bgWhite: p("\x1B[47m", "\x1B[49m"),
      blackBright: p("\x1B[90m", "\x1B[39m"),
      redBright: p("\x1B[91m", "\x1B[39m"),
      greenBright: p("\x1B[92m", "\x1B[39m"),
      yellowBright: p("\x1B[93m", "\x1B[39m"),
      blueBright: p("\x1B[94m", "\x1B[39m"),
      magentaBright: p("\x1B[95m", "\x1B[39m"),
      cyanBright: p("\x1B[96m", "\x1B[39m"),
      whiteBright: p("\x1B[97m", "\x1B[39m"),
      bgBlackBright: p("\x1B[100m", "\x1B[49m"),
      bgRedBright: p("\x1B[101m", "\x1B[49m"),
      bgGreenBright: p("\x1B[102m", "\x1B[49m"),
      bgYellowBright: p("\x1B[103m", "\x1B[49m"),
      bgBlueBright: p("\x1B[104m", "\x1B[49m"),
      bgMagentaBright: p("\x1B[105m", "\x1B[49m"),
      bgCyanBright: p("\x1B[106m", "\x1B[49m"),
      bgWhiteBright: p("\x1B[107m", "\x1B[49m")
    };
  };
  return br.exports = l(), br.exports.createColors = l, br.exports;
}
var hn, kl;
function kp() {
  if (kl) return hn;
  kl = 1;
  const t = 39, s = 34, r = 92, o = 47, u = 10, c = 32, l = 12, h = 9, p = 13, m = 91, d = 93, b = 40, g = 41, x = 123, T = 125, P = 59, y = 42, C = 58, N = 64, L = /[\t\n\f\r "#'()/;[\\\]{}]/g, F = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, M = /.[\r\n"'(/\\]/, D = /[\da-f]/i;
  return hn = function(v, I = {}) {
    let O = v.css.valueOf(), R = I.ignoreErrors, j, W, ee, $, pe, X, oe, Re, de, Ke, Kt = O.length, Z = 0, It = [], dt = [];
    function J() {
      return Z;
    }
    function te(Pe) {
      throw v.error("Unclosed " + Pe, Z);
    }
    function vi() {
      return dt.length === 0 && Z >= Kt;
    }
    function ie(Pe) {
      if (dt.length) return dt.pop();
      if (Z >= Kt) return;
      let Jt = Pe ? Pe.ignoreUnclosed : !1;
      switch (j = O.charCodeAt(Z), j) {
        case u:
        case c:
        case h:
        case p:
        case l: {
          $ = Z;
          do
            $ += 1, j = O.charCodeAt($);
          while (j === c || j === u || j === h || j === p || j === l);
          X = ["space", O.slice(Z, $)], Z = $ - 1;
          break;
        }
        case m:
        case d:
        case x:
        case T:
        case C:
        case P:
        case g: {
          let rr = String.fromCharCode(j);
          X = [rr, rr, Z];
          break;
        }
        case b: {
          if (Ke = It.length ? It.pop()[1] : "", de = O.charCodeAt(Z + 1), Ke === "url" && de !== t && de !== s && de !== c && de !== u && de !== h && de !== l && de !== p) {
            $ = Z;
            do {
              if (oe = !1, $ = O.indexOf(")", $ + 1), $ === -1)
                if (R || Jt) {
                  $ = Z;
                  break;
                } else
                  te("bracket");
              for (Re = $; O.charCodeAt(Re - 1) === r; )
                Re -= 1, oe = !oe;
            } while (oe);
            X = ["brackets", O.slice(Z, $ + 1), Z, $], Z = $;
          } else
            $ = O.indexOf(")", Z + 1), W = O.slice(Z, $ + 1), $ === -1 || M.test(W) ? X = ["(", "(", Z] : (X = ["brackets", W, Z, $], Z = $);
          break;
        }
        case t:
        case s: {
          pe = j === t ? "'" : '"', $ = Z;
          do {
            if (oe = !1, $ = O.indexOf(pe, $ + 1), $ === -1)
              if (R || Jt) {
                $ = Z + 1;
                break;
              } else
                te("string");
            for (Re = $; O.charCodeAt(Re - 1) === r; )
              Re -= 1, oe = !oe;
          } while (oe);
          X = ["string", O.slice(Z, $ + 1), Z, $], Z = $;
          break;
        }
        case N: {
          L.lastIndex = Z + 1, L.test(O), L.lastIndex === 0 ? $ = O.length - 1 : $ = L.lastIndex - 2, X = ["at-word", O.slice(Z, $ + 1), Z, $], Z = $;
          break;
        }
        case r: {
          for ($ = Z, ee = !0; O.charCodeAt($ + 1) === r; )
            $ += 1, ee = !ee;
          if (j = O.charCodeAt($ + 1), ee && j !== o && j !== c && j !== u && j !== h && j !== p && j !== l && ($ += 1, D.test(O.charAt($)))) {
            for (; D.test(O.charAt($ + 1)); )
              $ += 1;
            O.charCodeAt($ + 1) === c && ($ += 1);
          }
          X = ["word", O.slice(Z, $ + 1), Z, $], Z = $;
          break;
        }
        default: {
          j === o && O.charCodeAt(Z + 1) === y ? ($ = O.indexOf("*/", Z + 2) + 1, $ === 0 && (R || Jt ? $ = O.length : te("comment")), X = ["comment", O.slice(Z, $ + 1), Z, $], Z = $) : (F.lastIndex = Z + 1, F.test(O), F.lastIndex === 0 ? $ = O.length - 1 : $ = F.lastIndex - 2, X = ["word", O.slice(Z, $ + 1), Z, $], It.push(X), Z = $);
          break;
        }
      }
      return Z++, X;
    }
    function Ci(Pe) {
      dt.push(Pe);
    }
    return {
      back: Ci,
      endOfFile: vi,
      nextToken: ie,
      position: J
    };
  }, hn;
}
var pn, Ll;
function Lp() {
  if (Ll) return pn;
  Ll = 1;
  let t = /* @__PURE__ */ Op(), s = /* @__PURE__ */ kp(), r;
  function o(h) {
    r = h;
  }
  const u = {
    ";": t.yellow,
    ":": t.yellow,
    "(": t.cyan,
    ")": t.cyan,
    "[": t.yellow,
    "]": t.yellow,
    "{": t.yellow,
    "}": t.yellow,
    "at-word": t.cyan,
    brackets: t.cyan,
    call: t.cyan,
    class: t.yellow,
    comment: t.gray,
    hash: t.magenta,
    string: t.green
  };
  function c([h, p], m) {
    if (h === "word") {
      if (p[0] === ".")
        return "class";
      if (p[0] === "#")
        return "hash";
    }
    if (!m.endOfFile()) {
      let d = m.nextToken();
      if (m.back(d), d[0] === "brackets" || d[0] === "(") return "call";
    }
    return h;
  }
  function l(h) {
    let p = s(new r(h), { ignoreErrors: !0 }), m = "";
    for (; !p.endOfFile(); ) {
      let d = p.nextToken(), b = u[c(d, p)];
      b ? m += d[1].split(/\r?\n/).map((g) => b(g)).join(`
`) : m += d[1];
    }
    return m;
  }
  return l.registerInput = o, pn = l, pn;
}
var fn, Ml;
function co() {
  if (Ml) return fn;
  Ml = 1;
  let t = /* @__PURE__ */ Op(), s = /* @__PURE__ */ Lp();
  class r extends Error {
    constructor(u, c, l, h, p, m) {
      super(u), this.name = "CssSyntaxError", this.reason = u, p && (this.file = p), h && (this.source = h), m && (this.plugin = m), typeof c < "u" && typeof l < "u" && (typeof c == "number" ? (this.line = c, this.column = l) : (this.line = c.line, this.column = c.column, this.endLine = l.line, this.endColumn = l.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, r);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(u) {
      if (!this.source) return "";
      let c = this.source;
      u == null && (u = t.isColorSupported);
      let l = (x) => x, h = (x) => x, p = (x) => x;
      if (u) {
        let { bold: x, gray: T, red: P } = t.createColors(!0);
        h = (y) => x(P(y)), l = (y) => T(y), s && (p = (y) => s(y));
      }
      let m = c.split(/\r?\n/), d = Math.max(this.line - 3, 0), b = Math.min(this.line + 2, m.length), g = String(b).length;
      return m.slice(d, b).map((x, T) => {
        let P = d + 1 + T, y = " " + (" " + P).slice(-g) + " | ";
        if (P === this.line) {
          if (x.length > 160) {
            let N = 20, L = Math.max(0, this.column - N), F = Math.max(
              this.column + N,
              this.endColumn + N
            ), M = x.slice(L, F), D = l(y.replace(/\d/g, " ")) + x.slice(0, Math.min(this.column - 1, N - 1)).replace(/[^\t]/g, " ");
            return h(">") + l(y) + p(M) + `
 ` + D + h("^");
          }
          let C = l(y.replace(/\d/g, " ")) + x.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return h(">") + l(y) + p(x) + `
 ` + C + h("^");
        }
        return " " + l(y) + p(x);
      }).join(`
`);
    }
    toString() {
      let u = this.showSourceCode();
      return u && (u = `

` + u + `
`), this.name + ": " + this.message + u;
    }
  }
  return fn = r, r.default = r, fn;
}
var dn, Rl;
function Mp() {
  if (Rl) return dn;
  Rl = 1;
  const t = {
    after: `
`,
    beforeClose: `
`,
    beforeComment: `
`,
    beforeDecl: `
`,
    beforeOpen: " ",
    beforeRule: `
`,
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1
  };
  function s(o) {
    return o[0].toUpperCase() + o.slice(1);
  }
  class r {
    constructor(u) {
      this.builder = u;
    }
    atrule(u, c) {
      let l = "@" + u.name, h = u.params ? this.rawValue(u, "params") : "";
      if (typeof u.raws.afterName < "u" ? l += u.raws.afterName : h && (l += " "), u.nodes)
        this.block(u, l + h);
      else {
        let p = (u.raws.between || "") + (c ? ";" : "");
        this.builder(l + h + p, u);
      }
    }
    beforeAfter(u, c) {
      let l;
      u.type === "decl" ? l = this.raw(u, null, "beforeDecl") : u.type === "comment" ? l = this.raw(u, null, "beforeComment") : c === "before" ? l = this.raw(u, null, "beforeRule") : l = this.raw(u, null, "beforeClose");
      let h = u.parent, p = 0;
      for (; h && h.type !== "root"; )
        p += 1, h = h.parent;
      if (l.includes(`
`)) {
        let m = this.raw(u, null, "indent");
        if (m.length)
          for (let d = 0; d < p; d++) l += m;
      }
      return l;
    }
    block(u, c) {
      let l = this.raw(u, "between", "beforeOpen");
      this.builder(c + l + "{", u, "start");
      let h;
      u.nodes && u.nodes.length ? (this.body(u), h = this.raw(u, "after")) : h = this.raw(u, "after", "emptyBody"), h && this.builder(h), this.builder("}", u, "end");
    }
    body(u) {
      let c = u.nodes.length - 1;
      for (; c > 0 && u.nodes[c].type === "comment"; )
        c -= 1;
      let l = this.raw(u, "semicolon");
      for (let h = 0; h < u.nodes.length; h++) {
        let p = u.nodes[h], m = this.raw(p, "before");
        m && this.builder(m), this.stringify(p, c !== h || l);
      }
    }
    comment(u) {
      let c = this.raw(u, "left", "commentLeft"), l = this.raw(u, "right", "commentRight");
      this.builder("/*" + c + u.text + l + "*/", u);
    }
    decl(u, c) {
      let l = this.raw(u, "between", "colon"), h = u.prop + l + this.rawValue(u, "value");
      u.important && (h += u.raws.important || " !important"), c && (h += ";"), this.builder(h, u);
    }
    document(u) {
      this.body(u);
    }
    raw(u, c, l) {
      let h;
      if (l || (l = c), c && (h = u.raws[c], typeof h < "u"))
        return h;
      let p = u.parent;
      if (l === "before" && (!p || p.type === "root" && p.first === u || p && p.type === "document"))
        return "";
      if (!p) return t[l];
      let m = u.root();
      if (m.rawCache || (m.rawCache = {}), typeof m.rawCache[l] < "u")
        return m.rawCache[l];
      if (l === "before" || l === "after")
        return this.beforeAfter(u, l);
      {
        let d = "raw" + s(l);
        this[d] ? h = this[d](m, u) : m.walk((b) => {
          if (h = b.raws[c], typeof h < "u") return !1;
        });
      }
      return typeof h > "u" && (h = t[l]), m.rawCache[l] = h, h;
    }
    rawBeforeClose(u) {
      let c;
      return u.walk((l) => {
        if (l.nodes && l.nodes.length > 0 && typeof l.raws.after < "u")
          return c = l.raws.after, c.includes(`
`) && (c = c.replace(/[^\n]+$/, "")), !1;
      }), c && (c = c.replace(/\S/g, "")), c;
    }
    rawBeforeComment(u, c) {
      let l;
      return u.walkComments((h) => {
        if (typeof h.raws.before < "u")
          return l = h.raws.before, l.includes(`
`) && (l = l.replace(/[^\n]+$/, "")), !1;
      }), typeof l > "u" ? l = this.raw(c, null, "beforeDecl") : l && (l = l.replace(/\S/g, "")), l;
    }
    rawBeforeDecl(u, c) {
      let l;
      return u.walkDecls((h) => {
        if (typeof h.raws.before < "u")
          return l = h.raws.before, l.includes(`
`) && (l = l.replace(/[^\n]+$/, "")), !1;
      }), typeof l > "u" ? l = this.raw(c, null, "beforeRule") : l && (l = l.replace(/\S/g, "")), l;
    }
    rawBeforeOpen(u) {
      let c;
      return u.walk((l) => {
        if (l.type !== "decl" && (c = l.raws.between, typeof c < "u"))
          return !1;
      }), c;
    }
    rawBeforeRule(u) {
      let c;
      return u.walk((l) => {
        if (l.nodes && (l.parent !== u || u.first !== l) && typeof l.raws.before < "u")
          return c = l.raws.before, c.includes(`
`) && (c = c.replace(/[^\n]+$/, "")), !1;
      }), c && (c = c.replace(/\S/g, "")), c;
    }
    rawColon(u) {
      let c;
      return u.walkDecls((l) => {
        if (typeof l.raws.between < "u")
          return c = l.raws.between.replace(/[^\s:]/g, ""), !1;
      }), c;
    }
    rawEmptyBody(u) {
      let c;
      return u.walk((l) => {
        if (l.nodes && l.nodes.length === 0 && (c = l.raws.after, typeof c < "u"))
          return !1;
      }), c;
    }
    rawIndent(u) {
      if (u.raws.indent) return u.raws.indent;
      let c;
      return u.walk((l) => {
        let h = l.parent;
        if (h && h !== u && h.parent && h.parent === u && typeof l.raws.before < "u") {
          let p = l.raws.before.split(`
`);
          return c = p[p.length - 1], c = c.replace(/\S/g, ""), !1;
        }
      }), c;
    }
    rawSemicolon(u) {
      let c;
      return u.walk((l) => {
        if (l.nodes && l.nodes.length && l.last.type === "decl" && (c = l.raws.semicolon, typeof c < "u"))
          return !1;
      }), c;
    }
    rawValue(u, c) {
      let l = u[c], h = u.raws[c];
      return h && h.value === l ? h.raw : l;
    }
    root(u) {
      this.body(u), u.raws.after && this.builder(u.raws.after);
    }
    rule(u) {
      this.block(u, this.rawValue(u, "selector")), u.raws.ownSemicolon && this.builder(u.raws.ownSemicolon, u, "end");
    }
    stringify(u, c) {
      if (!this[u.type])
        throw new Error(
          "Unknown AST node type " + u.type + ". Maybe you need to change PostCSS stringifier."
        );
      this[u.type](u, c);
    }
  }
  return dn = r, r.default = r, dn;
}
var mn, Dl;
function Ei() {
  if (Dl) return mn;
  Dl = 1;
  let t = /* @__PURE__ */ Mp();
  function s(r, o) {
    new t(o).stringify(r);
  }
  return mn = s, s.default = s, mn;
}
var xr = {}, Fl;
function ho() {
  return Fl || (Fl = 1, xr.isClean = Symbol("isClean"), xr.my = Symbol("my")), xr;
}
var yn, Bl;
function Pi() {
  if (Bl) return yn;
  Bl = 1;
  let t = /* @__PURE__ */ co(), s = /* @__PURE__ */ Mp(), r = /* @__PURE__ */ Ei(), { isClean: o, my: u } = /* @__PURE__ */ ho();
  function c(p, m) {
    let d = new p.constructor();
    for (let b in p) {
      if (!Object.prototype.hasOwnProperty.call(p, b) || b === "proxyCache") continue;
      let g = p[b], x = typeof g;
      b === "parent" && x === "object" ? m && (d[b] = m) : b === "source" ? d[b] = g : Array.isArray(g) ? d[b] = g.map((T) => c(T, d)) : (x === "object" && g !== null && (g = c(g)), d[b] = g);
    }
    return d;
  }
  function l(p, m) {
    if (m && typeof m.offset < "u")
      return m.offset;
    let d = 1, b = 1, g = 0;
    for (let x = 0; x < p.length; x++) {
      if (b === m.line && d === m.column) {
        g = x;
        break;
      }
      p[x] === `
` ? (d = 1, b += 1) : d += 1;
    }
    return g;
  }
  class h {
    get proxyOf() {
      return this;
    }
    constructor(m = {}) {
      this.raws = {}, this[o] = !1, this[u] = !0;
      for (let d in m)
        if (d === "nodes") {
          this.nodes = [];
          for (let b of m[d])
            typeof b.clone == "function" ? this.append(b.clone()) : this.append(b);
        } else
          this[d] = m[d];
    }
    addToError(m) {
      if (m.postcssNode = this, m.stack && this.source && /\n\s{4}at /.test(m.stack)) {
        let d = this.source;
        m.stack = m.stack.replace(
          /\n\s{4}at /,
          `$&${d.input.from}:${d.start.line}:${d.start.column}$&`
        );
      }
      return m;
    }
    after(m) {
      return this.parent.insertAfter(this, m), this;
    }
    assign(m = {}) {
      for (let d in m)
        this[d] = m[d];
      return this;
    }
    before(m) {
      return this.parent.insertBefore(this, m), this;
    }
    cleanRaws(m) {
      delete this.raws.before, delete this.raws.after, m || delete this.raws.between;
    }
    clone(m = {}) {
      let d = c(this);
      for (let b in m)
        d[b] = m[b];
      return d;
    }
    cloneAfter(m = {}) {
      let d = this.clone(m);
      return this.parent.insertAfter(this, d), d;
    }
    cloneBefore(m = {}) {
      let d = this.clone(m);
      return this.parent.insertBefore(this, d), d;
    }
    error(m, d = {}) {
      if (this.source) {
        let { end: b, start: g } = this.rangeBy(d);
        return this.source.input.error(
          m,
          { column: g.column, line: g.line },
          { column: b.column, line: b.line },
          d
        );
      }
      return new t(m);
    }
    getProxyProcessor() {
      return {
        get(m, d) {
          return d === "proxyOf" ? m : d === "root" ? () => m.root().toProxy() : m[d];
        },
        set(m, d, b) {
          return m[d] === b || (m[d] = b, (d === "prop" || d === "value" || d === "name" || d === "params" || d === "important" || /* c8 ignore next */
          d === "text") && m.markDirty()), !0;
        }
      };
    }
    /* c8 ignore next 3 */
    markClean() {
      this[o] = !0;
    }
    markDirty() {
      if (this[o]) {
        this[o] = !1;
        let m = this;
        for (; m = m.parent; )
          m[o] = !1;
      }
    }
    next() {
      if (!this.parent) return;
      let m = this.parent.index(this);
      return this.parent.nodes[m + 1];
    }
    positionBy(m) {
      let d = this.source.start;
      if (m.index)
        d = this.positionInside(m.index);
      else if (m.word) {
        let b = "document" in this.source.input ? this.source.input.document : this.source.input.css, x = b.slice(
          l(b, this.source.start),
          l(b, this.source.end)
        ).indexOf(m.word);
        x !== -1 && (d = this.positionInside(x));
      }
      return d;
    }
    positionInside(m) {
      let d = this.source.start.column, b = this.source.start.line, g = "document" in this.source.input ? this.source.input.document : this.source.input.css, x = l(g, this.source.start), T = x + m;
      for (let P = x; P < T; P++)
        g[P] === `
` ? (d = 1, b += 1) : d += 1;
      return { column: d, line: b };
    }
    prev() {
      if (!this.parent) return;
      let m = this.parent.index(this);
      return this.parent.nodes[m - 1];
    }
    rangeBy(m) {
      let d = {
        column: this.source.start.column,
        line: this.source.start.line
      }, b = this.source.end ? {
        column: this.source.end.column + 1,
        line: this.source.end.line
      } : {
        column: d.column + 1,
        line: d.line
      };
      if (m.word) {
        let g = "document" in this.source.input ? this.source.input.document : this.source.input.css, T = g.slice(
          l(g, this.source.start),
          l(g, this.source.end)
        ).indexOf(m.word);
        T !== -1 && (d = this.positionInside(T), b = this.positionInside(
          T + m.word.length
        ));
      } else
        m.start ? d = {
          column: m.start.column,
          line: m.start.line
        } : m.index && (d = this.positionInside(m.index)), m.end ? b = {
          column: m.end.column,
          line: m.end.line
        } : typeof m.endIndex == "number" ? b = this.positionInside(m.endIndex) : m.index && (b = this.positionInside(m.index + 1));
      return (b.line < d.line || b.line === d.line && b.column <= d.column) && (b = { column: d.column + 1, line: d.line }), { end: b, start: d };
    }
    raw(m, d) {
      return new s().raw(this, m, d);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...m) {
      if (this.parent) {
        let d = this, b = !1;
        for (let g of m)
          g === this ? b = !0 : b ? (this.parent.insertAfter(d, g), d = g) : this.parent.insertBefore(d, g);
        b || this.remove();
      }
      return this;
    }
    root() {
      let m = this;
      for (; m.parent && m.parent.type !== "document"; )
        m = m.parent;
      return m;
    }
    toJSON(m, d) {
      let b = {}, g = d == null;
      d = d || /* @__PURE__ */ new Map();
      let x = 0;
      for (let T in this) {
        if (!Object.prototype.hasOwnProperty.call(this, T) || T === "parent" || T === "proxyCache") continue;
        let P = this[T];
        if (Array.isArray(P))
          b[T] = P.map((y) => typeof y == "object" && y.toJSON ? y.toJSON(null, d) : y);
        else if (typeof P == "object" && P.toJSON)
          b[T] = P.toJSON(null, d);
        else if (T === "source") {
          let y = d.get(P.input);
          y == null && (y = x, d.set(P.input, x), x++), b[T] = {
            end: P.end,
            inputId: y,
            start: P.start
          };
        } else
          b[T] = P;
      }
      return g && (b.inputs = [...d.keys()].map((T) => T.toJSON())), b;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(m = r) {
      m.stringify && (m = m.stringify);
      let d = "";
      return m(this, (b) => {
        d += b;
      }), d;
    }
    warn(m, d, b) {
      let g = { node: this };
      for (let x in b) g[x] = b[x];
      return m.warn(d, g);
    }
  }
  return yn = h, h.default = h, yn;
}
var gn, Ul;
function Ti() {
  if (Ul) return gn;
  Ul = 1;
  let t = /* @__PURE__ */ Pi();
  class s extends t {
    constructor(o) {
      super(o), this.type = "comment";
    }
  }
  return gn = s, s.default = s, gn;
}
var bn, $l;
function Ai() {
  if ($l) return bn;
  $l = 1;
  let t = /* @__PURE__ */ Pi();
  class s extends t {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(o) {
      o && typeof o.value < "u" && typeof o.value != "string" && (o = { ...o, value: String(o.value) }), super(o), this.type = "decl";
    }
  }
  return bn = s, s.default = s, bn;
}
var xn, Vl;
function Gt() {
  if (Vl) return xn;
  Vl = 1;
  let t = /* @__PURE__ */ Ti(), s = /* @__PURE__ */ Ai(), r = /* @__PURE__ */ Pi(), { isClean: o, my: u } = /* @__PURE__ */ ho(), c, l, h, p;
  function m(g) {
    return g.map((x) => (x.nodes && (x.nodes = m(x.nodes)), delete x.source, x));
  }
  function d(g) {
    if (g[o] = !1, g.proxyOf.nodes)
      for (let x of g.proxyOf.nodes)
        d(x);
  }
  class b extends r {
    get first() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...x) {
      for (let T of x) {
        let P = this.normalize(T, this.last);
        for (let y of P) this.proxyOf.nodes.push(y);
      }
      return this.markDirty(), this;
    }
    cleanRaws(x) {
      if (super.cleanRaws(x), this.nodes)
        for (let T of this.nodes) T.cleanRaws(x);
    }
    each(x) {
      if (!this.proxyOf.nodes) return;
      let T = this.getIterator(), P, y;
      for (; this.indexes[T] < this.proxyOf.nodes.length && (P = this.indexes[T], y = x(this.proxyOf.nodes[P], P), y !== !1); )
        this.indexes[T] += 1;
      return delete this.indexes[T], y;
    }
    every(x) {
      return this.nodes.every(x);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let x = this.lastEach;
      return this.indexes[x] = 0, x;
    }
    getProxyProcessor() {
      return {
        get(x, T) {
          return T === "proxyOf" ? x : x[T] ? T === "each" || typeof T == "string" && T.startsWith("walk") ? (...P) => x[T](
            ...P.map((y) => typeof y == "function" ? (C, N) => y(C.toProxy(), N) : y)
          ) : T === "every" || T === "some" ? (P) => x[T](
            (y, ...C) => P(y.toProxy(), ...C)
          ) : T === "root" ? () => x.root().toProxy() : T === "nodes" ? x.nodes.map((P) => P.toProxy()) : T === "first" || T === "last" ? x[T].toProxy() : x[T] : x[T];
        },
        set(x, T, P) {
          return x[T] === P || (x[T] = P, (T === "name" || T === "params" || T === "selector") && x.markDirty()), !0;
        }
      };
    }
    index(x) {
      return typeof x == "number" ? x : (x.proxyOf && (x = x.proxyOf), this.proxyOf.nodes.indexOf(x));
    }
    insertAfter(x, T) {
      let P = this.index(x), y = this.normalize(T, this.proxyOf.nodes[P]).reverse();
      P = this.index(x);
      for (let N of y) this.proxyOf.nodes.splice(P + 1, 0, N);
      let C;
      for (let N in this.indexes)
        C = this.indexes[N], P < C && (this.indexes[N] = C + y.length);
      return this.markDirty(), this;
    }
    insertBefore(x, T) {
      let P = this.index(x), y = P === 0 ? "prepend" : !1, C = this.normalize(
        T,
        this.proxyOf.nodes[P],
        y
      ).reverse();
      P = this.index(x);
      for (let L of C) this.proxyOf.nodes.splice(P, 0, L);
      let N;
      for (let L in this.indexes)
        N = this.indexes[L], P <= N && (this.indexes[L] = N + C.length);
      return this.markDirty(), this;
    }
    normalize(x, T) {
      if (typeof x == "string")
        x = m(l(x).nodes);
      else if (typeof x > "u")
        x = [];
      else if (Array.isArray(x)) {
        x = x.slice(0);
        for (let y of x)
          y.parent && y.parent.removeChild(y, "ignore");
      } else if (x.type === "root" && this.type !== "document") {
        x = x.nodes.slice(0);
        for (let y of x)
          y.parent && y.parent.removeChild(y, "ignore");
      } else if (x.type)
        x = [x];
      else if (x.prop) {
        if (typeof x.value > "u")
          throw new Error("Value field is missed in node creation");
        typeof x.value != "string" && (x.value = String(x.value)), x = [new s(x)];
      } else if (x.selector || x.selectors)
        x = [new p(x)];
      else if (x.name)
        x = [new c(x)];
      else if (x.text)
        x = [new t(x)];
      else
        throw new Error("Unknown node type in node creation");
      return x.map((y) => (y[u] || b.rebuild(y), y = y.proxyOf, y.parent && y.parent.removeChild(y), y[o] && d(y), y.raws || (y.raws = {}), typeof y.raws.before > "u" && T && typeof T.raws.before < "u" && (y.raws.before = T.raws.before.replace(/\S/g, "")), y.parent = this.proxyOf, y));
    }
    prepend(...x) {
      x = x.reverse();
      for (let T of x) {
        let P = this.normalize(T, this.first, "prepend").reverse();
        for (let y of P) this.proxyOf.nodes.unshift(y);
        for (let y in this.indexes)
          this.indexes[y] = this.indexes[y] + P.length;
      }
      return this.markDirty(), this;
    }
    push(x) {
      return x.parent = this, this.proxyOf.nodes.push(x), this;
    }
    removeAll() {
      for (let x of this.proxyOf.nodes) x.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(x) {
      x = this.index(x), this.proxyOf.nodes[x].parent = void 0, this.proxyOf.nodes.splice(x, 1);
      let T;
      for (let P in this.indexes)
        T = this.indexes[P], T >= x && (this.indexes[P] = T - 1);
      return this.markDirty(), this;
    }
    replaceValues(x, T, P) {
      return P || (P = T, T = {}), this.walkDecls((y) => {
        T.props && !T.props.includes(y.prop) || T.fast && !y.value.includes(T.fast) || (y.value = y.value.replace(x, P));
      }), this.markDirty(), this;
    }
    some(x) {
      return this.nodes.some(x);
    }
    walk(x) {
      return this.each((T, P) => {
        let y;
        try {
          y = x(T, P);
        } catch (C) {
          throw T.addToError(C);
        }
        return y !== !1 && T.walk && (y = T.walk(x)), y;
      });
    }
    walkAtRules(x, T) {
      return T ? x instanceof RegExp ? this.walk((P, y) => {
        if (P.type === "atrule" && x.test(P.name))
          return T(P, y);
      }) : this.walk((P, y) => {
        if (P.type === "atrule" && P.name === x)
          return T(P, y);
      }) : (T = x, this.walk((P, y) => {
        if (P.type === "atrule")
          return T(P, y);
      }));
    }
    walkComments(x) {
      return this.walk((T, P) => {
        if (T.type === "comment")
          return x(T, P);
      });
    }
    walkDecls(x, T) {
      return T ? x instanceof RegExp ? this.walk((P, y) => {
        if (P.type === "decl" && x.test(P.prop))
          return T(P, y);
      }) : this.walk((P, y) => {
        if (P.type === "decl" && P.prop === x)
          return T(P, y);
      }) : (T = x, this.walk((P, y) => {
        if (P.type === "decl")
          return T(P, y);
      }));
    }
    walkRules(x, T) {
      return T ? x instanceof RegExp ? this.walk((P, y) => {
        if (P.type === "rule" && x.test(P.selector))
          return T(P, y);
      }) : this.walk((P, y) => {
        if (P.type === "rule" && P.selector === x)
          return T(P, y);
      }) : (T = x, this.walk((P, y) => {
        if (P.type === "rule")
          return T(P, y);
      }));
    }
  }
  return b.registerParse = (g) => {
    l = g;
  }, b.registerRule = (g) => {
    p = g;
  }, b.registerAtRule = (g) => {
    c = g;
  }, b.registerRoot = (g) => {
    h = g;
  }, xn = b, b.default = b, b.rebuild = (g) => {
    g.type === "atrule" ? Object.setPrototypeOf(g, c.prototype) : g.type === "rule" ? Object.setPrototypeOf(g, p.prototype) : g.type === "decl" ? Object.setPrototypeOf(g, s.prototype) : g.type === "comment" ? Object.setPrototypeOf(g, t.prototype) : g.type === "root" && Object.setPrototypeOf(g, h.prototype), g[u] = !0, g.nodes && g.nodes.forEach((x) => {
      b.rebuild(x);
    });
  }, xn;
}
var Sn, jl;
function po() {
  if (jl) return Sn;
  jl = 1;
  let t = /* @__PURE__ */ Gt();
  class s extends t {
    constructor(o) {
      super(o), this.type = "atrule";
    }
    append(...o) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...o);
    }
    prepend(...o) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...o);
    }
  }
  return Sn = s, s.default = s, t.registerAtRule(s), Sn;
}
var En, ql;
function fo() {
  if (ql) return En;
  ql = 1;
  let t = /* @__PURE__ */ Gt(), s, r;
  class o extends t {
    constructor(c) {
      super({ type: "document", ...c }), this.nodes || (this.nodes = []);
    }
    toResult(c = {}) {
      return new s(new r(), this, c).stringify();
    }
  }
  return o.registerLazyResult = (u) => {
    s = u;
  }, o.registerProcessor = (u) => {
    r = u;
  }, En = o, o.default = o, En;
}
var Pn, Hl;
function m2() {
  if (Hl) return Pn;
  Hl = 1;
  let t = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  return Pn = { nanoid: (o = 21) => {
    let u = "", c = o | 0;
    for (; c--; )
      u += t[Math.random() * 64 | 0];
    return u;
  }, customAlphabet: (o, u = 21) => (c = u) => {
    let l = "", h = c | 0;
    for (; h--; )
      l += o[Math.random() * o.length | 0];
    return l;
  } }, Pn;
}
var Rp = /* @__PURE__ */ ba(Wy), Tn, zl;
function Dp() {
  if (zl) return Tn;
  zl = 1;
  let { existsSync: t, readFileSync: s } = i2, { dirname: r, join: o } = lo, { SourceMapConsumer: u, SourceMapGenerator: c } = /* @__PURE__ */ li();
  function l(p) {
    return V ? V.from(p, "base64").toString() : window.atob(p);
  }
  class h {
    constructor(m, d) {
      if (d.map === !1) return;
      this.loadAnnotation(m), this.inline = this.startWith(this.annotation, "data:");
      let b = d.map ? d.map.prev : void 0, g = this.loadMap(d.from, b);
      !this.mapFile && d.from && (this.mapFile = d.from), this.mapFile && (this.root = r(this.mapFile)), g && (this.text = g);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new u(this.text)), this.consumerCache;
    }
    decodeInline(m) {
      let d = /^data:application\/json;charset=utf-?8;base64,/, b = /^data:application\/json;base64,/, g = /^data:application\/json;charset=utf-?8,/, x = /^data:application\/json,/, T = m.match(g) || m.match(x);
      if (T)
        return decodeURIComponent(m.substr(T[0].length));
      let P = m.match(d) || m.match(b);
      if (P)
        return l(m.substr(P[0].length));
      let y = m.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + y);
    }
    getAnnotationURL(m) {
      return m.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(m) {
      return typeof m != "object" ? !1 : typeof m.mappings == "string" || typeof m._mappings == "string" || Array.isArray(m.sections);
    }
    loadAnnotation(m) {
      let d = m.match(/\/\*\s*# sourceMappingURL=/g);
      if (!d) return;
      let b = m.lastIndexOf(d.pop()), g = m.indexOf("*/", b);
      b > -1 && g > -1 && (this.annotation = this.getAnnotationURL(m.substring(b, g)));
    }
    loadFile(m) {
      if (this.root = r(m), t(m))
        return this.mapFile = m, s(m, "utf-8").toString().trim();
    }
    loadMap(m, d) {
      if (d === !1) return !1;
      if (d) {
        if (typeof d == "string")
          return d;
        if (typeof d == "function") {
          let b = d(m);
          if (b) {
            let g = this.loadFile(b);
            if (!g)
              throw new Error(
                "Unable to load previous source map: " + b.toString()
              );
            return g;
          }
        } else {
          if (d instanceof u)
            return c.fromSourceMap(d).toString();
          if (d instanceof c)
            return d.toString();
          if (this.isMap(d))
            return JSON.stringify(d);
          throw new Error(
            "Unsupported previous source map format: " + d.toString()
          );
        }
      } else {
        if (this.inline)
          return this.decodeInline(this.annotation);
        if (this.annotation) {
          let b = this.annotation;
          return m && (b = o(r(m), b)), this.loadFile(b);
        }
      }
    }
    startWith(m, d) {
      return m ? m.substr(0, d.length) === d : !1;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  }
  return Tn = h, h.default = h, Tn;
}
var An, Xl;
function wi() {
  if (Xl) return An;
  Xl = 1;
  let { nanoid: t } = /* @__PURE__ */ m2(), { isAbsolute: s, resolve: r } = lo, { SourceMapConsumer: o, SourceMapGenerator: u } = /* @__PURE__ */ li(), { fileURLToPath: c, pathToFileURL: l } = Rp, h = /* @__PURE__ */ co(), p = /* @__PURE__ */ Dp(), m = /* @__PURE__ */ Lp(), d = Symbol("fromOffsetCache"), b = !!(o && u), g = !!(r && s);
  class x {
    get from() {
      return this.file || this.id;
    }
    constructor(P, y = {}) {
      if (P === null || typeof P > "u" || typeof P == "object" && !P.toString)
        throw new Error(`PostCSS received ${P} instead of CSS string`);
      if (this.css = P.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, y.document && (this.document = y.document.toString()), y.from && (!g || /^\w+:\/\//.test(y.from) || s(y.from) ? this.file = y.from : this.file = r(y.from)), g && b) {
        let C = new p(this.css, y);
        if (C.text) {
          this.map = C;
          let N = C.consumer().file;
          !this.file && N && (this.file = this.mapResolve(N));
        }
      }
      this.file || (this.id = "<input css " + t(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(P, y, C, N = {}) {
      let L, F, M;
      if (y && typeof y == "object") {
        let U = y, v = C;
        if (typeof U.offset == "number") {
          let I = this.fromOffset(U.offset);
          y = I.line, C = I.col;
        } else
          y = U.line, C = U.column;
        if (typeof v.offset == "number") {
          let I = this.fromOffset(v.offset);
          F = I.line, L = I.col;
        } else
          F = v.line, L = v.column;
      } else if (!C) {
        let U = this.fromOffset(y);
        y = U.line, C = U.col;
      }
      let D = this.origin(y, C, F, L);
      return D ? M = new h(
        P,
        D.endLine === void 0 ? D.line : { column: D.column, line: D.line },
        D.endLine === void 0 ? D.column : { column: D.endColumn, line: D.endLine },
        D.source,
        D.file,
        N.plugin
      ) : M = new h(
        P,
        F === void 0 ? y : { column: C, line: y },
        F === void 0 ? C : { column: L, line: F },
        this.css,
        this.file,
        N.plugin
      ), M.input = { column: C, endColumn: L, endLine: F, line: y, source: this.css }, this.file && (l && (M.input.url = l(this.file).toString()), M.input.file = this.file), M;
    }
    fromOffset(P) {
      let y, C;
      if (this[d])
        C = this[d];
      else {
        let L = this.css.split(`
`);
        C = new Array(L.length);
        let F = 0;
        for (let M = 0, D = L.length; M < D; M++)
          C[M] = F, F += L[M].length + 1;
        this[d] = C;
      }
      y = C[C.length - 1];
      let N = 0;
      if (P >= y)
        N = C.length - 1;
      else {
        let L = C.length - 2, F;
        for (; N < L; )
          if (F = N + (L - N >> 1), P < C[F])
            L = F - 1;
          else if (P >= C[F + 1])
            N = F + 1;
          else {
            N = F;
            break;
          }
      }
      return {
        col: P - C[N] + 1,
        line: N + 1
      };
    }
    mapResolve(P) {
      return /^\w+:\/\//.test(P) ? P : r(this.map.consumer().sourceRoot || this.map.root || ".", P);
    }
    origin(P, y, C, N) {
      if (!this.map) return !1;
      let L = this.map.consumer(), F = L.originalPositionFor({ column: y, line: P });
      if (!F.source) return !1;
      let M;
      typeof C == "number" && (M = L.originalPositionFor({ column: N, line: C }));
      let D;
      s(F.source) ? D = l(F.source) : D = new URL(
        F.source,
        this.map.consumer().sourceRoot || l(this.map.mapFile)
      );
      let U = {
        column: F.column,
        endColumn: M && M.column,
        endLine: M && M.line,
        line: F.line,
        url: D.toString()
      };
      if (D.protocol === "file:")
        if (c)
          U.file = c(D);
        else
          throw new Error("file: protocol is not available in this PostCSS build");
      let v = L.sourceContentFor(F.source);
      return v && (U.source = v), U;
    }
    toJSON() {
      let P = {};
      for (let y of ["hasBOM", "css", "file", "id"])
        this[y] != null && (P[y] = this[y]);
      return this.map && (P.map = { ...this.map }, P.map.consumerCache && (P.map.consumerCache = void 0)), P;
    }
  }
  return An = x, x.default = x, m && m.registerInput && m.registerInput(x), An;
}
var wn, Wl;
function sr() {
  if (Wl) return wn;
  Wl = 1;
  let t = /* @__PURE__ */ Gt(), s, r;
  class o extends t {
    constructor(c) {
      super(c), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(c, l, h) {
      let p = super.normalize(c);
      if (l) {
        if (h === "prepend")
          this.nodes.length > 1 ? l.raws.before = this.nodes[1].raws.before : delete l.raws.before;
        else if (this.first !== l)
          for (let m of p)
            m.raws.before = l.raws.before;
      }
      return p;
    }
    removeChild(c, l) {
      let h = this.index(c);
      return !l && h === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[h].raws.before), super.removeChild(c);
    }
    toResult(c = {}) {
      return new s(new r(), this, c).stringify();
    }
  }
  return o.registerLazyResult = (u) => {
    s = u;
  }, o.registerProcessor = (u) => {
    r = u;
  }, wn = o, o.default = o, t.registerRoot(o), wn;
}
var vn, Gl;
function Fp() {
  if (Gl) return vn;
  Gl = 1;
  let t = {
    comma(s) {
      return t.split(s, [","], !0);
    },
    space(s) {
      let r = [" ", `
`, "	"];
      return t.split(s, r);
    },
    split(s, r, o) {
      let u = [], c = "", l = !1, h = 0, p = !1, m = "", d = !1;
      for (let b of s)
        d ? d = !1 : b === "\\" ? d = !0 : p ? b === m && (p = !1) : b === '"' || b === "'" ? (p = !0, m = b) : b === "(" ? h += 1 : b === ")" ? h > 0 && (h -= 1) : h === 0 && r.includes(b) && (l = !0), l ? (c !== "" && u.push(c.trim()), c = "", l = !1) : c += b;
      return (o || c !== "") && u.push(c.trim()), u;
    }
  };
  return vn = t, t.default = t, vn;
}
var Cn, Kl;
function mo() {
  if (Kl) return Cn;
  Kl = 1;
  let t = /* @__PURE__ */ Gt(), s = /* @__PURE__ */ Fp();
  class r extends t {
    get selectors() {
      return s.comma(this.selector);
    }
    set selectors(u) {
      let c = this.selector ? this.selector.match(/,\s*/) : null, l = c ? c[0] : "," + this.raw("between", "beforeOpen");
      this.selector = u.join(l);
    }
    constructor(u) {
      super(u), this.type = "rule", this.nodes || (this.nodes = []);
    }
  }
  return Cn = r, r.default = r, t.registerRule(r), Cn;
}
var In, Jl;
function y2() {
  if (Jl) return In;
  Jl = 1;
  let t = /* @__PURE__ */ po(), s = /* @__PURE__ */ Ti(), r = /* @__PURE__ */ Ai(), o = /* @__PURE__ */ wi(), u = /* @__PURE__ */ Dp(), c = /* @__PURE__ */ sr(), l = /* @__PURE__ */ mo();
  function h(p, m) {
    if (Array.isArray(p)) return p.map((g) => h(g));
    let { inputs: d, ...b } = p;
    if (d) {
      m = [];
      for (let g of d) {
        let x = { ...g, __proto__: o.prototype };
        x.map && (x.map = {
          ...x.map,
          __proto__: u.prototype
        }), m.push(x);
      }
    }
    if (b.nodes && (b.nodes = p.nodes.map((g) => h(g, m))), b.source) {
      let { inputId: g, ...x } = b.source;
      b.source = x, g != null && (b.source.input = m[g]);
    }
    if (b.type === "root")
      return new c(b);
    if (b.type === "decl")
      return new r(b);
    if (b.type === "rule")
      return new l(b);
    if (b.type === "comment")
      return new s(b);
    if (b.type === "atrule")
      return new t(b);
    throw new Error("Unknown node type: " + p.type);
  }
  return In = h, h.default = h, In;
}
var Nn, Yl;
function Bp() {
  if (Yl) return Nn;
  Yl = 1;
  let { dirname: t, relative: s, resolve: r, sep: o } = lo, { SourceMapConsumer: u, SourceMapGenerator: c } = /* @__PURE__ */ li(), { pathToFileURL: l } = Rp, h = /* @__PURE__ */ wi(), p = !!(u && c), m = !!(t && r && s && o);
  class d {
    constructor(g, x, T, P) {
      this.stringify = g, this.mapOpts = T.map || {}, this.root = x, this.opts = T, this.css = P, this.originalCSS = P, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let g;
      this.isInline() ? g = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? g = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? g = this.mapOpts.annotation(this.opts.to, this.root) : g = this.outputFile() + ".map";
      let x = `
`;
      this.css.includes(`\r
`) && (x = `\r
`), this.css += x + "/*# sourceMappingURL=" + g + " */";
    }
    applyPrevMaps() {
      for (let g of this.previous()) {
        let x = this.toUrl(this.path(g.file)), T = g.root || t(g.file), P;
        this.mapOpts.sourcesContent === !1 ? (P = new u(g.text), P.sourcesContent && (P.sourcesContent = null)) : P = g.consumer(), this.map.applySourceMap(P, x, this.toUrl(this.path(T)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== !1)
        if (this.root) {
          let g;
          for (let x = this.root.nodes.length - 1; x >= 0; x--)
            g = this.root.nodes[x], g.type === "comment" && g.text.startsWith("# sourceMappingURL=") && this.root.removeChild(x);
        } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), m && p && this.isMap())
        return this.generateMap();
      {
        let g = "";
        return this.stringify(this.root, (x) => {
          g += x;
        }), [g];
      }
    }
    generateMap() {
      if (this.root)
        this.generateString();
      else if (this.previous().length === 1) {
        let g = this.previous()[0].consumer();
        g.file = this.outputFile(), this.map = c.fromSourceMap(g, {
          ignoreInvalidMapping: !0
        });
      } else
        this.map = new c({
          file: this.outputFile(),
          ignoreInvalidMapping: !0
        }), this.map.addMapping({
          generated: { column: 0, line: 1 },
          original: { column: 0, line: 1 },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = "", this.map = new c({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      });
      let g = 1, x = 1, T = "<no source>", P = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      }, y, C;
      this.stringify(this.root, (N, L, F) => {
        if (this.css += N, L && F !== "end" && (P.generated.line = g, P.generated.column = x - 1, L.source && L.source.start ? (P.source = this.sourcePath(L), P.original.line = L.source.start.line, P.original.column = L.source.start.column - 1, this.map.addMapping(P)) : (P.source = T, P.original.line = 1, P.original.column = 0, this.map.addMapping(P))), C = N.match(/\n/g), C ? (g += C.length, y = N.lastIndexOf(`
`), x = N.length - y) : x += N.length, L && F !== "start") {
          let M = L.parent || { raws: {} };
          (!(L.type === "decl" || L.type === "atrule" && !L.nodes) || L !== M.last || M.raws.semicolon) && (L.source && L.source.end ? (P.source = this.sourcePath(L), P.original.line = L.source.end.line, P.original.column = L.source.end.column - 1, P.generated.line = g, P.generated.column = x - 2, this.map.addMapping(P)) : (P.source = T, P.original.line = 1, P.original.column = 0, P.generated.line = g, P.generated.column = x - 1, this.map.addMapping(P)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((g) => g.annotation) : !0;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u")
        return this.mapOpts.inline;
      let g = this.mapOpts.annotation;
      return typeof g < "u" && g !== !0 ? !1 : this.previous().length ? this.previous().some((x) => x.inline) : !0;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((g) => g.withContent()) : !0;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(g) {
      if (this.mapOpts.absolute || g.charCodeAt(0) === 60 || /^\w+:\/\//.test(g)) return g;
      let x = this.memoizedPaths.get(g);
      if (x) return x;
      let T = this.opts.to ? t(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (T = t(r(T, this.mapOpts.annotation)));
      let P = s(T, g);
      return this.memoizedPaths.set(g, P), P;
    }
    previous() {
      if (!this.previousMaps)
        if (this.previousMaps = [], this.root)
          this.root.walk((g) => {
            if (g.source && g.source.input.map) {
              let x = g.source.input.map;
              this.previousMaps.includes(x) || this.previousMaps.push(x);
            }
          });
        else {
          let g = new h(this.originalCSS, this.opts);
          g.map && this.previousMaps.push(g.map);
        }
      return this.previousMaps;
    }
    setSourcesContent() {
      let g = {};
      if (this.root)
        this.root.walk((x) => {
          if (x.source) {
            let T = x.source.input.from;
            if (T && !g[T]) {
              g[T] = !0;
              let P = this.usesFileUrls ? this.toFileUrl(T) : this.toUrl(this.path(T));
              this.map.setSourceContent(P, x.source.input.css);
            }
          }
        });
      else if (this.css) {
        let x = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(x, this.css);
      }
    }
    sourcePath(g) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(g.source.input.from) : this.toUrl(this.path(g.source.input.from));
    }
    toBase64(g) {
      return V ? V.from(g).toString("base64") : window.btoa(unescape(encodeURIComponent(g)));
    }
    toFileUrl(g) {
      let x = this.memoizedFileURLs.get(g);
      if (x) return x;
      if (l) {
        let T = l(g).toString();
        return this.memoizedFileURLs.set(g, T), T;
      } else
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
    }
    toUrl(g) {
      let x = this.memoizedURLs.get(g);
      if (x) return x;
      o === "\\" && (g = g.replace(/\\/g, "/"));
      let T = encodeURI(g).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(g, T), T;
    }
  }
  return Nn = d, Nn;
}
var _n, Ql;
function g2() {
  if (Ql) return _n;
  Ql = 1;
  let t = /* @__PURE__ */ po(), s = /* @__PURE__ */ Ti(), r = /* @__PURE__ */ Ai(), o = /* @__PURE__ */ sr(), u = /* @__PURE__ */ mo(), c = /* @__PURE__ */ kp();
  const l = {
    empty: !0,
    space: !0
  };
  function h(m) {
    for (let d = m.length - 1; d >= 0; d--) {
      let b = m[d], g = b[3] || b[2];
      if (g) return g;
    }
  }
  class p {
    constructor(d) {
      this.input = d, this.root = new o(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: d, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(d) {
      let b = new t();
      b.name = d[1].slice(1), b.name === "" && this.unnamedAtrule(b, d), this.init(b, d[2]);
      let g, x, T, P = !1, y = !1, C = [], N = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (d = this.tokenizer.nextToken(), g = d[0], g === "(" || g === "[" ? N.push(g === "(" ? ")" : "]") : g === "{" && N.length > 0 ? N.push("}") : g === N[N.length - 1] && N.pop(), N.length === 0)
          if (g === ";") {
            b.source.end = this.getPosition(d[2]), b.source.end.offset++, this.semicolon = !0;
            break;
          } else if (g === "{") {
            y = !0;
            break;
          } else if (g === "}") {
            if (C.length > 0) {
              for (T = C.length - 1, x = C[T]; x && x[0] === "space"; )
                x = C[--T];
              x && (b.source.end = this.getPosition(x[3] || x[2]), b.source.end.offset++);
            }
            this.end(d);
            break;
          } else
            C.push(d);
        else
          C.push(d);
        if (this.tokenizer.endOfFile()) {
          P = !0;
          break;
        }
      }
      b.raws.between = this.spacesAndCommentsFromEnd(C), C.length ? (b.raws.afterName = this.spacesAndCommentsFromStart(C), this.raw(b, "params", C), P && (d = C[C.length - 1], b.source.end = this.getPosition(d[3] || d[2]), b.source.end.offset++, this.spaces = b.raws.between, b.raws.between = "")) : (b.raws.afterName = "", b.params = ""), y && (b.nodes = [], this.current = b);
    }
    checkMissedSemicolon(d) {
      let b = this.colon(d);
      if (b === !1) return;
      let g = 0, x;
      for (let T = b - 1; T >= 0 && (x = d[T], !(x[0] !== "space" && (g += 1, g === 2))); T--)
        ;
      throw this.input.error(
        "Missed semicolon",
        x[0] === "word" ? x[3] + 1 : x[2]
      );
    }
    colon(d) {
      let b = 0, g, x, T;
      for (let [P, y] of d.entries()) {
        if (x = y, T = x[0], T === "(" && (b += 1), T === ")" && (b -= 1), b === 0 && T === ":")
          if (!g)
            this.doubleColon(x);
          else {
            if (g[0] === "word" && g[1] === "progid")
              continue;
            return P;
          }
        g = x;
      }
      return !1;
    }
    comment(d) {
      let b = new s();
      this.init(b, d[2]), b.source.end = this.getPosition(d[3] || d[2]), b.source.end.offset++;
      let g = d[1].slice(2, -2);
      if (/^\s*$/.test(g))
        b.text = "", b.raws.left = g, b.raws.right = "";
      else {
        let x = g.match(/^(\s*)([^]*\S)(\s*)$/);
        b.text = x[2], b.raws.left = x[1], b.raws.right = x[3];
      }
    }
    createTokenizer() {
      this.tokenizer = c(this.input);
    }
    decl(d, b) {
      let g = new r();
      this.init(g, d[0][2]);
      let x = d[d.length - 1];
      for (x[0] === ";" && (this.semicolon = !0, d.pop()), g.source.end = this.getPosition(
        x[3] || x[2] || h(d)
      ), g.source.end.offset++; d[0][0] !== "word"; )
        d.length === 1 && this.unknownWord(d), g.raws.before += d.shift()[1];
      for (g.source.start = this.getPosition(d[0][2]), g.prop = ""; d.length; ) {
        let N = d[0][0];
        if (N === ":" || N === "space" || N === "comment")
          break;
        g.prop += d.shift()[1];
      }
      g.raws.between = "";
      let T;
      for (; d.length; )
        if (T = d.shift(), T[0] === ":") {
          g.raws.between += T[1];
          break;
        } else
          T[0] === "word" && /\w/.test(T[1]) && this.unknownWord([T]), g.raws.between += T[1];
      (g.prop[0] === "_" || g.prop[0] === "*") && (g.raws.before += g.prop[0], g.prop = g.prop.slice(1));
      let P = [], y;
      for (; d.length && (y = d[0][0], !(y !== "space" && y !== "comment")); )
        P.push(d.shift());
      this.precheckMissedSemicolon(d);
      for (let N = d.length - 1; N >= 0; N--) {
        if (T = d[N], T[1].toLowerCase() === "!important") {
          g.important = !0;
          let L = this.stringFrom(d, N);
          L = this.spacesFromEnd(d) + L, L !== " !important" && (g.raws.important = L);
          break;
        } else if (T[1].toLowerCase() === "important") {
          let L = d.slice(0), F = "";
          for (let M = N; M > 0; M--) {
            let D = L[M][0];
            if (F.trim().startsWith("!") && D !== "space")
              break;
            F = L.pop()[1] + F;
          }
          F.trim().startsWith("!") && (g.important = !0, g.raws.important = F, d = L);
        }
        if (T[0] !== "space" && T[0] !== "comment")
          break;
      }
      d.some((N) => N[0] !== "space" && N[0] !== "comment") && (g.raws.between += P.map((N) => N[1]).join(""), P = []), this.raw(g, "value", P.concat(d), b), g.value.includes(":") && !b && this.checkMissedSemicolon(d);
    }
    doubleColon(d) {
      throw this.input.error(
        "Double colon",
        { offset: d[2] },
        { offset: d[2] + d[1].length }
      );
    }
    emptyRule(d) {
      let b = new u();
      this.init(b, d[2]), b.selector = "", b.raws.between = "", this.current = b;
    }
    end(d) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(d[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(d);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(d) {
      if (this.spaces += d[1], this.current.nodes) {
        let b = this.current.nodes[this.current.nodes.length - 1];
        b && b.type === "rule" && !b.raws.ownSemicolon && (b.raws.ownSemicolon = this.spaces, this.spaces = "", b.source.end = this.getPosition(d[2]), b.source.end.offset += b.raws.ownSemicolon.length);
      }
    }
    // Helpers
    getPosition(d) {
      let b = this.input.fromOffset(d);
      return {
        column: b.col,
        line: b.line,
        offset: d
      };
    }
    init(d, b) {
      this.current.push(d), d.source = {
        input: this.input,
        start: this.getPosition(b)
      }, d.raws.before = this.spaces, this.spaces = "", d.type !== "comment" && (this.semicolon = !1);
    }
    other(d) {
      let b = !1, g = null, x = !1, T = null, P = [], y = d[1].startsWith("--"), C = [], N = d;
      for (; N; ) {
        if (g = N[0], C.push(N), g === "(" || g === "[")
          T || (T = N), P.push(g === "(" ? ")" : "]");
        else if (y && x && g === "{")
          T || (T = N), P.push("}");
        else if (P.length === 0)
          if (g === ";")
            if (x) {
              this.decl(C, y);
              return;
            } else
              break;
          else if (g === "{") {
            this.rule(C);
            return;
          } else if (g === "}") {
            this.tokenizer.back(C.pop()), b = !0;
            break;
          } else g === ":" && (x = !0);
        else g === P[P.length - 1] && (P.pop(), P.length === 0 && (T = null));
        N = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (b = !0), P.length > 0 && this.unclosedBracket(T), b && x) {
        if (!y)
          for (; C.length && (N = C[C.length - 1][0], !(N !== "space" && N !== "comment")); )
            this.tokenizer.back(C.pop());
        this.decl(C, y);
      } else
        this.unknownWord(C);
    }
    parse() {
      let d;
      for (; !this.tokenizer.endOfFile(); )
        switch (d = this.tokenizer.nextToken(), d[0]) {
          case "space":
            this.spaces += d[1];
            break;
          case ";":
            this.freeSemicolon(d);
            break;
          case "}":
            this.end(d);
            break;
          case "comment":
            this.comment(d);
            break;
          case "at-word":
            this.atrule(d);
            break;
          case "{":
            this.emptyRule(d);
            break;
          default:
            this.other(d);
            break;
        }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(d, b, g, x) {
      let T, P, y = g.length, C = "", N = !0, L, F;
      for (let M = 0; M < y; M += 1)
        T = g[M], P = T[0], P === "space" && M === y - 1 && !x ? N = !1 : P === "comment" ? (F = g[M - 1] ? g[M - 1][0] : "empty", L = g[M + 1] ? g[M + 1][0] : "empty", !l[F] && !l[L] ? C.slice(-1) === "," ? N = !1 : C += T[1] : N = !1) : C += T[1];
      if (!N) {
        let M = g.reduce((D, U) => D + U[1], "");
        d.raws[b] = { raw: M, value: C };
      }
      d[b] = C;
    }
    rule(d) {
      d.pop();
      let b = new u();
      this.init(b, d[0][2]), b.raws.between = this.spacesAndCommentsFromEnd(d), this.raw(b, "selector", d), this.current = b;
    }
    spacesAndCommentsFromEnd(d) {
      let b, g = "";
      for (; d.length && (b = d[d.length - 1][0], !(b !== "space" && b !== "comment")); )
        g = d.pop()[1] + g;
      return g;
    }
    // Errors
    spacesAndCommentsFromStart(d) {
      let b, g = "";
      for (; d.length && (b = d[0][0], !(b !== "space" && b !== "comment")); )
        g += d.shift()[1];
      return g;
    }
    spacesFromEnd(d) {
      let b, g = "";
      for (; d.length && (b = d[d.length - 1][0], b === "space"); )
        g = d.pop()[1] + g;
      return g;
    }
    stringFrom(d, b) {
      let g = "";
      for (let x = b; x < d.length; x++)
        g += d[x][1];
      return d.splice(b, d.length - b), g;
    }
    unclosedBlock() {
      let d = this.current.source.start;
      throw this.input.error("Unclosed block", d.line, d.column);
    }
    unclosedBracket(d) {
      throw this.input.error(
        "Unclosed bracket",
        { offset: d[2] },
        { offset: d[2] + 1 }
      );
    }
    unexpectedClose(d) {
      throw this.input.error(
        "Unexpected }",
        { offset: d[2] },
        { offset: d[2] + 1 }
      );
    }
    unknownWord(d) {
      throw this.input.error(
        "Unknown word " + d[0][1],
        { offset: d[0][2] },
        { offset: d[0][2] + d[0][1].length }
      );
    }
    unnamedAtrule(d, b) {
      throw this.input.error(
        "At-rule without name",
        { offset: b[2] },
        { offset: b[2] + b[1].length }
      );
    }
  }
  return _n = p, _n;
}
var On, Zl;
function yo() {
  if (Zl) return On;
  Zl = 1;
  let t = /* @__PURE__ */ Gt(), s = /* @__PURE__ */ wi(), r = /* @__PURE__ */ g2();
  function o(u, c) {
    let l = new s(u, c), h = new r(l);
    try {
      h.parse();
    } catch (p) {
      throw wt.env.NODE_ENV !== "production" && p.name === "CssSyntaxError" && c && c.from && (/\.scss$/i.test(c.from) ? p.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(c.from) ? p.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(c.from) && (p.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), p;
    }
    return h.root;
  }
  return On = o, o.default = o, t.registerParse(o), On;
}
var kn, ec;
function Up() {
  if (ec) return kn;
  ec = 1;
  class t {
    constructor(r, o = {}) {
      if (this.type = "warning", this.text = r, o.node && o.node.source) {
        let u = o.node.rangeBy(o);
        this.line = u.start.line, this.column = u.start.column, this.endLine = u.end.line, this.endColumn = u.end.column;
      }
      for (let u in o) this[u] = o[u];
    }
    toString() {
      return this.node ? this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  }
  return kn = t, t.default = t, kn;
}
var Ln, tc;
function go() {
  if (tc) return Ln;
  tc = 1;
  let t = /* @__PURE__ */ Up();
  class s {
    get content() {
      return this.css;
    }
    constructor(o, u, c) {
      this.processor = o, this.messages = [], this.root = u, this.opts = c, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(o, u = {}) {
      u.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (u.plugin = this.lastPlugin.postcssPlugin);
      let c = new t(o, u);
      return this.messages.push(c), c;
    }
    warnings() {
      return this.messages.filter((o) => o.type === "warning");
    }
  }
  return Ln = s, s.default = s, Ln;
}
var Mn, sc;
function $p() {
  if (sc) return Mn;
  sc = 1;
  let t = {};
  return Mn = function(r) {
    t[r] || (t[r] = !0, typeof console < "u" && console.warn && console.warn(r));
  }, Mn;
}
var Rn, rc;
function Vp() {
  if (rc) return Rn;
  rc = 1;
  let t = /* @__PURE__ */ Gt(), s = /* @__PURE__ */ fo(), r = /* @__PURE__ */ Bp(), o = /* @__PURE__ */ yo(), u = /* @__PURE__ */ go(), c = /* @__PURE__ */ sr(), l = /* @__PURE__ */ Ei(), { isClean: h, my: p } = /* @__PURE__ */ ho(), m = /* @__PURE__ */ $p();
  const d = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
  }, b = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0
  }, g = {
    Once: !0,
    postcssPlugin: !0,
    prepare: !0
  }, x = 0;
  function T(F) {
    return typeof F == "object" && typeof F.then == "function";
  }
  function P(F) {
    let M = !1, D = d[F.type];
    return F.type === "decl" ? M = F.prop.toLowerCase() : F.type === "atrule" && (M = F.name.toLowerCase()), M && F.append ? [
      D,
      D + "-" + M,
      x,
      D + "Exit",
      D + "Exit-" + M
    ] : M ? [D, D + "-" + M, D + "Exit", D + "Exit-" + M] : F.append ? [D, x, D + "Exit"] : [D, D + "Exit"];
  }
  function y(F) {
    let M;
    return F.type === "document" ? M = ["Document", x, "DocumentExit"] : F.type === "root" ? M = ["Root", x, "RootExit"] : M = P(F), {
      eventIndex: 0,
      events: M,
      iterator: 0,
      node: F,
      visitorIndex: 0,
      visitors: []
    };
  }
  function C(F) {
    return F[h] = !1, F.nodes && F.nodes.forEach((M) => C(M)), F;
  }
  let N = {};
  class L {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    constructor(M, D, U) {
      this.stringified = !1, this.processed = !1;
      let v;
      if (typeof D == "object" && D !== null && (D.type === "root" || D.type === "document"))
        v = C(D);
      else if (D instanceof L || D instanceof u)
        v = C(D.root), D.map && (typeof U.map > "u" && (U.map = {}), U.map.inline || (U.map.inline = !1), U.map.prev = D.map);
      else {
        let I = o;
        U.syntax && (I = U.syntax.parse), U.parser && (I = U.parser), I.parse && (I = I.parse);
        try {
          v = I(D, U);
        } catch (O) {
          this.processed = !0, this.error = O;
        }
        v && !v[p] && t.rebuild(v);
      }
      this.result = new u(M, v, U), this.helpers = { ...N, postcss: N, result: this.result }, this.plugins = this.processor.plugins.map((I) => typeof I == "object" && I.prepare ? { ...I, ...I.prepare(this.result) } : I);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(M) {
      return this.async().catch(M);
    }
    finally(M) {
      return this.async().then(M, M);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(M, D) {
      let U = this.result.lastPlugin;
      try {
        if (D && D.addToError(M), this.error = M, M.name === "CssSyntaxError" && !M.plugin)
          M.plugin = U.postcssPlugin, M.setMessage();
        else if (U.postcssVersion && wt.env.NODE_ENV !== "production") {
          let v = U.postcssPlugin, I = U.postcssVersion, O = this.result.processor.version, R = I.split("."), j = O.split(".");
          (R[0] !== j[0] || parseInt(R[1]) > parseInt(j[1])) && console.error(
            "Unknown error from PostCSS plugin. Your current PostCSS version is " + O + ", but " + v + " uses " + I + ". Perhaps this is the source of the error below."
          );
        }
      } catch (v) {
        console && console.error && console.error(v);
      }
      return M;
    }
    prepareVisitors() {
      this.listeners = {};
      let M = (D, U, v) => {
        this.listeners[U] || (this.listeners[U] = []), this.listeners[U].push([D, v]);
      };
      for (let D of this.plugins)
        if (typeof D == "object")
          for (let U in D) {
            if (!b[U] && /^[A-Z]/.test(U))
              throw new Error(
                `Unknown event ${U} in ${D.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            if (!g[U])
              if (typeof D[U] == "object")
                for (let v in D[U])
                  v === "*" ? M(D, U, D[U][v]) : M(
                    D,
                    U + "-" + v.toLowerCase(),
                    D[U][v]
                  );
              else typeof D[U] == "function" && M(D, U, D[U]);
          }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let M = 0; M < this.plugins.length; M++) {
        let D = this.plugins[M], U = this.runOnRoot(D);
        if (T(U))
          try {
            await U;
          } catch (v) {
            throw this.handleError(v);
          }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let M = this.result.root;
        for (; !M[h]; ) {
          M[h] = !0;
          let D = [y(M)];
          for (; D.length > 0; ) {
            let U = this.visitTick(D);
            if (T(U))
              try {
                await U;
              } catch (v) {
                let I = D[D.length - 1].node;
                throw this.handleError(v, I);
              }
          }
        }
        if (this.listeners.OnceExit)
          for (let [D, U] of this.listeners.OnceExit) {
            this.result.lastPlugin = D;
            try {
              if (M.type === "document") {
                let v = M.nodes.map(
                  (I) => U(I, this.helpers)
                );
                await Promise.all(v);
              } else
                await U(M, this.helpers);
            } catch (v) {
              throw this.handleError(v);
            }
          }
      }
      return this.processed = !0, this.stringify();
    }
    runOnRoot(M) {
      this.result.lastPlugin = M;
      try {
        if (typeof M == "object" && M.Once) {
          if (this.result.root.type === "document") {
            let D = this.result.root.nodes.map(
              (U) => M.Once(U, this.helpers)
            );
            return T(D[0]) ? Promise.all(D) : D;
          }
          return M.Once(this.result.root, this.helpers);
        } else if (typeof M == "function")
          return M(this.result.root, this.result);
      } catch (D) {
        throw this.handleError(D);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = !0, this.sync();
      let M = this.result.opts, D = l;
      M.syntax && (D = M.syntax.stringify), M.stringifier && (D = M.stringifier), D.stringify && (D = D.stringify);
      let v = new r(D, this.result.root, this.result.opts).generate();
      return this.result.css = v[0], this.result.map = v[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = !0, this.processing)
        throw this.getAsyncError();
      for (let M of this.plugins) {
        let D = this.runOnRoot(M);
        if (T(D))
          throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let M = this.result.root;
        for (; !M[h]; )
          M[h] = !0, this.walkSync(M);
        if (this.listeners.OnceExit)
          if (M.type === "document")
            for (let D of M.nodes)
              this.visitSync(this.listeners.OnceExit, D);
          else
            this.visitSync(this.listeners.OnceExit, M);
      }
      return this.result;
    }
    then(M, D) {
      return wt.env.NODE_ENV !== "production" && ("from" in this.opts || m(
        "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
      )), this.async().then(M, D);
    }
    toString() {
      return this.css;
    }
    visitSync(M, D) {
      for (let [U, v] of M) {
        this.result.lastPlugin = U;
        let I;
        try {
          I = v(D, this.helpers);
        } catch (O) {
          throw this.handleError(O, D.proxyOf);
        }
        if (D.type !== "root" && D.type !== "document" && !D.parent)
          return !0;
        if (T(I))
          throw this.getAsyncError();
      }
    }
    visitTick(M) {
      let D = M[M.length - 1], { node: U, visitors: v } = D;
      if (U.type !== "root" && U.type !== "document" && !U.parent) {
        M.pop();
        return;
      }
      if (v.length > 0 && D.visitorIndex < v.length) {
        let [O, R] = v[D.visitorIndex];
        D.visitorIndex += 1, D.visitorIndex === v.length && (D.visitors = [], D.visitorIndex = 0), this.result.lastPlugin = O;
        try {
          return R(U.toProxy(), this.helpers);
        } catch (j) {
          throw this.handleError(j, U);
        }
      }
      if (D.iterator !== 0) {
        let O = D.iterator, R;
        for (; R = U.nodes[U.indexes[O]]; )
          if (U.indexes[O] += 1, !R[h]) {
            R[h] = !0, M.push(y(R));
            return;
          }
        D.iterator = 0, delete U.indexes[O];
      }
      let I = D.events;
      for (; D.eventIndex < I.length; ) {
        let O = I[D.eventIndex];
        if (D.eventIndex += 1, O === x) {
          U.nodes && U.nodes.length && (U[h] = !0, D.iterator = U.getIterator());
          return;
        } else if (this.listeners[O]) {
          D.visitors = this.listeners[O];
          return;
        }
      }
      M.pop();
    }
    walkSync(M) {
      M[h] = !0;
      let D = P(M);
      for (let U of D)
        if (U === x)
          M.nodes && M.each((v) => {
            v[h] || this.walkSync(v);
          });
        else {
          let v = this.listeners[U];
          if (v && this.visitSync(v, M.toProxy()))
            return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
  }
  return L.registerPostcss = (F) => {
    N = F;
  }, Rn = L, L.default = L, c.registerLazyResult(L), s.registerLazyResult(L), Rn;
}
var Dn, ic;
function b2() {
  if (ic) return Dn;
  ic = 1;
  let t = /* @__PURE__ */ Bp(), s = /* @__PURE__ */ yo();
  const r = /* @__PURE__ */ go();
  let o = /* @__PURE__ */ Ei(), u = /* @__PURE__ */ $p();
  class c {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root)
        return this._root;
      let h, p = s;
      try {
        h = p(this._css, this._opts);
      } catch (m) {
        this.error = m;
      }
      if (this.error)
        throw this.error;
      return this._root = h, h;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(h, p, m) {
      p = p.toString(), this.stringified = !1, this._processor = h, this._css = p, this._opts = m, this._map = void 0;
      let d, b = o;
      this.result = new r(this._processor, d, this._opts), this.result.css = p;
      let g = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return g.root;
        }
      });
      let x = new t(b, d, this._opts, p);
      if (x.isMap()) {
        let [T, P] = x.generate();
        T && (this.result.css = T), P && (this.result.map = P);
      } else
        x.clearAnnotation(), this.result.css = x.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(h) {
      return this.async().catch(h);
    }
    finally(h) {
      return this.async().then(h, h);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(h, p) {
      return wt.env.NODE_ENV !== "production" && ("from" in this._opts || u(
        "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
      )), this.async().then(h, p);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  }
  return Dn = c, c.default = c, Dn;
}
var Fn, nc;
function x2() {
  if (nc) return Fn;
  nc = 1;
  let t = /* @__PURE__ */ fo(), s = /* @__PURE__ */ Vp(), r = /* @__PURE__ */ b2(), o = /* @__PURE__ */ sr();
  class u {
    constructor(l = []) {
      this.version = "8.5.3", this.plugins = this.normalize(l);
    }
    normalize(l) {
      let h = [];
      for (let p of l)
        if (p.postcss === !0 ? p = p() : p.postcss && (p = p.postcss), typeof p == "object" && Array.isArray(p.plugins))
          h = h.concat(p.plugins);
        else if (typeof p == "object" && p.postcssPlugin)
          h.push(p);
        else if (typeof p == "function")
          h.push(p);
        else if (typeof p == "object" && (p.parse || p.stringify)) {
          if (wt.env.NODE_ENV !== "production")
            throw new Error(
              "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
            );
        } else
          throw new Error(p + " is not a PostCSS plugin");
      return h;
    }
    process(l, h = {}) {
      return !this.plugins.length && !h.parser && !h.stringifier && !h.syntax ? new r(this, l, h) : new s(this, l, h);
    }
    use(l) {
      return this.plugins = this.plugins.concat(this.normalize([l])), this;
    }
  }
  return Fn = u, u.default = u, o.registerProcessor(u), t.registerProcessor(u), Fn;
}
var Bn, ac;
function S2() {
  if (ac) return Bn;
  ac = 1;
  let t = /* @__PURE__ */ po(), s = /* @__PURE__ */ Ti(), r = /* @__PURE__ */ Gt(), o = /* @__PURE__ */ co(), u = /* @__PURE__ */ Ai(), c = /* @__PURE__ */ fo(), l = /* @__PURE__ */ y2(), h = /* @__PURE__ */ wi(), p = /* @__PURE__ */ Vp(), m = /* @__PURE__ */ Fp(), d = /* @__PURE__ */ Pi(), b = /* @__PURE__ */ yo(), g = /* @__PURE__ */ x2(), x = /* @__PURE__ */ go(), T = /* @__PURE__ */ sr(), P = /* @__PURE__ */ mo(), y = /* @__PURE__ */ Ei(), C = /* @__PURE__ */ Up();
  function N(...L) {
    return L.length === 1 && Array.isArray(L[0]) && (L = L[0]), new g(L);
  }
  return N.plugin = function(F, M) {
    let D = !1;
    function U(...I) {
      console && console.warn && !D && (D = !0, console.warn(
        F + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
      ), wt.env.LANG && wt.env.LANG.startsWith("cn") && console.warn(
        F + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
      ));
      let O = M(...I);
      return O.postcssPlugin = F, O.postcssVersion = new g().version, O;
    }
    let v;
    return Object.defineProperty(U, "postcss", {
      get() {
        return v || (v = U()), v;
      }
    }), U.process = function(I, O, R) {
      return N([U(R)]).process(I, O);
    }, U;
  }, N.stringify = y, N.parse = b, N.fromJSON = l, N.list = m, N.comment = (L) => new s(L), N.atRule = (L) => new t(L), N.decl = (L) => new u(L), N.rule = (L) => new P(L), N.root = (L) => new T(L), N.document = (L) => new c(L), N.CssSyntaxError = o, N.Declaration = u, N.Container = r, N.Processor = g, N.Document = c, N.Comment = s, N.Warning = C, N.AtRule = t, N.Result = x, N.Input = h, N.Rule = P, N.Root = T, N.Node = d, p.registerPostcss(N), Bn = N, N.default = N, Bn;
}
var E2 = /* @__PURE__ */ S2(), ge = /* @__PURE__ */ Dc(E2);
ge.stringify;
ge.fromJSON;
ge.plugin;
ge.parse;
ge.list;
ge.document;
ge.comment;
ge.atRule;
ge.rule;
ge.decl;
ge.root;
ge.CssSyntaxError;
ge.Declaration;
ge.Container;
ge.Processor;
ge.Document;
ge.Comment;
ge.Warning;
ge.AtRule;
ge.Result;
ge.Input;
ge.Rule;
ge.Root;
ge.Node;
(ft.posix || ft).normalize;
(ft.posix || ft).join;
const oc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P2 = new Uint8Array(64), T2 = new Uint8Array(128);
for (let t = 0; t < oc.length; t++) {
  const s = oc.charCodeAt(t);
  P2[t] = s, T2[s] = t;
}
var A2 = Object.defineProperty, uc = Object.getOwnPropertySymbols, w2 = Object.prototype.hasOwnProperty, v2 = Object.prototype.propertyIsEnumerable, lc = (t, s, r) => s in t ? A2(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r, cc = (t, s) => {
  for (var r in s || (s = {}))
    w2.call(s, r) && lc(t, r, s[r]);
  if (uc)
    for (var r of uc(s))
      v2.call(s, r) && lc(t, r, s[r]);
  return t;
};
cc(cc({}, ga), Wa);
Ut.parse;
function D2({ moduleId: t, iconFontPath: s, iconAttrs: r }) {
  if (!s)
    throw "iconFontPath is required";
  if (!t)
    throw "moduleId is required";
  const o = {};
  ad(s, { eager: !0, as: "raw" }).forEach((p) => {
    const d = od(p).toString().match(/<symbol[^>]*>.*?<\/symbol>/gim);
    Array.isArray(d) && d.length && d.forEach((b) => {
      const g = b.replace(/.*id="([^"]+)".*/, "$1").replace(/(^|-|_)(\w)/g, (T, P, y) => y.toUpperCase()), x = "virtual:" + g + ".svg";
      o[g] = {
        id: g,
        virtualModuleId: x,
        code: b.replace(/(.*?)id="[^"]+"(.*?)/, '$1id="' + g + '"$2').replaceAll("symbol", "svg"),
        resolvedVirtualModuleId: "\0virtual:" + g
      };
    });
  });
  const c = Object.values(o), l = `virtual:${t}`, h = "\0" + l;
  return {
    name: "vite-iconfont-loader",
    resolveId(p) {
      const m = c.find((d) => d.virtualModuleId === p);
      if (m)
        return m.resolvedVirtualModuleId;
      if (p === l)
        return h;
    },
    load(p) {
      const m = c.find((d) => d.resolvedVirtualModuleId === p);
      if (m) {
        const d = Object.entries(
          Object.assign(
            {
              class: "iconfont",
              width: "1em",
              height: "1em",
              fill: "currentColor",
              color: "currentColor"
            },
            r
          )
        ).map(([x, T]) => `${x}="${T}"`).join(" ");
        let b = ud(m.code).data;
        b = b.replace(/<style/g, '<component is="style"').replace(/<\/style/g, "</component").replace(/<svg/g, `<svg ${d}`);
        const { code: g } = p2({
          id: JSON.stringify(p),
          source: b,
          filename: m.id + ".svg",
          transformAssetUrls: !1
        });
        return `${g}
export default { render: render }`;
      } else if (p === h) {
        const d = [], b = [];
        return c.forEach(({ id: g, virtualModuleId: x }) => {
          d.push(`import ${g} from '${x}'`), b.push(g);
        }), [d.join(`
`), "export {", b.join(`,
`), "}"].join(`
`);
      }
    }
  };
}
export {
  D2 as default
};
