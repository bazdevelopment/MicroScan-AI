import { ITranslation } from './types';

export const sv: ITranslation = {
  common: {
    welcome: 'Välkommen',
    error: 'Ett fel uppstod',
    loading: 'Laddar...',
    noUserFound:
      'Du är inte behörig att göra denna förfrågan. Var god logga in',
    userIdMissing:
      'Det verkar som att användar-ID saknas. Ange det för att fortsätta',
    scanLimitReached:
      'Du har nått det maximala antalet tillåtna skanningar. Uppgradera din plan för att fortsätta använda tjänsten',
    mandatoryLanguage: 'Språkkoden krävs',
  },
  auth: {
    signIn: 'Logga in',
    signUp: 'Registrera dig',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Ange din e-postadress för att fortsätta',
    invalidEmail:
      'Den angivna e-postadressen är ogiltig. Verifiera den och försök igen',
    accountCreated:
      'Ditt konto har skapats! Kontrollera din e-post för verifieringskoden',
    verificationCodeSent:
      'Vi har skickat en verifieringskod till din e-post. Kontrollera din inkorg',
    internalError:
      'Det uppstod ett fel vid behandling av din autentisering via e-post. Försök igen',
  },

  sendEmailVerification: {
    emailMandatory: 'En e-postadress krävs för att fortsätta',
    emailUsed: 'Denna e-postadress används redan. Använd en annan',
    userNotFound:
      'Vi kunde inte hitta den angivna användaren. Kontrollera dina uppgifter och försök igen',
    verificationCodeSent: 'Verifieringskoden har skickats till din e-post',
    generalError: 'Ett fel uppstod vid start av e-postverifiering',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Startdatum och slutdatum krävs.',
    startDatePriority: 'Startdatumet kan inte vara efter slutdatumet.',
    generalError: 'Kunde inte hämta analyser.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'En autentiseringskod krävs för att fortsätta',
    emailAddressMandatory: 'E-postadress krävs för att fortsätta',
    userNotFound:
      'Den angivna användaren kunde inte hittas. Kontrollera dina uppgifter och försök igen',
    invalidAuthCode:
      'Oj! Detta är inte en giltig autentiseringskod. Kontrollera och försök igen!',
    authCodeExpired:
      "Oj! Din kod har utgått. Försök logga in igen med din e-postadress eller klicka på 'Skicka kod igen'",
    authCodeVerified: 'Användaren har verifierats',
    generalError: 'Oj! Vi stötte på ett fel vid verifiering av din kod',
  },

  analyzeImage: {
    scanLimitReached:
      'Du har nått det maximala antalet tillåtna skanningar. Uppgradera din plan för att fortsätta använda tjänsten',
    imageMissing: 'Bild saknas. Välj och ladda upp en bild för att fortsätta',
    uploadImageStorageError:
      'Vi stötte på ett fel vid uppladdning av din bild. Kontrollera din anslutning och försök igen',
    interpretationNotSaved:
      'Kunde inte spara analysresultatet. Kontrollera din anslutning och försök igen',
    analysisCompleted: 'Bildanalys slutförd!',
  },
  analyzeVideo: {
    noVideoFound:
      'Videofil saknas. Välj och ladda upp en video för att fortsätta',
    uploadVideoStorageError:
      'Vi stötte på ett fel vid uppladdning av din video. Kontrollera din anslutning och försök igen',
    interpretationNotSaved:
      'Kunde inte spara analysresultatet. Kontrollera din anslutning och försök igen',
    analysisCompleted: 'Videoanalys slutförd!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Ytterligare en skanning har använts',
    generalError: 'Kunde inte minska antalet skanningar!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'En skanning har dragits tillbaka',
    decrementErrorScan:
      'Det uppstod ett problem med uppdatering av antalet skanningar. Försök igen senare',
    generalError: 'Kunde inte minska antalet skanningar!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Prenumereration lyckades!',
    updateSubscriptionError: 'Kunde inte uppdatera användarprenumeration!',
  },
  updateUserLanguage: {
    updateSuccess: 'Språket uppdaterat!',
    updateError:
      'Ett oväntat fel uppstod vid uppdatering av språket. Försök igen senare',
  },

  getUserInfo: {
    successGetInfo: 'Användarinformation hämtad',
    errorGetInfo:
      'Ett oväntat fel uppstod vid hämtning av användarinformation. Försök igen senare',
  },
  getUserInfoById: {
    noUserInfoData: 'Användardokumentet finns men ingen data är tillgänglig',
    getUserFetchError: 'Ett fel uppstod vid hämtning av användarinformation',
  },

  updateScanInterpretation: {
    success: 'Skanningstolkningspost uppdaterad!',
    generalError: 'Ett fel uppstod vid uppdatering av skanningstolkningen',
    paramsRequired: "'documentId' och 'fieldsToUpdate' krävs båda",
  },
  deleteScanInterpretation: {
    success: 'Rapporten har raderats!',
    documentIdRequired: "'DocumentId' krävs för att fortsätta.",
    generalError: 'Något gick fel vid radering av rapporten. Försök igen.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' krävs",
    noDocIdFound: 'Inget dokument hittades med det angivna id:t',
    success: 'Dokument hämtat',
    generalError:
      'Ett fel uppstod vid hämtning av tolkningen för det angivna dokument-id:t',
  },

  getRecentInterpretation: {
    limitRequired: 'Gränsen måste vara ett nummer mellan 1 och 100',
    noInterpretationFound: 'Inga tolkningar hittades',
    success: 'Senaste tolkningarna hämtade!',
    generalError: 'Ett fel uppstod vid hämtning av senaste tolkningar',
    generalErrorAdditional: 'Ett internt serverfel uppstod',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Angivande av en enhetstoken är obligatoriskt.',
    generalError: 'Fel vid lagring av enhetstoken',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Aviseringstitel och brödtext är obligatoriska.',
    generalError: 'Ett fel uppstod vid behandling av aviseringar',
    generalErrorAdditional: 'Kunde inte skicka global avisering',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Enhets-ID krävs',
    languageMandatory: 'Språk krävs',
    deviceIdentified: 'Din enhet har identifierats',
    generalError: 'Ett fel uppstod vid kontroll av enhetens provperiod',
  },

  getUserNotification: {
    generalError: 'Kunde inte hämta användaraviseringar',
    generalErrorAdditional:
      'Ett fel uppstod vid hämtning av användaraviseringar',
  },

  getScanCategories: {
    noCategoryFound: 'Inga kategorier hittades',
    generalError: 'Ett fel uppstod vid hämtning av skanningskategorier',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Skanningskategorier uppladdade',
    generalError: 'Kunde inte ladda upp skanningskategorier',
  },

  sendUserNotification: {
    noTokenFound:
      'Inga giltiga Expo-tokens hittades. Kan inte skicka aviseringar',
    generalError: 'Kunde inte skicka avisering',
  },

  updateUser: {
    successUpdatedUser: 'Användaren uppdaterad',
    updateUserError: 'Kan inte uppdatera användarposten. Försök igen.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Välj ett smeknamn och låt oss komma igång!',
    userLoggedIn: 'Välkommen tillbaka! Du är inloggad.',
    accountCreated: 'Du är inloggad! Njut av utforskandet!',
    error: 'Oj! Något gick fel. Kontrollera din anslutning och försök igen.',
  },
  continueConversation: {
    messagesLimit:
      'Aura är på full kapacitet! Ladda upp ytterligare en skanning för att fortsätta få analyser och insikter',
    conversationNotFound: 'Kan inte hitta konversationen',
    serviceIssueAi: 'Det verkar vara ett problem med AI-tjänsten. Försök igen.',
    noResponseAiService:
      'Kunde inte få ett giltigt svar från AI-tjänsten. Försök igen',
  },
};
