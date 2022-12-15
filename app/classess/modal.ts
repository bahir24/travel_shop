export class Modal {
    private readonly id:string;

    private closeModal(e: MouseEvent) {
        const target = e.target as HTMLElement
        if (target.classList.contains('close-modal')) {
            this.remove()
        }
    }
    public static modals:any = []
    constructor (id = null) {
        const findModal = Modal.modals.find(x => x.id === id)
        if (findModal) {
            Modal.removeById(id)
        }
        Modal.modals.push(this)
        this.id = id || (Math.random() + Modal.modals.length)
    }

    public open(template: string):void {
        const divWrap = document.createElement('div')
        divWrap.innerHTML = template
        divWrap.id = this.id
        divWrap.setAttribute('modal-id', this.id)
        divWrap.classList.add('modal_element')
        divWrap.addEventListener('click', this.closeModal)
        document.body.appendChild(divWrap)
    }
    public remove():void {
        const modalEl = document.getElementById(this.id)
        if (modalEl) {
            modalEl.removeEventListener('click', this.closeModal)
            modalEl.parentNode.removeChild(modalEl)
        }
    }

    public static removeById(id: string = null):void {
        let modalId = id
        const findEl = Modal.modals.find( el => el.id === modalId)
        if (findEl) {
            findEl.remove()
            Modal.modals = Modal.modals.filter(el => el.id !== modalId)
        } else {
            if (Array.isArray(Modal.modals)) {
                const lastEl = Modal.modals.pop()
                if (lastEl) {
                    lastEl.remove()
                }
            }
        }
    }
    public static removeAll(): void {
        if (Array.isArray(Modal.modals)) {
            Modal.modals.forEach( el => {
                console.log(el)
                Modal.removeById(el)
            })
        }
    }
}
