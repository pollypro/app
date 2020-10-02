// imports from utils
import { IHttpError } from '../utils/httpError';

// imports from types
import { Question } from './questions';
import { User } from './users';
import { Test } from './tests';

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
  questions: ListNode<Question>;
  self: ItemNode<User>;
  tests: ListNode<Test>;
};
