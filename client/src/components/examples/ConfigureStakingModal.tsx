import { useState } from "react";
import ConfigureStakingModal from "../ConfigureStakingModal";
import { Button } from "@/components/ui/button";

export default function ConfigureStakingModalExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-background p-8">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ConfigureStakingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={(mult, period) => console.log("Staked:", mult, period)}
      />
    </div>
  );
}
