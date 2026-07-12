export type Lesson = {
  id: string;
  title: string;
  description: string;
  videoDuration: string;
  url?: string;
  type?: 'video' | 'link' | 'text';
  content?: string;
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export const courseData: Module[] = [
  {
    id: 'b1',
    title: 'BAB 1 PEMBUKAAN',
    lessons: [
      { id: '1', title: '1. PEMBUKAAN', description: 'Video Pembukaan', videoDuration: '-', url: 'https://www.youtube.com/watch?v=jy4hu-OCZyk', type: 'video' },
      { id: '2', title: '2. DISCLAIMER DAN PENJELASAN SINGKAT', description: 'Disclaimer dan Penjelasan Singkat', videoDuration: '-', url: 'https://youtu.be/k770iAEFAf8', type: 'video' },
      { id: '3', title: '3. BUKTI OMSET 2 BULAN SEPTEMBER-OKTOBER 2025', description: 'Bukti Omset', videoDuration: '-', url: 'https://youtu.be/7M48MpJhtZM', type: 'video' },
      { id: '4', title: '4. MENGAPA RISET PRODUK ITU PENTING!', description: 'Mengapa riset produk itu penting!', videoDuration: '-', url: 'https://youtu.be/JwZ44XuU0Is', type: 'video' },
      { id: '5', title: '5. PRAKTEK RISET DAN CARA MEMBUAT PRODUK', description: 'Praktek riset dan cara membuat produk', videoDuration: '-', url: 'https://youtu.be/QivRO-ha3nc?si=um9hBfx48lLk8YQ1', type: 'video' },
      { id: '6', title: '6. MEMBUAT TAMPILAN PRODUK', description: 'Membuat tampilan produk', videoDuration: '-', url: 'https://youtu.be/65FsgZgY9nw', type: 'video' },
      { id: '7', title: '7. MENENTUKAN HARGA JUAL PRODUK', description: 'Menentukan harga jual produk', videoDuration: '-', url: 'https://youtu.be/sLIWeydRkWg', type: 'video' },
    ]
  },
  {
    id: 'b2',
    title: 'BAB 2 SET-UP TOKO SCALEV!',
    lessons: [
      { id: '8', title: '8. LINK DAFTAR SCALEV.ID', description: 'Link Daftar Scalev.id', videoDuration: '-', url: 'https://scalev.id/?aff_code=RUKMANIRSYADLKICZ', type: 'link' },
      { id: '9.1', title: '9.1 UPDATE CARA AKTIVASI E-PAYMENT (SINGAPAY) DI SCALEV.ID', description: 'AKTIVASI SINGAPAY AGAR TOKO KAMU BISA MENGGUNAKAN E-PAYMENT', videoDuration: '-', type: 'text' },
      { id: '9.2', title: '9.2 STEP BY STEP SETTING PRODUK DIGITAL DI SCALEV.ID', description: 'Step by step setting produk digital di scalev.id', videoDuration: '-', url: 'https://www.youtube.com/watch?v=h07V4jTGbnk', type: 'video' },
      { id: '10', title: '10. CARA MEMBUAT LANDING PAGE', description: 'Cara membuat landing page', videoDuration: '-', url: 'https://www.youtube.com/watch?v=lEL3KJ3pShw', type: 'video' },
      { id: '11', title: '11. CARA MEMBUAT CHECKOUT PAGE', description: 'Cara membuat checkout page', videoDuration: '-', url: 'https://youtu.be/zO3l5iRxTHk', type: 'video' },
      { id: '12', title: '12. CARA TESTING LANDING PAGE', description: 'Cara testing landing page', videoDuration: '-', url: 'https://youtu.be/kA2D_sQhqtc?si=leOfz1XEtN_mIjyQ', type: 'video' },
      { id: '13', title: '13. A-Z CARA MEMPROSES ORDERAN DI SCALEV', description: 'A-Z Cara memproses orderan di scalev', videoDuration: '-', url: 'https://tutorial.scalev.id/az-ngurus-order/', type: 'link' },
      { id: '13.1', title: '13.1 Solusi Alternatif Jika Ingin Menggunakan Lynkid Sebagai Wadah Management Order, Apabila Kesulitan Dalam Proses Aktivasi Singapay', description: 'Solusi alternatif menggunakan Lynkid', videoDuration: '-', url: 'https://youtu.be/FRW8y7PdM1c', type: 'video' },
    ]
  },
  {
    id: 'b3',
    title: 'BAB 3 MENDATANGKAN SALES DENGAN META ADS (PERSIAPAN)',
    lessons: [
      { id: '14', title: '14. ALASAN MENGGUNAKAN META ADS', description: 'Alasan menggunakan Meta Ads', videoDuration: '-', url: 'https://youtu.be/RT8dPAdiaOs?si=v72wTdTbszg1sruq', type: 'video' },
      { id: '15', title: '15. MEMBUAT AKUN BISNIS MANAGER & AKUN IKLAN META ADS', description: 'Membuat akun bisnis manager', videoDuration: '-', url: 'https://youtu.be/gUMLD3AeR70?si=8fTU5l5Eg6GdVl9r', type: 'video' },
      { id: '16', title: '16. ALASAN KENAPA BUTUH FANPAGE & INSTAGRAM', description: 'Alasan kenapa butuh fanpage & instagram', videoDuration: '-', url: 'https://youtu.be/o2W4zZdB0ic?si=29NPtArZbrazSSvJ', type: 'video' },
      { id: '17', title: '17. CARA MEMBUAT FANPAGE DI BISNIS MANAGER', description: 'Cara membuat fanpage di bisnis manager', videoDuration: '-', url: 'https://www.youtube.com/watch?v=FFMrtc4mq3o', type: 'video' },
      { id: '18', title: '18. CARA MENGKONEKSIKAN INSTAGRAM KE AKUN IKLAN META', description: 'Cara mengkoneksikan instagram ke akun iklan meta', videoDuration: '-', url: 'https://www.youtube.com/watch?v=R-tToI6SZ58', type: 'video' },
      { id: '19', title: '19. APA ITU META PIXEL & KENAPA PENTING', description: 'Apa itu meta pixel & kenapa penting', videoDuration: '-', url: 'https://www.youtube.com/watch?v=J5lE-TRvZYE', type: 'video' },
      { id: '20', title: '20. CARA MEMBUAT PIXEL DIBISNIS MANAGER', description: 'Cara membuat pixel dibisnis manager', videoDuration: '-', url: 'https://www.youtube.com/watch?v=IlCdJ_x7nW4', type: 'video' },
      { id: '21', title: '21. PENJELASAN DAN CARA SET-UP EVENT PIXEL & CAPI DARI OWNER SCALEV!', description: 'Penjelasan dan cara set-up event pixel', videoDuration: '-', url: 'https://www.youtube.com/watch?v=ket4Ct-08HU', type: 'video' },
      { id: '22', title: '22. CARA MENAMBAHKAN PIXEL KE SCALEV', description: 'Cara menambahkan pixel ke scalev', videoDuration: '-', url: 'https://www.youtube.com/watch?v=C3hCdSG5WwE', type: 'video' },
      { id: '23', title: '23. CARA MENANAMKAN PIXEL KE LANDING PAGE & CHECKOUT PAGE', description: 'Cara menanamkan pixel ke landing page & checkout page', videoDuration: '-', url: 'https://youtu.be/nZjKSd5vz9k', type: 'video' },
      { id: '23.5', title: '23,5 CARA SETTING PIXEL TRIGGER PURCHASE DI SCALEV', description: 'a. Masuk Menu Store\nb. Lalu pada bagian Trigger Event Purchase pastikan settingannya seperti pada gambar dibawah!\n!Screenshot_216.jpg', videoDuration: '-', type: 'text', content: "a. Masuk Menu Store\nb. Lalu pada bagian Trigger Event Purchase pastikan settingannya seperti pada gambar dibawah!\n!Screenshot_216.jpg" },
      { id: '24', title: '24. CONTOH KONTEN ADS CREATIVE YANG MENGHASILKAN PENJUALAN', description: 'Contoh konten ads creative', videoDuration: '-', url: 'https://www.youtube.com/watch?v=Kpf500EeB10', type: 'video' },
      { id: '25', title: '25. CARA MEMBUAT VIDEO ADS DI CANVA! FREE', description: 'Cara membuat video ads di Canva', videoDuration: '-', url: 'https://www.youtube.com/watch?v=Nr2Yr8UWCx8', type: 'video' },
      { id: '26', title: '26. MEMBUAT BAC-KUP PROFIL AKUN BISNIS MANAGER', description: 'Membuat backup profil akun bisnis manager', videoDuration: '-', url: 'https://www.youtube.com/watch?v=qbEjNQyKVEU', type: 'video' },
    ]
  },
  {
    id: 'b4',
    title: 'BAB 4 MENDATANGKAN SALES DENGAN META ADS (FASE TESTING)',
    lessons: [
      { id: '27', title: '27. STRUKTUR CAMPAIGN META ADS', description: 'Struktur campaign meta ads.', videoDuration: '-', url: 'https://www.youtube.com/watch?v=PAPfaEw3UaI', type: 'video', content: 'Video Utama: https://www.youtube.com/watch?v=PAPfaEw3UaI\n\nSTRUKTUR CAMPAIGN LANJUTAN (UPDATE) >> https://youtu.be/TGGG8dBPAjg?si=ShIWYagwM89GnHTZ' },
      { id: '28', title: '28. CARA MEMBUAT COPYWRITTING IKLAN META', description: 'Cara membuat copywriting iklan meta', videoDuration: '-', url: 'https://www.youtube.com/watch?v=VIkUibifcco', type: 'video' },
      { id: '29', title: '29. CARA MEMBUAT IKLAN CONVERSION ADS', description: 'Cara membuat iklan conversion ads.', videoDuration: '-', url: 'https://www.youtube.com/watch?v=ikNYynB-fXI', type: 'video', content: 'Video Utama: https://www.youtube.com/watch?v=ikNYynB-fXI\n\nKURANG JELAS ? TONTON VERSI UPDATE DISINI > https://youtu.be/hrQqLpvg48A' },
      { id: '30', title: '30. MEMBACA & EVALUASI DATA IKLAN FASE TESTING', description: 'Membaca & evaluasi data iklan fase testing', videoDuration: '-', url: 'https://www.youtube.com/watch?v=3jD48VK2kMw', type: 'video' },
      { id: '31', title: '31. MEMBACA & EVALUASI DATA BERDASARKAN EVENT PIXEL', description: 'Membaca & evaluasi data berdasarkan event pixel', videoDuration: '-', url: 'https://www.youtube.com/watch?v=aiEE5wm4TXU', type: 'video' },
    ]
  },
  {
    id: 'b5',
    title: 'BAB 5 MENDATANGKAN SALES DENGAN META ADS (FASE SCALING)',
    lessons: [
      { id: '32', title: '32. METODE VERTICAL & HORIZONTAL SCALING', description: 'Metode vertical & horizontal scaling', videoDuration: '-', url: 'https://www.youtube.com/watch?v=UNJwC5fdabg', type: 'video' },
      { id: '33', title: '33. SCALING CAMPAIGN DENGAN METODE COST PER RESULT GOAL (CPRG)', description: 'Scaling campaign dengan metode cost per result goal', videoDuration: '-', url: 'https://www.youtube.com/watch?v=0LLtUVEG35I', type: 'video' },
      { id: '34', title: '34. TOTAL SPENDING IKLAN & PROFIT YANG DIDAPATKAN DARI METODE INI', description: 'Total spending iklan & profit yang didapatkan', videoDuration: '-', url: 'https://www.youtube.com/watch?v=yB_MvLF0tNk+', type: 'video' },
    ]
  }
];

export const getLessonById = (lessonId: string): Lesson | undefined => {
  for (const module of courseData) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
};

export const getNextLesson = (currentLessonId: string): Lesson | undefined => {
  const allLessons = courseData.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
    return allLessons[currentIndex + 1];
  }
  return undefined;
};

export const getPrevLesson = (currentLessonId: string): Lesson | undefined => {
  const allLessons = courseData.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex > 0) {
    return allLessons[currentIndex - 1];
  }
  return undefined;
};
