import { ITranslation } from './types';

export const hr: ITranslation = {
  common: {
    welcome: 'Dobrodošli',
    error: 'Došlo je do pogreške',
    loading: 'Učitavanje...',
    noUserFound: 'Niste ovlašteni za ovaj zahtjev. Molimo prijavite se',
    userIdMissing:
      'Čini se da nedostaje korisnički ID. Molimo navedite ga za nastavak',
    scanLimitReached:
      'Dosegli ste maksimalni dopušteni broj skeniranja. Molimo nadogradite svoj plan za nastavak korištenja usluge',
    mandatoryLanguage: 'Jezični kod je obavezan',
  },
  auth: {
    signIn: 'Prijava',
    signUp: 'Registracija',
  },
  loginUserViaEmail: {
    mandatoryEmail: 'Molimo navedite svoju email adresu za nastavak',
    invalidEmail:
      'Unesena email adresa nije valjana. Molimo provjerite i pokušajte ponovno',
    accountCreated:
      'Vaš račun je uspješno kreiran! Molimo provjerite svoj email za verifikacijski kod',
    verificationCodeSent:
      'Poslali smo verifikacijski kod na vaš email. Molimo provjerite pristiglu poštu',
    internalError:
      'Došlo je do pogreške pri autentifikaciji putem emaila. Molimo pokušajte ponovno',
  },
  sendEmailVerification: {
    emailMandatory: 'Email adresa je obavezna za nastavak',
    emailUsed: 'Ova email adresa se već koristi. Molimo koristite drugu',
    userNotFound:
      'Nismo mogli pronaći navedenog korisnika. Molimo provjerite svoje podatke i pokušajte ponovno',
    verificationCodeSent: 'Verifikacijski kod je uspješno poslan na vaš email',
    generalError: 'Došlo je do pogreške pri pokretanju email verifikacije',
  },
  getInterpretationByDate: {
    startEndDateRequired: 'Početni i završni datum su obavezni.',
    startDatePriority: 'Početni datum ne može biti nakon završnog datuma.',
    generalError: 'Nije moguće dohvatiti analize.',
  },
  verifyAuthenticationCode: {
    authCodeMandatory: 'Autentifikacijski kod je obavezan za nastavak',
    emailAddressMandatory: 'Email adresa je obavezna za nastavak',
    userNotFound:
      'Navedeni korisnik nije pronađen. Molimo provjerite svoje podatke i pokušajte ponovno',
    invalidAuthCode:
      'Ups! Ovo nije valjani autentifikacijski kod. Molimo provjerite i pokušajte ponovno!',
    authCodeExpired:
      "Ups! Vaš kod je istekao. Molimo pokušajte ponovno prijaviti se sa svojom email adresom ili kliknite 'Pošalji kod ponovno'",
    authCodeVerified: 'Korisnik je uspješno verificiran',
    generalError: 'Ups! Naišli smo na pogrešku pri verifikaciji vašeg koda',
  },
  analyzeImage: {
    scanLimitReached:
      'Dosegli ste maksimalni dopušteni broj skeniranja. Molimo nadogradite svoj plan za nastavak korištenja usluge',
    imageMissing:
      'Slika nedostaje. Molimo odaberite i učitajte sliku za nastavak',
    uploadImageStorageError:
      'Naišli smo na pogrešku pri učitavanju vaše slike. Molimo provjerite svoju vezu i pokušajte ponovno',
    interpretationNotSaved:
      'Nije moguće spremiti rezultat analize. Molimo provjerite svoju vezu i pokušajte ponovno',
    analysisCompleted: 'Analiza slike uspješno završena!',
  },
  analyzeVideo: {
    noVideoFound:
      'Video datoteka nedostaje. Molimo odaberite i učitajte video za nastavak',
    uploadVideoStorageError:
      'Naišli smo na pogrešku pri učitavanju vašeg videa. Molimo provjerite svoju vezu i pokušajte ponovno',
    interpretationNotSaved:
      'Nije moguće spremiti rezultat analize. Molimo provjerite svoju vezu i pokušajte ponovno',
    analysisCompleted: 'Analiza videa uspješno završena!',
  },
  incrementUsersScans: {
    incrementSuccessScan: 'Još jedno skeniranje je iskorišteno',
    generalError: 'Nije moguće smanjiti broj skeniranja!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Jedno skeniranje je smanjeno',
    decrementErrorScan:
      'Došlo je do problema pri ažuriranju broja skeniranja. Molimo pokušajte kasnije',
    generalError: 'Nije moguće smanjiti broj skeniranja!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Uspješno pretplaćeno!',
    updateSubscriptionError: 'Nije moguće ažurirati korisničku pretplatu!',
  },
  updateUserLanguage: {
    updateSuccess: 'Jezik uspješno ažuriran!',
    updateError:
      'Došlo je do neočekivane pogreške pri ažuriranju jezika. Molimo pokušajte kasnije',
  },
  getUserInfo: {
    successGetInfo: 'Korisnički podaci uspješno dohvaćeni',
    errorGetInfo:
      'Došlo je do neočekivane pogreške pri dohvaćanju korisničkih informacija. Molimo pokušajte kasnije',
  },
  getUserInfoById: {
    noUserInfoData: 'Korisnički dokument postoji, ali nema dostupnih podataka',
    getUserFetchError:
      'Došlo je do pogreške pri dohvaćanju korisničkih informacija',
  },
  updateScanInterpretation: {
    success: 'Zapis interpretacije skeniranja uspješno ažuriran!',
    generalError:
      'Došlo je do pogreške pri ažuriranju interpretacije skeniranja',
    paramsRequired: "I 'documentId' i 'fieldsToUpdate' su obavezni",
  },
  deleteScanInterpretation: {
    success: 'Izvješće je uspješno izbrisano!',
    documentIdRequired: "'DocumentId' je obavezan za nastavak.",
    generalError:
      'Nešto je pošlo po zlu pri brisanju izvješća. Molimo pokušajte ponovno.',
  },
  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' je obavezan",
    noDocIdFound: 'Nije pronađen nijedan dokument s navedenim ID-om',
    success: 'Dokument uspješno dohvaćen',
    generalError:
      'Došlo je do pogreške pri dohvaćanju interpretacije za navedeni ID dokumenta',
  },
  getRecentInterpretation: {
    limitRequired: 'Ograničenje mora biti broj između 1 i 100',
    noInterpretationFound: 'Nisu pronađene interpretacije',
    success: 'Nedavne interpretacije uspješno dohvaćene!',
    generalError: 'Došlo je do pogreške pri dohvaćanju nedavnih interpretacija',
    generalErrorAdditional: 'Došlo je do interne pogreške poslužitelja',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Navedba tokena uređaja je obavezna.',
    generalError: 'Pogreška pri spremanju tokena uređaja',
  },
  sendGlobalPushNotifications: {
    requiredParams: 'Naslov i tijelo obavijesti su obavezni.',
    generalError: 'Došlo je do pogreške pri obradi obavijesti',
    generalErrorAdditional: 'Nije uspjelo slanje globalne obavijesti',
  },
  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'ID uređaja je obavezan',
    languageMandatory: 'Jezik je obavezan',
    deviceIdentified: 'Vaš uređaj je uspješno identificiran',
    generalError: 'Došlo je do pogreške pri provjeri probnog razdoblja uređaja',
  },
  getUserNotification: {
    generalError: 'Nije uspjelo dohvaćanje korisničkih obavijesti',
    generalErrorAdditional:
      'Došlo je do pogreške pri dohvaćanju korisničkih obavijesti',
  },
  getScanCategories: {
    noCategoryFound: 'Nije pronađena nijedna kategorija',
    generalError: 'Došlo je do pogreške pri dohvaćanju kategorija skeniranja',
  },
  uploadScanCategories: {
    successfullyUploaded: 'Kategorije skeniranja uspješno učitane',
    generalError: 'Nije uspjelo učitavanje kategorija skeniranja',
  },
  sendUserNotification: {
    noTokenFound:
      'Nisu pronađeni valjani Expo tokeni. Nije moguće slati obavijesti',
    generalError: 'Nije uspjelo slanje obavijesti',
  },
  updateUser: {
    successUpdatedUser: 'Korisnik uspješno ažuriran',
    updateUserError:
      'Nije moguće ažurirati korisnički zapis. Molimo pokušajte ponovno.',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Odaberite nadimak i započnimo!',
    userLoggedIn: 'Dobrodošli natrag! Prijavljeni ste.',
    accountCreated: 'Ušli ste! Uživajte u istraživanju!',
    error:
      'Ups! Nešto je pošlo po zlu. Molimo provjerite svoju vezu i pokušajte ponovno.',
  },
  continueConversation: {
    messagesLimit:
      'Aura je na punom kapacitetu! Učitajte još jedno skeniranje za nastavak dobivanja analiza i uvida',
    conversationNotFound: 'Nije moguće pronaći razgovor',
    serviceIssueAi:
      'Čini se da postoji problem s AI uslugom. Molimo pokušajte ponovno.',
    noResponseAiService:
      'Nije uspjelo dobiti valjani odgovor od AI usluge. Molimo pokušajte ponovno',
  },
};
