import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — VisiFrame",
  description:
    "What VisiFrame collects, how reference material is used, and the controls you have over your data.",
};

const CONTACT = "lbenagha@gmail.com";

/**
 * Copy is verbatim from the approved prototype, with one necessary change: the
 * prototype points at privacy@visiframe.app and a contact page, neither of
 * which exists yet. During the concierge phase both are replaced by the real
 * address.
 */
const SECTIONS = [
  {
    heading: "1. What we collect",
    body: "Account details (name, email), the reference URLs, screenshots and descriptions you submit for analysis, and basic usage data (pages viewed, features used) to keep VisiFrame reliable and improve it over time.",
  },
  {
    heading: "2. How reference material is used",
    body: "Reference URLs and screenshots are used only to extract structural and stylistic patterns for your own project. We don't store or reuse your references to train shared models, and we don't share them with other users.",
  },
  {
    heading: "3. How your generated designs are stored",
    body: "Your projects and exports are stored on your account until you delete them. You can export or remove a project at any time from your dashboard.",
  },
  {
    heading: "4. Payment information",
    body: "Subscription payments are processed by a third-party payment provider. VisiFrame does not store your full card details.",
  },
  {
    heading: "5. Sharing and third parties",
    body: "We don't sell your data. We use a limited set of infrastructure and analytics providers to run VisiFrame, bound by confidentiality obligations.",
  },
  {
    heading: "6. Your controls",
    body: "You can access, export or delete your account data at any time. Deleting your account removes your saved projects and reference material within 30 days.",
  },
  {
    heading: "7. Questions",
    body: (
      <>
        Reach us anytime at{" "}
        <a href={`mailto:${CONTACT}`} className="text-accent-cta hover:text-accent-deep">
          {CONTACT}
        </a>
        .
      </>
    ),
  },
] as const;

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated August 2026"
      sections={SECTIONS}
    />
  );
}
