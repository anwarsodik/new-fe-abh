/**
 * components.js
 * Shared Navbar & Footer for Bale Hinggil Stay.
 * Usage: <script src="components.js"></script>
 * Then call: renderNavbar('rooms') or renderNavbar('home') to highlight active link.
 */

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
function renderNavbar(activePage = 'home') {
  const links = [
    { label: 'Home',    href: 'index.html',           key: 'home' },
    { label: 'Rooms',   href: 'rooms.html',            key: 'rooms' },
    { label: 'Promo',   href: 'index.html#units',      key: 'promo' },
    { label: 'Panduan', href: 'index.html#faq',        key: 'panduan' },
    { label: 'Kontak',  href: 'index.html#footer',     key: 'kontak' },
  ];

  const desktopLinks = links.map(l => {
    const isActive = l.key === activePage;
    return `<a href="${l.href}"
      class="nav-link font-sans text-sm font-medium transition-colors ${isActive
        ? 'text-white border-b-2 border-white pb-0.5'
        : 'text-white/80 hover:text-white'}">${l.label}</a>`;
  }).join('');

  const mobileLinks = links.map(l => {
    const isActive = l.key === activePage;
    return `<a href="${l.href}"
      class="font-sans text-sm font-medium py-2 border-b border-gray-100 ${isActive
        ? 'font-semibold'
        : 'text-gray-700'}"
      style="${isActive ? 'color:#2E7D32' : ''}"
      onclick="document.getElementById('mobile-menu').classList.remove('open');
               document.getElementById('hamburger').innerHTML='<i data-lucide=\\'menu\\' class=\\'w-6 h-6\\'></i>';
               lucide.createIcons();">${l.label}</a>`;
  }).join('');

  const html = `
<header id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style="background:#2E7D32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-18 py-4">

      <!-- Logo -->
      <a href="index.html" class="flex items-center gap-2">
        <div class="w-9 h-9 rounded-lg flex items-center justify-center bg-white/20">
          <i data-lucide="building-2" class="w-5 h-5 text-white"></i>
        </div>
        <div class="leading-tight">
          <span id="logo-main" class="block font-serif text-lg text-white transition-colors">Bale Hinggil</span>
          <span id="logo-sub"  class="block font-sans text-[10px] font-medium tracking-widest uppercase transition-colors" style="color:rgba(255,255,255,0.7)">Stay</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">${desktopLinks}</nav>

      <!-- Login + Daftar + Hamburger -->
      <div class="flex items-center gap-2">
        <a href="#" id="btn-login"
           class="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-sans text-sm font-semibold text-white border border-white/40 bg-transparent transition-all hover:bg-white/20">
          <i data-lucide="log-in" class="w-4 h-4"></i>Login
        </a>
        <a href="#" id="btn-daftar"
           class="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
           style="background:#fff;color:#2E7D32">
          <i data-lucide="user-plus" class="w-4 h-4"></i>Daftar
        </a>
        <button id="hamburger" class="md:hidden p-2 rounded-lg text-white" aria-label="Menu">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
      </div>

    </div>
  </div>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="md:hidden bg-white border-t border-gray-100"
       style="transition:max-height .35s ease,opacity .35s ease;max-height:0;opacity:0;overflow:hidden">
    <div class="px-4 py-4 flex flex-col gap-3">
      ${mobileLinks}
      <div class="flex gap-2 mt-2">
        <a href="#" class="flex-1 inline-flex justify-center items-center gap-1.5 px-4 py-3 rounded-full font-sans text-sm font-semibold border-2 transition-all"
           style="color:#2E7D32;border-color:#2E7D32">
          <i data-lucide="log-in" class="w-4 h-4"></i>Login
        </a>
        <a href="#" class="flex-1 inline-flex justify-center items-center gap-1.5 px-4 py-3 rounded-full font-sans text-sm font-semibold text-white"
           style="background:#2E7D32">
          <i data-lucide="user-plus" class="w-4 h-4"></i>Daftar
        </a>
      </div>
    </div>
  </div>
</header>`;

  document.getElementById('navbar-placeholder').outerHTML = html;

  // Init Lucide + scroll + hamburger
  lucide.createIcons();
  _initNavbar();
}

function _initNavbar() {
  const navbar   = document.getElementById('navbar');
  const logoMain = document.getElementById('logo-main');
  const logoSub  = document.getElementById('logo-sub');
  const btnLogin = document.getElementById('btn-login');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background  = 'rgba(255,255,255,0.97)';
      navbar.style.boxShadow   = '0 2px 20px rgba(0,0,0,0.08)';
      logoMain.style.color     = '#111827';
      logoSub.style.color      = '#2E7D32';
      if (btnLogin) {
        btnLogin.style.color       = '#2E7D32';
        btnLogin.style.borderColor = '#2E7D32';
      }
      navLinks.forEach(l => {
        l.style.color       = '#374151';
        l.style.borderColor = 'transparent';
        l.onmouseover = () => l.style.color = '#2E7D32';
        l.onmouseout  = () => l.style.color = '#374151';
      });
    } else {
      navbar.style.background  = '#2E7D32';
      navbar.style.boxShadow   = 'none';
      logoMain.style.color     = '#ffffff';
      logoSub.style.color      = 'rgba(255,255,255,0.7)';
      if (btnLogin) {
        btnLogin.style.color       = '#ffffff';
        btnLogin.style.borderColor = 'rgba(255,255,255,0.4)';
      }
      navLinks.forEach(l => {
        l.style.color = 'rgba(255,255,255,0.85)';
        l.onmouseover = () => l.style.color = '#fff';
        l.onmouseout  = () => l.style.color = 'rgba(255,255,255,0.85)';
      });
    }
  });

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.style.maxHeight !== '0px' && mobileMenu.style.maxHeight !== '';
    if (isOpen) {
      mobileMenu.style.maxHeight = '0px';
      mobileMenu.style.opacity   = '0';
      hamburger.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    } else {
      mobileMenu.style.maxHeight = '400px';
      mobileMenu.style.opacity   = '1';
      hamburger.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    }
    lucide.createIcons();
  });
}


/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function renderFooter() {
  const html = `
<footer id="footer" style="background:#1a3a1c" class="text-white pt-16 pb-8 px-4">
  <div class="max-w-7xl mx-auto">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

      <!-- Brand -->
      <div class="sm:col-span-2 lg:col-span-1">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center" style="background:#2E7D32">
            <i data-lucide="building-2" class="w-5 h-5 text-white"></i>
          </div>
          <div>
            <p class="font-serif text-white text-lg leading-none">Bale Hinggil</p>
            <p class="font-sans text-[10px] tracking-widest uppercase" style="color:#4CAF50">Stay</p>
          </div>
        </div>
        <p class="font-sans text-sm leading-relaxed mb-6" style="color:#a7c4b5">
          Apartemen premium di jantung Surabaya Timur. Menghadirkan gaya hidup modern dengan sentuhan mewah untuk Anda dan keluarga.
        </p>
        <div class="flex gap-3">
          <a href="#" class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20" style="background:#2E7D32" aria-label="Instagram">
            <i data-lucide="instagram" class="w-4 h-4 text-white"></i>
          </a>
          <a href="#" class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20" style="background:#2E7D32" aria-label="Facebook">
            <i data-lucide="facebook" class="w-4 h-4 text-white"></i>
          </a>
          <a href="#" class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20" style="background:#2E7D32" aria-label="TikTok">
            <i data-lucide="video" class="w-4 h-4 text-white"></i>
          </a>
          <a href="#" class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20" style="background:#2E7D32" aria-label="YouTube">
            <i data-lucide="youtube" class="w-4 h-4 text-white"></i>
          </a>
        </div>
      </div>

      <!-- Navigasi -->
      <div>
        <h5 class="font-serif text-white text-base mb-5">Navigasi</h5>
        <ul class="space-y-3">
          <li><a href="index.html"          class="font-sans text-sm transition-colors hover:text-white" style="color:#a7c4b5">Home</a></li>
          <li><a href="rooms.html"           class="font-sans text-sm transition-colors hover:text-white" style="color:#a7c4b5">Rooms</a></li>
          <li><a href="index.html#units"    class="font-sans text-sm transition-colors hover:text-white" style="color:#a7c4b5">Promo</a></li>
          <li><a href="index.html#faq"      class="font-sans text-sm transition-colors hover:text-white" style="color:#a7c4b5">Panduan</a></li>
          <li><a href="#"                   class="font-sans text-sm transition-colors hover:text-white" style="color:#a7c4b5">Syarat &amp; Ketentuan</a></li>
          <li><a href="#"                   class="font-sans text-sm transition-colors hover:text-white" style="color:#a7c4b5">Kebijakan Privasi</a></li>
        </ul>
      </div>

      <!-- Kontak -->
      <div>
        <h5 class="font-serif text-white text-base mb-5">Hubungi Kami</h5>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <i data-lucide="phone" class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:#4CAF50"></i>
            <div>
              <p class="font-sans text-xs uppercase tracking-widest mb-0.5" style="color:#4CAF50">WhatsApp</p>
              <a href="https://wa.me/6281234567890" class="font-sans text-sm text-white hover:underline">+62 812-3456-7890</a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i data-lucide="mail" class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:#4CAF50"></i>
            <div>
              <p class="font-sans text-xs uppercase tracking-widest mb-0.5" style="color:#4CAF50">Email</p>
              <a href="mailto:info@balehinggil.id" class="font-sans text-sm text-white hover:underline">info@balehinggil.id</a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i data-lucide="map-pin" class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:#4CAF50"></i>
            <div>
              <p class="font-sans text-xs uppercase tracking-widest mb-0.5" style="color:#4CAF50">Lokasi</p>
              <a href="https://maps.google.com/?q=Surabaya+Timur" target="_blank" rel="noopener noreferrer"
                 class="font-sans text-sm text-white hover:underline leading-relaxed">
                Jl. Raya Merr No. 1,<br />Surabaya Timur, 60298
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- Lokasi -->
      <div>
        <h5 class="font-serif text-white text-base mb-5">Lokasi Strategis</h5>
        <div class="rounded-xl overflow-hidden mb-4 border border-white/10">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=280&h=160&fit=crop&q=70"
               alt="Peta lokasi" class="w-full h-auto" loading="lazy" />
        </div>
        <ul class="space-y-2">
          <li class="flex items-center gap-2 font-sans text-xs" style="color:#a7c4b5">
            <i data-lucide="check-circle" class="w-3.5 h-3.5" style="color:#4CAF50"></i>7 menit dari Toll MERR
          </li>
          <li class="flex items-center gap-2 font-sans text-xs" style="color:#a7c4b5">
            <i data-lucide="check-circle" class="w-3.5 h-3.5" style="color:#4CAF50"></i>10 menit dari RSAL Surabaya
          </li>
          <li class="flex items-center gap-2 font-sans text-xs" style="color:#a7c4b5">
            <i data-lucide="check-circle" class="w-3.5 h-3.5" style="color:#4CAF50"></i>15 menit dari Juanda Airport
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-3" style="border-color:#2E7D32">
      <p class="font-sans text-xs" style="color:#4CAF50">© 2026 Bale Hinggil Stay. Seluruh hak cipta dilindungi undang-undang.</p>
      <div class="flex items-center gap-1.5">
        <i data-lucide="shield-check" class="w-3.5 h-3.5" style="color:#4CAF50"></i>
        <p class="font-sans text-xs" style="color:#4CAF50">Transaksi aman &amp; terenkripsi SSL</p>
      </div>
    </div>

  </div>
</footer>

<!-- Floating WhatsApp -->
<a href="https://wa.me/6281234567890?text=Halo%20Bale%20Hinggil%20Stay%2C%20saya%20ingin%20tanya%20tentang%20unit%20apartemen."
   target="_blank" rel="noopener noreferrer"
   class="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-xl transition-all hover:scale-105"
   style="background:#2E7D32" aria-label="Chat WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-6 h-6 flex-shrink-0" fill="white">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.477 2.027 7.788L0 32l8.418-2.007A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.853l-.486-.29-5.002 1.193 1.234-4.87-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.778c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.63-.199-.896.199-.265.398-1.029 1.295-1.261 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.62-3.203-1.978-1.183-1.057-1.982-2.362-2.214-2.76-.232-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.265-.398.398-.663.133-.266.066-.499-.033-.698-.1-.199-.896-2.161-1.228-2.96-.323-.778-.651-.673-.896-.686l-.763-.013c-.265 0-.696.1-1.061.499-.365.398-1.394 1.362-1.394 3.322s1.427 3.853 1.626 4.118c.199.265 2.809 4.287 6.808 6.015.951.41 1.694.655 2.272.839.955.304 1.824.261 2.511.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.099-.166-.365-.265-.763-.465z"/>
  </svg>
  <div class="text-left">
    <p class="font-sans text-[10px] font-medium text-white/70 leading-none mb-0.5">Anda kesulitan?</p>
    <p class="font-sans text-sm font-semibold text-white leading-none">Hubungi Kami</p>
  </div>
</a>`;

  document.getElementById('footer-placeholder').outerHTML = html;
  lucide.createIcons();
}
