// adhd — Indonesian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Ciri ADHD pada orang dewasa',
  desc: 'Lihat seberapa sering situasi yang berkaitan dengan perhatian, keteraturan, kegelisahan, dan impulsivitas muncul dalam keseharianmu sebagai orang dewasa.',
  intro:
    'ADHD (gangguan pemusatan perhatian dan hiperaktivitas) bukan hanya urusan anak-anak: banyak orang tumbuh dewasa dengan ciri-ciri ini, kadang tanpa pernah menjalani pemeriksaan. Kuesioner ini melihat dua kelompok ciri dalam keseharian: perhatian dan keteraturan, serta kegelisahan dan impulsivitas. Ada 18 situasi umum dalam kehidupan orang dewasa, di tempat kerja, di rumah, dan dalam hubungan. Pikirkan 6 bulan terakhir dan tunjukkan seberapa sering setiap situasi terjadi padamu. Jawablah dengan jujur, berdasarkan apa yang benar-benar terjadi, bukan apa yang kamu harapkan terjadi. Ingat bahwa ini adalah penilaian diri yang melihat ciri-ciri, bukan diagnosis. Semua orang sesekali terdistraksi atau terburu-buru; yang penting di sini adalah seberapa sering hal itu terjadi.',
  scale: ['Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat sering'],
  items: [
    'Saya membaca satu halaman buku atau laporan sampai habis, lalu sadar bahwa saya tidak bisa mengatakan apa isinya karena pikiran saya sedang di tempat lain.',
    'Dalam rapat, kelas, atau ceramah, saya sadar bahwa saya terus-menerus menggoyangkan kaki, mengetuk-ngetukkan pulpen ke meja, atau berganti posisi duduk.',
    'Saat sudah di depan pintu, saya menghabiskan beberapa menit mencari kunci, ponsel, atau dompet yang saya taruh entah di mana.',
    'Dalam obrolan kelompok, sebuah ide muncul dan saya langsung mengucapkannya, memotong orang yang belum selesai bicara, karena takut lupa apa yang ingin saya katakan.',
    'Saya mengambil ponsel atau membuka komputer untuk mengurus satu hal tertentu, seperti membayar tagihan, lalu malah mengerjakan tiga hal lain tanpa menyelesaikan yang pertama.',
    'Saya melihat promo atau sesuatu yang menarik perhatian dan langsung membelinya, tanpa membandingkan harga atau memikirkan anggaran bulan ini.',
    'Saat seseorang menjelaskan sesuatu dengan tenang, saya sadar telah melewatkan sebagian ucapannya dan harus meminta dia mengulang, atau pura-pura mengikuti.',
    'Saat mengantre di kasir atau terjebak macet, saya merasakan ketidaksabaran yang cepat memuncak: saya celingukan, mendengus, atau mencari jalan lain.',
    'Tugas sederhana yang membosankan, seperti membuat janji temu atau mengirim dokumen, tertahan berminggu-minggu di daftar saya, padahal saya tahu itu hanya butuh beberapa menit.',
    'Di hari libur tanpa rencana, alih-alih beristirahat, saya merasa gelisah dan segera mencari sesuatu untuk dikerjakan, karena berdiam diri tanpa melakukan apa-apa membuat saya tidak nyaman.',
    'Saya mengirim email, tugas, atau spreadsheet, lalu baru menyadari ada detail yang terlewat, seperti lampiran yang lupa, tanggal yang salah, atau nama yang tertukar.',
    'Saya membalas pesan atau komentar dalam keadaan emosi dan, tak lama kemudian, menyesali nada atau isi tulisan saya.',
    'Saya mulai merapikan satu ruangan, menemukan sesuatu yang membawa saya ke sudut lain rumah, dan di akhir hari ada beberapa bagian yang setengah dirapikan.',
    'Saya berbaring untuk tidur dengan tubuh lelah, tetapi pikiran saya tetap berpacu, melompat dari satu hal ke hal lain cukup lama.',
    'Saya membuat janji dengan seseorang dan baru teringat saat orang itu mengirim pesan menanyakan apakah saya jadi datang.',
    'Setelah bertemu teman atau rekan, saya sadar bahwa saya berbicara jauh lebih banyak daripada yang lain atau menyambung dari satu topik ke topik lain tanpa memberi jeda dalam obrolan.',
    'Saya merasa masih punya banyak waktu sebelum berangkat, dan saat melihat jam, seharusnya saya sudah di jalan.',
    'Karena terbawa semangat, saya langsung menerima undangan, proyek baru, atau perubahan rencana, lalu baru sadar bahwa hal itu tidak muat dalam rutinitas saya.',
  ],
  dims: {
    inattention: {
      label: 'Perhatian dan keteraturan',
      desc: 'Mengukur seberapa sering perhatianmu buyar di tengah membaca, mengerjakan tugas, atau mengobrol, dan bagaimana kamu menangani tenggat, janji, barang sehari-hari, serta tugas yang kurang menarik.',
      high: 'Tetap fokus pada tugas yang kurang menarik, mengingat janji, dan memperhatikan detail tampaknya menuntut usaha lebih darimu dibandingkan banyak orang. Ini tidak ada hubungannya dengan malas atau kurang cerdas: banyak orang dengan profil ini punya pikiran yang cepat dan kreatif, penuh asosiasi, dan bisa berkonsentrasi dengan sangat dalam pada hal yang menarik minat mereka. Yang biasanya membantu adalah memindahkan keteraturan dari kepala ke lingkungan sekitar, dengan pengingat, daftar, dan rutinitas sederhana.',
      low: 'Kamu biasanya bisa menjaga perhatian pada apa yang sedang kamu kerjakan, ingat janji, dan mampu menyelesaikan tugas sampai tuntas, bahkan yang kurang menarik. Ini membuatmu bisa diandalkan dan membawa ketenangan di tempat kerja maupun di rumah. Sesekali terdistraksi itu wajar, terutama saat sedang lelah, stres, atau kurang tidur.',
      tips: [
        'Gunakan alarm dan pengingat di ponsel untuk janji dan tagihan, alih-alih hanya mengandalkan ingatan.',
        'Siapkan tempat tetap untuk kunci, dompet, dan dokumen, seperti wadah kecil atau gantungan di dekat pintu.',
        'Saat menghadapi tugas yang membosankan, berkomitmenlah hanya untuk lima menit pertama: memulai biasanya bagian yang paling sulit.',
      ],
    },
    hyperactivity: {
      label: 'Kegelisahan dan impulsivitas',
      desc: 'Mengukur kegelisahan tubuh dan pikiran, kesulitan menunggu, dan kecenderungan untuk berbicara, memutuskan, atau bertindak mengikuti dorongan sesaat.',
      high: 'Kamu punya banyak energi dan cenderung bertindak cepat: kamu berbicara, memutuskan, dan bereaksi secepat ide-ide muncul, dan menunggu atau diam terlalu lama biasanya terasa tidak nyaman. Energi ini bisa menjadi sekutu yang hebat, membawa antusiasme, inisiatif, kreativitas, dan keberanian untuk memulai hal baru. Yang perlu diperhatikan adalah kata-kata dan keputusan yang diambil saat emosi sedang tinggi, yang kadang berujung penyesalan atau gesekan, serta lelahnya pikiran yang sulit melambat.',
      low: 'Kamu biasanya bisa menunggu dengan tenang, berpikir sebelum bertindak, dan bisa bersantai saat punya waktu luang. Ini membantumu mengambil keputusan yang matang dan menjaga percakapan tetap seimbang. Sesekali merasa tidak sabar atau gelisah itu wajar, terutama saat sedang stres.',
      tips: [
        'Sebelum membeli sesuatu, membalas pesan yang membuatmu kesal, atau menerima komitmen baru, beri jeda: tunggu beberapa menit atau sampai keesokan harinya.',
        'Salurkan energi tubuhmu, dengan aktivitas fisik rutin, jalan kaki singkat saat istirahat, atau benda kecil yang bisa kamu mainkan diam-diam di tangan selama rapat.',
        'Jika pikiranmu berpacu saat mau tidur, tuliskan di kertas apa yang ada di kepalamu sebelum berbaring dan tunda penyelesaiannya sampai besok.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Sedikit ciri',
      text: 'Jawabanmu menunjukkan bahwa situasi yang berkaitan dengan kurang perhatian, kegelisahan, dan impulsivitas jarang muncul dalam keseharianmu. Sesekali terdistraksi atau tidak sabar itu wajar bagi siapa pun. Rentang hasil tes ini hanya berfungsi sebagai panduan dan belum divalidasi secara klinis.',
    },
    some: {
      label: 'Beberapa ciri',
      text: 'Jawabanmu menunjukkan bahwa beberapa ciri kurang perhatian atau kegelisahan cukup sering muncul dalam rutinitasmu. Ini umum dan bisa punya banyak penyebab, seperti kelelahan, stres, kurang tidur, atau tuntutan yang berlebihan. Perhatikan dalam situasi apa ciri-ciri itu paling terasa dan coba tips di setiap area, dengan mengingat bahwa rentang hasil ini hanya panduan, tanpa validasi klinis.',
    },
    many: {
      label: 'Banyak ciri',
      text: 'Jawabanmu menunjukkan bahwa banyak ciri yang berkaitan dengan perhatian, kegelisahan, dan impulsivitas sering muncul dalam keseharianmu. Ini tidak berarti kamu mengidap ADHD: kondisi lain dan fase kehidupan tertentu bisa memunculkan tanda-tanda serupa, dan rentang hasil tes ini hanya panduan, tanpa validasi klinis. Jika ciri-ciri ini sudah menyertaimu cukup lama, mungkin sejak kecil, dan mengganggu pekerjaan, studi, atau hubunganmu, ada baiknya berkonsultasi dengan psikiater, dokter spesialis saraf, atau psikolog untuk pemeriksaan yang tepat.',
    },
  },
  resultTitle: 'Ciri ADHD-mu',
  resultIntro:
    'Hasil ini menjumlahkan jawabanmu untuk 18 situasi dan menunjukkan seberapa sering ciri kurang perhatian, kegelisahan, dan impulsivitas muncul dalam keseharianmu. Lihat juga kedua area secara terpisah: keduanya membantumu memahami di mana ciri-ciri ini paling terasa dan di mana letak kekuatanmu.',
  note: 'Tes ini adalah alat untuk mengenal diri berdasarkan jawabanmu sendiri. Tes ini bukan diagnosis ADHD atau kondisi lainnya, dan rentang hasilnya belum divalidasi secara klinis. Hanya tenaga profesional yang berkualifikasi, seperti psikiater, dokter spesialis saraf, atau psikolog, yang bisa melakukan pemeriksaan lengkap, yang mempertimbangkan riwayatmu sejak kecil dan kemungkinan penyebab lain, seperti kecemasan, depresi, atau gangguan tidur.',
  help: 'Jika kamu ingin menelusuri ciri-ciri ini lebih jauh, temui psikiater, dokter spesialis saraf, atau psikolog, sebaiknya yang berpengalaman menangani ADHD pada orang dewasa. Langkah pertama bisa dimulai dari dokter umum atau layanan kesehatan setempat, yang dapat memberi arahan dan rujukan untuk pemeriksaan; saat beban yang kamu rasakan lebih berat, layanan kesehatan jiwa setempat juga bisa membantu. Ada juga layanan khusus di klinik universitas dan rumah sakit pendidikan, serta komunitas pendukung bagi orang dengan ADHD, yang biasanya bisa merekomendasikan tenaga profesional dan bahan bacaan yang tepercaya.',
};

export default t;
