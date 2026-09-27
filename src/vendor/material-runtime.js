var M1=Object.create;var df=Object.defineProperty;var C1=Object.getOwnPropertyDescriptor;var R1=Object.getOwnPropertyNames;var E1=Object.getPrototypeOf,$1=Object.prototype.hasOwnProperty;var Ht=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var T1=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of R1(t))!$1.call(e,o)&&o!==r&&df(e,o,{get:()=>t[o],enumerable:!(n=C1(t,o))||n.enumerable});return e};var nt=(e,t,r)=>(r=e!=null?M1(E1(e)):{},T1(t||!e||!e.__esModule?df(r,"default",{value:e,enumerable:!0}):r,e));var _f=Ht(G=>{"use strict";var uo=Symbol.for("react.element"),P1=Symbol.for("react.portal"),L1=Symbol.for("react.fragment"),O1=Symbol.for("react.strict_mode"),I1=Symbol.for("react.profiler"),F1=Symbol.for("react.provider"),A1=Symbol.for("react.context"),H1=Symbol.for("react.forward_ref"),D1=Symbol.for("react.suspense"),N1=Symbol.for("react.memo"),W1=Symbol.for("react.lazy"),pf=Symbol.iterator;function B1(e){return e===null||typeof e!="object"?null:(e=pf&&e[pf]||e["@@iterator"],typeof e=="function"?e:null)}var hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bf=Object.assign,xf={};function ln(e,t,r){this.props=e,this.context=t,this.refs=xf,this.updater=r||hf}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vf(){}vf.prototype=ln.prototype;function Is(e,t,r){this.props=e,this.context=t,this.refs=xf,this.updater=r||hf}var Fs=Is.prototype=new vf;Fs.constructor=Is;bf(Fs,ln.prototype);Fs.isPureReactComponent=!0;var mf=Array.isArray,yf=Object.prototype.hasOwnProperty,As={current:null},wf={key:!0,ref:!0,__self:!0,__source:!0};function Sf(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)yf.call(t,n)&&!wf.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:uo,type:e,key:i,ref:a,props:o,_owner:As.current}}function X1(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function G1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var gf=/\/+/g;function Os(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G1(""+e.key):t.toString(36)}function Ei(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case uo:case P1:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+Os(a,0):n,mf(o)?(r="",e!=null&&(r=e.replace(gf,"$&/")+"/"),Ei(o,t,r,"",function(u){return u})):o!=null&&(Hs(o)&&(o=X1(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(gf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",mf(e))for(var s=0;s<e.length;s++){i=e[s];var l=n+Os(i,s);a+=Ei(i,t,r,l,o)}else if(l=B1(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=n+Os(i,s++),a+=Ei(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ri(e,t,r){if(e==null)return e;var n=[],o=0;return Ei(e,n,"","",function(i){return t.call(r,i,o++)}),n}function U1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},$i={transition:null},Y1={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:$i,ReactCurrentOwner:As};function kf(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Ri,forEach:function(e,t,r){Ri(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ri(e,function(){t++}),t},toArray:function(e){return Ri(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=ln;G.Fragment=L1;G.Profiler=I1;G.PureComponent=Is;G.StrictMode=O1;G.Suspense=D1;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;G.act=kf;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=bf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=As.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)yf.call(t,l)&&!wf.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:uo,type:e.type,key:o,ref:i,props:n,_owner:a}};G.createContext=function(e){return e={$$typeof:A1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:F1,_context:e},e.Consumer=e};G.createElement=Sf;G.createFactory=function(e){var t=Sf.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:H1,render:e}};G.isValidElement=Hs;G.lazy=function(e){return{$$typeof:W1,_payload:{_status:-1,_result:e},_init:U1}};G.memo=function(e,t){return{$$typeof:N1,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};G.unstable_act=kf;G.useCallback=function(e,t){return Fe.current.useCallback(e,t)};G.useContext=function(e){return Fe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};G.useEffect=function(e,t){return Fe.current.useEffect(e,t)};G.useId=function(){return Fe.current.useId()};G.useImperativeHandle=function(e,t,r){return Fe.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Fe.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Fe.current.useReducer(e,t,r)};G.useRef=function(e){return Fe.current.useRef(e)};G.useState=function(e){return Fe.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Fe.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Fe.current.useTransition()};G.version="18.3.1"});var un=Ht((Kx,zf)=>{"use strict";zf.exports=_f()});var If=Ht(oe=>{"use strict";function Bs(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(0<Ti(o,t))e[n]=t,e[r]=o,r=n;else break e}}function pt(e){return e.length===0?null:e[0]}function Li(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var a=2*(n+1)-1,s=e[a],l=a+1,u=e[l];if(0>Ti(s,r))l<o&&0>Ti(u,s)?(e[n]=u,e[l]=r,n=l):(e[n]=s,e[a]=r,n=a);else if(l<o&&0>Ti(u,r))e[n]=u,e[l]=r,n=l;else break e}}return t}function Ti(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Mf=performance,oe.unstable_now=function(){return Mf.now()}):(Ds=Date,Cf=Ds.now(),oe.unstable_now=function(){return Ds.now()-Cf});var Mf,Ds,Cf,Mt=[],rr=[],V1=1,ot=null,Te=3,Oi=!1,Pr=!1,fo=!1,$f=typeof setTimeout=="function"?setTimeout:null,Tf=typeof clearTimeout=="function"?clearTimeout:null,Rf=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xs(e){for(var t=pt(rr);t!==null;){if(t.callback===null)Li(rr);else if(t.startTime<=e)Li(rr),t.sortIndex=t.expirationTime,Bs(Mt,t);else break;t=pt(rr)}}function Gs(e){if(fo=!1,Xs(e),!Pr)if(pt(Mt)!==null)Pr=!0,Ys(Us);else{var t=pt(rr);t!==null&&Vs(Gs,t.startTime-e)}}function Us(e,t){Pr=!1,fo&&(fo=!1,Tf(po),po=-1),Oi=!0;var r=Te;try{for(Xs(t),ot=pt(Mt);ot!==null&&(!(ot.expirationTime>t)||e&&!Of());){var n=ot.callback;if(typeof n=="function"){ot.callback=null,Te=ot.priorityLevel;var o=n(ot.expirationTime<=t);t=oe.unstable_now(),typeof o=="function"?ot.callback=o:ot===pt(Mt)&&Li(Mt),Xs(t)}else Li(Mt);ot=pt(Mt)}if(ot!==null)var i=!0;else{var a=pt(rr);a!==null&&Vs(Gs,a.startTime-t),i=!1}return i}finally{ot=null,Te=r,Oi=!1}}var Ii=!1,Pi=null,po=-1,Pf=5,Lf=-1;function Of(){return!(oe.unstable_now()-Lf<Pf)}function Ns(){if(Pi!==null){var e=oe.unstable_now();Lf=e;var t=!0;try{t=Pi(!0,e)}finally{t?co():(Ii=!1,Pi=null)}}else Ii=!1}var co;typeof Rf=="function"?co=function(){Rf(Ns)}:typeof MessageChannel<"u"?(Ws=new MessageChannel,Ef=Ws.port2,Ws.port1.onmessage=Ns,co=function(){Ef.postMessage(null)}):co=function(){$f(Ns,0)};var Ws,Ef;function Ys(e){Pi=e,Ii||(Ii=!0,co())}function Vs(e,t){po=$f(function(){e(oe.unstable_now())},t)}oe.unstable_IdlePriority=5;oe.unstable_ImmediatePriority=1;oe.unstable_LowPriority=4;oe.unstable_NormalPriority=3;oe.unstable_Profiling=null;oe.unstable_UserBlockingPriority=2;oe.unstable_cancelCallback=function(e){e.callback=null};oe.unstable_continueExecution=function(){Pr||Oi||(Pr=!0,Ys(Us))};oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pf=0<e?Math.floor(1e3/e):5};oe.unstable_getCurrentPriorityLevel=function(){return Te};oe.unstable_getFirstCallbackNode=function(){return pt(Mt)};oe.unstable_next=function(e){switch(Te){case 1:case 2:case 3:var t=3;break;default:t=Te}var r=Te;Te=t;try{return e()}finally{Te=r}};oe.unstable_pauseExecution=function(){};oe.unstable_requestPaint=function(){};oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=Te;Te=e;try{return t()}finally{Te=r}};oe.unstable_scheduleCallback=function(e,t,r){var n=oe.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=r+o,e={id:V1++,callback:t,priorityLevel:e,startTime:r,expirationTime:o,sortIndex:-1},r>n?(e.sortIndex=r,Bs(rr,e),pt(Mt)===null&&e===pt(rr)&&(fo?(Tf(po),po=-1):fo=!0,Vs(Gs,r-n))):(e.sortIndex=o,Bs(Mt,e),Pr||Oi||(Pr=!0,Ys(Us))),e};oe.unstable_shouldYield=Of;oe.unstable_wrapCallback=function(e){var t=Te;return function(){var r=Te;Te=t;try{return e.apply(this,arguments)}finally{Te=r}}}});var Af=Ht((Jx,Ff)=>{"use strict";Ff.exports=If()});var Wp=Ht(Je=>{"use strict";var j1=un(),Ke=Af();function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,Io={};function Ur(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Io[e]=t,e=0;e<t.length;e++)Gd.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,Q1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hf={},Df={};function q1(e){return hl.call(Df,e)?!0:hl.call(Hf,e)?!1:Q1.test(e)?Df[e]=!0:(Hf[e]=!0,!1)}function K1(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z1(e,t,r,n){if(t===null||typeof t>"u"||K1(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var lu=/[\-:]([a-z])/g;function uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lu,uu);Ee[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lu,uu);Ee[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lu,uu);Ee[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function cu(e,t,r,n){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Z1(t,r,o,n)&&(r=null),n||o===null?q1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var jt=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),dn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),pu=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Vd=Symbol.for("react.offscreen"),Nf=Symbol.iterator;function mo(e){return e===null||typeof e!="object"?null:(e=Nf&&e[Nf]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,js;function So(e){if(js===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);js=t&&t[1]||""}return`
`+js+e}var Qs=!1;function qs(e,t){if(!e||Qs)return"";Qs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Qs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?So(e):""}function J1(e){switch(e.tag){case 5:return So(e.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return e=qs(e.type,!1),e;case 11:return e=qs(e.type.render,!1),e;case 1:return e=qs(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case dn:return"Portal";case bl:return"Profiler";case fu:return"StrictMode";case xl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yd:return(e.displayName||"Context")+".Consumer";case Ud:return(e._context.displayName||"Context")+".Provider";case du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pu:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case or:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function th(e){var t=jd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=th(e))}function Qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=jd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,t){var r=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Wf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=xr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qd(e,t){t=t.checked,t!=null&&cu(e,"checked",t,!1)}function Sl(e,t){qd(e,t);var r=xr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,r):t.hasOwnProperty("defaultValue")&&kl(e,t.type,xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function kl(e,t,r){(t!=="number"||fa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ko=Array.isArray;function _n(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+xr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(M(92));if(ko(r)){if(1<r.length)throw Error(M(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:xr(r)}}function Kd(e,t){var r=xr(t.value),n=xr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Gf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hi,Jd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rh=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(e){rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mo[t]=Mo[e]})});function e0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mo.hasOwnProperty(e)&&Mo[e]?(""+t).trim():t+"px"}function t0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=e0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var nh=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(nh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,zn=null,Mn=null;function Uf(e){if(e=ei(e)){if(typeof El!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Da(t),El(e.stateNode,e.type,t))}}function r0(e){zn?Mn?Mn.push(e):Mn=[e]:zn=e}function n0(){if(zn){var e=zn,t=Mn;if(Mn=zn=null,Uf(e),t)for(e=0;e<t.length;e++)Uf(t[e])}}function o0(e,t){return e(t)}function i0(){}var Ks=!1;function a0(e,t,r){if(Ks)return e(t,r);Ks=!0;try{return o0(e,t,r)}finally{Ks=!1,(zn!==null||Mn!==null)&&(i0(),n0())}}function Ao(e,t){var r=e.stateNode;if(r===null)return null;var n=Da(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(M(231,t,typeof r));return r}var $l=!1;if(Gt)try{cn={},Object.defineProperty(cn,"passive",{get:function(){$l=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{$l=!1}var cn;function oh(e,t,r,n,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var Co=!1,da=null,pa=!1,Tl=null,ih={onError:function(e){Co=!0,da=e}};function ah(e,t,r,n,o,i,a,s,l){Co=!1,da=null,oh.apply(ih,arguments)}function sh(e,t,r,n,o,i,a,s,l){if(ah.apply(this,arguments),Co){if(Co){var u=da;Co=!1,da=null}else throw Error(M(198));pa||(pa=!0,Tl=u)}}function Yr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function s0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yf(e){if(Yr(e)!==e)throw Error(M(188))}function lh(e){var t=e.alternate;if(!t){if(t=Yr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Yf(o),e;if(i===n)return Yf(o),t;i=i.sibling}throw Error(M(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?e:t}function l0(e){return e=lh(e),e!==null?u0(e):null}function u0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=u0(e);if(t!==null)return t;e=e.sibling}return null}var c0=Ke.unstable_scheduleCallback,Vf=Ke.unstable_cancelCallback,uh=Ke.unstable_shouldYield,ch=Ke.unstable_requestPaint,ye=Ke.unstable_now,fh=Ke.unstable_getCurrentPriorityLevel,gu=Ke.unstable_ImmediatePriority,f0=Ke.unstable_UserBlockingPriority,ma=Ke.unstable_NormalPriority,dh=Ke.unstable_LowPriority,d0=Ke.unstable_IdlePriority,Ia=null,$t=null;function ph(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Ia,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:hh,mh=Math.log,gh=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(mh(e)/gh|0)|0}var Di=64,Ni=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?n=_o(s):(i&=a,i!==0&&(n=_o(i)))}else a=r&~o,a!==0?n=_o(a):i!==0&&(n=_o(i));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-xt(t),o=1<<r,n|=e[r],t&=~o;return n}function bh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xh(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-xt(i),s=1<<a,l=o[a];l===-1?((s&r)===0||(s&n)!==0)&&(o[a]=bh(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function p0(){var e=Di;return Di<<=1,(Di&4194240)===0&&(Di=64),e}function Zs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Zo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=r}function vh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-xt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function hu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-xt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var ee=0;function m0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var g0,bu,h0,b0,x0,Ll=!1,Wi=[],cr=null,fr=null,dr=null,Ho=new Map,Do=new Map,ar=[],yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Ho.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(t.pointerId)}}function go(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ei(t),t!==null&&bu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function wh(e,t,r,n,o){switch(t){case"focusin":return cr=go(cr,e,t,r,n,o),!0;case"dragenter":return fr=go(fr,e,t,r,n,o),!0;case"mouseover":return dr=go(dr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Ho.set(i,go(Ho.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Do.set(i,go(Do.get(i)||null,e,t,r,n,o)),!0}return!1}function v0(e){var t=Ir(e.target);if(t!==null){var r=Yr(t);if(r!==null){if(t=r.tag,t===13){if(t=s0(r),t!==null){e.blockedOn=t,x0(e.priority,function(){h0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Rl=n,r.target.dispatchEvent(n),Rl=null}else return t=ei(r),t!==null&&bu(t),e.blockedOn=r,!1;t.shift()}return!0}function Qf(e,t,r){ta(e)&&r.delete(t)}function Sh(){Ll=!1,cr!==null&&ta(cr)&&(cr=null),fr!==null&&ta(fr)&&(fr=null),dr!==null&&ta(dr)&&(dr=null),Ho.forEach(Qf),Do.forEach(Qf)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Sh)))}function No(e){function t(o){return ho(o,e)}if(0<Wi.length){ho(Wi[0],e);for(var r=1;r<Wi.length;r++){var n=Wi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(cr!==null&&ho(cr,e),fr!==null&&ho(fr,e),dr!==null&&ho(dr,e),Ho.forEach(t),Do.forEach(t),r=0;r<ar.length;r++)n=ar[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ar.length&&(r=ar[0],r.blockedOn===null);)v0(r),r.blockedOn===null&&ar.shift()}var Cn=jt.ReactCurrentBatchConfig,ha=!0;function kh(e,t,r,n){var o=ee,i=Cn.transition;Cn.transition=null;try{ee=1,xu(e,t,r,n)}finally{ee=o,Cn.transition=i}}function _h(e,t,r,n){var o=ee,i=Cn.transition;Cn.transition=null;try{ee=4,xu(e,t,r,n)}finally{ee=o,Cn.transition=i}}function xu(e,t,r,n){if(ha){var o=Ol(e,t,r,n);if(o===null)il(e,t,n,ba,r),jf(e,n);else if(wh(o,e,t,r,n))n.stopPropagation();else if(jf(e,n),t&4&&-1<yh.indexOf(e)){for(;o!==null;){var i=ei(o);if(i!==null&&g0(i),i=Ol(e,t,r,n),i===null&&il(e,t,n,ba,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else il(e,t,n,null,r)}}var ba=null;function Ol(e,t,r,n){if(ba=null,e=mu(n),e=Ir(e),e!==null)if(t=Yr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=s0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ba=e,null}function y0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fh()){case gu:return 1;case f0:return 4;case ma:case dh:return 16;case d0:return 536870912;default:return 16}default:return 16}}var lr=null,vu=null,ra=null;function w0(){if(ra)return ra;var e,t=vu,r=t.length,n,o="value"in lr?lr.value:lr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return ra=o.slice(e,1<n?1-n:void 0)}function na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function qf(){return!1}function Ze(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bi:qf,this.isPropagationStopped=qf,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=Ze(An),Jo=de({},An,{view:0,detail:0}),zh=Ze(Jo),Js,el,bo,Fa=de({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Js=e.screenX-bo.screenX,el=e.screenY-bo.screenY):el=Js=0,bo=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:el}}),Kf=Ze(Fa),Mh=de({},Fa,{dataTransfer:0}),Ch=Ze(Mh),Rh=de({},Jo,{relatedTarget:0}),tl=Ze(Rh),Eh=de({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),$h=Ze(Eh),Th=de({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ph=Ze(Th),Lh=de({},An,{data:0}),Zf=Ze(Lh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ah(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fh[e])?!!t[e]:!1}function wu(){return Ah}var Hh=de({},Jo,{key:function(e){if(e.key){var t=Oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dh=Ze(Hh),Nh=de({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=Ze(Nh),Wh=de({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Bh=Ze(Wh),Xh=de({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gh=Ze(Xh),Uh=de({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=Ze(Uh),Vh=[9,13,27,32],Su=Gt&&"CompositionEvent"in window,Ro=null;Gt&&"documentMode"in document&&(Ro=document.documentMode);var jh=Gt&&"TextEvent"in window&&!Ro,S0=Gt&&(!Su||Ro&&8<Ro&&11>=Ro),ed=" ",td=!1;function k0(e,t){switch(e){case"keyup":return Vh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Qh(e,t){switch(e){case"compositionend":return _0(t);case"keypress":return t.which!==32?null:(td=!0,ed);case"textInput":return e=t.data,e===ed&&td?null:e;default:return null}}function qh(e,t){if(mn)return e==="compositionend"||!Su&&k0(e,t)?(e=w0(),ra=vu=lr=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return S0&&t.locale!=="ko"?null:t.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kh[e.type]:t==="textarea"}function z0(e,t,r,n){r0(n),t=xa(t,"onChange"),0<t.length&&(r=new yu("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Eo=null,Wo=null;function Zh(e){F0(e,0)}function Aa(e){var t=bn(e);if(Qd(t))return e}function Jh(e,t){if(e==="change")return t}var M0=!1;Gt&&(Gt?(Gi="oninput"in document,Gi||(rl=document.createElement("div"),rl.setAttribute("oninput","return;"),Gi=typeof rl.oninput=="function"),Xi=Gi):Xi=!1,M0=Xi&&(!document.documentMode||9<document.documentMode));var Xi,Gi,rl;function nd(){Eo&&(Eo.detachEvent("onpropertychange",C0),Wo=Eo=null)}function C0(e){if(e.propertyName==="value"&&Aa(Wo)){var t=[];z0(t,Wo,e,mu(e)),a0(Zh,t)}}function e2(e,t,r){e==="focusin"?(nd(),Eo=t,Wo=r,Eo.attachEvent("onpropertychange",C0)):e==="focusout"&&nd()}function t2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Aa(Wo)}function r2(e,t){if(e==="click")return Aa(t)}function n2(e,t){if(e==="input"||e==="change")return Aa(t)}function o2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:o2;function Bo(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!hl.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var r=od(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=od(r)}}function R0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?R0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function E0(){for(var e=window,t=fa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fa(e.document)}return t}function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function i2(e){var t=E0(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&R0(r.ownerDocument.documentElement,r)){if(n!==null&&ku(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=id(r,i);var a=id(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a2=Gt&&"documentMode"in document&&11>=document.documentMode,gn=null,Il=null,$o=null,Fl=!1;function ad(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Fl||gn==null||gn!==fa(n)||(n=gn,"selectionStart"in n&&ku(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),$o&&Bo($o,n)||($o=n,n=xa(Il,"onSelect"),0<n.length&&(t=new yu("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function Ui(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var hn={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionend:Ui("Transition","TransitionEnd")},nl={},$0={};Gt&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ha(e){if(nl[e])return nl[e];if(!hn[e])return e;var t=hn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in $0)return nl[e]=t[r];return e}var T0=Ha("animationend"),P0=Ha("animationiteration"),L0=Ha("animationstart"),O0=Ha("transitionend"),I0=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){I0.set(e,t),Ur(t,[e])}for(Yi=0;Yi<sd.length;Yi++)Vi=sd[Yi],ld=Vi.toLowerCase(),ud=Vi[0].toUpperCase()+Vi.slice(1),yr(ld,"on"+ud);var Vi,ld,ud,Yi;yr(T0,"onAnimationEnd");yr(P0,"onAnimationIteration");yr(L0,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(O0,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s2=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function cd(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,sh(n,t,void 0,e),e.currentTarget=null}function F0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;cd(o,s,u),i=l}else for(a=0;a<n.length;a++){if(s=n[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;cd(o,s,u),i=l}}}if(pa)throw e=Tl,pa=!1,Tl=null,e}function ae(e,t){var r=t[Wl];r===void 0&&(r=t[Wl]=new Set);var n=e+"__bubble";r.has(n)||(A0(t,e,2,!1),r.add(n))}function ol(e,t,r){var n=0;t&&(n|=4),A0(r,e,n,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[ji]){e[ji]=!0,Gd.forEach(function(r){r!=="selectionchange"&&(s2.has(r)||ol(r,!1,e),ol(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,ol("selectionchange",!1,t))}}function A0(e,t,r,n){switch(y0(t)){case 1:var o=kh;break;case 4:o=_h;break;default:o=xu}r=o.bind(null,t,r,e),o=void 0,!$l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function il(e,t,r,n,o){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ir(s),a===null)return;if(l=a.tag,l===5||l===6){n=i=a;continue e}s=s.parentNode}}n=n.return}a0(function(){var u=i,c=mu(r),f=[];e:{var m=I0.get(e);if(m!==void 0){var h=yu,x=e;switch(e){case"keypress":if(na(r)===0)break e;case"keydown":case"keyup":h=Dh;break;case"focusin":x="focus",h=tl;break;case"focusout":x="blur",h=tl;break;case"beforeblur":case"afterblur":h=tl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Bh;break;case T0:case P0:case L0:h=$h;break;case O0:h=Gh;break;case"scroll":h=zh;break;case"wheel":h=Yh;break;case"copy":case"cut":case"paste":h=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Jf}var b=(t&4)!==0,y=!b&&e==="scroll",d=b?m!==null?m+"Capture":null:m;b=[];for(var p=u,g;p!==null;){g=p;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,d!==null&&(v=Ao(p,d),v!=null&&b.push(Go(p,v,g)))),y)break;p=p.return}0<b.length&&(m=new h(m,x,null,r,c),f.push({event:m,listeners:b}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&r!==Rl&&(x=r.relatedTarget||r.fromElement)&&(Ir(x)||x[Ut]))break e;if((h||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,h?(x=r.relatedTarget||r.toElement,h=u,x=x?Ir(x):null,x!==null&&(y=Yr(x),x!==y||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(b=Kf,v="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Jf,v="onPointerLeave",d="onPointerEnter",p="pointer"),y=h==null?m:bn(h),g=x==null?m:bn(x),m=new b(v,p+"leave",h,r,c),m.target=y,m.relatedTarget=g,v=null,Ir(c)===u&&(b=new b(d,p+"enter",x,r,c),b.target=g,b.relatedTarget=y,v=b),y=v,h&&x)t:{for(b=h,d=x,p=0,g=b;g;g=fn(g))p++;for(g=0,v=d;v;v=fn(v))g++;for(;0<p-g;)b=fn(b),p--;for(;0<g-p;)d=fn(d),g--;for(;p--;){if(b===d||d!==null&&b===d.alternate)break t;b=fn(b),d=fn(d)}b=null}else b=null;h!==null&&fd(f,m,h,b,!1),x!==null&&y!==null&&fd(f,y,x,b,!0)}}e:{if(m=u?bn(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var w=Jh;else if(rd(m))if(M0)w=n2;else{w=t2;var k=e2}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=r2);if(w&&(w=w(e,u))){z0(f,w,r,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&kl(m,"number",m.value)}switch(k=u?bn(u):window,e){case"focusin":(rd(k)||k.contentEditable==="true")&&(gn=k,Il=u,$o=null);break;case"focusout":$o=Il=gn=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,ad(f,r,c);break;case"selectionchange":if(a2)break;case"keydown":case"keyup":ad(f,r,c)}var _;if(Su)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else mn?k0(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(S0&&r.locale!=="ko"&&(mn||z!=="onCompositionStart"?z==="onCompositionEnd"&&mn&&(_=w0()):(lr=c,vu="value"in lr?lr.value:lr.textContent,mn=!0)),k=xa(u,z),0<k.length&&(z=new Zf(z,e,null,r,c),f.push({event:z,listeners:k}),_?z.data=_:(_=_0(r),_!==null&&(z.data=_)))),(_=jh?Qh(e,r):qh(e,r))&&(u=xa(u,"onBeforeInput"),0<u.length&&(c=new Zf("onBeforeInput","beforeinput",null,r,c),f.push({event:c,listeners:u}),c.data=_))}F0(f,t)})}function Go(e,t,r){return{instance:e,listener:t,currentTarget:r}}function xa(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ao(e,r),i!=null&&n.unshift(Go(e,i,o)),i=Ao(e,t),i!=null&&n.push(Go(e,i,o))),e=e.return}return n}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fd(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,o?(l=Ao(r,i),l!=null&&a.unshift(Go(r,l,s))):o||(l=Ao(r,i),l!=null&&a.push(Go(r,l,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var l2=/\r\n?/g,u2=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(l2,`
`).replace(u2,"")}function Qi(e,t,r){if(t=dd(t),dd(e)!==t&&r)throw Error(M(425))}function va(){}var Al=null,Hl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,c2=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,f2=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(e){return pd.resolve(null).then(e).catch(d2)}:Nl;function d2(e){setTimeout(function(){throw e})}function al(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),No(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);No(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),Et="__reactFiber$"+Hn,Uo="__reactProps$"+Hn,Ut="__reactContainer$"+Hn,Wl="__reactEvents$"+Hn,p2="__reactListeners$"+Hn,m2="__reactHandles$"+Hn;function Ir(e){var t=e[Et];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ut]||r[Et]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=md(e);e!==null;){if(r=e[Et])return r;e=md(e)}return t}e=r,r=e.parentNode}return null}function ei(e){return e=e[Et]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Da(e){return e[Uo]||null}var Bl=[],xn=-1;function wr(e){return{current:e}}function se(e){0>xn||(e.current=Bl[xn],Bl[xn]=null,xn--)}function ie(e,t){xn++,Bl[xn]=e.current,e.current=t}var vr={},Ie=wr(vr),Ge=wr(!1),Nr=vr;function Tn(e,t){var r=e.type.contextTypes;if(!r)return vr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function ya(){se(Ge),se(Ie)}function gd(e,t,r){if(Ie.current!==vr)throw Error(M(168));ie(Ie,t),ie(Ge,r)}function H0(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(M(108,eh(e)||"Unknown",o));return de({},r,n)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,Nr=Ie.current,ie(Ie,e),ie(Ge,Ge.current),!0}function hd(e,t,r){var n=e.stateNode;if(!n)throw Error(M(169));r?(e=H0(e,t,Nr),n.__reactInternalMemoizedMergedChildContext=e,se(Ge),se(Ie),ie(Ie,e)):se(Ge),ie(Ge,r)}var Nt=null,Na=!1,sl=!1;function D0(e){Nt===null?Nt=[e]:Nt.push(e)}function g2(e){Na=!0,D0(e)}function Sr(){if(!sl&&Nt!==null){sl=!0;var e=0,t=ee;try{var r=Nt;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Nt=null,Na=!1}catch(o){throw Nt!==null&&(Nt=Nt.slice(e+1)),c0(gu,Sr),o}finally{ee=t,sl=!1}}return null}var vn=[],yn=0,Sa=null,ka=0,it=[],at=0,Wr=null,Wt=1,Bt="";function Lr(e,t){vn[yn++]=ka,vn[yn++]=Sa,Sa=e,ka=t}function N0(e,t,r){it[at++]=Wt,it[at++]=Bt,it[at++]=Wr,Wr=e;var n=Wt;e=Bt;var o=32-xt(n)-1;n&=~(1<<o),r+=1;var i=32-xt(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Wt=1<<32-xt(t)+o|r<<o|n,Bt=i+e}else Wt=1<<i|r<<o|n,Bt=e}function _u(e){e.return!==null&&(Lr(e,1),N0(e,1,0))}function zu(e){for(;e===Sa;)Sa=vn[--yn],vn[yn]=null,ka=vn[--yn],vn[yn]=null;for(;e===Wr;)Wr=it[--at],it[at]=null,Bt=it[--at],it[at]=null,Wt=it[--at],it[at]=null}var qe=null,Qe=null,le=!1,bt=null;function W0(e,t){var r=st(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function bd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Qe=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Wr!==null?{id:Wt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=st(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Qe=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(le){var t=Qe;if(t){var r=t;if(!bd(e,t)){if(Xl(e))throw Error(M(418));t=pr(r.nextSibling);var n=qe;t&&bd(e,t)?W0(n,r):(e.flags=e.flags&-4097|2,le=!1,qe=e)}}else{if(Xl(e))throw Error(M(418));e.flags=e.flags&-4097|2,le=!1,qe=e}}}function xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function qi(e){if(e!==qe)return!1;if(!le)return xd(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=Qe)){if(Xl(e))throw B0(),Error(M(418));for(;t;)W0(e,t),t=pr(t.nextSibling)}if(xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=pr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=qe?pr(e.stateNode.nextSibling):null;return!0}function B0(){for(var e=Qe;e;)e=pr(e.nextSibling)}function Pn(){Qe=qe=null,le=!1}function Mu(e){bt===null?bt=[e]:bt.push(e)}var h2=jt.ReactCurrentBatchConfig;function xo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,e))}return e}function Ki(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function X0(e){function t(d,p){if(e){var g=d.deletions;g===null?(d.deletions=[p],d.flags|=16):g.push(p)}}function r(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function n(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function o(d,p){return d=br(d,p),d.index=0,d.sibling=null,d}function i(d,p,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<p?(d.flags|=2,p):g):(d.flags|=2,p)):(d.flags|=1048576,p)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,p,g,v){return p===null||p.tag!==6?(p=ml(g,d.mode,v),p.return=d,p):(p=o(p,g),p.return=d,p)}function l(d,p,g,v){var w=g.type;return w===pn?c(d,p,g.props.children,v,g.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===or&&vd(w)===p.type)?(v=o(p,g.props),v.ref=xo(d,p,g),v.return=d,v):(v=ca(g.type,g.key,g.props,null,d.mode,v),v.ref=xo(d,p,g),v.return=d,v)}function u(d,p,g,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=gl(g,d.mode,v),p.return=d,p):(p=o(p,g.children||[]),p.return=d,p)}function c(d,p,g,v,w){return p===null||p.tag!==7?(p=Dr(g,d.mode,v,w),p.return=d,p):(p=o(p,g),p.return=d,p)}function f(d,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ml(""+p,d.mode,g),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fi:return g=ca(p.type,p.key,p.props,null,d.mode,g),g.ref=xo(d,null,p),g.return=d,g;case dn:return p=gl(p,d.mode,g),p.return=d,p;case or:var v=p._init;return f(d,v(p._payload),g)}if(ko(p)||mo(p))return p=Dr(p,d.mode,g,null),p.return=d,p;Ki(d,p)}return null}function m(d,p,g,v){var w=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:s(d,p,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fi:return g.key===w?l(d,p,g,v):null;case dn:return g.key===w?u(d,p,g,v):null;case or:return w=g._init,m(d,p,w(g._payload),v)}if(ko(g)||mo(g))return w!==null?null:c(d,p,g,v,null);Ki(d,g)}return null}function h(d,p,g,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(g)||null,s(p,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:return d=d.get(v.key===null?g:v.key)||null,l(p,d,v,w);case dn:return d=d.get(v.key===null?g:v.key)||null,u(p,d,v,w);case or:var k=v._init;return h(d,p,g,k(v._payload),w)}if(ko(v)||mo(v))return d=d.get(g)||null,c(p,d,v,w,null);Ki(p,v)}return null}function x(d,p,g,v){for(var w=null,k=null,_=p,z=p=0,E=null;_!==null&&z<g.length;z++){_.index>z?(E=_,_=null):E=_.sibling;var C=m(d,_,g[z],v);if(C===null){_===null&&(_=E);break}e&&_&&C.alternate===null&&t(d,_),p=i(C,p,z),k===null?w=C:k.sibling=C,k=C,_=E}if(z===g.length)return r(d,_),le&&Lr(d,z),w;if(_===null){for(;z<g.length;z++)_=f(d,g[z],v),_!==null&&(p=i(_,p,z),k===null?w=_:k.sibling=_,k=_);return le&&Lr(d,z),w}for(_=n(d,_);z<g.length;z++)E=h(_,d,z,g[z],v),E!==null&&(e&&E.alternate!==null&&_.delete(E.key===null?z:E.key),p=i(E,p,z),k===null?w=E:k.sibling=E,k=E);return e&&_.forEach(function(L){return t(d,L)}),le&&Lr(d,z),w}function b(d,p,g,v){var w=mo(g);if(typeof w!="function")throw Error(M(150));if(g=w.call(g),g==null)throw Error(M(151));for(var k=w=null,_=p,z=p=0,E=null,C=g.next();_!==null&&!C.done;z++,C=g.next()){_.index>z?(E=_,_=null):E=_.sibling;var L=m(d,_,C.value,v);if(L===null){_===null&&(_=E);break}e&&_&&L.alternate===null&&t(d,_),p=i(L,p,z),k===null?w=L:k.sibling=L,k=L,_=E}if(C.done)return r(d,_),le&&Lr(d,z),w;if(_===null){for(;!C.done;z++,C=g.next())C=f(d,C.value,v),C!==null&&(p=i(C,p,z),k===null?w=C:k.sibling=C,k=C);return le&&Lr(d,z),w}for(_=n(d,_);!C.done;z++,C=g.next())C=h(_,d,z,C.value,v),C!==null&&(e&&C.alternate!==null&&_.delete(C.key===null?z:C.key),p=i(C,p,z),k===null?w=C:k.sibling=C,k=C);return e&&_.forEach(function(W){return t(d,W)}),le&&Lr(d,z),w}function y(d,p,g,v){if(typeof g=="object"&&g!==null&&g.type===pn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fi:e:{for(var w=g.key,k=p;k!==null;){if(k.key===w){if(w=g.type,w===pn){if(k.tag===7){r(d,k.sibling),p=o(k,g.props.children),p.return=d,d=p;break e}}else if(k.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===or&&vd(w)===k.type){r(d,k.sibling),p=o(k,g.props),p.ref=xo(d,k,g),p.return=d,d=p;break e}r(d,k);break}else t(d,k);k=k.sibling}g.type===pn?(p=Dr(g.props.children,d.mode,v,g.key),p.return=d,d=p):(v=ca(g.type,g.key,g.props,null,d.mode,v),v.ref=xo(d,p,g),v.return=d,d=v)}return a(d);case dn:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){r(d,p.sibling),p=o(p,g.children||[]),p.return=d,d=p;break e}else{r(d,p);break}else t(d,p);p=p.sibling}p=gl(g,d.mode,v),p.return=d,d=p}return a(d);case or:return k=g._init,y(d,p,k(g._payload),v)}if(ko(g))return x(d,p,g,v);if(mo(g))return b(d,p,g,v);Ki(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(r(d,p.sibling),p=o(p,g),p.return=d,d=p):(r(d,p),p=ml(g,d.mode,v),p.return=d,d=p),a(d)):r(d,p)}return y}var Ln=X0(!0),G0=X0(!1),_a=wr(null),za=null,wn=null,Cu=null;function Ru(){Cu=wn=za=null}function Eu(e){var t=_a.current;se(_a),e._currentValue=t}function Ul(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Rn(e,t){za=e,Cu=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Cu!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(za===null)throw Error(M(308));wn=e,za.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Fr=null;function $u(e){Fr===null?Fr=[e]:Fr.push(e)}function U0(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,$u(t)):(r.next=o.next,o.next=r),t.interleaved=r,Yt(e,n)}function Yt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ir=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(j&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Yt(e,r)}return o=n.interleaved,o===null?(t.next=t,$u(n)):(t.next=o.next,o.next=t),n.interleaved=t,Yt(e,r)}function oa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,hu(e,r)}}function yd(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ma(e,t,r,n){var o=e.updateQueue;ir=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,c=u=l=null,s=i;do{var m=s.lane,h=s.eventTime;if((n&m)===m){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,b=s;switch(m=t,h=r,b.tag){case 1:if(x=b.payload,typeof x=="function"){f=x.call(h,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,m=typeof x=="function"?x.call(h,f,m):x,m==null)break e;f=de({},f,m);break e;case 2:ir=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else h={eventTime:h,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xr|=a,e.lanes=a,e.memoizedState=f}}function wd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(M(191,o));o.call(n)}}}var ti={},Tt=wr(ti),Yo=wr(ti),Vo=wr(ti);function Ar(e){if(e===ti)throw Error(M(174));return e}function Pu(e,t){switch(ie(Vo,t),ie(Yo,e),ie(Tt,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}se(Tt),ie(Tt,t)}function On(){se(Tt),se(Yo),se(Vo)}function V0(e){Ar(Vo.current);var t=Ar(Tt.current),r=zl(t,e.type);t!==r&&(ie(Yo,e),ie(Tt,r))}function Lu(e){Yo.current===e&&(se(Tt),se(Yo))}var ce=wr(0);function Ca(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function Ou(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var ia=jt.ReactCurrentDispatcher,ul=jt.ReactCurrentBatchConfig,Br=0,fe=null,ke=null,ze=null,Ra=!1,To=!1,jo=0,b2=0;function Pe(){throw Error(M(321))}function Iu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!yt(e[r],t[r]))return!1;return!0}function Fu(e,t,r,n,o,i){if(Br=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?w2:S2,e=r(n,o),To){i=0;do{if(To=!1,jo=0,25<=i)throw Error(M(301));i+=1,ze=ke=null,t.updateQueue=null,ia.current=k2,e=r(n,o)}while(To)}if(ia.current=Ea,t=ke!==null&&ke.next!==null,Br=0,ze=ke=fe=null,Ra=!1,t)throw Error(M(300));return e}function Au(){var e=jo!==0;return jo=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?fe.memoizedState=ze=e:ze=ze.next=e,ze}function ct(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=ze===null?fe.memoizedState:ze.next;if(t!==null)ze=t,ke=e;else{if(e===null)throw Error(M(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},ze===null?fe.memoizedState=ze=e:ze=ze.next=e}return ze}function Qo(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=ct(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=ke,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=n):l=l.next=f,fe.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==i);l===null?a=n:l.next=s,yt(n,t.memoizedState)||(Xe=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,Xr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fl(e){var t=ct(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);yt(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function j0(){}function Q0(e,t){var r=fe,n=ct(),o=t(),i=!yt(n.memoizedState,o);if(i&&(n.memoizedState=o,Xe=!0),n=n.queue,Hu(Z0.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,qo(9,K0.bind(null,r,n,o,t),void 0,null),Me===null)throw Error(M(349));(Br&30)!==0||q0(r,t,o)}return o}function q0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function K0(e,t,r,n){t.value=r,t.getSnapshot=n,J0(t)&&ep(e)}function Z0(e,t,r){return r(function(){J0(t)&&ep(e)})}function J0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!yt(e,r)}catch{return!0}}function ep(e){var t=Yt(e,1);t!==null&&vt(t,e,1,-1)}function Sd(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:e},t.queue=e,e=e.dispatch=y2.bind(null,fe,e),[t.memoizedState,e]}function qo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function tp(){return ct().memoizedState}function aa(e,t,r,n){var o=Rt();fe.flags|=e,o.memoizedState=qo(1|t,r,void 0,n===void 0?null:n)}function Wa(e,t,r,n){var o=ct();n=n===void 0?null:n;var i=void 0;if(ke!==null){var a=ke.memoizedState;if(i=a.destroy,n!==null&&Iu(n,a.deps)){o.memoizedState=qo(t,r,i,n);return}}fe.flags|=e,o.memoizedState=qo(1|t,r,i,n)}function kd(e,t){return aa(8390656,8,e,t)}function Hu(e,t){return Wa(2048,8,e,t)}function rp(e,t){return Wa(4,2,e,t)}function np(e,t){return Wa(4,4,e,t)}function op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,r){return r=r!=null?r.concat([e]):null,Wa(4,4,op.bind(null,t,e),r)}function Du(){}function ap(e,t){var r=ct();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Iu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function sp(e,t){var r=ct();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Iu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function lp(e,t,r){return(Br&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=r):(yt(r,t)||(r=p0(),fe.lanes|=r,Xr|=r,e.baseState=!0),t)}function x2(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=ul.transition;ul.transition={};try{e(!1),t()}finally{ee=r,ul.transition=n}}function up(){return ct().memoizedState}function v2(e,t,r){var n=hr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},cp(e))fp(t,r);else if(r=U0(e,t,r,n),r!==null){var o=He();vt(r,e,n,o),dp(r,t,n)}}function y2(e,t,r){var n=hr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(cp(e))fp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,yt(s,a)){var l=t.interleaved;l===null?(o.next=o,$u(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}r=U0(e,t,o,n),r!==null&&(o=He(),vt(r,e,n,o),dp(r,t,n))}}function cp(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function fp(e,t){To=Ra=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function dp(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,hu(e,r)}}var Ea={readContext:ut,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},w2={readContext:ut,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:kd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,aa(4194308,4,op.bind(null,t,e),r)},useLayoutEffect:function(e,t){return aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return aa(4,2,e,t)},useMemo:function(e,t){var r=Rt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Rt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=v2.bind(null,fe,e),[n.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:Sd,useDebugValue:Du,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=Sd(!1),t=e[0];return e=x2.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=fe,o=Rt();if(le){if(r===void 0)throw Error(M(407));r=r()}else{if(r=t(),Me===null)throw Error(M(349));(Br&30)!==0||q0(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,kd(Z0.bind(null,n,i,e),[e]),n.flags|=2048,qo(9,K0.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Rt(),t=Me.identifierPrefix;if(le){var r=Bt,n=Wt;r=(n&~(1<<32-xt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=jo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=b2++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},S2={readContext:ut,useCallback:ap,useContext:ut,useEffect:Hu,useImperativeHandle:ip,useInsertionEffect:rp,useLayoutEffect:np,useMemo:sp,useReducer:cl,useRef:tp,useState:function(){return cl(Qo)},useDebugValue:Du,useDeferredValue:function(e){var t=ct();return lp(t,ke.memoizedState,e)},useTransition:function(){var e=cl(Qo)[0],t=ct().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:Q0,useId:up,unstable_isNewReconciler:!1},k2={readContext:ut,useCallback:ap,useContext:ut,useEffect:Hu,useImperativeHandle:ip,useInsertionEffect:rp,useLayoutEffect:np,useMemo:sp,useReducer:fl,useRef:tp,useState:function(){return fl(Qo)},useDebugValue:Du,useDeferredValue:function(e){var t=ct();return ke===null?t.memoizedState=e:lp(t,ke.memoizedState,e)},useTransition:function(){var e=fl(Qo)[0],t=ct().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:Q0,useId:up,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Yl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:de({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ba={isMounted:function(e){return(e=e._reactInternals)?Yr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=He(),o=hr(e),i=Xt(n,o);i.payload=t,r!=null&&(i.callback=r),t=mr(e,i,o),t!==null&&(vt(t,e,o,n),oa(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=He(),o=hr(e),i=Xt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=mr(e,i,o),t!==null&&(vt(t,e,o,n),oa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=He(),n=hr(e),o=Xt(r,n);o.tag=2,t!=null&&(o.callback=t),t=mr(e,o,n),t!==null&&(vt(t,e,n,r),oa(t,e,n))}};function _d(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!Bo(r,n)||!Bo(o,i):!0}function pp(e,t,r){var n=!1,o=vr,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ue(t)?Nr:Ie.current,n=t.contextTypes,i=(n=n!=null)?Tn(e,o):vr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function zd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function Vl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Tu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ue(t)?Nr:Ie.current,o.context=Tn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yl(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ba.enqueueReplaceState(o,o.state,null),Ma(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var r="",n=t;do r+=J1(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function dl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var _2=typeof WeakMap=="function"?WeakMap:Map;function mp(e,t,r){r=Xt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ta||(Ta=!0,ou=n),jl(e,t)},r}function gp(e,t,r){r=Xt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){jl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){jl(e,t),typeof n!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Md(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new _2;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=H2.bind(null,e,t,r),t.then(e,e))}function Cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rd(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Xt(-1,1),t.tag=2,mr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var z2=jt.ReactCurrentOwner,Xe=!1;function Ae(e,t,r,n){t.child=e===null?G0(t,null,r,n):Ln(t,e.child,r,n)}function Ed(e,t,r,n,o){r=r.render;var i=t.ref;return Rn(t,o),n=Fu(e,t,r,n,i,o),r=Au(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(le&&r&&_u(t),t.flags|=1,Ae(e,t,n,o),t.child)}function $d(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Vu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,hp(e,t,i,n,o)):(e=ca(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Bo,r(a,n)&&e.ref===t.ref)return Vt(e,t,o)}return t.flags|=1,e=br(i,n),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Bo(i,n)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=n=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Vt(e,t,o)}return Ql(e,t,r,n,o)}function bp(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(kn,je),je|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(kn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,ie(kn,je),je|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,ie(kn,je),je|=n;return Ae(e,t,o,r),t.child}function xp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,r,n,o){var i=Ue(r)?Nr:Ie.current;return i=Tn(t,i),Rn(t,o),r=Fu(e,t,r,n,i,o),n=Au(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(le&&n&&_u(t),t.flags|=1,Ae(e,t,r,o),t.child)}function Td(e,t,r,n,o){if(Ue(r)){var i=!0;wa(t)}else i=!1;if(Rn(t,o),t.stateNode===null)sa(e,t),pp(t,r,n),Vl(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ue(r)?Nr:Ie.current,u=Tn(t,u));var c=r.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||l!==u)&&zd(t,a,n,u),ir=!1;var m=t.memoizedState;a.state=m,Ma(t,n,a,o),l=t.memoizedState,s!==n||m!==l||Ge.current||ir?(typeof c=="function"&&(Yl(t,r,c,n),l=t.memoizedState),(s=ir||_d(t,r,s,n,m,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=u,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Y0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:gt(t.type,s),a.props=u,f=t.pendingProps,m=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=Ue(r)?Nr:Ie.current,l=Tn(t,l));var h=r.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||m!==l)&&zd(t,a,n,l),ir=!1,m=t.memoizedState,a.state=m,Ma(t,n,a,o);var x=t.memoizedState;s!==f||m!==x||Ge.current||ir?(typeof h=="function"&&(Yl(t,r,h,n),x=t.memoizedState),(u=ir||_d(t,r,u,n,m,x,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=l,n=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return ql(e,t,r,n,i,o)}function ql(e,t,r,n,o,i){xp(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&hd(t,r,!1),Vt(e,t,i);n=t.stateNode,z2.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Ln(t,e.child,null,i),t.child=Ln(t,null,s,i)):Ae(e,t,s,i),t.memoizedState=n.state,o&&hd(t,r,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gd(e,t.context,!1),Pu(e,t.containerInfo)}function Pd(e,t,r,n,o){return Pn(),Mu(o),t.flags|=256,Ae(e,t,r,n),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yp(e,t,r){var n=t.pendingProps,o=ce.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(ce,o&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=n.children,e=n.fallback,i?(n=t.mode,i=t.child,a={mode:"hidden",children:a},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ua(a,n,0,null),e=Dr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Zl(r),t.memoizedState=Kl,e):Nu(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return M2(e,t,a,n,s,o,r);if(i){i=n.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:n.children};return(a&1)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=br(o,l),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=br(s,i):(i=Dr(i,a,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,a=e.child.memoizedState,a=a===null?Zl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=Kl,n}return i=e.child,e=i.sibling,n=br(i,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Nu(e,t){return t=Ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zi(e,t,r,n){return n!==null&&Mu(n),Ln(t,e.child,null,r),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M2(e,t,r,n,o,i,a){if(r)return t.flags&256?(t.flags&=-257,n=dl(Error(M(422))),Zi(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Ua({mode:"visible",children:n.children},o,0,null),i=Dr(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,(t.mode&1)!==0&&Ln(t,e.child,null,a),t.child.memoizedState=Zl(a),t.memoizedState=Kl,i);if((t.mode&1)===0)return Zi(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(M(419)),n=dl(i,n,void 0),Zi(e,t,a,n)}if(s=(a&e.childLanes)!==0,Xe||s){if(n=Me,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Yt(e,o),vt(n,e,o,-1))}return Yu(),n=dl(Error(M(421))),Zi(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=D2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=pr(o.nextSibling),qe=t,le=!0,bt=null,e!==null&&(it[at++]=Wt,it[at++]=Bt,it[at++]=Wr,Wt=e.id,Bt=e.overflow,Wr=t),t=Nu(t,n.children),t.flags|=4096,t)}function Ld(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ul(e.return,t,r)}function pl(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function wp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Ae(e,t,n.children,r),n=ce.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,r,t);else if(e.tag===19)Ld(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ie(ce,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Ca(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),pl(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ca(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}pl(t,!0,r,null,i);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,r=br(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=br(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function C2(e,t,r){switch(t.tag){case 3:vp(t),Pn();break;case 5:V0(t);break;case 1:Ue(t.type)&&wa(t);break;case 4:Pu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;ie(_a,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?yp(e,t,r):(ie(ce,ce.current&1),e=Vt(e,t,r),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return wp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(ce,ce.current),n)break;return null;case 22:case 23:return t.lanes=0,bp(e,t,r)}return Vt(e,t,r)}var Sp,Jl,kp,_p;Sp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Jl=function(){};kp=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Ar(Tt.current);var i=null;switch(r){case"input":o=wl(e,o),n=wl(e,n),i=[];break;case"select":o=de({},o,{value:void 0}),n=de({},n,{value:void 0}),i=[];break;case"textarea":o=_l(e,o),n=_l(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=va)}Ml(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var l=n[u];if(s=o?.[u],n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(i||(i=[]),i.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};_p=function(e,t,r,n){r!==n&&(t.flags|=4)};function vo(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function R2(e,t,r){var n=t.pendingProps;switch(zu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ue(t.type)&&ya(),Le(t),null;case 3:return n=t.stateNode,On(),se(Ge),se(Ie),Ou(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(su(bt),bt=null))),Jl(e,t),Le(t),null;case 5:Lu(t);var o=Ar(Vo.current);if(r=t.type,e!==null&&t.stateNode!=null)kp(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(M(166));return Le(t),null}if(e=Ar(Tt.current),qi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Et]=t,n[Uo]=i,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(o=0;o<zo.length;o++)ae(zo[o],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":Wf(n,i),ae("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},ae("invalid",n);break;case"textarea":Xf(n,i),ae("invalid",n)}Ml(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&Qi(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Qi(n.textContent,s,e),o=["children",""+s]):Io.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",n)}switch(r){case"input":Ai(n),Bf(n,i,!0);break;case"textarea":Ai(n),Gf(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=va)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Et]=t,e[Uo]=n,Sp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Cl(r,n),r){case"dialog":ae("cancel",e),ae("close",e),o=n;break;case"iframe":case"object":case"embed":ae("load",e),o=n;break;case"video":case"audio":for(o=0;o<zo.length;o++)ae(zo[o],e);o=n;break;case"source":ae("error",e),o=n;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=n;break;case"details":ae("toggle",e),o=n;break;case"input":Wf(e,n),o=wl(e,n),ae("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=de({},n,{value:void 0}),ae("invalid",e);break;case"textarea":Xf(e,n),o=_l(e,n),ae("invalid",e);break;default:o=n}Ml(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?t0(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jd(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Fo(e,l):typeof l=="number"&&Fo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Io.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ae("scroll",e):l!=null&&cu(e,i,l,a))}switch(r){case"input":Ai(e),Bf(e,n,!1);break;case"textarea":Ai(e),Gf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+xr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?_n(e,!!n.multiple,i,!1):n.defaultValue!=null&&_n(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=va)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)_p(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(M(166));if(r=Ar(Vo.current),Ar(Tt.current),qi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Et]=t,(i=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:Qi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Et]=t,t.stateNode=n}return Le(t),null;case 13:if(se(ce),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)B0(),Pn(),t.flags|=98560,i=!1;else if(i=qi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Et]=t}else Pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else bt!==null&&(su(bt),bt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ce.current&1)!==0?_e===0&&(_e=3):Yu())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return On(),Jl(e,t),e===null&&Xo(t.stateNode.containerInfo),Le(t),null;case 10:return Eu(t.type._context),Le(t),null;case 17:return Ue(t.type)&&ya(),Le(t),null;case 19:if(se(ce),i=t.memoizedState,i===null)return Le(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)vo(i,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ca(e),a!==null){for(t.flags|=128,vo(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>Fn&&(t.flags|=128,n=!0,vo(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ca(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),vo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!le)return Le(t),null}else 2*ye()-i.renderingStartTime>Fn&&r!==1073741824&&(t.flags|=128,n=!0,vo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,r=ce.current,ie(ce,n?r&1|2:r&1),t):(Le(t),null);case 22:case 23:return Uu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(je&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function E2(e,t){switch(zu(t),t.tag){case 1:return Ue(t.type)&&ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),se(Ge),se(Ie),Ou(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Lu(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return On(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var Ji=!1,Oe=!1,$2=typeof WeakSet=="function"?WeakSet:Set,$=null;function Sn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){he(e,t,n)}else r.current=null}function eu(e,t,r){try{r()}catch(n){he(e,t,n)}}var Od=!1;function T2(e,t){if(Al=ha,e=E0(),ku(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var h;f!==r||o!==0&&f.nodeType!==3||(s=a+o),f!==i||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)m=f,f=h;for(;;){if(f===e)break t;if(m===r&&++u===o&&(s=a),m===i&&++c===n&&(l=a),(h=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=h}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hl={focusedElem:e,selectionRange:r},ha=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,y=x.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:gt(t.type,b),y);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(v){he(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=Od,Od=!1,x}function Po(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&eu(t,r,i)}o=o.next}while(o!==n)}}function Xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function tu(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Uo],delete t[Wl],delete t[p2],delete t[m2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mp(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=va));else if(n!==4&&(e=e.child,e!==null))for(ru(e,t,r),e=e.sibling;e!==null;)ru(e,t,r),e=e.sibling}function nu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(nu(e,t,r),e=e.sibling;e!==null;)nu(e,t,r),e=e.sibling}var Ce=null,ht=!1;function nr(e,t,r){for(r=r.child;r!==null;)Cp(e,t,r),r=r.sibling}function Cp(e,t,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Ia,r)}catch{}switch(r.tag){case 5:Oe||Sn(r,t);case 6:var n=Ce,o=ht;Ce=null,nr(e,t,r),Ce=n,ht=o,Ce!==null&&(ht?(e=Ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ce.removeChild(r.stateNode));break;case 18:Ce!==null&&(ht?(e=Ce,r=r.stateNode,e.nodeType===8?al(e.parentNode,r):e.nodeType===1&&al(e,r),No(e)):al(Ce,r.stateNode));break;case 4:n=Ce,o=ht,Ce=r.stateNode.containerInfo,ht=!0,nr(e,t,r),Ce=n,ht=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&eu(r,t,a),o=o.next}while(o!==n)}nr(e,t,r);break;case 1:if(!Oe&&(Sn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){he(r,t,s)}nr(e,t,r);break;case 21:nr(e,t,r);break;case 22:r.mode&1?(Oe=(n=Oe)||r.memoizedState!==null,nr(e,t,r),Oe=n):nr(e,t,r);break;default:nr(e,t,r)}}function Fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new $2),t.forEach(function(n){var o=N2.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function mt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ce=s.stateNode,ht=!1;break e;case 3:Ce=s.stateNode.containerInfo,ht=!0;break e;case 4:Ce=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(Ce===null)throw Error(M(160));Cp(i,a,o),Ce=null,ht=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}function Rp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Ct(e),n&4){try{Po(3,e,e.return),Xa(3,e)}catch(b){he(e,e.return,b)}try{Po(5,e,e.return)}catch(b){he(e,e.return,b)}}break;case 1:mt(t,e),Ct(e),n&512&&r!==null&&Sn(r,r.return);break;case 5:if(mt(t,e),Ct(e),n&512&&r!==null&&Sn(r,r.return),e.flags&32){var o=e.stateNode;try{Fo(o,"")}catch(b){he(e,e.return,b)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&qd(o,i),Cl(s,a);var u=Cl(s,i);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?t0(o,f):c==="dangerouslySetInnerHTML"?Jd(o,f):c==="children"?Fo(o,f):cu(o,c,f,u)}switch(s){case"input":Sl(o,i);break;case"textarea":Kd(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?_n(o,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?_n(o,!!i.multiple,i.defaultValue,!0):_n(o,!!i.multiple,i.multiple?[]:"",!1))}o[Uo]=i}catch(b){he(e,e.return,b)}}break;case 6:if(mt(t,e),Ct(e),n&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){he(e,e.return,b)}}break;case 3:if(mt(t,e),Ct(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{No(t.containerInfo)}catch(b){he(e,e.return,b)}break;case 4:mt(t,e),Ct(e);break;case 13:mt(t,e),Ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xu=ye())),n&4&&Fd(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||c,mt(t,e),Oe=u):mt(t,e),Ct(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for($=e,c=e.child;c!==null;){for(f=$=c;$!==null;){switch(m=$,h=m.child,m.tag){case 0:case 11:case 14:case 15:Po(4,m,m.return);break;case 1:Sn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){he(n,r,b)}}break;case 5:Sn(m,m.return);break;case 22:if(m.memoizedState!==null){Hd(f);continue}}h!==null?(h.return=m,$=h):Hd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=e0("display",a))}catch(b){he(e,e.return,b)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){he(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(t,e),Ct(e),n&4&&Fd(e);break;case 21:break;default:mt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Mp(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Fo(o,""),n.flags&=-33);var i=Id(e);nu(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,s=Id(e);ru(e,s,a);break;default:throw Error(M(161))}}catch(l){he(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P2(e,t,r){$=e,Ep(e,t,r)}function Ep(e,t,r){for(var n=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||Ji;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Oe;s=Ji;var u=Oe;if(Ji=a,(Oe=l)&&!u)for($=o;$!==null;)a=$,l=a.child,a.tag===22&&a.memoizedState!==null?Dd(o):l!==null?(l.return=a,$=l):Dd(o);for(;i!==null;)$=i,Ep(i,t,r),i=i.sibling;$=o,Ji=s,Oe=u}Ad(e,t,r)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,$=i):Ad(e,t,r)}}function Ad(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Oe||Xa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Oe)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:gt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wd(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}wd(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&No(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Oe||t.flags&512&&tu(t)}catch(m){he(t,t.return,m)}}if(t===e){$=null;break}if(r=t.sibling,r!==null){r.return=t.return,$=r;break}$=t.return}}function Hd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var r=t.sibling;if(r!==null){r.return=t.return,$=r;break}$=t.return}}function Dd(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xa(4,t)}catch(l){he(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){he(t,o,l)}}var i=t.return;try{tu(t)}catch(l){he(t,i,l)}break;case 5:var a=t.return;try{tu(t)}catch(l){he(t,a,l)}}}catch(l){he(t,t.return,l)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var L2=Math.ceil,$a=jt.ReactCurrentDispatcher,Wu=jt.ReactCurrentOwner,lt=jt.ReactCurrentBatchConfig,j=0,Me=null,Se=null,Re=0,je=0,kn=wr(0),_e=0,Ko=null,Xr=0,Ga=0,Bu=0,Lo=null,Be=null,Xu=0,Fn=1/0,Dt=null,Ta=!1,ou=null,gr=null,ea=!1,ur=null,Pa=0,Oo=0,iu=null,la=-1,ua=0;function He(){return(j&6)!==0?ye():la!==-1?la:la=ye()}function hr(e){return(e.mode&1)===0?1:(j&2)!==0&&Re!==0?Re&-Re:h2.transition!==null?(ua===0&&(ua=p0()),ua):(e=ee,e!==0||(e=window.event,e=e===void 0?16:y0(e.type)),e)}function vt(e,t,r,n){if(50<Oo)throw Oo=0,iu=null,Error(M(185));Zo(e,r,n),((j&2)===0||e!==Me)&&(e===Me&&((j&2)===0&&(Ga|=r),_e===4&&sr(e,Re)),Ye(e,n),r===1&&j===0&&(t.mode&1)===0&&(Fn=ye()+500,Na&&Sr()))}function Ye(e,t){var r=e.callbackNode;xh(e,t);var n=ga(e,e===Me?Re:0);if(n===0)r!==null&&Vf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Vf(r),t===1)e.tag===0?g2(Nd.bind(null,e)):D0(Nd.bind(null,e)),f2(function(){(j&6)===0&&Sr()}),r=null;else{switch(m0(n)){case 1:r=gu;break;case 4:r=f0;break;case 16:r=ma;break;case 536870912:r=d0;break;default:r=ma}r=Ap(r,$p.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function $p(e,t){if(la=-1,ua=0,(j&6)!==0)throw Error(M(327));var r=e.callbackNode;if(En()&&e.callbackNode!==r)return null;var n=ga(e,e===Me?Re:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=La(e,n);else{t=n;var o=j;j|=2;var i=Pp();(Me!==e||Re!==t)&&(Dt=null,Fn=ye()+500,Hr(e,t));do try{F2();break}catch(s){Tp(e,s)}while(!0);Ru(),$a.current=i,j=o,Se!==null?t=0:(Me=null,Re=0,t=_e)}if(t!==0){if(t===2&&(o=Pl(e),o!==0&&(n=o,t=au(e,o))),t===1)throw r=Ko,Hr(e,0),sr(e,n),Ye(e,ye()),r;if(t===6)sr(e,n);else{if(o=e.current.alternate,(n&30)===0&&!O2(o)&&(t=La(e,n),t===2&&(i=Pl(e),i!==0&&(n=i,t=au(e,i))),t===1))throw r=Ko,Hr(e,0),sr(e,n),Ye(e,ye()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(M(345));case 2:Or(e,Be,Dt);break;case 3:if(sr(e,n),(n&130023424)===n&&(t=Xu+500-ye(),10<t)){if(ga(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nl(Or.bind(null,e,Be,Dt),t);break}Or(e,Be,Dt);break;case 4:if(sr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-xt(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=ye()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*L2(n/1960))-n,10<n){e.timeoutHandle=Nl(Or.bind(null,e,Be,Dt),n);break}Or(e,Be,Dt);break;case 5:Or(e,Be,Dt);break;default:throw Error(M(329))}}}return Ye(e,ye()),e.callbackNode===r?$p.bind(null,e):null}function au(e,t){var r=Lo;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=La(e,t),e!==2&&(t=Be,Be=r,t!==null&&su(t)),e}function su(e){Be===null?Be=e:Be.push.apply(Be,e)}function O2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!yt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Bu,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-xt(t),n=1<<r;e[r]=-1,t&=~n}}function Nd(e){if((j&6)!==0)throw Error(M(327));En();var t=ga(e,0);if((t&1)===0)return Ye(e,ye()),null;var r=La(e,t);if(e.tag!==0&&r===2){var n=Pl(e);n!==0&&(t=n,r=au(e,n))}if(r===1)throw r=Ko,Hr(e,0),sr(e,t),Ye(e,ye()),r;if(r===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Or(e,Be,Dt),Ye(e,ye()),null}function Gu(e,t){var r=j;j|=1;try{return e(t)}finally{j=r,j===0&&(Fn=ye()+500,Na&&Sr())}}function Gr(e){ur!==null&&ur.tag===0&&(j&6)===0&&En();var t=j;j|=1;var r=lt.transition,n=ee;try{if(lt.transition=null,ee=1,e)return e()}finally{ee=n,lt.transition=r,j=t,(j&6)===0&&Sr()}}function Uu(){je=kn.current,se(kn)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,c2(r)),Se!==null)for(r=Se.return;r!==null;){var n=r;switch(zu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ya();break;case 3:On(),se(Ge),se(Ie),Ou();break;case 5:Lu(n);break;case 4:On();break;case 13:se(ce);break;case 19:se(ce);break;case 10:Eu(n.type._context);break;case 22:case 23:Uu()}r=r.return}if(Me=e,Se=e=br(e.current,null),Re=je=t,_e=0,Ko=null,Bu=Ga=Xr=0,Be=Lo=null,Fr!==null){for(t=0;t<Fr.length;t++)if(r=Fr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}Fr=null}return e}function Tp(e,t){do{var r=Se;try{if(Ru(),ia.current=Ea,Ra){for(var n=fe.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Ra=!1}if(Br=0,ze=ke=fe=null,To=!1,jo=0,Wu.current=null,r===null||r.return===null){_e=1,Ko=t,Se=null;break}e:{var i=e,a=r.return,s=r,l=t;if(t=Re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Cd(a);if(h!==null){h.flags&=-257,Rd(h,a,s,i,t),h.mode&1&&Md(i,u,t),t=h,l=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(l),t.updateQueue=b}else x.add(l);break e}else{if((t&1)===0){Md(i,u,t),Yu();break e}l=Error(M(426))}}else if(le&&s.mode&1){var y=Cd(a);if(y!==null){(y.flags&65536)===0&&(y.flags|=256),Rd(y,a,s,i,t),Mu(In(l,s));break e}}i=l=In(l,s),_e!==4&&(_e=2),Lo===null?Lo=[i]:Lo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=mp(i,l,t);yd(i,d);break e;case 1:s=l;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gr===null||!gr.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=gp(i,s,t);yd(i,v);break e}}i=i.return}while(i!==null)}Op(r)}catch(w){t=w,Se===r&&r!==null&&(Se=r=r.return);continue}break}while(!0)}function Pp(){var e=$a.current;return $a.current=Ea,e===null?Ea:e}function Yu(){(_e===0||_e===3||_e===2)&&(_e=4),Me===null||(Xr&268435455)===0&&(Ga&268435455)===0||sr(Me,Re)}function La(e,t){var r=j;j|=2;var n=Pp();(Me!==e||Re!==t)&&(Dt=null,Hr(e,t));do try{I2();break}catch(o){Tp(e,o)}while(!0);if(Ru(),j=r,$a.current=n,Se!==null)throw Error(M(261));return Me=null,Re=0,_e}function I2(){for(;Se!==null;)Lp(Se)}function F2(){for(;Se!==null&&!uh();)Lp(Se)}function Lp(e){var t=Fp(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Op(e):Se=t,Wu.current=null}function Op(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=R2(r,t,je),r!==null){Se=r;return}}else{if(r=E2(r,t),r!==null){r.flags&=32767,Se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);_e===0&&(_e=5)}function Or(e,t,r){var n=ee,o=lt.transition;try{lt.transition=null,ee=1,A2(e,t,r,n)}finally{lt.transition=o,ee=n}return null}function A2(e,t,r,n){do En();while(ur!==null);if((j&6)!==0)throw Error(M(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(vh(e,i),e===Me&&(Se=Me=null,Re=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ea||(ea=!0,Ap(ma,function(){return En(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=lt.transition,lt.transition=null;var a=ee;ee=1;var s=j;j|=4,Wu.current=null,T2(e,r),Rp(r,e),i2(Hl),ha=!!Al,Hl=Al=null,e.current=r,P2(r,e,o),ch(),j=s,ee=a,lt.transition=i}else e.current=r;if(ea&&(ea=!1,ur=e,Pa=o),i=e.pendingLanes,i===0&&(gr=null),ph(r.stateNode,n),Ye(e,ye()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Ta)throw Ta=!1,e=ou,ou=null,e;return(Pa&1)!==0&&e.tag!==0&&En(),i=e.pendingLanes,(i&1)!==0?e===iu?Oo++:(Oo=0,iu=e):Oo=0,Sr(),null}function En(){if(ur!==null){var e=m0(Pa),t=lt.transition,r=ee;try{if(lt.transition=null,ee=16>e?16:e,ur===null)var n=!1;else{if(e=ur,ur=null,Pa=0,(j&6)!==0)throw Error(M(331));var o=j;for(j|=4,$=e.current;$!==null;){var i=$,a=i.child;if(($.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Po(8,c,i)}var f=c.child;if(f!==null)f.return=c,$=f;else for(;$!==null;){c=$;var m=c.sibling,h=c.return;if(zp(c),c===u){$=null;break}if(m!==null){m.return=h,$=m;break}$=h}}}var x=i.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var y=b.sibling;b.sibling=null,b=y}while(b!==null)}}$=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,$=a;else e:for(;$!==null;){if(i=$,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Po(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,$=d;break e}$=i.return}}var p=e.current;for($=p;$!==null;){a=$;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,$=g;else e:for(a=p;$!==null;){if(s=$,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Xa(9,s)}}catch(w){he(s,s.return,w)}if(s===a){$=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}if(j=o,Sr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Ia,e)}catch{}n=!0}return n}finally{ee=r,lt.transition=t}}return!1}function Wd(e,t,r){t=In(r,t),t=mp(e,t,1),e=mr(e,t,1),t=He(),e!==null&&(Zo(e,1,t),Ye(e,t))}function he(e,t,r){if(e.tag===3)Wd(e,e,r);else for(;t!==null;){if(t.tag===3){Wd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(gr===null||!gr.has(n))){e=In(r,e),e=gp(t,e,1),t=mr(t,e,1),e=He(),t!==null&&(Zo(t,1,e),Ye(t,e));break}}t=t.return}}function H2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&r,Me===e&&(Re&r)===r&&(_e===4||_e===3&&(Re&130023424)===Re&&500>ye()-Xu?Hr(e,0):Bu|=r),Ye(e,t)}function Ip(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ni,Ni<<=1,(Ni&130023424)===0&&(Ni=4194304)));var r=He();e=Yt(e,t),e!==null&&(Zo(e,t,r),Ye(e,r))}function D2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ip(e,r)}function N2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(t),Ip(e,r)}var Fp;Fp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Xe=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Xe=!1,C2(e,t,r);Xe=(e.flags&131072)!==0}else Xe=!1,le&&(t.flags&1048576)!==0&&N0(t,ka,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;sa(e,t),e=t.pendingProps;var o=Tn(t,Ie.current);Rn(t,r),o=Fu(null,t,n,e,o,r);var i=Au();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(n)?(i=!0,wa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Tu(t),o.updater=Ba,t.stateNode=o,o._reactInternals=t,Vl(t,n,e,r),t=ql(null,t,n,!0,i,r)):(t.tag=0,le&&i&&_u(t),Ae(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(sa(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=B2(n),e=gt(n,e),o){case 0:t=Ql(null,t,n,e,r);break e;case 1:t=Td(null,t,n,e,r);break e;case 11:t=Ed(null,t,n,e,r);break e;case 14:t=$d(null,t,n,gt(n.type,e),r);break e}throw Error(M(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:gt(n,o),Ql(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:gt(n,o),Td(e,t,n,o,r);case 3:e:{if(vp(t),e===null)throw Error(M(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Y0(e,t),Ma(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=In(Error(M(423)),t),t=Pd(e,t,n,r,o);break e}else if(n!==o){o=In(Error(M(424)),t),t=Pd(e,t,n,r,o);break e}else for(Qe=pr(t.stateNode.containerInfo.firstChild),qe=t,le=!0,bt=null,r=G0(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pn(),n===o){t=Vt(e,t,r);break e}Ae(e,t,n,r)}t=t.child}return t;case 5:return V0(t),e===null&&Gl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Dl(n,o)?a=null:i!==null&&Dl(n,i)&&(t.flags|=32),xp(e,t),Ae(e,t,a,r),t.child;case 6:return e===null&&Gl(t),null;case 13:return yp(e,t,r);case 4:return Pu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ln(t,null,n,r):Ae(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:gt(n,o),Ed(e,t,n,o,r);case 7:return Ae(e,t,t.pendingProps,r),t.child;case 8:return Ae(e,t,t.pendingProps.children,r),t.child;case 12:return Ae(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ie(_a,n._currentValue),n._currentValue=a,i!==null)if(yt(i.value,a)){if(i.children===o.children&&!Ge.current){t=Vt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Xt(-1,r&-r),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Ul(i.return,r,t),s.lanes|=r;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(M(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Ul(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ae(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Rn(t,r),o=ut(o),n=n(o),t.flags|=1,Ae(e,t,n,r),t.child;case 14:return n=t.type,o=gt(n,t.pendingProps),o=gt(n.type,o),$d(e,t,n,o,r);case 15:return hp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:gt(n,o),sa(e,t),t.tag=1,Ue(n)?(e=!0,wa(t)):e=!1,Rn(t,r),pp(t,n,o),Vl(t,n,o,r),ql(null,t,n,!0,e,r);case 19:return wp(e,t,r);case 22:return bp(e,t,r)}throw Error(M(156,t.tag))};function Ap(e,t){return c0(e,t)}function W2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,r,n){return new W2(e,t,r,n)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B2(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===pu)return 14}return 2}function br(e,t){var r=e.alternate;return r===null?(r=st(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ca(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")Vu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case pn:return Dr(r.children,o,i,t);case fu:a=8,o|=8;break;case bl:return e=st(12,r,t,o|2),e.elementType=bl,e.lanes=i,e;case xl:return e=st(13,r,t,o),e.elementType=xl,e.lanes=i,e;case vl:return e=st(19,r,t,o),e.elementType=vl,e.lanes=i,e;case Vd:return Ua(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ud:a=10;break e;case Yd:a=9;break e;case du:a=11;break e;case pu:a=14;break e;case or:a=16,n=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=st(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Dr(e,t,r,n){return e=st(7,e,n,t),e.lanes=r,e}function Ua(e,t,r,n){return e=st(22,e,n,t),e.elementType=Vd,e.lanes=r,e.stateNode={isHidden:!1},e}function ml(e,t,r){return e=st(6,e,null,t),e.lanes=r,e}function gl(e,t,r){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function X2(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ju(e,t,r,n,o,i,a,s,l){return e=new X2(e,t,r,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=st(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(i),e}function G2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Hp(e){if(!e)return vr;e=e._reactInternals;e:{if(Yr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var r=e.type;if(Ue(r))return H0(e,r,t)}return t}function Dp(e,t,r,n,o,i,a,s,l){return e=ju(r,n,!0,e,o,i,a,s,l),e.context=Hp(null),r=e.current,n=He(),o=hr(r),i=Xt(n,o),i.callback=t??null,mr(r,i,o),e.current.lanes=o,Zo(e,o,n),Ye(e,n),e}function Ya(e,t,r,n){var o=t.current,i=He(),a=hr(o);return r=Hp(r),t.context===null?t.context=r:t.pendingContext=r,t=Xt(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=mr(o,t,a),e!==null&&(vt(e,o,a,i),oa(e,o,a)),a}function Oa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Qu(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function U2(){return null}var Np=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}Va.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ya(e,t,null,null)};Va.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gr(function(){Ya(null,e,null,null)}),t[Ut]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=b0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ar.length&&t!==0&&t<ar[r].priority;r++);ar.splice(r,0,e),r===0&&v0(e)}};function Ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function Y2(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Oa(a);i.call(u)}}var a=Dp(t,n,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=a,e[Ut]=a.current,Xo(e.nodeType===8?e.parentNode:e),Gr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var u=Oa(l);s.call(u)}}var l=ju(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=l,e[Ut]=l.current,Xo(e.nodeType===8?e.parentNode:e),Gr(function(){Ya(t,l,r,n)}),l}function Qa(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Oa(a);s.call(l)}}Ya(t,a,e,o)}else a=Y2(r,t,e,o,n);return Oa(a)}g0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=_o(t.pendingLanes);r!==0&&(hu(t,r|1),Ye(t,ye()),(j&6)===0&&(Fn=ye()+500,Sr()))}break;case 13:Gr(function(){var n=Yt(e,1);if(n!==null){var o=He();vt(n,e,1,o)}}),Qu(e,1)}};bu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var r=He();vt(t,e,134217728,r)}Qu(e,134217728)}};h0=function(e){if(e.tag===13){var t=hr(e),r=Yt(e,t);if(r!==null){var n=He();vt(r,e,t,n)}Qu(e,t)}};b0=function(){return ee};x0=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};El=function(e,t,r){switch(t){case"input":if(Sl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Da(n);if(!o)throw Error(M(90));Qd(n),Sl(n,o)}}}break;case"textarea":Kd(e,r);break;case"select":t=r.value,t!=null&&_n(e,!!r.multiple,t,!1)}};o0=Gu;i0=Gr;var V2={usingClientEntryPoint:!1,Events:[ei,bn,Da,r0,n0,Gu]},yo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j2={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=l0(e),e===null?null:e.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||U2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(wo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wo.isDisabled&&wo.supportsFiber))try{Ia=wo.inject(j2),$t=wo}catch{}var wo;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V2;Je.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(t))throw Error(M(200));return G2(e,t,null,r)};Je.createRoot=function(e,t){if(!Ku(e))throw Error(M(299));var r=!1,n="",o=Np;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ju(e,1,!1,null,null,r,!1,n,o),e[Ut]=t.current,Xo(e.nodeType===8?e.parentNode:e),new qu(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=l0(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Gr(e)};Je.hydrate=function(e,t,r){if(!ja(t))throw Error(M(200));return Qa(null,e,t,!0,r)};Je.hydrateRoot=function(e,t,r){if(!Ku(e))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=Np;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Dp(t,null,e,1,r??null,o,!1,i,a),e[Ut]=t.current,Xo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Va(t)};Je.render=function(e,t,r){if(!ja(t))throw Error(M(200));return Qa(null,e,t,!1,r)};Je.unmountComponentAtNode=function(e){if(!ja(e))throw Error(M(40));return e._reactRootContainer?(Gr(function(){Qa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};Je.unstable_batchedUpdates=Gu;Je.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ja(r))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Qa(e,t,r,!1,n)};Je.version="18.3.1-next-f1338f8080-20240426"});var qa=Ht((tv,Xp)=>{"use strict";function Bp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp)}catch(e){console.error(e)}}Bp(),Xp.exports=Wp()});var Up=Ht(Zu=>{"use strict";var Gp=qa();Zu.createRoot=Gp.createRoot,Zu.hydrateRoot=Gp.hydrateRoot;var rv});var i1=Ht(Cs=>{"use strict";var px=un(),mx=Symbol.for("react.element"),gx=Symbol.for("react.fragment"),hx=Object.prototype.hasOwnProperty,bx=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xx={key:!0,ref:!0,__self:!0,__source:!0};function o1(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)hx.call(t,n)&&!xx.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:mx,type:e,key:i,ref:a,props:o,_owner:bx.current}}Cs.Fragment=gx;Cs.jsx=o1;Cs.jsxs=o1});var nn=Ht(($5,a1)=>{"use strict";a1.exports=i1()});var Ls=nt(un(),1),k1=nt(Up(),1),sf=nt(qa(),1);var q=nt(un(),1),l1=nt(qa(),1);var Yp=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,Vp=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`;var jp=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,Qp=`
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
`;var Ju=`#version 300 es
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

${Yp}
${Vp}
${Qp}

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

  ${jp}

  fragColor = vec4(color, opacity);
}
`;var Ka=`#version 300 es
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
}`,Za=Ju;function Dn(e,t,r){let n=e.createShader(t);if(!n)throw new Error("metal-fx: gl.createShader returned null");if(e.shaderSource(n,r),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){let o=e.getShaderInfoLog(n);throw e.deleteShader(n),new Error(`metal-fx: shader compile failed: ${o??"(no info log)"}`)}return n}function Ja(e,t,r){let n=e.createProgram();if(!n)throw new Error("metal-fx: gl.createProgram returned null");if(e.attachShader(n,t),e.attachShader(n,r),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){let o=e.getProgramInfoLog(n);throw e.deleteProgram(n),new Error(`metal-fx: program link failed: ${o??"(no info log)"}`)}return n}function Qt(e){let t=e.replace("#","");(t.length===3||t.length===4)&&(t=t.split("").map(n=>n+n).join(""));let r=t.length>=8?parseInt(t.slice(6,8),16)/255:1;return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255,r]}function es(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),o=Math.min(e,t,r),i=n-o,a=0,s=n===0?0:i/n;return i!==0&&(n===e?a=((t-r)/i+6)%6:n===t?a=(r-e)/i+2:a=(e-t)/i+4,a/=6),[a,s,n]}function ts(e,t,r){let n=Math.floor(e*6),o=e*6-n,i=r*(1-t),a=r*(1-o*t),s=r*(1-(1-o)*t),l=0,u=0,c=0;switch(n%6){case 0:l=r,u=s,c=i;break;case 1:l=a,u=r,c=i;break;case 2:l=i,u=r,c=s;break;case 3:l=i,u=a,c=r;break;case 4:l=s,u=i,c=r;break;case 5:l=r,u=i,c=a;break}return[Math.round(l*255),Math.round(u*255),Math.round(c*255)]}var Q2=0;var q2=1;var Nn={colorBack:"#00000000",speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:Q2,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:q2},K2={name:"chromatic",modes:{dark:{...Nn,colorTint:"#88ccff2e",shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...Nn,colorTint:"#66b0ff99",shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},Z2={name:"silver",modes:{dark:{...Nn,colorTint:"#ffffff66",shaderOpacity:.88},light:{...Nn,colorTint:"#ffffff40",shaderOpacity:1}}},J2={name:"gold",modes:{dark:{...Nn,colorTint:"#ffcc55cc",speed:.85,shaderOpacity:.92},light:{...Nn,colorTint:"#f7d488aa",shaderOpacity:1}}},rs={chromatic:K2,silver:Z2,gold:J2};var Vr=140,jr=40,tc=1.6,rc=1.3,S=null,Wn=null;function nc(){if(Wn!==null)return Wn;if(typeof document>"u")return Wn=!1;try{let t=document.createElement("canvas").getContext("webgl2");Wn=!!t,t?.getExtension("WEBGL_lose_context")?.loseContext()}catch{Wn=!1}return Wn}var Kp=null;function oc(e){Kp=e}var eb=["u_resolution","u_time","u_pixelRatio","u_colorBack","u_colorTint","u_repetition","u_softness","u_shiftRed","u_shiftBlue","u_distortion","u_contour","u_angle","u_shape","u_isImage","u_image","u_originX","u_originY","u_worldWidth","u_worldHeight","u_fit","u_scale","u_rotation","u_offsetX","u_offsetY","u_imageAspectRatio"];function qp(e){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);let t=Dn(e,e.VERTEX_SHADER,Ka),r=Dn(e,e.FRAGMENT_SHADER,Za),n=Ja(e,t,r);e.useProgram(n);let o=e.createBuffer();if(!o)throw new Error("metal-fx: gl.createBuffer returned null");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let i=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let a={};for(let l of eb)a[l]=e.getUniformLocation(n,l);let s=e.createTexture();return s&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a.u_image&&e.uniform1i(a.u_image,0)),{program:n,buffer:o,uniforms:a,dummyTexture:s}}var ec=null;function ic(){if(S)return S;let e=Math.min(2,typeof window<"u"&&window.devicePixelRatio||1),t=Math.round(96*e),r=typeof OffscreenCanvas<"u",n,o;if(r)n=new OffscreenCanvas(t,t),o=n.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});else{let f=document.createElement("canvas");f.width=t,f.height=t,o=f.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power",preserveDrawingBuffer:!0}),n=f}if(!o)throw new Error("metal-fx: WebGL2 not supported");let{program:i,buffer:a,uniforms:s,dummyTexture:l}=qp(o),u=f=>{f.preventDefault(),S&&(S.contextLost=!0)},c=()=>{if(!S)return;let f=qp(S.gl);S.program=f.program,S.buffer=f.buffer,S.uniforms=f.uniforms,S.dummyTexture=f.dummyTexture,S.presetDirty=!0,S.contextLost=!1,Kp?.()};return n.addEventListener("webglcontextlost",u,!1),n.addEventListener("webglcontextrestored",c,!1),ec=()=>{n.removeEventListener("webglcontextlost",u,!1),n.removeEventListener("webglcontextrestored",c,!1)},S={glCanvas:n,gl:o,program:i,buffer:a,uniforms:s,dummyTexture:l,preset:rs.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:r,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:e,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(t*t*4),glowPixelsW:t,glowPixelsH:t},S}function ac(){if(!S)return;let{gl:e,program:t,buffer:r,frameBitmap:n,dummyTexture:o}=S;ec?.(),ec=null;try{n?.close(),e.deleteBuffer(r),e.deleteProgram(t),o&&e.deleteTexture(o),e.getExtension("WEBGL_lose_context")?.loseContext()}catch{}S=null}var tb=Ka.replace("layout(location = 0)",`uniform vec2 u_ctCrop;
out vec2 v_ctLocal;
layout(location = 0)`).replace("vec2 uv = gl_Position.xy * .5;",`v_ctLocal=a_position.xy*.5+.5;
  vec2 uv=a_position.xy*.5*u_ctCrop;`),rb=Za.replace(/void\s+main\s*\(\s*\)/,"void ctMaterial()")+`
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
}`,wt=new Map,ns="";function Zp(e,t,r,n,o){let i=[],s=1/o;r=Math.max(0,Math.min(r,e/2,t/2));let l=(u,c,f)=>{let m=Math.max(0,r-f),h=u===0||u===1?e-f-m:f+m,x=u===0||u===3?f+m:t-f-m;i.push((h+m*Math.cos(c))/e*2-1,(x+m*Math.sin(c))/t*2-1)};for(let u=0;u<4;u++)for(let c=0;c<=16;c++){let f=(u-1+c/16)*Math.PI/2;l(u,f,-s),l(u,f,n+s)}return i.push(...i.slice(0,4)),new Float32Array(i)}function sc(e){let t=Dn(e,e.VERTEX_SHADER,tb),r=Dn(e,e.FRAGMENT_SHADER,rb),n=Ja(e,t,r);e.deleteShader(t),e.deleteShader(r),e.useProgram(n);let o=e.createBuffer();if(!o)throw Error("Direct ring buffer unavailable");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let i=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let a={};for(let l=0,u=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);l<u;l++){let c=e.getActiveUniform(n,l).name;a[c]=e.getUniformLocation(n,c)}let s=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.uniform1i(a.u_image,0),e.uniform1i(a.u_isImage,0),e.disable(e.BLEND),e.clearColor(0,0,0,0),{program:n,buffer:o,texture:s,uniforms:a}}function Jp(e){if(e.mask||e.deform||wt.has(e))return;let t=document.createElement("canvas");t.className="ctmb-metal-fx-canvas",t.dataset.ctmbDirect="",t.setAttribute("aria-hidden","true"),t.style.cssText=e.canvas.style.cssText;let r=null;try{if(r=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"}),!r)throw Error("Direct WebGL2 unavailable");let n=sc(r),o={canvas:t,gl:r,...n,preset:null,lost:!1,cached:!1,detach:()=>{},sourceOpacity:e.canvas.style.opacity,signature:"",vertices:0,time:0},i=s=>{s.preventDefault(),o.lost=!0,t.hidden=!0,e.canvas.style.opacity=o.cached?"0":o.sourceOpacity},a=()=>{try{let s=o.preset;Object.assign(o,sc(o.gl)),o.lost=!1,o.preset=null,o.signature="",ri(e),s&&ni(e,s,o.time),t.hidden=!1}catch(s){o.lost=!0,ns=String(s)}};t.addEventListener("webglcontextlost",i),t.addEventListener("webglcontextrestored",a),o.detach=()=>{t.removeEventListener("webglcontextlost",i),t.removeEventListener("webglcontextrestored",a)},e.canvas.after(t),wt.set(e,o),ri(e)}catch(n){ns=String(n),r?.getExtension("WEBGL_lose_context")?.loseContext(),t.remove()}}function em(e){return!!wt.get(e)&&!wt.get(e).lost}function lc(e,t){let r=wt.get(e);return r?(r.cached=t,r.canvas.style.visibility=t?"hidden":"",e.canvas.style.opacity=t||!r.lost?"0":r.sourceOpacity,!0):!1}function ri(e){let t=wt.get(e);if(!t||t.lost)return;let r=Math.min(2,window.devicePixelRatio||1),n=e.cssWidth,o=e.cssHeight,i=[n,o,r,e.cornerRadius,e.ringCssPx,e.shaderScale,e.opacityMul].join(",");if(i===t.signature)return;t.signature=i,t.canvas.width=Math.max(1,Math.round(n*r)),t.canvas.height=Math.max(1,Math.round(o*r)),t.gl.viewport(0,0,t.canvas.width,t.canvas.height);let{gl:a,uniforms:s}=t,l=Zp(n,o,e.cornerRadius,e.ringCssPx,r);t.vertices=l.length/2,a.bindBuffer(a.ARRAY_BUFFER,t.buffer),a.bufferData(a.ARRAY_BUFFER,l,a.STATIC_DRAW),a.uniform2f(s.u_ctCrop,Math.min(1,n/(Vr*e.shaderScale)),Math.min(1,o/(jr*e.shaderScale))),a.uniform2f(s.u_ctSize,n,o),a.uniform1f(s.u_ctRadius,e.cornerRadius),a.uniform1f(s.u_ctRing,e.ringCssPx),a.uniform1f(s.u_ctDpr,r),a.uniform2f(s.u_resolution,96*r,96*r),a.uniform1f(s.u_pixelRatio,r),t.preset=null}function ni(e,t,r){let n=wt.get(e);if(!n||n.lost)return!1;n.time=r;let{gl:o,uniforms:i}=n;if(n.preset!==t){n.preset=t,o.uniform4fv(i.u_colorBack,Qt(t.colorBack)),o.uniform4fv(i.u_colorTint,Qt(t.colorTint));for(let a of["repetition","softness","shiftRed","shiftBlue","distortion","contour","angle","shape","originX","originY","worldWidth","worldHeight","fit","scale","rotation","offsetX","offsetY"])o.uniform1f(i[`u_${a}`],t[a]);o.uniform1f(i.u_imageAspectRatio,1),o.uniform1f(i.u_ctAlpha,e.opacityMul*t.shaderOpacity)}return o.uniform1f(i.u_time,r*t.speed),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_STRIP,0,n.vertices),e.canvas.style.opacity!=="0"&&(e.canvas.style.opacity="0"),!0}function uc(e){let t=wt.get(e);t&&(wt.delete(e),t.detach(),e.canvas.style.opacity=t.sourceOpacity,t.canvas.remove(),t.gl.deleteBuffer(t.buffer),t.gl.deleteTexture(t.texture),t.gl.deleteProgram(t.program),t.gl.getExtension("WEBGL_lose_context")?.loseContext())}function tm(){for(let e of wt.keys())uc(e);ns=""}function rm(){return{directSurfaces:wt.size,directError:ns}}function nm(e,t){if(e.mask||e.deform)throw Error("Ring atlas requires a rigid ring");let r=document.createElement("canvas"),n=Math.min(2,window.devicePixelRatio||1),o=e.cssWidth,i=e.cssHeight;if(![o,i,n,e.cornerRadius,e.ringCssPx,e.shaderScale,e.opacityMul].every(Number.isFinite)||o<=0||i<=0||n<=0||e.shaderScale<=0)throw Error("Invalid ring atlas geometry");r.width=Math.max(1,Math.round(o*n)),r.height=Math.max(1,Math.round(i*n));let a=null,s=null,l=!1,u=()=>{l||(l=!0,a&&(s&&(a.deleteBuffer(s.buffer),a.deleteTexture(s.texture),a.deleteProgram(s.program)),a.getExtension("WEBGL_lose_context")?.loseContext()),r.width=r.height=1)};try{if(a=r.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"}),!a)throw Error("Ring atlas WebGL2 unavailable");s=sc(a);let{uniforms:c}=s,f=Zp(o,i,e.cornerRadius,e.ringCssPx,n),m=f.length/2,h=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_VIEWPORT_DIMS);if(r.width>Math.min(h,x[0])||r.height>Math.min(h,x[1]))throw Error("Ring atlas frame exceeds WebGL limits");a.viewport(0,0,r.width,r.height),a.bindBuffer(a.ARRAY_BUFFER,s.buffer),a.bufferData(a.ARRAY_BUFFER,f,a.STATIC_DRAW),a.uniform2f(c.u_ctCrop,Math.min(1,o/(Vr*e.shaderScale)),Math.min(1,i/(jr*e.shaderScale))),a.uniform2f(c.u_ctSize,o,i),a.uniform1f(c.u_ctRadius,e.cornerRadius),a.uniform1f(c.u_ctRing,e.ringCssPx),a.uniform1f(c.u_ctDpr,n),a.uniform2f(c.u_resolution,96*n,96*n),a.uniform1f(c.u_pixelRatio,n),a.uniform4fv(c.u_colorBack,Qt(t.colorBack)),a.uniform4fv(c.u_colorTint,Qt(t.colorTint));for(let d of["repetition","softness","shiftRed","shiftBlue","distortion","contour","angle","shape","originX","originY","worldWidth","worldHeight","fit","scale","rotation","offsetX","offsetY"])a.uniform1f(c[`u_${d}`],t[d]);a.uniform1f(c.u_imageAspectRatio,1),a.uniform1f(c.u_ctAlpha,e.opacityMul*t.shaderOpacity);let b=a,y=t.speed;return{canvas:r,dpr:n,maxTextureSize:h,render(d){if(l||b.isContextLost())throw Error("Ring atlas renderer unavailable");b.uniform1f(c.u_time,d*y),b.clear(b.COLOR_BUFFER_BIT),b.drawArrays(b.TRIANGLE_STRIP,0,m)},dispose:u}}catch(c){throw u(),c}}var nb=[8,4,2,1,7,6,5,3],sm=320,ob=128,om=40,lm=32*1024*1024,um=4096,ib=1e3/60,ab=.4,im=.01;function cm(e,t,r,n){let o=e*t*4;for(let i of nb){if(e*i>n)continue;let a=Math.min(sm,Math.floor(lm/o),Math.floor(n/t)*i),s=Math.floor(a/i)*i;if(!(s<ob))return{width:e,height:t,dpr:r,columns:i,rows:s/i,count:s,frameMs:ib,bytes:o*s}}throw Error("Native ring atlas exceeds the 32 MiB or dimension limit")}function fm(e){let t=Math.min(2,window.devicePixelRatio||1),r=e.cssWidth,n=e.cssHeight;if(e.mask||e.deform)throw Error("Ring atlas requires a rigid ring");if(![r,n,t].every(Number.isFinite)||r<=0||n<=0||t<=0)throw Error("Invalid ring atlas geometry");return cm(Math.max(1,Math.round(r*t)),Math.max(1,Math.round(n*t)),t,um)}function dm(e){let{width:t,height:r}=fm(e);return Math.min(lm,sm*t*r*4)}function Gn(e){if(e.aborted)throw e.reason??new DOMException("Ring atlas bake aborted","AbortError")}function am(e,t){if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvas.prototype.convertToBlob=="function"){let o=new OffscreenCanvas(e,t),i=o.getContext("2d",{alpha:!0});if(i)return{canvas:o,context:i};o.width=o.height=1}let r=document.createElement("canvas");r.width=e,r.height=t;let n=r.getContext("2d",{alpha:!0});if(!n)throw r.width=r.height=1,Error("Ring atlas Canvas2D unavailable");return{canvas:r,context:n}}function sb(e){return Gn(e),new Promise((t,r)=>{let n=0,o=typeof window.requestIdleCallback=="function",i=()=>e.removeEventListener("abort",a),a=()=>{o?window.cancelIdleCallback(n):cancelAnimationFrame(n),i(),r(e.reason??new DOMException("Ring atlas bake aborted","AbortError"))};e.addEventListener("abort",a,{once:!0});let s=()=>{i(),e.aborted?a():t()};n=o?window.requestIdleCallback(s,{timeout:50}):requestAnimationFrame(s)})}function lb(e,t){return Gn(t),new Promise((r,n)=>{let o=()=>{i(),n(t.reason??new DOMException("Ring atlas bake aborted","AbortError"))},i=()=>t.removeEventListener("abort",o);t.addEventListener("abort",o,{once:!0});let a=s=>{if(i(),t.aborted){o();return}s?r(s):n(Error("Ring atlas PNG encoding failed"))};try{"convertToBlob"in e?e.convertToBlob({type:"image/png"}).then(a,s=>{i(),n(s)}):e.toBlob(a,"image/png")}catch(s){i(),n(s)}})}async function pm(e,t,r){Gn(r);let n=null,o=null,i=null,a="",s=!1;try{fm(e),n=nm(e,{...t});let l=n.canvas.width,u=n.canvas.height,c=Math.min(um,n.maxTextureSize),f=cm(l,u,n.dpr,c),{count:m,columns:h,rows:x}=f;o=am(l*h,u*x),i=am(l,u);let b=o.context,y=i.context,d=m-om,p=performance.now(),g=0;for(let w=0;w<m;w++){Gn(r);let k=w%h*l,_=Math.floor(w/h)*u,z=ab+w*im;if(w<d)n.render(z),b.drawImage(n.canvas,k,_);else{let E=w-d,C=E/(om-1),L=C*C*(3-2*C);y.clearRect(0,0,l,u),y.globalCompositeOperation="source-over",y.globalAlpha=1-L,n.render(z),y.drawImage(n.canvas,0,0),y.globalCompositeOperation="lighter",y.globalAlpha=L,n.render(E*im),y.drawImage(n.canvas,0,0),y.globalCompositeOperation="source-over",y.globalAlpha=1,b.drawImage(i.canvas,k,_)}(++g>=4||performance.now()-p>=4)&&(w+1<m&&await sb(r),p=performance.now(),g=0)}Gn(r);let v=await lb(o.canvas,r);return Gn(r),a=URL.createObjectURL(v),s=!0,{src:a,...f}}finally{n?.dispose(),o&&(o.canvas.width=o.canvas.height=1),i&&(i.canvas.width=i.canvas.height=1),a&&!s&&URL.revokeObjectURL(a)}}var et=new Map,cc=new WeakMap,ub=64*1024*1024,oi=0,Un=1,os=!1,fc="",dc=0;function mm(e,t){return JSON.stringify([e.cssWidth,e.cssHeight,Math.min(2,window.devicePixelRatio||1),e.cornerRadius,e.ringCssPx,e.shaderScale,e.opacityMul,t])}function Yn(e,t){t.disposed||(t.disposed=!0,t.abort.abort(),t.animation?.cancel(),t.node?.remove(),t.url&&URL.revokeObjectURL(t.url),t.node&&!lc(e,!1)&&(e.canvas.style.opacity=t.sourceOpacity),oi-=t.bytes,et.delete(e))}function Vn(e,t){let r=t.animation;if(!r)return;t.rate!==Un&&(r.updatePlaybackRate(Un),t.rate=Un);let n=!(os||e.paused||!e.visible||document.hidden);t.playing!==n&&(n?r.play():r.pause(),t.playing=n)}function gm(e,t,r){if(e.mask||e.deform)return!1;let n=mm(e,t),o=et.get(e);if(o&&o.key!==n&&(Yn(e,o),o=void 0),o)return o.time=r,Vn(e,o),!!o.node;if(os||e.paused||!e.visible||document.hidden||cc.get(e)===n)return!1;let i;try{i=dm(e)}catch{return!1}if(!i||oi+i>ub)return!1;o={key:n,abort:new AbortController,bytes:i,url:"",node:null,animation:null,time:r,disposed:!1,rate:1,playing:null,sourceOpacity:e.canvas.style.opacity},et.set(e,o),oi+=i;let a=o;return pm(e,t,a.abort.signal).then(async s=>{if(a.disposed){URL.revokeObjectURL(s.src);return}a.url=s.src;let l=new Image;if(l.alt="",l.draggable=!1,l.src=s.src,await l.decode(),a.disposed)return;let u=document.createElement("div");u.className="ctmb-ring-frames",u.setAttribute("aria-hidden","true"),u.style.cssText="position:absolute;inset:0;overflow:hidden;border-radius:inherit;pointer-events:none;contain:strict;z-index:0";let c=s.width/s.dpr,f=s.height/s.dpr;l.style.cssText=`display:block;max-width:none;width:${c*s.columns}px;height:${f*s.rows}px;position:absolute;left:0;top:0;pointer-events:none;will-change:transform`,u.append(l),e.canvas.after(u),a.node=u;let m=Array.from({length:s.count+1},(h,x)=>{let b=x%s.count;return{transform:`translate3d(${-(b%s.columns)*c}px,${-Math.floor(b/s.columns)*f}px,0)`,offset:x/s.count,easing:"steps(1,end)"}});a.animation=l.animate(m,{duration:s.count*s.frameMs,iterations:1/0}),a.animation.currentTime=((a.time-.4)/.01%s.count+s.count)%s.count*s.frameMs,lc(e,!0),e.canvas.style.opacity="0",Vn(e,a),dc++}).catch(s=>{a.disposed||(fc=String(s?.message||s).slice(0,160),cc.set(e,n),Yn(e,a))}),!1}function hm(e){return!!et.get(e)?.node}function is(e,t){let r=et.get(e);r&&(e.mask||e.deform||r.key!==mm(e,t))&&pc(e)}function bm(){for(let[e,t]of et)document.hidden&&!t.node?Yn(e,t):Vn(e,t)}function pc(e){let t=et.get(e);t&&Yn(e,t),cc.delete(e)}function mc(e){os=e;for(let[t,r]of et)e&&!r.node?Yn(t,r):Vn(t,r)}function xm(e){if(Un!==e){Un=e;for(let[t,r]of et)Vn(t,r)}}function gc(e){let t=et.get(e);t&&Vn(e,t)}function vm(){for(let[e,t]of et)Yn(e,t);oi=0,os=!1,Un=1,fc="",dc=0}function ym(){return{cachedRings:[...et.values()].filter(e=>!!e.node).length,ringCachePending:[...et.values()].filter(e=>!e.node).length,ringCacheBytes:oi,ringCacheBakes:dc,ringCacheError:fc}}var as=0,be=null;function ii(){be&&(be.fence&&be.gl.deleteSync(be.fence),be.gl.deleteBuffer(be.buffer)),be=null,as=0}function wm(){if(!S||S.contextLost)return;let{gl:e,glCanvas:t}=S,r=t.width,n=t.height;if(be&&be.gl!==e&&ii(),!be){let i=e.createBuffer();if(!i)return;be={gl:e,buffer:i,fence:null,size:0}}if(be.fence){let i=e.clientWaitSync(be.fence,0,0);if(i===e.TIMEOUT_EXPIRED)return;e.deleteSync(be.fence),be.fence=null,i!==e.WAIT_FAILED&&be.size===r*n*4&&(e.bindBuffer(e.PIXEL_PACK_BUFFER,be.buffer),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,S.glowPixels),e.bindBuffer(e.PIXEL_PACK_BUFFER,null))}let o=performance.now();as&&o-as<1500||(as=o,(S.glowPixelsW!==r||S.glowPixelsH!==n)&&(S.glowPixelsW=r,S.glowPixelsH=n,S.glowPixels=new Uint8Array(r*n*4)),e.bindBuffer(e.PIXEL_PACK_BUFFER,be.buffer),be.size!==r*n*4&&(be.size=r*n*4,e.bufferData(e.PIXEL_PACK_BUFFER,be.size,e.STREAM_READ)),e.readPixels(0,0,r,n,e.RGBA,e.UNSIGNED_BYTE,0),be.fence=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.flush())}var jn={bx:0,by:0};function ss(e,t,r){if(!S)return jn.bx=0,jn.by=0,jn;let{glCanvas:n}=S,o=n.width,i=n.height,a=e.dpr,s=e.cssWidth*a,l=e.cssHeight*a,u=Vr*a,c=jr*a,f=s*(o/u)/e.shaderScale,m=l*(i/c)/e.shaderScale;f>o&&(f=o),m>i&&(m=i);let h=(o-f)/2,x=(i-m)/2,b=h+t/e.cssWidth*f,y=x+r/e.cssHeight*m;return jn.bx=Math.round(b),jn.by=Math.round(i-1-y),jn}var St={r:0,g:0,b:0,lum:0,count:0};function Sm(e,t,r,n,o,i){let a=Math.max(1,i|0),s=Math.max(0,n-a),l=Math.min(t,n+a+1),u=Math.max(0,o-a),c=Math.min(r,o+a+1);St.r=0,St.g=0,St.b=0,St.lum=0,St.count=0;for(let f=u;f<c;f++){let m=f*t;for(let h=s;h<l;h++){let x=(m+h)*4;St.r+=e[x],St.g+=e[x+1],St.b+=e[x+2],St.lum+=(.2126*e[x]+.7152*e[x+1]+.0722*e[x+2])/255,St.count++}}return St}var pe={r:255,g:255,b:255};function ai(e,t,r,n){if(!S)return 0;let o=ss(e,t,r),i=Sm(S.glowPixels,S.glowPixelsW,S.glowPixelsH,o.bx,o.by,n);return i.count>0?i.lum/i.count:0}function ls(e,t,r,n){if(!S)return pe.r=255,pe.g=255,pe.b=255,pe;let o=ss(e,t,r),i=Sm(S.glowPixels,S.glowPixelsW,S.glowPixelsH,o.bx,o.by,n);return i.count===0?(pe.r=255,pe.g=255,pe.b=255,pe):(pe.r=i.r/i.count,pe.g=i.g/i.count,pe.b=i.b/i.count,pe)}function km(e,t,r,n){if(!S)return pe.r=255,pe.g=255,pe.b=255,pe;let o=ss(e,t,r),{glowPixels:i,glowPixelsW:a,glowPixelsH:s}=S,l=Math.max(1,n|0),u=Math.max(0,o.bx-l),c=Math.min(a,o.bx+l+1),f=Math.max(0,o.by-l),m=Math.min(s,o.by+l+1),h=-1;pe.r=255,pe.g=255,pe.b=255;for(let x=f;x<m;x++){let b=x*a;for(let y=u;y<c;y++){let d=(b+y)*4,p=i[d],g=i[d+1],v=i[d+2],w=Math.max(p,g,v),k=Math.min(p,g,v),z=(w>0?(w-k)/w:0)*(.35+.65*(w/255));z>h&&(h=z,pe.r=p,pe.g=g,pe.b=v)}}return pe}var kt={r:255,g:255,b:255,lum:0};function _m(e,t,r,n){if(kt.r=255,kt.g=255,kt.b=255,kt.lum=0,!S)return kt;let o=ss(e,t,r),{glowPixels:i,glowPixelsW:a,glowPixelsH:s}=S,l=Math.max(1,n|0),u=Math.max(0,o.bx-l),c=Math.min(a,o.bx+l+1),f=Math.max(0,o.by-l),m=Math.min(s,o.by+l+1);for(let h=f;h<m;h++){let x=h*a;for(let b=u;b<c;b++){let y=(x+b)*4,d=(.2126*i[y]+.7152*i[y+1]+.0722*i[y+2])/255;d>kt.lum&&(kt.lum=d,kt.r=i[y],kt.g=i[y+1],kt.b=i[y+2])}}return kt}var hc={x:0,y:0};function qt(e=512){return{xy:new Float32Array(e*2),n:0}}function Pt(e,t,r,n,o,i,a=qt()){o=Math.max(0,Math.min(o,Math.min(r,n)/2));let s=60+Math.ceil(2*(r+n)/1.5)+8;a.xy.length<s*2&&(a.xy=new Float32Array(s*2));let l=a.xy,u=0,c=(h,x)=>{i?(i(h,x,hc),l[u*2]=hc.x,l[u*2+1]=hc.y):(l[u*2]=h,l[u*2+1]=x),u++},f=(h,x,b,y)=>{let d=Math.hypot(b-h,y-x),p=Math.max(1,Math.ceil(d/1.5));for(let g=0;g<p;g++){let v=g/p;c(h+(b-h)*v,x+(y-x)*v)}},m=(h,x,b,y)=>{for(let d=0;d<=14;d++){let p=b+(y-b)*(d/14);c(h+o*Math.cos(p),x+o*Math.sin(p))}};return f(e+o,t,e+r-o,t),m(e+r-o,t+o,-Math.PI/2,0),f(e+r,t+o,e+r,t+n-o),m(e+r-o,t+n-o,0,Math.PI/2),f(e+r-o,t+n,e+o,t+n),m(e+o,t+n-o,Math.PI/2,Math.PI),f(e,t+n-o,e,t+o),m(e+o,t+o,Math.PI,1.5*Math.PI),a.n=u,a}var us=!1;function db(){ii(),S&&S.instances.size>0&&S.pausedAtMs===null&&kr()}function zm(){bm(),!(!S||S.pausedAtMs!==null||S.contextLost)&&(document.hidden?ds():S.instances.size>0&&kr())}function Mm(){oc(db),us||(document.addEventListener("visibilitychange",zm),us=!0)}function Cm(){us&&document.removeEventListener("visibilitychange",zm),us=!1,ds(),vm(),tm(),ii(),ac(),oc(null),cs=0,kc=0,Kr=1e3/6,qr=0,xc=0,vc=0,Sc=0}function Rm(e){let t=ic(),r=e.hostCanvas.getContext("2d",{alpha:!0});if(!r)throw new Error("metal-fx: canvas 2D context unavailable");let n=e.scale??1,o={canvas:e.hostCanvas,ctx:r,cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius,kind:e.kind,ringCssPx:e.ringCssPx??(e.kind==="circle"?2:1)*n,shaderScale:e.shaderScale??(e.kind==="circle"?rc:tc)*n,opacityMul:e.opacityMul??1,glowGain:e.glowGain??1,visible:!0,paused:e.paused??!1,everCopied:!1,frozen:null,dpr:typeof window<"u"&&window.devicePixelRatio||1,scale:n,onAfterFrame:e.onAfterFrame,onComposite:e.onComposite,onFirstCopy:e.onFirstCopy,mask:e.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return wc(o),t.instances.add(o),Jp(o),t.rafId===0&&t.pausedAtMs===null&&kr(),o}function Em(e){if(pc(e),uc(e),!S)return;S.instances.delete(e);let t=S.glowQueue.indexOf(e);t!==-1&&S.glowQueue.splice(t,1),S.instances.size===0&&(ds(),ii(),ac())}function $m(e){S&&(S.glowQueue.includes(e)||S.glowQueue.push(e))}function Tm(e){if(!S)return;let t=S.glowQueue.indexOf(e);t!==-1&&S.glowQueue.splice(t,1)}function Zr(e,t){let r=!1;t.mask!==void 0&&(e.mask=t.mask),t.cssWidth!==void 0&&t.cssWidth!==e.cssWidth&&(e.cssWidth=t.cssWidth,r=!0),t.cssHeight!==void 0&&t.cssHeight!==e.cssHeight&&(e.cssHeight=t.cssHeight,r=!0),t.cornerRadius!==void 0&&(e.cornerRadius=t.cornerRadius),t.scale!==void 0&&(e.scale=t.scale),t.kind!==void 0&&t.kind!==e.kind&&(e.kind=t.kind,t.shaderScale===void 0&&(e.shaderScale=(t.kind==="circle"?rc:tc)*e.scale),t.ringCssPx===void 0&&(e.ringCssPx=(t.kind==="circle"?2:1)*e.scale)),t.shaderScale!==void 0&&(e.shaderScale=t.shaderScale),t.ringCssPx!==void 0&&(e.ringCssPx=t.ringCssPx),t.opacityMul!==void 0&&(e.opacityMul=t.opacityMul),t.glowGain!==void 0&&(e.glowGain=t.glowGain),t.paused!==void 0&&t.paused!==e.paused&&(e.paused=t.paused,gc(e),t.paused?Am(e):e.frozen=null,!t.paused&&S&&S.rafId===0&&S.pausedAtMs===null&&!S.contextLost&&kr()),r&&wc(e),S&&is(e,S.preset),ri(e),S&&ni(e,S.preset,qr)}function Pm(e,t){e.visible=t,gc(e),t&&S&&S.rafId===0&&S.pausedAtMs===null&&!S.contextLost&&kr()}function Lm(e){return(typeof window<"u"&&window.devicePixelRatio||1)===e.dpr?!1:(wc(e),Hm(e),!0)}var pb=null;function Om(e,t){let r=ic();r.preset=pb??rs[e].modes[t];for(let n of r.instances)is(n,r.preset);r.presetDirty=!0}function Im(){mc(!0),!(!S||S.pausedAtMs!==null)&&(S.pausedAtMs=performance.now(),ds())}function yc(){mc(!1),!(!S||S.pausedAtMs===null)&&(S.pausedMs+=performance.now()-S.pausedAtMs,S.pausedAtMs=null,S.instances.size>0&&kr())}var si=null;function Fm(e){si=e}function fs(e,t){!si||!S||!e.visible||e.paused||S.glowQueue.includes(e)&&(e.glowFast=!!si(e,t))}function wc(e){e.dpr=typeof window<"u"&&window.devicePixelRatio||1,S&&is(e,S.preset);let t=e.overscan,r=Math.max(1,Math.round((e.cssWidth+2*t)*e.dpr)),n=Math.max(1,Math.round((e.cssHeight+2*t)*e.dpr));e.canvas.width!==r&&(e.canvas.width=r),e.canvas.height!==n&&(e.canvas.height=n);let o=e.canvas.style;t>0?(o.left=`${-t}px`,o.top=`${-t}px`,o.width=`calc(100% + ${2*t}px)`,o.height=`calc(100% + ${2*t}px)`,o.borderRadius="0"):o.left!==""&&(o.left="",o.top="",o.width="100%",o.height="100%",o.borderRadius=""),ri(e),S&&ni(e,S.preset,qr)}function mb(e){let{ctx:t,dpr:r,canvas:n}=e,o=e.ringCssPx*r,i=n.width,a=n.height,s=Math.max(0,(e.cornerRadius-e.ringCssPx)*r);t.save(),t.globalCompositeOperation="destination-out",t.fillStyle="#000",t.beginPath(),t.roundRect(o,o,i-2*o,a-2*o,s),t.fill(),t.restore()}var gb=qt();function Qr(e,t,r,n,o,i,a,s){let{xy:l,n:u}=Pt(t,r,n,o,i,a,gb);e.beginPath();for(let c=0;c<u;c++)c===0?e.moveTo(l[0]*s,l[1]*s):e.lineTo(l[c*2]*s,l[c*2+1]*s);e.closePath()}function Am(e){if(!S)return null;let t=S.frameBitmap??S.glCanvas,r=S.glCanvas.width,n=S.glCanvas.height;if(r<1||n<1)return null;let o=e.frozen;o||(o=document.createElement("canvas"),e.frozen=o),(o.width!==r||o.height!==n)&&(o.width=r,o.height=n);let i=o.getContext("2d");return i?(i.clearRect(0,0,r,n),i.drawImage(t,0,0),o):(e.frozen=null,null)}function Hm(e){if(!S)return;let t=(e.paused?e.frozen??Am(e):null)??S.frameBitmap??S.glCanvas,r=e.dpr,n=e.canvas.width,o=e.canvas.height;if(n<1||o<1)return;let i=Math.max(1,Math.round(e.cssWidth*r)),a=Math.max(1,Math.round(e.cssHeight*r)),s=e.overscan*r,l=t.width,u=t.height,c=Vr*r,f=jr*r,m=i*(l/c)/e.shaderScale,h=a*(u/f)/e.shaderScale;m>l&&(m=l),h>u&&(h=u);let x=Math.max(0,(l-m)/2),b=Math.max(0,(u-h)/2),y=e.opacityMul*S.preset.shaderOpacity,d=e.ctx;d.clearRect(0,0,n,o);let p=e.deform;if(e.mask){if(y<1&&(d.globalAlpha=y),d.drawImage(t,x,b,m,h,0,0,n,o),y<1&&(d.globalAlpha=1),e.wantRaw){let g=e.rawCanvas;g||(g=document.createElement("canvas"),e.rawCanvas=g),(g.width!==n||g.height!==o)&&(g.width=n,g.height=o);let v=g.getContext("2d");v&&(v.clearRect(0,0,n,o),v.drawImage(e.canvas,0,0))}d.save(),d.globalCompositeOperation="destination-in",d.fillStyle="#000",e.mask(d,n,o,r),d.restore(),d.globalCompositeOperation="source-over"}else if(!p)y<1&&(d.globalAlpha=y),d.drawImage(t,x,b,m,h,0,0,n,o),y<1&&(d.globalAlpha=1),mb(e);else{let g=e.cssWidth,v=e.cssHeight,w=e.cornerRadius,k=e.ringCssPx,_=e.deformLayers;d.save(),d.translate(s,s);let z=i/m,E=a/h,C=Math.min(l,m*(i+2*s)/i),L=Math.min(u,h*(a+2*s)/a),W=Math.max(0,(l-C)/2),R=Math.max(0,(u-L)/2),O=C*z,V=L*E;if(y<1&&(d.globalAlpha=y),d.drawImage(t,W,R,C,L,i/2-O/2,a/2-V/2,O,V),y<1&&(d.globalAlpha=1),d.globalCompositeOperation="destination-in",Qr(d,0,0,g,v,w,p,r),d.fillStyle="#000",d.fill(),d.globalCompositeOperation="destination-out",Qr(d,k,k,g-2*k,v-2*k,Math.max(0,w-k),p,r),d.fill(),e.wantRing){let B=e.ringCanvas;B||(B=document.createElement("canvas"),e.ringCanvas=B),(B.width!==n||B.height!==o)&&(B.width=n,B.height=o);let P=B.getContext("2d");P&&(P.setTransform(1,0,0,1,0,0),P.globalCompositeOperation="source-over",P.clearRect(0,0,n,o),P.translate(s,s),y<1&&(P.globalAlpha=y),P.drawImage(t,W,R,C,L,i/2-O/2,a/2-V/2,O,V),P.globalAlpha=1,P.globalCompositeOperation="destination-out",Qr(P,k,k,g-2*k,v-2*k,Math.max(0,w-k),p,r),P.fillStyle="#000",P.fill(),P.globalCompositeOperation="source-over",P.setTransform(1,0,0,1,0,0))}if(_?.hairline){let B=_.hairline;d.globalCompositeOperation="destination-over",Qr(d,B.inset,B.inset,g-2*B.inset,v-2*B.inset,Math.max(0,w-B.inset),p,r),d.lineWidth=B.width*r,d.strokeStyle=B.color,d.stroke()}if(_?.fill&&(d.globalCompositeOperation="destination-over",Qr(d,0,0,g,v,w,p,r),d.fillStyle=_.fill,d.fill()),_?.rim){let B=_.rim;d.globalCompositeOperation="source-over",d.save(),Qr(d,0,0,g,v,w,p,r),d.clip();let P=B.inset+B.width/2;Qr(d,P,P,g-2*P,v-2*P,Math.max(0,w-P),p,r),d.lineWidth=B.width*r,d.strokeStyle=B.color,d.stroke(),d.restore()}d.restore(),d.globalCompositeOperation="source-over"}if(e.onComposite?.(),e.onFirstCopy){let g=e.onFirstCopy;e.onFirstCopy=void 0,g()}e.onAfterFrame?.()}function hb(){if(!S)return;let{gl:e,uniforms:t,preset:r,glCanvas:n,dpr:o}=S;t.u_resolution&&e.uniform2f(t.u_resolution,n.width,n.height),t.u_pixelRatio&&e.uniform1f(t.u_pixelRatio,o),t.u_colorBack&&e.uniform4fv(t.u_colorBack,Qt(r.colorBack)),t.u_colorTint&&e.uniform4fv(t.u_colorTint,Qt(r.colorTint)),t.u_repetition&&e.uniform1f(t.u_repetition,r.repetition),t.u_softness&&e.uniform1f(t.u_softness,r.softness),t.u_shiftRed&&e.uniform1f(t.u_shiftRed,r.shiftRed),t.u_shiftBlue&&e.uniform1f(t.u_shiftBlue,r.shiftBlue),t.u_distortion&&e.uniform1f(t.u_distortion,r.distortion),t.u_contour&&e.uniform1f(t.u_contour,r.contour),t.u_angle&&e.uniform1f(t.u_angle,r.angle),t.u_shape&&e.uniform1f(t.u_shape,r.shape),t.u_isImage&&e.uniform1i(t.u_isImage,0),t.u_imageAspectRatio&&e.uniform1f(t.u_imageAspectRatio,1),t.u_originX&&e.uniform1f(t.u_originX,r.originX),t.u_originY&&e.uniform1f(t.u_originY,r.originY),t.u_worldWidth&&e.uniform1f(t.u_worldWidth,r.worldWidth),t.u_worldHeight&&e.uniform1f(t.u_worldHeight,r.worldHeight),t.u_fit&&e.uniform1f(t.u_fit,r.fit),t.u_scale&&e.uniform1f(t.u_scale,r.scale),t.u_rotation&&e.uniform1f(t.u_rotation,r.rotation),t.u_offsetX&&e.uniform1f(t.u_offsetX,r.offsetX),t.u_offsetY&&e.uniform1f(t.u_offsetY,r.offsetY),S.presetDirty=!1}function bb(e){if(!S)return;let{gl:t,uniforms:r,preset:n,glCanvas:o}=S,i=qr*n.speed;t.viewport(0,0,o.width,o.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),S.presetDirty&&hb(),r.u_time&&t.uniform1f(r.u_time,i),t.drawArrays(t.TRIANGLES,0,6),S.frameCount++}var cs=0,Kr=1e3/6,qr=0,xc=0,vc=0,Sc=0,Dm=1e3/60,Lt=null,kc=0;function Nm(e){Kr!==e&&(Kr=e,xm(e>100?1:1/.6),Lt!==null&&(clearTimeout(Lt),Lt=null,kr()))}function Wm(){return{loopScheduled:!!S?.rafId||Lt!==null,targetFps:60,auxiliaryFps:1e3/Kr,directFrames:Sc,...rm(),...ym(),loopCallbacks:kc}}function bc(){if(!S||S.pausedAtMs!==null||document.hidden)return;let t=[...S.instances].some(n=>n.visible&&!n.paused&&!hm(n))?Dm:Kr,r=Math.max(0,t-(performance.now()-cs)-3);Lt=setTimeout(()=>{Lt=null,kr()},r)}function xb(e){if(!S)return;if(S.rafId=0,kc++,S.contextLost){S.rafId=0;return}let t=!1,r=!1;for(let i of S.instances)i.visible&&(!i.paused||!i.everCopied)&&(t=!0),i.visible&&!i.everCopied&&(r=!0);if(!t){S.rafId=0;return}if(e-cs<Dm-2){bc();return}cs=e;let n=(e-S.startMs-S.pausedMs)/1e3;qr+=Math.max(0,n-xc)*(Kr>100?.6:1),xc=n;let o=!1;for(let i of S.instances)i.visible&&(!i.paused||!i.everCopied)&&(gm(i,S.preset,qr)||(o=ni(i,S.preset,qr)||o));if(o&&Sc++,!r&&e-vc<Kr-3){bc();return}vc=e,bb(e),wm(),S.useOffscreen&&(S.frameBitmap?.close(),S.frameBitmap=S.glCanvas.transferToImageBitmap());for(let i of S.instances)i.visible&&(i.paused&&i.everCopied||((!em(i)||i.onAfterFrame||!i.everCopied)&&Hm(i),i.everCopied=!0));if(si&&S.glowQueue.length>0&&++S.glowSkip%1===0)for(let i of S.glowQueue)i.visible&&!i.paused&&(i.glowFast=!!si(i,e));bc()}function kr(){!S||S.rafId!==0||Lt!==null||document.hidden||S.contextLost||S.pausedAtMs!==null||(S.rafId=requestAnimationFrame(xb))}function ds(){Lt!==null&&clearTimeout(Lt),Lt=null,S&&(S.rafId!==0&&cancelAnimationFrame(S.rafId),S.rafId=0)}var ps={linear:e=>e,smoothstep:e=>e*e*(3-2*e)};function Qn(e,t,r,n=ps.linear){return{from:e,to:t,dur:r,ease:n,startMs:-1,val:e,done:!1}}function qn(e,t){e.startMs=t,e.val=e.from,e.done=!1}function _c(e,t){if(e.done||e.startMs<0)return e.val;let r=Math.min(1,(t-e.startMs)/e.dur);return e.val=e.from+(e.to-e.from)*e.ease(r),r>=1&&(e.done=!0),e.val}var vb=Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:1.35/3,extraFadeR:13/3,extraOpOuter:.85}),T={...vb},Bm=new Set;function Xm(e){return Bm.add(e),()=>{Bm.delete(e)}}var yb=Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1}),_t={...yb};function Jm(e){Object.assign(_t,e),_t.enabled?ig():ag(),!_t.spill&&It&&vs(),_t.cursor||Cr(),Ac()}var Zn=null,xs=null,Gm=0;function wb(){let e=window.devicePixelRatio||1;return Gm>0?Gm/e:1}function eg(e,t){if(!ft||!Zn)return;let r=wb(),n=(e-Zn.hotX*r).toFixed(2),o=(t-Zn.hotY*r).toFixed(2);ft.style.transform=r===1?`translate3d(${n}px,${o}px,0)`:`translate3d(${n}px,${o}px,0) scale(${r.toFixed(4)})`}var tg=!1,rg=0,ms=0,gs=null,hs={x:0,y:0};var bs=null,Um=0;function Sb(e,t,r,n,o){if(bs&&Um===r&&bs.length===n*o)return bs;let i=document.createElement("canvas");i.width=n,i.height=o;let a=i.getContext("2d",{willReadFrequently:!0});if(!a)return null;a.scale(r,r),a.drawImage(e,0,0,t.width,t.height);let s=a.getImageData(0,0,n,o).data,l=new Uint8ClampedArray(n*o);for(let u=0,c=3;u<l.length;u++,c+=4)l[u]=s[c]>=128?255:0;return bs=l,Um=r,l}function Ym(e,t,r,n){let o=e.getImageData(0,0,t,r),i=o.data;for(let a=0,s=0,l=3;a<r;a++)for(let u=0;u<t;u++,s++,l+=4){let c=i[l];if(c===0)continue;let f=n(u,a,s);i[l]=f>=1?c:f<=0?0:c*f}e.putImageData(o,0,0)}function kb(e,t){if(!gs)return 0;let r=-1/0;for(let n=0;n<gs.length;n+=2){let o=gs[n]*e+gs[n+1]*t;o>r&&(r=o)}return r===-1/0?0:r}var ci=0,Jn=!1,tn=0,Mc=0,Ot=Number.NaN,zr=Number.NaN,di=0,pi=0,Jr=0,en=0,ue=null,Y={d:0,nx:0,ny:0,k:1,left:0,top:0},zc={x:0,y:0},Kt={r:255,g:255,b:255},It=null,Cc="",Rc=-1,Ec=-1,mi=!1;function ng(){ci++,ig()}function og(){ci=Math.max(0,ci-1),ci===0&&ag()}var li=e=>typeof window.matchMedia=="function"&&window.matchMedia(e).matches;function Vm(){if(tg||performance.now()<rg||!Zn||!xs||li("(prefers-reduced-motion: reduce)")||li("(forced-colors: active)")||!li("(pointer: fine)")||!li("(hover: hover)"))return!1;let e=window.visualViewport;return!(e&&Math.abs(e.scale-1)>.001)}function ig(){!_t.enabled||Jn||ci===0||typeof document>"u"||li("(pointer: fine)")&&(Jn=!0,document.addEventListener("pointermove",sg,{passive:!0}),document.addEventListener("pointerleave",Mr),document.addEventListener("pointercancel",Mr),document.addEventListener("keydown",lg,{passive:!0}),document.addEventListener("visibilitychange",Mr),window.addEventListener("blur",Mr))}function ag(){Jn&&(Jn=!1,document.removeEventListener("pointermove",sg),document.removeEventListener("pointerleave",Mr),document.removeEventListener("pointercancel",Mr),document.removeEventListener("keydown",lg),document.removeEventListener("visibilitychange",Mr),window.removeEventListener("blur",Mr),tn!==0&&(cancelAnimationFrame(tn),tn=0),ue&&(ue.cursorLight=null,ue=null),Jr=0,en=0,It&&(It.remove(),It=null,Cc="",Rc=-1,Ec=-1,mi=!1),Cr(),ft&&(ft.remove(),ft=null))}var $c=!0,Fc=!1;function sg(e){$c=e.pointerType==="mouse"||e.pointerType==="",Fc=!1,Ot=di=e.clientX,zr=pi=e.clientY,gi&&ft&&($c&&ug(Ot,zr)?eg(Ot,zr):Cr()),Ac()}function lg(){Fc=!0,Cr()}function Mr(){Ot=zr=Number.NaN,Ac()}function Ac(){!Jn||tn!==0||(Mc=performance.now(),tn=requestAnimationFrame(cg))}function _b(e,t,r,n,o,i,a){let s=i==="circle"?Math.min(r,n)/2:Math.max(0,Math.min(o,Math.min(r,n)/2)),l=r/2,u=n/2,c=Math.max(0,r/2-s),f=Math.max(0,n/2-s),m=Math.max(-c,Math.min(c,e-l)),h=Math.max(-f,Math.min(f,t-u)),x=e-l-m,b=t-u-h,y=Math.hypot(x,b);if(y>1e-6)return a.x=l+m+x/y*s,a.y=u+h+b/y*s,y-s;let d=e,p=r-e,g=t,v=n-t,w=Math.min(d,p,g,v);return w===d?(a.x=0,a.y=t):w===p?(a.x=r,a.y=t):w===g?(a.x=e,a.y=0):(a.x=e,a.y=n),-w}var ft=null,_r=null,Tc=null,Ve=null,ui=null,jm=!1,Qm=0,qm=0,Km=0,gi=!1,Kn=!1,Pc="",Zt=null,fi="",zb=/^(INPUT|TEXTAREA|SELECT)$/,Lc=new WeakMap,Zm=0,Oc=null;function Mb(e){let t=e;for(;t&&t!==document.body;){if(zb.test(t.tagName)||t.isContentEditable)return!0;t=t.parentElement}return!1}function Cb(){if(ft)return!0;let e=document.createElement("div");e.className="ctmb-metal-fx-cursor",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";let t=document.createElement("canvas");t.style.display="block",e.appendChild(t),document.body.appendChild(e);let r=t.getContext("2d"),n=document.createElement("canvas"),o=n.getContext("2d");return!r||!o?(e.remove(),!1):(ft=e,_r=t,Tc=r,Ve=n,ui=o,!0)}function ug(e,t,r=!1){let n=performance.now();if(!r&&Kn&&n-Zm<12)return!0;Zm=n;let o=document.elementFromPoint(e,t);if(!o)return Ic(),!1;if(o===Oc&&Kn)return!0;Oc=o;let i=Lc.get(o);if(i===void 0){if(i=!Mb(o),i){let a=getComputedStyle(o).cursor;i=a==="auto"||a==="default"||a==="none"}Lc.set(o,i)}if(!i)return Ic(),!1;if(!Kn){let a=document.documentElement;Pc=a.style.cursor,a.style.cursor="none",Kn=!0}return o!==Zt&&(Zt&&(Zt.style.cursor=fi,Zt=null,fi=""),getComputedStyle(o).cursor!=="none"&&(Zt=o,fi=o.style.cursor,o.style.cursor="none")),!0}function Ic(){Zt&&(Zt.isConnected&&(Zt.style.cursor=fi),Zt=null,fi=""),Kn&&(document.documentElement.style.cursor=Pc,Kn=!1,Pc=""),Oc=null,Lc=new WeakMap}function Cr(){Ic(),ft&&gi&&(ft.style.display="none",gi=!1)}function Rb(e,t,r){if(!Tc||!ui||!_r||!Ve||!ft||!Zn||!xs)return;let n=Zn,o=Math.min(3,window.devicePixelRatio||1);if((o!==Qm||n.width!==qm||n.height!==Km)&&(Qm=o,qm=n.width,Km=n.height,_r.width=Ve.width=Math.ceil(n.width*o),_r.height=Ve.height=Math.ceil(n.height*o),_r.style.width=`${n.width}px`,_r.style.height=`${n.height}px`),!jm&&(ui=Ve.getContext("2d",{willReadFrequently:!0}),jm=!0,!ui))return;let i=Tc,a=ui,s=n.width,l=n.height;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,_r.width,_r.height),i.scale(o,o),i.drawImage(xs,0,0,s,l);let u=Y.left+Y.nx*Y.k,c=Y.top+Y.ny*Y.k,f=di-n.hotX+hs.x,m=pi-n.hotY+hs.y,h=u-f,x=c-m,b=Math.hypot(h,x),y=b>.01?h/b:1,d=b>.01?x/b:0,p=kb(y,d)+t.cursorEdge,g=Math.max(0,b-p),v=Math.max(1,t.cursorFalloff),w=1/(1+g/v*(g/v)),k=e.cssWidth/2,_=e.cssHeight/2,z=k-Y.nx,E=_-Y.ny,C=Math.hypot(z,E)||1,L=e.mask?0:e.ringCssPx*.5+1,W=Y.nx+z/C*L,R=Y.ny+E/C*L,O=_m(e,W,R,4),V=O.lum,B=O.r,P=O.g,N=O.b,H=t.cursorStrength*w*r,K=t.cursorDiffuse*w*(.5+.5*Math.min(1,V/.5))*r;if(b>.01&&H+K>.005){let U=h/b,ne=x/b,we=Math.atan2(ne,U),me=Math.max(.1,Math.min(1,t.cursorDepth)),D=hs.x+p*U,A=hs.y+p*ne,Q=Math.max(1,t.cursorReach);if(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,Ve.width,Ve.height),a.scale(o,o),H>.005){a.save(),a.filter=t.cursorBlur>0?`blur(${t.cursorBlur}px)`:"none";let X=Math.max(1,t.cursorZoom);a.translate(D,A),a.rotate(we),a.scale(-1,1),a.translate((b-p)*me,0),a.rotate(-we),a.scale(X,X);let ge=e.overscan,xe=Y.k,$e=Math.max(1,Math.ceil(H));a.globalAlpha=Math.min(1,H/$e),a.globalCompositeOperation="lighter";let rt=e.mask&&e.rawCanvas?e.rawCanvas:e.canvas;for(let re=0;re<$e;re++)a.drawImage(rt,-(Y.nx+ge)*xe,-(Y.ny+ge)*xe,(e.cssWidth+2*ge)*xe,(e.cssHeight+2*ge)*xe);a.restore();let F=1/o,te=1/Q;Ym(a,Ve.width,Ve.height,(re,Ne)=>{let At=-(((re+.5)*F-D)*U+((Ne+.5)*F-A)*ne);return At<=0?1:1-At*te})}if(K>.005){let X=Math.max(B,P,N)||1,ge=Math.round(B*255/X),xe=Math.round(P*255/X),$e=Math.round(N*255/X),rt=Q*1.2,F=a.createLinearGradient(D+.5*U,A+.5*ne,D-rt*U,A-rt*ne),te=Math.min(1,K);F.addColorStop(0,`rgba(${ge},${xe},${$e},${te.toFixed(3)})`),F.addColorStop(.45,`rgba(${ge},${xe},${$e},${(te*.4).toFixed(3)})`),F.addColorStop(1,`rgba(${ge},${xe},${$e},0)`),a.globalCompositeOperation="lighter",a.fillStyle=F,a.fillRect(0,0,s,l),a.globalCompositeOperation="source-over"}let Z=Sb(xs,n,o,Ve.width,Ve.height);Z&&Ym(a,Ve.width,Ve.height,(X,ge,xe)=>Z[xe]===0?0:1),i.globalCompositeOperation="lighter",i.drawImage(Ve,0,0,s,l),i.globalCompositeOperation="source-over"}eg(di,pi),gi||(ft.style.display="",gi=!0)}function Eb(){if(It)return It;let e=document.createElement("div");return e.className="ctmb-metal-fx-cursor-spill",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none",document.body.appendChild(e),It=e,e}function vs(){!It||!mi||(It.style.display="none",It.style.opacity="0",mi=!1)}function cg(e){if(tn=0,!Jn)return;let t=performance.now();try{$b(e)}catch(n){tg=!0,Cr(),vs(),ue&&(ue.cursorLight=null,ue=null),typeof console<"u"&&console.warn("metal-fx: cursor light disabled after error",n);return}performance.now()-t>6?++ms>=20&&(ms=0,rg=performance.now()+5e3,Cr()):ms>0&&ms--}function $b(e){let t=_t,r=Math.min(.05,Math.max(.001,(e-Mc)/1e3));Mc=e;let n=null,o=0,i=0;if(t.enabled&&S&&!Number.isNaN(Ot)){let s=Number.POSITIVE_INFINITY,l=Math.max(1,t.reach),u=t.cursor&&Vm()?Math.max(1,t.cursorDistance):0,c=Math.max(l,u);for(let f of S.instances){if(!f.visible||!f.canvas.isConnected)continue;let m=f.canvas.getBoundingClientRect();if(m.width<=0)continue;let h=f.overscan,x=m.width/(f.cssWidth+2*h),b=m.left+h*x,y=m.top+h*x,d=c*x;if(Ot<b-d||Ot>b+f.cssWidth*x+d||zr<y-d||zr>y+f.cssHeight*x+d)continue;let p=(Ot-b)/x,g=(zr-y)/x,v=_b(p,g,f.cssWidth,f.cssHeight,f.cornerRadius,f.kind,zc),w=Math.abs(v);w<=c&&w<s&&(s=w,n=f,Y.d=v,Y.nx=zc.x,Y.ny=zc.y,Y.k=x,Y.left=b,Y.top=y)}if(n){if(s<=l){let f=1-s/l;o=f*f*(3-2*f)}s<=u&&(i=Math.min(1,(1-s/u)*3)),n.mask&&(Y.nx=n.cssWidth/2,Y.ny=n.cssHeight/2,n.wantRaw=!0)}}let a=1-Math.exp(-(r*1e3)/(Math.max(1,t.fadeMs)/3));if(Jr+=(o-Jr)*a,en+=(i-en)*a,n&&n!==ue&&(ue&&(ue.cursorLight=null,fs(ue,e)),ue=n),!n&&Jr<.002&&en<.002){Jr=0,en=0,ue&&(ue.cursorLight=null,fs(ue,e),ue=null),vs(),Cr();return}if(ue){if(t.catchLight){let s=ue.cursorLight??(ue.cursorLight={x:0,y:0,w:0});s.x=Y.nx,s.y=Y.ny,s.w=Jr}else ue.cursorLight&&(ue.cursorLight=null);if(fs(ue,e),t.cursor&&en>.002&&$c&&!Fc&&!Number.isNaN(Ot)&&Vm()&&Cb()&&ug(Ot,zr)?Rb(ue,t,en):Cr(),t.spill){let s=Eb(),l=ls(ue,Y.nx,Y.ny,2),u=ai(ue,Y.nx,Y.ny,3),c=Math.max(l.r,l.g,l.b)||1,f=es(l.r*255/c,l.g*255/c,l.b*255/c),[m,h,x]=ts(f[0],Math.min(1,f[1]*t.spillSaturation),1);Kt.r+=(m-Kt.r)*.15,Kt.g+=(h-Kt.g)*.15,Kt.b+=(x-Kt.b)*.15;let b=Math.round(Kt.r/6)*6,y=Math.round(Kt.g/6)*6,d=Math.round(Kt.b/6)*6,p=`radial-gradient(closest-side, rgba(${b},${y},${d},1) 0%, rgba(${b},${y},${d},0.35) 45%, rgba(${b},${y},${d},0) 100%)`;p!==Cc&&(Cc=p,s.style.background=p);let g=Math.max(1,t.spillRadius*Y.k);g!==Rc&&(Rc=g,s.style.width=`${(2*g).toFixed(1)}px`,s.style.height=`${(2*g).toFixed(1)}px`),t.spillBlur!==Ec&&(Ec=t.spillBlur,s.style.filter=t.spillBlur>0?`blur(${t.spillBlur}px)`:"");let v=Y.left+Y.nx*Y.k,w=Y.top+Y.ny*Y.k,k=di+(v-di)*t.spillOffset,_=pi+(w-pi)*t.spillOffset;s.style.transform=`translate3d(${(k-g).toFixed(2)}px,${(_-g).toFixed(2)}px,0)`;let z=Math.min(1,Math.max(0,u/.3)),E=1-t.spillLumGain+t.spillLumGain*z,C=Y.d<0?t.spillInside:1,L=Math.max(0,Math.min(1,t.spillStrength*Jr*E*C));mi||(s.style.display="",mi=!0),s.style.opacity=L.toFixed(3)}else vs();tn=requestAnimationFrame(cg)}}var ys=new Map;function Tb(e,t){let r=Math.sqrt(12*e*e/t+1),n=Math.floor(r);n%2===0&&n--;let o=n+2,i=(12*e*e-t*n*n-4*t*n-3*t)/(-4*n-4),a=Math.round(i),s=[];for(let l=0;l<t;l++)s.push(l<a?n:o);return s}function Pb(e,t,r,n,o){let i=1/(o+o+1);for(let a=0;a<n;a++){let s=a*r,l=0;for(let u=-o;u<=o;u++)l+=e[s+Math.min(r-1,Math.max(0,u))];for(let u=0;u<r;u++){t[s+u]=l*i;let c=s+Math.max(0,u-o),f=s+Math.min(r-1,u+o+1);l+=e[f]-e[c]}}}function Lb(e,t,r,n,o){let i=1/(o+o+1);for(let a=0;a<r;a++){let s=0;for(let l=-o;l<=o;l++)s+=e[Math.min(n-1,Math.max(0,l))*r+a];for(let l=0;l<n;l++){t[l*r+a]=s*i;let u=Math.max(0,l-o)*r+a,c=Math.min(n-1,l+o+1)*r+a;s+=e[c]-e[u]}}}function hi(e,t,r,n){if(n<=.05)return e;let o=new Float32Array(e.length),i=e;for(let a of Tb(n,3)){let s=(a-1)/2;Pb(i,o,t,r,s),Lb(o,i,t,r,s)}return i}function Ob(e,t,r,n,o,i,a){let s=document.createElement("canvas");s.width=r,s.height=n;let l=s.getContext("2d",{willReadFrequently:!0}),u=new Float32Array(r*n);if(!l)return u;l.scale(o,o),l.strokeStyle="#fff",l.lineCap="round",l.lineJoin="round",l.lineWidth=t,l.beginPath(),l.moveTo(i-e,a),l.lineTo(i+e,a),l.stroke();let c=l.getImageData(0,0,r,n).data;for(let f=0,m=3;f<u.length;f++,m+=4)u[f]=c[m]/255;return u}function fg(e,t,r,n,o){let i=0;for(let b of e)i=Math.max(i,(b.stroke/2+3*b.blur)*r);let a=Math.ceil(i)+1,s=2*t+2*a,l=2*a,u=Math.ceil(s*n),c=Math.ceil(l*n),f=new Float32Array(u*c);for(let b of e){let y=Ob(t,b.stroke*r,u,c,n,a,a);y=hi(y,u,c,b.blur*r*n);let d=b.opacity;for(let p=0;p<f.length;p++){let g=y[p]*d;f[p]=f[p]+g*(1-f[p])}}if(o>0){let b=a*n,y=a*n,d=o*r*n;for(let p=0;p<c;p++)for(let g=0;g<u;g++){let v=Math.hypot(g+.5-b,p+.5-y)/d,w;v<=.3?w=1:v<=.65?w=1-(v-.3)/.35*.75:v<1?w=.25*(1-(v-.65)/.35):w=0,f[p*u+g]*=w}}let m=document.createElement("canvas");m.width=u,m.height=c;let h=m.getContext("2d"),x=new Uint8ClampedArray(u*c);for(let b=0;b<f.length;b++)x[b]=Math.round(Math.min(1,f[b])*255);if(h){let b=h.createImageData(u,c),y=b.data;for(let d=0,p=0;d<f.length;d++,p+=4)y[p]=255,y[p+1]=255,y[p+2]=255,y[p+3]=x[d];h.putImageData(b,0,0)}return{canvas:m,alpha:x,w:s,h:l,ax:a,ay:a}}function dg(){return[T.haloStrokeXl,T.haloStrokeLg,T.haloStrokeMd,T.haloStrokeSm,T.haloBlurXl,T.haloBlurLg,T.haloBlurMd,T.haloBlurSm,T.haloOpXl,T.haloOpLg,T.haloOpMd,T.haloOpSm,T.extraStrokeOuter,T.extraStrokeCore,T.extraBlurOuter,T.extraBlurCore,T.extraFadeR,T.extraOpOuter].join(",")}function pg(e,t,r){let n=`h|${e.toFixed(2)}|${t}|${r}|${dg()}`,o=ys.get(n);return o||(o=fg([{stroke:T.haloStrokeXl,blur:T.haloBlurXl,opacity:T.haloOpXl},{stroke:T.haloStrokeLg,blur:T.haloBlurLg,opacity:T.haloOpLg},{stroke:T.haloStrokeMd,blur:T.haloBlurMd,opacity:T.haloOpMd},{stroke:T.haloStrokeSm,blur:T.haloBlurSm,opacity:T.haloOpSm}],e,t,r,0),ys.set(n,o)),o}function mg(e,t,r){let n=`e|${e.toFixed(2)}|${t}|${r}|${dg()}`,o=ys.get(n);return o||(o=fg([{stroke:T.extraStrokeOuter,blur:T.extraBlurOuter,opacity:T.extraOpOuter},{stroke:T.extraStrokeCore,blur:T.extraBlurCore,opacity:1}],e,t,r,T.extraFadeR),ys.set(n,o)),o}function Hc(e,t,r,n,o){let i=t<<16|r<<8|n;if(o.canvas&&o.tint===i&&o.src===e)return o.canvas;let a=o.canvas,s=o.img;(!a||!s||o.src!==e)&&(a=document.createElement("canvas"),a.width=e.canvas.width,a.height=e.canvas.height,s=a.getContext("2d")?.createImageData(a.width,a.height)??null);let l=a.getContext("2d");if(l&&s){let u=s.data,c=e.alpha;for(let f=0,m=0;f<c.length;f++,m+=4)u[m]=t,u[m+1]=r,u[m+2]=n,u[m+3]=c[f];l.putImageData(s,0,0)}return o.canvas=a,o.img=s,o.tint=i,o.src=e,a}function ws(e,t,r){let n=Math.max(0,Math.min(r,Math.min(e,t)/2));return 2*Math.max(0,e-2*n)+2*Math.max(0,t-2*n)+2*Math.PI*n}function bi(e,t,r,n){return n==="circle"?2*Math.PI*Math.max(0,Math.min(r,Math.min(e,t)/2)):ws(e,t,r)}function eo(e,t,r,n,o,i,a,s){let l=s||{x:0,y:0},u=Math.max(0,Math.min(n,Math.min(t,r)/2));if(a==="circle"){let d=2*Math.PI*u;if(d<=1e-4)return l.x=t*.5,l.y=r*.5,l;e=(e%d+d)%d;let p=-Math.PI/2+e/d*Math.PI*2,g=Math.max(0,u-o+i);return l.x=t*.5+g*Math.cos(p),l.y=r*.5+g*Math.sin(p),l}let c=Math.max(0,t-2*u),f=Math.max(0,r-2*u),m=Math.PI*u/2,h=2*(c+f)+4*m;e=(e%h+h)%h;let x=Math.max(0,u-o+i),b=e;if(b<c)return l.x=u+b,l.y=o-i,l;if(b-=c,b<m){let d=-Math.PI/2+(m>0?b/m:0)*(Math.PI/2);return l.x=t-u+x*Math.cos(d),l.y=u+x*Math.sin(d),l}if(b-=m,b<f)return l.x=t-o+i,l.y=u+b,l;if(b-=f,b<m){let d=(m>0?b/m:0)*(Math.PI/2);return l.x=t-u+x*Math.cos(d),l.y=r-u+x*Math.sin(d),l}if(b-=m,b<c)return l.x=t-u-b,l.y=r-o+i,l;if(b-=c,b<m){let d=Math.PI/2+(m>0?b/m:0)*(Math.PI/2);return l.x=u+x*Math.cos(d),l.y=r-u+x*Math.sin(d),l}if(b-=m,b<f)return l.x=o-i,l.y=r-u-b,l;b-=f;let y=Math.PI+(m>0?b/m:0)*(Math.PI/2);return l.x=u+x*Math.cos(y),l.y=u+x*Math.sin(y),l}function hg(e,t,r,n,o,i){let a=Math.max(0,Math.min(o,Math.min(r,n)/2));if(i==="circle"){let w=2*Math.PI*a;return w<=1e-4?0:((Math.atan2(t-n/2,e-r/2)+Math.PI/2)/(2*Math.PI)*w%w+w)%w}let s=Math.max(0,r-2*a),l=Math.max(0,n-2*a),u=Math.PI*a/2,c=Math.PI/2,f=s,m=f+u,h=m+l,x=h+u,b=x+s,y=b+u,d=y+l,p=e>=a&&e<=r-a,g=t>=a&&t<=n-a;if(p&&g){let w=e,k=r-e,_=t,z=n-t,E=Math.min(w,k,_,z);return E===_?e-a:E===k?m+(t-a):E===z?x+(r-a-e):y+(n-a-t)}if(p)return t<n/2?e-a:x+(r-a-e);if(g)return e>r/2?m+(t-a):y+(n-a-t);if(e>r/2&&t<n/2){let w=Math.atan2(t-a,e-(r-a));return f+(w+c)/c*u}if(e>r/2){let w=Math.atan2(t-(n-a),e-(r-a));return h+w/c*u}if(t>n/2){let w=Math.atan2(t-(n-a),e-a);return b+(w-c)/c*u}let v=Math.atan2(t-a,e-a);return d+(v+Math.PI)/c*u}var Dc={x:0,y:0},Nc={x:0,y:0};function bg(e,t,r,n,o,i){return eo(e-.1,t,r,n,o,0,i,Dc),eo(e+.1,t,r,n,o,0,i,Nc),Math.atan2(Nc.y-Dc.y,Nc.x-Dc.x)}function Wc(e,t,r){if(e===t)return r<e?0:1;let n=Math.max(0,Math.min(1,(r-e)/(t-e)));return n*n*(3-2*n)}function xg(e){if(e.samplePoints&&e.samplePoints.length>0)return e.samplePoints.map((o,i)=>({x:o.x,y:o.y,arc:i}));let t=bi(e.width,e.height,e.cornerRadius,e.kind),r=T.inset*(e.scale??1),n=[];for(let o=0;o<16;o++){let i=o/16*t,a=eo(i,e.width,e.height,e.cornerRadius,r,0,e.kind);n.push({x:a.x,y:a.y,arc:i})}return n}var Ib=.05,Fb=120*(1e3/15),vg=1e3/15,yg=2e3,Bc=400,Ab=2.625,Hb=1.008,Db=.31,kg=140,_g=40,zg=20,Nb=34,Ss=.25,Wb=.01,wg=.004,Bb=.5,Xb=3.5,dt={x:0,y:0};function Uc(e,t){let{width:r,height:n}=t,o=t.scale??1,i=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),a=bi(r,n,t.cornerRadius,t.kind)/ws(kg,_g,zg),s=Math.max(1,T.haloHalfLen*a),l=Math.max(.6,T.extraHalfLen*a),u=pg(s,o,i),c=mg(l,o,i),f=Math.ceil(Math.max(u.ay,c.ay)+T.extraOutward*a*o+2),m=document.createElement("div");m.className="ctmb-metal-fx-glow-svg",m.setAttribute("aria-hidden","true");let h=document.createElement("div");h.className="ctmb-metal-fx-glow-env",h.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 170ms linear";let x=document.createElement("canvas");x.className="ctmb-metal-fx-glow-canvas";let b=r+2*f,y=n+2*f;x.width=Math.ceil(b*i),x.height=Math.ceil(y*i),x.style.cssText=`position:absolute;left:${-f}px;top:${-f}px;width:${b}px;height:${y}px;pointer-events:none`,h.appendChild(x),m.appendChild(h),e.appendChild(m);let d=x.getContext("2d",{willReadFrequently:!!t.maskDataUrl});if(!d)throw new Error("metal-fx: glow canvas 2D context unavailable");let p={wrap:m,env:h,canvas:x,ctx:d,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:f,dpr:i,halo:u,extra:c,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:qt(),mI:qt(),maskSum:Number.NaN,maskDeformed:!1,deform:null,width:r,height:n,cornerRadius:t.cornerRadius,kind:t.kind,scale:o,perim:xg(t),pointMode:!!(t.samplePoints&&t.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:Number.NaN,dY:Number.NaN,dAng:Number.NaN,dEX:Number.NaN,dEY:Number.NaN,dHOp:Number.NaN,dEOp:Number.NaN,dHaloTint:"",dExtraTint:"",dirty:!0,dEnv:-1};if(t.maskDataUrl){let g=new Image;g.onload=()=>{let v=document.createElement("canvas");v.width=x.width,v.height=x.height;let w=v.getContext("2d",{willReadFrequently:!0});if(!w)return;w.scale(i,i),w.drawImage(g,f,f,r,n);let k=w.getImageData(0,0,v.width,v.height).data,_=v.width*v.height,z=new Float32Array(_);for(let R=0,O=3;R<_;R++,O+=4)z[R]=k[O]/255;let E=hi(Float32Array.from(z),v.width,v.height,Xb*i),C=0;for(let R=0;R<_;R++)E[R]>C&&(C=E[R]);let L=C>0?Bb/C:0,W=new Uint8ClampedArray(_);for(let R=0;R<_;R++)W[R]=Math.round(Math.max(z[R],E[R]*L)*255);p.maskAlpha=W,p.maskReady=!0,p.dirty=!0},g.src=t.maskDataUrl}else Gc(p,null);return p}function Gc(e,t){if(e.pointMode)return;let{margin:r,width:n,height:o,cornerRadius:i}=e,a=e.kind==="circle"?2:1;Pt(0,0,n,o,i,t,e.mO),Pt(a,a,n-2*a,o-2*a,Math.max(0,i-a),t,e.mI);let s=new Path2D;Xc(s,e.mO,r);let l=new Path2D;Xc(l,e.mO,r),Xc(l,e.mI,r);let u=new Path2D;u.rect(0,0,n+2*r,o+2*r),u.addPath(s),e.surroundPath=u,e.bandPath=l,e.maskReady=!0}function Xc(e,t,r){let n=t.xy;for(let o=0;o<t.n;o++){let i=n[o*2]+r,a=n[o*2+1]+r;o===0?e.moveTo(i,a):e.lineTo(i,a)}e.closePath()}function Gb(e,t){if(!e)return 0;Pt(0,0,t.width,t.height,t.cornerRadius,e,t.mO);let r=0,n=t.mO.xy;for(let o=0;o<t.mO.n;o+=4)r+=n[o*2]*1.37+n[o*2+1];return r}function Mg(e,t){if(e.deform=t,!e.pointMode)if(t){let r=Gb(t,e);r!==e.maskSum&&(e.maskSum=r,Gc(e,t),e.maskDeformed=!0,e.dirty=!0)}else e.maskDeformed&&(e.maskSum=Number.NaN,Gc(e,null),e.maskDeformed=!1,e.dirty=!0)}function Cg(e,t,r,n,o="dark"){let{width:i,height:a,cornerRadius:s,perim:l}=e;if(l.length===0)return!1;let u=2,c=-1,f=e.currentIdx,m=0;for(let F=0;F<l.length;F++){let te=l[F],re=ai(t,te.x,te.y,u);re>c&&(c=re,f=F),F===e.currentIdx&&(m=re)}let h=e.appearedAt>0&&r-e.appearedAt<T.minDwellMs,x=T.baseOp+(T.peakOp-T.baseOp)*Wc(T.lumLo,T.lumHi,m),b=!h&&c-m>Ib,y=t.cursorLight,d=_t.enabled&&_t.catchLight&&!e.pointMode&&!!y&&y.w>.02,p=bi(i,a,s,e.kind);d&&(e.cursorTargetArc=hg(y.x,y.y,i,a,s,e.kind));let g=d?Math.min(1,T.peakOp*_t.catchGain*y.w):0,v=e.lastTickMs>0?Math.min(200,Math.max(.5,r-e.lastTickMs)):vg;e.lastTickMs=r,e.envClock+=Math.min(v,Nb);let w=F=>1-Math.pow(1-F,v/vg),k=Math.max(1,T.relocFadeMs),_=Math.max(1,T.relocFadeOutMs),z=-2,E=-3,C=()=>{e.appearedAt=r,e.wanderS=0,e.wanderTargetS=0,e.wanderFrames=0,e.relocTween=Qn(0,1,k,ps.smoothstep),qn(e.relocTween,e.envClock)},L=F=>{e.relocNextIdx=F,e.relocTween=Qn(1,0,_,ps.smoothstep),qn(e.relocTween,e.envClock)};if(e.relocTween?.done&&e.relocTween.to===0){let F=e.relocNextIdx;if(F===z&&!d&&(F=E),F===E)e.cursorMode=!1,e.appearedAt=0,e.relocTween=null;else if(F===z)e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=g,C();else{e.currentIdx=F;let te=l[e.currentIdx],re=ai(t,te.x,te.y,u);e.glowOpacity=T.baseOp+(T.peakOp-T.baseOp)*Wc(T.lumLo,T.lumHi,re),C()}}if((!e.relocTween||e.relocTween.done)&&(e.appearedAt===0?(d?(e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=g):(e.cursorMode=!1,e.currentIdx=f,e.glowOpacity=x),C()):d!==e.cursorMode?L(d?z:E):!e.cursorMode&&b&&L(f)),e.cursorMode){d&&(e.glowOpacity=g);let F=Math.max(.01,Math.min(1,_t.catchFollow)),te=1-Math.pow(1-F,v/(1e3/60)),re=e.cursorTargetArc-e.cursorArc;re=(re%p+p*1.5)%p-p/2,e.cursorArc+=re*te}else e.glowOpacity+=(x-e.glowOpacity)*w(T.fadeRate);e.glowOpacity=Math.max(0,Math.min(1,e.glowOpacity)),e.relocMul=e.relocTween?_c(e.relocTween,e.envClock):1;let W=bi(i,a,s,e.kind)/ws(kg,_g,zg),R=T.wanderRange*W;e.wanderFrames+=v,e.wanderFrames>=Fb&&(e.wanderTargetS=(Math.random()*2-1)*R,e.wanderFrames=0),e.wanderS+=(e.wanderTargetS-e.wanderS)*w(T.wanderLerp);let O,V,B,P,N;if(e.pointMode){let F=l[e.currentIdx];O=F.x+e.wanderS,V=F.y,B=0,P=O,N=V}else{let F=e.cursorMode?e.cursorArc:l[e.currentIdx].arc+e.wanderS,te=T.inset*e.scale;eo(F,i,a,s,te,0,e.kind,dt),O=dt.x,V=dt.y,B=bg(F,i,a,s,te,e.kind);let re=T.extraOutward*W*e.scale;eo(F,i,a,s,te,re,e.kind,dt),P=dt.x,N=dt.y}e.deform&&(e.deform(O,V,dt),O=dt.x,V=dt.y,e.deform(P,N,dt),P=dt.x,N=dt.y);let H=o==="light",K=H?km(t,O,V,u):ls(t,O,V,u);e.tintTween?e.tintTween.done&&(H?(e.tintFrom={r:e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*e.tintTween.val,g:e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*e.tintTween.val,b:e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*e.tintTween.val},e.tintTarget={...K},e.tintTween=Qn(0,1,Bc),qn(e.tintTween,r)):r>=e.tintHoldUntil&&(e.tintFrom={...e.tintTarget},e.tintTarget={...K},e.tintTween=Qn(0,1,Bc),qn(e.tintTween,r),e.tintHoldUntil=r+yg)):(e.tintFrom={...K},e.tintTarget={...K},e.tintTween=Qn(0,1,Bc),qn(e.tintTween,r),e.tintHoldUntil=H?0:r+yg),_c(e.tintTween,r);let U=e.tintTween.val,ne,we,me;if(H)ne=Math.round(e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*U),we=Math.round(e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*U),me=Math.round(e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*U);else{let F=e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*U,te=e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*U,re=e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*U,Ne=Math.max(F,te,re)||1;ne=Math.round(255*(F/Ne)),we=Math.round(255*(te/Ne)),me=Math.round(255*(re/Ne))}let D=`rgb(${ne},${we},${me})`,A="#ffffff";if(H){let F=es(ne,we,me),[te,re,Ne]=ts(F[0],Math.min(1,F[1]*Ab),Math.max(Db,F[2]*Hb));A=`rgb(${te},${re},${Ne})`}let Q=Math.max(0,Math.min(1,n))*(e.pointMode?T.pointGain:1),Z=Math.min(1,e.glowOpacity*T.haloOpMul*Q),X=Math.min(1,e.glowOpacity*T.extraIntensity*Q);if(Math.abs(e.relocMul-e.dEnv)>.002){let F=e.relocMul>=.998&&e.dEnv<.998;e.dEnv=e.relocMul,e.env.style.opacity=e.relocMul.toFixed(3),F&&(e.dirty=!0)}let ge=!!(e.relocTween&&!e.relocTween.done)||e.cursorMode,xe=!(Math.abs(O-e.dX)<Ss&&Math.abs(V-e.dY)<Ss&&Math.abs(B-e.dAng)<Wb&&Math.abs(P-e.dEX)<Ss&&Math.abs(N-e.dEY)<Ss),$e=!(Math.abs(Z-e.dHOp)<wg&&Math.abs(X-e.dEOp)<wg),rt=D!==e.dHaloTint||A!==e.dExtraTint;return(e.dirty||xe||$e||rt)&&(e.dX=O,e.dY=V,e.dAng=B,e.dEX=P,e.dEY=N,e.dHOp=Z,e.dEOp=X,e.dHaloTint=D,e.dExtraTint=A,e.dirty=!1,Ub(e,O,V,B,P,N,Z,X,D,A)),ge}function Ub(e,t,r,n,o,i,a,s,l,u){let{ctx:c,canvas:f,dpr:m,margin:h}=e;if(c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.clearRect(0,0,f.width,f.height),a<=.002&&s<=.002||!e.maskReady)return;let x=a>.002?Hc(e.halo,...Sg(l),e.haloTint):null,b=s>.002?u==="#ffffff"?e.extra.canvas:Hc(e.extra,...Sg(u),e.extraTint):null,y=v=>{x&&(c.save(),c.translate(t+h,r+h),c.rotate(n),c.globalAlpha=a*v,c.drawImage(x,-e.halo.ax,-e.halo.ay,e.halo.w,e.halo.h),c.restore()),b&&(c.save(),c.translate(o+h,i+h),c.rotate(n),c.globalAlpha=s*v,c.drawImage(b,-e.extra.ax,-e.extra.ay,e.extra.w,e.extra.h),c.restore())};if(!e.pointMode&&e.surroundPath&&e.bandPath){c.save(),c.scale(m,m),c.clip(e.surroundPath,"evenodd"),y(.5),c.restore(),c.save(),c.scale(m,m),c.clip(e.bandPath,"evenodd"),y(1),c.restore();return}c.save(),c.scale(m,m),y(1),c.restore();let d=e.maskAlpha;if(!d)return;let p=c.getImageData(0,0,f.width,f.height),g=p.data;for(let v=0,w=3;v<d.length;v++,w+=4){let k=d[v];if(k!==255){if(k===0){g[w]=0;continue}g[w]=(g[w]*k+127)/255}}c.putImageData(p,0,0)}var to=[255,255,255];function Sg(e){if(e[0]==="#")return to[0]=parseInt(e.slice(1,3),16),to[1]=parseInt(e.slice(3,5),16),to[2]=parseInt(e.slice(5,7),16),to;let t=4,r=0,n=0;for(;t<e.length&&n<3;){let o=e.charCodeAt(t++);o>=48&&o<=57?r=r*10+(o-48):(o===44||o===41)&&(to[n++]=r,r=0)}return to}function Rg(e,t){e.pointMode===t.pointMode&&(t.currentIdx=Math.min(e.currentIdx,Math.max(0,t.perim.length-1)),t.appearedAt=e.appearedAt,t.glowOpacity=e.glowOpacity,t.relocTween=e.relocTween,t.relocNextIdx=e.relocNextIdx,t.relocMul=e.relocMul,t.envClock=e.envClock,t.cursorMode=e.cursorMode,t.cursorArc=e.cursorArc,t.cursorTargetArc=e.cursorTargetArc,t.lastTickMs=e.lastTickMs,t.wanderS=e.wanderS,t.wanderTargetS=e.wanderTargetS,t.wanderFrames=e.wanderFrames,t.tintFrom=e.tintFrom,t.tintTarget=e.tintTarget,t.tintTween=e.tintTween,t.tintHoldUntil=e.tintHoldUntil,t.dEnv=e.relocMul,t.env.style.opacity=e.relocMul.toFixed(3))}var Yc=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:"#ffffff"});function $g(e,t,r){let n=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),o=Math.ceil(3*r.blur+Math.abs(r.offsetY)+1),i=t.width+2*o,a=t.height+2*o,s=document.createElement("canvas");s.className="ctmb-metal-fx-rim-canvas",s.setAttribute("aria-hidden","true"),s.width=Math.ceil(i*n),s.height=Math.ceil(a*n),s.style.cssText=`position:absolute;left:${-o}px;top:${-o}px;width:${i}px;height:${a}px;pointer-events:none`;let l=s.getContext("2d"),u=document.createElement("canvas");u.width=s.width,u.height=s.height;let c=u.getContext("2d",{willReadFrequently:!0});if(!l||!c)return null;e.appendChild(s);let f={canvas:s,ctx:l,scratch:u,sctx:c,width:t.width,height:t.height,cornerRadius:t.cornerRadius,kind:t.kind,ring:t.ring,margin:o,dpr:n,opts:r,mO:qt(),mI:qt(),sum:Number.NaN};return Vc(f,null,!0),f}function Eg(e,t,r){let n=t.xy;for(let o=0;o<t.n;o++){let i=n[o*2]+r,a=n[o*2+1]+r;o===0?e.moveTo(i,a):e.lineTo(i,a)}e.closePath()}function Vc(e,t,r=!1){let{width:n,height:o,cornerRadius:i,ring:a,margin:s,dpr:l}=e;Pt(0,0,n,o,i,t,e.mO),Pt(a,a,n-2*a,o-2*a,Math.max(0,i-a),t,e.mI);let u=0,c=e.mO.xy;for(let R=0;R<e.mO.n;R+=4)u+=c[R*2]*1.37+c[R*2+1];if(!r&&u===e.sum)return;e.sum=u;let{sctx:f,scratch:m,ctx:h,canvas:x,opts:b}=e,y=m.width,d=m.height;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,y,d),f.scale(l,l),f.fillStyle="#fff",f.beginPath(),Eg(f,e.mO,s),Eg(f,e.mI,s),f.fill("evenodd");let p=f.getImageData(0,0,y,d).data,g=y*d,v=new Float32Array(g);for(let R=0,O=3;R<g;R++,O+=4)v[R]=p[O]/255;let w=Math.round(b.offsetY*l)*y,k=new Float32Array(g);if(w>=0)for(let R=0;R<g;R++)k[R]=Math.max(0,v[R]-(R>=w?v[R-w]:0));else for(let R=0;R<g;R++)k[R]=Math.max(0,v[R]-(R-w<g?v[R-w]:0));let _=hi(k,y,d,b.blur*l),z=parseInt(b.color.slice(1,3),16),E=parseInt(b.color.slice(3,5),16),C=parseInt(b.color.slice(5,7),16),L=h.createImageData(y,d),W=L.data;for(let R=0,O=0;R<g;R++,O+=4)W[O]=z,W[O+1]=E,W[O+2]=C,W[O+3]=Math.round(Math.min(1,_[R]*v[R]*b.alpha)*255);h.setTransform(1,0,0,1,0,0),h.putImageData(L,0,0)}function jc(e){e&&e.canvas.remove()}var Tg=new Set(["INPUT","TEXTAREA","SELECT","OPTION"]);function Pg(e,t){let r=Math.max(e.left-t.right,t.left-e.right,0),n=Math.max(e.top-t.bottom,t.top-e.bottom,0);return Math.sqrt(r*r+n*n)}function Lg(e,t,r,n){return!(Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)<r||Math.max(e.left-t.right,t.left-e.right,0)>n)}function Og(e,t,r,n){return Math.min(e.right,t.right)-Math.max(e.left,t.left)<r?!1:Math.max(e.top-t.bottom,t.top-e.bottom,0)<=n}function rn(e,t,r,n,o,i){let a=Math.max(0,Math.min(i,n*.5,o*.5)),s=e.roundRect;if(typeof s=="function"){s.call(e,t,r,n,o,a);return}e.moveTo(t+a,r),e.lineTo(t+n-a,r),e.quadraticCurveTo(t+n,r,t+n,r+a),e.lineTo(t+n,r+o-a),e.quadraticCurveTo(t+n,r+o,t+n-a,r+o),e.lineTo(t+a,r+o),e.quadraticCurveTo(t,r+o,t,r+o-a),e.lineTo(t,r+a),e.quadraticCurveTo(t,r,t+a,r)}function Ig(e,t,r,n,o){if(!o.flipX&&!o.flipY){e.drawImage(t,o.sx??0,o.sy??0,r,n,o.x,o.y,o.w,o.h);return}e.save(),o.flipX&&(e.translate(o.x+o.w,0),e.scale(-1,1)),o.flipY&&(e.translate(0,o.y+o.h),e.scale(1,-1)),e.drawImage(t,o.sx??0,o.sy??0,r,n,o.flipX?0:o.x,o.flipY?0:o.y,o.w,o.h),e.restore()}var Yb=4;function Vb(e,t,r,n,o,i,a){if(n<=2*a||o<=2*a){e.beginPath(),rn(e,t,r,n,o,i),e.clip();return}e.beginPath(),rn(e,t,r,n,o,i),rn(e,t+a,r+a,n-2*a,o-2*a,Math.max(0,i-a)),e.clip("evenodd")}function Fg(e,t,r,n,o,i,a,s,l,u,c,f){let m=f??Math.max(1,Math.round((12+Yb*3)*c)),h=Math.max(0,a),x=!0;for(let b=0;b<3&&h>1e-4;b++){let y=Math.min(1,h);e.save(),Vb(e,u.x,u.y,u.w,u.h,u.r,m),e.globalCompositeOperation=x?"source-over":"lighter",x=!1,e.globalAlpha=y,Ig(e,t,r,n,l),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=s,e.fillRect(0,0,o,i),e.restore(),h-=y}}function Ag(e,t,r,n,o,i,a){let s=a|0;if(s<1||n<=2*s||o<=2*s){e.beginPath(),rn(e,t,r,n,o,i),e.clip();return}e.beginPath(),rn(e,t,r,n,o,i),rn(e,t+s,r+s,n-2*s,o-2*s,Math.max(0,i-s)),e.clip("evenodd")}function Hg(e,t,r,n,o,i,a,s,l,u,c,f){let m=s*c,h=!0;for(let x=0;x<3&&m>1e-4;x++){let b=Math.min(1,m);e.save(),Ag(e,a.x,a.y,a.w,a.h,a.r,l),e.globalCompositeOperation=h?"source-over":"lighter",h=!1,e.globalAlpha=b,Ig(e,t,r,n,f),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=u,e.fillRect(0,0,o,i),e.restore(),m-=b}}function Dg(e,t,r,n,o,i,a,s){let l=e.createLinearGradient(n,o,i,a);l.addColorStop(0,`rgba(255,255,255,${s.toFixed(3)})`),l.addColorStop(.5,`rgba(255,255,255,${(s*.45).toFixed(3)})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.save(),Ag(e,t.x,t.y,t.w,t.h,t.r,r),e.globalCompositeOperation="lighter",e.lineWidth=r*2,e.strokeStyle=l,e.beginPath(),rn(e,t.x,t.y,t.w,t.h,t.r),e.stroke(),e.restore()}function Qc(e){let t=getComputedStyle(e),r=[parseFloat(t.borderTopLeftRadius)||0,parseFloat(t.borderTopRightRadius)||0,parseFloat(t.borderBottomRightRadius)||0,parseFloat(t.borderBottomLeftRadius)||0].filter(n=>n>0);return r.length?Math.min.apply(null,r):0}function qc(e){let t=getComputedStyle(e),r=Math.max(parseFloat(t.borderTopWidth)||0,parseFloat(t.borderRightWidth)||0,parseFloat(t.borderBottomWidth)||0,parseFloat(t.borderLeftWidth)||0),n=0,o=0,i=t.boxShadow;if(i&&i!=="none"){let u=i.replace(/rgba?\([^)]*\)/g,m=>m.replace(/,/g,"\0")).split(/,\s*/),c=1/0,f=1/0;for(let m of u){let h=m.match(/-?\d+(?:\.\d+)?px/g);if(!h||h.length<4)continue;let x=parseFloat(h[3]);x>0&&(/\binset\b/.test(m)?x<c&&(c=x):x<f&&(f=x))}Number.isFinite(c)&&(n=c),Number.isFinite(f)&&(o=f)}let a=Math.max(r,o);return{width:Math.max(r,n,o)||1,outerCssPx:a}}function Ng(e){e.cornerRadius=Qc(e.el);let t=qc(e.el);e.hairlineWidth=t.width,e.hairlineOuterCssPx=t.outerCssPx}function Wg(e){typeof ResizeObserver<"u"&&(e.resizeObserver=new ResizeObserver(()=>Ng(e)),e.resizeObserver.observe(e.el)),typeof MutationObserver<"u"&&(e.mutationObserver=new MutationObserver(()=>Ng(e)),e.mutationObserver.observe(e.el,{attributes:!0,attributeFilter:["style","class"]}))}function Bg(e){e.resizeObserver?.disconnect(),e.resizeObserver=null,e.mutationObserver?.disconnect(),e.mutationObserver=null}var zt=new Set,Kc=new WeakMap,sx=Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36}),er={...sx};function Kg(e){Object.assign(er,e),zs(er.enabled&&zt.size>0),_s()}var Rr=null,io=0,Zc=0,jg=!1;function _s(){io!==0||typeof requestAnimationFrame>"u"||(io=requestAnimationFrame(e=>{if(io=0,e-Zc<er.repaintMs){_s();return}Zc=e,tf()}))}var vi=!1;function lx(e,t){let r=er.radius;for(let n of zt){let o=n.anchorEl.getBoundingClientRect(),i=n.el.getBoundingClientRect(),a=Math.min(o.left,i.left)-r,s=Math.max(o.right,i.right)+r,l=Math.min(o.top,i.top)-r,u=Math.max(o.bottom,i.bottom)+r;if(e>=a&&e<=s&&t>=l&&t<=u)return!0}return!1}function Qg(e){if(Rr={x:e.clientX,y:e.clientY},!er.enabled)return;let t=lx(e.clientX,e.clientY);(t||vi)&&_s(),vi=t}function ks(){Rr=null,vi&&_s(),vi=!1}function zs(e){e=e&&er.enabled,!(typeof document>"u"||e===jg)&&(jg=e,e?(document.addEventListener("pointermove",Qg,{passive:!0}),document.addEventListener("pointerleave",ks),window.addEventListener("blur",ks)):(document.removeEventListener("pointermove",Qg),document.removeEventListener("pointerleave",ks),window.removeEventListener("blur",ks),Rr=null,io&&cancelAnimationFrame(io),io=0,vi=!1,Zc=0))}function ux(e,t,r,n,o,i,a,s,l){if(!Rr)return;let u=er;if(!u.enabled||u.strength<=0)return;let c=u.radius,f,m,h,x,b,y;if(o){let P=r.left>=n.right;f=P?n.right:r.right,m=P?r.left:n.left,h=Rr.x,x=Rr.y,b=Math.max(r.top,n.top),y=Math.min(r.bottom,n.bottom)}else{let P=r.top>=n.bottom;f=P?n.bottom:r.bottom,m=P?r.top:n.top,h=Rr.y,x=Rr.x,b=Math.max(r.left,n.left),y=Math.min(r.right,n.right)}let d=Math.min(f,m),p=Math.max(f,m),g=Math.max(1,p-d);if(h<d-c||h>p+c||x<b-c||x>y+c)return;let v=Math.max(0,Math.min(1,Math.abs(h-f)/g)),w=Math.max(.5,c*u.edgeFade),k=Math.min(1,Math.min(h-(d-c),p+c-h)/w),_=Math.min(1,Math.min(x-(b-c),y+c-x)/w),z=u.strength*(1-u.falloff*v)*k*_;if(z<=.001)return;let E=c*l*(1+u.penumbra*v),C=o?(x-n.top+s)*l:(x-n.left+s)*l,L=Math.max(0,Math.min(.5,(1-u.softness)*.5)),W=Math.max(.001,.5-L),R=o?a:i,O=Math.max(0,Math.floor(C-E)),V=Math.min(R,Math.ceil(C+E));if(V<=O)return;let B=new Float32Array(V-O);for(let P=O;P<V;P++){let N=(P+.5-(C-E))/(2*E),H=N<W?N/W:N>1-W?(1-N)/W:1;B[P-O]=1-z*Math.max(0,Math.min(1,H))}for(let P of[e,t]){let N=o?0:O,H=o?O:0,K=o?i:V-O,U=o?V-O:a,ne=P.getImageData(N,H,K,U),we=ne.data;if(o)for(let me=0;me<U;me++){let D=B[me];if(!(D>=.999))for(let A=me*K*4+3,Q=(me+1)*K*4;A<Q;A+=4)we[A]=we[A]*D}else for(let me=0;me<U;me++)for(let D=0;D<K;D++){let A=B[D];if(A>=.999)continue;let Q=(me*K+D)*4+3;we[Q]=we[Q]*A}P.putImageData(ne,N,H)}}var Jt=null,ro=null,no=null,oo=null;function cx(e,t){return Jt||(Jt=document.createElement("canvas"),ro=document.createElement("canvas"),no=Jt.getContext("2d",{alpha:!0}),oo=ro.getContext("2d",{alpha:!0})),!no||!oo||!Jt||!ro?!1:(Jt.width!==e&&(Jt.width=e,ro.width=e),Jt.height!==t&&(Jt.height=t,ro.height=t),no.setTransform(1,0,0,1,0,0),oo.setTransform(1,0,0,1,0,0),no.globalCompositeOperation="source-over",oo.globalCompositeOperation="source-over",no.clearRect(0,0,e,t),oo.clearRect(0,0,e,t),!0)}function Zg(e,t,r,n=1){if(typeof document>"u"||Tg.has(e.tagName))return null;for(let x of zt)if(x.el===e)return x.strength=n,x;let o=document.createElement("div");o.setAttribute("data-ctmb-metal-fx-reflection",""),o.setAttribute("aria-hidden","true");let i=document.createElement("canvas");i.className="ctmb-metal-fx-reflection-canvas";let a=i.getContext("2d",{alpha:!0,willReadFrequently:er.enabled});if(!a)return null;let s=document.createElement("canvas");s.className="ctmb-metal-fx-reflection-stroke-canvas";let l=s.getContext("2d",{alpha:!0,willReadFrequently:er.enabled});if(!l)return null;o.appendChild(i),o.appendChild(s),Kc.set(e,{position:e.style.getPropertyValue("position"),positionPriority:e.style.getPropertyPriority("position"),isolation:e.style.getPropertyValue("isolation"),isolationPriority:e.style.getPropertyPriority("isolation")});let u=getComputedStyle(e),c=!1;u.position==="static"&&(e.style.position="relative",c=!0);let f=!1;u.isolation!=="isolate"&&(e.style.isolation="isolate",f=!0),e.setAttribute("data-ctmb-metal-fx-reflect-host",""),e.insertBefore(o,e.firstChild);let m=qc(e),h={el:e,anchor:t,anchorEl:r,strength:n,wrap:o,canvas:i,ctx:a,strokeCanvas:s,strokeCtx:l,cornerRadius:Qc(e),hairlineWidth:m.width,hairlineOuterCssPx:m.outerCssPx,appliedPositionRelative:c,appliedIsolation:f,resizeObserver:null,mutationObserver:null};return Wg(h),zt.add(h),zs(!0),h}function ef(e){for(let t of zt)if(t.el===e){Bg(t),t.canvas.width=0,t.canvas.height=0,t.strokeCanvas.width=0,t.strokeCanvas.height=0,t.wrap.parentNode===t.el&&t.el.removeChild(t.wrap),t.el.removeAttribute("data-ctmb-metal-fx-reflect-host");let r=Kc.get(e);t.appliedPositionRelative&&e.style.position==="relative"&&(r?.position?e.style.setProperty("position",r.position,r.positionPriority):e.style.removeProperty("position")),t.appliedIsolation&&e.style.isolation==="isolate"&&(r?.isolation?e.style.setProperty("isolation",r.isolation,r.isolationPriority):e.style.removeProperty("isolation")),Kc.delete(e),zt.delete(t),zt.size===0&&zs(!1);return}}function fx(e,t,r,n,o){if(n<1||o<1)return null;let i=e.getContext("2d");if(!i)return null;let a=i.getImageData(t,r,n,o).data,s=n,l=o,u=-1,c=-1;for(let f=0;f<o;f++){let m=f*n;for(let h=0;h<n;h++)a[(m+h)*4+3]>8&&(h<s&&(s=h),h>u&&(u=h),f<l&&(l=f),f>c&&(c=f))}return u<0?null:{x:t+s,y:r+l,w:u-s+1,h:c-l+1}}var Jc=new WeakMap;function Jg(){Jc=new WeakMap}function qg(e){let t=Jc.get(e);return t||(t=e.getBoundingClientRect(),Jc.set(e,t)),t}function tf(){if(zt.size===0)return;let e=typeof window<"u"&&window.devicePixelRatio||1,t=new Map;for(let r of zt){let n=qg(r.el),o=t.get(r.anchorEl);if(o||(o=qg(r.anchorEl),t.set(r.anchorEl,o)),n.width<1||n.height<1||o.width<1||o.height<1)continue;let i=r.el.hasAttribute("data-ctmb-metal-fx-text");if(i&&!r.glyphStyled&&(r.canvas.style.filter="blur(0.4px) saturate(1.35) brightness(1.2)",r.glyphStyled=!0),!Lg(o,n,1,32)&&!Og(o,n,1,32)){r.canvas.width!==1&&(r.canvas.width=1,r.canvas.height=1),r.strokeCanvas.width!==1&&(r.strokeCanvas.width=1,r.strokeCanvas.height=1);continue}let a=i&&!!r.anchor.mask;a&&!r.anchor.wantRaw&&(r.anchor.wantRaw=!0),r.anchor.wantRing||(r.anchor.wantRing=!0);let s=!!r.anchor.deform&&!!r.anchor.ringCanvas,l=a&&r.anchor.rawCanvas?r.anchor.rawCanvas:s?r.anchor.ringCanvas:r.anchor.canvas,u=Math.round(r.anchor.overscan*e),c=u,f=u,m=(l.width|0)-2*u,h=(l.height|0)-2*u;if(r.anchor.mask&&!a){let ne=fx(l,c,f,m,h);ne&&(c=ne.x,f=ne.y,m=ne.w,h=ne.h)}if(m<4||h<4)continue;let x=(o.left+o.right)*.5,b=(o.top+o.bottom)*.5,y=(n.left+n.right)*.5,d=(n.top+n.bottom)*.5,p=x-y,g=b-d,v=Math.max(o.left-n.right,n.left-o.right,0),w=Math.max(o.top-n.bottom,n.top-o.bottom,0),k=v>=w,_=Pg(o,n),z=1-Math.min(1,_/12);z=z*z*(3-2*z);let E=.55+(1-.55)*z,C=Math.min(3.6,E*1.3*.7)*r.strength,W=o.left>=n.left&&o.right<=n.right&&o.top>=n.top&&o.bottom<=n.bottom?[!0,!1]:[k],R=r.anchor.scale??1,O=Math.max(1*R,r.hairlineWidth),V=Math.max(1,Math.round(O*e)),B=Math.max(1,Math.round(Math.max(1*R,r.hairlineWidth)*e)),P=r.hairlineOuterCssPx;r.wrap.style.inset!==`${-P}px`&&(r.wrap.style.inset=`${-P}px`),r.wrap.style.borderRadius!==`${Math.max(0,r.cornerRadius)}px`&&(r.wrap.style.borderRadius=`${Math.max(0,r.cornerRadius)}px`);let N=Math.max(1,Math.round((n.width+P*2)*e)),H=Math.max(1,Math.round((n.height+P*2)*e));r.canvas.width!==N&&(r.canvas.width=N),r.canvas.height!==H&&(r.canvas.height=H),r.strokeCanvas.width!==N&&(r.strokeCanvas.width=N),r.strokeCanvas.height!==H&&(r.strokeCanvas.height=H);let K=r.ctx;K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,N,H);let U=r.strokeCtx;U.setTransform(1,0,0,1,0,0),U.clearRect(0,0,N,H);for(let[ne,we]of W.entries()){let me=ne>0&&cx(N,H),D=me?no:K,A=me?oo:U,Q=Math.min((i?12*1.5:12)*e,Math.max(N,H)),Z,X,ge,xe;we?(Z=p>0?N:0,ge=p>0?N-Q:Q,X=H*.5,xe=H*.5):(X=g>0?H:0,xe=g>0?H-Q:Q,Z=N*.5,ge=N*.5);let $e=K.createLinearGradient(Z,X,ge,xe);$e.addColorStop(0,`rgba(0,0,0,${1})`),$e.addColorStop(.5,`rgba(0,0,0,${.85})`),$e.addColorStop(1,`rgba(0,0,0,${0})`);let rt=m/e,F=i?Math.max(1,Math.min(we?N:H,Math.round(we?m:h))):Math.max(1,Math.round(235*Math.max(.1,rt/140)*e)),te,re,Ne,At,Tr=!1,sn=!1;if(we){let I=Math.max(o.top,n.top),J=Math.min(o.bottom,n.bottom);Tr=!0,te=p>0?N-F:0,re=Math.round((I-n.top+P)*e),Ne=F,At=Math.max(1,Math.round((J-I)*e))}else{let I=Math.max(o.left,n.left),J=Math.min(o.right,n.right);sn=!0,te=Math.round((I-n.left+P)*e),re=g>0?H-F:0,Ne=Math.max(1,Math.round((J-I)*e)),At=F}let ao={x:te,y:re,w:Ne,h:At,flipX:Tr,flipY:sn,sx:c,sy:f},so={x:0,y:0,w:N,h:H,r:Math.max(0,r.cornerRadius*e)},lo=i?Math.min(1,C*.7):Math.min(3.6,C*2.535*.7*.5);Fg(D,l,m,h,N,H,lo,$e,ao,so,e,i?Math.max(N,H):void 0),i||(Hg(A,l,m,h,N,H,so,C,V,$e,.52,ao),Dg(A,so,B,Z,X,ge,xe,Math.min(.85,.044*C))),me&&(K.globalCompositeOperation="lighter",K.drawImage(Jt,0,0),U.globalCompositeOperation="lighter",U.drawImage(ro,0,0))}for(let ne of W)ux(K,U,o,n,ne,N,H,P,e);K.globalCompositeOperation="source-over",U.globalCompositeOperation="source-over"}}function e1(){Jg();for(let e of[...zt])ef(e.el);zs(!1)}function t1(){return zt.size}var Ms=!1,yi=0,rf=0;function r1(){Ms||(Ms=!0,!(typeof requestAnimationFrame>"u")&&(yi=requestAnimationFrame(e=>{yi=0,Ms=!1,!(e-rf<66)&&(rf=e,tf())})))}function n1(){yi&&cancelAnimationFrame(yi),yi=0,Ms=!1,rf=0}var Ft=nt(nn(),1),vx={position:"absolute",inset:0,width:"100%",height:"100%"},yx={position:"absolute",inset:3},s1={position:"absolute",inset:0,pointerEvents:"none",zIndex:3,borderRadius:"inherit"},wx={position:"absolute",inset:0,pointerEvents:"none",zIndex:4},wi=new Map;function Sx(){let e=globalThis;e.__MFX_DEBUG__&&(e.__mfxGlow=wi)}Fm((e,t)=>{let r=wi.get(e);return r?Cg(r.handles,e,t,e.opacityMul*e.glowGain,r.themeRef.current):!1});function kx(e){let[t,r]=(0,q.useState)(()=>e!=="auto"?e:typeof window>"u"||!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,q.useEffect)(()=>{if(e!=="auto"){r(e);return}if(typeof window>"u"||!window.matchMedia)return;let n=window.matchMedia("(prefers-color-scheme: dark)"),o=()=>r(n.matches?"dark":"light");return o(),n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[e]),t}var nf=(0,q.forwardRef)(function({children:t,variant:r="button",preset:n="chromatic",theme:o="auto",strength:i=1,glowGain:a=1,paused:s=!1,borderRadius:l,normalizeHostStyles:u=!0,reflectionTargets:c,disableGlow:f=!1,innerShadow:m,shaderScale:h,ringCssPx:x,scale:b=1,mask:y,glowMode:d="mask",glowPortal:p,className:g,style:v,...w},k){let _=(0,q.useRef)(null),z=(0,q.useRef)(null),E=(0,q.useRef)(null),C=(0,q.useRef)(null),L=(0,q.useRef)(null),W=(0,q.useRef)(null),R=(0,q.useRef)(null),O=(0,q.useRef)(null),V=(0,q.useRef)("dark"),B=(0,q.useRef)(0),[P,N]=(0,q.useState)(!1),H=kx(o),K=(0,q.useMemo)(()=>nc(),[]);V.current=H;let U=r==="circle"?"circle":"pill",ne=!f;(0,q.useImperativeHandle)(k,()=>_.current,[]);let we=(D,A)=>{if(U==="circle")return Math.min(D,A)/2;let Q=typeof l=="number"?l:(()=>{let Z=W.current?.firstElementChild;if(Z){let X=parseFloat(getComputedStyle(Z).borderTopLeftRadius);if(Number.isFinite(X)&&X>0)return X}return B.current})();return Math.min(Q,Math.min(D,A)/2)};(0,q.useEffect)(()=>{K&&Om(n,H)},[n,H,K]),(0,q.useEffect)(()=>{let D=R.current;D&&Zr(D,{mask:y??null})},[y]),(0,q.useEffect)(()=>{let D=R.current;D&&Zr(D,{paused:s})},[s]),(0,q.useEffect)(()=>{let D=R.current;if(!D)return;let A={};h!==void 0&&(A.shaderScale=h),x!==void 0&&(A.ringCssPx=x),b!==void 0&&(A.scale=b),Object.keys(A).length>0&&Zr(D,A)},[h,x,b]),(0,q.useLayoutEffect)(()=>{let D=z.current,A=_.current,Q=E.current;if(!D||!A||!K)return;{let I=getComputedStyle(A),J=parseFloat(I.borderTopLeftRadius);B.current=Number.isFinite(J)?J:0}let Z=()=>{let I=A.getBoundingClientRect(),J=Math.max(1,Math.round(I.width)),ve=Math.max(1,Math.round(I.height));return{cssWidth:J,cssHeight:ve,cornerRadius:we(J,ve)}},X=Z();R.current=Rm({onComposite:()=>{let I=R.current,J=O.current;I&&J&&Mg(J,I.deform);let ve=L.current;I&&ve&&Vc(ve,I.deform)},hostCanvas:D,cssWidth:X.cssWidth,cssHeight:X.cssHeight,cornerRadius:X.cornerRadius,kind:U,paused:s,shaderScale:h,ringCssPx:x,scale:b,mask:y??null,onFirstCopy:()=>N(!0)}),A.style.setProperty("--mfx-radius",`${X.cornerRadius}px`),A.style.borderRadius=`${X.cornerRadius}px`;let ge=(I,J)=>{if(!y||d==="ring")return{};let ve=window.devicePixelRatio||1,We=document.createElement("canvas");We.width=Math.max(1,Math.round(I*ve)),We.height=Math.max(1,Math.round(J*ve));let _i=We.getContext("2d");if(!_i)return{};_i.fillStyle="#fff",y(_i,We.width,We.height,ve);let z1=_i.getImageData(0,0,We.width,We.height).data,ff=[],zi=Math.max(1,Math.round(2*ve));for(let Mi=zi>>1;Mi<We.height;Mi+=zi)for(let Ci=zi>>1;Ci<We.width;Ci+=zi)z1[(Mi*We.width+Ci)*4+3]>128&&ff.push({x:Ci/ve,y:Mi/ve});return{samplePoints:ff,maskDataUrl:We.toDataURL("image/png")}};Q&&(O.current=Uc(Q,{width:X.cssWidth,height:X.cssHeight,cornerRadius:X.cornerRadius,kind:U,scale:b,...ge(X.cssWidth,X.cssHeight)}));let xe=I=>{if(!Q)return;let J=O.current;Q.innerHTML="",O.current=Uc(Q,{width:I.cssWidth,height:I.cssHeight,cornerRadius:I.cornerRadius,kind:U,scale:b,...ge(I.cssWidth,I.cssHeight)}),J&&Rg(J,O.current);let ve=R.current;ve&&O.current&&wi.set(ve,{handles:O.current,themeRef:V})},$e=()=>m?m===!0?Yc:{...Yc,...m}:null,rt=I=>{let J=C.current,ve=R.current;jc(L.current),L.current=null;let We=$e();!J||!ve||!We||(L.current=$g(J,{width:I.cssWidth,height:I.cssHeight,cornerRadius:I.cornerRadius,kind:U,ring:ve.ringCssPx},We))};rt(X);let F=0,te=X.cssWidth,re=X.cssHeight,Ne=X.cornerRadius,At=new ResizeObserver(()=>{F===0&&(F=requestAnimationFrame(()=>{F=0;let I=Z(),J=R.current;!J||Math.abs(I.cssWidth-te)<.5&&Math.abs(I.cssHeight-re)<.5&&Math.abs(I.cornerRadius-Ne)<.5||(te=I.cssWidth,re=I.cssHeight,Ne=I.cornerRadius,Zr(J,{cssWidth:I.cssWidth,cssHeight:I.cssHeight,cornerRadius:I.cornerRadius}),A.style.setProperty("--mfx-radius",`${I.cornerRadius}px`),A.style.borderRadius=`${I.cornerRadius}px`,xe(I),rt(I))}))});At.observe(A);let Tr=null,sn=()=>{let I=R.current;if(I&&Lm(I)){let J=Z();xe(J),rt(J)}ao()},ao=()=>{Tr?.removeEventListener("change",sn),Tr=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,Tr?.addEventListener("change",sn)};ao();let so=Xm(I=>{I&&R.current&&xe(Z())}),lo=null;return typeof IntersectionObserver<"u"&&(lo=new IntersectionObserver(I=>{let J=R.current;if(J)for(let ve of I)Pm(J,ve.isIntersecting)},{rootMargin:"64px"}),lo.observe(A)),R.current&&O.current&&(wi.set(R.current,{handles:O.current,themeRef:V}),$m(R.current)),ng(),Sx(),()=>{og(),jc(L.current),L.current=null,At.disconnect(),Tr?.removeEventListener("change",sn),lo?.disconnect(),so(),F!==0&&cancelAnimationFrame(F);let I=R.current;I&&(wi.delete(I),Tm(I),Em(I)),R.current=null,O.current=null,Q&&(Q.innerHTML="")}},[U]),(0,q.useEffect)(()=>{let D=R.current;D&&Zr(D,{opacityMul:Math.max(0,Math.min(1,i)),glowGain:Math.max(0,a)})},[i,a,r]),(0,q.useEffect)(()=>{let D=R.current,A=_.current;if(!D||!A||!c||H!=="dark")return;D.onAfterFrame=r1;let Q=c.flatMap(Z=>{let X="current"in Z?Z:Z.ref,ge="current"in Z?1:Z.strength??1;return X.current?[{el:X.current,strength:ge}]:[]});for(let{el:Z,strength:X}of Q)Zg(Z,D,A,X);return()=>{D.onAfterFrame=void 0;for(let{el:Z}of Q)ef(Z)}},[c,H]),(0,q.useEffect)(()=>{let D=_.current,A=R.current;if(!D||!A)return;let Q=we(A.cssWidth,A.cssHeight);Zr(A,{cornerRadius:Q}),D.style.setProperty("--mfx-radius",`${Q}px`),D.style.borderRadius=`${Q}px`},[l,H,r,U]);let me=(0,q.useMemo)(()=>({...v,"--mfx-strength":String(Math.min(1,Math.max(0,i))),opacity:P?1:0,visibility:P?"visible":"hidden",transition:P?"opacity 0.15s ease-out":"none"}),[v,i,P]);return K?(0,Ft.jsxs)("div",{...w,ref:_,className:g?`ctmb-metal-fx-root ${g}`:"ctmb-metal-fx-root","data-variant":r,"data-shape":U,"data-theme":H,"data-paused":s?"true":void 0,"data-normalize":u?"true":"false",style:me,children:[(0,Ft.jsx)("canvas",{ref:z,className:"ctmb-metal-fx-canvas",style:vx}),(0,Ft.jsx)("div",{className:"ctmb-metal-fx-inner","aria-hidden":"true",style:yx}),p?(0,l1.createPortal)((0,Ft.jsx)("div",{ref:E,"aria-hidden":"true",style:{...s1,display:ne?void 0:"none"}}),p):(0,Ft.jsx)("div",{ref:E,"aria-hidden":"true",style:{...s1,display:ne?void 0:"none"}}),m?(0,Ft.jsx)("div",{ref:C,"aria-hidden":"true",style:wx}):null,(0,Ft.jsx)("div",{ref:W,className:"ctmb-metal-fx-content",children:t})]}):(0,Ft.jsx)("div",{...w,ref:_,className:g?`ctmb-metal-fx-fallback ${g}`:"ctmb-metal-fx-fallback","data-ctmb-metal-fx-unsupported":"",style:{display:"inline-flex",...v},children:t})});nf.displayName="MetalFx";var u1="ctmb-metal-fx-styles",_x=`
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
`,Rs=!1,of=null;function c1(){if(Rs||typeof document>"u")return;if(document.getElementById(u1)){Rs=!0;return}let e=document.createElement("style");e.id=u1,e.textContent=_x,document.head.appendChild(e),of=e,Rs=!0}function f1(){of?.remove(),of=null,Rs=!1}var tt=nt(un(),1);var m1={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},$s={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},W5={dark:{...$s.md.dark},light:{...$s.md.light}},an={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},forest:{border:[{color:"rgb(46, 160, 90)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(30, 190, 120)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(70, 180, 70)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(20, 150, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(90, 200, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 170, 110)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(120, 210, 70)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(35, 145, 100)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(60, 195, 140)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(46, 160, 90)",secondary:"rgba(30, 190, 120,, 0.98)"},spikeLt:{primary:"rgb(33, 115, 65)",secondary:"rgb(22, 137, 86)"}},candy:{border:[{color:"rgb(240, 70, 170)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 90, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(215, 60, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 110, 180)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(200, 80, 240)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(250, 60, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(230, 120, 220)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(245, 85, 165)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(210, 70, 230)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 70, 170)",secondary:"rgba(255, 90, 140,, 0.98)"},spikeLt:{primary:"rgb(173, 50, 122)",secondary:"rgb(184, 65, 101)"}},ice:{border:[{color:"rgb(90, 200, 240)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 175, 230)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(130, 220, 250)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(70, 190, 215)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(110, 210, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(50, 165, 220)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(150, 230, 250)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(85, 195, 235)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(65, 180, 245)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(90, 200, 240)",secondary:"rgba(60, 175, 230,, 0.98)"},spikeLt:{primary:"rgb(65, 144, 173)",secondary:"rgb(43, 126, 166)"}},gold:{border:[{color:"rgb(240, 190, 60)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 210, 90)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(225, 165, 40)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(250, 200, 70)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 225, 120)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(230, 175, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(245, 205, 85)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(215, 155, 35)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 215, 100)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 190, 60)",secondary:"rgba(255, 210, 90,, 0.98)"},spikeLt:{primary:"rgb(173, 137, 43)",secondary:"rgb(184, 151, 65)"}}},g1={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},forest:{border:[{color:"rgb(46, 160, 90)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 190, 120)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(70, 180, 70)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(20, 150, 130)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(90, 200, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(40, 170, 110)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(120, 210, 70)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(35, 145, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 195, 140,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(46, 160, 90,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(30, 190, 120,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(70, 180, 70,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(20, 150, 130,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 200, 80,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 170, 110,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(120, 210, 70,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},candy:{border:[{color:"rgb(240, 70, 170)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 90, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(215, 60, 200)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 110, 180)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(200, 80, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(250, 60, 150)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(230, 120, 220)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(245, 85, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(210, 70, 230,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 70, 170,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 90, 140,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(215, 60, 200,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 110, 180,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(200, 80, 240,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(250, 60, 150,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(230, 120, 220,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},ice:{border:[{color:"rgb(90, 200, 240)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(60, 175, 230)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(130, 220, 250)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(70, 190, 215)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(110, 210, 255)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(50, 165, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(150, 230, 250)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(85, 195, 235)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(65, 180, 245,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(90, 200, 240,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(60, 175, 230,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(130, 220, 250,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(70, 190, 215,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(110, 210, 255,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(50, 165, 220,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(150, 230, 250,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(240, 190, 60)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 210, 90)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(225, 165, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 200, 70)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 225, 120)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(230, 175, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(245, 205, 85)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 155, 35)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 100,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 190, 60,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 210, 90,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(225, 165, 40,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(250, 200, 70,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 225, 120,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(230, 175, 50,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(245, 205, 85,, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function zx(e){return g1[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Mx(e){return g1[e].inner.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Cx(e){return an[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Rx(e){let t=an[e],r=e==="mono"?.225:.45;return t.border.map(n=>{let o=n.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${n.size.split(" ").map(a=>{let s=parseInt(a);return`${Math.round(s*.9)}px`}).join(" ")} at ${n.pos}, ${o}, transparent)`}).join(`,
    `)}function Ex(e,t){let r=an[e];return t?r.spike:r.spikeLt}var $x={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},forest:{dark:[{color:"rgb(46, 160, 90)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(30, 190, 120)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(70, 180, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(20, 150, 130)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(90, 200, 80)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(40, 170, 110)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(120, 210, 70)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(35, 145, 100)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(60, 195, 140)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(33, 115, 65)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(22, 137, 86)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 130, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(14, 108, 94)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(65, 144, 58)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(29, 122, 79)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(86, 151, 50)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(25, 104, 72)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(43, 140, 101)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},candy:{dark:[{color:"rgb(240, 70, 170)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 90, 140)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(215, 60, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 110, 180)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(200, 80, 240)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(250, 60, 150)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(230, 120, 220)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(245, 85, 165)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(210, 70, 230)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 50, 122)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 65, 101)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(155, 43, 144)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(184, 79, 130)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(144, 58, 173)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(180, 43, 108)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(166, 86, 158)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(176, 61, 119)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(151, 50, 166)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ice:{dark:[{color:"rgb(90, 200, 240)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 175, 230)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(130, 220, 250)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(70, 190, 215)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(110, 210, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(50, 165, 220)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(150, 230, 250)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(85, 195, 235)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(65, 180, 245)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(65, 144, 173)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(43, 126, 166)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(94, 158, 180)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(50, 137, 155)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(79, 151, 184)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(36, 119, 158)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(108, 166, 180)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(61, 140, 169)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(47, 130, 176)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(240, 190, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 210, 90)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(225, 165, 40)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(250, 200, 70)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 225, 120)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(230, 175, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(245, 205, 85)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 155, 35)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 215, 100)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 137, 43)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 151, 65)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(162, 119, 29)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 144, 50)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(184, 162, 86)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(166, 126, 36)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(176, 148, 61)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(155, 112, 25)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(184, 155, 72)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function Tx(e,t,r){return $x[e][t?"dark":"light"].map(o=>{let i=o.offsetX===0?"":o.offsetX>0?` + ${o.offsetX}px`:` - ${Math.abs(o.offsetX)}px`,a=o.offsetY===0?"":o.offsetY>0?` + ${o.offsetY}px`:` - ${Math.abs(o.offsetY)}px`;return`radial-gradient(ellipse calc(${o.sizeW}px * var(--beam-w-${r})) calc(${o.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${i}) calc(100%${a}), ${o.color}, transparent)`}).join(`,
       `)}var Px={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],forest:[{color:"rgba(46, 160, 90,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(30, 190, 120,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(70, 180, 70,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(20, 150, 130,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(90, 200, 80,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(40, 170, 110,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(120, 210, 70,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(35, 145, 100,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(60, 195, 140,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],candy:[{color:"rgba(240, 70, 170,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 90, 140,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(215, 60, 200,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 110, 180,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(200, 80, 240,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(250, 60, 150,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(230, 120, 220,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(245, 85, 165,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(210, 70, 230,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ice:[{color:"rgba(90, 200, 240,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 175, 230,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(130, 220, 250,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(70, 190, 215,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(110, 210, 255,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(50, 165, 220,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(150, 230, 250,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(85, 195, 235,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(65, 180, 245,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(240, 190, 60,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 210, 90,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(225, 165, 40,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(250, 200, 70,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 225, 120,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(230, 175, 50,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(245, 205, 85,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 155, 35,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 215, 100,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function Lx(e,t){return Px[e].map(n=>{let o=n.offsetX===0?"":n.offsetX>0?` + ${n.offsetX}px`:` - ${Math.abs(n.offsetX)}px`,i=n.offsetY===0?"":` - ${Math.abs(n.offsetY)}px`;return`radial-gradient(ellipse calc(${n.sizeW}px * var(--beam-w-${t})) calc(${n.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${o}) calc(100%${i}), ${n.color}, transparent)`}).join(`,
    `)}var Ox={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},forest:{dark:{spikes:[{color1:"rgb(46, 160, 90)",color2:"rgb(30, 190, 120)"},{color1:"rgba(70, 180, 70,, 0.59)",color2:"rgba(20, 150, 130,, 0.29)"},{color1:"rgb(90, 200, 80)",color2:"rgb(40, 170, 110)"},{color1:"rgba(120, 210, 70,, 0.91)",color2:"rgba(35, 145, 100,, 0.45)"},{color1:"rgb(60, 195, 140)",color2:"rgb(46, 160, 90)"}]},light:{spikes:[{color1:"rgb(33, 115, 65)",color2:"rgba(22, 137, 86,, 0.8)"},{color1:"rgba(50, 130, 50,, 0.7)",color2:"rgba(14, 108, 94,, 0.46)"},{color1:"rgb(65, 144, 58)",color2:"rgba(29, 122, 79,, 0.82)"},{color1:"rgb(86, 151, 50)",color2:"rgba(25, 104, 72,, 0.7)"},{color1:"rgb(43, 140, 101)",color2:"rgba(33, 115, 65,, 0.78)"}]}},candy:{dark:{spikes:[{color1:"rgb(240, 70, 170)",color2:"rgb(255, 90, 140)"},{color1:"rgba(215, 60, 200,, 0.59)",color2:"rgba(255, 110, 180,, 0.29)"},{color1:"rgb(200, 80, 240)",color2:"rgb(250, 60, 150)"},{color1:"rgba(230, 120, 220,, 0.91)",color2:"rgba(245, 85, 165,, 0.45)"},{color1:"rgb(210, 70, 230)",color2:"rgb(240, 70, 170)"}]},light:{spikes:[{color1:"rgb(173, 50, 122)",color2:"rgba(184, 65, 101,, 0.8)"},{color1:"rgba(155, 43, 144,, 0.7)",color2:"rgba(184, 79, 130,, 0.46)"},{color1:"rgb(144, 58, 173)",color2:"rgba(180, 43, 108,, 0.82)"},{color1:"rgb(166, 86, 158)",color2:"rgba(176, 61, 119,, 0.7)"},{color1:"rgb(151, 50, 166)",color2:"rgba(173, 50, 122,, 0.78)"}]}},ice:{dark:{spikes:[{color1:"rgb(90, 200, 240)",color2:"rgb(60, 175, 230)"},{color1:"rgba(130, 220, 250,, 0.59)",color2:"rgba(70, 190, 215,, 0.29)"},{color1:"rgb(110, 210, 255)",color2:"rgb(50, 165, 220)"},{color1:"rgba(150, 230, 250,, 0.91)",color2:"rgba(85, 195, 235,, 0.45)"},{color1:"rgb(65, 180, 245)",color2:"rgb(90, 200, 240)"}]},light:{spikes:[{color1:"rgb(65, 144, 173)",color2:"rgba(43, 126, 166,, 0.8)"},{color1:"rgba(94, 158, 180,, 0.7)",color2:"rgba(50, 137, 155,, 0.46)"},{color1:"rgb(79, 151, 184)",color2:"rgba(36, 119, 158,, 0.82)"},{color1:"rgb(108, 166, 180)",color2:"rgba(61, 140, 169,, 0.7)"},{color1:"rgb(47, 130, 176)",color2:"rgba(65, 144, 173,, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(240, 190, 60)",color2:"rgb(255, 210, 90)"},{color1:"rgba(225, 165, 40,, 0.59)",color2:"rgba(250, 200, 70,, 0.29)"},{color1:"rgb(255, 225, 120)",color2:"rgb(230, 175, 50)"},{color1:"rgba(245, 205, 85,, 0.91)",color2:"rgba(215, 155, 35,, 0.45)"},{color1:"rgb(255, 215, 100)",color2:"rgb(240, 190, 60)"}]},light:{spikes:[{color1:"rgb(173, 137, 43)",color2:"rgba(184, 151, 65,, 0.8)"},{color1:"rgba(162, 119, 29,, 0.7)",color2:"rgba(180, 144, 50,, 0.46)"},{color1:"rgb(184, 162, 86)",color2:"rgba(166, 126, 36,, 0.82)"},{color1:"rgb(176, 148, 61)",color2:"rgba(155, 112, 25,, 0.7)"},{color1:"rgb(184, 155, 72)",color2:"rgba(173, 137, 43,, 0.78)"}]}}};function Es(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${t})`;let n=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${t})`:e}function on(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*t).toFixed(2)})`;let n=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${t.toFixed(2)})`:e}function Ix(e,t,r){let n=Ex(e,t),o=Ox[e][t?"dark":"light"],i=e==="mono",a=i?.14:1,s=i?on(n.primary,.14):n.primary,l=i?on(n.primary,.09):n.primary,u=i?on(n.secondary,.12):n.secondary,c=i?Es(n.secondary,.06):Es(n.secondary,.49),f=o.spikes.map(L=>i?{color1:on(L.color1,a),color2:on(L.color2,a*.7)}:L),m=i?"12px":"0.8px",h=i?"14px":"2px",x=i?"12px":"1.2px",b=i?"10px":"0.6px",y=i?"42px":"92px",d=i?"38px":"72px",p=i?"40px":"85px",g=i?"32px":"60px",v=i?"12px":"1px",w=i?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",k=i?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",_=i?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",z=i?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",E=i?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",C=i?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(t)return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${s}, ${l} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${u}, ${c} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${d} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${f[0].color1}, ${f[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${f[1].color1}, ${f[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${f[2].color1}, ${f[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${f[3].color1}, ${f[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${b} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${f[4].color1}, ${f[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${w} 0%, ${k} 20%, ${_} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${z} 0%, ${E} 25%, ${C} 55%, transparent 80%)`;{let L=i?on(n.primary,.11):Es(n.primary,.85),W=i?on(n.secondary,.09):Es(n.secondary,.7);return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${s}, ${L} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${u}, ${W} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${d} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${f[0].color1}, ${f[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${f[1].color1}, ${f[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${f[2].color1}, ${f[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${f[3].color1}, ${f[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${v} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${f[4].color1}, ${f[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}var h1=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],Fx=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],Ax=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],d1=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],Hx=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function Dx(e,t,r){let n=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return`rgba(${n?`${n[1]}, ${n[2]}, ${n[3]}`:"255, 255, 255"}, var(--bop-${t}-${r}))`}function af(e,t,r,n,o,i,a,s){return`radial-gradient(ellipse calc(${t}px * var(--bw${n}-${s}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r}px * var(--bh${n}-${s}) * var(--bgh-${s}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${i} + var(--bx${n}-${s})) calc(${a} + var(--by${n}-${s})), ${Dx(e,o,s)}, transparent)`}function Nx(e,t){return an[e].border.map((r,n)=>{let{region:o,quad:i}=h1[n],[a,s]=r.pos.split(" "),[l,u]=r.size.split(" ").map(parseFloat);return af(r.color,l,u,o,i,a,s,t)}).join(`,
    `)}function Wx(e,t,r){let o=an[e].border.map((u,c)=>{let{region:f,quad:m}=h1[c],[h,x]=u.pos.split(" "),[b,y]=Fx[c];return af(u.color,b,y,f,m,h,x,t)}),i=r?"255, 255, 255":"0, 0, 0",a=r?.18:.08,l=[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([u,c,f])=>`radial-gradient(ellipse 60px 60px at ${u} ${c}, rgba(${i}, calc(${a} * var(--bop-${f}-${t}))), transparent 70%)`);return[...o,...l].join(`,
    `)}function p1(e,t,r){let n=an[t].border;return e.map(o=>{let i=n[o.ci],[a,s]=i.pos.split(" ");return af(i.color,o.w,o.h,o.region,o.quad,o.x??a,o.y??s,r)}).join(`,
    `)}function b1(e,t,r){let n=an[t].border,o=+r.toFixed(3);return e.map(i=>{let a=n[i.ci],[s,l]=a.pos.split(" "),u=i.x??s,c=i.y??l,f=a.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),m=f?`${f[1]}, ${f[2]}, ${f[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${i.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${i.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${u} ${c}, rgba(${m}, ${o}), transparent)`}).join(`,
    `)}function Si(e){return`
[data-beam="${e}"][data-paused],
[data-beam="${e}"][data-paused]::after,
[data-beam="${e}"][data-paused]::before,
[data-beam="${e}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function x1(e){let t=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"],r=["bx1","by1","bx2","by2","bx3","by3"],n=t.map(i=>`@property --${i}-${e} {
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
}`}function v1(e,t,r){let n=t==="dark",o=r/2.3;return e==="pulse-inner"?{sp:.28,dr:n?33:40,op:n?.48:.45,gh:n?.34:.22,bs:(n?1.9:2.6)*o,ss:(n?2.6:4.6)*o,ghs:(n?2.4:5.5)*o,huePeriod:16}:{sp:n?.28:.36,dr:n?14:19,op:n?.46:0,gh:n?.16:.58,bs:(n?2.3:3.7)*o,ss:(n?6.4:4.6)*o,ghs:(n?2.4:3.8)*o,huePeriod:14}}function Ts(e,t,r){return`  animation: ${t}-${e} ${r}s ease forwards;`}function Er(e,t=1){return Math.max(.5,Math.round(e*t*100)/100)}function y1(e){let{size:t}=e;return t==="line"?Yx(e):t==="sm"?Bx(e):t==="pulse-inner"?Gx(e):t==="pulse-outside"?Ux(e):Xx(e)}function Bx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,innerShadow:l,colorVariant:u,staticColors:c,brightness:f,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,y=Math.max(0,r-n),d=u==="mono"?.5:1,p=i*d,g=a*d,v=s*d,w=c?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=c?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,_=x==="dark",z=_?`conic-gradient(
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
      )`,E=zx(u),C=Mx(u),L=_?`conic-gradient(
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
      )`,W=`conic-gradient(
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
  background: ${z},${E};
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
  -webkit-mask-image: ${W};
  -webkit-mask-composite: source-over;
  mask-image: ${W};
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
  background: ${L};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  filter: blur(${Er(8,b)}px) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)});
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
${Si(t)}
`}function Xx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,innerShadow:l,colorVariant:u,staticColors:c,brightness:f,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,y=Math.max(0,r-n),d=u==="mono"?.5:1,p=i*d,g=a*d,v=s*d,w=c?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=c?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,_=x==="dark",z=_?`conic-gradient(
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
      )`,E=Cx(u),C=Rx(u),L=_?`conic-gradient(
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
  background: ${z},${E};
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
  background: ${L};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  filter: blur(${Er(8,b)}px) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)});
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
${Si(t)}
`}function Gx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,colorVariant:l,staticColors:u,brightness:c,saturation:f,hueRange:m,theme:h,glowSize:x=1}=e,b=h==="dark",y=l==="mono"?.5:1,d=(i*y).toFixed(2),p=(a*y).toFixed(2),g=(s*y).toFixed(2),{op:v}=v1("pulse-inner",h,o),w=Er(8,x),k=c.toFixed(2),_=f.toFixed(2),z=u?`filter: brightness(${k}) saturate(${_});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${k}) saturate(${_});`,E=u?`filter: blur(${w}px) brightness(${k}) saturate(${_});`:`filter: blur(${w}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${k}) saturate(${_});`,C=Nx(l,t),L=Wx(l,t,b),W=b1(Ax,l,1-v*.5);return`
${x1(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${Ts(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${Ts(t,"beam-fade-out",.5)}
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
  opacity: calc(var(--beam-opacity-${t}) * ${d} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${z}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${L};
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
  ${z}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${W};
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
  ${E}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${Si(t)}

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
`}function Ux(e){let{id:t,borderRadius:r,duration:n,strokeOpacity:o,innerOpacity:i,bloomOpacity:a,colorVariant:s,staticColors:l,brightness:u,saturation:c,hueRange:f,theme:m,hairlineOpacity:h=0,glowSize:x=1}=e,b=m==="dark",y=s==="mono"?.5:1,d=(o*y).toFixed(2),p=(i*y).toFixed(2),g=(a*y).toFixed(2),v=b?"70, 70, 70":"0, 0, 0",w=h.toFixed(2),k=`linear-gradient(rgba(${v}, ${w}), rgba(${v}, ${w}))`,{op:_}=v1("pulse-outside",m,n),z=.95,E=.9,C=Er(b?3:6,x),L=Er(b?22.5:15,x),W=u.toFixed(2),R=c.toFixed(2),O=l?`filter: brightness(${W}) saturate(${R});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${W}) saturate(${R});`,V=`brightness(var(--beam-glow-brightness, ${W})) saturate(var(--beam-glow-saturate, ${R}))`,B=l?`filter: blur(var(--beam-core-blur, ${C}px)) ${V};`:`filter: blur(var(--beam-core-blur, ${C}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${V};`,P=l?`filter: blur(var(--beam-bloom-blur, ${L}px)) ${V};`:`filter: blur(var(--beam-bloom-blur, ${L}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${V};`,N=p1(d1,s,t),H=p1(d1,s,t),K=b1(Hx,s,1-_*.5),U=h>0?`${N},
    ${k}`:N;return`
${x1(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${Ts(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${Ts(t,"beam-fade-out",.5)}
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
  opacity: calc(var(--beam-opacity-${t}) * ${d} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${O}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${r+10}px;
  background: ${H};
  transform: scale(${z}, ${E});
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
  transform: scale(${z}, ${E});
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${g} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${P}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${Si(t)}

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
`}function Yx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:s,innerShadow:l,colorVariant:u,staticColors:c,brightness:f,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,y=Math.max(0,r-n),d=x==="dark",p=i,g=a,v=s,w=c?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=c?"":`animation: beam-hue-shift-bloom-${t} 8s ease-in-out infinite;`,_=c?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${t} {
  0% { filter: blur(${Er(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: blur(${Er(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h+10}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: blur(${Er(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,z=d?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,E=Tx(u,d,t),C=Lx(u,t),L=Ix(u,d,t),W=u==="mono"?"filter: blur(6px);":"";return`
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
  background: ${z}, ${E};
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
  background: ${L};
  ${W}
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
${_}
${Si(t)}
`}async function w1(e,t,r,n){let o=Math.min(n,2,Math.sqrt(4e6/(t*r*e.length))),i=Math.max(1,Math.ceil(t*o)),a=Math.max(1,Math.ceil(r*o));return Promise.all(e.map(async({key:s,css:l})=>{let u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("width",String(i)),u.setAttribute("height",String(a)),u.setAttribute("viewBox",`0 0 ${t} ${r}`);let c=document.createElementNS(u.namespaceURI,"foreignObject");c.setAttribute("width",String(t)),c.setAttribute("height",String(r));let f=document.createElement("div");f.style.cssText="width:100%;height:100%;color-scheme:normal";let m=document.createElement("style");m.textContent=`*{box-sizing:border-box}${l}`;let h=document.createElement("div");h.setAttribute("data-beam",s),h.setAttribute("data-active",""),h.style.cssText="width:100%;height:100%";let x=document.createElement("div");x.setAttribute("data-beam-bloom",""),h.append(x),f.append(m,h),c.append(f),u.append(c);let b=new Image;b.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(u))}`,await b.decode();let y=document.createElement("canvas");y.width=i,y.height=a;let d=y.getContext("2d");if(!d)throw Error("Beam raster context unavailable");d.drawImage(b,0,0,i,a);let p=y.toDataURL("image/png");y.width=y.height=1,b.src="";let g=new Image;return g.src=p,await g.decode(),p}))}var tr=nt(nn(),1);function S1({radius:e,theme:t,running:r,paused:n}){let o=(0,tt.useRef)(null),i=(0,tt.useId)().replace(/:/g,"-"),[a,s]=(0,tt.useState)(null),l=(0,tt.useMemo)(()=>Array.from({length:4},(c,f)=>{let m=`ctmb-cache-${i}-${f}`,h=$s.md[t],x=y1({id:m,size:"md",theme:t,colorVariant:"ocean",borderRadius:e,borderWidth:m1.md.borderWidth,duration:16,...h,staticColors:!0,brightness:1.5,saturation:.9,hueRange:0,glowSize:1.3});return{key:m,css:x+`
[data-beam="${m}"][data-active]{animation:none!important;--beam-angle-${m}:${f*90}deg;--beam-opacity-${m}:1}`}}),[i,e,t]);(0,tt.useEffect)(()=>{let c=!0,f=0,m=0,h="",x=()=>{f=0;let d=o.current?.getBoundingClientRect();if(!d?.width||!d?.height)return;let p=window.devicePixelRatio||1,g=[d.width,d.height,p].join(",");if(h===g)return;h=g;let v=++m;w1(l,d.width,d.height,p).then(w=>{c&&v===m&&s({frames:l,images:w})}).catch(()=>{})},b=()=>{clearTimeout(f),f=setTimeout(x,80)},y=new ResizeObserver(b);return y.observe(o.current),window.addEventListener("resize",b,{passive:!0}),x(),()=>{c=!1,m++,clearTimeout(f),y.disconnect(),window.removeEventListener("resize",b)}},[l]),(0,tt.useEffect)(()=>{for(let c of o.current?.getAnimations({subtree:!0})??[])c.animationName==="ctmb-beam-crossfade"&&(c.updatePlaybackRate(r?1.5:.8),n?c.pause():c.play())},[n,r,l]);let u=a?.frames===l?a.images:null;return(0,tr.jsx)("div",{ref:o,className:"ctmb-cached-beam","data-raster":u?"ready":"css",style:{borderRadius:e,opacity:r?1:.82},children:l.map(({key:c,css:f},m)=>(0,tr.jsxs)(tt.default.Fragment,{children:[!u&&(0,tr.jsx)("style",{children:f}),(0,tr.jsx)("div",{className:"ctmb-beam-frame",style:{animationDelay:`${-m*4}s`},children:u?(0,tr.jsx)("img",{src:u[m],alt:"",draggable:!1,className:"ctmb-beam-texture"}):(0,tr.jsx)("div",{"data-beam":c,"data-active":"",style:{width:"100%",height:"100%",borderRadius:e},children:(0,tr.jsx)("div",{"data-beam-bloom":""})})})]},c))})}var ki=nt(nn(),1),lf=new Set,$r=0,uf=!1,Ps=!1,cf=class extends Ls.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(t){this.props.onError?.(t)}render(){return this.state.failed?null:this.props.children}};function Vx({neighbors:e,radius:t,variant:r,theme:n,strength:o,paused:i,preset:a,glowPortal:s}){let l=(0,Ls.useRef)(null);return(0,ki.jsx)(nf,{ref:l,preset:a,variant:r,theme:n,borderRadius:t,strength:o,paused:i,reflectionTargets:e,glowPortal:s,innerShadow:!0,style:{width:"100%",height:"100%"},children:(0,ki.jsx)("span",{style:{display:"block",width:"100%",height:"100%",borderRadius:t}})})}var jx=S1;function _1(e,t,r,n){let o=(0,k1.createRoot)(t,{identifierPrefix:"ctmb-"}),i=l=>(0,sf.flushSync)(()=>o.render((0,ki.jsx)(cf,{onError:n,children:(0,ki.jsx)(e,{...l})}))),a=!0,s={update:i,dispose(){a&&(a=!1,(0,sf.flushSync)(()=>o.unmount()),lf.delete(s))}};return lf.add(s),i(r),s}var ry=(e,t,r)=>_1(Vx,e,t,r),ny=(e,t,r)=>_1(jx,e,t,r);function oy(){Ps||(Ps=!0,Jm({enabled:!1}),Kg({enabled:!1}),c1(),Mm())}function iy(e){if(uf=e,$r&&cancelAnimationFrame($r),$r=0,!e){yc();return}let t=()=>{$r=0,!(!Ps||!uf||!S)&&([...S.instances].some(r=>r.visible&&!r.everCopied)?(yc(),$r=requestAnimationFrame(t)):Im())};t()}function ay(e){Nm(e?1e3/12:1e3/6)}function sy(){return{webgl:!!S,instances:S?.instances.size??0,reflections:t1(),frames:S?.frameCount??0,...Wm(),paused:uf}}function ly(){Ps=!1,$r&&cancelAnimationFrame($r),$r=0;for(let e of[...lf])e.dispose();e1(),n1(),Cm(),document.getElementById("ctmb-mfx-bend-style")?.remove(),f1()}export{ly as disposeRuntime,Jg as invalidateReflectionGeometry,nc as isMetalFxSupported,ny as mountBeam,ry as mountMetal,sy as runtimeState,ay as setActivity,iy as setMotionPaused,oy as startRuntime};
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
