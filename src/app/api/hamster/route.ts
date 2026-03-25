import { type NextRequest } from 'next/server';
import { getCurrentState, type HamsterState } from '@/app/lib/hamster/states';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest): Promise<Response> {
  const state: HamsterState = getCurrentState();
  const origin = new URL(request.url).origin;
  const target = `${origin}/api/hamster/${state}`;

  return Response.redirect(target, 302);
}
