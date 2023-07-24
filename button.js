// Fungsi Button JS ini adalah ketika klik button next akan muncul halaman blog selanjutnya 
// dan ketika klik button previous akan kembali ke halaman button next.

// Daftar halaman blog yang akan ditampilkan
const blogPages = [
  "blog2.html", // Ganti URL dengan URL halaman blog sesuai kebutuhan
  "blog.html",

  "blog.html", // Ganti URL dengan URL halaman blog sesuai kebutuhan
  "blog2.html",
  // Tambahkan URL halaman blog lainnya jika ada
];

// Fungsi untuk menampilkan halaman berikutnya
function showNextPage() {
  const currentPage = getCurrentPage();
  const nextPageIndex = (currentPage + 1) % blogPages.length;
  window.location.href = blogPages[nextPageIndex];
}

// Fungsi untuk menampilkan halaman sebelumnya
function showPrevPage() {
  const currentPage = getCurrentPage();
  const prevPageIndex = (currentPage - 1 + blogPages.length) % blogPages.length;
  window.location.href = blogPages[prevPageIndex];
}

// Fungsi untuk mendapatkan indeks halaman saat ini dari URL
function getCurrentPage() {
  const currentPageUrl = window.location.href;
  return blogPages.findIndex((pageUrl) => pageUrl === currentPageUrl);
}


