import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistrationWindowContext } from '../contexts/RegistrationWindow.context';

export const useRedirectUnauthorized = () => {
  const navigate = useNavigate();
  const { email } = useRegistrationWindowContext();
  useEffect(() => {
    if (!email) {
      navigate('/login');
    }
  }, [email, navigate]);
};
