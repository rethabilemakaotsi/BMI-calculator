function calculateBMI() {

  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Please enter valid values for weight and height.');
    return;
  }


  let bmi = weight / ((height / 100) * (height / 100));


  let formattedResult = bmi.toFixed(2);

  
  document.getElementById('result').innerHTML = `Your BMI is: ${formattedResult}`;
  
  document.getElementById('result').style.fontWeight = 'bold';
  document.getElementById('result').style.color = bmi < 18.5 ? 'red' : bmi < 24.9 ? 'green' : 'blue';
}