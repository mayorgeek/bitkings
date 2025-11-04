import { useState } from "react";
import WalletConnectModal from "../WalletConnectModal";
import { Button } from "@/components/ui/button";

export default function WalletConnectModalExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-background p-8">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <WalletConnectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConnect={(address) => console.log("Connected:", address)}
      />
    </div>
  );
}
