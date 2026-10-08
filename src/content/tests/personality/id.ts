import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Profil kepribadian",
  "desc": "Lihat posisimu pada lima sifat besar kepribadian, salah satu model yang paling banyak diteliti dalam psikologi.",
  "intro": "Kuesioner ini mengukur lima sifat kepribadian yang luas: keterbukaan terhadap pengalaman, keteraturan, ekstraversi, keramahan, dan kestabilan emosi. Ke-50 pernyataan ini diadaptasi dari IPIP, kumpulan butir soal berdomain publik yang dipakai dalam penelitian. Untuk setiap pernyataan, tunjukkan seberapa tepat pernyataan itu menggambarkan dirimu saat ini, bukan dirimu yang kamu inginkan. Tidak ada jawaban benar atau salah, dan tidak ada sifat yang lebih baik dari yang lain. Jawablah dengan jujur dan tanpa berpikir terlalu lama: kesan pertama biasanya yang paling tepat.",
  "scale": [
    "Sangat tidak setuju",
    "Tidak setuju",
    "Netral",
    "Setuju",
    "Sangat setuju"
  ],
  "items": [
    "Saya yang paling menghidupkan suasana di pesta.",
    "Saya tidak terlalu memedulikan orang lain.",
    "Saya selalu mempersiapkan diri jauh-jauh hari.",
    "Saya mudah stres.",
    "Saya punya kosakata yang kaya.",
    "Saya tidak banyak bicara.",
    "Saya tertarik pada orang-orang.",
    "Barang-barang saya sering berserakan di mana-mana.",
    "Hampir sepanjang waktu, saya tetap tenang.",
    "Saya sulit memahami ide-ide abstrak.",
    "Saya merasa nyaman berada di tengah orang lain.",
    "Saya melontarkan komentar yang menyinggung orang.",
    "Saya memperhatikan detail.",
    "Saya sering mengkhawatirkan banyak hal.",
    "Saya punya imajinasi yang hidup.",
    "Saya lebih suka berada di belakang layar.",
    "Saya peduli dengan perasaan orang lain.",
    "Saya sering membuat keadaan jadi berantakan.",
    "Saya jarang merasa murung.",
    "Ide-ide abstrak tidak menarik bagi saya.",
    "Saya sering memulai percakapan.",
    "Masalah orang lain tidak menarik bagi saya.",
    "Saya langsung mengerjakan tugas-tugas saya tanpa menunda.",
    "Perasaan saya mudah terguncang.",
    "Saya punya ide-ide yang sangat bagus.",
    "Saya biasanya tidak punya banyak hal untuk dikatakan.",
    "Saya berhati lembut.",
    "Saya sering lupa mengembalikan barang ke tempatnya.",
    "Saya mudah merasa kesal.",
    "Saya tidak punya banyak imajinasi.",
    "Di pesta, saya mengobrol dengan banyak orang yang berbeda.",
    "Sebenarnya, saya tidak terlalu tertarik pada orang lain.",
    "Saya suka segala sesuatu tertata rapi.",
    "Suasana hati saya sering berubah.",
    "Saya cepat memahami sesuatu.",
    "Saya tidak suka menarik perhatian.",
    "Saya meluangkan waktu untuk membantu orang lain.",
    "Saya menghindari kewajiban saya.",
    "Suasana hati saya sering naik turun.",
    "Saya menggunakan kata-kata yang sulit.",
    "Saya tidak keberatan menjadi pusat perhatian.",
    "Saya ikut merasakan emosi orang lain.",
    "Saya mengikuti rutinitas yang sudah direncanakan.",
    "Saya mudah jengkel.",
    "Saya meluangkan waktu untuk merenungkan berbagai hal.",
    "Saya pendiam di dekat orang yang belum saya kenal.",
    "Saya membuat orang lain merasa nyaman.",
    "Saya menuntut kualitas tinggi dari pekerjaan saya.",
    "Saya sering merasa murung.",
    "Kepala saya selalu penuh ide."
  ],
  "dims": {
    "openness": {
      "label": "Keterbukaan terhadap pengalaman",
      "desc": "Mengukur rasa ingin tahu, imajinasi, dan minat pada ide-ide baru, abstrak, atau yang berbeda dari biasanya.",
      "high": "Kamu suka menjelajahi ide, mempelajari hal-hal yang berbeda, dan membayangkan berbagai kemungkinan. Ini membantumu menciptakan solusi orisinal dan beradaptasi dengan perubahan. Yang perlu diperhatikan adalah perhatianmu bisa terpecah ke banyak minat sehingga proyek terhenti di tengah jalan.",
      "low": "Kamu lebih suka hal yang konkret, sudah dikenal, dan sudah terbukti dalam praktik. Ini memberimu fokus, akal sehat, dan efisiensi dalam tugas sehari-hari. Yang perlu diperhatikan adalah menolak ide baru terlalu cepat, sebelum memahami apa yang bisa ditawarkannya.",
      "tips": [
        "Sesekali coba hal baru, seperti buku dari genre lain atau rute pulang yang berbeda.",
        "Saat menghadapi ide yang berbeda, tanyakan \"apa yang berguna di sini?\" sebelum memutuskan.",
        "Kalau minatmu banyak, pilih satu per satu dan tuntaskan sampai selesai."
      ]
    },
    "conscientiousness": {
      "label": "Keteraturan",
      "desc": "Mengukur seberapa jauh kamu membuat rencana, menepati komitmen, dan memperhatikan detail, atau dengan kata lain, disiplin dan rasa tanggung jawabmu.",
      "high": "Kamu biasanya membuat rencana, menepati tenggat, dan memperhatikan detail, dan orang tahu mereka bisa mengandalkanmu. Yang perlu diperhatikan adalah tuntutan yang berlebihan: perfeksionisme dan kesulitan menghadapi hal tak terduga bisa membuatmu lelah.",
      "low": "Kamu menjalani tugas dengan fleksibel dan spontan, tanpa terikat rencana yang kaku. Ini membantumu berimprovisasi dan beradaptasi saat ada yang berubah. Yang perlu diperhatikan adalah menunda hal penting sampai menit terakhir atau kehilangan jejak tenggat waktu.",
      "tips": [
        "Pecah tugas besar menjadi langkah-langkah kecil dan beri tenggat untuk setiap langkah.",
        "Gunakan daftar atau agenda sederhana dan tinjau di awal hari.",
        "Tentukan apa yang \"sudah cukup baik\" sebelum mulai, supaya tidak terjebak perfeksionisme."
      ]
    },
    "extraversion": {
      "label": "Ekstraversi",
      "desc": "Mengukur seberapa jauh kamu mencari kebersamaan dengan orang lain, obrolan, dan suasana ramai, serta seberapa jauh hal itu mengisi ulang energimu.",
      "high": "Kamu mendapat energi saat bersama orang lain, mudah memulai obrolan, dan merasa nyaman di tempat yang ramai. Ini membantumu menjalin hubungan dan tampil di depan umum. Yang perlu diperhatikan adalah lebih banyak bicara daripada mendengar, atau kesulitan dengan tugas yang menuntut waktu sendirian.",
      "low": "Kamu lebih suka kelompok kecil, obrolan yang lebih mendalam, dan waktu tenang untuk mengisi ulang energi. Ini mendukung konsentrasi, kemampuan mendengarkan, dan kebiasaan berpikir sebelum bertindak. Yang perlu diperhatikan adalah tidak menunjukkan ide dan hasil kerjamu karena enggan menarik perhatian.",
      "tips": [
        "Perhatikan apa yang mengisi ulang energimu, bersama orang lain atau menyendiri, dan sisihkan waktu untuk itu.",
        "Dalam rapat, kalau kamu banyak bicara, ajukan satu pertanyaan sebelum menyampaikan pendapat; kalau kamu jarang bicara, coba bagikan setidaknya satu ide.",
        "Menjadi orang yang pendiam tidak sama dengan pemalu: kamu bisa menyukai ketenangan dan tetap berkomunikasi dengan sangat baik."
      ]
    },
    "agreeableness": {
      "label": "Keramahan",
      "desc": "Mengukur seberapa jauh kamu peduli pada orang lain, memercayai orang, dan lebih memilih bekerja sama daripada bersaing.",
      "high": "Kamu orang yang perhatian, hangat, dan mau membantu. Ini membangun hubungan yang saling percaya dan suasana yang baik di mana pun kamu berada. Yang perlu diperhatikan adalah selalu mendahulukan kebutuhan orang lain di atas kebutuhanmu sendiri dan sulit berkata tidak.",
      "low": "Kamu cenderung lugas, objektif, dan kritis, serta tidak takut menyatakan tidak setuju. Ini membantumu bernegosiasi, mempertahankan pendapat, dan mengambil keputusan sulit. Yang perlu diperhatikan adalah terdengar keras tanpa sengaja dan menjauhkan orang yang sebenarnya bisa bekerja sama denganmu.",
      "tips": [
        "Sebelum menyatakan tidak setuju, tunjukkan bahwa kamu memahami sudut pandang orang lain.",
        "Berlatihlah menolak dengan sopan permintaan yang mengganggu prioritasmu.",
        "Ingat bahwa bersikap baik dan bersikap tegas bisa berjalan bersamaan."
      ]
    },
    "stability": {
      "label": "Kestabilan emosi",
      "desc": "Mengukur seberapa jauh kamu tetap tenang saat menghadapi tekanan, kekhawatiran, dan kekecewaan. Skor tinggi menunjukkan ketenangan yang lebih besar; skor rendah, kepekaan yang lebih besar terhadap stres.",
      "high": "Kamu biasanya tetap tenang di bawah tekanan dan cepat bangkit dari hambatan. Ini memberi rasa aman bagi orang di sekitarmu dan membantumu berpikir jernih di saat sulit. Yang perlu diperhatikan adalah meremehkan masalah yang nyata atau tidak menyadari saat orang di dekatmu sedang kesulitan.",
      "low": "Kamu merasakan emosi dengan intens dan menyadari risiko serta masalah lebih cepat daripada banyak orang. Kepekaan ini membantumu bersiap dan menanggapi berbagai hal dengan serius. Yang perlu diperhatikan adalah rasa lelah: kekhawatiran dan stres yang sering datang itu menguras tenaga, jadi ada baiknya kamu punya strategi untuk menghadapinya.",
      "tips": [
        "Jaga hal-hal dasar: tidur, makan, dan aktivitas fisik berpengaruh pada suasana hati.",
        "Saat rasa khawatir muncul, tuliskan apa yang sedang kamu pikirkan dan apa langkah berikutnya yang bisa dilakukan.",
        "Kalau stres atau kesedihan mulai mengganggu rutinitasmu, bicarakan dengan tenaga profesional kesehatan mental."
      ]
    }
  },
  "resultTitle": "Profil kepribadianmu",
  "resultIntro": "Setiap batang menunjukkan posisimu di antara dua kutub sebuah sifat. Skor tinggi atau rendah tidak berarti baik atau buruk: setiap sisi punya kelebihan dan hal yang perlu diperhatikan.",
  "note": "Hasil ini adalah alat untuk mengenal diri berdasarkan jawabanmu sendiri. Hasil ini bukan diagnosis dan tidak menggantikan penilaian psikolog. Kepribadian juga bisa berubah sepanjang hidup dan tergantung pada konteks."
};

export default t;
