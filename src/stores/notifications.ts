import { writable } from 'svelte/store';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

function createNotificationStore() {
  const { subscribe, update } = writable<Toast[]>([]);

  function show(message: string, type: ToastType = 'info', duration = 4000) {
    const id = Math.random().toString(36).substring(2, 9);
    update((all) => [...all, { id, message, type }]);

    setTimeout(() => {
      update((all) => all.filter((t) => t.id !== id));
    }, duration);
  }

  return {
    subscribe,
    success: (msg: string) => show(msg, 'success'),
    error: (msg: string) => show(msg, 'error'),
    info: (msg: string) => show(msg, 'info'),
  };
}

export const notifications = createNotificationStore();
