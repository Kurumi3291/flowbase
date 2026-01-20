import { User } from '@/types/user';

export const mockUserAdmin: User = {
  id: 'u1',
  name: 'Alice',
  role: 'admin',
  orgIds: ['org1', 'org2'],
};

export const mockUserMember: User = {
  id: 'u2',
  name: 'Bob',
  role: 'member',
  orgIds: ['org1'],
};
