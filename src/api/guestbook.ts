import type { GuestbookPayload, TokenValidationResponse } from '../types/guestbook';
import { api } from './client';

export const guestbookApi = {
  validateToken: (token: string) =>
    api.post<TokenValidationResponse>('/public/guestbook?validate=token', { token }),

  submitGuest: (payload: GuestbookPayload) => api.post('/public/guestbook', payload),
};
