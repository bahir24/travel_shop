import { getTicketById, postTicketData } from '@services/rest/tickets'
import { ITicket, IVipTicket } from 'models/ticket/ticket'
import { initTicketElementTemplate } from '../../templates/ticketInfo'
import '@myCss'
import { IUser } from 'models/user/user'
import { initHeaderTitle, initFooterTitle } from '@services/general/general'
import { openModal } from "@services/modal/modalService";
import { Modal } from '../../classess/modal'


const modal = new Modal()

let ticketInstance: ITicket | IVipTicket
const clientType = 'custom'
let ticketPostInstance: boolean

export let toursDataArray: IVipTicket[]

const ticketData:Promise<IVipTicket[]> = getTicketById<IVipTicket>('someId')

ticketData.then((data):void => {
    ticketInstance = data[0]
    const ticketName = ticketInstance?.name || ' '
    initHeaderTitle(ticketName, 'h1')
    initFooterTitle('Туры по всему миру', 'h2');
    initTicketInfo(ticketInstance)
    registerConfirmButton()

})

function initTicketInfo(ticket: IVipTicket | ITicket) :void {

    const ticketDescription = ticket?.description || ' ';
    const tourOperator = ticket?.tourOperator || ' ';
    const vipClientType = (ticket as IVipTicket).vipStatus || ' ';
    let ticketText: string = '';
    [ticketDescription, tourOperator, vipClientType].forEach((el, i) => {
        ticketText += initTicketElementTemplate(el, i)
    })
    const targetEl = document.getElementsByClassName('ticket-info')[0];
    targetEl.innerHTML = ticketText;
}


function registerConfirmButton():void {
    const targetEl = document.getElementById('accept-order-button')
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initUserData()
            modal.open(`
            <div>
            <p data-moda-id="tour-modal" class="close-modal">X</p>
            <p>Вы купили билет !</p>
            </div>
            `)
        })
    }
}

function initUserData(): IUser {
    const userInfo = document.querySelectorAll('.user-info > p')
    const userInfoObj = <IUser>{}
    userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name')
        if (inputDataName) {
            const inputElement = el.querySelector('input')
            userInfoObj[inputDataName] = (inputElement as HTMLInputElement).value;
        }
    })
    console.log(userInfoObj)
    return userInfoObj
}