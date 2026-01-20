//app/api/orgs/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: 'org_1', name: 'Acme Inc' },
    { id: 'org_2', name: 'Flowbase Ltd' }
  ]);
}
