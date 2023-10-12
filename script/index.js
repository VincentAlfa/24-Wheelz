const navbar = document.querySelector(".navbar");

const dari = document.getElementById("dari");
const sampai = document.getElementById("sampai");
const hari = document.getElementById("hari");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

function showPage(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
}

function buttonActive(active, inactive) {
  document.getElementById(active).className = "active";
  document.getElementById(inactive).className = "";
}

function vehicleSelection() {
  let tipe = document.getElementById("tipe").value;
  const motor = document.getElementById("motor").style;
  const mobilSelfDrive = document.getElementById("mobil-self").style;
  const mobilDriven = document.getElementById("mobil-driver").style;

  motor.display = "none";
  mobilSelfDrive.display = "none";
  mobilDriven.display = "none";

  if (tipe === "motor") {
    motor.display = "block";
  }
  if (tipe === "mobil self drive") {
    mobilSelfDrive.display = "block";
  }
  if (tipe === "mobil include driver") {
    mobilDriven.display = "block";
  }
}

function hitungDurasi() {
  var dari = new Date(document.getElementById("dari").value);
  var sampai = new Date(document.getElementById("sampai").value);

  var durasi =
    Math.floor(sampai.getTime() - dari.getTime()) / (1000 * 3600 * 24);

  if (durasi >= 0) {
    hari.textContent = durasi + " hari";
  }
  if (durasi < 0) {
    hari.textContent = " Durasi Invalid";
  }
}

dari.addEventListener("change", hitungDurasi);
sampai.addEventListener("change", hitungDurasi);
