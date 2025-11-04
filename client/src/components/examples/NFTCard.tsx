import NFTCard from "../NFTCard";
import kingImage from "@assets/desktop-home_1762269363935.png";

export default function NFTCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-background">
      <NFTCard
        id="1.25X"
        image={kingImage}
        name="BitKings"
        rarity="LEGENDARY"
        showViewerButton
      />
      <NFTCard
        id="1.25X"
        image={kingImage}
        name="BitKings"
        rarity="MYTHICAL"
        selected
      />
      <NFTCard
        id="1.25X"
        image={kingImage}
        name="BitKings"
        rarity="RARE"
      />
      <NFTCard
        id="1.25X"
        image={kingImage}
        name="BitKings"
        rarity="COMMON"
        staked
      />
    </div>
  );
}
