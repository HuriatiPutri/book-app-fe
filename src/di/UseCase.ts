import MainNetworkDataSource from '../business/datasource/network/MainNetworkDataSource';
import AppStorageSource from '../business/datasource/storage/AppStorageSource';
import GetBooksUseCase from '../business/interactors/GetBooksUseCase';
import LocalStorageUseCase from '../business/interactors/LocalStorageUseCase';
import LoginUseCase from '../business/interactors/LoginUseCase';
import IUseCase from './interface/IUseCase';

export default (
  mainNetworkDataSource: MainNetworkDataSource,
  appStorageSource: AppStorageSource,
): IUseCase => {
  return{
    GetBooksUseCase: new GetBooksUseCase(mainNetworkDataSource),
    LoginUseCase: new LoginUseCase(mainNetworkDataSource, appStorageSource),
    LocalStorageUseCase: new LocalStorageUseCase(appStorageSource)
  };
};