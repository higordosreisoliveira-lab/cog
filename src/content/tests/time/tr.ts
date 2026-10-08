// time — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Zaman yönetimi',
  desc: 'Önceliklerini nasıl belirlediğini, nasıl plan yaptığını, odağını nasıl koruduğunu ve işle dinlenmeyi nasıl dengelediğini gör.',
  intro:
    'Bu anket, zaman yönetimiyle ilgili dört alışkanlığı değerlendirir: öncelik belirlemek, plan yapmak, odağı korumak ve sınırlara ve dinlenme anlarına saygı göstermek. 16 ifade var. Her biri için, ister işte, ister okulda, ister evde olsun, şu anki günlük düzenini ne kadar iyi anlattığını işaretle. Doğru cevap yoktur: Amaç, günlük hayatını en çok iyileştirebilecek noktaları bulmaktır.',
  scale: ['Kesinlikle katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Kesinlikle katılıyorum'],
  items: [
    'Haftamın en önemli işlerinin neler olduğunu bilirim.',
    'Günümü ya da haftamı planlamak için birkaç dakika ayırırım.',
    'Kendimi bölmeden bir iş üzerinde uzun süre çalışabilirim.',
    'Zaten üstlendiğim işleri aksattıklarında ricaları geri çevirebilirim.',
    'Acil olanla gerçekten önemli olanı birbirinden ayırırım.',
    'Teslim etmem gereken önemli bir şey olduğunu çoğu zaman ancak son anda fark ederim.',
    'Konsantre olmam gerektiğinde bildirimleri sessize alırım.',
    'Çok iş olsa bile gün içinde dinlenmek için molalar veririm.',
    'Günün büyük kısmını küçük işleri halletmekle geçirir, en önemli olanı bir kenara bırakırım.',
    'Son tarihleri ve randevuları öğrenir öğrenmez not ederim.',
    'Birkaç şeyi aynı anda yapmaya çalışmak yerine her seferinde tek bir şey yaparım.',
    'İşle ya da okulla ilgili mesajlara akşamları, hafta sonları ya da tatilde cevap veririm.',
    'Yeni bir işi kabul etmeden önce, onun şu anda yaptığım şeyden daha önemli olup olmadığını düşünürüm.',
    'Plan yaparken beklenmedik durumlar için biraz zaman payı bırakırım.',
    'Her mesaj ya da istek geldiğinde yaptığım şeyi bırakırım.',
    'İşi bitirmek için belirli bir saatim vardır ve genellikle buna uyarım.',
  ],
  dims: {
    priorities: {
      label: 'Öncelikler',
      desc: 'Neyin en önemli olduğunu bilmek ve zamanını, yalnızca acil ya da kolay olandan önce ona ayırmak.',
      high: 'Genellikle neyin gerçekten önemli olduğunu bilir ve en verimli zamanını bu işlere ayırırsın. Bu, çabanın fark yaratan sonuçlar doğurmasını sağlar. Dikkat etmen gereken nokta katılıktır: Bazen beklenmedik bir istek, plan dışında olsa bile ilgiyi hak eder.',
      low: 'Önce ortaya çıkana yanıt verme eğilimindesin ve farklı taleplere açık olduğunu gösterirsin. Bu sana esneklik kazandırır ve seni başkalarının güvenebileceği biri yapar. Dikkat etmen gereken nokta, günü çok iş yapmış ama en önemli konuda az ilerlemiş olarak bitirmektir.',
      tips: [
        'Her günün başında en önemli üç işi seç ve bunlardan biriyle başla.',
        'Yeni bir talebi kabul etmeden önce, onun şu anda yaptığın şeyden daha önemli olup olmadığını kendine sor.',
        'Enerjinin en yüksek olduğu saatleri günün en önemli işine ayır.',
      ],
    },
    planning: {
      label: 'Planlama',
      desc: 'Günü ve haftayı önceden düzenlemek, son tarihleri takip etmek ve her işin ne kadar süreceğini öngörmek.',
      high: 'Genellikle önceden plan yapar, randevularını kaydeder ve işlerin ne kadar süreceğini öngörürsün. Bu, sürprizleri azaltır ve sana huzur verir. Dikkat etmen gereken nokta, plan yapmaya fazla zaman harcamak ya da gün planlandığı gibi gitmediğinde hayal kırıklığına uğramaktır.',
      low: 'Ne yapacağına gün içinde, olaylar geliştikçe karar verme eğilimindesin; bu da sana kendiliğindenlik ve doğaçlama yeteneği kazandırır. Dikkat etmen gereken nokta sürprizlerdir: geç fark edilen son tarihler ve sandığından uzun süren işler.',
      tips: [
        'Her haftanın başında önümüzdeki günleri planlamak için on dakika ayır.',
        'Her son tarihi ya da randevuyu öğrendiğin anda ajandana yaz.',
        'Günü planlarken zamanın yaklaşık üçte birini beklenmedik durumlar için boş bırak.',
      ],
    },
    focus: {
      label: 'Odak',
      desc: 'Aynı anda tek bir işe konsantre olmak ve zamanını kesintilerden korumak.',
      high: 'Bir işe uzun süre konsantre olabilir ve çalışmanı kesintilerden korursun. Bu, yaptığın işin kalitesini ve hızını artırır. Dikkat etmen gereken nokta, fazla uzun süre cevap vermeden kalmak ve senden dönüş bekleyenleri geciktirmektir.',
      low: 'Mesajlara ve isteklere hızlı cevap verir, aynı anda birçok şeyi takip edersin. Bu seni ulaşılabilir ve çevik biri yapar. Dikkat etmen gereken nokta, işler arasında sürekli geçiş yapmanın yorması ve her işin, tam dikkatle yapıldığında süreceğinden daha uzun sürmesine yol açmasıdır.',
      tips: [
        'Ajandanda konsantre çalışma için 60 ila 90 dakikalık zaman dilimleri ayır.',
        'Bildirimleri sessize al ve mesajlara bakmak için günde iki üç zaman belirle.',
        'Başka bir işe başlamadan önce bir işi ya da onun net olarak belirlenmiş bir bölümünü bitir.',
      ],
    },
    boundaries: {
      label: 'Sınırlar ve dinlenme',
      desc: 'Gerektiğinde hayır demek, mola vermek ve çalışma zamanını dinlenme zamanından ayırmak.',
      high: 'Önceliklerini tehlikeye atan istekleri geri çevirebilir ve mola anlarını korursun. Bu, uzun vadede enerjini ve sağlığını korur. Dikkat etmen gereken nokta, grubun gerçekten ekstra çabaya ihtiyaç duyduğu anlarda ulaşılmaz görünmektir.',
      low: 'Genellikle ulaşılabilirsin ve zor hayır dersin; bu da insanların sana çok güvenmesini sağlar. Dikkat etmen gereken nokta biriken yorgunluktur: Mola ve sınır olmadan enerji ve işin kalitesi zamanla düşer.',
      tips: [
        'İşi bitirmek için bir saat belirle ve o saatten sonra bildirimleri kapat.',
        'Her bir iki saatte bir kalkmak, su içmek ve gözlerini dinlendirmek için kısa bir mola ver.',
        'Bir isteği geri çevirmek için "Şu an yapamam ama perşembe günü yardım edebilirim" gibi basit bir cümle kullan.',
      ],
    },
  },
  resultTitle: 'Zaman yönetimi profilin',
  resultIntro:
    'Her alışkanlıkta nasıl bir puan aldığını gör. Yüksek puanlar daha yerleşik uygulamalara işaret eder, ama onların da dikkat edilmesi gereken noktaları vardır. Aynı anda üzerinde çalışmak için bir ya da iki alışkanlık seç.',
  note: 'Bu sonuç, kendi cevaplarına dayanan bir kendini tanıma aracıdır ve profesyonel bir değerlendirme değildir. Yorgunluk ya da aşırı iş yükü sık yaşanıyorsa, yöneticinle ya da bir sağlık uzmanıyla konuşmakta fayda var.',
};

export default t;
