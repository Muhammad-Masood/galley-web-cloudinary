import { ThemeChanger } from "./ThemeChanger";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <p className="text-3xl font-bold">Photon</p>
      <div className="flex gap-x-6">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ThemeChanger />
      </div>
    </div>
  );
};
