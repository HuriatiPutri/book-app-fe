import post from '../../../../business/domain/Post';
import { getBooks } from '../../../../infra/api';
import BookNetworkService from './BookNetworkService';

export default class BookNetworkServiceImpl implements BookNetworkService {
  async getBooks(): Promise<post[]> {
    const response = await getBooks();
    return response as unknown as post[];
  }
  insertBook(book: post): Promise<post> {
    throw new Error('Method not implemented.');
  }
  updateBook(book: post): Promise<post> {
    throw new Error('Method not implemented.');
  }
  deleteBook(book: post): Promise<post> {
    throw new Error('Method not implemented.');
  }

}
