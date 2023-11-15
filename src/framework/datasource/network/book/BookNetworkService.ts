import Book from "../../../../business/domain/Post";

export default interface BookNetworkService {
    getBooks(): Promise<Book[]>;
    insertBook(book: Book): Promise<Book>;
    updateBook(book: Book): Promise<Book>;
    deleteBook(book: Book): Promise<Book>;
}
