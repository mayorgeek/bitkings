import { useState } from "react";
import NFTCard from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import WalletConnectModal from "@/components/WalletConnectModal";
import kingImage from "@assets/desktop-home_1762269363935.png";

//todo: remove mock functionality
const mockNFTs = [
  { id: "1.25X", name: "BitKings", rarity: "LEGENDARY" as const, image: kingImage },
  { id: "1.25X", name: "BitKings", rarity: "MYTHICAL" as const, image: kingImage },
  { id: "1.25X", name: "BitKings", rarity: "RARE" as const, image: kingImage },
  { id: "1.25X", name: "BitKings", rarity: "COMMON" as const, image: kingImage },
];

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleConnect = (address: string) => {
    setWalletAddress(address);
    console.log("Wallet connected:", address);
  };

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4">
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded" />
            <span className="text-lg font-bold uppercase tracking-wider">BitKings</span>
          </div>

          {walletAddress ? (
            <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-card border border-primary rounded-md shadow-glow-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-sm font-bold">{walletAddress}</span>
            </div>
          ) : (
            <Button
              onClick={() => setShowWalletModal(true)}
              className="ml-auto shadow-glow"
              data-testid="button-connect-wallet-header"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockNFTs.map((nft, index) => (
            <NFTCard
              key={index}
              {...nft}
              showViewerButton={false}
            />
          ))}
        </div>
      </main>

      {/* Wallet Connect Modal */}
      <WalletConnectModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onConnect={handleConnect}
      />
    </div>
  );
}
