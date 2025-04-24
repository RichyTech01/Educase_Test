
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

export default function Register() {
  const [value, setValue] = useState('yes')

  const handleToggle = (name: string) => { 
    setValue(name)
  }

  return (
    <div className="h-[812px] relative flex flex-col bg-[#F7F8F9] border mt-4">
      <header>
        <NavigationMenu>
          <NavigationMenuList className="px-[20px] pt-[40px] pb-[17px]">
            <NavigationMenuItem>
              <div className="flex flex-col max-w-[198px]">
                <h1 className="text-[28px] text-[#1D2226] font-semibold ">
                  Create your  PopX account
                </h1>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <div className=" px-[20px] flex-1">
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
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[40px] px-3"
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
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[40px] px-3"
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
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[40px] px-3"
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
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[40px] px-3"
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
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[40px] px-3"
            placeholder="Company"
          />
        </div>

        <div className="space-y-2 mt-[22px]">
          <Label className="text-black font-light flex gap-0 text-[14px]">
            Are you an agency? <span className="text-red-500">*</span>
          </Label>
         
        <div className="flex items-center gap-6"> 
          <div className="flex items-center gap-2 " onClick={() =>handleToggle('yes')}>
            <div className={`${value === 'yes'? "border-[#642AF5] ":"border-[#919191]"} h-[22px] w-[22px] border rounded-full flex items-center justify-center `}>
              {value === 'yes' && <div className="bg-[#6C25FF] h-[12px] w-[12px] rounded-full " /> }  
            </div>
            <p className="text-[]">Yes</p>
          </div>

          <div className="flex items-center gap-2 " onClick={() =>handleToggle('no')}>
            <div className={`${value === 'no'? "border-[#642AF5] ":"border-[#919191]"} h-[22px] w-[22px] border rounded-full flex items-center justify-center `}>
              {value === 'no' && <div className="bg-[#6C25FF] h-[12px] w-[12px] rounded-full " /> }  
            </div>
            <p className="text-[]">No</p>
          </div>

          </div>
        </div>
      </div>

      <div className="px-[20px]">
        <Link to="/settings">
          <Button
            type="submit"
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-normal text-[16px] h-[46px] mt-0 mb-[30px]"
          >
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
}
