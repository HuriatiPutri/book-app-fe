import User, { AuthState } from '../../../../business/domain/User';
import { login } from '../../../../infra/api';
import UserNetworkService from './UserNetworkService';

export default class UserNetworkServiceImpl implements UserNetworkService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(auth: AuthState): Promise<User> {
    const response = await login(auth.username, auth.password);
    // const response = {
    //   'accessToken': '1234567890',
    //   'name': 'John Doe',
    //   'email': 'johnDoe@company.com',
    //   'userId': 1,
    //   'username': 'johnDoe',
    //   'role': 'user'
    // };
    console.log('response', response);
    return response as unknown as User;
  }
}
