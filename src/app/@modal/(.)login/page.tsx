"use client";

import { Dialog } from "@/components";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  return (
    <Dialog router={router}>
      <Dialog.Login router={router} />
    </Dialog>
  );
}
