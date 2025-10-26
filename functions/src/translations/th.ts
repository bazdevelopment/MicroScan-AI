import { ITranslation } from './types';

export const th: ITranslation = {
  common: {
    welcome: 'ยินดีต้อนรับ',
    error: 'เกิดข้อผิดพลาด',
    loading: 'กำลังโหลด...',
    noUserFound: 'คุณไม่ได้รับอนุญาตให้ทำคำขอนี้ กรุณาเข้าสู่ระบบ',
    userIdMissing: 'ดูเหมือนว่าจะไม่มีรหัสผู้ใช้ กรุณาระบุเพื่อดำเนินการต่อ',
    scanLimitReached:
      'คุณใช้จำนวนการสแกนสูงสุดที่อนุญาตแล้ว กรุณาอัปเกรดแผนของคุณเพื่อใช้บริการต่อ',
    mandatoryLanguage: 'จำเป็นต้องมีรหัสภาษา',
  },
  auth: {
    signIn: 'เข้าสู่ระบบ',
    signUp: 'ลงทะเบียน',
  },

  loginUserViaEmail: {
    mandatoryEmail: 'กรุณาระบุที่อยู่อีเมลของคุณเพื่อดำเนินการต่อ',
    invalidEmail: 'ที่อยู่อีเมลที่ป้อนไม่ถูกต้อง กรุณาตรวจสอบและลองอีกครั้ง',
    accountCreated:
      'สร้างบัญชีของคุณเรียบร้อยแล้ว! กรุณาตรวจสอบอีเมลของคุณเพื่อรับรหัสยืนยัน',
    verificationCodeSent:
      'เราได้ส่งรหัสยืนยันไปยังอีเมลของคุณแล้ว กรุณาตรวจสอบกล่องจดหมาย',
    internalError:
      'เกิดข้อผิดพลาดในการประมวลผลการยืนยันตัวตนผ่านอีเมล กรุณาลองอีกครั้ง',
  },

  sendEmailVerification: {
    emailMandatory: 'จำเป็นต้องมีที่อยู่อีเมลเพื่อดำเนินการต่อ',
    emailUsed: 'ที่อยู่อีเมลนี้ถูกใช้แล้ว กรุณาใช้อีเมลอื่น',
    userNotFound: 'เราไม่พบผู้ใช้ที่ระบุ กรุณาตรวจสอบรายละเอียดและลองอีกครั้ง',
    verificationCodeSent: 'ส่งรหัสยืนยันไปยังอีเมลของคุณเรียบร้อยแล้ว',
    generalError: 'เกิดข้อผิดพลาดในการเริ่มการยืนยันอีเมล',
  },

  getInterpretationByDate: {
    startEndDateRequired: 'จำเป็นต้องมีวันที่เริ่มต้นและวันที่สิ้นสุด',
    startDatePriority: 'วันที่เริ่มต้นไม่สามารถอยู่หลังวันที่สิ้นสุดได้',
    generalError: 'ไม่สามารถดึงการวิเคราะห์ได้',
  },

  verifyAuthenticationCode: {
    authCodeMandatory: 'จำเป็นต้องมีรหัสยืนยันตัวตนเพื่อดำเนินการต่อ',
    emailAddressMandatory: 'จำเป็นต้องมีที่อยู่อีเมลเพื่อดำเนินการต่อ',
    userNotFound: 'ไม่พบผู้ใช้ที่ระบุ กรุณาตรวจสอบรายละเอียดและลองอีกครั้ง',
    invalidAuthCode:
      'โอ๊ะ! นี่ไม่ใช่รหัสยืนยันตัวตนที่ถูกต้อง กรุณาตรวจสอบและลองอีกครั้ง!',
    authCodeExpired:
      "โอ๊ะ! รหัสของคุณหมดอายุแล้ว กรุณาลองเข้าสู่ระบบอีกครั้งด้วยที่อยู่อีเมลของคุณ หรือคลิก 'ส่งรหัสอีกครั้ง'",
    authCodeVerified: 'ยืนยันผู้ใช้เรียบร้อยแล้ว',
    generalError: 'โอ๊ะ! เราเจอข้อผิดพลาดขณะยืนยันรหัสของคุณ',
  },

  analyzeImage: {
    scanLimitReached:
      'คุณใช้จำนวนการสแกนสูงสุดที่อนุญาตแล้ว กรุณาอัปเกรดแผนของคุณเพื่อใช้บริการต่อ',
    imageMissing: 'ไม่มีรูปภาพ กรุณาเลือกรูปภาพและอัปโหลดเพื่อดำเนินการต่อ',
    uploadImageStorageError:
      'เราเจอข้อผิดพลาดขณะอัปโหลดรูปภาพของคุณ กรุณาตรวจสอบการเชื่อมต่อและลองอีกครั้ง',
    interpretationNotSaved:
      'ไม่สามารถบันทึกผลการวิเคราะห์ได้ กรุณาตรวจสอบการเชื่อมต่อและลองอีกครั้ง',
    analysisCompleted: 'วิเคราะห์รูปภาพเสร็จสมบูรณ์แล้ว!',
  },
  analyzeVideo: {
    noVideoFound: 'ไม่มีไฟล์วิดีโอ กรุณาเลือกและอัปโหลดวิดีโอเพื่อดำเนินการต่อ',
    uploadVideoStorageError:
      'เราเจอข้อผิดพลาดขณะอัปโหลดวิดีโอของคุณ กรุณาตรวจสอบการเชื่อมต่อและลองอีกครั้ง',
    interpretationNotSaved:
      'ไม่สามารถบันทึกผลการวิเคราะห์ได้ กรุณาตรวจสอบการเชื่อมต่อและลองอีกครั้ง',
    analysisCompleted: 'วิเคราะห์วิดีโอเสร็จสมบูรณ์แล้ว!',
  },

  incrementUsersScans: {
    incrementSuccessScan: 'ใช้การสแกนเพิ่มอีกหนึ่งครั้ง',
    generalError: 'ไม่สามารถลดจำนวนการสแกนได้!',
  },
  decrementUserScans: {
    decrementSuccessScan: 'ลดการสแกนแล้วหนึ่งครั้ง',
    decrementErrorScan:
      'มีปัญหาในการอัปเดตจำนวนการสแกน กรุณาลองอีกครั้งในภายหลัง',
    generalError: 'ไม่สามารถลดจำนวนการสแกนได้!',
  },
  updateUserSubscription: {
    subscribeSuccess: 'สมัครสมาชิกเรียบร้อยแล้ว!',
    updateSubscriptionError: 'ไม่สามารถอัปเดตการสมัครสมาชิกผู้ใช้!',
  },
  updateUserLanguage: {
    updateSuccess: 'อัปเดตภาษาเรียบร้อยแล้ว!',
    updateError:
      'เกิดข้อผิดพลาดที่ไม่คาดคิดขณะอัปเดตภาษา กรุณาลองอีกครั้งในภายหลัง',
  },

  getUserInfo: {
    successGetInfo: 'ดึงข้อมูลผู้ใช้เรียบร้อยแล้ว',
    errorGetInfo:
      'เกิดข้อผิดพลาดที่ไม่คาดคิดขณะดึงข้อมูลผู้ใช้ กรุณาลองอีกครั้งในภายหลัง',
  },
  getUserInfoById: {
    noUserInfoData: 'มีเอกสารผู้ใช้อยู่ แต่ไม่มีข้อมูล',
    getUserFetchError: 'เกิดข้อผิดพลาดขณะดึงข้อมูลผู้ใช้',
  },

  updateScanInterpretation: {
    success: 'อัปเดตบันทึกการตีความการสแกนเรียบร้อยแล้ว!',
    generalError: 'เกิดข้อผิดพลาดขณะอัปเดตการตีความการสแกน',
    paramsRequired: "จำเป็นต้องมีทั้ง 'documentId' และ 'fieldsToUpdate'",
  },
  deleteScanInterpretation: {
    success: 'ลบรายงานเรียบร้อยแล้ว!',
    documentIdRequired: "จำเป็นต้องมี 'DocumentId' เพื่อดำเนินการต่อ",
    generalError: 'มีบางอย่างผิดพลาดขณะลบรายงาน กรุณาลองอีกครั้ง',
  },

  getInterpretationByDocumentId: {
    paramsRequired: "จำเป็นต้องมี 'DocumentId'",
    noDocIdFound: 'ไม่พบเอกสารด้วยรหัสที่ระบุ',
    success: 'ดึงเอกสารเรียบร้อยแล้ว',
    generalError: 'เกิดข้อผิดพลาดขณะดึงการตีความสำหรับรหัสเอกสารที่ระบุ',
  },

  getRecentInterpretation: {
    limitRequired: 'ขีดจำกัดต้องเป็นตัวเลขระหว่าง 1 ถึง 100',
    noInterpretationFound: 'ไม่พบการตีความ',
    success: 'ดึงการตีความล่าสุดเรียบร้อยแล้ว!',
    generalError: 'เกิดข้อผิดพลาดขณะดึงการตีความล่าสุด',
    generalErrorAdditional: 'เกิดข้อผิดพลาดเซิร์ฟเวอร์ภายใน',
  },

  storeDeviceToken: {
    deviceTokenRequired: 'จำเป็นต้องมีโทเค็นอุปกรณ์',
    generalError: 'ข้อผิดพลาดในการเก็บโทเค็นอุปกรณ์',
  },

  sendGlobalPushNotifications: {
    requiredParams: 'จำเป็นต้องมีหัวข้อและเนื้อหาการแจ้งเตือน',
    generalError: 'เกิดข้อผิดพลาดขณะประมวลผลการแจ้งเตือน',
    generalErrorAdditional: 'ส่งการแจ้งเตือนทั่วไม่ไม่สำเร็จ',
  },

  checkDeviceUniqueIdentifier: {
    deviceMandatory: 'จำเป็นต้องมีรหัสอุปกรณ์',
    languageMandatory: 'จำเป็นต้องมีภาษา',
    deviceIdentified: 'ระบุอุปกรณ์ของคุณเรียบร้อยแล้ว',
    generalError: 'เกิดข้อผิดพลาดขณะตรวจสอบการทดลองใช้อุปกรณ์',
  },

  getUserNotification: {
    generalError: 'ดึงการแจ้งเตือนผู้ใช้ไม่สำเร็จ',
    generalErrorAdditional: 'เกิดข้อผิดพลาดขณะดึงการแจ้งเตือนผู้ใช้',
  },

  getScanCategories: {
    noCategoryFound: 'ไม่พบหมวดหมู่',
    generalError: 'เกิดข้อผิดพลาดขณะดึงหมวดหมู่การสแกน',
  },

  uploadScanCategories: {
    successfullyUploaded: 'อัปโหลดหมวดหมู่การสแกนเรียบร้อยแล้ว',
    generalError: 'อัปโหลดหมวดหมู่การสแกนไม่สำเร็จ',
  },

  sendUserNotification: {
    noTokenFound: 'ไม่พบโทเค็น Expo ที่ถูกต้อง ไม่สามารถส่งการแจ้งเตือนได้',
    generalError: 'ส่งการแจ้งเตือนไม่สำเร็จ',
  },

  updateUser: {
    successUpdatedUser: 'อัปเดตผู้ใช้เรียบร้อยแล้ว',
    updateUserError: 'ไม่สามารถอัปเดตบันทึกผู้ใช้ได้ กรุณาลองอีกครั้ง',
  },

  loginUserAnonymously: {
    mandatoryUsername: 'เลือกชื่อเล่นและมาเริ่มกันเลย!',
    userLoggedIn: 'ยินดีต้อนรับกลับ! คุณอยู่ในระบบแล้ว',
    accountCreated: 'คุณอยู่ในระบบแล้ว! เพลิดเพลินกับการสำรวจ!',
    error: 'โอ๊ะ! มีบางอย่างผิดพลาด กรุณาตรวจสอบการเชื่อมต่อและลองอีกครั้ง',
  },
  continueConversation: {
    messagesLimit:
      'Aura ถึงขีดจำกัดแล้ว! อัปโหลดการสแกนอีกครั้งเพื่อรับการวิเคราะห์และข้อมูลเชิงลึกต่อไป',
    conversationNotFound: 'ไม่พบการสนทนา',
    serviceIssueAi: 'ดูเหมือนจะมีปัญหากับบริการ AI กรุณาลองอีกครั้ง',
    noResponseAiService:
      'ไม่ได้รับคำตอบที่ถูกต้องจากบริการ AI กรุณาลองอีกครั้ง',
  },
};
