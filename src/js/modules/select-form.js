import SlimSelect from 'slim-select';
import "../../../node_modules/slim-select/dist/slimselect.css";

function selectForm () {
    const allSelectForm = document.querySelectorAll('.js-select-form');

    const buildSelectForm = selectElem => {
        return new SlimSelect({
            select: selectElem,
            settings: {
                showSearch: false,
                focusSearch: false,
            }
        });
    }

    allSelectForm.forEach(selectElemForm => { buildSelectForm(selectElemForm) });

}

export default selectForm;