import React from "react";
import axios from "axios";
import { METHODS_HTML } from '../constants/api';

export const useAxios = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const request = React.useCallback(async (url: string, method: METHODS_HTML, body?: object) => {
    let res;

    try {
      const config = {
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(body) || undefined,
      };

      if (!body) delete config['data']

      setError(null);
      setLoading(true);
      res = await axios(config);

    } catch (axiosError: any) {
      const errMsg = String(axiosError.response.data.error)
      if (errMsg.includes('email')) setError('email')
      if (errMsg.includes('cpf')) setError('cpf');
    } finally {
      setData(res?.data);
      setLoading(false);
      return { res }
    }
  }, [])

  return { data, loading, error, request }
}
