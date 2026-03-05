export const metadata = {
    title: "Privacy Policy",
    description: "CronShot privacy policy",
};

export default function Privacy() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-600">Last updated: 2026-03-05</p>
                </div>

                <div className="max-w-4xl mx-auto p-5">

                    <p className="mb-6 text-gray-600 leading-relaxed">
                        As a User of CronShot, it's important for you to understand how your
                        data is managed and used. We are committed to ensuring your privacy
                        and are fully GDPR-compliant. Below, we detail our practices and
                        your rights regarding your personal data.
                    </p>

                    <h2 className="text-xl font-semibold mb-3">1. Definitions</h2>
                    <p className="mb-8 text-gray-600 leading-relaxed">
                        In this Privacy Policy, "we," "us," and "our" refer to CronShot.
                        "Service" refers to our automated screenshot scheduling and
                        management options provided via cronshot.io. "User" denotes an
                        individual or entity using our Service. "Third parties" are entities
                        not part of the direct CronShot-User relationship but are linked to
                        the service we provide.
                    </p>

                    <h2 className="text-xl font-semibold mb-3">2. GDPR Compliance</h2>
                    <p className="mb-8 text-gray-600 leading-relaxed">
                        The GDPR safeguards personal data within the EU. We collect minimal
                        data necessary for service provision, including name, email address,
                        and company details for invoicing. Financial transactions are
                        processed through Stripe, a GDPR-compliant processor. Your rights
                        under the GDPR include access to your data, rectification, erasure,
                        and more.
                    </p>

                    <h2 className="text-xl font-semibold mb-3">3. Data Management</h2>
                    <p className="mb-8 text-gray-600 leading-relaxed">
                        Your data is secured and used solely for service-related purposes,
                        including user identification, login, preference storage, and
                        communication about payments and subscriptions. We restrict data
                        access to authorized personnel only.
                    </p>

                    <h2 className="text-xl font-semibold mb-3">4. Third Parties</h2>
                    <p className="mb-8 text-gray-600 leading-relaxed">
                        We partner with GDPR-compliant third parties to enhance our Service.
                        These include but are not limited to Google, Amazon, Stripe, and
                        Dropbox. Your personal data is not shared without your express
                        consent.
                    </p>

                    <h2 className="text-xl font-semibold mb-3">5. User Rights</h2>
                    <p className="mb-8 text-gray-600 leading-relaxed">
                        You have the right to inquire about your data, request rectification
                        or erasure, restrict processing, object to data use, and not be
                        subjected to automated decision-making. In case of a data breach,
                        you will be informed promptly.
                    </p>

                    <h2 className="text-xl font-semibold mb-3">6. Contacting Us</h2>
                    <p className="mb-8 text-gray-600 leading-relaxed">
                        For any questions about your data or to exercise your rights, please
                        contact us via the official web form on our site, and we will
                        respond within one month.
                    </p>

                    <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                        This Privacy Policy is subject to updates and changes. We recommend
                        reviewing it periodically. Your continued use of CronShot after
                        changes indicates your acceptance of the new terms.
                    </p>
                </div>
            </div>
        </div>
    );
}