const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return null
    };
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true 
    }
    let lettersArray = [];
    for (let i = 0; i < letters[0].length; i++) {
        lettersArray.push([]);
        for (let x = 0;  x < letters.length; x++) {
            lettersArray[i].push(letters[x][i]);
        };
    for (array of lettersArray) {
        const variableJoin = array.join("");
        console.log(variableJoin)
        if (variableJoin.includes(word)) return true
        };
    };
    //console.log(lettersArray);
    return false
} 

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'LARRY')

  
module.exports = wordSearch