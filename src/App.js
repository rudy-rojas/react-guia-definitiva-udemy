import logo from './logo.svg';
import './App.css';

const Li = ({ age, children, lastName }) => {
  return (
    // <li value={props.age}> Valor de li {props.children} | Last Name = {props.lastName}</li>
    <li value={age}> Valor de li {children} | Last Name = {lastName}</li>

  )
}

function App() {
  return (
    <ol>
      <Li
        age={3}
        status={true}
        lastName={'Rojas'}
      >This is a item</Li>
      <Li age={1}>
        This a second item
      </Li>
    </ol>
  );
}

export default App;
