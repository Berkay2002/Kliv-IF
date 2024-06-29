// app/login/page.tsx
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const LoginPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) return <div>You are already logged in</div>;

  return (
    <div>
      <h1>Login</h1>
      <Link href="/api/auth/login">Login with Auth0</Link>
    </div>
  );
};

export default LoginPage;
