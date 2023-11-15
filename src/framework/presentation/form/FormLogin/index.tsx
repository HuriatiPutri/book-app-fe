import { Button } from '@mantine/core';
import './styles.scss';
import { AuthState } from '../../../../business/domain/User';
import { useState } from 'react';

const FormLogin = ({ handleLogin }: FormLoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;

interface FormLoginProps {
    handleLogin: (payload: AuthState) => void;
}