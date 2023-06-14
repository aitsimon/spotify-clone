import{F as ie,G as N,z as de,H as ve,I as W,J as O,K as ee,L as U,M as G,m as z,f as m,t as A,j as H,E as me,h as f,T as fe,N as pe,g as J,O as ge,d as le,P as he,Q as _e,x as Z,y as se,R as te,S as ye,U as xe,V as be,W as qe,X as F,v as we,Y as Ce,Z as Pe,$ as Se,o as ue,c as ce,w as $,a as x,a0 as M,a1 as X,a2 as j,a3 as C,a4 as ke,a5 as $e,a6 as Te,a7 as Ie,a8 as Ae,a9 as Ve}from"./index.1c897ed3.js";import{Q as Be}from"./QPage.e63976a5.js";import{u as Ee}from"./use-quasar.4bcd9f96.js";import{g as ne,s as oe,c as Le}from"./selection.8640e7c4.js";var Ne="/assets/pexels-cottonbro-studio-7087636-4096x2160-25fps.134f1b7a.webm",De="/assets/Spotify_Icon_RGB_Green.6089a3df.png";function Fe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,l)=>{const a=parseFloat(r);a&&(n[l]=a)}),n}var Me=ie({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:l}){if(l.mouse!==!0&&N.has.touch!==!0)return;const a=l.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Fe(r),direction:ne(l),noop:de,mouseStart(i){oe(i,t)&&ve(i)&&(W(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(oe(i,t)){const s=i.target;W(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,s){N.is.firefox===!0&&O(e,!0);const g=ee(i);t.event={x:g.left,y:g.top,time:Date.now(),mouse:s===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){U(i);return}const s=Date.now()-t.event.time;if(s===0)return;const g=ee(i),h=g.left-t.event.x,u=Math.abs(h),p=g.top-t.event.y,d=Math.abs(p);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&d<t.sensitivity[1]){t.end(i);return}}else if(window.getSelection().toString()!==""){t.end(i);return}else if(u<t.sensitivity[2]&&d<t.sensitivity[2])return;const _=u/s,b=d/s;t.direction.vertical===!0&&u<d&&u<100&&b>t.sensitivity[0]&&(t.event.dir=p<0?"up":"down"),t.direction.horizontal===!0&&u>d&&d<100&&_>t.sensitivity[0]&&(t.event.dir=h<0?"left":"right"),t.direction.up===!0&&u<d&&p<0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<d&&p>0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>d&&h<0&&d<100&&_>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>d&&h>0&&d<100&&_>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(U(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Le(),t.styleCleanup=T=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const q=()=>{document.body.classList.remove("no-pointer-events--children")};T===!0?setTimeout(q,50):q()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:s,distance:{x:u,y:d}})):t.end(i)},end(i){t.event!==void 0&&(G(t,"temp"),N.is.firefox===!0&&O(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&U(i),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";W(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}N.has.touch===!0&&W(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=ne(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(G(n,"main"),G(n,"temp"),N.is.firefox===!0&&O(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function ze(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const Qe={name:{required:!0},disable:Boolean},ae={setup(e,{slots:n}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},J(n.default))}},Re={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ke=["update:modelValue","beforeTransition","transition"];function We(){const{props:e,emit:n,proxy:r}=H(),{getCacheWithFn:l}=ze();let a,t;const i=z(null),s=z(null);function g(o){const c=e.vertical===!0?"up":"left";w((r.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const h=m(()=>[[Me,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),d=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),T=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);A(()=>e.modelValue,(o,c)=>{const y=P(o)===!0?B(o):-1;t!==!0&&I(y===-1?0:y<B(c)?-1:1),i.value!==y&&(i.value=y,n("beforeTransition",o,c),me(()=>{n("transition",o,c)}))});function q(){w(1)}function Q(){w(-1)}function V(o){n("update:modelValue",o)}function P(o){return o!=null&&o!==""}function B(o){return a.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function R(){return a.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function I(o){const c=o!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(o===-1?u.value:p.value):null;s.value!==c&&(s.value=c)}function w(o,c=i.value){let y=c+o;for(;y>-1&&y<a.length;){const k=a[y];if(k!==void 0&&k.props.disable!==""&&k.props.disable!==!0){I(o),t=!0,n("update:modelValue",k.props.name),setTimeout(()=>{t=!1});return}y+=o}e.infinite===!0&&a.length!==0&&c!==-1&&c!==a.length&&w(o,o===-1?a.length:-1)}function E(){const o=B(e.modelValue);return i.value!==o&&(i.value=o),!0}function K(){const o=P(e.modelValue)===!0&&E()&&a[i.value];return e.keepAlive===!0?[f(ge,b.value,[f(T.value===!0?l(_.value,()=>({...ae,name:_.value})):ae,{key:_.value,style:d.value},()=>o)])]:[f("div",{class:"q-panel scroll",style:d.value,key:_.value,role:"tabpanel"},[o])]}function v(){if(a.length!==0)return e.animated===!0?[f(fe,{name:s.value},K)]:K()}function S(o){return a=pe(J(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&P(c.props.name)===!0),a.length}function L(){return a}return Object.assign(r,{next:q,previous:Q,goTo:V}),{panelIndex:i,panelDirectives:h,updatePanelsList:S,updatePanelIndex:E,getPanelContent:v,getEnabledPanels:R,getPanels:L,isValidPanelName:P,keepAliveProps:b,needsUniqueKeepAliveWrapper:T,goToPanelByOffset:w,goToPanel:V,nextPanel:q,previousPanel:Q}}var Y=le({name:"QCarouselSlide",props:{...Qe,imgSrc:String},setup(e,{slots:n}){const r=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:r.value},J(n.default))}});let D=0;const je={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Oe=["update:fullscreen","fullscreen"];function Ue(){const e=H(),{props:n,emit:r,proxy:l}=e;let a,t,i;const s=z(!1);he(e)===!0&&A(()=>l.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),A(()=>n.fullscreen,p=>{s.value!==p&&g()}),A(s,p=>{r("update:fullscreen",p),r("fullscreen",p)});function g(){s.value===!0?u():h()}function h(){s.value!==!0&&(s.value=!0,i=l.$el.parentNode,i.replaceChild(t,l.$el),document.body.appendChild(l.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:u},te.add(a))}function u(){s.value===!0&&(a!==void 0&&(te.remove(a),a=void 0),i.replaceChild(l.$el,t),s.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return _e(()=>{t=document.createElement("span")}),Z(()=>{n.fullscreen===!0&&h()}),se(u),Object.assign(l,{toggleFullscreen:g,setFullscreen:h,exitFullscreen:u}),{inFullscreen:s,toggleFullscreen:g}}const Ge=["top","right","bottom","left"],Xe=["regular","flat","outline","push","unelevated"];var Ye=le({name:"QCarousel",props:{...ye,...Re,...je,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Xe.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ge.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Oe,...Ke],setup(e,{slots:n}){const{proxy:{$q:r}}=H(),l=xe(e,r);let a=null,t;const{updatePanelsList:i,getPanelContent:s,panelDirectives:g,goToPanel:h,previousPanel:u,nextPanel:p,getEnabledPanels:d,panelIndex:_}=We(),{inFullscreen:b}=Ue(),T=m(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),q=m(()=>e.vertical===!0?"vertical":"horizontal"),Q=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${q.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${R.value}`:"")),V=m(()=>{const v=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?v.reverse():v}),P=m(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),B=m(()=>e.navigationActiveIcon||P.value),R=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),I=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));A(()=>e.modelValue,()=>{e.autoplay&&w()}),A(()=>e.autoplay,v=>{v?w():a!==null&&(clearTimeout(a),a=null)});function w(){const v=qe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,v>=0?p():u()},v)}Z(()=>{e.autoplay&&w()}),se(()=>{a!==null&&clearTimeout(a)});function E(v,S){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${R.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},d().map(S))])}function K(){const v=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>f(F,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),L=t-1;v.push(E("buttons",(o,c)=>{const y=o.props.name,k=_.value===c;return S({index:c,maxIndex:L,name:y,active:k,btnProps:{icon:k===!0?B.value:P.value,size:"sm",...I.value},onClick:()=>{h(y)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(E("thumbnails",L=>{const o=L.props;return f("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+S,src:o.imgSrc||o["img-src"],onClick:()=>{h(o.name)}})}))}return e.arrows===!0&&_.value>=0&&((e.infinite===!0||_.value>0)&&v.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${q.value} absolute flex flex-center`},[f(F,{icon:V.value[0],...I.value,onClick:u})])),(e.infinite===!0||_.value<t-1)&&v.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${q.value} absolute flex flex-center`},[f(F,{icon:V.value[1],...I.value,onClick:p})]))),we(n.control,v)}return()=>(t=i(n),f("div",{class:Q.value,style:T.value},[be("div",{class:"q-carousel__slides-container"},s(),"sl-cont",e.swipeable,()=>g.value)].concat(K())))}});function re(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}var He=ie({name:"close-popup",beforeMount(e,{value:n}){const r={depth:re(n),handler(l){r.depth!==0&&setTimeout(()=>{const a=Ce(e);a!==void 0&&Pe(a,l,r.depth)})},handlerKey(l){Se(l,13)===!0&&r.handler(l)}};e.__qclosepopup=r,e.addEventListener("click",r.handler),e.addEventListener("keyup",r.handlerKey)},updated(e,{value:n,oldValue:r}){n!==r&&(e.__qclosepopup.depth=re(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}});const Je=C("div",{class:"q-mt-lg q-mt-md-md text-justify"}," Welcome to my Spotify clone! This is a work in progress about a Progressive Web App based on Quasar Framework. ",-1),Ze={class:"q-mt-lg q-mt-md-md text-justify"},et={class:"row flex-center q-mb-md"},tt=C("div",{class:"q-mt-lg q-mt-sm-md text-justify row flex-center no-wrap"}," In order to use this app, you need to login with your Spotify account. ",-1),nt={__name:"TheWelcomeAlert",setup(e){let n=z(!1),r=z("style");return Z(()=>{n.value=!0}),(l,a)=>(ue(),ce(Te,{modelValue:M(n),"onUpdate:modelValue":a[2]||(a[2]=t=>X(n)?n.value=t:n=t)},{default:$(()=>[x(Ye,{modelValue:M(r),"onUpdate:modelValue":a[1]||(a[1]=t=>X(r)?r.value=t:r=t),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"white",navigation:"",padding:"",arrows:"",height:"300px",class:"bg-primary text-secondary shadow-1 rounded-borders"},{default:$(()=>[x(Y,{name:"style",class:"column no-wrap flex-center"},{default:$(()=>[x(j,{name:"style",size:"56px"}),Je]),_:1}),x(Y,{name:"light-theme",class:"column no-wrap flex-center"},{default:$(()=>[C("div",Ze,[C("div",et,[x(j,{name:"dark_mode",size:"56px",class:"q-mr-sm"}),x(j,{name:"light_mode",size:"56px"})]),ke(" Are you a night owl? Or a morning person? This app will adapt to your needs. Toogle the light theme on and off. Don't worry, you can change this later on the settings tab. ")])]),_:1}),x(Y,{name:"login",class:"column no-wrap flex-center"},{default:$(()=>[x(j,{name:"key",size:"56px"}),tt,$e(x(F,{rounded:"",label:"Got it!",class:"q-mt-md q-mt-md-lg",icon:"check",color:"accent",onClick:a[0]||(a[0]=()=>{X(n)?n.value=!1:n=!1})},null,512),[[He]])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]))}};const ot=C("video",{autoplay:"",muted:"",loop:"",id:"background-video",src:Ne},null,-1),at={id:"loginContent",class:"column no-wrap justify-around items-center"},rt={class:"row flex-center"},it=C("img",{class:"col-2",src:De,alt:""},null,-1),dt={__name:"Login",setup(e){const n=Ie(),r=Ee();return sessionStorage.getItem("errorLogin")&&(r.notify({message:sessionStorage.get("errorLogin"),color:"red-5",icon:"error",position:"bottom",timeout:4e3}),sessionStorage.remove("errorLogin")),(l,a)=>(ue(),ce(Be,{class:"full-height full-width row flex-center"},{default:$(()=>[x(nt),ot,x(Ve,{bordered:"",tag:"div",class:"q-px-sm q-px-md-lg q-px-lg-xl"},{default:$(()=>[C("div",at,[C("div",rt,[C("h1",{class:Ae(["text-center q-mr-xs q-mr-md-lg q-mr-lg-xl text-weight-bold",M(r).screen.lt.sm?"text-h3":"text-h2"])}," ReSpoted ",2),it]),x(F,{align:"between",color:"spotifyGreen",label:"Login with Spotify",unelevated:"","icon-right":"login",onClick:a[0]||(a[0]=t=>M(n).push("/preauth")),size:M(r).screen.lt.sm?"md":"lg"},null,8,["size"])])]),_:1})]),_:1}))}};export{dt as default};
