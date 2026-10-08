// qbank — Indonesian translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · jebakan membaca
  'trick-sold-but-6': { prompt: 'Sebuah toko punya 20 bola lampu. Semuanya terjual kecuali 6. Berapa bola lampu yang tersisa di toko?' },
  'trick-apples-take': { prompt: 'Ada 3 apel di atas meja dan kamu mengambil 2 di antaranya. Berapa apel yang kamu punya?' },
  'trick-fingers-hands': { prompt: 'Di 2 tangan ada 10 jari. Berapa jari yang ada di 10 tangan?' },
  'trick-family-brother': { prompt: 'Sebuah keluarga punya 4 anak perempuan, dan masing-masing punya 1 saudara laki-laki. Berapa jumlah anak dalam keluarga itu seluruhnya?' },

  // 1 · jebakan posisi
  'order-race-pass-third': {
    prompt: 'Dalam lomba lari, kamu menyalip orang di posisi ke-3, lalu tak lama kemudian pelari lain menyalipmu. Sekarang kamu di posisi berapa?',
    options: ['Ke-2', 'Ke-3', 'Ke-4', 'Ke-5', 'Tergantung'],
  },
  'order-queue-ahead-behind': { prompt: 'Dalam sebuah antrean, ada 5 orang di depanmu dan 3 orang di belakangmu. Berapa orang yang ada di antrean itu?' },
  'order-queue-both-ends': { prompt: 'Dalam sebuah antrean, seseorang berada di urutan ke-4 dari depan dan juga ke-4 dari belakang. Berapa orang yang ada di antrean itu?' },
  'order-fence-posts': { prompt: 'Sebuah pagar lurus panjangnya 100 meter, dengan satu tiang setiap 10 meter, termasuk satu tiang di masing-masing ujung. Berapa jumlah tiang pagar itu?' },

  // 2 · menghitung ruang
  'space-pyramid-edges': { prompt: 'Berapa jumlah rusuk sebuah limas beralas persegi?' },
  'space-die-visible-faces': { prompt: 'Jika melihat sebuah dadu dari satu sudut pandang saja, berapa sisi paling banyak yang bisa kamu lihat sekaligus?' },
  'space-cube-27': { prompt: 'Sebuah kubus pejal disusun dari kubus-kubus kecil yang sama besar, 3 buah di setiap rusuknya. Berapa kubus kecil yang digunakan?' },
  'space-cube-cut-faces': { prompt: 'Sebuah blok pejal berbentuk kubus dipotong menjadi dua dengan satu potongan lurus yang sejajar dengan salah satu sisinya. Berapa jumlah sisi setiap belahannya?' },

  // 28 · silogisme dengan kata buatan
  'syl-none': {
    prompt: 'Semua Vruk adalah Plent. Tidak ada Plent yang merupakan Snib. Pernyataan mana yang pasti benar?',
    options: ['Tidak ada Vruk yang merupakan Snib', 'Sebagian Vruk adalah Snib', 'Semua Plent adalah Vruk', 'Sebagian Plent bukan Vruk', 'Semua Snib adalah Plent'],
  },
  'syl-some': {
    prompt: 'Semua Krel adalah Bof. Sebagian Wem adalah Krel. Pernyataan mana yang pasti benar?',
    options: ['Semua Wem adalah Bof', 'Sebagian Wem adalah Bof', 'Semua Bof adalah Krel', 'Tidak ada Wem yang merupakan Bof', 'Sebagian Krel bukan Wem'],
  },
  'syl-shared-middle': {
    prompt: 'Semua Glorp adalah Nemp. Semua Taf adalah Nemp. Pernyataan mana yang pasti benar?',
    options: ['Semua Glorp adalah Taf', 'Sebagian Glorp adalah Taf', 'Semua Nemp adalah Glorp', 'Tidak ada Glorp yang merupakan Taf', 'Setiap Taf adalah Nemp'],
  },
  'syl-chain': {
    prompt: 'Semua Pid adalah Zung. Semua Zung adalah Hov. Pernyataan mana yang pasti benar?',
    options: ['Semua Hov adalah Pid', 'Semua Zung adalah Pid', 'Semua Pid adalah Hov', 'Sebagian Hov bukan Zung', 'Tidak ada Hov yang merupakan Pid'],
  },

  // 29 · analogi kata
  'analogy-scissors-pen': { prompt: 'Gunting untuk memotong, sedangkan pulpen untuk…', options: ['Kertas', 'Membaca', 'Tinta', 'Menulis', 'Pensil'] },
  'analogy-eye-ear': { prompt: 'Mata untuk melihat, sedangkan telinga untuk…', options: ['Suara', 'Berbicara', 'Mendengar', 'Musik', 'Hidung'] },
  'analogy-bird-bee': { prompt: 'Manusia tinggal di rumah, sedangkan lebah tinggal di…', options: ['Sarang', 'Madu', 'Bunga', 'Sayap', 'Serangga'] },
  'analogy-petal-page': { prompt: 'Kelopak adalah bagian dari bunga, sedangkan halaman adalah bagian dari…', options: ['Membaca', 'Kertas', 'Huruf', 'Kata', 'Buku'] },

  // 31 · urutan
  'rank-boxes-heaviest': {
    prompt: 'Kotak biru lebih berat daripada kotak hijau. Kotak merah lebih ringan daripada kotak hijau. Kotak mana yang paling berat?',
    options: ['Hijau', 'Biru', 'Merah', 'Biru dan merah', 'Tidak bisa diketahui'],
  },
  'rank-trains-unknown': {
    prompt: 'Kereta A lebih cepat daripada kereta B. Kereta C lebih cepat daripada kereta B. Kereta mana yang paling cepat?',
    options: ['Kereta A', 'Kereta B', 'Kereta C', 'A dan C sama cepat', 'Tidak bisa diketahui'],
  },
  'rank-cars-first': {
    prompt: 'Dalam balapan tiga mobil, mobil hitam tiba setelah mobil biru, dan mobil biru tiba setelah mobil putih. Mobil mana yang tiba pertama?',
    options: ['Biru', 'Hitam', 'Biru dan putih', 'Putih', 'Tidak bisa diketahui'],
  },
  'rank-books-thinnest': {
    prompt: 'Buku hijau lebih tebal daripada buku biru. Buku biru lebih tipis daripada buku merah. Buku mana yang paling tipis?',
    options: ['Biru', 'Hijau', 'Merah', 'Hijau dan merah', 'Tidak bisa diketahui'],
  },

  // 32 · persentase
  'pct-15-of-60': { prompt: 'Berapa 15% dari 60?' },
  'pct-35-of-40': { prompt: 'Berapa 35% dari 40?' },
  'pct-30-of-70': { prompt: 'Berapa 30% dari 70?' },
  'pct-15-of-40': { prompt: 'Berapa 15% dari 40?' },

  // 33 · yang tidak termasuk kelompok
  'odd-eagle': { prompt: 'Kata mana yang tidak termasuk dalam kelompok?', options: ['Anjing', 'Kucing', 'Kuda', 'Elang', 'Sapi'] },
  'odd-fork': { prompt: 'Kata mana yang tidak termasuk dalam kelompok?', options: ['Meja', 'Garpu', 'Kursi', 'Sofa', 'Tempat tidur'] },
  'odd-hammer': { prompt: 'Kata mana yang tidak termasuk dalam kelompok?', options: ['Palu', 'Piano', 'Drum', 'Gitar', 'Seruling'] },
  'odd-circle': { prompt: 'Kata mana yang tidak termasuk dalam kelompok?', options: ['Kubus', 'Bola', 'Limas', 'Tabung', 'Lingkaran'] },

  // 36 · refleksi kognitif: jumlah dan selisih
  'crt-bike-helmet': {
    prompt: 'Harga sebuah sepeda dan sebuah helm jika digabung adalah Rp 120.000. Sepeda Rp 100.000 lebih mahal daripada helm. Berapa harga helmnya?',
    options: ['Rp 20.000', 'Rp 15.000', 'Rp 10.000', 'Rp 5.000', 'Rp 12.000'],
  },
  'crt-backpack-case': {
    prompt: 'Harga sebuah ransel dan sebuah kotak pensil jika digabung adalah Rp 70.000. Ransel Rp 60.000 lebih mahal daripada kotak pensil. Berapa harga kotak pensilnya?',
    options: ['Rp 5.000', 'Rp 10.000', 'Rp 6.000', 'Rp 7.000', 'Rp 1.000'],
  },
  'crt-bucket-water': {
    prompt: 'Sebuah ember penuh air beratnya 13 kg. Airnya 12 kg lebih berat daripada ember kosong. Berapa berat ember kosongnya?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'Jumlah usia seorang ibu dan anak laki-lakinya adalah 36 tahun. Ibu itu 30 tahun lebih tua daripada anaknya. Berapa usia anaknya?',
    options: ['6 tahun', '5 tahun', '4 tahun', '2 tahun', '3 tahun'],
  },

  // 38 · refleksi kognitif: perbandingan yang menjebak
  'crt-robots-toys': {
    prompt: 'Jika 3 robot merakit 3 mainan dalam 3 menit, berapa lama waktu yang dibutuhkan 60 robot untuk merakit 60 mainan?',
    options: ['1 menit', '2 menit', '3 menit', '20 menit', '60 menit'],
  },
  'crt-algae-lake': {
    prompt: 'Luas ganggang di sebuah danau bertambah dua kali lipat setiap hari. Dalam 30 hari, ganggang itu menutupi seluruh danau. Dalam berapa hari ganggang itu menutupi setengah danau?',
    options: ['10 hari', '15 hari', '20 hari', '29 hari', '30 hari'],
  },
  'crt-log-cuts': {
    prompt: 'Memotong sebatang kayu menjadi 3 bagian butuh waktu 10 menit. Jika setiap kali memotong selalu butuh waktu yang sama, berapa lama waktu untuk memotong batang kayu serupa menjadi 6 bagian?',
    options: ['12 menit', '15 menit', '18 menit', '20 menit', '25 menit'],
  },
  'crt-snail-well': {
    prompt: 'Seekor siput berada di dasar sumur sedalam 10 meter. Pada siang hari, siput itu naik 3 meter, dan pada malam hari merosot 2 meter. Dalam berapa hari siput itu sampai di bibir sumur?',
    options: ['8 hari', '5 hari', '7 hari', '9 hari', '10 hari'],
  },
};

export default t;
