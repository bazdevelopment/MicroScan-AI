import { ITranslation } from './types';

export const da: ITranslation = {
  common: {
    welcome: 'Velkommen',
    error: 'Der opstod en fejl',
    loading: 'Indlæser...',
    noUserFound:
      'Du er ikke autoriseret til at foretage denne anmodning. Log venligst ind',
    userIdMissing:
      'Det ser ud til, at bruger-id mangler. Angiv det for at fortsætte',
    scanLimitReached:
      'Du har nået det maksimale antal tilladte scanninger. Opgrader venligst din plan for at fortsætte med at bruge servicen',
    mandatoryLanguage: 'Sprogkoden er påkrævet',
  },
  auth: {
    signIn: 'Log ind',
    signUp: 'Tilmeld dig',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Angiv venligst din e-mailadresse for at fortsætte',
    invalidEmail:
      'Den indtastede e-mailadresse er ugyldig. Bekræft den venligst og prøv igen',
    accountCreated:
      'Din konto er blevet oprettet! Tjek venligst din e-mail for bekræftelseskoden',
    verificationCodeSent:
      'Vi har sendt en bekræftelseskode til din e-mail. Tjek venligst din indbakke',
    internalError:
      'Der opstod en fejl under behandlingen af din godkendelse via e-mail. Prøv venligst igen',
  },

  sendEmailVerification: {
    emailMandatory: 'En e-mailadresse er påkrævet for at fortsætte',
    emailUsed: 'Denne e-mailadresse er allerede i brug. Brug venligst en anden',
    userNotFound:
      'Vi kunne ikke finde den angivne bruger. Tjek venligst dine oplysninger og prøv igen',
    verificationCodeSent: 'Bekræftelseskoden er blevet sendt til din e-mail',
    generalError: 'Der opstod en fejl under start af e-mailbekræftelse',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Startdato og slutdato er påkrævet.',
    startDatePriority: 'Startdatoen kan ikke være efter slutdatoen.',
    generalError: 'Kan ikke hente analyser.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'En godkendelseskode er påkrævet for at fortsætte',
    emailAddressMandatory: 'E-mailadresse er påkrævet for at fortsætte',
    userNotFound:
      'Den angivne bruger kunne ikke findes. Tjek venligst dine oplysninger og prøv igen',
    invalidAuthCode:
      'Ups! Dette er ikke en gyldig godkendelseskode. Tjek venligst og prøv igen!',
    authCodeExpired:
      "Ups! Din kode er udløbet. Prøv venligst at logge ind igen med din e-mailadresse eller klik på 'Send kode igen'",
    authCodeVerified: 'Brugeren er blevet bekræftet',
    generalError: 'Ups! Vi stødte på en fejl under bekræftelse af din kode',
  },

  analyzeImage: {
    scanLimitReached:
      'Du har nået det maksimale antal tilladte scanninger. Opgrader venligst din plan for at fortsætte med at bruge servicen',
    imageMissing:
      'Billede mangler. Vælg og upload venligst et billede for at fortsætte',
    uploadImageStorageError:
      'Vi stødte på en fejl under upload af dit billede. Tjek venligst din forbindelse og prøv igen',
    interpretationNotSaved:
      'Kan ikke gemme analyseresultatet. Tjek venligst din forbindelse og prøv igen',
    analysisCompleted: 'Billedanalyse gennemført!',
  },
  analyzeVideo: {
    noVideoFound:
      'Videofil mangler. Vælg og upload venligst en video for at fortsætte',
    uploadVideoStorageError:
      'Vi stødte på en fejl under upload af din video. Tjek venligst din forbindelse og prøv igen',
    interpretationNotSaved:
      'Kan ikke gemme analyseresultatet. Tjek venligst din forbindelse og prøv igen',
    analysisCompleted: 'Videoanalyse gennemført!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Endnu en scanning er blevet brugt',
    generalError: 'Kan ikke reducere antallet af scanninger!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'En scanning er blevet trukket fra',
    decrementErrorScan:
      'Der opstod et problem med opdatering af antallet af scanninger. Prøv venligst igen senere',
    generalError: 'Kan ikke reducere antallet af scanninger!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Abonnement oprettet!',
    updateSubscriptionError: 'Kan ikke opdatere brugerabonnement!',
  },
  updateUserLanguage: {
    updateSuccess: 'Sproget er opdateret!',
    updateError:
      'Der opstod en uventet fejl under opdatering af sproget. Prøv venligst igen senere',
  },

  getUserInfo: {
    successGetInfo: 'Brugerinfo hentet',
    errorGetInfo:
      'Der opstod en uventet fejl under hentning af brugeroplysninger. Prøv venligst igen senere',
  },
  getUserInfoById: {
    noUserInfoData:
      'Brugerdokumentet eksisterer, men der er ingen data tilgængelige',
    getUserFetchError: 'Der opstod en fejl under hentning af brugeroplysninger',
  },

  updateScanInterpretation: {
    success: 'Scanningstolkningspost opdateret!',
    generalError: 'Der opstod en fejl under opdatering af scanningstolkningen',
    paramsRequired: "'documentId' og 'fieldsToUpdate' er begge påkrævet",
  },
  deleteScanInterpretation: {
    success: 'Rapporten er blevet slettet!',
    documentIdRequired: "'DocumentId' er påkrævet for at fortsætte.",
    generalError:
      'Noget gik galt under sletning af rapporten. Prøv venligst igen.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' er påkrævet",
    noDocIdFound: 'Ingen dokument blev fundet med det angivne id',
    success: 'Dokument hentet',
    generalError:
      'Der opstod en fejl under hentning af tolkningen for det angivne dokument-id',
  },

  getRecentInterpretation: {
    limitRequired: 'Grænsen skal være et tal mellem 1 og 100',
    noInterpretationFound: 'Ingen fortolkninger fundet',
    success: 'Seneste fortolkninger hentet!',
    generalError: 'Der opstod en fejl under hentning af seneste fortolkninger',
    generalErrorAdditional: 'Intern serverfejl opstod',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Angivelse af en enhedstoken er obligatorisk.',
    generalError: 'Fejl under lagring af enhedstoken',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Notifikationstitel og brødtekst er obligatoriske.',
    generalError: 'Der opstod en fejl under behandling af notifikationer',
    generalErrorAdditional: 'Kunne ikke sende global notifikation',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Enheds-ID er påkrævet',
    languageMandatory: 'Sprog er påkrævet',
    deviceIdentified: 'Din enhed er blevet identificeret',
    generalError: 'Der opstod en fejl under kontrol af enhedens prøveperiode',
  },

  getUserNotification: {
    generalError: 'Kunne ikke hente brugernotifikationer',
    generalErrorAdditional:
      'Der opstod en fejl under hentning af brugernotifikationer',
  },

  getScanCategories: {
    noCategoryFound: 'Ingen kategorier fundet',
    generalError: 'Der opstod en fejl under hentning af scanningkategorier',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Scanningkategorier uploadet',
    generalError: 'Kunne ikke uploade scanningkategorier',
  },

  sendUserNotification: {
    noTokenFound:
      'Ingen gyldige Expo-tokens fundet. Kan ikke sende notifikationer',
    generalError: 'Kunne ikke sende notifikation',
  },

  updateUser: {
    successUpdatedUser: 'Bruger opdateret',
    updateUserError: 'Kan ikke opdatere brugerposten. Prøv venligst igen.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Vælg et kaldenavn og lad os komme i gang!',
    userLoggedIn: 'Velkommen tilbage! Du er logget ind.',
    accountCreated: 'Du er logget ind! God fornøjelse med at udforske!',
    error: 'Ups! Noget gik galt. Tjek venligst din forbindelse og prøv igen.',
  },
  continueConversation: {
    messagesLimit:
      'Aura er på fuld kapacitet! Upload endnu en scanning for at fortsætte med at få analyser og indsigt',
    conversationNotFound: 'Kan ikke finde samtalen',
    serviceIssueAi:
      'Der ser ud til at være et problem med AI-tjenesten. Prøv venligst igen.',
    noResponseAiService:
      'Kunne ikke få et gyldigt svar fra AI-tjenesten. Prøv venligst igen',
  },
};
