

import { useSnackbar } from '../contexts/SnackbarContext';

function LoginPage() {
  const { showSnackbar } = useSnackbar();

  const handleTestSnackbar = () => {
    showSnackbar({ message: 'Login button clicked!', severity: 'info' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          Login Page
        </h1>
        <button 
          onClick={handleTestSnackbar}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Test Snackbar
        </button>
      </div>
    </div>
  );
}

export default LoginPage;