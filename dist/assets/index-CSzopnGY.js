(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&l(b)}).observe(document,{childList:!0,subtree:!0});function h(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=h(u);fetch(u.href,f)}})();var el={exports:{}},ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function jg(){if(uf)return ei;uf=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function h(l,u,f){var b=null;if(f!==void 0&&(b=""+f),u.key!==void 0&&(b=""+u.key),"key"in u){f={};for(var N in u)N!=="key"&&(f[N]=u[N])}else f=u;return u=f.ref,{$$typeof:r,type:l,key:b,ref:u!==void 0?u:null,props:f}}return ei.Fragment=o,ei.jsx=h,ei.jsxs=h,ei}var cf;function Lg(){return cf||(cf=1,el.exports=jg()),el.exports}var p=Lg(),tl={exports:{}},X={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff;function zg(){if(ff)return X;ff=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),b=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),M=Symbol.iterator;function U(m){return m===null||typeof m!="object"?null:(m=M&&m[M]||m["@@iterator"],typeof m=="function"?m:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},re=Object.assign,xe={};function He(m,C,L){this.props=m,this.context=C,this.refs=xe,this.updater=L||te}He.prototype.isReactComponent={},He.prototype.setState=function(m,C){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,C,"setState")},He.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function fe(){}fe.prototype=He.prototype;function le(m,C,L){this.props=m,this.context=C,this.refs=xe,this.updater=L||te}var be=le.prototype=new fe;be.constructor=le,re(be,He.prototype),be.isPureReactComponent=!0;var Oe=Array.isArray,W={H:null,A:null,T:null,S:null},pe=Object.prototype.hasOwnProperty;function ee(m,C,L,Z,B,ae){return L=ae.ref,{$$typeof:r,type:m,key:C,ref:L!==void 0?L:null,props:ae}}function ve(m,C){return ee(m.type,C,void 0,void 0,void 0,m.props)}function _(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function V(m){var C={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(L){return C[L]})}var dt=/\/+/g;function Zt(m,C){return typeof m=="object"&&m!==null&&m.key!=null?V(""+m.key):C.toString(36)}function Nt(){}function jt(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Nt,Nt):(m.status="pending",m.then(function(C){m.status==="pending"&&(m.status="fulfilled",m.value=C)},function(C){m.status==="pending"&&(m.status="rejected",m.reason=C)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Pe(m,C,L,Z,B){var ae=typeof m;(ae==="undefined"||ae==="boolean")&&(m=null);var Q=!1;if(m===null)Q=!0;else switch(ae){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(m.$$typeof){case r:case o:Q=!0;break;case x:return Q=m._init,Pe(Q(m._payload),C,L,Z,B)}}if(Q)return B=B(m),Q=Z===""?"."+Zt(m,0):Z,Oe(B)?(L="",Q!=null&&(L=Q.replace(dt,"$&/")+"/"),Pe(B,C,L,"",function(Re){return Re})):B!=null&&(_(B)&&(B=ve(B,L+(B.key==null||m&&m.key===B.key?"":(""+B.key).replace(dt,"$&/")+"/")+Q)),C.push(B)),1;Q=0;var Qe=Z===""?".":Z+":";if(Oe(m))for(var he=0;he<m.length;he++)Z=m[he],ae=Qe+Zt(Z,he),Q+=Pe(Z,C,L,ae,B);else if(he=U(m),typeof he=="function")for(m=he.call(m),he=0;!(Z=m.next()).done;)Z=Z.value,ae=Qe+Zt(Z,he++),Q+=Pe(Z,C,L,ae,B);else if(ae==="object"){if(typeof m.then=="function")return Pe(jt(m),C,L,Z,B);throw C=String(m),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return Q}function R(m,C,L){if(m==null)return m;var Z=[],B=0;return Pe(m,Z,"","",function(ae){return C.call(L,ae,B++)}),Z}function K(m){if(m._status===-1){var C=m._result;C=C(),C.then(function(L){(m._status===0||m._status===-1)&&(m._status=1,m._result=L)},function(L){(m._status===0||m._status===-1)&&(m._status=2,m._result=L)}),m._status===-1&&(m._status=0,m._result=C)}if(m._status===1)return m._result.default;throw m._result}var z=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function ye(){}return X.Children={map:R,forEach:function(m,C,L){R(m,function(){C.apply(this,arguments)},L)},count:function(m){var C=0;return R(m,function(){C++}),C},toArray:function(m){return R(m,function(C){return C})||[]},only:function(m){if(!_(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},X.Component=He,X.Fragment=h,X.Profiler=u,X.PureComponent=le,X.StrictMode=l,X.Suspense=H,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,X.act=function(){throw Error("act(...) is not supported in production builds of React.")},X.cache=function(m){return function(){return m.apply(null,arguments)}},X.cloneElement=function(m,C,L){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Z=re({},m.props),B=m.key,ae=void 0;if(C!=null)for(Q in C.ref!==void 0&&(ae=void 0),C.key!==void 0&&(B=""+C.key),C)!pe.call(C,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&C.ref===void 0||(Z[Q]=C[Q]);var Q=arguments.length-2;if(Q===1)Z.children=L;else if(1<Q){for(var Qe=Array(Q),he=0;he<Q;he++)Qe[he]=arguments[he+2];Z.children=Qe}return ee(m.type,B,void 0,void 0,ae,Z)},X.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:f,_context:m},m},X.createElement=function(m,C,L){var Z,B={},ae=null;if(C!=null)for(Z in C.key!==void 0&&(ae=""+C.key),C)pe.call(C,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(B[Z]=C[Z]);var Q=arguments.length-2;if(Q===1)B.children=L;else if(1<Q){for(var Qe=Array(Q),he=0;he<Q;he++)Qe[he]=arguments[he+2];B.children=Qe}if(m&&m.defaultProps)for(Z in Q=m.defaultProps,Q)B[Z]===void 0&&(B[Z]=Q[Z]);return ee(m,ae,void 0,void 0,null,B)},X.createRef=function(){return{current:null}},X.forwardRef=function(m){return{$$typeof:N,render:m}},X.isValidElement=_,X.lazy=function(m){return{$$typeof:x,_payload:{_status:-1,_result:m},_init:K}},X.memo=function(m,C){return{$$typeof:T,type:m,compare:C===void 0?null:C}},X.startTransition=function(m){var C=W.T,L={};W.T=L;try{var Z=m(),B=W.S;B!==null&&B(L,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ye,z)}catch(ae){z(ae)}finally{W.T=C}},X.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},X.use=function(m){return W.H.use(m)},X.useActionState=function(m,C,L){return W.H.useActionState(m,C,L)},X.useCallback=function(m,C){return W.H.useCallback(m,C)},X.useContext=function(m){return W.H.useContext(m)},X.useDebugValue=function(){},X.useDeferredValue=function(m,C){return W.H.useDeferredValue(m,C)},X.useEffect=function(m,C){return W.H.useEffect(m,C)},X.useId=function(){return W.H.useId()},X.useImperativeHandle=function(m,C,L){return W.H.useImperativeHandle(m,C,L)},X.useInsertionEffect=function(m,C){return W.H.useInsertionEffect(m,C)},X.useLayoutEffect=function(m,C){return W.H.useLayoutEffect(m,C)},X.useMemo=function(m,C){return W.H.useMemo(m,C)},X.useOptimistic=function(m,C){return W.H.useOptimistic(m,C)},X.useReducer=function(m,C,L){return W.H.useReducer(m,C,L)},X.useRef=function(m){return W.H.useRef(m)},X.useState=function(m){return W.H.useState(m)},X.useSyncExternalStore=function(m,C,L){return W.H.useSyncExternalStore(m,C,L)},X.useTransition=function(){return W.H.useTransition()},X.version="19.0.0",X}var yf;function ml(){return yf||(yf=1,tl.exports=zg()),tl.exports}var _e=ml(),nl={exports:{}},ti={},al={exports:{}},ol={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Ug(){return mf||(mf=1,function(r){function o(R,K){var z=R.length;R.push(K);e:for(;0<z;){var ye=z-1>>>1,m=R[ye];if(0<u(m,K))R[ye]=K,R[z]=m,z=ye;else break e}}function h(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var K=R[0],z=R.pop();if(z!==K){R[0]=z;e:for(var ye=0,m=R.length,C=m>>>1;ye<C;){var L=2*(ye+1)-1,Z=R[L],B=L+1,ae=R[B];if(0>u(Z,z))B<m&&0>u(ae,Z)?(R[ye]=ae,R[B]=z,ye=B):(R[ye]=Z,R[L]=z,ye=L);else if(B<m&&0>u(ae,z))R[ye]=ae,R[B]=z,ye=B;else break e}}return K}function u(R,K){var z=R.sortIndex-K.sortIndex;return z!==0?z:R.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var b=Date,N=b.now();r.unstable_now=function(){return b.now()-N}}var H=[],T=[],x=1,M=null,U=3,te=!1,re=!1,xe=!1,He=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function be(R){for(var K=h(T);K!==null;){if(K.callback===null)l(T);else if(K.startTime<=R)l(T),K.sortIndex=K.expirationTime,o(H,K);else break;K=h(T)}}function Oe(R){if(xe=!1,be(R),!re)if(h(H)!==null)re=!0,jt();else{var K=h(T);K!==null&&Pe(Oe,K.startTime-R)}}var W=!1,pe=-1,ee=5,ve=-1;function _(){return!(r.unstable_now()-ve<ee)}function V(){if(W){var R=r.unstable_now();ve=R;var K=!0;try{e:{re=!1,xe&&(xe=!1,fe(pe),pe=-1),te=!0;var z=U;try{t:{for(be(R),M=h(H);M!==null&&!(M.expirationTime>R&&_());){var ye=M.callback;if(typeof ye=="function"){M.callback=null,U=M.priorityLevel;var m=ye(M.expirationTime<=R);if(R=r.unstable_now(),typeof m=="function"){M.callback=m,be(R),K=!0;break t}M===h(H)&&l(H),be(R)}else l(H);M=h(H)}if(M!==null)K=!0;else{var C=h(T);C!==null&&Pe(Oe,C.startTime-R),K=!1}}break e}finally{M=null,U=z,te=!1}K=void 0}}finally{K?dt():W=!1}}}var dt;if(typeof le=="function")dt=function(){le(V)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Nt=Zt.port2;Zt.port1.onmessage=V,dt=function(){Nt.postMessage(null)}}else dt=function(){He(V,0)};function jt(){W||(W=!0,dt())}function Pe(R,K){pe=He(function(){R(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_continueExecution=function(){re||te||(re=!0,jt())},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return U},r.unstable_getFirstCallbackNode=function(){return h(H)},r.unstable_next=function(R){switch(U){case 1:case 2:case 3:var K=3;break;default:K=U}var z=U;U=K;try{return R()}finally{U=z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(R,K){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=U;U=R;try{return K()}finally{U=z}},r.unstable_scheduleCallback=function(R,K,z){var ye=r.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ye+z:ye):z=ye,R){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=z+m,R={id:x++,callback:K,priorityLevel:R,startTime:z,expirationTime:m,sortIndex:-1},z>ye?(R.sortIndex=z,o(T,R),h(H)===null&&R===h(T)&&(xe?(fe(pe),pe=-1):xe=!0,Pe(Oe,z-ye))):(R.sortIndex=m,o(H,R),re||te||(re=!0,jt())),R},r.unstable_shouldYield=_,r.unstable_wrapCallback=function(R){var K=U;return function(){var z=U;U=K;try{return R.apply(this,arguments)}finally{U=z}}}}(ol)),ol}var gf;function Vg(){return gf||(gf=1,al.exports=Ug()),al.exports}var il={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function Gg(){if(wf)return Ke;wf=1;var r=ml();function o(H){var T="https://react.dev/errors/"+H;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)T+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+H+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var l={d:{f:h,r:function(){throw Error(o(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(H,T,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:""+M,children:H,containerInfo:T,implementation:x}}var b=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(H,T){if(H==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Ke.createPortal=function(H,T){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(o(299));return f(H,T,null,x)},Ke.flushSync=function(H){var T=b.T,x=l.p;try{if(b.T=null,l.p=2,H)return H()}finally{b.T=T,l.p=x,l.d.f()}},Ke.preconnect=function(H,T){typeof H=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,l.d.C(H,T))},Ke.prefetchDNS=function(H){typeof H=="string"&&l.d.D(H)},Ke.preinit=function(H,T){if(typeof H=="string"&&T&&typeof T.as=="string"){var x=T.as,M=N(x,T.crossOrigin),U=typeof T.integrity=="string"?T.integrity:void 0,te=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;x==="style"?l.d.S(H,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:M,integrity:U,fetchPriority:te}):x==="script"&&l.d.X(H,{crossOrigin:M,integrity:U,fetchPriority:te,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Ke.preinitModule=function(H,T){if(typeof H=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var x=N(T.as,T.crossOrigin);l.d.M(H,{crossOrigin:x,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&l.d.M(H)},Ke.preload=function(H,T){if(typeof H=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var x=T.as,M=N(x,T.crossOrigin);l.d.L(H,x,{crossOrigin:M,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Ke.preloadModule=function(H,T){if(typeof H=="string")if(T){var x=N(T.as,T.crossOrigin);l.d.m(H,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:x,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else l.d.m(H)},Ke.requestFormReset=function(H){l.d.r(H)},Ke.unstable_batchedUpdates=function(H,T){return H(T)},Ke.useFormState=function(H,T,x){return b.H.useFormState(H,T,x)},Ke.useFormStatus=function(){return b.H.useHostTransitionStatus()},Ke.version="19.0.0",Ke}var pf;function Wg(){if(pf)return il.exports;pf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),il.exports=Gg(),il.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function Fg(){if(bf)return ti;bf=1;var r=Vg(),o=ml(),h=Wg();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var f=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),te=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),Oe=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case N:return"Portal";case x:return"Profiler";case T:return"StrictMode";case xe:return"Suspense";case He:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case te:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=Object.assign,dt,Zt;function Nt(e){if(dt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dt=t&&t[1]||"",Zt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+Zt}var jt=!1;function Pe(e,t){if(!e||jt)return"";jt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var I=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){I=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){I=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&I&&typeof A.stack=="string")return[A.stack,I.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],c=s[1];if(d&&c){var y=d.split(`
`),w=c.split(`
`);for(i=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(a===y.length||i===w.length)for(a=y.length-1,i=w.length-1;1<=a&&0<=i&&y[a]!==w[i];)i--;for(;1<=a&&0<=i;a--,i--)if(y[a]!==w[i]){if(a!==1||i!==1)do if(a--,i--,0>i||y[a]!==w[i]){var S=`
`+y[a].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=a&&0<=i);break}}}finally{jt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Nt(n):""}function R(e){switch(e.tag){case 26:case 27:case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return e=Pe(e.type,!1),e;case 11:return e=Pe(e.type.render,!1),e;case 1:return e=Pe(e.type,!0),e;default:return""}}function K(e){try{var t="";do t+=R(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function z(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ye(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(z(e)!==e)throw Error(l(188))}function C(e){var t=e.alternate;if(!t){if(t=z(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return m(i),e;if(s===a)return m(i),t;s=s.sibling}throw Error(l(188))}if(n.return!==a.return)n=i,a=s;else{for(var d=!1,c=i.child;c;){if(c===n){d=!0,n=i,a=s;break}if(c===a){d=!0,a=i,n=s;break}c=c.sibling}if(!d){for(c=s.child;c;){if(c===n){d=!0,n=s,a=i;break}if(c===a){d=!0,a=s,n=i;break}c=c.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==a)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var Z=Array.isArray,B=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Q=[],Qe=-1;function he(e){return{current:e}}function Re(e){0>Qe||(e.current=Q[Qe],Q[Qe]=null,Qe--)}function ke(e,t){Qe++,Q[Qe]=e.current,e.current=t}var Ot=he(null),no=he(null),rn=he(null),yi=he(null);function mi(e,t){switch(ke(rn,t),ke(no,e),ke(Ot,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Zc(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Zc(e),t=jc(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Re(Ot),ke(Ot,t)}function da(){Re(Ot),Re(no),Re(rn)}function Gs(e){e.memoizedState!==null&&ke(yi,e);var t=Ot.current,n=jc(t,e.type);t!==n&&(ke(no,e),ke(Ot,n))}function gi(e){no.current===e&&(Re(Ot),Re(no)),yi.current===e&&(Re(yi),Xo._currentValue=ae)}var Ws=Object.prototype.hasOwnProperty,Fs=r.unstable_scheduleCallback,Ks=r.unstable_cancelCallback,py=r.unstable_shouldYield,by=r.unstable_requestPaint,Ct=r.unstable_now,vy=r.unstable_getCurrentPriorityLevel,Nl=r.unstable_ImmediatePriority,Ol=r.unstable_UserBlockingPriority,wi=r.unstable_NormalPriority,ky=r.unstable_LowPriority,Cl=r.unstable_IdlePriority,Ty=r.log,Iy=r.unstable_setDisableYieldValue,ao=null,at=null;function Hy(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(ao,e,void 0,(e.current.flags&128)===128)}catch{}}function ln(e){if(typeof Ty=="function"&&Iy(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(ao,e)}catch{}}var ot=Math.clz32?Math.clz32:Ey,Ay=Math.log,Sy=Math.LN2;function Ey(e){return e>>>=0,e===0?32:31-(Ay(e)/Sy|0)|0}var pi=128,bi=4194304;function Mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,d=e.warmLanes;e=e.finishedLanes!==0;var c=n&134217727;return c!==0?(n=c&~i,n!==0?a=Mn(n):(s&=c,s!==0?a=Mn(s):e||(d=c&~d,d!==0&&(a=Mn(d))))):(c=n&~i,c!==0?a=Mn(c):s!==0?a=Mn(s):e||(d=n&~d,d!==0&&(a=Mn(d)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,d=t&-t,i>=d||i===32&&(d&4194176)!==0)?t:a}function oo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ny(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _l(){var e=pi;return pi<<=1,(pi&4194176)===0&&(pi=128),e}function xl(){var e=bi;return bi<<=1,(bi&62914560)===0&&(bi=4194304),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function io(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oy(e,t,n,a,i,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,y=e.expirationTimes,w=e.hiddenUpdates;for(n=d&~n;0<n;){var S=31-ot(n),O=1<<S;c[S]=0,y[S]=-1;var I=w[S];if(I!==null)for(w[S]=null,S=0;S<I.length;S++){var A=I[S];A!==null&&(A.lane&=-536870913)}n&=~O}a!==0&&Rl(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Rl(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ot(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function Bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ot(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Yl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dl(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:of(e.type))}function Cy(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}var dn=Math.random().toString(36).slice(2),We="__reactFiber$"+dn,et="__reactProps$"+dn,ua="__reactContainer$"+dn,Qs="__reactEvents$"+dn,_y="__reactListeners$"+dn,xy="__reactHandles$"+dn,Ml="__reactResources$"+dn,so="__reactMarker$"+dn;function Js(e){delete e[We],delete e[et],delete e[Qs],delete e[_y],delete e[xy]}function qn(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ua]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uc(e);e!==null;){if(n=e[We])return n;e=Uc(e)}return t}e=n,n=e.parentNode}return null}function ca(e){if(e=e[We]||e[ua]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ho(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function fa(e){var t=e[Ml];return t||(t=e[Ml]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[so]=!0}var ql=new Set,Zl={};function Zn(e,t){ya(e,t),ya(e+"Capture",t)}function ya(e,t){for(Zl[e]=t,e=0;e<t.length;e++)ql.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ry=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jl={},Ll={};function By(e){return Ws.call(Ll,e)?!0:Ws.call(jl,e)?!1:Ry.test(e)?Ll[e]=!0:(jl[e]=!0,!1)}function ki(e,t,n){if(By(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ti(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function zt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yy(e){var t=zl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){e._valueTracker||(e._valueTracker=Yy(e))}function Ul(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=zl(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dy=/[\n"\\]/g;function ct(e){return e.replace(Dy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $s(e,t,n,a,i,s,d,c){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ps(e,d,ut(t)):n!=null?Ps(e,d,ut(n)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ut(c):e.removeAttribute("name")}function Vl(e,t,n,a,i,s,d,c){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+ut(n):"",t=t!=null?""+ut(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Ps(e,t,n){t==="number"&&Hi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ma(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gl(e,t,n){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ut(n):""}function Wl(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(l(92));if(Z(a)){if(1<a.length)throw Error(l(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=ut(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var My=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fl(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||My.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Kl(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Fl(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&Fl(e,s,t[s])}function eh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ai(e){return Zy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var th=null;function nh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,pa=null;function Xl(e){var t=ca(e);if(t&&(e=t.stateNode)){var n=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if($s(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[et]||null;if(!i)throw Error(l(90));$s(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ul(a)}break e;case"textarea":Gl(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}}}var ah=!1;function Ql(e,t,n){if(ah)return e(t,n);ah=!0;try{var a=e(t);return a}finally{if(ah=!1,(wa!==null||pa!==null)&&(rs(),wa&&(t=wa,e=pa,pa=wa=null,Xl(t),e)))for(t=0;t<e.length;t++)Xl(e[t])}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var a=n[et]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var oh=!1;if(Lt)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){oh=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{oh=!1}var un=null,ih=null,Si=null;function Jl(){if(Si)return Si;var e,t=ih,n=t.length,a,i="value"in un?un.value:un.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===i[s-a];a++);return Si=i.slice(e,1<a?1-a:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function $l(){return!1}function tt(e){function t(n,a,i,s,d){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ni:$l,this.isPropagationStopped=$l,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=tt(jn),uo=V({},jn,{view:0,detail:0}),jy=tt(uo),sh,hh,co,Ci=V({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(sh=e.screenX-co.screenX,hh=e.screenY-co.screenY):hh=sh=0,co=e),sh)},movementY:function(e){return"movementY"in e?e.movementY:hh}}),Pl=tt(Ci),Ly=V({},Ci,{dataTransfer:0}),zy=tt(Ly),Uy=V({},uo,{relatedTarget:0}),rh=tt(Uy),Vy=V({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gy=tt(Vy),Wy=V({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fy=tt(Wy),Ky=V({},jn,{data:0}),ed=tt(Ky),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jy[e])?!!t[e]:!1}function lh(){return $y}var Py=V({},uo,{key:function(e){if(e.key){var t=Xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lh,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),em=tt(Py),tm=V({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=tt(tm),nm=V({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lh}),am=tt(nm),om=V({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),im=tt(om),sm=V({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=tt(sm),rm=V({},jn,{newState:0,oldState:0}),lm=tt(rm),dm=[9,13,27,32],dh=Lt&&"CompositionEvent"in window,fo=null;Lt&&"documentMode"in document&&(fo=document.documentMode);var um=Lt&&"TextEvent"in window&&!fo,nd=Lt&&(!dh||fo&&8<fo&&11>=fo),ad=" ",od=!1;function id(e,t){switch(e){case"keyup":return dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function cm(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(od=!0,ad);case"textInput":return e=t.data,e===ad&&od?null:e;default:return null}}function fm(e,t){if(ba)return e==="compositionend"||!dh&&id(e,t)?(e=Jl(),Si=ih=un=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nd&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function rd(e,t,n,a){wa?pa?pa.push(a):pa=[a]:wa=a,t=fs(t,"onChange"),0<t.length&&(n=new Oi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var yo=null,mo=null;function mm(e){Bc(e,0)}function _i(e){var t=ho(e);if(Ul(t))return e}function ld(e,t){if(e==="change")return t}var dd=!1;if(Lt){var uh;if(Lt){var ch="oninput"in document;if(!ch){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),ch=typeof ud.oninput=="function"}uh=ch}else uh=!1;dd=uh&&(!document.documentMode||9<document.documentMode)}function cd(){yo&&(yo.detachEvent("onpropertychange",fd),mo=yo=null)}function fd(e){if(e.propertyName==="value"&&_i(mo)){var t=[];rd(t,mo,e,nh(e)),Ql(mm,t)}}function gm(e,t,n){e==="focusin"?(cd(),yo=t,mo=n,yo.attachEvent("onpropertychange",fd)):e==="focusout"&&cd()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(mo)}function pm(e,t){if(e==="click")return _i(t)}function bm(e,t){if(e==="input"||e==="change")return _i(t)}function vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:vm;function go(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Ws.call(t,i)||!it(e[i],t[i]))return!1}return!0}function yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function md(e,t){var n=yd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yd(n)}}function gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function km(e,t){var n=wd(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gd(t.ownerDocument.documentElement,t)){if(a!==null&&fh(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!n.extend&&s>a&&(i=a,a=s,s=i),i=md(t,s);var d=md(t,a);i&&d&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==d.node||n.focusOffset!==d.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>a?(n.addRange(e),n.extend(d.node,d.offset)):(e.setEnd(d.node,d.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tm=Lt&&"documentMode"in document&&11>=document.documentMode,va=null,yh=null,wo=null,mh=!1;function pd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mh||va==null||va!==Hi(a)||(a=va,"selectionStart"in a&&fh(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wo&&go(wo,a)||(wo=a,a=fs(yh,"onSelect"),0<a.length&&(t=new Oi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Ln(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ka={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionrun:Ln("Transition","TransitionRun"),transitionstart:Ln("Transition","TransitionStart"),transitioncancel:Ln("Transition","TransitionCancel"),transitionend:Ln("Transition","TransitionEnd")},gh={},bd={};Lt&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function zn(e){if(gh[e])return gh[e];if(!ka[e])return e;var t=ka[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bd)return gh[e]=t[n];return e}var vd=zn("animationend"),kd=zn("animationiteration"),Td=zn("animationstart"),Im=zn("transitionrun"),Hm=zn("transitionstart"),Am=zn("transitioncancel"),Id=zn("transitionend"),Hd=new Map,Ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function It(e,t){Hd.set(e,t),Zn(t,[e])}var ft=[],Ta=0,wh=0;function xi(){for(var e=Ta,t=wh=Ta=0;t<e;){var n=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var s=ft[t];if(ft[t++]=null,a!==null&&i!==null){var d=a.pending;d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i}s!==0&&Sd(n,i,s)}}function Ri(e,t,n,a){ft[Ta++]=e,ft[Ta++]=t,ft[Ta++]=n,ft[Ta++]=a,wh|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ph(e,t,n,a){return Ri(e,t,n,a),Bi(e)}function cn(e,t){return Ri(e,null,null,t),Bi(e)}function Sd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;i&&t!==null&&e.tag===3&&(s=e.stateNode,i=31-ot(n),s=s.hiddenUpdates,e=s[i],e===null?s[i]=[t]:e.push(t),t.lane=n|536870912)}function Bi(e){if(50<zo)throw zo=0,Hr=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={},Ed=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var n=Ed.get(e);return n!==void 0?n:(t={value:e,source:t,stack:K(t)},Ed.set(e,t),t)}return{value:e,source:t,stack:K(t)}}var Ha=[],Aa=0,Yi=null,Di=0,mt=[],gt=0,Un=null,Ut=1,Vt="";function Vn(e,t){Ha[Aa++]=Di,Ha[Aa++]=Yi,Yi=e,Di=t}function Nd(e,t,n){mt[gt++]=Ut,mt[gt++]=Vt,mt[gt++]=Un,Un=e;var a=Ut;e=Vt;var i=32-ot(a)-1;a&=~(1<<i),n+=1;var s=32-ot(t)+i;if(30<s){var d=i-i%5;s=(a&(1<<d)-1).toString(32),a>>=d,i-=d,Ut=1<<32-ot(t)+i|n<<i|a,Vt=s+e}else Ut=1<<s|n<<i|a,Vt=e}function bh(e){e.return!==null&&(Vn(e,1),Nd(e,1,0))}function vh(e){for(;e===Yi;)Yi=Ha[--Aa],Ha[Aa]=null,Di=Ha[--Aa],Ha[Aa]=null;for(;e===Un;)Un=mt[--gt],mt[gt]=null,Vt=mt[--gt],mt[gt]=null,Ut=mt[--gt],mt[gt]=null}var Je=null,Ue=null,ie=!1,Ht=null,_t=!1,kh=Error(l(519));function Gn(e){var t=Error(l(418,""));throw vo(yt(t,e)),kh}function Od(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[We]=e,t[et]=a,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<Vo.length;n++)ne(Vo[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Vl(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ii(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Wl(t,a.value,a.defaultValue,a.children),Ii(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||qc(t.textContent,n)?(a.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),a.onScroll!=null&&ne("scroll",t),a.onScrollEnd!=null&&ne("scrollend",t),a.onClick!=null&&(t.onclick=ys),t=!0):t=!1,t||Gn(e)}function Cd(e){for(Je=e.return;Je;)switch(Je.tag){case 3:case 27:_t=!0;return;case 5:case 13:_t=!1;return;default:Je=Je.return}}function po(e){if(e!==Je)return!1;if(!ie)return Cd(e),ie=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lr(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&Ue&&Gn(e),Cd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ue=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ue=null}}else Ue=Je?St(e.stateNode.nextSibling):null;return!0}function bo(){Ue=Je=null,ie=!1}function vo(e){Ht===null?Ht=[e]:Ht.push(e)}var ko=Error(l(460)),_d=Error(l(474)),Th={then:function(){}};function xd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mi(){}function Rd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Mi,Mi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===ko?Error(l(483)):e;default:if(typeof t.status=="string")t.then(Mi,Mi);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===ko?Error(l(483)):e}throw To=t,ko}}var To=null;function Bd(){if(To===null)throw Error(l(459));var e=To;return To=null,e}var Sa=null,Io=0;function qi(e){var t=Io;return Io+=1,Sa===null&&(Sa=[]),Rd(Sa,e,t)}function Ho(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zi(e,t){throw t.$$typeof===f?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yd(e){var t=e._init;return t(e._payload)}function Dd(e){function t(v,g){if(e){var k=v.deletions;k===null?(v.deletions=[g],v.flags|=16):k.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function a(v){for(var g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(v,g){return v=Hn(v,g),v.index=0,v.sibling=null,v}function s(v,g,k){return v.index=k,e?(k=v.alternate,k!==null?(k=k.index,k<g?(v.flags|=33554434,g):k):(v.flags|=33554434,g)):(v.flags|=1048576,g)}function d(v){return e&&v.alternate===null&&(v.flags|=33554434),v}function c(v,g,k,E){return g===null||g.tag!==6?(g=gr(k,v.mode,E),g.return=v,g):(g=i(g,k),g.return=v,g)}function y(v,g,k,E){var Y=k.type;return Y===H?S(v,g,k.props.children,E,k.key):g!==null&&(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===le&&Yd(Y)===g.type)?(g=i(g,k.props),Ho(g,k),g.return=v,g):(g=as(k.type,k.key,k.props,null,v.mode,E),Ho(g,k),g.return=v,g)}function w(v,g,k,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=wr(k,v.mode,E),g.return=v,g):(g=i(g,k.children||[]),g.return=v,g)}function S(v,g,k,E,Y){return g===null||g.tag!==7?(g=ta(k,v.mode,E,Y),g.return=v,g):(g=i(g,k),g.return=v,g)}function O(v,g,k){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=gr(""+g,v.mode,k),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case b:return k=as(g.type,g.key,g.props,null,v.mode,k),Ho(k,g),k.return=v,k;case N:return g=wr(g,v.mode,k),g.return=v,g;case le:var E=g._init;return g=E(g._payload),O(v,g,k)}if(Z(g)||pe(g))return g=ta(g,v.mode,k,null),g.return=v,g;if(typeof g.then=="function")return O(v,qi(g),k);if(g.$$typeof===te)return O(v,es(v,g),k);Zi(v,g)}return null}function I(v,g,k,E){var Y=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return Y!==null?null:c(v,g,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case b:return k.key===Y?y(v,g,k,E):null;case N:return k.key===Y?w(v,g,k,E):null;case le:return Y=k._init,k=Y(k._payload),I(v,g,k,E)}if(Z(k)||pe(k))return Y!==null?null:S(v,g,k,E,null);if(typeof k.then=="function")return I(v,g,qi(k),E);if(k.$$typeof===te)return I(v,g,es(v,k),E);Zi(v,k)}return null}function A(v,g,k,E,Y){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return v=v.get(k)||null,c(g,v,""+E,Y);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case b:return v=v.get(E.key===null?k:E.key)||null,y(g,v,E,Y);case N:return v=v.get(E.key===null?k:E.key)||null,w(g,v,E,Y);case le:var $=E._init;return E=$(E._payload),A(v,g,k,E,Y)}if(Z(E)||pe(E))return v=v.get(k)||null,S(g,v,E,Y,null);if(typeof E.then=="function")return A(v,g,k,qi(E),Y);if(E.$$typeof===te)return A(v,g,k,es(g,E),Y);Zi(g,E)}return null}function D(v,g,k,E){for(var Y=null,$=null,q=g,j=g=0,ze=null;q!==null&&j<k.length;j++){q.index>j?(ze=q,q=null):ze=q.sibling;var se=I(v,q,k[j],E);if(se===null){q===null&&(q=ze);break}e&&q&&se.alternate===null&&t(v,q),g=s(se,g,j),$===null?Y=se:$.sibling=se,$=se,q=ze}if(j===k.length)return n(v,q),ie&&Vn(v,j),Y;if(q===null){for(;j<k.length;j++)q=O(v,k[j],E),q!==null&&(g=s(q,g,j),$===null?Y=q:$.sibling=q,$=q);return ie&&Vn(v,j),Y}for(q=a(q);j<k.length;j++)ze=A(q,v,j,k[j],E),ze!==null&&(e&&ze.alternate!==null&&q.delete(ze.key===null?j:ze.key),g=s(ze,g,j),$===null?Y=ze:$.sibling=ze,$=ze);return e&&q.forEach(function(_n){return t(v,_n)}),ie&&Vn(v,j),Y}function F(v,g,k,E){if(k==null)throw Error(l(151));for(var Y=null,$=null,q=g,j=g=0,ze=null,se=k.next();q!==null&&!se.done;j++,se=k.next()){q.index>j?(ze=q,q=null):ze=q.sibling;var _n=I(v,q,se.value,E);if(_n===null){q===null&&(q=ze);break}e&&q&&_n.alternate===null&&t(v,q),g=s(_n,g,j),$===null?Y=_n:$.sibling=_n,$=_n,q=ze}if(se.done)return n(v,q),ie&&Vn(v,j),Y;if(q===null){for(;!se.done;j++,se=k.next())se=O(v,se.value,E),se!==null&&(g=s(se,g,j),$===null?Y=se:$.sibling=se,$=se);return ie&&Vn(v,j),Y}for(q=a(q);!se.done;j++,se=k.next())se=A(q,v,j,se.value,E),se!==null&&(e&&se.alternate!==null&&q.delete(se.key===null?j:se.key),g=s(se,g,j),$===null?Y=se:$.sibling=se,$=se);return e&&q.forEach(function(Zg){return t(v,Zg)}),ie&&Vn(v,j),Y}function Ee(v,g,k,E){if(typeof k=="object"&&k!==null&&k.type===H&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case b:e:{for(var Y=k.key;g!==null;){if(g.key===Y){if(Y=k.type,Y===H){if(g.tag===7){n(v,g.sibling),E=i(g,k.props.children),E.return=v,v=E;break e}}else if(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===le&&Yd(Y)===g.type){n(v,g.sibling),E=i(g,k.props),Ho(E,k),E.return=v,v=E;break e}n(v,g);break}else t(v,g);g=g.sibling}k.type===H?(E=ta(k.props.children,v.mode,E,k.key),E.return=v,v=E):(E=as(k.type,k.key,k.props,null,v.mode,E),Ho(E,k),E.return=v,v=E)}return d(v);case N:e:{for(Y=k.key;g!==null;){if(g.key===Y)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(v,g.sibling),E=i(g,k.children||[]),E.return=v,v=E;break e}else{n(v,g);break}else t(v,g);g=g.sibling}E=wr(k,v.mode,E),E.return=v,v=E}return d(v);case le:return Y=k._init,k=Y(k._payload),Ee(v,g,k,E)}if(Z(k))return D(v,g,k,E);if(pe(k)){if(Y=pe(k),typeof Y!="function")throw Error(l(150));return k=Y.call(k),F(v,g,k,E)}if(typeof k.then=="function")return Ee(v,g,qi(k),E);if(k.$$typeof===te)return Ee(v,g,es(v,k),E);Zi(v,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,g!==null&&g.tag===6?(n(v,g.sibling),E=i(g,k),E.return=v,v=E):(n(v,g),E=gr(k,v.mode,E),E.return=v,v=E),d(v)):n(v,g)}return function(v,g,k,E){try{Io=0;var Y=Ee(v,g,k,E);return Sa=null,Y}catch(q){if(q===ko)throw q;var $=vt(29,q,null,v.mode);return $.lanes=E,$.return=v,$}finally{}}}var Wn=Dd(!0),Md=Dd(!1),Ea=he(null),ji=he(0);function qd(e,t){e=tn,ke(ji,e),ke(Ea,t),tn=e|t.baseLanes}function Ih(){ke(ji,tn),ke(Ea,Ea.current)}function Hh(){tn=ji.current,Re(Ea),Re(ji)}var wt=he(null),xt=null;function fn(e){var t=e.alternate;ke(Me,Me.current&1),ke(wt,e),xt===null&&(t===null||Ea.current!==null||t.memoizedState!==null)&&(xt=e)}function Zd(e){if(e.tag===22){if(ke(Me,Me.current),ke(wt,e),xt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(xt=e)}}else yn()}function yn(){ke(Me,Me.current),ke(wt,wt.current)}function Gt(e){Re(wt),xt===e&&(xt=null),Re(Me)}var Me=he(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Em=r.unstable_scheduleCallback,Nm=r.unstable_NormalPriority,qe={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ah(){return{controller:new Sm,data:new Map,refCount:0}}function Ao(e){e.refCount--,e.refCount===0&&Em(Nm,function(){e.controller.abort()})}var So=null,Sh=0,Na=0,Oa=null;function Om(e,t){if(So===null){var n=So=[];Sh=0,Na=xr(),Oa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Sh++,t.then(jd,jd),t}function jd(){if(--Sh===0&&So!==null){Oa!==null&&(Oa.status="fulfilled");var e=So;So=null,Na=0,Oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Ld=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Om(e,t),Ld!==null&&Ld(e,t)};var Fn=he(null);function Eh(){var e=Fn.current;return e!==null?e:me.pooledCache}function zi(e,t){t===null?ke(Fn,Fn.current):ke(Fn,t.pool)}function zd(){var e=Eh();return e===null?null:{parent:qe._currentValue,pool:e}}var mn=0,J=null,de=null,Be=null,Ui=!1,Ca=!1,Kn=!1,Vi=0,Eo=0,_a=null,_m=0;function Ce(){throw Error(l(321))}function Nh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Oh(e,t,n,a,i,s){return mn=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Xn:gn,Kn=!1,s=n(a,i),Kn=!1,Ca&&(s=Vd(t,n,a,i)),Ud(e),s}function Ud(e){_.H=Rt;var t=de!==null&&de.next!==null;if(mn=0,Be=de=J=null,Ui=!1,Eo=0,_a=null,t)throw Error(l(300));e===null||je||(e=e.dependencies,e!==null&&Pi(e)&&(je=!0))}function Vd(e,t,n,a){J=e;var i=0;do{if(Ca&&(_a=null),Eo=0,Ca=!1,25<=i)throw Error(l(301));if(i+=1,Be=de=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=Qn,s=t(n,a)}while(Ca);return s}function xm(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?No(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(J.flags|=1024),t}function Ch(){var e=Vi!==0;return Vi=0,e}function _h(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xh(e){if(Ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ui=!1}mn=0,Be=de=J=null,Ca=!1,Eo=Vi=0,_a=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?J.memoizedState=Be=e:Be=Be.next=e,Be}function Ye(){if(de===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Be===null?J.memoizedState:Be.next;if(t!==null)Be=t,de=e;else{if(e===null)throw J.alternate===null?Error(l(467)):Error(l(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Be===null?J.memoizedState=Be=e:Be=Be.next=e}return Be}var Gi;Gi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function No(e){var t=Eo;return Eo+=1,_a===null&&(_a=[]),e=Rd(_a,e,t),t=J,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Xn:gn),e}function Wi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===te)return Fe(e)}throw Error(l(438,String(e)))}function Rh(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=J.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Gi(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Oe;return t.index++,n}function Wt(e,t){return typeof t=="function"?t(e):t}function Fi(e){var t=Ye();return Bh(t,de,e)}function Bh(e,t,n){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=n;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var c=d=null,y=null,w=t,S=!1;do{var O=w.lane&-536870913;if(O!==w.lane?(oe&O)===O:(mn&O)===O){var I=w.revertLane;if(I===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),O===Na&&(S=!0);else if((mn&I)===I){w=w.next,I===Na&&(S=!0);continue}else O={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(c=y=O,d=s):y=y.next=O,J.lanes|=I,An|=I;O=w.action,Kn&&n(s,O),s=w.hasEagerState?w.eagerState:n(s,O)}else I={lane:O,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(c=y=I,d=s):y=y.next=I,J.lanes|=O,An|=O;w=w.next}while(w!==null&&w!==t);if(y===null?d=s:y.next=c,!it(s,e.memoizedState)&&(je=!0,S&&(n=Oa,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=y,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Yh(e){var t=Ye(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);it(s,t.memoizedState)||(je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Gd(e,t,n){var a=J,i=Ye(),s=ie;if(s){if(n===void 0)throw Error(l(407));n=n()}else n=t();var d=!it((de||i).memoizedState,n);if(d&&(i.memoizedState=n,je=!0),i=i.queue,qh(Kd.bind(null,a,i,e),[e]),i.getSnapshot!==t||d||Be!==null&&Be.memoizedState.tag&1){if(a.flags|=2048,xa(9,Fd.bind(null,a,i,n,t),{destroy:void 0},null),me===null)throw Error(l(349));s||(mn&60)!==0||Wd(a,t,n)}return n}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=Gi(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fd(e,t,n,a){t.value=n,t.getSnapshot=a,Xd(t)&&Qd(e)}function Kd(e,t,n){return n(function(){Xd(t)&&Qd(e)})}function Xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Qd(e){var t=cn(e,2);t!==null&&$e(t,e,2)}function Dh(e){var t=nt();if(typeof e=="function"){var n=e;if(e=n(),Kn){ln(!0);try{n()}finally{ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Jd(e,t,n,a){return e.baseState=n,Bh(e,de,typeof a=="function"?a:Wt)}function Rm(e,t,n,a,i){if(Qi(e))throw Error(l(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};_.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,$d(t,s)):(s.next=n.next,t.pending=n.next=s)}}function $d(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=_.T,d={};_.T=d;try{var c=n(i,a),y=_.S;y!==null&&y(d,c),Pd(e,t,c)}catch(w){Mh(e,t,w)}finally{_.T=s}}else try{s=n(i,a),Pd(e,t,s)}catch(w){Mh(e,t,w)}}function Pd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){eu(e,t,a)},function(a){return Mh(e,t,a)}):eu(e,t,n)}function eu(e,t,n){t.status="fulfilled",t.value=n,tu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$d(e,n)))}function Mh(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,tu(t),t=t.next;while(t!==a)}e.action=null}function tu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nu(e,t){return t}function au(e,t){if(ie){var n=me.formState;if(n!==null){e:{var a=J;if(ie){if(Ue){t:{for(var i=Ue,s=_t;i.nodeType!==8;){if(!s){i=null;break t}if(i=St(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ue=St(i.nextSibling),a=i.data==="F!";break e}}Gn(a)}a=!1}a&&(t=n[0])}}return n=nt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:t},n.queue=a,n=ku.bind(null,J,a),a.dispatch=n,a=Dh(!1),s=Uh.bind(null,J,!1,a.queue),a=nt(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Rm.bind(null,J,i,s,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function ou(e){var t=Ye();return iu(t,de,e)}function iu(e,t,n){t=Bh(e,t,nu)[0],e=Fi(Wt)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?No(t):t;var a=Ye(),i=a.queue,s=i.dispatch;return n!==a.memoizedState&&(J.flags|=2048,xa(9,Bm.bind(null,i,n),{destroy:void 0},null)),[t,s,e]}function Bm(e,t){e.action=t}function su(e){var t=Ye(),n=de;if(n!==null)return iu(t,n,e);Ye(),t=t.memoizedState,n=Ye();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function xa(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=J.updateQueue,t===null&&(t=Gi(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function hu(){return Ye().memoizedState}function Ki(e,t,n,a){var i=nt();J.flags|=e,i.memoizedState=xa(1|t,n,{destroy:void 0},a===void 0?null:a)}function Xi(e,t,n,a){var i=Ye();a=a===void 0?null:a;var s=i.memoizedState.inst;de!==null&&a!==null&&Nh(a,de.memoizedState.deps)?i.memoizedState=xa(t,n,s,a):(J.flags|=e,i.memoizedState=xa(1|t,n,s,a))}function ru(e,t){Ki(8390656,8,e,t)}function qh(e,t){Xi(2048,8,e,t)}function lu(e,t){return Xi(4,2,e,t)}function du(e,t){return Xi(4,4,e,t)}function uu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cu(e,t,n){n=n!=null?n.concat([e]):null,Xi(4,4,uu.bind(null,t,e),n)}function Zh(){}function fu(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Nh(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function yu(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Nh(t,a[1]))return a[0];if(a=e(),Kn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[a,t],a}function jh(e,t,n){return n===void 0||(mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=gc(),J.lanes|=e,An|=e,n)}function mu(e,t,n,a){return it(n,t)?n:Ea.current!==null?(e=jh(e,n,a),it(e,t)||(je=!0),e):(mn&42)===0?(je=!0,e.memoizedState=n):(e=gc(),J.lanes|=e,An|=e,t)}function gu(e,t,n,a,i){var s=B.p;B.p=s!==0&&8>s?s:8;var d=_.T,c={};_.T=c,Uh(e,!1,t,n);try{var y=i(),w=_.S;if(w!==null&&w(c,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var S=Cm(y,a);Oo(e,t,S,lt(e))}else Oo(e,t,a,lt(e))}catch(O){Oo(e,t,{then:function(){},status:"rejected",reason:O},lt())}finally{B.p=s,_.T=d}}function Ym(){}function Lh(e,t,n,a){if(e.tag!==5)throw Error(l(476));var i=wu(e).queue;gu(e,i,t,ae,n===null?Ym:function(){return pu(e),n(a)})}function wu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pu(e){var t=wu(e).next.queue;Oo(e,t,{},lt())}function zh(){return Fe(Xo)}function bu(){return Ye().memoizedState}function vu(){return Ye().memoizedState}function Dm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=lt();e=bn(n);var a=vn(t,e,n);a!==null&&($e(a,t,n),xo(a,t,n)),t={cache:Ah()},e.payload=t;return}t=t.return}}function Mm(e,t,n){var a=lt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e)?Tu(t,n):(n=ph(e,t,n,a),n!==null&&($e(n,e,a),Iu(n,t,a)))}function ku(e,t,n){var a=lt();Oo(e,t,n,a)}function Oo(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Tu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,c=s(d,n);if(i.hasEagerState=!0,i.eagerState=c,it(c,d))return Ri(e,t,i,0),me===null&&xi(),!1}catch{}finally{}if(n=ph(e,t,i,a),n!==null)return $e(n,e,a),Iu(n,t,a),!0}return!1}function Uh(e,t,n,a){if(a={lane:2,revertLane:xr(),action:a,hasEagerState:!1,eagerState:null,next:null},Qi(e)){if(t)throw Error(l(479))}else t=ph(e,n,a,2),t!==null&&$e(t,e,2)}function Qi(e){var t=e.alternate;return e===J||t!==null&&t===J}function Tu(e,t){Ca=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iu(e,t,n){if((n&4194176)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bl(e,n)}}var Rt={readContext:Fe,use:Wi,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce};Rt.useCacheRefresh=Ce,Rt.useMemoCache=Ce,Rt.useHostTransitionStatus=Ce,Rt.useFormState=Ce,Rt.useActionState=Ce,Rt.useOptimistic=Ce;var Xn={readContext:Fe,use:Wi,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:ru,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ki(4194308,4,uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){Ki(4,2,e,t)},useMemo:function(e,t){var n=nt();t=t===void 0?null:t;var a=e();if(Kn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=nt();if(n!==void 0){var i=n(t);if(Kn){ln(!0);try{n(t)}finally{ln(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Mm.bind(null,J,e),[a.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Dh(e);var t=e.queue,n=ku.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zh,useDeferredValue:function(e,t){var n=nt();return jh(n,e,t)},useTransition:function(){var e=Dh(!1);return e=gu.bind(null,J,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=J,i=nt();if(ie){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),me===null)throw Error(l(349));(oe&60)!==0||Wd(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ru(Kd.bind(null,a,s,e),[e]),a.flags|=2048,xa(9,Fd.bind(null,a,s,n,t),{destroy:void 0},null),n},useId:function(){var e=nt(),t=me.identifierPrefix;if(ie){var n=Vt,a=Ut;n=(a&~(1<<32-ot(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return nt().memoizedState=Dm.bind(null,J)}};Xn.useMemoCache=Rh,Xn.useHostTransitionStatus=zh,Xn.useFormState=au,Xn.useActionState=au,Xn.useOptimistic=function(e){var t=nt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Uh.bind(null,J,!0,n),n.dispatch=t,[e,t]};var gn={readContext:Fe,use:Wi,useCallback:fu,useContext:Fe,useEffect:qh,useImperativeHandle:cu,useInsertionEffect:lu,useLayoutEffect:du,useMemo:yu,useReducer:Fi,useRef:hu,useState:function(){return Fi(Wt)},useDebugValue:Zh,useDeferredValue:function(e,t){var n=Ye();return mu(n,de.memoizedState,e,t)},useTransition:function(){var e=Fi(Wt)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:Gd,useId:bu};gn.useCacheRefresh=vu,gn.useMemoCache=Rh,gn.useHostTransitionStatus=zh,gn.useFormState=ou,gn.useActionState=ou,gn.useOptimistic=function(e,t){var n=Ye();return Jd(n,de,e,t)};var Qn={readContext:Fe,use:Wi,useCallback:fu,useContext:Fe,useEffect:qh,useImperativeHandle:cu,useInsertionEffect:lu,useLayoutEffect:du,useMemo:yu,useReducer:Yh,useRef:hu,useState:function(){return Yh(Wt)},useDebugValue:Zh,useDeferredValue:function(e,t){var n=Ye();return de===null?jh(n,e,t):mu(n,de.memoizedState,e,t)},useTransition:function(){var e=Yh(Wt)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:Gd,useId:bu};Qn.useCacheRefresh=vu,Qn.useMemoCache=Rh,Qn.useHostTransitionStatus=zh,Qn.useFormState=su,Qn.useActionState=su,Qn.useOptimistic=function(e,t){var n=Ye();return de!==null?Jd(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Vh(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gh={isMounted:function(e){return(e=e._reactInternals)?z(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=lt(),i=bn(a);i.payload=t,n!=null&&(i.callback=n),t=vn(e,i,a),t!==null&&($e(t,e,a),xo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=lt(),i=bn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vn(e,i,a),t!==null&&($e(t,e,a),xo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),a=bn(n);a.tag=2,t!=null&&(a.callback=t),t=vn(e,a,n),t!==null&&($e(t,e,n),xo(t,e,n))}};function Hu(e,t,n,a,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!go(n,a)||!go(i,s):!0}function Au(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Gh.enqueueReplaceState(t,t.state,null)}function Jn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=V({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Su(e){Ji(e)}function Eu(e){console.error(e)}function Nu(e){Ji(e)}function $i(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ou(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Wh(e,t,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){$i(e,t)},n}function Cu(e){return e=bn(e),e.tag=3,e}function _u(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){Ou(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Ou(t,n,a),typeof i!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function qm(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&_o(t,n,i,!0),n=wt.current,n!==null){switch(n.tag){case 13:return xt===null?Er():n.alternate===null&&Se===0&&(Se=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Th?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Or(e,a,i)),!1;case 22:return n.flags|=65536,a===Th?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Or(e,a,i)),!1}throw Error(l(435,n.tag))}return Or(e,a,i),Er(),!1}if(ie)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==kh&&(e=Error(l(422),{cause:a}),vo(yt(e,n)))):(a!==kh&&(t=Error(l(423),{cause:a}),vo(yt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=yt(a,n),i=Wh(e.stateNode,a,i),hr(e,i),Se!==4&&(Se=2)),!1;var s=Error(l(520),{cause:a});if(s=yt(s,n),jo===null?jo=[s]:jo.push(s),Se!==4&&(Se=2),t===null)return!0;a=yt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Wh(n.stateNode,a,e),hr(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Sn===null||!Sn.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Cu(i),_u(i,e,n,a),hr(n,i),!1}n=n.return}while(n!==null);return!1}var xu=Error(l(461)),je=!1;function Ve(e,t,n,a){t.child=e===null?Md(t,null,n,a):Wn(t,e.child,n,a)}function Ru(e,t,n,a,i){n=n.render;var s=t.ref;if("ref"in a){var d={};for(var c in a)c!=="ref"&&(d[c]=a[c])}else d=a;return Pn(t),a=Oh(e,t,n,d,s,i),c=Ch(),e!==null&&!je?(_h(e,t,i),Ft(e,t,i)):(ie&&c&&bh(t),t.flags|=1,Ve(e,t,a,i),t.child)}function Bu(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!mr(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Yu(e,t,s,a,i)):(e=as(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!tr(e,i)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(d,a)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=Hn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Yu(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(go(s,a)&&e.ref===t.ref)if(je=!1,t.pendingProps=a=s,tr(e,i))(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return Fh(e,t,n,a,i)}function Du(e,t,n){var a=t.pendingProps,i=a.children,s=(t.stateNode._pendingVisibility&2)!==0,d=e!==null?e.memoizedState:null;if(Co(e,t),a.mode==="hidden"||s){if((t.flags&128)!==0){if(a=d!==null?d.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~a}else t.childLanes=0,t.child=null;return Mu(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zi(t,d!==null?d.cachePool:null),d!==null?qd(t,d):Ih(),Zd(t);else return t.lanes=t.childLanes=536870912,Mu(e,t,d!==null?d.baseLanes|n:n,n)}else d!==null?(zi(t,d.cachePool),qd(t,d),yn(),t.memoizedState=null):(e!==null&&zi(t,null),Ih(),yn());return Ve(e,t,i,n),t.child}function Mu(e,t,n,a){var i=Eh();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&zi(t,null),Ih(),Zd(t),e!==null&&_o(e,t,a,!0),null}function Co(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Fh(e,t,n,a,i){return Pn(t),n=Oh(e,t,n,a,void 0,i),a=Ch(),e!==null&&!je?(_h(e,t,i),Ft(e,t,i)):(ie&&a&&bh(t),t.flags|=1,Ve(e,t,n,i),t.child)}function qu(e,t,n,a,i,s){return Pn(t),t.updateQueue=null,n=Vd(t,a,n,i),Ud(e),a=Ch(),e!==null&&!je?(_h(e,t,s),Ft(e,t,s)):(ie&&a&&bh(t),t.flags|=1,Ve(e,t,n,s),t.child)}function Zu(e,t,n,a,i){if(Pn(t),t.stateNode===null){var s=Ia,d=n.contextType;typeof d=="object"&&d!==null&&(s=Fe(d)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Gh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ir(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?Fe(d):Ia,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Vh(t,n,d,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Gh.enqueueReplaceState(s,s.state,null),Bo(t,a,s,i),Ro(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var c=t.memoizedProps,y=Jn(n,c);s.props=y;var w=s.context,S=n.contextType;d=Ia,typeof S=="object"&&S!==null&&(d=Fe(S));var O=n.getDerivedStateFromProps;S=typeof O=="function"||typeof s.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,S||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c||w!==d)&&Au(t,s,a,d),pn=!1;var I=t.memoizedState;s.state=I,Bo(t,a,s,i),Ro(),w=t.memoizedState,c||I!==w||pn?(typeof O=="function"&&(Vh(t,n,O,a),w=t.memoizedState),(y=pn||Hu(t,n,y,a,I,w,d))?(S||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=w),s.props=a,s.state=w,s.context=d,a=y):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,sr(e,t),d=t.memoizedProps,S=Jn(n,d),s.props=S,O=t.pendingProps,I=s.context,w=n.contextType,y=Ia,typeof w=="object"&&w!==null&&(y=Fe(w)),c=n.getDerivedStateFromProps,(w=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==O||I!==y)&&Au(t,s,a,y),pn=!1,I=t.memoizedState,s.state=I,Bo(t,a,s,i),Ro();var A=t.memoizedState;d!==O||I!==A||pn||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof c=="function"&&(Vh(t,n,c,a),A=t.memoizedState),(S=pn||Hu(t,n,S,a,I,A,y)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,A,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,A,y)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),s.props=a,s.state=A,s.context=y,a=S):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Co(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Wn(t,e.child,null,i),t.child=Wn(t,null,n,i)):Ve(e,t,n,i),t.memoizedState=s.state,e=t.child):e=Ft(e,t,i),e}function ju(e,t,n,a){return bo(),t.flags|=256,Ve(e,t,n,a),t.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Xh(e){return{baseLanes:e,cachePool:zd()}}function Qh(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=kt),e}function Lu(e,t,n){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(i?fn(t):yn(),ie){var c=Ue,y;if(y=c){e:{for(y=c,c=_t;y.nodeType!==8;){if(!c){c=null;break e}if(y=St(y.nextSibling),y===null){c=null;break e}}c=y}c!==null?(t.memoizedState={dehydrated:c,treeContext:Un!==null?{id:Ut,overflow:Vt}:null,retryLane:536870912},y=vt(18,null,null,0),y.stateNode=c,y.return=t,t.child=y,Je=t,Ue=null,y=!0):y=!1}y||Gn(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?t.lanes=16:t.lanes=536870912,null;Gt(t)}return c=a.children,a=a.fallback,i?(yn(),i=t.mode,c=$h({mode:"hidden",children:c},i),a=ta(a,i,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,i=t.child,i.memoizedState=Xh(n),i.childLanes=Qh(e,d,n),t.memoizedState=Kh,a):(fn(t),Jh(t,c))}if(y=e.memoizedState,y!==null&&(c=y.dehydrated,c!==null)){if(s)t.flags&256?(fn(t),t.flags&=-257,t=Ph(e,t,n)):t.memoizedState!==null?(yn(),t.child=e.child,t.flags|=128,t=null):(yn(),i=a.fallback,c=t.mode,a=$h({mode:"visible",children:a.children},c),i=ta(i,c,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Wn(t,e.child,null,n),a=t.child,a.memoizedState=Xh(n),a.childLanes=Qh(e,d,n),t.memoizedState=Kh,t=i);else if(fn(t),c.data==="$!"){if(d=c.nextSibling&&c.nextSibling.dataset,d)var w=d.dgst;d=w,a=Error(l(419)),a.stack="",a.digest=d,vo({value:a,source:null,stack:null}),t=Ph(e,t,n)}else if(je||_o(e,t,n,!1),d=(n&e.childLanes)!==0,je||d){if(d=me,d!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(d.suspendedLanes|n))!==0?0:a,a!==0&&a!==y.retryLane)throw y.retryLane=a,cn(e,a),$e(d,e,a),xu}c.data==="$?"||Er(),t=Ph(e,t,n)}else c.data==="$?"?(t.flags|=128,t.child=e.child,t=Pm.bind(null,e),c._reactRetry=t,t=null):(e=y.treeContext,Ue=St(c.nextSibling),Je=t,ie=!0,Ht=null,_t=!1,e!==null&&(mt[gt++]=Ut,mt[gt++]=Vt,mt[gt++]=Un,Ut=e.id,Vt=e.overflow,Un=t),t=Jh(t,a.children),t.flags|=4096);return t}return i?(yn(),i=a.fallback,c=t.mode,y=e.child,w=y.sibling,a=Hn(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&31457280,w!==null?i=Hn(w,i):(i=ta(i,c,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,c=e.child.memoizedState,c===null?c=Xh(n):(y=c.cachePool,y!==null?(w=qe._currentValue,y=y.parent!==w?{parent:w,pool:w}:y):y=zd(),c={baseLanes:c.baseLanes|n,cachePool:y}),i.memoizedState=c,i.childLanes=Qh(e,d,n),t.memoizedState=Kh,a):(fn(t),n=e.child,e=n.sibling,n=Hn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Jh(e,t){return t=$h({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $h(e,t){return fc(e,t,0,null)}function Ph(e,t,n){return Wn(t,e.child,null,n),e=Jh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ar(e.return,t,n)}function er(e,t,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function Uu(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(Ve(e,t,a.children,n),a=Me.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(ke(Me,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),er(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}er(t,!0,n,null,s);break;case"together":er(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(_o(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function Zm(e,t,n){switch(t.tag){case 3:mi(t,t.stateNode.containerInfo),wn(t,qe,e.memoizedState.cache),bo();break;case 27:case 5:Gs(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:wn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lu(e,t,n):(fn(t),e=Ft(e,t,n),e!==null?e.sibling:null);fn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(_o(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Uu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Me,Me.current),a)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n);case 24:wn(t,qe,e.memoizedState.cache)}return Ft(e,t,n)}function Vu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)je=!0;else{if(!tr(e,n)&&(t.flags&128)===0)return je=!1,Zm(e,t,n);je=(e.flags&131072)!==0}else je=!1,ie&&(t.flags&1048576)!==0&&Nd(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")mr(a)?(e=Jn(a,e),t.tag=1,t=Zu(null,t,a,e,n)):(t.tag=0,t=Fh(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===re){t.tag=11,t=Ru(null,t,a,e,n);break e}else if(i===fe){t.tag=14,t=Bu(null,t,a,e,n);break e}}throw t=ve(a)||a,Error(l(306,t,""))}}return t;case 0:return Fh(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Jn(a,t.pendingProps),Zu(e,t,a,i,n);case 3:e:{if(mi(t,t.stateNode.containerInfo),e===null)throw Error(l(387));var s=t.pendingProps;i=t.memoizedState,a=i.element,sr(e,t),Bo(t,s,null,n);var d=t.memoizedState;if(s=d.cache,wn(t,qe,s),s!==i.cache&&or(t,[qe],n,!0),Ro(),s=d.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ju(e,t,s,n);break e}else if(s!==a){a=yt(Error(l(424)),t),vo(a),t=ju(e,t,s,n);break e}else for(Ue=St(t.stateNode.containerInfo.firstChild),Je=t,ie=!0,Ht=null,_t=!0,n=Md(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),s===a){t=Ft(e,t,n);break e}Ve(e,t,s,n)}t=t.child}return t;case 26:return Co(e,t),e===null?(n=Fc(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(n=t.type,e=t.pendingProps,a=ms(rn.current).createElement(n),a[We]=t,a[et]=e,Ge(a,n,e),Ze(a),t.stateNode=a):t.memoizedState=Fc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gs(t),e===null&&ie&&(a=t.stateNode=Vc(t.type,t.pendingProps,rn.current),Je=t,_t=!0,Ue=St(a.firstChild)),a=t.pendingProps.children,e!==null||ie?Ve(e,t,a,n):t.child=Wn(t,null,a,n),Co(e,t),t.child;case 5:return e===null&&ie&&((i=a=Ue)&&(a=mg(a,t.type,t.pendingProps,_t),a!==null?(t.stateNode=a,Je=t,Ue=St(a.firstChild),_t=!1,i=!0):i=!1),i||Gn(t)),Gs(t),i=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,Lr(i,s)?a=null:d!==null&&Lr(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Oh(e,t,xm,null,null,n),Xo._currentValue=i),Co(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&ie&&((e=n=Ue)&&(n=gg(n,t.pendingProps,_t),n!==null?(t.stateNode=n,Je=t,Ue=null,e=!0):e=!1),e||Gn(t)),null;case 13:return Lu(e,t,n);case 4:return mi(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Wn(t,null,a,n):Ve(e,t,a,n),t.child;case 11:return Ru(e,t,t.type,t.pendingProps,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,wn(t,t.type,a.value),Ve(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Pn(t),i=Fe(i),a=a(i),t.flags|=1,Ve(e,t,a,n),t.child;case 14:return Bu(e,t,t.type,t.pendingProps,n);case 15:return Yu(e,t,t.type,t.pendingProps,n);case 19:return Uu(e,t,n);case 22:return Du(e,t,n);case 24:return Pn(t),a=Fe(qe),e===null?(i=Eh(),i===null&&(i=me,s=Ah(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),t.memoizedState={parent:a,cache:i},ir(t),wn(t,qe,i)):((e.lanes&n)!==0&&(sr(e,t),Bo(t,null,null,n),Ro()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wn(t,qe,a)):(a=s.cache,wn(t,qe,a),a!==i.cache&&or(t,[qe],n,!0))),Ve(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}var nr=he(null),$n=null,Kt=null;function wn(e,t,n){ke(nr,t._currentValue),t._currentValue=n}function Xt(e){e._currentValue=nr.current,Re(nr)}function ar(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function or(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var d=i.child;s=s.firstContext;e:for(;s!==null;){var c=s;s=i;for(var y=0;y<t.length;y++)if(c.context===t[y]){s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ar(s.return,n,e),a||(d=null);break e}s=c.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(l(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),ar(d,n,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function _o(e,t,n,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var c=i.type;it(i.pendingProps.value,d.value)||(e!==null?e.push(c):e=[c])}}else if(i===yi.current){if(d=i.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}i=i.return}e!==null&&or(t,e,n,a),t.flags|=262144}function Pi(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){$n=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return Gu($n,e)}function es(e,t){return $n===null&&Pn(e),Gu(e,t)}function Gu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kt===null){if(e===null)throw Error(l(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return n}var pn=!1;function ir(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ie&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Bi(e),Sd(e,null,n),t}return Ri(e,a,t,n),Bi(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bl(e,n)}}function hr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rr=!1;function Ro(){if(rr){var e=Oa;if(e!==null)throw e}}function Bo(e,t,n,a){rr=!1;var i=e.updateQueue;pn=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var y=c,w=y.next;y.next=null,d===null?s=w:d.next=w,d=y;var S=e.alternate;S!==null&&(S=S.updateQueue,c=S.lastBaseUpdate,c!==d&&(c===null?S.firstBaseUpdate=w:c.next=w,S.lastBaseUpdate=y))}if(s!==null){var O=i.baseState;d=0,S=w=y=null,c=s;do{var I=c.lane&-536870913,A=I!==c.lane;if(A?(oe&I)===I:(a&I)===I){I!==0&&I===Na&&(rr=!0),S!==null&&(S=S.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var D=e,F=c;I=t;var Ee=n;switch(F.tag){case 1:if(D=F.payload,typeof D=="function"){O=D.call(Ee,O,I);break e}O=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=F.payload,I=typeof D=="function"?D.call(Ee,O,I):D,I==null)break e;O=V({},O,I);break e;case 2:pn=!0}}I=c.callback,I!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[I]:A.push(I))}else A={lane:I,tag:c.tag,payload:c.payload,callback:c.callback,next:null},S===null?(w=S=A,y=O):S=S.next=A,d|=I;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;A=c,c=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);S===null&&(y=O),i.baseState=y,i.firstBaseUpdate=w,i.lastBaseUpdate=S,s===null&&(i.shared.lanes=0),An|=d,e.lanes=d,e.memoizedState=O}}function Wu(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Fu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wu(n[e],t)}function Yo(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var s=n.create,d=n.inst;a=s(),d.destroy=a}n=n.next}while(n!==i)}}catch(c){ce(t,t.return,c)}}function kn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var d=a.inst,c=d.destroy;if(c!==void 0){d.destroy=void 0,i=t;var y=n;try{c()}catch(w){ce(i,y,w)}}}a=a.next}while(a!==s)}}catch(w){ce(t,t.return,w)}}function Ku(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fu(t,n)}catch(a){ce(e,e.return,a)}}}function Xu(e,t,n){n.props=Jn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ce(e,t,a)}}function ea(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=a;break;default:i=a}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ce(e,t,s)}}function st(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ce(e,t,i)}else n.current=null}function Qu(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){ce(e,e.return,i)}}function Ju(e,t,n){try{var a=e.stateNode;dg(a,e.type,n,t),a[et]=t}catch(i){ce(e,e.return,i)}}function $u(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function lr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ys));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(dr(e,t,n),e=e.sibling;e!==null;)dr(e,t,n),e=e.sibling}function ts(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}var Qt=!1,Ae=!1,ur=!1,Pu=typeof WeakSet=="function"?WeakSet:Set,Le=null,ec=!1;function jm(e,t){if(e=e.containerInfo,Zr=ks,e=wd(e),fh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,c=-1,y=-1,w=0,S=0,O=e,I=null;t:for(;;){for(var A;O!==n||i!==0&&O.nodeType!==3||(c=d+i),O!==s||a!==0&&O.nodeType!==3||(y=d+a),O.nodeType===3&&(d+=O.nodeValue.length),(A=O.firstChild)!==null;)I=O,O=A;for(;;){if(O===e)break t;if(I===n&&++w===i&&(c=d),I===s&&++S===a&&(y=d),(A=O.nextSibling)!==null)break;O=I,I=O.parentNode}O=A}n=c===-1||y===-1?null:{start:c,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(jr={focusedElem:e,selectionRange:n},ks=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,i=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var D=Jn(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(D,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(F){ce(n,n.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}return D=ec,ec=!1,D}function tc(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:$t(e,n),a&4&&Yo(5,n);break;case 1:if($t(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){ce(n,n.return,c)}else{var i=Jn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ce(n,n.return,c)}}a&64&&Ku(n),a&512&&ea(n,n.return);break;case 3:if($t(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Fu(a,e)}catch(c){ce(n,n.return,c)}}break;case 26:$t(e,n),a&512&&ea(n,n.return);break;case 27:case 5:$t(e,n),t===null&&a&4&&Qu(n),a&512&&ea(n,n.return);break;case 12:$t(e,n);break;case 13:$t(e,n),a&4&&oc(e,n);break;case 22:if(i=n.memoizedState!==null||Qt,!i){t=t!==null&&t.memoizedState!==null||Ae;var s=Qt,d=Ae;Qt=i,(Ae=t)&&!d?Tn(e,n,(n.subtreeFlags&8772)!==0):$t(e,n),Qt=s,Ae=d}a&512&&(n.memoizedProps.mode==="manual"?ea(n,n.return):st(n,n.return));break;default:$t(e,n)}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ht=!1;function Jt(e,t,n){for(n=n.child;n!==null;)ac(e,t,n),n=n.sibling}function ac(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(ao,n)}catch{}switch(n.tag){case 26:Ae||st(n,t),Jt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ae||st(n,t);var a=De,i=ht;for(De=n.stateNode,Jt(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Js(n),De=a,ht=i;break;case 5:Ae||st(n,t);case 6:i=De;var s=ht;if(De=null,Jt(e,t,n),De=i,ht=s,De!==null)if(ht)try{e=De,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(d){ce(n,t,d)}else try{De.removeChild(n.stateNode)}catch(d){ce(n,t,d)}break;case 18:De!==null&&(ht?(t=De,n=n.stateNode,t.nodeType===8?Ur(t.parentNode,n):t.nodeType===1&&Ur(t,n),Po(t)):Ur(De,n.stateNode));break;case 4:a=De,i=ht,De=n.stateNode.containerInfo,ht=!0,Jt(e,t,n),De=a,ht=i;break;case 0:case 11:case 14:case 15:Ae||kn(2,n,t),Ae||kn(4,n,t),Jt(e,t,n);break;case 1:Ae||(st(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Xu(n,t,a)),Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:Ae||st(n,t),Ae=(a=Ae)||n.memoizedState!==null,Jt(e,t,n),Ae=a;break;default:Jt(e,t,n)}}function oc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Po(e)}catch(n){ce(t,t.return,n)}}function Lm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pu),t;default:throw Error(l(435,e.tag))}}function cr(e,t){var n=Lm(e);t.forEach(function(a){var i=eg.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function pt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],s=e,d=t,c=d;e:for(;c!==null;){switch(c.tag){case 27:case 5:De=c.stateNode,ht=!1;break e;case 3:De=c.stateNode.containerInfo,ht=!0;break e;case 4:De=c.stateNode.containerInfo,ht=!0;break e}c=c.return}if(De===null)throw Error(l(160));ac(s,d,i),De=null,ht=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)ic(t,e),t=t.sibling}var At=null;function ic(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),bt(e),a&4&&(kn(3,e,e.return),Yo(3,e),kn(5,e,e.return));break;case 1:pt(t,e),bt(e),a&512&&(Ae||n===null||st(n,n.return)),a&64&&Qt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=At;if(pt(t,e),bt(e),a&512&&(Ae||n===null||st(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[so]||s[We]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),Ge(s,a,n),s[We]=e,Ze(s),a=s;break e;case"link":var d=Qc("link","href",i).get(a+(n.href||""));if(d){for(var c=0;c<d.length;c++)if(s=d[c],s.getAttribute("href")===(n.href==null?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(c,1);break t}}s=i.createElement(a),Ge(s,a,n),i.head.appendChild(s);break;case"meta":if(d=Qc("meta","content",i).get(a+(n.content||""))){for(c=0;c<d.length;c++)if(s=d[c],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(c,1);break t}}s=i.createElement(a),Ge(s,a,n),i.head.appendChild(s);break;default:throw Error(l(468,a))}s[We]=e,Ze(s),a=s}e.stateNode=a}else Jc(i,e.type,e.stateNode);else e.stateNode=Xc(i,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?Jc(i,e.type,e.stateNode):Xc(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){i=e.stateNode,s=e.memoizedProps;try{for(var y=i.firstChild;y;){var w=y.nextSibling,S=y.nodeName;y[so]||S==="HEAD"||S==="BODY"||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&y.rel.toLowerCase()==="stylesheet"||i.removeChild(y),y=w}for(var O=e.type,I=i.attributes;I.length;)i.removeAttributeNode(I[0]);Ge(i,O,s),i[We]=e,i[et]=s}catch(D){ce(e,e.return,D)}}case 5:if(pt(t,e),bt(e),a&512&&(Ae||n===null||st(n,n.return)),e.flags&32){i=e.stateNode;try{ga(i,"")}catch(D){ce(e,e.return,D)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ju(e,i,n!==null?n.memoizedProps:i)),a&1024&&(ur=!0);break;case 6:if(pt(t,e),bt(e),a&4){if(e.stateNode===null)throw Error(l(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(D){ce(e,e.return,D)}}break;case 3:if(ps=null,i=At,At=gs(t.containerInfo),pt(t,e),At=i,bt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(t.containerInfo)}catch(D){ce(e,e.return,D)}ur&&(ur=!1,sc(e));break;case 4:a=At,At=gs(e.stateNode.containerInfo),pt(t,e),bt(e),At=a;break;case 12:pt(t,e),bt(e);break;case 13:pt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(kr=Ct()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cr(e,a)));break;case 22:if(a&512&&(Ae||n===null||st(n,n.return)),y=e.memoizedState!==null,w=n!==null&&n.memoizedState!==null,S=Qt,O=Ae,Qt=S||y,Ae=O||w,pt(t,e),Ae=O,Qt=S,bt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=y?t._visibility&-2:t._visibility|1,y&&(t=Qt||Ae,n===null||w||t||Ra(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){w=n=t;try{if(i=w.stateNode,y)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=w.stateNode,c=w.memoizedProps.style;var A=c!=null&&c.hasOwnProperty("display")?c.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(D){ce(w,w.return,D)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=y?"":w.memoizedProps}catch(D){ce(w,w.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,cr(e,n))));break;case 19:pt(t,e),bt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,cr(e,a)));break;case 21:break;default:pt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if($u(n)){var a=n;break e}n=n.return}throw Error(l(160))}switch(a.tag){case 27:var i=a.stateNode,s=lr(e);ts(e,s,i);break;case 5:var d=a.stateNode;a.flags&32&&(ga(d,""),a.flags&=-33);var c=lr(e);ts(e,c,d);break;case 3:case 4:var y=a.stateNode.containerInfo,w=lr(e);dr(e,w,y);break;default:throw Error(l(161))}}}catch(S){ce(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tc(e,t.alternate,t),t=t.sibling}function Ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:kn(4,t,t.return),Ra(t);break;case 1:st(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Xu(t,t.return,n),Ra(t);break;case 26:case 27:case 5:st(t,t.return),Ra(t);break;case 22:st(t,t.return),t.memoizedState===null&&Ra(t);break;default:Ra(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Tn(i,s,n),Yo(4,s);break;case 1:if(Tn(i,s,n),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){ce(a,a.return,w)}if(a=s,i=a.updateQueue,i!==null){var c=a.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Wu(y[i],c)}catch(w){ce(a,a.return,w)}}n&&d&64&&Ku(s),ea(s,s.return);break;case 26:case 27:case 5:Tn(i,s,n),n&&a===null&&d&4&&Qu(s),ea(s,s.return);break;case 12:Tn(i,s,n);break;case 13:Tn(i,s,n),n&&d&4&&oc(i,s);break;case 22:s.memoizedState===null&&Tn(i,s,n),ea(s,s.return);break;default:Tn(i,s,n)}t=t.sibling}}function fr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ao(n))}function yr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ao(e))}function In(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hc(e,t,n,a),t=t.sibling}function hc(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:In(e,t,n,a),i&2048&&Yo(9,t);break;case 3:In(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ao(e)));break;case 12:if(i&2048){In(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,c=s.onPostCommit;typeof c=="function"&&c(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){ce(t,t.return,y)}}else In(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?In(e,t,n,a):Do(e,t):s._visibility&4?In(e,t,n,a):(s._visibility|=4,Ba(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&fr(t.alternate,t);break;case 24:In(e,t,n,a),i&2048&&yr(t.alternate,t);break;default:In(e,t,n,a)}}function Ba(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,d=t,c=n,y=a,w=d.flags;switch(d.tag){case 0:case 11:case 15:Ba(s,d,c,y,i),Yo(8,d);break;case 23:break;case 22:var S=d.stateNode;d.memoizedState!==null?S._visibility&4?Ba(s,d,c,y,i):Do(s,d):(S._visibility|=4,Ba(s,d,c,y,i)),i&&w&2048&&fr(d.alternate,d);break;case 24:Ba(s,d,c,y,i),i&&w&2048&&yr(d.alternate,d);break;default:Ba(s,d,c,y,i)}t=t.sibling}}function Do(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Do(n,a),i&2048&&fr(a.alternate,a);break;case 24:Do(n,a),i&2048&&yr(a.alternate,a);break;default:Do(n,a)}t=t.sibling}}var Mo=8192;function Ya(e){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)rc(e),e=e.sibling}function rc(e){switch(e.tag){case 26:Ya(e),e.flags&Mo&&e.memoizedState!==null&&Og(At,e.memoizedState,e.memoizedProps);break;case 5:Ya(e);break;case 3:case 4:var t=At;At=gs(e.stateNode.containerInfo),Ya(e),At=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Mo,Mo=16777216,Ya(e),Mo=t):Ya(e));break;default:Ya(e)}}function lc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Le=a,uc(a,e)}lc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dc(e),e=e.sibling}function dc(e){switch(e.tag){case 0:case 11:case 15:qo(e),e.flags&2048&&kn(9,e,e.return);break;case 3:qo(e);break;case 12:qo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,ns(e)):qo(e);break;default:qo(e)}}function ns(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Le=a,uc(a,e)}lc(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:kn(8,t,t.return),ns(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,ns(t));break;default:ns(t)}e=e.sibling}}function uc(e,t){for(;Le!==null;){var n=Le;switch(n.tag){case 0:case 11:case 15:kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ao(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Le=a;else e:for(n=e;Le!==null;){a=Le;var i=a.sibling,s=a.return;if(nc(a),a===n){Le=null;break e}if(i!==null){i.return=s,Le=i;break e}Le=s}}}function zm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,a){return new zm(e,t,n,a)}function mr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function cc(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function as(e,t,n,a,i,s){var d=0;if(a=e,typeof e=="function")mr(e)&&(d=1);else if(typeof e=="string")d=Eg(e,n,Ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case H:return ta(n.children,i,s,t);case T:d=8,i|=24;break;case x:return e=vt(12,n,t,i|2),e.elementType=x,e.lanes=s,e;case xe:return e=vt(13,n,t,i),e.elementType=xe,e.lanes=s,e;case He:return e=vt(19,n,t,i),e.elementType=He,e.lanes=s,e;case be:return fc(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:case te:d=10;break e;case U:d=9;break e;case re:d=11;break e;case fe:d=14;break e;case le:d=16,a=null;break e}d=29,n=Error(l(130,e===null?"null":typeof e,"")),a=null}return t=vt(d,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function ta(e,t,n,a){return e=vt(7,e,a,t),e.lanes=n,e}function fc(e,t,n,a){e=vt(22,e,a,t),e.elementType=be,e.lanes=n;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=i._current;if(s===null)throw Error(l(456));if((i._pendingVisibility&2)===0){var d=cn(s,2);d!==null&&(i._pendingVisibility|=2,$e(d,s,2))}},attach:function(){var s=i._current;if(s===null)throw Error(l(456));if((i._pendingVisibility&2)!==0){var d=cn(s,2);d!==null&&(i._pendingVisibility&=-3,$e(d,s,2))}}};return e.stateNode=i,e}function gr(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function wr(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pt(e){e.flags|=4}function yc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$c(t)){if(t=wt.current,t!==null&&((oe&4194176)===oe?xt!==null:(oe&62914560)!==oe&&(oe&536870912)===0||t!==xt))throw To=Th,_d;e.flags|=8192}}function os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xl():536870912,e.lanes|=t,Ma|=t)}function Zo(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&31457280,a|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Um(e,t,n){var a=t.pendingProps;switch(vh(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(qe),da(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(po(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ht!==null&&(Ar(Ht),Ht=null))),Te(t),null;case 26:return n=t.memoizedState,e===null?(Pt(t),n!==null?(Te(t),yc(t,n)):(Te(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Pt(t),Te(t),yc(t,n)):(Te(t),t.flags&=-16777217):(e.memoizedProps!==a&&Pt(t),Te(t),t.flags&=-16777217),null;case 27:gi(t),n=rn.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return Te(t),null}e=Ot.current,po(t)?Od(t):(e=Vc(i,a,n),t.stateNode=e,Pt(t))}return Te(t),null;case 5:if(gi(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return Te(t),null}if(e=Ot.current,po(t))Od(t);else{switch(i=ms(rn.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[We]=t,e[et]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ge(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Pt(t)}}return Te(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(e=rn.current,po(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Je,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[We]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||qc(e.nodeValue,n)),e||Gn(t)}else e=ms(e).createTextNode(a),e[We]=t,t.stateNode=e}return Te(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=po(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[We]=t}else bo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else Ht!==null&&(Ar(Ht),Ht=null),i=!0;if(!i)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var s=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),os(t,t.updateQueue),Te(t),null;case 4:return da(),e===null&&Dr(t.stateNode.containerInfo),Te(t),null;case 10:return Xt(t.type),Te(t),null;case 19:if(Re(Me),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Zo(i,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Li(e),s!==null){for(t.flags|=128,Zo(i,!1),e=s.updateQueue,t.updateQueue=e,os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)cc(n,e),n=n.sibling;return ke(Me,Me.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ct()>is&&(t.flags|=128,a=!0,Zo(i,!1),t.lanes=4194304)}else{if(!a)if(e=Li(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,os(t,e),Zo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ie)return Te(t),null}else 2*Ct()-i.renderingStartTime>is&&n!==536870912&&(t.flags|=128,a=!0,Zo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ct(),t.sibling=null,e=Me.current,ke(Me,a?e&1|2:e&1),t):(Te(t),null);case 22:case 23:return Gt(t),Hh(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Re(Fn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xt(qe),Te(t),null;case 25:return null}throw Error(l(156,t.tag))}function Vm(e,t){switch(vh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(qe),da(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gi(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));bo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Me),null;case 4:return da(),null;case 10:return Xt(t.type),null;case 22:case 23:return Gt(t),Hh(),e!==null&&Re(Fn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(qe),null;case 25:return null;default:return null}}function mc(e,t){switch(vh(t),t.tag){case 3:Xt(qe),da();break;case 26:case 27:case 5:gi(t);break;case 4:da();break;case 13:Gt(t);break;case 19:Re(Me);break;case 10:Xt(t.type);break;case 22:case 23:Gt(t),Hh(),e!==null&&Re(Fn);break;case 24:Xt(qe)}}var Gm={getCacheForType:function(e){var t=Fe(qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Wm=typeof WeakMap=="function"?WeakMap:Map,Ie=0,me=null,P=null,oe=0,ge=0,rt=null,en=!1,Da=!1,pr=!1,tn=0,Se=0,An=0,na=0,br=0,kt=0,Ma=0,jo=null,Bt=null,vr=!1,kr=0,is=1/0,ss=null,Sn=null,hs=!1,aa=null,Lo=0,Tr=0,Ir=null,zo=0,Hr=null;function lt(){if((Ie&2)!==0&&oe!==0)return oe&-oe;if(_.T!==null){var e=Na;return e!==0?e:xr()}return Dl()}function gc(){kt===0&&(kt=(oe&536870912)===0||ie?_l():536870912);var e=wt.current;return e!==null&&(e.flags|=32),kt}function $e(e,t,n){(e===me&&ge===2||e.cancelPendingCommit!==null)&&(qa(e,0),nn(e,oe,kt,!1)),io(e,n),((Ie&2)===0||e!==me)&&(e===me&&((Ie&2)===0&&(na|=n),Se===4&&nn(e,oe,kt,!1)),Yt(e))}function wc(e,t,n){if((Ie&6)!==0)throw Error(l(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||oo(e,t),i=a?Xm(e,t):Nr(e,t,!0),s=a;do{if(i===0){Da&&!a&&nn(e,t,0,!1);break}else if(i===6)nn(e,t,0,!en);else{if(n=e.current.alternate,s&&!Fm(n)){i=Nr(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var c=e;i=jo;var y=c.current.memoizedState.isDehydrated;if(y&&(qa(c,d).flags|=256),d=Nr(c,d,!1),d!==2){if(pr&&!y){c.errorRecoveryDisabledLanes|=s,na|=s,i=4;break e}s=Bt,Bt=i,s!==null&&Ar(s)}i=d}if(s=!1,i!==2)continue}}if(i===1){qa(e,0),nn(e,t,0,!0);break}e:{switch(a=e,i){case 0:case 1:throw Error(l(345));case 4:if((t&4194176)===t){nn(a,t,kt,!en);break e}break;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(l(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(s=kr+300-Ct(),10<s)){if(nn(a,t,kt,!en),vi(a,0)!==0)break e;a.timeoutHandle=Lc(pc.bind(null,a,n,Bt,ss,vr,t,kt,na,Ma,en,2,-0,0),s);break e}pc(a,n,Bt,ss,vr,t,kt,na,Ma,en,0,-0,0)}}break}while(!0);Yt(e)}function Ar(e){Bt===null?Bt=e:Bt.push.apply(Bt,e)}function pc(e,t,n,a,i,s,d,c,y,w,S,O,I){var A=t.subtreeFlags;if((A&8192||(A&16785408)===16785408)&&(Ko={stylesheets:null,count:0,unsuspend:Ng},rc(t),t=Cg(),t!==null)){e.cancelPendingCommit=t(Ac.bind(null,e,n,a,i,d,c,y,1,O,I)),nn(e,s,d,!w);return}Ac(e,n,a,i,d,c,y,S,O,I)}function Fm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!it(s(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t,n,a){t&=~br,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-ot(i),d=1<<s;a[s]=-1,i&=~d}n!==0&&Rl(e,n,t)}function rs(){return(Ie&6)===0?(Uo(0),!1):!0}function Sr(){if(P!==null){if(ge===0)var e=P.return;else e=P,Kt=$n=null,xh(e),Sa=null,Io=0,e=P;for(;e!==null;)mc(e.alternate,e),e=e.return;P=null}}function qa(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,cg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sr(),me=e,P=n=Hn(e.current,null),oe=t,ge=0,rt=null,en=!1,Da=oo(e,t),pr=!1,Ma=kt=br=na=An=Se=0,Bt=jo=null,vr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-ot(a),s=1<<i;t|=e[i],a&=~s}return tn=t,xi(),n}function bc(e,t){J=null,_.H=Rt,t===ko?(t=Bd(),ge=3):t===_d?(t=Bd(),ge=4):ge=t===xu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,P===null&&(Se=1,$i(e,yt(t,e.current)))}function vc(){var e=_.H;return _.H=Rt,e===null?Rt:e}function kc(){var e=_.A;return _.A=Gm,e}function Er(){Se=4,en||(oe&4194176)!==oe&&wt.current!==null||(Da=!0),(An&134217727)===0&&(na&134217727)===0||me===null||nn(me,oe,kt,!1)}function Nr(e,t,n){var a=Ie;Ie|=2;var i=vc(),s=kc();(me!==e||oe!==t)&&(ss=null,qa(e,t)),t=!1;var d=Se;e:do try{if(ge!==0&&P!==null){var c=P,y=rt;switch(ge){case 8:Sr(),d=6;break e;case 3:case 2:case 6:wt.current===null&&(t=!0);var w=ge;if(ge=0,rt=null,Za(e,c,y,w),n&&Da){d=0;break e}break;default:w=ge,ge=0,rt=null,Za(e,c,y,w)}}Km(),d=Se;break}catch(S){bc(e,S)}while(!0);return t&&e.shellSuspendCounter++,Kt=$n=null,Ie=a,_.H=i,_.A=s,P===null&&(me=null,oe=0,xi()),d}function Km(){for(;P!==null;)Tc(P)}function Xm(e,t){var n=Ie;Ie|=2;var a=vc(),i=kc();me!==e||oe!==t?(ss=null,is=Ct()+500,qa(e,t)):Da=oo(e,t);e:do try{if(ge!==0&&P!==null){t=P;var s=rt;t:switch(ge){case 1:ge=0,rt=null,Za(e,t,s,1);break;case 2:if(xd(s)){ge=0,rt=null,Ic(t);break}t=function(){ge===2&&me===e&&(ge=7),Yt(e)},s.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:xd(s)?(ge=0,rt=null,Ic(t)):(ge=0,rt=null,Za(e,t,s,7));break;case 5:var d=null;switch(P.tag){case 26:d=P.memoizedState;case 5:case 27:var c=P;if(!d||$c(d)){ge=0,rt=null;var y=c.sibling;if(y!==null)P=y;else{var w=c.return;w!==null?(P=w,ls(w)):P=null}break t}}ge=0,rt=null,Za(e,t,s,5);break;case 6:ge=0,rt=null,Za(e,t,s,6);break;case 8:Sr(),Se=6;break e;default:throw Error(l(462))}}Qm();break}catch(S){bc(e,S)}while(!0);return Kt=$n=null,_.H=a,_.A=i,Ie=n,P!==null?0:(me=null,oe=0,xi(),Se)}function Qm(){for(;P!==null&&!py();)Tc(P)}function Tc(e){var t=Vu(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?ls(e):P=t}function Ic(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qu(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=qu(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:xh(t);default:mc(n,t),t=P=cc(t,tn),t=Vu(n,t,tn)}e.memoizedProps=e.pendingProps,t===null?ls(e):P=t}function Za(e,t,n,a){Kt=$n=null,xh(t),Sa=null,Io=0;var i=t.return;try{if(qm(e,i,t,n,oe)){Se=1,$i(e,yt(n,e.current)),P=null;return}}catch(s){if(i!==null)throw P=i,s;Se=1,$i(e,yt(n,e.current)),P=null;return}t.flags&32768?(ie||a===1?e=!0:Da||(oe&536870912)!==0?e=!1:(en=e=!0,(a===2||a===3||a===6)&&(a=wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Hc(t,e)):ls(t)}function ls(e){var t=e;do{if((t.flags&32768)!==0){Hc(t,en);return}e=t.return;var n=Um(t.alternate,t,tn);if(n!==null){P=n;return}if(t=t.sibling,t!==null){P=t;return}P=t=e}while(t!==null);Se===0&&(Se=5)}function Hc(e,t){do{var n=Vm(e.alternate,e);if(n!==null){n.flags&=32767,P=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){P=e;return}P=e=n}while(e!==null);Se=6,P=null}function Ac(e,t,n,a,i,s,d,c,y,w){var S=_.T,O=B.p;try{B.p=2,_.T=null,Jm(e,t,n,a,O,i,s,d,c,y,w)}finally{_.T=S,B.p=O}}function Jm(e,t,n,a,i,s,d,c){do ja();while(aa!==null);if((Ie&6)!==0)throw Error(l(327));var y=e.finishedWork;if(a=e.finishedLanes,y===null)return null;if(e.finishedWork=null,e.finishedLanes=0,y===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var w=y.lanes|y.childLanes;if(w|=wh,Oy(e,a,w,s,d,c),e===me&&(P=me=null,oe=0),(y.subtreeFlags&10256)===0&&(y.flags&10256)===0||hs||(hs=!0,Tr=w,Ir=n,tg(wi,function(){return ja(),null})),n=(y.flags&15990)!==0,(y.subtreeFlags&15990)!==0||n?(n=_.T,_.T=null,s=B.p,B.p=2,d=Ie,Ie|=4,jm(e,y),ic(y,e),km(jr,e.containerInfo),ks=!!Zr,jr=Zr=null,e.current=y,tc(e,y.alternate,y),by(),Ie=d,B.p=s,_.T=n):e.current=y,hs?(hs=!1,aa=e,Lo=a):Sc(e,w),w=e.pendingLanes,w===0&&(Sn=null),Hy(y.stateNode),Yt(e),t!==null)for(i=e.onRecoverableError,y=0;y<t.length;y++)w=t[y],i(w.value,{componentStack:w.stack});return(Lo&3)!==0&&ja(),w=e.pendingLanes,(a&4194218)!==0&&(w&42)!==0?e===Hr?zo++:(zo=0,Hr=e):zo=0,Uo(0),null}function Sc(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ao(t)))}function ja(){if(aa!==null){var e=aa,t=Tr;Tr=0;var n=Yl(Lo),a=_.T,i=B.p;try{if(B.p=32>n?32:n,_.T=null,aa===null)var s=!1;else{n=Ir,Ir=null;var d=aa,c=Lo;if(aa=null,Lo=0,(Ie&6)!==0)throw Error(l(331));var y=Ie;if(Ie|=4,dc(d.current),hc(d,d.current,c,n),Ie=y,Uo(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(ao,d)}catch{}s=!0}return s}finally{B.p=i,_.T=a,Sc(e,t)}}return!1}function Ec(e,t,n){t=yt(n,t),t=Wh(e.stateNode,t,2),e=vn(e,t,2),e!==null&&(io(e,2),Yt(e))}function ce(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sn===null||!Sn.has(a))){e=yt(n,e),n=Cu(2),a=vn(t,n,2),a!==null&&(_u(n,a,t,e),io(a,2),Yt(a));break}}t=t.return}}function Or(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Wm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(pr=!0,i.add(n),e=$m.bind(null,e,t,n),t.then(e,e))}function $m(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(oe&n)===n&&(Se===4||Se===3&&(oe&62914560)===oe&&300>Ct()-kr?(Ie&2)===0&&qa(e,0):br|=n,Ma===oe&&(Ma=0)),Yt(e)}function Nc(e,t){t===0&&(t=xl()),e=cn(e,t),e!==null&&(io(e,t),Yt(e))}function Pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function eg(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),Nc(e,n)}function tg(e,t){return Fs(e,t)}var ds=null,La=null,Cr=!1,us=!1,_r=!1,oa=0;function Yt(e){e!==La&&e.next===null&&(La===null?ds=La=e:La=La.next=e),us=!0,Cr||(Cr=!0,ag(ng))}function Uo(e,t){if(!_r&&us){_r=!0;do for(var n=!1,a=ds;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var d=a.suspendedLanes,c=a.pingedLanes;s=(1<<31-ot(42|e)+1)-1,s&=i&~(d&~c),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(n=!0,_c(a,s))}else s=oe,s=vi(a,a===me?s:0),(s&3)===0||oo(a,s)||(n=!0,_c(a,s));a=a.next}while(n);_r=!1}}function ng(){us=Cr=!1;var e=0;oa!==0&&(ug()&&(e=oa),oa=0);for(var t=Ct(),n=null,a=ds;a!==null;){var i=a.next,s=Oc(a,t);s===0?(a.next=null,n===null?ds=i:n.next=i,i===null&&(La=n)):(n=a,(e!==0||(s&3)!==0)&&(us=!0)),a=i}Uo(e)}function Oc(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-ot(s),c=1<<d,y=i[d];y===-1?((c&n)===0||(c&a)!==0)&&(i[d]=Ny(c,t)):y<=t&&(e.expiredLanes|=c),s&=~c}if(t=me,n=oe,n=vi(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&ge===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ks(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||oo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ks(a),Yl(n)){case 2:case 8:n=Ol;break;case 32:n=wi;break;case 268435456:n=Cl;break;default:n=wi}return a=Cc.bind(null,e),n=Fs(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ks(a),e.callbackPriority=2,e.callbackNode=null,2}function Cc(e,t){var n=e.callbackNode;if(ja()&&e.callbackNode!==n)return null;var a=oe;return a=vi(e,e===me?a:0),a===0?null:(wc(e,a,t),Oc(e,Ct()),e.callbackNode!=null&&e.callbackNode===n?Cc.bind(null,e):null)}function _c(e,t){if(ja())return null;wc(e,t,!0)}function ag(e){fg(function(){(Ie&6)!==0?Fs(Nl,e):e()})}function xr(){return oa===0&&(oa=_l()),oa}function xc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ai(""+e)}function Rc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function og(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var s=xc((i[et]||null).action),d=a.submitter;d&&(t=(t=d[et]||null)?xc(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var c=new Oi("action","action",null,a,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(oa!==0){var y=d?Rc(i,d):new FormData(i);Lh(n,{pending:!0,data:y,method:i.method,action:s},null,y)}}else typeof s=="function"&&(c.preventDefault(),y=d?Rc(i,d):new FormData(i),Lh(n,{pending:!0,data:y,method:i.method,action:s},s,y))},currentTarget:i}]})}}for(var Rr=0;Rr<Ad.length;Rr++){var Br=Ad[Rr],ig=Br.toLowerCase(),sg=Br[0].toUpperCase()+Br.slice(1);It(ig,"on"+sg)}It(vd,"onAnimationEnd"),It(kd,"onAnimationIteration"),It(Td,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(Im,"onTransitionRun"),It(Hm,"onTransitionStart"),It(Am,"onTransitionCancel"),It(Id,"onTransitionEnd"),ya("onMouseEnter",["mouseout","mouseover"]),ya("onMouseLeave",["mouseout","mouseover"]),ya("onPointerEnter",["pointerout","pointerover"]),ya("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Bc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var c=a[d],y=c.instance,w=c.currentTarget;if(c=c.listener,y!==s&&i.isPropagationStopped())break e;s=c,i.currentTarget=w;try{s(i)}catch(S){Ji(S)}i.currentTarget=null,s=y}else for(d=0;d<a.length;d++){if(c=a[d],y=c.instance,w=c.currentTarget,c=c.listener,y!==s&&i.isPropagationStopped())break e;s=c,i.currentTarget=w;try{s(i)}catch(S){Ji(S)}i.currentTarget=null,s=y}}}}function ne(e,t){var n=t[Qs];n===void 0&&(n=t[Qs]=new Set);var a=e+"__bubble";n.has(a)||(Yc(t,e,2,!1),n.add(a))}function Yr(e,t,n){var a=0;t&&(a|=4),Yc(n,e,a,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[cs]){e[cs]=!0,ql.forEach(function(n){n!=="selectionchange"&&(hg.has(n)||Yr(n,!1,e),Yr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Yr("selectionchange",!1,t))}}function Yc(e,t,n,a){switch(of(t)){case 2:var i=Rg;break;case 8:i=Bg;break;default:i=Xr}n=i.bind(null,t,n,e),i=void 0,!oh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Mr(e,t,n,a,i){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var c=a.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(d===4)for(d=a.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===i||y.nodeType===8&&y.parentNode===i))return;d=d.return}for(;c!==null;){if(d=qn(c),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){a=s=d;continue e}c=c.parentNode}}a=a.return}Ql(function(){var w=s,S=nh(n),O=[];e:{var I=Hd.get(e);if(I!==void 0){var A=Oi,D=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":A=em;break;case"focusin":D="focus",A=rh;break;case"focusout":D="blur",A=rh;break;case"beforeblur":case"afterblur":A=rh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Pl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=am;break;case vd:case kd:case Td:A=Gy;break;case Id:A=im;break;case"scroll":case"scrollend":A=jy;break;case"wheel":A=hm;break;case"copy":case"cut":case"paste":A=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=td;break;case"toggle":case"beforetoggle":A=lm}var F=(t&4)!==0,Ee=!F&&(e==="scroll"||e==="scrollend"),v=F?I!==null?I+"Capture":null:I;F=[];for(var g=w,k;g!==null;){var E=g;if(k=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||k===null||v===null||(E=ro(g,v),E!=null&&F.push(Go(g,E,k))),Ee)break;g=g.return}0<F.length&&(I=new A(I,D,null,n,S),O.push({event:I,listeners:F}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",I&&n!==th&&(D=n.relatedTarget||n.fromElement)&&(qn(D)||D[ua]))break e;if((A||I)&&(I=S.window===S?S:(I=S.ownerDocument)?I.defaultView||I.parentWindow:window,A?(D=n.relatedTarget||n.toElement,A=w,D=D?qn(D):null,D!==null&&(Ee=z(D),F=D.tag,D!==Ee||F!==5&&F!==27&&F!==6)&&(D=null)):(A=null,D=w),A!==D)){if(F=Pl,E="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(F=td,E="onPointerLeave",v="onPointerEnter",g="pointer"),Ee=A==null?I:ho(A),k=D==null?I:ho(D),I=new F(E,g+"leave",A,n,S),I.target=Ee,I.relatedTarget=k,E=null,qn(S)===w&&(F=new F(v,g+"enter",D,n,S),F.target=k,F.relatedTarget=Ee,E=F),Ee=E,A&&D)t:{for(F=A,v=D,g=0,k=F;k;k=za(k))g++;for(k=0,E=v;E;E=za(E))k++;for(;0<g-k;)F=za(F),g--;for(;0<k-g;)v=za(v),k--;for(;g--;){if(F===v||v!==null&&F===v.alternate)break t;F=za(F),v=za(v)}F=null}else F=null;A!==null&&Dc(O,I,A,F,!1),D!==null&&Ee!==null&&Dc(O,Ee,D,F,!0)}}e:{if(I=w?ho(w):window,A=I.nodeName&&I.nodeName.toLowerCase(),A==="select"||A==="input"&&I.type==="file")var Y=ld;else if(hd(I))if(dd)Y=bm;else{Y=wm;var $=gm}else A=I.nodeName,!A||A.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?w&&eh(w.elementType)&&(Y=ld):Y=pm;if(Y&&(Y=Y(e,w))){rd(O,Y,n,S);break e}$&&$(e,I,w),e==="focusout"&&w&&I.type==="number"&&w.memoizedProps.value!=null&&Ps(I,"number",I.value)}switch($=w?ho(w):window,e){case"focusin":(hd($)||$.contentEditable==="true")&&(va=$,yh=w,wo=null);break;case"focusout":wo=yh=va=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,pd(O,n,S);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":pd(O,n,S)}var q;if(dh)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ba?id(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(nd&&n.locale!=="ko"&&(ba||j!=="onCompositionStart"?j==="onCompositionEnd"&&ba&&(q=Jl()):(un=S,ih="value"in un?un.value:un.textContent,ba=!0)),$=fs(w,j),0<$.length&&(j=new ed(j,e,null,n,S),O.push({event:j,listeners:$}),q?j.data=q:(q=sd(n),q!==null&&(j.data=q)))),(q=um?cm(e,n):fm(e,n))&&(j=fs(w,"onBeforeInput"),0<j.length&&($=new ed("onBeforeInput","beforeinput",null,n,S),O.push({event:$,listeners:j}),$.data=q)),og(O,e,w,n,S)}Bc(O,t)})}function Go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fs(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=ro(e,n),i!=null&&a.unshift(Go(e,i,s)),i=ro(e,t),i!=null&&a.push(Go(e,i,s))),e=e.return}return a}function za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dc(e,t,n,a,i){for(var s=t._reactName,d=[];n!==null&&n!==a;){var c=n,y=c.alternate,w=c.stateNode;if(c=c.tag,y!==null&&y===a)break;c!==5&&c!==26&&c!==27||w===null||(y=w,i?(w=ro(n,s),w!=null&&d.unshift(Go(n,w,y))):i||(w=ro(n,s),w!=null&&d.push(Go(n,w,y)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var rg=/\r\n?/g,lg=/\u0000|\uFFFD/g;function Mc(e){return(typeof e=="string"?e:""+e).replace(rg,`
`).replace(lg,"")}function qc(e,t){return t=Mc(t),Mc(e)===t}function ys(){}function ue(e,t,n,a,i,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ga(e,""+a);break;case"className":Ti(e,"class",a);break;case"tabIndex":Ti(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(e,n,a);break;case"style":Kl(e,a,s);break;case"data":if(t!=="object"){Ti(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ai(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ue(e,t,"name",i.name,i,null),ue(e,t,"formEncType",i.formEncType,i,null),ue(e,t,"formMethod",i.formMethod,i,null),ue(e,t,"formTarget",i.formTarget,i,null)):(ue(e,t,"encType",i.encType,i,null),ue(e,t,"method",i.method,i,null),ue(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ai(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=ys);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ai(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),ki(e,"popover",a);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ki(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qy.get(n)||n,ki(e,n,a))}}function qr(e,t,n,a,i,s){switch(n){case"style":Kl(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&ne("scroll",e);break;case"onScrollEnd":a!=null&&ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ys);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zl.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),s=e[et]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ki(e,n,a)}}}function Ge(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ue(e,t,s,d,n,null)}}i&&ue(e,t,"srcSet",n.srcSet,n,null),a&&ue(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var c=s=d=i=null,y=null,w=null;for(a in n)if(n.hasOwnProperty(a)){var S=n[a];if(S!=null)switch(a){case"name":i=S;break;case"type":d=S;break;case"checked":y=S;break;case"defaultChecked":w=S;break;case"value":s=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(l(137,t));break;default:ue(e,t,a,S,n,null)}}Vl(e,s,c,y,w,d,i,!1),Ii(e);return;case"select":ne("invalid",e),a=d=s=null;for(i in n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case"value":s=c;break;case"defaultValue":d=c;break;case"multiple":a=c;default:ue(e,t,i,c,n,null)}t=s,n=d,e.multiple=!!a,t!=null?ma(e,!!a,t,!1):n!=null&&ma(e,!!a,n,!0);return;case"textarea":ne("invalid",e),s=i=a=null;for(d in n)if(n.hasOwnProperty(d)&&(c=n[d],c!=null))switch(d){case"value":a=c;break;case"defaultValue":i=c;break;case"children":s=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:ue(e,t,d,c,n,null)}Wl(e,a,i,s),Ii(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ue(e,t,y,a,n,null)}return;case"dialog":ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<Vo.length;a++)ne(Vo[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ue(e,t,w,a,n,null)}return;default:if(eh(t)){for(S in n)n.hasOwnProperty(S)&&(a=n[S],a!==void 0&&qr(e,t,S,a,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null&&ue(e,t,c,a,n,null))}function dg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,d=null,c=null,y=null,w=null,S=null;for(A in n){var O=n[A];if(n.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":y=O;default:a.hasOwnProperty(A)||ue(e,t,A,null,a,O)}}for(var I in a){var A=a[I];if(O=n[I],a.hasOwnProperty(I)&&(A!=null||O!=null))switch(I){case"type":s=A;break;case"name":i=A;break;case"checked":w=A;break;case"defaultChecked":S=A;break;case"value":d=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(l(137,t));break;default:A!==O&&ue(e,t,I,A,a,O)}}$s(e,d,c,y,w,S,s,i);return;case"select":A=d=c=I=null;for(s in n)if(y=n[s],n.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":A=y;default:a.hasOwnProperty(s)||ue(e,t,s,null,a,y)}for(i in a)if(s=a[i],y=n[i],a.hasOwnProperty(i)&&(s!=null||y!=null))switch(i){case"value":I=s;break;case"defaultValue":c=s;break;case"multiple":d=s;default:s!==y&&ue(e,t,i,s,a,y)}t=c,n=d,a=A,I!=null?ma(e,!!n,I,!1):!!a!=!!n&&(t!=null?ma(e,!!n,t,!0):ma(e,!!n,n?[]:"",!1));return;case"textarea":A=I=null;for(c in n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ue(e,t,c,null,a,i)}for(d in a)if(i=a[d],s=n[d],a.hasOwnProperty(d)&&(i!=null||s!=null))switch(d){case"value":I=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(l(91));break;default:i!==s&&ue(e,t,d,i,a,s)}Gl(e,I,A);return;case"option":for(var D in n)if(I=n[D],n.hasOwnProperty(D)&&I!=null&&!a.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:ue(e,t,D,null,a,I)}for(y in a)if(I=a[y],A=n[y],a.hasOwnProperty(y)&&I!==A&&(I!=null||A!=null))switch(y){case"selected":e.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:ue(e,t,y,I,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in n)I=n[F],n.hasOwnProperty(F)&&I!=null&&!a.hasOwnProperty(F)&&ue(e,t,F,null,a,I);for(w in a)if(I=a[w],A=n[w],a.hasOwnProperty(w)&&I!==A&&(I!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(l(137,t));break;default:ue(e,t,w,I,a,A)}return;default:if(eh(t)){for(var Ee in n)I=n[Ee],n.hasOwnProperty(Ee)&&I!==void 0&&!a.hasOwnProperty(Ee)&&qr(e,t,Ee,void 0,a,I);for(S in a)I=a[S],A=n[S],!a.hasOwnProperty(S)||I===A||I===void 0&&A===void 0||qr(e,t,S,I,a,A);return}}for(var v in n)I=n[v],n.hasOwnProperty(v)&&I!=null&&!a.hasOwnProperty(v)&&ue(e,t,v,null,a,I);for(O in a)I=a[O],A=n[O],!a.hasOwnProperty(O)||I===A||I==null&&A==null||ue(e,t,O,I,a,A)}var Zr=null,jr=null;function ms(e){return e.nodeType===9?e:e.ownerDocument}function Zc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jc(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zr=null;function ug(){var e=window.event;return e&&e.type==="popstate"?e===zr?!1:(zr=e,!0):(zr=null,!1)}var Lc=typeof setTimeout=="function"?setTimeout:void 0,cg=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(yg)}:Lc;function yg(e){setTimeout(function(){throw e})}function Ur(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Po(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Po(t)}function Vr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vr(n),Js(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function mg(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[so])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function gg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=St(e.nextSibling),e===null))return null;return e}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Vc(e,t,n){switch(t=ms(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}var Tt=new Map,Gc=new Set;function gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var an=B.d;B.d={f:wg,r:pg,D:bg,C:vg,L:kg,m:Tg,X:Hg,S:Ig,M:Ag};function wg(){var e=an.f(),t=rs();return e||t}function pg(e){var t=ca(e);t!==null&&t.tag===5&&t.type==="form"?pu(t):an.r(e)}var Ua=typeof document>"u"?null:document;function Wc(e,t,n){var a=Ua;if(a&&typeof t=="string"&&t){var i=ct(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Gc.has(i)||(Gc.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Ge(t,"link",e),Ze(t),a.head.appendChild(t)))}}function bg(e){an.D(e),Wc("dns-prefetch",e,null)}function vg(e,t){an.C(e,t),Wc("preconnect",e,t)}function kg(e,t,n){an.L(e,t,n);var a=Ua;if(a&&e&&t){var i='link[rel="preload"][as="'+ct(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+ct(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+ct(n.imageSizes)+'"]')):i+='[href="'+ct(e)+'"]';var s=i;switch(t){case"style":s=Va(e);break;case"script":s=Ga(e)}Tt.has(s)||(e=V({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Tt.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(Wo(s))||t==="script"&&a.querySelector(Fo(s))||(t=a.createElement("link"),Ge(t,"link",e),Ze(t),a.head.appendChild(t)))}}function Tg(e,t){an.m(e,t);var n=Ua;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ct(a)+'"][href="'+ct(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ga(e)}if(!Tt.has(s)&&(e=V({rel:"modulepreload",href:e},t),Tt.set(s,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fo(s)))return}a=n.createElement("link"),Ge(a,"link",e),Ze(a),n.head.appendChild(a)}}}function Ig(e,t,n){an.S(e,t,n);var a=Ua;if(a&&e){var i=fa(a).hoistableStyles,s=Va(e);t=t||"default";var d=i.get(s);if(!d){var c={loading:0,preload:null};if(d=a.querySelector(Wo(s)))c.loading=5;else{e=V({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Tt.get(s))&&Gr(e,n);var y=d=a.createElement("link");Ze(y),Ge(y,"link",e),y._p=new Promise(function(w,S){y.onload=w,y.onerror=S}),y.addEventListener("load",function(){c.loading|=1}),y.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ws(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:c},i.set(s,d)}}}function Hg(e,t){an.X(e,t);var n=Ua;if(n&&e){var a=fa(n).hoistableScripts,i=Ga(e),s=a.get(i);s||(s=n.querySelector(Fo(i)),s||(e=V({src:e,async:!0},t),(t=Tt.get(i))&&Wr(e,t),s=n.createElement("script"),Ze(s),Ge(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Ag(e,t){an.M(e,t);var n=Ua;if(n&&e){var a=fa(n).hoistableScripts,i=Ga(e),s=a.get(i);s||(s=n.querySelector(Fo(i)),s||(e=V({src:e,async:!0,type:"module"},t),(t=Tt.get(i))&&Wr(e,t),s=n.createElement("script"),Ze(s),Ge(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Fc(e,t,n,a){var i=(i=rn.current)?gs(i):null;if(!i)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Va(n.href),n=fa(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Va(n.href);var s=fa(i).hoistableStyles,d=s.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=i.querySelector(Wo(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Tt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Tt.set(e,n),s||Sg(i,e,n,d.state))),t&&a===null)throw Error(l(528,""));return d}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ga(n),n=fa(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Va(e){return'href="'+ct(e)+'"'}function Wo(e){return'link[rel="stylesheet"]['+e+"]"}function Kc(e){return V({},e,{"data-precedence":e.precedence,precedence:null})}function Sg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ge(t,"link",n),Ze(t),e.head.appendChild(t))}function Ga(e){return'[src="'+ct(e)+'"]'}function Fo(e){return"script[async]"+e}function Xc(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ct(n.href)+'"]');if(a)return t.instance=a,Ze(a),a;var i=V({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),Ge(a,"style",i),ws(a,n.precedence,e),t.instance=a;case"stylesheet":i=Va(n.href);var s=e.querySelector(Wo(i));if(s)return t.state.loading|=4,t.instance=s,Ze(s),s;a=Kc(n),(i=Tt.get(i))&&Gr(a,i),s=(e.ownerDocument||e).createElement("link"),Ze(s);var d=s;return d._p=new Promise(function(c,y){d.onload=c,d.onerror=y}),Ge(s,"link",a),t.state.loading|=4,ws(s,n.precedence,e),t.instance=s;case"script":return s=Ga(n.src),(i=e.querySelector(Fo(s)))?(t.instance=i,Ze(i),i):(a=n,(i=Tt.get(s))&&(a=V({},n),Wr(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ze(i),Ge(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ws(a,n.precedence,e));return t.instance}function ws(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,d=0;d<a.length;d++){var c=a[d];if(c.dataset.precedence===t)s=c;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ps=null;function Qc(e,t,n){if(ps===null){var a=new Map,i=ps=new Map;i.set(n,a)}else i=ps,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[so]||s[We]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var c=a.get(d);c?c.push(s):a.set(d,[s])}}return a}function Jc(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Eg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $c(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ko=null;function Ng(){}function Og(e,t,n){if(Ko===null)throw Error(l(475));var a=Ko;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Va(n.href),s=e.querySelector(Wo(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=bs.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=s,Ze(s);return}s=e.ownerDocument||e,n=Kc(n),(i=Tt.get(i))&&Gr(n,i),s=s.createElement("link"),Ze(s);var d=s;d._p=new Promise(function(c,y){d.onload=c,d.onerror=y}),Ge(s,"link",n),t.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=bs.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Cg(){if(Ko===null)throw Error(l(475));var e=Ko;return e.stylesheets&&e.count===0&&Fr(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Fr(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function bs(){if(this.count--,this.count===0){if(this.stylesheets)Fr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vs=null;function Fr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vs=new Map,t.forEach(_g,e),vs=null,bs.call(e))}function _g(e,t){if(!(t.state.loading&4)){var n=vs.get(e);if(n)var a=n.get(null);else{n=new Map,vs.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var d=i[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}i=t.instance,d=i.getAttribute("data-precedence"),s=n.get(d)||a,s===a&&n.set(null,i),n.set(d,i),this.count++,a=bs.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Xo={$$typeof:te,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function xg(e,t,n,a,i,s,d,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.hiddenUpdates=Xs(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Pc(e,t,n,a,i,s,d,c,y,w,S,O){return e=new xg(e,t,n,d,c,y,w,O),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=Ah(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},ir(s),e}function ef(e){return e?(e=Ia,e):Ia}function tf(e,t,n,a,i,s){i=ef(i),a.context===null?a.context=i:a.pendingContext=i,a=bn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=vn(e,a,t),n!==null&&($e(n,e,t),xo(n,e,t))}function nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kr(e,t){nf(e,t),(e=e.alternate)&&nf(e,t)}function af(e){if(e.tag===13){var t=cn(e,67108864);t!==null&&$e(t,e,67108864),Kr(e,67108864)}}var ks=!0;function Rg(e,t,n,a){var i=_.T;_.T=null;var s=B.p;try{B.p=2,Xr(e,t,n,a)}finally{B.p=s,_.T=i}}function Bg(e,t,n,a){var i=_.T;_.T=null;var s=B.p;try{B.p=8,Xr(e,t,n,a)}finally{B.p=s,_.T=i}}function Xr(e,t,n,a){if(ks){var i=Qr(a);if(i===null)Mr(e,t,a,Ts,n),sf(e,a);else if(Dg(i,e,t,n,a))a.stopPropagation();else if(sf(e,a),t&4&&-1<Yg.indexOf(e)){for(;i!==null;){var s=ca(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Mn(s.pendingLanes);if(d!==0){var c=s;for(c.pendingLanes|=2,c.entangledLanes|=2;d;){var y=1<<31-ot(d);c.entanglements[1]|=y,d&=~y}Yt(s),(Ie&6)===0&&(is=Ct()+500,Uo(0))}}break;case 13:c=cn(s,2),c!==null&&$e(c,s,2),rs(),Kr(s,2)}if(s=Qr(a),s===null&&Mr(e,t,a,Ts,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else Mr(e,t,a,null,n)}}function Qr(e){return e=nh(e),Jr(e)}var Ts=null;function Jr(e){if(Ts=null,e=qn(e),e!==null){var t=z(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ye(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ts=e,null}function of(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vy()){case Nl:return 2;case Ol:return 8;case wi:case ky:return 32;case Cl:return 268435456;default:return 32}default:return 32}}var $r=!1,En=null,Nn=null,On=null,Qo=new Map,Jo=new Map,Cn=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Qo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(t.pointerId)}}function $o(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ca(t),t!==null&&af(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dg(e,t,n,a,i){switch(t){case"focusin":return En=$o(En,e,t,n,a,i),!0;case"dragenter":return Nn=$o(Nn,e,t,n,a,i),!0;case"mouseover":return On=$o(On,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return Qo.set(s,$o(Qo.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Jo.set(s,$o(Jo.get(s)||null,e,t,n,a,i)),!0}return!1}function hf(e){var t=qn(e.target);if(t!==null){var n=z(t);if(n!==null){if(t=n.tag,t===13){if(t=ye(n),t!==null){e.blockedOn=t,Cy(e.priority,function(){if(n.tag===13){var a=lt(),i=cn(n,a);i!==null&&$e(i,n,a),Kr(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qr(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);th=a,n.target.dispatchEvent(a),th=null}else return t=ca(n),t!==null&&af(t),e.blockedOn=n,!1;t.shift()}return!0}function rf(e,t,n){Is(e)&&n.delete(t)}function Mg(){$r=!1,En!==null&&Is(En)&&(En=null),Nn!==null&&Is(Nn)&&(Nn=null),On!==null&&Is(On)&&(On=null),Qo.forEach(rf),Jo.forEach(rf)}function Hs(e,t){e.blockedOn===t&&(e.blockedOn=null,$r||($r=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mg)))}var As=null;function lf(e){As!==e&&(As=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){As===e&&(As=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Jr(a||n)===null)continue;break}var s=ca(n);s!==null&&(e.splice(t,3),t-=3,Lh(s,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Po(e){function t(y){return Hs(y,e)}En!==null&&Hs(En,e),Nn!==null&&Hs(Nn,e),On!==null&&Hs(On,e),Qo.forEach(t),Jo.forEach(t);for(var n=0;n<Cn.length;n++){var a=Cn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)hf(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],s=n[a+1],d=i[et]||null;if(typeof s=="function")d||lf(n);else if(d){var c=null;if(s&&s.hasAttribute("formAction")){if(i=s,d=s[et]||null)c=d.formAction;else if(Jr(i)!==null)continue}else c=d.action;typeof c=="function"?n[a+1]=c:(n.splice(a,3),a-=3),lf(n)}}}function Pr(e){this._internalRoot=e}Ss.prototype.render=Pr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,a=lt();tf(n,a,e,t,null,null)},Ss.prototype.unmount=Pr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ja(),tf(e.current,2,null,e,null,null),rs(),t[ua]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&hf(e)}};var df=o.version;if(df!=="19.0.0")throw Error(l(527,df,"19.0.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=C(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var qg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:_,findFiberByHostInstance:qn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{ao=Es.inject(qg),at=Es}catch{}}return ti.createRoot=function(e,t){if(!u(e))throw Error(l(299));var n=!1,a="",i=Su,s=Eu,d=Nu,c=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=Pc(e,1,!1,null,null,n,a,i,s,d,c,null),e[ua]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Pr(t)},ti.hydrateRoot=function(e,t,n){if(!u(e))throw Error(l(299));var a=!1,i="",s=Su,d=Eu,c=Nu,y=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),t=Pc(e,1,!0,t,n??null,a,i,s,d,c,y,w),t.context=ef(null),n=t.current,a=lt(),i=bn(a),i.callback=null,vn(n,i,a),t.current.lanes=a,io(t,a),Yt(t),e[ua]=t.current,Dr(e),new Ss(t)},ti.version="19.0.0",ti}var vf;function Kg(){if(vf)return nl.exports;vf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),nl.exports=Fg(),nl.exports}var Xg=Kg(),_s={},Qg=()=>{window.va||(window.va=function(...o){window.vaq||(window.vaq=[]),window.vaq.push(o)})},Jg="@vercel/analytics",$g="2.0.1";function Zf(){return typeof window<"u"}function jf(){try{const r="production"}catch{}return"production"}function Pg(r="auto"){if(r==="auto"){window.vam=jf();return}window.vam=r}function ew(){return(Zf()?window.vam:jf())||"production"}function gl(){return ew()==="development"}function tw(r){return r.scriptSrc?Fa(r.scriptSrc):gl()?"https://va.vercel-scripts.com/v1/script.debug.js":r.basePath?Fa(`${r.basePath}/insights/script.js`):"/_vercel/insights/script.js"}function nw(r,o){var h;let l=r;if(o)try{l={...(h=JSON.parse(o))==null?void 0:h.analytics,...r}}catch{}Pg(l.mode);const u={sdkn:Jg+(l.framework?`/${l.framework}`:""),sdkv:$g};return l.disableAutoTrack&&(u.disableAutoTrack="1"),l.viewEndpoint&&(u.viewEndpoint=Fa(l.viewEndpoint)),l.eventEndpoint&&(u.eventEndpoint=Fa(l.eventEndpoint)),l.sessionEndpoint&&(u.sessionEndpoint=Fa(l.sessionEndpoint)),gl()&&l.debug===!1&&(u.debug="false"),l.dsn&&(u.dsn=l.dsn),l.endpoint?u.endpoint=l.endpoint:l.basePath&&(u.endpoint=Fa(`${l.basePath}/insights`)),{beforeSend:l.beforeSend,src:tw(l),dataset:u}}function Fa(r){return r.startsWith("http://")||r.startsWith("https://")||r.startsWith("/")?r:`/${r}`}function aw(r={debug:!0},o){var h;if(!Zf())return;const{beforeSend:l,src:u,dataset:f}=nw(r,o);if(Qg(),l&&((h=window.va)==null||h.call(window,"beforeSend",l)),document.head.querySelector(`script[src*="${u}"]`))return;const b=document.createElement("script");b.src=u;for(const[N,H]of Object.entries(f))b.dataset[N]=H;b.defer=!0,b.onerror=()=>{const N=gl()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${u}. ${N}`)},document.head.appendChild(b)}function ow({route:r,path:o}){var h;(h=window.va)==null||h.call(window,"pageview",{route:r,path:o})}function iw(){if(!(typeof process>"u"||typeof _s>"u"))return _s.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function sw(){if(!(typeof process>"u"||typeof _s>"u"))return _s.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function hw(r){return _e.useEffect(()=>{var o;r.beforeSend&&((o=window.va)==null||o.call(window,"beforeSend",r.beforeSend))},[r.beforeSend]),_e.useEffect(()=>{aw({framework:r.framework||"react",basePath:r.basePath??iw(),...r.route!==void 0&&{disableAutoTrack:!0},...r},r.configString??sw())},[]),_e.useEffect(()=>{r.route&&r.path&&ow({route:r.route,path:r.path})},[r.route,r.path]),null}/**
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
 */const rw=function(r){const o=[];let h=0;for(let l=0;l<r.length;l++){let u=r.charCodeAt(l);u<128?o[h++]=u:u<2048?(o[h++]=u>>6|192,o[h++]=u&63|128):(u&64512)===55296&&l+1<r.length&&(r.charCodeAt(l+1)&64512)===56320?(u=65536+((u&1023)<<10)+(r.charCodeAt(++l)&1023),o[h++]=u>>18|240,o[h++]=u>>12&63|128,o[h++]=u>>6&63|128,o[h++]=u&63|128):(o[h++]=u>>12|224,o[h++]=u>>6&63|128,o[h++]=u&63|128)}return o},lw=function(r){const o=[];let h=0,l=0;for(;h<r.length;){const u=r[h++];if(u<128)o[l++]=String.fromCharCode(u);else if(u>191&&u<224){const f=r[h++];o[l++]=String.fromCharCode((u&31)<<6|f&63)}else if(u>239&&u<365){const f=r[h++],b=r[h++],N=r[h++],H=((u&7)<<18|(f&63)<<12|(b&63)<<6|N&63)-65536;o[l++]=String.fromCharCode(55296+(H>>10)),o[l++]=String.fromCharCode(56320+(H&1023))}else{const f=r[h++],b=r[h++];o[l++]=String.fromCharCode((u&15)<<12|(f&63)<<6|b&63)}}return o.join("")},dw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,o){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const h=o?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let u=0;u<r.length;u+=3){const f=r[u],b=u+1<r.length,N=b?r[u+1]:0,H=u+2<r.length,T=H?r[u+2]:0,x=f>>2,M=(f&3)<<4|N>>4;let U=(N&15)<<2|T>>6,te=T&63;H||(te=64,b||(U=64)),l.push(h[x],h[M],h[U],h[te])}return l.join("")},encodeString(r,o){return this.HAS_NATIVE_SUPPORT&&!o?btoa(r):this.encodeByteArray(rw(r),o)},decodeString(r,o){return this.HAS_NATIVE_SUPPORT&&!o?atob(r):lw(this.decodeStringToByteArray(r,o))},decodeStringToByteArray(r,o){this.init_();const h=o?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let u=0;u<r.length;){const f=h[r.charAt(u++)],N=u<r.length?h[r.charAt(u)]:0;++u;const T=u<r.length?h[r.charAt(u)]:64;++u;const M=u<r.length?h[r.charAt(u)]:64;if(++u,f==null||N==null||T==null||M==null)throw Error();const U=f<<2|N>>4;if(l.push(U),T!==64){const te=N<<4&240|T>>2;if(l.push(te),M!==64){const re=T<<6&192|M;l.push(re)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},uw=function(r){try{return dw.decodeString(r,!0)}catch(o){console.error("base64Decode failed: ",o)}return null};/**
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
 */class cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((o,h)=>{this.resolve=o,this.reject=h})}wrapCallback(o){return(h,l)=>{h?this.reject(h):this.resolve(l),typeof o=="function"&&(this.promise.catch(()=>{}),o.length===1?o(h):o(h,l))}}}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function yw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gw(){const r=Xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}/**
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
 */const ww="FirebaseError";class Pa extends Error{constructor(o,h,l){super(h),this.code=o,this.customData=l,this.name=ww,Object.setPrototypeOf(this,Pa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(o,h,l){this.service=o,this.serviceName=h,this.errors=l}create(o,...h){const l=h[0]||{},u=`${this.service}/${o}`,f=this.errors[o],b=f?pw(f,l):"Error",N=`${this.serviceName}: ${b} (${u}).`;return new Pa(u,N,l)}}function pw(r,o){return r.replace(bw,(h,l)=>{const u=o[l];return u!=null?String(u):`<${l}?>`})}const bw=/\{\$([^}]+)}/g;function vw(r){for(const o in r)if(Object.prototype.hasOwnProperty.call(r,o))return!1;return!0}function xs(r,o){if(r===o)return!0;const h=Object.keys(r),l=Object.keys(o);for(const u of h){if(!l.includes(u))return!1;const f=r[u],b=o[u];if(kf(f)&&kf(b)){if(!xs(f,b))return!1}else if(f!==b)return!1}for(const u of l)if(!h.includes(u))return!1;return!0}function kf(r){return r!==null&&typeof r=="object"}/**
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
 */function li(r){const o=[];for(const[h,l]of Object.entries(r))Array.isArray(l)?l.forEach(u=>{o.push(encodeURIComponent(h)+"="+encodeURIComponent(u))}):o.push(encodeURIComponent(h)+"="+encodeURIComponent(l));return o.length?"&"+o.join("&"):""}function ni(r){const o={};return r.replace(/^\?/,"").split("&").forEach(l=>{if(l){const[u,f]=l.split("=");o[decodeURIComponent(u)]=decodeURIComponent(f)}}),o}function ai(r){const o=r.indexOf("?");if(!o)return"";const h=r.indexOf("#",o);return r.substring(o,h>0?h:void 0)}function kw(r,o){const h=new Tw(r,o);return h.subscribe.bind(h)}class Tw{constructor(o,h){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=h,this.task.then(()=>{o(this)}).catch(l=>{this.error(l)})}next(o){this.forEachObserver(h=>{h.next(o)})}error(o){this.forEachObserver(h=>{h.error(o)}),this.close(o)}complete(){this.forEachObserver(o=>{o.complete()}),this.close()}subscribe(o,h,l){let u;if(o===void 0&&h===void 0&&l===void 0)throw new Error("Missing Observer.");Iw(o,["next","error","complete"])?u=o:u={next:o,error:h,complete:l},u.next===void 0&&(u.next=sl),u.error===void 0&&(u.error=sl),u.complete===void 0&&(u.complete=sl);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),f}unsubscribeOne(o){this.observers===void 0||this.observers[o]===void 0||(delete this.observers[o],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(o){if(!this.finalized)for(let h=0;h<this.observers.length;h++)this.sendOne(h,o)}sendOne(o,h){this.task.then(()=>{if(this.observers!==void 0&&this.observers[o]!==void 0)try{h(this.observers[o])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(o){this.finalized||(this.finalized=!0,o!==void 0&&(this.finalError=o),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Iw(r,o){if(typeof r!="object"||r===null)return!1;for(const h of o)if(h in r&&typeof r[h]=="function")return!0;return!1}function sl(){}/**
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
 */function qt(r){return r&&r._delegate?r._delegate:r}class ii{constructor(o,h,l){this.name=o,this.instanceFactory=h,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(o){return this.instantiationMode=o,this}setMultipleInstances(o){return this.multipleInstances=o,this}setServiceProps(o){return this.serviceProps=o,this}setInstanceCreatedCallback(o){return this.onInstanceCreated=o,this}}/**
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
 */const ia="[DEFAULT]";/**
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
 */class Hw{constructor(o,h){this.name=o,this.container=h,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(o){const h=this.normalizeInstanceIdentifier(o);if(!this.instancesDeferred.has(h)){const l=new cw;if(this.instancesDeferred.set(h,l),this.isInitialized(h)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:h});u&&l.resolve(u)}catch{}}return this.instancesDeferred.get(h).promise}getImmediate(o){var h;const l=this.normalizeInstanceIdentifier(o==null?void 0:o.identifier),u=(h=o==null?void 0:o.optional)!==null&&h!==void 0?h:!1;if(this.isInitialized(l)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:l})}catch(f){if(u)return null;throw f}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(o){if(o.name!==this.name)throw Error(`Mismatching Component ${o.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=o,!!this.shouldAutoInitialize()){if(Sw(o))try{this.getOrInitializeService({instanceIdentifier:ia})}catch{}for(const[h,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(h);try{const f=this.getOrInitializeService({instanceIdentifier:u});l.resolve(f)}catch{}}}}clearInstance(o=ia){this.instancesDeferred.delete(o),this.instancesOptions.delete(o),this.instances.delete(o)}async delete(){const o=Array.from(this.instances.values());await Promise.all([...o.filter(h=>"INTERNAL"in h).map(h=>h.INTERNAL.delete()),...o.filter(h=>"_delete"in h).map(h=>h._delete())])}isComponentSet(){return this.component!=null}isInitialized(o=ia){return this.instances.has(o)}getOptions(o=ia){return this.instancesOptions.get(o)||{}}initialize(o={}){const{options:h={}}=o,l=this.normalizeInstanceIdentifier(o.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:l,options:h});for(const[f,b]of this.instancesDeferred.entries()){const N=this.normalizeInstanceIdentifier(f);l===N&&b.resolve(u)}return u}onInit(o,h){var l;const u=this.normalizeInstanceIdentifier(h),f=(l=this.onInitCallbacks.get(u))!==null&&l!==void 0?l:new Set;f.add(o),this.onInitCallbacks.set(u,f);const b=this.instances.get(u);return b&&o(b,u),()=>{f.delete(o)}}invokeOnInitCallbacks(o,h){const l=this.onInitCallbacks.get(h);if(l)for(const u of l)try{u(o,h)}catch{}}getOrInitializeService({instanceIdentifier:o,options:h={}}){let l=this.instances.get(o);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(o),options:h}),this.instances.set(o,l),this.instancesOptions.set(o,h),this.invokeOnInitCallbacks(l,o),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,o,l)}catch{}return l||null}normalizeInstanceIdentifier(o=ia){return this.component?this.component.multipleInstances?o:ia:o}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(r){return r===ia?void 0:r}function Sw(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ew{constructor(o){this.name=o,this.providers=new Map}addComponent(o){const h=this.getProvider(o.name);if(h.isComponentSet())throw new Error(`Component ${o.name} has already been registered with ${this.name}`);h.setComponent(o)}addOrOverwriteComponent(o){this.getProvider(o.name).isComponentSet()&&this.providers.delete(o.name),this.addComponent(o)}getProvider(o){if(this.providers.has(o))return this.providers.get(o);const h=new Hw(o,this);return this.providers.set(o,h),h}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(we||(we={}));const Nw={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Ow=we.INFO,Cw={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},_w=(r,o,...h)=>{if(o<r.logLevel)return;const l=new Date().toISOString(),u=Cw[o];if(u)console[u](`[${l}]  ${r.name}:`,...h);else throw new Error(`Attempted to log a message with an invalid logType (value: ${o})`)};class Lf{constructor(o){this.name=o,this._logLevel=Ow,this._logHandler=_w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(o){if(!(o in we))throw new TypeError(`Invalid value "${o}" assigned to \`logLevel\``);this._logLevel=o}setLogLevel(o){this._logLevel=typeof o=="string"?Nw[o]:o}get logHandler(){return this._logHandler}set logHandler(o){if(typeof o!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=o}get userLogHandler(){return this._userLogHandler}set userLogHandler(o){this._userLogHandler=o}debug(...o){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...o),this._logHandler(this,we.DEBUG,...o)}log(...o){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...o),this._logHandler(this,we.VERBOSE,...o)}info(...o){this._userLogHandler&&this._userLogHandler(this,we.INFO,...o),this._logHandler(this,we.INFO,...o)}warn(...o){this._userLogHandler&&this._userLogHandler(this,we.WARN,...o),this._logHandler(this,we.WARN,...o)}error(...o){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...o),this._logHandler(this,we.ERROR,...o)}}/**
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
 */class xw{constructor(o){this.container=o}getPlatformInfoString(){return this.container.getProviders().map(h=>{if(Rw(h)){const l=h.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(h=>h).join(" ")}}function Rw(r){const o=r.getComponent();return(o==null?void 0:o.type)==="VERSION"}const ul="@firebase/app",Tf="0.7.17";/**
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
 */const wl=new Lf("@firebase/app"),Bw="@firebase/app-compat",Yw="@firebase/analytics-compat",Dw="@firebase/analytics",Mw="@firebase/app-check-compat",qw="@firebase/app-check",Zw="@firebase/auth",jw="@firebase/auth-compat",Lw="@firebase/database",zw="@firebase/database-compat",Uw="@firebase/functions",Vw="@firebase/functions-compat",Gw="@firebase/installations",Ww="@firebase/installations-compat",Fw="@firebase/messaging",Kw="@firebase/messaging-compat",Xw="@firebase/performance",Qw="@firebase/performance-compat",Jw="@firebase/remote-config",$w="@firebase/remote-config-compat",Pw="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/firestore-compat",ap="firebase",op="9.6.7";/**
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
 */const zf="[DEFAULT]",ip={[ul]:"fire-core",[Bw]:"fire-core-compat",[Dw]:"fire-analytics",[Yw]:"fire-analytics-compat",[qw]:"fire-app-check",[Mw]:"fire-app-check-compat",[Zw]:"fire-auth",[jw]:"fire-auth-compat",[Lw]:"fire-rtdb",[zw]:"fire-rtdb-compat",[Uw]:"fire-fn",[Vw]:"fire-fn-compat",[Gw]:"fire-iid",[Ww]:"fire-iid-compat",[Fw]:"fire-fcm",[Kw]:"fire-fcm-compat",[Xw]:"fire-perf",[Qw]:"fire-perf-compat",[Jw]:"fire-rc",[$w]:"fire-rc-compat",[Pw]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[np]:"fire-fst-compat","fire-js":"fire-js",[ap]:"fire-js-all"};/**
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
 */const Rs=new Map,cl=new Map;function sp(r,o){try{r.container.addComponent(o)}catch(h){wl.debug(`Component ${o.name} failed to register with FirebaseApp ${r.name}`,h)}}function Bs(r){const o=r.name;if(cl.has(o))return wl.debug(`There were multiple attempts to register component ${o}.`),!1;cl.set(o,r);for(const h of Rs.values())sp(h,r);return!0}function Uf(r,o){return r.container.getProvider(o)}/**
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
 */const hp={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},Ys=new ri("app","Firebase",hp);/**
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
 */class rp{constructor(o,h,l){this._isDeleted=!1,this._options=Object.assign({},o),this._config=Object.assign({},h),this._name=h.name,this._automaticDataCollectionEnabled=h.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(o){this.checkDestroyed(),this._automaticDataCollectionEnabled=o}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(o){this._isDeleted=o}checkDestroyed(){if(this.isDeleted)throw Ys.create("app-deleted",{appName:this._name})}}/**
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
 */const js=op;function lp(r,o={}){typeof o!="object"&&(o={name:o});const h=Object.assign({name:zf,automaticDataCollectionEnabled:!1},o),l=h.name;if(typeof l!="string"||!l)throw Ys.create("bad-app-name",{appName:String(l)});const u=Rs.get(l);if(u){if(xs(r,u.options)&&xs(h,u.config))return u;throw Ys.create("duplicate-app",{appName:l})}const f=new Ew(l);for(const N of cl.values())f.addComponent(N);const b=new rp(r,h,f);return Rs.set(l,b),b}function dp(r=zf){const o=Rs.get(r);if(!o)throw Ys.create("no-app",{appName:r});return o}function Xa(r,o,h){var l;let u=(l=ip[r])!==null&&l!==void 0?l:r;h&&(u+=`-${h}`);const f=u.match(/\s|\//),b=o.match(/\s|\//);if(f||b){const N=[`Unable to register library "${u}" with version "${o}":`];f&&N.push(`library name "${u}" contains illegal characters (whitespace or "/")`),f&&b&&N.push("and"),b&&N.push(`version name "${o}" contains illegal characters (whitespace or "/")`),wl.warn(N.join(" "));return}Bs(new ii(`${u}-version`,()=>({library:u,version:o}),"VERSION"))}/**
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
 */function up(r){Bs(new ii("platform-logger",o=>new xw(o),"PRIVATE")),Xa(ul,Tf,r),Xa(ul,Tf,"esm2017"),Xa("fire-js","")}up("");function pl(r,o){var h={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&o.indexOf(l)<0&&(h[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(r);u<l.length;u++)o.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(r,l[u])&&(h[l[u]]=r[l[u]]);return h}function Vf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cp=Vf,Gf=new ri("auth","Firebase",Vf());/**
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
 */const If=new Lf("@firebase/auth");function Ns(r,...o){If.logLevel<=we.ERROR&&If.error(`Auth (${js}): ${r}`,...o)}/**
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
 */function Et(r,...o){throw bl(r,...o)}function Dt(r,...o){return bl(r,...o)}function fp(r,o,h){const l=Object.assign(Object.assign({},cp()),{[o]:h});return new ri("auth","Firebase",l).create(o,{appName:r.name})}function bl(r,...o){if(typeof r!="string"){const h=o[0],l=[...o.slice(1)];return l[0]&&(l[0].appName=r.name),r._errorFactory.create(h,...l)}return Gf.create(r,...o)}function G(r,o,...h){if(!r)throw bl(o,...h)}function on(r){const o="INTERNAL ASSERTION FAILED: "+r;throw Ns(o),new Error(o)}function hn(r,o){r||on(o)}/**
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
 */const Hf=new Map;function sn(r){hn(r instanceof Function,"Expected a class definition");let o=Hf.get(r);return o?(hn(o instanceof r,"Instance stored in cache mismatched with class"),o):(o=new r,Hf.set(r,o),o)}/**
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
 */function yp(r,o){const h=Uf(r,"auth");if(h.isInitialized()){const u=h.getImmediate(),f=h.getOptions();if(xs(f,o??{}))return u;Et(u,"already-initialized")}return h.initialize({options:o})}function mp(r,o){const h=(o==null?void 0:o.persistence)||[],l=(Array.isArray(h)?h:[h]).map(sn);o!=null&&o.errorMap&&r._updateErrorMap(o.errorMap),r._initializeWithPersistence(l,o==null?void 0:o.popupRedirectResolver)}/**
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
 */function fl(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function gp(){return Af()==="http:"||Af()==="https:"}function Af(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gp()||yw()||"connection"in navigator)?navigator.onLine:!0}function pp(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class di{constructor(o,h){this.shortDelay=o,this.longDelay=h,hn(h>o,"Short delay should be less than long delay!"),this.isMobile=fw()||mw()}get(){return wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vl(r,o){hn(r.emulator,"Emulator should always be set here");const{url:h}=r.emulator;return o?`${h}${o.startsWith("/")?o.slice(1):o}`:h}/**
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
 */class Wf{static initialize(o,h,l){this.fetchImpl=o,h&&(this.headersImpl=h),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const vp=new di(3e4,6e4);function eo(r,o){return r.tenantId&&!o.tenantId?Object.assign(Object.assign({},o),{tenantId:r.tenantId}):o}async function la(r,o,h,l,u={}){return Ff(r,u,async()=>{let f={},b={};l&&(o==="GET"?b=l:f={body:JSON.stringify(l)});const N=li(Object.assign({key:r.config.apiKey},b)).slice(1),H=await r._getAdditionalHeaders();return H["Content-Type"]="application/json",r.languageCode&&(H["X-Firebase-Locale"]=r.languageCode),Wf.fetch()(Kf(r,r.config.apiHost,h,N),Object.assign({method:o,headers:H,referrerPolicy:"no-referrer"},f))})}async function Ff(r,o,h){r._canInitEmulator=!1;const l=Object.assign(Object.assign({},bp),o);try{const u=new kp(r),f=await Promise.race([h(),u.promise]);u.clearNetworkTimeout();const b=await f.json();if("needConfirmation"in b)throw hl(r,"account-exists-with-different-credential",b);if(f.ok&&!("errorMessage"in b))return b;{const N=f.ok?b.errorMessage:b.error.message,[H,T]=N.split(" : ");if(H==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(r,"credential-already-in-use",b);if(H==="EMAIL_EXISTS")throw hl(r,"email-already-in-use",b);const x=l[H]||H.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw fp(r,x,T);Et(r,x)}}catch(u){if(u instanceof Pa)throw u;Et(r,"network-request-failed")}}async function ui(r,o,h,l,u={}){const f=await la(r,o,h,l,u);return"mfaPendingCredential"in f&&Et(r,"multi-factor-auth-required",{_serverResponse:f}),f}function Kf(r,o,h,l){const u=`${o}${h}?${l}`;return r.config.emulator?vl(r.config,u):`${r.config.apiScheme}://${u}`}class kp{constructor(o){this.auth=o,this.timer=null,this.promise=new Promise((h,l)=>{this.timer=setTimeout(()=>l(Dt(this.auth,"network-request-failed")),vp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(r,o,h){const l={appName:r.name};h.email&&(l.email=h.email),h.phoneNumber&&(l.phoneNumber=h.phoneNumber);const u=Dt(r,o,l);return u.customData._tokenResponse=h,u}/**
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
 */async function Tp(r,o){return la(r,"POST","/v1/accounts:delete",o)}async function Ip(r,o){return la(r,"POST","/v1/accounts:lookup",o)}/**
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
 */function oi(r){if(r)try{const o=new Date(Number(r));if(!isNaN(o.getTime()))return o.toUTCString()}catch{}}async function Hp(r,o=!1){const h=qt(r),l=await h.getIdToken(o),u=kl(l);G(u&&u.exp&&u.auth_time&&u.iat,h.auth,"internal-error");const f=typeof u.firebase=="object"?u.firebase:void 0,b=f==null?void 0:f.sign_in_provider;return{claims:u,token:l,authTime:oi(rl(u.auth_time)),issuedAtTime:oi(rl(u.iat)),expirationTime:oi(rl(u.exp)),signInProvider:b||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function rl(r){return Number(r)*1e3}function kl(r){const[o,h,l]=r.split(".");if(o===void 0||h===void 0||l===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const u=uw(h);return u?JSON.parse(u):(Ns("Failed to decode base64 JWT payload"),null)}catch(u){return Ns("Caught error parsing JWT payload as JSON",u),null}}function Ap(r){const o=kl(r);return G(o,"internal-error"),G(typeof o.exp<"u","internal-error"),G(typeof o.iat<"u","internal-error"),Number(o.exp)-Number(o.iat)}/**
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
 */async function $a(r,o,h=!1){if(h)return o;try{return await o}catch(l){throw l instanceof Pa&&Sp(l)&&r.auth.currentUser===r&&await r.auth.signOut(),l}}function Sp({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Ep{constructor(o){this.user=o,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(o){var h;if(o){const l=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),l}else{this.errorBackoff=3e4;const u=((h=this.user.stsTokenManager.expirationTime)!==null&&h!==void 0?h:0)-Date.now()-3e5;return Math.max(0,u)}}schedule(o=!1){if(!this.isRunning)return;const h=this.getInterval(o);this.timerId=setTimeout(async()=>{await this.iteration()},h)}async iteration(){try{await this.user.getIdToken(!0)}catch(o){o.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xf{constructor(o,h){this.createdAt=o,this.lastLoginAt=h,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(o){this.createdAt=o.createdAt,this.lastLoginAt=o.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ds(r){var o;const h=r.auth,l=await r.getIdToken(),u=await $a(r,Ip(h,{idToken:l}));G(u==null?void 0:u.users.length,h,"internal-error");const f=u.users[0];r._notifyReloadListener(f);const b=!((o=f.providerUserInfo)===null||o===void 0)&&o.length?Cp(f.providerUserInfo):[],N=Op(r.providerData,b),H=r.isAnonymous,T=!(r.email&&f.passwordHash)&&!(N!=null&&N.length),x=H?T:!1,M={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:N,metadata:new Xf(f.createdAt,f.lastLoginAt),isAnonymous:x};Object.assign(r,M)}async function Np(r){const o=qt(r);await Ds(o),await o.auth._persistUserIfCurrent(o),o.auth._notifyListenersIfCurrent(o)}function Op(r,o){return[...r.filter(l=>!o.some(u=>u.providerId===l.providerId)),...o]}function Cp(r){return r.map(o=>{var{providerId:h}=o,l=pl(o,["providerId"]);return{providerId:h,uid:l.rawId||"",displayName:l.displayName||null,email:l.email||null,phoneNumber:l.phoneNumber||null,photoURL:l.photoUrl||null}})}/**
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
 */async function _p(r,o){const h=await Ff(r,{},async()=>{const l=li({grant_type:"refresh_token",refresh_token:o}).slice(1),{tokenApiHost:u,apiKey:f}=r.config,b=Kf(r,u,"/v1/token",`key=${f}`),N=await r._getAdditionalHeaders();return N["Content-Type"]="application/x-www-form-urlencoded",Wf.fetch()(b,{method:"POST",headers:N,body:l})});return{accessToken:h.access_token,expiresIn:h.expires_in,refreshToken:h.refresh_token}}/**
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
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(o){G(o.idToken,"internal-error"),G(typeof o.idToken<"u","internal-error"),G(typeof o.refreshToken<"u","internal-error");const h="expiresIn"in o&&typeof o.expiresIn<"u"?Number(o.expiresIn):Ap(o.idToken);this.updateTokensAndExpiration(o.idToken,o.refreshToken,h)}async getToken(o,h=!1){return G(!this.accessToken||this.refreshToken,o,"user-token-expired"),!h&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(o,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(o,h){const{accessToken:l,refreshToken:u,expiresIn:f}=await _p(o,h);this.updateTokensAndExpiration(l,u,Number(f))}updateTokensAndExpiration(o,h,l){this.refreshToken=h||null,this.accessToken=o||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(o,h){const{refreshToken:l,accessToken:u,expirationTime:f}=h,b=new si;return l&&(G(typeof l=="string","internal-error",{appName:o}),b.refreshToken=l),u&&(G(typeof u=="string","internal-error",{appName:o}),b.accessToken=u),f&&(G(typeof f=="number","internal-error",{appName:o}),b.expirationTime=f),b}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(o){this.accessToken=o.accessToken,this.refreshToken=o.refreshToken,this.expirationTime=o.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
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
 */function xn(r,o){G(typeof r=="string"||typeof r>"u","internal-error",{appName:o})}class sa{constructor(o){var{uid:h,auth:l,stsTokenManager:u}=o,f=pl(o,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ep(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=h,this.auth=l,this.stsTokenManager=u,this.accessToken=u.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new Xf(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(o){const h=await $a(this,this.stsTokenManager.getToken(this.auth,o));return G(h,this.auth,"internal-error"),this.accessToken!==h&&(this.accessToken=h,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),h}getIdTokenResult(o){return Hp(this,o)}reload(){return Np(this)}_assign(o){this!==o&&(G(this.uid===o.uid,this.auth,"internal-error"),this.displayName=o.displayName,this.photoURL=o.photoURL,this.email=o.email,this.emailVerified=o.emailVerified,this.phoneNumber=o.phoneNumber,this.isAnonymous=o.isAnonymous,this.tenantId=o.tenantId,this.providerData=o.providerData.map(h=>Object.assign({},h)),this.metadata._copy(o.metadata),this.stsTokenManager._assign(o.stsTokenManager))}_clone(o){return new sa(Object.assign(Object.assign({},this),{auth:o,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(o){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=o,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(o){this.reloadListener?this.reloadListener(o):this.reloadUserInfo=o}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(o,h=!1){let l=!1;o.idToken&&o.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(o),l=!0),h&&await Ds(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){const o=await this.getIdToken();return await $a(this,Tp(this.auth,{idToken:o})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(o=>Object.assign({},o)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(o,h){var l,u,f,b,N,H,T,x;const M=(l=h.displayName)!==null&&l!==void 0?l:void 0,U=(u=h.email)!==null&&u!==void 0?u:void 0,te=(f=h.phoneNumber)!==null&&f!==void 0?f:void 0,re=(b=h.photoURL)!==null&&b!==void 0?b:void 0,xe=(N=h.tenantId)!==null&&N!==void 0?N:void 0,He=(H=h._redirectEventId)!==null&&H!==void 0?H:void 0,fe=(T=h.createdAt)!==null&&T!==void 0?T:void 0,le=(x=h.lastLoginAt)!==null&&x!==void 0?x:void 0,{uid:be,emailVerified:Oe,isAnonymous:W,providerData:pe,stsTokenManager:ee}=h;G(be&&ee,o,"internal-error");const ve=si.fromJSON(this.name,ee);G(typeof be=="string",o,"internal-error"),xn(M,o.name),xn(U,o.name),G(typeof Oe=="boolean",o,"internal-error"),G(typeof W=="boolean",o,"internal-error"),xn(te,o.name),xn(re,o.name),xn(xe,o.name),xn(He,o.name),xn(fe,o.name),xn(le,o.name);const _=new sa({uid:be,auth:o,email:U,emailVerified:Oe,displayName:M,isAnonymous:W,photoURL:re,phoneNumber:te,tenantId:xe,stsTokenManager:ve,createdAt:fe,lastLoginAt:le});return pe&&Array.isArray(pe)&&(_.providerData=pe.map(V=>Object.assign({},V))),He&&(_._redirectEventId=He),_}static async _fromIdTokenResponse(o,h,l=!1){const u=new si;u.updateFromServerResponse(h);const f=new sa({uid:h.localId,auth:o,stsTokenManager:u,isAnonymous:l});return await Ds(f),f}}/**
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
 */class Qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(o,h){this.storage[o]=h}async _get(o){const h=this.storage[o];return h===void 0?null:h}async _remove(o){delete this.storage[o]}_addListener(o,h){}_removeListener(o,h){}}Qf.type="NONE";const Sf=Qf;/**
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
 */function Os(r,o,h){return`firebase:${r}:${o}:${h}`}class Qa{constructor(o,h,l){this.persistence=o,this.auth=h,this.userKey=l;const{config:u,name:f}=this.auth;this.fullUserKey=Os(this.userKey,u.apiKey,f),this.fullPersistenceKey=Os("persistence",u.apiKey,f),this.boundEventHandler=h._onStorageEvent.bind(h),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(o){return this.persistence._set(this.fullUserKey,o.toJSON())}async getCurrentUser(){const o=await this.persistence._get(this.fullUserKey);return o?sa._fromJSON(this.auth,o):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(o){if(this.persistence===o)return;const h=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=o,h)return this.setCurrentUser(h)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(o,h,l="authUser"){if(!h.length)return new Qa(sn(Sf),o,l);const u=(await Promise.all(h.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let f=u[0]||sn(Sf);const b=Os(l,o.config.apiKey,o.name);let N=null;for(const T of h)try{const x=await T._get(b);if(x){const M=sa._fromJSON(o,x);T!==f&&(N=M),f=T;break}}catch{}const H=u.filter(T=>T._shouldAllowMigration);return!f._shouldAllowMigration||!H.length?new Qa(f,o,l):(f=H[0],N&&await f._set(b,N.toJSON()),await Promise.all(h.map(async T=>{if(T!==f)try{await T._remove(b)}catch{}})),new Qa(f,o,l))}}/**
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
 */function Ef(r){const o=r.toLowerCase();if(o.includes("opera/")||o.includes("opr/")||o.includes("opios/"))return"Opera";if(Pf(o))return"IEMobile";if(o.includes("msie")||o.includes("trident/"))return"IE";if(o.includes("edge/"))return"Edge";if(Jf(o))return"Firefox";if(o.includes("silk/"))return"Silk";if(ty(o))return"Blackberry";if(ny(o))return"Webos";if(Tl(o))return"Safari";if((o.includes("chrome/")||$f(o))&&!o.includes("edge/"))return"Chrome";if(ey(o))return"Android";{const h=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=r.match(h);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function Jf(r=Xe()){return/firefox\//i.test(r)}function Tl(r=Xe()){const o=r.toLowerCase();return o.includes("safari/")&&!o.includes("chrome/")&&!o.includes("crios/")&&!o.includes("android")}function $f(r=Xe()){return/crios\//i.test(r)}function Pf(r=Xe()){return/iemobile/i.test(r)}function ey(r=Xe()){return/android/i.test(r)}function ty(r=Xe()){return/blackberry/i.test(r)}function ny(r=Xe()){return/webos/i.test(r)}function Ls(r=Xe()){return/iphone|ipad|ipod/i.test(r)}function xp(r=Xe()){var o;return Ls(r)&&!!(!((o=window.navigator)===null||o===void 0)&&o.standalone)}function Rp(){return gw()&&document.documentMode===10}function ay(r=Xe()){return Ls(r)||ey(r)||ny(r)||ty(r)||/windows phone/i.test(r)||Pf(r)}function Bp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function oy(r,o=[]){let h;switch(r){case"Browser":h=Ef(Xe());break;case"Worker":h=`${Ef(Xe())}-${r}`;break;default:h=r}const l=o.length?o.join(","):"FirebaseCore-web";return`${h}/JsCore/${js}/${l}`}/**
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
 */class Yp{constructor(o,h){this.app=o,this.config=h,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nf(this),this.idTokenSubscription=new Nf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=o.name,this.clientVersion=h.sdkClientVersion}_initializeWithPersistence(o,h){return h&&(this._popupRedirectResolver=sn(h)),this._initializationPromise=this.queue(async()=>{var l,u;if(!this._deleted&&(this.persistenceManager=await Qa.create(this,o),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(h),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const o=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!o)){if(this.currentUser&&o&&this.currentUser.uid===o.uid){this._currentUser._assign(o),await this.currentUser.getIdToken();return}await this._updateCurrentUser(o)}}async initializeCurrentUser(o){var h;let l=await this.assertedPersistence.getCurrentUser();if(o&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(h=this.redirectUser)===null||h===void 0?void 0:h._redirectEventId,f=l==null?void 0:l._redirectEventId,b=await this.tryRedirectSignIn(o);(!u||u===f)&&(b!=null&&b.user)&&(l=b.user)}return l?l._redirectEventId?(G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)):this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}async tryRedirectSignIn(o){let h=null;try{h=await this._popupRedirectResolver._completeRedirectFn(this,o,!0)}catch{await this._setRedirectUser(null)}return h}async reloadAndSetCurrentUserOrClear(o){try{await Ds(o)}catch(h){if(h.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(o)}useDeviceLanguage(){this.languageCode=pp()}async _delete(){this._deleted=!0}async updateCurrentUser(o){const h=o?qt(o):null;return h&&G(h.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(h&&h._clone(this))}async _updateCurrentUser(o){if(!this._deleted)return o&&G(this.tenantId===o.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(o),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(o){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(o))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(o){this._errorFactory=new ri("auth","Firebase",o())}onAuthStateChanged(o,h,l){return this.registerStateListener(this.authStateSubscription,o,h,l)}onIdTokenChanged(o,h,l){return this.registerStateListener(this.idTokenSubscription,o,h,l)}toJSON(){var o;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(o=this._currentUser)===null||o===void 0?void 0:o.toJSON()}}async _setRedirectUser(o,h){const l=await this.getOrInitRedirectPersistenceManager(h);return o===null?l.removeCurrentUser():l.setCurrentUser(o)}async getOrInitRedirectPersistenceManager(o){if(!this.redirectPersistenceManager){const h=o&&sn(o)||this._popupRedirectResolver;G(h,this,"argument-error"),this.redirectPersistenceManager=await Qa.create(this,[sn(h._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(o){var h,l;return this._isInitialized&&await this.queue(async()=>{}),((h=this._currentUser)===null||h===void 0?void 0:h._redirectEventId)===o?this._currentUser:((l=this.redirectUser)===null||l===void 0?void 0:l._redirectEventId)===o?this.redirectUser:null}async _persistUserIfCurrent(o){if(o===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(o))}_notifyListenersIfCurrent(o){o===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var o,h;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const l=(h=(o=this.currentUser)===null||o===void 0?void 0:o.uid)!==null&&h!==void 0?h:null;this.lastNotifiedUid!==l&&(this.lastNotifiedUid=l,this.authStateSubscription.next(this.currentUser))}registerStateListener(o,h,l,u){if(this._deleted)return()=>{};const f=typeof h=="function"?h:h.next.bind(h),b=this._isInitialized?Promise.resolve():this._initializationPromise;return G(b,this,"internal-error"),b.then(()=>f(this.currentUser)),typeof h=="function"?o.addObserver(h,l,u):o.addObserver(h)}async directlySetCurrentUser(o){this.currentUser&&this.currentUser!==o&&(this._currentUser._stopProactiveRefresh(),o&&this.isProactiveRefreshEnabled&&o._startProactiveRefresh()),this.currentUser=o,o?await this.assertedPersistence.setCurrentUser(o):await this.assertedPersistence.removeCurrentUser()}queue(o){return this.operations=this.operations.then(o,o),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(o){!o||this.frameworks.includes(o)||(this.frameworks.push(o),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const o={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(o["X-Firebase-gmpid"]=this.app.options.appId),o}}function zs(r){return qt(r)}class Nf{constructor(o){this.auth=o,this.observer=null,this.addObserver=kw(h=>this.observer=h)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Il{constructor(o,h){this.providerId=o,this.signInMethod=h}toJSON(){return on("not implemented")}_getIdTokenResponse(o){return on("not implemented")}_linkToIdToken(o,h){return on("not implemented")}_getReauthenticationResolver(o){return on("not implemented")}}async function Dp(r,o){return la(r,"POST","/v1/accounts:update",o)}/**
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
 */async function Mp(r,o){return ui(r,"POST","/v1/accounts:signInWithPassword",eo(r,o))}async function qp(r,o){return la(r,"POST","/v1/accounts:sendOobCode",eo(r,o))}async function Zp(r,o){return qp(r,o)}/**
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
 */async function jp(r,o){return ui(r,"POST","/v1/accounts:signInWithEmailLink",eo(r,o))}async function Lp(r,o){return ui(r,"POST","/v1/accounts:signInWithEmailLink",eo(r,o))}/**
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
 */class hi extends Il{constructor(o,h,l,u=null){super("password",l),this._email=o,this._password=h,this._tenantId=u}static _fromEmailAndPassword(o,h){return new hi(o,h,"password")}static _fromEmailAndCode(o,h,l=null){return new hi(o,h,"emailLink",l)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(o){const h=typeof o=="string"?JSON.parse(o):o;if(h!=null&&h.email&&(h!=null&&h.password)){if(h.signInMethod==="password")return this._fromEmailAndPassword(h.email,h.password);if(h.signInMethod==="emailLink")return this._fromEmailAndCode(h.email,h.password,h.tenantId)}return null}async _getIdTokenResponse(o){switch(this.signInMethod){case"password":return Mp(o,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jp(o,{email:this._email,oobCode:this._password});default:Et(o,"internal-error")}}async _linkToIdToken(o,h){switch(this.signInMethod){case"password":return Dp(o,{idToken:h,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lp(o,{idToken:h,email:this._email,oobCode:this._password});default:Et(o,"internal-error")}}_getReauthenticationResolver(o){return this._getIdTokenResponse(o)}}/**
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
 */async function Ja(r,o){return ui(r,"POST","/v1/accounts:signInWithIdp",eo(r,o))}/**
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
 */const zp="http://localhost";class ha extends Il{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(o){const h=new ha(o.providerId,o.signInMethod);return o.idToken||o.accessToken?(o.idToken&&(h.idToken=o.idToken),o.accessToken&&(h.accessToken=o.accessToken),o.nonce&&!o.pendingToken&&(h.nonce=o.nonce),o.pendingToken&&(h.pendingToken=o.pendingToken)):o.oauthToken&&o.oauthTokenSecret?(h.accessToken=o.oauthToken,h.secret=o.oauthTokenSecret):Et("argument-error"),h}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(o){const h=typeof o=="string"?JSON.parse(o):o,{providerId:l,signInMethod:u}=h,f=pl(h,["providerId","signInMethod"]);if(!l||!u)return null;const b=new ha(l,u);return b.idToken=f.idToken||void 0,b.accessToken=f.accessToken||void 0,b.secret=f.secret,b.nonce=f.nonce,b.pendingToken=f.pendingToken||null,b}_getIdTokenResponse(o){const h=this.buildRequest();return Ja(o,h)}_linkToIdToken(o,h){const l=this.buildRequest();return l.idToken=h,Ja(o,l)}_getReauthenticationResolver(o){const h=this.buildRequest();return h.autoCreate=!1,Ja(o,h)}buildRequest(){const o={requestUri:zp,returnSecureToken:!0};if(this.pendingToken)o.pendingToken=this.pendingToken;else{const h={};this.idToken&&(h.id_token=this.idToken),this.accessToken&&(h.access_token=this.accessToken),this.secret&&(h.oauth_token_secret=this.secret),h.providerId=this.providerId,this.nonce&&!this.pendingToken&&(h.nonce=this.nonce),o.postBody=li(h)}return o}}/**
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
 */function Up(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vp(r){const o=ni(ai(r)).link,h=o?ni(ai(o)).deep_link_id:null,l=ni(ai(r)).deep_link_id;return(l?ni(ai(l)).link:null)||l||h||o||r}class Hl{constructor(o){var h,l,u,f,b,N;const H=ni(ai(o)),T=(h=H.apiKey)!==null&&h!==void 0?h:null,x=(l=H.oobCode)!==null&&l!==void 0?l:null,M=Up((u=H.mode)!==null&&u!==void 0?u:null);G(T&&x&&M,"argument-error"),this.apiKey=T,this.operation=M,this.code=x,this.continueUrl=(f=H.continueUrl)!==null&&f!==void 0?f:null,this.languageCode=(b=H.languageCode)!==null&&b!==void 0?b:null,this.tenantId=(N=H.tenantId)!==null&&N!==void 0?N:null}static parseLink(o){const h=Vp(o);try{return new Hl(h)}catch{return null}}}/**
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
 */class to{constructor(){this.providerId=to.PROVIDER_ID}static credential(o,h){return hi._fromEmailAndPassword(o,h)}static credentialWithLink(o,h){const l=Hl.parseLink(h);return G(l,"argument-error"),hi._fromEmailAndCode(o,l.code,l.tenantId)}}to.PROVIDER_ID="password";to.EMAIL_PASSWORD_SIGN_IN_METHOD="password";to.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class iy{constructor(o){this.providerId=o,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(o){this.defaultLanguageCode=o}setCustomParameters(o){return this.customParameters=o,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ci extends iy{constructor(){super(...arguments),this.scopes=[]}addScope(o){return this.scopes.includes(o)||this.scopes.push(o),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rn extends ci{constructor(){super("facebook.com")}static credential(o){return ha._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:o})}static credentialFromResult(o){return Rn.credentialFromTaggedObject(o)}static credentialFromError(o){return Rn.credentialFromTaggedObject(o.customData||{})}static credentialFromTaggedObject({_tokenResponse:o}){if(!o||!("oauthAccessToken"in o)||!o.oauthAccessToken)return null;try{return Rn.credential(o.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(o,h){return ha._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:o,accessToken:h})}static credentialFromResult(o){return Bn.credentialFromTaggedObject(o)}static credentialFromError(o){return Bn.credentialFromTaggedObject(o.customData||{})}static credentialFromTaggedObject({_tokenResponse:o}){if(!o)return null;const{oauthIdToken:h,oauthAccessToken:l}=o;if(!h&&!l)return null;try{return Bn.credential(h,l)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class Yn extends ci{constructor(){super("github.com")}static credential(o){return ha._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:o})}static credentialFromResult(o){return Yn.credentialFromTaggedObject(o)}static credentialFromError(o){return Yn.credentialFromTaggedObject(o.customData||{})}static credentialFromTaggedObject({_tokenResponse:o}){if(!o||!("oauthAccessToken"in o)||!o.oauthAccessToken)return null;try{return Yn.credential(o.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Dn extends ci{constructor(){super("twitter.com")}static credential(o,h){return ha._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:o,oauthTokenSecret:h})}static credentialFromResult(o){return Dn.credentialFromTaggedObject(o)}static credentialFromError(o){return Dn.credentialFromTaggedObject(o.customData||{})}static credentialFromTaggedObject({_tokenResponse:o}){if(!o)return null;const{oauthAccessToken:h,oauthTokenSecret:l}=o;if(!h||!l)return null;try{return Dn.credential(h,l)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function Gp(r,o){return ui(r,"POST","/v1/accounts:signUp",eo(r,o))}/**
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
 */class ra{constructor(o){this.user=o.user,this.providerId=o.providerId,this._tokenResponse=o._tokenResponse,this.operationType=o.operationType}static async _fromIdTokenResponse(o,h,l,u=!1){const f=await sa._fromIdTokenResponse(o,l,u),b=Of(l);return new ra({user:f,providerId:b,_tokenResponse:l,operationType:h})}static async _forOperation(o,h,l){await o._updateTokensIfNecessary(l,!0);const u=Of(l);return new ra({user:o,providerId:u,_tokenResponse:l,operationType:h})}}function Of(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ms extends Pa{constructor(o,h,l,u){var f;super(h.code,h.message),this.operationType=l,this.user=u,Object.setPrototypeOf(this,Ms.prototype),this.customData={appName:o.name,tenantId:(f=o.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:h.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(o,h,l,u){return new Ms(o,h,l,u)}}function sy(r,o,h,l){return(o==="reauthenticate"?h._getReauthenticationResolver(r):h._getIdTokenResponse(r)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?Ms._fromErrorAndOperation(r,f,o,l):f})}async function Wp(r,o,h=!1){const l=await $a(r,o._linkToIdToken(r.auth,await r.getIdToken()),h);return ra._forOperation(r,"link",l)}/**
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
 */async function Fp(r,o,h=!1){const{auth:l}=r,u="reauthenticate";try{const f=await $a(r,sy(l,u,o,r),h);G(f.idToken,l,"internal-error");const b=kl(f.idToken);G(b,l,"internal-error");const{sub:N}=b;return G(r.uid===N,l,"user-mismatch"),ra._forOperation(r,u,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&Et(l,"user-mismatch"),f}}/**
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
 */async function hy(r,o,h=!1){const l="signIn",u=await sy(r,l,o),f=await ra._fromIdTokenResponse(r,l,u);return h||await r._updateCurrentUser(f.user),f}async function Kp(r,o){return hy(zs(r),o)}/**
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
 */async function Xp(r,o,h){const l=qt(r);await Zp(l,{requestType:"PASSWORD_RESET",email:o})}async function Qp(r,o,h){const l=zs(r),u=await Gp(l,{returnSecureToken:!0,email:o,password:h}),f=await ra._fromIdTokenResponse(l,"signIn",u);return await l._updateCurrentUser(f.user),f}function Jp(r,o,h){return Kp(qt(r),to.credential(o,h))}/**
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
 */async function $p(r,o){return la(r,"POST","/v1/accounts:update",o)}/**
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
 */async function Pp(r,{displayName:o,photoURL:h}){if(o===void 0&&h===void 0)return;const l=qt(r),f={idToken:await l.getIdToken(),displayName:o,photoUrl:h,returnSecureToken:!0},b=await $a(l,$p(l.auth,f));l.displayName=b.displayName||null,l.photoURL=b.photoUrl||null;const N=l.providerData.find(({providerId:H})=>H==="password");N&&(N.displayName=l.displayName,N.photoURL=l.photoURL),await l._updateTokensIfNecessary(b)}/**
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
 */function eb(r,o){return qt(r).setPersistence(o)}function tb(r,o,h,l){return qt(r).onAuthStateChanged(o,h,l)}function nb(r){return qt(r).signOut()}const qs="__sak";/**
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
 */class ry{constructor(o,h){this.storageRetriever=o,this.type=h}_isAvailable(){try{return this.storage?(this.storage.setItem(qs,"1"),this.storage.removeItem(qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(o,h){return this.storage.setItem(o,JSON.stringify(h)),Promise.resolve()}_get(o){const h=this.storage.getItem(o);return Promise.resolve(h?JSON.parse(h):null)}_remove(o){return this.storage.removeItem(o),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ab(){const r=Xe();return Tl(r)||Ls(r)}const ob=1e3,ib=10;class ly extends ry{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(o,h)=>this.onStorageEvent(o,h),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ab()&&Bp(),this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(o){for(const h of Object.keys(this.listeners)){const l=this.storage.getItem(h),u=this.localCache[h];l!==u&&o(h,u,l)}}onStorageEvent(o,h=!1){if(!o.key){this.forAllChangedKeys((b,N,H)=>{this.notifyListeners(b,H)});return}const l=o.key;if(h?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const b=this.storage.getItem(l);if(o.newValue!==b)o.newValue!==null?this.storage.setItem(l,o.newValue):this.storage.removeItem(l);else if(this.localCache[l]===o.newValue&&!h)return}const u=()=>{const b=this.storage.getItem(l);!h&&this.localCache[l]===b||this.notifyListeners(l,b)},f=this.storage.getItem(l);Rp()&&f!==o.newValue&&o.newValue!==o.oldValue?setTimeout(u,ib):u()}notifyListeners(o,h){this.localCache[o]=h;const l=this.listeners[o];if(l)for(const u of Array.from(l))u(h&&JSON.parse(h))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((o,h,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:o,oldValue:h,newValue:l}),!0)})},ob)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(o,h){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[o]||(this.listeners[o]=new Set,this.localCache[o]=this.storage.getItem(o)),this.listeners[o].add(h)}_removeListener(o,h){this.listeners[o]&&(this.listeners[o].delete(h),this.listeners[o].size===0&&delete this.listeners[o]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(o,h){await super._set(o,h),this.localCache[o]=JSON.stringify(h)}async _get(o){const h=await super._get(o);return this.localCache[o]=JSON.stringify(h),h}async _remove(o){await super._remove(o),delete this.localCache[o]}}ly.type="LOCAL";const dy=ly;/**
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
 */class uy extends ry{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(o,h){}_removeListener(o,h){}}uy.type="SESSION";const Al=uy;/**
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
 */function sb(r){return Promise.all(r.map(async o=>{try{return{fulfilled:!0,value:await o}}catch(h){return{fulfilled:!1,reason:h}}}))}/**
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
 */class Us{constructor(o){this.eventTarget=o,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(o){const h=this.receivers.find(u=>u.isListeningto(o));if(h)return h;const l=new Us(o);return this.receivers.push(l),l}isListeningto(o){return this.eventTarget===o}async handleEvent(o){const h=o,{eventId:l,eventType:u,data:f}=h.data,b=this.handlersMap[u];if(!(b!=null&&b.size))return;h.ports[0].postMessage({status:"ack",eventId:l,eventType:u});const N=Array.from(b).map(async T=>T(h.origin,f)),H=await sb(N);h.ports[0].postMessage({status:"done",eventId:l,eventType:u,response:H})}_subscribe(o,h){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[o]||(this.handlersMap[o]=new Set),this.handlersMap[o].add(h)}_unsubscribe(o,h){this.handlersMap[o]&&h&&this.handlersMap[o].delete(h),(!h||this.handlersMap[o].size===0)&&delete this.handlersMap[o],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Us.receivers=[];/**
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
 */function Sl(r="",o=10){let h="";for(let l=0;l<o;l++)h+=Math.floor(Math.random()*10);return r+h}/**
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
 */class hb{constructor(o){this.target=o,this.handlers=new Set}removeMessageHandler(o){o.messageChannel&&(o.messageChannel.port1.removeEventListener("message",o.onMessage),o.messageChannel.port1.close()),this.handlers.delete(o)}async _send(o,h,l=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let f,b;return new Promise((N,H)=>{const T=Sl("",20);u.port1.start();const x=setTimeout(()=>{H(new Error("unsupported_event"))},l);b={messageChannel:u,onMessage(M){const U=M;if(U.data.eventId===T)switch(U.data.status){case"ack":clearTimeout(x),f=setTimeout(()=>{H(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),N(U.data.response);break;default:clearTimeout(x),clearTimeout(f),H(new Error("invalid_response"));break}}},this.handlers.add(b),u.port1.addEventListener("message",b.onMessage),this.target.postMessage({eventType:o,eventId:T,data:h},[u.port2])}).finally(()=>{b&&this.removeMessageHandler(b)})}}/**
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
 */function Mt(){return window}function rb(r){Mt().location.href=r}/**
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
 */function cy(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function lb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function db(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ub(){return cy()?self:null}/**
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
 */const fy="firebaseLocalStorageDb",cb=1,Zs="firebaseLocalStorage",yy="fbase_key";class fi{constructor(o){this.request=o}toPromise(){return new Promise((o,h)=>{this.request.addEventListener("success",()=>{o(this.request.result)}),this.request.addEventListener("error",()=>{h(this.request.error)})})}}function Vs(r,o){return r.transaction([Zs],o?"readwrite":"readonly").objectStore(Zs)}function fb(){const r=indexedDB.deleteDatabase(fy);return new fi(r).toPromise()}function yl(){const r=indexedDB.open(fy,cb);return new Promise((o,h)=>{r.addEventListener("error",()=>{h(r.error)}),r.addEventListener("upgradeneeded",()=>{const l=r.result;try{l.createObjectStore(Zs,{keyPath:yy})}catch(u){h(u)}}),r.addEventListener("success",async()=>{const l=r.result;l.objectStoreNames.contains(Zs)?o(l):(l.close(),await fb(),o(await yl()))})})}async function Cf(r,o,h){const l=Vs(r,!0).put({[yy]:o,value:h});return new fi(l).toPromise()}async function yb(r,o){const h=Vs(r,!1).get(o),l=await new fi(h).toPromise();return l===void 0?null:l.value}function _f(r,o){const h=Vs(r,!0).delete(o);return new fi(h).toPromise()}const mb=800,gb=3;class my{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yl(),this.db)}async _withRetries(o){let h=0;for(;;)try{const l=await this._openDb();return await o(l)}catch(l){if(h++>gb)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Us._getInstance(ub()),this.receiver._subscribe("keyChanged",async(o,h)=>({keyProcessed:(await this._poll()).includes(h.key)})),this.receiver._subscribe("ping",async(o,h)=>["keyChanged"])}async initializeSender(){var o,h;if(this.activeServiceWorker=await lb(),!this.activeServiceWorker)return;this.sender=new hb(this.activeServiceWorker);const l=await this.sender._send("ping",{},800);l&&!((o=l[0])===null||o===void 0)&&o.fulfilled&&!((h=l[0])===null||h===void 0)&&h.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(o){if(!(!this.sender||!this.activeServiceWorker||db()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:o},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const o=await yl();return await Cf(o,qs,"1"),await _f(o,qs),!0}catch{}return!1}async _withPendingWrite(o){this.pendingWrites++;try{await o()}finally{this.pendingWrites--}}async _set(o,h){return this._withPendingWrite(async()=>(await this._withRetries(l=>Cf(l,o,h)),this.localCache[o]=h,this.notifyServiceWorker(o)))}async _get(o){const h=await this._withRetries(l=>yb(l,o));return this.localCache[o]=h,h}async _remove(o){return this._withPendingWrite(async()=>(await this._withRetries(h=>_f(h,o)),delete this.localCache[o],this.notifyServiceWorker(o)))}async _poll(){const o=await this._withRetries(u=>{const f=Vs(u,!1).getAll();return new fi(f).toPromise()});if(!o)return[];if(this.pendingWrites!==0)return[];const h=[],l=new Set;for(const{fbase_key:u,value:f}of o)l.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(f)&&(this.notifyListeners(u,f),h.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!l.has(u)&&(this.notifyListeners(u,null),h.push(u));return h}notifyListeners(o,h){this.localCache[o]=h;const l=this.listeners[o];if(l)for(const u of Array.from(l))u(h)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(o,h){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[o]||(this.listeners[o]=new Set,this._get(o)),this.listeners[o].add(h)}_removeListener(o,h){this.listeners[o]&&(this.listeners[o].delete(h),this.listeners[o].size===0&&delete this.listeners[o]),Object.keys(this.listeners).length===0&&this.stopPolling()}}my.type="LOCAL";const wb=my;/**
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
 */function pb(){var r,o;return(o=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&o!==void 0?o:document}function bb(r){return new Promise((o,h)=>{const l=document.createElement("script");l.setAttribute("src",r),l.onload=o,l.onerror=u=>{const f=Dt("internal-error");f.customData=u,h(f)},l.type="text/javascript",l.charset="UTF-8",pb().appendChild(l)})}function vb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}new di(3e4,6e4);/**
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
 */function kb(r,o){return o?sn(o):(G(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class El extends Il{constructor(o){super("custom","custom"),this.params=o}_getIdTokenResponse(o){return Ja(o,this._buildIdpRequest())}_linkToIdToken(o,h){return Ja(o,this._buildIdpRequest(h))}_getReauthenticationResolver(o){return Ja(o,this._buildIdpRequest())}_buildIdpRequest(o){const h={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return o&&(h.idToken=o),h}}function Tb(r){return hy(r.auth,new El(r),r.bypassAuthState)}function Ib(r){const{auth:o,user:h}=r;return G(h,o,"internal-error"),Fp(h,new El(r),r.bypassAuthState)}async function Hb(r){const{auth:o,user:h}=r;return G(h,o,"internal-error"),Wp(h,new El(r),r.bypassAuthState)}/**
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
 */class gy{constructor(o,h,l,u,f=!1){this.auth=o,this.resolver=l,this.user=u,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(h)?h:[h]}execute(){return new Promise(async(o,h)=>{this.pendingPromise={resolve:o,reject:h};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(o){const{urlResponse:h,sessionId:l,postBody:u,tenantId:f,error:b,type:N}=o;if(b){this.reject(b);return}const H={auth:this.auth,requestUri:h,sessionId:l,tenantId:f||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(N)(H))}catch(T){this.reject(T)}}onError(o){this.reject(o)}getIdpTask(o){switch(o){case"signInViaPopup":case"signInViaRedirect":return Tb;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return Ib;default:Et(this.auth,"internal-error")}}resolve(o){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(o),this.unregisterAndCleanUp()}reject(o){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(o),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ab=new di(2e3,1e4);class Ka extends gy{constructor(o,h,l,u,f){super(o,h,u,f),this.provider=l,this.authWindow=null,this.pollId=null,Ka.currentPopupAction&&Ka.currentPopupAction.cancel(),Ka.currentPopupAction=this}async executeNotNull(){const o=await this.execute();return G(o,this.auth,"internal-error"),o}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const o=Sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],o),this.authWindow.associatedEvent=o,this.resolver._originValidation(this.auth).catch(h=>{this.reject(h)}),this.resolver._isIframeWebStorageSupported(this.auth,h=>{h||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var o;return((o=this.authWindow)===null||o===void 0?void 0:o.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ka.currentPopupAction=null}pollUserCancellation(){const o=()=>{var h,l;if(!((l=(h=this.authWindow)===null||h===void 0?void 0:h.window)===null||l===void 0)&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(o,Ab.get())};o()}}Ka.currentPopupAction=null;/**
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
 */const Sb="pendingRedirect",ll=new Map;class Eb extends gy{constructor(o,h,l=!1){super(o,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],h,void 0,l),this.eventId=null}async execute(){let o=ll.get(this.auth._key());if(!o){try{const l=await Nb(this.resolver,this.auth)?await super.execute():null;o=()=>Promise.resolve(l)}catch(h){o=()=>Promise.reject(h)}ll.set(this.auth._key(),o)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),o()}async onAuthEvent(o){if(o.type==="signInViaRedirect")return super.onAuthEvent(o);if(o.type==="unknown"){this.resolve(null);return}if(o.eventId){const h=await this.auth._redirectUserForId(o.eventId);if(h)return this.user=h,super.onAuthEvent(o);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nb(r,o){const h=Cb(o),l=Ob(r);if(!await l._isAvailable())return!1;const u=await l._get(h)==="true";return await l._remove(h),u}function Ob(r){return sn(r._redirectPersistence)}function Cb(r){return Os(Sb,r.config.apiKey,r.name)}async function _b(r,o,h=!1){const l=zs(r),u=kb(l,o),b=await new Eb(l,u,h).execute();return b&&!h&&(delete b.user._redirectEventId,await l._persistUserIfCurrent(b.user),await l._setRedirectUser(null,o)),b}/**
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
 */const xb=10*60*1e3;class Rb{constructor(o){this.auth=o,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(o){this.consumers.add(o),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,o)&&(this.sendToConsumer(this.queuedRedirectEvent,o),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(o){this.consumers.delete(o)}onEvent(o){if(this.hasEventBeenHandled(o))return!1;let h=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(o,l)&&(h=!0,this.sendToConsumer(o,l),this.saveEventToCache(o))}),this.hasHandledPotentialRedirect||!Bb(o)||(this.hasHandledPotentialRedirect=!0,h||(this.queuedRedirectEvent=o,h=!0)),h}sendToConsumer(o,h){var l;if(o.error&&!wy(o)){const u=((l=o.error.code)===null||l===void 0?void 0:l.split("auth/")[1])||"internal-error";h.onError(Dt(this.auth,u))}else h.onAuthEvent(o)}isEventForConsumer(o,h){const l=h.eventId===null||!!o.eventId&&o.eventId===h.eventId;return h.filter.includes(o.type)&&l}hasEventBeenHandled(o){return Date.now()-this.lastProcessedEventTime>=xb&&this.cachedEventUids.clear(),this.cachedEventUids.has(xf(o))}saveEventToCache(o){this.cachedEventUids.add(xf(o)),this.lastProcessedEventTime=Date.now()}}function xf(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(o=>o).join("-")}function wy({type:r,error:o}){return r==="unknown"&&(o==null?void 0:o.code)==="auth/no-auth-event"}function Bb(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wy(r);default:return!1}}/**
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
 */async function Yb(r,o={}){return la(r,"GET","/v1/projects",o)}/**
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
 */const Db=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mb=/^https?/;async function qb(r){if(r.config.emulator)return;const{authorizedDomains:o}=await Yb(r);for(const h of o)try{if(Zb(h))return}catch{}Et(r,"unauthorized-domain")}function Zb(r){const o=fl(),{protocol:h,hostname:l}=new URL(o);if(r.startsWith("chrome-extension://")){const b=new URL(r);return b.hostname===""&&l===""?h==="chrome-extension:"&&r.replace("chrome-extension://","")===o.replace("chrome-extension://",""):h==="chrome-extension:"&&b.hostname===l}if(!Mb.test(h))return!1;if(Db.test(r))return l===r;const u=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(l)}/**
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
 */const jb=new di(3e4,6e4);function Rf(){const r=Mt().___jsl;if(r!=null&&r.H){for(const o of Object.keys(r.H))if(r.H[o].r=r.H[o].r||[],r.H[o].L=r.H[o].L||[],r.H[o].r=[...r.H[o].L],r.CP)for(let h=0;h<r.CP.length;h++)r.CP[h]=null}}function Lb(r){return new Promise((o,h)=>{var l,u,f;function b(){Rf(),gapi.load("gapi.iframes",{callback:()=>{o(gapi.iframes.getContext())},ontimeout:()=>{Rf(),h(Dt(r,"network-request-failed"))},timeout:jb.get()})}if(!((u=(l=Mt().gapi)===null||l===void 0?void 0:l.iframes)===null||u===void 0)&&u.Iframe)o(gapi.iframes.getContext());else if(!((f=Mt().gapi)===null||f===void 0)&&f.load)b();else{const N=vb("iframefcb");return Mt()[N]=()=>{gapi.load?b():h(Dt(r,"network-request-failed"))},bb(`https://apis.google.com/js/api.js?onload=${N}`).catch(H=>h(H))}}).catch(o=>{throw Cs=null,o})}let Cs=null;function zb(r){return Cs=Cs||Lb(r),Cs}/**
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
 */const Ub=new di(5e3,15e3),Vb="__/auth/iframe",Gb="emulator/auth/iframe",Wb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kb(r){const o=r.config;G(o.authDomain,r,"auth-domain-config-required");const h=o.emulator?vl(o,Gb):`https://${r.config.authDomain}/${Vb}`,l={apiKey:o.apiKey,appName:r.name,v:js},u=Fb.get(r.config.apiHost);u&&(l.eid=u);const f=r._getFrameworks();return f.length&&(l.fw=f.join(",")),`${h}?${li(l).slice(1)}`}async function Xb(r){const o=await zb(r),h=Mt().gapi;return G(h,r,"internal-error"),o.open({where:document.body,url:Kb(r),messageHandlersFilter:h.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wb,dontclear:!0},l=>new Promise(async(u,f)=>{await l.restyle({setHideOnLeave:!1});const b=Dt(r,"network-request-failed"),N=Mt().setTimeout(()=>{f(b)},Ub.get());function H(){Mt().clearTimeout(N),u(l)}l.ping(H).then(H,()=>{f(b)})}))}/**
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
 */const Qb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jb=500,$b=600,Pb="_blank",ev="http://localhost";class Bf{constructor(o){this.window=o,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tv(r,o,h,l=Jb,u=$b){const f=Math.max((window.screen.availHeight-u)/2,0).toString(),b=Math.max((window.screen.availWidth-l)/2,0).toString();let N="";const H=Object.assign(Object.assign({},Qb),{width:l.toString(),height:u.toString(),top:f,left:b}),T=Xe().toLowerCase();h&&(N=$f(T)?Pb:h),Jf(T)&&(o=o||ev,H.scrollbars="yes");const x=Object.entries(H).reduce((U,[te,re])=>`${U}${te}=${re},`,"");if(xp(T)&&N!=="_self")return nv(o||"",N),new Bf(null);const M=window.open(o||"",N,x);G(M,r,"popup-blocked");try{M.focus()}catch{}return new Bf(M)}function nv(r,o){const h=document.createElement("a");h.href=r,h.target=o;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),h.dispatchEvent(l)}/**
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
 */const av="__/auth/handler",ov="emulator/auth/handler";function Yf(r,o,h,l,u,f){G(r.config.authDomain,r,"auth-domain-config-required"),G(r.config.apiKey,r,"invalid-api-key");const b={apiKey:r.config.apiKey,appName:r.name,authType:h,redirectUrl:l,v:js,eventId:u};if(o instanceof iy){o.setDefaultLanguage(r.languageCode),b.providerId=o.providerId||"",vw(o.getCustomParameters())||(b.customParameters=JSON.stringify(o.getCustomParameters()));for(const[H,T]of Object.entries({}))b[H]=T}if(o instanceof ci){const H=o.getScopes().filter(T=>T!=="");H.length>0&&(b.scopes=H.join(","))}r.tenantId&&(b.tid=r.tenantId);const N=b;for(const H of Object.keys(N))N[H]===void 0&&delete N[H];return`${iv(r)}?${li(N).slice(1)}`}function iv({config:r}){return r.emulator?vl(r,ov):`https://${r.authDomain}/${av}`}/**
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
 */const dl="webStorageSupport";class sv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Al,this._completeRedirectFn=_b}async _openPopup(o,h,l,u){var f;hn((f=this.eventManagers[o._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const b=Yf(o,h,l,fl(),u);return tv(o,b,Sl())}async _openRedirect(o,h,l,u){return await this._originValidation(o),rb(Yf(o,h,l,fl(),u)),new Promise(()=>{})}_initialize(o){const h=o._key();if(this.eventManagers[h]){const{manager:u,promise:f}=this.eventManagers[h];return u?Promise.resolve(u):(hn(f,"If manager is not set, promise should be"),f)}const l=this.initAndGetManager(o);return this.eventManagers[h]={promise:l},l.catch(()=>{delete this.eventManagers[h]}),l}async initAndGetManager(o){const h=await Xb(o),l=new Rb(o);return h.register("authEvent",u=>(G(u==null?void 0:u.authEvent,o,"invalid-auth-event"),{status:l.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[o._key()]={manager:l},this.iframes[o._key()]=h,l}_isIframeWebStorageSupported(o,h){this.iframes[o._key()].send(dl,{type:dl},u=>{var f;const b=(f=u==null?void 0:u[0])===null||f===void 0?void 0:f[dl];b!==void 0&&h(!!b),Et(o,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(o){const h=o._key();return this.originValidationPromises[h]||(this.originValidationPromises[h]=qb(o)),this.originValidationPromises[h]}get _shouldInitProactively(){return ay()||Tl()||Ls()}}const hv=sv;var Df="@firebase/auth",Mf="0.19.9";/**
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
 */class rv{constructor(o){this.auth=o,this.internalListeners=new Map}getUid(){var o;return this.assertAuthConfigured(),((o=this.auth.currentUser)===null||o===void 0?void 0:o.uid)||null}async getToken(o){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(o)}:null}addAuthTokenListener(o){if(this.assertAuthConfigured(),this.internalListeners.has(o))return;const h=this.auth.onIdTokenChanged(l=>{var u;o(((u=l)===null||u===void 0?void 0:u.stsTokenManager.accessToken)||null)});this.internalListeners.set(o,h),this.updateProactiveRefresh()}removeAuthTokenListener(o){this.assertAuthConfigured();const h=this.internalListeners.get(o);h&&(this.internalListeners.delete(o),h(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lv(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dv(r){Bs(new ii("auth",(o,{options:h})=>{const l=o.getProvider("app").getImmediate(),{apiKey:u,authDomain:f}=l.options;return(b=>{G(u&&!u.includes(":"),"invalid-api-key",{appName:b.name}),G(!(f!=null&&f.includes(":")),"argument-error",{appName:b.name});const N={apiKey:u,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(r)},H=new Yp(b,N);return mp(H,h),H})(l)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((o,h,l)=>{o.getProvider("auth-internal").initialize()})),Bs(new ii("auth-internal",o=>{const h=zs(o.getProvider("auth").getImmediate());return(l=>new rv(l))(h)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xa(Df,Mf,lv(r)),Xa(Df,Mf,"esm2017")}/**
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
 */function uv(r=dp()){const o=Uf(r,"auth");return o.isInitialized()?o.getImmediate():yp(r,{popupRedirectResolver:hv,persistence:[wb,dy,Al]})}dv("Browser");var cv="firebase",fv="9.6.7";/**
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
 */Xa(cv,fv,"app");const yv={apiKey:"AIzaSyDxxwwCO9U5WulqLwjRFVXGTpJB6_CBnGE",authDomain:"zara-chabby-login.firebaseapp.com",projectId:"zara-chabby-login",storageBucket:"zara-chabby-login.firebasestorage.app",messagingSenderId:"975107354460",appId:"1:975107354460:web:3cbb4cdcc6ab91ede31b99",measurementId:"G-9VHZGX9BN7"},mv=lp(yv),Wa=uv(mv),gv=`There is a kind of ripeness that arrives like a verdict. It does not ask. At thirty, it came for Zara-Chabby, and by morning the town of his birth had become a coat two sizes too small — something he had outgrown while sleeping. He did not pack. He did not explain. A man who needs a reason to leave has not yet left anything at all. He simply turned, and the forest opened for him like a door that had been waiting.
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
`,wv=["ZARACHABBY'S DOWNGOING","OF THE THRESHOLD OF MADASARA","THE SERMON OF THE BROKEN LEDGER","OF THE TIGHTROPE WALKER'S SHADOW","THE TROUBLED WORKER","OF WOMEN","OF THE FESTIVAL OF THE LAST MEN"];function Ne({user:r,onBack:o,onSignOut:h,chapterText:l,chapterTitle:u,chapterNumber:f,bookLabel:b="Book 1",chapterList:N=wv,onNextChapter:H,nextChapterLabel:T}){const[x,M]=_e.useState(0),[U,te]=_e.useState("next"),[re,xe]=_e.useState(20),He=l.split(/\r?\n+/).map(ee=>ee.trim()).filter(Boolean),fe=[];let le=[],be=0;He.forEach(ee=>{le.length&&be+ee.length>2800&&(fe.push(le),le=[],be=0),le.push(ee),be+=ee.length}),le.length&&fe.push(le);const Oe=Math.round((x+1)/fe.length*100),W=fe[x]||[],pe=ee=>{ee<0||ee>=fe.length||(te(ee>x?"next":"previous"),M(ee),window.scrollTo({top:0,behavior:"smooth"}))};return _e.useEffect(()=>{const ee=_=>{_.altKey||_.ctrlKey||_.metaKey||["INPUT","TEXTAREA","SELECT"].includes(_.target.tagName)||(_.key==="ArrowLeft"?ve(_,x-1):_.key==="ArrowRight"&&ve(_,x+1))},ve=(_,V)=>{V<0||V>=fe.length||(_.preventDefault(),te(V>x?"next":"previous"),M(V),window.scrollTo({top:0,behavior:"smooth"}))};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[x,fe.length]),p.jsxs("main",{className:"chapter-page",children:[p.jsxs("nav",{className:"chapter-nav","aria-label":"Chapter navigation",children:[p.jsxs("button",{type:"button",className:"back-button",onClick:o,children:[p.jsx("span",{"aria-hidden":"true",children:"←"}),"Back to the book"]}),p.jsx("span",{className:"chapter-nav-title",children:"Thus spoke Zara Chabby"}),p.jsxs("div",{className:"chapter-account",children:[p.jsx("span",{children:r.email}),p.jsx("button",{type:"button",className:"text-button",onClick:h,children:"Sign out"})]})]}),p.jsxs("div",{className:"chapter-progress-wrap","aria-label":`Chapter progress: ${Oe}%`,children:[p.jsxs("div",{className:"chapter-progress-meta",children:[p.jsxs("span",{children:[b," / ",u]}),p.jsxs("span",{children:[Oe,"% read"]})]}),p.jsxs("progress",{className:"chapter-progress",value:Oe,max:"100",children:[Oe,"%"]})]}),p.jsxs("div",{className:"chapter-layout",children:[p.jsxs("aside",{className:"chapter-sidebar","aria-label":`${b} chapters`,children:[p.jsx("p",{className:"eyebrow",children:b}),p.jsx("h2",{children:u}),p.jsx("ol",{children:N.map((ee,ve)=>{const _=ve===f-1,V=b==="Book 2"?ve<9:b==="Book 3"?ve<8:ve<7;return p.jsx("li",{className:_?"active":"",children:p.jsxs("button",{type:"button",disabled:!V,"aria-current":_?"page":void 0,children:[p.jsx("span",{children:String(ve+1).padStart(2,"0")}),ee]})},ee)})})]}),p.jsxs("article",{className:`chapter-reading page-${U}`,children:[p.jsxs("header",{className:"chapter-heading",children:[p.jsxs("p",{className:"chapter-kicker",children:[b," / Chapter ",f," / Page ",x+1]}),p.jsx("h1",{children:u}),p.jsx("p",{className:"chapter-deck",children:"A descent into the world below, where certainty begins to crack."}),p.jsxs("div",{className:"reader-type-controls",role:"group","aria-label":"Reading text size",children:[p.jsx("button",{type:"button","aria-label":"Decrease text size",onClick:()=>xe(ee=>Math.max(16,ee-2)),disabled:re===16,children:"A−"}),p.jsxs("span",{"aria-live":"polite",children:[re,"px"]}),p.jsx("button",{type:"button","aria-label":"Increase text size",onClick:()=>xe(ee=>Math.min(28,ee+2)),disabled:re===28,children:"A+"})]}),p.jsx("div",{className:"chapter-rule","aria-hidden":"true"})]}),p.jsx("div",{className:"chapter-manuscript",style:{"--reader-font-size":`${re}px`},children:W.map((ee,ve)=>p.jsx("p",{className:ve===0?"chapter-lead":"",children:ee},`${x}-${ve}`))}),p.jsxs("footer",{className:"chapter-footer",children:[p.jsxs("button",{type:"button",onClick:()=>pe(x-1),disabled:x===0,"aria-keyshortcuts":"ArrowLeft",children:[p.jsx("span",{"aria-hidden":"true",children:"←"})," Previous page"]}),p.jsxs("span",{children:[Oe,"% · Page ",x+1," of ",fe.length]}),p.jsxs("button",{type:"button",onClick:()=>pe(x+1),disabled:x===fe.length-1,"aria-keyshortcuts":"ArrowRight",children:["Next page ",p.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),x===fe.length-1&&H&&p.jsx("div",{className:"chapter-next-step",children:p.jsxs("button",{type:"button",className:"primary-book-button",onClick:H,children:["Continue to next chapter: ",T||"Next chapter",p.jsx("span",{"aria-hidden":"true",children:" →"})]})})]},x)]}),p.jsxs("footer",{className:"site-footer chapter-site-footer",children:[p.jsx("span",{children:"Thus spoke Zara Chabby"}),p.jsxs("span",{children:[b," / ",u]}),p.jsx("button",{type:"button",onClick:o,children:"Back to contents ↑"})]})]})}function pv({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:gv,chapterTitle:"THE DOWN GOING",chapterNumber:1})}const bv=`The gates did not open. They did not creak, or groan, or make any of the small negotiations a door makes with the people who need it. They simply stood — vast, unbothered, absolute — forged from something older than the memory of forging. And they did not show Zara-Chabby the world on the other side. They showed him himself.
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




`;function vv({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:bv,chapterTitle:"THE THRESHOLD OF MADASARA",chapterNumber:2})}const kv=`Zara-Chabby entered the Great Square of Madasara the way a low sun enters a room through a window nobody meant to leave open — not asked for, not announced, simply impossible to keep out. Behind him walked those who had chosen him over the gate, no longer wanderers now but carriers of something already lit and burning low, waiting for wind.
The marketplace did not smell of trade. It smelled of arithmetic — that dry, metallic hush of coin and parchment, of numbers endlessly re-totaled by men who had traded the sky for a ledger line. The merchants sat enthroned on ebony, backs curved not by age but by habit, the particular stoop of men who have spent forty years bowing to columns instead of standing beneath weather.
They did not sell bread, or cloth, or oil.
They sold weight.
Obligation. Guilt. Time, portioned out like grain. Their law was simple and merciless as gravity: everything must be paid. Every soul must balance.
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
`;function Tv({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:kv,chapterTitle:"THE SERMON OF THE BROKEN LEDGER",chapterNumber:3})}const Iv=`The crowd gathered below the towers the way water gathers in a low place — not out of ambition, just gravity. They looked up, but they weren't watching the sky. They were watching for a man to fall, because his falling would prove they'd been right never to climb anything at all. Merchants with ink still staining their fingers stood shoulder to shoulder with priests whose robes carried the smell of old, recycled prayer, and for once the man of gold and the man of god wanted precisely the same thing: for the man on the wire to prove them right by dying.
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
`;function Hv({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:Iv,chapterTitle:"THE TIGHTROPE WALKER'S SHADOW",chapterNumber:4})}const Av=`Zara-Chabby left his disciples behind and wandered into the woods, as he had many times before. But this time he went too deep — and there is a depth in every wandering that isn't measured in distance. It's measured in the silence that starts, eventually, to follow you home.
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
`;function Sv({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:Av,chapterTitle:"THE TROUBLED WORKER",chapterNumber:5})}const Ev=`She did not come with a crowd, and she did not come as a disciple. She simply arrived, the way weather arrives — announced by nothing but its own presence — and stood before Zara-Chabby as if she had been standing there her whole life, waiting only for him to notice.
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


`;function Nv({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:Ev,chapterTitle:"OF WOMEN",chapterNumber:6})}const Ov=`Zara-Chabby came down again from the harsh clarity of the mountains into the soft, muffled breathing of the city, and it took him nearly an hour to understand what had changed. It wasn't the buildings. It wasn't the faces. It was the volume — Madasara had turned itself down, like a room deciding, all at once, to whisper.
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
"So he stayed. And the fire came."
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

`;function Cv({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:Ov,chapterTitle:"OF THE FESTIVAL OF THE LAST MEN",chapterNumber:7})}const _v=`A friend is not only the one who stands beside you in the bright hour when the crowd is listening. A friend is also the one who will strike you in the mouth of your delusion and not call it cruelty, because he knows a lie can wear a gentler face than a blade and still kill you just as surely.

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

And at that moment Zara-Chabby understood the shape of true friendship. It is not a shield. It is not a mirror. It is a blade held carefully so that it cuts the lie and not the soul.

A friend who loves you too gently will keep you in a life that is safe but false. A friend who loves you honestly will make you feel the pain of becoming.

And if you survive the cut, you may discover that the wound was not the end of your life, but the beginning of your wisdom.

Thus did Zara-Chabby learn that the most brutal kindness is often the kind that tells you the truth before you are ready for it.

And thus did he understand, at last, that friendship is not a place where one avoids the strike.

It is the place where one learns to stand still long enough to hear the truth, even when it arrives with a blade in it.

Then he rose, bruised but no longer pretending, and walked on with the men who had dared to wound him for his soul's sake.

Not because they had made him weak.

But because they had made him honest.
`,xv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Rv({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"THE MARKET OF EMPTY PRAISE",chapterText:_v,chapterTitle:"THE FRONTAL STAB (A LESSON IN FRIENDSHIP)",chapterNumber:1,bookLabel:"Book 2",chapterList:xv})}const Bv=`Zara-Chabby came upon the market at the hour when the sun was neither rising nor setting, only lingering — as if even the sky had grown so comfortable with delay that it saw no reason to commit to anything as final as dusk.
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

He began walking toward the market's edge. Behind him, the voices rose again — but differently now, split down the middle. Some drifted back toward the stalls, back toward the praise, back toward the comfortable clay coins scattered across the stones. Others stood frozen, caught between the life they'd built here and the one sentence that had just cracked it open. A few fell into step behind him.
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
`,Yv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Dv({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"THE WEIGHT OF HONEST EYES",chapterText:Bv,chapterTitle:"THE MARKET OF EMPTY PRAISE",chapterNumber:2,bookLabel:"Book 2",chapterList:Yv})}const Mv=`The forest was older than the kingdom and considerably less forgiving of it. Its trees stood in ranks like witnesses who had seen too much to be impressed by anything new, their trunks furrowed with the specific patience of things that measure time in centuries rather than seasons. The wind moved through them with a low, knowing voice, as if it were passing old confessions from root to root, unhurried, in no rush to be believed. There were birds, streams that flashed like polished steel between the stones, moss soft enough for saints or for sleepers. And yet none of it was innocent. This was not the beauty of a garden, tended and forgiving. It was the beauty of a judge who has stopped smiling at defendants, and therefore has finally stopped being able to lie to them.
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
`,qv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Zv({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,chapterText:Mv,chapterTitle:"THE WEIGHT OF HONEST EYES",chapterNumber:4,bookLabel:"Book 2",chapterList:qv})}const jv=`Zara-Chabby stood before the Sanatorium a long time before he went in.
Its doors were thick and padded — not, he understood almost immediately, to keep noise out, but to make certain nothing inside could ever escape with any real force. They did not slam. They didn't even close, exactly. They absorbed, the way a hand closes around something small and struggling until the struggling simply stops.
That, he thought, was the first sign worth reading. A place that fears sharp sound is a place that fears sharp truth even more.
Above the entrance, carved into stone soft enough that the letters had already begun to blur at their edges, was a single inscription:
Rest, for you are enough.
He read it once. Then again, slower, the way you reread a sentence you suspect is lying to you in a language you almost don't speak.
"Here," he murmured, "lies the kingdom of unfinished men who have been thoroughly convinced they are complete."
And he went in.

Inside, the air was warm — too warm, the specific warmth of a blanket handed to you before you've even had the chance to get cold. The floors swallowed footsteps whole. The walls swallowed echoes. Even thoughts, he noticed, seemed to soften the moment they rose high enough to be heard.
Men sat in low chairs, staring at nothing with an expression of total, uninterrupted peace. Too peaceful. A man who had once, by all accounts, been a poet now smiled gently at the middle distance. A woman who had once dreamed loudly of conquest now folded squares of cloth with the same careful, contented attention a much younger version of her had probably once given to a lover.
They were calm. Every last one of them, calm.
"This is not peace," Zara-Chabby said quietly, to no one. "This is sedation wearing peace's good clothes."
He stopped at the mouth of a long hallway, and something in the particular slant of the light down its length pulled a memory up out of him before he'd decided to look for it.
Years ago, he had walked this exact corridor — not as a judge, the way he walked it now, but as a patient. His hands had still been bleeding from the climb that had brought him here. His mind had been torn clean in half between the man he currently was and the man he suspected, with real terror, he might have to become.
And they had received him. Gently. That was the part that still, even now, made his jaw tighten to remember.
You are tired, they had told him. You have already done enough. Rest.
And he had listened. For three years, he had listened.
"I was not tired," he said now, low, mostly to the version of himself that had believed them. "I was transforming. And you called it exhaustion because exhaustion was easier for you to treat."

Before he reached the main hall, a door to his left stood ajar, and through it he saw a smaller room arranged in a circle of soft chairs — the kind of room built for what the Sanatorium called Sharing Hour. A dozen residents sat with their hands folded in their laps, and a facilitator with a voice like warm bathwater was guiding them through something she called releasing the weight of ambition.
Zara-Chabby paused in the doorway, unseen for a moment, and listened.
"Today," the facilitator said, "we ask ourselves — what would happen if I simply let this go? What if I stopped needing to be more than I already am?"
A woman in the circle spoke, her voice small. "I used to want to build something. A school, maybe. For the children in my old village."
"And how does that want feel now?" the facilitator asked.
"Heavy," the woman said, and something in her face suggested she had said this word so many times it no longer meant anything to her.
"Good," the facilitator said. "Let it be heavy. You don't have to carry it. Set it down."
The woman closed her eyes, and Zara-Chabby watched something in her visibly loosen — not relief, he thought. Release, the way a hand releases a rope it has simply stopped believing it can hold.
He stepped into the room before he had decided to.
"What was the school going to be called?" he asked her.
The circle turned toward him as one — startled, the particular startlement of people who have not been addressed directly in longer than any of them would admit.
The woman blinked at him. "I — I hadn't gotten that far."
"You had thirty years to get that far," Zara-Chabby said, not unkindly. "You didn't stop because you ran out of time. You stopped because someone told you the wanting itself was the problem, and you believed them, because believing them was so much lighter than building a school."
The facilitator's warm-bathwater voice cooled by several degrees. "We don't interrupt Sharing Hour."
"I'm not interrupting it," Zara-Chabby said. "I'm ending it." He crouched down until they were at eye level. "What was it going to be called?"
She hesitated a long moment — the room's whole collective stillness bent toward her, waiting.
"The Amina Learning House," she said finally, so quietly he almost lost it under the sound of rain starting against the windows. "After my mother."
"Then that is the debt you actually owe," Zara-Chabby said. "Not to this room. To her, and to every child who was never taught in a building with her name on it. Set the comfort down, if you like. Not the want. The want is the only honest thing you've said all hour."
The facilitator stood, flustered. "This is not how healing works here."
"No," Zara-Chabby agreed, rising. "It's exactly how healing doesn't work here. That's rather the point I've come to make."

He continued down the hallway, and the memory of the corridor caught him again, this time all the way — the exact shade of the light, the exact false gentleness of the floor beneath his feet, until he was, for one disorienting moment, both the man who had first arrived here bleeding from the climb, and the man now walking out of that memory on the far side of it.
She appeared as though summoned directly out of that memory — the Head of the Sanatorium, the one the residents called, without any apparent irony, the Mother of Comfort. Her voice arrived before the rest of her did, flowing like warm honey poured deliberately over something colder underneath.
"Zara-Chabby," she said. "You've returned."
Her smile was perfect. Not sincere — perfect, the way a painted door is perfect, right up until you try to actually open it.
"You look burdened," she went on, tilting her head with practiced sympathy. "Why do you still insist on carrying such heavy ideas? Why not simply lay them down, the way the others have?"
He looked at the hand she extended toward him. It was smooth — entirely unmarked, untouched by anything resembling struggle, the hand of someone who had spent a lifetime treating wounds she had never once personally risked acquiring.
"That hand," he said quietly, "kills without ever once striking anyone."
"You misunderstand what we do here," she said, gentle as ever. "We help people heal."
"No," Zara-Chabby said. "You help people stop feeling the need to heal. There's a difference, and it's the only difference that actually matters."
Her smile didn't so much as flicker. "We give them peace."
"You give them permission," he said, "to remain exactly, comfortably small for the rest of their lives."
A pause settled between them — a real stillness, the kind that precedes either a retreat or a declaration.
"Why chase the Overman at all?" she asked, and for the first time something almost like genuine curiosity moved behind her eyes. "It's such a violent ambition. Why not simply be content?"
Zara-Chabby stepped closer, close enough that her perfect smile had to work slightly harder to hold its shape.
"Because contentment," he said, "is very often the grave — wearing a bed's clothes, and asking you very politely to lie down in it."
"You speak as though we imprison them," she said, and for the first time some real feeling crept into her voice — not warmth exactly, but its cousin, wounded pride. "No one is locked in here."
"No," Zara-Chabby agreed. "The lock is on the inside. That's what makes it so much more effective than a key."

He turned from her and addressed the room directly, and his voice cut through all that padded, absorbing air like a blade finding the one seam in a curtain.
"Listen," he said. "You speak an entire language built out of chains, and you've gotten so good at it you no longer notice the rattling."
A few of them stirred in their chairs — the first movement he'd seen since walking in.
"You say balance when what you actually mean is fear of effort. You say acceptance when you mean surrender. You say reasonable when the honest word would simply be small."
A man near the window frowned. "That isn't true."
"Then prove it," Zara-Chabby said, and waited.
Silence answered him instead — the specific silence of a man who has just realized he has nothing to offer except the frown itself.
"These words are not harmless," Zara-Chabby went on. "They were never harmless. They are tools. Not tools for growth. Tools for containment — built carefully, over years, by people who found it easier to manage your pain than to help you outgrow it."

A woman near the back — the one who had been folding squares of cloth since before he'd walked in — spoke up without lifting her eyes from her work.
"You say that as though pain were a virtue," she said. "I have had enough of pain to last three lifetimes. I came here because I was tired, stranger. Not because someone tricked me."
Zara-Chabby crossed to her and, for a moment, simply watched her hands — the precise, practiced folding, square after identical square, a motion that asked absolutely nothing new of her.
"What did you dream of conquering," he asked her, "before you came here?"
Her hands stilled, just slightly. "That was a long time ago."
"That isn't an answer."
She looked up at him then, and something old and combative flickered behind eyes that had otherwise gone entirely smooth. "Kingdoms," she said, almost daring him to laugh. "I wanted to run a trading house that touched three countries. I built half of it before —" She stopped.
"Before what?"
"Before it cost me everything I had," she said. "And I came here to rest from the cost."
"That's fair," Zara-Chabby said, and meant it — there was no mockery in his voice at all. "Rest is not a crime. But tell me honestly — how many years has it been?"
She didn't answer.
"How many squares," he said, gesturing at the neat, endless stack beside her, "have you folded since you decided to rest?"
Her hands, still and exposed now, trembled slightly on top of the cloth.
"I don't know," she admitted.
"That's the actual injury," Zara-Chabby said, quiet now. "Not the kingdom that cost you everything. The years you've spent folding cloth so you'd never again have to risk owing anyone a kingdom."

In the corner sat a young man, eyes hollowed out, spine collapsed inward as though trying, very slowly, to fold himself into something small enough to disappear. Zara-Chabby crossed to him and crouched down until they were at eye level.
"What have they told you?" he asked.
The young man answered slowly, as if the sentence had been handed to him so many times he'd forgotten it was even a diagnosis and not simply a fact. "That I'm too sensitive."
"No," Zara-Chabby said. "You're untrained."
The young man flinched, as if the word had actually touched him somewhere physical.
"You feel deeply," Zara-Chabby continued. "That was never the weakness. The weakness is that you've been convinced to leave that feeling exactly as sharp — or as dull — as it already was, instead of sharpening it into something you can actually use."
"I'm overwhelmed," the young man said, voice trembling.
Zara-Chabby's answer came without any mercy at all. "Because you've refused, so far, to become strong enough not to be."
The room stirred again, more visibly this time. This was not kindness, what was happening in that corner. This was surgery, performed without anesthetic, in front of an audience that had spent years being told surgery would never again be necessary.

Zara-Chabby stood. "Comfort," he said, addressing the whole hall now, "is a thief. Not of money. Of time."
He began walking slowly among the chairs.
"Every single day you are told it's okay when it plainly is not — that is a day stolen from you, and it does not come back. Every moment you are soothed instead of challenged is a moment permanently lost, filed away under a word that made it feel like rest instead of theft."
He stopped in the center of the room.
"You believe suffering is the enemy here. It isn't. Delay is the enemy. Suffering, at least, moves you somewhere. Delay just lets you sit very comfortably in the exact same place until you've mistaken the chair for the destination."
The Mother of Comfort stepped forward again, her voice cooling by a careful degree.
"You are harsh," she said.
"Yes."
"That's precisely why they'll reject you."
He smiled, faint and unbothered. "Better their rejection today than their decay for the next thirty years. I can live with being disliked. I've never once been able to live with being useless."
"You call this usefulness," she said, some real anger surfacing now under all that honey. "Tearing down the one place that ever let these people put their burdens down?"
"I call it the only honest thing that's happened inside these walls in years," Zara-Chabby said. "You didn't build a place to put burdens down. You built a place to convince people the burden was never real to begin with. There's a difference, and you know it, or you wouldn't be quite this frightened of my saying it out loud."
Something in her perfect composure genuinely cracked then — not visibly, not in a way the residents would have caught, but Zara-Chabby saw it, the way you see the first hairline fracture in a piece of porcelain a heartbeat before it fully gives.
"You have no idea what it costs," she said, low now, only for him, "to hold a room like this together."
"I have every idea," he said, just as low. "It cost me three years of my own life. I know exactly what it costs. That's precisely why I came back."

He turned back to face the room fully.
"Politeness," he said, "is the grease in your machine. It lets you slide past each other, day after day, without ever once actually touching the truth underneath the greeting. I am calling, right now, for a new kind of rudeness."
The room went very still.
"The rudeness of honesty. The rudeness of clarity. The rudeness that says exactly what needs saying, even — especially — when it breaks the comfort you've all paid so dearly to keep."
"You call truth cruel," he said. "I call it mercy. Violent mercy, maybe. But mercy all the same. The storm never once apologizes for arriving. And yet, without fail, it clears the air the sun alone could never manage."

Something shifted then — not in all of them. Never in all of them. But in some.
The young man in the corner stood. Slowly. Unsteadily, like a man testing legs he hadn't used properly in years.
"What do I do?" he asked.
Zara-Chabby looked at him, and for the first time his voice gentled — not with pity, but with something that had earned the right to be gentle.
"Leave," he said.
The word echoed once against the padded walls and refused to be absorbed the way every other sound in the building had been.
"Leave this place," Zara-Chabby said. "Leave these words they've taught you to describe yourself with. Leave this comfort you've mistaken, for years now, for safety. And go somewhere — anywhere — that will finally force you to become something, instead of politely maintaining you exactly as you are."
The woman who had wanted to build a school rose next, cloth still folded in her lap, and set it down on the chair beside her with a care that looked almost ceremonial.
The woman with the trading house did not rise. She looked at her hands a long moment, then at Zara-Chabby, and something passed between them that needed no further words — not yet, her eyes said. Not yet, but noted.
One by one, they began to rise. Not all of them. It is never all of them. Some stayed exactly where they were, still smiling, still peaceful, still — by every visible measure — finished.
But others rose, and followed him toward the door.

The doors, which had not opened for him on the way in without his own two hands, opened easily this time, as if even the building understood something had already been decided.
Outside, the rain struck like a hundred small needles. The wind did not comfort anyone standing beneath it. It challenged, flatly, without apology.
The young man gasped as the cold hit him. "It's freezing."
"Yes," Zara-Chabby said.
"Good," he added, before the young man could finish flinching. He turned to face the small handful who had followed him this far.
"You are free now," he told them. "But hear this clearly, because it is the part no one back in that hall will ever tell you: freedom is not comfort. It was never comfort, and it will never become comfort no matter how long you practice it. It is responsibility. No one out here will soothe you. No one will excuse a single mistake you're about to make. You will have to build your own fire, from nothing, in weather exactly like this."
The woman who had wanted to build a school stepped up beside him, rain already soaking through her sleeves, and did not flinch.
"The Amina Learning House," she said, mostly to herself, testing the words the way you test a floor you're not sure will hold your weight yet.
"Say it again," Zara-Chabby told her. "Every morning. Until it stops sounding like a memory and starts sounding like an address."
He stepped into the storm.
Alone again, as he so often was, though this time a few footsteps followed close behind, uncertain but committed, and a few others — he heard them, though he didn't turn to watch — drifted back toward the padded doors and the warm chairs and the smiling, finished peace waiting inside.
That, he thought, is simply the way of every real awakening. Some walk out into the rain. Some walk back to the blanket. Both, in their own way, are choosing exactly what they were always going to choose.
He did not look back to see which was which.

Behind the padded doors, in the warm, absorbing quiet, the Mother of Comfort stood a long moment in the empty doorway where the small procession had passed, and touched the frame with one smooth, unmarked hand, as if checking whether the wood itself had been damaged by what had just walked through it.
It hadn't, of course. The building was very good at healing over.
But something in her — some old, buried, thoroughly sedated thing — had, for just a moment out on the threshold, wanted very badly to follow him out into the cold.
She closed the door before she had to find out what she would have done with that wanting, and went back inside to tell the remaining residents, in her warmest voice, that everything was, once again, perfectly fine.

The rain came down harder. The wind rose into something closer to a howl. And somewhere beyond all of it, patient as it had always been, the mountain waited for whoever was still willing to climb it.
Thus smiled Zara-Chabby.
`,Lv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function zv({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"THE ENEMY WHO ELEVATES",chapterText:jv,chapterTitle:"The Betrayal of Soft Words",chapterNumber:5,bookLabel:"Book 2",chapterList:Lv})}const Uv=`The mountain had a way of making liars out of clocks. Up where the wind did not ask permission before entering a man's lungs, time stopped pretending to be a staircase and became, instead, a wound that simply kept reopening. Zara-Chabby learned this early, though later than he should have — which is the particular mistake made by men still hoping, against all evidence, that life might improve through kindness alone. He had climbed because he believed, the way men believe before disappointment finally matures into wisdom, that the highest things ought to be met by the highest feelings — that truth should arrive with a choir behind it, that greatness should announce itself with bells, that the correct path would somehow feel flattering beneath the feet, the way a red carpet flatters whoever is permitted to walk across it.
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
`,Vv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Gv({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"THE TRIAL OF THE TRUE FRIEND",chapterText:Uv,chapterTitle:"THE ENEMY WHO ELEVATES",chapterNumber:6,bookLabel:"Book 2",chapterList:Vv})}const Wv=`Zara-Chabby had learned early, at some real cost to himself, that friendship is not a gift freely handed over like bread at a doorway. It is a crucible. You do not simply speak truth to the people who call themselves your friends. You test them — the way a blacksmith tests steel, driving it into the fire again and again, not because he hates the metal, but because he refuses to build a blade on a lie about its own strength. The lesson had not come to him from the people who were easy to love. It had come from the ones whose hearts were fragile, whose convictions ran an inch deep, whose comfort always, without fail, outweighed their courage.
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
`,Fv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Kv({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"THE BIRTH OF THE HIGHER BOND",chapterText:Wv,chapterTitle:"THE TRIAL OF THE TRUE FRIEND",chapterNumber:7,bookLabel:"Book 2",chapterList:Fv})}const Xv=`There are many kinds of bonds that men mistake for greatness. There is the bond of convenience, which keeps two people together because the weather is favorable and the road is short. There is the bond of need, which holds a hand to another because one is frightened and the other is useful. There is the bond of habit, which remains long after the fire has gone out because no one has yet had the courage to say that the fire was only ever a story told with some heat in it. None of these are the higher bond. None of them build a soul. None of them can survive the honest weather of time.

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

There were men in the camp, not many but enough, who had become, in the course of their journeys, more than allies. They were witnesses. They were challengers. They were guardians of one another’s edges. When one stumbled, another did not immediately run to praise him into forgetting the stumble. When one rose too high in pride, another did not flatter him into false maturity. Instead they did something harder: they remained in the room with his weakness and insisted, by the weight of their constancy, that he was not separate from the problem he had made for himself.

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
`,Qv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function Jv({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"THE LAST FRIEND",chapterText:Xv,chapterTitle:"THE BIRTH OF THE HIGHER BOND",chapterNumber:8,bookLabel:"Book 2",chapterList:Qv})}const $v=`The morning came like a held breath finally released.
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
"One day her granddaughter finally asked her, 'Grandmother, why do you talk to an empty chair?' The woman answered, 'Because my friend is still with me.' The granddaughter said gently, 'But the chair is empty, Grandmother. There is no one sitting there.' The old woman grew angry at that. 'You are far too young to understand such things,' she said. That night, she dreamed of her friend. Her friend looked sad in the dream — sadder than the woman had ever seen her, even in life. 'Why are you sad?' the woman asked her. And her friend answered, 'Because you have trapped me here. You have put me in a chair and left me there. You talk at me now, not to me. You pour tea for a ghost every single morning. But I was never a ghost. I am not a memory, and I am certainly not a chair. I am the wind that moves through your kitchen each time you open the door. You cannot see me that way. You cannot pour tea for me that way. But you could feel me — if only you would finally stop clutching the chair.'"

"The woman woke and wept," Zara-Chabby continued. "She dragged the empty chair out to the forest that same morning and left it there among the trees. She returned to her kitchen and did not pour a second cup of tea that day. Instead, she opened the window. The wind came in and touched her face, lifted the loose hair at her temple. She did not speak to it. She simply listened. And in that listening, she felt her friend again — not as a presence exactly, and not as a voice she could point to. As a texture woven into the silence itself. Like the warmth of a hand that is no longer physically there, but whose warmth was strong enough, once, that the skin still remembers the shape of it and tingles faintly, even years later, when the wind moves just right."
He picked up a small pebble and skipped it once across the surface of the stream. It bounced three times before it sank.
"The empty chair," he said, "was hope. The open window was severance. You cannot keep both at once, no matter how badly you might wish otherwise. Choose."

The Parable of the Enemy's Grave
"There was once a man who had an enemy," Zara-Chabby said. "They had been rivals since boyhood — fighting over land, over a woman neither of them ended up marrying, over questions of honor neither of them could clearly define even to themselves. When the enemy finally died, the man traveled three days on foot to stand at his grave. His own family was baffled by it. 'Why do you go at all?' they asked him. 'He was your enemy.' And the man answered simply, 'Yes. And he was also my truest friend.'"
Zara-Chabby smiled at the confusion visibly spreading through the circle.
"The man stood at the grave a long while. He did not gloat over it. He did not weep either. He simply stood there. After an hour had passed, he finally spoke aloud. 'You lying bastard,' he said to the grave, not unkindly. 'You never once pretended to like me. You never smiled to my face while plotting something else entirely behind my back. You met me in open daylight, every single time. You fought me where I could see you coming. You told me exactly what you thought of me, over and over, whether I wanted to hear it or not. And because of you, I became stronger than I ever would have on my own. Because of you, I learned how to properly defend myself. Because of you, I finally understood that not every harsh word is an attack. Sometimes it is only a gift, wrapped clumsily in sandpaper instead of silk.'"
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
`,Pv=["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE COWARDICE OF AGREEMENT","THE WEIGHT OF HONEST EYES","THE BETRAYAL OF SOFT WORDS","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"];function ek({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"THE LAST FRIEND",chapterText:$v,chapterTitle:"THE LAST FRIEND",chapterNumber:9,bookLabel:"Book 2",chapterList:Pv})}const tk=`"Until you make the unconscious conscious, it will direct your life and you will call it fate."
 — Carl Jung

It had been days since Zara-Chabby's disappearance.
Word of it spread across Madasara the way ripples spread from a stone dropped into still water — outward, thinning, reaching further than anyone would have guessed a single stone could reach. Some received the news with something close to gladness, the ones who had always felt faintly overshadowed by the old teacher's presence, who had mistaken his silence for judgment and his wisdom for arrogance. Others received it as grief, the many whose lives had been turned over like soil by his questions and now felt, without him, unanchored in the dirt they'd been left standing in. A few were barely moved at all — they had never known him, or had known him only as a name spoken in valleys they'd never visited. But on one point, every single person in Madasara agreed without needing to compare notes: Zara-Chabby was gone.
Not dead. Gone. There was a difference no one could quite explain, and yet everyone felt it the moment they tried. The cave by the stream stood empty. The stone circle where he had delivered his final teaching now held nothing but wind and the passing shadows of birds. The stream itself seemed to run quieter than before, as though it too were listening for a voice that was not going to return.
Among the disciples, disarray took root fast. Some gathered in small, huddled groups, repeating his old sentences to each other like charms held up against despair. Others packed the little they owned and walked back toward the lives they'd left behind, carrying fragments of his teaching the way a man carries shards of a mirror he still half-believes he can piece back together. A few stayed at the cave, waiting — for what, none of them could quite say aloud. Perhaps for a sign. Perhaps for the old man to simply walk back out of the trees with that crooked half-smile of his and say, did you really think I was gone? I was only down at the river washing my feet.
He did not come.

One of Zara-Chabby's oldest disciples — whose name will not be given here, for reasons that will become clear before this chapter ends — felt, in those days, as though he had walked directly into a stone wall he could neither see nor climb over.
He had been with Zara-Chabby longer than almost anyone still living. He had sat at the teacher's feet when the stream had still been only a trickle and the cave had still been nothing more than a hole worn into rock. He had been present for the first riddles, the earliest parables, the long silences that had, over the years, taught him considerably more than any of the words ever had. He had been given a name once, long ago — but he had stopped answering to it now, because names had begun to feel like nets thrown over a man, and he had been caught inside one for far too long already.
For three full days after Zara-Chabby's disappearance, he sat in the stone circle and waited. On the fourth day, he rose. He did not speak to the other disciples still gathered there. He did not pack a single thing. He simply walked into the forest bordering the valley's eastern edge, following a path he had never once taken in all his years in that place.
He told himself he was searching for Zara-Chabby. And in a way, that was true. But underneath that true thing, he was also searching for something else entirely — something he could not yet name, something that had been quietly gnawing at him since the exact moment the old man had walked into the trees and vanished, as completely and as silently as water disappearing into dry sand.
He walked through that day, and then through the night that followed, and then through the day after that. He did not eat. He did not drink. He felt neither hunger nor thirst pressing at him. He felt only the wall — smooth, vertical, entirely impassable — standing somewhere behind his ribs. He had learned so much, across all those years, from Zara-Chabby. And yet he understood, walking, that he had grasped so very little of any of it. Now the teacher was gone, and the questions he had never once found the courage to ask aloud were the only thing left keeping his legs moving forward.

On the third day, deep in a stretch of forest he did not recognize, he came upon a clearing.
The clearing was circular, much like the stone circle back at the stream, but this one was entirely natural — ringed by ancient oaks whose upper branches interlaced overhead like fingers folded together in prayer. At its center sat a figure. From a distance, the disciple mistook it for a dwarf — small, broad-shouldered, a mass of tangled hair obscuring the face entirely. He approached slowly, one hand drifting, out of long habit rather than fear, toward the small knife at his belt.
When he stood ten paces off, the figure turned.
It was not a dwarf.
It was a child — a boy of perhaps seven or eight, though it was genuinely difficult to say with any confidence. His face was smudged with dirt. His clothes hung torn and stained. His bare feet were scratched raw. But his eyes — his eyes were not a child's eyes at all. They were old. Older than the oaks surrounding them. Older, it seemed, than the forest itself. They carried something the disciple had seen only once before in his entire life, in the face of Zara-Chabby: the look of someone who has been everywhere there is to go, and has chosen, deliberately, to be exactly here, in this one moment, for reasons that belong entirely to himself.
The disciple stopped walking.
"You're lost," he said.
The child tilted his head slightly. "Am I?"
"You're alone in the forest. You have no food. No water. Your feet are bleeding."
The child glanced down at his own feet as though noticing them for the first time in his life. "Yes," he said, mildly. "They are."
"Where are your parents?"
The child looked back up. "Where are yours?"

The disciple felt a strange jolt move through him — not anger exactly, and not confusion either. Something closer to recognition. The question had not been a child's question at all. It had been Zara-Chabby's question, arriving through a child's mouth.
"My parents are dead," the disciple said. "They died when I was young."
"Then you are also lost," said the child.
The disciple opened his mouth to argue the point, then closed it again without a word. The child was not wrong. He had been lost for days now — lost in the forest, certainly, but lost in some far deeper sense as well. Lost since Zara-Chabby had walked into the trees and never come back. Lost since the wall had first risen up inside his own chest. Lost, if he was honest with himself, since he had genuinely forgotten what it felt like to be found by anything at all.
He sat down across from the child, on the cool moss carpeting the clearing floor.
"What's your name?" he asked.
The child smiled — a smile that did not belong to any child. It was too patient, too knowing, and yet at the very same time entirely simple, the way a person smiles upon suddenly remembering a joke they've secretly known their whole life without ever quite finding the occasion to tell it.
"Names are for people who need to be called," the child said. "I am not waiting to be called. I am waiting to be seen."
The disciple felt the wall inside his chest tremble, faintly, for the first time in three days.

They sat in silence together for a long while after that. The forest breathed quietly around them. A squirrel chattered somewhere overhead in an oak. Far off, a stream — perhaps the same stream, perhaps another entirely — murmured its endless, patient conversation with the stones lining its bed.
Finally the disciple spoke. "I'm searching for my teacher."
"I know," said the child.
"He disappeared. He walked into a forest just like this one, and no one has seen him since."
"I know that too," the child said.
The disciple leaned forward. "Do you know where he is?"
The child picked a fallen acorn up off the moss and turned it slowly between two small, dirty fingers. "He is exactly where he has always been. Where you are. Where I am. Where this acorn is, before it becomes a tree."
"That isn't an answer."
"No," the child agreed. "It's a question. The answer is already inside you. You've simply reached a wall."
The disciple went cold all over. "How do you know about the wall?"
"Everyone who searches for Zara-Chabby eventually reaches a wall," the child said. "He built it himself, you understand. Not to keep you out of anything. To finally make you stop running."

The disciple stared at him. Afternoon light filtered down through the oak canopy, dappling the whole clearing in shifting gold and shadow. The child's face itself seemed to shift with the light — young one moment, ancient the next, and then, for a strange half-second, nothing more than a face at all, unremarkable and blank.
"I'm not running," the disciple said.
"You have been running since the exact moment you left the stone circle," the child said. "You are running right now, sitting perfectly still in front of me. Your legs are tired. Your heart is tired. But you keep moving anyway, because if you finally stop, you will have to face whatever is standing directly behind the wall."
"And what is behind it?"
The child set the acorn down carefully on the moss between them. "That's the wrong question."
"Then what's the right one?"
The child looked at him then — really looked, with those eyes that had seen far too much to belong to anyone young, and far too little to belong to anyone truly old. "The right question is: what am I running from?"
The disciple opened his mouth. Closed it again. Opened it a second time. Nothing at all came out.
The child waited. He did not fill the silence for him. He offered no comfort to ease it along. He simply waited, the way the forest itself waited, the way the stones waited, the way a stream waits patiently for rain that may or may not eventually come.
After a long while, the disciple finally spoke, his voice gone hoarse. "I am running from the possibility that I understood nothing at all."
The child nodded slowly, unsurprised.
"Zara-Chabby taught me for many years," the disciple went on, the words coming faster now that the first one had broken loose. "Many, many years. I sat at his feet. I listened to every riddle he ever spoke. I watched him eat, sleep, laugh, weep. I believed, the whole time, that I was learning. That I was becoming wise. But the moment he left — the moment he walked into those trees and never once looked back — I understood that I had learned nothing at all. I had only collected. I gathered his words the way a squirrel gathers nuts before winter. But I never actually lived them. I never became them. And now he is gone, and I am simply empty."
He stopped. His hands, he noticed only then, were shaking.
"Is that what you're running from?" the child asked. "Emptiness?"
"Yes."
"Then you are running from yourself," the child said. "Because you have always been empty, in exactly that sense. Zara-Chabby did not fill you with anything. He only ever showed you the true shape of your own emptiness. And you mistook the shape, all these years, for the actual content."
The disciple felt the wall tremble again — not with any threat this time. With its first genuine crack.
"You sound like him," he said.
"I am not him," the child said simply. "But I have met him."
"When?"
"Before you were born. After you were born. In the space between two of your breaths. In the exact moment you finally stopped asking questions and started, instead, to actually listen. He was never hard to find. He is only hard to see."
The disciple shook his head slowly. "You speak in riddles. You're a child. Children shouldn't speak this way."
The child laughed — a small, bright sound, like a flat pebble skipping cleanly across a still pond. "Who told you that? Some other adult who forgot what it felt like to be a child himself? Children live inside riddles quite naturally. It's adults who forget the answers were ever there to begin with."
He picked the acorn back up and held it toward the fading light.
"This acorn is a riddle," he said. "It looks like only a seed. But it is also, at the very same time, an oak tree. It is also shade for a traveler on a hot day. It is also a home for squirrels who will never once thank it. It is also firewood, eventually. It is also ash after that. It is also soil, given enough seasons. It is also another acorn, waiting somewhere further down the line. When you look at it and see only acorn, you have not solved the riddle at all. You have simply stopped looking too soon."

The disciple took the acorn from the child's open palm. It was still warm from the small fingers that had been holding it. He turned it slowly, studying the smooth cap, the fine veins running through the shell, the tiny point at its base where a root would one day, given the chance, finally emerge.
"You're saying Zara-Chabby is like this acorn."
"I'm saying you are like this acorn," the child said. "Zara-Chabby was only the one who told you, plainly, that you were an oak tree the whole time. But you never believed him. You kept looking down at yourself and seeing only an acorn, over and over, no matter how many times he pointed at what was actually there. When he left, you assumed the one who could see the oak tree had taken the oak tree away with him when he went. He did not. He only ever pointed at it. The oak tree was inside you the entire time. It still is. You have simply forgotten, somewhere along the way, how to see it for yourself."
The disciple closed his fingers slowly around the acorn.
"What if I'm not an oak tree at all?" he asked. "What if I'm only an acorn that was never going to grow, no matter what?"
The child smiled again — that same smile, too old and too young in the same instant.
"Then you are an acorn asking itself entirely the wrong question," he said. "The question was never will I grow. The real question has always been: am I willing to be planted?"

The disciple felt something give way inside him then — not the wall itself, not quite yet, but something standing behind the wall, something that had been pressing steadily against it for years, perhaps for the whole of his life without his ever noticing the pressure building.
"Who are you?" he whispered.
The child looked up toward the canopy of oaks overhead, where the last light of the afternoon was already beginning to fade into evening blue.
"I am what you were, before you learned how to be something else entirely," he said. "I am what Zara-Chabby was, before he became Zara-Chabby. I am what you will be again, the moment you finally stop running."
He turned back to face the disciple directly, and for one single moment — just one — his face was no longer the face of a child at all. It was the disciple's own face, but younger. Unmarked by years. Unburdened by thirty seasons of listening, and collecting, and quietly pretending to understand more than he ever actually had.
"You came into this forest looking for Zara-Chabby," the child said. "But Zara-Chabby is not the one who is lost. You are. And you will not find him until you have first found yourself."

Night fell over the clearing.
The disciple built a small fire — not because the night was cold, but because he needed something to look at besides the child's unsettling face. The flames danced between them, throwing shadows that made the child seem larger, then smaller, then larger again, as though his size in the world were simply a matter of how much light happened to be falling on him at any given moment.
"Tell me about Zara-Chabby," the disciple said. "Tell me how you came to meet him."
The child fed a dry leaf into the fire. It curled, blackened, and vanished.
"I met him in a place where there were no questions left at all," the child said. "Only answers. And the answers were so loud, all shouted together, that no one there could hear a single thing over the noise. Zara-Chabby arrived and asked one question so quiet that everyone around him assumed he had said nothing whatsoever. But I heard it."
"What was the question?"
The child stared into the flames. "He asked: what do you see, when you are not looking for anything at all?"
The disciple went very still.
"Everyone else in that place decided it was a riddle to be solved," the child said. "They tried to answer it properly. They said, I see the sky. They said, I see the trees. They said, I see my own two hands. But Zara-Chabby was never asking for an answer from anyone. He was offering a way through instead. He was saying: stop looking so hard. Stop searching every corner. Stop trying to find something to finally hold onto. Simply sit. Simply be, for once. And in that sitting, in that plain being, you will see, clearly, what has always already been there in front of you."
"And what is that?" the disciple asked.
"You," the child said. "Only you. Without the story wrapped around you. Without the name you were given. Without the thirty years of careful listening. Without the wall. Only you, sitting in a clearing exactly like this one, watching a small fire burn, talking to a child who has no name of his own to give you."

The disciple was quiet a long time after that.
Then he said, "I don't know how to be only me. I have been a disciple for so many years now that I've genuinely forgotten what I was before any of it began. I have been Zara-Chabby's student. I have been a keeper of his words. I have been, in turn, a teacher to others myself. But underneath every one of those things — I do not actually know who I am."
The child picked up a stick and drew a single circle in the dirt around the fire.
"This is you," he said. Then, inside it, a smaller circle. "This is the disciple." Smaller still. "This is the keeper of the words." Smaller again. "This is the teacher." And finally, at the very center, a tiny circle no wider than the stick's own tip. "And this — this is the one who does not know who he is."
He looked up at the disciple.
"You have spent your entire life adding circles, one on top of the last," he said. "Zara-Chabby spent his whole life removing them, one at a time. He was never trying to make you into anything new. He was only trying to show you that you had always been the center already. The circles were the walls, all along. And you built every single one of them yourself, with your own two hands."

The disciple stared down at the circles scratched into the dirt. The firelight made them flicker faintly, as though they were somehow alive underneath the flames.
"If I remove the circles," he said slowly, "what's actually left?"
The child pointed at the very center of the smallest one — the single point where every circle had finally converged, no larger than the stick's own tip had been.
"That," he said.
"That's nothing at all."
"Yes," the child said. "That is nothing. And nothing is precisely what you have spent your whole life running from. You have filled that center with teachings, with practices, with years and years of faithful service. You have called the space emptiness and been afraid of it ever since. But emptiness was never a void to be feared. It is freedom. It is the space in which something entirely new is finally able to grow. An acorn does not fear the emptiness of the soil it's dropped into. It trusts the emptiness completely. It allows itself to be buried in the dark. It allows its own shell to crack open from the inside. It allows itself to become nothing at all for a while, so that it might become something it could never once have become while it still insisted on remaining only an acorn."
The disciple felt the wall inside him crack again — a long fissure this time, running clean from top to bottom.
"You're asking me to die," he said.
"I'm asking you to be planted," the child said.

The fire burned low. Stars emerged overhead, cold and sharp, between the interlaced fingers of the oak branches. The disciple sat with his knees drawn up to his chest, arms wrapped around them, eyes fixed on the slow pulse of the embers.
"I have a question," he said.
The child waited.
"Zara-Chabby once told me: man is more childlike than woman, but woman does not understand man. I've turned that sentence over for years. I've never once understood it fully. Do you know what he meant by it?"
The child's face sat half-lit by the dying fire, half-hidden in the gathering dark. "What do you think he meant?"
"I think," the disciple said slowly, "that men are always searching for something they once lost. Something from childhood. Something they cannot even properly name anymore. And women watch this searching and mistake it for weakness, or for confusion, or for some kind of refusal to finally grow up. But it isn't any of those things. It's — it's a longing. A longing for something that was either never fully there to begin with, or was there once and was taken away, or was there the whole time and simply never once seen clearly."
He paused.
"But women don't understand this particular longing, because they don't share it in the same shape. Or perhaps they do share it, and simply express it differently than men do. Or perhaps — perhaps they understand it far too well, and that's precisely why they seem, from the outside, not to understand it at all. Perhaps they already know the longing was never for something lost in the first place. It was for something that was never lost at any point. And they are simply waiting, patiently, for the men in their lives to finally stop searching and start actually seeing."

The child was silent a long while at that. When he finally spoke again, his voice had gone softer than before — softer than a child's voice really ought to be able to go.
"That's close," he said. "But not quite the whole of it."
"Then tell me."
The child drew another circle in the dirt, off to one side of the fire this time, with a single dot marked at its exact center.
"This is a child," he said. "The circle is the whole world of the child — the world of wonder, of unstructured play, of questions that need no answers, and answers that arrive with no questions attached to them. The dot is the child's own self, not yet separated out from the world around it. For a while, the child lives entirely inside the circle, and the circle, for that while, is genuinely everything there is."
He drew a second circle beside the first, larger this time, its dot no longer at the center but pushed off toward one edge.
"This is a man," he said. "The circle is still the world, but it has grown considerably larger — crowded now with rules, with responsibilities, with expectations piled on top of one another. And the self, the dot, has drifted out to the very edge of it. It is searching for something. It is searching, specifically, for the center it has somehow lost along the way. But it no longer knows how to find its way back. So instead, it builds things to fill the gap. It builds a career. It builds a family. It builds a reputation for itself. It builds walls, brick by careful brick. It fills the whole world with so many things, one after another, that it eventually forgets it was ever looking for anything in the first place."

He drew a third circle, the same size as the second, but with its dot placed exactly at the center.
"This is a woman," he said. "Her world is still just as large, still every bit as full of rules and responsibilities as the man's. But her self — her dot — has never moved from the center. Not because women are inherently better, or wiser, or braver than men. Because they were never taught, the way men so often are, that leaving the center was even an option worth considering. They were taught instead to hold — to hold children, to hold households, to hold whole communities together with their own two hands. And in all that holding, they kept something men have largely lost along the way: the plain sense of being at the center of their own life, rather than circling its edge."
He looked up at the disciple.
"But here is the part Zara-Chabby actually understood, underneath all the rest of it. The dot in that third circle — the woman's self — sits at the center, yes. But it sits there alone. She has held everything else together for everyone around her, and in all that holding, no one has thought to hold her in return. She does not understand the man's particular longing, because she has never once permitted herself the luxury of longing for anything herself. She has always been too occupied with the holding. And so when she watches a man out there searching, endlessly, she thinks to herself: why is he searching at all? Everything he needs is already here. The center is right here. I am right here. Why can he not simply see it?"
The disciple's eyes had gone wet.
"And the man," the child went on, "does not see it, because he has forgotten, somewhere along the way, how to look properly. He has been searching for so many years that he has forgotten the thing he was searching for was never actually lost to begin with. It was only ever waiting. It has always been waiting for him. But he could never see it, because he kept looking outward, toward the world, instead of inward, toward himself. He was searching for a center out there in the world, when the only center that ever mattered was inside him the entire time."

The disciple wiped his eyes with the back of one hand. The fire had burned down to embers now, red and pulsing faintly, like a slow and patient heart.
"And the child," he asked. "Where does the child fit, in all of these circles?"
The child smiled — and this time, for the first time all evening, the smile truly did belong to a child. Bright. Unburdened. Full of the simple, uncomplicated joy of merely existing.
"The child isn't in any of the circles," he said. "The child is the space between the circles. The child is what existed before the very first circle was ever drawn. The child is what will still be there, waiting, once the last circle has finally been erased for good. The child does not search for anything. The child simply sees. The child does not hold onto anything either. The child lets go, easily, the way water lets go of a hand passed through it. The child is not at the center, and not at the edge. The child is both the center and the edge at once, because the child has never yet learned that he was supposed to choose between them."
He reached out and set his small hand gently on the disciple's knee.
"You came into this forest looking for Zara-Chabby," he said. "But Zara-Chabby is the one who first taught you how to look at all. And that looking has become your prison, without your noticing. You look for answers. You look for wisdom. You look for your teacher, wherever he's gone. You look, endlessly, for yourself. But the one who is always looking is the one who stays lost. The one who finally sees is the one who was found the entire time, and simply hadn't noticed yet."

The disciple closed his eyes.
In the darkness behind his eyelids, he saw the wall again. But the crack running through it had widened considerably now. He could see straight through it — not toward anything waiting on the other side, but toward nothing at all. Only emptiness. Only open space. Only the plain absence of walls where walls had stood his entire adult life.
And in that emptiness, he felt something stir.
It was not a thought exactly. It was not quite a feeling either. It was something older than both of those things — something that had existed in him before he ever learned to think in sentences, before he ever learned to feel in words, before he had learned, brick by brick, to build walls around the emptiness and call the finished wall by his own name.
It was the child he himself had once been. Not a memory of that child — memories, he understood now, were only more circles, more walls dressed up as recollection. It was the actual presence of that child, still there, still waiting. The one who had once looked out at the whole world without needing to understand a single piece of it first. The one who had sat in the grass as a boy and watched ants cross a path, feeling not separate from them at all, but somehow with them. The one who had not yet learned to be a man, or a disciple, or a searcher endlessly hunting for something already inside him.
The one who had simply, once, been.
He opened his eyes.
The child was gone.

The clearing sat empty around him. The fire had died out completely. The only light left came from the stars overhead, filtering down through the oak leaves and scattering shifting patterns across the ground with every pass of the breeze.
The disciple looked around slowly. He stood. He walked to the clearing's edge and peered out into the surrounding dark. Nothing.
He called out once. "Child!"
No answer came back.
He returned to the center of the clearing, where the circles were still scratched into the dirt — the ones the child had drawn, one inside another, with his stick. But they were no longer circles now. They had become smudges. Footprints, maybe. Or wind. Or something else entirely that he had no name for.
He knelt and pressed his palm flat against the earth where the child had been sitting. It was still warm. The particular warmth of a small body that had, only moments before, been resting there.
He looked down at his own hands. They were dirty. Scratched raw from branches and thorns along the way. They were the hands of a man who had spent three full days walking through an unfamiliar forest, searching for a teacher who had walked into the trees once and had simply never looked back.
But now, for the first time in those three days, he was not searching for anything at all. He was simply here. In a clearing. Under the stars. Entirely alone.
And, for the first time he could remember in longer than three days, he was not afraid of that fact.

He sat back down, in the same spot the child had occupied. He couldn't have said why. He simply did it. He settled cross-legged, hands resting loosely on his knees, back straight, eyes open to the dark.
He did not meditate, exactly. He did not pray. He did not recite a single one of the thirty years' worth of teachings Zara-Chabby had given him. He simply sat.
The forest breathed around him. The stars turned overhead, slow and indifferent. Somewhere far off, an owl called once and then fell silent. The stream — that same stream, or some other one entirely — murmured on with its endless, patient music.
And in the sitting, in the deep quiet, in the simple unadorned act of being present in a clearing beneath the stars, he felt something he had not felt since he himself had been a boy.
He felt held.
Not by a person. Not by any teacher. Not even by a teaching he could name and recite. Held instead by the night itself. Held by the forest around him. Held by the ground beneath his own body. Held by the ordinary air moving in and out of his lungs, over and over, without his ever once having to ask permission for the next breath.
He was a man. He was a disciple. He was, undeniably, a searcher who had spent thirty years searching for exactly the wrong thing in exactly the wrong direction. But underneath all of that — underneath every circle he had spent a lifetime carefully adding — he was also, still, the child. The one who had never actually left. The one who had simply been waiting, patiently, this whole time, for him to finally stop running long enough to be seen.

The Disciple's Reckoning
The night deepened further. The disciple did not move from where he sat.
He thought of Zara-Chabby — not as a teacher this time, and not as some distant figure of wisdom, but simply as a man. A man who had once sat beside a stream and watched water pass for three full days without saying a single word. A man who had laughed loudly at his own jokes, and wept openly at the suffering of strangers he'd never met before or since. A man who had turned out, in the end, to be not a teacher at all, but a pointer — a single finger raised toward the moon, an open hand shown at the end to prove it had never actually been holding anything back from anyone.
He thought of the thirty years he had spent kneeling at that man's feet. He had believed, the entire time, that he was learning something of real value. But what, precisely, had he actually learned? He had learned the riddles well enough to recite them by heart. He had learned to sit in total silence for hours on end without complaint. He had learned to see the whole world through Zara-Chabby's borrowed eyes.
He had never once learned to see through his own.
That had been the wall the whole time. That had been the exact thing he'd been running from since the moment it first began to rise inside him. He had become, without ever quite noticing the transformation happening, a copy. A reflection, one step removed from the original. A second Zara-Chabby — fainter than the first, smaller, and considerably less real. He had given himself so completely, so unreservedly, to the teaching that he had entirely forgotten the teaching itself was never meant to be the point. The teaching had only ever been the finger. The moon had been his own life, waiting the whole time to be looked at directly. And he had spent thirty full years staring, instead, at the finger.
He wept. Not the dry, controlled weeping of the stone circle back at the cave. A child's weeping this time. Loud. Messy. Entirely unashamed of itself. He wept for the years he understood now he had lost. He wept for the child inside him he had quietly abandoned along the way. He wept simply because he was tired — tired of searching, tired of reaching endlessly toward something just out of sight, tired of being a disciple for thirty years without ever once managing to become a self of his own.
And in the weeping, something inside him finally shifted.
The wall — the one that had risen up inside him days earlier, or perhaps years earlier, or perhaps, if he was finally honest with himself, some thirty years earlier — cracked. Not merely cracked this time. It broke. It fell inward rather than outward. It did not shatter into sharp pieces capable of wounding anyone, least of all himself. It crumbled quietly into dust, and the dust settled softly into the emptiness that had been waiting patiently underneath it the entire time.
He stopped weeping.
He went still. The forest around him went still. Even the stars overhead seemed, for a moment, to hold their breath alongside him.
And in that stillness, he heard something.

The Sound
It was faint at first — so faint he assumed at first it was only wind moving through the oaks. But the wind, when he checked, was entirely still. The leaves above him had not stirred once.
He listened harder.
It came again. A sound that was not wind, and not the stream, and not any owl he had ever heard call before. A sound older than any of those three things, and somehow, at the very same time, younger than all of them combined. A sound he had heard before — a thousand times, easily ten thousand times over thirty years — but had never once, until this exact moment, actually heard in the fullest sense of the word.
It was a laugh.
Not a loud one. Not the kind of laugh that demands the whole room's attention. A small laugh. A private one. The particular laugh of someone who has just finished watching a grown man spend three entire days running frantically through a forest, only to discover, at the very end of all that running, that the thing he had been searching for was sitting quietly in the same clearing where he'd started.
It was Zara-Chabby's laugh.
The disciple's heart stopped for one full beat. Then it started again, faster than before, and stronger.
He rose to his feet. He turned in a slow circle, scanning the clearing. He searched the dark tree line beyond it. He saw nothing. No figure anywhere. No face. No movement of any kind.
But the laugh came again — closer this time, or so it seemed to him. It was not arriving from any single direction he could point to. It was coming from inside the clearing itself. From inside the ground beneath his bare feet. From inside the night air all around him. From inside, he understood with a jolt, himself.
He spun where he stood. The laugh was everywhere at once, and nowhere in particular. It carried no mockery in it. No note of triumph either. It was simply there — the plain sound of recognition, the sound of a teacher who had, in some real sense, never actually left at all, the sound of a child who had never once grown up, the sound of the whole universe laughing quietly at its own expense, having just remembered a joke it had somehow managed to forget for what felt like an eternity.
"Zara-Chabby!" he shouted, into the empty clearing.
The laugh faded slowly. It did not stop outright — it simply grew softer and softer, like a struck bell continuing to ring long after the sound should reasonably have died away, until only the very deepest part of him could still hear it going.
He stood at the center of the clearing, breathing hard. Overhead, the stars had begun to fade. To the east, the sky was already turning pale. Dawn was coming.

The Return
He did not see the child leave.
That was the strange part of it, turned over later. He had been so entirely focused on the laugh — that impossible, familiar, deeply loved sound — that he had not noticed the exact moment the child slipped away. Or perhaps, he considered, the child had never truly been there at all in the way he'd assumed. Or perhaps the child was still there even now, hidden somewhere in the shadowed line of the oaks, watching him quietly with those eyes too old and too young to belong to any single age.
He did not know which of these was true. And for the first time in his entire adult life, he found he did not need to know.
He looked around the clearing one last time before leaving it. The circles scratched into the dirt were gone now — erased by his own movement through the night, or by the wind, or perhaps by something in the dark he had no name for. The fire had gone to cold ash. The acorn still lay where he had set it down in the moss. He picked it up. It had gone cool now, no longer carrying the warmth of the child's small fingers.
He slipped it into his pocket.
Then he turned and walked back out of the clearing, back through the forest, toward the valley where the cave still stood beside the stream. He did not run this time. He did not search. He simply walked — slowly, deliberately, with no fixed destination in mind, because he had finally understood, somewhere in that clearing, that the destination had always been the walking itself.
The forest opened gradually around him as he went. The path he had cut through it three days earlier was still there, faintly visible, but it looked different to him now. It was no longer a path leading away from something he was fleeing. It had become, somewhere in the night just passed, a path leading into something instead — into the coming morning, into the light already spreading along the eastern ridge, into the life that had apparently been waiting for him this entire time without his ever once noticing it was there.
He walked for a full day and a night without hurrying. He stopped when he grew tired. He drank from the streams he passed. He ate berries he recognized from teachings Zara-Chabby had given, years earlier, on which plants could be safely eaten. He slept for a while beneath a tree and dreamed of absolutely nothing at all — the first dreamless sleep he could remember having in years.
When he woke, he simply continued on.

He reached the valley on the second morning after leaving the clearing. The stream was flowing, exactly as it had always flowed. The cave stood empty, exactly as it had been the day he'd left it. The stone circle lay scattered now with fallen leaves, though the stones themselves had not moved an inch.
Some of the other disciples were still gathered there when he arrived. They looked up as he emerged from the tree line. A few nodded at him. A few only stared. A few asked, cautiously, where he had been all this time. He did not answer any of them. He simply walked to the stream, knelt at its edge, and drank.
Then he sat down on the flat rock where Zara-Chabby had sat for so many years before him. He did not sit there as a disciple this time. He did not sit there as a teacher either. He sat there simply as himself — the one who had gone into the forest lost, and had come back out again having found, not Zara-Chabby after all, but the child inside himself who had never actually been lost to begin with.
He reached into his pocket and drew out the acorn. He studied it a long moment in the morning light. Then he stood, walked to the stream's edge, and pressed it gently down into the soft, damp earth of the bank.
He said no prayer over it. He recited no riddle. He simply planted it, and in the planting, he finally, fully understood.
The acorn did not need to know, in advance, what it would eventually become. It did not need to understand the soil holding it, or the rain that would come, or the sun that would eventually reach it. It only needed to be planted. To be buried in the dark for a while. To let go of being only an acorn, so that it could finally become the thing it had actually been the entire time — an oak tree, patient, waiting in the dark for its own season.
He sat back down on the rock. The stream went on flowing beside him. Other disciples came and went throughout the day. Some asked him questions. He answered a few of them with silence. A few others with a single word. And a few more with only a look — a look that was not entirely his own, and yet was not quite Zara-Chabby's either. A look that seemed to belong, instead, to the space that had always existed quietly between the two of them.
He did not speak of the child. He did not speak of the laugh in the clearing, or of the circles drawn and erased in the dirt, or of the wall that had finally, that same night, crumbled into dust inside him. He found he did not need to explain any of it. The teaching, he understood now, had never lived in the words at all. It lived in the sitting. It lived in the planting. It lived in the silence that flowed, unbroken, between himself and the stream, between himself and the empty cave, between himself and the disciples who could not quite say why he had come back from the forest so plainly, unmistakably different.
He offered no explanation. He no longer needed to offer one. He had spent thirty years explaining things to others. Now, at last, he was done with all of that. Now he was simply there — the way the rock beneath him was there, the way the stream was there, the way the small acorn buried in the bank was there, patient in the dark soil, quietly waiting for spring to finally come and find it.

The Last Laugh
That evening, as the sun went down and the stream turned briefly to gold in the last light, he heard it again.
The laugh.
It came from nowhere in particular, and from everywhere at once. From the empty cave. From the moving water. From the stones lining the bank. From the small acorn buried beneath the earth. From the quiet space sitting between his own breaths.
It was Zara-Chabby's laugh. He knew it instantly, the way you know your own name spoken aloud in a crowded room. He had heard it a thousand times over the years — at the close of a teaching, at the punchline of some half-finished parable, in the particular silence that always followed a riddle sharp enough to crack a mind wide open. It was the laugh of someone who had, at some point long ago, finally seen the whole joke at the center of the universe, and had decided he was not above laughing at it himself, right along with everyone else.
But this time, something in it was different. This time, the laugh was not arriving from somewhere outside him. It was coming from inside. It was, he realized with a shock that ran clean through his chest, his own laugh — or rather, it was the laugh that had once belonged to him, long before he'd ever learned to be so relentlessly serious, long before he'd become a disciple, long before he had learned, patiently and carefully, to build walls around his own emptiness and call the finished wall by his own name.
He laughed. Not loudly. Not softly either. Just enough to feel it move through his chest, up through his throat, out to the corners of his own eyes.
The other disciples nearby looked over at him, plainly confused. They had not heard the laugh he'd heard. They had not been in the clearing with him. They had not sat across a small fire from a strange, ancient-eyed child. They were, every one of them, still searching — still asking their questions, still waiting patiently for Zara-Chabby to come striding back out of the trees one day and tell them exactly what to do next with their lives.
He did not attempt to explain any of it to them. He simply sat on the rock, laughing quietly to himself, watching the stream carry the last of the gold light downstream, feeling, somewhere beneath the earth at the water's edge, the small acorn already beginning its long, invisible work in the dark soil.
He had not seen the child leave the clearing. He had not, if he was honest, ever quite seen the child arrive there either. The child had simply been — in the clearing, in the circles drawn and erased in the dirt, in the emptiness that had always been waiting patiently behind the wall. And the child, he understood now, was still there somewhere. In the laugh. In the planting. In the silence that was no longer empty at all, but entirely full — full of a presence that had, in the end, never actually left him, full of a teacher who had never once been anything more or less than a pointer, full of a self that had simply been waiting, all these years, for him to finally stop running long enough to let it be seen.
The laugh faded slowly into the evening air. The stream flowed on, unbothered. The stars came out overhead, one at a time.
And the disciple — whose name will not be given here, because names, as he now understood, are only for people who still need to be called, and he was no longer waiting on anyone to call him anywhere — sat quietly on the rock, and was, at long last, entirely still.
He was still.
Thus began the teaching that had no teacher, the friendship that had no name, and the child who had never grown up, and never would.
Thus ends this chapter.



OF THE OLD WARRIOR
"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."
 — Seneca

The forest had gone quiet.
Not the quiet of peace. The quiet of waiting. The birds had stopped their morning chorus mid-note. The wind had stilled without warning. Even the stream running past Zara-Chabby's empty cave seemed to hold its breath, as though the water itself were listening for a footstep that had not yet arrived.
Twenty-three moons had passed since the teacher walked into the trees and did not come back. Three moons had passed since the unnamed disciple had returned from the clearing, his eyes changed, his silence deeper, his laughter soft and strange in a way none of the others could name. They had watched him sit day after day on Zara-Chabby's rock, saying little, planting nothing, simply being there the way weather is there. Some disciples had left. Some had stayed. Some had begun quietly calling him "the quiet one" — not as an insult, but as a name that fit him the way an old coat fits a man who has finally stopped growing into it.
But this particular morning, something was different.
A new figure had entered the valley.

He came down from the north, where the mountains stood like broken teeth against the sky. He walked with a limp — not the limp of age, though age had certainly found him, but the limp of a man who has carried too much for too long and never once learned how to set it down. His hair was white, cropped close to a skull mapped with old scars. His face looked like a battlefield in miniature: a nose broken and badly reset, a cheekbone healed at the wrong angle, a jaw that clenched even at rest, out of habit rather than anger. His eyes were the grey of iron heated and cooled a thousand times over — hard, flat, and yet carrying, somewhere deep inside them, a flicker that refused to fully go out.
He wore no robe. He wore the leather and mail of a soldier, the mail rusted in patches, the leather cracked with years of weather. A sword hung at his hip — not ceremonial, not decorative. A sword that had been drawn in anger more times than its owner could count, wiped clean with dirt more often than with water, because water had rarely been available at the moments that mattered.
He stopped at the valley's edge. He studied the cave. He studied the stream. He studied the disciples sitting in their stone circle, heads bowed, hands empty of everything but themselves.
Then he walked forward.

Velen saw him first. Velen, who had aged twenty years in three moons — not in body, but somewhere further in, where the aging that actually counts takes place. His eyes had hollowed out. His questions had run dry. He sat in the circle most days and said nothing at all, having already said everything he knew how to say, and received back only silence for the effort.
But something stirred in him at the sight of this stranger. Not hope — hope was a luxury he had quietly stopped affording himself. Something harder. Something older. Something that remembered, distantly, that there were other ways to be a disciple than simply sitting and waiting for a man who might never return.
He stood.
"Who are you?"
The warrior stopped ten paces short of the circle. He offered no bow, no greeting. He only looked at Velen with those iron eyes.
"No one," he said. His voice was gravel dragged over rust. "A man who has lost more than he can remember. A man who has killed more than he can count. A man who has come to find Zara-Chabby."
"Zara-Chabby is gone," Velen said.
"I know."
"Then why have you come?"
The warrior lowered his eyes to the grass. For a long moment he said nothing at all. When he finally spoke again, his voice had gone quieter — softer, as though the gravel had been rained on until some of the roughness washed away.
"Because I've heard he taught something about friendship. And I have no friends left. Only enemies. Only ghosts. Only the faces of men I killed, watching me from the dark whenever I try to close my eyes."

Ashok rose from the circle's edge and came to stand beside Velen. He studied the scars, the rusted mail, the broken nose. He studied the sword.
"You've come to the wrong place," Ashok said, not unkindly. "Zara-Chabby never taught about the sword. He taught about the stream. About silence. About the light that does not deem. What could a warrior possibly take from such things?"
The warrior met his gaze without flinching. "I have spent sixty years learning how to take," he said. "I want, before the end, to learn how to keep. Not land. Not gold. Not victory. I want to learn how to keep..." He pressed a hand flat over his own chest. "This. The thing that's been dying in here. The thing I buried under all the bodies. The thing I once mistook for weakness, and now, at the very end of my life, suspect might have been the only real thing I ever carried."
The disciples exchanged glances. Seekers had come to this valley for years — some for wisdom, some for comfort, some simply because Zara-Chabby's name had reached them as a rumor in some distant market and they wanted to see if the old man was real.
This one was different.
This one had not arrived with open hands. He had arrived with fists clenched — fists that were, slowly and painfully, beginning to unclench in front of them. And in the gaps between his fingers, they saw something none of them had expected.
Tears.
Not tears of grief. Not tears of relief. The tears of a man who had not wept in sixty years and had entirely forgotten how to stop once he'd started.
He didn't wipe them away. He let them run down the scarred terrain of his cheeks, into the grey stubble of his jaw, onto the rusted mail over his chest.
"I'm not asking for your pity," he said. "I'm not even asking for your teaching. I'm asking for a place to sit. A place to be quiet. A place where no one will ever again ask me to pick up a sword."
Velen looked at Ashok. Ashok looked at Velen.
Then Velen stepped aside.
"The stream doesn't ask who you were," he said. "It only asks if you're willing to flow."

The warrior walked to the stream. He did not sit on Zara-Chabby's rock — that rock was still claimed by the unnamed disciple, who had not moved, had not spoken, had not so much as glanced at the newcomer's arrival. The warrior found a flat stone downstream instead, apart from the others, and sat.
He sat there three days.
He did not eat. He did not drink. He did not sleep. He simply sat, hands resting on his knees, eyes fixed on the water, his sword lying beside him in the grass like something already dead.
The disciples watched him from a respectful distance. Some brought food. He didn't touch it. Some brought water. He didn't drink it. Some tried speaking to him. He didn't answer.
On the third night, as the moon rose and turned the stream to silver, the unnamed disciple finally stood from Zara-Chabby's rock. He crossed the grass slowly, silently, and lowered himself to the ground beside the old warrior.
They sat together a long while in silence.
Then the unnamed disciple spoke. "You've been fighting for sixty years," he said. "Now you're fighting the silence instead. And the silence is winning."
The warrior turned his head. His iron eyes were red-rimmed, exhausted past exhaustion.
"The silence isn't my enemy," he said. "I am my own enemy. I've always been my own enemy. The men I killed were only ever mirrors."

The unnamed disciple nodded slowly. He had heard Zara-Chabby say something close to that once — that an enemy is often the truest mirror a man will ever be handed, because it shows him exactly what he is capable of. He hadn't understood it then. Sitting beside this broken warrior now, listening to that gravel-and-rust voice, he began, finally, to.
"Tell me," he said, "about the first man you killed."
The warrior flinched — not a small flinch, but a full-body one, as though the words had landed as a blow.
"Why?"
"Because you cannot sit beside this stream and keep your secrets. The stream keeps nothing. It shows everything — the mud, the fallen leaves, the dead fish, the broken branches. It doesn't choose what to reveal. It simply flows. If you want to learn anything from this place, you'll have to become like the stream yourself. You'll have to show everything."
The warrior was silent a long while. The stream carried on. The moon climbed higher. Somewhere in the trees, an owl called — once, twice, a third time.
Then he spoke.
"He was seventeen. I was nineteen. We stood on opposite sides of a hill neither of us owned, that our commanders had told us was important for reasons neither of us understood or remembered afterward. I don't recall the hill's name. I don't recall the war's name either, if I'm honest."
He paused. His hands, resting on his knees, began to tremble.
"He came over the crest at dawn. The sun sat behind him, so I couldn't see his face at first — only his shape. A boy, really, carrying a spear too long for his own arms. He saw me at the same moment. We both froze."
He closed his eyes.
"We stood like that for what felt like an hour. Maybe it was only a few seconds. Neither of us moved. Neither of us spoke. Then — I still don't know why — I took a step forward. He took one back. He was afraid. I could see it in the way he gripped that spear, too high, too tight. I should have turned around and walked back down my own side of the hill. But I was nineteen, and I'd been taught that warriors do not run."
He opened his eyes.
"I ran at him instead. He tried to turn. He tripped on a root. I put my sword through his chest before he could even cry out. He looked up at me — and that was the first time I actually saw his face. A birthmark on his left cheek, small, shaped like a crescent moon. His eyes were brown. Not the brown of earth. The brown of a young deer — startled, confused, pleading, though he never said a single word."
His voice cracked.
"He died without saying anything at all. He just... stopped. His eyes went from brown to grey to nothing. And I stood over him with my sword still in his chest, and I felt — nothing. That was the worst part of it. I had just killed a boy, and I felt absolutely nothing."
The unnamed disciple said nothing. He offered no comfort, no it was war, no you were young, no he would have killed you first. He simply sat, letting the old warrior's words drop into the silence the way stones drop into deep, still water.
After a long while, the warrior went on.
"That was the first. There were many after him. Dozens. Hundreds. I stopped counting somewhere around the third year. I stopped seeing faces at all somewhere around the fifth. They became shapes to me. Targets. Things to be removed from a field. I got good at it — very good. My commanders praised me for it. My men followed me because of it. I was given medals. Titles. Land. I was called, of all things, a hero."
He laughed — a dry, hollow sound, like bones shaken loose inside a sack.
"A hero. I killed seventeen-year-old boys on hills nobody remembers the names of anymore. I burned villages that had done nothing worse than exist in the wrong place at the wrong time. I watched women weep over their husbands' bodies, and I felt proud, because I was winning. Because I was strong. Because I was, everyone kept telling me, a warrior."
He looked at the unnamed disciple.
"And now I'm old. The war is long over. The medals have tarnished in a drawer somewhere. The titles mean nothing to anyone, least of all me. The land was sold years ago to pay for the medicine that keeps this tired heart of mine beating a little longer than it probably should. And I'm left with only this."
He tapped his chest again.
"The thing that died slowly, one kill at a time, until I stopped noticing it was dying at all. And I don't know how to bring it back."

The unnamed disciple picked a small stone up off the bank and held it out, showing it to the old man.
"This stone," he said, "was once part of a mountain. A great one — tall, proud, standing for a million years or more. Then the rain came. The wind came. The frost cracked it, season after season, until the stream finally carried the broken pieces away. Now it sits here, in my hand, small and smooth and silent."
He pressed it into the warrior's trembling palm.
"You are this stone," he said. "You were once part of something far greater than yourself. You've been broken since then. You've been carried a long way by forces you never controlled. You've been worn smooth by all of it. But you are not nothing. You are a stone that has traveled an enormous distance to arrive exactly here, at this stream, in this moment. That was never an accident. That was never simple fate either. That was choice. You chose to come here. You chose to sit. You chose, finally, to speak. Which means the thing inside you that you assumed was dead — it isn't dead at all. It's only sleeping. And sleeping things can wake."
The warrior looked down at the stone in his open palm. His iron eyes softened, just barely, just enough to notice.
"What do I do?" he whispered.
The unnamed disciple stood. "You sit. You listen. You wait. And when the memories come — the boy of seventeen, the birthmark like a crescent moon, the brown eyes going grey — you do not run from them. You do not fight them. You do not reach for your sword. You breathe. You let the memory move through you the way water moves through a stream. Then you let it go. Again, and again, and again. Until the stone finally goes smooth. Until the warrior becomes only a man. Until the man becomes..." He gestured at the stream, the cave, the moon overhead, the whole quiet night around them. "This. A part of everything. No longer fighting anything. No longer running from anything. Simply here."

The old warrior did not sleep that night. But he did not fight the memories either.
He sat beside the stream, the stone still warm in his palm, and let them come.
The boy came first — the one with the crescent-moon birthmark. He stood at the water's edge, saying nothing, simply looking at the old man with those eyes that had once turned from brown to grey. The warrior wanted to look away. Wanted to close his eyes. Wanted, more than anything, to reach for a sword the boy did not carry and had never truly threatened him with — because the boy in front of him now was a ghost, and ghosts carry no weapons at all.
But he remembered the disciple's words. You do not run. You breathe.
He breathed.
The boy did not vanish. But he changed. His face — frozen for sixty years at the exact moment of death, caught in shock and fear and the first flicker of pain — softened in front of him. He was no longer only the boy the warrior had killed on a nameless hill. He was simply a boy. One who had been in the wrong place, at the wrong hour, on the wrong morning of his short life. A boy who had a mother somewhere. A father, likely. Perhaps a sister who braided her own hair the way sisters do. A boy who would never grow old, never marry, never sit beside a stream trying to remember how to feel anything at all.
"I'm sorry," the old warrior whispered.
The boy tilted his head. He didn't speak. He didn't need to. The apology hung there in the air between them, small and fragile and entirely inadequate to the size of what it was trying to address.
But it was something.
The warrior had never once said those words to anyone in sixty years. He had never even said them to himself. He had buried the boy under decades of pride and duty and the old lie that warriors simply do not feel things. And now, for the first time in six decades, he had finally said them.
I am sorry.
The boy nodded once. Then he turned and walked into the stream. The water did not part for him. He simply entered it, and was gone.
The old warrior wept.

The second memory arrived an hour later. A woman this time — not a soldier, not an enemy in any formal sense. A woman whose village he had burned. He hadn't killed her directly. He had only stood outside her hut while his men set the thatch alight. He had heard her screaming from inside. He had done nothing at all to stop it.
She stood now at the stream's edge, her clothes singed, her face black with old soot. She didn't look at him with hatred. She looked at him with something considerably worse. Disappointment.
"You were supposed to protect," she said. "That is what warriors are for. To protect. Not to burn. Not to kill. To protect."
He wanted to argue with her. Wanted to say he was following orders. That he had been young. That war is chaos and chaos forgives nothing. But the words died somewhere in his throat before he could shape them, because she was right, and some part of him had known it was true for sixty years without ever once allowing himself to hear it said aloud. He had forgotten, somewhere along the way, what warriors were actually meant to be for. He had let protection curdle slowly into destruction. He had let strength curdle into cruelty, one small permission at a time.
"I'm sorry," he said again.
She looked at him a long moment. Then she too walked into the stream, and was gone.
One by one after that, the memories came. Dozens of them. Hundreds. Each one a face, a name he had never once bothered to learn, a life cut short before it had properly begun. Each one a stone he had carried for decades, pretending the whole time it weighed nothing at all.
And each time, he said the same two words.
I am sorry.
He said them until his throat went raw. He said them until the words themselves lost all their ordinary meaning, and then — miraculously — found a deeper one underneath. Not a meaning about guilt or shame anymore, but about recognition. Recognition that he had been wrong. Recognition that the boy with the crescent-moon birthmark had been a person, and not merely a target. Recognition that the woman in the burning hut had been a mother, a daughter, an entire human being with her own dreams and fears and a voice that had deserved, all along, to be heard rather than silenced.
He said I am sorry until the words became something closer to a prayer.
When dawn finally broke, the stream was still flowing, the stone was still warm in his hand, and the old warrior was still sitting exactly where he had been for three days. But something in him had changed.
His eyes were no longer iron.
They were water.

On the fourth day, Velen sought out the unnamed disciple.
He found him on Zara-Chabby's rock, watching the warrior sleep at last. The old man had finally closed his eyes — not from exhaustion this time, but from something closer to peace. His sword lay untouched in the grass beside him.
"Does he stay?" Velen asked.
The unnamed disciple didn't look over. "He stays."
"How do you know?"
"Because he has stopped running. He has sat with his ghosts instead of fleeing them. He has said what needed saying. Now he is tired, in the good way tiredness comes after real work. And the stream is holding him."
Velen lowered himself onto the grass beside the rock, his face troubled.
"I've been here thirty years," he said. "I've listened to Zara-Chabby. I've sat in silence for hours at a time. I've repeated every riddle he ever gave me. I've tried, in every way I know how, to become like the stream. And yet — this warrior, this man who has killed and burned and done things I can barely imagine — he arrives here, sits for three days, and already seems closer to peace than I have ever once managed to get in thirty years."
The unnamed disciple turned to face him. His eyes were calm, but there was something moving behind them now that hadn't been there before the forest, before the clearing, before the child.
"You are jealous," he said.
Velen flinched. "I am — questioning."
"You are jealous," the disciple repeated, gently. "And that's a good thing. Jealousy is a teacher, Velen. It shows you exactly where you're still clinging."
Velen's jaw tightened. "I have given my entire life to this path. I have sat at Zara-Chabby's feet. I have memorized every word he ever gave me. I have—"
"You have collected," the disciple interrupted, without heat. "You have gathered his teachings the way a squirrel gathers nuts before winter. But you have never once cracked one open. You have never eaten the meat inside. You have carried his riddles in your head all these years, but you have never let a single one of them into your bones."
Velen stared at him. "That is exactly what Zara-Chabby told me. Before he left."
"Yes. And you still haven't understood it."
Velen rose to his feet, his face flushed. "Then explain it to me. Explain why a killer finds his peace in three days, while I sit in this valley for thirty years and feel nothing underneath it all but emptiness."
The unnamed disciple rose too. He was not angry. He was not impatient with him. He was simply present — more fully present than Velen had ever once seen him look.
"The old warrior found peace," he said, "because he had enemies. Real ones. Men he had actually killed. Women whose homes he had actually burned. Ghosts that visited him faithfully every single night of his life. He came here because he could no longer outrun any of them. He sat by this stream, and he let them arrive one at a time. He did not repeat old teachings at them. He did not recite a single riddle. He simply faced them, one after another, and said the only thing that ever needed saying: I am sorry."
He stepped closer.
"You have no enemies, Velen. You have never killed anyone. You have never burned a single hut. You have never done a single thing in your life that required forgiveness from another soul. So you have never once been forced to face anything real. You have sat in this valley, safe and warm and comfortable, collecting words the way a child collects pretty stones off a riverbank. And the words never changed you, because you never once actually needed them to. You have never been broken open. You have never once been forced to see yourself exactly as you really are."
Velen's eyes glistened. "So you're telling me I've wasted thirty years?"
"I'm telling you that you've spent thirty years preparing. And now, perhaps — only perhaps — you are finally ready to begin."
Velen said nothing for a long while. The stream flowed on beside them. The old warrior slept undisturbed. The other disciples moved through their small daily tasks — gathering wood, drawing water, settling one by one into the stone circle.
Finally, Velen spoke, his voice smaller than before. "What is there for me to face? I have no ghosts. No blood on my hands. I have only... myself."
The unnamed disciple nodded slowly. "That," he said, "is the hardest enemy of all to face honestly. Not the ones you kill outright. The one you simply are. The self that hides behind teachings, behind long silences, behind the comfortable, well-worn role of 'disciple.' That particular self has never once been truly challenged in your whole life. That self has never been asked to bleed for anything."
He placed a hand on Velen's shoulder.
"Stay near the old warrior. Listen to him — not to teach him anything. To learn from him instead. He has something you don't have. He has humility. He has been broken all the way through. And in the breaking, he has finally been opened. You are still unbroken, Velen. Still sealed shut. Still holding yourself together with nothing but the glue of Zara-Chabby's borrowed words."
He turned and started back toward the rock.
"Let the old warrior break you open," he said over his shoulder, without looking back. "Or you will sit in this valley for another thirty years, and still feel nothing underneath it all but the same emptiness you feel today."
Velen stood alone by the water a long while, watching the warrior sleep.
For the first time in thirty years, he did not feel, at that moment, like a disciple at all.
He felt like a child.

On the fifth day, the old warrior woke.
He woke slowly, the way a man surfaces from a very long journey. His eyes opened first. He studied the sky. He studied the stream. He studied his own hands — still empty, still trembling, though trembling considerably less than before.
He noticed Velen sitting a few paces off, watching him.
"How long did I sleep?" the warrior asked.
"A full day and a night," Velen said.
The warrior sat up. His joints cracked audibly. His back ached in a dozen old places. But there was something lighter now in his face — as though some long-carried weight had finally, quietly, been set down.
"I dreamed," he said.
"Of what?"
"The boy. The one with the birthmark. He wasn't a ghost in this dream. He was... alive. Sitting beside a stream — this stream, I think, or one very much like it. He was older than seventeen this time. Thirty, maybe. He had a child on his knee. A little girl, with the very same crescent-moon birthmark on her own cheek."
Velen waited, saying nothing.
"The boy looked at me in the dream," the warrior went on. "He didn't look afraid. He didn't look angry either. He looked... peaceful. He said, you took my life. But you did not take my daughter. She was born after I died. She carries my name. She carries my face. She carries the birthmark. You cannot kill what passes through blood."
His voice cracked.
"I woke up weeping. Not from grief this time. From relief. The boy isn't gone, Velen. He lives on in his daughter. And she will live on in her own children someday. That boy's face — the one I've seen every single night for sixty years — was never a face of death after all. It was a face of life. I simply couldn't see it, because I was always too busy staring straight at my own guilt to look past it."
Velen didn't answer right away. He didn't know what to say. The old man had just described something Velen had never once experienced himself — a full confrontation with the past that led not toward despair, but toward genuine release.
"How did you manage it?" he finally asked. "How did you finally stop running?"
The warrior looked out at the stream, its water clear now, bright with morning light.
"I didn't stop running," he said. "The stream stopped me. Or rather — I sat beside it long enough that the running itself finally started to feel absurd. I understood, sitting there, that I had been running from myself for sixty solid years. And where exactly had all that running taken me? From one war to the next. From one battle to the next. From one drink to the next. I ran across mountains. Across deserts. Across whole oceans. And at the very end of all that running — where did I actually end up?"
He paused.
"Here. Sitting beside a stream. Still carrying the exact same ghosts I started with. Still whispering the same tired prayers to a god I never really believed in to begin with. All that running had changed absolutely nothing about any of it. It had only made me tired in a new, deeper way."
He looked over at Velen.
"You've been running too, you know. Not with your feet. With your mind instead. You've been running from the one thing you've never once faced squarely — the real possibility that Zara-Chabby's teachings were never meant to be collected at all. They were meant to be lived. And you have not lived a single one of them. You have only ever repeated them back."
Velen felt the words land like a blade, sharp and precise, cutting cleanly through layers of defense he hadn't even known he was carrying.
"How do you know that?" he whispered.
"Because I'm a warrior," the old man said simply. "I know a man holding a sword he has never once drawn when I see one. You've held Zara-Chabby's words for thirty years, Velen. You have never drawn them. You have never once used them to cut through your own illusions. You've kept them sheathed. Polished. Admired from a respectful distance. But a sword that never leaves its sheath isn't a weapon at all. It's only an ornament hung on a wall."
Velen sat in silence, the old warrior's words echoing through his chest — not as an attack this time, but as something closer to an invitation.
"What would it mean," Velen asked slowly, "to actually draw it?"
The warrior reached over and picked up his own sword, the battered, rust-eaten blade that had lain untouched in the grass for five full days. He balanced it across his knees.
"This sword has killed," he said. "It has taken life, more than once, more than I can properly count. It has also protected. It has stood between the innocent and the cruel on more than one occasion. It has been a wall where there was no other wall left standing. The sword itself is not evil. The hand holding it is either evil or good, depending entirely on the man attached to that hand. The sword itself is only ever steel."
He looked at Velen directly.
"Zara-Chabby's words are exactly like this sword. Not good, and not evil in themselves. They are simply tools. You can use them to cut away your own ignorance, one layer at a time. Or you can use the very same words to build yourself a prison made of cleverness instead. You have built the prison, Velen. You have used his words for thirty years to feel wise — not to actually become wise. There is a real difference between those two things, and it is the only difference that has ever actually mattered."
Something cracked open in Velen then — not the stone wall the unnamed disciple had once described to him, but something even older. Something built long before Zara-Chabby had ever entered his life, before the valley, before he had even understood what it meant, as a much younger man, to search for anything at all.
"What do I do?" he asked.
The warrior gave a simple, human shrug — the weary shrug of a man who had answered this exact question, in one form or another, a thousand times over in his own long life.
"You sit. You listen. You wait. And when the teaching finally arrives — not the words themselves, but the actual living of them — you do not repeat it back to anyone. You become it instead."
He laid the sword back down gently in the grass.
"That's what I'm learning here, myself. That's the real reason I came. Not for answers. For enough silence, finally, to become the answer on my own."

On the sixth day, the old warrior asked to speak to the full gathering of disciples.
They assembled in the stone circle — not many now, perhaps twenty in total. The unnamed disciple sat on Zara-Chabby's rock, present not as a teacher this time, but simply as a witness. Velen sat near the front, his face drawn but his eyes wide open. Ashok sat beside him, silent as he had always been.
The warrior stood at the circle's center. His sword was not at his hip. He had left it leaning against the rock down by the stream where he had slept.
"I am not a teacher," he began. His voice was still gravel and rust, but softer now, worn smooth by days of sitting and weeping and repeating the same two words over and over. "I have been a student of war for sixty years. Now, it seems, I am a student of... this."
He gestured broadly — the stream, the cave, the open sky above them.
"I have nothing to give any of you except my own brokenness. But perhaps brokenness is its own kind of gift. Perhaps a broken shield lets in more light than a polished one ever could."
He reached into his tunic and drew out a small object — a round disc of dented, rusted metal, a crack running clean through its center. A shield once, worn strapped over the heart. Now only a relic of one.
"This shield saved my life a dozen times over, easily. Arrows. Sword strikes. A spear once that would have gone straight through my lung. But it never once saved me from myself. No shield ever built can do that. The only thing capable of saving a man from himself is sitting. Sitting beside a stream. Sitting with your own ghosts, one at a time, until you finally run out of ghosts to sit with. Sitting until the running, at long last, simply stops."
He held the broken shield up for all of them to see.
"Zara-Chabby is gone. I never once met him myself. But I have met his stream. I have met his silence. I have met, in a manner of speaking, the child who lives somewhere in the clearing, even though I never saw him with my own eyes. And I have learned exactly one thing from all of it: friendship was never about holding on to anything. It is about letting go. Letting go of the sword. Letting go of the shield. Letting go, most of all, of the story that says you are a warrior, or a disciple, or anything at all beyond simply this — a living, breathing, dying creature, sitting beside water that will go right on flowing long after every one of us is gone from this valley."
He lowered the shield slowly.
"I killed a boy when I was nineteen years old. I have carried that boy's face for sixty years since. I always believed I was carrying guilt. I understand now that I was carrying attachment instead. I was attached to the story that I was a monster, plain and simple. And that story protected me, in its own twisted way. It protected me from ever having to change. It protected me from ever having to feel anything beyond shame. Shame, it turns out, is easy. Shame is comfortable, in its own grim way. Shame is a shield that looks exactly like pain from the outside, but is really only ever another way of saying: I am not responsible for any of this."
He looked slowly around the circle.
"I am responsible. I killed that boy with my own hands. I burned that village and did nothing to stop the burning. I did those things, and no story I tell myself afterward will ever undo a single one of them. And I am also more than those things, at the same time. I am the man who finally sat beside this stream and said I am sorry to a ghost who had waited sixty years to hear it. I am the man who slept a full day and a night and dreamed of a daughter born after her own father had already died. I am the man who is learning, at the very end of his life, that forgiveness was never something you simply receive from someone else. It is something you must give — to yourself, first and always."
He set the broken shield down on the ground at his feet.
"I give this shield to the stream. I give my sword to the earth. I give my guilt to the water, freely, and ask for nothing back in return except this — this one moment, this one breath, this one chance to finally become something other than what I have spent sixty years being."
He sat down at the circle's center, cross-legged, hands resting on his knees.
"Now I will simply sit. You may stay if you wish. You may go if you wish. But I will sit, because sitting is the only thing left that I still have to learn."

That night, Velen did not sleep.
He walked down to the stream. The old warrior sat exactly where he had sat for six days now — not meditating, not praying, only sitting. His eyes were open. His breathing had gone slow and even.
Velen sat down beside him.
"I have been a disciple for thirty years," he said. "I have repeated Zara-Chabby's words to anyone who would listen. I have taught them to others who came after me. I have defended them against people who mocked them. But I have never once actually lived them. I never sat with my own ghosts, because I always believed, quite honestly, that I didn't have any."
The old warrior didn't turn his head. "Everyone has ghosts."
"Mine aren't men I killed. Mine aren't villages I burned. Mine are... smaller than that. And perhaps that is exactly why they've always been so much harder for me to see clearly."
He paused.
"I was a coward. Not in war — I've never once fought in a war in my life. I was a coward in something smaller and, I think now, more difficult: in life itself. I wanted to be a painter, when I was young. I loved color the way some men love wine. I loved the way light seemed to move across a blank canvas before I'd even touched it with a brush. But my father told me painting was for women and fools. So I set the brush down. I picked up Zara-Chabby's teachings instead. I told myself, for thirty years, that wisdom was a higher calling than art could ever be. But I was lying to myself the entire time. I was never actually seeking wisdom. I was hiding. Hiding from the fear that I wasn't good enough. Hiding from the real possibility that I might fail completely. Hiding from the simple, terrifying act of making something with my own two hands and offering it, unguarded, to the world."
His voice trembled.
"I have never made a single thing in my life. I have only ever collected. I have collected teachings. Riddles. Long silences. I have built myself a reputation as a wise man over thirty years. But I am not wise, not really. I am simply empty. Not the good kind of emptiness — not the emptiness of the stream, or the clearing. The bad kind. The emptiness of a man who has spent thirty years of his one life running as hard as he could from a paintbrush."
The old warrior was quiet a long while. Then he spoke.
"When I was a young soldier, I was afraid of the sword," he said. "Not of using it. Of holding it. My hand would shake every time I picked it up. My grip would slip at the worst possible moments. My sergeant would scream at me, you hold that sword like you're afraid of it! And he was entirely right. I was afraid. Not of the enemy standing across from me. Of the responsibility the sword itself represented. It was a thing capable of ending a whole life in a single motion. And some part of me never quite believed I had earned the right to hold something like that."
He looked over at Velen.
"You've been holding Zara-Chabby's words the exact same way all these years. With fear. With trembling. Because on some level you've always known that words, just like swords, are capable of changing things permanently. They can cut. They can wound. They can kill — not bodies, but illusions a man has spent his whole life quietly building around himself. And you've been afraid to finally draw them out, because you know that once you do, you can no longer pretend. Once the sword leaves its sheath, Velen, you are obligated to actually use it."
Velen nodded slowly, understanding arriving in him like cold water.
"The brush is your sword," the old warrior said. "You have been afraid to pick it back up for thirty years. Afraid of what you might paint being ugly. Afraid it won't be good enough by anyone's standard, least of all your own. Afraid, underneath it all, that your father might have been right about you. But your father is dead now, and you are still here. And the brush, wherever it's been all these years, is still waiting for you."
He reached down and picked up a small stick from the ground, and held it out.
"This is a brush," he said. "It has no sable bristles. It holds no paint at all. But it is a beginning. Draw something in the dirt. Anything at all. A line. A circle. A face. Do not judge what comes out. Do not compare it to anything. Simply draw."
Velen took the stick. His hand shook as he held it.
He drew a single line.
It came out crooked. It wobbled halfway through. It was nowhere close to straight.
But it was his.
He drew a second line. Then a third. Then a fourth, without quite deciding to. Before he fully understood what was happening, he had sketched the rough outline of a mountain — not a real one, not a particularly beautiful one, but a mountain that had never once existed in the world before this exact moment, when he had drawn it into being.
He looked over at the old warrior.
"I made something," he whispered.
"Yes," the warrior said. "You made something. It is not especially good. It is not especially bad either. It is simply yours. And that, in the end, is enough."

On the seventh day, something strange happened.
The disciples sat together in the stone circle, the old warrior among them, his broken shield still lying untouched in the grass where he'd left it. Velen was drawing in the dirt with his stick — not a mountain this time, but a tree, a stream, a small figure sitting on a rock.
The unnamed disciple sat on Zara-Chabby's rock, watching quietly.
The morning was still. The stream flowed. The birds had begun, at last, to sing again.
And then — they all heard it.
A laugh.
Not the old warrior's laugh. Not Velen's. Not the laugh of any disciple present in that circle.
It was a laugh they had heard once before. A laugh that belonged, somehow, to the cave itself, to the stream, to the very stones beneath their feet. A laugh both old and young at once, wise and foolish at once, entirely serious and entirely playful in the exact same breath.
The laugh of Zara-Chabby.
Everyone froze where they sat. The old warrior's hand went instinctively to his hip — but his sword was no longer there. Velen dropped his stick into the dirt. Ashok looked up sharply at the empty sky. The unnamed disciple simply closed his eyes.
The laugh came again — not from any single direction, but from every direction at once. From the water. From the open air. From the ground beneath them all.
Then, as suddenly as it had arrived, it faded.
Silence returned.
The disciples looked around at one another. Some were weeping openly. Some were laughing themselves now, a nervous, half-disbelieving laughter that was equal parts fear and something close to joy.
The old warrior spoke first. "He isn't gone."
"No," the unnamed disciple agreed, eyes still closed. "He was never gone at all. He was only ever unseen. And now, perhaps, a few of you are finally beginning to see."

That evening, the old warrior walked down to the stream one last time. He picked up his sword — the rusted, battered blade that had killed so many men, protected so many others, and been his one constant companion for sixty unbroken years.
He held it out over the moving water.
"I give you back," he said. "I don't need you anymore. Not because I've become safe, exactly. Because I am no longer afraid of being unsafe. The enemy was never out there in the world at all. The enemy was always in here."
He tapped his own chest, once.
"And that enemy — I have begun, at last, to make my peace with him. Not to defeat him outright. To befriend him instead, because he is not going anywhere, ever, whatever I might wish. He is a part of me now, permanently. The boy who killed the boy. The man who burned the village and did nothing to stop it. The old warrior who finally sat by a stream and wept until his throat went raw. They are all still me, every single one of them. And I am all of them at once. And we are, all of us together, finally tired of fighting each other."
He lowered the sword into the current. The stream accepted it without protest. The blade sank slowly, turning once in the moving water, catching the last orange light of the sun as it went.
Then it was gone.
The old warrior stood on the bank, empty-handed, for the first time in sixty years.
He did not feel powerful at that moment. He did not feel weak either. He felt, more than anything, light — as though some weight he had never fully realized he was carrying had finally, quietly, been lifted from him.
He walked back to the stone circle. He sat down among the others. He closed his eyes.
And for the first time in his entire life, he did not dream that night of the boy with the crescent-moon birthmark.
He dreamed instead of a stream. A stream flowing through a valley, past an empty cave, past a circle of old stones, past a group of people sitting together in silence. In the dream, he was not a warrior. He was not old, and he was not young either. He was simply water — flowing, accepting everything offered to it, holding nothing back, losing nothing along the way.
When he woke, the sun was already rising.
He smiled.
It was a small smile. A cracked one. A smile that had not been used, by his own reckoning, in several decades.
But it was real.

The disciples gathered one final time before the old warrior left the valley for good.
He stood at the center of the stone circle, hands empty at his sides, his face softer than it had been the morning he first arrived. The broken shield still lay on the ground nearby. No one had moved it since he'd set it down.
"I came here looking for Zara-Chabby," he said. "I never found him. But I found something better instead. I found myself — not the self I wanted to find, but the self I actually was underneath everything. The self I had buried under decades of medals and titles and the blood of strangers whose names I never learned. That self was never dead, it turns out. It was only ever waiting. Waiting for me to finally stop fighting long enough to listen to it."
He looked slowly around the circle.
"Zara-Chabby taught about friendship, I'm told. I didn't understand what that meant when I arrived here. I assumed friendship was about other people — about having someone to drink with, to fight beside, to grow old alongside. But that was never quite what he meant, was it? Friendship — real friendship, the kind worth having — is about witnessing. Witnessing yourself, first and always. Witnessing your own ghosts without flinching from a single one of them. Witnessing the boy you killed, and the woman whose home you burned, without reaching for a sword, and without running one more time."
He paused.
"That is what I learned here. Not from Zara-Chabby himself — I never once met the man. From the stream. From the silence. From the child who apparently lives somewhere in a clearing not far from here, even though I never once laid eyes on him myself. And from every one of you, who sat with me these past days, who never once judged me, who let me weep without rushing to make me stop."
He looked directly at Velen.
"You asked me once how I found my peace so quickly. The honest answer is: I didn't. I have been searching for peace for sixty long years. I did not come here to finally find it. I came here to stop searching for it entirely. And in the stopping, somehow, I found it anyway. Not as a destination reached at the end of a road. As a way of walking the road itself."
He looked to the unnamed disciple.
"You never taught me a single thing directly. You simply sat beside me. And your sitting taught me more, in the end, than a thousand carefully chosen words ever could have."
He turned to Ashok.
"You never spoke a word to me the whole time I was here. And your silence turned out to be a container large enough to hold every ounce of my grief without once overflowing."
He looked, finally, at all of them together.
"I am leaving now. Not because I am finished with any of this. Because, for the first time in sixty years, I am only just beginning. I do not know where I will walk from here. I do not know what I will do with whatever years are left to me. I only know that I will walk without a sword at my hip. I will sit beside other streams, wherever I find them. I will keep saying I am sorry to whatever ghosts still choose to visit me. And I will try, every single day that remains, to be a little less afraid than I was the day before."
He turned and walked toward the circle's edge.
No one stopped him. No one asked him to stay a moment longer than he wished to.
He walked down to the stream and stepped over it — not wading through it, not properly crossing it, simply stepping, as though the moving water were no different underfoot than the grass beside it. He walked on toward the forest, toward the north, toward the mountains he had originally come down from.
At the tree line, he stopped once and turned back.
"Thank you," he said.
Then he disappeared into the shadows between the trunks, and did not look back again.

The disciples sat together in silence a long while after he'd gone. The stream went on flowing exactly as it always had.
The broken shield lay where he had left it in the grass, rusted and dented, the crack still running straight through its center. No one picked it up. It was not theirs to claim. It belonged now to the stream. To the silence. To the memory of a man who had come looking for a teacher, and had found, in the end, only himself — which turned out, against every expectation he'd carried into the valley, to be exactly enough.
Velen picked his stick back up. He drew once more in the dirt — not a mountain this time, not a tree, not a stream.
He drew a broken shield.
And beneath it, carefully, he wrote four words:
I am also beginning.
The unnamed disciple watched him do it. He did not smile at the sight, and he did not frown either. He simply witnessed it happen, the way the stream witnessed everything that passed through it, the way the cave witnessed everything that sheltered inside it, the way the child in the clearing, wherever he was, witnessed everything without once needing to be seen doing so.
And somewhere far off — or perhaps, in truth, very close by — a laugh moved once more through the trees.
Not loud. Not soft either.
Simply present.
The laugh of Zara-Chabby.
Thus the old warrior walked on into the forest, and the disciples sat together by the stream, and the water flowed on, carrying nothing away and holding everything it had ever been given.
Thus this chapter of the old warrior comes, at last, to its close. But the stream did not stop flowing. And neither, from that morning on, did they.
`,nk=["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"];function ak({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"OF THE OLD WARRIOR",chapterText:tk,chapterTitle:"OF THE CHILD IN THE CLEARING",chapterNumber:1,bookLabel:"Book 3",chapterList:nk})}const ok=`"It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult."
 — Seneca

The forest had gone quiet.
Not the quiet of peace. The quiet of waiting. The birds had stopped their morning chorus mid-note. The wind had stilled without warning. Even the stream running past Zara-Chabby's empty cave seemed to hold its breath, as though the water itself were listening for a footstep that had not yet arrived.
Twenty-three moons had passed since the teacher walked into the trees and did not come back. Three moons had passed since the unnamed disciple had returned from the clearing, his eyes changed, his silence deeper, his laughter soft and strange in a way none of the others could name. They had watched him sit day after day on Zara-Chabby's rock, saying little, planting nothing, simply being there the way weather is there. Some disciples had left. Some had stayed. Some had begun quietly calling him "the quiet one" — not as an insult, but as a name that fit him the way an old coat fits a man who has finally stopped growing into it.
But this particular morning, something was different.
A new figure had entered the valley.

He came down from the north, where the mountains stood like broken teeth against the sky. He walked with a limp — not the limp of age, though age had certainly found him, but the limp of a man who has carried too much for too long and never once learned how to set it down. His hair was white, cropped close to a skull mapped with old scars. His face looked like a battlefield in miniature: a nose broken and badly reset, a cheekbone healed at the wrong angle, a jaw that clenched even at rest, out of habit rather than anger. His eyes were the grey of iron heated and cooled a thousand times over — hard, flat, and yet carrying, somewhere deep inside them, a flicker that refused to fully go out.
He wore no robe. He wore the leather and mail of a soldier, the mail rusted in patches, the leather cracked with years of weather. A sword hung at his hip — not ceremonial, not decorative. A sword that had been drawn in anger more times than its owner could count, wiped clean with dirt more often than with water, because water had rarely been available at the moments that mattered.
He stopped at the valley's edge. He studied the cave. He studied the stream. He studied the disciples sitting in their stone circle, heads bowed, hands empty of everything but themselves.
Then he walked forward.

Velen saw him first. Velen, who had aged twenty years in three moons — not in body, but somewhere further in, where the aging that actually counts takes place. His eyes had hollowed out. His questions had run dry. He sat in the circle most days and said nothing at all, having already said everything he knew how to say, and received back only silence for the effort.
But something stirred in him at the sight of this stranger. Not hope — hope was a luxury he had quietly stopped affording himself. Something harder. Something older. Something that remembered, distantly, that there were other ways to be a disciple than simply sitting and waiting for a man who might never return.
He stood.
"Who are you?"
The warrior stopped ten paces short of the circle. He offered no bow, no greeting. He only looked at Velen with those iron eyes.
"No one," he said. His voice was gravel dragged over rust. "A man who has lost more than he can remember. A man who has killed more than he can count. A man who has come to find Zara-Chabby."
"Zara-Chabby is gone," Velen said.
"I know."
"Then why have you come?"
The warrior lowered his eyes to the grass. For a long moment he said nothing at all. When he finally spoke again, his voice had gone quieter — softer, as though the gravel had been rained on until some of the roughness washed away.
"Because I've heard he taught something about friendship. And I have no friends left. Only enemies. Only ghosts. Only the faces of men I killed, watching me from the dark whenever I try to close my eyes."

Ashok rose from the circle's edge and came to stand beside Velen. He studied the scars, the rusted mail, the broken nose. He studied the sword.
"You've come to the wrong place," Ashok said, not unkindly. "Zara-Chabby never taught about the sword. He taught about the stream. About silence. About the light that does not deem. What could a warrior possibly take from such things?"
The warrior met his gaze without flinching. "I have spent sixty years learning how to take," he said. "I want, before the end, to learn how to keep. Not land. Not gold. Not victory. I want to learn how to keep..." He pressed a hand flat over his own chest. "This. The thing that's been dying in here. The thing I buried under all the bodies. The thing I once mistook for weakness, and now, at the very end of my life, suspect might have been the only real thing I ever carried."
The disciples exchanged glances. Seekers had come to this valley for years — some for wisdom, some for comfort, some simply because Zara-Chabby's name had reached them as a rumor in some distant market and they wanted to see if the old man was real.
This one was different.
This one had not arrived with open hands. He had arrived with fists clenched — fists that were, slowly and painfully, beginning to unclench in front of them. And in the gaps between his fingers, they saw something none of them had expected.
Tears.
Not tears of grief. Not tears of relief. The tears of a man who had not wept in sixty years and had entirely forgotten how to stop once he'd started.
He didn't wipe them away. He let them run down the scarred terrain of his cheeks, into the grey stubble of his jaw, onto the rusted mail over his chest.
"I'm not asking for your pity," he said. "I'm not even asking for your teaching. I'm asking for a place to sit. A place to be quiet. A place where no one will ever again ask me to pick up a sword."
Velen looked at Ashok. Ashok looked at Velen.
Then Velen stepped aside.
"The stream doesn't ask who you were," he said. "It only asks if you're willing to flow."

The warrior walked to the stream. He did not sit on Zara-Chabby's rock — that rock was still claimed by the unnamed disciple, who had not moved, had not spoken, had not so much as glanced at the newcomer's arrival. The warrior found a flat stone downstream instead, apart from the others, and sat.
He sat there three days.
He did not eat. He did not drink. He did not sleep. He simply sat, hands resting on his knees, eyes fixed on the water, his sword lying beside him in the grass like something already dead.
The disciples watched him from a respectful distance. Some brought food. He didn't touch it. Some brought water. He didn't drink it. Some tried speaking to him. He didn't answer.
On the third night, as the moon rose and turned the stream to silver, the unnamed disciple finally stood from Zara-Chabby's rock. He crossed the grass slowly, silently, and lowered himself to the ground beside the old warrior.
They sat together a long while in silence.
Then the unnamed disciple spoke. "You've been fighting for sixty years," he said. "Now you're fighting the silence instead. And the silence is winning."
The warrior turned his head. His iron eyes were red-rimmed, exhausted past exhaustion.
"The silence isn't my enemy," he said. "I am my own enemy. I've always been my own enemy. The men I killed were only ever mirrors."

The unnamed disciple nodded slowly. He had heard Zara-Chabby say something close to that once — that an enemy is often the truest mirror a man will ever be handed, because it shows him exactly what he is capable of. He hadn't understood it then. Sitting beside this broken warrior now, listening to that gravel-and-rust voice, he began, finally, to.
"Tell me," he said, "about the first man you killed."
The warrior flinched — not a small flinch, but a full-body one, as though the words had landed as a blow.
"Why?"
"Because you cannot sit beside this stream and keep your secrets. The stream keeps nothing. It shows everything — the mud, the fallen leaves, the dead fish, the broken branches. It doesn't choose what to reveal. It simply flows. If you want to learn anything from this place, you'll have to become like the stream yourself. You'll have to show everything."
The warrior was silent a long while. The stream carried on. The moon climbed higher. Somewhere in the trees, an owl called — once, twice, a third time.
Then he spoke.
"He was seventeen. I was nineteen. We stood on opposite sides of a hill neither of us owned, that our commanders had told us was important for reasons neither of us understood or remembered afterward. I don't recall the hill's name. I don't recall the war's name either, if I'm honest."
He paused. His hands, resting on his knees, began to tremble.
"He came over the crest at dawn. The sun sat behind him, so I couldn't see his face at first — only his shape. A boy, really, carrying a spear too long for his own arms. He saw me at the same moment. We both froze."
He closed his eyes.
"We stood like that for what felt like an hour. Maybe it was only a few seconds. Neither of us moved. Neither of us spoke. Then — I still don't know why — I took a step forward. He took one back. He was afraid. I could see it in the way he gripped that spear, too high, too tight. I should have turned around and walked back down my own side of the hill. But I was nineteen, and I'd been taught that warriors do not run."
He opened his eyes.
"I ran at him instead. He tried to turn. He tripped on a root. I put my sword through his chest before he could even cry out. He looked up at me — and that was the first time I actually saw his face. A birthmark on his left cheek, small, shaped like a crescent moon. His eyes were brown. Not the brown of earth. The brown of a young deer — startled, confused, pleading, though he never said a single word."
His voice cracked.
"He died without saying anything at all. He just... stopped. His eyes went from brown to grey to nothing. And I stood over him with my sword still in his chest, and I felt — nothing. That was the worst part of it. I had just killed a boy, and I felt absolutely nothing."
The unnamed disciple said nothing. He offered no comfort, no it was war, no you were young, no he would have killed you first. He simply sat, letting the old warrior's words drop into the silence the way stones drop into deep, still water.
After a long while, the warrior went on.
"That was the first. There were many after him. Dozens. Hundreds. I stopped counting somewhere around the third year. I stopped seeing faces at all somewhere around the fifth. They became shapes to me. Targets. Things to be removed from a field. I got good at it — very good. My commanders praised me for it. My men followed me because of it. I was given medals. Titles. Land. I was called, of all things, a hero."
He laughed — a dry, hollow sound, like bones shaken loose inside a sack.
"A hero. I killed seventeen-year-old boys on hills nobody remembers the names of anymore. I burned villages that had done nothing worse than exist in the wrong place at the wrong time. I watched women weep over their husbands' bodies, and I felt proud, because I was winning. Because I was strong. Because I was, everyone kept telling me, a warrior."
He looked at the unnamed disciple.
"And now I'm old. The war is long over. The medals have tarnished in a drawer somewhere. The titles mean nothing to anyone, least of all me. The land was sold years ago to pay for the medicine that keeps this tired heart of mine beating a little longer than it probably should. And I'm left with only this."
He tapped his chest again.
"The thing that died slowly, one kill at a time, until I stopped noticing it was dying at all. And I don't know how to bring it back."

The unnamed disciple picked a small stone up off the bank and held it out, showing it to the old man.
"This stone," he said, "was once part of a mountain. A great one — tall, proud, standing for a million years or more. Then the rain came. The wind came. The frost cracked it, season after season, until the stream finally carried the broken pieces away. Now it sits here, in my hand, small and smooth and silent."
He pressed it into the warrior's trembling palm.
"You are this stone," he said. "You were once part of something far greater than yourself. You've been broken since then. You've been carried a long way by forces you never controlled. You've been worn smooth by all of it. But you are not nothing. You are a stone that has traveled an enormous distance to arrive exactly here, at this stream, in this moment. That was never an accident. That was never simple fate either. That was choice. You chose to come here. You chose to sit. You chose, finally, to speak. Which means the thing inside you that you assumed was dead — it isn't dead at all. It's only sleeping. And sleeping things can wake."
The warrior looked down at the stone in his open palm. His iron eyes softened, just barely, just enough to notice.
"What do I do?" he whispered.
The unnamed disciple stood. "You sit. You listen. You wait. And when the memories come — the boy of seventeen, the birthmark like a crescent moon, the brown eyes going grey — you do not run from them. You do not fight them. You do not reach for your sword. You breathe. You let the memory move through you the way water moves through a stream. Then you let it go. Again, and again, and again. Until the stone finally goes smooth. Until the warrior becomes only a man. Until the man becomes..." He gestured at the stream, the cave, the moon overhead, the whole quiet night around them. "This. A part of everything. No longer fighting anything. No longer running from anything. Simply here."

The old warrior did not sleep that night. But he did not fight the memories either.
He sat beside the stream, the stone still warm in his palm, and let them come.
The boy came first — the one with the crescent-moon birthmark. He stood at the water's edge, saying nothing, simply looking at the old man with those eyes that had once turned from brown to grey. The warrior wanted to look away. Wanted to close his eyes. Wanted, more than anything, to reach for a sword the boy did not carry and had never truly threatened him with — because the boy in front of him now was a ghost, and ghosts carry no weapons at all.
But he remembered the disciple's words. You do not run. You breathe.
He breathed.
The boy did not vanish. But he changed. His face — frozen for sixty years at the exact moment of death, caught in shock and fear and the first flicker of pain — softened in front of him. He was no longer only the boy the warrior had killed on a nameless hill. He was simply a boy. One who had been in the wrong place, at the wrong hour, on the wrong morning of his short life. A boy who had a mother somewhere. A father, likely. Perhaps a sister who braided her own hair the way sisters do. A boy who would never grow old, never marry, never sit beside a stream trying to remember how to feel anything at all.
"I'm sorry," the old warrior whispered.
The boy tilted his head. He didn't speak. He didn't need to. The apology hung there in the air between them, small and fragile and entirely inadequate to the size of what it was trying to address.
But it was something.
The warrior had never once said those words to anyone in sixty years. He had never even said them to himself. He had buried the boy under decades of pride and duty and the old lie that warriors simply do not feel things. And now, for the first time in six decades, he had finally said them.
I am sorry.
The boy nodded once. Then he turned and walked into the stream. The water did not part for him. He simply entered it, and was gone.
The old warrior wept.

The second memory arrived an hour later. A woman this time — not a soldier, not an enemy in any formal sense. A woman whose village he had burned. He hadn't killed her directly. He had only stood outside her hut while his men set the thatch alight. He had heard her screaming from inside. He had done nothing at all to stop it.
She stood now at the stream's edge, her clothes singed, her face black with old soot. She didn't look at him with hatred. She looked at him with something considerably worse. Disappointment.
"You were supposed to protect," she said. "That is what warriors are for. To protect. Not to burn. Not to kill. To protect."
He wanted to argue with her. Wanted to say he was following orders. That he had been young. That war is chaos and chaos forgives nothing. But the words died somewhere in his throat before he could shape them, because she was right, and some part of him had known it was true for sixty years without ever once allowing himself to hear it said aloud. He had forgotten, somewhere along the way, what warriors were actually meant to be for. He had let protection curdle slowly into destruction. He had let strength curdle into cruelty, one small permission at a time.
"I'm sorry," he said again.
She looked at him a long moment. Then she too walked into the stream, and was gone.
One by one after that, the memories came. Dozens of them. Hundreds. Each one a face, a name he had never once bothered to learn, a life cut short before it had properly begun. Each one a stone he had carried for decades, pretending the whole time it weighed nothing at all.
And each time, he said the same two words.
I am sorry.
He said them until his throat went raw. He said them until the words themselves lost all their ordinary meaning, and then — miraculously — found a deeper one underneath. Not a meaning about guilt or shame anymore, but about recognition. Recognition that he had been wrong. Recognition that the boy with the crescent-moon birthmark had been a person, and not merely a target. Recognition that the woman in the burning hut had been a mother, a daughter, an entire human being with her own dreams and fears and a voice that had deserved, all along, to be heard rather than silenced.
He said I am sorry until the words became something closer to a prayer.
When dawn finally broke, the stream was still flowing, the stone was still warm in his hand, and the old warrior was still sitting exactly where he had been for three days. But something in him had changed.
His eyes were no longer iron.
They were water.

On the fourth day, Velen sought out the unnamed disciple.
He found him on Zara-Chabby's rock, watching the warrior sleep at last. The old man had finally closed his eyes — not from exhaustion this time, but from something closer to peace. His sword lay untouched in the grass beside him.
"Does he stay?" Velen asked.
The unnamed disciple didn't look over. "He stays."
"How do you know?"
"Because he has stopped running. He has sat with his ghosts instead of fleeing them. He has said what needed saying. Now he is tired, in the good way tiredness comes after real work. And the stream is holding him."
Velen lowered himself onto the grass beside the rock, his face troubled.
"I've been here thirty years," he said. "I've listened to Zara-Chabby. I've sat in silence for hours at a time. I've repeated every riddle he ever gave me. I've tried, in every way I know how, to become like the stream. And yet — this warrior, this man who has killed and burned and done things I can barely imagine — he arrives here, sits for three days, and already seems closer to peace than I have ever once managed to get in thirty years."
The unnamed disciple turned to face him. His eyes were calm, but there was something moving behind them now that hadn't been there before the forest, before the clearing, before the child.
"You are jealous," he said.
Velen flinched. "I am — questioning."
"You are jealous," the disciple repeated, gently. "And that's a good thing. Jealousy is a teacher, Velen. It shows you exactly where you're still clinging."
Velen's jaw tightened. "I have given my entire life to this path. I have sat at Zara-Chabby's feet. I have memorized every word he ever gave me. I have—"
"You have collected," the disciple interrupted, without heat. "You have gathered his teachings the way a squirrel gathers nuts before winter. But you have never once cracked one open. You have never eaten the meat inside. You have carried his riddles in your head all these years, but you have never let a single one of them into your bones."
Velen stared at him. "That is exactly what Zara-Chabby told me. Before he left."
"Yes. And you still haven't understood it."
Velen rose to his feet, his face flushed. "Then explain it to me. Explain why a killer finds his peace in three days, while I sit in this valley for thirty years and feel nothing underneath it all but emptiness."
The unnamed disciple rose too. He was not angry. He was not impatient with him. He was simply present — more fully present than Velen had ever once seen him look.
"The old warrior found peace," he said, "because he had enemies. Real ones. Men he had actually killed. Women whose homes he had actually burned. Ghosts that visited him faithfully every single night of his life. He came here because he could no longer outrun any of them. He sat by this stream, and he let them arrive one at a time. He did not repeat old teachings at them. He did not recite a single riddle. He simply faced them, one after another, and said the only thing that ever needed saying: I am sorry."
He stepped closer.
"You have no enemies, Velen. You have never killed anyone. You have never burned a single hut. You have never done a single thing in your life that required forgiveness from another soul. So you have never once been forced to face anything real. You have sat in this valley, safe and warm and comfortable, collecting words the way a child collects pretty stones off a riverbank. And the words never changed you, because you never once actually needed them to. You have never been broken open. You have never once been forced to see yourself exactly as you really are."
Velen's eyes glistened. "So you're telling me I've wasted thirty years?"
"I'm telling you that you've spent thirty years preparing. And now, perhaps — only perhaps — you are finally ready to begin."
Velen said nothing for a long while. The stream flowed on beside them. The old warrior slept undisturbed. The other disciples moved through their small daily tasks — gathering wood, drawing water, settling one by one into the stone circle.
Finally, Velen spoke, his voice smaller than before. "What is there for me to face? I have no ghosts. No blood on my hands. I have only... myself."
The unnamed disciple nodded slowly. "That," he said, "is the hardest enemy of all to face honestly. Not the ones you kill outright. The one you simply are. The self that hides behind teachings, behind long silences, behind the comfortable, well-worn role of 'disciple.' That particular self has never once been truly challenged in your whole life. That self has never been asked to bleed for anything."
He placed a hand on Velen's shoulder.
"Stay near the old warrior. Listen to him — not to teach him anything. To learn from him instead. He has something you don't have. He has humility. He has been broken all the way through. And in the breaking, he has finally been opened. You are still unbroken, Velen. Still sealed shut. Still holding yourself together with nothing but the glue of Zara-Chabby's borrowed words."
He turned and started back toward the rock.
"Let the old warrior break you open," he said over his shoulder, without looking back. "Or you will sit in this valley for another thirty years, and still feel nothing underneath it all but the same emptiness you feel today."
Velen stood alone by the water a long while, watching the warrior sleep.
For the first time in thirty years, he did not feel, at that moment, like a disciple at all.
He felt like a child.

On the fifth day, the old warrior woke.
He woke slowly, the way a man surfaces from a very long journey. His eyes opened first. He studied the sky. He studied the stream. He studied his own hands — still empty, still trembling, though trembling considerably less than before.
He noticed Velen sitting a few paces off, watching him.
"How long did I sleep?" the warrior asked.
"A full day and a night," Velen said.
The warrior sat up. His joints cracked audibly. His back ached in a dozen old places. But there was something lighter now in his face — as though some long-carried weight had finally, quietly, been set down.
"I dreamed," he said.
"Of what?"
"The boy. The one with the birthmark. He wasn't a ghost in this dream. He was... alive. Sitting beside a stream — this stream, I think, or one very much like it. He was older than seventeen this time. Thirty, maybe. He had a child on his knee. A little girl, with the very same crescent-moon birthmark on her own cheek."
Velen waited, saying nothing.
"The boy looked at me in the dream," the warrior went on. "He didn't look afraid. He didn't look angry either. He looked... peaceful. He said, you took my life. But you did not take my daughter. She was born after I died. She carries my name. She carries my face. She carries the birthmark. You cannot kill what passes through blood."
His voice cracked.
"I woke up weeping. Not from grief this time. From relief. The boy isn't gone, Velen. He lives on in his daughter. And she will live on in her own children someday. That boy's face — the one I've seen every single night for sixty years — was never a face of death after all. It was a face of life. I simply couldn't see it, because I was always too busy staring straight at my own guilt to look past it."
Velen didn't answer right away. He didn't know what to say. The old man had just described something Velen had never once experienced himself — a full confrontation with the past that led not toward despair, but toward genuine release.
"How did you manage it?" he finally asked. "How did you finally stop running?"
The warrior looked out at the stream, its water clear now, bright with morning light.
"I didn't stop running," he said. "The stream stopped me. Or rather — I sat beside it long enough that the running itself finally started to feel absurd. I understood, sitting there, that I had been running from myself for sixty solid years. And where exactly had all that running taken me? From one war to the next. From one battle to the next. From one drink to the next. I ran across mountains. Across deserts. Across whole oceans. And at the very end of all that running — where did I actually end up?"
He paused.
"Here. Sitting beside a stream. Still carrying the exact same ghosts I started with. Still whispering the same tired prayers to a god I never really believed in to begin with. All that running had changed absolutely nothing about any of it. It had only made me tired in a new, deeper way."
He looked over at Velen.
"You've been running too, you know. Not with your feet. With your mind instead. You've been running from the one thing you've never once faced squarely — the real possibility that Zara-Chabby's teachings were never meant to be collected at all. They were meant to be lived. And you have not lived a single one of them. You have only ever repeated them back."
Velen felt the words land like a blade, sharp and precise, cutting cleanly through layers of defense he hadn't even known he was carrying.
"How do you know that?" he whispered.
"Because I'm a warrior," the old man said simply. "I know a man holding a sword he has never once drawn when I see one. You've held Zara-Chabby's words for thirty years, Velen. You have never drawn them. You have never once used them to cut through your own illusions. You've kept them sheathed. Polished. Admired from a respectful distance. But a sword that never leaves its sheath isn't a weapon at all. It's only an ornament hung on a wall."
Velen sat in silence, the old warrior's words echoing through his chest — not as an attack this time, but as something closer to an invitation.
"What would it mean," Velen asked slowly, "to actually draw it?"
The warrior reached over and picked up his own sword, the battered, rust-eaten blade that had lain untouched in the grass for five full days. He balanced it across his knees.
"This sword has killed," he said. "It has taken life, more than once, more than I can properly count. It has also protected. It has stood between the innocent and the cruel on more than one occasion. It has been a wall where there was no other wall left standing. The sword itself is not evil. The hand holding it is either evil or good, depending entirely on the man attached to that hand. The sword itself is only ever steel."
He looked at Velen directly.
"Zara-Chabby's words are exactly like this sword. Not good, and not evil in themselves. They are simply tools. You can use them to cut away your own ignorance, one layer at a time. Or you can use the very same words to build yourself a prison made of cleverness instead. You have built the prison, Velen. You have used his words for thirty years to feel wise — not to actually become wise. There is a real difference between those two things, and it is the only difference that has ever actually mattered."
Something cracked open in Velen then — not the stone wall the unnamed disciple had once described to him, but something even older. Something built long before Zara-Chabby had ever entered his life, before the valley, before he had even understood what it meant, as a much younger man, to search for anything at all.
"What do I do?" he asked.
The warrior gave a simple, human shrug — the weary shrug of a man who had answered this exact question, in one form or another, a thousand times over in his own long life.
"You sit. You listen. You wait. And when the teaching finally arrives — not the words themselves, but the actual living of them — you do not repeat it back to anyone. You become it instead."
He laid the sword back down gently in the grass.
"That's what I'm learning here, myself. That's the real reason I came. Not for answers. For enough silence, finally, to become the answer on my own."

On the sixth day, the old warrior asked to speak to the full gathering of disciples.
They assembled in the stone circle — not many now, perhaps twenty in total. The unnamed disciple sat on Zara-Chabby's rock, present not as a teacher this time, but simply as a witness. Velen sat near the front, his face drawn but his eyes wide open. Ashok sat beside him, silent as he had always been.
The warrior stood at the circle's center. His sword was not at his hip. He had left it leaning against the rock down by the stream where he had slept.
"I am not a teacher," he began. His voice was still gravel and rust, but softer now, worn smooth by days of sitting and weeping and repeating the same two words over and over. "I have been a student of war for sixty years. Now, it seems, I am a student of... this."
He gestured broadly — the stream, the cave, the open sky above them.
"I have nothing to give any of you except my own brokenness. But perhaps brokenness is its own kind of gift. Perhaps a broken shield lets in more light than a polished one ever could."
He reached into his tunic and drew out a small object — a round disc of dented, rusted metal, a crack running clean through its center. A shield once, worn strapped over the heart. Now only a relic of one.
"This shield saved my life a dozen times over, easily. Arrows. Sword strikes. A spear once that would have gone straight through my lung. But it never once saved me from myself. No shield ever built can do that. The only thing capable of saving a man from himself is sitting. Sitting beside a stream. Sitting with your own ghosts, one at a time, until you finally run out of ghosts to sit with. Sitting until the running, at long last, simply stops."
He held the broken shield up for all of them to see.
"Zara-Chabby is gone. I never once met him myself. But I have met his stream. I have met his silence. I have met, in a manner of speaking, the child who lives somewhere in the clearing, even though I never saw him with my own eyes. And I have learned exactly one thing from all of it: friendship was never about holding on to anything. It is about letting go. Letting go of the sword. Letting go of the shield. Letting go, most of all, of the story that says you are a warrior, or a disciple, or anything at all beyond simply this — a living, breathing, dying creature, sitting beside water that will go right on flowing long after every one of us is gone from this valley."
He lowered the shield slowly.
"I killed a boy when I was nineteen years old. I have carried that boy's face for sixty years since. I always believed I was carrying guilt. I understand now that I was carrying attachment instead. I was attached to the story that I was a monster, plain and simple. And that story protected me, in its own twisted way. It protected me from ever having to change. It protected me from ever having to feel anything beyond shame. Shame, it turns out, is easy. Shame is comfortable, in its own grim way. Shame is a shield that looks exactly like pain from the outside, but is really only ever another way of saying: I am not responsible for any of this."
He looked slowly around the circle.
"I am responsible. I killed that boy with my own hands. I burned that village and did nothing to stop the burning. I did those things, and no story I tell myself afterward will ever undo a single one of them. And I am also more than those things, at the same time. I am the man who finally sat beside this stream and said I am sorry to a ghost who had waited sixty years to hear it. I am the man who slept a full day and a night and dreamed of a daughter born after her own father had already died. I am the man who is learning, at the very end of his life, that forgiveness was never something you simply receive from someone else. It is something you must give — to yourself, first and always."
He set the broken shield down on the ground at his feet.
"I give this shield to the stream. I give my sword to the earth. I give my guilt to the water, freely, and ask for nothing back in return except this — this one moment, this one breath, this one chance to finally become something other than what I have spent sixty years being."
He sat down at the circle's center, cross-legged, hands resting on his knees.
"Now I will simply sit. You may stay if you wish. You may go if you wish. But I will sit, because sitting is the only thing left that I still have to learn."

That night, Velen did not sleep.
He walked down to the stream. The old warrior sat exactly where he had sat for six days now — not meditating, not praying, only sitting. His eyes were open. His breathing had gone slow and even.
Velen sat down beside him.
"I have been a disciple for thirty years," he said. "I have repeated Zara-Chabby's words to anyone who would listen. I have taught them to others who came after me. I have defended them against people who mocked them. But I have never once actually lived them. I never sat with my own ghosts, because I always believed, quite honestly, that I didn't have any."
The old warrior didn't turn his head. "Everyone has ghosts."
"Mine aren't men I killed. Mine aren't villages I burned. Mine are... smaller than that. And perhaps that is exactly why they've always been so much harder for me to see clearly."
He paused.
"I was a coward. Not in war — I've never once fought in a war in my life. I was a coward in something smaller and, I think now, more difficult: in life itself. I wanted to be a painter, when I was young. I loved color the way some men love wine. I loved the way light seemed to move across a blank canvas before I'd even touched it with a brush. But my father told me painting was for women and fools. So I set the brush down. I picked up Zara-Chabby's teachings instead. I told myself, for thirty years, that wisdom was a higher calling than art could ever be. But I was lying to myself the entire time. I was never actually seeking wisdom. I was hiding. Hiding from the fear that I wasn't good enough. Hiding from the real possibility that I might fail completely. Hiding from the simple, terrifying act of making something with my own two hands and offering it, unguarded, to the world."
His voice trembled.
"I have never made a single thing in my life. I have only ever collected. I have collected teachings. Riddles. Long silences. I have built myself a reputation as a wise man over thirty years. But I am not wise, not really. I am simply empty. Not the good kind of emptiness — not the emptiness of the stream, or the clearing. The bad kind. The emptiness of a man who has spent thirty years of his one life running as hard as he could from a paintbrush."
The old warrior was quiet a long while. Then he spoke.
"When I was a young soldier, I was afraid of the sword," he said. "Not of using it. Of holding it. My hand would shake every time I picked it up. My grip would slip at the worst possible moments. My sergeant would scream at me, you hold that sword like you're afraid of it! And he was entirely right. I was afraid. Not of the enemy standing across from me. Of the responsibility the sword itself represented. It was a thing capable of ending a whole life in a single motion. And some part of me never quite believed I had earned the right to hold something like that."
He looked over at Velen.
"You've been holding Zara-Chabby's words the exact same way all these years. With fear. With trembling. Because on some level you've always known that words, just like swords, are capable of changing things permanently. They can cut. They can wound. They can kill — not bodies, but illusions a man has spent his whole life quietly building around himself. And you've been afraid to finally draw them out, because you know that once you do, you can no longer pretend. Once the sword leaves its sheath, Velen, you are obligated to actually use it."
Velen nodded slowly, understanding arriving in him like cold water.
"The brush is your sword," the old warrior said. "You have been afraid to pick it back up for thirty years. Afraid of what you might paint being ugly. Afraid it won't be good enough by anyone's standard, least of all your own. Afraid, underneath it all, that your father might have been right about you. But your father is dead now, and you are still here. And the brush, wherever it's been all these years, is still waiting for you."
He reached down and picked up a small stick from the ground, and held it out.
"This is a brush," he said. "It has no sable bristles. It holds no paint at all. But it is a beginning. Draw something in the dirt. Anything at all. A line. A circle. A face. Do not judge what comes out. Do not compare it to anything. Simply draw."
Velen took the stick. His hand shook as he held it.
He drew a single line.
It came out crooked. It wobbled halfway through. It was nowhere close to straight.
But it was his.
He drew a second line. Then a third. Then a fourth, without quite deciding to. Before he fully understood what was happening, he had sketched the rough outline of a mountain — not a real one, not a particularly beautiful one, but a mountain that had never once existed in the world before this exact moment, when he had drawn it into being.
He looked over at the old warrior.
"I made something," he whispered.
"Yes," the warrior said. "You made something. It is not especially good. It is not especially bad either. It is simply yours. And that, in the end, is enough."

On the seventh day, something strange happened.
The disciples sat together in the stone circle, the old warrior among them, his broken shield still lying untouched in the grass where he'd left it. Velen was drawing in the dirt with his stick — not a mountain this time, but a tree, a stream, a small figure sitting on a rock.
The unnamed disciple sat on Zara-Chabby's rock, watching quietly.
The morning was still. The stream flowed. The birds had begun, at last, to sing again.
And then — they all heard it.
A laugh.
Not the old warrior's laugh. Not Velen's. Not the laugh of any disciple present in that circle.
It was a laugh they had heard once before. A laugh that belonged, somehow, to the cave itself, to the stream, to the very stones beneath their feet. A laugh both old and young at once, wise and foolish at once, entirely serious and entirely playful in the exact same breath.
The laugh of Zara-Chabby.
Everyone froze where they sat. The old warrior's hand went instinctively to his hip — but his sword was no longer there. Velen dropped his stick into the dirt. Ashok looked up sharply at the empty sky. The unnamed disciple simply closed his eyes.
The laugh came again — not from any single direction, but from every direction at once. From the water. From the open air. From the ground beneath them all.
Then, as suddenly as it had arrived, it faded.
Silence returned.
The disciples looked around at one another. Some were weeping openly. Some were laughing themselves now, a nervous, half-disbelieving laughter that was equal parts fear and something close to joy.
The old warrior spoke first. "He isn't gone."
"No," the unnamed disciple agreed, eyes still closed. "He was never gone at all. He was only ever unseen. And now, perhaps, a few of you are finally beginning to see."

That evening, the old warrior walked down to the stream one last time. He picked up his sword — the rusted, battered blade that had killed so many men, protected so many others, and been his one constant companion for sixty unbroken years.
He held it out over the moving water.
"I give you back," he said. "I don't need you anymore. Not because I've become safe, exactly. Because I am no longer afraid of being unsafe. The enemy was never out there in the world at all. The enemy was always in here."
He tapped his own chest, once.
"And that enemy — I have begun, at last, to make my peace with him. Not to defeat him outright. To befriend him instead, because he is not going anywhere, ever, whatever I might wish. He is a part of me now, permanently. The boy who killed the boy. The man who burned the village and did nothing to stop it. The old warrior who finally sat by a stream and wept until his throat went raw. They are all still me, every single one of them. And I am all of them at once. And we are, all of us together, finally tired of fighting each other."
He lowered the sword into the current. The stream accepted it without protest. The blade sank slowly, turning once in the moving water, catching the last orange light of the sun as it went.
Then it was gone.
The old warrior stood on the bank, empty-handed, for the first time in sixty years.
He did not feel powerful at that moment. He did not feel weak either. He felt, more than anything, light — as though some weight he had never fully realized he was carrying had finally, quietly, been lifted from him.
He walked back to the stone circle. He sat down among the others. He closed his eyes.
And for the first time in his entire life, he did not dream that night of the boy with the crescent-moon birthmark.
He dreamed instead of a stream. A stream flowing through a valley, past an empty cave, past a circle of old stones, past a group of people sitting together in silence. In the dream, he was not a warrior. He was not old, and he was not young either. He was simply water — flowing, accepting everything offered to it, holding nothing back, losing nothing along the way.
When he woke, the sun was already rising.
He smiled.
It was a small smile. A cracked one. A smile that had not been used, by his own reckoning, in several decades.
But it was real.

The disciples gathered one final time before the old warrior left the valley for good.
He stood at the center of the stone circle, hands empty at his sides, his face softer than it had been the morning he first arrived. The broken shield still lay on the ground nearby. No one had moved it since he'd set it down.
"I came here looking for Zara-Chabby," he said. "I never found him. But I found something better instead. I found myself — not the self I wanted to find, but the self I actually was underneath everything. The self I had buried under decades of medals and titles and the blood of strangers whose names I never learned. That self was never dead, it turns out. It was only ever waiting. Waiting for me to finally stop fighting long enough to listen to it."
He looked slowly around the circle.
"Zara-Chabby taught about friendship, I'm told. I didn't understand what that meant when I arrived here. I assumed friendship was about other people — about having someone to drink with, to fight beside, to grow old alongside. But that was never quite what he meant, was it? Friendship — real friendship, the kind worth having — is about witnessing. Witnessing yourself, first and always. Witnessing your own ghosts without flinching from a single one of them. Witnessing the boy you killed, and the woman whose home you burned, without reaching for a sword, and without running one more time."
He paused.
"That is what I learned here. Not from Zara-Chabby himself — I never once met the man. From the stream. From the silence. From the child who apparently lives somewhere in a clearing not far from here, even though I never once laid eyes on him myself. And from every one of you, who sat with me these past days, who never once judged me, who let me weep without rushing to make me stop."
He looked directly at Velen.
"You asked me once how I found my peace so quickly. The honest answer is: I didn't. I have been searching for peace for sixty long years. I did not come here to finally find it. I came here to stop searching for it entirely. And in the stopping, somehow, I found it anyway. Not as a destination reached at the end of a road. As a way of walking the road itself."
He looked to the unnamed disciple.
"You never taught me a single thing directly. You simply sat beside me. And your sitting taught me more, in the end, than a thousand carefully chosen words ever could have."
He turned to Ashok.
"You never spoke a word to me the whole time I was here. And your silence turned out to be a container large enough to hold every ounce of my grief without once overflowing."
He looked, finally, at all of them together.
"I am leaving now. Not because I am finished with any of this. Because, for the first time in sixty years, I am only just beginning. I do not know where I will walk from here. I do not know what I will do with whatever years are left to me. I only know that I will walk without a sword at my hip. I will sit beside other streams, wherever I find them. I will keep saying I am sorry to whatever ghosts still choose to visit me. And I will try, every single day that remains, to be a little less afraid than I was the day before."
He turned and walked toward the circle's edge.
No one stopped him. No one asked him to stay a moment longer than he wished to.
He walked down to the stream and stepped over it — not wading through it, not properly crossing it, simply stepping, as though the moving water were no different underfoot than the grass beside it. He walked on toward the forest, toward the north, toward the mountains he had originally come down from.
At the tree line, he stopped once and turned back.
"Thank you," he said.
Then he disappeared into the shadows between the trunks, and did not look back again.

The disciples sat together in silence a long while after he'd gone. The stream went on flowing exactly as it always had.
The broken shield lay where he had left it in the grass, rusted and dented, the crack still running straight through its center. No one picked it up. It was not theirs to claim. It belonged now to the stream. To the silence. To the memory of a man who had come looking for a teacher, and had found, in the end, only himself — which turned out, against every expectation he'd carried into the valley, to be exactly enough.
Velen picked his stick back up. He drew once more in the dirt — not a mountain this time, not a tree, not a stream.
He drew a broken shield.
And beneath it, carefully, he wrote four words:
I am also beginning.
The unnamed disciple watched him do it. He did not smile at the sight, and he did not frown either. He simply witnessed it happen, the way the stream witnessed everything that passed through it, the way the cave witnessed everything that sheltered inside it, the way the child in the clearing, wherever he was, witnessed everything without once needing to be seen doing so.
And somewhere far off — or perhaps, in truth, very close by — a laugh moved once more through the trees.
Not loud. Not soft either.
Simply present.
The laugh of Zara-Chabby.
Thus the old warrior walked on into the forest, and the disciples sat together by the stream, and the water flowed on, carrying nothing away and holding everything it had ever been given.
Thus this chapter of the old warrior comes, at last, to its close. But the stream did not stop flowing. And neither, from that morning on, did they.
`,ik=["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"];function sk({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:ok,chapterTitle:"OF THE OLD WARRIOR",chapterNumber:2,bookLabel:"Book 3",chapterList:ik})}const hk=`"The wound is the place where the light enters you."
 — Rumi

Noon came to Madasara like a held breath finally released.
The sun stood directly overhead, white and merciless, casting no shadows anywhere in the town. The dust in the streets glittered like crushed mica. The donkeys had given up and gone to sleep in their stalls. The dogs lay panting in the shade under the clay eaves. Even the children had abandoned their games, driven indoors by a heat that felt less like weather and more like judgment passed down from somewhere higher up.
It had been twenty-three moons since Zara-Chabby walked into the forest and did not return.
Twenty-three moons since the old teacher vanished from the stream, from the cave, from the stone circle where he had delivered his last teaching. Twenty-three moons since his disciples had gathered in confusion — some weeping, some furious, some sitting in stunned silence as the sun went down over a valley that had, until that evening, been the only home most of them still remembered clearly.
And now, at last, the town was buzzing.
Not with grief. Not with reverence. With talk.

The marketplace of Madasara was a small, dusty square ringed by tamarind trees. On most days it was quiet — a few women selling vegetables, a few men trading bolts of cloth, an old potter shaping clay on a wheel that squeaked like a restless bird complaining about the heat.
Today, the square was full.
Farmers had left their fields standing. Herders had left their flocks to graze unwatched. Weavers had abandoned their looms mid-thread. They stood in clusters now, faces shadowed under wide straw hats, voices rising and falling like a sea that had suddenly remembered, after a long stillness, how to move.
"Gone," said a blacksmith named Koran, his forearms scarred silver from decades of sparks, his beard singed short at one edge from standing too close to his own forge for too many years. "Just — gone. Walked into the trees and never came back out the other side."
"My cousin's wife's brother saw him do it," said a woman selling limes from a woven basket. "Saw it with her own eyes. He was standing in the stream, and then—"
"Then what?"
"Then he stepped into the water. Not waded in. Stepped — like a man stepping through a doorway. And the water closed clean over his head, and he was simply gone."
A murmur ran through the crowd at that. Some crossed their fingers against ill luck. Some spat in the dust. Some only shook their heads, as though the story were too strange to believe outright and too strange, at the same time, to easily dismiss.

Koran laughed — a hard, flat sound, like a hammer striking cold iron on a morning when the fire hasn't caught yet.
"Stepped into the water," he repeated. "And it closed over his head, and he was gone. And you believe this?"
The lime seller drew herself up. "I believe my cousin's wife's brother. He has never once lied to me."
"He has never lied to you," Koran said. "But perhaps he lied to himself first. Perhaps he saw a shadow on the water and decided it was a man. Perhaps he'd had one too many cups of palm wine that afternoon. Perhaps—"
"Perhaps," said a new voice, cutting cleanly through his sentence, "you are afraid."
The crowd parted.
A young woman stepped forward — tall, her dark skin gleaming like polished mahogany in the noon glare, her eyes the grey-green of a stream after rain, deep enough that no one standing near her could quite read what moved behind them. She wore a simple white robe. Her feet were bare. Her hands carried nothing at all.
Her name was Sira. She belonged to no one's discipleship. She had never once sat at Zara-Chabby's feet. She had barely seen him at all, in fact — only once, from a distance, as a child, when he had passed through this same marketplace buying nothing, selling nothing, simply passing through on some errand only he understood.
But she remembered his eyes. She remembered exactly the way he had looked at her that day — not as a child to be humored, not as a girl to be overlooked, but as a being. As though he had genuinely seen her, and had found, in the seeing, that she was worth the trouble of it.
She had never once forgotten that look.

Koran frowned at her. "Afraid? I am not afraid of anything. I am a blacksmith. I work with fire all day. I shape iron with my bare hands. What exactly do I have to fear from an old man who talks to streams?"
Sira tilted her head slightly. "You fear that he was real. You fear that what he taught was true. You fear that his disappearance means something — something you would rather not have to understand."
The crowd went quieter around them. Even the donkeys, half-asleep in their stalls, seemed to lean an ear closer.
Koran's face reddened. "I fear nothing at all. I only say what is plain in front of everyone. The old man is gone. He left. He abandoned every one of his disciples without a word of warning. He walked into the forest and simply did not come back out. That is not wisdom, girl. That is cowardice."
Sira did not flinch. "You do not know what you're saying."
"And you do?" He stepped closer, close enough that his shadow fell across her face. He was a large man, broad as an ox across the shoulders, and he had long since learned to use his size the way some men use clever words — to intimidate, to dominate, to win an argument before it had properly begun.
But Sira did not step back from him.
"I know," she said, quietly enough that the whole square had to lean in to catch it, "that Zara-Chabby taught one thing above every other thing he ever said. He taught that friendship was never about holding on. It is about letting go. He did not abandon his disciples, blacksmith. He released them. He trusted them to finally stand on their own feet. And you — you, who never once sat at his feet, who never once heard his actual voice, who never once felt the particular weight of his silence — you call him a coward for it."
She smiled. It was not, by any measure, a kind smile.
"That is the cowardice standing in this square today. Not his. Yours."

The crowd held its breath as one.
Koran's fists clenched at his sides. His jaw tightened until the muscle stood out along his cheek. For one long moment it seemed genuinely possible he might strike her. The air between them thickened, charged, electric in a way the noon heat alone couldn't account for.
Then he laughed again — but differently this time. Softer. Almost, though he'd have denied it to his last breath, uncertain.
"You speak well," he said, "for a woman who sells nothing, owns nothing, and knows nothing at all."
"I know one thing," Sira said. "I know the stream still flows. The cave still stands. The stone circle is still there, exactly where it always was. And every single morning, the disciples sit beside that water and wait. Not for Zara-Chabby to come walking back out of the trees. For themselves to finally arrive."
She turned and walked away through the crowd, which parted for her the way water parts for a stone dropped into it — not gladly, but without any real choice in the matter.
Koran watched her go. His fists slowly unclenched. His jaw slowly relaxed.
He did not know why, exactly, but for the first time in longer than he could easily account for, he felt the faint stirring of something he had genuinely forgotten he was capable of feeling.
A question.

In the cave by the stream, the unnamed disciple sat on Zara-Chabby's rock.
He had not moved from it in seven days. Not because he was meditating in any formal sense. Not because he was fasting on principle. Because he had finally, fully understood something Zara-Chabby had tried, unsuccessfully, to teach him thirty years earlier: sitting is not waiting. Sitting is arriving.
His body had thinned considerably. His beard had grown long and unruly. His eyes — once bright with a hunger for answers that had burned in him for three decades — had gone soft. Soft as water. Soft as moonlight on still ground. Soft as the particular space that lives between one breath and the next one.
The other disciples had stopped trying to understand him some time ago. They brought him water and left it near the rock. Sometimes he drank it. Sometimes he did not. It no longer seemed to matter much either way.
Velen sat nearby, drawing in the dirt with his familiar stick. His drawings had changed again in recent days. No longer mountains, no longer trees, no longer broken shields. Now they were faces. The faces of the other disciples. The face of the old warrior who had come and gone. The faces of strangers he'd glimpsed once in the marketplace and never spoken to. And at the center of every single face he drew, without exception, he sketched the same small detail: a circle, left open at the bottom, like a cup set out and waiting to be filled.
He didn't know why he kept drawing it. He only knew, in some place words hadn't quite reached yet, that it felt true.

Ashok found him there that afternoon.
"You've been drawing for forty days now," Ashok said.
Velen didn't look up from the dirt. "Yes."
"What is it you're drawing?"
"The space where something is missing."
Ashok sat down beside him and watched the stick move — sure now, confident, no longer trembling the way it had on that first crooked mountain weeks earlier.
"You've changed," Ashok said.
"Yes."
"The old warrior broke something loose in you."
"Yes."
"And now?"
Velen paused his drawing. He looked down at the faces scattered across the dirt around him — every open circle, every waiting cup.
"Now," he said, "I'm trying to let the light in."
Ashok was quiet a long while. Then he said, simply, "Zara-Chabby would be proud of you."
Velen shook his head. "Zara-Chabby wouldn't be proud, exactly. Zara-Chabby would simply see. And the seeing alone would be enough for him."

That evening, a messenger arrived in the valley.
He was young, no more than twenty, dust caked on his sandals and sweat standing out along his brow. He had run the entire way from Madasara — not because anything was chasing him, but because he was carrying something he needed to say, and he was afraid that if he slowed to a walk, his own nerve would simply give out before he arrived.
He found the stone circle. He found the disciples gathered around it. He found the unnamed disciple sitting on Zara-Chabby's rock, and for one confused moment mistook him for the teacher himself.
"Zara-Chabby?" he whispered, half a question and half a prayer.
The unnamed disciple opened his eyes. He said nothing at all. He simply looked at the boy, fully and without flinching.
The messenger fell straight to his knees in the grass.
"I've come from the town," he said, breathless. "The people are talking, all of them, about everything. They say Zara-Chabby is dead. They say he never actually existed at all — that he was only ever a trick, a story told by fools to comfort other fools who needed comforting. They say—"
He stopped. His voice cracked clean down the middle.
"They say the stream has dried up."

Silence followed. Not the good kind — not the silence of the stream itself, or the clearing, or the unnamed disciple's own long stillness. The bad kind. The silence of shock arriving all at once. The silence of a wound that has not yet even begun to bleed.
Velen rose to his feet, his stick falling forgotten from his hand.
"The stream has not dried," he said. "I was standing in it myself this morning. I put my own feet in the water. It was cold. It was clear. It was flowing exactly as it always flows."
The messenger shook his head. "Not this stream. The other one — the one that runs past the old temple up on the hill. The one that has never once stopped flowing, not in a thousand years, not through any drought, not through any flood anyone can remember. It has gone dry. The bed itself is cracked open. The fish in it are dead."
He looked directly at the unnamed disciple.
"The people are saying it's a sign. They say Zara-Chabby was somehow holding the water in place with his own presence, and that now he's gone, the water has followed him — into the forest, or into the ground, or into whatever world comes after this one."
He paused, and when he spoke again his voice had thinned further.
"They are afraid."

The unnamed disciple rose.
It was the first time in seven days he had stood on his own two feet. His joints cracked audibly. His muscles protested the sudden demand. But he stood anyway, slowly and deliberately, the way a tree might stand if a tree ever decided, after long enough rooted in one place, to finally become a man instead.
He crossed to the messenger and knelt so their eyes met at the same level.
"The stream at the temple," he said. His voice came out hoarse from disuse — gravel and rust, not unlike the old warrior's had once sounded, though softer, and somehow younger underneath it. "How long has it been dry?"
"Three days."
"And before it dried — did anything happen up there? A storm? A tremor in the ground? Any change in the wind at all?"
"Nothing," the boy said. "It was flowing perfectly well one day. The very next morning, it was simply gone."
The unnamed disciple closed his eyes.
"The stream did not dry because Zara-Chabby left," he said. "Zara-Chabby was never holding that water in place. If anything, the water was holding him, the same way this stream has held all of us. If the temple stream has run dry, it is because something has shifted somewhere in the earth beneath it. Something entirely unrelated to an old man walking into a forest."
He opened his eyes.
"Go back to the town. Tell them plainly: the stream at the temple is dry. That is simply a fact. But the stream by this cave still flows, exactly as it always has. That is also, simply, a fact. Let the people sit with both of those facts side by side. Let them stop hunting so desperately for signs everywhere they look. Let them start looking, instead, at what is actually in front of them."
The messenger stared up at him. "You sound like him. Like Zara-Chabby."
"No," the unnamed disciple said. "I sound like myself. For the first time in thirty years, I am finally speaking as myself."

The Gathering
Word spread.
Not slowly, not gently — like wildfire, like a rising flood, like a rumor that had been quietly waiting years for its moment to finally be born. By the next morning, half of Madasara had heard that the temple stream had gone dry. By noon, the other half had heard that a disciple in the valley had finally spoken — had used actual words — and that what he'd said was strange, unsettling, and somehow, against every reasonable expectation, true.
By evening, a crowd had gathered at the edge of the valley.
Not a hostile crowd. Not exactly a worshipful one either. A curious crowd. Farmers. Weavers. Potters. Blacksmiths. Mothers with children balanced on their hips. Old men leaning heavily on walking sticks. Young women with sharp, bright eyes and even sharper questions ready on their tongues. They stood at the treeline, studying the cave, the stream, the stone circle where the disciples sat in their now-familiar silence.
Koran the blacksmith was among them. He had told himself, walking there, that this whole business was foolishness — that a man who talked to streams for a living deserved no more attention than the dust on his own sandals. But he had come anyway, because Sira's words had lodged themselves somewhere behind his ribs like a splinter he could not, no matter how he worked at it, manage to pull free.
You fear that he was real.
He stood at the back of the crowd, arms crossed, face set hard. But his eyes — his eyes had gone soft. Soft as water. Soft as moonlight. Soft as the space between one breath and the next.

Sira was there too, standing near the front, her white robe catching the last low light of the sun. She had not come as a disciple — she had never once sat at Zara-Chabby's feet in her life. But she had heard that the unnamed disciple had finally spoken, and she wanted, badly, to hear him do it again.
The crowd waited.
The disciples sat in their circle. They did not rise to greet anyone. They simply sat, the way they had sat for twenty-three moons already, and the way they seemed entirely prepared to go on sitting for twenty-three more if that was what it took.
Velen sat at the circle's edge, stick in hand, drawing in the dirt — not faces now, but water. Lines and curves and slow spirals that resembled a stream, and then a river, and then, briefly, something that might have been the sea. He did not look up once. He did not acknowledge the growing crowd at all. He simply drew.
Ashok sat beside him, silent as always, eyes closed, breathing slow and even, looking for all the world like a man who had genuinely forgotten how to be disturbed by anything.
And on Zara-Chabby's rock, the unnamed disciple sat.
He had returned to his place after speaking to the messenger the night before, and he had not spoken again since. He had not moved. He simply sat, eyes open, hands resting on his knees, face turned toward the water.
The crowd watched him, waiting for something — a teaching, a blessing, some unmistakable sign. But there was nothing to see. Only a man on a rock. Only water flowing steadily past. Only the slow, indifferent turning of the earth toward evening.
Koran shifted his weight uncomfortably. He was a man built for action, for heat, for the honest ring of hammer against iron. This silence — this endless waiting for nothing in particular — felt to him like a kind of death he hadn't signed up for.
But he did not leave.

After an hour, the crowd began, quietly, to murmur among itself.
"What exactly are we waiting for?"
"He spoke to the messenger. They say he sounded just like Zara-Chabby."
"Then why is he silent now, when there's an actual crowd here to hear him?"
"Maybe he has nothing left to say."
"Maybe he's waiting for something."
"Maybe," said someone near the back, "we are the something he's waiting for."
The murmuring spread and grew. Some people sat down in the grass. Some wandered to the stream's edge and dipped their hands into the cold water just to feel it. Some simply stood where they were, eyes fixed on the unnamed disciple, hoping for a word, a glance, some small proof they hadn't walked all this way for absolutely nothing.
But the unnamed disciple gave them nothing at all.
No words. No gestures. No teaching of any kind.
Only his presence.
Only his silence.
Only the slow, steady rhythm of his breath, which seemed, if you watched closely enough, to match the rhythm of the stream beside him, which seemed, in turn, to match some larger rhythm belonging to the earth itself.
And slowly, almost without anyone quite noticing the shift happening, the crowd began to quiet down.
Not because they finally understood anything. Because, at some point, they had simply stopped demanding to understand it.
They only waited.
And in the waiting, something began, imperceptibly, to shift.

The Blacksmith's Question
At dusk, Koran could bear the not-knowing no longer.
He pushed his way through the crowd to the edge of the stone circle and stood directly in front of the unnamed disciple, his shadow falling squarely across the old man's face.
"I have a question," Koran said.
The unnamed disciple did not move. Did not speak. Did not so much as blink.
Koran's jaw tightened. "I have worked iron for forty years of my life. I have made plows, and swords, and horseshoes, and the nails that hold up half the roofs in Madasara. I have never once, in forty years, asked a question I did not genuinely want answered. And I am asking one now."
He waited.
The unnamed disciple said nothing.
"The stream at the temple has gone dry," Koran said. "My wife's grandmother was married beside that stream. My own father is buried near its bank. That water has run there since before anyone alive can remember it starting. And now it is simply gone. The people are saying it's a sign — that Zara-Chabby took the water with him when he left, that he was the stream in some way none of us understand, and now both of them are gone together."
He drew a breath.
"I don't believe that. I'm a blacksmith. I know water flows because of rain, and the shape of the ground, and the pull of the moon on the tides far off. I know streams run dry when the earth shifts, or the springs feeding them finally fail. I know Zara-Chabby was a man — a strange one, maybe a wise one, but a man all the same. Not a god. Not a stream himself. Not some kind of sorcerer."
He paused.
"But I also know something has changed. Not in the stream itself — in us. We're restless. We're afraid, in a way none of us can fully name. And I don't understand why."
He looked directly at the unnamed disciple.
"Tell me why."

For a long time, the unnamed disciple said nothing at all.
The stream went on flowing. The stars began, one by one, to appear overhead, like candles being lit somewhere far off in a vast and ancient temple none of them could see.
Then, finally, he spoke.
"You want a reason," he said. "You want a cause you can point to and say: the stream dried because Zara-Chabby left. The people are restless because Zara-Chabby left. The whole world is different now because Zara-Chabby left."
He shook his head slowly.
"But none of that is true. The world isn't actually different. The temple stream dried because the earth beneath it shifted. That's the whole of it. The people are restless because they have always, quietly, been restless underneath everything. They have simply stopped pretending otherwise, now that something has finally given them permission to stop."
Koran frowned. "Then why did any of us come out here? Why are we standing in this valley, waiting on a man who won't speak?"
The unnamed disciple looked at him — genuinely looked, for the first time since he'd arrived.
"You came because you heard a rumor traveling through the marketplace. You stayed because you felt something you couldn't immediately name. And you're asking me questions now because you've finally admitted, to yourself if to no one else, that you don't actually have the answers."
He gestured toward the stream.
"Zara-Chabby never gave anyone answers. He only ever gave them questions. And those questions have been living inside every one of you this whole time, waiting patiently for you to stop running long enough to finally hear them clearly. Now, tonight, you have stopped running. Now you are here. Now, for the first time in longer than you'd probably admit, you are actually listening."
He closed his eyes.
"The stream at the temple is dry. That is a fact. But there is another stream — this one, right here — that still flows exactly as it always has. There is another temple — this valley, this circle of stones — that still stands. And there is another teacher — not me, and not Zara-Chabby either, but the silence itself — that is still speaking, if any of you are willing to listen closely enough."
He opened his eyes.
"Stay, or go. It makes no real difference to me either way. But do not ask me to explain what cannot honestly be explained. Do not ask me to hand you a tidy reason for your own restlessness. The restlessness is the reason, blacksmith. It is the wound itself. And the wound is exactly where the light gets in."

Koran stood very still.
The words had struck him the way a hammer strikes — not against iron this time, but against something considerably softer, something he had kept carefully hidden for decades behind the hard shell of a man who did not ask questions he wasn't already prepared to answer himself.
"The wound is where the light enters," he repeated slowly.
"Yes," the unnamed disciple said.
"And if a man has no wound at all?"
"Then he is not, in any real sense, alive."
Koran was silent a long while after that. Then he did something he had not done in forty years.
He sat down.
Not in the stone circle — he was no disciple, and had no wish to become one. Not on Zara-Chabby's rock, which was already occupied. He sat down instead on the open grass at the stream's edge, his back against a tamarind tree, his face turned toward the moving water.
He did not speak. He offered no prayer. He asked for nothing at all.
He simply sat.
And in the sitting, he felt something he had not felt since he was a small boy — something long since buried under decades of hammers, and anvils, and the endless clatter of a life spent making things with his hands rather than feeling anything with the rest of himself.
He felt quiet.
Not the quiet of exhaustion. The quiet of permission. The particular quiet that arrives only once a man finally stops pretending he has every answer, and allows himself, for once, to simply be alongside his own unanswered questions.
He did not understand a word the unnamed disciple had actually said to him.
He did not need to understand it.
He only needed to hear it.
And he had heard it.

The Children
The next morning, the crowd had grown larger still.
Word had spread through Madasara like a blessing — or, depending on who was doing the telling, a curse. Some said the unnamed disciple had spoken words of tremendous power. Others insisted he had said absolutely nothing at all. Some claimed the stream had briefly turned to wine before their eyes. Others swore it had remained, throughout, ordinary water.
But one fact was beyond dispute: people were coming to the valley now, in numbers no one had seen since Zara-Chabby's own disappearance.
Not only the curious. Not only the faithful. Everyone.
Old women who had long since given up on hope of any kind. Young men who had quietly given up on the idea that their lives meant much of anything. Children who had never once known a world where Zara-Chabby's absence wasn't simply the ordinary shape of things. They arrived with empty hands and open eyes, and gathered at the stone circle's edge to watch, and wait, and wonder.
And among them, notably, were the children.
They came first in twos and threes — a girl with a missing front tooth, a boy with a crooked, gap-toothed smile, a toddler clutching a small carved wooden bird against his chest. They were not afraid of the silence hanging over the valley. They were not impatient for anyone to hand them answers. They simply played.
They ran through the tall grass. They splashed in the shallows of the stream. They climbed the low tamarind branches and hung upside down by their knees, laughing, faces flushed with the plain, uncomplicated joy of being alive on an ordinary morning.
The disciples watched them from the circle. A few were visibly annoyed — the children were loud, disruptive, careless of the sacred hush everyone else had been so carefully maintaining. A few were quietly amused, the children reminding them of something they'd each, in their own way, forgotten how to access. And a very small few were, if they were honest with themselves, envious.
Because the children needed none of this. They needed no Zara-Chabby, no teachings, no riddles, no approval from the unnamed disciple sitting silently on his rock. They needed only the sun overhead, the water at their feet, the grass under them, and each other.
And, this particular morning, they had every one of those things in abundance.

Velen watched the children with unusual attention.
He had stopped drawing. His stick lay abandoned in the grass beside him. He was watching a small boy, no older than five, sitting alone at the stream's edge, dropping pebbles into the water one at a time and studying the ripples as they spread and slowly faded.
The boy was not trying to learn a single thing from the exercise. He was not trying to become wise, or holy, or anything else besides exactly what he already was. He was simply doing — doing precisely what children have done at the edges of streams for thousands of years, and would go on doing for thousands more, long after every name in this valley had been forgotten.
And in his doing, without meaning to, he was teaching something Zara-Chabby himself had never quite managed to put into words.
Presence.
Not the presence of formal silence. Not the presence of disciplined meditation. The presence of play — of a mind so completely absorbed in one small, unimportant moment that there was no room left over for questions, no room for doubt, no room at all for the long, exhausting search for meaning that had occupied every adult in this valley for the past twenty-three moons.
Velen stood and walked over to the boy.
"What are you doing?" he asked.
The boy looked up. His eyes were brown, clear, entirely untroubled by anything.
"Watching the circles," he said.
"Why?"
The boy shrugged, as if the answer were too obvious to need saying. "Because they're pretty."
Velen sat down beside him in the mud. He picked up a pebble of his own and dropped it into the current.
The new ripples spread outward, met the boy's ripples, cancelled some of them, reinforced others, and danced together for a moment before fading entirely.
"Pretty," Velen agreed.
The boy grinned at him. "See? You get it."
Velen laughed — a small sound, rusty and unpracticed, like a door that hadn't been opened in years finally swinging free on its hinges. But it was real.
"I get it," he said.
And for the first time in thirty years, he stopped trying to understand anything at all.
He simply watched the circles.

The unnamed disciple watched Velen from his rock, some distance away.
He did not smile at what he saw. He did not nod along. He only witnessed it — the way the stream witnessed everything that passed through it, the way the cave witnessed everything that sheltered inside it, the way the child in the clearing, wherever he was now, witnessed the whole world without ever once needing to be seen doing so himself.
He had seen a great many things across his thirty years as a disciple. He had watched seekers arrive and depart in equal measure. He had watched riddles crack minds wide open and leave them raw. He had watched silences that healed people, and silences that had, on occasion, quietly wounded them instead.
But he had never once, in thirty years, seen Velen laugh.
Not like that. Not freely. Not without thirty years' accumulated weight of unanswered questions pressing down visibly on his chest.
Something was shifting in the valley. Not in the earth beneath it, and not even, particularly, in the stream. Something was shifting, instead, in the hearts of the people who had gathered to sit beside the water.
The wound was opening.
And the light was beginning, at long last, to enter.

The Town Speaks
Back in Madasara, the talk had not slowed in the slightest.
If anything, it had grown louder. More urgent. More visibly desperate. In the marketplace, in the tea houses, along the narrow streets where women gathered each morning to draw water from the communal well, the name Zara-Chabby was spoken now with a strange mixture of fear and unmistakable longing.
"He was a prophet," insisted one voice.
"He was a fool," countered another.
"He was neither," said a third, quieter than the rest. "He was only a man who knew how to be silent. And the rest of us have simply forgotten how to listen properly."
The blacksmith's wife, a woman named Dara, sat in the shade of her own doorway that afternoon, mending a torn shirt she'd been putting off for days. She had heard the rumors, of course — that her husband had gone to the valley and had not yet come home. She wasn't especially worried; Koran was a grown man, entitled to make his own choices, however strange they seemed from the outside. But she was undeniably curious.
What had he found out there? What, exactly, was keeping him?
She set her mending aside, rose, and walked out through the streets of Madasara — past the half-empty marketplace stalls, past the tamarind trees standing in for shade, out to the edge of town where the forest finally began in earnest.
She was no seeker. She was no disciple. She was simply a woman who wanted, plainly, to see for herself.

She found Koran sitting by the stream, his back against the same tamarind tree he'd claimed two days earlier, his eyes closed.
He looked different to her. Softer. Younger somehow, as though decades of hammering and sweating and shouting over the noise of his own forge had been quietly rinsed away by something — not water exactly, but silence.
She sat down beside him in the grass.
"Are you dead?" she asked him, only half joking.
He opened his eyes and smiled — a strange smile, unfamiliar on his face, almost unsettling, like watching a stone somehow learn, against all reasonable expectation, how to float.
"No," he said. "I believe I might finally be alive."
Dara raised one eyebrow. "You have sat beside this stream for two full days. You haven't eaten. You haven't slept. And you're calling that being alive?"
Koran looked out at the water, silver and gold now in the shifting morning light.
"I have spent forty years of my life making things," he said. "Swords. Plows. Nails. Horseshoes for animals I'll never ride myself. I always believed I was making a living. I understand now that I was actually building a wall. A wall between myself and... all of this."
He gestured at the stream, the cave, the stone circle, the children still splashing and laughing in the shallows.
"I never even knew the wall was there. I mistook it for the entire world, for most of my life. But it wasn't the world at all. It was only ever fear. Fear of sitting still. Fear of real quiet. Fear, underneath everything else, of being nothing at all if I ever stopped moving long enough to check."
He looked down at his own hands — the same hands that had spent forty years gripping hammers, tongs, and glowing iron.
"Now I am simply sitting here. And I am not nothing, as it turns out. I am something. I couldn't tell you exactly what. But I am here. And, for the moment, that is enough."
Dara was quiet a long while. Then she reached over and took his hand in hers.
"You are strange now," she said.
"Yes."
"You are not the man I married."
"No."
"But you are still my husband."
Koran squeezed her hand gently. "Yes. And perhaps, for the first time in either of our lives — I am finally worthy of being him."

Dara didn't stay long after that. She had a household waiting, children to feed, a whole life that had no room in it for days spent quietly staring at moving water.
But walking back toward Madasara, she felt something shift inside her own chest — not a full conversion, not a sudden revelation, only a small, quiet opening, like a window that had been stuck shut for years suddenly, inexplicably, sliding free on its own.
She didn't understand what had happened to her husband out there. She didn't understand the unnamed disciple, or the silence everyone kept talking about, or the stream itself. But she understood this much clearly: something was changing in that valley. Something was changing, in turn, back in the town. Something was shifting, subtly but unmistakably, in the very air everyone was breathing.
And she found, walking home, that she did not want to be left behind by it.
That evening, she sent her own children out to the valley.
Not to become disciples. Not to search for Zara-Chabby. Only to play.
Because if the children could find real joy in that stream, in that grass, in the simple uncomplicated act of being alive out there — then perhaps, she reasoned, there was still hope for the rest of them too.
Perhaps there was hope for everyone.

The Unnamed Disciple's Confession
On the third day of the gathering, the unnamed disciple did something he had never once done before.
He left Zara-Chabby's rock.
He rose slowly, joints cracking audibly, muscles aching after days of near-total stillness. He crossed to the center of the stone circle and sat down — not on any rock, not on a cushion, but directly on the bare earth, as though he had finally decided he was willing, at last, to be level with everyone else gathered there.
The disciples drew in around him. So did the townspeople. So did the children, who paused their endless games to watch this strange old man finally, after so many days, move.
Velen sat closest of all, stick still in hand, though he wasn't drawing. He was, for once, only listening.
Ashok settled beside him, eyes open, face calm.
Koran sat at the circle's edge, back straight, hands resting on his own knees.
Sira stood at the very back, her white robe catching the afternoon light.
And the unnamed disciple spoke.

"I have been silent forty days," he said. "Not because I had nothing left to say. Because I had far too much, and I did not yet know how to say any of it without becoming, in the saying, exactly the thing I had been trying my whole life to leave behind."
He looked slowly around the gathered circle.
"Zara-Chabby taught me for thirty years. He taught me to sit. He taught me to listen. He taught me, eventually, to see the light that does not deem. But he never once taught me how to speak — not because he was incapable of it, but because he wanted me to find that particular skill entirely on my own."
He paused.
"I have learned it now. Not from him. From all of you. From the old warrior who came here and wept beside this very stream. From Velen, who drew faces in the dirt and found, somewhere in the spaces between his own lines, a version of himself he'd lost track of. From the children, who taught me — without a single word — that play is not the opposite of prayer. It is prayer's forgotten twin."
His voice trembled slightly.
"I have learned that silence is not the absence of words. It is the container words are meant to grow inside of. And words, once they are finally ready — once they have ripened slowly in the dark soil of a person's own heart — can be every bit as holy as the silence they came from."
He looked toward the stream.
"The stream at the temple has run dry. The people say it is a sign. Perhaps it is one. But not the sign they believe it to be. It is not a sign of Zara-Chabby's absence. It is a sign, instead, of our presence. We are here. We have gathered. We are finally asking real questions again. And the questions themselves are the water that will, in time, refill that dry bed."
He closed his eyes.
"I am not Zara-Chabby. I will never once be Zara-Chabby, no matter how long I sit on his rock. I am only a man who sat beside a stream for thirty years and finally, at the very end of all that sitting, learned how to see. And what I see now is this: the light that does not deem was never in the cave. It was never in the rock. It was never even in the stream itself. It is in you. In your wounds. In your questions. In your stubborn, foolish, genuinely beautiful refusal to ever stop seeking, no matter how tired the seeking makes you."
He opened his eyes.
"Now. I have spoken. And I will not speak again for a good long while, because speaking, it turns out, is exhausting in a way sitting never was. Silence is where the real work of a life actually happens."
He rose and walked back to Zara-Chabby's rock, and sat down upon it once more.
And he was silent.

The crowd did not stir.
They had come expecting more — a full teaching, a parable, a riddle sharp enough to crack their minds wide open and leave them changed forever. Instead the unnamed disciple had given them, by any ordinary measure, nothing at all.
And, by the same measure, everything.
He had given them permission.
Permission to sit. Permission to question freely. Permission to be silent as long as they needed to be. Permission, eventually, to speak. Permission, above all else, to simply be exactly where they already were, without pretending, for anyone's benefit, to be somewhere further along than that.
Velen picked his stick back up. He began drawing again — not faces this time, not water, not mountains. He drew a single circle. Simple. Open at the bottom.
A cup.
And inside the cup, he drew one single drop of water.
It was not a great drawing by any reasonable standard. It was not even a particularly beautiful one. But it was his. And that, this time, was more than enough.
Koran looked down at his own hands — the same hands that had spent forty years gripping hammers, swords, red-hot iron. They were still strong. Still entirely capable of the work they'd always done. But they were also, in this moment, empty.
For the first time in forty years, he did not immediately reach for something to fill them with.
He let them stay empty.
And in that emptiness, he felt something he had never once felt in his whole life.
Peace.
Not the peace of a hard-won victory. Not the peace that comes only from total exhaustion. The peace of genuine surrender — the peace belonging to a man who has finally stopped fighting everything around him and allowed himself, at long last, simply to be.
He didn't understand it. He didn't need to understand it.
He only needed to sit there.
And so, for a while longer, he did.

The Last Noon
On the seventh day, the sun reached its highest point.
Noon. The last noon of this particular gathering, though no one present had any way yet of knowing it would prove to be the last. The sun stood directly overhead, white and merciless as it had been that very first day, casting no shadow anywhere. The stream glittered like a river of molten silver. The children had finally exhausted themselves and lay drowsing in the shade of the tamarind trees, content in the particular way only overtired children manage.
The unnamed disciple sat on Zara-Chabby's rock, eyes closed, breathing slow and even, looking, for the first time in thirty years, like a man who had genuinely learned how to rest.
Velen sat nearby, stick still in hand, his dirt drawing spread wide around him now — hundreds of cups by this point, perhaps thousands, each one open at the bottom, each one patiently waiting to be filled.
Ashok sat beside him, silent as he had always been. But his silence had changed shape somewhere along the way. It was no longer the silence of a man with nothing left to say. It had become, instead, the silence of a man who had already said everything that needed saying, and had finally made his peace with the saying of it.
Koran sat by the stream, back against his tamarind tree, exactly where he'd first sat seven days earlier. His wife had brought him food that morning. He had eaten it. His children had come out to visit, and he had played with them properly — splashing in the shallow water, chasing them barefoot through the grass, laughing until his ribs genuinely ached from it.
He was no disciple. He was no seeker in any formal sense. He was only a blacksmith who had, somewhere along the way, learned how to sit still.
And that, it turned out, was more than enough.

Sira stood at the edge of the stone circle, having not sat, not drawn, not spoken a single word since her exchange with Koran in the marketplace days earlier. She had only watched — watching the disciples, watching the townspeople, watching the children, watching the unnamed disciple on his rock.
She had come to this valley expecting something specific. A sign. A formal teaching. Some clear revelation she could carry home and repeat to people who hadn't been present themselves.
But the valley had given her nothing of the kind. And, in the giving of nothing, had somehow given her everything instead.
It had given her presence.
The presence of water flowing steadily onward. The presence of stones simply sitting where they had always sat. The presence of children absorbed entirely in play. The presence of a grown man weeping openly for the first time in decades. The presence of a silence that was not, in the end, empty at all, but genuinely full — full of questions, full of old wounds finally allowed to breathe, full of the particular light that only ever enters through a crack.
She did not know what to do with any of it. She did not know how to hold it, or carry it, or bring it back with her into Madasara in any form the town would recognize.
But she knew, standing there, that she herself was different than she'd been a week earlier. She knew something in her had shifted. She knew the wound she had carried privately for years — the one she had hidden so well she'd nearly convinced even herself it didn't exist — had finally, quietly, begun to open.
And the light, however faint, was beginning to enter it.
She did not weep. She did not laugh either. She only breathed.
And in the breathing, she felt something entirely new to her.
Home.
Not the home of any house, or town, or family waiting for her. The home of simply being — the home found only in sitting beside a stream, asking nothing of it, and somehow, in the asking of nothing, receiving everything anyway.
She sat down at last — not in the stone circle, not on Zara-Chabby's rock, but on the open grass at the water's edge, her bare feet sinking into the cool mud.
She closed her eyes.
And she was still.

The sun began, at last, its slow descent toward the western ridge. The shadows returned, long and blue, stretching across the valley like fingers reaching, patiently, for whatever light remained.
The unnamed disciple opened his eyes.
He looked at the stream. He looked at the cave. He looked at the stone circle, still full of people — disciples and townspeople both, children and old warriors' memories, blacksmiths and weavers and mothers and fathers and seekers of every conceivable kind, all gathered in one place for reasons none of them could have fully explained a week earlier.
He had not planned any of this. He had not particularly wanted it, if he was honest with himself. He had simply sat — on Zara-Chabby's rock, beside Zara-Chabby's stream, in Zara-Chabby's valley — and, slowly, the people had come to him anyway.
Not because of anything he had done. Because of them. Because they had finally been ready. Because the wound in each of their hearts had grown too large, at last, to keep ignoring. Because the questions had piled up over twenty-three moons like stones in a dry riverbed, and none of them could pretend any longer that the answers were waiting somewhere else, in some other valley, under some other teacher's rock.
He smiled.
It was a small smile. A cracked one. A smile that had gone unused for years.
But it was entirely real.
"The last noon," he said softly — so softly that only the stream itself could have possibly heard it.
And the stream, flowing on exactly as it always had, seemed, in its own endless way, to nod along in agreement.

The Leaving
That evening, the crowd began, gradually, to disperse.
Not because they had lost interest in any of it. Because they had found what they'd come looking for — not in the unnamed disciple's few words, but in the long silences between them. Not in the water of the stream itself, but in the simple act of sitting beside it for as long as they needed to. Not in Zara-Chabby's presence, which none of them had ever actually witnessed, but in his absence, which had, somewhere over these seven days, become a presence entirely its own.
Koran stood up at last. His joints cracked loudly. His back ached from days of unaccustomed stillness. He had sat by that stream for seven full days — longer, by a wide margin, than he had ever sat still for anything in his entire adult life. He felt, in the standing, faintly foolish. He also felt, undeniably, changed. He felt like a man who had been asleep for forty years and had only just, grudgingly and reluctantly, begun to properly wake up.
He walked over to the unnamed disciple.
"I don't understand any of this," he said.
The unnamed disciple looked up at him. "Good."
"I don't know what I'm supposed to do now."
"Good."
"I don't even know who I am anymore."
"Good."
Koran frowned. "Is that genuinely all you have to say to me? 'Good'?"
The unnamed disciple tilted his head slightly. "What else would you have me say instead? You have sat beside this stream. You have felt the silence settle over you. You have asked your questions honestly, out loud, in front of everyone. The answers, when they come, will not come from me, and they will not come from Zara-Chabby either, wherever he is. They will come from you. From your own hammer. From your own anvil. From the iron you shape with your hands, and from the fire that has spent forty years quietly shaping you in return."
He paused.
"Go home now, blacksmith. Make your plows. Make your nails. Make your swords too, if the work still calls for them. But make all of it differently than you used to. Make it with the silence you're carrying home inside you now. Make it with the memory of this particular stream still fresh in your hands. And when the day's work is finally finished, sit by your own forge fire and simply watch the embers fade. That, in the end, is your teaching. That is your riddle to sit with. That is your own path forward, and no one else's."
Koran was quiet a long while. Then he nodded — slowly, heavily, the way a man nods when he finally accepts a weight he suspects he's been carrying all along without ever naming it properly.
"I will try," he said.
"No," the unnamed disciple said, almost gently. "Do not try. Do. Trying is only the mind's clever way of avoiding something. Doing is the heart's way of finally becoming it."
Koran walked back to where his wife stood waiting. He took her hand in his. Together they walked out of the valley, back toward Madasara, back toward a town still buzzing with rumor and fear and a desperate, half-formed hope.
They did not look back once.
They didn't need to.
The valley, by then, was already inside them both.

Sira stayed behind.
She sat beside the stream as the sun finally set and the stars came out one by one overhead. She watched the water shift slowly from gold to silver to black. She listened to the sounds of the coming night — crickets starting up, frogs somewhere unseen, the distant, patient call of an owl.
The other disciples had gone into the cave to sleep. The unnamed disciple still sat on Zara-Chabby's rock, eyes open, face turned up toward the emerging stars.
She did not speak to him. She did not approach him at all. She simply sat — the way he sat, the way the stream itself sat within its banks, the way the whole valley seemed to sit, waiting patiently for something that had, in truth, already arrived days earlier.
In the morning, she would walk back to Madasara. She would sell nothing there, own nothing, teach nothing to anyone who asked. She would simply be — a woman who had once sat beside a stream long enough to learn, in her own bones, that the wound is exactly where the light gets in.
And perhaps, in the simple being of it, she would end up teaching more than she ever could have managed with careful words.
Perhaps that, in the end, was the whole of the lesson.
Perhaps that was the last noon's real gift to any of them.

The Stream Speaks
The unnamed disciple did not sleep that final night.
He sat on Zara-Chabby's rock, watching the stars slowly turn overhead, watching the stream flow steadily on beneath them, watching the fireflies begin their slow, drifting dance just above the water's surface.
He thought of Zara-Chabby — not as a teacher this time, and not as any kind of master. As a friend. The last friend, in fact — the one who had walked into the forest and never once looked back, the one who had trusted every single one of his disciples to eventually find their own way forward without him, the one who had spent thirty years quietly teaching that the greatest gift a person can offer another is not presence at all, but the right kind of absence.
He thought of the child in the clearing — too old and too young at once, speaking always in riddles, laughing like water moving over stone. He had not encountered that child again since the old warrior's visit weeks earlier. But he could still feel him somehow — in the silence, in the water, in the particular space that lived between one breath and the next.
He thought of Velen, drawing his hundreds of cups in the dirt. He thought of Ashok, silent and steady as any stone in this valley. He thought of Koran, the blacksmith who had, against every expectation, learned how to sit still. He thought of Sira, who had asked this whole valley for nothing at all, and had somehow, in the asking of nothing, received everything.
He thought of the town beyond the trees — buzzing with rumor, trembling with fear, desperate for some clear sign to hold onto. They would not get one. Not from him. Not from Zara-Chabby, wherever he had gone. Not even from the stream itself.
But perhaps — perhaps they did not actually need one.
Perhaps the sign, all along, had simply been the seeking itself. The restlessness. The stubborn, unanswered questions. The wound that refused, no matter how much time passed, to fully close.
The wound is where the light enters.
He closed his eyes.
And in the darkness behind his own eyelids, he saw the stream.
Not this stream, the one beside the cave. The other one — the temple stream, the one that had gone dry. But in this vision, it was not dry at all. It was flowing — slowly, weakly at first, but unmistakably flowing. A trickle to begin with. Then a stream in earnest. Then something closer to a river. Then, astonishingly, something close to a flood.
The water in his vision was not clear. It ran dark — dark with soil, dark with old memory, dark with what felt like the accumulated tears of a thousand years all at once. But it was moving. It was, unmistakably, alive.
And within that dark, moving water, he began to see faces. The faces of everyone who had ever once sat beside any stream, anywhere — disciples, seekers, broken old warriors, lost children, blacksmiths, weavers, mothers, fathers, fools and sages in equal measure, and every ordinary person caught somewhere in between those two extremes.
They were not drowning in the vision. They were washing.
Washing away years of accumulated dust. Washing away the sheer weight of unanswered questions. Washing away, finally, the old fear that had kept so many of them, for so long, from ever sitting still long enough to listen, or simply be.
He opened his eyes.
The stream beside the cave was still flowing exactly as before. The stars still turned slowly overhead. The fireflies still danced above the water.
But something had changed all the same.
The air felt lighter somehow. The silence had gone deeper. And the presence he'd been sensing all along — Zara-Chabby's presence, the child's presence, the presence of the light that does not deem — felt, suddenly, closer than it ever had before.
Not in the cave. Not in the rock beneath him. Not even in the stream itself.
In him.
In them — every single one who had gathered here this week.
In everyone, anywhere, who had ever once sat down beside moving water, asked nothing of it, and found themselves, against every reasonable expectation, given everything in return.
He smiled.
The last noon had come and gone. The sun had long since set. The moon had risen in its place.
But the teaching, he understood now, had not ended at all.
It had only just begun.

The next morning, the unnamed disciple rose from Zara-Chabby's rock.
He walked to the stream. He knelt at its edge. He drank.
Then he crossed to the stone circle, where the disciples were already gathered — Velen, Ashok, and a small handful of others. They looked up at him as he approached. No one spoke.
He did not speak either.
He simply sat down among them — not on Zara-Chabby's rock this time, not on any raised place at all, but directly on the ground, level with every one of them.
Velen handed him a stick without a word.
The unnamed disciple took it. He drew, slowly, in the dirt — not a cup this time, not a face, not water in any of its familiar shapes.
He drew a single circle.
Simple. Complete.
And at its exact center, he drew one small dot.
Then he looked up at Velen.
Velen studied the drawing a long moment. He did not fully understand it. He found, to his own surprise, that he did not need to.
He only needed to see it.
And in the seeing, he felt something entirely new move through him.
Completion.
Not the completion of an ending, exactly. The completion, instead, of a genuine beginning.
The last noon had finally passed.
But the stream was still flowing, exactly as it always had.
And so, at long last, unmistakably, were they.

Thus the chapter of the last noon came to its close. The town of Madasara buzzed a little less with each passing day. The valley grew a little quieter, in the good way quiet arrives once it's actually been earned. And the disciples went on sitting beside their stream, drawing circles patiently in the dirt, waiting for nothing in particular, and receiving, somehow, everything anyway.
The wound was open.
The light was entering.
And somewhere — far away, or perhaps, as always, very close — a laugh echoed once more through the trees.
Not loud. Not soft.
Simply present.
The laugh of Zara-Chabby.
Thus the last noon passed quietly into memory. But the stream did not stop flowing. And neither, at long last, did they.


`,rk=["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"];function lk({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:hk,chapterTitle:"OF THE VOYAGE I",chapterNumber:4,bookLabel:"Book 3",chapterList:rk})}const dk=`"We are all in the gutter, but some of us are looking at the stars."
 — Oscar Wilde

The stream did not stop. And neither, at last, did they.
That had been the promise the valley made to itself on the evening of the last noon. It kept that promise the way water keeps every promise — quietly, without ceremony, one season folding into the next until no one could quite say where the folding had begun.
Sixty moons passed.
Sixty cycles of the moon since Zara-Chabby walked into the forest and did not return. Sixty harvests brought in and eaten and forgotten. Sixty festivals lit and danced through and swept away the morning after. Sixty times the stream had frozen at its edges and thawed again, the tamarind leaves had turned gold and dropped and grown back green, the children who had once skipped stones across a puddle had grown into young men and women who now had children of their own asking their own first questions.
Sixty moons.
And the city of Madasara had still not fully decided how it wanted to feel about any of it.

The city itself had changed less than a stranger might expect.
The buildings hadn't changed — the same clay houses stood where they'd always stood, walls cracked now by another sixty seasons of sun and rain, doorways still hung with beads and small talismans meant to keep evil at a respectful distance. The streets hadn't changed — the same dust rose in the same soft clouds whenever the donkeys passed through, the same tamarind trees kept dropping their sour fruit onto the heads of unsuspecting merchants who should, by now, have learned to walk a different route. The people, mostly, hadn't changed either — the same families occupied the same quarters, the same old arguments still echoed through the same courtyards at dusk, the same songs were sung, more or less unaltered, at the same weddings and the same funerals.
But something underneath all of that had shifted.
Like the ground before an earthquake decides to arrive. Like the air just before a storm finally breaks. Like the strange, suspended moment between one breath and the next, when the lungs sit empty and the whole body waits to discover what will fill them next.
Madasara had become, somewhere in those sixty moons, a city of waiting.
Not the good kind of waiting — not the farmer's patient waiting for rain, not a mother's waiting for a child to finally arrive, not a lover's waiting at the city gate for a familiar shape to appear on the road. The other kind. The waiting that has long since forgotten what, exactly, it is still waiting for. The waiting that has calcified into simple habit. The waiting that started, sixty moons ago, as an open hand held out toward the horizon, and had slowly, without anyone quite noticing the change, curled itself into a clenched fist.

The unnamed disciple walked through the streets of Madasara for the first time in thirty years.
He had not once left the valley since the day Zara-Chabby disappeared into the trees. He had sat on the teacher's rock, beside the flowing stream, inside the stone circle where the handful of remaining disciples still gathered each morning and each evening out of something that had stopped, long ago, being habit and had become instead a kind of breathing. He had let his beard grow long and grey. He had let his body thin down to something spare and quiet. He had let his voice, from long disuse, go soft as river stone.
But something had finally called him out of the valley.
Not a voice exactly. Not a vision either. A restlessness — the very same restlessness that had once driven a broken old warrior to sit weeping beside this same stream for six full days. The same restlessness that had put a stick into Velen's shaking hand and taught it, slowly, to draw. The same restlessness that had sent a valley full of children splashing into the shallows while the adults around them sat frozen in their careful, well-practiced silence.
It was, he understood at last, the restlessness of a man who has been sitting for far too long, and has quietly begun to forget that sitting was never meant to be the same thing as living.
So he had risen. He had washed his face in the cold water. He had combed his long beard with his own fingers for want of a comb. He had walked out of the valley, through the forest, past the clearing where a strange old-young child had once shown him the shape of his own emptiness, and out into the sun-baked, dusty streets of the city he had not set foot in for thirty years.
He carried no plan. No fixed purpose. No teaching prepared and waiting to be delivered.
He simply, finally, wanted to see.

The marketplace was crowded, the way it always had been and, he suspected, always would be.
It was the very same square where Koran the blacksmith had once argued with a silent young woman named Sira, where the first rumors of Zara-Chabby's disappearance had taken root and spread like fire through dry grass, where the whole town had once gathered in fear and confusion and a strange, desperate hope. Sixty moons had passed since that evening. The rumors had grown old and tired in people's mouths. The fear had worn itself thin. The hope, where it survived at all, had grown strange — twisted and gnarled, like a tree bent so long and so hard by one prevailing wind that it had genuinely forgotten it was ever capable of growing straight.
The unnamed disciple stood at the square's edge, and watched.
A woman selling limes caught his eye almost immediately. She was old now — older, somehow, than sixty moons alone could fully account for. Her face had become a map of accumulated grief. Her hands had curled into something closer to claws than hands. Her eyes were two dark hollows where something had clearly once lived, and had since, just as clearly, moved out entirely.
She had been standing in this same square, he remembered now, on the day the young messenger arrived breathless with news of the dried-up temple stream. She had heard, that same evening, that Zara-Chabby was gone for good. She had heard, not long after, that the world itself might be quietly ending.
And she had believed every word of it.
She had believed it so completely, so thoroughly, that she had simply stopped living in any real sense. She had stopped laughing. She had stopped loving anyone, including, it seemed, herself. She still went through the outward motions — selling her limes, sweeping her doorstep at dawn, lighting the evening lamp when the light finally failed — but somewhere along the way, her heart had quietly turned to something closer to stone than flesh.
The unnamed disciple saw all of this at a glance. He saw it in the tight, closed, defended way she held her own body. He saw it in the suspicious, faintly envious way she watched the other merchants around her, a hunger in her eyes that plainly had nothing to do with food.
He crossed to her stall.
"How much for a lime?" he asked.
She looked at him with flat, unseeing eyes. "One copper."
He set a single copper on the wooden board between them, and picked up a lime, and held it to his nose. It smelled of sunlight, and of earth, and of the slow, patient, entirely unhurried work roots do underground while no one is watching.
"You have not smiled in sixty moons," he said.
She flinched visibly. "What could you possibly know of my smiles?"
"I know they're buried somewhere. I know you're the one who buried them. And I know you could dig them back up again, if you chose to."
She stared at him a long moment. Her flat eyes flickered — just once, just briefly — with something that might have been anger, might have been old grief finally surfacing, or might, just possibly, have been the very first stirring of a feeling she had long ago decided she was no longer permitted to have.
"Who are you?" she whispered.
"No one," he said. "A man who sat beside a stream for thirty years, and learned, eventually, that the dead are not the only ones capable of being resurrected."
He walked on, leaving the lime unpaid-for and forgotten on the board between them.
She watched him go. She did not smile.
But something in her chest — something that had sat frozen through sixty long moons — began, very slowly, without her quite noticing, to thaw.

He walked deeper into the city after that.
The streets narrowed around him. The clay walls pressed closer on either side. The air thickened with the smell of cooking oil, incense, unwashed bodies, the whole dense perfume of a city going about its ordinary business. Children ran past him laughing, chasing a ball stitched together out of old rags. An old man sat carving a small block of wood in his doorway with a knife worn down to a bare sliver of blade. A young woman balanced a full basket of bread on her head, her steps sure and unhurried despite the badly uneven stones beneath her feet.
He watched them all pass — not the way a teacher watches students, and not the way a judge watches the judged. As a witness. Simply a witness. A man who had spent thirty years learning, slowly and at real cost, how to look at something without flinching away from it.
He stopped in front of a house smaller than most of its neighbors. Its door was painted blue — faded badly now, chipped at the corners, but once, long before, it had been exactly the color of the sky at noon.
A young man sat on the doorstep. Perhaps twenty-five years old, though his eyes carried an age that had nothing to do with years. The particular oldness that belongs only to people who have lost far too much, far too early.
The unnamed disciple sat down beside him without asking permission.
"You're waiting for something," he said.
The young man didn't look over. "Everyone in this city is waiting for something."
"What are you waiting for, specifically?"
"For Zara-Chabby to come back."
The unnamed disciple was quiet a moment. Then he said, plainly, "He isn't coming back."
The young man's jaw tightened. "You don't know that."
"I knew him. I sat at his feet for thirty years of my life. He walked into the forest and never once looked back over his shoulder. He is not coming back. He is simply gone."
The young man turned to face him then, eyes wet. "Then why do you still sit by his stream? Why do you still sit on his rock? Why call yourself his disciple at all, if you believe he's really gone?"
The unnamed disciple held his gaze steadily.
"I sit by the stream because it happens to be beautiful. I sit on the rock because, after thirty years, it happens to be comfortable. I call myself his disciple because I learned something real from him — not because I am sitting here waiting for his return. He taught me to see. He never once taught me to wait."
The young man shook his head. "That's a lie. Everyone in this city knows Zara-Chabby promised he would return one day. Everyone knows the stream is meant to run dry the moment he finally dies. Everyone knows—"
"Everyone knows nothing," the unnamed disciple cut in, gently but without any hesitation. "Everyone knows rumors. Everyone knows fear, dressed up to look like certainty. Everyone knows the stories they've told themselves so many times over that the stories have hardened into something harder than stone. But no one in this city actually knows the truth. The truth is that Zara-Chabby was a man. The truth is that he walked into a forest. The truth is that he is not coming back through those same trees. And the truth, the hardest one of all, is that you have spent sixty moons of your one life waiting patiently for a ghost."
The young man rose to his feet, fists clenched, face gone red with something between grief and fury.
"You're cruel," he said.
"I'm honest," the unnamed disciple said. "Cruelty is honesty stripped of love. Honesty, done properly, is love stripped of comfortable lies. I am not being cruel to you. I am giving you the only gift Zara-Chabby ever truly gave to anyone who sat with him. The truth, plainly stated."
He rose too.
"Your father is dead," he said.
The young man went completely still.
"He died in a war fought on a hill no one remembers the name of anymore. He died for a cause that, if you asked anyone left living, no one could properly name for you today. And you have spent sixty moons sitting on this doorstep, waiting for Zara-Chabby to somehow bring him back. But Zara-Chabby cannot raise the dead. No one can. The only person capable of bringing your father back in any real sense is you — not as a body returned to you, but as a memory carried forward. As a story still being told. As a life that goes on, somehow, inside the shape of the life you choose to live from here."
He set a hand gently on the young man's shoulder.
"Stop waiting on that doorstep. Start living instead. Your father did not die on that nameless hill so that his son could spend sixty moons of his own short life sitting still, waiting for a miracle that was never coming."
He walked away without waiting for a response.
The young man stood in his blue doorway a long while, fists still clenched, face still burning red.
But his eyes — his eyes were no longer old.
They had become, quite suddenly, young again.
And they were crying.

The unnamed disciple climbed the hill toward the old temple.
The stream that had once run past it was still dry, exactly as the messenger had reported sixty moons before. The bed lay cracked open under the sun. The fish that had once lived there were long dead and gone. Weeds had grown tall and stubborn in the places water used to move.
But the temple itself was not empty.
People sat scattered across its courtyard — dozens of them, perhaps closer to a hundred. They sat in silence, heads bowed, hands folded quietly in their laps. Some were old. Some were young. Some were children, too young yet to understand exactly why they'd been brought here, but old enough already to feel the particular weight of all that silence pressing down.
The unnamed disciple stood at the courtyard's edge, and watched.
A woman near the front wept softly, steadily, in the specific way of someone who has been weeping, on and off, for sixty moons straight and has simply forgotten, somewhere along the way, how to properly stop. A man beside her sat with his eyes closed, lips moving in some silent, private prayer to a god he no longer, if he was honest with himself, entirely believed in. A child sat cross-legged in the dust nearby, drawing with one finger — circles, spirals, shapes with no name that anyone present could have given them.
They were all, in their different ways, still waiting.
Waiting for the water to flow again. Waiting for Zara-Chabby, against every reasonable expectation, to simply appear. Waiting for some clear sign that the world had not, in fact, entirely abandoned them.
The unnamed disciple walked into the courtyard among them.
He offered no words. He gave no teaching. He simply sat — on the cracked stones, in the dust, right in among the weeping and the silent praying and the endless waiting.
He sat there three full hours.
The sun crossed slowly overhead. The shadows shifted their angle. The weeping woman, eventually, stopped weeping. The praying man, eventually, stopped moving his lips. The child finished her drawing at last and looked up at him with eyes that were, all at once, too clear, too bright, too fully present for a child her age.
"Why are you here?" she asked him directly.
He looked back at her. "Why are you here?"
"My mother brought me. She says the water will come back, if we're only patient enough."
"Will it?"
The child shrugged, entirely unbothered by the question. "I don't know. But I like the drawing."
She pointed proudly at what she'd made — a circle, a spiral, something that resembled, if you tilted your head slightly, a stream in the act of flowing.
The unnamed disciple smiled. It was a small smile. A cracked one. A smile that had gone unused for longer than he could easily count.
"The water may come back one day," he told her. "Or it may not. But the drawing — the drawing will always be here, exactly as you made it. As long as someone, somewhere, still remembers it."
The child nodded seriously, as though this confirmed something she'd already privately suspected. "That's what I think too."
She turned back to her drawing.
The unnamed disciple stayed in that courtyard until the sun finally went down. He did not speak again. He offered no further teaching. He simply witnessed — the weeping, the praying, the patient waiting, the drawing, the slow, stubborn, entirely human refusal to fully surrender hope, no matter how long it had already been withheld.
And when he finally rose to leave, the courtyard was still full.
But something in it had shifted.
The weeping had softened. The praying had quieted. The waiting itself had grown noticeably less desperate.
And the child, notably, was still drawing.

That night, the unnamed disciple walked the streets of Madasara under a full moon.
The city felt different after dark. The dust settled. The daytime noise faded away entirely. Doors were shut, windows shuttered, lamps put out one by one. But behind every closed door, he could still sense the quiet presence of the people inside — their private dreams, their private fears, their unspoken longings, their unresolved grief.
He stopped in front of a house larger than most around it. Its door was carved wood. Its windows were framed in iron. Its small courtyard was paved with stones that had clearly been hauled in from a quarry several days' journey away.
This was Koran the blacksmith's house.
He had not seen the man since Koran had walked out of the valley, seven days after that original last noon. He had no idea what had become of him since — whether he had kept the promise made that evening, to shape his plows and nails differently, to sit by his own fire each night and simply watch the embers burn down.
He knocked.
The door opened.
Koran stood in the frame. He was older now — sixty moons older, exactly as everyone was. His hair had gone fully grey. New lines had settled into his face. But his eyes — his eyes were soft. Soft as water. Soft as moonlight falling across still ground. Soft as the particular space that sits between one breath and the next.
"Come in," Koran said.

The unnamed disciple stepped inside.
The house was warm. A fire burned steadily in the hearth. The walls were still hung with the tools of forty years' work — hammers, tongs, files, the whole familiar instrumentation of a life spent shaping iron. But there was something new on the walls too now. Something that hadn't been there before.
Drawings.
Not a child's drawings. Not a disciple's careful sketches. The drawings of a man who had learned, quite late in his life, that the hammer had never been the only tool available for shaping the world around him.
There were drawings of the stream. Drawings of the empty cave. Drawings of the stone circle. Drawings of the unnamed disciple himself, seated on Zara-Chabby's rock. Drawings of Velen bent over his own dirt-drawings. Drawings of Ashok sitting in his characteristic silence. Drawings of the old warrior, sword laid aside, walking off into the trees for the last time.
And in one corner, a smaller drawing — a child with a missing front tooth and a crooked, gap-toothed grin, dropping pebbles one by one into a stream.
"Your wife tells me you've become an artist," the unnamed disciple said.
Koran laughed — a full, warm sound, nothing at all like the hard, flat laugh he'd once used in this same marketplace sixty moons before.
"I'm no artist. I'm a blacksmith who happens to draw. There's a real difference between the two."
"Is there?"
Koran considered the question seriously. "Yes. An artist makes things for others. A blacksmith who draws makes things for himself. If others happen to like the results, well, that's a fine gift on top. But it was never the reason for doing it in the first place."
He gestured at the walls around them.
"I have drawn something every single day for sixty moons now. Even on days I didn't want to. Even on days my hands were too tired from the forge to hold a stick properly. Even on the days the drawings came out ugly and wrong and I wanted, badly, to burn every one of them. I drew anyway. Because you told me once to do, not merely to try. And so I have simply done it, day after day, without stopping."
The unnamed disciple studied the drawings a long moment. They were not masterpieces by any formal measure. They held none of the polished beauty found in temple paintings elsewhere in the city. But they were unmistakably alive. They seemed to breathe faintly on the wall. They spoke, in their own rough way, of a man who had once sat beside a stream and finally, at long last, learned how to see.
"You've changed," the unnamed disciple said.
"Yes."
"The city hasn't. Not entirely."
Koran shook his head slowly. "The city is still waiting, mostly. Still hoping in fits and starts. Still afraid, underneath everything. Some people have given up completely. Some have grown bitter about it. Some have simply forgotten Zara-Chabby ever existed at all. And a few — only a few, so far — have begun, finally, to understand something."
"Understand what, exactly?"
"That the waiting itself was always the teaching. That his absence is, in its own strange way, a kind of presence. That the temple stream ran dry not because Zara-Chabby left us, but because we had all, every one of us, been looking for water in entirely the wrong place all along."
The unnamed disciple said nothing for a while.
Koran studied his face. "You've been gone from that valley a long time now."
"One day."
"It feels considerably longer than that."
The unnamed disciple nodded slowly. "It does. It really does."

The next morning he walked to the weavers' quarter.
It was a maze of narrow alleys and small connected courtyards, where the steady clatter of looms usually filled the air from first light until well past dusk. The women who worked there had long been famous for their skill — their finished tapestries sold in markets as far off as the eastern sea, their intricate patterns copied by lesser weavers in a dozen distant cities, their fingers faster and surer than any others in the whole kingdom.
But today, every loom sat silent.
The unnamed disciple walked slowly through the alleys, past doorway after doorway where women sat with idle hands in their laps, looms standing untouched beside them, eyes fixed on nothing at all. He had heard the rumor that the weavers had simply stopped their work sixty moons earlier, the very day news of Zara-Chabby's disappearance reached this quarter. He had not quite believed it until now.
He found the eldest weaver seated in the largest of the courtyards. Her name was Amara. She was eighty years old, possibly older. Her hair had gone white as fresh snow. Her hands had knotted painfully with age. Cataracts had clouded her eyes to a soft grey film. But her voice, when she finally spoke, was clear as a struck bell.
"You are the one they've taken to calling the quiet one," she said.
"I am no one," said the unnamed disciple.
"You are the one who sat on Zara-Chabby's rock all these years. The one who spoke plainly to the blacksmith. The one who told that poor young man the truth about his dead father, whether he wanted to hear it or not."
"I am the one who tells the truth when it's asked for."
Amara laughed — a dry, cracked sound, like autumn leaves skidding across bare stone.
"The truth. And what, precisely, is the truth here? That Zara-Chabby is gone? We already know that. That the temple stream has run dry? We know that too. That the world, against every fear, has not actually ended? We know even that much. But knowing something is not the same as feeling it. And I have not properly felt a single thing in sixty full moons."
She held up her hands — knotted, twisted, once famously skilled hands that had woven tapestries beautiful enough, it was said, to have moved kings to tears.
"These hands have not touched a loom since the very day he left us. Not because I am angry at him. Not because I am simply sad about it. Because I have entirely forgotten why I would bother. Why weave anything at all? Why create, in a world where even the wisest man alive could walk casually into a forest and vanish without a trace? What, precisely, is the point of any of it?"

The unnamed disciple sat down across from her, unhurried.
"You weave," he said, "because you are, at the very root of yourself, a weaver. The stream flows because it is a stream, and streams flow. The sun rises each morning because it is the sun, and that is simply what suns do. You require no larger reason for any of it. You need no permission from Zara-Chabby, living or dead. You do not need the entire world to finally make sense before you're allowed to weave again. You weave, in the end, because weaving is what you do."
Amara shook her head firmly. "That has never once, in eighty years, felt like enough of a reason to me."
"It is, in fact, the only reason that has ever actually been enough for anyone. The birds do not sing because they've settled on a good reason to sing. They sing because they happen to be birds. The stream does not flow toward some grand purpose. It flows because it is water, and water flows downhill. You have spent sixty moons now asking yourself endlessly why. And the asking itself has slowly become a wall. A wall standing directly between you and your own loom. A wall standing between you and the rest of your life."
He leaned in slightly.
"Zara-Chabby never once taught anyone to ask why. He taught us, instead, to see. To see the thread clearly. To see the pattern as it slowly emerges. To see the particular beauty hidden inside the simple act of making something, even when the making leads nowhere in particular. Even when the finished tapestry is destined, one day, to burn. Even when not a single soul is left watching you do it."
Amara sat in silence a long while. The courtyard around them had gone still. The other weavers had quietly gathered at its edges to listen, their own idle hands hanging at their sides.
"You speak like him," she said finally.
"No," the unnamed disciple said. "I speak like myself. For the first time in thirty years, I am finally speaking as myself."
He rose to leave.
"Your loom is waiting for you," he said. "Your thread is waiting. Your own two hands are waiting. They have all been waiting patiently for sixty moons now. Do not make them wait one day longer than that."
He walked away.
Behind him, faintly, he heard the unmistakable sound of a loom starting up.
A small sound. A tentative one. The sound of a woman who had forgotten, for a season, how to weave, and was slowly, carefully, remembering — thread by thread, pattern by pattern, breath by unhurried breath.
The sound, in short, of someone quietly beginning again.

He walked on through the quarter as, one by one, the other looms came back to life around him.
Not because he had commanded a single one of them to start. Because he had simply reminded each weaver, in turn, of something she already, somewhere underneath the grief, still knew. That the thread itself never asks why it's being pulled. That the pattern requires no larger purpose to justify its own existence. That the hands, given half a chance, remember what the heart has spent sixty moons quietly trying to forget.
He stopped at the quarter's edge and looked back once.
The sound of the looms filled the narrow alleys behind him — not the frantic, desperate clatter of weavers racing to make up lost time, but something slower, steadier: the particular sound of people who have finally remembered that the weaving itself was always the point, that the pattern was always the prayer, that the thread, in the end, was the only truth that had ever really mattered.
He smiled. A small, cracked, entirely real smile.

The potters' quarter, when he reached it, was quieter still.
The kilns stood cold. The wheels sat motionless. Clay had dried to dust in the corners of every workshop he passed. The potters themselves sat in their doorways, hands empty in their laps, eyes fixed on nothing at all, exactly like the weavers before them.
He had heard that the potters had actually stopped working even earlier than the weavers had — that they had lost something the moment Zara-Chabby vanished that went deeper than simple hope or purpose. They had lost, specifically, their trust. Trust in the clay itself. Trust in the wheel beneath their hands. Trust, ultimately, in their own two hands to do what those hands had done a thousand times before without conscious thought.
He found the eldest potter in the smallest of the workshops. His name was Dagan. Seventy years old, perhaps a little more. His hands were permanently stained with clay dried in so long ago that it had become, in a sense, part of his own skin. His eyes were the deep brown of turned earth — unreadable, patient, waiting.
"You are the one they call the quiet one," Dagan said, without looking up.
"I am no one."
"You are the one who spoke with the weavers this morning."
"I am the one who reminds people of what they already, deep down, know."
Dagan nodded slowly. "And what, precisely, do I already know?"
The unnamed disciple bent and picked up a lump of long-dried clay from the workshop floor. It was hard now, cracked through, entirely useless in its current state. He held it out in his open palm.
"You know that this clay was once soft in your hands. You know it could still be shaped into something beautiful, given the chance. You know you have simply forgotten how to shape it — not for any want of skill, which you still clearly have. For want of trust. Trust that the clay will not crack under your hands. Trust that the wheel will not wobble beneath you. Trust that your own fingers will remember, without needing to be told, what they have already done a thousand times before this."
He placed the dried lump directly into Dagan's open palm.
"The clay itself does not care whether Zara-Chabby is gone. It does not care whether the temple stream has run dry. It does not care, in the least, whether the whole world has quietly ended around it. The clay is simply clay. It waits, patiently, exactly as it has always waited. The real question was never whether the clay was ready to be shaped again. The only real question was ever whether you were ready."

Dagan stared down at the clay resting in his palm. His fingers began to move against it — not deliberately at first, but instinctively, as though his hands carried a memory his conscious mind had long since let go of.
"The clay is dead," he said quietly.
"The clay is not dead. The clay is only waiting. There's a real difference between the two, if you look closely enough."
Dagan sat in silence a long while after that. The workshop around them had gone entirely still. The other potters had gathered quietly at the doorway to listen, their own empty hands hanging loose at their sides.
"I used to love this clay," Dagan said finally, his voice thick. "I loved how it felt in my hands — cool at first, then warm, always somehow alive under my fingers. I loved the way it moved, obedient and unpredictable at once. I loved watching it become something it had never once been before. A bowl. A cup. A vessel, eventually, for water, or wine, or the ashes of someone's dead."
His voice cracked slightly.
"And then Zara-Chabby walked into that forest and never came back. And the clay itself started to feel... different to me. Cold. Genuinely dead, this time, in a way it had never felt before. As though I'd been fooling myself, quietly, for seventy straight years."
The unnamed disciple knelt beside him in the dust.
"You were never fooling yourself. You were simply making. And making, properly done, is never a lie of any kind. That bowl you shaped sixty years ago — the one still sitting on the temple altar even now — is it still a bowl today?"
"Yes."
"Does it still hold water, exactly as it always has?"
"Yes."
"Then the clay was alive the whole time. The clay is alive, right now, in your hand. Zara-Chabby's absence never killed the clay itself. It killed something quieter, in you. And that particular something — that doubt, that private fear, that slowly eroded trust — that, unlike the dead, can absolutely be resurrected."
He stood up.
"Not by me. By you. By your own two hands. By the wheel, waiting patiently in the corner. By the clay itself, which has never once stopped waiting for you. The resurrection, in the end, is always in the making. The making itself is the prayer. And the prayer, as it turns out, is the only thing that has ever genuinely saved anyone."
He walked away.
Behind him, he heard the low, familiar sound of a potter's wheel beginning to turn.
Slowly, at first. Then faster. Then, at last, steady and sure.
The sound of a man, quietly, remembering.

By the time he reached the quarter's edge, wheel after wheel had begun turning again around him, one workshop at a time.
Not because he had ordered a single potter back to their bench. Because he had simply reminded each of them, in turn, of something already sitting quietly inside them the whole time. That clay does not ask why it is being shaped. That the wheel needs no larger reason to keep turning. That the hands, given the smallest opening, remember precisely what the grieving heart had spent sixty moons trying, without success, to forget completely.
He stopped once more at the edge of the quarter and looked back.
The sound of turning wheels filled the narrow lanes — not the frantic, catching-up sound of potters racing to make up for lost time, but the slow, patient, steady sound of craftsmen who had finally remembered that shaping clay was, in its own quiet way, a kind of healing. That the vessel itself was the prayer. That the clay, all along, had been the truth.
He smiled again — small, cracked, and entirely real.

At the center of the city, where the square opened wide and the tamarind trees stood oldest, he found the children.
They were always there, playing — running, laughing, chasing, falling down and scrambling back up without a second thought. They did not care, particularly, about Zara-Chabby's disappearance. They did not care about the temple stream running dry. They did not carry, the way the adults around them did, sixty moons of accumulated waiting, or grief, or rumor.
They cared, entirely and without apology, about now.
The unnamed disciple sat at the square's edge and simply watched them for a while.
A girl was teaching a much younger boy to skip flat stones across a puddle left behind by the previous night's rain. A cluster of boys played some loud, chaotic game with a ball stitched from old rags, shouting and shoving each other good-naturedly through the settling dust. A toddler sat contentedly in the shade of a tamarind tree, working through a whole ripe mango, sweet juice running unchecked down her chin.
None of them were waiting for anything at all. None of them were hoping, in any formal sense, for a sign. None of them were the slightest bit afraid.
They were simply, completely, living.
Something stirred in the unnamed disciple's own chest, watching them — something he had not felt clearly in sixty full moons. Something that had been quietly buried under all those years of sitting, and silence, and the accumulated weight of being someone's disciple for three full decades.
Joy.
Not the joy that comes from finally understanding something difficult. Not the dry, satisfied joy of hard-won wisdom. The much simpler joy of watching — the plain, uncomplicated joy of seeing children play, and understanding, in your own body, that the world, despite absolutely everything that had happened to it, was still turning.

A girl approached him where he sat. Ten years old, perhaps eleven, her hair braided through with bright ribbons, her feet entirely bare, her eyes the exact grey-green of the stream after a hard rain — deep, and genuinely impossible to fully read.
"You're the quiet one," she said, matter-of-fact.
"I am no one," he said, though he was smiling now as he said it.
"You're the one who sat on Zara-Chabby's rock all these years."
"I sat. I am still sitting, some days. The rock is still there, exactly where it's always been."
She tilted her head, studying him frankly. "My grandmother says you're a ghost."
"Does she, now."
"She says you stopped living the day Zara-Chabby left. She says you've been sitting on that rock for sixty whole moons, just waiting to finally die."
The unnamed disciple looked at her carefully. Her eyes held no fear at all. Only open curiosity.
"Your grandmother is partly right, as it happens," he told her honestly. "I did, for a long while, stop living in any real sense. I sat on that rock, and I waited. Not to die, exactly. To remember something. To remember that sitting still is not the same thing as actually living. To remember that the stream keeps flowing whether or not I happen to be watching it. To remember that children go on playing whether or not I ever bother to join them."
He rose to his feet.
"Show me how to skip a stone properly."
The girl grinned, delighted. "It's easy, you just—"
"I already know the mechanics of it. I want to watch you do it."
She picked a flat stone from the dirt, flicked it out across the surface of the puddle with a practiced snap of her wrist. It skipped — once, twice, a clean third time before finally sinking.
"Like that," she said, satisfied.
The unnamed disciple smiled. It was not a small smile this time. Not a cracked one either. It was, for the first time in longer than he could easily count, a genuinely whole smile — wide, warm, full of something that had been quietly missing from his face for sixty solid moons.
"Again," he said.
She skipped another stone. Then another. And another after that.
And the unnamed disciple simply watched her do it.
Not as a teacher watching a student. Not as a disciple weighing a lesson. Not as a man who had spent thirty careful years sitting beside one particular stream, waiting for meaning to finally arrive.
As a plain witness — to the simple, impossible, entirely glorious fact of one small girl skipping stones across a puddle, in a dusty square, in a city that had, for sixty moons, forgotten how to properly feel much of anything at all.

The other children gathered around him soon enough.
They asked him no real questions. They wanted no teaching from him at all. They only asked him to play — and, to his own quiet surprise, he did.
He chased them across the square. He helped build a wobbling tower out of loose stones that fell over twice before finally holding. He let them braid ribbons unevenly into his long grey beard, laughing at the ridiculous result. He sat down in the dust himself and ate a whole mango, letting the juice run freely down his own chin, laughing at the sheer stickiness of it all.
The watching adults at the square's edges reacted in every possible way. Some looked openly shocked — the quiet one, playing like a child himself? Some were plainly amused — the great disciple, the teacher, the man who had sat unmoving on Zara-Chabby's rock for sixty entire moons, now covered head to beard in mango juice and bright ribbons.
And a few, quietly, were envious.
Because the children needed none of what this valley usually offered. They needed no Zara-Chabby, no careful teachings, no riddles designed to crack a mind open, no approval from any disciple, named or unnamed. They needed only the sun overhead, the water at their feet, the dust beneath them, and each other.
And on this particular afternoon, they had every one of those things in generous supply.
The unnamed disciple played until the sun finally began to set. Then he sat back in the shade of a tamarind tree, chest still heaving from the running, his heart, for the first time in longer than he could easily measure, genuinely full.
The girl with the braided, ribboned hair settled into the grass beside him.
"You're not a ghost," she declared.
"No," he agreed. "I am not."
"You're alive."
"I am that too."
She nodded, entirely satisfied with this conclusion. "Good. Ghosts are boring, anyway."
She scrambled up and ran off to rejoin the other children.
The unnamed disciple watched her go. He didn't smile after her. He didn't frown either. He simply witnessed it — the way the stream witnessed everything that ever moved through it, the way the cave witnessed everything that ever sheltered inside it, the way the strange child in the clearing, wherever he still was, witnessed the whole turning world without ever once needing to be seen doing it himself.
And somewhere — far off, or perhaps, as always, very close by — a laugh moved once through the square.
Not loud. Not soft.
Simply present.
The laugh of Zara-Chabby.

The unnamed disciple walked on to the edge of the city that evening, where the houses finally thinned out and the open fields began.
He had heard there was a woman living out there who had loved Zara-Chabby once — not the way a disciple loves a teacher, but the way, simply and completely, a woman loves a man. She had been young when he was young, long before there had been any disciples at all, any teachings, any careful decades of silence. She had walked beside him along this very stream once, back when he had been only himself.
Her name was Elara.
She was old now — older than the unnamed disciple, older than Koran, older, as far as anyone in Madasara could say, than anyone else left living in the city. Her hair had gone entirely white. Her skin had thinned to something like paper. Her eyes were the pale color of the sky just before dawn breaks — distant, quiet, full of a light that had not yet fully arrived.
She sat in a simple wooden chair outside her small house, facing west, toward the place where the sun set and the dark edge of the forest began.
The unnamed disciple approached slowly.
"I've come to see you," he said.
She didn't turn her head. "I know. I've been waiting."
"Sixty moons?"
"Longer than that, by far. I have been waiting sixty years, if you want the true count. Since long before he ever became Zara-Chabby. Since before he was, in any real sense, anyone at all."
She turned her head then, finally, to look at him directly. Her eyes were not, up close, pale in the least. They were bright. Bright as the sun. Bright as the stream. Bright, he thought, as the light that does not deem.
"You sat on his rock," she said. "You sat where he once sat. You breathed the same air he breathed there. You watched the same water he used to watch."
"I did."
"Did you feel him there, ever?"
The unnamed disciple was quiet a long while. The sun sank lower behind them. Their shadows stretched long across the packed dirt.
"I felt something," he said finally. "Not him, exactly. Something moving through him, once. Something that existed long before he was ever born, and will very likely still be here long after everyone alive today has forgotten his name entirely."
Elara nodded slowly, as though this confirmed something she had suspected all along. "That is precisely what I felt too, once. Walking beside him by this same stream, all those years ago. Holding his hand. Lying beside him in the dark. I never loved him, exactly, not the man himself. I loved something moving through him. He was a kind of door. And I spent years, foolishly, trying to open it."
She paused.
"And then, one day, he simply closed that door himself. He walked away from me. He became Zara-Chabby instead of simply being a man. He stopped being someone I could hold, and became, instead, a teacher. And I was left standing on the other side of that closed door, still knocking."

The unnamed disciple sat down in the dirt beside her chair.
"Did you ever stop knocking, in all that time?"
"No. But the knocking changed its character, over the years. At first I knocked in anger. Then in grief. Then, for a while, with real hope. Then with something closer to despair. Then, eventually, with nothing behind it at all. Simply knocking, because knocking was the only thing I had left to do with my hands."
She looked down at those hands now — thin, papery, the same hands that had once held Zara-Chabby's own hands, decades earlier.
"Sixty moons ago, the day he finally walked into that forest for good, I felt something inside me break. Not my heart — that had broken long before, and healed over, badly, years earlier. Something deeper than that. Something that had been quietly holding the rest of me together all that time. The last thread of hope that he might, one day, actually come back. That he might finally see me properly. That he might, somewhere in all his wisdom, still remember."
"And now?" the unnamed disciple asked gently.
Elara was silent a long moment. The sun finally dipped below the horizon entirely. The first stars appeared overhead, faint and trembling.
"Now I simply sit here," she said. "I watch the sunset most evenings. I wait for nothing in particular anymore. And I am... not happy, exactly. Not sad either, not really. I am simply here. And perhaps, after everything, that turns out to be enough after all."
The unnamed disciple reached over and took her hand. It was cold, thin, and fragile in his own.
"He remembered you," he told her quietly.
She looked over at him sharply. "How could you possibly know that?"
"Because he spoke of you once, many years ago, when I was still young enough to be surprised by such things. He said, there was a woman who loved me before I was worthy of being loved at all. I walked away from her because I was afraid of what her love asked of me. And I have never once, in all the years since, stopped being sorry for it."
Elara's bright eyes filled slowly with tears. Not tears of grief this time. Tears, unmistakably, of recognition.
"He said that? Those actual words?"
"He said exactly that."
She wept then — not loudly, but softly, steadily, the way a person weeps who has been carrying the same private sorrow for sixty years and has finally, at long last, allowed themselves to be truly witnessed in it.
The unnamed disciple held her hand until the weeping finally passed. Then he rose to leave.
"I'll come back to see you," he said.
"Don't promise me things you can't keep," she warned him gently.
"I will come back," he repeated anyway. "Not because I am certain of it. Because I choose, right now, to try."
He walked off into the gathering dark.
Behind him, Elara sat on in her chair, still facing west, where the sun had fully set now and the forest had gone black against the sky.
But her eyes — her eyes were no longer pale at all.
They were, unmistakably, bright.
Bright as the stream. Bright as the newly arrived stars. Bright as the light that does not deem.

The next morning, the unnamed disciple walked once more to the marketplace.
It was crowded now — more crowded, in fact, than it had been in years. The weavers had returned in force to their looms. The potters had returned to their wheels. Children filled the square, playing exactly as they had the day before. The whole city, in its own halting way, seemed finally to be waking up.
But not every corner of it had woken yet.
He found the merchant occupying the largest stall at the market's very center. His name was Silas. Fifty years old, perhaps fifty-five. He was fat — not the comfortable fat of genuine wealth, but the heavier, sadder fat of despair, the particular weight carried by a man who has stopped moving through his own life and started, instead, simply consuming whatever was closest to hand.
His stall was piled high with fine goods — cloth imported from the east, spices carried up from the south, wine brought in from the west, jewels traded down from the north. But he wasn't selling any of it. He sat instead on a heap of cushions, eating dates one after another, his eyes fixed on absolutely nothing.
"You're the quiet one," he said, without much interest.
"I am no one."
"You're the one who's been walking the city, waking up the dead."
The unnamed disciple sat down across from him, uninvited. "I don't wake the dead. I remind the living that they still happen to be alive."
Silas laughed — a bitter, hollow sound with nothing warm left in it at all.
"I have not been alive, by any honest measure, for sixty moons. I have been waiting. Waiting for Zara-Chabby to finally return. Waiting for the temple stream to run again. Waiting for the entire world to make sense to me one more time."
"And while you waited, you simply grew fat."
Silas's face reddened sharply. "That's a cruel thing to say to a man."
"It's an honest thing. You stopped moving through your own days. You stopped selling anything at all. You stopped, in every meaningful sense, living. You've been sitting in this exact stall, eating dates, watching the entire world pass you by without you in it. And you've told yourself, all this time, that you were waiting for Zara-Chabby's return. But that was never really true. You were waiting for permission. Permission to live again. Permission to feel something. Permission, simply, to be."
He leaned forward across the cushions.
"Zara-Chabby cannot grant you that permission, wherever he is. No one can hand it to you, not me, not the stream, not even the strange child who lives, or once lived, in that forest clearing. Only you can grant yourself that."

Silas stared at him, hands visibly trembling now, dates fallen forgotten from his loosened fingers.
"You don't understand," he whispered. "I've lost everything that mattered to me. My wife left. My children no longer speak to me at all. My business has been quietly dying for years. I have nothing left."
"You have your breath. You have your two hands. You have this stall, and everything piled up inside it. You have the sun overhead, and the air around you, and solid ground beneath your feet. That is not nothing, Silas. That, properly counted, is genuinely everything."
The unnamed disciple rose.
"Sell something today. Not because you need the money, though I suspect you might. Because selling is simply what you do, at the root of yourself. Because the act of trading with another person is, in its own quiet way, the act of connecting with them. Because this cloth, and these spices, and this wine, and these jewels — they are all sitting here waiting. Waiting to be touched. Waiting to be bought by someone who needs them. Waiting, above all, to actually be used by someone, instead of simply hoarded."
He picked up a bolt of cloth from the stall — blue, the exact color of the sky at noon.
"This cloth was woven by hands that never once asked anyone's permission to weave it. It was dyed by hands that did not wait around for Zara-Chabby to return before getting on with the dyeing. This cloth is entirely real. It is here, right now, in your two hands. It is waiting only for you to finally sell it to someone."
He pressed the bolt into Silas's open, shaking hands.
"Sell it," he said. "Not for me. For yourself."
He walked away without waiting to see what would happen.
Behind him, faintly, he heard the sound of a merchant's voice calling out to a passing customer.
A small sound. A tentative, out-of-practice sound. The sound of a man who had forgotten how to sell anything at all, and was slowly, carefully remembering — word by word, transaction by transaction, breath by unhurried breath.
The sound, once again, of someone quietly beginning over.

He walked on through the marketplace as, stall by stall, commerce slowly stirred back to life around him.
Not because he had commanded a single merchant to do anything at all. Because he had simply reminded each one, in turn, that the cloth itself does not ask why it's being sold. That the spice needs no larger justification. That the wine, whatever else has happened in the world, does not particularly care whether Zara-Chabby is gone or not.
He stopped at the marketplace's edge and looked back one last time.
The familiar sound of haggling filled the square behind him — not the frantic, catching-up sound of merchants racing to make up for sixty lost moons, but something slower and steadier: the sound of people who had finally remembered that the trade itself was the connection, that the sale itself was a small kind of prayer, that the goods themselves, in the end, were simply the truth passing from one hand into another.
He smiled — small, cracked, entirely real.

The Temple at Noon
The unnamed disciple climbed the hill to the temple a second time.
The courtyard was still full, exactly as he had left it. The weeping woman still wept, though more softly now. The praying man still moved his lips silently. The child was still there too, still drawing.
But something in all of it had visibly changed.
The weeping had grown gentler. The praying had grown quieter. The child's drawing had grown enormously — a vast spiral now, sprawling across nearly half the courtyard's stone floor, a spiral that seemed, somehow, to move, to breathe, to actively flow even while perfectly still.
The child looked up as he approached.
"You came back," she said, pleased.
"I said I would."
"I didn't quite believe you, honestly."
"Neither, if I'm honest, did I."
She grinned at that — a wide, gap-toothed grin full of mischief and something close to real light.
"I drew a stream," she told him, pointing proudly at the spiral.
"It doesn't look terribly much like a stream, if I'm honest."
"It looks like a stream feeling something," she corrected him seriously.
The unnamed disciple knelt beside her in the dust and studied the spiral properly. It was not water, not really. It was not even a stream in any literal sense. It was something else entirely — something this child had somehow seen clearly, that every adult in this courtyard had, in their grief, quietly forgotten how to see for themselves.
"What, exactly, does a stream feel?" he asked her.
The child considered this seriously for a long moment. "It feels like flow," she said finally. "Not happy, exactly. Not sad either. Just... moving. Moving because moving is simply what it does, without needing a reason."
The unnamed disciple went quiet at that. The child had just spoken, without any apparent effort, a truth it had taken him thirty long years of sitting to learn for himself.
"The stream never asks why," he said slowly.
"No," the child agreed. "It just flows."
She turned back to her drawing, entirely satisfied.
The unnamed disciple sat in that courtyard until the sun climbed to its exact zenith. Noon. Another last noon — though, once again, no one present yet understood it as such. The sun stood directly overhead, white and merciless as it had that very first gathering, casting no shadow anywhere across the stones. The cracked, dry bed of the old stream glittered faintly in the light, like a wound that had, at long last, finally begun the slow work of healing.
And in the courtyard around him, the weeping woman finally stopped weeping altogether. The praying man opened his eyes. The child set down her stick and looked up, waiting.
And the unnamed disciple, at last, spoke.

"Sixty moons ago," he began, "Zara-Chabby walked into the forest. He did not look back over his shoulder. He said no formal goodbye to any of us. He simply left."
The people scattered across the courtyard turned to face him. Some had clearly been waiting for exactly this moment — for the quiet one to finally speak, to teach, to explain something plainly at last. Others looked frightened, as though his words might shatter whatever fragile peace they had slowly, painfully built for themselves over sixty moons.
"Zara-Chabby left," he went on, "because he had already taught us everything a man could teach with words alone. He left because the final lesson was never going to be found in more words. It was always going to be found in absence itself. In the silence that follows an ending. In the wound that refuses, stubbornly, to simply close over."
He looked slowly around the gathered crowd.
"You have all spent sixty moons waiting for his return. Waiting for this dry stream bed to run again. Waiting, above everything, for some unmistakable sign. But the sign, all along, was always you. You are the stream, in the end. You are the water itself. You are the one who must, finally, learn to flow again."
He gestured toward the child's enormous spiral drawn across the stones.
"This child drew a stream today. Not a stream of water — a stream of feeling. A stream that flows whether its physical bed happens to be wet or dry underneath it. A stream that flows simply because flowing, at its root, is what a stream does."
He rose to his feet.
"Zara-Chabby is not coming back to us. This temple stream may genuinely never flow again in our lifetimes. But the stream inside each of your own hearts — the one that connects you to each other, to this whole city, to the wider world beyond it — that stream has never once actually stopped flowing, not for a single moment across these sixty moons. You have only forgotten, somewhere along the way, how it feels to sense it moving."
He walked slowly to the courtyard's edge.
"Stop waiting, all of you. Start flowing instead. The last noon, whatever it once meant, is finally over. The first noon of the rest of your lives has already begun, whether you've noticed it yet or not."
He walked away without looking back.
Behind him, the courtyard fell into a deep silence.
Then the weeping woman rose slowly to her feet. She crossed to the child's enormous spiral. She studied it a long moment. She reached down and touched it, gently, with one finger.
And she smiled.
A small smile. A cracked one. A smile that had gone unused for the entire sixty moons.
But it was, unmistakably, real.

The unnamed disciple walked back toward the valley as the sun finally began its long descent.
He was tired — not the ordinary tiredness of the body after a long day's walking, but something deeper, closer to the soul. He had seen too much that day. Felt too much. Witnessed too much all at once. The whole city had opened itself up to him like a single enormous wound, and he had watched, all day long, the light quietly beginning to enter it.
He walked back through the forest, past the clearing where a strange child had once shown him the exact shape of his own emptiness, past the flat stone where an old warrior had once wept for three days straight, past the tamarind trees where children had once played while their parents sat in careful silence nearby.
The valley, when he reached it at last, was quiet.
The stream still flowed exactly as it always had. The cave stood empty. The stone circle waited, patient as ever.
Velen sat within it, drawing in the dirt as he so often did. But his drawings had changed once again — no longer cups, no longer faces, no longer even simple water. Now they were spirals — spirals that seemed, somehow, even in dry dirt, to genuinely move, to breathe, to flow the way the child's temple drawing had.
Ashok sat beside him, silent as he had always been. But his particular silence had shifted its character over these sixty moons. It was no longer the silence of a man with nothing left inside him to say. It had become, instead, the silence of a man who had already said everything that ever needed saying, and had finally made his full peace with the saying of it.
The unnamed disciple walked to Zara-Chabby's rock. He did not sit on it this time. He simply stood beside it.
"I walked through the whole city today," he said.
Velen looked up from his drawing. "What did you see there?"
"I saw people waiting. People hoping, in their own tired way. People afraid, underneath everything. People who had genuinely forgotten how to properly live."
"And?"
"And I reminded them," the unnamed disciple said. "Not with careful teachings. With simple presence. With the plain act of being there beside them. With the truth, spoken as plainly as I could manage it."
Ashok spoke then, his voice soft, barely above a whisper. "Did they listen to you?"
"Some did. Some didn't, and likely never will. Some will come around to it eventually. Some never will, no matter how long they live. That was never truly my concern, in the end. My only real task was to finally speak again — to stop hiding inside my own comfortable silence. To stop quietly pretending that sitting still was ever the same thing as actually living a life."
He looked out at the stream a long moment.
"I have been sitting on that rock for sixty full moons now. I have been waiting, this whole time, for something — though I couldn't have told you, until today, exactly what. A sign, maybe. A final teaching. Some last great revelation. But the real revelation, it turns out, is simply this: there is no revelation waiting anywhere. There is only this. This stream. This rock. This one particular moment. This single breath."
He sat down at last — not on the rock itself, but on the open grass beside Velen, at ground level with everyone else.
"I am finished sitting on Zara-Chabby's rock," he said. "It was always his rock, in the end. Never mine. My place, I think, is here instead — in the dirt, among the drawings, among my fellow disciples, among all the people out there in that city who are still, in their own way, learning how to properly live."
Velen silently handed him a stick.
The unnamed disciple took it. He drew, slowly, in the soft dirt — not a cup this time, not a face, not even a spiral like the ones surrounding him.
He drew a simple circle.
Nothing more elaborate than that.
And at its exact center, he drew one single dot.
Then he looked up at Velen, waiting.
Velen studied the drawing a long moment. He did not fully understand what it meant. He found, somewhat to his own surprise, that he no longer needed to.
He only needed to see it.
And in the seeing of it, he felt something move through him that he had never quite felt before.
Completion.
Not the completion belonging to an ending. The completion, instead, that belongs only to a genuine beginning.

The next morning, the city of Madasara woke to something different.
The weavers were already at their looms before first light. The potters were already at their wheels. The merchants stood in their stalls, calling out to early customers. The children filled the square exactly as they had the day before. The old lover, Elara, sat once more in her chair facing west — but her eyes, this time, were no longer pale at all. They were, unmistakably, bright.
The temple stream remained as dry as it had been for sixty moons. Zara-Chabby remained exactly as gone as he had ever been. The world, in every practical sense, remained precisely as broken as it had been the day before.
But something, unmistakably, had shifted.
The waiting had finally, quietly, stopped.
Not because the people of Madasara had given up on hope entirely. Because they had, at long last, finally understood something crucial: that hope was never meant to be the same thing as simple waiting. Hope, properly understood, is action. Hope is a continuous act of choosing. Hope, in the end, is nothing more or less than living fully, one ordinary day at a time.
The woman who sold limes was smiling that morning — not a large smile, but a small, cracked, entirely genuine one, the first she had managed in sixty full moons.
The young man who had spent so long waiting for Zara-Chabby to somehow return his dead father was no longer sitting frozen on his blue-painted doorstep. He walked the streets that morning instead, his eyes still wet, his heart visibly fuller than before, his hands open and unclenched at his sides.
The weavers wove. The potters shaped their clay. The merchants sold their goods. The children played exactly as children always had, and always would.
And the unnamed disciple — the quiet one, the man who had sat on Zara-Chabby's rock for sixty long moons — sat now instead in the stone circle back in the valley, drawing his own spirals in the dirt, laughing quietly at the leftover stickiness of mango juice still drying on his fingers.
The city was not, in any complete sense, healed. It would likely never be fully healed, not in the way people sometimes imagine healing to work. Healing, he had come to understand, was never really a fixed destination anyone could arrive at once and for all. Healing was only ever a direction a person, or a whole city, chose to keep walking in.
And Madasara, at long last, after sixty full moons of standing perfectly still, had finally, unmistakably, begun to move again.

Exactly sixty moons to the day since Zara-Chabby had first walked into the forest, the unnamed disciple returned once more to the temple on the hill.
The courtyard was full again — but full, this time, not of people waiting for something. Full of people actively doing something. Weavers had carried their looms up the hill with them. Potters had brought their wheels. Merchants had set up small makeshift stalls along the courtyard's edges. Children ran freely through the dust exactly as they did everywhere else in the city now.
The old stream bed remained just as dry as ever.
But no one in that crowded courtyard was looking at it anymore.
They were looking, instead, at each other.
The unnamed disciple stood quietly at the courtyard's edge. He offered no teaching. He spoke no words at all. He simply witnessed it, the whole scene unfolding in front of him.
The sun climbed steadily toward its zenith. Noon. Another last noon — except that this time, at long last, everyone gathered there understood, without needing to be told, that it truly was the last one of its particular kind.
Not because something was quietly ending, the way the very first last noon had felt.
Because something new was, unmistakably, beginning.
The child who had first drawn the great spiral was there again, though older now — twelve, perhaps thirteen years old. Her braids had grown longer. Her eyes had grown noticeably deeper. But she was, unmistakably, still drawing.
She had begun an entirely new spiral this time — vast, intricate, sprawling now across more than half the courtyard's stone floor. It was not, this time, meant to represent a stream at all. It was not meant to represent water in any specific sense. It was meant, as far as anyone could tell, to represent everything at once. The city. The valley beyond it. The forest between them. All the people gathered here. Both the stream that had run dry, and the one, elsewhere, that still ran freely.
She looked up as the unnamed disciple approached.
"Is it finished yet?" she asked him.
He studied the sprawling spiral a long moment. It was clearly not finished. It would, he suspected, never truly be finished. That, he understood now, was precisely the point of it.
"It is becoming," he told her simply.
She nodded, entirely satisfied with that answer. "That's exactly what I thought too."
She turned back to her drawing without another word.
The unnamed disciple sat down in the dust beside her. He watched the weavers weave. He watched the potters shape their clay. He watched the merchants sell their goods, and the children run freely through it all.
He watched, quite simply, an entire city finally waking up.
And somewhere — far off, or perhaps, as always, very close by indeed — a laugh moved once more through the courtyard.
Not loud. Not soft.
Simply present.
The laugh of Zara-Chabby.

The unnamed disciple closed his eyes.
The laugh surrounded him entirely — not arriving from any single direction, but from every direction at once. From the dust beneath him. From the sun directly overhead. From the great unfinished spiral spread across the stones. From the long-dry bed of the temple stream itself. From the hearts, unmistakably, of every weaver and potter and merchant and child gathered in that courtyard around him.
It was Zara-Chabby's laugh. He knew it instantly, the way you know your own name spoken aloud across a crowded room. He had heard it perhaps a thousand times over thirty years — at the close of a teaching, at the punchline of some half-remembered parable, in the particular silence that always followed a riddle sharp enough to crack a mind wide open.
But this time, something in it was different.
This time, the laugh was not arriving from somewhere outside him. It was rising up from inside him instead. It was, he realized, his own laugh returning to him — or rather, the laugh that had always belonged to him, long before he had learned to be so relentlessly serious about everything, long before he had become anyone's disciple at all, long before he had learned, patiently and carefully, to build a wall around his own private emptiness and call the finished wall by his own name.
He laughed.
Not loudly. Not softly either. Just enough to feel it, unmistakably, in his own chest, in his throat, in the corners of his closed eyes.
The people scattered through the courtyard turned to look at him, plainly confused. They had not heard the laugh he'd heard. They had not been present in that forest clearing. They had not sat, as he once had, across a small fire from a strange, ancient-eyed child. They were still, every one of them, learning, still becoming, still slowly waking up to their own lives.
But they saw, unmistakably, his smile — wide, warm, entirely real, the smile of a man who had finally, after sixty long moons, stopped waiting for anything at all.
And in seeing it, something shifted quietly in each of them.
The temple stream remained just as dry as it had been for sixty moons. Zara-Chabby remained just as gone as he had ever been. The world, in every practical sense, remained precisely as broken as it always had been.
But the laugh — the laugh, unmistakably, was here.
And the laugh, it turned out, was enough.

The unnamed disciple opened his eyes. He looked at the child beside him. He looked at her enormous, unfinished spiral. He looked out at the whole city, once frozen in sixty moons of waiting, now finally, unmistakably, beginning to properly live again.
"Sixty moons," he said quietly.
The child looked up. "Sixty moons?"
"Sixty moons since Zara-Chabby walked into that forest and never came back out. Sixty moons of waiting for him. Sixty moons of grief. Sixty moons, if we're honest, of slowly forgetting who we were before any of it happened."
He paused.
"And now — now, at last, the waiting itself is finally over. Not because Zara-Chabby has returned to us. Because we have returned, instead. To ourselves. To each other. To the stream that has never once stopped flowing, whether or not we bothered to watch it."
He rose slowly to his feet.
"The last noon, whatever it once meant to any of us, is finally over. The first noon of the rest of all our lives has already begun. And the laugh — Zara-Chabby's laugh — was never simply a memory to be mourned. It is a presence, still here among us. It is the space that lives between each of your own breaths. It is the wound where the light finally enters. It is this spiral drawn in the dirt. It is a child skipping stones across a puddle. It is a weaver at her loom. It is a potter at his wheel. It is a merchant calling out to a customer. It is you. It is me. It is, simply and completely, us."
He raised both hands toward the open sky.
"Thus the last noon passes, at last, into memory. Thus the first noon rises to take its place. Thus the stream flows on — not because anyone commands it to flow, but because flowing, in the end, is simply what a stream does."
He lowered his hands slowly.
"Thus we live."
The courtyard fell into a deep, full silence.
Then the child beside him laughed.
It was a small laugh. A bright one. A laugh that had never once been buried, never forgotten, never once made to wait for anyone's permission to exist.
The laugh of a child who had somehow always known, without needing to be taught, that the wound is exactly where the light gets in.
The laugh of Zara-Chabby.
And the unnamed disciple — the quiet one, the man who had sat on Zara-Chabby's rock for sixty long moons — laughed right along beside her.
Not loudly. Not softly.
Simply, unmistakably, present.

Thus the last noon came, finally, to its close. The city of Madasara woke, at long last, from its sixty-moon sleep. The weavers wove. The potters shaped their clay. The merchants sold their goods. The children played on, exactly as children always have. The temple stream remained dry, but no one there was looking at it any longer.
They were looking, instead, at each other.
And somewhere — far away, or perhaps, as always, very close — the laugh of Zara-Chabby went on echoing through the streets, through the courtyards, through the hearts of everyone who had finally, at long last, stopped waiting, and started, simply, to live.
Sixty moons.
Sixty moons without Zara-Chabby.
But the laugh — the laugh had never actually left them.
It was the space between their breaths. It was the wound where the light entered. It was the spiral drawn in the dirt. It was a child skipping stones. It was a weaver weaving, a potter shaping, a merchant selling, an old lover finally remembering.
It was, in the end, simply them.
And they, at long last, were enough.
Thus spoke Zara-Chabby — not in words this time, but in a laugh that had never once stopped, in a presence that had never truly left, in the light that does not deem.
Thus the last noon became the first.
Thus the stream flowed on.
Thus, at long last, they lived.
End of Voyage II

`,uk=["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"];function ck({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:dk,chapterTitle:"OF THE VOYAGE II",chapterNumber:5,bookLabel:"Book 3",chapterList:uk})}const fk=`"He is the wisest man who knows himself, and the richest man who is content."
— Attributed to Shakespeare, though the exact source is disputed 

The valley had grown a fence.
Not a fence to keep anyone out — the valley had never once, in all its years, turned away a single soul who came looking for the stream. A fence to mark where the path began. Smooth stones set in a neat line, replacing the old scattered rocks the disciples had once tripped over on their way to sit each morning. Somebody had planted marigolds along it. Somebody had built a small wooden booth at the treeline where a boy of perhaps fourteen sold clay cups shaped, unmistakably, like the ones Velen used to draw in the dirt — a coin apiece, blessed at the stone circle, the boy would tell you, though no one currently living in the valley could say who had done the blessing, or when, or with what words.
The unnamed disciple stood at the fence one grey morning, an old man now, his beard gone entirely white, his hands spotted with the years, and looked at the marigolds for a long time before he said anything at all.
"Who planted these?"
The boy at the booth straightened, eager. "The Keeper, sir. He says the color pleases the spirit of the stream."
"Does he."
"He teaches every third evening, in the circle. He knows all of Zara-Chabby's sayings by heart. All of them. You can ask him anything."
The unnamed disciple looked past the boy, down the neat marigold path, toward the stone circle he had sat inside for the better part of his whole life. There were perhaps sixty people gathered there now, in rows — not the loose, unstructured half-circles of the old gatherings, but rows, facing a raised flat stone where a man in his middle years stood with his arms lifted, mid-sentence, his voice carrying with the practiced cadence of someone who had said the same words enough times that they no longer needed thinking through.
"...for the Master taught us," the Keeper was saying, "that the wound is where the light enters. And so we must each, every one of us, cultivate our wound. Nurture it. Protect it from those who would tell you it has healed too quickly, for a wound too quickly healed lets in no light at all—"
The unnamed disciple felt something in his chest go cold and still, the way water goes still just before it freezes.
He was quoting Rumi. He had turned it into doctrine.

He found Velen that evening in the cave, where Velen still slept most nights despite having, by now, a wife and two grown children of his own in the town below. Velen's hair had gone grey at the temples. His hands, once trembling around a borrowed stick, now moved with the total confidence of forty years' practice — he was, by any honest measure, the finest painter in three valleys, though he had never once sold a single piece of work, only given them away, the way Koran had once given his sword back to the water.
"You saw the fence," Velen said. It wasn't a question.
"I saw the fence. I saw the marigolds. I saw the boy selling cups blessed by a man who has invented his own blessing."
Velen didn't look up from the wall he was working on — a new mural, half-finished, of the old warrior stepping across the stream. "The Keeper isn't a bad man."
"I didn't say he was a bad man. I said he has built a temple where there used to be a question."
"People need somewhere to put their grief." Velen set down his brush at last and turned. "You taught them that yourself. Presence. Witness. A place to sit. He's only giving them a place to sit with a roof over it."
"He is giving them answers." The unnamed disciple's voice, old as it had become, still carried an edge that made even Velen straighten. "I spent forty years learning to say I don't know in as many different ways as there are stars, and that man up there has an answer for everything, delivered before anyone's finished asking the question. Do you know what he told a grieving mother last week? He told her that her son's death was the stream choosing to teach her something. As if the stream chooses. As if Zara-Chabby ever once, in his whole life, told anyone their suffering had a point."
Velen was quiet a long moment.
"You're afraid," he said finally, "that we've built the Sanatorium again. With better scenery."
"Yes." The old man's shoulders dropped, all at once, as though the word itself had let something out of him he'd been holding for months. "Yes, exactly that."

The disagreement that followed was not loud. It never is, in a valley that has spent decades learning the value of silence. It happened instead over three slow weeks, in low voices, at the edges of gatherings, in the particular way that a real rift in a community announces itself — not with shouting, but with people quietly beginning to sit in different halves of the same circle.
Ashok, older now than anyone, nearly blind, sided — to Velen's surprise — with the Keeper.
"He gives them structure," Ashok said, one evening, his clouded eyes fixed on nothing in particular the way they always were now. "You forget how frightening the open circle was, at first. How many people came to this valley over the years and simply left again because we gave them nothing to hold onto. The Keeper holds their hand a little longer than we ever did. Is that truly such a sin?"
"It is if the hand he's holding stops learning to walk on its own," the unnamed disciple said.
"Perhaps," Ashok said. "Or perhaps you have simply grown too old to remember how badly a frightened person wants to be told what is true. You had thirty years with Zara-Chabby before you had to stand on your own two feet. These people have had a rumor and a rock."
There was no answer to that the unnamed disciple could find quickly, and the not-finding of it frightened him more than anything the Keeper had said from his stone platform.

It was Velen, in the end, who broke the stalemate — not with an argument, but with a decision, spoken plainly one night to the two old men who had, between them, shaped nearly the whole of his life.
"I'm going to find him."
The unnamed disciple looked up sharply. "Find who?"
"Zara-Chabby."
A long silence. Somewhere outside, the stream ran on, indifferent as always to what was said beside it.
"He's been gone longer than I've had grey in my beard," the unnamed disciple said at last, gently. "You don't know that he's even—"
"I know he's alive," Velen said, and there was no doubt in it at all, only the flat certainty of a man who has finally stopped arguing with something he's always known. "I've known it the way you know the sun is still up there on a cloudy day. I've simply never had a reason to go looking before now. I have one now."
"And what reason is that?"
Velen looked toward the marigold path, faintly visible through the cave mouth in the last of the light.
"Because someone built a temple to a man who spent his whole life tearing temples down," he said. "And I don't think words are going to fix that anymore. I think only he can. Not because he's wiser than either of you. Because it's his name on the fence. He's the only one with the right to take it back down."
Ashok said nothing. The unnamed disciple, after a long while, only nodded — slowly, the way a man nods when he recognizes a decision has already been made somewhere deeper than the conversation happening in front of him.
"Then go," he said. "And Velen—"
Velen paused at the cave's mouth.
"When you find him. Don't kneel."
Velen almost smiled. "I know."

He left at dawn, alone, with a walking stick, a water skin, and nothing else — no map, because no one in the valley had ever needed one to find Zara-Chabby; he had always simply been found, the way weather is found, by being in the right place at the wrong time.
He walked north first, toward the mountains, because that was where the old warrior had once come from, and it seemed as reasonable a direction as any other. For three days the country was ordinary — farms, a river crossing, a village where an old woman sold him bread and told him, unprompted, that a wise man had passed through years ago and left without paying for his soup, and did Velen happen to know him.
"I might," Velen said.
"Tell him he still owes for the soup."
On the fourth day, in a market town he didn't know the name of, he found the false teacher.
The man had set up in the square, cross-legged on a raised platform not unlike the Keeper's, a small crowd gathered loosely around him. He wore his hair long and unwashed, in what Velen recognized, with a lurch somewhere under his ribs, as a deliberate imitation of every drawing anyone had ever made of Zara-Chabby.
"The wound," the man was saying, "is where the light enters. But the light, my friends, costs. Everything costs. Even enlightenment has its price. For three coppers I will show you where your own wound lies hidden—"
Velen stood at the edge of the crowd for a long while, feeling something between fury and a strange, exhausted pity move through him in waves.
"You've never met him," he said, finally, when the man paused for breath.
The false teacher's eyes found him, and something flickered there — not shame exactly, but the quick calculation of a man assessing a threat.
"Everyone has met him," the man said smoothly, recovering. "He lives in all of us."
"He does not," Velen said. "He lives, as far as I know, somewhere very specific, on two legs, and he has never once in his life charged a single copper for anything, and if he were standing where I am right now he would tell you that a man who sells the shape of a wound has never actually let the light in through his own."
The crowd murmured. The false teacher's composure cracked, just slightly, at the edges.
"And who are you to say?"
"I'm the man who taught you the words you're using," Velen said, and it was not entirely a lie — he recognized, in the false teacher's borrowed cadence, the unmistakable rhythm of his own dirt-drawn spirals, retold badly, secondhand, by someone who had heard a story about a story. "Refund the coppers. Or don't. But stop using his name to do it."
He didn't wait to see whether the man obeyed. He walked on, out of the square, north again, toward the mountains, and did not look back — though something in him, walking away, understood with new and uncomfortable clarity exactly what the unnamed disciple had been afraid of in the valley. It did not take a temple to build a lie. It only took a name people already trusted, and someone willing to borrow it.

The mountains, when he finally reached them a week later, were not the mountains of the old stories — not exactly. They were higher, colder, more indifferent than any description had prepared him for. He understood, climbing, why Zara-Chabby had once said the mountain made a liar of clocks. Time did stop meaning anything up there. There was only the next foothold, and the wind, and the long grey light that seemed to come from everywhere and nowhere at once.
On the second day above the treeline, he found a narrow pass, and in it, a man — not old, not young, sitting on a flat stone with the particular stillness of someone who has been sitting exactly there for a very long time and intends to go on doing so.
Velen's heart lifted before his mind caught up to the disappointment. It was not Zara-Chabby. This man's face was unlined, his eyes a plain, unremarkable brown, nothing like the burning iron the old warrior had once described, nothing like the light Elara had spoken of.
"You're not him," Velen said, before he could stop himself.
The man looked up, unbothered. "No."
"Do you know who I'm looking for?"
"Everyone who comes through this pass is looking for someone," the man said. "Most of them don't say his name. You did. That tells me something."
"What does it tell you?"
"That you're not afraid of finding him." The man studied Velen a long moment. "Most are. They come up here hoping the search will last forever, so they never have to have the conversation waiting at the end of it."
Velen sat down across from him, uninvited, the way he had learned, decades ago, that certain conversations required.
"I'm not afraid of the conversation," he said. "I'm afraid of what's happening in the valley without it."
The man nodded slowly, as though this were the answer he'd been waiting to hear.
"There's a village three days east of here," he said. "Not on any road. You'll have to leave the pass and go down into the gorge, and up the other side, and you'll think, more than once, that you've gone the wrong way entirely. In that village there's an old woman who keeps bees. Ask her about the man who taught her the bees don't need her permission to make honey. She'll know where to send you next."
"That's not an answer. That's a direction."
"That," the man said, and for the first time something that might have been amusement moved behind his plain brown eyes, "is the only kind of answer that's ever actually gotten anyone anywhere."

He found the gorge. He found the village, three days later, exactly as hard to locate as promised, tucked into a fold of land that seemed to actively resist being found by anyone not already looking correctly. He found the old woman among her hives, veiled, unhurried, entirely unsurprised by his arrival.
"You have his walk," she said, before he'd said a word.
"Whose walk?"
"The old one. The one who sat with my bees a long while, once, and told me they didn't need my permission to make what they made. You walk like a man who learned patience from somebody who had none to spare and gave you all of it anyway."
Velen felt something catch in his throat. "You know where he is."
"I know where he was, the last I heard of him, which was some years back now." She set down the frame of honeycomb she'd been tending and looked at him properly for the first time. "There's a valley east of the gorge — not this one, a smaller one, no name that anyone's bothered to give it. There was a man living there, alone, who the shepherds said talked to the goats the way some men talk to their gods. Older than you'd expect. Laughed at nothing, the shepherds said. Laughed like he'd remembered a joke that had taken him thirty years to understand."
Velen was already on his feet.
"How far?"
"Two days, if the weather holds." She studied him a moment longer, something gentler moving into her weathered face. "You'll want to slow down, boy, at the end of it. Whatever you're carrying to say to him — it'll keep the last mile. It's kept this long already."

He did not slow down.
He walked the two days in one and a half, driven by something he couldn't fully name — not urgency exactly, not fear, but the particular pull a man feels when a question he has carried for years finally has a direction to travel in. The land changed as he went, folding into a smaller valley he would never have found on his own, one that seemed to exist slightly apart from the ordinary geography around it, the way the clearing with the child had once seemed to exist slightly apart from the rest of the forest.
On the evening of the second day, cresting a low ridge with the light going long and gold behind him, Velen stopped.
Below him, in the small valley, a thin thread of smoke rose from somewhere near a stand of trees he couldn't quite make out clearly in the fading light. And carried up to him on the still evening air, faint but unmistakable — not felt this time, not sensed in the space between two breaths, not a memory or a presence or a trick of grief-worn hope, but heard, plainly, with his own two ears, the way you hear a bird, or a stream, or your own name called across a crowded room —
came a laugh.
Velen did not move for a long moment. He simply stood on the ridge, the smoke rising below him, the laugh still hanging faintly in the cooling air, and felt, for the first time in the whole long journey, entirely and completely certain of something he had no way yet to prove.
Then he started down the slope, toward the smoke, toward the trees, toward whatever was waiting for him at the bottom of the valley in the last of the light.
Thus Velen walked on, down into the smaller valley, toward the smoke and the laugh and the man who had once told a whole city that the answers were never his to give — and somewhere below, in the gathering dark, something that had been gone a very long time sat waiting, at last, to be found.




`,yk=["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"];function mk({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:fk,chapterTitle:"OF THE VOYAGE III",chapterNumber:6,bookLabel:"Book 3",chapterList:yk})}const gk=`"The aim of art is to represent not the outward appearance of things, but their inward significance." — Aristotle

The smoke was not smoke from a hearth.
Velen understood this the moment he came down off the ridge and into the trees, the way you understand, before you can properly name it, that a sound in the dark is not the sound you were hoping for. Hearth smoke rises thin and grey, apologetic, gone before it's noticed. This rose black at the root and thinned only slowly, unhurried, as though whatever fed it had all the time in creation and saw no reason to burn quickly.
He found the fire in a small clearing at the valley's floor — not a cooking fire, not a fire for warmth, though the night had gone properly cold by then. A fire built for burning things, and fed, deliberately, one object at a time.
And beside it, cross-legged on bare ground, sat a man.
He was smaller than Velen remembered him — or perhaps not smaller exactly, but less, the way a mountain seen up close is always less than the mountain seen from three valleys off, because distance had been doing half the work of greatness all along. His hair had gone entirely white and hung past his shoulders in a tangle that had clearly not met a comb in years. His robe — if it could still be called a robe — was scorched black along one hem, as though he had sat too close to too many fires for too long to fully mind the damage anymore. His hands, resting on his knees, were cracked and weathered as old bark.
But his eyes, when he lifted them to Velen standing at the treeline, were exactly as they had always been. Burning low and steady, like coals that had decided, deliberately, never to go entirely out.
"You took your time," Zara-Chabby said.
Velen's legs, after two days of walking on nearly no sleep, very nearly gave out beneath him. He did not weep. He had expected, somewhere in the long walk north, that he might. Instead he found himself laughing — a short, disbelieving bark of a sound, entirely involuntary, the exact laugh he had once heard echo through a courtyard and mistaken, that first time, for something arriving from outside him.
"You could have sent word," Velen said. "A bird. A dream. Anything."
"I was busy."
"For thirty years?"
Zara-Chabby gestured, without any particular ceremony, at the fire.
"Come and sit," he said. "You've earned the warmth, if nothing else."

Velen crossed the clearing and sat, and for a while — a long while — neither of them spoke at all. The fire cracked and settled. Somewhere in the dark beyond the trees, an animal moved through brush and went still again. Velen watched the flames and slowly understood that the black smoke was not, as he'd first thought, the fire's natural color. It was the color of whatever was being fed to it.
He looked more closely. Near Zara-Chabby's knee sat a modest pile — smaller than Velen would have guessed, given thirty years — of objects waiting their turn. A cloak, finely made, the kind a king's advisor might wear. A ring, heavy gold, set with something dark that caught the firelight strangely. A stack of papers, tied with cord, the top sheet covered edge to edge in careful handwriting Velen didn't recognize. A small wooden box, closed, that Zara-Chabby had not yet decided whether to open before burning.
"What is all this?" Velen asked finally.
"Everything that was not mine."
"That doesn't answer the question."
Zara-Chabby picked up the ring and turned it once in his weathered fingers, watching the dark stone catch and lose the light.
"There is a mountain," he said, "some distance from here, that the local people will not name aloud, because they believe the mountain listens for its own name and answers when called. It is not a mountain in the way you think of mountains. It burns from within. At its summit there is a wound in the earth itself — a mouth, if you like, though the word is too small for what actually happens there — and if you stand at the edge of it and look down, you understand very quickly that you are looking at the oldest fire there has ever been, older than any hearth, older than any forge Koran ever lit, older, I suspect, than the idea of warmth itself."
He set the ring down again, unburned, for the moment.
"I went there," he said, "because I had accumulated things. Not gold, not land — though I had been offered both, more than once, by people who mistook silence for a price that could be met. I mean something worse than gold. I had accumulated versions of myself. The version the disciples needed me to be. The version the crowds in the marketplace wanted, when they wanted a spectacle. The version that got carved onto stone, eventually, and set up in courtyards for people to bow to. Each of these versions came with its own weight, its own robes, its own rings given by grateful men who believed they were buying my blessing. I carried every one of them out of the valley on my own back, the day I walked into the trees, though I did not understand at the time that I was carrying anything at all."
"And the mountain?"
"The mountain does not care what you throw into it," Zara-Chabby said. "That is precisely its use. A man cannot burn his own illusions in his own hearth — the hearth is too familiar, too forgiving, too much a part of the very life the illusions were built to protect. But a mouth in the earth that has been swallowing whatever falls into it since before men had language for fire — that mouth makes no exceptions. It does not sort the precious from the worthless. It only takes."
He picked the ring back up and, without any apparent ceremony at all, tossed it into the flames beside him. It did not disappear the way Velen expected. It simply sat there, slowly losing its shape, the gold beginning to weep at its edges.
"Thirty years," Velen said slowly, "and you spent them walking to a volcano to throw things away."
"I spent them," Zara-Chabby said, "learning which things were mine to keep. The throwing away was only the proof of the learning. A man who has not first done the learning simply throws away the wrong things, over and over, and calls the throwing wisdom because it feels, in the moment, like courage."

Velen looked at the small remaining pile. The papers. The cloak. The wooden box.
"What's in the box?"
Zara-Chabby was quiet a long moment.
"My name," he said finally.
Velen frowned. "That doesn't—"
"It does, and you know it does, or you would not have walked two mountains and a gorge to find me." Zara-Chabby's eyes, in the firelight, had gone very still. "Tell me what has been built in my absence. You did not come all this way simply to warm your hands at my fire."
So Velen told him.
He told him about the fence, and the marigolds, and the boy selling clay cups a copper apiece, blessed at a stone circle by a blessing no one currently living had actually witnessed. He told him about the Keeper, and the rows where there had once been loose circles, and the sermon about wounds that must be nurtured rather than healed, lest the healing let in no further light. He told him about the false teacher in the market square, three coppers a wound, borrowed cadence, borrowed hair, a whole performance built on the shape of a man neither of them had ever actually met. He told him, last of all, about Ashok — old now, nearly blind — sitting quietly on the Keeper's side of the widening rift, arguing that structure was mercy, that a frightened person deserved somewhere firm to put their hand.
Zara-Chabby listened to all of it without interrupting once. The fire burned lower. The animal in the brush moved off entirely. When Velen finished, a long silence settled over the clearing, longer than any that had come before it.
"They have built me a Sanatorium," Zara-Chabby said at last, very quietly. "With better scenery."
"That is nearly the exact sentence he used," Velen said. "The old one. The unnamed disciple."
"He would." Something that was not quite a smile moved across Zara-Chabby's weathered face — not amusement, exactly. Something closer to old grief finding an old friend again. "He always did have my own sentences before I finished thinking them myself."

He rose then, slowly, joints cracking the way an old man's joints crack, and walked to the fire's edge, and stood looking down into it for a long time. Velen watched him and understood, without being told, that something was being decided in that silence — something larger than the conversation they'd just had, something that had perhaps been deciding itself, slowly, for the better part of thirty years, and had only now, tonight, arrived at its final weighing.
"Do you know why I never sent word?" Zara-Chabby said finally, not turning around.
"No."
"Because the moment I sent word, I would have become a story again. A rumor with a location attached. Men would have started walking toward wherever I sent the word from, the same way they once walked into the valley — not to become themselves, but to stand near someone who already seemed to have finished becoming. I did not leave the stream to build a new congregation somewhere else. I left because the teaching was never meant to be a place a man could walk to. It was meant to be a direction a man could walk in."
He turned at last, and the firelight caught his face fully, and Velen saw, for the first time, how tired the old man actually was underneath the burning eyes — a tiredness that had nothing to do with the two days' walk Velen himself had just endured, and everything to do with thirty years of throwing versions of himself into a mountain and finding, apparently, that the mountain never quite ran out of appetite.
"And now," Zara-Chabby said, "they have found a way to make even my absence into a place. A fence. Marigolds. Rows instead of circles. I did not think that was possible. I genuinely did not. I thought the one thing they could never turn into a temple was the empty rock I left behind."
"Then come back," Velen said. "Tear the fence down yourself. No one else has the right to it. You said as much to the unnamed disciple once, in a dream he still tells like it happened yesterday — that the moon is not the finger that points at it."
Zara-Chabby was quiet a long moment.
"If I go back," he said, "and pull up the marigolds, and send the Keeper away, and stand where the fence once stood and tell them all, plainly, that I never wanted any of it built — what happens then, Velen? Truly. Think it through to its actual end, not its comfortable one."
Velen opened his mouth, and found, to his own surprise, that he had no ready answer.
"They will build it again," Zara-Chabby said, answering his own question, "only this time around a different set of relics. My footprints where I stood to tear the fence down. A shrine to the day the Master came back and was angry. You cannot cure a hunger for temples by giving the hungry a better temple to build. You can only, perhaps, teach them to stop being hungry. And that — " he looked down at the small pile still waiting by his knee, the cloak, the papers, the wooden box with his own name shut inside it — "that was never a lesson I finished learning for myself, until tonight. How could I possibly have finished teaching it to anyone else?"

He crossed back to the fire and sat again, and for a long while simply looked at what remained to be burned.
"There is a thing I have not told even you," he said. "Not the unnamed disciple. Not Ashok. No one but the mountain, and the mountain does not repeat what it's given."
Velen waited.
"I went up to that summit the first year," Zara-Chabby said, "certain I had already thrown away everything that was not mine. The titles. The reverence. The particular loneliness of being looked at by forty-seven people who had built their entire lives around my next sentence. I threw all of it in, and I felt, for exactly one night, entirely clean. And then I came down the mountain the next morning, and I discovered a terrible thing waiting at the bottom of the emptiness I'd made."
"What?"
"I discovered that I had also, somewhere in the throwing, thrown away the part of me that knew how to simply sit with people without becoming their teacher the instant I opened my mouth. I had scraped so clean, trying to remove every false version of myself, that I very nearly scraped away the true one along with it. It took me another ten years just to climb back out of that particular hole — to learn how to speak to a shepherd about his goats without the shepherd, by the third sentence, deciding the goats were secretly a metaphor. To learn how to eat a meal with strangers without the meal becoming a parable before the bread was even passed."
He looked at Velen directly then, and something in his burning eyes had gone unusually soft.
"That is the part I never managed to say to any of you, before I left. That throwing away everything that is not yours is not, in itself, the whole of the work. There is a second throwing that comes after — throwing away even the fear of becoming something false again, so that you can finally sit by a fire with a friend and simply be a tired old man glad to see him, instead of a teacher performing gladness for the record."

Velen felt something in his chest give way, quietly, the way the wall had once given way inside the unnamed disciple in a clearing much like this one, many years before.
"Then don't perform anything," Velen said. "Don't come back as a teacher. Don't come back to fix the fence, or scold the Keeper, or hand anyone a new quito to replace the old ones. Come back as—"
He stopped, uncertain of the word.
"As what?" Zara-Chabby asked, genuinely curious now.
"As the man who owes an old woman for a bowl of soup he never paid for," Velen said. "As someone who is simply, finally, tired, and wants to sit by a stream he happens to remember, near a few people who happen to remember him. Nothing more elaborate than that. Let the valley decide on its own what to do with the fact of you sitting there. Don't decide it for them, either way."
For a long moment, Zara-Chabby said nothing at all. The fire had burned down to something low and steady, the last of the black smoke thinning into ordinary grey. He looked at the wooden box still sitting, unburned, by his knee.
Then, slowly, he reached over and picked it up, and held it a long while without opening it, turning it once in his cracked hands the way he'd turned the ring before feeding it to the flame.
"I have carried this box eleven years," he said. "I have stood at the mountain's mouth with it in my hands perhaps thirty separate times, and thirty separate times I have carried it back down again unopened, because I was not yet certain whether what was inside it belonged to me, or to all of them, or to no one at all."
"What is it?"
Zara-Chabby did not answer directly.
Instead, he set the box down carefully in the dirt between them — not in the fire. Beside it. And looked up at Velen with an expression that was, for the first time all evening, entirely unreadable, even to a man who had spent forty years learning to read faces for a living.
"You came a very long way to find an answer," he said. "I am going to give you a question instead, because it is the only honest gift I have left to give anyone, after thirty years of throwing away everything that pretended to be more than that."
He nodded once at the unopened box.
"When we walk back into that valley together — and we will walk back, Velen, I have decided that much tonight, watching you sit here two days' walk short of collapsing simply to ask me to — when we walk back in, you may open this box, or you may leave it exactly as it is, unopened, for the rest of both our lives. I will not tell you which choice is the wiser one. I no longer entirely trust myself to know."
The fire popped once, low, and settled.
"But understand this before you decide," Zara-Chabby said, and his voice had gone very quiet now, quiet the way it had once gone quiet on a fountain's edge in a square full of blinking, contented faces, quiet the way it goes just before the truest sentence of an evening finally arrives. "Whatever is inside that box is the last thing in this world I have not yet decided is or is not mine to keep. And I suspect — though I could be wrong, I have been wrong about smaller things — that the valley itself is very much like this box. Something none of us has yet decided whether we have the right to keep, or the right to burn, or the right, simply, to carry a little further down the road and open somewhere else entirely, in some other year, with some other set of hands."
He rose to his feet at last, slowly, and looked out toward the ridge where Velen had first appeared, toward the dark shape of the mountains beyond it, toward, somewhere far past all of that, the valley and the fence and the marigolds and the stream that had never once, in sixty moons or six hundred, stopped its patient flowing.
"Come," he said. "Bring the box, open or closed, however you decide. We have a long walk ahead of us, and a fence, I understand, that badly needs deciding about."
He held out one weathered hand to Velen, the way he had once, decades before, held out a hand to a woman selling limes, to a blacksmith drowning in his own iron, to a young man frozen on a blue-painted doorstep — the same open hand, unchanged by thirty years or by anything the volcano had managed to burn out of him.
Velen took it, and rose, and picked up the unopened box, and did not, that night or for a long while after, decide what to do with it.
And somewhere behind them, in the dark, the fire that had swallowed a king's cloak and a stranger's ring and thirty years of careful papers burned itself down at last to nothing at all — not because anything had put it out, but because, for the very first time in three decades, there was finally nothing left that needed burning.
Thus the stranger returned. Thus the box remained closed. And thus, at the edge of an unnamed valley, under a sky that asked no questions and answered none, two men began the long walk back toward a fence that neither of them, even now, could say for certain should still be standing when they arrived.
Thus ends this book. The rest, as it must always be, is yours to carry.
`,wk=["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER"];function pk({user:r,onBack:o,onSignOut:h,onNextChapter:l}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,onNextChapter:l,nextChapterLabel:"BONUS CHAPTER: THE SECOND DOWN-GOING",chapterText:gk,chapterTitle:"OF THE RETURNING STRANGER",chapterNumber:7,bookLabel:"Book 3",chapterList:wk})}const bk=`"Move swift as the wind and closely-formed as the wood. Attack like the fire and be still as the mountain." — Sun Tzu 

They walked three days before the mountains gave way to the gorge, and three more before the gorge gave way to the pass where Velen had first been given directions by a man with plain brown eyes and no name of his own to offer. Zara-Chabby said little on the road. He walked the way old men walk who have long since stopped needing to arrive anywhere in particular — unhurried, watchful, stopping sometimes for no reason Velen could name to look at a bent tree, or a stone, or the particular way light fell across a dry riverbed, as though every ordinary thing along the path had become, in thirty years of walking toward volcanoes and away from congregations, entirely new to him again.
On the seventh morning, they reached the last ridge before the descent into the valley proper — the same ridge, Velen realized with a small shock, from which he had first seen the smoke. Below them, faint in the early light, lay the valley he had grown old in without noticing the growing: the cave, the stream, the fence with its marigolds, the stone circle where sixty people now sat each evening in careful rows.
Zara-Chabby stopped at the ridge's edge and did not descend.
"Not yet," he said, when Velen looked back at him.
"Why not?"
"Because a man does not walk back into a life he once left without first remembering why he was permitted to leave it in the first place." He lowered himself onto a flat stone at the ridge's crest — not unlike the stone where Sahel had once stood blocking a narrow pass, not unlike the rock in the valley below that still bore his name though he had never once asked for it to. "Sit with me. I find, after thirty years, that I still cannot go down a mountain without first saying something to the sun. It is an old habit. Older than the teaching. Older, I think, than even I am."
Velen sat.
The night had been long and cold, and dawn was only now beginning to break properly over the eastern ridge — the sky going from iron-grey to something paler, then to a thin gold that caught first on the highest peaks and crept, slowly, unhurried as everything else about that morning, down into the valley itself. Zara-Chabby watched it come the way a man watches an old friend arrive late to a meal he had never doubted they would keep.
Then he began to sing.

Ah, you rising sun,
 ten thousand mornings now you have climbed
 to find me somewhere different each time—
 once on a peak where I thought myself finished,
 once on the lip of a mountain that burns from within,
 once, this very morning, on a ridge
 above a valley I no longer know how to enter
 without first asking your permission.
I left this valley once already, old star,
 and you did not scold me for the leaving.
 You only kept rising, the way you always do,
 indifferent to whether I was there to see it,
 generous with a light that cost you nothing
 because you have never once, in all your burning,
 mistaken generosity for loss.
I have learned so much since the first time
 I sang to you as a younger man—
 learned that the honey a man gathers in solitude
 turns to poison if he never pours it out,
 learned that even poison, poured carefully,
 can become a kind of medicine
 for a valley that has forgotten
 the difference between a teacher
 and a temple built in his shadow.
I threw so much of myself into the fire, sun.
 Rings. Robes. Papers with my name
 written in another man's careful hand.
 I thought, each time I threw something in,
 that I was finally becoming clean.
 But you do not become clean by throwing things away.
 You become clean the way you become clean, old star—
 by rising anyway, the next morning,
 over the exact same valley,
 carrying no memory of yesterday's ash,
 only the plain, unglamorous willingness
 to be useful again.
Teach me that, one final time,
 before I walk down into the marigolds
 and the fence and the boy selling clay cups
 blessed by a blessing no one witnessed.
 Teach me to rise over what I already burned
 without needing it to have meant something.
 Teach me to warm a stranger's face
 without asking whether the stranger
 understands the cost of the warming.
For I am going down again, sun—
 not as the man who first descended,
 flush with honey and certainty,
 believing the valley was waiting only for his voice.
 I go down this time empty-handed,
 a box unopened at my side,
 a friend beside me who did not come to be taught
 but only to say: come home, whatever home has become.
And if the fence is still standing when I arrive,
 let me have the patience to sit beside it a while
 before I decide whether it deserves to fall.
 And if the marigolds are still blooming,
 let me remember that a flower planted
 out of fear is still, in the end, a flower,
 and flowers have never once asked permission
 to simply be beautiful
 in the middle of somebody's confusion.
Rise, then, old star, exactly as you always have.
 I am not the man who left this valley.
 I am not even, entirely, the man
 who sat by your light on a hundred other ridges,
 throwing what was not mine into a mountain's mouth.
 I am only, this morning, an old man
 with a walking stick and a friend and a question
 he still does not know the answer to,
 going down, one more time,
 into the one place on this whole burning earth
 that has ever, honestly, needed him.

The song ended, and for a long while neither man spoke. The sun had cleared the eastern ridge fully now, and its light lay warm across the valley below — across the cave, the stream, the fence, the marigolds, the sixty empty seats in the stone circle where, in a few hours, sixty people would arrive expecting a sermon and find, instead, something they had no name yet for.
Zara-Chabby rose slowly, using his walking stick, and looked down at the path.
"Do you still not know what's in the box?" Velen asked.
"I do not."
"Are you afraid to know?"
Zara-Chabby considered this a long moment, the light gathering gold across his white hair, his cracked and weathered hands folded now over the top of his stick.
"No," he said finally. "I am simply no longer in any hurry to find out. There was a time in my life when I believed every question deserved an immediate answer, the same evening it was asked, delivered with enough conviction that no one in the room would think to ask it twice. I have since learned that some questions are better carried a little further down the road before they're opened — not because the answer is dangerous, but because the carrying itself does something to a man that the opening never could."
He looked at Velen, and something in his burning eyes had gone, at last, entirely peaceful — not resolved, not finished, but peaceful in the particular way of a man who has stopped needing resolution in order to keep walking forward.
"Come," he said. "The valley has been waiting a long time. Let us not make it wait through one more morning."
And together — the old teacher and the grey-haired painter, one carrying a walking stick worn smooth by thirty years of unnamed roads, the other carrying a small wooden box he still had not decided whether he had the right to open — they began their descent from the ridge, down through the pines, toward the fence, and the marigolds, and the stream that had never once, through sixty moons or six hundred or however many more were still to come, stopped its patient, indifferent, entirely faithful flowing.
Thus begins Zara-Chabby's down-going.



`,vk=["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER","BONUS CHAPTER: THE SECOND DOWN-GOING"];function kk({user:r,onBack:o,onSignOut:h}){return p.jsx(Ne,{user:r,onBack:o,onSignOut:h,chapterText:bk,chapterTitle:"BONUS CHAPTER: THE SECOND DOWN-GOING",chapterNumber:8,bookLabel:"Book 3",chapterList:vk})}const Tk=[{number:"Book 1",description:"The beginning of the descent.",chapters:["ZARACHABBY'S DOWNGOING","OF THE THRESHOLD OF MADASARA","THE SERMON OF THE BROKEN LEDGER","OF THE TIGHTROPE WALKER'S SHADOW","THE TROUBLED WORKER","OF WOMEN","OF THE FESTIVAL OF THE LAST MEN"]},{number:"Book 2",title:"The higher bond",description:"A complete book on friendship, truth, and release.",chapters:["THE FRONTAL STAB (A LESSON IN FRIENDSHIP)","THE MARKET OF EMPTY PRAISE","THE WEIGHT OF HONEST EYES","The Betrayal of Soft Words","THE ENEMY WHO ELEVATES","THE TRIAL OF THE TRUE FRIEND","THE BIRTH OF THE HIGHER BOND","THE LAST FRIEND"]},{number:"Book 3",title:"The returning stranger",description:"A return through silence, change, and the lives that remain.",chapters:["OF THE CHILD IN THE CLEARING","OF THE OLD WARRIOR","OF THE LAST NOON","OF THE VOYAGE I","OF THE VOYAGE II","OF THE VOYAGE III","OF THE RETURNING STRANGER","BONUS CHAPTER: THE SECOND DOWN-GOING"]}];function Ik({user:r,onSignOut:o}){const[h,l]=_e.useState(null);return h===1?p.jsx(pv,{user:r,onBack:()=>l(null),onSignOut:o}):h===2?p.jsx(vv,{user:r,onBack:()=>l(null),onSignOut:o}):h===3?p.jsx(Tv,{user:r,onBack:()=>l(null),onSignOut:o}):h===4?p.jsx(Hv,{user:r,onBack:()=>l(null),onSignOut:o}):h===5?p.jsx(Sv,{user:r,onBack:()=>l(null),onSignOut:o}):h===6?p.jsx(Nv,{user:r,onBack:()=>l(null),onSignOut:o}):h===7?p.jsx(Cv,{user:r,onBack:()=>l(null),onSignOut:o}):h===10?p.jsx(Rv,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(11)}):h===11?p.jsx(Dv,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(12)}):h===12?p.jsx(Zv,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(13)}):h===13?p.jsx(zv,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(14)}):h===14?p.jsx(Gv,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(15)}):h===15?p.jsx(Kv,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(16)}):h===16?p.jsx(Jv,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(17)}):h===17?p.jsx(ek,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(18)}):h===18?p.jsx(ak,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(19)}):h===19?p.jsx(sk,{user:r,onBack:()=>l(null),onSignOut:o}):h===21?p.jsx(lk,{user:r,onBack:()=>l(null),onSignOut:o}):h===22?p.jsx(ck,{user:r,onBack:()=>l(null),onSignOut:o}):h===23?p.jsx(mk,{user:r,onBack:()=>l(null),onSignOut:o}):h===24?p.jsx(pk,{user:r,onBack:()=>l(null),onSignOut:o,onNextChapter:()=>l(25)}):h===25?p.jsx(kk,{user:r,onBack:()=>l(null),onSignOut:o}):p.jsxs("main",{className:"book-home",children:[p.jsxs("nav",{className:"book-nav","aria-label":"Main navigation",children:[p.jsxs("a",{className:"book-logo",href:"#top",children:[p.jsx("span",{className:"book-logo-mark",children:"Z"}),p.jsx("span",{children:"Zara Chabby"})]}),p.jsxs("div",{className:"book-nav-actions",children:[p.jsx("a",{className:"book-nav-link",href:"#about",children:"The book"}),p.jsx("a",{className:"book-nav-link",href:"#chapters",children:"Chapters"}),p.jsx("a",{className:"book-nav-link",href:"#excerpt",children:"Excerpt"}),p.jsx("span",{className:"signed-in-label",children:r.email}),p.jsx("button",{type:"button",className:"text-button",onClick:o,children:"Sign out"})]})]}),p.jsxs("section",{className:"book-hero",id:"top",children:[p.jsxs("div",{className:"book-intro",children:[p.jsx("p",{className:"eyebrow",children:"A story by Dumbo Phatson"}),p.jsx("h1",{children:"Thus spoke Zara Chabby"}),p.jsx("p",{className:"book-lede",children:"A book for every one and no one."}),p.jsxs("div",{className:"book-actions",children:[p.jsxs("button",{type:"button",className:"primary-book-button",onClick:()=>l(1),children:["Enter the story ",p.jsx("span",{"aria-hidden":"true",children:"→"})]}),p.jsx("a",{className:"secondary-book-button",href:"#excerpt",children:"Read an excerpt"})]})]}),p.jsxs("div",{className:"book-cover","aria-label":"Book cover: Thus spoke Zara Chabby",children:[p.jsx("span",{className:"cover-kicker",children:"A novel"}),p.jsxs("div",{className:"cover-title",children:[p.jsx("strong",{children:"Thus spoke"}),p.jsx("strong",{children:"Zara Chabby"})]}),p.jsx("span",{className:"cover-author",children:"Dumbo Phatson"})]})]}),p.jsxs("section",{className:"book-about",id:"about",children:[p.jsx("div",{className:"section-index",children:"01"}),p.jsxs("div",{className:"book-about-copy",children:[p.jsx("p",{className:"eyebrow",children:"A foreword"}),p.jsx("h2",{children:"A strange, beautiful beginning."}),p.jsx("p",{className:"foreword-text",children:"This book was inspired by nothing beyond the strange, beautiful, and unforgiving thing we call life."}),p.jsx("p",{className:"foreword-author",children:"— Dumbo Phatson I"})]})]}),p.jsxs("section",{className:"book-chapters",id:"chapters",children:[p.jsx("div",{className:"section-index",children:"02"}),p.jsxs("div",{className:"chapters-content",children:[p.jsx("p",{className:"eyebrow",children:"The table of contents"}),p.jsx("h2",{children:"Three books. One descent into meaning."}),p.jsx("div",{className:"chapter-grid",children:Tk.map(u=>p.jsxs("article",{className:`chapter-book ${u.number==="Book 2"?"chapter-book-featured":""}`,children:[p.jsxs("div",{className:"chapter-book-heading",children:[p.jsx("span",{children:u.number}),u.title&&p.jsx("h3",{children:u.title}),p.jsx("p",{children:u.description})]}),p.jsx("ol",{children:u.chapters.map((f,b)=>{const N=u.number==="Book 1"&&b<7,H=u.number==="Book 3"&&b<7,T={"THE FRONTAL STAB (A LESSON IN FRIENDSHIP)":10,"THE MARKET OF EMPTY PRAISE":11,"THE WEIGHT OF HONEST EYES":12,"THE BETRAYAL OF SOFT WORDS":13,"The Betrayal of Soft Words":13,"THE ENEMY WHO ELEVATES":14,"THE TRIAL OF THE TRUE FRIEND":15,"THE BIRTH OF THE HIGHER BOND":16,"THE LAST FRIEND":17},x={"OF THE CHILD IN THE CLEARING":18,"OF THE OLD WARRIOR":19,"OF THE LAST NOON":20,"OF THE VOYAGE I":21,"OF THE VOYAGE II":22,"OF THE VOYAGE III":23,"OF THE RETURNING STRANGER":24,"BONUS CHAPTER: THE SECOND DOWN-GOING":25},M=u.number==="Book 1"?b+1:u.number==="Book 3"?x[f]:T[f]??T[f.toUpperCase()],U=!!M||N||H;return p.jsx("li",{className:U?"readable":"",children:p.jsx("button",{type:"button",disabled:!U,onClick:()=>M&&l(M),children:f})},f)})})]},u.number))})]})]}),p.jsxs("section",{className:"book-excerpt",id:"excerpt",children:[p.jsx("div",{className:"section-index",children:"03"}),p.jsxs("div",{children:[p.jsx("p",{className:"eyebrow",children:"From the opening pages"}),p.jsx("blockquote",{children:"“There are names that follow you, and names that wait for you. Zara heard his in the distance and turned toward it.”"}),p.jsx("p",{className:"excerpt-note",children:"More of the story is waiting inside."})]})]}),p.jsxs("footer",{className:"site-footer",children:[p.jsx("span",{children:"Thus spoke Zara Chabby"}),p.jsx("span",{children:"Written by Dumbo Phatson"}),p.jsx("a",{href:"#top",children:"Back to top ↑"})]})]})}const qf=r=>{switch(r.code){case"auth/email-already-in-use":return"An account already exists with this email.";case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return"The email or password is incorrect.";case"auth/weak-password":return"Use a password with at least six characters.";case"auth/invalid-email":return"Enter a valid email address.";case"auth/too-many-requests":return"Too many attempts. Please wait a moment and try again.";default:return"Something went wrong. Please try again."}};function Hk(){const[r,o]=_e.useState(!0),[h,l]=_e.useState(""),[u,f]=_e.useState(""),[b,N]=_e.useState(""),[H,T]=_e.useState(""),[x,M]=_e.useState(!0),[U,te]=_e.useState(null),[re,xe]=_e.useState(!0),[He,fe]=_e.useState(!1),[le,be]=_e.useState(""),[Oe,W]=_e.useState("");_e.useEffect(()=>tb(Wa,V=>{te(V),xe(!1)}),[]);const pe=_=>{o(_),W(""),be("")},ee=async _=>{if(_.preventDefault(),W(""),be(""),!r&&b!==H){W("Passwords do not match.");return}fe(!0);try{if(await eb(Wa,x?dy:Al),r)await Jp(Wa,u,b);else{const V=await Qp(Wa,u,b);await Pp(V.user,{displayName:h})}}catch(V){W(qf(V))}finally{fe(!1)}},ve=async()=>{if(!u){W("Enter your email address first.");return}W(""),be("");try{await Xp(Wa,u),be("Password reset email sent. Check your inbox.")}catch(_){W(qf(_))}};return re?p.jsx("main",{className:"auth-card auth-loading",children:"Loading..."}):U?p.jsx(Ik,{user:U,onSignOut:()=>nb(Wa)}):p.jsx("main",{className:"auth-shell",children:p.jsxs("section",{className:"auth-card","aria-labelledby":"auth-title",children:[p.jsxs("div",{className:"auth-brand",children:[p.jsx("span",{className:"brand-mark",children:"Z"}),p.jsx("span",{children:"Zara Chabby"})]}),p.jsxs("div",{className:"auth-heading",children:[p.jsx("p",{className:"eyebrow",children:"A private reading room"}),p.jsx("h1",{id:"auth-title",children:r?"Login":"Sign Up"}),p.jsx("p",{className:"auth-subtitle",children:r?"Return to the story whenever you are ready.":"Make a place for the story to stay with you."})]}),p.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication mode",children:[p.jsx("button",{type:"button",className:r?"active":"",role:"tab","aria-selected":r,onClick:()=>pe(!0),children:"Login"}),p.jsx("button",{type:"button",className:r?"":"active",role:"tab","aria-selected":!r,onClick:()=>pe(!1),children:"Sign up"})]}),p.jsxs("form",{className:"auth-form",onSubmit:ee,children:[!r&&p.jsxs("label",{children:["Full name",p.jsx("input",{type:"text",placeholder:"Your name",value:h,onChange:_=>l(_.target.value),required:!0})]}),p.jsxs("label",{children:["Email address",p.jsx("input",{type:"email",placeholder:"you@example.com",value:u,onChange:_=>f(_.target.value),required:!0})]}),p.jsxs("label",{children:["Password",p.jsx("input",{type:"password",placeholder:"Enter your password",value:b,onChange:_=>N(_.target.value),minLength:"6",required:!0})]}),!r&&p.jsxs("label",{children:["Confirm password",p.jsx("input",{type:"password",placeholder:"Repeat your password",value:H,onChange:_=>T(_.target.value),minLength:"6",required:!0})]}),r&&p.jsxs("div",{className:"form-meta",children:[p.jsxs("label",{className:"remember-me",children:[p.jsx("input",{type:"checkbox",checked:x,onChange:_=>M(_.target.checked)}),p.jsx("span",{children:"Remember me"})]}),p.jsx("button",{type:"button",onClick:ve,children:"Forgot password?"})]}),(Oe||le)&&p.jsx("p",{className:Oe?"auth-message error":"auth-message",children:Oe||le}),p.jsxs("button",{type:"submit",className:"submit-button",disabled:He,children:[He?"Please wait...":r?"Login":"Create account",p.jsx("span",{"aria-hidden":"true",children:"→"})]}),p.jsxs("p",{className:"auth-switch",children:[r?"Don't have an account?":"Already have an account?"," ",p.jsx("button",{type:"button",onClick:()=>pe(!r),children:r?"Sign up":"Login"})]})]})]})})}const Ak=()=>p.jsxs(p.Fragment,{children:[p.jsx(Hk,{}),p.jsx(hw,{})]});Xg.createRoot(document.getElementById("root")).render(p.jsx(_e.StrictMode,{children:p.jsx(Ak,{})}));
