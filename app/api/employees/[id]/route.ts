//app/api/employees/[id]/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { Employee } from '@/types/employee';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = 'force-dynamic';

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;

  const { data, error } = await supabase
    .from('employees')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { message: 'Employee not found' },
      { status: 404 }
    );
  }

  const employee: Employee = {
    id: data.id,
    name: data.name,
    email: data.email,
    department: data.department ?? '',
    jobTitle: data.jobTitle ?? '',
    joinedDate: data.joinedDate ?? '',
    status: data.status ?? 'active',
    userRole: data.userRole ?? 'employee',
  };

  return NextResponse.json(employee);
}

export async function PUT(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    const body = (await req.json()) as Employee;

    const employeeToUpdate = {
      name: body.name,
      email: body.email,
      department: body.department,
      jobTitle: body.jobTitle,
      joinedDate: body.joinedDate,
      status: body.status,
      userRole: body.userRole,
    };

    const { data, error } = await supabase
      .from('employees')
      .update(employeeToUpdate)
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      console.error('Supabase update error:', error);
      return NextResponse.json(
        { message: 'Employee not found' },
        { status: 404 }
      );
    }

    const updatedEmployee: Employee = {
      id: data.id,
      name: data.name,
      email: data.email,
      department: data.department ?? '',
      jobTitle: data.jobTitle ?? '',
      joinedDate: data.joinedDate ?? '',
      status: data.status ?? 'active',
      userRole: data.userRole ?? 'employee',
    };

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

  const { error } = await supabase.from('employees').delete().eq('id', id);

  if (error) {
    console.error('Supabase delete error:', error);
    return NextResponse.json(
      { message: 'Employee not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: 'Deleted successfully' });
}