function buttonsFixedInit () {

    const buttonsFixed = document.querySelector('.js-buttons-fixed');
    const buttonMessage = document.querySelector('.js-button-message');
    const buttonContacts = document.querySelector('.js-button-contacts');

    buttonMessage.addEventListener('click', ()=> {
        buttonContacts.classList.toggle('is-active');
    })

    const throttle = (func, time = 100) => {
        let lastTime = 0;
        return () => {
            const now = new Date();
            if (now - lastTime >= time) {
                func();
                time = now;
            }
        };
    };
    
    const validateButtonsFixed = () => {
        const windowY = window.scrollY;
        const windowH = window.innerHeight;

        if( windowY > windowH - 400) {

            if (windowY <= (document.querySelector(".footer").offsetTop - window.innerHeight)) {
                buttonsFixed.classList.add('is-visible');
            } else {
                buttonsFixed.classList.remove('is-visible');
            }

        } else {
            buttonsFixed.classList.remove('is-visible');
        }
    };

    window.addEventListener("scroll", throttle(validateButtonsFixed, 100));

}

export default buttonsFixedInit;