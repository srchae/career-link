"use client";
import dynamic from "next/dynamic";
import { PagesTopLoader } from "nextjs-toploader/pages";
import { ToastContainer } from "react-toastify";

import { FullScreenContainer } from "@/components/layout/FullScreenContainer";
import { useRouter } from "nextjs-toploader/app";

const DynamicQuillEditor = dynamic(
  () => import("@/components/form/QuillEditor"),
  {
    ssr: false,
  }
);
export interface Note {
  text: string;
  author: string;
  time: string;
  hour: string;
  minute: string;
}

export default function Post() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <PagesTopLoader color="#334155" />
      <ToastContainer position="top-center" autoClose={3000} />
      <main className="w-full min-h-screen">
        <FullScreenContainer>
          <div className="flex w-full min-h-screen gap-6 py-8 justify-center">
            <DynamicQuillEditor />
          </div>
        </FullScreenContainer>
      </main>
    </>
  );
}
