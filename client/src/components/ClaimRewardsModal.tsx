import { motion, AnimatePresence } from "framer-motion";
import { X, Image, Zap, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClaimRewardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaim: () => void;
}

export default function ClaimRewardsModal({
  isOpen,
  onClose,
  onClaim,
}: ClaimRewardsModalProps) {
  const stats = [
    { icon: Image, label: "NFTs Staked", value: "8 NFT" },
    { icon: Zap, label: "Total Power", value: "975" },
    { icon: DollarSign, label: "Last Month", value: "$427.43" },
    { icon: TrendingUp, label: "Avg / NFT", value: "$53.43" },
  ];

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
              className="bg-card border-2 border-primary rounded-md shadow-glow-lg max-w-xl w-full pointer-events-auto"
              data-testid="modal-claim-rewards"
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border">
                <h2 className="text-xl font-bold uppercase tracking-wider text-center">
                  Claim Rewards
                </h2>
                <p className="text-xs text-muted-foreground text-center mt-2 uppercase tracking-wide">
                  Review your earnings and confirm withdrawal
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
                {/* Total rewards */}
                <div className="text-center p-6 bg-secondary rounded-md border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Total Unclaimed Rewards
                  </p>
                  <p className="text-4xl font-bold text-primary mb-1">$1,297.62</p>
                  <p className="text-xs text-muted-foreground uppercase">
                    From 8 Staked NFTs
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="bg-secondary rounded-md p-4 border border-border text-center space-y-2"
                      >
                        <Icon className="w-6 h-6 mx-auto text-muted-foreground" />
                        <p className="text-xs text-muted-foreground uppercase">{stat.label}</p>
                        <p className="text-lg font-bold font-mono">{stat.value}</p>
                      </div>
                    );
                  })}
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
                  onClick={() => {
                    onClaim();
                    onClose();
                  }}
                  className="flex-1 uppercase font-bold shadow-glow"
                  data-testid="button-confirm-claim"
                >
                  Confirm Claim
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
