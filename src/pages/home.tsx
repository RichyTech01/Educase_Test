import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="h-[812px] relative flex flex-col justify-end py-[41px] px-[20px]">
        <div className="flex flex-col gap-[14px] mb-[29px]">
          <h1 className="text-[28px] font-semibold leading-none">
            Welcome to PopX
          </h1>
          <h1 className="text-base text-[#1D2226] opacity-60">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </h1>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link to="/register">
            <Button
              type="submit"
              className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold text-[16px] h-[46px] mt-0"
            >
              Create Account
            </Button>
          </Link>
          <Link to="/login">
            <Button
              type="submit"
              className="w-full bg-[#6C25FF4B] hover:bg-[#b99ef6] text-black font-semibold text-[16px] h-[46px] mt-0"
            >
              Already Registered? Login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
