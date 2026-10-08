// problems — Indonesian translation of pt.ts
import type { CourseText } from '../../schema';

const t: CourseText = {
  title: 'Memecahkan masalah yang kompleks',
  desc: 'Belajar merumuskan masalah dengan tepat, memecahnya menjadi bagian-bagian, menguji hipotesis dengan data, dan menyajikan solusi dengan jelas.',
  outcome: 'Di akhir kursus, kamu akan bisa mengikuti metode bertahap untuk beranjak dari masalah yang membingungkan menuju rekomendasi yang jelas dan beralasan kuat.',
  lessons: [
    {
      title: 'Rumuskan masalah dengan tepat',
      body: `Saat menghadapi masalah, godaannya adalah langsung melompat ke solusi. Tetapi solusi hebat untuk masalah yang salah tidak menyelesaikan apa pun. Sebelum mencari jawaban, ada baiknya meluangkan beberapa menit untuk memperjelas apa sebenarnya pertanyaannya.

## Dari samar menjadi tepat

Bandingkan dua cara menggambarkan situasi yang sama:

- "Penjualan sedang buruk."
- "Penjualan toko online turun 20% dalam tiga bulan terakhir, sementara penjualan toko fisik tetap stabil. Kita perlu memahami penyebabnya dan kembali ke tingkat sebelumnya paling lambat bulan Desember."

Versi kedua sudah mengarahkan pekerjaan. Versi ini menyebutkan di mana masalahnya, seberapa besar, sejak kapan ada, dan apa yang dihitung sebagai keberhasilan.

## Apa yang dijawab oleh rumusan yang baik

- **Apa yang sedang terjadi?** Gambarkan situasinya dengan fakta, sebaiknya dengan angka.
- **Di mana dan sejak kapan?** Batasi tempat, kelompok, atau periode yang terdampak.
- **Apa tujuannya?** Apa yang harus terwujud di akhir agar masalah dianggap selesai?
- **Apa saja batasannya?** Tenggat, anggaran, dan aturan yang tidak boleh dilanggar.
- **Siapa yang memutuskan?** Siapa yang harus menyetujui solusinya dan apa yang penting bagi orang itu.

Tulis jawabannya dalam beberapa baris. Jika tidak bisa, kemungkinan kamu belum benar-benar memahami masalahnya. Rumusan yang baik juga menggambarkan masalah tanpa menunjuk penyebab atau solusinya. Bagian-bagian itu datang belakangan.

## "5 mengapa"

Sering kali masalah yang terlihat hanyalah gejala. Gagasan "5 mengapa", yang dikenal luas dari industri otomotif Jepang, adalah bertanya "mengapa?" beberapa kali berturut-turut sampai menemukan penyebab yang bisa ditindaklanjuti. Angka lima hanyalah patokan: kadang tiga pertanyaan sudah cukup, kadang perlu lebih banyak.

- Pelanggan mengeluhkan pengiriman yang terlambat. Mengapa?
- Pesanan keluar dari gudang dua hari terlambat. Mengapa?
- Stok produknya habis. Mengapa?
- Pemesanan ulang stok dilakukan terlambat. Mengapa?
- Sistem stok baru memberi peringatan saat produknya sudah habis.

Meminta maaf kepada pelanggan menyelesaikan tingkat pertama. Mengubah peringatan di sistem mencegah masalah itu terulang.

## Hal yang perlu diperhatikan

Teknik ini paling berhasil jika setiap jawaban diperiksa dengan fakta, bukan dengan tebakan. Sebuah masalah juga sering punya lebih dari satu penyebab. Jika di salah satu tingkat muncul dua jawaban yang mungkin, selidiki keduanya.`,
      practice: {
        question: `Seorang manajer berkata: "Layanan pelanggan kita buruk." Kamu menemukan hal-hal berikut: rata-rata waktu tunggu di telepon naik dari 3 menjadi 9 menit sejak Maret; jumlah keluhan lewat email tidak berubah; tim telepon kehilangan dua orang pada bulan Maret, yang belum digantikan; perusahaan ingin kembali ke waktu tunggu di bawah 4 menit paling lambat akhir semester, tanpa menambah anggaran. Tulis rumusan masalah yang tepat.`,
        answer: `Salah satu versi yang mungkin: "Sejak Maret, rata-rata waktu tunggu layanan telepon naik dari 3 menjadi 9 menit, sementara keluhan lewat email tetap stabil. Tujuannya adalah kembali ke waktu tunggu di bawah 4 menit paling lambat akhir semester, tanpa menambah anggaran." Keluarnya dua orang itu tidak masuk ke dalam rumusan: itu adalah kemungkinan penyebab dan harus diperlakukan sebagai hipotesis saat penyelidikan.`,
      },
    },
    {
      title: 'Pecah masalah menjadi bagian-bagian',
      body: `Masalah yang kompleks terasa menakutkan karena tampak terlalu besar untuk dipikirkan sekaligus. Jalan keluarnya adalah memecahnya menjadi bagian-bagian yang lebih kecil, yang bisa dianalisis satu per satu. Alat yang berguna untuk ini adalah **pohon masalah**.

## Cara menyusun pohon

Tulis pertanyaan utama di bagian atas selembar kertas. Lalu, pecah menjadi dua sampai lima bagian yang, jika digabungkan, menjelaskan pertanyaan itu. Setelah itu, pecah lagi setiap bagian, sampai kamu tiba pada pertanyaan yang bisa kamu jawab dengan data atau dengan tindakan konkret.

Contoh: "Mengapa laba toko roti turun?". Laba adalah pendapatan dikurangi biaya, jadi pembagian pertamanya cukup wajar:

- **Apakah pendapatan turun?** Bisa jadi pelanggannya berkurang atau setiap pelanggan berbelanja lebih sedikit.
- **Apakah biaya naik?** Bisa dari bahan baku, gaji, sewa, listrik, atau biaya lain.

Setiap cabang bisa dipecah sekali lagi. "Pelanggan berkurang" bisa menjadi: pelanggan pagi berkurang, pelanggan sore berkurang, pesanan antar berkurang.

## Tanpa tumpang tindih dan tanpa celah

Para konsultan sering memakai singkatan **MECE**, dari bahasa Inggris, untuk menggambarkan pembagian yang baik. Artinya "mutually exclusive, collectively exhaustive", yaitu saling lepas dan bersama-sama mencakup semuanya. Secara sederhana, pembagian itu harus punya dua sifat:

- **Tanpa tumpang tindih:** setiap bagian membahas hal yang berbeda. Jika dua bagian tumpang tindih, kamu bisa menghitung penyebab yang sama dua kali.
- **Tanpa celah:** bagian-bagian itu, jika digabungkan, mencakup semua kemungkinan. Jika ada bagian yang hilang, penyebab sebenarnya bisa justru ada di situ.

Membagi pelanggan menjadi "anak muda" dan "pelajar" gagal di kedua hal: banyak pelajar adalah anak muda, dan orang dewasa yang bukan pelajar tidak tercakup. Sebaliknya, pembagian menjadi "di bawah 30 tahun" dan "30 tahun ke atas" tidak punya tumpang tindih maupun celah.

## Tips untuk membagi dengan baik

- **Gunakan rumus jika ada.** Laba adalah pendapatan dikurangi biaya. Pendapatan adalah jumlah pelanggan dikali rata-rata belanja. Rumus menjamin pembagian tanpa celah.
- **Gunakan tahapan sebuah proses.** Masalah pengiriman bisa dipecah menjadi pemesanan, penyiapan barang, pengangkutan, dan penerimaan.
- **Gunakan kategori sederhana.** Internal dan eksternal, sebelum dan sesudah, per wilayah, per produk.
- **Tambahkan "lainnya" jika perlu.** Cabang bernama "lainnya" menutup celah, asalkan tidak terlalu besar.

## Mengapa ini membantu

Pohon ini mengubah satu pertanyaan sulit menjadi beberapa pertanyaan yang lebih mudah. Pohon ini juga menunjukkan apa yang belum kamu selidiki dan memungkinkan pekerjaan dibagi di antara beberapa orang tanpa ada dua orang yang mengerjakan hal yang sama.`,
      practice: {
        question: `Pendapatan bulanan sebuah gym turun. Usulkan pembagian pertama pertanyaan ini menjadi dua cabang, tanpa tumpang tindih dan tanpa celah, lalu pecah setiap cabang menjadi dua.`,
        answer: `Salah satu pembagian yang mungkin memakai rumus: pendapatan = jumlah anggota yang membayar × rata-rata iuran per anggota. Cabang 1, "apakah jumlah anggota turun?", dipecah menjadi "anggota baru yang masuk lebih sedikit" dan "anggota yang keluar lebih banyak". Cabang 2, "apakah rata-rata iuran turun?", dipecah menjadi "harga paket turun, misalnya karena diskon" dan "anggota beralih ke paket yang lebih murah". Pembagian lain juga bisa benar, asalkan mencakup semua kemungkinan tanpa ada yang tumpang tindih.`,
      },
    },
    {
      title: 'Hipotesis dan pengujian dengan data',
      body: `Setelah memecah masalah, kamu bisa menyelidiki setiap cabang pohon satu per satu. Tetapi cara ini bisa memakan banyak waktu. Alternatif yang lebih cepat adalah memulai dengan sebuah **hipotesis**: tebakan yang beralasan tentang jawabannya, yang akan kamu coba buktikan atau patahkan.

## Mengapa mulai dengan tebakan

Ini mungkin terdengar bertentangan. Bukankah lebih baik mengumpulkan semua data dulu baru menyimpulkan? Dalam praktiknya, tanpa hipotesis, orang sering mengumpulkan data dalam jumlah besar yang tidak menjawab apa pun. Hipotesis menunjukkan data mana yang penting. Hipotesis berfungsi seperti peta sementara: kamu mengikutinya, tetapi segera mengganti peta begitu menemukan bukti yang bertentangan.

## Cara menulis hipotesis yang baik

Hipotesis yang baik bersifat spesifik dan bisa diuji. Bandingkan:

- Lemah: "Masalahnya ada di layanan pelanggan."
- Baik: "Waktu tunggu naik karena tim kehilangan dua orang pada bulan Maret dan tidak ada penggantinya."

Hipotesis kedua menyatakan apa yang diharapkan muncul di data. Jika hipotesis itu benar, waktu tunggu seharusnya mulai naik pada bulan Maret dan seharusnya lebih tinggi pada jam-jam ketika petugasnya kurang.

## Cari apa yang bisa mematahkan hipotesis

Langkah paling penting adalah bertanya: jika hipotesisku salah, apa yang akan kulihat di data? Lalu, carilah tepat hal itu. Sikap ini melindungimu dari bias konfirmasi, yaitu kecenderungan untuk hanya mencari hal yang membenarkan apa yang sudah kamu yakini.

Dalam contoh tadi, jika waktu tunggu sudah naik sejak Januari, sebelum tim berkurang, hipotesis itu melemah. Jika waktu tunggu naik sama besarnya di semua jam, termasuk di jam-jam yang timnya tetap lengkap, hipotesis itu juga melemah.

## Korelasi bukan sebab

Dua hal yang terjadi bersamaan belum tentu punya hubungan sebab-akibat. Penjualan es krim dan kasus kulit terbakar matahari sama-sama naik di musim panas, tetapi yang satu tidak menyebabkan yang lain: keduanya disebabkan oleh cuaca panas. Saat data menunjukkan sebuah hubungan, tanyakan apakah ada faktor ketiga yang menjelaskan keduanya, atau apakah sebab-akibatnya bisa jadi berlawanan arah.

## Sebuah siklus, bukan garis lurus

Dalam praktiknya, pekerjaan ini adalah sebuah siklus: kamu merumuskan hipotesis, mengujinya, menyesuaikannya, dan mengujinya lagi. Mematahkan sebuah hipotesis bukan kegagalan. Itu kemajuan, karena satu cabang pohon tersingkir dan kamu makin dekat dengan penyebab sebenarnya.`,
      practice: {
        question: `Penjualan sebuah toko online turun pada bulan Juli. Hipotesis tim adalah: "Penjualan turun karena desain baru situs, yang diluncurkan awal Juli, membuat proses pembayaran lebih sulit." Sebutkan satu data yang akan mendukung hipotesis ini dan satu data yang akan mematahkannya.`,
        answer: `Data yang akan mendukung: proporsi orang yang memasukkan produk ke keranjang lalu batal di halaman pembayaran meningkat tepat setelah desain baru diluncurkan. Data yang akan mematahkan: penjualan sudah turun sejak Juni, sebelum desain baru, atau turun sama tajamnya di aplikasi toko, yang tidak berubah. Jawaban lain juga mungkin, asalkan memakai data yang akan berbeda tergantung apakah hipotesisnya benar atau salah.`,
      },
    },
    {
      title: 'Bekerja mundur dan memakai analogi',
      body: `Saat jalan dari awal sampai akhir tidak jelas, dua strategi membantu membuka kebuntuan berpikir: memulai dari akhir dan mencari masalah serupa yang sudah kamu tahu cara menyelesaikannya. Matematikawan George Pólya, dalam sebuah buku klasik tentang pemecahan masalah, menganjurkan keduanya.

## Mulai dari tujuan

Bekerja mundur berarti berangkat dari situasi akhir yang diinginkan lalu bertanya: apa yang harus terwujud tepat sebelum itu? Dan sebelum itu? Kamu terus mundur sampai tiba pada sesuatu yang sudah kamu miliki atau bisa kamu lakukan hari ini.

Contoh: kamu harus tiba di bandara pukul 14.00.

- Agar tiba pukul 14.00, kamu harus berangkat dari rumah pukul 13.00, karena perjalanannya satu jam.
- Agar bisa berangkat pukul 13.00 dengan koper siap, kamu harus selesai berkemas paling lambat pukul 12.30.
- Agar bisa berkemas dengan tenang, kamu harus mulai pukul 11.30.

Sekarang rencananya jelas, dan kamu tahu jam berapa setiap hal harus terjadi.

Logika yang sama berlaku untuk target yang lebih besar. Jika kamu ingin lari 10 km dalam 12 minggu lagi, tanyakan berapa jauh kamu harus berlari di minggu ke-11, lalu di minggu ke-10, dan seterusnya, sampai tiba pada latihan minggu ini.

## Kapan memakainya

Strategi ini cocok saat tujuannya jelas dan titik awalnya punya banyak kemungkinan jalan. Contohnya perencanaan dengan tenggat, beberapa jenis teka-teki, dan soal-soal logika tertentu. Jika dimulai dari akhir, biasanya jalan yang perlu dipertimbangkan lebih sedikit.

## Analogi: masalah yang serupa

Strategi kedua adalah bertanya: pernahkah aku melihat masalah dengan struktur yang sama? Ini bukan soal menemukan situasi yang persis sama, melainkan situasi yang bekerja dengan logika yang sama.

Satu contoh klasik dari psikologi: seorang dokter harus menghancurkan tumor dengan radiasi, tetapi sinar yang cukup kuat juga akan menghancurkan jaringan sehat yang dilewatinya. Dalam penelitian Mary Gick dan Keith Holyoak, hanya sedikit orang yang bisa memecahkan masalah ini sendiri. Saat mereka lebih dulu membaca kisah seorang jenderal yang membagi pasukannya menjadi kelompok-kelompok kecil, yang datang lewat jalan berbeda dan bertemu di sasaran pada waktu yang sama, lalu diberi petunjuk bahwa kisah itu bisa membantu, sebagian besar berhasil menemukan solusinya: beberapa sinar lemah, dari arah yang berbeda, yang kekuatannya baru menyatu di tumor.

## Hati-hati dengan analogi

Penelitian-penelitian itu juga menunjukkan bahwa, tanpa petunjuk, banyak orang tidak menyadari analogi tersebut. Karena itu, ada gunanya sengaja bertanya: jika detailnya dikesampingkan, apa struktur masalah ini? Kamu juga perlu memeriksa di mana analogi itu tidak cocok, karena tidak ada masalah yang persis sama dengan masalah lain.`,
      practice: {
        question: `Sebuah pesta dimulai pukul 20.00. Kamu butuh 30 menit untuk merapikan ruangan, dan itu baru bisa dilakukan setelah makanan siap. Makanan butuh 2 jam untuk siap, dan sebelum mulai memasaknya kamu harus pergi ke supermarket, yang memakan waktu 1 jam pulang-pergi. Dengan bekerja mundur, pukul berapa kamu harus berangkat ke supermarket?`,
        answer: `Pukul 16.30. Agar ruangan siap pukul 20.00, kamu mulai merapikannya pukul 19.30. Jadi makanan harus siap pukul 19.30, dan memasaknya dimulai pukul 17.30. Pergi ke supermarket memakan waktu 1 jam dan harus selesai sebelum mulai memasak, jadi kamu berangkat pukul 16.30.`,
      },
    },
    {
      title: 'Dampak dan usaha: apa yang dikerjakan lebih dulu',
      body: `Setelah memahami masalah dan penyebabnya, biasanya muncul beberapa solusi yang mungkin. Jarang ada waktu dan sumber daya untuk semuanya. Memprioritaskan berarti memilih dari mana memulai, dan juga apa yang ditunda atau tidak dikerjakan sama sekali.

## Matriks dampak dan usaha

Salah satu alat sederhana adalah menilai setiap solusi dengan dua kriteria:

- **Dampak:** seberapa besar solusi ini membantu mencapai tujuan?
- **Usaha:** seberapa banyak waktu, uang, dan tenaga yang dibutuhkannya?

Dengan begitu, setiap solusi masuk ke salah satu dari empat kelompok:

- **Dampak tinggi dan usaha rendah:** kerjakan lebih dulu. Inilah kemenangan cepat.
- **Dampak tinggi dan usaha tinggi:** rencanakan dengan cermat. Ini proyek yang layak dikerjakan, tetapi butuh persiapan.
- **Dampak rendah dan usaha rendah:** kerjakan jika ada sisa waktu, tanpa membiarkannya menggeser prioritas.
- **Dampak rendah dan usaha tinggi:** hindari. Solusi seperti ini menghabiskan sumber daya dan hasilnya kecil.

## Nilai sederhana sudah cukup

Tidak perlu terlalu presisi. Beri nilai 1 sampai 5 untuk dampak dan satu nilai lagi untuk usaha setiap pilihan. Salah satu cara membandingkannya adalah membagi dampak dengan usaha: makin besar hasilnya, makin besar manfaat yang kamu dapat per satuan usaha. Gunakan angka ini sebagai panduan, bukan aturan akhir.

## Hal yang perlu diperhatikan

- **Perkiraan usaha biasanya terlalu optimistis.** Ingat soal terlalu percaya diri dan bandingkan dengan tugas serupa yang pernah kamu kerjakan.
- **Dampak bergantung pada tujuan.** Solusi berdampak tinggi untuk menekan biaya bisa saja tidak berdampak sama sekali pada kepuasan pelanggan. Selalu nilai berdasarkan tujuan yang dirumuskan di awal.
- **Ketergantungan mengubah urutan.** Kadang tugas berdampak kecil harus didahulukan karena membuka jalan bagi tugas lain yang lebih penting.
- **Kemenangan cepat saja tidak cukup.** Hanya mengerjakan yang mudah memberi rasa ada kemajuan, tetapi masalah yang paling penting biasanya menuntut usaha besar.

## Sedikit penyebab, banyak akibat

Dalam banyak masalah, sebagian kecil penyebab bertanggung jawab atas sebagian besar akibat. Misalnya, sering kali hanya beberapa jenis cacat produk yang menjelaskan sebagian besar keluhan. Gagasan ini dikenal sebagai prinsip Pareto. Proporsi pastinya berbeda dari kasus ke kasus, tetapi pelajarannya berguna: sebelum menangani semuanya, cari tahu beberapa penyebab mana yang paling berpengaruh.`,
      practice: {
        question: `Sebuah tim perlu mengurangi keluhan pelanggan dan memberi nilai 1 sampai 5 untuk empat pilihan. A: memperbaiki template jawaban layanan pelanggan (dampak 3, usaha 1). B: membangun ulang seluruh sistem pemesanan (dampak 5, usaha 5). C: memperbaiki error yang menyebabkan tagihan ganda (dampak 4, usaha 2). D: mengganti warna situs (dampak 1, usaha 2). Hitung dampak dibagi usaha untuk masing-masing pilihan dan tunjukkan urutan yang disarankan.`,
        answer: `A = 3 ÷ 1 = 3; C = 4 ÷ 2 = 2; B = 5 ÷ 5 = 1; D = 1 ÷ 2 = 0,5. Urutan yang disarankan adalah A, C, B, dan D. A dan C adalah kemenangan cepat dan dikerjakan lebih dulu. B punya dampak terbesar, tetapi butuh usaha besar, jadi harus direncanakan dengan cermat. D berdampak kecil terhadap keluhan dan bisa ditaruh paling akhir atau dibuang.`,
      },
    },
    {
      title: 'Sampaikan solusinya: jawaban lebih dulu',
      body: `Solusi yang baik baru membuahkan hasil jika orang yang tepat memahaminya dan memutuskan untuk bertindak. Banyak analisis yang cermat sia-sia karena disajikan sesuai urutan pengerjaannya: pertama konteks, lalu data, lalu detail, dan baru di akhir kesimpulannya. Pendengar sudah lelah sebelum sampai ke bagian yang penting.

## Mulai dengan jawaban

Konsultan Barbara Minto memopulerkan model yang disebut **prinsip piramida**. Gagasan utamanya adalah membalik urutan: mulai dengan kesimpulan, lalu sajikan alasan-alasan utama, dan baru setelah itu detail yang mendukung setiap alasan.

- **Puncak:** jawaban atau rekomendasi, dalam satu kalimat.
- **Tengah:** dua sampai empat alasan yang mendukung jawaban itu.
- **Dasar:** data dan contoh yang mendukung setiap alasan.

Orang yang tidak punya banyak waktu cukup membaca puncaknya dan sudah tahu intinya. Orang yang ingin memahami lebih jauh bisa turun sedalam yang ia perlukan.

## Sebuah contoh

Sesuai urutan kejadian: "Pada bulan Maret, kami menganalisis data layanan pelanggan. Kami melihat waktu tunggu naik. Lalu, kami berbicara dengan tim. Kami juga membandingkan jam-jamnya. Karena itu, kami menyarankan merekrut dua orang."

Dengan jawaban lebih dulu: "Saya merekomendasikan merekrut dua orang untuk layanan telepon. Ada tiga alasan. Waktu tunggu naik tiga kali lipat sejak tim kehilangan dua petugas. Jam-jam yang paling terdampak justru jam yang tidak lagi ada petugasnya. Dan biaya perekrutan lebih kecil daripada perkiraan kerugian dari pelanggan yang menyerah menunggu."

Versi kedua langsung menyatakan apa yang diminta dan mengapa. Pendengar bisa setuju, tidak setuju, atau meminta detail tentang satu alasan tertentu.

## Tips untuk menyampaikan dengan baik

- **Sesuaikan dengan audiens.** Seorang direktur ingin tahu biaya, tenggat, dan risiko. Tim teknis ingin tahu cara kerja solusinya.
- **Pisahkan fakta dari pendapat.** Tunjukkan dengan jelas mana yang diukur dan mana yang perkiraan.
- **Tunjukkan apa yang kamu singkirkan.** Menyebut alternatif yang sudah dipertimbangkan dan alasan tidak dipilihnya akan meningkatkan kepercayaan pada rekomendasimu.
- **Sebutkan langkah berikutnya.** Akhiri dengan apa yang harus terjadi sekarang dan siapa yang perlu memutuskan.

## Tes cepat

Sebelum menyajikan, coba ringkas rekomendasimu dalam satu kalimat dan alasan-alasanmu dalam tiga kalimat lagi. Jika tidak bisa, analisismu mungkin sudah selesai, tetapi pesannya belum.`,
      practice: {
        question: `Susun ulang pesan ini agar dimulai dengan jawaban: "Kami melakukan survei terhadap 200 pelanggan. Banyak yang mengatakan jam buka toko saat ini tidak cocok bagi mereka. Sebagian besar bekerja sampai pukul 18.00. Toko tutup pukul 18.00. Para pesaing buka sampai pukul 20.00. Kami menyarankan agar jam buka diperpanjang sampai pukul 20.00."`,
        answer: `Salah satu versi yang mungkin: "Kami merekomendasikan agar jam buka toko diperpanjang sampai pukul 20.00. Pertama, sebagian besar pelanggan yang disurvei bekerja sampai pukul 18.00, tepat saat toko tutup. Kedua, banyak dari 200 pelanggan yang ditanya mengatakan jam buka saat ini tidak cocok bagi mereka. Ketiga, para pesaing sudah buka sampai pukul 20.00." Rekomendasinya ada di kalimat pertama, dan setiap alasan menyusul beserta datanya.`,
      },
    },
  ],
};

export default t;
