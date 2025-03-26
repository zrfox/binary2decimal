
function OutputField({data}) {
    return(
        <>
            <div className="output-screen">    
                <label htmlFor="output-id">Decimal:</label>
                <output id="output-id">{data}</output>
            </div>
        </>
    )
}

export default OutputField;