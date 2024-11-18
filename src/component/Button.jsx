import { CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarProvider } from '../components/ui/sidebar'
import MuiBox from '@/Icon/MuiBox'
import { Collapsible } from '@radix-ui/react-collapsible'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from 'next/navigation'


const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();  


  return (
    <div>
      <SidebarProvider>
        <SidebarMenu>
          <Collapsible open={isOpen} onOpenChange={setIsOpen} >
            <SidebarMenuItem className={`${isOpen && 'hover:bg-green-100 '}`}>
              <CollapsibleTrigger asChild className={`${isOpen?"text-green-500":""}`}>
                <SidebarMenuButton 
                  className={`flex items-center  rounded-lg transition-colors duration-300`}
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
                <SidebarMenuSub className="rounded-lg mx-0 side_bar_list">
                  <Link href="/dashboard/profile" passHref className={`${location === '/dashboard/profile' ? 'bg-red-500' : 'file:'}`}>
                    <SidebarMenuSubItem className="flex gap-4 items-center  rounded-md">
                      <MuiBox className="" />
                      <span>Profile</span>
                    </SidebarMenuSubItem>
                  </Link>
                  <Link href="/dashboard/cards" passHref className={`${location === '/dashboard/cards' ? 'bg-red-500' : ''}`}>
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
