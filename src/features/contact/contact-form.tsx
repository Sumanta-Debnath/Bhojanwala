import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/data/contact";

/**
 * Three optional free-text fields and a button that does nothing (no
 * submission, no validation, no API call). The button stays type="button" so
 * nothing is sent or navigated.
 */
export function ContactForm() {
  const id = useId();
  const { form } = contact;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-normal md:text-3xl">{form.heading}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action="#" noValidate className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor={`${id}-name`}>{form.name.label}</Label>
            <Input
              id={`${id}-name`}
              type="text"
              autoComplete="name"
              placeholder={form.name.placeholder}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${id}-email`}>{form.email.label}</Label>
            <Input
              id={`${id}-email`}
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder={form.email.placeholder}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${id}-message`}>{form.message.label}</Label>
            <Textarea
              id={`${id}-message`}
              rows={5}
              className="min-h-32"
              placeholder={form.message.placeholder}
            />
          </div>
          <Button type="button" size="lg" className="w-full sm:w-auto">
            {form.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
