// app/api/me/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { Employee } from '@/types/employee';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const role = searchParams.get('role');

    const targetRole = role === 'admin' ? 'admin' : 'employee';

    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('userRole', targetRole)
      .eq('status', 'active')
      .order('joinedDate', { ascending: true })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('Supabase /api/me error:', error);
      return NextResponse.json({ message: 'Failed to fetch user' }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const currentUser: Employee = {
      id: data.id,
      name: data.name,
      email: data.email,
      department: data.department ?? '',
      jobTitle: data.jobTitle ?? '',
      joinedDate: data.joinedDate ?? '',
      status: data.status ?? 'active',
      userRole: data.userRole ?? 'employee',
    };

    return NextResponse.json(currentUser);
  } catch (error) {
    console.error('Unexpected /api/me error:', error);
    return NextResponse.json({ message: 'Unexpected error' }, { status: 500 });
  }
}