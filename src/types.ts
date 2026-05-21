export type Role = "patient" | "doctor" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  phone?: string;
}

export interface Doctor {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  department: string;
  qualification: string;
  experience: number;
  fee: number;
  rating: number;
  reviews: number;
  location: string;
  languages: string[];
  availableToday: boolean;
  image: string;
  bio: string;
  services: string[];
  education: string[];
  slots: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  doctorId: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  type: "In-person" | "Video" | "Phone" | "Follow-up";
  symptoms: string;
  fee: number;
  status: "Pending" | "Confirmed" | "Checked In" | "Completed" | "Cancelled" | "No Show" | "Rescheduled";
  paymentStatus: "Unpaid" | "Paid" | "Refunded" | "Failed";
}

export interface Prescription {
  id: string;
  appointmentId: string;
  patientName: string;
  doctorName: string;
  diagnosis: string;
  medicines: { name: string; dosage: string; frequency: string; duration: string; instruction: string }[];
  tests: string[];
  followUp: string;
  date: string;
}

export interface MedicalRecord {
  id: string;
  patientName: string;
  type: string;
  fileName: string;
  department: string;
  uploadedAt: string;
  size: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: string;
}
