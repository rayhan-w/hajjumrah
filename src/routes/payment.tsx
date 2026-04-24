import { createFileRoute } from "@tanstack/react-router";
import { Building2, CreditCard, Smartphone, ShieldCheck, FileCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { whatsappLink, site } from "@/lib/site";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment & Booking — Al-Samsuddin Hajj & Umrah" },
      {
        name: "description",
        content:
          "Easy booking and secure payment options for Hajj & Umrah packages — bKash, Nagad, bank transfer and office cash payment in Paltan, Dhaka.",
      },
    ],
  }),
  component: PaymentPage,
});

const banks = [
  {
    name: "Islami Bank Bangladesh Ltd.",
    branch: "Paltan Branch, Dhaka",
    account: "Al-Samsuddin Hajj & Umrah",
    number: "20502850100123456",
    routing: "125274568",
  },
  {
    name: "Dutch-Bangla Bank Ltd.",
    branch: "Motijheel Branch, Dhaka",
    account: "Al-Samsuddin Hajj & Umrah",
    number: "1234567890123",
    routing: "090275678",
  },
];

const mobile = [
  { name: "bKash (Merchant)", number: "01711-000000", icon: Smartphone },
  { name: "Nagad (Merchant)", number: "01711-000000", icon: Smartphone },
  { name: "Rocket", number: "01711-000000-1", icon: Smartphone },
];

const steps = [
  { Icon: FileCheck, title: "1. Choose Package", desc: "Select your preferred Hajj or Umrah package from our list." },
  { Icon: CreditCard, title: "2. Pay Booking Fee", desc: "Pay 25% advance via bKash, Nagad, bank or office cash." },
  { Icon: ShieldCheck, title: "3. Submit Documents", desc: "Submit passport, NID and photos to our Paltan office." },
  { Icon: Building2, title: "4. Final Confirmation", desc: "Pay balance, receive ticket, visa and join pre-departure briefing." },
];

function PaymentPage() {
  return (
    <>
      <PageHero
        title="Payment & Booking"
        subtitle="Secure, transparent and multiple payment options"
        crumbs={[{ label: "Payment" }]}
      />
      <section className="container mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-emerald text-primary-foreground">
                <s.Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg text-primary">{s.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-primary">Bank Accounts</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use any of the following bank accounts to make your payment.
            </p>
            <div className="mt-5 space-y-4">
              {banks.map((b) => (
                <div key={b.number} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-1 h-5 w-5 text-accent" />
                    <div className="flex-1">
                      <div className="font-display text-lg text-primary">{b.name}</div>
                      <div className="text-xs text-muted-foreground">{b.branch}</div>
                      <div className="mt-3 grid gap-1 text-sm">
                        <div><span className="text-muted-foreground">Account: </span><span className="font-semibold">{b.account}</span></div>
                        <div><span className="text-muted-foreground">A/C No: </span><span className="font-mono font-semibold">{b.number}</span></div>
                        <div><span className="text-muted-foreground">Routing: </span><span className="font-mono">{b.routing}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-primary">Mobile Banking</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Send your payment to any of these mobile wallets (Send Money / Payment).
            </p>
            <div className="mt-5 space-y-4">
              {mobile.map((m) => (
                <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-accent-foreground shadow-gold">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-lg text-primary">{m.name}</div>
                    <div className="font-mono text-base font-semibold text-foreground">{m.number}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-5">
              <div className="font-semibold text-primary">📌 Important</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85">
                <li>After payment, send transaction ID via WhatsApp.</li>
                <li>Booking confirmed only after receipt issued from office.</li>
                <li>Cash payment accepted at our Paltan office during business hours.</li>
                <li>For any payment issue, call directly: {site.phoneDisplay}</li>
              </ul>
              <a
                href={whatsappLink("I have made the payment. Transaction ID:")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white"
              >
                Send Payment Proof on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
