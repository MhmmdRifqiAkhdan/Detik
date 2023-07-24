let currentBlogIndex = 1;
        // Fungsi untuk memuat konten blog berdasarkan indeks
        function loadBlogContent(index) {
            // Semua konten blog
            const blogContents = [
                `<h2>Blog 1</h2><p>Isi blog 1...</p>`,
                `<h2>Blog 2</h2><p>Isi blog 2...</p>`,
                // Tambahkan konten blog selanjutnya di sini
            ];

            // Memuat konten blog yang sesuai ke dalam blog-container
            const blogContainer = document.getElementById('blog-container');
            blogContainer.innerHTML = blogContents[index - 1];
        }

        // Event listener untuk tombol "Next"
        const btnNext = document.getElementById('btn-next');
        btnNext.addEventListener('click', function() {
            currentBlogIndex++;
            // Jika mencapai blog terakhir, kembali ke blog pertama
            if (currentBlogIndex > 2) {
                currentBlogIndex = 1;
            }
            loadBlogContent(currentBlogIndex);
        });

        // Event listener untuk tombol "Previous"
        const btnPrevious = document.getElementById('btn-previous');
        btnPrevious.addEventListener('click', function() {
            currentBlogIndex--;
            // Jika mencapai blog pertama, kembali ke blog terakhir
            if (currentBlogIndex < 1) {
                currentBlogIndex = 2;
            }
            loadBlogContent(currentBlogIndex);
        });

        // Memuat konten blog pertama saat halaman pertama dimuat
        loadBlogContent(currentBlogIndex);