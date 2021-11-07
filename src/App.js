import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("i run all the time");

    //react memo 기능의 경우, 변화되지않았다면 바뀌지않도록 기억해주는 장치였다면
    //useEffect의 경우는 한번만 호출할수 있도록 해주는 장치.
    //내가 생각했던 memo와는 완전히 다름...착각했었음.
    useEffect(()=>{
        console.log("CALL THE API");
    },[]);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
