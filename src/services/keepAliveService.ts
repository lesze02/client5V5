import { apiUrl } from '../config/api';

const INTERVAL_MS = 10 * 60 * 1000; // 10 minut

let intervalId: ReturnType<typeof setInterval> | null = null;

const ping = async () => {
  try {
    await fetch(apiUrl('/players'), { method: 'GET' });
    console.log('[KeepAlive] Ping wysłany:', new Date().toLocaleTimeString());
  } catch (err) {
    console.warn('[KeepAlive] Ping nieudany:', err);
  }
};

export function startKeepAlive() {
  if (intervalId) return;
  ping();
  intervalId = setInterval(ping, INTERVAL_MS);
}

export function stopKeepAlive() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}