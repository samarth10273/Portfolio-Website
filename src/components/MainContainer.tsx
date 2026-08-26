import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Academics from "./Academics";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [currentView, setCurrentView] = useState<"home" | "academics">("home");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.toLowerCase().includes("academic")) {
        setCurrentView("academics");
      } else {
        setCurrentView("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  const handleNavigate = (view: "home" | "academics", section?: string) => {
    setCurrentView(view);
    if (view === "academics") {
      window.location.hash = "academics";
    } else {
      if (section) {
        window.location.hash = section.replace("#", "");
      } else {
        window.location.hash = "";
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      ScrollSmoother.refresh(true);
    });
  };

  return (
    <div className="container-main">
      <Cursor />
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <SocialIcons />
      {isDesktopView && (
        <div className={currentView === "academics" ? "character-hidden" : ""}>
          {children}
        </div>
      )}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <div
              style={{
                display: currentView === "home" ? "block" : "none",
              }}
            >
              <Landing>{!isDesktopView && children}</Landing>
              <About />
              <WhatIDo />
              <Career />
              <Work />
              {isDesktopView && (
                <Suspense fallback={<div>Loading....</div>}>
                  <TechStack />
                </Suspense>
              )}
              <Contact />
            </div>

            <div
              style={{
                display: currentView === "academics" ? "block" : "none",
              }}
            >
              <Academics onBack={() => handleNavigate("home")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
