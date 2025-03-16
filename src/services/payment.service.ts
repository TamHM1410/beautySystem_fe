import { http } from '@/utils/http';

export default class PaymentService {
  static async createPayment(userId: string, appointmentId: string) {
    return (
      await http.get(`/api/payments/create/zaloPay?userId=${userId}&appointmentId=${appointmentId}`)
    )?.data;
  }
}
