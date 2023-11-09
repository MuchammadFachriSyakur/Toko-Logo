var toggle = document.getElementById('input');
var ul = document.getElementById('nav');
toggle.addEventListener("click", function(){
  ul.classList.toggle('show');
});

var i = 0;
var images = [];
var time = 1500;
    
    //menangkap daftar gambar
images[0] = "img/slider1.png";
images[1] = "img/slider2.png";
images[2] = "img/slider3.png";
images[3] = "img/slider4.png";
    
function changeImage(){
   document.slide.src = images[i];
      
   if(i < images.length - 1){
        i++;
   } else{
        i = 0;
   }
      
   setTimeout(changeImage, time);
}
window.onload = changeImage;

function tampilkan(namaProduk, hargaProduk, detailProduk, gambarProduk){
 
  /nggawe popup e mben biso ngatur elemen e/
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="popup-content">
      <span class="popup-close" onclick="tutupPopup()">&times;</span>
      <img src="${gambarProduk}" alt+"${namaProduk}">
      <h2>${namaProduk}</h2>
      <p class="price">Harga: ${hargaProduk}</p>
      <p>${detailProduk}</p>
      <button class="tombol-beli">Beli Sekarang</button>
      </div> `;
  
  document.body.appendChild(popup);
}
function tutupPopup(){
  const pop = document.querySelector(".popup");
  if (pop){
    document.body.removeChild(pop);
  }
}

function filterKategori(kategori){
  const produk = document.querySelectorAll(".product");
  for(const produkItem of produk){
    const kategoriProduk = produkItem.getAttribute("data-kategori");
    if(kategori === 'all' || kategori === kategoriProduk){
      produkItem.style.display = "block";
    }else{
      produkItem.style.display = "none";
    }
  }
}
function cariBarang(){
  const inputPencarian = document.getElementById('cariBarang');
  const kataKunci = inputPencarian.value.toLowerCase();
  const produk = document.querySelectorAll('.product');
  
  for(const produkItem of produk){
    const namaProduk = produkItem.querySelector('h3').textContent.toLowerCase();
    const deksripsiProduk = produkItem.querySelector('p').textContent.toLowerCase();
    
    if(namaProduk.includes(kataKunci)||deksripsiProduk.includes(kataKunci)){
      produkItem.style.display = "block";
    }else{
      produkItem.style.display = "none";
    }
  }
}
const keranjang = [];
const totalBelanja = 0;

function tambahkanProdukKeKeranjang(namaProduk, harga){
  keranjang.push({nama: namaProduk, harga: harga});
  updateKeranjang();
  const notif = document.createElement('div');
      notif.className = 'notif';
      notif.innerHTML =`<h4>Produk Ditambahkan ke keranjang</h4>
    <span class="tutupNotif" onclick="tutupNotif()">&times;</span>`;
    
    document.body.appendChild(notif);
}
function tutupNotif(){
      const hapusNotif = document.querySelector(".notif");
      if(tutupNotif){
        document.body.removeChild(hapusNotif);
      }
    }
function updateKeranjang(){
  const daftarKeranjang = document.getElementById("daftar-keranjang");
  const totalBelanjaElem = document.getElementById("total-belanja");
  daftarKeranjang.innerHTML = ``;
  let total = 0;
  
  keranjang.forEach((produk) => {
    const item = document.createElement('li');
    item.textContent = `${produk.nama} - $${produk.harga.toFixed(2)}`;
    daftarKeranjang.appendChild(item);
    total += produk.harga;
  });
  totalBelanjaElem.textContent = `$${total.toFixed(2)}`
}
function checkout (){
  
}