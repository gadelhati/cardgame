# 🃏 _Card Game_

![github](https://img.shields.io/github/stars/gadelhati/cardgame "Github")
![github all releases](https://img.shields.io/github/downloads/gadelhati/cardgame/total?label=Downloads&style=social)

![VS Code](https://img.shields.io/badge/VS%20Code-1.90.0-007ACC?logo=visualstudiocode)
![Node.js](https://img.shields.io/badge/Node.js-22.17-339933?logo=node.js)
![npm](https://img.shields.io/badge/npm-10.9.2-CB3837?logo=npm)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)

## 1. Archetype List

### 1.1. Complementary colors
<p align="center"><img src="https://github.com/gadelhati/cardgame-front/blob/main/src/assets/complementaryColors.png" width="250"/></p>

|**Cool**   |vs|   **Warm**|Emotional state|vs|Emotional state|Axis             |                                             |
|:----------|--|:----------|--------------:|--|:--------------|:----------------|--------------------------------------------:|
|🟣 Violet  |vs| 🟡 Yellow|Ambition       |vs|Balance        |Resource morality|**Self-interest** vs **Global equilibrium**  |
|🔵 Blue    |vs| 🟠 Orange|Isolation      |vs|Community      |Social structure |**Independence** vs **Interdependence**      |
|🟢 Green   |vs| 🔴 Red   |Progression    |vs|Explosion      |Time horizon     |**Inevitable growth** vs **Immediate impact**|
|

|Color     |Core Principle   |Gains power by        |Wins through                       |
|----------|-----------------|----------------------|-----------------------------------|
|🟣 Violet |Sacrifice        |Losing resources      |Power through sacrifice            |
|🔵 Blue   |Time manipulation|Controlling resolution/Denying opponent agency            |Power through independence and interaction denial|
|🟢 Green  |Time accumulation|Waiting and scaling   |Power through time and accumulation|
|🟡 Yellow |Stability        |Balancing resources   |Power through balance              |
|🟠 Orange |Cooperation      |Increasing allies     |Multiplying value |
|🔴 Red    |Risk conversion  |Acting immediately    |Overwhelming early pressure        |

### 1.2. Emotional states

> 🟣 Violet: Converting loss into an asymmetric strategic advantage.

**Cause (what Violet willingly sacrifices):**
- Lose life
- Discard cards
- Destroy own cards
- Use cards in Trash as fuel
- Accept negative effects voluntarily

**Effect (what Violet gains from sacrifice):**
- Drain enemy stats or life
- Reanimate cards from Trash
- Convert debuffs into buffs
- Copy or steal effects
- Permanently weaken enemy cards
- Trade temporary loss for permanent advantage

> 🔵 Blue: Power through independence and interaction denial.
>**Manipulate resolution order**, manipulates the flow of **_time_**.

**Cause (what enables Blue effects):**
- Having fewer allies on the field
- Acting alone
- Changing positions or states
- Avoiding direct interaction
- State change

**Effect (how Blue isolates and controls):**
- Move cards between fields
- Return cards to hand or deck
- Prevent cards from interacting
- Change targets of effects
- Delay or reorder resolution
- Become untargetable or inaccessible
- Reveal or conceal information

> 🟢 Green: Converts **_time_** into growth

**Cause (what Green accumulates):**
- Retaining cards in hand
- Saving resources
- Accumulating turns
- Long-term survival

**Effect (how Green converts time into power):**
- Progressive stat growth
- Scaling effects over time
- Accelerated resource generation
- Increasing efficiency each turn
- Search to cards
- Overwhelming late-game strength

> 🟡 Yellow: Preserves and equalizes **_resource_** states

**Cause (what enables Yellow effects):**
- Having intact cards
- Maintaining stable life total
- Having balanced board state
- Protecting allies over time

**Effect (how Yellow enforces equilibrium):**
- Shield and protection effects
- Heal and restore life
- Remove negative effects (cleanse)
- Prevent destruction or stat reduction
- Apply global stabilizing effects
- Normalize stat differences

🟠 Orange: **Enthusiasm**. Collective, inspiring and contagious. Grows stronger the more allies are present. Effect that scales with the number of allies on the field. Inspire allies to increase collective resources.
> Share **_resources_**
- Maintaining board presence
- cause: many cards
- cause: number of allies on the field, on play in group, entering play alongside another card, trait synergy
- effect: simultaneous activation, sharing of resources(buff allies on the field, distribute resources among multiple targets), activate a secondary effect on another card already in play, resource conversion, ripple effect

> 🔴 Red: Converts instability|risk into explosive power

**Cause (what enables Red explosiveness):**
- Discarding cards in hand
- Spending resources aggressively, constant pressure
- Low life total
- Acting immediately instead of waiting

**Effect (how Red converts risk into damage):**
- Run over
- Low cost cards
- Direct damage to enemies
- Destroy enemy cards
- Attack multiple targets
- Damage to multiple targets(NOT ALL).
- Force combat interactions(attacking or defending)
- Gain temporary power spikes
- Trade survival for immediate impact

### 1.3. How each archetype relates

    Green naturally accumulates high ATK, it's the archetype that grows the most over time, so it dominates long rounds. Red tries to end rounds early with immediate pressure before Green scales up. Orange increases the collective ATK of allies, competing with Green in a different way. Blue manipulates the stack to remove or reposition opponent's cards before the final calculation. Violet drains opponent's ATK or converts enemy cards. Yellow protects its cards from being removed before the calculation.

## 2. Deck Construction
- Deck of 40 at 60 cards (there will be a rarity limit where the entire deck cannot exceed X stars in rarity)
- Limit of four copies
- Maximum of 2 archetypes per deck

## 3. Card construction
The archetype and power of the card will be defined after its creation. The archetype is based on your personality and purpose, while the power is based on its weight in combat and potential impact.
The rarity may change depending on the final power defined.

<p align="center"><img src="https://github.com/gadelhati/cardgame-front/blob/main/src/assets/cardVector.png" width="250"/></p>

### Rarity Definition
Card creation is the game's customization point, where each player assembles their own card, and at the end of the creation process, receives a color and rarity according to its attributes and effects.

### Card Versions
    Normal colors
    Inverted colors
    Night version
    Neon version
    Draft version
    Monochrome version(following the archetype color)

### 3.1. Border
    The card features a clean outer border (margin) colored in black.
    The card features a clean outer border (padding) colored according to its archetype.
    
- Archetype Color (e.g., blue, green, etc.): The archetype's color changes during card creation and becomes fixed once published. After, it may be adjusted in response to balance updates (buffs or nerfs)
    - The card may have up to two archetypes, and the border should visually represent both (e.g., gradient on each side).

### 3.2. Top Section
- Top-left: Resource cost, visually coded with the color associated with the card’s rarity tier.
    - The cost is the primary balancing parameter and may be adjusted through buffs or nerfs..
- Top-center: The number of stars that represent its power.
- Top-right: Combat statistics displayed as number representing the attack and number representing the defender (separated by slash /)

### 3.3. Artwork Layout
    The illustration occupies the entire card background and uses a four-layer parallax composition:
- Title Layer: The card title positioned at the bottom of the artwork, expressive lettering integrated into the scene.
- Foreground: Character in a dynamic action pose.
- Midground: Environmental scenery elements.
- Background: Sky, distant atmospheric elements, or large-scale environmental elements.

### 3.4. Text Area (Lower Half)
    A translucent rectangular panel overlays the lower portion of the card, ensuring readability while preserving visual depth
- Card effect (if exists), on the same line:
    - left: cause(effect cost)
    - center: effect name
    - right: consequence.
        - duration
- Default effect description in parentheses (if exists)
- Lore text, displayed in italic style

### 3.5. Card Classification
- Type: Character. (Currently, all cards are character cards)
- Trait: [Trait name](It may or may not have synergy with another card)

### 3.6. Footer Information:
- Illustrator information: Illustrator's name centered
- Bottom-left: on the same line
    - enterprise information: Forgepack™
    - rights information: © 2026 Forgepack S.A. All rights reserved.
- Bottom-right: collection reference: Card number / Total cards in collection

## 4. Card Interaction & Turn System

### 4.1. Card Movement
- Each player drags one card at a time: from the hand or from the deck(once per round)
- Starting hand of five cards
- Mulligan 2 times with one less player each time
- There is no limit to the number of turns per round; the player's strategy is the only limitation
- If one player does not move a card, the other player cannot move either, and the round ends
- The first player in each round alternates
- There is no automatic card draw per round
- I play this card on the pile now or save it for another opportunity?
- Do I advocate for the offensive now, or do I wait for my ally?
- There is no mana, nor a limit on the number of cards per turn.
- The standard duration of the effects is one time
- A player card can be dragged from a **source field** to a **destination field**.
    - source fields: [ _Deck_ | _Hand_ | _Desk_ | _Trash_ ]
    - destination fields: [ _Deck_ | _Hand_ | _Desk_ | _Trash_ | or directly onto another card]
        desk: this is where both players' permanent spells are stored, and where effects go into the effect resolution stack

### 4.2. Skill Activation Timing
Card skills may trigger at different interaction moments: [ _On Drag_ | _On Drop_ | _Field-Specific Activation_ ]

    Certain skills only activate if the card is dropped into a specific field (e.g., Desk only).

### 4.3. Effect Structure
If a card has an effect, the effect must explicitly define: [ _Origin_ | *_Destination_ | _Consequence_ ]
- _Origin_: The target of the effect (field, player, or specific card)
- *_Destination_: caso seja um efeito de movimento
- _Consequence_: The mechanical outcome applied (damage, buff, move, discard, etc.), including duration if applicable.

### 4.4. Flow
- A turn consists of dragging and dropping a single card.
- The turn automatically ends when the card is successfully dropped onto a valid destination.
- The player who, at the end of each round, wins in the matchup between the ATK and DEF of their permanent cards on the Desk dominates the field and wins the round.

## 5. Win Condition
At the end of each round, the player who dominates the terrain wins.
The game ends when one of the players runs out of life points or their deck.

## 6. Business Model
Based on:
- Collecting
- Variable market due to meta-game
- Players sell cards
- Cosmetic monetization

## Roadmap

- [ ] Modelo matematicamente robusto do sistema de atribuição de estrelas
- [ ] Precisamos de algum marcador de influência sobre terreno dominado?
- [ ] Simulador de como se encontra o meta