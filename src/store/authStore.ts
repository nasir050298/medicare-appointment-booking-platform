import { create } from "zustand";
import { Role, User } from "../types";

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { name: string; email: string; password: string; role?: Role }) => Promise<void>;
  logout: () => void;
}

const demoUsers: (User & { password: string })[] = [
  { id: "u-patient", name: "Nasir Uddin Khan", email: "patient@medicare.com", password: "demo123", role: "patient", phone: "+8801711111111" },
  { id: "u-doctor", name: "Dr. Sarah Ahmed", email: "doctor@medicare.com", password: "demo123", role: "doctor", phone: "+8801700000001" },
  { id: "u-admin", name: "Admin Manager", email: "admin@medicare.com", password: "demo123", role: "admin", phone: "+8801700000000" }
];

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("medicare_user") || "null"),
  login: async (email, password) => {
    const found = demoUsers.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) throw new Error("Invalid demo credentials");
    const { password: _, ...safeUser } = found;
    localStorage.setItem("medicare_user", JSON.stringify(safeUser));
    set({ user: safeUser });
  },
  register: async (data) => {
    const user: User = { id: `u-${Date.now()}`, name: data.name, email: data.email, role: data.role || "patient" };
    localStorage.setItem("medicare_user", JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("medicare_user");
    set({ user: null });
  }
}));
