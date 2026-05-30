import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";

const base =
  "w-full rounded-xl bg-surface px-4 py-3 text-[14.5px] text-foreground placeholder:text-muted-foreground/70 outline-none transition-all";
const ring =
  "border border-border focus:border-accent focus:shadow-[0_0_0_3px_rgba(184,149,106,0.12)]";

function Label({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 font-sans text-[12px] text-muted-foreground"
    >
      {children}
    </label>
  );
}

export const FormField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { label: string }>(
  ({ label, id, ...props }, ref) => (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input ref={ref} id={id} className={`${base} ${ring}`} {...props} />
    </div>
  ),
);
FormField.displayName = "FormField";

export function TextAreaField({
  label,
  id,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <textarea id={id} className={`${base} ${ring} resize-none`} {...props} />
    </div>
  );
}

export function SelectField({
  label,
  id,
  options,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select id={id} className={`${base} ${ring} appearance-none pr-10`} {...props}>
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
