import './main.css';
import Button from './Button';

const arr = [
    'chanchito feliz',
    'chanchito triste',
    'chanchito emocionado'
];

function App(){

    const myVariable = false;
    if(myVariable) {
        return (
            <p>My variable is TRUE</p>
        ); 
    }
   return(
    <div>
        <h1>Hello World</h1>
        {arr.map(el => <p key={el}>{el}</p> )}
        <Button onClick={() => console.log('clicked...')} >Save</Button>
        <Button onClick={() => console.log('click cancel')} >Cancel</Button>
    </div>
   ) 
}

export default App;