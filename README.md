# 🃏 _Card Game_

<img src="https://github.com/gadelhati/cardgame-front/blob/main/src/assets/card-vector.png" style="display: block; margin: 0 auto; width: 350px;" />

## 1. Card Interaction & Turn System

### 1.1. Card Movement
- Each player drags one card at a time
- A card can be dragged from a **source field** to a **destination field**.
    - source fields: [ _Deck_ | _Hand_ | _Desk_ | _Trash_ ]
    - destination fields: [ _Deck_ | _Hand_ | _Desk_ | _Trash_ | or directly onto another card]

### 1.2. Skill Activation Timing
Card skills may trigger at different interaction moments: [ _On Drag_ | _On Drop_ | _Field-Specific Activation_ ]

    Certain skills only activate if the card is dropped into a specific field (e.g., Desk only).

### 1.3. Effect Structure
If a card has an effect, the effect must explicitly define: [ _Origin_ | *_Destination_ | _Consequence_ ]
- _Origin_: The target of the effect (field, player, or specific card)
- *_Destination_: caso seja um efeito de movimento
- _Consequence_: The mechanical outcome applied (damage, buff, move, discard, etc.), including duration if applicable.

### 1.4. Flow
- A turn consists of dragging and dropping a single card.
- The turn automatically ends when the card is successfully dropped onto a valid destination.

## 2. Card construction
The archetype and power of the card will be defined after its creation. The archetype is based on your personality and purpose, while the power is based on its weight in combat and potential impact.
The rarity may change depending on the final power defined.

### 2.1. Border
    The card features a clean outer border (padding) colored according to its archetype.
    
- Archetype Color (e.g., blue, green, etc.): The archetype's color changes during card creation and becomes fixed once published. After, it may be adjusted in response to balance updates (buffs or nerfs)
    - The card may have up to two archetypes, and the border should visually represent both (e.g., gradient on each side).

### 2.2. Top Section
- Top-left: Resource cost, visually coded with the color associated with the card’s rarity tier.
    - The cost is the primary balancing parameter and may be adjusted through buffs or nerfs..
- Top-center: The number of stars that represent its power.
- Top-right: Combat statistics displayed as number representing the attack and number representing the defender (separated by slash /)

### 2.3. Artwork Layout
    The illustration occupies the entire card background and uses a four-layer parallax composition:
- Title Layer: The card title positioned at the bottom of the artwork, expressive lettering integrated into the scene.
- Foreground: Character in a dynamic action pose.
- Midground: Environmental scenery elements.
- Background: Sky, distant atmospheric elements, or large-scale environmental elements.

### 2.4. Text Area (Lower Half)
    A translucent rectangular panel overlays the lower portion of the card, ensuring readability while preserving visual depth
- Card effect (if exists), on the same line:
    - left: cause(effect cost)
    - center: effect name
    - right: consequence.
        - duration
- Default effect description in parentheses (if exists)
- Lore text, displayed in italic style

### 2.5. Card Classification
- Type: Character. (Currently, all cards are character cards)
- Trait: [Trait name](It may or may not have synergy with another card)

### 2.6. Footer Information:
- Illustrator information: Illustrator's name centered
- Bottom-left: on the same line
    - enterprise information: Forgepack™
    - rights information: © 2026 Forgepack S.A. All rights reserved.
- Bottom-right: collection reference: Card number / Total cards in collection