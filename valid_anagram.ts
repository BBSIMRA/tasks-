function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const first = s.split("").sort().join("");
    const second = t.split("").sort().join("");

    return first === second ;
    
};
console.log(isAnagram("car","rat"));