import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import { Field } from './Field'

function App() {
	const [fields, setFields] = useState<Record<string, string[]>>({
		'field-1': [],
		'field-2': [],
		'field-3': [],
		'field-4': []
	})
	const moveCard = (cardId: string, toFieldId: string) => {
		
		setFields(prev => {
            const updated = { ...prev }
            // Remove the card from all fields
            for (const key in updated) {
                updated[key] = updated[key].filter(id => id !== cardId)
            }
            // Add to destination field
            updated[toFieldId] = [...updated[toFieldId], cardId]
            return updated
        })
	}
	return (
		<main>
			<Card />
			<Field id="field-1" cards={fields['field-1']} onCardDrop={moveCard} />
            <center>
                <Field id="field-2" cards={fields['field-2']} onCardDrop={moveCard} />
                <Field id="field-3" cards={fields['field-3']} onCardDrop={moveCard} />
            </center>
            <Field id="field-4" cards={fields['field-4']} onCardDrop={moveCard} />
		</main>
	)
}

export default App
