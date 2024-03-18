import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Ui = () => {
  return (
    <div>
      <Button variant="destructive" onClick={() => toast("this is toast")}>
        Click me
      </Button>
    </div>
  );
};
export default Ui;
