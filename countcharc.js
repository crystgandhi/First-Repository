function countchar(string) {
    var l = string.length
    let count = 0;
    for (let i = 0; i < l; i++ ) {
        if (string[i] = !'') {
            count = count + 1
        }
    }
    return count

}

console.log(countchar("Nikilkumaran"))




