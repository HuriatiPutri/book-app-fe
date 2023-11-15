import MainNetworkDataSourceImpl from '../business/datasource/network/MainNetworkDataSourceImpl';
import AppStorageSourceImpl from '../business/datasource/storage/AppStorageSourceImpl';
import BookNetworkService from '../framework/datasource/network/book/BookNetworkService';
import UserNetworkService from '../framework/datasource/network/user/UserNetworkService';
import AppStorageService from '../framework/datasource/storage/AppStorageService';
import INetworkDataSource from './interface/INetworkDataSource';

export default (
  bookNetworkService: BookNetworkService, 
  userNetworkService: UserNetworkService,
  AppStorageService: AppStorageService
): INetworkDataSource => {
  return {
    MainNetworkDataSourceImpl: new MainNetworkDataSourceImpl(
      bookNetworkService, userNetworkService
    ),
    AppStorageDataSourceImpl: new AppStorageSourceImpl(
      AppStorageService
    )
  };
};