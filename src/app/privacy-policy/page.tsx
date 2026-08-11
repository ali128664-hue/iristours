import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Iris Tours Pakistan",
  description: "Learn how Iris Tours collects, uses, and protects your personal information when you use our car rental services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 tracking-tight">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Policy</span>
        </h1>

        <div className="prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-text-primary prose-a:text-accent-primary">
          <p className="text-lg mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <p>
            At <strong>Iris Tours</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when using our website, booking our vehicles, or communicating with our team.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>
          <p>
            We may collect the following types of information when you interact with Iris Tours:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Personal Details:</strong> Name, email address, phone number (e.g., via WhatsApp inquiries), and physical address.</li>
            <li><strong>Booking Information:</strong> Travel dates, pick-up/drop-off locations, flight details (for airport transfers), and specific vehicle preferences.</li>
            <li><strong>Identification Documents:</strong> Copies of your CNIC, Passport, or Driver's License required for vehicle rental and verification purposes.</li>
            <li><strong>Usage Data:</strong> Information about how you navigate and use our website, collected through cookies and analytics tools.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. How We Use Your Information</h2>
          <p>
            The information we collect is used strictly for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>To process your car rental bookings and provide the requested services (such as airport transfers, wedding cars, or tours).</li>
            <li>To communicate with you regarding your booking, updates, or customer support via WhatsApp, phone, or email.</li>
            <li>To verify your identity and ensure the security of our vehicles and chauffeurs.</li>
            <li>To improve our website's functionality, user experience, and service offerings.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Data Sharing and Protection</h2>
          <p>
            We respect your privacy and <strong>do not sell, rent, or trade</strong> your personal information to third parties. We may only share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Service Providers:</strong> With trusted third-party partners who assist us in operating our business (e.g., payment gateways or IT support), provided they agree to keep your information confidential.</li>
            <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental authority to disclose information.</li>
          </ul>
          <p>
            We implement robust physical, electronic, and managerial procedures to safeguard and secure the information we collect online and offline.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. WhatsApp Communication</h2>
          <p>
            Our primary mode of instant communication and booking is WhatsApp. By initiating a conversation with us via our WhatsApp links, you consent to us communicating with you through that platform. Please ensure that you do not send highly sensitive financial information (like full credit card numbers) over WhatsApp.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites (e.g., Facebook, Instagram, LinkedIn). We are not responsible for the privacy practices or the content of such external websites. We encourage you to read their respective privacy policies.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">6. Changes to this Policy</h2>
          <p>
            Iris Tours reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Phone / WhatsApp:</strong> <a href="tel:+923066305875">+92 306 6305875</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@iristours.net">info@iristours.net</a></li>
            <li><strong>Lahore Office:</strong> DHA Phase-1, Sector-H, 143 Street, 153, Lahore</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
