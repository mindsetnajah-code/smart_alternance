export type Institute = {
  name: string
  shortName: string
  description: string
  category: string
  sector: string
  logo: string
  logoClassName?: string
  isNew?: boolean
  programs: string[]
}

export const contactPhone = "+227 86366706"
export const phoneHref = "tel:+22786366706"
export const whatsappHref = "https://wa.me/22786366706"

export const institutes: Institute[] = [
  {
    name: "I.P.A.S (Institut Privé des Agents de Santé)",
    shortName: "I.P.A.S",
    description:
      "Cet institut privé forme des agents de santé et des profils paramédicaux prêts à intervenir sur le terrain.",
    category: "Santé et paramédical",
    sector: "Santé",
    logo: "/instituts parternaires/IMG-20260804-WA0038.jpg",
    isNew: true,
    programs: [
      "Formation sanitaire",
      "Soins infirmiers",
      "Santé communautaire",
      "Accompagnement paramédical",
      "Prévention et hygiène",
    ],
  },
  {
    name: "IRIMAG",
    shortName: "IRIMAG",
    description:
      "Cet institut régional propose des parcours professionnalisants en informatique, marketing, assurance et gestion.",
    category: "Informatique et gestion",
    sector: "Informatique",
    logo: "/instituts parternaires/file_00000000cf90722f89d8577262674c4a.png",
    logoClassName: "p-3",
    isNew: true,
    programs: ["Informatique", "Marketing", "Assurance", "Gestion", "Management professionnel"],
  },
  {
    name: "Centre Privé de Formation Professionnelle et Technique La Floraison",
    shortName: "La Floraison",
    description:
      "Ce centre privé développe des compétences pratiques à travers des formations professionnelles et techniques.",
    category: "Formation professionnelle et technique",
    sector: "Formation",
    logo: "/instituts parternaires/IMG-20260702-WA0030.jpg",
    isNew: true,
    programs: [
      "Formation professionnelle",
      "Formation technique",
      "Compétences pratiques",
      "Insertion professionnelle",
    ],
  },
  {
    name: "ESSI Niger",
    shortName: "ESSI Niger",
    description:
      "Cette école supérieure forme aux métiers de la statistique, de l'informatique et de l'analyse des données.",
    category: "Statistique et informatique",
    sector: "Informatique",
    logo: "/instituts parternaires/file_00000000c2bc822f9a97d5c4b8546754.png",
    isNew: true,
    programs: ["Statistique", "Informatique", "Analyse des données", "Systèmes d'information"],
  },
  {
    name: "Swiss UMEF University of Niger",
    shortName: "Swiss UMEF",
    description:
      "Cette université privée propose des formations orientées vers les affaires, la diplomatie et le droit.",
    category: "Affaires, diplomatie et droit",
    sector: "Droit et affaires",
    logo: "/instituts parternaires/file_00000000cf4081f4bd7e247e7c26f2f4.png",
    logoClassName: "p-2",
    isNew: true,
    programs: ["École d'affaires", "École de diplomatie", "École de droit", "Relations internationales"],
  },
  {
    name: "Université Européenne Privée du Niger - Jean Jaurès (UEPN-JJ)",
    shortName: "UEPN-JJ",
    description:
      "Cette université accompagne les étudiants dans les sciences politiques, juridiques, économiques et de gestion.",
    category: "Sciences politiques et gestion",
    sector: "Droit et affaires",
    logo: "/instituts parternaires/file_000000007c1c822fa5242319bcd7658c.png",
    isNew: true,
    programs: [
      "Sciences politiques et juridiques",
      "Sciences économiques et de gestion",
      "Hôtellerie et tourisme",
      "Gestion des organisations",
    ],
  },
  {
    name: "Institut Privé de Management et de l'Industrie (IPMI)",
    shortName: "IPMI",
    description:
      "Cet institut forme aux compétences de management, d'industrie et de gestion utiles aux entreprises.",
    category: "Management et industrie",
    sector: "Management",
    logo: "/instituts parternaires/IMG-20260804-WA0037.jpg",
    isNew: true,
    programs: ["Management", "Industrie", "Gestion d'entreprise", "Compétences professionnelles"],
  },
  {
    name: "École Polytechnique Privée pour le Développement Agricole Durable (EPPRIDAD)",
    shortName: "EPPRIDAD",
    description:
      "Cette école polytechnique prépare des profils techniques orientés vers l'agriculture durable et l'innovation locale.",
    category: "Agriculture durable",
    sector: "Agriculture",
    logo: "/instituts parternaires/IMG_20260804_212155_096@1650412836.jpg",
    logoClassName: "p-3",
    isNew: true,
    programs: [
      "Développement agricole durable",
      "Formation polytechnique",
      "Innovation agricole",
      "Gestion de projets agricoles",
    ],
  },
  {
    name: "IFAC Agro Industrie et de Commerce",
    shortName: "IFAC",
    description:
      "Cet institut prépare aux métiers de la gestion, du commerce et des secteurs agro-industriels.",
    category: "Commerce et industrie",
    sector: "Commerce",
    logo: "/instituts parternaires/IMG_20260509_145432_588@630655636.jpg",
    programs: ["Gestion commerciale", "Agro-industrie", "Administration des affaires"],
  },
  {
    name: "Institut Supérieur de Santé",
    shortName: "ISS",
    description:
      "Cet établissement forme des profils compétents et responsables dans les métiers de la santé.",
    category: "Santé",
    sector: "Santé",
    logo: "/instituts parternaires/IMG_20260509_145920_804@-2112894977.jpg",
    programs: ["Sciences infirmières", "Santé communautaire", "Assistance médico-sanitaire"],
  },
  {
    name: "École Supérieure de Management",
    shortName: "ESM",
    description:
      "Cette école prépare aux fonctions de management, d'encadrement et de pilotage d'activités.",
    category: "Management",
    sector: "Management",
    logo: "/instituts parternaires/IMG_20260510_135009_851@272532290.jpg",
    programs: ["Management", "Comptabilité et finance", "Gestion des organisations"],
  },
  {
    name: "ESPA",
    shortName: "ESPA",
    description:
      "Cet institut accompagne les apprenants vers la réussite académique, la professionnalisation et l'insertion.",
    category: "Professionnalisation",
    sector: "Formation",
    logo: "/instituts parternaires/IMG_20260509_151121_892@1311408274.jpg",
    programs: ["Administration", "Formation professionnelle", "Accompagnement à l'insertion"],
  },
  {
    name: "SUP-SANTÉ",
    shortName: "SUP-SANTÉ",
    description:
      "Cette école supérieure privée développe des compétences sanitaires pratiques au service de la communauté.",
    category: "Santé",
    sector: "Santé",
    logo: "/instituts parternaires/IMG_20260510_143500_061@-68103080.jpg",
    programs: ["Sciences de la santé", "Pratique clinique", "Formation paramédicale"],
  },
  {
    name: "SUP'MANAGEMENT Niger",
    shortName: "SUP'MANAGEMENT",
    description:
      "Cet établissement prépare aux métiers du management, de la gestion et du leadership organisationnel.",
    category: "Management",
    sector: "Management",
    logo: "/instituts parternaires/IMG_20260510_143540_606@8740389.jpg",
    programs: ["Management", "Gestion d'entreprise", "Leadership organisationnel"],
  },
  {
    name: "Grande École Privée de Gestion et d'Administration (GEGA)",
    shortName: "GEGA",
    description:
      "Cette grande école forme des profils capables d'évoluer dans l'administration et la gestion.",
    category: "Gestion et administration",
    sector: "Management",
    logo: "/instituts parternaires/IMG_20260510_143613_531@1162666915.jpg",
    programs: ["Administration", "Gestion", "Organisation d'entreprise"],
  },
  {
    name: "EPI Niger Business School",
    shortName: "EPI Niger",
    description:
      "Cette business school met en avant l'innovation, l'ingénierie appliquée et l'entrepreneuriat.",
    category: "Business et ingénierie",
    sector: "Droit et affaires",
    logo: "/instituts parternaires/IMG_20260510_143638_704@2014192654.jpg",
    programs: ["Business school", "Ingénierie appliquée", "Entrepreneuriat"],
  },
  {
    name: "École Polytechnique de Niamey (EPN)",
    shortName: "EPN",
    description:
      "Cette école polytechnique forme des profils techniques polyvalents orientés vers l'innovation.",
    category: "Polytechnique",
    sector: "Technique",
    logo: "/instituts parternaires/IMG_20260602_185851_172@1538726220.jpg",
    programs: ["Ingénierie", "Formation technique", "Innovation appliquée"],
  },
  {
    name: "École Supérieure Privée d'Ingénierie et de Management (ESPIM)",
    shortName: "ESPIM",
    description:
      "Cette école associe compétences techniques et managériales pour préparer des profils complets.",
    category: "Ingénierie et management",
    sector: "Technique",
    logo: "/instituts parternaires/cropped-logo.png",
    programs: ["Ingénierie", "Management", "Leadership appliqué"],
  },
  {
    name: "ISSSPT",
    shortName: "ISSSPT",
    description:
      "Cet institut spécialisé forme aux sciences de la santé et aux pratiques de soins de terrain.",
    category: "Santé et soins",
    sector: "Santé",
    logo: "/instituts parternaires/file_00000000426871f4b8b8da59e3463344.png",
    programs: ["Sciences de la santé", "Soins pratiques", "Formation sanitaire"],
  },
  {
    name: "Profutur",
    shortName: "Profutur",
    description:
      "Cet institut accompagne les parcours d'avenir avec une approche tournée vers l'insertion professionnelle.",
    category: "Formation et insertion",
    sector: "Formation",
    logo: "/instituts parternaires/file_000000006ff071f4b107ff1d69b94f3b.png",
    programs: ["Formation professionnelle", "Insertion", "Accompagnement au projet"],
  },
  {
    name: "Institut des Hautes Études en Santé Publique (I.H.E.S.P)",
    shortName: "I.H.E.S.P",
    description:
      "Cet institut forme aux enjeux de santé publique, de prévention et de gestion des services de santé.",
    category: "Santé publique",
    sector: "Santé",
    logo: "/instituts parternaires/IMG_20260510_143702_627@-2060868116.jpg",
    programs: ["Santé publique", "Prévention", "Gestion sanitaire"],
  },
  {
    name: "ECCAM",
    shortName: "ECCAM",
    description:
      "Cette école forme aux domaines de la comptabilité, de la communication, de l'administration et du management.",
    category: "Administration et management",
    sector: "Management",
    logo: "/instituts parternaires/IMG_20260510_143718_835@1584582960.jpg",
    programs: ["Comptabilité", "Communication", "Administration et management"],
  },
  {
    name: "HETEC",
    shortName: "HETEC",
    description:
      "Ce groupe accompagne les étudiants vers des carrières techniques, technologiques et commerciales.",
    category: "Technologie et commerce",
    sector: "Technique",
    logo: "/instituts parternaires/IMG_20260510_143742_363@-1103643363.jpg",
    programs: ["Études technologiques", "Commerce", "Formation d'ingénieurs"],
  },
  {
    name: "Institut Africain de Santé Privé (I.A.S.P)",
    shortName: "I.A.S.P",
    description:
      "Cet institut forme des professionnels de santé capables d'intervenir efficacement sur le terrain.",
    category: "Santé privée",
    sector: "Santé",
    logo: "/instituts parternaires/file_000000005330720ab0bc2b79df8a6509.png",
    programs: ["Soins infirmiers", "Formation médico-sanitaire", "Pratique hospitalière"],
  },
  {
    name: "ISESS",
    shortName: "ISESS",
    description:
      "Cet établissement accompagne la maîtrise des fondamentaux théoriques et des compétences professionnelles en santé.",
    category: "Sciences de la santé",
    sector: "Santé",
    logo: "/instituts parternaires/file_000000008d1c71f494e3b3c86c79e838.png",
    programs: ["Formation sanitaire", "Santé communautaire", "Accompagnement académique"],
  },
  {
    name: "Université Moderne des Sciences de la Santé (UM2S)",
    shortName: "UM2S",
    description:
      "Cette université forme des profils modernes et rigoureux dans les métiers du soin et de la prévention.",
    category: "Université de santé",
    sector: "Santé",
    logo: "/instituts parternaires/file_00000000bae471f4ae7f2694ff98ac6e.png",
    programs: ["Sciences de la santé", "Prévention et santé publique", "Parcours médico-techniques"],
  },
  {
    name: "INSA-IGP",
    shortName: "INSA-IGP",
    description:
      "Cet institut propose des filières techniques et de gestion adaptées aux besoins actuels du marché.",
    category: "Technique et gestion",
    sector: "Technique",
    logo: "/instituts parternaires/file_00000000db9871f489f07c9b059b2398.png",
    programs: ["Gestion appliquée", "Filières techniques", "Orientation professionnelle"],
  },
  {
    name: "Institut Privé d'Excellence en Management et en Comptabilité (I.P.E.M)",
    shortName: "I.P.E.M",
    description:
      "Cet institut développe des compétences concrètes en management, comptabilité et gestion d'entreprise.",
    category: "Management et comptabilité",
    sector: "Management",
    logo: "/instituts parternaires/IMG-20260511-WA0014.jpg",
    programs: ["Management", "Comptabilité", "Gestion d'entreprise"],
  },
  {
    name: "Institut Privé des Hautes Études de la Santé (IPHES)",
    shortName: "IPHES",
    description:
      "Cet institut propose une formation sérieuse et professionnalisante dans le secteur médico-sanitaire.",
    category: "Hautes études de la santé",
    sector: "Santé",
    logo: "/instituts parternaires/file_0000000016a47243a9f77c1c8edfc17d.png",
    programs: ["Sciences infirmières", "Formation médico-sanitaire", "Santé et accompagnement clinique"],
  },
  {
    name: "Hautes Études Comptables et Financières (H.E.C.F)",
    shortName: "H.E.C.F",
    description:
      "Cet institut forme aux techniques comptables, fiscales et financières pour accompagner les organisations.",
    category: "Comptabilité et finance",
    sector: "Management",
    logo: "/instituts parternaires/file_00000000cc5071fd946a049e1057fbf0.png",
    programs: [
      "Comptabilité générale",
      "Finance d'entreprise",
      "Audit et contrôle de gestion",
      "Fiscalité",
      "Gestion financière",
    ],
  },
  {
    name: "Institut de formation en science de la santé (IFSS)",
    shortName: "IFSS",
    description:
      "Cet institut prépare des professionnels qualifiés pour les secteurs sanitaire et médical.",
    category: "Sciences de la santé",
    sector: "Santé",
    logo: "/instituts parternaires/file_00000000fbf471f4a0997c7355b5fb3b.png",
    programs: [
      "Sciences infirmières",
      "Santé communautaire",
      "Prévention santé",
      "Biologie médicale",
      "Accompagnement sanitaire",
    ],
  },
]
