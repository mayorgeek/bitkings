import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/AppSidebar";
import MobileNav from "@/components/MobileNav";
import Home from "@/pages/Home";
import Staking from "@/pages/Staking";
import Collection from "@/pages/Collection";
import CollectionDetail from "@/pages/CollectionDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/staking" component={Staking} />
      <Route path="/collection" component={Collection} />
      <Route path="/collection/:id" component={CollectionDetail} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex min-h-screen bg-background text-foreground">
          <AppSidebar />
          <div className="flex-1">
            <Router />
          </div>
          <MobileNav />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
