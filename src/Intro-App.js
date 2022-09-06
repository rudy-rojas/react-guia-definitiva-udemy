// import logo from './logo.svg';
// import './App.css';
import './main.css';

const style01 = {
  backgroundColor: 'orange',
  padding: '30px 20px'
}

const style02 =() =>({
    boxShadow: '0px 3px 5px red'
})

const Li = ({ age, children, lastName }) => {
  return (
    // <li value={props.age}> Valor de li {props.children} | Last Name = {props.lastName}</li>
    // <li value={age} style={{...style01, ...style02()}}> Valor de li {children} | Last Name = {lastName}</li>
    <li className="clase-li" value={age}>{children} | LastName={lastName}</li>
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
