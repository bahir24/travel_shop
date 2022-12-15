import {modalTemplate} from '../../templates/modal';

export function openModal(elem): void {
    let modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-element');
    modalWrapper.innerHTML = modalTemplate(elem);
    document.body.appendChild(modalWrapper);
    addRemoveBrnListener(modalWrapper.querySelector('.remove-btn'));
};

function addRemoveBrnListener(button){
    button.addEventListener('click', () => {
        button.closest('.modal-element').remove();
    })
}
