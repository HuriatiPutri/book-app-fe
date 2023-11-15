export default interface AppStorageSource {
  get(name: string): string | null;
  set(name: string, value: string): void;
  remove(name: string): void;
}
