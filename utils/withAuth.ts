import { getSession } from '@auth0/nextjs-auth0';

const withAuth = (fn: any) => async (context: any) => {
  const session = await getSession(context.req, context.res);

  if (!session || !session.user) {
    context.res.writeHead(302, {
      Location: '/api/auth/login',
    });
    context.res.end();
    return { props: {} };
  }

  return fn(context, session);
};

export default withAuth;
