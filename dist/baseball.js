!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i,o={all:i=i||new Map,on:function(e,t){var n=i.get(e);n?n.push(t):i.set(e,[t])},off:function(e,t){var n=i.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):i.set(e,[]))},emit:function(e,t){var n=i.get(e);n&&n.slice().map((function(e){e(t)})),(n=i.get("*"))&&n.slice().map((function(n){n(e,t)}))}};function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=null,this.count=t.scoreBoard.getCount,o.on("*",(function(e,t){return n.handleEmittedEvent(e,t)}))}var t,n,i;return t=e,(n=[{key:"handleEmittedEvent",value:function(e,t){switch(e){case"announce:commentary":console.log("Announcer: ".concat(t));break;case"announce:hit":this.hit(t);break;case"announce:play":var n=t.hit,i=t.play;console.log("Announcer: The ".concat(n," was ").concat(i,". Out ").concat(this.count.outs,"!"));break;case"announce:teams":var o=t.visitor,r=t.home;alert("The ".concat(o," are going against the ").concat(r,"!"))}}},{key:"hit",value:function(e){switch(e){case"bunt":console.log("Announcer: Player bunts!");break;case"double":console.log("Announcer: Player hit a double.");break;case"fly ball":console.log("Announcer: It's a fly ball!");break;case"ground ball":console.log("Announcer: Player hit a grounder.");break;case"home run":console.log("Announcer: It's going! It's going! It's gone!!! It's a home run!!!");break;case"line drive":console.log("Announcer: It's a line drive!");break;case"single":console.log("Announcer: Player hit a single.");break;case"triple":console.log("Announcer: Player hit a triple.")}}}])&&r(t.prototype,n),i&&r(t,i),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scoreBoard=t}var t,n,i;return t=e,(n=[{key:"top",value:function(){console.log("[[ Inning ".concat(this.scoreBoard.currentInning," (top) ]]")),this.scoreBoard.setAtBat="visitor",this.atBat(),3===this.scoreBoard.getOutCount&&(this.scoreBoard.clearCount("outs"),this.bottom())}},{key:"bottom",value:function(){console.log("[[ Inning ".concat(this.scoreBoard.currentInning," (bottom) ]]")),this.scoreBoard.setAtBat="home",this.atBat(),3===this.scoreBoard.getOutCount&&o.emit("inning:end")}},{key:"atBat",value:function(){console.log("new batter"),this.scoreBoard.clearCount("balls"),this.scoreBoard.clearCount("strikes");do{o.emit("pitcher:pitch"),this.scoreBoard.getOutCount<3&&this.atBat()}while(this.scoreBoard.getOutCount<3)}}])&&s(t.prototype,n),i&&s(t,i),e}();function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.home={name:t,score:0},this.visitor={name:n,score:0},this.currentInning=0,this.currentTeamAtBat=null,this.count={balls:0,strikes:0,outs:0},this.setupScoreboard(),o.on("*",(function(e,t){return i.handleEmittedEvent(e,t)}))}var t,n,i;return t=e,(n=[{key:"handleEmittedEvent",value:function(e,t){switch(e){case"inning:end":this.clearCount("outs"),this.currentInning<9&&this.incrementInning();break;case"runner:scores":this.incrementScore()}}},{key:"setupScoreboard",value:function(){var e={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};this[this.visitor.name]=Object.assign({},e),this[this.home.name]=Object.assign({},e)}},{key:"incrementInning",value:function(){this.currentInning++,o.emit("inning:new")}},{key:"incrementCount",value:function(e){this.count[e]++}},{key:"clearCount",value:function(e){this.count[e]=0}},{key:"clearAllCounts",value:function(){var e=this;Object.keys(this.count).forEach((function(t){e.count[t]=0}))}},{key:"incrementScore",value:function(){var e=this.currentTeamAtBat,t=this[e].name;this[e].score++,this[t][this.currentInning]++}},{key:"setFinalScore",value:function(){this[this.home.name].final=this.home.score,this[this.visitor.name].final=this.visitor.score,console.table(this.getScoreboard)}},{key:"getCount",get:function(){return this.count}},{key:"getBallCount",get:function(){return this.count.balls}},{key:"getStrikeCount",get:function(){return this.count.strikes}},{key:"getOutCount",get:function(){return this.count.outs}},{key:"getScoreboard",get:function(){var e;return u(e={},this.visitor.name,this[this.visitor.name]),u(e,this.home.name,this[this.home.name]),e}},{key:"setCurrentInning",set:function(e){this.currentInning=e}},{key:"setAtBat",set:function(e){this.currentTeamAtBat=e}}])&&l(t.prototype,n),i&&l(t,i),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var b=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=null,this.count=t,o.on("*",(function(e,t){return n.handleEmittedEvent(e,t)}))}var t,n,i;return t=e,(n=[{key:"handleEmittedEvent",value:function(e,t){switch(e){case"pitch:made":this.callPitch(t)}}},{key:"callPitch",value:function(e){switch(e){case"ball":4===this.count.balls?console.log("Umpire: Ball four! Take your base."):console.log("Umpire: ball!");break;case"foul ball":console.log("Umpire: Foul ball!");break;case"hit by pitch":console.log("Umpire: Batter hit by pitch. Take your base!");break;case"strike while looking":case"strike while swinging":3!==this.count.strikes?console.log("Umpire: Strike ".concat(this.count.strikes,"!")):console.log("Umpire: Strike 3! You're out!")}}}])&&f(t.prototype,n),i&&f(t,i),e}();function g(e){return Math.floor(Math.random()*Math.floor(e))}function m(e){return e[g(e.length)]}var d=["changeup","curveball","cutter","fastball","sinker","slider"],v=["bunt","double","fly ball","ground ball","home run","line drive","single","triple"],y=["ball","foul ball","hit","hit by pitch","strike while looking","strike while swinging"];function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p,w=function(){function e(t,n){var i,r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.home={name:t,score:0},this.visitor={name:n,score:0},this.scoreBoard=new h(t,n),this.announcer=new a(this),this.umpire=(i=this.scoreBoard.getCount,new b(i)),this.bases=[],this.inning=null,o.on("*",(function(e,t){return r.handleEmittedEvent(e,t)}))}var t,n,i;return t=e,(n=[{key:"handleEmittedEvent",value:function(e,t){switch(e){case"inning:new":this.inning=new c(this.scoreBoard),this.inning.top();break;case"pitcher:pitch":console.log("throw pitch event"),this.throwPitch()}}},{key:"start",value:function(){o.emit("announce:teams",{visitor:this.visitor.name,home:this.home.name}),this.scoreBoard.setCurrentInning=1,this.bases.length=3,this.bases.fill(void 0),this.inning=new c(this.scoreBoard),this.inning.top()}},{key:"end",value:function(){this.scoreBoard.setFinalScore()}},{key:"throwPitch",value:function(){var e=m(d);this.batting(e)}},{key:"batting",value:function(e){var t=m(y);switch(t){case"ball":this.scoreBoard.incrementCount("balls"),o.emit("pitch:made",t),4===this.scoreBoard.getBallCount?this.advanceRunners(1):this.throwPitch();break;case"foul ball":o.emit("pitch:made",t),this.scoreBoard.getStrikeCount<2&&this.scoreBoard.incrementCount("strikes"),this.throwPitch();break;case"hit":this.handleHit();break;case"hit by pitch":o.emit("pitch:made",t),this.advanceRunners(1);break;case"strike while looking":case"strike while swinging":this.scoreBoard.incrementCount("strikes"),o.emit("pitch:made",t),3!==this.scoreBoard.getStrikeCount?this.throwPitch():this.scoreBoard.incrementCount("outs")}}},{key:"handleHit",value:function(){var e=m(v);switch(o.emit("announce:hit",e),e){case"bunt":this.fielding(e,1);break;case"double":this.advanceRunners(2);break;case"fly ball":case"ground ball":this.fielding(e,1);break;case"home run":this.advanceRunners(4);break;case"line drive":this.fielding(e,1);break;case"single":this.advanceRunners(1);break;case"triple":this.advanceRunners(3)}}},{key:"fielding",value:function(e,t){var n,i=0===g(2)?"out":"in";switch(e){case"bunt":case"ground ball":n="fielded";break;case"fly ball":case"line drive":n="caught"}"out"===i?(this.scoreBoard.incrementCount("outs"),o.emit("announce:play",{hit:e,play:n})):this.advanceRunners(t)}},{key:"advanceRunners",value:function(e){console.log("runners advance ".concat(e," ").concat(1===e?"base":"bases"));for(var t=0;t<e;t++)this.bases.unshift(0===t?"runner":void 0),this.watchHomePlate(this.bases.pop());this.bases.every((function(e){return"string"==typeof e}))&&o.emit("announce:commentary","The bases are loaded!"),console.log(this.bases)}},{key:"watchHomePlate",value:function(e){void 0!==e&&o.emit("runner:scores")}},{key:"getTeamNames",get:function(){return{visitor:this.visitor.name,home:this.home.name}}}])&&k(t.prototype,n),i&&k(t,i),e}();p="Baseball",console.log("hello from ".concat(p));var B,C,P=(B=window.prompt("Home team name?"),C=window.prompt("Visiting team name?"),new w(B,C));P.start(),P.end()}]);