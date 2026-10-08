// anxiety — Indonesian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Tingkat kecemasan',
  desc: 'Lihat seberapa sering rasa khawatir dan ketegangan di tubuh muncul dalam rutinitasmu selama dua minggu terakhir.',
  intro:
    'Kuesioner ini melihat dua sisi kecemasan: rasa khawatir, yang memenuhi pikiran, dan ketegangan, yang muncul di tubuh dan dalam perilaku. Ada 10 pernyataan tentang dua minggu terakhir. Untuk setiap pernyataan, tunjukkan seberapa sering hal itu terjadi padamu dalam periode tersebut, bukan bagaimana kamu biasanya secara umum. Tidak ada jawaban yang benar atau salah. Ini adalah penilaian diri berdasarkan jawabanmu: penilaian ini membantumu menyadari keadaanmu, tetapi bukan diagnosis.',
  scale: ['Tidak pernah', 'Beberapa hari', 'Lebih dari separuh hari', 'Hampir setiap hari'],
  items: [
    'Sebagian besar hari saya habis dengan pikiran yang dipenuhi kekhawatiran, satu memicu yang lain.',
    'Tubuh saya terasa tegang, terutama di bahu, leher, atau rahang.',
    'Saya mencoba memikirkan hal lain, tetapi pikiran-pikiran yang mengkhawatirkan itu terus kembali.',
    'Saya merasakan jantung berdebar kencang atau napas pendek tanpa melakukan aktivitas fisik apa pun.',
    'Saat mau tidur, pikiran saya terus mengulang-ulang masalah dan urusan yang belum selesai.',
    'Saya sulit untuk diam, menggoyangkan kaki, memainkan tangan, atau mondar-mandir.',
    'Menghadapi hal sederhana, seperti pesan yang tidak dibalas, saya langsung memikirkan kemungkinan terburuk.',
    'Hal-hal kecil yang tak terduga, seperti suara bising atau keterlambatan, membuat saya kesal lebih dari biasanya.',
    'Saya menunda keputusan atau menghindari situasi karena takut ada yang tidak beres.',
    'Bahkan saat sedang santai, tubuh saya tetap waspada dan saya tidak bisa melambat.',
  ],
  dims: {
    worry: {
      label: 'Rasa khawatir',
      desc: 'Mengukur seberapa banyak pikiran yang mengkhawatirkan memenuhi kepalamu, terus kembali bahkan saat kamu mencoba mengalihkan perhatian, dan memengaruhi keputusanmu.',
      high: 'Dalam beberapa minggu terakhir, rasa khawatir banyak mengisi pikiranmu, sering kali dengan mengantisipasi masalah yang belum terjadi. Ini melelahkan dan mengalihkan fokus dari hal-hal yang bisa kamu kendalikan saat ini. Ada baiknya mempelajari cara memberi batas pada pikiran-pikiran ini dan mencari dukungan jika pikiran itu mengganggu rutinitasmu.',
      low: 'Rasa khawatir jarang muncul atau hanya sesaat dalam beberapa minggu terakhir. Kamu tampaknya bisa memikirkan masalah tanpa membiarkannya menguasai harimu. Terus rawat kebiasaan yang membantumu menjaga keseimbangan ini.',
      tips: [
        'Sisihkan 15 menit setiap hari untuk menuliskan kekhawatiranmu dan, di samping masing-masing, tulis satu langkah berikutnya yang mungkin dilakukan atau apakah hal itu berada di luar kendalimu.',
        'Saat menyadari bahwa kamu sedang membayangkan yang terburuk, tanyakan pada dirimu: apa yang paling mungkin benar-benar terjadi?',
        'Kurangi waktu untuk berita dan media sosial, terutama sebelum tidur.',
      ],
    },
    tension: {
      label: 'Ketegangan tubuh dan gelisah',
      desc: 'Mengukur tanda-tanda fisik dan perilaku yang berkaitan dengan kecemasan, seperti otot tegang, jantung berdebar, gelisah, dan mudah kesal karena hal kecil.',
      high: 'Tubuhmu memberi banyak tanda waspada dalam beberapa minggu terakhir, seperti ketegangan, gelisah, atau reaksi kuat terhadap hal-hal kecil yang tak terduga. Ini adalah cara tubuh merespons tekanan, tetapi jika berlangsung lama, hal ini melelahkan dan mengganggu istirahat. Latihan yang menenangkan tubuh biasanya membantu, dan ada baiknya berbicara dengan tenaga profesional jika tanda-tandanya kuat atau sering muncul.',
      low: 'Tubuhmu menunjukkan sedikit tanda ketegangan dalam beberapa minggu terakhir, dan kamu bisa melambat saat waktunya beristirahat. Ini menunjukkan bahwa tekanan sehari-hari tidak menumpuk di tubuhmu.',
      tips: [
        'Cobalah bernapas perlahan selama beberapa menit, dengan mengembuskan napas lebih lama daripada saat menariknya.',
        'Gerakkan tubuh secara teratur: jalan kaki 20 sampai 30 menit saja sudah membantu melepaskan ketegangan.',
        'Jika kamu sering merasakan jantung berdebar kencang, sesak napas, atau nyeri dada, temui dokter untuk memeriksa kemungkinan penyebab lain.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Kecemasan minimal',
      text: 'Jawabanmu menunjukkan sedikit tanda kecemasan dalam dua minggu terakhir. Rasa khawatir dan saat-saat tegang adalah bagian dari hidup dan, dalam kasusmu, tampaknya tidak membebani rutinitas. Terus jaga tidur, aktivitas fisik, dan hubunganmu dengan orang lain.',
    },
    mild: {
      label: 'Kecemasan ringan',
      text: 'Jawabanmu menunjukkan beberapa tanda kecemasan, yang muncul di sebagian hari. Ini umum di masa-masa yang lebih sibuk atau penuh perubahan. Ada baiknya memperhatikan apa yang memicu kekhawatiranmu dan mencoba saran di bawah ini; jika tanda-tandanya bertambah atau berlangsung lama, bicarakan dengan tenaga profesional.',
    },
    moderate: {
      label: 'Kecemasan sedang',
      text: 'Jawabanmu menunjukkan bahwa rasa khawatir dan ketegangan hadir di sebagian besar hari. Ini bisa melelahkan dan memengaruhi tidur, konsentrasi, dan hubunganmu. Berbicara dengan tenaga profesional, seperti psikolog atau dokter, bisa membantumu memahami apa yang sedang terjadi dan menemukan cara untuk menghadapinya.',
    },
    high: {
      label: 'Kecemasan tinggi',
      text: 'Jawabanmu menunjukkan tanda-tanda kecemasan yang kuat hampir setiap hari dalam dua minggu terakhir. Ini tidak menentukan siapa dirimu, tetapi menunjukkan bahwa kamu sedang memikul beban yang berat, dan ada cara-cara efektif untuk menanganinya. Temui tenaga profesional, seperti psikolog atau dokter, untuk pemeriksaan dan untuk bersama-sama memikirkan langkah selanjutnya.',
    },
  },
  resultTitle: 'Tingkat kecemasanmu',
  resultIntro: 'Hasil ini didasarkan pada jumlah jawabanmu tentang dua minggu terakhir. Di bawah ini, kamu bisa melihat rentang hasilmu dan skormu untuk rasa khawatir dan ketegangan tubuh.',
  note: 'Kuesioner ini adalah alat untuk mengenal diri dan skrining awal, berdasarkan jawabanmu sendiri. Kuesioner ini bukan diagnosis: hanya tenaga profesional yang berkualifikasi, seperti psikolog atau dokter, yang bisa menilai kecemasan secara menyeluruh. Beberapa tanda fisik, seperti jantung berdebar dan sesak napas, juga bisa disebabkan oleh hal lain.',
  help: 'Jika kecemasan mengganggu rutinitasmu, temui psikolog atau dokter umum. Layanan kesehatan setempat bisa memberikan penanganan dan merujukmu ke layanan kesehatan jiwa jika diperlukan. Jika kamu sedang mengalami tekanan yang sangat berat, hubungi layanan krisis atau dukungan emosional di negaramu. Dalam keadaan darurat, hubungi nomor darurat setempat (112).',
};

export default t;
