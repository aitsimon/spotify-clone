import{_ as I,a7 as L,m as y,x as C,o as c,c as x,w as a,a3 as e,a as t,as as g,a0 as u,ae as P,ay as z,an as B,aw as q,az as A,aA as D}from"./index.1c897ed3.js";import{Q as b}from"./QChip.190cff57.js";import{Q as E}from"./QImg.57e6efac.js";import{Q as F,a as N}from"./QInfiniteScroll.1df16291.js";import{Q as U}from"./QPage.e63976a5.js";import{u as V}from"./fetchService.ed6b6eff.js";const w=r=>(A("data-v-ef4ee6b2"),r=r(),D(),r),$={id:"mainContent",class:"full-width column"},M=w(()=>e("h1",{class:"text-h4"},"Your library",-1)),R={class:"column q-mt-lg"},Y=w(()=>e("div",{class:"ellipsis text-subtitle1"},"Liked Songs",-1)),j={class:"column flex-nowrap"},G={class:"ellipsis text-subtitle1"},H={class:"row flex-center"},J={__name:"Library",setup(r){const d=L(),_=V();let i=y(0),l=y([]);C(async()=>{let n=await _.getUserPlaylists(i.value);l.value=n});async function S(n,o){var p,m,f;let s=await((p=l.value.items)==null?void 0:p.length);i.value+=20,(await _.getUserPlaylists(i.value)).items.forEach(Q=>{var h,v;(v=(h=l.value)==null?void 0:h.items)==null||v.push(Q)}),o(),s===((f=(m=l.value)==null?void 0:m.items)==null?void 0:f.length)&&o(!0)}return(n,o)=>(c(),x(U,{class:"full-width"},{default:a(()=>[e("div",$,[M,e("div",R,[t(b,{square:"",color:"secondary",size:"xl",clickable:"",class:"text-subtitle1",onClick:o[0]||(o[0]=s=>u(d).push({name:"LikedSongs"}))},{default:a(()=>[t(g,{class:"likedSongs",icon:"favorite","text-color":"white"}),Y]),_:1})])]),t(N,{onLoad:S,offset:300},{default:a(()=>[e("div",j,[(c(!0),P(q,null,z(u(l).items,s=>(c(),x(b,{square:"",color:"secondary",size:"xl",clickable:"",class:"ellipsis",onClick:k=>u(d).push({name:"Playlist",params:{id:s.id}})},{default:a(()=>[t(g,null,{default:a(()=>[t(E,{src:s.images[0].url,ratio:1,class:"rounded-borders","spinner-color":"primary"},null,8,["src"])]),_:2},1024),e("div",G,B(s.name),1)]),_:2},1032,["onClick"]))),256))])]),loading:a(()=>[e("div",H,[t(F,{color:"primary",size:"40px"})])]),_:1})]),_:1}))}};var ee=I(J,[["__scopeId","data-v-ef4ee6b2"]]);export{ee as default};
