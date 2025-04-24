import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export default function Settings() {
  return (
    <>
      <div className="h-[812px] border  mt-4 bg-[#F7F8F9]">
        <header className="bg-white [box-shadow:0px_3px_6px_#00000007] h-[68px]">
          <NavigationMenu>
            <NavigationMenuList className="px-[15px] ">
              <NavigationMenuItem>
                <h1 className="text-[18px] text-[#1D2226] flex justify-center mt-5 ">Account Settings</h1>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        <div className=" flex-grow ">
          <Card className="bg-[#f7f8f9] shadow-none rounded-none border-0 border-b border-[#CBCBCB] border-dashed p-[20px]">
            <div className="flex justify-start items-start gap-[20px] ">
              <div className="relative">
                <Avatar className="w-[76px] h-[76px]">
                  <AvatarImage
                    src="/account.png"
                    className="w-[76px] aspect-square"
                  />
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <div className="absolute z-10 bottom-0 right-0">
                  <Avatar className="w-[21px] h-[23px]">
                    <AvatarImage src="/camera.svg" />
                  </Avatar>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[15px] text-[#1D2226] font-bold">
                  Marry Doe
                </h1>
                <h1 className="text-[15px] text-[#1D2226]">
                  Marry@Gmail.com
                </h1>
              </div>
            </div>

            <p className="text-[14px] text-[#1D2226] mt-[10px]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
