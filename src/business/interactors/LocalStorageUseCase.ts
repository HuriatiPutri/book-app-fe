import AppStorageSource from '../datasource/storage/AppStorageSource';

export default class LocalStorageUseCase {
  constructor(
        private readonly appStorageSource: AppStorageSource
  ){}

  getLocalStorage = (key: string, initial: string) => {
    if (typeof window !== 'undefined') {
      const item = this.appStorageSource.get(key);
      return item ? item : initial;
    }
    return initial;
  };

  setLocalStorage(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }
}