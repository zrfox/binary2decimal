
function InputField({value, onClick, onChange}){

    //const [userInput, setUserInput] = useState('');

    return(
        <div>
                <fieldset>
                    <label htmlFor="binary-input">Input Binary:
                        <input type="text" id='binary-input' value={value} onChange={onChange} />
                    </label>
                </fieldset>
                <button onClick={onClick}>Calculate</button>
        </div>
    )
}

export default InputField;