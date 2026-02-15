import './Card.css'
import image from './assets/knight.png'

export const Card = () => {
    return (
        <article className='card'>
            <header>
                <div>Type</div>
                <div>Title</div>
                <div>Cost</div>
            </header>
            <img src={image} alt='Card image' />
            <div className='text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est q...</div>
            <footer>
                <div>ATK</div>
                <div>DEF</div>
            </footer>
        </article>
    )
}