import AppStorageService from './AppStorageService';

export default class AppStorageServiceImpl implements AppStorageService {
  constructor(private readonly storage: Storage) {}

  get(name: string): string | null {
    if (typeof window !== 'undefined') {
      const value = this.storage.getItem(name);
      if (value !== null) {
        return JSON.parse(value);
      }
    }
    return null;
  }

  remove(name: string): void {
    this.storage.removeItem(name);
  }

  set(name: string, value: string): void {
    if (typeof window !== 'undefined') {
      this.storage.setItem(name, value);
    }
  }
}
