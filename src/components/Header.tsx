import { getAuthSession } from "@/lib/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Profile from "@/components/Profile";

const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="flex items-center justify-between p-4 border-b border-border">
      <h1 className="text-2xl font-bold">OurChat</h1>

      <Profile>
        <Avatar className="cursor-pointer">
          <AvatarImage src={session?.user.image} alt={session?.user.name} />
          <AvatarFallback>{session?.user.name}</AvatarFallback>
        </Avatar>
      </Profile>
    </header>
  );
};

export default Header;
