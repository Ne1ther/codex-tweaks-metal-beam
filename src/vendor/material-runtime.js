var Y1=Object.create;var Qc=Object.defineProperty;var V1=Object.getOwnPropertyDescriptor;var j1=Object.getOwnPropertyNames;var Q1=Object.getPrototypeOf,q1=Object.prototype.hasOwnProperty;var At=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var K1=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of j1(t))!q1.call(e,o)&&o!==r&&Qc(e,o,{get:()=>t[o],enumerable:!(n=V1(t,o))||n.enumerable});return e};var rt=(e,t,r)=>(r=e!=null?Y1(Q1(e)):{},K1(t||!e||!e.__esModule?Qc(r,"default",{value:e,enumerable:!0}):r,e));var lf=At(G=>{"use strict";var ro=Symbol.for("react.element"),Z1=Symbol.for("react.portal"),J1=Symbol.for("react.fragment"),eg=Symbol.for("react.strict_mode"),tg=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),og=Symbol.for("react.forward_ref"),ig=Symbol.for("react.suspense"),ag=Symbol.for("react.memo"),sg=Symbol.for("react.lazy"),qc=Symbol.iterator;function lg(e){return e===null||typeof e!="object"?null:(e=qc&&e[qc]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,tf={};function rn(e,t,r){this.props=e,this.context=t,this.refs=tf,this.updater=r||Jc}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rf(){}rf.prototype=rn.prototype;function Ms(e,t,r){this.props=e,this.context=t,this.refs=tf,this.updater=r||Jc}var Cs=Ms.prototype=new rf;Cs.constructor=Ms;ef(Cs,rn.prototype);Cs.isPureReactComponent=!0;var Kc=Array.isArray,nf=Object.prototype.hasOwnProperty,$s={current:null},of={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)nf.call(t,n)&&!of.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:ro,type:e,key:i,ref:a,props:o,_owner:$s.current}}function ug(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function cg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Zc=/\/+/g;function _s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cg(""+e.key):t.toString(36)}function wi(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ro:case Z1:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+_s(a,0):n,Kc(o)?(r="",e!=null&&(r=e.replace(Zc,"$&/")+"/"),wi(o,t,r,"",function(u){return u})):o!=null&&(Rs(o)&&(o=ug(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Zc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",Kc(e))for(var s=0;s<e.length;s++){i=e[s];var l=n+_s(i,s);a+=wi(i,t,r,l,o)}else if(l=lg(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=n+_s(i,s++),a+=wi(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function yi(e,t,r){if(e==null)return e;var n=[],o=0;return wi(e,n,"","",function(i){return t.call(r,i,o++)}),n}function fg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Si={transition:null},dg={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Si,ReactCurrentOwner:$s};function sf(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:yi,forEach:function(e,t,r){yi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return yi(e,function(){t++}),t},toArray:function(e){return yi(e,function(t){return t})||[]},only:function(e){if(!Rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=rn;G.Fragment=J1;G.Profiler=tg;G.PureComponent=Ms;G.StrictMode=eg;G.Suspense=ig;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dg;G.act=sf;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ef({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=$s.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)nf.call(t,l)&&!of.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:ro,type:e.type,key:o,ref:i,props:n,_owner:a}};G.createContext=function(e){return e={$$typeof:ng,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rg,_context:e},e.Consumer=e};G.createElement=af;G.createFactory=function(e){var t=af.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:og,render:e}};G.isValidElement=Rs;G.lazy=function(e){return{$$typeof:sg,_payload:{_status:-1,_result:e},_init:fg}};G.memo=function(e,t){return{$$typeof:ag,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};G.unstable_act=sf;G.useCallback=function(e,t){return Fe.current.useCallback(e,t)};G.useContext=function(e){return Fe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};G.useEffect=function(e,t){return Fe.current.useEffect(e,t)};G.useId=function(){return Fe.current.useId()};G.useImperativeHandle=function(e,t,r){return Fe.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Fe.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Fe.current.useReducer(e,t,r)};G.useRef=function(e){return Fe.current.useRef(e)};G.useState=function(e){return Fe.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Fe.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Fe.current.useTransition()};G.version="18.3.1"});var nn=At((fx,uf)=>{"use strict";uf.exports=lf()});var vf=At(oe=>{"use strict";function Ps(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(0<ki(o,t))e[n]=t,e[r]=o,r=n;else break e}}function dt(e){return e.length===0?null:e[0]}function _i(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var a=2*(n+1)-1,s=e[a],l=a+1,u=e[l];if(0>ki(s,r))l<o&&0>ki(u,s)?(e[n]=u,e[l]=r,n=l):(e[n]=s,e[a]=r,n=a);else if(l<o&&0>ki(u,r))e[n]=u,e[l]=r,n=l;else break e}}return t}function ki(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(cf=performance,oe.unstable_now=function(){return cf.now()}):(Es=Date,ff=Es.now(),oe.unstable_now=function(){return Es.now()-ff});var cf,Es,ff,zt=[],er=[],pg=1,nt=null,Te=3,Mi=!1,Er=!1,oo=!1,mf=typeof setTimeout=="function"?setTimeout:null,gf=typeof clearTimeout=="function"?clearTimeout:null,df=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Os(e){for(var t=dt(er);t!==null;){if(t.callback===null)_i(er);else if(t.startTime<=e)_i(er),t.sortIndex=t.expirationTime,Ps(zt,t);else break;t=dt(er)}}function Is(e){if(oo=!1,Os(e),!Er)if(dt(zt)!==null)Er=!0,As(Fs);else{var t=dt(er);t!==null&&Hs(Is,t.startTime-e)}}function Fs(e,t){Er=!1,oo&&(oo=!1,gf(io),io=-1),Mi=!0;var r=Te;try{for(Os(t),nt=dt(zt);nt!==null&&(!(nt.expirationTime>t)||e&&!xf());){var n=nt.callback;if(typeof n=="function"){nt.callback=null,Te=nt.priorityLevel;var o=n(nt.expirationTime<=t);t=oe.unstable_now(),typeof o=="function"?nt.callback=o:nt===dt(zt)&&_i(zt),Os(t)}else _i(zt);nt=dt(zt)}if(nt!==null)var i=!0;else{var a=dt(er);a!==null&&Hs(Is,a.startTime-t),i=!1}return i}finally{nt=null,Te=r,Mi=!1}}var Ci=!1,zi=null,io=-1,hf=5,bf=-1;function xf(){return!(oe.unstable_now()-bf<hf)}function Ts(){if(zi!==null){var e=oe.unstable_now();bf=e;var t=!0;try{t=zi(!0,e)}finally{t?no():(Ci=!1,zi=null)}}else Ci=!1}var no;typeof df=="function"?no=function(){df(Ts)}:typeof MessageChannel<"u"?(Ls=new MessageChannel,pf=Ls.port2,Ls.port1.onmessage=Ts,no=function(){pf.postMessage(null)}):no=function(){mf(Ts,0)};var Ls,pf;function As(e){zi=e,Ci||(Ci=!0,no())}function Hs(e,t){io=mf(function(){e(oe.unstable_now())},t)}oe.unstable_IdlePriority=5;oe.unstable_ImmediatePriority=1;oe.unstable_LowPriority=4;oe.unstable_NormalPriority=3;oe.unstable_Profiling=null;oe.unstable_UserBlockingPriority=2;oe.unstable_cancelCallback=function(e){e.callback=null};oe.unstable_continueExecution=function(){Er||Mi||(Er=!0,As(Fs))};oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):hf=0<e?Math.floor(1e3/e):5};oe.unstable_getCurrentPriorityLevel=function(){return Te};oe.unstable_getFirstCallbackNode=function(){return dt(zt)};oe.unstable_next=function(e){switch(Te){case 1:case 2:case 3:var t=3;break;default:t=Te}var r=Te;Te=t;try{return e()}finally{Te=r}};oe.unstable_pauseExecution=function(){};oe.unstable_requestPaint=function(){};oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=Te;Te=e;try{return t()}finally{Te=r}};oe.unstable_scheduleCallback=function(e,t,r){var n=oe.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=r+o,e={id:pg++,callback:t,priorityLevel:e,startTime:r,expirationTime:o,sortIndex:-1},r>n?(e.sortIndex=r,Ps(er,e),dt(zt)===null&&e===dt(er)&&(oo?(gf(io),io=-1):oo=!0,Hs(Is,r-n))):(e.sortIndex=o,Ps(zt,e),Er||Mi||(Er=!0,As(Fs))),e};oe.unstable_shouldYield=xf;oe.unstable_wrapCallback=function(e){var t=Te;return function(){var r=Te;Te=t;try{return e.apply(this,arguments)}finally{Te=r}}}});var wf=At((px,yf)=>{"use strict";yf.exports=vf()});var _p=At(Je=>{"use strict";var mg=nn(),Ke=wf();function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $0=new Set,$o={};function Xr(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for($o[e]=t,e=0;e<t.length;e++)$0.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,gg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},kf={};function hg(e){return sl.call(kf,e)?!0:sl.call(Sf,e)?!1:gg.test(e)?kf[e]=!0:(Sf[e]=!0,!1)}function bg(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xg(e,t,r,n){if(t===null||typeof t>"u"||bg(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function eu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jl,eu);Re[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jl,eu);Re[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jl,eu);Re[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function tu(e,t,r,n){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xg(t,r,o,n)&&(r=null),n||o===null?hg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Vt=mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$i=Symbol.for("react.element"),sn=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),nu=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),ou=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),T0=Symbol.for("react.offscreen"),zf=Symbol.iterator;function ao(e){return e===null||typeof e!="object"?null:(e=zf&&e[zf]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Ns;function go(e){if(Ns===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ns=t&&t[1]||""}return`
`+Ns+e}var Ws=!1;function Ds(e,t){if(!e||Ws)return"";Ws=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ws=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?go(e):""}function vg(e){switch(e.tag){case 5:return go(e.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return e=Ds(e.type,!1),e;case 11:return e=Ds(e.type.render,!1),e;case 1:return e=Ds(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ln:return"Fragment";case sn:return"Portal";case ll:return"Profiler";case ru:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E0:return(e.displayName||"Context")+".Consumer";case R0:return(e._context.displayName||"Context")+".Provider";case nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ou:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function yg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function L0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wg(e){var t=L0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ri(e){e._valueTracker||(e._valueTracker=wg(e))}function P0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=L0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var r=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function _f(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=hr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function O0(e,t){t=t.checked,t!=null&&tu(e,"checked",t,!1)}function pl(e,t){O0(e,t);var r=hr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,r):t.hasOwnProperty("defaultValue")&&ml(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ml(e,t,r){(t!=="number"||na(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ho=Array.isArray;function vn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+hr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(M(92));if(ho(r)){if(1<r.length)throw Error(M(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:hr(r)}}function I0(e,t){var r=hr(t.value),n=hr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function $f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function F0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?F0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,A0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ro(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sg=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(e){Sg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vo[t]=vo[e]})});function H0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||vo.hasOwnProperty(e)&&vo[e]?(""+t).trim():t+"px"}function N0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=H0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var kg=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(e,t){if(t){if(kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,yn=null,wn=null;function Rf(e){if(e=Vo(e)){if(typeof yl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ta(t),yl(e.stateNode,e.type,t))}}function W0(e){yn?wn?wn.push(e):wn=[e]:yn=e}function D0(){if(yn){var e=yn,t=wn;if(wn=yn=null,Rf(e),t)for(e=0;e<t.length;e++)Rf(t[e])}}function B0(e,t){return e(t)}function X0(){}var Bs=!1;function G0(e,t,r){if(Bs)return e(t,r);Bs=!0;try{return B0(e,t,r)}finally{Bs=!1,(yn!==null||wn!==null)&&(X0(),D0())}}function Eo(e,t){var r=e.stateNode;if(r===null)return null;var n=Ta(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(M(231,t,typeof r));return r}var wl=!1;if(Xt)try{on={},Object.defineProperty(on,"passive",{get:function(){wl=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{wl=!1}var on;function zg(e,t,r,n,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var yo=!1,oa=null,ia=!1,Sl=null,_g={onError:function(e){yo=!0,oa=e}};function Mg(e,t,r,n,o,i,a,s,l){yo=!1,oa=null,zg.apply(_g,arguments)}function Cg(e,t,r,n,o,i,a,s,l){if(Mg.apply(this,arguments),yo){if(yo){var u=oa;yo=!1,oa=null}else throw Error(M(198));ia||(ia=!0,Sl=u)}}function Gr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function U0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ef(e){if(Gr(e)!==e)throw Error(M(188))}function $g(e){var t=e.alternate;if(!t){if(t=Gr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Ef(o),e;if(i===n)return Ef(o),t;i=i.sibling}throw Error(M(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?e:t}function Y0(e){return e=$g(e),e!==null?V0(e):null}function V0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=V0(e);if(t!==null)return t;e=e.sibling}return null}var j0=Ke.unstable_scheduleCallback,Tf=Ke.unstable_cancelCallback,Rg=Ke.unstable_shouldYield,Eg=Ke.unstable_requestPaint,ye=Ke.unstable_now,Tg=Ke.unstable_getCurrentPriorityLevel,au=Ke.unstable_ImmediatePriority,Q0=Ke.unstable_UserBlockingPriority,aa=Ke.unstable_NormalPriority,Lg=Ke.unstable_LowPriority,q0=Ke.unstable_IdlePriority,Ca=null,$t=null;function Pg(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ca,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Fg,Og=Math.log,Ig=Math.LN2;function Fg(e){return e>>>=0,e===0?32:31-(Og(e)/Ig|0)|0}var Ti=64,Li=4194304;function bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?n=bo(s):(i&=a,i!==0&&(n=bo(i)))}else a=r&~o,a!==0?n=bo(a):i!==0&&(n=bo(i));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-bt(t),o=1<<r,n|=e[r],t&=~o;return n}function Ag(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hg(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-bt(i),s=1<<a,l=o[a];l===-1?((s&r)===0||(s&n)!==0)&&(o[a]=Ag(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function K0(){var e=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),e}function Xs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Uo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=r}function Ng(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-bt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function su(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-bt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var ee=0;function Z0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var J0,lu,ed,td,rd,zl=!1,Pi=[],lr=null,ur=null,cr=null,To=new Map,Lo=new Map,or=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":To.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function so(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Vo(t),t!==null&&lu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dg(e,t,r,n,o){switch(t){case"focusin":return lr=so(lr,e,t,r,n,o),!0;case"dragenter":return ur=so(ur,e,t,r,n,o),!0;case"mouseover":return cr=so(cr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return To.set(i,so(To.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Lo.set(i,so(Lo.get(i)||null,e,t,r,n,o)),!0}return!1}function nd(e){var t=Pr(e.target);if(t!==null){var r=Gr(t);if(r!==null){if(t=r.tag,t===13){if(t=U0(r),t!==null){e.blockedOn=t,rd(e.priority,function(){ed(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);vl=n,r.target.dispatchEvent(n),vl=null}else return t=Vo(r),t!==null&&lu(t),e.blockedOn=r,!1;t.shift()}return!0}function Pf(e,t,r){Vi(e)&&r.delete(t)}function Bg(){zl=!1,lr!==null&&Vi(lr)&&(lr=null),ur!==null&&Vi(ur)&&(ur=null),cr!==null&&Vi(cr)&&(cr=null),To.forEach(Pf),Lo.forEach(Pf)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Bg)))}function Po(e){function t(o){return lo(o,e)}if(0<Pi.length){lo(Pi[0],e);for(var r=1;r<Pi.length;r++){var n=Pi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(lr!==null&&lo(lr,e),ur!==null&&lo(ur,e),cr!==null&&lo(cr,e),To.forEach(t),Lo.forEach(t),r=0;r<or.length;r++)n=or[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<or.length&&(r=or[0],r.blockedOn===null);)nd(r),r.blockedOn===null&&or.shift()}var Sn=Vt.ReactCurrentBatchConfig,la=!0;function Xg(e,t,r,n){var o=ee,i=Sn.transition;Sn.transition=null;try{ee=1,uu(e,t,r,n)}finally{ee=o,Sn.transition=i}}function Gg(e,t,r,n){var o=ee,i=Sn.transition;Sn.transition=null;try{ee=4,uu(e,t,r,n)}finally{ee=o,Sn.transition=i}}function uu(e,t,r,n){if(la){var o=_l(e,t,r,n);if(o===null)qs(e,t,n,ua,r),Lf(e,n);else if(Dg(o,e,t,r,n))n.stopPropagation();else if(Lf(e,n),t&4&&-1<Wg.indexOf(e)){for(;o!==null;){var i=Vo(o);if(i!==null&&J0(i),i=_l(e,t,r,n),i===null&&qs(e,t,n,ua,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else qs(e,t,n,null,r)}}var ua=null;function _l(e,t,r,n){if(ua=null,e=iu(n),e=Pr(e),e!==null)if(t=Gr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=U0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ua=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tg()){case au:return 1;case Q0:return 4;case aa:case Lg:return 16;case q0:return 536870912;default:return 16}default:return 16}}var ar=null,cu=null,ji=null;function id(){if(ji)return ji;var e,t=cu,r=t.length,n,o="value"in ar?ar.value:ar.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return ji=o.slice(e,1<n?1-n:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function Of(){return!1}function Ze(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oi:Of,this.isPropagationStopped=Of,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=Ze(Ln),Yo=de({},Ln,{view:0,detail:0}),Ug=Ze(Yo),Gs,Us,uo,$a=de({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==uo&&(uo&&e.type==="mousemove"?(Gs=e.screenX-uo.screenX,Us=e.screenY-uo.screenY):Us=Gs=0,uo=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),If=Ze($a),Yg=de({},$a,{dataTransfer:0}),Vg=Ze(Yg),jg=de({},Yo,{relatedTarget:0}),Ys=Ze(jg),Qg=de({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),qg=Ze(Qg),Kg=de({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zg=Ze(Kg),Jg=de({},Ln,{data:0}),Ff=Ze(Jg),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rh[e])?!!t[e]:!1}function du(){return nh}var oh=de({},Yo,{key:function(e){if(e.key){var t=eh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ih=Ze(oh),ah=de({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=Ze(ah),sh=de({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),lh=Ze(sh),uh=de({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=Ze(uh),fh=de({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=Ze(fh),ph=[9,13,27,32],pu=Xt&&"CompositionEvent"in window,wo=null;Xt&&"documentMode"in document&&(wo=document.documentMode);var mh=Xt&&"TextEvent"in window&&!wo,ad=Xt&&(!pu||wo&&8<wo&&11>=wo),Hf=" ",Nf=!1;function sd(e,t){switch(e){case"keyup":return ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function gh(e,t){switch(e){case"compositionend":return ld(t);case"keypress":return t.which!==32?null:(Nf=!0,Hf);case"textInput":return e=t.data,e===Hf&&Nf?null:e;default:return null}}function hh(e,t){if(un)return e==="compositionend"||!pu&&sd(e,t)?(e=id(),ji=cu=ar=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ad&&t.locale!=="ko"?null:t.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bh[e.type]:t==="textarea"}function ud(e,t,r,n){W0(n),t=ca(t,"onChange"),0<t.length&&(r=new fu("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var So=null,Oo=null;function xh(e){yd(e,0)}function Ra(e){var t=dn(e);if(P0(t))return e}function vh(e,t){if(e==="change")return t}var cd=!1;Xt&&(Xt?(Fi="oninput"in document,Fi||(Vs=document.createElement("div"),Vs.setAttribute("oninput","return;"),Fi=typeof Vs.oninput=="function"),Ii=Fi):Ii=!1,cd=Ii&&(!document.documentMode||9<document.documentMode));var Ii,Fi,Vs;function Df(){So&&(So.detachEvent("onpropertychange",fd),Oo=So=null)}function fd(e){if(e.propertyName==="value"&&Ra(Oo)){var t=[];ud(t,Oo,e,iu(e)),G0(xh,t)}}function yh(e,t,r){e==="focusin"?(Df(),So=t,Oo=r,So.attachEvent("onpropertychange",fd)):e==="focusout"&&Df()}function wh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(Oo)}function Sh(e,t){if(e==="click")return Ra(t)}function kh(e,t){if(e==="input"||e==="change")return Ra(t)}function zh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:zh;function Io(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!sl.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xf(e,t){var r=Bf(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bf(r)}}function dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(){for(var e=window,t=na();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=na(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _h(e){var t=pd(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dd(r.ownerDocument.documentElement,r)){if(n!==null&&mu(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Xf(r,i);var a=Xf(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mh=Xt&&"documentMode"in document&&11>=document.documentMode,cn=null,Ml=null,ko=null,Cl=!1;function Gf(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Cl||cn==null||cn!==na(n)||(n=cn,"selectionStart"in n&&mu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ko&&Io(ko,n)||(ko=n,n=ca(Ml,"onSelect"),0<n.length&&(t=new fu("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=cn)))}function Ai(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var fn={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},js={},md={};Xt&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Ea(e){if(js[e])return js[e];if(!fn[e])return e;var t=fn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in md)return js[e]=t[r];return e}var gd=Ea("animationend"),hd=Ea("animationiteration"),bd=Ea("animationstart"),xd=Ea("transitionend"),vd=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){vd.set(e,t),Xr(t,[e])}for(Hi=0;Hi<Uf.length;Hi++)Ni=Uf[Hi],Yf=Ni.toLowerCase(),Vf=Ni[0].toUpperCase()+Ni.slice(1),xr(Yf,"on"+Vf);var Ni,Yf,Vf,Hi;xr(gd,"onAnimationEnd");xr(hd,"onAnimationIteration");xr(bd,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(xd,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function jf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Cg(n,t,void 0,e),e.currentTarget=null}function yd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;jf(o,s,u),i=l}else for(a=0;a<n.length;a++){if(s=n[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;jf(o,s,u),i=l}}}if(ia)throw e=Sl,ia=!1,Sl=null,e}function ae(e,t){var r=t[Ll];r===void 0&&(r=t[Ll]=new Set);var n=e+"__bubble";r.has(n)||(wd(t,e,2,!1),r.add(n))}function Qs(e,t,r){var n=0;t&&(n|=4),wd(r,e,n,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[Wi]){e[Wi]=!0,$0.forEach(function(r){r!=="selectionchange"&&(Ch.has(r)||Qs(r,!1,e),Qs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,Qs("selectionchange",!1,t))}}function wd(e,t,r,n){switch(od(t)){case 1:var o=Xg;break;case 4:o=Gg;break;default:o=uu}r=o.bind(null,t,r,e),o=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function qs(e,t,r,n,o){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Pr(s),a===null)return;if(l=a.tag,l===5||l===6){n=i=a;continue e}s=s.parentNode}}n=n.return}G0(function(){var u=i,d=iu(r),c=[];e:{var m=vd.get(e);if(m!==void 0){var h=fu,x=e;switch(e){case"keypress":if(Qi(r)===0)break e;case"keydown":case"keyup":h=ih;break;case"focusin":x="focus",h=Ys;break;case"focusout":x="blur",h=Ys;break;case"beforeblur":case"afterblur":h=Ys;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=lh;break;case gd:case hd:case bd:h=qg;break;case xd:h=ch;break;case"scroll":h=Ug;break;case"wheel":h=dh;break;case"copy":case"cut":case"paste":h=Zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Af}var b=(t&4)!==0,y=!b&&e==="scroll",f=b?m!==null?m+"Capture":null:m;b=[];for(var p=u,g;p!==null;){g=p;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,f!==null&&(v=Eo(p,f),v!=null&&b.push(Ao(p,v,g)))),y)break;p=p.return}0<b.length&&(m=new h(m,x,null,r,d),c.push({event:m,listeners:b}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&r!==vl&&(x=r.relatedTarget||r.fromElement)&&(Pr(x)||x[Gt]))break e;if((h||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,h?(x=r.relatedTarget||r.toElement,h=u,x=x?Pr(x):null,x!==null&&(y=Gr(x),x!==y||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(b=If,v="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Af,v="onPointerLeave",f="onPointerEnter",p="pointer"),y=h==null?m:dn(h),g=x==null?m:dn(x),m=new b(v,p+"leave",h,r,d),m.target=y,m.relatedTarget=g,v=null,Pr(d)===u&&(b=new b(f,p+"enter",x,r,d),b.target=g,b.relatedTarget=y,v=b),y=v,h&&x)t:{for(b=h,f=x,p=0,g=b;g;g=an(g))p++;for(g=0,v=f;v;v=an(v))g++;for(;0<p-g;)b=an(b),p--;for(;0<g-p;)f=an(f),g--;for(;p--;){if(b===f||f!==null&&b===f.alternate)break t;b=an(b),f=an(f)}b=null}else b=null;h!==null&&Qf(c,m,h,b,!1),x!==null&&y!==null&&Qf(c,y,x,b,!0)}}e:{if(m=u?dn(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var w=vh;else if(Wf(m))if(cd)w=kh;else{w=wh;var k=yh}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=Sh);if(w&&(w=w(e,u))){ud(c,w,r,d);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&ml(m,"number",m.value)}switch(k=u?dn(u):window,e){case"focusin":(Wf(k)||k.contentEditable==="true")&&(cn=k,Ml=u,ko=null);break;case"focusout":ko=Ml=cn=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Gf(c,r,d);break;case"selectionchange":if(Mh)break;case"keydown":case"keyup":Gf(c,r,d)}var z;if(pu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else un?sd(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(ad&&r.locale!=="ko"&&(un||_!=="onCompositionStart"?_==="onCompositionEnd"&&un&&(z=id()):(ar=d,cu="value"in ar?ar.value:ar.textContent,un=!0)),k=ca(u,_),0<k.length&&(_=new Ff(_,e,null,r,d),c.push({event:_,listeners:k}),z?_.data=z:(z=ld(r),z!==null&&(_.data=z)))),(z=mh?gh(e,r):hh(e,r))&&(u=ca(u,"onBeforeInput"),0<u.length&&(d=new Ff("onBeforeInput","beforeinput",null,r,d),c.push({event:d,listeners:u}),d.data=z))}yd(c,t)})}function Ao(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ca(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Eo(e,r),i!=null&&n.unshift(Ao(e,i,o)),i=Eo(e,t),i!=null&&n.push(Ao(e,i,o))),e=e.return}return n}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qf(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,o?(l=Eo(r,i),l!=null&&a.unshift(Ao(r,l,s))):o||(l=Eo(r,i),l!=null&&a.push(Ao(r,l,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var $h=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function qf(e){return(typeof e=="string"?e:""+e).replace($h,`
`).replace(Rh,"")}function Di(e,t,r){if(t=qf(t),qf(e)!==t&&r)throw Error(M(425))}function fa(){}var $l=null,Rl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,Th=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(e){return Kf.resolve(null).then(e).catch(Lh)}:Tl;function Lh(e){setTimeout(function(){throw e})}function Ks(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Po(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Po(t)}function fr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Pn,Ho="__reactProps$"+Pn,Gt="__reactContainer$"+Pn,Ll="__reactEvents$"+Pn,Ph="__reactListeners$"+Pn,Oh="__reactHandles$"+Pn;function Pr(e){var t=e[Ct];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Gt]||r[Ct]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Zf(e);e!==null;){if(r=e[Ct])return r;e=Zf(e)}return t}e=r,r=e.parentNode}return null}function Vo(e){return e=e[Ct]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ta(e){return e[Ho]||null}var Pl=[],pn=-1;function vr(e){return{current:e}}function se(e){0>pn||(e.current=Pl[pn],Pl[pn]=null,pn--)}function ie(e,t){pn++,Pl[pn]=e.current,e.current=t}var br={},Ie=vr(br),Ge=vr(!1),Hr=br;function Mn(e,t){var r=e.type.contextTypes;if(!r)return br;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function da(){se(Ge),se(Ie)}function Jf(e,t,r){if(Ie.current!==br)throw Error(M(168));ie(Ie,t),ie(Ge,r)}function Sd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(M(108,yg(e)||"Unknown",o));return de({},r,n)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||br,Hr=Ie.current,ie(Ie,e),ie(Ge,Ge.current),!0}function e0(e,t,r){var n=e.stateNode;if(!n)throw Error(M(169));r?(e=Sd(e,t,Hr),n.__reactInternalMemoizedMergedChildContext=e,se(Ge),se(Ie),ie(Ie,e)):se(Ge),ie(Ge,r)}var Nt=null,La=!1,Zs=!1;function kd(e){Nt===null?Nt=[e]:Nt.push(e)}function Ih(e){La=!0,kd(e)}function yr(){if(!Zs&&Nt!==null){Zs=!0;var e=0,t=ee;try{var r=Nt;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Nt=null,La=!1}catch(o){throw Nt!==null&&(Nt=Nt.slice(e+1)),j0(au,yr),o}finally{ee=t,Zs=!1}}return null}var mn=[],gn=0,ma=null,ga=0,ot=[],it=0,Nr=null,Wt=1,Dt="";function Tr(e,t){mn[gn++]=ga,mn[gn++]=ma,ma=e,ga=t}function zd(e,t,r){ot[it++]=Wt,ot[it++]=Dt,ot[it++]=Nr,Nr=e;var n=Wt;e=Dt;var o=32-bt(n)-1;n&=~(1<<o),r+=1;var i=32-bt(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Wt=1<<32-bt(t)+o|r<<o|n,Dt=i+e}else Wt=1<<i|r<<o|n,Dt=e}function gu(e){e.return!==null&&(Tr(e,1),zd(e,1,0))}function hu(e){for(;e===ma;)ma=mn[--gn],mn[gn]=null,ga=mn[--gn],mn[gn]=null;for(;e===Nr;)Nr=ot[--it],ot[it]=null,Dt=ot[--it],ot[it]=null,Wt=ot[--it],ot[it]=null}var qe=null,Qe=null,le=!1,ht=null;function _d(e,t){var r=at(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function t0(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Qe=fr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Nr!==null?{id:Wt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=at(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Qe=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(le){var t=Qe;if(t){var r=t;if(!t0(e,t)){if(Ol(e))throw Error(M(418));t=fr(r.nextSibling);var n=qe;t&&t0(e,t)?_d(n,r):(e.flags=e.flags&-4097|2,le=!1,qe=e)}}else{if(Ol(e))throw Error(M(418));e.flags=e.flags&-4097|2,le=!1,qe=e}}}function r0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Bi(e){if(e!==qe)return!1;if(!le)return r0(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=Qe)){if(Ol(e))throw Md(),Error(M(418));for(;t;)_d(e,t),t=fr(t.nextSibling)}if(r0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=fr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=qe?fr(e.stateNode.nextSibling):null;return!0}function Md(){for(var e=Qe;e;)e=fr(e.nextSibling)}function Cn(){Qe=qe=null,le=!1}function bu(e){ht===null?ht=[e]:ht.push(e)}var Fh=Vt.ReactCurrentBatchConfig;function co(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function n0(e){var t=e._init;return t(e._payload)}function Cd(e){function t(f,p){if(e){var g=f.deletions;g===null?(f.deletions=[p],f.flags|=16):g.push(p)}}function r(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function n(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function o(f,p){return f=gr(f,p),f.index=0,f.sibling=null,f}function i(f,p,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<p?(f.flags|=2,p):g):(f.flags|=2,p)):(f.flags|=1048576,p)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,p,g,v){return p===null||p.tag!==6?(p=il(g,f.mode,v),p.return=f,p):(p=o(p,g),p.return=f,p)}function l(f,p,g,v){var w=g.type;return w===ln?d(f,p,g.props.children,v,g.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rr&&n0(w)===p.type)?(v=o(p,g.props),v.ref=co(f,p,g),v.return=f,v):(v=ra(g.type,g.key,g.props,null,f.mode,v),v.ref=co(f,p,g),v.return=f,v)}function u(f,p,g,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=al(g,f.mode,v),p.return=f,p):(p=o(p,g.children||[]),p.return=f,p)}function d(f,p,g,v,w){return p===null||p.tag!==7?(p=Ar(g,f.mode,v,w),p.return=f,p):(p=o(p,g),p.return=f,p)}function c(f,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=il(""+p,f.mode,g),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $i:return g=ra(p.type,p.key,p.props,null,f.mode,g),g.ref=co(f,null,p),g.return=f,g;case sn:return p=al(p,f.mode,g),p.return=f,p;case rr:var v=p._init;return c(f,v(p._payload),g)}if(ho(p)||ao(p))return p=Ar(p,f.mode,g,null),p.return=f,p;Xi(f,p)}return null}function m(f,p,g,v){var w=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:s(f,p,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $i:return g.key===w?l(f,p,g,v):null;case sn:return g.key===w?u(f,p,g,v):null;case rr:return w=g._init,m(f,p,w(g._payload),v)}if(ho(g)||ao(g))return w!==null?null:d(f,p,g,v,null);Xi(f,g)}return null}function h(f,p,g,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(g)||null,s(p,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $i:return f=f.get(v.key===null?g:v.key)||null,l(p,f,v,w);case sn:return f=f.get(v.key===null?g:v.key)||null,u(p,f,v,w);case rr:var k=v._init;return h(f,p,g,k(v._payload),w)}if(ho(v)||ao(v))return f=f.get(g)||null,d(p,f,v,w,null);Xi(p,v)}return null}function x(f,p,g,v){for(var w=null,k=null,z=p,_=p=0,T=null;z!==null&&_<g.length;_++){z.index>_?(T=z,z=null):T=z.sibling;var C=m(f,z,g[_],v);if(C===null){z===null&&(z=T);break}e&&z&&C.alternate===null&&t(f,z),p=i(C,p,_),k===null?w=C:k.sibling=C,k=C,z=T}if(_===g.length)return r(f,z),le&&Tr(f,_),w;if(z===null){for(;_<g.length;_++)z=c(f,g[_],v),z!==null&&(p=i(z,p,_),k===null?w=z:k.sibling=z,k=z);return le&&Tr(f,_),w}for(z=n(f,z);_<g.length;_++)T=h(z,f,_,g[_],v),T!==null&&(e&&T.alternate!==null&&z.delete(T.key===null?_:T.key),p=i(T,p,_),k===null?w=T:k.sibling=T,k=T);return e&&z.forEach(function(O){return t(f,O)}),le&&Tr(f,_),w}function b(f,p,g,v){var w=ao(g);if(typeof w!="function")throw Error(M(150));if(g=w.call(g),g==null)throw Error(M(151));for(var k=w=null,z=p,_=p=0,T=null,C=g.next();z!==null&&!C.done;_++,C=g.next()){z.index>_?(T=z,z=null):T=z.sibling;var O=m(f,z,C.value,v);if(O===null){z===null&&(z=T);break}e&&z&&O.alternate===null&&t(f,z),p=i(O,p,_),k===null?w=O:k.sibling=O,k=O,z=T}if(C.done)return r(f,z),le&&Tr(f,_),w;if(z===null){for(;!C.done;_++,C=g.next())C=c(f,C.value,v),C!==null&&(p=i(C,p,_),k===null?w=C:k.sibling=C,k=C);return le&&Tr(f,_),w}for(z=n(f,z);!C.done;_++,C=g.next())C=h(z,f,_,C.value,v),C!==null&&(e&&C.alternate!==null&&z.delete(C.key===null?_:C.key),p=i(C,p,_),k===null?w=C:k.sibling=C,k=C);return e&&z.forEach(function(D){return t(f,D)}),le&&Tr(f,_),w}function y(f,p,g,v){if(typeof g=="object"&&g!==null&&g.type===ln&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case $i:e:{for(var w=g.key,k=p;k!==null;){if(k.key===w){if(w=g.type,w===ln){if(k.tag===7){r(f,k.sibling),p=o(k,g.props.children),p.return=f,f=p;break e}}else if(k.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rr&&n0(w)===k.type){r(f,k.sibling),p=o(k,g.props),p.ref=co(f,k,g),p.return=f,f=p;break e}r(f,k);break}else t(f,k);k=k.sibling}g.type===ln?(p=Ar(g.props.children,f.mode,v,g.key),p.return=f,f=p):(v=ra(g.type,g.key,g.props,null,f.mode,v),v.ref=co(f,p,g),v.return=f,f=v)}return a(f);case sn:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){r(f,p.sibling),p=o(p,g.children||[]),p.return=f,f=p;break e}else{r(f,p);break}else t(f,p);p=p.sibling}p=al(g,f.mode,v),p.return=f,f=p}return a(f);case rr:return k=g._init,y(f,p,k(g._payload),v)}if(ho(g))return x(f,p,g,v);if(ao(g))return b(f,p,g,v);Xi(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(r(f,p.sibling),p=o(p,g),p.return=f,f=p):(r(f,p),p=il(g,f.mode,v),p.return=f,f=p),a(f)):r(f,p)}return y}var $n=Cd(!0),$d=Cd(!1),ha=vr(null),ba=null,hn=null,xu=null;function vu(){xu=hn=ba=null}function yu(e){var t=ha.current;se(ha),e._currentValue=t}function Fl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function kn(e,t){ba=e,xu=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(xu!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(ba===null)throw Error(M(308));hn=e,ba.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Or=null;function wu(e){Or===null?Or=[e]:Or.push(e)}function Rd(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,wu(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ut(e,n)}function Ut(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var nr=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ed(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(j&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ut(e,r)}return o=n.interleaved,o===null?(t.next=t,wu(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ut(e,r)}function qi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,su(e,r)}}function o0(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function xa(e,t,r,n){var o=e.updateQueue;nr=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(i!==null){var c=o.baseState;a=0,d=u=l=null,s=i;do{var m=s.lane,h=s.eventTime;if((n&m)===m){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,b=s;switch(m=t,h=r,b.tag){case 1:if(x=b.payload,typeof x=="function"){c=x.call(h,c,m);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,m=typeof x=="function"?x.call(h,c,m):x,m==null)break e;c=de({},c,m);break e;case 2:nr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else h={eventTime:h,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,l=c):d=d.next=h,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(l=c),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Dr|=a,e.lanes=a,e.memoizedState=c}}function i0(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(M(191,o));o.call(n)}}}var jo={},Rt=vr(jo),No=vr(jo),Wo=vr(jo);function Ir(e){if(e===jo)throw Error(M(174));return e}function ku(e,t){switch(ie(Wo,t),ie(No,e),ie(Rt,jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}se(Rt),ie(Rt,t)}function Rn(){se(Rt),se(No),se(Wo)}function Td(e){Ir(Wo.current);var t=Ir(Rt.current),r=hl(t,e.type);t!==r&&(ie(No,e),ie(Rt,r))}function zu(e){No.current===e&&(se(Rt),se(No))}var ce=vr(0);function va(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Js=[];function _u(){for(var e=0;e<Js.length;e++)Js[e]._workInProgressVersionPrimary=null;Js.length=0}var Ki=Vt.ReactCurrentDispatcher,el=Vt.ReactCurrentBatchConfig,Wr=0,fe=null,ke=null,_e=null,ya=!1,zo=!1,Do=0,Ah=0;function Le(){throw Error(M(321))}function Mu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!vt(e[r],t[r]))return!1;return!0}function Cu(e,t,r,n,o,i){if(Wr=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ki.current=e===null||e.memoizedState===null?Dh:Bh,e=r(n,o),zo){i=0;do{if(zo=!1,Do=0,25<=i)throw Error(M(301));i+=1,_e=ke=null,t.updateQueue=null,Ki.current=Xh,e=r(n,o)}while(zo)}if(Ki.current=wa,t=ke!==null&&ke.next!==null,Wr=0,_e=ke=fe=null,ya=!1,t)throw Error(M(300));return e}function $u(){var e=Do!==0;return Do=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?fe.memoizedState=_e=e:_e=_e.next=e,_e}function ut(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=_e===null?fe.memoizedState:_e.next;if(t!==null)_e=t,ke=e;else{if(e===null)throw Error(M(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},_e===null?fe.memoizedState=_e=e:_e=_e.next=e}return _e}function Bo(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=ut(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=ke,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=a=null,l=null,u=i;do{var d=u.lane;if((Wr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=n):l=l.next=c,fe.lanes|=d,Dr|=d}u=u.next}while(u!==null&&u!==i);l===null?a=n:l.next=s,vt(n,t.memoizedState)||(Xe=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,Dr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function rl(e){var t=ut(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);vt(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Ld(){}function Pd(e,t){var r=fe,n=ut(),o=t(),i=!vt(n.memoizedState,o);if(i&&(n.memoizedState=o,Xe=!0),n=n.queue,Ru(Fd.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,Xo(9,Id.bind(null,r,n,o,t),void 0,null),Me===null)throw Error(M(349));(Wr&30)!==0||Od(r,t,o)}return o}function Od(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Id(e,t,r,n){t.value=r,t.getSnapshot=n,Ad(t)&&Hd(e)}function Fd(e,t,r){return r(function(){Ad(t)&&Hd(e)})}function Ad(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!vt(e,r)}catch{return!0}}function Hd(e){var t=Ut(e,1);t!==null&&xt(t,e,1,-1)}function a0(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Wh.bind(null,fe,e),[t.memoizedState,e]}function Xo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Nd(){return ut().memoizedState}function Zi(e,t,r,n){var o=Mt();fe.flags|=e,o.memoizedState=Xo(1|t,r,void 0,n===void 0?null:n)}function Pa(e,t,r,n){var o=ut();n=n===void 0?null:n;var i=void 0;if(ke!==null){var a=ke.memoizedState;if(i=a.destroy,n!==null&&Mu(n,a.deps)){o.memoizedState=Xo(t,r,i,n);return}}fe.flags|=e,o.memoizedState=Xo(1|t,r,i,n)}function s0(e,t){return Zi(8390656,8,e,t)}function Ru(e,t){return Pa(2048,8,e,t)}function Wd(e,t){return Pa(4,2,e,t)}function Dd(e,t){return Pa(4,4,e,t)}function Bd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,r){return r=r!=null?r.concat([e]):null,Pa(4,4,Bd.bind(null,t,e),r)}function Eu(){}function Gd(e,t){var r=ut();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Mu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ud(e,t){var r=ut();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Mu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Yd(e,t,r){return(Wr&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=r):(vt(r,t)||(r=K0(),fe.lanes|=r,Dr|=r,e.baseState=!0),t)}function Hh(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=el.transition;el.transition={};try{e(!1),t()}finally{ee=r,el.transition=n}}function Vd(){return ut().memoizedState}function Nh(e,t,r){var n=mr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},jd(e))Qd(t,r);else if(r=Rd(e,t,r,n),r!==null){var o=He();xt(r,e,n,o),qd(r,t,n)}}function Wh(e,t,r){var n=mr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(jd(e))Qd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,vt(s,a)){var l=t.interleaved;l===null?(o.next=o,wu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}r=Rd(e,t,o,n),r!==null&&(o=He(),xt(r,e,n,o),qd(r,t,n))}}function jd(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Qd(e,t){zo=ya=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function qd(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,su(e,r)}}var wa={readContext:lt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Dh={readContext:lt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:s0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Zi(4194308,4,Bd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var r=Mt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Mt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Nh.bind(null,fe,e),[n.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:a0,useDebugValue:Eu,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=a0(!1),t=e[0];return e=Hh.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=fe,o=Mt();if(le){if(r===void 0)throw Error(M(407));r=r()}else{if(r=t(),Me===null)throw Error(M(349));(Wr&30)!==0||Od(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,s0(Fd.bind(null,n,i,e),[e]),n.flags|=2048,Xo(9,Id.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Mt(),t=Me.identifierPrefix;if(le){var r=Dt,n=Wt;r=(n&~(1<<32-bt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Do++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ah++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bh={readContext:lt,useCallback:Gd,useContext:lt,useEffect:Ru,useImperativeHandle:Xd,useInsertionEffect:Wd,useLayoutEffect:Dd,useMemo:Ud,useReducer:tl,useRef:Nd,useState:function(){return tl(Bo)},useDebugValue:Eu,useDeferredValue:function(e){var t=ut();return Yd(t,ke.memoizedState,e)},useTransition:function(){var e=tl(Bo)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:Pd,useId:Vd,unstable_isNewReconciler:!1},Xh={readContext:lt,useCallback:Gd,useContext:lt,useEffect:Ru,useImperativeHandle:Xd,useInsertionEffect:Wd,useLayoutEffect:Dd,useMemo:Ud,useReducer:rl,useRef:Nd,useState:function(){return rl(Bo)},useDebugValue:Eu,useDeferredValue:function(e){var t=ut();return ke===null?t.memoizedState=e:Yd(t,ke.memoizedState,e)},useTransition:function(){var e=rl(Bo)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:Pd,useId:Vd,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Al(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:de({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Oa={isMounted:function(e){return(e=e._reactInternals)?Gr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=He(),o=mr(e),i=Bt(n,o);i.payload=t,r!=null&&(i.callback=r),t=dr(e,i,o),t!==null&&(xt(t,e,o,n),qi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=He(),o=mr(e),i=Bt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=dr(e,i,o),t!==null&&(xt(t,e,o,n),qi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=He(),n=mr(e),o=Bt(r,n);o.tag=2,t!=null&&(o.callback=t),t=dr(e,o,n),t!==null&&(xt(t,e,n,r),qi(t,e,n))}};function l0(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!Io(r,n)||!Io(o,i):!0}function Kd(e,t,r){var n=!1,o=br,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(o=Ue(t)?Hr:Ie.current,n=t.contextTypes,i=(n=n!=null)?Mn(e,o):br),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oa,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function u0(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Oa.enqueueReplaceState(t,t.state,null)}function Hl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Su(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=lt(i):(i=Ue(t)?Hr:Ie.current,o.context=Mn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Al(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Oa.enqueueReplaceState(o,o.state,null),xa(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var r="",n=t;do r+=vg(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function nl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Nl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gh=typeof WeakMap=="function"?WeakMap:Map;function Zd(e,t,r){r=Bt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ka||(ka=!0,Ql=n),Nl(e,t)},r}function Jd(e,t,r){r=Bt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Nl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Nl(e,t),typeof n!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function c0(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Gh;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=o2.bind(null,e,t,r),t.then(e,e))}function f0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function d0(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Bt(-1,1),t.tag=2,dr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Uh=Vt.ReactCurrentOwner,Xe=!1;function Ae(e,t,r,n){t.child=e===null?$d(t,null,r,n):$n(t,e.child,r,n)}function p0(e,t,r,n,o){r=r.render;var i=t.ref;return kn(t,o),n=Cu(e,t,r,n,i,o),r=$u(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(le&&r&&gu(t),t.flags|=1,Ae(e,t,n,o),t.child)}function m0(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Hu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,ep(e,t,i,n,o)):(e=ra(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Io,r(a,n)&&e.ref===t.ref)return Yt(e,t,o)}return t.flags|=1,e=gr(i,n),e.ref=t.ref,e.return=t,t.child=e}function ep(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Io(i,n)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=n=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Yt(e,t,o)}return Wl(e,t,r,n,o)}function tp(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(xn,je),je|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(xn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,ie(xn,je),je|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,ie(xn,je),je|=n;return Ae(e,t,o,r),t.child}function rp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,r,n,o){var i=Ue(r)?Hr:Ie.current;return i=Mn(t,i),kn(t,o),r=Cu(e,t,r,n,i,o),n=$u(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(le&&n&&gu(t),t.flags|=1,Ae(e,t,r,o),t.child)}function g0(e,t,r,n,o){if(Ue(r)){var i=!0;pa(t)}else i=!1;if(kn(t,o),t.stateNode===null)Ji(e,t),Kd(t,r,n),Hl(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Ue(r)?Hr:Ie.current,u=Mn(t,u));var d=r.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||l!==u)&&u0(t,a,n,u),nr=!1;var m=t.memoizedState;a.state=m,xa(t,n,a,o),l=t.memoizedState,s!==n||m!==l||Ge.current||nr?(typeof d=="function"&&(Al(t,r,d,n),l=t.memoizedState),(s=nr||l0(t,r,s,n,m,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=u,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Ed(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:mt(t.type,s),a.props=u,c=t.pendingProps,m=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=Ue(r)?Hr:Ie.current,l=Mn(t,l));var h=r.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||m!==l)&&u0(t,a,n,l),nr=!1,m=t.memoizedState,a.state=m,xa(t,n,a,o);var x=t.memoizedState;s!==c||m!==x||Ge.current||nr?(typeof h=="function"&&(Al(t,r,h,n),x=t.memoizedState),(u=nr||l0(t,r,u,n,m,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=l,n=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return Dl(e,t,r,n,i,o)}function Dl(e,t,r,n,o,i){rp(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&e0(t,r,!1),Yt(e,t,i);n=t.stateNode,Uh.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=$n(t,e.child,null,i),t.child=$n(t,null,s,i)):Ae(e,t,s,i),t.memoizedState=n.state,o&&e0(t,r,!0),t.child}function np(e){var t=e.stateNode;t.pendingContext?Jf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jf(e,t.context,!1),ku(e,t.containerInfo)}function h0(e,t,r,n,o){return Cn(),bu(o),t.flags|=256,Ae(e,t,r,n),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t,r){var n=t.pendingProps,o=ce.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(ce,o&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=n.children,e=n.fallback,i?(n=t.mode,i=t.child,a={mode:"hidden",children:a},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Aa(a,n,0,null),e=Ar(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xl(r),t.memoizedState=Bl,e):Tu(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Yh(e,t,a,n,s,o,r);if(i){i=n.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:n.children};return(a&1)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=gr(o,l),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=gr(s,i):(i=Ar(i,a,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,a=e.child.memoizedState,a=a===null?Xl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=Bl,n}return i=e.child,e=i.sibling,n=gr(i,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Tu(e,t){return t=Aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,r,n){return n!==null&&bu(n),$n(t,e.child,null,r),e=Tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,r,n,o,i,a){if(r)return t.flags&256?(t.flags&=-257,n=nl(Error(M(422))),Gi(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Aa({mode:"visible",children:n.children},o,0,null),i=Ar(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,(t.mode&1)!==0&&$n(t,e.child,null,a),t.child.memoizedState=Xl(a),t.memoizedState=Bl,i);if((t.mode&1)===0)return Gi(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(M(419)),n=nl(i,n,void 0),Gi(e,t,a,n)}if(s=(a&e.childLanes)!==0,Xe||s){if(n=Me,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ut(e,o),xt(n,e,o,-1))}return Au(),n=nl(Error(M(421))),Gi(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=i2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=fr(o.nextSibling),qe=t,le=!0,ht=null,e!==null&&(ot[it++]=Wt,ot[it++]=Dt,ot[it++]=Nr,Wt=e.id,Dt=e.overflow,Nr=t),t=Tu(t,n.children),t.flags|=4096,t)}function b0(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Fl(e.return,t,r)}function ol(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function ip(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Ae(e,t,n.children,r),n=ce.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b0(e,r,t);else if(e.tag===19)b0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ie(ce,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&va(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ol(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&va(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ol(t,!0,r,null,i);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ji(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Dr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,r=gr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=gr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Vh(e,t,r){switch(t.tag){case 3:np(t),Cn();break;case 5:Td(t);break;case 1:Ue(t.type)&&pa(t);break;case 4:ku(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;ie(ha,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?op(e,t,r):(ie(ce,ce.current&1),e=Yt(e,t,r),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return ip(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(ce,ce.current),n)break;return null;case 22:case 23:return t.lanes=0,tp(e,t,r)}return Yt(e,t,r)}var ap,Gl,sp,lp;ap=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Gl=function(){};sp=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Ir(Rt.current);var i=null;switch(r){case"input":o=dl(e,o),n=dl(e,n),i=[];break;case"select":o=de({},o,{value:void 0}),n=de({},n,{value:void 0}),i=[];break;case"textarea":o=gl(e,o),n=gl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=fa)}bl(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($o.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var l=n[u];if(s=o?.[u],n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(i||(i=[]),i.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};lp=function(e,t,r,n){r!==n&&(t.flags|=4)};function fo(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function jh(e,t,r){var n=t.pendingProps;switch(hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Ue(t.type)&&da(),Pe(t),null;case 3:return n=t.stateNode,Rn(),se(Ge),se(Ie),_u(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ht!==null&&(Zl(ht),ht=null))),Gl(e,t),Pe(t),null;case 5:zu(t);var o=Ir(Wo.current);if(r=t.type,e!==null&&t.stateNode!=null)sp(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(M(166));return Pe(t),null}if(e=Ir(Rt.current),Bi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Ct]=t,n[Ho]=i,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(o=0;o<xo.length;o++)ae(xo[o],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":_f(n,i),ae("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},ae("invalid",n);break;case"textarea":Cf(n,i),ae("invalid",n)}bl(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&Di(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Di(n.textContent,s,e),o=["children",""+s]):$o.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",n)}switch(r){case"input":Ri(n),Mf(n,i,!0);break;case"textarea":Ri(n),$f(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=fa)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=F0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Ct]=t,e[Ho]=n,ap(e,t,!1,!1),t.stateNode=e;e:{switch(a=xl(r,n),r){case"dialog":ae("cancel",e),ae("close",e),o=n;break;case"iframe":case"object":case"embed":ae("load",e),o=n;break;case"video":case"audio":for(o=0;o<xo.length;o++)ae(xo[o],e);o=n;break;case"source":ae("error",e),o=n;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=n;break;case"details":ae("toggle",e),o=n;break;case"input":_f(e,n),o=dl(e,n),ae("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=de({},n,{value:void 0}),ae("invalid",e);break;case"textarea":Cf(e,n),o=gl(e,n),ae("invalid",e);break;default:o=n}bl(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?N0(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&A0(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ro(e,l):typeof l=="number"&&Ro(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($o.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ae("scroll",e):l!=null&&tu(e,i,l,a))}switch(r){case"input":Ri(e),Mf(e,n,!1);break;case"textarea":Ri(e),$f(e);break;case"option":n.value!=null&&e.setAttribute("value",""+hr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?vn(e,!!n.multiple,i,!1):n.defaultValue!=null&&vn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)lp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(M(166));if(r=Ir(Wo.current),Ir(Rt.current),Bi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ct]=t,(i=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:Di(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ct]=t,t.stateNode=n}return Pe(t),null;case 13:if(se(ce),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Md(),Cn(),t.flags|=98560,i=!1;else if(i=Bi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Ct]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),i=!1}else ht!==null&&(Zl(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ce.current&1)!==0?ze===0&&(ze=3):Au())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Rn(),Gl(e,t),e===null&&Fo(t.stateNode.containerInfo),Pe(t),null;case 10:return yu(t.type._context),Pe(t),null;case 17:return Ue(t.type)&&da(),Pe(t),null;case 19:if(se(ce),i=t.memoizedState,i===null)return Pe(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)fo(i,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=va(e),a!==null){for(t.flags|=128,fo(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>Tn&&(t.flags|=128,n=!0,fo(i,!1),t.lanes=4194304)}else{if(!n)if(e=va(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),fo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!le)return Pe(t),null}else 2*ye()-i.renderingStartTime>Tn&&r!==1073741824&&(t.flags|=128,n=!0,fo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,r=ce.current,ie(ce,n?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return Fu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(je&1073741824)!==0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function Qh(e,t){switch(hu(t),t.tag){case 1:return Ue(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),se(Ge),se(Ie),_u(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return Rn(),null;case 10:return yu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var Ui=!1,Oe=!1,qh=typeof WeakSet=="function"?WeakSet:Set,R=null;function bn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){he(e,t,n)}else r.current=null}function Ul(e,t,r){try{r()}catch(n){he(e,t,n)}}var x0=!1;function Kh(e,t){if($l=la,e=pd(),mu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,s=-1,l=-1,u=0,d=0,c=e,m=null;t:for(;;){for(var h;c!==r||o!==0&&c.nodeType!==3||(s=a+o),c!==i||n!==0&&c.nodeType!==3||(l=a+n),c.nodeType===3&&(a+=c.nodeValue.length),(h=c.firstChild)!==null;)m=c,c=h;for(;;){if(c===e)break t;if(m===r&&++u===o&&(s=a),m===i&&++d===n&&(l=a),(h=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=h}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rl={focusedElem:e,selectionRange:r},la=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,y=x.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:mt(t.type,b),y);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(v){he(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=x0,x0=!1,x}function _o(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ul(t,r,i)}o=o.next}while(o!==n)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Yl(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function up(e){var t=e.alternate;t!==null&&(e.alternate=null,up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Ho],delete t[Ll],delete t[Ph],delete t[Oh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cp(e){return e.tag===5||e.tag===3||e.tag===4}function v0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=fa));else if(n!==4&&(e=e.child,e!==null))for(Vl(e,t,r),e=e.sibling;e!==null;)Vl(e,t,r),e=e.sibling}function jl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(jl(e,t,r),e=e.sibling;e!==null;)jl(e,t,r),e=e.sibling}var Ce=null,gt=!1;function tr(e,t,r){for(r=r.child;r!==null;)fp(e,t,r),r=r.sibling}function fp(e,t,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ca,r)}catch{}switch(r.tag){case 5:Oe||bn(r,t);case 6:var n=Ce,o=gt;Ce=null,tr(e,t,r),Ce=n,gt=o,Ce!==null&&(gt?(e=Ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ce.removeChild(r.stateNode));break;case 18:Ce!==null&&(gt?(e=Ce,r=r.stateNode,e.nodeType===8?Ks(e.parentNode,r):e.nodeType===1&&Ks(e,r),Po(e)):Ks(Ce,r.stateNode));break;case 4:n=Ce,o=gt,Ce=r.stateNode.containerInfo,gt=!0,tr(e,t,r),Ce=n,gt=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ul(r,t,a),o=o.next}while(o!==n)}tr(e,t,r);break;case 1:if(!Oe&&(bn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){he(r,t,s)}tr(e,t,r);break;case 21:tr(e,t,r);break;case 22:r.mode&1?(Oe=(n=Oe)||r.memoizedState!==null,tr(e,t,r),Oe=n):tr(e,t,r);break;default:tr(e,t,r)}}function y0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new qh),t.forEach(function(n){var o=a2.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function pt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ce=s.stateNode,gt=!1;break e;case 3:Ce=s.stateNode.containerInfo,gt=!0;break e;case 4:Ce=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(Ce===null)throw Error(M(160));fp(i,a,o),Ce=null,gt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dp(t,e),t=t.sibling}function dp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),_t(e),n&4){try{_o(3,e,e.return),Ia(3,e)}catch(b){he(e,e.return,b)}try{_o(5,e,e.return)}catch(b){he(e,e.return,b)}}break;case 1:pt(t,e),_t(e),n&512&&r!==null&&bn(r,r.return);break;case 5:if(pt(t,e),_t(e),n&512&&r!==null&&bn(r,r.return),e.flags&32){var o=e.stateNode;try{Ro(o,"")}catch(b){he(e,e.return,b)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&O0(o,i),xl(s,a);var u=xl(s,i);for(a=0;a<l.length;a+=2){var d=l[a],c=l[a+1];d==="style"?N0(o,c):d==="dangerouslySetInnerHTML"?A0(o,c):d==="children"?Ro(o,c):tu(o,d,c,u)}switch(s){case"input":pl(o,i);break;case"textarea":I0(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?vn(o,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?vn(o,!!i.multiple,i.defaultValue,!0):vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ho]=i}catch(b){he(e,e.return,b)}}break;case 6:if(pt(t,e),_t(e),n&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){he(e,e.return,b)}}break;case 3:if(pt(t,e),_t(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Po(t.containerInfo)}catch(b){he(e,e.return,b)}break;case 4:pt(t,e),_t(e);break;case 13:pt(t,e),_t(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ou=ye())),n&4&&y0(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||d,pt(t,e),Oe=u):pt(t,e),_t(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(m=R,h=m.child,m.tag){case 0:case 11:case 14:case 15:_o(4,m,m.return);break;case 1:bn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){he(n,r,b)}}break;case 5:bn(m,m.return);break;case 22:if(m.memoizedState!==null){S0(c);continue}}h!==null?(h.return=m,R=h):S0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=H0("display",a))}catch(b){he(e,e.return,b)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(b){he(e,e.return,b)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:pt(t,e),_t(e),n&4&&y0(e);break;case 21:break;default:pt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(cp(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Ro(o,""),n.flags&=-33);var i=v0(e);jl(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,s=v0(e);Vl(e,s,a);break;default:throw Error(M(161))}}catch(l){he(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zh(e,t,r){R=e,pp(e,t,r)}function pp(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||Ui;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Oe;s=Ui;var u=Oe;if(Ui=a,(Oe=l)&&!u)for(R=o;R!==null;)a=R,l=a.child,a.tag===22&&a.memoizedState!==null?k0(o):l!==null?(l.return=a,R=l):k0(o);for(;i!==null;)R=i,pp(i,t,r),i=i.sibling;R=o,Ui=s,Oe=u}w0(e,t,r)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,R=i):w0(e,t,r)}}function w0(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Oe||Ia(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Oe)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:mt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&i0(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}i0(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Po(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Oe||t.flags&512&&Yl(t)}catch(m){he(t,t.return,m)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function S0(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function k0(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ia(4,t)}catch(l){he(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){he(t,o,l)}}var i=t.return;try{Yl(t)}catch(l){he(t,i,l)}break;case 5:var a=t.return;try{Yl(t)}catch(l){he(t,a,l)}}}catch(l){he(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Jh=Math.ceil,Sa=Vt.ReactCurrentDispatcher,Lu=Vt.ReactCurrentOwner,st=Vt.ReactCurrentBatchConfig,j=0,Me=null,Se=null,$e=0,je=0,xn=vr(0),ze=0,Go=null,Dr=0,Fa=0,Pu=0,Mo=null,Be=null,Ou=0,Tn=1/0,Ht=null,ka=!1,Ql=null,pr=null,Yi=!1,sr=null,za=0,Co=0,ql=null,ea=-1,ta=0;function He(){return(j&6)!==0?ye():ea!==-1?ea:ea=ye()}function mr(e){return(e.mode&1)===0?1:(j&2)!==0&&$e!==0?$e&-$e:Fh.transition!==null?(ta===0&&(ta=K0()),ta):(e=ee,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e)}function xt(e,t,r,n){if(50<Co)throw Co=0,ql=null,Error(M(185));Uo(e,r,n),((j&2)===0||e!==Me)&&(e===Me&&((j&2)===0&&(Fa|=r),ze===4&&ir(e,$e)),Ye(e,n),r===1&&j===0&&(t.mode&1)===0&&(Tn=ye()+500,La&&yr()))}function Ye(e,t){var r=e.callbackNode;Hg(e,t);var n=sa(e,e===Me?$e:0);if(n===0)r!==null&&Tf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Tf(r),t===1)e.tag===0?Ih(z0.bind(null,e)):kd(z0.bind(null,e)),Th(function(){(j&6)===0&&yr()}),r=null;else{switch(Z0(n)){case 1:r=au;break;case 4:r=Q0;break;case 16:r=aa;break;case 536870912:r=q0;break;default:r=aa}r=wp(r,mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function mp(e,t){if(ea=-1,ta=0,(j&6)!==0)throw Error(M(327));var r=e.callbackNode;if(zn()&&e.callbackNode!==r)return null;var n=sa(e,e===Me?$e:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=_a(e,n);else{t=n;var o=j;j|=2;var i=hp();(Me!==e||$e!==t)&&(Ht=null,Tn=ye()+500,Fr(e,t));do try{r2();break}catch(s){gp(e,s)}while(!0);vu(),Sa.current=i,j=o,Se!==null?t=0:(Me=null,$e=0,t=ze)}if(t!==0){if(t===2&&(o=kl(e),o!==0&&(n=o,t=Kl(e,o))),t===1)throw r=Go,Fr(e,0),ir(e,n),Ye(e,ye()),r;if(t===6)ir(e,n);else{if(o=e.current.alternate,(n&30)===0&&!e2(o)&&(t=_a(e,n),t===2&&(i=kl(e),i!==0&&(n=i,t=Kl(e,i))),t===1))throw r=Go,Fr(e,0),ir(e,n),Ye(e,ye()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(M(345));case 2:Lr(e,Be,Ht);break;case 3:if(ir(e,n),(n&130023424)===n&&(t=Ou+500-ye(),10<t)){if(sa(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Tl(Lr.bind(null,e,Be,Ht),t);break}Lr(e,Be,Ht);break;case 4:if(ir(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-bt(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=ye()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Jh(n/1960))-n,10<n){e.timeoutHandle=Tl(Lr.bind(null,e,Be,Ht),n);break}Lr(e,Be,Ht);break;case 5:Lr(e,Be,Ht);break;default:throw Error(M(329))}}}return Ye(e,ye()),e.callbackNode===r?mp.bind(null,e):null}function Kl(e,t){var r=Mo;return e.current.memoizedState.isDehydrated&&(Fr(e,t).flags|=256),e=_a(e,t),e!==2&&(t=Be,Be=r,t!==null&&Zl(t)),e}function Zl(e){Be===null?Be=e:Be.push.apply(Be,e)}function e2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ir(e,t){for(t&=~Pu,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-bt(t),n=1<<r;e[r]=-1,t&=~n}}function z0(e){if((j&6)!==0)throw Error(M(327));zn();var t=sa(e,0);if((t&1)===0)return Ye(e,ye()),null;var r=_a(e,t);if(e.tag!==0&&r===2){var n=kl(e);n!==0&&(t=n,r=Kl(e,n))}if(r===1)throw r=Go,Fr(e,0),ir(e,t),Ye(e,ye()),r;if(r===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lr(e,Be,Ht),Ye(e,ye()),null}function Iu(e,t){var r=j;j|=1;try{return e(t)}finally{j=r,j===0&&(Tn=ye()+500,La&&yr())}}function Br(e){sr!==null&&sr.tag===0&&(j&6)===0&&zn();var t=j;j|=1;var r=st.transition,n=ee;try{if(st.transition=null,ee=1,e)return e()}finally{ee=n,st.transition=r,j=t,(j&6)===0&&yr()}}function Fu(){je=xn.current,se(xn)}function Fr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Eh(r)),Se!==null)for(r=Se.return;r!==null;){var n=r;switch(hu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&da();break;case 3:Rn(),se(Ge),se(Ie),_u();break;case 5:zu(n);break;case 4:Rn();break;case 13:se(ce);break;case 19:se(ce);break;case 10:yu(n.type._context);break;case 22:case 23:Fu()}r=r.return}if(Me=e,Se=e=gr(e.current,null),$e=je=t,ze=0,Go=null,Pu=Fa=Dr=0,Be=Mo=null,Or!==null){for(t=0;t<Or.length;t++)if(r=Or[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}Or=null}return e}function gp(e,t){do{var r=Se;try{if(vu(),Ki.current=wa,ya){for(var n=fe.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}ya=!1}if(Wr=0,_e=ke=fe=null,zo=!1,Do=0,Lu.current=null,r===null||r.return===null){ze=1,Go=t,Se=null;break}e:{var i=e,a=r.return,s=r,l=t;if(t=$e,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=f0(a);if(h!==null){h.flags&=-257,d0(h,a,s,i,t),h.mode&1&&c0(i,u,t),t=h,l=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(l),t.updateQueue=b}else x.add(l);break e}else{if((t&1)===0){c0(i,u,t),Au();break e}l=Error(M(426))}}else if(le&&s.mode&1){var y=f0(a);if(y!==null){(y.flags&65536)===0&&(y.flags|=256),d0(y,a,s,i,t),bu(En(l,s));break e}}i=l=En(l,s),ze!==4&&(ze=2),Mo===null?Mo=[i]:Mo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Zd(i,l,t);o0(i,f);break e;case 1:s=l;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(pr===null||!pr.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Jd(i,s,t);o0(i,v);break e}}i=i.return}while(i!==null)}xp(r)}catch(w){t=w,Se===r&&r!==null&&(Se=r=r.return);continue}break}while(!0)}function hp(){var e=Sa.current;return Sa.current=wa,e===null?wa:e}function Au(){(ze===0||ze===3||ze===2)&&(ze=4),Me===null||(Dr&268435455)===0&&(Fa&268435455)===0||ir(Me,$e)}function _a(e,t){var r=j;j|=2;var n=hp();(Me!==e||$e!==t)&&(Ht=null,Fr(e,t));do try{t2();break}catch(o){gp(e,o)}while(!0);if(vu(),j=r,Sa.current=n,Se!==null)throw Error(M(261));return Me=null,$e=0,ze}function t2(){for(;Se!==null;)bp(Se)}function r2(){for(;Se!==null&&!Rg();)bp(Se)}function bp(e){var t=yp(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?xp(e):Se=t,Lu.current=null}function xp(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=jh(r,t,je),r!==null){Se=r;return}}else{if(r=Qh(r,t),r!==null){r.flags&=32767,Se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);ze===0&&(ze=5)}function Lr(e,t,r){var n=ee,o=st.transition;try{st.transition=null,ee=1,n2(e,t,r,n)}finally{st.transition=o,ee=n}return null}function n2(e,t,r,n){do zn();while(sr!==null);if((j&6)!==0)throw Error(M(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Ng(e,i),e===Me&&(Se=Me=null,$e=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Yi||(Yi=!0,wp(aa,function(){return zn(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=st.transition,st.transition=null;var a=ee;ee=1;var s=j;j|=4,Lu.current=null,Kh(e,r),dp(r,e),_h(Rl),la=!!$l,Rl=$l=null,e.current=r,Zh(r,e,o),Eg(),j=s,ee=a,st.transition=i}else e.current=r;if(Yi&&(Yi=!1,sr=e,za=o),i=e.pendingLanes,i===0&&(pr=null),Pg(r.stateNode,n),Ye(e,ye()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ka)throw ka=!1,e=Ql,Ql=null,e;return(za&1)!==0&&e.tag!==0&&zn(),i=e.pendingLanes,(i&1)!==0?e===ql?Co++:(Co=0,ql=e):Co=0,yr(),null}function zn(){if(sr!==null){var e=Z0(za),t=st.transition,r=ee;try{if(st.transition=null,ee=16>e?16:e,sr===null)var n=!1;else{if(e=sr,sr=null,za=0,(j&6)!==0)throw Error(M(331));var o=j;for(j|=4,R=e.current;R!==null;){var i=R,a=i.child;if((R.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:_o(8,d,i)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var m=d.sibling,h=d.return;if(up(d),d===u){R=null;break}if(m!==null){m.return=h,R=m;break}R=h}}}var x=i.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var y=b.sibling;b.sibling=null,b=y}while(b!==null)}}R=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,R=a;else e:for(;R!==null;){if(i=R,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:_o(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var p=e.current;for(R=p;R!==null;){a=R;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,R=g;else e:for(a=p;R!==null;){if(s=R,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ia(9,s)}}catch(w){he(s,s.return,w)}if(s===a){R=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,R=v;break e}R=s.return}}if(j=o,yr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ca,e)}catch{}n=!0}return n}finally{ee=r,st.transition=t}}return!1}function _0(e,t,r){t=En(r,t),t=Zd(e,t,1),e=dr(e,t,1),t=He(),e!==null&&(Uo(e,1,t),Ye(e,t))}function he(e,t,r){if(e.tag===3)_0(e,e,r);else for(;t!==null;){if(t.tag===3){_0(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pr===null||!pr.has(n))){e=En(r,e),e=Jd(t,e,1),t=dr(t,e,1),e=He(),t!==null&&(Uo(t,1,e),Ye(t,e));break}}t=t.return}}function o2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&r,Me===e&&($e&r)===r&&(ze===4||ze===3&&($e&130023424)===$e&&500>ye()-Ou?Fr(e,0):Pu|=r),Ye(e,t)}function vp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Li,Li<<=1,(Li&130023424)===0&&(Li=4194304)));var r=He();e=Ut(e,t),e!==null&&(Uo(e,t,r),Ye(e,r))}function i2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),vp(e,r)}function a2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(t),vp(e,r)}var yp;yp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Xe=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Xe=!1,Vh(e,t,r);Xe=(e.flags&131072)!==0}else Xe=!1,le&&(t.flags&1048576)!==0&&zd(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ji(e,t),e=t.pendingProps;var o=Mn(t,Ie.current);kn(t,r),o=Cu(null,t,n,e,o,r);var i=$u();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(n)?(i=!0,pa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Su(t),o.updater=Oa,t.stateNode=o,o._reactInternals=t,Hl(t,n,e,r),t=Dl(null,t,n,!0,i,r)):(t.tag=0,le&&i&&gu(t),Ae(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ji(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=l2(n),e=mt(n,e),o){case 0:t=Wl(null,t,n,e,r);break e;case 1:t=g0(null,t,n,e,r);break e;case 11:t=p0(null,t,n,e,r);break e;case 14:t=m0(null,t,n,mt(n.type,e),r);break e}throw Error(M(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:mt(n,o),Wl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:mt(n,o),g0(e,t,n,o,r);case 3:e:{if(np(t),e===null)throw Error(M(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Ed(e,t),xa(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=En(Error(M(423)),t),t=h0(e,t,n,r,o);break e}else if(n!==o){o=En(Error(M(424)),t),t=h0(e,t,n,r,o);break e}else for(Qe=fr(t.stateNode.containerInfo.firstChild),qe=t,le=!0,ht=null,r=$d(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Cn(),n===o){t=Yt(e,t,r);break e}Ae(e,t,n,r)}t=t.child}return t;case 5:return Td(t),e===null&&Il(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,El(n,o)?a=null:i!==null&&El(n,i)&&(t.flags|=32),rp(e,t),Ae(e,t,a,r),t.child;case 6:return e===null&&Il(t),null;case 13:return op(e,t,r);case 4:return ku(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=$n(t,null,n,r):Ae(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:mt(n,o),p0(e,t,n,o,r);case 7:return Ae(e,t,t.pendingProps,r),t.child;case 8:return Ae(e,t,t.pendingProps.children,r),t.child;case 12:return Ae(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ie(ha,n._currentValue),n._currentValue=a,i!==null)if(vt(i.value,a)){if(i.children===o.children&&!Ge.current){t=Yt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Bt(-1,r&-r),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Fl(i.return,r,t),s.lanes|=r;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(M(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Fl(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ae(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,kn(t,r),o=lt(o),n=n(o),t.flags|=1,Ae(e,t,n,r),t.child;case 14:return n=t.type,o=mt(n,t.pendingProps),o=mt(n.type,o),m0(e,t,n,o,r);case 15:return ep(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:mt(n,o),Ji(e,t),t.tag=1,Ue(n)?(e=!0,pa(t)):e=!1,kn(t,r),Kd(t,n,o),Hl(t,n,o,r),Dl(null,t,n,!0,e,r);case 19:return ip(e,t,r);case 22:return tp(e,t,r)}throw Error(M(156,t.tag))};function wp(e,t){return j0(e,t)}function s2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,r,n){return new s2(e,t,r,n)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l2(e){if(typeof e=="function")return Hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nu)return 11;if(e===ou)return 14}return 2}function gr(e,t){var r=e.alternate;return r===null?(r=at(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ra(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")Hu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ln:return Ar(r.children,o,i,t);case ru:a=8,o|=8;break;case ll:return e=at(12,r,t,o|2),e.elementType=ll,e.lanes=i,e;case ul:return e=at(13,r,t,o),e.elementType=ul,e.lanes=i,e;case cl:return e=at(19,r,t,o),e.elementType=cl,e.lanes=i,e;case T0:return Aa(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R0:a=10;break e;case E0:a=9;break e;case nu:a=11;break e;case ou:a=14;break e;case rr:a=16,n=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=at(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Ar(e,t,r,n){return e=at(7,e,n,t),e.lanes=r,e}function Aa(e,t,r,n){return e=at(22,e,n,t),e.elementType=T0,e.lanes=r,e.stateNode={isHidden:!1},e}function il(e,t,r){return e=at(6,e,null,t),e.lanes=r,e}function al(e,t,r){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u2(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nu(e,t,r,n,o,i,a,s,l){return e=new u2(e,t,r,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(i),e}function c2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Sp(e){if(!e)return br;e=e._reactInternals;e:{if(Gr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var r=e.type;if(Ue(r))return Sd(e,r,t)}return t}function kp(e,t,r,n,o,i,a,s,l){return e=Nu(r,n,!0,e,o,i,a,s,l),e.context=Sp(null),r=e.current,n=He(),o=mr(r),i=Bt(n,o),i.callback=t??null,dr(r,i,o),e.current.lanes=o,Uo(e,o,n),Ye(e,n),e}function Ha(e,t,r,n){var o=t.current,i=He(),a=mr(o);return r=Sp(r),t.context===null?t.context=r:t.pendingContext=r,t=Bt(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=dr(o,t,a),e!==null&&(xt(e,o,a,i),qi(e,o,a)),a}function Ma(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function M0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Wu(e,t){M0(e,t),(e=e.alternate)&&M0(e,t)}function f2(){return null}var zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Du(e){this._internalRoot=e}Na.prototype.render=Du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ha(e,t,null,null)};Na.prototype.unmount=Du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Br(function(){Ha(null,e,null,null)}),t[Gt]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var t=td();e={blockedOn:null,target:e,priority:t};for(var r=0;r<or.length&&t!==0&&t<or[r].priority;r++);or.splice(r,0,e),r===0&&nd(e)}};function Bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function C0(){}function d2(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Ma(a);i.call(u)}}var a=kp(t,n,e,0,null,!1,!1,"",C0);return e._reactRootContainer=a,e[Gt]=a.current,Fo(e.nodeType===8?e.parentNode:e),Br(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var u=Ma(l);s.call(u)}}var l=Nu(e,0,!1,null,null,!1,!1,"",C0);return e._reactRootContainer=l,e[Gt]=l.current,Fo(e.nodeType===8?e.parentNode:e),Br(function(){Ha(t,l,r,n)}),l}function Da(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Ma(a);s.call(l)}}Ha(t,a,e,o)}else a=d2(r,t,e,o,n);return Ma(a)}J0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=bo(t.pendingLanes);r!==0&&(su(t,r|1),Ye(t,ye()),(j&6)===0&&(Tn=ye()+500,yr()))}break;case 13:Br(function(){var n=Ut(e,1);if(n!==null){var o=He();xt(n,e,1,o)}}),Wu(e,1)}};lu=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var r=He();xt(t,e,134217728,r)}Wu(e,134217728)}};ed=function(e){if(e.tag===13){var t=mr(e),r=Ut(e,t);if(r!==null){var n=He();xt(r,e,t,n)}Wu(e,t)}};td=function(){return ee};rd=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};yl=function(e,t,r){switch(t){case"input":if(pl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ta(n);if(!o)throw Error(M(90));P0(n),pl(n,o)}}}break;case"textarea":I0(e,r);break;case"select":t=r.value,t!=null&&vn(e,!!r.multiple,t,!1)}};B0=Iu;X0=Br;var p2={usingClientEntryPoint:!1,Events:[Vo,dn,Ta,W0,D0,Iu]},po={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m2={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Y0(e),e===null?null:e.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||f2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(mo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!mo.isDisabled&&mo.supportsFiber))try{Ca=mo.inject(m2),$t=mo}catch{}var mo;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p2;Je.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(t))throw Error(M(200));return c2(e,t,null,r)};Je.createRoot=function(e,t){if(!Bu(e))throw Error(M(299));var r=!1,n="",o=zp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nu(e,1,!1,null,null,r,!1,n,o),e[Gt]=t.current,Fo(e.nodeType===8?e.parentNode:e),new Du(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Y0(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Br(e)};Je.hydrate=function(e,t,r){if(!Wa(t))throw Error(M(200));return Da(null,e,t,!0,r)};Je.hydrateRoot=function(e,t,r){if(!Bu(e))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=zp;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=kp(t,null,e,1,r??null,o,!1,i,a),e[Gt]=t.current,Fo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Na(t)};Je.render=function(e,t,r){if(!Wa(t))throw Error(M(200));return Da(null,e,t,!1,r)};Je.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(M(40));return e._reactRootContainer?(Br(function(){Da(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Je.unstable_batchedUpdates=Iu;Je.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Wa(r))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Da(e,t,r,!1,n)};Je.version="18.3.1-next-f1338f8080-20240426"});var Ba=At((gx,Cp)=>{"use strict";function Mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp)}catch(e){console.error(e)}}Mp(),Cp.exports=_p()});var Rp=At(Xu=>{"use strict";var $p=Ba();Xu.createRoot=$p.createRoot,Xu.hydrateRoot=$p.hydrateRoot;var hx});var _1=At(xs=>{"use strict";var Cb=nn(),$b=Symbol.for("react.element"),Rb=Symbol.for("react.fragment"),Eb=Object.prototype.hasOwnProperty,Tb=Cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lb={key:!0,ref:!0,__self:!0,__source:!0};function z1(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Eb.call(t,n)&&!Lb.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:$b,type:e,key:i,ref:a,props:o,_owner:Tb.current}}xs.Fragment=Rb;xs.jsx=z1;xs.jsxs=z1});var Zr=At((Av,M1)=>{"use strict";M1.exports=_1()});var zs=rt(nn(),1),X1=rt(Rp(),1),Gc=rt(Ba(),1);var q=rt(nn(),1),$1=rt(Ba(),1);var Ep=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,Tp=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`;var Lp=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,Pp=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;var Gu=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${Ep}
${Tp}
${Pp}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${Lp}

  fragColor = vec4(color, opacity);
}
`;var Xa=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,Ga=Gu;function On(e,t,r){let n=e.createShader(t);if(!n)throw new Error("metal-fx: gl.createShader returned null");if(e.shaderSource(n,r),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){let o=e.getShaderInfoLog(n);throw e.deleteShader(n),new Error(`metal-fx: shader compile failed: ${o??"(no info log)"}`)}return n}function Ua(e,t,r){let n=e.createProgram();if(!n)throw new Error("metal-fx: gl.createProgram returned null");if(e.attachShader(n,t),e.attachShader(n,r),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){let o=e.getProgramInfoLog(n);throw e.deleteProgram(n),new Error(`metal-fx: program link failed: ${o??"(no info log)"}`)}return n}function Ur(e){let t=e.replace("#","");(t.length===3||t.length===4)&&(t=t.split("").map(n=>n+n).join(""));let r=t.length>=8?parseInt(t.slice(6,8),16)/255:1;return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255,r]}function Ya(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),o=Math.min(e,t,r),i=n-o,a=0,s=n===0?0:i/n;return i!==0&&(n===e?a=((t-r)/i+6)%6:n===t?a=(r-e)/i+2:a=(e-t)/i+4,a/=6),[a,s,n]}function Va(e,t,r){let n=Math.floor(e*6),o=e*6-n,i=r*(1-t),a=r*(1-o*t),s=r*(1-(1-o)*t),l=0,u=0,d=0;switch(n%6){case 0:l=r,u=s,d=i;break;case 1:l=a,u=r,d=i;break;case 2:l=i,u=r,d=s;break;case 3:l=i,u=a,d=r;break;case 4:l=s,u=i,d=r;break;case 5:l=r,u=i,d=a;break}return[Math.round(l*255),Math.round(u*255),Math.round(d*255)]}var g2=0;var h2=1;var In={colorBack:"#00000000",speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:g2,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:h2},b2={name:"chromatic",modes:{dark:{...In,colorTint:"#88ccff2e",shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...In,colorTint:"#66b0ff99",shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},x2={name:"silver",modes:{dark:{...In,colorTint:"#ffffff66",shaderOpacity:.88},light:{...In,colorTint:"#ffffff40",shaderOpacity:1}}},v2={name:"gold",modes:{dark:{...In,colorTint:"#ffcc55cc",speed:.85,shaderOpacity:.92},light:{...In,colorTint:"#f7d488aa",shaderOpacity:1}}},ja={chromatic:b2,silver:x2,gold:v2};var An=140,Hn=40,Vu=1.6,ju=1.3,S=null,Fn=null;function Qu(){if(Fn!==null)return Fn;if(typeof document>"u")return Fn=!1;try{let t=document.createElement("canvas").getContext("webgl2");Fn=!!t,t?.getExtension("WEBGL_lose_context")?.loseContext()}catch{Fn=!1}return Fn}var Ip=null;function qu(e){Ip=e}var y2=["u_resolution","u_time","u_pixelRatio","u_colorBack","u_colorTint","u_repetition","u_softness","u_shiftRed","u_shiftBlue","u_distortion","u_contour","u_angle","u_shape","u_isImage","u_image","u_originX","u_originY","u_worldWidth","u_worldHeight","u_fit","u_scale","u_rotation","u_offsetX","u_offsetY","u_imageAspectRatio"];function Op(e){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);let t=On(e,e.VERTEX_SHADER,Xa),r=On(e,e.FRAGMENT_SHADER,Ga),n=Ua(e,t,r);e.useProgram(n);let o=e.createBuffer();if(!o)throw new Error("metal-fx: gl.createBuffer returned null");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let i=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let a={};for(let l of y2)a[l]=e.getUniformLocation(n,l);let s=e.createTexture();return s&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a.u_image&&e.uniform1i(a.u_image,0)),{program:n,buffer:o,uniforms:a,dummyTexture:s}}var Uu=null;function Ku(){if(S)return S;let e=Math.min(2,typeof window<"u"&&window.devicePixelRatio||1),t=Math.round(96*e),r=typeof OffscreenCanvas<"u",n,o;if(r)n=new OffscreenCanvas(t,t),o=n.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});else{let c=document.createElement("canvas");c.width=t,c.height=t,o=c.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power",preserveDrawingBuffer:!0}),n=c}if(!o)throw new Error("metal-fx: WebGL2 not supported");let{program:i,buffer:a,uniforms:s,dummyTexture:l}=Op(o),u=c=>{c.preventDefault(),S&&(S.contextLost=!0)},d=()=>{if(!S)return;let c=Op(S.gl);S.program=c.program,S.buffer=c.buffer,S.uniforms=c.uniforms,S.dummyTexture=c.dummyTexture,S.presetDirty=!0,S.contextLost=!1,Ip?.()};return n.addEventListener("webglcontextlost",u,!1),n.addEventListener("webglcontextrestored",d,!1),Uu=()=>{n.removeEventListener("webglcontextlost",u,!1),n.removeEventListener("webglcontextrestored",d,!1)},S={glCanvas:n,gl:o,program:i,buffer:a,uniforms:s,dummyTexture:l,preset:ja.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:r,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:e,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(t*t*4),glowPixelsW:t,glowPixelsH:t},S}function Zu(){if(!S)return;let{gl:e,program:t,buffer:r,frameBitmap:n,dummyTexture:o}=S;Uu?.(),Uu=null;try{n?.close(),e.deleteBuffer(r),e.deleteProgram(t),o&&e.deleteTexture(o),e.getExtension("WEBGL_lose_context")?.loseContext()}catch{}S=null}var w2=Xa.replace("layout(location = 0)",`uniform vec2 u_ctCrop;
out vec2 v_ctLocal;
layout(location = 0)`).replace("vec2 uv = gl_Position.xy * .5;",`v_ctLocal=a_position.xy*.5+.5;
  vec2 uv=a_position.xy*.5*u_ctCrop;`),S2=Ga.replace(/void\s+main\s*\(\s*\)/,"void ctMaterial()")+`
in vec2 v_ctLocal;
uniform vec2 u_ctSize;
uniform float u_ctRadius,u_ctRing,u_ctAlpha,u_ctDpr;
float ctRoundBox(vec2 p,vec2 halfSize,float radius){
  vec2 q=abs(p)-halfSize+radius;
  return length(max(q,0.))+min(max(q.x,q.y),0.)-radius;
}
void main(){
  vec2 p=(v_ctLocal-.5)*u_ctSize;
  float aa=.6/max(1.,u_ctDpr);
  float outer=ctRoundBox(p,u_ctSize*.5,u_ctRadius);
  float inner=ctRoundBox(p,u_ctSize*.5-u_ctRing,max(0.,u_ctRadius-u_ctRing));
  float mask=(1.-smoothstep(-aa,aa,outer))*smoothstep(-aa,aa,inner);
  ctMaterial();
  fragColor*=mask*u_ctAlpha;
}`,Et=new Map,qa="";function k2(e,t,r,n,o){let i=[],s=1/o;r=Math.max(0,Math.min(r,e/2,t/2));let l=(u,d,c)=>{let m=Math.max(0,r-c),h=u===0||u===1?e-c-m:c+m,x=u===0||u===3?c+m:t-c-m;i.push((h+m*Math.cos(d))/e*2-1,(x+m*Math.sin(d))/t*2-1)};for(let u=0;u<4;u++)for(let d=0;d<=16;d++){let c=(u-1+d/16)*Math.PI/2;l(u,c,-s),l(u,c,n+s)}return i.push(...i.slice(0,4)),new Float32Array(i)}function Fp(e){let t=On(e,e.VERTEX_SHADER,w2),r=On(e,e.FRAGMENT_SHADER,S2),n=Ua(e,t,r);e.deleteShader(t),e.deleteShader(r),e.useProgram(n);let o=e.createBuffer();if(!o)throw Error("Direct ring buffer unavailable");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let i=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let a={};for(let l=0,u=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);l<u;l++){let d=e.getActiveUniform(n,l).name;a[d]=e.getUniformLocation(n,d)}let s=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.uniform1i(a.u_image,0),e.uniform1i(a.u_isImage,0),e.disable(e.BLEND),e.clearColor(0,0,0,0),{program:n,buffer:o,texture:s,uniforms:a}}function Ap(e){if(e.mask||e.deform||Et.has(e))return;let t=document.createElement("canvas");t.className="ctmb-metal-fx-canvas",t.dataset.ctmbDirect="",t.setAttribute("aria-hidden","true"),t.style.cssText=e.canvas.style.cssText;let r=null;try{if(r=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"}),!r)throw Error("Direct WebGL2 unavailable");let n=Fp(r),o={canvas:t,gl:r,...n,preset:null,lost:!1,detach:()=>{},sourceOpacity:e.canvas.style.opacity,signature:"",vertices:0,time:0},i=s=>{s.preventDefault(),o.lost=!0,t.hidden=!0,e.canvas.style.opacity=o.sourceOpacity},a=()=>{try{let s=o.preset;Object.assign(o,Fp(o.gl)),o.lost=!1,o.preset=null,o.signature="",Qo(e),s&&qo(e,s,o.time),t.hidden=!1}catch(s){o.lost=!0,qa=String(s)}};t.addEventListener("webglcontextlost",i),t.addEventListener("webglcontextrestored",a),o.detach=()=>{t.removeEventListener("webglcontextlost",i),t.removeEventListener("webglcontextrestored",a)},e.canvas.after(t),Et.set(e,o),Qo(e)}catch(n){qa=String(n),r?.getExtension("WEBGL_lose_context")?.loseContext(),t.remove()}}function Hp(e){return!!Et.get(e)&&!Et.get(e).lost}function Qo(e){let t=Et.get(e);if(!t||t.lost)return;let r=Math.min(2,window.devicePixelRatio||1),n=e.cssWidth,o=e.cssHeight,i=[n,o,r,e.cornerRadius,e.ringCssPx,e.shaderScale,e.opacityMul].join(",");if(i===t.signature)return;t.signature=i,t.canvas.width=Math.max(1,Math.round(n*r)),t.canvas.height=Math.max(1,Math.round(o*r)),t.gl.viewport(0,0,t.canvas.width,t.canvas.height);let{gl:a,uniforms:s}=t,l=k2(n,o,e.cornerRadius,e.ringCssPx,r);t.vertices=l.length/2,a.bindBuffer(a.ARRAY_BUFFER,t.buffer),a.bufferData(a.ARRAY_BUFFER,l,a.STATIC_DRAW),a.uniform2f(s.u_ctCrop,Math.min(1,n/(An*e.shaderScale)),Math.min(1,o/(Hn*e.shaderScale))),a.uniform2f(s.u_ctSize,n,o),a.uniform1f(s.u_ctRadius,e.cornerRadius),a.uniform1f(s.u_ctRing,e.ringCssPx),a.uniform1f(s.u_ctDpr,r),a.uniform2f(s.u_resolution,96*r,96*r),a.uniform1f(s.u_pixelRatio,r),t.preset=null}function qo(e,t,r){let n=Et.get(e);if(!n||n.lost)return!1;n.time=r;let{gl:o,uniforms:i}=n;if(n.preset!==t){n.preset=t,o.uniform4fv(i.u_colorBack,Ur(t.colorBack)),o.uniform4fv(i.u_colorTint,Ur(t.colorTint));for(let a of["repetition","softness","shiftRed","shiftBlue","distortion","contour","angle","shape","originX","originY","worldWidth","worldHeight","fit","scale","rotation","offsetX","offsetY"])o.uniform1f(i[`u_${a}`],t[a]);o.uniform1f(i.u_imageAspectRatio,1),o.uniform1f(i.u_ctAlpha,e.opacityMul*t.shaderOpacity)}return o.uniform1f(i.u_time,r*t.speed),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_STRIP,0,n.vertices),e.canvas.style.opacity!=="0"&&(e.canvas.style.opacity="0"),!0}function Ju(e){let t=Et.get(e);t&&(Et.delete(e),t.detach(),e.canvas.style.opacity=t.sourceOpacity,t.canvas.remove(),t.gl.deleteBuffer(t.buffer),t.gl.deleteTexture(t.texture),t.gl.deleteProgram(t.program),t.gl.getExtension("WEBGL_lose_context")?.loseContext())}function Np(){for(let e of Et.keys())Ju(e);qa=""}function Wp(){return{directSurfaces:Et.size,directError:qa}}var Ka=0,be=null;function Ko(){be&&(be.fence&&be.gl.deleteSync(be.fence),be.gl.deleteBuffer(be.buffer)),be=null,Ka=0}function Dp(){if(!S||S.contextLost)return;let{gl:e,glCanvas:t}=S,r=t.width,n=t.height;if(be&&be.gl!==e&&Ko(),!be){let i=e.createBuffer();if(!i)return;be={gl:e,buffer:i,fence:null,size:0}}if(be.fence){let i=e.clientWaitSync(be.fence,0,0);if(i===e.TIMEOUT_EXPIRED)return;e.deleteSync(be.fence),be.fence=null,i!==e.WAIT_FAILED&&be.size===r*n*4&&(e.bindBuffer(e.PIXEL_PACK_BUFFER,be.buffer),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,S.glowPixels),e.bindBuffer(e.PIXEL_PACK_BUFFER,null))}let o=performance.now();Ka&&o-Ka<1500||(Ka=o,(S.glowPixelsW!==r||S.glowPixelsH!==n)&&(S.glowPixelsW=r,S.glowPixelsH=n,S.glowPixels=new Uint8Array(r*n*4)),e.bindBuffer(e.PIXEL_PACK_BUFFER,be.buffer),be.size!==r*n*4&&(be.size=r*n*4,e.bufferData(e.PIXEL_PACK_BUFFER,be.size,e.STREAM_READ)),e.readPixels(0,0,r,n,e.RGBA,e.UNSIGNED_BYTE,0),be.fence=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.flush())}var Nn={bx:0,by:0};function Za(e,t,r){if(!S)return Nn.bx=0,Nn.by=0,Nn;let{glCanvas:n}=S,o=n.width,i=n.height,a=e.dpr,s=e.cssWidth*a,l=e.cssHeight*a,u=An*a,d=Hn*a,c=s*(o/u)/e.shaderScale,m=l*(i/d)/e.shaderScale;c>o&&(c=o),m>i&&(m=i);let h=(o-c)/2,x=(i-m)/2,b=h+t/e.cssWidth*c,y=x+r/e.cssHeight*m;return Nn.bx=Math.round(b),Nn.by=Math.round(i-1-y),Nn}var yt={r:0,g:0,b:0,lum:0,count:0};function Bp(e,t,r,n,o,i){let a=Math.max(1,i|0),s=Math.max(0,n-a),l=Math.min(t,n+a+1),u=Math.max(0,o-a),d=Math.min(r,o+a+1);yt.r=0,yt.g=0,yt.b=0,yt.lum=0,yt.count=0;for(let c=u;c<d;c++){let m=c*t;for(let h=s;h<l;h++){let x=(m+h)*4;yt.r+=e[x],yt.g+=e[x+1],yt.b+=e[x+2],yt.lum+=(.2126*e[x]+.7152*e[x+1]+.0722*e[x+2])/255,yt.count++}}return yt}var pe={r:255,g:255,b:255};function Zo(e,t,r,n){if(!S)return 0;let o=Za(e,t,r),i=Bp(S.glowPixels,S.glowPixelsW,S.glowPixelsH,o.bx,o.by,n);return i.count>0?i.lum/i.count:0}function Ja(e,t,r,n){if(!S)return pe.r=255,pe.g=255,pe.b=255,pe;let o=Za(e,t,r),i=Bp(S.glowPixels,S.glowPixelsW,S.glowPixelsH,o.bx,o.by,n);return i.count===0?(pe.r=255,pe.g=255,pe.b=255,pe):(pe.r=i.r/i.count,pe.g=i.g/i.count,pe.b=i.b/i.count,pe)}function Xp(e,t,r,n){if(!S)return pe.r=255,pe.g=255,pe.b=255,pe;let o=Za(e,t,r),{glowPixels:i,glowPixelsW:a,glowPixelsH:s}=S,l=Math.max(1,n|0),u=Math.max(0,o.bx-l),d=Math.min(a,o.bx+l+1),c=Math.max(0,o.by-l),m=Math.min(s,o.by+l+1),h=-1;pe.r=255,pe.g=255,pe.b=255;for(let x=c;x<m;x++){let b=x*a;for(let y=u;y<d;y++){let f=(b+y)*4,p=i[f],g=i[f+1],v=i[f+2],w=Math.max(p,g,v),k=Math.min(p,g,v),_=(w>0?(w-k)/w:0)*(.35+.65*(w/255));_>h&&(h=_,pe.r=p,pe.g=g,pe.b=v)}}return pe}var wt={r:255,g:255,b:255,lum:0};function Gp(e,t,r,n){if(wt.r=255,wt.g=255,wt.b=255,wt.lum=0,!S)return wt;let o=Za(e,t,r),{glowPixels:i,glowPixelsW:a,glowPixelsH:s}=S,l=Math.max(1,n|0),u=Math.max(0,o.bx-l),d=Math.min(a,o.bx+l+1),c=Math.max(0,o.by-l),m=Math.min(s,o.by+l+1);for(let h=c;h<m;h++){let x=h*a;for(let b=u;b<d;b++){let y=(x+b)*4,f=(.2126*i[y]+.7152*i[y+1]+.0722*i[y+2])/255;f>wt.lum&&(wt.lum=f,wt.r=i[y],wt.g=i[y+1],wt.b=i[y+2])}}return wt}var ec={x:0,y:0};function jt(e=512){return{xy:new Float32Array(e*2),n:0}}function Tt(e,t,r,n,o,i,a=jt()){o=Math.max(0,Math.min(o,Math.min(r,n)/2));let s=60+Math.ceil(2*(r+n)/1.5)+8;a.xy.length<s*2&&(a.xy=new Float32Array(s*2));let l=a.xy,u=0,d=(h,x)=>{i?(i(h,x,ec),l[u*2]=ec.x,l[u*2+1]=ec.y):(l[u*2]=h,l[u*2+1]=x),u++},c=(h,x,b,y)=>{let f=Math.hypot(b-h,y-x),p=Math.max(1,Math.ceil(f/1.5));for(let g=0;g<p;g++){let v=g/p;d(h+(b-h)*v,x+(y-x)*v)}},m=(h,x,b,y)=>{for(let f=0;f<=14;f++){let p=b+(y-b)*(f/14);d(h+o*Math.cos(p),x+o*Math.sin(p))}};return c(e+o,t,e+r-o,t),m(e+r-o,t+o,-Math.PI/2,0),c(e+r,t+o,e+r,t+n-o),m(e+r-o,t+n-o,0,Math.PI/2),c(e+r-o,t+n,e+o,t+n),m(e+o,t+n-o,Math.PI/2,Math.PI),c(e,t+n-o,e,t+o),m(e+o,t+o,Math.PI,1.5*Math.PI),a.n=u,a}var es=!1;function M2(){Ko(),S&&S.instances.size>0&&S.pausedAtMs===null&&wr()}function Up(){!S||S.pausedAtMs!==null||S.contextLost||(document.hidden?ns():S.instances.size>0&&wr())}function Yp(){qu(M2),es||(document.addEventListener("visibilitychange",Up),es=!0)}function Vp(){es&&document.removeEventListener("visibilitychange",Up),es=!1,ns(),Np(),Ko(),Zu(),qu(null),ts=0,sc=0,Wn=1e3/6,Dn=0,rc=0,nc=0,ac=0}function jp(e){let t=Ku(),r=e.hostCanvas.getContext("2d",{alpha:!0});if(!r)throw new Error("metal-fx: canvas 2D context unavailable");let n=e.scale??1,o={canvas:e.hostCanvas,ctx:r,cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius,kind:e.kind,ringCssPx:e.ringCssPx??(e.kind==="circle"?2:1)*n,shaderScale:e.shaderScale??(e.kind==="circle"?ju:Vu)*n,opacityMul:e.opacityMul??1,glowGain:e.glowGain??1,visible:!0,paused:e.paused??!1,everCopied:!1,frozen:null,dpr:typeof window<"u"&&window.devicePixelRatio||1,scale:n,onAfterFrame:e.onAfterFrame,onComposite:e.onComposite,onFirstCopy:e.onFirstCopy,mask:e.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return ic(o),t.instances.add(o),Ap(o),t.rafId===0&&t.pausedAtMs===null&&wr(),o}function Qp(e){if(Ju(e),!S)return;S.instances.delete(e);let t=S.glowQueue.indexOf(e);t!==-1&&S.glowQueue.splice(t,1),S.instances.size===0&&(ns(),Ko(),Zu())}function qp(e){S&&(S.glowQueue.includes(e)||S.glowQueue.push(e))}function Kp(e){if(!S)return;let t=S.glowQueue.indexOf(e);t!==-1&&S.glowQueue.splice(t,1)}function Vr(e,t){let r=!1;t.mask!==void 0&&(e.mask=t.mask),t.cssWidth!==void 0&&t.cssWidth!==e.cssWidth&&(e.cssWidth=t.cssWidth,r=!0),t.cssHeight!==void 0&&t.cssHeight!==e.cssHeight&&(e.cssHeight=t.cssHeight,r=!0),t.cornerRadius!==void 0&&(e.cornerRadius=t.cornerRadius),t.scale!==void 0&&(e.scale=t.scale),t.kind!==void 0&&t.kind!==e.kind&&(e.kind=t.kind,t.shaderScale===void 0&&(e.shaderScale=(t.kind==="circle"?ju:Vu)*e.scale),t.ringCssPx===void 0&&(e.ringCssPx=(t.kind==="circle"?2:1)*e.scale)),t.shaderScale!==void 0&&(e.shaderScale=t.shaderScale),t.ringCssPx!==void 0&&(e.ringCssPx=t.ringCssPx),t.opacityMul!==void 0&&(e.opacityMul=t.opacityMul),t.glowGain!==void 0&&(e.glowGain=t.glowGain),t.paused!==void 0&&t.paused!==e.paused&&(e.paused=t.paused,t.paused?nm(e):e.frozen=null,!t.paused&&S&&S.rafId===0&&S.pausedAtMs===null&&!S.contextLost&&wr()),r&&ic(e),Qo(e),S&&qo(e,S.preset,Dn)}function Zp(e,t){e.visible=t,t&&S&&S.rafId===0&&S.pausedAtMs===null&&!S.contextLost&&wr()}function Jp(e){return(typeof window<"u"&&window.devicePixelRatio||1)===e.dpr?!1:(ic(e),om(e),!0)}var C2=null;function em(e,t){let r=Ku();r.preset=C2??ja[e].modes[t],r.presetDirty=!0}function tm(){!S||S.pausedAtMs!==null||(S.pausedAtMs=performance.now(),ns())}function oc(){!S||S.pausedAtMs===null||(S.pausedMs+=performance.now()-S.pausedAtMs,S.pausedAtMs=null,S.instances.size>0&&wr())}var Jo=null;function rm(e){Jo=e}function rs(e,t){!Jo||!S||!e.visible||e.paused||S.glowQueue.includes(e)&&(e.glowFast=!!Jo(e,t))}function ic(e){e.dpr=typeof window<"u"&&window.devicePixelRatio||1;let t=e.overscan,r=Math.max(1,Math.round((e.cssWidth+2*t)*e.dpr)),n=Math.max(1,Math.round((e.cssHeight+2*t)*e.dpr));e.canvas.width!==r&&(e.canvas.width=r),e.canvas.height!==n&&(e.canvas.height=n);let o=e.canvas.style;t>0?(o.left=`${-t}px`,o.top=`${-t}px`,o.width=`calc(100% + ${2*t}px)`,o.height=`calc(100% + ${2*t}px)`,o.borderRadius="0"):o.left!==""&&(o.left="",o.top="",o.width="100%",o.height="100%",o.borderRadius=""),Qo(e),S&&qo(e,S.preset,Dn)}function $2(e){let{ctx:t,dpr:r,canvas:n}=e,o=e.ringCssPx*r,i=n.width,a=n.height,s=Math.max(0,(e.cornerRadius-e.ringCssPx)*r);t.save(),t.globalCompositeOperation="destination-out",t.fillStyle="#000",t.beginPath(),t.roundRect(o,o,i-2*o,a-2*o,s),t.fill(),t.restore()}var R2=jt();function Yr(e,t,r,n,o,i,a,s){let{xy:l,n:u}=Tt(t,r,n,o,i,a,R2);e.beginPath();for(let d=0;d<u;d++)d===0?e.moveTo(l[0]*s,l[1]*s):e.lineTo(l[d*2]*s,l[d*2+1]*s);e.closePath()}function nm(e){if(!S)return null;let t=S.frameBitmap??S.glCanvas,r=S.glCanvas.width,n=S.glCanvas.height;if(r<1||n<1)return null;let o=e.frozen;o||(o=document.createElement("canvas"),e.frozen=o),(o.width!==r||o.height!==n)&&(o.width=r,o.height=n);let i=o.getContext("2d");return i?(i.clearRect(0,0,r,n),i.drawImage(t,0,0),o):(e.frozen=null,null)}function om(e){if(!S)return;let t=(e.paused?e.frozen??nm(e):null)??S.frameBitmap??S.glCanvas,r=e.dpr,n=e.canvas.width,o=e.canvas.height;if(n<1||o<1)return;let i=Math.max(1,Math.round(e.cssWidth*r)),a=Math.max(1,Math.round(e.cssHeight*r)),s=e.overscan*r,l=t.width,u=t.height,d=An*r,c=Hn*r,m=i*(l/d)/e.shaderScale,h=a*(u/c)/e.shaderScale;m>l&&(m=l),h>u&&(h=u);let x=Math.max(0,(l-m)/2),b=Math.max(0,(u-h)/2),y=e.opacityMul*S.preset.shaderOpacity,f=e.ctx;f.clearRect(0,0,n,o);let p=e.deform;if(e.mask){if(y<1&&(f.globalAlpha=y),f.drawImage(t,x,b,m,h,0,0,n,o),y<1&&(f.globalAlpha=1),e.wantRaw){let g=e.rawCanvas;g||(g=document.createElement("canvas"),e.rawCanvas=g),(g.width!==n||g.height!==o)&&(g.width=n,g.height=o);let v=g.getContext("2d");v&&(v.clearRect(0,0,n,o),v.drawImage(e.canvas,0,0))}f.save(),f.globalCompositeOperation="destination-in",f.fillStyle="#000",e.mask(f,n,o,r),f.restore(),f.globalCompositeOperation="source-over"}else if(!p)y<1&&(f.globalAlpha=y),f.drawImage(t,x,b,m,h,0,0,n,o),y<1&&(f.globalAlpha=1),$2(e);else{let g=e.cssWidth,v=e.cssHeight,w=e.cornerRadius,k=e.ringCssPx,z=e.deformLayers;f.save(),f.translate(s,s);let _=i/m,T=a/h,C=Math.min(l,m*(i+2*s)/i),O=Math.min(u,h*(a+2*s)/a),D=Math.max(0,(l-C)/2),$=Math.max(0,(u-O)/2),P=C*_,V=O*T;if(y<1&&(f.globalAlpha=y),f.drawImage(t,D,$,C,O,i/2-P/2,a/2-V/2,P,V),y<1&&(f.globalAlpha=1),f.globalCompositeOperation="destination-in",Yr(f,0,0,g,v,w,p,r),f.fillStyle="#000",f.fill(),f.globalCompositeOperation="destination-out",Yr(f,k,k,g-2*k,v-2*k,Math.max(0,w-k),p,r),f.fill(),e.wantRing){let B=e.ringCanvas;B||(B=document.createElement("canvas"),e.ringCanvas=B),(B.width!==n||B.height!==o)&&(B.width=n,B.height=o);let L=B.getContext("2d");L&&(L.setTransform(1,0,0,1,0,0),L.globalCompositeOperation="source-over",L.clearRect(0,0,n,o),L.translate(s,s),y<1&&(L.globalAlpha=y),L.drawImage(t,D,$,C,O,i/2-P/2,a/2-V/2,P,V),L.globalAlpha=1,L.globalCompositeOperation="destination-out",Yr(L,k,k,g-2*k,v-2*k,Math.max(0,w-k),p,r),L.fillStyle="#000",L.fill(),L.globalCompositeOperation="source-over",L.setTransform(1,0,0,1,0,0))}if(z?.hairline){let B=z.hairline;f.globalCompositeOperation="destination-over",Yr(f,B.inset,B.inset,g-2*B.inset,v-2*B.inset,Math.max(0,w-B.inset),p,r),f.lineWidth=B.width*r,f.strokeStyle=B.color,f.stroke()}if(z?.fill&&(f.globalCompositeOperation="destination-over",Yr(f,0,0,g,v,w,p,r),f.fillStyle=z.fill,f.fill()),z?.rim){let B=z.rim;f.globalCompositeOperation="source-over",f.save(),Yr(f,0,0,g,v,w,p,r),f.clip();let L=B.inset+B.width/2;Yr(f,L,L,g-2*L,v-2*L,Math.max(0,w-L),p,r),f.lineWidth=B.width*r,f.strokeStyle=B.color,f.stroke(),f.restore()}f.restore(),f.globalCompositeOperation="source-over"}if(e.onComposite?.(),e.onFirstCopy){let g=e.onFirstCopy;e.onFirstCopy=void 0,g()}e.onAfterFrame?.()}function E2(){if(!S)return;let{gl:e,uniforms:t,preset:r,glCanvas:n,dpr:o}=S;t.u_resolution&&e.uniform2f(t.u_resolution,n.width,n.height),t.u_pixelRatio&&e.uniform1f(t.u_pixelRatio,o),t.u_colorBack&&e.uniform4fv(t.u_colorBack,Ur(r.colorBack)),t.u_colorTint&&e.uniform4fv(t.u_colorTint,Ur(r.colorTint)),t.u_repetition&&e.uniform1f(t.u_repetition,r.repetition),t.u_softness&&e.uniform1f(t.u_softness,r.softness),t.u_shiftRed&&e.uniform1f(t.u_shiftRed,r.shiftRed),t.u_shiftBlue&&e.uniform1f(t.u_shiftBlue,r.shiftBlue),t.u_distortion&&e.uniform1f(t.u_distortion,r.distortion),t.u_contour&&e.uniform1f(t.u_contour,r.contour),t.u_angle&&e.uniform1f(t.u_angle,r.angle),t.u_shape&&e.uniform1f(t.u_shape,r.shape),t.u_isImage&&e.uniform1i(t.u_isImage,0),t.u_imageAspectRatio&&e.uniform1f(t.u_imageAspectRatio,1),t.u_originX&&e.uniform1f(t.u_originX,r.originX),t.u_originY&&e.uniform1f(t.u_originY,r.originY),t.u_worldWidth&&e.uniform1f(t.u_worldWidth,r.worldWidth),t.u_worldHeight&&e.uniform1f(t.u_worldHeight,r.worldHeight),t.u_fit&&e.uniform1f(t.u_fit,r.fit),t.u_scale&&e.uniform1f(t.u_scale,r.scale),t.u_rotation&&e.uniform1f(t.u_rotation,r.rotation),t.u_offsetX&&e.uniform1f(t.u_offsetX,r.offsetX),t.u_offsetY&&e.uniform1f(t.u_offsetY,r.offsetY),S.presetDirty=!1}function T2(e){if(!S)return;let{gl:t,uniforms:r,preset:n,glCanvas:o}=S,i=Dn*n.speed;t.viewport(0,0,o.width,o.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),S.presetDirty&&E2(),r.u_time&&t.uniform1f(r.u_time,i),t.drawArrays(t.TRIANGLES,0,6),S.frameCount++}var ts=0,Wn=1e3/6,Dn=0,rc=0,nc=0,ac=0,im=1e3/60,Lt=null,sc=0;function am(e){Wn!==e&&(Wn=e,Lt!==null&&(clearTimeout(Lt),Lt=null,wr()))}function sm(){return{loopScheduled:!!S?.rafId||Lt!==null,targetFps:60,auxiliaryFps:1e3/Wn,directFrames:ac,...Wp(),loopCallbacks:sc}}function tc(){if(!S||S.pausedAtMs!==null||document.hidden)return;let e=Math.max(0,im-(performance.now()-ts)-3);Lt=setTimeout(()=>{Lt=null,wr()},e)}function L2(e){if(!S)return;if(S.rafId=0,sc++,S.contextLost){S.rafId=0;return}let t=!1,r=!1;for(let i of S.instances)i.visible&&(!i.paused||!i.everCopied)&&(t=!0),i.visible&&!i.everCopied&&(r=!0);if(!t){S.rafId=0;return}if(e-ts<im-2){tc();return}ts=e;let n=(e-S.startMs-S.pausedMs)/1e3;Dn+=Math.max(0,n-rc)*(Wn>100?.6:1),rc=n;let o=!1;for(let i of S.instances)i.visible&&(!i.paused||!i.everCopied)&&(o=qo(i,S.preset,Dn)||o);if(o&&ac++,!r&&e-nc<Wn-3){tc();return}nc=e,T2(e),Dp(),S.useOffscreen&&(S.frameBitmap?.close(),S.frameBitmap=S.glCanvas.transferToImageBitmap());for(let i of S.instances)i.visible&&(i.paused&&i.everCopied||((!Hp(i)||i.onAfterFrame||!i.everCopied)&&om(i),i.everCopied=!0));if(Jo&&S.glowQueue.length>0&&++S.glowSkip%1===0)for(let i of S.glowQueue)i.visible&&!i.paused&&(i.glowFast=!!Jo(i,e));tc()}function wr(){!S||S.rafId!==0||Lt!==null||document.hidden||S.contextLost||S.pausedAtMs!==null||(S.rafId=requestAnimationFrame(L2))}function ns(){Lt!==null&&clearTimeout(Lt),Lt=null,S&&(S.rafId!==0&&cancelAnimationFrame(S.rafId),S.rafId=0)}var os={linear:e=>e,smoothstep:e=>e*e*(3-2*e)};function Bn(e,t,r,n=os.linear){return{from:e,to:t,dur:r,ease:n,startMs:-1,val:e,done:!1}}function Xn(e,t){e.startMs=t,e.val=e.from,e.done=!1}function lc(e,t){if(e.done||e.startMs<0)return e.val;let r=Math.min(1,(t-e.startMs)/e.dur);return e.val=e.from+(e.to-e.from)*e.ease(r),r>=1&&(e.done=!0),e.val}var P2=Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:1.35/3,extraFadeR:13/3,extraOpOuter:.85}),E={...P2},lm=new Set;function um(e){return lm.add(e),()=>{lm.delete(e)}}var O2=Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1}),St={...O2};function vm(e){Object.assign(St,e),St.enabled?_m():Mm(),!St.spill&&Ot&&cs(),St.cursor||_r(),wc()}var Un=null,us=null,cm=0;function I2(){let e=window.devicePixelRatio||1;return cm>0?cm/e:1}function ym(e,t){if(!ct||!Un)return;let r=I2(),n=(e-Un.hotX*r).toFixed(2),o=(t-Un.hotY*r).toFixed(2);ct.style.transform=r===1?`translate3d(${n}px,${o}px,0)`:`translate3d(${n}px,${o}px,0) scale(${r.toFixed(4)})`}var wm=!1,Sm=0,is=0,as=null,ss={x:0,y:0};var ls=null,fm=0;function F2(e,t,r,n,o){if(ls&&fm===r&&ls.length===n*o)return ls;let i=document.createElement("canvas");i.width=n,i.height=o;let a=i.getContext("2d",{willReadFrequently:!0});if(!a)return null;a.scale(r,r),a.drawImage(e,0,0,t.width,t.height);let s=a.getImageData(0,0,n,o).data,l=new Uint8ClampedArray(n*o);for(let u=0,d=3;u<l.length;u++,d+=4)l[u]=s[d]>=128?255:0;return ls=l,fm=r,l}function dm(e,t,r,n){let o=e.getImageData(0,0,t,r),i=o.data;for(let a=0,s=0,l=3;a<r;a++)for(let u=0;u<t;u++,s++,l+=4){let d=i[l];if(d===0)continue;let c=n(u,a,s);i[l]=c>=1?d:c<=0?0:d*c}e.putImageData(o,0,0)}function A2(e,t){if(!as)return 0;let r=-1/0;for(let n=0;n<as.length;n+=2){let o=as[n]*e+as[n+1]*t;o>r&&(r=o)}return r===-1/0?0:r}var ri=0,Yn=!1,qr=0,cc=0,Pt=Number.NaN,kr=Number.NaN,oi=0,ii=0,jr=0,Qr=0,ue=null,Y={d:0,nx:0,ny:0,k:1,left:0,top:0},uc={x:0,y:0},Qt={r:255,g:255,b:255},Ot=null,fc="",dc=-1,pc=-1,ai=!1;function km(){ri++,_m()}function zm(){ri=Math.max(0,ri-1),ri===0&&Mm()}var ei=e=>typeof window.matchMedia=="function"&&window.matchMedia(e).matches;function pm(){if(wm||performance.now()<Sm||!Un||!us||ei("(prefers-reduced-motion: reduce)")||ei("(forced-colors: active)")||!ei("(pointer: fine)")||!ei("(hover: hover)"))return!1;let e=window.visualViewport;return!(e&&Math.abs(e.scale-1)>.001)}function _m(){!St.enabled||Yn||ri===0||typeof document>"u"||ei("(pointer: fine)")&&(Yn=!0,document.addEventListener("pointermove",Cm,{passive:!0}),document.addEventListener("pointerleave",zr),document.addEventListener("pointercancel",zr),document.addEventListener("keydown",$m,{passive:!0}),document.addEventListener("visibilitychange",zr),window.addEventListener("blur",zr))}function Mm(){Yn&&(Yn=!1,document.removeEventListener("pointermove",Cm),document.removeEventListener("pointerleave",zr),document.removeEventListener("pointercancel",zr),document.removeEventListener("keydown",$m),document.removeEventListener("visibilitychange",zr),window.removeEventListener("blur",zr),qr!==0&&(cancelAnimationFrame(qr),qr=0),ue&&(ue.cursorLight=null,ue=null),jr=0,Qr=0,Ot&&(Ot.remove(),Ot=null,fc="",dc=-1,pc=-1,ai=!1),_r(),ct&&(ct.remove(),ct=null))}var mc=!0,yc=!1;function Cm(e){mc=e.pointerType==="mouse"||e.pointerType==="",yc=!1,Pt=oi=e.clientX,kr=ii=e.clientY,si&&ct&&(mc&&Rm(Pt,kr)?ym(Pt,kr):_r()),wc()}function $m(){yc=!0,_r()}function zr(){Pt=kr=Number.NaN,wc()}function wc(){!Yn||qr!==0||(cc=performance.now(),qr=requestAnimationFrame(Em))}function H2(e,t,r,n,o,i,a){let s=i==="circle"?Math.min(r,n)/2:Math.max(0,Math.min(o,Math.min(r,n)/2)),l=r/2,u=n/2,d=Math.max(0,r/2-s),c=Math.max(0,n/2-s),m=Math.max(-d,Math.min(d,e-l)),h=Math.max(-c,Math.min(c,t-u)),x=e-l-m,b=t-u-h,y=Math.hypot(x,b);if(y>1e-6)return a.x=l+m+x/y*s,a.y=u+h+b/y*s,y-s;let f=e,p=r-e,g=t,v=n-t,w=Math.min(f,p,g,v);return w===f?(a.x=0,a.y=t):w===p?(a.x=r,a.y=t):w===g?(a.x=e,a.y=0):(a.x=e,a.y=n),-w}var ct=null,Sr=null,gc=null,Ve=null,ti=null,mm=!1,gm=0,hm=0,bm=0,si=!1,Gn=!1,hc="",qt=null,ni="",N2=/^(INPUT|TEXTAREA|SELECT)$/,bc=new WeakMap,xm=0,xc=null;function W2(e){let t=e;for(;t&&t!==document.body;){if(N2.test(t.tagName)||t.isContentEditable)return!0;t=t.parentElement}return!1}function D2(){if(ct)return!0;let e=document.createElement("div");e.className="ctmb-metal-fx-cursor",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";let t=document.createElement("canvas");t.style.display="block",e.appendChild(t),document.body.appendChild(e);let r=t.getContext("2d"),n=document.createElement("canvas"),o=n.getContext("2d");return!r||!o?(e.remove(),!1):(ct=e,Sr=t,gc=r,Ve=n,ti=o,!0)}function Rm(e,t,r=!1){let n=performance.now();if(!r&&Gn&&n-xm<12)return!0;xm=n;let o=document.elementFromPoint(e,t);if(!o)return vc(),!1;if(o===xc&&Gn)return!0;xc=o;let i=bc.get(o);if(i===void 0){if(i=!W2(o),i){let a=getComputedStyle(o).cursor;i=a==="auto"||a==="default"||a==="none"}bc.set(o,i)}if(!i)return vc(),!1;if(!Gn){let a=document.documentElement;hc=a.style.cursor,a.style.cursor="none",Gn=!0}return o!==qt&&(qt&&(qt.style.cursor=ni,qt=null,ni=""),getComputedStyle(o).cursor!=="none"&&(qt=o,ni=o.style.cursor,o.style.cursor="none")),!0}function vc(){qt&&(qt.isConnected&&(qt.style.cursor=ni),qt=null,ni=""),Gn&&(document.documentElement.style.cursor=hc,Gn=!1,hc=""),xc=null,bc=new WeakMap}function _r(){vc(),ct&&si&&(ct.style.display="none",si=!1)}function B2(e,t,r){if(!gc||!ti||!Sr||!Ve||!ct||!Un||!us)return;let n=Un,o=Math.min(3,window.devicePixelRatio||1);if((o!==gm||n.width!==hm||n.height!==bm)&&(gm=o,hm=n.width,bm=n.height,Sr.width=Ve.width=Math.ceil(n.width*o),Sr.height=Ve.height=Math.ceil(n.height*o),Sr.style.width=`${n.width}px`,Sr.style.height=`${n.height}px`),!mm&&(ti=Ve.getContext("2d",{willReadFrequently:!0}),mm=!0,!ti))return;let i=gc,a=ti,s=n.width,l=n.height;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,Sr.width,Sr.height),i.scale(o,o),i.drawImage(us,0,0,s,l);let u=Y.left+Y.nx*Y.k,d=Y.top+Y.ny*Y.k,c=oi-n.hotX+ss.x,m=ii-n.hotY+ss.y,h=u-c,x=d-m,b=Math.hypot(h,x),y=b>.01?h/b:1,f=b>.01?x/b:0,p=A2(y,f)+t.cursorEdge,g=Math.max(0,b-p),v=Math.max(1,t.cursorFalloff),w=1/(1+g/v*(g/v)),k=e.cssWidth/2,z=e.cssHeight/2,_=k-Y.nx,T=z-Y.ny,C=Math.hypot(_,T)||1,O=e.mask?0:e.ringCssPx*.5+1,D=Y.nx+_/C*O,$=Y.ny+T/C*O,P=Gp(e,D,$,4),V=P.lum,B=P.r,L=P.g,W=P.b,H=t.cursorStrength*w*r,K=t.cursorDiffuse*w*(.5+.5*Math.min(1,V/.5))*r;if(b>.01&&H+K>.005){let U=h/b,ne=x/b,we=Math.atan2(ne,U),me=Math.max(.1,Math.min(1,t.cursorDepth)),N=ss.x+p*U,A=ss.y+p*ne,Q=Math.max(1,t.cursorReach);if(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,Ve.width,Ve.height),a.scale(o,o),H>.005){a.save(),a.filter=t.cursorBlur>0?`blur(${t.cursorBlur}px)`:"none";let X=Math.max(1,t.cursorZoom);a.translate(N,A),a.rotate(we),a.scale(-1,1),a.translate((b-p)*me,0),a.rotate(-we),a.scale(X,X);let ge=e.overscan,xe=Y.k,Ee=Math.max(1,Math.ceil(H));a.globalAlpha=Math.min(1,H/Ee),a.globalCompositeOperation="lighter";let tt=e.mask&&e.rawCanvas?e.rawCanvas:e.canvas;for(let re=0;re<Ee;re++)a.drawImage(tt,-(Y.nx+ge)*xe,-(Y.ny+ge)*xe,(e.cssWidth+2*ge)*xe,(e.cssHeight+2*ge)*xe);a.restore();let F=1/o,te=1/Q;dm(a,Ve.width,Ve.height,(re,We)=>{let Ft=-(((re+.5)*F-N)*U+((We+.5)*F-A)*ne);return Ft<=0?1:1-Ft*te})}if(K>.005){let X=Math.max(B,L,W)||1,ge=Math.round(B*255/X),xe=Math.round(L*255/X),Ee=Math.round(W*255/X),tt=Q*1.2,F=a.createLinearGradient(N+.5*U,A+.5*ne,N-tt*U,A-tt*ne),te=Math.min(1,K);F.addColorStop(0,`rgba(${ge},${xe},${Ee},${te.toFixed(3)})`),F.addColorStop(.45,`rgba(${ge},${xe},${Ee},${(te*.4).toFixed(3)})`),F.addColorStop(1,`rgba(${ge},${xe},${Ee},0)`),a.globalCompositeOperation="lighter",a.fillStyle=F,a.fillRect(0,0,s,l),a.globalCompositeOperation="source-over"}let Z=F2(us,n,o,Ve.width,Ve.height);Z&&dm(a,Ve.width,Ve.height,(X,ge,xe)=>Z[xe]===0?0:1),i.globalCompositeOperation="lighter",i.drawImage(Ve,0,0,s,l),i.globalCompositeOperation="source-over"}ym(oi,ii),si||(ct.style.display="",si=!0)}function X2(){if(Ot)return Ot;let e=document.createElement("div");return e.className="ctmb-metal-fx-cursor-spill",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none",document.body.appendChild(e),Ot=e,e}function cs(){!Ot||!ai||(Ot.style.display="none",Ot.style.opacity="0",ai=!1)}function Em(e){if(qr=0,!Yn)return;let t=performance.now();try{G2(e)}catch(n){wm=!0,_r(),cs(),ue&&(ue.cursorLight=null,ue=null),typeof console<"u"&&console.warn("metal-fx: cursor light disabled after error",n);return}performance.now()-t>6?++is>=20&&(is=0,Sm=performance.now()+5e3,_r()):is>0&&is--}function G2(e){let t=St,r=Math.min(.05,Math.max(.001,(e-cc)/1e3));cc=e;let n=null,o=0,i=0;if(t.enabled&&S&&!Number.isNaN(Pt)){let s=Number.POSITIVE_INFINITY,l=Math.max(1,t.reach),u=t.cursor&&pm()?Math.max(1,t.cursorDistance):0,d=Math.max(l,u);for(let c of S.instances){if(!c.visible||!c.canvas.isConnected)continue;let m=c.canvas.getBoundingClientRect();if(m.width<=0)continue;let h=c.overscan,x=m.width/(c.cssWidth+2*h),b=m.left+h*x,y=m.top+h*x,f=d*x;if(Pt<b-f||Pt>b+c.cssWidth*x+f||kr<y-f||kr>y+c.cssHeight*x+f)continue;let p=(Pt-b)/x,g=(kr-y)/x,v=H2(p,g,c.cssWidth,c.cssHeight,c.cornerRadius,c.kind,uc),w=Math.abs(v);w<=d&&w<s&&(s=w,n=c,Y.d=v,Y.nx=uc.x,Y.ny=uc.y,Y.k=x,Y.left=b,Y.top=y)}if(n){if(s<=l){let c=1-s/l;o=c*c*(3-2*c)}s<=u&&(i=Math.min(1,(1-s/u)*3)),n.mask&&(Y.nx=n.cssWidth/2,Y.ny=n.cssHeight/2,n.wantRaw=!0)}}let a=1-Math.exp(-(r*1e3)/(Math.max(1,t.fadeMs)/3));if(jr+=(o-jr)*a,Qr+=(i-Qr)*a,n&&n!==ue&&(ue&&(ue.cursorLight=null,rs(ue,e)),ue=n),!n&&jr<.002&&Qr<.002){jr=0,Qr=0,ue&&(ue.cursorLight=null,rs(ue,e),ue=null),cs(),_r();return}if(ue){if(t.catchLight){let s=ue.cursorLight??(ue.cursorLight={x:0,y:0,w:0});s.x=Y.nx,s.y=Y.ny,s.w=jr}else ue.cursorLight&&(ue.cursorLight=null);if(rs(ue,e),t.cursor&&Qr>.002&&mc&&!yc&&!Number.isNaN(Pt)&&pm()&&D2()&&Rm(Pt,kr)?B2(ue,t,Qr):_r(),t.spill){let s=X2(),l=Ja(ue,Y.nx,Y.ny,2),u=Zo(ue,Y.nx,Y.ny,3),d=Math.max(l.r,l.g,l.b)||1,c=Ya(l.r*255/d,l.g*255/d,l.b*255/d),[m,h,x]=Va(c[0],Math.min(1,c[1]*t.spillSaturation),1);Qt.r+=(m-Qt.r)*.15,Qt.g+=(h-Qt.g)*.15,Qt.b+=(x-Qt.b)*.15;let b=Math.round(Qt.r/6)*6,y=Math.round(Qt.g/6)*6,f=Math.round(Qt.b/6)*6,p=`radial-gradient(closest-side, rgba(${b},${y},${f},1) 0%, rgba(${b},${y},${f},0.35) 45%, rgba(${b},${y},${f},0) 100%)`;p!==fc&&(fc=p,s.style.background=p);let g=Math.max(1,t.spillRadius*Y.k);g!==dc&&(dc=g,s.style.width=`${(2*g).toFixed(1)}px`,s.style.height=`${(2*g).toFixed(1)}px`),t.spillBlur!==pc&&(pc=t.spillBlur,s.style.filter=t.spillBlur>0?`blur(${t.spillBlur}px)`:"");let v=Y.left+Y.nx*Y.k,w=Y.top+Y.ny*Y.k,k=oi+(v-oi)*t.spillOffset,z=ii+(w-ii)*t.spillOffset;s.style.transform=`translate3d(${(k-g).toFixed(2)}px,${(z-g).toFixed(2)}px,0)`;let _=Math.min(1,Math.max(0,u/.3)),T=1-t.spillLumGain+t.spillLumGain*_,C=Y.d<0?t.spillInside:1,O=Math.max(0,Math.min(1,t.spillStrength*jr*T*C));ai||(s.style.display="",ai=!0),s.style.opacity=O.toFixed(3)}else cs();qr=requestAnimationFrame(Em)}}var fs=new Map;function U2(e,t){let r=Math.sqrt(12*e*e/t+1),n=Math.floor(r);n%2===0&&n--;let o=n+2,i=(12*e*e-t*n*n-4*t*n-3*t)/(-4*n-4),a=Math.round(i),s=[];for(let l=0;l<t;l++)s.push(l<a?n:o);return s}function Y2(e,t,r,n,o){let i=1/(o+o+1);for(let a=0;a<n;a++){let s=a*r,l=0;for(let u=-o;u<=o;u++)l+=e[s+Math.min(r-1,Math.max(0,u))];for(let u=0;u<r;u++){t[s+u]=l*i;let d=s+Math.max(0,u-o),c=s+Math.min(r-1,u+o+1);l+=e[c]-e[d]}}}function V2(e,t,r,n,o){let i=1/(o+o+1);for(let a=0;a<r;a++){let s=0;for(let l=-o;l<=o;l++)s+=e[Math.min(n-1,Math.max(0,l))*r+a];for(let l=0;l<n;l++){t[l*r+a]=s*i;let u=Math.max(0,l-o)*r+a,d=Math.min(n-1,l+o+1)*r+a;s+=e[d]-e[u]}}}function li(e,t,r,n){if(n<=.05)return e;let o=new Float32Array(e.length),i=e;for(let a of U2(n,3)){let s=(a-1)/2;Y2(i,o,t,r,s),V2(o,i,t,r,s)}return i}function j2(e,t,r,n,o,i,a){let s=document.createElement("canvas");s.width=r,s.height=n;let l=s.getContext("2d",{willReadFrequently:!0}),u=new Float32Array(r*n);if(!l)return u;l.scale(o,o),l.strokeStyle="#fff",l.lineCap="round",l.lineJoin="round",l.lineWidth=t,l.beginPath(),l.moveTo(i-e,a),l.lineTo(i+e,a),l.stroke();let d=l.getImageData(0,0,r,n).data;for(let c=0,m=3;c<u.length;c++,m+=4)u[c]=d[m]/255;return u}function Tm(e,t,r,n,o){let i=0;for(let b of e)i=Math.max(i,(b.stroke/2+3*b.blur)*r);let a=Math.ceil(i)+1,s=2*t+2*a,l=2*a,u=Math.ceil(s*n),d=Math.ceil(l*n),c=new Float32Array(u*d);for(let b of e){let y=j2(t,b.stroke*r,u,d,n,a,a);y=li(y,u,d,b.blur*r*n);let f=b.opacity;for(let p=0;p<c.length;p++){let g=y[p]*f;c[p]=c[p]+g*(1-c[p])}}if(o>0){let b=a*n,y=a*n,f=o*r*n;for(let p=0;p<d;p++)for(let g=0;g<u;g++){let v=Math.hypot(g+.5-b,p+.5-y)/f,w;v<=.3?w=1:v<=.65?w=1-(v-.3)/.35*.75:v<1?w=.25*(1-(v-.65)/.35):w=0,c[p*u+g]*=w}}let m=document.createElement("canvas");m.width=u,m.height=d;let h=m.getContext("2d"),x=new Uint8ClampedArray(u*d);for(let b=0;b<c.length;b++)x[b]=Math.round(Math.min(1,c[b])*255);if(h){let b=h.createImageData(u,d),y=b.data;for(let f=0,p=0;f<c.length;f++,p+=4)y[p]=255,y[p+1]=255,y[p+2]=255,y[p+3]=x[f];h.putImageData(b,0,0)}return{canvas:m,alpha:x,w:s,h:l,ax:a,ay:a}}function Lm(){return[E.haloStrokeXl,E.haloStrokeLg,E.haloStrokeMd,E.haloStrokeSm,E.haloBlurXl,E.haloBlurLg,E.haloBlurMd,E.haloBlurSm,E.haloOpXl,E.haloOpLg,E.haloOpMd,E.haloOpSm,E.extraStrokeOuter,E.extraStrokeCore,E.extraBlurOuter,E.extraBlurCore,E.extraFadeR,E.extraOpOuter].join(",")}function Pm(e,t,r){let n=`h|${e.toFixed(2)}|${t}|${r}|${Lm()}`,o=fs.get(n);return o||(o=Tm([{stroke:E.haloStrokeXl,blur:E.haloBlurXl,opacity:E.haloOpXl},{stroke:E.haloStrokeLg,blur:E.haloBlurLg,opacity:E.haloOpLg},{stroke:E.haloStrokeMd,blur:E.haloBlurMd,opacity:E.haloOpMd},{stroke:E.haloStrokeSm,blur:E.haloBlurSm,opacity:E.haloOpSm}],e,t,r,0),fs.set(n,o)),o}function Om(e,t,r){let n=`e|${e.toFixed(2)}|${t}|${r}|${Lm()}`,o=fs.get(n);return o||(o=Tm([{stroke:E.extraStrokeOuter,blur:E.extraBlurOuter,opacity:E.extraOpOuter},{stroke:E.extraStrokeCore,blur:E.extraBlurCore,opacity:1}],e,t,r,E.extraFadeR),fs.set(n,o)),o}function Sc(e,t,r,n,o){let i=t<<16|r<<8|n;if(o.canvas&&o.tint===i&&o.src===e)return o.canvas;let a=o.canvas,s=o.img;(!a||!s||o.src!==e)&&(a=document.createElement("canvas"),a.width=e.canvas.width,a.height=e.canvas.height,s=a.getContext("2d")?.createImageData(a.width,a.height)??null);let l=a.getContext("2d");if(l&&s){let u=s.data,d=e.alpha;for(let c=0,m=0;c<d.length;c++,m+=4)u[m]=t,u[m+1]=r,u[m+2]=n,u[m+3]=d[c];l.putImageData(s,0,0)}return o.canvas=a,o.img=s,o.tint=i,o.src=e,a}function ds(e,t,r){let n=Math.max(0,Math.min(r,Math.min(e,t)/2));return 2*Math.max(0,e-2*n)+2*Math.max(0,t-2*n)+2*Math.PI*n}function ui(e,t,r,n){return n==="circle"?2*Math.PI*Math.max(0,Math.min(r,Math.min(e,t)/2)):ds(e,t,r)}function Vn(e,t,r,n,o,i,a,s){let l=s||{x:0,y:0},u=Math.max(0,Math.min(n,Math.min(t,r)/2));if(a==="circle"){let f=2*Math.PI*u;if(f<=1e-4)return l.x=t*.5,l.y=r*.5,l;e=(e%f+f)%f;let p=-Math.PI/2+e/f*Math.PI*2,g=Math.max(0,u-o+i);return l.x=t*.5+g*Math.cos(p),l.y=r*.5+g*Math.sin(p),l}let d=Math.max(0,t-2*u),c=Math.max(0,r-2*u),m=Math.PI*u/2,h=2*(d+c)+4*m;e=(e%h+h)%h;let x=Math.max(0,u-o+i),b=e;if(b<d)return l.x=u+b,l.y=o-i,l;if(b-=d,b<m){let f=-Math.PI/2+(m>0?b/m:0)*(Math.PI/2);return l.x=t-u+x*Math.cos(f),l.y=u+x*Math.sin(f),l}if(b-=m,b<c)return l.x=t-o+i,l.y=u+b,l;if(b-=c,b<m){let f=(m>0?b/m:0)*(Math.PI/2);return l.x=t-u+x*Math.cos(f),l.y=r-u+x*Math.sin(f),l}if(b-=m,b<d)return l.x=t-u-b,l.y=r-o+i,l;if(b-=d,b<m){let f=Math.PI/2+(m>0?b/m:0)*(Math.PI/2);return l.x=u+x*Math.cos(f),l.y=r-u+x*Math.sin(f),l}if(b-=m,b<c)return l.x=o-i,l.y=r-u-b,l;b-=c;let y=Math.PI+(m>0?b/m:0)*(Math.PI/2);return l.x=u+x*Math.cos(y),l.y=u+x*Math.sin(y),l}function Fm(e,t,r,n,o,i){let a=Math.max(0,Math.min(o,Math.min(r,n)/2));if(i==="circle"){let w=2*Math.PI*a;return w<=1e-4?0:((Math.atan2(t-n/2,e-r/2)+Math.PI/2)/(2*Math.PI)*w%w+w)%w}let s=Math.max(0,r-2*a),l=Math.max(0,n-2*a),u=Math.PI*a/2,d=Math.PI/2,c=s,m=c+u,h=m+l,x=h+u,b=x+s,y=b+u,f=y+l,p=e>=a&&e<=r-a,g=t>=a&&t<=n-a;if(p&&g){let w=e,k=r-e,z=t,_=n-t,T=Math.min(w,k,z,_);return T===z?e-a:T===k?m+(t-a):T===_?x+(r-a-e):y+(n-a-t)}if(p)return t<n/2?e-a:x+(r-a-e);if(g)return e>r/2?m+(t-a):y+(n-a-t);if(e>r/2&&t<n/2){let w=Math.atan2(t-a,e-(r-a));return c+(w+d)/d*u}if(e>r/2){let w=Math.atan2(t-(n-a),e-(r-a));return h+w/d*u}if(t>n/2){let w=Math.atan2(t-(n-a),e-a);return b+(w-d)/d*u}let v=Math.atan2(t-a,e-a);return f+(v+Math.PI)/d*u}var kc={x:0,y:0},zc={x:0,y:0};function Am(e,t,r,n,o,i){return Vn(e-.1,t,r,n,o,0,i,kc),Vn(e+.1,t,r,n,o,0,i,zc),Math.atan2(zc.y-kc.y,zc.x-kc.x)}function _c(e,t,r){if(e===t)return r<e?0:1;let n=Math.max(0,Math.min(1,(r-e)/(t-e)));return n*n*(3-2*n)}function Hm(e){if(e.samplePoints&&e.samplePoints.length>0)return e.samplePoints.map((o,i)=>({x:o.x,y:o.y,arc:i}));let t=ui(e.width,e.height,e.cornerRadius,e.kind),r=E.inset*(e.scale??1),n=[];for(let o=0;o<16;o++){let i=o/16*t,a=Vn(i,e.width,e.height,e.cornerRadius,r,0,e.kind);n.push({x:a.x,y:a.y,arc:i})}return n}var Q2=.05,q2=120*(1e3/15),Nm=1e3/15,Wm=2e3,Mc=400,K2=2.625,Z2=1.008,J2=.31,Xm=140,Gm=40,Um=20,eb=34,ps=.25,tb=.01,Dm=.004,rb=.5,nb=3.5,ft={x:0,y:0};function Rc(e,t){let{width:r,height:n}=t,o=t.scale??1,i=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),a=ui(r,n,t.cornerRadius,t.kind)/ds(Xm,Gm,Um),s=Math.max(1,E.haloHalfLen*a),l=Math.max(.6,E.extraHalfLen*a),u=Pm(s,o,i),d=Om(l,o,i),c=Math.ceil(Math.max(u.ay,d.ay)+E.extraOutward*a*o+2),m=document.createElement("div");m.className="ctmb-metal-fx-glow-svg",m.setAttribute("aria-hidden","true");let h=document.createElement("div");h.className="ctmb-metal-fx-glow-env",h.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 170ms linear";let x=document.createElement("canvas");x.className="ctmb-metal-fx-glow-canvas";let b=r+2*c,y=n+2*c;x.width=Math.ceil(b*i),x.height=Math.ceil(y*i),x.style.cssText=`position:absolute;left:${-c}px;top:${-c}px;width:${b}px;height:${y}px;pointer-events:none`,h.appendChild(x),m.appendChild(h),e.appendChild(m);let f=x.getContext("2d",{willReadFrequently:!!t.maskDataUrl});if(!f)throw new Error("metal-fx: glow canvas 2D context unavailable");let p={wrap:m,env:h,canvas:x,ctx:f,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:c,dpr:i,halo:u,extra:d,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:jt(),mI:jt(),maskSum:Number.NaN,maskDeformed:!1,deform:null,width:r,height:n,cornerRadius:t.cornerRadius,kind:t.kind,scale:o,perim:Hm(t),pointMode:!!(t.samplePoints&&t.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:Number.NaN,dY:Number.NaN,dAng:Number.NaN,dEX:Number.NaN,dEY:Number.NaN,dHOp:Number.NaN,dEOp:Number.NaN,dHaloTint:"",dExtraTint:"",dirty:!0,dEnv:-1};if(t.maskDataUrl){let g=new Image;g.onload=()=>{let v=document.createElement("canvas");v.width=x.width,v.height=x.height;let w=v.getContext("2d",{willReadFrequently:!0});if(!w)return;w.scale(i,i),w.drawImage(g,c,c,r,n);let k=w.getImageData(0,0,v.width,v.height).data,z=v.width*v.height,_=new Float32Array(z);for(let $=0,P=3;$<z;$++,P+=4)_[$]=k[P]/255;let T=li(Float32Array.from(_),v.width,v.height,nb*i),C=0;for(let $=0;$<z;$++)T[$]>C&&(C=T[$]);let O=C>0?rb/C:0,D=new Uint8ClampedArray(z);for(let $=0;$<z;$++)D[$]=Math.round(Math.max(_[$],T[$]*O)*255);p.maskAlpha=D,p.maskReady=!0,p.dirty=!0},g.src=t.maskDataUrl}else $c(p,null);return p}function $c(e,t){if(e.pointMode)return;let{margin:r,width:n,height:o,cornerRadius:i}=e,a=e.kind==="circle"?2:1;Tt(0,0,n,o,i,t,e.mO),Tt(a,a,n-2*a,o-2*a,Math.max(0,i-a),t,e.mI);let s=new Path2D;Cc(s,e.mO,r);let l=new Path2D;Cc(l,e.mO,r),Cc(l,e.mI,r);let u=new Path2D;u.rect(0,0,n+2*r,o+2*r),u.addPath(s),e.surroundPath=u,e.bandPath=l,e.maskReady=!0}function Cc(e,t,r){let n=t.xy;for(let o=0;o<t.n;o++){let i=n[o*2]+r,a=n[o*2+1]+r;o===0?e.moveTo(i,a):e.lineTo(i,a)}e.closePath()}function ob(e,t){if(!e)return 0;Tt(0,0,t.width,t.height,t.cornerRadius,e,t.mO);let r=0,n=t.mO.xy;for(let o=0;o<t.mO.n;o+=4)r+=n[o*2]*1.37+n[o*2+1];return r}function Ym(e,t){if(e.deform=t,!e.pointMode)if(t){let r=ob(t,e);r!==e.maskSum&&(e.maskSum=r,$c(e,t),e.maskDeformed=!0,e.dirty=!0)}else e.maskDeformed&&(e.maskSum=Number.NaN,$c(e,null),e.maskDeformed=!1,e.dirty=!0)}function Vm(e,t,r,n,o="dark"){let{width:i,height:a,cornerRadius:s,perim:l}=e;if(l.length===0)return!1;let u=2,d=-1,c=e.currentIdx,m=0;for(let F=0;F<l.length;F++){let te=l[F],re=Zo(t,te.x,te.y,u);re>d&&(d=re,c=F),F===e.currentIdx&&(m=re)}let h=e.appearedAt>0&&r-e.appearedAt<E.minDwellMs,x=E.baseOp+(E.peakOp-E.baseOp)*_c(E.lumLo,E.lumHi,m),b=!h&&d-m>Q2,y=t.cursorLight,f=St.enabled&&St.catchLight&&!e.pointMode&&!!y&&y.w>.02,p=ui(i,a,s,e.kind);f&&(e.cursorTargetArc=Fm(y.x,y.y,i,a,s,e.kind));let g=f?Math.min(1,E.peakOp*St.catchGain*y.w):0,v=e.lastTickMs>0?Math.min(200,Math.max(.5,r-e.lastTickMs)):Nm;e.lastTickMs=r,e.envClock+=Math.min(v,eb);let w=F=>1-Math.pow(1-F,v/Nm),k=Math.max(1,E.relocFadeMs),z=Math.max(1,E.relocFadeOutMs),_=-2,T=-3,C=()=>{e.appearedAt=r,e.wanderS=0,e.wanderTargetS=0,e.wanderFrames=0,e.relocTween=Bn(0,1,k,os.smoothstep),Xn(e.relocTween,e.envClock)},O=F=>{e.relocNextIdx=F,e.relocTween=Bn(1,0,z,os.smoothstep),Xn(e.relocTween,e.envClock)};if(e.relocTween?.done&&e.relocTween.to===0){let F=e.relocNextIdx;if(F===_&&!f&&(F=T),F===T)e.cursorMode=!1,e.appearedAt=0,e.relocTween=null;else if(F===_)e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=g,C();else{e.currentIdx=F;let te=l[e.currentIdx],re=Zo(t,te.x,te.y,u);e.glowOpacity=E.baseOp+(E.peakOp-E.baseOp)*_c(E.lumLo,E.lumHi,re),C()}}if((!e.relocTween||e.relocTween.done)&&(e.appearedAt===0?(f?(e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=g):(e.cursorMode=!1,e.currentIdx=c,e.glowOpacity=x),C()):f!==e.cursorMode?O(f?_:T):!e.cursorMode&&b&&O(c)),e.cursorMode){f&&(e.glowOpacity=g);let F=Math.max(.01,Math.min(1,St.catchFollow)),te=1-Math.pow(1-F,v/(1e3/60)),re=e.cursorTargetArc-e.cursorArc;re=(re%p+p*1.5)%p-p/2,e.cursorArc+=re*te}else e.glowOpacity+=(x-e.glowOpacity)*w(E.fadeRate);e.glowOpacity=Math.max(0,Math.min(1,e.glowOpacity)),e.relocMul=e.relocTween?lc(e.relocTween,e.envClock):1;let D=ui(i,a,s,e.kind)/ds(Xm,Gm,Um),$=E.wanderRange*D;e.wanderFrames+=v,e.wanderFrames>=q2&&(e.wanderTargetS=(Math.random()*2-1)*$,e.wanderFrames=0),e.wanderS+=(e.wanderTargetS-e.wanderS)*w(E.wanderLerp);let P,V,B,L,W;if(e.pointMode){let F=l[e.currentIdx];P=F.x+e.wanderS,V=F.y,B=0,L=P,W=V}else{let F=e.cursorMode?e.cursorArc:l[e.currentIdx].arc+e.wanderS,te=E.inset*e.scale;Vn(F,i,a,s,te,0,e.kind,ft),P=ft.x,V=ft.y,B=Am(F,i,a,s,te,e.kind);let re=E.extraOutward*D*e.scale;Vn(F,i,a,s,te,re,e.kind,ft),L=ft.x,W=ft.y}e.deform&&(e.deform(P,V,ft),P=ft.x,V=ft.y,e.deform(L,W,ft),L=ft.x,W=ft.y);let H=o==="light",K=H?Xp(t,P,V,u):Ja(t,P,V,u);e.tintTween?e.tintTween.done&&(H?(e.tintFrom={r:e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*e.tintTween.val,g:e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*e.tintTween.val,b:e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*e.tintTween.val},e.tintTarget={...K},e.tintTween=Bn(0,1,Mc),Xn(e.tintTween,r)):r>=e.tintHoldUntil&&(e.tintFrom={...e.tintTarget},e.tintTarget={...K},e.tintTween=Bn(0,1,Mc),Xn(e.tintTween,r),e.tintHoldUntil=r+Wm)):(e.tintFrom={...K},e.tintTarget={...K},e.tintTween=Bn(0,1,Mc),Xn(e.tintTween,r),e.tintHoldUntil=H?0:r+Wm),lc(e.tintTween,r);let U=e.tintTween.val,ne,we,me;if(H)ne=Math.round(e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*U),we=Math.round(e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*U),me=Math.round(e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*U);else{let F=e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*U,te=e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*U,re=e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*U,We=Math.max(F,te,re)||1;ne=Math.round(255*(F/We)),we=Math.round(255*(te/We)),me=Math.round(255*(re/We))}let N=`rgb(${ne},${we},${me})`,A="#ffffff";if(H){let F=Ya(ne,we,me),[te,re,We]=Va(F[0],Math.min(1,F[1]*K2),Math.max(J2,F[2]*Z2));A=`rgb(${te},${re},${We})`}let Q=Math.max(0,Math.min(1,n))*(e.pointMode?E.pointGain:1),Z=Math.min(1,e.glowOpacity*E.haloOpMul*Q),X=Math.min(1,e.glowOpacity*E.extraIntensity*Q);if(Math.abs(e.relocMul-e.dEnv)>.002){let F=e.relocMul>=.998&&e.dEnv<.998;e.dEnv=e.relocMul,e.env.style.opacity=e.relocMul.toFixed(3),F&&(e.dirty=!0)}let ge=!!(e.relocTween&&!e.relocTween.done)||e.cursorMode,xe=!(Math.abs(P-e.dX)<ps&&Math.abs(V-e.dY)<ps&&Math.abs(B-e.dAng)<tb&&Math.abs(L-e.dEX)<ps&&Math.abs(W-e.dEY)<ps),Ee=!(Math.abs(Z-e.dHOp)<Dm&&Math.abs(X-e.dEOp)<Dm),tt=N!==e.dHaloTint||A!==e.dExtraTint;return(e.dirty||xe||Ee||tt)&&(e.dX=P,e.dY=V,e.dAng=B,e.dEX=L,e.dEY=W,e.dHOp=Z,e.dEOp=X,e.dHaloTint=N,e.dExtraTint=A,e.dirty=!1,ib(e,P,V,B,L,W,Z,X,N,A)),ge}function ib(e,t,r,n,o,i,a,s,l,u){let{ctx:d,canvas:c,dpr:m,margin:h}=e;if(d.setTransform(1,0,0,1,0,0),d.globalCompositeOperation="source-over",d.globalAlpha=1,d.clearRect(0,0,c.width,c.height),a<=.002&&s<=.002||!e.maskReady)return;let x=a>.002?Sc(e.halo,...Bm(l),e.haloTint):null,b=s>.002?u==="#ffffff"?e.extra.canvas:Sc(e.extra,...Bm(u),e.extraTint):null,y=v=>{x&&(d.save(),d.translate(t+h,r+h),d.rotate(n),d.globalAlpha=a*v,d.drawImage(x,-e.halo.ax,-e.halo.ay,e.halo.w,e.halo.h),d.restore()),b&&(d.save(),d.translate(o+h,i+h),d.rotate(n),d.globalAlpha=s*v,d.drawImage(b,-e.extra.ax,-e.extra.ay,e.extra.w,e.extra.h),d.restore())};if(!e.pointMode&&e.surroundPath&&e.bandPath){d.save(),d.scale(m,m),d.clip(e.surroundPath,"evenodd"),y(.5),d.restore(),d.save(),d.scale(m,m),d.clip(e.bandPath,"evenodd"),y(1),d.restore();return}d.save(),d.scale(m,m),y(1),d.restore();let f=e.maskAlpha;if(!f)return;let p=d.getImageData(0,0,c.width,c.height),g=p.data;for(let v=0,w=3;v<f.length;v++,w+=4){let k=f[v];if(k!==255){if(k===0){g[w]=0;continue}g[w]=(g[w]*k+127)/255}}d.putImageData(p,0,0)}var jn=[255,255,255];function Bm(e){if(e[0]==="#")return jn[0]=parseInt(e.slice(1,3),16),jn[1]=parseInt(e.slice(3,5),16),jn[2]=parseInt(e.slice(5,7),16),jn;let t=4,r=0,n=0;for(;t<e.length&&n<3;){let o=e.charCodeAt(t++);o>=48&&o<=57?r=r*10+(o-48):(o===44||o===41)&&(jn[n++]=r,r=0)}return jn}function jm(e,t){e.pointMode===t.pointMode&&(t.currentIdx=Math.min(e.currentIdx,Math.max(0,t.perim.length-1)),t.appearedAt=e.appearedAt,t.glowOpacity=e.glowOpacity,t.relocTween=e.relocTween,t.relocNextIdx=e.relocNextIdx,t.relocMul=e.relocMul,t.envClock=e.envClock,t.cursorMode=e.cursorMode,t.cursorArc=e.cursorArc,t.cursorTargetArc=e.cursorTargetArc,t.lastTickMs=e.lastTickMs,t.wanderS=e.wanderS,t.wanderTargetS=e.wanderTargetS,t.wanderFrames=e.wanderFrames,t.tintFrom=e.tintFrom,t.tintTarget=e.tintTarget,t.tintTween=e.tintTween,t.tintHoldUntil=e.tintHoldUntil,t.dEnv=e.relocMul,t.env.style.opacity=e.relocMul.toFixed(3))}var Ec=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:"#ffffff"});function qm(e,t,r){let n=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),o=Math.ceil(3*r.blur+Math.abs(r.offsetY)+1),i=t.width+2*o,a=t.height+2*o,s=document.createElement("canvas");s.className="ctmb-metal-fx-rim-canvas",s.setAttribute("aria-hidden","true"),s.width=Math.ceil(i*n),s.height=Math.ceil(a*n),s.style.cssText=`position:absolute;left:${-o}px;top:${-o}px;width:${i}px;height:${a}px;pointer-events:none`;let l=s.getContext("2d"),u=document.createElement("canvas");u.width=s.width,u.height=s.height;let d=u.getContext("2d",{willReadFrequently:!0});if(!l||!d)return null;e.appendChild(s);let c={canvas:s,ctx:l,scratch:u,sctx:d,width:t.width,height:t.height,cornerRadius:t.cornerRadius,kind:t.kind,ring:t.ring,margin:o,dpr:n,opts:r,mO:jt(),mI:jt(),sum:Number.NaN};return Tc(c,null,!0),c}function Qm(e,t,r){let n=t.xy;for(let o=0;o<t.n;o++){let i=n[o*2]+r,a=n[o*2+1]+r;o===0?e.moveTo(i,a):e.lineTo(i,a)}e.closePath()}function Tc(e,t,r=!1){let{width:n,height:o,cornerRadius:i,ring:a,margin:s,dpr:l}=e;Tt(0,0,n,o,i,t,e.mO),Tt(a,a,n-2*a,o-2*a,Math.max(0,i-a),t,e.mI);let u=0,d=e.mO.xy;for(let $=0;$<e.mO.n;$+=4)u+=d[$*2]*1.37+d[$*2+1];if(!r&&u===e.sum)return;e.sum=u;let{sctx:c,scratch:m,ctx:h,canvas:x,opts:b}=e,y=m.width,f=m.height;c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,y,f),c.scale(l,l),c.fillStyle="#fff",c.beginPath(),Qm(c,e.mO,s),Qm(c,e.mI,s),c.fill("evenodd");let p=c.getImageData(0,0,y,f).data,g=y*f,v=new Float32Array(g);for(let $=0,P=3;$<g;$++,P+=4)v[$]=p[P]/255;let w=Math.round(b.offsetY*l)*y,k=new Float32Array(g);if(w>=0)for(let $=0;$<g;$++)k[$]=Math.max(0,v[$]-($>=w?v[$-w]:0));else for(let $=0;$<g;$++)k[$]=Math.max(0,v[$]-($-w<g?v[$-w]:0));let z=li(k,y,f,b.blur*l),_=parseInt(b.color.slice(1,3),16),T=parseInt(b.color.slice(3,5),16),C=parseInt(b.color.slice(5,7),16),O=h.createImageData(y,f),D=O.data;for(let $=0,P=0;$<g;$++,P+=4)D[P]=_,D[P+1]=T,D[P+2]=C,D[P+3]=Math.round(Math.min(1,z[$]*v[$]*b.alpha)*255);h.setTransform(1,0,0,1,0,0),h.putImageData(O,0,0)}function Lc(e){e&&e.canvas.remove()}var Km=new Set(["INPUT","TEXTAREA","SELECT","OPTION"]);function Zm(e,t){let r=Math.max(e.left-t.right,t.left-e.right,0),n=Math.max(e.top-t.bottom,t.top-e.bottom,0);return Math.sqrt(r*r+n*n)}function Jm(e,t,r,n){return!(Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)<r||Math.max(e.left-t.right,t.left-e.right,0)>n)}function e1(e,t,r,n){return Math.min(e.right,t.right)-Math.max(e.left,t.left)<r?!1:Math.max(e.top-t.bottom,t.top-e.bottom,0)<=n}function Kr(e,t,r,n,o,i){let a=Math.max(0,Math.min(i,n*.5,o*.5)),s=e.roundRect;if(typeof s=="function"){s.call(e,t,r,n,o,a);return}e.moveTo(t+a,r),e.lineTo(t+n-a,r),e.quadraticCurveTo(t+n,r,t+n,r+a),e.lineTo(t+n,r+o-a),e.quadraticCurveTo(t+n,r+o,t+n-a,r+o),e.lineTo(t+a,r+o),e.quadraticCurveTo(t,r+o,t,r+o-a),e.lineTo(t,r+a),e.quadraticCurveTo(t,r,t+a,r)}function t1(e,t,r,n,o){if(!o.flipX&&!o.flipY){e.drawImage(t,o.sx??0,o.sy??0,r,n,o.x,o.y,o.w,o.h);return}e.save(),o.flipX&&(e.translate(o.x+o.w,0),e.scale(-1,1)),o.flipY&&(e.translate(0,o.y+o.h),e.scale(1,-1)),e.drawImage(t,o.sx??0,o.sy??0,r,n,o.flipX?0:o.x,o.flipY?0:o.y,o.w,o.h),e.restore()}var ab=4;function sb(e,t,r,n,o,i,a){if(n<=2*a||o<=2*a){e.beginPath(),Kr(e,t,r,n,o,i),e.clip();return}e.beginPath(),Kr(e,t,r,n,o,i),Kr(e,t+a,r+a,n-2*a,o-2*a,Math.max(0,i-a)),e.clip("evenodd")}function r1(e,t,r,n,o,i,a,s,l,u,d,c){let m=c??Math.max(1,Math.round((12+ab*3)*d)),h=Math.max(0,a),x=!0;for(let b=0;b<3&&h>1e-4;b++){let y=Math.min(1,h);e.save(),sb(e,u.x,u.y,u.w,u.h,u.r,m),e.globalCompositeOperation=x?"source-over":"lighter",x=!1,e.globalAlpha=y,t1(e,t,r,n,l),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=s,e.fillRect(0,0,o,i),e.restore(),h-=y}}function n1(e,t,r,n,o,i,a){let s=a|0;if(s<1||n<=2*s||o<=2*s){e.beginPath(),Kr(e,t,r,n,o,i),e.clip();return}e.beginPath(),Kr(e,t,r,n,o,i),Kr(e,t+s,r+s,n-2*s,o-2*s,Math.max(0,i-s)),e.clip("evenodd")}function o1(e,t,r,n,o,i,a,s,l,u,d,c){let m=s*d,h=!0;for(let x=0;x<3&&m>1e-4;x++){let b=Math.min(1,m);e.save(),n1(e,a.x,a.y,a.w,a.h,a.r,l),e.globalCompositeOperation=h?"source-over":"lighter",h=!1,e.globalAlpha=b,t1(e,t,r,n,c),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=u,e.fillRect(0,0,o,i),e.restore(),m-=b}}function i1(e,t,r,n,o,i,a,s){let l=e.createLinearGradient(n,o,i,a);l.addColorStop(0,`rgba(255,255,255,${s.toFixed(3)})`),l.addColorStop(.5,`rgba(255,255,255,${(s*.45).toFixed(3)})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.save(),n1(e,t.x,t.y,t.w,t.h,t.r,r),e.globalCompositeOperation="lighter",e.lineWidth=r*2,e.strokeStyle=l,e.beginPath(),Kr(e,t.x,t.y,t.w,t.h,t.r),e.stroke(),e.restore()}function Pc(e){let t=getComputedStyle(e),r=[parseFloat(t.borderTopLeftRadius)||0,parseFloat(t.borderTopRightRadius)||0,parseFloat(t.borderBottomRightRadius)||0,parseFloat(t.borderBottomLeftRadius)||0].filter(n=>n>0);return r.length?Math.min.apply(null,r):0}function Oc(e){let t=getComputedStyle(e),r=Math.max(parseFloat(t.borderTopWidth)||0,parseFloat(t.borderRightWidth)||0,parseFloat(t.borderBottomWidth)||0,parseFloat(t.borderLeftWidth)||0),n=0,o=0,i=t.boxShadow;if(i&&i!=="none"){let u=i.replace(/rgba?\([^)]*\)/g,m=>m.replace(/,/g,"\0")).split(/,\s*/),d=1/0,c=1/0;for(let m of u){let h=m.match(/-?\d+(?:\.\d+)?px/g);if(!h||h.length<4)continue;let x=parseFloat(h[3]);x>0&&(/\binset\b/.test(m)?x<d&&(d=x):x<c&&(c=x))}Number.isFinite(d)&&(n=d),Number.isFinite(c)&&(o=c)}let a=Math.max(r,o);return{width:Math.max(r,n,o)||1,outerCssPx:a}}function a1(e){e.cornerRadius=Pc(e.el);let t=Oc(e.el);e.hairlineWidth=t.width,e.hairlineOuterCssPx=t.outerCssPx}function s1(e){typeof ResizeObserver<"u"&&(e.resizeObserver=new ResizeObserver(()=>a1(e)),e.resizeObserver.observe(e.el)),typeof MutationObserver<"u"&&(e.mutationObserver=new MutationObserver(()=>a1(e)),e.mutationObserver.observe(e.el,{attributes:!0,attributeFilter:["style","class"]}))}function l1(e){e.resizeObserver?.disconnect(),e.resizeObserver=null,e.mutationObserver?.disconnect(),e.mutationObserver=null}var kt=new Set,Ic=new WeakMap,wb=Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36}),Zt={...wb};function b1(e){Object.assign(Zt,e),hs(Zt.enabled&&kt.size>0),gs()}var Mr=null,Zn=0,Fc=0,m1=!1;function gs(){Zn!==0||typeof requestAnimationFrame>"u"||(Zn=requestAnimationFrame(e=>{if(Zn=0,e-Fc<Zt.repaintMs){gs();return}Fc=e,Nc()}))}var fi=!1;function Sb(e,t){let r=Zt.radius;for(let n of kt){let o=n.anchorEl.getBoundingClientRect(),i=n.el.getBoundingClientRect(),a=Math.min(o.left,i.left)-r,s=Math.max(o.right,i.right)+r,l=Math.min(o.top,i.top)-r,u=Math.max(o.bottom,i.bottom)+r;if(e>=a&&e<=s&&t>=l&&t<=u)return!0}return!1}function g1(e){if(Mr={x:e.clientX,y:e.clientY},!Zt.enabled)return;let t=Sb(e.clientX,e.clientY);(t||fi)&&gs(),fi=t}function ms(){Mr=null,fi&&gs(),fi=!1}function hs(e){e=e&&Zt.enabled,!(typeof document>"u"||e===m1)&&(m1=e,e?(document.addEventListener("pointermove",g1,{passive:!0}),document.addEventListener("pointerleave",ms),window.addEventListener("blur",ms)):(document.removeEventListener("pointermove",g1),document.removeEventListener("pointerleave",ms),window.removeEventListener("blur",ms),Mr=null,Zn&&cancelAnimationFrame(Zn),Zn=0,fi=!1,Fc=0))}function kb(e,t,r,n,o,i,a,s,l){if(!Mr)return;let u=Zt;if(!u.enabled||u.strength<=0)return;let d=u.radius,c,m,h,x,b,y;if(o){let L=r.left>=n.right;c=L?n.right:r.right,m=L?r.left:n.left,h=Mr.x,x=Mr.y,b=Math.max(r.top,n.top),y=Math.min(r.bottom,n.bottom)}else{let L=r.top>=n.bottom;c=L?n.bottom:r.bottom,m=L?r.top:n.top,h=Mr.y,x=Mr.x,b=Math.max(r.left,n.left),y=Math.min(r.right,n.right)}let f=Math.min(c,m),p=Math.max(c,m),g=Math.max(1,p-f);if(h<f-d||h>p+d||x<b-d||x>y+d)return;let v=Math.max(0,Math.min(1,Math.abs(h-c)/g)),w=Math.max(.5,d*u.edgeFade),k=Math.min(1,Math.min(h-(f-d),p+d-h)/w),z=Math.min(1,Math.min(x-(b-d),y+d-x)/w),_=u.strength*(1-u.falloff*v)*k*z;if(_<=.001)return;let T=d*l*(1+u.penumbra*v),C=o?(x-n.top+s)*l:(x-n.left+s)*l,O=Math.max(0,Math.min(.5,(1-u.softness)*.5)),D=Math.max(.001,.5-O),$=o?a:i,P=Math.max(0,Math.floor(C-T)),V=Math.min($,Math.ceil(C+T));if(V<=P)return;let B=new Float32Array(V-P);for(let L=P;L<V;L++){let W=(L+.5-(C-T))/(2*T),H=W<D?W/D:W>1-D?(1-W)/D:1;B[L-P]=1-_*Math.max(0,Math.min(1,H))}for(let L of[e,t]){let W=o?0:P,H=o?P:0,K=o?i:V-P,U=o?V-P:a,ne=L.getImageData(W,H,K,U),we=ne.data;if(o)for(let me=0;me<U;me++){let N=B[me];if(!(N>=.999))for(let A=me*K*4+3,Q=(me+1)*K*4;A<Q;A+=4)we[A]=we[A]*N}else for(let me=0;me<U;me++)for(let N=0;N<K;N++){let A=B[N];if(A>=.999)continue;let Q=(me*K+N)*4+3;we[Q]=we[Q]*A}L.putImageData(ne,W,H)}}var Kt=null,Qn=null,qn=null,Kn=null;function zb(e,t){return Kt||(Kt=document.createElement("canvas"),Qn=document.createElement("canvas"),qn=Kt.getContext("2d",{alpha:!0}),Kn=Qn.getContext("2d",{alpha:!0})),!qn||!Kn||!Kt||!Qn?!1:(Kt.width!==e&&(Kt.width=e,Qn.width=e),Kt.height!==t&&(Kt.height=t,Qn.height=t),qn.setTransform(1,0,0,1,0,0),Kn.setTransform(1,0,0,1,0,0),qn.globalCompositeOperation="source-over",Kn.globalCompositeOperation="source-over",qn.clearRect(0,0,e,t),Kn.clearRect(0,0,e,t),!0)}function x1(e,t,r,n=1){if(typeof document>"u"||Km.has(e.tagName))return null;for(let x of kt)if(x.el===e)return x.strength=n,x;let o=document.createElement("div");o.setAttribute("data-ctmb-metal-fx-reflection",""),o.setAttribute("aria-hidden","true");let i=document.createElement("canvas");i.className="ctmb-metal-fx-reflection-canvas";let a=i.getContext("2d",{alpha:!0,willReadFrequently:Zt.enabled});if(!a)return null;let s=document.createElement("canvas");s.className="ctmb-metal-fx-reflection-stroke-canvas";let l=s.getContext("2d",{alpha:!0,willReadFrequently:Zt.enabled});if(!l)return null;o.appendChild(i),o.appendChild(s),Ic.set(e,{position:e.style.getPropertyValue("position"),positionPriority:e.style.getPropertyPriority("position"),isolation:e.style.getPropertyValue("isolation"),isolationPriority:e.style.getPropertyPriority("isolation")});let u=getComputedStyle(e),d=!1;u.position==="static"&&(e.style.position="relative",d=!0);let c=!1;u.isolation!=="isolate"&&(e.style.isolation="isolate",c=!0),e.setAttribute("data-ctmb-metal-fx-reflect-host",""),e.insertBefore(o,e.firstChild);let m=Oc(e),h={el:e,anchor:t,anchorEl:r,strength:n,wrap:o,canvas:i,ctx:a,strokeCanvas:s,strokeCtx:l,cornerRadius:Pc(e),hairlineWidth:m.width,hairlineOuterCssPx:m.outerCssPx,appliedPositionRelative:d,appliedIsolation:c,resizeObserver:null,mutationObserver:null};return s1(h),kt.add(h),hs(!0),h}function Hc(e){for(let t of kt)if(t.el===e){l1(t),t.canvas.width=0,t.canvas.height=0,t.strokeCanvas.width=0,t.strokeCanvas.height=0,t.wrap.parentNode===t.el&&t.el.removeChild(t.wrap),t.el.removeAttribute("data-ctmb-metal-fx-reflect-host");let r=Ic.get(e);t.appliedPositionRelative&&e.style.position==="relative"&&(r?.position?e.style.setProperty("position",r.position,r.positionPriority):e.style.removeProperty("position")),t.appliedIsolation&&e.style.isolation==="isolate"&&(r?.isolation?e.style.setProperty("isolation",r.isolation,r.isolationPriority):e.style.removeProperty("isolation")),Ic.delete(e),kt.delete(t),kt.size===0&&hs(!1);return}}function _b(e,t,r,n,o){if(n<1||o<1)return null;let i=e.getContext("2d");if(!i)return null;let a=i.getImageData(t,r,n,o).data,s=n,l=o,u=-1,d=-1;for(let c=0;c<o;c++){let m=c*n;for(let h=0;h<n;h++)a[(m+h)*4+3]>8&&(h<s&&(s=h),h>u&&(u=h),c<l&&(l=c),c>d&&(d=c))}return u<0?null:{x:t+s,y:r+l,w:u-s+1,h:d-l+1}}var Ac=new WeakMap;function v1(){Ac=new WeakMap}function h1(e){let t=Ac.get(e);return t||(t=e.getBoundingClientRect(),Ac.set(e,t)),t}function Nc(){if(kt.size===0)return;let e=typeof window<"u"&&window.devicePixelRatio||1,t=new Map;for(let r of kt){let n=h1(r.el),o=t.get(r.anchorEl);if(o||(o=h1(r.anchorEl),t.set(r.anchorEl,o)),n.width<1||n.height<1||o.width<1||o.height<1)continue;let i=r.el.hasAttribute("data-ctmb-metal-fx-text");if(i&&!r.glyphStyled&&(r.canvas.style.filter="blur(0.4px) saturate(1.35) brightness(1.2)",r.glyphStyled=!0),!Jm(o,n,1,32)&&!e1(o,n,1,32)){r.canvas.width!==1&&(r.canvas.width=1,r.canvas.height=1),r.strokeCanvas.width!==1&&(r.strokeCanvas.width=1,r.strokeCanvas.height=1);continue}let a=i&&!!r.anchor.mask;a&&!r.anchor.wantRaw&&(r.anchor.wantRaw=!0),r.anchor.wantRing||(r.anchor.wantRing=!0);let s=!!r.anchor.deform&&!!r.anchor.ringCanvas,l=a&&r.anchor.rawCanvas?r.anchor.rawCanvas:s?r.anchor.ringCanvas:r.anchor.canvas,u=Math.round(r.anchor.overscan*e),d=u,c=u,m=(l.width|0)-2*u,h=(l.height|0)-2*u;if(r.anchor.mask&&!a){let ne=_b(l,d,c,m,h);ne&&(d=ne.x,c=ne.y,m=ne.w,h=ne.h)}if(m<4||h<4)continue;let x=(o.left+o.right)*.5,b=(o.top+o.bottom)*.5,y=(n.left+n.right)*.5,f=(n.top+n.bottom)*.5,p=x-y,g=b-f,v=Math.max(o.left-n.right,n.left-o.right,0),w=Math.max(o.top-n.bottom,n.top-o.bottom,0),k=v>=w,z=Zm(o,n),_=1-Math.min(1,z/12);_=_*_*(3-2*_);let T=.55+(1-.55)*_,C=Math.min(3.6,T*1.3*.7)*r.strength,D=o.left>=n.left&&o.right<=n.right&&o.top>=n.top&&o.bottom<=n.bottom?[!0,!1]:[k],$=r.anchor.scale??1,P=Math.max(1*$,r.hairlineWidth),V=Math.max(1,Math.round(P*e)),B=Math.max(1,Math.round(Math.max(1*$,r.hairlineWidth)*e)),L=r.hairlineOuterCssPx;r.wrap.style.inset!==`${-L}px`&&(r.wrap.style.inset=`${-L}px`),r.wrap.style.borderRadius!==`${Math.max(0,r.cornerRadius)}px`&&(r.wrap.style.borderRadius=`${Math.max(0,r.cornerRadius)}px`);let W=Math.max(1,Math.round((n.width+L*2)*e)),H=Math.max(1,Math.round((n.height+L*2)*e));r.canvas.width!==W&&(r.canvas.width=W),r.canvas.height!==H&&(r.canvas.height=H),r.strokeCanvas.width!==W&&(r.strokeCanvas.width=W),r.strokeCanvas.height!==H&&(r.strokeCanvas.height=H);let K=r.ctx;K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,W,H);let U=r.strokeCtx;U.setTransform(1,0,0,1,0,0),U.clearRect(0,0,W,H);for(let[ne,we]of D.entries()){let me=ne>0&&zb(W,H),N=me?qn:K,A=me?Kn:U,Q=Math.min((i?12*1.5:12)*e,Math.max(W,H)),Z,X,ge,xe;we?(Z=p>0?W:0,ge=p>0?W-Q:Q,X=H*.5,xe=H*.5):(X=g>0?H:0,xe=g>0?H-Q:Q,Z=W*.5,ge=W*.5);let Ee=K.createLinearGradient(Z,X,ge,xe);Ee.addColorStop(0,`rgba(0,0,0,${1})`),Ee.addColorStop(.5,`rgba(0,0,0,${.85})`),Ee.addColorStop(1,`rgba(0,0,0,${0})`);let tt=m/e,F=i?Math.max(1,Math.min(we?W:H,Math.round(we?m:h))):Math.max(1,Math.round(235*Math.max(.1,tt/140)*e)),te,re,We,Ft,Rr=!1,tn=!1;if(we){let I=Math.max(o.top,n.top),J=Math.min(o.bottom,n.bottom);Rr=!0,te=p>0?W-F:0,re=Math.round((I-n.top+L)*e),We=F,Ft=Math.max(1,Math.round((J-I)*e))}else{let I=Math.max(o.left,n.left),J=Math.min(o.right,n.right);tn=!0,te=Math.round((I-n.left+L)*e),re=g>0?H-F:0,We=Math.max(1,Math.round((J-I)*e)),Ft=F}let Jn={x:te,y:re,w:We,h:Ft,flipX:Rr,flipY:tn,sx:d,sy:c},eo={x:0,y:0,w:W,h:H,r:Math.max(0,r.cornerRadius*e)},to=i?Math.min(1,C*.7):Math.min(3.6,C*2.535*.7*.5);r1(N,l,m,h,W,H,to,Ee,Jn,eo,e,i?Math.max(W,H):void 0),i||(o1(A,l,m,h,W,H,eo,C,V,Ee,.52,Jn),i1(A,eo,B,Z,X,ge,xe,Math.min(.85,.044*C))),me&&(K.globalCompositeOperation="lighter",K.drawImage(Kt,0,0),U.globalCompositeOperation="lighter",U.drawImage(Qn,0,0))}for(let ne of D)kb(K,U,o,n,ne,W,H,L,e);K.globalCompositeOperation="source-over",U.globalCompositeOperation="source-over"}}function y1(){v1();for(let e of[...kt])Hc(e.el);hs(!1)}function w1(){return kt.size}var bs=!1,di=0,Wc=0;function S1(){bs||(bs=!0,!(typeof requestAnimationFrame>"u")&&(di=requestAnimationFrame(e=>{di=0,bs=!1,!(e-Wc<66)&&(Wc=e,Nc())})))}function k1(){di&&cancelAnimationFrame(di),di=0,bs=!1,Wc=0}var It=rt(Zr(),1),Pb={position:"absolute",inset:0,width:"100%",height:"100%"},Ob={position:"absolute",inset:3},C1={position:"absolute",inset:0,pointerEvents:"none",zIndex:3,borderRadius:"inherit"},Ib={position:"absolute",inset:0,pointerEvents:"none",zIndex:4},pi=new Map;function Fb(){let e=globalThis;e.__MFX_DEBUG__&&(e.__mfxGlow=pi)}rm((e,t)=>{let r=pi.get(e);return r?Vm(r.handles,e,t,e.opacityMul*e.glowGain,r.themeRef.current):!1});function Ab(e){let[t,r]=(0,q.useState)(()=>e!=="auto"?e:typeof window>"u"||!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,q.useEffect)(()=>{if(e!=="auto"){r(e);return}if(typeof window>"u"||!window.matchMedia)return;let n=window.matchMedia("(prefers-color-scheme: dark)"),o=()=>r(n.matches?"dark":"light");return o(),n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[e]),t}var Dc=(0,q.forwardRef)(function({children:t,variant:r="button",preset:n="chromatic",theme:o="auto",strength:i=1,glowGain:a=1,paused:s=!1,borderRadius:l,normalizeHostStyles:u=!0,reflectionTargets:d,disableGlow:c=!1,innerShadow:m,shaderScale:h,ringCssPx:x,scale:b=1,mask:y,glowMode:f="mask",glowPortal:p,className:g,style:v,...w},k){let z=(0,q.useRef)(null),_=(0,q.useRef)(null),T=(0,q.useRef)(null),C=(0,q.useRef)(null),O=(0,q.useRef)(null),D=(0,q.useRef)(null),$=(0,q.useRef)(null),P=(0,q.useRef)(null),V=(0,q.useRef)("dark"),B=(0,q.useRef)(0),[L,W]=(0,q.useState)(!1),H=Ab(o),K=(0,q.useMemo)(()=>Qu(),[]);V.current=H;let U=r==="circle"?"circle":"pill",ne=!c;(0,q.useImperativeHandle)(k,()=>z.current,[]);let we=(N,A)=>{if(U==="circle")return Math.min(N,A)/2;let Q=typeof l=="number"?l:(()=>{let Z=D.current?.firstElementChild;if(Z){let X=parseFloat(getComputedStyle(Z).borderTopLeftRadius);if(Number.isFinite(X)&&X>0)return X}return B.current})();return Math.min(Q,Math.min(N,A)/2)};(0,q.useEffect)(()=>{K&&em(n,H)},[n,H,K]),(0,q.useEffect)(()=>{let N=$.current;N&&Vr(N,{mask:y??null})},[y]),(0,q.useEffect)(()=>{let N=$.current;N&&Vr(N,{paused:s})},[s]),(0,q.useEffect)(()=>{let N=$.current;if(!N)return;let A={};h!==void 0&&(A.shaderScale=h),x!==void 0&&(A.ringCssPx=x),b!==void 0&&(A.scale=b),Object.keys(A).length>0&&Vr(N,A)},[h,x,b]),(0,q.useLayoutEffect)(()=>{let N=_.current,A=z.current,Q=T.current;if(!N||!A||!K)return;{let I=getComputedStyle(A),J=parseFloat(I.borderTopLeftRadius);B.current=Number.isFinite(J)?J:0}let Z=()=>{let I=A.getBoundingClientRect(),J=Math.max(1,Math.round(I.width)),ve=Math.max(1,Math.round(I.height));return{cssWidth:J,cssHeight:ve,cornerRadius:we(J,ve)}},X=Z();$.current=jp({onComposite:()=>{let I=$.current,J=P.current;I&&J&&Ym(J,I.deform);let ve=O.current;I&&ve&&Tc(ve,I.deform)},hostCanvas:N,cssWidth:X.cssWidth,cssHeight:X.cssHeight,cornerRadius:X.cornerRadius,kind:U,paused:s,shaderScale:h,ringCssPx:x,scale:b,mask:y??null,onFirstCopy:()=>W(!0)}),A.style.setProperty("--mfx-radius",`${X.cornerRadius}px`),A.style.borderRadius=`${X.cornerRadius}px`;let ge=(I,J)=>{if(!y||f==="ring")return{};let ve=window.devicePixelRatio||1,De=document.createElement("canvas");De.width=Math.max(1,Math.round(I*ve)),De.height=Math.max(1,Math.round(J*ve));let hi=De.getContext("2d");if(!hi)return{};hi.fillStyle="#fff",y(hi,De.width,De.height,ve);let U1=hi.getImageData(0,0,De.width,De.height).data,jc=[],bi=Math.max(1,Math.round(2*ve));for(let xi=bi>>1;xi<De.height;xi+=bi)for(let vi=bi>>1;vi<De.width;vi+=bi)U1[(xi*De.width+vi)*4+3]>128&&jc.push({x:vi/ve,y:xi/ve});return{samplePoints:jc,maskDataUrl:De.toDataURL("image/png")}};Q&&(P.current=Rc(Q,{width:X.cssWidth,height:X.cssHeight,cornerRadius:X.cornerRadius,kind:U,scale:b,...ge(X.cssWidth,X.cssHeight)}));let xe=I=>{if(!Q)return;let J=P.current;Q.innerHTML="",P.current=Rc(Q,{width:I.cssWidth,height:I.cssHeight,cornerRadius:I.cornerRadius,kind:U,scale:b,...ge(I.cssWidth,I.cssHeight)}),J&&jm(J,P.current);let ve=$.current;ve&&P.current&&pi.set(ve,{handles:P.current,themeRef:V})},Ee=()=>m?m===!0?Ec:{...Ec,...m}:null,tt=I=>{let J=C.current,ve=$.current;Lc(O.current),O.current=null;let De=Ee();!J||!ve||!De||(O.current=qm(J,{width:I.cssWidth,height:I.cssHeight,cornerRadius:I.cornerRadius,kind:U,ring:ve.ringCssPx},De))};tt(X);let F=0,te=X.cssWidth,re=X.cssHeight,We=X.cornerRadius,Ft=new ResizeObserver(()=>{F===0&&(F=requestAnimationFrame(()=>{F=0;let I=Z(),J=$.current;!J||Math.abs(I.cssWidth-te)<.5&&Math.abs(I.cssHeight-re)<.5&&Math.abs(I.cornerRadius-We)<.5||(te=I.cssWidth,re=I.cssHeight,We=I.cornerRadius,Vr(J,{cssWidth:I.cssWidth,cssHeight:I.cssHeight,cornerRadius:I.cornerRadius}),A.style.setProperty("--mfx-radius",`${I.cornerRadius}px`),A.style.borderRadius=`${I.cornerRadius}px`,xe(I),tt(I))}))});Ft.observe(A);let Rr=null,tn=()=>{let I=$.current;if(I&&Jp(I)){let J=Z();xe(J),tt(J)}Jn()},Jn=()=>{Rr?.removeEventListener("change",tn),Rr=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,Rr?.addEventListener("change",tn)};Jn();let eo=um(I=>{I&&$.current&&xe(Z())}),to=null;return typeof IntersectionObserver<"u"&&(to=new IntersectionObserver(I=>{let J=$.current;if(J)for(let ve of I)Zp(J,ve.isIntersecting)},{rootMargin:"64px"}),to.observe(A)),$.current&&P.current&&(pi.set($.current,{handles:P.current,themeRef:V}),qp($.current)),km(),Fb(),()=>{zm(),Lc(O.current),O.current=null,Ft.disconnect(),Rr?.removeEventListener("change",tn),to?.disconnect(),eo(),F!==0&&cancelAnimationFrame(F);let I=$.current;I&&(pi.delete(I),Kp(I),Qp(I)),$.current=null,P.current=null,Q&&(Q.innerHTML="")}},[U]),(0,q.useEffect)(()=>{let N=$.current;N&&Vr(N,{opacityMul:Math.max(0,Math.min(1,i)),glowGain:Math.max(0,a)})},[i,a,r]),(0,q.useEffect)(()=>{let N=$.current,A=z.current;if(!N||!A||!d||H!=="dark")return;N.onAfterFrame=S1;let Q=d.flatMap(Z=>{let X="current"in Z?Z:Z.ref,ge="current"in Z?1:Z.strength??1;return X.current?[{el:X.current,strength:ge}]:[]});for(let{el:Z,strength:X}of Q)x1(Z,N,A,X);return()=>{N.onAfterFrame=void 0;for(let{el:Z}of Q)Hc(Z)}},[d,H]),(0,q.useEffect)(()=>{let N=z.current,A=$.current;if(!N||!A)return;let Q=we(A.cssWidth,A.cssHeight);Vr(A,{cornerRadius:Q}),N.style.setProperty("--mfx-radius",`${Q}px`),N.style.borderRadius=`${Q}px`},[l,H,r,U]);let me=(0,q.useMemo)(()=>({...v,"--mfx-strength":String(Math.min(1,Math.max(0,i))),opacity:L?1:0,visibility:L?"visible":"hidden",transition:L?"opacity 0.15s ease-out":"none"}),[v,i,L]);return K?(0,It.jsxs)("div",{...w,ref:z,className:g?`ctmb-metal-fx-root ${g}`:"ctmb-metal-fx-root","data-variant":r,"data-shape":U,"data-theme":H,"data-paused":s?"true":void 0,"data-normalize":u?"true":"false",style:me,children:[(0,It.jsx)("canvas",{ref:_,className:"ctmb-metal-fx-canvas",style:Pb}),(0,It.jsx)("div",{className:"ctmb-metal-fx-inner","aria-hidden":"true",style:Ob}),p?(0,$1.createPortal)((0,It.jsx)("div",{ref:T,"aria-hidden":"true",style:{...C1,display:ne?void 0:"none"}}),p):(0,It.jsx)("div",{ref:T,"aria-hidden":"true",style:{...C1,display:ne?void 0:"none"}}),m?(0,It.jsx)("div",{ref:C,"aria-hidden":"true",style:Ib}):null,(0,It.jsx)("div",{ref:D,className:"ctmb-metal-fx-content",children:t})]}):(0,It.jsx)("div",{...w,ref:z,className:g?`ctmb-metal-fx-fallback ${g}`:"ctmb-metal-fx-fallback","data-ctmb-metal-fx-unsupported":"",style:{display:"inline-flex",...v},children:t})});Dc.displayName="MetalFx";var R1="ctmb-metal-fx-styles",Hb=`
.ctmb-metal-fx-root {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  overflow: visible;
  background: #272727;
  color: #f8f8f8;
}
.ctmb-metal-fx-root[data-theme='light'] {
  background: #ffffff;
  color: #1d1d1d;
}

.ctmb-metal-fx-root::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 50px 0 rgba(255, 255, 255, 0.02);
}
.ctmb-metal-fx-root[data-theme='light']::before {
  box-shadow: inset 0 0 50px 0 rgba(0, 0, 0, 0.02);
}

.ctmb-metal-fx-root::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 4;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.ctmb-metal-fx-root[data-theme='light']::after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
/* Circle variant gets a thicker outer rim than the button variant. */
.ctmb-metal-fx-root[data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
}
.ctmb-metal-fx-root[data-theme='light'][data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
}

.ctmb-metal-fx-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
}

/* The inner spacer \u2014 defines the inset geometry where the metal ring meets
   the interior (3 px for Button, 1-2 px for Circle) and carries the Circle dark
   hairline ('box-shadow: inset' rules below). Intentionally transparent so
   the wrapper's background propagates through to the punched shader centre,
   giving consumers a single surface tone to override. See "Single-surface
   background" in the file header for the rationale. */
.ctmb-metal-fx-inner {
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
}

.ctmb-metal-fx-root[data-variant='button'][data-shape='pill'] .ctmb-metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 20px) - 3px);
}
.ctmb-metal-fx-root[data-variant='button'][data-shape='circle'] .ctmb-metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 16px) - 3px);
}
.ctmb-metal-fx-root[data-variant='circle'][data-shape='pill'] .ctmb-metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 20px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
.ctmb-metal-fx-root[data-variant='circle'][data-shape='circle'] .ctmb-metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 16px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
/* Circle-variant hairline alpha \u2014 light mode.
   Source-of-truth: index.html L2261-2267. The 0.45-alpha black inset that
   reads as a single-pixel frame against the dark interior is too heavy
   on a #ffffff inner: it ends up looking like a hard 2-px black ring
   against the iridescent shader. Suppressed entirely (alpha 0) \u2014 the
   shader's own iridescent rim already defines the silhouette in light
   mode, so an extra dark hairline only competes with it. The rule is
   kept (rather than deleted) as a tunable hook in case a future variant
   wants to re-introduce a soft edge. NOTE: we keep the dark-mode inset
   and border-radius values because \u2014 unlike index.html \u2014 our renderer
   does NOT overscan the canvas in light mode, so there is no 1-px gap
   between inner element and shader to compensate for. */
.ctmb-metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='pill'] .ctmb-metal-fx-inner,
.ctmb-metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='circle'] .ctmb-metal-fx-inner {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
}

/* \u2500\u2500\u2500 Combined glow SVG (z=3) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Single SVG per instance that holds BOTH the wide-halo group
   (#mfx_haloTravel) and the catch-light group (#mfx_extraTravel), exactly
   mirroring canonical's _buildGlowSvgInner (index.html L8078). One
   mix-blend-mode: screen lifts the combined composite onto the shader
   ring; per-frame opacity attributes on each inner group still drive the
   independent fade-in / fade-out cycles for the halo and the catch-light.

   Why a single SVG: the circle variant anchors halo + catch-light at the same
   perimeter point, so they overlap in the bright zone. Two separately-
   screened SVGs would double-screen the overlap (A + B + C - AB - AC -
   BC + ABC instead of A + B + C - AB - AC once both groups composite
   in source-over inside one SVG and then screen against the host once).
   That overlap looked muted versus canonical specifically on the circle
   variant where both layers travel together.

   Source-of-truth opacity: #btnGlowSvg drops to 0.7 in dark and 0.2746 in
   light (index.html L632/L643). */
.ctmb-metal-fx-glow-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 3;
  pointer-events: none;
  opacity: 0.7;
}
.ctmb-metal-fx-root[data-theme='light'] .ctmb-metal-fx-glow-svg {
  /* Light-mode 1-px overscan mirrors .btn-glow-svg in metal.html so the
     halo stays glued to the visible silhouette (the shader ring there sits
     1 px outside the host's padding box). */
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  mix-blend-mode: multiply;
  /* Source-of-truth: html[data-theme="light"] #btnGlowSvg { opacity: 0.2746 }
     \u2192 \u221235 % from 0.4225 from the original 0.7 dark-mode opacity. */
  opacity: 0.2746;
  filter: saturate(5.355) brightness(0.78);
}
/* Circle light-mode small variants (e.g. 36\xD736 send button): the geometrically
   shrunk halo loses density when multiplied against #ffffff. Mirror the
   canonical override at index.html L2316 \u2014 bump saturation + drop brightness
   so the small glow holds together visually. */
.ctmb-metal-fx-root[data-variant='circle'][data-shape='circle'][data-theme='light'] .ctmb-metal-fx-glow-svg {
  filter: saturate(7.5) brightness(0.6);
}

/* The wrapped child \u2014 hoisted into z=5 so it sits above every overlay, with
   normalized chrome so consumer button styles don't fight the metal frame. */
.ctmb-metal-fx-content {
  position: relative;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}
.ctmb-metal-fx-content > * {
  pointer-events: auto;
}
.ctmb-metal-fx-root[data-normalize='true'] .ctmb-metal-fx-content > * {
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  /* Sizing: we deliberately DO NOT force \`width: 100%; height: 100%\` on the
     child here. That used to be the contract ("the wrapper is the visible
     button surface; the child stretches to fill it"), but it created a cyclic
     percentage dependency: the wrapper is \`inline-flex\` with no intrinsic
     size, .ctmb-metal-fx-content is \`width/height: 100%\` of the wrapper, and the
     child was \`100%\` of .ctmb-metal-fx-content. With nothing breaking the cycle,
     icon-only / class-sized children collapsed.

     The new contract: the child sizes itself (intrinsic content, CSS class,
     or inline style \u2014 all work), and the wrapper's \`inline-flex\` wraps it
     tightly. Consumers who want a metal frame BIGGER than the child (e.g.
     padding around an icon) size <MetalFx style={{ width, height }}> AND
     explicitly set width/height on the child to fill (or accept that the
     child renders at its intrinsic size, centered).

     Typography is intentionally NOT touched. We used to apply
     \`color: inherit; font: inherit;\` here to "match" the wrapper, but
     \`font: inherit\` is a shorthand that overrides font-family, font-size,
     font-weight, AND line-height on the child \u2014 which (a) shrank the
     button height (line-height changes propagate through the flex
     content box) and (b) scaled em-based icons / font-icons inside the
     child to whatever the wrapper inherited. The wrapper now stays out
     of the child's typography entirely; consumers who want typographic
     normalization can apply it themselves on the child element. */
}

[data-ctmb-metal-fx-reflection] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  z-index: 0;
  isolation: isolate;
}
.ctmb-metal-fx-reflection-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: blur(4px) saturate(1.2) brightness(1.58);
}
.ctmb-metal-fx-reflection-stroke-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: saturate(1.35) brightness(1.75);
}
/* Hosts that participate as reflection targets need positioning + isolation
   so the wrap composites only against the host (not the parent stack). The
   wrap injects these inline as well, but stating them here keeps reflections
   working on hosts that already have other inline styles applied. */
[data-ctmb-metal-fx-reflect-host] {
  isolation: isolate;
}
`,vs=!1,Bc=null;function E1(){if(vs||typeof document>"u")return;if(document.getElementById(R1)){vs=!0;return}let e=document.createElement("style");e.id=R1,e.textContent=Hb,document.head.appendChild(e),Bc=e,vs=!0}function T1(){Bc?.remove(),Bc=null,vs=!1}var et=rt(nn(),1);var O1={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},ws={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},jv={dark:{...ws.md.dark},light:{...ws.md.light}},en={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},forest:{border:[{color:"rgb(46, 160, 90)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(30, 190, 120)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(70, 180, 70)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(20, 150, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(90, 200, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 170, 110)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(120, 210, 70)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(35, 145, 100)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(60, 195, 140)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(46, 160, 90)",secondary:"rgba(30, 190, 120,, 0.98)"},spikeLt:{primary:"rgb(33, 115, 65)",secondary:"rgb(22, 137, 86)"}},candy:{border:[{color:"rgb(240, 70, 170)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 90, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(215, 60, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 110, 180)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(200, 80, 240)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(250, 60, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(230, 120, 220)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(245, 85, 165)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(210, 70, 230)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 70, 170)",secondary:"rgba(255, 90, 140,, 0.98)"},spikeLt:{primary:"rgb(173, 50, 122)",secondary:"rgb(184, 65, 101)"}},ice:{border:[{color:"rgb(90, 200, 240)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 175, 230)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(130, 220, 250)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(70, 190, 215)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(110, 210, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(50, 165, 220)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(150, 230, 250)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(85, 195, 235)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(65, 180, 245)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(90, 200, 240)",secondary:"rgba(60, 175, 230,, 0.98)"},spikeLt:{primary:"rgb(65, 144, 173)",secondary:"rgb(43, 126, 166)"}},gold:{border:[{color:"rgb(240, 190, 60)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 210, 90)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(225, 165, 40)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(250, 200, 70)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 225, 120)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(230, 175, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(245, 205, 85)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(215, 155, 35)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 215, 100)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 190, 60)",secondary:"rgba(255, 210, 90,, 0.98)"},spikeLt:{primary:"rgb(173, 137, 43)",secondary:"rgb(184, 151, 65)"}}},I1={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},forest:{border:[{color:"rgb(46, 160, 90)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 190, 120)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(70, 180, 70)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(20, 150, 130)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(90, 200, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(40, 170, 110)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(120, 210, 70)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(35, 145, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 195, 140,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(46, 160, 90,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(30, 190, 120,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(70, 180, 70,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(20, 150, 130,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 200, 80,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 170, 110,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(120, 210, 70,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},candy:{border:[{color:"rgb(240, 70, 170)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 90, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(215, 60, 200)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 110, 180)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(200, 80, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(250, 60, 150)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(230, 120, 220)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(245, 85, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(210, 70, 230,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 70, 170,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 90, 140,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(215, 60, 200,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 110, 180,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(200, 80, 240,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(250, 60, 150,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(230, 120, 220,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},ice:{border:[{color:"rgb(90, 200, 240)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(60, 175, 230)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(130, 220, 250)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(70, 190, 215)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(110, 210, 255)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(50, 165, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(150, 230, 250)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(85, 195, 235)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(65, 180, 245,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(90, 200, 240,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(60, 175, 230,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(130, 220, 250,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(70, 190, 215,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(110, 210, 255,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(50, 165, 220,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(150, 230, 250,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(240, 190, 60)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 210, 90)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(225, 165, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 200, 70)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 225, 120)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(230, 175, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(245, 205, 85)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 155, 35)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 100,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 190, 60,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 210, 90,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(225, 165, 40,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(250, 200, 70,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 225, 120,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(230, 175, 50,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(245, 205, 85,, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function Nb(e){return I1[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Wb(e){return I1[e].inner.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Db(e){return en[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Bb(e){let t=en[e],r=e==="mono"?.225:.45;return t.border.map(n=>{let o=n.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${n.size.split(" ").map(a=>{let s=parseInt(a);return`${Math.round(s*.9)}px`}).join(" ")} at ${n.pos}, ${o}, transparent)`}).join(`,
    `)}function Xb(e,t){let r=en[e];return t?r.spike:r.spikeLt}var Gb={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},forest:{dark:[{color:"rgb(46, 160, 90)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(30, 190, 120)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(70, 180, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(20, 150, 130)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(90, 200, 80)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(40, 170, 110)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(120, 210, 70)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(35, 145, 100)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(60, 195, 140)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(33, 115, 65)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(22, 137, 86)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 130, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(14, 108, 94)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(65, 144, 58)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(29, 122, 79)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(86, 151, 50)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(25, 104, 72)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(43, 140, 101)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},candy:{dark:[{color:"rgb(240, 70, 170)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 90, 140)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(215, 60, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 110, 180)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(200, 80, 240)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(250, 60, 150)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(230, 120, 220)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(245, 85, 165)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(210, 70, 230)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 50, 122)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 65, 101)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(155, 43, 144)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(184, 79, 130)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(144, 58, 173)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(180, 43, 108)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(166, 86, 158)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(176, 61, 119)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(151, 50, 166)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ice:{dark:[{color:"rgb(90, 200, 240)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 175, 230)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(130, 220, 250)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(70, 190, 215)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(110, 210, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(50, 165, 220)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(150, 230, 250)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(85, 195, 235)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(65, 180, 245)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(65, 144, 173)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(43, 126, 166)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(94, 158, 180)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(50, 137, 155)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(79, 151, 184)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(36, 119, 158)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(108, 166, 180)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(61, 140, 169)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(47, 130, 176)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(240, 190, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 210, 90)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(225, 165, 40)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(250, 200, 70)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 225, 120)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(230, 175, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(245, 205, 85)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 155, 35)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 215, 100)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 137, 43)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 151, 65)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(162, 119, 29)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 144, 50)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(184, 162, 86)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(166, 126, 36)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(176, 148, 61)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(155, 112, 25)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(184, 155, 72)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function Ub(e,t,r){return Gb[e][t?"dark":"light"].map(o=>{let i=o.offsetX===0?"":o.offsetX>0?` + ${o.offsetX}px`:` - ${Math.abs(o.offsetX)}px`,a=o.offsetY===0?"":o.offsetY>0?` + ${o.offsetY}px`:` - ${Math.abs(o.offsetY)}px`;return`radial-gradient(ellipse calc(${o.sizeW}px * var(--beam-w-${r})) calc(${o.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${i}) calc(100%${a}), ${o.color}, transparent)`}).join(`,
       `)}var Yb={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],forest:[{color:"rgba(46, 160, 90,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(30, 190, 120,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(70, 180, 70,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(20, 150, 130,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(90, 200, 80,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(40, 170, 110,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(120, 210, 70,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(35, 145, 100,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(60, 195, 140,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],candy:[{color:"rgba(240, 70, 170,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 90, 140,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(215, 60, 200,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 110, 180,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(200, 80, 240,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(250, 60, 150,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(230, 120, 220,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(245, 85, 165,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(210, 70, 230,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ice:[{color:"rgba(90, 200, 240,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 175, 230,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(130, 220, 250,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(70, 190, 215,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(110, 210, 255,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(50, 165, 220,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(150, 230, 250,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(85, 195, 235,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(65, 180, 245,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(240, 190, 60,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 210, 90,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(225, 165, 40,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(250, 200, 70,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 225, 120,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(230, 175, 50,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(245, 205, 85,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 155, 35,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 215, 100,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function Vb(e,t){return Yb[e].map(n=>{let o=n.offsetX===0?"":n.offsetX>0?` + ${n.offsetX}px`:` - ${Math.abs(n.offsetX)}px`,i=n.offsetY===0?"":` - ${Math.abs(n.offsetY)}px`;return`radial-gradient(ellipse calc(${n.sizeW}px * var(--beam-w-${t})) calc(${n.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${o}) calc(100%${i}), ${n.color}, transparent)`}).join(`,
    `)}var jb={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},forest:{dark:{spikes:[{color1:"rgb(46, 160, 90)",color2:"rgb(30, 190, 120)"},{color1:"rgba(70, 180, 70,, 0.59)",color2:"rgba(20, 150, 130,, 0.29)"},{color1:"rgb(90, 200, 80)",color2:"rgb(40, 170, 110)"},{color1:"rgba(120, 210, 70,, 0.91)",color2:"rgba(35, 145, 100,, 0.45)"},{color1:"rgb(60, 195, 140)",color2:"rgb(46, 160, 90)"}]},light:{spikes:[{color1:"rgb(33, 115, 65)",color2:"rgba(22, 137, 86,, 0.8)"},{color1:"rgba(50, 130, 50,, 0.7)",color2:"rgba(14, 108, 94,, 0.46)"},{color1:"rgb(65, 144, 58)",color2:"rgba(29, 122, 79,, 0.82)"},{color1:"rgb(86, 151, 50)",color2:"rgba(25, 104, 72,, 0.7)"},{color1:"rgb(43, 140, 101)",color2:"rgba(33, 115, 65,, 0.78)"}]}},candy:{dark:{spikes:[{color1:"rgb(240, 70, 170)",color2:"rgb(255, 90, 140)"},{color1:"rgba(215, 60, 200,, 0.59)",color2:"rgba(255, 110, 180,, 0.29)"},{color1:"rgb(200, 80, 240)",color2:"rgb(250, 60, 150)"},{color1:"rgba(230, 120, 220,, 0.91)",color2:"rgba(245, 85, 165,, 0.45)"},{color1:"rgb(210, 70, 230)",color2:"rgb(240, 70, 170)"}]},light:{spikes:[{color1:"rgb(173, 50, 122)",color2:"rgba(184, 65, 101,, 0.8)"},{color1:"rgba(155, 43, 144,, 0.7)",color2:"rgba(184, 79, 130,, 0.46)"},{color1:"rgb(144, 58, 173)",color2:"rgba(180, 43, 108,, 0.82)"},{color1:"rgb(166, 86, 158)",color2:"rgba(176, 61, 119,, 0.7)"},{color1:"rgb(151, 50, 166)",color2:"rgba(173, 50, 122,, 0.78)"}]}},ice:{dark:{spikes:[{color1:"rgb(90, 200, 240)",color2:"rgb(60, 175, 230)"},{color1:"rgba(130, 220, 250,, 0.59)",color2:"rgba(70, 190, 215,, 0.29)"},{color1:"rgb(110, 210, 255)",color2:"rgb(50, 165, 220)"},{color1:"rgba(150, 230, 250,, 0.91)",color2:"rgba(85, 195, 235,, 0.45)"},{color1:"rgb(65, 180, 245)",color2:"rgb(90, 200, 240)"}]},light:{spikes:[{color1:"rgb(65, 144, 173)",color2:"rgba(43, 126, 166,, 0.8)"},{color1:"rgba(94, 158, 180,, 0.7)",color2:"rgba(50, 137, 155,, 0.46)"},{color1:"rgb(79, 151, 184)",color2:"rgba(36, 119, 158,, 0.82)"},{color1:"rgb(108, 166, 180)",color2:"rgba(61, 140, 169,, 0.7)"},{color1:"rgb(47, 130, 176)",color2:"rgba(65, 144, 173,, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(240, 190, 60)",color2:"rgb(255, 210, 90)"},{color1:"rgba(225, 165, 40,, 0.59)",color2:"rgba(250, 200, 70,, 0.29)"},{color1:"rgb(255, 225, 120)",color2:"rgb(230, 175, 50)"},{color1:"rgba(245, 205, 85,, 0.91)",color2:"rgba(215, 155, 35,, 0.45)"},{color1:"rgb(255, 215, 100)",color2:"rgb(240, 190, 60)"}]},light:{spikes:[{color1:"rgb(173, 137, 43)",color2:"rgba(184, 151, 65,, 0.8)"},{color1:"rgba(162, 119, 29,, 0.7)",color2:"rgba(180, 144, 50,, 0.46)"},{color1:"rgb(184, 162, 86)",color2:"rgba(166, 126, 36,, 0.82)"},{color1:"rgb(176, 148, 61)",color2:"rgba(155, 112, 25,, 0.7)"},{color1:"rgb(184, 155, 72)",color2:"rgba(173, 137, 43,, 0.78)"}]}}};function ys(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${t})`;let n=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${t})`:e}function Jr(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*t).toFixed(2)})`;let n=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${t.toFixed(2)})`:e}function Qb(e,t,r){let n=Xb(e,t),o=jb[e][t?"dark":"light"],i=e==="mono",a=i?.14:1,s=i?Jr(n.primary,.14):n.primary,l=i?Jr(n.primary,.09):n.primary,u=i?Jr(n.secondary,.12):n.secondary,d=i?ys(n.secondary,.06):ys(n.secondary,.49),c=o.spikes.map(O=>i?{color1:Jr(O.color1,a),color2:Jr(O.color2,a*.7)}:O),m=i?"12px":"0.8px",h=i?"14px":"2px",x=i?"12px":"1.2px",b=i?"10px":"0.6px",y=i?"42px":"92px",f=i?"38px":"72px",p=i?"40px":"85px",g=i?"32px":"60px",v=i?"12px":"1px",w=i?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",k=i?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",z=i?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",_=i?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",T=i?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",C=i?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(t)return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${s}, ${l} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${u}, ${d} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${f} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${c[0].color1}, ${c[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${c[1].color1}, ${c[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${c[2].color1}, ${c[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${c[3].color1}, ${c[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${b} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${c[4].color1}, ${c[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${w} 0%, ${k} 20%, ${z} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${_} 0%, ${T} 25%, ${C} 55%, transparent 80%)`;{let O=i?Jr(n.primary,.11):ys(n.primary,.85),D=i?Jr(n.secondary,.09):ys(n.secondary,.7);return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${s}, ${O} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${u}, ${D} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${f} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${c[0].color1}, ${c[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${c[1].color1}, ${c[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${c[2].color1}, ${c[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${c[3].color1}, ${c[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${v} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${c[4].color1}, ${c[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}var F1=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],qb=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],Kb=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],L1=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],Zb=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function Jb(e,t,r){let n=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return`rgba(${n?`${n[1]}, ${n[2]}, ${n[3]}`:"255, 255, 255"}, var(--bop-${t}-${r}))`}function Xc(e,t,r,n,o,i,a,s){return`radial-gradient(ellipse calc(${t}px * var(--bw${n}-${s}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r}px * var(--bh${n}-${s}) * var(--bgh-${s}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${i} + var(--bx${n}-${s})) calc(${a} + var(--by${n}-${s})), ${Jb(e,o,s)}, transparent)`}function ex(e,t){return en[e].border.map((r,n)=>{let{region:o,quad:i}=F1[n],[a,s]=r.pos.split(" "),[l,u]=r.size.split(" ").map(parseFloat);return Xc(r.color,l,u,o,i,a,s,t)}).join(`,
    `)}function tx(e,t,r){let o=en[e].border.map((u,d)=>{let{region:c,quad:m}=F1[d],[h,x]=u.pos.split(" "),[b,y]=qb[d];return Xc(u.color,b,y,c,m,h,x,t)}),i=r?"255, 255, 255":"0, 0, 0",a=r?.18:.08,l=[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([u,d,c])=>`radial-gradient(ellipse 60px 60px at ${u} ${d}, rgba(${i}, calc(${a} * var(--bop-${c}-${t}))), transparent 70%)`);return[...o,...l].join(`,
    `)}function P1(e,t,r){let n=en[t].border;return e.map(o=>{let i=n[o.ci],[a,s]=i.pos.split(" ");return Xc(i.color,o.w,o.h,o.region,o.quad,o.x??a,o.y??s,r)}).join(`,
    `)}function A1(e,t,r){let n=en[t].border,o=+r.toFixed(3);return e.map(i=>{let a=n[i.ci],[s,l]=a.pos.split(" "),u=i.x??s,d=i.y??l,c=a.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),m=c?`${c[1]}, ${c[2]}, ${c[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${i.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${i.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${u} ${d}, rgba(${m}, ${o}), transparent)`}).join(`,
    `)}function mi(e){return`
[data-beam="${e}"][data-paused],
[data-beam="${e}"][data-paused]::after,
[data-beam="${e}"][data-paused]::before,
[data-beam="${e}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function H1(e){let t=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"],r=["bx1","by1","bx2","by2","bx3","by3"],n=t.map(i=>`@property --${i}-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`).join(`

`),o=r.map(i=>`@property --${i}-${e} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`).join(`

`);return`${n}

${o}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`}function N1(e,t,r){let n=t==="dark",o=r/2.3;return e==="pulse-inner"?{sp:.28,dr:n?33:40,op:n?.48:.45,gh:n?.34:.22,bs:(n?1.9:2.6)*o,ss:(n?2.6:4.6)*o,ghs:(n?2.4:5.5)*o,huePeriod:16}:{sp:n?.28:.36,dr:n?14:19,op:n?.46:0,gh:n?.16:.58,bs:(n?2.3:3.7)*o,ss:(n?6.4:4.6)*o,ghs:(n?2.4:3.8)*o,huePeriod:14}}function Ss(e,t,r){return`  animation: ${t}-${e} ${r}s ease forwards;`}function Cr(e,t=1){return Math.max(.5,Math.round(e*t*100)/100)}function W1(e){let{size:t}=e;return t==="line"?ax(e):t==="sm"?rx(e):t==="pulse-inner"?ox(e):t==="pulse-outside"?ix(e):nx(e)}function rx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,innerShadow:l,colorVariant:u,staticColors:d,brightness:c,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,y=Math.max(0,r-n),f=u==="mono"?.5:1,p=i*f,g=a*f,v=s*f,w=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,z=x==="dark",_=z?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,T=Nb(u),C=Wb(u),O=z?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,D=`conic-gradient(
    from var(--beam-angle-${t}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  padding: ${n}px;
  clip-path: inset(0 round ${r}px);
  background: ${_},${T};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${p.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${w}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${C};
  box-shadow: inset 0 0 5px 1px ${l};
  -webkit-mask-image: ${D};
  -webkit-mask-composite: source-over;
  mask-image: ${D};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${g.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${w}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  clip-path: inset(0 round ${r}px);
  background: ${O};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  filter: blur(${Cr(8,b)}px) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${v.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${k}
${mi(t)}
`}function nx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,innerShadow:l,colorVariant:u,staticColors:d,brightness:c,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,y=Math.max(0,r-n),f=u==="mono"?.5:1,p=i*f,g=a*f,v=s*f,w=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,z=x==="dark",_=z?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,T=Db(u),C=Bb(u),O=z?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  padding: ${n}px;
  clip-path: inset(0 round ${r}px);
  background: ${_},${T};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${p.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${w}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${C};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${g.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${w}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  clip-path: inset(0 round ${r}px);
  background: ${O};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  filter: blur(${Cr(8,b)}px) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${v.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${k}
${mi(t)}
`}function ox(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,colorVariant:l,staticColors:u,brightness:d,saturation:c,hueRange:m,theme:h,glowSize:x=1}=e,b=h==="dark",y=l==="mono"?.5:1,f=(i*y).toFixed(2),p=(a*y).toFixed(2),g=(s*y).toFixed(2),{op:v}=N1("pulse-inner",h,o),w=Cr(8,x),k=d.toFixed(2),z=c.toFixed(2),_=u?`filter: brightness(${k}) saturate(${z});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${k}) saturate(${z});`,T=u?`filter: blur(${w}px) brightness(${k}) saturate(${z});`:`filter: blur(${w}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${k}) saturate(${z});`,C=ex(l,t),O=tx(l,t,b),D=A1(Kb,l,1-v*.5);return`
${H1(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${Ss(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${Ss(t,"beam-fade-out",.5)}
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: ${n}px;
  clip-path: inset(0 round ${r}px);
  background: ${C};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${f} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${_}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${O};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${p} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${_}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${D};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${g} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${T}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${mi(t)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${t}"][data-active],
  [data-beam="${t}"][data-fading],
  [data-beam="${t}"][data-active]::after,
  [data-beam="${t}"][data-fading]::after,
  [data-beam="${t}"][data-active]::before,
  [data-beam="${t}"][data-fading]::before,
  [data-beam="${t}"][data-active] [data-beam-bloom],
  [data-beam="${t}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function ix(e){let{id:t,borderRadius:r,duration:n,strokeOpacity:o,innerOpacity:i,bloomOpacity:a,colorVariant:s,staticColors:l,brightness:u,saturation:d,hueRange:c,theme:m,hairlineOpacity:h=0,glowSize:x=1}=e,b=m==="dark",y=s==="mono"?.5:1,f=(o*y).toFixed(2),p=(i*y).toFixed(2),g=(a*y).toFixed(2),v=b?"70, 70, 70":"0, 0, 0",w=h.toFixed(2),k=`linear-gradient(rgba(${v}, ${w}), rgba(${v}, ${w}))`,{op:z}=N1("pulse-outside",m,n),_=.95,T=.9,C=Cr(b?3:6,x),O=Cr(b?22.5:15,x),D=u.toFixed(2),$=d.toFixed(2),P=l?`filter: brightness(${D}) saturate(${$});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${D}) saturate(${$});`,V=`brightness(var(--beam-glow-brightness, ${D})) saturate(var(--beam-glow-saturate, ${$}))`,B=l?`filter: blur(var(--beam-core-blur, ${C}px)) ${V};`:`filter: blur(var(--beam-core-blur, ${C}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${V};`,L=l?`filter: blur(var(--beam-bloom-blur, ${O}px)) ${V};`:`filter: blur(var(--beam-bloom-blur, ${O}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${V};`,W=P1(L1,s,t),H=P1(L1,s,t),K=A1(Zb,s,1-z*.5),U=h>0?`${W},
    ${k}`:W;return`
${H1(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${Ss(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${Ss(t,"beam-fade-out",.5)}
}
${h>0?`
/* Idle hairline \u2014 painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${t}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${k};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
`:""}
[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${U};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${f} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${P}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${r+10}px;
  background: ${H};
  transform: scale(${_}, ${T});
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${p} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${B}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${r+30}px;
  background: ${K};
  transform: scale(${_}, ${T});
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${g} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${L}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${mi(t)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${t}"][data-active],
  [data-beam="${t}"][data-fading],
  [data-beam="${t}"][data-active]::after,
  [data-beam="${t}"][data-fading]::after,
  [data-beam="${t}"][data-active]::before,
  [data-beam="${t}"][data-fading]::before,
  [data-beam="${t}"][data-active] [data-beam-bloom],
  [data-beam="${t}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function ax(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,innerShadow:l,colorVariant:u,staticColors:d,brightness:c,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,y=Math.max(0,r-n),f=x==="dark",p=i,g=a,v=s,w=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=d?"":`animation: beam-hue-shift-bloom-${t} 8s ease-in-out infinite;`,z=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${t} {
  0% { filter: blur(${Cr(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: blur(${Cr(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h+10}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: blur(${Cr(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${c.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,_=f?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,T=Ub(u,f,t),C=Vb(u,t),O=Qb(u,f,t),D=u==="mono"?"filter: blur(6px);":"";return`
@property --beam-x-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-travel-${t} ${o}s linear infinite,
    beam-edge-fade-${t} ${o}s linear infinite,
    beam-breathe-${t} ${(o*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(o*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(o*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-travel-${t} ${o}s linear infinite,
    beam-edge-fade-${t} ${o}s linear infinite,
    beam-breathe-${t} ${(o*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(o*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(o*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  padding: ${n}px;
  clip-path: inset(0 round ${r}px);
  background: ${_}, ${T};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${p.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${w}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${C};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${g.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${w}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${y}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${O};
  ${D}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${v.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${k}
}

@keyframes beam-travel-${t} {
  0%   { --beam-x-${t}: 0.06;  --beam-w-${t}: 0.5; }
  10%  { --beam-x-${t}: 0.15;  --beam-w-${t}: 0.8; }
  20%  { --beam-x-${t}: 0.25;  --beam-w-${t}: 1.1; }
  30%  { --beam-x-${t}: 0.35;  --beam-w-${t}: 1.3; }
  40%  { --beam-x-${t}: 0.44;  --beam-w-${t}: 1.45; }
  50%  { --beam-x-${t}: 0.5;   --beam-w-${t}: 1.5; }
  60%  { --beam-x-${t}: 0.56;  --beam-w-${t}: 1.45; }
  70%  { --beam-x-${t}: 0.65;  --beam-w-${t}: 1.3; }
  80%  { --beam-x-${t}: 0.75;  --beam-w-${t}: 1.1; }
  90%  { --beam-x-${t}: 0.85;  --beam-w-${t}: 0.8; }
  100% { --beam-x-${t}: 0.94;  --beam-w-${t}: 0.5; }
}

@keyframes beam-edge-fade-${t} {
  0%    { --beam-edge-${t}: 0; }
  12.5% { --beam-edge-${t}: 0; }
  32.5% { --beam-edge-${t}: 1; }
  67.5% { --beam-edge-${t}: 1; }
  87.5% { --beam-edge-${t}: 0; }
  100%  { --beam-edge-${t}: 0; }
}

@keyframes beam-breathe-${t} {
  0%, 100% { --beam-h-${t}: 0.8; }
  25%      { --beam-h-${t}: 1.25; }
  55%      { --beam-h-${t}: 0.85; }
  80%      { --beam-h-${t}: 1.3; }
}

@keyframes beam-spike-${t} {
  0%   { --beam-spike-${t}: 0.8; }
  25%  { --beam-spike-${t}: 1.3; }
  50%  { --beam-spike-${t}: 0.9; }
  75%  { --beam-spike-${t}: 1.4; }
  100% { --beam-spike-${t}: 0.8; }
}

@keyframes beam-spike2-${t} {
  0%   { --beam-spike2-${t}: 1.2; }
  25%  { --beam-spike2-${t}: 0.7; }
  50%  { --beam-spike2-${t}: 1.4; }
  75%  { --beam-spike2-${t}: 0.8; }
  100% { --beam-spike2-${t}: 1.2; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${z}
${mi(t)}
`}async function D1(e,t,r,n){let o=Math.min(n,2,Math.sqrt(4e6/(t*r*e.length))),i=Math.max(1,Math.ceil(t*o)),a=Math.max(1,Math.ceil(r*o));return Promise.all(e.map(async({key:s,css:l})=>{let u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("width",String(i)),u.setAttribute("height",String(a)),u.setAttribute("viewBox",`0 0 ${t} ${r}`);let d=document.createElementNS(u.namespaceURI,"foreignObject");d.setAttribute("width",String(t)),d.setAttribute("height",String(r));let c=document.createElement("div");c.style.cssText="width:100%;height:100%;color-scheme:normal";let m=document.createElement("style");m.textContent=`*{box-sizing:border-box}${l}`;let h=document.createElement("div");h.setAttribute("data-beam",s),h.setAttribute("data-active",""),h.style.cssText="width:100%;height:100%";let x=document.createElement("div");x.setAttribute("data-beam-bloom",""),h.append(x),c.append(m,h),d.append(c),u.append(d);let b=new Image;b.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(u))}`,await b.decode();let y=document.createElement("canvas");y.width=i,y.height=a;let f=y.getContext("2d");if(!f)throw Error("Beam raster context unavailable");f.drawImage(b,0,0,i,a);let p=y.toDataURL("image/png");y.width=y.height=1,b.src="";let g=new Image;return g.src=p,await g.decode(),p}))}var Jt=rt(Zr(),1);function B1({radius:e,theme:t,running:r,paused:n}){let o=(0,et.useRef)(null),i=(0,et.useId)().replace(/:/g,"-"),[a,s]=(0,et.useState)(null),l=(0,et.useMemo)(()=>Array.from({length:4},(d,c)=>{let m=`ctmb-cache-${i}-${c}`,h=ws.md[t],x=W1({id:m,size:"md",theme:t,colorVariant:"ocean",borderRadius:e,borderWidth:O1.md.borderWidth,duration:16,...h,staticColors:!0,brightness:1.5,saturation:.9,hueRange:0,glowSize:1.3});return{key:m,css:x+`
[data-beam="${m}"][data-active]{animation:none!important;--beam-angle-${m}:${c*90}deg;--beam-opacity-${m}:1}`}}),[i,e,t]);(0,et.useEffect)(()=>{let d=!0,c=0,m=0,h="",x=()=>{c=0;let f=o.current?.getBoundingClientRect();if(!f?.width||!f?.height)return;let p=window.devicePixelRatio||1,g=[f.width,f.height,p].join(",");if(h===g)return;h=g;let v=++m;D1(l,f.width,f.height,p).then(w=>{d&&v===m&&s({frames:l,images:w})}).catch(()=>{})},b=()=>{clearTimeout(c),c=setTimeout(x,80)},y=new ResizeObserver(b);return y.observe(o.current),window.addEventListener("resize",b,{passive:!0}),x(),()=>{d=!1,m++,clearTimeout(c),y.disconnect(),window.removeEventListener("resize",b)}},[l]),(0,et.useEffect)(()=>{for(let d of o.current?.getAnimations({subtree:!0})??[])d.animationName==="ctmb-beam-crossfade"&&(d.updatePlaybackRate(r?1.5:.8),n?d.pause():d.play())},[n,r,l]);let u=a?.frames===l?a.images:null;return(0,Jt.jsx)("div",{ref:o,className:"ctmb-cached-beam","data-raster":u?"ready":"css",style:{borderRadius:e,opacity:r?1:.82},children:l.map(({key:d,css:c},m)=>(0,Jt.jsxs)(et.default.Fragment,{children:[!u&&(0,Jt.jsx)("style",{children:c}),(0,Jt.jsx)("div",{className:"ctmb-beam-frame",style:{animationDelay:`${-m*4}s`},children:u?(0,Jt.jsx)("img",{src:u[m],alt:"",draggable:!1,className:"ctmb-beam-texture"}):(0,Jt.jsx)("div",{"data-beam":d,"data-active":"",style:{width:"100%",height:"100%",borderRadius:e},children:(0,Jt.jsx)("div",{"data-beam-bloom":""})})})]},d))})}var gi=rt(Zr(),1),Uc=new Set,$r=0,Yc=!1,ks=!1,Vc=class extends zs.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(t){this.props.onError?.(t)}render(){return this.state.failed?null:this.props.children}};function sx({neighbors:e,radius:t,variant:r,theme:n,strength:o,paused:i,preset:a,glowPortal:s}){let l=(0,zs.useRef)(null);return(0,gi.jsx)(Dc,{ref:l,preset:a,variant:r,theme:n,borderRadius:t,strength:o,paused:i,reflectionTargets:e,glowPortal:s,innerShadow:!0,style:{width:"100%",height:"100%"},children:(0,gi.jsx)("span",{style:{display:"block",width:"100%",height:"100%",borderRadius:t}})})}var lx=B1;function G1(e,t,r,n){let o=(0,X1.createRoot)(t,{identifierPrefix:"ctmb-"}),i=l=>(0,Gc.flushSync)(()=>o.render((0,gi.jsx)(Vc,{onError:n,children:(0,gi.jsx)(e,{...l})}))),a=!0,s={update:i,dispose(){a&&(a=!1,(0,Gc.flushSync)(()=>o.unmount()),Uc.delete(s))}};return Uc.add(s),i(r),s}var u5=(e,t,r)=>G1(sx,e,t,r),c5=(e,t,r)=>G1(lx,e,t,r);function f5(){ks||(ks=!0,vm({enabled:!1}),b1({enabled:!1}),E1(),Yp())}function d5(e){if(Yc=e,$r&&cancelAnimationFrame($r),$r=0,!e){oc();return}let t=()=>{$r=0,!(!ks||!Yc||!S)&&([...S.instances].some(r=>r.visible&&!r.everCopied)?(oc(),$r=requestAnimationFrame(t)):tm())};t()}function p5(e){am(e?1e3/12:1e3/6)}function m5(){return{webgl:!!S,instances:S?.instances.size??0,reflections:w1(),frames:S?.frameCount??0,...sm(),paused:Yc}}function g5(){ks=!1,$r&&cancelAnimationFrame($r),$r=0;for(let e of[...Uc])e.dispose();y1(),k1(),Vp(),document.getElementById("ctmb-mfx-bend-style")?.remove(),T1()}export{g5 as disposeRuntime,v1 as invalidateReflectionGeometry,Qu as isMetalFxSupported,c5 as mountBeam,u5 as mountMetal,m5 as runtimeState,p5 as setActivity,d5 as setMotionPaused,f5 as startRuntime};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
