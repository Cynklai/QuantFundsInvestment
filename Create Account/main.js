
const username = document.getElementById('middlename');
const password = document.getElementById('pmd');
const button = document.getElementById('submit');
const firstname = document.getElementById('fname');   
const lastname = document.getElementById('lname');
const email = document.getElementById('mail');
const retype = document.getElementById('pwdd');
const errorcode = document.getElementById('error');
const errorcode1 = document.getElementById('ero');
const errorcode2 = document.getElementById('er');
const errorcode3 = document.getElementById('err');
const errorcode4 = document.getElementById('eer');
const errorcode5 = document.getElementById('ere');
const errorcode6 = document.getElementById('errorr');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



button.addEventListener("click", function validateForm () {
    if (username.value == ''|| username.length < 5) {
      username.style.border = '1px solid red';
      errorcode.innerText = 'Username cannot be blank';
      errorcode.style.color = 'red';
      errorcode.style.fontSize = '14px'
    } else{
        username.style.border = '1px solid green';
        errorcode.innerText = 'Correct';
        errorcode.style.color = 'green';
        errorcode.style.fontSize = '14px'
    }

    if (firstname.value == '' ) {
        firstname.style.border = '1px solid red';
        errorcode1.innerHTML = 'First Name cannot be blank';
        errorcode1.style.color = 'red';
        errorcode1.style.fontSize = '14px'
    } else {
        firstname.style.border = '1px solid green';
        errorcode1.innerHTML = 'Correct';
        errorcode1.style.color = 'green';
        errorcode1.style.fontSize = '14px'
    }

    if (lastname.value == '') {
        lastname.style.border = '1px solid red';
        errorcode2.textContent = 'Last Name cannot be blank';
        errorcode2.style.color = 'red';
        errorcode2.style.fontSize = '14px'
    } else {
        lastname.style.border = '1px solid green';
        errorcode2.textContent = 'Correct';
        errorcode2.style.color = 'green';
        errorcode2.style.fontSize = '14px'
    }

    if (email.value === '' ) {
        email.style.border = '1px solid red';
        errorcode4.textContent = 'Email cannot be blank';
        errorcode4.style.color = 'red';
        errorcode4.style.fontSize = '14px';
    } else if (!email.value.match(validRegex)) {
        email.style.border = '1px solid red';
        errorcode4.textContent = 'Email must contain an @ or a .com';
        errorcode4.style.color = 'red';
        errorcode4.style.fontSize = '14px';
    } else {
        email.style.border = '1px solid green';
        errorcode4.textContent = 'Correct';
        errorcode4.style.color = 'green';
        errorcode4.style.fontSize = '14px';
    }


    if (password.value < 4 || password.length < 6) {
        password.style.border = '1px solid red';
        errorcode5.textContent = 'Password cannot be blank';
        errorcode5.style.color = 'red';
        errorcode5.style.fontSize = '14px';
    } else {
        password.style.border = '1px solid green';
        errorcode5.textContent = 'Correct';
        errorcode5.style.color = 'green';
        errorcode5.style.fontSize = '14px';
    }

    if (retype.value != password.value && retype.value < 4) {
        retype.style.border = '1px solid red';
        errorcode6.textContent = 'Password do not match';
        errorcode6.style.color = 'red';
        errorcode6.style.fontSize = '14px'
    } else if (retype.value == '') {
        retype.style.border = '1px solid red';
        errorcode6.textContent = 'Please confirm your password';
        errorcode6.style.color = 'red';
        errorcode6.style.fontSize = '14px'
    }else {
        retype.style.border = '1px solid green';
        errorcode6.textContent = 'Coreect';
        errorcode6.style.color = 'green';
        errorcode6.style.fontSize = '14px';
    }
})
