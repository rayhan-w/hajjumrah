import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { whatsappLink } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Invalid email").max(120).or(z.literal("")),
  package: z.string().max(80),
  message: z.string().trim().max(500),
});

type Props = { defaultPackage?: string; compact?: boolean };

export function InquiryForm({ defaultPackage = "", compact = false }: Props) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      package: String(fd.get("package") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.success("Inquiry sent! We will contact you on WhatsApp shortly.");
    const msg = `Assalamu Alaikum,\nName: ${data.name}\nPhone: ${data.phone}\nPackage: ${data.package}\nMessage: ${data.message}`;
    window.open(whatsappLink(msg), "_blank");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-2"}>
        <input
          name="name"
          required
          placeholder="Your Name *"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
        />
        <input
          name="phone"
          required
          placeholder="Phone / WhatsApp *"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
        />
      </div>
      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-2"}>
        <input
          name="email"
          type="email"
          placeholder="Email (optional)"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
        />
        <select
          name="package"
          defaultValue={defaultPackage}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
        >
          <option value="">Select Package</option>
          <option>Economy Umrah</option>
          <option>Standard Umrah</option>
          <option>Premium Umrah</option>
          <option>Family Umrah</option>
          <option>Hajj Standard</option>
          <option>Hajj VIP</option>
        </select>
      </div>
      <textarea
        name="message"
        rows={4}
        placeholder="Your message or special requirements..."
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-95 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Inquiry via WhatsApp"}
      </button>
    </form>
  );
}
