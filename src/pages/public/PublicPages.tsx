import { Link } from "react-router-dom";
import { Activity, ArrowRight, CalendarCheck, Clock, HeartPulse, MapPin, ShieldCheck, Star, Stethoscope, Users } from "lucide-react";
import { doctors, departments, reviews } from "../../data/mockData";
import { Card, CTA, SectionTitle } from "../../components/ui";

export function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-teal-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-brand-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="badge bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">Trusted healthcare booking platform</span>
            <h1 className="mt-6 text-5xl font-black leading-tight text-slate-950 dark:text-white md:text-7xl">Book trusted doctors online with confidence</h1>
            <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-300">Find specialists, book appointments, manage prescriptions, upload medical records, and track healthcare visits from one secure platform.</p>
            <div className="mt-8 flex flex-wrap gap-4"><CTA to="/doctors">Find a Doctor</CTA><Link className="btn-secondary" to="/login">Patient Login</Link></div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[["75+","Doctors"],["24/7","Support"],["4.9/5","Rating"]].map(([v,l])=><Card key={l} className="p-4 text-center"><p className="text-2xl font-black text-brand-600">{v}</p><p className="text-sm text-slate-500">{l}</p></Card>)}
            </div>
          </div>
          <Card className="overflow-hidden p-4">
  <div className="relative overflow-hidden rounded-3xl">
    <img
      className="h-[420px] w-full object-cover"
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
      alt="Healthcare appointment booking"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

    <div className="absolute bottom-5 left-5 right-5 max-w-sm rounded-3xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/95">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-black text-slate-950 dark:text-white">
            Next appointment
          </p>
          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
            Dr. Sarah Ahmed • Cardiology
          </p>
        </div>

        <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-black text-brand-700 dark:bg-brand-950 dark:text-brand-300">
          Confirmed
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
        <CalendarCheck size={18} />
        Today, 10:30 AM
      </div>
    </div>
  </div>
</Card>
        </div>
      </section>
      <section className="py-20"><div className="mx-auto max-w-7xl px-4"><SectionTitle eyebrow="Departments" title="Popular medical departments" text="Browse specialists by department and book the right doctor faster."/><div className="grid gap-5 md:grid-cols-4">{departments.map((d)=><Card key={d.name} className="p-6 transition hover:-translate-y-1 hover:border-brand-300"><HeartPulse className="text-brand-600"/><h3 className="mt-4 font-black">{d.name}</h3><p className="mt-2 text-sm text-slate-500">{d.description}</p><p className="mt-4 text-sm font-bold text-brand-600">{d.count} doctors</p></Card>)}</div></div></section>
      <section className="bg-slate-100 py-20 dark:bg-slate-900/60"><div className="mx-auto max-w-7xl px-4"><SectionTitle eyebrow="Doctors" title="Featured doctors" text="Verified doctors with trusted experience and patient reviews."/><div className="grid gap-6 md:grid-cols-4">{doctors.map((doc)=><DoctorMini key={doc.id} doc={doc}/>)}</div></div></section>
      <section className="py-20"><div className="mx-auto max-w-7xl px-4"><SectionTitle eyebrow="How it works" title="Book care in three simple steps"/><div className="grid gap-6 md:grid-cols-3">{[["Search Doctor","Filter specialists by department, location, fee, and rating."],["Choose Slot","Pick a date, time, and consultation type that fits your schedule."],["Get Care","Receive confirmation, prescriptions, records, and follow-up reminders."]].map(([t,d],i)=><Card key={t} className="p-8"><span className="text-4xl font-black text-brand-600">0{i+1}</span><h3 className="mt-4 text-xl font-black">{t}</h3><p className="mt-2 text-slate-500">{d}</p></Card>)}</div></div></section>
      <section className="bg-brand-600 py-20 text-white"><div className="mx-auto max-w-7xl px-4 text-center"><h2 className="text-4xl font-black">Need urgent support?</h2><p className="mt-3 text-brand-50">Call emergency support or contact our appointment desk anytime.</p><div className="mt-8 flex justify-center gap-4"><Link className="rounded-2xl bg-white px-6 py-3 font-black text-brand-700" to="/contact">Contact Desk</Link><a className="rounded-2xl bg-brand-800 px-6 py-3 font-black" href="tel:999">Emergency 999</a></div></div></section>
    </>
  );
}

function DoctorMini({ doc }: any) {
  return <Card className="overflow-hidden"><img src={doc.image} className="h-48 w-full object-cover"/><div className="p-5"><div className="flex items-center justify-between"><h3 className="font-black">{doc.name}</h3><span className="flex items-center gap-1 text-sm font-bold text-amber-500"><Star size={16} fill="currentColor"/>{doc.rating}</span></div><p className="mt-1 text-sm text-slate-500">{doc.specialization}</p><p className="mt-3 text-sm text-slate-500">{doc.experience} years • ${doc.fee}</p><Link className="mt-5 inline-flex font-bold text-brand-600" to={`/doctors/${doc.id}`}>View profile <ArrowRight size={18}/></Link></div></Card>
}

export function Doctors() {
  return (
    <section className="py-12"><div className="mx-auto max-w-7xl px-4"><SectionTitle eyebrow="Find Doctors" title="Book verified doctors" text="Search by name, department, availability, fee, location, rating, and experience."/>
      <div className="mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-5"><input className="input md:col-span-2" placeholder="Search doctor name"/><select className="input"><option>All Departments</option>{departments.map(d=><option key={d.name}>{d.name}</option>)}</select><select className="input"><option>Available Today</option><option>Highest Rated</option><option>Lowest Fee</option></select><button className="btn-primary">Search</button></div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{doctors.map((doc)=><Card key={doc.id} className="p-5"><div className="flex gap-4"><img className="h-24 w-24 rounded-3xl object-cover" src={doc.image}/><div><h3 className="font-black">{doc.name}</h3><p className="text-sm text-slate-500">{doc.specialization}</p><p className="mt-2 flex items-center gap-1 text-sm text-amber-500"><Star size={15} fill="currentColor"/>{doc.rating} ({doc.reviews})</p></div></div><div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-500"><span>{doc.department}</span><span>{doc.experience} years</span><span>${doc.fee} fee</span><span>{doc.availableToday ? "Available today" : "Next available"}</span></div><div className="mt-5 flex gap-3"><Link className="btn-secondary flex-1 px-3 py-2" to={`/doctors/${doc.id}`}>Profile</Link><Link className="btn-primary flex-1 px-3 py-2" to={`/book?doctor=${doc.id}`}>Book</Link></div></Card>)}</div>
    </div></section>
  );
}

export function DoctorDetails() {
  const id = location.pathname.split("/").pop();
  const doc = doctors.find(d => d.id === id) || doctors[0];
  return (
    <section className="py-12"><div className="mx-auto max-w-7xl px-4"><div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <Card className="p-6"><div className="flex flex-col gap-6 md:flex-row"><img className="h-64 w-full rounded-3xl object-cover md:w-64" src={doc.image}/><div><span className="badge bg-brand-100 text-brand-700">{doc.department}</span><h1 className="mt-3 text-4xl font-black">{doc.name}</h1><p className="mt-2 text-lg text-slate-500">{doc.specialization}</p><p className="mt-4 text-slate-600 dark:text-slate-300">{doc.bio}</p><div className="mt-5 flex flex-wrap gap-2">{doc.services.map(s=><span className="badge bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200" key={s}>{s}</span>)}</div></div></div><div className="mt-8 grid gap-5 md:grid-cols-3"><Info label="Experience" value={`${doc.experience} Years`}/><Info label="Fee" value={`$${doc.fee}`}/><Info label="Rating" value={`${doc.rating}/5`}/></div><h2 className="mt-8 text-2xl font-black">Education & Certifications</h2><ul className="mt-3 list-inside list-disc text-slate-600 dark:text-slate-300">{doc.education.map(e=><li key={e}>{e}</li>)}</ul><h2 className="mt-8 text-2xl font-black">Patient Reviews</h2><div className="mt-4 space-y-3">{reviews.map(r=><Card className="p-4" key={r.text}><p className="font-bold">{r.name}</p><p className="text-sm text-amber-500">★★★★★</p><p className="mt-2 text-slate-500">{r.text}</p></Card>)}</div></Card>
      <Card className="h-fit p-6"><h2 className="text-2xl font-black">Available slots</h2><p className="mt-2 text-slate-500">Choose a time and book your appointment.</p><div className="mt-5 grid grid-cols-2 gap-3">{doc.slots.map(s=><button className="rounded-2xl border border-slate-200 px-4 py-3 font-bold hover:border-brand-500 hover:text-brand-600 dark:border-slate-800" key={s}>{s}</button>)}</div><Link className="btn-primary mt-6 w-full" to={`/book?doctor=${doc.id}`}>Book Appointment</Link></Card>
    </div></div></section>
  );
}

function Info({label,value}: any){return <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"><p className="text-sm text-slate-500">{label}</p><p className="font-black">{value}</p></div>}

export function Departments(){return <section className="py-12"><div className="mx-auto max-w-7xl px-4"><SectionTitle eyebrow="Departments" title="Explore departments"/><div className="grid gap-5 md:grid-cols-4">{departments.map(d=><Card className="p-6" key={d.name}><HeartPulse className="text-brand-600"/><h3 className="mt-4 text-xl font-black">{d.name}</h3><p className="mt-2 text-slate-500">{d.description}</p><p className="mt-4 font-bold text-brand-600">{d.count} specialists</p></Card>)}</div></div></section>}
export function Services(){return <Generic title="Healthcare services" items={["Online appointment booking","Video consultation","Prescription management","Medical records","Follow-up reminders","Department support","Emergency contact","Insurance placeholder"]}/>}
export function Pricing(){return <Generic title="Consultation pricing" items={["General Medicine: $25","Dermatology: $35","Cardiology: $45","Neurology: $55","Orthopedics: $60","Video consultation available","Cash at clinic","Card/Stripe placeholder"]}/>}
export function About(){return <Generic title="About MediCare Connect" items={["Trusted appointment platform","Verified doctors","Secure patient workflow","Digital records","Modern clinic dashboard","Patient-first healthcare experience"]}/>}
export function FAQ(){return <Generic title="Frequently asked questions" items={["How do I book an appointment?","Can I reschedule?","How do prescriptions work?","Can I upload medical reports?","Are video consultations supported?","How do payments work?"]}/>}
export function Contact(){return <section className="py-12"><div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2"><div><h1 className="text-4xl font-black">Contact our healthcare desk</h1><p className="mt-3 text-slate-500">Questions about appointments, payments, doctors, or technical support? Send us a message.</p><div className="mt-8 space-y-3 text-slate-600 dark:text-slate-300"><p>Phone: +880 1700-000000</p><p>Email: support@medicare.com</p><p>Emergency: 999</p><p>Opening Hours: Sat–Thu, 9:00 AM–8:00 PM</p></div></div><Card className="p-6"><input className="input mb-4" placeholder="Name"/><input className="input mb-4" placeholder="Email"/><input className="input mb-4" placeholder="Phone"/><select className="input mb-4"><option>Appointment issue</option><option>Payment issue</option><option>Doctor inquiry</option><option>Technical support</option></select><textarea className="input h-32" placeholder="Message"/><button className="btn-primary mt-4 w-full">Send Message</button></Card></div></section>}

function Generic({title,items}:{title:string;items:string[]}){return <section className="py-12"><div className="mx-auto max-w-7xl px-4"><SectionTitle title={title} text="A polished page for the healthcare platform."/><div className="grid gap-5 md:grid-cols-4">{items.map(i=><Card className="p-6" key={i}><ShieldCheck className="text-brand-600"/><h3 className="mt-4 font-black">{i}</h3><p className="mt-2 text-sm text-slate-500">Professional healthcare workflow UI placeholder.</p></Card>)}</div></div></section>}
