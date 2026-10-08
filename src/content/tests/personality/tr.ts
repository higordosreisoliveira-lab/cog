import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Kişilik profili",
  "desc": "Psikolojide en çok araştırılan modellerden biri olan beş büyük kişilik özelliğinde nerede durduğunu gör.",
  "intro": "Bu anket beş geniş kişilik özelliğini ölçer: deneyime açıklık, sorumluluk, dışadönüklük, uyumluluk ve duygusal denge. 50 ifade, araştırmalarda kullanılan ve herkese açık bir madde havuzu olan IPIP'ten uyarlanmıştır. Her ifadenin seni bugün ne kadar iyi anlattığını işaretle; olmak istediğin kişiyi değil, şu anki hâlini düşün. Doğru ya da yanlış cevap yoktur ve hiçbir özellik diğerinden daha iyi değildir. İçtenlikle ve fazla düşünmeden cevap ver: İlk izlenim genellikle en doğrusudur.",
  "scale": [
    "Kesinlikle katılmıyorum",
    "Katılmıyorum",
    "Kararsızım",
    "Katılıyorum",
    "Kesinlikle katılıyorum"
  ],
  "items": [
    "Girdiğim ortamın neşe kaynağı olurum.",
    "Başkalarını pek umursamam.",
    "Her zaman önceden hazırlık yaparım.",
    "Kolayca strese girerim.",
    "Kelime dağarcığım zengindir.",
    "Çok konuşmam.",
    "İnsanlara ilgi duyarım.",
    "Eşyalarımı ortada bırakırım.",
    "Çoğu zaman sakin kalırım.",
    "Soyut fikirleri anlamakta zorlanırım.",
    "İnsanların arasında kendimi rahat hissederim.",
    "İnsanları incitecek yorumlar yaparım.",
    "Ayrıntılara dikkat ederim.",
    "Sık sık bir şeyler için endişelenirim.",
    "Zengin bir hayal gücüm var.",
    "Arka planda kalmayı tercih ederim.",
    "Başkalarının ne hissettiğini önemserim.",
    "Genellikle ortalığı dağıtırım.",
    "Nadiren kendimi moralsiz hissederim.",
    "Soyut fikirler ilgimi çekmez.",
    "Genellikle sohbeti ben başlatırım.",
    "Başkalarının sorunları beni ilgilendirmez.",
    "İşlerimi ertelemeden hemen hallederim.",
    "Kolayca sarsılırım.",
    "Harika fikirlerim olur.",
    "Genellikle söyleyecek pek bir şeyim olmaz.",
    "Yufka yürekliyimdir.",
    "Eşyaları yerine koymayı sık sık unuturum.",
    "Kolayca üzülürüm.",
    "Hayal gücüm pek güçlü değildir.",
    "Partilerde birçok farklı insanla sohbet ederim.",
    "Aslında başkalarına pek ilgi duymam.",
    "Her şeyin düzenli olmasını severim.",
    "Ruh hâlim çok sık değişir.",
    "Bir şeyleri çabuk kavrarım.",
    "Dikkatleri üzerime çekmekten hoşlanmam.",
    "Başkalarına yardım etmek için zaman ayırırım.",
    "Sorumluluklarımdan kaçarım.",
    "Sık sık ruh hâlimde iniş çıkışlar yaşarım.",
    "Zor kelimeler kullanırım.",
    "İlgi odağı olmak beni rahatsız etmez.",
    "Başkalarının duygularını hissederim.",
    "Planlı bir düzene göre hareket ederim.",
    "Kolayca sinirlenirim.",
    "Bir şeyler üzerine düşünmeye zaman ayırırım.",
    "Tanımadığım insanların yanında az konuşurum.",
    "İnsanların yanımda rahat hissetmesini sağlarım.",
    "İşimin kalitesi konusunda titizimdir.",
    "Sık sık kendimi moralsiz hissederim.",
    "Kafam her zaman fikirlerle doludur."
  ],
  "dims": {
    "openness": {
      "label": "Deneyime açıklık",
      "desc": "Merakı, hayal gücünü ve yeni, soyut ya da alışılmışın dışındaki fikirlere duyulan ilgiyi ölçer.",
      "high": "Fikirleri keşfetmeyi, farklı şeyler öğrenmeyi ve olasılıkları hayal etmeyi seversin. Bu, özgün çözümler üretmene ve değişime uyum sağlamana yardımcı olur. Dikkat etmen gereken nokta, birçok ilgi alanı arasında dağılıp projeleri yarım bırakmaktır.",
      "low": "Somut, bilinen ve uygulamada denenmiş olanı tercih edersin. Bu sana günlük işlerde odak, sağduyu ve verimlilik kazandırır. Dikkat etmen gereken nokta, yeni fikirleri ne sunabileceklerini anlamadan çok erken bir kenara atmaktır.",
      "tips": [
        "Arada bir yeni bir şey dene; örneğin farklı türde bir kitap oku ya da eve başka bir yoldan dön.",
        "Farklı bir fikirle karşılaştığında, karar vermeden önce \"Burada işe yarar ne var?\" diye sor.",
        "Çok sayıda ilgi alanın varsa, bir seferde birini seç ve onu sonuna kadar götür."
      ]
    },
    "conscientiousness": {
      "label": "Sorumluluk",
      "desc": "Ne kadar plan yaptığını, sözünü tuttuğunu ve ayrıntılara özen gösterdiğini, yani disiplinini ve sorumluluk duygunu ölçer.",
      "high": "Genellikle plan yapar, teslim tarihlerine uyar ve ayrıntılara özen gösterirsin; insanlar sana güvenebileceklerini bilir. Dikkat etmen gereken nokta kendinden çok şey beklemektir: Mükemmeliyetçilik ve beklenmedik durumlarda zorlanmak yorgunluk yaratabilir.",
      "low": "İşlere katı planlara bağlı kalmadan, esnek ve kendiliğinden yaklaşırsın. Bu, bir şey değiştiğinde doğaçlama yapmana ve uyum sağlamana yardımcı olur. Dikkat etmen gereken nokta, önemli işleri son dakikaya bırakmak ya da teslim tarihlerini gözden kaçırmaktır.",
      "tips": [
        "Büyük işleri küçük adımlara böl ve her birine bir teslim tarihi koy.",
        "Basit bir liste ya da ajanda kullan ve güne başlarken onu gözden geçir.",
        "Mükemmeliyetçiliğe takılıp kalmamak için, başlamadan önce neyin \"yeterince iyi\" olduğunu belirle."
      ]
    },
    "extraversion": {
      "label": "Dışadönüklük",
      "desc": "Başkalarının arkadaşlığını, sohbeti ve hareketli ortamları ne kadar aradığını ve bunların enerjini ne kadar yenilediğini ölçer.",
      "high": "İnsanlarla birlikteyken enerji kazanır, kolayca sohbet başlatır ve hareketli ortamlarda kendini iyi hissedersin. Bu, bağ kurmana ve topluluk önünde kendini göstermene yardımcı olur. Dikkat etmen gereken nokta, dinlediğinden çok konuşmak ya da yalnız zaman gerektiren işlerde zorlanmaktır.",
      "low": "Küçük grupları, daha derin sohbetleri ve enerjini toplamak için sessiz anları tercih edersin. Bu, odaklanmayı, dinlemeyi ve harekete geçmeden önce düşünmeyi kolaylaştırır. Dikkat etmen gereken nokta, dikkat çekmek istemediğin için fikirlerini ve emeğini göstermekten kaçınmaktır.",
      "tips": [
        "Seni neyin dinlendirdiğini gözlemle: İnsanlarla olmak mı, yalnız kalmak mı? Buna zaman ayır.",
        "Toplantılarda çok konuşuyorsan, fikrini söylemeden önce bir soru sor; az konuşuyorsan, en az bir fikrini paylaşmayı dene.",
        "Sessiz ve içine dönük biri olmak, utangaç olmakla aynı şey değildir: Sessizliği sevip yine de çok iyi iletişim kurabilirsin."
      ]
    },
    "agreeableness": {
      "label": "Uyumluluk",
      "desc": "Başkalarını ne kadar önemsediğini, insanlara ne kadar güvendiğini ve rekabet yerine iş birliğini ne kadar tercih ettiğini ölçer.",
      "high": "İlgili, sıcak ve yardıma hazır birisin. Bu, güvene dayalı ilişkiler kurmanı ve gittiğin her yerde iyi bir hava yaratmanı sağlar. Dikkat etmen gereken nokta, başkalarının ihtiyaçlarını hep kendi ihtiyaçlarının önüne koymak ve hayır demekte zorlanmaktır.",
      "low": "Doğrudan, nesnel ve eleştirel biri olma eğilimindesin; karşı çıkmaktan çekinmezsin. Bu, pazarlık etmene, görüşlerini savunmana ve zor kararlar almana yardımcı olur. Dikkat etmen gereken nokta, istemeden sert görünmek ve seninle iş birliği yapabilecek insanları uzaklaştırmaktır.",
      "tips": [
        "Karşı çıkmadan önce, diğer kişinin bakış açısını anladığını göster.",
        "Önceliklerinin önüne geçen istekleri nazikçe geri çevirmeyi dene.",
        "Nazik olmakla kararlı olmanın bir arada olabileceğini unutma."
      ]
    },
    "stability": {
      "label": "Duygusal denge",
      "desc": "Baskı, endişe ve hayal kırıklıkları karşısında ne kadar sakin kalabildiğini ölçer. Yüksek puan daha fazla dinginliğe, düşük puan strese karşı daha fazla hassasiyete işaret eder.",
      "high": "Baskı altında genellikle sakin kalır ve aksiliklerden çabuk toparlanırsın. Bu, insanlara güven verir ve zor anlarda net düşünmene yardımcı olur. Dikkat etmen gereken nokta, gerçek sorunları küçümsemek ya da yakınındaki birinin zor durumda olduğunu fark etmemektir.",
      "low": "Duyguları yoğun yaşar, riskleri ve sorunları birçok kişiden önce fark edersin. Bu hassasiyet hazırlıklı olmana ve işleri ciddiye almana yardımcı olur. Dikkat etmen gereken nokta yıpranmaktır: Sık yaşanan endişe ve stres insanı yorar, bu yüzden bunlarla başa çıkmak için yöntemlerin olması faydalıdır.",
      "tips": [
        "Temel şeylere dikkat et: Uyku, beslenme ve fiziksel aktivite ruh hâlinde fark yaratır.",
        "Endişe ortaya çıktığında, ne düşündüğünü ve atabileceğin bir sonraki adımın ne olabileceğini yaz.",
        "Stres ya da üzüntü günlük hayatını aksatıyorsa, bir ruh sağlığı uzmanıyla konuş."
      ]
    }
  },
  "resultTitle": "Kişilik profilin",
  "resultIntro": "Her çubuk, bir özelliğin iki ucu arasında nerede durduğunu gösterir. Yüksek ya da düşük puanlar iyi veya kötü değildir: Her iki tarafın da avantajları ve dikkat edilmesi gereken yönleri vardır.",
  "note": "Bu sonuç, kendi cevaplarına dayanan bir kendini tanıma aracıdır. Bir teşhis değildir ve bir psikoloğun değerlendirmesinin yerini tutmaz. Kişilik de hayat boyunca ve koşullara göre değişebilir."
};

export default t;
