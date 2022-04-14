import Image from "next/image";
import Link from "next/link";
import Header from "../header";
export default function Section1() {
  return (
    <section className="md:bg-[#e44060] bg-no-repeat bg-[url(../public/images/background/landingPageBG-1.jpg)] h-[572px]">
      <div className="section ">
        <Header />
        <div className="section__body text-white">
          <div className="mt-3 mr-[345px] relative">
            <div className="pt-[55px]">
              <div className="text-[72px] font-extrabold leading-[4.5rem] trcking-[1.5px]">
                Live là Xinh
              </div>
              <div className="text-[72px] font-extrabold leading-[4.5rem] trcking-[1.5px]">
                Xinh là Live
              </div>
            </div>
            <div className="flex mt-3 mb-6 ">
              <div className="text-[72px] font-bold">#1</div>
              <div className="w-[250px]">
                <h2 className="text-base font-bold mt-5 ml-4 text-justify">
                  Nền tảng livestream bán hàng trên Facebook đa nền tảng hàng
                  đầu Việt Nam.
                </h2>
              </div>
            </div>
            <div className="mb-[169px] text-left">
              <div className="text-sm font-semibold">
                Tải ứng dụng XinhXinh hoàn toàn miễn phí tại
              </div>
              <div className=" pt-5 flex">
                <a
                  href="https://apps.apple.com/us/app/xinhxinh-livestream/id1568634564"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" w-[166px] h-14 rounded-xl hover:cursor-pointer hover:ring relative">
                    <Image
                      layout="fill"
                      loading="lazy"
                      src="/images/elements/apple.png"
                      alt="link-download-apple"
                    />
                  </div>
                </a>
                <div className=" w-[166px] h-14 rounded-xl hover:cursor-pointer hover:ring relative ml-5">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.flive.xinhxinhlive"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      layout="fill"
                      loading="lazy"
                      src="/images/elements/google-play.png"
                      alt="link-download-google"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[276px] h-[553px] absolute ml-[500px] mt-6">
            <Image
              alt="mobile-xinhxinh"
              layout="fill"
              loading="lazy"
              srcSet="/images/mobileWallpaper/S1_PHONE.png,
                      /images/mobileWallpaper/S1_PHONE@2x.png 1.5x,
                      /images/mobileWallpaper/S1_PHONE@3x.png 2x"
              src="/images/mobileWallpaper/S1_PHONE@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
