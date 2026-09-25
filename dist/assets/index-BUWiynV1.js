(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))h(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function l(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function h(c){if(c.ep)return;c.ep=!0;const f=l(c);fetch(c.href,f)}})();var $r={exports:{}},$i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function zg(){if(rf)return $i;rf=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(h,c,f){var p=null;if(f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),"key"in c){f={};for(var R in c)R!=="key"&&(f[R]=c[R])}else f=c;return c=f.ref,{$$typeof:r,type:h,key:p,ref:c!==void 0?c:null,props:f}}return $i.Fragment=i,$i.jsx=l,$i.jsxs=l,$i}var hf;function Ug(){return hf||(hf=1,$r.exports=zg()),$r.exports}var E=Ug(),Pr={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function xg(){if(uf)return K;uf=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),j=Symbol.iterator;function V(y){return y===null||typeof y!="object"?null:(y=j&&y[j]||y["@@iterator"],typeof y=="function"?y:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},de=Object.assign,Oe={};function ue(y,C,q){this.props=y,this.context=C,this.refs=Oe,this.updater=q||te}ue.prototype.isReactComponent={},ue.prototype.setState=function(y,C){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,C,"setState")},ue.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function Ne(){}Ne.prototype=ue.prototype;function pe(y,C,q){this.props=y,this.context=C,this.refs=Oe,this.updater=q||te}var ve=pe.prototype=new Ne;ve.constructor=pe,de(ve,ue.prototype),ve.isPureReactComponent=!0;var le=Array.isArray,B={H:null,A:null,T:null,S:null},be=Object.prototype.hasOwnProperty;function Qe(y,C,q,L,I,ne){return q=ne.ref,{$$typeof:r,type:y,key:C,ref:q!==void 0?q:null,props:ne}}function rt(y,C){return Qe(y.type,C,void 0,void 0,void 0,y.props)}function D(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function W(y){var C={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(q){return C[q]})}var ht=/\/+/g;function jt(y,C){return typeof y=="object"&&y!==null&&y.key!=null?W(""+y.key):C.toString(36)}function Nt(){}function Lt(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Nt,Nt):(y.status="pending",y.then(function(C){y.status==="pending"&&(y.status="fulfilled",y.value=C)},function(C){y.status==="pending"&&(y.status="rejected",y.reason=C)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Je(y,C,q,L,I){var ne=typeof y;(ne==="undefined"||ne==="boolean")&&(y=null);var F=!1;if(y===null)F=!0;else switch(ne){case"bigint":case"string":case"number":F=!0;break;case"object":switch(y.$$typeof){case r:case i:F=!0;break;case H:return F=y._init,Je(F(y._payload),C,q,L,I)}}if(F)return I=I(y),F=L===""?"."+jt(y,0):L,le(I)?(q="",F!=null&&(q=F.replace(ht,"$&/")+"/"),Je(I,C,q,"",function(Re){return Re})):I!=null&&(D(I)&&(I=rt(I,q+(I.key==null||y&&y.key===I.key?"":(""+I.key).replace(ht,"$&/")+"/")+F)),C.push(I)),1;F=0;var Ke=L===""?".":L+":";if(le(y))for(var se=0;se<y.length;se++)L=y[se],ne=Ke+jt(L,se),F+=Je(L,C,q,ne,I);else if(se=V(y),typeof se=="function")for(y=se.call(y),se=0;!(L=y.next()).done;)L=L.value,ne=Ke+jt(L,se++),F+=Je(L,C,q,ne,I);else if(ne==="object"){if(typeof y.then=="function")return Je(Lt(y),C,q,L,I);throw C=String(y),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return F}function M(y,C,q){if(y==null)return y;var L=[],I=0;return Je(y,L,"","",function(ne){return C.call(q,ne,I++)}),L}function Q(y){if(y._status===-1){var C=y._result;C=C(),C.then(function(q){(y._status===0||y._status===-1)&&(y._status=1,y._result=q)},function(q){(y._status===0||y._status===-1)&&(y._status=2,y._result=q)}),y._status===-1&&(y._status=0,y._result=C)}if(y._status===1)return y._result.default;throw y._result}var Z=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function fe(){}return K.Children={map:M,forEach:function(y,C,q){M(y,function(){C.apply(this,arguments)},q)},count:function(y){var C=0;return M(y,function(){C++}),C},toArray:function(y){return M(y,function(C){return C})||[]},only:function(y){if(!D(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},K.Component=ue,K.Fragment=l,K.Profiler=c,K.PureComponent=pe,K.StrictMode=h,K.Suspense=k,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,K.act=function(){throw Error("act(...) is not supported in production builds of React.")},K.cache=function(y){return function(){return y.apply(null,arguments)}},K.cloneElement=function(y,C,q){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var L=de({},y.props),I=y.key,ne=void 0;if(C!=null)for(F in C.ref!==void 0&&(ne=void 0),C.key!==void 0&&(I=""+C.key),C)!be.call(C,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&C.ref===void 0||(L[F]=C[F]);var F=arguments.length-2;if(F===1)L.children=q;else if(1<F){for(var Ke=Array(F),se=0;se<F;se++)Ke[se]=arguments[se+2];L.children=Ke}return Qe(y.type,I,void 0,void 0,ne,L)},K.createContext=function(y){return y={$$typeof:p,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:f,_context:y},y},K.createElement=function(y,C,q){var L,I={},ne=null;if(C!=null)for(L in C.key!==void 0&&(ne=""+C.key),C)be.call(C,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(I[L]=C[L]);var F=arguments.length-2;if(F===1)I.children=q;else if(1<F){for(var Ke=Array(F),se=0;se<F;se++)Ke[se]=arguments[se+2];I.children=Ke}if(y&&y.defaultProps)for(L in F=y.defaultProps,F)I[L]===void 0&&(I[L]=F[L]);return Qe(y,ne,void 0,void 0,null,I)},K.createRef=function(){return{current:null}},K.forwardRef=function(y){return{$$typeof:R,render:y}},K.isValidElement=D,K.lazy=function(y){return{$$typeof:H,_payload:{_status:-1,_result:y},_init:Q}},K.memo=function(y,C){return{$$typeof:T,type:y,compare:C===void 0?null:C}},K.startTransition=function(y){var C=B.T,q={};B.T=q;try{var L=y(),I=B.S;I!==null&&I(q,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(fe,Z)}catch(ne){Z(ne)}finally{B.T=C}},K.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},K.use=function(y){return B.H.use(y)},K.useActionState=function(y,C,q){return B.H.useActionState(y,C,q)},K.useCallback=function(y,C){return B.H.useCallback(y,C)},K.useContext=function(y){return B.H.useContext(y)},K.useDebugValue=function(){},K.useDeferredValue=function(y,C){return B.H.useDeferredValue(y,C)},K.useEffect=function(y,C){return B.H.useEffect(y,C)},K.useId=function(){return B.H.useId()},K.useImperativeHandle=function(y,C,q){return B.H.useImperativeHandle(y,C,q)},K.useInsertionEffect=function(y,C){return B.H.useInsertionEffect(y,C)},K.useLayoutEffect=function(y,C){return B.H.useLayoutEffect(y,C)},K.useMemo=function(y,C){return B.H.useMemo(y,C)},K.useOptimistic=function(y,C){return B.H.useOptimistic(y,C)},K.useReducer=function(y,C,q){return B.H.useReducer(y,C,q)},K.useRef=function(y){return B.H.useRef(y)},K.useState=function(y){return B.H.useState(y)},K.useSyncExternalStore=function(y,C,q){return B.H.useSyncExternalStore(y,C,q)},K.useTransition=function(){return B.H.useTransition()},K.version="19.0.0",K}var cf;function fh(){return cf||(cf=1,Pr.exports=xg()),Pr.exports}var Ve=fh(),eh={exports:{}},Pi={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df;function Bg(){return df||(df=1,function(r){function i(M,Q){var Z=M.length;M.push(Q);e:for(;0<Z;){var fe=Z-1>>>1,y=M[fe];if(0<c(y,Q))M[fe]=Q,M[Z]=y,Z=fe;else break e}}function l(M){return M.length===0?null:M[0]}function h(M){if(M.length===0)return null;var Q=M[0],Z=M.pop();if(Z!==Q){M[0]=Z;e:for(var fe=0,y=M.length,C=y>>>1;fe<C;){var q=2*(fe+1)-1,L=M[q],I=q+1,ne=M[I];if(0>c(L,Z))I<y&&0>c(ne,L)?(M[fe]=ne,M[I]=Z,fe=I):(M[fe]=L,M[q]=Z,fe=q);else if(I<y&&0>c(ne,Z))M[fe]=ne,M[I]=Z,fe=I;else break e}}return Q}function c(M,Q){var Z=M.sortIndex-Q.sortIndex;return Z!==0?Z:M.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var p=Date,R=p.now();r.unstable_now=function(){return p.now()-R}}var k=[],T=[],H=1,j=null,V=3,te=!1,de=!1,Oe=!1,ue=typeof setTimeout=="function"?setTimeout:null,Ne=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;function ve(M){for(var Q=l(T);Q!==null;){if(Q.callback===null)h(T);else if(Q.startTime<=M)h(T),Q.sortIndex=Q.expirationTime,i(k,Q);else break;Q=l(T)}}function le(M){if(Oe=!1,ve(M),!de)if(l(k)!==null)de=!0,Lt();else{var Q=l(T);Q!==null&&Je(le,Q.startTime-M)}}var B=!1,be=-1,Qe=5,rt=-1;function D(){return!(r.unstable_now()-rt<Qe)}function W(){if(B){var M=r.unstable_now();rt=M;var Q=!0;try{e:{de=!1,Oe&&(Oe=!1,Ne(be),be=-1),te=!0;var Z=V;try{t:{for(ve(M),j=l(k);j!==null&&!(j.expirationTime>M&&D());){var fe=j.callback;if(typeof fe=="function"){j.callback=null,V=j.priorityLevel;var y=fe(j.expirationTime<=M);if(M=r.unstable_now(),typeof y=="function"){j.callback=y,ve(M),Q=!0;break t}j===l(k)&&h(k),ve(M)}else h(k);j=l(k)}if(j!==null)Q=!0;else{var C=l(T);C!==null&&Je(le,C.startTime-M),Q=!1}}break e}finally{j=null,V=Z,te=!1}Q=void 0}}finally{Q?ht():B=!1}}}var ht;if(typeof pe=="function")ht=function(){pe(W)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Nt=jt.port2;jt.port1.onmessage=W,ht=function(){Nt.postMessage(null)}}else ht=function(){ue(W,0)};function Lt(){B||(B=!0,ht())}function Je(M,Q){be=ue(function(){M(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_continueExecution=function(){de||te||(de=!0,Lt())},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return V},r.unstable_getFirstCallbackNode=function(){return l(k)},r.unstable_next=function(M){switch(V){case 1:case 2:case 3:var Q=3;break;default:Q=V}var Z=V;V=Q;try{return M()}finally{V=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=V;V=M;try{return Q()}finally{V=Z}},r.unstable_scheduleCallback=function(M,Q,Z){var fe=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,M){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=Z+y,M={id:H++,callback:Q,priorityLevel:M,startTime:Z,expirationTime:y,sortIndex:-1},Z>fe?(M.sortIndex=Z,i(T,M),l(k)===null&&M===l(T)&&(Oe?(Ne(be),be=-1):Oe=!0,Je(le,Z-fe))):(M.sortIndex=y,i(k,M),de||te||(de=!0,Lt())),M},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(M){var Q=V;return function(){var Z=V;V=Q;try{return M.apply(this,arguments)}finally{V=Z}}}}(nh)),nh}var ff;function jg(){return ff||(ff=1,th.exports=Bg()),th.exports}var ah={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Lg(){if(mf)return Ge;mf=1;var r=fh();function i(k){var T="https://react.dev/errors/"+k;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)T+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+k+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var h={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(k,T,H){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:j==null?null:""+j,children:k,containerInfo:T,implementation:H}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(k,T){if(k==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Ge.createPortal=function(k,T){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(i(299));return f(k,T,null,H)},Ge.flushSync=function(k){var T=p.T,H=h.p;try{if(p.T=null,h.p=2,k)return k()}finally{p.T=T,h.p=H,h.d.f()}},Ge.preconnect=function(k,T){typeof k=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(k,T))},Ge.prefetchDNS=function(k){typeof k=="string"&&h.d.D(k)},Ge.preinit=function(k,T){if(typeof k=="string"&&T&&typeof T.as=="string"){var H=T.as,j=R(H,T.crossOrigin),V=typeof T.integrity=="string"?T.integrity:void 0,te=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;H==="style"?h.d.S(k,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:j,integrity:V,fetchPriority:te}):H==="script"&&h.d.X(k,{crossOrigin:j,integrity:V,fetchPriority:te,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Ge.preinitModule=function(k,T){if(typeof k=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var H=R(T.as,T.crossOrigin);h.d.M(k,{crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(k)},Ge.preload=function(k,T){if(typeof k=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var H=T.as,j=R(H,T.crossOrigin);h.d.L(k,H,{crossOrigin:j,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Ge.preloadModule=function(k,T){if(typeof k=="string")if(T){var H=R(T.as,T.crossOrigin);h.d.m(k,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(k)},Ge.requestFormReset=function(k){h.d.r(k)},Ge.unstable_batchedUpdates=function(k,T){return k(T)},Ge.useFormState=function(k,T,H){return p.H.useFormState(k,T,H)},Ge.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ge.version="19.0.0",Ge}var yf;function Yg(){if(yf)return ah.exports;yf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),ah.exports=Lg(),ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf;function qg(){if(gf)return Pi;gf=1;var r=jg(),i=fh(),l=Yg();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var f=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),te=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),le=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case R:return"Portal";case H:return"Profiler";case T:return"StrictMode";case Oe:return"Suspense";case ue:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case te:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case de:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=Object.assign,ht,jt;function Nt(e){if(ht===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",jt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+jt}var Lt=!1;function Je(e,t){if(!e||Lt)return"";Lt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(_){var S=_}Reflect.construct(e,[],N)}else{try{N.call()}catch(_){S=_}e.call(N.prototype)}}else{try{throw Error()}catch(_){S=_}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(_){if(_&&S&&typeof _.stack=="string")return[_.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),u=s[0],d=s[1];if(u&&d){var m=u.split(`
`),b=d.split(`
`);for(o=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;o<b.length&&!b[o].includes("DetermineComponentFrameRoot");)o++;if(a===m.length||o===b.length)for(a=m.length-1,o=b.length-1;1<=a&&0<=o&&m[a]!==b[o];)o--;for(;1<=a&&0<=o;a--,o--)if(m[a]!==b[o]){if(a!==1||o!==1)do if(a--,o--,0>o||m[a]!==b[o]){var A=`
`+m[a].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=a&&0<=o);break}}}finally{Lt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Nt(n):""}function M(e){switch(e.tag){case 26:case 27:case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return e=Je(e.type,!1),e;case 11:return e=Je(e.type.render,!1),e;case 1:return e=Je(e.type,!0),e;default:return""}}function Q(e){try{var t="";do t+=M(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Z(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(Z(e)!==e)throw Error(h(188))}function C(e){var t=e.alternate;if(!t){if(t=Z(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return y(o),e;if(s===a)return y(o),t;s=s.sibling}throw Error(h(188))}if(n.return!==a.return)n=o,a=s;else{for(var u=!1,d=o.child;d;){if(d===n){u=!0,n=o,a=s;break}if(d===a){u=!0,a=o,n=s;break}d=d.sibling}if(!u){for(d=s.child;d;){if(d===n){u=!0,n=s,a=o;break}if(d===a){u=!0,a=s,n=o;break}d=d.sibling}if(!u)throw Error(h(189))}}if(n.alternate!==a)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=q(e),t!==null)return t;e=e.sibling}return null}var L=Array.isArray,I=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},F=[],Ke=-1;function se(e){return{current:e}}function Re(e){0>Ke||(e.current=F[Ke],F[Ke]=null,Ke--)}function we(e,t){Ke++,F[Ke]=e.current,e.current=t}var Rt=se(null),ti=se(null),rn=se(null),fo=se(null);function mo(e,t){switch(we(rn,t),we(ti,e),we(Rt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Ud(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Ud(e),t=xd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Re(Rt),we(Rt,t)}function ua(){Re(Rt),Re(ti),Re(rn)}function Zs(e){e.memoizedState!==null&&we(fo,e);var t=Rt.current,n=xd(t,e.type);t!==n&&(we(ti,e),we(Rt,n))}function yo(e){ti.current===e&&(Re(Rt),Re(ti)),fo.current===e&&(Re(fo),Qi._currentValue=ne)}var Gs=Object.prototype.hasOwnProperty,Vs=r.unstable_scheduleCallback,Xs=r.unstable_cancelCallback,fm=r.unstable_shouldYield,mm=r.unstable_requestPaint,Ct=r.unstable_now,ym=r.unstable_getCurrentPriorityLevel,_h=r.unstable_ImmediatePriority,Ah=r.unstable_UserBlockingPriority,go=r.unstable_NormalPriority,gm=r.unstable_LowPriority,Oh=r.unstable_IdlePriority,bm=r.log,pm=r.unstable_setDisableYieldValue,ni=null,tt=null;function wm(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}function hn(e){if(typeof bm=="function"&&pm(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(ni,e)}catch{}}var nt=Math.clz32?Math.clz32:Em,vm=Math.log,Tm=Math.LN2;function Em(e){return e>>>=0,e===0?32:31-(vm(e)/Tm|0)|0}var bo=128,po=4194304;function xn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes,u=e.warmLanes;e=e.finishedLanes!==0;var d=n&134217727;return d!==0?(n=d&~o,n!==0?a=xn(n):(s&=d,s!==0?a=xn(s):e||(u=d&~u,u!==0&&(a=xn(u))))):(d=n&~o,d!==0?a=xn(d):s!==0?a=xn(s):e||(u=n&~u,u!==0&&(a=xn(u)))),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,u=t&-t,o>=u||o===32&&(u&4194176)!==0)?t:a}function ai(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sm(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nh(){var e=bo;return bo<<=1,(bo&4194176)===0&&(bo=128),e}function Rh(){var e=po;return po<<=1,(po&62914560)===0&&(po=4194304),e}function Qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function km(e,t,n,a,o,s){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,m=e.expirationTimes,b=e.hiddenUpdates;for(n=u&~n;0<n;){var A=31-nt(n),N=1<<A;d[A]=0,m[A]=-1;var S=b[A];if(S!==null)for(b[A]=null,A=0;A<S.length;A++){var _=S[A];_!==null&&(_.lane&=-536870913)}n&=~N}a!==0&&Ch(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(u&~t))}function Ch(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-nt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function Hh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-nt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Mh(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dh(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:tf(e.type))}function _m(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var un=Math.random().toString(36).slice(2),qe="__reactFiber$"+un,$e="__reactProps$"+un,ca="__reactContainer$"+un,Ks="__reactEvents$"+un,Am="__reactListeners$"+un,Om="__reactHandles$"+un,Ih="__reactResources$"+un,oi="__reactMarker$"+un;function Ws(e){delete e[qe],delete e[$e],delete e[Ks],delete e[Am],delete e[Om]}function Bn(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ca]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ld(e);e!==null;){if(n=e[qe])return n;e=Ld(e)}return t}e=n,n=e.parentNode}return null}function da(e){if(e=e[qe]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function si(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function fa(e){var t=e[Ih];return t||(t=e[Ih]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ze(e){e[oi]=!0}var zh=new Set,Uh={};function jn(e,t){ma(e,t),ma(e+"Capture",t)}function ma(e,t){for(Uh[e]=t,e=0;e<t.length;e++)zh.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xh={},Bh={};function Rm(e){return Gs.call(Bh,e)?!0:Gs.call(xh,e)?!1:Nm.test(e)?Bh[e]=!0:(xh[e]=!0,!1)}function vo(e,t,n){if(Rm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function To(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function qt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cm(e){var t=jh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){a=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=Cm(e))}function Lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=jh(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hm=/[\n"\\]/g;function ct(e){return e.replace(Hm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fs(e,t,n,a,o,s,u,d){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Js(e,u,ut(t)):n!=null?Js(e,u,ut(n)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+ut(d):e.removeAttribute("name")}function Yh(e,t,n,a,o,s,u,d){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+ut(n):"",t=t!=null?""+ut(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function Js(e,t,n){t==="number"&&So(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ya(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function qh(e,t,n){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ut(n):""}function Zh(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(h(92));if(L(a)){if(1<a.length)throw Error(h(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=ut(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Mm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Vh(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Gh(e,o,a)}else for(var s in t)t.hasOwnProperty(s)&&Gh(e,s,t[s])}function $s(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return Im.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ps=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ba=null,pa=null;function Xh(e){var t=da(e);if(t&&(e=t.stateNode)){var n=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[$e]||null;if(!o)throw Error(h(90));Fs(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Lh(a)}break e;case"textarea":qh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ya(e,!!n.multiple,t,!1)}}}var tl=!1;function Qh(e,t,n){if(tl)return e(t,n);tl=!0;try{var a=e(t);return a}finally{if(tl=!1,(ba!==null||pa!==null)&&(ls(),ba&&(t=ba,e=pa,pa=ba=null,Xh(t),e)))for(t=0;t<e.length;t++)Xh(e[t])}}function li(e,t){var n=e.stateNode;if(n===null)return null;var a=n[$e]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var nl=!1;if(Yt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){nl=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{nl=!1}var cn=null,al=null,_o=null;function Kh(){if(_o)return _o;var e,t=al,n=t.length,a,o="value"in cn?cn.value:cn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===o[s-a];a++);return _o=o.slice(e,1<a?1-a:void 0)}function Ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function Wh(){return!1}function Pe(e){function t(n,a,o,s,u){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:Wh,this.isPropagationStopped=Wh,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Pe(Ln),hi=W({},Ln,{view:0,detail:0}),zm=Pe(hi),il,ol,ui,Ro=W({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(il=e.screenX-ui.screenX,ol=e.screenY-ui.screenY):ol=il=0,ui=e),il)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Fh=Pe(Ro),Um=W({},Ro,{dataTransfer:0}),xm=Pe(Um),Bm=W({},hi,{relatedTarget:0}),sl=Pe(Bm),jm=W({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Lm=Pe(jm),Ym=W({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qm=Pe(Ym),Zm=W({},Ln,{data:0}),Jh=Pe(Zm),Gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xm[e])?!!t[e]:!1}function ll(){return Qm}var Km=W({},hi,{key:function(e){if(e.key){var t=Gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wm=Pe(Km),Fm=W({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Pe(Fm),Jm=W({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),$m=Pe(Jm),Pm=W({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=Pe(Pm),ty=W({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Pe(ty),ay=W({},Ln,{newState:0,oldState:0}),iy=Pe(ay),oy=[9,13,27,32],rl=Yt&&"CompositionEvent"in window,ci=null;Yt&&"documentMode"in document&&(ci=document.documentMode);var sy=Yt&&"TextEvent"in window&&!ci,Ph=Yt&&(!rl||ci&&8<ci&&11>=ci),eu=" ",tu=!1;function nu(e,t){switch(e){case"keyup":return oy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wa=!1;function ly(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function ry(e,t){if(wa)return e==="compositionend"||!rl&&nu(e,t)?(e=Kh(),_o=al=cn=null,wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ph&&t.locale!=="ko"?null:t.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hy[e.type]:t==="textarea"}function ou(e,t,n,a){ba?pa?pa.push(a):pa=[a]:ba=a,t=ds(t,"onChange"),0<t.length&&(n=new No("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var di=null,fi=null;function uy(e){Hd(e,0)}function Co(e){var t=si(e);if(Lh(t))return e}function su(e,t){if(e==="change")return t}var lu=!1;if(Yt){var hl;if(Yt){var ul="oninput"in document;if(!ul){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),ul=typeof ru.oninput=="function"}hl=ul}else hl=!1;lu=hl&&(!document.documentMode||9<document.documentMode)}function hu(){di&&(di.detachEvent("onpropertychange",uu),fi=di=null)}function uu(e){if(e.propertyName==="value"&&Co(fi)){var t=[];ou(t,fi,e,el(e)),Qh(uy,t)}}function cy(e,t,n){e==="focusin"?(hu(),di=t,fi=n,di.attachEvent("onpropertychange",uu)):e==="focusout"&&hu()}function dy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(fi)}function fy(e,t){if(e==="click")return Co(t)}function my(e,t){if(e==="input"||e==="change")return Co(t)}function yy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:yy;function mi(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Gs.call(t,o)||!at(e[o],t[o]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,t){var n=cu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cu(n)}}function fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=So(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gy(e,t){var n=mu(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&fu(t.ownerDocument.documentElement,t)){if(a!==null&&cl(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=t.textContent.length,s=Math.min(a.start,o);a=a.end===void 0?s:Math.min(a.end,o),!n.extend&&s>a&&(o=a,a=s,s=o),o=du(t,s);var u=du(t,a);o&&u&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==u.node||n.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),s>a?(n.addRange(e),n.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var by=Yt&&"documentMode"in document&&11>=document.documentMode,va=null,dl=null,yi=null,fl=!1;function yu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||va==null||va!==So(a)||(a=va,"selectionStart"in a&&cl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),yi&&mi(yi,a)||(yi=a,a=ds(dl,"onSelect"),0<a.length&&(t=new No("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Yn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ta={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionrun:Yn("Transition","TransitionRun"),transitionstart:Yn("Transition","TransitionStart"),transitioncancel:Yn("Transition","TransitionCancel"),transitionend:Yn("Transition","TransitionEnd")},ml={},gu={};Yt&&(gu=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function qn(e){if(ml[e])return ml[e];if(!Ta[e])return e;var t=Ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gu)return ml[e]=t[n];return e}var bu=qn("animationend"),pu=qn("animationiteration"),wu=qn("animationstart"),py=qn("transitionrun"),wy=qn("transitionstart"),vy=qn("transitioncancel"),vu=qn("transitionend"),Tu=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Et(e,t){Tu.set(e,t),jn(t,[e])}var dt=[],Ea=0,yl=0;function Ho(){for(var e=Ea,t=yl=Ea=0;t<e;){var n=dt[t];dt[t++]=null;var a=dt[t];dt[t++]=null;var o=dt[t];dt[t++]=null;var s=dt[t];if(dt[t++]=null,a!==null&&o!==null){var u=a.pending;u===null?o.next=o:(o.next=u.next,u.next=o),a.pending=o}s!==0&&Su(n,o,s)}}function Mo(e,t,n,a){dt[Ea++]=e,dt[Ea++]=t,dt[Ea++]=n,dt[Ea++]=a,yl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function gl(e,t,n,a){return Mo(e,t,n,a),Do(e)}function dn(e,t){return Mo(e,null,null,t),Do(e)}function Su(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;o&&t!==null&&e.tag===3&&(s=e.stateNode,o=31-nt(n),s=s.hiddenUpdates,e=s[o],e===null?s[o]=[t]:e.push(t),t.lane=n|536870912)}function Do(e){if(50<Li)throw Li=0,Er=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sa={},ku=new WeakMap;function ft(e,t){if(typeof e=="object"&&e!==null){var n=ku.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Q(t)},ku.set(e,t),t)}return{value:e,source:t,stack:Q(t)}}var ka=[],_a=0,Io=null,zo=0,mt=[],yt=0,Zn=null,Zt=1,Gt="";function Gn(e,t){ka[_a++]=zo,ka[_a++]=Io,Io=e,zo=t}function _u(e,t,n){mt[yt++]=Zt,mt[yt++]=Gt,mt[yt++]=Zn,Zn=e;var a=Zt;e=Gt;var o=32-nt(a)-1;a&=~(1<<o),n+=1;var s=32-nt(t)+o;if(30<s){var u=o-o%5;s=(a&(1<<u)-1).toString(32),a>>=u,o-=u,Zt=1<<32-nt(t)+o|n<<o|a,Gt=s+e}else Zt=1<<s|n<<o|a,Gt=e}function bl(e){e.return!==null&&(Gn(e,1),_u(e,1,0))}function pl(e){for(;e===Io;)Io=ka[--_a],ka[_a]=null,zo=ka[--_a],ka[_a]=null;for(;e===Zn;)Zn=mt[--yt],mt[yt]=null,Gt=mt[--yt],mt[yt]=null,Zt=mt[--yt],mt[yt]=null}var We=null,je=null,ie=!1,St=null,Ht=!1,wl=Error(h(519));function Vn(e){var t=Error(h(418,""));throw pi(ft(t,e)),wl}function Au(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[qe]=e,t[$e]=a,n){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(n=0;n<qi.length;n++)ee(qi[n],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":ee("invalid",t),Yh(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Eo(t);break;case"select":ee("invalid",t);break;case"textarea":ee("invalid",t),Zh(t,a.value,a.defaultValue,a.children),Eo(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||zd(t.textContent,n)?(a.popover!=null&&(ee("beforetoggle",t),ee("toggle",t)),a.onScroll!=null&&ee("scroll",t),a.onScrollEnd!=null&&ee("scrollend",t),a.onClick!=null&&(t.onclick=fs),t=!0):t=!1,t||Vn(e)}function Ou(e){for(We=e.return;We;)switch(We.tag){case 3:case 27:Ht=!0;return;case 5:case 13:Ht=!1;return;default:We=We.return}}function gi(e){if(e!==We)return!1;if(!ie)return Ou(e),ie=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||jr(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&je&&Vn(e),Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){je=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}je=null}}else je=We?_t(e.stateNode.nextSibling):null;return!0}function bi(){je=We=null,ie=!1}function pi(e){St===null?St=[e]:St.push(e)}var wi=Error(h(460)),Nu=Error(h(474)),vl={then:function(){}};function Ru(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Uo(){}function Cu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Uo,Uo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===wi?Error(h(483)):e;default:if(typeof t.status=="string")t.then(Uo,Uo);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===wi?Error(h(483)):e}throw vi=t,wi}}var vi=null;function Hu(){if(vi===null)throw Error(h(459));var e=vi;return vi=null,e}var Aa=null,Ti=0;function xo(e){var t=Ti;return Ti+=1,Aa===null&&(Aa=[]),Cu(Aa,e,t)}function Ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bo(e,t){throw t.$$typeof===f?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mu(e){var t=e._init;return t(e._payload)}function Du(e){function t(w,g){if(e){var v=w.deletions;v===null?(w.deletions=[g],w.flags|=16):v.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function a(w){for(var g=new Map;w!==null;)w.key!==null?g.set(w.key,w):g.set(w.index,w),w=w.sibling;return g}function o(w,g){return w=kn(w,g),w.index=0,w.sibling=null,w}function s(w,g,v){return w.index=v,e?(v=w.alternate,v!==null?(v=v.index,v<g?(w.flags|=33554434,g):v):(w.flags|=33554434,g)):(w.flags|=1048576,g)}function u(w){return e&&w.alternate===null&&(w.flags|=33554434),w}function d(w,g,v,O){return g===null||g.tag!==6?(g=mr(v,w.mode,O),g.return=w,g):(g=o(g,v),g.return=w,g)}function m(w,g,v,O){var z=v.type;return z===k?A(w,g,v.props.children,O,v.key):g!==null&&(g.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===pe&&Mu(z)===g.type)?(g=o(g,v.props),Ei(g,v),g.return=w,g):(g=ns(v.type,v.key,v.props,null,w.mode,O),Ei(g,v),g.return=w,g)}function b(w,g,v,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=yr(v,w.mode,O),g.return=w,g):(g=o(g,v.children||[]),g.return=w,g)}function A(w,g,v,O,z){return g===null||g.tag!==7?(g=ta(v,w.mode,O,z),g.return=w,g):(g=o(g,v),g.return=w,g)}function N(w,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=mr(""+g,w.mode,v),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case p:return v=ns(g.type,g.key,g.props,null,w.mode,v),Ei(v,g),v.return=w,v;case R:return g=yr(g,w.mode,v),g.return=w,g;case pe:var O=g._init;return g=O(g._payload),N(w,g,v)}if(L(g)||be(g))return g=ta(g,w.mode,v,null),g.return=w,g;if(typeof g.then=="function")return N(w,xo(g),v);if(g.$$typeof===te)return N(w,Po(w,g),v);Bo(w,g)}return null}function S(w,g,v,O){var z=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return z!==null?null:d(w,g,""+v,O);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case p:return v.key===z?m(w,g,v,O):null;case R:return v.key===z?b(w,g,v,O):null;case pe:return z=v._init,v=z(v._payload),S(w,g,v,O)}if(L(v)||be(v))return z!==null?null:A(w,g,v,O,null);if(typeof v.then=="function")return S(w,g,xo(v),O);if(v.$$typeof===te)return S(w,g,Po(w,v),O);Bo(w,v)}return null}function _(w,g,v,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return w=w.get(v)||null,d(g,w,""+O,z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case p:return w=w.get(O.key===null?v:O.key)||null,m(g,w,O,z);case R:return w=w.get(O.key===null?v:O.key)||null,b(g,w,O,z);case pe:var $=O._init;return O=$(O._payload),_(w,g,v,O,z)}if(L(O)||be(O))return w=w.get(v)||null,A(g,w,O,z,null);if(typeof O.then=="function")return _(w,g,v,xo(O),z);if(O.$$typeof===te)return _(w,g,v,Po(g,O),z);Bo(g,O)}return null}function U(w,g,v,O){for(var z=null,$=null,x=g,Y=g=0,Be=null;x!==null&&Y<v.length;Y++){x.index>Y?(Be=x,x=null):Be=x.sibling;var oe=S(w,x,v[Y],O);if(oe===null){x===null&&(x=Be);break}e&&x&&oe.alternate===null&&t(w,x),g=s(oe,g,Y),$===null?z=oe:$.sibling=oe,$=oe,x=Be}if(Y===v.length)return n(w,x),ie&&Gn(w,Y),z;if(x===null){for(;Y<v.length;Y++)x=N(w,v[Y],O),x!==null&&(g=s(x,g,Y),$===null?z=x:$.sibling=x,$=x);return ie&&Gn(w,Y),z}for(x=a(x);Y<v.length;Y++)Be=_(x,w,Y,v[Y],O),Be!==null&&(e&&Be.alternate!==null&&x.delete(Be.key===null?Y:Be.key),g=s(Be,g,Y),$===null?z=Be:$.sibling=Be,$=Be);return e&&x.forEach(function(Hn){return t(w,Hn)}),ie&&Gn(w,Y),z}function X(w,g,v,O){if(v==null)throw Error(h(151));for(var z=null,$=null,x=g,Y=g=0,Be=null,oe=v.next();x!==null&&!oe.done;Y++,oe=v.next()){x.index>Y?(Be=x,x=null):Be=x.sibling;var Hn=S(w,x,oe.value,O);if(Hn===null){x===null&&(x=Be);break}e&&x&&Hn.alternate===null&&t(w,x),g=s(Hn,g,Y),$===null?z=Hn:$.sibling=Hn,$=Hn,x=Be}if(oe.done)return n(w,x),ie&&Gn(w,Y),z;if(x===null){for(;!oe.done;Y++,oe=v.next())oe=N(w,oe.value,O),oe!==null&&(g=s(oe,g,Y),$===null?z=oe:$.sibling=oe,$=oe);return ie&&Gn(w,Y),z}for(x=a(x);!oe.done;Y++,oe=v.next())oe=_(x,w,Y,oe.value,O),oe!==null&&(e&&oe.alternate!==null&&x.delete(oe.key===null?Y:oe.key),g=s(oe,g,Y),$===null?z=oe:$.sibling=oe,$=oe);return e&&x.forEach(function(Ig){return t(w,Ig)}),ie&&Gn(w,Y),z}function _e(w,g,v,O){if(typeof v=="object"&&v!==null&&v.type===k&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case p:e:{for(var z=v.key;g!==null;){if(g.key===z){if(z=v.type,z===k){if(g.tag===7){n(w,g.sibling),O=o(g,v.props.children),O.return=w,w=O;break e}}else if(g.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===pe&&Mu(z)===g.type){n(w,g.sibling),O=o(g,v.props),Ei(O,v),O.return=w,w=O;break e}n(w,g);break}else t(w,g);g=g.sibling}v.type===k?(O=ta(v.props.children,w.mode,O,v.key),O.return=w,w=O):(O=ns(v.type,v.key,v.props,null,w.mode,O),Ei(O,v),O.return=w,w=O)}return u(w);case R:e:{for(z=v.key;g!==null;){if(g.key===z)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(w,g.sibling),O=o(g,v.children||[]),O.return=w,w=O;break e}else{n(w,g);break}else t(w,g);g=g.sibling}O=yr(v,w.mode,O),O.return=w,w=O}return u(w);case pe:return z=v._init,v=z(v._payload),_e(w,g,v,O)}if(L(v))return U(w,g,v,O);if(be(v)){if(z=be(v),typeof z!="function")throw Error(h(150));return v=z.call(v),X(w,g,v,O)}if(typeof v.then=="function")return _e(w,g,xo(v),O);if(v.$$typeof===te)return _e(w,g,Po(w,v),O);Bo(w,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,g!==null&&g.tag===6?(n(w,g.sibling),O=o(g,v),O.return=w,w=O):(n(w,g),O=mr(v,w.mode,O),O.return=w,w=O),u(w)):n(w,g)}return function(w,g,v,O){try{Ti=0;var z=_e(w,g,v,O);return Aa=null,z}catch(x){if(x===wi)throw x;var $=wt(29,x,null,w.mode);return $.lanes=O,$.return=w,$}finally{}}}var Xn=Du(!0),Iu=Du(!1),Oa=se(null),jo=se(0);function zu(e,t){e=tn,we(jo,e),we(Oa,t),tn=e|t.baseLanes}function Tl(){we(jo,tn),we(Oa,Oa.current)}function El(){tn=jo.current,Re(Oa),Re(jo)}var gt=se(null),Mt=null;function fn(e){var t=e.alternate;we(De,De.current&1),we(gt,e),Mt===null&&(t===null||Oa.current!==null||t.memoizedState!==null)&&(Mt=e)}function Uu(e){if(e.tag===22){if(we(De,De.current),we(gt,e),Mt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Mt=e)}}else mn()}function mn(){we(De,De.current),we(gt,gt.current)}function Vt(e){Re(gt),Mt===e&&(Mt=null),Re(De)}var De=se(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ty=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ey=r.unstable_scheduleCallback,Sy=r.unstable_NormalPriority,Ie={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sl(){return{controller:new Ty,data:new Map,refCount:0}}function Si(e){e.refCount--,e.refCount===0&&Ey(Sy,function(){e.controller.abort()})}var ki=null,kl=0,Na=0,Ra=null;function ky(e,t){if(ki===null){var n=ki=[];kl=0,Na=Cr(),Ra={status:"pending",value:void 0,then:function(a){n.push(a)}}}return kl++,t.then(xu,xu),t}function xu(){if(--kl===0&&ki!==null){Ra!==null&&(Ra.status="fulfilled");var e=ki;ki=null,Na=0,Ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _y(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Bu=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&ky(e,t),Bu!==null&&Bu(e,t)};var Qn=se(null);function _l(){var e=Qn.current;return e!==null?e:me.pooledCache}function Yo(e,t){t===null?we(Qn,Qn.current):we(Qn,t.pool)}function ju(){var e=_l();return e===null?null:{parent:Ie._currentValue,pool:e}}var yn=0,J=null,re=null,Ce=null,qo=!1,Ca=!1,Kn=!1,Zo=0,_i=0,Ha=null,Ay=0;function Ae(){throw Error(h(321))}function Al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Ol(e,t,n,a,o,s){return yn=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Wn:gn,Kn=!1,s=n(a,o),Kn=!1,Ca&&(s=Yu(t,n,a,o)),Lu(e),s}function Lu(e){D.H=Dt;var t=re!==null&&re.next!==null;if(yn=0,Ce=re=J=null,qo=!1,_i=0,Ha=null,t)throw Error(h(300));e===null||Ue||(e=e.dependencies,e!==null&&$o(e)&&(Ue=!0))}function Yu(e,t,n,a){J=e;var o=0;do{if(Ca&&(Ha=null),_i=0,Ca=!1,25<=o)throw Error(h(301));if(o+=1,Ce=re=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=Fn,s=t(n,a)}while(Ca);return s}function Oy(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Ai(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(J.flags|=1024),t}function Nl(){var e=Zo!==0;return Zo=0,e}function Rl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Cl(e){if(qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qo=!1}yn=0,Ce=re=J=null,Ca=!1,_i=Zo=0,Ha=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?J.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function He(){if(re===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Ce===null?J.memoizedState:Ce.next;if(t!==null)Ce=t,re=e;else{if(e===null)throw J.alternate===null?Error(h(467)):Error(h(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Ce===null?J.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}var Go;Go=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ai(e){var t=_i;return _i+=1,Ha===null&&(Ha=[]),e=Cu(Ha,e,t),t=J,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Wn:gn),e}function Vo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ai(e);if(e.$$typeof===te)return Ze(e)}throw Error(h(438,String(e)))}function Hl(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=J.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Go(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=le;return t.index++,n}function Xt(e,t){return typeof t=="function"?t(e):t}function Xo(e){var t=He();return Ml(t,re,e)}function Ml(e,t,n){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=n;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var u=o.next;o.next=s.next,s.next=u}t.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var d=u=null,m=null,b=t,A=!1;do{var N=b.lane&-536870913;if(N!==b.lane?(ae&N)===N:(yn&N)===N){var S=b.revertLane;if(S===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),N===Na&&(A=!0);else if((yn&S)===S){b=b.next,S===Na&&(A=!0);continue}else N={lane:0,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},m===null?(d=m=N,u=s):m=m.next=N,J.lanes|=S,_n|=S;N=b.action,Kn&&n(s,N),s=b.hasEagerState?b.eagerState:n(s,N)}else S={lane:N,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},m===null?(d=m=S,u=s):m=m.next=S,J.lanes|=N,_n|=N;b=b.next}while(b!==null&&b!==t);if(m===null?u=s:m.next=d,!at(s,e.memoizedState)&&(Ue=!0,A&&(n=Ra,n!==null)))throw n;e.memoizedState=s,e.baseState=u,e.baseQueue=m,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Dl(e){var t=He(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do s=e(s,u.action),u=u.next;while(u!==o);at(s,t.memoizedState)||(Ue=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function qu(e,t,n){var a=J,o=He(),s=ie;if(s){if(n===void 0)throw Error(h(407));n=n()}else n=t();var u=!at((re||o).memoizedState,n);if(u&&(o.memoizedState=n,Ue=!0),o=o.queue,Ul(Vu.bind(null,a,o,e),[e]),o.getSnapshot!==t||u||Ce!==null&&Ce.memoizedState.tag&1){if(a.flags|=2048,Ma(9,Gu.bind(null,a,o,n,t),{destroy:void 0},null),me===null)throw Error(h(349));s||(yn&60)!==0||Zu(a,t,n)}return n}function Zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=Go(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gu(e,t,n,a){t.value=n,t.getSnapshot=a,Xu(t)&&Qu(e)}function Vu(e,t,n){return n(function(){Xu(t)&&Qu(e)})}function Xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Qu(e){var t=dn(e,2);t!==null&&Fe(t,e,2)}function Il(e){var t=et();if(typeof e=="function"){var n=e;if(e=n(),Kn){hn(!0);try{n()}finally{hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Ku(e,t,n,a){return e.baseState=n,Ml(e,re,typeof a=="function"?a:Xt)}function Ny(e,t,n,a,o){if(Wo(e))throw Error(h(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){s.listeners.push(u)}};D.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,Wu(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Wu(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var s=D.T,u={};D.T=u;try{var d=n(o,a),m=D.S;m!==null&&m(u,d),Fu(e,t,d)}catch(b){zl(e,t,b)}finally{D.T=s}}else try{s=n(o,a),Fu(e,t,s)}catch(b){zl(e,t,b)}}function Fu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ju(e,t,a)},function(a){return zl(e,t,a)}):Ju(e,t,n)}function Ju(e,t,n){t.status="fulfilled",t.value=n,$u(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Wu(e,n)))}function zl(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,$u(t),t=t.next;while(t!==a)}e.action=null}function $u(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pu(e,t){return t}function ec(e,t){if(ie){var n=me.formState;if(n!==null){e:{var a=J;if(ie){if(je){t:{for(var o=je,s=Ht;o.nodeType!==8;){if(!s){o=null;break t}if(o=_t(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){je=_t(o.nextSibling),a=o.data==="F!";break e}}Vn(a)}a=!1}a&&(t=n[0])}}return n=et(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pu,lastRenderedState:t},n.queue=a,n=pc.bind(null,J,a),a.dispatch=n,a=Il(!1),s=Yl.bind(null,J,!1,a.queue),a=et(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Ny.bind(null,J,o,s,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function tc(e){var t=He();return nc(t,re,e)}function nc(e,t,n){t=Ml(e,t,Pu)[0],e=Xo(Xt)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Ai(t):t;var a=He(),o=a.queue,s=o.dispatch;return n!==a.memoizedState&&(J.flags|=2048,Ma(9,Ry.bind(null,o,n),{destroy:void 0},null)),[t,s,e]}function Ry(e,t){e.action=t}function ac(e){var t=He(),n=re;if(n!==null)return nc(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ma(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=J.updateQueue,t===null&&(t=Go(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ic(){return He().memoizedState}function Qo(e,t,n,a){var o=et();J.flags|=e,o.memoizedState=Ma(1|t,n,{destroy:void 0},a===void 0?null:a)}function Ko(e,t,n,a){var o=He();a=a===void 0?null:a;var s=o.memoizedState.inst;re!==null&&a!==null&&Al(a,re.memoizedState.deps)?o.memoizedState=Ma(t,n,s,a):(J.flags|=e,o.memoizedState=Ma(1|t,n,s,a))}function oc(e,t){Qo(8390656,8,e,t)}function Ul(e,t){Ko(2048,8,e,t)}function sc(e,t){return Ko(4,2,e,t)}function lc(e,t){return Ko(4,4,e,t)}function rc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hc(e,t,n){n=n!=null?n.concat([e]):null,Ko(4,4,rc.bind(null,t,e),n)}function xl(){}function uc(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Al(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function cc(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Al(t,a[1]))return a[0];if(a=e(),Kn){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a}function Bl(e,t,n){return n===void 0||(yn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=fd(),J.lanes|=e,_n|=e,n)}function dc(e,t,n,a){return at(n,t)?n:Oa.current!==null?(e=Bl(e,n,a),at(e,t)||(Ue=!0),e):(yn&42)===0?(Ue=!0,e.memoizedState=n):(e=fd(),J.lanes|=e,_n|=e,t)}function fc(e,t,n,a,o){var s=I.p;I.p=s!==0&&8>s?s:8;var u=D.T,d={};D.T=d,Yl(e,!1,t,n);try{var m=o(),b=D.S;if(b!==null&&b(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var A=_y(m,a);Oi(e,t,A,lt(e))}else Oi(e,t,a,lt(e))}catch(N){Oi(e,t,{then:function(){},status:"rejected",reason:N},lt())}finally{I.p=s,D.T=u}}function Cy(){}function jl(e,t,n,a){if(e.tag!==5)throw Error(h(476));var o=mc(e).queue;fc(e,o,t,ne,n===null?Cy:function(){return yc(e),n(a)})}function mc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yc(e){var t=mc(e).next.queue;Oi(e,t,{},lt())}function Ll(){return Ze(Qi)}function gc(){return He().memoizedState}function bc(){return He().memoizedState}function Hy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=lt();e=wn(n);var a=vn(t,e,n);a!==null&&(Fe(a,t,n),Ci(a,t,n)),t={cache:Sl()},e.payload=t;return}t=t.return}}function My(e,t,n){var a=lt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Wo(e)?wc(t,n):(n=gl(e,t,n,a),n!==null&&(Fe(n,e,a),vc(n,t,a)))}function pc(e,t,n){var a=lt();Oi(e,t,n,a)}function Oi(e,t,n,a){var o={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wo(e))wc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,d=s(u,n);if(o.hasEagerState=!0,o.eagerState=d,at(d,u))return Mo(e,t,o,0),me===null&&Ho(),!1}catch{}finally{}if(n=gl(e,t,o,a),n!==null)return Fe(n,e,a),vc(n,t,a),!0}return!1}function Yl(e,t,n,a){if(a={lane:2,revertLane:Cr(),action:a,hasEagerState:!1,eagerState:null,next:null},Wo(e)){if(t)throw Error(h(479))}else t=gl(e,n,a,2),t!==null&&Fe(t,e,2)}function Wo(e){var t=e.alternate;return e===J||t!==null&&t===J}function wc(e,t){Ca=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vc(e,t,n){if((n&4194176)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Hh(e,n)}}var Dt={readContext:Ze,use:Vo,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae};Dt.useCacheRefresh=Ae,Dt.useMemoCache=Ae,Dt.useHostTransitionStatus=Ae,Dt.useFormState=Ae,Dt.useActionState=Ae,Dt.useOptimistic=Ae;var Wn={readContext:Ze,use:Vo,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:oc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Qo(4194308,4,rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){Qo(4,2,e,t)},useMemo:function(e,t){var n=et();t=t===void 0?null:t;var a=e();if(Kn){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=et();if(n!==void 0){var o=n(t);if(Kn){hn(!0);try{n(t)}finally{hn(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=My.bind(null,J,e),[a.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=Il(e);var t=e.queue,n=pc.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xl,useDeferredValue:function(e,t){var n=et();return Bl(n,e,t)},useTransition:function(){var e=Il(!1);return e=fc.bind(null,J,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=J,o=et();if(ie){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),me===null)throw Error(h(349));(ae&60)!==0||Zu(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,oc(Vu.bind(null,a,s,e),[e]),a.flags|=2048,Ma(9,Gu.bind(null,a,s,n,t),{destroy:void 0},null),n},useId:function(){var e=et(),t=me.identifierPrefix;if(ie){var n=Gt,a=Zt;n=(a&~(1<<32-nt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ay++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return et().memoizedState=Hy.bind(null,J)}};Wn.useMemoCache=Hl,Wn.useHostTransitionStatus=Ll,Wn.useFormState=ec,Wn.useActionState=ec,Wn.useOptimistic=function(e){var t=et();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Yl.bind(null,J,!0,n),n.dispatch=t,[e,t]};var gn={readContext:Ze,use:Vo,useCallback:uc,useContext:Ze,useEffect:Ul,useImperativeHandle:hc,useInsertionEffect:sc,useLayoutEffect:lc,useMemo:cc,useReducer:Xo,useRef:ic,useState:function(){return Xo(Xt)},useDebugValue:xl,useDeferredValue:function(e,t){var n=He();return dc(n,re.memoizedState,e,t)},useTransition:function(){var e=Xo(Xt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Ai(e),t]},useSyncExternalStore:qu,useId:gc};gn.useCacheRefresh=bc,gn.useMemoCache=Hl,gn.useHostTransitionStatus=Ll,gn.useFormState=tc,gn.useActionState=tc,gn.useOptimistic=function(e,t){var n=He();return Ku(n,re,e,t)};var Fn={readContext:Ze,use:Vo,useCallback:uc,useContext:Ze,useEffect:Ul,useImperativeHandle:hc,useInsertionEffect:sc,useLayoutEffect:lc,useMemo:cc,useReducer:Dl,useRef:ic,useState:function(){return Dl(Xt)},useDebugValue:xl,useDeferredValue:function(e,t){var n=He();return re===null?Bl(n,e,t):dc(n,re.memoizedState,e,t)},useTransition:function(){var e=Dl(Xt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Ai(e),t]},useSyncExternalStore:qu,useId:gc};Fn.useCacheRefresh=bc,Fn.useMemoCache=Hl,Fn.useHostTransitionStatus=Ll,Fn.useFormState=ac,Fn.useActionState=ac,Fn.useOptimistic=function(e,t){var n=He();return re!==null?Ku(n,re,e,t):(n.baseState=e,[e,n.queue.dispatch])};function ql(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zl={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=lt(),o=wn(a);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,a),t!==null&&(Fe(t,e,a),Ci(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=lt(),o=wn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,a),t!==null&&(Fe(t,e,a),Ci(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),a=wn(n);a.tag=2,t!=null&&(a.callback=t),t=vn(e,a,n),t!==null&&(Fe(t,e,n),Ci(t,e,n))}};function Tc(e,t,n,a,o,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,u):t.prototype&&t.prototype.isPureReactComponent?!mi(n,a)||!mi(o,s):!0}function Ec(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Zl.enqueueReplaceState(t,t.state,null)}function Jn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=W({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var Fo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Sc(e){Fo(e)}function kc(e){console.error(e)}function _c(e){Fo(e)}function Jo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ac(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Gl(e,t,n){return n=wn(n),n.tag=3,n.payload={element:null},n.callback=function(){Jo(e,t)},n}function Oc(e){return e=wn(e),e.tag=3,e}function Nc(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Ac(t,n,a)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ac(t,n,a),typeof o!="function"&&(An===null?An=new Set([this]):An.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function Dy(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ri(t,n,o,!0),n=gt.current,n!==null){switch(n.tag){case 13:return Mt===null?_r():n.alternate===null&&ke===0&&(ke=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===vl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Or(e,a,o)),!1;case 22:return n.flags|=65536,a===vl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Or(e,a,o)),!1}throw Error(h(435,n.tag))}return Or(e,a,o),_r(),!1}if(ie)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==wl&&(e=Error(h(422),{cause:a}),pi(ft(e,n)))):(a!==wl&&(t=Error(h(423),{cause:a}),pi(ft(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=ft(a,n),o=Gl(e.stateNode,a,o),or(e,o),ke!==4&&(ke=2)),!1;var s=Error(h(520),{cause:a});if(s=ft(s,n),Bi===null?Bi=[s]:Bi.push(s),ke!==4&&(ke=2),t===null)return!0;a=ft(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Gl(n.stateNode,a,e),or(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(An===null||!An.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Oc(o),Nc(o,e,n,a),or(n,o),!1}n=n.return}while(n!==null);return!1}var Rc=Error(h(461)),Ue=!1;function Le(e,t,n,a){t.child=e===null?Iu(t,null,n,a):Xn(t,e.child,n,a)}function Cc(e,t,n,a,o){n=n.render;var s=t.ref;if("ref"in a){var u={};for(var d in a)d!=="ref"&&(u[d]=a[d])}else u=a;return Pn(t),a=Ol(e,t,n,u,s,o),d=Nl(),e!==null&&!Ue?(Rl(e,t,o),Qt(e,t,o)):(ie&&d&&bl(t),t.flags|=1,Le(e,t,a,o),t.child)}function Hc(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!fr(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Mc(e,t,s,a,o)):(e=ns(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Pl(e,o)){var u=s.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(u,a)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=kn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(mi(s,a)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=a=s,Pl(e,o))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Vl(e,t,n,a,o)}function Dc(e,t,n){var a=t.pendingProps,o=a.children,s=(t.stateNode._pendingVisibility&2)!==0,u=e!==null?e.memoizedState:null;if(Ni(e,t),a.mode==="hidden"||s){if((t.flags&128)!==0){if(a=u!==null?u.baseLanes|n:n,e!==null){for(o=t.child=e.child,s=0;o!==null;)s=s|o.lanes|o.childLanes,o=o.sibling;t.childLanes=s&~a}else t.childLanes=0,t.child=null;return Ic(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yo(t,u!==null?u.cachePool:null),u!==null?zu(t,u):Tl(),Uu(t);else return t.lanes=t.childLanes=536870912,Ic(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Yo(t,u.cachePool),zu(t,u),mn(),t.memoizedState=null):(e!==null&&Yo(t,null),Tl(),mn());return Le(e,t,o,n),t.child}function Ic(e,t,n,a){var o=_l();return o=o===null?null:{parent:Ie._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Yo(t,null),Tl(),Uu(t),e!==null&&Ri(e,t,a,!0),null}function Ni(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Vl(e,t,n,a,o){return Pn(t),n=Ol(e,t,n,a,void 0,o),a=Nl(),e!==null&&!Ue?(Rl(e,t,o),Qt(e,t,o)):(ie&&a&&bl(t),t.flags|=1,Le(e,t,n,o),t.child)}function zc(e,t,n,a,o,s){return Pn(t),t.updateQueue=null,n=Yu(t,a,n,o),Lu(e),a=Nl(),e!==null&&!Ue?(Rl(e,t,s),Qt(e,t,s)):(ie&&a&&bl(t),t.flags|=1,Le(e,t,n,s),t.child)}function Uc(e,t,n,a,o){if(Pn(t),t.stateNode===null){var s=Sa,u=n.contextType;typeof u=="object"&&u!==null&&(s=Ze(u)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Zl,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ar(t),u=n.contextType,s.context=typeof u=="object"&&u!==null?Ze(u):Sa,s.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(ql(t,n,u,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(u=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),u!==s.state&&Zl.enqueueReplaceState(s,s.state,null),Mi(t,a,s,o),Hi(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var d=t.memoizedProps,m=Jn(n,d);s.props=m;var b=s.context,A=n.contextType;u=Sa,typeof A=="object"&&A!==null&&(u=Ze(A));var N=n.getDerivedStateFromProps;A=typeof N=="function"||typeof s.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,A||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d||b!==u)&&Ec(t,s,a,u),pn=!1;var S=t.memoizedState;s.state=S,Mi(t,a,s,o),Hi(),b=t.memoizedState,d||S!==b||pn?(typeof N=="function"&&(ql(t,n,N,a),b=t.memoizedState),(m=pn||Tc(t,n,m,a,S,b,u))?(A||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),s.props=a,s.state=b,s.context=u,a=m):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,ir(e,t),u=t.memoizedProps,A=Jn(n,u),s.props=A,N=t.pendingProps,S=s.context,b=n.contextType,m=Sa,typeof b=="object"&&b!==null&&(m=Ze(b)),d=n.getDerivedStateFromProps,(b=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==N||S!==m)&&Ec(t,s,a,m),pn=!1,S=t.memoizedState,s.state=S,Mi(t,a,s,o),Hi();var _=t.memoizedState;u!==N||S!==_||pn||e!==null&&e.dependencies!==null&&$o(e.dependencies)?(typeof d=="function"&&(ql(t,n,d,a),_=t.memoizedState),(A=pn||Tc(t,n,A,a,S,_,m)||e!==null&&e.dependencies!==null&&$o(e.dependencies))?(b||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,_,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,_,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=_),s.props=a,s.state=_,s.context=m,a=A):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Ni(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Xn(t,e.child,null,o),t.child=Xn(t,null,n,o)):Le(e,t,n,o),t.memoizedState=s.state,e=t.child):e=Qt(e,t,o),e}function xc(e,t,n,a){return bi(),t.flags|=256,Le(e,t,n,a),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:ju()}}function Kl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=vt),e}function Bc(e,t,n){var a=t.pendingProps,o=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),u&&(o=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(o?fn(t):mn(),ie){var d=je,m;if(m=d){e:{for(m=d,d=Ht;m.nodeType!==8;){if(!d){d=null;break e}if(m=_t(m.nextSibling),m===null){d=null;break e}}d=m}d!==null?(t.memoizedState={dehydrated:d,treeContext:Zn!==null?{id:Zt,overflow:Gt}:null,retryLane:536870912},m=wt(18,null,null,0),m.stateNode=d,m.return=t,t.child=m,We=t,je=null,m=!0):m=!1}m||Vn(t)}if(d=t.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return d.data==="$!"?t.lanes=16:t.lanes=536870912,null;Vt(t)}return d=a.children,a=a.fallback,o?(mn(),o=t.mode,d=Fl({mode:"hidden",children:d},o),a=ta(a,o,n,null),d.return=t,a.return=t,d.sibling=a,t.child=d,o=t.child,o.memoizedState=Ql(n),o.childLanes=Kl(e,u,n),t.memoizedState=Xl,a):(fn(t),Wl(t,d))}if(m=e.memoizedState,m!==null&&(d=m.dehydrated,d!==null)){if(s)t.flags&256?(fn(t),t.flags&=-257,t=Jl(e,t,n)):t.memoizedState!==null?(mn(),t.child=e.child,t.flags|=128,t=null):(mn(),o=a.fallback,d=t.mode,a=Fl({mode:"visible",children:a.children},d),o=ta(o,d,n,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,Xn(t,e.child,null,n),a=t.child,a.memoizedState=Ql(n),a.childLanes=Kl(e,u,n),t.memoizedState=Xl,t=o);else if(fn(t),d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var b=u.dgst;u=b,a=Error(h(419)),a.stack="",a.digest=u,pi({value:a,source:null,stack:null}),t=Jl(e,t,n)}else if(Ue||Ri(e,t,n,!1),u=(n&e.childLanes)!==0,Ue||u){if(u=me,u!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(u.suspendedLanes|n))!==0?0:a,a!==0&&a!==m.retryLane)throw m.retryLane=a,dn(e,a),Fe(u,e,a),Rc}d.data==="$?"||_r(),t=Jl(e,t,n)}else d.data==="$?"?(t.flags|=128,t.child=e.child,t=Ky.bind(null,e),d._reactRetry=t,t=null):(e=m.treeContext,je=_t(d.nextSibling),We=t,ie=!0,St=null,Ht=!1,e!==null&&(mt[yt++]=Zt,mt[yt++]=Gt,mt[yt++]=Zn,Zt=e.id,Gt=e.overflow,Zn=t),t=Wl(t,a.children),t.flags|=4096);return t}return o?(mn(),o=a.fallback,d=t.mode,m=e.child,b=m.sibling,a=kn(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&31457280,b!==null?o=kn(b,o):(o=ta(o,d,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,d=e.child.memoizedState,d===null?d=Ql(n):(m=d.cachePool,m!==null?(b=Ie._currentValue,m=m.parent!==b?{parent:b,pool:b}:m):m=ju(),d={baseLanes:d.baseLanes|n,cachePool:m}),o.memoizedState=d,o.childLanes=Kl(e,u,n),t.memoizedState=Xl,a):(fn(t),n=e.child,e=n.sibling,n=kn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function Wl(e,t){return t=Fl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fl(e,t){return ud(e,t,0,null)}function Jl(e,t,n){return Xn(t,e.child,null,n),e=Wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jc(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),tr(e.return,t,n)}function $l(e,t,n,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=o)}function Lc(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;if(Le(e,t,a.children,n),a=De.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(we(De,a),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$l(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$l(t,!0,n,null,s);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ri(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$o(e)))}function Iy(e,t,n){switch(t.tag){case 3:mo(t,t.stateNode.containerInfo),bn(t,Ie,e.memoizedState.cache),bi();break;case 27:case 5:Zs(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Bc(e,t,n):(fn(t),e=Qt(e,t,n),e!==null?e.sibling:null);fn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ri(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Lc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),we(De,De.current),a)break;return null;case 22:case 23:return t.lanes=0,Dc(e,t,n);case 24:bn(t,Ie,e.memoizedState.cache)}return Qt(e,t,n)}function Yc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Pl(e,n)&&(t.flags&128)===0)return Ue=!1,Iy(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,ie&&(t.flags&1048576)!==0&&_u(t,zo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,o=a._init;if(a=o(a._payload),t.type=a,typeof a=="function")fr(a)?(e=Jn(a,e),t.tag=1,t=Uc(null,t,a,e,n)):(t.tag=0,t=Vl(null,t,a,e,n));else{if(a!=null){if(o=a.$$typeof,o===de){t.tag=11,t=Cc(null,t,a,e,n);break e}else if(o===Ne){t.tag=14,t=Hc(null,t,a,e,n);break e}}throw t=rt(a)||a,Error(h(306,t,""))}}return t;case 0:return Vl(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=Jn(a,t.pendingProps),Uc(e,t,a,o,n);case 3:e:{if(mo(t,t.stateNode.containerInfo),e===null)throw Error(h(387));var s=t.pendingProps;o=t.memoizedState,a=o.element,ir(e,t),Mi(t,s,null,n);var u=t.memoizedState;if(s=u.cache,bn(t,Ie,s),s!==o.cache&&nr(t,[Ie],n,!0),Hi(),s=u.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,s,n);break e}else if(s!==a){a=ft(Error(h(424)),t),pi(a),t=xc(e,t,s,n);break e}else for(je=_t(t.stateNode.containerInfo.firstChild),We=t,ie=!0,St=null,Ht=!0,n=Iu(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),s===a){t=Qt(e,t,n);break e}Le(e,t,s,n)}t=t.child}return t;case 26:return Ni(e,t),e===null?(n=Gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(n=t.type,e=t.pendingProps,a=ms(rn.current).createElement(n),a[qe]=t,a[$e]=e,Ye(a,n,e),ze(a),t.stateNode=a):t.memoizedState=Gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zs(t),e===null&&ie&&(a=t.stateNode=Yd(t.type,t.pendingProps,rn.current),We=t,Ht=!0,je=_t(a.firstChild)),a=t.pendingProps.children,e!==null||ie?Le(e,t,a,n):t.child=Xn(t,null,a,n),Ni(e,t),t.child;case 5:return e===null&&ie&&((o=a=je)&&(a=ug(a,t.type,t.pendingProps,Ht),a!==null?(t.stateNode=a,We=t,je=_t(a.firstChild),Ht=!1,o=!0):o=!1),o||Vn(t)),Zs(t),o=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,a=s.children,jr(o,s)?a=null:u!==null&&jr(o,u)&&(t.flags|=32),t.memoizedState!==null&&(o=Ol(e,t,Oy,null,null,n),Qi._currentValue=o),Ni(e,t),Le(e,t,a,n),t.child;case 6:return e===null&&ie&&((e=n=je)&&(n=cg(n,t.pendingProps,Ht),n!==null?(t.stateNode=n,We=t,je=null,e=!0):e=!1),e||Vn(t)),null;case 13:return Bc(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Xn(t,null,a,n):Le(e,t,a,n),t.child;case 11:return Cc(e,t,t.type,t.pendingProps,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,bn(t,t.type,a.value),Le(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Pn(t),o=Ze(o),a=a(o),t.flags|=1,Le(e,t,a,n),t.child;case 14:return Hc(e,t,t.type,t.pendingProps,n);case 15:return Mc(e,t,t.type,t.pendingProps,n);case 19:return Lc(e,t,n);case 22:return Dc(e,t,n);case 24:return Pn(t),a=Ze(Ie),e===null?(o=_l(),o===null&&(o=me,s=Sl(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:a,cache:o},ar(t),bn(t,Ie,o)):((e.lanes&n)!==0&&(ir(e,t),Mi(t,null,null,n),Hi()),o=e.memoizedState,s=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),bn(t,Ie,a)):(a=s.cache,bn(t,Ie,a),a!==o.cache&&nr(t,[Ie],n,!0))),Le(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}var er=se(null),$n=null,Kt=null;function bn(e,t,n){we(er,t._currentValue),t._currentValue=n}function Wt(e){e._currentValue=er.current,Re(er)}function tr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function nr(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var u=o.child;s=s.firstContext;e:for(;s!==null;){var d=s;s=o;for(var m=0;m<t.length;m++)if(d.context===t[m]){s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),tr(s.return,n,e),a||(u=null);break e}s=d.next}}else if(o.tag===18){if(u=o.return,u===null)throw Error(h(341));u.lanes|=n,s=u.alternate,s!==null&&(s.lanes|=n),tr(u,n,e),u=null}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===e){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}}function Ri(e,t,n,a){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var u=o.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var d=o.type;at(o.pendingProps.value,u.value)||(e!==null?e.push(d):e=[d])}}else if(o===fo.current){if(u=o.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Qi):e=[Qi])}o=o.return}e!==null&&nr(t,e,n,a),t.flags|=262144}function $o(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){$n=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return qc($n,e)}function Po(e,t){return $n===null&&Pn(e),qc(e,t)}function qc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kt===null){if(e===null)throw Error(h(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return n}var pn=!1;function ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ir(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Do(e),Su(e,null,n),t}return Mo(e,a,t,n),Do(e)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Hh(e,n)}}function or(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=u:s=s.next=u,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var sr=!1;function Hi(){if(sr){var e=Ra;if(e!==null)throw e}}function Mi(e,t,n,a){sr=!1;var o=e.updateQueue;pn=!1;var s=o.firstBaseUpdate,u=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var m=d,b=m.next;m.next=null,u===null?s=b:u.next=b,u=m;var A=e.alternate;A!==null&&(A=A.updateQueue,d=A.lastBaseUpdate,d!==u&&(d===null?A.firstBaseUpdate=b:d.next=b,A.lastBaseUpdate=m))}if(s!==null){var N=o.baseState;u=0,A=b=m=null,d=s;do{var S=d.lane&-536870913,_=S!==d.lane;if(_?(ae&S)===S:(a&S)===S){S!==0&&S===Na&&(sr=!0),A!==null&&(A=A.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var U=e,X=d;S=t;var _e=n;switch(X.tag){case 1:if(U=X.payload,typeof U=="function"){N=U.call(_e,N,S);break e}N=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=X.payload,S=typeof U=="function"?U.call(_e,N,S):U,S==null)break e;N=W({},N,S);break e;case 2:pn=!0}}S=d.callback,S!==null&&(e.flags|=64,_&&(e.flags|=8192),_=o.callbacks,_===null?o.callbacks=[S]:_.push(S))}else _={lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},A===null?(b=A=_,m=N):A=A.next=_,u|=S;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;_=d,d=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);A===null&&(m=N),o.baseState=m,o.firstBaseUpdate=b,o.lastBaseUpdate=A,s===null&&(o.shared.lanes=0),_n|=u,e.lanes=u,e.memoizedState=N}}function Zc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Gc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Zc(n[e],t)}function Di(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var s=n.create,u=n.inst;a=s(),u.destroy=a}n=n.next}while(n!==o)}}catch(d){ce(t,t.return,d)}}function Tn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var u=a.inst,d=u.destroy;if(d!==void 0){u.destroy=void 0,o=t;var m=n;try{d()}catch(b){ce(o,m,b)}}}a=a.next}while(a!==s)}}catch(b){ce(t,t.return,b)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Gc(t,n)}catch(a){ce(e,e.return,a)}}}function Xc(e,t,n){n.props=Jn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ce(e,t,a)}}function ea(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var o=a;break;default:o=a}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(s){ce(e,t,s)}}function it(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){ce(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){ce(e,t,o)}else n.current=null}function Qc(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){ce(e,e.return,o)}}function Kc(e,t,n){try{var a=e.stateNode;og(a,e.type,n,t),a[$e]=t}catch(o){ce(e,e.return,o)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function lr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fs));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(rr(e,t,n),e=e.sibling;e!==null;)rr(e,t,n),e=e.sibling}function es(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}var Ft=!1,Se=!1,hr=!1,Fc=typeof WeakSet=="function"?WeakSet:Set,xe=null,Jc=!1;function zy(e,t){if(e=e.containerInfo,xr=vs,e=mu(e),cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var u=0,d=-1,m=-1,b=0,A=0,N=e,S=null;t:for(;;){for(var _;N!==n||o!==0&&N.nodeType!==3||(d=u+o),N!==s||a!==0&&N.nodeType!==3||(m=u+a),N.nodeType===3&&(u+=N.nodeValue.length),(_=N.firstChild)!==null;)S=N,N=_;for(;;){if(N===e)break t;if(S===n&&++b===o&&(d=u),S===s&&++A===a&&(m=u),(_=N.nextSibling)!==null)break;N=S,S=N.parentNode}N=_}n=d===-1||m===-1?null:{start:d,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Br={focusedElem:e,selectionRange:n},vs=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var U=Jn(n.type,o,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(U,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(X){ce(n,n.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}return U=Jc,Jc=!1,U}function $c(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:$t(e,n),a&4&&Di(5,n);break;case 1:if($t(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){ce(n,n.return,d)}else{var o=Jn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){ce(n,n.return,d)}}a&64&&Vc(n),a&512&&ea(n,n.return);break;case 3:if($t(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Gc(a,e)}catch(d){ce(n,n.return,d)}}break;case 26:$t(e,n),a&512&&ea(n,n.return);break;case 27:case 5:$t(e,n),t===null&&a&4&&Qc(n),a&512&&ea(n,n.return);break;case 12:$t(e,n);break;case 13:$t(e,n),a&4&&td(e,n);break;case 22:if(o=n.memoizedState!==null||Ft,!o){t=t!==null&&t.memoizedState!==null||Se;var s=Ft,u=Se;Ft=o,(Se=t)&&!u?En(e,n,(n.subtreeFlags&8772)!==0):$t(e,n),Ft=s,Se=u}a&512&&(n.memoizedProps.mode==="manual"?ea(n,n.return):it(n,n.return));break;default:$t(e,n)}}function Pc(e){var t=e.alternate;t!==null&&(e.alternate=null,Pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ws(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,ot=!1;function Jt(e,t,n){for(n=n.child;n!==null;)ed(e,t,n),n=n.sibling}function ed(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 26:Se||it(n,t),Jt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Se||it(n,t);var a=Me,o=ot;for(Me=n.stateNode,Jt(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Ws(n),Me=a,ot=o;break;case 5:Se||it(n,t);case 6:o=Me;var s=ot;if(Me=null,Jt(e,t,n),Me=o,ot=s,Me!==null)if(ot)try{e=Me,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(u){ce(n,t,u)}else try{Me.removeChild(n.stateNode)}catch(u){ce(n,t,u)}break;case 18:Me!==null&&(ot?(t=Me,n=n.stateNode,t.nodeType===8?Yr(t.parentNode,n):t.nodeType===1&&Yr(t,n),Ji(t)):Yr(Me,n.stateNode));break;case 4:a=Me,o=ot,Me=n.stateNode.containerInfo,ot=!0,Jt(e,t,n),Me=a,ot=o;break;case 0:case 11:case 14:case 15:Se||Tn(2,n,t),Se||Tn(4,n,t),Jt(e,t,n);break;case 1:Se||(it(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Xc(n,t,a)),Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:Se||it(n,t),Se=(a=Se)||n.memoizedState!==null,Jt(e,t,n),Se=a;break;default:Jt(e,t,n)}}function td(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ji(e)}catch(n){ce(t,t.return,n)}}function Uy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fc),t;default:throw Error(h(435,e.tag))}}function ur(e,t){var n=Uy(e);t.forEach(function(a){var o=Wy.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}function bt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],s=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 27:case 5:Me=d.stateNode,ot=!1;break e;case 3:Me=d.stateNode.containerInfo,ot=!0;break e;case 4:Me=d.stateNode.containerInfo,ot=!0;break e}d=d.return}if(Me===null)throw Error(h(160));ed(s,u,o),Me=null,ot=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)nd(t,e),t=t.sibling}var kt=null;function nd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),pt(e),a&4&&(Tn(3,e,e.return),Di(3,e),Tn(5,e,e.return));break;case 1:bt(t,e),pt(e),a&512&&(Se||n===null||it(n,n.return)),a&64&&Ft&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=kt;if(bt(t,e),pt(e),a&512&&(Se||n===null||it(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[oi]||s[qe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),Ye(s,a,n),s[qe]=e,ze(s),a=s;break e;case"link":var u=Qd("link","href",o).get(a+(n.href||""));if(u){for(var d=0;d<u.length;d++)if(s=u[d],s.getAttribute("href")===(n.href==null?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(d,1);break t}}s=o.createElement(a),Ye(s,a,n),o.head.appendChild(s);break;case"meta":if(u=Qd("meta","content",o).get(a+(n.content||""))){for(d=0;d<u.length;d++)if(s=u[d],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(d,1);break t}}s=o.createElement(a),Ye(s,a,n),o.head.appendChild(s);break;default:throw Error(h(468,a))}s[qe]=e,ze(s),a=s}e.stateNode=a}else Kd(o,e.type,e.stateNode);else e.stateNode=Xd(o,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?Kd(o,e.type,e.stateNode):Xd(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){o=e.stateNode,s=e.memoizedProps;try{for(var m=o.firstChild;m;){var b=m.nextSibling,A=m.nodeName;m[oi]||A==="HEAD"||A==="BODY"||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=b}for(var N=e.type,S=o.attributes;S.length;)o.removeAttributeNode(S[0]);Ye(o,N,s),o[qe]=e,o[$e]=s}catch(U){ce(e,e.return,U)}}case 5:if(bt(t,e),pt(e),a&512&&(Se||n===null||it(n,n.return)),e.flags&32){o=e.stateNode;try{ga(o,"")}catch(U){ce(e,e.return,U)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Kc(e,o,n!==null?n.memoizedProps:o)),a&1024&&(hr=!0);break;case 6:if(bt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(U){ce(e,e.return,U)}}break;case 3:if(bs=null,o=kt,kt=ys(t.containerInfo),bt(t,e),kt=o,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(U){ce(e,e.return,U)}hr&&(hr=!1,ad(e));break;case 4:a=kt,kt=ys(e.stateNode.containerInfo),bt(t,e),pt(e),kt=a;break;case 12:bt(t,e),pt(e);break;case 13:bt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wr=Ct()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ur(e,a)));break;case 22:if(a&512&&(Se||n===null||it(n,n.return)),m=e.memoizedState!==null,b=n!==null&&n.memoizedState!==null,A=Ft,N=Se,Ft=A||m,Se=N||b,bt(t,e),Se=N,Ft=A,pt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=m?t._visibility&-2:t._visibility|1,m&&(t=Ft||Se,n===null||b||t||Da(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){b=n=t;try{if(o=b.stateNode,m)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=b.stateNode,d=b.memoizedProps.style;var _=d!=null&&d.hasOwnProperty("display")?d.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(U){ce(b,b.return,U)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=m?"":b.memoizedProps}catch(U){ce(b,b.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ur(e,n))));break;case 19:bt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ur(e,a)));break;case 21:break;default:bt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(Wc(n)){var a=n;break e}n=n.return}throw Error(h(160))}switch(a.tag){case 27:var o=a.stateNode,s=lr(e);es(e,s,o);break;case 5:var u=a.stateNode;a.flags&32&&(ga(u,""),a.flags&=-33);var d=lr(e);es(e,d,u);break;case 3:case 4:var m=a.stateNode.containerInfo,b=lr(e);rr(e,b,m);break;default:throw Error(h(161))}}}catch(A){ce(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ad(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ad(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$c(e,t.alternate,t),t=t.sibling}function Da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Tn(4,t,t.return),Da(t);break;case 1:it(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Xc(t,t.return,n),Da(t);break;case 26:case 27:case 5:it(t,t.return),Da(t);break;case 22:it(t,t.return),t.memoizedState===null&&Da(t);break;default:Da(t)}e=e.sibling}}function En(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,s=t,u=s.flags;switch(s.tag){case 0:case 11:case 15:En(o,s,n),Di(4,s);break;case 1:if(En(o,s,n),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(b){ce(a,a.return,b)}if(a=s,o=a.updateQueue,o!==null){var d=a.stateNode;try{var m=o.shared.hiddenCallbacks;if(m!==null)for(o.shared.hiddenCallbacks=null,o=0;o<m.length;o++)Zc(m[o],d)}catch(b){ce(a,a.return,b)}}n&&u&64&&Vc(s),ea(s,s.return);break;case 26:case 27:case 5:En(o,s,n),n&&a===null&&u&4&&Qc(s),ea(s,s.return);break;case 12:En(o,s,n);break;case 13:En(o,s,n),n&&u&4&&td(o,s);break;case 22:s.memoizedState===null&&En(o,s,n),ea(s,s.return);break;default:En(o,s,n)}t=t.sibling}}function cr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Si(n))}function dr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e))}function Sn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)id(e,t,n,a),t=t.sibling}function id(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Sn(e,t,n,a),o&2048&&Di(9,t);break;case 3:Sn(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e)));break;case 12:if(o&2048){Sn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,u=s.id,d=s.onPostCommit;typeof d=="function"&&d(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){ce(t,t.return,m)}}else Sn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?Sn(e,t,n,a):Ii(e,t):s._visibility&4?Sn(e,t,n,a):(s._visibility|=4,Ia(e,t,n,a,(t.subtreeFlags&10256)!==0)),o&2048&&cr(t.alternate,t);break;case 24:Sn(e,t,n,a),o&2048&&dr(t.alternate,t);break;default:Sn(e,t,n,a)}}function Ia(e,t,n,a,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,u=t,d=n,m=a,b=u.flags;switch(u.tag){case 0:case 11:case 15:Ia(s,u,d,m,o),Di(8,u);break;case 23:break;case 22:var A=u.stateNode;u.memoizedState!==null?A._visibility&4?Ia(s,u,d,m,o):Ii(s,u):(A._visibility|=4,Ia(s,u,d,m,o)),o&&b&2048&&cr(u.alternate,u);break;case 24:Ia(s,u,d,m,o),o&&b&2048&&dr(u.alternate,u);break;default:Ia(s,u,d,m,o)}t=t.sibling}}function Ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:Ii(n,a),o&2048&&cr(a.alternate,a);break;case 24:Ii(n,a),o&2048&&dr(a.alternate,a);break;default:Ii(n,a)}t=t.sibling}}var zi=8192;function za(e){if(e.subtreeFlags&zi)for(e=e.child;e!==null;)od(e),e=e.sibling}function od(e){switch(e.tag){case 26:za(e),e.flags&zi&&e.memoizedState!==null&&kg(kt,e.memoizedState,e.memoizedProps);break;case 5:za(e);break;case 3:case 4:var t=kt;kt=ys(e.stateNode.containerInfo),za(e),kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=zi,zi=16777216,za(e),zi=t):za(e));break;default:za(e)}}function sd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];xe=a,rd(a,e)}sd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ld(e),e=e.sibling}function ld(e){switch(e.tag){case 0:case 11:case 15:Ui(e),e.flags&2048&&Tn(9,e,e.return);break;case 3:Ui(e);break;case 12:Ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,ts(e)):Ui(e);break;default:Ui(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];xe=a,rd(a,e)}sd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tn(8,t,t.return),ts(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,ts(t));break;default:ts(t)}e=e.sibling}}function rd(e,t){for(;xe!==null;){var n=xe;switch(n.tag){case 0:case 11:case 15:Tn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Si(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,xe=a;else e:for(n=e;xe!==null;){a=xe;var o=a.sibling,s=a.return;if(Pc(a),a===n){xe=null;break e}if(o!==null){o.return=s,xe=o;break e}xe=s}}}function xy(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,a){return new xy(e,t,n,a)}function fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hd(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ns(e,t,n,a,o,s){var u=0;if(a=e,typeof e=="function")fr(e)&&(u=1);else if(typeof e=="string")u=Eg(e,n,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case k:return ta(n.children,o,s,t);case T:u=8,o|=24;break;case H:return e=wt(12,n,t,o|2),e.elementType=H,e.lanes=s,e;case Oe:return e=wt(13,n,t,o),e.elementType=Oe,e.lanes=s,e;case ue:return e=wt(19,n,t,o),e.elementType=ue,e.lanes=s,e;case ve:return ud(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:case te:u=10;break e;case V:u=9;break e;case de:u=11;break e;case Ne:u=14;break e;case pe:u=16,a=null;break e}u=29,n=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=wt(u,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function ta(e,t,n,a){return e=wt(7,e,a,t),e.lanes=n,e}function ud(e,t,n,a){e=wt(22,e,a,t),e.elementType=ve,e.lanes=n;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=o._current;if(s===null)throw Error(h(456));if((o._pendingVisibility&2)===0){var u=dn(s,2);u!==null&&(o._pendingVisibility|=2,Fe(u,s,2))}},attach:function(){var s=o._current;if(s===null)throw Error(h(456));if((o._pendingVisibility&2)!==0){var u=dn(s,2);u!==null&&(o._pendingVisibility&=-3,Fe(u,s,2))}}};return e.stateNode=o,e}function mr(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function yr(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pt(e){e.flags|=4}function cd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wd(t)){if(t=gt.current,t!==null&&((ae&4194176)===ae?Mt!==null:(ae&62914560)!==ae&&(ae&536870912)===0||t!==Mt))throw vi=vl,Nu;e.flags|=8192}}function as(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Rh():536870912,e.lanes|=t,xa|=t)}function xi(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&31457280,a|=o.flags&31457280,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function By(e,t,n){var a=t.pendingProps;switch(pl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Wt(Ie),ua(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(gi(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(Sr(St),St=null))),Te(t),null;case 26:return n=t.memoizedState,e===null?(Pt(t),n!==null?(Te(t),cd(t,n)):(Te(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Pt(t),Te(t),cd(t,n)):(Te(t),t.flags&=-16777217):(e.memoizedProps!==a&&Pt(t),Te(t),t.flags&=-16777217),null;case 27:yo(t),n=rn.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return Te(t),null}e=Rt.current,gi(t)?Au(t):(e=Yd(o,a,n),t.stateNode=e,Pt(t))}return Te(t),null;case 5:if(yo(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return Te(t),null}if(e=Rt.current,gi(t))Au(t);else{switch(o=ms(rn.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?o.createElement(n,{is:a.is}):o.createElement(n)}}e[qe]=t,e[$e]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(Ye(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Pt(t)}}return Te(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=rn.current,gi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=We,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[qe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||zd(e.nodeValue,n)),e||Vn(t)}else e=ms(e).createTextNode(a),e[qe]=t,t.stateNode=e}return Te(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=gi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[qe]=t}else bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else St!==null&&(Sr(St),St=null),o=!0;if(!o)return t.flags&256?(Vt(t),t):(Vt(t),null)}if(Vt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool);var s=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),as(t,t.updateQueue),Te(t),null;case 4:return ua(),e===null&&Ir(t.stateNode.containerInfo),Te(t),null;case 10:return Wt(t.type),Te(t),null;case 19:if(Re(De),o=t.memoizedState,o===null)return Te(t),null;if(a=(t.flags&128)!==0,s=o.rendering,s===null)if(a)xi(o,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Lo(e),s!==null){for(t.flags|=128,xi(o,!1),e=s.updateQueue,t.updateQueue=e,as(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hd(n,e),n=n.sibling;return we(De,De.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ct()>is&&(t.flags|=128,a=!0,xi(o,!1),t.lanes=4194304)}else{if(!a)if(e=Lo(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,as(t,e),xi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ie)return Te(t),null}else 2*Ct()-o.renderingStartTime>is&&n!==536870912&&(t.flags|=128,a=!0,xi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(e=o.last,e!==null?e.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ct(),t.sibling=null,e=De.current,we(De,a?e&1|2:e&1),t):(Te(t),null);case 22:case 23:return Vt(t),El(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&as(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Re(Qn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Ie),Te(t),null;case 25:return null}throw Error(h(156,t.tag))}function jy(e,t){switch(pl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ie),ua(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yo(t),null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(De),null;case 4:return ua(),null;case 10:return Wt(t.type),null;case 22:case 23:return Vt(t),El(),e!==null&&Re(Qn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ie),null;case 25:return null;default:return null}}function dd(e,t){switch(pl(t),t.tag){case 3:Wt(Ie),ua();break;case 26:case 27:case 5:yo(t);break;case 4:ua();break;case 13:Vt(t);break;case 19:Re(De);break;case 10:Wt(t.type);break;case 22:case 23:Vt(t),El(),e!==null&&Re(Qn);break;case 24:Wt(Ie)}}var Ly={getCacheForType:function(e){var t=Ze(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Yy=typeof WeakMap=="function"?WeakMap:Map,Ee=0,me=null,P=null,ae=0,ye=0,st=null,en=!1,Ua=!1,gr=!1,tn=0,ke=0,_n=0,na=0,br=0,vt=0,xa=0,Bi=null,It=null,pr=!1,wr=0,is=1/0,os=null,An=null,ss=!1,aa=null,ji=0,vr=0,Tr=null,Li=0,Er=null;function lt(){if((Ee&2)!==0&&ae!==0)return ae&-ae;if(D.T!==null){var e=Na;return e!==0?e:Cr()}return Dh()}function fd(){vt===0&&(vt=(ae&536870912)===0||ie?Nh():536870912);var e=gt.current;return e!==null&&(e.flags|=32),vt}function Fe(e,t,n){(e===me&&ye===2||e.cancelPendingCommit!==null)&&(Ba(e,0),nn(e,ae,vt,!1)),ii(e,n),((Ee&2)===0||e!==me)&&(e===me&&((Ee&2)===0&&(na|=n),ke===4&&nn(e,ae,vt,!1)),zt(e))}function md(e,t,n){if((Ee&6)!==0)throw Error(h(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||ai(e,t),o=a?Gy(e,t):Ar(e,t,!0),s=a;do{if(o===0){Ua&&!a&&nn(e,t,0,!1);break}else if(o===6)nn(e,t,0,!en);else{if(n=e.current.alternate,s&&!qy(n)){o=Ar(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var d=e;o=Bi;var m=d.current.memoizedState.isDehydrated;if(m&&(Ba(d,u).flags|=256),u=Ar(d,u,!1),u!==2){if(gr&&!m){d.errorRecoveryDisabledLanes|=s,na|=s,o=4;break e}s=It,It=o,s!==null&&Sr(s)}o=u}if(s=!1,o!==2)continue}}if(o===1){Ba(e,0),nn(e,t,0,!0);break}e:{switch(a=e,o){case 0:case 1:throw Error(h(345));case 4:if((t&4194176)===t){nn(a,t,vt,!en);break e}break;case 2:It=null;break;case 3:case 5:break;default:throw Error(h(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(s=wr+300-Ct(),10<s)){if(nn(a,t,vt,!en),wo(a,0)!==0)break e;a.timeoutHandle=Bd(yd.bind(null,a,n,It,os,pr,t,vt,na,xa,en,2,-0,0),s);break e}yd(a,n,It,os,pr,t,vt,na,xa,en,0,-0,0)}}break}while(!0);zt(e)}function Sr(e){It===null?It=e:It.push.apply(It,e)}function yd(e,t,n,a,o,s,u,d,m,b,A,N,S){var _=t.subtreeFlags;if((_&8192||(_&16785408)===16785408)&&(Xi={stylesheets:null,count:0,unsuspend:Sg},od(t),t=_g(),t!==null)){e.cancelPendingCommit=t(Ed.bind(null,e,n,a,o,u,d,m,1,N,S)),nn(e,s,u,!b);return}Ed(e,n,a,o,u,d,m,A,N,S)}function qy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!at(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t,n,a){t&=~br,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var s=31-nt(o),u=1<<s;a[s]=-1,o&=~u}n!==0&&Ch(e,n,t)}function ls(){return(Ee&6)===0?(Yi(0),!1):!0}function kr(){if(P!==null){if(ye===0)var e=P.return;else e=P,Kt=$n=null,Cl(e),Aa=null,Ti=0,e=P;for(;e!==null;)dd(e.alternate,e),e=e.return;P=null}}function Ba(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,lg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kr(),me=e,P=n=kn(e.current,null),ae=t,ye=0,st=null,en=!1,Ua=ai(e,t),gr=!1,xa=vt=br=na=_n=ke=0,It=Bi=null,pr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-nt(a),s=1<<o;t|=e[o],a&=~s}return tn=t,Ho(),n}function gd(e,t){J=null,D.H=Dt,t===wi?(t=Hu(),ye=3):t===Nu?(t=Hu(),ye=4):ye=t===Rc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,P===null&&(ke=1,Jo(e,ft(t,e.current)))}function bd(){var e=D.H;return D.H=Dt,e===null?Dt:e}function pd(){var e=D.A;return D.A=Ly,e}function _r(){ke=4,en||(ae&4194176)!==ae&&gt.current!==null||(Ua=!0),(_n&134217727)===0&&(na&134217727)===0||me===null||nn(me,ae,vt,!1)}function Ar(e,t,n){var a=Ee;Ee|=2;var o=bd(),s=pd();(me!==e||ae!==t)&&(os=null,Ba(e,t)),t=!1;var u=ke;e:do try{if(ye!==0&&P!==null){var d=P,m=st;switch(ye){case 8:kr(),u=6;break e;case 3:case 2:case 6:gt.current===null&&(t=!0);var b=ye;if(ye=0,st=null,ja(e,d,m,b),n&&Ua){u=0;break e}break;default:b=ye,ye=0,st=null,ja(e,d,m,b)}}Zy(),u=ke;break}catch(A){gd(e,A)}while(!0);return t&&e.shellSuspendCounter++,Kt=$n=null,Ee=a,D.H=o,D.A=s,P===null&&(me=null,ae=0,Ho()),u}function Zy(){for(;P!==null;)wd(P)}function Gy(e,t){var n=Ee;Ee|=2;var a=bd(),o=pd();me!==e||ae!==t?(os=null,is=Ct()+500,Ba(e,t)):Ua=ai(e,t);e:do try{if(ye!==0&&P!==null){t=P;var s=st;t:switch(ye){case 1:ye=0,st=null,ja(e,t,s,1);break;case 2:if(Ru(s)){ye=0,st=null,vd(t);break}t=function(){ye===2&&me===e&&(ye=7),zt(e)},s.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:Ru(s)?(ye=0,st=null,vd(t)):(ye=0,st=null,ja(e,t,s,7));break;case 5:var u=null;switch(P.tag){case 26:u=P.memoizedState;case 5:case 27:var d=P;if(!u||Wd(u)){ye=0,st=null;var m=d.sibling;if(m!==null)P=m;else{var b=d.return;b!==null?(P=b,rs(b)):P=null}break t}}ye=0,st=null,ja(e,t,s,5);break;case 6:ye=0,st=null,ja(e,t,s,6);break;case 8:kr(),ke=6;break e;default:throw Error(h(462))}}Vy();break}catch(A){gd(e,A)}while(!0);return Kt=$n=null,D.H=a,D.A=o,Ee=n,P!==null?0:(me=null,ae=0,Ho(),ke)}function Vy(){for(;P!==null&&!fm();)wd(P)}function wd(e){var t=Yc(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?rs(e):P=t}function vd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zc(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=zc(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:Cl(t);default:dd(n,t),t=P=hd(t,tn),t=Yc(n,t,tn)}e.memoizedProps=e.pendingProps,t===null?rs(e):P=t}function ja(e,t,n,a){Kt=$n=null,Cl(t),Aa=null,Ti=0;var o=t.return;try{if(Dy(e,o,t,n,ae)){ke=1,Jo(e,ft(n,e.current)),P=null;return}}catch(s){if(o!==null)throw P=o,s;ke=1,Jo(e,ft(n,e.current)),P=null;return}t.flags&32768?(ie||a===1?e=!0:Ua||(ae&536870912)!==0?e=!1:(en=e=!0,(a===2||a===3||a===6)&&(a=gt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Td(t,e)):rs(t)}function rs(e){var t=e;do{if((t.flags&32768)!==0){Td(t,en);return}e=t.return;var n=By(t.alternate,t,tn);if(n!==null){P=n;return}if(t=t.sibling,t!==null){P=t;return}P=t=e}while(t!==null);ke===0&&(ke=5)}function Td(e,t){do{var n=jy(e.alternate,e);if(n!==null){n.flags&=32767,P=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){P=e;return}P=e=n}while(e!==null);ke=6,P=null}function Ed(e,t,n,a,o,s,u,d,m,b){var A=D.T,N=I.p;try{I.p=2,D.T=null,Xy(e,t,n,a,N,o,s,u,d,m,b)}finally{D.T=A,I.p=N}}function Xy(e,t,n,a,o,s,u,d){do La();while(aa!==null);if((Ee&6)!==0)throw Error(h(327));var m=e.finishedWork;if(a=e.finishedLanes,m===null)return null;if(e.finishedWork=null,e.finishedLanes=0,m===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var b=m.lanes|m.childLanes;if(b|=yl,km(e,a,b,s,u,d),e===me&&(P=me=null,ae=0),(m.subtreeFlags&10256)===0&&(m.flags&10256)===0||ss||(ss=!0,vr=b,Tr=n,Fy(go,function(){return La(),null})),n=(m.flags&15990)!==0,(m.subtreeFlags&15990)!==0||n?(n=D.T,D.T=null,s=I.p,I.p=2,u=Ee,Ee|=4,zy(e,m),nd(m,e),gy(Br,e.containerInfo),vs=!!xr,Br=xr=null,e.current=m,$c(e,m.alternate,m),mm(),Ee=u,I.p=s,D.T=n):e.current=m,ss?(ss=!1,aa=e,ji=a):Sd(e,b),b=e.pendingLanes,b===0&&(An=null),wm(m.stateNode),zt(e),t!==null)for(o=e.onRecoverableError,m=0;m<t.length;m++)b=t[m],o(b.value,{componentStack:b.stack});return(ji&3)!==0&&La(),b=e.pendingLanes,(a&4194218)!==0&&(b&42)!==0?e===Er?Li++:(Li=0,Er=e):Li=0,Yi(0),null}function Sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Si(t)))}function La(){if(aa!==null){var e=aa,t=vr;vr=0;var n=Mh(ji),a=D.T,o=I.p;try{if(I.p=32>n?32:n,D.T=null,aa===null)var s=!1;else{n=Tr,Tr=null;var u=aa,d=ji;if(aa=null,ji=0,(Ee&6)!==0)throw Error(h(331));var m=Ee;if(Ee|=4,ld(u.current),id(u,u.current,d,n),Ee=m,Yi(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(ni,u)}catch{}s=!0}return s}finally{I.p=o,D.T=a,Sd(e,t)}}return!1}function kd(e,t,n){t=ft(n,t),t=Gl(e.stateNode,t,2),e=vn(e,t,2),e!==null&&(ii(e,2),zt(e))}function ce(e,t,n){if(e.tag===3)kd(e,e,n);else for(;t!==null;){if(t.tag===3){kd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(An===null||!An.has(a))){e=ft(n,e),n=Oc(2),a=vn(t,n,2),a!==null&&(Nc(n,a,t,e),ii(a,2),zt(a));break}}t=t.return}}function Or(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Yy;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(gr=!0,o.add(n),e=Qy.bind(null,e,t,n),t.then(e,e))}function Qy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(ae&n)===n&&(ke===4||ke===3&&(ae&62914560)===ae&&300>Ct()-wr?(Ee&2)===0&&Ba(e,0):br|=n,xa===ae&&(xa=0)),zt(e)}function _d(e,t){t===0&&(t=Rh()),e=dn(e,t),e!==null&&(ii(e,t),zt(e))}function Ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_d(e,n)}function Wy(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),_d(e,n)}function Fy(e,t){return Vs(e,t)}var hs=null,Ya=null,Nr=!1,us=!1,Rr=!1,ia=0;function zt(e){e!==Ya&&e.next===null&&(Ya===null?hs=Ya=e:Ya=Ya.next=e),us=!0,Nr||(Nr=!0,$y(Jy))}function Yi(e,t){if(!Rr&&us){Rr=!0;do for(var n=!1,a=hs;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var u=a.suspendedLanes,d=a.pingedLanes;s=(1<<31-nt(42|e)+1)-1,s&=o&~(u&~d),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(n=!0,Nd(a,s))}else s=ae,s=wo(a,a===me?s:0),(s&3)===0||ai(a,s)||(n=!0,Nd(a,s));a=a.next}while(n);Rr=!1}}function Jy(){us=Nr=!1;var e=0;ia!==0&&(sg()&&(e=ia),ia=0);for(var t=Ct(),n=null,a=hs;a!==null;){var o=a.next,s=Ad(a,t);s===0?(a.next=null,n===null?hs=o:n.next=o,o===null&&(Ya=n)):(n=a,(e!==0||(s&3)!==0)&&(us=!0)),a=o}Yi(e)}function Ad(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var u=31-nt(s),d=1<<u,m=o[u];m===-1?((d&n)===0||(d&a)!==0)&&(o[u]=Sm(d,t)):m<=t&&(e.expiredLanes|=d),s&=~d}if(t=me,n=ae,n=wo(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&ye===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xs(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ai(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xs(a),Mh(n)){case 2:case 8:n=Ah;break;case 32:n=go;break;case 268435456:n=Oh;break;default:n=go}return a=Od.bind(null,e),n=Vs(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xs(a),e.callbackPriority=2,e.callbackNode=null,2}function Od(e,t){var n=e.callbackNode;if(La()&&e.callbackNode!==n)return null;var a=ae;return a=wo(e,e===me?a:0),a===0?null:(md(e,a,t),Ad(e,Ct()),e.callbackNode!=null&&e.callbackNode===n?Od.bind(null,e):null)}function Nd(e,t){if(La())return null;md(e,t,!0)}function $y(e){rg(function(){(Ee&6)!==0?Vs(_h,e):e()})}function Cr(){return ia===0&&(ia=Nh()),ia}function Rd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function Cd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Py(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var s=Rd((o[$e]||null).action),u=a.submitter;u&&(t=(t=u[$e]||null)?Rd(t.formAction):u.getAttribute("formAction"),t!==null&&(s=t,u=null));var d=new No("action","action",null,a,o);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ia!==0){var m=u?Cd(o,u):new FormData(o);jl(n,{pending:!0,data:m,method:o.method,action:s},null,m)}}else typeof s=="function"&&(d.preventDefault(),m=u?Cd(o,u):new FormData(o),jl(n,{pending:!0,data:m,method:o.method,action:s},s,m))},currentTarget:o}]})}}for(var Hr=0;Hr<Eu.length;Hr++){var Mr=Eu[Hr],eg=Mr.toLowerCase(),tg=Mr[0].toUpperCase()+Mr.slice(1);Et(eg,"on"+tg)}Et(bu,"onAnimationEnd"),Et(pu,"onAnimationIteration"),Et(wu,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(py,"onTransitionRun"),Et(wy,"onTransitionStart"),Et(vy,"onTransitionCancel"),Et(vu,"onTransitionEnd"),ma("onMouseEnter",["mouseout","mouseover"]),ma("onMouseLeave",["mouseout","mouseover"]),ma("onPointerEnter",["pointerout","pointerover"]),ma("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ng=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi));function Hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var u=a.length-1;0<=u;u--){var d=a[u],m=d.instance,b=d.currentTarget;if(d=d.listener,m!==s&&o.isPropagationStopped())break e;s=d,o.currentTarget=b;try{s(o)}catch(A){Fo(A)}o.currentTarget=null,s=m}else for(u=0;u<a.length;u++){if(d=a[u],m=d.instance,b=d.currentTarget,d=d.listener,m!==s&&o.isPropagationStopped())break e;s=d,o.currentTarget=b;try{s(o)}catch(A){Fo(A)}o.currentTarget=null,s=m}}}}function ee(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var a=e+"__bubble";n.has(a)||(Md(t,e,2,!1),n.add(a))}function Dr(e,t,n){var a=0;t&&(a|=4),Md(n,e,a,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[cs]){e[cs]=!0,zh.forEach(function(n){n!=="selectionchange"&&(ng.has(n)||Dr(n,!1,e),Dr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Dr("selectionchange",!1,t))}}function Md(e,t,n,a){switch(tf(t)){case 2:var o=Ng;break;case 8:o=Rg;break;default:o=Qr}n=o.bind(null,t,n,e),o=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function zr(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var d=a.stateNode.containerInfo;if(d===o||d.nodeType===8&&d.parentNode===o)break;if(u===4)for(u=a.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===o||m.nodeType===8&&m.parentNode===o))return;u=u.return}for(;d!==null;){if(u=Bn(d),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){a=s=u;continue e}d=d.parentNode}}a=a.return}Qh(function(){var b=s,A=el(n),N=[];e:{var S=Tu.get(e);if(S!==void 0){var _=No,U=e;switch(e){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":_=Wm;break;case"focusin":U="focus",_=sl;break;case"focusout":U="blur",_=sl;break;case"beforeblur":case"afterblur":_=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=$m;break;case bu:case pu:case wu:_=Lm;break;case vu:_=ey;break;case"scroll":case"scrollend":_=zm;break;case"wheel":_=ny;break;case"copy":case"cut":case"paste":_=qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=$h;break;case"toggle":case"beforetoggle":_=iy}var X=(t&4)!==0,_e=!X&&(e==="scroll"||e==="scrollend"),w=X?S!==null?S+"Capture":null:S;X=[];for(var g=b,v;g!==null;){var O=g;if(v=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||v===null||w===null||(O=li(g,w),O!=null&&X.push(Zi(g,O,v))),_e)break;g=g.return}0<X.length&&(S=new _(S,U,null,n,A),N.push({event:S,listeners:X}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",S&&n!==Ps&&(U=n.relatedTarget||n.fromElement)&&(Bn(U)||U[ca]))break e;if((_||S)&&(S=A.window===A?A:(S=A.ownerDocument)?S.defaultView||S.parentWindow:window,_?(U=n.relatedTarget||n.toElement,_=b,U=U?Bn(U):null,U!==null&&(_e=Z(U),X=U.tag,U!==_e||X!==5&&X!==27&&X!==6)&&(U=null)):(_=null,U=b),_!==U)){if(X=Fh,O="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(X=$h,O="onPointerLeave",w="onPointerEnter",g="pointer"),_e=_==null?S:si(_),v=U==null?S:si(U),S=new X(O,g+"leave",_,n,A),S.target=_e,S.relatedTarget=v,O=null,Bn(A)===b&&(X=new X(w,g+"enter",U,n,A),X.target=v,X.relatedTarget=_e,O=X),_e=O,_&&U)t:{for(X=_,w=U,g=0,v=X;v;v=qa(v))g++;for(v=0,O=w;O;O=qa(O))v++;for(;0<g-v;)X=qa(X),g--;for(;0<v-g;)w=qa(w),v--;for(;g--;){if(X===w||w!==null&&X===w.alternate)break t;X=qa(X),w=qa(w)}X=null}else X=null;_!==null&&Dd(N,S,_,X,!1),U!==null&&_e!==null&&Dd(N,_e,U,X,!0)}}e:{if(S=b?si(b):window,_=S.nodeName&&S.nodeName.toLowerCase(),_==="select"||_==="input"&&S.type==="file")var z=su;else if(iu(S))if(lu)z=my;else{z=dy;var $=cy}else _=S.nodeName,!_||_.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?b&&$s(b.elementType)&&(z=su):z=fy;if(z&&(z=z(e,b))){ou(N,z,n,A);break e}$&&$(e,S,b),e==="focusout"&&b&&S.type==="number"&&b.memoizedProps.value!=null&&Js(S,"number",S.value)}switch($=b?si(b):window,e){case"focusin":(iu($)||$.contentEditable==="true")&&(va=$,dl=b,yi=null);break;case"focusout":yi=dl=va=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,yu(N,n,A);break;case"selectionchange":if(by)break;case"keydown":case"keyup":yu(N,n,A)}var x;if(rl)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else wa?nu(e,n)&&(Y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(Ph&&n.locale!=="ko"&&(wa||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&wa&&(x=Kh()):(cn=A,al="value"in cn?cn.value:cn.textContent,wa=!0)),$=ds(b,Y),0<$.length&&(Y=new Jh(Y,e,null,n,A),N.push({event:Y,listeners:$}),x?Y.data=x:(x=au(n),x!==null&&(Y.data=x)))),(x=sy?ly(e,n):ry(e,n))&&(Y=ds(b,"onBeforeInput"),0<Y.length&&($=new Jh("onBeforeInput","beforeinput",null,n,A),N.push({event:$,listeners:Y}),$.data=x)),Py(N,e,b,n,A)}Hd(N,t)})}function Zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ds(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=li(e,n),o!=null&&a.unshift(Zi(e,o,s)),o=li(e,t),o!=null&&a.push(Zi(e,o,s))),e=e.return}return a}function qa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,a,o){for(var s=t._reactName,u=[];n!==null&&n!==a;){var d=n,m=d.alternate,b=d.stateNode;if(d=d.tag,m!==null&&m===a)break;d!==5&&d!==26&&d!==27||b===null||(m=b,o?(b=li(n,s),b!=null&&u.unshift(Zi(n,b,m))):o||(b=li(n,s),b!=null&&u.push(Zi(n,b,m)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var ag=/\r\n?/g,ig=/\u0000|\uFFFD/g;function Id(e){return(typeof e=="string"?e:""+e).replace(ag,`
`).replace(ig,"")}function zd(e,t){return t=Id(t),Id(e)===t}function fs(){}function he(e,t,n,a,o,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ga(e,""+a);break;case"className":To(e,"class",a);break;case"tabIndex":To(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":To(e,n,a);break;case"style":Vh(e,a,s);break;case"data":if(t!=="object"){To(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ko(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",o.name,o,null),he(e,t,"formEncType",o.formEncType,o,null),he(e,t,"formMethod",o.formMethod,o,null),he(e,t,"formTarget",o.formTarget,o,null)):(he(e,t,"encType",o.encType,o,null),he(e,t,"method",o.method,o,null),he(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ko(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=fs);break;case"onScroll":a!=null&&ee("scroll",e);break;case"onScrollEnd":a!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ko(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ee("beforetoggle",e),ee("toggle",e),vo(e,"popover",a);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":vo(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Dm.get(n)||n,vo(e,n,a))}}function Ur(e,t,n,a,o,s){switch(n){case"style":Vh(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&ee("scroll",e);break;case"onScrollEnd":a!=null&&ee("scrollend",e);break;case"onClick":a!=null&&(e.onclick=fs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[$e]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):vo(e,n,a)}}}function Ye(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var a=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var u=n[s];if(u!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:he(e,t,s,u,n,null)}}o&&he(e,t,"srcSet",n.srcSet,n,null),a&&he(e,t,"src",n.src,n,null);return;case"input":ee("invalid",e);var d=s=u=o=null,m=null,b=null;for(a in n)if(n.hasOwnProperty(a)){var A=n[a];if(A!=null)switch(a){case"name":o=A;break;case"type":u=A;break;case"checked":m=A;break;case"defaultChecked":b=A;break;case"value":s=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(h(137,t));break;default:he(e,t,a,A,n,null)}}Yh(e,s,d,m,b,u,o,!1),Eo(e);return;case"select":ee("invalid",e),a=u=s=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":s=d;break;case"defaultValue":u=d;break;case"multiple":a=d;default:he(e,t,o,d,n,null)}t=s,n=u,e.multiple=!!a,t!=null?ya(e,!!a,t,!1):n!=null&&ya(e,!!a,n,!0);return;case"textarea":ee("invalid",e),s=o=a=null;for(u in n)if(n.hasOwnProperty(u)&&(d=n[u],d!=null))switch(u){case"value":a=d;break;case"defaultValue":o=d;break;case"children":s=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(h(91));break;default:he(e,t,u,d,n,null)}Zh(e,a,o,s),Eo(e);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:he(e,t,m,a,n,null)}return;case"dialog":ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(a=0;a<qi.length;a++)ee(qi[a],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:he(e,t,b,a,n,null)}return;default:if($s(t)){for(A in n)n.hasOwnProperty(A)&&(a=n[A],a!==void 0&&Ur(e,t,A,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&he(e,t,d,a,n,null))}function og(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,u=null,d=null,m=null,b=null,A=null;for(_ in n){var N=n[_];if(n.hasOwnProperty(_)&&N!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":m=N;default:a.hasOwnProperty(_)||he(e,t,_,null,a,N)}}for(var S in a){var _=a[S];if(N=n[S],a.hasOwnProperty(S)&&(_!=null||N!=null))switch(S){case"type":s=_;break;case"name":o=_;break;case"checked":b=_;break;case"defaultChecked":A=_;break;case"value":u=_;break;case"defaultValue":d=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(h(137,t));break;default:_!==N&&he(e,t,S,_,a,N)}}Fs(e,u,d,m,b,A,s,o);return;case"select":_=u=d=S=null;for(s in n)if(m=n[s],n.hasOwnProperty(s)&&m!=null)switch(s){case"value":break;case"multiple":_=m;default:a.hasOwnProperty(s)||he(e,t,s,null,a,m)}for(o in a)if(s=a[o],m=n[o],a.hasOwnProperty(o)&&(s!=null||m!=null))switch(o){case"value":S=s;break;case"defaultValue":d=s;break;case"multiple":u=s;default:s!==m&&he(e,t,o,s,a,m)}t=d,n=u,a=_,S!=null?ya(e,!!n,S,!1):!!a!=!!n&&(t!=null?ya(e,!!n,t,!0):ya(e,!!n,n?[]:"",!1));return;case"textarea":_=S=null;for(d in n)if(o=n[d],n.hasOwnProperty(d)&&o!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:he(e,t,d,null,a,o)}for(u in a)if(o=a[u],s=n[u],a.hasOwnProperty(u)&&(o!=null||s!=null))switch(u){case"value":S=o;break;case"defaultValue":_=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(h(91));break;default:o!==s&&he(e,t,u,o,a,s)}qh(e,S,_);return;case"option":for(var U in n)if(S=n[U],n.hasOwnProperty(U)&&S!=null&&!a.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:he(e,t,U,null,a,S)}for(m in a)if(S=a[m],_=n[m],a.hasOwnProperty(m)&&S!==_&&(S!=null||_!=null))switch(m){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:he(e,t,m,S,a,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in n)S=n[X],n.hasOwnProperty(X)&&S!=null&&!a.hasOwnProperty(X)&&he(e,t,X,null,a,S);for(b in a)if(S=a[b],_=n[b],a.hasOwnProperty(b)&&S!==_&&(S!=null||_!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(h(137,t));break;default:he(e,t,b,S,a,_)}return;default:if($s(t)){for(var _e in n)S=n[_e],n.hasOwnProperty(_e)&&S!==void 0&&!a.hasOwnProperty(_e)&&Ur(e,t,_e,void 0,a,S);for(A in a)S=a[A],_=n[A],!a.hasOwnProperty(A)||S===_||S===void 0&&_===void 0||Ur(e,t,A,S,a,_);return}}for(var w in n)S=n[w],n.hasOwnProperty(w)&&S!=null&&!a.hasOwnProperty(w)&&he(e,t,w,null,a,S);for(N in a)S=a[N],_=n[N],!a.hasOwnProperty(N)||S===_||S==null&&_==null||he(e,t,N,S,a,_)}var xr=null,Br=null;function ms(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lr=null;function sg(){var e=window.event;return e&&e.type==="popstate"?e===Lr?!1:(Lr=e,!0):(Lr=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,rg=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(hg)}:Bd;function hg(e){setTimeout(function(){throw e})}function Yr(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),Ji(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);Ji(t)}function qr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qr(n),Ws(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ug(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[oi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function cg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_t(e.nextSibling),e===null))return null;return e}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Yd(e,t,n){switch(t=ms(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}var Tt=new Map,qd=new Set;function ys(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var an=I.d;I.d={f:dg,r:fg,D:mg,C:yg,L:gg,m:bg,X:wg,S:pg,M:vg};function dg(){var e=an.f(),t=ls();return e||t}function fg(e){var t=da(e);t!==null&&t.tag===5&&t.type==="form"?yc(t):an.r(e)}var Za=typeof document>"u"?null:document;function Zd(e,t,n){var a=Za;if(a&&typeof t=="string"&&t){var o=ct(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),qd.has(o)||(qd.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),Ye(t,"link",e),ze(t),a.head.appendChild(t)))}}function mg(e){an.D(e),Zd("dns-prefetch",e,null)}function yg(e,t){an.C(e,t),Zd("preconnect",e,t)}function gg(e,t,n){an.L(e,t,n);var a=Za;if(a&&e&&t){var o='link[rel="preload"][as="'+ct(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ct(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ct(n.imageSizes)+'"]')):o+='[href="'+ct(e)+'"]';var s=o;switch(t){case"style":s=Ga(e);break;case"script":s=Va(e)}Tt.has(s)||(e=W({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Tt.set(s,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(Gi(s))||t==="script"&&a.querySelector(Vi(s))||(t=a.createElement("link"),Ye(t,"link",e),ze(t),a.head.appendChild(t)))}}function bg(e,t){an.m(e,t);var n=Za;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+ct(a)+'"][href="'+ct(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Va(e)}if(!Tt.has(s)&&(e=W({rel:"modulepreload",href:e},t),Tt.set(s,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Vi(s)))return}a=n.createElement("link"),Ye(a,"link",e),ze(a),n.head.appendChild(a)}}}function pg(e,t,n){an.S(e,t,n);var a=Za;if(a&&e){var o=fa(a).hoistableStyles,s=Ga(e);t=t||"default";var u=o.get(s);if(!u){var d={loading:0,preload:null};if(u=a.querySelector(Gi(s)))d.loading=5;else{e=W({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Tt.get(s))&&Zr(e,n);var m=u=a.createElement("link");ze(m),Ye(m,"link",e),m._p=new Promise(function(b,A){m.onload=b,m.onerror=A}),m.addEventListener("load",function(){d.loading|=1}),m.addEventListener("error",function(){d.loading|=2}),d.loading|=4,gs(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:d},o.set(s,u)}}}function wg(e,t){an.X(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,o=Va(e),s=a.get(o);s||(s=n.querySelector(Vi(o)),s||(e=W({src:e,async:!0},t),(t=Tt.get(o))&&Gr(e,t),s=n.createElement("script"),ze(s),Ye(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function vg(e,t){an.M(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,o=Va(e),s=a.get(o);s||(s=n.querySelector(Vi(o)),s||(e=W({src:e,async:!0,type:"module"},t),(t=Tt.get(o))&&Gr(e,t),s=n.createElement("script"),ze(s),Ye(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function Gd(e,t,n,a){var o=(o=rn.current)?ys(o):null;if(!o)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ga(n.href),n=fa(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ga(n.href);var s=fa(o).hoistableStyles,u=s.get(e);if(u||(o=o.ownerDocument||o,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,u),(s=o.querySelector(Gi(e)))&&!s._p&&(u.instance=s,u.state.loading=5),Tt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Tt.set(e,n),s||Tg(o,e,n,u.state))),t&&a===null)throw Error(h(528,""));return u}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Va(n),n=fa(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Ga(e){return'href="'+ct(e)+'"'}function Gi(e){return'link[rel="stylesheet"]['+e+"]"}function Vd(e){return W({},e,{"data-precedence":e.precedence,precedence:null})}function Tg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ye(t,"link",n),ze(t),e.head.appendChild(t))}function Va(e){return'[src="'+ct(e)+'"]'}function Vi(e){return"script[async]"+e}function Xd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ct(n.href)+'"]');if(a)return t.instance=a,ze(a),a;var o=W({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ze(a),Ye(a,"style",o),gs(a,n.precedence,e),t.instance=a;case"stylesheet":o=Ga(n.href);var s=e.querySelector(Gi(o));if(s)return t.state.loading|=4,t.instance=s,ze(s),s;a=Vd(n),(o=Tt.get(o))&&Zr(a,o),s=(e.ownerDocument||e).createElement("link"),ze(s);var u=s;return u._p=new Promise(function(d,m){u.onload=d,u.onerror=m}),Ye(s,"link",a),t.state.loading|=4,gs(s,n.precedence,e),t.instance=s;case"script":return s=Va(n.src),(o=e.querySelector(Vi(s)))?(t.instance=o,ze(o),o):(a=n,(o=Tt.get(s))&&(a=W({},n),Gr(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),ze(o),Ye(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,gs(a,n.precedence,e));return t.instance}function gs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,u=0;u<a.length;u++){var d=a[u];if(d.dataset.precedence===t)s=d;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Zr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var bs=null;function Qd(e,t,n){if(bs===null){var a=new Map,o=bs=new Map;o.set(n,a)}else o=bs,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[oi]||s[qe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var u=s.getAttribute(t)||"";u=e+u;var d=a.get(u);d?d.push(s):a.set(u,[s])}}return a}function Kd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Eg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Xi=null;function Sg(){}function kg(e,t,n){if(Xi===null)throw Error(h(475));var a=Xi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Ga(n.href),s=e.querySelector(Gi(o));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=ps.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=s,ze(s);return}s=e.ownerDocument||e,n=Vd(n),(o=Tt.get(o))&&Zr(n,o),s=s.createElement("link"),ze(s);var u=s;u._p=new Promise(function(d,m){u.onload=d,u.onerror=m}),Ye(s,"link",n),t.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=ps.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function _g(){if(Xi===null)throw Error(h(475));var e=Xi;return e.stylesheets&&e.count===0&&Vr(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Vr(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ps(){if(this.count--,this.count===0){if(this.stylesheets)Vr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ws=null;function Vr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ws=new Map,t.forEach(Ag,e),ws=null,ps.call(e))}function Ag(e,t){if(!(t.state.loading&4)){var n=ws.get(e);if(n)var a=n.get(null);else{n=new Map,ws.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var u=o[s];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),a=u)}a&&n.set(null,a)}o=t.instance,u=o.getAttribute("data-precedence"),s=n.get(u)||a,s===a&&n.set(null,o),n.set(u,o),this.count++,a=ps.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Qi={$$typeof:te,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Og(e,t,n,a,o,s,u,d){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.hiddenUpdates=Qs(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Fd(e,t,n,a,o,s,u,d,m,b,A,N){return e=new Og(e,t,n,u,d,m,b,N),t=1,s===!0&&(t|=24),s=wt(3,null,null,t),e.current=s,s.stateNode=e,t=Sl(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},ar(s),e}function Jd(e){return e?(e=Sa,e):Sa}function $d(e,t,n,a,o,s){o=Jd(o),a.context===null?a.context=o:a.pendingContext=o,a=wn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=vn(e,a,t),n!==null&&(Fe(n,e,t),Ci(n,e,t))}function Pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xr(e,t){Pd(e,t),(e=e.alternate)&&Pd(e,t)}function ef(e){if(e.tag===13){var t=dn(e,67108864);t!==null&&Fe(t,e,67108864),Xr(e,67108864)}}var vs=!0;function Ng(e,t,n,a){var o=D.T;D.T=null;var s=I.p;try{I.p=2,Qr(e,t,n,a)}finally{I.p=s,D.T=o}}function Rg(e,t,n,a){var o=D.T;D.T=null;var s=I.p;try{I.p=8,Qr(e,t,n,a)}finally{I.p=s,D.T=o}}function Qr(e,t,n,a){if(vs){var o=Kr(a);if(o===null)zr(e,t,a,Ts,n),nf(e,a);else if(Hg(o,e,t,n,a))a.stopPropagation();else if(nf(e,a),t&4&&-1<Cg.indexOf(e)){for(;o!==null;){var s=da(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var u=xn(s.pendingLanes);if(u!==0){var d=s;for(d.pendingLanes|=2,d.entangledLanes|=2;u;){var m=1<<31-nt(u);d.entanglements[1]|=m,u&=~m}zt(s),(Ee&6)===0&&(is=Ct()+500,Yi(0))}}break;case 13:d=dn(s,2),d!==null&&Fe(d,s,2),ls(),Xr(s,2)}if(s=Kr(a),s===null&&zr(e,t,a,Ts,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else zr(e,t,a,null,n)}}function Kr(e){return e=el(e),Wr(e)}var Ts=null;function Wr(e){if(Ts=null,e=Bn(e),e!==null){var t=Z(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=fe(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ts=e,null}function tf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ym()){case _h:return 2;case Ah:return 8;case go:case gm:return 32;case Oh:return 268435456;default:return 32}default:return 32}}var Fr=!1,On=null,Nn=null,Rn=null,Ki=new Map,Wi=new Map,Cn=[],Cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nf(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(t.pointerId)}}function Fi(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=da(t),t!==null&&ef(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hg(e,t,n,a,o){switch(t){case"focusin":return On=Fi(On,e,t,n,a,o),!0;case"dragenter":return Nn=Fi(Nn,e,t,n,a,o),!0;case"mouseover":return Rn=Fi(Rn,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return Ki.set(s,Fi(Ki.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,Wi.set(s,Fi(Wi.get(s)||null,e,t,n,a,o)),!0}return!1}function af(e){var t=Bn(e.target);if(t!==null){var n=Z(t);if(n!==null){if(t=n.tag,t===13){if(t=fe(n),t!==null){e.blockedOn=t,_m(e.priority,function(){if(n.tag===13){var a=lt(),o=dn(n,a);o!==null&&Fe(o,n,a),Xr(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kr(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ps=a,n.target.dispatchEvent(a),Ps=null}else return t=da(n),t!==null&&ef(t),e.blockedOn=n,!1;t.shift()}return!0}function of(e,t,n){Es(e)&&n.delete(t)}function Mg(){Fr=!1,On!==null&&Es(On)&&(On=null),Nn!==null&&Es(Nn)&&(Nn=null),Rn!==null&&Es(Rn)&&(Rn=null),Ki.forEach(of),Wi.forEach(of)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,Fr||(Fr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mg)))}var ks=null;function sf(e){ks!==e&&(ks=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ks===e&&(ks=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Wr(a||n)===null)continue;break}var s=da(n);s!==null&&(e.splice(t,3),t-=3,jl(s,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function Ji(e){function t(m){return Ss(m,e)}On!==null&&Ss(On,e),Nn!==null&&Ss(Nn,e),Rn!==null&&Ss(Rn,e),Ki.forEach(t),Wi.forEach(t);for(var n=0;n<Cn.length;n++){var a=Cn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)af(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],s=n[a+1],u=o[$e]||null;if(typeof s=="function")u||sf(n);else if(u){var d=null;if(s&&s.hasAttribute("formAction")){if(o=s,u=s[$e]||null)d=u.formAction;else if(Wr(o)!==null)continue}else d=u.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),sf(n)}}}function Jr(e){this._internalRoot=e}_s.prototype.render=Jr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,a=lt();$d(n,a,e,t,null,null)},_s.prototype.unmount=Jr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&La(),$d(e.current,2,null,e,null,null),ls(),t[ca]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&af(e)}};var lf=i.version;if(lf!=="19.0.0")throw Error(h(527,lf,"19.0.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=C(t),e=e!==null?q(e):null,e=e===null?null:e.stateNode,e};var Dg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:D,findFiberByHostInstance:Bn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{ni=As.inject(Dg),tt=As}catch{}}return Pi.createRoot=function(e,t){if(!c(e))throw Error(h(299));var n=!1,a="",o=Sc,s=kc,u=_c,d=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks)),t=Fd(e,1,!1,null,null,n,a,o,s,u,d,null),e[ca]=t.current,Ir(e.nodeType===8?e.parentNode:e),new Jr(t)},Pi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(h(299));var a=!1,o="",s=Sc,u=kc,d=_c,m=null,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks),n.formState!==void 0&&(b=n.formState)),t=Fd(e,1,!0,t,n??null,a,o,s,u,d,m,b),t.context=Jd(null),n=t.current,a=lt(),o=wn(a),o.callback=null,vn(n,o,a),t.current.lanes=a,ii(t,a),zt(t),e[ca]=t.current,Ir(e),new _s(t)},Pi.version="19.0.0",Pi}var bf;function Zg(){if(bf)return eh.exports;bf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),eh.exports=qg(),eh.exports}var Gg=Zg();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=function(r){const i=[];let l=0;for(let h=0;h<r.length;h++){let c=r.charCodeAt(h);c<128?i[l++]=c:c<2048?(i[l++]=c>>6|192,i[l++]=c&63|128):(c&64512)===55296&&h+1<r.length&&(r.charCodeAt(h+1)&64512)===56320?(c=65536+((c&1023)<<10)+(r.charCodeAt(++h)&1023),i[l++]=c>>18|240,i[l++]=c>>12&63|128,i[l++]=c>>6&63|128,i[l++]=c&63|128):(i[l++]=c>>12|224,i[l++]=c>>6&63|128,i[l++]=c&63|128)}return i},Xg=function(r){const i=[];let l=0,h=0;for(;l<r.length;){const c=r[l++];if(c<128)i[h++]=String.fromCharCode(c);else if(c>191&&c<224){const f=r[l++];i[h++]=String.fromCharCode((c&31)<<6|f&63)}else if(c>239&&c<365){const f=r[l++],p=r[l++],R=r[l++],k=((c&7)<<18|(f&63)<<12|(p&63)<<6|R&63)-65536;i[h++]=String.fromCharCode(55296+(k>>10)),i[h++]=String.fromCharCode(56320+(k&1023))}else{const f=r[l++],p=r[l++];i[h++]=String.fromCharCode((c&15)<<12|(f&63)<<6|p&63)}}return i.join("")},Qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,i){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const l=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,h=[];for(let c=0;c<r.length;c+=3){const f=r[c],p=c+1<r.length,R=p?r[c+1]:0,k=c+2<r.length,T=k?r[c+2]:0,H=f>>2,j=(f&3)<<4|R>>4;let V=(R&15)<<2|T>>6,te=T&63;k||(te=64,p||(V=64)),h.push(l[H],l[j],l[V],l[te])}return h.join("")},encodeString(r,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(r):this.encodeByteArray(Vg(r),i)},decodeString(r,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(r):Xg(this.decodeStringToByteArray(r,i))},decodeStringToByteArray(r,i){this.init_();const l=i?this.charToByteMapWebSafe_:this.charToByteMap_,h=[];for(let c=0;c<r.length;){const f=l[r.charAt(c++)],R=c<r.length?l[r.charAt(c)]:0;++c;const T=c<r.length?l[r.charAt(c)]:64;++c;const j=c<r.length?l[r.charAt(c)]:64;if(++c,f==null||R==null||T==null||j==null)throw Error();const V=f<<2|R>>4;if(h.push(V),T!==64){const te=R<<4&240|T>>2;if(h.push(te),j!==64){const de=T<<6&192|j;h.push(de)}}}return h},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Kg=function(r){try{return Qg.decodeString(r,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,l)=>{this.resolve=i,this.reject=l})}wrapCallback(i){return(l,h)=>{l?this.reject(l):this.resolve(h),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(l):i(l,h))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Jg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pg(){const r=Xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="FirebaseError";class $a extends Error{constructor(i,l,h){super(l),this.code=i,this.customData=h,this.name=eb,Object.setPrototypeOf(this,$a.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(i,l,h){this.service=i,this.serviceName=l,this.errors=h}create(i,...l){const h=l[0]||{},c=`${this.service}/${i}`,f=this.errors[i],p=f?tb(f,h):"Error",R=`${this.serviceName}: ${p} (${c}).`;return new $a(c,R,h)}}function tb(r,i){return r.replace(nb,(l,h)=>{const c=i[h];return c!=null?String(c):`<${h}?>`})}const nb=/\{\$([^}]+)}/g;function ab(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}function Cs(r,i){if(r===i)return!0;const l=Object.keys(r),h=Object.keys(i);for(const c of l){if(!h.includes(c))return!1;const f=r[c],p=i[c];if(pf(f)&&pf(p)){if(!Cs(f,p))return!1}else if(f!==p)return!1}for(const c of h)if(!l.includes(c))return!1;return!0}function pf(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(r){const i=[];for(const[l,h]of Object.entries(r))Array.isArray(h)?h.forEach(c=>{i.push(encodeURIComponent(l)+"="+encodeURIComponent(c))}):i.push(encodeURIComponent(l)+"="+encodeURIComponent(h));return i.length?"&"+i.join("&"):""}function eo(r){const i={};return r.replace(/^\?/,"").split("&").forEach(h=>{if(h){const[c,f]=h.split("=");i[decodeURIComponent(c)]=decodeURIComponent(f)}}),i}function to(r){const i=r.indexOf("?");if(!i)return"";const l=r.indexOf("#",i);return r.substring(i,l>0?l:void 0)}function ib(r,i){const l=new ob(r,i);return l.subscribe.bind(l)}class ob{constructor(i,l){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=l,this.task.then(()=>{i(this)}).catch(h=>{this.error(h)})}next(i){this.forEachObserver(l=>{l.next(i)})}error(i){this.forEachObserver(l=>{l.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,l,h){let c;if(i===void 0&&l===void 0&&h===void 0)throw new Error("Missing Observer.");sb(i,["next","error","complete"])?c=i:c={next:i,error:l,complete:h},c.next===void 0&&(c.next=ih),c.error===void 0&&(c.error=ih),c.complete===void 0&&(c.complete=ih);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?c.error(this.finalError):c.complete()}catch{}}),this.observers.push(c),f}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let l=0;l<this.observers.length;l++)this.sendOne(l,i)}sendOne(i,l){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{l(this.observers[i])}catch(h){typeof console<"u"&&console.error&&console.error(h)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sb(r,i){if(typeof r!="object"||r===null)return!1;for(const l of i)if(l in r&&typeof r[l]=="function")return!0;return!1}function ih(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(r){return r&&r._delegate?r._delegate:r}class ao{constructor(i,l,h){this.name=i,this.instanceFactory=l,this.type=h,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(i,l){this.name=i,this.container=l,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const l=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(l)){const h=new Wg;if(this.instancesDeferred.set(l,h),this.isInitialized(l)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:l});c&&h.resolve(c)}catch{}}return this.instancesDeferred.get(l).promise}getImmediate(i){var l;const h=this.normalizeInstanceIdentifier(i==null?void 0:i.identifier),c=(l=i==null?void 0:i.optional)!==null&&l!==void 0?l:!1;if(this.isInitialized(h)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:h})}catch(f){if(c)return null;throw f}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(hb(i))try{this.getOrInitializeService({instanceIdentifier:oa})}catch{}for(const[l,h]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(l);try{const f=this.getOrInitializeService({instanceIdentifier:c});h.resolve(f)}catch{}}}}clearInstance(i=oa){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(l=>"INTERNAL"in l).map(l=>l.INTERNAL.delete()),...i.filter(l=>"_delete"in l).map(l=>l._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=oa){return this.instances.has(i)}getOptions(i=oa){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:l={}}=i,h=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(h))throw Error(`${this.name}(${h}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:h,options:l});for(const[f,p]of this.instancesDeferred.entries()){const R=this.normalizeInstanceIdentifier(f);h===R&&p.resolve(c)}return c}onInit(i,l){var h;const c=this.normalizeInstanceIdentifier(l),f=(h=this.onInitCallbacks.get(c))!==null&&h!==void 0?h:new Set;f.add(i),this.onInitCallbacks.set(c,f);const p=this.instances.get(c);return p&&i(p,c),()=>{f.delete(i)}}invokeOnInitCallbacks(i,l){const h=this.onInitCallbacks.get(l);if(h)for(const c of h)try{c(i,l)}catch{}}getOrInitializeService({instanceIdentifier:i,options:l={}}){let h=this.instances.get(i);if(!h&&this.component&&(h=this.component.instanceFactory(this.container,{instanceIdentifier:rb(i),options:l}),this.instances.set(i,h),this.instancesOptions.set(i,l),this.invokeOnInitCallbacks(h,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,h)}catch{}return h||null}normalizeInstanceIdentifier(i=oa){return this.component?this.component.multipleInstances?i:oa:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(r){return r===oa?void 0:r}function hb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const l=this.getProvider(i.name);if(l.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);l.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const l=new lb(i,this);return this.providers.set(i,l),l}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const cb={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},db=ge.INFO,fb={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},mb=(r,i,...l)=>{if(i<r.logLevel)return;const h=new Date().toISOString(),c=fb[i];if(c)console[c](`[${h}]  ${r.name}:`,...l);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class Uf{constructor(i){this.name=i,this._logLevel=db,this._logHandler=mb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in ge))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?cb[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...i),this._logHandler(this,ge.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...i),this._logHandler(this,ge.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...i),this._logHandler(this,ge.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...i),this._logHandler(this,ge.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...i),this._logHandler(this,ge.ERROR,...i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(l=>{if(gb(l)){const h=l.getImmediate();return`${h.library}/${h.version}`}else return null}).filter(l=>l).join(" ")}}function gb(r){const i=r.getComponent();return(i==null?void 0:i.type)==="VERSION"}const hh="@firebase/app",wf="0.7.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new Uf("@firebase/app"),bb="@firebase/app-compat",pb="@firebase/analytics-compat",wb="@firebase/analytics",vb="@firebase/app-check-compat",Tb="@firebase/app-check",Eb="@firebase/auth",Sb="@firebase/auth-compat",kb="@firebase/database",_b="@firebase/database-compat",Ab="@firebase/functions",Ob="@firebase/functions-compat",Nb="@firebase/installations",Rb="@firebase/installations-compat",Cb="@firebase/messaging",Hb="@firebase/messaging-compat",Mb="@firebase/performance",Db="@firebase/performance-compat",Ib="@firebase/remote-config",zb="@firebase/remote-config-compat",Ub="@firebase/storage",xb="@firebase/storage-compat",Bb="@firebase/firestore",jb="@firebase/firestore-compat",Lb="firebase",Yb="9.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="[DEFAULT]",qb={[hh]:"fire-core",[bb]:"fire-core-compat",[wb]:"fire-analytics",[pb]:"fire-analytics-compat",[Tb]:"fire-app-check",[vb]:"fire-app-check-compat",[Eb]:"fire-auth",[Sb]:"fire-auth-compat",[kb]:"fire-rtdb",[_b]:"fire-rtdb-compat",[Ab]:"fire-fn",[Ob]:"fire-fn-compat",[Nb]:"fire-iid",[Rb]:"fire-iid-compat",[Cb]:"fire-fcm",[Hb]:"fire-fcm-compat",[Mb]:"fire-perf",[Db]:"fire-perf-compat",[Ib]:"fire-rc",[zb]:"fire-rc-compat",[Ub]:"fire-gcs",[xb]:"fire-gcs-compat",[Bb]:"fire-fst",[jb]:"fire-fst-compat","fire-js":"fire-js",[Lb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Map,uh=new Map;function Zb(r,i){try{r.container.addComponent(i)}catch(l){mh.debug(`Component ${i.name} failed to register with FirebaseApp ${r.name}`,l)}}function Ms(r){const i=r.name;if(uh.has(i))return mh.debug(`There were multiple attempts to register component ${i}.`),!1;uh.set(i,r);for(const l of Hs.values())Zb(l,r);return!0}function Bf(r,i){return r.container.getProvider(i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},Ds=new so("app","Firebase",Gb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(i,l,h){this._isDeleted=!1,this._options=Object.assign({},i),this._config=Object.assign({},l),this._name=l.name,this._automaticDataCollectionEnabled=l.automaticDataCollectionEnabled,this._container=h,this.container.addComponent(new ao("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw Ds.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=Yb;function Xb(r,i={}){typeof i!="object"&&(i={name:i});const l=Object.assign({name:xf,automaticDataCollectionEnabled:!1},i),h=l.name;if(typeof h!="string"||!h)throw Ds.create("bad-app-name",{appName:String(h)});const c=Hs.get(h);if(c){if(Cs(r,c.options)&&Cs(l,c.config))return c;throw Ds.create("duplicate-app",{appName:h})}const f=new ub(h);for(const R of uh.values())f.addComponent(R);const p=new Vb(r,l,f);return Hs.set(h,p),p}function Qb(r=xf){const i=Hs.get(r);if(!i)throw Ds.create("no-app",{appName:r});return i}function Ka(r,i,l){var h;let c=(h=qb[r])!==null&&h!==void 0?h:r;l&&(c+=`-${l}`);const f=c.match(/\s|\//),p=i.match(/\s|\//);if(f||p){const R=[`Unable to register library "${c}" with version "${i}":`];f&&R.push(`library name "${c}" contains illegal characters (whitespace or "/")`),f&&p&&R.push("and"),p&&R.push(`version name "${i}" contains illegal characters (whitespace or "/")`),mh.warn(R.join(" "));return}Ms(new ao(`${c}-version`,()=>({library:c,version:i}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(r){Ms(new ao("platform-logger",i=>new yb(i),"PRIVATE")),Ka(hh,wf,r),Ka(hh,wf,"esm2017"),Ka("fire-js","")}Kb("");function yh(r,i){var l={};for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&i.indexOf(h)<0&&(l[h]=r[h]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,h=Object.getOwnPropertySymbols(r);c<h.length;c++)i.indexOf(h[c])<0&&Object.prototype.propertyIsEnumerable.call(r,h[c])&&(l[h[c]]=r[h[c]]);return l}function jf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wb=jf,Lf=new so("auth","Firebase",jf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Uf("@firebase/auth");function Os(r,...i){vf.logLevel<=ge.ERROR&&vf.error(`Auth (${Bs}): ${r}`,...i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(r,...i){throw gh(r,...i)}function Ut(r,...i){return gh(r,...i)}function Fb(r,i,l){const h=Object.assign(Object.assign({},Wb()),{[i]:l});return new so("auth","Firebase",h).create(i,{appName:r.name})}function gh(r,...i){if(typeof r!="string"){const l=i[0],h=[...i.slice(1)];return h[0]&&(h[0].appName=r.name),r._errorFactory.create(l,...h)}return Lf.create(r,...i)}function G(r,i,...l){if(!r)throw gh(i,...l)}function on(r){const i="INTERNAL ASSERTION FAILED: "+r;throw Os(i),new Error(i)}function ln(r,i){r||on(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;function sn(r){ln(r instanceof Function,"Expected a class definition");let i=Tf.get(r);return i?(ln(i instanceof r,"Instance stored in cache mismatched with class"),i):(i=new r,Tf.set(r,i),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(r,i){const l=Bf(r,"auth");if(l.isInitialized()){const c=l.getImmediate(),f=l.getOptions();if(Cs(f,i??{}))return c;At(c,"already-initialized")}return l.initialize({options:i})}function $b(r,i){const l=(i==null?void 0:i.persistence)||[],h=(Array.isArray(l)?l:[l]).map(sn);i!=null&&i.errorMap&&r._updateErrorMap(i.errorMap),r._initializeWithPersistence(h,i==null?void 0:i.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Pb(){return Ef()==="http:"||Ef()==="https:"}function Ef(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pb()||Jg()||"connection"in navigator)?navigator.onLine:!0}function tp(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(i,l){this.shortDelay=i,this.longDelay=l,ln(l>i,"Short delay should be less than long delay!"),this.isMobile=Fg()||$g()}get(){return ep()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(r,i){ln(r.emulator,"Emulator should always be set here");const{url:l}=r.emulator;return i?`${l}${i.startsWith("/")?i.slice(1):i}`:l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{static initialize(i,l,h){this.fetchImpl=i,l&&(this.headersImpl=l),h&&(this.responseImpl=h)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new ro(3e4,6e4);function Pa(r,i){return r.tenantId&&!i.tenantId?Object.assign(Object.assign({},i),{tenantId:r.tenantId}):i}async function ha(r,i,l,h,c={}){return qf(r,c,async()=>{let f={},p={};h&&(i==="GET"?p=h:f={body:JSON.stringify(h)});const R=lo(Object.assign({key:r.config.apiKey},p)).slice(1),k=await r._getAdditionalHeaders();return k["Content-Type"]="application/json",r.languageCode&&(k["X-Firebase-Locale"]=r.languageCode),Yf.fetch()(Zf(r,r.config.apiHost,l,R),Object.assign({method:i,headers:k,referrerPolicy:"no-referrer"},f))})}async function qf(r,i,l){r._canInitEmulator=!1;const h=Object.assign(Object.assign({},np),i);try{const c=new ip(r),f=await Promise.race([l(),c.promise]);c.clearNetworkTimeout();const p=await f.json();if("needConfirmation"in p)throw oh(r,"account-exists-with-different-credential",p);if(f.ok&&!("errorMessage"in p))return p;{const R=f.ok?p.errorMessage:p.error.message,[k,T]=R.split(" : ");if(k==="FEDERATED_USER_ID_ALREADY_LINKED")throw oh(r,"credential-already-in-use",p);if(k==="EMAIL_EXISTS")throw oh(r,"email-already-in-use",p);const H=h[k]||k.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw Fb(r,H,T);At(r,H)}}catch(c){if(c instanceof $a)throw c;At(r,"network-request-failed")}}async function ho(r,i,l,h,c={}){const f=await ha(r,i,l,h,c);return"mfaPendingCredential"in f&&At(r,"multi-factor-auth-required",{_serverResponse:f}),f}function Zf(r,i,l,h){const c=`${i}${l}?${h}`;return r.config.emulator?bh(r.config,c):`${r.config.apiScheme}://${c}`}class ip{constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((l,h)=>{this.timer=setTimeout(()=>h(Ut(this.auth,"network-request-failed")),ap.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oh(r,i,l){const h={appName:r.name};l.email&&(h.email=l.email),l.phoneNumber&&(h.phoneNumber=l.phoneNumber);const c=Ut(r,i,h);return c.customData._tokenResponse=l,c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(r,i){return ha(r,"POST","/v1/accounts:delete",i)}async function sp(r,i){return ha(r,"POST","/v1/accounts:lookup",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(r){if(r)try{const i=new Date(Number(r));if(!isNaN(i.getTime()))return i.toUTCString()}catch{}}async function lp(r,i=!1){const l=Bt(r),h=await l.getIdToken(i),c=ph(h);G(c&&c.exp&&c.auth_time&&c.iat,l.auth,"internal-error");const f=typeof c.firebase=="object"?c.firebase:void 0,p=f==null?void 0:f.sign_in_provider;return{claims:c,token:h,authTime:no(sh(c.auth_time)),issuedAtTime:no(sh(c.iat)),expirationTime:no(sh(c.exp)),signInProvider:p||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function sh(r){return Number(r)*1e3}function ph(r){const[i,l,h]=r.split(".");if(i===void 0||l===void 0||h===void 0)return Os("JWT malformed, contained fewer than 3 sections"),null;try{const c=Kg(l);return c?JSON.parse(c):(Os("Failed to decode base64 JWT payload"),null)}catch(c){return Os("Caught error parsing JWT payload as JSON",c),null}}function rp(r){const i=ph(r);return G(i,"internal-error"),G(typeof i.exp<"u","internal-error"),G(typeof i.iat<"u","internal-error"),Number(i.exp)-Number(i.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(r,i,l=!1){if(l)return i;try{return await i}catch(h){throw h instanceof $a&&hp(h)&&r.auth.currentUser===r&&await r.auth.signOut(),h}}function hp({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(i){var l;if(i){const h=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),h}else{this.errorBackoff=3e4;const c=((l=this.user.stsTokenManager.expirationTime)!==null&&l!==void 0?l:0)-Date.now()-3e5;return Math.max(0,c)}}schedule(i=!1){if(!this.isRunning)return;const l=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},l)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){i.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(i,l){this.createdAt=i,this.lastLoginAt=l,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(i){this.createdAt=i.createdAt,this.lastLoginAt=i.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(r){var i;const l=r.auth,h=await r.getIdToken(),c=await Ja(r,sp(l,{idToken:h}));G(c==null?void 0:c.users.length,l,"internal-error");const f=c.users[0];r._notifyReloadListener(f);const p=!((i=f.providerUserInfo)===null||i===void 0)&&i.length?fp(f.providerUserInfo):[],R=dp(r.providerData,p),k=r.isAnonymous,T=!(r.email&&f.passwordHash)&&!(R!=null&&R.length),H=k?T:!1,j={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:R,metadata:new Gf(f.createdAt,f.lastLoginAt),isAnonymous:H};Object.assign(r,j)}async function cp(r){const i=Bt(r);await Is(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function dp(r,i){return[...r.filter(h=>!i.some(c=>c.providerId===h.providerId)),...i]}function fp(r){return r.map(i=>{var{providerId:l}=i,h=yh(i,["providerId"]);return{providerId:l,uid:h.rawId||"",displayName:h.displayName||null,email:h.email||null,phoneNumber:h.phoneNumber||null,photoURL:h.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(r,i){const l=await qf(r,{},async()=>{const h=lo({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:c,apiKey:f}=r.config,p=Zf(r,c,"/v1/token",`key=${f}`),R=await r._getAdditionalHeaders();return R["Content-Type"]="application/x-www-form-urlencoded",Yf.fetch()(p,{method:"POST",headers:R,body:h})});return{accessToken:l.access_token,expiresIn:l.expires_in,refreshToken:l.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){G(i.idToken,"internal-error"),G(typeof i.idToken<"u","internal-error"),G(typeof i.refreshToken<"u","internal-error");const l="expiresIn"in i&&typeof i.expiresIn<"u"?Number(i.expiresIn):rp(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,l)}async getToken(i,l=!1){return G(!this.accessToken||this.refreshToken,i,"user-token-expired"),!l&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(i,l){const{accessToken:h,refreshToken:c,expiresIn:f}=await mp(i,l);this.updateTokensAndExpiration(h,c,Number(f))}updateTokensAndExpiration(i,l,h){this.refreshToken=l||null,this.accessToken=i||null,this.expirationTime=Date.now()+h*1e3}static fromJSON(i,l){const{refreshToken:h,accessToken:c,expirationTime:f}=l,p=new io;return h&&(G(typeof h=="string","internal-error",{appName:i}),p.refreshToken=h),c&&(G(typeof c=="string","internal-error",{appName:i}),p.accessToken=c),f&&(G(typeof f=="number","internal-error",{appName:i}),p.expirationTime=f),p}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(r,i){G(typeof r=="string"||typeof r>"u","internal-error",{appName:i})}class sa{constructor(i){var{uid:l,auth:h,stsTokenManager:c}=i,f=yh(i,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new up(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=l,this.auth=h,this.stsTokenManager=c,this.accessToken=c.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new Gf(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(i){const l=await Ja(this,this.stsTokenManager.getToken(this.auth,i));return G(l,this.auth,"internal-error"),this.accessToken!==l&&(this.accessToken=l,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),l}getIdTokenResult(i){return lp(this,i)}reload(){return cp(this)}_assign(i){this!==i&&(G(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(l=>Object.assign({},l)),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){return new sa(Object.assign(Object.assign({},this),{auth:i,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(i){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,l=!1){let h=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),h=!0),l&&await Is(this),await this.auth._persistUserIfCurrent(this),h&&this.auth._notifyListenersIfCurrent(this)}async delete(){const i=await this.getIdToken();return await Ja(this,op(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>Object.assign({},i)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,l){var h,c,f,p,R,k,T,H;const j=(h=l.displayName)!==null&&h!==void 0?h:void 0,V=(c=l.email)!==null&&c!==void 0?c:void 0,te=(f=l.phoneNumber)!==null&&f!==void 0?f:void 0,de=(p=l.photoURL)!==null&&p!==void 0?p:void 0,Oe=(R=l.tenantId)!==null&&R!==void 0?R:void 0,ue=(k=l._redirectEventId)!==null&&k!==void 0?k:void 0,Ne=(T=l.createdAt)!==null&&T!==void 0?T:void 0,pe=(H=l.lastLoginAt)!==null&&H!==void 0?H:void 0,{uid:ve,emailVerified:le,isAnonymous:B,providerData:be,stsTokenManager:Qe}=l;G(ve&&Qe,i,"internal-error");const rt=io.fromJSON(this.name,Qe);G(typeof ve=="string",i,"internal-error"),Mn(j,i.name),Mn(V,i.name),G(typeof le=="boolean",i,"internal-error"),G(typeof B=="boolean",i,"internal-error"),Mn(te,i.name),Mn(de,i.name),Mn(Oe,i.name),Mn(ue,i.name),Mn(Ne,i.name),Mn(pe,i.name);const D=new sa({uid:ve,auth:i,email:V,emailVerified:le,displayName:j,isAnonymous:B,photoURL:de,phoneNumber:te,tenantId:Oe,stsTokenManager:rt,createdAt:Ne,lastLoginAt:pe});return be&&Array.isArray(be)&&(D.providerData=be.map(W=>Object.assign({},W))),ue&&(D._redirectEventId=ue),D}static async _fromIdTokenResponse(i,l,h=!1){const c=new io;c.updateFromServerResponse(l);const f=new sa({uid:l.localId,auth:i,stsTokenManager:c,isAnonymous:h});return await Is(f),f}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,l){this.storage[i]=l}async _get(i){const l=this.storage[i];return l===void 0?null:l}async _remove(i){delete this.storage[i]}_addListener(i,l){}_removeListener(i,l){}}Vf.type="NONE";const Sf=Vf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(r,i,l){return`firebase:${r}:${i}:${l}`}class Wa{constructor(i,l,h){this.persistence=i,this.auth=l,this.userKey=h;const{config:c,name:f}=this.auth;this.fullUserKey=Ns(this.userKey,c.apiKey,f),this.fullPersistenceKey=Ns("persistence",c.apiKey,f),this.boundEventHandler=l._onStorageEvent.bind(l),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){const i=await this.persistence._get(this.fullUserKey);return i?sa._fromJSON(this.auth,i):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;const l=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,l)return this.setCurrentUser(l)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,l,h="authUser"){if(!l.length)return new Wa(sn(Sf),i,h);const c=(await Promise.all(l.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let f=c[0]||sn(Sf);const p=Ns(h,i.config.apiKey,i.name);let R=null;for(const T of l)try{const H=await T._get(p);if(H){const j=sa._fromJSON(i,H);T!==f&&(R=j),f=T;break}}catch{}const k=c.filter(T=>T._shouldAllowMigration);return!f._shouldAllowMigration||!k.length?new Wa(f,i,h):(f=k[0],R&&await f._set(p,R.toJSON()),await Promise.all(l.map(async T=>{if(T!==f)try{await T._remove(p)}catch{}})),new Wa(f,i,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(r){const i=r.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(Kf(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(Xf(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(Ff(i))return"Blackberry";if(Jf(i))return"Webos";if(wh(i))return"Safari";if((i.includes("chrome/")||Qf(i))&&!i.includes("edge/"))return"Chrome";if(Wf(i))return"Android";{const l=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,h=r.match(l);if((h==null?void 0:h.length)===2)return h[1]}return"Other"}function Xf(r=Xe()){return/firefox\//i.test(r)}function wh(r=Xe()){const i=r.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function Qf(r=Xe()){return/crios\//i.test(r)}function Kf(r=Xe()){return/iemobile/i.test(r)}function Wf(r=Xe()){return/android/i.test(r)}function Ff(r=Xe()){return/blackberry/i.test(r)}function Jf(r=Xe()){return/webos/i.test(r)}function js(r=Xe()){return/iphone|ipad|ipod/i.test(r)}function yp(r=Xe()){var i;return js(r)&&!!(!((i=window.navigator)===null||i===void 0)&&i.standalone)}function gp(){return Pg()&&document.documentMode===10}function $f(r=Xe()){return js(r)||Wf(r)||Jf(r)||Ff(r)||/windows phone/i.test(r)||Kf(r)}function bp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(r,i=[]){let l;switch(r){case"Browser":l=kf(Xe());break;case"Worker":l=`${kf(Xe())}-${r}`;break;default:l=r}const h=i.length?i.join(","):"FirebaseCore-web";return`${l}/JsCore/${Bs}/${h}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(i,l){this.app=i,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _f(this),this.idTokenSubscription=new _f(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(i,l){return l&&(this._popupRedirectResolver=sn(l)),this._initializationPromise=this.queue(async()=>{var h,c;if(!this._deleted&&(this.persistenceManager=await Wa.create(this,i),!this._deleted)){if(!((h=this._popupRedirectResolver)===null||h===void 0)&&h._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(l),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const i=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!i)){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i)}}async initializeCurrentUser(i){var l;let h=await this.assertedPersistence.getCurrentUser();if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)===null||l===void 0?void 0:l._redirectEventId,f=h==null?void 0:h._redirectEventId,p=await this.tryRedirectSignIn(i);(!c||c===f)&&(p!=null&&p.user)&&(h=p.user)}return h?h._redirectEventId?(G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===h._redirectEventId?this.directlySetCurrentUser(h):this.reloadAndSetCurrentUserOrClear(h)):this.reloadAndSetCurrentUserOrClear(h):this.directlySetCurrentUser(null)}async tryRedirectSignIn(i){let l=null;try{l=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch{await this._setRedirectUser(null)}return l}async reloadAndSetCurrentUserOrClear(i){try{await Is(i)}catch(l){if(l.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=tp()}async _delete(){this._deleted=!0}async updateCurrentUser(i){const l=i?Bt(i):null;return l&&G(l.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(l&&l._clone(this))}async _updateCurrentUser(i){if(!this._deleted)return i&&G(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(i){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(i))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(i){this._errorFactory=new so("auth","Firebase",i())}onAuthStateChanged(i,l,h){return this.registerStateListener(this.authStateSubscription,i,l,h)}onIdTokenChanged(i,l,h){return this.registerStateListener(this.idTokenSubscription,i,l,h)}toJSON(){var i;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(i=this._currentUser)===null||i===void 0?void 0:i.toJSON()}}async _setRedirectUser(i,l){const h=await this.getOrInitRedirectPersistenceManager(l);return i===null?h.removeCurrentUser():h.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){const l=i&&sn(i)||this._popupRedirectResolver;G(l,this,"argument-error"),this.redirectPersistenceManager=await Wa.create(this,[sn(l._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){var l,h;return this._isInitialized&&await this.queue(async()=>{}),((l=this._currentUser)===null||l===void 0?void 0:l._redirectEventId)===i?this._currentUser:((h=this.redirectUser)===null||h===void 0?void 0:h._redirectEventId)===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i,l;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const h=(l=(i=this.currentUser)===null||i===void 0?void 0:i.uid)!==null&&l!==void 0?l:null;this.lastNotifiedUid!==h&&(this.lastNotifiedUid=h,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,l,h,c){if(this._deleted)return()=>{};const f=typeof l=="function"?l:l.next.bind(l),p=this._isInitialized?Promise.resolve():this._initializationPromise;return G(p,this,"internal-error"),p.then(()=>f(this.currentUser)),typeof l=="function"?i.addObserver(l,h,c):i.addObserver(l)}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&(this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh()),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=Pf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const i={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId),i}}function Ls(r){return Bt(r)}class _f{constructor(i){this.auth=i,this.observer=null,this.addObserver=ib(l=>this.observer=l)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(i,l){this.providerId=i,this.signInMethod=l}toJSON(){return on("not implemented")}_getIdTokenResponse(i){return on("not implemented")}_linkToIdToken(i,l){return on("not implemented")}_getReauthenticationResolver(i){return on("not implemented")}}async function wp(r,i){return ha(r,"POST","/v1/accounts:update",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(r,i){return ho(r,"POST","/v1/accounts:signInWithPassword",Pa(r,i))}async function Tp(r,i){return ha(r,"POST","/v1/accounts:sendOobCode",Pa(r,i))}async function Ep(r,i){return Tp(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(r,i){return ho(r,"POST","/v1/accounts:signInWithEmailLink",Pa(r,i))}async function kp(r,i){return ho(r,"POST","/v1/accounts:signInWithEmailLink",Pa(r,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends vh{constructor(i,l,h,c=null){super("password",h),this._email=i,this._password=l,this._tenantId=c}static _fromEmailAndPassword(i,l){return new oo(i,l,"password")}static _fromEmailAndCode(i,l,h=null){return new oo(i,l,"emailLink",h)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(i){const l=typeof i=="string"?JSON.parse(i):i;if(l!=null&&l.email&&(l!=null&&l.password)){if(l.signInMethod==="password")return this._fromEmailAndPassword(l.email,l.password);if(l.signInMethod==="emailLink")return this._fromEmailAndCode(l.email,l.password,l.tenantId)}return null}async _getIdTokenResponse(i){switch(this.signInMethod){case"password":return vp(i,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sp(i,{email:this._email,oobCode:this._password});default:At(i,"internal-error")}}async _linkToIdToken(i,l){switch(this.signInMethod){case"password":return wp(i,{idToken:l,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kp(i,{idToken:l,email:this._email,oobCode:this._password});default:At(i,"internal-error")}}_getReauthenticationResolver(i){return this._getIdTokenResponse(i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(r,i){return ho(r,"POST","/v1/accounts:signInWithIdp",Pa(r,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="http://localhost";class la extends vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){const l=new la(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(l.idToken=i.idToken),i.accessToken&&(l.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(l.nonce=i.nonce),i.pendingToken&&(l.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(l.accessToken=i.oauthToken,l.secret=i.oauthTokenSecret):At("argument-error"),l}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){const l=typeof i=="string"?JSON.parse(i):i,{providerId:h,signInMethod:c}=l,f=yh(l,["providerId","signInMethod"]);if(!h||!c)return null;const p=new la(h,c);return p.idToken=f.idToken||void 0,p.accessToken=f.accessToken||void 0,p.secret=f.secret,p.nonce=f.nonce,p.pendingToken=f.pendingToken||null,p}_getIdTokenResponse(i){const l=this.buildRequest();return Fa(i,l)}_linkToIdToken(i,l){const h=this.buildRequest();return h.idToken=l,Fa(i,h)}_getReauthenticationResolver(i){const l=this.buildRequest();return l.autoCreate=!1,Fa(i,l)}buildRequest(){const i={requestUri:_p,returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{const l={};this.idToken&&(l.id_token=this.idToken),this.accessToken&&(l.access_token=this.accessToken),this.secret&&(l.oauth_token_secret=this.secret),l.providerId=this.providerId,this.nonce&&!this.pendingToken&&(l.nonce=this.nonce),i.postBody=lo(l)}return i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Op(r){const i=eo(to(r)).link,l=i?eo(to(i)).deep_link_id:null,h=eo(to(r)).deep_link_id;return(h?eo(to(h)).link:null)||h||l||i||r}class Th{constructor(i){var l,h,c,f,p,R;const k=eo(to(i)),T=(l=k.apiKey)!==null&&l!==void 0?l:null,H=(h=k.oobCode)!==null&&h!==void 0?h:null,j=Ap((c=k.mode)!==null&&c!==void 0?c:null);G(T&&H&&j,"argument-error"),this.apiKey=T,this.operation=j,this.code=H,this.continueUrl=(f=k.continueUrl)!==null&&f!==void 0?f:null,this.languageCode=(p=k.languageCode)!==null&&p!==void 0?p:null,this.tenantId=(R=k.tenantId)!==null&&R!==void 0?R:null}static parseLink(i){const l=Op(i);try{return new Th(l)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(i,l){return oo._fromEmailAndPassword(i,l)}static credentialWithLink(i,l){const h=Th.parseLink(l);return G(h,"argument-error"),oo._fromEmailAndCode(i,h.code,h.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends em{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends uo{constructor(){super("facebook.com")}static credential(i){return la._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return Dn.credentialFromTaggedObject(i)}static credentialFromError(i){return Dn.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return Dn.credential(i.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(i,l){return la._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:i,accessToken:l})}static credentialFromResult(i){return In.credentialFromTaggedObject(i)}static credentialFromError(i){return In.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthIdToken:l,oauthAccessToken:h}=i;if(!l&&!h)return null;try{return In.credential(l,h)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends uo{constructor(){super("github.com")}static credential(i){return la._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return zn.credentialFromTaggedObject(i)}static credentialFromError(i){return zn.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return zn.credential(i.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends uo{constructor(){super("twitter.com")}static credential(i,l){return la._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:i,oauthTokenSecret:l})}static credentialFromResult(i){return Un.credentialFromTaggedObject(i)}static credentialFromError(i){return Un.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthAccessToken:l,oauthTokenSecret:h}=i;if(!l||!h)return null;try{return Un.credential(l,h)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(r,i){return ho(r,"POST","/v1/accounts:signUp",Pa(r,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,l,h,c=!1){const f=await sa._fromIdTokenResponse(i,h,c),p=Af(h);return new ra({user:f,providerId:p,_tokenResponse:h,operationType:l})}static async _forOperation(i,l,h){await i._updateTokensIfNecessary(h,!0);const c=Af(h);return new ra({user:i,providerId:c,_tokenResponse:h,operationType:l})}}function Af(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends $a{constructor(i,l,h,c){var f;super(l.code,l.message),this.operationType=h,this.user=c,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:i.name,tenantId:(f=i.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:l.customData._serverResponse,operationType:h}}static _fromErrorAndOperation(i,l,h,c){return new zs(i,l,h,c)}}function tm(r,i,l,h){return(i==="reauthenticate"?l._getReauthenticationResolver(r):l._getIdTokenResponse(r)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(r,f,i,h):f})}async function Rp(r,i,l=!1){const h=await Ja(r,i._linkToIdToken(r.auth,await r.getIdToken()),l);return ra._forOperation(r,"link",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(r,i,l=!1){const{auth:h}=r,c="reauthenticate";try{const f=await Ja(r,tm(h,c,i,r),l);G(f.idToken,h,"internal-error");const p=ph(f.idToken);G(p,h,"internal-error");const{sub:R}=p;return G(r.uid===R,h,"user-mismatch"),ra._forOperation(r,c,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&At(h,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(r,i,l=!1){const h="signIn",c=await tm(r,h,i),f=await ra._fromIdTokenResponse(r,h,c);return l||await r._updateCurrentUser(f.user),f}async function Hp(r,i){return nm(Ls(r),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(r,i,l){const h=Bt(r);await Ep(h,{requestType:"PASSWORD_RESET",email:i})}async function Dp(r,i,l){const h=Ls(r),c=await Np(h,{returnSecureToken:!0,email:i,password:l}),f=await ra._fromIdTokenResponse(h,"signIn",c);return await h._updateCurrentUser(f.user),f}function Ip(r,i,l){return Hp(Bt(r),ei.credential(i,l))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(r,i){return ha(r,"POST","/v1/accounts:update",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(r,{displayName:i,photoURL:l}){if(i===void 0&&l===void 0)return;const h=Bt(r),f={idToken:await h.getIdToken(),displayName:i,photoUrl:l,returnSecureToken:!0},p=await Ja(h,zp(h.auth,f));h.displayName=p.displayName||null,h.photoURL=p.photoUrl||null;const R=h.providerData.find(({providerId:k})=>k==="password");R&&(R.displayName=h.displayName,R.photoURL=h.photoURL),await h._updateTokensIfNecessary(p)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(r,i){return Bt(r).setPersistence(i)}function Bp(r,i,l,h){return Bt(r).onAuthStateChanged(i,l,h)}function jp(r){return Bt(r).signOut()}const Us="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(i,l){this.storageRetriever=i,this.type=l}_isAvailable(){try{return this.storage?(this.storage.setItem(Us,"1"),this.storage.removeItem(Us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(i,l){return this.storage.setItem(i,JSON.stringify(l)),Promise.resolve()}_get(i){const l=this.storage.getItem(i);return Promise.resolve(l?JSON.parse(l):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){const r=Xe();return wh(r)||js(r)}const Yp=1e3,qp=10;class im extends am{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,l)=>this.onStorageEvent(i,l),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lp()&&bp(),this.fallbackToPolling=$f(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(const l of Object.keys(this.listeners)){const h=this.storage.getItem(l),c=this.localCache[l];h!==c&&i(l,c,h)}}onStorageEvent(i,l=!1){if(!i.key){this.forAllChangedKeys((p,R,k)=>{this.notifyListeners(p,k)});return}const h=i.key;if(l?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const p=this.storage.getItem(h);if(i.newValue!==p)i.newValue!==null?this.storage.setItem(h,i.newValue):this.storage.removeItem(h);else if(this.localCache[h]===i.newValue&&!l)return}const c=()=>{const p=this.storage.getItem(h);!l&&this.localCache[h]===p||this.notifyListeners(h,p)},f=this.storage.getItem(h);gp()&&f!==i.newValue&&i.newValue!==i.oldValue?setTimeout(c,qp):c()}notifyListeners(i,l){this.localCache[i]=l;const h=this.listeners[i];if(h)for(const c of Array.from(h))c(l&&JSON.parse(l))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,l,h)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:l,newValue:h}),!0)})},Yp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,l){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(l)}_removeListener(i,l){this.listeners[i]&&(this.listeners[i].delete(l),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(i,l){await super._set(i,l),this.localCache[i]=JSON.stringify(l)}async _get(i){const l=await super._get(i);return this.localCache[i]=JSON.stringify(l),l}async _remove(i){await super._remove(i),delete this.localCache[i]}}im.type="LOCAL";const om=im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,l){}_removeListener(i,l){}}sm.type="SESSION";const Eh=sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(r){return Promise.all(r.map(async i=>{try{return{fulfilled:!0,value:await i}}catch(l){return{fulfilled:!1,reason:l}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){const l=this.receivers.find(c=>c.isListeningto(i));if(l)return l;const h=new Ys(i);return this.receivers.push(h),h}isListeningto(i){return this.eventTarget===i}async handleEvent(i){const l=i,{eventId:h,eventType:c,data:f}=l.data,p=this.handlersMap[c];if(!(p!=null&&p.size))return;l.ports[0].postMessage({status:"ack",eventId:h,eventType:c});const R=Array.from(p).map(async T=>T(l.origin,f)),k=await Zp(R);l.ports[0].postMessage({status:"done",eventId:h,eventType:c,response:k})}_subscribe(i,l){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(l)}_unsubscribe(i,l){this.handlersMap[i]&&l&&this.handlersMap[i].delete(l),(!l||this.handlersMap[i].size===0)&&delete this.handlersMap[i],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(r="",i=10){let l="";for(let h=0;h<i;h++)l+=Math.floor(Math.random()*10);return r+l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,l,h=50){const c=typeof MessageChannel<"u"?new MessageChannel:null;if(!c)throw new Error("connection_unavailable");let f,p;return new Promise((R,k)=>{const T=Sh("",20);c.port1.start();const H=setTimeout(()=>{k(new Error("unsupported_event"))},h);p={messageChannel:c,onMessage(j){const V=j;if(V.data.eventId===T)switch(V.data.status){case"ack":clearTimeout(H),f=setTimeout(()=>{k(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),R(V.data.response);break;default:clearTimeout(H),clearTimeout(f),k(new Error("invalid_response"));break}}},this.handlers.add(p),c.port1.addEventListener("message",p.onMessage),this.target.postMessage({eventType:i,eventId:T,data:l},[c.port2])}).finally(()=>{p&&this.removeMessageHandler(p)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function Vp(r){xt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function Xp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qp(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Kp(){return lm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="firebaseLocalStorageDb",Wp=1,xs="firebaseLocalStorage",hm="fbase_key";class co{constructor(i){this.request=i}toPromise(){return new Promise((i,l)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{l(this.request.error)})})}}function qs(r,i){return r.transaction([xs],i?"readwrite":"readonly").objectStore(xs)}function Fp(){const r=indexedDB.deleteDatabase(rm);return new co(r).toPromise()}function dh(){const r=indexedDB.open(rm,Wp);return new Promise((i,l)=>{r.addEventListener("error",()=>{l(r.error)}),r.addEventListener("upgradeneeded",()=>{const h=r.result;try{h.createObjectStore(xs,{keyPath:hm})}catch(c){l(c)}}),r.addEventListener("success",async()=>{const h=r.result;h.objectStoreNames.contains(xs)?i(h):(h.close(),await Fp(),i(await dh()))})})}async function Of(r,i,l){const h=qs(r,!0).put({[hm]:i,value:l});return new co(h).toPromise()}async function Jp(r,i){const l=qs(r,!1).get(i),h=await new co(l).toPromise();return h===void 0?null:h.value}function Nf(r,i){const l=qs(r,!0).delete(i);return new co(l).toPromise()}const $p=800,Pp=3;class um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dh(),this.db)}async _withRetries(i){let l=0;for(;;)try{const h=await this._openDb();return await i(h)}catch(h){if(l++>Pp)throw h;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(Kp()),this.receiver._subscribe("keyChanged",async(i,l)=>({keyProcessed:(await this._poll()).includes(l.key)})),this.receiver._subscribe("ping",async(i,l)=>["keyChanged"])}async initializeSender(){var i,l;if(this.activeServiceWorker=await Xp(),!this.activeServiceWorker)return;this.sender=new Gp(this.activeServiceWorker);const h=await this.sender._send("ping",{},800);h&&!((i=h[0])===null||i===void 0)&&i.fulfilled&&!((l=h[0])===null||l===void 0)&&l.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){if(!(!this.sender||!this.activeServiceWorker||Qp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const i=await dh();return await Of(i,Us,"1"),await Nf(i,Us),!0}catch{}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,l){return this._withPendingWrite(async()=>(await this._withRetries(h=>Of(h,i,l)),this.localCache[i]=l,this.notifyServiceWorker(i)))}async _get(i){const l=await this._withRetries(h=>Jp(h,i));return this.localCache[i]=l,l}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(l=>Nf(l,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){const i=await this._withRetries(c=>{const f=qs(c,!1).getAll();return new co(f).toPromise()});if(!i)return[];if(this.pendingWrites!==0)return[];const l=[],h=new Set;for(const{fbase_key:c,value:f}of i)h.add(c),JSON.stringify(this.localCache[c])!==JSON.stringify(f)&&(this.notifyListeners(c,f),l.push(c));for(const c of Object.keys(this.localCache))this.localCache[c]&&!h.has(c)&&(this.notifyListeners(c,null),l.push(c));return l}notifyListeners(i,l){this.localCache[i]=l;const h=this.listeners[i];if(h)for(const c of Array.from(h))c(l)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,l){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(l)}_removeListener(i,l){this.listeners[i]&&(this.listeners[i].delete(l),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&this.stopPolling()}}um.type="LOCAL";const ew=um;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){var r,i;return(i=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&i!==void 0?i:document}function nw(r){return new Promise((i,l)=>{const h=document.createElement("script");h.setAttribute("src",r),h.onload=i,h.onerror=c=>{const f=Ut("internal-error");f.customData=c,l(f)},h.type="text/javascript",h.charset="UTF-8",tw().appendChild(h)})}function aw(r){return`__${r}${Math.floor(Math.random()*1e6)}`}new ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(r,i){return i?sn(i):(G(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends vh{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return Fa(i,this._buildIdpRequest())}_linkToIdToken(i,l){return Fa(i,this._buildIdpRequest(l))}_getReauthenticationResolver(i){return Fa(i,this._buildIdpRequest())}_buildIdpRequest(i){const l={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(l.idToken=i),l}}function ow(r){return nm(r.auth,new kh(r),r.bypassAuthState)}function sw(r){const{auth:i,user:l}=r;return G(l,i,"internal-error"),Cp(l,new kh(r),r.bypassAuthState)}async function lw(r){const{auth:i,user:l}=r;return G(l,i,"internal-error"),Rp(l,new kh(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(i,l,h,c,f=!1){this.auth=i,this.resolver=h,this.user=c,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(l)?l:[l]}execute(){return new Promise(async(i,l)=>{this.pendingPromise={resolve:i,reject:l};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(h){this.reject(h)}})}async onAuthEvent(i){const{urlResponse:l,sessionId:h,postBody:c,tenantId:f,error:p,type:R}=i;if(p){this.reject(p);return}const k={auth:this.auth,requestUri:l,sessionId:h,tenantId:f||void 0,postBody:c||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(R)(k))}catch(T){this.reject(T)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return lw;case"reauthViaPopup":case"reauthViaRedirect":return sw;default:At(this.auth,"internal-error")}}resolve(i){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new ro(2e3,1e4);class Qa extends cm{constructor(i,l,h,c,f){super(i,l,c,f),this.provider=h,this.authWindow=null,this.pollId=null,Qa.currentPopupAction&&Qa.currentPopupAction.cancel(),Qa.currentPopupAction=this}async executeNotNull(){const i=await this.execute();return G(i,this.auth,"internal-error"),i}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const i=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(l=>{this.reject(l)}),this.resolver._isIframeWebStorageSupported(this.auth,l=>{l||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var i;return((i=this.authWindow)===null||i===void 0?void 0:i.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qa.currentPopupAction=null}pollUserCancellation(){const i=()=>{var l,h;if(!((h=(l=this.authWindow)===null||l===void 0?void 0:l.window)===null||h===void 0)&&h.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(i,rw.get())};i()}}Qa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="pendingRedirect",lh=new Map;class uw extends cm{constructor(i,l,h=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],l,void 0,h),this.eventId=null}async execute(){let i=lh.get(this.auth._key());if(!i){try{const h=await cw(this.resolver,this.auth)?await super.execute():null;i=()=>Promise.resolve(h)}catch(l){i=()=>Promise.reject(l)}lh.set(this.auth._key(),i)}return this.bypassAuthState||lh.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if(i.type==="signInViaRedirect")return super.onAuthEvent(i);if(i.type==="unknown"){this.resolve(null);return}if(i.eventId){const l=await this.auth._redirectUserForId(i.eventId);if(l)return this.user=l,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cw(r,i){const l=fw(i),h=dw(r);if(!await h._isAvailable())return!1;const c=await h._get(l)==="true";return await h._remove(l),c}function dw(r){return sn(r._redirectPersistence)}function fw(r){return Ns(hw,r.config.apiKey,r.name)}async function mw(r,i,l=!1){const h=Ls(r),c=iw(h,i),p=await new uw(h,c,l).execute();return p&&!l&&(delete p.user._redirectEventId,await h._persistUserIfCurrent(p.user),await h._setRedirectUser(null,i)),p}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=10*60*1e3;class gw{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let l=!1;return this.consumers.forEach(h=>{this.isEventForConsumer(i,h)&&(l=!0,this.sendToConsumer(i,h),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!bw(i)||(this.hasHandledPotentialRedirect=!0,l||(this.queuedRedirectEvent=i,l=!0)),l}sendToConsumer(i,l){var h;if(i.error&&!dm(i)){const c=((h=i.error.code)===null||h===void 0?void 0:h.split("auth/")[1])||"internal-error";l.onError(Ut(this.auth,c))}else l.onAuthEvent(i)}isEventForConsumer(i,l){const h=l.eventId===null||!!i.eventId&&i.eventId===l.eventId;return l.filter.includes(i.type)&&h}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rf(i))}saveEventToCache(i){this.cachedEventUids.add(Rf(i)),this.lastProcessedEventTime=Date.now()}}function Rf(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(i=>i).join("-")}function dm({type:r,error:i}){return r==="unknown"&&(i==null?void 0:i.code)==="auth/no-auth-event"}function bw(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(r,i={}){return ha(r,"GET","/v1/projects",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vw=/^https?/;async function Tw(r){if(r.config.emulator)return;const{authorizedDomains:i}=await pw(r);for(const l of i)try{if(Ew(l))return}catch{}At(r,"unauthorized-domain")}function Ew(r){const i=ch(),{protocol:l,hostname:h}=new URL(i);if(r.startsWith("chrome-extension://")){const p=new URL(r);return p.hostname===""&&h===""?l==="chrome-extension:"&&r.replace("chrome-extension://","")===i.replace("chrome-extension://",""):l==="chrome-extension:"&&p.hostname===h}if(!vw.test(l))return!1;if(ww.test(r))return h===r;const c=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+c+"|"+c+")$","i").test(h)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=new ro(3e4,6e4);function Cf(){const r=xt().___jsl;if(r!=null&&r.H){for(const i of Object.keys(r.H))if(r.H[i].r=r.H[i].r||[],r.H[i].L=r.H[i].L||[],r.H[i].r=[...r.H[i].L],r.CP)for(let l=0;l<r.CP.length;l++)r.CP[l]=null}}function kw(r){return new Promise((i,l)=>{var h,c,f;function p(){Cf(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{Cf(),l(Ut(r,"network-request-failed"))},timeout:Sw.get()})}if(!((c=(h=xt().gapi)===null||h===void 0?void 0:h.iframes)===null||c===void 0)&&c.Iframe)i(gapi.iframes.getContext());else if(!((f=xt().gapi)===null||f===void 0)&&f.load)p();else{const R=aw("iframefcb");return xt()[R]=()=>{gapi.load?p():l(Ut(r,"network-request-failed"))},nw(`https://apis.google.com/js/api.js?onload=${R}`).catch(k=>l(k))}}).catch(i=>{throw Rs=null,i})}let Rs=null;function _w(r){return Rs=Rs||kw(r),Rs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new ro(5e3,15e3),Ow="__/auth/iframe",Nw="emulator/auth/iframe",Rw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hw(r){const i=r.config;G(i.authDomain,r,"auth-domain-config-required");const l=i.emulator?bh(i,Nw):`https://${r.config.authDomain}/${Ow}`,h={apiKey:i.apiKey,appName:r.name,v:Bs},c=Cw.get(r.config.apiHost);c&&(h.eid=c);const f=r._getFrameworks();return f.length&&(h.fw=f.join(",")),`${l}?${lo(h).slice(1)}`}async function Mw(r){const i=await _w(r),l=xt().gapi;return G(l,r,"internal-error"),i.open({where:document.body,url:Hw(r),messageHandlersFilter:l.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rw,dontclear:!0},h=>new Promise(async(c,f)=>{await h.restyle({setHideOnLeave:!1});const p=Ut(r,"network-request-failed"),R=xt().setTimeout(()=>{f(p)},Aw.get());function k(){xt().clearTimeout(R),c(h)}h.ping(k).then(k,()=>{f(p)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Iw=500,zw=600,Uw="_blank",xw="http://localhost";class Hf{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bw(r,i,l,h=Iw,c=zw){const f=Math.max((window.screen.availHeight-c)/2,0).toString(),p=Math.max((window.screen.availWidth-h)/2,0).toString();let R="";const k=Object.assign(Object.assign({},Dw),{width:h.toString(),height:c.toString(),top:f,left:p}),T=Xe().toLowerCase();l&&(R=Qf(T)?Uw:l),Xf(T)&&(i=i||xw,k.scrollbars="yes");const H=Object.entries(k).reduce((V,[te,de])=>`${V}${te}=${de},`,"");if(yp(T)&&R!=="_self")return jw(i||"",R),new Hf(null);const j=window.open(i||"",R,H);G(j,r,"popup-blocked");try{j.focus()}catch{}return new Hf(j)}function jw(r,i){const l=document.createElement("a");l.href=r,l.target=i;const h=document.createEvent("MouseEvent");h.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),l.dispatchEvent(h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="__/auth/handler",Yw="emulator/auth/handler";function Mf(r,i,l,h,c,f){G(r.config.authDomain,r,"auth-domain-config-required"),G(r.config.apiKey,r,"invalid-api-key");const p={apiKey:r.config.apiKey,appName:r.name,authType:l,redirectUrl:h,v:Bs,eventId:c};if(i instanceof em){i.setDefaultLanguage(r.languageCode),p.providerId=i.providerId||"",ab(i.getCustomParameters())||(p.customParameters=JSON.stringify(i.getCustomParameters()));for(const[k,T]of Object.entries({}))p[k]=T}if(i instanceof uo){const k=i.getScopes().filter(T=>T!=="");k.length>0&&(p.scopes=k.join(","))}r.tenantId&&(p.tid=r.tenantId);const R=p;for(const k of Object.keys(R))R[k]===void 0&&delete R[k];return`${qw(r)}?${lo(R).slice(1)}`}function qw({config:r}){return r.emulator?bh(r,Yw):`https://${r.authDomain}/${Lw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="webStorageSupport";class Zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eh,this._completeRedirectFn=mw}async _openPopup(i,l,h,c){var f;ln((f=this.eventManagers[i._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const p=Mf(i,l,h,ch(),c);return Bw(i,p,Sh())}async _openRedirect(i,l,h,c){return await this._originValidation(i),Vp(Mf(i,l,h,ch(),c)),new Promise(()=>{})}_initialize(i){const l=i._key();if(this.eventManagers[l]){const{manager:c,promise:f}=this.eventManagers[l];return c?Promise.resolve(c):(ln(f,"If manager is not set, promise should be"),f)}const h=this.initAndGetManager(i);return this.eventManagers[l]={promise:h},h.catch(()=>{delete this.eventManagers[l]}),h}async initAndGetManager(i){const l=await Mw(i),h=new gw(i);return l.register("authEvent",c=>(G(c==null?void 0:c.authEvent,i,"invalid-auth-event"),{status:h.onEvent(c.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:h},this.iframes[i._key()]=l,h}_isIframeWebStorageSupported(i,l){this.iframes[i._key()].send(rh,{type:rh},c=>{var f;const p=(f=c==null?void 0:c[0])===null||f===void 0?void 0:f[rh];p!==void 0&&l(!!p),At(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){const l=i._key();return this.originValidationPromises[l]||(this.originValidationPromises[l]=Tw(i)),this.originValidationPromises[l]}get _shouldInitProactively(){return $f()||wh()||js()}}const Gw=Zw;var Df="@firebase/auth",If="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){var i;return this.assertAuthConfigured(),((i=this.auth.currentUser)===null||i===void 0?void 0:i.uid)||null}async getToken(i){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(i)}:null}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;const l=this.auth.onIdTokenChanged(h=>{var c;i(((c=h)===null||c===void 0?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(i,l),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();const l=this.internalListeners.get(i);l&&(this.internalListeners.delete(i),l(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qw(r){Ms(new ao("auth",(i,{options:l})=>{const h=i.getProvider("app").getImmediate(),{apiKey:c,authDomain:f}=h.options;return(p=>{G(c&&!c.includes(":"),"invalid-api-key",{appName:p.name}),G(!(f!=null&&f.includes(":")),"argument-error",{appName:p.name});const R={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pf(r)},k=new pp(p,R);return $b(k,l),k})(h)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,l,h)=>{i.getProvider("auth-internal").initialize()})),Ms(new ao("auth-internal",i=>{const l=Ls(i.getProvider("auth").getImmediate());return(h=>new Vw(h))(l)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ka(Df,If,Xw(r)),Ka(Df,If,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(r=Qb()){const i=Bf(r,"auth");return i.isInitialized()?i.getImmediate():Jb(r,{popupRedirectResolver:Gw,persistence:[ew,om,Eh]})}Qw("Browser");var Ww="firebase",Fw="9.6.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka(Ww,Fw,"app");const Jw={apiKey:"AIzaSyDxxwwCO9U5WulqLwjRFVXGTpJB6_CBnGE",authDomain:"zara-chabby-login.firebaseapp.com",projectId:"zara-chabby-login",storageBucket:"zara-chabby-login.firebasestorage.app",messagingSenderId:"975107354460",appId:"1:975107354460:web:3cbb4cdcc6ab91ede31b99",measurementId:"G-9VHZGX9BN7"},$w=Xb(Jw),Xa=Kw($w),Pw=`There is a kind of ripeness that arrives like a verdict. It does not ask. At thirty, it came for Zara-Chabby, and by morning the town of his birth had become a coat two sizes too small — something he had outgrown while sleeping. He did not pack. He did not explain. A man who needs a reason to leave has not yet left anything at all. He simply turned, and the forest opened for him like a door that had been waiting.
Ten years he lived up there, in the cathedral hush of the trees and the cold arithmetic of stone. The world below did what worlds do — it aged, it forgot, it replaced its own faces. But solitude did not wear Zara-Chabby down. It did the opposite. It found the dull edge of him and worked it patiently against the whetstone of silence until something in him could cut again.
He did not get lonely up there. He got dangerous.
One morning the mist lay over the pines like something that had died in its sleep, and Zara-Chabby woke before the birds did, filled with a fullness he could no longer keep to himself. He stood at the mouth of his cave and did the thing a man does when he has been alone long enough to stop being embarrassed by it: he spoke to the sun.
"Ten years you've climbed this peak just to find me," he said, "and never once asked what it cost you. Tell me your secret, old fire — how do you give everything away, every single day, and rise richer for it tomorrow?"
The sun did not answer. It didn't need to. Zara-Chabby already knew, and the knowing embarrassed him: he had been hoarding. Ten years of insight stacked like unspent gold in a vault nobody could reach — and a man who only fills himself is not wise. He is simply full, the way a locked room is full of air no one is breathing.
"I have to go down," he told the silence, "before this honey curdles into poison in the jar."
He had not gone a hundred steps before a shadow slid over the path like a rumor. He looked up. An eagle rode the grey sky in wide, contemptuous circles — and wrapped around its throat, as easy as a scarf, rode a snake. Neither killed the other. They simply were, together, at the top of the air.
"There go my creatures," Zara-Chabby murmured. "The proudest thing alive, and the shrewdest thing alive, and neither one has eaten the other. Let me be the eagle in my spirit and the snake in my survival — and if my pride ever forgets the second half, let it choke on the first."
An hour on, the trees loosened into a clearing, and there stood a hermit so old that the forest had stopped bothering to notice him. He looked at the traveler the way you'd look at a fire that had wandered off from its own hearth to go see the world.
"Zara-Chabby," he said. "The soot's gone from you. Your eyes have started keeping the mountain's hours."
Zara-Chabby laughed — a big, unwashed laugh that sent birds scattering out of three trees at once. "I've learned I never tire of my own company. Now I'll find out if the towns can survive it."
"Stay," the hermit said, and for once his smile didn't move with his eyes. "Up here, a man's madness is his own business. Down there, they've found a use for it. They call it Order."
"Let them call it whatever keeps them warm at night," Zara-Chabby said. "I've learned to dance alone. Now I want to see if the world can find the beat."
"And if it can't?"
"Then I'll teach it, or leave it dancing badly — either way, I go. I'm not going down to rule the crowd, old man, and I'm not going down to fix it. I'm going to eat with it, drink with it, argue with it in the street, until I've got my hand flat against its chest and I can feel whether its heart still knows how to race."
"You're going to dance with the dead."
"Then I'll teach corpses rhythm. But tell me first — what do you do out here, brother of the woods, while the sun climbs and the silence gets fat?"
The hermit's laugh, when it finally broke, sounded like a river finding a channel it hadn't used in years. "I make the music the trees can't make for themselves. I sing because the mountains can't, and I dance because they won't. In the city, music is a performance you buy a seat for. Up here, it's just what's left over once the fear burns off."
Then, as suddenly as the weather changed, his face went solemn, and his hand came down on Zara-Chabby's shoulder with a grip that didn't match his age at all.
"Remember this in your towns," he said. "An enemy hides in the dark. A false friend will praise your face and poison your well and smile while doing both. But a true friend — a true friend will make sure you are stabbed from the front."
The sentence went through Zara-Chabby like weather through a bare tree. He understood it completely: to be stabbed from the front is to be told the truth by someone who loves you too much to let you rot comfortably.
"Yes," he said. "Better to be wounded by the truth than healed by a lie. Give me the friend who carries a blade — never the one who carries a mask."
Something in the air between them snapped like a dry branch, and the two of them — the monk of the mountain, the sage of the woods — stood there in the dirt and laughed like boys who'd just gotten away with something enormous. They laughed until they had to hold each other up.
"Go, then," the hermit gasped, wiping his eyes. "Go and find someone brave enough to stab you from the front."
"And you — keep the animals dancing. Don't let this forest go quiet on me."
They parted in opposite directions, bound tighter by that laugh than either of them had been by any promise.

Zara-Chabby walked until the hills gave way to a town nestled against a slope — Madasara — and in its center he found what he first mistook for a market: voices overlapping, laughter cracking and fading like sparks off a fire. But no one was trading goods. They were trading stories, and an old man stood among them, back bent, voice unbroken.
"...a man who forgets where he is going," he was saying, "becomes a prisoner of where he has been."
The crowd hummed its approval, and Zara-Chabby stopped, because he had heard sentences like that before — not this one exactly, but its cousins, the same shape wearing different clothes.
"What is this?" he asked a woman near him.
"The Hour of Mirrors," she said, without quite looking at him. "People come here not to be told the truth. They come to hear themselves reflected in it."
"And him?" Zara-Chabby nodded at the old man.
"He's only a voice. Tomorrow it'll be someone else."
No authority. No permanence. Just words passing through people the way wind passes through trees — felt, then gone.
A boy stepped into the circle, voice cracking. "If life is about finding yourself," he said, "why do I disappear the more I try?"
A woman knelt to him. "You disappear," she said gently, "because you're looking for something that was never lost. You are not something to be found. You are something to be realized."
That was the word that broke Zara-Chabby's patience. Realized. He stepped into the circle himself, boots grinding against gravel like a blade drawn slow.
"Realized," he repeated, voice cold. "And once he's realized himself — what then? Does he hang on the wall like a finished painting? Sit in the dust admiring his reflection until the mirror becomes a grave?"
"Stranger," the old man said, drawing himself up, "the tongue that sharpens itself on another's peace ends up bleeding."
"A beautiful proverb," Zara-Chabby said, walking until he stood between the woman and the boy. "And empty as a drum. You tell this child he isn't lost so he'll feel comfortable staying exactly where he is. You call it realized so he never has to do the hard, ugly work of becoming. You're not mirrors. You're mist. You hide the horizon so no one here has to face the climb."
He turned on the kneeling woman. "And you — you say he's looking for what was never lost. If a man's house is on fire, do you tell him his peace was never lost? No. You tell him to run, to sweat, to build something new. This Hour of Mirrors is nothing but an hour of sleep dressed up as wisdom."
"You speak of violence to the soul," she said, rising. "We seek the stillness of the lake."
"A lake is where things go to drown."
He kicked the little ceremonial bowl of water at the circle's center; it shattered across the stones, and the mirror was, quite literally, broken.
"Look at your reflections now!" he shouted over the gasps. "Fragmented. Distorted. Sharp. That's the truth of you. You are not a realization. You are a war. You are a bridge that has to be crossed — not a garden where you sit around discussing the bridge."
"Blasphemer," someone spat.
Zara-Chabby laughed, and it was a sound Madasara hadn't heard in a generation — the sound of a man who had lived somewhere too high and too cold to bother being polite.
"Call it blasphemy if it helps you sleep. But while you're trading shadows, the sun is burning the whole world down to the truth of it. Who among you is ready to stop reflecting and start burning?"
The crowd split — some pleased, some furious, some simply unmoored. And Zara-Chabby understood, watching them, that he had just become something more dangerous than an idea.
He had become an interruption.
"You hear me," he told them, "but you don't listen. What I'm saying isn't wanted. It's needed."
Someone scoffed. "Because you call your thoughts truth."
"Exactly," Zara-Chabby said, nodding. "And so do you. You defend your beliefs not because they're true — but because they're yours."
A woman's voice, sharper now: "And what do you believe, Zara-Chabby?"
He smiled faintly. "Very little. And that's precisely why I'm not afraid to question everything."
His voice dropped — not weaker, just deeper, as if it were arriving from somewhere beneath thought itself.
"You gather here for wisdom. But wisdom isn't something you collect like coins in a jar. It's something that has to break you before it can build you. Tell me — how many of you have ever been broken by what you believe?"
No one answered.
"Exactly. Because most of what you believe was never tested. It was only ever repeated."
A young man pushed forward. "So — reject everything?"
"No," Zara-Chabby said. "Just stop accepting things because they feel right. Comfort isn't a compass. It's a cushion. Sit on it long enough, and you forget how to stand."
That landed. He could feel it land — something shifting in the crowd, uncomfortable and undeniable.
"You want clarity?" he pressed. "Then be willing to lose your confusion — and your certainty."
"And what replaces it?" the woman asked, softer now.
"Awareness," he said. "Not answers. Awareness."
The boy looked up. "What does that feel like?"
"Like standing in the middle of a storm," Zara-Chabby said, "and realizing you've stopped trying to escape it."
Something in the boy's face opened.
"You don't need better words," Zara-Chabby told the crowd. "You need better questions. Instead of asking who am I — ask who told me who I am."
Faces changed. Something that had been held tightly, for years, in more than one chest, began quietly to slip.
"You're not confused because life is complicated," he said. "You're confused because you've inherited too many answers that were never yours to begin with."
A man in the back murmured, almost to himself, "That... makes sense."
"Of course it does," Zara-Chabby said. "Because it's yours now. Not mine."
The crowd had stopped being a crowd. It had become a room full of individuals, each one quietly, privately, coming apart.
And then, as suddenly as he'd stepped forward, Zara-Chabby stepped back.
"That's enough," he said.
The old man's eyebrow lifted. "You're stopping?"
"Yes."
"Why?"
Zara-Chabby smiled, faint and a little sad. "Because if I keep talking, you'll start listening to me instead of yourselves. Again."
No applause followed. No laughter. Just something quiet, and alive, and entirely their own.
He turned, and without another word, walked out of Madasara.

The town's noise fell away behind him, replaced by something lighter but not calmer — charged, like the air before rain that never quite arrives. He walked until the voices behind him thinned into wind, and found an old, wide tree that seemed entirely unbothered by everything that had just happened, and sat beneath it, and did nothing at all.
Did I speak truth, he wondered, or just another, louder version of it?
Had he freed them, or only unsettled them? Was there even a difference?
"For someone who claims to know little," he murmured to no one, "I certainly talk a lot."
He drifted — not quite into sleep, but into that thin country between thought and nothing, where a man's questions finally loosen their grip on his throat.
When the wind woke him, it was cooler, and the sky had gone from dusk to something darker and more honest. Small lights had begun to flicker in Madasara below — tiny, distant, almost irrelevant from up here.
"Still here," he said softly, to no one, and smiled — not with pride, and not with regret. With something closer to understanding.
"Even disruption," he said, "becomes part of the pattern."
But something in him hadn't settled with the breeze. He sat with it, elbows on his knees, and let the real question surface at last.
"I broke the circle," he muttered. "But what did I build?"
Because for all his talk, he had still stood at the center. He had still spoken, and they had still listened — and some of them, he'd felt it, had begun leaning toward him the exact way they'd once leaned toward the old man.
"No," he said, standing abruptly. "I don't want followers."
The word sat in his mouth like a stone. Followers listen. Followers repeat. Followers simply swap one voice they don't own for another they don't own either.
"Then what?"
He looked back down at the town he'd unsettled.
"They don't need a leader," he said slowly, and the word arrived like a key turning. "They need ignition."
Not direction. Not doctrine. A spark — and nothing more, because a spark, unlike a leader, cannot be followed. It can only be caught.
"I was wrong," he admitted. "Not about them. About myself. I thought my work was to dismantle — to interrupt, to fracture, to burn the polish off every empty word. But destruction, left alone, only leaves silence. And silence, if nobody tends it, invites the same old rot to grow back in a new shape."
He looked at his own hands as if he were meeting them for the first time.
"I don't need followers," he said. "I need breakers." A pause. "And creators. Breakers alone only destroy. Creators alone only preserve. But the ones who can do both —"
He didn't finish the sentence. He didn't need to.
His gaze drifted to the ridge beyond Madasara, to the cave he hadn't thought of in longer than he'd realized — not a place he had left, he understood now, but a place that had, in its own patient way, sent him out.
"If this begins anywhere," he said, "it begins there."
He did not rush the walk back. The path curved through hills gone quiet with distance, and the farther he moved from Madasara, the more the noise of other people fell away — and the more clearly he could finally hear himself.
Behind him, the town would go on believing, for a while, that he had only ever been a phantom.
He knew better. A phantom leaves nothing behind.
He had left a question. And questions, unlike phantoms, don't dissolve by morning.
`,ev=["ZARACHABBY'S DOWNGOING","OF THE THRESHOLD OF MADASARA","THE SERMON OF THE BROKEN LEDGER","OF THE TIGHTROPE WALKER'S SHADOW","THE TROUBLED WORKER","OF WOMEN","OF THE FESTIVAL OF THE LAST MEN"];function Ot({user:r,onBack:i,onSignOut:l,chapterText:h,chapterTitle:c,chapterNumber:f,bookLabel:p="Book 1",chapterList:R=ev,onNextChapter:k,nextChapterLabel:T}){const[H,j]=Ve.useState(0),[V,te]=Ve.useState("next"),de=h.split(/\r?\n+/).map(le=>le.trim()).filter(Boolean),Oe=Math.max(1,Math.ceil(de.length/3)),ue=Array.from({length:3},(le,B)=>({label:`Page ${B+1}`,paragraphs:de.slice(B*Oe,(B+1)*Oe)})),Ne=Math.round((H+1)/ue.length*100),pe=ue[H],ve=le=>{le<0||le>=ue.length||(te(le>H?"next":"previous"),j(le),window.scrollTo({top:0,behavior:"smooth"}))};return E.jsxs("main",{className:"chapter-page",children:[E.jsxs("nav",{className:"chapter-nav","aria-label":"Chapter navigation",children:[E.jsxs("button",{type:"button",className:"back-button",onClick:i,children:[E.jsx("span",{"aria-hidden":"true",children:"←"}),"Back to the book"]}),E.jsx("span",{className:"chapter-nav-title",children:"Thus spoke Zara Chabby"}),E.jsxs("div",{className:"chapter-account",children:[E.jsx("span",{children:r.email}),E.jsx("button",{type:"button",className:"text-button",onClick:l,children:"Sign out"})]})]}),E.jsxs("div",{className:"chapter-progress-wrap","aria-label":`Chapter progress: ${Ne}%`,children:[E.jsxs("div",{className:"chapter-progress-meta",children:[E.jsxs("span",{children:[p," / ",c]}),E.jsxs("span",{children:[Ne,"% read"]})]}),E.jsxs("progress",{className:"chapter-progress",value:Ne,max:"100",children:[Ne,"%"]})]}),E.jsxs("div",{className:"chapter-layout",children:[E.jsxs("aside",{className:"chapter-sidebar","aria-label":`${p} chapters`,children:[E.jsx("p",{className:"eyebrow",children:p}),E.jsx("h2",{children:c}),E.jsx("ol",{children:R.map((le,B)=>{const be=B===f-1,Qe=p==="Book 2"?B===0:B<7;return E.jsx("li",{className:be?"active":"",children:E.jsxs("button",{type:"button",disabled:!Qe,"aria-current":be?"page":void 0,children:[E.jsx("span",{children:String(B+1).padStart(2,"0")}),le]})},le)})})]}),E.jsxs("article",{className:`chapter-reading page-${V}`,children:[E.jsxs("header",{className:"chapter-heading",children:[E.jsxs("p",{className:"chapter-kicker",children:[p," / Chapter ",f," / ",pe.label]}),E.jsx("h1",{children:c}),E.jsx("p",{className:"chapter-deck",children:"A descent into the world below, where certainty begins to crack."}),E.jsx("div",{className:"chapter-rule","aria-hidden":"true"})]}),E.jsx("div",{className:"chapter-manuscript",children:pe.paragraphs.map((le,B)=>E.jsx("p",{className:B===0?"chapter-lead":"",children:le},`${H}-${B}`))}),E.jsxs("footer",{className:"chapter-footer",children:[E.jsxs("button",{type:"button",onClick:()=>ve(H-1),disabled:H===0,children:[E.jsx("span",{"aria-hidden":"true",children:"←"})," Previous page"]}),E.jsxs("span",{children:["Page ",H+1," of ",ue.length]}),E.jsxs("button",{type:"button",onClick:()=>ve(H+1),disabled:H===ue.length-1,children:["Next page ",E.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),H===ue.length-1&&k&&E.jsx("div",{className:"chapter-next-step",children:E.jsxs("button",{type:"button",className:"primary-book-button",onClick:k,children:["Continue to next chapter: ",T||"Next chapter",E.jsx("span",{"aria-hidden":"true",children:" →"})]})})]},H)]}),E.jsxs("footer",{className:"site-footer chapter-site-footer",children:[E.jsx("span",{children:"Thus spoke Zara Chabby"}),E.jsxs("span",{children:[p," / ",c]}),E.jsx("button",{type:"button",onClick:i,children:"Back to contents ↑"})]})]})}function tv({user:r,onBack:i,onSignOut:l}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,chapterText:Pw,chapterTitle:"THE DOWN GOING",chapterNumber:1})}const nv=`The gates did not open. They did not creak, or groan, or make any of the small negotiations a door makes with the people who need it. They simply stood — vast, unbothered, absolute — forged from something older than the memory of forging. And they did not show Zara-Chabby the world on the other side. They showed him himself.
He did not see iron. He saw a mirror that happened to be shaped like a door.
Behind him, the wind carried the low murmur of those who had followed him this far. They kept a careful distance — close enough to still call themselves his, far enough to run if it came to that. Followers, they called themselves. Zara-Chabby knew the truth was smaller and stranger: they were not followers. They were unanswered questions, wearing coats, waiting to find out what they were doing here.
He did not turn to face them.
He had learned, at some cost, that to lead is not always to look back.
The guard arrived the way weather arrives — not walking toward him, simply there, as though the gate itself had exhaled him into being. Neither young nor old. Neither tall nor short. He was not a shape. He was a pressure, the kind that sits on the mind rather than the shoulders.
"State your purpose."
The voice was not loud. It didn't need to be. It echoed anyway, the way certain sentences do — not off stone, but off something in the listener.
Zara-Chabby smiled, faint and unhurried. "Purpose is a dangerous thing to ask of a man at a gate. If I have one, you may not like it. And if I don't — I may be more dangerous still."
The guard didn't react. He simply extended a hand — not in greeting. In expectation.
"Permit."
"I carry no papers."
"Not of ink," the guard said. "Of soul."
Behind Zara-Chabby, something moved through the crowd — not wind, but its human equivalent: a ripple of people quietly checking whether they had one to spare. A few stepped back, as if the word soul had found the loose thread in each of them and given it one patient tug.
Zara-Chabby turned his head, just enough to catch them in the corner of his eye.
"Do you hear that?" he said softly. "They've built a gate not to keep bodies out. But to measure what can't be seen."
Then, to the guard: "And who authorizes such a measurement?"
"The Order."
The word sat in the air like smoke that refuses to disperse. Order — a word that wears a different mask for every mouth that says it. To the frightened, it means safety. To the powerful, permanence. To the guard, apparently, it required no mask at all.
"And what is this Order," Zara-Chabby asked, "when you take its coat off?"
"That which prevents chaos."
Zara-Chabby's laugh was short, and it cut. "Chaos is only the name the frightened give to whatever they can't predict."
"And freedom," the guard replied, without so much as a blink, "is only the name the ungoverned give to whatever they can't govern in themselves."
The two sentences hung in the air between them like drawn blades that hadn't decided yet whether to fall.
"Does your Order let in those who question it?"
"It lets in those aligned with it."
"And how does a man align with something he doesn't yet understand?"
"By surrendering the need to understand it."
Behind him, Zara-Chabby felt the crowd lean — not toward him now, but toward that offer, the way cold hands lean toward any fire regardless of what's burning in it. Belonging is warm. Most people will trade a great deal of truth simply to stop shivering.
He closed his eyes for one breath. When he opened them, they had gone sharper.
"So the price of entry," he said, "isn't obedience. It's the death of asking."
"The two are not so different."
"They are the entire difference," Zara-Chabby said, "between a man who walks, and a man who is walked."
Nothing changed in the guard's face. But something changed in the air.
"Present your soul," the guard said again, and raised one hand. The space between them shimmered, thin as a rumor.
"Step forward," he said. "And be measured."
Zara-Chabby felt it before he touched it — not with his senses, but with something underneath them. To step forward here was not to move his feet. It was to hand something over that could never be asked back.
"Zara —"
A voice, from behind. One of the first to follow him, eyes caught between admiration and fear.
"What if he's right? What if Order is exactly what we need?"
"And what if freedom's just a prettier kind of chaos?"
"What if we can't survive without structure?"
"What if questioning everything only gets you nothing?"
Zara-Chabby let them speak. Each voice was carrying a real fragment of something — not the whole truth, but a shard of it, cut by fear, by longing, by every long night any of them had ever spent afraid of their own freedom.
He raised one hand, and the murmuring settled like dust.
"You talk," he said, "as though Order and freedom are enemies." He turned back to the gate. "They are not."
The guard watched him, waiting.
"They're reflections of each other," Zara-Chabby said. "Order without freedom is tyranny wearing a clean uniform. Freedom without order is collapse pretending to be liberty. The question was never which one to choose." He stepped closer. "The question is who gets to define them."
"The Order," the guard said, voice lowering, "defines itself."
"Exactly."
Zara-Chabby stepped forward again, close enough now that the shimmering space brushed against his skin like static before a storm.
"And that," he said quietly, "is the entire problem. Something that defines itself has removed the need to justify itself. And where there's no need for justification, there's no room left for challenge. And where there's no room for challenge —"
"There is no freedom," the guard finished, and for the first time his hand tightened.
"You speak as if freedom is an unquestioned good."
"It isn't," Zara-Chabby said. "It's a weight." He turned briefly to the crowd behind him. "To be free is to carry your own decisions on your own back. No one else to blame. No system to hide inside. No Order left to absorb your mistakes for you."
Some of them looked away.
"Most people," he went on, "don't actually want freedom. They want relief — from uncertainty, from responsibility, from the unbearable weight of being fully themselves. So they take the Order. Not because it's right. Because it's easier."
"And yet," the guard said, "here you stand. At a gate built by the very Order you claim to reject."
"Yes," Zara-Chabby said. "Because I don't reject Order. I reject Order that's never been made to answer for itself."
Silence. Then, without another word, he stepped into the shimmer.
It did not burn. It did not freeze.
It revealed.
Not images — sensations. Doubt. Old fear. A dozen private cowardices he'd been keeping in separate rooms so they'd never have to meet each other. Every contradiction he owned, laid out at once, with nowhere left to hide any of them.
He did not resist it.
"Your soul," the guard said, almost to himself, "is unstructured."
"Alive things usually are."
"You are inconsistent."
"I'm human."
"You are uncertain."
"I'm honest."
"You are dangerous."
Zara-Chabby stepped fully through, beyond the shimmer now, and did not flinch.
"Only," he said, "to those afraid of questions."
The gate did not open. Instead, the guard said, "You may enter. Not all of them may follow."
And there it was — the real gate. Not iron. Choice. Zara-Chabby turned and watched it happen in real time: some already leaning toward the entrance, ready to be measured, ready to trade whatever it took for a door that opened. Others frozen, unwilling to risk what could never be taken back once given.
"What decides who enters?" he asked.
"Those who hold the Permit."
"And those who don't?"
"They remain."
He looked at the people who had walked mountains to reach this gate with him, and saw the fracture opening down the middle of them, clean as a struck bell.
This — not the gate — was the true threshold.
Zara-Chabby stepped back.
The guard's eyes flickered. "You refuse entry?"
"I refuse separation."
"You would deny yourself the city, for the sake of those who might not qualify?"
"If I enter alone," Zara-Chabby said, "I become part of the very Order I came here to question."
"And if you stay?"
"Then I stay free to question it."
"You cannot stand at a threshold forever."
"No," Zara-Chabby said, and something almost like joy moved through his voice. "But I can redefine it."
He turned fully to face them — all of them, the ones leaning toward the gate and the ones frozen in the middle and the ones who hadn't moved an inch.
"The gate," he said, "was never the barrier." He did not point at the iron. He pointed at their chests. "It's here. You believe that walking through will finally complete you — that the Order on the other side holds whatever's missing in you. It doesn't. What you're looking for was never inside Madasara."
He laid his own hand flat over his heart.
"It's here."
A long pause — long enough that the wind itself seemed to be waiting on the outcome.
Then one of them stepped forward. Not toward the gate. Toward him.
Then another. Then a third — not a stampede, not a rush, but something quieter and far more dangerous to the guard's authority: a decision, spreading person to person like a fire too patient to need fuel.
Not everyone came. Some turned and walked to the gate anyway, and were measured, and waited. Some stood frozen exactly where they were, caught permanently between two truths that would not agree to resolve themselves.
"You divide them," the guard said.
"No," said Zara-Chabby. "I reveal them."
The wind shifted. The gates of Madasara stayed exactly as closed as they had been at the start of this — unmoved, unmoving, indifferent as ever.
But something else, unlatched by no visible hand, had come open. Not in the city. Not in the Order.
In the private, unlit rooms where each of them kept the one thing they were most afraid to finally look at.
As the sun dropped low and threw the whole scene into long, honest shadow, Zara-Chabby turned from the gate — not as a man who had been refused, but as a man who had just discovered something far more useful than entry:
The strongest gates were never built from iron.
And the Orders that hide behind them were never enforced by guards.
They are built, brick by willing brick, inside — and that means they can be unbuilt the very same way.
Thus felt Zara-Chabby.




`;function av({user:r,onBack:i,onSignOut:l}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,chapterText:nv,chapterTitle:"THE THRESHOLD OF MADASARA",chapterNumber:2})}const iv=`Zara-Chabby entered the Great Square of Madasara the way a low sun enters a room through a window nobody meant to leave open — not asked for, not announced, simply impossible to keep out. Behind him walked those who had chosen him over the gate, no longer wanderers now but carriers of something already lit and burning low, waiting for wind.
The marketplace did not smell of trade. It smelled of arithmetic — that dry, metallic hush of coin and parchment, of numbers endlessly re-totaled by men who had traded the sky for a ledger line. The merchants sat enthroned on ebony, backs curved not by age but by habit, the particular stoop of men who have spent forty years bowing to columns instead of standing beneath weather.
They did not sell bread, or cloth, or oil.
They sold weight.
Obligation. Guilt. Time, portioned out like grain. Their law was simple and merciless as gravity: everything must be paid. every soul must balance.
Zara-Chabby watched one of them work — fingers moving over silver with the precision of a man performing a sacrament. This merchant did not look at the world; he assessed it. He did not breathe the air; he priced it. Even the sky above his stall was not sky to him. It was a roof, still owed, still accruing interest.
Zara-Chabby had seen enough.
"You who weigh the dust!"
The sentence didn't ring through the square so much as land in it, the way a dropped stone lands in a pond too still to have expected one.
"By what right do you measure a man? You hold your scales like the hands of some accounting god — but I see trembling fingers. Afraid of the one thing no scale was ever built to hold: the Great Unmeasured."
The merchant lifted his eyes, slow as a blade drawn with care rather than anger. "The world stands on Balance, stranger. Without debt, no duty. Without duty, no Order. We keep the small small — so the great does not swallow us whole."
Zara-Chabby answered with his body before his voice caught up. He was on the table before the sentence finished dying in the air. Ink went everywhere at once — black rivers across every careful column of Must and Should, drowning a lifetime of tidy control in a single gesture.
"Your Order," he thundered, "is the peace of the graveyard!"
The crowd recoiled as one animal.
"You worship Debt as though it were virtue — but it only ever taught you fear. You've chained the living to their own past so they'll never once dare reach for a future. You've turned the human heart into a counting-house, and the human spirit into a beggar sleeping outside its own front door."
He spread his arms as if to take the whole frozen square into an embrace, or a verdict — it was hard, in that moment, to tell which.
"People of Madasara! Every morning you wake and ask: what do I owe? You pay your smiles to neighbors and your silence to fear, and you kneel in the dust like camels begging for more weight to carry, so you can call the ache in your own back dignity."
His voice dropped, and somehow that made it land harder.
"But who," he asked, "pays the debt you owe to your own greatness?"
The question hit the square like a dropped bell — no echo, just impact.
"There is a ledger no ink can reach. Call it the Ledger of the Sun. It does not ask what you gave away. It asks only one thing, and it will keep asking it long after this square has forgotten your name: what did you become?"
He pointed — not at them. Through them.
"You are not poor because you lack coin. You are poor because your yes has gone hollow. You have spent entire lives buying yourselves comfortable cages — and now, God help you, you polish the bars."
A disciple stepped forward, voice unsteady. "Master — if we tear up the scales, how do we live? Won't it all collapse?"
Zara-Chabby turned to him, and there was no theater left in his face at all — only a terrible, plain honesty. "I'll wound you from the front, since that's the only kindness worth offering: chaos was never your enemy. It is your soil. You're already afraid of falling — but you're already at the bottom, calling the dust beneath you stability."
Then the fire came back into him, fast as a struck match.
"I bring you something larger than balance. I bring you overflow. The Overman does not count — he pours. He does not trade — he radiates. To the merchant, a gift is a loss on the books. To the Overman, a gift is proof of power undiminished by its own giving."
He dipped a hand into the spilled ink and drew a line across his own forehead, like a soldier marking himself for a war he had already decided to survive.
"Go — burn your ledgers. Tear up the scripts that are suffocating your own becoming. The Great Noon is coming, and it will not ask you for a single receipt. It will ask only this: did you live — or did you merely audit your life?"
He stepped down. And walked. And did not look back.

The merchant did not follow him.
He sat instead among the wreckage of his own columns, and for the first time in thirty years, looked at the ink staining his fingers and did not feel discipline. He felt something closer to a fingerprint left behind at the scene of his own disappearance.
I lived by the line, he thought, and the thought arrived slow and cold, like water finding a crack it had been patient about. Rows. Columns. Numbers standing at attention like soldiers who never once asked what the war was for.
I thought if everything balanced, I would finally be safe.
He looked at his own hands. He had spent a lifetime touching everything of value in this city, and had felt none of it.
I called it Order, he thought. It was only ever a shroud.
The crowd blurred past him, and he realized, with the particular vertigo of a man discovering a hole in the floor he's been standing on for decades, that he had never actually known any of them. Only their balances. Their debts. Their worth, tabulated, and nothing else.
The abyss isn't outside, he understood at last. It is the exact distance between who I am and who I have spent my whole life pretending to be.
I locked myself away, he thought, and had the nerve to call it success.

Beyond the square, under a sky just beginning to darken into something honest, Zara-Chabby stood among the ones who had followed him this far, and lifted a single jagged stone into the last of the light.
"Look at this," he said. "If I call it holy, you'll carry it on your back for the rest of your life. If the merchant calls it capital, you'll stand guard over it till you die. If the priest calls it sin, you'll spend your best years mourning it."
He let it fall. It struck the earth with a small, final sound, like a door closing somewhere very far away.
"This is the Yes of the Slave."
Silence deepened around the words, the way silence does around something true.
"A Yes born out of Thou Shalt. A Yes made entirely of fear. A Yes that obeys — and never once creates. Every time you say yes because you're afraid of hunger, afraid of punishment, afraid of being cast out — you are not living. You are only complying with your own cage, one obedient brick at a time. This Yes is what built Madasara. Brick by willing, terrified brick."
A pause, long enough to feel like weather changing.
"But the spirit does not stay a slave forever."
His voice shifted — wilder now, closer to something feral.
"It becomes a Lion."
A murmur moved through them like wind finding a gap in a fence.
"And the Lion roars No. No to the chains. No to the inherited scripts. No to the false, comfortable gods of safety."
He clenched his fist — then, deliberately, let it go slack.
"But hear this, because it is the part most men never survive long enough to learn: the Lion can destroy. It cannot create. It can clear the forest. It cannot plant a single tree in the space it's cleared. It can break every chain you were ever given — but it cannot forge one ounce of meaning to replace them. Stay a Lion too long, and you will starve to death in the very freedom you fought and bled to win."
Then, as suddenly as the fire had come, it banked low, and something gentler moved into its place. In his open palm now sat a single, small, drifting seed.
"And so, at last — the spirit becomes a Child."
He held it the way you'd hold something sacred and breakable at the same time.
"Why a child? Because the child forgets — and in the forgetting, it finally begins. The Slave says: I must live. The Child says: I am life. To the Slave, the world is a burden strapped to the back. To the Child, it is nothing but canvas, waiting."
He raised the seed to the darkening horizon, where the first stars had begun to puncture the sky like small, deliberate holes.
"The Child doesn't ask what's permitted. The Child asks only: what can be made? This — this is the sacred Yes. You fear the unknown because some part of you still believes your worth was handed to you, assigned, measured out like rations. But the Child owes no debt. The Child creates only from surplus."
His voice, when it came again, carried both a command and a release, in the same breath.
"Forget what you were told to be. Forget, if you have to, even what I have told you tonight. Become the first version of yourself — again, and again, and again, for as long as it takes."
The seed slipped from his fingers into the dark, and the wind, which had been waiting all along for exactly this, carried it away.
"Go," he said. "Go play the universe into existence."
Thus spoke Zara-Chabby.
`;function ov({user:r,onBack:i,onSignOut:l}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,chapterText:iv,chapterTitle:"THE SERMON OF THE BROKEN LEDGER",chapterNumber:3})}const sv=`The crowd gathered below the towers the way water gathers in a low place — not out of ambition, just gravity. They looked up, but they weren't watching the sky. They were watching for a man to fall, because his falling would prove they'd been right never to climb anything at all. Merchants with ink still staining their fingers stood shoulder to shoulder with priests whose robes carried the smell of old, recycled prayer, and for once the man of gold and the man of god wanted precisely the same thing: for the man on the wire to prove them right by dying.
To them, the rope was an insult. It was a vertical argument against their horizontal lives. If a man could walk between two towers, then the walls they'd spent decades building around their own souls meant nothing at all.
"Do you see their eyes?" Zara-Chabby murmured to the disciple beside him. "They're not watching a man. They're watching a mirror. They want it to shatter so they can finally stop looking at their own reflection."
When the walker set his foot on the wire, it made almost no sound — just a thin hiss, like breath held too long and finally let go. That first step didn't carry him forward. It cut him loose. Behind him stood the Madasara of the mind: a city heavier than any stone, built entirely from names he'd worn like chains — Worker. Failure. Reasonable. Responsible. He had not simply lived in that city. He had, without quite noticing, become it.
One step had not undone that. Not cleanly, not completely. But irreversibly — because some decisions don't ask the past for permission. They simply happen, and in happening, they exile everything that came before.
The wire gave him nothing. No width, no generosity, no room for half-decisions. On the ground, a man can lie to himself and keep walking — the earth forgives that kind of performance, carries the divided as easily as the whole. The wire doesn't forgive. The wire reveals. Every hidden doubt becomes weight. Every unspoken fear becomes a lean in the wrong direction.
"He's afraid," a merchant sneered below, arms folded with the confidence of a man who had never once left the ground. "Look — even his body's betraying him."
"No." One word, dropped into the crowd's murmur like a stone into still water, and it silenced every interpretation at once. "He's trembling," Zara-Chabby said, "but not from fear of falling. He's trembling from the weight of his own freedom. You call it fear because you've only ever known the comfort of mud. The stars tremble too — not because they're weak. Because they burn. What you're watching isn't hesitation. It's ignition."
The crowd shifted, uneasy now, because something in that sentence had reached them — not as agreement, but as a question they didn't want asked out loud: if that isn't fear, what have we been calling our safety all this time?
High above them, the walker breathed in air that felt different up here — not lighter, just more honest. No illusion in it, no cushioning, no disguise. Only space — and in that space, he felt with sudden clarity the pull of everything he'd left behind. Not as memory. As gravity. The old self doesn't vanish when you abandon it. It lingers. It calls. It waits, and it is never more persuasive than when it stops shouting and starts making sense.
Step back, it suggested, reasonably. You've proven enough. You can still return with dignity.
He didn't silence the voice. He stepped despite it — and that, not the movement of his body, was the actual first step: the refusal to obey the logic of retreat.
Then, as the world beneath him thinned into meaning rather than distance, the sun struck the spire of the horizon and something bent in the light. A shadow climbed onto the rope ahead of him — not trailing behind as shadows should, but waiting ahead, thick with intention. This was not absence. This was presence: the Spirit of Heaviness made visible, every voice that had ever chosen safety and called it wisdom, condensed into a single shape.
The walker froze — not from fear of falling, but from recognition. He knew this thing. Not by sight. By feeling.
"Why do you continue?" it asked, not into his ears but into the marrow of his bones, where doubt is born before language can reach it. "You are a creature of the ground. You hunger. You bleed. You tire. Why pretend to be a bird?"
"You are betraying the Order that kept you whole," it went on. "The ground fed you. The crowd named you. And now you abandon it for this — no structure, no guarantee, no witness left to remember you if you fail. If you fall, you won't even have the dignity of being known. You'll be forgotten."
Not death. Erasure. An entry that closes without anyone bothering to read it.
The walker closed his eyes — not to escape the words, but to walk straight into them, down into the place where the shadow had its roots. And there he found them: the merchant, measuring worth in columns and certainty; the sage, offering wisdom that always circled back to obedience; and the child he himself had been, before he'd learned to fear the fall.
"I carried you here," he understood, with a clarity that felt like pain. "You were never on the ground. You are the ground that stayed inside me."
"You cannot escape me," the shadow said. "I am caution. I am the voice that kept you alive."
"Yes," the walker thought. "You are." And in admitting it, he found the one thing the shadow hadn't planned for: he didn't have to leave it behind to stop obeying it.
"I cannot leave you," he said. "But I don't have to do what you say."
The wind moved, and this time he didn't fight it — he adjusted. Small. Subtle. Enough. The shadow lost nothing of its presence. It lost its authority, and that changed everything.
Which was exactly when the Jester arrived — not up from the crowd, but down from the tower the walker had already left behind, a blur of color and bells that mocked the very idea of effort.
"Gallop, laggard!" he shrieked. "Is this your great Becoming? This trembling stutter? You left the ground and never learned to fly — you're not crossing a bridge, you're suspended, a beautiful mistake stretched between two meaningless points!"
Fear, at least, takes a man seriously. Mockery is worse — it dissolves the very ground seriousness needs to stand on. The Jester ran the rope with reckless, joyful violence, and the fragile rhythm the walker had only just rebuilt broke under two forces closing in from opposite ends — the shadow's weight, the Jester's ridicule. For one suspended moment he almost held.
Then the Jester leapt clean over him, and the rope snapped up beneath his feet — not broken, but betrayed — and his balance vanished completely.
The crowd inhaled. Then released, as one animal, a single unified sound. Not horror. Confirmation. The Yes of people who had been waiting all along to be told: stay exactly where you are. Don't rise. Don't try.
He fell without a sound worth calling a scream, turning slowly through the air like a leaf that had just understood it was no longer part of the tree.
The crowd surged forward — not to help, to verify, to turn the incomprehensible into something they could repeat over dinner. Zara-Chabby stepped between them and the body, and his presence alone stopped them cold.
"Back," he said. Not shouted. Absolute. "You've had your spectacle. Now look."
He knelt. The walker's eyes were open, fixed on the first star of the evening, cold and unreachable and, somehow, still there.
"You see?" the priest said from the circle's edge. "This is the judgment of the earth. His ascent was sin. The ground has reclaimed him."
Zara-Chabby rose, and when he turned, his eyes carried a clarity sharp enough to feel like fire.
"He has not failed," he said. "He has succeeded — he perished in the attempt to overcome. You call it failure because you measure life by survival. But survival is the lowest form of being alive. You wake, you work, you repeat, you die, and somewhere in between you call it living."
He looked back down at the body.
"This man made danger his vocation. He didn't negotiate with life — he challenged it. He chose the Great Risk over the Small Happiness, and so he has earned a Great Death. He is more alive in this brokenness than any of you in your padded pews and carefully measured lives."
He lifted his arm toward the rope, still hanging in the dusk, unfinished.
"Man is not a creature of completion. Man is a rope — tied between the beast and the Overman, stretched over an abyss. He didn't reach the other side. There is no other side given. It has to be built. But he died in the Between, and the Between is where all becoming lives."
The wind rose, cooler now.
"Blessed are not the safe. Blessed are not the stable. Blessed are not the satisfied. Blessed are the broken — for they dared to bend the world, and were shattered not by weakness, but by the sheer size of what they attempted."

Later, kneeling beside the clerk who had followed him down from the counting-house, Zara-Chabby spoke more quietly.
"You think it was the shadow that killed him. Or the Jester. It wasn't. The shadow is not your enemy — it's your inheritance, the weight of everything that's kept you alive this long. It speaks a partial truth. But it cannot destroy you on its own."
"Then what did?" the clerk asked.
"He tried to walk the rope with his old self still strapped to his back. He brought the shadow with him — but he never transformed it. And so every step forward was pulled backward at the same time. He didn't fall because he doubted. He fell because he stayed divided. To walk the wire, a man has to become singular — no past pulling him back, no future demanding proof, no crowd deciding his worth. Only movement. Only presence."
"Then what must one do?"
"Leave even the shadow behind. Not by abandoning it — you cannot leave what's part of you. You outgrow it. You transform it." He looked once more at the fallen walker. "Gravity always wins against hesitation. To walk is not to balance the past and the future. It's to burn them both. To walk the wire, you have to become light — not the absence of weight. Light as in source. You don't fight the darkness on that rope. You become the thing that casts no shadow at all — because a shadow only exists where light is interrupted, blocked, resisted. A man who is fully, finally what he is leaves nothing left for the shadow to hold onto. He doesn't escape the abyss. He illuminates it."
He straightened, and looked out over the crowd already beginning to disperse, converting revelation back into rumor the way Madasara always did.
"Some of you will forget this by morning. Some will distort it into something safer to repeat. But a few of you will carry something you can't quite silence. That's the abyss. It won't come to destroy you. It will come, every day, to ask whether you'll stay on the ground — or become the kind of light that no longer needs it."

That night, he carried the body out of the square himself, past the chalk marks and the rope and the polished stones where collapse had already been converted into moral convenience, out to where the streets thinned into dust, the dust into stone, the stone into root, until the city's noise fell behind him like a dream being forgotten upon waking.
He buried him with his own hands at the tree line, in ground rough enough that it had clearly, at some point, considered becoming a rope itself and chosen instead to remain a challenge. He did not pray over the grave. He sang — a low hymn that rose in slow, deliberate waves, not to mourn the fall but to honor the climb, until it sounded, even to disciples who understood none of the words, like a mountain remembering how to stand.
"Rest now, my brother of the wire," he said at last, hand flat against the fresh mound. "You trembled because you were honest. You fell because you were divided. But you climbed because you refused to live only at the level of the many-many. You were not a fool. You were an opening. You were a bridge that trembled."
He stood back as the moon rose — cold, silver, unspendable, belonging to no ledger, making no promises, simply shining over a city already dimming itself toward sleep, one small light at a time, like a row of eyelids closing.
"Tomorrow," he said, to no one and everyone, "I will find those who are ready. Not to admire. Not to repeat. Ready to become pillars."
He stood alone on the hillside long after his disciples had drifted back to a respectful distance, unable to tell whether his solitude was chosen or simply unavoidable — sometimes, he knew, the two are exactly the same thing.
The rope was gone. The body was buried. The crowd had dispersed. And still the chapter didn't feel finished, because something remained stubbornly unburied — not the walker, not even the shadow, but the question the whole night had been circling without ever quite naming:
What now?
He didn't answer it. He only watched Madasara go dark, lamp by lamp, and felt — not certainty, not prophecy, just pressure, gathering somewhere beyond the hills — that something was already moving toward him through the unlit corridors between one becoming and the next.
Thus felt Zara-Chabby.
`;function lv({user:r,onBack:i,onSignOut:l}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,chapterText:sv,chapterTitle:"THE TIGHTROPE WALKER'S SHADOW",chapterNumber:4})}const rv=`Zara-Chabby left his disciples behind and wandered into the woods, as he had many times before. But this time he went too deep — and there is a depth in every wandering that isn't measured in distance. It's measured in the silence that starts, eventually, to follow you home.
At first the forest greeted him like an old friend, its leaves whispering the way familiar thoughts do. But the further he walked, the heavier the air grew, until the birdsong gave way entirely to the long, unbroken hum underneath existence itself.
Zara-Chabby smiled.
"Ah," he murmured. "Now I'm far enough in to hear myself."
The ground rose into a lonely hill, and on it stood a single crooked tree — twisted, defiant, still somehow reaching. Beneath it sat a young man, spine curled inward, hands buried in the soil as if he suspected even the earth might abandon him if he let go.
"Stop there, you evil one." The youth didn't turn around. "I know your presence, Zara-Chabby. You're a thief."
Zara-Chabby paused — not offended, only recognizing something — and kept walking toward him anyway.
"Has my evil finally caught up with me," the youth went on bitterly, "that the devil himself sends you?"
"If I'm to steal anything from you," Zara-Chabby said, settling onto a nearby stone, "it would take the devil a great deal of convincing to talk me into it. What brings you out here, friend? You're a long way from where you're supposed to be. Only wild things live in these woods — wild things, and me."
The youth sprang up, arms flailing. "I labor all day for scraps that barely feed me. For what?"
"Ah," Zara-Chabby said, unhurried. "That question has starved more men than hunger ever could."
"Don't speak in riddles. I'm sick of riddles — words that promise depth and deliver nothing but more confusion."
"And yet here you sit," Zara-Chabby said, "beneath a tree that twisted itself into one."
The youth looked up, as if seeing it for the first time — the trunk spiraling unnaturally, the branches clawing at a sky that kept refusing them.
"I hate this tree," he muttered. "It grows wrong. It's corrupted."
"No," said Zara-Chabby. "It grows honestly. Tell me — do you want to grow straight?"
"Yes! Straight, tall, admired — not like this." He gestured at himself. "Bent. Broken. Invisible."
"Then you don't want to grow at all," Zara-Chabby said. "You want to be seen. The tree doesn't ask the forest for approval. It grows toward the light, yes — but it also has to bury itself deeper in the dark to do it. The higher it climbs, the deeper it has to root."
"I've buried myself enough! My whole life has been darkness!"
"No," Zara-Chabby said. "You've only suffered it. You've never actually entered it. A man who hasn't descended into his own depths stays a stranger to his own heights. You don't become enlightened by imagining figures of light. You become enlightened by making your own darkness conscious."
"What does that even mean?"
"It means your misery isn't your enemy. It's your unfinished self."
"No! My misery is a curse. I want freedom from it."
"And what is freedom, to you?"
The youth hesitated. "To live without pain."
Zara-Chabby laughed — not cruelly, but deeply, from somewhere that had earned the right to. "That's not freedom. That's numbness. To actually live is the rarest thing in the world. Most people just exist."
"Are you saying I don't live?"
"I'm saying you're hiding from life inside your own complaints."
"I work. I suffer. I endure. What more is there?"
Zara-Chabby pointed at the crooked tree. "That. It doesn't endure — it transforms. It doesn't complain — it expresses. It never asks why me. It simply becomes."
"And what if I can't become?" the youth whispered.
"Then you have to stop pretending you already have."
The wind moved through the branches, and for a moment the tree seemed almost alive, whispering something too old to translate. The youth sank to his knees.
"I'm afraid," he said.
"Good," said Zara-Chabby.
"Good?"
"Fear is the shadow growth casts. If you weren't afraid, it would only mean you weren't standing at the edge of anything new. Tell me — what do you actually fear?"
"That if I try to rise, I'll fail."
"No. That isn't your deepest fear."
"Then what is?"
Zara-Chabby leaned in close. "That if you rise, you'll have no one left to blame."
The youth's eyes went wide, and something in him broke open — not destruction. Recognition. Tears came, not from weakness, but from finally, for once, being seen all the way through.
"I don't know who I am without my suffering," he whispered.
"Then it's time you found out."
"Will you guide me?"
Zara-Chabby was already turning back toward the trees. "I don't guide," he said. "I disturb." He paused, just long enough. "If you want to rise, don't go looking for light on its own. Dig. Break. Confront. Become."
"And if I fail?" the youth called after him.
"Then fail greatly," Zara-Chabby said, without turning around. "Even failure, honestly owned, is a form of creation."
The wind rose again, bending the crooked tree — but it did not break.
And for the first time, the youth didn't curse it.
He looked at it.
And he understood.
Thus spoke Zara-Chabby.
`;function hv({user:r,onBack:i,onSignOut:l}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,chapterText:rv,chapterTitle:"THE TROUBLED WORKER",chapterNumber:5})}const uv=`She did not come with a crowd, and she did not come as a disciple. She simply arrived, the way weather arrives — announced by nothing but its own presence — and stood before Zara-Chabby as if she had been standing there her whole life, waiting only for him to notice.
"Zara-Chabby," she said. "You speak of men as if they were bridges and storms. Rope stretched over abysses. Lions who learn to roar. But you've said almost nothing of women. So tell me plainly — what is woman?"
He looked at her for a long moment, the way a man looks at a question rather than a face, weighing not her but what she'd just asked.
Then he laughed, softly, without malice. "Ah. When a man tries to describe woman, he reveals almost nothing about her — and everything about himself."
She folded her arms. "Then reveal yourself."
He sat on a stone, and the wind gathered around them the way it does when it wants to hear something it hasn't heard before.
"Man," he began, "is a creature built entirely for conquest. Even when there's nothing left standing to conquer, he'll invent a mountain rather than sit still."
"And woman?"
"Woman," he said, "is the mountain he never quite finishes climbing."
Her eyebrow lifted. "Is that praise? Or confusion?"
"Both," he said. "Confusion is where honesty usually begins. Men have called women mysterious for as long as men have had a language to complain in. But what is mystery, really, except the polite name we give to our own failure to understand something?"
He leaned forward, elbows on his knees.
"There was a thinker once who said women are considered deep because no one has ever found the bottom of them. I used to believe that. Now I think it isn't that woman has no floor. I think it's that man is afraid of what he'll find if he actually reaches it."
She stepped closer, and something in her voice sharpened. "And what does man fear, exactly?"
"Being seen," Zara-Chabby said, without hesitation. "Truly seen. When a woman looks at a man honestly, she doesn't see his cleverness, or his conquests, or the version of himself he's rehearsed in mirrors his whole life. She sees his weakness. His hunger. Every pretense he's built, all the way down to the studs."
"And what does woman fear?"
"That she'll become exactly what she sees."
She laughed at that — not entirely amused. "You make us sound like mirrors."
"Dangerous ones," Zara-Chabby said, and meant it.
He stood and began to pace, the way he did when a thought was still finding its shape. "Man desires woman not because he understands her — but precisely because he doesn't. He's built to chase whatever keeps escaping him. Give a man a woman fully understood, fully mapped, fully still, and within a season he'll be bored enough to go invent a war."
"And woman?" she asked again, patient, the way you're patient with a man who is clearly enjoying the sound of his own theory.
"Woman doesn't chase," he said. "She selects."
"And you think that's power."
"It's the oldest power there is."
"Then why," she said, stepping closer still, "do women so rarely act like they believe it?"
That stopped him. He turned to look at her properly for the first time since she'd arrived.
"Because," he admitted, "power that isn't recognized behaves exactly like powerlessness. A woman who selects, but has been taught her whole life that she only waits, will spend her days waiting anyway — with the power sitting unused in her hands like a key to a door she's forgotten she owns."
She was quiet at that. It was the first thing he'd said that she didn't immediately answer.
"But don't mistake me," he went on. "Power is not peace. Between man and woman there has never once been harmony — only tension, and tension is not the opposite of love. It is the engine of it. Two stones don't spark by resting against each other gently. They spark by grinding."
"And love?" she asked, quieter now.
He laughed again, more bitterly this time, the laugh of a man who has been burned by the exact thing he's about to describe. "Love is the most beautiful misunderstanding there is."
He stopped and turned to face her fully.
"Man loves the woman he's imagined. Woman loves the man she believes she can still shape."
"You reduce us," she said, and for the first time there was real heat in it.
"No," he said. "I expose the game. Men say they want truth — but in a woman, what they actually prefer is illusion, because the illusion doesn't ask anything of them. Women say they want honesty — but in a man, what they actually reward is strength, even when the strength is only a mask stretched over something frightened underneath. So they meet — not as they are, but as they've each learned to be seen."
"That's a very tidy story," she said. "Tell me one that isn't."
He considered that. Then he told her this:
"There were once two travelers who met at a well in a country neither of them belonged to. The man told the woman he was a prince in exile, humble, wise beyond his years, wounded by a world too small for him. The woman told the man she was gentle, undemanding, easily pleased, a soft place for a tired man to finally rest. They fell in love with astonishing speed — because each had just been handed exactly the story they'd been hoping to hear. They married within the year.
"For a decade they were, by all outward accounts, happy. And then one evening, over a meal neither of them had the energy to pretend through anymore, the man admitted he had never been a prince — only a frightened boy who had learned that confidence was the only currency anyone respected. And the woman admitted she had never been soft — only exhausted, and quiet, and terrified that if she ever once asked for something, she would be abandoned for the trouble of it.
"They looked at each other for a long time. And then — this is the part men rarely tell — they laughed. Not out of relief exactly. Out of recognition. Because underneath both performances had been two actual people, waiting the entire decade to finally be caught."
The woman was silent for a while after that.
"So which is real," she said finally. "The performance, or what's underneath it?"
"Both," Zara-Chabby said. "That's the tragedy and the mercy of it at once. The performance is real because you have to survive somehow while you're waiting to be brave enough to drop it. And what's underneath is real because it never actually left."
She studied him. "Then what should a woman become — once she's ready to drop hers?"
"Not what man desires," he said. "Not what her society commands. Not even what she's spent her whole life being taught to admire in other women. She should become dangerous to expectations. Not cruel. Not contrary for its own sake. Just unpredictable enough that no one — not her mother, not her lovers, not the whole weight of everyone who ever told her who she was — can finish the sentence she is before she's had the chance to finish it herself."
"And man?"
"He must become worthy of the truth. Not clever enough to survive it. Not strong enough to withstand it. Worthy of it — which is a different, much harder thing, because it means giving up every mask the moment it stops serving anyone but his own comfort."
A long silence passed between them, filled only by wind and the particular quiet of two people who have run out of things to argue about and are left only with things to actually consider.
"And what," she said at last, "should one remember, approaching the other?"
Zara-Chabby smiled, faintly. "There are old voices who said: going to women? Don't forget the whip. I say the opposite. Go not with a whip. Go with awareness. Because wherever there is domination, there is fear hiding just underneath it — and wherever there is fear, nothing has ever once been created. Only defended."
She turned to leave. Then stopped, and looked back.
"And you, Zara-Chabby — do you understand women?"
He laughed — one last time, and this time there was nothing bitter in it at all.
"I understand exactly this much," he said. "The moment a man believes he finally understands woman, he has already begun to lie — to her, and worse, to himself."
She smiled — not agreement. Recognition. The particular smile of someone who has just heard a stranger accidentally tell the truth.
And she walked away.
Zara-Chabby watched her go, and for once — for the first time in longer than he could easily remember — he did not try to interpret what refused, on principle, to be possessed.
Thus spoke Zara-Chabby.


`;function cv({user:r,onBack:i,onSignOut:l}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,chapterText:uv,chapterTitle:"OF WOMEN",chapterNumber:6})}const dv=`Zara-Chabby came down again from the harsh clarity of the mountains into the soft, muffled breathing of the city, and it took him nearly an hour to understand what had changed. It wasn't the buildings. It wasn't the faces. It was the volume — Madasara had turned itself down, like a room deciding, all at once, to whisper.
It was the season of the Festival of the Great Balance, and the square that had once split the sky with proclamation and risk had become, in his absence, a garden of moderation.
The streets were decorated, yes — but with pale silk ribbons instead of flame, trembling on their posts as if afraid of moving too much. Even the colors had been muted, chosen not to offend an eye or stir a single reckless pulse. The people gathered, but they did not surge into each other the way crowds do when something is actually happening. They arranged themselves, carefully, like furniture placed by a cautious hand that had measured the room twice before committing.
Their laughter was measured. Their joy came pre-approved. Their excitement, when it appeared at all, had clearly been rehearsed somewhere private, in a mirror, until it looked acceptable enough to bring outside.
There was dancing — but it wasn't the kind of dance where a body forgets itself. It was a polite, synchronized sway, harmless as a metronome. No foot stamped too hard. No voice rose too high. Even celebration, it seemed, had been fully domesticated, the way a wolf can be bred, generation after generation, into something that only barks at the mailman.
Vendors sold "Measured Portions" — food weighed not by hunger but by recommendation. There was sweetness, but never enough to be excessive. There was spice, but only as a rumor of spice, a whisper that stopped well short of anything the tongue might actually remember tomorrow. Nothing here was built to wake the animal up. Everything here was built to keep it politely asleep.
And on every face, Zara-Chabby saw the same expression: not sorrow, not joy, but a gentle, permanent satisfaction — a calm so total it had started to resemble emptiness from the inside.
"They've abolished the storm," he murmured, "and now they call the silence peace."
He listened as families traded the year's report like receipts.
"No one fell," said one.
"No one failed," said another.
"Our accounts are balanced," said a third, and there was real pride in it, the particular pride of a man who has spent a year making absolutely sure nothing in his life required an explanation.
"And your lives?" Zara-Chabby whispered.
No one asked that question. No one, it seemed, had thought to.
A bell rang — not to summon anyone to anything, only to affirm what had already been quietly agreed upon: the year had passed without rupture. No one great had risen. No disaster had come. No abyss had opened beneath a single pair of feet.
And so, naturally, they celebrated.
"Behold," Zara-Chabby said softly, to no one, "the Last Men. They have finally discovered happiness — and they blink."
They did blink — not from dust, not from light, but the way you blink at anything too sharp, too deep, too real to let all the way in. Once, man was a beast who desired something. Then he became a camel, learning to carry weight without complaint. Then a lion, who finally learned to say no. But here, in this exact square, stood the final shape of the whole long experiment: a creature who no longer needed to say anything at all, because he had carefully removed everything in his life that might have demanded speech.
"I have arranged my life," the Last Man said, smiling, "so that nothing can surprise me."
He had abolished risk, and with it, quietly, without quite noticing the trade, the entire possibility of greatness. Every edge had been sanded down. Every fall had been padded in advance. Every step had been calculated three steps ahead, until the world became, at last, perfectly safe — and, in becoming safe, perfectly small.
He still sought pleasure. But only in doses. A little in the morning, a little at night, exactly enough to remind him he was technically alive, never so much that it might interrupt his sleep.
"What is passion?" he asked, smiling politely. "An imbalance. A disturbance of the system."
"What is longing?" he asked, blinking gently. "A defect in satisfaction. Something to be optimized away, like a draft under a door."
And so he cured himself of desire, the way you'd cure a house of drafts, one small permanent adjustment at a time. He made all things equal — not out of any real love of justice, but out of a quieter fear of difference, because wherever there is greatness there is comparison, and wherever there is comparison there is the one thing he had worked hardest of all to eliminate: discomfort.
"Once," he said, "the world was insane."
And he blinked, satisfied, as if he had personally fixed it.
He avoided the heights, because he might fall. He avoided the depths, because he might drown. He built his whole life in the lukewarm middle, where nothing ever burns and nothing ever quite freezes either — and on that exact temperature, he built himself a throne of comfort, and called it wisdom.
Zara-Chabby did not see, in him, the end of suffering.
He saw the end of becoming.
He climbed onto the fountain at the center of the square. The water beneath him ran in disciplined little arcs — never splashing, never once escaping the shape it had been assigned.
"I tell you!" he called, and his voice cracked the festival's careful rhythm clean in half. "A time is coming when man will no longer aim the arrow of his longing beyond man himself — when the string of his own bow will have simply forgotten how to sing! One must still carry chaos inside himself to give birth to even one dancing star — and I tell you, all of you: you still have chaos in you!"
They turned toward him. Not stirred. Amused.
They pointed at their shoes — soft, well-fitted, forgiving of every step. They patted their bellies, full but never heavy. They gestured, almost fondly, at their whole safe, stable, entirely predictable lives.
"Give us the Last Man, Zara-Chabby! Keep your chaos. Keep your stars. We'll take the ground under our feet, thank you."
And they blinked — pleased with themselves, and pleased, more quietly, that he hadn't managed to take that pleasure away from them.
Zara-Chabby went silent for a moment, watching them. Because what he saw in their faces wasn't defiance. It was resignation. Not rebellion — relief. And that, more than anything they'd said, was what stopped him cold.
They hadn't chosen smallness because they loved it.
They had chosen it because, somewhere along the way, they had been quietly, patiently frightened out of everything else.

As the laughter thinned into murmuring, a man in a clean coat approached him — hands steady, eyes clear, and somehow, at the same time, entirely somewhere else.
"I am the Doctor," he said, in the tone of a man announcing a modest but respectable achievement. "And I have cured them."
"Cured them of what?"
"Of excess," the Doctor said. "Of suffering. Of longing. Of every dangerous fluctuation the soul is prone to, if left untreated."
Zara-Chabby studied him the way you'd study a locked door you suspected of hiding something. "And what remains, once you've finished curing a person of all of that?"
"Balance," the Doctor said, with visible pride. "Health. Stability. They no longer burn — but neither do they collapse. They are, in every measurable sense, well."
"Health without fire," Zara-Chabby said slowly, "is a body that has simply agreed, in advance, to die comfortably."
The Doctor's smile didn't move. "Fire destroys. We've learned, as a people, to live without it."
"And what have you built in its place?"
"Continuity," the Doctor said. "A life that endures."
"A life that merely endures," Zara-Chabby said, "has already surrendered. It just hasn't gotten around to noticing yet."
The Doctor blinked — and in that single blink, Zara-Chabby saw the whole shape of the man's tragedy at once: even the healer had, somewhere along the way, been healed into an emptiness of his own, and mistaken the quiet for a cure.
"Tell me," Zara-Chabby said, gentler now, almost curious, "when did you last feel something you couldn't immediately explain?"
The Doctor opened his mouth to answer. Then closed it. And for the briefest moment, something flickered behind his clear, distant eyes — something that looked, if you were watching closely enough, almost like grief for a version of himself he could no longer quite locate.
He did not answer. He simply excused himself, and stepped back into the crowd, and was gone.

Zara-Chabby turned back to the square.
"Listen," he said, "and I'll tell you a parable."
"There was once a pig who lived in a pit of warm mud. The mud was soft, and known, and asked nothing of him. Each morning he sank into it and said, here, I am safe.
"One day, the forest beyond the pit caught fire. The flames rose. The trees screamed. The air itself turned into a single, unmistakable warning.
"But the pig stayed.
"Why should I leave, he said. The mud is warm. The mud is known. The forest is uncertain.
"So he stayed. And the fire came.
"The pig did not die from the fire," Zara-Chabby said quietly. "He died because he loved the mud more than he feared the flames."
The crowd shifted — barely, just at the edges. They had recognized themselves in it, every one of them, and had decided, almost instantly and almost unanimously, not to.
Among them stood his own disciples — the ones who had crossed real mountains with him, who had gone hungry, gone cold, stood at the edge of a real abyss without flinching. And now, looking at them properly for the first time since he'd arrived, Zara-Chabby saw something in their faces he hadn't expected.
They looked tired.
One stepped forward. "Master," he said, quiet, almost apologetic. "Is it wrong to rest?"
Zara-Chabby looked at him — not with anger. With something closer to grief. "Rest is not the enemy," he said. "But tell me honestly — do you wish to rest? Or do you wish to remain?"
Another spoke, bolder. "The mountain is harsh, Master. The climb never ends. Here — there is peace."
"Peace," Zara-Chabby repeated. "Or the absence of anything left to challenge you?"
They hesitated. He stepped closer, and his voice, when it came again, was almost gentle.
"Are you a bridge," he asked, "or are you a brick in the wall of Madasara?"
The question hung there, unanswered, because both of them knew the difference and neither wanted to say it aloud. A bridge suffers — it stretches, it bears weight, it connects two distances that would otherwise never touch. A brick simply sits, load-bearing and silent, until someone else decides where the wall goes.
One by one, they lowered their eyes. Some turned back toward the festival, toward the music, toward the Measured Portions and the ribbons that never moved too much. Others stayed near him — but something in their gaze had already softened, and Zara-Chabby understood, watching it happen in real time, that the temptation of the small is never loud. It never has to shout anyone down.
It only ever has to whisper one word, patiently, for as long as it takes:
Stay.
The music resumed behind him. The crowd returned to its measured joy. The disciples scattered, one at a time, like leaves that had briefly forgotten which way the wind was actually blowing.
And Zara-Chabby stood alone in the middle of it, and did not shout again. Did not argue again. Because he had finally understood, all the way through, the deepest and least comforting truth about the Last Men:
They cannot be convinced, because they are no longer seeking.
They do not resist, because they no longer reach.
They do not fight you, because somewhere along the way, quietly, without ceremony, they have already surrendered — and made their peace with calling it victory.
He stepped down from the fountain and walked back through the square. No one stopped him. No one, this time, even bothered to notice him leaving.
At the edge of the city he turned once, and looked back at all of it — the ribbons swaying just enough to prove they were still ribbons, the people blinking their small, contented blinks, the whole soft machinery of a world that had traded every dangerous, beautiful thing it might have become for the simple, permanent comfort of never again being surprised.
"Let them have their happiness," he said, mostly to himself. "I will go and find the ones who are still hungry."
And he turned — away from the festival, away from the comfort, away from the gentle, blinking eyes of the Last Men — and started back toward the mountains.
Toward the chaos.
Toward the fire.
Toward whatever it costs, still, to give birth to one single dancing star.
Thus spoke Zara-Chabby.

`;function fv({user:r,onBack:i,onSignOut:l}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,chapterText:dv,chapterTitle:"OF THE FESTIVAL OF THE LAST MEN",chapterNumber:7})}const mv=`A friend is not only the one who stands beside you in the bright hour when the crowd is listening. A friend is also the one who will strike you in the mouth of your delusion and not call it cruelty, because he knows a lie can wear a gentler face than a blade and still kill you just as surely.

Zara-Chabby learned this late, and not from the poets, but from the crude and honest fact of being seen in a moment when he wished to be admired instead of corrected.

It happened in the narrow lane behind the market, where the earth was still wet from a passing storm and the stones held the scent of iron. The men who called themselves his companions had been walking with him for months. They had climbed with him, laughed with him, endured cold and hunger and a hundred small humiliations in the same measured silence he had come to admire.

Then came the day when he told them a story about himself that was not true.

He told them he had not feared the ravine. He told them he had not stumbled. He told them he had crossed the ridge by will alone and not by accident, and that the hunger he felt afterward had been a matter of discipline, not burden. It was a small lie, made of pride, and it rose so gracefully from his mouth that he almost believed it himself.

They heard it and said nothing.

That, more than any open rebuke, was the first wound.

For the lie had not been met with truth. It had been welcomed with silence, and silence is often the most intimate form of cowardice. A friend who cannot tell you when you are lying is not protecting your dignity; he is protecting his own comfort. A friend who cannot face the truth because doing so might disturb the mood of the table is not your companion. He is merely an audience.

Then came the frontal stab.

It was not dramatic. There was no speech of thunder. No hand raised in accusation. Only a single question, plain and clean as a blade drawn in daylight.

"If that was true," asked one of them, "then why do you look away when you say it?"

Zara-Chabby had been ready to argue morality, to explain motivation, to dress his vanity in antique cloth and call it wisdom. But the question struck at the root before he could hide behind the leaves of his excuses.

He had looked away because he knew.

He knew the story was too polished, too bright, too proud. He knew it had the odor of a man polishing a mirror when he meant to deceive himself. He knew the lie was not in the facts alone but in the shape he wished the facts to take in the eyes of others.

And because the question had been asked without malice, because it had been offered not to shame him but to save him, he could not answer it with a longer lie. The silence that followed was not peaceful. It was raw.

Then the friend spoke again.

"You are not a coward because you are proud," he said. "You are a coward because you will not let the truth wound you. You count your courage by the stories you can survive telling. But courage is not merely the power to endure. It is the power to be corrected before the wound becomes a habit."

Zara-Chabby did not laugh. He had not the luxury. He could hear the calm in the voice and it was worse than anger; it was care.

The truth is a hard thing to swallow when one has spent too long calling his own distortions nobility. It enters the body like cold wind. It makes the knees shake for a moment. It does not flatter. It does not soothe. It simply tells you what is.

He had wanted friends who would admire him. Instead he had been given friends who would not permit him to remain soft in the places that needed steel.

There is a difference between strength and hardness. Strength can be corrected. Hardness refuses correction. Hardness says, if I am wounded, it is because the world is unjust. Strength says, if I am wounded, it is because I have not yet become honest enough to bear the truth.

So the frontal stab was not an act of betrayal. It was the beginning of a better friendship.

The wound did not close in a day. Pride is slow to bleed, and slower still to die. But the lesson remained. A friend is not the one who agrees with your image of yourself. A friend is the one who makes that image tremble until it becomes real.

That evening, when the others had gone quiet and the lantern smoke hung low over the alley, Zara-Chabby sat in the dust and confessed what he had hidden from them and from himself.

"I was afraid," he said.

"Of what?"

"That if I did not appear larger than the danger, I would be left small by it."

The friend nodded then, not with triumph, but with sorrow.

"Then perhaps we have not been walking with the wrong man," he said. "Perhaps we have only been walking with the wrong version of him."

And in that moment Zara-Chabby understood the shape of true friendship. It is not a shield. It is not a mirror. It is a blade held carefully so that it cuts the lie and not the soul.

A friend who loves you too gently will keep you in a life that is safe but false. A friend who loves you honestly will make you feel the pain of becoming.

And if you survive the cut, you may discover that the wound was not the end of your life, but the beginning of your wisdom.

Thus did Zara-Chabby learn that the most brutal kindness is often the kind that tells you the truth before you are ready for it.

And thus did he understand, at last, that friendship is not a place where one avoids the strike.

It is the place where one learns to stand still long enough to hear the truth, even when it arrives with a blade in it.

Then he rose, bruised but no longer pretending, and walked on with the men who had dared to wound him for his soul's sake.

Not because they had made him weak.

But because they had made him honest.
`,yv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function gv({user:r,onBack:i,onSignOut:l,onNextChapter:h}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,onNextChapter:h,nextChapterLabel:"THE MARKET OF EMPTY PRAISE",chapterText:mv,chapterTitle:"THE FRONTAL STAB (A LESSON IN FRIENDSHIP)",chapterNumber:1,bookLabel:"Book 2",chapterList:yv})}const bv=`Zara-Chabby came upon the market at the hour when the sun was neither rising nor setting, only lingering — as if even the sky had grown so comfortable with delay that it saw no reason to commit to anything as final as dusk.
From a distance, it shimmered. Not with gold. Not with fire. With something softer, something more agreeable — the particular glow of a place that has organized itself entirely around not upsetting anyone. The air carried laughter, but not the kind that comes up from the belly. This was laughter that stayed near the surface on purpose, careful never to disturb whatever was actually underneath it.
As he came closer, he noticed what was missing before he noticed what was there. No cries of desperation. No arguments over price. No hunger in anyone's eyes, buyer or seller.
Everything, without exception, was pleasant.
"Strange," Zara-Chabby murmured. "A market without struggle is just a temple wearing a market's clothes."
He stepped inside.
There were no coins of metal here. No silver rang against a countertop, no gold caught the light. Instead, the people traded in something else entirely — they traded in words.
"I admire your strength," said one.
"You are more than enough," replied another.
"You are perfect exactly as you are."
"Never change."
Each phrase changed hands like currency, offered as payment and received with the particular gratitude of someone who has just been handed exactly what they came for.
Zara-Chabby stopped at a stall.
"What do you sell?" he asked.
The merchant smiled, warm and unhurried. "I sell reassurance," he said. "In return, I receive appreciation. It's a fair trade. Everyone leaves satisfied."
"And what is the value of your goods?"
The merchant reached beneath his table and produced a handful of coins — pale, smooth, unnaturally light. Stamped into each one, in careful lettering, was a single word: Enough.
Zara-Chabby took one between his fingers. It bent, slightly, under almost no pressure at all.
"Clay," he said.
"Yes," the merchant said, and there was real pride in it. "Soft. Just like the people who spend it."

As he walked deeper in, Zara-Chabby began to notice a pattern that unsettled him more than any of the noise could have.
Every man here was rich. Every woman was praised. Every child was told, with total sincerity, that they were exceptional.
And yet nothing exceptional, anywhere in this market, actually existed.
A man stood on an overturned crate, arms spread, declaring himself a poet.
"What have you written?" Zara-Chabby asked him.
"I haven't written anything yet," the man said, beaming. "But I feel very deeply. And they've told me that's enough."
Around him, the crowd nodded in warm unison.
"Beautiful," they murmured.
"So inspiring."
Zara-Chabby looked at them, and something in his gaze went hard. "You have mistaken potential for achievement," he said.
They only smiled wider — because in this market, even a direct criticism arrived pre-translated into encouragement before it could land.
He came upon a small circle where a young woman was speaking, voice soft, eyes lowered.
"I doubt myself, sometimes," she said.
The crowd gasped — not with concern. With opportunity.
"You are amazing!"
"You're stronger than you know!"
"You are absolutely flawless!"
Each voice rushed in over the last one, competing now, each trying to out-praise the one before it, until the compliments piled on top of each other so fast none of them had time to mean anything.
Zara-Chabby stepped in close.
"Do you wish to be free of the doubt?" he asked her, quietly, so only she could hear it clearly.
She hesitated. Looked, instinctively, back at the crowd for permission to answer.
"I wish," she said finally, "to feel better."
Zara-Chabby nodded slowly. "And so you come back here — not for truth. For relief."
The crowd bristled at once, closing ranks around her like a single organism.
"This is kindness!" someone shouted.
"No," Zara-Chabby said, not raising his voice at all. "This is dependency." He turned back to her. "You are not addicted to praise. You are addicted to escape — and they have built you an entire market so you'll never have to leave it."
She said nothing. But something in her face, for just a moment, looked less like relief and more like recognition — the specific discomfort of hearing a sentence you have been avoiding for years.

Deeper still, the stalls grew more elaborate. Here, people were not selling goods at all.
They were selling identities.
"Come!" one vendor cried. "Be a visionary — no vision required!"
Another called across the aisle: "Be a warrior! No effort necessary!"
Zara-Chabby watched men and women try on titles the way they might try on a coat — checking the fit in a mirror, admiring the cut, never once asking what the coat had actually been made of, or by whom, or at what cost.
"I am a leader," announced a man who had never once led anything larger than his own opinion.
"I am enlightened," said another, who had never, as far as Zara-Chabby could tell, questioned a single thing he believed.
"And what have you done?" Zara-Chabby asked them both.
They blinked at him, genuinely confused by the question, as if he'd asked it in a foreign language.
"Done?" one repeated.
"Yes," Zara-Chabby said. "What have you risked? What have you built with your own hands? What have you actually overcome, that cost you something to overcome?"
They frowned, and neither answered, because in this market identity was never earned. It was simply declared — purchased off the rack, worn home, and admired in private.

Zara-Chabby returned to the coin still resting in his palm and held it up high enough for the nearest stalls to notice.
"Behold," he said, loud enough now to draw a small crowd. "The currency of this entire place."
They gathered, curious rather than reverent.
"You trade in these," he said, "and you call yourselves wealthy."
He pressed the coin harder between two fingers. It cracked, a thin, dry sound like a knuckle popping.
A murmur moved through the gathering.
"This coin says Enough on its face," Zara-Chabby continued. "But underneath the word, it's made of nothing but clay."
He let it drop. It shattered on the stone at his feet into three unequal pieces.
"Your worth," he said, looking up at them, "has become exactly as fragile as the praise you've built it out of."

He climbed onto a low platform at the market's center, and the crowd gathered around him now — not out of reverence, but out of the same curiosity you'd feel watching a stranger argue loudly with no one in particular.
"I've been watching you," he began. "You applaud each other constantly. But not for greatness. You applaud each other to avoid it — because greatness, once it's in the room, makes everything smaller than it look exactly as small as it is."
The air around the platform tightened.
"You've learned," he went on, "to reward comfort instead of courage."
"What's wrong with encouragement?" a man shouted from somewhere near the back.
Zara-Chabby smiled, faint and unamused. "Encouragement isn't the problem." He leaned forward over the crowd. "False encouragement is the problem. You have perfected the art of applauding each other directly into mediocrity, and calling the sound of it kindness."
The words landed like a slap delivered in slow motion. Some flinched. A few actually laughed, uneasily. Most simply blinked — the same soft, protective blink he'd seen everywhere else in this city, the blink of people closing their eyes just slightly against something too sharp to let all the way in.

"Listen," Zara-Chabby said, "and I'll tell you a parable."
"There was once a seed that refused to grow. It was afraid — afraid of the darkness of the soil, the pressure of the earth pressing in from every side, the violence of its own shell finally splitting open.
"So the people who found it did the kindest thing they could think of. They painted it gold. They set it on a velvet pedestal in the town square. They praised its beauty from every angle.
"You are perfect, they told it. You do not need to change.
"And the seed believed them completely, because it was tired, and their voices were warm, and it wanted very badly to believe.
"And so the seed remained exactly what it had always been. A seed.
"And it died."
He let the silence hang there a moment before finishing it.
"Not because it was buried," Zara-Chabby said. "But because it was never, not even once, actually planted."

"This is cruelty!" a voice shouted from the crowd.
"You insult us!" cried another, and this time real anger moved through the gathering like wind through dry grass.
Zara-Chabby nodded, unbothered.
"Yes," he said simply. "Truth very often feels exactly like an insult, to people who have built their whole lives out of illusion instead." He scanned the faces in front of him, one at a time. "You don't actually want to grow. You want to feel as though you already have — which is a much cheaper thing to want, and a much emptier thing to get."
A woman stepped forward from the crowd, chin lifted. "And what's wrong with just feeling good?"
Zara-Chabby considered her carefully before answering. "Nothing at all," he said. "Unless it starts replacing becoming. A little joy along the road is a gift. Mistaking the joy for the destination is how you end up gilding a seed instead of planting it."

Off to one side, a small handful of people stood apart from the rest — not cheering, not protesting. Only listening, quiet and still, the way you listen when a sentence has found something in you that was already waiting to be found.
Zara-Chabby noticed them.
"You," he said, pointing to one young man among them. "Why so silent?"
The young man swallowed, and answered honestly. "Because your words disturb me."
Zara-Chabby smiled — the first real warmth he'd shown in this whole market.
"Good," he said. "Disturbance is where every real awakening actually begins. Comfort has never once, in the history of anyone, woken a person up."

Something in the market itself seemed to shift then — not outwardly, not in any way you could point to, but underneath, the way weather changes before the first drop of rain actually falls.
Some people clutched their clay coins tighter, protective, as if sensing a threat they couldn't quite name. Others let theirs simply fall from their hands, unremarked. A few looked down at their own open palms as if seeing them, genuinely, for the first time in years.
Zara-Chabby stepped down off the platform.
"I don't want to destroy your market," he said, quieter now, moving among them instead of above them. "I only want to show you what it's actually costing you to keep it running."

"To be told you are enough," he said, "is the single most dangerous gift another person can hand you. It removes your hunger. It files down your edge until it can't cut anything anymore, including the things that need cutting. It convinces you the journey is already finished — when in most cases, if you're honest with yourself, it has not even begun."
He turned to face all of them at once.
"You are not enough," he said, and the crowd gasped audibly, as if he'd struck someone in front of them. "You are potential. And potential," he said, letting the word sit there, unhurried, "is not a destination. It is only ever a direction."

He began walking toward the market's edge. Behind him, the voices rose again — but differently now, split down the middle. Some drifted back toward the stalls, back toward the praise, back toward the comfortable clay coins scattered across the stones. Others stood frozen, caught between the life they'd built here and the one sentence that had just cracked it open. A small few fell into step behind him.
He did not look back to count how many.
He already knew the market would still be standing tomorrow morning, exactly as it had been. Nothing he'd said would tear it down.
But he also knew, with the same certainty, that the crack would still be there too.
At the very edge of the market, he stopped once more — not to address the crowd this time, but almost to himself, to the still evening air.
"Man has always wanted to be seen," he said. "Now he only wants to be affirmed. And somewhere in that small, quiet substitution, he has traded truth for comfort, and called the trade a bargain."
He looked down at the two remaining shards of the broken clay coin still resting in his palm. Then he let them fall, one after the other, to the stones below.
"They call this kindness," he said. "I call it the slow, comfortable death of a soul that never even noticed it was dying."

And those among the crowd who still had ears left for it — really left for it, underneath all the praise they'd been buying and selling for years — felt something inside themselves give way. Not completely. Not all at once.
But enough.
Enough to question. Enough to doubt what they'd been calling peace. Enough, for a few of them at least, to finally begin.
Zara-Chabby walked on into the thinning evening light, looking now not for the ones who wanted, more than anything, to feel good.
But for the rare few, wherever they were hiding in this soft and agreeable city, who were still willing — however afraid, however unfinished — to actually become.
Thus spoke Zara-Chabby.
`,pv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function wv({user:r,onBack:i,onSignOut:l,onNextChapter:h}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,onNextChapter:h,nextChapterLabel:"THE WEIGHT OF HONEST EYES",chapterText:bv,chapterTitle:"THE MARKET OF EMPTY PRAISE",chapterNumber:2,bookLabel:"Book 2",chapterList:pv})}const vv=`The forest was older than the kingdom and considerably less forgiving of it. Its trees stood in ranks like witnesses who had seen too much to be impressed by anything new, their trunks furrowed with the specific patience of things that measure time in centuries rather than seasons. The wind moved through them with a low, knowing voice, as if it were passing old confessions from root to root, unhurried, in no rush to be believed. There were birds, streams that flashed like polished steel between the stones, moss soft enough for saints or for sleepers. And yet none of it was innocent. This was not the beauty of a garden, tended and forgiving. It was the beauty of a judge who has stopped smiling at defendants, and therefore has finally stopped being able to lie to them.
It was into this place that Zara-Chabby came at dusk, and though he walked alone, those who have learned to look past the surface of a man know that a solitary figure is rarely traveling by himself. He carried, as all solitary men do, a small procession behind him — old griefs trailing like servants, unanswered questions walking at his side, and somewhere further back, not yet ready to be born, a future still deciding whether it wanted him.
He had come because he'd heard laughter — not the laughter of children, not the loose, forgetting laughter of drunk men, but something lighter: the sound of young women who had chosen the forest precisely because it let them disappear from the world's eyes long enough to finally appear, just slightly, in their own.
He found them in a clearing where pale flowers were still opening in the day's last light. Seven of them, perhaps eight — memory always misplaces one when there is this much beauty gathered in a single place. They sat in a loose half-circle on the grass, weaving reeds into shapes with the quick, careless fingers of youth, talking in that particular register the young use for danger: equal parts contempt and secret longing to be noticed by it.
When they saw him, the talking stopped at once, the way birdsong stops when something moves in the brush.
One rose. Her name was Nalia, the eldest of them, and in her face two things were already at war — the innocence she still half-believed in, and the knowledge steadily eroding it. Another, Miremba, lifted her chin as though pride might do the work that courage hadn't yet learned to do. Two of the younger ones clutched each other's sleeves and stared at him with open, unguarded curiosity — the specific look of lambs who have not yet been taught the word wolf, and are still, for one more evening, allowed that mercy.
"Good evening," Zara-Chabby said, and bowed his head slightly.
No one answered. This didn't trouble him. He looked at them not the way a man looks at ornaments, admiring the polish, and not the way a priest looks at sin, cataloguing it — but the way you look at something still being made, wondering privately what weather might yet shape it.
"You're far from the road," Nalia said finally.
"So are you," he replied.
The girls exchanged a glance. The answer satisfied none of them — too direct to flatter, too calm to properly insult.
"We came here to be alone," Miremba said, folding her hands.
"That," Zara-Chabby said, "is rarely the same thing as being unseen."
A small silence entered the clearing like an uninvited guest and sat down among them. The youngest maiden laughed once, softly, not from amusement but from nerves — the specific laugh of someone who has just realized the conversation has teeth. He turned toward her, and she went very still.
"You've built yourselves a small kingdom here," he said, looking at all of them in turn. "A kingdom of glances, of whispers, of grace borrowed a little at a time from whoever's watching. You smile to be loved, and you're loved for smiling. None of that, I'm afraid, is the same thing as being seen."
"And what is seeing, then?" Nalia asked, chin lifted.
He walked to the clearing's edge and rested one hand against the bark of an old tree. "To see," he said, "is to carry the weight of what you've seen. To truly know a soul is to make that soul answerable for itself. To look at someone without blinking is to take away the comfort of their own illusions."
The maidens traded uneasy looks.
"Most men," he went on, "don't actually fear judgment. They fear being known."
Something in the air shifted at that — the words simple, but landing with the particular force of an old bell rung once in an empty chapel at night. Something in each of them stiffened at once, as if they'd all heard this exact truth somewhere before and hadn't liked its voice the first time either.
"To be known isn't always a burden," Miremba said, though her voice had gone smaller.
"No," Zara-Chabby said. "Sometimes it's a terror."
One of them, silent until now, stepped forward. Her name was Selene, and she was beautiful the way water is beautiful — nothing that struck you at first glance, but impossible to stop thinking about once you'd actually looked. She had the kind of face built for praise, and the kind of patient silence that waited, expertly, to receive it.
"You speak as if being seen were a wound," she said, with practiced calm.
"It is."
"That's a bitter doctrine."
"Truth tastes bitter," he said, "right up until it starts to strengthen you."
"Then what would you have us do?" Selene drew herself up. "Hide? Refuse to be admired at all?"
Zara-Chabby smiled, though there wasn't much warmth in it. "No. Admiration is a fine lantern, as long as it never becomes your sun. To be praised is not the same as to be known. A fool will clap for a mask and call the clapping love."
The maidens murmured among themselves. Selene's cheeks colored. "You think women are vain."
"No," he said. "I think the world teaches women and men both to hunger for praise, because praise asks nothing of you. Honest eyes ask everything."
The wind rose. The trees moved. The clearing darkened by one careful degree.
"What do honest eyes actually want?" Nalia asked.
"Responsibility," Zara-Chabby said, and let the word sit in the air a moment before continuing. "To be fully seen is to be summoned. A person truly known can no longer claim innocence quite so easily. If someone has seen your strength, you now must answer for it. If they've seen your weakness, you can no longer pretend, even to yourself, that you never possessed it."
"That's a cruel thing," Miremba said.
"No," he answered. "It's a heavy thing. Cruelty is when a man is seen and then used. Honesty is when he is seen and must, from that moment on, actually become something."
That was too much for the youngest of them, who whispered, mostly to herself, "I shouldn't like such eyes on me."
Zara-Chabby turned to her gently. "Then you're wiser than most in this clearing. Because it's precisely such eyes the soul is most afraid of."

They drew closer despite themselves — which is the way of most human beings, resisting the knife with one hand while leaning, almost involuntarily, toward whatever it might cut away.
Zara-Chabby settled onto a fallen log and let the dusk gather around him like a cloak he'd been waiting to put on.
"Listen," he said, "and I'll tell you the tragedy of being known."
They fell silent.
"When someone looks at you honestly, something in you that had been sleeping wakes up. You are no longer only what you claim to be. You are also what you might yet become — and that, more than anything, is the true burden. Potential is a tyrant. To be fully seen is to be reminded that you might fail the exact shape of your own promise. The eye that truly sees you does not let you go on being a child inside your own lies."
"Is that why people avoid the truth?" Nalia asked quietly.
"Among other reasons," Zara-Chabby said. "Some avoid it out of weakness. Some out of laziness. Some have made an entire religion out of comfort. But the deepest reason is this — truth is never content merely to witness you. It insists on commanding you."
The youngest, Ilya, twisted a reed between her fingers until it bent past the point of repair.
"Then to be seen," she said slowly, "is to be made responsible."
"Yes."
"For what one is."
"Yes."
"For what one could be."
Zara-Chabby looked at her with something close to approval. "Yes."

At the clearing's edge stood a small pool, half hidden beneath low branches, its water already blackening under the coming night, though it still held fragments of sky trapped somewhere in its surface. Zara-Chabby led them there.
"Look," he said, standing before it.
They approached one at a time, and in the still water each saw herself — not the flattered version, not the one shaped by whoever happened to be watching, but the one that trembled slightly with every breath the forest took.
"There," Zara-Chabby said. "The first lie undone. A face in water can't be argued with."
"A reflection isn't a soul," Selene said, arms crossed.
"No," he agreed. "But it's the beginning of testimony."
Nalia knelt beside the water, and something in her expression changed as she looked.
"What is it?" Miremba asked.
"I look older here," Nalia said, quietly, almost confused by her own observation.
"Because the eye that truly knows you," Zara-Chabby said, "doesn't only see what's present. It sees the direction your whole life is leaning."
Ilya looked into the pool and flinched, actually flinched, as if something had reached up to touch her.
"I don't like it," she said.
"Good," said Zara-Chabby.
She stared at him, offended. "Why good?"
"Because anyone who likes every image of themselves has already surrendered to vanity."
A night bird cried once in the branches and went quiet, as if it too had been listening and thought better of interrupting.
"A human being becomes dangerous," Zara-Chabby continued, "the moment he stops fearing what he might become. That's when he starts excusing himself, decorating his own bad habits, renaming his appetites as virtues. The honest eye strips all of that away. It doesn't ask what you appear to be. It asks only what you're willing to become when no one at all is clapping for you."
Miremba's mouth tightened. "You speak as if praise were poison."
"It isn't poison," Zara-Chabby said. "It's sugar. And too much sugar, taken too often, ruins your hunger for actual bread."

Among them was one who had spoken least and watched the most — Talia, unadorned, her gaze carrying the grave stillness of a winter field that has stopped waiting for spring to apologize. The others assumed she was simply shy. But shyness, more often than anyone admits, is only thoughtfulness that hasn't yet decided whether the room deserves it.
She stepped forward now.
"Master," she said, "if being seen is this heavy a thing, why should any of us want it at all?"
Zara-Chabby considered her for a long moment before answering.
"Because," he said finally, "there is a misery worse than being known."
"Which is?"
"Remaining invisible to yourself."
The others glanced at one another. Talia didn't move.
"A person can spend a whole life surrounded by smiles," he went on, "and still never once be met. He can be admired, adored, even envied, even loved — and yet no one will ever have laid a hand on the actual architecture of who he is. That kind of life is a house painted entirely in gold, with no door built anywhere into it."
The words fell like the first real rain onto ground that had been dry far longer than anyone wanted to admit.
"And honest eyes build the door?" Talia asked.
"They do more than that," Zara-Chabby said. "They force the house to finally admit what's actually inside it. Strong or weak. Noble or small. Ready, or already halfway to ruin."
He stood, and the silence around him seemed to rise with him, the way silence sometimes does around a man who has just said something true and is waiting, patiently, to see who flinches.
"Understand this," he said. "To be seen is not to be forgiven in advance for what's found. It is to be handed the terrible dignity of finally being answerable."

Dusk had deepened into something closer to full dark. The forest had become a low sermon of shadow, and still none of them left, unwilling to walk away from a conversation that had already begun quietly rearranging the shape of their own hearts.
Zara-Chabby's voice, when it came again, had changed — sharper now, more interior, as if he weren't speaking to them at all anymore but through them, to whatever animal still lived, half-asleep, underneath each soul present.
"Potential," he said, "is the single most frightening thing a human being can carry. A stone is perfectly content being a stone. A river never once wonders whether it might, if it tried hard enough, become fire. But the human creature is cursed — and, in the same breath, blessed — with being permanently unfinished."
He paced in front of them.
"You may become more than you currently are. That sentence is either a blessing or a knife, depending entirely on what you do with the years it's given you — because it also means you may betray whatever you might have been."
Selene had gone pale. Zara-Chabby saw it, and did not soften for her sake.
"Every great life is first haunted by its own possibility," he said. "To be truly known by another is to be reminded of that haunting all over again. Their eyes say, without a single word: I have seen something in you. And once that has happened to you, once, you cannot go back to living as though you were never summoned."
"That's why some people are afraid of being loved," Miremba said, almost to herself.
"Yes," Zara-Chabby said. "Because love, at its very best, is never only a caress. It's a demand. The one who truly sees you doesn't simply hand you affection and walk away satisfied. He places your entire future onto your own shoulders and says: not you are dear to me — but now become worthy of what I have already seen in you."
Ilya's eyes filled, though she refused to let the tears actually fall.
"And if one can't?" she asked.
Zara-Chabby looked at her with something strange — tender, and entirely without sentiment.
"Then one suffers," he said. "But suffering isn't always a punishment. Sometimes it's only the soil a self is finally forced to rise out of."

Selene could hold her silence no longer.
"You talk as if another person's gaze should wound us into greatness," she said. "But what if their gaze is only cruel? What if they look at us only to judge, and nothing more?"
"Then," Zara-Chabby said, without hesitation, "you have simply met the ordinary world."
She drew in a sharp breath, anger rising now. "And you approve of that?"
"No," he said. "I only name it." He stepped toward her. "There are eyes that flatten you. Eyes that envy. Eyes that consume whatever they can't equal, and call the consuming admiration. But there are also eyes that discipline. They don't flinch away from your contradictions. They don't hide from your weakness to spare themselves the discomfort of it. They don't lie to preserve your comfort, or theirs."
He pointed toward the pool. "Such eyes are rare."
"And what do they do, when you find them?" Nalia asked.
"They burden you," Zara-Chabby said. "They make you feel the full weight of your own existence, and they say — without ever needing to say it aloud — you are not merely passing through this world unnoticed. You are leaving a mark whether you intend to or not. So choose, carefully, what mark that is."
A long silence followed.
"That's almost unbearable," Talia said, softly.
Something close to joy moved across Zara-Chabby's face. "Yes," he said. "Which is exactly why it's precious."

Full night had settled over them now, the forest gone silver-edged and deep-shadowed. The maidens drew closer together — half for warmth, half for the strange new intimacy of everything that had just been said aloud between them.
Zara-Chabby reached into his robe and drew out a small object wrapped in cloth. He unwrapped it slowly. Inside were two carved eyes, made of dark stone.
The maidens stared.
"They're blind," Miremba said.
"No," Zara-Chabby said. "They're patient." He turned them so the moonlight touched the stone. "These aren't eyes that flatter. Not eyes that make excuses for you. Not eyes that beg, quietly, to be loved back. They don't blink, because they have nothing left in them that flinches."
He turned the carvings over in his hands.
"They're the symbol of a soul that has given up cowardice entirely. To meet another person with such eyes is to say, without needing a single word: I will not let you disappear into your own comfortable lies. I will not let you call your weakness peace, simply because peace is easier to live with."
The maidens went very still.
"The world is full of blinking eyes," he went on. "They glance. They approve. They forget by morning. Those are the eyes of convenience. But the eye that refuses to blink is a discipline, chosen and re-chosen every day. It says: I have seen you. And now you can no longer pretend you were never seen at all."
Selene looked at the carved stone eyes as if they might, at any moment, accuse her personally.
Perhaps, in their way, they already had.

To everyone's surprise, Selene sat down on the grass and covered her face with one hand. When she finally spoke, her voice had changed entirely.
"I don't want to be merely admired," she said. "I want to be chosen."
No one answered right away.
She laughed once, bitterly, at her own sentence. "But maybe I'm afraid of the very thing I'm asking for."
Zara-Chabby settled back onto the fallen log. "Go on," he said.
She did. "When men look at me, I learn very quickly what pleases them. So I become that. And then I tell myself I'm free, because I'm wanted. But when I'm finally alone — I don't actually know who's left, underneath all that pleasing."
Her eyes lifted, and in them was a nakedness that made the others look away out of instinct.
"If someone truly saw me," she said, "I think the first thing I would feel is shame."
"Good," said Zara-Chabby.
She frowned at him through unshed tears. "Why do you keep saying that?"
"Because shame isn't the enemy of truth," he said. "It's very often truth's first guard. A life with no capacity for shame becomes shameless — and shamelessness is only ignorance, dressed up in confidence it never earned."
She wiped her eyes. "Then what must I do?"
"Endure being seen," Zara-Chabby said. "Don't flee from it. Let the honest eye show you not only what you are right now — but what in you refuses, stubbornly, to die."

Talia had stayed quiet through most of it, but now she looked at him directly.
"I think," she said, "the worst terror isn't being seen badly. It's being seen clearly."
Zara-Chabby smiled. "Finally," he said. "Someone has found the root of it."
"If I'm truly known," Talia went on, "I can no longer hide inside my own possibility. I have to either become what was glimpsed in me — or prove, once and for all, that the glimpse was wrong."
"Exactly."
"And if I fail?"
"Then failure becomes your teacher."
She didn't smile at that. "Men hate this."
"Yes," Zara-Chabby said. "Men adore a promise as long as it stays vague. They despise the exact moment it becomes an obligation. A child says, I could be anything. An adult, if he's being honest with himself, says, I must now choose what I will actually be — and answer for the choosing."
Nalia folded her hands in her lap. "Then to be known is a kind of judgment."
"Yes," Zara-Chabby said. "But judgment doesn't have to be cruelty. It can also, if you let it, be the very beginning of form."

The forest had grown so still that even the insects seemed to be listening. Zara-Chabby rose and walked to the clearing's edge, standing beneath the black branches as if beneath the roof of some ancient, unroofed temple.
"Look around you," he said.
They did.
"The trees don't apologize for their height. The stream doesn't beg to be deeper than it is. The moon doesn't pretend, even for a night, to be the sun. Everything here is faithful to its own nature — and in that faithfulness, spared the particular humiliation of lying to itself."
He turned back to face them.
"You alone were given the terrible gift of becoming more than your nature — and therefore the terrible risk of falling short of it."
They listened in something close to awe.
"To be seen honestly," he said, "is no small thing. It is the soul being reminded, gently or otherwise, that it is unfinished. It is the mirror saying: no, you are not yet complete. No, you may not rest here. No — you are answerable."

Miremba, who had resisted hardest all evening, now spoke with a quiet none of them had expected from her.
"What if no one ever sees us that way?"
Zara-Chabby considered this seriously. "Then," he said, "you must learn to see each other — and yourselves — with the same severity and the same mercy, together, at once."
"Severity and mercy?" she repeated.
"Yes. Severity without mercy is only a knife. Mercy without severity is only a lie dressed as kindness. Honest eyes have to carry both at the same time, or they aren't honest at all."
He looked at each of them in turn.
"See one another deeply enough to call out the better, truer version waiting underneath. That's the actual beginning of a real community — not convenience, not flattery, not the false peace of minds too frightened of each other to ever collide. Eyes that stay open. That's all it's ever really been."
"Eyes that don't blink," Talia said quietly, almost to herself.
Zara-Chabby heard her anyway. He nodded once.
"Yes."

By now, something in each of them had shifted — not outwardly. Their hair was still pinned the same way, their hands still soft, their garments still touched by the same forest breeze as an hour before. But inwardly, something small had cracked open, and through the crack came a harder, brighter light than any of them had let in for a long time.
Selene rose first.
"I've been praised for beauty my whole life," she said, "and never once asked what beauty should actually cost me."
No one answered. She looked at Zara-Chabby with a steadier gaze than she'd managed all evening.
"If I'm going to be seen," she said, "then I have to also be shaped."
Zara-Chabby bowed his head slightly. "Now you're speaking like someone who's actually begun."
Nalia rose next. "And I've hidden my thoughts behind good manners," she said, "because I was afraid of being called harsh."
"Courtesy is noble," Zara-Chabby said gently, "when it serves the truth. It's cowardice when it replaces it."
One by one, the others rose in turn, each admitting, in her own particular language, a different shape of the same fear — the fear of being plain, of being too severe, of being unloved, of finally becoming exactly who they were and discovering it wasn't enough, or was somehow too much.
Zara-Chabby received each confession the way a physician receives a symptom — not to shame the patient standing in front of him, but to properly read the disease underneath.

The moon stood high now, and the forest had become a chamber of pale, patient fire. Zara-Chabby wrapped the carved eyes back into their cloth.
"You understand now," he said, "that honest eyes are not merciful in the ordinary sense. They don't console you out of laziness. They don't flatter you back to sleep. They never say you are enough when, quite plainly, you are not yet."
The maidens listened.
"They say instead: you are known. Therefore — choose."
He stepped into the center of the clearing.
"To be accepted is pleasant. To be seen is terrible. But it's in the terrible that greatness actually begins. A soul that is never once tested by another person's honest gaze stays half-asleep its whole life — and a half-asleep soul is very easily ruled by appetite, by vanity, by simple fear."
He looked toward the trees. "Most people prefer the fog of approval instead. They call it peace. They call it love. They call it kindness. Very often it is none of those things. It is only evasion, wearing excellent manners."
The maidens said nothing, each of them holding what she'd just heard the way you hold a flame — carefully, with real reverence, and a small, honest fear of eventually being burned by it.

Before they parted, Zara-Chabby led them one last time to the pool, and asked them to stand around its edge and look at their reflections again.
"Tell me now," he said. "What do you see?"
One by one, they answered.
"A face."
"A life."
"A question."
"A burden."
"A promise."
"A fear."
"At last," Zara-Chabby said. "Something true."
He raised his hand, and the water trembled beneath a falling leaf.
"The honest eye doesn't condemn simply to condemn," he said. "It sees a soul standing at the very edge of its own becoming, and refuses — out of something closer to love than cruelty — to let that soul lie back down into triviality."
He grew still.
"Be wary, then, of anyone who looks away from you too soon. They may be sparing your feelings today. But they are robbing you of your future."

The maidens left one by one, stepping into the dark with a new gravity none of them had carried into the clearing that evening. They didn't speak much on the way out. There was no longer any need to — the forest itself seemed to be holding the rest of the conversation now, passing it quietly between branch and water and root, the way it had been doing long before any of them arrived.
Only Talia lingered a moment longer.
"Will it always feel like this?" she asked.
"Like what?"
"Like being known is a wound."
Zara-Chabby looked out into the dark as if it were a country he had once lived in and never quite left.
"No," he said. "One day it becomes a strength instead. But first, it has to be a wound. Anything worth having passes through some kind of pain on its way to you, or it was never actually tested to begin with."
Talia nodded slowly — the nod of someone who had feared exactly this answer, and trusted it precisely because it hadn't tried to spare her.
She left. The clearing emptied.
Zara-Chabby stood alone beneath the trees. The forest had gone quiet again, but it was a different quiet than the one he'd walked into — no longer innocent. Watchful now, the way a room is watchful after something true has finally been said out loud in it.
He looked once more at the black pool, at the moon lying broken across its surface like a thought too large to survive being spoken, and said softly, to no one, to all of it:
"To be seen is to be called."
He paused.
"And to be called is to answer."
Then he turned and walked deeper into the forest, where the path narrowed, and the shadows, for once, were entirely honest.
Thus heard Zara-Chabby.
`,Tv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Ev({user:r,onBack:i,onSignOut:l,onNextChapter:h}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,onNextChapter:h,chapterText:vv,chapterTitle:"THE WEIGHT OF HONEST EYES",chapterNumber:4,bookLabel:"Book 2",chapterList:Tv})}const Sv=`The mountain had a way of making liars out of clocks. Up where the wind did not ask permission before entering a man's lungs, time stopped pretending to be a staircase and became, instead, a wound that simply kept reopening. Zara-Chabby learned this early, though later than he should have — which is the particular mistake made by men still hoping, against all evidence, that life might improve through kindness alone. He had climbed because he believed, the way men believe before disappointment finally matures into wisdom, that the highest things ought to be met by the highest feelings — that truth should arrive with a choir behind it, that greatness should announce itself with bells, that the correct path would somehow feel flattering beneath the feet, the way a red carpet flatters whoever is permitted to walk across it.
Instead he found rock. Exposure. Hunger. And a man standing exactly where a friend ought never to have stood — which is to say, standing precisely where he would prove most useful.
The man was called Sahel, though nothing that angry deserved to be called by name, and he was angry often, in the specific manner of a surgeon grown tired of a patient who keeps pretending not to notice his own infection. He was not a friend — and this, more than anything, was why Zara-Chabby came, eventually, to trust him completely. Friends, in the ordinary telling, are meant to support you. But support is a wonderfully elastic word. It can mean assistance. It can mean praise. It can mean the slow, well-intentioned softening of reality until it resembles, at last, a pillow. Sahel supported nothing except the plain possibility that Zara-Chabby might be wrong — and that possibility, held up to the light again and again without flinching, saved him from the common fate of men admired too early, who mistake the sound of applause for the feeling of altitude.
Sahel had turned resentment into a discipline so exact it had, by some private alchemy, become a form of devotion. He resented laziness. He resented vanity. He resented theatrical suffering, borrowed courage, counterfeit depth, and any sentence that began with I'm only trying to be realistic — which, in his long experience, meant the speaker had already chosen his own grave and was merely haggling, at this point, over the flowers.

The first time Zara-Chabby saw him, Sahel was blocking a narrow mountain pass with the expression of a man who held the entire range personally responsible for his mood that day. Beside him, half-hidden behind a boulder, sat a coil of worn rope and a satchel of tools too specific to belong to anyone but a man who climbed for a living rather than a hobby — pitons, a small hammer, a waterskin gone thin from years of refilling.
"Does this path lead higher?" Zara-Chabby asked.
Sahel looked at him the way you'd look at someone who had just asked whether fire could be persuaded, with enough patience, to turn cold. "Yes," he said. "But it isn't for the hopeful."
"What does that mean?"
"That hope is cheap," Sahel said, "and cheap is not the same thing as free."
"You say that like a man who's buried someone up here."
Something in Sahel's face didn't change so much as settle, the way a held breath settles once it's finally released. "Three," he said, and offered nothing further, and Zara-Chabby, wisely for once, did not ask.
He stepped aside — just enough to permit passage, not nearly enough to make the passing feel dignified. Zara-Chabby went by him with the offended bearing of a prince who has just learned, at the worst possible moment, that the road to his own coronation is inconveniently steep. Twenty steps on, he looked back. Sahel hadn't moved. Wasn't waving. Wasn't smiling the fraudulent, ingratiating smile that weak men perform when they want, badly, to be found indispensable.
He was only watching. The way a verdict watches, before it is finally read aloud.

Zara-Chabby would say, much later, that Sahel's true virtue had never been that he opposed him. It was that he opposed him without confusion. A confused enemy is only a nuisance. A clear one is an entire education. Sahel never mistook cruelty for strength, though softer men occasionally accused him of exactly that confusion, preferring comfort, as they always do, to accuracy. He never praised anything he hadn't personally tested. He had no patience for spiritual upholstery, no taste for moral lace, no tolerance whatsoever for men who wanted transformation in the abstract and called for tea the instant it actually began to sting.
He knew, with the flat certainty of someone who had tried the gentler alternative once and hated the result, that growth is never polite. Growth is a trespass. It breaks its way through the husk of who you used to be and leaves that old self standing on the roadside, complaining, like a clerk whose office has just been leveled to make room for a highway he will never personally get to drive on.
Zara-Chabby hated him, at first, for precisely the reasons he would later come to bless him. Sahel could take an idea and strip it to its bones without a single word of apology. Speak of destiny, and Sahel asked for evidence. Speak of purpose, and Sahel asked whose. Speak of suffering, and Sahel asked, flatly, whether it had been endured — or merely narrated for effect. He had the irritating habit of taking every noble claim in the room and setting it directly under a lamp, and most noble claims, it turns out, hate lamps. They much prefer candlelight, where they can look ancient, and therefore authoritative, without ever having to prove it. Sahel loved lamps precisely because he believed illumination was never an insult. It was hygiene.
He was not admired, in the ordinary village sense, because admiration there was reserved for men who could be praised without effort — and Sahel was all effort. He made everyone around him revise themselves whether they wanted to or not. No one, understandably, enjoys a mirror that refuses to offer a cosmetic interpretation.

Yet Zara-Chabby noticed, once his first fury had finally burned itself down to something quieter, that every one of Sahel's strikes left him more exact than before. A challenge from a friend, if it can even be called a challenge, usually arrives pre-wrapped in reassurance. A challenge from Sahel arrived naked. It did not ask to be liked. It only demanded to be answered — and there is a difference, small as a hairline crack and just as capable of splitting a stone, between being encouraged and being improved. A lullaby lets you sleep better. An alarm bell insists you wake up and go check, immediately, whether you've been sleeping beside a corpse.
They met again on the ridge above the valley, where the air ran thin enough to reveal cowardice by the sound alone. Zara-Chabby had arrived with a speech he hadn't delivered to anyone yet and was already, privately, quite proud of, because it contained several phrases he'd enjoyed hearing himself say aloud while walking. Sahel arrived partway through and listened with the expression of a man waiting, patiently, for the punchline of an overlong sermon.
Zara-Chabby spoke of courage. Of ascent. Of the need to become more than appetite, more than wound, more than crowd. He spoke well enough, in fact, to suspect it might be dangerous.
"If you despise the crowd so much," Sahel said, once he'd finished, "why do you still arrange your thoughts to be admired by it?"
"I don't."
"You do. If you didn't, you'd have spoken less elegantly. And far more honestly."
Zara-Chabby, who had come prepared to defeat criticism and had not prepared, even slightly, for accuracy, felt something in his chest go hot. Sahel only nodded at the anger, as if confirming a diagnosis.
"Good," he said. "That means something in the speech just struck bone."

That was always the shape of them. Zara-Chabby advanced; Sahel checked. Zara-Chabby generalized; Sahel particularized, relentlessly, until the generalization had nowhere left to hide. Zara-Chabby reached for grandeur; Sahel simply asked whether grandeur was only vanity, dressed up in a taller hat.
And yet it was Sahel — never the cheering assembly, never the warm crowded hall — who made Zara-Chabby dangerous in the right way. Ordinary friends circle a man's weaknesses the way you'd circle a sleeping child, careful never to wake it. Sahel kicked the bed, and asked, flatly, whether the child was in fact already dead. It was not tenderness. But it was mercy — and the world, Zara-Chabby came to understand, is thick with tender murderers and desperately short on merciful attackers. The tender murderer says: rest, rest, you've done enough, be gentle with yourself, don't push, don't strain, don't risk anything more than you already have. The merciful attacker says only: stand up — because if you stay exactly where you are, the life still moving in you will fossilize in place, and your own descendants will one day praise your caution at your funeral as though it had been a virtue, rather than what it actually was: a very long, very well-decorated hesitation.
This is why Sahel, in the end, knew Zara-Chabby more intimately than any of the men who called themselves his brothers. Intimacy is never measured by the closeness of two bodies standing in a room. It's measured by how far one person can go into another's self-deception without being thrown out for the trespass.

There was a season — Zara-Chabby rarely told this part, because it did him no credit at all — when he tried to teach Sahel's method to a group of younger climbers, and discovered, almost immediately, that he had learned the wrong half of it.
He gathered six of them at the base camp and told them, with real conviction, that he intended to make them dangerous in the right way. He questioned their claims. He asked for evidence when they spoke of destiny. He set their noble declarations, one after another, under the lamp, exactly as Sahel had done to him a hundred times.
By the end of the second week, four of them had quietly slipped back down the mountain, and the two who remained had stopped meeting his eyes when he spoke.
Sahel found him afterward, sitting alone with his hands wrapped around a cup of tea gone cold an hour earlier.
"You heard," Zara-Chabby said.
"Everyone heard."
"I did exactly what you do."
"No," Sahel said. "You did exactly what I say. You never once learned what I do, which is considerably harder, and which you clearly weren't paying attention to."
Zara-Chabby looked up. "Then tell me the difference."
"I have never once opposed a man I didn't intend to stay for," Sahel said. "You cut them and walked away to see if the cut had worked. I cut a man and then I stand there, in the wound, for as long as it takes — sometimes years — to make sure something actually grows back in the space I opened. You gave them my sentences. You didn't give them my presence. A blade with no hand still attached to it isn't discipline. It's just litter that happens to be sharp."
It was, Zara-Chabby would say later, the single most humiliating lesson of his life, and also the one he was most grateful, eventually, to have survived. He went back down to the two who remained, apologized to neither of them — Sahel would not have permitted an apology, which he considered its own kind of soft manipulation — but simply stayed. Through the worst of their doubt. Through the two more who nearly left. Until, a full season later, something in all four of the remaining climbers had genuinely hardened into shape, and he understood, at last, that opposition without endurance is only cruelty wearing opposition's clothes.

Sahel knew every one of Zara-Chabby's favorite disguises. He knew the trick by which weakness got dressed up as reflection. He knew that when Zara-Chabby feared failure most, his language grew grandest — a kind of verbal armor thrown over an entirely private trembling. He knew the old sleight of hand by which rejection got quietly rebranded as prophecy, since prophecy, unlike plain rejection, can at least be narrated with some dignity intact. Sahel broke that habit every single time it surfaced. He never once let nobility stand in for action. He never let pain become a decorative career. He refused, flatly, to let Zara-Chabby hide forever inside the idea of becoming.
He demanded the becoming itself — which is always less flattering, and very much more exhausting, than merely discussing it by firelight.

There was a winter in Madasara when the whole city announced, as cities periodically do, that it had entered a season of reflection, and therefore suspended, politely, all moral seriousness until further notice. The powerful explained, at length, that their failures were structural. The weak were taught that their weakness was, in fact, their identity, and therefore untouchable. The middle congratulated itself endlessly on holding opinions that were neither dangerous nor remotely useful to anyone.
At the exact center of that civic anesthesia stood Zara-Chabby — ten years younger then, and exactly one mistake older — addressing a hall full of eager listeners about the raw possibility of transformation. They loved him for language sharp enough to feel brave, but not yet sharp enough to actually cost them anything. He stood among them like a flame that had not yet discovered it was capable of burning the ceiling down.
Sahel sat in the back, as always, and did not applaud.
When Zara-Chabby finished, the room dissolved into gratitude — which is so often just applause wearing a conscience for the evening. Sahel stood instead, and asked the one question that quietly collapsed the entire performance.
"If you believe what you just said," he asked, "why do you still dress the thought in the exact respectability of people who would never actually follow it anywhere?"
The hall went cold. Zara-Chabby felt his own face tighten, the particular tightness of a man who suspects, correctly, that the only true sentence spoken all evening has just arrived uninvited. He answered with eloquence. Sahel answered with precision. Zara-Chabby said he was building bridges toward ordinary men. Sahel asked whether any bridge in history had ever been built by first pretending the river beneath it was small. Zara-Chabby said one had to meet people where they stood. Sahel agreed — but added that one need not remain there simply to be applauded for the visit. Zara-Chabby said this was unfair of him. Sahel said fairness was only the word cowards used whenever reality refused, once again, to flatter them on schedule.
The hall, which had adored the speech precisely as long as it stayed a portrait, now despised the conversation, because the conversation had become, without permission, a mirror.
And yet — walking home alone that night, through streets already forgetting the whole evening — Zara-Chabby felt a strange, unwelcome exhilaration rising in his chest. He had just been humiliated, cleanly, in public. It was, he understood with some discomfort, the closest thing to real instruction most men are ever offered in an entire lifetime.

Sahel's own life carried its private ruin, though Zara-Chabby only learned of it slowly, because the man who most effectively demands your honesty is very often the last to advertise his own wounds.
Sahel had once belonged, briefly, to the School of Praise — which is not, in truth, a school at all, but a warehouse for men who have been quietly, thoroughly inflated. He was adored there, for a time, because his words came out measured and his contempt stayed carefully hidden. Then a certain woman — whom he loved in the singular, clumsy way that men with no patience for their own hearts are still somehow capable of loving — told him, gently, that he was "soothing." She said it the way you'd say a blessing over someone's head.
It went into him like a splinter he couldn't immediately locate.
He discovered, much later, that soothing is simply the last stage before irrelevant. The people around him had preferred his gentleness precisely because his gentleness had never once forced any of them to change anything at all. For a while he became one of those polished men who carry their entire lives around like a clean serving tray — everything arranged perfectly, nothing on it actually nourishing anyone. Then, through some private violence of insight he never fully described to anyone, he saw the whole shape of what he'd built: a career made entirely out of being tolerable. Which is, when you set it down next to an actual human life, an almost insultingly small ambition. It is the mission statement of a chair. Not of a man.
From that ruin, Sahel came back sharper. Less forgivable. Far more useful.

When at last he died, or vanished, or simply became memory — depending on which version of the story you find least unbearable — Zara-Chabby said nothing at all for three days. On the fourth, he climbed alone to the exact pass where they had first met. The wind there was vicious. The sky hung empty in that particular way only sky can manage, having no obligation whatsoever to anyone's private mood.
He stood there a long time, remembering every occasion Sahel had made him furious — every moment he had wanted comfort and received, instead, correction. He understood now, finally, that every honest criticism had actually been a rung on a ladder. That every true enemy had been, in secret, an ally of the future self he hadn't yet become.
He understood, at last, that to be opposed is not always to be obstructed. Sometimes it is only to be invited — quietly, without ceremony — to prove you are larger than your first, easiest answer.
Thus clapped Zara-Chabby.
The sound of that inward applause did not fade the way ordinary applause does. It stayed, unsettling him with the harsher rhythm of recognition arriving late and refusing, absolutely, to leave. It was only then that he understood the final cruelty, and the final generosity, of what Sahel had actually given him. The man hadn't simply opposed him while he was alive. He had installed, permanently, an opposition inside him — a resistance that would now outlive the man who'd built it.

In the years that followed, Zara-Chabby did something he never announced and rarely spoke of, even to the closest of his own disciples. On the exact pass where Sahel had first stood blocking his way, he built a small stone shelter — not a shrine, he was careful to clarify to anyone who asked, since Sahel would have despised a shrine with his whole remaining spirit. Just four low walls and a roof, enough to keep a man dry through one bad night, with a single line carved into the lintel stone by his own hand:
The path is here. It is not for the hopeful.
He left no explanation beside it. He wanted whoever eventually found the words to have to earn their meaning the hard way — the only way Sahel had ever considered a meaning worth having.
Travelers still speak of finding it, decades on. None of them, as far as the story goes, has ever found it comfortable. All of them, without exception, remember it.
And that — Zara-Chabby would have said, had anyone thought to ask him directly — was precisely the point.

Thus clapped Zara-Chabby
`,kv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function _v({user:r,onBack:i,onSignOut:l,onNextChapter:h}){return E.jsx(Ot,{user:r,onBack:i,onSignOut:l,onNextChapter:h,nextChapterLabel:"THE TRIAL OF THE TRUE FRIEND",chapterText:Sv,chapterTitle:"THE ENEMY WHO ELEVATES",chapterNumber:6,bookLabel:"Book 2",chapterList:kv})}const Av=[{number:"Book 1",chapters:["ZARACHABBY'S DOWNGOING","OF THE THRESHOLD OF MADASARA","THE SERMON OF THE BROKEN LEDGER","OF THE TIGHTROPE WALKER'S SHADOW","THE TROUBLED WORKER","OF WOMEN","OF THE FESTIVAL OF THE LAST MEN"]},{number:"Book 2",chapters:["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"]},{number:"Book 3",chapters:["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"]}];function Ov({user:r,onSignOut:i}){const[l,h]=Ve.useState(null);return l===1?E.jsx(tv,{user:r,onBack:()=>h(null),onSignOut:i}):l===2?E.jsx(av,{user:r,onBack:()=>h(null),onSignOut:i}):l===3?E.jsx(ov,{user:r,onBack:()=>h(null),onSignOut:i}):l===4?E.jsx(lv,{user:r,onBack:()=>h(null),onSignOut:i}):l===5?E.jsx(hv,{user:r,onBack:()=>h(null),onSignOut:i}):l===6?E.jsx(cv,{user:r,onBack:()=>h(null),onSignOut:i}):l===7?E.jsx(fv,{user:r,onBack:()=>h(null),onSignOut:i}):l===10?E.jsx(gv,{user:r,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(11)}):l===11?E.jsx(wv,{user:r,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(12)}):l===12?E.jsx(Ev,{user:r,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(13)}):l===13?E.jsx(_v,{user:r,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(14)}):E.jsxs("main",{className:"book-home",children:[E.jsxs("nav",{className:"book-nav","aria-label":"Main navigation",children:[E.jsxs("a",{className:"book-logo",href:"#top",children:[E.jsx("span",{className:"book-logo-mark",children:"Z"}),E.jsx("span",{children:"Zara Chabby"})]}),E.jsxs("div",{className:"book-nav-actions",children:[E.jsx("a",{className:"book-nav-link",href:"#about",children:"The book"}),E.jsx("a",{className:"book-nav-link",href:"#chapters",children:"Chapters"}),E.jsx("a",{className:"book-nav-link",href:"#excerpt",children:"Excerpt"}),E.jsx("span",{className:"signed-in-label",children:r.email}),E.jsx("button",{type:"button",className:"text-button",onClick:i,children:"Sign out"})]})]}),E.jsxs("section",{className:"book-hero",id:"top",children:[E.jsxs("div",{className:"book-intro",children:[E.jsx("p",{className:"eyebrow",children:"A story by Dumbo Phatson"}),E.jsx("h1",{children:"Thus spoke Zara Chabby"}),E.jsx("p",{className:"book-lede",children:"A book for every one and no one."}),E.jsxs("div",{className:"book-actions",children:[E.jsxs("button",{type:"button",className:"primary-book-button",onClick:()=>h(1),children:["Enter the story ",E.jsx("span",{"aria-hidden":"true",children:"→"})]}),E.jsx("a",{className:"secondary-book-button",href:"#excerpt",children:"Read an excerpt"})]})]}),E.jsxs("div",{className:"book-cover","aria-label":"Book cover: Thus spoke Zara Chabby",children:[E.jsx("span",{className:"cover-kicker",children:"A novel"}),E.jsxs("div",{className:"cover-title",children:[E.jsx("strong",{children:"Thus spoke"}),E.jsx("strong",{children:"Zara Chabby"})]}),E.jsx("span",{className:"cover-author",children:"Dumbo Phatson"})]})]}),E.jsxs("section",{className:"book-about",id:"about",children:[E.jsx("div",{className:"section-index",children:"01"}),E.jsxs("div",{className:"book-about-copy",children:[E.jsx("p",{className:"eyebrow",children:"A foreword"}),E.jsx("h2",{children:"A strange, beautiful beginning."}),E.jsx("p",{className:"foreword-text",children:"This book was inspired by nothing beyond the strange, beautiful, and unforgiving thing we call life."}),E.jsx("p",{className:"foreword-author",children:"— Dumbo Phatson I"})]})]}),E.jsxs("section",{className:"book-chapters",id:"chapters",children:[E.jsx("div",{className:"section-index",children:"02"}),E.jsxs("div",{className:"chapters-content",children:[E.jsx("p",{className:"eyebrow",children:"The table of contents"}),E.jsx("h2",{children:"Three books. One descent into meaning."}),E.jsx("div",{className:"chapter-grid",children:Av.map(c=>E.jsxs("article",{className:"chapter-book",children:[E.jsxs("div",{className:"chapter-book-heading",children:[E.jsx("span",{children:c.number}),c.title&&E.jsx("h3",{children:c.title})]}),E.jsx("ol",{children:c.chapters.map((f,p)=>{const R=c.number==="Book 1"&&p<7,k={"THE FRONTAL STAB (A LESSON IN FRIENDSHIP)":10,"THE MARKET OF EMPTY PRAISE":11,"THE WEIGHT OF HONEST EYES":12,"THE ENEMY WHO ELEVATES":13},T=c.number==="Book 1"?p+1:k[f],H=!!T||R;return E.jsx("li",{className:H?"readable":"",children:E.jsx("button",{type:"button",disabled:!H,onClick:()=>T&&h(T),children:f})},f)})})]},c.number))})]})]}),E.jsxs("section",{className:"book-excerpt",id:"excerpt",children:[E.jsx("div",{className:"section-index",children:"03"}),E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"From the opening pages"}),E.jsx("blockquote",{children:"“There are names that follow you, and names that wait for you. Zara heard his in the distance and turned toward it.”"}),E.jsx("p",{className:"excerpt-note",children:"More of the story is waiting inside."})]})]}),E.jsxs("footer",{className:"site-footer",children:[E.jsx("span",{children:"Thus spoke Zara Chabby"}),E.jsx("span",{children:"Written by Dumbo Phatson"}),E.jsx("a",{href:"#top",children:"Back to top ↑"})]})]})}const zf=r=>{switch(r.code){case"auth/email-already-in-use":return"An account already exists with this email.";case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return"The email or password is incorrect.";case"auth/weak-password":return"Use a password with at least six characters.";case"auth/invalid-email":return"Enter a valid email address.";case"auth/too-many-requests":return"Too many attempts. Please wait a moment and try again.";default:return"Something went wrong. Please try again."}};function Nv(){const[r,i]=Ve.useState(!0),[l,h]=Ve.useState(""),[c,f]=Ve.useState(""),[p,R]=Ve.useState(""),[k,T]=Ve.useState(""),[H,j]=Ve.useState(!0),[V,te]=Ve.useState(null),[de,Oe]=Ve.useState(!0),[ue,Ne]=Ve.useState(!1),[pe,ve]=Ve.useState(""),[le,B]=Ve.useState("");Ve.useEffect(()=>Bp(Xa,W=>{te(W),Oe(!1)}),[]);const be=D=>{i(D),B(""),ve("")},Qe=async D=>{if(D.preventDefault(),B(""),ve(""),!r&&p!==k){B("Passwords do not match.");return}Ne(!0);try{if(await xp(Xa,H?om:Eh),r)await Ip(Xa,c,p);else{const W=await Dp(Xa,c,p);await Up(W.user,{displayName:l})}}catch(W){B(zf(W))}finally{Ne(!1)}},rt=async()=>{if(!c){B("Enter your email address first.");return}B(""),ve("");try{await Mp(Xa,c),ve("Password reset email sent. Check your inbox.")}catch(D){B(zf(D))}};return de?E.jsx("main",{className:"auth-card auth-loading",children:"Loading..."}):V?E.jsx(Ov,{user:V,onSignOut:()=>jp(Xa)}):E.jsx("main",{className:"auth-shell",children:E.jsxs("section",{className:"auth-card","aria-labelledby":"auth-title",children:[E.jsxs("div",{className:"auth-brand",children:[E.jsx("span",{className:"brand-mark",children:" 💀"}),E.jsx("span",{children:"Zara Chabby"})]}),E.jsxs("div",{className:"auth-heading",children:[E.jsx("p",{className:"eyebrow",children:"☁️☁️☁️"}),E.jsx("h1",{id:"auth-title",children:r?"Login":"Sign Up"}),E.jsx("p",{className:"auth-subtitle",children:r?"Sign in to continue your journey with us.":"Create your account and make it yours."})]}),E.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication mode",children:[E.jsx("button",{type:"button",className:r?"active":"",role:"tab","aria-selected":r,onClick:()=>be(!0),children:"Login"}),E.jsx("button",{type:"button",className:r?"":"active",role:"tab","aria-selected":!r,onClick:()=>be(!1),children:"Sign up"})]}),E.jsxs("form",{className:"auth-form",onSubmit:Qe,children:[!r&&E.jsxs("label",{children:["Full name",E.jsx("input",{type:"text",placeholder:"Your name",value:l,onChange:D=>h(D.target.value),required:!0})]}),E.jsxs("label",{children:["Email address",E.jsx("input",{type:"email",placeholder:"you@example.com",value:c,onChange:D=>f(D.target.value),required:!0})]}),E.jsxs("label",{children:["Password",E.jsx("input",{type:"password",placeholder:"Enter your password",value:p,onChange:D=>R(D.target.value),minLength:"6",required:!0})]}),!r&&E.jsxs("label",{children:["Confirm password",E.jsx("input",{type:"password",placeholder:"Repeat your password",value:k,onChange:D=>T(D.target.value),minLength:"6",required:!0})]}),r&&E.jsxs("div",{className:"form-meta",children:[E.jsxs("label",{className:"remember-me",children:[E.jsx("input",{type:"checkbox",checked:H,onChange:D=>j(D.target.checked)}),E.jsx("span",{children:"Remember me"})]}),E.jsx("button",{type:"button",onClick:rt,children:"Forgot password?"})]}),(le||pe)&&E.jsx("p",{className:le?"auth-message error":"auth-message",children:le||pe}),E.jsxs("button",{type:"submit",className:"submit-button",disabled:ue,children:[ue?"Please wait...":r?"Login":"Create account",E.jsx("span",{"aria-hidden":"true",children:"→"})]}),E.jsxs("p",{className:"auth-switch",children:[r?"Don't have an account?":"Already have an account?"," ",E.jsx("button",{type:"button",onClick:()=>be(!r),children:r?"Sign up":"Login"})]})]})]})})}const Rv=()=>E.jsx(Nv,{});Gg.createRoot(document.getElementById("root")).render(E.jsx(Ve.StrictMode,{children:E.jsx(Rv,{})}));
