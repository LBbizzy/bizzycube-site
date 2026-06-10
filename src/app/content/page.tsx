import { DEPTS } from "@/lib/departments";
import DepartmentMiniSite from "@/components/DepartmentMiniSite";
const d = DEPTS["content"];
export const metadata = { title: `${d.name} — BizzyCube`, description: d.tagline };
export default function Page(){ return <DepartmentMiniSite d={d} />; }
