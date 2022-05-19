import { useState, useCallback } from 'react';

// 进行强制刷新
export default function useForceUpdate() {
  const [state, updateState] = useState({});

  return useCallback(() => {
    updateState({});
  }, []);
}
