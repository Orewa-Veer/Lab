import { Bell, MessageCircle, Heart, Bookmark, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button"; // using shadcn/ui
import PageCover from "./PageCover";
import CardsM from "@/Utilities/CardsM";

const notifications = [
  {
    id: 1,
    icon: <Heart className="text-pink-500" size={20} />,
    content: 'New Like on your post "How to use Tiptap?"',
    by: "@johndoe",
    time: "2 mins ago",
    read: false,
  },
  {
    id: 2,
    icon: <MessageCircle className="text-blue-500" size={20} />,
    content: 'New Reply in thread "Best Tailwind Plugins"',
    by: "@frontendguru",
    time: "10 mins ago",
    read: false,
  },
  {
    id: 3,
    icon: <Bookmark className="text-yellow-500" size={20} />,
    content: "Your post was bookmarked by @coderqueen",
    by: "",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 4,
    icon: <RefreshCw className="text-green-500" size={20} />,
    content: "@markdev replied to your comment",
    by: 'in "Dark Mode vs Light Mode Debate"',
    time: "2 hours ago",
    read: false,
  },
];

export default function NotificationsPage() {
  const showNoti = notifications.filter((noti) => noti.read === false);
  return (
    <PageCover>
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold drop-shadow-2xl flex items-center  gap-2">
            <Bell className="size-9" />
            <span> Notifications</span>
          </h1>
          <div className="flex gap-2">
            <Button className="shadow-xl backdrop-blur-2xl border-white/80 hover:bg-emerald-700">
              Filter
            </Button>
            <Button className="shadow-xl backdrop-blur-2xl border-white/80 hover:bg-emerald-700">
              Mark all as read
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          {showNoti.map((n) => (
            <CardsM
              key={n.id}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm border hover:bg-muted transition"
            >
              <div className="mt-1">{n.icon}</div>
              <div className="text-sm text-gray-700">
                <p className="font-medium">{n.content}</p>
                <p className="text-gray-500 text-xs">
                  {n.by && <span>{n.by} • </span>}
                  {n.time}
                </p>
              </div>
            </CardsM>
          ))}
        </div>
        <div className="text-center">
          <Button className="shadow-xl backdrop-blur-2xl border-white/80 hover:bg-emerald-700">
            Load more
          </Button>
        </div>
      </div>
    </PageCover>
  );
}
