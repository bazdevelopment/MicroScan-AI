import { ITranslation } from './types';

export const id: ITranslation = {
  common: {
    welcome: 'Selamat datang',
    error: 'Terjadi kesalahan',
    loading: 'Memuat...',
    noUserFound:
      'Anda tidak diizinkan untuk melakukan permintaan ini. Silakan masuk',
    userIdMissing: 'Sepertinya ID pengguna hilang. Berikan untuk melanjutkan',
    scanLimitReached:
      'Anda telah mencapai jumlah pemindaian maksimum yang diizinkan. Tingkatkan paket Anda untuk terus menggunakan layanan',
    mandatoryLanguage: 'Kode bahasa diperlukan',
  },
  auth: {
    signIn: 'Masuk',
    signUp: 'Daftar',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Berikan alamat email Anda untuk melanjutkan',
    invalidEmail:
      'Alamat email yang dimasukkan tidak valid. Verifikasi dan coba lagi',
    accountCreated:
      'Akun Anda berhasil dibuat! Silakan periksa email Anda untuk kode verifikasi',
    verificationCodeSent:
      'Kami telah mengirim kode verifikasi ke email Anda. Silakan periksa kotak masuk Anda',
    internalError:
      'Terjadi kesalahan dalam memproses autentikasi via email. Silakan coba lagi',
  },

  sendEmailVerification: {
    emailMandatory: 'Alamat email diperlukan untuk melanjutkan',
    emailUsed: 'Alamat email ini sudah digunakan. Gunakan yang lain',
    userNotFound:
      'Kami tidak dapat menemukan pengguna yang dimaksud. Periksa detail Anda dan coba lagi',
    verificationCodeSent:
      'Kode verifikasi telah berhasil dikirim ke email Anda',
    generalError: 'Terjadi kesalahan saat memulai verifikasi email',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Tanggal mulai dan tanggal akhir diperlukan.',
    startDatePriority: 'Tanggal mulai tidak boleh setelah tanggal akhir.',
    generalError: 'Tidak dapat mengambil analisis.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'Kode autentikasi wajib untuk melanjutkan',
    emailAddressMandatory: 'Alamat email wajib untuk melanjutkan',
    userNotFound:
      'Pengguna yang dimaksud tidak dapat ditemukan. Periksa detail Anda dan coba lagi',
    invalidAuthCode:
      'Ups! Ini bukan kode autentikasi yang valid. Periksa dan coba lagi!',
    authCodeExpired:
      "Ups! Kode Anda telah kedaluwarsa. Silakan coba masuk lagi dengan alamat email Anda atau klik 'Kirim ulang kode'",
    authCodeVerified: 'Pengguna telah berhasil diverifikasi',
    generalError: 'Ups! Kami mengalami kesalahan saat memverifikasi kode Anda',
  },

  analyzeImage: {
    scanLimitReached:
      'Anda telah mencapai jumlah pemindaian maksimum yang diizinkan. Tingkatkan paket Anda untuk terus menggunakan layanan',
    imageMissing: 'Gambar hilang. Pilih dan unggah gambar untuk melanjutkan',
    uploadImageStorageError:
      'Kami mengalami kesalahan saat mengunggah gambar Anda. Periksa koneksi Anda dan coba lagi',
    interpretationNotSaved:
      'Tidak dapat menyimpan hasil analisis. Periksa koneksi Anda dan coba lagi',
    analysisCompleted: 'Analisis gambar berhasil diselesaikan!',
  },
  analyzeVideo: {
    noVideoFound: 'File video hilang. Pilih dan unggah video untuk melanjutkan',
    uploadVideoStorageError:
      'Kami mengalami kesalahan saat mengunggah video Anda. Periksa koneksi Anda dan coba lagi',
    interpretationNotSaved:
      'Tidak dapat menyimpan hasil analisis. Periksa koneksi Anda dan coba lagi',
    analysisCompleted: 'Analisis video berhasil diselesaikan!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Satu pemindaian lagi telah digunakan',
    generalError: 'Tidak dapat mengurangi jumlah pemindaian!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Satu pemindaian telah dikurangi',
    decrementErrorScan:
      'Terjadi masalah dalam memperbarui jumlah pemindaian. Silakan coba lagi nanti',
    generalError: 'Tidak dapat mengurangi jumlah pemindaian!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Berhasil berlangganan!',
    updateSubscriptionError: 'Tidak dapat memperbarui langganan pengguna!',
  },
  updateUserLanguage: {
    updateSuccess: 'Bahasa berhasil diperbarui!',
    updateError:
      'Terjadi kesalahan tak terduga saat memperbarui bahasa. Silakan coba lagi nanti',
  },

  getUserInfo: {
    successGetInfo: 'Berhasil mengambil data info pengguna',
    errorGetInfo:
      'Terjadi kesalahan tak terduga saat mengambil informasi pengguna. Silakan coba lagi nanti',
  },
  getUserInfoById: {
    noUserInfoData: 'Dokumen pengguna ada, tetapi tidak ada data yang tersedia',
    getUserFetchError: 'Terjadi kesalahan saat mengambil informasi pengguna',
  },

  updateScanInterpretation: {
    success: 'Rekaman interpretasi pemindaian berhasil diperbarui!',
    generalError: 'Terjadi kesalahan saat memperbarui interpretasi pemindaian',
    paramsRequired: "'documentId' dan 'fieldsToUpdate' keduanya diperlukan",
  },
  deleteScanInterpretation: {
    success: 'Laporan telah berhasil dihapus!',
    documentIdRequired: "'DocumentId' diperlukan untuk melanjutkan.",
    generalError: 'Ada yang salah saat menghapus laporan. Silakan coba lagi.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' diperlukan",
    noDocIdFound: 'Tidak ada dokumen yang ditemukan dengan id yang diberikan',
    success: 'Dokumen berhasil diambil',
    generalError:
      'Terjadi kesalahan saat mengambil interpretasi untuk id dokumen yang diberikan',
  },

  getRecentInterpretation: {
    limitRequired: 'Batas harus berupa angka antara 1 dan 100',
    noInterpretationFound: 'Tidak ditemukan interpretasi',
    success: 'Interpretasi terbaru berhasil diambil!',
    generalError: 'Terjadi kesalahan saat mengambil interpretasi terbaru',
    generalErrorAdditional: 'Terjadi kesalahan server internal',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Memberikan token perangkat adalah wajib.',
    generalError: 'Kesalahan menyimpan token perangkat',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Judul dan isi notifikasi wajib diisi.',
    generalError: 'Terjadi kesalahan saat memproses notifikasi',
    generalErrorAdditional: 'Gagal mengirim notifikasi global',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID perangkat wajib diisi',
    languageMandatory: 'Bahasa wajib diisi',
    deviceIdentified: 'Perangkat Anda telah berhasil diidentifikasi',
    generalError: 'Terjadi kesalahan saat memeriksa percobaan perangkat',
  },

  getUserNotification: {
    generalError: 'Gagal mengambil notifikasi pengguna',
    generalErrorAdditional:
      'Terjadi kesalahan saat mengambil notifikasi pengguna',
  },

  getScanCategories: {
    noCategoryFound: 'Tidak ada kategori yang ditemukan',
    generalError: 'Terjadi kesalahan saat mengambil kategori pemindaian',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategori pemindaian berhasil diunggah',
    generalError: 'Gagal mengunggah kategori pemindaian',
  },

  sendUserNotification: {
    noTokenFound:
      'Tidak ada token Expo yang valid ditemukan. Tidak dapat mengirim notifikasi',
    generalError: 'Gagal mengirim notifikasi',
  },

  updateUser: {
    successUpdatedUser: 'Pengguna berhasil diperbarui',
    updateUserError:
      'Tidak dapat memperbarui catatan pengguna. Silakan coba lagi.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Pilih nama panggilan dan mari kita mulai!',
    userLoggedIn: 'Selamat datang kembali! Anda sudah masuk.',
    accountCreated: 'Anda sudah masuk! Nikmati menjelajah!',
    error: 'Ups! Ada yang tidak beres. Periksa koneksi Anda dan coba lagi.',
  },
  continueConversation: {
    messagesLimit:
      'Aura sudah penuh! Unggah pemindaian lain untuk terus mendapatkan analisis dan wawasan',
    conversationNotFound: 'Tidak dapat menemukan percakapan',
    serviceIssueAi:
      'Sepertinya ada masalah dengan layanan AI. Silakan coba lagi.',
    noResponseAiService:
      'Gagal mendapatkan respons yang valid dari layanan AI. Silakan coba lagi',
  },
};
