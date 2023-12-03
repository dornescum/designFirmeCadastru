console.log('tipuriLucrari.js loaded');
const lucrari = document.getElementById('lucrari');

const tipuriLucrari = [
    {id: 1, nume: 'cadastru și intabulare apartament', checked: true},
    {id: 2, nume: 'cadastru și intabulare teren extravilan ', checked: false},
    {id: 3, nume: 'actualizare / rectificare cadastru', checked: true},
    {id: 4, nume: 'dezmembrare / parcelare / lotizare teren extravilan', checked: false},
    {id: 5, nume: 'alipire teren extravilan', checked: true},
    {id: 6, nume: 'plan topografic (de situație)', checked: false},
    {id: 7, nume: 'scoaterea din circuitul agricol', checked: true},
    {id: 8, nume: 'scanari 3D (LASER)', checked: false},
    {id: 9, nume: 'alt tip de lucrare', checked: true},
    {id: 10, nume: 'cadastru și intabulare teren intravilan', checked: false},
    {id: 11, nume: 'cadastru și intabulare teren cu construcție', checked: true},
    {id: 12, nume: 'dezmembrare / parcelare / lotizare teren intravilan', checked: false},
    {id: 13, nume: 'alipire teren intravilan', checked: true},
    {id: 14, nume: 'alipire unitati individuale (apartamente)', checked: false},
    {id: 15, nume: 'trasare / înțărușare teren / construcție', checked: true},
    {id: 16, nume: 'aviz tehnic OCPI', checked: false},
    {id: 17, nume: 'zbor cu drona (UAV)', checked: true}
];

const halfLength = Math.ceil(tipuriLucrari.length / 2);
const firstHalf = tipuriLucrari.slice(0, halfLength);
const secondHalf = tipuriLucrari.slice(halfLength);

lucrari.innerHTML = `
    <div class="col-md-6">
        ${firstHalf.map(tip => `
            <div class="mx-2">
                <div class="form-check my-2 mx-2 p-1 ">
                    <input class="form-check-input" id="exampleCheck1" type="checkbox" ${tip.checked ? 'checked' : ''}>
                    <label class="form-check-label pl-2" for="exampleCheck1" id="${tip.id}">${tip.nume}</label>
                </div>
            </div>
        `).join('')}
    </div>
    <div class="col-md-6">
        ${secondHalf.map(tip => `
            <div class="mx-2">
                <div class="form-check my-2 mx-2 p-1 ">
                    <input class="form-check-input" id="exampleCheck1" type="checkbox" ${tip.checked ? 'checked' : ''}>
                    <label class="form-check-label pl-2" for="exampleCheck1" id="${tip.id}">${tip.nume}</label>
                </div>
            </div>
        `).join('')}
    </div>
`;

// lucrari.innerHTML = tipuriLucrari.map(tip => {
//     return `
//           <div class="col-md-6">
//                                 <div class="mx-2">
//                                     <div class="form-check">
//                                         <input class="form-check-input" id="exampleCheck1" type="checkbox">
//                                         <label class="form-check-label" for="exampleCheck1" id="${tip.id}">${tip.nume}</label>
//                                     </div>
//                                 </div>
//
//                             </div>
//                             <div class="col-md-6">test2</div>
//     `
// }).join('');