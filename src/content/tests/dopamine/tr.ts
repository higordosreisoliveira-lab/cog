// dopamine — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Dopamin testi',
  desc: 'Beynin ödül sistemiyle ilgili alışkanlıklarının ne durumda olduğunu gör: hızlı uyaranlar, can sıkıntısı, ekranlar ve uzun vadeli hedefler.',
  intro:
    'Bu anket, beynin ödül sistemiyle ilgili günlük alışkanlıklara bakar. Dopamin, beynin sinyal iletmek için kullandığı bir maddedir ve motivasyonla, ödül arayışıyla bağlantılıdır. Önemli: Yaygın adına rağmen bu test vücudundaki dopamini ölçmez. Hiçbir anket bunu yapamaz; dopamini değerlendirebilen tıbbi tetkikler özeldir ve bu amaçla nadiren kullanılır. Testin değerlendirdiği şey dört alışkanlık alanıdır: hızlı ödül arayışı, can sıkıntısıyla başa çıkmakta zorlanma, uzun vadeli hedefler için motivasyon ve ekran alışkanlıkları. 16 ifade var. Son 2 haftayı düşün ve her durumun sende ne sıklıkla yaşandığını belirt. İçtenlikle ve fazla düşünmeden cevap ver: Doğru ya da yanlış cevap yoktur.',
  scale: ['Hiçbir zaman', 'Nadiren', 'Bazen', 'Sık sık', 'Her zaman'],
  items: [
    'Kısa videolar izleyerek ya da sosyal medyada gezinerek planladığımdan daha fazla zaman geçiriyorum.',
    'Bir kuyrukta ya da toplu taşımada beklerken hiçbir şey yapmadan durmakta zorlanıyorum.',
    'Sonuçlar henüz görünmese bile bir hedefe haftalarca kendimi adayabiliyorum.',
    'Uyandıktan sonraki ilk dakikalarda telefonu elime alıyorum.',
    'Özellikle internetten dürtüsel olarak bir şeyler satın alıyorum ve sonra onlara ihtiyacım olmadığını fark ediyorum.',
    'Yavaş ya da tekrarlayan işlerde sabrım tükeniyor ve bitirmeden bırakıyorum.',
    'Geleceğim için önemli bir şeyi engellediğinde anlık bir zevkten vazgeçebiliyorum.',
    'Yatakta telefonla oyalanıyorum ve planladığımdan daha geç uyuyorum.',
    'Yorgun ya da isteksiz hissettiğimde tatlı, atıştırmalık ya da bir video gibi anında keyif veren bir şeye yöneliyorum.',
    'Uzun bir metni okurken ya da bir filmi baştan sona izlerken başka bir şeyle dikkatimin dağılmamasında zorlanıyorum.',
    'Önemli işlere, daha eğlenceli bir şey yapmak için ertelemeden, planladığım saatte başlıyorum.',
    'Telefonumun kilidini belirgin bir neden olmadan, sadece alışkanlıktan açıyorum.',
    'Bir bildirim geldiğinde ne olduğuna bakmak için yaptığım işi bırakıyorum.',
    'Yemek yapmak ya da yürümek gibi basit etkinlikler, aynı anda izleyecek ya da dinleyecek bir şey olmazsa bana sıkıcı geliyor.',
    'Ders çalışmak, spor yapmak ya da para biriktirmek gibi uzun soluklu projelerde ilerlemekten memnuniyet duyuyorum.',
    'Aynı anda birden fazla ekran kullanıyorum; örneğin bir dizi izlerken telefona da bakıyorum.',
  ],
  dims: {
    quickRewards: {
      label: 'Hızlı ödüller',
      desc: 'Sosyal medya, kısa videolar, bildirimler, dürtüsel alışverişler ve atıştırmalıklar gibi anlık zevklere ne kadar başvurduğunu ölçer.',
      high: 'Hızlı uyaranlara sık sık, çoğu zaman dinlenmek ya da ruh hâlini değiştirmek için başvuruyorsun. Bu yaygındır ve bir kusur değildir: Bu uyaranların birçoğu tam da dikkatini çekmek için tasarlanır. Dikkat etmen gereken nokta, senin için daha önemli olan şeylerin zamanını almaları ya da geride boşa harcanmış zaman hissi bırakmalarıdır.',
      low: 'Anlık zevklere pek başvurmuyor ve boş zamanını nasıl kullanacağını genellikle bilinçli olarak seçiyorsun. Bu, odağını korumana ve dinlenme anlarından daha iyi yararlanmana yardımcı olur. Hızlı uyaran isteğinin genellikle arttığı yorgun günleri gözlemlemeye devam etmekte fayda var.',
      tips: [
        'Gerekli olmayan bildirimleri kapat ve yalnızca gerçekten önemli kişilerden ve hizmetlerden gelenleri açık bırak.',
        'Bir uygulamayı açmadan önce orada ne yapmak istediğini ve ne kadar süre kalacağını belirle.',
        'Planlamadığın internet alışverişlerinde siparişi tamamlamadan önce 24 saat bekle.',
      ],
    },
    boredom: {
      label: 'Can sıkıntısıyla başa çıkma',
      desc: 'Uyaransız kalmanın, beklemenin ya da yavaş ve tekrarlayan işlere odaklanmanın senin için ne kadar zor olduğunu ölçer.',
      high: 'Bekleme anları ve yavaş işler genellikle seni rahatsız eder ve daha ilginç bir şey arama isteği çabucak ortaya çıkar. Uyaranlarla dolu bir günlük hayatta bu çok yaygındır. Can sıkıntısına dayanma gücü de diğer her alışkanlık gibi yavaş yavaş geliştirilebilir.',
      low: 'Beklemelerle, aralarla ve sabır gerektiren işlerle iyi başa çıkıyorsun. Bu, daha uzun süre odaklanmana ve başladığın işi bitirmene yardımcı olur. Uyaransız anlar zihnini dinlendirmeye ve yeni fikirlere de alan açar.',
      tips: [
        'Her gün birkaç dakika uyaransız kalmayı dene: Bir kuyrukta beklerken ya da kısa bir yolda telefonu eline almadan dur.',
        'Uzun işlerde aralarında kısa molalar olan 20-25 dakikalık bloklar hâlinde çalış.',
        'Arada bir tek seferde tek bir şey yap: ekransız yemek yemek ya da kulaklıksız yürümek gibi.',
      ],
    },
    longTerm: {
      label: 'Uzun vadeli hedefler',
      desc: 'Ders çalışmak, spor yapmak ya da para biriktirmek gibi sonuç vermesi zaman alan hedefler için motivasyonu ölçer. Burada yüksek puan bu tür hedefleri sürdürmekte daha fazla zorlanmayı, düşük puan daha fazla kolaylığı gösterir.',
      high: 'Zaman alan hedeflerde motivasyonunu korumak senin için zor olmuş, özellikle yakınında daha hızlı ve daha keyifli seçenekler olduğunda. Bu, yeteneğin olmadığı anlamına gelmez: Uzun vadeli hedefler başlangıçta pek az ödül getirir ve beyin anlık olanı tercih etme eğilimindedir. Yolu daha küçük adımlara bölmek genellikle çok işe yarar.',
      low: 'Sonuç vermesi zaman alan hedeflerde çabanı sürdürebiliyor ve yavaş yavaş elde edilen ilerlemeye değer veriyorsun. Bu beceri eğitimde, işte ve sağlıkta kalıcı başarılar inşa etmene yardımcı olur. Dikkat etmen gereken nokta, bu yolda dinlenmeyi ve keyifli vakit geçirmeyi bir kenara bırakmamaktır.',
      tips: [
        'Her büyük hedefi küçük adımlara böl ve tamamlanan her adımı basit bir ödülle kutla.',
        'Ne kadar ilerlediğini görmek için ilerlemeni bir takvime ya da uygulamaya kaydet.',
        'Önemli işleri, sosyal medyayı ya da başka uygulamaları açmadan önce, genellikle en enerjik olduğun saatte yap.',
      ],
    },
    screens: {
      label: 'Ekran alışkanlıkları',
      desc: 'Telefonun ve diğer ekranların günlük düzenindeki yerini ölçer: uyanınca, uyumadan önce, telefonu nedensiz kontrol ederken ve aynı anda birkaç ekran kullanırken.',
      high: 'Ekranlar gününün pek çok anında, uyanır uyanmaz ve yatma saatinde bile yanında. Bu günümüzde yaygındır, ama gece kullanımı uykuyu geciktirebilir ve bozabilir; telefonu sürekli kontrol etmek de dikkati böler. Çevrende yapacağın küçük değişiklikler genellikle yalnızca iradeye güvenmekten daha iyi sonuç verir.',
      low: 'Ekranları daha bilinçli kullanıyor ve sabahın ilk saatleri ya da yatma vakti gibi günün bazı anlarını ekransız tutuyorsun. Bu uykuyu, konsantrasyonu ve dinlenmeyi destekler. Özellikle yoğun dönemlerde bu sınırları korumakta fayda var.',
      tips: [
        'Geceleri telefonu yatak odasının dışında bırak ve sıradan bir çalar saat kullan.',
        'Uyumadan önceki 30-60 dakikada ekranlardan uzak dur ve düzenli uyku saatleri tutmaya çalış.',
        'Gün içindeki molalarda telefonun yerine biraz hareket koy: kısa bir yürüyüş ya da esneme hareketleri gibi.',
      ],
    },
  },
  bands: {
    balanced: {
      label: 'Denge',
      text: 'Cevapların, hızlı uyaranlarla ve ekranlarla dengeli bir ilişkin olduğunu gösteriyor. Can sıkıntısıyla iyi başa çıkıyor ve zaman alan hedefler için motivasyonunu koruyor gibi görünüyorsun. Düzenli uyku ve ekrandan uzak anlar gibi sana iyi gelen alışkanlıklara özen göstermeye devam et.',
    },
    attention: {
      label: 'Dikkat',
      text: 'Cevapların, bazı hızlı uyaran alışkanlıklarının günlük düzeninde şimdiden önemli bir yer tuttuğunu gösteriyor. Bu çok yaygındır ve endişelenmeyi gerektirmez. Hangi alanlarda en yüksek puanları aldığına bak ve önümüzdeki haftalarda denemek için bir ya da iki küçük değişiklik seç.',
    },
    overloaded: {
      label: 'Uyaran yüklemesi',
      text: 'Cevapların, hızlı uyaranların ve ekranların gününde çok fazla yer kapladığını ve beklemenin, odaklanmanın ya da uzun vadeli hedefleri sürdürmenin daha zor hâle gelmiş olabileceğini gösteriyor. Bu giderek yaygınlaşıyor ve radikal kesintiler yapmadan, alışkanlıklarda kademeli ayarlamalarla değişebilir. İşe günün bir ya da iki anında, örneğin uyanınca ve uyumadan önce aşırı uyaranı azaltarak başla ve kendini nasıl hissettiğini gözlemle.',
    },
  },
  resultTitle: 'Ödül alışkanlıkların',
  resultIntro:
    'Sonuç dört alanı toplar ve mevcut alışkanlıklarının hızlı uyaranlara ne kadar bağlı olduğunu gösterir. Unutma: Vücudundaki dopamini değil, zamanla ve pratikle değişebilen davranış kalıplarını ölçer.',
  note: 'Bu test, kendi cevaplarına dayanan bir kendini tanıma aracıdır. Dopamini ya da vücuttaki başka herhangi bir maddeyi ölçmez, tıbbi bir tetkik değildir ve teşhis için kullanılamaz. Aşırı uyaranı azaltmak bir alışkanlık değişikliği olarak yardımcı olabilir, ama tıbbi bir tedavi değildir. Bir alışkanlık kontrolünün dışında gibi görünüyorsa ya da hayatına zarar veriyorsa bir sağlık uzmanıyla konuş.',
  help: 'Telefon, video oyunu, kumar ya da alışveriş kullanımını kontrol edemediğini hissediyorsan ya da bu durum uykunu, işini, maddi durumunu veya ilişkilerini etkiliyorsa bir psikoloğa ya da doktora başvur. Oyun, kumar ya da kompulsif alışveriş için yardımcı olabilecek uzmanlaşmış hizmetler ve destek grupları da vardır.',
};

export default t;
