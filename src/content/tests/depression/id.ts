// depression — Indonesian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Tanda suasana hati depresif',
  desc: 'Lihat seberapa sering tanda-tanda seperti murung, hilangnya minat, dan kurang tenaga muncul dalam dua minggu terakhir.',
  intro:
    'Kuesioner ini melihat dua kelompok tanda yang berkaitan dengan suasana hati depresif: perubahan suasana hati dan minat terhadap berbagai hal, serta perubahan tenaga, tidur, nafsu makan, dan konsentrasi. Ada 10 pernyataan tentang dua minggu terakhir. Untuk setiap pernyataan, tunjukkan seberapa sering hal itu terjadi padamu dalam periode tersebut. Beberapa pernyataan menyentuh topik yang sensitif: jawablah dengan tenang, sesuai waktumu, dan dengan jujur. Ini adalah penilaian diri berdasarkan jawabanmu, bukan diagnosis.',
  scale: ['Tidak pernah', 'Beberapa hari', 'Lebih dari separuh hari', 'Hampir setiap hari'],
  items: [
    'Hal-hal yang dulu membuat saya senang, seperti hobi atau bertemu teman, tidak lagi terasa menyenangkan.',
    'Saya merasa kurang tenaga bahkan untuk hal-hal sederhana, seperti mandi atau membalas pesan.',
    'Sebagian besar hari saya habis dengan rasa sedih atau hampa yang sulit dijelaskan.',
    'Tidur saya berubah: saya butuh waktu lama untuk terlelap, terbangun beberapa kali di malam hari, atau tidur jauh lebih lama dari biasanya.',
    'Nafsu makan saya berubah: saya makan jauh lebih sedikit atau jauh lebih banyak dari biasanya.',
    'Saya memandang beberapa bulan ke depan tanpa harapan bahwa keadaan akan membaik.',
    'Saya kehilangan alur dalam percakapan atau tugas sederhana karena tidak bisa berkonsentrasi.',
    'Saya mendapati diri saya berpikir bahwa saya tidak berharga atau bahwa semua yang saya lakukan selalu gagal.',
    'Keputusan kecil, seperti mau makan apa atau memakai baju apa, terasa terlalu sulit.',
    'Terlintas di pikiran saya bahwa hidup ini tidak layak dijalani atau keinginan untuk menyakiti diri sendiri.',
  ],
  dims: {
    mood: {
      label: 'Suasana hati dan minat',
      desc: 'Mengukur tanda-tanda seperti kesedihan yang terus-menerus, hilangnya rasa senang terhadap berbagai hal, hilangnya harapan, dan pikiran yang sangat negatif tentang diri sendiri.',
      high: 'Dalam dua minggu terakhir, kesedihan, hilangnya minat, atau pikiran yang keras tentang diri sendiri sering muncul. Ini bukan karena kurang tekad: suasana hati depresif mengubah cara kita memandang diri sendiri dan masa depan. Membicarakan hal ini dengan tenaga profesional adalah langkah penting, dan kamu tidak perlu menunggu keadaan memburuk untuk mencari bantuan.',
      low: 'Suasana hati dan minatmu terhadap berbagai hal tampaknya tetap stabil dalam dua minggu terakhir. Hari-hari sedih dialami semua orang, tetapi tampaknya tidak menguasai rutinitasmu. Terus rawat hal-hal yang baik untukmu.',
      tips: [
        'Rencanakan kegiatan kecil yang menyenangkan sepanjang minggu, bahkan saat sedang tidak ingin: sering kali semangat datang setelah mulai, bukan sebelumnya.',
        'Tetap jalin kontak dengan orang-orang yang kamu percaya, meskipun hanya lewat pesan atau obrolan singkat.',
        'Jika kesedihan atau hilangnya minat berlangsung lebih dari dua minggu, temui psikolog atau dokter untuk membicarakannya.',
      ],
    },
    energy: {
      label: 'Tenaga, tidur, nafsu makan, dan konsentrasi',
      desc: 'Mengukur perubahan pada tubuh dan fungsi sehari-hari yang biasanya menyertai suasana hati depresif, seperti kelelahan, perubahan tidur dan nafsu makan, serta sulit berkonsentrasi.',
      high: 'Tubuh dan pikiranmu menunjukkan tanda-tanda terkuras dalam dua minggu terakhir: tenaga berkurang, tidur atau nafsu makan berubah, dan sulit berkonsentrasi. Tanda-tanda ini bisa menyertai suasana hati depresif, tetapi juga bisa disebabkan oleh hal lain, seperti stres, kurang tidur, atau masalah kesehatan fisik. Ada baiknya berbicara dengan dokter, terutama jika tanda-tanda ini terus berlanjut.',
      low: 'Tenaga, tidur, nafsu makan, dan konsentrasimu tampaknya berjalan dengan stabil. Fondasi ini biasanya sangat membantu untuk melewati hari-hari yang lebih sulit. Terus jaga fondasi ini.',
      tips: [
        'Usahakan jam tidur, bangun, dan makan yang teratur, bahkan di hari-hari saat kamu sedang tidak bersemangat.',
        'Keluarlah sebentar ke udara terbuka dan gerakkan tubuhmu, meskipun hanya jalan kaki singkat: cahaya matahari dan gerakan membantu mengatur tidur dan tenaga.',
        'Bagi tugas menjadi bagian-bagian kecil dan hargai setiap bagian yang selesai, tanpa menuntut dirimu bekerja secepat dulu.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Sedikit tanda',
      text: 'Jawabanmu menunjukkan sedikit atau tidak ada tanda suasana hati depresif dalam dua minggu terakhir. Saat-saat sedih atau lelah adalah bagian dari hidup dan, dalam kasusmu, tampaknya tidak menguasai rutinitas. Terus jaga tidur, aktivitas fisik, dan hubunganmu dengan orang lain.',
    },
    mild: {
      label: 'Tanda ringan',
      text: 'Jawabanmu menunjukkan beberapa tanda suasana hati depresif di sebagian hari. Ini bisa terjadi di masa-masa lelah, kehilangan, atau perubahan. Perhatikan bagaimana perasaanmu dalam beberapa minggu ke depan dan, jika tanda-tandanya berlanjut atau bertambah, bicarakan dengan tenaga profesional.',
    },
    moderate: {
      label: 'Tanda sedang',
      text: 'Jawabanmu menunjukkan tanda-tanda suasana hati depresif di sebagian besar hari, yang mungkin membebani keseharianmu. Ini layak mendapat perhatian dan perawatan, dan bukan sesuatu yang harus kamu selesaikan sendirian. Temui tenaga profesional, seperti psikolog atau dokter, untuk membicarakan apa yang kamu rasakan.',
    },
    high: {
      label: 'Tanda kuat',
      text: 'Jawabanmu menunjukkan tanda-tanda suasana hati depresif yang sering dan kuat dalam dua minggu terakhir. Ini bisa membuat segalanya terasa lebih sulit, tetapi ada penanganannya, dan orang bisa membaik dengan dukungan yang tepat. Temui tenaga profesional, seperti psikolog atau dokter, sesegera mungkin, dan ceritakan keadaanmu kepada orang yang kamu percaya.',
    },
  },
  resultTitle: 'Tanda suasana hatimu',
  resultIntro: 'Hasil ini menjumlahkan jawabanmu tentang dua minggu terakhir. Di bawah ini, kamu bisa melihat rentang hasilmu dan skormu untuk suasana hati dan minat, serta untuk tenaga, tidur, nafsu makan, dan konsentrasi.',
  note: 'Kuesioner ini adalah alat untuk mengenal diri dan skrining awal, berdasarkan jawabanmu sendiri. Kuesioner ini bukan diagnosis depresi: hanya tenaga profesional yang berkualifikasi, seperti psikolog atau dokter, yang bisa melakukan penilaian tersebut. Kelelahan serta perubahan tidur dan nafsu makan juga bisa disebabkan oleh hal lain, termasuk masalah fisik.',
  help: 'Untuk membicarakan apa yang kamu rasakan, temui psikolog atau dokter umum. Layanan kesehatan setempat bisa memberikan penanganan dan merujukmu ke layanan kesehatan jiwa jika diperlukan. Jika kamu sedang merasa sangat tertekan, hubungi layanan krisis atau dukungan emosional di negaramu. Dalam keadaan darurat, hubungi nomor darurat setempat (112).',
  alert:
    'Kamu menyampaikan bahwa dalam dua minggu terakhir kamu punya pikiran bahwa hidup ini tidak layak dijalani atau ingin menyakiti diri sendiri. Terima kasih sudah menjawab dengan jujur. Pikiran-pikiran ini perlu mendapat perhatian sekarang, dan kamu tidak harus melaluinya sendirian. Jika kamu dalam bahaya atau merasa mungkin akan menyakiti diri sendiri, segera hubungi nomor darurat setempat (112). Untuk berbicara dengan seseorang kapan saja, hubungi layanan krisis atau dukungan emosional di negaramu. Jika bisa, ceritakan juga kepada orang yang kamu percaya tentang apa yang sedang kamu rasakan.',
};

export default t;
