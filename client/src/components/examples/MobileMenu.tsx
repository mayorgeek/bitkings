import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { Button } from "@/components/ui/button";

export default function MobileMenuExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background p-8">
      <Button onClick={() => setIsOpen(true)}>Open Menu</Button>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
