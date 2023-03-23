const ekleBtn = document.querySelector("#ekle-btn");
const harcamaInput = document.querySelector("#harcama");
const fiyatInput = document.querySelector("#fiyat");
const durumInput = document.querySelector("#durum");
const list = document.querySelector(".list");
const toplamSpan = document.querySelector("#toplam");

// Butonu izler
ekleBtn.addEventListener("click", addExpense);
// listeyi izler > tiklanma
list.addEventListener("click", handleClick);

let toplam = 0;

function addExpense(e) {
  e.preventDefault();
  // Validation
  if (!fiyatInput || !harcamaInput.value) {
    alert("Lutfen deger giriniz");
    return;
  }

  const listItem = document.createElement("div");

  // elemana div ekleme
  listItem.classList.add("list-item");

  if (durumInput.checked) {
    listItem.classList.add("odendi");
  }
  // icerigi degistirme
  listItem.innerHTML = `
    <h1>${harcamaInput.value}</h1>
            <h2> <span>${fiyatInput.value}</span> &#8378;</h2>
            <div class="buttons">
                <img id='delete' src="images/delete.png" >
                <img id='payment' src="images/payment.png" >
            </div>
    `;
  // htmle gonderme
  list.appendChild(listItem);
  // toplam ekleme
  toplam += Number(fiyatInput.value);
  // toplam ekleme
  toplamSpan.textContent = toplam;
  // Input Verileri Sifirlanir
  harcamaInput.value = "";
  fiyatInput.value = "";
}

// silme ve edit islemi
function handleClick(e) {
  const item = e.target;
  if (item.id === "delete") {
    // tiklanan butonun kapsayicisini alma
    const harcamaDiv = item.parentElement.parentElement;

    // tiklanan itemin fiyatini alma
    var silinenFiyat = harcamaDiv.querySelector("span").innerText;
    // js deki toplam degerini guncelledik
    toplam -= Number(silinenFiyat);
    // tiklanan itemin fiyatini alma
    toplamSpan.textContent = toplam;

    // animasyon ekleme
    harcamaDiv.classList.add("fall");
    // animasyonun bitisini bekleme
    harcamaDiv.addEventListener("transitionend", () => {
      // html den kaldirma
      harcamaDiv.remove();
    });
  }
}
