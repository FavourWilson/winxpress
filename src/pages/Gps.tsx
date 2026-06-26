import { MapPin, Route as RouteIcon, Bell, ShieldAlert, Smartphone, Activity } from "lucide-react";
import SolutionPage from "./SolutionPage";
import SiteShell from "../component/SIteShell";

export default function GPS() {
  return (
    <SiteShell>
    <SolutionPage
      eyebrow="GPS Tracking"
      title={
        <>
          Student Safety{" "}
          <span className="text-amber-400">Beyond the School Gate</span>
        </>
      }
      subtitle="Real-time visibility into student movement — at school, on the road, and at home."
      intro={
        <p>
          WinExpress GPS Tracking gives parents reassurance that their children are safe
          throughout the school day and during daily commutes. Live location, route history,
          geofencing and emergency visibility — all in one parent app.
        </p>
      }
      features={[
        { icon: MapPin,      title: "Live Location",      body: "See where your child is, in real time." },
        { icon: RouteIcon,   title: "Route History",      body: "Review travel patterns and full route history." },
        { icon: ShieldAlert, title: "Geofencing",         body: "Safe zones around school, home and routes." },
        { icon: Bell,        title: "Instant Alerts",     body: "Notifications the moment a child leaves a safe zone." },
        { icon: Smartphone,  title: "Parent Mobile App",  body: "Built for parents — simple, fast, reliable." },
        { icon: Activity,    title: "Emergency Visibility",body: "Quickly locate students in urgent situations." },
      ]}
      benefits={[
        {
          heading: "For Parents",
          items: [
            "Peace of mind",
            "Improved child safety",
            "Real-time notifications",
            "Full location visibility",
          ],
        },
        {
          heading: "For Schools",
          items: [
            "Enhanced security reputation",
            "Increased parent trust",
            "Stronger duty-of-care compliance",
            "Demonstrated commitment to student welfare",
          ],
        },
      ]}
      ctaTitle="Schedule a Live Demo"
    />
    </SiteShell>
  );
}