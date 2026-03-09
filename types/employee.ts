export type UserRole = 'admin' | 'employee';

export type EmployeeStatus = 'active' | 'inactive';

export type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  jobTitle: string;
  joinedDate: string;
  status: EmployeeStatus;
  userRole: UserRole;
};