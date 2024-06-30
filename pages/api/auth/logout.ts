import { handleAuth, handleLogout } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  try {
    await handleLogout(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).end(error.message);
    } else {
      res.status(500).end('An unknown error occurred');
    }
  }
}
