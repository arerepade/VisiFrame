import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — VisiFrame",
  description:
    "The terms covering VisiFrame accounts, generated designs, acceptable use and subscriptions.",
};

const CONTACT = "lbenagha@gmail.com";

/**
 * Copy is verbatim from the approved prototype, with one necessary change: the
 * prototype points at hello@visiframe.app and a contact page, neither of which
 * exists yet. During the concierge phase both are replaced by the real address.
 */
const SECTIONS = [
  {
    heading: "1. What VisiFrame does",
    body: "VisiFrame analyzes the visual and structural patterns of website references you provide — layout, typography, color and spacing — and generates original homepage design directions adapted to your brand. VisiFrame does not copy or reproduce the content, code or branding of any reference website.",
  },
  {
    heading: "2. Your account and projects",
    body: "Free accounts include one limited preview project. Creator subscribers receive three complete design projects per billing cycle; unused projects do not roll over to the next month. You are responsible for the accuracy of any URLs, screenshots or descriptions you submit.",
  },
  {
    heading: "3. Ownership of generated designs",
    body: "Designs and code exported from a paid Creator project are yours to use, modify and ship commercially, with no attribution required. Free-tier previews carry a VisiFrame watermark and are for evaluation only, not production use.",
  },
  {
    heading: "4. Acceptable use",
    body: "Do not use reference material you don't have the right to analyze, or use VisiFrame to reproduce a specific website's branding, trademarks or copyrighted content. VisiFrame is a design-inspiration tool, not a cloning tool.",
  },
  {
    heading: "5. Subscription and cancellation",
    body: "Creator is billed monthly and can be cancelled anytime from your account settings; you'll retain access until the end of the current billing period. No refunds are provided for partial months.",
  },
  {
    heading: "6. Changes to these terms",
    body: "We may update these terms as VisiFrame evolves. Material changes will be communicated by email or in-app notice before they take effect.",
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

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Last updated August 2026"
      sections={SECTIONS}
    />
  );
}
