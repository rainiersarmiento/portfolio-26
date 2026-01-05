import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const buttonHandler = async () => {
    try {
      toast.success("Email submit! I hope to be in contact soon!");
    } catch (err) {
      if (typeof err === "string") {
        toast.error(err);
      }
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
