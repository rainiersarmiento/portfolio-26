import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const submitHandler = async (e: Event) => {
    e.preventDefault();
    try {
      toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Email" }), 1500)
          ),

        {
          loading: "Loading...",
          success: (data) => `${data.name} has been created`,
          error: "Error",
        }
      );
    } catch (error) {
      toast.error(`Email unable to send, ${error}`);
    }
  };
  return (
    <section className="w-full max-w-md">
      <h1>Contact Me</h1>
      <form onSubmit={() => submitHandler}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Email</FieldLegend>
            <FieldDescription>
              Send me an email and I will be in contact soon!
            </FieldDescription>
            <FieldSeparator />
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="email" placeholder="Enter your email" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="john@email.com" required />
                <FieldSeparator />
                <Field>
                  <FieldLabel htmlFor="subject">Subject</FieldLabel>
                  <Input id="subject" placeholder="Enter subject" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="body">Body</FieldLabel>
                  {/* <Input id="body" placeholder="Enter body" /> */}
                  <Textarea id="body" placeholder="Enter body" required />
                </Field>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
      {/* Form Here */}
      <Button onClick={() => submitHandler}>Click Me</Button>
    </section>
  );
};
export default Contact;
