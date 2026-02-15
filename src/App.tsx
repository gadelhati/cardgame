import { useState } from 'react'
import './App.css'
import { Bar } from './Bar'
import { Card } from './Card'

function App() {
	const [state, setState] = useState([Card])
	return (
		<main>	
			<Bar />
			<center>
				123
			</center>
			<Bar />
		</main>
	)
}

export default App
