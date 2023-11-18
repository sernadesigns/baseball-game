!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,i={all:o=o||new Map,on:function(e,t){var n=o.get(e);n?n.push(t):o.set(e,[t])},off:function(e,t){var n=o.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):o.set(e,[]))},emit:function(e,t){var n=o.get(e);n&&n.slice().map((function(e){e(t)})),(n=o.get("*"))&&n.slice().map((function(n){n(e,t)}))}};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=null,this.count=t.scoreBoard.getCount,i.on("*",(function(e,t){return n.handleEmittedEvent(e,t)}))}var t,n,o;return t=e,(n=[{key:"handleEmittedEvent",value:function(e,t){switch(e){case"announce:commentary":console.log("Announcer: ".concat(t));break;case"announce:hit":this.hit(t);break;case"announce:play":var n=t.hit,o=t.play;console.log("Announcer: The ".concat(n," was ").concat(o,". Out ").concat(this.count.outs,"!"));break;case"announce:teams":var i=t.visitor,r=t.home;alert("The ".concat(i," are going against the ").concat(r,"!"))}}},{key:"hit",value:function(e){switch(e){case"bunt":console.log("Announcer: Player bunts!");break;case"double":console.log("Announcer: Player hit a double.");break;case"fly ball":console.log("Announcer: It's a fly ball!");break;case"ground ball":console.log("Announcer: Player hit a grounder.");break;case"home run":console.log("Announcer: It's going! It's going! It's gone!!! It's a home run!!!");break;case"line drive":console.log("Announcer: It's a line drive!");break;case"single":console.log("Announcer: Player hit a single.");break;case"triple":console.log("Announcer: Player hit a triple.")}}}])&&r(t.prototype,n),o&&r(t,o),e}();function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.home={name:t,score:0},this.visitor={name:n,score:0},this.currentInning=0,this.currentTeamAtBat=null,this.count={balls:0,strikes:0,outs:0},this.setupScoreboard(),i.on("*",(function(e,t){return o.handleEmittedEvent(e,t)}))}var t,n,o;return t=e,(n=[{key:"handleEmittedEvent",value:function(e,t){switch(e){case"runner:scores":this.incrementScore()}}},{key:"setupScoreboard",value:function(){var e={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};this[this.visitor.name]=Object.assign({},e),this[this.home.name]=Object.assign({},e)}},{key:"incrementInning",value:function(){this.currentInning++}},{key:"incrementCount",value:function(e){this.count[e]++}},{key:"clearCount",value:function(e){this.count[e]=0}},{key:"clearAllCounts",value:function(){var e=this;Object.keys(this.count).forEach((function(t){e.count[t]=0}))}},{key:"incrementScore",value:function(){var e=this.currentTeamAtBat,t=this[e].name;this[e].score++,this[t][this.currentInning]++}},{key:"setFinalScore",value:function(){this[this.home.name].final=this.home.score,this[this.visitor.name].final=this.visitor.score,console.table(this.getScoreboard)}},{key:"getCount",get:function(){return this.count}},{key:"getBallCount",get:function(){return this.count.balls}},{key:"getStrikeCount",get:function(){return this.count.strikes}},{key:"getOutCount",get:function(){return this.count.outs}},{key:"getScoreboard",get:function(){var e;return s(e={},this.visitor.name,this[this.visitor.name]),s(e,this.home.name,this[this.home.name]),e}},{key:"setCurrentInning",set:function(e){this.currentInning=e}},{key:"setAtBat",set:function(e){this.currentTeamAtBat=e}}])&&c(t.prototype,n),o&&c(t,o),e}();function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=null,this.count=t,i.on("*",(function(e,t){return n.handleEmittedEvent(e,t)}))}var t,n,o;return t=e,(n=[{key:"handleEmittedEvent",value:function(e,t){switch(e){case"pitch:made":this.callPitch(t)}}},{key:"callPitch",value:function(e){switch(e){case"ball":4===this.count.balls?console.log("Umpire: Ball four! Take your base."):console.log("Umpire: ball!");break;case"foul ball":console.log("Umpire: Foul ball!");break;case"hit by pitch":console.log("Umpire: Batter hit by pitch. Take your base!");break;case"strike while looking":case"strike while swinging":3!==this.count.strikes?console.log("Umpire: Strike ".concat(this.count.strikes,"!")):console.log("Umpire: Strike 3! You're out!")}}}])&&l(t.prototype,n),o&&l(t,o),e}();function f(e){return Math.floor(Math.random()*Math.floor(e))}function b(e){return e[f(e.length)]}var g=["changeup","curveball","cutter","fastball","sinker","slider"],m=["bunt","double","fly ball","ground ball","home run","line drive","single","triple"],d=["ball","foul ball","hit","hit by pitch","strike while looking","strike while swinging"];function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y,k=function(){function e(t,n){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.home={name:t,score:0},this.visitor={name:n,score:0},this.scoreBoard=new u(t,n),this.announcer=new a(this),this.umpire=(o=this.scoreBoard.getCount,new h(o)),this.bases=[],i.on("announcement",(function(e){return console.log("announcement",e)}))}var t,n,o;return t=e,(n=[{key:"start",value:function(){i.emit("announce:teams",{visitor:this.visitor.name,home:this.home.name}),this.scoreBoard.setCurrentInning=1,this.bases.length=3,this.bases.fill(void 0),this.topInning()}},{key:"end",value:function(){this.scoreBoard.setFinalScore()}},{key:"topInning",value:function(){console.log("[[ Inning ".concat(this.scoreBoard.currentInning," (top) ]]")),this.scoreBoard.setAtBat="visitor",this.atBat(),3===this.scoreBoard.getOutCount&&(this.scoreBoard.clearCount("outs"),this.bottomInning())}},{key:"bottomInning",value:function(){console.log("[[ Inning ".concat(this.scoreBoard.currentInning," (bottom) ]]")),this.scoreBoard.setAtBat="home",this.atBat(),3===this.scoreBoard.getOutCount&&(this.scoreBoard.clearCount("outs"),this.scoreBoard.currentInning<9&&(this.scoreBoard.incrementInning(),this.topInning()))}},{key:"atBat",value:function(){console.log("new batter"),this.scoreBoard.clearCount("balls"),this.scoreBoard.clearCount("strikes");do{this.throwPitch(),this.scoreBoard.getOutCount<3&&this.atBat()}while(this.scoreBoard.getOutCount<3)}},{key:"throwPitch",value:function(){var e=b(g);this.batting(e)}},{key:"batting",value:function(e){var t=b(d);switch(t){case"ball":this.scoreBoard.incrementCount("balls"),i.emit("pitch:made",t),4===this.scoreBoard.getBallCount?this.advanceRunners(1):this.throwPitch();break;case"foul ball":i.emit("pitch:made",t),this.scoreBoard.getStrikeCount<2&&this.scoreBoard.incrementCount("strikes"),this.throwPitch();break;case"hit":this.handleHit();break;case"hit by pitch":i.emit("pitch:made",t),this.advanceRunners(1);break;case"strike while looking":case"strike while swinging":this.scoreBoard.incrementCount("strikes"),i.emit("pitch:made",t),3!==this.scoreBoard.getStrikeCount?this.throwPitch():this.scoreBoard.incrementCount("outs")}}},{key:"handleHit",value:function(){var e=b(m);switch(i.emit("announce:hit",e),e){case"bunt":this.fielding(e,1);break;case"double":this.advanceRunners(2);break;case"fly ball":case"ground ball":this.fielding(e,1);break;case"home run":this.advanceRunners(4);break;case"line drive":this.fielding(e,1);break;case"single":this.advanceRunners(1);break;case"triple":this.advanceRunners(3)}}},{key:"fielding",value:function(e,t){var n,o=0===f(2)?"out":"in";switch(e){case"bunt":case"ground ball":n="fielded";break;case"fly ball":case"line drive":n="caught"}"out"===o?(this.scoreBoard.incrementCount("outs"),i.emit("announce:play",{hit:e,play:n})):this.advanceRunners(t)}},{key:"advanceRunners",value:function(e){console.log("runners advance ".concat(e," ").concat(1===e?"base":"bases"));for(var t=0;t<e;t++)this.bases.unshift(0===t?"runner":void 0),this.watchHomePlate(this.bases.pop());this.bases.every((function(e){return"string"==typeof e}))&&i.emit("announce:commentary","The bases are loaded!"),console.log(this.bases)}},{key:"watchHomePlate",value:function(e){void 0!==e&&i.emit("runner:scores")}},{key:"getTeamNames",get:function(){return{visitor:this.visitor.name,home:this.home.name}}}])&&v(t.prototype,n),o&&v(t,o),e}();y="Baseball",console.log("hello from ".concat(y));var p,w,B=(p=window.prompt("Home team name?"),w=window.prompt("Visiting team name?"),new k(p,w));B.start(),B.end()}]);