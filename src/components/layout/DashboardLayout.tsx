import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useAppStore } from "../../store/appStore";
import { Bell, CalendarPlus, ClipboardList, FileText, HeartPulse, Home, LogOut, Menu, Search, Settings, Stethoscope, UserRound, Users, WalletCards } from "lucide-react";
import { useState } from "react";

const navs = {
  patient: [
    ["Dashboard", "/patient", Home], ["Book Appointment", "/patient/book", CalendarPlus], ["My Appointments", "/patient/appointments", ClipboardList], ["Prescriptions", "/patient/prescriptions", FileText], ["Medical Records", "/patient/records", FileText], ["Favorite Doctors", "/patient/favorites", HeartPulse], ["Payments", "/patient/payments", WalletCards], ["Notifications", "/patient/notifications", Bell], ["Settings", "/patient/settings", Settings]
  ],
  doctor: [
    ["Dashboard", "/doctor", Home], ["Appointments", "/doctor/appointments", ClipboardList], ["Calendar", "/doctor/calendar", CalendarPlus], ["Patients", "/doctor/patients", Users], ["Prescription Writer", "/doctor/prescription-writer", FileText], ["Schedule", "/doctor/schedule", Stethoscope], ["Reviews", "/doctor/reviews", HeartPulse], ["Notifications", "/doctor/notifications", Bell], ["Settings", "/doctor/settings", Settings]
  ],
  admin: [
    ["Dashboard", "/admin", Home], ["Doctors", "/admin/doctors", Stethoscope], ["Patients", "/admin/patients", Users], ["Appointments", "/admin/appointments", ClipboardList], ["Departments", "/admin/departments", HeartPulse], ["Payments", "/admin/payments", WalletCards], ["Reports", "/admin/reports", FileText], ["Settings", "/admin/settings", Settings]
  ]
} as const;

export function DashboardLayout() {
  const { user, logout } = useAuthStore();
  const unread = useAppStore(s => s.notifications.filter(n => !n.read).length);
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const items = user ? navs[user.role] : [];
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200 bg-white p-4 transition dark:border-slate-800 dark:bg-slate-900 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="mb-8 flex items-center gap-3 text-xl font-black"><span className="rounded-2xl bg-brand-600 p-2 text-white"><HeartPulse size={22}/></span>MediCare</div>
        <div className="mb-5 rounded-3xl bg-brand-50 p-4 dark:bg-brand-950">
          <p className="font-black">{user?.name}</p>
          <p className="text-sm capitalize text-brand-700 dark:text-brand-300">{user?.role} account</p>
        </div>
        <nav className="space-y-1">
          {items.map(([label, to, Icon]) => (
            <NavLink key={to} to={to} end className={({isActive}) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${isActive ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"}`}>
              <Icon size={18}/>{label}{label==="Notifications" && unread>0 && <span className="ml-auto rounded-full bg-rose-500 px-2 text-xs text-white">{unread}</span>}
            </NavLink>
          ))}
        </nav>
        <button onClick={() => { logout(); nav("/"); }} className="mt-8 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950"><LogOut size={18}/>Logout</button>
      </aside>
      <main className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
          <div className="flex items-center justify-between px-4 py-4">
            <button onClick={() => setOpen(!open)} className="rounded-2xl border border-slate-200 p-3 lg:hidden dark:border-slate-800"><Menu/></button>
            <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 md:flex dark:border-slate-800 dark:bg-slate-900"><Search size={18}/>Search doctors, appointments, prescriptions...</div>
            <div className="flex items-center gap-3">
              <span className="relative rounded-2xl border border-slate-200 p-3 dark:border-slate-800"><Bell size={18}/>{unread>0 && <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-rose-500 text-center text-xs text-white">{unread}</span>}</span>
              <span className="rounded-2xl bg-brand-100 p-3 text-brand-700 dark:bg-brand-950 dark:text-brand-300"><UserRound size={18}/></span>
            </div>
          </div>
        </header>
        <div className="p-4 md:p-8"><Outlet/></div>
      </main>
    </div>
  );
}
