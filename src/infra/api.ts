import fetch from './fetch';

export const login = async (username: string, password: string) => await fetch.post('/login', { username, password });
export const getBooks = async () => await fetch.get('/posts');