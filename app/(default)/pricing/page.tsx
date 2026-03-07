export const metadata = {
  title: "Pricing",
  description: "Pricing tables for Cronshot.",
};

import Cta from "@/components/cta";
import PricingTables from "@/components/pricing-tables";

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <Cta />
    </>
  );
}