const navbar = document.querySelector(".navbar");

const dari = document.getElementById("dari");
const sampai = document.getElementById("sampai");
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

const redirectToPage = (link) => {
  window.location.href = link;
};

function showPage(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  return false;
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
  if (tipe === "mobil include drive") {
    mobilDriven.display = "block";
  }
}

function hitungDurasi() {
  var dari = new Date(document.getElementById("dari").value);
  var sampai = new Date(document.getElementById("sampai").value);

  var durasi = Math.abs(sampai.getTime() - dari.getTime()) / (1000 * 3600 * 24);

  document.getElementById("hari").textContent = durasi + " hari";
}

dari.addEventListener("change", hitungDurasi);
sampai.addEventListener("change", hitungDurasi);
