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

export const proceduri: Procedure[] = [
  {
    slug: "alungire-penis",
    title: "Alungire penis chirurgicală (faloplastie dorsală)",
    h1: "Alungire chirurgicală a penisului — faloplastie dorsală",
    category: "augmentare",
    procedureType: "SurgicalProcedure",
    metaTitle: "Faloplastie București, alungire penis chirurgicală | Preț, poze, recuperare | Dr. Diana",
    metaDescription: "Faloplastie București cu Dr. Diana Gheorghiță, alungire penis chirurgicală 2-5 cm prin secționarea ligamentului suspensor. Preț, poze rezultate realiste, păreri pacienți, recuperare 4-6 săptămâni.",
    primaryKeyword: "alungire penis chirurgical",
    searchVolume: "1.300-1.700/lună",
    intent: "Commercial-investigational",
    bodyLocation: "penis (joncțiune pubiană)",
    alternateName: ["faloplastie dorsală", "ligamentoliză", "secționare ligament suspensor"],
    shortDescription: "Câștig vizual 2-5 cm prin secționarea ligamentului suspensor, intervenție de 60-90 minute, recuperare 4-6 săptămâni.",
    lead: "Studiu sistematic publicat în Aesthetic Plastic Surgery (2020, n=1.200+ pacienți) raportează 78% satisfacție pe lungime după faloplastie dorsală. Tehnica oferă câștig vizual de 2-5 cm prin secționarea ligamentului suspensor; penisul nu este alungit fizic, ci expus din pubis prin eliberarea segmentului intracorporal. Recuperarea la activitate normală durează 7-10 zile, iar reluarea activității sexuale este permisă după 4-6 săptămâni.",
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
      { title: "Liposucție suprapubiană", description: "Expune 1-3 cm aparenți gratuit la pacienții cu acumulare de grăsime pubiană." },
      { title: "Tracțiune mecanică", description: "Dispozitive penile extender — câștig 1-2 cm dacă purtate 4-6h/zi, 6 luni. Rezultate variabile." }
    ],
    faqs: [
      { q: "Pot reveni la 7 cm dacă am 12?", a: "Nu funcționează așa. Penisul nu este alungit prin operație, este expus. Erecția rămâne aceeași intern. Vizibil veți câștiga 2-5 cm flasc și 1-3 cm în erecție prin expunerea segmentului intracorporal." },
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
  },
  {
    slug: "ingrosare-lipofilling",
    title: "Îngroșare penis cu grăsime proprie (lipofilling)",
    h1: "Îngroșare penis cu grăsime proprie — lipofilling",
    category: "augmentare",
    procedureType: "SurgicalProcedure",
    metaTitle: "Îngroșare penis cu lipofilling, grăsime proprie București | Preț, poze | Dr. Diana",
    metaDescription: "Îngroșare penis cu lipofilling autolog (grăsime proprie) la Dr. Diana Gheorghiță, București. Câștig 1-3 cm circumferință permanent, recuperare 1-2 săptămâni. Preț, poze rezultate, păreri.",
    primaryKeyword: "îngroșare penis lipofilling",
    searchVolume: "900-1.300/lună",
    intent: "Commercial-investigational",
    bodyLocation: "penis — corp peniann (țesut subcutan)",
    alternateName: ["augmentare cu grăsime proprie", "fat grafting penis", "lipotransfer"],
    shortDescription: "Câștig de 1-3 cm circumferință cu grăsime proprie, permanent după stabilizarea la 6 luni. Recuperare 5-7 zile.",
    lead: "Lipofillingul peniann transferă 30-80 ml de grăsime proprie procesată Coleman către corpul penian, oferind 1-3 cm câștig de circumferință permanent după resorbția stabilizată la 6 luni. Procedura durează 2 ore, externarea este în aceeași zi, iar grăsimea proprie elimină complet riscul de respingere imunologică.",
    cost: "3.000-4.000 EUR",
    duration: "2 ore",
    recovery: "5-7 zile activitate normală",
    anesthesia: "Locală cu sedare sau generală scurtă",
    hospitalStay: "Externare aceeași zi",
    sexualActivity: "Reluare după 3-4 săptămâni",
    whatIs: "Lipofillingul peniann (augmentare cu grăsime proprie) este o procedură de medicină regenerativă prin care se recoltează grăsime de pe abdomen sau coapse, se procesează prin tehnica Coleman, și se injectează în țesutul subcutan al penisului pentru a crește circumferința. Spre deosebire de filler-uri sintetice, grăsimea proprie nu produce respingere imunologică.",
    whenIndicated: [
      "Pacient nemulțumit de circumferința peniană",
      "Combinație cu alungire (faloplastie combinată)",
      "Refacere de volum după extracție corpi străini",
      "Pacient cu rezerve adipoase suficiente",
      "Preferință pentru opțiune permanentă"
    ],
    whenNotIndicated: [
      "Pacient foarte slab fără rezerve adipoase",
      "Tulburări de coagulare necontrolate",
      "Infecție activă în zona genitală",
      "Așteptare de creștere de 5+ cm (nerealist)",
      "Fumător activ care nu acceptă să oprească 4 săptămâni pre/post-op"
    ],
    procedureSteps: [
      { title: "Recoltare grăsime", description: "Liposucție delicată cu canule fine din abdomen inferior sau coapse interne. Volum recoltat: 100-200 ml grăsime brută." },
      { title: "Procesare Coleman", description: "Centrifugare la 3.000 rpm timp de 3 minute. Rezultă 30-80 ml grăsime curată gata de injectare." },
      { title: "Injectare", description: "Microinjectări multiple cu canule Coleman (17G) pe straturi multiple, distribuție egală pe circumferință." },
      { title: "Pansament compresiv", description: "Bandaj elastic ușor compresiv pentru distribuție uniformă." },
      { title: "Externare", description: "Externare aceeași zi, ghid scris, programare control la 7 zile, 1 lună, 3 luni și 6 luni." }
    ],
    facts: [
      { label: "Câștig circumferință", value: "1-3 cm permanent", source: "Marquez-Algaba 2020" },
      { label: "Cantitate grăsime injectată", value: "30-80 ml" },
      { label: "Resorbție în primele 6 luni", value: "30-50%" },
      { label: "Pacienți touch-up la 12 luni", value: "15-25%" },
      { label: "Durată intervenție", value: "2 ore" },
      { label: "Recuperare activitate normală", value: "5-7 zile" },
      { label: "Activitate sexuală", value: "3-4 săptămâni" },
      { label: "Risc respingere", value: "0% (țesut autolog)" },
      { label: "Proceduri Dr. Diana / an", value: "200+" }
    ],
    recovery_timeline: [
      { period: "Zilele 1-3", title: "Edem și sensibilitate", description: "Pansament compresiv, repaus, paracetamol." },
      { period: "Ziua 4-7", title: "Reluare activitate sedentară", description: "Activitate de birou posibilă. Evitare pantaloni strâmți." },
      { period: "Săpt. 2", title: "Control medical", description: "Verificare cicatrizare și distribuție volum." },
      { period: "Săpt. 3-4", title: "Reluare activitate sexuală", description: "Cu prudență. Volumul este 70-80% din rezultatul final." },
      { period: "Lună 3", title: "Resorbție parțială", description: "30-40% din grăsime resorbită. Restul rămâne permanent." },
      { period: "Lună 6", title: "Rezultat stabil", description: "Volumul rămas este permanent. Decizie touch-up dacă pacient dorește." }
    ],
    risks: [
      { title: "Resorbție variabilă", description: "30-50% în primele 6 luni." },
      { title: "Distribuție neuniformă", description: "Posibili noduli mici palpabili. Reduse prin tehnică Coleman corectă." },
      { title: "Necroză parțială grăsime", description: "<5%. Manifestă prin nodul dur palpabil." },
      { title: "Infecție", description: "<1% cu antibioterapie preoperatorie." },
      { title: "Necesar touch-up", description: "15-25% din pacienți cer o a doua sesiune la 12 luni." }
    ],
    alternatives: [
      { title: "Acid hialuronic", description: "Non-chirurgical, reversibil, dar temporar (12-24 luni)." },
      { title: "Augmentare combinată cu alungire", description: "Faloplastie combinată — alungire + lipofilling în aceeași intervenție." }
    ],
    faqs: [
      { q: "De ce nu silicon, vaselină sau kanamicina?", a: "Silicon, vaselină și kanamicina au fost interzise — produc granuloame, fibroză și deformări permanente în 80% din cazuri. La Dr. Diana facem și extracție chirurgicală pentru pacienți care au făcut greșeala să își injecteze aceste substanțe." },
      { q: "Pot face și alungire în aceeași intervenție?", a: "Da. La Dr. Diana practicăm faloplastie combinată în 80% din cazurile cu cerere duală — alungire + îngroșare în aceeași intervenție, sub aceeași anestezie." },
      { q: "Rezultatul este permanent?", a: "După 6-12 luni de stabilizare, ce rămâne este permanent. Volumul resorbit (30-50%) dispare în primele luni. Restul rămâne ca țesut adipos viu, integrat în corpul penian." },
      { q: "Câți pacienți a făcut Dr. Diana?", a: "Peste 1.000 proceduri intime totale. Lipofilling penis specific: minim 200 cazuri pe an." },
      { q: "Ce se întâmplă dacă slăbesc?", a: "Grăsima injectată se comportă ca grăsimea de pe restul corpului — la slăbire >10 kg volumul poate scădea ușor." },
      { q: "Pot combina cu acid hialuronic?", a: "Nerecomandat în prima intenție. Dacă HA-ul există deja, așteptăm reabsorbția completă (12-24 luni) înainte de lipofilling." }
    ],
    citations: [
      { text: "Coleman SR. Structural fat grafting.", url: "https://pubmed.ncbi.nlm.nih.gov/20978424/", source: "PRS / Coleman" },
      { text: "Marquez-Algaba E et al. Aesthet Plast Surg 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/31831387/", source: "Aesthet Plast Surg 2020" },
      { text: "Yang DY et al. PRS 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/33136942/", source: "PRS 2020" }
    ],
    internalLinks: [
      { slug: "alungire-penis", label: "Alungire penis" },
      { slug: "ingrosare-acid-hialuronic", label: "Augmentare cu acid hialuronic" },
      { slug: "extractie-kanamicina", label: "Extracție kanamicina" }
    ],
    speakablePassages: [
      "Lipofillingul peniann transferă 30-80 ml grăsime proprie pentru 1-3 cm câștig de circumferință permanent. Recuperarea durează 5-7 zile, iar activitatea sexuală se reia după 3-4 săptămâni.",
      "Grăsimea proprie elimină riscul de respingere imunologică. La Dr. Diana se efectuează minim 200 proceduri lipofilling penian pe an."
    ]
  },
  {
    slug: "ingrosare-acid-hialuronic",
    title: "Augmentare penis cu acid hialuronic",
    h1: "Augmentare penis cu acid hialuronic — non-chirurgical",
    category: "augmentare",
    procedureType: "NonSurgicalProcedure",
    metaTitle: "Mărire penis cu acid hialuronic București, fără operație | Preț | Dr. Diana",
    metaDescription: "Mărire penis cu acid hialuronic la Dr. Diana Gheorghiță, București. Procedură fără operație, 30-45 min, recuperare 24-48 ore. Câștig 1-3 cm circumferință, reversibil cu hialuronidază.",
    primaryKeyword: "augmentare penis acid hialuronic",
    searchVolume: "600-900/lună",
    intent: "Commercial",
    bodyLocation: "penis — țesut subcutan",
    alternateName: ["filler peniann", "augmentare cu HA", "Hyacorp penis"],
    shortDescription: "Câștig 1-3 cm circumferință cu HA reticulat, reversibil, recuperare 24-48 ore, durata 12-24 luni.",
    lead: "Augmentarea cu acid hialuronic reticulat de înaltă densitate (Hyacorp MLF1/MLF2, Genefill, Princess Volume) oferă 1-3 cm câștig de circumferință în 30-45 minute, fără chirurgie. RCT 2021 publicat în Journal of Sexual Medicine raportează augmentare medie 22,74 mm cu complicații minore sub 1,5%. Procedura este 100% reversibilă cu hialuronidază.",
    cost: "600-1.500 EUR / sesiune",
    duration: "30-45 min",
    recovery: "24-48 ore",
    anesthesia: "Topică + bloc dorsal",
    hospitalStay: "Procedură ambulatorie",
    sexualActivity: "Reluare după 7-10 zile",
    whatIs: "Augmentarea peniană cu acid hialuronic este o procedură non-chirurgicală în care un filler dermal pe bază de HA reticulat de înaltă densitate este injectat în țesutul subcutan al corpului penian. Spre deosebire de lipofilling, procedura nu necesită incizie și este complet reversibilă prin injectare de hialuronidază.",
    whenIndicated: [
      "Pacient care preferă procedură non-chirurgicală",
      "Test pre-lipofilling — pacientul evaluează rezultatul",
      "Indicație estetică pentru circumferință",
      "Pacient cu intoleranță la chirurgie sau anestezie generală"
    ],
    whenNotIndicated: [
      "Pacient cu kanamicina/silicon injectat — necesită extracție mai întâi",
      "Infecție activă genitală sau dermatologică",
      "Tulburări de coagulare",
      "Alergie la HA sau hialuronidază",
      "Așteptare permanentă a rezultatului (HA durează 12-24 luni)"
    ],
    procedureSteps: [
      { title: "Anestezie", description: "Cremă anestezică topică (Emla) cu 30 minute înainte + bloc dorsal cu lidocaină." },
      { title: "Marcarea zonei", description: "Marcare pentru distribuție uniformă a HA." },
      { title: "Injectare cu canulă", description: "Injectare cu canulă boantă (22-25G) pe planul subcutan, evitare vase. Tehnica retrograde-fan." },
      { title: "Modelare manuală", description: "Modelare imediată pentru contur uniform." },
      { title: "Pansament", description: "Compresă rece 10-15 minute. Externare imediată." }
    ],
    facts: [
      { label: "Câștig circumferință (10 ml)", value: "1-2 cm" },
      { label: "Câștig (20 ml HA reticulat dens)", value: "2-3 cm" },
      { label: "Durata efectului", value: "12-24 luni" },
      { label: "Augmentare medie (RCT 2021)", value: "22,74 mm", source: "J Sex Med 2021" },
      { label: "Complicații minore", value: "<1,5%", source: "J Sex Med 2021" },
      { label: "Reversibilitate cu hialuronidază", value: "100%" },
      { label: "Durata procedurii", value: "30-45 min" },
      { label: "Reluare activitate sexuală", value: "7-10 zile" }
    ],
    recovery_timeline: [
      { period: "Zilele 1-2", title: "Edem ușor", description: "Sensibilitate locală, posibil echimoze mici." },
      { period: "Ziua 3-7", title: "Resorbție edem", description: "Volum vizibil aproape de rezultatul final." },
      { period: "Săpt. 2", title: "Reluare activitate sexuală", description: "După 7-10 zile, cu prudență." },
      { period: "Lună 3-6", title: "Stabilizare", description: "HA-ul integrat în țesut. Volumul rămâne stabil 12-24 luni." },
      { period: "Lună 18-24", title: "Resorbție progresivă", description: "Decizie reumplere sau lipofilling permanent." }
    ],
    risks: [
      { title: "Echimoze și edem", description: "Frecvente, dispar în 5-7 zile." },
      { title: "Asimetrie sau noduli", description: "Reduse prin tehnică retrograde-fan. Reversibil cu hialuronidază." },
      { title: "Infecție", description: "<1% cu protocol steril și HA branded." },
      { title: "Granulom", description: "<1% în studii recente." },
      { title: "Reacție vasculară", description: "Foarte rar (<0,1%) cu canulă boantă." }
    ],
    alternatives: [
      { title: "Lipofilling", description: "Permanent, chirurgical." },
      { title: "PRP / P-Shot", description: "Adresează funcție erectilă, nu volum." }
    ],
    faqs: [
      { q: "Cât durează în realitate efectul?", a: "În medie 18 luni la pacienți activi sexual. La pacienții cu activitate sexuală foarte intensă durata poate fi 12-14 luni; la cei mai puțin activi 20-24 luni." },
      { q: "Pot face injectare repetat?", a: "Da. Re-injectarea este tipic la 14-18 luni." },
      { q: "E mai rău decât lipofillingul?", a: "Nu mai rău, doar reversibil și temporar. HA este alegere bună pentru pacient care vrea să testeze rezultatul înainte de lipofilling." },
      { q: "Există risc de granulom?", a: "Studii recente: <1%. La Dr. Diana folosim exclusiv HA branded, care reduce riscul sub 0,5%." },
      { q: "Pot face HA dacă am avut kanamicina?", a: "NU. Kanamicina sau orice corp străin trebuie extras chirurgical mai întâi, urmat de 6 luni reabilitare." },
      { q: "E dureros?", a: "Anestezia topică + blocul dorsal fac procedura tolerabilă." }
    ],
    citations: [
      { text: "Yang JR et al. J Sex Med, 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/33988002/", source: "J Sex Med 2021" },
      { text: "Liu JL et al. Ann Med Surg, 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37663705/", source: "Ann Med Surg 2023" },
      { text: "AUA News August 2024.", url: "https://auanews.net/issues/articles/2024/august-extra-2024/office-and-surgical-technologies-the-evolving-landscape-of-penile-girth-enhancement", source: "AUA News 2024" }
    ],
    internalLinks: [
      { slug: "ingrosare-lipofilling", label: "Lipofilling" },
      { slug: "alungire-penis", label: "Alungire penis" },
      { slug: "extractie-kanamicina", label: "Extracție kanamicina" }
    ],
    speakablePassages: [
      "Augmentarea cu acid hialuronic oferă 1-3 cm câștig de circumferință în 30-45 minute, fără chirurgie. Procedura este 100% reversibilă cu hialuronidază. Durata efectului este 12-24 luni.",
      "RCT 2021 publicat în Journal of Sexual Medicine raportează augmentare medie 22,74 mm cu complicații minore sub 1,5%."
    ]
  },
  {
    slug: "fimoza",
    title: "Fimoza la adulți și copii",
    h1: "Fimoza — cauze, simptome, tratament conservator și chirurgical",
    category: "preput",
    procedureType: "TherapeuticProcedure",
    metaTitle: "Fimoza București, tratament adulți și copii | Cauze, simptome, operație | Dr. Diana",
    metaDescription: "Fimoza la adulți și copii, ghid complet la Dr. Diana Gheorghiță, București. Cauze, simptome, tipuri (fiziologică, patologică, BXO/lichen scleros), tratament conservator cu unguente sau chirurgical (circumcizie, preputioplastie). Preț, recuperare.",
    primaryKeyword: "fimoza",
    searchVolume: "8.100/lună",
    intent: "Informational+commercial",
    bodyLocation: "preput peniann",
    alternateName: ["preput strâns", "fimoză cicatricială", "BXO", "lichen scleros"],
    shortDescription: "Imposibilitatea retragerii prepuțului peste gland. Fiziologică la sugari, patologică la adulți. Tratament: conservator (unguente cu corticosteroizi) sau chirurgical (circumcizie, preputioplastie).",
    lead: "Fimoza este imposibilitatea sau dificultatea de a retrage prepuțul peste glandul penisului. La sugari și copii mici sub 5 ani este fiziologică (normală) și se rezolvă spontan în 90% din cazuri până la pubertate. La adulți și adolescenți după pubertate este patologică, fiind cauzată cel mai frecvent de balanită recurentă, lichen scleros (BXO) sau cicatrice post-decalotare forțată. Tratamentul depinde de cauză și severitate: conservator cu unguente cu corticosteroizi (mometazonă, betametazonă) timp de 4-8 săptămâni — eficient în 60-70% cazuri fără BXO — sau chirurgical (circumcizie completă pentru BXO și fimoză strânsă, preputioplastie pentru fimoză moderată cu prepuț estetic conservat). Dr. Diana Gheorghiță oferă consultație individualizată cu plan terapeutic adaptat cauzei.",
    cost: "Consultație 350 RON, tratament chirurgical 1.500-2.500 EUR",
    duration: "30-60 min (chirurgical)",
    recovery: "5-7 zile (chirurgical), conservator fără recuperare",
    anesthesia: "Locală sau regională",
    hospitalStay: "Externare aceeași zi (chirurgical)",
    sexualActivity: "Reluare după 4-6 săptămâni post-chirurgie",
    whatIs: "Fimoza reprezintă îngustarea prepuțului care împiedică decalotarea (descoperirea) completă a glandului penian. Există două forme principale: fimoza fiziologică, prezentă natural la nou-născuți și sugari datorită aderențelor congenitale dintre prepuț și gland, și fimoza patologică, dobândită la adulți prin cicatrizare (BXO/lichen scleros), balanite repetate sau decalotare forțată traumatică. Diagnosticul este clinic, prin examinarea capacității de retragere a prepuțului în repaus și erecție.",
    whenIndicated: [
      "Imposibilitatea retragerii prepuțului peste gland la adulți și adolescenți",
      "Durere la decalotare sau erecție",
      "Balanită recurentă (>3 episoade/an)",
      "Lichen scleros (BXO) confirmat clinic sau bioptic",
      "Parafimoză recurentă",
      "Probleme de igienă din cauza prepuțului strâns",
      "Disconfort sau durere în timpul actului sexual"
    ],
    whenNotIndicated: [
      "Fimoză fiziologică la copii sub 5 ani fără simptome (așteptare)",
      "Aderențe ușoare prepuțiale fără îngustare adevărată",
      "Hipospadias necorectat (necesită alt tratament)",
      "Infecție acută activă (tratament infecție mai întâi)"
    ],
    procedureSteps: [
      { title: "Consultație și diagnostic", description: "Examen clinic, evaluare grad fimoză (1-4), diferențiere fiziologic vs patologic, biopsie dacă suspiciune BXO." },
      { title: "Tratament conservator (linia 1)", description: "Unguente cu corticosteroizi topici (mometazonă 0.1% sau betametazonă 0.05%) aplicate 2x/zi 4-8 săptămâni + decalotare progresivă blândă. Eficient 60-70% cazuri fără BXO." },
      { title: "Tratament chirurgical conservator", description: "Preputioplastie: lărgire chirurgicală a prepuțului prin incizie longitudinală cu sutură transversală. Indicat fimoză moderată fără BXO, conservă prepuțul." },
      { title: "Tratament chirurgical radical", description: "Circumcizie completă: excizie totală a prepuțului. Indicat fimoză strânsă cicatricială, BXO/lichen scleros confirmat, balanită recurentă severă." },
      { title: "Recuperare și control", description: "Pansament steril, antibiotic profilactic, control la 7 zile, 1 lună, 3 luni." }
    ],
    facts: [
      { label: "Prevalență fimoză patologică adulți", value: "1-2%", source: "European Association of Urology 2024" },
      { label: "Fimoză fiziologică nou-născuți", value: "96%", source: "AAP 2012" },
      { label: "Rezolvare spontană la copii până la 5 ani", value: "90%", source: "AAP 2012" },
      { label: "Rezolvare spontană până la pubertate", value: "99%", source: "AAP 2012" },
      { label: "Eficiență corticosteroizi topici", value: "60-70%", source: "Cochrane Review 2014" },
      { label: "Cazuri BXO/lichen scleros la adulți cu fimoză", value: "30-40%", source: "BJU Int 2019" },
      { label: "Recuperare post-circumcizie", value: "5-7 zile" },
      { label: "Cost consultație Dr. Diana", value: "350 RON" }
    ],
    recovery_timeline: [
      { period: "Tratament conservator", title: "4-8 săptămâni", description: "Aplicare unguent corticosteroid 2x/zi + decalotare progresivă blândă. Evaluare la 4 săptămâni, decizie chirurgicală dacă fără răspuns." },
      { period: "Post-circumcizie zilele 1-3", title: "Disconfort moderat", description: "Paracetamol/ibuprofen, pansament steril, igienă locală." },
      { period: "Post-circumcizie săpt. 1", title: "Cicatrizare incipientă", description: "Reluare activitate sedentară. Evitare efort fizic." },
      { period: "Post-circumcizie săpt. 2-3", title: "Cicatrizare avansată", description: "Suturi resorbabile cad (14-28 zile). Control medical." },
      { period: "Post-circumcizie săpt. 4-6", title: "Reluare activitate sexuală", description: "Permisă cu prudență după acordul medicului." }
    ],
    risks: [
      { title: "Eșec tratament conservator", description: "30-40% cazuri necesită ulterior chirurgie." },
      { title: "BXO/lichen scleros nedignosticat", description: "Risc transformare malignă <1% (carcinom scuamos penian). Necesită biopsie + circumcizie obligatorie." },
      { title: "Recurență cicatricială", description: "Risc 5-10% după preputioplastie. Soluție: circumcizie." },
      { title: "Parafimoză", description: "Urgență medicală — prepuț retractat blocat. Necesită reducere manuală sau incizie." }
    ],
    alternatives: [
      { title: "Decalotare progresivă", description: "La sugari și copii sub 5 ani fără simptome — așteptare cu igienă blândă." },
      { title: "Unguente cu corticosteroizi", description: "Linia 1 la adolescenți și adulți fără BXO. Eficient 60-70%." },
      { title: "Preputioplastie", description: "Conservă prepuțul. Indicată fimoză moderată fără BXO." },
      { title: "Circumcizie completă", description: "Standard pentru BXO, fimoză strânsă cicatricială, balanită recurentă." }
    ],
    faqs: [
      { q: "Cum tratezi fimoza la adulți fără operație?", a: "Linia 1 este unguent cu corticosteroizi topici (mometazonă 0.1% sau betametazonă 0.05%) aplicat 2x/zi timp de 4-8 săptămâni, asociat cu decalotare progresivă blândă. Eficient în 60-70% din cazuri la adulți fără BXO/lichen scleros. Dacă nu răspunde, se recomandă chirurgie." },
      { q: "Care sunt simptomele fimozei la adulți?", a: "Imposibilitatea retragerii prepuțului peste gland în repaus sau erecție, durere la decalotare, durere în timpul actului sexual, balanite recurente (inflamații glandului), pete albe pe prepuț (semn BXO), urinare cu jet îngustat, dificultăți de igienă." },
      { q: "Ce este BXO sau lichen scleros pe penis?", a: "Balanita Xerotica Obliterans (BXO) sau lichen scleros peniann este o afecțiune dermatologică cronică inflamatorie care produce cicatrici albe pe prepuț și gland, ducând la fimoză strânsă progresivă. Apare la 30-40% din adulții cu fimoză. Risc transformare malignă <1%. Tratament: circumcizie completă obligatorie + biopsie dermatologică." },
      { q: "Diferența între fimoză și parafimoză?", a: "Fimoza este imposibilitatea retragerii prepuțului peste gland. Parafimoza este situația când prepuțul retractat rămâne blocat în spatele coronei glandului, producând edem și durere severă. Parafimoza este urgență medicală — necesită reducere manuală imediată sau, în cazuri severe, incizie dorsală urmată de circumcizie programată." },
      { q: "Cât costă operația de fimoză la adulți în București?", a: "Tratamentul conservator (unguente) costă 100-200 RON medicament + 350 RON consultație. Circumcizia chirurgicală costă 1.500-2.500 EUR la Dr. Diana Gheorghiță (anestezie locală, externare aceeași zi). Preputioplastie 1.200-2.000 EUR. Prețul include consultație, intervenție, anestezie, sutură, pansamente, controale post-op." },
      { q: "Fimoza la copii — când e cazul de operație?", a: "Sub 5 ani: niciodată dacă nu există simptome (fimoza fiziologică se rezolvă spontan 90% până la 5 ani). Între 5-12 ani: doar dacă există balanite recurente, infecții urinare sau probleme de igienă. După pubertate (>14 ani): chirurgie indicată dacă persistă fimoză patologică. Niciodată decalotare forțată — produce cicatrici și fimoză cicatricială." },
      { q: "Pot face sex normal după operație de fimoză?", a: "După circumcizie, reluarea activității sexuale e permisă după 4-6 săptămâni cu acordul medicului. Sensibilitatea glandului poate fi inițial modificată în primele 4-8 săptămâni, apoi se normalizează. Meta-analiza Tian et al 2013 (J Sex Med) pe peste 40.000 pacienți nu a găsit diferență semnificativă în satisfacția sexuală pre vs post-circumcizie." }
    ],
    citations: [
      { text: "European Association of Urology — Phimosis Guidelines 2024.", url: "https://uroweb.org/guidelines/paediatric-urology/", source: "EAU 2024" },
      { text: "Cochrane Review — Topical corticosteroids for phimosis.", url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD008973.pub2/full", source: "Cochrane 2014" },
      { text: "Tian Y et al. J Sex Med, 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/24330469/", source: "J Sex Med 2013" },
      { text: "AAP — Circumcision policy statement.", url: "https://publications.aap.org/pediatrics/article/130/3/585/30235/Male-Circumcision", source: "AAP 2012" }
    ],
    internalLinks: [
      { slug: "circumcizie-adulti", label: "Circumcizie adulți" },
      { slug: "extractie-kanamicina", label: "Extracție kanamicina" }
    ],
    speakablePassages: [
      "Fimoza este imposibilitatea sau dificultatea de a retrage prepuțul peste glandul penisului. La sugari sub 5 ani este fiziologică și se rezolvă spontan în 90% din cazuri. La adulți este patologică, cauzată de balanită recurentă, lichen scleros sau cicatrice post-decalotare forțată.",
      "Tratamentul fimozei la adulți depinde de cauză: conservator cu unguente corticosteroide topice timp de 4-8 săptămâni, eficient în 60-70% cazuri, sau chirurgical prin circumcizie completă pentru BXO și fimoză strânsă, sau preputioplastie pentru fimoză moderată cu prepuț estetic conservat."
    ]
  },
  {
    slug: "circumcizie-adulti",
    title: "Circumcizie adulți",
    h1: "Circumcizie pentru adulți — tehnici, recuperare, beneficii",
    category: "preput",
    procedureType: "SurgicalProcedure",
    metaTitle: "Circumcizie adulți București, operație fimoză bărbați | Preț, recuperare | Dr. Diana",
    metaDescription: "Circumcizie adulți și operație fimoză la bărbați în București cu Dr. Diana Gheorghiță. Anestezie locală, externare aceeași zi, recuperare 1-2 săptămâni. Preț, parafimoză, preput inflamat, indicații.",
    primaryKeyword: "circumcizie adulti",
    searchVolume: "1.000-1.400/lună",
    intent: "Commercial-investigational",
    bodyLocation: "preput peniann",
    alternateName: ["tăiere prepuț", "circumcision"],
    shortDescription: "Excizie chirurgicală a prepuțului. Anestezie locală, durata 30-60 min, externare aceeași zi.",
    lead: "Circumcizia la adulți este excizia chirurgicală completă a prepuțului, indicată cel mai frecvent pentru fimoză cicatricială (BXO/lichen scleros), balanită recurentă sau preferință personală/religioasă. OMS validează reducerea riscului de transmitere HIV cu 50-60% (Auvert PLoS Med 2005). Procedura durează 30-60 minute sub anestezie locală în 80% din cazuri, cu externare aceeași zi.",
    cost: "1.500-2.500 EUR",
    duration: "30-60 min",
    recovery: "5-7 zile activitate normală",
    anesthesia: "Locală (80% cazuri) sau regională",
    hospitalStay: "Externare aceeași zi (99%)",
    sexualActivity: "Reluare după 4-6 săptămâni",
    whatIs: "Circumcizia este intervenția chirurgicală prin care se excizează complet prepuțul — pliul de piele care acoperă glandul. Procedura poate fi efectuată din indicație medicală (fimoză strânsă, balanită recurentă, BXO/lichen scleros, parafimoza) sau din preferință personală sau religioasă.",
    whenIndicated: [
      "Fimoză strânsă cicatricială (BXO/lichen scleros)",
      "Balanită recurentă (>3 episoade/an)",
      "Parafimoza recurentă",
      "Frenul scurt asociat cu durere la erecție",
      "Indicație religioasă sau preferință personală",
      "Profilaxie HIV/HPV la pacienți cu risc crescut"
    ],
    whenNotIndicated: [
      "Hipospadias necorectat",
      "Tulburări severe de coagulare necontrolate",
      "Infecție activă genitală",
      "Boli dermatologice acute pe penis"
    ],
    procedureSteps: [
      { title: "Anestezie", description: "Bloc dorsal cu lidocaină 1% sau anestezie regională." },
      { title: "Marcarea liniei de excizie", description: "5-10 mm sub coroana glandului." },
      { title: "Excizie", description: "Excizie clasică cu bisturiu, sau cu stapler, sau laser CO2." },
      { title: "Hemostază", description: "Hemostază atentă, sutură resorbabilă 5/0." },
      { title: "Pansament", description: "Pansament steril cu unguent antibiotic." },
      { title: "Externare", description: "Externare aceeași zi, ghid scris recuperare." }
    ],
    facts: [
      { label: "Indicație medicală cea mai frecventă", value: "Fimoză cicatricială (BXO)" },
      { label: "Reducere risc HIV transmisie heterosexuală", value: "50-60%", source: "Auvert PLoS Med 2005, OMS" },
      { label: "Reducere risc HPV transmisie cuplu", value: "30-40%" },
      { label: "Reducere risc cancer penian (pe viață)", value: "60-70%" },
      { label: "Durata procedurii", value: "30-60 min" },
      { label: "Anestezie locală", value: "80% cazuri" },
      { label: "Externare aceeași zi", value: "99%" },
      { label: "Recuperare activitate normală", value: "5-7 zile" },
      { label: "Reluare activitate sexuală", value: "4-6 săptămâni" },
      { label: "Rata complicații serioase", value: "<2%" }
    ],
    recovery_timeline: [
      { period: "Zilele 1-3", title: "Disconfort moderat", description: "Durere ușor-moderată controlabilă cu paracetamol/ibuprofen." },
      { period: "Ziua 4-7", title: "Cicatrizare incipientă", description: "Disconfortul scade. Reluare activitate sedentară." },
      { period: "Săpt. 2", title: "Cicatrizare avansată", description: "Suturile resorbabile încep să cadă (14-28 zile)." },
      { period: "Săpt. 3-4", title: "Cicatrice consolidată", description: "Edem rezolvat. Erecții permise dar cu prudență." },
      { period: "Săpt. 4-6", title: "Reluare activitate sexuală", description: "După acordul medicului. Disconfort posibil în primele acte sexuale." },
      { period: "Lună 3-6", title: "Rezultat final", description: "Cicatrice mată definitivă. Sensibilitate normalizată." }
    ],
    risks: [
      { title: "Sângerare", description: "Risc 1-3%, controlat cu pansament compresiv." },
      { title: "Infecție", description: "<1% cu antibioterapie preoperatorie." },
      { title: "Stenoză meatală", description: "<1%. Apare prin retracție cicatricială." },
      { title: "Sensibilitate gland modificată", description: "Frecvent în primele 4-8 săptămâni. Se normalizează." },
      { title: "Excizie prea mare/mică", description: "<2% la chirurgi experimentați." }
    ],
    alternatives: [
      { title: "Preputioplastie", description: "Conservarea prepuțului prin lărgire chirurgicală. Indicat fimoză moderată fără BXO." },
      { title: "Decalotare progresivă + corticosteroizi topici", description: "Eficient în 60-70% cazuri fără BXO." },
      { title: "Frenuloplastie", description: "Pentru fren scurt izolat fără fimoză." }
    ],
    faqs: [
      { q: "Va schimba sensibilitatea?", a: "Meta-analiza Tian et al 2013 (J Sex Med) pe peste 40.000 pacienți nu a găsit diferență semnificativă în satisfacția sexuală post-circumcizie. În primele 4-8 săptămâni glandul poate fi mai sensibil. Sensibilitatea se normalizează." },
      { q: "Cât durează durerea post-op?", a: "Disconfort moderat 3-5 zile, controlat cu paracetamol/ibuprofen." },
      { q: "E necesară spitalizare?", a: "Nu. 99% cazuri externare aceeași zi după 1-2 ore monitorizare." },
      { q: "Pot conduce mașina?", a: "Nu prima zi. Da din ziua 2." },
      { q: "Cum funcționează urinatul?", a: "Normal, imediat după operație." },
      { q: "Cât rezistă firele?", a: "Sutură resorbabilă 14-28 zile. Se desprind spontan." },
      { q: "E acoperită de asigurare?", a: "Doar dacă există indicație medicală documentată." }
    ],
    citations: [
      { text: "WHO/UNAIDS — Male circumcision for HIV prevention.", url: "https://www.who.int/health-topics/male-circumcision", source: "WHO" },
      { text: "Auvert B et al. PLoS Med, 2005.", url: "https://pubmed.ncbi.nlm.nih.gov/16231970/", source: "PLoS Med 2005" },
      { text: "Tian Y et al. J Sex Med, 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/24330469/", source: "J Sex Med 2013" },
      { text: "Mayo Clinic — Circumcision.", url: "https://www.mayoclinic.org/tests-procedures/circumcision/about/pac-20393550", source: "Mayo Clinic" }
    ],
    internalLinks: [
      { slug: "alungire-penis", label: "Alungire penis" },
      { slug: "extractie-kanamicina", label: "Extracție kanamicina" }
    ],
    speakablePassages: [
      "Circumcizia la adulți durează 30-60 minute sub anestezie locală în 80% din cazuri, cu externare aceeași zi. Recuperarea la activitate normală durează 5-7 zile, iar reluarea activității sexuale este permisă după 4-6 săptămâni.",
      "Circumcizia reduce riscul de transmitere HIV heterosexuală cu 50-60% conform OMS. Reducerea riscului de cancer penian pe viață este de 60-70%."
    ]
  },
  {
    slug: "peyronie-nesbit",
    title: "Boala Peyronie — tehnica Nesbit",
    h1: "Boala Peyronie — corectare prin tehnica Nesbit",
    category: "curbura",
    procedureType: "SurgicalProcedure",
    metaTitle: "Boala Peyronie București, tehnica Nesbit | Corectare curbură penis | Dr. Diana",
    metaDescription: "Tratament chirurgical boala Peyronie cu tehnica Nesbit la Dr. Diana Gheorghiță, București. Corectare curbură penis cu succes 80-100% pe curburi sub 60°. Preț, recuperare, indicații.",
    primaryKeyword: "boala peyronie tratament chirurgical",
    searchVolume: "350-500/lună",
    intent: "Commercial-investigational",
    bodyLocation: "tunica albuginee corpi cavernoși",
    alternateName: ["Nesbit procedure", "excizie eliptică Nesbit", "corectare curbură penis"],
    shortDescription: "Corectare chirurgicală a curburii peniene în Peyronie. Succes 80-100% pe curburi <60°.",
    lead: "Tehnica Nesbit corectează curbura peniană în boala Peyronie prin excizia eliptică a tunicii albuginee pe partea opusă curburii. Succes 80-100% pe curburi sub 60°, cu pierdere de lungime 0,5-2 cm. Indicată în stadiu cronic (>12 luni de la debut, curbura stabilă 6 luni). Durata intervenției: 90-120 minute, spitalizare 1 noapte.",
    cost: "3.500-5.500 EUR",
    duration: "90-120 min",
    recovery: "14-21 zile activitate normală",
    anesthesia: "Generală sau rahidiană",
    hospitalStay: "1 noapte",
    sexualActivity: "Reluare după 6-8 săptămâni",
    whatIs: "Tehnica Nesbit este intervenția chirurgicală standard pentru corecția curburii peniene din boala Peyronie. Constă în excizia eliptică a unui fragment din tunica albuginee pe partea opusă plăcii fibroase, urmată de sutură transversală — efectul este reducerea părții lungi pentru egalizarea cu cea fibrotică, obținându-se astfel îndreptarea axului penian.",
    whenIndicated: [
      "Curbură <60° fără disfuncție erectilă semnificativă",
      "Stadiu cronic >12 luni de la debut, stabilă 6 luni",
      "Lungime peniană adecvată (>10 cm erectilă)",
      "Curbură care împiedică actul sexual",
      "Pacient care a încercat tratament conservator fără răspuns"
    ],
    whenNotIndicated: [
      "Stadiu acut (durere + curbură progresivă)",
      "Curbură >60-70° (necesită grefă)",
      "Lungime peniană inadecvată (<8 cm erectilă)",
      "Disfuncție erectilă severă concomitentă",
      "Plăci foarte calcificate sau extinse"
    ],
    procedureSteps: [
      { title: "Inducerea erecției artificiale", description: "Injectare ser fiziologic în corpii cavernoși pentru documentarea curburii." },
      { title: "Disecție", description: "Incizie circumferențială sub coroană cu degloving, expunere completă a tunicii albuginee." },
      { title: "Localizarea zonei de excizie", description: "Identificarea precisă a punctului de maximă curbură pe partea opusă plăcii." },
      { title: "Excizie eliptică", description: "Excizia unui fragment eliptic din tunica albuginee, dimensiuni proporționale cu unghiul de corectat." },
      { title: "Sutură transversală", description: "Sutură non-rezorbabilă (PDS sau Prolene) cu fire inversate." },
      { title: "Test de îndreptare", description: "Re-erecție artificială pentru confirmarea îndreptării." },
      { title: "Sutură piele", description: "Reaplicarea pielii cu sutură resorbabilă, pansament compresiv elastic." }
    ],
    facts: [
      { label: "Incidența Peyronie populație adultă", value: "3-9%", source: "Sommer Eur Urol 2002" },
      { label: "Vârsta medie diagnostic", value: "55-60 ani" },
      { label: "Succes Nesbit pe curburi <60°", value: "80-100%" },
      { label: "Pierdere lungime postoperator", value: "0,5-2 cm" },
      { label: "Rata DE de novo", value: "<5%" },
      { label: "Rata recurență curbură (5 ani)", value: "5-15%" },
      { label: "Durata intervenție", value: "90-120 min" },
      { label: "Spitalizare", value: "1 noapte" },
      { label: "Reluare activitate normală", value: "14-21 zile" },
      { label: "Reluare activitate sexuală", value: "6-8 săptămâni" }
    ],
    recovery_timeline: [
      { period: "Zilele 1-3", title: "Spitalizare + externare", description: "1 noapte spitalizare. Externare în ziua 1-2." },
      { period: "Săpt. 1", title: "Pansamente și control", description: "Pansament compresiv schimbat la 7 zile." },
      { period: "Săpt. 2-3", title: "Cicatrizare în curs", description: "Reluare activitate sedentară. Continuă evitarea erecțiilor." },
      { period: "Săpt. 4-6", title: "Cicatrice consolidată", description: "Permise erecții. Reluare activitate fizică ușoară." },
      { period: "Săpt. 6-8", title: "Reluare activitate sexuală", description: "Cu prudență, după acordul medicului." },
      { period: "Lună 3", title: "Control la 3 luni", description: "Evaluare reziduu curbură, simetrie, funcție erectilă." }
    ],
    risks: [
      { title: "Pierdere de lungime", description: "0,5-2 cm — inerentă tehnicii. Plicatura pierde mai puțin." },
      { title: "Disfuncție erectilă de novo", description: "<5%." },
      { title: "Recurență curbură", description: "5-15% la 5 ani." },
      { title: "Hipoestezie peniană", description: "Tranzitorie 5-10%, permanentă <2%." },
      { title: "Hematom, infecție", description: "<2% cu protocol antibiotic." },
      { title: "Re-curbură reziduă", description: "Curbură reziduală <15° este acceptată." }
    ],
    alternatives: [
      { title: "Plicatură 16-stitch (Lue)", description: "Pierde mai puțin lungime decât Nesbit." },
      { title: "Incizia plăcii + grefă", description: "Pentru curburi >60° sau plăci complexe." },
      { title: "Implant peniann inflatabil", description: "Pentru pacienți cu DE severă concomitentă." },
      { title: "Injectare Xiapex (colagenază)", description: "Stadiu acut/inițial. Îndreptare 30-40%." }
    ],
    faqs: [
      { q: "Voi pierde lungime?", a: "Da, 0,5-2 cm. Pierderea de lungime este parte inerentă a tehnicii Nesbit. Dacă pierderea este o îngrijorare majoră, plicatura sau grefa sunt alternative." },
      { q: "Pot face plicatură fără pierdere?", a: "Plicatura pierde mai puțin decât Nesbit clasic — în medie 0,5-1 cm vs 1-2 cm." },
      { q: "Există alternativă fără chirurgie?", a: "Pentru stadiul acut: injectare Xiapex (colagenază) — îndreptare 30-40%. Pentru stadiul cronic chirurgia este standardul." },
      { q: "Cât trebuie să aștept înainte să operez?", a: "Minim 12 luni de la primele simptome și 6 luni de stabilitate fără durere și fără progresie." },
      { q: "Pot face altă operație ulterior?", a: "Da. Plicatură suplimentară sau implant peniann inflatabil." },
      { q: "Cum confirm că sunt în stadiu cronic?", a: "Lipsa durerii la erecție timp de 3-6 luni + lipsa progresiei curburii la 6 luni." }
    ],
    citations: [
      { text: "AUA Guideline on Peyronie's Disease.", url: "https://www.auanet.org/guidelines/peyronies-disease-guideline", source: "AUA" },
      { text: "EAU Guidelines 2024.", url: "https://uroweb.org/guidelines/sexual-and-reproductive-health/", source: "EAU 2024" },
      { text: "Sommer F et al. Int J Impot Res, 2002.", url: "https://pubmed.ncbi.nlm.nih.gov/12152115/", source: "Int J Impot Res 2002" },
      { text: "Levine LA, Larsen SM. Asian J Androl, 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23241619/", source: "Asian J Androl 2013" }
    ],
    internalLinks: [
      { slug: "peyronie", label: "Peyronie — ghid complet" }
    ],
    speakablePassages: [
      "Tehnica Nesbit corectează curbura peniană din boala Peyronie cu succes 80-100% pe curburi sub 60°. Pierderea de lungime este 0,5-2 cm. Reluarea activității sexuale se face după 6-8 săptămâni.",
      "Operarea Peyronie în stadiu cronic (peste 12 luni de la debut, stabilă 6 luni) este standardul."
    ]
  },
  {
    slug: "peyronie",
    title: "Boala Peyronie — ghid complet",
    h1: "Boala Peyronie — ghid complet (2026)",
    category: "curbura",
    procedureType: "TherapeuticProcedure",
    metaTitle: "Boala Peyronie București, ghid complet | Simptome, diagnostic, tratament | Dr. Diana",
    metaDescription: "Boala Peyronie, ghid complet la Dr. Diana Gheorghiță, București. Simptome, diagnostic, stadiu acut și cronic, tratamente medicale și chirurgicale, opțiuni de recuperare.",
    primaryKeyword: "boala peyronie",
    searchVolume: "1.300-1.800/lună",
    intent: "Informational+commercial",
    bodyLocation: "tunica albuginee corpi cavernoși",
    alternateName: ["induratio penis plastica", "IPP", "fibroză peniană"],
    shortDescription: "Hub informațional complet despre boala Peyronie: cauze, stadii, tratamente conservatoare și chirurgicale.",
    lead: "Boala Peyronie afectează 3-9% din populația adultă masculină (Sommer Eur Urol 2002). Vârsta medie de debut este 55-60 ani, în scădere — tot mai mulți pacienți între 30-40 ani sunt diagnosticați. 10-20% din cazuri remit spontan în primele 12 luni. Tratamentul depinde de stadiu (acut vs cronic) și de severitatea curburii.",
    cost: "Variabil — vezi tehnică",
    duration: "Depinde de tehnică",
    recovery: "Depinde de tehnică",
    anesthesia: "Variabilă",
    hospitalStay: "Variabil",
    sexualActivity: "Variabil",
    whatIs: "Boala Peyronie (induratio penis plastica) este o afecțiune fibroinflamatorie a tunicii albuginee — învelișul fibros al corpilor cavernoși. Apar plăci de țesut fibros care produc curbură, durere și uneori disfuncție erectilă.",
    whenIndicated: [
      "Bărbat cu curbură peniană apărută în adultate (30-70 ani)",
      "Durere la erecție asociată cu palpare placă fibroasă",
      "Disfuncție sexuală secundară curburii",
      "Asociere cu Dupuytren (15-20% cazuri)"
    ],
    whenNotIndicated: ["Curbură congenitală (de la naștere)"],
    procedureSteps: [
      { title: "Anamneză", description: "Debut, durere, evoluție, sexualitate, comorbidități." },
      { title: "Examen clinic", description: "Palpare placă, măsurători, fotografii standardizate cu erecție." },
      { title: "Imagistică", description: "Ecografie peniană în erecție artificială." },
      { title: "Diagnostic stadiu", description: "Acut (<12 luni, durere, progresie) vs cronic (>12 luni, stabil, fără durere)." },
      { title: "Plan terapeutic", description: "Conservator pentru stadiu acut, chirurgical pentru stadiu cronic stabilizat." }
    ],
    facts: [
      { label: "Prevalența populație adultă", value: "3-9%", source: "Sommer Eur Urol 2002" },
      { label: "Vârsta medie debut", value: "55-60 ani (în scădere)" },
      { label: "Remisie spontană", value: "10-20% în 12 luni" },
      { label: "Pacienți cu diabet", value: "13-20% prevalență" },
      { label: "Curbură semnificativă funcțional", value: "> 30°" },
      { label: "Stadiu acut", value: "6-18 luni durată" },
      { label: "Asociere cu Dupuytren", value: "15-20% cazuri" }
    ],
    recovery_timeline: [],
    risks: [
      { title: "Disfuncție erectilă progresivă", description: "Apare la 20-30% din pacienți." },
      { title: "Scurtare progresivă a penisului", description: "Pierdere medie 1-3 cm până la stabilizare." },
      { title: "Calcificare placă", description: "Apare la 30% din cazuri." }
    ],
    alternatives: [
      { title: "Conservator stadiu acut", description: "Pentoxifilină, vit. E, iontoforeză + verapamil, tracțiune mecanică, Xiapex." },
      { title: "Chirurgical stadiu cronic", description: "Plicatură (Nesbit, Yachia, Lue 16-stitch), grefă, implant peniann." }
    ],
    faqs: [
      { q: "Voi avea Peyronie permanent?", a: "Posibil. 10-20% din cazuri remit spontan în primele 12 luni. La restul boala s-a stabilizează cu sau fără tratament conservator." },
      { q: "Trebuie să operez neapărat?", a: "Nu. Operarea este indicată când curbura împiedică actul sexual și boala s-a stabilizat 6 luni." },
      { q: "Funcționează vitamine sau suplimente?", a: "Pentoxifilină ± vitamina E au evidență slabă. Iontoforeza cu verapamil, Xiapex — evidență mai solidă pentru stadiu acut." },
      { q: "Cum identific stadiul cronic?", a: "Lipsa durerii la erecție timp de 3-6 luni + lipsa progresiei curburii la 6 luni interval." },
      { q: "Dr. Diana operează Peyronie?", a: "Da, plicatură și Nesbit pe curburi <60°." }
    ],
    citations: [
      { text: "AUA Guidelines on Peyronie's Disease.", url: "https://www.auanet.org/guidelines/peyronies-disease-guideline", source: "AUA" },
      { text: "EAU Guidelines 2024.", url: "https://uroweb.org/guidelines/sexual-and-reproductive-health/", source: "EAU 2024" },
      { text: "Sommer F et al. Int J Impot Res, 2002.", url: "https://pubmed.ncbi.nlm.nih.gov/12152115/", source: "Int J Impot Res 2002" },
      { text: "Levine LA, Larsen SM. Asian J Androl, 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23241619/", source: "Asian J Androl 2013" }
    ],
    internalLinks: [
      { slug: "peyronie-nesbit", label: "Tehnica Nesbit" }
    ],
    speakablePassages: [
      "Boala Peyronie afectează 3-9% din populația adultă masculină. Vârsta medie de debut este 55-60 ani. 10-20% din cazuri remit spontan în primele 12 luni.",
      "Tratamentul depinde de stadiu: conservator in acut (pentoxifilină, Xiapex), chirurgical în cronic stabilizat (plicatură, Nesbit, grefă)."
    ]
  },
  {
    slug: "p-shot-prp",
    title: "P-Shot / Priapus Shot — PRP autolog",
    h1: "P-Shot (Priapus Shot) — PRP autolog pentru penis",
    category: "regenerativ",
    procedureType: "NonSurgicalProcedure",
    metaTitle: "P-Shot București, Priapus Shot cu plasmă proprie | Preț, păreri | Dr. Diana",
    metaDescription: "P-Shot (Priapus Shot) cu plasmă proprie injectabilă la Dr. Diana Gheorghiță, București. Indicații pentru disfuncție erectilă moderată și regenerare țesut. Preț, păreri pacienți, cifre realiste.",
    primaryKeyword: "p-shot priapus shot",
    searchVolume: "200-400/lună",
    intent: "Commercial-investigational",
    bodyLocation: "corp peniann",
    alternateName: ["Priapus Shot", "PRP penis", "platelet-rich plasma penis"],
    shortDescription: "Injectare PRP autolog în penis pentru funcție erectilă. Adjuvant pentru DE ușoară-moderată.",
    lead: "P-Shot (Priapus Shot) constă în injectarea de plasmă proprie îmbogățită cu trombocite (PRP) în corpii cavernoși și în gland, pentru stimularea revascularizării și regenerării țesutului. RCT 2021 (Poulios et al, J Sex Med) a demonstrat îmbunătățire IIEF-EF la 6 luni statistic semnificativă, cu mărimea efectului mică. Cleveland Clinic 2024 califică P-Shot ca având cercetare insuficientă pentru recomandare standard.",
    cost: "350-650 EUR / sesiune",
    duration: "30-45 min",
    recovery: "24-48 ore",
    anesthesia: "Topică + bloc dorsal",
    hospitalStay: "Procedură ambulatorie",
    sexualActivity: "Reluare după 24-48 ore",
    whatIs: "P-Shot (Priapus Shot) este o procedură de medicină regenerativă în care se recoltează 30-60 ml sânge propriu, se centrifughează pentru a obține plasmă îmbogățită cu trombocite (PRP), și se injectează în corpii cavernoși și gland.",
    whenIndicated: [
      "Disfuncție erectilă ușoară-moderată",
      "Pacient care vrea adjuvant la sildenafil/tadalafil",
      "Boala Peyronie stadiu acut — adjuvant",
      "Pacient care preferă tratament autolog (zero corp străin)"
    ],
    whenNotIndicated: [
      "Disfuncție erectilă severă (necesită PDE5i sau implant)",
      "Tulburări de coagulare necontrolate",
      "Așteptare de creștere a dimensiunii (NU funcționează)",
      "Infecție activă genitală"
    ],
    procedureSteps: [
      { title: "Recoltare sânge", description: "Recoltare 30-60 ml sânge venos." },
      { title: "Centrifugare", description: "Centrifugare 8-10 minute. Volum final: 5-10 ml." },
      { title: "Anestezie locală", description: "Cremă topică Emla + bloc dorsal cu lidocaină." },
      { title: "Injectare", description: "Injectare cu ace fine pe corpii cavernoși (3-5 puncte) și gland." },
      { title: "Compresă rece", description: "Compresă rece 10-15 minute. Externare imediată." }
    ],
    facts: [
      { label: "PRP", value: "Platelet-Rich Plasma autolog" },
      { label: "Mecanism", value: "Factori creștere PDGF, VEGF, EGF" },
      { label: "Îmbunătățire IIEF-EF la 6 luni (RCT 2021)", value: "Statistic semnificativă (efect mic)", source: "Poulios J Sex Med 2021" },
      { label: "Cleveland Clinic 2024", value: "Cercetare insuficientă pentru recomandare standard", source: "Cleveland Clinic 2024" },
      { label: "Procedura", value: "30-45 min" },
      { label: "Reluare activitate sexuală", value: "24-48 ore" },
      { label: "Risc complicații serioase", value: "<0,5%" },
      { label: "Risc respingere", value: "0% (autolog)" }
    ],
    recovery_timeline: [
      { period: "Ziua 1", title: "Disconfort minim", description: "Edem ușor, sensibilitate locală." },
      { period: "Ziua 2-3", title: "Reluare activitate sexuală", description: "Permisă cu prudență." },
      { period: "Săpt. 1-2", title: "Efecte inițiale", description: "Posibil ameliorare subiectivă a erecției la 50-60% pacienți." },
      { period: "Lună 1-3", title: "Sesiuni adiționale", description: "Programare sesiuni 2 și 3 la 4-6 săptămâni interval." },
      { period: "Lună 6", title: "Evaluare finală", description: "Răspuns terapeutic stabilizat." }
    ],
    risks: [
      { title: "Edem și echimoze", description: "Frecvente, dispar în 2-3 zile." },
      { title: "Infecție", description: "<0,5% cu protocol steril." },
      { title: "Lipsă de răspuns", description: "40-50% pacienți nu raportează îmbunătățire subiectivă semnificativă." },
      { title: "Hematom intrapenian", description: "Foarte rar." }
    ],
    alternatives: [
      { title: "PDE5i (sildenafil, tadalafil)", description: "Standardul pentru DE. Eficient 70-80% pacienți." },
      { title: "Vacuum / Pump", description: "Pentru DE moderată." },
      { title: "Shockwave terapie", description: "Eficient ED de cauză vasculogenă." },
      { title: "Implant peniann", description: "Pentru DE severă rezistentă la altele." }
    ],
    faqs: [
      { q: "Funcționează garantat?", a: "Nu. Aproximativ 50-60% pacienți raportează îmbunătățire subiectivă a erecției. Răspunsul depinde de cauza DE." },
      { q: "Câte sesiuni am nevoie?", a: "Standardul actual este 3 sesiuni la 4-6 săptămâni interval." },
      { q: "Înlocuiește sildenafilul?", a: "Nu. PRP este adjuvant pentru DE ușoară-moderată. PDE5i rămâne standardul." },
      { q: "Crește dimensiunea?", a: "NU. Marketingul în acest sens este înșelător. P-Shot nu crește lungimea sau circumferința." },
      { q: "E sigur?", a: "Da. PRP este autolog (sânge propriu) — risc zero de respingere." },
      { q: "Pot combina cu lipofilling sau HA?", a: "Da, în sesiuni separate." }
    ],
    citations: [
      { text: "Poulios E et al. J Sex Med, 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/33906807/", source: "J Sex Med 2021" },
      { text: "Cleveland Clinic — Priapus Shot.", url: "https://my.clevelandclinic.org/health/treatments/p-shot", source: "Cleveland Clinic" }
    ],
    internalLinks: [
      { slug: "peyronie", label: "Peyronie" },
      { slug: "alungire-penis", label: "Faloplastie" }
    ],
    speakablePassages: [
      "P-Shot este injectarea de plasmă proprie îmbogățită cu trombocite în penis. RCT 2021 a demonstrat îmbunătățire moderată a funcției erectile.",
      "P-Shot nu crește dimensiunea. Pentru augmentare se folosește lipofilling sau acid hialuronic."
    ]
  },
  {
    slug: "extractie-kanamicina",
    title: "Extracție kanamicina, silicon, vaselină",
    h1: "Extracție corpi străini din penis (kanamicina, silicon, vaselină, parafină)",
    category: "reparator",
    procedureType: "SurgicalProcedure",
    metaTitle: "Extracție kanamicina, silicon, bile penis București | Reabilitare anatomie | Dr. Diana",
    metaDescription: "Extracție corpi străini intrapenieni (kanamicina, silicon, vaselină, bile) la Dr. Diana Gheorghiță, București. Reabilitare anatomie, recuperare 14-21 zile. Discreție absolută, preț, indicații.",
    primaryKeyword: "extractie kanamicina penis",
    searchVolume: "800-1.200/lună",
    intent: "Commercial-urgent",
    bodyLocation: "țesut subcutan penis",
    alternateName: ["extracție silicon penis", "îndepărtare vaselină penis", "extracție corpi străini"],
    shortDescription: "Excizie chirurgicală a kanamicinei, siliconului, vaselinei sau parafinei injectate. Confidențialitate absolută.",
    lead: "Estimăm 5.000-15.000 cazuri active de autoinjectare cu kanamicina, silicon, vaselină sau parafină în România. Studiu românesc 2018-2022 (Beedasy A) raportează 100% pacienți autoinjectați dezvoltă complicații serioase, iar peste 70% necesită extracție chirurgicală. Kanamicina nu poate fi aspirată — trebuie excizată chirurgical. Procedura durează 1-3 ore, spitalizare 1-2 nopți, reabilitare totală 6-12 luni.",
    cost: "1.800-3.500 EUR",
    duration: "1-3 ore",
    recovery: "14-21 zile activitate normală",
    anesthesia: "Generală sau rahidiană",
    hospitalStay: "1-2 nopți",
    sexualActivity: "Reluare după 6-12 săptămâni",
    whatIs: "Extracția chirurgicală a corpilor străini injectați în penis (kanamicina, silicon lichid, vaselină, parafină) este intervenția pentru pacienții care au făcut greșeala de a-și injecta substanțe artizanale. Aceste substanțe produc granulom, fibroză, deformare permanentă și nu pot fi îndepărtate decât prin excizie chirurgicală.",
    whenIndicated: [
      "Orice pacient cu kanamicina, silicon, vaselină sau parafină injectate",
      "Granulom peniann simptomatic",
      "Deformare progresivă",
      "Infecție recurentă pe zona de injectare",
      "Necroză tegumentară",
      "Pacient care dorește faloplastie ulterioară"
    ],
    whenNotIndicated: [
      "Tulburări de coagulare severe necontrolate",
      "Infecție activă acută — necesită antibioterapie 2-4 săptămâni mai întâi",
      "Pacient care nu acceptă posibilitatea reconstrucției ulterioare în 2 timpi"
    ],
    procedureSteps: [
      { title: "Imagistică pre-op", description: "Ecografie peniană + RMN pentru cartografierea exactă a depozitelor." },
      { title: "Anestezie", description: "Generală sau rahidiană — durata și complexitatea exclud anestezia locală." },
      { title: "Incizie", description: "Incizie circumferențială sub coroană sau longitudinală." },
      { title: "Excizie radicală țesut afectat", description: "Excizie completă a granulomului și țesutului fibrotic." },
      { title: "Lavaj abundent", description: "Lavaj cu ser fiziologic și soluție antiseptică." },
      { title: "Reconstrucție tegumentară", description: "Reconstrucție primară sau grefă cutanată / lambou." },
      { title: "Drenaj", description: "Drenaj aspirativ 24-48h." }
    ],
    facts: [
      { label: "Cazuri active autoinjectare RO (estimat)", value: "5.000-15.000" },
      { label: "Pacienți care dezvoltă complicații", value: "100%", source: "Beedasy A 2018-2022" },
      { label: "Necesar extracție chirurgicală", value: ">70%", source: "Beedasy A 2018-2022" },
      { label: "Granulom", value: ">80%" },
      { label: "Fibroză", value: ">60%" },
      { label: "Necroză tegumentară", value: "15-25%" },
      { label: "Deformare permanentă", value: "40-50%" },
      { label: "Durata intervenției", value: "1-3 ore" },
      { label: "Spitalizare", value: "1-2 nopți" },
      { label: "Cazuri cu timp 2 chirurgical (3 luni)", value: "30-40%" },
      { label: "Estetic restaurat", value: "70-80% cazuri" }
    ],
    recovery_timeline: [
      { period: "Spitalizare", title: "1-2 nopți", description: "Monitorizare durere, drenaj, antibioterapie IV." },
      { period: "Săpt. 1", title: "Pansamente zilnice", description: "Schimbare pansament 1-2x/zi." },
      { period: "Săpt. 2-3", title: "Cicatrizare", description: "Control medical, eventual scoatere fire neresorbabile." },
      { period: "Săpt. 4-6", title: "Cicatrice consolidată", description: "Reluare activitate fizică ușoară." },
      { period: "Săpt. 6-12", title: "Reluare activitate sexuală", description: "După acordul medicului, cu prudență." },
      { period: "Lună 3", title: "Posibil timp 2 chirurgical", description: "În 30-40% cazuri necesar reconstrucție amânată." },
      { period: "Lună 6-12", title: "Stabilizare finală", description: "Faloplastie augmentare posibilă dacă pacientul dorește." }
    ],
    risks: [
      { title: "Cicatrice extinse", description: "Frecvente. Pot necesita revizii ulterioare." },
      { title: "Pierdere de țesut funcțional", description: "0,5-3 cm pierdere lungime/grosime." },
      { title: "Infecție", description: "5-10% chiar cu antibioterapie corectă." },
      { title: "Necroză tegumentară reziduă", description: "Necesită grefă în 15-25% cazuri." },
      { title: "Deformare reziduă", description: "Posibilă în 20-30% cazuri." },
      { title: "Recurență", description: "Rar dacă excizia este radicală." }
    ],
    alternatives: [
      { title: "Aspirație", description: "Funcționează doar pentru silicon lichid recent injectat (<30 zile). NU funcționează la kanamicina." },
      { title: "Steroizi intralezional", description: "Reducerea inflamației granulomului dar nu îndepărtează substanța. Paliativ." }
    ],
    faqs: [
      { q: "Pot rezolva fără operație?", a: "Nu. Niciun tratament conservator nu îndepărtează kanamicina, silicon solidificat, vaselina sau parafina din țesut. Excizia chirurgicală este singurul tratament definitiv." },
      { q: "Cât pierd din lungime/grosime?", a: "Variabil — 0,5 până la 3 cm, în funcție de extensia leziunii." },
      { q: "Va arăta ca înainte de injectare?", a: "Estetic, da în 70-80% cazuri." },
      { q: "Pot face apoi faloplastie?", a: "Da, după 6-12 luni de stabilizare." },
      { q: "Ce risc dacă las kanamicina în corp?", a: "Granulom cronic, infecție recurentă, deformare progresivă, necroză tegumentară. Riscul este unidirecțional — situația se înrăutățește în timp." },
      { q: "Cum garantați discreția?", a: "Protocol GDPR strict, raportare publică zero, facturare neutră Cabinet Medical Diana Gheorghiță, discuție privată în consultație." }
    ],
    citations: [
      { text: "Beedasy A — Granulom peniann indus de kanamicina injectabilă (studiu RO).", url: "https://dramit.ro/serviciu/granulom-penian-indus-de-kanamicina-injectabila/", source: "Studiu RO" },
      { text: "Cascardo C et al. J Sex Med, 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/31104836/", source: "J Sex Med 2019" },
      { text: "EAU — Penile foreign body management.", url: "https://uroweb.org/guidelines/sexual-and-reproductive-health/", source: "EAU" }
    ],
    internalLinks: [
      { slug: "alungire-penis", label: "Faloplastie ulterioară" },
      { slug: "ingrosare-lipofilling", label: "Lipofilling după extracție" }
    ],
    speakablePassages: [
      "Kanamicina, silicon, vaselină și parafina injectate în penis nu pot fi îndepărtate decât prin excizie chirurgicală. 100% pacienți autoinjectați dezvoltă complicații; peste 70% necesită extracție.",
      "Procedura durează 1-3 ore, cu spitalizare 1-2 nopți. Reabilitarea completă durează 6-12 luni."
    ]
  }
];

export const getProcedureBySlug = (slug: string): Procedure | undefined =>
  proceduri.find((p) => p.slug === slug);

export const getAllProcedureSlugs: string[] = (): string[] => proceduri.map((p) => p.slug);
