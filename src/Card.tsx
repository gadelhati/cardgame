import './Card.css'
import imageFront from './assets/cardFront.png'
import imageBack from './assets/cardBack.png'
import type { JSX } from 'react'

export interface CardProps {
    id: string
    name: string
    cost?: number
    atk?: number
    def?: number
}

export const Card: React.FC<CardProps> = ({ id, name, cost, atk, def }: CardProps): JSX.Element => {
    const dragstart = (e: React.DragEvent<HTMLDivElement>): void => {
		const target = e.currentTarget as HTMLDivElement
		e.dataTransfer.setData('card-id', target.id)
	}
    return (
        <div id={id} className='card' draggable={true} onDragStart={dragstart}>
            <article className='front'>
                <img src={imageFront} alt='Card front image' />
                <header>
                    <div>{name}</div>
                    <div>{cost}</div>
                </header>
                <div className='text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est q...</div>
                <footer>
                    <div>{atk}</div>
                    <div>{def}</div>
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