import React from "react";
import { useState, useEffect } from "react";
const Converter = () => {
    const [number, setNumber] = useState("");
    const [disable, setDisable] = useState(true);
    const [text, setText] = useState("Invert");
    const change = (event) => {
        console.log(event.target.value);
        setNumber(event.target.value);
    };
    const reset = () => {
        setNumber("");
    };
    const invert = () => {
        setDisable(!disable);
        reset();
    };


    useEffect(() => {
        if (disable) setText("Invert");
        else setText("Turn Back");
    }, [disable]);

    return (
        <>
            <div>
                <h1>Time Converter</h1>
                <label>Minutes</label>
                <input type="number" placeholder="Minutes" onChange={change} value={disable ? number : Math.floor(number * 60)} disabled={!disable} />
            </div>

            <div>
                <label>Hours</label>
                <input type="number" placeholder="Hours" onChange={change} disabled={disable} value={disable ? Math.floor(number / 60) : number} />
            </div>

            <Btn click={reset} message="Reset" backgroundColor="tomato" />
            <Btn click={invert} message={text} backgroundColor="skyblue" />
        </>
    );
};
const Btn = ({click, message, backgroundColor}) => {
    return (
        <button style={{ backgroundColor, color: "white", padding: "10px 20px", border: "none", borderRadius: "10px" }}
        onClick={click}>{message}</button>);
}
export default Converter;   