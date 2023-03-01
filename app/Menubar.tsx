"use client";
import { signIn, signOut } from "next-auth/react";

function Menubar() {
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export default Menubar;
