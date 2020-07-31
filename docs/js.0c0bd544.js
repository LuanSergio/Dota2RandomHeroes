// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"uhJe":[function(require,module,exports) {
module.exports = {
  "faction": "radiant",
  "group": "agility",
  "id": "3",
  "heroes": [{
    "name": "Anti-Mage",
    "id": "1",
    "roles": ["Melee", "Carry", "Escape", "Nuker", "Agility"]
  }, {
    "name": "Drow Ranger",
    "id": "2",
    "roles": ["Ranged", "Carry", "Disabler", "Pusher", "Mid", "Agility"]
  }, {
    "name": "Juggernaut",
    "id": "3",
    "roles": ["Melee", "Carry", "Pusher", "Escape", "Agility"]
  }, {
    "name": "Mirana",
    "id": "4",
    "roles": ["Ranged", "Carry", "Support", "Escape", "Nuker", "Disabler", "Mid", "Offlaner", "Agility"]
  }, {
    "name": "Morphling",
    "id": "5",
    "roles": ["Ranged", "Carry", "Escape", "Durable", "Nuker", "Disabler", "Mid", "Agility"]
  }, {
    "name": "Phantom Lancer",
    "id": "6",
    "roles": ["Melee", "Carry", "Escape", "Pusher", "Nuker", "Agility"]
  }, {
    "name": "Vengeful Spirit",
    "id": "7",
    "roles": ["Ranged", "Support", "Initiator", "Disabler", "Nuker", "Escape", "Agility"]
  }, {
    "name": "Riki",
    "id": "8",
    "roles": ["Melee", "Carry", "Escape", "Disabler", "Agility"]
  }, {
    "name": "Sniper",
    "id": "9",
    "roles": ["Ranged", "Carry", "Nuker", "Mid", "Agility"]
  }, {
    "name": "Templar Assassin",
    "id": "10",
    "roles": ["Ranged", "Carry", "Escape", "Mid", "Agility"]
  }, {
    "name": "Luna",
    "id": "11",
    "roles": ["Ranged", "Carry", "Nuker", "Pusher", "Mid", "Agility"]
  }, {
    "name": "Bounty Hunter",
    "id": "12",
    "roles": ["Melee", "Escape", "Nuker", "Offlaner", "Agility"]
  }, {
    "name": "Ursa",
    "id": "13",
    "roles": ["Melee", "Carry", "Jungler", "Durable", "Disabler", "Agility"]
  }, {
    "name": "Gyrocopter",
    "id": "14",
    "roles": ["Ranged", "Carry", "Nuker", "Disabler", "Mid", "Agility"]
  }, {
    "name": "Lone Druid",
    "id": "15",
    "roles": ["Ranged", "Carry", "Pusher", "Jungler", "Durable", "Agility"]
  }, {
    "name": "Naga Siren",
    "id": "16",
    "roles": ["Melee", "Carry", "Support", "Pusher", "Disabler", "Initiator", "Escape", "Agility"]
  }, {
    "name": "Troll Warlord",
    "id": "17",
    "roles": ["Ranged", "Carry", "Pusher", "Disabler", "Durable", "Agility"]
  }, {
    "name": "Ember Spirit",
    "id": "18",
    "roles": ["Melee", "Carry", "Escape", "Nuker", "Disabler", "Initiator", "Mid", "Agility"]
  }, {
    "name": "Monkey King",
    "id": "19",
    "roles": ["Melee", "Carry", "Escape", "Disabler", "Initiator", "Agility"]
  }, {
    "name": "Pangolier",
    "id": "20",
    "roles": ["Melee", "Carry", "Nuker", "Disabler", "Durable", "Escape", "Initiator", "Offlaner", "Agility"]
  }]
};
},{}],"Vpt4":[function(require,module,exports) {
module.exports = {
  "faction": "radiant",
  "group": "intelligence",
  "id": "5",
  "heroes": [{
    "name": "Crystal Maiden",
    "id": "1",
    "roles": ["Ranged", "Support", "Disabler", "Nuker", "Jungler", "Intelligence"]
  }, {
    "name": "Puck",
    "id": "2",
    "roles": ["Ranged", "Initiator", "Disabler", "Escape", "Nuker", "Mid", "Intelligence"]
  }, {
    "name": "Storm Spirit",
    "id": "3",
    "roles": ["Ranged", "Carry", "Escape", "Nuker", "Initiator", "Disabler", "Mid", "Intelligence"]
  }, {
    "name": "Windranger",
    "id": "4",
    "roles": ["Ranged", "Carry", "Support", "Disabler", "Escape", "Nuker", "Offlaner", "Mid", "Intelligence"]
  }, {
    "name": "Zeus",
    "id": "5",
    "roles": ["Ranged", "Nuker", "Mid", "Intelligence"]
  }, {
    "name": "Lina",
    "id": "6",
    "roles": ["Ranged", "Support", "Carry", "Nuker", "Disabler", "Mid", "Intelligence"]
  }, {
    "name": "Shadow Shaman",
    "id": "7",
    "roles": ["Ranged", "Support", "Pusher", "Disabler", "Nuker", "Initiator", "Intelligence"]
  }, {
    "name": "Tinker",
    "id": "8",
    "roles": ["Ranged", "Carry", "Nuker", "Pusher", "Mid", "Intelligence"]
  }, {
    "name": "Nature's Prophet",
    "id": "9",
    "roles": ["Ranged", "Carry", "Jungler", "Pusher", "Escape", "Nuker", "Intelligence"]
  }, {
    "name": "Enchantress",
    "id": "10",
    "roles": ["Ranged", "Support", "Jungler", "Pusher", "Durable", "Disabler", "Intelligence"]
  }, {
    "name": "Jakiro",
    "id": "11",
    "roles": ["Ranged", "Support", "Nuker", "Pusher", "Disable", "Intelligence"]
  }, {
    "name": "Chen",
    "id": "12",
    "roles": ["Ranged", "Support", "Jungler", "Pusher", "Intelligence"]
  }, {
    "name": "Silencer",
    "id": "13",
    "roles": ["Ranged", "Carry", "Support", "Disabler", "Initiator", "Nuker", "Mid", "Intelligence"]
  }, {
    "name": "Ogre Magi",
    "id": "14",
    "roles": ["Melee", "Support", "Nuker", "Disabler", "Durable", "Initiator", "Intelligence"]
  }, {
    "name": "Rubick",
    "id": "15",
    "roles": ["Ranged", "Support", "Disabler", "Nuker", "Intelligence"]
  }, {
    "name": "Disruptor",
    "id": "16",
    "roles": ["Ranged", "Support", "Disabler", "Nuker", "Initiator", "Intelligence"]
  }, {
    "name": "Keeper of the Light",
    "id": "17",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Jungler", "Intelligence"]
  }, {
    "name": "Skywrath Mage",
    "id": "18",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Mid", "Intelligence"]
  }, {
    "name": "Oracle",
    "id": "19",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Escape", "Intelligence"]
  }, {
    "name": "Techies",
    "id": "20",
    "roles": ["Ranged", "Nuker", "Disabler", "Offlaner", "Intelligence"]
  }, {
    "name": "Dark Willow",
    "id": "21",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Escape", "Intelligence"]
  }, {
    "name": "Void Spirit",
    "id": "22",
    "roles": ["Melee", "Carry", "Escape", "Nuker", "Disabler", "Mid", "Intelligence"]
  }]
};
},{}],"O9Fv":[function(require,module,exports) {
module.exports = {
  "faction": "radiant",
  "group": "strength",
  "id": "1",
  "heroes": [{
    "name": "Earthshaker",
    "id": "1",
    "roles": ["Melee", "Support", "Initiator", "Disabler", "Nuker", "Strength"]
  }, {
    "name": "Sven",
    "id": "2",
    "roles": ["Melee", "Carry", "Disabler", "Initiator", "Durable", "Nuker", "Strength"]
  }, {
    "name": "Tiny",
    "id": "3",
    "roles": ["Melee", "Carry", "Nuker", "Pusher", "Initiator", "Durable", "Disabler", "Offlaner", "Mid", "Strength"]
  }, {
    "name": "Kunkka",
    "id": "5",
    "roles": ["Melee", "Carry", "Support", "Disabler", "Initiator", "Durable", "Nuker", "Offlaner", "Mid", "Strength"]
  }, {
    "name": "Beastmaster",
    "id": "6",
    "roles": ["Melee", "Initiator", "Disabler", "Durable", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Dragon Knight",
    "id": "7",
    "roles": ["Melee", "Carry", "Pusher", "Durable", "Disabler", "Initiator", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Clockwerk",
    "id": "8",
    "roles": ["Melee", "Initiator", "Disabler", "Durable", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Omniknight",
    "id": "9",
    "roles": ["Melee", "Support", "Durable", "Nuker", "Strength"]
  }, {
    "name": "Huskar",
    "id": "10",
    "roles": ["Ranged", "Carry", "Durable", "Initiator", "Mid", "Strength"]
  }, {
    "name": "Alchemist",
    "id": "11",
    "roles": ["Melee", "Carry", "Support", "Durable", "Disabler", "Initiator", "Nuker", "Mid", "Strength"]
  }, {
    "name": "Brewmaster",
    "id": "12",
    "roles": ["Melee", "Carry", "Initiator", "Durable", "Disabler", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Treant Protector",
    "id": "13",
    "roles": ["Melee", "Support", "Initiator", "Durable", "Disabler", "Escape", "Strength"]
  }, {
    "name": "Io",
    "id": "14",
    "roles": ["Ranged", "Support", "Escape", "Nuker", "Strength"]
  }, {
    "name": "Centaur Warrunner",
    "id": "15",
    "roles": ["Melee", "Durable", "Initiator", "Disabler", "Nuker", "Escape", "Offlaner", "Strength"]
  }, {
    "name": "Timbersaw",
    "id": "16",
    "roles": ["Melee", "Nuker", "Durable", "Escape", "Offlaner", "Strength"]
  }, {
    "name": "Bristleback",
    "id": "17",
    "roles": ["Melee", "Carry", "Durable", "Initiator", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Tusk",
    "id": "18",
    "roles": ["Melee", "Initiator", "Disabler", "Nuker", "Strength"]
  }, {
    "name": "Elder Titan",
    "id": "19",
    "roles": ["Melee", "Initiator", "Disabler", "Nuker", "Durable", "Offlaner", "Strength"]
  }, {
    "name": "Legion Commander",
    "id": "20",
    "roles": ["Melee", "Carry", "Disabler", "Initiator", "Durable", "Nuker", "Strength"]
  }, {
    "name": "Earth Spirit",
    "id": "21",
    "roles": ["Melee", "Nuker", "Escape", "Disabler", "Initiator", "Durable", "Offlaner", "Strength"]
  }, {
    "name": "Phoenix",
    "id": "22",
    "roles": ["Ranged", "Support", "Nuker", "Initiator", "Escape", "Disabler", "Strength"]
  }, {
    "name": "Mars",
    "id": "23",
    "roles": ["Melee", "Carry", "Initiator", "Disabler", "Durable", "Offlaner", "Strength"]
  }, {
    "name": "Snapfire",
    "id": "24",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Escape", "Offlaner", "Strength"]
  }]
};
},{}],"Y6a8":[function(require,module,exports) {
module.exports = {
  "faction": "dire",
  "group": "agility",
  "id": "4",
  "heroes": [{
    "name": "Bloodseeker",
    "id": "1",
    "roles": ["Melee", "Carry", "Disabler", "Jungler", "Nuker", "Initiator", "Offlaner", "Agility"]
  }, {
    "name": "Shadow Fiend",
    "id": "2",
    "roles": ["Ranged", "Carry", "Nuker", "Mid", "Agility"]
  }, {
    "name": "Razor",
    "id": "3",
    "roles": ["Ranged", "Carry", "Durable", "Nuker", "Pusher", "Mid", "Agility"]
  }, {
    "name": "Venomancer",
    "id": "4",
    "roles": ["Ranged", "Support", "Nuker", "Initiator", "Pusher", "Disabler", "Agility"]
  }, {
    "name": "Faceless Void",
    "id": "5",
    "roles": ["Melee", "Carry", "Initiator", "Disabler", "Escape", "Durable", "Agility"]
  }, {
    "name": "Phantom Assassin",
    "id": "6",
    "roles": ["Melee", "Carry", "Escape", "Agility"]
  }, {
    "name": "Viper",
    "id": "7",
    "roles": ["Ranged", "Carry", "Durable", "Initiator", "Disabler", "Mid", "Agility"]
  }, {
    "name": "Clinkz",
    "id": "8",
    "roles": ["Ranged", "Carry", "Escape", "Pusher", "Mid", "Agility"]
  }, {
    "name": "Broodmother",
    "id": "9",
    "roles": ["Melee", "Carry", "Pusher", "Escape", "Nuker", "Offlaner", "Agility"]
  }, {
    "name": "Weaver",
    "id": "10",
    "roles": ["Ranged", "Carry", "Escape", "Mid", "Agility"]
  }, {
    "name": "Spectre",
    "id": "11",
    "roles": ["Melee", "Carry", "Durable", "Escape", "Agility"]
  }, {
    "name": "Meepo",
    "id": "12",
    "roles": ["Melee", "Carry", "Escape", "Nuker", "Disabler", "Initiator", "Pusher", "Mid", "Agility"]
  }, {
    "name": "Nyx Assassin",
    "id": "13",
    "roles": ["Melee", "Disabler", "Nuker", "Initiator", "Escape", "Offlaner", "Agility"]
  }, {
    "name": "Slark",
    "id": "14",
    "roles": ["Melee", "Carry", "Escape", "Disabler", "Nuker", "Agility"]
  }, {
    "name": "Medusa",
    "id": "15",
    "roles": ["Ranged", "Carry", "Disabler", "Durable", "Mid", "Agility"]
  }, {
    "name": "Terrorblade",
    "id": "16",
    "roles": ["Melee", "Carry", "Pusher", "Nuker", "Agility"]
  }, {
    "name": "Arc Warden",
    "id": "17",
    "roles": ["Ranged", "Carry", "Escape", "Nuker", "Mid", "Agility"]
  }]
};
},{}],"FpRU":[function(require,module,exports) {
module.exports = {
  "faction": "dire",
  "group": "intelligence",
  "id": "6",
  "heroes": [{
    "name": "Bane",
    "id": "1",
    "roles": ["Ranged", "Support", "Disabler", "Nuker", "Durable", "Intelligence"]
  }, {
    "name": "Lich",
    "id": "2",
    "roles": ["Ranged", "Support", "Nuker", "Intelligence"]
  }, {
    "name": "Lion",
    "id": "3",
    "roles": ["Ranged", "Support", "Disabler", "Nuker", "Initiator", "Intelligence"]
  }, {
    "name": "Witch Doctor",
    "id": "4",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Intelligence"]
  }, {
    "name": "Enigma",
    "id": "5",
    "roles": ["Ranged", "Disabler", "Jungler", "Initiator", "Pusher", "Intelligence"]
  }, {
    "name": "Necrophos",
    "id": "6",
    "roles": ["Ranged", "Carry", "Nuker", "Durable", "Disabler", "Mid", "Intelligence"]
  }, {
    "name": "Warlock",
    "id": "7",
    "roles": ["Ranged", "Support", "Initiator", "Disabler", "Intelligence"]
  }, {
    "name": "Queen of Pain",
    "id": "8",
    "roles": ["Ranged", "Carry", "Nuker", "Escape", "Mid", "Intelligence"]
  }, {
    "name": "Death Prophet",
    "id": "9",
    "roles": ["Ranged", "Carry", "Pusher", "Nuker", "Disabler", "Mid", "Intelligence"]
  }, {
    "name": "Pugna",
    "id": "10",
    "roles": ["Ranged", "Nuker", "Pusher", "Mid", "Intelligence"]
  }, {
    "name": "Dazzle",
    "id": "11",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Intelligence"]
  }, {
    "name": "Leshrac",
    "id": "12",
    "roles": ["Ranged", "Carry", "Support", "Nuker", "Pusher", "Disabler", "Mid", "Intelligence"]
  }, {
    "name": "Dark Seer",
    "id": "13",
    "roles": ["Melee", "Initiator", "Jungler", "Escape", "Disabler", "Offlaner", "Intelligence"]
  }, {
    "name": "Batrider",
    "id": "14",
    "roles": ["Ranged", "Initiator", "Jungler", "Disabler", "Escape", "Offlaner", "Intelligence"]
  }, {
    "name": "Ancient Apparition",
    "id": "15",
    "roles": ["Ranged", "Support", "Disabler", "Nuker", "Intelligence"]
  }, {
    "name": "Invoker",
    "id": "16",
    "roles": ["Ranged", "Carry", "Nuker", "Disabler", "Escape", "Pusher", "Mid", "Intelligence"]
  }, {
    "name": "Outworld Devourer",
    "id": "17",
    "roles": ["Ranged", "Carry", "Nuker", "Disabler", "Mid", "Intelligence"]
  }, {
    "name": "Shadow Demon",
    "id": "19",
    "roles": ["Ranged", "Support", "Disabler", "Initiator", "Nuker", "Intelligence"]
  }, {
    "name": "Visage",
    "id": "18",
    "roles": ["Ranged", "Support", "Nuker", "Durable", "Disabler", "Pusher", "Intelligence"]
  }, {
    "name": "Winter Wyvern",
    "id": "20",
    "roles": ["Ranged", "Support", "Disabler", "Nuker", "Intelligence"]
  }, {
    "name": "Grimstroke",
    "id": "21",
    "roles": ["Ranged", "Support", "Nuker", "Disabler", "Escape", "Intelligence"]
  }]
};
},{}],"Gv9Z":[function(require,module,exports) {
module.exports = {
  "faction": "dire",
  "group": "strength",
  "id": "2",
  "heroes": [{
    "name": "Axe",
    "id": "1",
    "roles": ["Melee", "Initiator", "Durable", "Disabler", "Jungler", "Offlaner", "Strength"]
  }, {
    "name": "Pudge",
    "id": "2",
    "roles": ["Melee", "Disabler", "Initiator", "Durable", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Sand King",
    "id": "3",
    "roles": ["Melee", "Initiator", "Disabler", "Support", "Nuker", "Escape", "Jungler", "Offlaner", "Strength"]
  }, {
    "name": "Slardar",
    "id": "5",
    "roles": ["Melee", "Carry", "Durable", "Initiator", "Disabler", "Escape", "Offlaner", "Strength"]
  }, {
    "name": "Tidehunter",
    "id": "6",
    "roles": ["Melee", "Initiator", "Durable", "Disabler", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Wraith King",
    "id": "7",
    "roles": ["Melee", "Carry", "Support", "Durable", "Disabler", "Initiator", "Offlaner", "Strength"]
  }, {
    "name": "Lifestealer",
    "id": "8",
    "roles": ["Melee", "Carry", "Durable", "Jungler", "Escape", "Disabler", "Strength"]
  }, {
    "name": "Night Stalker",
    "id": "9",
    "roles": ["Melee", "Carry", "Initiator", "Durable", "Disabler", "Nuker", "Mid", "Strength"]
  }, {
    "name": "Doom",
    "id": "10",
    "roles": ["Melee", "Carry", "Disabler", "Initiator", "Durable", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Spirit Breaker",
    "id": "11",
    "roles": ["Melee", "Carry", "Initiator", "Disabler", "Durable", "Escape", "Offlaner", "Strength"]
  }, {
    "name": "Lycan",
    "id": "12",
    "roles": ["Melee", "Carry", "Pusher", "Jungler", "Durable", "Escape", "Strength"]
  }, {
    "name": "Chaos Knight",
    "id": "13",
    "roles": ["Melee", "Carry", "Disabler", "Durable", "Pusher", "Initiator", "Offlaner", "Strength"]
  }, {
    "name": "Undying",
    "id": "14",
    "roles": ["Melee", "Support", "Durable", "Disabler", "Nuker", "Offlaner", "Strength"]
  }, {
    "name": "Magnus",
    "id": "15",
    "roles": ["Melee", "Initiator", "Disabler", "Nuker", "Escape", "Mid", "Offlaner", "Strength"]
  }, {
    "name": "Abaddon",
    "id": "16",
    "roles": ["Melee", "Support", "Carry", "Durable", "Offlaner", "Strength"]
  }, {
    "name": "Underlord",
    "id": "17",
    "roles": ["Melee", "Support", "Nuker", "Disabler", "Durable", "Escape", "Offlaner", "Strength"]
  }]
};
},{}],"xgpv":[function(require,module,exports) {
module.exports = {
  "roles": ["Melee", "Ranged", "Carry", "Support", "Mid", "Offlaner", "Durable", "Initiator", "Nuker", "Disabler", "Pusher", "Escape", "Jungler", "Strength", "Agility", "Intelligence"]
};
},{}],"Tn6r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rolesList = exports.heroesList = void 0;

var radiantAgi = _interopRequireWildcard(require("./heroes/radiant_agi.json"));

var radiantInt = _interopRequireWildcard(require("./heroes/radiant_int.json"));

var radiantStr = _interopRequireWildcard(require("./heroes/radiant_str.json"));

var direAgi = _interopRequireWildcard(require("./heroes/dire_agi.json"));

var direInt = _interopRequireWildcard(require("./heroes/dire_int.json"));

var direStr = _interopRequireWildcard(require("./heroes/dire_str.json"));

var roles = _interopRequireWildcard(require("./roles/roles.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// export const heroes = require('./radiant-str.json');
var heroesList = [radiantStr, radiantAgi, radiantInt, direStr, direAgi, direInt];
exports.heroesList = heroesList;
var rolesList = roles;
exports.rolesList = rolesList;
},{"./heroes/radiant_agi.json":"uhJe","./heroes/radiant_int.json":"Vpt4","./heroes/radiant_str.json":"O9Fv","./heroes/dire_agi.json":"Y6a8","./heroes/dire_int.json":"FpRU","./heroes/dire_str.json":"Gv9Z","./roles/roles.json":"xgpv"}],"iHz2":[function(require,module,exports) {
module.exports = "abaddon.6ca5a3ef.webp";
},{}],"CCII":[function(require,module,exports) {
module.exports = "alchemist.0b786fdb.webp";
},{}],"xGY6":[function(require,module,exports) {
module.exports = "ancient_apparition.4a85518e.webp";
},{}],"cgy5":[function(require,module,exports) {
module.exports = "anti-mage.6f044c4d.webp";
},{}],"xiDD":[function(require,module,exports) {
module.exports = "arc_warden.6d00e358.webp";
},{}],"d0x8":[function(require,module,exports) {
module.exports = "axe.7b73a3a0.webp";
},{}],"iRlE":[function(require,module,exports) {
module.exports = "bane.41fe1312.webp";
},{}],"zAJl":[function(require,module,exports) {
module.exports = "batrider.6ff1acc7.webp";
},{}],"XYW2":[function(require,module,exports) {
module.exports = "beastmaster.f4db1111.webp";
},{}],"Ctux":[function(require,module,exports) {
module.exports = "bloodseeker.1a3cedbd.webp";
},{}],"b5w1":[function(require,module,exports) {
module.exports = "bounty_hunter.507c3ca6.webp";
},{}],"cVip":[function(require,module,exports) {
module.exports = "brewmaster.6fcebe37.webp";
},{}],"cDv0":[function(require,module,exports) {
module.exports = "bristleback.8a1c69ff.webp";
},{}],"axbd":[function(require,module,exports) {
module.exports = "broodmother.16b59620.webp";
},{}],"Oyb1":[function(require,module,exports) {
module.exports = "centaur_warrunner.5b6c1590.webp";
},{}],"G1nU":[function(require,module,exports) {
module.exports = "chaos_knight.4d80ef92.webp";
},{}],"x6ih":[function(require,module,exports) {
module.exports = "chen.8d595751.webp";
},{}],"zWsm":[function(require,module,exports) {
module.exports = "clinkz.3b45b795.webp";
},{}],"v6KW":[function(require,module,exports) {
module.exports = "clockwerk.3d6cc76f.webp";
},{}],"fWn8":[function(require,module,exports) {
module.exports = "crystal_maiden.b9b032f9.webp";
},{}],"YwWY":[function(require,module,exports) {
module.exports = "dark_seer.f3701bfe.webp";
},{}],"byop":[function(require,module,exports) {
module.exports = "dark_willow.791445f0.webp";
},{}],"wnlN":[function(require,module,exports) {
module.exports = "dazzle.04d12ca5.webp";
},{}],"lKC0":[function(require,module,exports) {
module.exports = "death_prophet.c5ff5d6a.webp";
},{}],"zhFR":[function(require,module,exports) {
module.exports = "disruptor.e91d4f8f.webp";
},{}],"cA97":[function(require,module,exports) {
module.exports = "doom.82f73dbc.webp";
},{}],"UFlA":[function(require,module,exports) {
module.exports = "dragon_knight.b0b09c7c.webp";
},{}],"QTJJ":[function(require,module,exports) {
module.exports = "drow_ranger.4c6b5014.webp";
},{}],"tLe7":[function(require,module,exports) {
module.exports = "earth_spirit.f44de297.webp";
},{}],"JSmD":[function(require,module,exports) {
module.exports = "earthshaker.4f336b37.webp";
},{}],"k4xe":[function(require,module,exports) {
module.exports = "elder_titan.40d4d119.webp";
},{}],"jd2K":[function(require,module,exports) {
module.exports = "ember_spirit.5fa2103a.webp";
},{}],"PtyZ":[function(require,module,exports) {
module.exports = "enchantress.7509e1f2.webp";
},{}],"lr2x":[function(require,module,exports) {
module.exports = "enigma.bb0592ab.webp";
},{}],"cIE1":[function(require,module,exports) {
module.exports = "faceless_void.c442ca42.webp";
},{}],"e0ev":[function(require,module,exports) {
module.exports = "grimstroke.f1cc1f05.webp";
},{}],"nJcy":[function(require,module,exports) {
module.exports = "gyrocopter.a4b70d5b.webp";
},{}],"hu5j":[function(require,module,exports) {
module.exports = "huskar.ef0b492e.webp";
},{}],"QWIm":[function(require,module,exports) {
module.exports = "invoker.90a04db4.webp";
},{}],"sVGf":[function(require,module,exports) {
module.exports = "io.8aca2d3b.webp";
},{}],"Xcqp":[function(require,module,exports) {
module.exports = "jakiro.6bc206fd.webp";
},{}],"TkiG":[function(require,module,exports) {
module.exports = "juggernaut.379c245e.webp";
},{}],"o2PY":[function(require,module,exports) {
module.exports = "keeper_of_the_light.f15dd91d.webp";
},{}],"Tt5N":[function(require,module,exports) {
module.exports = "kunkka.864103ed.webp";
},{}],"A7oE":[function(require,module,exports) {
module.exports = "legion_commander.69315f9d.webp";
},{}],"SilE":[function(require,module,exports) {
module.exports = "lich.65290cb6.webp";
},{}],"xidF":[function(require,module,exports) {
module.exports = "lifestealer.12c1777c.webp";
},{}],"PxtD":[function(require,module,exports) {
module.exports = "lina.21c56b6f.webp";
},{}],"iNB4":[function(require,module,exports) {
module.exports = "leshrac.1ba920b0.webp";
},{}],"nn73":[function(require,module,exports) {
module.exports = "lion.ab1b2944.webp";
},{}],"qQCg":[function(require,module,exports) {
module.exports = "lone_druid.5aefc3e2.webp";
},{}],"mlPM":[function(require,module,exports) {
module.exports = "luna.2ce31ec1.webp";
},{}],"LLFb":[function(require,module,exports) {
module.exports = "magnus.b3d993c2.webp";
},{}],"rHtz":[function(require,module,exports) {
module.exports = "lycan.ce565d9a.webp";
},{}],"eZfQ":[function(require,module,exports) {
module.exports = "mars.4e2a30a1.webp";
},{}],"yowN":[function(require,module,exports) {
module.exports = "medusa.1b27a746.webp";
},{}],"kuWv":[function(require,module,exports) {
module.exports = "mirana.25437bd6.webp";
},{}],"V1gw":[function(require,module,exports) {
module.exports = "meepo.111cf45d.webp";
},{}],"tzoh":[function(require,module,exports) {
module.exports = "morphling.a97636f2.webp";
},{}],"DT20":[function(require,module,exports) {
module.exports = "naga_siren.bea32a88.webp";
},{}],"BYbr":[function(require,module,exports) {
module.exports = "natures_prophet.3631f23b.webp";
},{}],"oK1X":[function(require,module,exports) {
module.exports = "necrophos.a8462f52.webp";
},{}],"m4XP":[function(require,module,exports) {
module.exports = "monkey_king.0336f143.webp";
},{}],"BJwH":[function(require,module,exports) {
module.exports = "nyx_assassin.69df055c.webp";
},{}],"oAiJ":[function(require,module,exports) {
module.exports = "night_stalker.e0611af8.webp";
},{}],"wAlt":[function(require,module,exports) {
module.exports = "omniknight.a7b341bc.webp";
},{}],"GWWf":[function(require,module,exports) {
module.exports = "ogre_magi.379822de.webp";
},{}],"Agdc":[function(require,module,exports) {
module.exports = "oracle.0d1dfcf6.webp";
},{}],"BNrG":[function(require,module,exports) {
module.exports = "pangolier.bae96464.webp";
},{}],"xsbB":[function(require,module,exports) {
module.exports = "outworld_devourer.3231d655.webp";
},{}],"QW6s":[function(require,module,exports) {
module.exports = "phantom_assassin.a4802f1e.webp";
},{}],"xFFx":[function(require,module,exports) {
module.exports = "phoenix.db53469a.webp";
},{}],"qvmn":[function(require,module,exports) {
module.exports = "puck.ec4408c7.webp";
},{}],"IcaO":[function(require,module,exports) {
module.exports = "pudge.f18754cf.webp";
},{}],"Kx8C":[function(require,module,exports) {
module.exports = "pugna.483e2f9d.webp";
},{}],"oyrf":[function(require,module,exports) {
module.exports = "phantom_lancer.8c163243.webp";
},{}],"fGZn":[function(require,module,exports) {
module.exports = "queen_of_pain.8fa2d23d.webp";
},{}],"DB8H":[function(require,module,exports) {
module.exports = "razor.3d0aa26e.webp";
},{}],"Fa1w":[function(require,module,exports) {
module.exports = "riki.8cec1826.webp";
},{}],"RGuQ":[function(require,module,exports) {
module.exports = "sand_king.e96327a7.webp";
},{}],"imMv":[function(require,module,exports) {
module.exports = "shadow_demon.86dfac08.webp";
},{}],"iPoD":[function(require,module,exports) {
module.exports = "shadow_fiend.4cf584b1.webp";
},{}],"y2N2":[function(require,module,exports) {
module.exports = "shadow_shaman.9e1d0fda.webp";
},{}],"mq9v":[function(require,module,exports) {
module.exports = "rubick.a1a676f5.webp";
},{}],"IbIP":[function(require,module,exports) {
module.exports = "silencer.4b6cf0ea.webp";
},{}],"Eo3y":[function(require,module,exports) {
module.exports = "skywrath_mage.fbc1ccc9.webp";
},{}],"XfqR":[function(require,module,exports) {
module.exports = "slardar.44c6f726.webp";
},{}],"e4Dr":[function(require,module,exports) {
module.exports = "slark.ac73f32f.webp";
},{}],"J1Oz":[function(require,module,exports) {
module.exports = "snapfire.223d93a7.webp";
},{}],"K824":[function(require,module,exports) {
module.exports = "sniper.373c673e.webp";
},{}],"qubm":[function(require,module,exports) {
module.exports = "spectre.b07819ad.webp";
},{}],"XEXh":[function(require,module,exports) {
module.exports = "spirit_breaker.88ad0ff3.webp";
},{}],"WZC2":[function(require,module,exports) {
module.exports = "storm_spirit.9976587f.webp";
},{}],"ABHn":[function(require,module,exports) {
module.exports = "sven.1e321fc5.webp";
},{}],"c9cq":[function(require,module,exports) {
module.exports = "techies.f11f67b0.webp";
},{}],"XT0S":[function(require,module,exports) {
module.exports = "templar_assassin.9dac5b04.webp";
},{}],"p7XV":[function(require,module,exports) {
module.exports = "terrorblade.9b75ecfa.webp";
},{}],"HFkw":[function(require,module,exports) {
module.exports = "tidehunter.76f71f60.webp";
},{}],"hIjJ":[function(require,module,exports) {
module.exports = "timbersaw.149194e6.webp";
},{}],"uX6U":[function(require,module,exports) {
module.exports = "tinker.308c8c95.webp";
},{}],"RQ44":[function(require,module,exports) {
module.exports = "tiny.c842e643.webp";
},{}],"zCgi":[function(require,module,exports) {
module.exports = "treant_protector.fc56f7cc.webp";
},{}],"AsYu":[function(require,module,exports) {
module.exports = "troll_warlord.2a18e392.webp";
},{}],"IyyZ":[function(require,module,exports) {
module.exports = "tusk.1deb0e45.webp";
},{}],"nHni":[function(require,module,exports) {
module.exports = "underlord.f2e891b7.webp";
},{}],"PvgO":[function(require,module,exports) {
module.exports = "undying.1f6011c0.webp";
},{}],"oKtZ":[function(require,module,exports) {
module.exports = "ursa.654ee60f.webp";
},{}],"PcF7":[function(require,module,exports) {
module.exports = "vengeful_spirit.ad78b52d.webp";
},{}],"tfyX":[function(require,module,exports) {
module.exports = "venomancer.01f5626d.webp";
},{}],"ASbI":[function(require,module,exports) {
module.exports = "viper.4749dadc.webp";
},{}],"uaQC":[function(require,module,exports) {
module.exports = "visage.18111b93.webp";
},{}],"qqs0":[function(require,module,exports) {
module.exports = "void_spirit.fefa58a2.webp";
},{}],"C4Py":[function(require,module,exports) {
module.exports = "warlock.bec7d531.webp";
},{}],"t5Au":[function(require,module,exports) {
module.exports = "weaver.116f4c8c.webp";
},{}],"xSHj":[function(require,module,exports) {
module.exports = "windranger.bfa25447.webp";
},{}],"VhbW":[function(require,module,exports) {
module.exports = "winter_wyvern.2fcf5807.webp";
},{}],"EUpd":[function(require,module,exports) {
module.exports = "witch_doctor.02fba369.webp";
},{}],"Dkw8":[function(require,module,exports) {
module.exports = "wraith_king.16735465.webp";
},{}],"fNp3":[function(require,module,exports) {
module.exports = "zeus.88c492a7.webp";
},{}],"LrWO":[function(require,module,exports) {
module.exports = {
  "abaddon": require("./abaddon.webp"),
  "alchemist": require("./alchemist.webp"),
  "ancient_apparition": require("./ancient_apparition.webp"),
  "anti-mage": require("./anti-mage.webp"),
  "arc_warden": require("./arc_warden.webp"),
  "axe": require("./axe.webp"),
  "bane": require("./bane.webp"),
  "batrider": require("./batrider.webp"),
  "beastmaster": require("./beastmaster.webp"),
  "bloodseeker": require("./bloodseeker.webp"),
  "bounty_hunter": require("./bounty_hunter.webp"),
  "brewmaster": require("./brewmaster.webp"),
  "bristleback": require("./bristleback.webp"),
  "broodmother": require("./broodmother.webp"),
  "centaur_warrunner": require("./centaur_warrunner.webp"),
  "chaos_knight": require("./chaos_knight.webp"),
  "chen": require("./chen.webp"),
  "clinkz": require("./clinkz.webp"),
  "clockwerk": require("./clockwerk.webp"),
  "crystal_maiden": require("./crystal_maiden.webp"),
  "dark_seer": require("./dark_seer.webp"),
  "dark_willow": require("./dark_willow.webp"),
  "dazzle": require("./dazzle.webp"),
  "death_prophet": require("./death_prophet.webp"),
  "disruptor": require("./disruptor.webp"),
  "doom": require("./doom.webp"),
  "dragon_knight": require("./dragon_knight.webp"),
  "drow_ranger": require("./drow_ranger.webp"),
  "earth_spirit": require("./earth_spirit.webp"),
  "earthshaker": require("./earthshaker.webp"),
  "elder_titan": require("./elder_titan.webp"),
  "ember_spirit": require("./ember_spirit.webp"),
  "enchantress": require("./enchantress.webp"),
  "enigma": require("./enigma.webp"),
  "faceless_void": require("./faceless_void.webp"),
  "grimstroke": require("./grimstroke.webp"),
  "gyrocopter": require("./gyrocopter.webp"),
  "huskar": require("./huskar.webp"),
  "invoker": require("./invoker.webp"),
  "io": require("./io.webp"),
  "jakiro": require("./jakiro.webp"),
  "juggernaut": require("./juggernaut.webp"),
  "keeper_of_the_light": require("./keeper_of_the_light.webp"),
  "kunkka": require("./kunkka.webp"),
  "legion_commander": require("./legion_commander.webp"),
  "lich": require("./lich.webp"),
  "lifestealer": require("./lifestealer.webp"),
  "lina": require("./lina.webp"),
  "leshrac": require("./leshrac.webp"),
  "lion": require("./lion.webp"),
  "lone_druid": require("./lone_druid.webp"),
  "luna": require("./luna.webp"),
  "magnus": require("./magnus.webp"),
  "lycan": require("./lycan.webp"),
  "mars": require("./mars.webp"),
  "medusa": require("./medusa.webp"),
  "mirana": require("./mirana.webp"),
  "meepo": require("./meepo.webp"),
  "morphling": require("./morphling.webp"),
  "naga_siren": require("./naga_siren.webp"),
  "natures_prophet": require("./natures_prophet.webp"),
  "necrophos": require("./necrophos.webp"),
  "monkey_king": require("./monkey_king.webp"),
  "nyx_assassin": require("./nyx_assassin.webp"),
  "night_stalker": require("./night_stalker.webp"),
  "omniknight": require("./omniknight.webp"),
  "ogre_magi": require("./ogre_magi.webp"),
  "oracle": require("./oracle.webp"),
  "pangolier": require("./pangolier.webp"),
  "outworld_devourer": require("./outworld_devourer.webp"),
  "phantom_assassin": require("./phantom_assassin.webp"),
  "phoenix": require("./phoenix.webp"),
  "puck": require("./puck.webp"),
  "pudge": require("./pudge.webp"),
  "pugna": require("./pugna.webp"),
  "phantom_lancer": require("./phantom_lancer.webp"),
  "queen_of_pain": require("./queen_of_pain.webp"),
  "razor": require("./razor.webp"),
  "riki": require("./riki.webp"),
  "sand_king": require("./sand_king.webp"),
  "shadow_demon": require("./shadow_demon.webp"),
  "shadow_fiend": require("./shadow_fiend.webp"),
  "shadow_shaman": require("./shadow_shaman.webp"),
  "rubick": require("./rubick.webp"),
  "silencer": require("./silencer.webp"),
  "skywrath_mage": require("./skywrath_mage.webp"),
  "slardar": require("./slardar.webp"),
  "slark": require("./slark.webp"),
  "snapfire": require("./snapfire.webp"),
  "sniper": require("./sniper.webp"),
  "spectre": require("./spectre.webp"),
  "spirit_breaker": require("./spirit_breaker.webp"),
  "storm_spirit": require("./storm_spirit.webp"),
  "sven": require("./sven.webp"),
  "techies": require("./techies.webp"),
  "templar_assassin": require("./templar_assassin.webp"),
  "terrorblade": require("./terrorblade.webp"),
  "tidehunter": require("./tidehunter.webp"),
  "timbersaw": require("./timbersaw.webp"),
  "tinker": require("./tinker.webp"),
  "tiny": require("./tiny.webp"),
  "treant_protector": require("./treant_protector.webp"),
  "troll_warlord": require("./troll_warlord.webp"),
  "tusk": require("./tusk.webp"),
  "underlord": require("./underlord.webp"),
  "undying": require("./undying.webp"),
  "ursa": require("./ursa.webp"),
  "vengeful_spirit": require("./vengeful_spirit.webp"),
  "venomancer": require("./venomancer.webp"),
  "viper": require("./viper.webp"),
  "visage": require("./visage.webp"),
  "void_spirit": require("./void_spirit.webp"),
  "warlock": require("./warlock.webp"),
  "weaver": require("./weaver.webp"),
  "windranger": require("./windranger.webp"),
  "winter_wyvern": require("./winter_wyvern.webp"),
  "witch_doctor": require("./witch_doctor.webp"),
  "wraith_king": require("./wraith_king.webp"),
  "zeus": require("./zeus.webp")
};
},{"./abaddon.webp":"iHz2","./alchemist.webp":"CCII","./ancient_apparition.webp":"xGY6","./anti-mage.webp":"cgy5","./arc_warden.webp":"xiDD","./axe.webp":"d0x8","./bane.webp":"iRlE","./batrider.webp":"zAJl","./beastmaster.webp":"XYW2","./bloodseeker.webp":"Ctux","./bounty_hunter.webp":"b5w1","./brewmaster.webp":"cVip","./bristleback.webp":"cDv0","./broodmother.webp":"axbd","./centaur_warrunner.webp":"Oyb1","./chaos_knight.webp":"G1nU","./chen.webp":"x6ih","./clinkz.webp":"zWsm","./clockwerk.webp":"v6KW","./crystal_maiden.webp":"fWn8","./dark_seer.webp":"YwWY","./dark_willow.webp":"byop","./dazzle.webp":"wnlN","./death_prophet.webp":"lKC0","./disruptor.webp":"zhFR","./doom.webp":"cA97","./dragon_knight.webp":"UFlA","./drow_ranger.webp":"QTJJ","./earth_spirit.webp":"tLe7","./earthshaker.webp":"JSmD","./elder_titan.webp":"k4xe","./ember_spirit.webp":"jd2K","./enchantress.webp":"PtyZ","./enigma.webp":"lr2x","./faceless_void.webp":"cIE1","./grimstroke.webp":"e0ev","./gyrocopter.webp":"nJcy","./huskar.webp":"hu5j","./invoker.webp":"QWIm","./io.webp":"sVGf","./jakiro.webp":"Xcqp","./juggernaut.webp":"TkiG","./keeper_of_the_light.webp":"o2PY","./kunkka.webp":"Tt5N","./legion_commander.webp":"A7oE","./lich.webp":"SilE","./lifestealer.webp":"xidF","./lina.webp":"PxtD","./leshrac.webp":"iNB4","./lion.webp":"nn73","./lone_druid.webp":"qQCg","./luna.webp":"mlPM","./magnus.webp":"LLFb","./lycan.webp":"rHtz","./mars.webp":"eZfQ","./medusa.webp":"yowN","./mirana.webp":"kuWv","./meepo.webp":"V1gw","./morphling.webp":"tzoh","./naga_siren.webp":"DT20","./natures_prophet.webp":"BYbr","./necrophos.webp":"oK1X","./monkey_king.webp":"m4XP","./nyx_assassin.webp":"BJwH","./night_stalker.webp":"oAiJ","./omniknight.webp":"wAlt","./ogre_magi.webp":"GWWf","./oracle.webp":"Agdc","./pangolier.webp":"BNrG","./outworld_devourer.webp":"xsbB","./phantom_assassin.webp":"QW6s","./phoenix.webp":"xFFx","./puck.webp":"qvmn","./pudge.webp":"IcaO","./pugna.webp":"Kx8C","./phantom_lancer.webp":"oyrf","./queen_of_pain.webp":"fGZn","./razor.webp":"DB8H","./riki.webp":"Fa1w","./sand_king.webp":"RGuQ","./shadow_demon.webp":"imMv","./shadow_fiend.webp":"iPoD","./shadow_shaman.webp":"y2N2","./rubick.webp":"mq9v","./silencer.webp":"IbIP","./skywrath_mage.webp":"Eo3y","./slardar.webp":"XfqR","./slark.webp":"e4Dr","./snapfire.webp":"J1Oz","./sniper.webp":"K824","./spectre.webp":"qubm","./spirit_breaker.webp":"XEXh","./storm_spirit.webp":"WZC2","./sven.webp":"ABHn","./techies.webp":"c9cq","./templar_assassin.webp":"XT0S","./terrorblade.webp":"p7XV","./tidehunter.webp":"HFkw","./timbersaw.webp":"hIjJ","./tinker.webp":"uX6U","./tiny.webp":"RQ44","./treant_protector.webp":"zCgi","./troll_warlord.webp":"AsYu","./tusk.webp":"IyyZ","./underlord.webp":"nHni","./undying.webp":"PvgO","./ursa.webp":"oKtZ","./vengeful_spirit.webp":"PcF7","./venomancer.webp":"tfyX","./viper.webp":"ASbI","./visage.webp":"uaQC","./void_spirit.webp":"qqs0","./warlock.webp":"C4Py","./weaver.webp":"t5Au","./windranger.webp":"xSHj","./winter_wyvern.webp":"VhbW","./witch_doctor.webp":"EUpd","./wraith_king.webp":"Dkw8","./zeus.webp":"fNp3"}],"GN7c":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringToImageName;

function stringToImageName(heroName) {
  return heroName.split(" ").join("_").split("'").join("").toLowerCase();
}
},{}],"rqmb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createHeroesGallery;

var _index = require("../../../../data/index");

var _ = _interopRequireDefault(require("../../../img/heroes/*.webp"));

var _stringToImageName = _interopRequireDefault(require("../../utils/stringToImageName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createHeroesGallery() {
  _index.heroesList.forEach(function (list) {
    var container = document.querySelector("[data-group=\"".concat(list.group, "\"]"));
    container.insertAdjacentHTML('beforeend', "<div \n        class=\"c-gallery__heroes\" \n        data-heroes-group=\"".concat(list.group, "\" \n        data-heroes-faction=\"").concat(list.faction, "\">\n      </div>"));
    list.heroes.forEach(function (hero) {
      var name = hero.name;
      var heroes = document.querySelector("[data-heroes-group=\"".concat(list.group, "\"][data-heroes-faction=\"").concat(list.faction, "\"]"));
      var imageName = (0, _stringToImageName.default)(name);
      var imageSource = _.default[imageName];
      heroes.insertAdjacentHTML('beforeend', "<div \n          class=\"c-gallery__hero\" \n          data-hero=\"".concat(hero.name, "\"\n          data-selection=\"\">\n            <img \n              src=\"").concat(imageSource, "\" \n              class=\"c-gallery__hero-img\" \n              draggable=\"false\"\n              alt=\"").concat(hero.name, "\" \n              title=\"").concat(hero.name, "\">\n            </img>\n        </div>"));
    });
  });
}
},{"../../../../data/index":"Tn6r","../../../img/heroes/*.webp":"LrWO","../../utils/stringToImageName":"GN7c"}],"RfyW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHeroesArray;

var _index = require("../../../data/index");

function getHeroesArray() {
  var heroes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  _index.heroesList.forEach(function (list) {
    list.heroes.forEach(function (hero) {
      heroes.push(hero);
    });
  });

  return heroes;
}
},{"../../../data/index":"Tn6r"}],"ZgQm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createHerosOptions;

var _getHeroesArray = _interopRequireDefault(require("../../utils/getHeroesArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createHerosOptions() {
  var container = document.querySelector('[data-search-hero-list]');
  var heroesName = (0, _getHeroesArray.default)().map(function (hero) {
    return hero.name;
  }).sort();
  heroesName.forEach(function (hero) {
    container.insertAdjacentHTML('beforeend', "<option value=\"".concat(hero, "\">"));
  });
}
},{"../../utils/getHeroesArray":"RfyW"}],"Wy7x":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRolesOptions;

var _index = require("../../../../data/index");

function createRolesOptions() {
  var container = document.querySelector('[data-filter-heroes-list]');

  _index.rolesList.roles.sort();

  _index.rolesList.roles.forEach(function (role) {
    container.insertAdjacentHTML('beforeend', "<option value=\"".concat(role, "\">"));
  });
}
},{"../../../../data/index":"Tn6r"}],"ZRAe":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTagsContainer;

function createTagsContainer() {
  var width = screen.width;

  if (width > 767) {
    var container = document.querySelector('[data-random-settings]');
    container.insertAdjacentHTML('afterbegin', '<ul class="c-settings__tag h-hidden" data-tags-container></ul>');
  } else {
    var _container = document.querySelector('[data-random-ctn]');

    _container.insertAdjacentHTML('afterbegin', '<ul class="c-settings__tag h-hidden" data-tags-container></ul>');
  }
}
},{}],"tXAF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hideNodes;

function hideNodes(items) {
  items.forEach(function (item) {
    item.classList.add('h-mobile-off');
  });
}
},{}],"t6sL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeSlide;

var _hideNodes = _interopRequireDefault(require("../../utils/hideNodes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function changeSlide(slideItems, currentIndex) {
  (0, _hideNodes.default)(slideItems);
  console.log(slideItems, currentIndex);
  slideItems[currentIndex].classList.remove('h-mobile-off');
}
},{"../../utils/hideNodes":"tXAF"}],"VinY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mobileHeroesGallery;

var _changeSlide = _interopRequireDefault(require("../slide/changeSlide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mobileHeroesGallery() {
  var width = screen.width;

  if (width < 767) {
    var groupContainer = document.querySelectorAll('[data-group-container]');
    var groups = document.querySelectorAll('[data-group]');
    (0, _changeSlide.default)(groupContainer, 0);
    groups.forEach(function (group) {
      group.insertAdjacentHTML('afterbegin', "<div class=\"c-gallery_slide-button-container\">\n        <button class=\"c-gallery_slide-button -previus\" alt=\"Previus\" data-button-gallery-previus>\n          Previus\n        /button>\n        <button class=\"c-gallery_slide-button -next\" alt=\"Next\" data-button-gallery-next>\n          Next\n        </button>\n      </div>");
    });
    var buttonNext = document.querySelectorAll('[data-button-gallery-next]');
    var buttonPrevius = document.querySelectorAll('[data-button-gallery-previus]');
    var index = 0;
    buttonPrevius.forEach(function (button) {
      button.addEventListener('click', function () {
        index -= 1;

        if (index < 0) {
          index = groupContainer.length - 1;
        }

        (0, _changeSlide.default)(groupContainer, index);
      });
    });
    buttonNext.forEach(function (button) {
      button.addEventListener('click', function () {
        index += 1;

        if (index >= groupContainer.length) {
          index = 0;
        }

        (0, _changeSlide.default)(groupContainer, index);
      });
    });
  }
}
},{"../slide/changeSlide":"t6sL"}],"gZll":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateQuantity;

function validateQuantity(heroes) {
  var quantity = document.querySelector('[data-random-quantity-input]');
  quantity.addEventListener('change', function () {
    var heroesLength = heroes.map(function (hero) {
      return hero.name;
    }).length;
    quantity.max = heroesLength;
    if (quantity.value < 1) quantity.value = 1;
    if (quantity.value > heroesLength) quantity.value = heroesLength;
  });
}
},{}],"X7TE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quantityPlaceHolderMobile;

function quantityPlaceHolderMobile() {
  var width = screen.width;
  var quantity = document.querySelector('[data-random-quantity-input]');

  if (width < 767) {
    quantity.placeholder = "Random Quantity";
  }
}
},{}],"ThG6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.states = void 0;
var states = {
  selected: '-selected',
  excluded: '-excluded',
  notSelected: '-notSelected'
};
exports.states = states;
},{}],"wmdy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showErrorMessage;

function showErrorMessage(message) {
  var container = document.querySelector('[data-random-settings]');
  var errorContainer = document.querySelector('[data-error-message]');

  if (errorContainer) {
    errorContainer.remove();
  }

  container.insertAdjacentHTML('beforeend', "<div class=\"o-error\" data-error-message>\n      <span class=\"o-error__message\">\n        ".concat(message, "\n      </span>\n    <div>"));
}
},{}],"xL3e":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearErrorMessage;

function clearErrorMessage() {
  var errorContainer = document.querySelector('[data-error-message]');

  if (errorContainer) {
    errorContainer.remove();
  }
}
},{}],"agcN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearInputs;

function clearInputs() {
  var inputs = document.querySelectorAll('[data-filter-input]');
  inputs.forEach(function (input) {
    input.value = '';
  });
}
},{}],"Zuo8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearArray;

function clearArray(array) {
  array.splice(0, array.length);
}
},{}],"GUhJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = returnFilterType;

var _getHeroesArray = _interopRequireDefault(require("../../utils/getHeroesArray"));

var _index = require("../../../../data/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function returnFilterType(value) {
  var heroesName = (0, _getHeroesArray.default)().map(function (hero) {
    return hero.name;
  }).sort();

  if (heroesName.includes(value)) {
    return 'name';
  } else if (Object.values(_index.rolesList)[0].includes(value)) {
    return 'roles';
  } else {
    return false;
  }
}
},{"../../utils/getHeroesArray":"RfyW","../../../../data/index":"Tn6r"}],"gEQV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addToFiltersArray;

var _returnFilterType = _interopRequireDefault(require("../returnFilterType"));

var _clearArray = _interopRequireDefault(require("../../../utils/clearArray"));

var _getHeroesArray = _interopRequireDefault(require("../../../utils/getHeroesArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addToFiltersArray(heroes, tag) {
  var filterType = (0, _returnFilterType.default)(tag.value);

  if (filterType === 'roles') {
    var filteredArray = heroes.filter(function (hero) {
      return hero[filterType].includes(tag.value);
    });
    (0, _clearArray.default)(heroes);
    filteredArray.forEach(function (element) {
      return heroes.push(element);
    });
  } else if (filterType === 'name') {
    var auxHeroes = [];
    (0, _getHeroesArray.default)(auxHeroes);

    if (heroes.filter(function (hero) {
      return hero[filterType].includes(tag.value);
    }).length === 0) {
      var filteredHero = auxHeroes.filter(function (hero) {
        return hero[filterType].includes(tag.value);
      });
      heroes.push(filteredHero[0]);
    } else if (heroes.length === auxHeroes.length) {
      (0, _clearArray.default)(heroes);

      var _filteredHero = auxHeroes.filter(function (hero) {
        return hero[filterType].includes(tag.value);
      });

      heroes.push(_filteredHero[0]);
    }
  }
}
},{"../returnFilterType":"GUhJ","../../../utils/clearArray":"Zuo8","../../../utils/getHeroesArray":"RfyW"}],"PX0l":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeFromFiltersArray;

var _returnFilterType = _interopRequireDefault(require("../returnFilterType"));

var _clearArray = _interopRequireDefault(require("../../../utils/clearArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeFromFiltersArray(heroes, tag) {
  var filterType = (0, _returnFilterType.default)(tag.value);

  if (filterType === 'roles') {
    var filteredArray = heroes.filter(function (hero) {
      return !hero[filterType].includes(tag.value);
    });
    (0, _clearArray.default)(heroes);
    filteredArray.forEach(function (element) {
      heroes.push(element);
    });
  } else if (filterType === 'name') {
    var _filteredArray = heroes.filter(function (hero) {
      return !hero[filterType].includes(tag.value);
    });

    (0, _clearArray.default)(heroes);

    _filteredArray.forEach(function (hero) {
      heroes.push(hero);
    });
  }
}
},{"../returnFilterType":"GUhJ","../../../utils/clearArray":"Zuo8"}],"EnPO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearStates;

var _states = require("../heroesStates/states");

var _getHeroesArray = _interopRequireDefault(require("../../utils/getHeroesArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clearStates() {
  var heroes = (0, _getHeroesArray.default)();
  heroes.forEach(function (hero) {
    var heroName = document.querySelector("[data-hero=\"".concat(hero.name, "\"]"));
    heroName.classList.remove(_states.states.excluded);
    heroName.classList.remove(_states.states.notSelected);
    heroName.classList.remove(_states.states.selected);
    heroName.dataset.selection = '';
  });
}
},{"../heroesStates/states":"ThG6","../../utils/getHeroesArray":"RfyW"}],"mQoL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkState;

function checkState(hero, state) {
  if (hero.getAttribute('data-selection') === state) {
    hero.dataset.selection = '';
  } else {
    hero.dataset.selection = state;
  }
}
},{}],"c9qZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deselectHeroes;

function deselectHeroes() {
  var heroes = document.querySelectorAll('[data-selection=""]');
  var active = document.querySelector('[data-selection="active"]');

  if (active) {
    heroes.forEach(function (hero) {
      hero.classList.add('-notSelected');
    });
  } else {
    heroes.forEach(function (hero) {
      hero.classList.remove('-notSelected');
    });
  }
}
},{}],"YXZn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectHero;

var _checkState = _interopRequireDefault(require("./checkState"));

var _deselectHeroes = _interopRequireDefault(require("./deselectHeroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function selectHero(hero, _ref) {
  var selected = _ref.selected,
      excluded = _ref.excluded,
      notSelected = _ref.notSelected;
  hero.classList.remove(excluded);
  hero.classList.remove(notSelected);
  hero.classList.toggle(selected);
  (0, _checkState.default)(hero, 'active');
  (0, _deselectHeroes.default)();
}
},{"./checkState":"mQoL","./deselectHeroes":"c9qZ"}],"Xvhb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = excludeHero;

var _checkState = _interopRequireDefault(require("./checkState"));

var _deselectHeroes = _interopRequireDefault(require("./deselectHeroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function excludeHero(hero, _ref) {
  var selected = _ref.selected,
      excluded = _ref.excluded;
  hero.classList.remove(selected);
  hero.classList.toggle(excluded);
  (0, _checkState.default)(hero, 'excluded');
  (0, _deselectHeroes.default)();
}
},{"./checkState":"mQoL","./deselectHeroes":"c9qZ"}],"JRJS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addStateToFilteredHeroes;

var _states = require("../heroesStates/states");

var _clearStates = _interopRequireDefault(require("../heroesStates/clearStates"));

var _selectHero = _interopRequireDefault(require("../heroesStates/selectHero"));

var _excludeHero = _interopRequireDefault(require("../heroesStates/excludeHero"));

var _returnFilterType = _interopRequireDefault(require("./returnFilterType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addStateToFilteredHeroes(heroes, filterTags) {
  (0, _clearStates.default)(_states.states);
  heroes.forEach(function (hero) {
    var heroNode = document.querySelector("[data-hero=\"".concat(hero.name, "\"]"));
    (0, _selectHero.default)(heroNode, _states.states);
  });
  filterTags.forEach(function (tag) {
    if ((0, _returnFilterType.default)(tag.value) === 'name') {
      if (tag.status === '-remove') {
        var heroNode = document.querySelector("[data-hero=\"".concat(tag.value, "\"]"));
        (0, _excludeHero.default)(heroNode, _states.states);
      }
    }
  });
}
},{"../heroesStates/states":"ThG6","../heroesStates/clearStates":"EnPO","../heroesStates/selectHero":"YXZn","../heroesStates/excludeHero":"Xvhb","./returnFilterType":"GUhJ"}],"fPjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deselectAllHeroes;

var _states = require("./states");

function deselectAllHeroes() {
  var heroes = document.querySelectorAll('[data-selection]');
  heroes.forEach(function (hero) {
    hero.classList.remove(_states.states.selected);
    hero.classList.remove(_states.states.excluded);
    hero.classList.add(_states.states.notSelected);
  });
}
},{"./states":"ThG6"}],"Ef47":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _clearArray = _interopRequireDefault(require("../../../utils/clearArray"));

var _getHeroesArray = _interopRequireDefault(require("../../../utils/getHeroesArray"));

var _addToFiltersArray = _interopRequireDefault(require("./addToFiltersArray"));

var _removeFromFiltersArray = _interopRequireDefault(require("./removeFromFiltersArray"));

var _clearStates = _interopRequireDefault(require("../../heroesStates/clearStates"));

var _addStateToFilteredHeroes = _interopRequireDefault(require("../addStateToFilteredHeroes"));

var _showErrorMessage = _interopRequireDefault(require("../errors/showErrorMessage"));

var _deselectAllHeroes = _interopRequireDefault(require("../../heroesStates/deselectAllHeroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(heroes, filterTags) {
  (0, _clearArray.default)(heroes);
  (0, _getHeroesArray.default)(heroes);
  filterTags.forEach(function (tag) {
    if (tag.status === '-add') {
      (0, _addToFiltersArray.default)(heroes, tag);
    } else if (tag.status === '-remove') {
      (0, _removeFromFiltersArray.default)(heroes, tag);
    }
  });

  if (filterTags.length === 0) {
    (0, _clearStates.default)(heroes);
  } else if (heroes.length === 0) {
    (0, _deselectAllHeroes.default)();
    (0, _showErrorMessage.default)('Could not find any hero with that filters');
  } else {
    (0, _addStateToFilteredHeroes.default)(heroes, filterTags);
  }
}
},{"../../../utils/clearArray":"Zuo8","../../../utils/getHeroesArray":"RfyW","./addToFiltersArray":"gEQV","./removeFromFiltersArray":"PX0l","../../heroesStates/clearStates":"EnPO","../addStateToFilteredHeroes":"JRJS","../errors/showErrorMessage":"wmdy","../../heroesStates/deselectAllHeroes":"fPjs"}],"Q2z6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTagFromArray;

function removeTagFromArray(filterTags, value) {
  filterTags.splice(filterTags.findIndex(function (tag) {
    return tag.value === "".concat(value);
  }), 1);
}
},{}],"eV2n":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTagButton;

var _clearErrorMessage = _interopRequireDefault(require("../filterSystem/errors/clearErrorMessage"));

var _filterHeroesArray = _interopRequireDefault(require("../filterSystem/filters/filterHeroesArray"));

var _removeTag = _interopRequireDefault(require("./removeTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeTagButton(heroes, filterTags) {
  var removeTagButton = document.querySelectorAll('[data-tags-items-remove]');
  removeTagButton.forEach(function (button) {
    button.addEventListener('click', function (event) {
      (0, _removeTag.default)(filterTags, event.target.getAttribute("data-tags-items-remove"));
      (0, _clearErrorMessage.default)();
      event.target.parentNode.remove();
      (0, _filterHeroesArray.default)(heroes, filterTags);
    });
  });
}
},{"../filterSystem/errors/clearErrorMessage":"xL3e","../filterSystem/filters/filterHeroesArray":"Ef47","./removeTag":"Q2z6"}],"ScMJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = printTag;

function printTag(filterTags) {
  var container = document.querySelector('[data-tags-container]');

  if (filterTags) {
    container.classList.remove('h-hidden');
  } else {
    container.classList.add('h-hidden');
  }

  container.innerHTML = '';
  filterTags.forEach(function (tag) {
    container.insertAdjacentHTML('beforeend', "<li class=\"c-settings__tag-item ".concat(tag.status, "\">\n        <button class=\"c-settings__tag-icon\" data-tags-items-remove=\"").concat(tag.value, "\"></button>\n        <span class=\"c-settings__tag-text\">").concat(tag.value, "</span>\n      </li>"));
  });
}
},{}],"WqW6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addTag;

var _showErrorMessage = _interopRequireDefault(require("../filterSystem/errors/showErrorMessage"));

var _clearErrorMessage = _interopRequireDefault(require("../filterSystem/errors/clearErrorMessage"));

var _clearTextInputs = _interopRequireDefault(require("../inputSettings/clearTextInputs"));

var _removeTagButton = _interopRequireDefault(require("./removeTagButton"));

var _printTag = _interopRequireDefault(require("./printTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addTag(heroes, filterTags, value, status) {
  if (filterTags.filter(function (tag) {
    return tag.value.includes(value);
  }).length === 0) {
    if (!(heroes.length === 0)) {
      (0, _clearErrorMessage.default)();
      filterTags.push({
        value: "".concat(value),
        status: status
      });
      (0, _printTag.default)(filterTags);
    }

    (0, _clearTextInputs.default)();
  } else {
    (0, _showErrorMessage.default)('You are already using this filter');
  }

  (0, _removeTagButton.default)(heroes, filterTags);
}
},{"../filterSystem/errors/showErrorMessage":"wmdy","../filterSystem/errors/clearErrorMessage":"xL3e","../inputSettings/clearTextInputs":"agcN","./removeTagButton":"eV2n","./printTag":"ScMJ"}],"WO37":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHeroToFilterArrayOnClick;

var _states = require("../heroesStates/states");

var _addTag = _interopRequireDefault(require("../tagSystem/addTag"));

var _removeTag = _interopRequireDefault(require("../tagSystem/removeTag"));

var _filterHeroesArray = _interopRequireDefault(require("./filters/filterHeroesArray"));

var _printTag = _interopRequireDefault(require("../tagSystem/printTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addHeroToFilterArrayOnClick(heroes, filterTags) {
  var galleryHeroes = document.querySelectorAll('[data-hero]');

  function checkIfTagExists(filterTags, value) {
    if (filterTags.filter(function (tag) {
      return tag.value.includes(value);
    }).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  galleryHeroes.forEach(function (element) {
    element.addEventListener('click', function () {
      var heroName = element.getAttribute('data-hero');

      if (checkIfTagExists(filterTags, heroName)) {
        (0, _addTag.default)(heroes, filterTags, heroName, '-add');
        (0, _filterHeroesArray.default)(heroes, filterTags);
      } else {
        (0, _removeTag.default)(filterTags, heroName);
        (0, _printTag.default)(filterTags);
        (0, _filterHeroesArray.default)(heroes, filterTags);
      }
    });
    element.addEventListener('contextmenu', function (evt) {
      var heroName = element.getAttribute('data-hero');
      element.classList.toggle(_states.states.excluded);

      if (checkIfTagExists(filterTags, heroName)) {
        (0, _addTag.default)(heroes, filterTags, heroName, '-remove');
        (0, _filterHeroesArray.default)(heroes, filterTags);
      } else {
        (0, _removeTag.default)(filterTags, heroName);
        (0, _printTag.default)(filterTags);
        (0, _filterHeroesArray.default)(heroes, filterTags);
      }
    });
  });
}
},{"../heroesStates/states":"ThG6","../tagSystem/addTag":"WqW6","../tagSystem/removeTag":"Q2z6","./filters/filterHeroesArray":"Ef47","../tagSystem/printTag":"ScMJ"}],"vkPf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copyArrayElements;

var _clearArray = _interopRequireDefault(require("./clearArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function copyArrayElements(clonedArray, originalArray) {
  (0, _clearArray.default)(clonedArray);
  originalArray.forEach(function (element) {
    clonedArray.push(element);
  });
}
},{"./clearArray":"Zuo8"}],"sgBm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inputChangeFilter;

var _copyArrayElements = _interopRequireDefault(require("../../utils/copyArrayElements"));

var _filterHeroesArray = _interopRequireDefault(require("./filters/filterHeroesArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inputChangeFilter(heroes, filterTags) {
  var inputs = document.querySelectorAll('[data-filter-input]');
  inputs.forEach(function (input) {
    input.addEventListener('change', function () {
      var auxFilters = [];
      (0, _copyArrayElements.default)(auxFilters, filterTags);
      auxFilters.push({
        value: input.value,
        status: '-add'
      });
      (0, _filterHeroesArray.default)(heroes, auxFilters);
    });
  });
}
},{"../../utils/copyArrayElements":"vkPf","./filters/filterHeroesArray":"Ef47"}],"tgD0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buttonAddToFiltersArray;

var _addTag = _interopRequireDefault(require("../tagSystem/addTag"));

var _filterHeroesArray = _interopRequireDefault(require("./filters/filterHeroesArray"));

var _returnFilterType = _interopRequireDefault(require("./returnFilterType"));

var _showErrorMessage = _interopRequireDefault(require("./errors/showErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buttonAddToFiltersArray(heroes, filterTags) {
  var addButton = document.querySelector('[data-add-button]');
  addButton.addEventListener('click', function () {
    var inputs = document.querySelectorAll('[data-filter-input]');
    inputs.forEach(function (input) {
      if (input.value) {
        if ((0, _returnFilterType.default)(input.value)) {
          (0, _addTag.default)(heroes, filterTags, input.value, '-add');
          (0, _filterHeroesArray.default)(heroes, filterTags);
        } else {
          (0, _showErrorMessage.default)('This is not a valid filter');
        }
      }
    });
  });
}
},{"../tagSystem/addTag":"WqW6","./filters/filterHeroesArray":"Ef47","./returnFilterType":"GUhJ","./errors/showErrorMessage":"wmdy"}],"QpvD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buttonRemoveFromFiltersArray;

var _addTag = _interopRequireDefault(require("../tagSystem/addTag"));

var _filterHeroesArray = _interopRequireDefault(require("./filters/filterHeroesArray"));

var _returnFilterType = _interopRequireDefault(require("./returnFilterType"));

var _showErrorMessage = _interopRequireDefault(require("./errors/showErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buttonRemoveFromFiltersArray(heroes, filterTags) {
  var removeButton = document.querySelector('[data-remove-button]');
  removeButton.addEventListener('click', function () {
    var inputs = document.querySelectorAll('[data-filter-input]');
    inputs.forEach(function (input) {
      if (input.value) {
        if ((0, _returnFilterType.default)(input.value)) {
          (0, _addTag.default)(heroes, filterTags, input.value, '-remove');
          (0, _filterHeroesArray.default)(heroes, filterTags);
        } else {
          (0, _showErrorMessage.default)('This is not a valid filter');
        }
      }
    });
  });
}
},{"../tagSystem/addTag":"WqW6","./filters/filterHeroesArray":"Ef47","./returnFilterType":"GUhJ","./errors/showErrorMessage":"wmdy"}],"aJVf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearTagContainer;

function clearTagContainer() {
  var tagContainer = document.querySelector('[data-tags-container]');
  tagContainer.classList.add('h-hidden');
  tagContainer.innerHTML = '';
}
},{}],"lRoG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearRandomContainer;

function clearRandomContainer() {
  var randomContainer = document.querySelector('[data-random-hero'); // randomContainer.classList.remove('c-random_hero-ctn');

  randomContainer.innerHTML = '';
}
},{}],"EBjq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearQuantityInput;

function clearQuantityInput() {
  var quantity = document.querySelector('[data-random-quantity-input]');
  quantity.value = '';
}
},{}],"cpcS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buttonClearFiltersArray;

var _getHeroesArray = _interopRequireDefault(require("../../utils/getHeroesArray"));

var _clearArray = _interopRequireDefault(require("../../utils/clearArray"));

var _clearStates = _interopRequireDefault(require("../heroesStates/clearStates"));

var _clearTagContainer = _interopRequireDefault(require("../tagSystem/clearTagContainer"));

var _clearRandomContainer = _interopRequireDefault(require("../randomSystem/clearRandomContainer"));

var _clearTextInputs = _interopRequireDefault(require("../inputSettings/clearTextInputs"));

var _clearQuantityInput = _interopRequireDefault(require("../inputSettings/clearQuantityInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buttonClearFiltersArray(heroes, filterTags) {
  var clearButton = document.querySelector('[data-clear-button');
  clearButton.addEventListener('click', function () {
    (0, _clearTagContainer.default)();
    (0, _clearRandomContainer.default)();
    (0, _clearArray.default)(heroes);
    (0, _clearArray.default)(filterTags);
    (0, _clearStates.default)();
    (0, _clearQuantityInput.default)();
    (0, _clearTextInputs.default)();
    (0, _getHeroesArray.default)(heroes);
  });
}
},{"../../utils/getHeroesArray":"RfyW","../../utils/clearArray":"Zuo8","../heroesStates/clearStates":"EnPO","../tagSystem/clearTagContainer":"aJVf","../randomSystem/clearRandomContainer":"lRoG","../inputSettings/clearTextInputs":"agcN","../inputSettings/clearQuantityInput":"EBjq"}],"LrK8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _getHeroesArray = _interopRequireDefault(require("../../utils/getHeroesArray"));

var _addHeroToFilterArrayOnClick = _interopRequireDefault(require("./addHeroToFilterArrayOnClick"));

var _inputChangeFilter = _interopRequireDefault(require("./inputChangeFilter"));

var _buttonAddToFiltersArray = _interopRequireDefault(require("./buttonAddToFiltersArray"));

var _buttonRemoveFromFiltersArray = _interopRequireDefault(require("./buttonRemoveFromFiltersArray"));

var _buttonClearFiltersArray = _interopRequireDefault(require("./buttonClearFiltersArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(heroes, filterTags) {
  var auxHeroes = [];
  (0, _getHeroesArray.default)(heroes);
  (0, _getHeroesArray.default)(auxHeroes);
  (0, _addHeroToFilterArrayOnClick.default)(heroes, filterTags);
  (0, _inputChangeFilter.default)(heroes, filterTags);
  (0, _buttonAddToFiltersArray.default)(heroes, filterTags);
  (0, _buttonRemoveFromFiltersArray.default)(heroes, filterTags);
  (0, _buttonClearFiltersArray.default)(heroes, filterTags);
}
},{"../../utils/getHeroesArray":"RfyW","./addHeroToFilterArrayOnClick":"WO37","./inputChangeFilter":"sgBm","./buttonAddToFiltersArray":"tgD0","./buttonRemoveFromFiltersArray":"QpvD","./buttonClearFiltersArray":"cpcS"}],"gdnn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearInputOnFocus;

var _clearTextInputs = _interopRequireDefault(require("./clearTextInputs"));

var _filterHeroesArray = _interopRequireDefault(require("../filterSystem/filters/filterHeroesArray"));

var _clearErrorMessage = _interopRequireDefault(require("../filterSystem/errors/clearErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clearInputOnFocus(heroes, filterTags) {
  var inputGroup = document.querySelectorAll("[data-filter-input]");
  var quantityInput = document.querySelector('[data-random-quantity-input]');
  inputGroup.forEach(function (input) {
    input.addEventListener('click', function () {
      (0, _clearErrorMessage.default)();
      (0, _clearTextInputs.default)();
      quantityInput.value = '';
      (0, _filterHeroesArray.default)(heroes, filterTags);

      if (input.value) {
        input.value = '';
        input.blur();
        input.focus();
      }
    });
  });
}
},{"./clearTextInputs":"agcN","../filterSystem/filters/filterHeroesArray":"Ef47","../filterSystem/errors/clearErrorMessage":"xL3e"}],"lHzz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomHero;

var _stringToImageName = _interopRequireDefault(require("../../utils/stringToImageName"));

var _ = _interopRequireDefault(require("../../../img/heroes/*.webp"));

var _clearRandomContainer = _interopRequireDefault(require("./clearRandomContainer"));

var _copyArrayElements = _interopRequireDefault(require("../../utils/copyArrayElements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomHero(heroes) {
  var container = document.querySelector('[data-random-hero');
  var button = document.querySelector('[data-random-button');
  button.addEventListener('click', function () {
    (0, _clearRandomContainer.default)(); // container.classList.add('c-random_hero-ctn');

    var quantity = document.querySelector('[data-random-quantity-input]').value || 1;
    var auxHeroes = [];
    (0, _copyArrayElements.default)(auxHeroes, heroes);

    for (var i = 0; i < quantity; i++) {
      var random = Math.round(Math.random() * (auxHeroes.length - 1));
      var hero = auxHeroes.splice(random, 1)[0];
      var imageName = (0, _stringToImageName.default)(hero.name);
      container.insertAdjacentHTML('beforeend', "<div class=\"c-gallery__hero -randomized\" data-randomized-hero=\"".concat(hero.name, "\">\n        <img \n          src=\"").concat(_.default[imageName], "\" \n          class=\"c-gallery__hero-img -randomized\" \n          draggable=\"false\"\n          alt=\"").concat(hero.name, "\" \n          title=\"").concat(hero.name, "\">\n        </img>\n      </div>"));
    }
  });
}
},{"../../utils/stringToImageName":"GN7c","../../../img/heroes/*.webp":"LrWO","./clearRandomContainer":"lRoG","../../utils/copyArrayElements":"vkPf"}],"adLt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preventContextMenu;

function preventContextMenu() {
  var list = [document.querySelector('[data-heroes-gallery]'), document.querySelector('[data-random-hero]')];
  list.forEach(function (item) {
    item.addEventListener('contextmenu', function (evt) {
      evt.preventDefault();
    });
  });
}
},{}],"d5D5":[function(require,module,exports) {
"use strict";

var _createHeroesGallery = _interopRequireDefault(require("./modules/create/createHeroesGallery"));

var _createHerosOptions = _interopRequireDefault(require("./modules/create/createHerosOptions"));

var _createRolesOptions = _interopRequireDefault(require("./modules/create/createRolesOptions"));

var _createTagsContainer = _interopRequireDefault(require("./modules/create/createTagsContainer"));

var _mobileHeroesGallerySlider = _interopRequireDefault(require("./modules/create/mobileHeroesGallerySlider"));

var _validateQuantity = _interopRequireDefault(require("./modules/inputSettings/validateQuantity"));

var _quantityPlaceHolderMobile = _interopRequireDefault(require("./modules/inputSettings/quantityPlaceHolderMobile"));

var _filterSystem = _interopRequireDefault(require("./modules/filterSystem/filterSystem"));

var _clearInputOnFocus = _interopRequireDefault(require("./modules/inputSettings/clearInputOnFocus"));

var _randomHero = _interopRequireDefault(require("./modules/randomSystem/randomHero"));

var _preventContextMenu = _interopRequireDefault(require("./utils/preventContextMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heroes = [];
var filterTags = [];
(0, _createHeroesGallery.default)();
(0, _mobileHeroesGallerySlider.default)();
(0, _createHerosOptions.default)();
(0, _createRolesOptions.default)();
(0, _createTagsContainer.default)();
(0, _preventContextMenu.default)();
(0, _filterSystem.default)(heroes, filterTags);
(0, _quantityPlaceHolderMobile.default)();
(0, _validateQuantity.default)(heroes);
(0, _clearInputOnFocus.default)(heroes, filterTags);
(0, _randomHero.default)(heroes);
},{"./modules/create/createHeroesGallery":"rqmb","./modules/create/createHerosOptions":"ZgQm","./modules/create/createRolesOptions":"Wy7x","./modules/create/createTagsContainer":"ZRAe","./modules/create/mobileHeroesGallerySlider":"VinY","./modules/inputSettings/validateQuantity":"gZll","./modules/inputSettings/quantityPlaceHolderMobile":"X7TE","./modules/filterSystem/filterSystem":"LrK8","./modules/inputSettings/clearInputOnFocus":"gdnn","./modules/randomSystem/randomHero":"lHzz","./utils/preventContextMenu":"adLt"}]},{},["d5D5"], null)
//# sourceMappingURL=js.0c0bd544.js.map