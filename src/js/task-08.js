const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if(email === "" || password ===""){
        alert("All fields can't be empty")
    }

    const inform = {
        email: email,
        password: password,
    };

    console.log(inform);

    form.reset();
})



