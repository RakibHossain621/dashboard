import { CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarProvider } from '../components/ui/sidebar'
import MuiBox from '@/Icon/MuiBox'
import { Collapsible } from '@radix-ui/react-collapsible'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SidebarProvider>
        <SidebarMenu>
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
            <SidebarMenuItem className={`${isOpen && 'bg-red-500'}`}>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton 
                  className={`flex items-center  rounded-lg transition-colors duration-300 
                    ${isOpen ? 'text-green-500' : 'bg-transparent text-black'}`
                  }
                >
                  <span className=""><MuiBox className="text-green-500" /></span>
                  <p className="flex-grow">User</p>
                  <span 
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                  >
                    <FaAngleRight />
                  </span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="rounded-lg mx-0">
                  <Link href="/dashboard/profile" passHref>
                    <SidebarMenuSubItem className="flex gap-4 items-center  rounded-md">
                      <MuiBox className="" />
                      <span>Profile</span>
                    </SidebarMenuSubItem>
                  </Link>
                  <Link href="/dashboard/cards" passHref>
                    <SidebarMenuSubItem className="flex gap-4 items-center  rounded-md">
                      <MuiBox/>
                      <span>Cards</span>
                    </SidebarMenuSubItem>
                  </Link>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarProvider>
    </div>
  );
}

export default Button;
