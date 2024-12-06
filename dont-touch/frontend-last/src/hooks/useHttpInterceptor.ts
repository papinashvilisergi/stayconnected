import { httpClient } from '@/components/api';
import { refresh } from '@/components/api/refresh/refresh';
import { queryClient } from '@/main';
import { userAtom } from '@/store/auth';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHttpInterceptor = () => {
  const setUser = useSetAtom(userAtom);

  const navigate = useNavigate();
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);

  // const { mutate: handleRefresh } = useRefresh();

  useEffect(() => {
    httpClient.interceptors.response.use(
      (res) => {
        return res;
      },
      (resErr) => {
        const refreshToken = localStorage.getItem('refreshToken');

        if (resErr.status === 401 && refreshToken) {
          setIsRefreshLoading(true);

          refresh({ payload: { refresh: refreshToken } })
            .then((res) => {
              setUser(res);
              queryClient.invalidateQueries({ queryKey: ['me'] });
            })
            .catch(() => {
              localStorage.removeItem('data');
              navigate('/login');
            })
            .finally(() => {
              setIsRefreshLoading(false);
            });
        }

        if (resErr.status === 401) {
          navigate('/login');
        }

        return resErr;
      },
    );
  }, []);

  return { isRefreshLoading };
};
