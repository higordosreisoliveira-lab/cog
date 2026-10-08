// stress — Turkish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Stres düzeyi',
  desc: 'Son bir ayda aşırı yükün sana ne kadar ağır geldiğini ve toparlanma gücünün ne durumda olduğunu gör.',
  intro:
    'Bu anket stresi iki yönden değerlendirir: hissettiğin aşırı yük ve baskı ile bu yükü dengelemeye yardımcı olan kontrol ve toparlanma duygusu. Son bir ayla ilgili 12 ifade var. Her biri için, bu süre içinde sende ne sıklıkla yaşandığını belirt. Bazı ifadeler olumlu durumları anlatır: Onlara da aynı şekilde, yalnızca sıklığı düşünerek cevap ver. Bu, cevaplarına dayanan bir öz değerlendirmedir ve bir uzmanın değerlendirmesinin yerini tutmaz.',
  scale: ['Hiçbir zaman', 'Neredeyse hiç', 'Bazen', 'Sık sık', 'Çok sık'],
  items: [
    'Görevlerim ve sorumluluklarım günün saatlerine sığmayacak kadar fazla geldi.',
    'Suçluluk duymadan dinlenmeye zaman ayırabildim.',
    'Günün sonunda yapılacak işlerin sadece arttığını hissettim.',
    'Bir sorun çıktığında durup ne yapacağımı sakince düşünebildim.',
    'Başkalarından ya da kendimden gelen, her şeye yetişmem gerektiğine dair güçlü bir baskı hissettim.',
    'Günümü ihtiyacım olan şekilde düzenleyebildiğimi hissettim.',
    'Normalde beni rahatsız etmeyecek şeylere karşı sabrımı kaybettim.',
    'Zor bir günün ardından iyi bir gece uykusu ya da biraz keyifli vakit geçirmek toparlanmama yetti.',
    'Dinlenmem gereken anlarda bile yapılacak işlerimi düşünmeye devam ettim.',
    'İçimi dökmem ya da yardım istemem gerektiğinde güvenebileceğim biri vardı.',
    'Baş ağrısı, kenetlenmiş çene ya da geçmeyen bir yorgunluk gibi bedensel gerginlik işaretleri hissettim.',
    'Zaten çok fazla işim olduğunda istekleri geri çevirebildim ya da erteleyebildim.',
  ],
  dims: {
    load: {
      label: 'Aşırı yük ve baskı',
      desc: 'Ne kadar aşırı görev, baskı ve gerginlik hissettiğini ve bunun dinlenme saatlerinde bile ne kadar peşini bırakmadığını ölçer.',
      high: 'Son bir ayda aşırı yük hissi sıktı: yapılacak çok iş, baskı ve zihnin için pek az boşluk. Beden ve zihin bu tempoya bir süre dayanır, ama uzun sürdüğünde bunun bir bedeli olur. Neyin azaltılabileceğine, paylaşılabileceğine ya da ertelenebileceğine bakmaya değer.',
      low: 'Son bir ayda baskı az ortaya çıktı ya da yönetebildiğin bir düzeyde kaldı. Bu zorluk yaşanmadığı anlamına gelmez, ama birikmiş gibi görünmüyorlar. Bu dengeyi korumak için neyin işe yaradığını gözlemle.',
      tips: [
        'Haftanın görevlerini listele ve gerçekten acil olanları, bekleyebilecekleri ve başkalarıyla paylaşılabilecekleri ayır.',
        'Gün içinde, beş dakikalık bile olsa, ekranlardan uzak kısa molalar ver.',
        'İş mesajlarına artık cevap vermediğin bir saat gibi net sınırlar belirle.',
      ],
    },
    coping: {
      label: 'Kontrol ve toparlanmada düşüş',
      desc: 'Stresi dengeleyen kaynakların, yani günlük hayatın senin elinde olduğunu hissetmenin, dinlenmenin, desteğe güvenebilmenin ve sınır koymanın eksikliğini ölçer. Bu bölümdeki ifadeler olumludur, bu yüzden az yaşandıklarında puan yükselir.',
      high: 'Son bir ayda dinlenme, destek ve kontrol hissi anları nadirdi. Bu molalar olmadan sıradan bir günlük düzen bile daha ağır gelir, çünkü toparlanmaya yer kalmaz. Bu kaynakları yavaş yavaş güçlendirmek, stresi azaltmanın en etkili yollarından biridir.',
      low: 'Dinlenebiliyor, yardım isteyebiliyor ve günlük hayatının büyük ölçüde senin elinde olduğunu hissedebiliyorsun. Bu kaynaklar bir tampon gibi çalışır: Zor dönemleri tükenmeden atlatmana yardımcı olur. Bu anları, özellikle günlük hayatın sıkıştığında, korumaya devam et.',
      tips: [
        'Uykunu koru: Hafta sonları da dahil olmak üzere benzer saatlerde yatıp kalkmaya çalış.',
        'Haftada en az bir kez keyif ya da dinlenme getiren bir etkinliği takvimine ekle ve o saate bir randevu gibi davran.',
        'Güvendiğin birine nasıl olduğunu anlat: Yükü paylaşmak bile onu hafifletmeye yardımcı olur.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Düşük stres',
      text: 'Cevapların, son bir ayda stres düzeyinin düşük olduğunu gösteriyor. Günlük hayatın talepleriyle toparlanma anları arasında iyi bir denge buluyor gibi görünüyorsun. Bu dengeyi destekleyen alışkanlıklara özen göstermeye devam et.',
    },
    moderate: {
      label: 'Orta düzeyde stres',
      text: 'Cevapların, talebin çok olduğu dönemlerde yaygın olan orta düzeyde bir stres gösteriyor. Dikkat etmen gereken nokta, bu durumun rahatlama dönemleri olmadan olağan hâle gelmesidir. Aşağıdaki önerileri dene; stres uykunu, sağlığını ya da ilişkilerini etkilemeye başlarsa bir uzmanla konuş.',
    },
    high: {
      label: 'Yüksek stres',
      text: 'Cevapların, son bir ayda çok fazla baskı ve toparlanmak için pek az alan olan yüksek bir stres düzeyi gösteriyor. Bu durum uzadığında uykuyu, ruh hâlini ve beden sağlığını etkileyebilir. Neyin ağır geldiğini anlamak ve yükü hafifletmenin yollarını bulmak için psikolog ya da doktor gibi bir uzmandan yardım almaya değer.',
    },
  },
  resultTitle: 'Stres düzeyin',
  resultIntro: 'Sonuç, son bir ayla ilgili cevaplarını toplar. Kontrol ve toparlanmayla ilgili ifadelerde sayım tersine çevrilir: Bu kaynaklar ne kadar az ortaya çıktıysa sonuç o kadar yükselir. Aşağıda hangi aralıkta olduğunu ve her bölümde nasıl puan aldığını görebilirsin.',
  note: 'Bu anket, son bir aya dair kendi algına dayanan bir kendini tanıma aracıdır. Teşhis değildir ve nitelikli bir uzmanın değerlendirmesinin yerini tutmaz. Stres düzeyi de hayatın bir döneminden diğerine epey değişir.',
  help: 'Stres sağlığını, uykunu ya da ilişkilerini etkiliyorsa bir psikoloğa ya da doktoruna başvur. Bulunduğun yerdeki sağlık hizmetleri de sana yol gösterebilir ve gerektiğinde seni ruh sağlığı hizmetlerine yönlendirebilir. Yoğun bir sıkıntı içindeysen, ülkendeki bir kriz ya da duygusal destek hattına ulaş. Acil bir durumda 112’yi ya da bulunduğun yerin acil durum numarasını ara.',
};

export default t;
