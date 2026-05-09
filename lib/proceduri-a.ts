export type Citation = { text: string; url: string; source: string };
export type Fact = { label: string; value: string; source?: string };
export type FAQItem = { q: string; a: string };
export type RecoveryStep = { period: string; title: string; description: string };

export type Procedure = {
  slug: string;
  title: string;
  h1: string;
  category: "augmentare" | "preput" | "curbura" | "reparator" | "regenerativ";
  procedureType: "SurgicalProcedure" | "NonSurgicalProcedure" | "TherapeuticProcedure";
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  searchVolume: string;
  intent: string;
  bodyLocation: string;
  shortDescription: string;
  lead: string;
  cost: string;
  duration: string;
  recovery: string;
  anesthesia: string;
  hospitalStay: string;
  sexualActivity: string;
  whatIs: string;
  whenIndicated: string[];
  whenNotIndicated: string[];
  procedureSteps: { title: string; description: string }[];
  facts: Fact[];
  recovery_timeline: RecoveryStep[];
  risks: { title: string; description: string }[];
  alternatives: { title: string; description: string }[];
  faqs: FAQItem[];
  citations: Citation[];
  internalLinks: { slug: string; label: string }[];
  speakablePassages: string[];
  alternateName?: string[];
};


export const proceduriA: Procedure[] = [
  {
    slug: "alungire-penis",
    title: "Alungire penis chirurgicală (faloplastie dorsală)",
    h1: "Alungire chirurgicală a penisului — faloplastie dorsală",
    category: "augmentare",
    procedureType: "SurgicalProcedure",
    metaTitle: "Alungire penis chirurgical București | Faloplastie 2-5 cm | Dr. Diana",
    metaDescription: "Alungire chirurgicală a penisului prin secționarea ligamentului suspensor. Câștig 2-5 cm. Recuperare 4-6 săptămâni.",
    primaryKeyword: "alungire penis chirurgical",
    searchVolume: "1.300-1.700/lună",
    intent: "Commercial-investigational",
    bodyLocation: "penis (joncțiune pubiană)",
    alternateName: ["faloplastie dorsală", "ligamentoliză", "secționare ligament suspensor"],
    shortDescription: "Câștig vizual 2-5 cm prin secționarea ligamentului suspensor, intervenție de 60-90 minute, recuperare 4-6 săptămâni.",
    lead: "Studiu sistematic publicat în Aesthetic Plastic Surgery (2020, n=1.200+ pacienți) raportează 78% satisfacție pe lungime după faloplastie dorsală. Tehnica oferă câștig vizual de 2-5 cm prin secționarea ligamentului suspensor — penisul nu este alungit, ci descoperit din pubis. Recuperarea la activitate normală durează 7-10 zile, iar reluarea activității sexuale este permisă după 4-6 săptămâni.",
    cost: "2.800-4.500 EUR",
    duration: "60-90 min",
    recovery: "7-10 zile activitate normală",
    anesthesia: "Locală cu sedare sau rahidiană",
    hospitalStay: "Externare aceeași zi (90% cazuri)",
    sexualActivity: "Reluare după 4-6 săptămâni",
    whatIs: "Alungirea chirurgicală a penisului (faloplastie dorsală sau ligamentoliză) este intervenția prin care se secționează parțial ligamentul suspensor — structura fibroasă care fixează rădăcina penisului de osul pubian. După secționare, o porțiune din penisul intracorporal devine vizibilă în exterior, ceea ce produce un câștig de lungime aparent în stare flască.",
    whenIndicated: [
      "Micropenis (lungime erectilă <7,5 cm la adulți, conform criteriilor ISSM)",
      "Hipospadias corectat sau alte anomalii anatomice",
      "Indicație estetică: dorință de îmbunătățire vizuală a lungimii flasce",
      "Penis ascuns parțial (combinat cu liposucție suprapubiană)",
      "Componentă a unei faloplastii combinate (alungire + îngroșare)"
    ],
    whenNotIndicated: [
      "Curbură peniană semnificativă neoperată (Peyronie activ)",
      "Fumat activ sau diabet decompensat (risc de cicatrizare)",
      "Așteptări nerealiste — pacient care speră creștere intra-erectilă",
      "Tulburare dismorfică corporală netratată (PDD/BDD)",
      "Lipsă de acord cu interdicția de 4-6 săptămâni de la sex"
    ],
    procedureSteps: [
      { title: "Consultația preoperatorie", description: "Examinare clinică, măsurători pre-op standardizate (lungime flasc, întins, erecție), discuție realistă despre câștig posibil, analize, confirmare consimțământ informat scris." },
      { title: "Anestezia", description: "Anestezie locală cu sedare în 80% din cazuri sau rahidiană (subarahnoidiană) la cerere. Anestezie generală rezervată cazurilor combinate cu îngroșare." },
      { title: "Incizia și disecția", description: "Incizie de 1,5-2 cm în pliul pubian, ascunsă natural de pilozitate. Disecție atentă până la ligamentul suspensor." },
      { title: "Secționarea ligamentului", description: "Secționarea parțială a ligamentului suspensor (75-80% din lățime), păstrând o porțiune pentru stabilitate axială în erecție." },
      { title: "Fixarea în noua poziție", description: "Sutură strat cu strat, fixare a țesutului adipos pubian retracționat pentru a împiedica re-aderența ligamentului." },
      { title: "Pansament și externarea", description: "Pansament compresiv minim, mobilizare în 1-2 ore, externare în aceeași zi în 90% din cazuri." }
    ],
    facts: [
      { label: "Câștig vizual realist (flasc)", value: "2-5 cm", source: "Marquez-Algaba 2020" },
      { label: "Câștig în erecție", value: "1-3 cm" },
      { label: "Durata intervenției", value: "60-90 min" },
      { label: "Externare", value: "Aceeași zi (90% cazuri)" },
      { label: "Recuperare activitate normală", value: "7-10 zile" },
      { label: "Reluare activitate sexuală", value: "4-6 săptămâni" },
      { label: "Rata complicații majore", value: "<2%", source: "Aesthetic Plast Surg 2020" },
      { label: "Satisfacție pe lungime", value: "78%", source: "Marquez-Algaba 2020 (n=1.200+)" },
      { label: "Lungime medie globală în erecție", value: "13,12 cm ±1,66", source: "Veale BJU 2015 (n=15.521)" },
      { label: "Tendință 2023", value: "13,93 cm (+24% în 30 ani)", source: "Marra WJMH 2023 (n=55.761)" }
    ],
    recovery_timeline: [
      { period: "Zilele 1-3", title: "Disconfort moderat, edem", description: "Repaus la domiciliu, paracetamol/ibuprofen, igienă locală cu apă sterilă." },
      { period: "Ziua 4-7", title: "Reluare activități sedentare", description: "Activitate de birou posibilă, plimbări scurte, evitare efort fizic și pantaloni strâmți." },
      { period: "Săpt. 2", title: "Vindecare incizie", description: "Cicatrizare avansată, control medical, scoatere suturi nerezorbabile dacă există." },
      { period: "Săpt. 3-4", title: "Activitate fizică ușoară", description: "Reluare gradat sport ușor, evitare ciclism și activitate sexuală." },
      { period: "Săpt. 4-6", title: "Reluare activitate sexuală", description: "După acordul medicului, reluare cu prudență. Erecția spontană contraindicată în primele 3-4 săptămâni." },
      { period: "Lună 3", title: "Rezultat stabil", description: "Edem complet rezolvat, evaluare câștig final, control imagistic dacă este indicat." }
    ],
    risks: [
      { title: "Echimoze și edem", description: "Frecvente (15-30%), se resorb în 2-3 săptămâni. Pansament compresiv reduce intensitatea." },
      { title: "Instabilitate în erecție", description: "Mobilitate ușor crescută la baza penisului. Adaptare în 6-8 săptămâni." },
      { title: "Re-aderența ligamentului", description: "Fără tracțiune post-op poate reduce câștigul cu până la 1 cm. Folosim dispozitive de tracțiune dedicate." },
      { title: "Infecție", description: "<1% cu protocol antibiotic preoperator." },
      { title: "Cicatrice hipertrofică", description: "Rar (<5%). Locație în pliul pubian o face invizibilă în majoritatea cazurilor." },
      { title: "Regrete majore", description: "4-6% conform Vardi et al 2008 (J Sex Med). Diminuate prin selecție psihologică atentă." }
    ],
    alternatives: [
      { title: "Augmentare cu acid hialuronic", description: "Non-chirurgical, dar adresează grosimea, nu lungimea. Combinabil." },
      { title: "Lipofilling combinat", description: "Pentru câștig de circumferință în aceeași intervenție." },
      { title: "Liposucție suprapubiană", description: "Descoperă 1-3 cm aparenți gratuit la pacienții cu acumulare grăsime pubiană." },
      { title: "Tracțiune mecanică", description: "Dispozitive penile extender — câștig 1-2 cm dacă purtate 4-6h/zi, 6 luni. Rezultate variabile." }
    ],
    faqs: [
      { q: "Pot reveni la 7 cm dacă am 12?", a: "Nu funcționează așa. Penisul nu este alungit prin operație — este descoperit. Erecția rămâne aceeași intern. Vizibil veți câștiga 2-5 cm flasc și 1-3 cm în erecție prin descoperirea segmentului intracorporal." },
      { q: "Voi pierde erecția după ligamentoliză?", a: "Nu. Ligamentul suspensor nu participă la mecanismul erectil. Erecția se produce prin umplerea cu sânge a corpilor cavernoși, structuri independente de ligamentul secționat." },
      { q: "Va fi mai instabil în timpul actului sexual?", a: "Da, ușor. Penisul va avea mai multă mobilitate la bază în primele săptămâni. Adaptarea funcțională se face în 6-8 săptămâni." },
      { q: "Există cicatrice vizibilă?", a: "Incizia (1,5-2 cm) este în pliul pubian, acoperită complet de pilozitate. Cicatricea este invizibilă în majoritatea cazurilor după 3 luni." },
      { q: "Câți pacienți regretă intervenția?", a: "Studiul Vardi et al 2008 (J Sex Med) raportează 4-6% regrete majore. Rata scade semnificativ prin selecție psihologică atentă și consultație onestă pre-op." },
      { q: "Trebuie să port dispozitiv de tracțiune?", a: "Recomandăm dispozitiv de tracțiune timp de 4-6 săptămâni, 4-6 ore pe zi, începând din săpt. 2-3 post-op. Aceasta consolidează câștigul și previne re-aderența ligamentului." }
    ],
    citations: [
      { text: "Veale D et al. Am I normal? Penis length nomograms (n=15.521). BJU International, 2015.", url: "https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.13010", source: "BJU International 2015" },
      { text: "Marra G et al. Worldwide Temporal Trends in Penile Length: meta-analysis (n=55.761). World Journal of Men's Health, 2023.", url: "https://www.wjmh.org/DOIx.php?id=10.5534%2Fwjmh.220203", source: "WJMH 2023" },
      { text: "Marquez-Algaba E et al. Augmentation Phalloplasty Systematic Review. Aesthet Plast Surg, 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/31831387/", source: "Aesthet Plast Surg 2020" },
      { text: "ISAPS — International Society of Aesthetic Plastic Surgery.", url: "https://www.isaps.org/", source: "ISAPS" }
    ],
    internalLinks: [
      { slug: "ingrosare-lipofilling", label: "Îngroșare cu lipofilling" },
      { slug: "ingrosare-acid-hialuronic", label: "Augmentare cu acid hialuronic" }
    ],
    speakablePassages: [
      "Faloplastia dorsală oferă un câștig vizual de 2-5 cm flasc și 1-3 cm în erecție. Recuperarea la activitate normală durează 7-10 zile, iar reluarea activității sexuale este permisă după 4-6 săptămâni.",
      "Studiu pe 1.200+ pacienți publicat în Aesthetic Plastic Surgery 2020 raportează 78% satisfacție pe lungime, cu rata complicațiilor majore sub 2%."
    ]
  }
];
