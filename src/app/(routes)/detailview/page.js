import DetailContent from "../../components/DetailContent";
import { getDogBreeds } from "../../dogapi";

export default async function DetailView({ searchParams }) {
  const { id } = await searchParams;
  const breeds = await getDogBreeds();
  const dog = breeds.find((breed) => String(breed.id) === String(id)) || null;
  return <DetailContent dog={dog} />;
}
