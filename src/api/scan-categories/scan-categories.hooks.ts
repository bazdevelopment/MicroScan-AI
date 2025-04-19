import { type AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getScanCategories } from './scan-categories.requests';

export const useScanCategories = (language: string) =>
  createQuery<any, any, AxiosError>({
    queryKey: ['scan-categories'],
    fetcher: () => getScanCategories({ language }),
  })();
