import mongoose, { ObjectId } from 'mongoose';
import { IOffer } from './order';
import { ISellerPart } from './part';
import { ISellerDocument } from './seller';

export interface IConversationDocument extends Document {
  _id: mongoose.Types.ObjectId | string;
  conversationId: string;
  senderUsername: string;
  receiverUsername: string;
}

export interface IMessageDocument {
  _id?: string | ObjectId;
  conversationId?: string;
  body?: string;
  url?: string;
  file?: string;
  fileType?: string;
  fileSize?: string;
  fileName?: string;
  partId?: string;
  sellerId?: string;
  buyerId?: string;
  senderUsername?: string;
  senderPicture?: string;
  receiverUsername?: string;
  receiverPicture?: string;
  isRead?: boolean;
  hasOffer?: boolean;
  offer?: IOffer;
  hasConversationId?: boolean;
  createdAt?: Date | string;
}

export interface IMessageDetails {
  sender?: string;
  offerLink?: string;
  amount?: string;
  buyerUsername?: string;
  sellerUsername?: string;
  title?: string;
  description?: string;
  deliveryDays?: string;
  template?: string;
}

export interface IChatBoxProps {
  seller: IChatSellerProps;
  buyer: IChatBuyerProps
  partId: string;
  onClose: () => void;
}

export interface IChatSellerProps {
  _id: string;
  username: string;
  profilePicture: string;
  responseTime: number;
}

export interface IChatBuyerProps {
  _id: string;
  username: string;
  profilePicture: string;
}

export interface IChatMessageProps {
  message: IMessageDocument;
  seller?: ISellerDocument;
  part?: ISellerPart;
}