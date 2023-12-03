console.log('dateContact.js loaded');

const contacts = [
    {numarCriteriu: 1, tipContact: 'email', userIp: '192.0.2.1', data: '11-03-2023'},
    {numarCriteriu: 2, tipContact: 'phone', userIp: '192.0.2.2', data: '12-03-2023'},
    {numarCriteriu: 3, tipContact: 'email', userIp: '192.0.2.3', data: '13-03-2023'},
    {numarCriteriu: 4, tipContact: 'phone', userIp: '192.0.2.4', data: '14-03-2023'},
    {numarCriteriu: 5, tipContact: 'email', userIp: '192.0.2.5', data: '15-03-2023'},
    {numarCriteriu: 6, tipContact: 'phone', userIp: '192.0.2.6', data: '16-03-2023'},
    {numarCriteriu: 7, tipContact: 'email', userIp: '192.0.2.7', data: '17-03-2023'},
    {numarCriteriu: 8, tipContact: 'phone', userIp: '192.0.2.8', data: '18-03-2023'},
    {numarCriteriu: 9, tipContact: 'email', userIp: '192.0.2.9', data: '19-03-2023'},
    {numarCriteriu: 10, tipContact: 'phone', userIp: '192.0.2.10', data: '20-03-2023'}
];

const tableBody = document.querySelector('.table tbody');

tableBody.innerHTML = contacts.map(contact =>
    `<tr>
        <th scope="row" >${contact.numarCriteriu}</th>
        <td>${contact.tipContact  === 'email' ? '<i class="fa fa-envelope" aria-hidden="true"></i>' :
        '<i class="fa fa-phone" aria-hidden="true"></i>'} 
        <span class="pl-1">
                ${contact.tipContact === 'email' ? 'Email' : 'Phone'  }  
        </span>
        </td>
        <td>${contact.userIp}</td>
        <td>${contact.data}</td>
    </tr>`
).join('');