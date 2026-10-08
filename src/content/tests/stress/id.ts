// stress — Indonesian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Tingkat stres',
  desc: 'Lihat seberapa berat beban yang kamu rasakan dalam sebulan terakhir dan bagaimana kemampuanmu untuk memulihkan diri.',
  intro:
    'Kuesioner ini menilai stres dari dua sisi: beban dan tekanan yang kamu rasakan, serta rasa kendali dan pemulihan yang membantu menyeimbangkan beban itu. Ada 12 pernyataan tentang sebulan terakhir. Untuk setiap pernyataan, tunjukkan seberapa sering hal itu terjadi padamu dalam periode tersebut. Beberapa pernyataan menggambarkan situasi positif: jawablah dengan cara yang sama, hanya dengan memikirkan seberapa sering hal itu terjadi. Ini adalah penilaian diri berdasarkan jawabanmu dan tidak menggantikan penilaian tenaga profesional.',
  scale: ['Tidak pernah', 'Hampir tidak pernah', 'Kadang-kadang', 'Sering', 'Sangat sering'],
  items: [
    'Tugas dan tanggung jawab saya terasa lebih banyak daripada jam yang tersedia dalam sehari.',
    'Saya bisa menyisihkan waktu untuk beristirahat, tanpa merasa bersalah.',
    'Saya mengakhiri hari dengan perasaan bahwa urusan yang belum selesai terus bertambah.',
    'Saat muncul masalah, saya bisa berhenti sejenak dan memikirkan dengan tenang apa yang harus dilakukan.',
    'Saya merasakan tuntutan yang kuat, dari orang lain atau dari diri sendiri, untuk menyelesaikan semuanya.',
    'Saya merasa bisa mengatur hari saya sesuai kebutuhan.',
    'Saya kehilangan kesabaran karena hal-hal yang biasanya tidak mengganggu saya.',
    'Setelah hari yang berat, tidur malam yang nyenyak atau waktu bersantai sudah cukup untuk memulihkan saya.',
    'Saya terus memikirkan urusan yang belum selesai bahkan di saat yang seharusnya untuk beristirahat.',
    'Saya punya seseorang yang bisa diandalkan saat perlu mencurahkan isi hati atau meminta bantuan.',
    'Saya merasakan tanda-tanda fisik ketegangan, seperti sakit kepala, rahang terkatup kaku, atau rasa lelah yang tidak kunjung hilang.',
    'Saya bisa menolak atau menunda permintaan saat sudah terlalu banyak urusan.',
  ],
  dims: {
    load: {
      label: 'Beban dan tekanan',
      desc: 'Mengukur seberapa besar kamu merasakan tugas, tuntutan, dan ketegangan yang berlebihan, dan seberapa jauh hal itu tetap menyertaimu bahkan di waktu istirahat.',
      high: 'Dalam sebulan terakhir, rasa terbebani sering muncul: banyak hal yang harus dikerjakan, banyak tuntutan, dan sedikit ruang untuk pikiran beristirahat. Tubuh dan pikiran bisa bertahan dengan ritme ini untuk sementara waktu, tetapi ada harga yang harus dibayar jika berlangsung lama. Ada baiknya melihat apa yang bisa dikurangi, dibagi, atau ditunda.',
      low: 'Dalam sebulan terakhir, tekanan jarang muncul atau tetap berada di tingkat yang bisa kamu kelola. Ini tidak berarti tidak ada tantangan, tetapi tantangan itu tampaknya tidak menumpuk. Perhatikan apa yang selama ini berhasil menjaga keseimbangan ini.',
      tips: [
        'Buat daftar tugas minggu ini dan pisahkan mana yang benar-benar mendesak, mana yang bisa menunggu, dan mana yang bisa dibagi dengan orang lain.',
        'Ambil jeda singkat sepanjang hari, jauh dari layar, meskipun hanya lima menit.',
        'Tetapkan batasan yang jelas, seperti jam tertentu setelah itu kamu tidak lagi membalas pesan pekerjaan.',
      ],
    },
    coping: {
      label: 'Kendali dan pemulihan yang rendah',
      desc: 'Mengukur kurangnya hal-hal yang menyeimbangkan stres, seperti merasa rutinitas ada di tanganmu, beristirahat, punya dukungan, dan menetapkan batasan. Pernyataan di bagian ini bersifat positif, jadi skornya naik saat hal-hal itu jarang terjadi.',
      high: 'Dalam sebulan terakhir, waktu istirahat, dukungan, dan rasa kendali jarang kamu rasakan. Tanpa jeda seperti ini, rutinitas biasa pun terasa lebih berat, karena tidak ada ruang tersisa untuk memulihkan diri. Memperkuat hal-hal ini sedikit demi sedikit adalah salah satu cara paling efektif untuk mengurangi stres.',
      low: 'Kamu bisa beristirahat, meminta bantuan, dan merasa bahwa rutinitasmu sebagian besar ada di tanganmu. Hal-hal ini berfungsi sebagai peredam: membantumu melewati masa-masa sulit tanpa kehabisan tenaga. Terus lindungi momen-momen ini, terutama saat rutinitas makin padat.',
      tips: [
        'Jaga tidurmu: usahakan tidur dan bangun di jam yang kurang lebih sama, termasuk di akhir pekan.',
        'Masukkan ke jadwal setidaknya satu kegiatan per minggu yang memberi kesenangan atau istirahat, dan perlakukan waktu itu sebagai janji yang harus ditepati.',
        'Ceritakan keadaanmu kepada orang yang kamu percaya: berbagi beban saja sudah membantu meringankannya.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Stres rendah',
      text: 'Jawabanmu menunjukkan tingkat stres yang rendah dalam sebulan terakhir. Kamu tampaknya menemukan keseimbangan yang baik antara tuntutan rutinitas dan waktu untuk memulihkan diri. Terus rawat kebiasaan yang menopang keseimbangan ini.',
    },
    moderate: {
      label: 'Stres sedang',
      text: 'Jawabanmu menunjukkan tingkat stres yang sedang, sesuatu yang umum di masa-masa dengan banyak tuntutan. Yang perlu diperhatikan adalah saat keadaan ini menjadi hal yang biasa, tanpa ada masa lega. Coba saran di bawah ini dan, jika stres mulai memengaruhi tidur, kesehatan, atau hubunganmu, bicarakan dengan tenaga profesional.',
    },
    high: {
      label: 'Stres tinggi',
      text: 'Jawabanmu menunjukkan tingkat stres yang tinggi dalam sebulan terakhir, dengan banyak tekanan dan sedikit ruang untuk memulihkan diri. Jika keadaan ini berlangsung lama, hal ini bisa memengaruhi tidur, suasana hati, dan kesehatan fisik. Ada baiknya mencari bantuan tenaga profesional, seperti psikolog atau dokter, untuk memahami apa yang membebanimu dan menemukan cara untuk meringankannya.',
    },
  },
  resultTitle: 'Tingkat stresmu',
  resultIntro: 'Hasil ini menjumlahkan jawabanmu tentang sebulan terakhir. Untuk pernyataan tentang kendali dan pemulihan, penghitungannya dibalik: makin jarang hal-hal itu muncul, makin tinggi hasilnya. Di bawah ini, kamu bisa melihat rentang hasilmu dan skormu di setiap bagian.',
  note: 'Kuesioner ini adalah alat untuk mengenal diri, berdasarkan persepsimu sendiri tentang sebulan terakhir. Kuesioner ini bukan diagnosis dan tidak menggantikan penilaian tenaga profesional yang berkualifikasi. Tingkat stres juga bisa sangat berbeda dari satu fase kehidupan ke fase lainnya.',
  help: 'Jika stres memengaruhi kesehatan, tidur, atau hubunganmu, temui psikolog atau dokter umum. Layanan kesehatan setempat bisa memberikan penanganan dan merujukmu ke layanan kesehatan jiwa jika diperlukan. Jika kamu sedang mengalami tekanan yang sangat berat, hubungi layanan krisis atau dukungan emosional di negaramu. Dalam keadaan darurat, hubungi nomor darurat setempat (112).',
};

export default t;
