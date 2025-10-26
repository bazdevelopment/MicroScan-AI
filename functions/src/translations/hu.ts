import { ITranslation } from './types';

export const hu: ITranslation = {
  common: {
    welcome: 'Üdvözöljük',
    error: 'Hiba történt',
    loading: 'Betöltés...',
    noUserFound: 'Nincs jogosultsága ehhez a kéréshez. Kérjük, jelentkezzen be',
    userIdMissing:
      'Úgy tűnik, hiányzik a felhasználói azonosító. Kérjük, adja meg a folytatáshoz',
    scanLimitReached:
      'Elérte a megengedett maximális szkennelések számát. Kérjük, frissítse a csomagját a szolgáltatás további használatához',
    mandatoryLanguage: 'A nyelvi kód kötelező',
  },
  auth: {
    signIn: 'Bejelentkezés',
    signUp: 'Regisztráció',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Kérjük, adja meg e-mail címét a folytatáshoz',
    invalidEmail:
      'A megadott e-mail cím érvénytelen. Kérjük, ellenőrizze és próbálja újra',
    accountCreated:
      'Fiókja sikeresen létrejött! Kérjük, ellenőrizze e-mailjeit a megerősítő kódért',
    verificationCodeSent:
      'Elküldtünk egy megerősítő kódot az e-mail címére. Kérjük, ellenőrizze a bejövő üzeneteit',
    internalError:
      'Hiba történt az e-mailes hitelesítése feldolgozása során. Kérjük, próbálja újra',
  },

  sendEmailVerification: {
    emailMandatory: 'E-mail cím szükséges a folytatáshoz',
    emailUsed: 'Ezt az e-mail címet már használják. Kérjük, használjon másikat',
    userNotFound:
      'Nem találtuk a megadott felhasználót. Kérjük, ellenőrizze adatait és próbálja újra',
    verificationCodeSent:
      'A megerősítő kódot sikeresen elküldtük e-mail címére',
    generalError: 'Hiba történt az e-mail megerősítés indításakor',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Kezdő és befejező dátum szükséges.',
    startDatePriority: 'A kezdő dátum nem lehet a befejező dátum után.',
    generalError: 'Nem sikerült lekérni az elemzéseket.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'Hitelesítési kód kötelező a folytatáshoz',
    emailAddressMandatory: 'E-mail cím kötelező a folytatáshoz',
    userNotFound:
      'A megadott felhasználó nem található. Kérjük, ellenőrizze adatait és próbálja újra',
    invalidAuthCode:
      'Hoppá! Ez nem érvényes hitelesítési kód. Kérjük, ellenőrizze és próbálja újra!',
    authCodeExpired:
      "Hoppá! A kódja lejárt. Kérjük, próbálkozzon újra bejelentkezéssel e-mail címével, vagy kattintson a 'Kód újraküldése' gombra",
    authCodeVerified: 'A felhasználó sikeresen megerősítve',
    generalError: 'Hoppá! Hiba történt a kódja ellenőrzése során',
  },

  analyzeImage: {
    scanLimitReached:
      'Elérte a megengedett maximális szkennelések számát. Kérjük, frissítse a csomagját a szolgáltatás további használatához',
    imageMissing:
      'Kép hiányzik. Kérjük, válasszon ki és töltsön fel egy képet a folytatáshoz',
    uploadImageStorageError:
      'Hiba történt a kép feltöltése során. Kérjük, ellenőrizze kapcsolatát és próbálja újra',
    interpretationNotSaved:
      'Nem sikerült menteni az elemzés eredményét. Kérjük, ellenőrizze kapcsolatát és próbálja újra',
    analysisCompleted: 'Képelemzés sikeresen befejeződött!',
  },
  analyzeVideo: {
    noVideoFound:
      'Videófájl hiányzik. Kérjük, válasszon ki és töltsön fel egy videót a folytatáshoz',
    uploadVideoStorageError:
      'Hiba történt a videó feltöltése során. Kérjük, ellenőrizze kapcsolatát és próbálja újra',
    interpretationNotSaved:
      'Nem sikerült menteni az elemzés eredményét. Kérjük, ellenőrizze kapcsolatát és próbálja újra',
    analysisCompleted: 'Videóelemzés sikeresen befejeződött!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Még egy szkennelés lett felhasználva',
    generalError: 'Nem sikerült csökkenteni a szkennelések számát!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Egy szkennelés csökkentve',
    decrementErrorScan:
      'Probléma merült fel a szkennelések számának frissítésekor. Kérjük, próbálja újra később',
    generalError: 'Nem sikerült csökkenteni a szkennelések számát!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Sikeresen feliratkozott!',
    updateSubscriptionError:
      'Nem sikerült frissíteni a felhasználói előfizetést!',
  },
  updateUserLanguage: {
    updateSuccess: 'Nyelv sikeresen frissítve!',
    updateError:
      'Váratlan hiba történt a nyelv frissítése során. Kérjük, próbálja újra később',
  },

  getUserInfo: {
    successGetInfo: 'Felhasználói információk sikeresen lekérve',
    errorGetInfo:
      'Váratlan hiba történt a felhasználói információk lekérése során. Kérjük, próbálja újra később',
  },
  getUserInfoById: {
    noUserInfoData: 'A felhasználói dokumentum létezik, de nincs elérhető adat',
    getUserFetchError: 'Hiba történt a felhasználói információk lekérése során',
  },

  updateScanInterpretation: {
    success: 'Szkennelési értelmezési rekord sikeresen frissítve!',
    generalError: 'Hiba történt a szkennelési értelmezés frissítése során',
    paramsRequired: "Mind a 'documentId', mind a 'fieldsToUpdate' kötelező",
  },
  deleteScanInterpretation: {
    success: 'A jelentés sikeresen törölve!',
    documentIdRequired: "'DocumentId' kötelező a folytatáshoz.",
    generalError:
      'Hiba történt a jelentés törlése során. Kérjük, próbálja újra.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' kötelező",
    noDocIdFound: 'Nem található dokumentum a megadott azonosítóval',
    success: 'Dokumentum sikeresen lekérve',
    generalError:
      'Hiba történt a megadott dokumentum azonosító értelmezésének lekérése során',
  },

  getRecentInterpretation: {
    limitRequired: 'A limitnek 1 és 100 közötti számnak kell lennie',
    noInterpretationFound: 'Nem találhatók értelmezések',
    success: 'Legutóbbi értelmezések sikeresen lekérve!',
    generalError: 'Hiba történt a legutóbbi értelmezések lekérése során',
    generalErrorAdditional: 'Belső szerverhiba történt',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Eszköz token megadása kötelező.',
    generalError: 'Hiba az eszköz token tárolásakor',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Az értesítés címe és szövege kötelező.',
    generalError: 'Hiba történt az értesítések feldolgozása során',
    generalErrorAdditional: 'Nem sikerült globális értesítést küldeni',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Eszköz azonosító kötelező',
    languageMandatory: 'Nyelv kötelező',
    deviceIdentified: 'Az eszköze sikeresen azonosítva',
    generalError: 'Hiba történt az eszköz próbaverziójának ellenőrzése során',
  },

  getUserNotification: {
    generalError: 'Nem sikerült lekérni a felhasználói értesítéseket',
    generalErrorAdditional:
      'Hiba történt a felhasználói értesítések lekérése során',
  },

  getScanCategories: {
    noCategoryFound: 'Nem találhatók kategóriák',
    generalError: 'Hiba történt a szkennelési kategóriák lekérése során',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Szkennelési kategóriák sikeresen feltöltve',
    generalError: 'Nem sikerült feltölteni a szkennelési kategóriákat',
  },

  sendUserNotification: {
    noTokenFound:
      'Nem találhatók érvényes Expo tokenek. Nem lehet értesítéseket küldeni',
    generalError: 'Nem sikerült értesítést küldeni',
  },

  updateUser: {
    successUpdatedUser: 'Felhasználó sikeresen frissítve',
    updateUserError:
      'Nem sikerült frissíteni a felhasználói rekordot. Kérjük, próbálja újra.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Válasszon becenevet és kezdjük el!',
    userLoggedIn: 'Üdv újra! Belépve.',
    accountCreated: 'Belépve! Élvezze a felfedezést!',
    error:
      'Hoppá! Valami hiba történt. Kérjük, ellenőrizze kapcsolatát és próbálja újra.',
  },
  continueConversation: {
    messagesLimit:
      'Aura teljes kapacitáson van! Töltsön fel egy másik szkennelést további elemzések és betekintések érdekében',
    conversationNotFound: 'Nem található a beszélgetés',
    serviceIssueAi:
      'Úgy tűnik, probléma van az AI szolgáltatással. Kérjük, próbálja újra.',
    noResponseAiService:
      'Nem sikerült érvényes választ kapni az AI szolgáltatástól. Kérjük, próbálja újra',
  },
};
