import auth0 from './auth0';

const withAuth = (fn) => async (context) => {
  const session = await auth0.getSession(context.req);

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
