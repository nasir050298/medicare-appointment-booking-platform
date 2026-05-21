import type { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <span className="badge bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {text}
        </p>
      )}
    </div>
  );
}

export function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {label}
          </p>
          <p className="mt-2 text-3xl font-black text-slate-950 dark:text-white">
            {value}
          </p>
        </div>

        <div className="rounded-2xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-950 dark:text-brand-300">
          {icon}
        </div>
      </div>
    </Card>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Confirmed:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    Completed:
      "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    Pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    Cancelled:
      "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    Rescheduled:
      "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
    Paid:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    Unpaid:
      "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    Refunded:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    Failed:
      "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  };

  return (
    <span
      className={`badge ${
        map[status] ||
        "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
      }`}
    >
      {status}
    </span>
  );
}

export function PageHeader({
  title,
  text,
  action,
}: {
  title: string;
  text?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h1 className="text-3xl font-black text-slate-950 dark:text-white md:text-4xl">
          {title}
        </h1>

        {text && (
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
            {text}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}

export function CTA({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className="btn-primary">
      {children}
      <ChevronRight size={18} />
    </Link>
  );
}