import { Link, useSearchParams } from "react-router-dom";
import { Download } from "lucide-react";
import SiteHeader from "../components/SiteHeader";

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function PdfViewer() {
  const [searchParams] = useSearchParams();
  const src = searchParams.get("src");
  const title = searchParams.get("title") || "Document";

  if (!src) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
        <section className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Document not found</h1>
          <Link to="/" className="mt-6 inline-block underline">
            Back home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-white text-zinc-950">
      <SiteHeader
        subtitle={title}
        links={[{ label: "← Back to portfolio", to: "/" }]}
      />

      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>

          <div className="flex items-center gap-4">
            <a
              href={src}
              download={`${slugify(title)}.pdf`}
              className="flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-500"
            >
              <Download size={16} />
              Download
            </a>

            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-orange-600 underline underline-offset-4"
            >
              Open in new tab
            </a>
          </div>
        </div>

        <div className="flex-1 overflow-hidden rounded-[1.5rem] border border-zinc-200 shadow-sm">
          <iframe
            src={src}
            title={title}
            className="h-[80vh] min-h-[600px] w-full"
          />
        </div>
      </section>
    </main>
  );
}
