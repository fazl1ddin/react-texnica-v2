import { Contacts } from "./contacts";
import { Logo } from "./logo";
import { Toolbar } from "./toolbar";

const Header = () => {
  return (
    <div className="py-[10px] flex">
      <Logo />
      <Contacts />
      <Toolbar />
    </div>
  );
};

export { Header };
