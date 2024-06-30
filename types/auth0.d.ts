// types/auth0.d.ts
import { UserProfile } from '@auth0/nextjs-auth0';

declare module '@auth0/nextjs-auth0' {
  interface UserProfile {
    id: string;
    email: string;
    phoneNumber?: string;
    password?: string;
  }
}
