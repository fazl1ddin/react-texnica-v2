import { MainCategory } from "@/widgets/maincategory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <MainCategory title="Хиты продаж" />
    </>
  );
}
