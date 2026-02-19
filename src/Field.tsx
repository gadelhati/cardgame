import './Field.css'
import { Card, type CardProps } from './Card'

interface FieldProps {
    id: string
    cards: CardProps[]
    onCardDrop: (cardId: string, toFieldId: string) => void
}

export const Field = (fieldProps: FieldProps) => {
    const dragover = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const dragdrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card-id')
        if (card_id) {
            fieldProps.onCardDrop(card_id, fieldProps.id)
        }
    }
    return (
        <div id={fieldProps.id} className="field" onDragOver={dragover} onDrop={dragdrop}>
            {fieldProps.cards.map(card => <Card key={card.id} id={card.id} name={card.name} cost={card.cost} atk={card.atk} def={card.def} />)}
            <div>{fieldProps.cards.length}</div>
            {/* <div style={{position: 'absolute'}}><Card /></div>
            <div><Card /></div> */}
        </div>
    )
}