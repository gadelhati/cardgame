import { useState, type JSX } from 'react'
import './App.css'
import { type CardProps } from './Card'
import { Field } from './Field'

const initialCard: CardProps = {
	id: '001',
	name: 'Title',
	cost: 3,
	atk: 2,
	def: 1
}

export const App = (): JSX.Element => {
	const [fields, setFields] = useState<Record<string, CardProps[]>>({
		'player-1': [initialCard],
		'field-1': [],
		'field-2': [],
		'player-2': []
	})
	const moveCard = (cardId: string, toFieldId: string): void => {
		setFields(prev => {
            const updated = { ...prev }
			let card: CardProps | undefined
            // Remove the card from all fields
            for (const key in updated) {
                const found = updated[key].find(c => c.id === cardId)
				if (found) { card = found }
				updated[key] = updated[key].filter(c => c.id !== cardId)
            }
            // Add to destination field
			if (card) {
            	updated[toFieldId] = [...updated[toFieldId], card]
			}
            return updated
        })
	}
	return (
		<main>
			<Field id="player-1" cards={fields['player-1']} onCardDrop={moveCard} />
            <center>
                <Field id="field-1" cards={fields['field-1']} onCardDrop={moveCard} />
                <Field id="field-2" cards={fields['field-2']} onCardDrop={moveCard} />
            </center>
            <Field id="player-2" cards={fields['player-2']} onCardDrop={moveCard} />
		</main>
	)
}
