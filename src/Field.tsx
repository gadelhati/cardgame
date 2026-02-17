import { useState } from 'react'
import './Field.css'
import { Card } from './Card'

export const Field = () => {
    const [state, setState] = useState<string[]>([])
    const dragover = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const dragdrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card-id')
        e.currentTarget.appendChild(document.getElementById(card_id) as HTMLDivElement)
        setState(prevState => [...prevState, card_id])
    }
    return (
        <div id={'field-1'} className="field" onDragOver={dragover} onDrop={dragdrop}>
            {state.map(id => <Card key={id} />)}
            {/* <div style={{position: 'absolute'}}><Card /></div>
            <div><Card /></div>
            <div><Card /></div> */}
        </div>
    )
}