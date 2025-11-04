import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { SiDiscord, SiX, SiInstagram } from "react-icons/si";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-sidebar border-l border-sidebar-border z-50 lg:hidden"
            data-testid="menu-mobile"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded" />
                <span className="text-lg font-bold uppercase tracking-wider">BitKings</span>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
                data-testid="button-close-menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 space-y-6">
              <button
                className="flex items-center gap-2 w-full px-4 py-3 text-sm uppercase tracking-wider font-bold bg-primary text-primary-foreground rounded-md shadow-glow"
                data-testid="button-go-to-main-site-mobile"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Go to Main Site</span>
              </button>

              <div>
                <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Social Links
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                    data-testid="link-discord-mobile"
                  >
                    <SiDiscord className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                    data-testid="link-twitter-mobile"
                  >
                    <SiX className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                    data-testid="link-instagram-mobile"
                  >
                    <SiInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-sidebar-border text-xs text-muted-foreground space-y-2">
              <p>© 2025 BitKings</p>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Use
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
