import Image from "next/image";

/* THE REAL LOGO.
 *
 * The mark is the actual brand asset, not a hand-drawn approximation of it.
 * The wordmark is set in live text beside it, so it stays crisp at any size,
 * inherits the page's ink colour in both themes, and can be read aloud by a
 * screen reader — none of which a flattened image of a wordmark can do.
 *
 * The mark is a COLOUR mark (purple, teal, lime). On the near-black header it
 * used to sit on, its purple face measured 2.05:1 — invisible. The fix is not
 * to recolour the brand: it is to give the mark the light ground it was drawn
 * for. `.bz-plate` is transparent on the light theme and becomes a small light
 * tile in the dark one, so the mark is always legible and never redrawn.
 */
export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <span className="bz-brand">
      <span className="bz-plate">
        <Image
          src="/bizzycube-mark.png"
          alt=""
          width={size}
          height={size}
          priority
          style={{ display: "block", width: size, height: "auto" }}
        />
      </span>
      BizzyCube
    </span>
  );
}
