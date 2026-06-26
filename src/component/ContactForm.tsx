import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><Check /></div>
        <h3 className="mt-4 text-xl font-black text-secondary">Thanks — we've got it.</h3>
        <p className="mt-2 text-muted-foreground">Our team will reach out within one business day to schedule your demo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="School Name" name="school" required />
        <Field label="Contact Person" name="contact" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="Number of Students" name="students" type="number" />
        <Field label="City" name="city" />
      </div>
      <div className="mt-4">
        <label className="text-sm font-semibold text-secondary">Message</label>
        <textarea
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          placeholder="Tell us about your school and what you'd like to see."
        />
      </div>
      <Button type="submit" size="lg" className="mt-5 h-12 w-full rounded-full font-bold">
        Send Request
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We respond within one business day.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-secondary" htmlFor={name}>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <Input id={name} name={name} type={type} required={required} className="mt-1.5" />
    </div>
  );
}
