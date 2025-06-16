import {
  AtSign,
  Bookmark,
  Heart,
  MessageCircle,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

type NotificationType = "like" | "reply" | "bookmark" | "mention" | "system";

interface Notification {
  id: string;
  type: NotificationType;
  content: string;
  by?: string;
  time: string;
  read: boolean;
}

export const iconMap: Record<NotificationType, LucideIcon> = {
  like: Heart,
  reply: MessageCircle,
  bookmark: Bookmark,
  mention: AtSign,
  system: RefreshCw,
};
export const notifications: Notification[] = [
  {
    id: "1",
    type: "like",
    content: 'New Like on your post "How to use Tiptap?"',
    by: "@johndoe",
    time: "2 mins ago",
    read: false,
  },
  {
    id: "2",
    type: "reply",
    content: 'New Reply in thread "Best Tailwind Plugins"',
    by: "@frontendguru",
    time: "10 mins ago",
    read: false,
  },
  {
    id: "3",
    type: "bookmark",
    content: "Your post was bookmarked by @coderqueen",
    by: "",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "4",
    type: "mention",
    content: "@markdev replied to your comment",
    by: 'in "Dark Mode vs Light Mode Debate"',
    time: "2 hours ago",
    read: false,
  },
];
