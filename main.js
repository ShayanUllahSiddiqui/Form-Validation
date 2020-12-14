var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password"), email = document.getElementById("email"), btn = document.getElementById("btn"), rlt=document.getElementById("answer"), birth=document.getElementById("birth");

const validatePassword = () => (password.value != confirm_password.value) ? confirm_password.setCustomValidity("Passwords Don't Match") : confirm_password.setCustomValidity('');

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let arr = [];
    var emailValue = email.value;
    var passValue = password.value;
    var dateValue = birth.value;
    arr.push(emailValue);
    arr.push(passValue);
    arr.push(dateValue);
    rlt.innerHTML = arr;
});