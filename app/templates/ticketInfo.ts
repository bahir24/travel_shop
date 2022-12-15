export function initTicketElementTemplate<T>(data:T, i): string {
    const tmpl = `
       <div  data-item-index=${i} class="ticket-block">
           <p>${data}</p>
       </div>
    `
    return tmpl;
}
