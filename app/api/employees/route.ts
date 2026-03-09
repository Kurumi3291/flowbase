// app/api/employees/route.ts
import { NextResponse } from 'next/server';
import { mockEmployees } from '@/lib/mockEmployees';

export async function GET() {
  return NextResponse.json(mockEmployees);
}