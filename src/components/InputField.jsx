
function InputField({value, onClick, onChange, onKeyDown}){

    //const [userInput, setUserInput] = useState('');

    return(
        <>
                    <label htmlFor="binary-input">Input Binary:
                        <input type="text" className="binary-input" id='binary-input' value={value} onChange={onChange} onKeyDown={onKeyDown} />
                    </label>
                <button onClick={onClick}>Calculate</button>
        </>
    )
}

export default InputField;