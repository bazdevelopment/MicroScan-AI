import { ITranslation } from './types';

export const cs: ITranslation = {
  common: {
    welcome: 'Vítejte',
    error: 'Došlo k chybě',
    loading: 'Načítání...',
    noUserFound:
      'Nejste oprávněni provést tento požadavek. Přihlaste se prosím',
    userIdMissing:
      'Vypadá to, že chybí ID uživatele. Pro pokračování jej prosím zadejte',
    scanLimitReached:
      'Dosáhli jste maximálního povoleného počtu skenů. Pro pokračování v používání služby si prosím upgradujte svůj plán',
    mandatoryLanguage: 'Kód jazyka je povinný',
  },
  auth: {
    signIn: 'Přihlásit se',
    signUp: 'Registrovat se',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Pro pokračování prosím zadejte svou e-mailovou adresu',
    invalidEmail:
      'Zadaná e-mailová adresa je neplatná. Prosím ověřte ji a zkuste to znovu',
    accountCreated:
      'Váš účet byl úspěšně vytvořen! Prosím zkontrolujte svůj e-mail pro ověřovací kód',
    verificationCodeSent:
      'Odeslali jsme ověřovací kód na váš e-mail. Prosím zkontrolujte svou doručenou poštu',
    internalError:
      'Při ověřování pomocí e-mailu došlo k chybě. Prosím zkuste to znovu',
  },

  sendEmailVerification: {
    emailMandatory: 'Pro pokračování je vyžadována e-mailová adresa',
    emailUsed: 'Tato e-mailová adresa je již používána. Prosím použijte jinou',
    userNotFound:
      'Nepodařilo se najít zadaného uživatele. Prosím zkontrolujte své údaje a zkuste to znovu',
    verificationCodeSent: 'Ověřovací kód byl úspěšně odeslán na váš e-mail',
    generalError: 'Při zahájení ověřování e-mailu došlo k chybě',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Počáteční datum a koncové datum jsou povinné.',
    startDatePriority: 'Počáteční datum nemůže být po koncovém datu.',
    generalError: 'Nelze načíst analýzy.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'Pro pokračování je vyžadován ověřovací kód',
    emailAddressMandatory: 'Pro pokračování je vyžadována e-mailová adresa',
    userNotFound:
      'Zadaného uživatele se nepodařilo najít. Prosím zkontrolujte své údaje a zkuste to znovu',
    invalidAuthCode:
      'Jejda! Toto není platný ověřovací kód. Prosím zkontrolujte a zkuste to znovu!',
    authCodeExpired:
      "Jejda! Platnost vašeho kódu vypršela. Prosím zkuste se znovu přihlásit pomocí své e-mailové adresy nebo klikněte na 'Znovu odeslat kód'",
    authCodeVerified: 'Uživatel byl úspěšně ověřen',
    generalError: 'Jejda! Při ověřování vašeho kódu došlo k chybě',
  },

  analyzeImage: {
    scanLimitReached:
      'Dosáhli jste maximálního povoleného počtu skenů. Pro pokračování v používání služby si prosím upgradujte svůj plán',
    imageMissing:
      'Obrázek chybí. Pro pokračování prosím vyberte a nahrajte obrázek',
    uploadImageStorageError:
      'Při nahrávání vašeho obrázku došlo k chybě. Prosím zkontrolujte své připojení a zkuste to znovu',
    interpretationNotSaved:
      'Nelze uložit výsledek analýzy. Prosím zkontrolujte své připojení a zkuste to znovu',
    analysisCompleted: 'Analýza obrázku byla úspěšně dokončena!',
  },
  analyzeVideo: {
    noVideoFound:
      'Video soubor chybí. Pro pokračování prosím vyberte a nahrajte video',
    uploadVideoStorageError:
      'Při nahrávání vašeho videa došlo k chybě. Prosím zkontrolujte své připojení a zkuste to znovu',
    interpretationNotSaved:
      'Nelze uložit výsledek analýzy. Prosím zkontrolujte své připojení a zkuste to znovu',
    analysisCompleted: 'Analýza videa byla úspěšně dokončena!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Byl použit další sken',
    generalError: 'Nelze snížit počet skenů!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Jeden sken byl odečten',
    decrementErrorScan:
      'Při aktualizaci počtu skenů došlo k chybě. Prosím zkuste to později',
    generalError: 'Nelze snížit počet skenů!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Úspěšně přihlášeno k odběru!',
    updateSubscriptionError: 'Nelze aktualizovat předplatné uživatele!',
  },
  updateUserLanguage: {
    updateSuccess: 'Jazyk byl úspěšně aktualizován!',
    updateError:
      'Při aktualizaci jazyka došlo k neočekávané chybě. Prosím zkuste to znovu později',
  },

  getUserInfo: {
    successGetInfo: 'Úspěšně načtena data uživatele',
    errorGetInfo:
      'Při načítání informací o uživateli došlo k neočekávané chybě. Prosím zkuste to znovu později',
  },
  getUserInfoById: {
    noUserInfoData:
      'Dokument uživatele existuje, ale nejsou k dispozici žádná data',
    getUserFetchError: 'Při načítání informací o uživateli došlo k chybě',
  },

  updateScanInterpretation: {
    success: 'Záznam interpretace skenu byl úspěšně aktualizován!',
    generalError: 'Při aktualizaci interpretace skenu došlo k chybě',
    paramsRequired: "'documentId' a 'fieldsToUpdate' jsou obě povinné",
  },
  deleteScanInterpretation: {
    success: 'Zpráva byla úspěšně smazána!',
    documentIdRequired: "Pro pokračování je vyžadován 'DocumentId'.",
    generalError: 'Při mazání zprávy došlo k chybě. Prosím zkuste to znovu.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' je povinný",
    noDocIdFound: 'S poskytnutým ID nebyl nalezen žádný dokument',
    success: 'Dokument úspěšně načten',
    generalError:
      'Při načítání interpretace pro poskytnuté ID dokumentu došlo k chybě',
  },

  getRecentInterpretation: {
    limitRequired: 'Limit musí být číslo mezi 1 a 100',
    noInterpretationFound: 'Nebyly nalezeny žádné interpretace',
    success: 'Nedávné interpretace úspěšně načteny!',
    generalError: 'Při načítání nedávných interpretací došlo k chybě',
    generalErrorAdditional: 'Došlo k interní chybě serveru',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Poskytnutí tokenu zařízení je povinné.',
    generalError: 'Chyba při ukládání tokenu zařízení',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Nadpis a tělo oznámení jsou povinné.',
    generalError: 'Při zpracování oznámení došlo k chybě',
    generalErrorAdditional: 'Selhalo odeslání globálního oznámení',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID zařízení je povinné',
    languageMandatory: 'Jazyk je povinný',
    deviceIdentified: 'Vaše zařízení bylo úspěšně identifikováno',
    generalError: 'Při kontrole zkušební verze zařízení došlo k chybě',
  },

  getUserNotification: {
    generalError: 'Nepodařilo se načíst uživatelská oznámení',
    generalErrorAdditional: 'Při načítání uživatelských oznámení došlo k chybě',
  },

  getScanCategories: {
    noCategoryFound: 'Nebyly nalezeny žádné kategorie',
    generalError: 'Při načítání kategorií skenů došlo k chybě',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategorie skenů byly úspěšně nahrány',
    generalError: 'Nepodařilo se nahrát kategorie skenů',
  },

  sendUserNotification: {
    noTokenFound:
      'Nebyly nalezeny žádné platné Expo tokeny. Nelze odeslat oznámení',
    generalError: 'Nepodařilo se odeslat oznámení',
  },

  updateUser: {
    successUpdatedUser: 'Uživatel úspěšně aktualizován',
    updateUserError:
      'Nelze aktualizovat záznam uživatele. Prosím zkuste to znovu.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Vyberte přezdívku a můžeme začít!',
    userLoggedIn: 'Vítejte zpět! Jste přihlášeni.',
    accountCreated: 'Jste přihlášeni! Užijte si prozkoumávání!',
    error:
      'Jejda! Něco se pokazilo. Prosím zkontrolujte své připojení a zkuste to znovu.',
  },
  continueConversation: {
    messagesLimit:
      'Aura je na plné kapacitě! Nahrajte další sken, abyste mohli pokračovat v získávání analýz a poznatků',
    conversationNotFound: 'Nelze najít konverzaci',
    serviceIssueAi:
      'Zdá se, že je problém se službou AI. Prosím zkuste to znovu.',
    noResponseAiService:
      'Nepodařilo se získat platnou odpověď od služby AI. Prosím zkuste to znovu',
  },
};
