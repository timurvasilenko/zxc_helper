localStorage = window.localStorage;

let disabledHeroes = [];
let storageDisabledHeroes = localStorage.getItem('disabledHeroes');
if (storageDisabledHeroes != null && storageDisabledHeroes != "[]"){
    disabledHeroes = JSON.parse(storageDisabledHeroes);
}

const heroes = [{
    "id": 1,
    "name": "npc_dota_hero_antimage",
    "name_english_loc": "Anti-Mage",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 2,
    "name": "npc_dota_hero_axe",
    "name_english_loc": "Axe",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 3,
    "name": "npc_dota_hero_bane",
    "name_english_loc": "Bane",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 4,
    "name": "npc_dota_hero_bloodseeker",
    "name_english_loc": "Bloodseeker",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 5,
    "name": "npc_dota_hero_crystal_maiden",
    "name_english_loc": "Crystal Maiden",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 6,
    "name": "npc_dota_hero_drow_ranger",
    "name_english_loc": "Drow Ranger",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 7,
    "name": "npc_dota_hero_earthshaker",
    "name_english_loc": "Earthshaker",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 8,
    "name": "npc_dota_hero_juggernaut",
    "name_english_loc": "Juggernaut",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 9,
    "name": "npc_dota_hero_mirana",
    "name_english_loc": "Mirana",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 11,
    "name": "npc_dota_hero_nevermore",
    "name_english_loc": "Shadow Fiend",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 10,
    "name": "npc_dota_hero_morphling",
    "name_english_loc": "Morphling",
    "primary_attr": 1,
    "complexity": 3
}, {
    "id": 12,
    "name": "npc_dota_hero_phantom_lancer",
    "name_english_loc": "Phantom Lancer",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 13,
    "name": "npc_dota_hero_puck",
    "name_english_loc": "Puck",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 14,
    "name": "npc_dota_hero_pudge",
    "name_english_loc": "Pudge",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 15,
    "name": "npc_dota_hero_razor",
    "name_english_loc": "Razor",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 16,
    "name": "npc_dota_hero_sand_king",
    "name_english_loc": "Sand King",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 17,
    "name": "npc_dota_hero_storm_spirit",
    "name_english_loc": "Storm Spirit",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 18,
    "name": "npc_dota_hero_sven",
    "name_english_loc": "Sven",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 19,
    "name": "npc_dota_hero_tiny",
    "name_english_loc": "Tiny",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 20,
    "name": "npc_dota_hero_vengefulspirit",
    "name_english_loc": "Vengeful Spirit",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 21,
    "name": "npc_dota_hero_windrunner",
    "name_english_loc": "Windranger",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 22,
    "name": "npc_dota_hero_zuus",
    "name_english_loc": "Zeus",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 23,
    "name": "npc_dota_hero_kunkka",
    "name_english_loc": "Kunkka",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 25,
    "name": "npc_dota_hero_lina",
    "name_english_loc": "Lina",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 31,
    "name": "npc_dota_hero_lich",
    "name_english_loc": "Lich",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 26,
    "name": "npc_dota_hero_lion",
    "name_english_loc": "Lion",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 27,
    "name": "npc_dota_hero_shadow_shaman",
    "name_english_loc": "Shadow Shaman",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 28,
    "name": "npc_dota_hero_slardar",
    "name_english_loc": "Slardar",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 29,
    "name": "npc_dota_hero_tidehunter",
    "name_english_loc": "Tidehunter",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 30,
    "name": "npc_dota_hero_witch_doctor",
    "name_english_loc": "Witch Doctor",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 32,
    "name": "npc_dota_hero_riki",
    "name_english_loc": "Riki",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 33,
    "name": "npc_dota_hero_enigma",
    "name_english_loc": "Enigma",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 34,
    "name": "npc_dota_hero_tinker",
    "name_english_loc": "Tinker",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 35,
    "name": "npc_dota_hero_sniper",
    "name_english_loc": "Sniper",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 36,
    "name": "npc_dota_hero_necrolyte",
    "name_english_loc": "Necrophos",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 37,
    "name": "npc_dota_hero_warlock",
    "name_english_loc": "Warlock",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 38,
    "name": "npc_dota_hero_beastmaster",
    "name_english_loc": "Beastmaster",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 39,
    "name": "npc_dota_hero_queenofpain",
    "name_english_loc": "Queen of Pain",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 40,
    "name": "npc_dota_hero_venomancer",
    "name_english_loc": "Venomancer",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 41,
    "name": "npc_dota_hero_faceless_void",
    "name_english_loc": "Faceless Void",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 42,
    "name": "npc_dota_hero_skeleton_king",
    "name_english_loc": "Wraith King",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 43,
    "name": "npc_dota_hero_death_prophet",
    "name_english_loc": "Death Prophet",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 44,
    "name": "npc_dota_hero_phantom_assassin",
    "name_english_loc": "Phantom Assassin",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 45,
    "name": "npc_dota_hero_pugna",
    "name_english_loc": "Pugna",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 46,
    "name": "npc_dota_hero_templar_assassin",
    "name_english_loc": "Templar Assassin",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 47,
    "name": "npc_dota_hero_viper",
    "name_english_loc": "Viper",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 48,
    "name": "npc_dota_hero_luna",
    "name_english_loc": "Luna",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 49,
    "name": "npc_dota_hero_dragon_knight",
    "name_english_loc": "Dragon Knight",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 50,
    "name": "npc_dota_hero_dazzle",
    "name_english_loc": "Dazzle",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 51,
    "name": "npc_dota_hero_rattletrap",
    "name_english_loc": "Clockwerk",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 52,
    "name": "npc_dota_hero_leshrac",
    "name_english_loc": "Leshrac",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 53,
    "name": "npc_dota_hero_furion",
    "name_english_loc": "Nature's Prophet",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 54,
    "name": "npc_dota_hero_life_stealer",
    "name_english_loc": "Lifestealer",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 55,
    "name": "npc_dota_hero_dark_seer",
    "name_english_loc": "Dark Seer",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 56,
    "name": "npc_dota_hero_clinkz",
    "name_english_loc": "Clinkz",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 57,
    "name": "npc_dota_hero_omniknight",
    "name_english_loc": "Omniknight",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 58,
    "name": "npc_dota_hero_enchantress",
    "name_english_loc": "Enchantress",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 59,
    "name": "npc_dota_hero_huskar",
    "name_english_loc": "Huskar",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 60,
    "name": "npc_dota_hero_night_stalker",
    "name_english_loc": "Night Stalker",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 61,
    "name": "npc_dota_hero_broodmother",
    "name_english_loc": "Broodmother",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 62,
    "name": "npc_dota_hero_bounty_hunter",
    "name_english_loc": "Bounty Hunter",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 63,
    "name": "npc_dota_hero_weaver",
    "name_english_loc": "Weaver",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 64,
    "name": "npc_dota_hero_jakiro",
    "name_english_loc": "Jakiro",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 65,
    "name": "npc_dota_hero_batrider",
    "name_english_loc": "Batrider",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 66,
    "name": "npc_dota_hero_chen",
    "name_english_loc": "Chen",
    "primary_attr": 2,
    "complexity": 3
}, {
    "id": 67,
    "name": "npc_dota_hero_spectre",
    "name_english_loc": "Spectre",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 69,
    "name": "npc_dota_hero_doom_bringer",
    "name_english_loc": "Doom",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 68,
    "name": "npc_dota_hero_ancient_apparition",
    "name_english_loc": "Ancient Apparition",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 70,
    "name": "npc_dota_hero_ursa",
    "name_english_loc": "Ursa",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 71,
    "name": "npc_dota_hero_spirit_breaker",
    "name_english_loc": "Spirit Breaker",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 72,
    "name": "npc_dota_hero_gyrocopter",
    "name_english_loc": "Gyrocopter",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 73,
    "name": "npc_dota_hero_alchemist",
    "name_english_loc": "Alchemist",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 74,
    "name": "npc_dota_hero_invoker",
    "name_english_loc": "Invoker",
    "primary_attr": 2,
    "complexity": 3
}, {
    "id": 75,
    "name": "npc_dota_hero_silencer",
    "name_english_loc": "Silencer",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 76,
    "name": "npc_dota_hero_obsidian_destroyer",
    "name_english_loc": "Outworld Destroyer",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 77,
    "name": "npc_dota_hero_lycan",
    "name_english_loc": "Lycan",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 78,
    "name": "npc_dota_hero_brewmaster",
    "name_english_loc": "Brewmaster",
    "primary_attr": 0,
    "complexity": 3
}, {
    "id": 79,
    "name": "npc_dota_hero_shadow_demon",
    "name_english_loc": "Shadow Demon",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 80,
    "name": "npc_dota_hero_lone_druid",
    "name_english_loc": "Lone Druid",
    "primary_attr": 1,
    "complexity": 3
}, {
    "id": 81,
    "name": "npc_dota_hero_chaos_knight",
    "name_english_loc": "Chaos Knight",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 82,
    "name": "npc_dota_hero_meepo",
    "name_english_loc": "Meepo",
    "primary_attr": 1,
    "complexity": 3
}, {
    "id": 83,
    "name": "npc_dota_hero_treant",
    "name_english_loc": "Treant Protector",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 84,
    "name": "npc_dota_hero_ogre_magi",
    "name_english_loc": "Ogre Magi",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 85,
    "name": "npc_dota_hero_undying",
    "name_english_loc": "Undying",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 86,
    "name": "npc_dota_hero_rubick",
    "name_english_loc": "Rubick",
    "primary_attr": 2,
    "complexity": 3
}, {
    "id": 87,
    "name": "npc_dota_hero_disruptor",
    "name_english_loc": "Disruptor",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 88,
    "name": "npc_dota_hero_nyx_assassin",
    "name_english_loc": "Nyx Assassin",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 89,
    "name": "npc_dota_hero_naga_siren",
    "name_english_loc": "Naga Siren",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 90,
    "name": "npc_dota_hero_keeper_of_the_light",
    "name_english_loc": "Keeper of the Light",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 91,
    "name": "npc_dota_hero_wisp",
    "name_english_loc": "Io",
    "primary_attr": 0,
    "complexity": 3
}, {
    "id": 92,
    "name": "npc_dota_hero_visage",
    "name_english_loc": "Visage",
    "primary_attr": 2,
    "complexity": 3
}, {
    "id": 93,
    "name": "npc_dota_hero_slark",
    "name_english_loc": "Slark",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 94,
    "name": "npc_dota_hero_medusa",
    "name_english_loc": "Medusa",
    "primary_attr": 1,
    "complexity": 1
}, {
    "id": 95,
    "name": "npc_dota_hero_troll_warlord",
    "name_english_loc": "Troll Warlord",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 96,
    "name": "npc_dota_hero_centaur",
    "name_english_loc": "Centaur Warrunner",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 97,
    "name": "npc_dota_hero_magnataur",
    "name_english_loc": "Magnus",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 98,
    "name": "npc_dota_hero_shredder",
    "name_english_loc": "Timbersaw",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 99,
    "name": "npc_dota_hero_bristleback",
    "name_english_loc": "Bristleback",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 100,
    "name": "npc_dota_hero_tusk",
    "name_english_loc": "Tusk",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 101,
    "name": "npc_dota_hero_skywrath_mage",
    "name_english_loc": "Skywrath Mage",
    "primary_attr": 2,
    "complexity": 1
}, {
    "id": 102,
    "name": "npc_dota_hero_abaddon",
    "name_english_loc": "Abaddon",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 103,
    "name": "npc_dota_hero_elder_titan",
    "name_english_loc": "Elder Titan",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 104,
    "name": "npc_dota_hero_legion_commander",
    "name_english_loc": "Legion Commander",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 106,
    "name": "npc_dota_hero_ember_spirit",
    "name_english_loc": "Ember Spirit",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 107,
    "name": "npc_dota_hero_earth_spirit",
    "name_english_loc": "Earth Spirit",
    "primary_attr": 0,
    "complexity": 3
}, {
    "id": 109,
    "name": "npc_dota_hero_terrorblade",
    "name_english_loc": "Terrorblade",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 110,
    "name": "npc_dota_hero_phoenix",
    "name_english_loc": "Phoenix",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 111,
    "name": "npc_dota_hero_oracle",
    "name_english_loc": "Oracle",
    "primary_attr": 2,
    "complexity": 3
}, {
    "id": 105,
    "name": "npc_dota_hero_techies",
    "name_english_loc": "Techies",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 112,
    "name": "npc_dota_hero_winter_wyvern",
    "name_english_loc": "Winter Wyvern",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 113,
    "name": "npc_dota_hero_arc_warden",
    "name_english_loc": "Arc Warden",
    "primary_attr": 1,
    "complexity": 3
}, {
    "id": 108,
    "name": "npc_dota_hero_abyssal_underlord",
    "name_english_loc": "Underlord",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 114,
    "name": "npc_dota_hero_monkey_king",
    "name_english_loc": "Monkey King",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 120,
    "name": "npc_dota_hero_pangolier",
    "name_english_loc": "Pangolier",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 119,
    "name": "npc_dota_hero_dark_willow",
    "name_english_loc": "Dark Willow",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 121,
    "name": "npc_dota_hero_grimstroke",
    "name_english_loc": "Grimstroke",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 129,
    "name": "npc_dota_hero_mars",
    "name_english_loc": "Mars",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 126,
    "name": "npc_dota_hero_void_spirit",
    "name_english_loc": "Void Spirit",
    "primary_attr": 2,
    "complexity": 2
}, {
    "id": 128,
    "name": "npc_dota_hero_snapfire",
    "name_english_loc": "Snapfire",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 123,
    "name": "npc_dota_hero_hoodwink",
    "name_english_loc": "Hoodwink",
    "primary_attr": 1,
    "complexity": 2
}, {
    "id": 135,
    "name": "npc_dota_hero_dawnbreaker",
    "name_english_loc": "Dawnbreaker",
    "primary_attr": 0,
    "complexity": 1
}, {
    "id": 136,
    "name": "npc_dota_hero_marci",
    "name_english_loc": "Marci",
    "primary_attr": 0,
    "complexity": 2
}, {
    "id": 137,
    "name": "npc_dota_hero_primal_beast",
    "name_english_loc": "Primal Beast",
    "primary_attr": 0,
    "complexity": 1
}].sort((a, b) => a.name_english_loc.localeCompare(b.name_english_loc))

// let disabledHeroes = [
//     "Anti-Mage",
//     "Axe",
//     "Bane",
//     "Drow Ranger",
//     "Crystal Maiden",
//     "Bloodseeker",
//     "Earthshaker",
//     "Juggernaut",
//     "Mirana",
//     "Phantom Lancer",
//     "Morphling",
//     "Shadow Fiend",
//     "Storm Spirit",
//     "Sand King",
//     "Sven",
//     "Windranger",
//     "Razor",
//     "Vengeful Spirit",
//     "Tiny",
//     "Zeus",
//     "Kunkka",
//     "Lina",
//     "Shadow Shaman",
//     "Lion",
//     "Lich",
//     "Slardar",
//     "Tidehunter",
//     "Witch Doctor",
//     "Tinker",
//     "Enigma",
//     "Riki",
//     "Sniper",
//     "Necrophos",
//     "Warlock",
//     "Venomancer",
//     "Queen of Pain",
//     "Beastmaster",
//     "Faceless Void",
//     "Death Prophet",
//     "Wraith King",
//     "Templar Assassin",
//     "Pugna",
//     "Phantom Assassin",
//     "Viper",
//     "Luna",
//     "Dragon Knight",
//     "Leshrac",
//     "Clockwerk",
//     "Dazzle",
//     "Nature's Prophet",
//     "Lifestealer",
//     "Dark Seer",
//     "Enchantress",
//     "Omniknight",
//     "Clinkz",
//     "Huskar",
//     "Night Stalker",
//     "Broodmother",
//     "Jakiro",
//     "Weaver",
//     "Bounty Hunter",
//     "Batrider",
//     "Chen",
//     "Spectre",
//     "Ursa",
//     "Ancient Apparition",
//     "Doom",
//     "Spirit Breaker",
//     "Gyrocopter",
//     "Alchemist",
//     "Outworld Destroyer",
//     "Silencer",
//     "Invoker",
//     "Lycan",
//     "Brewmaster",
//     "Shadow Demon",
//     "Meepo",
//     "Chaos Knight",
//     "Lone Druid",
//     "Undying",
//     "Ogre Magi",
//     "Treant Protector",
//     "Rubick",
//     "Disruptor",
//     "Nyx Assassin",
//     "Io",
//     "Keeper of the Light",
//     "Naga Siren",
//     "Medusa",
//     "Slark",
//     "Visage",
//     "Troll Warlord",
//     "Centaur Warrunner",
//     "Magnus",
//     "Bristleback",
//     "Tusk",
//     "Timbersaw",
//     "Skywrath Mage",
//     "Abaddon",
//     "Elder Titan",
//     "Earth Spirit",
//     "Ember Spirit",
//     "Legion Commander",
//     "Terrorblade",
//     "Phoenix",
//     "Oracle",
//     "Arc Warden",
//     "Winter Wyvern",
//     "Techies",
//     "Underlord",
//     "Monkey King",
//     "Pangolier",
//     "Mars",
//     "Grimstroke",
//     "Dark Willow",
//     "Void Spirit",
//     "Snapfire",
//     "Hoodwink",
//     "Primal Beast",
//     "Marci",
//     "Dawnbreaker"
// ]

const heroesContainer = document.querySelector('#heroes-container');
const heroElementTemplate = heroesContainer.querySelector('template').innerHTML;

document.querySelector('#random-button').addEventListener('click', (e)=>{
    let filteredHeroes = heroes.filter(hero => !disabledHeroes.includes(hero.name_english_loc));
    console.log(filteredHeroes);
    let randomId = Math.floor(Math.random() * filteredHeroes.length);
    console.log(randomId);
    let heroName = filteredHeroes[randomId].name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    document.querySelector('#random-hero img').src = `./img/heroes/full/${heroImage}.png`;
    document.querySelector('#random-hero h1').innerText = heroName;
});

const heroesByAttributes = [
    heroes.filter(hero => hero.primary_attr == 0),
    heroes.filter(hero => hero.primary_attr == 1),
    heroes.filter(hero => hero.primary_attr == 2)
];

heroesContainer.innerHTML += `
<div class="w-full flex flex-row space-x-3 mt-2 select-none">
    <img alt="team" class="object-contain object-center flex-shrink-0 drop-shadow-md" src="./img/hero_strength.png">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-3 font-medium text-white">Сила</h1>
</div>
`
heroesByAttributes[0].forEach(hero => {
    let heroName = hero.name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    heroesContainer.innerHTML += heroElementTemplate.replace('%IMAGE%', `./img/heroes/full/${heroImage}.png`).replace('%NAME%', heroName);
});

heroesContainer.innerHTML += `
<div class="w-full flex flex-row space-x-3 mt-4 select-none">
    <img alt="team" class="object-contain object-center flex-shrink-0 drop-shadow-md" src="./img/hero_agility.png">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-3 font-medium text-white">Ловкость</h1>
</div>
`
heroesByAttributes[1].forEach(hero => {
    let heroName = hero.name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    heroesContainer.innerHTML += heroElementTemplate.replace('%IMAGE%', `./img/heroes/full/${heroImage}.png`).replace('%NAME%', heroName);
});

heroesContainer.innerHTML += `
<div class="w-full flex flex-row space-x-3 mt-4 select-none">
    <img alt="team" class="object-contain object-center flex-shrink-0 drop-shadow-md" src="./img/hero_intelligence.png">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-3 font-medium text-white">Интеллект</h1>
</div>
`
heroesByAttributes[2].forEach(hero => {
    let heroName = hero.name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    heroesContainer.innerHTML += heroElementTemplate.replace('%IMAGE%', `./img/heroes/full/${heroImage}.png`).replace('%NAME%', heroName);
});

const heroElements = heroesContainer.querySelectorAll('.hero-element');
heroElements.forEach(heroElement => {
    updateHeroElements();
    heroElement.addEventListener('click', e => {
        let element = e.currentTarget.querySelector('div');
        let heroName = element.querySelector('h2').innerText;
        if (element.classList.contains('border-rose-500')){
            element.classList.remove('border-rose-500')
            disabledHeroes = disabledHeroes.filter(e => e !== heroName)
            localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
        } else {
            element.classList.add('border-rose-500');
            disabledHeroes.push(heroName);
            localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
        }
    });
});

document.querySelector('#enable-all-button').onclick = ()=>{
    disabledHeroes = []
    localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
    updateHeroElements();
};

document.querySelector('#disable-all-button').onclick = ()=>{
    disabledHeroes = [];
    heroes.forEach(hero => {
        disabledHeroes.push(hero.name_english_loc);
    });
    localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
    updateHeroElements();
};

function updateHeroElements(){
    heroElements.forEach(heroElement => {
        if (disabledHeroes.includes(heroElement.querySelector('h2').innerText)){
            heroElement.querySelector('div').classList.add('border-rose-500');
        } else {
            heroElement.querySelector('div').classList.remove('border-rose-500');
        }
    });
}

// document.querySelector('#random-button').click();

const searchInput = document.querySelector('#search-input');
searchInput.click();
searchInput.addEventListener('input', (e) => {
    let inputValue = e.currentTarget.value;
    heroElements.forEach(heroElement => {
        if (heroElement.querySelector('h2').innerText.toLowerCase().indexOf(inputValue.toLowerCase()) != -1){
            heroElement.classList.remove('opacity-20');
            heroElement.classList.add('-translate-y-1');
        } else {
            heroElement.classList.add('opacity-20');
            heroElement.classList.remove('-translate-y-1');
        }
    });
    if (inputValue == "") {
        heroElements.forEach(heroElement => {
            heroElement.classList.remove('-translate-y-1');
        });
    }
});

