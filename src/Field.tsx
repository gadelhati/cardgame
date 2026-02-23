import './Field.css'
import { Card, type CardProps } from './Card'
import type { JSX } from 'react'

interface FieldProps {
    id: string
    cards: CardProps[]
    onCardDrop: (_cardId: string, _toFieldId: string) => void
}

export const Field = ({ id, cards, onCardDrop }: FieldProps): JSX.Element => {
    const dragover = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
    }
    const dragdrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card-id')
        if (card_id) {
            onCardDrop(card_id, id)
        }
    }
    return (
        <div id={id} className="field" onDragOver={dragover} onDrop={dragdrop}>
            {cards.map(card => <Card key={card.id} id={card.id} name={card.name} cost={card.cost} atk={card.atk} def={card.def} />)}
            <div>{cards.length}</div>
            {/* <div style={{position: 'absolute'}}><Card /></div>
            <div><Card /></div> */}
        </div>
    )
}