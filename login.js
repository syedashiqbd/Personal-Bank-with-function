let loginButton = document.getElementById('login_btn');
let email = document.getElementById('email_input');
let password_input = document.getElementById('password_input');

function performLogin() {
  const email = email_input.value;
  const password = password_input.value;

  if (email === 'syed@ashiq.com' && password === 'allah') {
    window.location.href = 'bank.html';
  } else {
    alert('Please login your correct Email and Password');
    email_input.value = '';
    password_input.value = '';
  }
}
//   Locate to bank page by pressing loginButton
loginButton.addEventListener('click', performLogin);

// Locate to bank page by pressing enter
password_input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    performLogin();
  }
});
