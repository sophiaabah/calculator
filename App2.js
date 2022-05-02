import React, {useState} from 'react';

function App() {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([]);

	const myArr = [];

		function display(x) {
			setValue(value += x);
		}

		function calculate() { 
		 var p = value;
		 var q = eval(p);
		 setValue(q);
		 //setItems([p]);
		 myArr.push(p);
		 myArr.reverse();
		 console.log(myArr)

		}

		function history() {
		 for (var i = 0; i < myArr.length; i++){
		  setValue(myArr[i]);
		  console.log(myArr[i]);
		   }
		}
		function clearScreen() {
			setValue('');
			myArr.length = 0;
		   }

	return(
		<table>
			<tr>
				<td col span = '4'> <input type='text' onChange={e => setValue(e.target.value)}></input> </td>
			</tr>
			<tr>
				<td> <input type='button' value='+' onClick={() => display('+')}></input> </td>
				<td> <input type='button' value='-' onClick={() => display('-')}></input> </td>
				<td> <input type='button' value='&times'onClick={() => display('*')} ></input> </td>
				<td> <input type='button' value='&divide' onClick={() => display('/')}></input> </td>
			</tr>
			<tr>
				<td> <input type='button' value='9' onClick={() => display('9')}></input> </td>
				<td> <input type='button' value='8' onClick={() => display('8')}></input> </td>
				<td> <input type='button' value='7' onClick={() => display('7')}></input> </td>
				<td> <input type='button' value='M' onClick={history}></input> </td>
			</tr>
			<tr>
				<td> <input type='button' value='6' onClick={() => display('6')}></input> </td>
				<td> <input type='button' value='5' onClick={() => display('5')}></input> </td>
				<td> <input type='button' value='4' onClick={() => display('4')}></input> </td>
				<td> <input type='button' value='C' onClick={() => setValue(value.substring(0, value.length - 1))}></input> </td>
			</tr>
			<tr>
				<td> <input type='button' value='3' onClick={() => display('3')}></input> </td>
				<td> <input type='button' value='2' onClick={() => display('2')}></input> </td>
				<td> <input type='button' value='1' onClick={() => display('1')}></input> </td>
				<td> <input type='button' value='0' onClick={() => display('0')}></input> </td>
			</tr>
			<tr>
				<td> <input type='button' value='.' onClick={() => display('.')}></input> </td>
				<td> <input type='button' value='CE' onClick={}></input> </td>
				<td col span = '2'> <input type='button' value='=' onClick={calculate}></input> </td>
			</tr>
		</table>
		)

}

export default App;