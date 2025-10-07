export interface ChatMessageContract {
  videoId: string;
  authorId: string;
  body: string;
  sentAt: string;
}

export interface UploadJobContract {
  jobId: string;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETE' | 'FAILED';
  sourceFilename: string;
  createdAt: string;
}
