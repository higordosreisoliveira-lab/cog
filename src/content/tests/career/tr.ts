import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Mesleki ilgiler",
  "desc": "Hangi tür etkinliklerin sana en çok uyduğunu keşfet ve ilgi alanlarınla bağlantılı meslekleri tanı.",
  "intro": "Bu anket, mesleki ilgileri altı tipte toplayan Holland modeline dayanır: pratik, araştırmacı, sanatsal, sosyal, girişimci ve düzenleyici. 36 etkinlik var. Her biri için maaşı, eğitimi ya da bunu zaten yapıp yapamadığını düşünmeden, onu ne kadar yapmak isteyeceğini işaretle. Doğru cevap yoktur: Amaç, neyin ilgini çektiğini ortaya çıkarmaktır.",
  "scale": [
    "Kesinlikle katılmıyorum",
    "Katılmıyorum",
    "Kararsızım",
    "Katılıyorum",
    "Kesinlikle katılıyorum"
  ],
  "items": [
    "Bir cihazın neden bozulduğunu bulup onu tamir etmek isterim.",
    "Bir fikrin pratikte işe yarayıp yaramadığını görmek için deneyler yapmak isterim.",
    "Öykü, senaryo ya da şarkı sözü yazmak isterim.",
    "Bir gruba yeni bir şey öğretmek isterim.",
    "Kendi işimi kurup yönetmek isterim.",
    "Her şey kolayca bulunsun diye tabloları, dosyaları ve kayıtları düzenlemek isterim.",
    "Kendi ellerimle bir şeyler yapmak ya da monte etmek isterim.",
    "Bir sorunun nedenini bulmak için verileri analiz etmek isterim.",
    "Bir markanın logo ve renkler gibi görsel kimliğini tasarlamak isterim.",
    "Zor bir dönemden geçen insanları dinlemek ve onlara yol göstermek isterim.",
    "Müşterilerle pazarlık edip satışları sonuçlandırmak isterim.",
    "Bir şirketin alacaklarını ve borçlarını takip etmek isterim.",
    "Şantiye, çiftlik ya da park gibi yerlerde, açık havada çalışmak isterim.",
    "İnsan vücudunun ve diğer canlıların nasıl işlediğini araştırmak isterim.",
    "Sahneye çıkıp şarkı söylemek, enstrüman çalmak ya da rol yapmak isterim.",
    "Başkalarının sağlığıyla ve iyi oluşuyla ilgilenmek isterim.",
    "Bir hedefe ulaşmak için bir ekibe liderlik etmek isterim.",
    "Hata olmadığından emin olmak için belgeleri dikkatle kontrol etmek isterim.",
    "Makineleri, araçları ya da hassas aletleri kullanmak isterim.",
    "Yeni bir teknolojinin nasıl çalıştığını derinlemesine anlamak isterim.",
    "Fotoğraf ya da video çekip ardından bu görüntüleri düzenlemek isterim.",
    "Çocukların ya da gençlerin gelişimini takip edip onlara destek olmak isterim.",
    "Yatırımcıları ya da bir şirketin yönetimini ikna etmek için bir fikir sunmak isterim.",
    "Stokları, siparişleri ve teslim tarihlerini kontrol etmek isterim.",
    "Her gün bitkilerle ya da hayvanlarla ilgilenmek isterim.",
    "Bilimsel çalışmaları okuyup kendi sonuçlarımı çıkarmak isterim.",
    "Kıyafet, eşya ya da iç mekân dekorasyonu tasarlamak isterim.",
    "İnsanların çatışmalarını çözmelerine ve birbirlerini daha iyi anlamalarına yardım etmek isterim.",
    "Bir ürünün pazarda büyümesi için stratejiler geliştirmek isterim.",
    "Bir şirketin kurallara ve yasalara uyup uymadığını denetlemek isterim.",
    "Bir binanın elektrik ya da su tesisatını yapmak isterim.",
    "Karmaşık matematik ya da mantık problemlerini çözmek isterim.",
    "Bir kampanya ya da yaratıcı bir proje için özgün fikirler bulmak isterim.",
    "Yaşadığım yerdeki topluma yardım eden projelerde yer almak isterim.",
    "Risk içerse bile önemli kararlar almak isterim.",
    "Bir ofisin ajandasını ve günlük işleyişini düzenlemek isterim."
  ],
  "dims": {
    "realistic": {
      "label": "Pratik",
      "desc": "Somut etkinliklere ilgi: Ellerini, aletleri ve makineleri kullanmak, inşa etmek, onarmak ve açık havada çalışmak.",
      "high": "Somut sonuçlar görmeyi ve sorunları kendi ellerinle çözmeyi seversin. Görevlerin net ve pratik olduğu ortamlar seni genellikle motive eder. Bu mesleklerin çoğunun teknik eğitim ve sürekli kendini güncellemeyi de gerektirdiğini unutma.",
      "low": "El işleri, mekanik işler ya da açık havada yapılan etkinlikler ilgini daha az çeker. Muhtemelen fikirlerle, insanlarla ya da bilgilerle uğraşırken kendini daha rahat hissedersin. Yine de bazı temel pratik beceriler her alanda işe yarar.",
      "tips": [
        "İlgini sınamak için el becerisi ya da teknik bir konuda kısa bir kursa katıl.",
        "Bu alanda çalışan kişilerle işin gerçek günlük düzeni hakkında konuş.",
        "Bu mesleklere hızlı bir giriş yolu olan meslek kurslarını ve meslek yüksekokullarını değerlendir."
      ],
      "examples": [
        "İnşaat mühendisliği",
        "Makine mühendisliği",
        "Elektrik teknisyenliği",
        "Ziraat mühendisliği",
        "Pilotluk",
        "Aşçılık ve gastronomi",
        "Marangozluk",
        "Endüstriyel bakım-onarım"
      ]
    },
    "investigative": {
      "label": "Araştırmacı",
      "desc": "Bilimde, teknolojide ya da sağlıkta gözlemlemeye, araştırmaya, analiz etmeye ve işlerin nasıl yürüdüğünü anlamaya ilgi.",
      "high": "Zor sorulardan, nedenleri araştırmaktan ve konuları derinlemesine anlamaktan hoşlanırsın. Düşünmeye ve özerkliğe değer veren ortamlar seni genellikle motive eder. Dikkat etmen gereken nokta, analizde kaybolup harekete geçmeyi geciktirmektir.",
      "low": "Araştırma, veri analizi ve kuramlar ilgini daha az çeker. Muhtemelen bir sorunu uzun süre incelemek yerine çözümleri uygulamayı tercih edersin. Yine de güvenilir bilgiye ulaşmayı bilmek her meslekte işe yarar.",
      "tips": [
        "İlgini çeken konularda popüler bilim içeriklerini takip et.",
        "Bir araştırma projesine, bir bilgi olimpiyatına ya da çevrim içi bir kursa katıl.",
        "Bu tür işlerden hoşlanıp hoşlanmadığını görmek için bir tabloda gerçek verileri analiz etmeyi dene."
      ],
      "examples": [
        "Tıp",
        "Biyoloji",
        "Veri bilimi",
        "Kimya",
        "Eczacılık",
        "Yazılım geliştirme",
        "Bilimsel araştırma",
        "Jeoloji"
      ]
    },
    "artistic": {
      "label": "Sanatsal",
      "desc": "Görseller, kelimeler, müzik, hareket ya da tasarım yoluyla üretmeye, kendini ifade etmeye ve özgün fikirlerle çalışmaya ilgi.",
      "high": "Üretmeyi, hayal etmeyi ve kendi fikirlerine biçim vermeyi seversin. Özgürlük, çeşitlilik ve özgünlüğe alan tanıyan ortamlar seni genellikle motive eder. Dikkat etmen gereken nokta, her yaratıcı işte de bulunan teslim tarihleri, kurallar ve tekrara dayalı kısımlarla başa çıkmaktır.",
      "low": "Sanatsal etkinlikler ve kişisel ifade ilgini daha az çeker. Muhtemelen net hedefleri ve daha öngörülebilir sonuçları tercih edersin. Yine de yaratıcılık, her alanda sorun çözme biçiminde de kendini gösterir.",
      "tips": [
        "Kişisel projeler olsa bile çalışmalarınla basit bir portfolyo hazırla.",
        "Zaten bildiğinden farklı bir yaratıcı alanda kısa bir atölyeye katıl.",
        "Yaratıcı mesleklerde çalışan kişilerin sanatı teknoloji ya da iş dünyası gibi başka becerilerle nasıl birleştirdiğini araştır."
      ],
      "examples": [
        "Grafik tasarım",
        "Mimarlık",
        "Reklamcılık",
        "Fotoğrafçılık",
        "Müzik",
        "Sahne sanatları",
        "Moda tasarımı",
        "Film ve video prodüksiyonu"
      ]
    },
    "social": {
      "label": "Sosyal",
      "desc": "İnsanlara yardım etmeye, öğretmeye, bakım vermeye ve yol göstermeye, onların iyi oluşuna ve gelişimine katkıda bulunmaya ilgi.",
      "high": "İşinin başkalarının hayatında fark yaratması seni motive eder. Dinlemek, öğretmek ve ilgilenmek gününe anlam katar. Dikkat etmen gereken nokta, başkalarının sorunlarıyla aşırı yüklenip kendine bakmayı unutmaktır.",
      "low": "İnsanlara bakmak, öğretmek ya da danışmanlık yapmak üzerine kurulu etkinlikler ilgini daha az çeker. Muhtemelen görevlerle, nesnelerle, verilerle ya da fikirlerle uğraşmayı tercih edersin. Yine de iş birliği yapabilmek neredeyse her işte önemini korur.",
      "tips": [
        "Senin için önemli bir amaç uğruna gönüllü çalış ve kendini nasıl hissettiğini gözlemle.",
        "Bildiğin bir şeyi başkalarına anlatmayı dene; örneğin akranlarına destek olarak ya da özel ders vererek.",
        "Sağlık, eğitim ya da sosyal hizmet alanında çalışan kişilerle işlerinin günlük zorlukları hakkında konuş."
      ],
      "examples": [
        "Psikoloji",
        "Öğretmenlik",
        "Hemşirelik",
        "Sosyal hizmet",
        "Fizyoterapi",
        "Beden eğitimi",
        "Dil ve konuşma terapisi",
        "İnsan kaynakları"
      ]
    },
    "enterprising": {
      "label": "Girişimci",
      "desc": "Şirketlerde, satışta ya da kendi projelerinde hedeflere ulaşmak için liderlik etmeye, ikna etmeye, pazarlık yapmaya ve karar almaya ilgi.",
      "high": "Öne çıkmayı, insanları ikna etmeyi ve hedeflere ulaşıldığını görmeyi seversin. Zorlukların olduğu ve sonuçların takdir edildiği dinamik ortamlar seni genellikle motive eder. Dikkat etmen gereken nokta, karar verirken aceleci olmak ve riskleri ya da ayrıntıları küçümseme eğilimidir.",
      "low": "Liderlik etmek, satış yapmak ve pazarlık etmek ilgini daha az çeker. Muhtemelen kararların merkezinde olmadan bilginle ya da emeğinle katkı sunmayı tercih edersin. Yine de fikirlerini savunabilmek her kariyerde işe yarar.",
      "tips": [
        "İşte, okulda ya da çevrende küçük bir projenin liderliğini üstlen.",
        "Çok fazla zaman ya da para yatırmadan önce bir iş fikrini küçük ölçekte dene.",
        "Finans, müzakere ve iletişimin temellerini öğren."
      ],
      "examples": [
        "İşletme",
        "Hukuk",
        "Pazarlama",
        "Satış ve satış yönetimi",
        "Halkla ilişkiler",
        "Proje yönetimi",
        "Emlak danışmanlığı",
        "Dış ticaret"
      ]
    },
    "conventional": {
      "label": "Düzenleyici",
      "desc": "Bilgileri düzenlemeye, net süreçleri izlemeye ve verilerle, sayılarla ve belgelerle titizlikle ilgilenmeye ilgi.",
      "high": "Düzeni, net kuralları ve tam olarak ne yapılması gerektiğini bilmeyi seversin. Kesinliğe değer verilen, yapılandırılmış ortamlar seni genellikle motive eder. Dikkat etmen gereken nokta, hızlı değişimlerle ve belirli bir prosedürü olmayan durumlarla başa çıkmaktır.",
      "low": "Rutinler, tablolar ve ayrıntılı prosedürler ilgini daha az çeker. Muhtemelen çeşitliliği ve işleri kendi bildiğin gibi yapma özgürlüğünü tercih edersin. Yine de biraz düzen her alanda işi kolaylaştırır.",
      "tips": [
        "Tabloları ve düzenleme araçlarını iyi kullanmayı öğren; bu, birçok meslekte işe yarayan bir beceridir.",
        "Bir projenin bütçesini ya da organizasyonunu üstlen ve bu tür işlerden hoşlanıp hoşlanmadığını gör.",
        "Neredeyse her şirkette bulunan muhasebe, lojistik ve denetim gibi alanları araştır."
      ],
      "examples": [
        "Muhasebe",
        "Denetim",
        "Lojistik",
        "Yönetici asistanlığı",
        "Finansal analiz",
        "Kütüphanecilik",
        "Kalite kontrol",
        "Satın alma yönetimi"
      ]
    }
  },
  "resultTitle": "İlgi tiplerin",
  "resultIntro": "En yüksek puanı aldığın üç tipi öne çıkardık. Çoğu insan birden fazla tipi bir arada taşır ve her meslek farklı bir bileşime değer verir. Önerileri, araştırmak ve o alanda çalışanlarla konuşmak için bir başlangıç noktası olarak kullan.",
  "note": "Bu sonuç becerileri ya da başarı şansını değil, ilgileri gösterir. Bir kendini tanıma aracıdır ve uzmanların yaptığı bir kariyer danışmanlığının yerini tutmaz."
};

export default t;
