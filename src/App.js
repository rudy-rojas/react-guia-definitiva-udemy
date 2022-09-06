import './main.css';
import Button from './Button';

function App(){
   return(
    <div>
        <h1>Hello World</h1>
        <Button onClick={() => console.log('clicked...')} >Save</Button>
    </div>
   ) 
}

export default App;