import { ITranslation } from './types';

export const no: ITranslation = {
  common: {
    welcome: 'Velkommen',
    error: 'En feil oppstod',
    loading: 'Laster...',
    noUserFound:
      'Du er ikke autorisert til å gjøre denne forespørselen. Vennligst logg inn',
    userIdMissing:
      'Det ser ut til at bruker-ID mangler. Vennligst oppgi den for å fortsette',
    scanLimitReached:
      'Du har nådd maksimalt antall skanninger tillatt. Vennligst oppgrader abonnementet ditt for å fortsette å bruke tjenesten',
    mandatoryLanguage: 'Språkkoden er påkrevd',
  },
  auth: {
    signIn: 'Logg Inn',
    signUp: 'Registrer Deg',
  },
  loginUserViaEmail: {
    mandatoryEmail: 'Vennligst oppgi e-postadressen din for å fortsette',
    invalidEmail:
      'E-postadressen som er oppgitt er ugyldig. Vennligst verifiser den og prøv igjen',
    accountCreated:
      'Kontoen din har blitt opprettet! Vennligst sjekk e-posten din for verifiseringskoden',
    verificationCodeSent:
      'Vi har sendt en verifiseringskode til e-posten din. Vennligst sjekk innboksen din',
    internalError:
      'Det oppstod en feil under autentisering via e-post. Vennligst prøv igjen',
  },
  sendEmailVerification: {
    emailMandatory: 'En e-postadresse er påkrevd for å fortsette',
    emailUsed:
      'Denne e-postadressen er allerede i bruk. Vennligst bruk en annen',
    userNotFound:
      'Vi kunne ikke finne den angitte brukeren. Vennligst sjekk detaljene dine og prøv igjen',
    verificationCodeSent: 'Verifiseringskoden har blitt sendt til e-posten din',
    generalError: 'En feil oppstod under oppstart av e-postverifisering',
  },
  getInterpretationByDate: {
    startEndDateRequired: 'Startdato og sluttdato er påkrevd.',
    startDatePriority: 'Startdatoen kan ikke være etter sluttdatoen.',
    generalError: 'Kunne ikke hente analyser.',
  },
  verifyAuthenticationCode: {
    authCodeMandatory: 'En autentiseringskode er påkrevd for å fortsette',
    emailAddressMandatory: 'E-postadresse er påkrevd for å fortsette',
    userNotFound:
      'Den angitte brukeren kunne ikke finnes. Vennligst sjekk detaljene dine og prøv igjen',
    invalidAuthCode:
      'Oisann! Dette er ikke en gyldig autentiseringskode. Vennligst sjekk og prøv igjen!',
    authCodeExpired:
      "Oisann! Koden din har utløpt. Vennligst prøv å logge inn på nytt med e-postadressen din eller klikk på 'Send kode på nytt'",
    authCodeVerified: 'Brukeren har blitt bekreftet',
    generalError: 'Oisann! Vi opplevde en feil under verifisering av koden din',
  },
  analyzeImage: {
    scanLimitReached:
      'Du har nådd maksimalt antall skanninger tillatt. Vennligst oppgrader abonnementet ditt for å fortsette å bruke tjenesten',
    imageMissing:
      'Bilde mangler. Vennligst velg og last opp et bilde for å fortsette',
    uploadImageStorageError:
      'Vi opplevde en feil under opplasting av bildet ditt. Vennligst sjekk tilkoblingen din og prøv igjen',
    interpretationNotSaved:
      'Kunne ikke lagre analyseresultatet. Vennligst sjekk tilkoblingen din og prøv igjen',
    analysisCompleted: 'Bildeanalyse fullført!',
  },
  analyzeVideo: {
    noVideoFound:
      'Videofil mangler. Vennligst velg og last opp en video for å fortsette',
    uploadVideoStorageError:
      'Vi opplevde en feil under opplasting av videoen din. Vennligst sjekk tilkoblingen din og prøv igjen',
    interpretationNotSaved:
      'Kunne ikke lagre analyseresultatet. Vennligst sjekk tilkoblingen din og prøv igjen',
    analysisCompleted: 'Videoanalyse fullført!',
  },
  incrementUsersScans: {
    incrementSuccessScan: 'Én skanning til har blitt brukt',
    generalError: 'Kunne ikke redusere antall skanninger!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Én skanning har blitt redusert',
    decrementErrorScan:
      'Det oppstod et problem med oppdatering av antall skanninger. Vennligst prøv igjen senere',
    generalError: 'Kunne ikke redusere antall skanninger!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Abonnert!',
    updateSubscriptionError: 'Kunne ikke oppdatere brukerabonnement!',
  },
  updateUserLanguage: {
    updateSuccess: 'Språk oppdatert!',
    updateError:
      'En uventet feil oppstod under oppdatering av språk. Vennligst prøv igjen senere',
  },
  getUserInfo: {
    successGetInfo: 'Brukerinformasjon hentet',
    errorGetInfo:
      'En uventet feil oppstod under henting av brukerinformasjon. Vennligst prøv igjen senere',
  },
  getUserInfoById: {
    noUserInfoData:
      'Brukerdokumentet eksisterer, men ingen data er tilgjengelig',
    getUserFetchError: 'En feil oppstod under henting av brukerinformasjon',
  },
  updateScanInterpretation: {
    success: 'Skanningtolkning oppdatert!',
    generalError: 'En feil oppstod under oppdatering av skanningtolkning',
    paramsRequired: "Både 'documentId' og 'fieldsToUpdate' er påkrevd",
  },
  deleteScanInterpretation: {
    success: 'Rapporten har blitt slettet!',
    documentIdRequired: "'DocumentId' er påkrevd for å fortsette.",
    generalError:
      'Noe gikk galt under sletting av rapporten. Vennligst prøv igjen.',
  },
  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' er påkrevd",
    noDocIdFound: 'Ingen dokument ble funnet med den oppgitte ID-en',
    success: 'Dokument hentet',
    generalError:
      'En feil oppstod under henting av tolkning for den oppgitte dokument-ID-en',
  },
  getRecentInterpretation: {
    limitRequired: 'Grensen må være et tall mellom 1 og 100',
    noInterpretationFound: 'Ingen tolkninger funnet',
    success: 'Nylige tolkninger hentet!',
    generalError: 'En feil oppstod under henting av nylige tolkninger',
    generalErrorAdditional: 'Intern serverfeil oppstod',
  },
  storeDeviceToken: {
    deviceTokenRequired: 'Å oppgi en enhetstoken er påkrevd.',
    generalError: 'Feil under lagring av enhetstoken',
  },
  sendGlobalPushNotifications: {
    requiredParams: 'Varslingstittel og melding er påkrevd.',
    generalError: 'En feil oppstod under behandling av varsler',
    generalErrorAdditional: 'Kunne ikke sende globalt varsel',
  },
  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Enhets-ID er påkrevd',
    languageMandatory: 'Språk er påkrevd',
    deviceIdentified: 'Enheten din har blitt identifisert',
    generalError: 'En feil oppstod under sjekk av enhetens prøveperiode',
  },
  getUserNotification: {
    generalError: 'Kunne ikke hente brukervarsler',
    generalErrorAdditional: 'En feil oppstod under henting av brukervarsler',
  },
  getScanCategories: {
    noCategoryFound: 'Ingen kategorier funnet',
    generalError: 'En feil oppstod under henting av skanningskategorier',
  },
  uploadScanCategories: {
    successfullyUploaded: 'Skanningskategorier lastet opp',
    generalError: 'Kunne ikke laste opp skanningskategorier',
  },
  sendUserNotification: {
    noTokenFound: 'Ingen gyldige Expo-tokens funnet. Kan ikke sende varsler',
    generalError: 'Kunne ikke sende varsel',
  },
  updateUser: {
    successUpdatedUser: 'Bruker oppdatert',
    updateUserError: 'Kunne ikke oppdatere brukerposten. Vennligst prøv igjen.',
  },
  loginUserAnonymously: {
    mandatoryUsername: 'Velg et kallenavn og la oss komme i gang!',
    userLoggedIn: 'Velkommen tilbake! Du er logget inn.',
    accountCreated: 'Du er inne! Nyt utforskningen!',
    error:
      'Oisann! Noe gikk galt. Vennligst sjekk tilkoblingen din og prøv igjen.',
  },
  continueConversation: {
    messagesLimit:
      'Aura er på full kapasitet! Last opp en annen skanning for å fortsette å få analyse og innsikt',
    conversationNotFound: 'Kunne ikke finne samtalen',
    serviceIssueAi:
      'Det ser ut til å være et problem med AI-tjenesten. Vennligst prøv igjen.',
    noResponseAiService:
      'Kunne ikke få et gyldig svar fra AI-tjenesten. Vennligst prøv igjen',
  },
};
