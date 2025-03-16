import { http } from '@/utils/http';

export default class ExpertService {
  static async getExperts() {
    return (await http.get('/api/experts/findAll'))?.data;
  }
}
