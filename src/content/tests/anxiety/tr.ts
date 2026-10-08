// anxiety — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Kaygı düzeyi',
  desc: 'Son iki haftada endişenin ve bedendeki gerginliğin günlük hayatında ne sıklıkla ortaya çıktığını gör.',
  intro:
    'Bu anket kaygının iki yüzüne bakar: düşünceleri meşgul eden endişe ve bedende ve davranışlarda kendini gösteren gerginlik. Son iki haftayla ilgili 10 ifade var. Her biri için, genel olarak nasıl biri olduğunu değil, bu süre içinde sende ne sıklıkla yaşandığını belirt. Doğru ya da yanlış cevap yoktur. Bu, cevaplarına dayanan bir öz değerlendirmedir: Nasıl olduğunu fark etmene yardımcı olur, ama bir teşhis değildir.',
  scale: ['Hiç', 'Birkaç gün', 'Günlerin yarısından fazlası', 'Neredeyse her gün'],
  items: [
    'Günün büyük bölümünde aklım, biri diğerini getiren endişelerle meşguldü.',
    'Bedenimi, özellikle omuzlarımı, boynumu ya da çenemi gergin hissettim.',
    'Başka bir şey düşünmeye çalıştım ama aynı endişe verici düşünceler geri geldi.',
    'Hiçbir fiziksel çaba göstermediğim hâlde kalbimin hızla çarptığını ya da nefesimin daraldığını fark ettim.',
    'Uyku vaktinde aklım sorunları ve yarım kalmış işleri evirip çevirdi.',
    'Kıpırdamadan durmakta zorlandım; bacaklarımı salladım, ellerimle oynadım ya da bir o yana bir bu yana yürüdüm.',
    'Cevapsız bir mesaj gibi basit bir şey karşısında hemen en kötüsünü düşündüm.',
    'Bir gürültü ya da bir gecikme gibi küçük aksilikler beni normalden daha fazla çileden çıkardı.',
    'Bir şeylerin ters gideceği korkusuyla kararları erteledim ya da bazı durumlardan kaçındım.',
    'Boş zamanlarımda bile bedenim tetikte kalmaya devam etti ve yavaşlayamadım.',
  ],
  dims: {
    worry: {
      label: 'Endişe',
      desc: 'Endişe verici düşüncelerin aklını ne kadar meşgul ettiğini, dikkatini dağıtmaya çalıştığında bile geri gelip gelmediğini ve kararlarını ne kadar etkilediğini ölçer.',
      high: 'Son haftalarda endişe düşüncelerinde epey yer kapladı ve çoğu zaman henüz yaşanmamış sorunları önceden düşünmene yol açtı. Bu yorucudur ve odağını şu anda elinden gelenlerden uzaklaştırır. Bu düşüncelere sınır koymanın yollarını öğrenmeye ve günlük hayatını zorluyorlarsa destek almaya değer.',
      low: 'Son haftalarda endişe az ya da geçici olarak ortaya çıktı. Sorunlar gününü ele geçirmeden onlar üzerine düşünebiliyor gibi görünüyorsun. Bu dengeyi korumana yardımcı olan alışkanlıklara özen göstermeye devam et.',
      tips: [
        'Her gün endişelerini yazmak için 15 dakika ayır ve her birinin yanına atılabilecek bir sonraki adımı ya da kontrolünün dışında olup olmadığını yaz.',
        'En kötüsünü hayal ettiğini fark ettiğinde kendine sor: Gerçekte olma ihtimali en yüksek olan şey ne?',
        'Haberlere ve sosyal medyaya ayırdığın zamanı, özellikle uyumadan önce, azalt.',
      ],
    },
    tension: {
      label: 'Bedende gerginlik ve huzursuzluk',
      desc: 'Gergin kaslar, hızlı kalp atışı, huzursuzluk ve küçük şeylere karşı sinirlilik gibi kaygıyla bağlantılı bedensel ve davranışsal işaretleri ölçer.',
      high: 'Bedenin son haftalarda gerginlik, huzursuzluk ya da küçük aksiliklere güçlü tepkiler gibi pek çok alarm işareti verdi. Bu, bedenin baskıya verdiği tepkidir; ama uzun sürdüğünde yorar ve dinlenmeyi zorlaştırır. Bedeni sakinleştiren uygulamalar genellikle işe yarar; işaretler yoğun ya da sıksa bir uzmanla konuşmaya değer.',
      low: 'Bedenin son haftalarda az gerginlik işareti gösterdi ve dinlenme anlarında yavaşlayabildin. Bu, günlük hayatın baskısının bedeninde birikmediğini gösteriyor.',
      tips: [
        'Birkaç dakika boyunca yavaşça nefes almayı dene; nefesi verirken, alırken harcadığından daha uzun zaman ayır.',
        'Bedenini düzenli olarak hareket ettir: 20-30 dakikalık bir yürüyüş bile gerginliği atmaya yardımcı olur.',
        'Sık sık kalp çarpıntısı, nefes darlığı ya da göğüs ağrısı hissediyorsan, başka olası nedenleri değerlendirmesi için bir doktora başvur.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Çok düşük kaygı',
      text: 'Cevapların, son iki haftada az kaygı işareti olduğunu gösteriyor. Endişeler ve gerginlik anları hayatın bir parçasıdır ve senin durumunda günlük hayatına ağır gelmiyor gibi görünüyor. Uykuna, hareketine ve ilişkilerine özen göstermeye devam et.',
    },
    mild: {
      label: 'Hafif kaygı',
      text: 'Cevapların, günlerin bir kısmında ortaya çıkan bazı kaygı işaretleri olduğunu gösteriyor. Bu, yoğun ya da değişim dolu dönemlerde yaygındır. Seni neyin endişelendirdiğini gözlemlemeye ve aşağıdaki önerileri denemeye değer; işaretler artarsa ya da uzun sürerse bir uzmanla konuş.',
    },
    moderate: {
      label: 'Orta düzeyde kaygı',
      text: 'Cevapların, endişenin ve gerginliğin günlerin büyük bölümünde var olduğunu gösteriyor. Bu yorucu olabilir ve uykuyu, konsantrasyonu ve ilişkileri etkileyebilir. Psikolog ya da doktor gibi bir uzmanla konuşmak, neler olup bittiğini anlamana ve bununla başa çıkmanın yollarını bulmana yardımcı olabilir.',
    },
    high: {
      label: 'Yüksek kaygı',
      text: 'Cevapların, son iki haftanın neredeyse her gününde yoğun kaygı işaretleri olduğunu gösteriyor. Bu kim olduğunu tanımlamaz, ama ağır bir yük taşıdığını gösterir ve bununla ilgilenmenin etkili yolları vardır. Bir değerlendirme yapmak ve sonraki adımları birlikte düşünmek için psikolog ya da doktor gibi bir uzmana başvur.',
    },
  },
  resultTitle: 'Kaygı düzeyin',
  resultIntro: 'Sonuç, son iki haftayla ilgili cevaplarının toplamını dikkate alır. Aşağıda hangi aralıkta olduğunu ve endişe ile bedendeki gerginlik alanlarında nasıl puan aldığını görebilirsin.',
  note: 'Bu anket, kendi cevaplarına dayanan bir kendini tanıma ve tarama aracıdır. Teşhis değildir: Kaygıyı kapsamlı biçimde yalnızca psikolog ya da doktor gibi nitelikli bir uzman değerlendirebilir. Çarpıntı ve nefes darlığı gibi bazı bedensel işaretlerin başka nedenleri de olabilir.',
  help: 'Kaygı günlük hayatını zorluyorsa bir psikoloğa ya da doktoruna başvur. Bulunduğun yerdeki sağlık hizmetleri de sana yol gösterebilir ve gerektiğinde seni ruh sağlığı hizmetlerine yönlendirebilir. Yoğun bir sıkıntı içindeysen, ülkendeki bir kriz ya da duygusal destek hattına ulaş. Acil bir durumda 112’yi ya da bulunduğun yerin acil durum numarasını ara.',
};

export default t;
