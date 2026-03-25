import { type NextRequest } from 'next/server';
import { runningSvg } from '@/app/lib/hamster/svgs/running';
import { eatingSvg } from '@/app/lib/hamster/svgs/eating';
import { sleepingSvg } from '@/app/lib/hamster/svgs/sleeping';
import { hungrySvg } from '@/app/lib/hamster/svgs/hungry';
import { type HamsterState } from '@/app/lib/hamster/states';

export const dynamic = 'force-dynamic';

const SVG_MAP: Record<HamsterState, string> = {
  running: runningSvg,
  eating: eatingSvg,
  sleeping: sleepingSvg,
  hungry: hungrySvg,
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ state: string }> }
): Promise<Response> {
  const { state } = await params;
  const svg = SVG_MAP[state as HamsterState];

  if (!svg) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
}
