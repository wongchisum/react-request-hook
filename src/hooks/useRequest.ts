import { Fetch } from '../instance';
import useForceUpdate from './useForceUpdate';
import useSingleton from './useSingleton';
import type { Service, Options } from '../types';
import { useEffect } from 'react';
import { DEFAULT_OPTIONS } from '../constance';

// 用于react的异步请求的状态管理
export default function useRequest<
  Resonse extends unknown,
  Reason extends unknown,
>(service: Service<Resonse>, options?: Options) {
  const forceUpdate = useForceUpdate();
  const fetchOptions = Object.assign(DEFAULT_OPTIONS, options);
  const fetchInstance = useSingleton(
    () => new Fetch<Resonse, Reason>(service, forceUpdate),
  );

  const { immediately } = fetchOptions;
  useEffect(() => {
    if (immediately) {
      fetchInstance.request();
    }
  }, [immediately]);

  const { request, state } = fetchInstance;
  const { data, error, loading } = state;
  return {
    data,
    loading,
    error,
    request: request.bind(fetchInstance),
  };
}
