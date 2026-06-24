export default function Page() {
  if (typeof window !== 'undefined') window.location.replace('/sms-terms.html');
  return <p>Loading...</p>;
}
export const metadata = { title: 'SMS Terms — BizzyCube' };
