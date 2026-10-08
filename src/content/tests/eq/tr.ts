import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Duygusal zekâ",
  "desc": "Günlük hayatta kendi duygularını ve başkalarının duygularını nasıl fark ettiğini ve bunlarla nasıl başa çıktığını gör.",
  "intro": "Bu anket duygusal zekânın dört alanını değerlendirir: öz farkındalık, öz denetim, empati ve sosyal beceriler. Günlük durumlarla ilgili 24 ifade var. Her birinin, nasıl davranman gerektiğini düşündüğünü değil, genellikle nasıl davrandığını ne kadar iyi anlattığını işaretle. Doğru cevap yoktur: Cevapların ne kadar içten olursa sonuç da o kadar faydalı olur.",
  "scale": [
    "Kesinlikle katılmıyorum",
    "Katılmıyorum",
    "Kararsızım",
    "Katılıyorum",
    "Kesinlikle katılıyorum"
  ],
  "items": [
    "Birkaç duygu iç içe geçtiğinde bile ne hissettiğimi adlandırabilirim.",
    "Öfkelendiğimde, cevap vermeden önce biraz bekleyebilirim.",
    "Birinin canı sıkkın olduğunda, hiçbir şey söylemese bile fark ederim.",
    "Anlaşmazlıkları, konuşma kavgaya dönüşmeden çözebilirim.",
    "Ne hissettiğimi çoğu zaman ancak olay geçtikten sonra fark ederim.",
    "Tartışırken sonradan pişman olacağım şeyler söylediğim olur.",
    "Birini yargılamadan önce, onun neler yaşadığını anlamaya çalışırım.",
    "Gerekli olsalar bile zor konuşmalardan kaçınırım.",
    "Ruh hâlim kararlarımı etkilediğinde bunu fark ederim.",
    "Kötü geçen bir günün ardından, hıncımı başkalarından çıkarmadan sakinleşebilirim.",
    "Bazı insanların neden bu kadar yoğun tepki verdiğini anlamakta zorlanırım.",
    "Bir isteği kararlı ama kibar bir şekilde geri çevirebilirim.",
    "Hangi durumların beni genellikle çileden çıkardığını bilirim.",
    "Eleştiri aldığımda, kendimi savunmadan önce sonuna kadar dinlerim.",
    "Biri bana bir sorununu anlattığında, ne cevap vereceğimi düşünmek yerine dikkatle dinlerim.",
    "Grup içinde çalışırken insanların uzlaşmasına yardımcı olurum.",
    "Ne hissettiğimi anlatmakta zorlanırım.",
    "Bir şeyler ters gittiğinde, o konuyu düşünmeyi bırakmam uzun sürer.",
    "Bir ortama girdiğimde oradaki havayı genellikle hemen sezerim.",
    "Yeni ortamlarda insanlarla yakınlaşmakta zorlanırım.",
    "Bir şey beni etkilediğinde, gerginlik ya da yorgunluk gibi bedenimdeki işaretleri fark ederim.",
    "Duygusal açıdan zor bir günde bile yapmam gereken şeye odaklanabilirim.",
    "Biri benden farklı düşündüğünde, gerekçelerini dinlemeye pek sabrım olmaz.",
    "Birinin işindeki bir sorunu, o kişi kendini saldırıya uğramış hissetmeden dile getirebilirim."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Öz farkındalık",
      "desc": "Ne hissettiğini fark edip adlandırmak, bu duyguların nereden geldiğini ve davranışlarını nasıl etkilediğini anlamak.",
      "high": "Genellikle ne hissettiğini ve nedenini, çoğu zaman tepki vermeden önce fark edersin. Bu, daha bilinçli kararlar almana ve ihtiyaçlarını başkalarına anlatmana yardımcı olur. Dikkat etmen gereken nokta, yoluna devam etmek yerine her duyguyu fazla analiz etmektir.",
      "low": "Ne hissettiğinden çok, yapılması gerekene odaklanma eğilimindesin; bu da pratik davranmana yardımcı olur. Dikkat etmen gereken nokta, duyguları ancak durum geçtikten sonra, davranışlarını çoktan etkilediklerinde fark etmektir.",
      "tips": [
        "Günde birkaç kez birkaç saniyeliğine dur ve kendine sor: Şu an ne hissediyorum?",
        "Sadece \"kötüyüm\" demek yerine, bunun yorgunluk, hayal kırıklığı, üzüntü ya da kaygı olup olmadığını anlamaya çalış.",
        "Seni etkileyen durumları ve hemen öncesinde ne olduğunu not et."
      ]
    },
    "selfRegulation": {
      "label": "Öz denetim",
      "desc": "Güçlü duygularla dürtüsel davranmadan başa çıkmak, sakinliğini yeniden kazanmak ve zor günlerde bile odağını korumak.",
      "high": "Öfke, hayal kırıklığı ya da kaygı hissedebilirsin ama bunların davranışlarını yönetmesine izin vermezsin. Bu güven verir ve gereksiz çatışmaları önler. Dikkat etmen gereken nokta, dile getirilmesi gereken duyguları içinde tutmaktır; bu, gerginliğin birikmesine yol açabilir.",
      "low": "Hızlı ve yoğun tepki verirsin; insanlar genellikle ne hissettiğini tam olarak bilir. Bu kendiliğindenlik samimi ve enerji dolu olabilir. Dikkat etmen gereken nokta, o anın etkisiyle verilen tepkilerdir; bunlar bazen pişmanlığa yol açar ya da ilişkileri yıpratır.",
      "tips": [
        "Duygunun yükseldiğini hissettiğinde kısa bir mola ver, derin bir nefes al ve ancak ondan sonra cevap ver.",
        "Çok öfkeliyken karar vermekten ya da önemli mesajlar göndermekten kaçın.",
        "Spor, yürüyüş ya da güvendiğin biriyle sohbet gibi düzenli bir rahatlama yolun olsun."
      ]
    },
    "empathy": {
      "label": "Empati",
      "desc": "Başkalarının ne hissettiğini fark etmek ve senin bakış açından farklı olsa bile onların bakış açısını anlamak.",
      "high": "Bir ortamın havasını ve insanların ne hissettiğini, söze gerek kalmadan kolayca sezersin. Bu sayede insanlar yanında anlaşıldıklarını hisseder. Dikkat etmen gereken nokta, başkalarının duygularını tükenecek kadar üstlenmektir.",
      "low": "İşin içindeki duygulardan çok olgulara ve sorunun kendisine odaklanma eğilimindesin. Bu, hassas durumlarda nesnel kalmana yardımcı olur. Dikkat etmen gereken nokta, birinin desteğe ihtiyacı olduğuna dair işaretleri kaçırmak ya da istemeden mesafeli görünmektir.",
      "tips": [
        "Önemli konuşmalarda, cevap vermeden önce anladığın şeyi kendi kelimelerinle tekrar et.",
        "Doğrudan çözümlere geçmeden önce \"Bu konuda nasıl hissediyorsun?\" diye sor.",
        "Sadece söylenenlere değil, yüz ifadelerine, ses tonuna ve sessizliklere de dikkat et."
      ]
    },
    "social": {
      "label": "Sosyal beceriler",
      "desc": "Açık iletişim kurmak, çatışmaları çözmek, iş birliği yapmak ve hem iş hayatında hem özel hayatta iyi ilişkiler kurmak.",
      "high": "Zor konuşmaları iyi yönetir, tavrını net ortaya koyar ve grupların uzlaşmasına yardım edersin. Bu yüzden bir şeyin çözülmesi gerektiğinde insanlar genellikle sana başvurur. Dikkat etmen gereken nokta, bütün çatışmaları çözme görevini üstlenmektir; bu, aşırı yüke yol açabilir.",
      "low": "Sürtüşmelerden kaçınmayı tercih eder, iyi tanıdığın insanlarla daha rahat hissedersin. Bu genellikle sakin ilişkiler ve az kavga anlamına gelir. Dikkat etmen gereken nokta, gerekli konuşmaları erteleyip sorunların büyümesine ya da ihtiyaçlarının karşılıksız kalmasına izin vermektir.",
      "tips": [
        "Zor bir geri bildirim verirken kişiden değil, davranıştan ve onun etkisinden bahset.",
        "Uzun açıklamalar yapmadan, kısa ve kibar bir cümleyle hayır demeyi dene.",
        "Yeni ortamlarda sohbeti başlatmak için basit bir soru sor: İnsanlar yaptıkları işten bahsetmeyi sever."
      ]
    }
  },
  "resultTitle": "Duygusal zekâ profilin",
  "resultIntro": "Her alanda nasıl bir puan aldığını gör. Bu beceriler pratikle gelişir; sonucu bir etiket olarak değil, bir başlangıç noktası olarak kullan.",
  "note": "Bu anket, kendi algına dayanan bir kendini tanıma aracıdır. Geçerliliği kanıtlanmış bir psikolojik test değildir ve bir uzmanın değerlendirmesinin yerini tutmaz."
};

export default t;
