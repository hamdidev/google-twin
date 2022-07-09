import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export const User = ({ className }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Image
        width={30}
        height={30}
        src={session.user.image}
        alt="profile image"
        onClick={signOut}
        title="Sign Out"
        className={`rounded-full hover:bg-gray-200 cursor-pointer p-1 space-x-5 ${className}`}
      />
    );
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2 font-medium whitespace-nowrap rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
};
