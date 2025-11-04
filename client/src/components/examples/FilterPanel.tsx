import FilterPanel from "../FilterPanel";

export default function FilterPanelExample() {
  return (
    <div className="bg-background p-8">
      <div className="max-w-sm">
        <FilterPanel
          onApply={(filters) => console.log("Applied filters:", filters)}
        />
      </div>
    </div>
  );
}
