// categories.js dosyası
const categories = [
    { value: '', text: 'Tüm Kategoriler' },
    { value: 'Korku', text: 'Korku' },
    { value: 'Macera', text: 'Macera' },
    { value: 'FPS', text: 'FPS' },
    { value: '2D', text: '2D' },
    { value: '3D', text: '3D' },
    { value: 'Tek Oyunculu', text: 'Tek Oyunculu' },
    { value: 'Çok Oyunculu', text: 'Çok Oyunculu' },
    { value: 'Strateji', text: 'Strateji' },
    { value: 'İki Kişilik', text: 'İki Kişilik' },
    { value: 'Simülasyon', text: 'Simülasyon' },
    { value: 'Kasa Açma', text: 'Kasa Açma' },
    { value: 'Pixel Art', text: 'Pixel Art' },
    { value: 'Skor Tablosu', text: 'Skor Tablosu' }
];


function updateCategories() {
    const kategoriSelect = document.getElementById('kategoriSelect');
        kategoriSelect.innerHTML = ''; // Önce mevcut seçenekleri temizle

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.value;
            option.textContent = category.text;
            kategoriSelect.appendChild(option);
        });
    }

    // Sayfa yüklendiğinde kategorileri güncelle
    document.addEventListener('DOMContentLoaded', function() {
        updateCategories(); // Kategorileri dinamik olarak ekle
    });


    document.addEventListener('DOMContentLoaded', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const closeBtn = document.querySelector('.lightbox-close');

      document.querySelectorAll('.mini-gorseller img').forEach(img => {
        img.addEventListener('click', () => {
          lightbox.style.display = 'block';
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
      });
    });

      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

      window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.style.display = 'none';
      }
  });
  });
