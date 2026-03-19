//app/api/employees/[id]/route.ts
import { NextResponse } from 'next/server';
import { mockEmployees } from '@/lib/mockEmployees';
import type { Employee } from '@/types/employee';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;

  const employee = mockEmployees.find((item) => item.id === id);

  if (!employee) {
    return NextResponse.json(
      { message: 'Employee not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(employee);
}

export async function PUT(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    const body = (await req.json()) as Employee;

    const employeeIndex = mockEmployees.findIndex((item) => item.id === id);

    if (employeeIndex === -1) {
      return NextResponse.json(
        { message: 'Employee not found' },
        { status: 404 }
      );
    }

    const updatedEmployee: Employee = {
      ...mockEmployees[employeeIndex],
      ...body,
      id,
    };

    mockEmployees[employeeIndex] = updatedEmployee;

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error('Failed to update employee:', error);
    return NextResponse.json(
      { message: 'Failed to update employee' },
      { status: 500 }
    );
  }
}

export async function DELETE(_: Request, { params }: Props) {
  const { id } = await params;

  const index = mockEmployees.findIndex((item) => item.id === id);

  if (index === -1) {
    return NextResponse.json(
      { message: 'Employee not found' },
      { status: 404 }
    );
  }

  mockEmployees.splice(index, 1);

  return NextResponse.json({ message: 'Deleted successfully' });
}