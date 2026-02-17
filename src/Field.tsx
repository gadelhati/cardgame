import './Field.css'

export const Field = () => {
    const dragover = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const dragdrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card-id')
        e.currentTarget.appendChild(document.getElementById(card_id) as HTMLDivElement)
    }
    return (
        <div id={'field-1'} className="field" onDragOver={dragover} onDrop={dragdrop}>
            {/* <div style={{position: 'absolute'}}><Card /></div>
            <div><Card /></div>
            <div><Card /></div> */}
        </div>
    )
}