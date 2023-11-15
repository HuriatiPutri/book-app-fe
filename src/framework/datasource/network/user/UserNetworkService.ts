import User, { AuthState } from '../../../../business/domain/User';

export default interface UserNetworkService {
    login(auth: AuthState): Promise<User>;
}
