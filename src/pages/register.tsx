import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="h-[812px] relative flex flex-col">
      <header>
        <NavigationMenu>
          <NavigationMenuList className="px-[20px] pt-[40px] pb-[22px]">
            <NavigationMenuItem>
              <div className="flex flex-col">
                <h1 className="text-[28px] font-semibold leading-none">
                  Create your
                </h1>
                <h1 className="text-[28px] font-semibold leading-none">
                  PopX account
                </h1>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <div className="space-y-6 px-[20px] flex-1">
        <div className="relative">
          <Label
            htmlFor="fullName"
            className="absolute left-[12px] -top-[10px] bg-[#f7f8f9] px-1 text-[#6C25FF] text-[13px] font-light flex gap-0"
          >
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[52px] px-3"
            placeholder="Full Name"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="email"
            className="absolute left-[12px] -top-[10px] bg-[#f7f8f9] px-1 text-[#6C25FF] text-[13px] font-light flex gap-0"
          >
            Phone number<span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[52px] px-3"
            placeholder="91-XXXXXXXX"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="fullName"
            className="absolute left-[12px] -top-[10px] bg-[#f7f8f9] px-1 text-[#6C25FF] text-[13px] font-light flex gap-0"
          >
            Email address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[52px] px-3"
            placeholder="email@example.com"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="email"
            className="absolute left-[12px] -top-[10px] bg-[#f7f8f9] px-1 text-[#6C25FF] text-[13px] font-light flex gap-0"
          >
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[52px] px-3"
            placeholder="********"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="fullName"
            className="absolute left-[12px] -top-[10px] bg-[#f7f8f9] px-1 text-[#6C25FF] text-[13px] font-light flex gap-0"
          >
            Company Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[52px] px-3"
            placeholder="Company"
          />
        </div>

        <div className="space-y-2 mt-[22px]">
          <Label className="text-black font-light flex gap-0 text-[14px]">
            Are you an agency? <span className="text-red-500">*</span>
          </Label>
          <RadioGroup defaultValue="no" className="flex gap-6 mt-1">
            {["yes", "no"].map((value) => (
              <div key={value} className="flex items-center space-x-2 relative">
                <RadioGroupItem
                  value={value}
                  id={`agency-${value}`}
                  className="peer appearance w-4 h-4 rounded-full border border-[#CBCBCB] transition-all duration-400 linear 
            data-[state=checked]:border-[#6C25FF] data-[state=checked]:bg-[#6C25FF]"
                />
                <span className="pointer-events-none absolute w-2 h-2 left-[2px] top-[2px] rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform duration-200" />
                <Label
                  htmlFor={`agency-${value}`}
                  className="text-black capitalize text-[14px]"
                >
                  {value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="px-[20px]">
        <Link to="/settings">
          <Button
            type="submit"
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold text-[16px] h-[46px] mt-0 mb-[30px]"
          >
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
}
