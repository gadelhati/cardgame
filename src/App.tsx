import { useState } from 'react'
import './App.css'
import { Field } from './Field'
import { Card } from './Card'

function App() {
	const [state, setState] = useState([Card])
	return (
		<main>	
			<Field />
			<center>
				<Field />
				<Field />
			</center>
			<Field />
		</main>
	)
}

export default App
