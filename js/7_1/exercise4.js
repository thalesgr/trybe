const replace = string => {
    let array = string.split(' ')
    for (let i in array) {
        if (array[i] === 'x') {
            array[i] = 'Thales'
        }
    }
    let final = array.join(' ');
    return final
}

const skills = ['javascript', 'html', 'css'];

const func2 = string => {
    const newArray = skills.sort();
    return `${string}
    ${newArray}
    `
}

console.log(func2(replace('x é Tryber')))