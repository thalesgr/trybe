const longestWord = string => {
    let array = string.split(' ')
    let maxLength = 0
    let final = ''

    for (const word of array) {
        if (word.length > maxLength) {
            maxLength = word.length
            final = word
        }
    }

    return final
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))