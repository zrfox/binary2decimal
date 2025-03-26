import { useState } from "react";
import InputField from "./InputField";
import OutputField from "./OutputField"
import binaryToDecimal from "../utils/binaryToDecimal";
import '../App.css'

function Interface(){ //are these right? or should they be the other names?
    const [data, setData] = useState(null);
    const [input, setInput] = useState("");
    const [showError, setShowError] = useState(false);

    const handleButtonClick = () => {
        const result = binaryToDecimal(input);
        setData(result);
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (/^[01]*$/.test(value)){
            setInput(event.target.value);
            setShowError(false);
        }
        else {
            //const inputField = document.getElementById('binary-input');
          //  const errorDiv = document.createElement('div');
           /// errorDiv.classList.add('error-popup');
            ///errorDiv.textContent = 'Binary digits only';
           // document.querySelector('.binary-input').appendChild(errorDiv);
           setShowError(true);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    }


    return (
        <div className="modal">
            <OutputField data={data}></OutputField>
            <InputField value={input} onKeyDown={handleKeyDown} onClick={handleButtonClick} onChange={handleInputChange} ></InputField>
            {showError && (
                    <div className="error-popup">Binary digits only</div>
                )}
        </div>
    )
}

export default Interface;