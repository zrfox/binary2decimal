

function binaryToDecimal(string){
    let strLength = string.length - 1;
    let result = 0;
    let i = 0;
    for (strLength; strLength > - 1; strLength--) {
        if (string[strLength] === '1'){
            result += 2 ** i;
        }
    i++;
    }
    return result;
}

export default binaryToDecimal;