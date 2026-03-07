import ContactForm from "@/components/contact-form";

export const metadata = {
    title: "Support",
    description: "Have a question about CronShot? Contact us directly",
};

export default function Support() {
    return (
    <>
      {/* Contact section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Have a question about CronShot? Contact us directly
              </h1>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}