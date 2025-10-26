import { ITranslation } from './types';

export const it: ITranslation = {
  common: {
    welcome: 'Benvenuto',
    error: 'Si è verificato un errore',
    loading: 'Caricamento...',
    noUserFound:
      'Non sei autorizzato a effettuare questa richiesta. Accedi per favore',
    userIdMissing: "Sembra che manchi l'ID utente. Forniscilo per procedere",
    scanLimitReached:
      'Hai raggiunto il numero massimo di scansioni consentite. Aggiorna il tuo piano per continuare a utilizzare il servizio',
    mandatoryLanguage: 'Il codice lingua è obbligatorio',
  },
  auth: {
    signIn: 'Accedi',
    signUp: 'Registrati',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Fornisci il tuo indirizzo email per procedere',
    invalidEmail:
      "L'indirizzo email inserito non è valido. Verificalo e riprova",
    accountCreated:
      'Il tuo account è stato creato con successo! Controlla la tua email per il codice di verifica',
    verificationCodeSent:
      'Abbiamo inviato un codice di verifica alla tua email. Controlla la tua casella di posta',
    internalError:
      "Si è verificato un errore durante l'autenticazione tramite email. Riprova",
  },

  sendEmailVerification: {
    emailMandatory: 'È richiesto un indirizzo email per procedere',
    emailUsed: 'Questo indirizzo email è già in uso. Utilizzane un altro',
    userNotFound:
      "Non siamo riusciti a trovare l'utente specificato. Controlla i tuoi dati e riprova",
    verificationCodeSent:
      'Il codice di verifica è stato inviato con successo alla tua email',
    generalError:
      "Si è verificato un errore durante l'avvio della verifica email",
  },

  getInterpretationByDate: {
    startEndDateRequired:
      'La data di inizio e la data di fine sono obbligatorie.',
    startDatePriority:
      'La data di inizio non può essere successiva alla data di fine.',
    generalError: 'Impossibile recuperare le analisi.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory:
      'Un codice di autenticazione è obbligatorio per continuare',
    emailAddressMandatory: "L'indirizzo email è obbligatorio per continuare",
    userNotFound:
      "Impossibile trovare l'utente specificato. Controlla i tuoi dati e riprova",
    invalidAuthCode:
      'Ops! Questo non è un codice di autenticazione valido. Controlla e riprova!',
    authCodeExpired:
      "Ops! Il tuo codice è scaduto. Riprova ad accedere con il tuo indirizzo email o clicca su 'Invia di nuovo il codice'",
    authCodeVerified: "L'utente è stato verificato con successo",
    generalError:
      'Ops! Abbiamo riscontrato un errore durante la verifica del tuo codice',
  },

  analyzeImage: {
    scanLimitReached:
      'Hai raggiunto il numero massimo di scansioni consentite. Aggiorna il tuo piano per continuare a utilizzare il servizio',
    imageMissing:
      "Immagine mancante. Seleziona e carica un'immagine per procedere",
    uploadImageStorageError:
      'Abbiamo riscontrato un errore durante il caricamento della tua immagine. Controlla la connessione e riprova',
    interpretationNotSaved:
      "Impossibile salvare il risultato dell'analisi. Controlla la connessione e riprova",
    analysisCompleted: "Analisi dell'immagine completata con successo!",
  },
  analyzeVideo: {
    noVideoFound:
      'File video mancante. Seleziona e carica un video per procedere',
    uploadVideoStorageError:
      'Abbiamo riscontrato un errore durante il caricamento del tuo video. Controlla la connessione e riprova',
    interpretationNotSaved:
      "Impossibile salvare il risultato dell'analisi. Controlla la connessione e riprova",
    analysisCompleted: 'Analisi del video completata con successo!',
  },

  incrementUsersScans: {
    incrementSuccessScan: "Un'ulteriore scansione è stata utilizzata",
    generalError: 'Impossibile decrementare il numero di scansioni!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Una scansione è stata decrementata',
    decrementErrorScan:
      "Si è verificato un problema durante l'aggiornamento del numero di scansioni. Riprova più tardi",
    generalError: 'Impossibile decrementare il numero di scansioni!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Abbonamento effettuato con successo!',
    updateSubscriptionError:
      "Impossibile aggiornare l'abbonamento dell'utente!",
  },
  updateUserLanguage: {
    updateSuccess: 'Lingua aggiornata con successo!',
    updateError:
      "Si è verificato un errore imprevisto durante l'aggiornamento della lingua. Riprova più tardi",
  },

  getUserInfo: {
    successGetInfo: 'Informazioni utente recuperate con successo',
    errorGetInfo:
      'Si è verificato un errore imprevisto durante il recupero delle informazioni utente. Riprova più tardi',
  },
  getUserInfoById: {
    noUserInfoData: 'Il documento utente esiste, ma non sono disponibili dati',
    getUserFetchError:
      'Si è verificato un errore durante il recupero delle informazioni utente',
  },

  updateScanInterpretation: {
    success:
      'Record di interpretazione della scansione aggiornato con successo!',
    generalError:
      "Si è verificato un errore durante l'aggiornamento dell'interpretazione della scansione",
    paramsRequired: "'documentId' e 'fieldsToUpdate' sono entrambi obbligatori",
  },
  deleteScanInterpretation: {
    success: 'Il report è stato eliminato con successo!',
    documentIdRequired: "'DocumentId' è obbligatorio per procedere.",
    generalError:
      "Qualcosa è andato storto durante l'eliminazione del report. Riprova.",
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' è obbligatorio",
    noDocIdFound: "Nessun documento trovato con l'ID fornito",
    success: 'Documento recuperato con successo',
    generalError:
      "Si è verificato un errore durante il recupero dell'interpretazione per l'ID documento fornito",
  },

  getRecentInterpretation: {
    limitRequired: 'Il limite deve essere un numero compreso tra 1 e 100',
    noInterpretationFound: 'Nessuna interpretazione trovata',
    success: 'Interpretazioni recenti recuperate con successo!',
    generalError:
      'Si è verificato un errore durante il recupero delle interpretazioni recenti',
    generalErrorAdditional: 'Si è verificato un errore interno del server',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Fornire un token del dispositivo è obbligatorio.',
    generalError: 'Errore durante il salvataggio del token del dispositivo',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Il titolo e il corpo della notifica sono obbligatori.',
    generalError:
      "Si è verificato un errore durante l'elaborazione delle notifiche",
    generalErrorAdditional: 'Impossibile inviare la notifica globale',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: "L'ID del dispositivo è obbligatorio",
    languageMandatory: 'La lingua è obbligatoria',
    deviceIdentified: 'Il tuo dispositivo è stato identificato con successo',
    generalError:
      'Si è verificato un errore durante il controllo della prova del dispositivo',
  },

  getUserNotification: {
    generalError: "Impossibile recuperare le notifiche dell'utente",
    generalErrorAdditional:
      "Si è verificato un errore durante il recupero delle notifiche dell'utente",
  },

  getScanCategories: {
    noCategoryFound: 'Nessuna categoria trovata',
    generalError:
      'Si è verificato un errore durante il recupero delle categorie di scansione',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Categorie di scansione caricate con successo',
    generalError: 'Impossibile caricare le categorie di scansione',
  },

  sendUserNotification: {
    noTokenFound:
      'Nessun token Expo valido trovato. Impossibile inviare notifiche',
    generalError: 'Impossibile inviare la notifica',
  },

  updateUser: {
    successUpdatedUser: 'Utente aggiornato con successo',
    updateUserError: 'Impossibile aggiornare il record utente. Riprova.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Scegli un nickname e iniziamo!',
    userLoggedIn: 'Bentornato! Sei dentro.',
    accountCreated: "Sei dentro! Goditi l'esplorazione!",
    error: 'Ops! Qualcosa è andato storto. Controlla la connessione e riprova.',
  },
  continueConversation: {
    messagesLimit:
      "Aura è a piena capacità! Carica un'altra scansione per continuare a ricevere analisi e approfondimenti",
    conversationNotFound: 'Impossibile trovare la conversazione',
    serviceIssueAi: 'Sembra esserci un problema con il servizio AI. Riprova.',
    noResponseAiService:
      'Impossibile ottenere una risposta valida dal servizio AI. Riprova',
  },
};
