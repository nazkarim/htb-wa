import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full px-5 py-5 mb-10">
      <div className="flex w-full items-center justify-between ">
        <div className="flex items-center space-x-4">
          <Link href="/" className="">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>
          <Button>
            <Link href="/" className="">
              Courses
            </Link>
          </Button>

          <Button>
            <Link href="/" className="">
              About
            </Link>
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button>
            <Link href="/signin" className="">
              Sign in
            </Link>
          </Button>
          <Button>
            {" "}
            <Link href="/signup" className="">
              Sign up
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
