import Cta from "@/components/cta";
import UseCases from "@/components/use-cases";

export default function UseCaseLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <main className="grow">
      {children}
      <UseCases />
      <Cta />
    </main>
  );
}