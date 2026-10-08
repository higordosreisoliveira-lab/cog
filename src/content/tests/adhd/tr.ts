// adhd — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Yetişkinlerde DEHB özellikleri',
  desc: 'Dikkat, düzen, huzursuzluk ve dürtüsellikle ilgili durumların yetişkin hayatında ne sıklıkla ortaya çıktığını gör.',
  intro:
    'DEHB (dikkat eksikliği ve hiperaktivite bozukluğu) yalnızca çocuklara özgü değildir: Birçok kişi bu özelliklerle yetişkinliğe ulaşır, bazen hiç değerlendirmeden geçmeden. Bu anket günlük hayattaki iki özellik grubuna bakar: dikkat ve düzen, huzursuzluk ve dürtüsellik. İşte, evde ve ilişkilerde yetişkin hayatından 18 yaygın durum var. Son 6 ayı düşün ve her birinin sende ne sıklıkla yaşandığını belirt. Olmasını istediğin şeyi değil, gerçekten olanı düşünerek içtenlikle cevap ver. Bunun bir teşhis değil, özelliklere bakan bir öz değerlendirme olduğunu unutma. Herkesin ara sıra dikkati dağılır ya da acelesi olur; burada önemli olan sıklıktır.',
  scale: ['Hiçbir zaman', 'Nadiren', 'Bazen', 'Sık sık', 'Çok sık'],
  items: [
    'Bir kitabın ya da raporun bir sayfasını sonuna kadar okuyorum ve aklım başka bir konuda olduğu için ne yazdığını söyleyemediğimi fark ediyorum.',
    'Bir toplantıda, derste ya da konferansta sürekli bacağımı salladığımı, kalemi masaya vurduğumu ya da sandalyede pozisyon değiştirdiğimi fark ediyorum.',
    'Tam evden çıkarken, bir yere bırakıp nereye koyduğumu hatırlamadığım anahtarı, telefonu ya da cüzdanı aramak için birkaç dakika kaybediyorum.',
    'Bir grup sohbetinde aklıma bir fikir geliyor ve söylemek istediğimi unutmaktan korktuğum için, henüz sözünü bitirmemiş birinin lafını keserek hemen söylüyorum.',
    'Fatura ödemek gibi belirli bir işi halletmek için telefonu elime alıyorum ya da bilgisayarı açıyorum ve ilkini halletmeden başka üç şey yapmış oluyorum.',
    'Bir indirim ya da dikkatimi çeken bir şey görüyorum ve fiyatları karşılaştırmadan, aylık bütçemi düşünmeden hemen satın alıyorum.',
    'Biri bana sakin sakin bir şey anlatırken söylediklerinin bir kısmını kaçırdığımı fark ediyorum ve tekrar etmesini istemem gerekiyor ya da anlamış gibi yapıyorum.',
    'Market kuyruğunda ya da durmuş trafikte hızla büyüyen bir sabırsızlık hissediyorum: etrafıma bakınıyorum, ofluyorum ya da başka bir yol arıyorum.',
    'Randevu almak ya da bir belge göndermek gibi basit ve sıkıcı bir iş, birkaç dakika süreceğini bildiğim hâlde listemde haftalarca bekliyor.',
    'Planım olmayan bir izin gününde dinlenmek yerine içimde bir huzursuzluk hissediyorum ve hemen yapacak bir şey buluyorum, çünkü bir süre hiçbir şey yapmamak beni rahatsız ediyor.',
    'Bir e-postayı, bir çalışmayı ya da bir tabloyu gönderiyorum ve gözümden kaçan bir ayrıntıyı ancak sonra fark ediyorum: unutulmuş bir ek, yanlış bir tarih ya da karıştırılmış bir isim gibi.',
    'Bir mesaja ya da yoruma o anın etkisiyle cevap veriyorum ve kısa süre sonra üslubumdan ya da yazdıklarımdan pişman oluyorum.',
    'Bir odayı toplamaya başlıyorum, beni evin başka bir köşesine götüren bir şey buluyorum ve günün sonunda yarım kalmış birkaç toplama işi oluyor.',
    'Bedenim yorgun bir şekilde uyumak için yatıyorum ama zihnim uzun süre hızlı hızlı çalışmaya, bir düşünceden diğerine atlamaya devam ediyor.',
    'Biriyle bir şey için sözleşiyorum ve o kişi hâlâ gelip gelmeyeceğimi soran bir mesaj atana kadar bunu hatırlamıyorum.',
    'Arkadaşlarla ya da iş arkadaşlarıyla buluştuktan sonra diğerlerinden çok daha fazla konuştuğumu ya da sohbete nefes aldırmadan bir konudan diğerine geçtiğimi fark ediyorum.',
    'Çıkmadan önce hâlâ bolca vaktim olduğunu düşünüyorum ve saate baktığımda çoktan yolda olmam gerektiğini görüyorum.',
    'Heyecanın etkisiyle bir daveti, yeni bir projeyi ya da bir plan değişikliğini anında kabul ediyorum ve ancak sonra bunun günlük düzenime sığmadığını fark ediyorum.',
  ],
  dims: {
    inattention: {
      label: 'Dikkat ve düzen',
      desc: 'Bir okumanın, işin ya da sohbetin ortasında dikkatinin ne sıklıkla dağıldığını; son tarihler, randevular, günlük eşyalar ve pek ilgi çekmeyen işlerle nasıl başa çıktığını ölçer.',
      high: 'İlgi çekmeyen işlere odaklanmak, randevuları hatırlamak ve ayrıntılara dikkat etmek sana birçok kişiden daha fazla çabaya mal oluyor gibi görünüyor. Bunun tembellikle ya da zekâ eksikliğiyle bir ilgisi yok: Bu profildeki pek çok kişinin çağrışımlarla dolu, hızlı ve yaratıcı bir zihni vardır ve ilgilerini çeken şeylere yoğun biçimde odaklanabilirler. Genellikle işe yarayan şey, düzeni kafandan çıkarıp hatırlatıcılar, listeler ve basit rutinlerle çevrene taşımaktır.',
      low: 'Genellikle yaptığın işe dikkatini verir, randevularını hatırlar ve daha az ilgi çekici olanlar da dahil işleri sonuna kadar götürürsün. Bu, işte ve evde güvenilirlik ve huzur sağlar. Ara sıra dikkatin dağılması normaldir, özellikle yorgunluk, stres ya da kötü uyku dönemlerinde.',
      tips: [
        'Randevular ve faturalar için yalnızca hafızana güvenmek yerine telefonundaki alarmları ve hatırlatıcıları kullan.',
        'Anahtar, cüzdan ve belgeler için kapının yanında bir kase ya da askı gibi sabit bir yerin olsun.',
        'Sıkıcı bir işle karşılaştığında kendine yalnızca ilk beş dakika için söz ver: Başlamak genellikle en zor kısımdır.',
      ],
    },
    hyperactivity: {
      label: 'Huzursuzluk ve dürtüsellik',
      desc: 'Bedenin ve zihnin huzursuzluğunu, beklemekte zorlanmayı ve o anın dürtüsüyle konuşma, karar verme ya da harekete geçme eğilimini ölçer.',
      high: 'Bolca enerjin var ve hızlı davranma eğilimindesin: Fikirler aklına geldiği hızda konuşur, karar verir ve tepki verirsin; beklemek ya da uzun süre kıpırdamadan durmak genellikle rahatsız edicidir. Bu enerji coşku, inisiyatif, yaratıcılık ve yeni şeylere başlama cesareti getiren büyük bir müttefik olabilir. Dikkat etmen gereken nokta, o anın etkisiyle söylenen sözler ve verilen kararlardır; bunlar bazen pişmanlığa ya da sürtüşmelere yol açar. Bir de yavaşlaması zaman alan bir zihnin getirdiği yorgunluk.',
      low: 'Genellikle sakince bekler, harekete geçmeden önce düşünür ve boş vaktin olduğunda rahatlayabilirsin. Bu, düşünülmüş kararlar almana ve dengeli sohbetler sürdürmene yardımcı olur. Ara sıra sabırsızlık ya da huzursuzluk anları yaşamak normaldir, özellikle stresli dönemlerde.',
      tips: [
        'Bir şey satın almadan, seni sinirlendiren bir mesaja cevap vermeden ya da yeni bir sorumluluk kabul etmeden önce araya bir duraklama koy: Birkaç dakika, hatta ertesi güne kadar bekle.',
        'Bedenindeki enerjiye bir çıkış yolu ver: düzenli fiziksel aktivite, molalarda kısa yürüyüşler ya da toplantılarda ellerinle oynayabileceğin göze batmayan bir nesne.',
        'Uyku vaktinde zihnin hızlanıyorsa yatmadan önce aklındakileri bir kâğıda yaz ve ertesi gün halletmek üzere bırak.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Az özellik',
      text: 'Cevapların, dikkat dağınıklığı, huzursuzluk ve dürtüsellikle ilgili durumların günlük hayatında az görüldüğünü gösteriyor. Ara sıra dikkatin dağılması ve sabırsızlık anları herkes için normaldir. Bu testteki aralıklar yalnızca yol göstermek içindir ve klinik olarak doğrulanmamıştır.',
    },
    some: {
      label: 'Bazı özellikler',
      text: 'Cevapların, dikkat dağınıklığı ya da huzursuzlukla ilgili bazı özelliklerin günlük düzeninde belli bir sıklıkla ortaya çıktığını gösteriyor. Bu yaygındır ve yorgunluk, stres, kötü uyku ya da aşırı iş yükü gibi pek çok nedeni olabilir. Bu özelliklerin hangi durumlarda daha ağır bastığını gözlemle ve her alandaki önerileri dene; aralıkların klinik doğrulaması olmayan, yalnızca yol gösteren bir rehber olduğunu unutma.',
    },
    many: {
      label: 'Çok sayıda özellik',
      text: 'Cevapların, dikkat, huzursuzluk ve dürtüsellikle ilgili pek çok özelliğin günlük hayatında sık sık ortaya çıktığını gösteriyor. Bu, sende DEHB olduğu anlamına gelmez: Başka durumlar ve hayat dönemleri de benzer işaretlere yol açabilir ve bu testteki aralıklar klinik doğrulaması olmayan, yalnızca yol gösteren bir rehberdir. Bu özellikler uzun zamandır, belki çocukluğundan beri seninleyse ve işini, eğitimini ya da ilişkilerini zorluyorsa, uygun bir değerlendirme için bir psikiyatrist, nörolog ya da psikologla konuşmaya değer.',
    },
  },
  resultTitle: 'DEHB özelliklerin',
  resultIntro:
    'Sonuç, 18 duruma verdiğin cevapları toplar ve dikkat dağınıklığı, huzursuzluk ve dürtüsellik özelliklerinin günlük hayatında ne sıklıkla ortaya çıktığını gösterir. İki alana ayrı ayrı da bak: Bu özelliklerin nerede daha ağır bastığını ve güçlü yanlarının nerede olduğunu anlamana yardımcı olurlar.',
  note: 'Bu test, kendi cevaplarına dayanan bir kendini tanıma aracıdır. DEHB’nin ya da başka herhangi bir durumun teşhisi değildir ve sonuç aralıkları klinik olarak doğrulanmamıştır. Çocukluktan bu yana geçmişini ve kaygı, depresyon ya da uyku sorunları gibi diğer olası nedenleri de dikkate alan kapsamlı bir değerlendirmeyi yalnızca psikiyatrist, nörolog ya da psikolog gibi nitelikli bir uzman yapabilir.',
  help: 'Bu özellikleri araştırmak istiyorsan, tercihen yetişkinlerde DEHB konusunda deneyimli bir psikiyatriste, nöroloğa ya da psikoloğa başvur. İlk adım olarak doktorun ya da bulunduğun yerdeki sağlık hizmetleri sana yol gösterebilir ve seni değerlendirmeye yönlendirebilir; sıkıntının daha yoğun olduğu durumlarda yerel ruh sağlığı hizmetlerinden de destek alabilirsin. Ayrıca üniversitelerin ve eğitim hastanelerinin uzman poliklinikleri ile DEHB’li kişilere destek olan dernekler de vardır; bu dernekler genellikle güvenilir uzmanlar ve kaynaklar önerir.',
};

export default t;
