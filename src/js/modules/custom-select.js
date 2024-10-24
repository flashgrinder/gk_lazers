function customSelect () {
    const customSelectTrue = document.querySelectorAll('.js-select-init');

    if(customSelectTrue) {

        let selectHeader = document.querySelectorAll('.js-select-header');
        let selectItem = document.querySelectorAll('.js-select-item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.js-select'),
                currentText = select.querySelector('.js-select-current');
            currentText.innerText = text;
            select.classList.remove('is-active');

        }

    }

}

export default customSelect;