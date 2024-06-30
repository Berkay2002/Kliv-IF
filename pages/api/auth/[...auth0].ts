// pages/api/auth/[...auth0].ts
import { handleAuth, handleCallback, Session, HandleCallback, AfterCallback } from '@auth0/nextjs-auth0';
import { connectToDatabase } from '../../../utils/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const afterCallback: AfterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session, state) => {
  const { db } = await connectToDatabase();
  const usersCollection = db.collection('users');

  const existingUser = await usersCollection.findOne({ auth0Id: session.user.sub });

  if (!existingUser) {
    // Create new user in MongoDB
    const newUser = {
      auth0Id: session.user.sub,
      email: session.user.email,
      name: session.user.name,
      picture: session.user.picture,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);
  } else {
    // Update existing user information
    await usersCollection.updateOne(
      { auth0Id: session.user.sub },
      {
        $set: {
          email: session.user.email,
          name: session.user.name,
          picture: session.user.picture,
          lastLogin: new Date(),
        },
      }
    );
  }

  return session;
};

export default handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).end(errorMessage);
    }
  },
});
