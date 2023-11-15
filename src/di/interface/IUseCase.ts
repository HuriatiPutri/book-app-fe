import GetBooksUseCase from '../../business/interactors/GetBooksUseCase';
import LocalStorageUseCase from '../../business/interactors/LocalStorageUseCase';
import LoginUseCase from '../../business/interactors/LoginUseCase';

export default interface IUseCase {
    GetBooksUseCase: GetBooksUseCase;
    LoginUseCase: LoginUseCase;
    LocalStorageUseCase: LocalStorageUseCase;
}
