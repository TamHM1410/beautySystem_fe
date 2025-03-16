import { BookingRequest } from '@/models/request.model';
import { http } from '@/utils/http';

export default class AppointmentService {
  static async bookAppointment(request: BookingRequest) {
    return await http.post('/api/appointments/add', request);
  }
  static async getAppointment(id = 7) {
    if (!id) {
      id = 7;
    }
    let res = await http.get(`/api/appointments/findByUserId/${id}`);
    console.log(res, 'res');
    return res.data;
  }
  static async updateAppointment(payload: any, id: any) {
    return await http.put(`/api/appointments/update/${id}`, payload);
  }
}
