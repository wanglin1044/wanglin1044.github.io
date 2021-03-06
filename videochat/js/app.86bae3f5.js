(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);h&&h(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={app:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=r;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"12ab":function(t,e,s){"use strict";var i=s("771d"),n=s.n(i);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],o=(s("5c0b"),s("2877")),c={},r=Object(o["a"])(c,n,a,!1,null,null,null),l=r.exports,h=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticStyle:{"text-align":"center"}},[t._v("视频聊天室")]),s("h3",[t._v("输入同样的房间名称即可发起聊天")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.roomid,expression:"roomid"}],class:t.roomReadonly?"is-disabled":"",attrs:{readonly:t.roomReadonly,type:"text",placeholder:"输入房间名称",id:"roomid"},domProps:{value:t.roomid},on:{input:function(e){e.target.composing||(t.roomid=e.target.value)}}}),s("div",{staticClass:"row1"},[s("button",{staticClass:"btn",class:t.btnEls.connect.disabled?"is-disabled":"",attrs:{id:"connect"},on:{click:t.joinRoom}},[t._v("加入")]),s("button",{staticClass:"btn",class:t.btnEls.disconnect.disabled?"is-disabled":"",attrs:{id:"disconnect",disabled:""},on:{click:t.closeWS}},[t._v("离开")])]),s("div",{staticClass:"row2"},[s("button",{staticClass:"btn launchBtn",class:t.btnEls.getAudio.disabled?"is-disabled":"",attrs:{id:"getAudio",disabled:""},on:{click:function(e){return t.launchChat("audio")}}},[t._v("发起语音聊天")]),s("button",{staticClass:"btn launchBtn",class:t.btnEls.getVideo.disabled?"is-disabled":"",attrs:{id:"getVideo",disabled:""},on:{click:function(e){return t.launchChat("video")}}},[t._v("发起视频聊天")]),s("button",{staticClass:"btn launchBtn",class:t.btnEls.getScreen.disabled?"is-disabled":"",attrs:{id:"getScreen",disabled:""},on:{click:function(e){return t.launchChat("screenshare")}}},[t._v("发起屏幕共享")])]),s("div",{staticClass:"row3"},[s("button",{staticClass:"btn",class:t.btnEls.closeChat.disabled?"is-disabled":"",attrs:{id:"closeChat",disabled:""},on:{click:t.closeChat}},[t._v("关闭当前通话")])]),s("div",{staticClass:"logbox"},[s("p",[s("span",[t._v("日志")]),s("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.logshow=!t.logshow}}},[t._v(t._s(t.logshow?"收起":"展开"))])]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.logVal,expression:"logVal"}],class:t.logshow?"logshow":"",attrs:{readonly:"",id:"logs"},domProps:{value:t.logVal},on:{input:function(e){e.target.composing||(t.logVal=e.target.value)}}})]),s("div",{staticClass:"audiobox"},[s("audio",{staticStyle:{display:"none"},attrs:{muted:"",src:"",controls:"",id:"audio"}}),s("LiZi",{ref:"audioLizi",attrs:{stream:t.audioStream}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"video"===t.subType,expression:"subType==='video'"}],staticClass:"videobox"},[s("div",{staticClass:"localbox",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"video-wrap"},[s("video",{attrs:{muted:"",src:"",id:"localVideo"},domProps:{muted:!0}})])]),t._m(0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"screenshare"===t.subType,expression:"subType==='screenshare'"}],staticClass:"screenshare"},[s("video",{attrs:{src:"",id:"screenVideo",controls:""}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.inviteDialog,expression:"inviteDialog"}],staticClass:"message-box__wrapper",staticStyle:{"z-index":"2010"}},[s("div",{staticClass:"message-box"},[s("div",{staticClass:"message-box__message"},[s("p",[t._v("是否接受"+t._s(t.inviteMsg))])]),s("div",{staticClass:"message-box__btns"},[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.cancelInvite}},[t._v("取消")]),s("button",{staticClass:"btn primary-btn",attrs:{type:"button"},on:{click:t.sureInvite}},[t._v("接受")])])])])])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remotebox"},[s("div",{staticClass:"video-wrap"},[s("video",{attrs:{src:"",id:"remoteVideo"}})])])}],f=(s("99af"),s("4160"),s("ac1f"),s("466d"),s("159b"),s("53ca")),g=(s("96cf"),s("1da1")),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"audio-lizi"},[s("canvas",{attrs:{id:"liziCanvas",width:"100%",height:"100%"}})])}],m=(s("cb29"),s("a630"),s("fb6a"),s("d3b7"),s("3ca3"),s("fb2c"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a"),s("72f7"),s("bee2")),b=s("d4ec"),y=(s("5cc6"),function(){function t(e){Object(b["a"])(this,t),this.isAnimate=!1,this.audio=document.getElementById("audio"),this.cxt=this.getAudioContext(),this.source=this.cxt.createMediaStreamSource(e),this.analyser=this.cxt.createAnalyser(),this.analyser.minDecibels=-200,this.analyser.maxDecibels=-50,this.analyser.fftSize=256,this.source.connect(this.analyser),this.analyser.connect(this.cxt.destination),this.canvas=document.getElementById("liziCanvas"),this.canvasCXT=this.canvas.getContext("2d"),this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight}return Object(m["a"])(t,[{key:"getAudioContext",value:function(){var t=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;return new t}},{key:"play",value:function(){this.audio.play()}},{key:"pause",value:function(){this.audio.pause()}},{key:"getArr",value:function(){var t=new Uint8Array(this.analyser.frequencyBinCount);return this.analyser.getByteFrequencyData(t),t}}]),t}()),w={stream:{},text:"语音中",size:30,color:"#fff",offset:1,gridX:1,gridY:1,r:1},C=function t(e,s,i,n,a){Object(b["a"])(this,t),e=e+Math.random()*a-.5*a,s=s+Math.random()*a-.5*a,this.x=this.cx=e,this.y=this.cy=s,this.r=i,this.liziAudio=null,this.color=n,this.size=200},x=function t(e){Object(b["a"])(this,t),this.character=e,this.width=0,this.size=200,this.offset=10,this.particles=[]},S=function(){function t(e,s){Object(b["a"])(this,t),Object.assign(this,w,s),this.canvas=document.getElementById(e),this.cxt=this.canvas.getContext("2d"),this.placement=[],this.array=[],this.length=0,this.index=0,this.isAnimate=!1,this.init()}return Object(m["a"])(t,[{key:"changeSong",value:function(){this.liziAudio=null,this.liziAudio=new y(this.stream),this.setText()}},{key:"init",value:function(){this.getSize(),this.changeSong(),this.setText()}},{key:"getSize",value:function(){this.width=this.canvas.width=document.body.clientWidth,this.height=this.canvas.height=document.body.clientHeight}},{key:"destory",value:function(){this.cxt.clearRect(0,0,this.width,this.height),this.placement.length=0,this.stop()}},{key:"setText",value:function(){var t=this;this.placement.length=0,Array.from(this.text,(function(e){var s=new x(e),i=t.getPartical(e);s.particles=i.particles,s.width=i.width,t.placement.push(s)})),this.length=0,Array.from(this.placement,(function(e){t.length+=~~e.width})),console.log(this.text,this.length,this.placement)}},{key:"getPartical",value:function(t){this.cxt.textAlign="center",this.cxt.font="normal ".concat(this.size,"px arial"),this.cxt.fillStyle=this.color,this.cxt.fillText(t,this.x||this.width/2,this.y||this.height/2+50);for(var e=this.cxt.measureText(t).width,s=this.cxt.getImageData(0,0,this.width,this.height),i=new Uint32Array(s.data.buffer),n=[],a=0;a<this.height;a+=this.gridY)for(var o=0;o<this.width;o+=this.gridX)if(i[a*this.width+o]){var c=new C(o,a,this.r,this.color,this.offset);n.push(c)}return this.cxt.clearRect(0,0,this.width,this.height),{width:e,particles:n}}},{key:"start",value:function(){var t=this;this.isAnimate=!0,this.cxt.shadowColor="#fff",this.cxt.shadowBlur=3;var e=function e(){if(!t.isAnimate)return!1;t.render(),t.renderFrequency(),t.update(),requestAnimationFrame(e)};requestAnimationFrame(e)}},{key:"toggle",value:function(){this.isAnimate?this.stop():this.start()}},{key:"stop",value:function(){this.isAnimate=!1,this.cxt.clearRect(0,0,this.width,this.height)}},{key:"render",value:function(){var t=this;this.cxt.clearRect(0,0,this.width,this.height);var e=-.5*this.length;Array.from(this.placement,(function(s){var i=~~s.width;s.particles.length;t.cxt.strokeStyle=t.color,t.cxt.lineWidth=.5,Array.from(s.particles,(function(s,n){var a=s.x+e+.5*i,o=s.y;t.cxt.fillStyle=t.color,t.cxt.beginPath(),t.cxt.arc(s.x+e+.5*i,s.y,s.r,0,2*Math.PI,!0),t.cxt.closePath(),t.cxt.fill(),a,o})),e+=i}))}},{key:"renderFrequency",value:function(){this.array=this.liziAudio.getArr(),this.array=this.array.slice(0,Math.round(2/3*this.array.length));for(var t=450,e=this.width/2-t/2,s=this.height/2-this.size/2,i=2,n=this.array.length,a=t/n-i,o=Math.round(this.array.length/n),c=50,r=e-120,l=e+t+120,h=this.height-s-30,d=0;d<n;d++){var u=this.array[d*o]/255*this.array[d*o]*Math.sin(Math.PI/90*(90/n*d))/4+2;this.cxt.fillRect(d*(i+a)+e,this.height-u-s,a,u),u=-u,this.cxt.fillRect(d*(i+a)+e,this.height-u-s+1.5*this.size,a,u),d%2?(this.cxt.save(),this.cxt.translate(r,h+c),this.cxt.rotate(Math.PI/180*(180/n*d-180)),this.cxt.translate(-r,-h+c),this.cxt.fillRect(r,h-u,a,u),this.cxt.restore()):(this.cxt.save(),this.cxt.translate(r,h+c),this.cxt.rotate(Math.PI/180*(180/n*d)),this.cxt.translate(-r,-h+c),this.cxt.fillRect(r,h-u,a,u),this.cxt.restore()),d%2?(this.cxt.save(),this.cxt.translate(l,h+c),this.cxt.rotate(Math.PI/180*(180/n*d-180)),this.cxt.translate(-l,-h+c),this.cxt.fillRect(l,h-u,a,u),this.cxt.restore()):(this.cxt.save(),this.cxt.translate(l,h+c),this.cxt.rotate(Math.PI/180*(180/n*d)),this.cxt.translate(-l,-h+c),this.cxt.fillRect(l,h-u,a,u),this.cxt.restore())}}},{key:"update",value:function(){for(var t=this.array.length,e=Math.round(this.array.length/t),s=0,i=0;i<t;i++)s+=this.array[i*e];var n=s/t;Array.from(this.placement,(function(t){Array.from(t.particles,(function(t){t.x=n/100*2-2+t.cx,t.y=n/100*2-2+t.cy,t.r=n/100*.5}))}))}}]),t}(),P={props:["stream"],data:function(){return{myCanvas:""}},watch:{stream:function(t){this.myCanvas=new S("liziCanvas",{stream:this.stream})}},mounted:function(){},methods:{start:function(){console.log("init",this,this.myCanvas)},play:function(){console.log("start"),this.myCanvas.start()},pause:function(){console.log("stop"),this.myCanvas.stop()}}},k=P,E=(s("12ab"),Object(o["a"])(k,p,v,!1,null,null,null)),A=E.exports,O={components:{LiZi:A},data:function(){return{logshow:!0,roomid:"",roomPerson:0,logVal:"",user:"",subType:"",isWsConnect:!1,isChat:!1,roomReadonly:!1,ws:"",serverConfig:{iceServers:[{urls:["stun:stun.xten.com"]}]},audio:"",localVideo:"",localVideoShow:!1,remoteVideo:"",remoteVideoShow:!1,remoteAudioShow:!1,screenVideo:"",rtcPC:"",btnEls:{getAudio:"",getVideo:"",getScreen:"",connect:"",disconnect:"",closeChat:""},inviteMsg:"",inviteDialog:!1,audioStream:{}}},watch:{isWsConnect:function(t,e){t?(this.roomReadonly=!0,this.btnEls.connect.disabled=!0,this.btnEls.disconnect.disabled=!1):(this.roomReadonly=!1,this.btnEls.connect.disabled=!1,this.btnEls.disconnect.disabled=!0,this.btnEls.getAudio.disabled=!0,this.btnEls.getVideo.disabled=!0,this.btnEls.getScreen.disabled=!0)},isChat:function(t){t?(this.btnEls.closeChat.disabled=!1,this.btnEls.getAudio.disabled=!0,this.btnEls.getVideo.disabled=!0,this.btnEls.getScreen.disabled=!0):(this.btnEls.closeChat.disabled=!0,this.isWsConnect&&(this.btnEls.getVideo.disabled=!1,this.btnEls.getScreen.disabled=!1,this.btnEls.getAudio.disabled=!1))},roomPerson:function(t){2==t?(this.btnEls.getAudio.disabled=!1,this.btnEls.getVideo.disabled=!1,this.btnEls.getScreen.disabled=!1):(this.btnEls.getAudio.disabled=!0,this.btnEls.getVideo.disabled=!0,this.btnEls.getScreen.disabled=!0)}},mounted:function(){var t=this;this.initRtcPC(),this.localVideo=document.getElementById("localVideo"),this.remoteVideo=document.getElementById("remoteVideo"),this.screenVideo=document.getElementById("screenVideo"),this.audio=document.querySelector("audio"),this.audio.onpause=function(){t.$refs.audioLizi.pause()},this.audio.onplay=function(){t.$refs.audioLizi.play()},this.remoteVideo.onloadeddata=function(){t.remoteVideo.play()},this.localVideo.onloadeddata=function(){t.localVideo.play()},this.screenVideo.onloadeddata=function(){t.screenVideo.play()},this.btnEls={getAudio:document.getElementById("getAudio"),getVideo:document.getElementById("getVideo"),getScreen:document.getElementById("getScreen"),connect:document.getElementById("connect"),disconnect:document.getElementById("disconnect"),closeChat:document.getElementById("closeChat")}},methods:{closeChat:function(){this.closeRtcPC(),this.updateLog("关闭聊天"),this.isChat=!1,this.wsSendMessage("closePhone","挂掉了电话"),"audio"==this.subType?this.audio.pause():"video"==this.subType?(this.localVideo.pause(),this.remoteVideo.pause()):"screenshare"==this.subType&&this.screenVideo.pause(),this.subType=""},handleClosePhone:function(){this.isChat&&this.closeChat()},initRtcPC:function(){var t=this;console.log("init rtc"),this.closeRtcPC(),this.rtcPC=new RTCPeerConnection(this.serverConfig),this.rtcPC.addEventListener("icecandidate",(function(e){return t.onIceCandidate(e)})),this.rtcPC.addEventListener("iceconnectionstatechange",(function(e){return t.onIceStateChange(t.rtcPC,e)})),this.rtcPC.onaddstream=function(t){console.log("addStream")};var e=this;this.rtcPC.ontrack=function(t){console.log("ontrack"),e.remoteStream=t.streams,"audio"===e.subType?e.audio.srcObject!=t.streams[0]&&(e.audio.srcObject=t.streams[0],e.audio.pause(),e.audio.play()):"video"===e.subType?e.remoteVideo.srcObject!=t.streams[0]&&(e.remoteVideo.srcObject=t.streams[0]):"screenshare"===e.subType&&e.screenVideo.srcObject!=t.streams[0]&&(e.screenVideo.srcObject=t.streams[0])}},closeRtcPC:function(){var t=this;this.rtcPC&&(console.log("close rtc"),this.rtcPC.getLocalStreams().forEach((function(e){e.getTracks().forEach((function(t){return t.stop()})),console.log("getLocalStreams and stop",e),t.rtcPC.removeStream(e)})),this.rtcPC.getRemoteStreams().forEach((function(e){e.getTracks().forEach((function(t){return t.stop()})),console.log("getRemoteStreams stop",e),t.rtcPC.removeStream(e)})),this.rtcPC.close(),this.rtcPC="")},updateLog:function(t,e){this.logVal+=e||" "+t+"\n"},joinRoom:function(){""!=this.roomid?this.connectWs():alert("不能为空")},joinSuccess:function(t){this.user=t.user,this.isWsConnect=!0},connectWs:function(){var t=this;this.ws=new WebSocket("wss://txc.wlin.club:8001"),this.ws.onopen=function(e){t.wsSendMessage("join","大家好")},this.ws.onclose=function(e){t.updateLog("离开房间,连接关闭"),t.isWsConnect=!1},this.ws.onerror=function(e){t.updateLog("连接出错",JSON.stringify(e)),t.isWsConnect=!1},this.ws.onmessage=function(e){var s="";try{s=JSON.parse(e.data)}catch(i){s=e.data}t.handleWsMessage(s)}},wsSendMessage:function(t,e){var s=this;return Object(g["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e&&"object"==Object(f["a"])(e)&&(e=JSON.stringify(e)),"invite"==t&&console.log("sendmessage inite msg",e),i.next=4,s.ws.send(JSON.stringify({roomid:s.roomid,user:s.user,type:t,subType:s.subType,msg:e}));case 4:case"end":return i.stop()}}),i)})))()},handleWsMessage:function(t){switch(t.type){case"broadcast":this.judgePeople(t.msg),this.updateLog(t.msg);break;case"invite":this.handleInvite(t);break;case"acceptInvite":this.acceptInvite(t);break;case"refuseInvite":this.refuseInvite(t);break;case"offer":this.recOffer(t);break;case"answer":this.getResponse(t.msg);break;case"candidate":this.addIceCandidate(t.msg);break;case"closePhone":this.handleClosePhone(t.msg);break;case"joinSuccess":this.joinSuccess(t);break;case"joinFail":this.isWsConnect=!1,this.updateLog(t.msg);break;default:this.updateLog(t.msg,"对方")}},judgePeople:function(t){var e=t.match(/当前房间有(\d)人/);e&&e[1]&&(this.roomPerson=e[1]-0)},judgeState:function(){return""!==this.roomid||(alert("请先加入房间"),!1)},launchChat:function(t){if(this.judgeState()){this.closeRtcPC(),this.subType=t;var e="";"audio"===t?(this.updateLog("向对方发出语音聊天邀请"),e="对方邀请您语音聊天"):"video"===t?(this.updateLog("向对方发出视频聊天邀请"),e="对方邀请您视频聊天"):"screenshare"===t&&(this.updateLog("向对方发出观看屏幕共享邀请"),e="对方邀请您观看屏幕共享"),this.wsSendMessage("invite",e)}},handleInvite:function(t){this.updateLog(t.msg),console.log("handleInvie, msg",t.msg),this.subType=t.subType,this.inviteMsg=t.msg,this.inviteDialog=!0},cancelInvite:function(){this.wsSendMessage("refuseInvite","拒绝邀请"),this.updateLog("拒绝对方邀请"),this.inviteDialog=!1,this.isChat=!1},sureInvite:function(){this.initRtcPC(),this.wsSendMessage("acceptInvite","接受邀请"),this.updateLog("接受对方邀请, 请允许打开相关设备"),this.inviteDialog=!1,this.isChat=!0},acceptInvite:function(t){this.isChat=!0,this.updateLog("对方接受邀请"),this.initRtcPC(),this.openLocalDevice(t.subType,"createOffer")},refuseInvite:function(t){this.isChat=!1,this.updateLog("对方拒绝邀请")},openLocalDevice:function(t,e,s){console.log("openLocalDevice",t),"audio"===t?(this.updateLog("请允许网页打开本地麦克风"),this.openAudioDevice(e,s)):"video"===t?(this.updateLog("请允许网页打开本地摄像头和麦克风"),this.openVideoDevice(e,s)):"screenshare"===t&&("createAnswer"===e?this.createAnswer(s):(this.updateLog("请选择共享窗口"),this.openDisplayDevice(e,s)))},openAudioDevice:function(t,e){var s=this;navigator.getUserMedia({audio:!0},(function(i){console.log("获取到本地音频流"),s.audioStream=i,i.getTracks().forEach((function(t){return s.rtcPC.addTrack(t,i)})),console.log("openAudioDevice, add track to pc"),"createOffer"===t?s.createOffer():"createAnswer"===t&&s.createAnswer(e)}),(function(t){console.log("opendevice error",t),s.wsSendMessage("other",t)}))},openVideoDevice:function(t,e){var s=this;navigator.getUserMedia({video:!0,audio:!0},(function(i){console.log("获取到本地视频流"),s.localVideo.srcObject=i,i.getTracks().forEach((function(t){return s.rtcPC.addTrack(t,i)})),console.log("openVideoDevice, add track to pc"),"createOffer"===t?s.createOffer():"createAnswer"===t&&s.createAnswer(e)}),(function(t){console.log("opendevice error",t),s.wsSendMessage("other",t)}))},openDisplayDevice:function(t,e){var s=this;return Object(g["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});case 3:n=i.sent,console.log("获取到本地共享窗口流"),s.screenVideo.srcObject=n,n.getTracks().forEach((function(t){return s.rtcPC.addTrack(t,n)})),console.log("openDisplayDevices, add track to pc"),"createOffer"===t?s.createOffer():"createAnswer"===t&&s.createAnswer(e),i.next=15;break;case 11:i.prev=11,i.t0=i["catch"](0),console.log("opendevice error",i.t0),s.wsSendMessage("other",i.t0);case 15:case"end":return i.stop()}}),i,null,[[0,11]])})))()},createOffer:function(){var t=this;this.rtcPC.createOffer((function(e){t.rtcPC.setLocalDescription(new RTCSessionDescription(e),(function(){console.log("createoffer"),t.wsSendMessage("offer",e)}),(function(t){console.log("setLocalDescription error",t)}))}),(function(t){console.log("createOffer error",t)}))},createAnswer:function(t){var e=this;this.rtcPC.setRemoteDescription(new RTCSessionDescription(t),(function(){e.rtcPC.createAnswer((function(t){e.rtcPC.setLocalDescription(new RTCSessionDescription(t),(function(){e.wsSendMessage("answer",t)}),(function(t){return console.log("setLocalDescription",t)}))}),(function(t){return console.log("createAnswer",t)}))}),(function(t){return console.log("setRemoteDescription",t)}))},getResponse:function(t){console.log("recAnswer",Object(f["a"])(t)),t=JSON.parse(t),this.rtcPC.setRemoteDescription(new RTCSessionDescription(t),(function(){}),(function(t){}))},recOffer:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log("recoffer",Object(f["a"])(t.msg)),i="object"===Object(f["a"])(t.msg)?t.msg:JSON.parse(t.msg),e.openLocalDevice(t.subType,"createAnswer",i);case 3:case"end":return s.stop()}}),s)})))()},onIceCandidate:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log("onIceCandidate");try{t.candidate&&e.wsSendMessage("candidate",t.candidate)}catch(i){console.log("onAddIceCandidateError",i)}case 2:case"end":return s.stop()}}),s)})))()},addIceCandidate:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t=JSON.parse(t),i=new RTCIceCandidate(t),s.next=5,e.rtcPC.addIceCandidate(i);case 5:s.next=9;break;case 7:s.prev=7,s.t0=s["catch"](0);case 9:console.log("reciver candidate and add address",i.address),/^[\d]{1,3}/.test(i.address)&&e.updateLog("对方address:"+i.address);case 11:case"end":return s.stop()}}),s,null,[[0,7]])})))()},onIceStateChange:function(t,e){t&&(console.log("".concat(t," ICE state: ").concat(t.iceConnectionState)),console.log("ICE state change event: ",e),"disconnected"===t.iceConnectionState&&(this.updateLog("对方挂掉了电话"),this.isChat&&this.closeChat()))},closeWS:function(){this.rtcPC&&this.closeRtcPC(),this.ws&&(this.wsSendMessage("leave","对方挂断了电话"),this.ws.close(),this.ws="",this.isWsConnect=!1,this.isChat=!1,this.roomPerson>=1&&this.roomPerson--)}},beforeDestroy:function(){this.isChat&&this.wsSendMessage("closePhone","挂掉了电话"),this.closeWS()}},j=O,R=(s("7a24"),Object(o["a"])(j,d,u,!1,null,null,null)),V=R.exports;i["a"].use(h["a"]);var I=[{path:"/",name:"Chat",component:V},{path:"*",redirect:"/"}],T=new h["a"]({baseUrl:"videochat",routes:I}),D=T;i["a"].config.productionTip=!1,new i["a"]({router:D,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("9c0c"),n=s.n(i);n.a},"771d":function(t,e,s){},"7a24":function(t,e,s){"use strict";var i=s("c250"),n=s.n(i);n.a},"9c0c":function(t,e,s){},c250:function(t,e,s){}});
//# sourceMappingURL=app.86bae3f5.js.map