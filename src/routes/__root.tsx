import { Container } from "@/shared/components/ui/container";
import { Header } from "@/widgets/header";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Container>
        <Header />
      </Container>
      <div className="bg-background-navbar">
        <Container>Navbar</Container>
      </div>
      <Container className="mt-[660px]">
        <Outlet />
      </Container>
      <div className="bg-background-footer">
        <Container>Footer</Container>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
