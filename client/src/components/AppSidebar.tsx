import { Home, Grid3x3, Zap, ArrowRight } from "lucide-react";
import { SiDiscord, SiX, SiInstagram } from "react-icons/si";
import { Link, useLocation } from "wouter";

export default function AppSidebar() {
  const [location] = useLocation();

  const menuItems = [
    { icon: Zap, label: "Staking", path: "/staking" },
    { icon: Grid3x3, label: "Collection", path: "/collection" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-36 bg-sidebar border-r border-sidebar-border h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded" />
          <span className="text-lg font-bold uppercase tracking-wider">BitKings</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;

          return (
            <Link key={item.path} href={item.path}>
              <a
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-sidebar-foreground hover-elevate"
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm uppercase tracking-wide">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 space-y-4 border-t border-sidebar-border">
        <button
          className="flex items-center gap-2 w-full px-4 py-2 text-xs uppercase tracking-wider font-bold hover-elevate rounded-md transition-all"
          data-testid="button-go-to-main-site"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Go to Main Site</span>
        </button>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
            data-testid="link-discord"
          >
            <SiDiscord className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
            data-testid="link-twitter"
          >
            <SiX className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
            data-testid="link-instagram"
          >
            <SiInstagram className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-muted-foreground text-center space-y-1">
          <p>© 2025 BitKings</p>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </aside>
  );
}
