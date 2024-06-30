import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/mongodb';
import bcrypt from 'bcrypt';

const settingsHandler = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession(req, res);
    if (!session || !session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { db } = await connectToDatabase();
    const userId = session.user.sub;  // Auth0 user ID
    const { email, phoneNumber, password, firstName, lastName, profileImage } = req.body;

    console.log('Session:', session);
    console.log('Request body:', req.body);

    const update = {
      ...(email && { email }),
      ...(phoneNumber && { phoneNumber }),
      ...(password && { password: await bcrypt.hash(password, 10) }),
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(profileImage && { profileImage }),
    };

    console.log('Update object:', update);

    const result = await db.collection('users').updateOne({ _id: userId }, { $set: update });
    console.log('MongoDB update result:', result);

    res.json({ message: 'Settings updated successfully' });
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default settingsHandler;
