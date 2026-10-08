// procrastination — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Erteleme',
  desc: 'Seni genellikle işleri ertelemeye neyin yönelttiğini keşfet ve her neden için pratik stratejiler öğren.',
  intro:
    'Neredeyse herkes zaman zaman işleri erteler, ama nedenleri kişiden kişiye değişir. Bu anket sık görülen dört nedeni değerlendirir: rahatsızlıktan kaçınmak, kusursuz yapamama korkusu, dikkat dağınıklığı ve planlamada netlik eksikliği. 16 ifade var. Son birkaç haftayı düşün ve her durumun sana ne sıklıkla olduğunu işaretle. Doğru cevap yoktur: Amaç, doğru stratejileri seçebilmek için senin durumunda neyin daha ağır bastığını anlamaktır.',
  scale: ['Hiçbir zaman', 'Nadiren', 'Bazen', 'Sık sık', 'Her zaman'],
  items: [
    'Önemli olduklarını bilsem bile, beni kaygılandıran işleri ertelerim.',
    'Her şeyin baştan kusursuz olması gerektiğini hissettiğim için başlamakta gecikirim.',
    'Hızlıca bir şeye bakmak için telefonu elime alırım ve sonunda planladığımdan çok daha fazla vakit geçiririm.',
    'Tam olarak nereden başlayacağımı bilmediğim için bir işi ertelerim.',
    'Zor geçebilecek telefon görüşmelerini, mesajları ya da konuşmaları sonraya bırakırım.',
    'Bir işi o kadar uzun süre gözden geçirip düzeltirim ki sonunda teslimi geciktiririm.',
    'Bir işin ortasında, daha ilginç bir şey çıkar çıkmaz başka bir şeye geçerim.',
    'O kadar çok yapacak işim olur ki hangisini önce yapacağımı bilemem.',
    'Karşılaşabileceğim şeyden çekindiğim için e-postaları, faturaları ya da mesajları açmaktan kaçınırım.',
    'Kendimden beklediğimin altında bir şey yapma riskini almaktansa hiç başlamamayı tercih ederim.',
    'Bildirimler, sohbetler ya da etraftaki sesler beni yaptığım işten kolayca koparır.',
    'Bir işin ne kadar süreceğini yanlış hesaplarım ve sonunda ihtiyacım olandan daha az zamanım kalır.',
    'Bir iş bana sıkıcı ya da tatsız geldiğinde, yapacak daha keyifli bir şey ararım.',
    'Önemli işlere başlamak için bol zamanımın ve enerjimin olduğu ideal anı beklerim.',
    'Başka bir şey yapmam gerektiğini bilsem bile o an canım ne istiyorsa onu yaparım.',
    'Bir iş büyük ya da belirsiz olduğunda, onu somut adımlara dönüştürmekte zorlanırım.',
  ],
  dims: {
    avoidance: {
      label: 'Rahatsızlıktan kaçınma',
      desc: 'Sıkıntı, kaygı, korku ya da başka hoş olmayan duygular yarattıkları için işleri ertelemek.',
      high: 'Ertelemelerinin büyük kısmı, kaygı, sıkıntı ya da kötü bir cevap alma korkusu gibi hoş olmayan duygulardan kaçma isteğinden kaynaklanıyor gibi görünüyor. Bu, duyguları yoğun yaşadığını gösterir; bu da neyin önemli olduğunu fark etmene yardımcı olur. Dikkat etmen gereken nokta, ertelemenin getirdiği rahatlamanın kısa sürmesi ve işin sonrasında genellikle daha da ağırlaşmasıdır.',
      low: 'Bir işin yarattığı rahatsızlık, ona başlamanı nadiren engeller. Sıkıcı ya da zor olanla yüzleşebilme yeteneğin büyük bir avantajdır. Dikkat etmen gereken nokta, yorgunluk ya da aşırı yük mola vermeni gerektirdiğinde bile kendini devam etmeye zorlamaktır.',
      tips: [
        'Sadece iki dakikayla başla: Dosyayı aç ya da ilk cümleyi yaz. Bundan sonra istersen bırakabilirsin. Başlamak genellikle işin en zor kısmıdır.',
        'Hissettiğin şeye bir ad ver; örneğin "eleştirilmekten korkuyorum". Duyguyu tanımak genellikle onun gücünü azaltır.',
        'En tatsız işi, e-postalarını ya da sosyal medyayı açmadan önce, günün hemen başında yap.',
      ],
    },
    perfectionism: {
      label: 'Mükemmeliyetçilik',
      desc: 'İşleri yeterince iyi yapamama korkusuyla ya da başlamak için ideal anı beklediğin için ertelemek.',
      high: 'İşlerin kusursuz olmasını istediğin ya da başlamak için ideal zamanı ve enerjiyi beklediğin için bir şeyleri erteliyor gibi görünüyorsun. Bu özen, işini ciddiye aldığını ve yüksek standartların olduğunu gösterir. Dikkat etmen gereken nokta, ideal anın nadiren gelmesi ve hata yapma korkusunun önemli teslimleri geciktirebilmesi ya da engelleyebilmesidir.',
      low: 'Her şey kusursuz olmasa bile genellikle başlarsın ve yol boyunca düzeltmeler yapmayı kabul edersin. Bu sana çeviklik kazandırır ve uygulayarak öğrenmene yardımcı olur. Dikkat etmen gereken nokta, özellikle önemli işlerde, durumun gerektirdiğinden daha az özenli bir şey teslim etmektir.',
      tips: [
        'Başlamadan önce, o iş için neyin "yeterince iyi" olduğunu yaz.',
        'Daha sonra iyileştirileceğini bilerek hızlı bir ilk taslak hazırla.',
        'Gözden geçirmeler için bir süre sınırı koy ve süre dolduğunda teslim et.',
      ],
    },
    distraction: {
      label: 'Dikkat dağınıklığı ve dürtüsellik',
      desc: 'Dikkatin telefon, sohbetler ya da daha keyifli etkinlikler gibi daha anlık uyaranlara kaydığı için işleri ertelemek.',
      high: 'Dikkatin bildirimlere, sohbetlere ya da o anki işten daha ilginç etkinliklere kolayca kayıyor gibi görünüyor. Yeni uyaranlara karşı bu duyarlılık sana çeviklik ve yaratıcılık da kazandırabilir. Dikkat etmen gereken nokta, küçük kesintilerin toplandığında, sen fark etmeden gününden saatler alıp götürmesidir.',
      low: 'Etrafında uyaranlar olsa bile odağını koruyabilir ve bir işi daha keyifli bir şeyle değiştirme isteğine iyi direnirsin. Bu, konsantrasyon gerektiren işlerde büyük bir avantajdır. Dikkat etmen gereken nokta, kendini işe fazla kapatmak ve etrafındaki önemli istekleri ya da değişiklikleri fark etmemektir.',
      tips: [
        'Önemli bir şey üzerinde çalışırken telefonu başka bir odada ya da sessiz modda bırak.',
        'Aralarında 5 dakikalık molalar vererek 25 dakikalık bloklar hâlinde çalış.',
        'Yaptığın işi bölmek yerine, iş sırasında aklına gelen fikirleri ve istekleri sonra halletmek üzere not et.',
      ],
    },
    planning: {
      label: 'Netlik ve planlama eksikliği',
      desc: 'Nereden başlanacağı, önce ne yapılacağı ya da her şeyin ne kadar süreceği net olmadığı için işleri ertelemek.',
      high: 'Çoğu zaman isteksizlikten değil, iş büyük, belirsiz ya da karışık göründüğü için erteliyorsun. Bu, işlerin karmaşıklığını fark ettiğini gösterir. Dikkat etmen gereken nokta, somut adımlar olmadan basit işlerin bile zor görünmesi ve sonunda sonraya kalmasıdır.',
      low: 'Genellikle nereden başlayacağını bilirsin ve büyük işleri pratik adımlara dönüştürebilirsin. Bu, temponu korumayı ve son tarihlere uymayı kolaylaştırır. Dikkat etmen gereken nokta, o kadar ayrıntılı plan yapmak ki bir şey değiştiğinde uyum sağlamanın zorlaşmasıdır.',
      tips: [
        'Her büyük işi en fazla 30 dakikalık adımlara böl ve ilk adımın ne olduğunu yaz.',
        'İşi ne zaman ve nerede yapacağına önceden karar ver; örneğin: "Salı günü saat 9\'da masamda raporun giriş kısmını yazacağım".',
        'Her işin ne kadar süreceğini tahmin et ve buna en az %50 pay ekle.',
      ],
    },
  },
  resultTitle: 'İşleri neden erteliyorsun',
  resultIntro:
    'Her çubuk, bir nedenin cevaplarında ne kadar ortaya çıktığını gösterir. Puan ne kadar yüksekse, o etken ertelemelerine o kadar çok katkıda bulunur. En yüksek puanı alan nedenin stratejileriyle başla.',
  note: 'Bu anket bir kendini tanıma aracıdır, bir teşhis değildir. İşlere başlamakta ya da onları bitirmekte zorlanman sürekliyse ve eğitimini, işini ya da özel hayatını olumsuz etkiliyorsa, bir sağlık uzmanıyla konuşmakta fayda var; çünkü bu durum kaygı, depresyon ya da DEHB gibi konularla bağlantılı olabilir.',
};

export default t;
