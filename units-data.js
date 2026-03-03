/**
 * units-data.js
 * Shared unit data for rooms.html and room-detail.html
 */

const UNITS = [
  {
    id: 'A-03-37', tower: 'A', floor: 3, type: 'Studio', view: 'Mountain',
    interior: 'Kosongan AC', capacity: 2, price: 500000, size: 26,
    status: 'monthly',
    description: 'Unit studio nyaman di lantai 3 Tower A dengan pemandangan pegunungan yang menenangkan. Dilengkapi AC terpasang, cocok bagi Anda yang membawa furnitur sendiri. Lokasi dekat lift dan tangga darurat, sangat praktis untuk kehidupan sehari-hari.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['AC Split', 'Water Heater', 'Kamar Mandi Dalam', 'Area Parkir', 'Lift', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Dewi R.', avatar: 'DR', rating: 5, date: 'Februari 2026', text: 'Unit bersih, lokasi strategis, AC dingin. Cocok banget buat anak kos yang mau nyaman tanpa repot.' },
      { name: 'Ahmad F.', avatar: 'AF', rating: 4, date: 'Januari 2026', text: 'Harga terjangkau untuk kualitasnya. Akses ke mall sekitar hanya 10 menit. Recommended!' },
      { name: 'Sari P.', avatar: 'SP', rating: 5, date: 'Desember 2025', text: 'Staff ramah dan responsif. Unit sesuai foto. Saya sudah 3 bulan di sini dan betah.' },
    ]
  },
  {
    id: 'A-11-62', tower: 'A', floor: 11, type: '2BR', view: 'Sky Garden',
    interior: 'Furnished', capacity: 2, price: 700000, size: 48,
    status: 'monthly',
    description: 'Unit 2 Bedroom yang luas di lantai 11 dengan pemandangan Sky Garden yang asri. Sudah fully furnished dengan perabot premium — sofa, kasur, lemari, dan dapur lengkap siap pakai. Ideal untuk pasangan atau keluarga kecil yang menginginkan kenyamanan tanpa repot.',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['Fully Furnished', 'AC Split x2', 'Dapur Lengkap', 'Water Heater', 'WiFi Ready', 'Balkon', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Budi S.', avatar: 'BS', rating: 5, date: 'Maret 2026', text: 'Sangat nyaman! Pemandangan taman dari lantai 11 sungguh indah di pagi hari. Furnitur rapi dan bersih.' },
      { name: 'Linda K.', avatar: 'LK', rating: 5, date: 'Februari 2026', text: 'Rumah kedua kami. Sudah kontrak 1 tahun dan renew lagi. Pihak manajemen sangat kooperatif.' },
      { name: 'Hendra W.', avatar: 'HW', rating: 4, date: 'Januari 2026', text: 'Unit bagus, full furnished. Hanya perlu tambah satu rak buku tapi secara keseluruhan memuaskan.' },
    ]
  },
  {
    id: 'A-26-21', tower: 'A', floor: 26, type: 'Studio', view: 'Pool',
    interior: 'Kosongan', capacity: 2, price: 500000, size: 26,
    status: 'available',
    description: 'Studio di lantai tinggi dengan view kolam renang yang menakjubkan. Unit kosongan yang siap ditata sesuai selera Anda. Dari lantai 26, Anda bisa menikmati panorama kota Surabaya sekaligus pemandangan kolam renang rooftop.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['View Kolam Renang', 'Kamar Mandi Dalam', 'Area Parkir', 'Lift Express', 'Keamanan 24 Jam', 'CCTV'],
    reviews: [
      { name: 'Rina A.', avatar: 'RA', rating: 5, date: 'Maret 2026', text: 'Pemandangan kolam renang dari lantai 26 itu WOW. Unit kosongan tapi saya tata sendiri jadi sangat personal.' },
      { name: 'Fajar M.', avatar: 'FM', rating: 4, date: 'Januari 2026', text: 'Harga wajar untuk view sebagus ini. Proses administrasi cepat dan mudah.' },
    ]
  },
  {
    id: 'A-26-35', tower: 'A', floor: 26, type: 'Studio', view: 'Pool',
    interior: 'Furnished', capacity: 2, price: 550000, size: 26,
    status: 'available',
    description: 'Studio furnished di lantai 26 dengan view pool. Paket lengkap: kasur, lemari, meja, kursi, dan dapur mini sudah tersedia. Pilihan sempurna bagi profesional muda yang menginginkan hunian impresif tanpa perlu ribet.',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['Semi Furnished', 'AC Split', 'View Pool', 'Dapur Mini', 'Water Heater', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Maya T.', avatar: 'MT', rating: 5, date: 'Februari 2026', text: 'Perfect buat solo living! Unit furnished lengkap, view pool, harga terjangkau. Paling worth it!' },
      { name: 'Doni P.', avatar: 'DP', rating: 5, date: 'Januari 2026', text: 'Saya kerja remote dari unit ini, sangat produktif. View kolam renang bikin semangat kerja.' },
      { name: 'Yesi L.', avatar: 'YL', rating: 4, date: 'Desember 2025', text: 'Bagus! Cuma kasur perlu diganti yang baru. Tapi overall sangat puas.' },
    ]
  },
  {
    id: 'A-26-61', tower: 'A', floor: 26, type: '2BR', view: 'City',
    interior: 'Furnished', capacity: 7, price: 800000, size: 48,
    status: 'daily',
    description: 'Unit 2 Bedroom eksklusif di lantai 26 dengan city view yang memukau. Cocok untuk tamu rombongan hingga 7 orang. Dilengkapi dengan furnitur premium, dapur lengkap, 2 kamar mandi, dan ruang tamu yang luas. Tersedia untuk sewa harian.',
    images: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['Fully Furnished', 'AC x2', 'City View', 'Dapur Lengkap', '2 Kamar Mandi', 'Water Heater', 'WiFi', 'Kapasitas 7 Orang'],
    reviews: [
      { name: 'Kevin A.', avatar: 'KA', rating: 5, date: 'Maret 2026', text: 'Dipakai untuk liburan keluarga besar. Kapasitas 7 orang sangat cocok. View kota di malam hari spektakuler!' },
      { name: 'Tina S.', avatar: 'TS', rating: 5, date: 'Februari 2026', text: 'Kami rombongan 6 orang. Unit lega, bersih, dan fasilitas lengkap. Pasti balik lagi!' },
    ]
  },
  {
    id: 'B-05-36', tower: 'B', floor: 5, type: '3BR', view: 'Sea',
    interior: 'Kosongan AC', capacity: 4, price: 900000, size: 72,
    status: 'available',
    description: 'Unit 3 Bedroom terluas di Tower B dengan pemandangan laut yang menakjubkan. Sangat cocok untuk keluarga besar. Unit kosongan ber-AC sehingga Anda bebas menata sesuai kebutuhan. Langit biru dan horizon laut terlihat jelas dari unit ini.',
    images: [
      'https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['3 Kamar Tidur', 'AC x3', 'Sea View', '2 Kamar Mandi', 'Ruang Tamu Luas', 'Area Parkir x2', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Arif H.', avatar: 'AH', rating: 5, date: 'Maret 2026', text: 'Unit terbesar yang pernah saya sewa. Pemandangan laut dari lantai 5 sungguh premium. Highly recommended.' },
      { name: 'Nadia C.', avatar: 'NC', rating: 4, date: 'Februari 2026', text: 'Cocok untuk keluarga besar. 3 kamar cukup untuk semua anggota keluarga kami.' },
    ]
  },
  {
    id: 'B-06-09', tower: 'B', floor: 6, type: 'Studio', view: 'Mountain',
    interior: 'Semi Furnished', capacity: 2, price: 480000, size: 26,
    status: 'available',
    description: 'Studio semi furnished yang terjangkau di Tower B lantai 6. Sudah tersedia kasur, lemari, dan AC — tinggal tambahkan sentuhan personal Anda. View pegunungan memberikan suasana tenang di setiap pagi.',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['Semi Furnished', 'AC Split', 'Mountain View', 'Water Heater', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Rizky F.', avatar: 'RF', rating: 5, date: 'Maret 2026', text: 'Harga paling terjangkau tapi kualitas tidak murahan. Semi furnished cukup untuk kebutuhan saya.' },
      { name: 'Cindy L.', avatar: 'CL', rating: 4, date: 'Februari 2026', text: 'Nyaman untuk ditempati. Pemandangan gunung di pagi hari sangat menyegarkan.' },
    ]
  },
  {
    id: 'B-12-29', tower: 'B', floor: 12, type: 'Studio', view: 'Mountain',
    interior: 'Kosongan', capacity: 1, price: 450000, size: 26,
    status: 'monthly',
    description: 'Studio kosongan di lantai 12 Tower B. Cocok untuk 1 orang yang ingin menata hunian dari nol dengan anggaran terjangkau. Dari lantai 12, pemandangan pegunungan sangat jelas dan segar.',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['AC Kosongan', 'Mountain View', 'Kamar Mandi Dalam', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Dimas A.', avatar: 'DA', rating: 4, date: 'Januari 2026', text: 'Harga paling murah di kompleks ini. Cocok buat yang baru mulai kerja dan ingin menabung.' },
    ]
  },
  {
    id: 'B-15-29', tower: 'B', floor: 15, type: 'Studio', view: 'Mountain',
    interior: 'Kosongan AC', capacity: 2, price: 500000, size: 26,
    status: 'available',
    description: 'Studio di lantai 15 dengan AC terpasang dan pemandangan pegunungan yang indah. Unit kosongan siap ditata sesuai keinginan. Posisi lantai pertengahan memberikan akses yang nyaman dan view yang optimal.',
    images: [
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['AC Split', 'Mountain View', 'Water Heater', 'Kamar Mandi Dalam', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Bagas R.', avatar: 'BR', rating: 5, date: 'Februari 2026', text: 'Unit nyaman, bersih, dan view pegunungan dari lantai 15 sangat memanjakan mata.' },
      { name: 'Vera H.', avatar: 'VH', rating: 4, date: 'Januari 2026', text: 'Proses sewa mudah dan cepat. Unit sesuai ekspektasi.' },
    ]
  },
  {
    id: 'B-17-29', tower: 'B', floor: 17, type: 'Studio', view: 'Mountain',
    interior: 'Kosongan AC', capacity: 2, price: 500000, size: 26,
    status: 'available',
    description: 'Studio dengan AC di lantai 17 Tower B. Semakin tinggi lantainya, semakin spektakuler pemandangan pegunungannya. Unit kosongan yang fleksibel untuk Anda personalisasi sesuai gaya hidup.',
    images: [
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['AC Split', 'Mountain View', 'Water Heater', 'Kamar Mandi Dalam', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Andi S.', avatar: 'AS', rating: 5, date: 'Maret 2026', text: 'View gunung dari lantai 17 luar biasa! Harga sesuai kualitas, sangat merekomendasikan.' },
    ]
  },
  {
    id: 'B-19-30', tower: 'B', floor: 19, type: 'Studio', view: 'Mountain',
    interior: 'Kosongan AC', capacity: 2, price: 520000, size: 26,
    status: 'available',
    description: 'Studio di lantai 19 — tinggi, tenang, dan berparamandangan indah. Dilengkapi AC untuk kenyamanan. Unit kosongan yang siap menjadi rumah impian Anda.',
    images: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['AC Split', 'High Floor View', 'Water Heater', 'Kamar Mandi Dalam', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Putri N.', avatar: 'PN', rating: 5, date: 'Maret 2026', text: 'Suka banget unit ini! Tinggi tapi tidak terlalu jauh dari bawah. Pemandangan indah setiap hari.' },
      { name: 'Irfan M.', avatar: 'IM', rating: 5, date: 'Januari 2026', text: 'Tenang, bersih, dan view memanjakan. Sangat cocok untuk work from home.' },
    ]
  },
  {
    id: 'B-20-20', tower: 'B', floor: 20, type: 'Studio', view: 'Pool',
    interior: 'Kosongan', capacity: 2, price: 500000, size: 26,
    status: 'monthly',
    description: 'Studio kosongan di lantai 20 dengan pemandangan kolam renang. Bagi pecinta kolam renang, unit ini memberikan akses visual yang selalu menyenangkan dari ketinggian.',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['Pool View', 'Kamar Mandi Dalam', 'Area Parkir', 'Lift Express', 'Keamanan 24 Jam', 'CCTV'],
    reviews: [
      { name: 'Reza K.', avatar: 'RK', rating: 4, date: 'Februari 2026', text: 'View kolam renang sangat relaxing. Suka sekali dengan suasana unit ini.' },
    ]
  },
  {
    id: 'B-25-30', tower: 'B', floor: 25, type: 'Studio', view: 'Mountain',
    interior: 'Kosongan AC', capacity: 2, price: 550000, size: 26,
    status: 'available',
    description: 'Studio premium di lantai 25 — hampir di puncak Tower B. Dengan AC terpasang dan pemandangan pegunungan 180 derajat, unit ini memberikan pengalaman tinggal yang benar-benar berbeda.',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['AC Split', 'High Floor Mountain View', 'Water Heater', 'Kamar Mandi Dalam', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Gilang P.', avatar: 'GP', rating: 5, date: 'Maret 2026', text: 'Lantai 25 view gunung — surga dunia! Bisa lihat bintang dari jendela malam hari.' },
      { name: 'Nisa F.', avatar: 'NF', rating: 5, date: 'Februari 2026', text: 'Best unit di Tower B menurut saya. Harga worth banget untuk pemandangan seperti ini.' },
    ]
  },
  {
    id: 'B-26-21', tower: 'B', floor: 26, type: 'Studio', view: 'Pool',
    interior: 'Kosongan AC', capacity: 2, price: 560000, size: 26,
    status: 'available',
    description: 'Studio di lantai paling tinggi Tower B dengan view kolam renang. Kombinasi sempurna antara ketinggian dan pemandangan air yang menenangkan. AC split sudah terpasang.',
    images: [
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['AC Split', 'Pool View', 'Top Floor', 'Water Heater', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Hani W.', avatar: 'HW', rating: 5, date: 'Maret 2026', text: 'Paling atas, view kolam renang, harga kompetitif. Tidak ada yang lebih baik dari ini!' },
      { name: 'Taufik R.', avatar: 'TR', rating: 4, date: 'Januari 2026', text: 'Sangat puas. Unit bersih, AC dingin, dan view pool selalu menyenangkan.' },
    ]
  },
  {
    id: 'B-27-32', tower: 'B', floor: 27, type: '2BR', view: 'Sea',
    interior: 'Furnished', capacity: 1, price: 750000, size: 48,
    status: 'monthly',
    description: 'Unit 2 Bedroom eksklusif di Tower B lantai 27 dengan pemandangan laut yang tiada duanya. Fully furnished dengan furnitur pilihan. Dari ketinggian ini, Anda bisa menikmati matahari terbenam di atas laut setiap sore.',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80&auto=format&fit=crop',
    ],
    facilities: ['Fully Furnished', 'AC x2', 'Sea View', 'Sunset View', 'Dapur Lengkap', 'Water Heater', 'Area Parkir', 'Keamanan 24 Jam'],
    reviews: [
      { name: 'Christopher T.', avatar: 'CT', rating: 5, date: 'Maret 2026', text: 'The sea view from floor 27 is absolutely stunning. Best apartment in Surabaya, no doubt.' },
      { name: 'Margareta S.', avatar: 'MS', rating: 5, date: 'Februari 2026', text: 'Sunset setiap hari dari unit ini tidak ternilai. Sangat worth untuk harganya.' },
      { name: 'Bimo A.', avatar: 'BA', rating: 5, date: 'Januari 2026', text: 'Unit paling premium yang pernah saya tempati. Furnitur mewah, view laut, layanan top!' },
    ]
  },
];

/* ─────────────────────────────────────────
   Shared helpers
───────────────────────────────────────── */
const STATUS_LABEL = { available: 'Tersedia', monthly: 'Monthly', daily: 'Daily', yearly: 'Yearly' };
const STATUS_CLASS  = { available: 'badge-available', monthly: 'badge-monthly', daily: 'badge-daily', yearly: 'badge-yearly' };
const VIEW_ICONS    = { 'Mountain': 'mountain', 'Pool': 'waves', 'City': 'building', 'Sea': 'sailboat', 'Sky Garden': 'trees' };

function formatPrice(p) {
  return 'Rp ' + p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getUnitById(id) {
  return UNITS.find(u => u.id === id) || null;
}
