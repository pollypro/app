export type User = {
  id: string;
  firstName: string;
  lastName: string;
  companyId?: string;
  isAdmin: boolean;
  phone: string;
  email: string;
  password: string;
  status: string;
  createdAt: Date;
  updatedAt?: Date;
};
