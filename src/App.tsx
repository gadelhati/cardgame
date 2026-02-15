import { useState } from 'react'
import './App.css'
import { Campo } from './Campo'
import { Card } from './Card'

function App() {
	const [state, setState] = useState([Card])
	return (
		<main>	
			<Campo />
			<center>
				123
			</center>
			<Campo />
		</main>
	)
}

export default App
