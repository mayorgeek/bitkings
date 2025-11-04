import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface NFTCardProps {
  id: string;
  image: string;
  name: string;
  rarity: "LEGENDARY" | "MYTHICAL" | "RARE" | "COMMON";
  selected?: boolean;
  staked?: boolean;
  onSelect?: () => void;
  onClick?: () => void;
  showViewerButton?: boolean;
}

const rarityColors = {
  LEGENDARY: "bg-yellow-600 text-yellow-100",
  MYTHICAL: "bg-purple-600 text-purple-100",
  RARE: "bg-pink-600 text-pink-100",
  COMMON: "bg-cyan-600 text-cyan-100",
};

const rarityBorderColors = {
  LEGENDARY: "border-yellow-500",
  MYTHICAL: "border-purple-500",
  RARE: "border-pink-500",
  COMMON: "border-cyan-500",
};

export default function NFTCard({
  id,
  image,
  name,
  rarity,
  selected = false,
  staked = false,
  onSelect,
  onClick,
  showViewerButton = false,
}: NFTCardProps) {
  const borderColor = selected
    ? "border-primary shadow-glow"
    : staked
    ? rarityBorderColors[rarity]
    : "border-border";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative group"
      data-testid={`card-nft-${id}`}
    >
      <div
        className={`relative bg-card rounded-md border-2 ${borderColor} overflow-hidden transition-all duration-200 cursor-pointer`}
        onClick={onClick}
      >
        {selected && (
          <div className="absolute top-2 right-2 z-10 bg-primary rounded-full p-1">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}

        <div className="aspect-square bg-black relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/50" />
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {name}
            </p>
            <p className="text-sm font-bold font-mono">{id}</p>
          </div>

          <Badge className={`${rarityColors[rarity]} text-xs uppercase font-bold`}>
            {rarity}
          </Badge>

          {showViewerButton && (
            <Button
              variant="secondary"
              className="w-full uppercase text-xs font-bold tracking-wider"
              data-testid={`button-open-viewer-${id}`}
            >
              Open Viewer
            </Button>
          )}
        </div>

        {onSelect && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="absolute inset-0 w-full h-full"
            data-testid={`button-select-${id}`}
          />
        )}
      </div>
    </motion.div>
  );
}
