import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/dugun-fotografcisi.jpeg';
import PortfolioImage2 from '../../assets/image/portfolio/klip-montaj-kamera.jpeg';
import PortfolioImage3 from '../../assets/image/portfolio/ltb_urun.jpeg';
import PortfolioImage4 from '../../assets/image/portfolio/sosyal-medya.jpeg';
import PortfolioImage5 from '../../assets/image/portfolio/bebek-cocuk-fotografciligi.jpeg';



import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/user.png';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: '#',
  },
  {
    icon: socialFacebook,
    url: '#',
  },
  {
    icon: socialDribbbleOutline,
    url: '#',
  },
  {
    icon: socialGithub,
    url: '#',
  },
  {
    icon: socialGoogleplusOutline,
    url: '#',
  },
];

export const MENU_ITEMS = [
  {
    label: 'Ben Kimim?',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Çalışma Alanlarım',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'Neden Ben?',
    path: '#process_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee1,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee2,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee3,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'DÜĞÜN',
    portfolioItem: [
      {
        title: 'Düğün Fotoğrafçılığı',
        description:
          "Kore tarzı dahil sizin zevklerinize uygun düğün / nişan fotoğrafçılığı için benimle tanışın.",
        image: PortfolioImage1,
        link: '#',
      },
      {
        title: 'Düğün fotoğrafçılığı.',
        description:
          "Kore tarzı dahil sizin zevklerinize uygun düğün / nişan fotoğrafçılığı için benimle tanışın.",
        image: PortfolioImage1,
      },
    ],
  },
  {
    title: 'KLİP ÇEKİMİ VE MONTAJ',
    portfolioItem: [
      {
        title: 'Şarkılarınıza eşsiz bir görsellik katmak için.',
        description:
          "Rap, rock, geleneksel ve diğer tüm müzik sahalarında, size uygun dinamiklerle güncel klip ve montajlar için benimle tanışın.",
        image: PortfolioImage2,
        link: '#',
      },
      {
        title: 'Şarkılarınıza eşsiz bir görsellik katmak için.',
        description:
          "Rap, rock, geleneksel ve diğer tüm müzik sahalarında, size uygun dinamiklerle güncel klip ve montajlar için benimle tanışın.",
        image: PortfolioImage2,
        link: '#'
      },
    ],
  },
  {
    title: 'ÜRÜN',
    portfolioItem: [
      {
        title: 'Ürün Fotoğrafçılığı',
        description:
          "Ürünlerinizin, size ve ürününüze uygun, doğru konseptte ve ışıkta profesyonel çekimleri için benimle tanışın.",
        image: PortfolioImage3,
        link: '#',
      },
      {
        title: 'Ürün Fotoğrafçılığı',
        description:
        "Ürünlerinizin, size ve ürününüze uygun, doğru konseptte ve ışıkta profesyonel çekimleri için benimle tanışın.",
        image: PortfolioImage3,
        link: '#',
      },
    ],
  },
  {
    title: 'SOSYAL MEDYA',
    portfolioItem: [
      {
        title: 'Sosyal Medya Tasarımı',
        description:
          "İşletmenizin ve sizin markanızın tarzına en uygun görsel çekimler için benimle tanışın.",
        image: PortfolioImage4,
        link: '#',
      },
      {
        title: 'Sosyal Medya Tasarımcılığı',
        description:
        "Kurumsal ve kişisel markanızın tarzına en uygun görsel çekimler için benimle tanışın.",
        image: PortfolioImage2,
        link: '#',
      },
    ],
  },
  {
    title: 'Aile',
    portfolioItem: [
      {
        title: 'Çocuk ve Yeni Doğan Bebek Fotoğrafçılığı',
        description:
          "Küçükleriminizin yıllar sonrasına etkili bir anı bırakmak için benimle tanışın",
        image: PortfolioImage5,
        link: '#',
      },
      {
        title: 'Çocuk ve Yeni Doğan Bebek Fotoğrafçılığı',
        description:
        "Küçükleriminizin yıllar sonrasına etkili bir anı bırakmak için benimle tanışın",
        image: PortfolioImage2,
        link: '#',
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Merhaba',
    description:
      'Instagram üzerinden bana hızlıca bir merhaba deyin !',
  },
  {
    image: Step2,
    title: '2. İhtiyacınız',
    description:
      'İhtiyaçlarınızı ve yapılabilecekleri düşünüp tasarlayalım !',
  },
  {
    image: Step3,
    title: '3. Son',
    description:
      'Pazarlığımızı yapalım ve anlaşalım :) ',
  },
];

export const SERVICE_LIST = [
  {
    title: 'Fotoğrafçılık',
    listItems: [
      {
        content: 'Düğün Fotoğrafçılığı',
      },
      {
        content: 'Ürün Fotoğrafçılığı',
      },
      {
        content: 'Kişisel Marka Fotoğrafçılığı',
      },
      {
        content: 'Kurumsal Marka Fotoğrafçılığı',
      },
      {
        content: 'Yeni Doğan Bebek Fotoğrafçılığı',
      },
      {
        content: 'Çocuk ve Aile Fotoğrafçılığı',
      },
    ],
  },
  {
    title: 'Video Çekim',
    listItems: [
      {
        content: 'Düğün / Kına / Sünnet Özel Gün Video Çekimi',
      },
      {
        content: 'Rap Klip Video Çekimi',
      },
      {
        content: 'Evlilik Teklifi ve Özel An Çekimi',
      },
      {
        content: 'Balayı Çekimi',
      },
    ],
  },
  {
    title: 'Video Montaj ve Fotoğraf Editi',
    listItems: [
      {
        content: 'Klip Montaji',
      },
      {
        content: 'Fotoğraf Renk ve Kontrast Çalışması',
      },
      {
        content: 'Eski Fotoğraf Restorasyonu',
      },
      {
        content: 'Renk Ahenk Çalışması',
      },
    ],
  },
];

export const SKILLS = [
  {
    title: 'Graphic Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon1,
    successRate: '90',
  },
  {
    title: 'UI/UX Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon2,
    successRate: '85',
  },
  {
    title: 'Web Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon3,
    successRate: '80',
  },
  {
    title: 'Mobile Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon4,
    successRate: '70',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Avukatlık ofisimin kurumsal fotoğraflarını çekerken bize çok güzel ayak uydurduğu için çok mutluyuz. Kendisinin ellerine sağlık.',
    name: 'Ömer Faruk Aydın',
    designation: 'Avukat',
    twitterProfile: 'https://twitter.com/attorney_omer',
    organization: '@attorney_omer',
    organizationURL: 'https://www.omeraydin.av.tr/',
  },
  {
    image: Reviewer1,
    review:
      'Güzel kızımın en güzel fotoğraflarını sağolsun Tolga bey çekti. Çekim sırasında kızımız çok mutluydu. Çok Teşekkürler',
    name: 'Halide Erelgin',
    designation: 'Anne',
    twitterProfile: 'https://www.instagram.com/halidelgin/'
  },
  {
    image: Reviewer1,
    review:
      'Tolga ile birçok kez klip çekimi yaptık. Gönül rahatlığıyla rap şarkılarınızın klipleri için çalışabilirsiniz.',
    name: 'Barnas Koşar',
    designation: 'Müzisyen',
    twitterProfile: 'https://www.instagram.com/barnibarnas/',
    organization: '@Barni',
    organizationURL: 'https://www.instagram.com/barnibarnas/',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];
