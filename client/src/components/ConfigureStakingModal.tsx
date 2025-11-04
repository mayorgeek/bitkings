import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ConfigureStakingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (multiplier: number, lockPeriod: string) => void;
}

const lockOptions = [
  { label: "No Lock", value: "NO LOCK", multiplier: 1.0, duration: "NO LOCK" },
  { label: "3 Mon", value: "3 MON", multiplier: 1.1, duration: "3 MON" },
  { label: "6 Mon", value: "6 MON", multiplier: 1.2, duration: "6 MON", featured: true },
  { label: "12 Mon", value: "12 MON", multiplier: 1.36, duration: "12 MON" },
];

export default function ConfigureStakingModal({
  isOpen,
  onClose,
  onConfirm,
}: ConfigureStakingModalProps) {
  const [selectedOption, setSelectedOption] = useState(2);

  const handleConfirm = () => {
    const option = lockOptions[selectedOption];
    onConfirm(option.multiplier, option.value);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="bg-card border-2 border-primary rounded-md shadow-glow-lg max-w-lg w-full pointer-events-auto"
              data-testid="modal-configure-staking"
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border">
                <h2 className="text-xl font-bold uppercase tracking-wider text-center">
                  Configure Staking
                </h2>
                <p className="text-xs text-muted-foreground text-center mt-2 uppercase tracking-wide">
                  Choose your time-lock period for bonus rewards
                </p>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Duration selector */}
                <div>
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded">
                      Duration
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {lockOptions.map((option, index) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedOption(index)}
                        className={`relative p-4 rounded-md border-2 transition-all ${
                          selectedOption === index
                            ? "border-primary bg-primary/10 shadow-glow"
                            : "border-border bg-secondary hover-elevate"
                        }`}
                        data-testid={`button-lock-${option.value.toLowerCase().replace(" ", "-")}`}
                      >
                        <div className="text-center space-y-1">
                          <p className="text-xs text-muted-foreground uppercase">{option.label}</p>
                          <p className="text-lg font-bold">{option.multiplier}X</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase">NFTs to stake</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-xs text-muted-foreground uppercase">Base power</p>
                    <p className="text-2xl font-bold">1.50X</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase">Lock period</p>
                    <p className="text-lg font-bold">{lockOptions[selectedOption].duration}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-xs text-muted-foreground uppercase">Lock bonus</p>
                    <p className="text-lg font-bold">{lockOptions[selectedOption].multiplier}X</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground uppercase">Total Power Weight</span>
                    <span className="text-2xl font-bold text-primary">1.50X</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 flex gap-3">
                <Button
                  variant="secondary"
                  onClick={onClose}
                  className="flex-1 uppercase font-bold"
                  data-testid="button-cancel"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirm}
                  className="flex-1 uppercase font-bold shadow-glow"
                  data-testid="button-confirm-stake"
                >
                  Confirm and Stake
                </Button>
              </div>

              <div className="relative">
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
