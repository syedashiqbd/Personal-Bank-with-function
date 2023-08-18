// // Variables
let depositButton = document.getElementById('deposit_btn');
let withdrawButton = document.getElementById('withdraw_btn');
let logoutButton = document.getElementById('logout_btn');

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (isNaN(inputFieldValue) || inputFieldValue < 0) {
    alert('Please input a positive number');
    inputField.value = '';
    return null; // Return null to indicate invalid input
  }
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function setElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);

  textElement.innerText = newValue;
}

function buttonPressed(inputField, textDisplay, totalDisplay, isDeposit) {
  const newInputAmount = getInputValueById(inputField);
  const prvElementAmount = getElementValueById(textDisplay);
  const newTotalAmount = prvElementAmount + newInputAmount;
  setElementValueById(textDisplay, newTotalAmount);
  const prvTotalAmount = getElementValueById(totalDisplay);
  updateTotalAmount = 0;
  if (isDeposit) {
    updateTotalAmount = prvTotalAmount + newInputAmount;
  } else {
    updateTotalAmount = prvTotalAmount - newInputAmount;
  }
  setElementValueById(totalDisplay, updateTotalAmount);

  const inputFieldElement = document.getElementById(inputField);
  inputFieldElement.value = ''; // Clear the input field
}

// Deposit Button activity
depositButton.addEventListener('click', function () {
  const inputAmount = getInputValueById('deposit_input');
  if (inputAmount !== null) {
    buttonPressed('deposit_input', 'deposit_display', 'total_display', true);
  }
});

//Withdraw Button activity
withdrawButton.addEventListener('click', function () {
  const inputAmount = getInputValueById('withdraw_input');
  if (inputAmount !== null) {
    buttonPressed('withdraw_input', 'withdraw_display', 'total_display', false);
  }
});

// Function to trigger button click on Enter key press
function listenForEnter(inputFieldId, buttonId) {
  const inputField = document.getElementById(inputFieldId);

  inputField.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      document.getElementById(buttonId).click(); // Trigger the corresponding button click event
    }
  });
}

// Listen for Enter key press on input fields
listenForEnter('deposit_input', 'deposit_btn');
listenForEnter('withdraw_input', 'withdraw_btn');

// LOGOUT FUNCTIONALITY
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key == 'l') {
    window.location.href = 'index.html';
  }
});

logoutButton.addEventListener('click', function () {
  window.location.href = 'index.html';
});
