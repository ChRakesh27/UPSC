export interface ITopic {
  _id: string;
  testCode: string;
  number: Number;
  question: string;
  answer: string;
  images: [{ base64: ''; name: '' }];
  written: string;
  paper: string;
  topicName: string;
  subtopicName: string;
}
