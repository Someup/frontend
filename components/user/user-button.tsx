'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { useLogout } from '@/lib/service/auth/user-auth-service';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { User } from '@/types/user-types';

interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
  const { mutate: logout } = useLogout();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center space-x-2">
          <img
            src={user.profileImageUrl}
            alt="profile"
            className="h-10 w-10 rounded-full bg-white"
          />
          <span className="sr-only">{user.name}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="max-w-[382px] rounded-2 border-none p-6 shadow-[16px_16px_16px_0_rgba(0,0,0,0.25)]"
        align="start"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <img
              src={user.profileImageUrl}
              alt="profile"
              className="h-10 w-10 rounded-full bg-white"
            />
            <div className="flex flex-col">
              <span
                className={cn(typography({ scale: 'body-3' }), 'text-black')}
              >
                {user.name}
              </span>
              <span
                className={cn(typography({ scale: 'body-4' }), 'text-gray-400')}
              >
                {user.email}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => {
                logout();
              }}
              className={cn(typography({ scale: 'body-6' }))}
            >
              로그아웃
            </button>
            <button className={cn(typography({ scale: 'body-6' }))}>
              계정탈퇴
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
