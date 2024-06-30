import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    await handleLogin(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).end(error.message);
    } else {
      res.status(500).end('An unknown error occurred');
    }
  }
}
