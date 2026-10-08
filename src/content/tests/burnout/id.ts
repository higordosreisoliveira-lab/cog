// burnout — Indonesian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Tingkat burnout',
  desc: 'Lihat apakah pekerjaan membuatmu kehabisan tenaga, menjauh dari apa yang kamu kerjakan, atau merasa bahwa usahamu tidak membuahkan hasil.',
  intro:
    'Burnout adalah kelelahan yang berkaitan dengan pekerjaan dan biasanya muncul dalam tiga bentuk: kelelahan berat, menjauh dari pekerjaan, dan hilangnya rasa pencapaian. Ada 15 pernyataan tentang tiga bulan terakhir. Untuk setiap pernyataan, tunjukkan seberapa sering hal itu terjadi padamu dalam periode tersebut. Jika kamu tidak punya pekerjaan formal, pikirkan aktivitas utamamu, seperti kuliah, usaha sendiri, atau merawat seseorang. Beberapa pernyataan menggambarkan situasi positif: jawablah dengan cara yang sama, hanya dengan memikirkan seberapa sering hal itu terjadi. Ini adalah penilaian diri berdasarkan jawabanmu, bukan diagnosis.',
  scale: ['Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Selalu'],
  items: [
    'Setelah jam kerja, tenaga saya hanya cukup untuk rebahan di sofa atau menggulir ponsel.',
    'Saya hanya mengerjakan yang paling minimal di tempat kerja, tanpa benar-benar terlibat dengan tugas-tugas saya.',
    'Saya mengakhiri hari kerja dengan perasaan bahwa usaha saya membuahkan hasil.',
    'Sehari sebelum kembali bekerja, saya merasa berat hanya dengan mengingat apa yang menanti.',
    'Saya memperlakukan rekan kerja, klien, atau orang yang saya layani dengan lebih dingin atau kurang sabar daripada yang saya inginkan.',
    'Saat menghadapi masalah di tempat kerja, saya yakin dengan kemampuan saya untuk menemukan jalan keluar.',
    'Bahkan setelah libur atau cuti, rasa lelah kembali muncul di hari-hari pertama bekerja.',
    'Saya merasa tidak ada bedanya apakah saya mengerjakan pekerjaan saya dengan baik atau buruk.',
    'Saya mempelajari sesuatu yang baru atau menjadi lebih baik dalam salah satu bagian pekerjaan saya.',
    'Saya butuh usaha yang sangat besar hanya untuk bisa bertahan sampai akhir hari kerja.',
    'Saya menghitung jam sampai waktu kerja selesai.',
    'Saya menyadari bahwa pekerjaan saya membantu seseorang, entah rekan kerja, klien, atau tim.',
    'Saya mengabaikan teman, keluarga, atau kegiatan yang saya sukai karena pekerjaan membuat saya kehabisan tenaga.',
    'Saya menghindari pesan, rapat, atau pembicaraan terkait pekerjaan setiap kali bisa.',
    'Saya merasa bangga dengan sesuatu yang saya kerjakan di tempat kerja.',
  ],
  dims: {
    exhaustion: {
      label: 'Kelelahan',
      desc: 'Mengukur kelelahan fisik dan mental yang berkaitan dengan pekerjaan, jenis lelah yang tidak hilang dengan tidur semalam atau istirahat di akhir pekan.',
      high: 'Pekerjaan menguras lebih banyak tenaga daripada yang bisa kamu pulihkan. Rasa lelah tidak tertinggal di jam kerja: ia ikut pulang bersamamu, ke hari liburmu, dan ke dalam hubunganmu. Ini biasanya tanda pertama bahwa ritme saat ini tidak bisa dipertahankan.',
      low: 'Kamu bisa memulihkan tenaga di antara satu hari kerja dan hari berikutnya. Rasa lelah memang muncul, seperti dalam rutinitas apa pun, tetapi tampaknya tidak menumpuk. Terus lindungi waktu istirahatmu.',
      tips: [
        'Tentukan jam untuk mengakhiri pekerjaan dan buat ritual kecil penutup hari, seperti menutup laptop lalu berjalan-jalan sebentar.',
        'Jaga tidurmu dan sisihkan waktu untuk bergerak, meskipun hanya jalan kaki singkat.',
        'Gunakan hari libur untuk benar-benar beristirahat, tanpa mengecek pesan pekerjaan.',
      ],
    },
    detachment: {
      label: 'Menjauh dari pekerjaan',
      desc: 'Mengukur seberapa jauh kamu menjauhkan diri dari pekerjaan dan orang-orang yang terkait dengannya, dengan keterlibatan yang berkurang, sikap yang lebih dingin, atau perasaan bahwa semuanya sama saja.',
      high: 'Kamu merasa ingin menjauh dari pekerjaan dan orang-orang yang terkait dengannya, hanya mengerjakan yang minimal dan kehilangan minat pada hal-hal yang dulu penting. Sering kali, menjauh seperti ini adalah cara melindungi diri dari kelelahan, bukan karena kurang berkarakter atau kurang berkomitmen. Ada baiknya memahami apa yang menyebabkannya dan apa yang bisa diubah.',
      low: 'Kamu tetap terlibat dengan pekerjaanmu dan orang-orang yang terkait dengannya. Bahkan di hari-hari sulit, pekerjaan itu tampaknya tetap punya makna bagimu. Ikatan ini membantu melindungimu dari kelelahan.',
      tips: [
        'Ingat kembali apa yang membuatmu memilih pekerjaan ini dan cari tugas yang paling dekat dengan hal itu.',
        'Bicarakan dengan atasan atau rekan kerja tentang apa yang membuat pekerjaan terasa kehilangan makna, seperti target yang tidak realistis atau kurangnya keleluasaan.',
        'Bangun hubungan yang saling mendukung di tempat kerja: obrolan yang jujur dengan rekan yang kamu percaya bisa sangat meringankan.',
      ],
    },
    efficacy: {
      label: 'Rasa pencapaian rendah',
      desc: 'Mengukur seberapa kurang rasa bahwa pekerjaanmu membuahkan hasil, bahwa kamu mampu, dan bahwa kamu sedang berkembang. Pernyataan di bagian ini bersifat positif, jadi skornya naik saat hal-hal itu jarang terjadi.',
      high: 'Kamu jarang merasa bahwa usahamu membuahkan hasil, bahwa kamu mampu, atau bahwa pekerjaanmu membawa perbedaan. Perasaan ini bisa berasal dari kelelahan itu sendiri, yang mengaburkan cara kamu memandang kinerjamu, atau dari lingkungan yang kurang memberi pengakuan. Perasaan ini tidak mengukur nilaimu sebagai seorang profesional.',
      low: 'Kamu tetap merasakan bahwa pekerjaanmu membuahkan hasil, bahwa kamu mampu menyelesaikan masalah, dan bahwa kamu terus belajar. Rasa pencapaian ini membantu menjaga motivasi bahkan di masa-masa yang paling berat.',
      tips: [
        'Di akhir minggu, catat tiga hal yang sudah kamu selesaikan atau atasi, sekecil apa pun.',
        'Minta masukan tentang pekerjaanmu dari orang yang kamu percaya, agar kamu punya gambaran yang lebih seimbang tentang kinerjamu.',
        'Cari tantangan kecil atau hal baru untuk dipelajari yang bisa mengembalikan rasa berkembang.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Sedikit tanda burnout',
      text: 'Jawabanmu menunjukkan sedikit tanda burnout. Kamu tampaknya tetap punya tenaga, keterlibatan, dan rasa pencapaian di tempat kerja, meskipun ada kesulitan yang wajar dalam rutinitas. Terus jaga batasan dan kebiasaan yang membantumu mempertahankan keseimbangan ini.',
    },
    moderate: {
      label: 'Tanda burnout sedang',
      text: 'Jawabanmu menunjukkan beberapa tanda kelelahan yang berkaitan dengan pekerjaan. Ini saat yang tepat untuk bertindak, sebelum rasa lelah menumpuk. Perhatikan apa yang paling membebanimu, coba saran di bawah ini, dan jika memungkinkan, bicarakan dengan atasan tentang penyesuaian dalam rutinitas kerjamu.',
    },
    high: {
      label: 'Tanda burnout kuat',
      text: 'Jawabanmu menunjukkan tanda-tanda burnout yang kuat, seperti kelelahan yang besar, menjauh dari pekerjaan, dan rasa pencapaian yang rendah. Kelelahan seperti ini biasanya membutuhkan perubahan nyata dalam rutinitas, bukan sekadar tekad yang lebih kuat. Temui tenaga profesional, seperti psikolog atau dokter, untuk menilai keadaanmu dan jalan mana yang masuk akal dalam kasusmu.',
    },
  },
  resultTitle: 'Tingkat burnout-mu',
  resultIntro: 'Hasil ini menjumlahkan jawabanmu tentang tiga bulan terakhir. Untuk pernyataan tentang pencapaian, penghitungannya dibalik: makin jarang kamu merasakan pencapaian, makin tinggi hasilnya. Di bawah ini, kamu bisa melihat rentang hasilmu dan skormu di setiap bagian.',
  note: 'Kuesioner ini adalah alat untuk mengenal diri, berdasarkan persepsimu sendiri. Burnout adalah kelelahan yang berkaitan dengan pekerjaan dan, dengan sendirinya, bukan diagnosis medis. Tanda-tanda serupa juga muncul pada depresi, kecemasan, dan masalah kesehatan fisik, dan hanya tenaga profesional yang berkualifikasi yang bisa melakukan penilaian tersebut.',
  help: 'Jika pekerjaan memengaruhi kesehatanmu, temui psikolog atau dokter umum. Layanan kesehatan setempat bisa memberikan penanganan dan merujukmu ke layanan kesehatan jiwa jika diperlukan. Jika perusahaanmu punya layanan kesehatan kerja atau program bantuan karyawan, layanan itu juga bisa membantu. Jika kamu sedang mengalami tekanan yang sangat berat, hubungi layanan krisis atau dukungan emosional di negaramu. Dalam keadaan darurat, hubungi nomor darurat setempat (112).',
};

export default t;
