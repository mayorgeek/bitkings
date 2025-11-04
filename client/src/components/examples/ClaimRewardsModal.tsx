import { useState } from "react";
import ClaimRewardsModal from "../ClaimRewardsModal";
import { Button } from "@/components/ui/button";

export default function ClaimRewardsModalExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-background p-8">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ClaimRewardsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onClaim={() => console.log("Claimed rewards")}
      />
    </div>
  );
}
