// imports from utils
import { IHttpError } from '../utils/httpError';

// imports from types
import { User } from './users';

type ListNode<T> = {
  isLoading: boolean;
  items: T[];
  error?: IHttpError;
};

type ItemNode<T> = {
  isLoading: boolean;
  item?: T;
  error?: IHttpError;
};

type UpdatingNode = {
  isLoading: boolean;
  id?: string;
  error?: IHttpError;
};

type CreatingNode<T> = {
  isLoading: boolean;
  item?: T;
  error?: IHttpError;
};

type DeletingNode = {
  isLoading: boolean;
  id?: string;
  error?: IHttpError;
};

export type State = {
  auth: {
    isLoading: boolean;
    isAuthenticated: boolean;
    token?: string;
    error?: IHttpError;
  };
  self: ItemNode<User>;
};
