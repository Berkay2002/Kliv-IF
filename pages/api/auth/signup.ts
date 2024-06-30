// pages/api/auth/signup.ts
import { handleAuth, handleLogin, LoginOptions, AfterCallback } from '@auth0/nextjs-auth0';
import { connectToDatabase } from '../../../utils/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const afterSignup: AfterCallback = async (req, res, session, state) => {
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

type CustomLoginOptions = LoginOptions & { afterCallback?: AfterCallback };

export default handleAuth({
  login: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const options: CustomLoginOptions = { afterCallback: afterSignup };
      await handleLogin(req, res, options);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).end(errorMessage);
    }
  },
});
