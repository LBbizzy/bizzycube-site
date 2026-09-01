import FunnelPage from "@/components/FunnelPage";
import { BY_SLUG } from "@/lib/funnels";

const f = BY_SLUG["what-did-i-make"];
export const metadata = { title: f.title, description: f.description };
export default function Page() { return <FunnelPage f={f} />; }
