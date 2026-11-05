import ServiceDetailPage, { generateMetadata as getMeta } from "../services/[slug]/page";

const SLUG = "packing-moving";

export async function generateMetadata() {
  return getMeta({ params: Promise.resolve({ slug: SLUG }) });
}

export default function Page() {
  return <ServiceDetailPage params={Promise.resolve({ slug: SLUG })} />;
}

