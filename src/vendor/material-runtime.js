var X1=Object.create;var Uc=Object.defineProperty;var G1=Object.getOwnPropertyDescriptor;var Y1=Object.getOwnPropertyNames;var U1=Object.getPrototypeOf,V1=Object.prototype.hasOwnProperty;var Ft=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var j1=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Y1(t))!V1.call(e,o)&&o!==r&&Uc(e,o,{get:()=>t[o],enumerable:!(n=G1(t,o))||n.enumerable});return e};var et=(e,t,r)=>(r=e!=null?X1(U1(e)):{},j1(t||!e||!e.__esModule?Uc(r,"default",{value:e,enumerable:!0}):r,e));var of=Ft(G=>{"use strict";var to=Symbol.for("react.element"),Q1=Symbol.for("react.portal"),q1=Symbol.for("react.fragment"),K1=Symbol.for("react.strict_mode"),Z1=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),eg=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),rg=Symbol.for("react.suspense"),ng=Symbol.for("react.memo"),og=Symbol.for("react.lazy"),Vc=Symbol.iterator;function ig(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kc=Object.assign,Zc={};function tn(e,t,r){this.props=e,this.context=t,this.refs=Zc,this.updater=r||qc}tn.prototype.isReactComponent={};tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jc(){}Jc.prototype=tn.prototype;function kl(e,t,r){this.props=e,this.context=t,this.refs=Zc,this.updater=r||qc}var zl=kl.prototype=new Jc;zl.constructor=kl;Kc(zl,tn.prototype);zl.isPureReactComponent=!0;var jc=Array.isArray,ef=Object.prototype.hasOwnProperty,_l={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ef.call(t,n)&&!tf.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:to,type:e,key:i,ref:a,props:o,_owner:_l.current}}function ag(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function lg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Qc=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lg(""+e.key):t.toString(36)}function vi(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case to:case Q1:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+Sl(a,0):n,jc(o)?(r="",e!=null&&(r=e.replace(Qc,"$&/")+"/"),vi(o,t,r,"",function(u){return u})):o!=null&&(Ml(o)&&(o=ag(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Qc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",jc(e))for(var l=0;l<e.length;l++){i=e[l];var s=n+Sl(i,l);a+=vi(i,t,r,s,o)}else if(s=ig(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=n+Sl(i,l++),a+=vi(i,t,r,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function xi(e,t,r){if(e==null)return e;var n=[],o=0;return vi(e,n,"","",function(i){return t.call(r,i,o++)}),n}function sg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},yi={transition:null},ug={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:yi,ReactCurrentOwner:_l};function nf(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:xi,forEach:function(e,t,r){xi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return xi(e,function(){t++}),t},toArray:function(e){return xi(e,function(t){return t})||[]},only:function(e){if(!Ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=tn;G.Fragment=q1;G.Profiler=Z1;G.PureComponent=kl;G.StrictMode=K1;G.Suspense=rg;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug;G.act=nf;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Kc({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=_l.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ef.call(t,s)&&!tf.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:to,type:e.type,key:o,ref:i,props:n,_owner:a}};G.createContext=function(e){return e={$$typeof:eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:J1,_context:e},e.Consumer=e};G.createElement=rf;G.createFactory=function(e){var t=rf.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:tg,render:e}};G.isValidElement=Ml;G.lazy=function(e){return{$$typeof:og,_payload:{_status:-1,_result:e},_init:sg}};G.memo=function(e,t){return{$$typeof:ng,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};G.unstable_act=nf;G.useCallback=function(e,t){return Ie.current.useCallback(e,t)};G.useContext=function(e){return Ie.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ie.current.useEffect(e,t)};G.useId=function(){return Ie.current.useId()};G.useImperativeHandle=function(e,t,r){return Ie.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ie.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Ie.current.useReducer(e,t,r)};G.useRef=function(e){return Ie.current.useRef(e)};G.useState=function(e){return Ie.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Ie.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Ie.current.useTransition()};G.version="18.3.1"});var rn=Ft((sx,af)=>{"use strict";af.exports=of()});var hf=Ft(oe=>{"use strict";function El(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(0<wi(o,t))e[n]=t,e[r]=o,r=n;else break e}}function ct(e){return e.length===0?null:e[0]}function ki(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var a=2*(n+1)-1,l=e[a],s=a+1,u=e[s];if(0>wi(l,r))s<o&&0>wi(u,l)?(e[n]=u,e[s]=r,n=s):(e[n]=l,e[a]=r,n=a);else if(s<o&&0>wi(u,r))e[n]=u,e[s]=r,n=s;else break e}}return t}function wi(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(lf=performance,oe.unstable_now=function(){return lf.now()}):(Cl=Date,sf=Cl.now(),oe.unstable_now=function(){return Cl.now()-sf});var lf,Cl,sf,St=[],Kt=[],cg=1,tt=null,Ee=3,zi=!1,$r=!1,no=!1,ff=typeof setTimeout=="function"?setTimeout:null,df=typeof clearTimeout=="function"?clearTimeout:null,uf=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Tl(e){for(var t=ct(Kt);t!==null;){if(t.callback===null)ki(Kt);else if(t.startTime<=e)ki(Kt),t.sortIndex=t.expirationTime,El(St,t);else break;t=ct(Kt)}}function Ll(e){if(no=!1,Tl(e),!$r)if(ct(St)!==null)$r=!0,Ol(Pl);else{var t=ct(Kt);t!==null&&Il(Ll,t.startTime-e)}}function Pl(e,t){$r=!1,no&&(no=!1,df(oo),oo=-1),zi=!0;var r=Ee;try{for(Tl(t),tt=ct(St);tt!==null&&(!(tt.expirationTime>t)||e&&!gf());){var n=tt.callback;if(typeof n=="function"){tt.callback=null,Ee=tt.priorityLevel;var o=n(tt.expirationTime<=t);t=oe.unstable_now(),typeof o=="function"?tt.callback=o:tt===ct(St)&&ki(St),Tl(t)}else ki(St);tt=ct(St)}if(tt!==null)var i=!0;else{var a=ct(Kt);a!==null&&Il(Ll,a.startTime-t),i=!1}return i}finally{tt=null,Ee=r,zi=!1}}var _i=!1,Si=null,oo=-1,pf=5,mf=-1;function gf(){return!(oe.unstable_now()-mf<pf)}function $l(){if(Si!==null){var e=oe.unstable_now();mf=e;var t=!0;try{t=Si(!0,e)}finally{t?ro():(_i=!1,Si=null)}}else _i=!1}var ro;typeof uf=="function"?ro=function(){uf($l)}:typeof MessageChannel<"u"?(Rl=new MessageChannel,cf=Rl.port2,Rl.port1.onmessage=$l,ro=function(){cf.postMessage(null)}):ro=function(){ff($l,0)};var Rl,cf;function Ol(e){Si=e,_i||(_i=!0,ro())}function Il(e,t){oo=ff(function(){e(oe.unstable_now())},t)}oe.unstable_IdlePriority=5;oe.unstable_ImmediatePriority=1;oe.unstable_LowPriority=4;oe.unstable_NormalPriority=3;oe.unstable_Profiling=null;oe.unstable_UserBlockingPriority=2;oe.unstable_cancelCallback=function(e){e.callback=null};oe.unstable_continueExecution=function(){$r||zi||($r=!0,Ol(Pl))};oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pf=0<e?Math.floor(1e3/e):5};oe.unstable_getCurrentPriorityLevel=function(){return Ee};oe.unstable_getFirstCallbackNode=function(){return ct(St)};oe.unstable_next=function(e){switch(Ee){case 1:case 2:case 3:var t=3;break;default:t=Ee}var r=Ee;Ee=t;try{return e()}finally{Ee=r}};oe.unstable_pauseExecution=function(){};oe.unstable_requestPaint=function(){};oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=Ee;Ee=e;try{return t()}finally{Ee=r}};oe.unstable_scheduleCallback=function(e,t,r){var n=oe.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=r+o,e={id:cg++,callback:t,priorityLevel:e,startTime:r,expirationTime:o,sortIndex:-1},r>n?(e.sortIndex=r,El(Kt,e),ct(St)===null&&e===ct(Kt)&&(no?(df(oo),oo=-1):no=!0,Il(Ll,r-n))):(e.sortIndex=o,El(St,e),$r||zi||($r=!0,Ol(Pl))),e};oe.unstable_shouldYield=gf;oe.unstable_wrapCallback=function(e){var t=Ee;return function(){var r=Ee;Ee=t;try{return e.apply(this,arguments)}finally{Ee=r}}}});var xf=Ft((cx,bf)=>{"use strict";bf.exports=hf()});var Sp=Ft(Ze=>{"use strict";var fg=rn(),qe=xf();function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _0=new Set,Co={};function Dr(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Co[e]=t,e=0;e<t.length;e++)_0.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=Object.prototype.hasOwnProperty,dg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vf={},yf={};function pg(e){return os.call(yf,e)?!0:os.call(vf,e)?!1:dg.test(e)?yf[e]=!0:(vf[e]=!0,!1)}function mg(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gg(e,t,r,n){if(t===null||typeof t>"u"||mg(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var qs=/[\-:]([a-z])/g;function Ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qs,Ks);$e[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qs,Ks);$e[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qs,Ks);$e[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zs(e,t,r,n){var o=$e.hasOwnProperty(t)?$e[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gg(t,r,o,n)&&(r=null),n||o===null?pg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ut=fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=Symbol.for("react.element"),an=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),Js=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),eu=Symbol.for("react.forward_ref"),as=Symbol.for("react.suspense"),ls=Symbol.for("react.suspense_list"),tu=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),wf=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=wf&&e[wf]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Fl;function mo(e){if(Fl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Hl=!1;function Al(e,t){if(!e||Hl)return"";Hl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Hl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?mo(e):""}function hg(e){switch(e.tag){case 5:return mo(e.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ln:return"Fragment";case an:return"Portal";case is:return"Profiler";case Js:return"StrictMode";case as:return"Suspense";case ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C0:return(e.displayName||"Context")+".Consumer";case M0:return(e._context.displayName||"Context")+".Provider";case eu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tu:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function bg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===Js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function R0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xg(e){var t=R0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=xg(e))}function E0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=R0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function us(e,t){var r=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Sf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=pr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function T0(e,t){t=t.checked,t!=null&&Zs(e,"checked",t,!1)}function cs(e,t){T0(e,t);var r=pr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fs(e,t.type,r):t.hasOwnProperty("defaultValue")&&fs(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function fs(e,t,r){(t!=="number"||ta(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var go=Array.isArray;function xn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+pr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(M(92));if(go(r)){if(1<r.length)throw Error(M(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pr(r)}}function L0(e,t){var r=pr(t.value),n=pr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function _f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function P0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?P0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,O0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $o(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vg=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(e){vg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xo[t]=xo[e]})});function I0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||xo.hasOwnProperty(e)&&xo[e]?(""+t).trim():t+"px"}function F0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=I0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var yg=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ms(e,t){if(t){if(yg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hs=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,vn=null,yn=null;function Mf(e){if(e=Uo(e)){if(typeof bs!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ra(t),bs(e.stateNode,e.type,t))}}function H0(e){vn?yn?yn.push(e):yn=[e]:vn=e}function A0(){if(vn){var e=vn,t=yn;if(yn=vn=null,Mf(e),t)for(e=0;e<t.length;e++)Mf(t[e])}}function N0(e,t){return e(t)}function W0(){}var Nl=!1;function D0(e,t,r){if(Nl)return e(t,r);Nl=!0;try{return N0(e,t,r)}finally{Nl=!1,(vn!==null||yn!==null)&&(W0(),A0())}}function Ro(e,t){var r=e.stateNode;if(r===null)return null;var n=Ra(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(M(231,t,typeof r));return r}var xs=!1;if(Bt)try{nn={},Object.defineProperty(nn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{xs=!1}var nn;function wg(e,t,r,n,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var vo=!1,ra=null,na=!1,vs=null,Sg={onError:function(e){vo=!0,ra=e}};function kg(e,t,r,n,o,i,a,l,s){vo=!1,ra=null,wg.apply(Sg,arguments)}function zg(e,t,r,n,o,i,a,l,s){if(kg.apply(this,arguments),vo){if(vo){var u=ra;vo=!1,ra=null}else throw Error(M(198));na||(na=!0,vs=u)}}function Br(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function B0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cf(e){if(Br(e)!==e)throw Error(M(188))}function _g(e){var t=e.alternate;if(!t){if(t=Br(e),t===null)throw Error(M(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Cf(o),e;if(i===n)return Cf(o),t;i=i.sibling}throw Error(M(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?e:t}function X0(e){return e=_g(e),e!==null?G0(e):null}function G0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=G0(e);if(t!==null)return t;e=e.sibling}return null}var Y0=qe.unstable_scheduleCallback,$f=qe.unstable_cancelCallback,Mg=qe.unstable_shouldYield,Cg=qe.unstable_requestPaint,ve=qe.unstable_now,$g=qe.unstable_getCurrentPriorityLevel,nu=qe.unstable_ImmediatePriority,U0=qe.unstable_UserBlockingPriority,oa=qe.unstable_NormalPriority,Rg=qe.unstable_LowPriority,V0=qe.unstable_IdlePriority,_a=null,Mt=null;function Eg(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Pg,Tg=Math.log,Lg=Math.LN2;function Pg(e){return e>>>=0,e===0?32:31-(Tg(e)/Lg|0)|0}var Ri=64,Ei=4194304;function ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ia(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~o;l!==0?n=ho(l):(i&=a,i!==0&&(n=ho(i)))}else a=r&~o,a!==0?n=ho(a):i!==0&&(n=ho(i));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-gt(t),o=1<<r,n|=e[r],t&=~o;return n}function Og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ig(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-gt(i),l=1<<a,s=o[a];s===-1?((l&r)===0||(l&n)!==0)&&(o[a]=Og(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function j0(){var e=Ri;return Ri<<=1,(Ri&4194240)===0&&(Ri=64),e}function Wl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Go(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=r}function Fg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-gt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function ou(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-gt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var ee=0;function Q0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var q0,iu,K0,Z0,J0,ws=!1,Ti=[],ir=null,ar=null,lr=null,Eo=new Map,To=new Map,tr=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function ao(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Uo(t),t!==null&&iu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ag(e,t,r,n,o){switch(t){case"focusin":return ir=ao(ir,e,t,r,n,o),!0;case"dragenter":return ar=ao(ar,e,t,r,n,o),!0;case"mouseover":return lr=ao(lr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Eo.set(i,ao(Eo.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,To.set(i,ao(To.get(i)||null,e,t,r,n,o)),!0}return!1}function ed(e){var t=Tr(e.target);if(t!==null){var r=Br(t);if(r!==null){if(t=r.tag,t===13){if(t=B0(r),t!==null){e.blockedOn=t,J0(e.priority,function(){K0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);hs=n,r.target.dispatchEvent(n),hs=null}else return t=Uo(r),t!==null&&iu(t),e.blockedOn=r,!1;t.shift()}return!0}function Ef(e,t,r){Yi(e)&&r.delete(t)}function Ng(){ws=!1,ir!==null&&Yi(ir)&&(ir=null),ar!==null&&Yi(ar)&&(ar=null),lr!==null&&Yi(lr)&&(lr=null),Eo.forEach(Ef),To.forEach(Ef)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Ng)))}function Lo(e){function t(o){return lo(o,e)}if(0<Ti.length){lo(Ti[0],e);for(var r=1;r<Ti.length;r++){var n=Ti[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ir!==null&&lo(ir,e),ar!==null&&lo(ar,e),lr!==null&&lo(lr,e),Eo.forEach(t),To.forEach(t),r=0;r<tr.length;r++)n=tr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<tr.length&&(r=tr[0],r.blockedOn===null);)ed(r),r.blockedOn===null&&tr.shift()}var wn=Ut.ReactCurrentBatchConfig,aa=!0;function Wg(e,t,r,n){var o=ee,i=wn.transition;wn.transition=null;try{ee=1,au(e,t,r,n)}finally{ee=o,wn.transition=i}}function Dg(e,t,r,n){var o=ee,i=wn.transition;wn.transition=null;try{ee=4,au(e,t,r,n)}finally{ee=o,wn.transition=i}}function au(e,t,r,n){if(aa){var o=Ss(e,t,r,n);if(o===null)Vl(e,t,n,la,r),Rf(e,n);else if(Ag(o,e,t,r,n))n.stopPropagation();else if(Rf(e,n),t&4&&-1<Hg.indexOf(e)){for(;o!==null;){var i=Uo(o);if(i!==null&&q0(i),i=Ss(e,t,r,n),i===null&&Vl(e,t,n,la,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Vl(e,t,n,null,r)}}var la=null;function Ss(e,t,r,n){if(la=null,e=ru(n),e=Tr(e),e!==null)if(t=Br(e),t===null)e=null;else if(r=t.tag,r===13){if(e=B0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function td(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($g()){case nu:return 1;case U0:return 4;case oa:case Rg:return 16;case V0:return 536870912;default:return 16}default:return 16}}var nr=null,lu=null,Ui=null;function rd(){if(Ui)return Ui;var e,t=lu,r=t.length,n,o="value"in nr?nr.value:nr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return Ui=o.slice(e,1<n?1-n:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function Tf(){return!1}function Ke(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Li:Tf,this.isPropagationStopped=Tf,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=Ke(Tn),Yo=de({},Tn,{view:0,detail:0}),Bg=Ke(Yo),Dl,Bl,so,Ma=de({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Dl=e.screenX-so.screenX,Bl=e.screenY-so.screenY):Bl=Dl=0,so=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),Lf=Ke(Ma),Xg=de({},Ma,{dataTransfer:0}),Gg=Ke(Xg),Yg=de({},Yo,{relatedTarget:0}),Xl=Ke(Yg),Ug=de({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=Ke(Ug),jg=de({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qg=Ke(jg),qg=de({},Tn,{data:0}),Pf=Ke(qg),Kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jg[e])?!!t[e]:!1}function uu(){return eh}var th=de({},Yo,{key:function(e){if(e.key){var t=Kg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rh=Ke(th),nh=de({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Ke(nh),oh=de({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),ih=Ke(oh),ah=de({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Ke(ah),sh=de({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=Ke(sh),ch=[9,13,27,32],cu=Bt&&"CompositionEvent"in window,yo=null;Bt&&"documentMode"in document&&(yo=document.documentMode);var fh=Bt&&"TextEvent"in window&&!yo,nd=Bt&&(!cu||yo&&8<yo&&11>=yo),If=" ",Ff=!1;function od(e,t){switch(e){case"keyup":return ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function dh(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(Ff=!0,If);case"textInput":return e=t.data,e===If&&Ff?null:e;default:return null}}function ph(e,t){if(sn)return e==="compositionend"||!cu&&od(e,t)?(e=rd(),Ui=lu=nr=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nd&&t.locale!=="ko"?null:t.data;default:return null}}var mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mh[e.type]:t==="textarea"}function ad(e,t,r,n){H0(n),t=sa(t,"onChange"),0<t.length&&(r=new su("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var wo=null,Po=null;function gh(e){bd(e,0)}function Ca(e){var t=fn(e);if(E0(t))return e}function hh(e,t){if(e==="change")return t}var ld=!1;Bt&&(Bt?(Oi="oninput"in document,Oi||(Gl=document.createElement("div"),Gl.setAttribute("oninput","return;"),Oi=typeof Gl.oninput=="function"),Pi=Oi):Pi=!1,ld=Pi&&(!document.documentMode||9<document.documentMode));var Pi,Oi,Gl;function Af(){wo&&(wo.detachEvent("onpropertychange",sd),Po=wo=null)}function sd(e){if(e.propertyName==="value"&&Ca(Po)){var t=[];ad(t,Po,e,ru(e)),D0(gh,t)}}function bh(e,t,r){e==="focusin"?(Af(),wo=t,Po=r,wo.attachEvent("onpropertychange",sd)):e==="focusout"&&Af()}function xh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ca(Po)}function vh(e,t){if(e==="click")return Ca(t)}function yh(e,t){if(e==="input"||e==="change")return Ca(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:wh;function Oo(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!os.call(t,o)||!bt(e[o],t[o]))return!1}return!0}function Nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wf(e,t){var r=Nf(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Nf(r)}}function ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(){for(var e=window,t=ta();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ta(e.document)}return t}function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sh(e){var t=cd(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ud(r.ownerDocument.documentElement,r)){if(n!==null&&fu(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Wf(r,i);var a=Wf(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kh=Bt&&"documentMode"in document&&11>=document.documentMode,un=null,ks=null,So=null,zs=!1;function Df(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zs||un==null||un!==ta(n)||(n=un,"selectionStart"in n&&fu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),So&&Oo(So,n)||(So=n,n=sa(ks,"onSelect"),0<n.length&&(t=new su("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=un)))}function Ii(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var cn={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},Yl={},fd={};Bt&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function $a(e){if(Yl[e])return Yl[e];if(!cn[e])return e;var t=cn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in fd)return Yl[e]=t[r];return e}var dd=$a("animationend"),pd=$a("animationiteration"),md=$a("animationstart"),gd=$a("transitionend"),hd=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){hd.set(e,t),Dr(t,[e])}for(Fi=0;Fi<Bf.length;Fi++)Hi=Bf[Fi],Xf=Hi.toLowerCase(),Gf=Hi[0].toUpperCase()+Hi.slice(1),gr(Xf,"on"+Gf);var Hi,Xf,Gf,Fi;gr(dd,"onAnimationEnd");gr(pd,"onAnimationIteration");gr(md,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(gd,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Yf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,zg(n,t,void 0,e),e.currentTarget=null}function bd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Yf(o,l,u),i=s}else for(a=0;a<n.length;a++){if(l=n[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Yf(o,l,u),i=s}}}if(na)throw e=vs,na=!1,vs=null,e}function ae(e,t){var r=t[Rs];r===void 0&&(r=t[Rs]=new Set);var n=e+"__bubble";r.has(n)||(xd(t,e,2,!1),r.add(n))}function Ul(e,t,r){var n=0;t&&(n|=4),xd(r,e,n,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[Ai]){e[Ai]=!0,_0.forEach(function(r){r!=="selectionchange"&&(zh.has(r)||Ul(r,!1,e),Ul(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Ul("selectionchange",!1,t))}}function xd(e,t,r,n){switch(td(t)){case 1:var o=Wg;break;case 4:o=Dg;break;default:o=au}r=o.bind(null,t,r,e),o=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Vl(e,t,r,n,o){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Tr(l),a===null)return;if(s=a.tag,s===5||s===6){n=i=a;continue e}l=l.parentNode}}n=n.return}D0(function(){var u=i,d=ru(r),f=[];e:{var m=hd.get(e);if(m!==void 0){var h=su,x=e;switch(e){case"keypress":if(Vi(r)===0)break e;case"keydown":case"keyup":h=rh;break;case"focusin":x="focus",h=Xl;break;case"focusout":x="blur",h=Xl;break;case"beforeblur":case"afterblur":h=Xl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ih;break;case dd:case pd:case md:h=Vg;break;case gd:h=lh;break;case"scroll":h=Bg;break;case"wheel":h=uh;break;case"copy":case"cut":case"paste":h=Qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Of}var b=(t&4)!==0,w=!b&&e==="scroll",c=b?m!==null?m+"Capture":null:m;b=[];for(var p=u,g;p!==null;){g=p;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,c!==null&&(v=Ro(p,c),v!=null&&b.push(Fo(p,v,g)))),w)break;p=p.return}0<b.length&&(m=new h(m,x,null,r,d),f.push({event:m,listeners:b}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&r!==hs&&(x=r.relatedTarget||r.fromElement)&&(Tr(x)||x[Xt]))break e;if((h||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,h?(x=r.relatedTarget||r.toElement,h=u,x=x?Tr(x):null,x!==null&&(w=Br(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(b=Lf,v="onMouseLeave",c="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Of,v="onPointerLeave",c="onPointerEnter",p="pointer"),w=h==null?m:fn(h),g=x==null?m:fn(x),m=new b(v,p+"leave",h,r,d),m.target=w,m.relatedTarget=g,v=null,Tr(d)===u&&(b=new b(c,p+"enter",x,r,d),b.target=g,b.relatedTarget=w,v=b),w=v,h&&x)t:{for(b=h,c=x,p=0,g=b;g;g=on(g))p++;for(g=0,v=c;v;v=on(v))g++;for(;0<p-g;)b=on(b),p--;for(;0<g-p;)c=on(c),g--;for(;p--;){if(b===c||c!==null&&b===c.alternate)break t;b=on(b),c=on(c)}b=null}else b=null;h!==null&&Uf(f,m,h,b,!1),x!==null&&w!==null&&Uf(f,w,x,b,!0)}}e:{if(m=u?fn(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var y=hh;else if(Hf(m))if(ld)y=yh;else{y=xh;var k=bh}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(y=vh);if(y&&(y=y(e,u))){ad(f,y,r,d);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&fs(m,"number",m.value)}switch(k=u?fn(u):window,e){case"focusin":(Hf(k)||k.contentEditable==="true")&&(un=k,ks=u,So=null);break;case"focusout":So=ks=un=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,Df(f,r,d);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":Df(f,r,d)}var z;if(cu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else sn?od(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(nd&&r.locale!=="ko"&&(sn||_!=="onCompositionStart"?_==="onCompositionEnd"&&sn&&(z=rd()):(nr=d,lu="value"in nr?nr.value:nr.textContent,sn=!0)),k=sa(u,_),0<k.length&&(_=new Pf(_,e,null,r,d),f.push({event:_,listeners:k}),z?_.data=z:(z=id(r),z!==null&&(_.data=z)))),(z=fh?dh(e,r):ph(e,r))&&(u=sa(u,"onBeforeInput"),0<u.length&&(d=new Pf("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=z))}bd(f,t)})}function Fo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function sa(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ro(e,r),i!=null&&n.unshift(Fo(e,i,o)),i=Ro(e,t),i!=null&&n.push(Fo(e,i,o))),e=e.return}return n}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uf(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var l=r,s=l.alternate,u=l.stateNode;if(s!==null&&s===n)break;l.tag===5&&u!==null&&(l=u,o?(s=Ro(r,i),s!=null&&a.unshift(Fo(r,s,l))):o||(s=Ro(r,i),s!=null&&a.push(Fo(r,s,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var _h=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(_h,`
`).replace(Mh,"")}function Ni(e,t,r){if(t=Vf(t),Vf(e)!==t&&r)throw Error(M(425))}function ua(){}var _s=null,Ms=null;function Cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,$h=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Rh)}:$s;function Rh(e){setTimeout(function(){throw e})}function jl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Lo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Lo(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),_t="__reactFiber$"+Ln,Ho="__reactProps$"+Ln,Xt="__reactContainer$"+Ln,Rs="__reactEvents$"+Ln,Eh="__reactListeners$"+Ln,Th="__reactHandles$"+Ln;function Tr(e){var t=e[_t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Xt]||r[_t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Qf(e);e!==null;){if(r=e[_t])return r;e=Qf(e)}return t}e=r,r=e.parentNode}return null}function Uo(e){return e=e[_t]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ra(e){return e[Ho]||null}var Es=[],dn=-1;function hr(e){return{current:e}}function le(e){0>dn||(e.current=Es[dn],Es[dn]=null,dn--)}function ie(e,t){dn++,Es[dn]=e.current,e.current=t}var mr={},Oe=hr(mr),Xe=hr(!1),Fr=mr;function _n(e,t){var r=e.type.contextTypes;if(!r)return mr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ge(e){return e=e.childContextTypes,e!=null}function ca(){le(Xe),le(Oe)}function qf(e,t,r){if(Oe.current!==mr)throw Error(M(168));ie(Oe,t),ie(Xe,r)}function vd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(M(108,bg(e)||"Unknown",o));return de({},r,n)}function fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Fr=Oe.current,ie(Oe,e),ie(Xe,Xe.current),!0}function Kf(e,t,r){var n=e.stateNode;if(!n)throw Error(M(169));r?(e=vd(e,t,Fr),n.__reactInternalMemoizedMergedChildContext=e,le(Xe),le(Oe),ie(Oe,e)):le(Xe),ie(Xe,r)}var At=null,Ea=!1,Ql=!1;function yd(e){At===null?At=[e]:At.push(e)}function Lh(e){Ea=!0,yd(e)}function br(){if(!Ql&&At!==null){Ql=!0;var e=0,t=ee;try{var r=At;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}At=null,Ea=!1}catch(o){throw At!==null&&(At=At.slice(e+1)),Y0(nu,br),o}finally{ee=t,Ql=!1}}return null}var pn=[],mn=0,da=null,pa=0,rt=[],nt=0,Hr=null,Nt=1,Wt="";function Rr(e,t){pn[mn++]=pa,pn[mn++]=da,da=e,pa=t}function wd(e,t,r){rt[nt++]=Nt,rt[nt++]=Wt,rt[nt++]=Hr,Hr=e;var n=Nt;e=Wt;var o=32-gt(n)-1;n&=~(1<<o),r+=1;var i=32-gt(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Nt=1<<32-gt(t)+o|r<<o|n,Wt=i+e}else Nt=1<<i|r<<o|n,Wt=e}function du(e){e.return!==null&&(Rr(e,1),wd(e,1,0))}function pu(e){for(;e===da;)da=pn[--mn],pn[mn]=null,pa=pn[--mn],pn[mn]=null;for(;e===Hr;)Hr=rt[--nt],rt[nt]=null,Wt=rt[--nt],rt[nt]=null,Nt=rt[--nt],rt[nt]=null}var Qe=null,je=null,se=!1,mt=null;function Sd(e,t){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Zf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,je=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Hr!==null?{id:Nt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Qe=e,je=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ls(e){if(se){var t=je;if(t){var r=t;if(!Zf(e,t)){if(Ts(e))throw Error(M(418));t=sr(r.nextSibling);var n=Qe;t&&Zf(e,t)?Sd(n,r):(e.flags=e.flags&-4097|2,se=!1,Qe=e)}}else{if(Ts(e))throw Error(M(418));e.flags=e.flags&-4097|2,se=!1,Qe=e}}}function Jf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Wi(e){if(e!==Qe)return!1;if(!se)return Jf(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cs(e.type,e.memoizedProps)),t&&(t=je)){if(Ts(e))throw kd(),Error(M(418));for(;t;)Sd(e,t),t=sr(t.nextSibling)}if(Jf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){je=sr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}je=null}}else je=Qe?sr(e.stateNode.nextSibling):null;return!0}function kd(){for(var e=je;e;)e=sr(e.nextSibling)}function Mn(){je=Qe=null,se=!1}function mu(e){mt===null?mt=[e]:mt.push(e)}var Ph=Ut.ReactCurrentBatchConfig;function uo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function e0(e){var t=e._init;return t(e._payload)}function zd(e){function t(c,p){if(e){var g=c.deletions;g===null?(c.deletions=[p],c.flags|=16):g.push(p)}}function r(c,p){if(!e)return null;for(;p!==null;)t(c,p),p=p.sibling;return null}function n(c,p){for(c=new Map;p!==null;)p.key!==null?c.set(p.key,p):c.set(p.index,p),p=p.sibling;return c}function o(c,p){return c=dr(c,p),c.index=0,c.sibling=null,c}function i(c,p,g){return c.index=g,e?(g=c.alternate,g!==null?(g=g.index,g<p?(c.flags|=2,p):g):(c.flags|=2,p)):(c.flags|=1048576,p)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,p,g,v){return p===null||p.tag!==6?(p=rs(g,c.mode,v),p.return=c,p):(p=o(p,g),p.return=c,p)}function s(c,p,g,v){var y=g.type;return y===ln?d(c,p,g.props.children,v,g.key):p!==null&&(p.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Jt&&e0(y)===p.type)?(v=o(p,g.props),v.ref=uo(c,p,g),v.return=c,v):(v=ea(g.type,g.key,g.props,null,c.mode,v),v.ref=uo(c,p,g),v.return=c,v)}function u(c,p,g,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ns(g,c.mode,v),p.return=c,p):(p=o(p,g.children||[]),p.return=c,p)}function d(c,p,g,v,y){return p===null||p.tag!==7?(p=Ir(g,c.mode,v,y),p.return=c,p):(p=o(p,g),p.return=c,p)}function f(c,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=rs(""+p,c.mode,g),p.return=c,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mi:return g=ea(p.type,p.key,p.props,null,c.mode,g),g.ref=uo(c,null,p),g.return=c,g;case an:return p=ns(p,c.mode,g),p.return=c,p;case Jt:var v=p._init;return f(c,v(p._payload),g)}if(go(p)||io(p))return p=Ir(p,c.mode,g,null),p.return=c,p;Di(c,p)}return null}function m(c,p,g,v){var y=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return y!==null?null:l(c,p,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:return g.key===y?s(c,p,g,v):null;case an:return g.key===y?u(c,p,g,v):null;case Jt:return y=g._init,m(c,p,y(g._payload),v)}if(go(g)||io(g))return y!==null?null:d(c,p,g,v,null);Di(c,g)}return null}function h(c,p,g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return c=c.get(g)||null,l(p,c,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mi:return c=c.get(v.key===null?g:v.key)||null,s(p,c,v,y);case an:return c=c.get(v.key===null?g:v.key)||null,u(p,c,v,y);case Jt:var k=v._init;return h(c,p,g,k(v._payload),y)}if(go(v)||io(v))return c=c.get(g)||null,d(p,c,v,y,null);Di(p,v)}return null}function x(c,p,g,v){for(var y=null,k=null,z=p,_=p=0,T=null;z!==null&&_<g.length;_++){z.index>_?(T=z,z=null):T=z.sibling;var C=m(c,z,g[_],v);if(C===null){z===null&&(z=T);break}e&&z&&C.alternate===null&&t(c,z),p=i(C,p,_),k===null?y=C:k.sibling=C,k=C,z=T}if(_===g.length)return r(c,z),se&&Rr(c,_),y;if(z===null){for(;_<g.length;_++)z=f(c,g[_],v),z!==null&&(p=i(z,p,_),k===null?y=z:k.sibling=z,k=z);return se&&Rr(c,_),y}for(z=n(c,z);_<g.length;_++)T=h(z,c,_,g[_],v),T!==null&&(e&&T.alternate!==null&&z.delete(T.key===null?_:T.key),p=i(T,p,_),k===null?y=T:k.sibling=T,k=T);return e&&z.forEach(function(O){return t(c,O)}),se&&Rr(c,_),y}function b(c,p,g,v){var y=io(g);if(typeof y!="function")throw Error(M(150));if(g=y.call(g),g==null)throw Error(M(151));for(var k=y=null,z=p,_=p=0,T=null,C=g.next();z!==null&&!C.done;_++,C=g.next()){z.index>_?(T=z,z=null):T=z.sibling;var O=m(c,z,C.value,v);if(O===null){z===null&&(z=T);break}e&&z&&O.alternate===null&&t(c,z),p=i(O,p,_),k===null?y=O:k.sibling=O,k=O,z=T}if(C.done)return r(c,z),se&&Rr(c,_),y;if(z===null){for(;!C.done;_++,C=g.next())C=f(c,C.value,v),C!==null&&(p=i(C,p,_),k===null?y=C:k.sibling=C,k=C);return se&&Rr(c,_),y}for(z=n(c,z);!C.done;_++,C=g.next())C=h(z,c,_,C.value,v),C!==null&&(e&&C.alternate!==null&&z.delete(C.key===null?_:C.key),p=i(C,p,_),k===null?y=C:k.sibling=C,k=C);return e&&z.forEach(function(D){return t(c,D)}),se&&Rr(c,_),y}function w(c,p,g,v){if(typeof g=="object"&&g!==null&&g.type===ln&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:e:{for(var y=g.key,k=p;k!==null;){if(k.key===y){if(y=g.type,y===ln){if(k.tag===7){r(c,k.sibling),p=o(k,g.props.children),p.return=c,c=p;break e}}else if(k.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Jt&&e0(y)===k.type){r(c,k.sibling),p=o(k,g.props),p.ref=uo(c,k,g),p.return=c,c=p;break e}r(c,k);break}else t(c,k);k=k.sibling}g.type===ln?(p=Ir(g.props.children,c.mode,v,g.key),p.return=c,c=p):(v=ea(g.type,g.key,g.props,null,c.mode,v),v.ref=uo(c,p,g),v.return=c,c=v)}return a(c);case an:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){r(c,p.sibling),p=o(p,g.children||[]),p.return=c,c=p;break e}else{r(c,p);break}else t(c,p);p=p.sibling}p=ns(g,c.mode,v),p.return=c,c=p}return a(c);case Jt:return k=g._init,w(c,p,k(g._payload),v)}if(go(g))return x(c,p,g,v);if(io(g))return b(c,p,g,v);Di(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(r(c,p.sibling),p=o(p,g),p.return=c,c=p):(r(c,p),p=rs(g,c.mode,v),p.return=c,c=p),a(c)):r(c,p)}return w}var Cn=zd(!0),_d=zd(!1),ma=hr(null),ga=null,gn=null,gu=null;function hu(){gu=gn=ga=null}function bu(e){var t=ma.current;le(ma),e._currentValue=t}function Ps(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Sn(e,t){ga=e,gu=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(gu!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(ga===null)throw Error(M(308));gn=e,ga.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Lr=null;function xu(e){Lr===null?Lr=[e]:Lr.push(e)}function Md(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,xu(t)):(r.next=o.next,o.next=r),t.interleaved=r,Gt(e,n)}function Gt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var er=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(j&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Gt(e,r)}return o=n.interleaved,o===null?(t.next=t,xu(n)):(t.next=o.next,o.next=t),n.interleaved=t,Gt(e,r)}function ji(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ou(e,r)}}function t0(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ha(e,t,r,n){var o=e.updateQueue;er=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,d=u=s=null,l=i;do{var m=l.lane,h=l.eventTime;if((n&m)===m){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,b=l;switch(m=t,h=r,b.tag){case 1:if(x=b.payload,typeof x=="function"){f=x.call(h,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,m=typeof x=="function"?x.call(h,f,m):x,m==null)break e;f=de({},f,m);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else h={eventTime:h,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,s=f):d=d.next=h,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Nr|=a,e.lanes=a,e.memoizedState=f}}function r0(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(M(191,o));o.call(n)}}}var Vo={},Ct=hr(Vo),Ao=hr(Vo),No=hr(Vo);function Pr(e){if(e===Vo)throw Error(M(174));return e}function yu(e,t){switch(ie(No,t),ie(Ao,e),ie(Ct,Vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ps(t,e)}le(Ct),ie(Ct,t)}function $n(){le(Ct),le(Ao),le(No)}function $d(e){Pr(No.current);var t=Pr(Ct.current),r=ps(t,e.type);t!==r&&(ie(Ao,e),ie(Ct,r))}function wu(e){Ao.current===e&&(le(Ct),le(Ao))}var ce=hr(0);function ba(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Su(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Qi=Ut.ReactCurrentDispatcher,Kl=Ut.ReactCurrentBatchConfig,Ar=0,fe=null,Se=null,ze=null,xa=!1,ko=!1,Wo=0,Oh=0;function Te(){throw Error(M(321))}function ku(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!bt(e[r],t[r]))return!1;return!0}function zu(e,t,r,n,o,i){if(Ar=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qi.current=e===null||e.memoizedState===null?Ah:Nh,e=r(n,o),ko){i=0;do{if(ko=!1,Wo=0,25<=i)throw Error(M(301));i+=1,ze=Se=null,t.updateQueue=null,Qi.current=Wh,e=r(n,o)}while(ko)}if(Qi.current=va,t=Se!==null&&Se.next!==null,Ar=0,ze=Se=fe=null,xa=!1,t)throw Error(M(300));return e}function _u(){var e=Wo!==0;return Wo=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?fe.memoizedState=ze=e:ze=ze.next=e,ze}function lt(){if(Se===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=ze===null?fe.memoizedState:ze.next;if(t!==null)ze=t,Se=e;else{if(e===null)throw Error(M(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ze===null?fe.memoizedState=ze=e:ze=ze.next=e}return ze}function Do(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=lt(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=Se,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var l=a=null,s=null,u=i;do{var d=u.lane;if((Ar&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=n):s=s.next=f,fe.lanes|=d,Nr|=d}u=u.next}while(u!==null&&u!==i);s===null?a=n:s.next=l,bt(n,t.memoizedState)||(Be=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=s,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,Nr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Jl(e){var t=lt(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);bt(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Rd(){}function Ed(e,t){var r=fe,n=lt(),o=t(),i=!bt(n.memoizedState,o);if(i&&(n.memoizedState=o,Be=!0),n=n.queue,Mu(Pd.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,Bo(9,Ld.bind(null,r,n,o,t),void 0,null),_e===null)throw Error(M(349));(Ar&30)!==0||Td(r,t,o)}return o}function Td(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ld(e,t,r,n){t.value=r,t.getSnapshot=n,Od(t)&&Id(e)}function Pd(e,t,r){return r(function(){Od(t)&&Id(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!bt(e,r)}catch{return!0}}function Id(e){var t=Gt(e,1);t!==null&&ht(t,e,1,-1)}function n0(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t.queue=e,e=e.dispatch=Hh.bind(null,fe,e),[t.memoizedState,e]}function Bo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Fd(){return lt().memoizedState}function qi(e,t,r,n){var o=zt();fe.flags|=e,o.memoizedState=Bo(1|t,r,void 0,n===void 0?null:n)}function Ta(e,t,r,n){var o=lt();n=n===void 0?null:n;var i=void 0;if(Se!==null){var a=Se.memoizedState;if(i=a.destroy,n!==null&&ku(n,a.deps)){o.memoizedState=Bo(t,r,i,n);return}}fe.flags|=e,o.memoizedState=Bo(1|t,r,i,n)}function o0(e,t){return qi(8390656,8,e,t)}function Mu(e,t){return Ta(2048,8,e,t)}function Hd(e,t){return Ta(4,2,e,t)}function Ad(e,t){return Ta(4,4,e,t)}function Nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wd(e,t,r){return r=r!=null?r.concat([e]):null,Ta(4,4,Nd.bind(null,t,e),r)}function Cu(){}function Dd(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ku(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Bd(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ku(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Xd(e,t,r){return(Ar&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=r):(bt(r,t)||(r=j0(),fe.lanes|=r,Nr|=r,e.baseState=!0),t)}function Ih(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=Kl.transition;Kl.transition={};try{e(!1),t()}finally{ee=r,Kl.transition=n}}function Gd(){return lt().memoizedState}function Fh(e,t,r){var n=fr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Yd(e))Ud(t,r);else if(r=Md(e,t,r,n),r!==null){var o=He();ht(r,e,n,o),Vd(r,t,n)}}function Hh(e,t,r){var n=fr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Yd(e))Ud(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,r);if(o.hasEagerState=!0,o.eagerState=l,bt(l,a)){var s=t.interleaved;s===null?(o.next=o,xu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}r=Md(e,t,o,n),r!==null&&(o=He(),ht(r,e,n,o),Vd(r,t,n))}}function Yd(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Ud(e,t){ko=xa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Vd(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ou(e,r)}}var va={readContext:at,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Ah={readContext:at,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:o0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,qi(4194308,4,Nd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return qi(4,2,e,t)},useMemo:function(e,t){var r=zt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=zt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Fh.bind(null,fe,e),[n.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:n0,useDebugValue:Cu,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=n0(!1),t=e[0];return e=Ih.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=fe,o=zt();if(se){if(r===void 0)throw Error(M(407));r=r()}else{if(r=t(),_e===null)throw Error(M(349));(Ar&30)!==0||Td(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,o0(Pd.bind(null,n,i,e),[e]),n.flags|=2048,Bo(9,Ld.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=zt(),t=_e.identifierPrefix;if(se){var r=Wt,n=Nt;r=(n&~(1<<32-gt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Wo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Oh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nh={readContext:at,useCallback:Dd,useContext:at,useEffect:Mu,useImperativeHandle:Wd,useInsertionEffect:Hd,useLayoutEffect:Ad,useMemo:Bd,useReducer:Zl,useRef:Fd,useState:function(){return Zl(Do)},useDebugValue:Cu,useDeferredValue:function(e){var t=lt();return Xd(t,Se.memoizedState,e)},useTransition:function(){var e=Zl(Do)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Rd,useSyncExternalStore:Ed,useId:Gd,unstable_isNewReconciler:!1},Wh={readContext:at,useCallback:Dd,useContext:at,useEffect:Mu,useImperativeHandle:Wd,useInsertionEffect:Hd,useLayoutEffect:Ad,useMemo:Bd,useReducer:Jl,useRef:Fd,useState:function(){return Jl(Do)},useDebugValue:Cu,useDeferredValue:function(e){var t=lt();return Se===null?t.memoizedState=e:Xd(t,Se.memoizedState,e)},useTransition:function(){var e=Jl(Do)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Rd,useSyncExternalStore:Ed,useId:Gd,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Os(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:de({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var La={isMounted:function(e){return(e=e._reactInternals)?Br(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=He(),o=fr(e),i=Dt(n,o);i.payload=t,r!=null&&(i.callback=r),t=ur(e,i,o),t!==null&&(ht(t,e,o,n),ji(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=He(),o=fr(e),i=Dt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=ur(e,i,o),t!==null&&(ht(t,e,o,n),ji(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=He(),n=fr(e),o=Dt(r,n);o.tag=2,t!=null&&(o.callback=t),t=ur(e,o,n),t!==null&&(ht(t,e,n,r),ji(t,e,n))}};function i0(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!Oo(r,n)||!Oo(o,i):!0}function jd(e,t,r){var n=!1,o=mr,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=Ge(t)?Fr:Oe.current,n=t.contextTypes,i=(n=n!=null)?_n(e,o):mr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function a0(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function Is(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},vu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=Ge(t)?Fr:Oe.current,o.context=_n(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Os(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&La.enqueueReplaceState(o,o.state,null),ha(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var r="",n=t;do r+=hg(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function es(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Fs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function Qd(e,t,r){r=Dt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){wa||(wa=!0,Us=n),Fs(e,t)},r}function qd(e,t,r){r=Dt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Fs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Fs(e,t),typeof n!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function l0(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Dh;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=t2.bind(null,e,t,r),t.then(e,e))}function s0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function u0(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Dt(-1,1),t.tag=2,ur(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Bh=Ut.ReactCurrentOwner,Be=!1;function Fe(e,t,r,n){t.child=e===null?_d(t,null,r,n):Cn(t,e.child,r,n)}function c0(e,t,r,n,o){r=r.render;var i=t.ref;return Sn(t,o),n=zu(e,t,r,n,i,o),r=_u(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(se&&r&&du(t),t.flags|=1,Fe(e,t,n,o),t.child)}function f0(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Iu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Kd(e,t,i,n,o)):(e=ea(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Oo,r(a,n)&&e.ref===t.ref)return Yt(e,t,o)}return t.flags|=1,e=dr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Oo(i,n)&&e.ref===t.ref)if(Be=!1,t.pendingProps=n=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Yt(e,t,o)}return Hs(e,t,r,n,o)}function Zd(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(bn,Ve),Ve|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(bn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,ie(bn,Ve),Ve|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,ie(bn,Ve),Ve|=n;return Fe(e,t,o,r),t.child}function Jd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,r,n,o){var i=Ge(r)?Fr:Oe.current;return i=_n(t,i),Sn(t,o),r=zu(e,t,r,n,i,o),n=_u(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(se&&n&&du(t),t.flags|=1,Fe(e,t,r,o),t.child)}function d0(e,t,r,n,o){if(Ge(r)){var i=!0;fa(t)}else i=!1;if(Sn(t,o),t.stateNode===null)Ki(e,t),jd(t,r,n),Is(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ge(r)?Fr:Oe.current,u=_n(t,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||s!==u)&&a0(t,a,n,u),er=!1;var m=t.memoizedState;a.state=m,ha(t,n,a,o),s=t.memoizedState,l!==n||m!==s||Xe.current||er?(typeof d=="function"&&(Os(t,r,d,n),s=t.memoizedState),(l=er||i0(t,r,l,n,m,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),a.props=n,a.state=s,a.context=u,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Cd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:dt(t.type,l),a.props=u,f=t.pendingProps,m=a.context,s=r.contextType,typeof s=="object"&&s!==null?s=at(s):(s=Ge(r)?Fr:Oe.current,s=_n(t,s));var h=r.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==s)&&a0(t,a,n,s),er=!1,m=t.memoizedState,a.state=m,ha(t,n,a,o);var x=t.memoizedState;l!==f||m!==x||Xe.current||er?(typeof h=="function"&&(Os(t,r,h,n),x=t.memoizedState),(u=er||i0(t,r,u,n,m,x,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=s,n=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return As(e,t,r,n,i,o)}function As(e,t,r,n,o,i){Jd(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Kf(t,r,!1),Yt(e,t,i);n=t.stateNode,Bh.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,l,i)):Fe(e,t,l,i),t.memoizedState=n.state,o&&Kf(t,r,!0),t.child}function ep(e){var t=e.stateNode;t.pendingContext?qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qf(e,t.context,!1),yu(e,t.containerInfo)}function p0(e,t,r,n,o){return Mn(),mu(o),t.flags|=256,Fe(e,t,r,n),t.child}var Ns={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function tp(e,t,r){var n=t.pendingProps,o=ce.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(ce,o&1),e===null)return Ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=n.children,e=n.fallback,i?(n=t.mode,i=t.child,a={mode:"hidden",children:a},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ia(a,n,0,null),e=Ir(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ws(r),t.memoizedState=Ns,e):$u(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Xh(e,t,a,n,l,o,r);if(i){i=n.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:n.children};return(a&1)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=dr(o,s),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=dr(l,i):(i=Ir(i,a,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,a=e.child.memoizedState,a=a===null?Ws(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=Ns,n}return i=e.child,e=i.sibling,n=dr(i,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function $u(e,t){return t=Ia({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bi(e,t,r,n){return n!==null&&mu(n),Cn(t,e.child,null,r),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xh(e,t,r,n,o,i,a){if(r)return t.flags&256?(t.flags&=-257,n=es(Error(M(422))),Bi(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Ia({mode:"visible",children:n.children},o,0,null),i=Ir(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,(t.mode&1)!==0&&Cn(t,e.child,null,a),t.child.memoizedState=Ws(a),t.memoizedState=Ns,i);if((t.mode&1)===0)return Bi(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,i=Error(M(419)),n=es(i,n,void 0),Bi(e,t,a,n)}if(l=(a&e.childLanes)!==0,Be||l){if(n=_e,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Gt(e,o),ht(n,e,o,-1))}return Ou(),n=es(Error(M(421))),Bi(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=r2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,je=sr(o.nextSibling),Qe=t,se=!0,mt=null,e!==null&&(rt[nt++]=Nt,rt[nt++]=Wt,rt[nt++]=Hr,Nt=e.id,Wt=e.overflow,Hr=t),t=$u(t,n.children),t.flags|=4096,t)}function m0(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ps(e.return,t,r)}function ts(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function rp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Fe(e,t,n.children,r),n=ce.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&m0(e,r,t);else if(e.tag===19)m0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ie(ce,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&ba(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ts(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ba(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ts(t,!0,r,null,i);break;case"together":ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Nr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,r=dr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=dr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Gh(e,t,r){switch(t.tag){case 3:ep(t),Mn();break;case 5:$d(t);break;case 1:Ge(t.type)&&fa(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;ie(ma,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?tp(e,t,r):(ie(ce,ce.current&1),e=Yt(e,t,r),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return rp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(ce,ce.current),n)break;return null;case 22:case 23:return t.lanes=0,Zd(e,t,r)}return Yt(e,t,r)}var np,Ds,op,ip;np=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ds=function(){};op=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Pr(Ct.current);var i=null;switch(r){case"input":o=us(e,o),n=us(e,n),i=[];break;case"select":o=de({},o,{value:void 0}),n=de({},n,{value:void 0}),i=[];break;case"textarea":o=ds(e,o),n=ds(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ua)}ms(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var s=n[u];if(l=o?.[u],n.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(r||(r={}),r[a]=s[a])}else r||(i||(i=[]),i.push(u,r)),r=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ae("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};ip=function(e,t,r,n){r!==n&&(t.flags|=4)};function co(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Yh(e,t,r){var n=t.pendingProps;switch(pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ge(t.type)&&ca(),Le(t),null;case 3:return n=t.stateNode,$n(),le(Xe),le(Oe),Su(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(Qs(mt),mt=null))),Ds(e,t),Le(t),null;case 5:wu(t);var o=Pr(No.current);if(r=t.type,e!==null&&t.stateNode!=null)op(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(M(166));return Le(t),null}if(e=Pr(Ct.current),Wi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[_t]=t,n[Ho]=i,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(o=0;o<bo.length;o++)ae(bo[o],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":Sf(n,i),ae("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},ae("invalid",n);break;case"textarea":zf(n,i),ae("invalid",n)}ms(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?n.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ni(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ni(n.textContent,l,e),o=["children",""+l]):Co.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ae("scroll",n)}switch(r){case"input":Ci(n),kf(n,i,!0);break;case"textarea":Ci(n),_f(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ua)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=P0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[_t]=t,e[Ho]=n,np(e,t,!1,!1),t.stateNode=e;e:{switch(a=gs(r,n),r){case"dialog":ae("cancel",e),ae("close",e),o=n;break;case"iframe":case"object":case"embed":ae("load",e),o=n;break;case"video":case"audio":for(o=0;o<bo.length;o++)ae(bo[o],e);o=n;break;case"source":ae("error",e),o=n;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=n;break;case"details":ae("toggle",e),o=n;break;case"input":Sf(e,n),o=us(e,n),ae("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=de({},n,{value:void 0}),ae("invalid",e);break;case"textarea":zf(e,n),o=ds(e,n),ae("invalid",e);break;default:o=n}ms(r,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?F0(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&O0(e,s)):i==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&$o(e,s):typeof s=="number"&&$o(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ae("scroll",e):s!=null&&Zs(e,i,s,a))}switch(r){case"input":Ci(e),kf(e,n,!1);break;case"textarea":Ci(e),_f(e);break;case"option":n.value!=null&&e.setAttribute("value",""+pr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?xn(e,!!n.multiple,i,!1):n.defaultValue!=null&&xn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ua)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)ip(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(M(166));if(r=Pr(No.current),Pr(Ct.current),Wi(t)){if(n=t.stateNode,r=t.memoizedProps,n[_t]=t,(i=n.nodeValue!==r)&&(e=Qe,e!==null))switch(e.tag){case 3:Ni(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ni(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[_t]=t,t.stateNode=n}return Le(t),null;case 13:if(le(ce),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&je!==null&&(t.mode&1)!==0&&(t.flags&128)===0)kd(),Mn(),t.flags|=98560,i=!1;else if(i=Wi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[_t]=t}else Mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else mt!==null&&(Qs(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ce.current&1)!==0?ke===0&&(ke=3):Ou())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return $n(),Ds(e,t),e===null&&Io(t.stateNode.containerInfo),Le(t),null;case 10:return bu(t.type._context),Le(t),null;case 17:return Ge(t.type)&&ca(),Le(t),null;case 19:if(le(ce),i=t.memoizedState,i===null)return Le(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)co(i,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ba(e),a!==null){for(t.flags|=128,co(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>En&&(t.flags|=128,n=!0,co(i,!1),t.lanes=4194304)}else{if(!n)if(e=ba(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!se)return Le(t),null}else 2*ve()-i.renderingStartTime>En&&r!==1073741824&&(t.flags|=128,n=!0,co(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,r=ce.current,ie(ce,n?r&1|2:r&1),t):(Le(t),null);case 22:case 23:return Pu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(Ve&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function Uh(e,t){switch(pu(t),t.tag){case 1:return Ge(t.type)&&ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),le(Xe),le(Oe),Su(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return wu(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return $n(),null;case 10:return bu(t.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var Xi=!1,Pe=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,R=null;function hn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){he(e,t,n)}else r.current=null}function Bs(e,t,r){try{r()}catch(n){he(e,t,n)}}var g0=!1;function jh(e,t){if(_s=aa,e=cd(),fu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,l=-1,s=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var h;f!==r||o!==0&&f.nodeType!==3||(l=a+o),f!==i||n!==0&&f.nodeType!==3||(s=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)m=f,f=h;for(;;){if(f===e)break t;if(m===r&&++u===o&&(l=a),m===i&&++d===n&&(s=a),(h=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=h}r=l===-1||s===-1?null:{start:l,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ms={focusedElem:e,selectionRange:r},aa=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,w=x.memoizedState,c=t.stateNode,p=c.getSnapshotBeforeUpdate(t.elementType===t.type?b:dt(t.type,b),w);c.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(v){he(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=g0,g0=!1,x}function zo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Bs(t,r,i)}o=o.next}while(o!==n)}}function Pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Xs(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function ap(e){var t=e.alternate;t!==null&&(e.alternate=null,ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Ho],delete t[Rs],delete t[Eh],delete t[Th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lp(e){return e.tag===5||e.tag===3||e.tag===4}function h0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ua));else if(n!==4&&(e=e.child,e!==null))for(Gs(e,t,r),e=e.sibling;e!==null;)Gs(e,t,r),e=e.sibling}function Ys(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ys(e,t,r),e=e.sibling;e!==null;)Ys(e,t,r),e=e.sibling}var Me=null,pt=!1;function Zt(e,t,r){for(r=r.child;r!==null;)sp(e,t,r),r=r.sibling}function sp(e,t,r){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(_a,r)}catch{}switch(r.tag){case 5:Pe||hn(r,t);case 6:var n=Me,o=pt;Me=null,Zt(e,t,r),Me=n,pt=o,Me!==null&&(pt?(e=Me,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Me.removeChild(r.stateNode));break;case 18:Me!==null&&(pt?(e=Me,r=r.stateNode,e.nodeType===8?jl(e.parentNode,r):e.nodeType===1&&jl(e,r),Lo(e)):jl(Me,r.stateNode));break;case 4:n=Me,o=pt,Me=r.stateNode.containerInfo,pt=!0,Zt(e,t,r),Me=n,pt=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Bs(r,t,a),o=o.next}while(o!==n)}Zt(e,t,r);break;case 1:if(!Pe&&(hn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){he(r,t,l)}Zt(e,t,r);break;case 21:Zt(e,t,r);break;case 22:r.mode&1?(Pe=(n=Pe)||r.memoizedState!==null,Zt(e,t,r),Pe=n):Zt(e,t,r);break;default:Zt(e,t,r)}}function b0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Vh),t.forEach(function(n){var o=n2.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function ft(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,pt=!1;break e;case 3:Me=l.stateNode.containerInfo,pt=!0;break e;case 4:Me=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(Me===null)throw Error(M(160));sp(i,a,o),Me=null,pt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)up(t,e),t=t.sibling}function up(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),kt(e),n&4){try{zo(3,e,e.return),Pa(3,e)}catch(b){he(e,e.return,b)}try{zo(5,e,e.return)}catch(b){he(e,e.return,b)}}break;case 1:ft(t,e),kt(e),n&512&&r!==null&&hn(r,r.return);break;case 5:if(ft(t,e),kt(e),n&512&&r!==null&&hn(r,r.return),e.flags&32){var o=e.stateNode;try{$o(o,"")}catch(b){he(e,e.return,b)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&T0(o,i),gs(l,a);var u=gs(l,i);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?F0(o,f):d==="dangerouslySetInnerHTML"?O0(o,f):d==="children"?$o(o,f):Zs(o,d,f,u)}switch(l){case"input":cs(o,i);break;case"textarea":L0(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?xn(o,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?xn(o,!!i.multiple,i.defaultValue,!0):xn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ho]=i}catch(b){he(e,e.return,b)}}break;case 6:if(ft(t,e),kt(e),n&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){he(e,e.return,b)}}break;case 3:if(ft(t,e),kt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Lo(t.containerInfo)}catch(b){he(e,e.return,b)}break;case 4:ft(t,e),kt(e);break;case 13:ft(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Tu=ve())),n&4&&b0(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||d,ft(t,e),Pe=u):ft(t,e),kt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(R=e,d=e.child;d!==null;){for(f=R=d;R!==null;){switch(m=R,h=m.child,m.tag){case 0:case 11:case 14:case 15:zo(4,m,m.return);break;case 1:hn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){he(n,r,b)}}break;case 5:hn(m,m.return);break;case 22:if(m.memoizedState!==null){v0(f);continue}}h!==null?(h.return=m,R=h):v0(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=I0("display",a))}catch(b){he(e,e.return,b)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){he(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ft(t,e),kt(e),n&4&&b0(e);break;case 21:break;default:ft(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(lp(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&($o(o,""),n.flags&=-33);var i=h0(e);Ys(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,l=h0(e);Gs(e,l,a);break;default:throw Error(M(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e,t,r){R=e,cp(e,t,r)}function cp(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||Xi;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Pe;l=Xi;var u=Pe;if(Xi=a,(Pe=s)&&!u)for(R=o;R!==null;)a=R,s=a.child,a.tag===22&&a.memoizedState!==null?y0(o):s!==null?(s.return=a,R=s):y0(o);for(;i!==null;)R=i,cp(i,t,r),i=i.sibling;R=o,Xi=l,Pe=u}x0(e,t,r)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,R=i):x0(e,t,r)}}function x0(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pe||Pa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Pe)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:dt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&r0(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}r0(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Lo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Pe||t.flags&512&&Xs(t)}catch(m){he(t,t.return,m)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function v0(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function y0(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Pa(4,t)}catch(s){he(t,r,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(s){he(t,o,s)}}var i=t.return;try{Xs(t)}catch(s){he(t,i,s)}break;case 5:var a=t.return;try{Xs(t)}catch(s){he(t,a,s)}}}catch(s){he(t,t.return,s)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var qh=Math.ceil,ya=Ut.ReactCurrentDispatcher,Ru=Ut.ReactCurrentOwner,it=Ut.ReactCurrentBatchConfig,j=0,_e=null,we=null,Ce=0,Ve=0,bn=hr(0),ke=0,Xo=null,Nr=0,Oa=0,Eu=0,_o=null,De=null,Tu=0,En=1/0,Ht=null,wa=!1,Us=null,cr=null,Gi=!1,or=null,Sa=0,Mo=0,Vs=null,Zi=-1,Ji=0;function He(){return(j&6)!==0?ve():Zi!==-1?Zi:Zi=ve()}function fr(e){return(e.mode&1)===0?1:(j&2)!==0&&Ce!==0?Ce&-Ce:Ph.transition!==null?(Ji===0&&(Ji=j0()),Ji):(e=ee,e!==0||(e=window.event,e=e===void 0?16:td(e.type)),e)}function ht(e,t,r,n){if(50<Mo)throw Mo=0,Vs=null,Error(M(185));Go(e,r,n),((j&2)===0||e!==_e)&&(e===_e&&((j&2)===0&&(Oa|=r),ke===4&&rr(e,Ce)),Ye(e,n),r===1&&j===0&&(t.mode&1)===0&&(En=ve()+500,Ea&&br()))}function Ye(e,t){var r=e.callbackNode;Ig(e,t);var n=ia(e,e===_e?Ce:0);if(n===0)r!==null&&$f(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&$f(r),t===1)e.tag===0?Lh(w0.bind(null,e)):yd(w0.bind(null,e)),$h(function(){(j&6)===0&&br()}),r=null;else{switch(Q0(n)){case 1:r=nu;break;case 4:r=U0;break;case 16:r=oa;break;case 536870912:r=V0;break;default:r=oa}r=xp(r,fp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function fp(e,t){if(Zi=-1,Ji=0,(j&6)!==0)throw Error(M(327));var r=e.callbackNode;if(kn()&&e.callbackNode!==r)return null;var n=ia(e,e===_e?Ce:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ka(e,n);else{t=n;var o=j;j|=2;var i=pp();(_e!==e||Ce!==t)&&(Ht=null,En=ve()+500,Or(e,t));do try{Jh();break}catch(l){dp(e,l)}while(!0);hu(),ya.current=i,j=o,we!==null?t=0:(_e=null,Ce=0,t=ke)}if(t!==0){if(t===2&&(o=ys(e),o!==0&&(n=o,t=js(e,o))),t===1)throw r=Xo,Or(e,0),rr(e,n),Ye(e,ve()),r;if(t===6)rr(e,n);else{if(o=e.current.alternate,(n&30)===0&&!Kh(o)&&(t=ka(e,n),t===2&&(i=ys(e),i!==0&&(n=i,t=js(e,i))),t===1))throw r=Xo,Or(e,0),rr(e,n),Ye(e,ve()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(M(345));case 2:Er(e,De,Ht);break;case 3:if(rr(e,n),(n&130023424)===n&&(t=Tu+500-ve(),10<t)){if(ia(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$s(Er.bind(null,e,De,Ht),t);break}Er(e,De,Ht);break;case 4:if(rr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-gt(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=ve()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*qh(n/1960))-n,10<n){e.timeoutHandle=$s(Er.bind(null,e,De,Ht),n);break}Er(e,De,Ht);break;case 5:Er(e,De,Ht);break;default:throw Error(M(329))}}}return Ye(e,ve()),e.callbackNode===r?fp.bind(null,e):null}function js(e,t){var r=_o;return e.current.memoizedState.isDehydrated&&(Or(e,t).flags|=256),e=ka(e,t),e!==2&&(t=De,De=r,t!==null&&Qs(t)),e}function Qs(e){De===null?De=e:De.push.apply(De,e)}function Kh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!bt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t){for(t&=~Eu,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-gt(t),n=1<<r;e[r]=-1,t&=~n}}function w0(e){if((j&6)!==0)throw Error(M(327));kn();var t=ia(e,0);if((t&1)===0)return Ye(e,ve()),null;var r=ka(e,t);if(e.tag!==0&&r===2){var n=ys(e);n!==0&&(t=n,r=js(e,n))}if(r===1)throw r=Xo,Or(e,0),rr(e,t),Ye(e,ve()),r;if(r===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Er(e,De,Ht),Ye(e,ve()),null}function Lu(e,t){var r=j;j|=1;try{return e(t)}finally{j=r,j===0&&(En=ve()+500,Ea&&br())}}function Wr(e){or!==null&&or.tag===0&&(j&6)===0&&kn();var t=j;j|=1;var r=it.transition,n=ee;try{if(it.transition=null,ee=1,e)return e()}finally{ee=n,it.transition=r,j=t,(j&6)===0&&br()}}function Pu(){Ve=bn.current,le(bn)}function Or(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ch(r)),we!==null)for(r=we.return;r!==null;){var n=r;switch(pu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ca();break;case 3:$n(),le(Xe),le(Oe),Su();break;case 5:wu(n);break;case 4:$n();break;case 13:le(ce);break;case 19:le(ce);break;case 10:bu(n.type._context);break;case 22:case 23:Pu()}r=r.return}if(_e=e,we=e=dr(e.current,null),Ce=Ve=t,ke=0,Xo=null,Eu=Oa=Nr=0,De=_o=null,Lr!==null){for(t=0;t<Lr.length;t++)if(r=Lr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}Lr=null}return e}function dp(e,t){do{var r=we;try{if(hu(),Qi.current=va,xa){for(var n=fe.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}xa=!1}if(Ar=0,ze=Se=fe=null,ko=!1,Wo=0,Ru.current=null,r===null||r.return===null){ke=1,Xo=t,we=null;break}e:{var i=e,a=r.return,l=r,s=t;if(t=Ce,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=s0(a);if(h!==null){h.flags&=-257,u0(h,a,l,i,t),h.mode&1&&l0(i,u,t),t=h,s=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(s),t.updateQueue=b}else x.add(s);break e}else{if((t&1)===0){l0(i,u,t),Ou();break e}s=Error(M(426))}}else if(se&&l.mode&1){var w=s0(a);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),u0(w,a,l,i,t),mu(Rn(s,l));break e}}i=s=Rn(s,l),ke!==4&&(ke=2),_o===null?_o=[i]:_o.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Qd(i,s,t);t0(i,c);break e;case 1:l=s;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cr===null||!cr.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=qd(i,l,t);t0(i,v);break e}}i=i.return}while(i!==null)}gp(r)}catch(y){t=y,we===r&&r!==null&&(we=r=r.return);continue}break}while(!0)}function pp(){var e=ya.current;return ya.current=va,e===null?va:e}function Ou(){(ke===0||ke===3||ke===2)&&(ke=4),_e===null||(Nr&268435455)===0&&(Oa&268435455)===0||rr(_e,Ce)}function ka(e,t){var r=j;j|=2;var n=pp();(_e!==e||Ce!==t)&&(Ht=null,Or(e,t));do try{Zh();break}catch(o){dp(e,o)}while(!0);if(hu(),j=r,ya.current=n,we!==null)throw Error(M(261));return _e=null,Ce=0,ke}function Zh(){for(;we!==null;)mp(we)}function Jh(){for(;we!==null&&!Mg();)mp(we)}function mp(e){var t=bp(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?gp(e):we=t,Ru.current=null}function gp(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Yh(r,t,Ve),r!==null){we=r;return}}else{if(r=Uh(r,t),r!==null){r.flags&=32767,we=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function Er(e,t,r){var n=ee,o=it.transition;try{it.transition=null,ee=1,e2(e,t,r,n)}finally{it.transition=o,ee=n}return null}function e2(e,t,r,n){do kn();while(or!==null);if((j&6)!==0)throw Error(M(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Fg(e,i),e===_e&&(we=_e=null,Ce=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Gi||(Gi=!0,xp(oa,function(){return kn(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=it.transition,it.transition=null;var a=ee;ee=1;var l=j;j|=4,Ru.current=null,jh(e,r),up(r,e),Sh(Ms),aa=!!_s,Ms=_s=null,e.current=r,Qh(r,e,o),Cg(),j=l,ee=a,it.transition=i}else e.current=r;if(Gi&&(Gi=!1,or=e,Sa=o),i=e.pendingLanes,i===0&&(cr=null),Eg(r.stateNode,n),Ye(e,ve()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(wa)throw wa=!1,e=Us,Us=null,e;return(Sa&1)!==0&&e.tag!==0&&kn(),i=e.pendingLanes,(i&1)!==0?e===Vs?Mo++:(Mo=0,Vs=e):Mo=0,br(),null}function kn(){if(or!==null){var e=Q0(Sa),t=it.transition,r=ee;try{if(it.transition=null,ee=16>e?16:e,or===null)var n=!1;else{if(e=or,or=null,Sa=0,(j&6)!==0)throw Error(M(331));var o=j;for(j|=4,R=e.current;R!==null;){var i=R,a=i.child;if((R.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:zo(8,d,i)}var f=d.child;if(f!==null)f.return=d,R=f;else for(;R!==null;){d=R;var m=d.sibling,h=d.return;if(ap(d),d===u){R=null;break}if(m!==null){m.return=h,R=m;break}R=h}}}var x=i.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}R=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,R=a;else e:for(;R!==null;){if(i=R,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:zo(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,R=c;break e}R=i.return}}var p=e.current;for(R=p;R!==null;){a=R;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,R=g;else e:for(a=p;R!==null;){if(l=R,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Pa(9,l)}}catch(y){he(l,l.return,y)}if(l===a){R=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,R=v;break e}R=l.return}}if(j=o,br(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(_a,e)}catch{}n=!0}return n}finally{ee=r,it.transition=t}}return!1}function S0(e,t,r){t=Rn(r,t),t=Qd(e,t,1),e=ur(e,t,1),t=He(),e!==null&&(Go(e,1,t),Ye(e,t))}function he(e,t,r){if(e.tag===3)S0(e,e,r);else for(;t!==null;){if(t.tag===3){S0(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(cr===null||!cr.has(n))){e=Rn(r,e),e=qd(t,e,1),t=ur(t,e,1),e=He(),t!==null&&(Go(t,1,e),Ye(t,e));break}}t=t.return}}function t2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Ce&r)===r&&(ke===4||ke===3&&(Ce&130023424)===Ce&&500>ve()-Tu?Or(e,0):Eu|=r),Ye(e,t)}function hp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ei,Ei<<=1,(Ei&130023424)===0&&(Ei=4194304)));var r=He();e=Gt(e,t),e!==null&&(Go(e,t,r),Ye(e,r))}function r2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),hp(e,r)}function n2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(t),hp(e,r)}var bp;bp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Be=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Be=!1,Gh(e,t,r);Be=(e.flags&131072)!==0}else Be=!1,se&&(t.flags&1048576)!==0&&wd(t,pa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ki(e,t),e=t.pendingProps;var o=_n(t,Oe.current);Sn(t,r),o=zu(null,t,n,e,o,r);var i=_u();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(n)?(i=!0,fa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,vu(t),o.updater=La,t.stateNode=o,o._reactInternals=t,Is(t,n,e,r),t=As(null,t,n,!0,i,r)):(t.tag=0,se&&i&&du(t),Fe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=i2(n),e=dt(n,e),o){case 0:t=Hs(null,t,n,e,r);break e;case 1:t=d0(null,t,n,e,r);break e;case 11:t=c0(null,t,n,e,r);break e;case 14:t=f0(null,t,n,dt(n.type,e),r);break e}throw Error(M(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),Hs(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),d0(e,t,n,o,r);case 3:e:{if(ep(t),e===null)throw Error(M(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Cd(e,t),ha(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Rn(Error(M(423)),t),t=p0(e,t,n,r,o);break e}else if(n!==o){o=Rn(Error(M(424)),t),t=p0(e,t,n,r,o);break e}else for(je=sr(t.stateNode.containerInfo.firstChild),Qe=t,se=!0,mt=null,r=_d(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Mn(),n===o){t=Yt(e,t,r);break e}Fe(e,t,n,r)}t=t.child}return t;case 5:return $d(t),e===null&&Ls(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Cs(n,o)?a=null:i!==null&&Cs(n,i)&&(t.flags|=32),Jd(e,t),Fe(e,t,a,r),t.child;case 6:return e===null&&Ls(t),null;case 13:return tp(e,t,r);case 4:return yu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Cn(t,null,n,r):Fe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),c0(e,t,n,o,r);case 7:return Fe(e,t,t.pendingProps,r),t.child;case 8:return Fe(e,t,t.pendingProps.children,r),t.child;case 12:return Fe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ie(ma,n._currentValue),n._currentValue=a,i!==null)if(bt(i.value,a)){if(i.children===o.children&&!Xe.current){t=Yt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===n){if(i.tag===1){s=Dt(-1,r&-r),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),Ps(i.return,r,t),l.lanes|=r;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(M(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Ps(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Fe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Sn(t,r),o=at(o),n=n(o),t.flags|=1,Fe(e,t,n,r),t.child;case 14:return n=t.type,o=dt(n,t.pendingProps),o=dt(n.type,o),f0(e,t,n,o,r);case 15:return Kd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:dt(n,o),Ki(e,t),t.tag=1,Ge(n)?(e=!0,fa(t)):e=!1,Sn(t,r),jd(t,n,o),Is(t,n,o,r),As(null,t,n,!0,e,r);case 19:return rp(e,t,r);case 22:return Zd(e,t,r)}throw Error(M(156,t.tag))};function xp(e,t){return Y0(e,t)}function o2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,r,n){return new o2(e,t,r,n)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i2(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eu)return 11;if(e===tu)return 14}return 2}function dr(e,t){var r=e.alternate;return r===null?(r=ot(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ea(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")Iu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ln:return Ir(r.children,o,i,t);case Js:a=8,o|=8;break;case is:return e=ot(12,r,t,o|2),e.elementType=is,e.lanes=i,e;case as:return e=ot(13,r,t,o),e.elementType=as,e.lanes=i,e;case ls:return e=ot(19,r,t,o),e.elementType=ls,e.lanes=i,e;case $0:return Ia(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M0:a=10;break e;case C0:a=9;break e;case eu:a=11;break e;case tu:a=14;break e;case Jt:a=16,n=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ot(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Ir(e,t,r,n){return e=ot(7,e,n,t),e.lanes=r,e}function Ia(e,t,r,n){return e=ot(22,e,n,t),e.elementType=$0,e.lanes=r,e.stateNode={isHidden:!1},e}function rs(e,t,r){return e=ot(6,e,null,t),e.lanes=r,e}function ns(e,t,r){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function a2(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fu(e,t,r,n,o,i,a,l,s){return e=new a2(e,t,r,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(i),e}function l2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function vp(e){if(!e)return mr;e=e._reactInternals;e:{if(Br(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var r=e.type;if(Ge(r))return vd(e,r,t)}return t}function yp(e,t,r,n,o,i,a,l,s){return e=Fu(r,n,!0,e,o,i,a,l,s),e.context=vp(null),r=e.current,n=He(),o=fr(r),i=Dt(n,o),i.callback=t??null,ur(r,i,o),e.current.lanes=o,Go(e,o,n),Ye(e,n),e}function Fa(e,t,r,n){var o=t.current,i=He(),a=fr(o);return r=vp(r),t.context===null?t.context=r:t.pendingContext=r,t=Dt(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ur(o,t,a),e!==null&&(ht(e,o,a,i),ji(e,o,a)),a}function za(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function k0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Hu(e,t){k0(e,t),(e=e.alternate)&&k0(e,t)}function s2(){return null}var wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Au(e){this._internalRoot=e}Ha.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Fa(e,t,null,null)};Ha.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wr(function(){Fa(null,e,null,null)}),t[Xt]=null}};function Ha(e){this._internalRoot=e}Ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=Z0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tr.length&&t!==0&&t<tr[r].priority;r++);tr.splice(r,0,e),r===0&&ed(e)}};function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function z0(){}function u2(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=za(a);i.call(u)}}var a=yp(t,n,e,0,null,!1,!1,"",z0);return e._reactRootContainer=a,e[Xt]=a.current,Io(e.nodeType===8?e.parentNode:e),Wr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var u=za(s);l.call(u)}}var s=Fu(e,0,!1,null,null,!1,!1,"",z0);return e._reactRootContainer=s,e[Xt]=s.current,Io(e.nodeType===8?e.parentNode:e),Wr(function(){Fa(t,s,r,n)}),s}function Na(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=za(a);l.call(s)}}Fa(t,a,e,o)}else a=u2(r,t,e,o,n);return za(a)}q0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ho(t.pendingLanes);r!==0&&(ou(t,r|1),Ye(t,ve()),(j&6)===0&&(En=ve()+500,br()))}break;case 13:Wr(function(){var n=Gt(e,1);if(n!==null){var o=He();ht(n,e,1,o)}}),Hu(e,1)}};iu=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var r=He();ht(t,e,134217728,r)}Hu(e,134217728)}};K0=function(e){if(e.tag===13){var t=fr(e),r=Gt(e,t);if(r!==null){var n=He();ht(r,e,t,n)}Hu(e,t)}};Z0=function(){return ee};J0=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};bs=function(e,t,r){switch(t){case"input":if(cs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ra(n);if(!o)throw Error(M(90));E0(n),cs(n,o)}}}break;case"textarea":L0(e,r);break;case"select":t=r.value,t!=null&&xn(e,!!r.multiple,t,!1)}};N0=Lu;W0=Wr;var c2={usingClientEntryPoint:!1,Events:[Uo,fn,Ra,H0,A0,Lu]},fo={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f2={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=X0(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||s2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(po=__REACT_DEVTOOLS_GLOBAL_HOOK__,!po.isDisabled&&po.supportsFiber))try{_a=po.inject(f2),Mt=po}catch{}var po;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;Ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(t))throw Error(M(200));return l2(e,t,null,r)};Ze.createRoot=function(e,t){if(!Nu(e))throw Error(M(299));var r=!1,n="",o=wp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Fu(e,1,!1,null,null,r,!1,n,o),e[Xt]=t.current,Io(e.nodeType===8?e.parentNode:e),new Au(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=X0(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Wr(e)};Ze.hydrate=function(e,t,r){if(!Aa(t))throw Error(M(200));return Na(null,e,t,!0,r)};Ze.hydrateRoot=function(e,t,r){if(!Nu(e))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=wp;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=yp(t,null,e,1,r??null,o,!1,i,a),e[Xt]=t.current,Io(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ha(t)};Ze.render=function(e,t,r){if(!Aa(t))throw Error(M(200));return Na(null,e,t,!1,r)};Ze.unmountComponentAtNode=function(e){if(!Aa(e))throw Error(M(40));return e._reactRootContainer?(Wr(function(){Na(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Lu;Ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Aa(r))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Na(e,t,r,!1,n)};Ze.version="18.3.1-next-f1338f8080-20240426"});var Wa=Ft((dx,zp)=>{"use strict";function kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kp)}catch(e){console.error(e)}}kp(),zp.exports=Sp()});var Mp=Ft(Wu=>{"use strict";var _p=Wa();Wu.createRoot=_p.createRoot,Wu.hydrateRoot=_p.hydrateRoot;var px});var k1=Ft(gl=>{"use strict";var zb=rn(),_b=Symbol.for("react.element"),Mb=Symbol.for("react.fragment"),Cb=Object.prototype.hasOwnProperty,$b=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rb={key:!0,ref:!0,__self:!0,__source:!0};function S1(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Cb.call(t,n)&&!Rb.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:_b,type:e,key:i,ref:a,props:o,_owner:$b.current}}gl.Fragment=Mb;gl.jsx=S1;gl.jsxs=S1});var Kr=Ft((Ov,z1)=>{"use strict";z1.exports=k1()});var wl=et(rn(),1),W1=et(Mp(),1),Dc=et(Wa(),1);var q=et(rn(),1),M1=et(Wa(),1);var Cp=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,$p=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`;var Rp=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,Ep=`
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
`;var Du=`#version 300 es
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

${Cp}
${$p}
${Ep}

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

  ${Rp}

  fragColor = vec4(color, opacity);
}
`;var Da=`#version 300 es
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
}`,Ba=Du;function Pn(e,t,r){let n=e.createShader(t);if(!n)throw new Error("metal-fx: gl.createShader returned null");if(e.shaderSource(n,r),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){let o=e.getShaderInfoLog(n);throw e.deleteShader(n),new Error(`metal-fx: shader compile failed: ${o??"(no info log)"}`)}return n}function Xa(e,t,r){let n=e.createProgram();if(!n)throw new Error("metal-fx: gl.createProgram returned null");if(e.attachShader(n,t),e.attachShader(n,r),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){let o=e.getProgramInfoLog(n);throw e.deleteProgram(n),new Error(`metal-fx: program link failed: ${o??"(no info log)"}`)}return n}function Xr(e){let t=e.replace("#","");(t.length===3||t.length===4)&&(t=t.split("").map(n=>n+n).join(""));let r=t.length>=8?parseInt(t.slice(6,8),16)/255:1;return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255,r]}function Ga(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),o=Math.min(e,t,r),i=n-o,a=0,l=n===0?0:i/n;return i!==0&&(n===e?a=((t-r)/i+6)%6:n===t?a=(r-e)/i+2:a=(e-t)/i+4,a/=6),[a,l,n]}function Ya(e,t,r){let n=Math.floor(e*6),o=e*6-n,i=r*(1-t),a=r*(1-o*t),l=r*(1-(1-o)*t),s=0,u=0,d=0;switch(n%6){case 0:s=r,u=l,d=i;break;case 1:s=a,u=r,d=i;break;case 2:s=i,u=r,d=l;break;case 3:s=i,u=a,d=r;break;case 4:s=l,u=i,d=r;break;case 5:s=r,u=i,d=a;break}return[Math.round(s*255),Math.round(u*255),Math.round(d*255)]}var d2=0;var p2=1;var On={colorBack:"#00000000",speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:d2,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:p2},m2={name:"chromatic",modes:{dark:{...On,colorTint:"#88ccff2e",shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...On,colorTint:"#66b0ff99",shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},g2={name:"silver",modes:{dark:{...On,colorTint:"#ffffff66",shaderOpacity:.88},light:{...On,colorTint:"#ffffff40",shaderOpacity:1}}},h2={name:"gold",modes:{dark:{...On,colorTint:"#ffcc55cc",speed:.85,shaderOpacity:.92},light:{...On,colorTint:"#f7d488aa",shaderOpacity:1}}},Ua={chromatic:m2,silver:g2,gold:h2};var Fn=140,Hn=40,Gu=1.6,Yu=1.3,S=null,In=null;function Uu(){if(In!==null)return In;if(typeof document>"u")return In=!1;try{let t=document.createElement("canvas").getContext("webgl2");In=!!t,t?.getExtension("WEBGL_lose_context")?.loseContext()}catch{In=!1}return In}var Lp=null;function Vu(e){Lp=e}var b2=["u_resolution","u_time","u_pixelRatio","u_colorBack","u_colorTint","u_repetition","u_softness","u_shiftRed","u_shiftBlue","u_distortion","u_contour","u_angle","u_shape","u_isImage","u_image","u_originX","u_originY","u_worldWidth","u_worldHeight","u_fit","u_scale","u_rotation","u_offsetX","u_offsetY","u_imageAspectRatio"];function Tp(e){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);let t=Pn(e,e.VERTEX_SHADER,Da),r=Pn(e,e.FRAGMENT_SHADER,Ba),n=Xa(e,t,r);e.useProgram(n);let o=e.createBuffer();if(!o)throw new Error("metal-fx: gl.createBuffer returned null");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let i=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let a={};for(let s of b2)a[s]=e.getUniformLocation(n,s);let l=e.createTexture();return l&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a.u_image&&e.uniform1i(a.u_image,0)),{program:n,buffer:o,uniforms:a,dummyTexture:l}}var Bu=null;function ju(){if(S)return S;let e=Math.min(2,typeof window<"u"&&window.devicePixelRatio||1),t=Math.round(96*e),r=typeof OffscreenCanvas<"u",n,o;if(r)n=new OffscreenCanvas(t,t),o=n.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});else{let f=document.createElement("canvas");f.width=t,f.height=t,o=f.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,preserveDrawingBuffer:!0}),n=f}if(!o)throw new Error("metal-fx: WebGL2 not supported");let{program:i,buffer:a,uniforms:l,dummyTexture:s}=Tp(o),u=f=>{f.preventDefault(),S&&(S.contextLost=!0)},d=()=>{if(!S)return;let f=Tp(S.gl);S.program=f.program,S.buffer=f.buffer,S.uniforms=f.uniforms,S.dummyTexture=f.dummyTexture,S.presetDirty=!0,S.contextLost=!1,Lp?.()};return n.addEventListener("webglcontextlost",u,!1),n.addEventListener("webglcontextrestored",d,!1),Bu=()=>{n.removeEventListener("webglcontextlost",u,!1),n.removeEventListener("webglcontextrestored",d,!1)},S={glCanvas:n,gl:o,program:i,buffer:a,uniforms:l,dummyTexture:s,preset:Ua.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:r,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:e,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(t*t*4),glowPixelsW:t,glowPixelsH:t},S}function Qu(){if(!S)return;let{gl:e,program:t,buffer:r,frameBitmap:n,dummyTexture:o}=S;Bu?.(),Bu=null;try{n?.close(),e.deleteBuffer(r),e.deleteProgram(t),o&&e.deleteTexture(o),e.getExtension("WEBGL_lose_context")?.loseContext()}catch{}S=null}var x2=Da.replace("layout(location = 0)",`uniform vec2 u_ctCrop;
out vec2 v_ctLocal;
layout(location = 0)`).replace("vec2 uv = gl_Position.xy * .5;",`v_ctLocal=a_position.xy*.5+.5;
  vec2 uv=a_position.xy*.5*u_ctCrop;`),v2=Ba.replace(/void\s+main\s*\(\s*\)/,"void ctMaterial()")+`
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
}`,$t=new Map,ja="";function y2(e,t,r,n,o){let i=[],l=1/o;r=Math.max(0,Math.min(r,e/2,t/2));let s=(u,d,f)=>{let m=Math.max(0,r-f),h=u===0||u===1?e-f-m:f+m,x=u===0||u===3?f+m:t-f-m;i.push((h+m*Math.cos(d))/e*2-1,(x+m*Math.sin(d))/t*2-1)};for(let u=0;u<4;u++)for(let d=0;d<=16;d++){let f=(u-1+d/16)*Math.PI/2;s(u,f,-l),s(u,f,n+l)}return i.push(...i.slice(0,4)),new Float32Array(i)}function Pp(e){let t=Pn(e,e.VERTEX_SHADER,x2),r=Pn(e,e.FRAGMENT_SHADER,v2),n=Xa(e,t,r);e.deleteShader(t),e.deleteShader(r),e.useProgram(n);let o=e.createBuffer();if(!o)throw Error("Direct ring buffer unavailable");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let i=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let a={};for(let s=0,u=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);s<u;s++){let d=e.getActiveUniform(n,s).name;a[d]=e.getUniformLocation(n,d)}let l=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.uniform1i(a.u_image,0),e.uniform1i(a.u_isImage,0),e.disable(e.BLEND),e.clearColor(0,0,0,0),{program:n,buffer:o,texture:l,uniforms:a}}function Op(e){if(e.mask||e.deform||$t.has(e))return;let t=document.createElement("canvas");t.className="ctmb-metal-fx-canvas",t.dataset.ctmbDirect="",t.setAttribute("aria-hidden","true"),t.style.cssText=e.canvas.style.cssText;let r=null;try{if(r=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"low-power"}),!r)throw Error("Direct WebGL2 unavailable");let n=Pp(r),o={canvas:t,gl:r,...n,preset:null,lost:!1,detach:()=>{},sourceOpacity:e.canvas.style.opacity,signature:"",vertices:0,time:0},i=l=>{l.preventDefault(),o.lost=!0,t.hidden=!0,e.canvas.style.opacity=o.sourceOpacity},a=()=>{try{let l=o.preset;Object.assign(o,Pp(o.gl)),o.lost=!1,o.preset=null,o.signature="",jo(e),l&&Qo(e,l,o.time),t.hidden=!1}catch(l){o.lost=!0,ja=String(l)}};t.addEventListener("webglcontextlost",i),t.addEventListener("webglcontextrestored",a),o.detach=()=>{t.removeEventListener("webglcontextlost",i),t.removeEventListener("webglcontextrestored",a)},e.canvas.after(t),$t.set(e,o),jo(e)}catch(n){ja=String(n),r?.getExtension("WEBGL_lose_context")?.loseContext(),t.remove()}}function Ip(e){return!!$t.get(e)&&!$t.get(e).lost}function jo(e){let t=$t.get(e);if(!t||t.lost)return;let r=Math.min(2,window.devicePixelRatio||1),n=e.cssWidth,o=e.cssHeight,i=[n,o,r,e.cornerRadius,e.ringCssPx,e.shaderScale,e.opacityMul].join(",");if(i===t.signature)return;t.signature=i,t.canvas.width=Math.max(1,Math.round(n*r)),t.canvas.height=Math.max(1,Math.round(o*r)),t.gl.viewport(0,0,t.canvas.width,t.canvas.height);let{gl:a,uniforms:l}=t,s=y2(n,o,e.cornerRadius,e.ringCssPx,r);t.vertices=s.length/2,a.bindBuffer(a.ARRAY_BUFFER,t.buffer),a.bufferData(a.ARRAY_BUFFER,s,a.STATIC_DRAW),a.uniform2f(l.u_ctCrop,Math.min(1,n/(Fn*e.shaderScale)),Math.min(1,o/(Hn*e.shaderScale))),a.uniform2f(l.u_ctSize,n,o),a.uniform1f(l.u_ctRadius,e.cornerRadius),a.uniform1f(l.u_ctRing,e.ringCssPx),a.uniform1f(l.u_ctDpr,r),a.uniform2f(l.u_resolution,96*r,96*r),a.uniform1f(l.u_pixelRatio,r),t.preset=null}function Qo(e,t,r){let n=$t.get(e);if(!n||n.lost)return!1;n.time=r;let{gl:o,uniforms:i}=n;if(n.preset!==t){n.preset=t,o.uniform4fv(i.u_colorBack,Xr(t.colorBack)),o.uniform4fv(i.u_colorTint,Xr(t.colorTint));for(let a of["repetition","softness","shiftRed","shiftBlue","distortion","contour","angle","shape","originX","originY","worldWidth","worldHeight","fit","scale","rotation","offsetX","offsetY"])o.uniform1f(i[`u_${a}`],t[a]);o.uniform1f(i.u_imageAspectRatio,1),o.uniform1f(i.u_ctAlpha,e.opacityMul*t.shaderOpacity)}return o.uniform1f(i.u_time,r*t.speed),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_STRIP,0,n.vertices),e.canvas.style.opacity!=="0"&&(e.canvas.style.opacity="0"),!0}function qu(e){let t=$t.get(e);t&&($t.delete(e),t.detach(),e.canvas.style.opacity=t.sourceOpacity,t.canvas.remove(),t.gl.deleteBuffer(t.buffer),t.gl.deleteTexture(t.texture),t.gl.deleteProgram(t.program),t.gl.getExtension("WEBGL_lose_context")?.loseContext())}function Fp(){for(let e of $t.keys())qu(e);ja=""}function Hp(){return{directSurfaces:$t.size,directError:ja}}var Ap=0;function Np(){if(!S)return;let e=performance.now();if(e-Ap<1500)return;Ap=e;let{gl:t,glCanvas:r}=S,n=r.width,o=r.height;(S.glowPixelsW!==n||S.glowPixelsH!==o)&&(S.glowPixelsW=n,S.glowPixelsH=o,S.glowPixels=new Uint8Array(n*o*4)),t.readPixels(0,0,n,o,t.RGBA,t.UNSIGNED_BYTE,S.glowPixels)}var An={bx:0,by:0};function Qa(e,t,r){if(!S)return An.bx=0,An.by=0,An;let{glCanvas:n}=S,o=n.width,i=n.height,a=e.dpr,l=e.cssWidth*a,s=e.cssHeight*a,u=Fn*a,d=Hn*a,f=l*(o/u)/e.shaderScale,m=s*(i/d)/e.shaderScale;f>o&&(f=o),m>i&&(m=i);let h=(o-f)/2,x=(i-m)/2,b=h+t/e.cssWidth*f,w=x+r/e.cssHeight*m;return An.bx=Math.round(b),An.by=Math.round(i-1-w),An}var xt={r:0,g:0,b:0,lum:0,count:0};function Wp(e,t,r,n,o,i){let a=Math.max(1,i|0),l=Math.max(0,n-a),s=Math.min(t,n+a+1),u=Math.max(0,o-a),d=Math.min(r,o+a+1);xt.r=0,xt.g=0,xt.b=0,xt.lum=0,xt.count=0;for(let f=u;f<d;f++){let m=f*t;for(let h=l;h<s;h++){let x=(m+h)*4;xt.r+=e[x],xt.g+=e[x+1],xt.b+=e[x+2],xt.lum+=(.2126*e[x]+.7152*e[x+1]+.0722*e[x+2])/255,xt.count++}}return xt}var pe={r:255,g:255,b:255};function qo(e,t,r,n){if(!S)return 0;let o=Qa(e,t,r),i=Wp(S.glowPixels,S.glowPixelsW,S.glowPixelsH,o.bx,o.by,n);return i.count>0?i.lum/i.count:0}function qa(e,t,r,n){if(!S)return pe.r=255,pe.g=255,pe.b=255,pe;let o=Qa(e,t,r),i=Wp(S.glowPixels,S.glowPixelsW,S.glowPixelsH,o.bx,o.by,n);return i.count===0?(pe.r=255,pe.g=255,pe.b=255,pe):(pe.r=i.r/i.count,pe.g=i.g/i.count,pe.b=i.b/i.count,pe)}function Dp(e,t,r,n){if(!S)return pe.r=255,pe.g=255,pe.b=255,pe;let o=Qa(e,t,r),{glowPixels:i,glowPixelsW:a,glowPixelsH:l}=S,s=Math.max(1,n|0),u=Math.max(0,o.bx-s),d=Math.min(a,o.bx+s+1),f=Math.max(0,o.by-s),m=Math.min(l,o.by+s+1),h=-1;pe.r=255,pe.g=255,pe.b=255;for(let x=f;x<m;x++){let b=x*a;for(let w=u;w<d;w++){let c=(b+w)*4,p=i[c],g=i[c+1],v=i[c+2],y=Math.max(p,g,v),k=Math.min(p,g,v),_=(y>0?(y-k)/y:0)*(.35+.65*(y/255));_>h&&(h=_,pe.r=p,pe.g=g,pe.b=v)}}return pe}var vt={r:255,g:255,b:255,lum:0};function Bp(e,t,r,n){if(vt.r=255,vt.g=255,vt.b=255,vt.lum=0,!S)return vt;let o=Qa(e,t,r),{glowPixels:i,glowPixelsW:a,glowPixelsH:l}=S,s=Math.max(1,n|0),u=Math.max(0,o.bx-s),d=Math.min(a,o.bx+s+1),f=Math.max(0,o.by-s),m=Math.min(l,o.by+s+1);for(let h=f;h<m;h++){let x=h*a;for(let b=u;b<d;b++){let w=(x+b)*4,c=(.2126*i[w]+.7152*i[w+1]+.0722*i[w+2])/255;c>vt.lum&&(vt.lum=c,vt.r=i[w],vt.g=i[w+1],vt.b=i[w+2])}}return vt}var Ku={x:0,y:0};function Vt(e=512){return{xy:new Float32Array(e*2),n:0}}function Rt(e,t,r,n,o,i,a=Vt()){o=Math.max(0,Math.min(o,Math.min(r,n)/2));let l=60+Math.ceil(2*(r+n)/1.5)+8;a.xy.length<l*2&&(a.xy=new Float32Array(l*2));let s=a.xy,u=0,d=(h,x)=>{i?(i(h,x,Ku),s[u*2]=Ku.x,s[u*2+1]=Ku.y):(s[u*2]=h,s[u*2+1]=x),u++},f=(h,x,b,w)=>{let c=Math.hypot(b-h,w-x),p=Math.max(1,Math.ceil(c/1.5));for(let g=0;g<p;g++){let v=g/p;d(h+(b-h)*v,x+(w-x)*v)}},m=(h,x,b,w)=>{for(let c=0;c<=14;c++){let p=b+(w-b)*(c/14);d(h+o*Math.cos(p),x+o*Math.sin(p))}};return f(e+o,t,e+r-o,t),m(e+r-o,t+o,-Math.PI/2,0),f(e+r,t+o,e+r,t+n-o),m(e+r-o,t+n-o,0,Math.PI/2),f(e+r-o,t+n,e+o,t+n),m(e+o,t+n-o,Math.PI/2,Math.PI),f(e,t+n-o,e,t+o),m(e+o,t+o,Math.PI,1.5*Math.PI),a.n=u,a}var Ka=!1;function k2(){S&&S.instances.size>0&&S.pausedAtMs===null&&xr()}function Xp(){!S||S.pausedAtMs!==null||S.contextLost||(document.hidden?el():S.instances.size>0&&xr())}function Gp(){Vu(k2),Ka||(document.addEventListener("visibilitychange",Xp),Ka=!0)}function Yp(){Ka&&document.removeEventListener("visibilitychange",Xp),Ka=!1,el(),Fp(),Qu(),Vu(null),Za=0,oc=0,Nn=1e3/6,Wn=0,Ju=0,ec=0,nc=0}function Up(e){let t=ju(),r=e.hostCanvas.getContext("2d",{alpha:!0});if(!r)throw new Error("metal-fx: canvas 2D context unavailable");let n=e.scale??1,o={canvas:e.hostCanvas,ctx:r,cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius,kind:e.kind,ringCssPx:e.ringCssPx??(e.kind==="circle"?2:1)*n,shaderScale:e.shaderScale??(e.kind==="circle"?Yu:Gu)*n,opacityMul:e.opacityMul??1,glowGain:e.glowGain??1,visible:!0,paused:e.paused??!1,everCopied:!1,frozen:null,dpr:typeof window<"u"&&window.devicePixelRatio||1,scale:n,onAfterFrame:e.onAfterFrame,onComposite:e.onComposite,onFirstCopy:e.onFirstCopy,mask:e.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return rc(o),t.instances.add(o),Op(o),t.rafId===0&&t.pausedAtMs===null&&xr(),o}function Vp(e){if(qu(e),!S)return;S.instances.delete(e);let t=S.glowQueue.indexOf(e);t!==-1&&S.glowQueue.splice(t,1),S.instances.size===0&&(el(),Qu())}function jp(e){S&&(S.glowQueue.includes(e)||S.glowQueue.push(e))}function Qp(e){if(!S)return;let t=S.glowQueue.indexOf(e);t!==-1&&S.glowQueue.splice(t,1)}function Yr(e,t){let r=!1;t.mask!==void 0&&(e.mask=t.mask),t.cssWidth!==void 0&&t.cssWidth!==e.cssWidth&&(e.cssWidth=t.cssWidth,r=!0),t.cssHeight!==void 0&&t.cssHeight!==e.cssHeight&&(e.cssHeight=t.cssHeight,r=!0),t.cornerRadius!==void 0&&(e.cornerRadius=t.cornerRadius),t.scale!==void 0&&(e.scale=t.scale),t.kind!==void 0&&t.kind!==e.kind&&(e.kind=t.kind,t.shaderScale===void 0&&(e.shaderScale=(t.kind==="circle"?Yu:Gu)*e.scale),t.ringCssPx===void 0&&(e.ringCssPx=(t.kind==="circle"?2:1)*e.scale)),t.shaderScale!==void 0&&(e.shaderScale=t.shaderScale),t.ringCssPx!==void 0&&(e.ringCssPx=t.ringCssPx),t.opacityMul!==void 0&&(e.opacityMul=t.opacityMul),t.glowGain!==void 0&&(e.glowGain=t.glowGain),t.paused!==void 0&&t.paused!==e.paused&&(e.paused=t.paused,t.paused?tm(e):e.frozen=null,!t.paused&&S&&S.rafId===0&&S.pausedAtMs===null&&!S.contextLost&&xr()),r&&rc(e),jo(e),S&&Qo(e,S.preset,Wn)}function qp(e,t){e.visible=t,t&&S&&S.rafId===0&&S.pausedAtMs===null&&!S.contextLost&&xr()}function Kp(e){return(typeof window<"u"&&window.devicePixelRatio||1)===e.dpr?!1:(rc(e),rm(e),!0)}var z2=null;function Zp(e,t){let r=ju();r.preset=z2??Ua[e].modes[t],r.presetDirty=!0}function Jp(){!S||S.pausedAtMs!==null||(S.pausedAtMs=performance.now(),el())}function tc(){!S||S.pausedAtMs===null||(S.pausedMs+=performance.now()-S.pausedAtMs,S.pausedAtMs=null,S.instances.size>0&&xr())}var Ko=null;function em(e){Ko=e}function Ja(e,t){!Ko||!S||!e.visible||e.paused||S.glowQueue.includes(e)&&(e.glowFast=!!Ko(e,t))}function rc(e){e.dpr=typeof window<"u"&&window.devicePixelRatio||1;let t=e.overscan,r=Math.max(1,Math.round((e.cssWidth+2*t)*e.dpr)),n=Math.max(1,Math.round((e.cssHeight+2*t)*e.dpr));e.canvas.width!==r&&(e.canvas.width=r),e.canvas.height!==n&&(e.canvas.height=n);let o=e.canvas.style;t>0?(o.left=`${-t}px`,o.top=`${-t}px`,o.width=`calc(100% + ${2*t}px)`,o.height=`calc(100% + ${2*t}px)`,o.borderRadius="0"):o.left!==""&&(o.left="",o.top="",o.width="100%",o.height="100%",o.borderRadius=""),jo(e),S&&Qo(e,S.preset,Wn)}function _2(e){let{ctx:t,dpr:r,canvas:n}=e,o=e.ringCssPx*r,i=n.width,a=n.height,l=Math.max(0,(e.cornerRadius-e.ringCssPx)*r);t.save(),t.globalCompositeOperation="destination-out",t.fillStyle="#000",t.beginPath(),t.roundRect(o,o,i-2*o,a-2*o,l),t.fill(),t.restore()}var M2=Vt();function Gr(e,t,r,n,o,i,a,l){let{xy:s,n:u}=Rt(t,r,n,o,i,a,M2);e.beginPath();for(let d=0;d<u;d++)d===0?e.moveTo(s[0]*l,s[1]*l):e.lineTo(s[d*2]*l,s[d*2+1]*l);e.closePath()}function tm(e){if(!S)return null;let t=S.frameBitmap??S.glCanvas,r=S.glCanvas.width,n=S.glCanvas.height;if(r<1||n<1)return null;let o=e.frozen;o||(o=document.createElement("canvas"),e.frozen=o),(o.width!==r||o.height!==n)&&(o.width=r,o.height=n);let i=o.getContext("2d");return i?(i.clearRect(0,0,r,n),i.drawImage(t,0,0),o):(e.frozen=null,null)}function rm(e){if(!S)return;let t=(e.paused?e.frozen??tm(e):null)??S.frameBitmap??S.glCanvas,r=e.dpr,n=e.canvas.width,o=e.canvas.height;if(n<1||o<1)return;let i=Math.max(1,Math.round(e.cssWidth*r)),a=Math.max(1,Math.round(e.cssHeight*r)),l=e.overscan*r,s=t.width,u=t.height,d=Fn*r,f=Hn*r,m=i*(s/d)/e.shaderScale,h=a*(u/f)/e.shaderScale;m>s&&(m=s),h>u&&(h=u);let x=Math.max(0,(s-m)/2),b=Math.max(0,(u-h)/2),w=e.opacityMul*S.preset.shaderOpacity,c=e.ctx;c.clearRect(0,0,n,o);let p=e.deform;if(e.mask){if(w<1&&(c.globalAlpha=w),c.drawImage(t,x,b,m,h,0,0,n,o),w<1&&(c.globalAlpha=1),e.wantRaw){let g=e.rawCanvas;g||(g=document.createElement("canvas"),e.rawCanvas=g),(g.width!==n||g.height!==o)&&(g.width=n,g.height=o);let v=g.getContext("2d");v&&(v.clearRect(0,0,n,o),v.drawImage(e.canvas,0,0))}c.save(),c.globalCompositeOperation="destination-in",c.fillStyle="#000",e.mask(c,n,o,r),c.restore(),c.globalCompositeOperation="source-over"}else if(!p)w<1&&(c.globalAlpha=w),c.drawImage(t,x,b,m,h,0,0,n,o),w<1&&(c.globalAlpha=1),_2(e);else{let g=e.cssWidth,v=e.cssHeight,y=e.cornerRadius,k=e.ringCssPx,z=e.deformLayers;c.save(),c.translate(l,l);let _=i/m,T=a/h,C=Math.min(s,m*(i+2*l)/i),O=Math.min(u,h*(a+2*l)/a),D=Math.max(0,(s-C)/2),$=Math.max(0,(u-O)/2),P=C*_,V=O*T;if(w<1&&(c.globalAlpha=w),c.drawImage(t,D,$,C,O,i/2-P/2,a/2-V/2,P,V),w<1&&(c.globalAlpha=1),c.globalCompositeOperation="destination-in",Gr(c,0,0,g,v,y,p,r),c.fillStyle="#000",c.fill(),c.globalCompositeOperation="destination-out",Gr(c,k,k,g-2*k,v-2*k,Math.max(0,y-k),p,r),c.fill(),e.wantRing){let B=e.ringCanvas;B||(B=document.createElement("canvas"),e.ringCanvas=B),(B.width!==n||B.height!==o)&&(B.width=n,B.height=o);let L=B.getContext("2d");L&&(L.setTransform(1,0,0,1,0,0),L.globalCompositeOperation="source-over",L.clearRect(0,0,n,o),L.translate(l,l),w<1&&(L.globalAlpha=w),L.drawImage(t,D,$,C,O,i/2-P/2,a/2-V/2,P,V),L.globalAlpha=1,L.globalCompositeOperation="destination-out",Gr(L,k,k,g-2*k,v-2*k,Math.max(0,y-k),p,r),L.fillStyle="#000",L.fill(),L.globalCompositeOperation="source-over",L.setTransform(1,0,0,1,0,0))}if(z?.hairline){let B=z.hairline;c.globalCompositeOperation="destination-over",Gr(c,B.inset,B.inset,g-2*B.inset,v-2*B.inset,Math.max(0,y-B.inset),p,r),c.lineWidth=B.width*r,c.strokeStyle=B.color,c.stroke()}if(z?.fill&&(c.globalCompositeOperation="destination-over",Gr(c,0,0,g,v,y,p,r),c.fillStyle=z.fill,c.fill()),z?.rim){let B=z.rim;c.globalCompositeOperation="source-over",c.save(),Gr(c,0,0,g,v,y,p,r),c.clip();let L=B.inset+B.width/2;Gr(c,L,L,g-2*L,v-2*L,Math.max(0,y-L),p,r),c.lineWidth=B.width*r,c.strokeStyle=B.color,c.stroke(),c.restore()}c.restore(),c.globalCompositeOperation="source-over"}if(e.onComposite?.(),e.onFirstCopy){let g=e.onFirstCopy;e.onFirstCopy=void 0,g()}e.onAfterFrame?.()}function C2(){if(!S)return;let{gl:e,uniforms:t,preset:r,glCanvas:n,dpr:o}=S;t.u_resolution&&e.uniform2f(t.u_resolution,n.width,n.height),t.u_pixelRatio&&e.uniform1f(t.u_pixelRatio,o),t.u_colorBack&&e.uniform4fv(t.u_colorBack,Xr(r.colorBack)),t.u_colorTint&&e.uniform4fv(t.u_colorTint,Xr(r.colorTint)),t.u_repetition&&e.uniform1f(t.u_repetition,r.repetition),t.u_softness&&e.uniform1f(t.u_softness,r.softness),t.u_shiftRed&&e.uniform1f(t.u_shiftRed,r.shiftRed),t.u_shiftBlue&&e.uniform1f(t.u_shiftBlue,r.shiftBlue),t.u_distortion&&e.uniform1f(t.u_distortion,r.distortion),t.u_contour&&e.uniform1f(t.u_contour,r.contour),t.u_angle&&e.uniform1f(t.u_angle,r.angle),t.u_shape&&e.uniform1f(t.u_shape,r.shape),t.u_isImage&&e.uniform1i(t.u_isImage,0),t.u_imageAspectRatio&&e.uniform1f(t.u_imageAspectRatio,1),t.u_originX&&e.uniform1f(t.u_originX,r.originX),t.u_originY&&e.uniform1f(t.u_originY,r.originY),t.u_worldWidth&&e.uniform1f(t.u_worldWidth,r.worldWidth),t.u_worldHeight&&e.uniform1f(t.u_worldHeight,r.worldHeight),t.u_fit&&e.uniform1f(t.u_fit,r.fit),t.u_scale&&e.uniform1f(t.u_scale,r.scale),t.u_rotation&&e.uniform1f(t.u_rotation,r.rotation),t.u_offsetX&&e.uniform1f(t.u_offsetX,r.offsetX),t.u_offsetY&&e.uniform1f(t.u_offsetY,r.offsetY),S.presetDirty=!1}function $2(e){if(!S)return;let{gl:t,uniforms:r,preset:n,glCanvas:o}=S,i=Wn*n.speed;t.viewport(0,0,o.width,o.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),S.presetDirty&&C2(),r.u_time&&t.uniform1f(r.u_time,i),t.drawArrays(t.TRIANGLES,0,6),S.frameCount++}var Za=0,Nn=1e3/6,Wn=0,Ju=0,ec=0,nc=0,nm=1e3/60,Et=null,oc=0;function om(e){Nn!==e&&(Nn=e,Et!==null&&(clearTimeout(Et),Et=null,xr()))}function im(){return{loopScheduled:!!S?.rafId||Et!==null,targetFps:60,auxiliaryFps:1e3/Nn,directFrames:nc,...Hp(),loopCallbacks:oc}}function Zu(){if(!S||S.pausedAtMs!==null||document.hidden)return;let e=Math.max(0,nm-(performance.now()-Za)-3);Et=setTimeout(()=>{Et=null,xr()},e)}function R2(e){if(!S)return;if(S.rafId=0,oc++,S.contextLost){S.rafId=0;return}let t=!1,r=!1;for(let i of S.instances)i.visible&&(!i.paused||!i.everCopied)&&(t=!0),i.visible&&!i.everCopied&&(r=!0);if(!t){S.rafId=0;return}if(e-Za<nm-2){Zu();return}Za=e;let n=(e-S.startMs-S.pausedMs)/1e3;Wn+=Math.max(0,n-Ju)*(Nn>100?.6:1),Ju=n;let o=!1;for(let i of S.instances)i.visible&&(!i.paused||!i.everCopied)&&(o=Qo(i,S.preset,Wn)||o);if(o&&nc++,!r&&e-ec<Nn-3){Zu();return}ec=e,$2(e),Np(),S.useOffscreen&&(S.frameBitmap?.close(),S.frameBitmap=S.glCanvas.transferToImageBitmap());for(let i of S.instances)i.visible&&(i.paused&&i.everCopied||((!Ip(i)||i.onAfterFrame||!i.everCopied)&&rm(i),i.everCopied=!0));if(Ko&&S.glowQueue.length>0&&++S.glowSkip%1===0)for(let i of S.glowQueue)i.visible&&!i.paused&&(i.glowFast=!!Ko(i,e));Zu()}function xr(){!S||S.rafId!==0||Et!==null||document.hidden||S.contextLost||S.pausedAtMs!==null||(S.rafId=requestAnimationFrame(R2))}function el(){Et!==null&&clearTimeout(Et),Et=null,S&&(S.rafId!==0&&cancelAnimationFrame(S.rafId),S.rafId=0)}var tl={linear:e=>e,smoothstep:e=>e*e*(3-2*e)};function Dn(e,t,r,n=tl.linear){return{from:e,to:t,dur:r,ease:n,startMs:-1,val:e,done:!1}}function Bn(e,t){e.startMs=t,e.val=e.from,e.done=!1}function ic(e,t){if(e.done||e.startMs<0)return e.val;let r=Math.min(1,(t-e.startMs)/e.dur);return e.val=e.from+(e.to-e.from)*e.ease(r),r>=1&&(e.done=!0),e.val}var E2=Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:1.35/3,extraFadeR:13/3,extraOpOuter:.85}),E={...E2},am=new Set;function lm(e){return am.add(e),()=>{am.delete(e)}}var T2=Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1}),yt={...T2};function bm(e){Object.assign(yt,e),yt.enabled?km():zm(),!yt.spill&&Lt&&ll(),yt.cursor||Sr(),xc()}var Gn=null,al=null,sm=0;function L2(){let e=window.devicePixelRatio||1;return sm>0?sm/e:1}function xm(e,t){if(!st||!Gn)return;let r=L2(),n=(e-Gn.hotX*r).toFixed(2),o=(t-Gn.hotY*r).toFixed(2);st.style.transform=r===1?`translate3d(${n}px,${o}px,0)`:`translate3d(${n}px,${o}px,0) scale(${r.toFixed(4)})`}var vm=!1,ym=0,rl=0,nl=null,ol={x:0,y:0};var il=null,um=0;function P2(e,t,r,n,o){if(il&&um===r&&il.length===n*o)return il;let i=document.createElement("canvas");i.width=n,i.height=o;let a=i.getContext("2d",{willReadFrequently:!0});if(!a)return null;a.scale(r,r),a.drawImage(e,0,0,t.width,t.height);let l=a.getImageData(0,0,n,o).data,s=new Uint8ClampedArray(n*o);for(let u=0,d=3;u<s.length;u++,d+=4)s[u]=l[d]>=128?255:0;return il=s,um=r,s}function cm(e,t,r,n){let o=e.getImageData(0,0,t,r),i=o.data;for(let a=0,l=0,s=3;a<r;a++)for(let u=0;u<t;u++,l++,s+=4){let d=i[s];if(d===0)continue;let f=n(u,a,l);i[s]=f>=1?d:f<=0?0:d*f}e.putImageData(o,0,0)}function O2(e,t){if(!nl)return 0;let r=-1/0;for(let n=0;n<nl.length;n+=2){let o=nl[n]*e+nl[n+1]*t;o>r&&(r=o)}return r===-1/0?0:r}var ei=0,Yn=!1,jr=0,lc=0,Tt=Number.NaN,yr=Number.NaN,ri=0,ni=0,Ur=0,Vr=0,ue=null,U={d:0,nx:0,ny:0,k:1,left:0,top:0},ac={x:0,y:0},jt={r:255,g:255,b:255},Lt=null,sc="",uc=-1,cc=-1,oi=!1;function wm(){ei++,km()}function Sm(){ei=Math.max(0,ei-1),ei===0&&zm()}var Zo=e=>typeof window.matchMedia=="function"&&window.matchMedia(e).matches;function fm(){if(vm||performance.now()<ym||!Gn||!al||Zo("(prefers-reduced-motion: reduce)")||Zo("(forced-colors: active)")||!Zo("(pointer: fine)")||!Zo("(hover: hover)"))return!1;let e=window.visualViewport;return!(e&&Math.abs(e.scale-1)>.001)}function km(){!yt.enabled||Yn||ei===0||typeof document>"u"||Zo("(pointer: fine)")&&(Yn=!0,document.addEventListener("pointermove",_m,{passive:!0}),document.addEventListener("pointerleave",wr),document.addEventListener("pointercancel",wr),document.addEventListener("keydown",Mm,{passive:!0}),document.addEventListener("visibilitychange",wr),window.addEventListener("blur",wr))}function zm(){Yn&&(Yn=!1,document.removeEventListener("pointermove",_m),document.removeEventListener("pointerleave",wr),document.removeEventListener("pointercancel",wr),document.removeEventListener("keydown",Mm),document.removeEventListener("visibilitychange",wr),window.removeEventListener("blur",wr),jr!==0&&(cancelAnimationFrame(jr),jr=0),ue&&(ue.cursorLight=null,ue=null),Ur=0,Vr=0,Lt&&(Lt.remove(),Lt=null,sc="",uc=-1,cc=-1,oi=!1),Sr(),st&&(st.remove(),st=null))}var fc=!0,bc=!1;function _m(e){fc=e.pointerType==="mouse"||e.pointerType==="",bc=!1,Tt=ri=e.clientX,yr=ni=e.clientY,ii&&st&&(fc&&Cm(Tt,yr)?xm(Tt,yr):Sr()),xc()}function Mm(){bc=!0,Sr()}function wr(){Tt=yr=Number.NaN,xc()}function xc(){!Yn||jr!==0||(lc=performance.now(),jr=requestAnimationFrame($m))}function I2(e,t,r,n,o,i,a){let l=i==="circle"?Math.min(r,n)/2:Math.max(0,Math.min(o,Math.min(r,n)/2)),s=r/2,u=n/2,d=Math.max(0,r/2-l),f=Math.max(0,n/2-l),m=Math.max(-d,Math.min(d,e-s)),h=Math.max(-f,Math.min(f,t-u)),x=e-s-m,b=t-u-h,w=Math.hypot(x,b);if(w>1e-6)return a.x=s+m+x/w*l,a.y=u+h+b/w*l,w-l;let c=e,p=r-e,g=t,v=n-t,y=Math.min(c,p,g,v);return y===c?(a.x=0,a.y=t):y===p?(a.x=r,a.y=t):y===g?(a.x=e,a.y=0):(a.x=e,a.y=n),-y}var st=null,vr=null,dc=null,Ue=null,Jo=null,dm=!1,pm=0,mm=0,gm=0,ii=!1,Xn=!1,pc="",Qt=null,ti="",F2=/^(INPUT|TEXTAREA|SELECT)$/,mc=new WeakMap,hm=0,gc=null;function H2(e){let t=e;for(;t&&t!==document.body;){if(F2.test(t.tagName)||t.isContentEditable)return!0;t=t.parentElement}return!1}function A2(){if(st)return!0;let e=document.createElement("div");e.className="ctmb-metal-fx-cursor",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";let t=document.createElement("canvas");t.style.display="block",e.appendChild(t),document.body.appendChild(e);let r=t.getContext("2d"),n=document.createElement("canvas"),o=n.getContext("2d");return!r||!o?(e.remove(),!1):(st=e,vr=t,dc=r,Ue=n,Jo=o,!0)}function Cm(e,t,r=!1){let n=performance.now();if(!r&&Xn&&n-hm<12)return!0;hm=n;let o=document.elementFromPoint(e,t);if(!o)return hc(),!1;if(o===gc&&Xn)return!0;gc=o;let i=mc.get(o);if(i===void 0){if(i=!H2(o),i){let a=getComputedStyle(o).cursor;i=a==="auto"||a==="default"||a==="none"}mc.set(o,i)}if(!i)return hc(),!1;if(!Xn){let a=document.documentElement;pc=a.style.cursor,a.style.cursor="none",Xn=!0}return o!==Qt&&(Qt&&(Qt.style.cursor=ti,Qt=null,ti=""),getComputedStyle(o).cursor!=="none"&&(Qt=o,ti=o.style.cursor,o.style.cursor="none")),!0}function hc(){Qt&&(Qt.isConnected&&(Qt.style.cursor=ti),Qt=null,ti=""),Xn&&(document.documentElement.style.cursor=pc,Xn=!1,pc=""),gc=null,mc=new WeakMap}function Sr(){hc(),st&&ii&&(st.style.display="none",ii=!1)}function N2(e,t,r){if(!dc||!Jo||!vr||!Ue||!st||!Gn||!al)return;let n=Gn,o=Math.min(3,window.devicePixelRatio||1);if((o!==pm||n.width!==mm||n.height!==gm)&&(pm=o,mm=n.width,gm=n.height,vr.width=Ue.width=Math.ceil(n.width*o),vr.height=Ue.height=Math.ceil(n.height*o),vr.style.width=`${n.width}px`,vr.style.height=`${n.height}px`),!dm&&(Jo=Ue.getContext("2d",{willReadFrequently:!0}),dm=!0,!Jo))return;let i=dc,a=Jo,l=n.width,s=n.height;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,vr.width,vr.height),i.scale(o,o),i.drawImage(al,0,0,l,s);let u=U.left+U.nx*U.k,d=U.top+U.ny*U.k,f=ri-n.hotX+ol.x,m=ni-n.hotY+ol.y,h=u-f,x=d-m,b=Math.hypot(h,x),w=b>.01?h/b:1,c=b>.01?x/b:0,p=O2(w,c)+t.cursorEdge,g=Math.max(0,b-p),v=Math.max(1,t.cursorFalloff),y=1/(1+g/v*(g/v)),k=e.cssWidth/2,z=e.cssHeight/2,_=k-U.nx,T=z-U.ny,C=Math.hypot(_,T)||1,O=e.mask?0:e.ringCssPx*.5+1,D=U.nx+_/C*O,$=U.ny+T/C*O,P=Bp(e,D,$,4),V=P.lum,B=P.r,L=P.g,W=P.b,A=t.cursorStrength*y*r,K=t.cursorDiffuse*y*(.5+.5*Math.min(1,V/.5))*r;if(b>.01&&A+K>.005){let Y=h/b,ne=x/b,ye=Math.atan2(ne,Y),me=Math.max(.1,Math.min(1,t.cursorDepth)),N=ol.x+p*Y,H=ol.y+p*ne,Q=Math.max(1,t.cursorReach);if(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,Ue.width,Ue.height),a.scale(o,o),A>.005){a.save(),a.filter=t.cursorBlur>0?`blur(${t.cursorBlur}px)`:"none";let X=Math.max(1,t.cursorZoom);a.translate(N,H),a.rotate(ye),a.scale(-1,1),a.translate((b-p)*me,0),a.rotate(-ye),a.scale(X,X);let ge=e.overscan,be=U.k,Re=Math.max(1,Math.ceil(A));a.globalAlpha=Math.min(1,A/Re),a.globalCompositeOperation="lighter";let Je=e.mask&&e.rawCanvas?e.rawCanvas:e.canvas;for(let re=0;re<Re;re++)a.drawImage(Je,-(U.nx+ge)*be,-(U.ny+ge)*be,(e.cssWidth+2*ge)*be,(e.cssHeight+2*ge)*be);a.restore();let F=1/o,te=1/Q;cm(a,Ue.width,Ue.height,(re,Ne)=>{let It=-(((re+.5)*F-N)*Y+((Ne+.5)*F-H)*ne);return It<=0?1:1-It*te})}if(K>.005){let X=Math.max(B,L,W)||1,ge=Math.round(B*255/X),be=Math.round(L*255/X),Re=Math.round(W*255/X),Je=Q*1.2,F=a.createLinearGradient(N+.5*Y,H+.5*ne,N-Je*Y,H-Je*ne),te=Math.min(1,K);F.addColorStop(0,`rgba(${ge},${be},${Re},${te.toFixed(3)})`),F.addColorStop(.45,`rgba(${ge},${be},${Re},${(te*.4).toFixed(3)})`),F.addColorStop(1,`rgba(${ge},${be},${Re},0)`),a.globalCompositeOperation="lighter",a.fillStyle=F,a.fillRect(0,0,l,s),a.globalCompositeOperation="source-over"}let Z=P2(al,n,o,Ue.width,Ue.height);Z&&cm(a,Ue.width,Ue.height,(X,ge,be)=>Z[be]===0?0:1),i.globalCompositeOperation="lighter",i.drawImage(Ue,0,0,l,s),i.globalCompositeOperation="source-over"}xm(ri,ni),ii||(st.style.display="",ii=!0)}function W2(){if(Lt)return Lt;let e=document.createElement("div");return e.className="ctmb-metal-fx-cursor-spill",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none",document.body.appendChild(e),Lt=e,e}function ll(){!Lt||!oi||(Lt.style.display="none",Lt.style.opacity="0",oi=!1)}function $m(e){if(jr=0,!Yn)return;let t=performance.now();try{D2(e)}catch(n){vm=!0,Sr(),ll(),ue&&(ue.cursorLight=null,ue=null),typeof console<"u"&&console.warn("metal-fx: cursor light disabled after error",n);return}performance.now()-t>6?++rl>=20&&(rl=0,ym=performance.now()+5e3,Sr()):rl>0&&rl--}function D2(e){let t=yt,r=Math.min(.05,Math.max(.001,(e-lc)/1e3));lc=e;let n=null,o=0,i=0;if(t.enabled&&S&&!Number.isNaN(Tt)){let l=Number.POSITIVE_INFINITY,s=Math.max(1,t.reach),u=t.cursor&&fm()?Math.max(1,t.cursorDistance):0,d=Math.max(s,u);for(let f of S.instances){if(!f.visible||!f.canvas.isConnected)continue;let m=f.canvas.getBoundingClientRect();if(m.width<=0)continue;let h=f.overscan,x=m.width/(f.cssWidth+2*h),b=m.left+h*x,w=m.top+h*x,c=d*x;if(Tt<b-c||Tt>b+f.cssWidth*x+c||yr<w-c||yr>w+f.cssHeight*x+c)continue;let p=(Tt-b)/x,g=(yr-w)/x,v=I2(p,g,f.cssWidth,f.cssHeight,f.cornerRadius,f.kind,ac),y=Math.abs(v);y<=d&&y<l&&(l=y,n=f,U.d=v,U.nx=ac.x,U.ny=ac.y,U.k=x,U.left=b,U.top=w)}if(n){if(l<=s){let f=1-l/s;o=f*f*(3-2*f)}l<=u&&(i=Math.min(1,(1-l/u)*3)),n.mask&&(U.nx=n.cssWidth/2,U.ny=n.cssHeight/2,n.wantRaw=!0)}}let a=1-Math.exp(-(r*1e3)/(Math.max(1,t.fadeMs)/3));if(Ur+=(o-Ur)*a,Vr+=(i-Vr)*a,n&&n!==ue&&(ue&&(ue.cursorLight=null,Ja(ue,e)),ue=n),!n&&Ur<.002&&Vr<.002){Ur=0,Vr=0,ue&&(ue.cursorLight=null,Ja(ue,e),ue=null),ll(),Sr();return}if(ue){if(t.catchLight){let l=ue.cursorLight??(ue.cursorLight={x:0,y:0,w:0});l.x=U.nx,l.y=U.ny,l.w=Ur}else ue.cursorLight&&(ue.cursorLight=null);if(Ja(ue,e),t.cursor&&Vr>.002&&fc&&!bc&&!Number.isNaN(Tt)&&fm()&&A2()&&Cm(Tt,yr)?N2(ue,t,Vr):Sr(),t.spill){let l=W2(),s=qa(ue,U.nx,U.ny,2),u=qo(ue,U.nx,U.ny,3),d=Math.max(s.r,s.g,s.b)||1,f=Ga(s.r*255/d,s.g*255/d,s.b*255/d),[m,h,x]=Ya(f[0],Math.min(1,f[1]*t.spillSaturation),1);jt.r+=(m-jt.r)*.15,jt.g+=(h-jt.g)*.15,jt.b+=(x-jt.b)*.15;let b=Math.round(jt.r/6)*6,w=Math.round(jt.g/6)*6,c=Math.round(jt.b/6)*6,p=`radial-gradient(closest-side, rgba(${b},${w},${c},1) 0%, rgba(${b},${w},${c},0.35) 45%, rgba(${b},${w},${c},0) 100%)`;p!==sc&&(sc=p,l.style.background=p);let g=Math.max(1,t.spillRadius*U.k);g!==uc&&(uc=g,l.style.width=`${(2*g).toFixed(1)}px`,l.style.height=`${(2*g).toFixed(1)}px`),t.spillBlur!==cc&&(cc=t.spillBlur,l.style.filter=t.spillBlur>0?`blur(${t.spillBlur}px)`:"");let v=U.left+U.nx*U.k,y=U.top+U.ny*U.k,k=ri+(v-ri)*t.spillOffset,z=ni+(y-ni)*t.spillOffset;l.style.transform=`translate3d(${(k-g).toFixed(2)}px,${(z-g).toFixed(2)}px,0)`;let _=Math.min(1,Math.max(0,u/.3)),T=1-t.spillLumGain+t.spillLumGain*_,C=U.d<0?t.spillInside:1,O=Math.max(0,Math.min(1,t.spillStrength*Ur*T*C));oi||(l.style.display="",oi=!0),l.style.opacity=O.toFixed(3)}else ll();jr=requestAnimationFrame($m)}}var sl=new Map;function B2(e,t){let r=Math.sqrt(12*e*e/t+1),n=Math.floor(r);n%2===0&&n--;let o=n+2,i=(12*e*e-t*n*n-4*t*n-3*t)/(-4*n-4),a=Math.round(i),l=[];for(let s=0;s<t;s++)l.push(s<a?n:o);return l}function X2(e,t,r,n,o){let i=1/(o+o+1);for(let a=0;a<n;a++){let l=a*r,s=0;for(let u=-o;u<=o;u++)s+=e[l+Math.min(r-1,Math.max(0,u))];for(let u=0;u<r;u++){t[l+u]=s*i;let d=l+Math.max(0,u-o),f=l+Math.min(r-1,u+o+1);s+=e[f]-e[d]}}}function G2(e,t,r,n,o){let i=1/(o+o+1);for(let a=0;a<r;a++){let l=0;for(let s=-o;s<=o;s++)l+=e[Math.min(n-1,Math.max(0,s))*r+a];for(let s=0;s<n;s++){t[s*r+a]=l*i;let u=Math.max(0,s-o)*r+a,d=Math.min(n-1,s+o+1)*r+a;l+=e[d]-e[u]}}}function ai(e,t,r,n){if(n<=.05)return e;let o=new Float32Array(e.length),i=e;for(let a of B2(n,3)){let l=(a-1)/2;X2(i,o,t,r,l),G2(o,i,t,r,l)}return i}function Y2(e,t,r,n,o,i,a){let l=document.createElement("canvas");l.width=r,l.height=n;let s=l.getContext("2d",{willReadFrequently:!0}),u=new Float32Array(r*n);if(!s)return u;s.scale(o,o),s.strokeStyle="#fff",s.lineCap="round",s.lineJoin="round",s.lineWidth=t,s.beginPath(),s.moveTo(i-e,a),s.lineTo(i+e,a),s.stroke();let d=s.getImageData(0,0,r,n).data;for(let f=0,m=3;f<u.length;f++,m+=4)u[f]=d[m]/255;return u}function Rm(e,t,r,n,o){let i=0;for(let b of e)i=Math.max(i,(b.stroke/2+3*b.blur)*r);let a=Math.ceil(i)+1,l=2*t+2*a,s=2*a,u=Math.ceil(l*n),d=Math.ceil(s*n),f=new Float32Array(u*d);for(let b of e){let w=Y2(t,b.stroke*r,u,d,n,a,a);w=ai(w,u,d,b.blur*r*n);let c=b.opacity;for(let p=0;p<f.length;p++){let g=w[p]*c;f[p]=f[p]+g*(1-f[p])}}if(o>0){let b=a*n,w=a*n,c=o*r*n;for(let p=0;p<d;p++)for(let g=0;g<u;g++){let v=Math.hypot(g+.5-b,p+.5-w)/c,y;v<=.3?y=1:v<=.65?y=1-(v-.3)/.35*.75:v<1?y=.25*(1-(v-.65)/.35):y=0,f[p*u+g]*=y}}let m=document.createElement("canvas");m.width=u,m.height=d;let h=m.getContext("2d"),x=new Uint8ClampedArray(u*d);for(let b=0;b<f.length;b++)x[b]=Math.round(Math.min(1,f[b])*255);if(h){let b=h.createImageData(u,d),w=b.data;for(let c=0,p=0;c<f.length;c++,p+=4)w[p]=255,w[p+1]=255,w[p+2]=255,w[p+3]=x[c];h.putImageData(b,0,0)}return{canvas:m,alpha:x,w:l,h:s,ax:a,ay:a}}function Em(){return[E.haloStrokeXl,E.haloStrokeLg,E.haloStrokeMd,E.haloStrokeSm,E.haloBlurXl,E.haloBlurLg,E.haloBlurMd,E.haloBlurSm,E.haloOpXl,E.haloOpLg,E.haloOpMd,E.haloOpSm,E.extraStrokeOuter,E.extraStrokeCore,E.extraBlurOuter,E.extraBlurCore,E.extraFadeR,E.extraOpOuter].join(",")}function Tm(e,t,r){let n=`h|${e.toFixed(2)}|${t}|${r}|${Em()}`,o=sl.get(n);return o||(o=Rm([{stroke:E.haloStrokeXl,blur:E.haloBlurXl,opacity:E.haloOpXl},{stroke:E.haloStrokeLg,blur:E.haloBlurLg,opacity:E.haloOpLg},{stroke:E.haloStrokeMd,blur:E.haloBlurMd,opacity:E.haloOpMd},{stroke:E.haloStrokeSm,blur:E.haloBlurSm,opacity:E.haloOpSm}],e,t,r,0),sl.set(n,o)),o}function Lm(e,t,r){let n=`e|${e.toFixed(2)}|${t}|${r}|${Em()}`,o=sl.get(n);return o||(o=Rm([{stroke:E.extraStrokeOuter,blur:E.extraBlurOuter,opacity:E.extraOpOuter},{stroke:E.extraStrokeCore,blur:E.extraBlurCore,opacity:1}],e,t,r,E.extraFadeR),sl.set(n,o)),o}function vc(e,t,r,n,o){let i=t<<16|r<<8|n;if(o.canvas&&o.tint===i&&o.src===e)return o.canvas;let a=o.canvas,l=o.img;(!a||!l||o.src!==e)&&(a=document.createElement("canvas"),a.width=e.canvas.width,a.height=e.canvas.height,l=a.getContext("2d")?.createImageData(a.width,a.height)??null);let s=a.getContext("2d");if(s&&l){let u=l.data,d=e.alpha;for(let f=0,m=0;f<d.length;f++,m+=4)u[m]=t,u[m+1]=r,u[m+2]=n,u[m+3]=d[f];s.putImageData(l,0,0)}return o.canvas=a,o.img=l,o.tint=i,o.src=e,a}function ul(e,t,r){let n=Math.max(0,Math.min(r,Math.min(e,t)/2));return 2*Math.max(0,e-2*n)+2*Math.max(0,t-2*n)+2*Math.PI*n}function li(e,t,r,n){return n==="circle"?2*Math.PI*Math.max(0,Math.min(r,Math.min(e,t)/2)):ul(e,t,r)}function Un(e,t,r,n,o,i,a,l){let s=l||{x:0,y:0},u=Math.max(0,Math.min(n,Math.min(t,r)/2));if(a==="circle"){let c=2*Math.PI*u;if(c<=1e-4)return s.x=t*.5,s.y=r*.5,s;e=(e%c+c)%c;let p=-Math.PI/2+e/c*Math.PI*2,g=Math.max(0,u-o+i);return s.x=t*.5+g*Math.cos(p),s.y=r*.5+g*Math.sin(p),s}let d=Math.max(0,t-2*u),f=Math.max(0,r-2*u),m=Math.PI*u/2,h=2*(d+f)+4*m;e=(e%h+h)%h;let x=Math.max(0,u-o+i),b=e;if(b<d)return s.x=u+b,s.y=o-i,s;if(b-=d,b<m){let c=-Math.PI/2+(m>0?b/m:0)*(Math.PI/2);return s.x=t-u+x*Math.cos(c),s.y=u+x*Math.sin(c),s}if(b-=m,b<f)return s.x=t-o+i,s.y=u+b,s;if(b-=f,b<m){let c=(m>0?b/m:0)*(Math.PI/2);return s.x=t-u+x*Math.cos(c),s.y=r-u+x*Math.sin(c),s}if(b-=m,b<d)return s.x=t-u-b,s.y=r-o+i,s;if(b-=d,b<m){let c=Math.PI/2+(m>0?b/m:0)*(Math.PI/2);return s.x=u+x*Math.cos(c),s.y=r-u+x*Math.sin(c),s}if(b-=m,b<f)return s.x=o-i,s.y=r-u-b,s;b-=f;let w=Math.PI+(m>0?b/m:0)*(Math.PI/2);return s.x=u+x*Math.cos(w),s.y=u+x*Math.sin(w),s}function Om(e,t,r,n,o,i){let a=Math.max(0,Math.min(o,Math.min(r,n)/2));if(i==="circle"){let y=2*Math.PI*a;return y<=1e-4?0:((Math.atan2(t-n/2,e-r/2)+Math.PI/2)/(2*Math.PI)*y%y+y)%y}let l=Math.max(0,r-2*a),s=Math.max(0,n-2*a),u=Math.PI*a/2,d=Math.PI/2,f=l,m=f+u,h=m+s,x=h+u,b=x+l,w=b+u,c=w+s,p=e>=a&&e<=r-a,g=t>=a&&t<=n-a;if(p&&g){let y=e,k=r-e,z=t,_=n-t,T=Math.min(y,k,z,_);return T===z?e-a:T===k?m+(t-a):T===_?x+(r-a-e):w+(n-a-t)}if(p)return t<n/2?e-a:x+(r-a-e);if(g)return e>r/2?m+(t-a):w+(n-a-t);if(e>r/2&&t<n/2){let y=Math.atan2(t-a,e-(r-a));return f+(y+d)/d*u}if(e>r/2){let y=Math.atan2(t-(n-a),e-(r-a));return h+y/d*u}if(t>n/2){let y=Math.atan2(t-(n-a),e-a);return b+(y-d)/d*u}let v=Math.atan2(t-a,e-a);return c+(v+Math.PI)/d*u}var yc={x:0,y:0},wc={x:0,y:0};function Im(e,t,r,n,o,i){return Un(e-.1,t,r,n,o,0,i,yc),Un(e+.1,t,r,n,o,0,i,wc),Math.atan2(wc.y-yc.y,wc.x-yc.x)}function Sc(e,t,r){if(e===t)return r<e?0:1;let n=Math.max(0,Math.min(1,(r-e)/(t-e)));return n*n*(3-2*n)}function Fm(e){if(e.samplePoints&&e.samplePoints.length>0)return e.samplePoints.map((o,i)=>({x:o.x,y:o.y,arc:i}));let t=li(e.width,e.height,e.cornerRadius,e.kind),r=E.inset*(e.scale??1),n=[];for(let o=0;o<16;o++){let i=o/16*t,a=Un(i,e.width,e.height,e.cornerRadius,r,0,e.kind);n.push({x:a.x,y:a.y,arc:i})}return n}var U2=.05,V2=120*(1e3/15),Hm=1e3/15,Am=2e3,kc=400,j2=2.625,Q2=1.008,q2=.31,Dm=140,Bm=40,Xm=20,K2=34,cl=.25,Z2=.01,Nm=.004,J2=.5,eb=3.5,ut={x:0,y:0};function Mc(e,t){let{width:r,height:n}=t,o=t.scale??1,i=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),a=li(r,n,t.cornerRadius,t.kind)/ul(Dm,Bm,Xm),l=Math.max(1,E.haloHalfLen*a),s=Math.max(.6,E.extraHalfLen*a),u=Tm(l,o,i),d=Lm(s,o,i),f=Math.ceil(Math.max(u.ay,d.ay)+E.extraOutward*a*o+2),m=document.createElement("div");m.className="ctmb-metal-fx-glow-svg",m.setAttribute("aria-hidden","true");let h=document.createElement("div");h.className="ctmb-metal-fx-glow-env",h.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 170ms linear";let x=document.createElement("canvas");x.className="ctmb-metal-fx-glow-canvas";let b=r+2*f,w=n+2*f;x.width=Math.ceil(b*i),x.height=Math.ceil(w*i),x.style.cssText=`position:absolute;left:${-f}px;top:${-f}px;width:${b}px;height:${w}px;pointer-events:none`,h.appendChild(x),m.appendChild(h),e.appendChild(m);let c=x.getContext("2d",{willReadFrequently:!!t.maskDataUrl});if(!c)throw new Error("metal-fx: glow canvas 2D context unavailable");let p={wrap:m,env:h,canvas:x,ctx:c,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:f,dpr:i,halo:u,extra:d,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:Vt(),mI:Vt(),maskSum:Number.NaN,maskDeformed:!1,deform:null,width:r,height:n,cornerRadius:t.cornerRadius,kind:t.kind,scale:o,perim:Fm(t),pointMode:!!(t.samplePoints&&t.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:Number.NaN,dY:Number.NaN,dAng:Number.NaN,dEX:Number.NaN,dEY:Number.NaN,dHOp:Number.NaN,dEOp:Number.NaN,dHaloTint:"",dExtraTint:"",dirty:!0,dEnv:-1};if(t.maskDataUrl){let g=new Image;g.onload=()=>{let v=document.createElement("canvas");v.width=x.width,v.height=x.height;let y=v.getContext("2d",{willReadFrequently:!0});if(!y)return;y.scale(i,i),y.drawImage(g,f,f,r,n);let k=y.getImageData(0,0,v.width,v.height).data,z=v.width*v.height,_=new Float32Array(z);for(let $=0,P=3;$<z;$++,P+=4)_[$]=k[P]/255;let T=ai(Float32Array.from(_),v.width,v.height,eb*i),C=0;for(let $=0;$<z;$++)T[$]>C&&(C=T[$]);let O=C>0?J2/C:0,D=new Uint8ClampedArray(z);for(let $=0;$<z;$++)D[$]=Math.round(Math.max(_[$],T[$]*O)*255);p.maskAlpha=D,p.maskReady=!0,p.dirty=!0},g.src=t.maskDataUrl}else _c(p,null);return p}function _c(e,t){if(e.pointMode)return;let{margin:r,width:n,height:o,cornerRadius:i}=e,a=e.kind==="circle"?2:1;Rt(0,0,n,o,i,t,e.mO),Rt(a,a,n-2*a,o-2*a,Math.max(0,i-a),t,e.mI);let l=new Path2D;zc(l,e.mO,r);let s=new Path2D;zc(s,e.mO,r),zc(s,e.mI,r);let u=new Path2D;u.rect(0,0,n+2*r,o+2*r),u.addPath(l),e.surroundPath=u,e.bandPath=s,e.maskReady=!0}function zc(e,t,r){let n=t.xy;for(let o=0;o<t.n;o++){let i=n[o*2]+r,a=n[o*2+1]+r;o===0?e.moveTo(i,a):e.lineTo(i,a)}e.closePath()}function tb(e,t){if(!e)return 0;Rt(0,0,t.width,t.height,t.cornerRadius,e,t.mO);let r=0,n=t.mO.xy;for(let o=0;o<t.mO.n;o+=4)r+=n[o*2]*1.37+n[o*2+1];return r}function Gm(e,t){if(e.deform=t,!e.pointMode)if(t){let r=tb(t,e);r!==e.maskSum&&(e.maskSum=r,_c(e,t),e.maskDeformed=!0,e.dirty=!0)}else e.maskDeformed&&(e.maskSum=Number.NaN,_c(e,null),e.maskDeformed=!1,e.dirty=!0)}function Ym(e,t,r,n,o="dark"){let{width:i,height:a,cornerRadius:l,perim:s}=e;if(s.length===0)return!1;let u=2,d=-1,f=e.currentIdx,m=0;for(let F=0;F<s.length;F++){let te=s[F],re=qo(t,te.x,te.y,u);re>d&&(d=re,f=F),F===e.currentIdx&&(m=re)}let h=e.appearedAt>0&&r-e.appearedAt<E.minDwellMs,x=E.baseOp+(E.peakOp-E.baseOp)*Sc(E.lumLo,E.lumHi,m),b=!h&&d-m>U2,w=t.cursorLight,c=yt.enabled&&yt.catchLight&&!e.pointMode&&!!w&&w.w>.02,p=li(i,a,l,e.kind);c&&(e.cursorTargetArc=Om(w.x,w.y,i,a,l,e.kind));let g=c?Math.min(1,E.peakOp*yt.catchGain*w.w):0,v=e.lastTickMs>0?Math.min(200,Math.max(.5,r-e.lastTickMs)):Hm;e.lastTickMs=r,e.envClock+=Math.min(v,K2);let y=F=>1-Math.pow(1-F,v/Hm),k=Math.max(1,E.relocFadeMs),z=Math.max(1,E.relocFadeOutMs),_=-2,T=-3,C=()=>{e.appearedAt=r,e.wanderS=0,e.wanderTargetS=0,e.wanderFrames=0,e.relocTween=Dn(0,1,k,tl.smoothstep),Bn(e.relocTween,e.envClock)},O=F=>{e.relocNextIdx=F,e.relocTween=Dn(1,0,z,tl.smoothstep),Bn(e.relocTween,e.envClock)};if(e.relocTween?.done&&e.relocTween.to===0){let F=e.relocNextIdx;if(F===_&&!c&&(F=T),F===T)e.cursorMode=!1,e.appearedAt=0,e.relocTween=null;else if(F===_)e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=g,C();else{e.currentIdx=F;let te=s[e.currentIdx],re=qo(t,te.x,te.y,u);e.glowOpacity=E.baseOp+(E.peakOp-E.baseOp)*Sc(E.lumLo,E.lumHi,re),C()}}if((!e.relocTween||e.relocTween.done)&&(e.appearedAt===0?(c?(e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=g):(e.cursorMode=!1,e.currentIdx=f,e.glowOpacity=x),C()):c!==e.cursorMode?O(c?_:T):!e.cursorMode&&b&&O(f)),e.cursorMode){c&&(e.glowOpacity=g);let F=Math.max(.01,Math.min(1,yt.catchFollow)),te=1-Math.pow(1-F,v/(1e3/60)),re=e.cursorTargetArc-e.cursorArc;re=(re%p+p*1.5)%p-p/2,e.cursorArc+=re*te}else e.glowOpacity+=(x-e.glowOpacity)*y(E.fadeRate);e.glowOpacity=Math.max(0,Math.min(1,e.glowOpacity)),e.relocMul=e.relocTween?ic(e.relocTween,e.envClock):1;let D=li(i,a,l,e.kind)/ul(Dm,Bm,Xm),$=E.wanderRange*D;e.wanderFrames+=v,e.wanderFrames>=V2&&(e.wanderTargetS=(Math.random()*2-1)*$,e.wanderFrames=0),e.wanderS+=(e.wanderTargetS-e.wanderS)*y(E.wanderLerp);let P,V,B,L,W;if(e.pointMode){let F=s[e.currentIdx];P=F.x+e.wanderS,V=F.y,B=0,L=P,W=V}else{let F=e.cursorMode?e.cursorArc:s[e.currentIdx].arc+e.wanderS,te=E.inset*e.scale;Un(F,i,a,l,te,0,e.kind,ut),P=ut.x,V=ut.y,B=Im(F,i,a,l,te,e.kind);let re=E.extraOutward*D*e.scale;Un(F,i,a,l,te,re,e.kind,ut),L=ut.x,W=ut.y}e.deform&&(e.deform(P,V,ut),P=ut.x,V=ut.y,e.deform(L,W,ut),L=ut.x,W=ut.y);let A=o==="light",K=A?Dp(t,P,V,u):qa(t,P,V,u);e.tintTween?e.tintTween.done&&(A?(e.tintFrom={r:e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*e.tintTween.val,g:e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*e.tintTween.val,b:e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*e.tintTween.val},e.tintTarget={...K},e.tintTween=Dn(0,1,kc),Bn(e.tintTween,r)):r>=e.tintHoldUntil&&(e.tintFrom={...e.tintTarget},e.tintTarget={...K},e.tintTween=Dn(0,1,kc),Bn(e.tintTween,r),e.tintHoldUntil=r+Am)):(e.tintFrom={...K},e.tintTarget={...K},e.tintTween=Dn(0,1,kc),Bn(e.tintTween,r),e.tintHoldUntil=A?0:r+Am),ic(e.tintTween,r);let Y=e.tintTween.val,ne,ye,me;if(A)ne=Math.round(e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*Y),ye=Math.round(e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*Y),me=Math.round(e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*Y);else{let F=e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*Y,te=e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*Y,re=e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*Y,Ne=Math.max(F,te,re)||1;ne=Math.round(255*(F/Ne)),ye=Math.round(255*(te/Ne)),me=Math.round(255*(re/Ne))}let N=`rgb(${ne},${ye},${me})`,H="#ffffff";if(A){let F=Ga(ne,ye,me),[te,re,Ne]=Ya(F[0],Math.min(1,F[1]*j2),Math.max(q2,F[2]*Q2));H=`rgb(${te},${re},${Ne})`}let Q=Math.max(0,Math.min(1,n))*(e.pointMode?E.pointGain:1),Z=Math.min(1,e.glowOpacity*E.haloOpMul*Q),X=Math.min(1,e.glowOpacity*E.extraIntensity*Q);if(Math.abs(e.relocMul-e.dEnv)>.002){let F=e.relocMul>=.998&&e.dEnv<.998;e.dEnv=e.relocMul,e.env.style.opacity=e.relocMul.toFixed(3),F&&(e.dirty=!0)}let ge=!!(e.relocTween&&!e.relocTween.done)||e.cursorMode,be=!(Math.abs(P-e.dX)<cl&&Math.abs(V-e.dY)<cl&&Math.abs(B-e.dAng)<Z2&&Math.abs(L-e.dEX)<cl&&Math.abs(W-e.dEY)<cl),Re=!(Math.abs(Z-e.dHOp)<Nm&&Math.abs(X-e.dEOp)<Nm),Je=N!==e.dHaloTint||H!==e.dExtraTint;return(e.dirty||be||Re||Je)&&(e.dX=P,e.dY=V,e.dAng=B,e.dEX=L,e.dEY=W,e.dHOp=Z,e.dEOp=X,e.dHaloTint=N,e.dExtraTint=H,e.dirty=!1,rb(e,P,V,B,L,W,Z,X,N,H)),ge}function rb(e,t,r,n,o,i,a,l,s,u){let{ctx:d,canvas:f,dpr:m,margin:h}=e;if(d.setTransform(1,0,0,1,0,0),d.globalCompositeOperation="source-over",d.globalAlpha=1,d.clearRect(0,0,f.width,f.height),a<=.002&&l<=.002||!e.maskReady)return;let x=a>.002?vc(e.halo,...Wm(s),e.haloTint):null,b=l>.002?u==="#ffffff"?e.extra.canvas:vc(e.extra,...Wm(u),e.extraTint):null,w=v=>{x&&(d.save(),d.translate(t+h,r+h),d.rotate(n),d.globalAlpha=a*v,d.drawImage(x,-e.halo.ax,-e.halo.ay,e.halo.w,e.halo.h),d.restore()),b&&(d.save(),d.translate(o+h,i+h),d.rotate(n),d.globalAlpha=l*v,d.drawImage(b,-e.extra.ax,-e.extra.ay,e.extra.w,e.extra.h),d.restore())};if(!e.pointMode&&e.surroundPath&&e.bandPath){d.save(),d.scale(m,m),d.clip(e.surroundPath,"evenodd"),w(.5),d.restore(),d.save(),d.scale(m,m),d.clip(e.bandPath,"evenodd"),w(1),d.restore();return}d.save(),d.scale(m,m),w(1),d.restore();let c=e.maskAlpha;if(!c)return;let p=d.getImageData(0,0,f.width,f.height),g=p.data;for(let v=0,y=3;v<c.length;v++,y+=4){let k=c[v];if(k!==255){if(k===0){g[y]=0;continue}g[y]=(g[y]*k+127)/255}}d.putImageData(p,0,0)}var Vn=[255,255,255];function Wm(e){if(e[0]==="#")return Vn[0]=parseInt(e.slice(1,3),16),Vn[1]=parseInt(e.slice(3,5),16),Vn[2]=parseInt(e.slice(5,7),16),Vn;let t=4,r=0,n=0;for(;t<e.length&&n<3;){let o=e.charCodeAt(t++);o>=48&&o<=57?r=r*10+(o-48):(o===44||o===41)&&(Vn[n++]=r,r=0)}return Vn}function Um(e,t){e.pointMode===t.pointMode&&(t.currentIdx=Math.min(e.currentIdx,Math.max(0,t.perim.length-1)),t.appearedAt=e.appearedAt,t.glowOpacity=e.glowOpacity,t.relocTween=e.relocTween,t.relocNextIdx=e.relocNextIdx,t.relocMul=e.relocMul,t.envClock=e.envClock,t.cursorMode=e.cursorMode,t.cursorArc=e.cursorArc,t.cursorTargetArc=e.cursorTargetArc,t.lastTickMs=e.lastTickMs,t.wanderS=e.wanderS,t.wanderTargetS=e.wanderTargetS,t.wanderFrames=e.wanderFrames,t.tintFrom=e.tintFrom,t.tintTarget=e.tintTarget,t.tintTween=e.tintTween,t.tintHoldUntil=e.tintHoldUntil,t.dEnv=e.relocMul,t.env.style.opacity=e.relocMul.toFixed(3))}var Cc=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:"#ffffff"});function jm(e,t,r){let n=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),o=Math.ceil(3*r.blur+Math.abs(r.offsetY)+1),i=t.width+2*o,a=t.height+2*o,l=document.createElement("canvas");l.className="ctmb-metal-fx-rim-canvas",l.setAttribute("aria-hidden","true"),l.width=Math.ceil(i*n),l.height=Math.ceil(a*n),l.style.cssText=`position:absolute;left:${-o}px;top:${-o}px;width:${i}px;height:${a}px;pointer-events:none`;let s=l.getContext("2d"),u=document.createElement("canvas");u.width=l.width,u.height=l.height;let d=u.getContext("2d",{willReadFrequently:!0});if(!s||!d)return null;e.appendChild(l);let f={canvas:l,ctx:s,scratch:u,sctx:d,width:t.width,height:t.height,cornerRadius:t.cornerRadius,kind:t.kind,ring:t.ring,margin:o,dpr:n,opts:r,mO:Vt(),mI:Vt(),sum:Number.NaN};return $c(f,null,!0),f}function Vm(e,t,r){let n=t.xy;for(let o=0;o<t.n;o++){let i=n[o*2]+r,a=n[o*2+1]+r;o===0?e.moveTo(i,a):e.lineTo(i,a)}e.closePath()}function $c(e,t,r=!1){let{width:n,height:o,cornerRadius:i,ring:a,margin:l,dpr:s}=e;Rt(0,0,n,o,i,t,e.mO),Rt(a,a,n-2*a,o-2*a,Math.max(0,i-a),t,e.mI);let u=0,d=e.mO.xy;for(let $=0;$<e.mO.n;$+=4)u+=d[$*2]*1.37+d[$*2+1];if(!r&&u===e.sum)return;e.sum=u;let{sctx:f,scratch:m,ctx:h,canvas:x,opts:b}=e,w=m.width,c=m.height;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,w,c),f.scale(s,s),f.fillStyle="#fff",f.beginPath(),Vm(f,e.mO,l),Vm(f,e.mI,l),f.fill("evenodd");let p=f.getImageData(0,0,w,c).data,g=w*c,v=new Float32Array(g);for(let $=0,P=3;$<g;$++,P+=4)v[$]=p[P]/255;let y=Math.round(b.offsetY*s)*w,k=new Float32Array(g);if(y>=0)for(let $=0;$<g;$++)k[$]=Math.max(0,v[$]-($>=y?v[$-y]:0));else for(let $=0;$<g;$++)k[$]=Math.max(0,v[$]-($-y<g?v[$-y]:0));let z=ai(k,w,c,b.blur*s),_=parseInt(b.color.slice(1,3),16),T=parseInt(b.color.slice(3,5),16),C=parseInt(b.color.slice(5,7),16),O=h.createImageData(w,c),D=O.data;for(let $=0,P=0;$<g;$++,P+=4)D[P]=_,D[P+1]=T,D[P+2]=C,D[P+3]=Math.round(Math.min(1,z[$]*v[$]*b.alpha)*255);h.setTransform(1,0,0,1,0,0),h.putImageData(O,0,0)}function Rc(e){e&&e.canvas.remove()}var Qm=new Set(["INPUT","TEXTAREA","SELECT","OPTION"]);function qm(e,t){let r=Math.max(e.left-t.right,t.left-e.right,0),n=Math.max(e.top-t.bottom,t.top-e.bottom,0);return Math.sqrt(r*r+n*n)}function Km(e,t,r,n){return!(Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)<r||Math.max(e.left-t.right,t.left-e.right,0)>n)}function Zm(e,t,r,n){return Math.min(e.right,t.right)-Math.max(e.left,t.left)<r?!1:Math.max(e.top-t.bottom,t.top-e.bottom,0)<=n}function Qr(e,t,r,n,o,i){let a=Math.max(0,Math.min(i,n*.5,o*.5)),l=e.roundRect;if(typeof l=="function"){l.call(e,t,r,n,o,a);return}e.moveTo(t+a,r),e.lineTo(t+n-a,r),e.quadraticCurveTo(t+n,r,t+n,r+a),e.lineTo(t+n,r+o-a),e.quadraticCurveTo(t+n,r+o,t+n-a,r+o),e.lineTo(t+a,r+o),e.quadraticCurveTo(t,r+o,t,r+o-a),e.lineTo(t,r+a),e.quadraticCurveTo(t,r,t+a,r)}function Jm(e,t,r,n,o){if(!o.flipX&&!o.flipY){e.drawImage(t,o.sx??0,o.sy??0,r,n,o.x,o.y,o.w,o.h);return}e.save(),o.flipX&&(e.translate(o.x+o.w,0),e.scale(-1,1)),o.flipY&&(e.translate(0,o.y+o.h),e.scale(1,-1)),e.drawImage(t,o.sx??0,o.sy??0,r,n,o.flipX?0:o.x,o.flipY?0:o.y,o.w,o.h),e.restore()}var nb=4;function ob(e,t,r,n,o,i,a){if(n<=2*a||o<=2*a){e.beginPath(),Qr(e,t,r,n,o,i),e.clip();return}e.beginPath(),Qr(e,t,r,n,o,i),Qr(e,t+a,r+a,n-2*a,o-2*a,Math.max(0,i-a)),e.clip("evenodd")}function e1(e,t,r,n,o,i,a,l,s,u,d,f){let m=f??Math.max(1,Math.round((12+nb*3)*d)),h=Math.max(0,a),x=!0;for(let b=0;b<3&&h>1e-4;b++){let w=Math.min(1,h);e.save(),ob(e,u.x,u.y,u.w,u.h,u.r,m),e.globalCompositeOperation=x?"source-over":"lighter",x=!1,e.globalAlpha=w,Jm(e,t,r,n,s),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=l,e.fillRect(0,0,o,i),e.restore(),h-=w}}function t1(e,t,r,n,o,i,a){let l=a|0;if(l<1||n<=2*l||o<=2*l){e.beginPath(),Qr(e,t,r,n,o,i),e.clip();return}e.beginPath(),Qr(e,t,r,n,o,i),Qr(e,t+l,r+l,n-2*l,o-2*l,Math.max(0,i-l)),e.clip("evenodd")}function r1(e,t,r,n,o,i,a,l,s,u,d,f){let m=l*d,h=!0;for(let x=0;x<3&&m>1e-4;x++){let b=Math.min(1,m);e.save(),t1(e,a.x,a.y,a.w,a.h,a.r,s),e.globalCompositeOperation=h?"source-over":"lighter",h=!1,e.globalAlpha=b,Jm(e,t,r,n,f),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=u,e.fillRect(0,0,o,i),e.restore(),m-=b}}function n1(e,t,r,n,o,i,a,l){let s=e.createLinearGradient(n,o,i,a);s.addColorStop(0,`rgba(255,255,255,${l.toFixed(3)})`),s.addColorStop(.5,`rgba(255,255,255,${(l*.45).toFixed(3)})`),s.addColorStop(1,"rgba(255,255,255,0)"),e.save(),t1(e,t.x,t.y,t.w,t.h,t.r,r),e.globalCompositeOperation="lighter",e.lineWidth=r*2,e.strokeStyle=s,e.beginPath(),Qr(e,t.x,t.y,t.w,t.h,t.r),e.stroke(),e.restore()}function Ec(e){let t=getComputedStyle(e),r=[parseFloat(t.borderTopLeftRadius)||0,parseFloat(t.borderTopRightRadius)||0,parseFloat(t.borderBottomRightRadius)||0,parseFloat(t.borderBottomLeftRadius)||0].filter(n=>n>0);return r.length?Math.min.apply(null,r):0}function Tc(e){let t=getComputedStyle(e),r=Math.max(parseFloat(t.borderTopWidth)||0,parseFloat(t.borderRightWidth)||0,parseFloat(t.borderBottomWidth)||0,parseFloat(t.borderLeftWidth)||0),n=0,o=0,i=t.boxShadow;if(i&&i!=="none"){let u=i.replace(/rgba?\([^)]*\)/g,m=>m.replace(/,/g,"\0")).split(/,\s*/),d=1/0,f=1/0;for(let m of u){let h=m.match(/-?\d+(?:\.\d+)?px/g);if(!h||h.length<4)continue;let x=parseFloat(h[3]);x>0&&(/\binset\b/.test(m)?x<d&&(d=x):x<f&&(f=x))}Number.isFinite(d)&&(n=d),Number.isFinite(f)&&(o=f)}let a=Math.max(r,o);return{width:Math.max(r,n,o)||1,outerCssPx:a}}function o1(e){e.cornerRadius=Ec(e.el);let t=Tc(e.el);e.hairlineWidth=t.width,e.hairlineOuterCssPx=t.outerCssPx}function i1(e){typeof ResizeObserver<"u"&&(e.resizeObserver=new ResizeObserver(()=>o1(e)),e.resizeObserver.observe(e.el)),typeof MutationObserver<"u"&&(e.mutationObserver=new MutationObserver(()=>o1(e)),e.mutationObserver.observe(e.el,{attributes:!0,attributeFilter:["style","class"]}))}function a1(e){e.resizeObserver?.disconnect(),e.resizeObserver=null,e.mutationObserver?.disconnect(),e.mutationObserver=null}var wt=new Set,Lc=new WeakMap,xb=Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36}),qr={...xb};function g1(e){Object.assign(qr,e),pl(qr.enabled&&wt.size>0),dl()}var kr=null,Kn=0,Pc=0,d1=!1;function dl(){Kn!==0||typeof requestAnimationFrame>"u"||(Kn=requestAnimationFrame(e=>{if(Kn=0,e-Pc<qr.repaintMs){dl();return}Pc=e,Fc()}))}var ui=!1;function vb(e,t){let r=qr.radius;for(let n of wt){let o=n.anchorEl.getBoundingClientRect(),i=n.el.getBoundingClientRect(),a=Math.min(o.left,i.left)-r,l=Math.max(o.right,i.right)+r,s=Math.min(o.top,i.top)-r,u=Math.max(o.bottom,i.bottom)+r;if(e>=a&&e<=l&&t>=s&&t<=u)return!0}return!1}function p1(e){if(kr={x:e.clientX,y:e.clientY},!qr.enabled)return;let t=vb(e.clientX,e.clientY);(t||ui)&&dl(),ui=t}function fl(){kr=null,ui&&dl(),ui=!1}function pl(e){e=e&&qr.enabled,!(typeof document>"u"||e===d1)&&(d1=e,e?(document.addEventListener("pointermove",p1,{passive:!0}),document.addEventListener("pointerleave",fl),window.addEventListener("blur",fl)):(document.removeEventListener("pointermove",p1),document.removeEventListener("pointerleave",fl),window.removeEventListener("blur",fl),kr=null,Kn&&cancelAnimationFrame(Kn),Kn=0,ui=!1,Pc=0))}function yb(e,t,r,n,o,i,a,l,s){if(!kr)return;let u=qr;if(!u.enabled||u.strength<=0)return;let d=u.radius,f,m,h,x,b,w;if(o){let L=r.left>=n.right;f=L?n.right:r.right,m=L?r.left:n.left,h=kr.x,x=kr.y,b=Math.max(r.top,n.top),w=Math.min(r.bottom,n.bottom)}else{let L=r.top>=n.bottom;f=L?n.bottom:r.bottom,m=L?r.top:n.top,h=kr.y,x=kr.x,b=Math.max(r.left,n.left),w=Math.min(r.right,n.right)}let c=Math.min(f,m),p=Math.max(f,m),g=Math.max(1,p-c);if(h<c-d||h>p+d||x<b-d||x>w+d)return;let v=Math.max(0,Math.min(1,Math.abs(h-f)/g)),y=Math.max(.5,d*u.edgeFade),k=Math.min(1,Math.min(h-(c-d),p+d-h)/y),z=Math.min(1,Math.min(x-(b-d),w+d-x)/y),_=u.strength*(1-u.falloff*v)*k*z;if(_<=.001)return;let T=d*s*(1+u.penumbra*v),C=o?(x-n.top+l)*s:(x-n.left+l)*s,O=Math.max(0,Math.min(.5,(1-u.softness)*.5)),D=Math.max(.001,.5-O),$=o?a:i,P=Math.max(0,Math.floor(C-T)),V=Math.min($,Math.ceil(C+T));if(V<=P)return;let B=new Float32Array(V-P);for(let L=P;L<V;L++){let W=(L+.5-(C-T))/(2*T),A=W<D?W/D:W>1-D?(1-W)/D:1;B[L-P]=1-_*Math.max(0,Math.min(1,A))}for(let L of[e,t]){let W=o?0:P,A=o?P:0,K=o?i:V-P,Y=o?V-P:a,ne=L.getImageData(W,A,K,Y),ye=ne.data;if(o)for(let me=0;me<Y;me++){let N=B[me];if(!(N>=.999))for(let H=me*K*4+3,Q=(me+1)*K*4;H<Q;H+=4)ye[H]=ye[H]*N}else for(let me=0;me<Y;me++)for(let N=0;N<K;N++){let H=B[N];if(H>=.999)continue;let Q=(me*K+N)*4+3;ye[Q]=ye[Q]*H}L.putImageData(ne,W,A)}}var qt=null,jn=null,Qn=null,qn=null;function wb(e,t){return qt||(qt=document.createElement("canvas"),jn=document.createElement("canvas"),Qn=qt.getContext("2d",{alpha:!0}),qn=jn.getContext("2d",{alpha:!0})),!Qn||!qn||!qt||!jn?!1:(qt.width!==e&&(qt.width=e,jn.width=e),qt.height!==t&&(qt.height=t,jn.height=t),Qn.setTransform(1,0,0,1,0,0),qn.setTransform(1,0,0,1,0,0),Qn.globalCompositeOperation="source-over",qn.globalCompositeOperation="source-over",Qn.clearRect(0,0,e,t),qn.clearRect(0,0,e,t),!0)}function h1(e,t,r,n=1){if(typeof document>"u"||Qm.has(e.tagName))return null;for(let x of wt)if(x.el===e)return x.strength=n,x;let o=document.createElement("div");o.setAttribute("data-ctmb-metal-fx-reflection",""),o.setAttribute("aria-hidden","true");let i=document.createElement("canvas");i.className="ctmb-metal-fx-reflection-canvas";let a=i.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!a)return null;let l=document.createElement("canvas");l.className="ctmb-metal-fx-reflection-stroke-canvas";let s=l.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!s)return null;o.appendChild(i),o.appendChild(l),Lc.set(e,{position:e.style.getPropertyValue("position"),positionPriority:e.style.getPropertyPriority("position"),isolation:e.style.getPropertyValue("isolation"),isolationPriority:e.style.getPropertyPriority("isolation")});let u=getComputedStyle(e),d=!1;u.position==="static"&&(e.style.position="relative",d=!0);let f=!1;u.isolation!=="isolate"&&(e.style.isolation="isolate",f=!0),e.setAttribute("data-ctmb-metal-fx-reflect-host",""),e.insertBefore(o,e.firstChild);let m=Tc(e),h={el:e,anchor:t,anchorEl:r,strength:n,wrap:o,canvas:i,ctx:a,strokeCanvas:l,strokeCtx:s,cornerRadius:Ec(e),hairlineWidth:m.width,hairlineOuterCssPx:m.outerCssPx,appliedPositionRelative:d,appliedIsolation:f,resizeObserver:null,mutationObserver:null};return i1(h),wt.add(h),pl(!0),h}function Ic(e){for(let t of wt)if(t.el===e){a1(t),t.canvas.width=0,t.canvas.height=0,t.strokeCanvas.width=0,t.strokeCanvas.height=0,t.wrap.parentNode===t.el&&t.el.removeChild(t.wrap),t.el.removeAttribute("data-ctmb-metal-fx-reflect-host");let r=Lc.get(e);t.appliedPositionRelative&&e.style.position==="relative"&&(r?.position?e.style.setProperty("position",r.position,r.positionPriority):e.style.removeProperty("position")),t.appliedIsolation&&e.style.isolation==="isolate"&&(r?.isolation?e.style.setProperty("isolation",r.isolation,r.isolationPriority):e.style.removeProperty("isolation")),Lc.delete(e),wt.delete(t),wt.size===0&&pl(!1);return}}function Sb(e,t,r,n,o){if(n<1||o<1)return null;let i=e.getContext("2d");if(!i)return null;let a=i.getImageData(t,r,n,o).data,l=n,s=o,u=-1,d=-1;for(let f=0;f<o;f++){let m=f*n;for(let h=0;h<n;h++)a[(m+h)*4+3]>8&&(h<l&&(l=h),h>u&&(u=h),f<s&&(s=f),f>d&&(d=f))}return u<0?null:{x:t+l,y:r+s,w:u-l+1,h:d-s+1}}var Oc=new WeakMap;function b1(){Oc=new WeakMap}function m1(e){let t=Oc.get(e);return t||(t=e.getBoundingClientRect(),Oc.set(e,t)),t}function Fc(){if(wt.size===0)return;let e=typeof window<"u"&&window.devicePixelRatio||1,t=new Map;for(let r of wt){let n=m1(r.el),o=t.get(r.anchorEl);if(o||(o=m1(r.anchorEl),t.set(r.anchorEl,o)),n.width<1||n.height<1||o.width<1||o.height<1)continue;let i=r.el.hasAttribute("data-ctmb-metal-fx-text");if(i&&!r.glyphStyled&&(r.canvas.style.filter="blur(0.4px) saturate(1.35) brightness(1.2)",r.glyphStyled=!0),!Km(o,n,1,32)&&!Zm(o,n,1,32)){r.canvas.width!==1&&(r.canvas.width=1,r.canvas.height=1),r.strokeCanvas.width!==1&&(r.strokeCanvas.width=1,r.strokeCanvas.height=1);continue}let a=i&&!!r.anchor.mask;a&&!r.anchor.wantRaw&&(r.anchor.wantRaw=!0),r.anchor.wantRing||(r.anchor.wantRing=!0);let l=!!r.anchor.deform&&!!r.anchor.ringCanvas,s=a&&r.anchor.rawCanvas?r.anchor.rawCanvas:l?r.anchor.ringCanvas:r.anchor.canvas,u=Math.round(r.anchor.overscan*e),d=u,f=u,m=(s.width|0)-2*u,h=(s.height|0)-2*u;if(r.anchor.mask&&!a){let ne=Sb(s,d,f,m,h);ne&&(d=ne.x,f=ne.y,m=ne.w,h=ne.h)}if(m<4||h<4)continue;let x=(o.left+o.right)*.5,b=(o.top+o.bottom)*.5,w=(n.left+n.right)*.5,c=(n.top+n.bottom)*.5,p=x-w,g=b-c,v=Math.max(o.left-n.right,n.left-o.right,0),y=Math.max(o.top-n.bottom,n.top-o.bottom,0),k=v>=y,z=qm(o,n),_=1-Math.min(1,z/12);_=_*_*(3-2*_);let T=.55+(1-.55)*_,C=Math.min(3.6,T*1.3*.7)*r.strength,D=o.left>=n.left&&o.right<=n.right&&o.top>=n.top&&o.bottom<=n.bottom?[!0,!1]:[k],$=r.anchor.scale??1,P=Math.max(1*$,r.hairlineWidth),V=Math.max(1,Math.round(P*e)),B=Math.max(1,Math.round(Math.max(1*$,r.hairlineWidth)*e)),L=r.hairlineOuterCssPx;r.wrap.style.inset!==`${-L}px`&&(r.wrap.style.inset=`${-L}px`),r.wrap.style.borderRadius!==`${Math.max(0,r.cornerRadius)}px`&&(r.wrap.style.borderRadius=`${Math.max(0,r.cornerRadius)}px`);let W=Math.max(1,Math.round((n.width+L*2)*e)),A=Math.max(1,Math.round((n.height+L*2)*e));r.canvas.width!==W&&(r.canvas.width=W),r.canvas.height!==A&&(r.canvas.height=A),r.strokeCanvas.width!==W&&(r.strokeCanvas.width=W),r.strokeCanvas.height!==A&&(r.strokeCanvas.height=A);let K=r.ctx;K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,W,A);let Y=r.strokeCtx;Y.setTransform(1,0,0,1,0,0),Y.clearRect(0,0,W,A);for(let[ne,ye]of D.entries()){let me=ne>0&&wb(W,A),N=me?Qn:K,H=me?qn:Y,Q=Math.min((i?12*1.5:12)*e,Math.max(W,A)),Z,X,ge,be;ye?(Z=p>0?W:0,ge=p>0?W-Q:Q,X=A*.5,be=A*.5):(X=g>0?A:0,be=g>0?A-Q:Q,Z=W*.5,ge=W*.5);let Re=K.createLinearGradient(Z,X,ge,be);Re.addColorStop(0,`rgba(0,0,0,${1})`),Re.addColorStop(.5,`rgba(0,0,0,${.85})`),Re.addColorStop(1,`rgba(0,0,0,${0})`);let Je=m/e,F=i?Math.max(1,Math.min(ye?W:A,Math.round(ye?m:h))):Math.max(1,Math.round(235*Math.max(.1,Je/140)*e)),te,re,Ne,It,Cr=!1,en=!1;if(ye){let I=Math.max(o.top,n.top),J=Math.min(o.bottom,n.bottom);Cr=!0,te=p>0?W-F:0,re=Math.round((I-n.top+L)*e),Ne=F,It=Math.max(1,Math.round((J-I)*e))}else{let I=Math.max(o.left,n.left),J=Math.min(o.right,n.right);en=!0,te=Math.round((I-n.left+L)*e),re=g>0?A-F:0,Ne=Math.max(1,Math.round((J-I)*e)),It=F}let Zn={x:te,y:re,w:Ne,h:It,flipX:Cr,flipY:en,sx:d,sy:f},Jn={x:0,y:0,w:W,h:A,r:Math.max(0,r.cornerRadius*e)},eo=i?Math.min(1,C*.7):Math.min(3.6,C*2.535*.7*.5);e1(N,s,m,h,W,A,eo,Re,Zn,Jn,e,i?Math.max(W,A):void 0),i||(r1(H,s,m,h,W,A,Jn,C,V,Re,.52,Zn),n1(H,Jn,B,Z,X,ge,be,Math.min(.85,.044*C))),me&&(K.globalCompositeOperation="lighter",K.drawImage(qt,0,0),Y.globalCompositeOperation="lighter",Y.drawImage(jn,0,0))}for(let ne of D)yb(K,Y,o,n,ne,W,A,L,e);K.globalCompositeOperation="source-over",Y.globalCompositeOperation="source-over"}}function x1(){b1();for(let e of[...wt])Ic(e.el);pl(!1)}function v1(){return wt.size}var ml=!1,ci=0,Hc=0;function y1(){ml||(ml=!0,!(typeof requestAnimationFrame>"u")&&(ci=requestAnimationFrame(e=>{ci=0,ml=!1,!(e-Hc<66)&&(Hc=e,Fc())})))}function w1(){ci&&cancelAnimationFrame(ci),ci=0,ml=!1,Hc=0}var Pt=et(Kr(),1),Eb={position:"absolute",inset:0,width:"100%",height:"100%"},Tb={position:"absolute",inset:3},_1={position:"absolute",inset:0,pointerEvents:"none",zIndex:3,borderRadius:"inherit"},Lb={position:"absolute",inset:0,pointerEvents:"none",zIndex:4},fi=new Map;function Pb(){let e=globalThis;e.__MFX_DEBUG__&&(e.__mfxGlow=fi)}em((e,t)=>{let r=fi.get(e);return r?Ym(r.handles,e,t,e.opacityMul*e.glowGain,r.themeRef.current):!1});function Ob(e){let[t,r]=(0,q.useState)(()=>e!=="auto"?e:typeof window>"u"||!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,q.useEffect)(()=>{if(e!=="auto"){r(e);return}if(typeof window>"u"||!window.matchMedia)return;let n=window.matchMedia("(prefers-color-scheme: dark)"),o=()=>r(n.matches?"dark":"light");return o(),n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[e]),t}var Ac=(0,q.forwardRef)(function({children:t,variant:r="button",preset:n="chromatic",theme:o="auto",strength:i=1,glowGain:a=1,paused:l=!1,borderRadius:s,normalizeHostStyles:u=!0,reflectionTargets:d,disableGlow:f=!1,innerShadow:m,shaderScale:h,ringCssPx:x,scale:b=1,mask:w,glowMode:c="mask",glowPortal:p,className:g,style:v,...y},k){let z=(0,q.useRef)(null),_=(0,q.useRef)(null),T=(0,q.useRef)(null),C=(0,q.useRef)(null),O=(0,q.useRef)(null),D=(0,q.useRef)(null),$=(0,q.useRef)(null),P=(0,q.useRef)(null),V=(0,q.useRef)("dark"),B=(0,q.useRef)(0),[L,W]=(0,q.useState)(!1),A=Ob(o),K=(0,q.useMemo)(()=>Uu(),[]);V.current=A;let Y=r==="circle"?"circle":"pill",ne=!f;(0,q.useImperativeHandle)(k,()=>z.current,[]);let ye=(N,H)=>{if(Y==="circle")return Math.min(N,H)/2;let Q=typeof s=="number"?s:(()=>{let Z=D.current?.firstElementChild;if(Z){let X=parseFloat(getComputedStyle(Z).borderTopLeftRadius);if(Number.isFinite(X)&&X>0)return X}return B.current})();return Math.min(Q,Math.min(N,H)/2)};(0,q.useEffect)(()=>{K&&Zp(n,A)},[n,A,K]),(0,q.useEffect)(()=>{let N=$.current;N&&Yr(N,{mask:w??null})},[w]),(0,q.useEffect)(()=>{let N=$.current;N&&Yr(N,{paused:l})},[l]),(0,q.useEffect)(()=>{let N=$.current;if(!N)return;let H={};h!==void 0&&(H.shaderScale=h),x!==void 0&&(H.ringCssPx=x),b!==void 0&&(H.scale=b),Object.keys(H).length>0&&Yr(N,H)},[h,x,b]),(0,q.useLayoutEffect)(()=>{let N=_.current,H=z.current,Q=T.current;if(!N||!H||!K)return;{let I=getComputedStyle(H),J=parseFloat(I.borderTopLeftRadius);B.current=Number.isFinite(J)?J:0}let Z=()=>{let I=H.getBoundingClientRect(),J=Math.max(1,Math.round(I.width)),xe=Math.max(1,Math.round(I.height));return{cssWidth:J,cssHeight:xe,cornerRadius:ye(J,xe)}},X=Z();$.current=Up({onComposite:()=>{let I=$.current,J=P.current;I&&J&&Gm(J,I.deform);let xe=O.current;I&&xe&&$c(xe,I.deform)},hostCanvas:N,cssWidth:X.cssWidth,cssHeight:X.cssHeight,cornerRadius:X.cornerRadius,kind:Y,paused:l,shaderScale:h,ringCssPx:x,scale:b,mask:w??null,onFirstCopy:()=>W(!0)}),H.style.setProperty("--mfx-radius",`${X.cornerRadius}px`),H.style.borderRadius=`${X.cornerRadius}px`;let ge=(I,J)=>{if(!w||c==="ring")return{};let xe=window.devicePixelRatio||1,We=document.createElement("canvas");We.width=Math.max(1,Math.round(I*xe)),We.height=Math.max(1,Math.round(J*xe));let mi=We.getContext("2d");if(!mi)return{};mi.fillStyle="#fff",w(mi,We.width,We.height,xe);let B1=mi.getImageData(0,0,We.width,We.height).data,Yc=[],gi=Math.max(1,Math.round(2*xe));for(let hi=gi>>1;hi<We.height;hi+=gi)for(let bi=gi>>1;bi<We.width;bi+=gi)B1[(hi*We.width+bi)*4+3]>128&&Yc.push({x:bi/xe,y:hi/xe});return{samplePoints:Yc,maskDataUrl:We.toDataURL("image/png")}};Q&&(P.current=Mc(Q,{width:X.cssWidth,height:X.cssHeight,cornerRadius:X.cornerRadius,kind:Y,scale:b,...ge(X.cssWidth,X.cssHeight)}));let be=I=>{if(!Q)return;let J=P.current;Q.innerHTML="",P.current=Mc(Q,{width:I.cssWidth,height:I.cssHeight,cornerRadius:I.cornerRadius,kind:Y,scale:b,...ge(I.cssWidth,I.cssHeight)}),J&&Um(J,P.current);let xe=$.current;xe&&P.current&&fi.set(xe,{handles:P.current,themeRef:V})},Re=()=>m?m===!0?Cc:{...Cc,...m}:null,Je=I=>{let J=C.current,xe=$.current;Rc(O.current),O.current=null;let We=Re();!J||!xe||!We||(O.current=jm(J,{width:I.cssWidth,height:I.cssHeight,cornerRadius:I.cornerRadius,kind:Y,ring:xe.ringCssPx},We))};Je(X);let F=0,te=X.cssWidth,re=X.cssHeight,Ne=X.cornerRadius,It=new ResizeObserver(()=>{F===0&&(F=requestAnimationFrame(()=>{F=0;let I=Z(),J=$.current;!J||Math.abs(I.cssWidth-te)<.5&&Math.abs(I.cssHeight-re)<.5&&Math.abs(I.cornerRadius-Ne)<.5||(te=I.cssWidth,re=I.cssHeight,Ne=I.cornerRadius,Yr(J,{cssWidth:I.cssWidth,cssHeight:I.cssHeight,cornerRadius:I.cornerRadius}),H.style.setProperty("--mfx-radius",`${I.cornerRadius}px`),H.style.borderRadius=`${I.cornerRadius}px`,be(I),Je(I))}))});It.observe(H);let Cr=null,en=()=>{let I=$.current;if(I&&Kp(I)){let J=Z();be(J),Je(J)}Zn()},Zn=()=>{Cr?.removeEventListener("change",en),Cr=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,Cr?.addEventListener("change",en)};Zn();let Jn=lm(I=>{I&&$.current&&be(Z())}),eo=null;return typeof IntersectionObserver<"u"&&(eo=new IntersectionObserver(I=>{let J=$.current;if(J)for(let xe of I)qp(J,xe.isIntersecting)},{rootMargin:"64px"}),eo.observe(H)),$.current&&P.current&&(fi.set($.current,{handles:P.current,themeRef:V}),jp($.current)),wm(),Pb(),()=>{Sm(),Rc(O.current),O.current=null,It.disconnect(),Cr?.removeEventListener("change",en),eo?.disconnect(),Jn(),F!==0&&cancelAnimationFrame(F);let I=$.current;I&&(fi.delete(I),Qp(I),Vp(I)),$.current=null,P.current=null,Q&&(Q.innerHTML="")}},[Y]),(0,q.useEffect)(()=>{let N=$.current;N&&Yr(N,{opacityMul:Math.max(0,Math.min(1,i)),glowGain:Math.max(0,a)})},[i,a,r]),(0,q.useEffect)(()=>{let N=$.current,H=z.current;if(!N||!H||!d||A!=="dark")return;N.onAfterFrame=y1;let Q=d.flatMap(Z=>{let X="current"in Z?Z:Z.ref,ge="current"in Z?1:Z.strength??1;return X.current?[{el:X.current,strength:ge}]:[]});for(let{el:Z,strength:X}of Q)h1(Z,N,H,X);return()=>{N.onAfterFrame=void 0;for(let{el:Z}of Q)Ic(Z)}},[d,A]),(0,q.useEffect)(()=>{let N=z.current,H=$.current;if(!N||!H)return;let Q=ye(H.cssWidth,H.cssHeight);Yr(H,{cornerRadius:Q}),N.style.setProperty("--mfx-radius",`${Q}px`),N.style.borderRadius=`${Q}px`},[s,A,r,Y]);let me=(0,q.useMemo)(()=>({...v,"--mfx-strength":String(Math.min(1,Math.max(0,i))),opacity:L?1:0,visibility:L?"visible":"hidden",transition:L?"opacity 0.15s ease-out":"none"}),[v,i,L]);return K?(0,Pt.jsxs)("div",{...y,ref:z,className:g?`ctmb-metal-fx-root ${g}`:"ctmb-metal-fx-root","data-variant":r,"data-shape":Y,"data-theme":A,"data-paused":l?"true":void 0,"data-normalize":u?"true":"false",style:me,children:[(0,Pt.jsx)("canvas",{ref:_,className:"ctmb-metal-fx-canvas",style:Eb}),(0,Pt.jsx)("div",{className:"ctmb-metal-fx-inner","aria-hidden":"true",style:Tb}),p?(0,M1.createPortal)((0,Pt.jsx)("div",{ref:T,"aria-hidden":"true",style:{..._1,display:ne?void 0:"none"}}),p):(0,Pt.jsx)("div",{ref:T,"aria-hidden":"true",style:{..._1,display:ne?void 0:"none"}}),m?(0,Pt.jsx)("div",{ref:C,"aria-hidden":"true",style:Lb}):null,(0,Pt.jsx)("div",{ref:D,className:"ctmb-metal-fx-content",children:t})]}):(0,Pt.jsx)("div",{...y,ref:z,className:g?`ctmb-metal-fx-fallback ${g}`:"ctmb-metal-fx-fallback","data-ctmb-metal-fx-unsupported":"",style:{display:"inline-flex",...v},children:t})});Ac.displayName="MetalFx";var C1="ctmb-metal-fx-styles",Ib=`
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
`,hl=!1,Nc=null;function $1(){if(hl||typeof document>"u")return;if(document.getElementById(C1)){hl=!0;return}let e=document.createElement("style");e.id=C1,e.textContent=Ib,document.head.appendChild(e),Nc=e,hl=!0}function R1(){Nc?.remove(),Nc=null,hl=!1}var Ot=et(rn(),1);var L1={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},xl={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},Yv={dark:{...xl.md.dark},light:{...xl.md.light}},Jr={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},forest:{border:[{color:"rgb(46, 160, 90)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(30, 190, 120)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(70, 180, 70)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(20, 150, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(90, 200, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 170, 110)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(120, 210, 70)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(35, 145, 100)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(60, 195, 140)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(46, 160, 90)",secondary:"rgba(30, 190, 120,, 0.98)"},spikeLt:{primary:"rgb(33, 115, 65)",secondary:"rgb(22, 137, 86)"}},candy:{border:[{color:"rgb(240, 70, 170)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 90, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(215, 60, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 110, 180)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(200, 80, 240)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(250, 60, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(230, 120, 220)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(245, 85, 165)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(210, 70, 230)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 70, 170)",secondary:"rgba(255, 90, 140,, 0.98)"},spikeLt:{primary:"rgb(173, 50, 122)",secondary:"rgb(184, 65, 101)"}},ice:{border:[{color:"rgb(90, 200, 240)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 175, 230)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(130, 220, 250)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(70, 190, 215)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(110, 210, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(50, 165, 220)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(150, 230, 250)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(85, 195, 235)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(65, 180, 245)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(90, 200, 240)",secondary:"rgba(60, 175, 230,, 0.98)"},spikeLt:{primary:"rgb(65, 144, 173)",secondary:"rgb(43, 126, 166)"}},gold:{border:[{color:"rgb(240, 190, 60)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 210, 90)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(225, 165, 40)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(250, 200, 70)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 225, 120)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(230, 175, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(245, 205, 85)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(215, 155, 35)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 215, 100)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 190, 60)",secondary:"rgba(255, 210, 90,, 0.98)"},spikeLt:{primary:"rgb(173, 137, 43)",secondary:"rgb(184, 151, 65)"}}},P1={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},forest:{border:[{color:"rgb(46, 160, 90)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 190, 120)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(70, 180, 70)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(20, 150, 130)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(90, 200, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(40, 170, 110)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(120, 210, 70)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(35, 145, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 195, 140,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(46, 160, 90,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(30, 190, 120,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(70, 180, 70,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(20, 150, 130,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 200, 80,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 170, 110,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(120, 210, 70,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},candy:{border:[{color:"rgb(240, 70, 170)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 90, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(215, 60, 200)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 110, 180)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(200, 80, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(250, 60, 150)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(230, 120, 220)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(245, 85, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(210, 70, 230,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 70, 170,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 90, 140,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(215, 60, 200,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 110, 180,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(200, 80, 240,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(250, 60, 150,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(230, 120, 220,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},ice:{border:[{color:"rgb(90, 200, 240)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(60, 175, 230)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(130, 220, 250)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(70, 190, 215)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(110, 210, 255)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(50, 165, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(150, 230, 250)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(85, 195, 235)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(65, 180, 245,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(90, 200, 240,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(60, 175, 230,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(130, 220, 250,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(70, 190, 215,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(110, 210, 255,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(50, 165, 220,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(150, 230, 250,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(240, 190, 60)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 210, 90)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(225, 165, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 200, 70)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 225, 120)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(230, 175, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(245, 205, 85)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 155, 35)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 100,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 190, 60,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 210, 90,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(225, 165, 40,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(250, 200, 70,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 225, 120,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(230, 175, 50,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(245, 205, 85,, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function Fb(e){return P1[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Hb(e){return P1[e].inner.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Ab(e){return Jr[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Nb(e){let t=Jr[e],r=e==="mono"?.225:.45;return t.border.map(n=>{let o=n.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${n.size.split(" ").map(a=>{let l=parseInt(a);return`${Math.round(l*.9)}px`}).join(" ")} at ${n.pos}, ${o}, transparent)`}).join(`,
    `)}function Wb(e,t){let r=Jr[e];return t?r.spike:r.spikeLt}var Db={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},forest:{dark:[{color:"rgb(46, 160, 90)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(30, 190, 120)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(70, 180, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(20, 150, 130)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(90, 200, 80)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(40, 170, 110)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(120, 210, 70)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(35, 145, 100)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(60, 195, 140)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(33, 115, 65)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(22, 137, 86)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 130, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(14, 108, 94)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(65, 144, 58)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(29, 122, 79)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(86, 151, 50)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(25, 104, 72)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(43, 140, 101)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},candy:{dark:[{color:"rgb(240, 70, 170)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 90, 140)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(215, 60, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 110, 180)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(200, 80, 240)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(250, 60, 150)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(230, 120, 220)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(245, 85, 165)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(210, 70, 230)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 50, 122)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 65, 101)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(155, 43, 144)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(184, 79, 130)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(144, 58, 173)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(180, 43, 108)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(166, 86, 158)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(176, 61, 119)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(151, 50, 166)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ice:{dark:[{color:"rgb(90, 200, 240)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 175, 230)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(130, 220, 250)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(70, 190, 215)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(110, 210, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(50, 165, 220)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(150, 230, 250)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(85, 195, 235)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(65, 180, 245)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(65, 144, 173)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(43, 126, 166)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(94, 158, 180)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(50, 137, 155)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(79, 151, 184)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(36, 119, 158)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(108, 166, 180)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(61, 140, 169)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(47, 130, 176)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(240, 190, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 210, 90)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(225, 165, 40)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(250, 200, 70)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 225, 120)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(230, 175, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(245, 205, 85)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 155, 35)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 215, 100)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 137, 43)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 151, 65)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(162, 119, 29)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 144, 50)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(184, 162, 86)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(166, 126, 36)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(176, 148, 61)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(155, 112, 25)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(184, 155, 72)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function Bb(e,t,r){return Db[e][t?"dark":"light"].map(o=>{let i=o.offsetX===0?"":o.offsetX>0?` + ${o.offsetX}px`:` - ${Math.abs(o.offsetX)}px`,a=o.offsetY===0?"":o.offsetY>0?` + ${o.offsetY}px`:` - ${Math.abs(o.offsetY)}px`;return`radial-gradient(ellipse calc(${o.sizeW}px * var(--beam-w-${r})) calc(${o.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${i}) calc(100%${a}), ${o.color}, transparent)`}).join(`,
       `)}var Xb={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],forest:[{color:"rgba(46, 160, 90,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(30, 190, 120,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(70, 180, 70,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(20, 150, 130,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(90, 200, 80,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(40, 170, 110,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(120, 210, 70,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(35, 145, 100,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(60, 195, 140,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],candy:[{color:"rgba(240, 70, 170,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 90, 140,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(215, 60, 200,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 110, 180,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(200, 80, 240,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(250, 60, 150,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(230, 120, 220,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(245, 85, 165,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(210, 70, 230,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ice:[{color:"rgba(90, 200, 240,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 175, 230,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(130, 220, 250,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(70, 190, 215,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(110, 210, 255,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(50, 165, 220,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(150, 230, 250,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(85, 195, 235,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(65, 180, 245,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(240, 190, 60,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 210, 90,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(225, 165, 40,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(250, 200, 70,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 225, 120,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(230, 175, 50,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(245, 205, 85,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 155, 35,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 215, 100,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function Gb(e,t){return Xb[e].map(n=>{let o=n.offsetX===0?"":n.offsetX>0?` + ${n.offsetX}px`:` - ${Math.abs(n.offsetX)}px`,i=n.offsetY===0?"":` - ${Math.abs(n.offsetY)}px`;return`radial-gradient(ellipse calc(${n.sizeW}px * var(--beam-w-${t})) calc(${n.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${o}) calc(100%${i}), ${n.color}, transparent)`}).join(`,
    `)}var Yb={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},forest:{dark:{spikes:[{color1:"rgb(46, 160, 90)",color2:"rgb(30, 190, 120)"},{color1:"rgba(70, 180, 70,, 0.59)",color2:"rgba(20, 150, 130,, 0.29)"},{color1:"rgb(90, 200, 80)",color2:"rgb(40, 170, 110)"},{color1:"rgba(120, 210, 70,, 0.91)",color2:"rgba(35, 145, 100,, 0.45)"},{color1:"rgb(60, 195, 140)",color2:"rgb(46, 160, 90)"}]},light:{spikes:[{color1:"rgb(33, 115, 65)",color2:"rgba(22, 137, 86,, 0.8)"},{color1:"rgba(50, 130, 50,, 0.7)",color2:"rgba(14, 108, 94,, 0.46)"},{color1:"rgb(65, 144, 58)",color2:"rgba(29, 122, 79,, 0.82)"},{color1:"rgb(86, 151, 50)",color2:"rgba(25, 104, 72,, 0.7)"},{color1:"rgb(43, 140, 101)",color2:"rgba(33, 115, 65,, 0.78)"}]}},candy:{dark:{spikes:[{color1:"rgb(240, 70, 170)",color2:"rgb(255, 90, 140)"},{color1:"rgba(215, 60, 200,, 0.59)",color2:"rgba(255, 110, 180,, 0.29)"},{color1:"rgb(200, 80, 240)",color2:"rgb(250, 60, 150)"},{color1:"rgba(230, 120, 220,, 0.91)",color2:"rgba(245, 85, 165,, 0.45)"},{color1:"rgb(210, 70, 230)",color2:"rgb(240, 70, 170)"}]},light:{spikes:[{color1:"rgb(173, 50, 122)",color2:"rgba(184, 65, 101,, 0.8)"},{color1:"rgba(155, 43, 144,, 0.7)",color2:"rgba(184, 79, 130,, 0.46)"},{color1:"rgb(144, 58, 173)",color2:"rgba(180, 43, 108,, 0.82)"},{color1:"rgb(166, 86, 158)",color2:"rgba(176, 61, 119,, 0.7)"},{color1:"rgb(151, 50, 166)",color2:"rgba(173, 50, 122,, 0.78)"}]}},ice:{dark:{spikes:[{color1:"rgb(90, 200, 240)",color2:"rgb(60, 175, 230)"},{color1:"rgba(130, 220, 250,, 0.59)",color2:"rgba(70, 190, 215,, 0.29)"},{color1:"rgb(110, 210, 255)",color2:"rgb(50, 165, 220)"},{color1:"rgba(150, 230, 250,, 0.91)",color2:"rgba(85, 195, 235,, 0.45)"},{color1:"rgb(65, 180, 245)",color2:"rgb(90, 200, 240)"}]},light:{spikes:[{color1:"rgb(65, 144, 173)",color2:"rgba(43, 126, 166,, 0.8)"},{color1:"rgba(94, 158, 180,, 0.7)",color2:"rgba(50, 137, 155,, 0.46)"},{color1:"rgb(79, 151, 184)",color2:"rgba(36, 119, 158,, 0.82)"},{color1:"rgb(108, 166, 180)",color2:"rgba(61, 140, 169,, 0.7)"},{color1:"rgb(47, 130, 176)",color2:"rgba(65, 144, 173,, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(240, 190, 60)",color2:"rgb(255, 210, 90)"},{color1:"rgba(225, 165, 40,, 0.59)",color2:"rgba(250, 200, 70,, 0.29)"},{color1:"rgb(255, 225, 120)",color2:"rgb(230, 175, 50)"},{color1:"rgba(245, 205, 85,, 0.91)",color2:"rgba(215, 155, 35,, 0.45)"},{color1:"rgb(255, 215, 100)",color2:"rgb(240, 190, 60)"}]},light:{spikes:[{color1:"rgb(173, 137, 43)",color2:"rgba(184, 151, 65,, 0.8)"},{color1:"rgba(162, 119, 29,, 0.7)",color2:"rgba(180, 144, 50,, 0.46)"},{color1:"rgb(184, 162, 86)",color2:"rgba(166, 126, 36,, 0.82)"},{color1:"rgb(176, 148, 61)",color2:"rgba(155, 112, 25,, 0.7)"},{color1:"rgb(184, 155, 72)",color2:"rgba(173, 137, 43,, 0.78)"}]}}};function bl(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${t})`;let n=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${t})`:e}function Zr(e,t){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*t).toFixed(2)})`;let n=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${t.toFixed(2)})`:e}function Ub(e,t,r){let n=Wb(e,t),o=Yb[e][t?"dark":"light"],i=e==="mono",a=i?.14:1,l=i?Zr(n.primary,.14):n.primary,s=i?Zr(n.primary,.09):n.primary,u=i?Zr(n.secondary,.12):n.secondary,d=i?bl(n.secondary,.06):bl(n.secondary,.49),f=o.spikes.map(O=>i?{color1:Zr(O.color1,a),color2:Zr(O.color2,a*.7)}:O),m=i?"12px":"0.8px",h=i?"14px":"2px",x=i?"12px":"1.2px",b=i?"10px":"0.6px",w=i?"42px":"92px",c=i?"38px":"72px",p=i?"40px":"85px",g=i?"32px":"60px",v=i?"12px":"1px",y=i?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",k=i?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",z=i?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",_=i?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",T=i?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",C=i?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(t)return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${w} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${l}, ${s} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${u}, ${d} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${c} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${f[0].color1}, ${f[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${f[1].color1}, ${f[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${f[2].color1}, ${f[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${f[3].color1}, ${f[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${b} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${f[4].color1}, ${f[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${y} 0%, ${k} 20%, ${z} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${_} 0%, ${T} 25%, ${C} 55%, transparent 80%)`;{let O=i?Zr(n.primary,.11):bl(n.primary,.85),D=i?Zr(n.secondary,.09):bl(n.secondary,.7);return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(${w} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${l}, ${O} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${u}, ${D} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${c} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${f[0].color1}, ${f[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${f[1].color1}, ${f[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike2-${r})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${f[2].color1}, ${f[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${f[3].color1}, ${f[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${v} * (2 - var(--beam-spike-${r})) * var(--beam-spike-mul, 1)) calc(${g} * var(--beam-h-${r}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${f[4].color1}, ${f[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}var O1=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],Vb=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],jb=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],E1=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],Qb=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function qb(e,t,r){let n=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return`rgba(${n?`${n[1]}, ${n[2]}, ${n[3]}`:"255, 255, 255"}, var(--bop-${t}-${r}))`}function Wc(e,t,r,n,o,i,a,l){return`radial-gradient(ellipse calc(${t}px * var(--bw${n}-${l}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r}px * var(--bh${n}-${l}) * var(--bgh-${l}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${i} + var(--bx${n}-${l})) calc(${a} + var(--by${n}-${l})), ${qb(e,o,l)}, transparent)`}function Kb(e,t){return Jr[e].border.map((r,n)=>{let{region:o,quad:i}=O1[n],[a,l]=r.pos.split(" "),[s,u]=r.size.split(" ").map(parseFloat);return Wc(r.color,s,u,o,i,a,l,t)}).join(`,
    `)}function Zb(e,t,r){let o=Jr[e].border.map((u,d)=>{let{region:f,quad:m}=O1[d],[h,x]=u.pos.split(" "),[b,w]=Vb[d];return Wc(u.color,b,w,f,m,h,x,t)}),i=r?"255, 255, 255":"0, 0, 0",a=r?.18:.08,s=[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([u,d,f])=>`radial-gradient(ellipse 60px 60px at ${u} ${d}, rgba(${i}, calc(${a} * var(--bop-${f}-${t}))), transparent 70%)`);return[...o,...s].join(`,
    `)}function T1(e,t,r){let n=Jr[t].border;return e.map(o=>{let i=n[o.ci],[a,l]=i.pos.split(" ");return Wc(i.color,o.w,o.h,o.region,o.quad,o.x??a,o.y??l,r)}).join(`,
    `)}function I1(e,t,r){let n=Jr[t].border,o=+r.toFixed(3);return e.map(i=>{let a=n[i.ci],[l,s]=a.pos.split(" "),u=i.x??l,d=i.y??s,f=a.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),m=f?`${f[1]}, ${f[2]}, ${f[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${i.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${i.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${u} ${d}, rgba(${m}, ${o}), transparent)`}).join(`,
    `)}function di(e){return`
[data-beam="${e}"][data-paused],
[data-beam="${e}"][data-paused]::after,
[data-beam="${e}"][data-paused]::before,
[data-beam="${e}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function F1(e){let t=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"],r=["bx1","by1","bx2","by2","bx3","by3"],n=t.map(i=>`@property --${i}-${e} {
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
}`}function H1(e,t,r){let n=t==="dark",o=r/2.3;return e==="pulse-inner"?{sp:.28,dr:n?33:40,op:n?.48:.45,gh:n?.34:.22,bs:(n?1.9:2.6)*o,ss:(n?2.6:4.6)*o,ghs:(n?2.4:5.5)*o,huePeriod:16}:{sp:n?.28:.36,dr:n?14:19,op:n?.46:0,gh:n?.16:.58,bs:(n?2.3:3.7)*o,ss:(n?6.4:4.6)*o,ghs:(n?2.4:3.8)*o,huePeriod:14}}function vl(e,t,r){return`  animation: ${t}-${e} ${r}s ease forwards;`}function zr(e,t=1){return Math.max(.5,Math.round(e*t*100)/100)}function A1(e){let{size:t}=e;return t==="line"?nx(e):t==="sm"?Jb(e):t==="pulse-inner"?tx(e):t==="pulse-outside"?rx(e):ex(e)}function Jb(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:l,innerShadow:s,colorVariant:u,staticColors:d,brightness:f,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,w=Math.max(0,r-n),c=u==="mono"?.5:1,p=i*c,g=a*c,v=l*c,y=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
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
      )`,T=Fb(u),C=Hb(u),O=z?`conic-gradient(
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
  border-radius: ${w}px;
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
  ${y}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${C};
  box-shadow: inset 0 0 5px 1px ${s};
  -webkit-mask-image: ${D};
  -webkit-mask-composite: source-over;
  mask-image: ${D};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${g.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${y}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${w}px;
  clip-path: inset(0 round ${r}px);
  background: ${O};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  filter: blur(${zr(8,b)}px) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)});
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
${di(t)}
`}function ex(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:l,innerShadow:s,colorVariant:u,staticColors:d,brightness:f,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,w=Math.max(0,r-n),c=u==="mono"?.5:1,p=i*c,g=a*c,v=l*c,y=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
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
      )`,T=Ab(u),C=Nb(u),O=z?`conic-gradient(
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
  border-radius: ${w}px;
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
  ${y}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${C};
  box-shadow: inset 0 0 9px 1px ${s};
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
  ${y}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${w}px;
  clip-path: inset(0 round ${r}px);
  background: ${O};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  filter: blur(${zr(8,b)}px) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)});
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
${di(t)}
`}function tx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:l,colorVariant:s,staticColors:u,brightness:d,saturation:f,hueRange:m,theme:h,glowSize:x=1}=e,b=h==="dark",w=s==="mono"?.5:1,c=(i*w).toFixed(2),p=(a*w).toFixed(2),g=(l*w).toFixed(2),{op:v}=H1("pulse-inner",h,o),y=zr(8,x),k=d.toFixed(2),z=f.toFixed(2),_=u?`filter: brightness(${k}) saturate(${z});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${k}) saturate(${z});`,T=u?`filter: blur(${y}px) brightness(${k}) saturate(${z});`:`filter: blur(${y}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${k}) saturate(${z});`,C=Kb(s,t),O=Zb(s,t,b),D=I1(jb,s,1-v*.5);return`
${F1(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${vl(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${vl(t,"beam-fade-out",.5)}
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
  opacity: calc(var(--beam-opacity-${t}) * ${c} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
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
${di(t)}

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
`}function rx(e){let{id:t,borderRadius:r,duration:n,strokeOpacity:o,innerOpacity:i,bloomOpacity:a,colorVariant:l,staticColors:s,brightness:u,saturation:d,hueRange:f,theme:m,hairlineOpacity:h=0,glowSize:x=1}=e,b=m==="dark",w=l==="mono"?.5:1,c=(o*w).toFixed(2),p=(i*w).toFixed(2),g=(a*w).toFixed(2),v=b?"70, 70, 70":"0, 0, 0",y=h.toFixed(2),k=`linear-gradient(rgba(${v}, ${y}), rgba(${v}, ${y}))`,{op:z}=H1("pulse-outside",m,n),_=.95,T=.9,C=zr(b?3:6,x),O=zr(b?22.5:15,x),D=u.toFixed(2),$=d.toFixed(2),P=s?`filter: brightness(${D}) saturate(${$});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${D}) saturate(${$});`,V=`brightness(var(--beam-glow-brightness, ${D})) saturate(var(--beam-glow-saturate, ${$}))`,B=s?`filter: blur(var(--beam-core-blur, ${C}px)) ${V};`:`filter: blur(var(--beam-core-blur, ${C}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${V};`,L=s?`filter: blur(var(--beam-bloom-blur, ${O}px)) ${V};`:`filter: blur(var(--beam-bloom-blur, ${O}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${V};`,W=T1(E1,l,t),A=T1(E1,l,t),K=I1(Qb,l,1-z*.5),Y=h>0?`${W},
    ${k}`:W;return`
${F1(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${vl(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${vl(t,"beam-fade-out",.5)}
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
  background: ${Y};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${c} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${P}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${r+10}px;
  background: ${A};
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
${di(t)}

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
`}function nx(e){let{id:t,borderRadius:r,borderWidth:n,duration:o,strokeOpacity:i,innerOpacity:a,bloomOpacity:l,innerShadow:s,colorVariant:u,staticColors:d,brightness:f,saturation:m,hueRange:h,theme:x,glowSize:b=1}=e,w=Math.max(0,r-n),c=x==="dark",p=i,g=a,v=l,y=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,k=d?"":`animation: beam-hue-shift-bloom-${t} 8s ease-in-out infinite;`,z=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${t} {
  0% { filter: blur(${zr(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  50% { filter: blur(${zr(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h+10}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
  100% { filter: blur(${zr(8,b)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h+10}deg)) brightness(${f.toFixed(2)}) saturate(${m.toFixed(2)}); }
}`,_=c?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,T=Bb(u,c,t),C=Gb(u,t),O=Ub(u,c,t),D=u==="mono"?"filter: blur(6px);":"";return`
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
  border-radius: ${w}px;
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
  ${y}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${C};
  box-shadow: inset 0 0 9px 1px ${s};
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
  ${y}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${w}px;
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
${di(t)}
`}var _r=et(Kr(),1);function N1({radius:e,theme:t,running:r,paused:n}){let o=(0,Ot.useRef)(null),i=(0,Ot.useId)().replace(/:/g,"-"),a=(0,Ot.useMemo)(()=>Array.from({length:4},(l,s)=>{let u=`ctmb-cache-${i}-${s}`,d=xl.md[t],f=A1({id:u,size:"md",theme:t,colorVariant:"ocean",borderRadius:e,borderWidth:L1.md.borderWidth,duration:16,...d,staticColors:!0,brightness:1.5,saturation:.9,hueRange:0,glowSize:1.3});return{key:u,css:f+`
[data-beam="${u}"][data-active]{animation:none!important;--beam-angle-${u}:${s*90}deg;--beam-opacity-${u}:1}`}}),[i,e,t]);return(0,Ot.useEffect)(()=>{for(let l of o.current?.getAnimations({subtree:!0})??[])l.animationName==="ctmb-beam-crossfade"&&(l.updatePlaybackRate(r?1.5:.8),n?l.pause():l.play())},[n,r,a]),(0,_r.jsx)("div",{ref:o,className:"ctmb-cached-beam",style:{borderRadius:e,opacity:r?1:.82},children:a.map(({key:l,css:s},u)=>(0,_r.jsxs)(Ot.default.Fragment,{children:[(0,_r.jsx)("style",{children:s}),(0,_r.jsx)("div",{className:"ctmb-beam-frame",style:{animationDelay:`${-u*4}s`},children:(0,_r.jsx)("div",{"data-beam":l,"data-active":"",style:{width:"100%",height:"100%",borderRadius:e},children:(0,_r.jsx)("div",{"data-beam-bloom":""})})})]},l))})}var pi=et(Kr(),1),Bc=new Set,Mr=0,Xc=!1,yl=!1,Gc=class extends wl.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(t){this.props.onError?.(t)}render(){return this.state.failed?null:this.props.children}};function ox({neighbors:e,radius:t,variant:r,theme:n,strength:o,paused:i,preset:a,glowPortal:l}){let s=(0,wl.useRef)(null);return(0,pi.jsx)(Ac,{ref:s,preset:a,variant:r,theme:n,borderRadius:t,strength:o,paused:i,reflectionTargets:e,glowPortal:l,innerShadow:!0,style:{width:"100%",height:"100%"},children:(0,pi.jsx)("span",{style:{display:"block",width:"100%",height:"100%",borderRadius:t}})})}var ix=N1;function D1(e,t,r,n){let o=(0,W1.createRoot)(t,{identifierPrefix:"ctmb-"}),i=s=>(0,Dc.flushSync)(()=>o.render((0,pi.jsx)(Gc,{onError:n,children:(0,pi.jsx)(e,{...s})}))),a=!0,l={update:i,dispose(){a&&(a=!1,(0,Dc.flushSync)(()=>o.unmount()),Bc.delete(l))}};return Bc.add(l),i(r),l}var o5=(e,t,r)=>D1(ox,e,t,r),i5=(e,t,r)=>D1(ix,e,t,r);function a5(){yl||(yl=!0,bm({enabled:!1}),g1({enabled:!1}),$1(),Gp())}function l5(e){if(Xc=e,Mr&&cancelAnimationFrame(Mr),Mr=0,!e){tc();return}let t=()=>{Mr=0,!(!yl||!Xc||!S)&&([...S.instances].some(r=>r.visible&&!r.everCopied)?(tc(),Mr=requestAnimationFrame(t)):Jp())};t()}function s5(e){om(e?1e3/12:1e3/6)}function u5(){return{webgl:!!S,instances:S?.instances.size??0,reflections:v1(),frames:S?.frameCount??0,...im(),paused:Xc}}function c5(){yl=!1,Mr&&cancelAnimationFrame(Mr),Mr=0;for(let e of[...Bc])e.dispose();x1(),w1(),Yp(),document.getElementById("ctmb-mfx-bend-style")?.remove(),R1()}export{c5 as disposeRuntime,b1 as invalidateReflectionGeometry,Uu as isMetalFxSupported,i5 as mountBeam,o5 as mountMetal,u5 as runtimeState,s5 as setActivity,l5 as setMotionPaused,a5 as startRuntime};
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
