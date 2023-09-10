const loginBtn = document.querySelector('.login__btn');
const signupBtn = document.querySelector('.signup__btn');

// hero login button
loginBtn.addEventListener("click", loginClick);
signupBtn.addEventListener("click", signupClick);

function loginClick() {
  console.log("loginBtn was clicked"); 
  location.href='www.mysyllabyte.com';
}

function signupClick() {
  console.log("signupClick was clicked"); 
  location.href='www.mysyllabyte.com';
}