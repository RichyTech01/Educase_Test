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
      <div className="h-[812px]">
        <header className="bg-white [box-shadow:0px_3px_6px_#00000007]">
          <NavigationMenu>
            <NavigationMenuList className="px-[15px] pt-[27px] pb-[19px]">
              <NavigationMenuItem>
                <h1 className="text-base">Account Settings</h1>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        <div>
          <Card className="bg-[#f7f8f9] shadow-none rounded-none border-0 border-b border-[#d2d2d2] border-dashed p-[20px]">
            <div className="flex justify-start items-start gap-[20px] mb-[30px]">
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

            <p className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              deleniti quaerat recusandae mollitia optio! Quasi dolore at, ut
              fugiat temporibus, deleniti dignissimos esse porro voluptas quod
              nulla non officiis officia.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
