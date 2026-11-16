function isPalindrome(str:string): boolean{
    let cleaned = str.toLowerCase().replaceAll(" ","")
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log(isPalindrome("Madam"))
