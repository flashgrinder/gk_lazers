function searchActionMobile () {

    const searchBtn = document.querySelector('.js-search-btn');
    const searchFormMobile = document.querySelector('.js-form-search-mobile');
    const headerOuter = document.querySelector('.js-header-outer');

    searchBtn.addEventListener('click', () => {
        searchFormMobile.classList.toggle('is-active');
        headerOuter.classList.toggle('is-active');
    })

}

export default searchActionMobile;