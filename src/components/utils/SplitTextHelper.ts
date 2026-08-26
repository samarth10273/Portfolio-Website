export interface SplitTextOptions {
  type?: string;
  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;
}

export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  elements: HTMLElement[] = [];
  private originalHtml: Map<HTMLElement, string> = new Map();

  constructor(target: string | HTMLElement | (string | HTMLElement)[], options?: SplitTextOptions) {
    const opts = options || {};
    const linesClass = opts.linesClass || "split-line";
    const type = opts.type || "chars,lines";

    let rawElements: HTMLElement[] = [];
    if (typeof target === "string") {
      rawElements = Array.from(document.querySelectorAll<HTMLElement>(target));
    } else if (Array.isArray(target)) {
      target.forEach((t) => {
        if (typeof t === "string") {
          rawElements.push(...Array.from(document.querySelectorAll<HTMLElement>(t)));
        } else if (t instanceof HTMLElement) {
          rawElements.push(t);
        }
      });
    } else if (target instanceof HTMLElement) {
      rawElements = [target];
    }

    this.elements = rawElements;

    this.elements.forEach((el) => {
      this.originalHtml.set(el, el.innerHTML);
      const origHtml = el.innerHTML;
      el.innerHTML = "";

      // Split by <br> or <br/> tags to preserve line breaks
      const lineParts = origHtml.split(/<br\s*\/?>/i);

      lineParts.forEach((lineHtml) => {
        const lineWrapper = document.createElement("div");
        lineWrapper.className = linesClass;
        lineWrapper.style.display = "block";
        lineWrapper.style.overflow = "hidden";

        const temp = document.createElement("div");
        temp.innerHTML = lineHtml;
        const text = temp.textContent || "";

        if (type.includes("chars")) {
          // Split by whitespace
          const wordsArr = text.trim().split(/\s+/);
          wordsArr.forEach((w, wIdx) => {
            if (!w) return;
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.style.whiteSpace = "nowrap";

            for (let i = 0; i < w.length; i++) {
              const charSpan = document.createElement("span");
              charSpan.style.display = "inline-block";
              charSpan.textContent = w[i];
              this.chars.push(charSpan);
              wordSpan.appendChild(charSpan);
            }

            this.words.push(wordSpan);
            lineWrapper.appendChild(wordSpan);

            // Add space between words
            if (wIdx < wordsArr.length - 1) {
              const spaceSpan = document.createElement("span");
              spaceSpan.style.display = "inline-block";
              spaceSpan.innerHTML = "&nbsp;";
              lineWrapper.appendChild(spaceSpan);
            }
          });
        } else {
          // Words only
          const wordsArr = text.trim().split(/\s+/);
          wordsArr.forEach((w, wIdx) => {
            if (!w) return;
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.textContent = w;
            this.words.push(wordSpan);
            lineWrapper.appendChild(wordSpan);

            if (wIdx < wordsArr.length - 1) {
              const spaceSpan = document.createElement("span");
              spaceSpan.style.display = "inline-block";
              spaceSpan.innerHTML = "&nbsp;";
              lineWrapper.appendChild(spaceSpan);
            }
          });
        }

        this.lines.push(lineWrapper);
        el.appendChild(lineWrapper);
      });
    });
  }

  revert() {
    this.elements.forEach((el) => {
      const orig = this.originalHtml.get(el);
      if (orig !== undefined) {
        el.innerHTML = orig;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

export default SplitText;
