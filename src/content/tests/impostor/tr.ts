// impostor — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'İmpostor sendromu',
  desc: 'İş ve okul hayatında kendi başarılarından ne sıklıkla şüphe ettiğini, eksiklerinin fark edilmesinden ne kadar korktuğunu ve kendinden ne kadar fazla şey beklediğini gör.',
  intro:
    'İmpostor sendromu, elde ettiklerini hak etmediğin ve er ya da geç birinin bunu fark edeceği duygusudur. Yetkin ve başarılı insanlar arasında bile çok yaygın bir deneyimdir; bir teşhis ya da ruhsal bozukluk değildir. Bu anket, bu duygunun genellikle ortaya çıktığı üç biçime bakar: başarıyı şansa bağlamak, "ortaya çıkmaktan" korkmak ve mükemmeliyetçilikle kendinden çok şey beklemek. İş ve okul hayatından 15 durum var. Son birkaç ayı düşün ve her birinin sana ne sıklıkla olduğunu işaretle. Bir durum günlük hayatının parçası değilse, daha önce yaşadığın benzer bir şeyi düşünerek cevap ver. Doğru ya da yanlış cevap yoktur.',
  scale: ['Hiçbir zaman', 'Nadiren', 'Bazen', 'Sık sık', 'Her zaman'],
  items: [
    'Zor bir sınavı geçtiğimde, şanslı olduğumu ve tam da bildiğim soruların çıktığını düşünürüm.',
    'Bir toplantıda ya da derste, henüz neyi bilmediğim fark edilmesin diye soru sormaktan vazgeçerim.',
    'Basit bir e-postayı, bir hatayı gözden kaçırmaktan korktuğum için göndermeden önce defalarca okurum.',
    'Bir işe, bursa ya da terfiye kabul edildiğimde, bunun az aday olduğu için ya da biri bana yardım ettiği için olduğunu düşünürüm.',
    'Yeni bir işte ya da kursta ilk haftalarda, yanlış kişiyi seçtiklerini yakında fark edecekleri hissine kapılırım.',
    'İyi geçen bir sunumdan sonra, saatlerce takıldığım tek bölümü düşünürüm.',
    'Üzerinde çalıştığım bir proje başarılı olduğunda, sonucu benim yaptıklarımla değil, ekibin çabasıyla ya da zamanlamanın iyi olmasıyla açıklarım.',
    'Yöneticim ya da hocam benimle baş başa konuşmak istediğinde, aklıma ilk gelen, işin altından kalkamadığımı fark ettikleridir.',
    'Bitmiş bir işi, göstermek için henüz yeterince iyi olmadığını hissettiğim için gerekenden uzun süre elimde tutarım.',
    'Yüksek bir not ya da iyi bir performans değerlendirmesi aldığımda, beni değerlendiren kişinin o gün bana karşı cömert davrandığını düşünürüm.',
    'Bir çalışmayı sunmadan önce, birinin insanların sandığından daha az şey bildiğimi ortaya çıkaracak bir soru sorduğunu hayal ederim.',
    'İyi ama en yüksek olmayan bir not aldığımda, sonucu kutlamak yerine kaybettiğim puanları kafamda evirip çeviririm.',
    'Ekibi tıkayan bir sorunu çözdüğümde, ne yaptığımı bildiğim için değil, tesadüfen doğru yaptığımı düşünürüm.',
    'Biri beni bir konuda uzman olarak tanıttığında, insanları kandırıyormuşum gibi rahatsız olurum.',
    'Bir eki unutmak ya da bir sayıyı yanlış yazmak gibi küçük bir hata yaptığımda, günün geri kalanında kendimi sertçe eleştiririm.',
  ],
  dims: {
    luck: {
      label: 'Başarıyı şansa bağlama',
      desc: 'Başarılarını, kendi çabanı ve yeteneğini tanımak yerine şans, başkalarının yardımı ya da uygun koşullar gibi dış etkenlerle ne kadar açıkladığını ölçer.',
      high: 'Bir şey yolunda gittiğinde, sonucu şansa, zamanlamaya ya da başka insanlara bağlama eğilimindesin. Bu alçakgönüllülük gibi görünebilir, ama zamanla kendi becerilerini görmeni engeller ve her yeni başarının bir tesadüf gibi görünmesine yol açar. Kendi payını kabul etmek kibir değildir: Olanların daha doğru bir okumasıdır.',
      low: 'Aldığın yardımı göz ardı etmeden, başarılarında çabanın ve yeteneğinin payını genellikle kabul edersin. Bu, olgulara dayanan bir özgüven inşa etmene ve yeni zorluklara daha güvenle yaklaşmana yardımcı olur. Neyin işe yaradığına ve nedenine dikkat etmeye devam et.',
      tips: [
        'Bir başarı dosyası tut: Sonuçları, övgüleri ve çözdüğün sorunları tarih ve ayrıntılarıyla not et; şüphe ortaya çıktığında yeniden oku.',
        'İyi bir sonuçtan sonra, şansı düşünmeden önce oraya varmak için neler yaptığını listele; örneğin çalışma saatlerini, verdiğin kararları ve kullandığın becerileri.',
        'Bir iltifat aldığında, yaptığını küçümsemeden ya da emeği başkasına yüklemeden sadece teşekkür etmeyi dene.',
      ],
    },
    fear: {
      label: 'Ortaya çıkma korkusu',
      desc: 'İnsanların göründüğün kadar yetenekli olmadığını fark etmesinden ne kadar endişelendiğini ve bu korkunun yaptıklarını ya da yapmaktan kaçındıklarını ne kadar etkilediğini ölçer.',
      high: 'Genellikle insanları kandırdığını ve her an birinin bunu fark edebileceğini hissedersin. Bu korku seni soru sormaktan kaçınmaya, fırsatları geri çevirmeye ya da kimse şüphelerini fark etmesin diye gereğinden fazla çalışmaya itebilir. Kimsenin her şeyi bilmediğini ve bir şüpheyi kabul etmenin genellikle güvensizlikten çok güven yarattığını hatırlamakta fayda var.',
      low: 'Bulunduğun yerde rahat hissedersin ve birinin gizli bir eksiğini ortaya çıkaracağı duygusuyla yaşamazsın. Bu, soru sormayı, yardım istemeyi ve yeni zorlukları kabul etmeyi kolaylaştırır. Bu güven, işe yeni başlayan iş arkadaşlarının da daha rahat hissetmesine yardımcı olur.',
      tips: [
        'Bunu güvendiğin iş ya da okul arkadaşlarınla konuş: Hayran olduğun kişiler de dahil olmak üzere birçoğunun aynı şeyi hissettiğini öğrenmen sık rastlanan bir durumdur.',
        'Toplantılarda ya da derslerde haftada en az bir soru sor ve insanların gerçekte nasıl tepki verdiğini gözlemle.',
        'Korku ortaya çıktığında, yetenekli olmadığına dair hangi somut kanıtların bulunduğunu kendine sor ve bunları aksini gösteren kanıtlarla karşılaştır.',
      ],
    },
    perfection: {
      label: 'Mükemmeliyetçilik ve öz eleştiri',
      desc: 'Hata yapmamak için kendinden ne kadar çok şey beklediğini, işleri ne kadar fazla gözden geçirdiğini ve bir şey kusursuz olmadığında kendini ne kadar sert eleştirdiğini ölçer.',
      high: 'Genellikle çok yüksek standartlar koyar ve küçük ayrıntılarda bile bunlara ulaşamadığında kendini sertçe eleştirirsin. Bu özen kaliteli işler ortaya çıkarabilir, ama aynı zamanda yorgunluğa, gecikmelere ve hiçbir şeyin asla yeterince iyi olmadığı duygusuna da yol açabilir. Standartlara sahip olmak sağlıklıdır; zor olan, bunları mükemmellik talebinden ayırmaktır.',
      low: 'Yaptığın işin kalitesini önemsersin, ama hataların ve kusurların sürecin bir parçası olduğunu kabul edersin. Bu, işleri zamanında teslim etmene, tökezlemelerden ders çıkarmana ve uzun vadede enerjini korumana yardımcı olur. Yalnızca daha fazla dikkat gerektiren işlerde bu rahatlığın özensizliğe dönüşmemesine dikkat et.',
      tips: [
        'Bir işe başlamadan önce, o iş için "bitti"nin ne anlama geldiğini belirle ve oraya vardığında gözden geçirmeyi bırak.',
        'Standartları mükemmellikten ayır: Seni rahatsız eden ayrıntının, işi teslim alacak kişi için gerçekten bir fark yaratıp yaratmayacağını kendine sor.',
        'Hata yaptığında, kendinle aynı durumdaki bir iş arkadaşınla konuşacağın gibi konuş: Hatayı kabul et, neyin düzeltilebileceğine bak ve yoluna devam et.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Az belirti',
      text: 'Cevapların, impostor sendromuna dair az belirti olduğunu gösteriyor. Başarılarını tanıyor ve kendinden aşırı şey beklemeden hatalarla başa çıkıyor gibi görünüyorsun. Yine de bu duygunun yeni bir iş, bir terfi ya da bir eğitimin başlangıcı gibi değişim dönemlerinde ortaya çıkması normaldir.',
    },
    some: {
      label: 'Bazı belirtiler',
      text: 'Cevapların, impostor duygusunun bazı durumlarda ortaya çıktığını gösteriyor; bu çok yaygındır. Bu duygu genellikle göz önünde olduğun anlarda ya da yeni zorluklar karşısında güçlenir. Üç alandan hangisinde en yüksek puanı aldığına bak ve o alanın önerileriyle başla.',
    },
    strong: {
      label: 'Güçlü belirtiler',
      text: 'Cevapların, impostor duygusunun iş ya da okul hayatında çok belirgin olduğunu gösteriyor. Kendi başarılarından şüphe etmek, eksiklerinin fark edilmesinden korkmak ve kendinden sürekli çok şey beklemek yorucudur ve bunların hiçbiri gerçekte ne kadar yetenekli olduğunu göstermez. Pratik önerileri dene ve bu duygu sana acı veriyorsa bir uzmanla konuşmayı düşün.',
    },
  },
  resultTitle: 'İmpostor sendromu sende nasıl ortaya çıkıyor',
  resultIntro:
    'Sonuç üç alanı toplar ve impostor duygusunun bugün iş ya da okul hayatında ne kadar belirgin olduğunu gösterir. Yetkinliğini ölçmez: Çok yetenekli birçok insan yüksek puan alır. Aşağıda her alanın cevaplarında nasıl ortaya çıktığını görebilirsin.',
  note: 'Bu test, kendi cevaplarına dayanan bir kendini tanıma aracıdır. İmpostor sendromu tıbbi bir teşhis ya da ruhsal bir bozukluk değildir ve bu sonuç bir psikoloğun değerlendirmesinin yerini tutmaz. İmpostor duygusu da zamanla, koşullara göre ve pratikle değişir.',
  help: 'İmpostor duygusu sana sık sık acı, kaygı ya da tükenmişlik yaşatıyorsa veya fırsatları geri çevirmene, zorluklardan kaçınmana ya da kariyerinde veya eğitiminde tıkanmana yol açıyorsa, bir psikologla konuşmak işe yarayabilir. Terapi, öz eleştiriyle başa çıkmak ve daha gerçekçi bir özgüven inşa etmek için araçlar sunar.',
};

export default t;
