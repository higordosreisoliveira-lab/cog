import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Minat karier",
  "desc": "Temukan jenis kegiatan yang paling cocok denganmu dan kenali profesi yang berkaitan dengan minatmu.",
  "intro": "Kuesioner ini didasarkan pada model Holland, yang mengelompokkan minat karier ke dalam enam tipe: praktis, investigatif, artistik, sosial, wirausaha, dan administratif. Ada 36 kegiatan. Untuk setiap kegiatan, tunjukkan seberapa besar keinginanmu untuk melakukannya, tanpa memikirkan gaji, pendidikan, atau apakah kamu sudah bisa melakukannya. Tidak ada jawaban yang benar: tujuannya adalah memetakan apa yang membangkitkan minatmu.",
  "scale": [
    "Sangat tidak setuju",
    "Tidak setuju",
    "Netral",
    "Setuju",
    "Sangat setuju"
  ],
  "items": [
    "Saya ingin mencari tahu mengapa sebuah alat berhenti berfungsi lalu memperbaikinya.",
    "Saya ingin melakukan eksperimen untuk menguji apakah sebuah ide berhasil dalam praktik.",
    "Saya ingin menulis cerita, naskah, atau lirik lagu.",
    "Saya ingin mengajarkan hal baru kepada sekelompok orang.",
    "Saya ingin membuka dan mengelola usaha saya sendiri.",
    "Saya ingin merapikan spreadsheet, berkas, dan catatan agar semuanya mudah ditemukan.",
    "Saya ingin membangun atau merakit sesuatu dengan tangan saya sendiri.",
    "Saya ingin menganalisis data untuk menemukan penyebab suatu masalah.",
    "Saya ingin membuat identitas visual sebuah merek, seperti logo dan warnanya.",
    "Saya ingin mendengarkan dan membimbing orang yang sedang melewati masa sulit.",
    "Saya ingin bernegosiasi dengan klien dan menutup penjualan.",
    "Saya ingin memantau utang dan piutang sebuah perusahaan.",
    "Saya ingin bekerja di luar ruangan, di tempat seperti proyek konstruksi, lahan pertanian, atau taman.",
    "Saya ingin meneliti cara kerja tubuh manusia dan makhluk hidup lainnya.",
    "Saya ingin tampil di panggung, bernyanyi, bermain musik, atau berakting.",
    "Saya ingin menjaga kesehatan dan kesejahteraan orang lain.",
    "Saya ingin memimpin tim untuk mencapai target.",
    "Saya ingin memeriksa dokumen dengan teliti untuk memastikan tidak ada kesalahan.",
    "Saya ingin mengoperasikan mesin, kendaraan, atau alat presisi.",
    "Saya ingin memahami secara mendalam cara kerja sebuah teknologi baru.",
    "Saya ingin memotret atau merekam video, lalu menyunting hasilnya.",
    "Saya ingin mendampingi dan mendukung perkembangan anak-anak atau remaja.",
    "Saya ingin mempresentasikan sebuah ide untuk meyakinkan investor atau jajaran direksi perusahaan.",
    "Saya ingin mengelola stok, pesanan, dan jadwal pengiriman.",
    "Saya ingin merawat tanaman atau hewan setiap hari.",
    "Saya ingin membaca studi ilmiah dan menarik kesimpulan sendiri.",
    "Saya ingin merancang pakaian, benda, atau dekorasi ruangan.",
    "Saya ingin membantu orang menyelesaikan konflik dan saling memahami dengan lebih baik.",
    "Saya ingin menyusun strategi agar sebuah produk berkembang di pasar.",
    "Saya ingin memeriksa apakah sebuah perusahaan mematuhi aturan dan undang-undang.",
    "Saya ingin memasang instalasi listrik atau pipa air di sebuah bangunan.",
    "Saya ingin memecahkan soal matematika atau logika yang rumit.",
    "Saya ingin mencetuskan ide orisinal untuk sebuah kampanye atau proyek kreatif.",
    "Saya ingin ikut serta dalam proyek yang membantu masyarakat di tempat tinggal saya.",
    "Saya ingin mengambil keputusan penting, meskipun ada risikonya.",
    "Saya ingin mengatur jadwal dan rutinitas sebuah kantor."
  ],
  "dims": {
    "realistic": {
      "label": "Praktis",
      "desc": "Minat pada kegiatan yang konkret: menggunakan tangan, perkakas, dan mesin, membangun, memperbaiki, dan bekerja di luar ruangan.",
      "high": "Kamu suka melihat hasil yang nyata dan memecahkan masalah dengan tanganmu sendiri. Lingkungan dengan tugas yang jelas dan praktis cenderung memotivasimu. Perlu diingat, banyak karier di bidang ini juga menuntut pendidikan teknis dan pembaruan pengetahuan secara terus-menerus.",
      "low": "Kegiatan manual, mekanis, atau di luar ruangan kurang menarik minatmu. Kamu mungkin lebih nyaman berurusan dengan ide, orang, atau informasi. Meski begitu, beberapa keterampilan praktis dasar tetap berguna di bidang apa pun.",
      "tips": [
        "Ikuti kursus singkat tentang keterampilan manual atau teknis untuk menguji minatmu.",
        "Ngobrol dengan orang yang bekerja di bidang ini tentang seperti apa rutinitas kerja yang sebenarnya.",
        "Pertimbangkan pendidikan vokasi, seperti SMK atau program diploma, yang biasanya menjadi jalan masuk cepat ke karier-karier ini."
      ],
      "examples": [
        "Teknik sipil",
        "Teknik mesin",
        "Teknisi listrik",
        "Agronomi",
        "Pilot",
        "Tata boga",
        "Pengrajin mebel",
        "Teknisi perawatan mesin industri"
      ]
    },
    "investigative": {
      "label": "Investigatif",
      "desc": "Minat untuk mengamati, meneliti, menganalisis, dan memahami cara kerja sesuatu, baik di bidang sains, teknologi, maupun kesehatan.",
      "high": "Kamu suka pertanyaan yang sulit, menyelidiki penyebab, dan memahami sesuatu secara mendalam. Lingkungan yang menghargai penalaran dan kemandirian cenderung memotivasimu. Yang perlu diperhatikan adalah terlalu larut dalam analisis dan lambat beralih ke tindakan.",
      "low": "Riset, analisis data, dan teori kurang menarik minatmu. Kamu mungkin lebih suka menerapkan solusi daripada mempelajari sebuah masalah terlalu lama. Meski begitu, kemampuan mencari informasi yang tepercaya berguna dalam profesi apa pun.",
      "tips": [
        "Ikuti konten sains populer tentang topik yang menarik perhatianmu.",
        "Ikut serta dalam proyek penelitian, olimpiade sains, atau kursus online.",
        "Coba analisis data nyata di spreadsheet untuk melihat apakah kamu menyukai tugas semacam ini."
      ],
      "examples": [
        "Kedokteran",
        "Biologi",
        "Sains data",
        "Kimia",
        "Farmasi",
        "Pengembangan perangkat lunak",
        "Peneliti ilmiah",
        "Geologi"
      ]
    },
    "artistic": {
      "label": "Artistik",
      "desc": "Minat untuk berkarya, mengekspresikan diri, dan bekerja dengan ide-ide orisinal, baik lewat gambar, kata-kata, musik, gerak, maupun desain.",
      "high": "Kamu suka berkarya, berimajinasi, dan mewujudkan ide-idemu sendiri. Lingkungan yang memberi kebebasan, variasi, dan ruang untuk orisinalitas cenderung memotivasimu. Yang perlu diperhatikan adalah menghadapi tenggat, aturan, dan bagian-bagian berulang yang juga ada dalam setiap pekerjaan kreatif.",
      "low": "Kegiatan seni dan ekspresi diri kurang menarik minatmu. Kamu mungkin lebih suka tujuan yang jelas dan hasil yang lebih bisa diprediksi. Namun, kreativitas juga muncul dalam cara memecahkan masalah, di bidang apa pun.",
      "tips": [
        "Buat portofolio sederhana berisi karyamu, meskipun berupa proyek pribadi.",
        "Ikuti lokakarya singkat di bidang kreatif yang berbeda dari yang sudah kamu kenal.",
        "Cari tahu bagaimana para profesional kreatif menggabungkan seni dengan keterampilan lain, seperti teknologi atau bisnis."
      ],
      "examples": [
        "Desain komunikasi visual",
        "Arsitektur",
        "Periklanan",
        "Fotografi",
        "Musik",
        "Seni pertunjukan",
        "Desain mode",
        "Produksi film dan televisi"
      ]
    },
    "social": {
      "label": "Sosial",
      "desc": "Minat untuk membantu, mengajar, merawat, dan membimbing orang, serta berkontribusi pada kesejahteraan dan perkembangan mereka.",
      "high": "Kamu termotivasi saat pekerjaanmu membawa perubahan dalam hidup orang lain. Mendengarkan, mengajar, dan merawat adalah kegiatan yang memberi makna pada harimu. Yang perlu diperhatikan adalah terbebani oleh masalah orang lain dan lupa merawat dirimu sendiri.",
      "low": "Kegiatan yang berpusat pada merawat, mengajar, atau menasihati orang kurang menarik minatmu. Kamu mungkin lebih suka berurusan dengan tugas, benda, data, atau ide. Meski begitu, kemampuan bekerja sama tetap penting di hampir semua pekerjaan.",
      "tips": [
        "Jadilah relawan untuk tujuan yang penting bagimu dan perhatikan bagaimana perasaanmu.",
        "Coba jelaskan sesuatu yang kamu kuasai kepada orang lain, misalnya sebagai tutor atau guru les privat.",
        "Ngobrol dengan tenaga kesehatan, pendidik, atau pekerja sosial tentang tantangan dalam rutinitas mereka."
      ],
      "examples": [
        "Psikologi",
        "Pendidikan guru",
        "Keperawatan",
        "Kesejahteraan sosial",
        "Fisioterapi",
        "Pendidikan jasmani",
        "Terapi wicara",
        "Sumber daya manusia"
      ]
    },
    "enterprising": {
      "label": "Wirausaha",
      "desc": "Minat untuk memimpin, meyakinkan, bernegosiasi, dan mengambil keputusan demi mencapai target, baik di perusahaan, penjualan, maupun proyek sendiri.",
      "high": "Kamu suka mengambil inisiatif, meyakinkan orang, dan melihat target tercapai. Lingkungan yang dinamis, penuh tantangan, dan menghargai hasil cenderung memotivasimu. Yang perlu diperhatikan adalah terburu-buru memutuskan dan kecenderungan meremehkan risiko atau detail.",
      "low": "Memimpin, menjual, dan bernegosiasi kurang menarik minatmu. Kamu mungkin lebih suka berkontribusi lewat pengetahuan atau hasil kerjamu tanpa berada di pusat pengambilan keputusan. Meski begitu, kemampuan mempertahankan idemu berguna di karier apa pun.",
      "tips": [
        "Pimpin sebuah proyek kecil, di tempat kerja, di sekolah atau kampus, atau di lingkunganmu.",
        "Uji ide bisnis dalam skala kecil sebelum menanamkan banyak waktu atau uang.",
        "Pelajari dasar-dasar keuangan, negosiasi, dan komunikasi."
      ],
      "examples": [
        "Manajemen bisnis",
        "Hukum",
        "Pemasaran",
        "Penjualan dan manajemen komersial",
        "Hubungan masyarakat",
        "Manajemen proyek",
        "Agen properti",
        "Perdagangan internasional"
      ]
    },
    "conventional": {
      "label": "Administratif",
      "desc": "Minat untuk mengatur informasi, mengikuti proses yang jelas, dan mengelola data, angka, serta dokumen dengan cermat.",
      "high": "Kamu suka keteraturan, aturan yang jelas, dan mengetahui persis apa yang harus dikerjakan. Lingkungan yang terstruktur dan menghargai ketelitian cenderung memotivasimu. Yang perlu diperhatikan adalah menghadapi perubahan yang cepat dan situasi tanpa prosedur yang jelas.",
      "low": "Rutinitas, spreadsheet, dan prosedur yang mendetail kurang menarik minatmu. Kamu mungkin lebih suka variasi dan kebebasan untuk mengerjakan sesuatu dengan caramu sendiri. Meski begitu, sedikit keteraturan memudahkan pekerjaan di bidang apa pun.",
      "tips": [
        "Belajarlah menggunakan spreadsheet dan alat bantu pengorganisasian dengan baik, keterampilan yang berguna di banyak karier.",
        "Ambil alih urusan keuangan atau pengaturan sebuah proyek dan lihat apakah kamu menyukai tugas semacam ini.",
        "Cari tahu tentang bidang seperti akuntansi, logistik, dan audit, yang ada di hampir semua jenis perusahaan."
      ],
      "examples": [
        "Akuntansi",
        "Audit",
        "Logistik",
        "Sekretaris eksekutif",
        "Analis keuangan",
        "Ilmu perpustakaan",
        "Pengendalian mutu",
        "Manajemen pengadaan"
      ]
    }
  },
  "resultTitle": "Tipe minatmu",
  "resultIntro": "Kami menyoroti tiga tipe dengan skor tertinggi. Kebanyakan orang memadukan lebih dari satu tipe, dan setiap profesi menghargai perpaduan yang berbeda. Gunakan saran ini sebagai titik awal untuk mencari informasi dan berbincang dengan orang yang sudah bekerja di bidang tersebut.",
  "note": "Hasil ini menunjukkan minat, bukan kemampuan atau peluang sukses. Ini adalah alat untuk mengenal diri dan tidak menggantikan bimbingan karier dari tenaga ahli."
};

export default t;
