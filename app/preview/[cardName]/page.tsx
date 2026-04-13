import PreviewClient from "./preview-client"

export function generateStaticParams() {
  return [
    { cardName: "financial-analytics-dashboard" },
  ]
}

export default function PreviewPage({ params }: { params: Promise<{ cardName: string }> }) {
  return <PreviewClient params={params} />
}
