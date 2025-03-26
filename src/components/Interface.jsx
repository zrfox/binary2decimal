import { useState } from "react";
import InputField from "./InputField";
import OutputField from "./OutputField"
import binaryToDecimal from "../utils/binaryToDecimal";
import '../App.css'

function Interface(){ //are these right? or should they be the other names?
    const [data, setData] = useState(null);
    const [input, setInput] = useState("");


    const handleButtonClick = () => {
        const result = binaryToDecimal(input);
        setData(result);
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }


    return (
        <div className="modal">
            <OutputField data={data}></OutputField>
            <InputField value={input} onClick={handleButtonClick} onChange={handleInputChange} ></InputField>
        </div>
    )
}

export default Interface;