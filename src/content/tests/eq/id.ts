import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Kecerdasan emosional",
  "desc": "Lihat bagaimana kamu mengenali dan mengelola emosimu sendiri serta emosi orang lain dalam keseharian.",
  "intro": "Kuesioner ini menilai empat area kecerdasan emosional: kesadaran diri, pengendalian diri, empati, dan keterampilan sosial. Ada 24 pernyataan tentang situasi sehari-hari. Untuk setiap pernyataan, tunjukkan seberapa tepat pernyataan itu menggambarkan caramu biasanya bertindak, bukan cara yang menurutmu seharusnya. Tidak ada jawaban yang benar: makin jujur jawabanmu, makin berguna hasilnya.",
  "scale": [
    "Sangat tidak setuju",
    "Tidak setuju",
    "Netral",
    "Setuju",
    "Sangat setuju"
  ],
  "items": [
    "Saya bisa menamai apa yang sedang saya rasakan, bahkan saat perasaannya bercampur aduk.",
    "Saat marah, saya bisa menunggu sebentar sebelum menanggapi.",
    "Saya menyadari saat seseorang sedang kesal, meskipun dia tidak mengatakan apa-apa.",
    "Saya bisa menyelesaikan perselisihan tanpa membuat obrolan berubah jadi pertengkaran.",
    "Sering kali saya baru menyadari apa yang saya rasakan setelah situasinya berlalu.",
    "Saat berdebat, saya akhirnya mengatakan hal-hal yang kemudian saya sesali.",
    "Sebelum menilai seseorang, saya mencoba memahami apa yang sedang dia alami.",
    "Saya menghindari pembicaraan yang sulit, bahkan saat pembicaraan itu perlu.",
    "Saya menyadari saat suasana hati saya memengaruhi keputusan saya.",
    "Setelah hari yang buruk, saya bisa menenangkan diri tanpa melampiaskannya pada orang lain.",
    "Saya sulit memahami mengapa sebagian orang bereaksi begitu kuat.",
    "Saya bisa menolak permintaan dengan tegas dan sopan.",
    "Saya tahu situasi apa saja yang biasanya membuat saya hilang kesabaran.",
    "Saat menerima kritik, saya mendengarkan sampai selesai sebelum membela diri.",
    "Saat seseorang menceritakan masalahnya, saya mendengarkan dengan saksama, bukan langsung memikirkan apa yang akan saya jawab.",
    "Saat bekerja dalam kelompok, saya membantu orang-orang mencapai kesepakatan.",
    "Saya sulit menjelaskan apa yang sedang saya rasakan.",
    "Saat sesuatu tidak berjalan baik, saya butuh waktu lama untuk berhenti memikirkannya.",
    "Saya biasanya bisa merasakan suasana sebuah ruangan begitu saya tiba.",
    "Di tempat baru, saya sulit mendekati orang.",
    "Saya menyadari tanda-tanda di tubuh saya, seperti tegang atau lelah, saat sesuatu sedang memengaruhi saya.",
    "Saya bisa berkonsentrasi pada apa yang perlu saya lakukan, bahkan di hari yang berat secara emosional.",
    "Saat seseorang berpikiran berbeda dari saya, saya kurang sabar untuk mendengar alasannya.",
    "Saya bisa menunjukkan masalah dalam pekerjaan seseorang tanpa membuatnya merasa diserang."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Kesadaran diri",
      "desc": "Mengenali dan menamai apa yang kamu rasakan, memahami dari mana emosi itu berasal, dan bagaimana emosi itu memengaruhi sikapmu.",
      "high": "Kamu biasanya menyadari apa yang sedang kamu rasakan dan alasannya, sering kali sebelum bereaksi. Ini membantumu mengambil keputusan dengan lebih sadar dan menjelaskan kebutuhanmu kepada orang lain. Yang perlu diperhatikan adalah terlalu menganalisis setiap emosi alih-alih melangkah maju.",
      "low": "Kamu cenderung lebih fokus pada apa yang harus dikerjakan daripada pada apa yang kamu rasakan, sehingga kamu bisa bertindak dengan praktis. Yang perlu diperhatikan adalah baru menyadari emosi setelah situasinya berlalu, saat emosi itu sudah memengaruhi sikapmu.",
      "tips": [
        "Beberapa kali sehari, berhenti sejenak dan tanyakan: apa yang sedang saya rasakan sekarang?",
        "Alih-alih hanya bilang sedang \"tidak enak\", coba kenali apakah itu lelah, frustrasi, sedih, atau cemas.",
        "Catat situasi yang mengusik perasaanmu dan apa yang terjadi tepat sebelumnya."
      ]
    },
    "selfRegulation": {
      "label": "Pengendalian diri",
      "desc": "Mengelola emosi yang kuat tanpa bertindak impulsif, kembali tenang, dan tetap fokus bahkan di hari yang berat.",
      "high": "Kamu bisa merasakan marah, frustrasi, atau cemas tanpa membiarkan perasaan itu menguasai tindakanmu. Ini menumbuhkan kepercayaan dan mencegah konflik yang tidak perlu. Yang perlu diperhatikan adalah memendam emosi yang sebenarnya perlu diungkapkan, yang bisa menumpuk menjadi ketegangan.",
      "low": "Kamu bereaksi dengan cepat dan intens, dan orang biasanya tahu persis apa yang kamu rasakan. Spontanitas ini bisa terasa tulus dan penuh energi. Yang perlu diperhatikan adalah reaksi saat emosi sedang memuncak, yang kadang berujung penyesalan atau merenggangkan hubungan.",
      "tips": [
        "Saat merasa emosi naik, berhenti sejenak, tarik napas dalam-dalam, lalu baru tanggapi.",
        "Hindari mengambil keputusan atau mengirim pesan penting saat sedang sangat marah.",
        "Punya cara rutin untuk melepas ketegangan, seperti olahraga, jalan kaki, atau mengobrol dengan orang yang kamu percaya."
      ]
    },
    "empathy": {
      "label": "Empati",
      "desc": "Menyadari apa yang dirasakan orang lain dan memahami sudut pandang mereka, bahkan saat berbeda dari sudut pandangmu.",
      "high": "Kamu mudah menangkap suasana sebuah ruangan dan apa yang dirasakan orang, bahkan tanpa kata-kata. Hal ini membuat orang merasa dipahami saat bersamamu. Yang perlu diperhatikan adalah menyerap emosi orang lain sampai kamu sendiri kelelahan.",
      "low": "Kamu cenderung fokus pada fakta dan masalahnya itu sendiri, lebih daripada emosi yang terlibat. Ini membantumu tetap objektif dalam situasi yang sensitif. Yang perlu diperhatikan adalah melewatkan tanda bahwa seseorang butuh dukungan atau terkesan jauh tanpa sengaja.",
      "tips": [
        "Dalam percakapan penting, ulangi dengan kata-katamu sendiri apa yang kamu tangkap sebelum menanggapi.",
        "Tanyakan \"bagaimana perasaanmu soal ini?\" sebelum langsung masuk ke solusi.",
        "Perhatikan ekspresi, nada suara, dan saat-saat diam, bukan hanya apa yang diucapkan."
      ]
    },
    "social": {
      "label": "Keterampilan sosial",
      "desc": "Berkomunikasi dengan jelas, menyelesaikan konflik, bekerja sama, dan membangun hubungan yang baik di tempat kerja maupun dalam kehidupan pribadi.",
      "high": "Kamu bisa menghadapi pembicaraan sulit dengan baik, tahu cara menyampaikan pendirian, dan membantu kelompok mencapai kesepakatan. Karena itu, orang biasanya mencarimu saat ada sesuatu yang perlu diselesaikan. Yang perlu diperhatikan adalah mengambil alih tugas menyelesaikan semua konflik, yang bisa membuatmu kewalahan.",
      "low": "Kamu lebih suka menghindari gesekan dan merasa lebih nyaman dengan orang yang sudah kamu kenal baik. Ini biasanya membuat hubunganmu tenang dan jarang ada pertengkaran. Yang perlu diperhatikan adalah menunda pembicaraan yang perlu sehingga masalah membesar atau kebutuhanmu tidak terpenuhi.",
      "tips": [
        "Saat memberi masukan yang sulit, bicarakan perilakunya dan dampaknya, bukan orangnya.",
        "Berlatihlah berkata tidak dengan kalimat yang singkat dan sopan, tanpa penjelasan panjang.",
        "Di lingkungan baru, ajukan pertanyaan sederhana untuk memulai obrolan: orang senang membicarakan apa yang mereka kerjakan."
      ]
    }
  },
  "resultTitle": "Profil kecerdasan emosionalmu",
  "resultIntro": "Lihat skormu di setiap area. Keterampilan ini berkembang dengan latihan, jadi gunakan hasilnya sebagai titik awal, bukan sebagai label.",
  "note": "Kuesioner ini adalah alat untuk mengenal diri berdasarkan persepsimu sendiri. Kuesioner ini bukan tes psikologi yang tervalidasi dan tidak menggantikan penilaian tenaga profesional."
};

export default t;
