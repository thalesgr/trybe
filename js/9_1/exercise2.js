const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

function sendMarsTemperature () {
    const temperature = getMarsTemperature();
    setTimeout(() => console.log(`Mars Temperature is ${temperature} degrees Celsius`), messageDelay())
}

sendMarsTemperature()