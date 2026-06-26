import { IdCard, ShieldCheck, BookOpen, Award, Layers, Fingerprint } from "lucide-react";
import SolutionPage from "./SolutionPage";
import SiteShell from "../component/SIteShell";

export default function SmartID() {
  return (
    <SiteShell>
    <SolutionPage
      eyebrow="Smart Student ID"
      title={
        <>
          Give Every Student a{" "}
          <span className="text-amber-400">Secure Digital Identity</span>
        </>
      }
      subtitle="Student identification is more than a card — it's the foundation of a secure, well-organised school."
      intro={
        <p>
          WinExpress Smart Student Cards provide schools with a reliable system for student
          identification, attendance tracking, cashless payments, and access control — all
          from a single, professionally designed card.
        </p>
      }
      features={[
        { icon: IdCard,      title: "Student Photograph & Name", body: "Clear visual identification, every time." },
        { icon: BookOpen,    title: "Class Information",          body: "Class and section data printed and linked digitally." },
        { icon: Fingerprint, title: "Unique Student ID",          body: "Each student has a tamper-proof digital identity." },
        { icon: Layers,      title: "NFC Technology",             body: "Tap-to-use for gates, attendance and payments." },
        { icon: ShieldCheck, title: "Tamper-Resistant",           body: "Durable card stock with secure print finish." },
        { icon: Award,       title: "School Branding",            body: "Custom designs that reinforce institutional pride." },
      ]}
      benefits={[
        {
          heading: "Benefits for Schools",
          items: [
            "Eliminate impersonation at the gate",
            "Improve student record keeping",
            "Strengthen school branding",
            "One card serves ID, attendance, access & payments",
          ],
        },
        {
          heading: "Benefits for Parents",
          items: [
            "Verified child identity in the school ecosystem",
            "Attendance updates linked to the card",
            "Transaction monitoring on every purchase",
            "Confidence that the right child is on campus",
          ],
        },
      ]}
      ctaTitle="One Card. Multiple Functions."
    />
    </SiteShell>
  );
}