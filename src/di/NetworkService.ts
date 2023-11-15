import BookNetworkServiceImpl from '../framework/datasource/network/book/BookNetworkServiceImpl';
import UserNetworkServiceImpl from '../framework/datasource/network/user/UserNetworkServiceImpl';
import AppStorageServiceImpl from '../framework/datasource/storage/AppStorageServiceImpl';
import INetworkService from './interface/INetworkService';

export default (): INetworkService => {
  return {
    BookNetworkServiceImpl: new BookNetworkServiceImpl(),
    UserNetworkServiceImpl: new UserNetworkServiceImpl(),
    AppStorageServiceImpl: new AppStorageServiceImpl(localStorage),
  };
};
