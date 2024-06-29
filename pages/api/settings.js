// pages/api/settings.js
import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../utils/mongodb';
import bcrypt from 'bcrypt';

const settingsHandler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { db } = await connectToDatabase();
  const userId = session.user.id;
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
