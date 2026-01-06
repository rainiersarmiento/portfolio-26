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
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

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
    <section>
      <h1>Contact Me</h1>
      <Card className="">
        <CardHeader>
          <CardTitle>Send me an Email!</CardTitle>
          <CardDescription>Contact Info</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form-email-input" onSubmit={() => submitHandler}></form>
        </CardContent>
      </Card>
      {/* Form Here */}
      <Button onClick={() => submitHandler}>Click Me</Button>
    </section>
  );
};
export default Contact;
