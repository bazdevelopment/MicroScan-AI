export interface IScanReportCard {
  createdAt: string;
  interpretation: string;
  mimeType: string;
  url: string;
  title: string;
  onEditTitle: (updatedTitle: string, documentId: string) => void;
  isUpdateTitlePending: boolean;
  docId: string;
  language: string;
  dateFormat?: string;
  promptMessage: string;
  conversationMessages: IConversationMessage[];
}

export interface IConversationMessage {
  content: string;
  role: string;
}
