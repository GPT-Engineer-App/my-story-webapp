import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Briefcase, Info, User, Share2 } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import WhatIDo from "./pages/WhatIDo.jsx";
import SocialNetworks from "./pages/SocialNetworks.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "What I Do",
    to: "/what-i-do",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Social Networks",
    to: "/social-networks",
    icon: <Share2 className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="what-i-do" element={<WhatIDo />} />
              <Route path="social-networks" element={<SocialNetworks />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;