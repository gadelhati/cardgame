import './Field.css'
import { Card } from './Card'

interface FieldProps {
    id: string
    cards: string[]
    onCardDrop: (cardId: string, toFieldId: string) => void
}

export const Field = ({ id, cards, onCardDrop }: FieldProps) => {
    const dragover = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const dragdrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card-id')
        onCardDrop(card_id, id)
    }
    return (
        <div id={id} className="field" onDragOver={dragover} onDrop={dragdrop}>
            {cards.length === 0 && <div className='placeholder'><div>{cards.length}</div></div>}
            {cards.map(cardId => <Card key={cardId} id={cardId} />)}
            <div>{cards.length}</div>
            {/* <div style={{position: 'absolute'}}><Card /></div>
            <div><Card /></div>
            <div><Card /></div> */}
        </div>
    )
}