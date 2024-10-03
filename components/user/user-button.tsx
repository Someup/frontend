'use client';
import LoginDialog from '@/components/auth/login-dialog';
import Button from '@/components/ui/Button';
import { Dialog, DialogTrigger } from '@/components/ui/Dialog';
import { useLogout } from '@/lib/service/auth/user-auth-service';
import { useUserProfile } from '@/lib/service/user/use-user-service';

export default function UserButton() {
  const userQuery = useUserProfile();
  const { mutate: logout } = useLogout();
  if (userQuery.isLoading) {
    return <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />;
  }

  if (userQuery.data) {
    return (
      <button
        onClick={() => {
          logout();
        }}
      >
        <img
          src={userQuery.data.profileImageUrl}
          alt="profile"
          className="h-8 w-8 rounded-full"
          width={32}
          height={32}
        />
      </button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>로그인</Button>
      </DialogTrigger>
      <LoginDialog />
    </Dialog>
  );
}
