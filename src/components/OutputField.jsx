
function OutputField({data}) {
    return(
        <div>
            <label htmlFor="output-id">Decimal Value: </label>
            <output id="output-id">{data}</output>
        </div>
    )
}

export default OutputField;