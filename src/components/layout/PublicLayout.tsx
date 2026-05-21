import { Link, NavLink, Outlet } from "react-router-dom";
import { BookOpenCheck, CalendarDays, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function PublicLayout() {
  const [dark, setDark] = useState(localStorage.getItem("medicare_theme") === "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("medicare_theme", dark ? "dark" : "light");
  }, [dark]);
  const links = ["Doctors", "Departments", "Services", "Pricing", "FAQ", "Contact"];
  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3 text-xl font-black">
            <span className="rounded-2xl bg-brand-600 p-2 text-white"><CalendarDays size={25} /></span>
            MediCare Connect
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => <NavLink key={l} className="text-sm font-bold text-slate-600 hover:text-brand-600 dark:text-slate-300" to={`/${l.toLowerCase()}`}>{l}</NavLink>)}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setDark(!dark)} className="rounded-2xl border border-slate-200 p-3 dark:border-slate-800">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
            <Link className="btn-secondary px-4 py-2" to="/login">Login</Link>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-xl font-black"><span className="rounded-2xl bg-brand-600 p-2 text-white"><BookOpenCheck size={22}/></span>MediCare Connect</div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Trusted doctor appointments, prescriptions, records, and healthcare management in one platform.</p>
          </div>
          <div><h3 className="font-black">For Patients</h3><p className="mt-3 text-slate-500">Find doctors<br/>Book appointment<br/>Medical records</p></div>
          <div><h3 className="font-black">For Clinics</h3><p className="mt-3 text-slate-500">Doctor schedules<br/>Patient management<br/>Reports</p></div>
          <div><h3 className="font-black">Support</h3><p className="mt-3 text-slate-500">support@medicare.com<br/>+880 1700-000000<br/>Emergency: 999</p></div>
        </div>
      </footer>
    </div>
  );
}
