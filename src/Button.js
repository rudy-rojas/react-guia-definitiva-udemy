import './button.css';
const Button = (props) => {
    console.log(props);
    return (
        // <button onClick={props.onClick} className="btn">nameButton={props.children}</button>
        <button {...props} className="btn"/>
    );
}

export default Button;