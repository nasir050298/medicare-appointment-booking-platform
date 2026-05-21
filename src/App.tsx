import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PublicLayout } from "./components/layout/PublicLayout";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { useAuthStore } from "./store/authStore";
import { About, Contact, Departments, DoctorDetails, Doctors, FAQ, Home, Pricing, Services } from "./pages/public/PublicPages";
import { ForgotPassword, Login, Register } from "./pages/auth/AuthPages";
import {
  AdminAppointments, AdminDashboard, AdminDepartments, AdminDoctors, AdminPatients, AdminPayments, AdminReports, AdminSettings,
  BookAppointment, DoctorAppointments, DoctorCalendar, DoctorDashboard, DoctorReviews, Favorites, MyAppointments, Notifications,
  PatientDashboard, PatientList, Payments, PrescriptionWriter, Prescriptions, Records, ScheduleManagement, Settings
} from "./pages/dashboard/DashboardPages";

function Protected({ role, children }: any) {
  const user = useAuthStore(s=>s.user);
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to={`/${user.role}`} replace />;
  return children;
}

export default function App() {
  return (
    <>
      <Toaster position="top-right"/>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/doctors/:id" element={<DoctorDetails/>}/>
          <Route path="/departments" element={<Departments/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route element={<Protected><DashboardLayout/></Protected>}>
          <Route path="/patient" element={<Protected role="patient"><PatientDashboard/></Protected>}/>
          <Route path="/patient/book" element={<Protected role="patient"><BookAppointment/></Protected>}/>
          <Route path="/book" element={<Protected role="patient"><BookAppointment/></Protected>}/>
          <Route path="/patient/appointments" element={<Protected role="patient"><MyAppointments/></Protected>}/>
          <Route path="/patient/prescriptions" element={<Protected role="patient"><Prescriptions/></Protected>}/>
          <Route path="/patient/records" element={<Protected role="patient"><Records/></Protected>}/>
          <Route path="/patient/favorites" element={<Protected role="patient"><Favorites/></Protected>}/>
          <Route path="/patient/payments" element={<Protected role="patient"><Payments/></Protected>}/>
          <Route path="/patient/notifications" element={<Protected role="patient"><Notifications/></Protected>}/>
          <Route path="/patient/settings" element={<Protected role="patient"><Settings/></Protected>}/>

          <Route path="/doctor" element={<Protected role="doctor"><DoctorDashboard/></Protected>}/>
          <Route path="/doctor/appointments" element={<Protected role="doctor"><DoctorAppointments/></Protected>}/>
          <Route path="/doctor/calendar" element={<Protected role="doctor"><DoctorCalendar/></Protected>}/>
          <Route path="/doctor/patients" element={<Protected role="doctor"><PatientList/></Protected>}/>
          <Route path="/doctor/prescription-writer" element={<Protected role="doctor"><PrescriptionWriter/></Protected>}/>
          <Route path="/doctor/schedule" element={<Protected role="doctor"><ScheduleManagement/></Protected>}/>
          <Route path="/doctor/reviews" element={<Protected role="doctor"><DoctorReviews/></Protected>}/>
          <Route path="/doctor/notifications" element={<Protected role="doctor"><Notifications/></Protected>}/>
          <Route path="/doctor/settings" element={<Protected role="doctor"><Settings/></Protected>}/>

          <Route path="/admin" element={<Protected role="admin"><AdminDashboard/></Protected>}/>
          <Route path="/admin/doctors" element={<Protected role="admin"><AdminDoctors/></Protected>}/>
          <Route path="/admin/patients" element={<Protected role="admin"><AdminPatients/></Protected>}/>
          <Route path="/admin/appointments" element={<Protected role="admin"><AdminAppointments/></Protected>}/>
          <Route path="/admin/departments" element={<Protected role="admin"><AdminDepartments/></Protected>}/>
          <Route path="/admin/payments" element={<Protected role="admin"><AdminPayments/></Protected>}/>
          <Route path="/admin/reports" element={<Protected role="admin"><AdminReports/></Protected>}/>
          <Route path="/admin/settings" element={<Protected role="admin"><AdminSettings/></Protected>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
}
