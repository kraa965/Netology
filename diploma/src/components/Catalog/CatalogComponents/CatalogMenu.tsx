import { useAppSelector } from "../../../models/hook";
import Loader from "../../Loader";
import ErrorInfo from "../../ErrorInfo";
import CatalogMenuItem from "./CatalogMenuItem";

export default function CatalogMenu() {
  const categories = useAppSelector((state) => state.categories);
  const isLoading = useAppSelector((state) => state.loading.categories);
  const isError = useAppSelector((state) => state.error.categories);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorInfo errorInfo={isError} />;
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories.map((category) => (
        <CatalogMenuItem category={category} key={category.id} />
      ))}
    </ul>
  );
}
