// app/api/me/route.ts
import { NextResponse } from 'next/server';
import { mockEmployees } from '@/lib/mockEmployees';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const role = searchParams.get('role');

  const currentUser =
    role === 'admin'
      ? mockEmployees.find((employee) => employee.userRole === 'admin')
      : mockEmployees.find((employee) => employee.id === 'emp_002');

  if (!currentUser) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(currentUser);
}