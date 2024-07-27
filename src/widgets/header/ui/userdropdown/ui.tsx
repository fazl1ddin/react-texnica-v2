import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/shared/components/ui/menubar";
import { MenubarMenu } from "@/shared/components/ui/menubar";
import { useAuthContext } from "../../model";

const UserIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M10.0005 0C8.06102 0.00368503 6.16442 0.571311 4.54177 1.63374C2.91911 2.69617 1.64043 4.20754 0.861478 5.98377C0.0825237 7.76 -0.163087 9.72442 0.154563 11.6378C0.472214 13.5511 1.33941 15.3308 2.65054 16.76C3.58696 17.775 4.72348 18.5851 5.98847 19.1392C7.25347 19.6933 8.61952 19.9793 10.0005 19.9793C11.3816 19.9793 12.7476 19.6933 14.0126 19.1392C15.2776 18.5851 16.4141 17.775 17.3505 16.76C18.6617 15.3308 19.5289 13.5511 19.8465 11.6378C20.1642 9.72442 19.9186 7.76 19.1396 5.98377C18.3606 4.20754 17.082 2.69617 15.4593 1.63374C13.8367 0.571311 11.9401 0.00368503 10.0005 0ZM10.0005 18C7.929 17.9969 5.93945 17.1903 4.45054 15.75C4.90258 14.6495 5.67157 13.7083 6.65979 13.0459C7.64801 12.3835 8.81085 12.0298 10.0005 12.0298C11.1902 12.0298 12.3531 12.3835 13.3413 13.0459C14.3295 13.7083 15.0985 14.6495 15.5505 15.75C14.0616 17.1903 12.0721 17.9969 10.0005 18ZM8.00054 8C8.00054 7.60444 8.11784 7.21776 8.3376 6.88886C8.55736 6.55996 8.86972 6.30362 9.23517 6.15224C9.60062 6.00087 10.0028 5.96126 10.3907 6.03843C10.7787 6.1156 11.135 6.30608 11.4148 6.58579C11.6945 6.86549 11.8849 7.22186 11.9621 7.60982C12.0393 7.99778 11.9997 8.39991 11.8483 8.76537C11.6969 9.13082 11.4406 9.44318 11.1117 9.66294C10.7828 9.8827 10.3961 10 10.0005 10C9.4701 10 8.9614 9.78929 8.58632 9.41421C8.21125 9.03914 8.00054 8.53043 8.00054 8ZM16.9105 14C16.0171 12.4718 14.6419 11.283 13.0005 10.62C13.5097 10.0427 13.8415 9.33066 13.956 8.56944C14.0705 7.80822 13.963 7.03011 13.6463 6.3285C13.3296 5.62688 12.8171 5.03156 12.1704 4.61397C11.5238 4.19637 10.7703 3.97425 10.0005 3.97425C9.23075 3.97425 8.47731 4.19637 7.83063 4.61397C7.18395 5.03156 6.67151 5.62688 6.35479 6.3285C6.03807 7.03011 5.93052 7.80822 6.04507 8.56944C6.15961 9.33066 6.49137 10.0427 7.00054 10.62C5.35914 11.283 3.98401 12.4718 3.09054 14C2.37848 12.7871 2.00226 11.4065 2.00054 10C2.00054 7.87827 2.84339 5.84344 4.34368 4.34315C5.84397 2.84285 7.87881 2 10.0005 2C12.1223 2 14.1571 2.84285 15.6574 4.34315C17.1577 5.84344 18.0005 7.87827 18.0005 10C17.9988 11.4065 17.6226 12.7871 16.9105 14Z"
        fill="#2A5275"
      />
    </svg>
  );
};

const UserDropDown = () => {
  const { setAuth } = useAuthContext();

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="w-[98px] justify-end">
            <div className="w-6 h-6 flex items-center">
              <UserIcon />
            </div>
          </MenubarTrigger>
          <MenubarContent
            sideOffset={22}
            align="end"
            className="w-[280px] text-start"
          >
            <MenubarItem>Общие сведения</MenubarItem>
            <MenubarItem>Личные данные</MenubarItem>
            <MenubarItem>История покупок</MenubarItem>
            <MenubarItem>Избранное</MenubarItem>
            <MenubarItem>Сменить пароль</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-exit" onClick={() => setAuth(null)}>
              Выйти
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export { UserDropDown };
