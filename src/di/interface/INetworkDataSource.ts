import MainNetworkDataSourceImpl from '../../business/datasource/network/MainNetworkDataSourceImpl';
import AppStorageSourceImpl from '../../business/datasource/storage/AppStorageSourceImpl';

export default interface INetworkDataSource {
    MainNetworkDataSourceImpl: MainNetworkDataSourceImpl;
    AppStorageDataSourceImpl: AppStorageSourceImpl
}