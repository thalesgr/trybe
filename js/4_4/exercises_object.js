let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

// #1
console.log(`Bem vinda, ${info.personagem}`);

// #2
info["recorrente"] = 'sim';
console.log(info);

// #3
for (key in info) {
    console.log(key)
};

// #4
for(key in info) {
    console.log(info[key])
};

// #5
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
};

