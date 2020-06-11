/*!
   JW Player version 8.9.3
   Copyright (c) 2019, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.9.3/notice.txt
*/
(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[15],{107:function(e,t,r){"use strict";var n=r(3),i=r(51),a={canplay:function(){this.trigger(n.E)},play:function(){this.stallTime=-1,this.video.paused||this.state===n.qb||this.setState(n.ob)},loadedmetadata:function(){var e={metadataType:"media",duration:this.getDuration(),height:this.video.videoHeight,width:this.video.videoWidth,seekRange:this.getSeekRange()},t=this.drmUsed;t&&(e.drm=t),this.trigger(n.K,e)},timeupdate:function(){var e=this.video.currentTime,t=this.getCurrentTime(),r=this.getDuration();if(!isNaN(r)){this.seeking||this.video.paused||this.state!==n.rb&&this.state!==n.ob||this.stallTime===e||(this.stallTime=-1,this.setState(n.qb),this.trigger(n.gb));var i={position:t,duration:r,currentTime:e,seekRange:this.getSeekRange(),metadata:{currentTime:e}};if(this.getPtsOffset){var a=this.getPtsOffset();a>=0&&(i.metadata.mpegts=a+t)}var s=this.getLiveLatency();null!==s&&(i.latency=s),(this.state===n.qb||this.seeking)&&this.trigger(n.S,i)}},click:function(e){this.trigger(n.n,e)},volumechange:function(){var e=this.video;this.trigger(n.V,{volume:Math.round(100*e.volume)}),this.trigger(n.M,{mute:e.muted})},seeked:function(){this.seeking&&(this.seeking=!1,this.trigger(n.R))},playing:function(){-1===this.stallTime&&this.setState(n.qb),this.trigger(n.gb)},pause:function(){this.state!==n.lb&&(this.video.ended||this.video.error||this.video.currentTime!==this.video.duration&&this.setState(n.pb))},progress:function(){var e=this.getDuration();if(!(e<=0||e===1/0)){var t=this.video.buffered;if(t&&0!==t.length){var r=Object(i.a)(t.end(t.length-1)/e,0,1);this.trigger(n.D,{bufferPercent:100*r,position:this.getCurrentTime(),duration:e,currentTime:this.video.currentTime,seekRange:this.getSeekRange()})}}},ratechange:function(){this.trigger(n.P,{playbackRate:this.video.playbackRate})},ended:function(){this.videoHeight=0,this.streamBitrate=0,this.state!==n.nb&&this.state!==n.lb&&this.trigger(n.F)},loadeddata:function(){this.renderNatively&&this.setTextTracks(this.video.textTracks)}};t.a=a},108:function(e,t,r){"use strict";var n=r(5),i=r(11),a=r(80),s={container:null,volume:function(e){this.video.volume=Math.min(Math.max(0,e/100),1)},mute:function(e){this.video.muted=!!e,this.video.muted||this.video.removeAttribute("muted")},resize:function(e,t,r){var a=this.video,s=a.videoWidth,c=a.videoHeight;if(e&&t&&s&&c){var u={objectFit:"",width:"",height:""};if("uniform"===r){var o=e/t,d=s/c,l=Math.abs(o-d);l<.09&&l>.0025&&(u.objectFit="fill",r="exactfit")}if(n.Browser.ie||n.OS.iOS&&n.OS.version.major<9||n.Browser.androidNative)if("uniform"!==r){u.objectFit="contain";var h=e/t,f=s/c,v=1,g=1;"none"===r?v=g=h>f?Math.ceil(100*c/t)/100:Math.ceil(100*s/e)/100:"fill"===r?v=g=h>f?h/f:f/h:"exactfit"===r&&(h>f?(v=h/f,g=1):(v=1,g=f/h)),Object(i.e)(a,"matrix(".concat(v.toFixed(2),", 0, 0, ").concat(g.toFixed(2),", 0, 0)"))}else u.top=u.left=u.margin="",Object(i.e)(a,"");Object(i.d)(a,u)}},getContainer:function(){return this.container},setContainer:function(e){this.container=e,this.video.parentNode!==e&&e.appendChild(this.video)},remove:function(){this.stop(),this.destroy();var e=this.container;e&&e===this.video.parentNode&&e.removeChild(this.video)},atEdgeOfLiveStream:function(){if(!this.isLive())return!1;return Object(a.a)(this.video.buffered)-this.video.currentTime<=2}};t.a=s},109:function(e,t,r){"use strict";t.a={attachMedia:function(){this.eventsOn_()},detachMedia:function(){return this.eventsOff_(),this.video}}},110:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return a});var n=r(1);function i(e,t,r){var i=e+1e3,s=n.o;return t>0?(403===t&&(s=n.q),i+=a(t)):"http:"===(""+r).substring(0,5)&&"https:"===document.location.protocol?i+=12:0===t&&(i+=11),{code:i,key:s}}var a=function(e){return e>=400&&e<600?e:6}},50:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(44),a=r(3),s=r(82),c=r(5),u=r(63),o=r(107),d=r(108),l=r(109),h=r(74),f=r(11),v=r(7),g=r(56),T=r(9),k=r(78),m=r(80),b=r(75),y=r(18),p=r(1),x=224e3,_=224005,w=221e3,O=324e3,C=window.clearTimeout,j="html5",B=function(){};function L(e,t){Object.keys(e).forEach(function(r){t.removeEventListener(r,e[r])})}function S(e,t,r){this.state=a.nb,this.seeking=!1,this.currentTime=-1,this.retries=0,this.maxRetries=3;var i,g=this,S=t.minDvrWindow,E={progress:function(){o.a.progress.call(g),ge()},timeupdate:function(){g.currentTime>=0&&(g.retries=0),g.currentTime=N.currentTime,q&&U!==N.currentTime&&ee(N.currentTime),o.a.timeupdate.call(g),ge(),c.Browser.ie&&Z()},resize:Z,ended:function(){V=-1,Te(),o.a.ended.call(g)},loadedmetadata:function(){var e=g.getDuration();z&&e===1/0&&(e=0);var t={metadataType:"media",duration:e,height:N.videoHeight,width:N.videoWidth,seekRange:g.getSeekRange()};g.trigger(a.K,t),Z()},durationchange:function(){z||o.a.progress.call(g)},loadeddata:function(){var e;!function(){if(N.getStartDate){var e=N.getStartDate(),t=e.getTime();if(t!==g.startDateTime&&!isNaN(t)){g.startDateTime=t;var r=e.toISOString(),n=g.getSeekRange(),i=n.start,s=n.end,c={metadataType:"program-date-time",programDateTime:r,start:i,end:s},u=g.createCue(i,s,JSON.stringify(c));g.addVTTCue({type:"metadata",cue:u}),delete c.metadataType,g.trigger(a.L,{metadataType:"program-date-time",metadata:c})}}}(),o.a.loadeddata.call(g),function(e){if(W=null,!e)return;if(e.length){for(var t=0;t<e.length;t++)if(e[t].enabled){K=t;break}-1===K&&(e[K=0].enabled=!0),W=Object(n.B)(e,function(e){var t={name:e.label||e.language,language:e.language};return t})}g.addTracksListener(e,"change",de),W&&g.trigger("audioTracks",{currentTrack:K,tracks:W})}(N.audioTracks),e=g.getDuration(),D&&-1!==D&&e&&e!==1/0&&g.seek(D),Z()},canplay:function(){P=!0,z||ve(),c.Browser.ie&&9===c.Browser.version.major&&g.setTextTracks(g._textTracks),o.a.canplay.call(g)},seeking:function(){var e=null!==H?te(H):g.getCurrentTime(),t=te(U);U=H,H=null,D=0,g.seeking=!0,g.trigger(a.Q,{position:t,offset:e})},seeked:function(){o.a.seeked.call(g)},waiting:function(){g.seeking?g.setState(a.ob):g.state===a.qb&&(g.atEdgeOfLiveStream()&&g.setPlaybackRate(1),g.stallTime=g.video.currentTime,g.setState(a.rb))},webkitbeginfullscreen:function(e){q=!0,le(e)},webkitendfullscreen:function(e){q=!1,le(e)},error:function(){var e=g.video,t=e.error,r=t&&t.code||-1;if((3===r||4===r)&&g.retries<g.maxRetries)return g.trigger(a.ub,new p.s(null,O+r-1,t)),g.retries++,N.load(),void(-1!==g.currentTime&&(P=!1,g.seek(g.currentTime),g.currentTime=-1));var n=x,i=p.o;1===r?n+=r:2===r?(i=p.l,n=w):3===r||4===r?(n+=r-1,4===r&&e.src===location.href&&(n=_)):i=p.r,ce(),g.trigger(a.G,new p.s(i,n,t))}};Object.keys(o.a).forEach(function(e){if(!E[e]){var t=o.a[e];E[e]=function(e){t.call(g,e)}}}),Object(n.k)(this,T.a,d.a,l.a,k.a,{renderNatively:(i=t.renderCaptionsNatively,!(!c.OS.iOS&&!c.Browser.safari)||i&&c.Browser.chrome),eventsOn_:function(){var e,t;e=E,t=N,Object.keys(e).forEach(function(r){t.removeEventListener(r,e[r]),t.addEventListener(r,e[r])})},eventsOff_:function(){L(E,N)},detachMedia:function(){return l.a.detachMedia.call(g),Te(),this.removeTracksListener(N.textTracks,"change",this.textTrackChangeHandler),this.disableTextTrack(),N},attachMedia:function(){l.a.attachMedia.call(g),P=!1,this.seeking=!1,N.loop=!1,this.enableTextTrack(),this.renderNatively&&this.setTextTracks(this.video.textTracks),this.addTracksListener(N.textTracks,"change",this.textTrackChangeHandler)},isLive:function(){return N.duration===1/0}});var R,N=r,A={level:{}},M=null!==t.liveTimeout?t.liveTimeout:3e4,P=!1,D=0,H=null,U=null,V=-1,q=!1,F=B,W=null,K=-1,X=-1,G=!1,Q=null,z=!1,J=null,$=null,Y=0;function Z(){var e=A.level;if(e.width!==N.videoWidth||e.height!==N.videoHeight){if(!N.videoWidth&&!fe()||-1===V)return;e.width=N.videoWidth,e.height=N.videoHeight,ve(),A.reason=A.reason||"auto",A.mode="hls"===R[V].type?"auto":"manual",A.bitrate=0,e.index=V,e.label=R[V].label,g.trigger(a.U,A),A.reason=""}}function ee(e){U=e}function te(e){var t=g.getSeekRange();return g.isLive()&&Object(h.a)(t.end-t.start,S)?Math.min(0,e-t.end):e}function re(e){var t;return Array.isArray(e)&&e.length>0&&(t=e.map(function(e,t){return{label:e.label||t}})),t}function ne(e){g.currentTime=-1,S=e.minDvrWindow,R=e.sources,V=function(e){var r=Math.max(0,V),n=t.qualityLabel;if(e)for(var i=0;i<e.length;i++)if(e[i].default&&(r=i),n&&e[i].label===n)return i;A.reason="initial choice",A.level.width&&A.level.height||(A.level={});return r}(R)}function ie(){return N.paused&&N.played&&N.played.length&&g.isLive()&&!Object(h.a)(oe()-ue(),S)&&(g.clearTracks(),N.load()),N.play()||Object(b.a)(N)}function ae(e){g.currentTime=-1,D=0,Te();var t=N.src,r=document.createElement("source");r.src=R[V].file,r.src!==t?(se(R[V]),t&&N.load()):0===e&&N.currentTime>0&&(D=-1,g.seek(e)),e>0&&N.currentTime!==e&&g.seek(e);var n=re(R);n&&g.trigger(a.I,{levels:n,currentQuality:V}),R.length&&"hls"!==R[0].type&&g.sendMediaType(R)}function se(e){W=null,K=-1,A.reason||(A.reason="initial choice",A.level={}),P=!1;var t=document.createElement("source");t.src=e.file,N.src!==t.src&&(N.src=e.file)}function ce(){N&&(g.disableTextTrack(),N.removeAttribute("preload"),N.removeAttribute("src"),Object(v.g)(N),Object(f.d)(N,{objectFit:""}),V=-1,!c.Browser.msie&&"load"in N&&N.load())}function ue(){var e=1/0;return["buffered","seekable"].forEach(function(t){for(var r=N[t],i=r?r.length:0;i--;){var a=Math.min(e,r.start(i));Object(n.t)(a)&&(e=a)}}),e}function oe(){var e=0;return["buffered","seekable"].forEach(function(t){for(var r=N[t],i=r?r.length:0;i--;){var a=Math.max(e,r.end(i));Object(n.t)(a)&&(e=a)}}),e}function de(){for(var e=-1,t=0;t<N.audioTracks.length;t++)if(N.audioTracks[t].enabled){e=t;break}he(e)}function le(e){g.trigger(a.X,{target:e.target,jwstate:q})}function he(e){N&&N.audioTracks&&W&&e>-1&&e<N.audioTracks.length&&e!==K&&(N.audioTracks[K].enabled=!1,K=e,N.audioTracks[K].enabled=!0,g.trigger("audioTrackChanged",{currentTrack:K,tracks:W}))}function fe(){return 0===N.videoHeight&&!((c.OS.iOS||c.Browser.safari)&&N.readyState<2)}function ve(){if("hls"===R[0].type){var e=fe()?"audio":"video";g.trigger(a.T,{mediaType:e})}}function ge(){if(0!==M){var e=Object(m.a)(N.buffered);g.isLive()&&e&&Q===e?-1===X&&(X=setTimeout(function(){G=!0,function(){if(G&&g.atEdgeOfLiveStream())return g.trigger(a.G,new p.s(p.p,I)),!0}()},M)):(Te(),G=!1),Q=e}}function Te(){C(X),X=-1}this.video=N,this.supportsPlaybackRate=!0,this.startDateTime=0,g.getCurrentTime=function(){return function(e){var t=g.getSeekRange();if(g.isLive()&&Object(h.a)(t.end-t.start,S)){var r=!$||Math.abs(J-t.end)>1;return r&&function(e){J=e.end,$=Math.min(0,N.currentTime-J),Y=Object(y.a)()}(t),$}return e}(N.currentTime)},g.getDuration=function(){var e=N.duration;if(z&&e===1/0&&0===N.currentTime||isNaN(e))return 0;var t=oe();if(g.isLive()&&t){var r=t-ue();Object(h.a)(r,S)&&(e=-r)}return e},g.getSeekRange=function(){var e={start:0,end:N.duration};return N.seekable.length&&(e.end=oe(),e.start=ue()),e},this.stop=function(){Te(),ce(),this.clearTracks(),c.Browser.ie&&N.pause(),this.setState(a.nb)},this.destroy=function(){F=B,L(E,N),this.removeTracksListener(N.audioTracks,"change",de),this.removeTracksListener(N.textTracks,"change",g.textTrackChangeHandler),this.off()},this.init=function(e){g.retries=0,g.maxRetries=e.adType?0:3,ne(e);var t=R[V];(z=Object(u.a)(t))&&(g.supportsPlaybackRate=!1,E.waiting=B),g.eventsOn_(),R.length&&"hls"!==R[0].type&&this.sendMediaType(R),A.reason=""},this.preload=function(e){ne(e);var t=R[V],r=t.preload||"metadata";"none"!==r&&(N.setAttribute("preload",r),se(t))},this.load=function(e){ne(e),ae(e.starttime),this.setupSideloadedTracks(e.tracks)},this.play=function(){return F(),ie()},this.pause=function(){Te(),F=function(){if(N.paused&&N.currentTime&&g.isLive()){var e=oe(),t=e-ue(),r=!Object(h.a)(t,S),i=e-N.currentTime;if(r&&e&&(i>15||i<0)){if(H=Math.max(e-10,e-t),!Object(n.t)(H))return;ee(N.currentTime),N.currentTime=H}}},N.pause()},this.seek=function(e){var t=g.getSeekRange(),r=e;if(e<0&&(r+=t.end),P||(P=!!oe()),P){D=0;try{if(g.seeking=!0,g.isLive()&&Object(h.a)(t.end-t.start,S))if($=Math.min(0,r-J),e<0)r+=Math.min(12,(Object(y.a)()-Y)/1e3);H=r,ee(N.currentTime),N.currentTime=r}catch(e){g.seeking=!1,D=r}}else D=r,c.Browser.firefox&&N.paused&&ie()},this.setVisibility=function(e){(e=!!e)||c.OS.android?Object(f.d)(g.container,{visibility:"visible",opacity:1}):Object(f.d)(g.container,{visibility:"",opacity:0})},this.setFullscreen=function(e){if(e=!!e){try{var t=N.webkitEnterFullscreen||N.webkitEnterFullScreen;t&&t.apply(N)}catch(e){return!1}return g.getFullScreen()}var r=N.webkitExitFullscreen||N.webkitExitFullScreen;return r&&r.apply(N),e},g.getFullScreen=function(){return q||!!N.webkitDisplayingFullscreen},this.setCurrentQuality=function(e){V!==e&&e>=0&&R&&R.length>e&&(V=e,A.reason="api",A.level={},this.trigger(a.J,{currentQuality:e,levels:re(R)}),t.qualityLabel=R[e].label,ae(N.currentTime||0),ie())},this.setPlaybackRate=function(e){N.playbackRate=N.defaultPlaybackRate=e},this.getPlaybackRate=function(){return N.playbackRate},this.getCurrentQuality=function(){return V},this.getQualityLevels=function(){return Array.isArray(R)?R.map(function(e){return Object(s.a)(e)}):[]},this.getName=function(){return{name:j}},this.setCurrentAudioTrack=he,this.getAudioTracks=function(){return W||[]},this.getCurrentAudioTrack=function(){return K}}Object(n.k)(S.prototype,g.a),S.getName=function(){return{name:"html5"}};var E=S,I=220001,R=r(28),N=r(81),A=r(110),M=function(e,t,r){E.call(this,e,t,r);var s=this,c=s.init,u=s.load,o=s.destroy,d=s.renderNatively;function l(e){Object(N.a)([e])?s.renderNatively=!1:s.renderNatively=d}function h(e){var t=e.sources[0];if(!s.fairplay||!Object.is(s.fairplay.source,t)){var r=t.drm;r&&r.fairplay?(s.fairplay=Object(n.k)({},{certificateUrl:"",processSpcUrl:"",licenseResponseType:"arraybuffer",licenseRequestHeaders:[],licenseRequestMessage:function(e){return e},licenseRequestFilter:function(){},licenseResponseFilter:function(){},extractContentId:function(e){return e.split("skd://")[1]},extractKey:function(e){return new Uint8Array(e)}},r.fairplay),s.fairplay.source=t,s.fairplay.destroy=function(){D(s.video,"webkitneedkey",f);var e=this.session;e&&(D(e,"webkitkeymessage",v),D(e,"webkitkeyerror",y)),s.fairplay=null},P(s.video,"webkitneedkey",f)):s.fairplay&&s.fairplay.destroy()}}function f(e){var t=e.target,r=e.initData;if(t.webkitKeys||t.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")),!t.webkitKeys)throw new Error("Could not create MediaKeys");var n=s.fairplay;n.initData=r,Object(R.a)(n.certificateUrl,function(e){var i=new Uint8Array(e.response),a=n.extractContentId(H(r));"string"==typeof a&&(a=function(e){for(var t=new ArrayBuffer(2*e.length),r=new Uint16Array(t),n=0,i=e.length;n<i;n++)r[n]=e.charCodeAt(n);return r}(a));var s=function(e,t,r){var n=0,i=new ArrayBuffer(e.byteLength+4+t.byteLength+4+r.byteLength),a=new DataView(i);new Uint8Array(i,n,e.byteLength).set(e),n+=e.byteLength,a.setUint32(n,t.byteLength,!0),n+=4;var s=new Uint16Array(i,n,t.length);return s.set(t),n+=s.byteLength,a.setUint32(n,r.byteLength,!0),n+=4,new Uint8Array(i,n,r.byteLength).set(r),new Uint8Array(i,0,i.byteLength)}(r,a,i),c=t.webkitKeys.createSession("video/mp4",s);if(!c)throw new Error("Could not create key session");P(c,"webkitkeymessage",v),P(c,"webkitkeyerror",y),n.session=c},b,{responseType:"arraybuffer"})}function v(e){var t=s.fairplay,r=e.target,n=e.message,i=new XMLHttpRequest;i.responseType=t.licenseResponseType,i.addEventListener("load",T,!1),i.addEventListener("error",x,!1);var a="";a="function"==typeof t.processSpcUrl?t.processSpcUrl(H(t.initData)):t.processSpcUrl,i.open("POST",a,!0),i.body=t.licenseRequestMessage(n,r),i.headers={},[].concat(t.licenseRequestHeaders||[]).forEach(function(e){i.setRequestHeader(e.name,e.value)});var c=t.licenseRequestFilter.call(e.target,i,t);c&&"function"==typeof c.then?c.then(function(){g(i)}):g(i)}function g(e){Object.keys(e.headers).forEach(function(t){e.setRequestHeader(t,e.headers[t])}),e.send(e.body)}function T(e){var t=s.fairplay,r=e.target,n={};(r.getAllResponseHeaders()||"").trim().split(/[\r\n]+/).forEach(function(e){var t=e.split(": "),r=t.shift();n[r]=t.join(": ")});var i={data:r.response,headers:n},a=t.licenseResponseFilter.call(e.target,i,t);a&&"function"==typeof a.then?a.then(function(){k(i.data)}):k(i.data)}function k(e){var t=s.fairplay.extractKey(e);"function"==typeof t.then?t.then(m):m(t)}function m(e){var t=s.fairplay.session,r=e;"string"==typeof r&&(r=function(e){for(var t=Object(i.a)(e),r=t.length,n=new Uint8Array(new ArrayBuffer(r)),a=0;a<r;a++)n[a]=t.charCodeAt(a);return n}(r)),t.update(r)}function b(e,t,r,n){n.code+=U,n.key=p.q,s.trigger(a.G,n)}function y(e){s.trigger(a.G,new p.s(p.q,U+650,e))}function x(e){s.trigger(a.G,new p.s(p.q,V+Object(A.a)(e.currentTarget.status),e))}this.init=function(e){h(e),l(e),c.call(this,e)},this.load=function(e){h(e),l(e),u.call(this,e)},this.destroy=function(e){this.fairplay&&this.fairplay.destroy(),o.call(this,e)}};function P(e,t,r){D(e,t,r),e.addEventListener(t,r,!1)}function D(e,t,r){e&&e.removeEventListener(t,r,!1)}function H(e){var t=new Uint16Array(e.buffer);return String.fromCharCode.apply(null,t)}Object(n.k)(M.prototype,E.prototype),M.getName=E.getName;t.default=M;var U=225e3,V=226e3},68:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(2);function i(e){var t=[],r=(e=Object(n.i)(e)).split("\r\n\r\n");1===r.length&&(r=e.split("\n\n"));for(var i=0;i<r.length;i++)if("WEBVTT"!==r[i]){var s=a(r[i]);s.text&&t.push(s)}return t}function a(e){var t={},r=e.split("\r\n");1===r.length&&(r=e.split("\n"));var i=1;if(r[0].indexOf(" --\x3e ")>0&&(i=0),r.length>i+1&&r[i+1]){var a=r[i],s=a.indexOf(" --\x3e ");s>0&&(t.begin=Object(n.g)(a.substr(0,s)),t.end=Object(n.g)(a.substr(s+5)),t.text=r.slice(i+1).join("\r\n"))}return t}},71:function(e,t,r){"use strict";var n=window.VTTCue;function i(e){if("string"!=typeof e)return!1;return!!{start:!0,middle:!0,end:!0,left:!0,right:!0}[e.toLowerCase()]&&e.toLowerCase()}if(!n){(n=function(e,t,r){var n=this;n.hasBeenReset=!1;var a="",s=!1,c=e,u=t,o=r,d=null,l="",h=!0,f="auto",v="start",g="auto",T=100,k="middle";Object.defineProperty(n,"id",{enumerable:!0,get:function(){return a},set:function(e){a=""+e}}),Object.defineProperty(n,"pauseOnExit",{enumerable:!0,get:function(){return s},set:function(e){s=!!e}}),Object.defineProperty(n,"startTime",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"endTime",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");u=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"text",{enumerable:!0,get:function(){return o},set:function(e){o=""+e,this.hasBeenReset=!0}}),Object.defineProperty(n,"region",{enumerable:!0,get:function(){return d},set:function(e){d=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"vertical",{enumerable:!0,get:function(){return l},set:function(e){var t=function(e){return"string"==typeof e&&!!{"":!0,lr:!0,rl:!0}[e.toLowerCase()]&&e.toLowerCase()}(e);if(!1===t)throw new SyntaxError("An invalid or illegal string was specified.");l=t,this.hasBeenReset=!0}}),Object.defineProperty(n,"snapToLines",{enumerable:!0,get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(n,"line",{enumerable:!0,get:function(){return f},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");f=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"lineAlign",{enumerable:!0,get:function(){return v},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");v=t,this.hasBeenReset=!0}}),Object.defineProperty(n,"position",{enumerable:!0,get:function(){return g},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"size",{enumerable:!0,get:function(){return T},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");T=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"align",{enumerable:!0,get:function(){return k},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");k=t,this.hasBeenReset=!0}}),n.displayState=void 0}).prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)}}t.a=n},72:function(e,t,r){"use strict";function n(e,t){var r=e.kind||"cc";return e.default||e.defaulttrack?"default":e._id||e.file||r+t}function i(e,t){var r=e.label||e.name||e.language;return r||(r="Unknown CC",(t+=1)>1&&(r+=" ["+t+"]")),{label:r,unknownCount:t}}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i})},73:function(e,t,r){"use strict";var n=r(71),i=r(10),a=r(28),s=r(4),c=r(68),u=r(2),o=r(1);function d(e){throw new o.s(null,e)}function l(e,t,n){e.xhr=Object(a.a)(e.file,function(a){!function(e,t,n,a){var l,h,v=e.responseXML?e.responseXML.firstChild:null;if(v)for("xml"===Object(s.b)(v)&&(v=v.nextSibling);v.nodeType===v.COMMENT_NODE;)v=v.nextSibling;try{if(v&&"tt"===Object(s.b)(v))l=function(e){e||d(306007);var t=[],r=e.getElementsByTagName("p"),n=30,i=e.getElementsByTagName("tt");if(i&&i[0]){var a=parseFloat(i[0].getAttribute("ttp:frameRate"));isNaN(a)||(n=a)}r||d(306005),r.length||(r=e.getElementsByTagName("tt:p")).length||(r=e.getElementsByTagName("tts:p"));for(var s=0;s<r.length;s++){for(var c=r[s],o=c.getElementsByTagName("br"),l=0;l<o.length;l++){var h=o[l];h.parentNode.replaceChild(e.createTextNode("\r\n"),h)}var f=c.innerHTML||c.textContent||c.text||"",v=Object(u.i)(f).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(v){var g=c.getAttribute("begin"),T=c.getAttribute("dur"),k=c.getAttribute("end"),m={begin:Object(u.g)(g,n),text:v};k?m.end=Object(u.g)(k,n):T&&(m.end=m.begin+Object(u.g)(T,n)),t.push(m)}}return t.length||d(306005),t}(e.responseXML),h=f(l),delete t.xhr,n(h);else{var g=e.responseText;g.indexOf("WEBVTT")>=0?r.e(18).then(function(e){return r(134).default}.bind(null,r)).catch(Object(i.c)(301131)).then(function(e){var r=new e(window);h=[],r.oncue=function(e){h.push(e)},r.onflush=function(){delete t.xhr,n(h)},r.parse(g)}).catch(function(e){delete t.xhr,a(Object(o.A)(null,o.b,e))}):(l=Object(c.a)(g),h=f(l),delete t.xhr,n(h))}}catch(e){delete t.xhr,a(Object(o.A)(null,o.b,e))}}(a,e,t,n)},function(e,t,r,i){n(Object(o.z)(i,o.b))})}function h(e){e&&e.forEach(function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr})}function f(e){return e.map(function(e){return new n.a(e.begin,e.end,e.text)})}r.d(t,"c",function(){return l}),r.d(t,"a",function(){return h}),r.d(t,"b",function(){return f})},74:function(e,t,r){"use strict";function n(e,t){return e!==1/0&&Math.abs(e)>=Math.max(a(t),0)}function i(e,t){var r="VOD";return e===1/0?r="LIVE":e<0&&(r=n(e,a(t))?"DVR":"LIVE"),r}function a(e){return void 0===e?120:Math.max(e,0)}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i})},75:function(e,t,r){"use strict";function n(e){return new Promise(function(t,r){if(e.paused)return r(i("NotAllowedError",0,"play() failed."));var n=function(){e.removeEventListener("play",a),e.removeEventListener("playing",s),e.removeEventListener("pause",s),e.removeEventListener("abort",s),e.removeEventListener("error",s)},a=function(){e.addEventListener("playing",s),e.addEventListener("abort",s),e.addEventListener("error",s),e.addEventListener("pause",s)},s=function(e){if(n(),"playing"===e.type)t();else{var a='The play() request was interrupted by a "'.concat(e.type,'" event.');"error"===e.type?r(i("NotSupportedError",9,a)):r(i("AbortError",20,a))}};e.addEventListener("play",a)})}function i(e,t,r){var n=new Error(r);return n.name=e,n.code=t,n}r.d(t,"a",function(){return n})},76:function(e,t,r){"use strict";r.d(t,"c",function(){return i}),r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});var n={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};function i(e,t){for(var r,n,i,a=e.length,s="",c=t||0;c<a;)if(0!==(r=e[c++])&&3!==r)switch(r>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(r);break;case 12:case 13:n=e[c++],s+=String.fromCharCode((31&r)<<6|63&n);break;case 14:n=e[c++],i=e[c++],s+=String.fromCharCode((15&r)<<12|(63&n)<<6|(63&i)<<0)}return s}function a(e){var t=function(e){for(var t="0x",r=0;r<e.length;r++)e[r]<16&&(t+="0"),t+=e[r].toString(16);return parseInt(t)}(e);return 127&t|(32512&t)>>1|(8323072&t)>>2|(2130706432&t)>>3}function s(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(function(e,t){if(!("value"in t)&&"data"in t&&t.data instanceof ArrayBuffer){var r=new Uint8Array(t.data),s=r.length;t={value:{key:"",data:""}};for(var c=10;c<14&&c<r.length&&0!==r[c];)t.value.key+=String.fromCharCode(r[c]),c++;var u=19,o=r[u];3!==o&&0!==o||(o=r[++u],s--);var d=0;if(1!==o&&2!==o)for(var l=u+1;l<s;l++)if(0===r[l]){d=l-u;break}if(d>0){var h=i(r.subarray(u,u+=d),0);if("PRIV"===t.value.key){if("com.apple.streaming.transportStreamTimestamp"===h){var f=1&a(r.subarray(u,u+=4)),v=a(r.subarray(u,u+=4))+(f?4294967296:0);t.value.data=v}else t.value.data=i(r,u+1);t.value.info=h}else t.value.info=h,t.value.data=i(r,u+1)}else{var g=r[u];t.value.data=1===g||2===g?function(e,t){for(var r=e.length-1,n="",i=t||0;i<r;)254===e[i]&&255===e[i+1]||(n+=String.fromCharCode((e[i]<<8)+e[i+1])),i+=2;return n}(r,u+1):i(r,u+1)}}if(n.hasOwnProperty(t.value.key)&&(e[n[t.value.key]]=t.value.data),t.value.info){var T=e[t.value.key];T!==Object(T)&&(T={},e[t.value.key]=T),T[t.value.info]=t.value.data}else e[t.value.key]=t.value.data;return e},{})}},78:function(e,t,r){"use strict";var n=r(73),i=r(72),a=r(76),s=r(5),c=r(3),u=r(0),o={_itemTracks:null,_textTracks:null,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_currentTextTrackIndex:-1,_unknownCount:0,_activeCues:null,_initTextTracks:function(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._unknownCount=0},addTracksListener:function(e,t,r){if(!e)return;if(d(e,t,r),this.instreamMode)return;e.addEventListener?e.addEventListener(t,r):e["on"+t]=r},clearTracks:function(){Object(n.a)(this._itemTracks);var e=this._tracksById&&this._tracksById.nativemetadata;(this.renderNatively||e)&&(f(this.renderNatively,this.video.textTracks),e&&(e.oncuechange=null));this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._currentTextTrackIndex=-1,this._activeCues=null,this.renderNatively&&(this.removeTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),f(this.renderNatively,this.video.textTracks))},clearMetaCues:function(){var e=this._tracksById&&this._tracksById.nativemetadata;e&&(f(this.renderNatively,[e]),e.mode="hidden",e.inuse=!0,this._cachedVTTCues[e._id]={})},clearCueData:function(e){var t=this._cachedVTTCues;t&&t[e]&&(t[e]={},this._tracksById&&(this._tracksById[e].data=[]))},disableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];if(e){e.mode="disabled";var t=e._id;t&&0===t.indexOf("nativecaptions")&&(e.mode="hidden")}}},enableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];e&&(e.mode="showing")}},getSubtitlesTrack:function(){return this._currentTextTrackIndex},removeTracksListener:d,addTextTracks:l,setTextTracks:function(e){if(this._currentTextTrackIndex=-1,!e)return;this._textTracks?(this._unknownCount=0,this._textTracks=this._textTracks.filter(function(e){var t=e._id;return this.renderNatively&&t&&0===t.indexOf("nativecaptions")?(delete this._tracksById[t],!1):(e.name&&0===e.name.indexOf("Unknown")&&this._unknownCount++,!0)},this),delete this._tracksById.nativemetadata):this._initTextTracks();if(e.length)for(var t=0,r=e.length;t<r;t++){var n=e[t];if(!n._id){if("captions"===n.kind||"metadata"===n.kind){if(n._id="native"+n.kind+t,!n.label&&"captions"===n.kind){var a=Object(i.b)(n,this._unknownCount);n.name=a.label,this._unknownCount=a.unknownCount}}else n._id=Object(i.a)(n,this._textTracks.length);if(this._tracksById[n._id])continue;n.inuse=!0}if(n.inuse&&!this._tracksById[n._id])if("metadata"===n.kind)n.mode="hidden",n.oncuechange=k.bind(this),this._tracksById[n._id]=n;else if(v(n.kind)){var c=n.mode,o=void 0;if(n.mode="hidden",!n.cues.length&&n.embedded)continue;if(n.mode=c,this._cuesByTrackId[n._id]&&!this._cuesByTrackId[n._id].loaded){for(var d=this._cuesByTrackId[n._id].cues;o=d.shift();)h(this.renderNatively,n,o);n.mode=c,this._cuesByTrackId[n._id].loaded=!0}T.call(this,n)}}this.renderNatively&&(this.textTrackChangeHandler=this.textTrackChangeHandler||function(){var e=this.video.textTracks,t=Object(u.l)(e,function(e){return(e.inuse||!e._id)&&v(e.kind)});if(!this._textTracks||function(e){if(e.length>this._textTracks.length)return!0;for(var t=0;t<e.length;t++){var r=e[t];if(!r._id||!this._tracksById[r._id])return!0}return!1}.call(this,t))return void this.setTextTracks(e);for(var r=-1,n=0;n<this._textTracks.length;n++)if("showing"===this._textTracks[n].mode){r=n;break}r!==this._currentTextTrackIndex&&this.setSubtitlesTrack(r+1)}.bind(this),this.addTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),(s.Browser.edge||s.Browser.firefox||s.Browser.safari)&&(this.addTrackHandler=this.addTrackHandler||function(){this.setTextTracks(this.video.textTracks)}.bind(this),this.addTracksListener(this.video.textTracks,"addtrack",this.addTrackHandler)));this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})},setupSideloadedTracks:function(e){if(!this.renderNatively)return;var t=e===this._itemTracks;t||Object(n.a)(this._itemTracks);if(this._itemTracks=e,!e)return;t||(this.disableTextTrack(),function(){if(!this._textTracks)return;var e=this._textTracks.filter(function(e){return e.embedded||"subs"===e.groupid});this._initTextTracks(),e.forEach(function(e){this._tracksById[e._id]=e}),this._textTracks=e}.call(this),this.addTextTracks(e))},setSubtitlesTrack:function(e){if(!this.renderNatively)return void(this.setCurrentSubtitleTrack&&this.setCurrentSubtitleTrack(e-1));if(!this._textTracks)return;0===e&&this._textTracks.forEach(function(e){e.mode=e.embedded?"hidden":"disabled"});if(this._currentTextTrackIndex===e-1)return;this.disableTextTrack(),this._currentTextTrackIndex=e-1,this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="showing");this.trigger("subtitlesTrackChanged",{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks})},textTrackChangeHandler:null,addTrackHandler:null,addCuesToTrack:function(e){var t=this._tracksById[e.name];if(!t)return;t.source=e.source;for(var r=e.captions||[],i=[],a=!1,s=0;s<r.length;s++){var c=r[s],u=e.name+"_"+c.begin+"_"+c.end;this._metaCuesByTextTime[u]||(this._metaCuesByTextTime[u]=c,i.push(c),a=!0)}a&&i.sort(function(e,t){return e.begin-t.begin});var o=Object(n.b)(i);Array.prototype.push.apply(t.data,o)},addCaptionsCue:function(e){if(!e.text||!e.begin||!e.end)return;var t,r=e.trackid.toString(),i=this._tracksById&&this._tracksById[r];i||(i={kind:"captions",_id:r,data:[]},this.addTextTracks([i]),this.trigger("subtitlesTracks",{tracks:this._textTracks}));e.useDTS&&(i.source||(i.source=e.source||"mpegts"));t=e.begin+"_"+e.text;var a=this._metaCuesByTextTime[t];if(!a){a={begin:e.begin,end:e.end,text:e.text},this._metaCuesByTextTime[t]=a;var s=Object(n.b)([a])[0];i.data.push(s)}},createCue:function(e,t,r){var n=window.VTTCue||window.TextTrackCue,i=Math.max(t||0,e+.25);return new n(e,i,r)},addVTTCue:function(e,t){this._tracksById||this._initTextTracks();var r=e.track?e.track:"native"+e.type,n=this._tracksById[r],i="captions"===e.type?"Unknown CC":"ID3 Metadata",a=e.cue;if(!n){var s={kind:e.type,_id:r,label:i,embedded:!0};n=g.call(this,s),this.renderNatively||"metadata"===n.kind?this.setTextTracks(this.video.textTracks):l.call(this,[n])}if(function(e,t,r){var n=e.kind;this._cachedVTTCues[e._id]||(this._cachedVTTCues[e._id]={});var i,a=this._cachedVTTCues[e._id];switch(n){case"captions":case"subtitles":i=r||Math.floor(20*t.startTime);var s="_"+t.line,c=Math.floor(20*t.endTime),u=a[i+s]||a[i+1+s]||a[i-1+s];return!(u&&Math.abs(u-c)<=1)&&(a[i+s]=c,!0);case"metadata":var o=t.data?new Uint8Array(t.data).join(""):t.text;return i=r||t.startTime+o,a[i]?!1:(a[i]=t.endTime,!0);default:return!1}}.call(this,n,a,t)){var c=this.renderNatively||"metadata"===n.kind;return c?h(c,n,a):n.data.push(a),a}return null},addVTTCuesToTrack:function(e,t){if(!this.renderNatively)return;var r,n=this._tracksById[e._id];if(!n)return this._cuesByTrackId||(this._cuesByTrackId={}),void(this._cuesByTrackId[e._id]={cues:t,loaded:!1});if(this._cuesByTrackId[e._id]&&this._cuesByTrackId[e._id].loaded)return;this._cuesByTrackId[e._id]={cues:t,loaded:!0};for(;r=t.shift();)h(this.renderNatively,n,r)},triggerActiveCues:function(e){var t=this;if(!e||!e.length)return void(this._activeCues=null);var r=this._activeCues||[],n=Array.prototype.filter.call(e,function(e){if(r.some(function(t){return n=t,(r=e).startTime===n.startTime&&r.endTime===n.endTime&&r.text===n.text&&r.data===n.data&&r.value===n.value;var r,n}))return!1;if(e.data||e.value)return!0;if(e.text){var n=JSON.parse(e.text),i=e.startTime,a={metadataTime:i,metadata:n};n.programDateTime&&(a.programDateTime=n.programDateTime),n.metadataType&&(a.metadataType=n.metadataType,delete n.metadataType),t.trigger(c.K,a)}return!1});if(n.length){var i=Object(a.a)(n),s=n[0].startTime;this.trigger(c.K,{metadataType:"id3",metadataTime:s,metadata:i})}this._activeCues=Array.prototype.slice.call(e)},renderNatively:!1};function d(e,t,r){e&&(e.removeEventListener?e.removeEventListener(t,r):e["on"+t]=null)}function l(e){var t=this;e&&(this._textTracks||this._initTextTracks(),e.forEach(function(e){if(!e.kind||v(e.kind)){var r=g.call(t,e);T.call(t,r),e.file&&(e.data=[],Object(n.c)(e,function(e){t.addVTTCuesToTrack(r,e)},function(e){t.trigger(c.ub,e)}))}}),this._textTracks&&this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks}))}function h(e,t,r){if(s.Browser.ie){var n=r;(e||"metadata"===t.kind)&&(n=new window.TextTrackCue(r.startTime,r.endTime,r.text)),function(e,t){var r=[],n=e.mode;e.mode="hidden";for(var i=e.cues,a=i.length-1;a>=0&&i[a].startTime>t.startTime;a--)r.unshift(i[a]),e.removeCue(i[a]);e.addCue(t),r.forEach(function(t){return e.addCue(t)}),e.mode=n}(t,n)}else t.addCue(r)}function f(e,t){t&&t.length&&Object(u.j)(t,function(t){if(!(s.Browser.ie&&e&&/^(native|subtitle|cc)/.test(t._id))){s.Browser.ie&&"disabled"===t.mode||(t.mode="disabled",t.mode="hidden");for(var r=t.cues.length;r--;)t.removeCue(t.cues[r]);t.embedded||(t.mode="disabled"),t.inuse=!1}})}function v(e){return"subtitles"===e||"captions"===e}function g(e){var t,r=Object(i.b)(e,this._unknownCount),n=r.label;if(this._unknownCount=r.unknownCount,this.renderNatively||"metadata"===e.kind){var a=this.video.textTracks;(t=Object(u.n)(a,{label:n}))||(t=this.video.addTextTrack(e.kind,n,e.language||"")),t.default=e.default,t.mode="disabled",t.inuse=!0}else(t=e).data=t.data||[];return t._id||(t._id=Object(i.a)(e,this._textTracks.length)),t}function T(e){this._textTracks.push(e),this._tracksById[e._id]=e}function k(e){this.triggerActiveCues(e.currentTarget.activeCues)}t.a=o},80:function(e,t,r){"use strict";function n(e){return e&&e.length?e.end(e.length-1):0}r.d(t,"a",function(){return n})},81:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return a});var n=r(10);function i(e){return window.WebGLRenderingContext&&e.some(function(e){return e.stereomode&&e.stereomode.length>0})}function a(e,t,i){var a=function(e){i.trigger("warning",e)};return r.e(7).then(function(n){var i=new(0,r(83).default)(e,t);e.addPlugin("vr",i),i.on("error",a)}.bind(null,r)).catch(Object(n.c)(301132)).catch(a)}},82:function(e,t,r){"use strict";function n(e){return{bitrate:e.bitrate,label:e.label,width:e.width,height:e.height}}r.d(t,"a",function(){return n})}}]);