// pages/api/settings.js
import { getSession } from '@auth0/nextjs-auth0';
import { connectToDatabase } from '../../utils/mongodb';
import bcrypt from 'bcrypt';

const settingsHandler = async (req, res) => {
  const { user } = await getSession(req, res);
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { db } = await connectToDatabase();
  const userId = user.sub;  // This is the user ID from Auth0
  const { newsletter, name, email, phone, password, notifications } = req.body;

  const update = {
    ...(newsletter !== undefined && { newsletter }),
    ...(name && { name }),
    ...(email && { email }),
    ...(phone && { phone }),
    ...(password && { password: await bcrypt.hash(password, 10) }),
    ...(notifications && { notifications }),
  };

  await db.collection('users').updateOne({ _id: userId }, { $set: update });

  res.json({ message: 'Settings updated successfully' });
};

export default settingsHandler;
