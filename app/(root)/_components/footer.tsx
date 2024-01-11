import { Button } from "@/components/ui/button";
import Logo from "./logo";

//Footer
const Footer = () => {
    return (
        <div className=" flex w-full items-center dark:bg-[#1f1f1f]">
            <Logo />
            <div className=" flex justify-between md:justify-end w-full text-muted-foreground items-center">
                <Button  variant="ghost" size="sm">Privacy Policy</Button>
                <Button variant="ghost" size="sm">Terms & Conditions</Button>
            </div>
        </div>
    )
}

export default Footer;