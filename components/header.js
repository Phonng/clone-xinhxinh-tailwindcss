import Image from "next/image";
import Link from "next/link";
import { domain } from "../constant/common";
import Menu from "./menu";

export default function Section1() {
  console.log(`${domain}/login`);
  return (
    <header className="w-screen flex pt-[14px] px-[85px] z-[999] md:justify-between p-0">
      <div className="w-screen flex pt-[14px] px-[85px] z-[999]">
        <div className="h-[72px] w-[95px]  flex ml-2 absolute top-4">
          <Link href="/" passHref>
            <Image
              alt="logo_xinhxinh"
              layout="fill"
              src={"/images/elements/logo-xx-live.png"}
              className="cursor-pointer min-w-screen w-[93px] object-contain"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex justify-end flex-grow mr-[60px]">
          <div className="text-sm font-semibold tracking-[1.08px] text-white">
            <Link href={`${domain}/login`}>Đăng nhập</Link>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
