// enums for coin name strings
enum COIN {
    COPPER = "cp",
    SILVER = "sp",
    ELECTRUM = "ep",
    GOLD = "gp",
    PLATINUM = "pp"
}

// coins and their values in cp
const COIN_VALUES:Map<COIN, number> = new Map([
    [COIN.COPPER, 1],
    [COIN.SILVER, 10],
    [COIN.ELECTRUM, 50],
    [COIN.GOLD, 100],
    [COIN.PLATINUM, 1000]
])

// a coinset
class Wallet {
    coins:object;
    
    constructor({cp=0, sp=0, ep=0, gp=0, pp=0}) {
        this.coins = {
            "cp": cp,
            "sp": sp,
            "ep": ep,
            "gp": gp,
            "pp": pp
        }
    }
    
    // converts a given dictionary of coins to a value in a given single currency (by default cp)
    // example: convert({"sp":5, "gp":3}) would return 200
    convert(finalCoin=COIN.COPPER):number {
        let copper_value:number = 0;
        for (let key in this.coins)
        copper_value += COIN_VALUES.get(key) * this.coins[key];
        return (copper_value / COIN_VALUES.get(finalCoin));
    }
}

// Alignments (Lawful good, Neutral evil, etc.)
class Alignment {
    as_text: string;
    description: string;
    
    constructor({as_text=null, description=""}) {
        this.as_text = as_text;
        this.description = description;
    }
}
const ALIGNMENTS = {
    LAWFUL_GOOD = new Alignment({
        as_text : "Lawful Good",
        description : "Lawful Good creatures can be counted on to do the right thing as expected by society."
    }),
    NEUTRAL_GOOD = new Alignment({
        as_text : "Neutral Good",
        description : "Neutral Good folk do the best they can to help others according to their needs."
    }),
    CHAOTIC_GOOD = new Alignment({
        as_text : "Chaotic Good",
        description : "Chaotic Good creatures act as their conscience directs, with little regard for what others expect."
    }),
    LAWFUL_NEUTRAL = new Alignment({
        as_text : "Lawful Neutral",
        description : "Lawful Neutral individuals act in accordance with law, tradition, or personal codes."
    }),
    TRUE_NEUTRAL = new Alignment({
        as_text : "True Neutral",
        description : "True Neutral is the alignment of those who prefer to steer clear of moral questions and don’t take sides, doing what seems best at the time."
    }),
    CHAOTIC_NEUTRAL = new Alignment({
        as_text : "Chaotic Neutral",
        description : "Chaotic Neutral creatures follow their whims, holding their personal freedom above all else."
    }),
    LAWFUL_EVIL = new Alignment({
        as_text : "Lawful Evil",
        description : "Lawful Evil creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order."
    }),
    NEUTRAL_EVIL = new Alignment({
        as_text : "Neutral Evil",
        description : "Neutral Evil is the alignment of those who do whatever they can get away with, without compassion or qualms."
    }),
    CHAOTIC_EVIL = new Alignment({
        as_text : "Chaotic Evil",
        description : "Chaotic Evil creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust."
    }),
}

// Abilities (Strength, Wisdom, etc.)
class Ability {
    as_text: string;
    description: string;
    
    constructor({as_text=null, description=""}) {
        this.as_text = as_text;
        this.description = description;
    }
}
const ABILITIES = {
    STRENGTH : new Ability({
        as_text : "Strength",
        description : "Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force."
    }),
    DEXTERITY : new Ability({
        as_text : "Dexterity",
        description : "Dexterity measures agility, reflexes, and balance."
    }),
    CONSTITUTION : new Ability({
        as_text : "Constitution",
        description : "Constitution measures health, stamina, and vital force."
    }),
    INTELLIGENCE : new Ability({
        as_text : "Intelligence",
        description : "Intelligence measures mental acuity, accuracy of recall, and the ability to reason."
    }),
    WISDOM : new Ability({
        as_text : "Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.",
        description : "Physical power"
    }),
    CHARISM : new Ability({
        as_text : "Charisma",
        description : "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality."
    }),
}

// Defining equipment, weapon, and armor classes
class Equipment {
    as_text: string;
    cost: Wallet;
    weight: number;
    description: string;
    
    constructor({as_text=null, cost=null, weight=null, description=""}) {
        this.as_text = as_text;
        this.cost = cost;
        this.weight = weight;
        this.description = description;
    }
}
enum DAMAGE_TYPE {
    BLUDGEONING = "Bludgeoning",
    PIERCING = "Piercing",
    SLASHING = "Slashing"
}
class Weapon extends Equipment {
    damage: string;
    damage_type: DAMAGE_TYPE;
    properties: string;
    
    constructor({as_text=null, cost=null, weight=null, description="", damage=null, damage_type=null, properties=""} = {}) {
        super({as_text : as_text, cost : cost, weight : weight, description : description});
        this.damage = damage;
        this.damage_type = damage_type;
        this.properties = properties;
    }
}
class Armor extends Equipment {
    armor_class: number;
    strength_required: number;
    is_unstealthy: boolean;
    dex_modifier_max: number;
    
    constructor({as_text=null, cost=null, weight=null, description=null, armor_class=null, strength_required=0, is_unstealthy=false, dex_modifier_max=0}) {
        super({as_text : as_text, cost : cost, weight : weight, description : description});
        this.armor_class = armor_class;
        this.strength_required = strength_required;
        this.is_unstealthy = is_unstealthy;
        this.dex_modifier_max = dex_modifier_max;
    }
}

// Equipment, weapon, and armor lists
const ARMOR = {
    PADDED = new Armor({
        as_text = "Padded",
        description = "Padded armor consists of quilted layers of cloth and batting.",
        cost = new Wallet({gp:5}),
        armor_class = 11,
        dex_modifier_max = Infinity,
        is_unstealthy = true,
        weight = 8
    }),
    LEATHER = new Armor({
        as_text = "Leather",
        description = "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",
        cost = new Wallet({gp:10}),
        armor_class = 11,
        dex_modifier_max = Infinity,
        weight = 10
    }),
    STUDDED_LEATHER = new Armor({
        as_text = "Studded Leather",
        description = "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",
        cost = new Wallet({gp:45}),
        armor_class = 12,
        dex_modifier_max = Infinity,
        weight = 13
    }),
    HIDE = new Armor({
        as_text = "Hide",
        description = "This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor.",
        cost = new Wallet({gp:10}),
        armor_class = 12,
        dex_modifier_max = 2,
        weight = 12
    }),
    CHAIN_SHIRT = new Armor({
        as_text = "Chain Shirt",
        description = "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
        cost = new Wallet({gp:50}),
        armor_class = 13,
        dex_modifier_max = 2,
        weight = 20
    }),
    SCALE_MAIL = new Armor({
        as_text = "Scale Male",
        description = "This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.",
        cost = new Wallet({gp:50}),
        armor_class = 14,
        dex_modifier_max = 2,
        weight = 45,
        is_unstealthy = true
    }),
    BREASTPLATE = new Armor({
        as_text = "Breast Plate",
        description = "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
        cost = new Wallet({gp:400}),
        armor_class = 14,
        dex_modifier_max = 2,
        weight = 20,
    }),
    HALF_PLATE = new Armor({
        as_text = "Half Plate",
        description = "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg protection beyond simple greaves that are attached with leather straps.",
        cost = new Wallet({gp:750}),
        armor_class = 15,
        dex_modifier_max = 2,
        weight = 40,
        is_unstealthy = true
    }),
    RING_MAIL = new Armor({
        as_text = "Ring Mail",
        description = "This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor.",
        cost = new Wallet({gp:30}),
        armor_class = 14,
        dex_modifier_max = 0,
        weight = 40,
        is_unstealthy = true
    }),
    CHAIN_MAIL = new Armor({
        as_text = "Chain Mail",
        description = "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.",
        cost = new Wallet({gp:75}),
        armor_class = 16,
        dex_modifier_max = 0,
        weight = 55,
        is_unstealthy = true,
        strength_required = 13
    }),
    SPLINT = new Armor({
        as_text = "Splint",
        description = "This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints.",
        cost = new Wallet({gp:200}),
        armor_class = 17,
        dex_modifier_max = 0,
        weight = 60,
        is_unstealthy = true,
        strength_required = 15
    }),
    PLATE = new Armor({
        as_text = "Plate",
        description = "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
        cost = new Wallet({gp:1500}),
        armor_class = 18,
        dex_modifier_max = 0,
        weight = 65,
        is_unstealthy = true,
        strength_required = 15
    })
}
const WEAPONS = {
    CLUB = new Weapon({
        as_text = "Club",
        cost = new Wallet({sp=1}),
        damage = "1d4",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 2,
        properties = "Light, melee, simple"
    }),
    DAGGER = new Weapon({
        as_text = "Dagger",
        cost = new Wallet({gp:2}),
        damage = "1d4",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 1,
        properties = "Finesse, light, thrown (range 20/60), melee, simple"
    }),
    GREATCLUB = new Weapon({
        as_text = "Greatclub",
        cost = new Wallet({sp=2}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 10,
        properties = "Two-handed, melee, simple"
    }),
    HANDAXE = new Weapon({
        as_text = "Handaxe",
        cost = new Wallet({gp:5}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 2,
        properties = "Light, thrown (range 20/60), melee, simple"
    }),
    JAVELIN = new Weapon({
        as_text = "Javelin",
        cost = new Wallet({sp=5}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 2,
        properties = "Thrown (range 30/120), melee, simple"
    }),
    LIGHT_HAMMER = new Weapon({
        as_text = "Light Hammer",
        cost = new Wallet({gp:2}),
        damage = "1d4",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 2,
        properties = "Light, thrown (range 20/60), melee, simple"
    }),
    MACE = new Weapon({
        as_text = "Mace",
        cost = new Wallet({gp:5}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 4,
        properties = "Melee, simple"
    }),
    QUARTERSTAFF = new Weapon({
        as_text = "Quarterstaff",
        cost = new Wallet({sp=2}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 4,
        properties = "Versatile (1d8), melee, simple"
    }),
    SICKLE = new Weapon({
        as_text = "Sickle",
        cost = new Wallet({gp:1}),
        damage = "1d4",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 2,
        properties = "Light, melee, simple"
    }),
    SPEAR = new Weapon({
        as_text = "Spear",
        cost = new Wallet({gp:1}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 3,
        properties = "Thrown (range 20/60), versatile (1d8), melee, simple"
    }),
    CROSSBOW = new Weapon({
        as_text = "Crossbow",
        cost = new Wallet({gp:25}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 5,
        properties = "Ammunition (range 80/320), loading, two-handed, ranged, simple"
    }),
    DART = new Weapon({
        as_text = "Dart",
        cost = new Wallet({cp=5}),
        damage = "1d4",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 0.25,
        properties = "Finesse, thrown (range 20/60), ranged, simple"
    }),
    SHORT_BOW = new Weapon({
        as_text = "Short bow",
        cost = new Wallet({gp:25}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 2,
        properties = "Ammunition (range 80/320), two-handed, ranged, simple"
    }),
    SLING = new Weapon({
        as_text = "Sling",
        cost = new Wallet({sp=1}),
        damage = "1d4",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 0,
        properties = "Ammunition (range 30/120), ranged, simple"
    }),
    BATTLEAXE = new Weapon({
        as_text = "Battleaxe",
        cost = new Wallet({gp:10}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 4,
        properties = "Versatile (1d10), melee, martial"
    }),
    FLAIL = new Weapon({
        as_text = "Flail",
        cost = new Wallet({gp:10}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 2,
        properties = "Melee, martial"
    }),
    GLAIVE = new Weapon({
        as_text = "Glaive",
        cost = new Wallet({gp:20}),
        damage = "1d10",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 6,
        properties = "Heavy, reach, two-handed, melee, martial"
    }),
    GREATAXE = new Weapon({
        as_text = "Greataxe",
        cost = new Wallet({gp:30}),
        damage = "1d12",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 7,
        properties = "Heavy, two-handed, melee, martial"
    }),
    GREATSWORD = new Weapon({
        as_text = "Greatsword",
        cost = new Wallet({gp:50}),
        damage = "2d6",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 6,
        properties = "Heavy, two-handed, melee, martial"
    }),
    HALBERD = new Weapon({
        as_text = "Halberd",
        cost = new Wallet({gp:20}),
        damage = "1d10",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 6,
        properties = "Heavy, reach, two-handed, melee, martial"
    }),
    LANCE = new Weapon({
        as_text = "Lance",
        cost = new Wallet({gp:10}),
        damage = "1d12",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 6,
        properties = "Reach, melee, martial",
        description = "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted."
    }),
    LONGSWORD = new Weapon({
        as_text = "Longsword",
        cost = new Wallet({gp:15}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 3,
        properties = "Versatile (1d10), melee, martial"
    }),
    MAUL = new Weapon({
        as_text = "Maul",
        cost = new Wallet({gp:10}),
        damage = "2d6",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 10,
        properties = "Heavy, two-handed, melee, martial"
    }),
    MORNINGSTAR = new Weapon({
        as_text = "Morningstar",
        cost = new Wallet({gp:15}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 4,
        properties = "Melee, martial"
    }),
    PIKE = new Weapon({
        as_text = "Pike",
        cost = new Wallet({gp:5}),
        damage = "1d10",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 18,
        properties = "Heavy, reach, two-handed, melee, martial"
    }),
    RAPIER = new Weapon({
        as_text = "Rapier",
        cost = new Wallet({gp:25}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 2,
        properties = "Finesse, melee, martial"
    }),
    SCIMITAR = new Weapon({
        as_text = "Scimitar",
        cost = new Wallet({gp:25}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 3,
        properties = "Finesse, light, melee, martial"
    }),
    SHORTSWORD = new Weapon({
        as_text = "Shortsword",
        cost = new Wallet({gp:10}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 2,
        properties = "Finesse, light, melee, martial"
    }),
    TRIDENT = new Weapon({
        as_text = "Trident",
        cost = new Wallet({gp:5}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 4,
        properties = "Thrown (range 20/60), versatile (1d8), melee, martial"
    }),
    WAR_PICK = new Weapon({
        as_text = "War pick",
        cost = new Wallet({gp:5}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 2,
        properties = "Melee, martial"
    }),
    WARHAMMER = new Weapon({
        as_text = "Warhammer",
        cost = new Wallet({gp:15}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.BLUDGEONING,
        weight = 2,
        properties = "Versatile (1d10), melee, martial"
    }),
    WHIP = new Weapon({
        as_text = "Whip",
        cost = new Wallet({gp:2}),
        damage = "1d4",
        damage_type = DAMAGE_TYPE.SLASHING,
        weight = 3,
        properties = "Finesse, reach, melee, martial"
    }),
    BLOWGUN = new Weapon({
        as_text = "Blowgun",
        cost = new Wallet({gp:10}),
        damage = "1",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 1,
        properties = "Ammunition (range 25/100), loading, ranged, martial"
    }),
    HAND_CROSSBOW = new Weapon({
        as_text = "Hand crossbow",
        cost = new Wallet({gp:75}),
        damage = "1d6",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 3,
        properties = "Ammunition (range 30/120), light, loading, ranged, martial"
    }),
    HEAVY_CROSSBOW = new Weapon({
        as_text = "Heavy crossbow",
        cost = new Wallet({gp:50}),
        damage = "1d10",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 18,
        properties = "Ammunition (range 100/400), heavy, loading, two-handed, ranged, martial"
    }),
    LONGBOW = new Weapon({
        as_text = "Longbow",
        cost = new Wallet({gp:50}),
        damage = "1d8",
        damage_type = DAMAGE_TYPE.PIERCING,
        weight = 2,
        properties = "Ammunition (range 150/600), heavy, two-handed, ranged, martial"
    }),
    NET = new Weapon({
        as_text = "Net",
        cost = new Wallet({gp:1}),
        damage = "0",
        damage_type = null,
        weight = 3,
        properties = "Thrown (range 5/15), ranged, martial",
        description = "A Large or smaller creature hit by a net is restrained until it is freed."
    }),
}
const EQUIPMENT = { // equipment that isn't armor or weapons
    ARROW = new Equipment({
        as_text = "Arrow",
        cost = new Wallet({cp:5}),
        weight = 0.05,
        description = "Ammunition for bows."
    }),
    BLOWGUN_NEEDLE = new Equipment({
        as_text = "Blowgun needle",
        cost = new Wallet({cp:2}),
        weight = 0.02,
        description = "Ammunition for blowguns."
    }),
    CROSSBOW_BOLT = new Equipment({
        as_text = "Crossbow bolt",
        cost = new Wallet({cp:5}),
        weight = 0.075,
        description = "Ammunition for crossbows."
    }),
    SLING_BULLET = new Equipment({
        as_text = "Sling bullet",
        cost = new Wallet({cp:0.2}),
        weight = 0.075,
        description = "Ammunition for slings."
    }),
    CRYSTAL = new Equipment({
        as_text = "Crystal",
        cost = new Wallet({gp:10}),
        weight = 1,
        description = "An arcane focus."
    }),
    ORB = new Equipment({
        as_text = "Orb",
        cost = new Wallet({gp:20}),
        weight = 3,
        description = "An arcane focus."
    }),
    ROD = new Equipment({
        as_text = "Rod",
        cost = new Wallet({gp:10}),
        weight = 2,
        description = "An arcane focus."
    }),
    STAFF = new Equipment({
        as_text = "Staff",
        cost = new Wallet({gp:5}),
        weight = 4,
        description = "An arcane focus."
    }),
    WAND = new Equipment({
        as_text = "Wand",
        cost = new Wallet({gp:10}),
        weight = 1,
        description = "An arcane focus."
    }),
    SPRIG_OF_MISTLETOE = new Equipment({
        as_text = "Sprig of mistletoe",
        cost = new Wallet({gp:1}),
        weight = 0,
        description = "A druidic focus."
    }),
    TOTEM = new Equipment({
        as_text = "Totem",
        cost = new Wallet({gp:1}),
        weight = 0,
        description = "A druidic focus."
    }),
    WOODEN_STAFF = new Equipment({
        as_text = "Wooden staff",
        cost = new Wallet({gp:5}),
        weight = 4,
        description = "A druidic focus."
    }),
    YEW_WAND = new Equipment({
        as_text = "Yew wand",
        cost = new Wallet({gp:10}),
        weight = 1,
        description = "A druidic focus."
    }),
    AMULET = new Equipment({
        as_text = "Amulet",
        cost = new Wallet({gp:5}),
        weight = 1,
        description = "A holy symbol."
    }),
    EMBLEM = new Equipment({
        as_text = "Emblem",
        cost = new Wallet({gp:5}),
        weight = 0,
        description = "Holy symbol."
    }),
    RELIQUARY = new Equipment({
        as_text = "Reliquary",
        cost = new Wallet({gp:5}),
        weight = 2,
        description = "Holy symbol."
    }),
    ABACUS = new Equipment({
        as_text = "Abacus",
        cost = new Wallet({gp:2}),
        weight = 2,
        description = "0"
    }),
    ACID = new Equipment({
        as_text = "Acid",
        cost = new Wallet({gp:25}),
        weight = 1,
        description = "A vile of acid. As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage."
    }),
    ALCHEMISTS_FIRE = new Equipment({
        as_text = "Alchemist's fire",
        cost = new Wallet({gp:50}),
        weight = 1,
        description = "Flask of alchemist's fire. This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
    }),
    ANTITOXIN = new Equipment({
        as_text = "Antitoxin",
        cost = new Wallet({gp:50}),
        weight = 0,
        description = "A vial of antitoxin. A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
    }),
    BACKPACK = new Equipment({
        as_text = "Backpack",
        cost = new Wallet({gp:2}),
        weight = 5,
        description = "Capacity of 1 cubic foot/30 pounds of gear."
    }),
    BALL_BEARINGS = new Equipment({
        as_text = "Ball bearings",
        cost = new Wallet({cp:0.1}),
        weight = 0.002,
        description = "As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the save."
    }),
    BARREL = new Equipment({
        as_text = "Barrel",
        cost = new Wallet({gp:2}),
        weight = 70,
        description = "Capacity of 40 gallons liquid, 4 cubic feet solid."
    }),
    BASKET = new Equipment({
        as_text = "Basket",
        cost = new Wallet({sp:4}),
        weight = 2,
        description = "Capcity of 2 cubic feet/40 pounds of gear"
    }),
    BEDROLL = new Equipment({
        as_text = "Bedroll",
        cost = new Wallet({gp:1}),
        weight = 7,
        description = "0"
    }),
    BELL = new Equipment({
        as_text = "Bell",
        cost = new Wallet({gp:1}),
        weight = 0,
        description = "0"
    }),
    BLANKET = new Equipment({
        as_text = "Blanket",
        cost = new Wallet({sp:5}),
        weight = 3,
        description = "0"
    }),
    BLOCK_AND_TACKLE = new Equipment({
        as_text = "Block and tackle",
        cost = new Wallet({gp:1}),
        weight = 5,
        description = "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift."
    }),
    BOOK = new Equipment({
        as_text = "Book",
        cost = new Wallet({gp:25}),
        weight = 5,
        description = "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures."
    }),
    GLASS_BOTTLE = new Equipment({
        as_text = "Glass bottle",
        cost = new Wallet({gp:2}),
        weight = 2,
        description = "Capacity of 1 1/2 pints liquid"
    }),
    BUCKET = new Equipment({
        as_text = "Bucket",
        cost = new Wallet({cp:5}),
        weight = 2,
        description = "Capacity of 3 gallons liquid, 1/2 cubic foot solid"
    }),
    CALTROPS = new Equipment({
        as_text = "Caltrops",
        cost = new Wallet({cp:5}),
        weight = 0.1,
        description = "As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature's walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through the area at half speed doesn't need to make the save."
    }),
    CANDLE = new Equipment({
        as_text = "Candle",
        cost = new Wallet({cp:1}),
        weight = 0,
        description = "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."
    }),
    CROSSBOW_BOLT_CASE = new Equipment({
        as_text = "Crossbow bolt case",
        cost = new Wallet({gp:1}),
        weight = 1,
        description = "This wooden case can hold up to twenty crossbow bolts."
    }),
    MAP_OR_SCROLL_CASE = new Equipment({
        as_text = "Map or scroll case",
        cost = new Wallet({gp:1}),
        weight = 1,
        description = "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment."
    }),
    CHAIN = new Equipment({
        as_text = "Chain",
        cost = new Wallet({gp:5}),
        weight = 10,
        description = "10 feet of chain. A chain has 10 hit points. It can be burst with a successful DC 20 Strength check."
    }),
    PIECE_OF_CHALK = new Equipment({
        as_text = "Piece of chalk",
        cost = new Wallet({cp:1}),
        weight = 0,
        description = "0"
    }),
    CHEST = new Equipment({
        as_text = "Chest",
        cost = new Wallet({gp:5}),
        weight = 25,
        description = "Capacity of 12 cubic feet/300 pounds gear"
    }),
    CLIMBERS_KIT = new Equipment({
        as_text = "Climber's kit",
        cost = new Wallet({gp:25}),
        weight = 12,
        description = "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
    }),
    COMMON_CLOTHES = new Equipment({
        as_text = "Common clothes",
        cost = new Wallet({sp:5}),
        weight = 3,
        description = "0"
    }),
    COSTUME_CLOTHES = new Equipment({
        as_text = "Costume clothes",
        cost = new Wallet({gp:5}),
        weight = 4,
        description = "0"
    }),
    FINE_CLOTHES = new Equipment({
        as_text = "Fine clothes",
        cost = new Wallet({gp:15}),
        weight = 6,
        description = "0"
    }),
    TRAVELERS_CLOTHES = new Equipment({
        as_text = "Traveler's clothes",
        cost = new Wallet({gp:2}),
        weight = 4,
        description = "0"
    }),
    COMPONENT_POUCH = new Equipment({
        as_text = "Component pouch",
        cost = new Wallet({gp:25}),
        weight = 2,
        description = "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description)."
    }),
    CROWBAR = new Equipment({
        as_text = "Crowbar",
        cost = new Wallet({gp:2}),
        weight = 5,
        description = "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
    }),
    FISHING_TACKLE = new Equipment({
        as_text = "Fishing tackle",
        cost = new Wallet({gp:1}),
        weight = 4,
        description = "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
    }),
    FLASK = new Equipment({
        as_text = "Flask",
        cost = new Wallet({cp:2}),
        weight = 1,
        description = "Capacity of 1 pint liquid"
    }),
    GRAPPLING_HOOK = new Equipment({
        as_text = "Grappling hook",
        cost = new Wallet({gp:2}),
        weight = 4,
        description = "0"
    }),
    HAMMER = new Equipment({
        as_text = "Hammer",
        cost = new Wallet({gp:1}),
        weight = 3,
        description = "0"
    }),
    SLEDGEHAMMER = new Equipment({
        as_text = "Sledgehammer",
        cost = new Wallet({gp:2}),
        weight = 10,
        description = "0"
    }),
    HEALERS_KIT = new Equipment({
        as_text = "Healer's kit",
        cost = new Wallet({gp:5}),
        weight = 3,
        description = "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."
    }),
    HOLY_WATER = new Equipment({
        as_text = "Holy water",
        cost = new Wallet({gp:25}),
        weight = 1,
        description = "A flask of holy water. As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage."
    }),
    HOURGLASS = new Equipment({
        as_text = "Hourglass",
        cost = new Wallet({gp:25}),
        weight = 1,
        description = "0"
    }),
    HUNTING_TRAP = new Equipment({
        as_text = "Hunting trap",
        cost = new Wallet({gp:5}),
        weight = 25,
        description = "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
    }),
    INK = new Equipment({
        as_text = "Ink",
        cost = new Wallet({gp:10}),
        weight = 0,
        description = "An ounce of ink in a bottle. "
    }),
    INK_PEN = new Equipment({
        as_text = "Ink pen",
        cost = new Wallet({cp:2}),
        weight = 0,
        description = "0"
    }),
    JUG = new Equipment({
        as_text = "Jug",
        cost = new Wallet({cp:2}),
        weight = 4,
        description = "Capacity of 1 gallon liquid"
    }),
    LADDER = new Equipment({
        as_text = "Ladder",
        cost = new Wallet({sp:1}),
        weight = 25,
        description = "A ten foot ladder."
    }),
    LAMP = new Equipment({
        as_text = "Lamp",
        cost = new Wallet({sp:5}),
        weight = 1,
        description = "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
    }),
    BULLSEYE_LANTERN = new Equipment({
        as_text = "Bullseye lantern",
        cost = new Wallet({gp:10}),
        weight = 2,
        description = "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
    }),
    HOODED_LANTERN = new Equipment({
        as_text = "Hooded lantern",
        cost = new Wallet({gp:5}),
        weight = 2,
        description = "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
    }),
    LOCK = new Equipment({
        as_text = "Lock",
        cost = new Wallet({gp:10}),
        weight = 1,
        description = "A key is provided with the lock. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices."
    }),
    MAGNIFYING_GLASS = new Equipment({
        as_text = "Magnifying glass",
        cost = new Wallet({gp:100}),
        weight = 0,
        description = "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."
    }),
    MANACLES = new Equipment({
        as_text = "Manacles",
        cost = new Wallet({gp:2}),
        weight = 6,
        description = "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points."
    }),
    MESS_KIT = new Equipment({
        as_text = "Mess kit",
        cost = new Wallet({sp:2}),
        weight = 1,
        description = "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
    }),
    MIRROR_STEEL = new Equipment({
        as_text = "Mirror, steel",
        cost = new Wallet({gp:5}),
        weight = 1.5,
        description = "0"
    }),
    OIL = new Equipment({
        as_text = "Oil",
        cost = new Wallet({sp:1}),
        weight = 1,
        description = "A flask of oil. Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn."
    }),
    PAPER = new Equipment({
        as_text = "Paper",
        cost = new Wallet({sp:2}),
        weight = 0,
        description = "A sheet of paper."
    }),
    PARCHMENT = new Equipment({
        as_text = "Parchment",
        cost = new Wallet({sp:1}),
        weight = 0,
        description = "A sheet of parchment."
    }),
    PERFUME = new Equipment({
        as_text = "Perfume",
        cost = new Wallet({gp:5}),
        weight = 0,
        description = "A vial of perfume."
    }),
    MINERS_PICK = new Equipment({
        as_text = "Miner's pick",
        cost = new Wallet({gp:2}),
        weight = 10,
        description = "0"
    }),
    PITON = new Equipment({
        as_text = "Piton",
        cost = new Wallet({cp:5}),
        weight = 2.5,
        description = "0"
    }),
    BASIC_POISON = new Equipment({
        as_text = "Basic poison",
        cost = new Wallet({gp:100}),
        weight = 0,
        description = "A vial of basic poison. You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying."
    }),
    POLE = new Equipment({
        as_text = "Pole",
        cost = new Wallet({cp:5}),
        weight = 7,
        description = "A 10-foot pole."
    }),
    IRON_POT = new Equipment({
        as_text = "Iron pot",
        cost = new Wallet({gp:2}),
        weight = 10,
        description = "Capacity of 1 gallon liquid."
    }),
    POTION_OF_HEALING = new Equipment({
        as_text = "Potion of healing",
        cost = new Wallet({gp:50}),
        weight = 1.5,
        description = "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action."
    }),
    POUCH = new Equipment({
        as_text = "Pouch",
        cost = new Wallet({sp:5}),
        weight = 1,
        description = "Capacity of 1/5 cubic foot/6 pounds of gear."
    }),
    QUIVER = new Equipment({
        as_text = "Quiver",
        cost = new Wallet({gp:1}),
        weight = 1,
        description = "A quiver can hold up to 20 arrows."
    }),
    PORTABLE_RAM = new Equipment({
        as_text = "Portable ram",
        cost = new Wallet({gp:4}),
        weight = 35,
        description = "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
    }),
    RATIONS = new Equipment({
        as_text = "Rations",
        cost = new Wallet({sp:5}),
        weight = 2,
        description = "1 day's worth of rations. Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
    }),
    ROBES = new Equipment({
        as_text = "Robes",
        cost = new Wallet({gp:1}),
        weight = 4,
        description = "0"
    }),
    HEMPEN_ROPE = new Equipment({
        as_text = "Hempen rope",
        cost = new Wallet({gp:1}),
        weight = 10,
        description = "50 feet of rope. Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
    }),
    SILK_ROPE = new Equipment({
        as_text = "Silk rope",
        cost = new Wallet({gp:10}),
        weight = 5,
        description = "50 feet of rope. Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
    }),
    SACK = new Equipment({
        as_text = "Sack",
        cost = new Wallet({cp:1}),
        weight = 1.5,
        description = "Capacity of 1 cubic foot/30 pounds of gear."
    }),
    MERCHANTS_SCALE = new Equipment({
        as_text = "Merchant's scale",
        cost = new Wallet({gp:5}),
        weight = 3,
        description = "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
    }),
    SEALING_WAX = new Equipment({
        as_text = "Sealing wax",
        cost = new Wallet({sp:5}),
        weight = 0,
        description = "0"
    }),
    SHOVEL = new Equipment({
        as_text = "Shovel",
        cost = new Wallet({gp:2}),
        weight = 5,
        description = "0"
    }),
    SIGNAL_WHISTLE = new Equipment({
        as_text = "Signal whistle",
        cost = new Wallet({cp:5}),
        weight = 0,
        description = "0"
    }),
    SIGNET_RING = new Equipment({
        as_text = "Signet ring",
        cost = new Wallet({gp:5}),
        weight = 0,
        description = "0"
    }),
    SOAP = new Equipment({
        as_text = "Soap",
        cost = new Wallet({cp:2}),
        weight = 0,
        description = "0"
    }),
    SPELLBOOK = new Equipment({
        as_text = "Spellbook",
        cost = new Wallet({gp:50}),
        weight = 3,
        description = "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
    }),
    IRON_SPIKES = new Equipment({
        as_text = "Iron spikes",
        cost = new Wallet({gp:1}),
        weight = 5,
        description = "10 iron spikes."
    }),
    SPYGLASS = new Equipment({
        as_text = "Spyglass",
        cost = new Wallet({gp:1000}),
        weight = 1,
        description = "Objects viewed through a spyglass are magnified to twice their size."
    }),
    TENT = new Equipment({
        as_text = "Tent",
        cost = new Wallet({gp:2}),
        weight = 20,
        description = "A simple and portable canvas shelter, a tent sleeps two."
    }),
    TINDERBOX = new Equipment({
        as_text = "Tinderbox",
        cost = new Wallet({sp:5}),
        weight = 1,
        description = "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch--or anything else with abundant, exposed fuel--takes an action. Lighting any other fire takes 1 minute."
    }),
    TORCH = new Equipment({
        as_text = "Torch",
        cost = new Wallet({cp:1}),
        weight = 1,
        description = "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
    }),
    VIAL = new Equipment({
        as_text = "Vial",
        cost = new Wallet({gp:1}),
        weight = 0,
        description = "Capacity of 4 ounces liquid."
    }),
    WATERSKIN = new Equipment({
        as_text = "Waterskin",
        cost = new Wallet({sp:2}),
        weight = 5,
        description = "Capacity of 4 pints of liquid."
    }),
    WHETSTONE = new Equipment({
        as_text = "Whetstone",
        cost = new Wallet({cp:1}),
        weight = 1,
        description = "0"
    }),
    ALCHEMISTS_SUPPLIES = new Equipment({
        as_text = "Alchemist's supplies",
        cost = new Wallet({gp:50}),
        weight = 8,
        description = "Artisan's tool."
    }),
    BREWERS_SUPPLIES = new Equipment({
        as_text = "Brewer's supplies",
        cost = new Wallet({gp:20}),
        weight = 9,
        description = "Artisan's tool."
    }),
    CALLIGRAPHERS_SUPPLIES = new Equipment({
        as_text = "Calligrapher's supplies",
        cost = new Wallet({gp:10}),
        weight = 5,
        description = "Artisan's tool."
    }),
    CARPENTERS_TOOLS = new Equipment({
        as_text = "Carpenter's tools",
        cost = new Wallet({gp:8}),
        weight = 6,
        description = "Artisan's tool."
    }),
    CARTOGRAPHERS_TOOLS = new Equipment({
        as_text = "Cartographer's tools",
        cost = new Wallet({gp:15}),
        weight = 6,
        description = "Artisan's tool."
    }),
    COBBLERS_TOOLS = new Equipment({
        as_text = "Cobbler's tools",
        cost = new Wallet({gp:5}),
        weight = 5,
        description = "Artisan's tool."
    }),
    COOKS_UTENSILS = new Equipment({
        as_text = "Cook's utensils",
        cost = new Wallet({gp:1}),
        weight = 8,
        description = "Artisan's tool."
    }),
    GLASSBLOWERS_TOOLS = new Equipment({
        as_text = "Glassblower's tools",
        cost = new Wallet({gp:30}),
        weight = 5,
        description = "Artisan's tool."
    }),
    JEWELERS_TOOLS = new Equipment({
        as_text = "Jeweler's tools",
        cost = new Wallet({gp:25}),
        weight = 2,
        description = "Artisan's tool."
    }),
    LEATHERWORKERS_TOOLS = new Equipment({
        as_text = "Leatherworker's tools",
        cost = new Wallet({gp:5}),
        weight = 5,
        description = "Artisan's tool."
    }),
    MASONS_TOOLS = new Equipment({
        as_text = "Mason's tools",
        cost = new Wallet({gp:10}),
        weight = 8,
        description = "Artisan's tool."
    }),
    PAINTERS_SUPPLIES = new Equipment({
        as_text = "Painter's supplies",
        cost = new Wallet({gp:10}),
        weight = 5,
        description = "Artisan's tool."
    }),
    POTTERS_TOOLS = new Equipment({
        as_text = "Potter's tools",
        cost = new Wallet({gp:10}),
        weight = 3,
        description = "Artisan's tool."
    }),
    SMITHS_TOOLS = new Equipment({
        as_text = "Smith's tools",
        cost = new Wallet({gp:20}),
        weight = 8,
        description = "Artisan's tool."
    }),
    TINKERS_TOOLS = new Equipment({
        as_text = "Tinker's tools",
        cost = new Wallet({gp:50}),
        weight = 10,
        description = "Artisan's tool."
    }),
    WEAVERS_TOOLS = new Equipment({
        as_text = "Weaver's tools",
        cost = new Wallet({gp:1}),
        weight = 5,
        description = "Artisan's tool."
    }),
    WOODCARVERS_TOOLS = new Equipment({
        as_text = "Woodcarver's tools",
        cost = new Wallet({gp:1}),
        weight = 5,
        description = "Artisan's tool."
    }),
    DICE_SET = new Equipment({
        as_text = "Dice set",
        cost = new Wallet({sp:1}),
        weight = 0,
        description = "Gaming set."
    }),
    DRAGONCHESS_SET = new Equipment({
        as_text = "Dragonchess set",
        cost = new Wallet({gp:1}),
        weight = 1.5,
        description = "Gaming set."
    }),
    PLAYING_CARD_SET = new Equipment({
        as_text = "Playing card set",
        cost = new Wallet({sp:5}),
        weight = 0,
        description = "Gaming set."
    }),
    THREE_DRAGON_ANTE_SET = new Equipment({
        as_text = "Three-Dragon Ante set",
        cost = new Wallet({gp:1}),
        weight = 0,
        description = "Gaming set."
    }),
    BAGPIPES = new Equipment({
        as_text = "Bagpipes",
        cost = new Wallet({gp:30}),
        weight = 6,
        description = "Musical instrument."
    }),
    DRUM = new Equipment({
        as_text = "Drum",
        cost = new Wallet({gp:6}),
        weight = 3,
        description = "Musical instrument."
    }),
    DULCIMER = new Equipment({
        as_text = "Dulcimer",
        cost = new Wallet({gp:25}),
        weight = 10,
        description = "Musical instrument."
    }),
    FLUTE = new Equipment({
        as_text = "Flute",
        cost = new Wallet({gp:2}),
        weight = 1,
        description = "Musical instrument."
    }),
    LUTE = new Equipment({
        as_text = "Lute",
        cost = new Wallet({gp:35}),
        weight = 2,
        description = "Musical instrument."
    }),
    LYRE = new Equipment({
        as_text = "Lyre",
        cost = new Wallet({gp:30}),
        weight = 2,
        description = "Musical instrument."
    }),
    HORN = new Equipment({
        as_text = "Horn",
        cost = new Wallet({gp:3}),
        weight = 2,
        description = "Musical instrument."
    }),
    PAN_FLUTE = new Equipment({
        as_text = "Pan flute",
        cost = new Wallet({gp:12}),
        weight = 2,
        description = "Musical instrument."
    }),
    SHAWM = new Equipment({
        as_text = "Shawm",
        cost = new Wallet({gp:2}),
        weight = 1,
        description = "Musical instrument."
    }),
    VIOL = new Equipment({
        as_text = "Viol",
        cost = new Wallet({gp:30}),
        weight = 1,
        description = "Musical instrument."
    }),
    DISGUISE_KIT = new Equipment({
        as_text = "Disguise kit",
        cost = new Wallet({gp:25}),
        weight = 3,
        description = "0"
    }),
    FORGERY_KIT = new Equipment({
        as_text = "Forgery kit",
        cost = new Wallet({gp:15}),
        weight = 5,
        description = "0"
    }),
    HERBALISM_KIT = new Equipment({
        as_text = "Herbalism kit",
        cost = new Wallet({gp:5}),
        weight = 3,
        description = "0"
    }),
    NAVIGATORS_TOOLS = new Equipment({
        as_text = "Navigator's tools",
        cost = new Wallet({gp:25}),
        weight = 2,
        description = "0"
    }),
    POISONERS_KIT = new Equipment({
        as_text = "Poisoner's kit",
        cost = new Wallet({gp:50}),
        weight = 2,
        description = "0"
    }),
    THIEVES_TOOLS = new Equipment({
        as_text = "Thieves' tools",
        cost = new Wallet({gp:25}),
        weight = 1,
        description = "0"
    }),
    ALMS_BOX = new Equipment({
        as_text = "Alms Box",
        description = "A small box for alms, typically found in a priest's pack.",
        cost = new Wallet({cp:0}),
        weight = 0
    }),
    INCENSE = new Equipment({
        as_text = "Incense",
        cost = new Wallet({gp:1}),
        weight = 0
    }),
    CENSER = new Equipment({
        as_text = "Censer",
        description = "A censer, typically found in a priest's pack.",
        cost = new Wallet({cp:0}),
        weight = 0
    }),
    VESTMENT = new Equipment({
        as_text = "Vestment",
        description = "Religious clothing, typically found in a priest's pack.",
        cost = new Wallet({cp:0}),
        weight = 0
    }),
    SAND = new Equipment({
        as_text = "Sand",
        description = "A small pouch of sand.",
        cost = new Wallet({cp:0}),
        weight = 0
    }),
    PADDED_BARDING = new Equipment({
        as_text = "Padded Barding",
        description = "Padded armor for your mount.",
        cost = new Wallet({gp:20}),
        weight = 16
    }),
    LEATHER_BARDING = new Equipment({
        as_text = "Leather Barding",
        description = "Leather armor for your mount.",
        cost = new Wallet({gp:40}),
        weight = 20
    }),
    STUDDED_LEATHER_BARDING = new Equipment({
        as_text = "Studded leather Barding",
        description = "Studded leather armor for your mount.",
        cost = new Wallet({gp:180}),
        weight = 26
    }),
    HIDE_BARDING = new Equipment({
        as_text = "Hide Barding",
        description = "Hide armor for your mount.",
        cost = new Wallet({gp:40}),
        weight = 24
    }),
    CHAIN_SHIRT_BARDING = new Equipment({
        as_text = "Chain shirt Barding",
        description = "Chain shirt armor for your mount.",
        cost = new Wallet({gp:200}),
        weight = 40
    }),
    SCALE_MAIL_BARDING = new Equipment({
        as_text = "Scale mail Barding",
        description = "Scale mail armor for your mount.",
        cost = new Wallet({gp:200}),
        weight = 90
    }),
    BREASTPLATE_BARDING = new Equipment({
        as_text = "Breastplate Barding",
        description = "Breastplate armor for your mount.",
        cost = new Wallet({gp:1600}),
        weight = 40
    }),
    HALF_PLATE_BARDING = new Equipment({
        as_text = "Half plate Barding",
        description = "Half plate armor for your mount.",
        cost = new Wallet({gp:3000}),
        weight = 80
    }),
    RING_MAIL_BARDING = new Equipment({
        as_text = "Ring mail Barding",
        description = "Ring mail armor for your mount.",
        cost = new Wallet({gp:120}),
        weight = 80
    }),
    CHAIN_MAIL_BARDING = new Equipment({
        as_text = "Chain mail Barding",
        description = "Chain mail armor for your mount.",
        cost = new Wallet({gp:300}),
        weight = 110
    }),
    SPLINT_BARDING = new Equipment({
        as_text = "Splint Barding",
        description = "Splint armor for your mount.",
        cost = new Wallet({gp:800}),
        weight = 120
    }),
    PLATE_BARDING = new Equipment({
        as_text = "Plate Barding",
        description = "Plate armor for your mount.",
        cost = new Wallet({gp:6000}),
        weight = 130
    }),
    BIT_AND_BRIDLE = new Equipment({
        as_text = "Bit and bridle",
        description = "0",
        cost = new Wallet({gp:2}),
        weight = 1
    }),
    CARRIAGE = new Equipment({
        as_text = "Carriage",
        description = "0",
        cost = new Wallet({gp:100}),
        weight = 600
    }),
    CART = new Equipment({
        as_text = "Cart",
        description = "0",
        cost = new Wallet({gp:15}),
        weight = 200
    }),
    CHARIOT = new Equipment({
        as_text = "Chariot",
        description = "0",
        cost = new Wallet({gp:250}),
        weight = 100
    }),
    FEED_PER_DAY = new Equipment({
        as_text = "Feed (per day)",
        description = "0",
        cost = new Wallet({cp:5}),
        weight = 10
    }),
    SADDLEBAGS = new Equipment({
        as_text = "Saddlebags",
        description = "0",
        cost = new Wallet({gp:4}),
        weight = 8
    }),
    SLED = new Equipment({
        as_text = "Sled",
        description = "0",
        cost = new Wallet({gp:20}),
        weight = 300
    }),
    STABLING_PER_DAY = new Equipment({
        as_text = "Stabling (per day)",
        description = "0",
        cost = new Wallet({sp:5}),
        weight = 0
    }),
    WAGON = new Equipment({
        as_text = "Wagon",
        description = "0",
        cost = new Wallet({gp:35}),
        weight = 400
    }),
    EXOTIC_SADDLE = new Equipment({
        as_text = "Exotic saddle",
        description = "An exotic saddle is required for riding any aquatic or flying mount.",
        cost = new Wallet({gp:60}),
        weight = 40
    }),
    MILITARY_SADDLE = new Equipment({
        as_text = "Military saddle",
        description = "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted.",
        cost = new Wallet({gp:20}),
        weight = 30
    }),
    PACK_SADDLE = new Equipment({
        as_text = "Pack saddle",
        description = "0",
        cost = new Wallet({gp:5}),
        weight = 15
    }),
    RIDING_SADDLE = new Equipment({
        as_text = "Riding saddle",
        description = "0",
        cost = new Wallet({gp:10}),
        weight = 25
    }),
}

// Equipment packs
class EquipmentPack {
    as_text:string;
    cost:Wallet;
    contents:Map<Equipment, number>;
    
    constructor({as_text=null, cost=null, contents=null}) {
        this.as_text = as_text;
        this.contents = contents;
        this.cost = cost;
    }
    
    total_weight():number {
        let total_weight = 0;
        for (let eq in this.contents) {
            total_weight += eq.weight;
        }
        return total_weight;
    }
}
const EQUIPMENT_PACKS = {
    BURGLARS_PACK = new EquipmentPack({
        as_text = "Burglar's Pack",
        cost = new Wallet({gp:16}),
        contents = new Map([
            [EQUIPMENT.BACKPACK, 1],
            [EQUIPMENT.BALL_BEARINGS, 1000],
            [EQUIPMENT.SILK_ROPE, 1],
            [EQUIPMENT.BELL, 1],
            [EQUIPMENT.CANDLE, 5],
            [EQUIPMENT.CROWBAR, 1],
            [EQUIPMENT.HAMMER, 1],
            [EQUIPMENT.PITON, 10],
            [EQUIPMENT.HOODED_LANTERN, 1],
            [EQUIPMENT.OIL, 2],
            [EQUIPMENT.RATIONS, 5],
            [EQUIPMENT.TINDERBOX, 1],
            [EQUIPMENT.WATERSKIN, 1],
            [EQUIPMENT.HEMPEN_ROPE, 1],
        ])
    }),
    DIPLOMATS_PACK = new EquipmentPack({
        as_text = "Diplomat's Pack",
        cost = new Wallet({gp:39}),
        contents = new Map([
            [EQUIPMENT.CHEST, 1],
            [EQUIPMENT.MAP_OR_SCROLL_CASE, 2],
            [EQUIPMENT.FINE_CLOTHES, 1],
            [EQUIPMENT.INK, 1],
            [EQUIPMENT.INK_PEN, 1],
            [EQUIPMENT.LAMP, 1],
            [EQUIPMENT.OIL, 2],
            [EQUIPMENT.PAPER, 5],
            [EQUIPMENT.PERFUME, 1],
            [EQUIPMENT.SEALING_WAX, 1],
            [EQUIPMENT.SOAP, 1],
        ])
    }),
    DUNGEONEERS_PACK = new EquipmentPack({
        as_text = "Dungeoneer's Pack",
        cost = new Wallet({gp:12}),
        contents = new Map([
            [EQUIPMENT.BACKPACK, 1],
            [EQUIPMENT.CROWBAR, 1000],
            [EQUIPMENT.HAMMER, 1],
            [EQUIPMENT.PITON, 10],
            [EQUIPMENT.TORCH, 10],
            [EQUIPMENT.TINDERBOX, 1],
            [EQUIPMENT.RATIONS, 10],
            [EQUIPMENT.WATERSKIN, 1],
            [EQUIPMENT.HEMPEN_ROPE, 1],
        ])
    }),
    ENTERTAINERS_PACK = new EquipmentPack({
        as_text = "Entertainer's Pack",
        cost = new Wallet({gp:40}),
        contents = new Map([
            [EQUIPMENT.BACKPACK, 1],
            [EQUIPMENT.BEDROLL, 1],
            [EQUIPMENT.COSTUME_CLOTHES, 2],
            [EQUIPMENT.CANDLE, 5],
            [EQUIPMENT.RATIONS, 5],
            [EQUIPMENT.WATERSKIN, 1],
            [EQUIPMENT.DISGUISE_KIT, 1],
        ])
    }),
    EXPLORERS_PACK = new EquipmentPack({
        as_text = "Explorer's Pack",
        cost = new Wallet({gp:10}),
        contents = new Map([
            [EQUIPMENT.BACKPACK, 1],
            [EQUIPMENT.BEDROLL, 1],
            [EQUIPMENT.MESS_KIT, 1],
            [EQUIPMENT.TINDERBOX, 1],
            [EQUIPMENT.TORCH, 10],
            [EQUIPMENT.WATERSKIN, 1],
            [EQUIPMENT.HEMPEN_ROPE, 1],
        ])
    }),
    PRIESTS_PACK = new EquipmentPack({
        as_text = "Priest's Pack",
        cost = new Wallet({gp:19}),
        contents = new Map([
            [EQUIPMENT.BACKPACK, 1],
            [EQUIPMENT.BLANKET, 1],
            [EQUIPMENT.CANDLE, 10],
            [EQUIPMENT.TINDERBOX, 1],
            [EQUIPMENT.ALMS_BOX, 1],
            [EQUIPMENT.INCENSE, 2],
            [EQUIPMENT.CENSER, 1],
            [EQUIPMENT.VESTMENT, 1],
            [EQUIPMENT.RATIONS, 2],
            [EQUIPMENT.WATERSKIN, 1],
        ])
    }),
    SCHOLARS_PACK = new EquipmentPack({
        as_text = "Scholar's Pack",
        cost = new Wallet({gp:40}),
        contents = new Map([
            [EQUIPMENT.BACKPACK, 1],
            [EQUIPMENT.BOOK, 1],
            [EQUIPMENT.INK, 1],
            [EQUIPMENT.INK_PEN, 1],
            [EQUIPMENT.PARCHMENT, 10],
            [EQUIPMENT.SAND, 1],
            [WEAPONS.DAGGER, 1],
        ])
    }),
}

// Mounts
class Mount {
    as_text: string;
    description: string;
    cost: Wallet;
    speed: number;
    carrying_capacity: number;
    
    constructor({as_text=null, description="", cost=null, speed=null, carrying_capacity=null}) {
        this.as_text = as_text;
        this.description = description;
        this.cost = cost;
        this.speed = speed;
        this.carrying_capacity = carrying_capacity;
    }
}
const MOUNTS = {
    CAMEL = new Mount({
        as_text = "Camel",
        cost = new Wallet({gp:50}),
        speed = 50,
        carrying_capacity = 480
    }),
    DONKEY = new Mount({
        as_text = "Donkey",
        cost = new Wallet({gp:8}),
        speed = 40,
        carrying_capacity = 420
    }),
    ELEPHANT = new Mount({
        as_text = "Elephant",
        cost = new Wallet({gp:200}),
        speed = 40,
        carrying_capacity = 1320
    }),
    DRAFT_HORSE = new Mount({
        as_text = "Draft horse",
        cost = new Wallet({gp:50}),
        speed = 40,
        carrying_capacity = 540
    }),
    RIDING_HORSE = new Mount({
        as_text = "Riding horse",
        cost = new Wallet({gp:75}),
        speed = 60,
        carrying_capacity = 480
    }),
    MASTIFF = new Mount({
        as_text = "Mastiff",
        cost = new Wallet({gp:25}),
        speed = 40,
        carrying_capacity = 195
    }),
    PONY = new Mount({
        as_text = "Pony",
        cost = new Wallet({gp:30}),
        speed = 40,
        carrying_capacity = 225
    }),
    WARHORSE = new Mount({
        as_text = "Warhorse",
        cost = new Wallet({gp:400}),
        speed = 60,
        carrying_capacity = 540
    }),
}

class Race {
    alignment: Alignment;
    ability: Map<Ability, number>;
    proficiencies: 
}
