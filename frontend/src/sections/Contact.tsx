import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const buttonHandler = async () => {
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
      <Button onClick={buttonHandler}>Click Me</Button>
    </section>
  );
};
export default Contact;
