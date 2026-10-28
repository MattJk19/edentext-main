const CHANNEL = 'xp-word-2007';
export const xpEmbedded = window.parent !== window && new URLSearchParams(location.search).get('xp') === '1';
const pending = new Map<string, { resolve: (value: any) => void; reject: (error: Error) => void }>();
if (xpEmbedded) window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== window.parent || event.data?.channel !== CHANNEL || event.data?.type !== 'response') return;
  const request = pending.get(event.data.id);
  if (!request) return;
  pending.delete(event.data.id);
  if (event.data.error) request.reject(new Error(event.data.error));
  else request.resolve(event.data.result);
});
export function xpNotify(action: string, payload: unknown = null): void {
  if (xpEmbedded) window.parent.postMessage({ channel: CHANNEL, type: 'event', action, payload }, location.origin);
}
export function xpRequest(action: string, payload: unknown = null): Promise<any> {
  const id = crypto.randomUUID();
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    window.parent.postMessage({ channel: CHANNEL, type: 'request', id, action, payload }, location.origin);
  });
}
