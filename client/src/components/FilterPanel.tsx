import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterCategory {
  name: string;
  options: string[];
}

interface FilterPanelProps {
  onClose?: () => void;
  onApply?: (filters: Record<string, string[]>) => void;
}

const filterCategories: FilterCategory[] = [
  { name: "SPECIAL", options: ["SPECIAL 1", "SPECIAL 2", "SPECIAL 3", "SPECIAL 4"] },
  { name: "CROWN", options: ["CROWN 1", "CROWN 2", "CROWN 3", "CROWN 4"] },
  { name: "VISOR", options: ["VISOR 1", "VISOR 2", "VISOR 3", "VISOR 4"] },
  { name: "ARMOR", options: ["ARMOR 1", "ARMOR 2", "ARMOR 3", "ARMOR 4"] },
  { name: "SHOULDERS", options: ["SHOULDERS 1", "SHOULDERS 2", "SHOULDERS 3", "SHOULDERS 4"] },
  { name: "BACK", options: ["BACK 1", "BACK 2", "BACK 3", "BACK 4"] },
  { name: "BACKGROUND", options: ["BACKGROUND 1", "BACKGROUND 2", "BACKGROUND 3", "BACKGROUND 4"] },
  { name: "TIER", options: ["TIER 1", "TIER 2", "TIER 3"] },
  { name: "EDITION", options: ["EDITION 1", "EDITION 2", "EDITION 3"] },
];

export default function FilterPanel({ onClose, onApply }: FilterPanelProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["SPECIAL"]));
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleFilter = (category: string, option: string) => {
    const current = selectedFilters[category] || [];
    const newFilters = { ...selectedFilters };

    if (current.includes(option)) {
      newFilters[category] = current.filter((o) => o !== option);
      if (newFilters[category].length === 0) {
        delete newFilters[category];
      }
    } else {
      newFilters[category] = [...current, option];
    }

    setSelectedFilters(newFilters);
  };

  const clearAll = () => {
    setSelectedFilters({});
  };

  return (
    <div className="bg-card border border-border rounded-md" data-testid="panel-filters">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wider">Filter</h3>
        <button
          onClick={clearAll}
          className="text-xs text-primary hover:text-primary/80 uppercase font-bold"
          data-testid="button-clear-all"
        >
          Clear All
        </button>
      </div>

      {/* Filter categories */}
      <div className="max-h-[600px] overflow-y-auto">
        {filterCategories.map((category) => {
          const isExpanded = expandedCategories.has(category.name);

          return (
            <div key={category.name} className="border-b border-border last:border-b-0">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full px-4 py-3 flex items-center justify-between hover-elevate transition-all"
                data-testid={`button-filter-category-${category.name.toLowerCase()}`}
              >
                <span className="text-sm font-bold uppercase tracking-wide">{category.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {isExpanded && (
                <div className="px-4 pb-3 space-y-2">
                  {category.options.map((option) => {
                    const isSelected = selectedFilters[category.name]?.includes(option);

                    return (
                      <label
                        key={option}
                        className="flex items-center gap-3 cursor-pointer hover-elevate p-2 rounded transition-all"
                        data-testid={`checkbox-${option.toLowerCase().replace(" ", "-")}`}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleFilter(category.name, option)}
                        />
                        <span className="text-sm uppercase tracking-wide">{option}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {onApply && (
        <div className="p-4 border-t border-border">
          <Button
            onClick={() => onApply(selectedFilters)}
            className="w-full uppercase font-bold shadow-glow"
            data-testid="button-apply-filter"
          >
            Apply Filter
          </Button>
        </div>
      )}
    </div>
  );
}
