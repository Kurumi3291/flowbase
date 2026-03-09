import { NextResponse } from 'next/server';
import { mockEmployees } from '@/lib/mockEmployees';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;

  const employee = mockEmployees.find((item) => item.id === id);

  if (!employee) {
    return NextResponse.json({ message: 'Employee not found' }, { status: 404 });
  }

  return NextResponse.json(employee);
}