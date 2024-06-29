// app/login/page.tsx
'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Login = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) return <div>Welcome, {user.name}!</div>;

  return (
    <div>
      <h1>Login Page</h1>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/api/auth/login">Login</a>
    </div>
  );
};

export default Login;
