const singed = (pwdCharacters, pwdLength) => {
    let pwd = "";
    for (let i=0; i<pwdLength; i++){
        let pickRandomCharacters = Math.floor(Math.random() * pwdCharacters.length);
        pwd += pwdCharacters.charAt(pickRandomCharacters);
    }
    return pwd;
};

const generatePwd = ()=>{
    let pwdLength = parseInt(passwordLength.value);
    let pwdCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (checkNumbers.checked) pwdCharacters += numbers;
    if (checkSymbols.checked) pwdCharacters += symbols;

    generatedPassword.innerText = singed(pwdCharacters, pwdLength);
};

window.addEventListener("DOMContentLoaded", ()=>{
    GeneratePwdButton.addEventListener("click", ()=>{
        pwd = "";
        generatePwd();
    })
});