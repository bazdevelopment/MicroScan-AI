import { ITranslation } from './types';

export const pl: ITranslation = {
  common: {
    welcome: 'Witamy',
    error: 'Wystąpił błąd',
    loading: 'Ładowanie...',
    noUserFound:
      'Nie masz uprawnień do wykonania tego żądania. Proszę się zalogować',
    userIdMissing:
      'Wygląda na to, że brakuje identyfikatora użytkownika. Podaj go, aby kontynuować',
    scanLimitReached:
      'Osiągnąłeś maksymalną dozwoloną liczbę skanów. Zaktualizuj swój plan, aby kontynuować korzystanie z usługi',
    mandatoryLanguage: 'Kod języka jest wymagany',
  },
  auth: {
    signIn: 'Zaloguj się',
    signUp: 'Zarejestruj się',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'Podaj swój adres e-mail, aby kontynuować',
    invalidEmail:
      'Wprowadzony adres e-mail jest nieprawidłowy. Sprawdź go i spróbuj ponownie',
    accountCreated:
      'Twoje konto zostało pomyślnie utworzone! Sprawdź kod weryfikacyjny w swojej skrzynce e-mail',
    verificationCodeSent:
      'Wysłaliśmy kod weryfikacyjny na Twój adres e-mail. Sprawdź swoją skrzynkę odbiorczą',
    internalError:
      'Wystąpił błąd podczas przetwarzania uwierzytelniania za pomocą e-maila. Spróbuj ponownie',
  },

  sendEmailVerification: {
    emailMandatory: 'Adres e-mail jest wymagany do kontynuacji',
    emailUsed: 'Ten adres e-mail jest już używany. Użyj innego',
    userNotFound:
      'Nie znaleźliśmy określonego użytkownika. Sprawdź swoje dane i spróbuj ponownie',
    verificationCodeSent:
      'Kod weryfikacyjny został pomyślnie wysłany na Twój adres e-mail',
    generalError: 'Wystąpił błąd podczas rozpoczynania weryfikacji e-maila',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'Data początkowa i data końcowa są wymagane.',
    startDatePriority: 'Data początkowa nie może być po dacie końcowej.',
    generalError: 'Nie można pobrać analiz.',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'Kod uwierzytelniający jest wymagany do kontynuacji',
    emailAddressMandatory: 'Adres e-mail jest wymagany do kontynuacji',
    userNotFound:
      'Nie można znaleźć określonego użytkownika. Sprawdź swoje dane i spróbuj ponownie',
    invalidAuthCode:
      'Ups! To nie jest prawidłowy kod uwierzytelniający. Sprawdź i spróbuj ponownie!',
    authCodeExpired:
      "Ups! Twój kod wygasł. Spróbuj ponownie zalogować się za pomocą adresu e-mail lub kliknij 'Wyślij kod ponownie'",
    authCodeVerified: 'Użytkownik został pomyślnie zweryfikowany',
    generalError: 'Ups! Wystąpił błąd podczas weryfikacji Twojego kodu',
  },

  analyzeImage: {
    scanLimitReached:
      'Osiągnąłeś maksymalną dozwoloną liczbę skanów. Zaktualizuj swój plan, aby kontynuować korzystanie z usługi',
    imageMissing: 'Brak obrazu. Wybierz i prześlij obraz, aby kontynuować',
    uploadImageStorageError:
      'Wystąpił błąd podczas przesyłania obrazu. Sprawdź swoje połączenie i spróbuj ponownie',
    interpretationNotSaved:
      'Nie można zapisać wyniku analizy. Sprawdź swoje połączenie i spróbuj ponownie',
    analysisCompleted: 'Analiza obrazu zakończona pomyślnie!',
  },
  analyzeVideo: {
    noVideoFound: 'Brak pliku wideo. Wybierz i prześlij wideo, aby kontynuować',
    uploadVideoStorageError:
      'Wystąpił błąd podczas przesyłania wideo. Sprawdź swoje połączenie i spróbuj ponownie',
    interpretationNotSaved:
      'Nie można zapisać wyniku analizy. Sprawdź swoje połączenie i spróbuj ponownie',
    analysisCompleted: 'Analiza wideo zakończona pomyślnie!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'Został użyty kolejny skan',
    generalError: 'Nie można zmniejszyć liczby skanów!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'Jeden skan został odjęty',
    decrementErrorScan:
      'Wystąpił problem z aktualizacją liczby skanów. Spróbuj ponownie później',
    generalError: 'Nie można zmniejszyć liczby skanów!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'Pomyślnie zasubskrybowano!',
    updateSubscriptionError: 'Nie można zaktualizować subskrypcji użytkownika!',
  },
  updateUserLanguage: {
    updateSuccess: 'Język został pomyślnie zaktualizowany!',
    updateError:
      'Wystąpił nieoczekiwany błąd podczas aktualizacji języka. Spróbuj ponownie później',
  },

  getUserInfo: {
    successGetInfo: 'Pomyślnie pobrano dane użytkownika',
    errorGetInfo:
      'Wystąpił nieoczekiwany błąd podczas pobierania informacji o użytkowniku. Spróbuj ponownie później',
  },
  getUserInfoById: {
    noUserInfoData:
      'Dokument użytkownika istnieje, ale nie ma dostępnych danych',
    getUserFetchError:
      'Wystąpił błąd podczas pobierania informacji o użytkowniku',
  },

  updateScanInterpretation: {
    success: 'Rekord interpretacji skanu został pomyślnie zaktualizowany!',
    generalError: 'Wystąpił błąd podczas aktualizacji interpretacji skanu',
    paramsRequired: "'documentId' i 'fieldsToUpdate' są wymagane",
  },
  deleteScanInterpretation: {
    success: 'Raport został pomyślnie usunięty!',
    documentIdRequired: "'DocumentId' jest wymagany do kontynuacji.",
    generalError:
      'Coś poszło nie tak podczas usuwania raportu. Spróbuj ponownie.',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "'DocumentId' jest wymagany",
    noDocIdFound: 'Nie znaleziono dokumentu o podanym identyfikatorze',
    success: 'Dokument pobrany pomyślnie',
    generalError:
      'Wystąpił błąd podczas pobierania interpretacji dla podanego identyfikatora dokumentu',
  },

  getRecentInterpretation: {
    limitRequired: 'Limit musi być liczbą między 1 a 100',
    noInterpretationFound: 'Nie znaleziono interpretacji',
    success: 'Ostatnie interpretacje pobrane pomyślnie!',
    generalError: 'Wystąpił błąd podczas pobierania ostatnich interpretacji',
    generalErrorAdditional: 'Wystąpił wewnętrzny błąd serwera',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'Podanie tokenu urządzenia jest obowiązkowe.',
    generalError: 'Błąd podczas zapisywania tokenu urządzenia',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'Tytuł i treść powiadomienia są obowiązkowe.',
    generalError: 'Wystąpił błąd podczas przetwarzania powiadomień',
    generalErrorAdditional: 'Nie udało się wysłać globalnego powiadomienia',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'Identyfikator urządzenia jest wymagany',
    languageMandatory: 'Język jest wymagany',
    deviceIdentified: 'Twoje urządzenie zostało pomyślnie zidentyfikowane',
    generalError: 'Wystąpił błąd podczas sprawdzania wersji próbnej urządzenia',
  },

  getUserNotification: {
    generalError: 'Nie udało się pobrać powiadomień użytkownika',
    generalErrorAdditional:
      'Wystąpił błąd podczas pobierania powiadomień użytkownika',
  },

  getScanCategories: {
    noCategoryFound: 'Nie znaleziono kategorii',
    generalError: 'Wystąpił błąd podczas pobierania kategorii skanów',
  },

  uploadScanCategories: {
    successfullyUploaded: 'Kategorie skanów przesłane pomyślnie',
    generalError: 'Nie udało się przesłać kategorii skanów',
  },

  sendUserNotification: {
    noTokenFound:
      'Nie znaleziono prawidłowych tokenów Expo. Nie można wysłać powiadomień',
    generalError: 'Nie udało się wysłać powiadomienia',
  },

  updateUser: {
    successUpdatedUser: 'Użytkownik pomyślnie zaktualizowany',
    updateUserError:
      'Nie można zaktualizować rekordu użytkownika. Spróbuj ponownie.',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'Wybierz pseudonim i zacznijmy!',
    userLoggedIn: 'Witamy z powrotem! Jesteś zalogowany.',
    accountCreated: 'Jesteś zalogowany! Miłego odkrywania!',
    error:
      'Ups! Coś poszło nie tak. Sprawdź swoje połączenie i spróbuj ponownie.',
  },
  continueConversation: {
    messagesLimit:
      'Aura jest na pełnej wydajności! Prześlij kolejny skan, aby kontynuować otrzymywanie analiz i spostrzeżeń',
    conversationNotFound: 'Nie można znaleźć konwersacji',
    serviceIssueAi:
      'Wydaje się, że występuje problem z usługą AI. Spróbuj ponownie.',
    noResponseAiService:
      'Nie udało się uzyskać prawidłowej odpowiedzi z usługi AI. Spróbuj ponownie',
  },
};
