import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ADMINROUTE } from "@/constants/index.c"
import { AlignJustifyIcon } from "lucide-react"
import Link from "next/link"

export default function SidebarDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size={'icon'}
                    variant={"outline"}
                    className='rounded-full'
                >
                    <AlignJustifyIcon className='w-5 h-5 inline' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ml-3">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {ADMINROUTE.map((adlink, i) => (
                        <DropdownMenuItem key={i}>
                            <Link href={adlink.href}>
                                {adlink.label}
                            </Link>
                        </DropdownMenuItem>

                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
