import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";
import { Card } from "../../components/ui";

const demo = [
  ["Patient", "patient@medicare.com", "demo123"],
  ["Doctor", "doctor@medicare.com", "demo123"],
  ["Admin", "admin@medicare.com", "demo123"]
];

export function Login() {
  const [email,setEmail]=useState("patient@medicare.com");
  const [password,setPassword]=useState("demo123");
  const [show,setShow]=useState(false);
  const login=useAuthStore(s=>s.login);
  const nav=useNavigate();
  async function submit(e:any){e.preventDefault();try{await login(email,password);toast.success("Logged in"); const role=JSON.parse(localStorage.getItem("medicare_user")||"{}").role; nav(`/${role}`)}catch(err:any){toast.error(err.message)}}
  return <AuthShell title="Welcome back" subtitle="Login to your healthcare workspace">
    <form onSubmit={submit} className="space-y-4">
      <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
      <div className="relative"><input className="input pr-12" value={password} onChange={e=>setPassword(e.target.value)} type={show?"text":"password"} placeholder="Password"/><button type="button" onClick={()=>setShow(!show)} className="absolute right-4 top-3.5 text-slate-500">{show?<EyeOff/>:<Eye/>}</button></div>
      <button className="btn-primary w-full">Login</button>
    </form>
    <div className="mt-4 flex justify-between text-sm"><Link className="text-brand-600" to="/forgot-password">Forgot password?</Link><Link className="text-brand-600" to="/register">Create account</Link></div>
    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm dark:border-slate-800 dark:bg-slate-800">
      <p className="mb-2 font-black">Demo accounts</p>{demo.map(([r,e,p])=><button key={e} onClick={()=>{setEmail(e);setPassword(p)}} className="mb-2 block w-full rounded-xl bg-white p-3 text-left dark:bg-slate-900"><b>{r}</b><br/><span className="text-slate-500">{e} / {p}</span></button>)}
    </div>
  </AuthShell>
}
export function Register(){const reg=useAuthStore(s=>s.register); const nav=useNavigate(); const [role,setRole]=useState<any>("patient"); return <AuthShell title="Create account" subtitle="Register as patient or doctor"><form onSubmit={async e=>{e.preventDefault(); const f=e.currentTarget as any; await reg({name:f.name.value,email:f.email.value,password:f.password.value,role});toast.success("Registered");nav(`/${role}`)}} className="space-y-4"><input className="input" name="name" placeholder="Full name" defaultValue="New Patient"/><input className="input" name="email" placeholder="Email" defaultValue="new@medicare.com"/><input className="input" name="password" placeholder="Password" defaultValue="demo123"/><select className="input" value={role} onChange={e=>setRole(e.target.value)}><option value="patient">Patient</option><option value="doctor">Doctor Apply</option></select><button className="btn-primary w-full">Create Account</button></form></AuthShell>}
export function ForgotPassword(){return <AuthShell title="Reset password" subtitle="Frontend placeholder"><input className="input mb-4" placeholder="Email"/><button onClick={()=>toast.success("Reset link simulated")} className="btn-primary w-full">Send Reset Link</button></AuthShell>}
function AuthShell({title,subtitle,children}:any){return <main className="grid min-h-screen place-items-center bg-gradient-to-br from-brand-50 to-teal-50 p-4 dark:from-slate-950 dark:to-slate-900"><div className="w-full max-w-md"><Link className="mb-6 inline-flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300" to="/"><ArrowLeft size={18}/>Back to Website</Link><Card className="p-8"><h1 className="text-3xl font-black">{title}</h1><p className="mb-6 mt-2 text-slate-500">{subtitle}</p>{children}</Card></div></main>}
