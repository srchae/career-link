"use client";

import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="w-1/3 bg-white p-6 rounded shadow space-y-6">
      <Link href={"/post"}>
        <button className="w-full p-3 bg-[#334155] text-white rounded hover:bg-[#1e293b]">
          글 작성하기
        </button>
      </Link>
      {/* <ul className="space-y-2">
        <li className="flex items-center">메뉴 1</li>
        <li className="flex items-center">메뉴 2</li>
      </ul> */}
    </aside>
  );
};
