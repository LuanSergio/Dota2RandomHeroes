// export const heroes = require('./radiant-str.json');
import * as radiantAgi from '../../data/heroes/radiant_agi.json';
import * as radiantInt from '../../data/heroes/radiant_int.json';
import * as radiantStr from '../../data/heroes/radiant_str.json';

import * as direAgi from '../../data/heroes/dire_agi.json';
import * as direInt from '../../data/heroes/dire_int.json';
import * as direStr from '../../data/heroes/dire_str.json';

import * as roles from '../../data/roles/roles.json'

export const heroesList = [
    radiantStr,
    radiantAgi,
    radiantInt,
    direStr,
    direAgi,
    direInt
]

export const rolesList = roles;
