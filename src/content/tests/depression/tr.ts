// depression — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Çökkün ruh hâli işaretleri',
  desc: 'Son iki haftada isteksizlik, ilgi kaybı ve enerji eksikliği gibi işaretlerin ne sıklıkla ortaya çıktığını gör.',
  intro:
    'Bu anket, çökkün ruh hâliyle bağlantılı iki işaret grubuna bakar: ruh hâlindeki ve bir şeylere duyulan ilgideki değişiklikler ile enerjideki, uykudaki, iştahtaki ve konsantrasyondaki değişiklikler. Son iki haftayla ilgili 10 ifade var. Her biri için, bu süre içinde sende ne sıklıkla yaşandığını belirt. Bazı ifadeler hassas konulara değiniyor: Kendi hızında ve içtenlikle cevap ver. Bu, cevaplarına dayanan bir öz değerlendirmedir, bir teşhis değildir.',
  scale: ['Hiç', 'Birkaç gün', 'Günlerin yarısından fazlası', 'Neredeyse her gün'],
  items: [
    'Bir hobi ya da arkadaşlarla buluşmak gibi eskiden keyif aldığım şeyler tadını kaybetti.',
    'Duş almak ya da bir mesaja cevap vermek gibi basit işler için bile enerjim olmadı.',
    'Günün büyük bölümünü açıklaması zor bir üzüntü ya da boşluk duygusuyla geçirdim.',
    'Uykum değişti: Uykuya dalmakta zorlandım, gece birkaç kez uyandım ya da normalden çok daha fazla uyudum.',
    'İştahım değişti: Alıştığımdan çok daha az ya da çok daha fazla yedim.',
    'Önümüzdeki aylara bir şeylerin düzeleceğine dair hiç umut duymadan baktım.',
    'Konsantre olamadığım için sohbetlerde ya da basit işlerde konuyu kaçırdım.',
    'Kendimi değersiz olduğumu ya da yaptığım her şeyin ters gittiğini düşünürken yakaladım.',
    'Ne yiyeceğim ya da ne giyeceğim gibi küçük kararlar bile fazlasıyla zor geldi.',
    'Aklımdan yaşamaya değmediğine ya da kendime zarar vermeye dair düşünceler geçti.',
  ],
  dims: {
    mood: {
      label: 'Ruh hâli ve ilgi',
      desc: 'Süregelen üzüntü, bir şeylerden keyif alamama, umutsuzluk ve kendine dair çok olumsuz düşünceler gibi işaretleri ölçer.',
      high: 'Son iki haftada üzüntü, ilgi kaybı ya da kendine dair sert düşünceler sık sık ortaya çıktı. Bu bir irade eksikliği değildir: Çökkün ruh hâli kendimize ve geleceğe bakışımızı değiştirir. Bu konuyu bir uzmanla konuşmak önemli bir adımdır ve yardım istemek için durumun kötüleşmesini beklemen gerekmez.',
      low: 'Ruh hâlin ve bir şeylere duyduğun ilgi son iki haftada dengeli kalmış görünüyor. Üzgün günler herkesin başına gelir, ama günlük hayatını ele geçirmiş gibi görünmüyorlar. Sana iyi gelen şeylere özen göstermeye devam et.',
      tips: [
        'İçinden gelmese bile hafta boyunca küçük, keyifli etkinlikler planla: Çoğu zaman istek başlamadan önce değil, başladıktan sonra gelir.',
        'Sadece bir mesaj ya da kısa bir sohbet olsa bile güvendiğin kişilerle bağını koru.',
        'Üzüntü ya da ilgi kaybı iki haftadan uzun sürerse, bu konuyu konuşmak için bir psikoloğa ya da doktora başvur.',
      ],
    },
    energy: {
      label: 'Enerji, uyku, iştah ve konsantrasyon',
      desc: 'Yorgunluk, uyku ve iştahtaki değişiklikler ve konsantrasyon güçlüğü gibi, çoğu zaman çökkün ruh hâline eşlik eden bedensel ve günlük işleyişe dair değişiklikleri ölçer.',
      high: 'Bedenin ve zihnin son iki haftada yıpranma işaretleri verdi: daha az enerji, uykuda ya da iştahta değişiklikler ve konsantrasyon güçlüğü. Bu işaretler çökkün ruh hâline eşlik edebilir, ama stres, kötü geçen geceler ya da beden sağlığıyla ilgili sorunlar gibi başka nedenleri de olabilir. Özellikle sürerlerse bir doktorla konuşmaya değer.',
      low: 'Enerjin, uykun, iştahın ve konsantrasyonun dengeli bir şekilde işliyor görünüyor. Bu temel, en zor günleri atlatmada genellikle çok yardımcı olur. Ona özen göstermeye devam et.',
      tips: [
        'İsteksiz olduğun günlerde bile düzenli yatma, kalkma ve yemek saatleri tutmaya çalış.',
        'Kısa bir yürüyüş bile olsa biraz açık havaya çık ve bedenini hareket ettir: Gün ışığı ve hareket uykuyu ve enerjiyi düzenlemeye yardımcı olur.',
        'İşleri küçük parçalara böl ve kendinden eski temponu beklemeden tamamladığın her parçayı takdir et.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Az işaret',
      text: 'Cevapların, son iki haftada çökkün ruh hâline dair çok az işaret olduğunu ya da hiç olmadığını gösteriyor. Üzüntü ya da yorgunluk anları hayatın bir parçasıdır ve senin durumunda günlük hayatını ele geçirmiş gibi görünmüyor. Uykuna, hareketine ve ilişkilerine özen göstermeye devam et.',
    },
    mild: {
      label: 'Hafif işaretler',
      text: 'Cevapların, günlerin bir kısmında çökkün ruh hâline dair bazı işaretler olduğunu gösteriyor. Bu, yorgunluk, kayıp ya da değişim dönemlerinde yaşanabilir. Önümüzdeki haftalarda nasıl hissettiğini gözlemle; işaretler sürerse ya da artarsa bir uzmanla konuş.',
    },
    moderate: {
      label: 'Orta düzeyde işaretler',
      text: 'Cevapların, günlerin büyük bölümünde çökkün ruh hâline dair işaretler olduğunu gösteriyor; bu da günlük hayatına ağır geliyor olabilir. Bu durum ilgiyi ve özeni hak ediyor ve tek başına çözmen gereken bir şey değil. Hissettiklerini konuşmak için psikolog ya da doktor gibi bir uzmana başvur.',
    },
    high: {
      label: 'Yoğun işaretler',
      text: 'Cevapların, son iki haftada çökkün ruh hâline dair sık ve yoğun işaretler olduğunu gösteriyor. Bu her şeyi daha zor hâle getirebilir, ama tedavisi var ve insanlar doğru destekle iyileşiyor. En kısa sürede psikolog ya da doktor gibi bir uzmana başvur ve güvendiğin birine nasıl olduğunu anlat.',
    },
  },
  resultTitle: 'Ruh hâli işaretlerin',
  resultIntro: 'Sonuç, son iki haftayla ilgili cevaplarını toplar. Aşağıda hangi aralıkta olduğunu ve ruh hâli ve ilgi ile enerji, uyku, iştah ve konsantrasyon alanlarında nasıl puan aldığını görebilirsin.',
  note: 'Bu anket, kendi cevaplarına dayanan bir kendini tanıma ve tarama aracıdır. Bir depresyon teşhisi değildir: Bu değerlendirmeyi yalnızca psikolog ya da doktor gibi nitelikli bir uzman yapabilir. Yorgunluğun ve uyku ile iştahtaki değişikliklerin, bedensel olanlar da dahil, başka nedenleri de olabilir.',
  help: 'Hissettiklerini konuşmak için bir psikoloğa ya da doktoruna başvur. Bulunduğun yerdeki sağlık hizmetleri de sana yol gösterebilir ve gerektiğinde seni ruh sağlığı hizmetlerine yönlendirebilir. Sıkıntı içindeysen, ülkendeki bir kriz ya da duygusal destek hattına ulaş. Acil bir durumda 112’yi ya da bulunduğun yerin acil durum numarasını ara.',
  alert:
    'Son iki haftada yaşamaya değmediğine ya da kendine zarar vermeye dair düşünceler yaşadığını paylaştın. İçtenlikle cevap vermen çok iyi. Bu düşünceler şu anda özen gerektiriyor ve bununla yanında kimse olmadan baş etmek zorunda değilsin. Tehlikedeysen ya da kendine zarar verebileceğini hissediyorsan hemen 112’yi ya da bulunduğun yerin acil durum numarasını ara. Günün herhangi bir saatinde biriyle konuşmak için ülkendeki bir kriz ya da duygusal destek hattına ulaş. Yapabiliyorsan, nasıl hissettiğini güvendiğin birine de anlat.',
};

export default t;
