import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

type PageProps = {
  params: { id: string };
};

export default async function SnippetEditPage({ params }: PageProps) {
  const { id: paramId } = params;
  const id = parseInt(paramId);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!snippet) {
    notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
