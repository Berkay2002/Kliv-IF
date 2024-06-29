import withAuth from '../utils/withAuth';

const ProtectedPage = ({ user }) => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {user.name}</p>
    </div>
  );
};

export const getServerSideProps = withAuth(async (context, session) => {
  return {
    props: {
      user: session.user,
    },
  };
});

export default ProtectedPage;
