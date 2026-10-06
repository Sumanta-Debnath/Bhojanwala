import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contact } from "@/data/contact";

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-md [&>svg]:size-5"
      >
        {icon}
      </span>
      <div className="min-w-0 space-y-1">
        <h2 className="font-sans text-base font-semibold md:text-base">
          {label}
        </h2>
        <div className="text-muted-foreground text-sm leading-relaxed [overflow-wrap:anywhere] md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Address, phone and email. */
export function ContactDetails() {
  const { address, phone, email } = contact;
  return (
    <Card>
      <CardContent className="space-y-6">
        <Detail icon={<MapPin />} label={address.label}>
          <address className="not-italic">
            {address.lines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
        </Detail>
        <Detail icon={<Phone />} label={phone.label}>
          {phone.numbers.map((n) => (
            <div key={n}>{n}</div>
          ))}
        </Detail>
        <Detail icon={<Mail />} label={email.label}>
          {email.address}
        </Detail>
      </CardContent>
    </Card>
  );
}
