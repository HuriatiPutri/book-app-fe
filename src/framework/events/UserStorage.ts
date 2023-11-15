import User from '../../business/domain/User';
import di from '../../di';

export const SaveUserStorage = async (user: User) => {
  di.loginUseCase.saveUser(user);
};

export const getUserStorage = async () => {
  const get = await di.loginUseCase.getUser().then(user => user);
  return get; 
};

export const removeUserStorage = async () => {
  return di.loginUseCase.removeUser();
};
