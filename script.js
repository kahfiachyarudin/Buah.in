let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function togglemode() {
    document.body.classList.toggle("dark-mode");
    const btn = document.querySelector('.toggle-theme');
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Mode Terang";
    } else {
        btn.textContent = "🌙 Mode Gelap";
    }
  }

function selesai(){
  alert("Terima kasih telah mengisi form ini. Kami akan segera menghubungi Anda.");
}