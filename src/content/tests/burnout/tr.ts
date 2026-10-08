// burnout — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Tükenmişlik düzeyi',
  desc: 'İşin seni enerjisiz mi bıraktığını, yaptığın şeyden uzaklaştırıp uzaklaştırmadığını ya da çabanın karşılığını alamıyormuş gibi hissettirip hissettirmediğini gör.',
  intro:
    'Tükenmişlik (burnout), işle bağlantılı bir yıpranmadır ve genellikle üç alanda kendini gösterir: bitkinlik, işe karşı uzaklaşma ve başarı duygusunun kaybı. Son üç ayla ilgili 15 ifade var. Her biri için, bu süre içinde sende ne sıklıkla yaşandığını belirt. Kayıtlı bir işin yoksa eğitimin, kendi işin ya da birine bakmak gibi ana uğraşını düşün. Bazı ifadeler olumlu durumları anlatır: Onlara da aynı şekilde, yalnızca sıklığı düşünerek cevap ver. Bu, cevaplarına dayanan bir öz değerlendirmedir, bir teşhis değildir.',
  scale: ['Hiçbir zaman', 'Nadiren', 'Bazen', 'Sık sık', 'Her zaman'],
  items: [
    'Mesai bittikten sonra enerjim ancak kanepede oturmaya ya da telefonda gezinmeye yetti.',
    'İşte, görevlerle gerçekten ilgilenmeden yalnızca gereken en az şeyi yaptım.',
    'İş gününü çabamın bir sonuç verdiği hissiyle bitirdim.',
    'İşe dönmeden önceki gün, önümde olanları düşünmek bile içime bir ağırlık çöktürdü.',
    'İş arkadaşlarıma, müşterilere ya da hizmet verdiğim kişilere istediğimden daha soğuk ya da sabırsız davrandım.',
    'İşte bir sorunla karşılaştığımda bir çıkış yolu bulabileceğime güvendim.',
    'İzin ya da tatilden sonra bile yorgunluk işe döndüğüm ilk günlerde hemen geri geldi.',
    'İşimi iyi ya da kötü yapmamın hiçbir şey fark ettirmediğini hissettim.',
    'İşimin bir bölümünde yeni bir şey öğrendim ya da kendimi geliştirdim.',
    'Sadece iş gününün sonuna varabilmek için muazzam bir çaba harcamam gerekti.',
    'Mesainin bitmesi için saatleri saydım.',
    'İşimin bir iş arkadaşıma, bir müşteriye ya da ekibe yardımcı olduğunu fark ettim.',
    'İş beni enerjisiz bıraktığı için arkadaşlarımı, ailemi ya da sevdiğim etkinlikleri bir kenara bıraktım.',
    'Elimden geldiğince iş mesajlarından, toplantılarından ya da iş konuşmalarından kaçındım.',
    'İşte yaptığım bir şeyle gurur duydum.',
  ],
  dims: {
    exhaustion: {
      label: 'Bitkinlik',
      desc: 'İşle bağlantılı, bir gece uykusuyla ya da dinlenerek geçirilen bir hafta sonuyla geçmeyen bedensel ve zihinsel yorgunluğu ölçer.',
      high: 'İş, yerine koyabildiğinden daha fazla enerjini tüketiyor. Yorgunluk mesaide kalmıyor: Seninle eve, izin günlerine ve ilişkilerine kadar geliyor. Bu genellikle mevcut temponun sürdürülebilir olmadığının ilk işaretidir.',
      low: 'Bir iş günüyle diğeri arasında enerjini toparlayabiliyorsun. Her günlük düzende olduğu gibi yorgunluk ortaya çıkıyor, ama birikiyor gibi görünmüyor. Dinlenme anlarını korumaya devam et.',
      tips: [
        'Mesaiyi bitirmek için bir saat belirle ve bilgisayarı kapatıp kısa bir yürüyüşe çıkmak gibi küçük bir çıkış ritüeli oluştur.',
        'Uykunu koru ve kısa yürüyüşler bile olsa hareket etmeye zaman ayır.',
        'İzin günlerini iş mesajlarına bakmadan gerçekten dinlenmek için kullan.',
      ],
    },
    detachment: {
      label: 'İşe karşı uzaklaşma',
      desc: 'İşten ve işle bağlantılı insanlardan ne kadar uzaklaştığını ölçer: daha az ilgi, daha fazla soğukluk ya da hiçbir şeyin fark etmediği hissi.',
      high: 'İşten ve işle bağlantılı insanlardan uzaklaşma isteği duyuyor, en azını yapıyor ve eskiden önemli olan şeylere ilgini kaybediyorsun. Bu uzaklaşma çoğu zaman bir karakter ya da bağlılık eksikliği değil, yıpranmadan korunmanın bir yoludur. Buna neyin yol açtığını ve neyin değişebileceğini anlamaya değer.',
      low: 'İşinle ve işle bağlantılı insanlarla ilgilenmeye devam ediyorsun. Zor günlerde bile işin senin için bir anlam taşıyor gibi görünüyor. Bu bağ, yıpranmaya karşı korunmana yardımcı olur.',
      tips: [
        'Bu işi seçmene neyin yol açtığını hatırla ve buna yakın görevler ara.',
        'Gerçekçi olmayan hedefler ya da özerklik eksikliği gibi işi anlamsızlaştıran şeyleri yöneticilerinle ya da iş arkadaşlarınla konuş.',
        'İşte destekleyici ilişkiler kur: Güvendiğin bir iş arkadaşınla içten bir sohbet seni epey rahatlatabilir.',
      ],
    },
    efficacy: {
      label: 'Düşük başarı duygusu',
      desc: 'İşinin sonuç verdiği, yetkin olduğun ve geliştiğin hissinin ne kadar eksik olduğunu ölçer. Bu bölümdeki ifadeler olumludur, bu yüzden az yaşandıklarında puan yükselir.',
      high: 'Çabanın karşılık bulduğunu, yetkin olduğunu ya da işinin bir fark yarattığını hissetmen nadir olmuş. Bu his, performansına bakışını çarpıtan yorgunluğun kendisinden ya da takdirin az olduğu bir ortamdan kaynaklanabilir. Bir profesyonel olarak değerini ölçmez.',
      low: 'İşinin sonuç verdiğini, sorunları çözebildiğini ve öğrenmeye devam ettiğini fark etmeyi sürdürüyorsun. Bu başarı duygusu, en yoğun dönemlerde bile motivasyonunu korumana yardımcı olur.',
      tips: [
        'Hafta sonunda, ne kadar küçük olursa olsun tamamladığın ya da çözdüğün üç şeyi not al.',
        'Performansına daha dengeli bir gözle bakabilmek için güvendiğin birinden işin hakkında geri bildirim iste.',
        'İlerleme hissini geri getirecek küçük bir meydan okuma ya da öğrenme fırsatı ara.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Az tükenmişlik işareti',
      text: 'Cevapların, az tükenmişlik işareti olduğunu gösteriyor. Günlük hayatın olağan zorluklarına rağmen işte enerjini, ilgini ve başarı duygunu koruyor gibi görünüyorsun. Bu dengeyi korumana yardımcı olan sınırlara ve alışkanlıklara özen göstermeye devam et.',
    },
    moderate: {
      label: 'Orta düzeyde tükenmişlik işaretleri',
      text: 'Cevapların, işle bağlantılı bazı yıpranma işaretleri olduğunu gösteriyor. Yorgunluk birikmeden harekete geçmek için iyi bir zaman. En çok neyin ağır geldiğini gözlemle, aşağıdaki önerileri dene ve mümkünse günlük düzenindeki değişiklikleri yöneticilerinle konuş.',
    },
    high: {
      label: 'Güçlü tükenmişlik işaretleri',
      text: 'Cevapların, yoğun yorgunluk, işe karşı uzaklaşma ve düşük başarı duygusu gibi güçlü tükenmişlik işaretleri olduğunu gösteriyor. Bu tür bir yıpranma genellikle yalnızca daha fazla irade değil, günlük düzende gerçek değişiklikler gerektirir. Nasıl olduğunu ve senin durumunda hangi yolların anlamlı olduğunu değerlendirmek için psikolog ya da doktor gibi bir uzmana başvur.',
    },
  },
  resultTitle: 'Tükenmişlik düzeyin',
  resultIntro: 'Sonuç, son üç ayla ilgili cevaplarını toplar. Başarı duygusuyla ilgili ifadelerde sayım tersine çevrilir: Başarı duygusunu ne kadar az hissettiysen sonuç o kadar yükselir. Aşağıda hangi aralıkta olduğunu ve her bölümde nasıl puan aldığını görebilirsin.',
  note: 'Bu anket, kendi algına dayanan bir kendini tanıma aracıdır. Tükenmişlik işle bağlantılı bir yıpranmadır ve tek başına tıbbi bir teşhis değildir. Benzer işaretler depresyonda, kaygıda ve beden sağlığı sorunlarında da görülür; bu değerlendirmeyi yalnızca nitelikli bir uzman yapabilir.',
  help: 'İş sağlığını etkiliyorsa bir psikoloğa ya da doktoruna başvur. Bulunduğun yerdeki sağlık hizmetleri de sana yol gösterebilir ve gerektiğinde seni ruh sağlığı hizmetlerine yönlendirebilir. Çalıştığın yerin bir iş sağlığı birimi ya da çalışan destek programı varsa, onlar da yardımcı olabilir. Yoğun bir sıkıntı içindeysen, ülkendeki bir kriz ya da duygusal destek hattına ulaş. Acil bir durumda 112’yi ya da bulunduğun yerin acil durum numarasını ara.',
};

export default t;
