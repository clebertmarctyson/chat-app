"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { signOut, useSession } from "next-auth/react";

type ProfileProps = {
  children: React.ReactNode;
};

const Profile = ({ children }: ProfileProps) => {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  } else if (session.status === "unauthenticated") {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      {/* @ts-ignore */}
      <SheetContent className="flex flex-col justify-between">
        <div>
          <SheetHeader className="flex flex-col items-center pb-4">
            <SheetTitle>Profile</SheetTitle>
            <SheetDescription>Your profile information</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col justify-center items-center">
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={session?.data?.user.image}
                alt={session?.data?.user.name}
              />
              <AvatarFallback>{session?.data?.user.name}</AvatarFallback>
            </Avatar>

            <p>
              <strong>{session?.data?.user.name}</strong>
            </p>

            <p>{session?.data?.user.email}</p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              variant={"destructive"}
              onClick={() => signOut()}
              className="w-full"
            >
              Sign Out
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Profile;
