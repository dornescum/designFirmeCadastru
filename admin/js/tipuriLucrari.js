console.log('tipuriLucrari.js loaded');
const lucrari = document.getElementById('lucrari');

const tipuriLucrari = [
    {id: 1, nume: 'cadastru și intabulare apartament'},
    {id: 2, nume: 'cadastru și intabulare teren extravilan '},
    {id: 3, nume: 'actualizare / rectificare cadastru'},
    {id: 4, nume: 'dezmembrare / parcelare / lotizare teren extravilan'},
    {id: 5, nume: 'alipire teren extravilan'},
    {id: 6, nume: 'plan topografic (de situație)'},
    {id: 7, nume: 'scoaterea din circuitul agricol'},
    {id: 8, nume: 'scanari 3D (LASER)'},
    {id: 9, nume: 'alt tip de lucrare'},
    {id: 10, nume: 'cadastru și intabulare teren intravilan'},
    {id: 11, nume: 'cadastru și intabulare teren cu construcție'},
    {id: 12, nume: 'dezmembrare / parcelare / lotizare teren intravilan'},
    {id: 13, nume: 'alipire teren intravilan'},
    {id: 14, nume: 'alipire unitati individuale (apartamente)'},
    {id: 15, nume: 'trasare / înțărușare teren / construcție'},
    {id: 16, nume: 'aviz tehnic OCPI'},
    {id: 17, nume: 'zbor cu drona (UAV)'},
]

const halfLength = Math.ceil(tipuriLucrari.length / 2);
const firstHalf = tipuriLucrari.slice(0, halfLength);
const secondHalf = tipuriLucrari.slice(halfLength);

lucrari.innerHTML = `
    <div class="col-md-6">
        ${firstHalf.map(tip => `
            <div class="mx-2">
                <div class="form-check">
                    <input class="form-check-input" id="exampleCheck1" type="checkbox">
                    <label class="form-check-label" for="exampleCheck1" id="${tip.id}">${tip.nume}</label>
                </div>
            </div>
        `).join('')}
    </div>
    <div class="col-md-6">
        ${secondHalf.map(tip => `
            <div class="mx-2">
                <div class="form-check">
                    <input class="form-check-input" id="exampleCheck1" type="checkbox">
                    <label class="form-check-label" for="exampleCheck1" id="${tip.id}">${tip.nume}</label>
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