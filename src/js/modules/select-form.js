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
                allowDeselect: true,
                maxValuesShown: 0 - 1,
                closeOnSelect: false,
                showOptionTooltips: true,
                maxValuesMessage: 'Выбрано: {number}',
            }
        });
    }

    allSelectForm.forEach(selectElemForm => { buildSelectForm(selectElemForm) });

}

export default selectForm;