// dopamine — Indonesian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Tes dopamin',
  desc: 'Lihat bagaimana kebiasaanmu yang berkaitan dengan sistem penghargaan di otak: rangsangan instan, rasa bosan, layar, dan tujuan jangka panjang.',
  intro:
    'Kuesioner ini melihat kebiasaan sehari-hari yang berkaitan dengan sistem penghargaan (reward) di otak. Dopamin adalah zat yang digunakan otak untuk mengirimkan sinyal dan berkaitan dengan motivasi serta dorongan mencari imbalan. Penting: meskipun namanya populer begitu, tes ini tidak mengukur dopamin di tubuhmu. Tidak ada kuesioner yang bisa melakukannya, dan pemeriksaan medis yang mampu menilai dopamin bersifat khusus dan jarang digunakan untuk tujuan ini. Yang dinilai oleh tes ini adalah empat area kebiasaan: mencari imbalan instan, kesulitan menghadapi rasa bosan, motivasi untuk tujuan jangka panjang, dan kebiasaan menatap layar. Ada 16 pernyataan. Pikirkan 2 minggu terakhir dan tunjukkan seberapa sering setiap situasi terjadi padamu. Jawablah dengan jujur dan tanpa berpikir terlalu lama: tidak ada jawaban yang benar atau salah.',
  scale: ['Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Selalu'],
  items: [
    'Saya menghabiskan lebih banyak waktu daripada yang saya rencanakan untuk menonton video pendek atau menjelajahi media sosial.',
    'Saat menunggu, seperti dalam antrean atau di kendaraan umum, saya sulit berdiam diri tanpa melakukan apa-apa.',
    'Saya bisa menekuni sebuah tujuan selama berminggu-minggu, bahkan saat hasilnya belum terlihat.',
    'Saya mengambil ponsel dalam beberapa menit pertama setelah bangun tidur.',
    'Saya membeli barang secara impulsif, terutama lewat internet, lalu menyadari bahwa saya tidak membutuhkannya.',
    'Saya kehilangan kesabaran dengan tugas yang lambat atau berulang-ulang dan berhenti sebelum selesai.',
    'Saya bisa melepaskan kesenangan sesaat saat hal itu mengganggu sesuatu yang penting untuk masa depan saya.',
    'Saya bermain ponsel di tempat tidur dan akhirnya tidur lebih larut daripada yang saya rencanakan.',
    'Saat merasa lelah atau tidak bersemangat, saya mencari sesuatu yang memberi kesenangan instan, seperti makanan manis, camilan, atau video.',
    'Saya sulit membaca tulisan yang panjang atau menonton film sampai habis tanpa teralihkan oleh hal lain.',
    'Saya mulai mengerjakan tugas-tugas penting pada jam yang sudah saya rencanakan, tanpa menundanya demi melakukan sesuatu yang lebih seru.',
    'Saya membuka kunci ponsel tanpa alasan yang jelas, hanya karena kebiasaan.',
    'Saat ada notifikasi masuk, saya menghentikan apa yang sedang saya lakukan untuk melihat isinya.',
    'Kegiatan sederhana, seperti memasak atau berjalan kaki, terasa membosankan bagi saya jika tidak sambil menonton atau mendengarkan sesuatu.',
    'Saya merasa puas dengan kemajuan dalam proyek jangka panjang, seperti belajar, berolahraga, atau menabung.',
    'Saya menggunakan lebih dari satu layar sekaligus, seperti menonton serial sambil melihat ponsel.',
  ],
  dims: {
    quickRewards: {
      label: 'Imbalan instan',
      desc: 'Mengukur seberapa sering kamu beralih ke kesenangan sesaat, seperti media sosial, video pendek, notifikasi, belanja impulsif, dan camilan.',
      high: 'Kamu sering beralih ke rangsangan instan, sering kali untuk beristirahat atau mengubah suasana hati. Ini umum dan bukan sebuah kekurangan: banyak dari rangsangan ini memang dirancang untuk menarik perhatianmu. Yang perlu diperhatikan adalah saat rangsangan itu menyita waktu untuk hal-hal yang lebih penting bagimu atau meninggalkan perasaan telah membuang waktu.',
      low: 'Kamu jarang beralih ke kesenangan sesaat dan biasanya memilih dengan sengaja cara menggunakan waktu luangmu. Ini membantumu tetap fokus dan menikmati waktu istirahat dengan lebih baik. Tetap perhatikan hari-hari saat kamu lelah, karena keinginan akan rangsangan instan biasanya meningkat.',
      tips: [
        'Matikan notifikasi yang tidak penting dan biarkan hanya notifikasi dari orang dan layanan yang benar-benar penting.',
        'Sebelum membuka aplikasi, tentukan apa yang ingin kamu lakukan di sana dan berapa lama.',
        'Untuk belanja daring yang tidak direncanakan, tunggu 24 jam sebelum menyelesaikan pesanan.',
      ],
    },
    boredom: {
      label: 'Kesulitan menghadapi rasa bosan',
      desc: 'Mengukur seberapa sulit bagimu untuk berada tanpa rangsangan, menunggu, atau berkonsentrasi pada tugas yang lambat dan berulang-ulang.',
      high: 'Saat-saat menunggu dan tugas yang lambat cenderung terasa tidak nyaman bagimu, dan keinginan mencari sesuatu yang lebih menarik cepat muncul. Ini sangat umum dalam rutinitas yang penuh rangsangan. Daya tahan terhadap rasa bosan bisa dilatih sedikit demi sedikit, seperti kebiasaan lainnya.',
      low: 'Kamu bisa menghadapi waktu menunggu, jeda, dan tugas yang menuntut kesabaran dengan baik. Ini membantumu berkonsentrasi lebih lama dan menyelesaikan apa yang kamu mulai. Saat-saat tanpa rangsangan juga memberi ruang bagi pikiran untuk beristirahat dan memunculkan ide-ide baru.',
      tips: [
        'Latih diri beberapa menit setiap hari tanpa rangsangan, seperti menunggu dalam antrean atau menempuh perjalanan singkat tanpa mengambil ponsel.',
        'Untuk tugas yang panjang, bekerjalah dalam blok 20 sampai 25 menit, dengan jeda singkat di antaranya.',
        'Sesekali, lakukan satu hal dalam satu waktu, seperti makan tanpa layar atau berjalan kaki tanpa earphone.',
      ],
    },
    longTerm: {
      label: 'Tujuan jangka panjang',
      desc: 'Mengukur motivasi untuk tujuan yang butuh waktu lama untuk membuahkan hasil, seperti belajar, berolahraga, atau menabung. Di sini, skor tinggi menunjukkan lebih banyak kesulitan mempertahankan tujuan seperti ini; skor rendah, lebih banyak kemudahan.',
      high: 'Menjaga motivasi untuk tujuan yang butuh waktu terasa sulit bagimu belakangan ini, terutama saat ada pilihan yang lebih cepat dan menyenangkan di dekatmu. Ini tidak berarti kamu kurang mampu: tujuan jangka panjang hanya memberi sedikit imbalan di awal, dan otak cenderung memilih yang instan. Membagi perjalanan menjadi langkah-langkah yang lebih kecil biasanya sangat membantu.',
      low: 'Kamu bisa mempertahankan usaha untuk tujuan yang butuh waktu lama untuk membuahkan hasil dan menghargai kemajuan yang dicapai sedikit demi sedikit. Kemampuan ini membantumu membangun pencapaian yang bertahan lama dalam studi, pekerjaan, dan kesehatan. Yang perlu diperhatikan adalah jangan sampai mengabaikan istirahat dan waktu bersantai di sepanjang jalan.',
      tips: [
        'Bagi setiap tujuan besar menjadi langkah-langkah kecil dan hargai setiap langkah yang selesai dengan imbalan sederhana.',
        'Catat kemajuanmu di kalender atau aplikasi untuk melihat seberapa jauh kamu sudah melangkah.',
        'Kerjakan tugas-tugas penting di jam saat kamu biasanya paling bertenaga, sebelum membuka media sosial atau aplikasi lain.',
      ],
    },
    screens: {
      label: 'Kebiasaan menatap layar',
      desc: 'Mengukur bagaimana ponsel dan layar lain hadir dalam rutinitasmu: saat bangun tidur, sebelum tidur, saat mengecek ponsel tanpa alasan, dan saat menggunakan beberapa layar sekaligus.',
      high: 'Layar hadir di banyak momen dalam harimu, termasuk begitu bangun tidur dan saat mau tidur. Ini umum di masa sekarang, tetapi penggunaan di malam hari bisa menunda dan mengganggu tidur, dan mengecek ponsel terus-menerus memecah perhatian. Perubahan kecil di lingkungan sekitar biasanya lebih berhasil daripada hanya mengandalkan tekad.',
      low: 'Kamu menggunakan layar dengan lebih sengaja dan menjaga beberapa momen dalam sehari bebas dari layar, seperti awal pagi dan saat mau tidur. Ini mendukung tidur, konsentrasi, dan istirahat. Pertahankan batasan ini, terutama di masa-masa yang lebih sibuk.',
      tips: [
        'Letakkan ponsel di luar kamar tidur pada malam hari dan gunakan jam weker biasa.',
        'Hindari layar 30 sampai 60 menit sebelum tidur dan usahakan jam tidur yang teratur.',
        'Saat istirahat di siang hari, ganti ponsel dengan sedikit gerakan, seperti jalan kaki singkat atau peregangan.',
      ],
    },
  },
  bands: {
    balanced: {
      label: 'Seimbang',
      text: 'Jawabanmu menunjukkan hubungan yang seimbang dengan rangsangan instan dan layar. Kamu tampaknya bisa menghadapi rasa bosan dengan baik dan menjaga motivasi untuk tujuan yang butuh waktu. Terus rawat kebiasaan yang membantumu, seperti tidur yang teratur dan waktu jauh dari layar.',
    },
    attention: {
      label: 'Perlu perhatian',
      text: 'Jawabanmu menunjukkan bahwa beberapa kebiasaan rangsangan instan sudah mengambil tempat yang cukup besar dalam rutinitasmu. Ini sangat umum dan bukan alasan untuk khawatir. Perhatikan area mana yang skornya paling tinggi dan pilih satu atau dua perubahan kecil untuk dicoba dalam beberapa minggu ke depan.',
    },
    overloaded: {
      label: 'Kelebihan rangsangan',
      text: 'Jawabanmu menunjukkan bahwa rangsangan instan dan layar sangat banyak hadir dalam harimu, dan bahwa menunggu, berkonsentrasi, atau mempertahankan tujuan jangka panjang mungkin terasa lebih sulit. Ini makin umum dan bisa berubah dengan penyesuaian kebiasaan secara bertahap, tanpa pemotongan drastis. Mulailah dengan mengurangi rangsangan berlebih di satu atau dua momen dalam sehari, seperti saat bangun tidur dan sebelum tidur, lalu perhatikan bagaimana perasaanmu.',
    },
  },
  resultTitle: 'Kebiasaan imbalanmu',
  resultIntro:
    'Hasil ini menjumlahkan keempat area dan menunjukkan seberapa besar kebiasaanmu saat ini bergantung pada rangsangan instan. Ingat: hasil ini tidak mengukur dopamin di tubuhmu, melainkan pola perilaku yang bisa berubah seiring waktu dan latihan.',
  note: 'Tes ini adalah alat untuk mengenal diri berdasarkan jawabanmu sendiri. Tes ini tidak mengukur dopamin atau zat lain apa pun di dalam tubuh, bukan pemeriksaan medis, dan tidak dapat digunakan untuk diagnosis. Mengurangi rangsangan berlebih bisa membantu sebagai perubahan kebiasaan, tetapi bukan pengobatan medis. Jika ada kebiasaan yang terasa di luar kendalimu atau merugikan hidupmu, bicarakan dengan tenaga kesehatan.',
  help: 'Jika kamu merasa tidak bisa mengendalikan penggunaan ponsel, gim elektronik, judi, atau belanja, atau jika hal itu memengaruhi tidur, pekerjaan, keuangan, atau hubunganmu, temui psikolog atau dokter. Untuk kecanduan gim, judi, atau belanja kompulsif, ada juga layanan dan kelompok dukungan khusus yang bisa membantu.',
};

export default t;
