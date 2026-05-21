import { Appointment, Doctor, MedicalRecord, NotificationItem, Prescription } from "../types";

export const departments = [
  { name: "Cardiology", icon: "HeartPulse", count: 18, description: "Heart and blood pressure specialists" },
  { name: "Dermatology", icon: "Sparkles", count: 12, description: "Skin, hair, and cosmetic care" },
  { name: "Neurology", icon: "Brain", count: 9, description: "Brain, nerves, and spine treatment" },
  { name: "Orthopedics", icon: "Bone", count: 14, description: "Bone, joint, and injury care" },
  { name: "Pediatrics", icon: "Baby", count: 10, description: "Child healthcare and development" },
  { name: "Dentistry", icon: "Smile", count: 11, description: "Dental checkups and oral care" },
  { name: "ENT", icon: "Stethoscope", count: 7, description: "Ear, nose, and throat specialists" },
  { name: "General Medicine", icon: "ShieldCheck", count: 22, description: "Primary care and general consultation" }
];

export const doctors: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Sarah Ahmed",
    email: "sarah@medicare.com",
    phone: "+8801700000001",
    specialization: "Senior Cardiologist",
    department: "Cardiology",
    qualification: "MBBS, MD Cardiology",
    experience: 12,
    fee: 45,
    rating: 4.9,
    reviews: 328,
    location: "MediCare Central Clinic, Dhaka",
    languages: ["English", "Bangla"],
    availableToday: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    bio: "Dr. Sarah Ahmed specializes in preventive cardiology, hypertension management, and cardiac risk assessment with a patient-first approach.",
    services: ["ECG Review", "Blood Pressure Management", "Heart Checkup", "Chest Pain Consultation"],
    education: ["Dhaka Medical College", "Cardiology Fellowship, Singapore"],
    slots: ["09:00 AM", "10:30 AM", "12:00 PM", "03:00 PM", "05:30 PM"]
  },
  {
    id: "doc-2",
    name: "Dr. Michael Chen",
    email: "michael@medicare.com",
    phone: "+8801700000002",
    specialization: "Neurologist",
    department: "Neurology",
    qualification: "MBBS, DM Neurology",
    experience: 10,
    fee: 55,
    rating: 4.8,
    reviews: 214,
    location: "MediCare Neuro Center",
    languages: ["English", "Chinese"],
    availableToday: true,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
    bio: "Experienced neurologist focused on migraine, seizure disorders, nerve pain, and stroke follow-up care.",
    services: ["Migraine Care", "Stroke Follow-up", "Nerve Pain", "EEG Review"],
    education: ["Peking Union Medical College", "Neuroscience Fellowship"],
    slots: ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM"]
  },
  {
    id: "doc-3",
    name: "Dr. Ayesha Rahman",
    email: "ayesha@medicare.com",
    phone: "+8801700000003",
    specialization: "Dermatologist",
    department: "Dermatology",
    qualification: "MBBS, DDV",
    experience: 8,
    fee: 35,
    rating: 4.7,
    reviews: 189,
    location: "SkinCare Wing, MediCare",
    languages: ["English", "Bangla", "Hindi"],
    availableToday: false,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    bio: "Skin specialist providing evidence-based treatment for acne, eczema, hair loss, and cosmetic dermatology.",
    services: ["Acne Treatment", "Eczema Care", "Hair Loss", "Skin Allergy"],
    education: ["BSMMU", "Advanced Dermatology Training"],
    slots: ["09:30 AM", "01:00 PM", "06:00 PM"]
  },
  {
    id: "doc-4",
    name: "Dr. James Wilson",
    email: "james@medicare.com",
    phone: "+8801700000004",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    qualification: "MBBS, MS Ortho",
    experience: 15,
    fee: 60,
    rating: 4.9,
    reviews: 401,
    location: "MediCare Bone & Joint Center",
    languages: ["English"],
    availableToday: true,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80",
    bio: "Orthopedic surgeon with expertise in joint pain, fractures, sports injuries, and rehabilitation planning.",
    services: ["Joint Pain", "Fracture Care", "Sports Injury", "Back Pain"],
    education: ["King's College Hospital", "Orthopedic Surgery Fellowship"],
    slots: ["08:30 AM", "11:00 AM", "01:30 PM", "04:30 PM"]
  }
];

export const appointments: Appointment[] = [
  { id: "APT-1001", patientName: "Nasir Uddin Khan", patientEmail: "patient@medicare.com", doctorId: "doc-1", doctorName: "Dr. Sarah Ahmed", department: "Cardiology", date: "2026-05-22", time: "10:30 AM", type: "In-person", symptoms: "Chest discomfort and high blood pressure", fee: 45, status: "Confirmed", paymentStatus: "Paid" },
  { id: "APT-1002", patientName: "Mira Hassan", patientEmail: "mira@example.com", doctorId: "doc-2", doctorName: "Dr. Michael Chen", department: "Neurology", date: "2026-05-23", time: "02:30 PM", type: "Video", symptoms: "Migraine follow-up", fee: 55, status: "Pending", paymentStatus: "Unpaid" },
  { id: "APT-1003", patientName: "Ravi Kumar", patientEmail: "ravi@example.com", doctorId: "doc-4", doctorName: "Dr. James Wilson", department: "Orthopedics", date: "2026-05-20", time: "11:00 AM", type: "Follow-up", symptoms: "Knee pain", fee: 60, status: "Completed", paymentStatus: "Paid" },
  { id: "APT-1004", patientName: "Sadia Islam", patientEmail: "sadia@example.com", doctorId: "doc-3", doctorName: "Dr. Ayesha Rahman", department: "Dermatology", date: "2026-05-25", time: "06:00 PM", type: "In-person", symptoms: "Skin allergy", fee: 35, status: "Rescheduled", paymentStatus: "Unpaid" }
];

export const prescriptions: Prescription[] = [
  {
    id: "RX-2201",
    appointmentId: "APT-1003",
    patientName: "Ravi Kumar",
    doctorName: "Dr. James Wilson",
    diagnosis: "Mild knee ligament strain",
    medicines: [
      { name: "Naproxen 250mg", dosage: "1 tablet", frequency: "Twice daily", duration: "5 days", instruction: "After meal" },
      { name: "Calcium + D3", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", instruction: "After breakfast" }
    ],
    tests: ["X-ray knee AP/Lateral if pain persists"],
    followUp: "2026-06-01",
    date: "2026-05-20"
  }
];

export const records: MedicalRecord[] = [
  { id: "REC-1", patientName: "Nasir Uddin Khan", type: "Blood Test", fileName: "cbc-report.pdf", department: "General Medicine", uploadedAt: "2026-05-15", size: "1.2 MB" },
  { id: "REC-2", patientName: "Nasir Uddin Khan", type: "ECG", fileName: "ecg-may-report.png", department: "Cardiology", uploadedAt: "2026-05-18", size: "880 KB" },
  { id: "REC-3", patientName: "Ravi Kumar", type: "X-ray", fileName: "knee-xray.pdf", department: "Orthopedics", uploadedAt: "2026-05-20", size: "2.4 MB" }
];

export const notifications: NotificationItem[] = [
  { id: "N-1", title: "Appointment confirmed", message: "Your appointment with Dr. Sarah Ahmed is confirmed for May 22 at 10:30 AM.", type: "Appointment", read: false, createdAt: "Today" },
  { id: "N-2", title: "Prescription uploaded", message: "A new prescription is available in your patient dashboard.", type: "Prescription", read: false, createdAt: "Yesterday" },
  { id: "N-3", title: "Payment successful", message: "Payment for APT-1001 has been received.", type: "Payment", read: true, createdAt: "May 18" }
];

export const analytics = [
  { name: "Jan", appointments: 120, revenue: 4200, patients: 80 },
  { name: "Feb", appointments: 150, revenue: 5100, patients: 96 },
  { name: "Mar", appointments: 180, revenue: 6200, patients: 112 },
  { name: "Apr", appointments: 210, revenue: 7600, patients: 138 },
  { name: "May", appointments: 260, revenue: 8900, patients: 171 },
  { name: "Jun", appointments: 300, revenue: 10400, patients: 202 }
];

export const reviews = [
  { name: "Nasir Uddin", doctor: "Dr. Sarah Ahmed", rating: 5, text: "Very professional consultation and clear explanation.", date: "May 20, 2026" },
  { name: "Mira Hassan", doctor: "Dr. Michael Chen", rating: 5, text: "Helpful neurologist, excellent online consultation experience.", date: "May 16, 2026" },
  { name: "Ravi Kumar", doctor: "Dr. James Wilson", rating: 4, text: "Good treatment plan and follow-up instructions.", date: "May 12, 2026" }
];
