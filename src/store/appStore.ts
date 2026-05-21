import { create } from "zustand";
import { Appointment, NotificationItem } from "../types";
import { appointments as seedAppointments, notifications as seedNotifications } from "../data/mockData";

interface AppState {
  appointments: Appointment[];
  notifications: NotificationItem[];
  addAppointment: (appointment: Appointment) => void;
  updateAppointmentStatus: (id: string, status: Appointment["status"]) => void;
  markNotificationRead: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  appointments: JSON.parse(localStorage.getItem("medicare_appointments") || "null") || seedAppointments,
  notifications: seedNotifications,
  addAppointment: (appointment) =>
    set((state) => {
      const appointments = [appointment, ...state.appointments];
      localStorage.setItem("medicare_appointments", JSON.stringify(appointments));
      return { appointments };
    }),
  updateAppointmentStatus: (id, status) =>
    set((state) => {
      const appointments = state.appointments.map((a) => (a.id === id ? { ...a, status } : a));
      localStorage.setItem("medicare_appointments", JSON.stringify(appointments));
      return { appointments };
    }),
  markNotificationRead: (id) =>
    set((state) => ({ notifications: state.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)) }))
}));
