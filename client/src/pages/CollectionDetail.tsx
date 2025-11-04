import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Share2, Menu } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";
import kingImage from "@assets/desktop-home_1762269363935.png";

export default function CollectionDetail() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [walletAddress] = useState("0X1632...6678");

  const details = [
    { label: "BitKings #1", value: "BitKings" },
    { label: "BitKings #1", value: "BitKings" },
  ];

  const traits = [
    { label: "BitKings Trait", value: "Golden", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowMobileMenu(true)}
              className="lg:hidden text-foreground"
              data-testid="button-mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/collection">
              <a
                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover-elevate transition-all"
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="uppercase font-bold text-xs">Back</span>
              </a>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded" />
              <span className="text-lg font-bold uppercase tracking-wider">BitKings</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-primary rounded-md shadow-glow-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm font-bold">{walletAddress}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* NFT Display */}
            <div className="space-y-6">
              <div className="relative aspect-square bg-black rounded-md border-2 border-primary shadow-glow-lg overflow-hidden">
                <img
                  src={kingImage}
                  alt="BitKings NFT"
                  className="w-full h-full object-cover"
                />

                {/* Glowing platform effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-primary/30 to-transparent blur-xl" />

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary" />
              </div>

              {/* Circular platform animation */}
              <div className="relative h-24 overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full blur-xl animate-pulse" />
                  <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-spin" style={{ animationDuration: "3s" }} />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex gap-2 border-b border-border">
                <button
                  className="px-6 py-3 text-sm font-bold uppercase tracking-wider border-b-2 border-primary text-primary"
                  data-testid="tab-detail"
                >
                  Detail
                </button>
                <button
                  className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="tab-traits"
                >
                  Traits
                </button>
              </div>

              {/* Detail Content */}
              <div className="space-y-3">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary rounded-md border border-border"
                  >
                    <p className="text-xs text-muted-foreground uppercase mb-1">{detail.label}</p>
                    <p className="text-lg font-bold text-primary">{detail.value}</p>
                  </div>
                ))}
              </div>

              {/* Traits Content */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Traits
                </h3>
                {traits.map((trait, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary rounded-md border border-border"
                  >
                    <p className="text-xs text-muted-foreground uppercase mb-1">{trait.label}</p>
                    <p className={`text-lg font-bold ${trait.color}`}>{trait.value}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-6 space-y-3">
                <Button
                  className="w-full shadow-glow uppercase font-bold"
                  data-testid="button-view-opensea"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on OpenSea
                </Button>
                <Button
                  variant="secondary"
                  className="w-full uppercase font-bold"
                  data-testid="button-share"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileMenu isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </div>
  );
}
