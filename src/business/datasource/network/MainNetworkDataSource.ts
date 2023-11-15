import Book from '../../domain/Post';
import User, { AuthState } from '../../domain/User';

export default interface MainNetworkDataSource {
  login(auth: AuthState): Promise<User>;
  getBooks(): Promise<Book[]>;
  insertBook(book: Book): Promise<Book>;
  deleteBook(book: Book): Promise<Book>;
}
