import { useState } from "react";
import NFTCard from "@/components/NFTCard";
import FilterPanel from "@/components/FilterPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "@/components/MobileMenu";
import kingImage from "@assets/desktop-home_1762269363935.png";

//todo: remove mock functionality
const mockNFTs = Array(8).fill(null).map((_, i) => ({
  id: "1.25X",
  name: "BitKings",
  rarity: (["LEGENDARY", "MYTHICAL", "RARE", "COMMON"] as const)[i % 4],
  image: kingImage,
}));

export default function Collection() {
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [walletAddress] = useState("0X1632...6678");

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4">
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setShowMobileMenu(true)}
              className="text-foreground"
              data-testid="button-mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded" />
              <span className="text-lg font-bold uppercase tracking-wider">BitKings</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-card border border-primary rounded-md shadow-glow-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm font-bold">{walletAddress}</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="px-4 lg:px-8 py-4 border-t border-border flex items-center gap-4">
          <Button
            variant="secondary"
            onClick={() => setShowFilters(!showFilters)}
            className="uppercase font-bold"
            data-testid="button-filter"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 uppercase"
              data-testid="input-search"
            />
          </div>

          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <span className="text-sm text-muted-foreground uppercase">1000 BitKings</span>
            <Button
              variant="secondary"
              className="uppercase font-bold"
              data-testid="button-sort"
            >
              ID Low to High
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button
              className="uppercase font-bold shadow-glow"
              data-testid="button-show-my-kings"
            >
              Show My Kings
            </Button>
          </div>
        </div>

        {/* Mobile sorting */}
        <div className="lg:hidden px-4 pb-4 flex items-center gap-4">
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 uppercase font-bold text-xs"
            data-testid="button-sort-mobile"
          >
            ID Low to High
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="sm"
            className="flex-1 uppercase font-bold text-xs shadow-glow"
            data-testid="button-show-my-kings-mobile"
          >
            Show My Kings
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Desktop Filter Sidebar */}
        <AnimatePresence>
          {showFilters && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="hidden lg:block border-r border-border overflow-hidden"
            >
              <div className="w-80 p-6">
                <FilterPanel />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* NFT Grid */}
        <main className="flex-1 px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockNFTs.map((nft, index) => (
              <NFTCard
                key={index}
                {...nft}
                showViewerButton
              />
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowFilters(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 max-h-[80vh] bg-card rounded-t-lg overflow-hidden"
              data-testid="modal-filter-mobile"
            >
              <FilterPanel
                onClose={() => setShowFilters(false)}
                onApply={(filters) => {
                  console.log("Applied:", filters);
                  setShowFilters(false);
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <MobileMenu isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </div>
  );
}
