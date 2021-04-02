let idCounter = 1;
let palindromeObjectArr = [];
const palindromeTabelCont = document.querySelector("#palindromeTabelCont");
const addBtn = document.querySelector("#addBtn");
const palindromInp = document.querySelector("#palindromInp");
class palindrome{
    constructor(id, word, result){
        this.id = id;
        this.word = word;
        this.result = result;
        idCounter += 1;
    }
}
const testValues = ["anna", "Anna", "anna ", "YellowSubmarine" ]
addTestCases(testValues);
addDataToTheFront(palindromeObjectArr);
addBtn.addEventListener('click', () => {
    const newWord = palindromInp.value;
    addNewWord(newWord);
    addDataToTheFront(palindromeObjectArr);
})
function isPalindrome (word) {
    word = word.toLowerCase().replace(/\s/g,"");
	const lenOfTheWord = word.length;
    for(let i = 0; i < Math.floor(lenOfTheWord / 2); i++){
        if(word[i] !== word[lenOfTheWord - i - 1]){
            return false;
        }
        return true;
    }
}

function addTestCases(arr){
    arr.forEach(element => {
        palindromeObjectArr.push(new palindrome(idCounter, element, isPalindrome(element)))
    });
}
function addNewWord(word){
    let newPalindrome = new palindrome(idCounter, word, isPalindrome(word));
    palindromeObjectArr.push(newPalindrome);
}
function colorTheElement(element){
    element.style.color = "#ecf0f1";
    if((element.innerText) === "true"){
        element.style.backgroundColor = "#2ecc71";
    }
    if((element.innerText) === "false"){
        element.style.backgroundColor = "#e74c3c";
    }
}
function addDeletOption(element){
element.addEventListener('click', () => {
    const selectedElement = document.getElementById(element.id);
    palindromeTabelCont.removeChild(selectedElement);
})
}
function addDataToTheFront(arr){
    arr.forEach(element => {
        const newTr = document.createElement("tr");
        newTr.id = idCounter;
        const newDelBtn = document.createElement("button");
        newDelBtn.classList.add("delBtn");
        newDelBtn.innerHTML = "&#10060;";
        newDelBtn.id = idCounter;
        addDeletOption(newDelBtn);
        for(let i = 0; i < 4; i++){
            const newTd = document.createElement("td");
            if(i === 0){
                newTd.innerText = element.id;
            }
            if(i === 1){
                newTd.innerText = element.word;
            }
            if(i === 2){
                newTd.innerText = element.result;
                colorTheElement(newTd);
            }
            if(i === 3){
                newTd.appendChild(newDelBtn);
            }
            newTr.appendChild(newTd)
        }
        palindromeTabelCont.appendChild(newTr);
    });
    palindromeObjectArr = [];

}
