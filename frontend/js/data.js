/* =========================================================
   PancaLearn — Static content data
   All learning content lives here so pages stay simple.
   ========================================================= */
  

const SILA_DATA = [
  {
    number: 1,
    title: 'Ketuhanan Yang Maha Esa',
    icon: '⭐',
    image: 'sila-1-bintang.png',
    detail:
      'Mengandung nilai ketakwaan kepada Tuhan sesuai agama dan kepercayaan masing-masing, serta menjunjung tinggi toleransi antar umat beragama di kehidupan kampus dan masyarakat.',
  },
  {
    number: 2,
    title: 'Kemanusiaan yang Adil dan Beradab',
    icon: '🔗',
    image: 'sila-2-rantai.png',
    detail:
      'Menempatkan manusia sesuai harkat dan martabatnya, menghargai perbedaan, menolak diskriminasi, dan mengedepankan sikap saling menghormati.',
  },
  {
    number: 3,
    title: 'Persatuan Indonesia',
    icon: '🌳',
    image: 'sila-3-beringin.png',
    detail:
      'Mengutamakan persatuan dan kesatuan bangsa di atas kepentingan pribadi atau golongan, termasuk dalam keberagaman suku, budaya, dan pendapat.',
  },
  {
    number: 4,
    title: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
    icon: '🐂',
    image: 'sila-4-banteng.png',
    detail:
      'Mengedepankan musyawarah mufakat dalam pengambilan keputusan, menghargai pendapat orang lain, dan menjunjung tinggi demokrasi.',
  },
  {
    number: 5,
    title: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
    icon: '🌾',
    image: 'sila-5-padi-kapas.png',
    detail:
      'Mendorong pemerataan kesejahteraan, gotong royong, dan keadilan dalam berbagai aspek kehidupan berbangsa dan bernegara.',
  },
];

const MATERI_DATA = [
  {
    id: 'sejarah-lahirnya-pancasila',
    icon: '📜',
    title: 'Sejarah Lahirnya Pancasila',
    description: 'Perjalanan sejarah perumusan Pancasila sebagai dasar negara Indonesia.',
    readingTime: 6,
    summary:
      'Pancasila dirumuskan melalui proses panjang sidang BPUPKI dan Panitia Sembilan sebelum akhirnya disahkan sebagai dasar negara pada 18 Agustus 1945.',
    keyPoints: [
      'BPUPKI dibentuk untuk mempersiapkan kemerdekaan Indonesia.',
      'Pidato Ir. Soekarno pada 1 Juni 1945 menjadi cikal bakal istilah "Pancasila".',
      'Panitia Sembilan merumuskan Piagam Jakarta sebagai rancangan awal.',
      'Pancasila disahkan secara resmi dalam sidang PPKI 18 Agustus 1945.',
    ],
    content:
      'Pancasila lahir dari proses musyawarah panjang para pendiri bangsa. Diawali dengan sidang BPUPKI pada Mei-Juni 1945 yang membahas dasar negara Indonesia merdeka. Pada 1 Juni 1945, Ir. Soekarno menyampaikan pidato yang untuk pertama kalinya memperkenalkan istilah "Pancasila" sebagai lima dasar. Setelah melalui perdebatan dan penyempurnaan rumusan oleh Panitia Sembilan, Pancasila akhirnya disahkan menjadi dasar negara dalam sidang PPKI pada 18 Agustus 1945, sehari setelah proklamasi kemerdekaan.',
    realLifeExample:
      'Setiap upacara bendera di kampus dan sekolah selalu diawali dengan pembacaan Pancasila, mengingatkan generasi muda pada sejarah perjuangan para pendiri bangsa.',
    miniQuiz: {
      question: 'Pada tanggal berapa Pancasila disahkan sebagai dasar negara?',
      options: ['1 Juni 1945', '17 Agustus 1945', '18 Agustus 1945', '22 Juni 1945'],
      correctIndex: 2,
      explanation: 'Pancasila disahkan dalam sidang PPKI pada 18 Agustus 1945, sehari setelah proklamasi kemerdekaan.',
    },
    relatedCaseId: 'kasus-gotong-royong-kampus',
  },
  {
    id: 'makna-5-sila',
    icon: '⭐',
    title: 'Makna 5 Sila Pancasila',
    description: 'Memahami makna mendalam dari setiap sila dalam Pancasila.',
    readingTime: 7,
    summary:
      'Setiap sila dalam Pancasila memiliki makna filosofis yang saling melengkapi dan membentuk satu kesatuan nilai bangsa Indonesia.',
    keyPoints: [
      'Sila 1 menekankan hubungan manusia dengan Tuhan.',
      'Sila 2 menekankan hubungan antar sesama manusia.',
      'Sila 3 menekankan persatuan bangsa yang beragam.',
      'Sila 4 menekankan demokrasi melalui musyawarah.',
      'Sila 5 menekankan keadilan sosial bagi seluruh rakyat.',
    ],
    content:
      'Kelima sila Pancasila tidak berdiri sendiri-sendiri, melainkan merupakan satu kesatuan yang utuh dan saling berkaitan. Sila pertama menjadi landasan spiritual, sila kedua dan ketiga menjadi landasan sosial-kebangsaan, sila keempat menjadi landasan politik-demokrasi, dan sila kelima menjadi tujuan akhir berupa keadilan sosial. Memahami makna tiap sila secara utuh membantu kita menerapkannya secara seimbang dalam kehidupan sehari-hari.',
    realLifeExample:
      'Ketika mengambil keputusan organisasi kampus melalui rapat, mahasiswa sedang mempraktikkan sila keempat sekaligus menjaga persatuan (sila ketiga).',
    miniQuiz: {
      question: 'Sila keberapa yang berkaitan langsung dengan musyawarah mufakat?',
      options: ['Sila 1', 'Sila 2', 'Sila 4', 'Sila 5'],
      correctIndex: 2,
      explanation: 'Sila keempat menekankan kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.',
    },
    relatedCaseId: 'kasus-organisasi-kampus',
  },
  {
    id: 'nilai-nilai-pancasila',
    icon: '💎',
    title: 'Nilai-Nilai Pancasila',
    description: 'Nilai dasar, instrumental, dan praksis dalam Pancasila.',
    readingTime: 5,
    summary:
      'Nilai-nilai Pancasila terbagi menjadi nilai dasar, nilai instrumental, dan nilai praksis yang diterapkan dalam kehidupan nyata.',
    keyPoints: [
      'Nilai dasar bersifat abstrak dan tetap.',
      'Nilai instrumental dijabarkan dalam peraturan dan kebijakan.',
      'Nilai praksis adalah penerapan nyata dalam kehidupan sehari-hari.',
      'Ketiga nilai ini saling mendukung agar Pancasila tetap relevan.',
    ],
    content:
      'Nilai dasar Pancasila bersifat universal dan tidak berubah, seperti ketuhanan, kemanusiaan, persatuan, kerakyatan, dan keadilan. Nilai ini kemudian dijabarkan menjadi nilai instrumental berupa undang-undang, peraturan, dan kebijakan. Pada akhirnya, nilai instrumental diwujudkan dalam nilai praksis, yaitu sikap dan perilaku nyata masyarakat dalam kehidupan sehari-hari, termasuk di lingkungan kampus.',
    realLifeExample:
      'Peraturan kampus tentang anti-perundungan adalah bentuk nilai instrumental dari sila kedua, sementara sikap saling menghormati antar mahasiswa adalah nilai praksisnya.',
    miniQuiz: {
      question: 'Peraturan dan undang-undang termasuk dalam kategori nilai apa?',
      options: ['Nilai dasar', 'Nilai instrumental', 'Nilai praksis', 'Nilai budaya'],
      correctIndex: 1,
      explanation: 'Nilai instrumental adalah penjabaran nilai dasar ke dalam bentuk peraturan dan kebijakan konkret.',
    },
    relatedCaseId: 'kasus-hoaks-media-sosial',
  },
  {
    id: 'pancasila-kehidupan-sehari-hari',
    icon: '🏠',
    title: 'Pancasila dalam Kehidupan Sehari-hari',
    description: 'Penerapan nilai Pancasila dalam aktivitas sehari-hari.',
    readingTime: 6,
    summary:
      'Pancasila bukan hanya teori, tetapi pedoman perilaku yang dapat diterapkan dalam interaksi sosial sehari-hari, termasuk di lingkungan kampus.',
    keyPoints: [
      'Toleransi antar teman berbeda agama adalah wujud sila pertama.',
      'Saling membantu dalam tugas kelompok adalah wujud gotong royong.',
      'Menghargai pendapat dalam diskusi adalah wujud sila keempat.',
      'Tidak membeda-bedakan teman adalah wujud sila kedua dan kelima.',
    ],
    content:
      'Penerapan Pancasila dalam kehidupan sehari-hari dapat dimulai dari hal-hal sederhana: menghormati teman yang berbeda keyakinan, bersikap adil dalam pembagian tugas kelompok, ikut serta dalam kegiatan gotong royong di lingkungan tempat tinggal, serta berani menyuarakan pendapat secara santun dalam forum diskusi. Kebiasaan-kebiasaan kecil ini jika dilakukan konsisten akan membentuk karakter bangsa yang berlandaskan Pancasila.',
    realLifeExample:
      'Mahasiswa yang bergantian memimpin doa sesuai agama masing-masing saat acara kampus mencerminkan penerapan sila pertama secara nyata.',
    miniQuiz: {
      question: 'Manakah contoh penerapan sila kelima dalam kehidupan kampus?',
      options: [
        'Membeda-bedakan teman berdasarkan status ekonomi',
        'Membagi tugas kelompok secara adil dan merata',
        'Memaksakan pendapat pribadi dalam rapat',
        'Mengabaikan teman yang kesulitan',
      ],
      correctIndex: 1,
      explanation: 'Pembagian tugas yang adil dan merata mencerminkan nilai keadilan sosial dalam sila kelima.',
    },
    relatedCaseId: 'kasus-kerja-kelompok',
  },
  {
    id: 'pancasila-era-digital',
    icon: '💻',
    title: 'Pancasila di Era Digital',
    description: 'Tantangan dan penerapan nilai Pancasila di dunia digital.',
    readingTime: 7,
    summary:
      'Era digital membawa tantangan baru dalam menerapkan nilai Pancasila, mulai dari hoaks, cyberbullying, hingga polarisasi opini di media sosial.',
    keyPoints: [
      'Menyaring informasi sebelum membagikannya adalah wujud sikap bijak digital.',
      'Menghindari ujaran kebencian adalah wujud sila kedua.',
      'Menghargai perbedaan pendapat di media sosial adalah wujud sila keempat.',
      'Literasi digital penting untuk menjaga persatuan bangsa.',
    ],
    content:
      'Media sosial dan teknologi digital membuka ruang interaksi yang luas, namun juga membawa tantangan seperti penyebaran hoaks, ujaran kebencian, dan cyberbullying. Nilai-nilai Pancasila tetap relevan untuk menjadi pedoman berperilaku di dunia digital: memeriksa kebenaran informasi sebelum membagikannya, bersikap sopan dalam berkomentar, menghargai perbedaan pendapat, dan tidak menyebarkan konten yang memecah belah persatuan bangsa.',
    realLifeExample:
      'Sebelum membagikan berita di grup WhatsApp kelas, mahasiswa yang bijak akan memeriksa terlebih dahulu kebenarannya melalui sumber terpercaya.',
    miniQuiz: {
      question: 'Sikap paling tepat ketika menerima informasi yang belum jelas kebenarannya adalah...',
      options: [
        'Langsung membagikannya ke semua grup',
        'Memeriksa kebenaran informasi terlebih dahulu',
        'Mengabaikannya tanpa klarifikasi',
        'Menambahkan opini pribadi lalu menyebarkannya',
      ],
      correctIndex: 1,
      explanation: 'Memeriksa kebenaran informasi (cek fakta) mencerminkan sikap bijak dan bertanggung jawab di era digital.',
    },
    relatedCaseId: 'kasus-cyberbullying',
  },
  {
    id: 'pancasila-dasar-negara',
    icon: '🏛️',
    title: 'Pancasila sebagai Dasar Negara',
    description: 'Pancasila sebagai landasan fundamental dalam penyelenggaraan negara Indonesia.',
    readingTime: 6,
    summary:
      'Pancasila berkedudukan sebagai dasar negara yang menjadi sumber dari segala sumber hukum dan pedoman dalam penyelenggaraan kehidupan berbangsa dan bernegara.',
    keyPoints: [
      'Pancasila adalah dasar negara yang tercantum dalam Pembukaan UUD 1945.',
      'Semua peraturan perundang-undangan di Indonesia harus bersumber dan tidak boleh bertentangan dengan Pancasila.',
      'Sebagai dasar negara, Pancasila menjadi pedoman dalam menyusun kebijakan dan sistem pemerintahan.',
      'Kedudukan Pancasila sebagai dasar negara bersifat tetap dan tidak dapat diubah.',
    ],
    content:
      'Sebagai dasar negara, Pancasila berfungsi sebagai fondasi utama dalam penyelenggaraan kehidupan berbangsa dan bernegara di Indonesia. Kedudukan ini tercantum secara eksplisit dalam alinea keempat Pembukaan UUD 1945, sehingga menjadikan Pancasila sebagai sumber dari segala sumber hukum atau grundnorm bagi negara Indonesia. Artinya, seluruh peraturan perundang-undangan, mulai dari undang-undang hingga peraturan daerah, harus disusun berlandaskan dan tidak boleh bertentangan dengan nilai-nilai Pancasila. Kedudukan Pancasila sebagai dasar negara juga bersifat tetap dan tidak dapat diubah oleh siapa pun, termasuk lembaga negara, karena mengubahnya sama dengan membubarkan negara Indonesia itu sendiri.',
    realLifeExample:
      'Ketika DPR menyusun sebuah undang-undang baru, rancangan tersebut harus diuji agar tidak bertentangan dengan nilai-nilai Pancasila, misalnya tidak boleh mendiskriminasi kelompok masyarakat tertentu.',
    miniQuiz: {
      question: 'Pancasila sebagai dasar negara tercantum dalam bagian UUD 1945 yang mana?',
      options: ['Batang tubuh', 'Pembukaan alinea keempat', 'Penjelasan umum', 'Amandemen keempat'],
      correctIndex: 1,
      explanation: 'Pancasila sebagai dasar negara tercantum dalam Pembukaan UUD 1945 alinea keempat.',
    },
    relatedCaseId: 'kasus-dasar-negara',
  },
  {
    id: 'pancasila-ideologi-negara',
    icon: '🌏',
    title: 'Pancasila sebagai Ideologi Negara',
    description: 'Pancasila sebagai ideologi terbuka yang menjadi cita-cita dan pedoman bangsa Indonesia.',
    readingTime: 6,
    summary:
      'Sebagai ideologi negara, Pancasila memuat nilai-nilai dasar yang menjadi cita-cita bersama sekaligus bersifat terbuka terhadap perkembangan zaman.',
    keyPoints: [
      'Ideologi berarti kumpulan gagasan dan nilai yang menjadi cita-cita suatu bangsa.',
      'Pancasila bersifat sebagai ideologi terbuka, artinya dapat menyesuaikan diri dengan perkembangan zaman tanpa mengubah nilai dasarnya.',
      'Pancasila berbeda dengan ideologi liberalisme maupun komunisme karena mengutamakan keseimbangan individu dan masyarakat.',
      'Ideologi Pancasila menjadi pemersatu bangsa Indonesia yang majemuk.',
    ],
    content:
      'Sebagai ideologi negara, Pancasila merupakan kumpulan nilai dan gagasan dasar yang menjadi cita-cita bersama seluruh rakyat Indonesia dalam bernegara. Pancasila dikategorikan sebagai ideologi terbuka karena nilai-nilai dasarnya bersifat tetap, namun penjabarannya dapat menyesuaikan dengan perkembangan zaman, ilmu pengetahuan, dan kebutuhan masyarakat. Hal ini membedakan Pancasila dengan ideologi tertutup seperti komunisme yang kaku, maupun liberalisme yang terlalu menonjolkan kebebasan individu. Sebagai ideologi, Pancasila juga berfungsi sebagai pemersatu bangsa Indonesia yang beragam suku, agama, ras, dan golongan agar tetap satu dalam bingkai Negara Kesatuan Republik Indonesia.',
    realLifeExample:
      'Perkembangan teknologi digital di Indonesia tetap diarahkan agar sejalan dengan nilai Pancasila, misalnya melalui aturan perlindungan data pribadi yang menjunjung tinggi hak asasi manusia.',
    miniQuiz: {
      question: 'Mengapa Pancasila disebut sebagai ideologi terbuka?',
      options: [
        'Karena boleh diubah sesuai keinginan penguasa',
        'Karena nilai dasarnya tetap namun penjabarannya dapat menyesuaikan zaman',
        'Karena berasal dari ideologi negara lain',
        'Karena tidak memiliki nilai dasar yang jelas',
      ],
      correctIndex: 1,
      explanation: 'Ideologi terbuka berarti nilai dasarnya tetap, tetapi penerapannya dapat berkembang mengikuti perubahan zaman.',
    },
    relatedCaseId: 'kasus-ideologi-negara',
  },
  {
    id: 'pancasila-pandangan-hidup',
    icon: '🧭',
    title: 'Pancasila sebagai Pandangan Hidup',
    description: 'Pancasila sebagai pedoman sikap dan perilaku bangsa Indonesia dalam kehidupan sehari-hari.',
    readingTime: 5,
    summary:
      'Sebagai pandangan hidup, Pancasila menjadi pedoman bagi bangsa Indonesia dalam bersikap, berperilaku, dan mengambil keputusan di tengah kehidupan bermasyarakat.',
    keyPoints: [
      'Pandangan hidup adalah nilai yang dijadikan pedoman dalam menjalani kehidupan sehari-hari.',
      'Pancasila membantu bangsa Indonesia menghadapi berbagai persoalan dengan cara yang sesuai jati diri bangsa.',
      'Pandangan hidup Pancasila lahir dari nilai-nilai luhur budaya dan tradisi bangsa Indonesia sendiri.',
      'Penerapan pandangan hidup Pancasila terlihat dari sikap gotong royong, musyawarah, dan toleransi.',
    ],
    content:
      'Sebagai pandangan hidup, Pancasila berperan sebagai pedoman bagi bangsa Indonesia dalam bersikap, berpikir, dan bertindak menghadapi berbagai persoalan kehidupan sehari-hari maupun dalam mengambil keputusan penting. Berbeda dengan pandangan hidup yang diimpor dari luar, nilai-nilai Pancasila digali dari budaya, adat istiadat, dan tradisi luhur bangsa Indonesia sendiri, seperti gotong royong, musyawarah, dan sikap religius. Dengan menjadikan Pancasila sebagai pandangan hidup, bangsa Indonesia memiliki pegangan yang kukuh dalam menghadapi pengaruh budaya asing maupun tantangan zaman tanpa kehilangan jati diri.',
    realLifeExample:
      'Saat menghadapi masalah dalam keluarga atau organisasi, seseorang yang menjadikan Pancasila sebagai pandangan hidup akan cenderung menyelesaikannya melalui musyawarah dan kekeluargaan, bukan dengan kekerasan.',
    miniQuiz: {
      question: 'Dari mana nilai-nilai pandangan hidup Pancasila digali?',
      options: [
        'Diadopsi sepenuhnya dari ideologi negara lain',
        'Digali dari budaya, adat istiadat, dan tradisi luhur bangsa Indonesia',
        'Dibuat baru tanpa berakar pada budaya bangsa',
        'Hanya berasal dari satu daerah tertentu',
      ],
      correctIndex: 1,
      explanation: 'Pandangan hidup Pancasila digali dari nilai-nilai budaya, adat istiadat, dan tradisi luhur bangsa Indonesia sendiri.',
    },
    relatedCaseId: 'kasus-kepedulian-sosial',
  },
  {
    id: 'kedudukan-pancasila-uud-1945',
    icon: '📘',
    title: 'Kedudukan Pancasila dalam UUD 1945',
    description: 'Posisi dan fungsi Pancasila sebagai norma dasar dalam sistem hukum UUD 1945.',
    readingTime: 6,
    summary:
      'Pancasila memiliki kedudukan sebagai norma dasar (grundnorm) yang menjiwai seluruh pasal dalam UUD 1945.',
    keyPoints: [
      'Pancasila tercantum dalam Pembukaan UUD 1945 alinea keempat.',
      'Pancasila berkedudukan sebagai norma dasar yang menjiwai seluruh batang tubuh UUD 1945.',
      'Pembukaan UUD 1945 tidak dapat diubah karena memuat dasar negara.',
      'Pasal-pasal dalam UUD 1945 merupakan penjabaran dari nilai-nilai Pancasila.',
    ],
    content:
      'Kedudukan Pancasila dalam UUD 1945 sangat fundamental karena Pancasila dicantumkan dalam Pembukaan UUD 1945, khususnya pada alinea keempat. Sebagai norma dasar atau grundnorm, Pancasila menjiwai seluruh pasal yang terdapat dalam batang tubuh UUD 1945. Artinya, setiap pasal, mulai dari hak asasi manusia, sistem pemerintahan, hingga perekonomian negara, harus selaras dan tidak boleh bertentangan dengan nilai-nilai Pancasila. Oleh karena kedudukannya yang sangat mendasar itu, Pembukaan UUD 1945 disepakati sebagai bagian yang tidak dapat diubah, sekalipun UUD 1945 telah mengalami beberapa kali amandemen pada bagian batang tubuhnya.',
    realLifeExample:
      'Pasal 29 UUD 1945 tentang kebebasan beragama merupakan wujud nyata penjabaran sila pertama Pancasila ke dalam konstitusi negara.',
    miniQuiz: {
      question: 'Mengapa Pembukaan UUD 1945 tidak dapat diubah meskipun batang tubuhnya pernah diamandemen?',
      options: [
        'Karena tidak penting bagi negara',
        'Karena memuat Pancasila sebagai dasar negara yang bersifat tetap',
        'Karena sudah tidak relevan',
        'Karena hanya berlaku sementara',
      ],
      correctIndex: 1,
      explanation: 'Pembukaan UUD 1945 memuat Pancasila sebagai dasar negara yang kedudukannya tetap dan tidak dapat diubah.',
    },
    relatedCaseId: 'kasus-hak-dan-kewajiban',
  },
  {
    id: 'hubungan-pancasila-uud-1945',
    icon: '🔗',
    title: 'Hubungan Pancasila dan UUD 1945',
    description: 'Keterkaitan erat antara Pancasila sebagai dasar negara dan UUD 1945 sebagai konstitusi.',
    readingTime: 6,
    summary:
      'Pancasila dan UUD 1945 memiliki hubungan yang tidak dapat dipisahkan, di mana Pancasila menjadi jiwa dan UUD 1945 menjadi wujud hukum tertulisnya.',
    keyPoints: [
      'Pancasila adalah jiwa, sedangkan UUD 1945 adalah wujud hukum tertulis dari nilai-nilai itu.',
      'UUD 1945 merupakan penjabaran operasional dari nilai-nilai Pancasila.',
      'Keduanya sama-sama disahkan pada 18 Agustus 1945 oleh PPKI.',
      'Tanpa Pancasila, UUD 1945 akan kehilangan arah dan landasan filosofisnya.',
    ],
    content:
      'Pancasila dan UUD 1945 memiliki hubungan yang saling melengkapi dan tidak dapat dipisahkan satu sama lain. Pancasila berkedudukan sebagai dasar filosofis dan jiwa bangsa, sementara UUD 1945 merupakan wujud hukum tertulis yang menjabarkan nilai-nilai Pancasila ke dalam aturan-aturan operasional bernegara. Keduanya disahkan pada waktu yang berdekatan, yakni dalam sidang PPKI tanggal 18 Agustus 1945. Tanpa Pancasila, UUD 1945 hanya akan menjadi kumpulan pasal tanpa arah dan landasan filosofis yang jelas, sementara tanpa UUD 1945, nilai-nilai Pancasila akan sulit diwujudkan secara konkret dalam kehidupan bernegara.',
    realLifeExample:
      'Ketentuan tentang pemilihan umum yang diatur dalam UUD 1945 merupakan wujud nyata dari sila keempat Pancasila tentang kerakyatan yang dipimpin oleh hikmat kebijaksanaan.',
    miniQuiz: {
      question: 'Bagaimana hubungan yang tepat antara Pancasila dan UUD 1945?',
      options: [
        'UUD 1945 lebih tinggi kedudukannya daripada Pancasila',
        'Pancasila adalah jiwa, UUD 1945 adalah wujud hukum tertulisnya',
        'Keduanya tidak memiliki keterkaitan sama sekali',
        'Pancasila hanya berlaku jika disebutkan dalam UUD 1945',
      ],
      correctIndex: 1,
      explanation: 'Pancasila menjadi jiwa dan dasar filosofis, sedangkan UUD 1945 adalah wujud hukum tertulis dari nilai-nilai tersebut.',
    },
    relatedCaseId: 'kasus-keadilan-sosial',
  },
  {
    id: 'pancasila-bhinneka-tunggal-ika',
    icon: '🌈',
    title: 'Pancasila dan Bhinneka Tunggal Ika',
    description: 'Keterkaitan nilai Pancasila dengan semboyan persatuan dalam keberagaman bangsa Indonesia.',
    readingTime: 6,
    summary:
      'Bhinneka Tunggal Ika dan Pancasila saling menguatkan sebagai landasan persatuan bangsa Indonesia yang majemuk.',
    keyPoints: [
      'Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu jua.',
      'Semboyan ini menjadi pelengkap sila ketiga Pancasila tentang Persatuan Indonesia.',
      'Keberagaman suku, agama, ras, dan budaya adalah kekayaan bangsa yang harus dijaga.',
      'Pancasila menjadi pemersatu di tengah keberagaman yang dimiliki Indonesia.',
    ],
    content:
      'Semboyan Bhinneka Tunggal Ika yang berarti berbeda-beda tetapi tetap satu jua memiliki keterkaitan erat dengan nilai-nilai Pancasila, khususnya sila ketiga tentang Persatuan Indonesia. Sebagai negara dengan ribuan pulau, ratusan suku bangsa, berbagai agama, dan beragam bahasa daerah, Indonesia memerlukan nilai pemersatu yang mampu merangkul seluruh perbedaan tersebut. Pancasila hadir sebagai nilai bersama yang mengakui dan menghormati keberagaman, sekaligus menegaskan bahwa perbedaan bukan alasan untuk berpecah belah, melainkan kekayaan yang memperkuat persatuan bangsa Indonesia.',
    realLifeExample:
      'Perayaan hari besar keagamaan yang berbeda-beda di lingkungan kampus tetap dirayakan bersama dengan semangat saling menghormati, sebagai wujud nyata Bhinneka Tunggal Ika.',
    miniQuiz: {
      question: 'Sila Pancasila manakah yang paling berkaitan langsung dengan semboyan Bhinneka Tunggal Ika?',
      options: ['Sila pertama', 'Sila kedua', 'Sila ketiga', 'Sila kelima'],
      correctIndex: 2,
      explanation: 'Sila ketiga, Persatuan Indonesia, berkaitan langsung dengan semangat Bhinneka Tunggal Ika dalam menyatukan keberagaman bangsa.',
    },
    relatedCaseId: 'kasus-keberagaman-suku',
  },
  {
    id: 'pancasila-dan-nkri',
    icon: '🇮🇩',
    title: 'Pancasila dan NKRI',
    description: 'Peran Pancasila dalam menjaga keutuhan Negara Kesatuan Republik Indonesia.',
    readingTime: 6,
    summary:
      'Pancasila menjadi perekat utama yang menjaga keutuhan wilayah dan persatuan Negara Kesatuan Republik Indonesia.',
    keyPoints: [
      'NKRI adalah bentuk negara yang disepakati para pendiri bangsa sejak awal kemerdekaan.',
      'Pancasila menjadi perekat yang menyatukan wilayah Indonesia yang luas dan beragam.',
      'Ancaman terhadap persatuan seperti separatisme bertentangan dengan nilai Pancasila.',
      'Menjaga NKRI adalah tanggung jawab seluruh warga negara, bukan hanya aparat negara.',
    ],
    content:
      'Negara Kesatuan Republik Indonesia (NKRI) merupakan bentuk negara final yang telah disepakati oleh para pendiri bangsa dan tidak dapat diganggu gugat. Pancasila, khususnya sila ketiga, berperan sebagai perekat yang menyatukan wilayah Indonesia yang terbentang dari Sabang sampai Merauke dengan berbagai suku, agama, dan budaya di dalamnya. Segala bentuk ancaman terhadap keutuhan NKRI, seperti gerakan separatisme atau radikalisme yang ingin memecah belah bangsa, jelas bertentangan dengan nilai-nilai Pancasila. Oleh karena itu, menjaga keutuhan NKRI bukan hanya tugas aparat keamanan, tetapi tanggung jawab bersama seluruh warga negara Indonesia.',
    realLifeExample:
      'Mahasiswa dari berbagai daerah yang kuliah di kota yang sama dan tetap menjaga kerukunan meski berbeda asal daerah adalah wujud nyata menjaga persatuan NKRI.',
    miniQuiz: {
      question: 'Sikap apa yang bertentangan dengan nilai Pancasila dalam menjaga NKRI?',
      options: [
        'Mendukung program pembangunan daerah tertinggal',
        'Mendukung gerakan yang ingin memisahkan diri dari NKRI',
        'Menghormati budaya daerah lain',
        'Ikut serta dalam kegiatan lintas budaya',
      ],
      correctIndex: 1,
      explanation: 'Mendukung gerakan separatisme bertentangan dengan nilai persatuan Pancasila dan mengancam keutuhan NKRI.',
    },
    relatedCaseId: 'kasus-persatuan-generasi-muda',
  },
  {
    id: 'pancasila-dan-demokrasi',
    icon: '🗳️',
    title: 'Pancasila dan Demokrasi',
    description: 'Konsep demokrasi Pancasila yang mengedepankan musyawarah dan mufakat.',
    readingTime: 7,
    summary:
      'Demokrasi Pancasila menekankan musyawarah untuk mufakat sebagai ciri khas yang membedakannya dari demokrasi liberal maupun demokrasi terpimpin.',
    keyPoints: [
      'Demokrasi Pancasila bersumber dari sila keempat Pancasila.',
      'Mengutamakan musyawarah untuk mufakat, bukan sekadar suara terbanyak.',
      'Demokrasi Pancasila menghargai hak setiap warga negara untuk berpendapat.',
      'Pemilu di Indonesia merupakan wujud nyata pelaksanaan demokrasi Pancasila.',
    ],
    content:
      'Demokrasi Pancasila adalah sistem demokrasi khas Indonesia yang bersumber dari sila keempat, yaitu Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan. Berbeda dengan demokrasi liberal yang menitikberatkan kebebasan individu secara mutlak atau demokrasi terpimpin yang memusatkan kekuasaan pada satu pemimpin, demokrasi Pancasila mengedepankan musyawarah untuk mencapai mufakat sebagai cara utama pengambilan keputusan. Ketika mufakat tidak tercapai, pengambilan suara terbanyak dapat dilakukan sebagai jalan terakhir dengan tetap menghormati hak setiap warga negara untuk menyampaikan pendapat. Pemilihan umum yang dilaksanakan secara langsung, umum, bebas, rahasia, jujur, dan adil merupakan wujud nyata pelaksanaan demokrasi Pancasila di Indonesia.',
    realLifeExample:
      'Dalam pemilihan ketua kelas, jika musyawarah tidak menghasilkan kesepakatan, pemungutan suara dilakukan dengan tetap menghormati hasil akhirnya bersama-sama.',
    miniQuiz: {
      question: 'Apa ciri khas utama demokrasi Pancasila dibanding demokrasi liberal?',
      options: [
        'Mengutamakan kekuasaan mutlak pemimpin',
        'Mengutamakan musyawarah untuk mufakat',
        'Tidak melibatkan rakyat dalam pengambilan keputusan',
        'Hanya berlaku pada tingkat pemerintah pusat',
      ],
      correctIndex: 1,
      explanation: 'Demokrasi Pancasila menitikberatkan musyawarah untuk mufakat sebagai cara utama pengambilan keputusan bersama.',
    },
    relatedCaseId: 'kasus-musyawarah-desa',
  },
  {
    id: 'pancasila-dan-ham',
    icon: '⚖️',
    title: 'Pancasila dan Hak Asasi Manusia',
    description: 'Nilai-nilai Pancasila sebagai landasan perlindungan dan penghormatan hak asasi manusia.',
    readingTime: 7,
    summary:
      'Pancasila menjadi landasan filosofis dalam menjamin dan melindungi hak asasi manusia di Indonesia, khususnya melalui sila kedua.',
    keyPoints: [
      'Sila kedua Pancasila menegaskan penghormatan terhadap harkat dan martabat manusia.',
      'HAM di Indonesia diatur dalam UUD 1945 dan Undang-Undang HAM sebagai penjabaran nilai Pancasila.',
      'Pancasila menyeimbangkan hak individu dengan kewajiban terhadap masyarakat.',
      'Diskriminasi dan pelanggaran HAM bertentangan dengan nilai-nilai Pancasila.',
    ],
    content:
      'Nilai-nilai Pancasila, khususnya sila kedua tentang Kemanusiaan yang Adil dan Beradab, menjadi landasan filosofis bagi perlindungan hak asasi manusia (HAM) di Indonesia. Penghormatan terhadap HAM di Indonesia tidak bersifat mutlak seperti dalam paham liberalisme, namun tetap menyeimbangkan hak individu dengan kewajiban terhadap sesama dan masyarakat, sesuai dengan semangat kekeluargaan bangsa Indonesia. Ketentuan mengenai HAM secara konkret dijabarkan dalam UUD 1945 Pasal 28A hingga 28J serta Undang-Undang Nomor 39 Tahun 1999 tentang Hak Asasi Manusia. Segala bentuk diskriminasi, kekerasan, maupun pelanggaran terhadap hak dasar manusia jelas bertentangan dengan nilai-nilai luhur Pancasila.',
    realLifeExample:
      'Kampus yang menyediakan fasilitas ramah difabel dan menjamin kesetaraan kesempatan belajar bagi seluruh mahasiswa adalah wujud nyata penghormatan HAM sesuai Pancasila.',
    miniQuiz: {
      question: 'Sila Pancasila manakah yang menjadi landasan utama penghormatan HAM di Indonesia?',
      options: ['Sila pertama', 'Sila kedua', 'Sila ketiga', 'Sila keempat'],
      correctIndex: 1,
      explanation: 'Sila kedua, Kemanusiaan yang Adil dan Beradab, menjadi landasan utama penghormatan terhadap hak asasi manusia.',
    },
    relatedCaseId: 'kasus-diskriminasi',
  },
  {
    id: 'pancasila-gotong-royong',
    icon: '🤲',
    title: 'Pancasila dan Gotong Royong',
    description: 'Gotong royong sebagai nilai luhur bangsa yang tercermin dalam Pancasila.',
    readingTime: 5,
    summary:
      'Gotong royong merupakan cerminan nilai kebersamaan yang menjadi inti dari seluruh sila Pancasila, khususnya sila ketiga dan kelima.',
    keyPoints: [
      'Gotong royong adalah nilai asli budaya Indonesia yang telah ada sejak lama.',
      'Bung Karno pernah menyebut gotong royong sebagai inti dari seluruh sila Pancasila.',
      'Gotong royong mencerminkan kebersamaan, tolong-menolong, dan kepedulian sosial.',
      'Nilai gotong royong tetap relevan diterapkan dalam kehidupan modern, termasuk di dunia digital.',
    ],
    content:
      'Gotong royong merupakan salah satu nilai luhur budaya Indonesia yang telah lama mengakar dalam kehidupan masyarakat, jauh sebelum Indonesia merdeka. Ir. Soekarno bahkan pernah menyebut gotong royong sebagai inti atau pemerasan dari seluruh sila Pancasila, karena di dalamnya terkandung semangat kebersamaan, tolong-menolong, dan kepedulian terhadap sesama yang menjadi benang merah kelima sila. Gotong royong tidak hanya relevan dalam kegiatan fisik seperti kerja bakti, tetapi juga dapat diterapkan dalam bentuk lain seperti saling berbagi ilmu, membantu teman yang kesulitan secara daring, maupun bahu-membahu menghadapi bencana melalui gerakan sosial digital.',
    realLifeExample:
      'Gerakan penggalangan dana daring untuk korban bencana alam yang dilakukan mahasiswa melalui media sosial adalah bentuk gotong royong di era modern.',
    miniQuiz: {
      question: 'Siapa yang pernah menyebut gotong royong sebagai inti dari seluruh sila Pancasila?',
      options: ['Mohammad Hatta', 'Ir. Soekarno', 'Soepomo', 'Mohammad Yamin'],
      correctIndex: 1,
      explanation: 'Ir. Soekarno menyebut gotong royong sebagai pemerasan atau inti dari seluruh sila Pancasila.',
    },
    relatedCaseId: 'kasus-gotong-royong-lingkungan',
  },
  {
    id: 'pancasila-lingkungan-kampus',
    icon: '🏫',
    title: 'Pancasila dalam Lingkungan Sekolah dan Kampus',
    description: 'Penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari di sekolah dan kampus.',
    readingTime: 6,
    summary:
      'Lingkungan sekolah dan kampus menjadi tempat penting untuk membiasakan penerapan nilai-nilai Pancasila sejak dini.',
    keyPoints: [
      'Sekolah dan kampus adalah miniatur masyarakat yang beragam.',
      'Kegiatan organisasi siswa/mahasiswa dapat menjadi wadah penerapan demokrasi Pancasila.',
      'Sikap saling menghormati antar teman berbeda latar belakang mencerminkan sila kedua dan ketiga.',
      'Aturan tata tertib sekolah/kampus merupakan penjabaran nilai keadilan dan tanggung jawab.',
    ],
    content:
      'Lingkungan sekolah dan kampus merupakan miniatur masyarakat Indonesia yang mempertemukan siswa maupun mahasiswa dari berbagai latar belakang suku, agama, dan daerah. Di lingkungan inilah nilai-nilai Pancasila dapat dilatih dan dibiasakan sejak dini, misalnya melalui kegiatan organisasi kesiswaan atau kemahasiswaan yang melatih demokrasi dan musyawarah, sikap saling menghormati antar teman yang berbeda keyakinan, hingga kepatuhan terhadap tata tertib sebagai wujud tanggung jawab dan keadilan bersama. Pembiasaan nilai Pancasila di lingkungan pendidikan akan membentuk karakter generasi muda yang siap menerapkannya secara lebih luas dalam kehidupan bermasyarakat.',
    realLifeExample:
      'Pemilihan ketua OSIS atau BEM yang dilakukan secara demokratis melalui pemungutan suara adalah latihan nyata penerapan sila keempat di lingkungan pendidikan.',
    miniQuiz: {
      question: 'Mengapa sekolah dan kampus disebut sebagai miniatur masyarakat Indonesia?',
      options: [
        'Karena hanya diikuti oleh satu suku tertentu',
        'Karena mempertemukan siswa/mahasiswa dari berbagai latar belakang yang beragam',
        'Karena tidak memiliki aturan sama sekali',
        'Karena tidak terkait dengan nilai Pancasila',
      ],
      correctIndex: 1,
      explanation: 'Sekolah dan kampus mempertemukan siswa/mahasiswa dari berbagai suku, agama, dan daerah, sehingga menjadi tempat ideal melatih nilai Pancasila.',
    },
    relatedCaseId: 'kasus-pemilihan-ketua-organisasi',
  },
  {
    id: 'pancasila-kehidupan-bermasyarakat',
    icon: '🏘️',
    title: 'Pancasila dalam Kehidupan Bermasyarakat',
    description: 'Peran Pancasila sebagai pedoman interaksi sosial dalam kehidupan bermasyarakat.',
    readingTime: 6,
    summary:
      'Nilai-nilai Pancasila menjadi pedoman penting dalam menjaga keharmonisan dan keadilan di tengah kehidupan bermasyarakat yang beragam.',
    keyPoints: [
      'Masyarakat Indonesia terdiri dari berbagai lapisan sosial dan budaya yang berbeda.',
      'Pancasila menjadi pedoman dalam menjaga kerukunan antarwarga.',
      'Nilai gotong royong dan musyawarah sangat terasa dalam kehidupan bertetangga.',
      'Keadilan sosial harus diwujudkan dalam distribusi kesejahteraan di masyarakat.',
    ],
    content:
      'Dalam kehidupan bermasyarakat yang majemuk, nilai-nilai Pancasila berperan penting sebagai pedoman menjaga keharmonisan antarwarga. Sila-sila Pancasila tercermin dalam berbagai tradisi sosial masyarakat Indonesia, seperti kegiatan kerja bakti lingkungan yang mencerminkan gotong royong, musyawarah warga dalam rapat RT/RW untuk mengambil keputusan bersama, hingga semangat saling membantu tetangga yang mengalami kesulitan. Selain itu, keadilan sosial dalam sila kelima menuntut agar kesejahteraan tidak hanya dinikmati sebagian kelompok, melainkan terdistribusi secara merata bagi seluruh anggota masyarakat, termasuk kelompok rentan dan kurang mampu.',
    realLifeExample:
      'Warga yang bergotong royong membangun posyandu untuk balita di lingkungannya adalah wujud nyata sila kelima tentang keadilan sosial bagi seluruh rakyat.',
    miniQuiz: {
      question: 'Manakah contoh penerapan Pancasila dalam kehidupan bertetangga?',
      options: [
        'Mengabaikan tetangga yang kesulitan ekonomi',
        'Ikut serta dalam musyawarah RT/RW dan kerja bakti lingkungan',
        'Hanya bergaul dengan tetangga yang seagama',
        'Menolak membantu kegiatan sosial lingkungan',
      ],
      correctIndex: 1,
      explanation: 'Ikut serta dalam musyawarah dan kerja bakti lingkungan mencerminkan nilai gotong royong dan demokrasi Pancasila.',
    },
    relatedCaseId: 'kasus-keberagaman-budaya',
  },
  {
    id: 'pancasila-keberagaman-indonesia',
    icon: '🎭',
    title: 'Pancasila dan Keberagaman Indonesia',
    description: 'Pancasila sebagai nilai pemersatu di tengah keberagaman suku, agama, ras, dan budaya Indonesia.',
    readingTime: 6,
    summary:
      'Keberagaman Indonesia yang meliputi ribuan suku, bahasa, dan budaya dipersatukan oleh nilai-nilai Pancasila sebagai identitas bersama bangsa.',
    keyPoints: [
      'Indonesia memiliki lebih dari 1.300 suku bangsa dan ratusan bahasa daerah.',
      'Keberagaman merupakan kekayaan bangsa, bukan sumber perpecahan.',
      'Pancasila mengakui dan menghormati perbedaan sebagai bagian dari identitas nasional.',
      'Sikap saling menghargai antarsuku dan antaragama adalah kunci menjaga keberagaman.',
    ],
    content:
      'Indonesia dikenal sebagai negara dengan keberagaman yang sangat tinggi, terdiri dari lebih seribu suku bangsa, ratusan bahasa daerah, serta berbagai agama dan kepercayaan yang dianut masyarakatnya. Alih-alih menjadi sumber perpecahan, keberagaman ini justru dipandang sebagai kekayaan dan kekuatan bangsa apabila dikelola dengan baik menggunakan nilai-nilai Pancasila. Pancasila mengajarkan bahwa setiap suku, agama, dan budaya memiliki kedudukan yang setara dan harus saling menghormati satu sama lain. Sikap inilah yang menjadikan Indonesia mampu mempertahankan persatuan di tengah keberagaman yang dimilikinya selama puluhan tahun sejak kemerdekaan.',
    realLifeExample:
      'Festival budaya kampus yang menampilkan tarian dan makanan khas dari berbagai daerah adalah cara mahasiswa merayakan keberagaman sekaligus mempererat persatuan.',
    miniQuiz: {
      question: 'Bagaimana Pancasila memandang keberagaman suku dan budaya di Indonesia?',
      options: [
        'Sebagai ancaman yang harus dihilangkan',
        'Sebagai kekayaan bangsa yang harus dijaga dan dihormati',
        'Sebagai hal yang tidak penting untuk dibahas',
        'Sebagai alasan untuk membentuk kelompok eksklusif',
      ],
      correctIndex: 1,
      explanation: 'Pancasila memandang keberagaman suku, agama, dan budaya sebagai kekayaan bangsa yang harus dijaga dan dihormati bersama.',
    },
    relatedCaseId: 'kasus-perbedaan-bahasa',
  },
  {
    id: 'pancasila-menghadapi-konflik',
    icon: '🕊️',
    title: 'Pancasila dalam Menghadapi Konflik',
    description: 'Pendekatan penyelesaian konflik yang berlandaskan nilai-nilai Pancasila.',
    readingTime: 6,
    summary:
      'Pancasila menawarkan pendekatan penyelesaian konflik yang mengutamakan musyawarah, dialog, dan kepala dingin dibandingkan kekerasan.',
    keyPoints: [
      'Konflik adalah hal wajar dalam masyarakat yang beragam, namun cara penyelesaiannya harus tepat.',
      'Pancasila mengutamakan dialog dan musyawarah dalam menyelesaikan perbedaan.',
      'Kekerasan dan main hakim sendiri bertentangan dengan nilai kemanusiaan Pancasila.',
      'Mediasi dan kepala dingin lebih efektif dibanding tindakan emosional saat berkonflik.',
    ],
    content:
      'Konflik dan perbedaan pendapat merupakan hal yang wajar terjadi dalam masyarakat yang beragam seperti Indonesia. Namun, cara menyelesaikan konflik tersebut sangat menentukan apakah persatuan bangsa dapat tetap terjaga atau justru semakin terpecah. Pancasila mengajarkan bahwa setiap konflik, baik antarindividu, antarkelompok, maupun antarsuku, sebaiknya diselesaikan melalui dialog, musyawarah, dan kepala dingin, bukan dengan kekerasan atau tindakan main hakim sendiri. Sikap saling mendengarkan, mencari akar masalah, dan mengutamakan kepentingan bersama di atas ego pribadi maupun kelompok adalah kunci penyelesaian konflik yang selaras dengan nilai-nilai Pancasila.',
    realLifeExample:
      'Ketika terjadi kesalahpahaman antara dua kelompok mahasiswa dalam sebuah acara kampus, pihak kampus memfasilitasi mediasi agar kedua belah pihak dapat berdialog dan menemukan solusi bersama.',
    miniQuiz: {
      question: 'Bagaimana cara penyelesaian konflik yang sesuai dengan nilai Pancasila?',
      options: [
        'Menyelesaikan dengan kekerasan agar cepat selesai',
        'Melalui dialog dan musyawarah dengan kepala dingin',
        'Membiarkan konflik berlarut-larut tanpa penyelesaian',
        'Melibatkan pihak luar untuk memperkeruh suasana',
      ],
      correctIndex: 1,
      explanation: 'Pancasila mengajarkan penyelesaian konflik melalui dialog dan musyawarah dengan kepala dingin, bukan kekerasan.',
    },
    relatedCaseId: 'kasus-konflik-antar-teman',
  },
  {
    id: 'pancasila-pedoman-generasi-muda',
    icon: '🚀',
    title: 'Pancasila sebagai Pedoman Generasi Muda',
    description: 'Peran penting generasi muda dalam menjaga dan mengamalkan nilai-nilai Pancasila di masa kini.',
    readingTime: 6,
    summary:
      'Generasi muda memiliki peran strategis sebagai penerus bangsa yang harus mengamalkan dan menjaga relevansi nilai-nilai Pancasila di tengah perubahan zaman.',
    keyPoints: [
      'Generasi muda adalah penerus dan penentu masa depan bangsa Indonesia.',
      'Pancasila harus terus relevan di tengah perkembangan teknologi dan globalisasi.',
      'Generasi muda dapat mengamalkan Pancasila melalui aktivitas nyata, termasuk di dunia digital.',
      'Penguatan karakter Pancasila sejak dini penting untuk membentengi dari pengaruh negatif globalisasi.',
    ],
    content:
      'Sebagai penerus bangsa, generasi muda memiliki peran strategis dalam menjaga kelangsungan nilai-nilai Pancasila di tengah arus globalisasi dan perkembangan teknologi yang begitu cepat. Tantangan yang dihadapi generasi muda saat ini berbeda dengan generasi sebelumnya, mulai dari derasnya informasi di media sosial, pengaruh budaya asing, hingga polarisasi opini di ruang digital. Oleh karena itu, pengamalan nilai-nilai Pancasila oleh generasi muda perlu diwujudkan secara kreatif dan relevan dengan konteks zaman, misalnya melalui konten edukasi positif, kegiatan sosial, maupun sikap bijak dalam bermedia sosial, tanpa meninggalkan esensi dari nilai-nilai luhur Pancasila itu sendiri.',
    realLifeExample:
      'Mahasiswa yang membuat konten edukasi tentang toleransi dan anti-hoaks di media sosial turut berperan menjaga nilai Pancasila di kalangan generasi muda.',
    miniQuiz: {
      question: 'Mengapa generasi muda memiliki peran penting dalam menjaga Pancasila?',
      options: [
        'Karena generasi muda tidak terpengaruh oleh perkembangan zaman',
        'Karena generasi muda adalah penerus dan penentu masa depan bangsa',
        'Karena Pancasila hanya berlaku bagi generasi muda',
        'Karena generasi tua tidak lagi membutuhkan Pancasila',
      ],
      correctIndex: 1,
      explanation: 'Generasi muda adalah penerus bangsa yang menentukan keberlangsungan nilai-nilai Pancasila di masa depan.',
    },
    relatedCaseId: 'kasus-etika-digital',
  },
];

const STUDI_KASUS_DATA = [
  {
    id: 'kasus-hoaks-media-sosial',
    topic: 'Hoaks',
    silaTerkait: 3,
    title: 'Berita yang Belum Jelas di Grup Kelas',
    permasalahan:
      'Di grup WhatsApp kelas, Dimas membagikan pesan berantai yang menyebut kampus akan meliburkan perkuliahan seminggu penuh. Pesan itu tidak mencantumkan sumber resmi, tetapi sudah dibaca puluhan orang. Beberapa teman mulai panik dan bertanya-tanya apakah harus mengubah rencana pulang kampung.',
    upaya:
      'Salsa, salah satu anggota grup, memutuskan tidak ikut meneruskan pesan itu. Ia mengecek akun resmi kampus dan bertanya ke ketua kelas. Setelah itu ia membalas di grup dengan sopan bahwa pesan tersebut belum terkonfirmasi, jadi sebaiknya jangan disebar dulu.',
    hasil:
      'Ternyata kampus tidak pernah mengeluarkan pengumuman libur tersebut. Dimas menghapus pesannya dan meminta maaf, sehingga kepanikan di grup mereda sebelum menyebar ke kelas lain.',
    pengalaman:
      'Informasi yang terlihat meyakinkan belum tentu benar. Mengecek sumber hanya butuh beberapa menit, tetapi bisa mencegah kebingungan banyak orang.',
    nilai: [
      { sila: 3, alasan: 'Menahan diri dari menyebarkan kabar bohong menjaga kelas tetap tenang dan kompak.' },
      { sila: 2, alasan: 'Menegur dengan sopan menunjukkan sikap beradab, bukan menyalahkan.' },
    ],
    question:
      'Seorang teman membagikan berita yang belum terbukti kebenarannya ke grup kelas. Apa tindakan yang paling sesuai dengan nilai Pancasila?',
    prompt: 'Kamu ada di grup kelas itu dan membaca pesan tersebut. Apa langkahmu?',
    options: [
      'Langsung menyebarkannya',
      'Membiarkannya',
      'Memeriksa kebenaran informasi terlebih dahulu',
      'Memarahi teman tersebut',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Menyebarkan pesan yang belum terbukti bisa membuat lebih banyak orang panik. Jika ternyata salah, kamu ikut menyebarkan hoaks.',
      'Diam memang tidak memperburuk keadaan, tetapi kabar yang keliru tetap beredar. Lebih baik ikut memastikan kebenarannya.',
      'Mengecek ke sumber resmi sebelum berbagi melindungi teman-temanmu dari informasi keliru dan menjaga persatuan kelas.',
      'Memarahi di grup bisa membuat suasana makin panas dan temanmu merasa dipermalukan. Koreksi dengan baik-baik jauh lebih efektif.',
    ],
    explanation: 'Memeriksa kebenaran informasi sebelum menyebarkannya mencegah perpecahan akibat hoaks dan mencerminkan sikap bertanggung jawab.',
    nilaiPancasila: 'Kehati-hatian dan tanggung jawab dalam bermedia sosial demi menjaga persatuan.',
  },
  {
    id: 'kasus-media-sosial-2',
    topic: 'Media Sosial',
    silaTerkait: 2,
    title: 'Komentar Kasar di Kolom Komentar',
    permasalahan:
      'Seorang mahasiswa mengunggah foto kegiatan kampusnya. Di kolom komentar, beberapa akun anonim mengejek penampilan dan keluarganya dengan kata-kata kasar. Komentar itu terus bertambah dan mulai dibalas dengan makian lain.',
    upaya:
      'Nadia, yang kebetulan melihatnya, tidak membalas komentar tersebut. Ia memakai fitur lapor di aplikasi untuk komentar yang melanggar aturan, lalu mengirim pesan pribadi untuk menyemangati si pengunggah.',
    hasil:
      'Beberapa komentar kasar dihapus oleh platform, dan perdebatan di kolom komentar berhenti. Si pengunggah merasa tidak sendirian menghadapi serangan itu.',
    pengalaman:
      'Melawan kekasaran dengan kekasaran hanya memperpanjang masalah. Melapor dan memberi dukungan adalah cara yang tenang tetapi berdampak.',
    nilai: [
      { sila: 2, alasan: 'Setiap orang berhak dihormati, termasuk di dunia maya.' },
    ],
    question:
      'Kamu melihat komentar kasar di media sosial yang menyerang pribadi seseorang. Apa sikap terbaik?',
    prompt: 'Kamu melihat komentar-komentar itu saat menggulir layar. Apa yang kamu lakukan?',
    options: [
      'Melaporkan dan tidak ikut menyebarkan',
      'Ikut berkomentar kasar juga',
      'Membagikan tangkapan layarnya agar viral',
      'Diam saja tanpa peduli',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Melapor tanpa ikut menyebarkan menghentikan serangan dan tetap menjaga martabat orang yang diserang.',
      'Membalas dengan kasar membuatmu ikut menambah luka dan memperkeruh suasana. Kekasaran tidak selesai dengan kekasaran.',
      'Membagikan tangkapan layar membuat korban makin banyak dilihat orang dan dapat memicu serangan baru. Niat baik pun bisa berdampak buruk.',
      'Diam berarti membiarkan korban menghadapinya sendirian. Sekadar melapor atau menyapa korban sudah sangat membantu.',
    ],
    explanation: 'Melaporkan konten negatif tanpa ikut menyebarkannya adalah sikap bijak yang menjaga martabat manusia.',
    nilaiPancasila: 'Menghargai harkat dan martabat manusia dalam interaksi digital.',
  },
  {
    id: 'kasus-perbedaan-pendapat',
    topic: 'Perbedaan Pendapat',
    silaTerkait: 4,
    title: 'Beda Suara dalam Rapat Organisasi',
    permasalahan:
      'Dalam rapat panitia pentas seni, Raka mengusulkan acara digelar di aula kecil agar biaya hemat. Hampir semua anggota lain memilih gedung serbaguna yang lebih luas. Raka merasa usulannya kurang dipertimbangkan.',
    upaya:
      'Raka menjelaskan alasan dan hitungan biayanya dengan tenang, lalu mendengarkan pertimbangan teman-temannya tentang kapasitas penonton. Rapat akhirnya memilih gedung serbaguna, dan Raka menerima keputusan itu serta menawarkan diri mengatur anggaran.',
    hasil:
      'Acara berjalan lancar, dan usulan Raka soal penghematan tetap dipakai pada bagian konsumsi dan dekorasi. Hubungan antaranggota tetap baik.',
    pengalaman:
      'Berbeda pendapat itu wajar. Yang penting, pendapat disampaikan dengan santun dan keputusan bersama dihormati.',
    nilai: [
      { sila: 4, alasan: 'Musyawarah memberi ruang bicara bagi setiap anggota sebelum keputusan diambil.' },
      { sila: 2, alasan: 'Menghargai pendapat orang lain berarti memperlakukan mereka sebagai sesama yang setara.' },
    ],
    question:
      'Dalam rapat organisasi, pendapatmu berbeda dengan mayoritas anggota. Sikap yang paling sesuai Pancasila adalah...',
    prompt: 'Pendapatmu berbeda dari mayoritas anggota. Apa yang kamu lakukan?',
    options: [
      'Memaksakan pendapat pribadi',
      'Keluar dari organisasi',
      'Diam dan tidak peduli hasil rapat',
      'Menyampaikan pendapat lalu menghormati keputusan musyawarah',
    ],
    correctIndex: 3,
    optionFeedback: [
      'Memaksakan kehendak membuat musyawarah kehilangan makna dan teman-temanmu merasa tidak didengar.',
      'Keluar hanya karena berbeda pendapat menutup kesempatanmu berkontribusi. Perbedaan seharusnya diselesaikan, bukan dihindari.',
      'Diam dan tidak peduli membuat suaramu tidak pernah ikut membentuk keputusan, padahal organisasi butuh masukan semua anggota.',
      'Menyampaikan pendapat dengan santun lalu menerima keputusan bersama adalah inti demokrasi Pancasila.',
    ],
    explanation: 'Menyampaikan pendapat secara santun lalu menerima hasil musyawarah adalah wujud demokrasi Pancasila.',
    nilaiPancasila: 'Musyawarah untuk mufakat dan menghargai keputusan bersama.',
  },
  {
    id: 'kasus-toleransi-beragama',
    topic: 'Toleransi',
    silaTerkait: 1,
    title: 'Ibadah di Sela Kegiatan Kampus',
    permasalahan:
      'Saat kegiatan orientasi fakultas, waktu salat tiba dan Fajar, salah satu peserta, mohon izin untuk beribadah. Sebagian peserta lain mulai berbisik karena merasa kegiatan jadi terhambat. Suasana menjadi sedikit canggung.',
    upaya:
      'Ketua kelompok, Bima, menghentikan sesi sejenak dan menunjukkan ruang ibadah terdekat. Ia juga mengingatkan teman-temannya untuk tenang dan menunggu dengan sabar.',
    hasil:
      'Fajar bisa beribadah dengan khusyuk, lalu kembali bergabung. Kegiatan hanya tertunda beberapa menit, dan peserta lain justru terbiasa memberi jeda ibadah di sesi berikutnya.',
    pengalaman:
      'Memberi ruang ibadah hanya butuh sedikit waktu, tetapi sangat bernilai bagi orang yang menjalankannya. Toleransi dimulai dari hal-hal kecil seperti ini.',
    nilai: [
      { sila: 1, alasan: 'Setiap orang bebas menjalankan ibadah sesuai keyakinannya, dan kita wajib menghormatinya.' },
    ],
    question:
      'Temanmu sedang beribadah sesuai agamanya saat kegiatan kampus berlangsung. Sikap yang tepat adalah...',
    prompt: 'Kamu berada di kegiatan itu saat temanmu hendak beribadah. Apa sikapmu?',
    options: [
      'Mengganggu karena tidak sepaham',
      'Memberi waktu dan ruang untuk beribadah',
      'Mengejeknya di depan teman lain',
      'Melarangnya beribadah saat itu',
    ],
    correctIndex: 1,
    optionFeedback: [
      'Mengganggu orang yang beribadah melanggar kebebasan beragama dan menyakiti perasaannya.',
      'Memberi waktu dan ruang adalah wujud nyata toleransi sesuai sila pertama.',
      'Mengejek bukan hanya tidak sopan, tetapi juga merendahkan keyakinan orang lain di depan umum.',
      'Melarang ibadah berarti merampas hak dasar temanmu. Jadwal kegiatan bisa disesuaikan, keyakinan tidak boleh dikorbankan.',
    ],
    explanation: 'Memberi ruang dan waktu ibadah adalah bentuk toleransi antar umat beragama sesuai sila pertama.',
    nilaiPancasila: 'Toleransi dan penghormatan terhadap kebebasan beribadah.',
  },
  {
    id: 'kasus-kerja-kelompok',
    topic: 'Kerja Kelompok',
    silaTerkait: 5,
    title: 'Satu Anggota yang Tidak Berkontribusi',
    permasalahan:
      'Kelompok Tari mengerjakan makalah dan presentasi mata kuliah. Tiga anggota rajin membagi tugas, tetapi Aldo tidak pernah mengerjakan bagiannya dan jarang membalas pesan. Tenggat tinggal tiga hari dan beban teman-temannya makin berat.',
    upaya:
      'Alih-alih langsung menyalahkan, Tari mengajak Aldo bicara empat mata. Ternyata Aldo sedang sibuk mengurus keluarga dan bingung memulai bagiannya. Kelompok lalu membagi ulang tugas dengan porsi lebih ringan untuk Aldo dan menyepakati tenggat per orang.',
    hasil:
      'Aldo menyelesaikan bagiannya tepat waktu dan kelompok mengumpulkan tugas sesuai jadwal. Tidak ada anggota yang merasa dikucilkan.',
    pengalaman:
      'Banyak masalah kelompok berawal dari kurangnya komunikasi. Bicara dulu memberi kesempatan semua pihak memperbaiki keadaan secara adil.',
    nilai: [
      { sila: 5, alasan: 'Pembagian beban yang adil membuat setiap anggota mendapat hak dan tanggung jawab yang seimbang.' },
      { sila: 4, alasan: 'Menyelesaikan masalah lewat bicara bersama mencerminkan semangat musyawarah.' },
    ],
    question:
      'Dalam tugas kelompok, satu anggota tidak berkontribusi sama sekali. Tindakan yang paling adil adalah...',
    prompt: 'Kamu salah satu anggota kelompok itu. Apa langkahmu?',
    options: [
      'Membiarkannya tetap dapat nilai sama tanpa bicara',
      'Mengeluarkan dari kelompok tanpa diskusi',
      'Mengajak bicara baik-baik dan mencari solusi bersama',
      'Melaporkan langsung ke dosen tanpa konfirmasi',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Membiarkan membuat anggota yang rajin dirugikan dan masalah tidak pernah selesai. Itu tidak adil bagi yang sudah bekerja.',
      'Mengeluarkan tanpa bicara bisa jadi tidak adil karena kamu belum tahu penyebabnya. Dengarkan dulu sebelum memutuskan.',
      'Berdiskusi lebih dulu adalah cara yang adil dan manusiawi, sambil tetap mencari pembagian tugas yang seimbang.',
      'Melapor langsung tanpa konfirmasi melewatkan kesempatan menyelesaikan secara baik-baik. Dosen sebaiknya jadi opsi setelah dialog tidak berhasil.',
    ],
    explanation: 'Mengajak berdiskusi terlebih dahulu adalah cara yang adil dan manusiawi sebelum mengambil tindakan lain.',
    nilaiPancasila: 'Keadilan sosial dan musyawarah dalam menyelesaikan masalah kelompok.',
  },
  {
    id: 'kasus-organisasi-kampus',
    topic: 'Organisasi Kampus',
    silaTerkait: 4,
    title: 'Voting Terbuka Memilih Ketua',
    permasalahan:
      'Himpunan mahasiswa menggelar pemilihan ketua baru. Dua kandidat sudah memaparkan visi misinya, dan panitia memutuskan pemungutan suara dilakukan secara terbuka agar semua anggota bisa mengikuti prosesnya. Seorang adik tingkat bertanya apa kaitan cara pemilihan ini dengan Pancasila.',
    upaya:
      'Panitia membuka daftar pemilih, menjelaskan aturan, lalu menghitung suara di depan peserta. Setiap anggota punya satu suara yang sama nilainya, tanpa tekanan dari siapa pun.',
    hasil:
      'Seorang kandidat terpilih dengan suara terbanyak dan hasilnya diterima semua pihak. Proses yang terbuka membuat anggota percaya bahwa hasilnya sah.',
    pengalaman:
      'Cara memilih pemimpin yang terbuka dan setara membuat keputusan dihormati bersama. Nilai demokrasi bisa dilatih dari organisasi di sekitar kita.',
    nilai: [
      { sila: 4, alasan: 'Pemimpin dipilih lewat suara anggota, mencerminkan kerakyatan yang dipimpin oleh hikmat kebijaksanaan.' },
    ],
    question:
      'Pemilihan ketua organisasi kampus dilakukan secara voting terbuka. Ini mencerminkan penerapan sila ke...',
    prompt: 'Adik tingkatmu bertanya, “Voting seperti ini penerapan sila ke berapa?” Apa jawabanmu?',
    options: [
      'Sila 1',
      'Sila 2',
      'Sila 4',
      'Sila 5',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Sila pertama membahas ketuhanan dan kebebasan beribadah, bukan cara memilih pemimpin.',
      'Sila kedua soal kemanusiaan yang adil dan beradab. Voting memang menghargai orang, tetapi inti yang paling menonjol adalah kedaulatan anggota.',
      'Voting terbuka adalah wujud kerakyatan: keputusan lahir dari suara anggota melalui proses yang demokratis.',
      'Sila kelima soal keadilan sosial dalam kesejahteraan. Hubungannya ada, tetapi yang paling langsung adalah sila keempat.',
    ],
    explanation: 'Voting terbuka dan demokratis adalah wujud nyata dari sila keempat tentang kerakyatan dan perwakilan.',
    nilaiPancasila: 'Demokrasi dan kedaulatan mahasiswa dalam menentukan pemimpin.',
  },
  {
    id: 'kasus-demokrasi-kampus',
    topic: 'Demokrasi',
    silaTerkait: 4,
    title: 'Menerima Kekalahan dengan Lapang Dada',
    permasalahan:
      'Pemilihan ketua BEM berlangsung ketat dan selisih suaranya tipis. Sebagian pendukung kandidat yang kalah, Wulan, mulai ramai di media sosial dan menuduh hasilnya tidak adil tanpa bukti jelas. Suasana kampus menjadi tegang.',
    upaya:
      'Wulan memilih mengucapkan selamat kepada pemenang di depan para pendukungnya dan meminta mereka berhenti menyebar tuduhan. Ia juga menawarkan diri membantu program kerja yang sejalan dengan visinya.',
    hasil:
      'Ketegangan mereda dan kedua kubu bisa bekerja sama dalam kepengurusan baru. Sikap Wulan dihormati banyak mahasiswa.',
    pengalaman:
      'Kalah dalam pemilihan bukan akhir dari kontribusi. Dewasa dalam berdemokrasi berarti menerima hasil sambil tetap bekerja untuk kebaikan bersama.',
    nilai: [
      { sila: 4, alasan: 'Menghormati hasil pemilihan adalah bagian dari demokrasi yang sehat.' },
      { sila: 3, alasan: 'Menahan tuduhan tanpa bukti menjaga persatuan di kampus.' },
    ],
    question:
      'Setelah hasil pemilihan ketua BEM diumumkan, kandidat yang kalah menerima hasil dengan lapang dada. Sikap ini mencerminkan...',
    prompt: 'Temanmu bertanya, “Sikap Wulan itu menunjukkan apa?” Bagaimana kamu menilainya?',
    options: [
      'Sportivitas dan penghormatan pada hasil musyawarah/demokrasi',
      'Sikap apatis',
      'Kekalahan yang memalukan',
      'Ketidakpedulian terhadap organisasi',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Sportif menerima hasil demokrasi menunjukkan kedewasaan dan menjaga kebersamaan.',
      'Apatis berarti tidak peduli. Wulan justru peduli: ia menerima hasil dan terus berkontribusi.',
      'Kalah dalam pemilihan bukan hal memalukan. Yang memalukan adalah menolak hasil tanpa dasar.',
      'Tidak peduli berarti menjauh dari organisasi. Wulan justru menawarkan bantuan untuk program kerja.',
    ],
    explanation: 'Menerima hasil demokrasi dengan lapang dada adalah wujud kedewasaan berdemokrasi sesuai Pancasila.',
    nilaiPancasila: 'Menghormati hasil keputusan bersama secara demokratis.',
  },
  {
    id: 'kasus-cyberbullying',
    topic: 'Cyberbullying',
    silaTerkait: 2,
    title: 'Perundungan di Grup Media Sosial Kampus',
    permasalahan:
      'Sebuah akun anonim di grup media sosial kampus mengunggah foto Reza dengan keterangan yang mengejek. Puluhan komentar ikut menertawakan, dan Reza mulai enggan masuk kelas. Banyak yang melihat, tetapi tidak ada yang berani bersuara.',
    upaya:
      'Intan, teman sekelas Reza, mengajaknya bicara dan menemaninya melapor ke admin grup serta layanan konseling kampus. Ia mengumpulkan tangkapan layar sebagai bukti untuk diserahkan kepada pihak berwenang, bukan disebar.',
    hasil:
      'Unggahan dihapus dan akun pelaku mendapat teguran resmi. Reza kembali percaya diri datang ke kelas dan merasa didukung teman-temannya.',
    pengalaman:
      'Korban perundungan sering merasa sendirian. Dukungan nyata dari teman dan laporan lewat jalur yang tepat bisa menghentikannya.',
    nilai: [
      { sila: 2, alasan: 'Melindungi korban menunjukkan kemanusiaan yang adil dan beradab.' },
    ],
    question:
      'Seorang mahasiswa menjadi korban perundungan di media sosial kampus. Sebagai teman, tindakan terbaikmu adalah...',
    prompt: 'Kamu satu kampus dengan Reza dan melihat unggahan itu. Apa tindakanmu?',
    options: [
      'Ikut mem-bully agar tidak dijauhi',
      'Mendukung korban dan melaporkan pelaku pada pihak berwenang',
      'Menonton saja tanpa bertindak',
      'Menyebarkan lebih lanjut agar semua tahu',
    ],
    correctIndex: 1,
    optionFeedback: [
      'Ikut merundung karena takut dijauhi justru menambah korban dan membuatmu ikut bersalah. Keberanian berbuat benar lebih bernilai daripada diterima kelompok.',
      'Mendukung korban dan melapor ke pihak berwenang menghentikan perundungan dan menjaga martabat Reza.',
      'Menonton saja berarti membiarkan perundungan berlangsung. Diam bisa dibaca pelaku sebagai persetujuan.',
      'Menyebarkan ke lebih banyak orang memperluas penderitaan korban. Bukti sebaiknya hanya diserahkan kepada yang berwenang.',
    ],
    explanation: 'Mendukung korban dan melaporkan pelaku adalah wujud kemanusiaan yang adil dan beradab.',
    nilaiPancasila: 'Melindungi harkat dan martabat sesama manusia.',
  },
  {
    id: 'kasus-gotong-royong-kampus',
    topic: 'Gotong Royong',
    silaTerkait: 3,
    title: 'Kerja Bakti Membersihkan Lingkungan Kampus',
    permasalahan:
      'Menjelang akreditasi, kampus mengajak mahasiswa kerja bakti membersihkan taman dan selokan di sekitar gedung. Hari itu Sabtu pagi, dan banyak mahasiswa lebih memilih tidur atau jalan-jalan. Panitia khawatir pekerjaan tidak selesai tepat waktu.',
    upaya:
      'Sekelompok mahasiswa termasuk Gita datang tepat waktu dan membagi tugas: ada yang menyapu, mengangkat sampah, dan mengecat pagar. Mereka bekerja bersama dan saling mengganti saat ada yang lelah.',
    hasil:
      'Seluruh area bersih sebelum siang, dan sebagian mahasiswa yang awalnya ragu akhirnya ikut bergabung. Setelah itu mereka makan bersama di taman.',
    pengalaman:
      'Pekerjaan berat terasa ringan jika dikerjakan bersama. Gotong royong juga mempererat pertemanan antarmahasiswa.',
    nilai: [
      { sila: 3, alasan: 'Bekerja bersama untuk kepentingan umum memperkuat rasa kebersamaan sebagai satu bangsa.' },
    ],
    question:
      'Kampus mengadakan kegiatan kerja bakti membersihkan lingkungan. Sikap yang mencerminkan nilai Pancasila adalah...',
    prompt: 'Panitia mengajakmu ikut kerja bakti Sabtu pagi. Apa pilihanmu?',
    options: [
      'Tidak ikut karena bukan kewajiban pribadi',
      'Ikut hanya untuk difoto lalu pulang',
      'Menyuruh orang lain mengerjakan bagian kita',
      'Ikut berpartisipasi aktif bersama mahasiswa lain',
    ],
    correctIndex: 3,
    optionFeedback: [
      'Lingkungan kampus dipakai bersama, jadi menjaganya juga tanggung jawab bersama. Bila semua berpikir begitu, tidak ada yang mengerjakan.',
      'Datang hanya untuk difoto tidak membantu pekerjaan dan mengurangi makna kebersamaan. Yang dihitung adalah kontribusi nyata.',
      'Menyuruh orang lain berarti bebanmu pindah ke teman. Gotong royong menuntut semua ikut berbagi tugas.',
      'Ikut bekerja aktif bersama teman-teman adalah wujud gotong royong dan persatuan.',
    ],
    explanation: 'Berpartisipasi aktif dalam gotong royong mencerminkan persatuan dan kebersamaan sesuai sila ketiga.',
    nilaiPancasila: 'Gotong royong sebagai wujud nyata persatuan Indonesia.',
  },
  {
    id: 'kasus-lingkungan-kampus',
    topic: 'Lingkungan Kampus',
    silaTerkait: 5,
    title: 'Berbagi Fasilitas Kampus',
    permasalahan:
      'Mushola, ruang diskusi, dan perpustakaan kampus dipakai ribuan mahasiswa setiap hari. Menjelang ujian, ruang diskusi sering dipenuhi satu kelompok yang memakainya berjam-jam, sementara sampah dan coretan mulai terlihat di beberapa meja. Mahasiswa lain jadi sulit mendapat tempat.',
    upaya:
      'Sekelompok mahasiswa mengusulkan jadwal pemakaian bergilir dan menempelkan aturan sederhana: batas waktu, buang sampah pada tempatnya, dan rapikan kursi. Petugas membantu memasang papan jadwal.',
    hasil:
      'Ruang diskusi menjadi lebih tertib dan lebih banyak mahasiswa bisa memakainya. Kondisi fasilitas juga lebih terawat.',
    pengalaman:
      'Fasilitas bersama baru terasa adil jika semua orang ikut menjaga dan mau bergantian. Aturan sederhana yang disepakati bersama sangat membantu.',
    nilai: [
      { sila: 5, alasan: 'Pemakaian fasilitas secara adil memastikan manfaatnya dirasakan semua mahasiswa.' },
    ],
    question:
      'Fasilitas kampus seperti mushola, ruang diskusi, dan perpustakaan digunakan bersama oleh seluruh mahasiswa. Sikap yang tepat adalah...',
    prompt: 'Kamu ingin memakai ruang diskusi yang sedang ramai. Apa sikapmu?',
    options: [
      'Merawat dan menggunakan fasilitas secara bijak dan bergantian',
      'Menggunakan sesuka hati tanpa memikirkan orang lain',
      'Merusak fasilitas karena bukan milik pribadi',
      'Menguasai fasilitas untuk kelompok tertentu saja',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Merawat dan bergantian membuat fasilitas bermanfaat bagi semua dan mencerminkan keadilan sosial.',
      'Memakai sesuka hati membuat orang lain kesulitan mendapat giliran. Fasilitas bersama harus dipakai dengan mempertimbangkan sesama.',
      'Merusak fasilitas umum merugikan semua orang, termasuk dirimu sendiri di kemudian hari.',
      'Menguasai untuk kelompok tertentu tidak adil karena fasilitas itu hak seluruh mahasiswa.',
    ],
    explanation: 'Menggunakan fasilitas bersama secara bijak dan adil mencerminkan pemerataan kesejahteraan bagi semua.',
    nilaiPancasila: 'Keadilan sosial dalam pemanfaatan fasilitas bersama.',
  },
  {
    id: 'kasus-dasar-negara',
    topic: 'Dasar Negara',
    silaTerkait: 3,
    title: 'Mengapa Pancasila Jadi Dasar Negara?',
    permasalahan:
      'Dalam diskusi pengenalan kampus, Salma, mahasiswa baru, bertanya mengapa Indonesia memilih Pancasila dan bukan ideologi seperti komunisme atau liberalisme. Beberapa peserta menjawab sekenanya, bahkan ada yang menganggap Pancasila hanya warisan masa lalu. Diskusi mulai tidak jelas arahnya.',
    upaya:
      'Kakak tingkat yang memandu diskusi mengajak peserta membuka kembali sejarah sidang BPUPKI. Mereka membahas bahwa nilai ketuhanan, gotong royong, dan musyawarah sudah hidup dalam budaya berbagai daerah sebelum dirumuskan menjadi Pancasila.',
    hasil:
      'Salma memahami bahwa Pancasila tidak datang dari luar, tetapi digali dari kepribadian bangsa sendiri. Peserta lain pun jadi lebih percaya diri menjelaskannya.',
    pengalaman:
      'Memahami asal-usul sebuah nilai membuat kita menghargainya, bukan sekadar menghafalnya. Pertanyaan kritis justru membantu menguatkan pemahaman.',
    nilai: [
      { sila: 3, alasan: 'Pancasila menyatukan beragam suku dan budaya dalam satu dasar negara.' },
    ],
    question:
      'Seorang mahasiswa baru bertanya mengapa Indonesia menggunakan Pancasila, bukan ideologi lain seperti komunisme atau liberalisme, sebagai dasar negara. Jawaban paling tepat untuk menjelaskan hal ini adalah...',
    prompt: 'Salma bertanya kepadamu mengapa Pancasila dipilih. Apa jawabanmu?',
    options: [
      'Karena Pancasila dipaksakan oleh pemerintah kolonial',
      'Karena Pancasila meniru sepenuhnya ideologi negara lain',
      'Karena Pancasila digali dari nilai-nilai asli budaya dan kepribadian bangsa Indonesia',
      'Karena tidak ada pilihan ideologi lain saat itu',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Pancasila dirumuskan oleh para pendiri bangsa sendiri, bukan dipaksakan oleh pemerintah kolonial.',
      'Pancasila bukan tiruan ideologi asing. Ia lahir dari nilai-nilai yang sudah hidup di tengah masyarakat Indonesia.',
      'Pancasila digali dari nilai budaya dan kepribadian bangsa, sehingga cocok menjadi dasar negara yang menyatukan.',
      'Para pendiri bangsa mengenal berbagai ideologi, tetapi memilih nilai yang sesuai jati diri Indonesia. Itu pilihan yang disadari.',
    ],
    explanation: 'Pancasila dipilih sebagai dasar negara karena digali dari nilai-nilai asli budaya, adat, dan kepribadian bangsa Indonesia sendiri, bukan diadopsi dari ideologi asing.',
    nilaiPancasila: 'Pancasila sebagai dasar negara yang mencerminkan jati diri bangsa Indonesia.',
  },
  {
    id: 'kasus-ideologi-negara',
    topic: 'Ideologi Negara',
    silaTerkait: 3,
    title: 'Usulan Mengganti Asas Kegiatan Kampus',
    permasalahan:
      'Sebuah organisasi mahasiswa mengusulkan agar kegiatan kampus memakai asas ideologi lain yang bertentangan dengan Pancasila. Beberapa mahasiswa baru tertarik karena penyampaiannya menarik, sementara yang lain bingung harus bersikap bagaimana. Isu ini mulai ramai dibicarakan di kantin dan grup chat.',
    upaya:
      'Beberapa mahasiswa, termasuk Hana, tidak ikut arus dan tidak menyerang pribadi pengusul. Mereka menyampaikan penolakan secara tegas dalam forum resmi, lalu mengajak diskusi terbuka dengan dosen pembimbing tentang mengapa Pancasila menjadi dasar bersama.',
    hasil:
      'Usulan tersebut tidak jadi dijalankan, dan sebagian mahasiswa yang tadinya tertarik memahami alasannya. Diskusi berlangsung tertib tanpa permusuhan.',
    pengalaman:
      'Mempertahankan Pancasila tidak harus dengan kemarahan. Sikap tegas yang disertai dialog dan edukasi lebih meyakinkan dan menjaga kebersamaan.',
    nilai: [
      { sila: 3, alasan: 'Menjaga Pancasila sebagai dasar bersama menjaga persatuan bangsa.' },
      { sila: 4, alasan: 'Dialog terbuka mencerminkan penyelesaian lewat musyawarah.' },
    ],
    question:
      'Sebuah organisasi mahasiswa mengusulkan mengganti asas kegiatan kampus dengan ideologi yang bertentangan dengan Pancasila. Sikap yang tepat sebagai mahasiswa adalah...',
    prompt: 'Kamu mendengar usulan itu dibahas di grup mahasiswa. Apa sikapmu?',
    options: [
      'Mendukung penuh tanpa mempertanyakan',
      'Menolak secara tegas namun tetap membuka ruang dialog dan edukasi',
      'Diam saja karena bukan urusan pribadi',
      'Ikut menyebarkan gagasan tersebut ke teman-teman lain',
    ],
    correctIndex: 1,
    optionFeedback: [
      'Mendukung tanpa mempertanyakan berisiko membawa kampus menjauh dari dasar negara. Gagasan sebaiknya diuji dulu dengan kritis.',
      'Menolak dengan tegas namun tetap terbuka berdialog menjaga Pancasila sekaligus menjaga hubungan baik.',
      'Diam membiarkan gagasan itu berkembang tanpa tanggapan. Menjaga dasar negara adalah tanggung jawab semua warga.',
      'Menyebarkan gagasan yang bertentangan dengan Pancasila memperluas perpecahan. Sebarkan pemahaman, bukan paham yang menyimpang.',
    ],
    explanation: 'Menolak ideologi yang bertentangan dengan Pancasila secara tegas namun tetap melalui dialog dan edukasi adalah sikap yang bijak dan konstitusional.',
    nilaiPancasila: 'Mempertahankan Pancasila sebagai ideologi negara dari paham yang bertentangan.',
  },
  {
    id: 'kasus-keberagaman-suku',
    topic: 'Keberagaman Suku',
    silaTerkait: 3,
    title: 'Satu Kelas, Banyak Suku',
    permasalahan:
      'Kelas semester satu diisi mahasiswa dari Sumatra, Jawa, Kalimantan, Papua, dan Sulawesi. Di minggu-minggu awal, mahasiswa cenderung duduk dan belajar dengan teman satu daerah. Saat pembagian kelompok bebas, kelas terbelah menjadi gerombolan kecil berdasarkan asal daerah.',
    upaya:
      'Ketua kelas, Yoga, mengusulkan kelompok campuran dan mengajak setiap orang memperkenalkan makanan atau kebiasaan khas daerahnya. Mahasiswa mulai saling bertanya dan belajar kosakata daerah teman.',
    hasil:
      'Kelompok campuran bekerja dengan lancar dan kelas jadi lebih akrab. Beberapa mahasiswa mengaku baru menyadari betapa kayanya budaya Indonesia.',
    pengalaman:
      'Perbedaan asal daerah bukan penghalang, melainkan sumber wawasan. Persahabatan lintas suku tumbuh jika kita berani memulai.',
    nilai: [
      { sila: 3, alasan: 'Bersatu di tengah keberagaman suku adalah wujud Persatuan Indonesia.' },
    ],
    question:
      'Dalam satu kelas terdapat mahasiswa dari Sumatra, Jawa, Kalimantan, Papua, dan Sulawesi. Sikap yang mencerminkan nilai Pancasila adalah...',
    prompt: 'Saatnya membentuk kelompok belajar. Dengan siapa kamu bergabung?',
    options: [
      'Berteman dan bekerja sama dengan semua teman tanpa memandang asal suku',
      'Membentuk kelompok belajar hanya dengan mahasiswa dari suku yang sama',
      'Mengejek logat bahasa daerah teman yang berbeda',
      'Menghindari mahasiswa dari daerah tertentu',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Berteman dan bekerja sama lintas suku memperkuat persatuan dalam keberagaman.',
      'Mengelompok hanya dengan satu suku membuat sekat antarteman makin kuat dan mengurangi kesempatan saling belajar.',
      'Mengejek logat bisa melukai teman dan merendahkan budayanya. Logat adalah bagian dari kekayaan bahasa Indonesia.',
      'Menghindari teman dari daerah tertentu adalah bentuk prasangka. Kenali dulu orangnya, bukan sekadar asalnya.',
    ],
    explanation: 'Berteman dan bekerja sama tanpa memandang asal suku mencerminkan persatuan dalam keberagaman sesuai sila ketiga.',
    nilaiPancasila: 'Persatuan Indonesia di tengah keberagaman suku bangsa.',
  },
  {
    id: 'kasus-keberagaman-budaya',
    topic: 'Keberagaman Budaya',
    silaTerkait: 3,
    title: 'Panggung Budaya yang Merata',
    permasalahan:
      'Kampus mengadakan malam budaya dengan penampilan dari berbagai daerah. Setelah daftar acara dirilis, perwakilan mahasiswa dari satu daerah merasa budayanya hanya mendapat slot singkat dan tidak diberi tempat strategis. Ia menyampaikan keluhan kepada panitia.',
    upaya:
      'Panitia, yang diketuai Mira, mengundang perwakilan semua daerah untuk rapat singkat. Mereka meninjau ulang urutan dan durasi penampilan, lalu menyusun jadwal bergilir yang lebih seimbang.',
    hasil:
      'Seluruh daerah mendapat kesempatan tampil dengan durasi yang layak. Penonton mengapresiasi acara yang terasa meriah dan inklusif.',
    pengalaman:
      'Mendengar keluhan dengan terbuka membantu panitia memperbaiki acara. Keadilan dalam memberi ruang membuat semua budaya merasa dihargai.',
    nilai: [
      { sila: 3, alasan: 'Memberi ruang setara pada tiap budaya memperkuat persatuan dalam keberagaman.' },
      { sila: 5, alasan: 'Pembagian kesempatan yang adil mencerminkan keadilan bagi semua pihak.' },
    ],
    question:
      'Sebuah acara kampus menampilkan pertunjukan budaya dari berbagai daerah di Indonesia. Salah satu peserta merasa budayanya kurang mendapat tempat. Sikap panitia yang tepat adalah...',
    prompt: 'Kamu panitia acara ini dan menerima keluhan tersebut. Apa yang kamu lakukan?',
    options: [
      'Mengabaikan keluhan tersebut',
      'Membatalkan seluruh acara',
      'Hanya menampilkan budaya mayoritas',
      'Mengevaluasi dan memastikan seluruh budaya mendapat kesempatan tampil secara adil',
    ],
    correctIndex: 3,
    optionFeedback: [
      'Mengabaikan keluhan membuat peserta merasa tidak dihargai dan masalahnya tetap ada.',
      'Membatalkan seluruh acara terlalu berlebihan dan merugikan semua peserta. Cukup perbaiki bagian yang kurang adil.',
      'Hanya menampilkan budaya mayoritas menghapus kekayaan budaya lain. Budaya minoritas juga bagian dari Indonesia.',
      'Mengevaluasi dan memberi kesempatan yang adil menunjukkan penghargaan pada keberagaman budaya.',
    ],
    explanation: 'Memastikan seluruh budaya mendapat kesempatan yang adil mencerminkan penghormatan terhadap keberagaman budaya sesuai Pancasila.',
    nilaiPancasila: 'Menghargai dan memberi ruang setara bagi setiap budaya daerah.',
  },
  {
    id: 'kasus-perbedaan-bahasa',
    topic: 'Perbedaan Bahasa',
    silaTerkait: 3,
    title: 'Teman yang Masih Belajar Berbahasa Indonesia',
    permasalahan:
      'Yohanes berasal dari daerah terpencil dan sehari-hari memakai bahasa daerah. Di kelas ia masih terbata-bata berbahasa Indonesia, sehingga beberapa teman menertawakannya. Yohanes jadi jarang bicara dan sering duduk sendirian.',
    upaya:
      'Lestari memilih duduk di sebelahnya dan mengajaknya berlatih berbicara pelan-pelan setelah kuliah. Mereka bertukar belajar: Yohanes mengajarkan beberapa kata dari bahasa daerahnya, sementara Lestari membantu merangkai kalimat.',
    hasil:
      'Dalam beberapa minggu, Yohanes lebih percaya diri berpendapat di kelas. Teman-teman yang tadinya mengejek mulai ikut membantu.',
    pengalaman:
      'Kemampuan berbahasa bisa dilatih jika lingkungan mendukung. Menghargai bahasa daerah dan bahasa persatuan sekaligus membuat kita lebih saling memahami.',
    nilai: [
      { sila: 3, alasan: 'Bahasa Indonesia mempersatukan, dan bahasa daerah adalah kekayaan bangsa yang perlu dihargai.' },
      { sila: 2, alasan: 'Membantu teman yang kesulitan menunjukkan kepedulian dan sikap beradab.' },
    ],
    question:
      'Seorang mahasiswa dari daerah terpencil masih kesulitan berbahasa Indonesia dengan lancar dan sering diejek oleh teman sekelas. Sikap yang tepat adalah...',
    prompt: 'Kamu sekelas dengan Yohanes dan melihat teman-teman mengejeknya. Apa sikapmu?',
    options: [
      'Ikut mengejek agar diterima kelompok',
      'Menjauhinya karena dianggap merepotkan',
      'Membantu dan membimbingnya agar lebih percaya diri berbahasa Indonesia',
      'Melaporkannya ke dosen agar dikeluarkan dari kelas',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Ikut mengejek hanya agar diterima membuat temanmu makin terluka dan tidak mencerminkan sikap beradab.',
      'Menjauhi berarti membiarkan temanmu sendirian. Kesulitan berbahasa bukan alasan untuk dikucilkan.',
      'Membimbing dengan sabar menumbuhkan kepercayaan diri temanmu dan memperkuat persatuan di kelas.',
      'Melapor agar dikeluarkan tidak adil dan menutup hak belajarnya. Pendidikan terbuka untuk semua yang mau belajar.',
    ],
    explanation: 'Membantu teman yang kesulitan berbahasa Indonesia mencerminkan sikap kemanusiaan dan persatuan sesuai nilai Pancasila.',
    nilaiPancasila: 'Kepedulian terhadap sesama di tengah perbedaan latar belakang bahasa daerah.',
  },
  {
    id: 'kasus-gotong-royong-lingkungan',
    topic: 'Gotong Royong',
    silaTerkait: 3,
    title: 'Kerja Bakti Membersihkan Selokan',
    permasalahan:
      'Musim hujan hampir tiba dan selokan di lingkungan RT penuh sampah serta lumpur. Tahun lalu, selokan yang mampet membuat air meluap hingga masuk ke beberapa rumah. Ketua RT mengundang warga kerja bakti hari Minggu pagi, tetapi baru sedikit yang menyatakan akan datang.',
    upaya:
      'Pak Budi, salah satu warga, datang paling awal membawa cangkul dan mengajak tetangga sekitar. Warga lain membawa karung, sarung tangan, dan minuman. Mereka membagi tugas: mengangkat lumpur, mengumpulkan sampah, dan menyiapkan konsumsi.',
    hasil:
      'Selokan kembali lancar dalam setengah hari. Ketika hujan deras turun, air tidak lagi meluap ke permukiman.',
    pengalaman:
      'Masalah lingkungan lebih mudah selesai jika dikerjakan bersama. Kerja bakti juga membuat tetangga lebih kenal dan akrab.',
    nilai: [
      { sila: 3, alasan: 'Kebersamaan warga menjaga lingkungan memperkuat rasa persatuan.' },
      { sila: 5, alasan: 'Manfaatnya dirasakan seluruh warga secara adil.' },
    ],
    question:
      'Lingkungan tempat tinggal mengadakan kerja bakti membersihkan selokan menjelang musim hujan. Sikap yang mencerminkan nilai Pancasila adalah...',
    prompt: 'Ketua RT mengajakmu ikut kerja bakti. Bagaimana kamu menanggapinya?',
    options: [
      'Tidak ikut karena merasa itu tugas petugas kebersihan',
      'Ikut berpartisipasi bersama warga lainnya',
      'Ikut hanya jika ada imbalan',
      'Menyuruh pembantu rumah tangga menggantikan tanpa ikut serta',
    ],
    correctIndex: 1,
    optionFeedback: [
      'Kebersihan lingkungan adalah tanggung jawab bersama, bukan hanya petugas. Bila warga tidak peduli, masalah tetap kembali.',
      'Ikut bekerja bersama warga adalah wujud gotong royong dan kepedulian pada lingkungan.',
      'Mengharap imbalan membuat gotong royong kehilangan makna. Manfaatnya sudah kamu rasakan sendiri saat lingkungan bersih.',
      'Menyuruh orang lain menggantikan berarti kamu tidak ikut menanggung beban bersama. Gotong royong butuh kehadiranmu langsung.',
    ],
    explanation: 'Berpartisipasi aktif dalam kerja bakti mencerminkan semangat gotong royong sebagai wujud persatuan dan kepedulian sosial.',
    nilaiPancasila: 'Gotong royong sebagai wujud nyata kebersamaan warga.',
  },
  {
    id: 'kasus-keadilan-sosial',
    topic: 'Keadilan Sosial',
    silaTerkait: 5,
    title: 'Bantuan Sosial yang Tidak Merata',
    permasalahan:
      'Di sebuah desa, bantuan sosial untuk warga kurang mampu dibagikan melalui kepala desa. Warga mulai menduga bahwa kerabat kepala desa mendapat bagian lebih banyak, sementara beberapa keluarga yang benar-benar membutuhkan belum menerima. Rasa tidak percaya antarwarga pun tumbuh.',
    upaya:
      'Seorang warga, Bu Ratna, mengumpulkan data sederhana tentang siapa yang menerima dan siapa yang belum. Ia menyampaikannya dalam rapat warga dan meminta daftar penerima diumumkan terbuka. Jika tidak ada penjelasan, ia siap melapor ke pihak kecamatan.',
    hasil:
      'Daftar penerima diumumkan dan diverifikasi ulang. Keluarga yang tadinya terlewat akhirnya ikut menerima bantuan.',
    pengalaman:
      'Keadilan perlu diperjuangkan lewat cara yang jelas dan berdasar data, bukan dugaan. Transparansi membuat warga saling percaya.',
    nilai: [
      { sila: 5, alasan: 'Bantuan harus sampai kepada yang berhak agar keadilan sosial terwujud.' },
      { sila: 4, alasan: 'Warga berhak menyampaikan pendapat dan meminta pertanggungjawaban lewat musyawarah.' },
    ],
    question:
      'Dalam pembagian bantuan sosial di suatu desa, terdapat dugaan bahwa bantuan lebih banyak diberikan kepada kerabat kepala desa. Sikap yang sesuai nilai Pancasila adalah...',
    prompt: 'Kamu warga desa itu dan mendengar dugaan tersebut. Apa langkahmu?',
    options: [
      'Membiarkan karena bukan urusan pribadi',
      'Ikut memanfaatkan kedekatan untuk mendapat bantuan lebih',
      'Menyebarkan tuduhan tanpa bukti yang jelas',
      'Melaporkan dan mendorong transparansi agar bantuan tepat sasaran',
    ],
    correctIndex: 3,
    optionFeedback: [
      'Membiarkan berarti ketidakadilan terus berjalan dan warga yang membutuhkan tetap tidak terbantu.',
      'Memanfaatkan kedekatan untuk mendapat lebih banyak justru ikut melanggengkan ketidakadilan dan mengambil hak orang lain.',
      'Menuduh tanpa bukti bisa memfitnah dan memecah warga. Kumpulkan fakta dulu, lalu sampaikan lewat jalur resmi.',
      'Meminta transparansi dan melapor lewat jalur yang benar membantu bantuan tepat sasaran.',
    ],
    explanation: 'Mendorong transparansi dan melaporkan dugaan ketidakadilan mencerminkan perjuangan menegakkan keadilan sosial sesuai sila kelima.',
    nilaiPancasila: 'Keadilan sosial dalam distribusi bantuan bagi seluruh rakyat.',
  },
  {
    id: 'kasus-hak-dan-kewajiban',
    topic: 'Hak dan Kewajiban',
    silaTerkait: 2,
    title: 'Hak Cuti dan Pekerjaan yang Mendesak',
    permasalahan:
      'Andi, seorang karyawan, sudah mengajukan cuti untuk acara keluarga. Sehari sebelum cuti, atasan memberi tahu bahwa laporan penting harus dikirim ke klien besok pagi. Andi bingung antara mempertahankan haknya untuk cuti dan menyelesaikan kewajiban pekerjaannya.',
    upaya:
      'Andi menyampaikan situasinya kepada atasan dengan jelas. Ia menyelesaikan bagian laporan yang paling mendesak malam itu dan menitipkan sisanya kepada rekan kerja disertai catatan yang rapi. Setelah itu ia berangkat cuti dengan tenang.',
    hasil:
      'Laporan terkirim tepat waktu dan Andi tetap bisa menghadiri acara keluarganya. Atasan menghargai sikap bertanggung jawabnya.',
    pengalaman:
      'Hak dan kewajiban berjalan beriringan. Dengan komunikasi yang baik, keduanya bisa dipenuhi tanpa merugikan orang lain.',
    nilai: [
      { sila: 2, alasan: 'Menghargai hak sendiri sekaligus menunaikan tanggung jawab kepada orang lain adalah sikap beradab.' },
    ],
    question:
      'Seorang karyawan menuntut haknya untuk cuti, namun belum menyelesaikan kewajiban pekerjaannya yang mendesak. Sikap paling bijak adalah...',
    prompt: 'Kamu ada di posisi Andi pada malam sebelum cuti. Apa yang kamu lakukan?',
    options: [
      'Tetap mengambil cuti tanpa peduli pekerjaan yang belum selesai',
      'Mengabaikan haknya sepenuhnya',
      'Menyelesaikan komunikasi dan tanggung jawab pekerjaan terlebih dahulu sebelum mengambil hak cuti',
      'Mengambil cuti secara diam-diam tanpa izin',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Mengambil hak tanpa memikirkan kewajiban merugikan rekan dan klien yang bergantung pada pekerjaanmu.',
      'Melepas hak sepenuhnya juga tidak sehat. Cuti adalah hak yang sah dan penting untuk istirahat.',
      'Berkomunikasi dan menuntaskan tanggung jawab dulu menyeimbangkan hak dan kewajiban secara dewasa.',
      'Cuti tanpa izin melanggar aturan dan merusak kepercayaan. Hak dijalankan lewat prosedur yang benar.',
    ],
    explanation: 'Menyeimbangkan antara hak dan kewajiban dengan berkomunikasi terlebih dahulu mencerminkan sikap tanggung jawab sesuai nilai Pancasila.',
    nilaiPancasila: 'Keseimbangan antara hak dan kewajiban sebagai warga negara maupun anggota masyarakat.',
  },
  {
    id: 'kasus-kebebasan-berpendapat',
    topic: 'Kebebasan Berpendapat',
    silaTerkait: 4,
    title: 'Unjuk Rasa Damai Menolak Kenaikan Biaya Praktikum',
    permasalahan:
      'Kampus menaikkan biaya praktikum, dan sejumlah mahasiswa merasa keputusan itu diambil tanpa penjelasan. Mereka menggelar unjuk rasa damai di halaman rektorat, membawa poster dan menyampaikan tuntutan secara tertib. Pihak kampus harus menentukan sikap menanggapinya.',
    upaya:
      'Wakil rektor menemui peserta aksi, mendengarkan aspirasi, lalu mengundang perwakilan mahasiswa dalam forum dialog. Dalam forum itu pihak kampus menjelaskan dasar perhitungan biaya, sementara mahasiswa menyampaikan keberatannya.',
    hasil:
      'Kampus menyepakati peninjauan ulang rincian biaya dan menyediakan keringanan bagi mahasiswa yang membutuhkan. Aksi berakhir damai tanpa ada pihak yang dirugikan.',
    pengalaman:
      'Kritik yang disampaikan dengan tertib sebaiknya dijawab dengan dialog, bukan hukuman. Dari situ muncul keputusan yang lebih adil.',
    nilai: [
      { sila: 4, alasan: 'Kebebasan berpendapat dan musyawarah adalah ciri demokrasi Pancasila.' },
    ],
    question:
      'Seorang mahasiswa mengkritik kebijakan kampus melalui unjuk rasa damai. Sikap pihak kampus yang sesuai nilai Pancasila adalah...',
    prompt: 'Kamu pimpinan kampus yang menghadapi aksi tersebut. Bagaimana kamu menanggapinya?',
    options: [
      'Mendengarkan aspirasi dan membuka ruang dialog',
      'Membungkam dan menghukum mahasiswa tersebut',
      'Mengabaikan sepenuhnya tanpa tanggapan',
      'Melarang seluruh kegiatan mahasiswa selamanya',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Mendengarkan dan membuka dialog menghargai kebebasan berpendapat dan membuka jalan solusi bersama.',
      'Membungkam dan menghukum mematikan keberanian mengkritik dan menjauhkan kampus dari musyawarah.',
      'Mengabaikan membuat aspirasi tidak tersalurkan dan bisa memicu ketegangan lebih besar.',
      'Melarang seluruh kegiatan selamanya berlebihan dan menutup ruang berorganisasi, padahal aksinya berjalan damai.',
    ],
    explanation: 'Mendengarkan aspirasi dan membuka dialog mencerminkan penghormatan terhadap kebebasan berpendapat sesuai demokrasi Pancasila.',
    nilaiPancasila: 'Menghormati kebebasan berpendapat yang disampaikan secara damai dan bertanggung jawab.',
  },
  {
    id: 'kasus-musyawarah-desa',
    topic: 'Musyawarah',
    silaTerkait: 4,
    title: 'Memilih Lokasi Balai Desa Baru',
    permasalahan:
      'Desa akan membangun balai desa baru, tetapi warga terbagi dua pendapat. Satu kelompok ingin lokasinya di dekat pasar agar mudah dijangkau, sementara kelompok lain mengusulkan di dekat sekolah supaya lebih tenang. Perdebatan mulai memanas di warung-warung.',
    upaya:
      'Kepala desa mengundang seluruh perwakilan RT ke musyawarah desa. Setiap pihak diberi waktu menyampaikan alasan, lalu bersama-sama membandingkan akses jalan, jarak ke permukiman, dan biaya. Mereka menimbang dengan kepala dingin sebelum mengambil keputusan.',
    hasil:
      'Warga sepakat memilih lokasi yang paling mudah diakses dari semua dusun. Meski tidak semua usulan terpakai, semua pihak merasa sudah didengar.',
    pengalaman:
      'Keputusan bersama lebih kuat daripada keputusan sepihak. Mufakat lahir ketika semua pihak mau mendengar dan mengalah demi kepentingan bersama.',
    nilai: [
      { sila: 4, alasan: 'Musyawarah untuk mufakat adalah cara khas Pancasila dalam mengambil keputusan.' },
    ],
    question:
      'Warga desa berbeda pendapat mengenai lokasi pembangunan balai desa yang baru. Cara penyelesaian yang sesuai Pancasila adalah...',
    prompt: 'Kamu perwakilan warga dalam persoalan ini. Cara penyelesaian apa yang kamu dukung?',
    options: [
      'Kepala desa memutuskan sendiri tanpa melibatkan warga',
      'Mengadakan musyawarah desa untuk mencapai mufakat bersama',
      'Warga yang tidak setuju dipaksa mengikuti keputusan sepihak',
      'Pembangunan dibatalkan tanpa penjelasan',
    ],
    correctIndex: 1,
    optionFeedback: [
      'Keputusan sepihak mengabaikan hak warga untuk didengar dan mudah menimbulkan penolakan.',
      'Musyawarah desa memberi ruang bagi semua suara hingga tercapai mufakat.',
      'Memaksa warga yang tidak setuju bertentangan dengan semangat musyawarah dan memicu perpecahan.',
      'Membatalkan tanpa penjelasan membuang kesempatan kemajuan desa dan membuat warga bertanya-tanya.',
    ],
    explanation: 'Mengadakan musyawarah desa untuk mufakat adalah cara pengambilan keputusan yang sesuai dengan sila keempat Pancasila.',
    nilaiPancasila: 'Musyawarah untuk mufakat dalam pengambilan keputusan bersama masyarakat.',
  },
  {
    id: 'kasus-pemilihan-ketua-organisasi',
    topic: 'Pemilihan Ketua Organisasi',
    silaTerkait: 4,
    title: 'Politik Uang dalam Pemilihan Ketua Himpunan',
    permasalahan:
      'Menjelang pemilihan ketua himpunan mahasiswa, seorang kandidat membagikan amplop berisi uang kepada beberapa anggota dengan syarat mereka memilihnya. Sebagian anggota ragu, tetapi ada juga yang tergoda karena merasa uangnya lumayan. Suasana pemilihan jadi tidak sehat.',
    upaya:
      'Bayu, salah satu anggota, menolak amplop itu dengan sopan dan melaporkan kejadian tersebut kepada panitia pemilihan. Ia mengajak teman-temannya membaca visi misi semua kandidat dan memilih berdasarkan gagasan, bukan imbalan.',
    hasil:
      'Panitia menegur keras kandidat tersebut dan mengawasi tahap pemilihan lebih ketat. Pemilihan berlangsung lebih jujur dan terpilihlah kandidat yang gagasannya paling meyakinkan.',
    pengalaman:
      'Satu suara tidak boleh dijual karena ikut menentukan arah organisasi. Berani menolak dan melapor membantu menjaga kejujuran bersama.',
    nilai: [
      { sila: 4, alasan: 'Pemilihan harus jujur dan bebas agar benar-benar mewakili suara anggota.' },
      { sila: 5, alasan: 'Bebas dari politik uang menjaga kesetaraan kesempatan bagi semua kandidat.' },
    ],
    question:
      'Dalam pemilihan ketua himpunan mahasiswa, salah satu kandidat mencoba melakukan politik uang agar terpilih. Sikap yang tepat sebagai mahasiswa adalah...',
    prompt: 'Seorang kandidat menawarkan uang agar kamu memilihnya. Apa yang kamu lakukan?',
    options: [
      'Menerima uang tersebut dan memilihnya',
      'Diam saja tanpa melapor',
      'Menolak politik uang dan memilih berdasarkan visi misi yang baik',
      'Ikut menyebarkan praktik tersebut ke mahasiswa lain',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Menerima uang berarti menjual suaramu dan ikut merusak pemilihan. Pemimpin yang terpilih karena uang, bukan karena gagasan, sulit dipercaya.',
      'Diam membuat pelanggaran dibiarkan dan bisa terulang. Melapor ke panitia melindungi keadilan pemilihan.',
      'Menolak politik uang dan memilih berdasarkan visi misi menjaga pemilihan tetap jujur dan adil.',
      'Menyebarkan praktik ini memperluas kecurangan dan merusak kepercayaan antaranggota.',
    ],
    explanation: 'Menolak politik uang dan memilih berdasarkan visi misi mencerminkan pemilihan yang jujur dan adil sesuai nilai demokrasi Pancasila.',
    nilaiPancasila: 'Demokrasi yang jujur dan adil tanpa politik uang dalam pemilihan pemimpin.',
  },
  {
    id: 'kasus-konflik-antar-teman',
    topic: 'Konflik Antar Teman',
    silaTerkait: 2,
    title: 'Dua Sahabat yang Saling Diam',
    permasalahan:
      'Rani dan Dewi bersahabat sejak SMA, tetapi bertengkar karena salah paham soal janji yang batal. Sejak itu mereka tidak saling menyapa selama berminggu-minggu. Teman-teman sekelas jadi ikut canggung dan merasa harus memilih pihak.',
    upaya:
      'Rani memberanikan diri mengajak Dewi bicara di kafe kampus. Keduanya bergantian bercerita tanpa saling menyela, mengakui bagian kesalahan masing-masing, lalu sepakat memberi kabar bila ada perubahan rencana.',
    hasil:
      'Kesalahpahaman selesai dan mereka kembali bersahabat. Suasana kelas pun menjadi nyaman lagi.',
    pengalaman:
      'Konflik yang didiamkan sering makin membesar. Berani memulai pembicaraan dan memaafkan membuat hubungan lebih kuat.',
    nilai: [
      { sila: 2, alasan: 'Menyelesaikan konflik dengan saling menghormati dan memaafkan mencerminkan sikap adil dan beradab.' },
    ],
    question:
      'Dua orang sahabat berselisih paham hingga tidak saling menyapa selama berminggu-minggu. Langkah yang sesuai nilai Pancasila untuk menyelesaikannya adalah...',
    prompt: 'Kamu sahabat yang sedang berselisih paham. Apa langkahmu?',
    options: [
      'Mengajak bicara baik-baik untuk mencari solusi dan saling memaafkan',
      'Membiarkan hubungan tetap renggang selamanya',
      'Melibatkan lebih banyak orang agar konflik membesar',
      'Menyebarkan keburukan masing-masing pihak',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Bicara baik-baik dan saling memaafkan menyelesaikan masalah tanpa menyakiti siapa pun.',
      'Membiarkan renggang membuat salah paham mengendap dan persahabatan bisa hilang begitu saja.',
      'Melibatkan banyak orang membuat masalah kecil menjadi besar dan mempermalukan sahabatmu.',
      'Menyebarkan keburukan hanya memperdalam luka dan menghancurkan kepercayaan.',
    ],
    explanation: 'Mengajak bicara baik-baik dan saling memaafkan mencerminkan nilai kemanusiaan dan persatuan dalam menyelesaikan konflik pertemanan.',
    nilaiPancasila: 'Kemanusiaan yang adil dan beradab dalam menyelesaikan konflik antarindividu.',
  },
  {
    id: 'kasus-diskriminasi',
    topic: 'Diskriminasi',
    silaTerkait: 2,
    title: 'Pelamar Kerja yang Ditolak karena Latar Belakangnya',
    permasalahan:
      'Maya melamar kerja di sebuah perusahaan dengan nilai dan pengalaman yang memenuhi syarat. Dalam wawancara, ia mendapat banyak pertanyaan tentang suku dan agamanya, lalu dinyatakan tidak diterima tanpa alasan terkait kemampuan. Seorang kenalan menyebut bahwa pelamar dari latar belakang yang sama sebelumnya juga ditolak.',
    upaya:
      'Maya menceritakan pengalamannya kepada teman dan mencari informasi tentang aturan ketenagakerjaan. Ia lalu mengajukan pengaduan resmi kepada pihak yang berwenang dan meminta perusahaan menjelaskan dasar penilaiannya.',
    hasil:
      'Perusahaan meninjau ulang proses rekrutmennya dan berjanji menilai pelamar hanya dari kualifikasi. Kejadian ini membuat banyak orang lebih sadar akan bahaya diskriminasi.',
    pengalaman:
      'Setiap orang berhak diperlakukan setara di dunia kerja. Menolak diskriminasi perlu dimulai dengan berani menyebutnya sebagai masalah.',
    nilai: [
      { sila: 2, alasan: 'Setiap manusia memiliki martabat yang sama tanpa memandang suku dan agama.' },
      { sila: 5, alasan: 'Kesempatan kerja yang adil harus terbuka bagi semua warga.' },
    ],
    question:
      'Seorang pelamar kerja ditolak hanya karena berasal dari suku dan agama tertentu, bukan karena kualifikasinya. Tindakan tersebut adalah bentuk...',
    prompt: 'Temanmu menceritakan kejadian ini. Bagaimana kamu menyebut tindakan perusahaan tersebut?',
    options: [
      'Penerapan nilai Pancasila yang baik',
      'Kebijakan perusahaan yang wajar',
      'Bentuk kehati-hatian perusahaan',
      'Diskriminasi yang bertentangan dengan nilai kemanusiaan Pancasila',
    ],
    correctIndex: 3,
    optionFeedback: [
      'Menolak seseorang karena suku dan agama bukan penerapan Pancasila. Itu justru bertentangan dengan nilai kemanusiaan.',
      'Kebijakan yang wajar menilai kemampuan, bukan latar belakang suku atau agama.',
      'Kehati-hatian perusahaan seharusnya menyangkut kualifikasi dan integritas, bukan prasangka terhadap identitas seseorang.',
      'Itu adalah diskriminasi yang melanggar nilai kemanusiaan yang adil dan beradab.',
    ],
    explanation: 'Menolak seseorang hanya berdasarkan suku atau agama merupakan diskriminasi yang jelas bertentangan dengan sila kedua Pancasila.',
    nilaiPancasila: 'Menolak segala bentuk diskriminasi berdasarkan suku, agama, ras, dan golongan.',
  },
  {
    id: 'kasus-toleransi-budaya',
    topic: 'Toleransi',
    silaTerkait: 1,
    title: 'Jadwal Acara yang Bertabrakan dengan Waktu Ibadah',
    permasalahan:
      'Panitia seminar kampus menjadwalkan sesi utama pada jam yang bertepatan dengan waktu ibadah salah satu kelompok agama. Beberapa peserta dan pengisi acara dari kelompok tersebut kesulitan karena harus memilih antara acara dan ibadah. Mereka menyampaikan hal ini secara baik-baik kepada panitia.',
    upaya:
      'Ketua panitia, Indra, berdiskusi dengan timnya dan memutuskan memajukan sesi lain serta menambah jeda 30 menit. Panitia juga menyiapkan ruang ibadah dan mengumumkan perubahan jadwal kepada seluruh peserta.',
    hasil:
      'Semua peserta dapat beribadah dan tetap mengikuti seminar. Kelompok yang tadinya khawatir merasa dihargai dan makin aktif membantu acara.',
    pengalaman:
      'Jadwal bisa diatur ulang, tetapi hak beribadah tidak boleh dikorbankan. Mendengar masukan kecil dapat mencegah masalah besar.',
    nilai: [
      { sila: 1, alasan: 'Menghormati waktu ibadah semua umat adalah wujud toleransi beragama.' },
      { sila: 3, alasan: 'Acara yang inklusif menjaga kebersamaan antarkelompok.' },
    ],
    question:
      'Sebuah acara kampus dijadwalkan bertepatan dengan waktu ibadah salah satu kelompok agama. Sikap panitia yang sesuai Pancasila adalah...',
    prompt: 'Kamu panitia seminar dan menerima keberatan tentang jadwal. Apa keputusanmu?',
    options: [
      'Tetap melanjutkan acara tanpa memberi waktu ibadah',
      'Menjadwalkan ulang atau memberi jeda waktu untuk ibadah',
      'Meminta kelompok tersebut mengabaikan ibadahnya',
      'Mengeluarkan kelompok tersebut dari kepanitiaan',
    ],
    correctIndex: 1,
    optionFeedback: [
      'Mengabaikan waktu ibadah membuat sebagian peserta tersisih dan melanggar kebebasan menjalankan agama.',
      'Menjadwalkan ulang atau memberi jeda menunjukkan toleransi dan penghormatan pada ibadah.',
      'Meminta mereka mengabaikan ibadah merendahkan keyakinan mereka. Ibadah bukan hal yang bisa dikesampingkan demi acara.',
      'Mengeluarkan mereka dari kepanitiaan adalah diskriminasi dan menghukum pihak yang justru ingin menjalankan agamanya.',
    ],
    explanation: 'Memberi jeda waktu untuk ibadah menunjukkan toleransi dan penghormatan terhadap kebebasan beragama sesuai sila pertama.',
    nilaiPancasila: 'Toleransi dan penghormatan terhadap pelaksanaan ibadah semua umat beragama.',
  },
  {
    id: 'kasus-kepedulian-sosial',
    topic: 'Kepedulian Sosial',
    silaTerkait: 5,
    title: 'Teman yang Kesulitan Membayar Kuliah',
    permasalahan:
      'Dani, mahasiswa semester lima, mulai sering absen dan tampak murung. Sahabatnya, Keisha, mengetahui bahwa orang tua Dani sedang kesulitan ekonomi sehingga Dani belum bisa membayar biaya kuliah. Dani malu dan tidak mau meminta bantuan siapa pun.',
    upaya:
      'Keisha tidak membicarakan hal itu di depan umum. Ia mengajak beberapa teman dekat menggalang dana secara pribadi dan menyalurkannya lewat bendahara kelas. Mereka juga menginformasikan beasiswa dan keringanan biaya dari kampus kepada Dani dengan halus.',
    hasil:
      'Dana terkumpul cukup untuk menutup sebagian biaya, dan Dani berhasil mengurus keringanan dari kampus. Ia tetap bisa melanjutkan kuliah tanpa merasa dipermalukan.',
    pengalaman:
      'Membantu tidak harus ramai. Menjaga rasa malu dan martabat seseorang sama pentingnya dengan bantuan itu sendiri.',
    nilai: [
      { sila: 5, alasan: 'Kepedulian terhadap sesama membuat kesejahteraan lebih merata.' },
      { sila: 2, alasan: 'Membantu tanpa mempermalukan menjaga martabat teman.' },
    ],
    question:
      'Seorang mahasiswa melihat temannya kesulitan membayar biaya kuliah namun malu untuk meminta bantuan. Sikap yang mencerminkan Pancasila adalah...',
    prompt: 'Kamu tahu temanmu kesulitan tetapi ia enggan meminta bantuan. Apa yang kamu lakukan?',
    options: [
      'Menginisiasi penggalangan dana bersama teman-teman lain secara diam-diam agar tidak mempermalukan',
      'Mengabaikan karena bukan tanggung jawab pribadi',
      'Menyebarkan kondisi temannya ke banyak orang tanpa izin',
      'Menjauhi teman tersebut',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Membantu secara bijak dan diam-diam menjaga martabat teman sekaligus meringankan bebannya.',
      'Mengabaikan membuat temanmu menanggung beban sendirian padahal bantuan kecil bisa sangat berarti.',
      'Menyebarkan kondisi tanpa izin mempermalukan temanmu dan melanggar privasinya, meskipun niatnya mungkin baik.',
      'Menjauhi justru menambah rasa kesepian. Pada saat sulit, teman membutuhkan kehadiran, bukan jarak.',
    ],
    explanation: 'Menginisiasi bantuan secara bijak dan menjaga martabat teman mencerminkan kepedulian sosial sesuai sila kelima dan kedua Pancasila.',
    nilaiPancasila: 'Kepedulian sosial dan kepekaan terhadap kesulitan sesama.',
  },
  {
    id: 'kasus-lingkungan-hidup',
    topic: 'Lingkungan',
    silaTerkait: 5,
    title: 'Limbah Pabrik Mencemari Sungai',
    permasalahan:
      'Sebuah pabrik di tepi sungai membuang limbah cair tanpa diolah. Warga sekitar masih memakai air sungai untuk mandi dan mencuci, dan beberapa mulai mengeluh gatal-gatal serta ikan yang mati. Banyak warga ragu bersuara karena sebagian anggota keluarga bekerja di pabrik itu.',
    upaya:
      'Sekelompok warga, termasuk Pak Joko, mengumpulkan foto dan catatan kondisi sungai serta mengajak warga berdiskusi. Mereka lalu melapor kepada dinas lingkungan hidup dan meminta pertemuan dengan pihak pabrik untuk mencari solusi.',
    hasil:
      'Dinas lingkungan memeriksa pabrik dan mewajibkan pemasangan instalasi pengolahan limbah. Kualitas air sungai berangsur membaik dan pabrik tetap beroperasi.',
    pengalaman:
      'Kepentingan ekonomi dan keselamatan warga bisa berjalan bersama jika aturan dijalankan. Melapor dengan bukti membantu masalah ditangani dengan benar.',
    nilai: [
      { sila: 5, alasan: 'Lingkungan yang sehat adalah hak semua warga dan bagian dari kesejahteraan bersama.' },
    ],
    question:
      'Sebuah pabrik membuang limbah ke sungai yang digunakan warga sekitar untuk kebutuhan sehari-hari. Sikap yang sesuai nilai Pancasila adalah...',
    prompt: 'Kamu tinggal di dekat sungai itu. Apa sikapmu?',
    options: [
      'Membiarkan karena pabrik memberi lapangan kerja',
      'Ikut membuang sampah ke sungai karena sudah tercemar',
      'Melaporkan kepada pihak berwenang agar lingkungan dan kesejahteraan warga terlindungi',
      'Diam saja karena bukan urusan pribadi',
    ],
    correctIndex: 2,
    optionFeedback: [
      'Lapangan kerja penting, tetapi kesehatan warga tidak boleh dikorbankan. Keduanya bisa dijaga bersama.',
      'Ikut mencemari memperparah masalah dan merugikan seluruh warga. Tindakan salah tidak dibenarkan hanya karena orang lain melakukannya.',
      'Melapor dengan bukti melindungi lingkungan dan kesejahteraan warga tanpa harus menutup mata pada lapangan kerja.',
      'Diam membuat pencemaran terus berlangsung. Lingkungan adalah urusan semua orang yang hidup di sekitarnya.',
    ],
    explanation: 'Melaporkan pencemaran lingkungan demi melindungi kesejahteraan warga mencerminkan keadilan sosial dan tanggung jawab bersama.',
    nilaiPancasila: 'Keadilan sosial melalui perlindungan lingkungan hidup bagi kesejahteraan bersama.',
  },
  {
    id: 'kasus-etika-digital',
    topic: 'Etika Digital',
    silaTerkait: 2,
    title: 'Kebiasaan Berkomentar Kasar di Media Sosial',
    permasalahan:
      'Arga biasa menulis komentar pedas dan menghina akun yang tidak sependapat dengannya. Baginya itu sekadar candaan karena yang diserang tidak ia kenal. Suatu hari, temannya menunjukkan bahwa salah satu akun yang ia hina ternyata dikelola orang yang cukup dekat dengan mereka.',
    upaya:
      'Arga merasa bersalah, lalu meminta maaf kepada pemilik akun itu secara langsung. Ia mulai membiasakan membaca ulang komentarnya sebelum mengirim, dan menyampaikan perbedaan pendapat dengan alasan, bukan hinaan.',
    hasil:
      'Pemilik akun menerima permintaan maaf itu dan diskusi mereka berubah menjadi lebih sehat. Arga juga mendapat teman diskusi baru yang pendapatnya berbeda.',
    pengalaman:
      'Di balik akun selalu ada manusia dengan perasaan. Dunia maya tetap bagian dari kehidupan nyata, sehingga adab perlu dibawa ke mana pun.',
    nilai: [
      { sila: 2, alasan: 'Menghargai orang lain, termasuk saat berbeda pendapat di dunia digital, mencerminkan sikap beradab.' },
    ],
    question:
      'Seorang pengguna media sosial terbiasa berkomentar kasar dan menghina akun lain yang berbeda pendapat. Sikap yang sesuai nilai Pancasila adalah...',
    prompt: 'Kamu sadar kebiasaanmu berkomentar kasar menyakiti orang. Apa yang kamu lakukan?',
    options: [
      'Melanjutkan kebiasaan tersebut karena hanya di dunia maya',
      'Membuat akun palsu untuk terus menghina',
      'Mengajak orang lain untuk ikut menghina',
      'Mengubah cara berkomunikasi menjadi lebih santun meski berbeda pendapat',
    ],
    correctIndex: 3,
    optionFeedback: [
      'Dunia maya tetap menyentuh perasaan orang sungguhan. Kekasaran di sana tetap melukai.',
      'Akun palsu untuk menghina menambah kesalahan baru: menyembunyikan identitas demi menyakiti orang.',
      'Mengajak orang lain menghina memperbesar dampaknya dan bisa dianggap sebagai perundungan bersama.',
      'Berkomunikasi dengan santun, walau berbeda pendapat, adalah wujud adab dalam etika digital.',
    ],
    explanation: 'Berkomunikasi secara santun meski berbeda pendapat di media sosial mencerminkan nilai kemanusiaan yang adil dan beradab dalam etika digital.',
    nilaiPancasila: 'Etika digital yang menjunjung tinggi kemanusiaan dalam berinteraksi di dunia maya.',
  },
  {
    id: 'kasus-hoaks-pemilu',
    topic: 'Hoaks',
    silaTerkait: 4,
    title: 'Berita Bohong Menjelang Pemilu',
    permasalahan:
      'Menjelang pemilihan umum, beredar pesan berantai yang menuduh salah satu kandidat melakukan perbuatan tercela. Pesan itu tidak menyertakan bukti dan cepat menyebar di grup keluarga serta media sosial. Warga mulai saling berdebat dan curiga satu sama lain.',
    upaya:
      'Lina, salah satu anggota grup keluarga, tidak ikut meneruskannya. Ia menelusuri kebenaran pesan lewat situs pemeriksa fakta dan berita dari media tepercaya, lalu membagikan hasil pengecekannya dengan bahasa yang sopan.',
    hasil:
      'Pesan itu terbukti tidak benar, dan beberapa anggota grup menghapus unggahan mereka. Perdebatan di grup mereda, dan anggota keluarga lebih berhati-hati sebelum membagikan informasi.',
    pengalaman:
      'Setiap orang bisa menjadi penyaring informasi. Satu kali mengecek fakta dapat mencegah pemilih salah paham dan menjaga pemilu tetap sehat.',
    nilai: [
      { sila: 4, alasan: 'Pemilu yang jujur membutuhkan warga yang memilih berdasarkan informasi benar.' },
      { sila: 3, alasan: 'Menahan hoaks mencegah warga terpecah karena perbedaan pilihan.' },
    ],
    question:
      'Menjelang pemilihan umum, beredar berita bohong yang menjatuhkan salah satu kandidat di media sosial. Sikap yang tepat sebagai warga negara adalah...',
    prompt: 'Kamu menerima pesan itu di grup. Apa langkahmu?',
    options: [
      'Ikut menyebarkan agar kandidat favorit menang',
      'Memeriksa kebenaran berita dan tidak ikut menyebarkan hoaks',
      'Membiarkan saja karena bukan tanggung jawabnya',
      'Membuat berita bohong tandingan',
    ],
    correctIndex: 1,
    optionFeedback: [
      'Menyebarkan kabar bohong demi kandidat favorit adalah kecurangan terhadap demokrasi dan memecah belah warga.',
      'Mengecek kebenaran sebelum berbagi menjaga kualitas pemilu dan mencegah perpecahan.',
      'Diam saja membiarkan hoaks terus menyebar. Warga yang paham punya andil meluruskannya.',
      'Membalas hoaks dengan hoaks hanya menambah kebohongan. Pemilu yang bersih butuh informasi yang benar.',
    ],
    explanation: 'Memeriksa kebenaran berita sebelum menyebarkannya menjaga kualitas demokrasi dan mencegah kerusakan persatuan akibat hoaks pemilu.',
    nilaiPancasila: 'Menjaga demokrasi yang jujur dan bersih dari informasi bohong.',
  },
  {
    id: 'kasus-cyberbullying-game-online',
    topic: 'Cyberbullying',
    silaTerkait: 2,
    title: 'Dihina Saat Bermain Game Online',
    permasalahan:
      'Dalam sebuah permainan beregu, seorang pemain baru bernama Rafi beberapa kali kalah dan langsung dihujani hinaan lewat obrolan suara dan teks. Beberapa pemain lain tertawa, bahkan ada yang menyuruhnya berhenti bermain. Rafi mulai terdiam dan tampak ingin keluar.',
    upaya:
      'Seorang pemain lain, Kevin, menegur para penghina dengan tenang dan mengingatkan bahwa semua orang pernah jadi pemula. Ia menyapa Rafi lewat obrolan, memberi tips permainan, dan melaporkan akun yang terus menghina lewat fitur laporan.',
    hasil:
      'Penghinaan berhenti dan Rafi bertahan bermain. Beberapa pemain lain ikut meminta maaf dan bermain lebih santun.',
    pengalaman:
      'Bahkan di ruang permainan, perundungan tetap menyakiti. Satu orang yang berani bersikap bisa mengubah suasana seluruh tim.',
    nilai: [
      { sila: 2, alasan: 'Menghormati sesama pemain berarti menjaga martabat manusia di ruang digital.' },
    ],
    question:
      'Dalam sebuah permainan daring (game online), seorang pemain terus-menerus dihina karena kemampuan bermainnya dianggap buruk. Sikap yang tepat sebagai sesama pemain adalah...',
    prompt: 'Kamu satu tim dengan Rafi dan melihat ia dihina. Apa tindakanmu?',
    options: [
      'Menegur pelaku dan mendukung pemain yang menjadi korban',
      'Ikut menghina agar tidak dianggap lemah',
      'Merekam untuk ditertawakan bersama',
      'Keluar dari permainan tanpa melakukan apa pun',
    ],
    correctIndex: 0,
    optionFeedback: [
      'Menegur pelaku dan mendukung korban melindungi martabat sesama pemain.',
      'Ikut menghina agar terlihat kuat justru menjadikanmu bagian dari perundungan dan menambah luka korban.',
      'Merekam untuk ditertawakan memperluas penghinaan dan mempermalukan korban di depan lebih banyak orang.',
      'Keluar tanpa berbuat apa-apa membuat korban tetap sendirian. Dukungan sederhana atau laporan sudah sangat membantu.',
    ],
    explanation: 'Menegur pelaku dan mendukung korban perundungan daring mencerminkan penghormatan terhadap harkat dan martabat manusia sesuai sila kedua.',
    nilaiPancasila: 'Melindungi harkat dan martabat manusia dari perundungan di ruang digital.',
  },
  {
    id: 'kasus-persatuan-generasi-muda',
    topic: 'Persatuan Generasi Muda',
    silaTerkait: 3,
    title: 'Peringatan Sumpah Pemuda Lintas Organisasi',
    permasalahan:
      'Beberapa organisasi kepemudaan di satu kota ingin memperingati Hari Sumpah Pemuda. Masing-masing berencana membuat acara sendiri, sehingga jadwal bertabrakan dan sumber daya terbagi-bagi. Ada pula anggota yang merasa organisasinya lebih pantas menjadi penyelenggara utama.',
    upaya:
      'Perwakilan tiap organisasi, salah satunya Citra, bertemu dan sepakat menyusun satu acara bersama. Tugas dibagi sesuai kemampuan: ada yang mengurus lomba, pentas seni, dan bakti sosial. Panitia gabungan dibentuk dan keputusan diambil secara musyawarah.',
    hasil:
      'Acara berlangsung meriah dan dihadiri banyak pemuda dari berbagai latar belakang. Hubungan antarorganisasi menjadi lebih erat setelahnya.',
    pengalaman:
      'Persatuan dimulai dari kemauan bekerja bersama meski berbeda. Semangat Sumpah Pemuda hidup ketika pemuda mengutamakan tujuan bersama.',
    nilai: [
      { sila: 3, alasan: 'Kolaborasi lintas organisasi mencerminkan persatuan generasi muda.' },
      { sila: 4, alasan: 'Keputusan diambil bersama lewat musyawarah.' },
    ],
    question:
      'Sekelompok pemuda dari berbagai organisasi kepemudaan berencana mengadakan kegiatan bersama untuk memperingati Hari Sumpah Pemuda. Sikap yang mencerminkan Pancasila adalah...',
    prompt: 'Kamu perwakilan salah satu organisasi tersebut. Apa yang kamu usulkan?',
    options: [
      'Setiap organisasi bekerja sendiri-sendiri tanpa koordinasi',
      'Saling bersaing untuk menjatuhkan organisasi lain',
      'Membatalkan kegiatan karena berbeda latar belakang organisasi',
      'Berkolaborasi lintas organisasi demi kesuksesan acara bersama',
    ],
    correctIndex: 3,
    optionFeedback: [
      'Bekerja sendiri-sendiri memecah tenaga dan membuat peringatan terasa kurang bermakna.',
      'Bersaing untuk menjatuhkan organisasi lain bertentangan dengan semangat persatuan dan merugikan semua pihak.',
      'Membatalkan karena beda organisasi membuang peluang bersatu. Perbedaan justru alasan untuk saling melengkapi.',
      'Berkolaborasi lintas organisasi mewujudkan semangat persatuan Sumpah Pemuda.',
    ],
    explanation: 'Berkolaborasi lintas organisasi mencerminkan semangat persatuan generasi muda sesuai sila ketiga Pancasila dan nilai Sumpah Pemuda.',
    nilaiPancasila: 'Persatuan dan kolaborasi generasi muda lintas organisasi demi kemajuan bangsa.',
  },
];

const QUIZ_DATA = [
  {
    question: 'Pancasila terdiri dari berapa sila?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    explanation: 'Pancasila terdiri dari 5 sila yang menjadi dasar negara Indonesia.',
  },
  {
    question: 'Siapa yang pertama kali memperkenalkan istilah "Pancasila" dalam pidatonya?',
    options: ['Mohammad Hatta', 'Ir. Soekarno', 'Soepomo', 'Mohammad Yamin'],
    correctIndex: 1,
    explanation: 'Ir. Soekarno memperkenalkan istilah Pancasila dalam pidato 1 Juni 1945.',
  },
  {
    question: 'Lambang sila ke-3 Pancasila adalah...',
    options: ['Bintang', 'Pohon Beringin', 'Kepala Banteng', 'Padi dan Kapas'],
    correctIndex: 1,
    explanation: 'Pohon beringin melambangkan sila ketiga, Persatuan Indonesia.',
  },
  {
    question: 'Musyawarah untuk mufakat merupakan pengamalan dari sila ke...',
    options: ['1', '2', '4', '5'],
    correctIndex: 2,
    explanation: 'Sila keempat menekankan musyawarah dalam pengambilan keputusan bersama.',
  },
  {
    question: 'Sikap toleransi antar umat beragama mencerminkan pengamalan sila ke...',
    options: ['1', '2', '3', '4'],
    correctIndex: 0,
    explanation: 'Sila pertama, Ketuhanan Yang Maha Esa, menekankan toleransi antar umat beragama.',
  },
  {
    question: 'Pancasila disahkan sebagai dasar negara pada tanggal...',
    options: ['1 Juni 1945', '17 Agustus 1945', '18 Agustus 1945', '28 Oktober 1945'],
    correctIndex: 2,
    explanation: 'Pancasila disahkan dalam sidang PPKI pada 18 Agustus 1945.',
  },
  {
    question: 'Nilai yang dijabarkan dalam bentuk undang-undang dan peraturan disebut nilai...',
    options: ['Dasar', 'Instrumental', 'Praksis', 'Universal'],
    correctIndex: 1,
    explanation: 'Nilai instrumental adalah penjabaran nilai dasar ke dalam peraturan konkret.',
  },
  {
    question: 'Sikap paling bijak menghadapi berita yang belum jelas kebenarannya adalah...',
    options: [
      'Langsung menyebarkannya',
      'Memeriksa kebenaran informasi terlebih dahulu',
      'Mengabaikan sepenuhnya',
      'Menambahkan opini pribadi',
    ],
    correctIndex: 1,
    explanation: 'Cek fakta sebelum menyebarkan informasi mencerminkan tanggung jawab digital yang selaras dengan Pancasila.',
  },
  {
    question: 'Lambang sila ke-5 Pancasila adalah...',
    options: ['Bintang', 'Rantai', 'Kepala Banteng', 'Padi dan Kapas'],
    correctIndex: 3,
    explanation: 'Padi dan kapas melambangkan sila kelima, Keadilan Sosial bagi Seluruh Rakyat Indonesia.',
  },
  {
    question: 'Gotong royong dalam kegiatan kampus mencerminkan nilai sila ke...',
    options: ['1', '2', '3', '5'],
    correctIndex: 2,
    explanation: 'Gotong royong mencerminkan nilai persatuan pada sila ketiga.',
  },
];

const ACHIEVEMENT_DATA = [
  { id: 'first-step', icon: '🥇', title: 'First Step', description: 'Menyelesaikan pembelajaran pertama.' },
  { id: 'streak-5', icon: '🔥', title: '5 Day Streak', description: 'Belajar selama 5 hari berturut-turut.' },
  { id: 'quiz-master', icon: '🧠', title: 'Quiz Master', description: 'Mendapatkan nilai tinggi pada quiz.' },
  { id: 'case-solver', icon: '🧩', title: 'Case Solver', description: 'Menyelesaikan beberapa studi kasus.' },
  { id: 'pancasila-master', icon: '🏆', title: 'Pancasila Master', description: 'Menyelesaikan seluruh materi.' },
];

const LEVEL_DATA = [
  { level: 1, title: 'Pancasila Beginner', minXp: 0 },
  { level: 2, title: 'Pancasila Explorer', minXp: 300 },
  { level: 3, title: 'Pancasila Learner', minXp: 800 },
  { level: 4, title: 'Pancasila Master', minXp: 1500 },
  { level: 5, title: 'Pancasila Champion', minXp: 2500 },
];

const XP_REWARDS = {
  materi: 50,
  studiKasus: 30,
  quiz: 150,
  challenge: 100,
};

const TEAM_DATA = [
  { name: 'Agil Dwi Pratama', role: 'Frontend Developer', desc: 'Mengembangkan struktur website, interface, interaksi, dan responsive design PancaLearn.', initials: 'AP' },
  { name: 'Dominico Jose Wibowo', role: 'UI/UX Designer', desc: 'Merancang user interface, user experience, layout, dan visual design PancaLearn.', initials: 'DW' },
  { name: 'Muhammad Syaeppuddin', role: 'Content & Research', desc: 'Mengembangkan materi pembelajaran, studi kasus, serta melakukan riset konten Pancasila.', initials: 'MS' },
  { name: 'Muhammad Mukhtasor Jidan', role: 'AI / Backend Developer', desc: 'Mengembangkan backend, integrasi PancaAI, API, dan fitur AI pada PancaLearn.', initials: 'MJ' },
  { name: 'Soutan Maulana Alfarizi', role: 'QA / Tester', desc: 'Melakukan pengujian fitur, menemukan bug, dan memastikan website berjalan dengan baik.', initials: 'SA' },
];

function getTodayChallenges() {
  return [
    { id: 'daily-3-kasus', type: 'daily', title: 'Selesaikan 3 studi kasus hari ini', target: 3, metric: 'casesToday', reward: 150 },
    { id: 'daily-1-quiz', type: 'daily', title: 'Selesaikan 1 quiz hari ini', target: 1, metric: 'quizzesToday', reward: 100 },
    { id: 'weekly-5-materi', type: 'weekly', title: 'Pelajari 5 materi minggu ini', target: 5, metric: 'materiThisWeek', reward: 200 },
  ];
}
