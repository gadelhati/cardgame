import './Field.css'
import { Card } from './Card'

export const Field = () => {
    return (
        <nav className="field">
            <div style={{position: 'absolute'}}><Card /></div>
            <div><Card /></div>
            <div><Card /></div>
        </nav>
    )
}