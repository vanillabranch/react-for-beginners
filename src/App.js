import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => {
        setKeyword(event.target.value);
    }

    //1회만 실행, 감지를 지정해 주지 않았으니,
    useEffect(() => {
        console.log("I run only once.");
    }, []);

    //keyword를 감지하도록 지정
    useEffect(()=> {
        console.log("I run when 'keyword' changes.");

    },[keyword]);

    //counter 변경 감지
    useEffect(()=> {
        console.log("I run when 'counter' changes.");

    },[counter]);

    //2개를 동시에 지정할 수도 있음.
    useEffect(()=>{
        console.log("I run when 'keyword' and 'counter' changes.");
    },[keyword,counter]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here"
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
