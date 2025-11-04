import { useState } from "react";
import NFTCard from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { Image, Zap, DollarSign, TrendingUp, Menu } from "lucide-react";
import ConfigureStakingModal from "@/components/ConfigureStakingModal";
import ClaimRewardsModal from "@/components/ClaimRewardsModal";
import MobileMenu from "@/components/MobileMenu";
import kingImage from "@assets/desktop-home_1762269363935.png";

//todo: remove mock functionality
const mockNFTs = [
  { id: "#21.045", name: "BitKings", rarity: "LEGENDARY" as const, image: kingImage },
  { id: "#21.045", name: "BitKings", rarity: "MYTHICAL" as const, image: kingImage },
  { id: "#21.045", name: "BitKings", rarity: "RARE" as const, image: kingImage },
  { id: "#21.045", name: "BitKings", rarity: "COMMON" as const, image: kingImage },
  { id: "#21.045", name: "BitKings", rarity: "LEGENDARY" as const, image: kingImage },
  { id: "#21.045", name: "BitKings", rarity: "MYTHICAL" as const, image: kingImage },
  { id: "#21.045", name: "BitKings", rarity: "RARE" as const, image: kingImage },
  { id: "#21.045", name: "BitKings", rarity: "COMMON" as const, image: kingImage },
];

export default function Staking() {
  const [selectedNFTs, setSelectedNFTs] = useState<Set<number>>(new Set([0, 1, 2]));
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [walletAddress] = useState("0X1632...6678");

  const toggleNFT = (index: number) => {
    const newSelected = new Set(selectedNFTs);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedNFTs(newSelected);
  };

  const selectAll = () => {
    setSelectedNFTs(new Set(mockNFTs.map((_, i) => i)));
  };

  const deselectAll = () => {
    setSelectedNFTs(new Set());
  };

  const stats = [
    { icon: Image, label: "NFTs Staked", value: "8 NFT" },
    { icon: Zap, label: "Total Power", value: "975" },
    { icon: DollarSign, label: "Last Month", value: "$427.43" },
    { icon: TrendingUp, label: "Lifetime Earned", value: "$7,942.13" },
  ];

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

          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-primary rounded-md shadow-glow-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-sm font-bold">{walletAddress}</span>
            </div>

            <Button
              onClick={() => setShowClaimModal(true)}
              className="shadow-glow hidden lg:flex"
              data-testid="button-claim"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="font-bold">$1,297.62</span>
              <span className="ml-2 text-xs uppercase">Claim</span>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hidden lg:grid grid-cols-4 gap-4 px-8 py-4 border-t border-border">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase">{stat.label}</p>
                  <p className="text-lg font-bold font-mono">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Claim Button */}
        <div className="lg:hidden px-4 py-3 border-t border-border">
          <Button
            onClick={() => setShowClaimModal(true)}
            className="w-full shadow-glow flex items-center justify-center gap-3"
            data-testid="button-claim-mobile"
          >
            <TrendingUp className="w-5 h-5" />
            <div className="flex items-center gap-3">
              <span className="text-xs text-primary-foreground/80 uppercase">Claimable</span>
              <span className="font-bold text-lg">$1,297.62</span>
            </div>
            <span className="ml-2 text-sm uppercase font-bold">Claim</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 lg:px-8 py-8">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-muted-foreground">
            <span className="font-bold">{selectedNFTs.size}</span> NFT
            {selectedNFTs.size !== 1 ? "s" : ""} selected
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={selectAll}
              className="uppercase font-bold text-xs"
              data-testid="button-select-all"
            >
              Select All
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={deselectAll}
              className="uppercase font-bold text-xs"
              data-testid="button-deselect-all"
            >
              Deselect All
            </Button>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockNFTs.map((nft, index) => (
            <NFTCard
              key={index}
              {...nft}
              selected={selectedNFTs.has(index)}
              staked={index < 3}
              onSelect={() => toggleNFT(index)}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 max-w-xl mx-auto">
          <Button
            variant="secondary"
            className="flex-1 uppercase font-bold"
            data-testid="button-unstake"
          >
            Unstake
          </Button>
          <Button
            onClick={() => setShowConfigModal(true)}
            disabled={selectedNFTs.size === 0}
            className="flex-1 uppercase font-bold shadow-glow"
            data-testid="button-configure-stake"
          >
            Configure and Stake
          </Button>
        </div>
      </main>

      {/* Modals */}
      <ConfigureStakingModal
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
        onConfirm={(mult, period) => console.log("Staked:", mult, period)}
      />
      <ClaimRewardsModal
        isOpen={showClaimModal}
        onClose={() => setShowClaimModal(false)}
        onClaim={() => console.log("Claimed")}
      />
      <MobileMenu isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </div>
  );
}
