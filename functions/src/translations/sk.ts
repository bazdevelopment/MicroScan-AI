import { ITranslation } from './types';

export const sk: ITranslation = {
  common: {
    welcome: 'Vitajte',
    error: 'Vyskytla sa chyba',
    loading: 'Načítava sa...',
    noUserFound:
      'Nie ste oprávnení vykonať túto požiadavku. Prosím, prihláste sa',
    userIdMissing:
      'Vyzerá to, že chýba ID používateľa. Poskytnite ho pre pokračovanie',
    scanLimitReached:
      'Dosiahli ste maximálny povolený počet skenovaní. Ak chcete naďalej používať službu, inovujte si plán',
    mandatoryLanguage: 'Kód jazyka je povinný',
  },
  auth: {
    signIn: 'Prihlásiť sa',
    signUp: 'Registrovať sa',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Pre pokračovanie zadajte svoju e-mailovú adresu',
    invalidEmail:
      'Zadaná e-mailová adresa je neplatná. Overte ju a skúste to znova',
    accountCreated:
      'Váš účet bol úspešne vytvorený! Skontrolujte svoj e-mail pre overovací kód',
    verificationCodeSent:
      'Poslali sme overovací kód na váš e-mail. Skontrolujte svoju doručenú poštu',
    internalError:
      'Počas spracovania vášho overovania cez e-mail došlo k chybe. Skúste to znova',
  },

  sendEmailVerification: {
    emailMandatory: 'Pre pokračovanie je vyžadovaná e-mailová adresa',
    emailUsed: 'Táto e-mailová adresa sa už používa. Použite inú',
    userNotFound:
      'Nepodarilo sa nájsť zadaného používateľa. Skontrolujte svoje údaje a skúste to znova',
    verificationCodeSent: 'Overovací kód bol úspešne odoslaný na váš e-mail',
    generalError: 'Počas spustenia overovania e-mailu došlo k chybe',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Počiatočný dátum a koncový dátum sú povinné.',
    startDatePriority: 'Počiatočný dátum nemôže byť po koncovom dátume.',
    generalError: 'Nie je možné načítať analýzy.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'Pre pokračovanie je vyžadovaný overovací kód',
    emailAddressMandatory: 'E-mailová adresa je povinná pre pokračovanie',
    userNotFound:
      'Zadaného používateľa sa nepodarilo nájsť. Skontrolujte svoje údaje a skúste to znova',
    invalidAuthCode:
      'Ops! Toto nie je platný overovací kód. Skontrolujte a skúste to znova!',
    authCodeExpired:
      "Ops! Platnosť vášho kódu vypršala. Skúste sa znova prihlásiť pomocou svojej e-mailovej adresy alebo kliknite na 'Znova poslať kód'",
    authCodeVerified: 'Používateľ bol úspešne overený',
    generalError: 'Ops! Počas overovania vášho kódu došlo k chybe',
  },

  analyzeImage: {
    scanLimitReached:
      'Dosiahli ste maximálny povolený počet skenovaní. Ak chcete naďalej používať službu, inovujte si plán',
    imageMissing: 'Obrázok chýba. Pre pokračovanie vyberte a nahrajte obrázok',
    uploadImageStorageError:
      'Počas nahrávania vášho obrázku došlo k chybe. Skontrolujte svoje pripojenie a skúste to znova',
    interpretationNotSaved:
      'Nie je možné uložiť výsledok analýzy. Skontrolujte svoje pripojenie a skúste to znova',
    analysisCompleted: 'Analýza obrázku úspešne dokončená!',
  },
  analyzeVideo: {
    noVideoFound:
      'Video súbor chýba. Pre pokračovanie vyberte a nahrajte video',
    uploadVideoStorageError:
      'Počas nahrávania vášho videa došlo k chybe. Skontrolujte svoje pripojenie a skúste to znova',
    interpretationNotSaved:
      'Nie je možné uložiť výsledok analýzy. Skontrolujte svoje pripojenie a skúste to znova',
    analysisCompleted: 'Analýza videa úspešne dokončená!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Bolo použitých viac skenovaní',
    generalError: 'Nie je možné znížiť počet skenovaní!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Jedno skenovanie bolo odpočítané',
    decrementErrorScan:
      'Vyskytol sa problém s aktualizáciou počtu skenovaní. Skúste to neskôr',
    generalError: 'Nie je možné znížiť počet skenovaní!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Úspešne prihlásené k odberu!',
    updateSubscriptionError:
      'Nie je možné aktualizovať predplatné používateľa!',
  },
  updateUserLanguage: {
    updateSuccess: 'Jazyk bol úspešne aktualizovaný!',
    updateError:
      'Počas aktualizácie jazyka došlo k neočakávanej chybe. Skúste to neskôr',
  },

  getUserInfo: {
    successGetInfo: 'Údaje používateľa úspešne načítané',
    errorGetInfo:
      'Počas načítavania informácií o používateľovi došlo k neočakávanej chybe. Skúste to neskôr',
  },
  getUserInfoById: {
    noUserInfoData:
      'Dokument používateľa existuje, ale nie sú k dispozícii žiadne údaje',
    getUserFetchError:
      'Počas načítavania informácií o používateľovi došlo k chybe',
  },

  updateScanInterpretation: {
    success: 'Záznam interpretácie skenovania bol úspešne aktualizovaný!',
    generalError: 'Počas aktualizácie interpretácie skenovania došlo k chybe',
    paramsRequired: "'documentId' a 'fieldsToUpdate' sú povinné",
  },
  deleteScanInterpretation: {
    success: 'Správa bola úspešne odstránená!',
    documentIdRequired: "Pre pokračovanie je vyžadovaný 'DocumentId'.",
    generalError: 'Počas odstraňovania správy došlo k chybe. Skúste to znova.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' je povinný",
    noDocIdFound: 'S poskytnutým ID nebol nájdený žiadny dokument',
    success: 'Dokument úspešne načítaný',
    generalError:
      'Počas načítavania interpretácie pre poskytnuté ID dokumentu došlo k chybe',
  },

  getRecentInterpretation: {
    limitRequired: 'Limit musí byť číslo medzi 1 a 100',
    noInterpretationFound: 'Neboli nájdené žiadne interpretácie',
    success: 'Nedávne interpretácie úspešne načítané!',
    generalError: 'Počas načítavania nedávnych interpretácií došlo k chybe',
    generalErrorAdditional: 'Došlo k internej chybe servera',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Poskytnutie tokenu zariadenia je povinné.',
    generalError: 'Chyba pri ukladaní tokenu zariadenia',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Nadpis a telo oznámenia sú povinné.',
    generalError: 'Počas spracovania oznámení došlo k chybe',
    generalErrorAdditional: 'Nepodarilo sa odoslať globálne oznámenie',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID zariadenia je povinné',
    languageMandatory: 'Jazyk je povinný',
    deviceIdentified: 'Vaše zariadenie bolo úspešne identifikované',
    generalError: 'Počas kontroly skúšobnej verzie zariadenia došlo k chybe',
  },

  getUserNotification: {
    generalError: 'Nepodarilo sa načítať používateľské oznámenia',
    generalErrorAdditional:
      'Počas načítavania používateľských oznámení došlo k chybe',
  },

  getScanCategories: {
    noCategoryFound: 'Neboli nájdené žiadne kategórie',
    generalError: 'Počas načítavania kategórií skenovaní došlo k chybe',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategórie skenovaní úspešne nahrané',
    generalError: 'Nepodarilo sa nahrať kategórie skenovaní',
  },

  sendUserNotification: {
    noTokenFound:
      'Neboli nájdené žiadne platné Expo tokeny. Nie je možné odoslať oznámenia',
    generalError: 'Nepodarilo sa odoslať oznámenie',
  },

  updateUser: {
    successUpdatedUser: 'Používateľ úspešne aktualizovaný',
    updateUserError:
      'Nie je možné aktualizovať záznam používateľa. Skúste to znova.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Vyberte prezývku a poďme začať!',
    userLoggedIn: 'Vitajte späť! Ste prihlásený.',
    accountCreated: 'Ste prihlásený! Užite si prehliadanie!',
    error:
      'Ops! Niečo sa pokazilo. Skontrolujte svoje pripojenie a skúste to znova.',
  },
  continueConversation: {
    messagesLimit:
      'Aura je na plnej kapacite! Nahrajte ďalšie skenovanie, aby ste naďalej dostávali analýzy a postrehy',
    conversationNotFound: 'Nie je možné nájsť konverzáciu',
    serviceIssueAi: 'Zdá sa, že je problém so službou AI. Skúste to znova.',
    noResponseAiService:
      'Nepodarilo sa získať platnú odpoveď od služby AI. Skúste to znova',
  },
};
