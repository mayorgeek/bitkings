import { motion, AnimatePresence } from "framer-motion";
import { X, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (address: string) => void;
}

export default function WalletConnectModal({
  isOpen,
  onClose,
  onConnect,
}: WalletConnectModalProps) {
  const [step, setStep] = useState<"initial" | "providers">("initial");

  const handleConnect = () => {
    setStep("providers");
  };

  const handleWalletSelect = () => {
    // Mock wallet connection
    onConnect("0X1632...6678");
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
            data-testid="backdrop-wallet-modal"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="bg-card border-2 border-primary rounded-md shadow-glow-lg max-w-md w-full pointer-events-auto"
              data-testid="modal-wallet-connect"
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border">
                <h2 className="text-xl font-bold uppercase tracking-wider text-center">
                  Connect Your Digital Wallet
                </h2>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              </div>

              {/* Content */}
              <div className="p-6">
                {step === "initial" ? (
                  <div className="space-y-6 text-center">
                    <p className="text-primary text-sm uppercase tracking-wide">
                      Connect your wallet to stake your kings and<br />
                      begin earning rewards.
                    </p>

                    <Button
                      onClick={handleConnect}
                      className="w-full shadow-glow"
                      data-testid="button-connect-wallet"
                    >
                      <Wallet className="w-5 h-5 mr-2" />
                      Connect Wallet
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={handleWalletSelect}
                        className="flex flex-col items-center gap-3 p-6 bg-secondary rounded-md border border-border hover-elevate active-elevate-2 transition-all"
                        data-testid="button-walletconnect"
                      >
                        <Wallet className="w-8 h-8 text-primary" />
                        <span className="text-sm font-bold uppercase">WalletConnect</span>
                      </button>

                      <button
                        onClick={handleWalletSelect}
                        className="flex flex-col items-center gap-3 p-6 bg-secondary rounded-md border border-border hover-elevate active-elevate-2 transition-all"
                        data-testid="button-walletconnect-2"
                      >
                        <Wallet className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase">WalletConnect</span>
                      </button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      By connecting your wallet you agree to our{" "}
                      <a href="#" className="text-foreground underline">
                        terms of service
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>

              {/* Footer decorations */}
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
