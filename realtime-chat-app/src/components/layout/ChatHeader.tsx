import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ChatHeaderProps {
  avatarUrl: string;
  name: string;
  email: string;
}

export function ChatHeader({ avatarUrl, name, email }: ChatHeaderProps) {
  return (
    <div className="p-4 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={`${name}'s profile`} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold text-white">{name}</h2>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="text-gray-400 hover:text-white"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
}
