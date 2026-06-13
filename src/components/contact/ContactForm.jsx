import { useState } from "react";
import { Check, Send } from "lucide-react";
import { isValidEmail, cn } from "../../utils/helpers";
import Button from "../common/Button";

const FIELDS = [
  { name: "name", label: "Your name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
];

/**
 * Accessible contact form with floating labels and client-side validation.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!isValidEmail(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10)
      e.message = "Tell us a little more (10+ characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3200);
  };

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const fieldClasses = (invalid) =>
    cn(
      "peer w-full rounded-xl border bg-paper-200 px-4 pb-2.5 pt-6 text-[15px] outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:bg-ink-800",
      invalid ? "border-rose-400" : "border-black/10 dark:border-white/10"
    );

  const labelClasses =
    "pointer-events-none absolute left-4 top-4 text-[15px] text-neutral-400 transition-all peer-focus:top-2 peer-focus:text-[11px] peer-focus:accent-text peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]";

  return (
    <div className="glass rounded-2xl p-7">
      {FIELDS.map((field) => (
        <div key={field.name} className="relative mb-5">
          <input
            id={`cf-${field.name}`}
            type={field.type}
            value={form[field.name]}
            onChange={update(field.name)}
            placeholder=" "
            className={fieldClasses(errors[field.name])}
          />
          <label htmlFor={`cf-${field.name}`} className={labelClasses}>
            {field.label}
          </label>
          {errors[field.name] && (
            <span className="mt-1.5 block text-xs text-rose-400">
              {errors[field.name]}
            </span>
          )}
        </div>
      ))}

      <div className="relative mb-6">
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder=" "
          className={cn(fieldClasses(errors.message), "resize-y")}
        />
        <label htmlFor="cf-message" className={labelClasses}>
          Tell us about your project
        </label>
        {errors.message && (
          <span className="mt-1.5 block text-xs text-rose-400">
            {errors.message}
          </span>
        )}
      </div>

      <Button onClick={handleSubmit} className="w-full">
        {sent ? (
          <>
            Message sent <Check size={17} />
          </>
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </Button>
    </div>
  );
}
