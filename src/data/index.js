// export const heroes = require('./radiant-str.json');
import * as radiantAgi from './heroes/radiant_agi.json';
import * as radiantInt from './heroes/radiant_int.json';
import * as radiantStr from './heroes/radiant_str.json';

import * as direAgi from './heroes/dire_agi.json';
import * as direInt from './heroes/dire_int.json';
import * as direStr from './heroes/dire_str.json';

export const heroesList = [
    radiantStr,
    radiantAgi,
    radiantInt,
    direStr,
    direAgi,
    direInt
]
