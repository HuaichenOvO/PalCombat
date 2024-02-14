# PalCombat

## Description
Implemented with React, multiple player games, following OOP paradigm.

This project a pvp game where players combats with a group of Pals. A player can adopt multiple Pals, each of which has its own attributes and skills. A pal can also put on multiple items to get buff, strengthening their attributes. After combats, the player can feed Pals with curative food to recover the HP, or feed them with pro-growth food to give them higher EXP.


## Business Requirements

<b>Verbs</b>

`Nouns`

- A `player` can <b>adopt</b> `Pals` and take them to <b>participate</b> in a `battle`.
- In a `battle`, each `player` can <b>select</b> three `Pals` to fight.
- When a Pal's `HP` is down to 0 in a battle, it will be beaten and the player <b>loses</b> the battle.
- After a `battle`, if a Pal's `HP` is 0, the player needs to <b>refill</b> its HP to take it to another battle.
- A Pal can put on `items` to <b>strengthen</b> its `attributes`.
- Winning a battle gives a player some `coins`, which can be used to <b>purchase</b> `items` in the shop.
- Players can <b>feed</b> Pals with `curative foods` to <b>refill</b> `HP` or `pro-growth food` to grow `EXP`
- Players can also <b>view</b> their `battle history`.

### Nouns and Verbs

Nouns
- player
- Pals
- battle
- HP, EXP
- items
- attributes
- coins
- curative food
- pro-growth food

Verbs
- adopt
- participate
- select 
- loses
- refill
- strengthen
- purchase
- feed
- refill
- view

### Summary of Classes, Attributes and Associations

Player (Class)
    
    playerId 
    name

PlayerProfile (Class)
    
    profileId
    coins

Item (Class)

    name
    hpBuff
    mpBuff
    attackBuff


Food (Class)

    name

CurativeFood (extending Food)

    hpHeal

ProGrowthFood (extending Food)

    expPromotion

Battle (Class)

    playerId[2]
    winner

### Target Audiences

- Combat fans who are attracted by gameplay and combination of Pals
- Pal fans who loves to see their favorite Pal roles showing up in the game

### Rules

- The player can have at most 1 Pal for all species of Pals.
- A Pal can only have one owner.
- During a combat, each user can at most bring 3 Pals to battle.
- Winning a battle can provide the winner with at most 100 coins.
- A Pal can at most put on 2 items.
- A Pal cannot eat curative food any more if its HP is full.
- A Pal cannot eat pro-growth food any more if its MP is full.

### Challenge Questions
- If a player quits the game during the battle, can this player be considered losing immediately?
- Can a player viewother player's battle history?
- After a player accomplished to feed all the Pals to the highest level, can the player still earn and but items?

## User Stories

### Dimensions
- Values game mechanisms vs Values game arts
- Loves socializing in games vs Loves exploring the game world
- Achievement chasers vs Freelancers
- Explicit players vs Implicit players (whether they know how their action can change the game world)

The last dimension is based on [Wiki of Tanyu](http://wiki.tanyu.mobi/doku.php/)

Two possible dimensions:

Mechanisms vs Art and Socializing vs Game Exploring


## Mockups

## UML Design