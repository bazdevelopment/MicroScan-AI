export const getDocumentIcon = (fileExtension: string) => {
  const ext = fileExtension?.toLowerCase();
  if (ext === 'pdf') return 'document-text';
  if (ext === 'doc' || ext === 'docx') return 'document-text';
  if (ext === 'xls' || ext === 'xlsx') return 'stats-chart';
  if (ext === 'ppt' || ext === 'pptx') return 'easel';
  return 'document-attach';
};
