const ClickMe = (props) => {

    function clickAction(){
        console.log('Hello World');
    }

    return <button onClick={clickAction}>Click Me</button>
}

export default ClickMe;