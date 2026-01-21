// app/api/dashboard/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const role = searchParams.get('role');

  if (role === 'member') {
    return NextResponse.json({
      member: {
        tasks: [
            {
                id: 't1',
                title: 'Complete onboarding',
                status: 'pending',
                dueAt: '2026-01-23',
            },
            {
                id: 't2',
                title: 'Review company handbook',
                status: 'done',
                dueAt: '2026-01-18',
            },
        ],
        onboarding: {
          completedCount: 2,
          totalCount: 4,
          steps: [
            { id: 's1', label: 'Profile setup', completed: true },
            { id: 's2', label: 'Security training', completed: true },
            { id: 's3', label: 'Document upload', completed: false },
            { id: 's4', label: 'Team intro', completed: false },
          ],
        },
        profile: {
          name: 'Alex Johnson',
          role: 'Member',
          team: 'Product',
          status: 'Active',
        },
        documents: {
          submittedCount: 1,
          pendingCount: 2,
        },
        activity: [
          { id: 'a1', text: 'Completed profile setup' },
          { id: 'a2', text: 'Uploaded ID document' },
        ],
        resources: [
          { id: 'r1', label: 'Company handbook', href: '#' },
          { id: 'r2', label: 'Support documentation', href: '#' },
        ],
      },
    });
  }

  if (role === 'admin') {
    return NextResponse.json({
      admin: {
        metrics: {
          activeMembers: 42,
          pendingIssues: 3,
        },
        approvals: {
          invitations: 2,
          accessRequests: 1,
        },
        onboarding: {
          onboardingCount: 2,
          missingDocuments: 1,
        },
        recentActivities: [
          { id: 'a1', text: 'New member invited' },
          { id: 'a2', text: 'Subscription upgraded to Pro' },
        ],
        billing: {
          plan: 'Pro',
          trialRemainingDays: 7,
          nextInvoice: '$99 / month',
        },
      },
    });
  }

  return NextResponse.json(
    { error: 'Invalid role' },
    { status: 400 }
  );
}
