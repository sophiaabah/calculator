import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([]);

	function display(x) {
		setValue(value + x);
	}

	function calculate() {
		let equation = value;
		let q = eval(equation);

		setValue(q);
		setItems(items.concat( equation ));
	}

	function history() {
		if (items.length) {
			setValue(items[0]);
			console.log(items[0]);
		}
	}

	function clearScreen() {
		setValue('');
		setItems([]);
	}

	return (
		<div className='container'>
			<input className='output' type='text' value={value} />
			<div className='press'>
				<button className='btn row1 col1' onClick={() => display('+')}>
					+
				</button>
				<button className='btn row1 col2' onClick={() => display('-')}>
					-
				</button>
				<button className='btn row1 col3' onClick={() => display('*')}>
					*
				</button>
				<button className='btn row1 col4' onClick={() => display('/')}>
					/
				</button>
				<button className='btn row2 col1' onClick={() => display('9')}>
					9
				</button>
				<button className='btn row2 col2' onClick={() => display('8')}>
					8
				</button>
				<button className='btn row2 col3' onClick={() => display('7')}>
					7
				</button>
				<button className='btn row2 col4' onClick={history}>
					M
				</button>
				<button className='btn row3 col1' onClick={() => display('6')}>
					6
				</button>
				<button className='btn row3 col2' onClick={() => display('5')}>
					5
				</button>
				<button className='btn row3 col3' onClick={() => display('4')}>
					4
				</button>
				<button className='btn row3 col4' onClick={() => setValue(value.substring(0, value.length - 1))}>
					C
				</button>
				<button className='btn row4 col1' onClick={() => display('3')}>
					3
				</button>
				<button className='btn row4 col2' onClick={() => display('2')}>
					2
				</button>
				<button className='btn row4 col3' onClick={() => display('1')}>
					1
				</button>
				<button className='btn row4 col4' onClick={() => display('0')}>
					0
				</button>
				<button className='btn row5 col1' onClick={() => display('.')}>
					.
				</button>
				<button className='btn row5 col2' onClick={clearScreen}>
					CE
				</button>
				<button className='btn equal' onClick={calculate}>
					=
				</button>
			</div>
		</div>
	)

}

export default App;