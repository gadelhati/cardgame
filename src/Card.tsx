import './Card.css'
import imageFront from './assets/cardFront.png'
import imageBack from './assets/cardBack.png'

export interface CardProps {
    id: string
    name: string
    cost?: number
    atk?: number
    def?: number
}

export const Card: React.FC<CardProps> = (cardProps: CardProps) => {
    const dragstart = (e: React.DragEvent<HTMLDivElement>) => {
		const target = e.currentTarget as HTMLDivElement
		e.dataTransfer.setData('card-id', target.id)
	}
    return (
        <div id={cardProps.id} className='card' draggable={true} onDragStart={dragstart}>
            <article className='front'>
                <img src={imageFront} alt='Card front image' />
                <header>
                    <div>{cardProps.name}</div>
                    <div>{cardProps.name}</div>
                    <div>{cardProps.cost}</div>
                </header>
                <div className='text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est q...</div>
                <footer>
                    <div>{cardProps.atk}</div>
                    <div>{cardProps.def}</div>
                </footer>
            </article>
            <article className='back'>
                <center>
                    <img src={imageBack} alt='Card back image' />
                </center>
            </article>
        </div>
    )
}