import ServiceDetailPage, { generateMetadata as getMeta } from "../services/[slug]/page";

const SLUG = "car-transport";

export async function generateMetadata() {
  return getMeta({ params: Promise.resolve({ slug: SLUG }) });
}

export default function Page() {
  return <ServiceDetailPage params={Promise.resolve({ slug: SLUG })} />;
}

