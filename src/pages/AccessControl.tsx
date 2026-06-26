import { Bell, Clock, DoorOpen, LayoutDashboard, ShieldCheck, WifiOff } from "lucide-react";
import SolutionPage from "./SolutionPage";
import SiteShell from "../component/SIteShell";

export default function AccessControl() {
  return (
    <SiteShell>
    <SolutionPage
      eyebrow="Access Control"
      title={
        <>
          Know Who Is In School.{" "}
          <span className="text-amber-400">Know When They Arrive.</span>
        </>
      }
      subtitle="Modern access control powered by NFC — fast, accurate, tamper-resistant."
      intro={
        <p>
          Traditional attendance systems are slow, inaccurate, and vulnerable to
          manipulation. WinExpress lets students tap their smart card on an access terminal
          at entry and exit. The system records time, identity and status automatically —
          even when the internet is down.
        </p>
      }
      features={[
        { icon: Clock,         title: "Real-Time Attendance",    body: "Capture attendance automatically — no manual roll call." },
        { icon: DoorOpen,      title: "NFC Access Terminals",    body: "Fast, secure tap authentication at every gate." },
        { icon: WifiOff,       title: "Works Offline",           body: "Records continue even without internet connectivity." },
        { icon: LayoutDashboard, title: "Admin Dashboard",       body: "Centralised reporting and attendance insights." },
        { icon: Bell,          title: "Parent Notifications",    body: "Parents get updates the moment a child arrives or leaves." },
        { icon: ShieldCheck,   title: "Stronger Campus Security",body: "Only verified students pass through the gate." },
      ]}
      benefits={[
        {
          heading: "Why Schools Need Smart Attendance",
          items: [
            "Reduce administrative workload",
            "Improve attendance accuracy",
            "Strengthen campus security",
            "Generate attendance reports instantly",
            "Improve accountability across the institution",
          ],
        },
      ]}
      ctaTitle="Book a Free Demonstration"
    />
    </SiteShell>
  );
}