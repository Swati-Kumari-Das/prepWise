// import { FieldValue, Timestamp } from "firebase/firestore";


// export interface User {
//     id: string;
//     name: string;
//     email: string;
//     imageUrl: string;
//     createdAt: Timestamp | FieldValue;
//     updatedAt: Timestamp | FieldValue;  // Fixed typo from "updateAt" to "updatedAt"
// }

// src/types/index.ts

import type { Timestamp } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

// ✅ FIX: Remove FieldValue — it's not exported directly by Firebase
// ✅ Use ReturnType<typeof serverTimestamp> for correct typing

export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: Timestamp | ReturnType<typeof serverTimestamp>;
  updatedAt: Timestamp | ReturnType<typeof serverTimestamp>;
}

export interface Interview {
    id: string;
    position: string;
    description: string;
    experience: number;
    userId: string;
    techStack: string[];
    questions: {
        question: string;
        answer: string;
    }[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface UserAnswer {
  id: string;
  mockIdRef: string;
  question: string;
  correct_ans: string;
  user_ans: string;
  feedback: string;
  rating: number;
  userId: string;
  createdAt: Timestamp;
  updateAt: Timestamp;
}