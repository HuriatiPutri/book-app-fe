/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import di from '../../../di';


export default function usePersistedState(key: string, initial: any = ''): [any, (value: any) => void] {
  const [value, setValue] = useState(di.localStorageUseCase.getLocalStorage(key, initial));

  useEffect(() => {
    di.localStorageUseCase.setLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue];
}

