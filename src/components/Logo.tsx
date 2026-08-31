import Image from "next/image";

/* THE REAL LOGO.
 *
 * What was here was a hand-drawn SVG approximation of the brand - a plain
 * hexagon with a green zigzag through it, in colours that were nobody's
 * (#483A84 to #B2D235, with a #B2D235 stroke). The actual logo is a cube
 * in purple and teal with a lime arrow rising through it, and it was
 * sitting on a Desktop unused while the website drew its own version.
 *
 * The MARK only, not the full lock-up. The wordmark is set in text beside
 * it so it stays crisp at any size and can be read by a screen reader,
 * which a flattened image of a wordmark cannot.
 */
export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Image
        src="/bizzycube-mark.png"
        alt=""
        width={size}
        height={size}
        priority
        style={{ display: "block" }}
      />
      <span style={{ fontWeight: 800, fontSize: 18, color: "#fff",
                     letterSpacing: "-0.01em" }}>BizzyCube</span>
    </div>
  );
}
