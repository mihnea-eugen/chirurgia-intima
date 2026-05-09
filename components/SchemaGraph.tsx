import { buildGraph } from "@/lib/schema";

export default function SchemaGraph({ items }: { items: any[] }) {
  const graph = buildGraph(items);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
