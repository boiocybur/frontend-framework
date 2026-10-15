import { Suspense } from "react";
import DetailContent from "../../components/DetailContent";

// Siden kan bygges statisk. Valget af hund via ?id= håndteres i klienten.
export default function DetailView() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-md p-5">Loading breed...</main>}>
      <DetailContent />
    </Suspense>
  );
}
