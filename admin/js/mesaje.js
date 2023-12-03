console.log('mesaje.js');
const mesajeClient = document.querySelector('#mesaje-clienti');

const users = [{
    fullName: 'John Doe',
    date: '01-01-2023',
    phone: '123456789',
    email: 'john@example.com',
    description: 'This is a description for user John.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Jane Doe',
    date: '02-02-2023',
    phone: '234567890',
    email: 'jane@example.com',
    description: 'This is a description for user Jane.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Bill Smith',
    date: '03-03-2023',
    phone: '345678901',
    email: 'bill@example.com',
    description: 'This is a description for user Bill.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Mary Johnson',
    date: '04-04-2023',
    phone: '456789012',
    email: 'mary@example.com',
    description: 'This is a description for user Mary.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'James Brown',
    date: '05-05-2023',
    phone: '567890123',
    email: 'james@example.com',
    description: 'This is a description for user James.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Patricia Davis',
    date: '06-06-2023',
    phone: '678901234',
    email: 'patricia@example.com',
    description: 'This is a description for user Patricia.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Robert Garcia',
    date: '07-07-2023',
    phone: '789012345',
    email: 'robert@example.com',
    description: 'This is a description for user Robert.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Jennifer Miller',
    date: '08-08-2023',
    phone: '890123456',
    email: 'jennifer@example.com',
    description: 'This is a description for user Jennifer.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Michael Rodriguez',
    date: '09-09-2023',
    phone: '901234567',
    email: 'michael@example.com',
    description: 'This is a description for user Michael.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}, {
    fullName: 'Linda Martinez',
    date: '10-10-2023',
    phone: '012345678',
    email: 'linda@example.com',
    description: 'This is a description for user Linda.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
}]

console.log(users);

mesajeClient.innerHTML = `
      ${users.map(el => `
         <li>
                            <article>
                                <div class="card" style="border: 1px solid #ccc">
                                    <div class="d-flex justify-content-between ">

                                        <p class="font-weight-bold">${el.fullName}</p>
<!--                                        fixme date-->
                                        <p class="font-italic"> <span><i class="menu-icon fa fa-edit " aria-hidden="true"></i></span> ${el.date}</p>
                                    </div>
                                    <div class="d-flex justify-content-between  card-body">

                                        <p class="font-weight-bold"><i class="fa fa-phone" aria-hidden="true"></i>
                                            ${el.phone}</p>
                                        <p class="font-italic"> <i class="menu-icon fa fa-envelope pr-1" aria-hidden="true"></i>
                                            ${el.email}</p>
                                    </div>
                                    <div class="card-body w-100">
                                        <div>
                                            ${el.description}
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </li>
      `).join('')}
`;
