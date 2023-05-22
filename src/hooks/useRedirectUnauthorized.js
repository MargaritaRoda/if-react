import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserAuthorized } from '../store/selectors/user.selectors';

export const useRedirectUnauthorized = () => {
  const navigate = useNavigate();
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  useEffect(() => {
    if (!isUserAuthorized) {
      navigate('/login');
    }
  }, [isUserAuthorized, navigate]);
};

export const useRedirectAuthorized = () => {
  const navigate = useNavigate();
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  useEffect(() => {
    if (isUserAuthorized) {
      navigate('/');
    }
  }, [isUserAuthorized, navigate]);
};
