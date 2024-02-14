# PalCraft


## Description
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

## Summary of Classes, Attributes and Associations

Player(<u>PID</u>, )
