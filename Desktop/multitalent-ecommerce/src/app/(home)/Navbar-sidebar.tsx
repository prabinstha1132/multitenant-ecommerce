import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
interface NavbarItem {
    href: string;
    children: React.ReactNode;
}
interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export default function NavbarSidebar({ items, open, onOpenChange }: Props) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left"
                className="p-0 transition-none">
                <SheetHeader className='p-4 border-b'>
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (<Link
                        className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center"
                        key={item.href}
                        href={item.href}>
                        {item.children}</Link>))}
                    <div className="border-t">
                        <Link href="/sign-in" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center">
                            sign-in
                        </Link>
                        <Link href="/sign-in" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center">
                            sign-up
                        </Link>
                    </div>

                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}