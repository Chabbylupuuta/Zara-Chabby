(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))h(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function r(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function h(d){if(d.ep)return;d.ep=!0;const f=r(d);fetch(d.href,f)}})();var eh={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df;function Lg(){if(df)return Pi;df=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(h,d,f){var b=null;if(f!==void 0&&(b=""+f),d.key!==void 0&&(b=""+d.key),"key"in d){f={};for(var H in d)H!=="key"&&(f[H]=d[H])}else f=d;return d=f.ref,{$$typeof:l,type:h,key:b,ref:d!==void 0?d:null,props:f}}return Pi.Fragment=i,Pi.jsx=r,Pi.jsxs=r,Pi}var cf;function jg(){return cf||(cf=1,eh.exports=Lg()),eh.exports}var v=jg(),th={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff;function qg(){if(ff)return F;ff=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),b=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),U=Symbol.iterator;function V(m){return m===null||typeof m!="object"?null:(m=U&&m[U]||m["@@iterator"],typeof m=="function"?m:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ce=Object.assign,Oe={};function ue(m,I,q){this.props=m,this.context=I,this.refs=Oe,this.updater=q||te}ue.prototype.isReactComponent={},ue.prototype.setState=function(m,I){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,I,"setState")},ue.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function He(){}He.prototype=ue.prototype;function be(m,I,q){this.props=m,this.context=I,this.refs=Oe,this.updater=q||te}var ve=be.prototype=new He;ve.constructor=be,ce(ve,ue.prototype),ve.isPureReactComponent=!0;var re=Array.isArray,Y={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function Xe(m,I,q,L,M,ne){return q=ne.ref,{$$typeof:l,type:m,key:I,ref:q!==void 0?q:null,props:ne}}function ht(m,I){return Xe(m.type,I,void 0,void 0,void 0,m.props)}function D(m){return typeof m=="object"&&m!==null&&m.$$typeof===l}function K(m){var I={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(q){return I[q]})}var ut=/\/+/g;function Ut(m,I){return typeof m=="object"&&m!==null&&m.key!=null?K(""+m.key):I.toString(36)}function Ht(){}function Lt(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Ht,Ht):(m.status="pending",m.then(function(I){m.status==="pending"&&(m.status="fulfilled",m.value=I)},function(I){m.status==="pending"&&(m.status="rejected",m.reason=I)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Je(m,I,q,L,M){var ne=typeof m;(ne==="undefined"||ne==="boolean")&&(m=null);var Q=!1;if(m===null)Q=!0;else switch(ne){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(m.$$typeof){case l:case i:Q=!0;break;case R:return Q=m._init,Je(Q(m._payload),I,q,L,M)}}if(Q)return M=M(m),Q=L===""?"."+Ut(m,0):L,re(M)?(q="",Q!=null&&(q=Q.replace(ut,"$&/")+"/"),Je(M,I,q,"",function(Ne){return Ne})):M!=null&&(D(M)&&(M=ht(M,q+(M.key==null||m&&m.key===M.key?"":(""+M.key).replace(ut,"$&/")+"/")+Q)),I.push(M)),1;Q=0;var Fe=L===""?".":L+":";if(re(m))for(var se=0;se<m.length;se++)L=m[se],ne=Fe+Ut(L,se),Q+=Je(L,I,q,ne,M);else if(se=V(m),typeof se=="function")for(m=se.call(m),se=0;!(L=m.next()).done;)L=L.value,ne=Fe+Ut(L,se++),Q+=Je(L,I,q,ne,M);else if(ne==="object"){if(typeof m.then=="function")return Je(Lt(m),I,q,L,M);throw I=String(m),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Q}function C(m,I,q){if(m==null)return m;var L=[],M=0;return Je(m,L,"","",function(ne){return I.call(q,ne,M++)}),L}function X(m){if(m._status===-1){var I=m._result;I=I(),I.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q)},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q)}),m._status===-1&&(m._status=0,m._result=I)}if(m._status===1)return m._result.default;throw m._result}var Z=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function fe(){}return F.Children={map:C,forEach:function(m,I,q){C(m,function(){I.apply(this,arguments)},q)},count:function(m){var I=0;return C(m,function(){I++}),I},toArray:function(m){return C(m,function(I){return I})||[]},only:function(m){if(!D(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},F.Component=ue,F.Fragment=r,F.Profiler=d,F.PureComponent=be,F.StrictMode=h,F.Suspense=S,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,F.act=function(){throw Error("act(...) is not supported in production builds of React.")},F.cache=function(m){return function(){return m.apply(null,arguments)}},F.cloneElement=function(m,I,q){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var L=ce({},m.props),M=m.key,ne=void 0;if(I!=null)for(Q in I.ref!==void 0&&(ne=void 0),I.key!==void 0&&(M=""+I.key),I)!we.call(I,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&I.ref===void 0||(L[Q]=I[Q]);var Q=arguments.length-2;if(Q===1)L.children=q;else if(1<Q){for(var Fe=Array(Q),se=0;se<Q;se++)Fe[se]=arguments[se+2];L.children=Fe}return Xe(m.type,M,void 0,void 0,ne,L)},F.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:f,_context:m},m},F.createElement=function(m,I,q){var L,M={},ne=null;if(I!=null)for(L in I.key!==void 0&&(ne=""+I.key),I)we.call(I,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(M[L]=I[L]);var Q=arguments.length-2;if(Q===1)M.children=q;else if(1<Q){for(var Fe=Array(Q),se=0;se<Q;se++)Fe[se]=arguments[se+2];M.children=Fe}if(m&&m.defaultProps)for(L in Q=m.defaultProps,Q)M[L]===void 0&&(M[L]=Q[L]);return Xe(m,ne,void 0,void 0,null,M)},F.createRef=function(){return{current:null}},F.forwardRef=function(m){return{$$typeof:H,render:m}},F.isValidElement=D,F.lazy=function(m){return{$$typeof:R,_payload:{_status:-1,_result:m},_init:X}},F.memo=function(m,I){return{$$typeof:k,type:m,compare:I===void 0?null:I}},F.startTransition=function(m){var I=Y.T,q={};Y.T=q;try{var L=m(),M=Y.S;M!==null&&M(q,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(fe,Z)}catch(ne){Z(ne)}finally{Y.T=I}},F.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},F.use=function(m){return Y.H.use(m)},F.useActionState=function(m,I,q){return Y.H.useActionState(m,I,q)},F.useCallback=function(m,I){return Y.H.useCallback(m,I)},F.useContext=function(m){return Y.H.useContext(m)},F.useDebugValue=function(){},F.useDeferredValue=function(m,I){return Y.H.useDeferredValue(m,I)},F.useEffect=function(m,I){return Y.H.useEffect(m,I)},F.useId=function(){return Y.H.useId()},F.useImperativeHandle=function(m,I,q){return Y.H.useImperativeHandle(m,I,q)},F.useInsertionEffect=function(m,I){return Y.H.useInsertionEffect(m,I)},F.useLayoutEffect=function(m,I){return Y.H.useLayoutEffect(m,I)},F.useMemo=function(m,I){return Y.H.useMemo(m,I)},F.useOptimistic=function(m,I){return Y.H.useOptimistic(m,I)},F.useReducer=function(m,I,q){return Y.H.useReducer(m,I,q)},F.useRef=function(m){return Y.H.useRef(m)},F.useState=function(m){return Y.H.useState(m)},F.useSyncExternalStore=function(m,I,q){return Y.H.useSyncExternalStore(m,I,q)},F.useTransition=function(){return Y.H.useTransition()},F.version="19.0.0",F}var yf;function mh(){return yf||(yf=1,th.exports=qg()),th.exports}var Be=mh(),nh={exports:{}},eo={},ah={exports:{}},ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Zg(){return mf||(mf=1,function(l){function i(C,X){var Z=C.length;C.push(X);e:for(;0<Z;){var fe=Z-1>>>1,m=C[fe];if(0<d(m,X))C[fe]=X,C[Z]=m,Z=fe;else break e}}function r(C){return C.length===0?null:C[0]}function h(C){if(C.length===0)return null;var X=C[0],Z=C.pop();if(Z!==X){C[0]=Z;e:for(var fe=0,m=C.length,I=m>>>1;fe<I;){var q=2*(fe+1)-1,L=C[q],M=q+1,ne=C[M];if(0>d(L,Z))M<m&&0>d(ne,L)?(C[fe]=ne,C[M]=Z,fe=M):(C[fe]=L,C[q]=Z,fe=q);else if(M<m&&0>d(ne,Z))C[fe]=ne,C[M]=Z,fe=M;else break e}}return X}function d(C,X){var Z=C.sortIndex-X.sortIndex;return Z!==0?Z:C.id-X.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var b=Date,H=b.now();l.unstable_now=function(){return b.now()-H}}var S=[],k=[],R=1,U=null,V=3,te=!1,ce=!1,Oe=!1,ue=typeof setTimeout=="function"?setTimeout:null,He=typeof clearTimeout=="function"?clearTimeout:null,be=typeof setImmediate<"u"?setImmediate:null;function ve(C){for(var X=r(k);X!==null;){if(X.callback===null)h(k);else if(X.startTime<=C)h(k),X.sortIndex=X.expirationTime,i(S,X);else break;X=r(k)}}function re(C){if(Oe=!1,ve(C),!ce)if(r(S)!==null)ce=!0,Lt();else{var X=r(k);X!==null&&Je(re,X.startTime-C)}}var Y=!1,we=-1,Xe=5,ht=-1;function D(){return!(l.unstable_now()-ht<Xe)}function K(){if(Y){var C=l.unstable_now();ht=C;var X=!0;try{e:{ce=!1,Oe&&(Oe=!1,He(we),we=-1),te=!0;var Z=V;try{t:{for(ve(C),U=r(S);U!==null&&!(U.expirationTime>C&&D());){var fe=U.callback;if(typeof fe=="function"){U.callback=null,V=U.priorityLevel;var m=fe(U.expirationTime<=C);if(C=l.unstable_now(),typeof m=="function"){U.callback=m,ve(C),X=!0;break t}U===r(S)&&h(S),ve(C)}else h(S);U=r(S)}if(U!==null)X=!0;else{var I=r(k);I!==null&&Je(re,I.startTime-C),X=!1}}break e}finally{U=null,V=Z,te=!1}X=void 0}}finally{X?ut():Y=!1}}}var ut;if(typeof be=="function")ut=function(){be(K)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Ht=Ut.port2;Ut.port1.onmessage=K,ut=function(){Ht.postMessage(null)}}else ut=function(){ue(K,0)};function Lt(){Y||(Y=!0,ut())}function Je(C,X){we=ue(function(){C(l.unstable_now())},X)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(C){C.callback=null},l.unstable_continueExecution=function(){ce||te||(ce=!0,Lt())},l.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xe=0<C?Math.floor(1e3/C):5},l.unstable_getCurrentPriorityLevel=function(){return V},l.unstable_getFirstCallbackNode=function(){return r(S)},l.unstable_next=function(C){switch(V){case 1:case 2:case 3:var X=3;break;default:X=V}var Z=V;V=X;try{return C()}finally{V=Z}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(C,X){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var Z=V;V=C;try{return X()}finally{V=Z}},l.unstable_scheduleCallback=function(C,X,Z){var fe=l.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,C){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=Z+m,C={id:R++,callback:X,priorityLevel:C,startTime:Z,expirationTime:m,sortIndex:-1},Z>fe?(C.sortIndex=Z,i(k,C),r(S)===null&&C===r(k)&&(Oe?(He(we),we=-1):Oe=!0,Je(re,Z-fe))):(C.sortIndex=m,i(S,C),ce||te||(ce=!0,Lt())),C},l.unstable_shouldYield=D,l.unstable_wrapCallback=function(C){var X=V;return function(){var Z=V;V=X;try{return C.apply(this,arguments)}finally{V=Z}}}}(ih)),ih}var gf;function Gg(){return gf||(gf=1,ah.exports=Zg()),ah.exports}var oh={exports:{}},Ve={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function Vg(){if(wf)return Ve;wf=1;var l=mh();function i(S){var k="https://react.dev/errors/"+S;if(1<arguments.length){k+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)k+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+S+"; visit "+k+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var h={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(S,k,R){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:U==null?null:""+U,children:S,containerInfo:k,implementation:R}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function H(S,k){if(S==="font")return"";if(typeof k=="string")return k==="use-credentials"?k:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Ve.createPortal=function(S,k){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k||k.nodeType!==1&&k.nodeType!==9&&k.nodeType!==11)throw Error(i(299));return f(S,k,null,R)},Ve.flushSync=function(S){var k=b.T,R=h.p;try{if(b.T=null,h.p=2,S)return S()}finally{b.T=k,h.p=R,h.d.f()}},Ve.preconnect=function(S,k){typeof S=="string"&&(k?(k=k.crossOrigin,k=typeof k=="string"?k==="use-credentials"?k:"":void 0):k=null,h.d.C(S,k))},Ve.prefetchDNS=function(S){typeof S=="string"&&h.d.D(S)},Ve.preinit=function(S,k){if(typeof S=="string"&&k&&typeof k.as=="string"){var R=k.as,U=H(R,k.crossOrigin),V=typeof k.integrity=="string"?k.integrity:void 0,te=typeof k.fetchPriority=="string"?k.fetchPriority:void 0;R==="style"?h.d.S(S,typeof k.precedence=="string"?k.precedence:void 0,{crossOrigin:U,integrity:V,fetchPriority:te}):R==="script"&&h.d.X(S,{crossOrigin:U,integrity:V,fetchPriority:te,nonce:typeof k.nonce=="string"?k.nonce:void 0})}},Ve.preinitModule=function(S,k){if(typeof S=="string")if(typeof k=="object"&&k!==null){if(k.as==null||k.as==="script"){var R=H(k.as,k.crossOrigin);h.d.M(S,{crossOrigin:R,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0})}}else k==null&&h.d.M(S)},Ve.preload=function(S,k){if(typeof S=="string"&&typeof k=="object"&&k!==null&&typeof k.as=="string"){var R=k.as,U=H(R,k.crossOrigin);h.d.L(S,R,{crossOrigin:U,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0,type:typeof k.type=="string"?k.type:void 0,fetchPriority:typeof k.fetchPriority=="string"?k.fetchPriority:void 0,referrerPolicy:typeof k.referrerPolicy=="string"?k.referrerPolicy:void 0,imageSrcSet:typeof k.imageSrcSet=="string"?k.imageSrcSet:void 0,imageSizes:typeof k.imageSizes=="string"?k.imageSizes:void 0,media:typeof k.media=="string"?k.media:void 0})}},Ve.preloadModule=function(S,k){if(typeof S=="string")if(k){var R=H(k.as,k.crossOrigin);h.d.m(S,{as:typeof k.as=="string"&&k.as!=="script"?k.as:void 0,crossOrigin:R,integrity:typeof k.integrity=="string"?k.integrity:void 0})}else h.d.m(S)},Ve.requestFormReset=function(S){h.d.r(S)},Ve.unstable_batchedUpdates=function(S,k){return S(k)},Ve.useFormState=function(S,k,R){return b.H.useFormState(S,k,R)},Ve.useFormStatus=function(){return b.H.useHostTransitionStatus()},Ve.version="19.0.0",Ve}var bf;function Wg(){if(bf)return oh.exports;bf=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),oh.exports=Vg(),oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function Xg(){if(pf)return eo;pf=1;var l=Gg(),i=mh(),r=Wg();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var f=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),re=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case H:return"Portal";case R:return"Profiler";case k:return"StrictMode";case Oe:return"Suspense";case ue:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case te:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return t=e.displayName||null,t!==null?t:ht(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return ht(e(t))}catch{}}return null}var D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=Object.assign,ut,Ut;function Ht(e){if(ut===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ut=t&&t[1]||"",Ut=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+e+Ut}var Lt=!1;function Je(e,t){if(!e||Lt)return"";Lt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(A){var E=A}Reflect.construct(e,[],N)}else{try{N.call()}catch(A){E=A}e.call(N.prototype)}}else{try{throw Error()}catch(A){E=A}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(A){if(A&&E&&typeof A.stack=="string")return[A.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),u=s[0],c=s[1];if(u&&c){var y=u.split(`
`),w=c.split(`
`);for(o=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;if(a===y.length||o===w.length)for(a=y.length-1,o=w.length-1;1<=a&&0<=o&&y[a]!==w[o];)o--;for(;1<=a&&0<=o;a--,o--)if(y[a]!==w[o]){if(a!==1||o!==1)do if(a--,o--,0>o||y[a]!==w[o]){var _=`
`+y[a].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=a&&0<=o);break}}}finally{Lt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ht(n):""}function C(e){switch(e.tag){case 26:case 27:case 5:return Ht(e.type);case 16:return Ht("Lazy");case 13:return Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return e=Je(e.type,!1),e;case 11:return e=Je(e.type.render,!1),e;case 1:return e=Je(e.type,!0),e;default:return""}}function X(e){try{var t="";do t+=C(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Z(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(Z(e)!==e)throw Error(h(188))}function I(e){var t=e.alternate;if(!t){if(t=Z(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return m(o),e;if(s===a)return m(o),t;s=s.sibling}throw Error(h(188))}if(n.return!==a.return)n=o,a=s;else{for(var u=!1,c=o.child;c;){if(c===n){u=!0,n=o,a=s;break}if(c===a){u=!0,a=o,n=s;break}c=c.sibling}if(!u){for(c=s.child;c;){if(c===n){u=!0,n=s,a=o;break}if(c===a){u=!0,a=s,n=o;break}c=c.sibling}if(!u)throw Error(h(189))}}if(n.alternate!==a)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=q(e),t!==null)return t;e=e.sibling}return null}var L=Array.isArray,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Q=[],Fe=-1;function se(e){return{current:e}}function Ne(e){0>Fe||(e.current=Q[Fe],Q[Fe]=null,Fe--)}function pe(e,t){Fe++,Q[Fe]=e.current,e.current=t}var Nt=se(null),ni=se(null),ln=se(null),yo=se(null);function mo(e,t){switch(pe(ln,t),pe(ni,e),pe(Nt,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Uc(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Uc(e),t=Lc(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ne(Nt),pe(Nt,t)}function ua(){Ne(Nt),Ne(ni),Ne(ln)}function Vs(e){e.memoizedState!==null&&pe(yo,e);var t=Nt.current,n=Lc(t,e.type);t!==n&&(pe(ni,e),pe(Nt,n))}function go(e){ni.current===e&&(Ne(Nt),Ne(ni)),yo.current===e&&(Ne(yo),Fi._currentValue=ne)}var Ws=Object.prototype.hasOwnProperty,Xs=l.unstable_scheduleCallback,Fs=l.unstable_cancelCallback,by=l.unstable_shouldYield,py=l.unstable_requestPaint,It=l.unstable_now,vy=l.unstable_getCurrentPriorityLevel,Hh=l.unstable_ImmediatePriority,Nh=l.unstable_UserBlockingPriority,wo=l.unstable_NormalPriority,Ty=l.unstable_LowPriority,Ih=l.unstable_IdlePriority,ky=l.log,Ey=l.unstable_setDisableYieldValue,ai=null,nt=null;function Sy(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}function hn(e){if(typeof ky=="function"&&Ey(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(ai,e)}catch{}}var at=Math.clz32?Math.clz32:Oy,Ay=Math.log,_y=Math.LN2;function Oy(e){return e>>>=0,e===0?32:31-(Ay(e)/_y|0)|0}var bo=128,po=4194304;function zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes,u=e.warmLanes;e=e.finishedLanes!==0;var c=n&134217727;return c!==0?(n=c&~o,n!==0?a=zn(n):(s&=c,s!==0?a=zn(s):e||(u=c&~u,u!==0&&(a=zn(u))))):(c=n&~o,c!==0?a=zn(c):s!==0?a=zn(s):e||(u=n&~u,u!==0&&(a=zn(u)))),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,u=t&-t,o>=u||o===32&&(u&4194176)!==0)?t:a}function ii(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hy(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rh(){var e=bo;return bo<<=1,(bo&4194176)===0&&(bo=128),e}function Ch(){var e=po;return po<<=1,(po&62914560)===0&&(po=4194304),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ny(e,t,n,a,o,s){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,y=e.expirationTimes,w=e.hiddenUpdates;for(n=u&~n;0<n;){var _=31-at(n),N=1<<_;c[_]=0,y[_]=-1;var E=w[_];if(E!==null)for(w[_]=null,_=0;_<E.length;_++){var A=E[_];A!==null&&(A.lane&=-536870913)}n&=~N}a!==0&&Dh(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(u&~t))}function Dh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-at(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function Mh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-at(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Bh(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xh(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:of(e.type))}function Iy(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var un=Math.random().toString(36).slice(2),Ze="__reactFiber$"+un,$e="__reactProps$"+un,da="__reactContainer$"+un,Qs="__reactEvents$"+un,Ry="__reactListeners$"+un,Cy="__reactHandles$"+un,zh="__reactResources$"+un,si="__reactMarker$"+un;function Js(e){delete e[Ze],delete e[$e],delete e[Qs],delete e[Ry],delete e[Cy]}function Yn(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[da]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zc(e);e!==null;){if(n=e[Ze])return n;e=Zc(e)}return t}e=n,n=e.parentNode}return null}function ca(e){if(e=e[Ze]||e[da]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ri(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function fa(e){var t=e[zh];return t||(t=e[zh]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function xe(e){e[si]=!0}var Yh=new Set,Uh={};function Un(e,t){ya(e,t),ya(e+"Capture",t)}function ya(e,t){for(Uh[e]=t,e=0;e<t.length;e++)Yh.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lh={},jh={};function My(e){return Ws.call(jh,e)?!0:Ws.call(Lh,e)?!1:Dy.test(e)?jh[e]=!0:(Lh[e]=!0,!1)}function To(e,t,n){if(My(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ko(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function qt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function By(e){var t=qh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){a=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=By(e))}function Zh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=qh(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xy=/[\n"\\]/g;function ct(e){return e.replace(xy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $s(e,t,n,a,o,s,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Ps(e,u,dt(t)):n!=null?Ps(e,u,dt(n)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+dt(c):e.removeAttribute("name")}function Gh(e,t,n,a,o,s,u,c){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+dt(n):"",t=t!=null?""+dt(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function Ps(e,t,n){t==="number"&&So(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ma(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vh(e,t,n){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+dt(n):""}function Wh(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(h(92));if(L(a)){if(1<a.length)throw Error(h(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=dt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xh(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||zy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Fh(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Xh(e,o,a)}else for(var s in t)t.hasOwnProperty(s)&&Xh(e,s,t[s])}function er(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ao(e){return Uy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tr=null;function nr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,ba=null;function Kh(e){var t=ca(e);if(t&&(e=t.stateNode)){var n=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if($s(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[$e]||null;if(!o)throw Error(h(90));$s(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Zh(a)}break e;case"textarea":Vh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}}}var ar=!1;function Qh(e,t,n){if(ar)return e(t,n);ar=!0;try{var a=e(t);return a}finally{if(ar=!1,(wa!==null||ba!==null)&&(ls(),wa&&(t=wa,e=ba,ba=wa=null,Kh(t),e)))for(t=0;t<e.length;t++)Kh(e[t])}}function li(e,t){var n=e.stateNode;if(n===null)return null;var a=n[$e]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var ir=!1;if(jt)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){ir=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{ir=!1}var dn=null,or=null,_o=null;function Jh(){if(_o)return _o;var e,t=or,n=t.length,a,o="value"in dn?dn.value:dn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===o[s-a];a++);return _o=o.slice(e,1<a?1-a:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ho(){return!0}function $h(){return!1}function Pe(e){function t(n,a,o,s,u){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:$h,this.isPropagationStopped=$h,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Pe(Ln),ui=K({},Ln,{view:0,detail:0}),Ly=Pe(ui),sr,rr,di,Io=K({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==di&&(di&&e.type==="mousemove"?(sr=e.screenX-di.screenX,rr=e.screenY-di.screenY):rr=sr=0,di=e),sr)},movementY:function(e){return"movementY"in e?e.movementY:rr}}),Ph=Pe(Io),jy=K({},Io,{dataTransfer:0}),qy=Pe(jy),Zy=K({},ui,{relatedTarget:0}),lr=Pe(Zy),Gy=K({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=Pe(Gy),Wy=K({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xy=Pe(Wy),Fy=K({},Ln,{data:0}),eu=Pe(Fy),Ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jy[e])?!!t[e]:!1}function hr(){return $y}var Py=K({},ui,{key:function(e){if(e.key){var t=Ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),em=Pe(Py),tm=K({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Pe(tm),nm=K({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),am=Pe(nm),im=K({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=Pe(im),sm=K({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rm=Pe(sm),lm=K({},Ln,{newState:0,oldState:0}),hm=Pe(lm),um=[9,13,27,32],ur=jt&&"CompositionEvent"in window,ci=null;jt&&"documentMode"in document&&(ci=document.documentMode);var dm=jt&&"TextEvent"in window&&!ci,nu=jt&&(!ur||ci&&8<ci&&11>=ci),au=" ",iu=!1;function ou(e,t){switch(e){case"keyup":return um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pa=!1;function cm(e,t){switch(e){case"compositionend":return su(t);case"keypress":return t.which!==32?null:(iu=!0,au);case"textInput":return e=t.data,e===au&&iu?null:e;default:return null}}function fm(e,t){if(pa)return e==="compositionend"||!ur&&ou(e,t)?(e=Jh(),_o=or=dn=null,pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nu&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function lu(e,t,n,a){wa?ba?ba.push(a):ba=[a]:wa=a,t=fs(t,"onChange"),0<t.length&&(n=new No("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var fi=null,yi=null;function mm(e){Mc(e,0)}function Ro(e){var t=ri(e);if(Zh(t))return e}function hu(e,t){if(e==="change")return t}var uu=!1;if(jt){var dr;if(jt){var cr="oninput"in document;if(!cr){var du=document.createElement("div");du.setAttribute("oninput","return;"),cr=typeof du.oninput=="function"}dr=cr}else dr=!1;uu=dr&&(!document.documentMode||9<document.documentMode)}function cu(){fi&&(fi.detachEvent("onpropertychange",fu),yi=fi=null)}function fu(e){if(e.propertyName==="value"&&Ro(yi)){var t=[];lu(t,yi,e,nr(e)),Qh(mm,t)}}function gm(e,t,n){e==="focusin"?(cu(),fi=t,yi=n,fi.attachEvent("onpropertychange",fu)):e==="focusout"&&cu()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(yi)}function bm(e,t){if(e==="click")return Ro(t)}function pm(e,t){if(e==="input"||e==="change")return Ro(t)}function vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:vm;function mi(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Ws.call(t,o)||!it(e[o],t[o]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mu(e,t){var n=yu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yu(n)}}function gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=So(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tm(e,t){var n=wu(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gu(t.ownerDocument.documentElement,t)){if(a!==null&&fr(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=t.textContent.length,s=Math.min(a.start,o);a=a.end===void 0?s:Math.min(a.end,o),!n.extend&&s>a&&(o=a,a=s,s=o),o=mu(t,s);var u=mu(t,a);o&&u&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==u.node||n.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),s>a?(n.addRange(e),n.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var km=jt&&"documentMode"in document&&11>=document.documentMode,va=null,yr=null,gi=null,mr=!1;function bu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mr||va==null||va!==So(a)||(a=va,"selectionStart"in a&&fr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),gi&&mi(gi,a)||(gi=a,a=fs(yr,"onSelect"),0<a.length&&(t=new No("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function jn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ta={animationend:jn("Animation","AnimationEnd"),animationiteration:jn("Animation","AnimationIteration"),animationstart:jn("Animation","AnimationStart"),transitionrun:jn("Transition","TransitionRun"),transitionstart:jn("Transition","TransitionStart"),transitioncancel:jn("Transition","TransitionCancel"),transitionend:jn("Transition","TransitionEnd")},gr={},pu={};jt&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function qn(e){if(gr[e])return gr[e];if(!Ta[e])return e;var t=Ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pu)return gr[e]=t[n];return e}var vu=qn("animationend"),Tu=qn("animationiteration"),ku=qn("animationstart"),Em=qn("transitionrun"),Sm=qn("transitionstart"),Am=qn("transitioncancel"),Eu=qn("transitionend"),Su=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Et(e,t){Su.set(e,t),Un(t,[e])}var ft=[],ka=0,wr=0;function Co(){for(var e=ka,t=wr=ka=0;t<e;){var n=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var o=ft[t];ft[t++]=null;var s=ft[t];if(ft[t++]=null,a!==null&&o!==null){var u=a.pending;u===null?o.next=o:(o.next=u.next,u.next=o),a.pending=o}s!==0&&_u(n,o,s)}}function Do(e,t,n,a){ft[ka++]=e,ft[ka++]=t,ft[ka++]=n,ft[ka++]=a,wr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function br(e,t,n,a){return Do(e,t,n,a),Mo(e)}function cn(e,t){return Do(e,null,null,t),Mo(e)}function _u(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;o&&t!==null&&e.tag===3&&(s=e.stateNode,o=31-at(n),s=s.hiddenUpdates,e=s[o],e===null?s[o]=[t]:e.push(t),t.lane=n|536870912)}function Mo(e){if(50<ji)throw ji=0,Sl=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ea={},Ou=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var n=Ou.get(e);return n!==void 0?n:(t={value:e,source:t,stack:X(t)},Ou.set(e,t),t)}return{value:e,source:t,stack:X(t)}}var Sa=[],Aa=0,Bo=null,xo=0,mt=[],gt=0,Zn=null,Zt=1,Gt="";function Gn(e,t){Sa[Aa++]=xo,Sa[Aa++]=Bo,Bo=e,xo=t}function Hu(e,t,n){mt[gt++]=Zt,mt[gt++]=Gt,mt[gt++]=Zn,Zn=e;var a=Zt;e=Gt;var o=32-at(a)-1;a&=~(1<<o),n+=1;var s=32-at(t)+o;if(30<s){var u=o-o%5;s=(a&(1<<u)-1).toString(32),a>>=u,o-=u,Zt=1<<32-at(t)+o|n<<o|a,Gt=s+e}else Zt=1<<s|n<<o|a,Gt=e}function pr(e){e.return!==null&&(Gn(e,1),Hu(e,1,0))}function vr(e){for(;e===Bo;)Bo=Sa[--Aa],Sa[Aa]=null,xo=Sa[--Aa],Sa[Aa]=null;for(;e===Zn;)Zn=mt[--gt],mt[gt]=null,Gt=mt[--gt],mt[gt]=null,Zt=mt[--gt],mt[gt]=null}var Ke=null,Le=null,ie=!1,St=null,Rt=!1,Tr=Error(h(519));function Vn(e){var t=Error(h(418,""));throw pi(yt(t,e)),Tr}function Nu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ze]=e,t[$e]=a,n){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(n=0;n<Zi.length;n++)ee(Zi[n],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":ee("invalid",t),Gh(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Eo(t);break;case"select":ee("invalid",t);break;case"textarea":ee("invalid",t),Wh(t,a.value,a.defaultValue,a.children),Eo(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Yc(t.textContent,n)?(a.popover!=null&&(ee("beforetoggle",t),ee("toggle",t)),a.onScroll!=null&&ee("scroll",t),a.onScrollEnd!=null&&ee("scrollend",t),a.onClick!=null&&(t.onclick=ys),t=!0):t=!1,t||Vn(e)}function Iu(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 3:case 27:Rt=!0;return;case 5:case 13:Rt=!1;return;default:Ke=Ke.return}}function wi(e){if(e!==Ke)return!1;if(!ie)return Iu(e),ie=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||jl(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&Le&&Vn(e),Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Le=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Le=null}}else Le=Ke?_t(e.stateNode.nextSibling):null;return!0}function bi(){Le=Ke=null,ie=!1}function pi(e){St===null?St=[e]:St.push(e)}var vi=Error(h(460)),Ru=Error(h(474)),kr={then:function(){}};function Cu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zo(){}function Du(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zo,zo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===vi?Error(h(483)):e;default:if(typeof t.status=="string")t.then(zo,zo);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===vi?Error(h(483)):e}throw Ti=t,vi}}var Ti=null;function Mu(){if(Ti===null)throw Error(h(459));var e=Ti;return Ti=null,e}var _a=null,ki=0;function Yo(e){var t=ki;return ki+=1,_a===null&&(_a=[]),Du(_a,e,t)}function Ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Uo(e,t){throw t.$$typeof===f?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bu(e){var t=e._init;return t(e._payload)}function xu(e){function t(p,g){if(e){var T=p.deletions;T===null?(p.deletions=[g],p.flags|=16):T.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function a(p){for(var g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(p,g){return p=Sn(p,g),p.index=0,p.sibling=null,p}function s(p,g,T){return p.index=T,e?(T=p.alternate,T!==null?(T=T.index,T<g?(p.flags|=33554434,g):T):(p.flags|=33554434,g)):(p.flags|=1048576,g)}function u(p){return e&&p.alternate===null&&(p.flags|=33554434),p}function c(p,g,T,O){return g===null||g.tag!==6?(g=gl(T,p.mode,O),g.return=p,g):(g=o(g,T),g.return=p,g)}function y(p,g,T,O){var B=T.type;return B===S?_(p,g,T.props.children,O,T.key):g!==null&&(g.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===be&&Bu(B)===g.type)?(g=o(g,T.props),Ei(g,T),g.return=p,g):(g=as(T.type,T.key,T.props,null,p.mode,O),Ei(g,T),g.return=p,g)}function w(p,g,T,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==T.containerInfo||g.stateNode.implementation!==T.implementation?(g=wl(T,p.mode,O),g.return=p,g):(g=o(g,T.children||[]),g.return=p,g)}function _(p,g,T,O,B){return g===null||g.tag!==7?(g=ta(T,p.mode,O,B),g.return=p,g):(g=o(g,T),g.return=p,g)}function N(p,g,T){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=gl(""+g,p.mode,T),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case b:return T=as(g.type,g.key,g.props,null,p.mode,T),Ei(T,g),T.return=p,T;case H:return g=wl(g,p.mode,T),g.return=p,g;case be:var O=g._init;return g=O(g._payload),N(p,g,T)}if(L(g)||we(g))return g=ta(g,p.mode,T,null),g.return=p,g;if(typeof g.then=="function")return N(p,Yo(g),T);if(g.$$typeof===te)return N(p,es(p,g),T);Uo(p,g)}return null}function E(p,g,T,O){var B=g!==null?g.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return B!==null?null:c(p,g,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case b:return T.key===B?y(p,g,T,O):null;case H:return T.key===B?w(p,g,T,O):null;case be:return B=T._init,T=B(T._payload),E(p,g,T,O)}if(L(T)||we(T))return B!==null?null:_(p,g,T,O,null);if(typeof T.then=="function")return E(p,g,Yo(T),O);if(T.$$typeof===te)return E(p,g,es(p,T),O);Uo(p,T)}return null}function A(p,g,T,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return p=p.get(T)||null,c(g,p,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case b:return p=p.get(O.key===null?T:O.key)||null,y(g,p,O,B);case H:return p=p.get(O.key===null?T:O.key)||null,w(g,p,O,B);case be:var $=O._init;return O=$(O._payload),A(p,g,T,O,B)}if(L(O)||we(O))return p=p.get(T)||null,_(g,p,O,B,null);if(typeof O.then=="function")return A(p,g,T,Yo(O),B);if(O.$$typeof===te)return A(p,g,T,es(g,O),B);Uo(g,O)}return null}function x(p,g,T,O){for(var B=null,$=null,z=g,j=g=0,Ue=null;z!==null&&j<T.length;j++){z.index>j?(Ue=z,z=null):Ue=z.sibling;var oe=E(p,z,T[j],O);if(oe===null){z===null&&(z=Ue);break}e&&z&&oe.alternate===null&&t(p,z),g=s(oe,g,j),$===null?B=oe:$.sibling=oe,$=oe,z=Ue}if(j===T.length)return n(p,z),ie&&Gn(p,j),B;if(z===null){for(;j<T.length;j++)z=N(p,T[j],O),z!==null&&(g=s(z,g,j),$===null?B=z:$.sibling=z,$=z);return ie&&Gn(p,j),B}for(z=a(z);j<T.length;j++)Ue=A(z,p,j,T[j],O),Ue!==null&&(e&&Ue.alternate!==null&&z.delete(Ue.key===null?j:Ue.key),g=s(Ue,g,j),$===null?B=Ue:$.sibling=Ue,$=Ue);return e&&z.forEach(function(Rn){return t(p,Rn)}),ie&&Gn(p,j),B}function W(p,g,T,O){if(T==null)throw Error(h(151));for(var B=null,$=null,z=g,j=g=0,Ue=null,oe=T.next();z!==null&&!oe.done;j++,oe=T.next()){z.index>j?(Ue=z,z=null):Ue=z.sibling;var Rn=E(p,z,oe.value,O);if(Rn===null){z===null&&(z=Ue);break}e&&z&&Rn.alternate===null&&t(p,z),g=s(Rn,g,j),$===null?B=Rn:$.sibling=Rn,$=Rn,z=Ue}if(oe.done)return n(p,z),ie&&Gn(p,j),B;if(z===null){for(;!oe.done;j++,oe=T.next())oe=N(p,oe.value,O),oe!==null&&(g=s(oe,g,j),$===null?B=oe:$.sibling=oe,$=oe);return ie&&Gn(p,j),B}for(z=a(z);!oe.done;j++,oe=T.next())oe=A(z,p,j,oe.value,O),oe!==null&&(e&&oe.alternate!==null&&z.delete(oe.key===null?j:oe.key),g=s(oe,g,j),$===null?B=oe:$.sibling=oe,$=oe);return e&&z.forEach(function(Ug){return t(p,Ug)}),ie&&Gn(p,j),B}function Ae(p,g,T,O){if(typeof T=="object"&&T!==null&&T.type===S&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case b:e:{for(var B=T.key;g!==null;){if(g.key===B){if(B=T.type,B===S){if(g.tag===7){n(p,g.sibling),O=o(g,T.props.children),O.return=p,p=O;break e}}else if(g.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===be&&Bu(B)===g.type){n(p,g.sibling),O=o(g,T.props),Ei(O,T),O.return=p,p=O;break e}n(p,g);break}else t(p,g);g=g.sibling}T.type===S?(O=ta(T.props.children,p.mode,O,T.key),O.return=p,p=O):(O=as(T.type,T.key,T.props,null,p.mode,O),Ei(O,T),O.return=p,p=O)}return u(p);case H:e:{for(B=T.key;g!==null;){if(g.key===B)if(g.tag===4&&g.stateNode.containerInfo===T.containerInfo&&g.stateNode.implementation===T.implementation){n(p,g.sibling),O=o(g,T.children||[]),O.return=p,p=O;break e}else{n(p,g);break}else t(p,g);g=g.sibling}O=wl(T,p.mode,O),O.return=p,p=O}return u(p);case be:return B=T._init,T=B(T._payload),Ae(p,g,T,O)}if(L(T))return x(p,g,T,O);if(we(T)){if(B=we(T),typeof B!="function")throw Error(h(150));return T=B.call(T),W(p,g,T,O)}if(typeof T.then=="function")return Ae(p,g,Yo(T),O);if(T.$$typeof===te)return Ae(p,g,es(p,T),O);Uo(p,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,g!==null&&g.tag===6?(n(p,g.sibling),O=o(g,T),O.return=p,p=O):(n(p,g),O=gl(T,p.mode,O),O.return=p,p=O),u(p)):n(p,g)}return function(p,g,T,O){try{ki=0;var B=Ae(p,g,T,O);return _a=null,B}catch(z){if(z===vi)throw z;var $=vt(29,z,null,p.mode);return $.lanes=O,$.return=p,$}finally{}}}var Wn=xu(!0),zu=xu(!1),Oa=se(null),Lo=se(0);function Yu(e,t){e=tn,pe(Lo,e),pe(Oa,t),tn=e|t.baseLanes}function Er(){pe(Lo,tn),pe(Oa,Oa.current)}function Sr(){tn=Lo.current,Ne(Oa),Ne(Lo)}var wt=se(null),Ct=null;function fn(e){var t=e.alternate;pe(De,De.current&1),pe(wt,e),Ct===null&&(t===null||Oa.current!==null||t.memoizedState!==null)&&(Ct=e)}function Uu(e){if(e.tag===22){if(pe(De,De.current),pe(wt,e),Ct===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ct=e)}}else yn()}function yn(){pe(De,De.current),pe(wt,wt.current)}function Vt(e){Ne(wt),Ct===e&&(Ct=null),Ne(De)}var De=se(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _m=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Om=l.unstable_scheduleCallback,Hm=l.unstable_NormalPriority,Me={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ar(){return{controller:new _m,data:new Map,refCount:0}}function Si(e){e.refCount--,e.refCount===0&&Om(Hm,function(){e.controller.abort()})}var Ai=null,_r=0,Ha=0,Na=null;function Nm(e,t){if(Ai===null){var n=Ai=[];_r=0,Ha=Cl(),Na={status:"pending",value:void 0,then:function(a){n.push(a)}}}return _r++,t.then(Lu,Lu),t}function Lu(){if(--_r===0&&Ai!==null){Na!==null&&(Na.status="fulfilled");var e=Ai;Ai=null,Ha=0,Na=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Im(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var ju=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nm(e,t),ju!==null&&ju(e,t)};var Xn=se(null);function Or(){var e=Xn.current;return e!==null?e:ye.pooledCache}function qo(e,t){t===null?pe(Xn,Xn.current):pe(Xn,t.pool)}function qu(){var e=Or();return e===null?null:{parent:Me._currentValue,pool:e}}var mn=0,J=null,le=null,Ie=null,Zo=!1,Ia=!1,Fn=!1,Go=0,_i=0,Ra=null,Rm=0;function _e(){throw Error(h(321))}function Hr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Nr(e,t,n,a,o,s){return mn=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Kn:gn,Fn=!1,s=n(a,o),Fn=!1,Ia&&(s=Gu(t,n,a,o)),Zu(e),s}function Zu(e){D.H=Dt;var t=le!==null&&le.next!==null;if(mn=0,Ie=le=J=null,Zo=!1,_i=0,Ra=null,t)throw Error(h(300));e===null||ze||(e=e.dependencies,e!==null&&Po(e)&&(ze=!0))}function Gu(e,t,n,a){J=e;var o=0;do{if(Ia&&(Ra=null),_i=0,Ia=!1,25<=o)throw Error(h(301));if(o+=1,Ie=le=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=Qn,s=t(n,a)}while(Ia);return s}function Cm(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Oi(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(J.flags|=1024),t}function Ir(){var e=Go!==0;return Go=0,e}function Rr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Cr(e){if(Zo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zo=!1}mn=0,Ie=le=J=null,Ia=!1,_i=Go=0,Ra=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?J.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Re(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=Ie===null?J.memoizedState:Ie.next;if(t!==null)Ie=t,le=e;else{if(e===null)throw J.alternate===null?Error(h(467)):Error(h(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},Ie===null?J.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}var Vo;Vo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Oi(e){var t=_i;return _i+=1,Ra===null&&(Ra=[]),e=Du(Ra,e,t),t=J,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Kn:gn),e}function Wo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oi(e);if(e.$$typeof===te)return Ge(e)}throw Error(h(438,String(e)))}function Dr(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=J.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Vo(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=re;return t.index++,n}function Wt(e,t){return typeof t=="function"?t(e):t}function Xo(e){var t=Re();return Mr(t,le,e)}function Mr(e,t,n){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=n;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var u=o.next;o.next=s.next,s.next=u}t.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var c=u=null,y=null,w=t,_=!1;do{var N=w.lane&-536870913;if(N!==w.lane?(ae&N)===N:(mn&N)===N){var E=w.revertLane;if(E===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),N===Ha&&(_=!0);else if((mn&E)===E){w=w.next,E===Ha&&(_=!0);continue}else N={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(c=y=N,u=s):y=y.next=N,J.lanes|=E,An|=E;N=w.action,Fn&&n(s,N),s=w.hasEagerState?w.eagerState:n(s,N)}else E={lane:N,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(c=y=E,u=s):y=y.next=E,J.lanes|=N,An|=N;w=w.next}while(w!==null&&w!==t);if(y===null?u=s:y.next=c,!it(s,e.memoizedState)&&(ze=!0,_&&(n=Na,n!==null)))throw n;e.memoizedState=s,e.baseState=u,e.baseQueue=y,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Br(e){var t=Re(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do s=e(s,u.action),u=u.next;while(u!==o);it(s,t.memoizedState)||(ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Vu(e,t,n){var a=J,o=Re(),s=ie;if(s){if(n===void 0)throw Error(h(407));n=n()}else n=t();var u=!it((le||o).memoizedState,n);if(u&&(o.memoizedState=n,ze=!0),o=o.queue,Yr(Fu.bind(null,a,o,e),[e]),o.getSnapshot!==t||u||Ie!==null&&Ie.memoizedState.tag&1){if(a.flags|=2048,Ca(9,Xu.bind(null,a,o,n,t),{destroy:void 0},null),ye===null)throw Error(h(349));s||(mn&60)!==0||Wu(a,t,n)}return n}function Wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=Vo(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xu(e,t,n,a){t.value=n,t.getSnapshot=a,Ku(t)&&Qu(e)}function Fu(e,t,n){return n(function(){Ku(t)&&Qu(e)})}function Ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Qu(e){var t=cn(e,2);t!==null&&Qe(t,e,2)}function xr(e){var t=et();if(typeof e=="function"){var n=e;if(e=n(),Fn){hn(!0);try{n()}finally{hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Ju(e,t,n,a){return e.baseState=n,Mr(e,le,typeof a=="function"?a:Wt)}function Dm(e,t,n,a,o){if(Qo(e))throw Error(h(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){s.listeners.push(u)}};D.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,$u(t,s)):(s.next=n.next,t.pending=n.next=s)}}function $u(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var s=D.T,u={};D.T=u;try{var c=n(o,a),y=D.S;y!==null&&y(u,c),Pu(e,t,c)}catch(w){zr(e,t,w)}finally{D.T=s}}else try{s=n(o,a),Pu(e,t,s)}catch(w){zr(e,t,w)}}function Pu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ed(e,t,a)},function(a){return zr(e,t,a)}):ed(e,t,n)}function ed(e,t,n){t.status="fulfilled",t.value=n,td(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$u(e,n)))}function zr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,td(t),t=t.next;while(t!==a)}e.action=null}function td(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nd(e,t){return t}function ad(e,t){if(ie){var n=ye.formState;if(n!==null){e:{var a=J;if(ie){if(Le){t:{for(var o=Le,s=Rt;o.nodeType!==8;){if(!s){o=null;break t}if(o=_t(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Le=_t(o.nextSibling),a=o.data==="F!";break e}}Vn(a)}a=!1}a&&(t=n[0])}}return n=et(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nd,lastRenderedState:t},n.queue=a,n=Td.bind(null,J,a),a.dispatch=n,a=xr(!1),s=Zr.bind(null,J,!1,a.queue),a=et(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Dm.bind(null,J,o,s,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function id(e){var t=Re();return od(t,le,e)}function od(e,t,n){t=Mr(e,t,nd)[0],e=Xo(Wt)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Oi(t):t;var a=Re(),o=a.queue,s=o.dispatch;return n!==a.memoizedState&&(J.flags|=2048,Ca(9,Mm.bind(null,o,n),{destroy:void 0},null)),[t,s,e]}function Mm(e,t){e.action=t}function sd(e){var t=Re(),n=le;if(n!==null)return od(t,n,e);Re(),t=t.memoizedState,n=Re();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ca(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=J.updateQueue,t===null&&(t=Vo(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function rd(){return Re().memoizedState}function Fo(e,t,n,a){var o=et();J.flags|=e,o.memoizedState=Ca(1|t,n,{destroy:void 0},a===void 0?null:a)}function Ko(e,t,n,a){var o=Re();a=a===void 0?null:a;var s=o.memoizedState.inst;le!==null&&a!==null&&Hr(a,le.memoizedState.deps)?o.memoizedState=Ca(t,n,s,a):(J.flags|=e,o.memoizedState=Ca(1|t,n,s,a))}function ld(e,t){Fo(8390656,8,e,t)}function Yr(e,t){Ko(2048,8,e,t)}function hd(e,t){return Ko(4,2,e,t)}function ud(e,t){return Ko(4,4,e,t)}function dd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,n){n=n!=null?n.concat([e]):null,Ko(4,4,dd.bind(null,t,e),n)}function Ur(){}function fd(e,t){var n=Re();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Hr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function yd(e,t){var n=Re();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Hr(t,a[1]))return a[0];if(a=e(),Fn){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a}function Lr(e,t,n){return n===void 0||(mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=gc(),J.lanes|=e,An|=e,n)}function md(e,t,n,a){return it(n,t)?n:Oa.current!==null?(e=Lr(e,n,a),it(e,t)||(ze=!0),e):(mn&42)===0?(ze=!0,e.memoizedState=n):(e=gc(),J.lanes|=e,An|=e,t)}function gd(e,t,n,a,o){var s=M.p;M.p=s!==0&&8>s?s:8;var u=D.T,c={};D.T=c,Zr(e,!1,t,n);try{var y=o(),w=D.S;if(w!==null&&w(c,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var _=Im(y,a);Hi(e,t,_,lt(e))}else Hi(e,t,a,lt(e))}catch(N){Hi(e,t,{then:function(){},status:"rejected",reason:N},lt())}finally{M.p=s,D.T=u}}function Bm(){}function jr(e,t,n,a){if(e.tag!==5)throw Error(h(476));var o=wd(e).queue;gd(e,o,t,ne,n===null?Bm:function(){return bd(e),n(a)})}function wd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bd(e){var t=wd(e).next.queue;Hi(e,t,{},lt())}function qr(){return Ge(Fi)}function pd(){return Re().memoizedState}function vd(){return Re().memoizedState}function xm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=lt();e=pn(n);var a=vn(t,e,n);a!==null&&(Qe(a,t,n),Ri(a,t,n)),t={cache:Ar()},e.payload=t;return}t=t.return}}function zm(e,t,n){var a=lt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Qo(e)?kd(t,n):(n=br(e,t,n,a),n!==null&&(Qe(n,e,a),Ed(n,t,a)))}function Td(e,t,n){var a=lt();Hi(e,t,n,a)}function Hi(e,t,n,a){var o={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))kd(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,c=s(u,n);if(o.hasEagerState=!0,o.eagerState=c,it(c,u))return Do(e,t,o,0),ye===null&&Co(),!1}catch{}finally{}if(n=br(e,t,o,a),n!==null)return Qe(n,e,a),Ed(n,t,a),!0}return!1}function Zr(e,t,n,a){if(a={lane:2,revertLane:Cl(),action:a,hasEagerState:!1,eagerState:null,next:null},Qo(e)){if(t)throw Error(h(479))}else t=br(e,n,a,2),t!==null&&Qe(t,e,2)}function Qo(e){var t=e.alternate;return e===J||t!==null&&t===J}function kd(e,t){Ia=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ed(e,t,n){if((n&4194176)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Mh(e,n)}}var Dt={readContext:Ge,use:Wo,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e};Dt.useCacheRefresh=_e,Dt.useMemoCache=_e,Dt.useHostTransitionStatus=_e,Dt.useFormState=_e,Dt.useActionState=_e,Dt.useOptimistic=_e;var Kn={readContext:Ge,use:Wo,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:ld,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Fo(4194308,4,dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){Fo(4,2,e,t)},useMemo:function(e,t){var n=et();t=t===void 0?null:t;var a=e();if(Fn){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=et();if(n!==void 0){var o=n(t);if(Fn){hn(!0);try{n(t)}finally{hn(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=zm.bind(null,J,e),[a.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=xr(e);var t=e.queue,n=Td.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ur,useDeferredValue:function(e,t){var n=et();return Lr(n,e,t)},useTransition:function(){var e=xr(!1);return e=gd.bind(null,J,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=J,o=et();if(ie){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ye===null)throw Error(h(349));(ae&60)!==0||Wu(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,ld(Fu.bind(null,a,s,e),[e]),a.flags|=2048,Ca(9,Xu.bind(null,a,s,n,t),{destroy:void 0},null),n},useId:function(){var e=et(),t=ye.identifierPrefix;if(ie){var n=Gt,a=Zt;n=(a&~(1<<32-at(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return et().memoizedState=xm.bind(null,J)}};Kn.useMemoCache=Dr,Kn.useHostTransitionStatus=qr,Kn.useFormState=ad,Kn.useActionState=ad,Kn.useOptimistic=function(e){var t=et();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zr.bind(null,J,!0,n),n.dispatch=t,[e,t]};var gn={readContext:Ge,use:Wo,useCallback:fd,useContext:Ge,useEffect:Yr,useImperativeHandle:cd,useInsertionEffect:hd,useLayoutEffect:ud,useMemo:yd,useReducer:Xo,useRef:rd,useState:function(){return Xo(Wt)},useDebugValue:Ur,useDeferredValue:function(e,t){var n=Re();return md(n,le.memoizedState,e,t)},useTransition:function(){var e=Xo(Wt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:Vu,useId:pd};gn.useCacheRefresh=vd,gn.useMemoCache=Dr,gn.useHostTransitionStatus=qr,gn.useFormState=id,gn.useActionState=id,gn.useOptimistic=function(e,t){var n=Re();return Ju(n,le,e,t)};var Qn={readContext:Ge,use:Wo,useCallback:fd,useContext:Ge,useEffect:Yr,useImperativeHandle:cd,useInsertionEffect:hd,useLayoutEffect:ud,useMemo:yd,useReducer:Br,useRef:rd,useState:function(){return Br(Wt)},useDebugValue:Ur,useDeferredValue:function(e,t){var n=Re();return le===null?Lr(n,e,t):md(n,le.memoizedState,e,t)},useTransition:function(){var e=Br(Wt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:Vu,useId:pd};Qn.useCacheRefresh=vd,Qn.useMemoCache=Dr,Qn.useHostTransitionStatus=qr,Qn.useFormState=sd,Qn.useActionState=sd,Qn.useOptimistic=function(e,t){var n=Re();return le!==null?Ju(n,le,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Gr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vr={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=lt(),o=pn(a);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,a),t!==null&&(Qe(t,e,a),Ri(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=lt(),o=pn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,a),t!==null&&(Qe(t,e,a),Ri(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),a=pn(n);a.tag=2,t!=null&&(a.callback=t),t=vn(e,a,n),t!==null&&(Qe(t,e,n),Ri(t,e,n))}};function Sd(e,t,n,a,o,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,u):t.prototype&&t.prototype.isPureReactComponent?!mi(n,a)||!mi(o,s):!0}function Ad(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Vr.enqueueReplaceState(t,t.state,null)}function Jn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=K({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var Jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function _d(e){Jo(e)}function Od(e){console.error(e)}function Hd(e){Jo(e)}function $o(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Nd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Wr(e,t,n){return n=pn(n),n.tag=3,n.payload={element:null},n.callback=function(){$o(e,t)},n}function Id(e){return e=pn(e),e.tag=3,e}function Rd(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Nd(t,n,a)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Nd(t,n,a),typeof o!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Ym(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ii(t,n,o,!0),n=wt.current,n!==null){switch(n.tag){case 13:return Ct===null?Ol():n.alternate===null&&Se===0&&(Se=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===kr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Nl(e,a,o)),!1;case 22:return n.flags|=65536,a===kr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Nl(e,a,o)),!1}throw Error(h(435,n.tag))}return Nl(e,a,o),Ol(),!1}if(ie)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Tr&&(e=Error(h(422),{cause:a}),pi(yt(e,n)))):(a!==Tr&&(t=Error(h(423),{cause:a}),pi(yt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=yt(a,n),o=Wr(e.stateNode,a,o),rl(e,o),Se!==4&&(Se=2)),!1;var s=Error(h(520),{cause:a});if(s=yt(s,n),Ui===null?Ui=[s]:Ui.push(s),Se!==4&&(Se=2),t===null)return!0;a=yt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Wr(n.stateNode,a,e),rl(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(_n===null||!_n.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Id(o),Rd(o,e,n,a),rl(n,o),!1}n=n.return}while(n!==null);return!1}var Cd=Error(h(461)),ze=!1;function je(e,t,n,a){t.child=e===null?zu(t,null,n,a):Wn(t,e.child,n,a)}function Dd(e,t,n,a,o){n=n.render;var s=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Pn(t),a=Nr(e,t,n,u,s,o),c=Ir(),e!==null&&!ze?(Rr(e,t,o),Xt(e,t,o)):(ie&&c&&pr(t),t.flags|=1,je(e,t,a,o),t.child)}function Md(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!ml(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Bd(e,t,s,a,o)):(e=as(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!tl(e,o)){var u=s.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(u,a)&&e.ref===t.ref)return Xt(e,t,o)}return t.flags|=1,e=Sn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Bd(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(mi(s,a)&&e.ref===t.ref)if(ze=!1,t.pendingProps=a=s,tl(e,o))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Xt(e,t,o)}return Xr(e,t,n,a,o)}function xd(e,t,n){var a=t.pendingProps,o=a.children,s=(t.stateNode._pendingVisibility&2)!==0,u=e!==null?e.memoizedState:null;if(Ni(e,t),a.mode==="hidden"||s){if((t.flags&128)!==0){if(a=u!==null?u.baseLanes|n:n,e!==null){for(o=t.child=e.child,s=0;o!==null;)s=s|o.lanes|o.childLanes,o=o.sibling;t.childLanes=s&~a}else t.childLanes=0,t.child=null;return zd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qo(t,u!==null?u.cachePool:null),u!==null?Yu(t,u):Er(),Uu(t);else return t.lanes=t.childLanes=536870912,zd(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(qo(t,u.cachePool),Yu(t,u),yn(),t.memoizedState=null):(e!==null&&qo(t,null),Er(),yn());return je(e,t,o,n),t.child}function zd(e,t,n,a){var o=Or();return o=o===null?null:{parent:Me._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&qo(t,null),Er(),Uu(t),e!==null&&Ii(e,t,a,!0),null}function Ni(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Xr(e,t,n,a,o){return Pn(t),n=Nr(e,t,n,a,void 0,o),a=Ir(),e!==null&&!ze?(Rr(e,t,o),Xt(e,t,o)):(ie&&a&&pr(t),t.flags|=1,je(e,t,n,o),t.child)}function Yd(e,t,n,a,o,s){return Pn(t),t.updateQueue=null,n=Gu(t,a,n,o),Zu(e),a=Ir(),e!==null&&!ze?(Rr(e,t,s),Xt(e,t,s)):(ie&&a&&pr(t),t.flags|=1,je(e,t,n,s),t.child)}function Ud(e,t,n,a,o){if(Pn(t),t.stateNode===null){var s=Ea,u=n.contextType;typeof u=="object"&&u!==null&&(s=Ge(u)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Vr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ol(t),u=n.contextType,s.context=typeof u=="object"&&u!==null?Ge(u):Ea,s.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Gr(t,n,u,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(u=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),u!==s.state&&Vr.enqueueReplaceState(s,s.state,null),Di(t,a,s,o),Ci(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var c=t.memoizedProps,y=Jn(n,c);s.props=y;var w=s.context,_=n.contextType;u=Ea,typeof _=="object"&&_!==null&&(u=Ge(_));var N=n.getDerivedStateFromProps;_=typeof N=="function"||typeof s.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,_||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c||w!==u)&&Ad(t,s,a,u),bn=!1;var E=t.memoizedState;s.state=E,Di(t,a,s,o),Ci(),w=t.memoizedState,c||E!==w||bn?(typeof N=="function"&&(Gr(t,n,N,a),w=t.memoizedState),(y=bn||Sd(t,n,y,a,E,w,u))?(_||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=w),s.props=a,s.state=w,s.context=u,a=y):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,sl(e,t),u=t.memoizedProps,_=Jn(n,u),s.props=_,N=t.pendingProps,E=s.context,w=n.contextType,y=Ea,typeof w=="object"&&w!==null&&(y=Ge(w)),c=n.getDerivedStateFromProps,(w=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==N||E!==y)&&Ad(t,s,a,y),bn=!1,E=t.memoizedState,s.state=E,Di(t,a,s,o),Ci();var A=t.memoizedState;u!==N||E!==A||bn||e!==null&&e.dependencies!==null&&Po(e.dependencies)?(typeof c=="function"&&(Gr(t,n,c,a),A=t.memoizedState),(_=bn||Sd(t,n,_,a,E,A,y)||e!==null&&e.dependencies!==null&&Po(e.dependencies))?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,A,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,A,y)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),s.props=a,s.state=A,s.context=y,a=_):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Ni(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,n,o)):je(e,t,n,o),t.memoizedState=s.state,e=t.child):e=Xt(e,t,o),e}function Ld(e,t,n,a){return bi(),t.flags|=256,je(e,t,n,a),t.child}var Fr={dehydrated:null,treeContext:null,retryLane:0};function Kr(e){return{baseLanes:e,cachePool:qu()}}function Qr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Tt),e}function jd(e,t,n){var a=t.pendingProps,o=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),u&&(o=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(o?fn(t):yn(),ie){var c=Le,y;if(y=c){e:{for(y=c,c=Rt;y.nodeType!==8;){if(!c){c=null;break e}if(y=_t(y.nextSibling),y===null){c=null;break e}}c=y}c!==null?(t.memoizedState={dehydrated:c,treeContext:Zn!==null?{id:Zt,overflow:Gt}:null,retryLane:536870912},y=vt(18,null,null,0),y.stateNode=c,y.return=t,t.child=y,Ke=t,Le=null,y=!0):y=!1}y||Vn(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?t.lanes=16:t.lanes=536870912,null;Vt(t)}return c=a.children,a=a.fallback,o?(yn(),o=t.mode,c=$r({mode:"hidden",children:c},o),a=ta(a,o,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,o=t.child,o.memoizedState=Kr(n),o.childLanes=Qr(e,u,n),t.memoizedState=Fr,a):(fn(t),Jr(t,c))}if(y=e.memoizedState,y!==null&&(c=y.dehydrated,c!==null)){if(s)t.flags&256?(fn(t),t.flags&=-257,t=Pr(e,t,n)):t.memoizedState!==null?(yn(),t.child=e.child,t.flags|=128,t=null):(yn(),o=a.fallback,c=t.mode,a=$r({mode:"visible",children:a.children},c),o=ta(o,c,n,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,Wn(t,e.child,null,n),a=t.child,a.memoizedState=Kr(n),a.childLanes=Qr(e,u,n),t.memoizedState=Fr,t=o);else if(fn(t),c.data==="$!"){if(u=c.nextSibling&&c.nextSibling.dataset,u)var w=u.dgst;u=w,a=Error(h(419)),a.stack="",a.digest=u,pi({value:a,source:null,stack:null}),t=Pr(e,t,n)}else if(ze||Ii(e,t,n,!1),u=(n&e.childLanes)!==0,ze||u){if(u=ye,u!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(u.suspendedLanes|n))!==0?0:a,a!==0&&a!==y.retryLane)throw y.retryLane=a,cn(e,a),Qe(u,e,a),Cd}c.data==="$?"||Ol(),t=Pr(e,t,n)}else c.data==="$?"?(t.flags|=128,t.child=e.child,t=Pm.bind(null,e),c._reactRetry=t,t=null):(e=y.treeContext,Le=_t(c.nextSibling),Ke=t,ie=!0,St=null,Rt=!1,e!==null&&(mt[gt++]=Zt,mt[gt++]=Gt,mt[gt++]=Zn,Zt=e.id,Gt=e.overflow,Zn=t),t=Jr(t,a.children),t.flags|=4096);return t}return o?(yn(),o=a.fallback,c=t.mode,y=e.child,w=y.sibling,a=Sn(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&31457280,w!==null?o=Sn(w,o):(o=ta(o,c,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,c=e.child.memoizedState,c===null?c=Kr(n):(y=c.cachePool,y!==null?(w=Me._currentValue,y=y.parent!==w?{parent:w,pool:w}:y):y=qu(),c={baseLanes:c.baseLanes|n,cachePool:y}),o.memoizedState=c,o.childLanes=Qr(e,u,n),t.memoizedState=Fr,a):(fn(t),n=e.child,e=n.sibling,n=Sn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function Jr(e,t){return t=$r({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $r(e,t){return fc(e,t,0,null)}function Pr(e,t,n){return Wn(t,e.child,null,n),e=Jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),al(e.return,t,n)}function el(e,t,n,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=o)}function Zd(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;if(je(e,t,a.children,n),a=De.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(pe(De,a),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),el(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}el(t,!0,n,null,s);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ii(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Po(e)))}function Um(e,t,n){switch(t.tag){case 3:mo(t,t.stateNode.containerInfo),wn(t,Me,e.memoizedState.cache),bi();break;case 27:case 5:Vs(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:wn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?jd(e,t,n):(fn(t),e=Xt(e,t,n),e!==null?e.sibling:null);fn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ii(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Zd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(De,De.current),a)break;return null;case 22:case 23:return t.lanes=0,xd(e,t,n);case 24:wn(t,Me,e.memoizedState.cache)}return Xt(e,t,n)}function Gd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!tl(e,n)&&(t.flags&128)===0)return ze=!1,Um(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,ie&&(t.flags&1048576)!==0&&Hu(t,xo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,o=a._init;if(a=o(a._payload),t.type=a,typeof a=="function")ml(a)?(e=Jn(a,e),t.tag=1,t=Ud(null,t,a,e,n)):(t.tag=0,t=Xr(null,t,a,e,n));else{if(a!=null){if(o=a.$$typeof,o===ce){t.tag=11,t=Dd(null,t,a,e,n);break e}else if(o===He){t.tag=14,t=Md(null,t,a,e,n);break e}}throw t=ht(a)||a,Error(h(306,t,""))}}return t;case 0:return Xr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=Jn(a,t.pendingProps),Ud(e,t,a,o,n);case 3:e:{if(mo(t,t.stateNode.containerInfo),e===null)throw Error(h(387));var s=t.pendingProps;o=t.memoizedState,a=o.element,sl(e,t),Di(t,s,null,n);var u=t.memoizedState;if(s=u.cache,wn(t,Me,s),s!==o.cache&&il(t,[Me],n,!0),Ci(),s=u.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Ld(e,t,s,n);break e}else if(s!==a){a=yt(Error(h(424)),t),pi(a),t=Ld(e,t,s,n);break e}else for(Le=_t(t.stateNode.containerInfo.firstChild),Ke=t,ie=!0,St=null,Rt=!0,n=zu(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),s===a){t=Xt(e,t,n);break e}je(e,t,s,n)}t=t.child}return t;case 26:return Ni(e,t),e===null?(n=Xc(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(n=t.type,e=t.pendingProps,a=ms(ln.current).createElement(n),a[Ze]=t,a[$e]=e,qe(a,n,e),xe(a),t.stateNode=a):t.memoizedState=Xc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vs(t),e===null&&ie&&(a=t.stateNode=Gc(t.type,t.pendingProps,ln.current),Ke=t,Rt=!0,Le=_t(a.firstChild)),a=t.pendingProps.children,e!==null||ie?je(e,t,a,n):t.child=Wn(t,null,a,n),Ni(e,t),t.child;case 5:return e===null&&ie&&((o=a=Le)&&(a=mg(a,t.type,t.pendingProps,Rt),a!==null?(t.stateNode=a,Ke=t,Le=_t(a.firstChild),Rt=!1,o=!0):o=!1),o||Vn(t)),Vs(t),o=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,a=s.children,jl(o,s)?a=null:u!==null&&jl(o,u)&&(t.flags|=32),t.memoizedState!==null&&(o=Nr(e,t,Cm,null,null,n),Fi._currentValue=o),Ni(e,t),je(e,t,a,n),t.child;case 6:return e===null&&ie&&((e=n=Le)&&(n=gg(n,t.pendingProps,Rt),n!==null?(t.stateNode=n,Ke=t,Le=null,e=!0):e=!1),e||Vn(t)),null;case 13:return jd(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Wn(t,null,a,n):je(e,t,a,n),t.child;case 11:return Dd(e,t,t.type,t.pendingProps,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,wn(t,t.type,a.value),je(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Pn(t),o=Ge(o),a=a(o),t.flags|=1,je(e,t,a,n),t.child;case 14:return Md(e,t,t.type,t.pendingProps,n);case 15:return Bd(e,t,t.type,t.pendingProps,n);case 19:return Zd(e,t,n);case 22:return xd(e,t,n);case 24:return Pn(t),a=Ge(Me),e===null?(o=Or(),o===null&&(o=ye,s=Ar(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:a,cache:o},ol(t),wn(t,Me,o)):((e.lanes&n)!==0&&(sl(e,t),Di(t,null,null,n),Ci()),o=e.memoizedState,s=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),wn(t,Me,a)):(a=s.cache,wn(t,Me,a),a!==o.cache&&il(t,[Me],n,!0))),je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}var nl=se(null),$n=null,Ft=null;function wn(e,t,n){pe(nl,t._currentValue),t._currentValue=n}function Kt(e){e._currentValue=nl.current,Ne(nl)}function al(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function il(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var u=o.child;s=s.firstContext;e:for(;s!==null;){var c=s;s=o;for(var y=0;y<t.length;y++)if(c.context===t[y]){s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),al(s.return,n,e),a||(u=null);break e}s=c.next}}else if(o.tag===18){if(u=o.return,u===null)throw Error(h(341));u.lanes|=n,s=u.alternate,s!==null&&(s.lanes|=n),al(u,n,e),u=null}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===e){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}}function Ii(e,t,n,a){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var u=o.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=o.type;it(o.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(o===yo.current){if(u=o.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Fi):e=[Fi])}o=o.return}e!==null&&il(t,e,n,a),t.flags|=262144}function Po(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){$n=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return Vd($n,e)}function es(e,t){return $n===null&&Pn(e),Vd(e,t)}function Vd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ft===null){if(e===null)throw Error(h(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return n}var bn=!1;function ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ke&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Mo(e),_u(e,null,n),t}return Do(e,a,t,n),Mo(e)}function Ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Mh(e,n)}}function rl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=u:s=s.next=u,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ll=!1;function Ci(){if(ll){var e=Na;if(e!==null)throw e}}function Di(e,t,n,a){ll=!1;var o=e.updateQueue;bn=!1;var s=o.firstBaseUpdate,u=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var y=c,w=y.next;y.next=null,u===null?s=w:u.next=w,u=y;var _=e.alternate;_!==null&&(_=_.updateQueue,c=_.lastBaseUpdate,c!==u&&(c===null?_.firstBaseUpdate=w:c.next=w,_.lastBaseUpdate=y))}if(s!==null){var N=o.baseState;u=0,_=w=y=null,c=s;do{var E=c.lane&-536870913,A=E!==c.lane;if(A?(ae&E)===E:(a&E)===E){E!==0&&E===Ha&&(ll=!0),_!==null&&(_=_.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var x=e,W=c;E=t;var Ae=n;switch(W.tag){case 1:if(x=W.payload,typeof x=="function"){N=x.call(Ae,N,E);break e}N=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=W.payload,E=typeof x=="function"?x.call(Ae,N,E):x,E==null)break e;N=K({},N,E);break e;case 2:bn=!0}}E=c.callback,E!==null&&(e.flags|=64,A&&(e.flags|=8192),A=o.callbacks,A===null?o.callbacks=[E]:A.push(E))}else A={lane:E,tag:c.tag,payload:c.payload,callback:c.callback,next:null},_===null?(w=_=A,y=N):_=_.next=A,u|=E;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;A=c,c=A.next,A.next=null,o.lastBaseUpdate=A,o.shared.pending=null}}while(!0);_===null&&(y=N),o.baseState=y,o.firstBaseUpdate=w,o.lastBaseUpdate=_,s===null&&(o.shared.lanes=0),An|=u,e.lanes=u,e.memoizedState=N}}function Wd(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Xd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wd(n[e],t)}function Mi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var s=n.create,u=n.inst;a=s(),u.destroy=a}n=n.next}while(n!==o)}}catch(c){de(t,t.return,c)}}function Tn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,o=t;var y=n;try{c()}catch(w){de(o,y,w)}}}a=a.next}while(a!==s)}}catch(w){de(t,t.return,w)}}function Fd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xd(t,n)}catch(a){de(e,e.return,a)}}}function Kd(e,t,n){n.props=Jn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){de(e,t,a)}}function ea(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var o=a;break;default:o=a}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(s){de(e,t,s)}}function ot(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){de(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){de(e,t,o)}else n.current=null}function Qd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){de(e,e.return,o)}}function Jd(e,t,n){try{var a=e.stateNode;ug(a,e.type,n,t),a[$e]=t}catch(o){de(e,e.return,o)}}function $d(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function hl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ul(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ys));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(ul(e,t,n),e=e.sibling;e!==null;)ul(e,t,n),e=e.sibling}function ts(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}var Qt=!1,Ee=!1,dl=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,Ye=null,ec=!1;function Lm(e,t){if(e=e.containerInfo,Ul=Ts,e=wu(e),fr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var u=0,c=-1,y=-1,w=0,_=0,N=e,E=null;t:for(;;){for(var A;N!==n||o!==0&&N.nodeType!==3||(c=u+o),N!==s||a!==0&&N.nodeType!==3||(y=u+a),N.nodeType===3&&(u+=N.nodeValue.length),(A=N.firstChild)!==null;)E=N,N=A;for(;;){if(N===e)break t;if(E===n&&++w===o&&(c=u),E===s&&++_===a&&(y=u),(A=N.nextSibling)!==null)break;N=E,E=N.parentNode}N=A}n=c===-1||y===-1?null:{start:c,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ll={focusedElem:e,selectionRange:n},Ts=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var x=Jn(n.type,o,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(x,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(W){de(n,n.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Gl(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gl(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}return x=ec,ec=!1,x}function tc(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:$t(e,n),a&4&&Mi(5,n);break;case 1:if($t(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){de(n,n.return,c)}else{var o=Jn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){de(n,n.return,c)}}a&64&&Fd(n),a&512&&ea(n,n.return);break;case 3:if($t(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Xd(a,e)}catch(c){de(n,n.return,c)}}break;case 26:$t(e,n),a&512&&ea(n,n.return);break;case 27:case 5:$t(e,n),t===null&&a&4&&Qd(n),a&512&&ea(n,n.return);break;case 12:$t(e,n);break;case 13:$t(e,n),a&4&&ic(e,n);break;case 22:if(o=n.memoizedState!==null||Qt,!o){t=t!==null&&t.memoizedState!==null||Ee;var s=Qt,u=Ee;Qt=o,(Ee=t)&&!u?kn(e,n,(n.subtreeFlags&8772)!==0):$t(e,n),Qt=s,Ee=u}a&512&&(n.memoizedProps.mode==="manual"?ea(n,n.return):ot(n,n.return));break;default:$t(e,n)}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,st=!1;function Jt(e,t,n){for(n=n.child;n!==null;)ac(e,t,n),n=n.sibling}function ac(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(ai,n)}catch{}switch(n.tag){case 26:Ee||ot(n,t),Jt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ee||ot(n,t);var a=Ce,o=st;for(Ce=n.stateNode,Jt(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Js(n),Ce=a,st=o;break;case 5:Ee||ot(n,t);case 6:o=Ce;var s=st;if(Ce=null,Jt(e,t,n),Ce=o,st=s,Ce!==null)if(st)try{e=Ce,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(u){de(n,t,u)}else try{Ce.removeChild(n.stateNode)}catch(u){de(n,t,u)}break;case 18:Ce!==null&&(st?(t=Ce,n=n.stateNode,t.nodeType===8?Zl(t.parentNode,n):t.nodeType===1&&Zl(t,n),$i(t)):Zl(Ce,n.stateNode));break;case 4:a=Ce,o=st,Ce=n.stateNode.containerInfo,st=!0,Jt(e,t,n),Ce=a,st=o;break;case 0:case 11:case 14:case 15:Ee||Tn(2,n,t),Ee||Tn(4,n,t),Jt(e,t,n);break;case 1:Ee||(ot(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Kd(n,t,a)),Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:Ee||ot(n,t),Ee=(a=Ee)||n.memoizedState!==null,Jt(e,t,n),Ee=a;break;default:Jt(e,t,n)}}function ic(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$i(e)}catch(n){de(t,t.return,n)}}function jm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pd),t;default:throw Error(h(435,e.tag))}}function cl(e,t){var n=jm(e);t.forEach(function(a){var o=eg.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}function bt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],s=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:case 5:Ce=c.stateNode,st=!1;break e;case 3:Ce=c.stateNode.containerInfo,st=!0;break e;case 4:Ce=c.stateNode.containerInfo,st=!0;break e}c=c.return}if(Ce===null)throw Error(h(160));ac(s,u,o),Ce=null,st=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)oc(t,e),t=t.sibling}var At=null;function oc(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),pt(e),a&4&&(Tn(3,e,e.return),Mi(3,e),Tn(5,e,e.return));break;case 1:bt(t,e),pt(e),a&512&&(Ee||n===null||ot(n,n.return)),a&64&&Qt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=At;if(bt(t,e),pt(e),a&512&&(Ee||n===null||ot(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[si]||s[Ze]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),qe(s,a,n),s[Ze]=e,xe(s),a=s;break e;case"link":var u=Qc("link","href",o).get(a+(n.href||""));if(u){for(var c=0;c<u.length;c++)if(s=u[c],s.getAttribute("href")===(n.href==null?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(c,1);break t}}s=o.createElement(a),qe(s,a,n),o.head.appendChild(s);break;case"meta":if(u=Qc("meta","content",o).get(a+(n.content||""))){for(c=0;c<u.length;c++)if(s=u[c],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(c,1);break t}}s=o.createElement(a),qe(s,a,n),o.head.appendChild(s);break;default:throw Error(h(468,a))}s[Ze]=e,xe(s),a=s}e.stateNode=a}else Jc(o,e.type,e.stateNode);else e.stateNode=Kc(o,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?Jc(o,e.type,e.stateNode):Kc(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Jd(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){o=e.stateNode,s=e.memoizedProps;try{for(var y=o.firstChild;y;){var w=y.nextSibling,_=y.nodeName;y[si]||_==="HEAD"||_==="BODY"||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&y.rel.toLowerCase()==="stylesheet"||o.removeChild(y),y=w}for(var N=e.type,E=o.attributes;E.length;)o.removeAttributeNode(E[0]);qe(o,N,s),o[Ze]=e,o[$e]=s}catch(x){de(e,e.return,x)}}case 5:if(bt(t,e),pt(e),a&512&&(Ee||n===null||ot(n,n.return)),e.flags&32){o=e.stateNode;try{ga(o,"")}catch(x){de(e,e.return,x)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Jd(e,o,n!==null?n.memoizedProps:o)),a&1024&&(dl=!0);break;case 6:if(bt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(x){de(e,e.return,x)}}break;case 3:if(bs=null,o=At,At=gs(t.containerInfo),bt(t,e),At=o,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(x){de(e,e.return,x)}dl&&(dl=!1,sc(e));break;case 4:a=At,At=gs(e.stateNode.containerInfo),bt(t,e),pt(e),At=a;break;case 12:bt(t,e),pt(e);break;case 13:bt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Tl=It()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cl(e,a)));break;case 22:if(a&512&&(Ee||n===null||ot(n,n.return)),y=e.memoizedState!==null,w=n!==null&&n.memoizedState!==null,_=Qt,N=Ee,Qt=_||y,Ee=N||w,bt(t,e),Ee=N,Qt=_,pt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=y?t._visibility&-2:t._visibility|1,y&&(t=Qt||Ee,n===null||w||t||Da(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){w=n=t;try{if(o=w.stateNode,y)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=w.stateNode,c=w.memoizedProps.style;var A=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(x){de(w,w.return,x)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=y?"":w.memoizedProps}catch(x){de(w,w.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,cl(e,n))));break;case 19:bt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cl(e,a)));break;case 21:break;default:bt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if($d(n)){var a=n;break e}n=n.return}throw Error(h(160))}switch(a.tag){case 27:var o=a.stateNode,s=hl(e);ts(e,s,o);break;case 5:var u=a.stateNode;a.flags&32&&(ga(u,""),a.flags&=-33);var c=hl(e);ts(e,c,u);break;case 3:case 4:var y=a.stateNode.containerInfo,w=hl(e);ul(e,w,y);break;default:throw Error(h(161))}}}catch(_){de(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tc(e,t.alternate,t),t=t.sibling}function Da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Tn(4,t,t.return),Da(t);break;case 1:ot(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kd(t,t.return,n),Da(t);break;case 26:case 27:case 5:ot(t,t.return),Da(t);break;case 22:ot(t,t.return),t.memoizedState===null&&Da(t);break;default:Da(t)}e=e.sibling}}function kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,s=t,u=s.flags;switch(s.tag){case 0:case 11:case 15:kn(o,s,n),Mi(4,s);break;case 1:if(kn(o,s,n),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(w){de(a,a.return,w)}if(a=s,o=a.updateQueue,o!==null){var c=a.stateNode;try{var y=o.shared.hiddenCallbacks;if(y!==null)for(o.shared.hiddenCallbacks=null,o=0;o<y.length;o++)Wd(y[o],c)}catch(w){de(a,a.return,w)}}n&&u&64&&Fd(s),ea(s,s.return);break;case 26:case 27:case 5:kn(o,s,n),n&&a===null&&u&4&&Qd(s),ea(s,s.return);break;case 12:kn(o,s,n);break;case 13:kn(o,s,n),n&&u&4&&ic(o,s);break;case 22:s.memoizedState===null&&kn(o,s,n),ea(s,s.return);break;default:kn(o,s,n)}t=t.sibling}}function fl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Si(n))}function yl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e))}function En(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rc(e,t,n,a),t=t.sibling}function rc(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:En(e,t,n,a),o&2048&&Mi(9,t);break;case 3:En(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e)));break;case 12:if(o&2048){En(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,u=s.id,c=s.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){de(t,t.return,y)}}else En(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?En(e,t,n,a):Bi(e,t):s._visibility&4?En(e,t,n,a):(s._visibility|=4,Ma(e,t,n,a,(t.subtreeFlags&10256)!==0)),o&2048&&fl(t.alternate,t);break;case 24:En(e,t,n,a),o&2048&&yl(t.alternate,t);break;default:En(e,t,n,a)}}function Ma(e,t,n,a,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,u=t,c=n,y=a,w=u.flags;switch(u.tag){case 0:case 11:case 15:Ma(s,u,c,y,o),Mi(8,u);break;case 23:break;case 22:var _=u.stateNode;u.memoizedState!==null?_._visibility&4?Ma(s,u,c,y,o):Bi(s,u):(_._visibility|=4,Ma(s,u,c,y,o)),o&&w&2048&&fl(u.alternate,u);break;case 24:Ma(s,u,c,y,o),o&&w&2048&&yl(u.alternate,u);break;default:Ma(s,u,c,y,o)}t=t.sibling}}function Bi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:Bi(n,a),o&2048&&fl(a.alternate,a);break;case 24:Bi(n,a),o&2048&&yl(a.alternate,a);break;default:Bi(n,a)}t=t.sibling}}var xi=8192;function Ba(e){if(e.subtreeFlags&xi)for(e=e.child;e!==null;)lc(e),e=e.sibling}function lc(e){switch(e.tag){case 26:Ba(e),e.flags&xi&&e.memoizedState!==null&&Ng(At,e.memoizedState,e.memoizedProps);break;case 5:Ba(e);break;case 3:case 4:var t=At;At=gs(e.stateNode.containerInfo),Ba(e),At=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=xi,xi=16777216,Ba(e),xi=t):Ba(e));break;default:Ba(e)}}function hc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ye=a,dc(a,e)}hc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uc(e),e=e.sibling}function uc(e){switch(e.tag){case 0:case 11:case 15:zi(e),e.flags&2048&&Tn(9,e,e.return);break;case 3:zi(e);break;case 12:zi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,ns(e)):zi(e);break;default:zi(e)}}function ns(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ye=a,dc(a,e)}hc(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tn(8,t,t.return),ns(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,ns(t));break;default:ns(t)}e=e.sibling}}function dc(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:Tn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Si(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ye=a;else e:for(n=e;Ye!==null;){a=Ye;var o=a.sibling,s=a.return;if(nc(a),a===n){Ye=null;break e}if(o!==null){o.return=s,Ye=o;break e}Ye=s}}}function qm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,a){return new qm(e,t,n,a)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function cc(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function as(e,t,n,a,o,s){var u=0;if(a=e,typeof e=="function")ml(e)&&(u=1);else if(typeof e=="string")u=Og(e,n,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case S:return ta(n.children,o,s,t);case k:u=8,o|=24;break;case R:return e=vt(12,n,t,o|2),e.elementType=R,e.lanes=s,e;case Oe:return e=vt(13,n,t,o),e.elementType=Oe,e.lanes=s,e;case ue:return e=vt(19,n,t,o),e.elementType=ue,e.lanes=s,e;case ve:return fc(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case te:u=10;break e;case V:u=9;break e;case ce:u=11;break e;case He:u=14;break e;case be:u=16,a=null;break e}u=29,n=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=vt(u,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function ta(e,t,n,a){return e=vt(7,e,a,t),e.lanes=n,e}function fc(e,t,n,a){e=vt(22,e,a,t),e.elementType=ve,e.lanes=n;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=o._current;if(s===null)throw Error(h(456));if((o._pendingVisibility&2)===0){var u=cn(s,2);u!==null&&(o._pendingVisibility|=2,Qe(u,s,2))}},attach:function(){var s=o._current;if(s===null)throw Error(h(456));if((o._pendingVisibility&2)!==0){var u=cn(s,2);u!==null&&(o._pendingVisibility&=-3,Qe(u,s,2))}}};return e.stateNode=o,e}function gl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function wl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pt(e){e.flags|=4}function yc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$c(t)){if(t=wt.current,t!==null&&((ae&4194176)===ae?Ct!==null:(ae&62914560)!==ae&&(ae&536870912)===0||t!==Ct))throw Ti=kr,Ru;e.flags|=8192}}function is(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ch():536870912,e.lanes|=t,za|=t)}function Yi(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&31457280,a|=o.flags&31457280,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Zm(e,t,n){var a=t.pendingProps;switch(vr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Me),ua(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(wi(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(Al(St),St=null))),Te(t),null;case 26:return n=t.memoizedState,e===null?(Pt(t),n!==null?(Te(t),yc(t,n)):(Te(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Pt(t),Te(t),yc(t,n)):(Te(t),t.flags&=-16777217):(e.memoizedProps!==a&&Pt(t),Te(t),t.flags&=-16777217),null;case 27:go(t),n=ln.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return Te(t),null}e=Nt.current,wi(t)?Nu(t):(e=Gc(o,a,n),t.stateNode=e,Pt(t))}return Te(t),null;case 5:if(go(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return Te(t),null}if(e=Nt.current,wi(t))Nu(t);else{switch(o=ms(ln.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?o.createElement(n,{is:a.is}):o.createElement(n)}}e[Ze]=t,e[$e]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(qe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Pt(t)}}return Te(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=ln.current,wi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=Ke,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Yc(e.nodeValue,n)),e||Vn(t)}else e=ms(e).createTextNode(a),e[Ze]=t,t.stateNode=e}return Te(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=wi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[Ze]=t}else bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else St!==null&&(Al(St),St=null),o=!0;if(!o)return t.flags&256?(Vt(t),t):(Vt(t),null)}if(Vt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool);var s=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),is(t,t.updateQueue),Te(t),null;case 4:return ua(),e===null&&xl(t.stateNode.containerInfo),Te(t),null;case 10:return Kt(t.type),Te(t),null;case 19:if(Ne(De),o=t.memoizedState,o===null)return Te(t),null;if(a=(t.flags&128)!==0,s=o.rendering,s===null)if(a)Yi(o,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=jo(e),s!==null){for(t.flags|=128,Yi(o,!1),e=s.updateQueue,t.updateQueue=e,is(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)cc(n,e),n=n.sibling;return pe(De,De.current&1|2),t.child}e=e.sibling}o.tail!==null&&It()>os&&(t.flags|=128,a=!0,Yi(o,!1),t.lanes=4194304)}else{if(!a)if(e=jo(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,is(t,e),Yi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ie)return Te(t),null}else 2*It()-o.renderingStartTime>os&&n!==536870912&&(t.flags|=128,a=!0,Yi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(e=o.last,e!==null?e.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=It(),t.sibling=null,e=De.current,pe(De,a?e&1|2:e&1),t):(Te(t),null);case 22:case 23:return Vt(t),Sr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&is(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Ne(Xn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kt(Me),Te(t),null;case 25:return null}throw Error(h(156,t.tag))}function Gm(e,t){switch(vr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(Me),ua(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return go(t),null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(De),null;case 4:return ua(),null;case 10:return Kt(t.type),null;case 22:case 23:return Vt(t),Sr(),e!==null&&Ne(Xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(Me),null;case 25:return null;default:return null}}function mc(e,t){switch(vr(t),t.tag){case 3:Kt(Me),ua();break;case 26:case 27:case 5:go(t);break;case 4:ua();break;case 13:Vt(t);break;case 19:Ne(De);break;case 10:Kt(t.type);break;case 22:case 23:Vt(t),Sr(),e!==null&&Ne(Xn);break;case 24:Kt(Me)}}var Vm={getCacheForType:function(e){var t=Ge(Me),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Wm=typeof WeakMap=="function"?WeakMap:Map,ke=0,ye=null,P=null,ae=0,me=0,rt=null,en=!1,xa=!1,bl=!1,tn=0,Se=0,An=0,na=0,pl=0,Tt=0,za=0,Ui=null,Mt=null,vl=!1,Tl=0,os=1/0,ss=null,_n=null,rs=!1,aa=null,Li=0,kl=0,El=null,ji=0,Sl=null;function lt(){if((ke&2)!==0&&ae!==0)return ae&-ae;if(D.T!==null){var e=Ha;return e!==0?e:Cl()}return xh()}function gc(){Tt===0&&(Tt=(ae&536870912)===0||ie?Rh():536870912);var e=wt.current;return e!==null&&(e.flags|=32),Tt}function Qe(e,t,n){(e===ye&&me===2||e.cancelPendingCommit!==null)&&(Ya(e,0),nn(e,ae,Tt,!1)),oi(e,n),((ke&2)===0||e!==ye)&&(e===ye&&((ke&2)===0&&(na|=n),Se===4&&nn(e,ae,Tt,!1)),Bt(e))}function wc(e,t,n){if((ke&6)!==0)throw Error(h(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||ii(e,t),o=a?Km(e,t):Hl(e,t,!0),s=a;do{if(o===0){xa&&!a&&nn(e,t,0,!1);break}else if(o===6)nn(e,t,0,!en);else{if(n=e.current.alternate,s&&!Xm(n)){o=Hl(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;o=Ui;var y=c.current.memoizedState.isDehydrated;if(y&&(Ya(c,u).flags|=256),u=Hl(c,u,!1),u!==2){if(bl&&!y){c.errorRecoveryDisabledLanes|=s,na|=s,o=4;break e}s=Mt,Mt=o,s!==null&&Al(s)}o=u}if(s=!1,o!==2)continue}}if(o===1){Ya(e,0),nn(e,t,0,!0);break}e:{switch(a=e,o){case 0:case 1:throw Error(h(345));case 4:if((t&4194176)===t){nn(a,t,Tt,!en);break e}break;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(h(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(s=Tl+300-It(),10<s)){if(nn(a,t,Tt,!en),vo(a,0)!==0)break e;a.timeoutHandle=jc(bc.bind(null,a,n,Mt,ss,vl,t,Tt,na,za,en,2,-0,0),s);break e}bc(a,n,Mt,ss,vl,t,Tt,na,za,en,0,-0,0)}}break}while(!0);Bt(e)}function Al(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function bc(e,t,n,a,o,s,u,c,y,w,_,N,E){var A=t.subtreeFlags;if((A&8192||(A&16785408)===16785408)&&(Xi={stylesheets:null,count:0,unsuspend:Hg},lc(t),t=Ig(),t!==null)){e.cancelPendingCommit=t(Ac.bind(null,e,n,a,o,u,c,y,1,N,E)),nn(e,s,u,!w);return}Ac(e,n,a,o,u,c,y,_,N,E)}function Xm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!it(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t,n,a){t&=~pl,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var s=31-at(o),u=1<<s;a[s]=-1,o&=~u}n!==0&&Dh(e,n,t)}function ls(){return(ke&6)===0?(qi(0),!1):!0}function _l(){if(P!==null){if(me===0)var e=P.return;else e=P,Ft=$n=null,Cr(e),_a=null,ki=0,e=P;for(;e!==null;)mc(e.alternate,e),e=e.return;P=null}}function Ya(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,cg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_l(),ye=e,P=n=Sn(e.current,null),ae=t,me=0,rt=null,en=!1,xa=ii(e,t),bl=!1,za=Tt=pl=na=An=Se=0,Mt=Ui=null,vl=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-at(a),s=1<<o;t|=e[o],a&=~s}return tn=t,Co(),n}function pc(e,t){J=null,D.H=Dt,t===vi?(t=Mu(),me=3):t===Ru?(t=Mu(),me=4):me=t===Cd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,P===null&&(Se=1,$o(e,yt(t,e.current)))}function vc(){var e=D.H;return D.H=Dt,e===null?Dt:e}function Tc(){var e=D.A;return D.A=Vm,e}function Ol(){Se=4,en||(ae&4194176)!==ae&&wt.current!==null||(xa=!0),(An&134217727)===0&&(na&134217727)===0||ye===null||nn(ye,ae,Tt,!1)}function Hl(e,t,n){var a=ke;ke|=2;var o=vc(),s=Tc();(ye!==e||ae!==t)&&(ss=null,Ya(e,t)),t=!1;var u=Se;e:do try{if(me!==0&&P!==null){var c=P,y=rt;switch(me){case 8:_l(),u=6;break e;case 3:case 2:case 6:wt.current===null&&(t=!0);var w=me;if(me=0,rt=null,Ua(e,c,y,w),n&&xa){u=0;break e}break;default:w=me,me=0,rt=null,Ua(e,c,y,w)}}Fm(),u=Se;break}catch(_){pc(e,_)}while(!0);return t&&e.shellSuspendCounter++,Ft=$n=null,ke=a,D.H=o,D.A=s,P===null&&(ye=null,ae=0,Co()),u}function Fm(){for(;P!==null;)kc(P)}function Km(e,t){var n=ke;ke|=2;var a=vc(),o=Tc();ye!==e||ae!==t?(ss=null,os=It()+500,Ya(e,t)):xa=ii(e,t);e:do try{if(me!==0&&P!==null){t=P;var s=rt;t:switch(me){case 1:me=0,rt=null,Ua(e,t,s,1);break;case 2:if(Cu(s)){me=0,rt=null,Ec(t);break}t=function(){me===2&&ye===e&&(me=7),Bt(e)},s.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:Cu(s)?(me=0,rt=null,Ec(t)):(me=0,rt=null,Ua(e,t,s,7));break;case 5:var u=null;switch(P.tag){case 26:u=P.memoizedState;case 5:case 27:var c=P;if(!u||$c(u)){me=0,rt=null;var y=c.sibling;if(y!==null)P=y;else{var w=c.return;w!==null?(P=w,hs(w)):P=null}break t}}me=0,rt=null,Ua(e,t,s,5);break;case 6:me=0,rt=null,Ua(e,t,s,6);break;case 8:_l(),Se=6;break e;default:throw Error(h(462))}}Qm();break}catch(_){pc(e,_)}while(!0);return Ft=$n=null,D.H=a,D.A=o,ke=n,P!==null?0:(ye=null,ae=0,Co(),Se)}function Qm(){for(;P!==null&&!by();)kc(P)}function kc(e){var t=Gd(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?hs(e):P=t}function Ec(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yd(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=Yd(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:Cr(t);default:mc(n,t),t=P=cc(t,tn),t=Gd(n,t,tn)}e.memoizedProps=e.pendingProps,t===null?hs(e):P=t}function Ua(e,t,n,a){Ft=$n=null,Cr(t),_a=null,ki=0;var o=t.return;try{if(Ym(e,o,t,n,ae)){Se=1,$o(e,yt(n,e.current)),P=null;return}}catch(s){if(o!==null)throw P=o,s;Se=1,$o(e,yt(n,e.current)),P=null;return}t.flags&32768?(ie||a===1?e=!0:xa||(ae&536870912)!==0?e=!1:(en=e=!0,(a===2||a===3||a===6)&&(a=wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sc(t,e)):hs(t)}function hs(e){var t=e;do{if((t.flags&32768)!==0){Sc(t,en);return}e=t.return;var n=Zm(t.alternate,t,tn);if(n!==null){P=n;return}if(t=t.sibling,t!==null){P=t;return}P=t=e}while(t!==null);Se===0&&(Se=5)}function Sc(e,t){do{var n=Gm(e.alternate,e);if(n!==null){n.flags&=32767,P=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){P=e;return}P=e=n}while(e!==null);Se=6,P=null}function Ac(e,t,n,a,o,s,u,c,y,w){var _=D.T,N=M.p;try{M.p=2,D.T=null,Jm(e,t,n,a,N,o,s,u,c,y,w)}finally{D.T=_,M.p=N}}function Jm(e,t,n,a,o,s,u,c){do La();while(aa!==null);if((ke&6)!==0)throw Error(h(327));var y=e.finishedWork;if(a=e.finishedLanes,y===null)return null;if(e.finishedWork=null,e.finishedLanes=0,y===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var w=y.lanes|y.childLanes;if(w|=wr,Ny(e,a,w,s,u,c),e===ye&&(P=ye=null,ae=0),(y.subtreeFlags&10256)===0&&(y.flags&10256)===0||rs||(rs=!0,kl=w,El=n,tg(wo,function(){return La(),null})),n=(y.flags&15990)!==0,(y.subtreeFlags&15990)!==0||n?(n=D.T,D.T=null,s=M.p,M.p=2,u=ke,ke|=4,Lm(e,y),oc(y,e),Tm(Ll,e.containerInfo),Ts=!!Ul,Ll=Ul=null,e.current=y,tc(e,y.alternate,y),py(),ke=u,M.p=s,D.T=n):e.current=y,rs?(rs=!1,aa=e,Li=a):_c(e,w),w=e.pendingLanes,w===0&&(_n=null),Sy(y.stateNode),Bt(e),t!==null)for(o=e.onRecoverableError,y=0;y<t.length;y++)w=t[y],o(w.value,{componentStack:w.stack});return(Li&3)!==0&&La(),w=e.pendingLanes,(a&4194218)!==0&&(w&42)!==0?e===Sl?ji++:(ji=0,Sl=e):ji=0,qi(0),null}function _c(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Si(t)))}function La(){if(aa!==null){var e=aa,t=kl;kl=0;var n=Bh(Li),a=D.T,o=M.p;try{if(M.p=32>n?32:n,D.T=null,aa===null)var s=!1;else{n=El,El=null;var u=aa,c=Li;if(aa=null,Li=0,(ke&6)!==0)throw Error(h(331));var y=ke;if(ke|=4,uc(u.current),rc(u,u.current,c,n),ke=y,qi(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(ai,u)}catch{}s=!0}return s}finally{M.p=o,D.T=a,_c(e,t)}}return!1}function Oc(e,t,n){t=yt(n,t),t=Wr(e.stateNode,t,2),e=vn(e,t,2),e!==null&&(oi(e,2),Bt(e))}function de(e,t,n){if(e.tag===3)Oc(e,e,n);else for(;t!==null;){if(t.tag===3){Oc(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_n===null||!_n.has(a))){e=yt(n,e),n=Id(2),a=vn(t,n,2),a!==null&&(Rd(n,a,t,e),oi(a,2),Bt(a));break}}t=t.return}}function Nl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Wm;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(bl=!0,o.add(n),e=$m.bind(null,e,t,n),t.then(e,e))}function $m(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(ae&n)===n&&(Se===4||Se===3&&(ae&62914560)===ae&&300>It()-Tl?(ke&2)===0&&Ya(e,0):pl|=n,za===ae&&(za=0)),Bt(e)}function Hc(e,t){t===0&&(t=Ch()),e=cn(e,t),e!==null&&(oi(e,t),Bt(e))}function Pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hc(e,n)}function eg(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),Hc(e,n)}function tg(e,t){return Xs(e,t)}var us=null,ja=null,Il=!1,ds=!1,Rl=!1,ia=0;function Bt(e){e!==ja&&e.next===null&&(ja===null?us=ja=e:ja=ja.next=e),ds=!0,Il||(Il=!0,ag(ng))}function qi(e,t){if(!Rl&&ds){Rl=!0;do for(var n=!1,a=us;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var u=a.suspendedLanes,c=a.pingedLanes;s=(1<<31-at(42|e)+1)-1,s&=o&~(u&~c),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(n=!0,Rc(a,s))}else s=ae,s=vo(a,a===ye?s:0),(s&3)===0||ii(a,s)||(n=!0,Rc(a,s));a=a.next}while(n);Rl=!1}}function ng(){ds=Il=!1;var e=0;ia!==0&&(dg()&&(e=ia),ia=0);for(var t=It(),n=null,a=us;a!==null;){var o=a.next,s=Nc(a,t);s===0?(a.next=null,n===null?us=o:n.next=o,o===null&&(ja=n)):(n=a,(e!==0||(s&3)!==0)&&(ds=!0)),a=o}qi(e)}function Nc(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var u=31-at(s),c=1<<u,y=o[u];y===-1?((c&n)===0||(c&a)!==0)&&(o[u]=Hy(c,t)):y<=t&&(e.expiredLanes|=c),s&=~c}if(t=ye,n=ae,n=vo(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&me===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Fs(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ii(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Fs(a),Bh(n)){case 2:case 8:n=Nh;break;case 32:n=wo;break;case 268435456:n=Ih;break;default:n=wo}return a=Ic.bind(null,e),n=Xs(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Fs(a),e.callbackPriority=2,e.callbackNode=null,2}function Ic(e,t){var n=e.callbackNode;if(La()&&e.callbackNode!==n)return null;var a=ae;return a=vo(e,e===ye?a:0),a===0?null:(wc(e,a,t),Nc(e,It()),e.callbackNode!=null&&e.callbackNode===n?Ic.bind(null,e):null)}function Rc(e,t){if(La())return null;wc(e,t,!0)}function ag(e){fg(function(){(ke&6)!==0?Xs(Hh,e):e()})}function Cl(){return ia===0&&(ia=Rh()),ia}function Cc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ao(""+e)}function Dc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ig(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var s=Cc((o[$e]||null).action),u=a.submitter;u&&(t=(t=u[$e]||null)?Cc(t.formAction):u.getAttribute("formAction"),t!==null&&(s=t,u=null));var c=new No("action","action",null,a,o);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ia!==0){var y=u?Dc(o,u):new FormData(o);jr(n,{pending:!0,data:y,method:o.method,action:s},null,y)}}else typeof s=="function"&&(c.preventDefault(),y=u?Dc(o,u):new FormData(o),jr(n,{pending:!0,data:y,method:o.method,action:s},s,y))},currentTarget:o}]})}}for(var Dl=0;Dl<Au.length;Dl++){var Ml=Au[Dl],og=Ml.toLowerCase(),sg=Ml[0].toUpperCase()+Ml.slice(1);Et(og,"on"+sg)}Et(vu,"onAnimationEnd"),Et(Tu,"onAnimationIteration"),Et(ku,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Em,"onTransitionRun"),Et(Sm,"onTransitionStart"),Et(Am,"onTransitionCancel"),Et(Eu,"onTransitionEnd"),ya("onMouseEnter",["mouseout","mouseover"]),ya("onMouseLeave",["mouseout","mouseover"]),ya("onPointerEnter",["pointerout","pointerover"]),ya("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zi));function Mc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],y=c.instance,w=c.currentTarget;if(c=c.listener,y!==s&&o.isPropagationStopped())break e;s=c,o.currentTarget=w;try{s(o)}catch(_){Jo(_)}o.currentTarget=null,s=y}else for(u=0;u<a.length;u++){if(c=a[u],y=c.instance,w=c.currentTarget,c=c.listener,y!==s&&o.isPropagationStopped())break e;s=c,o.currentTarget=w;try{s(o)}catch(_){Jo(_)}o.currentTarget=null,s=y}}}}function ee(e,t){var n=t[Qs];n===void 0&&(n=t[Qs]=new Set);var a=e+"__bubble";n.has(a)||(Bc(t,e,2,!1),n.add(a))}function Bl(e,t,n){var a=0;t&&(a|=4),Bc(n,e,a,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function xl(e){if(!e[cs]){e[cs]=!0,Yh.forEach(function(n){n!=="selectionchange"&&(rg.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Bl("selectionchange",!1,t))}}function Bc(e,t,n,a){switch(of(t)){case 2:var o=Dg;break;case 8:o=Mg;break;default:o=Kl}n=o.bind(null,t,n,e),o=void 0,!ir||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function zl(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(u===4)for(u=a.return;u!==null;){var y=u.tag;if((y===3||y===4)&&(y=u.stateNode.containerInfo,y===o||y.nodeType===8&&y.parentNode===o))return;u=u.return}for(;c!==null;){if(u=Yn(c),u===null)return;if(y=u.tag,y===5||y===6||y===26||y===27){a=s=u;continue e}c=c.parentNode}}a=a.return}Qh(function(){var w=s,_=nr(n),N=[];e:{var E=Su.get(e);if(E!==void 0){var A=No,x=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":A=em;break;case"focusin":x="focus",A=lr;break;case"focusout":x="blur",A=lr;break;case"beforeblur":case"afterblur":A=lr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=am;break;case vu:case Tu:case ku:A=Vy;break;case Eu:A=om;break;case"scroll":case"scrollend":A=Ly;break;case"wheel":A=rm;break;case"copy":case"cut":case"paste":A=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=tu;break;case"toggle":case"beforetoggle":A=hm}var W=(t&4)!==0,Ae=!W&&(e==="scroll"||e==="scrollend"),p=W?E!==null?E+"Capture":null:E;W=[];for(var g=w,T;g!==null;){var O=g;if(T=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||T===null||p===null||(O=li(g,p),O!=null&&W.push(Gi(g,O,T))),Ae)break;g=g.return}0<W.length&&(E=new A(E,x,null,n,_),N.push({event:E,listeners:W}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",E&&n!==tr&&(x=n.relatedTarget||n.fromElement)&&(Yn(x)||x[da]))break e;if((A||E)&&(E=_.window===_?_:(E=_.ownerDocument)?E.defaultView||E.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=w,x=x?Yn(x):null,x!==null&&(Ae=Z(x),W=x.tag,x!==Ae||W!==5&&W!==27&&W!==6)&&(x=null)):(A=null,x=w),A!==x)){if(W=Ph,O="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=tu,O="onPointerLeave",p="onPointerEnter",g="pointer"),Ae=A==null?E:ri(A),T=x==null?E:ri(x),E=new W(O,g+"leave",A,n,_),E.target=Ae,E.relatedTarget=T,O=null,Yn(_)===w&&(W=new W(p,g+"enter",x,n,_),W.target=T,W.relatedTarget=Ae,O=W),Ae=O,A&&x)t:{for(W=A,p=x,g=0,T=W;T;T=qa(T))g++;for(T=0,O=p;O;O=qa(O))T++;for(;0<g-T;)W=qa(W),g--;for(;0<T-g;)p=qa(p),T--;for(;g--;){if(W===p||p!==null&&W===p.alternate)break t;W=qa(W),p=qa(p)}W=null}else W=null;A!==null&&xc(N,E,A,W,!1),x!==null&&Ae!==null&&xc(N,Ae,x,W,!0)}}e:{if(E=w?ri(w):window,A=E.nodeName&&E.nodeName.toLowerCase(),A==="select"||A==="input"&&E.type==="file")var B=hu;else if(ru(E))if(uu)B=pm;else{B=wm;var $=gm}else A=E.nodeName,!A||A.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?w&&er(w.elementType)&&(B=hu):B=bm;if(B&&(B=B(e,w))){lu(N,B,n,_);break e}$&&$(e,E,w),e==="focusout"&&w&&E.type==="number"&&w.memoizedProps.value!=null&&Ps(E,"number",E.value)}switch($=w?ri(w):window,e){case"focusin":(ru($)||$.contentEditable==="true")&&(va=$,yr=w,gi=null);break;case"focusout":gi=yr=va=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,bu(N,n,_);break;case"selectionchange":if(km)break;case"keydown":case"keyup":bu(N,n,_)}var z;if(ur)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else pa?ou(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(nu&&n.locale!=="ko"&&(pa||j!=="onCompositionStart"?j==="onCompositionEnd"&&pa&&(z=Jh()):(dn=_,or="value"in dn?dn.value:dn.textContent,pa=!0)),$=fs(w,j),0<$.length&&(j=new eu(j,e,null,n,_),N.push({event:j,listeners:$}),z?j.data=z:(z=su(n),z!==null&&(j.data=z)))),(z=dm?cm(e,n):fm(e,n))&&(j=fs(w,"onBeforeInput"),0<j.length&&($=new eu("onBeforeInput","beforeinput",null,n,_),N.push({event:$,listeners:j}),$.data=z)),ig(N,e,w,n,_)}Mc(N,t)})}function Gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fs(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=li(e,n),o!=null&&a.unshift(Gi(e,o,s)),o=li(e,t),o!=null&&a.push(Gi(e,o,s))),e=e.return}return a}function qa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xc(e,t,n,a,o){for(var s=t._reactName,u=[];n!==null&&n!==a;){var c=n,y=c.alternate,w=c.stateNode;if(c=c.tag,y!==null&&y===a)break;c!==5&&c!==26&&c!==27||w===null||(y=w,o?(w=li(n,s),w!=null&&u.unshift(Gi(n,w,y))):o||(w=li(n,s),w!=null&&u.push(Gi(n,w,y)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var lg=/\r\n?/g,hg=/\u0000|\uFFFD/g;function zc(e){return(typeof e=="string"?e:""+e).replace(lg,`
`).replace(hg,"")}function Yc(e,t){return t=zc(t),zc(e)===t}function ys(){}function he(e,t,n,a,o,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ga(e,""+a);break;case"className":ko(e,"class",a);break;case"tabIndex":ko(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ko(e,n,a);break;case"style":Fh(e,a,s);break;case"data":if(t!=="object"){ko(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ao(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",o.name,o,null),he(e,t,"formEncType",o.formEncType,o,null),he(e,t,"formMethod",o.formMethod,o,null),he(e,t,"formTarget",o.formTarget,o,null)):(he(e,t,"encType",o.encType,o,null),he(e,t,"method",o.method,o,null),he(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ao(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=ys);break;case"onScroll":a!=null&&ee("scroll",e);break;case"onScrollEnd":a!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ao(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ee("beforetoggle",e),ee("toggle",e),To(e,"popover",a);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":To(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Yy.get(n)||n,To(e,n,a))}}function Yl(e,t,n,a,o,s){switch(n){case"style":Fh(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&ee("scroll",e);break;case"onScrollEnd":a!=null&&ee("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ys);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[$e]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):To(e,n,a)}}}function qe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var a=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var u=n[s];if(u!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:he(e,t,s,u,n,null)}}o&&he(e,t,"srcSet",n.srcSet,n,null),a&&he(e,t,"src",n.src,n,null);return;case"input":ee("invalid",e);var c=s=u=o=null,y=null,w=null;for(a in n)if(n.hasOwnProperty(a)){var _=n[a];if(_!=null)switch(a){case"name":o=_;break;case"type":u=_;break;case"checked":y=_;break;case"defaultChecked":w=_;break;case"value":s=_;break;case"defaultValue":c=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(h(137,t));break;default:he(e,t,a,_,n,null)}}Gh(e,s,c,y,w,u,o,!1),Eo(e);return;case"select":ee("invalid",e),a=u=s=null;for(o in n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case"value":s=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:he(e,t,o,c,n,null)}t=s,n=u,e.multiple=!!a,t!=null?ma(e,!!a,t,!1):n!=null&&ma(e,!!a,n,!0);return;case"textarea":ee("invalid",e),s=o=a=null;for(u in n)if(n.hasOwnProperty(u)&&(c=n[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":o=c;break;case"children":s=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:he(e,t,u,c,n,null)}Wh(e,a,o,s),Eo(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:he(e,t,y,a,n,null)}return;case"dialog":ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(a=0;a<Zi.length;a++)ee(Zi[a],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:he(e,t,w,a,n,null)}return;default:if(er(t)){for(_ in n)n.hasOwnProperty(_)&&(a=n[_],a!==void 0&&Yl(e,t,_,a,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null&&he(e,t,c,a,n,null))}function ug(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,u=null,c=null,y=null,w=null,_=null;for(A in n){var N=n[A];if(n.hasOwnProperty(A)&&N!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":y=N;default:a.hasOwnProperty(A)||he(e,t,A,null,a,N)}}for(var E in a){var A=a[E];if(N=n[E],a.hasOwnProperty(E)&&(A!=null||N!=null))switch(E){case"type":s=A;break;case"name":o=A;break;case"checked":w=A;break;case"defaultChecked":_=A;break;case"value":u=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(h(137,t));break;default:A!==N&&he(e,t,E,A,a,N)}}$s(e,u,c,y,w,_,s,o);return;case"select":A=u=c=E=null;for(s in n)if(y=n[s],n.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":A=y;default:a.hasOwnProperty(s)||he(e,t,s,null,a,y)}for(o in a)if(s=a[o],y=n[o],a.hasOwnProperty(o)&&(s!=null||y!=null))switch(o){case"value":E=s;break;case"defaultValue":c=s;break;case"multiple":u=s;default:s!==y&&he(e,t,o,s,a,y)}t=c,n=u,a=A,E!=null?ma(e,!!n,E,!1):!!a!=!!n&&(t!=null?ma(e,!!n,t,!0):ma(e,!!n,n?[]:"",!1));return;case"textarea":A=E=null;for(c in n)if(o=n[c],n.hasOwnProperty(c)&&o!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:he(e,t,c,null,a,o)}for(u in a)if(o=a[u],s=n[u],a.hasOwnProperty(u)&&(o!=null||s!=null))switch(u){case"value":E=o;break;case"defaultValue":A=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(h(91));break;default:o!==s&&he(e,t,u,o,a,s)}Vh(e,E,A);return;case"option":for(var x in n)if(E=n[x],n.hasOwnProperty(x)&&E!=null&&!a.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:he(e,t,x,null,a,E)}for(y in a)if(E=a[y],A=n[y],a.hasOwnProperty(y)&&E!==A&&(E!=null||A!=null))switch(y){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:he(e,t,y,E,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)E=n[W],n.hasOwnProperty(W)&&E!=null&&!a.hasOwnProperty(W)&&he(e,t,W,null,a,E);for(w in a)if(E=a[w],A=n[w],a.hasOwnProperty(w)&&E!==A&&(E!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(h(137,t));break;default:he(e,t,w,E,a,A)}return;default:if(er(t)){for(var Ae in n)E=n[Ae],n.hasOwnProperty(Ae)&&E!==void 0&&!a.hasOwnProperty(Ae)&&Yl(e,t,Ae,void 0,a,E);for(_ in a)E=a[_],A=n[_],!a.hasOwnProperty(_)||E===A||E===void 0&&A===void 0||Yl(e,t,_,E,a,A);return}}for(var p in n)E=n[p],n.hasOwnProperty(p)&&E!=null&&!a.hasOwnProperty(p)&&he(e,t,p,null,a,E);for(N in a)E=a[N],A=n[N],!a.hasOwnProperty(N)||E===A||E==null&&A==null||he(e,t,N,E,a,A)}var Ul=null,Ll=null;function ms(e){return e.nodeType===9?e:e.ownerDocument}function Uc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lc(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=null;function dg(){var e=window.event;return e&&e.type==="popstate"?e===ql?!1:(ql=e,!0):(ql=null,!1)}var jc=typeof setTimeout=="function"?setTimeout:void 0,cg=typeof clearTimeout=="function"?clearTimeout:void 0,qc=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof qc<"u"?function(e){return qc.resolve(null).then(e).catch(yg)}:jc;function yg(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),$i(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);$i(t)}function Gl(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Gl(n),Js(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function mg(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[si])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function gg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_t(e.nextSibling),e===null))return null;return e}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Gc(e,t,n){switch(t=ms(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}var kt=new Map,Vc=new Set;function gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var an=M.d;M.d={f:wg,r:bg,D:pg,C:vg,L:Tg,m:kg,X:Sg,S:Eg,M:Ag};function wg(){var e=an.f(),t=ls();return e||t}function bg(e){var t=ca(e);t!==null&&t.tag===5&&t.type==="form"?bd(t):an.r(e)}var Za=typeof document>"u"?null:document;function Wc(e,t,n){var a=Za;if(a&&typeof t=="string"&&t){var o=ct(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Vc.has(o)||(Vc.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),qe(t,"link",e),xe(t),a.head.appendChild(t)))}}function pg(e){an.D(e),Wc("dns-prefetch",e,null)}function vg(e,t){an.C(e,t),Wc("preconnect",e,t)}function Tg(e,t,n){an.L(e,t,n);var a=Za;if(a&&e&&t){var o='link[rel="preload"][as="'+ct(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ct(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ct(n.imageSizes)+'"]')):o+='[href="'+ct(e)+'"]';var s=o;switch(t){case"style":s=Ga(e);break;case"script":s=Va(e)}kt.has(s)||(e=K({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),kt.set(s,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(Vi(s))||t==="script"&&a.querySelector(Wi(s))||(t=a.createElement("link"),qe(t,"link",e),xe(t),a.head.appendChild(t)))}}function kg(e,t){an.m(e,t);var n=Za;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+ct(a)+'"][href="'+ct(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Va(e)}if(!kt.has(s)&&(e=K({rel:"modulepreload",href:e},t),kt.set(s,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wi(s)))return}a=n.createElement("link"),qe(a,"link",e),xe(a),n.head.appendChild(a)}}}function Eg(e,t,n){an.S(e,t,n);var a=Za;if(a&&e){var o=fa(a).hoistableStyles,s=Ga(e);t=t||"default";var u=o.get(s);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Vi(s)))c.loading=5;else{e=K({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kt.get(s))&&Vl(e,n);var y=u=a.createElement("link");xe(y),qe(y,"link",e),y._p=new Promise(function(w,_){y.onload=w,y.onerror=_}),y.addEventListener("load",function(){c.loading|=1}),y.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ws(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},o.set(s,u)}}}function Sg(e,t){an.X(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,o=Va(e),s=a.get(o);s||(s=n.querySelector(Wi(o)),s||(e=K({src:e,async:!0},t),(t=kt.get(o))&&Wl(e,t),s=n.createElement("script"),xe(s),qe(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function Ag(e,t){an.M(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,o=Va(e),s=a.get(o);s||(s=n.querySelector(Wi(o)),s||(e=K({src:e,async:!0,type:"module"},t),(t=kt.get(o))&&Wl(e,t),s=n.createElement("script"),xe(s),qe(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function Xc(e,t,n,a){var o=(o=ln.current)?gs(o):null;if(!o)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ga(n.href),n=fa(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ga(n.href);var s=fa(o).hoistableStyles,u=s.get(e);if(u||(o=o.ownerDocument||o,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,u),(s=o.querySelector(Vi(e)))&&!s._p&&(u.instance=s,u.state.loading=5),kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kt.set(e,n),s||_g(o,e,n,u.state))),t&&a===null)throw Error(h(528,""));return u}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Va(n),n=fa(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Ga(e){return'href="'+ct(e)+'"'}function Vi(e){return'link[rel="stylesheet"]['+e+"]"}function Fc(e){return K({},e,{"data-precedence":e.precedence,precedence:null})}function _g(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),qe(t,"link",n),xe(t),e.head.appendChild(t))}function Va(e){return'[src="'+ct(e)+'"]'}function Wi(e){return"script[async]"+e}function Kc(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ct(n.href)+'"]');if(a)return t.instance=a,xe(a),a;var o=K({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),xe(a),qe(a,"style",o),ws(a,n.precedence,e),t.instance=a;case"stylesheet":o=Ga(n.href);var s=e.querySelector(Vi(o));if(s)return t.state.loading|=4,t.instance=s,xe(s),s;a=Fc(n),(o=kt.get(o))&&Vl(a,o),s=(e.ownerDocument||e).createElement("link"),xe(s);var u=s;return u._p=new Promise(function(c,y){u.onload=c,u.onerror=y}),qe(s,"link",a),t.state.loading|=4,ws(s,n.precedence,e),t.instance=s;case"script":return s=Va(n.src),(o=e.querySelector(Wi(s)))?(t.instance=o,xe(o),o):(a=n,(o=kt.get(s))&&(a=K({},n),Wl(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),xe(o),qe(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ws(a,n.precedence,e));return t.instance}function ws(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)s=c;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var bs=null;function Qc(e,t,n){if(bs===null){var a=new Map,o=bs=new Map;o.set(n,a)}else o=bs,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[si]||s[Ze]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var u=s.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(s):a.set(u,[s])}}return a}function Jc(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Og(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $c(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Xi=null;function Hg(){}function Ng(e,t,n){if(Xi===null)throw Error(h(475));var a=Xi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Ga(n.href),s=e.querySelector(Vi(o));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=ps.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=s,xe(s);return}s=e.ownerDocument||e,n=Fc(n),(o=kt.get(o))&&Vl(n,o),s=s.createElement("link"),xe(s);var u=s;u._p=new Promise(function(c,y){u.onload=c,u.onerror=y}),qe(s,"link",n),t.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=ps.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ig(){if(Xi===null)throw Error(h(475));var e=Xi;return e.stylesheets&&e.count===0&&Xl(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ps(){if(this.count--,this.count===0){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vs=null;function Xl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vs=new Map,t.forEach(Rg,e),vs=null,ps.call(e))}function Rg(e,t){if(!(t.state.loading&4)){var n=vs.get(e);if(n)var a=n.get(null);else{n=new Map,vs.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var u=o[s];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),a=u)}a&&n.set(null,a)}o=t.instance,u=o.getAttribute("data-precedence"),s=n.get(u)||a,s===a&&n.set(null,o),n.set(u,o),this.count++,a=ps.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Fi={$$typeof:te,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Cg(e,t,n,a,o,s,u,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.hiddenUpdates=Ks(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Pc(e,t,n,a,o,s,u,c,y,w,_,N){return e=new Cg(e,t,n,u,c,y,w,N),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=Ar(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},ol(s),e}function ef(e){return e?(e=Ea,e):Ea}function tf(e,t,n,a,o,s){o=ef(o),a.context===null?a.context=o:a.pendingContext=o,a=pn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=vn(e,a,t),n!==null&&(Qe(n,e,t),Ri(n,e,t))}function nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fl(e,t){nf(e,t),(e=e.alternate)&&nf(e,t)}function af(e){if(e.tag===13){var t=cn(e,67108864);t!==null&&Qe(t,e,67108864),Fl(e,67108864)}}var Ts=!0;function Dg(e,t,n,a){var o=D.T;D.T=null;var s=M.p;try{M.p=2,Kl(e,t,n,a)}finally{M.p=s,D.T=o}}function Mg(e,t,n,a){var o=D.T;D.T=null;var s=M.p;try{M.p=8,Kl(e,t,n,a)}finally{M.p=s,D.T=o}}function Kl(e,t,n,a){if(Ts){var o=Ql(a);if(o===null)zl(e,t,a,ks,n),sf(e,a);else if(xg(o,e,t,n,a))a.stopPropagation();else if(sf(e,a),t&4&&-1<Bg.indexOf(e)){for(;o!==null;){var s=ca(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var u=zn(s.pendingLanes);if(u!==0){var c=s;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var y=1<<31-at(u);c.entanglements[1]|=y,u&=~y}Bt(s),(ke&6)===0&&(os=It()+500,qi(0))}}break;case 13:c=cn(s,2),c!==null&&Qe(c,s,2),ls(),Fl(s,2)}if(s=Ql(a),s===null&&zl(e,t,a,ks,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else zl(e,t,a,null,n)}}function Ql(e){return e=nr(e),Jl(e)}var ks=null;function Jl(e){if(ks=null,e=Yn(e),e!==null){var t=Z(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=fe(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ks=e,null}function of(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vy()){case Hh:return 2;case Nh:return 8;case wo:case Ty:return 32;case Ih:return 268435456;default:return 32}default:return 32}}var $l=!1,On=null,Hn=null,Nn=null,Ki=new Map,Qi=new Map,In=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function Ji(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=ca(t),t!==null&&af(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xg(e,t,n,a,o){switch(t){case"focusin":return On=Ji(On,e,t,n,a,o),!0;case"dragenter":return Hn=Ji(Hn,e,t,n,a,o),!0;case"mouseover":return Nn=Ji(Nn,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return Ki.set(s,Ji(Ki.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,Qi.set(s,Ji(Qi.get(s)||null,e,t,n,a,o)),!0}return!1}function rf(e){var t=Yn(e.target);if(t!==null){var n=Z(t);if(n!==null){if(t=n.tag,t===13){if(t=fe(n),t!==null){e.blockedOn=t,Iy(e.priority,function(){if(n.tag===13){var a=lt(),o=cn(n,a);o!==null&&Qe(o,n,a),Fl(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ql(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);tr=a,n.target.dispatchEvent(a),tr=null}else return t=ca(n),t!==null&&af(t),e.blockedOn=n,!1;t.shift()}return!0}function lf(e,t,n){Es(e)&&n.delete(t)}function zg(){$l=!1,On!==null&&Es(On)&&(On=null),Hn!==null&&Es(Hn)&&(Hn=null),Nn!==null&&Es(Nn)&&(Nn=null),Ki.forEach(lf),Qi.forEach(lf)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,zg)))}var As=null;function hf(e){As!==e&&(As=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){As===e&&(As=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Jl(a||n)===null)continue;break}var s=ca(n);s!==null&&(e.splice(t,3),t-=3,jr(s,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function $i(e){function t(y){return Ss(y,e)}On!==null&&Ss(On,e),Hn!==null&&Ss(Hn,e),Nn!==null&&Ss(Nn,e),Ki.forEach(t),Qi.forEach(t);for(var n=0;n<In.length;n++){var a=In[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<In.length&&(n=In[0],n.blockedOn===null);)rf(n),n.blockedOn===null&&In.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],s=n[a+1],u=o[$e]||null;if(typeof s=="function")u||hf(n);else if(u){var c=null;if(s&&s.hasAttribute("formAction")){if(o=s,u=s[$e]||null)c=u.formAction;else if(Jl(o)!==null)continue}else c=u.action;typeof c=="function"?n[a+1]=c:(n.splice(a,3),a-=3),hf(n)}}}function Pl(e){this._internalRoot=e}_s.prototype.render=Pl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,a=lt();tf(n,a,e,t,null,null)},_s.prototype.unmount=Pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&La(),tf(e.current,2,null,e,null,null),ls(),t[da]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=xh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&rf(e)}};var uf=i.version;if(uf!=="19.0.0")throw Error(h(527,uf,"19.0.0"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=I(t),e=e!==null?q(e):null,e=e===null?null:e.stateNode,e};var Yg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:D,findFiberByHostInstance:Yn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{ai=Os.inject(Yg),nt=Os}catch{}}return eo.createRoot=function(e,t){if(!d(e))throw Error(h(299));var n=!1,a="",o=_d,s=Od,u=Hd,c=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=Pc(e,1,!1,null,null,n,a,o,s,u,c,null),e[da]=t.current,xl(e.nodeType===8?e.parentNode:e),new Pl(t)},eo.hydrateRoot=function(e,t,n){if(!d(e))throw Error(h(299));var a=!1,o="",s=_d,u=Od,c=Hd,y=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),t=Pc(e,1,!0,t,n??null,a,o,s,u,c,y,w),t.context=ef(null),n=t.current,a=lt(),o=pn(a),o.callback=null,vn(n,o,a),t.current.lanes=a,oi(t,a),Bt(t),e[da]=t.current,xl(e),new _s(t)},eo.version="19.0.0",eo}var vf;function Fg(){if(vf)return nh.exports;vf=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),nh.exports=Xg(),nh.exports}var Kg=Fg(),Rs={},Qg=()=>{window.va||(window.va=function(...i){window.vaq||(window.vaq=[]),window.vaq.push(i)})},Jg="@vercel/analytics",$g="2.0.1";function Uf(){return typeof window<"u"}function Lf(){try{const l="production"}catch{}return"production"}function Pg(l="auto"){if(l==="auto"){window.vam=Lf();return}window.vam=l}function ew(){return(Uf()?window.vam:Lf())||"production"}function gh(){return ew()==="development"}function tw(l){return l.scriptSrc?Xa(l.scriptSrc):gh()?"https://va.vercel-scripts.com/v1/script.debug.js":l.basePath?Xa(`${l.basePath}/insights/script.js`):"/_vercel/insights/script.js"}function nw(l,i){var r;let h=l;if(i)try{h={...(r=JSON.parse(i))==null?void 0:r.analytics,...l}}catch{}Pg(h.mode);const d={sdkn:Jg+(h.framework?`/${h.framework}`:""),sdkv:$g};return h.disableAutoTrack&&(d.disableAutoTrack="1"),h.viewEndpoint&&(d.viewEndpoint=Xa(h.viewEndpoint)),h.eventEndpoint&&(d.eventEndpoint=Xa(h.eventEndpoint)),h.sessionEndpoint&&(d.sessionEndpoint=Xa(h.sessionEndpoint)),gh()&&h.debug===!1&&(d.debug="false"),h.dsn&&(d.dsn=h.dsn),h.endpoint?d.endpoint=h.endpoint:h.basePath&&(d.endpoint=Xa(`${h.basePath}/insights`)),{beforeSend:h.beforeSend,src:tw(h),dataset:d}}function Xa(l){return l.startsWith("http://")||l.startsWith("https://")||l.startsWith("/")?l:`/${l}`}function aw(l={debug:!0},i){var r;if(!Uf())return;const{beforeSend:h,src:d,dataset:f}=nw(l,i);if(Qg(),h&&((r=window.va)==null||r.call(window,"beforeSend",h)),document.head.querySelector(`script[src*="${d}"]`))return;const b=document.createElement("script");b.src=d;for(const[H,S]of Object.entries(f))b.dataset[H]=S;b.defer=!0,b.onerror=()=>{const H=gh()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${d}. ${H}`)},document.head.appendChild(b)}function iw({route:l,path:i}){var r;(r=window.va)==null||r.call(window,"pageview",{route:l,path:i})}function ow(){if(!(typeof process>"u"||typeof Rs>"u"))return Rs.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function sw(){if(!(typeof process>"u"||typeof Rs>"u"))return Rs.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function rw(l){return Be.useEffect(()=>{var i;l.beforeSend&&((i=window.va)==null||i.call(window,"beforeSend",l.beforeSend))},[l.beforeSend]),Be.useEffect(()=>{aw({framework:l.framework||"react",basePath:l.basePath??ow(),...l.route!==void 0&&{disableAutoTrack:!0},...l},l.configString??sw())},[]),Be.useEffect(()=>{l.route&&l.path&&iw({route:l.route,path:l.path})},[l.route,l.path]),null}/**
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
 */const lw=function(l){const i=[];let r=0;for(let h=0;h<l.length;h++){let d=l.charCodeAt(h);d<128?i[r++]=d:d<2048?(i[r++]=d>>6|192,i[r++]=d&63|128):(d&64512)===55296&&h+1<l.length&&(l.charCodeAt(h+1)&64512)===56320?(d=65536+((d&1023)<<10)+(l.charCodeAt(++h)&1023),i[r++]=d>>18|240,i[r++]=d>>12&63|128,i[r++]=d>>6&63|128,i[r++]=d&63|128):(i[r++]=d>>12|224,i[r++]=d>>6&63|128,i[r++]=d&63|128)}return i},hw=function(l){const i=[];let r=0,h=0;for(;r<l.length;){const d=l[r++];if(d<128)i[h++]=String.fromCharCode(d);else if(d>191&&d<224){const f=l[r++];i[h++]=String.fromCharCode((d&31)<<6|f&63)}else if(d>239&&d<365){const f=l[r++],b=l[r++],H=l[r++],S=((d&7)<<18|(f&63)<<12|(b&63)<<6|H&63)-65536;i[h++]=String.fromCharCode(55296+(S>>10)),i[h++]=String.fromCharCode(56320+(S&1023))}else{const f=l[r++],b=l[r++];i[h++]=String.fromCharCode((d&15)<<12|(f&63)<<6|b&63)}}return i.join("")},uw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(l,i){if(!Array.isArray(l))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,h=[];for(let d=0;d<l.length;d+=3){const f=l[d],b=d+1<l.length,H=b?l[d+1]:0,S=d+2<l.length,k=S?l[d+2]:0,R=f>>2,U=(f&3)<<4|H>>4;let V=(H&15)<<2|k>>6,te=k&63;S||(te=64,b||(V=64)),h.push(r[R],r[U],r[V],r[te])}return h.join("")},encodeString(l,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(l):this.encodeByteArray(lw(l),i)},decodeString(l,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(l):hw(this.decodeStringToByteArray(l,i))},decodeStringToByteArray(l,i){this.init_();const r=i?this.charToByteMapWebSafe_:this.charToByteMap_,h=[];for(let d=0;d<l.length;){const f=r[l.charAt(d++)],H=d<l.length?r[l.charAt(d)]:0;++d;const k=d<l.length?r[l.charAt(d)]:64;++d;const U=d<l.length?r[l.charAt(d)]:64;if(++d,f==null||H==null||k==null||U==null)throw Error();const V=f<<2|H>>4;if(h.push(V),k!==64){const te=H<<4&240|k>>2;if(h.push(te),U!==64){const ce=k<<6&192|U;h.push(ce)}}}return h},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let l=0;l<this.ENCODED_VALS.length;l++)this.byteToCharMap_[l]=this.ENCODED_VALS.charAt(l),this.charToByteMap_[this.byteToCharMap_[l]]=l,this.byteToCharMapWebSafe_[l]=this.ENCODED_VALS_WEBSAFE.charAt(l),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[l]]=l,l>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(l)]=l,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(l)]=l)}}},dw=function(l){try{return uw.decodeString(l,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};/**
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
 */class cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}wrapCallback(i){return(r,h)=>{r?this.reject(r):this.resolve(h),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(r):i(r,h))}}}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function yw(){const l=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof l=="object"&&l.id!==void 0}function mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gw(){const l=We();return l.indexOf("MSIE ")>=0||l.indexOf("Trident/")>=0}/**
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
 */const ww="FirebaseError";class Pa extends Error{constructor(i,r,h){super(r),this.code=i,this.customData=h,this.name=ww,Object.setPrototypeOf(this,Pa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(i,r,h){this.service=i,this.serviceName=r,this.errors=h}create(i,...r){const h=r[0]||{},d=`${this.service}/${i}`,f=this.errors[i],b=f?bw(f,h):"Error",H=`${this.serviceName}: ${b} (${d}).`;return new Pa(d,H,h)}}function bw(l,i){return l.replace(pw,(r,h)=>{const d=i[h];return d!=null?String(d):`<${h}?>`})}const pw=/\{\$([^}]+)}/g;function vw(l){for(const i in l)if(Object.prototype.hasOwnProperty.call(l,i))return!1;return!0}function Cs(l,i){if(l===i)return!0;const r=Object.keys(l),h=Object.keys(i);for(const d of r){if(!h.includes(d))return!1;const f=l[d],b=i[d];if(Tf(f)&&Tf(b)){if(!Cs(f,b))return!1}else if(f!==b)return!1}for(const d of h)if(!r.includes(d))return!1;return!0}function Tf(l){return l!==null&&typeof l=="object"}/**
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
 */function lo(l){const i=[];for(const[r,h]of Object.entries(l))Array.isArray(h)?h.forEach(d=>{i.push(encodeURIComponent(r)+"="+encodeURIComponent(d))}):i.push(encodeURIComponent(r)+"="+encodeURIComponent(h));return i.length?"&"+i.join("&"):""}function to(l){const i={};return l.replace(/^\?/,"").split("&").forEach(h=>{if(h){const[d,f]=h.split("=");i[decodeURIComponent(d)]=decodeURIComponent(f)}}),i}function no(l){const i=l.indexOf("?");if(!i)return"";const r=l.indexOf("#",i);return l.substring(i,r>0?r:void 0)}function Tw(l,i){const r=new kw(l,i);return r.subscribe.bind(r)}class kw{constructor(i,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{i(this)}).catch(h=>{this.error(h)})}next(i){this.forEachObserver(r=>{r.next(i)})}error(i){this.forEachObserver(r=>{r.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,r,h){let d;if(i===void 0&&r===void 0&&h===void 0)throw new Error("Missing Observer.");Ew(i,["next","error","complete"])?d=i:d={next:i,error:r,complete:h},d.next===void 0&&(d.next=sh),d.error===void 0&&(d.error=sh),d.complete===void 0&&(d.complete=sh);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch{}}),this.observers.push(d),f}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,i)}sendOne(i,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{r(this.observers[i])}catch(h){typeof console<"u"&&console.error&&console.error(h)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(l,i){if(typeof l!="object"||l===null)return!1;for(const r of i)if(r in l&&typeof l[r]=="function")return!0;return!1}function sh(){}/**
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
 */function Yt(l){return l&&l._delegate?l._delegate:l}class io{constructor(i,r,h){this.name=i,this.instanceFactory=r,this.type=h,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}}/**
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
 */class Sw{constructor(i,r){this.name=i,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const r=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(r)){const h=new cw;if(this.instancesDeferred.set(r,h),this.isInitialized(r)||this.shouldAutoInitialize())try{const d=this.getOrInitializeService({instanceIdentifier:r});d&&h.resolve(d)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(i){var r;const h=this.normalizeInstanceIdentifier(i==null?void 0:i.identifier),d=(r=i==null?void 0:i.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(h)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:h})}catch(f){if(d)return null;throw f}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(_w(i))try{this.getOrInitializeService({instanceIdentifier:oa})}catch{}for(const[r,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(r);try{const f=this.getOrInitializeService({instanceIdentifier:d});h.resolve(f)}catch{}}}}clearInstance(i=oa){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...i.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=oa){return this.instances.has(i)}getOptions(i=oa){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:r={}}=i,h=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(h))throw Error(`${this.name}(${h}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const d=this.getOrInitializeService({instanceIdentifier:h,options:r});for(const[f,b]of this.instancesDeferred.entries()){const H=this.normalizeInstanceIdentifier(f);h===H&&b.resolve(d)}return d}onInit(i,r){var h;const d=this.normalizeInstanceIdentifier(r),f=(h=this.onInitCallbacks.get(d))!==null&&h!==void 0?h:new Set;f.add(i),this.onInitCallbacks.set(d,f);const b=this.instances.get(d);return b&&i(b,d),()=>{f.delete(i)}}invokeOnInitCallbacks(i,r){const h=this.onInitCallbacks.get(r);if(h)for(const d of h)try{d(i,r)}catch{}}getOrInitializeService({instanceIdentifier:i,options:r={}}){let h=this.instances.get(i);if(!h&&this.component&&(h=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(i),options:r}),this.instances.set(i,h),this.instancesOptions.set(i,r),this.invokeOnInitCallbacks(h,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,h)}catch{}return h||null}normalizeInstanceIdentifier(i=oa){return this.component?this.component.multipleInstances?i:oa:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(l){return l===oa?void 0:l}function _w(l){return l.instantiationMode==="EAGER"}/**
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
 */class Ow{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const r=this.getProvider(i.name);if(r.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);r.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const r=new Sw(i,this);return this.providers.set(i,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(l){l[l.DEBUG=0]="DEBUG",l[l.VERBOSE=1]="VERBOSE",l[l.INFO=2]="INFO",l[l.WARN=3]="WARN",l[l.ERROR=4]="ERROR",l[l.SILENT=5]="SILENT"})(ge||(ge={}));const Hw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Nw=ge.INFO,Iw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Rw=(l,i,...r)=>{if(i<l.logLevel)return;const h=new Date().toISOString(),d=Iw[i];if(d)console[d](`[${h}]  ${l.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class jf{constructor(i){this.name=i,this._logLevel=Nw,this._logHandler=Rw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in ge))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?Hw[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...i),this._logHandler(this,ge.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...i),this._logHandler(this,ge.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...i),this._logHandler(this,ge.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...i),this._logHandler(this,ge.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...i),this._logHandler(this,ge.ERROR,...i)}}/**
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
 */class Cw{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Dw(r)){const h=r.getImmediate();return`${h.library}/${h.version}`}else return null}).filter(r=>r).join(" ")}}function Dw(l){const i=l.getComponent();return(i==null?void 0:i.type)==="VERSION"}const dh="@firebase/app",kf="0.7.17";/**
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
 */const wh=new jf("@firebase/app"),Mw="@firebase/app-compat",Bw="@firebase/analytics-compat",xw="@firebase/analytics",zw="@firebase/app-check-compat",Yw="@firebase/app-check",Uw="@firebase/auth",Lw="@firebase/auth-compat",jw="@firebase/database",qw="@firebase/database-compat",Zw="@firebase/functions",Gw="@firebase/functions-compat",Vw="@firebase/installations",Ww="@firebase/installations-compat",Xw="@firebase/messaging",Fw="@firebase/messaging-compat",Kw="@firebase/performance",Qw="@firebase/performance-compat",Jw="@firebase/remote-config",$w="@firebase/remote-config-compat",Pw="@firebase/storage",eb="@firebase/storage-compat",tb="@firebase/firestore",nb="@firebase/firestore-compat",ab="firebase",ib="9.6.7";/**
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
 */const qf="[DEFAULT]",ob={[dh]:"fire-core",[Mw]:"fire-core-compat",[xw]:"fire-analytics",[Bw]:"fire-analytics-compat",[Yw]:"fire-app-check",[zw]:"fire-app-check-compat",[Uw]:"fire-auth",[Lw]:"fire-auth-compat",[jw]:"fire-rtdb",[qw]:"fire-rtdb-compat",[Zw]:"fire-fn",[Gw]:"fire-fn-compat",[Vw]:"fire-iid",[Ww]:"fire-iid-compat",[Xw]:"fire-fcm",[Fw]:"fire-fcm-compat",[Kw]:"fire-perf",[Qw]:"fire-perf-compat",[Jw]:"fire-rc",[$w]:"fire-rc-compat",[Pw]:"fire-gcs",[eb]:"fire-gcs-compat",[tb]:"fire-fst",[nb]:"fire-fst-compat","fire-js":"fire-js",[ab]:"fire-js-all"};/**
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
 */const Ds=new Map,ch=new Map;function sb(l,i){try{l.container.addComponent(i)}catch(r){wh.debug(`Component ${i.name} failed to register with FirebaseApp ${l.name}`,r)}}function Ms(l){const i=l.name;if(ch.has(i))return wh.debug(`There were multiple attempts to register component ${i}.`),!1;ch.set(i,l);for(const r of Ds.values())sb(r,l);return!0}function Zf(l,i){return l.container.getProvider(i)}/**
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
 */const rb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},Bs=new ro("app","Firebase",rb);/**
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
 */class lb{constructor(i,r,h){this._isDeleted=!1,this._options=Object.assign({},i),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=h,this.container.addComponent(new io("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw Bs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=ib;function hb(l,i={}){typeof i!="object"&&(i={name:i});const r=Object.assign({name:qf,automaticDataCollectionEnabled:!1},i),h=r.name;if(typeof h!="string"||!h)throw Bs.create("bad-app-name",{appName:String(h)});const d=Ds.get(h);if(d){if(Cs(l,d.options)&&Cs(r,d.config))return d;throw Bs.create("duplicate-app",{appName:h})}const f=new Ow(h);for(const H of ch.values())f.addComponent(H);const b=new lb(l,r,f);return Ds.set(h,b),b}function ub(l=qf){const i=Ds.get(l);if(!i)throw Bs.create("no-app",{appName:l});return i}function Ka(l,i,r){var h;let d=(h=ob[l])!==null&&h!==void 0?h:l;r&&(d+=`-${r}`);const f=d.match(/\s|\//),b=i.match(/\s|\//);if(f||b){const H=[`Unable to register library "${d}" with version "${i}":`];f&&H.push(`library name "${d}" contains illegal characters (whitespace or "/")`),f&&b&&H.push("and"),b&&H.push(`version name "${i}" contains illegal characters (whitespace or "/")`),wh.warn(H.join(" "));return}Ms(new io(`${d}-version`,()=>({library:d,version:i}),"VERSION"))}/**
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
 */function db(l){Ms(new io("platform-logger",i=>new Cw(i),"PRIVATE")),Ka(dh,kf,l),Ka(dh,kf,"esm2017"),Ka("fire-js","")}db("");function bh(l,i){var r={};for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&i.indexOf(h)<0&&(r[h]=l[h]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,h=Object.getOwnPropertySymbols(l);d<h.length;d++)i.indexOf(h[d])<0&&Object.prototype.propertyIsEnumerable.call(l,h[d])&&(r[h[d]]=l[h[d]]);return r}function Gf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cb=Gf,Vf=new ro("auth","Firebase",Gf());/**
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
 */const Ef=new jf("@firebase/auth");function Hs(l,...i){Ef.logLevel<=ge.ERROR&&Ef.error(`Auth (${Ls}): ${l}`,...i)}/**
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
 */function Ot(l,...i){throw ph(l,...i)}function xt(l,...i){return ph(l,...i)}function fb(l,i,r){const h=Object.assign(Object.assign({},cb()),{[i]:r});return new ro("auth","Firebase",h).create(i,{appName:l.name})}function ph(l,...i){if(typeof l!="string"){const r=i[0],h=[...i.slice(1)];return h[0]&&(h[0].appName=l.name),l._errorFactory.create(r,...h)}return Vf.create(l,...i)}function G(l,i,...r){if(!l)throw ph(i,...r)}function on(l){const i="INTERNAL ASSERTION FAILED: "+l;throw Hs(i),new Error(i)}function rn(l,i){l||on(i)}/**
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
 */const Sf=new Map;function sn(l){rn(l instanceof Function,"Expected a class definition");let i=Sf.get(l);return i?(rn(i instanceof l,"Instance stored in cache mismatched with class"),i):(i=new l,Sf.set(l,i),i)}/**
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
 */function yb(l,i){const r=Zf(l,"auth");if(r.isInitialized()){const d=r.getImmediate(),f=r.getOptions();if(Cs(f,i??{}))return d;Ot(d,"already-initialized")}return r.initialize({options:i})}function mb(l,i){const r=(i==null?void 0:i.persistence)||[],h=(Array.isArray(r)?r:[r]).map(sn);i!=null&&i.errorMap&&l._updateErrorMap(i.errorMap),l._initializeWithPersistence(h,i==null?void 0:i.popupRedirectResolver)}/**
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
 */function fh(){var l;return typeof self<"u"&&((l=self.location)===null||l===void 0?void 0:l.href)||""}function gb(){return Af()==="http:"||Af()==="https:"}function Af(){var l;return typeof self<"u"&&((l=self.location)===null||l===void 0?void 0:l.protocol)||null}/**
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
 */function wb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gb()||yw()||"connection"in navigator)?navigator.onLine:!0}function bb(){if(typeof navigator>"u")return null;const l=navigator;return l.languages&&l.languages[0]||l.language||null}/**
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
 */class ho{constructor(i,r){this.shortDelay=i,this.longDelay=r,rn(r>i,"Short delay should be less than long delay!"),this.isMobile=fw()||mw()}get(){return wb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vh(l,i){rn(l.emulator,"Emulator should always be set here");const{url:r}=l.emulator;return i?`${r}${i.startsWith("/")?i.slice(1):i}`:r}/**
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
 */class Wf{static initialize(i,r,h){this.fetchImpl=i,r&&(this.headersImpl=r),h&&(this.responseImpl=h)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const vb=new ho(3e4,6e4);function ei(l,i){return l.tenantId&&!i.tenantId?Object.assign(Object.assign({},i),{tenantId:l.tenantId}):i}async function ha(l,i,r,h,d={}){return Xf(l,d,async()=>{let f={},b={};h&&(i==="GET"?b=h:f={body:JSON.stringify(h)});const H=lo(Object.assign({key:l.config.apiKey},b)).slice(1),S=await l._getAdditionalHeaders();return S["Content-Type"]="application/json",l.languageCode&&(S["X-Firebase-Locale"]=l.languageCode),Wf.fetch()(Ff(l,l.config.apiHost,r,H),Object.assign({method:i,headers:S,referrerPolicy:"no-referrer"},f))})}async function Xf(l,i,r){l._canInitEmulator=!1;const h=Object.assign(Object.assign({},pb),i);try{const d=new Tb(l),f=await Promise.race([r(),d.promise]);d.clearNetworkTimeout();const b=await f.json();if("needConfirmation"in b)throw rh(l,"account-exists-with-different-credential",b);if(f.ok&&!("errorMessage"in b))return b;{const H=f.ok?b.errorMessage:b.error.message,[S,k]=H.split(" : ");if(S==="FEDERATED_USER_ID_ALREADY_LINKED")throw rh(l,"credential-already-in-use",b);if(S==="EMAIL_EXISTS")throw rh(l,"email-already-in-use",b);const R=h[S]||S.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw fb(l,R,k);Ot(l,R)}}catch(d){if(d instanceof Pa)throw d;Ot(l,"network-request-failed")}}async function uo(l,i,r,h,d={}){const f=await ha(l,i,r,h,d);return"mfaPendingCredential"in f&&Ot(l,"multi-factor-auth-required",{_serverResponse:f}),f}function Ff(l,i,r,h){const d=`${i}${r}?${h}`;return l.config.emulator?vh(l.config,d):`${l.config.apiScheme}://${d}`}class Tb{constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((r,h)=>{this.timer=setTimeout(()=>h(xt(this.auth,"network-request-failed")),vb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rh(l,i,r){const h={appName:l.name};r.email&&(h.email=r.email),r.phoneNumber&&(h.phoneNumber=r.phoneNumber);const d=xt(l,i,h);return d.customData._tokenResponse=r,d}/**
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
 */async function kb(l,i){return ha(l,"POST","/v1/accounts:delete",i)}async function Eb(l,i){return ha(l,"POST","/v1/accounts:lookup",i)}/**
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
 */function ao(l){if(l)try{const i=new Date(Number(l));if(!isNaN(i.getTime()))return i.toUTCString()}catch{}}async function Sb(l,i=!1){const r=Yt(l),h=await r.getIdToken(i),d=Th(h);G(d&&d.exp&&d.auth_time&&d.iat,r.auth,"internal-error");const f=typeof d.firebase=="object"?d.firebase:void 0,b=f==null?void 0:f.sign_in_provider;return{claims:d,token:h,authTime:ao(lh(d.auth_time)),issuedAtTime:ao(lh(d.iat)),expirationTime:ao(lh(d.exp)),signInProvider:b||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function lh(l){return Number(l)*1e3}function Th(l){const[i,r,h]=l.split(".");if(i===void 0||r===void 0||h===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const d=dw(r);return d?JSON.parse(d):(Hs("Failed to decode base64 JWT payload"),null)}catch(d){return Hs("Caught error parsing JWT payload as JSON",d),null}}function Ab(l){const i=Th(l);return G(i,"internal-error"),G(typeof i.exp<"u","internal-error"),G(typeof i.iat<"u","internal-error"),Number(i.exp)-Number(i.iat)}/**
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
 */async function $a(l,i,r=!1){if(r)return i;try{return await i}catch(h){throw h instanceof Pa&&_b(h)&&l.auth.currentUser===l&&await l.auth.signOut(),h}}function _b({code:l}){return l==="auth/user-disabled"||l==="auth/user-token-expired"}/**
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
 */class Ob{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(i){var r;if(i){const h=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),h}else{this.errorBackoff=3e4;const d=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,d)}}schedule(i=!1){if(!this.isRunning)return;const r=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){i.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kf{constructor(i,r){this.createdAt=i,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(i){this.createdAt=i.createdAt,this.lastLoginAt=i.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xs(l){var i;const r=l.auth,h=await l.getIdToken(),d=await $a(l,Eb(r,{idToken:h}));G(d==null?void 0:d.users.length,r,"internal-error");const f=d.users[0];l._notifyReloadListener(f);const b=!((i=f.providerUserInfo)===null||i===void 0)&&i.length?Ib(f.providerUserInfo):[],H=Nb(l.providerData,b),S=l.isAnonymous,k=!(l.email&&f.passwordHash)&&!(H!=null&&H.length),R=S?k:!1,U={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:H,metadata:new Kf(f.createdAt,f.lastLoginAt),isAnonymous:R};Object.assign(l,U)}async function Hb(l){const i=Yt(l);await xs(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function Nb(l,i){return[...l.filter(h=>!i.some(d=>d.providerId===h.providerId)),...i]}function Ib(l){return l.map(i=>{var{providerId:r}=i,h=bh(i,["providerId"]);return{providerId:r,uid:h.rawId||"",displayName:h.displayName||null,email:h.email||null,phoneNumber:h.phoneNumber||null,photoURL:h.photoUrl||null}})}/**
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
 */async function Rb(l,i){const r=await Xf(l,{},async()=>{const h=lo({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:d,apiKey:f}=l.config,b=Ff(l,d,"/v1/token",`key=${f}`),H=await l._getAdditionalHeaders();return H["Content-Type"]="application/x-www-form-urlencoded",Wf.fetch()(b,{method:"POST",headers:H,body:h})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){G(i.idToken,"internal-error"),G(typeof i.idToken<"u","internal-error"),G(typeof i.refreshToken<"u","internal-error");const r="expiresIn"in i&&typeof i.expiresIn<"u"?Number(i.expiresIn):Ab(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,r)}async getToken(i,r=!1){return G(!this.accessToken||this.refreshToken,i,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(i,r){const{accessToken:h,refreshToken:d,expiresIn:f}=await Rb(i,r);this.updateTokensAndExpiration(h,d,Number(f))}updateTokensAndExpiration(i,r,h){this.refreshToken=r||null,this.accessToken=i||null,this.expirationTime=Date.now()+h*1e3}static fromJSON(i,r){const{refreshToken:h,accessToken:d,expirationTime:f}=r,b=new oo;return h&&(G(typeof h=="string","internal-error",{appName:i}),b.refreshToken=h),d&&(G(typeof d=="string","internal-error",{appName:i}),b.accessToken=d),f&&(G(typeof f=="number","internal-error",{appName:i}),b.expirationTime=f),b}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
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
 */function Cn(l,i){G(typeof l=="string"||typeof l>"u","internal-error",{appName:i})}class sa{constructor(i){var{uid:r,auth:h,stsTokenManager:d}=i,f=bh(i,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ob(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=h,this.stsTokenManager=d,this.accessToken=d.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new Kf(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(i){const r=await $a(this,this.stsTokenManager.getToken(this.auth,i));return G(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(i){return Sb(this,i)}reload(){return Hb(this)}_assign(i){this!==i&&(G(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(r=>Object.assign({},r)),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){return new sa(Object.assign(Object.assign({},this),{auth:i,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(i){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,r=!1){let h=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),h=!0),r&&await xs(this),await this.auth._persistUserIfCurrent(this),h&&this.auth._notifyListenersIfCurrent(this)}async delete(){const i=await this.getIdToken();return await $a(this,kb(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>Object.assign({},i)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,r){var h,d,f,b,H,S,k,R;const U=(h=r.displayName)!==null&&h!==void 0?h:void 0,V=(d=r.email)!==null&&d!==void 0?d:void 0,te=(f=r.phoneNumber)!==null&&f!==void 0?f:void 0,ce=(b=r.photoURL)!==null&&b!==void 0?b:void 0,Oe=(H=r.tenantId)!==null&&H!==void 0?H:void 0,ue=(S=r._redirectEventId)!==null&&S!==void 0?S:void 0,He=(k=r.createdAt)!==null&&k!==void 0?k:void 0,be=(R=r.lastLoginAt)!==null&&R!==void 0?R:void 0,{uid:ve,emailVerified:re,isAnonymous:Y,providerData:we,stsTokenManager:Xe}=r;G(ve&&Xe,i,"internal-error");const ht=oo.fromJSON(this.name,Xe);G(typeof ve=="string",i,"internal-error"),Cn(U,i.name),Cn(V,i.name),G(typeof re=="boolean",i,"internal-error"),G(typeof Y=="boolean",i,"internal-error"),Cn(te,i.name),Cn(ce,i.name),Cn(Oe,i.name),Cn(ue,i.name),Cn(He,i.name),Cn(be,i.name);const D=new sa({uid:ve,auth:i,email:V,emailVerified:re,displayName:U,isAnonymous:Y,photoURL:ce,phoneNumber:te,tenantId:Oe,stsTokenManager:ht,createdAt:He,lastLoginAt:be});return we&&Array.isArray(we)&&(D.providerData=we.map(K=>Object.assign({},K))),ue&&(D._redirectEventId=ue),D}static async _fromIdTokenResponse(i,r,h=!1){const d=new oo;d.updateFromServerResponse(r);const f=new sa({uid:r.localId,auth:i,stsTokenManager:d,isAnonymous:h});return await xs(f),f}}/**
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
 */class Qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,r){this.storage[i]=r}async _get(i){const r=this.storage[i];return r===void 0?null:r}async _remove(i){delete this.storage[i]}_addListener(i,r){}_removeListener(i,r){}}Qf.type="NONE";const _f=Qf;/**
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
 */function Ns(l,i,r){return`firebase:${l}:${i}:${r}`}class Qa{constructor(i,r,h){this.persistence=i,this.auth=r,this.userKey=h;const{config:d,name:f}=this.auth;this.fullUserKey=Ns(this.userKey,d.apiKey,f),this.fullPersistenceKey=Ns("persistence",d.apiKey,f),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){const i=await this.persistence._get(this.fullUserKey);return i?sa._fromJSON(this.auth,i):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,r,h="authUser"){if(!r.length)return new Qa(sn(_f),i,h);const d=(await Promise.all(r.map(async k=>{if(await k._isAvailable())return k}))).filter(k=>k);let f=d[0]||sn(_f);const b=Ns(h,i.config.apiKey,i.name);let H=null;for(const k of r)try{const R=await k._get(b);if(R){const U=sa._fromJSON(i,R);k!==f&&(H=U),f=k;break}}catch{}const S=d.filter(k=>k._shouldAllowMigration);return!f._shouldAllowMigration||!S.length?new Qa(f,i,h):(f=S[0],H&&await f._set(b,H.toJSON()),await Promise.all(r.map(async k=>{if(k!==f)try{await k._remove(b)}catch{}})),new Qa(f,i,h))}}/**
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
 */function Of(l){const i=l.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(Pf(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(Jf(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(ty(i))return"Blackberry";if(ny(i))return"Webos";if(kh(i))return"Safari";if((i.includes("chrome/")||$f(i))&&!i.includes("edge/"))return"Chrome";if(ey(i))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,h=l.match(r);if((h==null?void 0:h.length)===2)return h[1]}return"Other"}function Jf(l=We()){return/firefox\//i.test(l)}function kh(l=We()){const i=l.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function $f(l=We()){return/crios\//i.test(l)}function Pf(l=We()){return/iemobile/i.test(l)}function ey(l=We()){return/android/i.test(l)}function ty(l=We()){return/blackberry/i.test(l)}function ny(l=We()){return/webos/i.test(l)}function js(l=We()){return/iphone|ipad|ipod/i.test(l)}function Cb(l=We()){var i;return js(l)&&!!(!((i=window.navigator)===null||i===void 0)&&i.standalone)}function Db(){return gw()&&document.documentMode===10}function ay(l=We()){return js(l)||ey(l)||ny(l)||ty(l)||/windows phone/i.test(l)||Pf(l)}function Mb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function iy(l,i=[]){let r;switch(l){case"Browser":r=Of(We());break;case"Worker":r=`${Of(We())}-${l}`;break;default:r=l}const h=i.length?i.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ls}/${h}`}/**
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
 */class Bb{constructor(i,r){this.app=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(i,r){return r&&(this._popupRedirectResolver=sn(r)),this._initializationPromise=this.queue(async()=>{var h,d;if(!this._deleted&&(this.persistenceManager=await Qa.create(this,i),!this._deleted)){if(!((h=this._popupRedirectResolver)===null||h===void 0)&&h._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((d=this.currentUser)===null||d===void 0?void 0:d.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const i=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!i)){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i)}}async initializeCurrentUser(i){var r;let h=await this.assertedPersistence.getCurrentUser();if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,f=h==null?void 0:h._redirectEventId,b=await this.tryRedirectSignIn(i);(!d||d===f)&&(b!=null&&b.user)&&(h=b.user)}return h?h._redirectEventId?(G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===h._redirectEventId?this.directlySetCurrentUser(h):this.reloadAndSetCurrentUserOrClear(h)):this.reloadAndSetCurrentUserOrClear(h):this.directlySetCurrentUser(null)}async tryRedirectSignIn(i){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(i){try{await xs(i)}catch(r){if(r.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=bb()}async _delete(){this._deleted=!0}async updateCurrentUser(i){const r=i?Yt(i):null;return r&&G(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(i){if(!this._deleted)return i&&G(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(i){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(i))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(i){this._errorFactory=new ro("auth","Firebase",i())}onAuthStateChanged(i,r,h){return this.registerStateListener(this.authStateSubscription,i,r,h)}onIdTokenChanged(i,r,h){return this.registerStateListener(this.idTokenSubscription,i,r,h)}toJSON(){var i;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(i=this._currentUser)===null||i===void 0?void 0:i.toJSON()}}async _setRedirectUser(i,r){const h=await this.getOrInitRedirectPersistenceManager(r);return i===null?h.removeCurrentUser():h.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){const r=i&&sn(i)||this._popupRedirectResolver;G(r,this,"argument-error"),this.redirectPersistenceManager=await Qa.create(this,[sn(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){var r,h;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===i?this._currentUser:((h=this.redirectUser)===null||h===void 0?void 0:h._redirectEventId)===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const h=(r=(i=this.currentUser)===null||i===void 0?void 0:i.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==h&&(this.lastNotifiedUid=h,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,r,h,d){if(this._deleted)return()=>{};const f=typeof r=="function"?r:r.next.bind(r),b=this._isInitialized?Promise.resolve():this._initializationPromise;return G(b,this,"internal-error"),b.then(()=>f(this.currentUser)),typeof r=="function"?i.addObserver(r,h,d):i.addObserver(r)}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&(this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh()),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const i={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId),i}}function qs(l){return Yt(l)}class Hf{constructor(i){this.auth=i,this.observer=null,this.addObserver=Tw(r=>this.observer=r)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Eh{constructor(i,r){this.providerId=i,this.signInMethod=r}toJSON(){return on("not implemented")}_getIdTokenResponse(i){return on("not implemented")}_linkToIdToken(i,r){return on("not implemented")}_getReauthenticationResolver(i){return on("not implemented")}}async function xb(l,i){return ha(l,"POST","/v1/accounts:update",i)}/**
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
 */async function zb(l,i){return uo(l,"POST","/v1/accounts:signInWithPassword",ei(l,i))}async function Yb(l,i){return ha(l,"POST","/v1/accounts:sendOobCode",ei(l,i))}async function Ub(l,i){return Yb(l,i)}/**
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
 */async function Lb(l,i){return uo(l,"POST","/v1/accounts:signInWithEmailLink",ei(l,i))}async function jb(l,i){return uo(l,"POST","/v1/accounts:signInWithEmailLink",ei(l,i))}/**
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
 */class so extends Eh{constructor(i,r,h,d=null){super("password",h),this._email=i,this._password=r,this._tenantId=d}static _fromEmailAndPassword(i,r){return new so(i,r,"password")}static _fromEmailAndCode(i,r,h=null){return new so(i,r,"emailLink",h)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(i){const r=typeof i=="string"?JSON.parse(i):i;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(i){switch(this.signInMethod){case"password":return zb(i,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lb(i,{email:this._email,oobCode:this._password});default:Ot(i,"internal-error")}}async _linkToIdToken(i,r){switch(this.signInMethod){case"password":return xb(i,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jb(i,{idToken:r,email:this._email,oobCode:this._password});default:Ot(i,"internal-error")}}_getReauthenticationResolver(i){return this._getIdTokenResponse(i)}}/**
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
 */async function Ja(l,i){return uo(l,"POST","/v1/accounts:signInWithIdp",ei(l,i))}/**
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
 */const qb="http://localhost";class ra extends Eh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){const r=new ra(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(r.idToken=i.idToken),i.accessToken&&(r.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(r.nonce=i.nonce),i.pendingToken&&(r.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(r.accessToken=i.oauthToken,r.secret=i.oauthTokenSecret):Ot("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){const r=typeof i=="string"?JSON.parse(i):i,{providerId:h,signInMethod:d}=r,f=bh(r,["providerId","signInMethod"]);if(!h||!d)return null;const b=new ra(h,d);return b.idToken=f.idToken||void 0,b.accessToken=f.accessToken||void 0,b.secret=f.secret,b.nonce=f.nonce,b.pendingToken=f.pendingToken||null,b}_getIdTokenResponse(i){const r=this.buildRequest();return Ja(i,r)}_linkToIdToken(i,r){const h=this.buildRequest();return h.idToken=r,Ja(i,h)}_getReauthenticationResolver(i){const r=this.buildRequest();return r.autoCreate=!1,Ja(i,r)}buildRequest(){const i={requestUri:qb,returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),i.postBody=lo(r)}return i}}/**
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
 */function Zb(l){switch(l){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gb(l){const i=to(no(l)).link,r=i?to(no(i)).deep_link_id:null,h=to(no(l)).deep_link_id;return(h?to(no(h)).link:null)||h||r||i||l}class Sh{constructor(i){var r,h,d,f,b,H;const S=to(no(i)),k=(r=S.apiKey)!==null&&r!==void 0?r:null,R=(h=S.oobCode)!==null&&h!==void 0?h:null,U=Zb((d=S.mode)!==null&&d!==void 0?d:null);G(k&&R&&U,"argument-error"),this.apiKey=k,this.operation=U,this.code=R,this.continueUrl=(f=S.continueUrl)!==null&&f!==void 0?f:null,this.languageCode=(b=S.languageCode)!==null&&b!==void 0?b:null,this.tenantId=(H=S.tenantId)!==null&&H!==void 0?H:null}static parseLink(i){const r=Gb(i);try{return new Sh(r)}catch{return null}}}/**
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
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(i,r){return so._fromEmailAndPassword(i,r)}static credentialWithLink(i,r){const h=Sh.parseLink(r);return G(h,"argument-error"),so._fromEmailAndCode(i,h.code,h.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oy{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends oy{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends co{constructor(){super("facebook.com")}static credential(i){return ra._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return Dn.credentialFromTaggedObject(i)}static credentialFromError(i){return Dn.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return Dn.credential(i.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(i,r){return ra._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:i,accessToken:r})}static credentialFromResult(i){return Mn.credentialFromTaggedObject(i)}static credentialFromError(i){return Mn.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthIdToken:r,oauthAccessToken:h}=i;if(!r&&!h)return null;try{return Mn.credential(r,h)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class Bn extends co{constructor(){super("github.com")}static credential(i){return ra._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return Bn.credentialFromTaggedObject(i)}static credentialFromError(i){return Bn.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return Bn.credential(i.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class xn extends co{constructor(){super("twitter.com")}static credential(i,r){return ra._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:i,oauthTokenSecret:r})}static credentialFromResult(i){return xn.credentialFromTaggedObject(i)}static credentialFromError(i){return xn.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthAccessToken:r,oauthTokenSecret:h}=i;if(!r||!h)return null;try{return xn.credential(r,h)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function Vb(l,i){return uo(l,"POST","/v1/accounts:signUp",ei(l,i))}/**
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
 */class la{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,r,h,d=!1){const f=await sa._fromIdTokenResponse(i,h,d),b=Nf(h);return new la({user:f,providerId:b,_tokenResponse:h,operationType:r})}static async _forOperation(i,r,h){await i._updateTokensIfNecessary(h,!0);const d=Nf(h);return new la({user:i,providerId:d,_tokenResponse:h,operationType:r})}}function Nf(l){return l.providerId?l.providerId:"phoneNumber"in l?"phone":null}/**
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
 */class zs extends Pa{constructor(i,r,h,d){var f;super(r.code,r.message),this.operationType=h,this.user=d,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:i.name,tenantId:(f=i.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:r.customData._serverResponse,operationType:h}}static _fromErrorAndOperation(i,r,h,d){return new zs(i,r,h,d)}}function sy(l,i,r,h){return(i==="reauthenticate"?r._getReauthenticationResolver(l):r._getIdTokenResponse(l)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(l,f,i,h):f})}async function Wb(l,i,r=!1){const h=await $a(l,i._linkToIdToken(l.auth,await l.getIdToken()),r);return la._forOperation(l,"link",h)}/**
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
 */async function Xb(l,i,r=!1){const{auth:h}=l,d="reauthenticate";try{const f=await $a(l,sy(h,d,i,l),r);G(f.idToken,h,"internal-error");const b=Th(f.idToken);G(b,h,"internal-error");const{sub:H}=b;return G(l.uid===H,h,"user-mismatch"),la._forOperation(l,d,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&Ot(h,"user-mismatch"),f}}/**
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
 */async function ry(l,i,r=!1){const h="signIn",d=await sy(l,h,i),f=await la._fromIdTokenResponse(l,h,d);return r||await l._updateCurrentUser(f.user),f}async function Fb(l,i){return ry(qs(l),i)}/**
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
 */async function Kb(l,i,r){const h=Yt(l);await Ub(h,{requestType:"PASSWORD_RESET",email:i})}async function Qb(l,i,r){const h=qs(l),d=await Vb(h,{returnSecureToken:!0,email:i,password:r}),f=await la._fromIdTokenResponse(h,"signIn",d);return await h._updateCurrentUser(f.user),f}function Jb(l,i,r){return Fb(Yt(l),ti.credential(i,r))}/**
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
 */async function $b(l,i){return ha(l,"POST","/v1/accounts:update",i)}/**
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
 */async function Pb(l,{displayName:i,photoURL:r}){if(i===void 0&&r===void 0)return;const h=Yt(l),f={idToken:await h.getIdToken(),displayName:i,photoUrl:r,returnSecureToken:!0},b=await $a(h,$b(h.auth,f));h.displayName=b.displayName||null,h.photoURL=b.photoUrl||null;const H=h.providerData.find(({providerId:S})=>S==="password");H&&(H.displayName=h.displayName,H.photoURL=h.photoURL),await h._updateTokensIfNecessary(b)}/**
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
 */function ep(l,i){return Yt(l).setPersistence(i)}function tp(l,i,r,h){return Yt(l).onAuthStateChanged(i,r,h)}function np(l){return Yt(l).signOut()}const Ys="__sak";/**
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
 */class ly{constructor(i,r){this.storageRetriever=i,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(i,r){return this.storage.setItem(i,JSON.stringify(r)),Promise.resolve()}_get(i){const r=this.storage.getItem(i);return Promise.resolve(r?JSON.parse(r):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ap(){const l=We();return kh(l)||js(l)}const ip=1e3,op=10;class hy extends ly{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,r)=>this.onStorageEvent(i,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ap()&&Mb(),this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(const r of Object.keys(this.listeners)){const h=this.storage.getItem(r),d=this.localCache[r];h!==d&&i(r,d,h)}}onStorageEvent(i,r=!1){if(!i.key){this.forAllChangedKeys((b,H,S)=>{this.notifyListeners(b,S)});return}const h=i.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const b=this.storage.getItem(h);if(i.newValue!==b)i.newValue!==null?this.storage.setItem(h,i.newValue):this.storage.removeItem(h);else if(this.localCache[h]===i.newValue&&!r)return}const d=()=>{const b=this.storage.getItem(h);!r&&this.localCache[h]===b||this.notifyListeners(h,b)},f=this.storage.getItem(h);Db()&&f!==i.newValue&&i.newValue!==i.oldValue?setTimeout(d,op):d()}notifyListeners(i,r){this.localCache[i]=r;const h=this.listeners[i];if(h)for(const d of Array.from(h))d(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,r,h)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:r,newValue:h}),!0)})},ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(i,r){await super._set(i,r),this.localCache[i]=JSON.stringify(r)}async _get(i){const r=await super._get(i);return this.localCache[i]=JSON.stringify(r),r}async _remove(i){await super._remove(i),delete this.localCache[i]}}hy.type="LOCAL";const uy=hy;/**
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
 */class dy extends ly{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,r){}_removeListener(i,r){}}dy.type="SESSION";const Ah=dy;/**
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
 */function sp(l){return Promise.all(l.map(async i=>{try{return{fulfilled:!0,value:await i}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Zs{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){const r=this.receivers.find(d=>d.isListeningto(i));if(r)return r;const h=new Zs(i);return this.receivers.push(h),h}isListeningto(i){return this.eventTarget===i}async handleEvent(i){const r=i,{eventId:h,eventType:d,data:f}=r.data,b=this.handlersMap[d];if(!(b!=null&&b.size))return;r.ports[0].postMessage({status:"ack",eventId:h,eventType:d});const H=Array.from(b).map(async k=>k(r.origin,f)),S=await sp(H);r.ports[0].postMessage({status:"done",eventId:h,eventType:d,response:S})}_subscribe(i,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(r)}_unsubscribe(i,r){this.handlersMap[i]&&r&&this.handlersMap[i].delete(r),(!r||this.handlersMap[i].size===0)&&delete this.handlersMap[i],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
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
 */function _h(l="",i=10){let r="";for(let h=0;h<i;h++)r+=Math.floor(Math.random()*10);return l+r}/**
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
 */class rp{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,r,h=50){const d=typeof MessageChannel<"u"?new MessageChannel:null;if(!d)throw new Error("connection_unavailable");let f,b;return new Promise((H,S)=>{const k=_h("",20);d.port1.start();const R=setTimeout(()=>{S(new Error("unsupported_event"))},h);b={messageChannel:d,onMessage(U){const V=U;if(V.data.eventId===k)switch(V.data.status){case"ack":clearTimeout(R),f=setTimeout(()=>{S(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),H(V.data.response);break;default:clearTimeout(R),clearTimeout(f),S(new Error("invalid_response"));break}}},this.handlers.add(b),d.port1.addEventListener("message",b.onMessage),this.target.postMessage({eventType:i,eventId:k,data:r},[d.port2])}).finally(()=>{b&&this.removeMessageHandler(b)})}}/**
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
 */function zt(){return window}function lp(l){zt().location.href=l}/**
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
 */function cy(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function hp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function up(){var l;return((l=navigator==null?void 0:navigator.serviceWorker)===null||l===void 0?void 0:l.controller)||null}function dp(){return cy()?self:null}/**
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
 */const fy="firebaseLocalStorageDb",cp=1,Us="firebaseLocalStorage",yy="fbase_key";class fo{constructor(i){this.request=i}toPromise(){return new Promise((i,r)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Gs(l,i){return l.transaction([Us],i?"readwrite":"readonly").objectStore(Us)}function fp(){const l=indexedDB.deleteDatabase(fy);return new fo(l).toPromise()}function yh(){const l=indexedDB.open(fy,cp);return new Promise((i,r)=>{l.addEventListener("error",()=>{r(l.error)}),l.addEventListener("upgradeneeded",()=>{const h=l.result;try{h.createObjectStore(Us,{keyPath:yy})}catch(d){r(d)}}),l.addEventListener("success",async()=>{const h=l.result;h.objectStoreNames.contains(Us)?i(h):(h.close(),await fp(),i(await yh()))})})}async function If(l,i,r){const h=Gs(l,!0).put({[yy]:i,value:r});return new fo(h).toPromise()}async function yp(l,i){const r=Gs(l,!1).get(i),h=await new fo(r).toPromise();return h===void 0?null:h.value}function Rf(l,i){const r=Gs(l,!0).delete(i);return new fo(r).toPromise()}const mp=800,gp=3;class my{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(i){let r=0;for(;;)try{const h=await this._openDb();return await i(h)}catch(h){if(r++>gp)throw h;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(dp()),this.receiver._subscribe("keyChanged",async(i,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(i,r)=>["keyChanged"])}async initializeSender(){var i,r;if(this.activeServiceWorker=await hp(),!this.activeServiceWorker)return;this.sender=new rp(this.activeServiceWorker);const h=await this.sender._send("ping",{},800);h&&!((i=h[0])===null||i===void 0)&&i.fulfilled&&!((r=h[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){if(!(!this.sender||!this.activeServiceWorker||up()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const i=await yh();return await If(i,Ys,"1"),await Rf(i,Ys),!0}catch{}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,r){return this._withPendingWrite(async()=>(await this._withRetries(h=>If(h,i,r)),this.localCache[i]=r,this.notifyServiceWorker(i)))}async _get(i){const r=await this._withRetries(h=>yp(h,i));return this.localCache[i]=r,r}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){const i=await this._withRetries(d=>{const f=Gs(d,!1).getAll();return new fo(f).toPromise()});if(!i)return[];if(this.pendingWrites!==0)return[];const r=[],h=new Set;for(const{fbase_key:d,value:f}of i)h.add(d),JSON.stringify(this.localCache[d])!==JSON.stringify(f)&&(this.notifyListeners(d,f),r.push(d));for(const d of Object.keys(this.localCache))this.localCache[d]&&!h.has(d)&&(this.notifyListeners(d,null),r.push(d));return r}notifyListeners(i,r){this.localCache[i]=r;const h=this.listeners[i];if(h)for(const d of Array.from(h))d(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&this.stopPolling()}}my.type="LOCAL";const wp=my;/**
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
 */function bp(){var l,i;return(i=(l=document.getElementsByTagName("head"))===null||l===void 0?void 0:l[0])!==null&&i!==void 0?i:document}function pp(l){return new Promise((i,r)=>{const h=document.createElement("script");h.setAttribute("src",l),h.onload=i,h.onerror=d=>{const f=xt("internal-error");f.customData=d,r(f)},h.type="text/javascript",h.charset="UTF-8",bp().appendChild(h)})}function vp(l){return`__${l}${Math.floor(Math.random()*1e6)}`}new ho(3e4,6e4);/**
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
 */function Tp(l,i){return i?sn(i):(G(l._popupRedirectResolver,l,"argument-error"),l._popupRedirectResolver)}/**
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
 */class Oh extends Eh{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return Ja(i,this._buildIdpRequest())}_linkToIdToken(i,r){return Ja(i,this._buildIdpRequest(r))}_getReauthenticationResolver(i){return Ja(i,this._buildIdpRequest())}_buildIdpRequest(i){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(r.idToken=i),r}}function kp(l){return ry(l.auth,new Oh(l),l.bypassAuthState)}function Ep(l){const{auth:i,user:r}=l;return G(r,i,"internal-error"),Xb(r,new Oh(l),l.bypassAuthState)}async function Sp(l){const{auth:i,user:r}=l;return G(r,i,"internal-error"),Wb(r,new Oh(l),l.bypassAuthState)}/**
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
 */class gy{constructor(i,r,h,d,f=!1){this.auth=i,this.resolver=h,this.user=d,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(i,r)=>{this.pendingPromise={resolve:i,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(h){this.reject(h)}})}async onAuthEvent(i){const{urlResponse:r,sessionId:h,postBody:d,tenantId:f,error:b,type:H}=i;if(b){this.reject(b);return}const S={auth:this.auth,requestUri:r,sessionId:h,tenantId:f||void 0,postBody:d||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(H)(S))}catch(k){this.reject(k)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return kp;case"linkViaPopup":case"linkViaRedirect":return Sp;case"reauthViaPopup":case"reauthViaRedirect":return Ep;default:Ot(this.auth,"internal-error")}}resolve(i){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ap=new ho(2e3,1e4);class Fa extends gy{constructor(i,r,h,d,f){super(i,r,d,f),this.provider=h,this.authWindow=null,this.pollId=null,Fa.currentPopupAction&&Fa.currentPopupAction.cancel(),Fa.currentPopupAction=this}async executeNotNull(){const i=await this.execute();return G(i,this.auth,"internal-error"),i}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const i=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var i;return((i=this.authWindow)===null||i===void 0?void 0:i.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fa.currentPopupAction=null}pollUserCancellation(){const i=()=>{var r,h;if(!((h=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||h===void 0)&&h.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(i,Ap.get())};i()}}Fa.currentPopupAction=null;/**
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
 */const _p="pendingRedirect",hh=new Map;class Op extends gy{constructor(i,r,h=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,h),this.eventId=null}async execute(){let i=hh.get(this.auth._key());if(!i){try{const h=await Hp(this.resolver,this.auth)?await super.execute():null;i=()=>Promise.resolve(h)}catch(r){i=()=>Promise.reject(r)}hh.set(this.auth._key(),i)}return this.bypassAuthState||hh.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if(i.type==="signInViaRedirect")return super.onAuthEvent(i);if(i.type==="unknown"){this.resolve(null);return}if(i.eventId){const r=await this.auth._redirectUserForId(i.eventId);if(r)return this.user=r,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hp(l,i){const r=Ip(i),h=Np(l);if(!await h._isAvailable())return!1;const d=await h._get(r)==="true";return await h._remove(r),d}function Np(l){return sn(l._redirectPersistence)}function Ip(l){return Ns(_p,l.config.apiKey,l.name)}async function Rp(l,i,r=!1){const h=qs(l),d=Tp(h,i),b=await new Op(h,d,r).execute();return b&&!r&&(delete b.user._redirectEventId,await h._persistUserIfCurrent(b.user),await h._setRedirectUser(null,i)),b}/**
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
 */const Cp=10*60*1e3;class Dp{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let r=!1;return this.consumers.forEach(h=>{this.isEventForConsumer(i,h)&&(r=!0,this.sendToConsumer(i,h),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!Mp(i)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=i,r=!0)),r}sendToConsumer(i,r){var h;if(i.error&&!wy(i)){const d=((h=i.error.code)===null||h===void 0?void 0:h.split("auth/")[1])||"internal-error";r.onError(xt(this.auth,d))}else r.onAuthEvent(i)}isEventForConsumer(i,r){const h=r.eventId===null||!!i.eventId&&i.eventId===r.eventId;return r.filter.includes(i.type)&&h}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=Cp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(i))}saveEventToCache(i){this.cachedEventUids.add(Cf(i)),this.lastProcessedEventTime=Date.now()}}function Cf(l){return[l.type,l.eventId,l.sessionId,l.tenantId].filter(i=>i).join("-")}function wy({type:l,error:i}){return l==="unknown"&&(i==null?void 0:i.code)==="auth/no-auth-event"}function Mp(l){switch(l.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wy(l);default:return!1}}/**
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
 */async function Bp(l,i={}){return ha(l,"GET","/v1/projects",i)}/**
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
 */const xp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zp=/^https?/;async function Yp(l){if(l.config.emulator)return;const{authorizedDomains:i}=await Bp(l);for(const r of i)try{if(Up(r))return}catch{}Ot(l,"unauthorized-domain")}function Up(l){const i=fh(),{protocol:r,hostname:h}=new URL(i);if(l.startsWith("chrome-extension://")){const b=new URL(l);return b.hostname===""&&h===""?r==="chrome-extension:"&&l.replace("chrome-extension://","")===i.replace("chrome-extension://",""):r==="chrome-extension:"&&b.hostname===h}if(!zp.test(r))return!1;if(xp.test(l))return h===l;const d=l.replace(/\./g,"\\.");return new RegExp("^(.+\\."+d+"|"+d+")$","i").test(h)}/**
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
 */const Lp=new ho(3e4,6e4);function Df(){const l=zt().___jsl;if(l!=null&&l.H){for(const i of Object.keys(l.H))if(l.H[i].r=l.H[i].r||[],l.H[i].L=l.H[i].L||[],l.H[i].r=[...l.H[i].L],l.CP)for(let r=0;r<l.CP.length;r++)l.CP[r]=null}}function jp(l){return new Promise((i,r)=>{var h,d,f;function b(){Df(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{Df(),r(xt(l,"network-request-failed"))},timeout:Lp.get()})}if(!((d=(h=zt().gapi)===null||h===void 0?void 0:h.iframes)===null||d===void 0)&&d.Iframe)i(gapi.iframes.getContext());else if(!((f=zt().gapi)===null||f===void 0)&&f.load)b();else{const H=vp("iframefcb");return zt()[H]=()=>{gapi.load?b():r(xt(l,"network-request-failed"))},pp(`https://apis.google.com/js/api.js?onload=${H}`).catch(S=>r(S))}}).catch(i=>{throw Is=null,i})}let Is=null;function qp(l){return Is=Is||jp(l),Is}/**
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
 */const Zp=new ho(5e3,15e3),Gp="__/auth/iframe",Vp="emulator/auth/iframe",Wp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fp(l){const i=l.config;G(i.authDomain,l,"auth-domain-config-required");const r=i.emulator?vh(i,Vp):`https://${l.config.authDomain}/${Gp}`,h={apiKey:i.apiKey,appName:l.name,v:Ls},d=Xp.get(l.config.apiHost);d&&(h.eid=d);const f=l._getFrameworks();return f.length&&(h.fw=f.join(",")),`${r}?${lo(h).slice(1)}`}async function Kp(l){const i=await qp(l),r=zt().gapi;return G(r,l,"internal-error"),i.open({where:document.body,url:Fp(l),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wp,dontclear:!0},h=>new Promise(async(d,f)=>{await h.restyle({setHideOnLeave:!1});const b=xt(l,"network-request-failed"),H=zt().setTimeout(()=>{f(b)},Zp.get());function S(){zt().clearTimeout(H),d(h)}h.ping(S).then(S,()=>{f(b)})}))}/**
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
 */const Qp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jp=500,$p=600,Pp="_blank",ev="http://localhost";class Mf{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tv(l,i,r,h=Jp,d=$p){const f=Math.max((window.screen.availHeight-d)/2,0).toString(),b=Math.max((window.screen.availWidth-h)/2,0).toString();let H="";const S=Object.assign(Object.assign({},Qp),{width:h.toString(),height:d.toString(),top:f,left:b}),k=We().toLowerCase();r&&(H=$f(k)?Pp:r),Jf(k)&&(i=i||ev,S.scrollbars="yes");const R=Object.entries(S).reduce((V,[te,ce])=>`${V}${te}=${ce},`,"");if(Cb(k)&&H!=="_self")return nv(i||"",H),new Mf(null);const U=window.open(i||"",H,R);G(U,l,"popup-blocked");try{U.focus()}catch{}return new Mf(U)}function nv(l,i){const r=document.createElement("a");r.href=l,r.target=i;const h=document.createEvent("MouseEvent");h.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(h)}/**
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
 */const av="__/auth/handler",iv="emulator/auth/handler";function Bf(l,i,r,h,d,f){G(l.config.authDomain,l,"auth-domain-config-required"),G(l.config.apiKey,l,"invalid-api-key");const b={apiKey:l.config.apiKey,appName:l.name,authType:r,redirectUrl:h,v:Ls,eventId:d};if(i instanceof oy){i.setDefaultLanguage(l.languageCode),b.providerId=i.providerId||"",vw(i.getCustomParameters())||(b.customParameters=JSON.stringify(i.getCustomParameters()));for(const[S,k]of Object.entries({}))b[S]=k}if(i instanceof co){const S=i.getScopes().filter(k=>k!=="");S.length>0&&(b.scopes=S.join(","))}l.tenantId&&(b.tid=l.tenantId);const H=b;for(const S of Object.keys(H))H[S]===void 0&&delete H[S];return`${ov(l)}?${lo(H).slice(1)}`}function ov({config:l}){return l.emulator?vh(l,iv):`https://${l.authDomain}/${av}`}/**
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
 */const uh="webStorageSupport";class sv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ah,this._completeRedirectFn=Rp}async _openPopup(i,r,h,d){var f;rn((f=this.eventManagers[i._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const b=Bf(i,r,h,fh(),d);return tv(i,b,_h())}async _openRedirect(i,r,h,d){return await this._originValidation(i),lp(Bf(i,r,h,fh(),d)),new Promise(()=>{})}_initialize(i){const r=i._key();if(this.eventManagers[r]){const{manager:d,promise:f}=this.eventManagers[r];return d?Promise.resolve(d):(rn(f,"If manager is not set, promise should be"),f)}const h=this.initAndGetManager(i);return this.eventManagers[r]={promise:h},h.catch(()=>{delete this.eventManagers[r]}),h}async initAndGetManager(i){const r=await Kp(i),h=new Dp(i);return r.register("authEvent",d=>(G(d==null?void 0:d.authEvent,i,"invalid-auth-event"),{status:h.onEvent(d.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:h},this.iframes[i._key()]=r,h}_isIframeWebStorageSupported(i,r){this.iframes[i._key()].send(uh,{type:uh},d=>{var f;const b=(f=d==null?void 0:d[0])===null||f===void 0?void 0:f[uh];b!==void 0&&r(!!b),Ot(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){const r=i._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Yp(i)),this.originValidationPromises[r]}get _shouldInitProactively(){return ay()||kh()||js()}}const rv=sv;var xf="@firebase/auth",zf="0.19.9";/**
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
 */class lv{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){var i;return this.assertAuthConfigured(),((i=this.auth.currentUser)===null||i===void 0?void 0:i.uid)||null}async getToken(i){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(i)}:null}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;const r=this.auth.onIdTokenChanged(h=>{var d;i(((d=h)===null||d===void 0?void 0:d.stsTokenManager.accessToken)||null)});this.internalListeners.set(i,r),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();const r=this.internalListeners.get(i);r&&(this.internalListeners.delete(i),r(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hv(l){switch(l){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uv(l){Ms(new io("auth",(i,{options:r})=>{const h=i.getProvider("app").getImmediate(),{apiKey:d,authDomain:f}=h.options;return(b=>{G(d&&!d.includes(":"),"invalid-api-key",{appName:b.name}),G(!(f!=null&&f.includes(":")),"argument-error",{appName:b.name});const H={apiKey:d,authDomain:f,clientPlatform:l,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iy(l)},S=new Bb(b,H);return mb(S,r),S})(h)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,r,h)=>{i.getProvider("auth-internal").initialize()})),Ms(new io("auth-internal",i=>{const r=qs(i.getProvider("auth").getImmediate());return(h=>new lv(h))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ka(xf,zf,hv(l)),Ka(xf,zf,"esm2017")}/**
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
 */function dv(l=ub()){const i=Zf(l,"auth");return i.isInitialized()?i.getImmediate():yb(l,{popupRedirectResolver:rv,persistence:[wp,uy,Ah]})}uv("Browser");var cv="firebase",fv="9.6.7";/**
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
 */Ka(cv,fv,"app");const yv={apiKey:"AIzaSyDxxwwCO9U5WulqLwjRFVXGTpJB6_CBnGE",authDomain:"zara-chabby-login.firebaseapp.com",projectId:"zara-chabby-login",storageBucket:"zara-chabby-login.firebasestorage.app",messagingSenderId:"975107354460",appId:"1:975107354460:web:3cbb4cdcc6ab91ede31b99",measurementId:"G-9VHZGX9BN7"},mv=hb(yv),Wa=dv(mv),gv=`There is a kind of ripeness that arrives like a verdict. It does not ask. At thirty, it came for Zara-Chabby, and by morning the town of his birth had become a coat two sizes too small — something he had outgrown while sleeping. He did not pack. He did not explain. A man who needs a reason to leave has not yet left anything at all. He simply turned, and the forest opened for him like a door that had been waiting.
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
`,wv=["ZARACHABBY'S DOWNGOING","OF THE THRESHOLD OF MADASARA","THE SERMON OF THE BROKEN LEDGER","OF THE TIGHTROPE WALKER'S SHADOW","THE TROUBLED WORKER","OF WOMEN","OF THE FESTIVAL OF THE LAST MEN"];function tt({user:l,onBack:i,onSignOut:r,chapterText:h,chapterTitle:d,chapterNumber:f,bookLabel:b="Book 1",chapterList:H=wv,onNextChapter:S,nextChapterLabel:k}){const[R,U]=Be.useState(0),[V,te]=Be.useState("next"),ce=h.split(/\r?\n+/).map(re=>re.trim()).filter(Boolean),Oe=Math.max(1,Math.ceil(ce.length/3)),ue=Array.from({length:3},(re,Y)=>({label:`Page ${Y+1}`,paragraphs:ce.slice(Y*Oe,(Y+1)*Oe)})),He=Math.round((R+1)/ue.length*100),be=ue[R],ve=re=>{re<0||re>=ue.length||(te(re>R?"next":"previous"),U(re),window.scrollTo({top:0,behavior:"smooth"}))};return v.jsxs("main",{className:"chapter-page",children:[v.jsxs("nav",{className:"chapter-nav","aria-label":"Chapter navigation",children:[v.jsxs("button",{type:"button",className:"back-button",onClick:i,children:[v.jsx("span",{"aria-hidden":"true",children:"←"}),"Back to the book"]}),v.jsx("span",{className:"chapter-nav-title",children:"Thus spoke Zara Chabby"}),v.jsxs("div",{className:"chapter-account",children:[v.jsx("span",{children:l.email}),v.jsx("button",{type:"button",className:"text-button",onClick:r,children:"Sign out"})]})]}),v.jsxs("div",{className:"chapter-progress-wrap","aria-label":`Chapter progress: ${He}%`,children:[v.jsxs("div",{className:"chapter-progress-meta",children:[v.jsxs("span",{children:[b," / ",d]}),v.jsxs("span",{children:[He,"% read"]})]}),v.jsxs("progress",{className:"chapter-progress",value:He,max:"100",children:[He,"%"]})]}),v.jsxs("div",{className:"chapter-layout",children:[v.jsxs("aside",{className:"chapter-sidebar","aria-label":`${b} chapters`,children:[v.jsx("p",{className:"eyebrow",children:b}),v.jsx("h2",{children:d}),v.jsx("ol",{children:H.map((re,Y)=>{const we=Y===f-1,Xe=b==="Book 2"?Y<9:Y<7;return v.jsx("li",{className:we?"active":"",children:v.jsxs("button",{type:"button",disabled:!Xe,"aria-current":we?"page":void 0,children:[v.jsx("span",{children:String(Y+1).padStart(2,"0")}),re]})},re)})})]}),v.jsxs("article",{className:`chapter-reading page-${V}`,children:[v.jsxs("header",{className:"chapter-heading",children:[v.jsxs("p",{className:"chapter-kicker",children:[b," / Chapter ",f," / ",be.label]}),v.jsx("h1",{children:d}),v.jsx("p",{className:"chapter-deck",children:"A descent into the world below, where certainty begins to crack."}),v.jsx("div",{className:"chapter-rule","aria-hidden":"true"})]}),v.jsx("div",{className:"chapter-manuscript",children:be.paragraphs.map((re,Y)=>v.jsx("p",{className:Y===0?"chapter-lead":"",children:re},`${R}-${Y}`))}),v.jsxs("footer",{className:"chapter-footer",children:[v.jsxs("button",{type:"button",onClick:()=>ve(R-1),disabled:R===0,children:[v.jsx("span",{"aria-hidden":"true",children:"←"})," Previous page"]}),v.jsxs("span",{children:["Page ",R+1," of ",ue.length]}),v.jsxs("button",{type:"button",onClick:()=>ve(R+1),disabled:R===ue.length-1,children:["Next page ",v.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),R===ue.length-1&&S&&v.jsx("div",{className:"chapter-next-step",children:v.jsxs("button",{type:"button",className:"primary-book-button",onClick:S,children:["Continue to next chapter: ",k||"Next chapter",v.jsx("span",{"aria-hidden":"true",children:" →"})]})})]},R)]}),v.jsxs("footer",{className:"site-footer chapter-site-footer",children:[v.jsx("span",{children:"Thus spoke Zara Chabby"}),v.jsxs("span",{children:[b," / ",d]}),v.jsx("button",{type:"button",onClick:i,children:"Back to contents ↑"})]})]})}function bv({user:l,onBack:i,onSignOut:r}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,chapterText:gv,chapterTitle:"THE DOWN GOING",chapterNumber:1})}const pv=`The gates did not open. They did not creak, or groan, or make any of the small negotiations a door makes with the people who need it. They simply stood — vast, unbothered, absolute — forged from something older than the memory of forging. And they did not show Zara-Chabby the world on the other side. They showed him himself.
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




`;function vv({user:l,onBack:i,onSignOut:r}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,chapterText:pv,chapterTitle:"THE THRESHOLD OF MADASARA",chapterNumber:2})}const Tv=`Zara-Chabby entered the Great Square of Madasara the way a low sun enters a room through a window nobody meant to leave open — not asked for, not announced, simply impossible to keep out. Behind him walked those who had chosen him over the gate, no longer wanderers now but carriers of something already lit and burning low, waiting for wind.
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
`;function kv({user:l,onBack:i,onSignOut:r}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,chapterText:Tv,chapterTitle:"THE SERMON OF THE BROKEN LEDGER",chapterNumber:3})}const Ev=`The crowd gathered below the towers the way water gathers in a low place — not out of ambition, just gravity. They looked up, but they weren't watching the sky. They were watching for a man to fall, because his falling would prove they'd been right never to climb anything at all. Merchants with ink still staining their fingers stood shoulder to shoulder with priests whose robes carried the smell of old, recycled prayer, and for once the man of gold and the man of god wanted precisely the same thing: for the man on the wire to prove them right by dying.
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
`;function Sv({user:l,onBack:i,onSignOut:r}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,chapterText:Ev,chapterTitle:"THE TIGHTROPE WALKER'S SHADOW",chapterNumber:4})}const Av=`Zara-Chabby left his disciples behind and wandered into the woods, as he had many times before. But this time he went too deep — and there is a depth in every wandering that isn't measured in distance. It's measured in the silence that starts, eventually, to follow you home.
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
`;function _v({user:l,onBack:i,onSignOut:r}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,chapterText:Av,chapterTitle:"THE TROUBLED WORKER",chapterNumber:5})}const Ov=`She did not come with a crowd, and she did not come as a disciple. She simply arrived, the way weather arrives — announced by nothing but its own presence — and stood before Zara-Chabby as if she had been standing there her whole life, waiting only for him to notice.
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


`;function Hv({user:l,onBack:i,onSignOut:r}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,chapterText:Ov,chapterTitle:"OF WOMEN",chapterNumber:6})}const Nv=`Zara-Chabby came down again from the harsh clarity of the mountains into the soft, muffled breathing of the city, and it took him nearly an hour to understand what had changed. It wasn't the buildings. It wasn't the faces. It was the volume — Madasara had turned itself down, like a room deciding, all at once, to whisper.
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

`;function Iv({user:l,onBack:i,onSignOut:r}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,chapterText:Nv,chapterTitle:"OF THE FESTIVAL OF THE LAST MEN",chapterNumber:7})}const Rv=`A friend is not only the one who stands beside you in the bright hour when the crowd is listening. A friend is also the one who will strike you in the mouth of your delusion and not call it cruelty, because he knows a lie can wear a gentler face than a blade and still kill you just as surely.

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
`,Cv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Dv({user:l,onBack:i,onSignOut:r,onNextChapter:h}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,onNextChapter:h,nextChapterLabel:"THE MARKET OF EMPTY PRAISE",chapterText:Rv,chapterTitle:"THE FRONTAL STAB (A LESSON IN FRIENDSHIP)",chapterNumber:1,bookLabel:"Book 2",chapterList:Cv})}const Mv=`Zara-Chabby came upon the market at the hour when the sun was neither rising nor setting, only lingering — as if even the sky had grown so comfortable with delay that it saw no reason to commit to anything as final as dusk.
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
`,Bv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function xv({user:l,onBack:i,onSignOut:r,onNextChapter:h}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,onNextChapter:h,nextChapterLabel:"THE WEIGHT OF HONEST EYES",chapterText:Mv,chapterTitle:"THE MARKET OF EMPTY PRAISE",chapterNumber:2,bookLabel:"Book 2",chapterList:Bv})}const zv=`The forest was older than the kingdom and considerably less forgiving of it. Its trees stood in ranks like witnesses who had seen too much to be impressed by anything new, their trunks furrowed with the specific patience of things that measure time in centuries rather than seasons. The wind moved through them with a low, knowing voice, as if it were passing old confessions from root to root, unhurried, in no rush to be believed. There were birds, streams that flashed like polished steel between the stones, moss soft enough for saints or for sleepers. And yet none of it was innocent. This was not the beauty of a garden, tended and forgiving. It was the beauty of a judge who has stopped smiling at defendants, and therefore has finally stopped being able to lie to them.
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
`,Yv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Uv({user:l,onBack:i,onSignOut:r,onNextChapter:h}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,onNextChapter:h,chapterText:zv,chapterTitle:"THE WEIGHT OF HONEST EYES",chapterNumber:4,bookLabel:"Book 2",chapterList:Yv})}const Lv=`The mountain had a way of making liars out of clocks. Up where the wind did not ask permission before entering a man's lungs, time stopped pretending to be a staircase and became, instead, a wound that simply kept reopening. Zara-Chabby learned this early, though later than he should have — which is the particular mistake made by men still hoping, against all evidence, that life might improve through kindness alone. He had climbed because he believed, the way men believe before disappointment finally matures into wisdom, that the highest things ought to be met by the highest feelings — that truth should arrive with a choir behind it, that greatness should announce itself with bells, that the correct path would somehow feel flattering beneath the feet, the way a red carpet flatters whoever is permitted to walk across it.
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
`,jv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function qv({user:l,onBack:i,onSignOut:r,onNextChapter:h}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,onNextChapter:h,nextChapterLabel:"THE TRIAL OF THE TRUE FRIEND",chapterText:Lv,chapterTitle:"THE ENEMY WHO ELEVATES",chapterNumber:6,bookLabel:"Book 2",chapterList:jv})}const Zv=`Zara-Chabby had learned early, at some real cost to himself, that friendship is not a gift freely handed over like bread at a doorway. It is a crucible. You do not simply speak truth to the people who call themselves your friends. You test them — the way a blacksmith tests steel, driving it into the fire again and again, not because he hates the metal, but because he refuses to build a blade on a lie about its own strength. The lesson had not come to him from the people who were easy to love. It had come from the ones whose hearts were fragile, whose convictions ran an inch deep, whose comfort always, without fail, outweighed their courage.
It was in the valley of Kresha, under the long blue shadow of the peaks, that he first watched the disciple Arien fail this particular test — quietly, almost invisibly, the way a rope frays from the inside long before it finally snaps in front of an audience.
Arien had always been quick to laugh. Generous with his praise. Allergic, on some deep and well-defended level, to conflict of any kind. And Zara-Chabby had noticed, with a dismay he kept carefully off his face, how Arien flinched the instant the smallest true thing threatened someone's comfortable illusion of themselves. A casual lie, he tolerated. A convenient little deceit, he practically celebrated, the way you'd celebrate a shield that had never once actually been tested in battle. Zara-Chabby understood, watching him, that the boy did not hate honesty.
He feared it. And it is precisely the friend who fears honesty who must be handled with the least softness — because his weakness, left unchallenged, does not stay contained to himself. It spreads, the way rot spreads through a granary that everyone was too polite to inspect.

One evening, as the wind carried the first cold scent of snow down off the peaks, Arien came to Zara-Chabby with a story of betrayal. A fellow disciple had been caught deceiving the others for his own gain, and Arien — good, gentle, conflict-allergic Arien — had gone to him with a soft hand full of excuses and understanding, the way you'd go to a sick child rather than a grown man who had chosen, with open eyes, to lie.
Zara-Chabby listened. He noted the hesitation in Arien's voice, the almost invisible tremor in his hands.
"Arien," he said at last, quietly, "your compassion has become a cage. You are working very hard to preserve what is false, at the direct cost of what is real. Tell me something plainly — would you save a drowning man by handing him a stone instead of a rope, simply because the stone was closer, and easier to hand across, and asked nothing difficult of you in the giving?"
Arien's eyes went wide. He wanted to protest — wanted to say he had only meant to protect, only meant to spare a friend needless pain. But Zara-Chabby did not flinch, did not raise his voice by so much as a note, and did not offer him the comfort of softened language.
"Friendship," Zara-Chabby said, "is not a refuge for the weak. It is a crucible for those willing to stand in the fire together. Not everyone deserves your truth, Arien. Some men would genuinely rather drown holding a stone than be saved by a rope that reminds them, every second of the climb, that they needed saving at all. And the price of indulging that preference is not paid by them. It is paid, slowly and invisibly, by your own spirit."
The wind howled down through the valley as Arien wrestled with the shape of that. He had believed, all his life, that loyalty meant standing between a friend and the harshness of the world. He had believed kindness meant the careful, permanent avoidance of confrontation. Zara-Chabby's words went through both beliefs the way a well-honed blade goes through cloth — no drama in the passing, only a clean and total division of what had, a moment before, seemed like one whole piece of fabric.
"A true friend," Zara-Chabby went on, "welcomes the knife of honesty even while it's cutting him. He does not demand your comfort. He demands his own growth, and yours, in the same breath. And he must be able to bear the actual weight of your truth — because truth is weight, Arien. It has never once, in the history of the world, been light. If a man cannot carry it, he is not your friend. He is only your audience."

The test came a few days later, as tests, once summoned, generally do.
Arien found himself face to face with a companion who had deceived the others for petty gain — a small, grubby little theft, the kind men convince themselves doesn't count because the amount is so modest. The man pleaded for understanding. For silence. For the old, familiar comfort of being left unexposed. Arien felt the pull of it immediately — that same worn instinct to protect the illusion rather than the truth beneath it. He remembered Zara-Chabby's words, sharp and relentless as a blade left out in frost: not everyone deserves your truth.
He felt fear. He felt the old, sour tug of guilt. But underneath both of those, for the first time in his life, he felt something new — a tightening along his own spine, the specific sensation of a man discovering, almost by accident, that he actually has one.
He spoke.
Slowly at first, and then with gathering certainty, the way a fire gathers heat once the first log finally catches. Not with anger. Not with humiliation, which is only cruelty wearing honesty's coat. With plain, unflinching truth, delivered at a normal volume, to a grown man who had earned every word of it.
The friend resisted. Flinched. Cursed him, even, the way cornered men always reach first for insult, since insult is so much cheaper than accountability. Arien held. The moment stretched taut enough that the whole valley seemed, for a breath, to be weighing the outcome alongside him. And then, finally, the man withdrew — retreated back into the comfortable fog of his own excuses, and left Arien standing alone in the cold with nothing to show for it but the fact that he had, for once, not looked away.
He did not celebrate. He did not smile.
But something moved through his chest that he had never once felt before — a quiet, unglamorous exhilaration, the specific purity that only ever visits a man who has done the hardest right thing available to him and gotten nothing at all in return except the doing of it.
He understood, standing there, that truth is not a gift you hand out freely, the way you'd hand out sweets at a festival. It is not a weapon to swing at whoever irritates you either. It is a trial — and only the ones who have proven themselves worthy of surviving it should ever be trusted to carry it forward.

Zara-Chabby appeared then, the way he always seemed to — not as though he had walked there, but as though the mountain itself had simply exhaled him into view at the exact moment he was needed. He said nothing at first. He let the silence do the work praise never quite manages to do on its own. And when Arien finally turned to him, uncertain whether he had passed or merely survived, Zara-Chabby nodded once.
"Friendship," he said, "is earned in fire. Not everyone will endure it. Not everyone should be asked to try. But you — if you can go on bearing this particular weight — you will finally know who deserves your truth, and who does not. Guard that knowledge. Wield it carefully. And never once forget: it is the trial that reveals the friend. Never the friend who simply stays quiet and calls the staying loyalty."
Thus watched Zara-Chabby.

Arien did not fully understand the lesson that same night. He had passed his first trial, spoken the truth, watched a friend recoil from it exactly as predicted — but the echo of Zara-Chabby's sentence followed him long after the valley had gone dark and quiet: not everyone deserves your truth. That phrase became a kind of shadow companion, trailing him through corridors, over the cliff paths, across the frozen rivers that cut the valley into pieces every winter. It did not haunt him the way fear haunts a man. It followed him the way a summons follows — patient, and certain, and entirely unwilling to be ignored indefinitely.
Every companion who reached for comfort instead of clarity. Every disciple who valued being agreed with over being told the truth. Arien began, slowly, to feel the actual edge of that responsibility pressing into his own conscience, the way a blade you've only ever admired from across the room feels entirely different once someone finally places the handle in your palm.
The valley, over time, became a whole classroom built out of the human spirit. Arien watched how people reacted to criticism — how some tolerated contradiction the way good soil tolerates rain, and others cracked at the first drop, the way dry clay cracks under a sudden downpour it was never built to survive. He understood, at last, that loyalty is not measured in smiles exchanged or agreements nodded along to. It is measured entirely in a person's willingness to stand still and take the truth on the chin when it finally arrives. Some withdrew. Some resisted outright. Some collapsed straight into anger, which is so often simply fear wearing its loudest possible costume. But a true few remained — resilient, open, tempered rather than broken by the heat. These, and only these, Arien began to understand, were the ones worth calling friends.

One evening, as the sun dropped behind the jagged peaks and set the snow itself briefly on fire, Arien met Zara-Chabby on a high ridge above the valley. The old man looked out over the darkening land in silence, the wind pulling at his robes, the mountains sharp as broken teeth against a crimson sky.
"You have done well," Zara-Chabby said finally. "But understand — the trial does not end. People change. Illusions, once cleared away, have an irritating habit of growing right back, like weeds that never once asked your permission. Truth is not a gift you bestow lightly, and never has been. The whole world prefers lies, Arien, for the single simple reason that lies are light. You can carry a hundred of them without ever once breaking a sweat. Truth is weight, plain and heavy, and only the ones prepared to carry that weight are fit to walk beside you."
Arien felt a strange warmth move through him despite the cold. He understood, finally and completely, that friendship was never meant to be a comfort a man goes looking for. It is a responsibility a man agrees, with open eyes, to honor. To speak truth to another person is neither an act of kindness nor an act of cruelty — it is simple fidelity. Fidelity to reality first, and fidelity to yourself close behind it. The world, he now understood, is thick with people who would always rather have the illusion. And the courage to let them keep it, when they are not yet ready for anything else, is every bit as important as the courage to take it away from the ones who are.
"And if a man chooses to leave rather than carry it?" Arien asked quietly, into the wind.
"Then let him leave," Zara-Chabby said, without hesitation. "Better to walk a hard road alone than to stumble forward with a companion who is afraid of the light you're carrying. And here is the part almost no one tells you, Arien, because it sounds too much like loss to be spoken kindly: sometimes the truest friend you will ever have is found not by holding on tighter. It is found by finally releasing the ones who were never going to survive the weight of your honesty in the first place."
The wind carried his words down the slope, cold and exact, as if the mountains themselves had been listening in and quietly agreed with every syllable. Arien felt the lesson settle into him — not as a burden dropped onto his shoulders, but as a measurement, at last, of his own strength. He had faced the trial and passed it, not because he had triumphed over another man, but because he had triumphed over his own hesitation, his own fear, his own old and comfortable hunger for easy approval.
Zara-Chabby turned without another word and began the long descent toward the valley floor. Arien watched him go, understanding fully now that this particular trial was never going to finish — that life would keep sending new friends, new illusions, new small betrayals dressed up as misunderstandings. But he would meet every one of them differently from now on. He would speak the truth. And, harder still, he would learn to choose — carefully, deliberately, without apology — exactly who had earned the right to hear it from him.

In the days that followed, Arien began testing his new understanding in smaller ways. He did not confront with spectacle, the way a younger version of himself might have, hungry to prove the lesson had landed. He noticed instead — quietly, patiently — the friend who exaggerated a story slightly further each time it was told, purely for the warmth of a little extra admiration. The friend who hid a weakness behind a well-timed laugh, the way you'd hide a wound behind a clean bandage that fooled everyone but the man wearing it. And having noticed, he waited. Watched. Decided. Some he approached gently, offering the truth like a single measured strike rather than a wild swing. Others he left entirely untouched, understanding, at last, that they were simply not ready, and that forcing the lesson early only ever produces a wound, never a lesson.
He learned the deeper, quieter art of selection. Not every fault requires exposure. Not every small ill calls for intervention. There is real power in discernment, and there is genuine wisdom, too often mistaken for cowardice, in knowing when to hold your tongue. To speak hard truth to a man who cannot yet bear it is not virtue — it is violence, simply wearing virtue's clothing to get past the gate. To stay silent with a man who genuinely could bear it, out of nothing but your own discomfort, is not kindness either. It is only cowardice, dressed in kindness's better coat.

It was during one such quiet trial that Arien crossed paths with Leorin — a companion whose charm was matched only by his vanity, and whose laughter, Arien had begun to notice, arrived just a half-second too quickly whenever a conversation drifted anywhere near something real. Leorin had spent seasons speaking to Arien with easy warmth, trading secrets and half-formed dreams the way boys trade smooth stones they've found by a river. But Zara-Chabby's lessons had sharpened something in Arien that most people never bother sharpening at all: he had learned to see what lay directly beneath the laughter — the fear of exposure — and what lay just beneath the dreams — a quiet, well-disguised resistance to ever actually being challenged on any of them.
He watched Leorin. Noted every small hesitation, every practiced deflection. And he understood, the way you understand a storm is coming from the particular color the sky goes an hour before it arrives, that the moment for testing him had come.
"Leorin," Arien said one afternoon, as they walked along a brook gone still and silver with frost, "you claim courage constantly, and yet you flinch from your own reflection the moment it's held up honestly in front of you. You speak boldly enough at the fire. You do not act on a single thing you say once the fire's gone out. I will not go on shielding you from that any longer."
Leorin froze mid-step. His eyes searched Arien's face for the soft landing, the reassurance that this was only a joke that had run a little long. Arien did not give it to him.
"You hide behind that laugh of yours," he said, "because the actual weight of being honest terrifies you. You are afraid of being seen. Afraid of being known. Afraid, more than anything, of finally being held accountable for the life you keep claiming, loudly and often, that you're living."
The wind itself seemed to still, as if the mountains had leaned in a fraction closer to hear how this would land. Leorin's lips moved, searching for a denial, a charming deflection, anything at all that had worked on someone, somewhere, before. Nothing came. Arien's words had been too precise, too measured, too plainly unavoidable to charm his way around.
"I—" Leorin started, and faltered completely.
"Don't speak yet," Arien said, his voice low but entirely unshaking now. "Listen first. Feel the actual weight of what's just been said before you try to answer it. If you find you cannot carry it, I will not say another word on the matter, ever again, and we will go on exactly as we were. If you find that you can — then, and only then, do we go any further than this. This is the trial of friendship, Leorin. Not every companion survives it. And not every companion, if we're honest with each other for once, has earned the right to."
Leorin stood there trembling, the frozen brook suspended between them like the moment itself made visible. His eyes carried real fear — but underneath the fear, Arien saw something else beginning to surface too. Curiosity. The first flicker of a man recognizing something he had spent years successfully avoiding.

Arien understood then, standing on the bank of that half-frozen brook, that friendship was never a fixed and finished thing. It is a continual negotiation — truth on one side of the scale, tolerance on the other, and courage forever weighing against fragility somewhere in between. Some friends would never once be able to bear the honest weight of him, and those, in time, would have to be released, gently or otherwise. Others, once properly tested, might endure the fire completely — might even grow inside it — and become, at last, real allies of the spirit rather than merely pleasant company at a fire that never asked anything difficult of anyone.
And so Arien arrived, slowly and without fanfare, at the final and quietest part of Zara-Chabby's whole teaching: to truly love a friend, to actually protect him, to endure meaningfully alongside him — none of that has ever meant sparing him discomfort, or shielding him permanently from what is real. It means learning to measure. To wait. To discern, patiently, who is ready and who is not. And then, when the moment finally arrives, to act with the full clarity and courage of a man who has finally understood exactly what is at stake in either choice.
The trial, he now knew, does not end. It was never going to end. But it remained, as far as he could now see in any direction, the only road that led anywhere near the kind of friendship actually worth having.
As he turned from the brook and made his way back up toward the mountain path, Arien felt the whole weight of his own growth settle around his shoulders like a cloak finally cut to fit. He did not smile. He did not boast to anyone about what had happened at the brook that afternoon.
But somewhere low in his chest, a steady, well-tempered fire had caught and was holding — the kind of fire that would go on to shape his words, his choices, and every friendship still ahead of him, for as long as he had breath left to spend on any of it.
And somewhere beyond the ridge, unseen, exact as ever, Zara-Chabby watched.
Thus observed Zara-Chabby.
`,Gv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Vv({user:l,onBack:i,onSignOut:r,onNextChapter:h}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,onNextChapter:h,nextChapterLabel:"THE BIRTH OF THE HIGHER BOND",chapterText:Zv,chapterTitle:"THE TRIAL OF THE TRUE FRIEND",chapterNumber:7,bookLabel:"Book 2",chapterList:Gv})}const Wv=`There are many kinds of bond that men mistake for greatness. There is the bond of convenience, which keeps two people together because the weather is favorable and the road is short. There is the bond of need, which holds a hand to another because one is frightened and the other is useful. There is the bond of habit, which remains long after the fire has gone out because no one has yet had the courage to say that the fire was only ever a story told with some heat in it. None of these are the higher bond. None of them build a soul. None of them can survive the honest weather of time.

The higher bond is not the bond of comfort. It is not the bond of shared ambition chased in quiet agreement. It is not even the bond of loyalty spoken beautifully, in public, and then left to rot in private. The higher bond is born when two or more people discover that the truest thing in their lives is not their likeness, but their willingness to stand in the difficult truth of one another without collapsing from it.

Zara-Chabby had seen many men clinging to one another because they were afraid of loneliness. He had seen men pretending to fight together when all they were really doing was hand-passing blame. He had seen disciples gather around a cause, only to scatter the moment the cause required a cost. And he had learned, over years, that the strongest love in a man is not the love that is warmest, but the love that can bear the weather of reality without demanding that reality be disguised.

There are bonds that ask only for companionship.

Then there are bonds that ask for truth.

And then there are bonds that ask for ascent.

The higher bond is born in that third place.

It is born not when people agree on everything, but when they cannot bear to remain false to one another any longer. It is born when a man sees another’s weakness and does not wrap it in softness only to keep the peace. It is born when a man sees another’s hunger and does not flatter it away. It is born when a person becomes, for a time, the mirror to another person’s soul and refuses to lie in that mirror even when the image is ugly and the truth is inconvenient.

This is what Zara-Chabby had been trying to teach, in one form or another, all along. Not simply to be honest with the world. But to be honest with the men and women who stand beside you long enough to be wounded by your honesty and still choose to remain. That is where the higher bond is forged. Not in the first right answer, but in the first willingness to remain after the answer has made you uncomfortable.

In the valley below the mountain pass, among the men who had survived the long lessons of friction and correction, there came a season when no one had a clean story left to tell. They had all been stripped of their excuses, one by one. The ones who were proud had been humiliated. The ones who were fearful had been challenged. The ones who were proud of being gentle had been told, plainly, that gentleness was not the same thing as depth. And, for the first time, they stood in one another’s company without the cover of pretense.

There was a very particular silence in that valley.

Not silence born of comfort. Not silence born of fear. But silence born of recognition. They had seen one another too clearly to keep performing. They had heard enough truth to know that if they did not change, they would become only polished examples of the same old smallness.

It was in this silence that the higher bond began to take shape.

Zara-Chabby had been walking ahead of them for a long time, as all teachers do, and he had come to understand the difference between discipline and devotion. Discipline is what you impose on yourself when no one is watching. Devotion is what you bring to a person when what you are really seeing is not merely his virtues, but the possibility of his transformation. The higher bond is not merely devotion without discipline. It is devotion that has become disciplined enough to remain loyal to the truth, not just to the feeling.

A man may love another deeply and still be useless to him. He may adore his company and still constantly protect him from the very thing that would wake him up. He may call this tenderness. It is not tender. It is merely convenient. The higher bond avoids the convenience trap. It refuses to confuse preservation with care. It refuses to call shameful hesitation “wisdom.” It refuses to confuse a person’s need for comfort with a person’s rightful claim upon your silence.

There were men in the camp, not many but enough, who had become, in the course of their journeys, more than allies. They were witnesses. They were challengers. They were guardians of one another’s edges. When one stumbled, another did not immediately run to praise him into forgetting the stumble. When one rose too high in pride, another did not flatter him into a false maturity. Instead they did something harder: they remained in the room with his weakness and insisted, by the weight of their constancy, that he was not separate from the problem he had made for himself.

This was the birth of the higher bond.

It was not announced with thunder. It did not arrive in a ceremonial act. It arrived, as many sacred things do, in the slow, unglamorous accumulation of small acts of honest fidelity. One man admitted his fear. Another did not mock him. One man revealed his ambition. Another did not flatter it. One man confessed his strain. Another did not flee from it. And because the confession was met with neither contempt nor indulgence, the confession became a door rather than a wound.

The higher bond is not the bond of “I have seen your weakness and will now protect you from the world.” It is the bond of “I have seen your weakness and I will stand with you while you become more than it.” That difference is everything.

In the days that followed, the disciples began to notice how their sayings changed. They no longer spoke of one another in the polished language of victory. They spoke of one another in the honest language of friction and growth. They no longer admired each other only in the bright hours. They trusted each other in the dark hours, where all masks become transparent, and where people are tempted to hide even from themselves.

The first thing they came to understand was that a true friend does not always agree with you. But neither does he abandon you. He will not call your pride wisdom simply because it is your pride. He will not call your weakness innocence simply because you are afraid. He will not let you slink away from the work of becoming by telling you the work is too hard to ask of you. He will stand beside you while the work happens and will not pretend that the cost of it does not exist.

The second thing they came to understand was that to protect a friend is not always to rescue him from consequence. Sometimes protection means leaving him with the consequence long enough for him to learn what it costs to carry it. Sometimes the kindest thing you can do to a man is not to remove his burden, but to walk beside him while he learns how to bear it without becoming a lesser version of himself because of it.

And the third thing was this: the higher bond is strongest when it is made of mutual challenge rather than mutual applause. When the men around a person are willing to say, without malice, “This is not enough for the man you could become,” then the bond becomes not a comfort but a force. It moves the soul. It grows it. It cannot be reduced to sentiment because it is built in the place where sentiment is always least comfortable — in the place where truth hurts and remains true anyway.

The mountain gave them the perfect teacher for this lesson. It demanded of them that they climb, but never permitted them to pretend they were climbing without cost. On steep ledges, a man could not hide behind a good intention. He had to either keep his footing or fall. In the same way, the higher bond could never be sustained by easy phrases. It could only be sustained by honest endurance. A bond built on flattery is like a bridge made of reeds. A bond built on truth is like a bridge made of stone: ugly perhaps, stubborn certainly, but able to carry weight across distances that would otherwise never be crossed.

It was at the summit of a particularly long climb that Zara-Chabby finally spoke plainly to them, not as a preacher but as one who had learned the language of painful fidelity.

“You have tried, all of you, to love one another without being transformed by one another,” he said. “That is not love. That is a pleasant arrangement. A true bond is not meant to leave you unchanged. If it were, it would have no use in a world full of men who lie to themselves in the dark and call it peace.”

There were no cheers at that. There was no applause. The mountain made it impossible to pretend the moment had been grand. It was simply true, and therefore as severe as the wind itself.

One by one, the men looked into the faces of the others and saw what they had not been willing to see before: not weakness only, but the deeper possibility of using one another to become stronger, kinder, more exact, more alive. And when they saw it, they did not rush to comfort it. They accepted it. They stood inside it. They let the burden of it be real.

That is the beginning of the higher bond.

Not a bond made of likeness.

Not a bond made of agreement.

A bond made of common purpose under the weight of truth.

A bond weak enough to fail under applause and strong enough to endure under fire.

From that point on, when one among them stumbled, another did not move away. When one fell into vanity, another did not flatter him into a heroic delusion. When one confessed fear, another did not turn it into gossip or excuse. They carried one another into deeper honesty, and in doing so they carried one another toward the very thing the world rarely recognizes when it sees men walking together:

not romance,
not comfort,
not sentiment,
not safety,

but transformation.

That is the higher bond.

It is love with a spine.

It is loyalty that cannot rest in the easy lie.

It is fraternity in the truest and most demanding sense — the kind that leaves a man more truthful than he was before, and willing, at last, to become both more difficult and more whole.

Zara-Chabby watched them after that and saw the difference at once. They no longer spoke of one another as if they were ornaments to be displayed. They spoke of one another as if they were unfinished stones being shaped together in a single hand. And the shape, though not yet complete, was unmistakably higher than anything that had come before.

He did not say this aloud. He did not need to. The mountain had already become their witness.

The higher bond is not a grand gesture. It is a long, exact, and often painful agreement to remain truthful when truth is expensive. It is the decision to keep each other honest without stripping each other of dignity. It is the refusal to let comfort rob a friend of his future.

And when that bond is found, it cannot be mistaken for anything else.

It is not merely companionship.

It is not merely affection.

It is a sacred form of accountability.

One that reveals the soul to itself through another soul.

And the soul, once so revealed, no longer has the right to hide.

Thus spoke Zara-Chabby.
`,Xv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Fv({user:l,onBack:i,onSignOut:r,onNextChapter:h}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,onNextChapter:h,nextChapterLabel:"THE LAST FRIEND",chapterText:Wv,chapterTitle:"THE BIRTH OF THE HIGHER BOND",chapterNumber:8,bookLabel:"Book 2",chapterList:Xv})}const Kv=`The morning came like a held breath finally released.
For three days Zara-Chabby had not spoken. He sat by the stream — the same stream that had run past his cave longer than any living memory could account for — and something about him had changed in a way none of his disciples could name precisely, only feel. The water seemed brighter than it had any right to be in early spring. The stones along the bank seemed softer underfoot. And the old man himself, the one they had taken to calling, half in reverence and half in exhausted affection, the teacher of teachers, the friend of no one and therefore of everyone — he had not moved. Not to eat. Not to drink. Not, as far as anyone could tell, to blink.
The disciples gathered in loose clusters along the bank, the way people gather near a fire they aren't sure is safe to sit closer to. There were forty-seven of them now. Some had walked for months to arrive here. Some lived in the small huts he had helped raise with his own hands, years earlier, when his hands still shook from ordinary things like cold and hunger rather than whatever this was. Some were new, their eyes still sharp with the particular hunger only unanswered questions produce. Some were old enough that their faces had gone as creased as the streambed itself, their old questions long since burned down to something quieter by the slow fire of his silence.
Velen stood closest to the water. His beard had gone entirely grey since the first time he'd stood in exactly this spot, young and furious with questions. His hands, once quick to gesture through every sentence, now hung still at his sides, the way a man's hands go still once he has finally run out of things he needs to prove. Beside him stood Ashok — rounder in the belly now, bald at the crown — but his eyes, those deep, unhurried pools, had only gone deeper with the years, the way a well goes deeper the longer it's drawn from honestly.
"Three days," Velen said, mostly to the water.
"Three days," Ashok agreed.
Behind them, a younger disciple named Mira tugged at Velen's sleeve. "Is he ill? Should we bring him milk? Honey, at least?"
Velen didn't turn. "He isn't ill, Mira. He's preparing."
"Preparing for what?"
It was Ashok who answered, his voice a low rumble that seemed to come up out of the ground rather than out of his chest. "For the last teaching."
Mira frowned. "The last? But there are so many who haven't heard him yet. So much none of us understand."
Velen offered her a thin, sad smile — the kind of smile a man gives when he has finally understood something and finds he isn't especially happy about it. "That's precisely why it's the last one, Mira. Because understanding was never actually the point."

At the seventh hour of the third day, just as the sun began to tilt toward the western ridge, Zara-Chabby's chest rose once — not a breath exactly. A signal.
He stood.
There was no stiffness in it. No slowness. He rose from that rock the way water finds its own level — effortlessly, and with the particular inevitability of something that was never really deciding to move at all, only finally arriving at the shape it had been the whole time. His robe was the same rough brown cloth he had worn for decades. His feet were bare. His hair, gone entirely white, hung past his shoulders. But his face was not the face of an old man that morning. It was the face of a mountain that had, after a very long silence of its own, decided to speak.
He turned — not toward Velen, not toward Ashok, the two who had earned, by any ordinary accounting, the first of his attention. He turned instead toward the farthest disciple in the circle, the one who had arrived only the day before: a girl of sixteen named Tana, who had run from a village that had already chosen, without asking her, the man she was meant to marry. She trembled where she stood. Not from the cold.
"Tana," he said. His voice was not loud. It didn't need to be. The stream itself seemed to lean closer to hear it. "Why did you come here?"
She swallowed hard. "To learn about friendship."
"Ah." He nodded slowly. "And have you had friends?"
"Once. A girl. We braided each other's hair. We swore we'd die for one another."
"And?"
"She married. I ran. She sent no word. I sent none either. And now I'm here."
Zara-Chabby took one step toward her. The grass didn't bend beneath his foot. The stream didn't change its song. But something in the air shifted — the way air shifts in the last moment before a storm, when the birds go quiet all at once and every leaf turns its pale underside skyward without being told to.
"You've come," he said, "to the right place. But not for the reason you think you have. You didn't come here to learn what friendship is, Tana. You came to unlearn everything you've already convinced yourself it must be."

He walked then, slowly and with real deliberateness, to the center of the great stone circle the disciples had built years earlier — each stone set by hand, each one kissed, by tradition, before it was placed in the earth. It was not an altar. It was what they called a listening bowl. When Zara-Chabby stood at its center, his voice did not echo outward the way a voice echoes in a canyon. It simply arrived in every ear at once, as though the air itself had, for the length of his speaking, become a single shared nerve.
"Today," he said, "I will teach you the friendship that ends all friendships. Not because it destroys them. Because it finally fulfills them."
A murmur moved through the crowd. Some faces lit with something close to excitement. Others darkened, unmistakably, with fear.
Velen stepped forward. "Master, we have sat at your feet for years. You've taught us of the stream, of the soul, of the light that does not deem. You've handed us riddles that cracked our minds open the way frost cracks a stone. What's left after all of that? What could possibly still be last?"
Zara-Chabby smiled — not gently, and not kindly. The smile of a man about to set fire, calmly and without apology, to everything you have spent years building.
"You believe you have learned something," he said. "You haven't. You've only collected. You've gathered my words the way a child gathers pebbles into a pouch. You've repeated them to one another around your fires. You've felt wise, saying them back. But wisdom was never a collection, Velen. Wisdom is a burning. And today, I intend to burn your pouch. I will burn your pebbles. I will burn every comfortable certainty you've built out of my own sentences. And when the ash finally settles, you will see what has been standing there the entire time, underneath all of it. The Last Friend."

Mira raised her hand the way a child raises a hand in a village schoolroom. Zara-Chabby nodded to her.
"Master, forgive me, but — you speak of burning. Of ending things. Isn't friendship supposed to be gentle? Isn't it meant to be a shelter from the storm, rather than the storm itself?"
Zara-Chabby crossed to her, close enough that she could see the fine cracks in his lips, the small rivers of time worked into the skin around his eyes. He smelled of earth, and of something underneath the earth — something like the air just after lightning has passed through it.
"Tell me, Mira. Is a forge gentle?"
"No."
"Is a root that finally cracks a stone gentle?"
"No."
"Is the hand that pulls a drowning child out of a river gentle? Or is it urgent? Is it fierce?"
She said nothing.
"Friendship is not a lullaby," Zara-Chabby said. "Friendship is a mirror — one that shows you exactly the parts of yourself you've spent years keeping in the dark. And the dark is not gentle, Mira. The dark is where your fear lives. Your jealousy. Your desperate, unspoken need to be loved without ever having to ask outright. Friendship drags all of that into the light. And that hurts. It burns on the way out. But the burning isn't destruction. It's clarification."
He turned to address the whole circle at once.
"You want a friend who will never once argue with you? Go and get a dog. You want one who agrees with everything you say? Go talk to a wall. You want one who will never, under any circumstance, leave you? Then die now, and be done with the risk entirely. But if what you actually want is a friend who will wake you up — who will sit with you through your ugliest hour and not once flinch away from it — then prepare yourselves to suffer. And prepare, harder still, to be grateful for that particular suffering."

He sat down cross-legged at the center of the circle, and the disciples arranged themselves around him in a rough ring, the stream on his left hand, the cave on his right, the sky above them a deep and cloudless blue — the specific blue that makes a person feel infinite and small in the very same instant.
"I won't speak for long," he said. "But what I say will take years to fully digest. Some of you will leave today. Good. Some of you will stay. Also good. And some of you will curse my name before this sun sets. Excellent, that too — a curse is only a prayer that has, for the moment, forgotten its own face."
He looked slowly around the circle, meeting each pair of eyes in turn, unhurried.
"First, a question. Who among you has ever had a friend who disappointed you?"
Every hand rose. Some rose sharply, as if the disappointment were still fresh enough to sting. Others rose slowly, reluctantly, the way an old wound lifts in cold weather.
Zara-Chabby nodded. "Good. Now — who among you has ever been the disappointment to a friend?"
Fewer hands. But still many. Velen's went up. Ashok's did not. Mira's trembled but rose anyway. Tana's stayed exactly where it was, in her lap, her eyes fixed on the grass.
He noticed. "Tana. You didn't raise your hand."
"I've never had a friend long enough to disappoint one," she whispered.
"Ah." He tilted his head. "Then you've disappointed them in a different way entirely. You disappeared. You ran, before they could ever see your flaws up close. That, Tana, is the deepest disappointment there is — not the betrayal itself, but the absence. The quiet refusal to ever be fully seen."
She began to cry — silently, the particular crying of tears that have been waiting patiently for years to finally be let out.

Zara-Chabby waited. He did not comfort her. He offered no cloth, no soft word. He simply sat in her tears, letting them fall into the grass, letting the earth take them the way earth takes anything given to it honestly. And, somehow, that alone was enough. She stopped after a minute — not because the grief had run dry, but because she felt, for the first time she could remember, genuinely held by someone's undivided attention.
"Now," Zara-Chabby said, "let me tell you a story you've heard before. But you haven't heard the end of it. Because until today, I never told you the end."
He picked a small grey stone off the ground, unremarkable, worn entirely smooth.
"Once there was a man who had three friends. The first he saw every day — they ate together, labored together, slept beneath the same roof. The second he saw once a year, and each meeting was its own small festival of laughter and tears and modest gifts. The third he had not seen in twenty years. And yet when he closed his eyes, he could feel that third friend's hand on his shoulder as clearly as if it had rested there yesterday."
He tossed the stone up and caught it.
"One night the man dreamed that Death came to him and said: you may take only one of your three friends with you into the unknown. Choose. He woke in terror. He thought — the first friend is my daily bread, but bread does not last forever. The second friend is my joy, but joy is a fire that always needs more fuel than I can give it. The third — I don't even know if he still draws breath. And yet, thinking of him, I am not afraid of anything at all."
He stopped tossing the stone and held it still in his open palm.
"He fell back asleep, and Death stood over him a second time. I have watched you try to choose, Death said. You have not chosen. So I will tell you the truth myself. The third friend is not a person at all. He is the memory of one single moment when you were fully alive, fully present, and fully given over to another human being. That moment does not die the way people die. It is the only thing in your whole life that can never once be taken from you."
"The man wept. Then I have wasted my life, he said. I fed the first friend. I entertained the second. And I forgot the third entirely. And Death smiled — if a skull can be said to smile — and answered: No. You have lived the third. That is exactly why you remember it so clearly, after twenty full years of silence. Friendship was never what you do for another. Friendship is what remains standing, long after the doing has stopped completely."
He set the stone down in the grass between his feet.
"That is the story I told you once before. But here is what I never told you. The man did not fall back asleep after that second dream. He rose. He walked, in the middle of the night, to the house of his first friend. He knocked. The friend opened the door, yawning. What is it? It's the middle of the night. The man said, I dreamed of Death. He told me you are not my friend. You are my habit. And a habit is not a friend. The first friend stared at him a long moment. Then he laughed. Of course I'm a habit, he said. But a habit of love. That is the very best kind of habit there is. Go back to bed, you fool. And the man understood, standing there in the doorway, that even a habit can be holy — provided it is chosen freely, over and over, and not simply repeated out of laziness."

"He walked next to the house of the second friend," Zara-Chabby went on. "He knocked. No answer. He knocked again, and a window opened above him. I am with someone tonight, the second friend called down. Can this wait until morning? The man said, I dreamed of Death. He told me you are not my friend either. You are my festival. And a festival ends. The second friend was quiet a long moment. Then he said, Yes. I end. But while I am here, I am fire. Do not ask fire to behave like stone. Come back at dawn. We will drink tea together. Now go home. And the man understood something new — that some friendships were never meant to last forever. They are meant, instead, to burn brightly for their season, and leave behind an ash that feeds whatever grows next."
He rose and walked to the edge of the stream, dipped one hand into the cold water, and drank from his own cupped palm.
"Finally," he said, "the man walked to the hill where he had last seen the third friend, twenty years earlier — a hill overlooking a whole valley. The friend, of course, was not there. He sat down anyway, in the grass, and closed his eyes, and let himself remember the exact curve of that friend's jaw, the way he laughed with his entire body, the silences between them that had never once, in all their years, felt awkward. And in that remembering, something extraordinary happened. The man felt the third friend sit down beside him. Not as a ghost. Not merely as a memory. As a presence — as though the twenty years between them had folded down into the length of a single breath."
The disciples had gone utterly still, listening.
"He opened his eyes. No one was there, of course. And yet he was no longer alone. He had, in fact, never truly been alone. He had only been unaware. And that unawareness — that long, comfortable forgetting — was the only real loneliness he had ever actually suffered. His third friend had never once left him. It was the man himself who had left. He had simply stopped paying attention. He had stopped being the friend that his own friend had once loved."
He returned to the circle's center.
"There is no moral to this story. Morals are for children and for politicians, who are very often the same audience wearing different clothes. But there is a riddle in it. A mind-cracking riddle. Are you ready for it?"
A murmur of assent moved through the circle.

The First Riddle of the Last Teaching:
You believe you miss your absent friends. You do not. You miss the version of yourself that became possible only when they were near you. That version has not vanished. You have simply stopped choosing it. Your friend was never the one who gave you your best self. Your friend only ever reminded you it existed at all. And a reminder is not a gift you may set aside and forget about. It is a call. Answer it.
Velen raised a hand. "Master — if that is true, then do we not, in some sense, carry our friends inside us always? Are they not, in some real way, permanently present?"
Zara-Chabby clapped his hands together once, sharp and dry. "Yes! Now you are finally thinking. But do not stop there. If they are always present, why do you still feel their absence so keenly? Why does the empty chair still ache to look at? Why does the unread letter still burn a hole in your pocket?"
Ashok answered slowly. "Because we are not only minds. We are bodies. We are skin that remembers touch. We are ears that still remember a particular voice."
"Yes," Zara-Chabby said. "And here is the great terror of it, and the great liberation buried inside the same terror: the body lies. Not out of malice. But it lies to you all the same. It tells you that if you cannot touch someone, you cannot love them. It tells you that if you cannot hear their voice, you cannot listen to them. The body is a faithful servant — and an utterly terrible master. Friendship begins in the body. It must; we are not angels, whatever we might privately wish. But friendship ends, if it ends at all in any meaningful sense, in the soul. And the soul recognizes no distance. No absence. No death worth the name."

Mira spoke up next, her voice unsteady but determined to get through it. "Master, I had a friend who died last winter. My sister. We shared a womb. We shared a bed as girls. We shared a private language no one else could ever crack. Now she's gone. I talk to her sometimes — to her grave, to the empty air. Sometimes I feel her answer me. Other times I feel nothing at all. Just cold. Just silence. Is that my body lying to me? Or is that the actual truth?"
Zara-Chabby crossed to her and knelt so his eyes met hers directly.
"It is both, Mira. The silence is true. The cold is true. Your sister is not coming back — not as a hand to hold, not as a voice to laugh alongside, not as a body to share a blanket with on a cold night. That loss is entirely real. Do not let a single person tell you otherwise. But the friendship between you was never her body to begin with. The friendship was whatever moved that body — the animating thing, the light. And that light did not die alongside her. It only returned. Returned to where, you ask? To the very same place your own light came from, before you were ever born. And here is the mystery worth sitting with — that place is not somewhere far away. It is here. It is under your own feet right now. It is in this stream. It is in the silence sitting between my words and your listening to them."
He touched her forehead lightly, once, with a single finger.
"When you feel nothing at all, you are not being punished for anything. You are being emptied, so that something new has room to enter. Do not fear the emptiness itself, Mira. Fear only the refusal to remain empty for as long as it takes. That refusal — that clutching at what has already gone — is the only real death worth naming."

The First Severance: The Severance of Need
Zara-Chabby stood and raised both arms, and the morning light caught the dust drifting around him, turning it briefly into a slow and private galaxy of gold.
"Now," he said, "we begin the severances. There are three of them. They are not cruelty. They are surgery — cutting away whatever is not friendship, so that what remains underneath can finally breathe on its own."
He lowered his left arm and turned to a broad-shouldered disciple named Bhodi, a man whose hands had helped raise half the huts in the valley.
"Bhodi. You have a friend. Tell me about him."
Bhodi shifted where he sat. "His name is Kael. He came to the valley three years ago, half-starved and lost. I fed him. Clothed him. Taught him to cut wood properly."
"And now?"
"Now he is my right hand. We work side by side. We eat together. When I am tired, he carries the heavier load without being asked. When he is low, I sit with him until it passes."
Zara-Chabby tilted his head. "If Kael left tomorrow — walked off without a single word of warning — what would you feel?"
Bhodi's jaw tightened. "Betrayed. Angry. Empty."
"Why empty, specifically?"
"Because... because he has become part of my life. Part of my actual days."
Zara-Chabby nodded slowly. "You have just described a need, Bhodi. Not a friendship. You need Kael to complete your days for you. You need him to fill a space that would otherwise sit uncomfortably empty. That is not love. That is hunger wearing love's clothing. And hunger was never a relationship. It is only a symptom of one that has not yet fully arrived."
Bhodi's face darkened. "You are telling me I do not love Kael?"
"I am telling you that you love what Kael does for you. That is different, and it is not evil — it is simply human, and most men never look closely enough to notice the difference. But it is not yet friendship. Friendship only begins the moment you can say, and mean it completely: I do not need you. I choose you. And I will go on choosing you even on the day you are useless to me. Even on the day you become painful to be around. Even on the day you finally leave."
A long silence settled over the circle.
Bhodi's eyes had gone bright. "Has anyone ever loved you that way, Master? Has anyone ever chosen you without needing a single thing from you in return?"
Zara-Chabby smiled — a smile that seemed to hold whole centuries inside it. "Many have tried. Very few have succeeded. And the few who did, I carry in a place that requires no memory, no touch, no proof at all. They are not in my heart, Bhodi. My heart is far too small a room for what I mean. They live in the space that holds my heart. That space has no door built into it anywhere. Nothing enters it. Nothing leaves it. It simply is, the way weather simply is. That space is the home of the Last Friend."

He walked slowly among the seated disciples, his bare feet leaving no visible mark on the grass behind him.
"Here is a test," he said. "Think of your closest friend. Now imagine they fall ill. Not dying — only ill. They cannot speak with you for an entire year. They cannot touch you. They cannot help you with a single thing. They simply lie in a bed somewhere, breathing, eating, sleeping through the days. Would you still visit them anyway? Would you sit for hours at their bedside, saying nothing, receiving nothing at all in return?"
Heads nodded around the circle.
"Now imagine they grow angry instead. Not at you specifically — angry at the whole shape of the world. They snap at you without warning. They push you away for no reason you can name. They accuse you of things you never did. Would you still sit with them through that?"
Fewer nods this time.
"Now imagine they forget you entirely. A sickness of the mind, the kind that erases names. They look directly at you and see only a stranger. They cannot recall a single moment the two of you ever shared together. Would you still sit with them, even then?"
Only a small handful of nods remained.
Zara-Chabby stopped in front of a young woman named Sari. "You nodded. Tell me why."
Sari's voice came out soft, but entirely certain. "Because I would remember for both of us. And maybe — maybe my remembering would become a kind of blanket for them, even if they never once knew it was there. I would still be their friend. Even if they could no longer be mine in return."
Zara-Chabby bowed to her — not a shallow nod, but a deep bow, from the waist. "You have understood the First Severance completely. You do not need your friend to be any particular way for you. You do not need them to recognize your face. You do not need them to give you a single thing back. Your friendship was never a contract to begin with. It is a vow — a vow you make privately to yourself, to see them, and to hold them, even on the day they can no longer see or hold you in return. That is the severance of need. It does not mean you stop caring for another person. It means you finally stop demanding anything from the caring. And a demand, when you look closely at it, is only ever a need with a clenched fist attached to it."

The Second Severance: The Severance of Memory
Zara-Chabby raised his right arm. The sun had climbed higher now. The disciples' shadows made a broken wheel across the grass beneath them.
An older man named Doran, his face scarred by an old bout of illness, spoke without waiting to be called on. "Master, this severance frightens me more than the first. If I sever memory, do I not simply forget my friend? And isn't forgetting its own kind of death?"
"No," Zara-Chabby said. "Forgetting is a kind of release. But I am not asking any of you to forget anything. I am asking you to sever the grip of memory. There is a real difference between the two, even if it doesn't look that way from where you're sitting."
He picked up a fallen branch and drew a single line in the dirt in front of him.
"On this side of the line: memory as story. You tell yourself, over and over — my friend betrayed me on a Tuesday. My friend laughed at me in front of others. My friend did not come when I called for him. You hold that story the way you'd hold a stone in your fist, turning it over and over, polishing it smooth with your own pain until it shines. That is not memory anymore, Doran. That is grievance. And grievance is not friendship's cousin. It is friendship's opposite. It is a wall built one stone at a time, out of the very relationship it claims to be protecting."
He drew a second line, parallel to the first.
"On this side: memory as gift. You remember instead — my friend held my hand when I was afraid. My friend shared the last piece of his own bread with me without being asked. My friend sat beside me in total silence for three hours while I wept, and never once tried to fill the silence with something easier. You hold that kind of memory the way you'd hold a flower — you do not squeeze it. You allow it to be fragile. You let it fade in its own season. And when it finally does fade, you do not mourn the fading. You simply thank it for having bloomed at all."
He drew a third line, crossing the first two into an uneven star.
"The severance of memory means you stop using the past as either a weapon or a shield, whichever the moment happens to call for. You stop saying you always and you never. You stop keeping score entirely. The past was never a ledger to be balanced. It is a garden. Some things in it grew. Some things died in their season. You do not dig up what has died simply to examine its roots one more time. You let the dead things become soil instead. And you walk into whatever is left of the present with your hands finally empty."

Doran's scarred face twisted with something close to protest. "But Master — what if the memory is of a genuine wrong? What if my friend stole from me? Lied to my face, repeatedly? What if they caused real harm to my child?"
Zara-Chabby's eyes softened slightly. "Then you are no longer speaking of a friend at all, Doran. You are speaking of an enemy, and enmity carries its own severances entirely, which we have not yet come to today. But here, in this particular circle, we are speaking only of those you still choose to call friend. If someone stole from your child, they were never your friend to begin with. They were your enemy, wearing a friend's mask over their face. Do not sever the memory of that. Use that memory as a blade, and cut them cleanly out of your life with it. But do not go on carrying the blade forever afterward, or it will grow, slowly and without your noticing, straight into your own hand."
He walked to the stream and pointed toward a patch of especially still water.
"See that pool there? It holds the sky's whole reflection inside it, without complaint. But it does not grip the sky. The sky moves on regardless. Clouds arrive and pass through. Birds cross overhead. The pool reflects each one faithfully as it comes — and then lets it go, just as faithfully, the moment it has passed. That is the Second Severance, in its entirety. Reflect. Do not grip. The instant you grip a reflection, it stops being a mirror and becomes a prison instead. And you become, without quite meaning to, the jailer of your own past."
He turned back to face the assembly.
"Here, then, is a practice for you to take home tonight. Before you sleep, think of one single thing a friend once did that hurt you. Just one. Then say to yourself, plainly: that happened. It is over now. I am not that moment, and they are not that moment either. The moment itself is dead. I bury it. Then think of one thing a friend once did that helped you, and say the same words over it: that happened. It is over. I am grateful for it. The moment is dead. I bury it, this time with thanks. Bury both, equally, side by side. Build a monument to neither one. Let the ground stay level between them. Tomorrow, you will walk out onto level ground for once. That is the way of the Last Friend."

The Third Severance: The Severance of Hope
Zara-Chabby raised both arms once more, then lowered them slowly, like a bird settling carefully onto a branch that might not hold its weight.
A gasp moved through the crowd. Even Velen, usually unreadable, drew a sharp breath at what was coming.
"Master," Ashok said, "hope is what carries us forward. Hope is what gets a man up from his bed in the morning. Hope is what makes him reach out toward another person at all. Without it, are we not simply corpses that happen to still be walking?"
"Yes," Zara-Chabby said. "And that is precisely why it must be severed."
He sat back down cross-legged and gestured them all closer. They came, and the circle tightened around him.
"Listen carefully now, because this is the part most men mishear. There are two kinds of hope. The first is anticipation. You hope your friend will call you tomorrow. You hope he will understand your silence without needing it explained. You hope he will forgive your mistake before you've even found the courage to name it. You hope he will never, under any circumstance, leave. This kind of hope is not a virtue, whatever the songs tell you. It is a rope, and you are tied to the far end of it. Every day he does not call, the rope pulls tighter. Every year he does not return, the rope chokes a little harder than the year before. This hope is a slow, patient strangulation dressed up as devotion."
He paused, letting that settle.
"The second kind of hope is trust. Not trust that things will go well for you — trust that you are capable of meeting whatever comes, regardless of how it goes. This hope does not look ahead toward the future at all. It stands entirely in the present and says only: whatever arrives, I will meet it with open eyes. This kind of hope is not a rope. It is a root. It grows downward instead of upward. It anchors a man in place. It never once pulls him."
He looked slowly around the circle.
"The Severance of Hope means cutting away the first kind completely. You stop hoping your friend will change into someone he was never going to become. You stop hoping he will come back. You stop hoping for the apology that may never arrive. You stop hoping he will love you in precisely the shape you've decided you require. You stop all of it — not because you have grown cynical, but because, at last, you have become free."

Mira raised her hand again, eyes red-rimmed. "But Master — if I stop hoping my dead sister will visit me in a dream... if I stop hoping for some small sign from her... then what is left for me? Only emptiness."
"Yes," Zara-Chabby said. "Only emptiness. And emptiness, Mira, was never a void to begin with. It is a womb. Something new can grow there — but only once you stop filling it, day after day, with the ghosts of old hopes that were never coming true. Your sister is not returning. Not in dreams. Not in signs. Not in whispers carried on a wind you've decided means something. That is simply the truth of it. And the truth was never cruel on its own. The truth is neutral. It is only your grip on the old hope that makes the truth feel like cruelty when it finally arrives."
He picked a dry leaf off the ground and held it delicately between two fingers.
"This leaf was once attached to a tree that it trusted would hold it forever. It hoped, in whatever way a leaf can be said to hope, that it might stay green indefinitely. Then autumn came, as autumn always eventually does. The leaf did not die because autumn was cruel to it specifically. It died because seasons change, indifferent to any leaf's particular hopes. Your friendships will change in exactly this way. Some will end outright. Some will simply fade past the point of recognizing. Some will transform into a shape you no longer know how to name. That is only the season of your life turning, the way every season eventually turns. Do not curse the season for arriving. Learn its name instead, and walk forward into it."
He crushed the leaf slowly between his fingers. It fell to the grass in small dry pieces.
"Now. Here is the hardest thing I have ever said to any of you. Are you ready to hear it?"
The disciples nodded, several of them already weeping quietly.
"The Last Friend — the one who never leaves, who never disappoints, who never once dies on you — is not a person. It is not even a memory, however precious. It is the capacity for friendship itself. It is the part of you that says I see you without requiring, in return, to be seen. It is the part of you capable of loving without drawing up a contract first. It is the part of you that carries no hope, because it carries no fear underneath the hope to begin with. And without fear, hope becomes entirely unnecessary. You do not hope, after all, for the sun to rise tomorrow morning. You simply know that it will. Or, failing that, you know you are capable of facing the dark if it doesn't. Either way, there is nothing left in you to be afraid of."

The Parable of the Empty Chair
Zara-Chabby stood and stretched, and his joints made no sound at all, as though his body had simply forgotten, for the moment, how aging was supposed to work.
"I will tell you three parables now," he said. "Each one is a key. Do not try to understand them with your mind. Let them understand you instead, from wherever they land."
He settled onto a flat stone, and the disciples leaned in close around him.
"There was once a woman who had a friend. They had grown up together, married a pair of brothers, raised their children in houses that shared a single fence between them. When the friend died — suddenly, a fever that took her inside three days — the woman was devastated in a way she had no language for. She placed an empty chair in her kitchen. Every morning after that, she poured two cups of tea, and set one down in front of the empty chair. She spoke to it. Told it about her dreams, her worries, her grandchildren as they were born and grew. She did this every single morning for ten full years."
Zara-Chabby paused.
"One day her granddaughter finally asked her, Grandmother, why do you talk to an empty chair? The woman answered, Because my friend is still with me. The granddaughter said, gently, But the chair is empty, Grandmother. There is no one sitting there. The old woman grew angry at that. You are far too young to understand such things, she said. That night, she dreamed of her friend. Her friend looked sad in the dream — sadder than the woman had ever seen her, even in life. Why are you sad? the woman asked her. And her friend answered, Because you have trapped me here. You have put me in a chair and left me there. You talk at me now, not to me. You pour tea for a ghost every single morning. But I was never a ghost. I am not a memory, and I am certainly not a chair. I am the wind that moves through your kitchen each time you open the door. You cannot see me that way. You cannot pour tea for me that way. But you could feel me — if only you would finally stop clutching the chair."

"The woman woke and wept," Zara-Chabby continued. "She dragged the empty chair out to the forest that same morning and left it there among the trees. She returned to her kitchen and did not pour a second cup of tea that day. Instead, she opened the window. The wind came in and touched her face, lifted the loose hair at her temple. She did not speak to it. She simply listened. And in that listening, she felt her friend again — not as a presence exactly, and not as a voice she could point to. As a texture woven into the silence itself. Like the warmth of a hand that is no longer physically there, but whose warmth was strong enough, once, that the skin still remembers the shape of it and tingles faintly, even years later, when the wind moves just right."
He picked up a small pebble and skipped it once across the surface of the stream. It bounced three times before it sank.
"The empty chair," he said, "was hope. The open window was severance. You cannot keep both at once, no matter how badly you might wish otherwise. Choose."

The Parable of the Enemy's Grave
"There was once a man who had an enemy," Zara-Chabby said. "They had been rivals since boyhood — fighting over land, over a woman neither of them ended up marrying, over questions of honor neither of them could clearly define even to themselves. When the enemy finally died, the man traveled three days on foot to stand at his grave. His own family was baffled by it. Why do you go at all? they asked him. He was your enemy. And the man answered, simply, Yes. And he was also my truest friend."
Zara-Chabby smiled at the confusion visibly spreading through the circle.
"The man stood at the grave a long while. He did not gloat over it. He did not weep either. He simply stood there. After an hour had passed, he finally spoke aloud. You lying bastard, he said to the grave, not unkindly. You never once pretended to like me. You never smiled to my face while plotting something else entirely behind my back. You met me in open daylight, every single time. You fought me where I could see you coming. You told me exactly what you thought of me, over and over, whether I wanted to hear it or not. And because of you, I became stronger than I ever would have on my own. Because of you, I learned how to properly defend myself. Because of you, I finally understood that not every harsh word is an attack. Sometimes it is only a gift, wrapped clumsily in sandpaper instead of silk."
Zara-Chabby knelt and pressed his palm flat against the grass.
"The man sat down on that grave and stayed there three full days. He ate nothing the entire time. He drank only from a stream that ran near the cemetery gate. On the third day, he finally said, I forgive you. Not because you ever asked for it. Not because you deserve it, particularly. But because carrying my anger at you this long has felt like hauling a boulder up a mountain, one step at a time, for years. I am tired now. I am setting the boulder down. And I thank you, honestly, for having been heavy enough all this time to teach me exactly how strong I actually am."
He looked up at the disciples surrounding him.
"That man understood something most of you have not yet arrived at. An honest enemy stands closer to true friendship than a dishonest friend ever will. Because friendship, at its root, requires truth above everything else it might also offer. And an enemy who tells you the truth — even brutally, even without a shred of kindness in the delivery — is handing you the raw material of your own growth, whether he intends the gift or not. A friend who lies gently to spare your feelings is only handing you a sweetened poison instead. Choose the truth every time. Even when it wounds you. Especially when it wounds you."

The Parable of the Mirror Stream
"There were once two friends who loved each other deeply," Zara-Chabby said. "They had walked side by side for forty years. They had buried each other's parents. Raised each other's children as their own. Nursed one another through fevers and broken bones more times than either could still count. One day, walking together, they came to a stream so still it had become a perfect mirror. They looked down into the water. Each saw his own face reflected back at him. And then — the stream itself spoke. It asked, Which of you is the reflection?"
Zara-Chabby laughed softly at the memory of it, as though he had been there himself to hear it.
"The first friend said, I am the real one. He is only my reflection. The second friend said, No — I am the real one. You are the reflection. They argued this way for hours, each entirely certain of his own solidity. Finally, exhausted, they stopped arguing and looked into the water together one more time. This time, they did not see two separate faces looking back. They saw only one face — and it belonged to neither of them. It was a face they had never once seen before in their lives. The face of the stream itself. And the stream said to them both, You have spent this whole afternoon fighting over which of you is real and which of you is only reflection. But you are both reflections, every bit as much as the other. The water beneath you is the only real thing here. And the water is friendship itself — not you, not your shared history, not even your love for one another. The space between the two of you — that is the one thing that has never once changed in forty years. You come. You go. The space remains exactly where it has always been."
Zara-Chabby dipped his hand into the stream beside him.
"The two friends looked at each other after that, and they laughed — really laughed, the kind that comes up from somewhere lower than the chest. They stopped trying to prove which of them was more real than the other. They simply became water, together, the way the stream had shown them how. And once they had become water, neither one could drown any longer. Because water does not drown in water. It only ever joins it."
He let the drops fall from his open fingers back into the current.
"That is the Last Friend, in the end. Not a person. Not a memory kept carefully in a drawer. Not even a hope, however trusted. It is the medium in which all friendship, everywhere, has always done its swimming. You cannot lose it, because you were never able to hold it in the first place. You cannot be betrayed by it, because it carries no expectations to betray. You cannot even leave it behind, because you have, in truth, never once arrived anywhere separate from it. It is simply there — the way the stream is there. The way the silence between two people is there. The way the light from within that does not deem is there, waiting, whether or not anyone thinks to look for it."

The Seven Last Riddles
Zara-Chabby stood and raised both hands toward the sky. The sun sat directly overhead now, so that no shadows fell anywhere in the circle — everything bathed, for this one hour, in equal and impartial light.
"Now," he said, "the last riddles. Not for your minds this time. For your bones. Let them crack you open properly."
He spoke slowly, leaving a long pause after each one.
You are lonely not because you lack friends, but because you have not yet befriended your own death. Death is not your enemy. Death is the silence that makes the music possible in the first place. Befriend it. Sit with it a while. Offer it tea, the way you would any other guest. It will teach you, in time, how to love the living without ever needing to cling to them.
The friend who never argues with you is only a slowly closing door. Disagreement was never disloyalty. It is the friction that keeps both blades sharp enough to be worth carrying. Seek out friends who will challenge you honestly. Be wary of the ones who only ever comfort you. Comfort belongs to the dying. You are not dying yet. You are still becoming.
The moment you say "my friend," you have already begun losing them. Possession is the first quiet withdrawal. Say instead: "the friend I meet in this exact moment." The moment is all you were ever actually given. The moment, it turns out, is enough.
The Last Friend is the silence that follows after your name is called, and no one answers. That silence is not abandonment, however it might feel in the first instant. It is a question. And the answer to it was never a voice. The answer is your own breath, steady and warm in your chest, proving all on its own that you are still here to hear the silence at all.
Love makes the world go round. Friendship makes the going of it worth the round trip. Love demands. Friendship only invites. Love is a fire. Friendship is the hearth that holds the fire steady without ever letting it burn the whole house down around you.
If you fear being left alone after they die, you never actually had a friend to begin with. You had a hostage. Release them now, while you still can. The release is not cruelty, whatever it might feel like in the moment. It is the highest form love is capable of taking.
The Last Friend is not waiting for you somewhere at the end of the road. The Last Friend is the road itself. Every step you take, you are already walking on it. Every time you stumble, it rises up to meet you. Every time you finally rest, it holds your weight without complaint. You do not find it, the way you find a lost object. You are it, and have always been it. You have simply forgotten. Now, at last, remember.

The Great Silence
Zara-Chabby lowered his hands and closed his eyes.
No one spoke.
The stream continued on regardless. The birds continued. The wind moved through the leaves exactly as it had before any of this had been said aloud. But the disciples — all forty-seven of them — sat in absolute silence. Not the silence of fear, and not the silence of simple obedience either. The silence of attention, which is a rarer thing than either.
One hour passed this way.
A young disciple named Kavi began to fidget, and opened his mouth as if to finally say something. Velen laid a hand gently on his arm. Kavi closed his mouth again, and stayed.
Two hours passed.
Tana, the girl who had run from her village only the day before, began quietly to weep. No one moved to comfort her. No one shushed her either. Her tears simply fell, and the grass beneath her received them the way it received everything else offered to it honestly. After a while, she stopped on her own. Her face, when she finally lifted it, looked different. Softer. As though something long-carried had finally been set down and washed clean.
Three hours passed.
The sun began its long descent toward the western ridge. The shadows returned, long and faintly blue across the grass. Some of the disciples had fallen asleep sitting upright. Some sat rigid, eyes wide open, staring at nothing in particular. Some had let their heads fall forward. Some simply watched the sky change color, unhurried.
Zara-Chabby had not moved this entire time. He had not opened his eyes once. He was not meditating in any effortful sense of that word — he was simply there, the way a stone is there, the way a tree is there, the way the stream itself had been there the whole time, indifferent to whether or not anyone was watching it flow.
At the fourth hour, he opened his eyes.
"You have just spent four hours in the company of the Last Friend," he said. "Did you recognize it while you sat there?"
No one answered aloud. But some nodded. Some wept openly now, without shame. Some laughed — a quiet, disbelieving sort of laughter, the laughter of people who have just discovered that the treasure they'd traveled months to find had been sitting directly under their own feet the entire time.
"The Last Friend," Zara-Chabby said, "is not a being of any kind. It is not a presence you can point toward. It is not even a feeling you could name if pressed. It is the capacity to be with whatever is actually in front of you — without running from it, without hiding, without demanding, even quietly, that it become something other than what it already is. That capacity has lived inside every one of you the entire time. It is your original face, the one you carried before your own parents were ever born. You did not create it, and so you cannot lose it. You can only ever forget it for a while. And today, for four unbroken hours, every one of you remembered."
He stood. His knees did not crack. His back did not so much as complain.
"Now. The remembering is finished for today. The forgetting will begin again soon enough — likely before you've even reached your own beds tonight. That is simply the rhythm of it. Remember, forget, remember, forget, on and on for as long as you live. Do not let the forgetting discourage you when it comes. It is not a failure on your part. It is only the tide. The tide goes out precisely so that it may come back in again. Trust the tide to do what tides have always done."

The sun sat low now, painting the whole stream in shades of orange sliding slowly into purple. Zara-Chabby walked to the edge of the circle, and did not look back as he went.
"Master," Velen said, and his voice cracked clean down the middle on the single word. "Where are you going?"
Zara-Chabby stopped walking, though he still did not turn.
"To the mountains. Alone."
"But—" Ashok climbed to his feet, legs visibly unsteady beneath him. "But there is so much more still to teach. So many who haven't yet heard any of this from you. There is a Book Three, surely, there must be—"
Zara-Chabby turned then, and his face was neither kind nor cruel as he faced them. It was simply final, in the way certain doors are final once they've closed.
"There is always more," he said. "That is precisely the trap hidden inside the wanting. You believe wisdom is an infinite well that never once runs dry, no matter how deeply or how often you draw from it. It is not. Wisdom is a door. And every door, without exception, has a threshold built into it. I have walked all of you to that threshold, one lesson at a time, for years. Now each of you must cross it entirely on your own. I cannot carry you across it. I will not carry you, even if I could. If I carried you, you would never once learn how to walk unassisted, and that failure would be mine, not yours."
He looked at each of them — not one at a time, but somehow all at once, as though his gaze had learned, in this final hour, how to split itself into forty-seven separate beams without losing any of its weight in the dividing.
"You have been my disciples long enough now. It is time each of you became someone else's Zara-Chabby in turn. That was always the actual lesson, buried underneath every other lesson I ever gave you. I was only ever the placeholder — a stick pointed at the moon, nothing more. Do not go on worshipping the stick after today. Look, finally, at the moon it was pointing toward the whole time."
Velen sank to his knees in the grass. "But Master — if you leave us now, who will answer our questions?"
Zara-Chabby laughed then — a full, warm sound, like a drum wrapped carefully in velvet so its beat wouldn't startle the room it was played in.
"You will answer them yourselves from now on. Or better still — you will simply stop asking them entirely. Questions were only ever ladders, Velen. You do not need to keep climbing a ladder once you have already reached the roof it was built for. You have reached the roof, all of you, whether you feel it yet or not. Put the ladder down now. Look up at the sky instead."
He stepped toward the stream, and did not wade in as anyone might have expected. He walked directly across it, stone to stone, crossing to the far bank in seven easy, unhurried steps. The water never so much as wet his feet.
On the opposite bank, he turned to face them one final time.
"I will not see any of you again," he said. "Not because I intend to die soon — I am not dying. I am, if anything, more fully alive at this moment than I have ever once been in my whole life. But because you must all learn, now, to see without me standing in front of you. My face has been your mirror for long enough. It is time each of you became your own mirror instead. It will be harder that way. It will be lonelier, certainly, for a while. But it will also, finally, be truer."
He raised one hand — in blessing, or perhaps only in farewell. On his weathered face, in that particular light, the two gestures looked identical, and no one standing there could have told you with any confidence which one it actually was.
"Do not go looking for me afterward," he said. "I will not be found, wherever you decide to search. But when two of you sit together in real silence, and one of you finally speaks the truth that has always frightened you both, and the other listens without once flinching away from it — I will be there with you. Not as a ghost trailing behind you. As the space that sits between your two breaths. That space carries no name of its own. But if you find you need one anyway, you may call it Zara-Chabby, if that comforts you. It will not answer you back when you call it that. But it will also never once leave."
He turned, and walked into the trees on the far bank, and the shadows there closed over him the way water closes over a stone dropped from a height.
No one in the circle moved for a long while.
The stream went on flowing exactly as it had before any of them had ever arrived at its bank.

Velen sat on the bank a long time afterward. Ashok settled beside him without a word. The other disciples slowly dispersed around them — some back to their huts, some into the deeper forest, some out onto the road that led back toward the world they had each, in their own season, left behind to come here. But Velen and Ashok stayed exactly where they were.
"Did you understand any of it?" Ashok asked eventually.
Velen shook his head slowly. "No. But I think that not understanding was the whole point of it."
They sat together in silence after that. The stream murmured on beside them. Somewhere unseen, a frog called once from a hidden pool. The first stars began arriving overhead, faint and trembling in the cooling air.
After a long while, Velen spoke again. "He said the Last Friend is the silence after your own name is called, and no one answers it."
"Yes."
"My name has been called a great many times in this life. By my mother, once. By my children, many times over. By you, more often than either of us has bothered to count. By Zara-Chabby himself, more than any of the rest. But the silence that comes after the calling — I have spent my whole life running from that particular silence. Filling it up with words. With small tasks. With manageable worries."
"And now?"
Velen picked up a smooth stone from the bank, held it a moment in his open palm, weighing it. Then he let it drop into the stream, and watched the small rings spread outward until they finally disappeared.
"Now," he said, "I will sit in it instead. Even when it hurts to sit there. Especially when it hurts."
Ashok laid a hand on his shoulder — not a heavy hand, but a light one, the kind that says I am here without needing to say a single word aloud to mean it.
"That," Ashok said, "is the beginning of it."
They stayed together until the moon rose fully over the ridge. Neither of them spoke again after that.
And in the silence that had settled between them, something moved — not a presence exactly, not a ghost, and not quite a memory either. Something older than all three of those things combined. Something that had been sitting quietly in that valley long before Zara-Chabby himself had ever been born into it, and would go on sitting there, patient and unnamed, long after every name spoken here today had finally been forgotten by everyone who once knew it.
The stream did not stop.
The stars did not fall.
And the disciples, at long last, on that ordinary evening beside an ordinary stream, began — only just barely, only just beginning — to understand.
Thus spoke Zara-Chabby.
`,Qv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Jv({user:l,onBack:i,onSignOut:r,onNextChapter:h}){return v.jsx(tt,{user:l,onBack:i,onSignOut:r,onNextChapter:h,nextChapterLabel:"THE LAST FRIEND",chapterText:Kv,chapterTitle:"THE LAST FRIEND",chapterNumber:9,bookLabel:"Book 2",chapterList:Qv})}const $v=[{number:"Book 1",description:"The beginning of the descent.",chapters:["ZARACHABBY'S DOWNGOING","OF THE THRESHOLD OF MADASARA","THE SERMON OF THE BROKEN LEDGER","OF THE TIGHTROPE WALKER'S SHADOW","THE TROUBLED WORKER","OF WOMEN","OF THE FESTIVAL OF THE LAST MEN"]},{number:"Book 2",title:"The higher bond",description:"A complete book on friendship, truth, and release.",chapters:["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"]},{number:"Book 3",description:"The next horizon is still being written.",chapters:["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"]}];function Pv({user:l,onSignOut:i}){const[r,h]=Be.useState(null);return r===1?v.jsx(bv,{user:l,onBack:()=>h(null),onSignOut:i}):r===2?v.jsx(vv,{user:l,onBack:()=>h(null),onSignOut:i}):r===3?v.jsx(kv,{user:l,onBack:()=>h(null),onSignOut:i}):r===4?v.jsx(Sv,{user:l,onBack:()=>h(null),onSignOut:i}):r===5?v.jsx(_v,{user:l,onBack:()=>h(null),onSignOut:i}):r===6?v.jsx(Hv,{user:l,onBack:()=>h(null),onSignOut:i}):r===7?v.jsx(Iv,{user:l,onBack:()=>h(null),onSignOut:i}):r===10?v.jsx(Dv,{user:l,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(11)}):r===11?v.jsx(xv,{user:l,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(12)}):r===12?v.jsx(Uv,{user:l,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(13)}):r===13?v.jsx(qv,{user:l,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(14)}):r===14?v.jsx(Vv,{user:l,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(15)}):r===15?v.jsx(Fv,{user:l,onBack:()=>h(null),onSignOut:i,onNextChapter:()=>h(16)}):r===16?v.jsx(Jv,{user:l,onBack:()=>h(null),onSignOut:i}):v.jsxs("main",{className:"book-home",children:[v.jsxs("nav",{className:"book-nav","aria-label":"Main navigation",children:[v.jsxs("a",{className:"book-logo",href:"#top",children:[v.jsx("span",{className:"book-logo-mark",children:"Z"}),v.jsx("span",{children:"Zara Chabby"})]}),v.jsxs("div",{className:"book-nav-actions",children:[v.jsx("a",{className:"book-nav-link",href:"#about",children:"The book"}),v.jsx("a",{className:"book-nav-link",href:"#chapters",children:"Chapters"}),v.jsx("a",{className:"book-nav-link",href:"#excerpt",children:"Excerpt"}),v.jsx("span",{className:"signed-in-label",children:l.email}),v.jsx("button",{type:"button",className:"text-button",onClick:i,children:"Sign out"})]})]}),v.jsxs("section",{className:"book-hero",id:"top",children:[v.jsxs("div",{className:"book-intro",children:[v.jsx("p",{className:"eyebrow",children:"A story by Dumbo Phatson"}),v.jsx("h1",{children:"Thus spoke Zara Chabby"}),v.jsx("p",{className:"book-lede",children:"A book for every one and no one."}),v.jsxs("div",{className:"book-actions",children:[v.jsxs("button",{type:"button",className:"primary-book-button",onClick:()=>h(1),children:["Enter the story ",v.jsx("span",{"aria-hidden":"true",children:"→"})]}),v.jsx("a",{className:"secondary-book-button",href:"#excerpt",children:"Read an excerpt"})]})]}),v.jsxs("div",{className:"book-cover","aria-label":"Book cover: Thus spoke Zara Chabby",children:[v.jsx("span",{className:"cover-kicker",children:"A novel"}),v.jsxs("div",{className:"cover-title",children:[v.jsx("strong",{children:"Thus spoke"}),v.jsx("strong",{children:"Zara Chabby"})]}),v.jsx("span",{className:"cover-author",children:"Dumbo Phatson"})]})]}),v.jsxs("section",{className:"book-about",id:"about",children:[v.jsx("div",{className:"section-index",children:"01"}),v.jsxs("div",{className:"book-about-copy",children:[v.jsx("p",{className:"eyebrow",children:"A foreword"}),v.jsx("h2",{children:"A strange, beautiful beginning."}),v.jsx("p",{className:"foreword-text",children:"This book was inspired by nothing beyond the strange, beautiful, and unforgiving thing we call life."}),v.jsx("p",{className:"foreword-author",children:"— Dumbo Phatson I"})]})]}),v.jsxs("section",{className:"book-chapters",id:"chapters",children:[v.jsx("div",{className:"section-index",children:"02"}),v.jsxs("div",{className:"chapters-content",children:[v.jsx("p",{className:"eyebrow",children:"The table of contents"}),v.jsx("h2",{children:"Three books. One descent into meaning."}),v.jsx("div",{className:"chapter-grid",children:$v.map(d=>v.jsxs("article",{className:`chapter-book ${d.number==="Book 2"?"chapter-book-featured":""}`,children:[v.jsxs("div",{className:"chapter-book-heading",children:[v.jsx("span",{children:d.number}),d.title&&v.jsx("h3",{children:d.title}),v.jsx("p",{children:d.description})]}),v.jsx("ol",{children:d.chapters.map((f,b)=>{const H=d.number==="Book 1"&&b<7,S={"THE FRONTAL STAB (A LESSON IN FRIENDSHIP)":10,"THE MARKET OF EMPTY PRAISE":11,"THE WEIGHT OF HONEST EYES":12,"THE ENEMY WHO ELEVATES":13,"THE TRIAL OF THE TRUE FRIEND":14,"THE BIRTH OF THE HIGHER BOND":15,"THE LAST FRIEND":16},k=d.number==="Book 1"?b+1:S[f],R=!!k||H;return v.jsx("li",{className:R?"readable":"",children:v.jsx("button",{type:"button",disabled:!R,onClick:()=>k&&h(k),children:f})},f)})})]},d.number))})]})]}),v.jsxs("section",{className:"book-excerpt",id:"excerpt",children:[v.jsx("div",{className:"section-index",children:"03"}),v.jsxs("div",{children:[v.jsx("p",{className:"eyebrow",children:"From the opening pages"}),v.jsx("blockquote",{children:"“There are names that follow you, and names that wait for you. Zara heard his in the distance and turned toward it.”"}),v.jsx("p",{className:"excerpt-note",children:"More of the story is waiting inside."})]})]}),v.jsxs("footer",{className:"site-footer",children:[v.jsx("span",{children:"Thus spoke Zara Chabby"}),v.jsx("span",{children:"Written by Dumbo Phatson"}),v.jsx("a",{href:"#top",children:"Back to top ↑"})]})]})}const Yf=l=>{switch(l.code){case"auth/email-already-in-use":return"An account already exists with this email.";case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return"The email or password is incorrect.";case"auth/weak-password":return"Use a password with at least six characters.";case"auth/invalid-email":return"Enter a valid email address.";case"auth/too-many-requests":return"Too many attempts. Please wait a moment and try again.";default:return"Something went wrong. Please try again."}};function eT(){const[l,i]=Be.useState(!0),[r,h]=Be.useState(""),[d,f]=Be.useState(""),[b,H]=Be.useState(""),[S,k]=Be.useState(""),[R,U]=Be.useState(!0),[V,te]=Be.useState(null),[ce,Oe]=Be.useState(!0),[ue,He]=Be.useState(!1),[be,ve]=Be.useState(""),[re,Y]=Be.useState("");Be.useEffect(()=>tp(Wa,K=>{te(K),Oe(!1)}),[]);const we=D=>{i(D),Y(""),ve("")},Xe=async D=>{if(D.preventDefault(),Y(""),ve(""),!l&&b!==S){Y("Passwords do not match.");return}He(!0);try{if(await ep(Wa,R?uy:Ah),l)await Jb(Wa,d,b);else{const K=await Qb(Wa,d,b);await Pb(K.user,{displayName:r})}}catch(K){Y(Yf(K))}finally{He(!1)}},ht=async()=>{if(!d){Y("Enter your email address first.");return}Y(""),ve("");try{await Kb(Wa,d),ve("Password reset email sent. Check your inbox.")}catch(D){Y(Yf(D))}};return ce?v.jsx("main",{className:"auth-card auth-loading",children:"Loading..."}):V?v.jsx(Pv,{user:V,onSignOut:()=>np(Wa)}):v.jsx("main",{className:"auth-shell",children:v.jsxs("section",{className:"auth-card","aria-labelledby":"auth-title",children:[v.jsxs("div",{className:"auth-brand",children:[v.jsx("span",{className:"brand-mark",children:"Z"}),v.jsx("span",{children:"Zara Chabby"})]}),v.jsxs("div",{className:"auth-heading",children:[v.jsx("p",{className:"eyebrow",children:"A private reading room"}),v.jsx("h1",{id:"auth-title",children:l?"Login":"Sign Up"}),v.jsx("p",{className:"auth-subtitle",children:l?"Return to the story whenever you are ready.":"Make a place for the story to stay with you."})]}),v.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication mode",children:[v.jsx("button",{type:"button",className:l?"active":"",role:"tab","aria-selected":l,onClick:()=>we(!0),children:"Login"}),v.jsx("button",{type:"button",className:l?"":"active",role:"tab","aria-selected":!l,onClick:()=>we(!1),children:"Sign up"})]}),v.jsxs("form",{className:"auth-form",onSubmit:Xe,children:[!l&&v.jsxs("label",{children:["Full name",v.jsx("input",{type:"text",placeholder:"Your name",value:r,onChange:D=>h(D.target.value),required:!0})]}),v.jsxs("label",{children:["Email address",v.jsx("input",{type:"email",placeholder:"you@example.com",value:d,onChange:D=>f(D.target.value),required:!0})]}),v.jsxs("label",{children:["Password",v.jsx("input",{type:"password",placeholder:"Enter your password",value:b,onChange:D=>H(D.target.value),minLength:"6",required:!0})]}),!l&&v.jsxs("label",{children:["Confirm password",v.jsx("input",{type:"password",placeholder:"Repeat your password",value:S,onChange:D=>k(D.target.value),minLength:"6",required:!0})]}),l&&v.jsxs("div",{className:"form-meta",children:[v.jsxs("label",{className:"remember-me",children:[v.jsx("input",{type:"checkbox",checked:R,onChange:D=>U(D.target.checked)}),v.jsx("span",{children:"Remember me"})]}),v.jsx("button",{type:"button",onClick:ht,children:"Forgot password?"})]}),(re||be)&&v.jsx("p",{className:re?"auth-message error":"auth-message",children:re||be}),v.jsxs("button",{type:"submit",className:"submit-button",disabled:ue,children:[ue?"Please wait...":l?"Login":"Create account",v.jsx("span",{"aria-hidden":"true",children:"→"})]}),v.jsxs("p",{className:"auth-switch",children:[l?"Don't have an account?":"Already have an account?"," ",v.jsx("button",{type:"button",onClick:()=>we(!l),children:l?"Sign up":"Login"})]})]})]})})}const tT=()=>v.jsxs(v.Fragment,{children:[v.jsx(eT,{}),v.jsx(rw,{})]});Kg.createRoot(document.getElementById("root")).render(v.jsx(Be.StrictMode,{children:v.jsx(tT,{})}));
