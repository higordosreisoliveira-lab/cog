// procrastination — Indonesian translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Prokrastinasi",
  "desc": "Cari tahu apa yang biasanya membuatmu menunda tugas dan kenali strategi praktis untuk setiap penyebabnya.",
  "intro": "Hampir semua orang sesekali menunda tugas, tetapi alasannya berbeda-beda pada setiap orang. Kuesioner ini menilai empat alasan yang umum: menghindari rasa tidak nyaman, takut hasilnya tidak sempurna, distraksi, dan kurangnya kejelasan dalam perencanaan. Ada 16 pernyataan. Pikirkan beberapa minggu terakhir dan tunjukkan seberapa sering setiap situasi terjadi padamu. Tidak ada jawaban yang benar: tujuannya adalah memahami apa yang paling berpengaruh dalam kasusmu supaya kamu bisa memilih strategi yang tepat.",
  "scale": [
    "Tidak pernah",
    "Jarang",
    "Kadang-kadang",
    "Sering",
    "Selalu"
  ],
  "items": [
    "Saya menunda tugas yang membuat saya cemas, meskipun saya tahu tugas itu penting.",
    "Saya lama mulai karena merasa semuanya harus sempurna sejak awal.",
    "Saya mengambil ponsel untuk melihat sesuatu sebentar dan akhirnya menghabiskan waktu jauh lebih lama dari yang saya rencanakan.",
    "Saya menunda tugas karena tidak tahu persis harus mulai dari mana.",
    "Saya menunda telepon, pesan, atau pembicaraan yang mungkin sulit.",
    "Saya terus memeriksa dan memperbaiki suatu pekerjaan begitu lama sampai akhirnya terlambat menyerahkannya.",
    "Di tengah mengerjakan tugas, saya beralih ke hal lain begitu ada sesuatu yang lebih menarik.",
    "Saya punya begitu banyak hal untuk dikerjakan sampai tidak tahu mana yang harus dikerjakan lebih dulu.",
    "Saya menghindari membuka email, tagihan, atau pesan karena khawatir dengan apa yang mungkin saya temukan.",
    "Saya lebih memilih tidak memulai daripada mengambil risiko menghasilkan sesuatu di bawah harapan saya terhadap diri sendiri.",
    "Notifikasi, obrolan, atau suara bising di sekitar mudah mengalihkan saya dari apa yang sedang saya kerjakan.",
    "Saya salah memperkirakan berapa lama suatu tugas akan memakan waktu dan akhirnya punya waktu lebih sedikit dari yang saya butuhkan.",
    "Saat suatu tugas terasa membosankan atau tidak menyenangkan, saya mencari hal lain yang lebih menyenangkan untuk dikerjakan.",
    "Saya menunggu saat yang ideal, dengan banyak waktu dan tenaga, untuk memulai tugas-tugas penting.",
    "Saya melakukan apa yang ingin saya lakukan saat itu, meskipun tahu seharusnya saya mengerjakan hal lain.",
    "Saat suatu tugas besar atau tidak jelas, saya sulit mengubahnya menjadi langkah-langkah konkret."
  ],
  "dims": {
    "avoidance": {
      "label": "Menghindari rasa tidak nyaman",
      "desc": "Menunda tugas karena tugas itu menimbulkan rasa bosan, cemas, takut, atau perasaan tidak menyenangkan lainnya.",
      "high": "Sebagian besar penundaanmu tampaknya berasal dari keinginan untuk menghindari perasaan tidak menyenangkan, seperti cemas, bosan, atau takut mendapat tanggapan buruk. Ini menunjukkan bahwa kamu merasakan emosi dengan intens, yang juga membantumu menyadari apa yang penting. Yang perlu diperhatikan adalah rasa lega karena menunda hanya bertahan sebentar, dan tugasnya biasanya terasa makin berat setelahnya.",
      "low": "Rasa tidak nyaman dari suatu tugas jarang menghalangimu untuk memulainya. Kemampuan menghadapi hal yang membosankan atau sulit ini adalah keuntungan besar. Yang perlu diperhatikan adalah memaksakan diri untuk terus bekerja meskipun rasa lelah atau beban yang berlebihan menandakan kamu perlu jeda.",
      "tips": [
        "Mulailah dengan dua menit saja: buka berkasnya atau tulis kalimat pertama. Setelah itu, kamu boleh berhenti kalau mau. Memulai biasanya bagian yang paling sulit.",
        "Namai apa yang sedang kamu rasakan, seperti \"aku takut dikritik\". Mengenali emosi biasanya mengurangi kekuatannya.",
        "Kerjakan tugas yang paling tidak menyenangkan di awal hari, sebelum membuka email atau media sosial."
      ]
    },
    "perfectionism": {
      "label": "Perfeksionisme",
      "desc": "Menunda tugas karena takut tidak bisa mengerjakannya dengan cukup baik atau karena menunggu saat yang ideal untuk memulai.",
      "high": "Kamu tampaknya menunda sesuatu karena ingin hasilnya sempurna atau karena menunggu punya waktu dan tenaga yang ideal untuk memulai. Ketelitian ini menunjukkan bahwa kamu menganggap serius pekerjaanmu dan punya standar tinggi. Yang perlu diperhatikan adalah saat yang ideal jarang datang, dan rasa takut berbuat salah bisa menunda atau menghalangi penyelesaian pekerjaan penting.",
      "low": "Kamu biasanya mulai meskipun belum semuanya sempurna dan mau melakukan penyesuaian sambil jalan. Ini membuatmu gesit dan membantumu belajar dari praktik. Yang perlu diperhatikan adalah menyerahkan sesuatu dengan kurang teliti dibanding yang dibutuhkan situasinya, terutama untuk tugas-tugas penting.",
      "tips": [
        "Sebelum mulai, tuliskan apa yang dianggap \"cukup baik\" untuk tugas itu.",
        "Buat versi pertama dengan cepat, dengan kesadaran bahwa versi itu akan diperbaiki nanti.",
        "Tetapkan batas waktu untuk merevisi dan serahkan pekerjaanmu saat waktunya habis."
      ]
    },
    "distraction": {
      "label": "Distraksi dan dorongan sesaat",
      "desc": "Menunda tugas karena perhatian tertarik pada rangsangan yang lebih langsung, seperti ponsel, obrolan, atau kegiatan yang lebih menyenangkan.",
      "high": "Perhatianmu tampaknya mudah tertarik oleh notifikasi, obrolan, atau kegiatan yang lebih menarik daripada tugas yang sedang dikerjakan. Kepekaan terhadap rangsangan baru ini juga bisa membawa kegesitan dan kreativitas. Yang perlu diperhatikan adalah gangguan-gangguan kecil, jika dijumlahkan, menghabiskan berjam-jam dalam harimu tanpa kamu sadari.",
      "low": "Kamu bisa tetap fokus meskipun ada banyak rangsangan di sekitarmu dan cukup kuat menahan keinginan untuk mengganti tugas dengan sesuatu yang lebih menyenangkan. Ini keuntungan besar dalam pekerjaan yang menuntut konsentrasi. Yang perlu diperhatikan adalah terlalu tenggelam dalam tugas sampai tidak menyadari permintaan atau perubahan penting di sekitarmu.",
      "tips": [
        "Taruh ponselmu di ruangan lain atau dalam mode senyap saat mengerjakan sesuatu yang penting.",
        "Bekerjalah dalam blok 25 menit, dengan jeda 5 menit di antaranya.",
        "Catat ide dan keinginan yang muncul selama mengerjakan tugas untuk diurus nanti, alih-alih menghentikan apa yang sedang kamu kerjakan."
      ]
    },
    "planning": {
      "label": "Kurangnya kejelasan dan perencanaan",
      "desc": "Menunda tugas karena tidak jelas harus mulai dari mana, apa yang dikerjakan lebih dulu, atau berapa lama setiap hal akan memakan waktu.",
      "high": "Sering kali kamu menunda bukan karena tidak mau, tetapi karena tugasnya terasa besar, tidak jelas, atau membingungkan. Ini menunjukkan bahwa kamu menyadari kerumitan berbagai hal. Yang perlu diperhatikan adalah tanpa langkah-langkah konkret, tugas yang sederhana pun terasa sulit dan akhirnya tertunda.",
      "low": "Kamu biasanya tahu harus mulai dari mana dan bisa mengubah tugas besar menjadi langkah-langkah praktis. Ini memudahkanmu menjaga ritme dan memenuhi tenggat. Yang perlu diperhatikan adalah merencanakan dengan begitu rinci sampai sulit menyesuaikan diri saat ada yang berubah.",
      "tips": [
        "Pecah setiap tugas besar menjadi langkah-langkah yang masing-masing paling lama 30 menit dan tuliskan langkah pertamanya.",
        "Putuskan terlebih dahulu kapan dan di mana kamu akan mengerjakan tugas itu, misalnya: \"Hari Selasa, pukul 09.00, di mejaku, aku akan menulis pendahuluan laporan\".",
        "Perkirakan berapa lama setiap tugas akan memakan waktu dan tambahkan cadangan waktu setidaknya 50%."
      ]
    }
  },
  "resultTitle": "Mengapa kamu menunda-nunda",
  "resultIntro": "Setiap batang menunjukkan seberapa sering suatu alasan muncul dalam jawabanmu. Makin tinggi skornya, makin besar peran faktor itu dalam penundaanmu. Mulailah dari strategi untuk alasan dengan skor tertinggi.",
  "note": "Kuesioner ini adalah alat untuk mengenal diri, bukan diagnosis. Jika kesulitan memulai atau menyelesaikan tugas terjadi terus-menerus dan mengganggu studi, pekerjaan, atau kehidupan pribadimu, ada baiknya berbicara dengan tenaga kesehatan profesional, karena hal itu bisa berkaitan dengan masalah seperti kecemasan, depresi, atau ADHD."
};

export default t;
