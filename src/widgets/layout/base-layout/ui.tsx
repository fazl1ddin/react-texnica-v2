import { Container } from "@/components/ui/container";
import { Header } from "@/widgets/header";
import { Outlet } from "@tanstack/react-router";

const BaseLayout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="bg-background-navbar">
        <Container>Navbar</Container>
      </div>
      <Container>
        <Outlet />
      </Container>
      <div className="bg-background-footer">
        <Container>Footer</Container>
      </div>
    </>
  );
};

export { BaseLayout };
