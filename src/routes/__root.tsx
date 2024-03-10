import { BaseLayout } from "@/widgets/layout";
import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <BaseLayout />
      <TanStackRouterDevtools />
    </>
  ),
});
