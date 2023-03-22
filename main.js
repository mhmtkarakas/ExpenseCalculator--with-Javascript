const ekleBtn = document.querySelector('#ekle-btn');
const harcamaInput = document.querySelector('#harcama');
const fiyatInput = document.querySelector('#fiyat');
const durumInput = document.querySelector('#durum');
const list = document.querySelector('.list');


// Butonu izler
ekleBtn.addEventListener('click',addExpense)

function addExpense(e){
    e.preventDefault();
    // Validation
    if(!fiyatInput || !harcamaInput.value  ){
        alert('Lutfen deger giriniz')
        return;
    }
    const listItem = document.createElement('div');
    // elemana div ekleme
    listItem.classList.add('list-item')
    // icerigi degistirme
    listItem.innerHTML =`
    <h1>${harcamaInput.value}</h1>
            <h2>${fiyatInput.value} &#8378;</h2>
            <div class="buttons">
                <img src="images/delete.png" >
                <img src="images/payment.png" >
            </div>
    `
    // htmle gonderme
    list.appendChild(listItem);
}
