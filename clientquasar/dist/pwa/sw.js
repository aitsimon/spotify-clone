if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const d=e=>a(e,f),b={module:{uri:f},exports:r,require:d};s[f]=Promise.all(i.map((e=>b[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"client-app"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Album.197c806a.js",revision:"490a978a95b5cb187cc2205c7991a87e"},{url:"assets/Album.db48d53e.css",revision:"3338c3bb2ad8fa033730f1f1abbd4117"},{url:"assets/Artist.4bcc86d4.css",revision:"1ae83487dac0f78ca50db6445a873bc7"},{url:"assets/Artist.aaf02f85.js",revision:"d7c705f492611d066a74abdda76782db"},{url:"assets/auxApiService.c5a2ff45.js",revision:"f36a22a07a2aa037ea33ae272b713fb4"},{url:"assets/axios.2c4d91af.js",revision:"81d18883bd0a29d32914b23cc309bfb7"},{url:"assets/BaseBackArrow.9cf4d403.js",revision:"4f747f4d7cebe3043daebea6d55a666b"},{url:"assets/BaseDownArrow.91e16f85.js",revision:"28f6debae9c6e610e63ceab58ec69d14"},{url:"assets/BaseLikeBtn.703acdf8.js",revision:"44aa4a4b0e6822ad795327a966bb1c04"},{url:"assets/BasePlayBtn.5e662f23.js",revision:"24f616d6331b9fe2c0845f0b72d4cffa"},{url:"assets/Callback.9a5bea7f.js",revision:"cd00bf638b7a3c3457c6772e9effce41"},{url:"assets/CircularSpotifyText-Light.3d6eedb4.woff",revision:"b9a73ba00c387fb8f6731523800fd442"},{url:"assets/CircularSpotifyText-Light.49c325ad.woff2",revision:"f10c13cdc336b97011738cefacc91ce9"},{url:"assets/CircularSpotifyText-LightItalic.375ecc81.woff2",revision:"b5820094766addbfae05d9d01102f936"},{url:"assets/CircularSpotifyText-LightItalic.7d8ae75d.woff",revision:"f6dc968d89504fe4b70e40b524b00d47"},{url:"assets/CircularStd-Black.54cfb88c.woff2",revision:"a1100adb8ef4a76c269e75a3232e5062"},{url:"assets/CircularStd-Black.fb9974b9.woff",revision:"678bb6281fde9351d6542e755baa2d90"},{url:"assets/CircularStd-BlackItalic.3804a930.woff",revision:"9bad56726b603e784c2b37935d3b29b7"},{url:"assets/CircularStd-BlackItalic.94ce6731.woff2",revision:"f2b0e9cbfaa142a0072ad5a79210ecdc"},{url:"assets/CircularStd-Bold.0f0c409d.woff",revision:"26aa57fb00e94ecc20aa8cbc836089ad"},{url:"assets/CircularStd-Bold.2c125977.woff2",revision:"2d661a804366d53318af81598b7c3050"},{url:"assets/CircularStd-BoldItalic.0d65c7b2.woff",revision:"13f735f8fa020143f5f4a2a362481835"},{url:"assets/CircularStd-BoldItalic.a440f2c3.woff2",revision:"3758c231ad082fdad467ecb09787912b"},{url:"assets/CircularStd-Book.1c368a51.woff2",revision:"8232d2d6611a7b39cb96a2207df68d9f"},{url:"assets/CircularStd-Book.4a6b19e9.woff",revision:"9bacb95cb067994652e272cff157d1d1"},{url:"assets/CircularStd-BookItalic.86faad4a.woff",revision:"e367537764160feb3d5187d5a9e8823e"},{url:"assets/CircularStd-BookItalic.d8275324.woff2",revision:"35a839f0af87fd3383d4154347db5f35"},{url:"assets/CircularStd-Medium.2bd06c99.woff",revision:"635b92164b0aaf47e1e6b5c4e1eed14b"},{url:"assets/CircularStd-Medium.9998bf81.woff2",revision:"e8915c05e57a13e6a19646929630682c"},{url:"assets/CircularStd-MediumItalic.0879ae07.woff",revision:"026efc7d4049017fcba6f79b36a9a487"},{url:"assets/CircularStd-MediumItalic.3d6bc864.woff2",revision:"6c93cf6625969f6fccba1ab6a4b130b9"},{url:"assets/Dashboard.58b98156.css",revision:"16a52ad721fe84b896c4f8de5424c5c1"},{url:"assets/Dashboard.654b5a64.js",revision:"9d753d94dfc0f9bfabe81dfbc8ad56fb"},{url:"assets/ErrorNotFound.73f70ca1.js",revision:"10c0420f990a0c603f2d9d6d9d6289d4"},{url:"assets/fa-brands-400.20c4a58b.ttf",revision:"0ab3921d9b80975c5597432ab59f5d0a"},{url:"assets/fa-brands-400.74833209.woff2",revision:"8b0ddedbb27cbc9971c8667caa8a0cc1"},{url:"assets/fa-regular-400.528d022d.ttf",revision:"20206738b2bffb741b00200d5d3d6d20"},{url:"assets/fa-regular-400.8e7e5ea1.woff2",revision:"61f30b79daf5b31f0d254a31fba66158"},{url:"assets/fa-solid-900.67a65763.ttf",revision:"e2ceb83946c9e5fc7eab24453a03bffb"},{url:"assets/fa-solid-900.7152a693.woff2",revision:"c64278386c2bbb5e293e11b94ca2f6d1"},{url:"assets/fa-v4compatibility.0515a423.ttf",revision:"d20cedd7e254d4b58b721b6995ca52b4"},{url:"assets/fa-v4compatibility.694a17c3.woff2",revision:"4bc58bc16bb05a05d3a47a4f7e143b75"},{url:"assets/fetchService.ed6b6eff.js",revision:"ebe5c69f4b66e280000eeabdc3c19e63"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.801e7424.js",revision:"8a3f25e092c0ebe3324d5048818ad1f4"},{url:"assets/index.1c897ed3.js",revision:"a7938e68f327190e4c9a2413aa4eab92"},{url:"assets/index.c847b65a.css",revision:"167e248b292b997b6def34d44c5e9247"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/Library.5c303945.js",revision:"d4dd635b5be52b6f096a7f008697931c"},{url:"assets/Library.f5cebc12.css",revision:"8a4e87922d1324f91bf44c5c6cfe5143"},{url:"assets/LikedSongs.7b93067c.css",revision:"a37df1f4c0e680f3075e11803837c490"},{url:"assets/LikedSongs.a9663ae8.js",revision:"b1f8b1ac4ef5a53059c8d8c71310aab7"},{url:"assets/Login.233797c4.css",revision:"967ed542ed9eec6ca4aa6e307ff20f43"},{url:"assets/Login.7d082867.js",revision:"a05de0c226d52a03429cdb6a27550808"},{url:"assets/LoginLayout.54e3a9c7.css",revision:"d8a0a961c60378d6904956209b55f338"},{url:"assets/LoginLayout.dfeec2cc.js",revision:"85153a1439c79f9a5a84160b8181befb"},{url:"assets/MainLayout.2de04763.css",revision:"c6666b1069ba0bb7d4f0fe4fc76baad8"},{url:"assets/MainLayout.cbad46b2.js",revision:"c19a2b83c245a9917cf53b3e8d906620"},{url:"assets/MillerHeadline-Bold.0219c6e1.woff",revision:"f6e42dc7123acc06aca9a11974e793d8"},{url:"assets/MillerHeadline-Bold.176b98a9.woff2",revision:"c91523b5c076cd4d32eec5be36f3e71e"},{url:"assets/MillerHeadline-BoldItalic.1edff84c.woff",revision:"c3b20f19a36aee3c8c97cba850ac427c"},{url:"assets/MillerHeadline-BoldItalic.28ee3902.woff2",revision:"e625f2dba844123708d8b36e2dc13d53"},{url:"assets/MillerHeadline-Italic.33927355.woff",revision:"ac6c22b192a153d7bac7eda8b4192010"},{url:"assets/MillerHeadline-Italic.d0ca7df6.woff2",revision:"9bc8d6a84e1c3e93a05b876ffc511600"},{url:"assets/MillerHeadline-Light.0da44ed5.woff2",revision:"605040bcf9abb42ec4ef82f1e7e85ee7"},{url:"assets/MillerHeadline-Light.c894f775.woff",revision:"3dc2ff33b70e64d153a867042fb17549"},{url:"assets/MillerHeadline-LightItalic.5168e72f.woff",revision:"663b1445ead1226ff9fdf669846a37ae"},{url:"assets/MillerHeadline-LightItalic.5afd5be6.woff2",revision:"47f4affe87ba8d22eb46835efe41f016"},{url:"assets/MillerHeadline-Roman.51e6c3dc.woff2",revision:"0bc2c4b05b386af72879051ff2db503e"},{url:"assets/MillerHeadline-Roman.64280eea.woff",revision:"b00bdb018151b1633bada678ed3677c5"},{url:"assets/MillerHeadline-SemiBold.4a43d354.woff",revision:"63082a339c8098046dbeba29386036ea"},{url:"assets/MillerHeadline-SemiBold.e496c5ac.woff2",revision:"1f7f3baae122230115e816dcde078096"},{url:"assets/MillerHeadline-SemiBoldItalic.3cac09eb.woff",revision:"74a9bbcc86f5dbdfbb04e14f7368a6e1"},{url:"assets/MillerHeadline-SemiBoldItalic.d4ba05cd.woff2",revision:"fbb6a0c9a0d3dad2929c62deea12e217"},{url:"assets/NowPlaying.29cc947b.js",revision:"5be4ac49564b542b34241659eb9a3c11"},{url:"assets/PlayerDetails.5a54c55a.css",revision:"ae4c7e500b668874b77a0f1a9b9798ab"},{url:"assets/PlayerDetails.6c7b12c6.js",revision:"9a79c125f51ec63628208bdc51699f2b"},{url:"assets/playerService.0b7b5f0b.js",revision:"94af21b561af56c9722964b36fadc835"},{url:"assets/Playing.4a8c0988.js",revision:"2884bc8e5bd469fdf646965f771797e0"},{url:"assets/Playing.f32e5d8a.css",revision:"554b423232bfe772f16d6634e45977be"},{url:"assets/Playlist.144f4086.css",revision:"2d12a63914d7710fa9ca4fbc5fe37519"},{url:"assets/Playlist.f219b73f.js",revision:"23bef854f99a0a8001cb3003922d644a"},{url:"assets/PreAuth.c33b7705.js",revision:"6ea35343e3b49cf84ac3f2dd12160864"},{url:"assets/Profile.21fe55c4.css",revision:"28a34139632656499ec79e434118c8c7"},{url:"assets/Profile.2aa1f817.js",revision:"03dfbb16b5a23b8cb9e14e33475d6336"},{url:"assets/QChip.190cff57.js",revision:"25e3f1eb3eb46c87ea0006f006710761"},{url:"assets/QCircularProgress.00e5179d.js",revision:"943634737fcc81bb3f34a79ebd717532"},{url:"assets/QImg.57e6efac.js",revision:"d0da58e46be06c795758406e43b2ebf0"},{url:"assets/QInfiniteScroll.1df16291.js",revision:"0943231e8c79a43dec654456950edad8"},{url:"assets/QLayout.4fa937d1.js",revision:"ae0f678663bd5c717f6b4bb4fecc5af4"},{url:"assets/QPage.e63976a5.js",revision:"95dd4ce423c201a85c8ec92154f3bd38"},{url:"assets/QResizeObserver.d4ca912a.js",revision:"01fd3c02e63e727f0e6006ec317e173a"},{url:"assets/RecommendedPlaylist.4e9e5d2f.css",revision:"36307eda7a9c6d6e97485eb0c9c583bc"},{url:"assets/RecommendedPlaylist.ae0aea54.js",revision:"95238ef7efab23a73563431a8910a0ae"},{url:"assets/Recommender.168c9429.js",revision:"e616ce7b26db11b33b91fbe51d2878a2"},{url:"assets/Recommender.595a9478.css",revision:"5f641e02e5576261f62d7bc897fc3aab"},{url:"assets/Search.0e49c7b0.js",revision:"92986ae8672ee5140e3e5a02d5334f56"},{url:"assets/selection.8640e7c4.js",revision:"b0e9b343218ea8971b995b0b362584d8"},{url:"assets/Spotify_Icon_RGB_Green.6089a3df.png",revision:"7a34cf4279c6f8f8c97a1250ccce40a4"},{url:"assets/Tests.9524d4b8.js",revision:"722911c5dceecb60a44abcb003bdb8fb"},{url:"assets/TheSearchFilters.a8c247d0.js",revision:"52e006ebb23446d03a3c0357f51f21c3"},{url:"assets/use-quasar.4bcd9f96.js",revision:"877ae0abbfc8a84dcd470b70dc27b659"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"icons/Spotify_Icon_RGB_Black.ico",revision:"e5a53621533463070d553e5ad41ff023"},{url:"icons/Spotify_Icon_RGB_Black.png",revision:"b818d523d8560f33bcf5d6628f0ffa73"},{url:"icons/Spotify_Icon_RGB_Green.ico",revision:"6d78893d977a9bfd123176a9ca9ce3ca"},{url:"icons/Spotify_Icon_RGB_Green.png",revision:"7a34cf4279c6f8f8c97a1250ccce40a4"},{url:"icons/Spotify_Icon_RGB_White.ico",revision:"119bd2ecc306ec3f20cfabda5d73c706"},{url:"icons/Spotify_Icon_RGB_White.png",revision:"cc4e2784f47909e55d940c014cbef882"},{url:"icons/spotify-128x128.png",revision:"f34ca20d682c7296eebb7de4b183b29f"},{url:"icons/spotify-192x192.png",revision:"038baf3fa7d17f9dd5c41400ff270947"},{url:"icons/spotify-256x256.png",revision:"0f78794309d33a1d56f038590cb6ee1e"},{url:"icons/spotify-384x384.png",revision:"d3f4ceee96bd9a7e3435f9b83ec0c27c"},{url:"icons/spotify-512x512.png",revision:"ebff2cde8f0085b38b390bdf222c4b7f"},{url:"index.html",revision:"38251efea7ba126fd09bd08bc3b38c05"},{url:"manifest.json",revision:"72d66e802cb4122121c2f709837638f2"},{url:"promptEvent.js",revision:"c9657cd96cfe82e20c009819320f48e0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
