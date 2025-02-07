import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className=" w-full">
        <div className=" flex flex-col lg:flex-row justify-between p-5 lg:p-20 border-b-2">
          <div className=" flex flex-col justify-center text-gray-400 p-12 border-b-2 lg:border-r-2 lg:border-b-0">
            <span>400 University Drive Suite 200 Coral Gables,</span>
            <span>FL 33134 USA</span>
          </div>

          <div className=" p-12 border-b-2 lg:border-b-0">
            <h1 className=" text-gray-400 mt-4 mb-12">Links</h1>
            <ul className=" flex flex-col gap-5">
              <Link href="/" passHref>
                <li className=" font-bold">
                  <span className=" hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                    Home
                  </span>
                </li>
              </Link>
              <Link href="/shop" passHref>
                <li className=" font-bold">
                  <span className=" hover:border-b-2 border-[#b88e2f] hover:text-[#B88E2F] pb-1">
                    Shop
                  </span>
                </li>
              </Link>
              <Link href="#" passHref>
                <li className=" font-bold">
                  <span className=" hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                    About
                  </span>
                </li>
              </Link>
              <Link href="/contact" passHref>
                <li className=" font-bold">
                  <span className=" hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                    Contact
                  </span>
                </li>
              </Link>
            </ul>
          </div>

          <div className=" p-12 border-b-2 lg:border-b-0">
            <h1 className=" text-gray-400 mt-4 mb-12">Help</h1>
            <ul className=" flex flex-col gap-5">
              <Link href="#" passHref>
                <li className=" font-bold">
                  <span className=" hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                    Payment Options
                  </span>
                </li>
              </Link>
              <Link href="#" passHref>
                <li className=" font-bold">
                  <span className=" hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                    Returns
                  </span>
                </li>
              </Link>
              <Link href="#" passHref>
                <li className=" font-bold">
                  <span className=" hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                    Privacy Policies
                  </span>
                </li>
              </Link>
            </ul>
          </div>

          <div className=" p-12 md:flex-shrink-0">
            <h1 className=" text-gray-400 mt-4 mb-12">Newsletter</h1>
            <div>
              <input
                className=" border-b-2 border-[#B88E2F] mb-3 lg:m-3 p-2 focus:border-b-0"
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email Address"
              />
              <button className=" border-b-2 border-[#B88E2F] p-2 hover:border-none hover:bg-[#B88E2F]/50 hover:rounded-md hover:scale-105 active:scale-95 transform transition duration-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <h1 className=" m-8 ml-20 select-none">
          2022 Meubel House. All rights reverved
        </h1>
      </footer>
    </>
  );
}
