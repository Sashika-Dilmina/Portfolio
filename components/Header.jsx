import Link from "next/link";
import {Button} from "./ui/Button";

import Nav from "./Nav";

const Header = () => {
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx -auto flex justify-between items-center">
                {/*logo*/}
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Sashika Dilmina<span className="text-accent">.</span>
                </h1>
                </Link>


                {/*Desktop nav & hire me button*/}
                <div className ="hidden xl:flex items-center gap-8 ">
                    <Nav/>
                    <Link href="/contact">
                        <Button className=" text-white hover:bg-red-700 shadow-md px-4 py-2 rounded-lg">Hire me</Button>
                    </Link>
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    )
}

export default Header