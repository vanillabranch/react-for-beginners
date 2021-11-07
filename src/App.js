import {useState, useEffect} from "react";

/*
* useEffect를 활용하는 방법과, 생성, 소멸시 리턴 받는 법 등.
* 별도의 함수를 만들어서 할당해주는 방법도 있다. hiFn처럼
* 하지만 보통은 useEffect에 주로 작성한다. hiFn, byFn처럼 여러가지를 만들진 않는다.
* */
function Hello(){
    /*const byFn = ()=>{
        console.log("bye :(");
    }
    const hiFn= ()=>{
        console.log("created :)");
        return byFn; //clean up function 으로 주로 사용하진 않음.
    }*/

    //arrow function 방식과
    useEffect(()=>{
        console.log("hi :)");
        return ()=>{
            console.log("bye :(");
        }
    },[]);

    //기존 정의방식 : 길어...
    /*useEffect(function(){
        console.log("hi :)");
        return function(){
            console.log("bye :(");
        }
    },[]);
*/

    return <h1>Hello</h1>
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => {
        setShowing((prev) => !prev);
    }
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}> {showing ? "Hide": "Show"}</button>
        </div>
    );
}

export default App;
