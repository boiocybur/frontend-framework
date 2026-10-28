import { Suspense } from "react";
import DetailContent from "../../components/DetailContent";

export default function DetailView() {
  return (
    <Suspense fallback={<main className="mx-auto min-h-screen max-w-md bg-white pb-28" />}>
      <DetailContent />
    </Suspense>
  );
}
