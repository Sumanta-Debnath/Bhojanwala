import { AlertCircle, CheckCircle2, TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";

const swatches = [
  ["background", "bg-background border"],
  ["foreground", "bg-foreground"],
  ["card", "bg-card border"],
  ["primary", "bg-primary"],
  ["secondary", "bg-secondary border"],
  ["accent", "bg-accent border"],
  ["muted", "bg-muted border"],
  ["destructive", "bg-destructive"],
  ["success", "bg-success"],
  ["warning", "bg-warning"],
  ["border", "bg-border"],
  ["ring", "bg-ring"],
] as const;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function DesignSystem() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "index.html" },
        { label: "Design system" },
      ]}
    >
      <Container className="space-y-12 py-10">
        <header className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">
            Bhojanwala
          </p>
          <h1>Design system</h1>
          <p className="text-muted-foreground max-w-prose">
            Reference for the shared tokens, primitives and global layout. Not a
            site page.
          </p>
        </header>

        <Separator />

        <Section title="Typography">
          <div className="space-y-3">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>
              Body text in Montserrat. Muted copy is used for supporting detail.
            </p>
            <p className="text-muted-foreground text-sm">Muted small text</p>
          </div>
        </Section>

        <Section title="Color tokens">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {swatches.map(([name, cls]) => (
              <div key={name} className="space-y-2">
                <div className={`h-12 rounded-md ${cls}`} />
                <p className="text-xs font-medium">{name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section title="Badges and feedback">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <Alert variant="success">
              <CheckCircle2 />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your changes were saved.</AlertDescription>
            </Alert>
            <Alert variant="warning">
              <TriangleAlert />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Check this before continuing.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Something went wrong.</AlertDescription>
            </Alert>
          </div>
        </Section>

        <Section title="Form controls">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Form example</CardTitle>
              <CardDescription>
                Default, invalid and disabled states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ds-name">Name</Label>
                <Input id="ds-name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ds-email">Email</Label>
                <Input
                  id="ds-email"
                  type="email"
                  aria-invalid
                  defaultValue="not-an-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ds-msg">Message</Label>
                <Textarea id="ds-msg" placeholder="Your message" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ds-disabled">Disabled</Label>
                <Input id="ds-disabled" disabled placeholder="Unavailable" />
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section title="Elevation and radius">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {(
              ["shadow-xs", "shadow-sm", "shadow-md", "shadow-lg"] as const
            ).map((s) => (
              <div
                key={s}
                className={`bg-card flex h-20 items-center justify-center rounded-lg border text-xs ${s}`}
              >
                {s}
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </PageShell>
  );
}
