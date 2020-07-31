parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uhJe":[function(require,module,exports) {
module.exports={faction:"radiant",group:"agility",id:"3",heroes:[{name:"Anti-Mage",id:"1",roles:["Melee","Carry","Escape","Nuker","Agility"]},{name:"Drow Ranger",id:"2",roles:["Ranged","Carry","Disabler","Pusher","Mid","Agility"]},{name:"Juggernaut",id:"3",roles:["Melee","Carry","Pusher","Escape","Agility"]},{name:"Mirana",id:"4",roles:["Ranged","Carry","Support","Escape","Nuker","Disabler","Mid","Offlaner","Agility"]},{name:"Morphling",id:"5",roles:["Ranged","Carry","Escape","Durable","Nuker","Disabler","Mid","Agility"]},{name:"Phantom Lancer",id:"6",roles:["Melee","Carry","Escape","Pusher","Nuker","Agility"]},{name:"Vengeful Spirit",id:"7",roles:["Ranged","Support","Initiator","Disabler","Nuker","Escape","Agility"]},{name:"Riki",id:"8",roles:["Melee","Carry","Escape","Disabler","Agility"]},{name:"Sniper",id:"9",roles:["Ranged","Carry","Nuker","Mid","Agility"]},{name:"Templar Assassin",id:"10",roles:["Ranged","Carry","Escape","Mid","Agility"]},{name:"Luna",id:"11",roles:["Ranged","Carry","Nuker","Pusher","Mid","Agility"]},{name:"Bounty Hunter",id:"12",roles:["Melee","Escape","Nuker","Offlaner","Agility"]},{name:"Ursa",id:"13",roles:["Melee","Carry","Jungler","Durable","Disabler","Agility"]},{name:"Gyrocopter",id:"14",roles:["Ranged","Carry","Nuker","Disabler","Mid","Agility"]},{name:"Lone Druid",id:"15",roles:["Ranged","Carry","Pusher","Jungler","Durable","Agility"]},{name:"Naga Siren",id:"16",roles:["Melee","Carry","Support","Pusher","Disabler","Initiator","Escape","Agility"]},{name:"Troll Warlord",id:"17",roles:["Ranged","Carry","Pusher","Disabler","Durable","Agility"]},{name:"Ember Spirit",id:"18",roles:["Melee","Carry","Escape","Nuker","Disabler","Initiator","Mid","Agility"]},{name:"Monkey King",id:"19",roles:["Melee","Carry","Escape","Disabler","Initiator","Agility"]},{name:"Pangolier",id:"20",roles:["Melee","Carry","Nuker","Disabler","Durable","Escape","Initiator","Offlaner","Agility"]}]};
},{}],"Vpt4":[function(require,module,exports) {
module.exports={faction:"radiant",group:"intelligence",id:"5",heroes:[{name:"Crystal Maiden",id:"1",roles:["Ranged","Support","Disabler","Nuker","Jungler","Intelligence"]},{name:"Puck",id:"2",roles:["Ranged","Initiator","Disabler","Escape","Nuker","Mid","Intelligence"]},{name:"Storm Spirit",id:"3",roles:["Ranged","Carry","Escape","Nuker","Initiator","Disabler","Mid","Intelligence"]},{name:"Windranger",id:"4",roles:["Ranged","Carry","Support","Disabler","Escape","Nuker","Offlaner","Mid","Intelligence"]},{name:"Zeus",id:"5",roles:["Ranged","Nuker","Mid","Intelligence"]},{name:"Lina",id:"6",roles:["Ranged","Support","Carry","Nuker","Disabler","Mid","Intelligence"]},{name:"Shadow Shaman",id:"7",roles:["Ranged","Support","Pusher","Disabler","Nuker","Initiator","Intelligence"]},{name:"Tinker",id:"8",roles:["Ranged","Carry","Nuker","Pusher","Mid","Intelligence"]},{name:"Nature's Prophet",id:"9",roles:["Ranged","Carry","Jungler","Pusher","Escape","Nuker","Intelligence"]},{name:"Enchantress",id:"10",roles:["Ranged","Support","Jungler","Pusher","Durable","Disabler","Intelligence"]},{name:"Jakiro",id:"11",roles:["Ranged","Support","Nuker","Pusher","Disable","Intelligence"]},{name:"Chen",id:"12",roles:["Ranged","Support","Jungler","Pusher","Intelligence"]},{name:"Silencer",id:"13",roles:["Ranged","Carry","Support","Disabler","Initiator","Nuker","Mid","Intelligence"]},{name:"Ogre Magi",id:"14",roles:["Melee","Support","Nuker","Disabler","Durable","Initiator","Intelligence"]},{name:"Rubick",id:"15",roles:["Ranged","Support","Disabler","Nuker","Intelligence"]},{name:"Disruptor",id:"16",roles:["Ranged","Support","Disabler","Nuker","Initiator","Intelligence"]},{name:"Keeper of the Light",id:"17",roles:["Ranged","Support","Nuker","Disabler","Jungler","Intelligence"]},{name:"Skywrath Mage",id:"18",roles:["Ranged","Support","Nuker","Disabler","Mid","Intelligence"]},{name:"Oracle",id:"19",roles:["Ranged","Support","Nuker","Disabler","Escape","Intelligence"]},{name:"Techies",id:"20",roles:["Ranged","Nuker","Disabler","Offlaner","Intelligence"]},{name:"Dark Willow",id:"21",roles:["Ranged","Support","Nuker","Disabler","Escape","Intelligence"]},{name:"Void Spirit",id:"22",roles:["Melee","Carry","Escape","Nuker","Disabler","Mid","Intelligence"]}]};
},{}],"O9Fv":[function(require,module,exports) {
module.exports={faction:"radiant",group:"strength",id:"1",heroes:[{name:"Earthshaker",id:"1",roles:["Melee","Support","Initiator","Disabler","Nuker","Strength"]},{name:"Sven",id:"2",roles:["Melee","Carry","Disabler","Initiator","Durable","Nuker","Strength"]},{name:"Tiny",id:"3",roles:["Melee","Carry","Nuker","Pusher","Initiator","Durable","Disabler","Offlaner","Mid","Strength"]},{name:"Kunkka",id:"5",roles:["Melee","Carry","Support","Disabler","Initiator","Durable","Nuker","Offlaner","Mid","Strength"]},{name:"Beastmaster",id:"6",roles:["Melee","Initiator","Disabler","Durable","Nuker","Offlaner","Strength"]},{name:"Dragon Knight",id:"7",roles:["Melee","Carry","Pusher","Durable","Disabler","Initiator","Nuker","Offlaner","Strength"]},{name:"Clockwerk",id:"8",roles:["Melee","Initiator","Disabler","Durable","Nuker","Offlaner","Strength"]},{name:"Omniknight",id:"9",roles:["Melee","Support","Durable","Nuker","Strength"]},{name:"Huskar",id:"10",roles:["Ranged","Carry","Durable","Initiator","Mid","Strength"]},{name:"Alchemist",id:"11",roles:["Melee","Carry","Support","Durable","Disabler","Initiator","Nuker","Mid","Strength"]},{name:"Brewmaster",id:"12",roles:["Melee","Carry","Initiator","Durable","Disabler","Nuker","Offlaner","Strength"]},{name:"Treant Protector",id:"13",roles:["Melee","Support","Initiator","Durable","Disabler","Escape","Strength"]},{name:"Io",id:"14",roles:["Ranged","Support","Escape","Nuker","Strength"]},{name:"Centaur Warrunner",id:"15",roles:["Melee","Durable","Initiator","Disabler","Nuker","Escape","Offlaner","Strength"]},{name:"Timbersaw",id:"16",roles:["Melee","Nuker","Durable","Escape","Offlaner","Strength"]},{name:"Bristleback",id:"17",roles:["Melee","Carry","Durable","Initiator","Nuker","Offlaner","Strength"]},{name:"Tusk",id:"18",roles:["Melee","Initiator","Disabler","Nuker","Strength"]},{name:"Elder Titan",id:"19",roles:["Melee","Initiator","Disabler","Nuker","Durable","Offlaner","Strength"]},{name:"Legion Commander",id:"20",roles:["Melee","Carry","Disabler","Initiator","Durable","Nuker","Strength"]},{name:"Earth Spirit",id:"21",roles:["Melee","Nuker","Escape","Disabler","Initiator","Durable","Offlaner","Strength"]},{name:"Phoenix",id:"22",roles:["Ranged","Support","Nuker","Initiator","Escape","Disabler","Strength"]},{name:"Mars",id:"23",roles:["Melee","Carry","Initiator","Disabler","Durable","Offlaner","Strength"]},{name:"Snapfire",id:"24",roles:["Ranged","Support","Nuker","Disabler","Escape","Offlaner","Strength"]}]};
},{}],"Y6a8":[function(require,module,exports) {
module.exports={faction:"dire",group:"agility",id:"4",heroes:[{name:"Bloodseeker",id:"1",roles:["Melee","Carry","Disabler","Jungler","Nuker","Initiator","Offlaner","Agility"]},{name:"Shadow Fiend",id:"2",roles:["Ranged","Carry","Nuker","Mid","Agility"]},{name:"Razor",id:"3",roles:["Ranged","Carry","Durable","Nuker","Pusher","Mid","Agility"]},{name:"Venomancer",id:"4",roles:["Ranged","Support","Nuker","Initiator","Pusher","Disabler","Agility"]},{name:"Faceless Void",id:"5",roles:["Melee","Carry","Initiator","Disabler","Escape","Durable","Agility"]},{name:"Phantom Assassin",id:"6",roles:["Melee","Carry","Escape","Agility"]},{name:"Viper",id:"7",roles:["Ranged","Carry","Durable","Initiator","Disabler","Mid","Agility"]},{name:"Clinkz",id:"8",roles:["Ranged","Carry","Escape","Pusher","Mid","Agility"]},{name:"Broodmother",id:"9",roles:["Melee","Carry","Pusher","Escape","Nuker","Offlaner","Agility"]},{name:"Weaver",id:"10",roles:["Ranged","Carry","Escape","Mid","Agility"]},{name:"Spectre",id:"11",roles:["Melee","Carry","Durable","Escape","Agility"]},{name:"Meepo",id:"12",roles:["Melee","Carry","Escape","Nuker","Disabler","Initiator","Pusher","Mid","Agility"]},{name:"Nyx Assassin",id:"13",roles:["Melee","Disabler","Nuker","Initiator","Escape","Offlaner","Agility"]},{name:"Slark",id:"14",roles:["Melee","Carry","Escape","Disabler","Nuker","Agility"]},{name:"Medusa",id:"15",roles:["Ranged","Carry","Disabler","Durable","Mid","Agility"]},{name:"Terrorblade",id:"16",roles:["Melee","Carry","Pusher","Nuker","Agility"]},{name:"Arc Warden",id:"17",roles:["Ranged","Carry","Escape","Nuker","Mid","Agility"]}]};
},{}],"FpRU":[function(require,module,exports) {
module.exports={faction:"dire",group:"intelligence",id:"6",heroes:[{name:"Bane",id:"1",roles:["Ranged","Support","Disabler","Nuker","Durable","Intelligence"]},{name:"Lich",id:"2",roles:["Ranged","Support","Nuker","Intelligence"]},{name:"Lion",id:"3",roles:["Ranged","Support","Disabler","Nuker","Initiator","Intelligence"]},{name:"Witch Doctor",id:"4",roles:["Ranged","Support","Nuker","Disabler","Intelligence"]},{name:"Enigma",id:"5",roles:["Ranged","Disabler","Jungler","Initiator","Pusher","Intelligence"]},{name:"Necrophos",id:"6",roles:["Ranged","Carry","Nuker","Durable","Disabler","Mid","Intelligence"]},{name:"Warlock",id:"7",roles:["Ranged","Support","Initiator","Disabler","Intelligence"]},{name:"Queen of Pain",id:"8",roles:["Ranged","Carry","Nuker","Escape","Mid","Intelligence"]},{name:"Death Prophet",id:"9",roles:["Ranged","Carry","Pusher","Nuker","Disabler","Mid","Intelligence"]},{name:"Pugna",id:"10",roles:["Ranged","Nuker","Pusher","Mid","Intelligence"]},{name:"Dazzle",id:"11",roles:["Ranged","Support","Nuker","Disabler","Intelligence"]},{name:"Leshrac",id:"12",roles:["Ranged","Carry","Support","Nuker","Pusher","Disabler","Mid","Intelligence"]},{name:"Dark Seer",id:"13",roles:["Melee","Initiator","Jungler","Escape","Disabler","Offlaner","Intelligence"]},{name:"Batrider",id:"14",roles:["Ranged","Initiator","Jungler","Disabler","Escape","Offlaner","Intelligence"]},{name:"Ancient Apparition",id:"15",roles:["Ranged","Support","Disabler","Nuker","Intelligence"]},{name:"Invoker",id:"16",roles:["Ranged","Carry","Nuker","Disabler","Escape","Pusher","Mid","Intelligence"]},{name:"Outworld Devourer",id:"17",roles:["Ranged","Carry","Nuker","Disabler","Mid","Intelligence"]},{name:"Shadow Demon",id:"19",roles:["Ranged","Support","Disabler","Initiator","Nuker","Intelligence"]},{name:"Visage",id:"18",roles:["Ranged","Support","Nuker","Durable","Disabler","Pusher","Intelligence"]},{name:"Winter Wyvern",id:"20",roles:["Ranged","Support","Disabler","Nuker","Intelligence"]},{name:"Grimstroke",id:"21",roles:["Ranged","Support","Nuker","Disabler","Escape","Intelligence"]}]};
},{}],"Gv9Z":[function(require,module,exports) {
module.exports={faction:"dire",group:"strength",id:"2",heroes:[{name:"Axe",id:"1",roles:["Melee","Initiator","Durable","Disabler","Jungler","Offlaner","Strength"]},{name:"Pudge",id:"2",roles:["Melee","Disabler","Initiator","Durable","Nuker","Offlaner","Strength"]},{name:"Sand King",id:"3",roles:["Melee","Initiator","Disabler","Support","Nuker","Escape","Jungler","Offlaner","Strength"]},{name:"Slardar",id:"5",roles:["Melee","Carry","Durable","Initiator","Disabler","Escape","Offlaner","Strength"]},{name:"Tidehunter",id:"6",roles:["Melee","Initiator","Durable","Disabler","Nuker","Offlaner","Strength"]},{name:"Wraith King",id:"7",roles:["Melee","Carry","Support","Durable","Disabler","Initiator","Offlaner","Strength"]},{name:"Lifestealer",id:"8",roles:["Melee","Carry","Durable","Jungler","Escape","Disabler","Strength"]},{name:"Night Stalker",id:"9",roles:["Melee","Carry","Initiator","Durable","Disabler","Nuker","Mid","Strength"]},{name:"Doom",id:"10",roles:["Melee","Carry","Disabler","Initiator","Durable","Nuker","Offlaner","Strength"]},{name:"Spirit Breaker",id:"11",roles:["Melee","Carry","Initiator","Disabler","Durable","Escape","Offlaner","Strength"]},{name:"Lycan",id:"12",roles:["Melee","Carry","Pusher","Jungler","Durable","Escape","Strength"]},{name:"Chaos Knight",id:"13",roles:["Melee","Carry","Disabler","Durable","Pusher","Initiator","Offlaner","Strength"]},{name:"Undying",id:"14",roles:["Melee","Support","Durable","Disabler","Nuker","Offlaner","Strength"]},{name:"Magnus",id:"15",roles:["Melee","Initiator","Disabler","Nuker","Escape","Mid","Offlaner","Strength"]},{name:"Abaddon",id:"16",roles:["Melee","Support","Carry","Durable","Offlaner","Strength"]},{name:"Underlord",id:"17",roles:["Melee","Support","Nuker","Disabler","Durable","Escape","Offlaner","Strength"]}]};
},{}],"xgpv":[function(require,module,exports) {
module.exports={roles:["Melee","Ranged","Carry","Support","Mid","Offlaner","Durable","Initiator","Nuker","Disabler","Pusher","Escape","Jungler","Strength","Agility","Intelligence"]};
},{}],"Tn6r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rolesList=exports.heroesList=void 0;var e=a(require("./heroes/radiant_agi.json")),r=a(require("./heroes/radiant_int.json")),t=a(require("./heroes/radiant_str.json")),o=a(require("./heroes/dire_agi.json")),n=a(require("./heroes/dire_int.json")),s=a(require("./heroes/dire_str.json")),i=a(require("./roles/roles.json"));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=o?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(t,n,s):t[n]=e[n]}return t.default=e,r&&r.set(e,t),t}var p=[t,e,r,s,o,n];exports.heroesList=p;var f=i;exports.rolesList=f;
},{"./heroes/radiant_agi.json":"uhJe","./heroes/radiant_int.json":"Vpt4","./heroes/radiant_str.json":"O9Fv","./heroes/dire_agi.json":"Y6a8","./heroes/dire_int.json":"FpRU","./heroes/dire_str.json":"Gv9Z","./roles/roles.json":"xgpv"}],"iHz2":[function(require,module,exports) {
module.exports="/abaddon.6ca5a3ef.webp";
},{}],"CCII":[function(require,module,exports) {
module.exports="/alchemist.0b786fdb.webp";
},{}],"xGY6":[function(require,module,exports) {
module.exports="/ancient_apparition.4a85518e.webp";
},{}],"cgy5":[function(require,module,exports) {
module.exports="/anti-mage.6f044c4d.webp";
},{}],"xiDD":[function(require,module,exports) {
module.exports="/arc_warden.6d00e358.webp";
},{}],"d0x8":[function(require,module,exports) {
module.exports="/axe.7b73a3a0.webp";
},{}],"iRlE":[function(require,module,exports) {
module.exports="/bane.41fe1312.webp";
},{}],"zAJl":[function(require,module,exports) {
module.exports="/batrider.6ff1acc7.webp";
},{}],"XYW2":[function(require,module,exports) {
module.exports="/beastmaster.f4db1111.webp";
},{}],"Ctux":[function(require,module,exports) {
module.exports="/bloodseeker.1a3cedbd.webp";
},{}],"b5w1":[function(require,module,exports) {
module.exports="/bounty_hunter.507c3ca6.webp";
},{}],"cVip":[function(require,module,exports) {
module.exports="/brewmaster.6fcebe37.webp";
},{}],"cDv0":[function(require,module,exports) {
module.exports="/bristleback.8a1c69ff.webp";
},{}],"axbd":[function(require,module,exports) {
module.exports="/broodmother.16b59620.webp";
},{}],"Oyb1":[function(require,module,exports) {
module.exports="/centaur_warrunner.5b6c1590.webp";
},{}],"G1nU":[function(require,module,exports) {
module.exports="/chaos_knight.4d80ef92.webp";
},{}],"x6ih":[function(require,module,exports) {
module.exports="/chen.8d595751.webp";
},{}],"zWsm":[function(require,module,exports) {
module.exports="/clinkz.3b45b795.webp";
},{}],"v6KW":[function(require,module,exports) {
module.exports="/clockwerk.3d6cc76f.webp";
},{}],"fWn8":[function(require,module,exports) {
module.exports="/crystal_maiden.b9b032f9.webp";
},{}],"YwWY":[function(require,module,exports) {
module.exports="/dark_seer.f3701bfe.webp";
},{}],"byop":[function(require,module,exports) {
module.exports="/dark_willow.791445f0.webp";
},{}],"wnlN":[function(require,module,exports) {
module.exports="/dazzle.04d12ca5.webp";
},{}],"lKC0":[function(require,module,exports) {
module.exports="/death_prophet.c5ff5d6a.webp";
},{}],"zhFR":[function(require,module,exports) {
module.exports="/disruptor.e91d4f8f.webp";
},{}],"cA97":[function(require,module,exports) {
module.exports="/doom.82f73dbc.webp";
},{}],"UFlA":[function(require,module,exports) {
module.exports="/dragon_knight.b0b09c7c.webp";
},{}],"QTJJ":[function(require,module,exports) {
module.exports="/drow_ranger.4c6b5014.webp";
},{}],"tLe7":[function(require,module,exports) {
module.exports="/earth_spirit.f44de297.webp";
},{}],"JSmD":[function(require,module,exports) {
module.exports="/earthshaker.4f336b37.webp";
},{}],"k4xe":[function(require,module,exports) {
module.exports="/elder_titan.40d4d119.webp";
},{}],"jd2K":[function(require,module,exports) {
module.exports="/ember_spirit.5fa2103a.webp";
},{}],"PtyZ":[function(require,module,exports) {
module.exports="/enchantress.7509e1f2.webp";
},{}],"lr2x":[function(require,module,exports) {
module.exports="/enigma.bb0592ab.webp";
},{}],"cIE1":[function(require,module,exports) {
module.exports="/faceless_void.c442ca42.webp";
},{}],"e0ev":[function(require,module,exports) {
module.exports="/grimstroke.f1cc1f05.webp";
},{}],"nJcy":[function(require,module,exports) {
module.exports="/gyrocopter.a4b70d5b.webp";
},{}],"hu5j":[function(require,module,exports) {
module.exports="/huskar.ef0b492e.webp";
},{}],"QWIm":[function(require,module,exports) {
module.exports="/invoker.90a04db4.webp";
},{}],"sVGf":[function(require,module,exports) {
module.exports="/io.8aca2d3b.webp";
},{}],"Xcqp":[function(require,module,exports) {
module.exports="/jakiro.6bc206fd.webp";
},{}],"TkiG":[function(require,module,exports) {
module.exports="/juggernaut.379c245e.webp";
},{}],"o2PY":[function(require,module,exports) {
module.exports="/keeper_of_the_light.f15dd91d.webp";
},{}],"Tt5N":[function(require,module,exports) {
module.exports="/kunkka.864103ed.webp";
},{}],"A7oE":[function(require,module,exports) {
module.exports="/legion_commander.69315f9d.webp";
},{}],"iNB4":[function(require,module,exports) {
module.exports="/leshrac.1ba920b0.webp";
},{}],"SilE":[function(require,module,exports) {
module.exports="/lich.65290cb6.webp";
},{}],"xidF":[function(require,module,exports) {
module.exports="/lifestealer.12c1777c.webp";
},{}],"PxtD":[function(require,module,exports) {
module.exports="/lina.21c56b6f.webp";
},{}],"nn73":[function(require,module,exports) {
module.exports="/lion.ab1b2944.webp";
},{}],"qQCg":[function(require,module,exports) {
module.exports="/lone_druid.5aefc3e2.webp";
},{}],"mlPM":[function(require,module,exports) {
module.exports="/luna.2ce31ec1.webp";
},{}],"rHtz":[function(require,module,exports) {
module.exports="/lycan.ce565d9a.webp";
},{}],"LLFb":[function(require,module,exports) {
module.exports="/magnus.b3d993c2.webp";
},{}],"eZfQ":[function(require,module,exports) {
module.exports="/mars.4e2a30a1.webp";
},{}],"yowN":[function(require,module,exports) {
module.exports="/medusa.1b27a746.webp";
},{}],"V1gw":[function(require,module,exports) {
module.exports="/meepo.111cf45d.webp";
},{}],"kuWv":[function(require,module,exports) {
module.exports="/mirana.25437bd6.webp";
},{}],"m4XP":[function(require,module,exports) {
module.exports="/monkey_king.0336f143.webp";
},{}],"tzoh":[function(require,module,exports) {
module.exports="/morphling.a97636f2.webp";
},{}],"DT20":[function(require,module,exports) {
module.exports="/naga_siren.bea32a88.webp";
},{}],"BYbr":[function(require,module,exports) {
module.exports="/natures_prophet.3631f23b.webp";
},{}],"oK1X":[function(require,module,exports) {
module.exports="/necrophos.a8462f52.webp";
},{}],"oAiJ":[function(require,module,exports) {
module.exports="/night_stalker.e0611af8.webp";
},{}],"BJwH":[function(require,module,exports) {
module.exports="/nyx_assassin.69df055c.webp";
},{}],"GWWf":[function(require,module,exports) {
module.exports="/ogre_magi.379822de.webp";
},{}],"wAlt":[function(require,module,exports) {
module.exports="/omniknight.a7b341bc.webp";
},{}],"Agdc":[function(require,module,exports) {
module.exports="/oracle.0d1dfcf6.webp";
},{}],"xsbB":[function(require,module,exports) {
module.exports="/outworld_devourer.3231d655.webp";
},{}],"BNrG":[function(require,module,exports) {
module.exports="/pangolier.bae96464.webp";
},{}],"QW6s":[function(require,module,exports) {
module.exports="/phantom_assassin.a4802f1e.webp";
},{}],"oyrf":[function(require,module,exports) {
module.exports="/phantom_lancer.8c163243.webp";
},{}],"xFFx":[function(require,module,exports) {
module.exports="/phoenix.db53469a.webp";
},{}],"qvmn":[function(require,module,exports) {
module.exports="/puck.ec4408c7.webp";
},{}],"IcaO":[function(require,module,exports) {
module.exports="/pudge.f18754cf.webp";
},{}],"Kx8C":[function(require,module,exports) {
module.exports="/pugna.483e2f9d.webp";
},{}],"fGZn":[function(require,module,exports) {
module.exports="/queen_of_pain.8fa2d23d.webp";
},{}],"DB8H":[function(require,module,exports) {
module.exports="/razor.3d0aa26e.webp";
},{}],"Fa1w":[function(require,module,exports) {
module.exports="/riki.8cec1826.webp";
},{}],"mq9v":[function(require,module,exports) {
module.exports="/rubick.a1a676f5.webp";
},{}],"RGuQ":[function(require,module,exports) {
module.exports="/sand_king.e96327a7.webp";
},{}],"imMv":[function(require,module,exports) {
module.exports="/shadow_demon.86dfac08.webp";
},{}],"iPoD":[function(require,module,exports) {
module.exports="/shadow_fiend.4cf584b1.webp";
},{}],"y2N2":[function(require,module,exports) {
module.exports="/shadow_shaman.9e1d0fda.webp";
},{}],"IbIP":[function(require,module,exports) {
module.exports="/silencer.4b6cf0ea.webp";
},{}],"Eo3y":[function(require,module,exports) {
module.exports="/skywrath_mage.fbc1ccc9.webp";
},{}],"XfqR":[function(require,module,exports) {
module.exports="/slardar.44c6f726.webp";
},{}],"e4Dr":[function(require,module,exports) {
module.exports="/slark.ac73f32f.webp";
},{}],"J1Oz":[function(require,module,exports) {
module.exports="/snapfire.223d93a7.webp";
},{}],"K824":[function(require,module,exports) {
module.exports="/sniper.373c673e.webp";
},{}],"qubm":[function(require,module,exports) {
module.exports="/spectre.b07819ad.webp";
},{}],"XEXh":[function(require,module,exports) {
module.exports="/spirit_breaker.88ad0ff3.webp";
},{}],"WZC2":[function(require,module,exports) {
module.exports="/storm_spirit.9976587f.webp";
},{}],"ABHn":[function(require,module,exports) {
module.exports="/sven.1e321fc5.webp";
},{}],"c9cq":[function(require,module,exports) {
module.exports="/techies.f11f67b0.webp";
},{}],"XT0S":[function(require,module,exports) {
module.exports="/templar_assassin.9dac5b04.webp";
},{}],"p7XV":[function(require,module,exports) {
module.exports="/terrorblade.9b75ecfa.webp";
},{}],"HFkw":[function(require,module,exports) {
module.exports="/tidehunter.76f71f60.webp";
},{}],"hIjJ":[function(require,module,exports) {
module.exports="/timbersaw.149194e6.webp";
},{}],"uX6U":[function(require,module,exports) {
module.exports="/tinker.308c8c95.webp";
},{}],"zCgi":[function(require,module,exports) {
module.exports="/treant_protector.fc56f7cc.webp";
},{}],"AsYu":[function(require,module,exports) {
module.exports="/troll_warlord.2a18e392.webp";
},{}],"IyyZ":[function(require,module,exports) {
module.exports="/tusk.1deb0e45.webp";
},{}],"nHni":[function(require,module,exports) {
module.exports="/underlord.f2e891b7.webp";
},{}],"PvgO":[function(require,module,exports) {
module.exports="/undying.1f6011c0.webp";
},{}],"oKtZ":[function(require,module,exports) {
module.exports="/ursa.654ee60f.webp";
},{}],"PcF7":[function(require,module,exports) {
module.exports="/vengeful_spirit.ad78b52d.webp";
},{}],"tfyX":[function(require,module,exports) {
module.exports="/venomancer.01f5626d.webp";
},{}],"ASbI":[function(require,module,exports) {
module.exports="/viper.4749dadc.webp";
},{}],"uaQC":[function(require,module,exports) {
module.exports="/visage.18111b93.webp";
},{}],"qqs0":[function(require,module,exports) {
module.exports="/void_spirit.fefa58a2.webp";
},{}],"RQ44":[function(require,module,exports) {
module.exports="/tiny.c842e643.webp";
},{}],"C4Py":[function(require,module,exports) {
module.exports="/warlock.bec7d531.webp";
},{}],"xSHj":[function(require,module,exports) {
module.exports="/windranger.bfa25447.webp";
},{}],"t5Au":[function(require,module,exports) {
module.exports="/weaver.116f4c8c.webp";
},{}],"VhbW":[function(require,module,exports) {
module.exports="/winter_wyvern.2fcf5807.webp";
},{}],"EUpd":[function(require,module,exports) {
module.exports="/witch_doctor.02fba369.webp";
},{}],"Dkw8":[function(require,module,exports) {
module.exports="/wraith_king.16735465.webp";
},{}],"fNp3":[function(require,module,exports) {
module.exports="/zeus.88c492a7.webp";
},{}],"LrWO":[function(require,module,exports) {
module.exports={abaddon:require("./abaddon.webp"),alchemist:require("./alchemist.webp"),ancient_apparition:require("./ancient_apparition.webp"),"anti-mage":require("./anti-mage.webp"),arc_warden:require("./arc_warden.webp"),axe:require("./axe.webp"),bane:require("./bane.webp"),batrider:require("./batrider.webp"),beastmaster:require("./beastmaster.webp"),bloodseeker:require("./bloodseeker.webp"),bounty_hunter:require("./bounty_hunter.webp"),brewmaster:require("./brewmaster.webp"),bristleback:require("./bristleback.webp"),broodmother:require("./broodmother.webp"),centaur_warrunner:require("./centaur_warrunner.webp"),chaos_knight:require("./chaos_knight.webp"),chen:require("./chen.webp"),clinkz:require("./clinkz.webp"),clockwerk:require("./clockwerk.webp"),crystal_maiden:require("./crystal_maiden.webp"),dark_seer:require("./dark_seer.webp"),dark_willow:require("./dark_willow.webp"),dazzle:require("./dazzle.webp"),death_prophet:require("./death_prophet.webp"),disruptor:require("./disruptor.webp"),doom:require("./doom.webp"),dragon_knight:require("./dragon_knight.webp"),drow_ranger:require("./drow_ranger.webp"),earth_spirit:require("./earth_spirit.webp"),earthshaker:require("./earthshaker.webp"),elder_titan:require("./elder_titan.webp"),ember_spirit:require("./ember_spirit.webp"),enchantress:require("./enchantress.webp"),enigma:require("./enigma.webp"),faceless_void:require("./faceless_void.webp"),grimstroke:require("./grimstroke.webp"),gyrocopter:require("./gyrocopter.webp"),huskar:require("./huskar.webp"),invoker:require("./invoker.webp"),io:require("./io.webp"),jakiro:require("./jakiro.webp"),juggernaut:require("./juggernaut.webp"),keeper_of_the_light:require("./keeper_of_the_light.webp"),kunkka:require("./kunkka.webp"),legion_commander:require("./legion_commander.webp"),leshrac:require("./leshrac.webp"),lich:require("./lich.webp"),lifestealer:require("./lifestealer.webp"),lina:require("./lina.webp"),lion:require("./lion.webp"),lone_druid:require("./lone_druid.webp"),luna:require("./luna.webp"),lycan:require("./lycan.webp"),magnus:require("./magnus.webp"),mars:require("./mars.webp"),medusa:require("./medusa.webp"),meepo:require("./meepo.webp"),mirana:require("./mirana.webp"),monkey_king:require("./monkey_king.webp"),morphling:require("./morphling.webp"),naga_siren:require("./naga_siren.webp"),natures_prophet:require("./natures_prophet.webp"),necrophos:require("./necrophos.webp"),night_stalker:require("./night_stalker.webp"),nyx_assassin:require("./nyx_assassin.webp"),ogre_magi:require("./ogre_magi.webp"),omniknight:require("./omniknight.webp"),oracle:require("./oracle.webp"),outworld_devourer:require("./outworld_devourer.webp"),pangolier:require("./pangolier.webp"),phantom_assassin:require("./phantom_assassin.webp"),phantom_lancer:require("./phantom_lancer.webp"),phoenix:require("./phoenix.webp"),puck:require("./puck.webp"),pudge:require("./pudge.webp"),pugna:require("./pugna.webp"),queen_of_pain:require("./queen_of_pain.webp"),razor:require("./razor.webp"),riki:require("./riki.webp"),rubick:require("./rubick.webp"),sand_king:require("./sand_king.webp"),shadow_demon:require("./shadow_demon.webp"),shadow_fiend:require("./shadow_fiend.webp"),shadow_shaman:require("./shadow_shaman.webp"),silencer:require("./silencer.webp"),skywrath_mage:require("./skywrath_mage.webp"),slardar:require("./slardar.webp"),slark:require("./slark.webp"),snapfire:require("./snapfire.webp"),sniper:require("./sniper.webp"),spectre:require("./spectre.webp"),spirit_breaker:require("./spirit_breaker.webp"),storm_spirit:require("./storm_spirit.webp"),sven:require("./sven.webp"),techies:require("./techies.webp"),templar_assassin:require("./templar_assassin.webp"),terrorblade:require("./terrorblade.webp"),tidehunter:require("./tidehunter.webp"),timbersaw:require("./timbersaw.webp"),tinker:require("./tinker.webp"),treant_protector:require("./treant_protector.webp"),troll_warlord:require("./troll_warlord.webp"),tusk:require("./tusk.webp"),underlord:require("./underlord.webp"),undying:require("./undying.webp"),ursa:require("./ursa.webp"),vengeful_spirit:require("./vengeful_spirit.webp"),venomancer:require("./venomancer.webp"),viper:require("./viper.webp"),visage:require("./visage.webp"),void_spirit:require("./void_spirit.webp"),tiny:require("./tiny.webp"),warlock:require("./warlock.webp"),windranger:require("./windranger.webp"),weaver:require("./weaver.webp"),winter_wyvern:require("./winter_wyvern.webp"),witch_doctor:require("./witch_doctor.webp"),wraith_king:require("./wraith_king.webp"),zeus:require("./zeus.webp")};
},{"./abaddon.webp":"iHz2","./alchemist.webp":"CCII","./ancient_apparition.webp":"xGY6","./anti-mage.webp":"cgy5","./arc_warden.webp":"xiDD","./axe.webp":"d0x8","./bane.webp":"iRlE","./batrider.webp":"zAJl","./beastmaster.webp":"XYW2","./bloodseeker.webp":"Ctux","./bounty_hunter.webp":"b5w1","./brewmaster.webp":"cVip","./bristleback.webp":"cDv0","./broodmother.webp":"axbd","./centaur_warrunner.webp":"Oyb1","./chaos_knight.webp":"G1nU","./chen.webp":"x6ih","./clinkz.webp":"zWsm","./clockwerk.webp":"v6KW","./crystal_maiden.webp":"fWn8","./dark_seer.webp":"YwWY","./dark_willow.webp":"byop","./dazzle.webp":"wnlN","./death_prophet.webp":"lKC0","./disruptor.webp":"zhFR","./doom.webp":"cA97","./dragon_knight.webp":"UFlA","./drow_ranger.webp":"QTJJ","./earth_spirit.webp":"tLe7","./earthshaker.webp":"JSmD","./elder_titan.webp":"k4xe","./ember_spirit.webp":"jd2K","./enchantress.webp":"PtyZ","./enigma.webp":"lr2x","./faceless_void.webp":"cIE1","./grimstroke.webp":"e0ev","./gyrocopter.webp":"nJcy","./huskar.webp":"hu5j","./invoker.webp":"QWIm","./io.webp":"sVGf","./jakiro.webp":"Xcqp","./juggernaut.webp":"TkiG","./keeper_of_the_light.webp":"o2PY","./kunkka.webp":"Tt5N","./legion_commander.webp":"A7oE","./leshrac.webp":"iNB4","./lich.webp":"SilE","./lifestealer.webp":"xidF","./lina.webp":"PxtD","./lion.webp":"nn73","./lone_druid.webp":"qQCg","./luna.webp":"mlPM","./lycan.webp":"rHtz","./magnus.webp":"LLFb","./mars.webp":"eZfQ","./medusa.webp":"yowN","./meepo.webp":"V1gw","./mirana.webp":"kuWv","./monkey_king.webp":"m4XP","./morphling.webp":"tzoh","./naga_siren.webp":"DT20","./natures_prophet.webp":"BYbr","./necrophos.webp":"oK1X","./night_stalker.webp":"oAiJ","./nyx_assassin.webp":"BJwH","./ogre_magi.webp":"GWWf","./omniknight.webp":"wAlt","./oracle.webp":"Agdc","./outworld_devourer.webp":"xsbB","./pangolier.webp":"BNrG","./phantom_assassin.webp":"QW6s","./phantom_lancer.webp":"oyrf","./phoenix.webp":"xFFx","./puck.webp":"qvmn","./pudge.webp":"IcaO","./pugna.webp":"Kx8C","./queen_of_pain.webp":"fGZn","./razor.webp":"DB8H","./riki.webp":"Fa1w","./rubick.webp":"mq9v","./sand_king.webp":"RGuQ","./shadow_demon.webp":"imMv","./shadow_fiend.webp":"iPoD","./shadow_shaman.webp":"y2N2","./silencer.webp":"IbIP","./skywrath_mage.webp":"Eo3y","./slardar.webp":"XfqR","./slark.webp":"e4Dr","./snapfire.webp":"J1Oz","./sniper.webp":"K824","./spectre.webp":"qubm","./spirit_breaker.webp":"XEXh","./storm_spirit.webp":"WZC2","./sven.webp":"ABHn","./techies.webp":"c9cq","./templar_assassin.webp":"XT0S","./terrorblade.webp":"p7XV","./tidehunter.webp":"HFkw","./timbersaw.webp":"hIjJ","./tinker.webp":"uX6U","./treant_protector.webp":"zCgi","./troll_warlord.webp":"AsYu","./tusk.webp":"IyyZ","./underlord.webp":"nHni","./undying.webp":"PvgO","./ursa.webp":"oKtZ","./vengeful_spirit.webp":"PcF7","./venomancer.webp":"tfyX","./viper.webp":"ASbI","./visage.webp":"uaQC","./void_spirit.webp":"qqs0","./tiny.webp":"RQ44","./warlock.webp":"C4Py","./windranger.webp":"xSHj","./weaver.webp":"t5Au","./winter_wyvern.webp":"VhbW","./witch_doctor.webp":"EUpd","./wraith_king.webp":"Dkw8","./zeus.webp":"fNp3"}],"GN7c":[function(require,module,exports) {
"use strict";function e(e){return e.split(" ").join("_").split("'").join("").toLowerCase()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"rqmb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=require("../../../../data/index"),a=t(require("../../../img/heroes/*.webp")),n=t(require("../../utils/stringToImageName"));function t(e){return e&&e.__esModule?e:{default:e}}function o(){e.heroesList.forEach(function(e){document.querySelector('[data-group="'.concat(e.group,'"]')).insertAdjacentHTML("beforeend",'<div \n        class="c-gallery__heroes" \n        data-heroes-group="'.concat(e.group,'" \n        data-heroes-faction="').concat(e.faction,'">\n      </div>')),e.heroes.forEach(function(t){var o=t.name,r=document.querySelector('[data-heroes-group="'.concat(e.group,'"][data-heroes-faction="').concat(e.faction,'"]')),c=(0,n.default)(o),i=a.default[c];r.insertAdjacentHTML("beforeend",'<div \n          class="c-gallery__hero" \n          data-hero="'.concat(t.name,'"\n          data-selection="">\n            <img \n              src="').concat(i,'" \n              class="c-gallery__hero-img" \n              draggable="false"\n              alt="').concat(t.name,'" \n              title="').concat(t.name,'">\n            </img>\n        </div>'))})})}
},{"../../../../data/index":"Tn6r","../../../img/heroes/*.webp":"LrWO","../../utils/stringToImageName":"GN7c"}],"RfyW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=require("../../../data/index");function r(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.heroesList.forEach(function(e){e.heroes.forEach(function(e){r.push(e)})}),r}
},{"../../../data/index":"Tn6r"}],"ZgQm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("../../utils/getHeroesArray"));function t(e){return e&&e.__esModule?e:{default:e}}function r(){var t=document.querySelector("[data-search-hero-list]");(0,e.default)().map(function(e){return e.name}).sort().forEach(function(e){t.insertAdjacentHTML("beforeend",'<option value="'.concat(e,'">'))})}
},{"../../utils/getHeroesArray":"RfyW"}],"Wy7x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("../../../../data/index");function t(){var t=document.querySelector("[data-filter-heroes-list]");e.rolesList.roles.sort(),e.rolesList.roles.forEach(function(e){t.insertAdjacentHTML("beforeend",'<option value="'.concat(e,'">'))})}
},{"../../../../data/index":"Tn6r"}],"ZRAe":[function(require,module,exports) {
"use strict";function e(){screen.width>767?document.querySelector("[data-random-settings]").insertAdjacentHTML("afterbegin",'<ul class="c-settings__tag h-hidden" data-tags-container></ul>'):document.querySelector("[data-random-ctn]").insertAdjacentHTML("afterbegin",'<ul class="c-settings__tag h-hidden" data-tags-container></ul>')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"tXAF":[function(require,module,exports) {
"use strict";function e(e){e.forEach(function(e){e.classList.add("h-mobile-off")})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"t6sL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=o(require("../../utils/hideNodes"));function o(e){return e&&e.__esModule?e:{default:e}}function t(o,t){(0,e.default)(o),console.log(o,t),o[t].classList.remove("h-mobile-off")}
},{"../../utils/hideNodes":"tXAF"}],"VinY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=t(require("../slide/changeSlide"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){if(screen.width<767){var t=document.querySelectorAll("[data-group-container]"),n=document.querySelectorAll("[data-group]");(0,e.default)(t,0),n.forEach(function(e){e.insertAdjacentHTML("afterbegin",'<div class="c-gallery_slide-button-container">\n        <button class="c-gallery_slide-button -previus" alt="Previus" data-button-gallery-previus>\n          Previus\n        /button>\n        <button class="c-gallery_slide-button -next" alt="Next" data-button-gallery-next>\n          Next\n        </button>\n      </div>')});var l=document.querySelectorAll("[data-button-gallery-next]"),r=document.querySelectorAll("[data-button-gallery-previus]"),u=0;r.forEach(function(n){n.addEventListener("click",function(){(u-=1)<0&&(u=t.length-1),(0,e.default)(t,u)})}),l.forEach(function(n){n.addEventListener("click",function(){(u+=1)>=t.length&&(u=0),(0,e.default)(t,u)})})}}
},{"../slide/changeSlide":"t6sL"}],"gZll":[function(require,module,exports) {
"use strict";function e(e){var t=document.querySelector("[data-random-quantity-input]");t.addEventListener("change",function(){var a=e.map(function(e){return e.name}).length;t.max=a,t.value<1&&(t.value=1),t.value>a&&(t.value=a)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"X7TE":[function(require,module,exports) {
"use strict";function e(){var e=screen.width,t=document.querySelector("[data-random-quantity-input]");e<767&&(t.placeholder="Random Quantity")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"ThG6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.states=void 0;var e={selected:"-selected",excluded:"-excluded",notSelected:"-notSelected"};exports.states=e;
},{}],"wmdy":[function(require,module,exports) {
"use strict";function e(e){var r=document.querySelector("[data-random-settings]"),s=document.querySelector("[data-error-message]");s&&s.remove(),r.insertAdjacentHTML("beforeend",'<div class="o-error" data-error-message>\n      <span class="o-error__message">\n        '.concat(e,"\n      </span>\n    <div>"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"xL3e":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector("[data-error-message]");e&&e.remove()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"agcN":[function(require,module,exports) {
"use strict";function e(){document.querySelectorAll("[data-filter-input]").forEach(function(e){e.value=""})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Zuo8":[function(require,module,exports) {
"use strict";function e(e){e.splice(0,e.length)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"GUhJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=t(require("../../utils/getHeroesArray")),r=require("../../../../data/index");function t(e){return e&&e.__esModule?e:{default:e}}function u(t){return(0,e.default)().map(function(e){return e.name}).sort().includes(t)?"name":!!Object.values(r.rolesList)[0].includes(t)&&"roles"}
},{"../../utils/getHeroesArray":"RfyW","../../../../data/index":"Tn6r"}],"gEQV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=t(require("../returnFilterType")),r=t(require("../../../utils/clearArray")),u=t(require("../../../utils/getHeroesArray"));function t(e){return e&&e.__esModule?e:{default:e}}function l(t,l){var n=(0,e.default)(l.value);if("roles"===n){var i=t.filter(function(e){return e[n].includes(l.value)});(0,r.default)(t),i.forEach(function(e){return t.push(e)})}else if("name"===n){var a=[];if((0,u.default)(a),0===t.filter(function(e){return e[n].includes(l.value)}).length){var f=a.filter(function(e){return e[n].includes(l.value)});t.push(f[0])}else if(t.length===a.length){(0,r.default)(t);var s=a.filter(function(e){return e[n].includes(l.value)});t.push(s[0])}}}
},{"../returnFilterType":"GUhJ","../../../utils/clearArray":"Zuo8","../../../utils/getHeroesArray":"RfyW"}],"PX0l":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=u(require("../returnFilterType")),r=u(require("../../../utils/clearArray"));function u(e){return e&&e.__esModule?e:{default:e}}function t(u,t){var l=(0,e.default)(t.value);if("roles"===l){var n=u.filter(function(e){return!e[l].includes(t.value)});(0,r.default)(u),n.forEach(function(e){u.push(e)})}else if("name"===l){var a=u.filter(function(e){return!e[l].includes(t.value)});(0,r.default)(u),a.forEach(function(e){u.push(e)})}}
},{"../returnFilterType":"GUhJ","../../../utils/clearArray":"Zuo8"}],"EnPO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=require("../heroesStates/states"),t=s(require("../../utils/getHeroesArray"));function s(e){return e&&e.__esModule?e:{default:e}}function r(){(0,t.default)().forEach(function(t){var s=document.querySelector('[data-hero="'.concat(t.name,'"]'));s.classList.remove(e.states.excluded),s.classList.remove(e.states.notSelected),s.classList.remove(e.states.selected),s.dataset.selection=""})}
},{"../heroesStates/states":"ThG6","../../utils/getHeroesArray":"RfyW"}],"mQoL":[function(require,module,exports) {
"use strict";function e(e,t){e.getAttribute("data-selection")===t?e.dataset.selection="":e.dataset.selection=t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"c9qZ":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelectorAll('[data-selection=""]');document.querySelector('[data-selection="active"]')?e.forEach(function(e){e.classList.add("-notSelected")}):e.forEach(function(e){e.classList.remove("-notSelected")})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"YXZn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=s(require("./checkState")),t=s(require("./deselectHeroes"));function s(e){return e&&e.__esModule?e:{default:e}}function r(s,r){var l=r.selected,c=r.excluded,u=r.notSelected;s.classList.remove(c),s.classList.remove(u),s.classList.toggle(l),(0,e.default)(s,"active"),(0,t.default)()}
},{"./checkState":"mQoL","./deselectHeroes":"c9qZ"}],"Xvhb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=r(require("./checkState")),t=r(require("./deselectHeroes"));function r(e){return e&&e.__esModule?e:{default:e}}function s(r,s){var u=s.selected,l=s.excluded;r.classList.remove(u),r.classList.toggle(l),(0,e.default)(r,"excluded"),(0,t.default)()}
},{"./checkState":"mQoL","./deselectHeroes":"c9qZ"}],"JRJS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=require("../heroesStates/states"),t=o(require("../heroesStates/clearStates")),r=o(require("../heroesStates/selectHero")),a=o(require("../heroesStates/excludeHero")),u=o(require("./returnFilterType"));function o(e){return e&&e.__esModule?e:{default:e}}function s(o,s){(0,t.default)(e.states),o.forEach(function(t){var a=document.querySelector('[data-hero="'.concat(t.name,'"]'));(0,r.default)(a,e.states)}),s.forEach(function(t){if("name"===(0,u.default)(t.value)&&"-remove"===t.status){var r=document.querySelector('[data-hero="'.concat(t.value,'"]'));(0,a.default)(r,e.states)}})}
},{"../heroesStates/states":"ThG6","../heroesStates/clearStates":"EnPO","../heroesStates/selectHero":"YXZn","../heroesStates/excludeHero":"Xvhb","./returnFilterType":"GUhJ"}],"fPjs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./states");function t(){document.querySelectorAll("[data-selection]").forEach(function(t){t.classList.remove(e.states.selected),t.classList.remove(e.states.excluded),t.classList.add(e.states.notSelected)})}
},{"./states":"ThG6"}],"Ef47":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=d(require("../../../utils/clearArray")),r=d(require("../../../utils/getHeroesArray")),t=d(require("./addToFiltersArray")),a=d(require("./removeFromFiltersArray")),u=d(require("../../heroesStates/clearStates")),s=d(require("../addStateToFilteredHeroes")),l=d(require("../errors/showErrorMessage")),o=d(require("../../heroesStates/deselectAllHeroes"));function d(e){return e&&e.__esModule?e:{default:e}}function i(d,i){(0,e.default)(d),(0,r.default)(d),i.forEach(function(e){"-add"===e.status?(0,t.default)(d,e):"-remove"===e.status&&(0,a.default)(d,e)}),0===i.length?(0,u.default)(d):0===d.length?((0,o.default)(),(0,l.default)("Could not find any hero with that filters")):(0,s.default)(d,i)}
},{"../../../utils/clearArray":"Zuo8","../../../utils/getHeroesArray":"RfyW","./addToFiltersArray":"gEQV","./removeFromFiltersArray":"PX0l","../../heroesStates/clearStates":"EnPO","../addStateToFilteredHeroes":"JRJS","../errors/showErrorMessage":"wmdy","../../heroesStates/deselectAllHeroes":"fPjs"}],"Q2z6":[function(require,module,exports) {
"use strict";function e(e,t){e.splice(e.findIndex(function(e){return e.value==="".concat(t)}),1)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"eV2n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=a(require("../filterSystem/errors/clearErrorMessage")),t=a(require("../filterSystem/filters/filterHeroesArray")),r=a(require("./removeTag"));function a(e){return e&&e.__esModule?e:{default:e}}function o(a,o){document.querySelectorAll("[data-tags-items-remove]").forEach(function(u){u.addEventListener("click",function(u){(0,r.default)(o,u.target.getAttribute("data-tags-items-remove")),(0,e.default)(),u.target.parentNode.remove(),(0,t.default)(a,o)})})}
},{"../filterSystem/errors/clearErrorMessage":"xL3e","../filterSystem/filters/filterHeroesArray":"Ef47","./removeTag":"Q2z6"}],"ScMJ":[function(require,module,exports) {
"use strict";function t(t){var e=document.querySelector("[data-tags-container]");t?e.classList.remove("h-hidden"):e.classList.add("h-hidden"),e.innerHTML="",t.forEach(function(t){e.insertAdjacentHTML("beforeend",'<li class="c-settings__tag-item '.concat(t.status,'">\n        <button class="c-settings__tag-icon" data-tags-items-remove="').concat(t.value,'"></button>\n        <span class="c-settings__tag-text">').concat(t.value,"</span>\n      </li>"))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"WqW6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=a(require("../filterSystem/errors/showErrorMessage")),r=a(require("../filterSystem/errors/clearErrorMessage")),t=a(require("../inputSettings/clearTextInputs")),u=a(require("./removeTagButton")),s=a(require("./printTag"));function a(e){return e&&e.__esModule?e:{default:e}}function l(a,l,i,n){0===l.filter(function(e){return e.value.includes(i)}).length?(0!==a.length&&((0,r.default)(),l.push({value:"".concat(i),status:n}),(0,s.default)(l)),(0,t.default)()):(0,e.default)("You are already using this filter"),(0,u.default)(a,l)}
},{"../filterSystem/errors/showErrorMessage":"wmdy","../filterSystem/errors/clearErrorMessage":"xL3e","../inputSettings/clearTextInputs":"agcN","./removeTagButton":"eV2n","./printTag":"ScMJ"}],"WO37":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=require("../heroesStates/states"),t=d(require("../tagSystem/addTag")),r=d(require("../tagSystem/removeTag")),a=d(require("./filters/filterHeroesArray")),u=d(require("../tagSystem/printTag"));function d(e){return e&&e.__esModule?e:{default:e}}function l(d,l){function n(e,t){return 0===e.filter(function(e){return e.value.includes(t)}).length}document.querySelectorAll("[data-hero]").forEach(function(i){i.addEventListener("click",function(){var e=i.getAttribute("data-hero");n(l,e)?((0,t.default)(d,l,e,"-add"),(0,a.default)(d,l)):((0,r.default)(l,e),(0,u.default)(l),(0,a.default)(d,l))}),i.addEventListener("contextmenu",function(f){var o=i.getAttribute("data-hero");i.classList.toggle(e.states.excluded),n(l,o)?((0,t.default)(d,l,o,"-remove"),(0,a.default)(d,l)):((0,r.default)(l,o),(0,u.default)(l),(0,a.default)(d,l))})})}
},{"../heroesStates/states":"ThG6","../tagSystem/addTag":"WqW6","../tagSystem/removeTag":"Q2z6","./filters/filterHeroesArray":"Ef47","../tagSystem/printTag":"ScMJ"}],"vkPf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("./clearArray"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r,t){(0,e.default)(r),t.forEach(function(e){r.push(e)})}
},{"./clearArray":"Zuo8"}],"sgBm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=r(require("../../utils/copyArrayElements")),t=r(require("./filters/filterHeroesArray"));function r(e){return e&&e.__esModule?e:{default:e}}function u(r,u){document.querySelectorAll("[data-filter-input]").forEach(function(a){a.addEventListener("change",function(){var l=[];(0,e.default)(l,u),l.push({value:a.value,status:"-add"}),(0,t.default)(r,l)})})}
},{"../../utils/copyArrayElements":"vkPf","./filters/filterHeroesArray":"Ef47"}],"tgD0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=a(require("../tagSystem/addTag")),r=a(require("./filters/filterHeroesArray")),t=a(require("./returnFilterType")),u=a(require("./errors/showErrorMessage"));function a(e){return e&&e.__esModule?e:{default:e}}function l(a,l){document.querySelector("[data-add-button]").addEventListener("click",function(){document.querySelectorAll("[data-filter-input]").forEach(function(d){d.value&&((0,t.default)(d.value)?((0,e.default)(a,l,d.value,"-add"),(0,r.default)(a,l)):(0,u.default)("This is not a valid filter"))})})}
},{"../tagSystem/addTag":"WqW6","./filters/filterHeroesArray":"Ef47","./returnFilterType":"GUhJ","./errors/showErrorMessage":"wmdy"}],"QpvD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=a(require("../tagSystem/addTag")),r=a(require("./filters/filterHeroesArray")),t=a(require("./returnFilterType")),u=a(require("./errors/showErrorMessage"));function a(e){return e&&e.__esModule?e:{default:e}}function l(a,l){document.querySelector("[data-remove-button]").addEventListener("click",function(){document.querySelectorAll("[data-filter-input]").forEach(function(o){o.value&&((0,t.default)(o.value)?((0,e.default)(a,l,o.value,"-remove"),(0,r.default)(a,l)):(0,u.default)("This is not a valid filter"))})})}
},{"../tagSystem/addTag":"WqW6","./filters/filterHeroesArray":"Ef47","./returnFilterType":"GUhJ","./errors/showErrorMessage":"wmdy"}],"aJVf":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector("[data-tags-container]");e.classList.add("h-hidden"),e.innerHTML=""}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"lRoG":[function(require,module,exports) {
"use strict";function e(){document.querySelector("[data-random-hero").innerHTML=""}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"EBjq":[function(require,module,exports) {
"use strict";function e(){document.querySelector("[data-random-quantity-input]").value=""}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"cpcS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d;var e=i(require("../../utils/getHeroesArray")),t=i(require("../../utils/clearArray")),r=i(require("../heroesStates/clearStates")),u=i(require("../tagSystem/clearTagContainer")),a=i(require("../randomSystem/clearRandomContainer")),n=i(require("../inputSettings/clearTextInputs")),l=i(require("../inputSettings/clearQuantityInput"));function i(e){return e&&e.__esModule?e:{default:e}}function d(i,d){document.querySelector("[data-clear-button").addEventListener("click",function(){(0,u.default)(),(0,a.default)(),(0,t.default)(i),(0,t.default)(d),(0,r.default)(),(0,l.default)(),(0,n.default)(),(0,e.default)(i)})}
},{"../../utils/getHeroesArray":"RfyW","../../utils/clearArray":"Zuo8","../heroesStates/clearStates":"EnPO","../tagSystem/clearTagContainer":"aJVf","../randomSystem/clearRandomContainer":"lRoG","../inputSettings/clearTextInputs":"agcN","../inputSettings/clearQuantityInput":"EBjq"}],"LrK8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d;var e=i(require("../../utils/getHeroesArray")),r=i(require("./addHeroToFilterArrayOnClick")),t=i(require("./inputChangeFilter")),u=i(require("./buttonAddToFiltersArray")),l=i(require("./buttonRemoveFromFiltersArray")),a=i(require("./buttonClearFiltersArray"));function i(e){return e&&e.__esModule?e:{default:e}}function d(i,d){(0,e.default)(i),(0,e.default)([]),(0,r.default)(i,d),(0,t.default)(i,d),(0,u.default)(i,d),(0,l.default)(i,d),(0,a.default)(i,d)}
},{"../../utils/getHeroesArray":"RfyW","./addHeroToFilterArrayOnClick":"WO37","./inputChangeFilter":"sgBm","./buttonAddToFiltersArray":"tgD0","./buttonRemoveFromFiltersArray":"QpvD","./buttonClearFiltersArray":"cpcS"}],"gdnn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=u(require("./clearTextInputs")),r=u(require("../filterSystem/filters/filterHeroesArray")),t=u(require("../filterSystem/errors/clearErrorMessage"));function u(e){return e&&e.__esModule?e:{default:e}}function l(u,l){var a=document.querySelectorAll("[data-filter-input]"),i=document.querySelector("[data-random-quantity-input]");a.forEach(function(a){a.addEventListener("click",function(){(0,t.default)(),(0,e.default)(),i.value="",(0,r.default)(u,l),a.value&&(a.value="",a.blur(),a.focus())})})}
},{"./clearTextInputs":"agcN","../filterSystem/filters/filterHeroesArray":"Ef47","../filterSystem/errors/clearErrorMessage":"xL3e"}],"lHzz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=n(require("../../utils/stringToImageName")),a=n(require("../../../img/heroes/*.webp")),r=n(require("./clearRandomContainer")),t=n(require("../../utils/copyArrayElements"));function n(e){return e&&e.__esModule?e:{default:e}}function o(n){var o=document.querySelector("[data-random-hero");document.querySelector("[data-random-button").addEventListener("click",function(){(0,r.default)();var d=document.querySelector("[data-random-quantity-input]").value||1,u=[];(0,t.default)(u,n);for(var c=0;c<d;c++){var l=Math.round(Math.random()*(u.length-1)),i=u.splice(l,1)[0],m=(0,e.default)(i.name);o.insertAdjacentHTML("beforeend",'<div class="c-gallery__hero -randomized" data-randomized-hero="'.concat(i.name,'">\n        <img \n          src="').concat(a.default[m],'" \n          class="c-gallery__hero-img -randomized" \n          draggable="false"\n          alt="').concat(i.name,'" \n          title="').concat(i.name,'">\n        </img>\n      </div>'))}})}
},{"../../utils/stringToImageName":"GN7c","../../../img/heroes/*.webp":"LrWO","./clearRandomContainer":"lRoG","../../utils/copyArrayElements":"vkPf"}],"adLt":[function(require,module,exports) {
"use strict";function e(){[document.querySelector("[data-heroes-gallery]"),document.querySelector("[data-random-hero]")].forEach(function(e){e.addEventListener("contextmenu",function(e){e.preventDefault()})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"d5D5":[function(require,module,exports) {
"use strict";var e=m(require("./modules/create/createHeroesGallery")),t=m(require("./modules/create/createHerosOptions")),r=m(require("./modules/create/createRolesOptions")),u=m(require("./modules/create/createTagsContainer")),l=m(require("./modules/create/mobileHeroesGallerySlider")),a=m(require("./modules/inputSettings/validateQuantity")),i=m(require("./modules/inputSettings/quantityPlaceHolderMobile")),d=m(require("./modules/filterSystem/filterSystem")),s=m(require("./modules/inputSettings/clearInputOnFocus")),o=m(require("./modules/randomSystem/randomHero")),n=m(require("./utils/preventContextMenu"));function m(e){return e&&e.__esModule?e:{default:e}}var f=[],c=[];(0,e.default)(),(0,l.default)(),(0,t.default)(),(0,r.default)(),(0,u.default)(),(0,n.default)(),(0,d.default)(f,c),(0,i.default)(),(0,a.default)(f),(0,s.default)(f,c),(0,o.default)(f);
},{"./modules/create/createHeroesGallery":"rqmb","./modules/create/createHerosOptions":"ZgQm","./modules/create/createRolesOptions":"Wy7x","./modules/create/createTagsContainer":"ZRAe","./modules/create/mobileHeroesGallerySlider":"VinY","./modules/inputSettings/validateQuantity":"gZll","./modules/inputSettings/quantityPlaceHolderMobile":"X7TE","./modules/filterSystem/filterSystem":"LrK8","./modules/inputSettings/clearInputOnFocus":"gdnn","./modules/randomSystem/randomHero":"lHzz","./utils/preventContextMenu":"adLt"}]},{},["d5D5"], null)
//# sourceMappingURL=/js.08222241.js.map