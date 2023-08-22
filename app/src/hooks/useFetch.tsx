import { useState } from 'react';
import axios from 'axios';

export const useRequest = (): {
  status: number | null;
  statusText: string;
  data: any;
  error: string | null;
  loading: boolean;
  makeRequest: (url: string, method: string, body?: any) => Promise<void>;
} => {
  const [status, setStatus] = useState<number | null>(null);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const makeRequest = async (url: string, method: string, body?: any) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const options = {
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(body),
      };
      const response = await axios(options)
      setStatus(response.status);
      setStatusText(response.statusText);
      setData(response);
    } catch (apiErr: any) {
      if (apiErr.response.data) {
        const errMsg = String(apiErr.response.data.error)
        if (errMsg.includes('email')) setError('email')
        if (errMsg.includes('cpf')) setError('cpf');
      } else {
        setError('unknown');
      }
    } finally {
      setLoading(false);
    }
  };

  return { status, statusText, data, error, loading, makeRequest };
};
