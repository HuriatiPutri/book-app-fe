import BookNetworkServiceImpl from '../../framework/datasource/network/book/BookNetworkServiceImpl';
import UserNetworkServiceImpl from '../../framework/datasource/network/user/UserNetworkServiceImpl';
import AppStorageServiceImpl from '../../framework/datasource/storage/AppStorageServiceImpl';

export default interface INetworkService {
    BookNetworkServiceImpl: BookNetworkServiceImpl;
    UserNetworkServiceImpl: UserNetworkServiceImpl;
    AppStorageServiceImpl: AppStorageServiceImpl;
}