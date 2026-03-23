// app/api/employees/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { Employee } from '@/types/employee';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabase.from('employees').select('*');

    if (error) {
      console.error('Supabase fetch error:', error);
      return NextResponse.json(
        { message: 'Failed to fetch employees' },
        { status: 500 }
      );
    }

    const employees: Employee[] = (data ?? []).map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      department: row.department ?? '',
      jobTitle: row.jobTitle ?? '',
      joinedDate: row.joinedDate ?? '',
      status: row.status ?? 'active',
      userRole: row.userRole ?? 'employee',
    }));

    return NextResponse.json(employees);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { message: 'Unexpected error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Employee;

    const employeeToInsert = {
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
      .insert([employeeToInsert])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { message: 'Failed to create employee' },
        { status: 500 }
      );
    }

    const newEmployee: Employee = {
      id: data.id,
      name: data.name,
      email: data.email,
      department: data.department ?? '',
      jobTitle: data.jobTitle ?? '',
      joinedDate: data.joinedDate ?? '',
      status: data.status ?? 'active',
      userRole: data.userRole ?? 'employee',
    };

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error) {
    console.error('Failed to create employee:', error);
    return NextResponse.json(
      { message: 'Failed to create employee' },
      { status: 500 }
    );
  }
}