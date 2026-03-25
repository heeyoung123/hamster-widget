export type HamsterState = 'running' | 'eating' | 'sleeping';

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
