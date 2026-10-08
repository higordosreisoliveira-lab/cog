// qbank — Turkish translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · okuma tuzağı
  'trick-sold-but-6': { prompt: 'Bir mağazada 20 ampul vardı. 6 tanesi hariç hepsi satıldı. Mağazada kaç ampul kaldı?' },
  'trick-apples-take': { prompt: 'Bir masanın üzerinde 3 elma var ve sen bunlardan 2 tanesini alıyorsun. Kaç elman var?' },
  'trick-fingers-hands': { prompt: '2 elde 10 parmak vardır. 10 elde kaç parmak vardır?' },
  'trick-family-brother': { prompt: 'Bir ailenin 4 kızı var ve her birinin 1 erkek kardeşi var. Bu ailenin toplam kaç çocuğu var?' },

  // 1 · sıralama tuzağı
  'order-race-pass-third': {
    prompt: 'Bir yarışta 3. sıradaki kişiyi geçiyorsun ve hemen ardından başka bir yarışçı seni geçiyor. Şimdi kaçıncı sıradasın?',
    options: ['2.', '3.', '4.', '5.', 'Duruma göre değişir'],
  },
  'order-queue-ahead-behind': { prompt: 'Bir kuyrukta senin önünde 5 kişi, arkanda 3 kişi var. Kuyrukta kaç kişi var?' },
  'order-queue-both-ends': { prompt: 'Bir kuyrukta bir kişi, önden sayınca 4., arkadan sayınca da 4. sırada. Kuyrukta kaç kişi var?' },
  'order-fence-posts': { prompt: '100 metrelik düz bir çitte, iki ucunda da birer tane olmak üzere her 10 metrede bir direk var. Çitte kaç direk var?' },

  // 2 · uzamsal sayma
  'space-pyramid-edges': { prompt: 'Kare tabanlı bir piramidin kaç kenarı vardır?' },
  'space-die-visible-faces': { prompt: 'Bir zara tek bir noktadan bakarken aynı anda en fazla kaç yüzünü görebilirsin?' },
  'space-cube-27': { prompt: 'İçi dolu bir küp, her kenarında 3 tane olacak şekilde eş küçük küplerle yapılıyor. Kaç küçük küp kullanılır?' },
  'space-cube-cut-faces': { prompt: 'Küp şeklindeki içi dolu bir blok, yüzlerinden birine paralel tek bir düz kesimle ikiye bölünüyor. Her bir yarının kaç yüzü vardır?' },

  // 28 · uydurma kelimelerle kıyas
  'syl-none': {
    prompt: "Bütün Vruk'lar Plent'tir. Hiçbir Plent Snib değildir. Hangi ifade kesinlikle doğrudur?",
    options: ['Hiçbir Vruk Snib değildir', "Bazı Vruk'lar Snib'dir", "Bütün Plent'ler Vruk'tur", "Bazı Plent'ler Vruk değildir", "Bütün Snib'ler Plent'tir"],
  },
  'syl-some': {
    prompt: "Bütün Krel'ler Bof'tur. Bazı Wem'ler Krel'dir. Hangi ifade kesinlikle doğrudur?",
    options: ["Bütün Wem'ler Bof'tur", "Bazı Wem'ler Bof'tur", "Bütün Bof'lar Krel'dir", 'Hiçbir Wem Bof değildir', "Bazı Krel'ler Wem değildir"],
  },
  'syl-shared-middle': {
    prompt: "Bütün Glorp'lar Nemp'tir. Bütün Taf'lar Nemp'tir. Hangi ifade kesinlikle doğrudur?",
    options: ["Bütün Glorp'lar Taf'tır", "Bazı Glorp'lar Taf'tır", "Bütün Nemp'ler Glorp'tur", 'Hiçbir Glorp Taf değildir', "Her Taf bir Nemp'tir"],
  },
  'syl-chain': {
    prompt: "Bütün Pid'ler Zung'dur. Bütün Zung'lar Hov'dur. Hangi ifade kesinlikle doğrudur?",
    options: ["Bütün Hov'lar Pid'dir", "Bütün Zung'lar Pid'dir", "Bütün Pid'ler Hov'dur", "Bazı Hov'lar Zung değildir", 'Hiçbir Hov Pid değildir'],
  },

  // 29 · sözel benzetme
  'analogy-scissors-pen': { prompt: 'Makas kesmek içinse, kalem … içindir.', options: ['Kâğıt', 'Okumak', 'Mürekkep', 'Yazmak', 'Kurşun kalem'] },
  'analogy-eye-ear': { prompt: 'Göz görmek içinse, kulak … içindir.', options: ['Ses', 'Konuşmak', 'Duymak', 'Müzik', 'Burun'] },
  'analogy-bird-bee': { prompt: 'Kuş için yuva neyse, arı için de … odur.', options: ['Kovan', 'Bal', 'Çiçek', 'Kanat', 'Böcek'] },
  'analogy-petal-page': { prompt: 'Taç yaprağı için çiçek neyse, sayfa için de … odur.', options: ['Okumak', 'Kâğıt', 'Harf', 'Kelime', 'Kitap'] },

  // 31 · sıralama
  'rank-boxes-heaviest': {
    prompt: 'Mavi kutu yeşil kutudan ağır. Kırmızı kutu yeşil kutudan hafif. En ağır kutu hangisi?',
    options: ['Yeşil', 'Mavi', 'Kırmızı', 'Mavi ve kırmızı', 'Bilinemez'],
  },
  'rank-trains-unknown': {
    prompt: 'A treni B treninden hızlı. C treni B treninden hızlı. En hızlı tren hangisi?',
    options: ['A treni', 'B treni', 'C treni', 'A ve C eşit', 'Bilinemez'],
  },
  'rank-cars-first': {
    prompt: 'Üç arabanın katıldığı bir yarışta siyah araba maviden sonra, mavi araba da beyazdan sonra geldi. Hangi araba birinci geldi?',
    options: ['Mavi', 'Siyah', 'Mavi ve beyaz', 'Beyaz', 'Bilinemez'],
  },
  'rank-books-thinnest': {
    prompt: 'Yeşil kitap mavi kitaptan kalın. Mavi kitap kırmızı kitaptan ince. En ince kitap hangisi?',
    options: ['Mavi', 'Yeşil', 'Kırmızı', 'Yeşil ve kırmızı', 'Bilinemez'],
  },

  // 32 · yüzde
  'pct-15-of-60': { prompt: "60'ın %15'i kaçtır?" },
  'pct-35-of-40': { prompt: "40'ın %35'i kaçtır?" },
  'pct-30-of-70': { prompt: "70'in %30'u kaçtır?" },
  'pct-15-of-40': { prompt: "40'ın %15'i kaçtır?" },

  // 33 · gruba uymayan
  'odd-eagle': { prompt: 'Hangi kelime gruba uymuyor?', options: ['Köpek', 'Kedi', 'At', 'Kartal', 'İnek'] },
  'odd-fork': { prompt: 'Hangi kelime gruba uymuyor?', options: ['Masa', 'Çatal', 'Sandalye', 'Kanepe', 'Yatak'] },
  'odd-hammer': { prompt: 'Hangi kelime gruba uymuyor?', options: ['Çekiç', 'Piyano', 'Davul', 'Gitar', 'Flüt'] },
  'odd-circle': { prompt: 'Hangi kelime gruba uymuyor?', options: ['Küp', 'Küre', 'Piramit', 'Silindir', 'Daire'] },

  // 36 · bilişsel yansıma: toplam ve fark
  'crt-bike-helmet': {
    prompt: 'Bir bisiklet ile bir kask birlikte 120,00 TL. Bisiklet, kasktan 100,00 TL daha pahalı. Kask kaç TL?',
    options: ['20,00 TL', '15,00 TL', '10,00 TL', '5,00 TL', '12,00 TL'],
  },
  'crt-backpack-case': {
    prompt: 'Bir sırt çantası ile bir kalem kutusu birlikte 70,00 TL. Sırt çantası, kalem kutusundan 60,00 TL daha pahalı. Kalem kutusu kaç TL?',
    options: ['5,00 TL', '10,00 TL', '6,00 TL', '7,00 TL', '1,00 TL'],
  },
  'crt-bucket-water': {
    prompt: 'Su dolu bir kova 13 kg geliyor. Su, boş kovadan 12 kg daha ağır. Boş kovanın ağırlığı ne kadar?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'Bir anne ile oğlunun yaşları toplamı 36. Anne, oğlundan 30 yaş büyük. Oğul kaç yaşında?',
    options: ['6 yaşında', '5 yaşında', '4 yaşında', '2 yaşında', '3 yaşında'],
  },

  // 38 · bilişsel yansıma: yanıltıcı orantı
  'crt-robots-toys': {
    prompt: '3 robot 3 oyuncağı 3 dakikada monte ediyorsa, 60 robot 60 oyuncağı kaç dakikada monte eder?',
    options: ['1 dakika', '2 dakika', '3 dakika', '20 dakika', '60 dakika'],
  },
  'crt-algae-lake': {
    prompt: 'Bir göldeki yosunların kapladığı alan her gün iki katına çıkıyor. Yosunlar 30 günde gölün tamamını kaplıyor. Gölün yarısını kaç günde kaplarlar?',
    options: ['10 gün', '15 gün', '20 gün', '29 gün', '30 gün'],
  },
  'crt-log-cuts': {
    prompt: 'Bir kütüğü 3 parçaya kesmek 10 dakika sürüyor. Her kesim hep aynı süreyi alıyorsa, aynı büyüklükte bir kütüğü 6 parçaya kesmek ne kadar sürer?',
    options: ['12 dakika', '15 dakika', '18 dakika', '20 dakika', '25 dakika'],
  },
  'crt-snail-well': {
    prompt: 'Bir salyangoz 10 metre derinliğindeki bir kuyunun dibinde. Gündüz 3 metre tırmanıyor, gece 2 metre geri kayıyor. Kuyunun ağzına kaç günde ulaşır?',
    options: ['8 gün', '5 gün', '7 gün', '9 gün', '10 gün'],
  },
};

export default t;
