export interface User {
  id: string;
  email: string;
  pass: string;
  uid: string;
  public_key: string;
  username: string;
  online: boolean;
  pin: string;
  conversations: string[];    // array of conversation IDs
}

export interface Message {
  message: string;
  timestamp: Date;
  sender: string;               // UID of sender
  messageHash: string;
}

export interface EncryptedMessage {
  senderKey: string;          // sender's public key
  encryptedData: string;      // Message object after first RSA encryption
}

export interface EEncryptedMessage {
  encryptedData: string;      // Encrypted Message after second RSA encryption
}

export interface Convos {
  id: string;                                 // convo document id
  title: string;
  members: string[];                          // array of uids
  messages: Map<string, EEncryptedMessage[]>; // dictionary object with <uid, Message[]> key value pair
  lastUpdated: number;
  createdOn: number;
}