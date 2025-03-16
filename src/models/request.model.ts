export interface BookingRequest {
  usersDTO: UsersDto;
  appointmentsDTO: AppointmentsDto;
  expertsDTO: ExpertsDto;
  servicesDTO: ServicesDto;
}

export interface UsersDto {
  id: number;
}

export interface AppointmentsDto {
  appointmentId: number;
  total: number;
  start_at: string;
  end_at: string;
}

export interface ExpertsDto {
  expertId: number;
}

export interface ServicesDto {
  serviceId: number;
}
