import withAuth from '@/utils/withAuth';

function ProtectedRoute() {
  const sessionStorageKeys = Object.keys(sessionStorage);
  const currentAddress = sessionStorageKeys[0];
  return (
    <div>
      {currentAddress && <p>Logged In as: {currentAddress}</p>}
    </div>
  );
}

export default withAuth(ProtectedRoute);