import { Wallet, CreditCard, SlidersHorizontal, Bell, Eye, ShieldCheck } from "lucide-react";
import SolutionPage from "./SolutionPage";
import SiteShell from "../component/SIteShell";

export default function Payments() {
  return (
    <SiteShell>
    <SolutionPage
      eyebrow="Cashless Payments"
      title={
        <>
          Safer Payments for Students.{" "}
          <span className="text-amber-400">Greater Control for Parents.</span>
        </>
      }
      subtitle="Carrying cash to school exposes students to theft and bullying. WinExpress moves your school to a secure, cashless environment."
      intro={
        <p>
          Each student card is linked to a secure digital wallet. Parents fund the wallet
          remotely while students use their cards for approved school transactions — with
          every purchase visible and controllable.
        </p>
      }
      features={[
        { icon: Wallet,          title: "Parent Wallet Funding",    body: "Top-up student accounts from anywhere, anytime." },
        { icon: CreditCard,      title: "Tap-to-Pay",               body: "Students pay at approved school vendors with their card." },
        { icon: Eye,             title: "Transaction Monitoring",    body: "See every purchase as it happens." },
        { icon: SlidersHorizontal, title: "Spending Limits",        body: "Set daily and per-transaction limits." },
        { icon: Bell,            title: "Instant Alerts",           body: "Notifications on every transaction." },
        { icon: ShieldCheck,     title: "Anti-Bullying & Anti-Theft", body: "No cash on campus means less risk." },
      ]}
      benefits={[
        {
          heading: "Benefits for Schools",
          items: [
            "Reduce cash handling",
            "Improve accountability",
            "Simplify payment processes",
            "Support digital transformation",
          ],
        },
        {
          heading: "Benefits for Parents",
          items: [
            "Greater visibility into spending",
            "Protection from cash theft",
            "Financial control and transparency",
            "Complete peace of mind",
          ],
        },
      ]}
      ctaTitle="Move Your School Towards a Cashless Future"
    />
    </SiteShell>
  );
}