import { http } from '@/utils/http';

export default class AuthService {
  static async login(data: { username: string; password: string }) {
    return (await http.post('/api/users/login', data))?.data;
  }

  static async register(data: {
    username: string;
    email: string;
    name: string;
    password: string;
    phone: string;
  }) {
    return await http.post('/api/users/register', data);
  }

  static async me() {
    return await http.get('/api/users/me');
  }
}
