// app/api/employees/route.ts
import { NextResponse } from 'next/server';
import { mockEmployees } from '@/lib/mockEmployees';
import type { Employee } from '@/types/employee';

export async function GET() {
  return NextResponse.json(mockEmployees);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Employee;

    const newEmployee: Employee = {
      id: body.id,
      name: body.name,
      email: body.email,
      department: body.department,
      jobTitle: body.jobTitle,
      joinedDate: body.joinedDate,
      status: body.status,
      userRole: body.userRole,
    };

    mockEmployees.push(newEmployee);

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error) {
    console.error('Failed to create employee:', error);
    return NextResponse.json(
      { message: 'Failed to create employee' },
      { status: 500 }
    );
  }
}