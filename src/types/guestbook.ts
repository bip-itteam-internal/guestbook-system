export type VisitCategory = 'personal' | 'group';

export interface GuestbookPayload {
  token: string;
  category: VisitCategory;
  full_name: string;
  phone_number: string;
  plate_number: string;
  visit_from: string;
  visit_purpose: string;
  meeting_with: string | undefined;
  number_of_people: number | undefined;
  standby_security: string | undefined;
  visiting_office: string | undefined;
}

export interface TokenValidationResponse {
  valid: boolean;
  message?: string;
}
