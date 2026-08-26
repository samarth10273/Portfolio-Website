import { ScrollTrigger } from "gsap/ScrollTrigger";

export class ScrollSmootherController {
  private isPaused = false;

  paused(pause?: boolean): boolean {
    if (pause !== undefined) {
      this.isPaused = pause;
      if (pause) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }
    return this.isPaused;
  }

  scrollTop(val?: number): number {
    if (val !== undefined) {
      window.scrollTo({ top: val, behavior: "instant" as ScrollBehavior });
      return val;
    }
    return window.scrollY || document.documentElement.scrollTop;
  }

  scrollTo(target: string | HTMLElement | number, smooth: boolean = true, position: string = "top top") {
    let topPos = 0;
    if (typeof target === "number") {
      topPos = target;
    } else {
      const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
      if (el) {
        const rect = el.getBoundingClientRect();
        topPos = rect.top + window.scrollY;
        // Apply offset if needed
        if (position && position.includes("top")) {
          topPos -= 20;
        }
      }
    }

    window.scrollTo({
      top: Math.max(0, topPos),
      behavior: smooth ? "smooth" : ("instant" as ScrollBehavior),
    });
  }

  static create(_options?: any) {
    return new ScrollSmootherController();
  }

  static refresh(_deep?: boolean) {
    ScrollTrigger.refresh();
  }
}

export const ScrollSmoother = ScrollSmootherController;
export default ScrollSmootherController;
