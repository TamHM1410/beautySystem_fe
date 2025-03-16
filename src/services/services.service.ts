import { debug } from 'console';
import { http } from '@/utils/http';

export default class ServicesService {
  static async getServices() {
    try {
      const response = await http.get('/api/services/getAll');
      return response?.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  }

  static async getServiceById(serviceId: number) {
    try {
      const response = await http.get(`/api/services/findById/${serviceId}`);
      return response?.data;
    } catch (error) {
      console.error(`Error fetching service with ID ${serviceId}:`, error);
      throw error;
    }
  }
}
