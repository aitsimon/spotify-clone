import{ap as G,m as l,ac as $,aq as n}from"./index.1c897ed3.js";import{u as B}from"./fetchService.ed6b6eff.js";const H=G("useAuxApiService",()=>{let c=l(void 0),o=$(),u=B(),S=l([]);async function m(e){c.value=!0;let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,id:e});const t=await(await fetch(n.SERVER_URL+"get-track",{method:"POST",body:s})).json();return c.value=!1,t}function R(e,s){const a=[];for(let t=0;t<e.length;t+=s)a.push(e.slice(t,t+s));return a}async function p(e){if(c.value=!0,e.length<=50){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});const t=await(await fetch(n.SERVER_URL+"check-user-saved-tracks",{method:"POST",body:s})).json(),r={};for(let i=0;i<e.length;i++){const k=e[i];r[k]=t[i]}return r}else{let s=R(e,50),a={};for(let t=0;t<s.length;t++){const r=s[t];let i=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:r.join(",")});const q=await(await fetch(n.SERVER_URL+"check-user-saved-tracks",{method:"POST",body:i})).json();for(let d=0;d<r.length;d++)r[d],a[r[d]]=q[d]}return c.value=!1,a}}async function h(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});return await(await fetch(n.SERVER_URL+"save-tracks",{method:"POST",body:s})).json()}async function y(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});return await(await fetch(n.SERVER_URL+"delete-tracks",{method:"POST",body:s})).json()}async function w(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,id:e});return await(await fetch(n.SERVER_URL+"get-playlist",{method:"POST",body:s})).json()}async function _(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,playlist_id:e});return await(await fetch(n.SERVER_URL+"save-playlist",{method:"POST",body:s})).json()}async function f(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,playlist_id:e});return await(await fetch(n.SERVER_URL+"delete-playlist",{method:"POST",body:s})).json()}async function g(e){c.value=!0;let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,playlist_id:e,id:u.userProfile.id});const t=await(await fetch(n.SERVER_URL+"check-user-follows-playlist",{method:"POST",body:s})).json();return c.value=!1,t}async function b(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,id:e});return await(await fetch(n.SERVER_URL+"get-artist",{method:"POST",body:s})).json()}async function P(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});return await(await fetch(n.SERVER_URL+"follow-artists",{method:"POST",body:s})).json()}async function U(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});return await(await fetch(n.SERVER_URL+"unfollow-artists",{method:"POST",body:s})).json()}async function O(e){c.value=!0;let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e});const t=await(await fetch(n.SERVER_URL+"check-user-follows-artists",{method:"POST",body:s})).json();return c.value=!1,t[0]}async function E(e){c.value=!0;let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,id:e});const t=await(await fetch(n.SERVER_URL+"get-top-artist-tracks",{method:"POST",body:s})).json();return c.value=!1,t}async function L(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,id:e});return await(await fetch(n.SERVER_URL+"get-album",{method:"POST",body:s})).json()}async function v(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});return await(await fetch(n.SERVER_URL+"save-albums",{method:"POST",body:s})).json()}async function T(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});return await(await fetch(n.SERVER_URL+"remove-albums",{method:"POST",body:s})).json()}async function j(e){c.value=!0;let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,ids:e.join(",")});const t=await(await fetch(n.SERVER_URL+"check-user-saved-albums",{method:"POST",body:s})).json();return c.value=!1,t}async function J(e,s){if(c.value=!0,e=="tracks"){let a=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,uris:s});await(await fetch(n.SERVER_URL+"player-play-uri",{method:"POST",body:a})).json(),c.value=!1;return}else{let a=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,context_uri:s});const r=await(await fetch(n.SERVER_URL+"player-play-context-uri",{method:"POST",body:a})).json();return c.value=!1,r[0]}}async function N(e){let s=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,user_id:e});return await(await fetch(n.SERVER_URL+"get-user",{method:"POST",body:s})).json()}async function V(e=0,s=20){c.value=!0;let a=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,limit:s,offset:e});const r=await(await fetch(n.SERVER_URL+"get-user-saved-tracks",{method:"POST",body:a})).json();return c.value=!1,r}async function I(e,s=40){let a=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,seed_artists:e.seedArtists,seed_genres:e.seedGenres,seed_tracks:e.seedTracks,limit:s});const r=await(await fetch(n.SERVER_URL+"get-recommendations",{method:"POST",body:a})).json();return S.value=r,r}async function A(e,s){let a=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,name:e,user_id:s});return await(await fetch(n.SERVER_URL+"create-playlist",{method:"POST",body:a})).json()}async function x(e,s){let a=new URLSearchParams({token:o.access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token,playlist_id:e,uris:s});return await(await fetch(n.SERVER_URL+"add-items-playlist",{method:"POST",body:a})).json()}function F(){c.value=l(void 0)}return{loading:c,recommendations:S,checkUserSavedTracks:p,saveTracks:h,deleteTracks:y,getPlaylist:w,getOneTrack:m,followPlaylist:_,unfollowPlaylist:f,checkUserFollowedPlaylist:g,getArtist:b,followArtists:P,unfollowArtists:U,checkUserFollowedArtist:O,getTopArtistTracks:E,getAlbum:L,saveAlbums:v,removeAlbums:T,checkUserSavedAlbums:j,startPlayback:J,getSavedTracks:V,getUserProfile:N,getRecommendations:I,createPlaylist:A,addTracksToPlaylist:x,$reset:F}});export{H as u};