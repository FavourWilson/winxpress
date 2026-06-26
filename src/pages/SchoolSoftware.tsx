import { Users, FileText, Monitor, Briefcase, BarChart3, ClipboardCheck } from "lucide-react";
import SolutionPage from "./SolutionPage";
import SiteShell from "../component/SIteShell";

export default function SchoolSoftware() {
  return (
    <SiteShell>
    <SolutionPage
      eyebrow="School Management"
      title={
        <>
          Manage Your Entire Institution{" "}
          <span className="text-amber-400">From One Platform</span>
        </>
      }
      subtitle="WinEx School helps administrators streamline operations across every department."
      intro={
        <p>
          From admissions and attendance to results, examinations, HR and reporting — WinEx
          School unifies the data and workflows that run a modern school.
        </p>
      }
      features={[
        { icon: Users,          title: "Student Management",        body: "Complete digital records: admissions, profiles, attendance, academics and communication." },
        { icon: FileText,       title: "Results Management",        body: "Generate, manage and publish term reports with performance analytics." },
        { icon: Monitor,        title: "Computer-Based Testing",    body: "Conduct exams digitally with automated scoring and reporting." },
        { icon: Briefcase,      title: "Human Resource Management", body: "Staff records, attendance, payroll support and performance tracking." },
        { icon: BarChart3,      title: "Reporting & Analytics",     body: "Intelligent dashboards and automated reports for decision-makers." },
        { icon: ClipboardCheck, title: "Attendance Analytics",      body: "Patterns, trends and exception reporting at a glance." },
      ]}
      benefits={[
        {
          heading: "Why Schools Choose WinEx School",
          items: [
            "Centralised operations",
            "Reduced paperwork",
            "Improved decision making",
            "Greater efficiency",
            "Scalable infrastructure",
          ],
        },
      ]}
      ctaTitle="Request a Software Demonstration"
    />
    </SiteShell>
  );
}