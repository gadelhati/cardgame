# 🃏 _Card Game_

![github](https://img.shields.io/github/stars/gadelhati/cardgame "Github")
![github all releases](https://img.shields.io/github/downloads/gadelhati/cardgame/total?label=Downloads&style=social)

![VS Code](https://img.shields.io/badge/VS%20Code-1.90.0-007ACC?logo=visualstudiocode)
![Node.js](https://img.shields.io/badge/Node.js-22.17-339933?logo=node.js)
![npm](https://img.shields.io/badge/npm-10.9.2-CB3837?logo=npm)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)

The card game in question aims to be an exclusively digital CCG (Collectible Card Game), with its main strategic differentiator being the deep customization of cards.
Creating a card will not be trivial or immediate: it is an intentionally challenging process. This controlled construction barrier adds value to the cards created.
In addition, the system will allow the player, after investing in the construction of their own card, to trade it with other players.

## 1. Archetype List

### 1.1. Complementary colors
<p align="center"><img src="https://github.com/gadelhati/cardgame-front/blob/main/src/assets/complementaryColors.png" width="250"/></p>

|**Cool -⭐**|vs|**Warm +⭐**|Emotional state|vs|Emotional state|Axis               |                                             |
|:-----------|--|:------------|--------------:|--|:--------------|:------------------|--------------------------------------------:|
|🟣 Violet   |vs|🟡 Yellow   |Ambition       |vs|Balance        |A-Resource morality|**Self-interest** vs **Global equilibrium**  |
|🔵 Blue     |vs|🟠 Orange   |Isolation      |vs|Community      |B-Social structure |**Independence** vs **Interdependence**      |
|🟢 Green    |vs|🔴 Red      |Progression    |vs|Explosion      |C-Time horizon     |**Inevitable growth** vs **Immediate impact**|

|Color     |Core Principle    |Gains power by         |Wins through                                     |
|----------|------------------|-----------------------|-------------------------------------------------|
|🟣 Violet |Sacrifice         |Losing resources       |Power through sacrifice                          |
|🔵 Blue   |Tempo manipulation|Denying opponent agency|Power through independence and interaction denial|
|🟢 Green  |Time accumulation |Waiting and scaling    |Power through time and accumulation              |
|🟡 Yellow |Stability         |Balancing resources    |Power through balance                            |
|🟠 Orange |Cooperation       |Increasing allies      |Power through connection and collective presence |
|🔴 Red    |Risk conversion   |Acting immediately     |Overwhelming early pressure                      |

### 1.2. Emotional states

> 🟣 Violet: Converting loss into an asymmetric strategic advantage.

**Cause (what Violet willingly sacrifices):**
- -1⭐ Lose life (−2, 0, 0)
- -1⭐ Discard cards
- -2⭐ Destroy own cards
- -1⭐ Accept negative effects voluntarily

**Effect (what Violet gains from sacrifice):**

|(A, B, C)  |Effect                         |
|:---------:|-------------------------------|
|(−2, 0, 0) |Drain enemy stats or life      |
|(−2, 0, −1)|Reanimate other card from Trash|
|(−2, 0, 0) |Convert debuffs into buffs     |
|(−3, 0, 0) |Steal effects                  |
|(−2, 0, −1)|Permanently weaken enemy cards |

> 🔵 Blue: Manipulates when, how, and whether actions affect other cards.

**Cause (what enables Blue control):**
- -1⭐ Having fewer allies on the field
- -1⭐ Acting alone
- -1⭐ Changing positions or states
- -1⭐ Avoiding direct interaction
- -1⭐ State change

**Effect (how Blue isolates and controls):**
|(A, B, C)    |Effect                               |
|:-----------:|-------------------------------------|
|(0, -2, 0)   |Move cards between fields            |
|(0, -1, 0)   |Return cards to hand or deck         |
|(0, -3, 0)   |Prevent cards from interacting       |
|(0, -2, 0)   |Change targets of effects            |
|(0, -2, -1)  |Delay or reorder resolution          |
|(0, -2, -1)  |Become untargetable or inaccessible  |

> 🟢 Green: Converts **_time_** into growth

**Cause (what Green accumulates):**
- -1xN⭐ Retaining cards in field for N turns
- -1⭐ Saving resources
- -1⭐ Accumulating turns
- -1⭐ Long-term survival

**Effect (how Green converts time into power):**
|(A, B, C)    |Effect                                            |
|:-----------:|--------------------------------------------------|
|(0, 0, -1)   |Search to cards on the deck                       |
|(0, 0, -2)   |Progressive stat growth                           |
|(0, 0, -2)   |Accelerated resource generation                   |
|(0, 0, -3)   |Increasing efficiency each turn                   |
|(0, 0, -3)   |Scaling effects over time                         |
|(0, 0, -1xN) |+N late-game strength                             |

> 🟡 Yellow: Preserves and equalizes **_resource_** states

**Cause (what enables Yellow effects):**
- -1⭐ Having intact cards
- -1⭐ Maintaining stable life total
- -1⭐ Having balanced board state
- -1⭐ Protecting allies over time
- -1⭐ Both players with the same number of cards
- -1⭐ Same or close life
- -1⭐ No cards destroyed this turn

**Effect (how Yellow enforces equilibrium):**
|(A, B, C)    |Effect                               |
|:-----------:|-------------------------------------|
|(−2, 0, 0)   |Shield and protection effects        |
|(−1xN, 0, 0) |Heal and restore N life              |
|(−2, 0, 0)   |Remove negative effects (cleanse)    |
|(−3, 0, 0)   |Prevent destruction or stat reduction|
|(−2, 0, 0)   |Apply global stabilizing effects     |
|(−2, 0, 0)   |Normalize stat differences           |
|(−2, 0, 0)   |Share damage taken with enemies      |
|(+1, 0, +1)  | Limit maximum damage                |

> 🟠 Orange: Effect that scales with the number of allies on the field.

**Cause (how allies enable orange effects):**
- -1xN⭐ N allies on the field
- -1⭐ Cards entering play near allies
- -1⭐ Shared traits or archetypes
- -1⭐ Coordinated sequencing of plays
- -1⭐ Maintaining group cohesion
- -1⭐ Trait synergy
- -1⭐ Being adjacent

**Effect (how orange builds community power):**
|(A, B, C)    |Effect                                            |
|:-----------:|--------------------------------------------------|
|(0, +2, 0)   |Buffs to multiple allies                          |
|(0, +2, 0)   |Share resources between allies                    |
|(0, +3, 0)   |Activate chain reactions across cards             |
|(0, +2, +1)  |Strengthen allies when new ones enter play        |
|(0, +2, 0)   |Distribute gains across the group                 |
|(0, +3, 0)   |Trigger effects when allies act                   |
|(0, +3, 0)   |Share damage taken with allies                    |

> 🔴 Red: Converts instability|risk into explosive power

**Cause (what did Red put at risk):**
- -1⭐ Adds explosion counters to your own cards.
- -1⭐ When your character has the lowest health
- -1⭐ Low life total
- -1⭐ Discarding cards in hand
- -1⭐ Acting immediately instead of waiting

**Effect (how Red converts risk into immediate impact):**
|(A, B, C)    |Effect                                            |
|:-----------:|--------------------------------------------------|
|(0, 0, +2)   |Run over                                          |
|(0, 0, +2)   |Low cost cards                                    |
|(0, 0, +2)   |Direct damage to enemies                          |
|(0, 0, +2)   |Destroy enemy cards                               |
|(0, 0, +3)   |Attack multiple targets                           |
|(0, 0, +2)   |Force combat interactions(attacking or defending) |
|(0, 0, +1)   |Gain temporary power spikes                       |

### 1.3. How each archetype relates

    Green naturally accumulates high ATK, it's the archetype that grows the most over time, so it dominates long rounds. Red tries to end rounds early with immediate pressure before Green scales up. Orange increases the collective ATK of allies. Blue manipulates the stack to remove or reposition opponent's cards before the final calculation. Violet drains opponent's ATK or converts enemy cards. Yellow protects its cards from being removed before the calculation.

## 2. Deck Construction
- Deck of 40 at 60 cards (there will be a rarity limit where the entire deck cannot exceed X stars in rarity)
- Limit of four copies per card
- Maximum of 2 archetypes per deck

## 3. Card construction
The archetype and power of the card will be defined after its creation. The archetype is based on your personality and purpose, while the power is based on its weight in combat and potential impact.
The rarity may change depending on the final power defined.

Each card generates a cause-and-effect vector.
Each cause and each effect has a positive or negative weight on three structural axes (Resource morality, Social structure and Time horizon).
The final vector sum determines:
- Color (dominant archetype)
- The number of stars (absolute total impact)

<p align="center"><img src="https://github.com/gadelhati/cardgame-front/blob/main/src/assets/cardVector.png" width="250"/></p>

### Rarity Definition
Card creation is the game's customization point, where each player assembles their own card, and at the end of the creation process, receives a color and rarity according to its attributes and effects.

|Valor líquido  |Estrelas        |Raridade |
|---------------|----------------|----------|
|1 ou menos     |⭐              |Common    |
|2              |⭐⭐           |Uncommon  |
|3              |⭐⭐⭐         |Rare      |
|4              |⭐⭐⭐⭐      |Epic      |
|5              |⭐⭐⭐⭐⭐    |Legendary |

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
- The player who reaches a total score of 10 stars does not play again in that round.
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
- [ ] Aquisição e retenção de usuários
- [ ] Loop de engajamento pós-lançamento