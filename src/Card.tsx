import './Card.css'
import imageFront from './assets/cardFront.png'
import imageBack from './assets/cardBack.png'

export const Card = () => {
    const dragstart = (e: React.DragEvent<HTMLDivElement>) => {
		const target = e.currentTarget as HTMLDivElement
		e.dataTransfer.setData('card-id', target.id)
	}
    return (
        <div id={'card-id'} className='card' draggable={true} onDragStart={dragstart}>
            <article className='front'>
                <img src={imageFront} alt='Card front image' />
                <header>
                    <div>Type</div>
                    <div>Title</div>
                    <div>Cost</div>
                </header>
                <div className='text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est q...</div>
                <footer>
                    <div>ATK</div>
                    <div>DEF</div>
                </footer>
            </article>
            <article className='back'>
                {/* <center> */}
                    <img src={imageBack} alt='Card back image' />
                {/* </center> */}
            </article>
        </div>
    )
}