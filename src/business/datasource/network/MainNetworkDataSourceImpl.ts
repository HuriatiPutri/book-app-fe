import BookNetworkService from '../../../framework/datasource/network/book/BookNetworkService';
import UserNetworkService from '../../../framework/datasource/network/user/UserNetworkService';
import Book from '../../domain/Post';
import User, { AuthState } from '../../domain/User';
import MainNetworkDataSource from './MainNetworkDataSource';

export default class MainNetworkDataSourceImpl implements MainNetworkDataSource {
  constructor(
        private readonly bookNetworkService: BookNetworkService,
        private readonly userNetworkService: UserNetworkService
  ) {}
  login(auth: AuthState): Promise<User> {
    return this.userNetworkService.login(auth);
  }
  getBooks(): Promise<Book[]> {
    return this.bookNetworkService.getBooks().then((book) => book);
  }
  insertBook(book: Book): Promise<Book> {
    return this.bookNetworkService.insertBook(book);
  }
  deleteBook(book: Book): Promise<Book> {
    return this.bookNetworkService.deleteBook(book);
  }

}