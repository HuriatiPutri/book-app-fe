import NetworkDataSource from './NetworkDataSource';
import NetworkService from './NetworkService';
import UseCase from './UseCase';


const cNetworkServices = NetworkService();
const cNetworkDataSources = NetworkDataSource(
  cNetworkServices.BookNetworkServiceImpl,
  cNetworkServices.UserNetworkServiceImpl,
  cNetworkServices.AppStorageServiceImpl
  
);
const cUseCase = UseCase(
  cNetworkDataSources.MainNetworkDataSourceImpl, 
  cNetworkDataSources.AppStorageDataSourceImpl
);
export default {
  GetBooksUseCase: cUseCase.GetBooksUseCase,
  loginUseCase: cUseCase.LoginUseCase,
  localStorageUseCase: cUseCase.LocalStorageUseCase,
//   InsertBookUseCase: cUseCase.InsertBookUseCase,
//   DeleteBookUseCase: cUseCase.DeleteBookUseCase,
};
