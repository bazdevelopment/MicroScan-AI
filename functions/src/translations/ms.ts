import { ITranslation } from './types';

export const ms: ITranslation = {
  common: {
    welcome: 'Selamat datang',
    error: 'Ralat telah berlaku',
    loading: 'Memuatkan...',
    noUserFound: 'Anda tidak dibenarkan membuat permintaan ini. Sila log masuk',
    userIdMissing:
      'Nampaknya ID pengguna tiada. Sila berikannya untuk meneruskan',
    scanLimitReached:
      'Anda telah mencapai bilangan imbasan maksimum yang dibenarkan. Sila naik taraf pelan anda untuk terus menggunakan perkhidmatan',
    mandatoryLanguage: 'Kod bahasa diperlukan',
  },
  auth: {
    signIn: 'Log Masuk',
    signUp: 'Daftar',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Sila berikan alamat e-mel anda untuk meneruskan',
    invalidEmail:
      'Alamat e-mel yang dimasukkan tidak sah. Sila semak dan cuba lagi',
    accountCreated:
      'Akaun anda telah berjaya dibuat! Sila semak e-mel anda untuk kod pengesahan',
    verificationCodeSent:
      'Kami telah menghantar kod pengesahan ke e-mel anda. Sila semak peti masuk anda',
    internalError:
      'Terdapat ralat semasa memproses pengesahan anda melalui e-mel. Sila cuba lagi',
  },

  sendEmailVerification: {
    emailMandatory: 'Alamat e-mel diperlukan untuk meneruskan',
    emailUsed: 'Alamat e-mel ini sudah digunakan. Sila gunakan yang lain',
    userNotFound:
      'Kami tidak dapat mencari pengguna yang dinyatakan. Sila semak butiran anda dan cuba lagi',
    verificationCodeSent: 'Kod pengesahan telah berjaya dihantar ke e-mel anda',
    generalError: 'Ralat berlaku semasa memulakan pengesahan e-mel',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Tarikh mula dan tarikh tamat diperlukan.',
    startDatePriority: 'Tarikh mula tidak boleh selepas tarikh tamat.',
    generalError: 'Tidak dapat mengambil analisis.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'Kod pengesahan diperlukan untuk meneruskan',
    emailAddressMandatory: 'Alamat e-mel diperlukan untuk meneruskan',
    userNotFound:
      'Pengguna yang dinyatakan tidak dapat dijumpai. Sila semak butiran anda dan cuba lagi',
    invalidAuthCode:
      'Alamak! Ini bukan kod pengesahan yang sah. Sila semak dan cuba lagi!',
    authCodeExpired:
      "Alamak! Kod anda telah tamat tempoh. Sila cuba log masuk semula dengan alamat e-mel anda atau klik 'Hantar kod semula'",
    authCodeVerified: 'Pengguna telah berjaya disahkan',
    generalError: 'Alamak! Kami menghadapi ralat semasa mengesahkan kod anda',
  },

  analyzeImage: {
    scanLimitReached:
      'Anda telah mencapai bilangan imbasan maksimum yang dibenarkan. Sila naik taraf pelan anda untuk terus menggunakan perkhidmatan',
    imageMissing: 'Imej tiada. Sila pilih dan muat naik imej untuk meneruskan',
    uploadImageStorageError:
      'Kami menghadapi ralat semasa memuat naik imej anda. Sila semak sambungan anda dan cuba lagi',
    interpretationNotSaved:
      'Tidak dapat menyimpan keputusan analisis. Sila semak sambungan anda dan cuba lagi',
    analysisCompleted: 'Analisis imej selesai dengan jayanya!',
  },
  analyzeVideo: {
    noVideoFound:
      'Fail video tiada. Sila pilih dan muat naik video untuk meneruskan',
    uploadVideoStorageError:
      'Kami menghadapi ralat semasa memuat naik video anda. Sila semak sambungan anda dan cuba lagi',
    interpretationNotSaved:
      'Tidak dapat menyimpan keputusan analisis. Sila semak sambungan anda dan cuba lagi',
    analysisCompleted: 'Analisis video selesai dengan jayanya!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Satu lagi imbasan telah digunakan',
    generalError: 'Tidak dapat mengurangkan bilangan imbasan!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Satu imbasan telah dikurangkan',
    decrementErrorScan:
      'Terdapat isu mengemas kini bilangan imbasan. Sila cuba lagi nanti',
    generalError: 'Tidak dapat mengurangkan bilangan imbasan!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Berjaya melanggan!',
    updateSubscriptionError: 'Tidak dapat mengemas kini langganan pengguna!',
  },
  updateUserLanguage: {
    updateSuccess: 'Berjaya mengemas kini bahasa!',
    updateError:
      'Ralat tidak dijangka berlaku semasa mengemas kini bahasa. Sila cuba lagi nanti',
  },

  getUserInfo: {
    successGetInfo: 'Berjaya mengambil data maklumat pengguna',
    errorGetInfo:
      'Ralat tidak dijangka berlaku semasa mengambil maklumat pengguna. Sila cuba lagi nanti',
  },
  getUserInfoById: {
    noUserInfoData: 'Dokumen pengguna wujud, tetapi tiada data tersedia',
    getUserFetchError: 'Ralat berlaku semasa mengambil maklumat pengguna',
  },

  updateScanInterpretation: {
    success: 'Rekod tafsiran imbasan berjaya dikemas kini!',
    generalError: 'Ralat berlaku semasa mengemas kini tafsiran imbasan',
    paramsRequired: "'documentId' dan 'fieldsToUpdate' kedua-duanya diperlukan",
  },
  deleteScanInterpretation: {
    success: 'Laporan telah berjaya dipadam!',
    documentIdRequired: "'DocumentId' diperlukan untuk meneruskan.",
    generalError:
      'Sesuatu telah berlaku semasa memadam laporan. Sila cuba lagi.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' diperlukan",
    noDocIdFound: 'Tiada dokumen ditemui dengan ID yang diberikan',
    success: 'Dokumen berjaya diambil',
    generalError:
      'Ralat berlaku semasa mengambil tafsiran untuk ID dokumen yang diberikan',
  },

  getRecentInterpretation: {
    limitRequired: 'Had mesti nombor antara 1 dan 100',
    noInterpretationFound: 'Tiada tafsiran ditemui',
    success: 'Tafsiran terkini berjaya diambil!',
    generalError: 'Ralat berlaku semasa mengambil tafsiran terkini',
    generalErrorAdditional: 'Ralat pelayan dalaman berlaku',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Menyediakan token peranti adalah wajib.',
    generalError: 'Ralat menyimpan token peranti',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Tajuk dan badan pemberitahuan adalah wajib.',
    generalError: 'Ralat berlaku semasa memproses pemberitahuan',
    generalErrorAdditional: 'Gagal menghantar pemberitahuan global',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID peranti adalah wajib',
    languageMandatory: 'Bahasa adalah wajib',
    deviceIdentified: 'Peranti anda telah berjaya dikenal pasti',
    generalError: 'Ralat berlaku semasa memeriksa percubaan peranti',
  },

  getUserNotification: {
    generalError: 'Gagal mengambil pemberitahuan pengguna',
    generalErrorAdditional:
      'Ralat berlaku semasa mengambil pemberitahuan pengguna',
  },

  getScanCategories: {
    noCategoryFound: 'Tiada kategori ditemui',
    generalError: 'Ralat berlaku semasa mengambil kategori imbasan',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategori imbasan berjaya dimuat naik',
    generalError: 'Gagal memuat naik kategori imbasan',
  },

  sendUserNotification: {
    noTokenFound:
      'Tiada token Expo yang sah ditemui. Tidak dapat menghantar pemberitahuan',
    generalError: 'Gagal menghantar pemberitahuan',
  },

  updateUser: {
    successUpdatedUser: 'Pengguna berjaya dikemas kini',
    updateUserError:
      'Tidak dapat mengemas kini rekod pengguna. Sila cuba lagi.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Pilih nama samaran dan mari kita mulakan!',
    userLoggedIn: 'Selamat kembali! Anda sudah masuk.',
    accountCreated: 'Anda sudah masuk! Nikmati meneroka!',
    error:
      'Alamak! Sesuatu telah berlaku. Sila semak sambungan anda dan cuba lagi.',
  },
  continueConversation: {
    messagesLimit:
      'Aura berada pada kapasiti penuh! Muat naik imbasan lain untuk terus mendapat analisis dan pandangan',
    conversationNotFound: 'Tidak dapat mencari perbualan',
    serviceIssueAi: 'Nampaknya ada isu dengan perkhidmatan AI. Sila cuba lagi.',
    noResponseAiService:
      'Gagal mendapat respons yang sah dari perkhidmatan AI. Sila cuba lagi',
  },
};
