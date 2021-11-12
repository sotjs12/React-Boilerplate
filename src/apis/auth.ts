import { AxiosResponse } from 'axios';
import httpRequest from '@/services/http-request';

export const getCurrentUser = async (): Promise<AxiosResponse> =>
  httpRequest.get('/api/login/GetInfoToken');
