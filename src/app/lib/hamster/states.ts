export type HamsterState = 'running' | 'eating' | 'sleeping' | 'hungry';

interface TimeRange {
  start: number;
  end: number;
  states: HamsterState[];
}

// 08:00–20:00 KST → running or eating (random), else sleeping
const SCHEDULE: TimeRange[] = [
  { start: 8, end: 20, states: ['running', 'eating'] },
];

function getKSTHour(): number {
  const nowUtc = new Date();
  return (nowUtc.getUTCHours() + 9) % 24;
}

export function getCurrentState(): HamsterState {
  const kstHour = getKSTHour();

  for (const range of SCHEDULE) {
    if (kstHour >= range.start && kstHour < range.end) {
      const idx = Math.floor(Math.random() * range.states.length);
      return range.states[idx];
    }
  }

  return 'sleeping';
}

export async function getTodayCommitCount(): Promise<number> {
  const token = process.env.GITHUB_TOKEN;
  const user = process.env.GITHUB_USER;

  if (!token || !user) return 1; // 설정 없으면 커밋 있다고 간주

  const kstNow = new Date(Date.now() + 9 * 60 * 60 * 1000);
  const todayKST = kstNow.toISOString().slice(0, 10); // YYYY-MM-DD
  const fromISO = `${todayKST}T00:00:00+09:00`;
  const toISO   = `${todayKST}T23:59:59+09:00`;

  const query = `{ user(login: "${user}") { contributionsCollection(from: "${fromISO}", to: "${toISO}") { totalCommitContributions } } }`;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });

    if (!res.ok) return 1;

    const json = await res.json() as {
      data?: { user?: { contributionsCollection?: { totalCommitContributions?: number } } };
      errors?: unknown[];
    };

    if (json.errors) return 1;

    const count = json.data?.user?.contributionsCollection?.totalCommitContributions;
    if (count === undefined || count === null) return 1;
    return count;
  } catch {
    return 1;
  }
}
