
function InputField({value, onClick, onChange}){

    //const [userInput, setUserInput] = useState('');

    return(
        <>
                    <label htmlFor="binary-input">Input Binary:
                        <input type="text" id='binary-input' value={value} onChange={onChange} />
                    </label>
                <button onClick={onClick}>Calculate</button>
        </>
    )
}

export default InputField;