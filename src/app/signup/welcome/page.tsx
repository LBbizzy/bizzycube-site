import { redirect } from "next/navigation";

/* DEAD PAGE, KEPT AS A REDIRECT.
 *
 * This was the landing spot after a Stripe checkout that the signup page
 * no longer starts — the old stack's /public/signup answers 401, so the
 * checkout never happened and nobody has ever arrived here. What it said
 * when they did was worse than nothing: "Your BizzyCube workforce is live
 * — login with the password you set" and three links to lmbhub.com, a
 * product this business is moving off.
 *
 * Anyone who still has the URL goes to the signup page instead.
 */
export default function Page() {
  redirect("/signup");
}
