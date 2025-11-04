import { Home, Grid3x3, Zap } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function MobileNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Zap, label: "Staking", path: "/staking" },
    { icon: Grid3x3, label: "Collection", path: "/collection" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-card-border z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;

          return (
            <Link key={item.path} href={item.path}>
              <a
                className={`flex flex-col items-center gap-1 px-6 py-3 transition-all ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-wide">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
