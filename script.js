const result = document.querySelector(".result");
const degree = document.getElementById("degree");
const type = document.getElementById("type-select");
const button = document.getElementById("convert-btn");



var opposite = 'Celsius';
button.addEventListener("click", (event) => {
  event.preventDefault();

  const degreeValue = degree.value;
  const typeValue = type.value;


  if (!degreeValue || !typeValue) {
    alert('Please enter all the fields');
    return;
  }

  let convertedDegree;
  
  switch (typeValue) {
    case "Celsius":
      convertedDegree = convertToFahrenheit(degreeValue);
      opposite= 'Fahrenheit'
      break;
    default:
      convertedDegree = convertToCelsius(degreeValue);
      opposite= 'Celsius'
  }
  
  showResult(convertedDegree, opposite);
});

function convertToFahrenheit(celsius) {
  return Math.round((parseInt(celsius) * 9/5) + 32);
}

function convertToCelsius(fahrenheit) {
  return Math.round((parseInt(fahrenheit)-32)*5/9);
}

function showResult(temp, opposite) {
   result.innerHTML = `${temp}° ${opposite}`;
}   