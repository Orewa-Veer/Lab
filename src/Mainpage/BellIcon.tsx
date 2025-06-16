import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { iconMap, notifications } from "@/Data/notiData";
import { Bell } from "lucide-react";

const NotificationsDropdown = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Bell />
      </HoverCardTrigger>
      <HoverCardContent className="bg-white/40 space-y-2">
        {notifications.map((noti) => {
          const Icon = iconMap[noti.type];
          return (
            <div
              key={noti.id}
              className="flex bg-white/60 items-start p-1 gap-3  border rounded-lg shadow-sm hover:bg-white/80"
            >
              <Icon className="text-blue-500 mt-1" size={20} />
              <div className="text-sm text-gray-800">
                <p className="font-medium">{noti.content}</p>
                <p className="text-xs text-gray-500">
                  {noti.by && <>{noti.by} • </>}
                  {noti.time}
                </p>
              </div>
            </div>
          );
        })}
      </HoverCardContent>
    </HoverCard>
  );
};

export default NotificationsDropdown;
