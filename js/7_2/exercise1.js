const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  lesson2.turno = 'manhã'

  function keys (object) {
      const keys = Object.keys(object);
      console.log(keys)
  }

  function objSize (object) {
      console.log(Object.entries(object).length);
  }

  function values (object) {
      const values = Object.values(object);
      console.log(values)
  }

  const allLessons = {}
  Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});


const alunos = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

function getValueByNumber (object, number) {
    console.log(Object.values(object)[number]);
}

function verifyPair (object, key, value) {
    let boolean = object.hasOwnProperty(key) && object[key] == value;
    console.log(boolean);
}

function mathStudents (obj) {
    let sum = 0;
    const lessons = Object.keys(obj);
    for (lesson in lessons) {
        if(obj[lessons[lesson]].materia === 'Matemática') {
            sum += obj[lessons[lesson]].numeroEstudantes;
        }
    }
    return sum;
}
