import DetailContent from "../../components/DetailContent";
import { getDogBreed } from "../../dogapi";

export default async function DetailView({ searchParams }) {
  const { id } = await searchParams;
  let dog = null;
  if (id) {
    try {
      dog = await getDogBreed(id);
    } catch (error) {
      console.error("Could not load breed:", error);
    }
  }
  return <DetailContent dog={dog} />;
}
