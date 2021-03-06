const items = [
    {
        "hint": [
            "Active: Blink Teleport to a target point up to 1200 units away. Blink Dagger cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 0,
        "img": "recipe.png",
        "dname": "Recipe",
        "qual": "component",
        "cost": 2250,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [],
        "mc": false,
        "cd": 15,
        "lore": "The fabled dagger used by the fastest assassin ever to walk the lands.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "recipe",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Blink Teleport to a target point up to 1200 units away. Blink Dagger cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 1,
        "img": "blink.png",
        "dname": "Blink Dagger",
        "qual": "component",
        "cost": 2250,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [],
        "mc": false,
        "cd": 15,
        "lore": "The fabled dagger used by the fastest assassin ever to walk the lands.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "blink",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Overwhelming Blink Teleport to a target point up to 1200 units away.After teleportation, all enemies in a 800 AoE have 50% movement speed slow and 50 attack speed slow for 6 seconds, and take damage equal to 100 + 150% of your strength. Overwhelming Blink cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 600,
        "img": "overwhelming_blink.png",
        "dname": "Overwhelming Blink",
        "qual": "component",
        "cost": 6800,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Overwhelming Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "25",
                "footer": "Strength"
            }
        ],
        "mc": false,
        "cd": 15,
        "lore": "A horrifying dagger forged in the chaos maw and nigh untouchable by mortal hands.",
        "components": [
            "blink",
            "reaver",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "overwhelming_blink",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Swift Blink Teleport to a target point up to %blink_range% units away.After teleportation, you gain %bonus_movement%%% phased movement speed and +%bonus_agi_active% Agility for %duration% seconds. Swift Blink cannot be used for %blink_damage_cooldown% seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 603,
        "img": "swift_blink.png",
        "dname": "Swift Blink",
        "qual": "component",
        "cost": 6800,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Swift Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [],
        "mc": false,
        "cd": 15,
        "lore": "A cunning blade able to anticipate and enable its bearer's movements.",
        "components": [
            "blink",
            "eagle",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "swift_blink",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Arcane Blink Teleport to a target point up to %blink_range% units away.After teleportation, you gain %manacost_reduction%%% Mana Cost Reduction, %debuff_amp%%% Debuff Amplification and %cast_pct_improvement%%% Cast Point reduction for %duration% seconds. Arcane Blink cannot be used for %blink_damage_cooldown% seconds after taking damage from an enemy hero or Roshan."
        ],
        "id": 604,
        "img": "arcane_blink.png",
        "dname": "Arcane Blink",
        "qual": "component",
        "cost": 6800,
        "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Arcane Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        "attrib": [],
        "mc": false,
        "cd": 15,
        "lore": "A revitalizing tool to help bear the weight of arcane expenditure.",
        "components": [
            "blink",
            "mystic_staff",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "arcane_blink",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 2,
        "img": "blades_of_attack.png",
        "dname": "Blades of Attack",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "9",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The damage of these small, concealable blades should not be underestimated.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "blades_of_attack",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 3,
        "img": "broadsword.png",
        "dname": "Broadsword",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "15",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The classic weapon of choice for knights, this blade is sturdy and reliable for slaying enemies.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "broadsword",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 4,
        "img": "chainmail.png",
        "dname": "Chainmail",
        "qual": "component",
        "cost": 550,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "4",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A medium weave of metal chains.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "chainmail",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 5,
        "img": "claymore.png",
        "dname": "Claymore",
        "qual": "component",
        "cost": 1350,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "20",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A sword that can cut through armor, it's a commonly chosen first weapon for budding swordsmen.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "claymore",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 6,
        "img": "helm_of_iron_will.png",
        "dname": "Helm of Iron Will",
        "qual": "component",
        "cost": 975,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "6",
                "footer": "Armor"
            },
            {
                "key": "bonus_regen",
                "header": "+",
                "value": "5",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The helmet of a legendary warrior who fell in battle.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "helm_of_iron_will",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: PierceGrants each attack a 30% chance to pierce through evasion and deal 70 bonus magical damage."
        ],
        "id": 7,
        "img": "javelin.png",
        "dname": "Javelin",
        "qual": "component",
        "cost": 1100,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A rather typical spear that can sometimes pierce through an enemy's armor when used to attack.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "javelin",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 8,
        "img": "mithril_hammer.png",
        "dname": "Mithril Hammer",
        "qual": "component",
        "cost": 1600,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "24",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A hammer forged of pure mithril.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "mithril_hammer",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 9,
        "img": "platemail.png",
        "dname": "Platemail",
        "qual": "secret_shop",
        "cost": 1400,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "10",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Thick metal plates that protect the entire upper body. Avoid dropping on feet.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "platemail",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 10,
        "img": "quarterstaff.png",
        "dname": "Quarterstaff",
        "qual": "component",
        "cost": 875,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_speed",
                "header": "+",
                "value": "10",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "10",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A basic staff that allows you to strike quickly.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "quarterstaff",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Chop Tree Destroy a target tree. Cast Range: 350",
            "Passive: Quell Increases attack damage against non-hero units by 8 for melee heroes, and 4 for ranged."
        ],
        "id": 11,
        "img": "quelling_blade.png",
        "dname": "Quelling Blade",
        "qual": "component",
        "cost": 100,
        "notes": "Effects of multiple quelling blades do not stack.",
        "attrib": [],
        "mc": false,
        "cd": 4,
        "lore": "The axe of a fallen gnome, it allows you to effectively maneuver the forest.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "quelling_blade",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Use: Imbue Instantly restores 85 health."
        ],
        "id": 237,
        "img": "faerie_fire.png",
        "dname": "Faerie Fire",
        "qual": "consumable",
        "cost": 70,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "2",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "The ethereal flames from the ever-burning ruins of Kindertree ignite across realities.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "faerie_fire",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Passive: Magical Damage Block Consumes a charge to block 120 magic damage from damage instances over 75 damage. Comes with 6 charges. When the charges are gone, the item disappears."
        ],
        "id": 265,
        "img": "infused_raindrop.png",
        "dname": "Infused Raindrops",
        "qual": "component",
        "cost": 225,
        "notes": "Uses at most one charge per damage instance.",
        "attrib": [
            {
                "key": "mana_regen",
                "header": "+",
                "value": "0.8",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "Elemental protection from magical assaults.",
        "components": null,
        "created": false,
        "charges": 6,
        "name": "infused_raindrop",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Bonuses from multiple Wind Laces do not stack."
        ],
        "id": 244,
        "img": "wind_lace.png",
        "dname": "Wind Lace",
        "qual": "component",
        "cost": 250,
        "notes": "",
        "attrib": [
            {
                "key": "movement_speed",
                "header": "+",
                "value": "20",
                "footer": "Movement Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Hasten to battle on wind-touched heels.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "wind_lace",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 12,
        "img": "ring_of_protection.png",
        "dname": "Ring of Protection",
        "qual": "component",
        "cost": 175,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "2",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A glimmering ring that defends its bearer.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "ring_of_protection",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Use: Consume Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use.",
            "Passive: Shade SightGrants bonus night vision."
        ],
        "id": 247,
        "img": "moon_shard.png",
        "dname": "Moon Shard",
        "qual": "consumable",
        "cost": 4000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "140",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_night_vision",
                "header": "+Bonus Night Vision",
                "value": "400"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Said to be a tear from the lunar goddess Selemene.",
        "components": [
            "hyperstone",
            "hyperstone"
        ],
        "created": true,
        "charges": false,
        "name": "moon_shard",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 13,
        "img": "gauntlets.png",
        "dname": "Gauntlets of Strength",
        "qual": "component",
        "cost": 140,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "3",
                "footer": "Strength"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Studded leather gloves that add brute strength.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "gauntlets",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 14,
        "img": "slippers.png",
        "dname": "Slippers of Agility",
        "qual": "component",
        "cost": 140,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "3",
                "footer": "Agility"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Light boots made from spider skin that tingles your senses.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "slippers",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 15,
        "img": "mantle.png",
        "dname": "Mantle of Intelligence",
        "qual": "component",
        "cost": 140,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "3",
                "footer": "Intelligence"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A beautiful sapphire mantle worn by generations of queens.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "mantle",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Use: Plant Tree Targets the ground to plant a happy little tree that lasts for 20 seconds.Range: 400"
        ],
        "id": 16,
        "img": "branches.png",
        "dname": "Iron Branch",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "1",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "branches",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 17,
        "img": "belt_of_strength.png",
        "dname": "Belt of Strength",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "6",
                "footer": "Strength"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A valued accessory for improving vitality.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "belt_of_strength",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 18,
        "img": "boots_of_elves.png",
        "dname": "Band of Elvenskin",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "6",
                "footer": "Agility"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A tensile fabric often used for its light weight and ease of movement.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "boots_of_elves",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 19,
        "img": "robe.png",
        "dname": "Robe of the Magi",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "6",
                "footer": "Intelligence"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "This robe corrupts the soul of the user, but provides wisdom in return.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "robe",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 20,
        "img": "circlet.png",
        "dname": "Circlet",
        "qual": "component",
        "cost": 155,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "2",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An elegant circlet designed for human princesses.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "circlet",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 261,
        "img": "crown.png",
        "dname": "Crown",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "4",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A stately crown created to ensure a well-meaning but ungifted heir could fend off usurpers and govern with a strong hand.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "crown",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 21,
        "img": "ogre_axe.png",
        "dname": "Ogre Axe",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "10",
                "footer": "Strength"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "You grow stronger just by holding it.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "ogre_axe",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 22,
        "img": "blade_of_alacrity.png",
        "dname": "Blade of Alacrity",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "10",
                "footer": "Agility"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A long blade imbued with time magic.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "blade_of_alacrity",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 23,
        "img": "staff_of_wizardry.png",
        "dname": "Staff of Wizardry",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "10",
                "footer": "Intelligence"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A staff of magical powers passed down from the eldest mages.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "staff_of_wizardry",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 24,
        "img": "ultimate_orb.png",
        "dname": "Ultimate Orb",
        "qual": "secret_shop",
        "cost": 2050,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "10",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mystical orb containing the essence of life.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "ultimate_orb",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 25,
        "img": "gloves.png",
        "dname": "Gloves of Haste",
        "qual": "component",
        "cost": 450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "20",
                "footer": "Attack Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A pair of magical gloves that seems to render weapons weightless.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "gloves",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 485,
        "img": "blitz_knuckles.png",
        "dname": "Blitz Knuckles",
        "qual": "component",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "35",
                "footer": "Attack Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An underground arcanist's update of a back-alley classic.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "blitz_knuckles",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: LifestealHeals the attacker for a percentage of attack damage dealt."
        ],
        "id": 26,
        "img": "lifesteal.png",
        "dname": "Morbid Mask",
        "qual": "component",
        "cost": 900,
        "notes": "",
        "attrib": [
            {
                "key": "lifesteal_percent",
                "header": "+",
                "value": "15%",
                "footer": "Lifesteal"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mask that drains the energy of those caught in its gaze.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "lifesteal",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Spell LifestealSpell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  Lifesteal reduced against creeps."
        ],
        "id": 473,
        "img": "voodoo_mask.png",
        "dname": "Voodoo Mask",
        "qual": "component",
        "cost": 700,
        "notes": "",
        "attrib": [
            {
                "key": "spell_lifesteal",
                "header": "+",
                "value": "10%",
                "footer": "Spell Lifesteal"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mask tuned to sip the arcane bindings that pass between caster and foe.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "voodoo_mask",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 27,
        "img": "ring_of_regen.png",
        "dname": "Ring of Regen",
        "qual": "component",
        "cost": 175,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "1.25",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "This ring is considered a good luck charm among the Gnomes.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "ring_of_regen",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 28,
        "img": "sobi_mask.png",
        "dname": "Sage's Mask",
        "qual": "component",
        "cost": 175,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "0.7",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mask commonly used by mages and warlocks for various rituals.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "sobi_mask",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 29,
        "img": "boots.png",
        "dname": "Boots of Speed",
        "qual": "component",
        "cost": 500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "45",
                "footer": "Movement Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Fleet footwear, increasing movement.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "boots",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Reveal Gives True Sight over a %active_radius% radius revealing wards and units even in Fog of War.",
            "Passive: True Sight Grants the ability to see invisible units and wards to any allied vision within %radius% range of its carrier. ",
            "Passive: EverlastingDropped on death, and cannot be destroyed."
        ],
        "id": 30,
        "img": "gem.png",
        "dname": "Gem of True Sight",
        "qual": "component",
        "cost": 900,
        "notes": "Disabled while on a courier.",
        "attrib": [],
        "mc": false,
        "cd": 12,
        "lore": "Not one thrall creature of the depths,\r\nNor spirit bound in drowning's keep,\r\nNor Maelrawn the Tentacular,\r\nShall rest till seas, gem comes to sleep.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "gem",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 31,
        "img": "cloak.png",
        "dname": "Cloak",
        "qual": "component",
        "cost": 500,
        "notes": "Stacks multiplicatively with other sources of spell resistance.",
        "attrib": [
            {
                "key": "tooltip_resist",
                "header": "+",
                "value": "15%",
                "footer": "Magic Resistance"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A cloak made of a magical material that works to dispel any magic cast on it.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "cloak",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 32,
        "img": "talisman_of_evasion.png",
        "dname": "Talisman of Evasion",
        "qual": "secret_shop",
        "cost": 1300,
        "notes": "Stacks diminishingly with other sources of Evasion.",
        "attrib": [
            {
                "key": "bonus_evasion",
                "header": "+",
                "value": "15%",
                "footer": "Evasion"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A necklace that allows you to anticipate enemy attacks.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "talisman_of_evasion",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Use: Fondue Instantly restores 2500 health and 1500 mana."
        ],
        "id": 33,
        "img": "cheese.png",
        "dname": "Cheese",
        "qual": "consumable",
        "cost": 1000,
        "notes": "Cheese is shareable.",
        "attrib": [],
        "mc": false,
        "cd": 40,
        "lore": "Made from the milk of a long lost Furbolg vendor, it restores the vitality of those who taste it.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "cheese",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Active: Energy Charge Instantly restores 15 health and mana per charge stored. Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability."
        ],
        "id": 34,
        "img": "magic_stick.png",
        "dname": "Magic Stick",
        "qual": "component",
        "cost": 200,
        "notes": "Gains charges for spells cast by visible enemies in 1200 range.\nCertain abilities and item abilities will not add charges.",
        "attrib": [],
        "mc": false,
        "cd": 13,
        "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "magic_stick",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Energy ChargeInstantly restores 15 health and mana per charge stored. Max 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability."
        ],
        "id": 36,
        "img": "magic_wand.png",
        "dname": "Magic Wand",
        "qual": "common",
        "cost": 450,
        "notes": "Gains charges for spells cast by visible enemies in 1200 range.\nCertain abilities and item abilities will not add charges.",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "3",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": 13,
        "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "components": [
            "magic_stick",
            "branches",
            "branches",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "magic_wand",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Ghost Form You enter ghost form for 4 seconds, becoming immune to physical damage, but are unable to attack and -40% more vulnerable to magic damage."
        ],
        "id": 37,
        "img": "ghost.png",
        "dname": "Ghost Scepter",
        "qual": "component",
        "cost": 1500,
        "notes": "Ends if you become Spell Immune, and will have no effect if you are already Spell Immune.\nShares cooldown with Ethereal Blade.",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "5",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": 22,
        "lore": "Imbues the wielder with a ghostly presence, allowing them to evade physical damage.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "ghost",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Use: Replenish Grants 6 mana regeneration to the target for 25 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250"
        ],
        "id": 38,
        "img": "clarity.png",
        "dname": "Clarity",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Clear water that enhances the ability to meditate.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "clarity",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: Eat Mango Instantly restores 100 mana.Range: 400"
        ],
        "id": 216,
        "img": "enchanted_mango.png",
        "dname": "Enchanted Mango",
        "qual": "consumable",
        "cost": 65,
        "notes": "Hold Control to use on a nearby allied hero.",
        "attrib": [
            {
                "key": "hp_regen",
                "header": "+",
                "value": "0.6",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The bittersweet flavors of Jidi Isle are irresistible to amphibians.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "enchanted_mango",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: Salve Grants 30 health regeneration to the target for 13 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250"
        ],
        "id": 39,
        "img": "flask.png",
        "dname": "Healing Salve",
        "qual": "consumable",
        "cost": 110,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A magical salve that can quickly mend even the deepest of wounds.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "flask",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: RevealReveals and slows invisible heroes by %movespeed%%% in a %radius% radius around the caster for %duration% seconds. Invisible units revealed by dust take %damage% damage."
        ],
        "id": 40,
        "img": "dust.png",
        "dname": "Dust of Appearance",
        "qual": "consumable",
        "cost": 80,
        "notes": "Places a debuff on enemy units in the area that reveals them when they are invisible.",
        "attrib": [],
        "mc": false,
        "cd": 30,
        "lore": "One may hide visage, but never volume.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "dust",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Active: RegenerateConsumes a charge to restore 110 health and 60 mana over 2.7 seconds. If the hero is attacked by an enemy hero or Roshan, the effect is lost.The Bottle automatically refills at the fountain.Hold Control to use on an allied hero.Range: 350",
            "Passive:  Store RuneRunes can be stored in the bottle for later use by right-clicking them. Unused runes will automatically activate after 90 seconds.Using a stored rune fully refills the Bottle."
        ],
        "id": 41,
        "img": "bottle.png",
        "dname": "Bottle",
        "qual": "common",
        "cost": 675,
        "notes": "Bottle is shareable. Stored runes cannot be shared.",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An old bottle that survived the ages, the contents placed inside become enchanted.",
        "components": null,
        "created": false,
        "charges": 3,
        "name": "bottle",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: PlantPlants an Observer Ward, an invisible watcher that gives ground vision in a %vision_range_tooltip% radius to your team. Lasts %duration_minutes_tooltip% minutes.Hold Control to give one Observer Ward to an allied hero.Range: %abilitycastrange%"
        ],
        "id": 42,
        "img": "ward_observer.png",
        "dname": "Observer Ward",
        "qual": "consumable",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 1,
        "lore": "A form of half-sentient plant, often cultivated by apprentice wizards.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "ward_observer",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: Plant Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a %true_sight_range% radius.Lasts %duration_minutes_tooltip% minutes.Does not grant ground vision.Hold Control to give one Sentry Ward to an allied hero. Range: %abilitycastrange%"
        ],
        "id": 43,
        "img": "ward_sentry.png",
        "dname": "Sentry Ward",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 1,
        "lore": "A form of plant originally grown in the garden of a fearful king.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "ward_sentry",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: Devour Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.Comes with 3 charges.  Can be used on an allied hero to give them one Tango.Tree Range: 165"
        ],
        "id": 44,
        "img": "tango.png",
        "dname": "Tango",
        "qual": "consumable",
        "cost": 90,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Forage to survive on the battlefield.",
        "components": null,
        "created": false,
        "charges": 3,
        "name": "tango",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: Devour Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.Tree Range: 165"
        ],
        "id": 241,
        "img": "tango_single.png",
        "dname": "Tango (Shared)",
        "qual": "consumable",
        "cost": 30,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Om nom nom.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "tango_single",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: TeleportAfter channeling for 3 seconds, teleports you to a target friendly building. Double-click to teleport to your team's base fountain."
        ],
        "id": 46,
        "img": "tpscroll.png",
        "dname": "Town Portal Scroll",
        "qual": "consumable",
        "cost": 100,
        "notes": "If multiple heroes teleport to the same location in succession, the channeling time will be increased for each successive hero.\nTeleport can be prevented or canceled by Root abilities.",
        "attrib": [],
        "mc": 75,
        "cd": 80,
        "lore": "What a hero truly needs.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "tpscroll",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Upgrade: Town Portal ScrollUpgrades your Town Portal Scroll, allowing it to target units, reduces cooldown and does not consume a charge on usage. ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 48,
        "img": "travel_boots.png",
        "dname": "Boots of Travel",
        "qual": "common",
        "cost": 2500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "90",
                "footer": "Movement Speed"
            },
            {
                "key": "tp_cooldown",
                "header": "TOWN PORTAL SCROLL COOLDOWN:",
                "value": "40"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Winged boots that grant omnipresence.",
        "components": [
            "boots",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "travel_boots",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Upgrade: Town Portal ScrollUpgrades your Town Portal Scroll, allowing it to target units and heroes, reduces cooldown, channel time and does not consume a charge on usage. ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 220,
        "img": "travel_boots_2.png",
        "dname": "Boots of Travel 2",
        "qual": "common",
        "cost": 4500,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Winged boots that grant omnipresence.",
        "components": [
            "travel_boots",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "travel_boots_2",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Phase Gives 20% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 3 seconds.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 50,
        "img": "phase_boots.png",
        "dname": "Phase Boots",
        "qual": "common",
        "cost": 1500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "45",
                "footer": "Movement Speed"
            },
            {
                "key": "bonus_damage_melee",
                "header": "+Damage (MELEE)",
                "value": "18"
            },
            {
                "key": "bonus_damage_range",
                "header": "+Damage (RANGED)",
                "value": "12"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "4",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": 8,
        "lore": "Boots that allow the wearer to travel between the ether.",
        "components": [
            "boots",
            "chainmail",
            "blades_of_attack"
        ],
        "created": true,
        "charges": false,
        "name": "phase_boots",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 51,
        "img": "demon_edge.png",
        "dname": "Demon Edge",
        "qual": "secret_shop",
        "cost": 2200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "40",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "One of the oldest weapons forged by the Demon-Smith Abzidian, it killed its maker when he tested its edge.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "demon_edge",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 52,
        "img": "eagle.png",
        "dname": "Eaglesong",
        "qual": "secret_shop",
        "cost": 2800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "25",
                "footer": "Agility"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Capturing the majestic call of an eagle, this mystical horn brings limitless dexterity to those who hear it.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "eagle",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 53,
        "img": "reaver.png",
        "dname": "Reaver",
        "qual": "secret_shop",
        "cost": 2800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "25",
                "footer": "Strength"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A massive axe capable of tearing whole mountains down.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "reaver",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 54,
        "img": "relic.png",
        "dname": "Sacred Relic",
        "qual": "secret_shop",
        "cost": 3750,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "60",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An ancient weapon that often turns the tides of war.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "relic",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 55,
        "img": "hyperstone.png",
        "dname": "Hyperstone",
        "qual": "secret_shop",
        "cost": 2000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "60",
                "footer": "Attack Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A mystical, carved stone that boosts the fervor of the holder.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "hyperstone",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 56,
        "img": "ring_of_health.png",
        "dname": "Ring of Health",
        "qual": "component",
        "cost": 825,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "6.5",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A shiny ring found beneath a fat halfling's corpse.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "ring_of_health",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 57,
        "img": "void_stone.png",
        "dname": "Void Stone",
        "qual": "component",
        "cost": 825,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "2.25",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Jewelry that was once used to channel nether realm magic, this ring pulses with energy.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "void_stone",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 58,
        "img": "mystic_staff.png",
        "dname": "Mystic Staff",
        "qual": "secret_shop",
        "cost": 2800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "25",
                "footer": "Intelligence"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Enigmatic staff made of only the most expensive crystals.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "mystic_staff",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 59,
        "img": "energy_booster.png",
        "dname": "Energy Booster",
        "qual": "secret_shop",
        "cost": 800,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "250",
                "footer": "Mana"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "This lapis gemstone is commonly added to the collection of wizards seeking to improve their presence in combat.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "energy_booster",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 60,
        "img": "point_booster.png",
        "dname": "Point Booster",
        "qual": "secret_shop",
        "cost": 1200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "175",
                "footer": "Mana"
            },
            {
                "key": "bonus_health",
                "header": "+",
                "value": "175",
                "footer": "Health"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A perfectly formed amethyst that nourishes body and mind when held.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "point_booster",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 61,
        "img": "vitality_booster.png",
        "dname": "Vitality Booster",
        "qual": "secret_shop",
        "cost": 1000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "+",
                "value": "250",
                "footer": "Health"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A ruby gemstone that has been passed down through generations of warrior kin.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "vitality_booster",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 593,
        "img": "fluffy_hat.png",
        "dname": "Fluffy Hat",
        "qual": "secret_shop",
        "cost": 250,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "+",
                "value": "125",
                "footer": "Health"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Fine and functional foppery for the fashion-forward fighter.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "fluffy_hat",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Switch AttributeSwitches between +10 Strength, +10 Agility, or +10 Intelligence.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 63,
        "img": "power_treads.png",
        "dname": "Power Treads",
        "qual": "common",
        "cost": 1400,
        "notes": "Power Treads can be built using a Belt of Strength, Band of Elvenskin, or a Robe of the Magi.",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "45",
                "footer": "Movement Speed"
            },
            {
                "key": "bonus_stat",
                "header": "+",
                "value": "10",
                "footer": "Selected Attribute"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "25",
                "footer": "Attack Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A pair of tough-skinned boots that change to meet the demands of the wearer.",
        "components": [
            "boots",
            "gloves",
            "belt_of_strength"
        ],
        "created": true,
        "charges": false,
        "name": "power_treads",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Transmute Kills a non-hero target for 160 gold and 2.1x experience.  Cannot be used on Ancient Creeps.Range: 600"
        ],
        "id": 65,
        "img": "hand_of_midas.png",
        "dname": "Hand of Midas",
        "qual": "common",
        "cost": 2200,
        "notes": "The gold given is reliable gold (you do not get the normal creep bounty).\nExperience gained by using Transmute is not shared.",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "40",
                "footer": "Attack Speed"
            }
        ],
        "mc": false,
        "cd": 90,
        "lore": "Preserved through unknown magical means, the Hand of Midas is a weapon of greed, sacrificing animals to line the owner's pockets.",
        "components": [
            "gloves",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "hand_of_midas",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 67,
        "img": "oblivion_staff.png",
        "dname": "Oblivion Staff",
        "qual": "common",
        "cost": 1500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "15",
                "footer": "Damage"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "10",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "10",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "1.25",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Deceptively hidden as an ordinary staff, it is actually very powerful, much like the Eldritch who originally possessed it.",
        "components": [
            "quarterstaff",
            "sobi_mask",
            "robe"
        ],
        "created": true,
        "charges": false,
        "name": "oblivion_staff",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Witch BladeCauses your next attack to apply a poison for 4 seconds, slowing by 25% and dealing 0.75x your intelligence as damage every second. This attack has True Strike."
        ],
        "id": 534,
        "img": "witch_blade.png",
        "dname": "Witch Blade",
        "qual": "common",
        "cost": 2600,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "35",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "14",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "6",
                "footer": "Armor"
            },
            {
                "key": "projectile_speed",
                "header": "+",
                "value": "300",
                "footer": "Projectile Speed"
            }
        ],
        "mc": false,
        "cd": 9,
        "lore": "A spiteful blade inadvertently possessed by the soul of its incautious creator.",
        "components": [
            "blitz_knuckles",
            "robe",
            "chainmail",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "witch_blade",
        "recipe": 0,
        "isComponent": true
    },
    {
        "id": 69,
        "img": "pers.png",
        "dname": "Perseverance",
        "qual": "common",
        "cost": 1650,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "6.5",
                "footer": "Health Regeneration"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "2.25",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A gem that grants heart to the bearer.",
        "components": [
            "ring_of_health",
            "void_stone"
        ],
        "created": true,
        "charges": false,
        "name": "pers",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Doubles its bonuses after minute %clock_time%."
        ],
        "id": 73,
        "img": "bracer.png",
        "dname": "Bracer",
        "qual": "common",
        "cost": 505,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The bracer is a common choice to toughen up defenses and increase longevity.",
        "components": [
            "circlet",
            "gauntlets",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "bracer",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Doubles its bonuses after minute %clock_time%."
        ],
        "id": 75,
        "img": "wraith_band.png",
        "dname": "Wraith Band",
        "qual": "common",
        "cost": 505,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A circlet with faint whispers echoing about it.",
        "components": [
            "circlet",
            "slippers",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "wraith_band",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Doubles its bonuses after minute %clock_time%."
        ],
        "id": 77,
        "img": "null_talisman.png",
        "dname": "Null Talisman",
        "qual": "common",
        "cost": 505,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A small gemstone attached to several chains.",
        "components": [
            "circlet",
            "mantle",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "null_talisman",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: RestoreHeals 275 health to allied units in a 1200 radius.",
            "Passive: Mekansm AuraGrants 2.5 health regeneration to allied units in a 1200 radius."
        ],
        "id": 79,
        "img": "mekansm.png",
        "dname": "Mekansm",
        "qual": "rare",
        "cost": 1875,
        "notes": "Restore does not affect units that have been affected by Restore in the last 25 seconds.\nMultiple instances of Mekansm Aura do not stack.",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "4",
                "footer": "Armor"
            }
        ],
        "mc": 100,
        "cd": 65,
        "lore": "A glowing jewel formed out of assorted parts that somehow fit together perfectly.",
        "components": [
            "headdress",
            "chainmail",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "mekansm",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Vladmir's AuraGrants 15% lifesteal, 18% bonus damage, 1.75 mana regeneration, and 3 armor to nearby allies. Radius: 1200"
        ],
        "id": 81,
        "img": "vladmir.png",
        "dname": "Vladmir's Offering",
        "qual": "rare",
        "cost": 2450,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An eerie mask that is haunted with the malice of a fallen vampire.",
        "components": [
            "buckler",
            "ring_of_basilius",
            "lifesteal",
            "blades_of_attack",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "vladmir",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Wraith's ReprisalSummons a movable totem in your location for %abilityduration% seconds that reduces all damage of enemies within %aura_radius% radius by %damage_penalty_aura%%% and deals %aura_dps% damage per second. Totem can be destroyed in 5 hits. Creeps deal half damage to the totem.",
            "Passive: Vladmir's AuraGrants %lifesteal_aura%%% lifesteal, %damage_aura%%% bonus damage, %mana_regen_aura% mana regeneration, and %armor_aura% armor to nearby allies. Radius: %aura_radius%"
        ],
        "id": 908,
        "img": "wraith_pact.png",
        "dname": "Wraith Pact",
        "qual": "rare",
        "cost": 4050,
        "notes": "",
        "attrib": [],
        "mc": 100,
        "cd": 60,
        "lore": "A sentient amulet whose animus shakes the courage of even the strongest foes.",
        "components": [
            "vladmir",
            "point_booster",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "wraith_pact",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Buckler Aura Grants 2 armor to allied player units.Radius: 1200"
        ],
        "id": 86,
        "img": "buckler.png",
        "dname": "Buckler",
        "qual": "rare",
        "cost": 425,
        "notes": "",
        "attrib": [
            {
                "key": "armor",
                "header": "+",
                "value": "1",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A powerful shield that imbues the bearer with the strength of heroes past, it is capable of protecting entire armies in battle.",
        "components": [
            "ring_of_protection",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "buckler",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Basilius AuraGrants 1 mana regeneration to allies.  Radius: 1200"
        ],
        "id": 88,
        "img": "ring_of_basilius.png",
        "dname": "Ring of Basilius",
        "qual": "rare",
        "cost": 425,
        "notes": "",
        "attrib": [
            {
                "key": "mana_regen",
                "header": "+",
                "value": "0.5",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Ring given as a reward to the greatest mages.",
        "components": [
            "sobi_mask",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "ring_of_basilius",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Energy ChargeTarget an allied unit to instantly restore %restore_per_charge% health and mana per charge stored. Max %max_charges% charges. Automatically gains a charge every %charge_gain_timer% seconds and whenever a visible enemy within %charge_radius% range uses an ability.",
            "Passive: Holy BlessingAmplifies heals you provide by %heal_increase%%%.",
            "Passive: Regeneration AuraGrants %aura_health_regen% health regeneration to allies.Radius: %aura_radius%"
        ],
        "id": 269,
        "img": "holy_locket.png",
        "dname": "Holy Locket",
        "qual": "rare",
        "cost": 2400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 13,
        "lore": "A prized relic long thought lost forever in a failed crusade.",
        "components": [
            "headdress",
            "fluffy_hat",
            "energy_booster",
            "magic_wand",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "holy_locket",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: BarrierGives a shield that blocks 400 magic damage to all nearby allies. Lasts 12 seconds.Radius: 1200",
            "Passive: Insight Aura Gives allied units 2.5 health regeneration and 12% magic resistance.Radius: 1200"
        ],
        "id": 90,
        "img": "pipe.png",
        "dname": "Pipe of Insight",
        "qual": "rare",
        "cost": 3475,
        "notes": "Multiple instances of Barrier do not stack.\nStacks multiplicatively with other sources of magic resistance.",
        "attrib": [
            {
                "key": "health_regen",
                "header": "+",
                "value": "8.5",
                "footer": "Health Regeneration"
            },
            {
                "key": "magic_resistance",
                "header": "+",
                "value": "30%",
                "footer": "Magic Resistance"
            }
        ],
        "mc": 100,
        "cd": 60,
        "lore": "A powerful artifact of mysterious origin, it creates barriers against magical forces.",
        "components": [
            "hood_of_defiance",
            "headdress",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "pipe",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Soul Release Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. Lasts 8 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.Cast Range: 950"
        ],
        "id": 92,
        "img": "urn_of_shadows.png",
        "dname": "Urn of Shadows",
        "qual": "rare",
        "cost": 880,
        "notes": "Empty urns gain 2 charges.\nIf used on a hero with Soul Release already active on them, it will refresh its duration.",
        "attrib": [
            {
                "key": "mana_regen",
                "header": "+",
                "value": "1.4",
                "footer": "Mana Regeneration"
            },
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "2",
                "footer": "All Attributes"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "2",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "Contains the ashes of powerful demons.",
        "components": [
            "sobi_mask",
            "ring_of_protection",
            "circlet",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "urn_of_shadows",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Regeneration AuraGrants 2 health regeneration to allies.Radius: 1200"
        ],
        "id": 94,
        "img": "headdress.png",
        "dname": "Headdress",
        "qual": "rare",
        "cost": 425,
        "notes": "",
        "attrib": [
            {
                "key": "health_regen",
                "header": "+",
                "value": "0.5",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Creates a soothing aura that restores allies in battle.",
        "components": [
            "ring_of_regen",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "headdress",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: HexTurns a target unit into a harmless critter for 3.5 seconds. The target has a base movement speed of 140 and will be silenced, muted, and disarmed.Instantly destroys illusions.Range: 800"
        ],
        "id": 96,
        "img": "sheepstick.png",
        "dname": "Scythe of Vyse",
        "qual": "rare",
        "cost": 5675,
        "notes": "The target will have a base movement speed of %sheep_movement_speed%, but buffs granting maximum movement speed won't be disabled.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "10",
                "footer": "Strength"
            },
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "10",
                "footer": "Agility"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "35",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "9",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": 250,
        "cd": 20,
        "lore": "The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.",
        "components": [
            "mystic_staff",
            "ultimate_orb",
            "void_stone"
        ],
        "created": true,
        "charges": false,
        "name": "sheepstick",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Soul BurnSilences the target unit for %silence_duration% seconds. At the end of the silence, %silence_damage_percent%%% of the damage received while silenced is inflicted as bonus magical damage.Range: %abilitycastrange%"
        ],
        "id": 98,
        "img": "orchid.png",
        "dname": "Orchid Malevolence",
        "qual": "rare",
        "cost": 3475,
        "notes": "",
        "attrib": [],
        "mc": 100,
        "cd": 18,
        "lore": "A garnet rod constructed from the essence of a fire demon.",
        "components": [
            "blitz_knuckles",
            "claymore",
            "void_stone",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "orchid",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Soul Rend Silences a target for %silence_duration% seconds. At the end of the silence, an additional %silence_damage_percent%%% of all damage taken during the silence will be dealt to the target as magical damage.All attacks on the silenced target will have True Strike and %tooltip_crit_chance%%% chance to crit for %target_crit_multiplier%%% damage.Range: %abilitycastrange%",
            "Passive: Mage SlayerPlaces a debuff when you attack enemies, causing them to do %spell_amp_debuff%%% less spell damage for %duration% seconds."
        ],
        "id": 250,
        "img": "bloodthorn.png",
        "dname": "Bloodthorn",
        "qual": "epic",
        "cost": 6800,
        "notes": "",
        "attrib": [],
        "mc": 100,
        "cd": 15,
        "lore": "A reviled blade that bites deeper with each wriggle of its victim's final throes.",
        "components": [
            "orchid",
            "mage_slayer",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "bloodthorn",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Echo Strike Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike."
        ],
        "id": 252,
        "img": "echo_sabre.png",
        "dname": "Echo Sabre",
        "qual": "artifact",
        "cost": 2500,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "15",
                "footer": "Damage"
            },
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "13",
                "footer": "Strength"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "10",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "10",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "1.75",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 6,
        "lore": "A deceptively swift blade imbued with resonant magic.",
        "components": [
            "ogre_axe",
            "oblivion_staff"
        ],
        "created": true,
        "charges": false,
        "name": "echo_sabre",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.Enemy units take 50 magical damage upon landing.Range: 550Dispel Type: Basic Dispel"
        ],
        "id": 100,
        "img": "cyclone.png",
        "dname": "Eul's Scepter of Divinity",
        "qual": "rare",
        "cost": 2725,
        "notes": "You cannot cyclone allies.\nCyclones cast on yourself go through spell immunity.\nCyclone can purge some buffs and debuffs.",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "10",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "2.5",
                "footer": "Mana Regeneration"
            },
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "20",
                "footer": "Movement Speed"
            }
        ],
        "mc": 175,
        "cd": 23,
        "lore": "A mysterious scepter passed down through the ages, its disruptive winds can be used for good or evil.",
        "components": [
            "staff_of_wizardry",
            "void_stone",
            "wind_lace",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "cyclone",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can be cast on yourself, enemy units or allied units.Enemy units take 50 magical damage upon landing.Range: 550Dispel Type: Basic Dispel"
        ],
        "id": 610,
        "img": "wind_waker.png",
        "dname": "Wind Waker",
        "qual": "rare",
        "cost": 6825,
        "notes": "Cyclone can purge some buffs and debuffs.\nWhen cast on yourself, the cyclone can be moved anywhere at a speed of 360.",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "50",
                "footer": "Movement Speed"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "6",
                "footer": "Mana Regeneration"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "35",
                "footer": "Intelligence"
            }
        ],
        "mc": 175,
        "cd": 18,
        "lore": "Proof enough to some that unseen forces manipulate the happenings of the material plane.",
        "components": [
            "cyclone",
            "mystic_staff",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "wind_waker",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Aethereal Focus Increases targeted spell and item cast range."
        ],
        "id": 232,
        "img": "aether_lens.png",
        "dname": "Aether Lens",
        "qual": "rare",
        "cost": 2275,
        "notes": "Passive does not stack.",
        "attrib": [
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "300",
                "footer": "Mana"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "2.5",
                "footer": "Mana Regeneration"
            },
            {
                "key": "cast_range_bonus",
                "header": "+",
                "value": "225",
                "footer": "Cast Range"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Polished with the incantation of his final breath, the gift of a dying mage to his sickly son.",
        "components": [
            "energy_booster",
            "void_stone",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "aether_lens",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: ForcePushes any target unit %push_length% units in the direction it is facing.Range: %abilitycastrange%"
        ],
        "id": 102,
        "img": "force_staff.png",
        "dname": "Force Staff",
        "qual": "rare",
        "cost": 2200,
        "notes": "Self-cast will cause you to use Force on yourself.\nForce Staff doesn't interrupt the target's actions.\nWill not work on a unit inside Chronosphere, Duel, or Black Hole.",
        "attrib": [],
        "mc": 100,
        "cd": 20,
        "lore": "Allows you to manipulate others, for good or evil.",
        "components": [
            "staff_of_wizardry",
            "fluffy_hat",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "force_staff",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Hurricane Thrust Pushes you and target enemy %enemy_length% units away from each other, and for %range_duration% seconds, allows you to make %max_attacks% attacks against the target without range restrictions and with +%bonus_attack_speed% attack speed.Works like Force Staff when used on self or allies.Allied Range: %abilitycastrange%Enemy Range: %cast_range_enemy%",
            "Passive:  Dragon's Reach Increases attack range of ranged heroes."
        ],
        "id": 263,
        "img": "hurricane_pike.png",
        "dname": "Hurricane Pike",
        "qual": "epic",
        "cost": 4450,
        "notes": "Self-cast will use Hurricane Pike on yourself.\nHurricane Pike doesn't interrupt the target's actions.\nWill not work on a unit inside Chronosphere, Duel, or Black Hole.",
        "attrib": [],
        "mc": 100,
        "cd": 20,
        "lore": "A legendary pike once held as royal sigil of the ancient wyvern riders.",
        "components": [
            "force_staff",
            "dragon_lance",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "hurricane_pike",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400,500,600,700,800Range: 700,750,800,850,900Mana Cost: 120,140,160,180,200"
        ],
        "id": 104,
        "img": "dagon.png",
        "dname": "Dagon",
        "qual": "rare",
        "cost": 2700,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "+",
                "value": [
                    "14",
                    "16",
                    "18",
                    "20",
                    "22"
                ],
                "footer": "Intelligence"
            },
            {
                "key": "bonus_str",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Strength"
            },
            {
                "key": "bonus_agi",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Agility"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "staff_of_wizardry",
            "crown",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "dagon",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400,500,600,700,800Range: 700,750,800,850,900Mana Cost: 120,140,160,180,200"
        ],
        "id": 201,
        "img": "dagon_2.png",
        "dname": "Dagon 2",
        "qual": "rare",
        "cost": 3950,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "+",
                "value": [
                    "14",
                    "16",
                    "18",
                    "20",
                    "22"
                ],
                "footer": "Intelligence"
            },
            {
                "key": "bonus_str",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Strength"
            },
            {
                "key": "bonus_agi",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Agility"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "dagon_2",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400,500,600,700,800Range: 700,750,800,850,900Mana Cost: 120,140,160,180,200"
        ],
        "id": 202,
        "img": "dagon_3.png",
        "dname": "Dagon 3",
        "qual": "rare",
        "cost": 5200,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "+",
                "value": [
                    "14",
                    "16",
                    "18",
                    "20",
                    "22"
                ],
                "footer": "Intelligence"
            },
            {
                "key": "bonus_str",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Strength"
            },
            {
                "key": "bonus_agi",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Agility"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon_2",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "dagon_3",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400,500,600,700,800Range: 700,750,800,850,900Mana Cost: 120,140,160,180,200"
        ],
        "id": 203,
        "img": "dagon_4.png",
        "dname": "Dagon 4",
        "qual": "rare",
        "cost": 6450,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "+",
                "value": [
                    "14",
                    "16",
                    "18",
                    "20",
                    "22"
                ],
                "footer": "Intelligence"
            },
            {
                "key": "bonus_str",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Strength"
            },
            {
                "key": "bonus_agi",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Agility"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon_3",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "dagon_4",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit.Damage: 400,500,600,700,800Range: 700,750,800,850,900Mana Cost: 120,140,160,180,200"
        ],
        "id": 204,
        "img": "dagon_5.png",
        "dname": "Dagon 5",
        "qual": "rare",
        "cost": 7700,
        "notes": "Instantly kills illusions.",
        "attrib": [
            {
                "key": "bonus_int",
                "header": "+",
                "value": [
                    "14",
                    "16",
                    "18",
                    "20",
                    "22"
                ],
                "footer": "Intelligence"
            },
            {
                "key": "bonus_str",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Strength"
            },
            {
                "key": "bonus_agi",
                "header": "+",
                "value": [
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "footer": "Agility"
            }
        ],
        "mc": 120,
        "cd": 35,
        "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "components": [
            "dagon_4",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "dagon_5",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes."
        ],
        "id": 108,
        "img": "ultimate_scepter.png",
        "dname": "Aghanim's Scepter",
        "qual": "rare",
        "cost": 4200,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "10",
                "footer": "All Attributes"
            },
            {
                "key": "bonus_health",
                "header": "+",
                "value": "175",
                "footer": "Health"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "175",
                "footer": "Mana"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The scepter of a wizard with demigod-like powers.",
        "components": [
            "point_booster",
            "staff_of_wizardry",
            "ogre_axe",
            "blade_of_alacrity"
        ],
        "created": true,
        "charges": false,
        "name": "ultimate_scepter",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes."
        ],
        "id": 271,
        "img": "ultimate_scepter_2.png",
        "dname": "Aghanim's Blessing",
        "qual": "rare",
        "cost": 5800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The scepter of a wizard with demigod-like powers.",
        "components": [
            "ultimate_scepter",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "ultimate_scepter_2",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes."
        ],
        "id": 727,
        "img": "ultimate_scepter_roshan.png",
        "dname": "Aghanim's Blessing - Roshan",
        "qual": "rare",
        "cost": 5800,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The scepter of a wizard with demigod-like powers.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "ultimate_scepter_roshan",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Ability UpgradeUpgrades an existing ability or adds a new ability to your hero."
        ],
        "id": 609,
        "img": "aghanims_shard.png",
        "dname": "Aghanim's Shard",
        "qual": "rare",
        "cost": 1400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "With origins known only to a single wizard, fragments of this impossible crystal are nearly as coveted as the renowned scepter itself.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "aghanims_shard",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Active: Reset CooldownsResets the cooldowns of all your items and abilities."
        ],
        "id": 110,
        "img": "refresher.png",
        "dname": "Refresher Orb",
        "qual": "rare",
        "cost": 5000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "13",
                "footer": "Health Regeneration"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "7",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": 300,
        "cd": 170,
        "lore": "A powerful artifact created for wizards.",
        "components": [
            "pers",
            "pers",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "refresher",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Assault Aura Grants 30 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by -5.Radius: 1200"
        ],
        "id": 112,
        "img": "assault.png",
        "dname": "Assault Cuirass",
        "qual": "epic",
        "cost": 5125,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "30",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "10",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Forged in the depths of the nether reaches, this hellish mail provides an army with increased armor and attack speed.",
        "components": [
            "platemail",
            "hyperstone",
            "buckler",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "assault",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 114,
        "img": "heart.png",
        "dname": "Heart of Tarrasque",
        "qual": "epic",
        "cost": 5000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "45",
                "footer": "Strength"
            },
            {
                "key": "bonus_health",
                "header": "+",
                "value": "250",
                "footer": "Health"
            },
            {
                "key": "health_regen_pct",
                "header": "+Max Health Regen",
                "value": "1.6%"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Preserved heart of an extinct monster, it bolsters the bearer's fortitude.",
        "components": [
            "vitality_booster",
            "reaver",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "heart",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Avatar Grants Spell Immunity.  Duration decreases with each use. Duration: 9,8,7,6 Dispel Type: Basic Dispel"
        ],
        "id": 116,
        "img": "black_king_bar.png",
        "dname": "Black King Bar",
        "qual": "epic",
        "cost": 4050,
        "notes": "Purchasing another Black King Bar will not reset its immunity duration.\nUsing Black King Bar may remove some positive buffs.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "10",
                "footer": "Strength"
            },
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "24",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": 75,
        "lore": "A powerful staff imbued with the strength of giants.",
        "components": [
            "ogre_axe",
            "mithril_hammer",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "black_king_bar",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Reincarnation Brings you to life with full health and mana 5 seconds after you die, at the location where you died. Reincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage)."
        ],
        "id": 117,
        "img": "aegis.png",
        "dname": "Aegis of the Immortal",
        "qual": "artifact",
        "cost": 0,
        "notes": "Pronounced as ayy jis.",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The Immortal was said to own a shield that protected him from death itself.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "aegis",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Active: Arctic Blast Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by -40% for 4 seconds.Radius: 900",
            "Passive: Freezing Aura Reduces the attack speed of all enemies by -45 and all heals, regeneration and lifesteal by 25%. Radius: 1200"
        ],
        "id": 119,
        "img": "shivas_guard.png",
        "dname": "Shiva's Guard",
        "qual": "epic",
        "cost": 4850,
        "notes": "The wave extends at a speed of %blast_speed% to a max size of %blast_radius%.\nThe Arctic Blast follows its caster.\nMultiple instances of Freezing Aura do not stack.",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "30",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "15",
                "footer": "Armor"
            }
        ],
        "mc": 100,
        "cd": 27,
        "lore": "Said to have belonged to a goddess, today it retains much of its former power.",
        "components": [
            "platemail",
            "mystic_staff",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "shivas_guard",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Bloodpact Doubles Bloodstone's Spell Lifesteal and also converts the same percentage of damage dealt to mana. Lasts %buff_duration% seconds. Costs %hp_cost%%% of your current HP to activate"
        ],
        "id": 121,
        "img": "bloodstone.png",
        "dname": "Bloodstone",
        "qual": "epic",
        "cost": 4600,
        "notes": "Using Bloodpact leaves you drained for 40 seconds and can't benefit from Bloodpact again during that time.",
        "attrib": [],
        "mc": false,
        "cd": 40,
        "lore": "The Bloodstone's bright ruby color is unmistakable on the battlefield, as the owner seems to have infinite vitality and spirit.",
        "components": [
            "voodoo_mask",
            "soul_booster",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "bloodstone",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: SpellblockBlocks most targeted spells once every 12 seconds.",
            "Active: Transfer SpellblockTemporarily removes Spellblock from the item's owner and transfers it to an allied unit for 12 seconds.Range: 700"
        ],
        "id": 123,
        "img": "sphere.png",
        "dname": "Linken's Sphere",
        "qual": "epic",
        "cost": 4600,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "16",
                "footer": "All Attributes"
            },
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "7",
                "footer": "Health Regeneration"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "5",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "This magical sphere once protected one of the most famous heroes in history.",
        "components": [
            "ultimate_orb",
            "pers",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "sphere",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Echo ShellApplies a shield to the target unit for 6 seconds which re-casts most targeted spells back to their caster.The shielded unit will still take damage from the spell. Range: 900Dispel Type: Basic Dispel"
        ],
        "id": 226,
        "img": "lotus_orb.png",
        "dname": "Lotus Orb",
        "qual": "epic",
        "cost": 3850,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "10",
                "footer": "Armor"
            },
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "6.5",
                "footer": "Health Regeneration"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "4",
                "footer": "Mana Regeneration"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "250",
                "footer": "Mana"
            }
        ],
        "mc": 175,
        "cd": 15,
        "lore": "The jewel at its center still reflects a pale image of its creator.",
        "components": [
            "pers",
            "platemail",
            "energy_booster"
        ],
        "created": true,
        "charges": false,
        "name": "lotus_orb",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Meteor Hammer CHANNELED - After a successful channel, summons a meteor that strikes a %impact_radius% AoE, stunning enemies for %stun_duration% seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for %burn_duration% seconds.Building Impact Damage: %impact_damage_buildings% Building Over Time Damage: %burn_dps_buildings% Non-Building Impact Damage: %impact_damage_units% Non-Building Over Time Damage: %burn_dps_units% Channel Duration: %max_duration% seconds.Landing Time: %land_time% seconds."
        ],
        "id": 223,
        "img": "meteor_hammer.png",
        "dname": "Meteor Hammer",
        "qual": "epic",
        "cost": 2350,
        "notes": "",
        "attrib": [],
        "mc": 100,
        "cd": 24,
        "lore": "",
        "components": [
            "pers",
            "crown",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "meteor_hammer",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Nullify Dispels the target and applies a debuff for 5 seconds. Continuously dispels the target.Dispel Type: Basic Dispel"
        ],
        "id": 225,
        "img": "nullifier.png",
        "dname": "Nullifier",
        "qual": "epic",
        "cost": 4725,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "80",
                "footer": "Damage"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "8",
                "footer": "Armor"
            },
            {
                "key": "bonus_regen",
                "header": "+",
                "value": "6",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": 11,
        "lore": "",
        "components": [
            "relic",
            "helm_of_iron_will"
        ],
        "created": true,
        "charges": false,
        "name": "nullifier",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Combo Breaker When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage. Cooldown increases every time it triggers.Dispel Type: Strong Dispel"
        ],
        "id": 256,
        "img": "aeon_disk.png",
        "dname": "Aeon Disk",
        "qual": "epic",
        "cost": 3000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "+",
                "value": "250",
                "footer": "Health"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "300",
                "footer": "Mana"
            },
            {
                "key": "cooldown_duration",
                "header": "COOLDOWN:",
                "value": [
                    "105",
                    "125",
                    "145",
                    "165"
                ]
            }
        ],
        "mc": false,
        "cd": 105,
        "lore": "",
        "components": [
            "vitality_booster",
            "energy_booster",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "aeon_disk",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 259,
        "img": "kaya.png",
        "dname": "Kaya",
        "qual": "epic",
        "cost": 2050,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "",
        "components": [
            "staff_of_wizardry",
            "robe",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "kaya",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Use: Reset CooldownsResets the cooldowns of all your items and abilities."
        ],
        "id": 260,
        "img": "refresher_shard.png",
        "dname": "Refresher Shard",
        "qual": "consumable",
        "cost": 1000,
        "notes": "Refresher Shard is shareable.",
        "attrib": [],
        "mc": false,
        "cd": 200,
        "lore": "",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "refresher_shard",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Active: Soul Release When used against enemies, it reduces health by 4% of current health per second, and reduces HP regeneration, healing, lifesteal and spell lifesteal by 45%. Deals 35 damage per second. When used on allies, it provides 40 health regeneration per second. Lasts 8 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.Cast Range: 950"
        ],
        "id": 267,
        "img": "spirit_vessel.png",
        "dname": "Spirit Vessel",
        "qual": "rare",
        "cost": 2980,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "+",
                "value": "250",
                "footer": "Health"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "1.75",
                "footer": "Mana Regeneration"
            },
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "2",
                "footer": "All Attributes"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "2",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": 7,
        "lore": "",
        "components": [
            "urn_of_shadows",
            "vitality_booster",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "spirit_vessel",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Damage Block Grants a 60% chance to block 64 damage from incoming attacks on melee heroes, and 32 damage on ranged."
        ],
        "id": 125,
        "img": "vanguard.png",
        "dname": "Vanguard",
        "qual": "epic",
        "cost": 1825,
        "notes": "Multiple sources of damage block do not stack.",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "+",
                "value": "250",
                "footer": "Health"
            },
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "7",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A powerful shield that defends its wielder from even the most vicious of attacks.",
        "components": [
            "ring_of_health",
            "vitality_booster"
        ],
        "created": true,
        "charges": false,
        "name": "vanguard",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Guard For %duration% seconds, grant nearby allied heroes and buildings a %block_chance_active%%% chance to block %block_damage_melee_active% damage from each incoming attack.Units may only be affected by Guard once every %tooltip_reapply_time% seconds.Radius: %bonus_aoe_radius%",
            "Passive: Damage Block Grants a %block_chance%%% chance to block %block_damage_melee% damage from incoming attacks on melee heroes, and %block_damage_ranged% damage on ranged."
        ],
        "id": 242,
        "img": "crimson_guard.png",
        "dname": "Crimson Guard",
        "qual": "epic",
        "cost": 3600,
        "notes": "Multiple sources of damage block do not stack.",
        "attrib": [],
        "mc": false,
        "cd": 35,
        "lore": "A cuirass originally built to protect against the dreaded Year Beast.",
        "components": [
            "vanguard",
            "helm_of_iron_will",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "crimson_guard",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Damage ReturnFor 4.5 seconds, the damage returned from all sources is increased by 80%.",
            "Passive: Damage ReturnEverytime you are attacked, you return 20 damage plus 20% of the attack damage dealt to you."
        ],
        "id": 127,
        "img": "blade_mail.png",
        "dname": "Blade Mail",
        "qual": "epic",
        "cost": 2100,
        "notes": "Damage Return is calculated before any kind of reduction.\nDamage Return doesn't reflect damage from other forms of Blade Mail.\nReturned damage type is the same as it was received.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "28",
                "footer": "Damage"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "6",
                "footer": "Armor"
            }
        ],
        "mc": 25,
        "cd": 25,
        "lore": "A razor-sharp coat of mail, it is the choice of selfless martyrs in combat.",
        "components": [
            "broadsword",
            "chainmail",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "blade_mail",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 129,
        "img": "soul_booster.png",
        "dname": "Soul Booster",
        "qual": "epic",
        "cost": 3000,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "+",
                "value": "425",
                "footer": "Health"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "425",
                "footer": "Mana"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Regain lost courage.",
        "components": [
            "vitality_booster",
            "energy_booster",
            "point_booster"
        ],
        "created": true,
        "charges": false,
        "name": "soul_booster",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Barrier Creates a spell shield that absorbs up to %barrier_block% magical damage.  Lasts %barrier_duration% seconds."
        ],
        "id": 131,
        "img": "hood_of_defiance.png",
        "dname": "Hood of Defiance",
        "qual": "epic",
        "cost": 1500,
        "notes": "Stacks multiplicatively with other sources of spell resistance.",
        "attrib": [],
        "mc": 50,
        "cd": 60,
        "lore": "A furred, magic resistant headpiece that is feared by wizards.",
        "components": [
            "ring_of_health",
            "cloak",
            "ring_of_regen",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "hood_of_defiance",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Shroud Creates a spell shield that absorbs up to 400 magical damage, converting damage taken into mana.  Lasts 12 seconds."
        ],
        "id": 692,
        "img": "eternal_shroud.png",
        "dname": "Eternal Shroud",
        "qual": "epic",
        "cost": 3300,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_spell_resist",
                "header": "+",
                "value": "20%",
                "footer": "Magic Resistance"
            },
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "8.5",
                "footer": "Health Regeneration"
            },
            {
                "key": "spell_lifesteal",
                "header": "+",
                "value": "20%",
                "footer": "Spell Lifesteal"
            }
        ],
        "mc": 50,
        "cd": 60,
        "lore": "A pristine hood that feeds upon strife to empower its owner.",
        "components": [
            "voodoo_mask",
            "hood_of_defiance",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "eternal_shroud",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Everlasting Dropped on death, and cannot be destroyed. Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier."
        ],
        "id": 133,
        "img": "rapier.png",
        "dname": "Divine Rapier",
        "qual": "epic",
        "cost": 5950,
        "notes": "If Divine Rapier is dropped and picked up by an enemy of its original owner, it cannot be dropped again except by death.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "350",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "So powerful, it cannot have a single owner.",
        "components": [
            "relic",
            "demon_edge"
        ],
        "created": true,
        "charges": false,
        "name": "rapier",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: PierceGrants each attack a 80% chance to pierce through evasion and deal 70 bonus magical damage."
        ],
        "id": 135,
        "img": "monkey_king_bar.png",
        "dname": "Monkey King Bar",
        "qual": "epic",
        "cost": 4975,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "40",
                "footer": "Damage"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "45",
                "footer": "Attack Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A powerful staff used by a master warrior.",
        "components": [
            "demon_edge",
            "javelin",
            "blitz_knuckles",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "monkey_king_bar",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Toggle: Burn When active, scorches enemies for %aura_damage% magical damage per second and causes them to miss %blind_pct%%% of their attacks. Illusions deal %aura_damage_illusions% magical damage per second.Radius: %aura_radius%"
        ],
        "id": 137,
        "img": "radiance.png",
        "dname": "Radiance",
        "qual": "epic",
        "cost": 5050,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A divine weapon that causes damage and a bright burning effect that lays waste to nearby enemies.",
        "components": [
            "relic",
            "talisman_of_evasion"
        ],
        "created": true,
        "charges": false,
        "name": "radiance",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 139,
        "img": "butterfly.png",
        "dname": "Butterfly",
        "qual": "epic",
        "cost": 4975,
        "notes": "Stacks diminishingly with other sources of Evasion.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "30",
                "footer": "Agility"
            },
            {
                "key": "bonus_evasion",
                "header": "+",
                "value": "35%",
                "footer": "Evasion"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "30",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "25",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Only the mightiest and most experienced of warriors can wield the Butterfly, but it provides incredible dexterity in combat.",
        "components": [
            "eagle",
            "talisman_of_evasion",
            "quarterstaff"
        ],
        "created": true,
        "charges": false,
        "name": "butterfly",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Critical StrikeGrants each attack a 30% chance to deal 225% damage."
        ],
        "id": 141,
        "img": "greater_crit.png",
        "dname": "Daedalus",
        "qual": "epic",
        "cost": 5150,
        "notes": "Critical Strike does not work against buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "88",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A weapon of incredible power that is difficult for even the strongest of warriors to control.",
        "components": [
            "lesser_crit",
            "demon_edge",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "greater_crit",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Bash Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%."
        ],
        "id": 143,
        "img": "basher.png",
        "dname": "Skull Basher",
        "qual": "epic",
        "cost": 2875,
        "notes": "Does not stack with other sources of Bash.\nThe following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, and Slardar.\nDoes not grant Bash to Clones and Tempest Doubles.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "25",
                "footer": "Damage"
            },
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "10",
                "footer": "Strength"
            }
        ],
        "mc": false,
        "cd": 2,
        "lore": "A feared weapon in the right hands, this maul's ability to shatter the defenses of its opponents should not be underestimated.",
        "components": [
            "mithril_hammer",
            "belt_of_strength",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "basher",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Chop Tree Destroy a target tree.Cast Range: 350",
            "Passive: Quell Increases attack damage against non-hero units by 15 for melee heroes, and 6 for ranged. ",
            "Passive: Cleave Deals 70% of attack damage as physical damage in a cone up to 650 around the target. Deals 40% against creeps. (Melee Only)"
        ],
        "id": 145,
        "img": "bfury.png",
        "dname": "Battle Fury",
        "qual": "epic",
        "cost": 4100,
        "notes": "Cleave damage goes through spell immunity.\nIf multiple sources of Cleave are present, each Cleave's damage is applied separately.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "60",
                "footer": "Damage"
            },
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "7.5",
                "footer": "Health Regeneration"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "2.75",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 4,
        "lore": "The bearer of this mighty axe gains the ability to cut down swaths of enemies at once.",
        "components": [
            "broadsword",
            "claymore",
            "pers",
            "quelling_blade"
        ],
        "created": true,
        "charges": false,
        "name": "bfury",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Mirror ImageCreates 2 images of your hero that last 20 seconds. Melee images deal 33% damage, while Ranged images deal 28%. Illusions take 300% damage. Dispel Type: Basic Dispel"
        ],
        "id": 147,
        "img": "manta.png",
        "dname": "Manta Style",
        "qual": "epic",
        "cost": 4600,
        "notes": "Has a %invuln_duration% second cast time during which you are invulnerable.\nMany effects are removed upon using Manta.\nYasha based movement speed bonuses from multiple items do not stack.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "10",
                "footer": "Strength"
            },
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "26",
                "footer": "Agility"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "10",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "12",
                "footer": "Attack Speed"
            },
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "8%",
                "footer": "Movement Speed"
            }
        ],
        "mc": 125,
        "cd": 30,
        "lore": "An axe made of reflective materials that causes confusion amongst enemy ranks.",
        "components": [
            "yasha",
            "ultimate_orb",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "manta",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Critical StrikeGrants each attack a 30% chance to deal 160% damage."
        ],
        "id": 149,
        "img": "lesser_crit.png",
        "dname": "Crystalys",
        "qual": "epic",
        "cost": 1950,
        "notes": "Critical Strike does not work against buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "32",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A blade forged from rare crystals, it seeks weak points in enemy armor.",
        "components": [
            "broadsword",
            "blades_of_attack",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "lesser_crit",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Dragon's Reach Increases attack range of ranged heroes."
        ],
        "id": 236,
        "img": "dragon_lance.png",
        "dname": "Dragon Lance",
        "qual": "artifact",
        "cost": 1900,
        "notes": "Passive does not stack.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "16",
                "footer": "Agility"
            },
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "12",
                "footer": "Strength"
            },
            {
                "key": "base_attack_range",
                "header": "+",
                "value": "140",
                "footer": "Attack Range (Ranged Only)"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The forward charge of the wyvern host grants no quarter.",
        "components": [
            "ogre_axe",
            "boots_of_elves",
            "boots_of_elves"
        ],
        "created": true,
        "charges": false,
        "name": "dragon_lance",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Toggle: Unholy StrengthWhen active, Unholy Strength grants +%unholy_bonus_damage% damage, +%unholy_bonus_strength% strength and +%unholy_bonus_armor% armor, but drains %unholy_health_drain_per_second% health per second. You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated."
        ],
        "id": 151,
        "img": "armlet.png",
        "dname": "Armlet of Mordiggian",
        "qual": "epic",
        "cost": 2500,
        "notes": "The strength change will affect both maximum and current HP, but you cannot die from the change.\nThe strength change occurs over 0.6 seconds.\nActivating or deactivating Unholy Strength does not interrupt channeling.",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Weapon of choice among brutes, the bearer sacrifices his life energy to gain immense strength and power.",
        "components": [
            "helm_of_iron_will",
            "gloves",
            "blades_of_attack",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "armlet",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Shadow WalkMakes you invisible for 14 seconds, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  If attacking to end the invisibility, you gain 175 bonus physical damage on that attack."
        ],
        "id": 152,
        "img": "invis_sword.png",
        "dname": "Shadow Blade",
        "qual": "epic",
        "cost": 3000,
        "notes": "Has a %windwalk_fade_time% second fade time.\nIf the invisibility ends without attacking, the bonus damage is lost.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "20",
                "footer": "Damage"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "35",
                "footer": "Attack Speed"
            }
        ],
        "mc": 75,
        "cd": 25,
        "lore": "The blade of a fallen king, it allows you to move unseen and strike from the shadows.",
        "components": [
            "shadow_amulet",
            "blitz_knuckles",
            "broadsword"
        ],
        "created": true,
        "charges": false,
        "name": "invis_sword",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Shadow WalkMakes you invisible for 14 seconds, or until you attack or cast a spell.  While invisible, you move 25% faster and can move through units.  Attacking to end the invisibility will deal 175 bonus physical damage and a guaranteed 160% critical strike to the target, and disable their passive abilities for 4 seconds.",
            "Passive: Critical StrikeGrants each attack a 30% chance to deal 160% damage."
        ],
        "id": 249,
        "img": "silver_edge.png",
        "dname": "Silver Edge",
        "qual": "epic",
        "cost": 5450,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "52",
                "footer": "Damage"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "35",
                "footer": "Attack Speed"
            }
        ],
        "mc": 75,
        "cd": 20,
        "lore": "Once used to slay an unjust king, only to have the kingdom erupt into civil war in the aftermath.",
        "components": [
            "invis_sword",
            "lesser_crit",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "silver_edge",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 154,
        "img": "sange_and_yasha.png",
        "dname": "Sange and Yasha",
        "qual": "artifact",
        "cost": 4100,
        "notes": "Yasha-based movement speed bonuses from multiple items do not stack.",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "16",
                "footer": "Strength"
            },
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "16",
                "footer": "Agility"
            },
            {
                "key": "status_resistance",
                "header": "+Status Resistance",
                "value": "20%"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "12",
                "footer": "Attack Speed"
            },
            {
                "key": "movement_speed_percent_bonus",
                "header": "+",
                "value": "10%",
                "footer": "Movement Speed"
            },
            {
                "key": "hp_regen_amp",
                "header": "+Health Regen and Lifesteal Amp",
                "value": "22%"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Sange and Yasha, when attuned by the moonlight and used together, become a very powerful combination.",
        "components": [
            "yasha",
            "sange"
        ],
        "created": true,
        "charges": false,
        "name": "sange_and_yasha",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 273,
        "img": "kaya_and_sange.png",
        "dname": "Kaya and Sange",
        "qual": "artifact",
        "cost": 4100,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Two of three known items of unimaginable power that many believe were crafted at the same enchanter's forge.",
        "components": [
            "sange",
            "kaya"
        ],
        "created": true,
        "charges": false,
        "name": "kaya_and_sange",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 277,
        "img": "yasha_and_kaya.png",
        "dname": "Yasha and Kaya",
        "qual": "artifact",
        "cost": 4100,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Yasha and Kaya when paired together share a natural resonance.",
        "components": [
            "kaya",
            "yasha"
        ],
        "created": true,
        "charges": false,
        "name": "yasha_and_kaya",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Unholy RageIncreases Lifesteal percentage to %unholy_lifesteal_total_tooltip%%% for %unholy_duration% seconds. Dispel Type: Basic Dispel ",
            "Passive: LifestealHeals the attacker for a percentage of attack damage dealt."
        ],
        "id": 156,
        "img": "satanic.png",
        "dname": "Satanic",
        "qual": "artifact",
        "cost": 5050,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 30,
        "lore": "Immense power at the cost of your soul.",
        "components": [
            "lifesteal",
            "claymore",
            "reaver"
        ],
        "created": true,
        "charges": false,
        "name": "satanic",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Static ChargePlaces a charged shield on a target unit for 15 seconds which has a 20% chance to release a 225 magical damage shocking bolt at a nearby attacker and 4 additional enemies.Range: 800",
            "Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 12 targets within a 650 radius, dealing 180 magical damage to each. Lightning proc pierces evasion."
        ],
        "id": 158,
        "img": "mjollnir.png",
        "dname": "Mjollnir",
        "qual": "artifact",
        "cost": 5600,
        "notes": "Static Charge cannot trigger more than once per second.\nStatic Charge's shock deals magical damage centered on hero with the Static Charge. Static Charge's targets cannot be more than %static_seconary_radius% range away.\nStatic Charge procs will not bounce to heroes that are invisible or hidden by Fog of War.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "24",
                "footer": "Damage"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "70",
                "footer": "Attack Speed"
            }
        ],
        "mc": 50,
        "cd": 35,
        "lore": "Thor's magical hammer, made for him by the dwarves Brok and Eitri.",
        "components": [
            "maelstrom",
            "hyperstone",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "mjollnir",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Cold Attack Attacks lower enemy movement and attack speed and reduces heals, health regeneration, lifesteal and spell lifesteal by %heal_reduction%%% for %cold_duration% seconds. Slows enemy ranged units by %cold_slow_ranged%%% movement speed and by %cold_attack_slow_ranged% attack speed. Slows enemy melee units by %cold_slow_melee%%% movement speed and by %cold_attack_slow_melee% attack speed. "
        ],
        "id": 160,
        "img": "skadi.png",
        "dname": "Eye of Skadi",
        "qual": "artifact",
        "cost": 5300,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Extremely rare artifact, guarded by the azure dragons.",
        "components": [
            "ultimate_orb",
            "ultimate_orb",
            "point_booster"
        ],
        "created": true,
        "charges": false,
        "name": "skadi",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 162,
        "img": "sange.png",
        "dname": "Sange",
        "qual": "artifact",
        "cost": 2050,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "16",
                "footer": "Strength"
            },
            {
                "key": "status_resistance",
                "header": "+Status Resistance",
                "value": "12%"
            },
            {
                "key": "hp_regen_amp",
                "header": "+Health Regen and Lifesteal Amp",
                "value": "20%"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Sange is an unusually accurate weapon, seeking weak points automatically.",
        "components": [
            "ogre_axe",
            "belt_of_strength",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "sange",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: DominateTakes control of one neutral, non-ancient target unit and sets its movement speed to 380 and max health to a minimum of 1000. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor. Dominated units with a max health of greater than 1000 retain their original max health.  Dominated unit's bounty is set to 100 gold.Range: 700"
        ],
        "id": 164,
        "img": "helm_of_the_dominator.png",
        "dname": "Helm of the Dominator",
        "qual": "artifact",
        "cost": 2400,
        "notes": "Cannot dominate more than one unit at a time.  If a new unit is dominated, the old one will die.\nCan also Dominate enemy lane creeps and summoned units.\nSelling Helm of the Dominator will cause dominated units to die.",
        "attrib": [
            {
                "key": "bonus_stats",
                "header": "+",
                "value": "6",
                "footer": "All Attributes"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "6",
                "footer": "Armor"
            },
            {
                "key": "bonus_regen",
                "header": "+",
                "value": "6",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": 45,
        "lore": "The powerful headpiece of a dead necromancer.",
        "components": [
            "helm_of_iron_will",
            "crown",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "helm_of_the_dominator",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: DominateTakes control of one neutral target unit and sets its movement speed to 400 and max health to a minimum of 1800. Also provides the unit with +80 base attack damage, +12 health regen, +4 mana regen and +8 armor. Dominated units with a max health of greater than 1800 retain their original max health.  Dominated unit's bounty is set to 250 gold.Range: 700",
            "Passive: Vladmir's AuraGrants 18% lifesteal, 18% bonus damage, 2 mana regeneration, and 3 armor to nearby allies."
        ],
        "id": 635,
        "img": "helm_of_the_overlord.png",
        "dname": "Helm of the Overlord",
        "qual": "artifact",
        "cost": 6175,
        "notes": "Can dominate up to two at a time. \nCan also Dominate enemy lane creeps and summoned units.\nSelling will cause dominated units to die.",
        "attrib": [
            {
                "key": "bonus_stats",
                "header": "+",
                "value": "7",
                "footer": "All Attributes"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "7",
                "footer": "Armor"
            },
            {
                "key": "bonus_regen",
                "header": "+",
                "value": "7",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": 45,
        "lore": "The powerful headpiece of a dead necromancer.",
        "components": [
            "helm_of_the_dominator",
            "vladmir",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "helm_of_the_overlord",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 140 magical damage to each. Lightning proc pierces evasion."
        ],
        "id": 166,
        "img": "maelstrom.png",
        "dname": "Maelstrom",
        "qual": "artifact",
        "cost": 2700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "24",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A hammer forged for the gods themselves, Maelstrom allows its user to harness the power of lightning.",
        "components": [
            "mithril_hammer",
            "javelin"
        ],
        "created": true,
        "charges": false,
        "name": "maelstrom",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Eternal ChainsRoots all enemies in a target 450 radius for 2 seconds and deals 220 damage.Range: 1100 ",
            "Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 160 magical damage to each. Lightning proc pierces evasion."
        ],
        "id": 1466,
        "img": "gungir.png",
        "dname": "Gleipnir",
        "qual": "artifact",
        "cost": 6150,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "30",
                "footer": "Damage"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "24",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "14",
                "footer": "Strength"
            },
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "14",
                "footer": "Agility"
            }
        ],
        "mc": 200,
        "cd": 18,
        "lore": "Bindings forged by impossible means to leash an ancient evil.",
        "components": [
            "maelstrom",
            "rod_of_atos",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "gungir",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Corruption Your attacks reduce the target's armor by %corruption_armor% for %corruption_duration% seconds.",
            "Passive: Soul Stealer Desolator gains +%bonus_damage_per_kill% damage every time an enemy hero dies while affected by Corruption, to a maximum of %max_damage%."
        ],
        "id": 168,
        "img": "desolator.png",
        "dname": "Desolator",
        "qual": "artifact",
        "cost": 3500,
        "notes": "Armor reduction works on buildings.",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A wicked weapon, used in torturing political criminals.",
        "components": [
            "mithril_hammer",
            "mithril_hammer",
            "blight_stone"
        ],
        "created": true,
        "charges": false,
        "name": "desolator",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 170,
        "img": "yasha.png",
        "dname": "Yasha",
        "qual": "artifact",
        "cost": 2050,
        "notes": "Yasha-based movement speed bonuses from multiple items do not stack.",
        "attrib": [
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "16",
                "footer": "Agility"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "12",
                "footer": "Attack Speed"
            },
            {
                "key": "movement_speed_percent_bonus",
                "header": "+",
                "value": "8%",
                "footer": "Movement Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Yasha is regarded as the swiftest weapon ever created.",
        "components": [
            "blade_of_alacrity",
            "boots_of_elves",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "yasha",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: BerserkGives 110 attack speed and 30 movement speed, but reduces your armor by 8 and silences you.  Lasts 6 seconds.",
            "Passive: LifestealHeals the attacker for a percentage of attack damage dealt."
        ],
        "id": 172,
        "img": "mask_of_madness.png",
        "dname": "Mask of Madness",
        "qual": "artifact",
        "cost": 1775,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "10",
                "footer": "Damage"
            },
            {
                "key": "bonus_attack_speed",
                "header": "+",
                "value": "10",
                "footer": "Attack Speed"
            },
            {
                "key": "lifesteal_percent",
                "header": "+",
                "value": "20%",
                "footer": "Lifesteal"
            }
        ],
        "mc": 25,
        "cd": 16,
        "lore": "Once this mask is worn, its bearer becomes an uncontrollable aggressive force.",
        "components": [
            "lifesteal",
            "quarterstaff"
        ],
        "created": true,
        "charges": false,
        "name": "mask_of_madness",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Inhibit Targets an enemy, slowing it for %purge_slow_duration% seconds.Range: %abilitycastrange%",
            "Passive: ManabreakEach attack burns %feedback_mana_burn% mana from the target, and deals %damage_per_burn% physical damage per burned mana. Burns %feedback_mana_burn_illusion_melee% mana per attack from melee illusions and %feedback_mana_burn_illusion_ranged% mana per attack from ranged illusions."
        ],
        "id": 174,
        "img": "diffusal_blade.png",
        "dname": "Diffusal Blade",
        "qual": "artifact",
        "cost": 2500,
        "notes": "Does not stack with other diffusal blades.",
        "attrib": [],
        "mc": false,
        "cd": 15,
        "lore": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
        "components": [
            "blade_of_alacrity",
            "robe",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "diffusal_blade",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Ether BlastConverts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and %ethereal_damage_bonus%%% more vulnerable to magic damage.  Enemy targets are also slowed by %blast_movement_slow%%%, and take %blast_agility_multiplier%x your target's primary attribute + %blast_damage_base% as magical damage.Range: %abilitycastrange%Duration: %duration% seconds"
        ],
        "id": 176,
        "img": "ethereal_blade.png",
        "dname": "Ethereal Blade",
        "qual": "epic",
        "cost": 4650,
        "notes": "Shares cooldown with Ghost Scepter.\nEthereal units take %ethereal_damage_bonus%%% bonus magic damage.",
        "attrib": [],
        "mc": 100,
        "cd": 22,
        "lore": "A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.",
        "components": [
            "kaya",
            "ghost",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "ethereal_blade",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Sacrifice Consume %health_sacrifice% health to temporarily gain %mana_gain% mana.  Lasts %duration% seconds.If the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool."
        ],
        "id": 178,
        "img": "soul_ring.png",
        "dname": "Soul Ring",
        "qual": "common",
        "cost": 700,
        "notes": "If this mana is not used before the duration ends, the extra mana is lost.",
        "attrib": [],
        "mc": false,
        "cd": 25,
        "lore": "A ring that feeds on the souls of those who wear it.",
        "components": [
            "ring_of_protection",
            "gauntlets",
            "gauntlets",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "soul_ring",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Replenish ManaRestores 175 mana to all nearby allies.Radius: 1200",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 180,
        "img": "arcane_boots.png",
        "dname": "Arcane Boots",
        "qual": "rare",
        "cost": 1300,
        "notes": "Does not work on Meepo clones.",
        "attrib": [
            {
                "key": "bonus_movement",
                "header": "+",
                "value": "45",
                "footer": "Movement Speed"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "250",
                "footer": "Mana"
            }
        ],
        "mc": false,
        "cd": 55,
        "lore": "Magi equipped with these boots are valued in battle.",
        "components": [
            "boots",
            "energy_booster"
        ],
        "created": true,
        "charges": false,
        "name": "arcane_boots",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Cooldown ReductionReduces the cooldown time of all spells and items."
        ],
        "id": 235,
        "img": "octarine_core.png",
        "dname": "Octarine Core",
        "qual": "rare",
        "cost": 5275,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_cooldown",
                "header": "+",
                "value": "25%",
                "footer": "Cooldown Reduction"
            },
            {
                "key": "cast_range_bonus",
                "header": "+",
                "value": "225",
                "footer": "Cast Range"
            },
            {
                "key": "bonus_health",
                "header": "+",
                "value": "425",
                "footer": "Health"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "725",
                "footer": "Mana"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "3",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "At the core of spellcraft are spectrums only the very gifted can sense.",
        "components": [
            "aether_lens",
            "soul_booster"
        ],
        "created": true,
        "charges": false,
        "name": "octarine_core",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Poison AttackPoisons the target, dealing 2 magical damage per second and slowing movement by -13% if the equipped hero is melee, or by -4% if they are ranged. Lasts for 2 seconds."
        ],
        "id": 181,
        "img": "orb_of_venom.png",
        "dname": "Orb of Venom",
        "qual": "component",
        "cost": 275,
        "notes": "Does not stack with its upgrades.",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Envenoms your veapon with the venom of a venomous viper.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "orb_of_venom",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: Lesser Corruption Your attacks reduce the target's armor by -2 for 8 seconds."
        ],
        "id": 240,
        "img": "blight_stone.png",
        "dname": "Blight Stone",
        "qual": "component",
        "cost": 300,
        "notes": "Does not stack with its upgrades.",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An unnerving stone unearthed beneath the Fields of Endless Carnage.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "blight_stone",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Passive: CorrosionDealing 3 damage per second, reducing armor by 3, and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged.Lasts for 3 seconds."
        ],
        "id": 569,
        "img": "orb_of_corrosion.png",
        "dname": "Orb of Corrosion",
        "qual": "rare",
        "cost": 925,
        "notes": "",
        "attrib": [
            {
                "key": "health_bonus",
                "header": "+",
                "value": "150",
                "footer": "Health"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Seepage from the wounds of a warrior deity, sealed in an arcanist's orb following a campaign of vicious slaughter.",
        "components": [
            "orb_of_venom",
            "blight_stone",
            "fluffy_hat",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "orb_of_corrosion",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 596,
        "img": "falcon_blade.png",
        "dname": "Falcon Blade",
        "qual": "rare",
        "cost": 1125,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An enchanted blade that long ago raised a hopeless urchin from pauper to king.",
        "components": [
            "fluffy_hat",
            "sobi_mask",
            "blades_of_attack",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "falcon_blade",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Mage SlayerPlaces a debuff when you attack enemies, causing them to do %spell_amp_debuff%%% less spell damage for %duration% seconds."
        ],
        "id": 598,
        "img": "mage_slayer.png",
        "dname": "Mage Slayer",
        "qual": "rare",
        "cost": 2400,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Forged by a secret order in The Third Age of Praxa'cia to fell the False King.",
        "components": [
            "cloak",
            "oblivion_staff",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "mage_slayer",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Endurance Consumes a charge and gives +45 attack speed and +13% movement speed to nearby allies for 6 seconds. Comes with 8 charges.Radius: 1200  ",
            "Passive: Swiftness AuraGrants 20 movement speed to allies.  Radius: 1200"
        ],
        "id": 185,
        "img": "ancient_janggo.png",
        "dname": "Drum of Endurance",
        "qual": "rare",
        "cost": 1700,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_str",
                "header": "+",
                "value": "7",
                "footer": "Strength"
            },
            {
                "key": "bonus_int",
                "header": "+",
                "value": "7",
                "footer": "Intelligence"
            }
        ],
        "mc": false,
        "cd": 30,
        "lore": "A relic that enchants the bodies of those around it for swifter movement in times of crisis.",
        "components": [
            "belt_of_strength",
            "robe",
            "wind_lace",
            "recipe"
        ],
        "created": true,
        "charges": 8,
        "name": "ancient_janggo",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Endurance Consumes a charge and gives +%bonus_attack_speed_pct% attack speed, +%bonus_movement_speed_pct%%%. Movement Speed to nearby allies for %duration% seconds For the first %bonus_ms_duration% seconds allies are immune to slows.Starts with 8 Charges. Gains 1 Charge every 3 minutes. Radius: %radius%  ",
            "Passive: Swiftness AuraGrants %aura_movement_speed% movement speed to allies.  Radius: %radius%"
        ],
        "id": 931,
        "img": "boots_of_bearing.png",
        "dname": "Boots of Bearing",
        "qual": "rare",
        "cost": 4125,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 30,
        "lore": "Resplendent footwear fashioned for the ancient herald that first dared spread the glory of Stonehall beyond the original borders of its nascent claim.",
        "components": [
            "tranquil_boots",
            "ancient_janggo",
            "recipe"
        ],
        "created": true,
        "charges": 8,
        "name": "boots_of_bearing",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Valor If cast on an ally, grants them the 5 armor, and removing it from the caster. If cast on an enemy, reduces 5 armor on both the enemy and the caster. Cannot target spell immune enemies.Range: 1000"
        ],
        "id": 187,
        "img": "medallion_of_courage.png",
        "dname": "Medallion of Courage",
        "qual": "rare",
        "cost": 1025,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "5",
                "footer": "Armor"
            },
            {
                "key": "bonus_mana_regen_pct",
                "header": "+",
                "value": "1.5",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "The bearer has no fear of combat.",
        "components": [
            "chainmail",
            "sobi_mask",
            "blight_stone"
        ],
        "created": true,
        "charges": false,
        "name": "medallion_of_courage",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: ShineWhen cast on an ally, grants them 6 armor, 50 attack speed, and 10% movement speed. When cast on an enemy, removes 6 armor, 50 attack speed, and 10% movement speed.Removes the armor from the caster when used.  Cannot target spell immune enemies.Range: 1000"
        ],
        "id": 229,
        "img": "solar_crest.png",
        "dname": "Solar Crest",
        "qual": "rare",
        "cost": 2625,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "6",
                "footer": "Armor"
            },
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "5",
                "footer": "All Attributes"
            },
            {
                "key": "self_movement_speed",
                "header": "+",
                "value": "20",
                "footer": "Movement Speed"
            },
            {
                "key": "bonus_mana_regen_pct",
                "header": "+",
                "value": "1.75",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "A talisman forged to honor the daytime sky.",
        "components": [
            "medallion_of_courage",
            "crown",
            "wind_lace",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "solar_crest",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Use: Disguise Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 35 seconds. Attacking, or moving within 1025 range of an enemy hero or tower, will break the invisibility. Disguise grants invisibility that is immune to True Sight."
        ],
        "id": 188,
        "img": "smoke_of_deceit.png",
        "dname": "Smoke of Deceit",
        "qual": "consumable",
        "cost": 50,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 1,
        "lore": "The charlatan wizard Myrddin's only true contribution to the arcane arts.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "smoke_of_deceit",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Use: EnlightenGrants you 700 experience plus 135 per tome consumed by your team after the first two."
        ],
        "id": 257,
        "img": "tome_of_knowledge.png",
        "dname": "Tome of Knowledge",
        "qual": "consumable",
        "cost": 75,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "That which raises beast to man and man to god.",
        "components": null,
        "created": false,
        "charges": 1,
        "name": "tome_of_knowledge",
        "recipe": 0,
        "isComponent": false,
        "consumable": true
    },
    {
        "hint": [
            "Active: Magic Weakness Cast a 600 radius blast that causes enemy heroes to take 18% increased damage from spells.Range: 1200Duration: 16 seconds. ",
            "Passive: Basilius AuraGrants 1.75 mana regeneration to allies.  Radius: 1200"
        ],
        "id": 190,
        "img": "veil_of_discord.png",
        "dname": "Veil of Discord",
        "qual": "rare",
        "cost": 1525,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_all_stats",
                "header": "+",
                "value": "4",
                "footer": "All Attributes"
            }
        ],
        "mc": 50,
        "cd": 22,
        "lore": "The headwear of corrupt magi.",
        "components": [
            "ring_of_basilius",
            "crown",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "veil_of_discord",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: Phantom ProvinceYour next %number_of_attacks% attacks have True Strike and deal magic damage. Expires after %active_duration% seconds. Can attack Ethereal units and deals no damage to Magic Immune targets.",
            "Passive: Witch Blade Causes your next attack to apply a poison for %slow_duration% seconds, slowing by %slow%%% and dealing %int_damage_multiplier%x your intelligence as damage every second. Can only trigger once every %passive_cooldown% seconds."
        ],
        "id": 911,
        "img": "revenants_brooch.png",
        "dname": "Revenant's Brooch",
        "qual": "rare",
        "cost": 6200,
        "notes": "",
        "attrib": [],
        "mc": 250,
        "cd": 45,
        "lore": "The cursed brooch of a fallen guardian who stalks forever between the veil of life and death.",
        "components": [
            "witch_blade",
            "mystic_staff",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "revenants_brooch",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: MendRestores 300 health and 200 mana to nearby allies, and removes most negative effects from the caster.Radius: 1200Dispel Type: Basic Dispel",
            "Passive: Guardian Aura Grants 2.5 health regeneration and 3 armor to allied units. If an allied hero's health falls below 20%, this is increased to 18.5 health regeneration and 10 armor. Radius: 1200 ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 231,
        "img": "guardian_greaves.png",
        "dname": "Guardian Greaves",
        "qual": "rare",
        "cost": 5100,
        "notes": "The aura boost only applies to heroes.",
        "attrib": [
            {
                "key": "bonus_movement",
                "header": "+",
                "value": "50",
                "footer": "Movement Speed"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "250",
                "footer": "Mana"
            },
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "4",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": 40,
        "lore": "One of many holy instruments constructed to honor the Omniscience.",
        "components": [
            "mekansm",
            "arcane_boots",
            "buckler",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "guardian_greaves",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: CrippleRoots the target for 2 seconds.Range: 1100"
        ],
        "id": 206,
        "img": "rod_of_atos.png",
        "dname": "Rod of Atos",
        "qual": "rare",
        "cost": 2750,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "24",
                "footer": "Intelligence"
            },
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "12",
                "footer": "Strength"
            },
            {
                "key": "bonus_agility",
                "header": "+",
                "value": "12",
                "footer": "Agility"
            }
        ],
        "mc": 50,
        "cd": 18,
        "lore": "Atos, the Lord of Blight, has his essence stored in this deceptively simple wand.",
        "components": [
            "staff_of_wizardry",
            "crown",
            "crown",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "rod_of_atos",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Overwhelm Stuns a target enemy unit for 2 seconds. Pierces Spell Immunity.Range: 150",
            "Passive: Bash Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 120 bonus physical damage.  Bash chance for ranged heroes is 10%.",
            "Passive: Damage Block Grants a 60% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged."
        ],
        "id": 208,
        "img": "abyssal_blade.png",
        "dname": "Abyssal Blade",
        "qual": "epic",
        "cost": 6250,
        "notes": "The stun is melee range.\nDoes not stack with other bashes, and does not grant bash to Clones and Tempest Doubles.\nMultiple sources of damage block do not stack.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "25",
                "footer": "Damage"
            },
            {
                "key": "bonus_health",
                "header": "+",
                "value": "250",
                "footer": "Health"
            },
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "10",
                "footer": "Health Regeneration"
            },
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "10",
                "footer": "Strength"
            }
        ],
        "mc": 75,
        "cd": 35,
        "lore": "The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul.",
        "components": [
            "basher",
            "vanguard",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "abyssal_blade",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Active: DisarmPrevents a target from attacking for 3 seconds on melee targets, and 5 seconds on ranged targets.Range: 600"
        ],
        "id": 210,
        "img": "heavens_halberd.png",
        "dname": "Heaven's Halberd",
        "qual": "artifact",
        "cost": 3550,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_evasion",
                "header": "+",
                "value": "20%",
                "footer": "Evasion"
            },
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "20",
                "footer": "Strength"
            },
            {
                "key": "status_resistance",
                "header": "+Status Resistance",
                "value": "16%"
            },
            {
                "key": "hp_regen_amp",
                "header": "+Health Regen and Lifesteal Amp",
                "value": "20%"
            }
        ],
        "mc": 100,
        "cd": 18,
        "lore": "This halberd moves with the speed of a smaller weapon, allowing the bearer to win duels that a heavy edge would not.",
        "components": [
            "sange",
            "talisman_of_evasion",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "heavens_halberd",
        "recipe": 0,
        "isComponent": false
    },
    {
        "hint": [
            "Passive: Aquila AuraGrants %aura_mana_regen% mana regeneration and %aura_bonus_armor% armor to nearby allies.Radius: %aura_radius%",
            "Toggle: Aura Deactivate to stop affecting non-hero units."
        ],
        "id": 212,
        "img": "ring_of_aquila.png",
        "dname": "Ring of Aquila",
        "qual": "rare",
        "cost": 0,
        "notes": "Multiple instances of Aquila Aura do not stack.",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The ring of the fallen Warlord Aquila continues to support armies in battle.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "ring_of_aquila",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Break Whenever you attack a hero or are attacked by any unit, the bonus 14 HP regen is lost and the movement speed bonus is reduced to 40 for 13 seconds.",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 214,
        "img": "tranquil_boots.png",
        "dname": "Tranquil Boots",
        "qual": "rare",
        "cost": 925,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "65",
                "footer": "Movement Speed"
            },
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "14",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": 13,
        "lore": "While they increase the longevity of the wearer, this boot is not particularly reliable.",
        "components": [
            "boots",
            "wind_lace",
            "ring_of_regen"
        ],
        "created": true,
        "charges": false,
        "name": "tranquil_boots",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: FadeGrants invisibility to you or a target allied hero as long as the target unit remains still.  Has a 1.25 second fade time, and breaks instantly upon moving. There is no cooldown when using this item on yourself.Range: 600"
        ],
        "id": 215,
        "img": "shadow_amulet.png",
        "dname": "Shadow Amulet",
        "cost": 1000,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 7,
        "lore": "A small talisman that clouds the senses of one's enemies when held perfectly still.",
        "components": null,
        "created": false,
        "charges": false,
        "name": "shadow_amulet",
        "recipe": 0,
        "isComponent": true
    },
    {
        "hint": [
            "Active: Glimmer After a 0.6 second delay, grants invisibility and 50% magic resistance to you or a target allied unit for 5 seconds.Range: 550Can be cast while channelling."
        ],
        "id": 254,
        "img": "glimmer_cape.png",
        "dname": "Glimmer Cape",
        "qual": "rare",
        "cost": 1950,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_magical_armor",
                "header": "+",
                "value": "15%",
                "footer": "Magic Resistance"
            }
        ],
        "mc": 90,
        "cd": 14,
        "lore": "The stolen cape of a master illusionist.",
        "components": [
            "shadow_amulet",
            "cloak",
            "recipe"
        ],
        "created": true,
        "charges": false,
        "name": "glimmer_cape",
        "recipe": 0,
        "isComponent": false
    },
    {
        "id": 287,
        "img": "keen_optic.png",
        "dname": "Keen Optic",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "cast_range_bonus",
                "header": "+",
                "value": "75",
                "footer": "Cast Range"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "1.25",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Stolen from a tinker's shop ages ago, this handy lens has seen service to many owners.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "keen_optic",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Magic Amp Reduces magic resistance of the attacked enemy by %magic_resistance_reduction%%%."
        ],
        "id": 288,
        "img": "grove_bow.png",
        "dname": "Grove Bow",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A gift from the moon goddess to one of her prized disciples many memories ago.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "grove_bow",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Cooldown ReductionReduces the cooldown time of all spells and items."
        ],
        "id": 289,
        "img": "quickening_charm.png",
        "dname": "Quickening Charm",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An evergreen amulet of druidic origins.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "quickening_charm",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 290,
        "img": "philosophers_stone.png",
        "dname": "Philosopher's Stone",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_gpm",
                "header": "+GPM BONUS",
                "value": "80"
            },
            {
                "key": "bonus_mana",
                "header": "+",
                "value": "200",
                "footer": "Mana"
            },
            {
                "key": "bonus_damage",
                "header": "-Attack Damage",
                "value": "-30"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A weightless charm created by an enchanter with a powerful scorn for brute force.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "philosophers_stone",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: ForceDispels the user and pushes them 750 units in the direction they are facing.",
            "Passive: Speed Unlock Completely removes the speed limit for the wearer ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
        ],
        "id": 291,
        "img": "force_boots.png",
        "dname": "Force Boots",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "115",
                "footer": "Movement Speed"
            },
            {
                "key": "hp_regen",
                "header": "+",
                "value": "30",
                "footer": "Health Regeneration"
            }
        ],
        "mc": 75,
        "cd": 8,
        "lore": "Elusive marvels never successfully studied for proper classification in the archives.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "force_boots",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Greater Corruption Your attacks reduce the target's armor by -10 for 7 seconds."
        ],
        "id": 292,
        "img": "desolator_2.png",
        "dname": "Stygian Desolator",
        "cost": 0,
        "notes": "Armor reduction works on buildings.",
        "attrib": [
            {
                "key": "bonus_damage",
                "header": "+",
                "value": "60",
                "footer": "Damage"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The original demonic favorite that served as basis for the beloved mortal design.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "desolator_2",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Reveal Reveal a target 800 area of the map for 6 seconds."
        ],
        "id": 294,
        "img": "seer_stone.png",
        "dname": "Seer Stone",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "cast_range_bonus",
                "header": "+",
                "value": "350",
                "footer": "Cast Range"
            },
            {
                "key": "vision_bonus",
                "header": "+Bonus Vision",
                "value": "350"
            },
            {
                "key": "mana_regen",
                "header": "+",
                "value": "10",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 60,
        "lore": "The curious creation of a wizard who professed to hail from another time.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "seer_stone",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Mega Shield Force Field Aura Grants %active_reflection_pct%%% Damage Reflection for 5 seconds.",
            "Passive: Shield Grants +%bonus_aoe_armor% armor and +%bonus_aoe_mres%%% Magic Resistance to all other allies within %bonus_aoe_radius% radius."
        ],
        "id": 829,
        "img": "force_field.png",
        "dname": "Arcanist's Armor",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 20,
        "lore": "An exquisite piece commissioned by a paranoid monarch who choked on a piece of fruit long before the item saw its intended use.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "force_field",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Hair Trigger The next time you get attacked by a hero within %radius% range, explode dealing %damage% damage to all enemies within a %radius% radius and causing them to miss %blind_pct%%% of their attacks for %blind_duration% seconds."
        ],
        "id": 834,
        "img": "black_powder_bag.png",
        "dname": "Blast Rig",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 20,
        "lore": "One of a set of custom rigs once worn by infamous road agents in the Outlands, its siblings have been lost to misfires and the various tides of time.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "black_powder_bag",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Increases all outgoing spell damage and debuff duration."
        ],
        "id": 300,
        "img": "timeless_relic.png",
        "dname": "Timeless Relic",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An unmarred discovery from the excavated ruins of an ancient wizard's academy.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "timeless_relic",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Echo Shield Block and reflect most targeted spells back to their caster once every 8 seconds."
        ],
        "id": 301,
        "img": "mirror_shield.png",
        "dname": "Mirror Shield",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "all_stats",
                "header": "+",
                "value": "10",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The shield that long ago robbed the old one of his first memories.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "mirror_shield",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Increases both non-primary attributes."
        ],
        "id": 306,
        "img": "pupils_gift.png",
        "dname": "Pupil's Gift",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An astounding plate of ever-replenishing, fortifying fruit.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "pupils_gift",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Silence Strike The next attack silences the hit enemy for 1.75 seconds."
        ],
        "id": 309,
        "img": "mind_breaker.png",
        "dname": "Mind Breaker",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "magic_damage",
                "header": "+Magic Attack Damage",
                "value": "25"
            },
            {
                "key": "attack_speed",
                "header": "+Attack Speed",
                "value": "25"
            }
        ],
        "mc": false,
        "cd": 12,
        "lore": "A bewitching blade of indeterminate form capable of piercing the psyche of even the most willful foe.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "mind_breaker",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Cooldown ReductionReduces the cooldown time of all spells and items."
        ],
        "id": 311,
        "img": "spell_prism.png",
        "dname": "Spell Prism",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Even the slightest flaw in the components of a spell prism can result in the death of its user.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "spell_prism",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Flicker Dispells debuffs and blinks you in a random forward direction for a random distance between 200 and 600. If cast within 3 seconds of receving player damage, it will blink in place."
        ],
        "id": 335,
        "img": "flicker.png",
        "dname": "Flicker",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_movement_speed",
                "header": "+",
                "value": "35",
                "footer": "Movement Speed"
            }
        ],
        "mc": false,
        "cd": 5,
        "lore": "The technically-true-to-his-word 'teleportation device' crafted by a notorious fae trickster.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "flicker",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Prescient Aura Lowers Scan cooldown by %scan_cooldown_reduction%%% . Increases attack and cast range of allies in a %aura_range% unit radius."
        ],
        "id": 336,
        "img": "spy_gadget.png",
        "dname": "Telescope",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A handy tool that manages to make close what once was far.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "spy_gadget",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Skitter Grants you %bonus_movement_speed_active%%% bonus movement speed and free pathing for %duration% seconds. Walking over trees causes them to be destroyed."
        ],
        "id": 326,
        "img": "spider_legs.png",
        "dname": "Spider Legs",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 12,
        "lore": "A horrifying yet useful mixture of necromancy and artificing.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "spider_legs",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Also provides one of the following, based on the Vambrace's main attribute:",
            " Strength: +10% Magic Resistance ",
            " Agility: +10 Attack Speed ",
            " Intelligence: +6% Spell Amp"
        ],
        "id": 331,
        "img": "vambrace.png",
        "dname": "Vambrace",
        "qual": "common",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_primary_stat",
                "header": "+Main Vambrace Attribute",
                "value": "10"
            },
            {
                "key": "bonus_secondary_stat",
                "header": "+Other Attributes",
                "value": "5"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The coveted treasure that divided the heirs of Queen Raiya upon her death, resulting in the eventual downfall of her kingdom.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "vambrace",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Water Regen Provides you with 10 HP regen and 5 mana regen while in the river."
        ],
        "id": 354,
        "img": "ocean_heart.png",
        "dname": "Ocean Heart",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "all_stats",
                "header": "+",
                "value": "5",
                "footer": "All Attributes"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A charm blessed by the Council of the Brine.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "ocean_heart",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 355,
        "img": "broom_handle.png",
        "dname": "Broom Handle",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The surprisingly dangerous creation of an apprentice sorcerer with a strange fondness for brooms.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "broom_handle",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Dig Channel for %abilitychanneltime% second. Can find a Bounty Rune, a Flask, an Enchanted Mango, or an enemy Kobold."
        ],
        "id": 356,
        "img": "trusty_shovel.png",
        "dname": "Trusty Shovel",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 50,
        "lore": "Former plaything of a young deity, received as a gift from his uncle.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "trusty_shovel",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 357,
        "img": "nether_shawl.png",
        "dname": "Nether Shawl",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_magic_resistance",
                "header": "+",
                "value": "20%",
                "footer": "Magic Resistance"
            },
            {
                "key": "bonus_spell_amp",
                "header": "+",
                "value": "6%",
                "footer": "Spell Damage"
            },
            {
                "key": "bonus_armor",
                "header": "-Armor",
                "value": "2"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "An otherworldly garment tethered to our plane by unknown means.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "nether_shawl",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Afterburn Causes attacks to burn the enemy, dealing 18 damage per second for 3 seconds. Affects buildings."
        ],
        "id": 358,
        "img": "dragon_scale.png",
        "dname": "Dragon Scale",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "5",
                "footer": "Armor"
            },
            {
                "key": "bonus_hp_regen",
                "header": "+",
                "value": "5",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The remains of a dragon always outvalue the wealth of even the most prodigious hoard.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "dragon_scale",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Life Essence Increases your current and max health by %health_gain% for %health_gain_duration% seconds."
        ],
        "id": 359,
        "img": "essence_ring.png",
        "dname": "Essence Ring",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": 200,
        "cd": 25,
        "lore": "An ancient bauble blessed by the breath of Verodicia.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "essence_ring",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Certain Strike Empowers your next attack with %bonus_damage% bonus magical damage and True Strike. Ranged Attackers have +%bonus_attack_range% bonus range for the attack."
        ],
        "id": 361,
        "img": "enchanted_quiver.png",
        "dname": "Enchanted Quiver",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 4,
        "lore": "A graceful gift blessed by the goddess of the hunt.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "enchanted_quiver",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Solitary Disguise Casts Smoke of Deceit on yourself only."
        ],
        "id": 362,
        "img": "ninja_gear.png",
        "dname": "Ninja Gear",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 45,
        "lore": "Valuable equipment recovered by a young explorer sifting through the flotsam and detritus drifting in the void.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "ninja_gear",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 366,
        "img": "apex.png",
        "dname": "Apex",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "Three orbs of remarkable power bound within a single scepter.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "apex",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Greater Demonic Summoning Summon 2 sets of Level 3 Necronomicon Units that last 75 seconds. Units have 100% more health and 75% more damage."
        ],
        "id": 370,
        "img": "demonicon.png",
        "dname": "Book of the Dead",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "30",
                "footer": "Strength"
            },
            {
                "key": "bonus_intellect",
                "header": "+",
                "value": "30",
                "footer": "Intelligence"
            }
        ],
        "mc": false,
        "cd": 80,
        "lore": "A record of the final reckoning. With one page torn out.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "demonicon",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Dig Channel for %abilitychanneltime% second. Always finds a Bounty Rune!"
        ],
        "id": 372,
        "img": "pirate_hat.png",
        "dname": "Pirate Hat",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 40,
        "lore": "A salty skulltopper cursed with endless good fortune.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "pirate_hat",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Reset Cooldowns Reset the cooldown on all items (except Refresher Orb)."
        ],
        "id": 374,
        "img": "ex_machina.png",
        "dname": "Ex Machina",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_armor",
                "header": "+",
                "value": "20",
                "footer": "Armor"
            }
        ],
        "mc": false,
        "cd": 25,
        "lore": "The remains of an ancient universe, preserved within a single sphere.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "ex_machina",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Greater Healing Amplifies the wearer's Regeneration, Healing, Lifesteal and Spell Lifesteal by %bonus_amp%%%."
        ],
        "id": 376,
        "img": "paladin_sword.png",
        "dname": "Paladin Sword",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "The sigil blade of the legendary Brother Yhols of Gausra, stripped from its scabbard on the day of his controversial excommunication.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "paladin_sword",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 379,
        "img": "the_leveller.png",
        "dname": "The Leveller",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "A demonic blade that struck the final blow to crack the gates of the Sanctum of Solanas.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "the_leveller",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Replenish Mana Restores %mana_restore% mana to all nearby allies.  Radius: %radius%"
        ],
        "id": 349,
        "img": "arcane_ring.png",
        "dname": "Arcane Ring",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 45,
        "lore": "Once a prized heirloom of a minor lord's house.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "arcane_ring",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 381,
        "img": "titan_sliver.png",
        "dname": "Titan Sliver",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "base_attack_damage",
                "header": "+Base Attack Damage",
                "value": "20%"
            },
            {
                "key": "magic_resistance",
                "header": "+",
                "value": "16%",
                "footer": "Magic Resistance"
            },
            {
                "key": "status_resistance",
                "header": "+",
                "value": "12%",
                "footer": "Status Resistance"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Though many desire this brilliant shard for its obvious qualities, a school of study exists to determine the true size and purpose of its incomprehensible whole.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "titan_sliver",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "PassiveEverytime you are attacked, you return 30 damage to heroes and 20 damage to creeps."
        ],
        "id": 565,
        "img": "chipped_vest.png",
        "dname": "Chipped Vest",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "hp_regen",
                "header": "+",
                "value": "4",
                "footer": "Health Regeneration"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "It doesn't look like much, but it's oddly comfy.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "chipped_vest",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 573,
        "img": "elven_tunic.png",
        "dname": "Elven Tunic",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "attack_speed",
                "header": "+",
                "value": "26",
                "footer": "Attack Speed"
            },
            {
                "key": "evasion",
                "header": "+",
                "value": "16%",
                "footer": "Evasion"
            },
            {
                "key": "movment",
                "header": "+",
                "value": "7%",
                "footer": "Movement Speed"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Even simple items of elven make seem imbued with inexplicable efficacy.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "elven_tunic",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: ImmolateBurns enemy units for 45 damage per second. Illusions deal 30 damage per second.Radius: 375"
        ],
        "id": 574,
        "img": "cloak_of_flames.png",
        "dname": "Cloak of Flames",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "armor",
                "header": "+",
                "value": "4",
                "footer": "Armor"
            },
            {
                "key": "magic_resistance",
                "header": "+",
                "value": "10%",
                "footer": "Magic Resistance"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "A very fine cloak that plays host to an overly-protective living flame.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "cloak_of_flames",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: CloakCauses you to become invisible for 6 seconds."
        ],
        "id": 571,
        "img": "trickster_cloak.png",
        "dname": "Trickster Cloak",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "evasion",
                "header": "+",
                "value": "20%",
                "footer": "Magic Resistance"
            },
            {
                "key": "magic_resistance",
                "header": "+",
                "value": "20%",
                "footer": "Evasion"
            }
        ],
        "mc": false,
        "cd": 25,
        "lore": "A fantastic garment immediately misplaced by its creator upon completion.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "trickster_cloak",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: LifestealHeals the attacker for 7 HP on each attack."
        ],
        "id": 577,
        "img": "possessed_mask.png",
        "dname": "Possessed Mask",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "primary_attribute",
                "header": "+",
                "value": "7",
                "footer": "Primary Attribute"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Even when discarded with specific purpose and great care, this frightening mask always finds its way onto the face of a new owner.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "possessed_mask",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: MaimEach attack has a 25% chance to reduce enemy hero movement speed by 20% and attack speed by 60 for 3 seconds."
        ],
        "id": 638,
        "img": "penta_edged_sword.png",
        "dname": "Penta-Edged Sword",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "damage",
                "header": "+",
                "value": "45",
                "footer": "Damage"
            },
            {
                "key": "melee_attack_range",
                "header": "+",
                "value": "100",
                "footer": "Attack Range (Melee Only)"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "The final, twisted work of a severely pious blacksmith, completed immediately before the taking of his own life. ",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "penta_edged_sword",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: WhipGrants 18% movement speed when cast on allies, and slows by 18% when cast on enemies. Lasts 4 seconds."
        ],
        "id": 680,
        "img": "bullwhip.png",
        "dname": "Bullwhip",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health_regen",
                "header": "+",
                "value": "3",
                "footer": "Health Regeneration"
            },
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "2.5",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": false,
        "cd": 11,
        "lore": "Once the favored lash of an infamous broker of pit fighters and other live trade.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "bullwhip",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Psychic PushPushes the target enemy unit away from you %push_length% distance."
        ],
        "id": 675,
        "img": "psychic_headband.png",
        "dname": "Psychic Headband",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 20,
        "lore": "A failed experiment in finer telekinetic control, still fit for other ends.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "psychic_headband",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Ceremonial AuraLowers enemy Status Resistance by %status_resistance%%% and Magic Resistance by %magic_resistance%%%.Radius: %aura_radius%"
        ],
        "id": 676,
        "img": "ceremonial_robe.png",
        "dname": "Ceremonial Robe",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "One of many items lost in the looting of Zelenwyr's sacred reliquary.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 3,
        "name": "ceremonial_robe",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: QuicksilverGrants you a bonus %bonus_movement%%% movement speed and %bonus_attack% attack speed anytime one of your abilities are on cooldown."
        ],
        "id": 686,
        "img": "quicksilver_amulet.png",
        "dname": "Quicksilver Amulet",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An enchanted talisman brimming with a mysterious substance.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "quicksilver_amulet",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: ShadowsTarget an enemy, ally or self. Causes the target to become untargetable but also silenced, muted and disarmed for 3 seconds. Applies a Basic Dispel."
        ],
        "id": 677,
        "img": "book_of_shadows.png",
        "dname": "Book of Shadows",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 8,
        "lore": "An impossible tome filled with unreadable prose of unknowable thoughts.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "book_of_shadows",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Giant's FootCan path over any terrain and deals 100% of your strength per second to units you are standing ontop of."
        ],
        "id": 678,
        "img": "giants_ring.png",
        "dname": "Giant's Ring",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_strength",
                "header": "+",
                "value": "35",
                "footer": "Strength"
            },
            {
                "key": "movement_speed",
                "header": "+",
                "value": "50",
                "footer": "Movement Speed"
            },
            {
                "key": "model_scale",
                "header": "+Model Scale",
                "value": "60%"
            }
        ],
        "mc": false,
        "cd": false,
        "lore": "Prized procurement of an otherwise unremarkable ruler of Elze who abdicated his position and vanished.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 5,
        "name": "giants_ring",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Whirlwind Cyclones your hero for 0.75 seconds. ",
            "Passive: Bottled Lightning Zaps an enemy within 700 range, dealing 200 damage and a 40% slow for 0.3 seconds. Strikes every 3 seconds."
        ],
        "id": 585,
        "img": "stormcrafter.png",
        "dname": "Stormcrafter",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_mana_regen",
                "header": "+",
                "value": "4",
                "footer": "Mana Regeneration"
            }
        ],
        "mc": 50,
        "cd": 25,
        "lore": "The accidental byproduct of a spell conjured to entrap a lesser god.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "stormcrafter",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "id": 589,
        "img": "mysterious_hat.png",
        "dname": "Fairy's Trinket",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "bonus_health",
                "header": "+",
                "value": "75",
                "footer": "Health"
            },
            {
                "key": "spell_amp",
                "header": "+",
                "value": "5%",
                "footer": "Spell Damage"
            },
            {
                "key": "manacost_reduction",
                "header": "+",
                "value": "5%",
                "footer": "Manacost Reduction"
            }
        ],
        "mc": false,
        "cd": 8,
        "lore": "A small token imbued with the fortune of the fae in recognition of an intriguing display of mortal kindness.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "mysterious_hat",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: EnduranceWhenever a debuff would be applied to the owner, grant %status_resistance%%% Status resistance for %duration% seconds."
        ],
        "id": 825,
        "img": "ascetic_cap.png",
        "dname": "Ascetic's Cap",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 30,
        "lore": "An austere hat thought to be of Turstarkuri origin.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "ascetic_cap",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Passive: Dark MercyYour attacks deal %bonus_damage% more damage to enemies for each %missing_hp%%% HP they are missing."
        ],
        "id": 828,
        "img": "misericorde.png",
        "dname": "Brigand's Blade",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": false,
        "lore": "An infamous assassin's blade stolen and smuggled out of White Spire after its owner's mysterious demise.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "misericorde",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: CleansePurge Target Enemy or Ally.",
            "Passive: SubjugateYour attacks deal bonus damage equal to 4% of your target Max Mana."
        ],
        "id": 837,
        "img": "witchbane.png",
        "dname": "Witchbane",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": 75,
        "cd": 20,
        "lore": "With ready access to test subjects, untold cruelties have been dreamed up and loosed upon the world from within the walls of the Tyler Estate.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 4,
        "name": "heavy_blade",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Pig, Out!Turns your hero into a critter for 4 seconds and gives them +10% Movement Speed."
        ],
        "id": 838,
        "img": "unstable_wand.png",
        "dname": "Pig Pole",
        "cost": 0,
        "notes": "",
        "attrib": [
            {
                "key": "all_stats",
                "header": "+",
                "value": "6",
                "footer": "All Attributes"
            }
        ],
        "mc": 50,
        "cd": 25,
        "lore": "A makeshift charm misplaced by a peace-loving, addlebrained enchanter.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "unstable_wand",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: VaultPropels your hero forward %leap_distance% units. Tumbler's Toy gets disabled for 3 seconds if its owner receives damage from a player source."
        ],
        "id": 840,
        "img": "pogo_stick.png",
        "dname": "Tumbler's Toy",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": false,
        "cd": 15,
        "lore": "An antique plaything found in the ruins of an Ozenja circus bazaar.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 1,
        "name": "pogo_stick",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    },
    {
        "hint": [
            "Active: Shadow BrandThrows a Mark towards an enemy within %abilitycastrange% range applying a debuff that deals %dps% damage every second and provides vision of the unit for %duration% seconds."
        ],
        "id": 835,
        "img": "paintball.png",
        "dname": "Fae Grenade",
        "cost": 0,
        "notes": "",
        "attrib": [],
        "mc": 25,
        "cd": 20,
        "lore": "Those marked for death by the fae shine brightly to all manner of creatures in the shadow realm.",
        "components": null,
        "created": false,
        "charges": false,
        "tier": 2,
        "name": "paintball",
        "recipe": 0,
        "isComponent": false,
        "neutral": true
    }
]