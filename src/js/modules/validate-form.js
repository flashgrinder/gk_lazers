function validateForm() {

    /* Validate Email */
    const inputsEmail = document.querySelectorAll('input[type="email"]');

    inputsEmail.forEach((input) => {

        input.addEventListener('keyup', (event)=> {

            let email = input.value;
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if(email.match(pattern)) {
                input.classList.add("is-dirty");
                input.classList.remove("is-error");
            } else{
                input.classList.remove("is-dirty");
                input.classList.add("is-error");
            }
            if (email === "") {
                input.classList.remove("is-dirty");
                input.classList.remove("is-error");
            }

        })
    })

    /* Validate Text */
    const inputsText = document.querySelectorAll('input[type="text"]');

    inputsText.forEach((inputText) => {

        inputText.addEventListener('keyup', (event)=> {

            let pattern = /^[А-Яа-яЁё\s]+$/;
            let textEl = event.target;
            textEl.value = textEl.value.replace(/^[a-zA-Z0-9]+$/, "");

            let text = inputText.value;

            let checkStr = textEl.value.replace(/[^а-яА-я ]/g, '');

            if (checkStr !== text) {
                inputText.value = '';
            }

            if(text.match(pattern)) {
                inputText.classList.add("is-dirty");
                inputText.classList.remove("is-error");
            } else{
                inputText.classList.remove("is-dirty");
                inputText.classList.add("is-error");
            }
            if (text === "") {
                inputText.classList.remove("is-dirty");
                inputText.classList.remove("is-error");
            }

        })
    })

    /* Validate Phone */
    const inputsPhone = document.querySelectorAll('input[type="tel"]');

    inputsPhone.forEach((inputPhone) => {

        inputPhone.addEventListener('keyup', (event)=> {

            let pattern = /[+]7[\(]\d{3}[\)]\s\d{3}[\-]\d{2}\d{2}/;
            let phone = inputPhone.value;

            if(phone.match(pattern)) {
                inputPhone.classList.add("is-dirty");
                inputPhone.classList.remove("is-error");
            } else{
                inputPhone.classList.remove("is-dirty");
                inputPhone.classList.add("is-error");
            }
            if (phone === "") {
                inputPhone.classList.remove("is-dirty");
                inputPhone.classList.remove("is-error");
            }

        })
    })
}

export default validateForm;