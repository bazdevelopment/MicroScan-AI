import { ITranslation } from './types';

export const fi: ITranslation = {
  common: {
    welcome: 'Tervetuloa',
    error: 'Tapahtui virhe',
    loading: 'Ladataan...',
    noUserFound:
      'Sinulla ei ole oikeutta tehdä tätä pyyntöä. Ole hyvä ja kirjaudu sisään',
    userIdMissing: 'Käyttäjätunnus puuttuu. Anna se jatkaaksesi',
    scanLimitReached:
      'Olet saavuttanut sallittujen skannausten enimmäismäärän. Päivitä suunnitelmasi jatkaaksesi palvelun käyttöä',
    mandatoryLanguage: 'Kielikoodi on pakollinen',
  },
  auth: {
    signIn: 'Kirjaudu sisään',
    signUp: 'Rekisteröidy',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Anna sähköpostiosoitteesi jatkaaksesi',
    invalidEmail:
      'Annettu sähköpostiosoite on virheellinen. Tarkista se ja yritä uudelleen',
    accountCreated:
      'Tilisi on luotu onnistuneesti! Tarkista sähköpostistasi vahvistuskoodi',
    verificationCodeSent:
      'Olemme lähettäneet vahvistuskoodin sähköpostiisi. Tarkista saapuneet viestit',
    internalError: 'Sähköpostitunnistuksessasi tapahtui virhe. Yritä uudelleen',
  },

  sendEmailVerification: {
    emailMandatory: 'Sähköpostiosoite vaaditaan jatkaaksesi',
    emailUsed: 'Tätä sähköpostiosoitetta käytetään jo. Käytä toista osoitetta',
    userNotFound:
      'Määritettyä käyttäjää ei löytynyt. Tarkista tietosi ja yritä uudelleen',
    verificationCodeSent:
      'Vahvistuskoodi on lähetetty onnistuneesti sähköpostiisi',
    generalError: 'Sähköpostivahvistuksen aloittamisessa tapahtui virhe',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Aloitus- ja lopetuspäivämäärä vaaditaan.',
    startDatePriority:
      'Aloituspäivämäärä ei voi olla lopetuspäivämäärän jälkeen.',
    generalError: 'Analyysien noutaminen epäonnistui.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'Tunnistuskoodi on pakollinen jatkaaksesi',
    emailAddressMandatory: 'Sähköpostiosoite on pakollinen jatkaaksesi',
    userNotFound:
      'Määritettyä käyttäjää ei löytynyt. Tarkista tietosi ja yritä uudelleen',
    invalidAuthCode:
      'Hups! Tämä ei ole kelvollinen tunnistuskoodi. Tarkista ja yritä uudelleen!',
    authCodeExpired:
      "Hups! Koodisi on vanhentunut. Yritä kirjautua uudelleen sähköpostiosoitteellasi tai napsauta 'Lähetä koodi uudelleen'",
    authCodeVerified: 'Käyttäjä on vahvistettu onnistuneesti',
    generalError: 'Hups! Koodisi vahvistamisessa tapahtui virhe',
  },

  analyzeImage: {
    scanLimitReached:
      'Olet saavuttanut sallittujen skannausten enimmäismäärän. Päivitä suunnitelmasi jatkaaksesi palvelun käyttöä',
    imageMissing: 'Kuva puuttuu. Valitse ja lataa kuva jatkaaksesi',
    uploadImageStorageError:
      'Kuvan lataamisessa tapahtui virhe. Tarkista yhteytesi ja yritä uudelleen',
    interpretationNotSaved:
      'Analyysitulosta ei voitu tallentaa. Tarkista yhteytesi ja yritä uudelleen',
    analysisCompleted: 'Kuvan analysointi onnistui!',
  },
  analyzeVideo: {
    noVideoFound: 'Videotiedosto puuttuu. Valitse ja lataa video jatkaaksesi',
    uploadVideoStorageError:
      'Videon lataamisessa tapahtui virhe. Tarkista yhteytesi ja yritä uudelleen',
    interpretationNotSaved:
      'Analyysitulosta ei voitu tallentaa. Tarkista yhteytesi ja yritä uudelleen',
    analysisCompleted: 'Videon analysointi onnistui!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Yksi skannaus lisää on käytetty',
    generalError: 'Skannausten määrän vähentäminen epäonnistui!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Yksi skannaus on vähennetty',
    decrementErrorScan:
      'Skannausten määrän päivityksessä tapahtui ongelma. Yritä myöhemmin uudelleen',
    generalError: 'Skannausten määrän vähentäminen epäonnistui!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Tilaus onnistui!',
    updateSubscriptionError: 'Käyttäjän tilauksen päivittäminen epäonnistui!',
  },
  updateUserLanguage: {
    updateSuccess: 'Kieli päivitetty onnistuneesti!',
    updateError:
      'Kielen päivityksessä tapahtui odottamaton virhe. Yritä myöhemmin uudelleen',
  },

  getUserInfo: {
    successGetInfo: 'Käyttäjätiedot haettu onnistuneesti',
    errorGetInfo:
      'Käyttäjätietojen noutamisessa tapahtui odottamaton virhe. Yritä myöhemmin uudelleen',
  },
  getUserInfoById: {
    noUserInfoData:
      'Käyttäjäasiakirja on olemassa, mutta tietoja ei ole saatavilla',
    getUserFetchError: 'Käyttäjätietojen noutamisessa tapahtui virhe',
  },

  updateScanInterpretation: {
    success: 'Skannauksen tulkintatietue päivitetty onnistuneesti!',
    generalError: 'Skannauksen tulkinnan päivityksessä tapahtui virhe',
    paramsRequired: "'documentId' ja 'fieldsToUpdate' vaaditaan molemmat",
  },
  deleteScanInterpretation: {
    success: 'Raportti on poistettu onnistuneesti!',
    documentIdRequired: "'DocumentId' vaaditaan jatkaaksesi.",
    generalError: 'Raportin poistamisessa tapahtui virhe. Yritä uudelleen.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' vaaditaan",
    noDocIdFound: 'Annettua tunnistetta vastaavaa asiakirjaa ei löytynyt',
    success: 'Asiakirja haettu onnistuneesti',
    generalError:
      'Annettua asiakirjatunnistetta vastaavan tulkinnan noutamisessa tapahtui virhe',
  },

  getRecentInterpretation: {
    limitRequired: 'Rajan on oltava numero 1-100 välillä',
    noInterpretationFound: 'Tulkintoja ei löytynyt',
    success: 'Viimeisimmät tulkinnat haettu onnistuneesti!',
    generalError: 'Viimeisimpien tulkintojen noutamisessa tapahtui virhe',
    generalErrorAdditional: 'Tapahtui palvelimen sisäinen virhe',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Laitetunnuksen antaminen on pakollista.',
    generalError: 'Virhe laitetunnusta tallentaessa',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Ilmoituksen otsikko ja viesti ovat pakollisia.',
    generalError: 'Ilmoituksia käsiteltäessä tapahtui virhe',
    generalErrorAdditional: 'Maailmanlaajuisen ilmoituksen lähetys epäonnistui',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Laitetunniste on pakollinen',
    languageMandatory: 'Kieli on pakollinen',
    deviceIdentified: 'Laitteesi on tunnistettu onnistuneesti',
    generalError: 'Laitteen kokeilujakson tarkistamisessa tapahtui virhe',
  },

  getUserNotification: {
    generalError: 'Käyttäjäilmoitusten noutaminen epäonnistui',
    generalErrorAdditional: 'Käyttäjäilmoituksia noudettaessa tapahtui virhe',
  },

  getScanCategories: {
    noCategoryFound: 'Kategorioita ei löytynyt',
    generalError: 'Skannauskategorioita noudettaessa tapahtui virhe',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Skannauskategoriat ladattu onnistuneesti',
    generalError: 'Skannauskategorioiden lataaminen epäonnistui',
  },

  sendUserNotification: {
    noTokenFound:
      'Kelvollisia Expo-tunnisteita ei löytynyt. Ilmoituksia ei voi lähettää',
    generalError: 'Ilmoituksen lähetys epäonnistui',
  },

  updateUser: {
    successUpdatedUser: 'Käyttäjä päivitetty onnistuneesti',
    updateUserError: 'Käyttäjätietuetta ei voi päivittää. Yritä uudelleen.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Valitse nimimerkki ja aloitetaan!',
    userLoggedIn: 'Tervetuloa takaisin! Olet kirjautunut sisään.',
    accountCreated: 'Olet kirjautunut sisään! Nauti tutkimisesta!',
    error: 'Hups! Jotain meni pieleen. Tarkista yhteytesi ja yritä uudelleen.',
  },
  continueConversation: {
    messagesLimit:
      'Aura on täydellä kapasiteetilla! Lataa toinen skannaus jatkaaksesi analyysien ja oivallusten saamista',
    conversationNotFound: 'Keskustelua ei löytynyt',
    serviceIssueAi:
      'Tekoälypalvelussa näyttää olevan ongelma. Yritä uudelleen.',
    noResponseAiService:
      'Tekoälypalvelusta ei saatu kelvollista vastausta. Yritä uudelleen',
  },
};
