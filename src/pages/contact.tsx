import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { contact } from "@/data/contact";
import { ContactDetails } from "@/features/contact/contact-details";
import { ContactForm } from "@/features/contact/contact-form";

export function ContactPage() {
  return (
    <PageShell>
      {/* -mb-16 cancels the footer's top margin so the image meets the footer. */}
      <div className="relative isolate -mb-16">
        {/* Decorative background image. */}
        <img
          src={contact.backgroundImage}
          alt=""
          width={1920}
          height={1080}
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <Container className="py-10 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-8">
            <div className="order-2 lg:order-1">
              <ContactDetails />
            </div>
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </PageShell>
  );
}
