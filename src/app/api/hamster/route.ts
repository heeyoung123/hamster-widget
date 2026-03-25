import { type NextRequest } from 'next/server';
import { getCurrentState, getTodayCommitCount, type HamsterState } from '@/app/lib/hamster/states';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest): Promise<Response> {
  const commits = await getTodayCommitCount();
  const state: HamsterState = commits === 0 ? 'hungry' : getCurrentState();
  const origin = new URL(request.url).origin;
  const target = `${origin}/api/hamster/${state}`;

  return Response.redirect(target, 302);
}
