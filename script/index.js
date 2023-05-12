const navbar = document.querySelector('.navbar');

const dari =  document.getElementById('dari');
const sampai = document.getElementById('sampai');
document.addEventListener('scroll', () =>{
    if(window.scrollY > 0 ){
        navbar.classList.add('scroll')
    }else{
        navbar.classList.remove('scroll')
    }
})

const redirectToPage = (link) =>{
    window.location.href=link
}

function showPage(shown, hidden) {
    document.getElementById(shown).style.display='block'
    document.getElementById(hidden).style.display='none'
    return false
}

function buttonActive(active, inactive) {
    document.getElementById(active).className="active"
    document.getElementById(inactive).className=""
}

function vehicleSelection() {
    var tipe = document.getElementById('tipe').value
    if (tipe === "1") {
        document.getElementById('mobil-self').style.display = 'none'
        document.getElementById('mobil-driver').style.display = 'none'
        document.getElementById('motor').style.display = 'block'
    } 
    if (tipe === "2") {
        document.getElementById('mobil-self').style.display = 'block'
        document.getElementById('mobil-driver').style.display = 'none'
        document.getElementById('motor').style.display = 'none'
    } 
    if (tipe === "3") {
        document.getElementById('mobil-self').style.display = 'none'
        document.getElementById('mobil-driver').style.display = 'block'
        document.getElementById('motor').style.display = 'none'
    }
    if (tipe === "0") {
        document.getElementById('mobil-self').style.display = 'none'
        document.getElementById('mobil-driver').style.display = 'none'
        document.getElementById('motor').style.display = 'none'
    }
}

function hitungDurasi() {
    var dari = new Date(document.getElementById('dari').value);
    var sampai = new Date(document.getElementById('sampai').value);
  
    var durasi = Math.abs(sampai.getTime() - dari.getTime()) / (1000 * 3600 * 24);
  
    document.getElementById('hari').textContent = durasi + ' hari';
  }
  

dari.addEventListener('change', hitungDurasi);
sampai.addEventListener('change', hitungDurasi);
  