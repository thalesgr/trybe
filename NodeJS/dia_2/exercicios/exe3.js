const { readFile } = require('fs')
const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const read = async() => {
    rl.question('Qual arquivo deseja ler: ', async (res) => {
    await fs.readFile(res, (err, data) => {
        if (err) return console.log(err)
        console.log(`lido arquivo com ${data.byteLength} bytes`)
    })
    })
}

read();
