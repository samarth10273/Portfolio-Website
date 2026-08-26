import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

interface NavbarProps {
  currentView?: "home" | "academics";
  onNavigate?: (view: "home" | "academics", section?: string) => void;
}

const Navbar = ({ currentView = "home", onNavigate }: NavbarProps) => {
  useEffect(() => {
    if (!smoother) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.1,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });
    }

    document.body.style.overflowY = "auto";

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = "auto";
    if (smoother) {
      smoother.paused(false);
      smoother.scrollTop(0);
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [currentView]);

  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    const cleanupFns: (() => void)[] = [];

    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      const handleClick = (e: MouseEvent) => {
        const section = element.getAttribute("data-href");
        if (section === "#academics") {
          e.preventDefault();
          if (onNavigate) {
            onNavigate("academics");
          } else {
            window.location.hash = "academics";
          }
          return;
        }

        if (currentView === "academics" && onNavigate) {
          e.preventDefault();
          onNavigate("home", section || undefined);
          return;
        }

        if (window.innerWidth > 1024 && section && smoother) {
          e.preventDefault();
          smoother.paused(false);
          smoother.scrollTo(section, true, "top top");
        }
      };

      element.addEventListener("click", handleClick);
      cleanupFns.push(() => element.removeEventListener("click", handleClick));
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [currentView, onNavigate]);
  return (
    <>
      <div className="header">
        <a
          href="/#"
          className="navbar-title"
          data-cursor="disable"
          onClick={(e) => {
            if (currentView === "academics" && onNavigate) {
              e.preventDefault();
              onNavigate("home");
            }
          }}
        >
          SAMARTH
        </a>
        <a
          href="mailto:samarth.prasad62@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          samarth.prasad62@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#academics" href="#academics">
              <HoverLinks text="ACADEMICS" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
