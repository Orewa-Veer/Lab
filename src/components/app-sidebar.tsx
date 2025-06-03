import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { DataT } from "@/Data/Tags";
import { BsTags } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { FaArrowTrendUp, FaRegMessage } from "react-icons/fa6";
import { FaRegBookmark, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Questions",
    url: "/questions",
    icon: FaRegMessage,
  },
  {
    title: "Trending",
    url: "/popup",
    icon: FaArrowTrendUp,
  },
  {
    title: "Recent",
    url: "#",
    icon: FaRegClock,
  },
  {
    title: "Bookmark",
    url: "#",
    icon: FaRegBookmark,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="fixed top-10">
      <SidebarContent className="mt-4 ml-3">
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between text-[#059669] font-sans font-bold text-3xl px-3 pb-0">
            <span>Forumly</span>
          </SidebarGroupLabel>
          <SidebarGroupLabel className="text-xs text-[#6B7280] px-3">
            Developer Community
          </SidebarGroupLabel>
          <SidebarGroupContent className="text-sm font-medium">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className=" px-4 py-2">
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mb-8">
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="mb-3  ">
                      <BsTags />
                      <a
                        href="#"
                        className="text-[#374151] text-sm font-sans font-medium"
                      >
                        Popular Tags
                      </a>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <SidebarMenuSub>
                    <CollapsibleContent className=" ">
                      {DataT.map((data) => (
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton>
                            <a
                              href="# "
                              className="font-sans text-xs font-medium"
                            >
                              {data.title}
                            </a>
                            <SidebarMenuBadge>{data.views}</SidebarMenuBadge>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </CollapsibleContent>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mb-8">
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <MdOutlinePeopleAlt />
                      <a
                        href="#"
                        className="font-sans text-sm font-medium text-[#374151]"
                      >
                        Communities
                      </a>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <SidebarMenuSub>
                    <CollapsibleContent>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <a href="#" className="font-sans text-xs font-medium">
                            Frontend Developers
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <a href="#" className="font-sans text-xs font-medium">
                            Backend Engineers
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <a href="#" className="font-sans text-xs font-medium">
                            DevOps & Cloud
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <a href="#" className="font-sans text-xs font-medium">
                            Mobile Development
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </CollapsibleContent>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
