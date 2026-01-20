//app/api/me/route.ts

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const role = searchParams.get('role');

  if (role === 'admin') {
    return NextResponse.json({
      id: 'user_admin',
      name: 'Admin User',
      role: 'admin',
      orgIds: ['org_1', 'org_2'],
    });
  }

  return NextResponse.json({
    id: 'user_member',
    name: 'Member User',
    role: 'member',
    orgIds: ['org_1'],
  });
}

