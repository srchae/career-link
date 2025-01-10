export const Sidebar = () => {
  return (
    <aside className="w-1/3 bg-white p-6 rounded shadow space-y-6">
      <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        글 작성하기
      </button>
      <ul className="space-y-2">
        <li className="flex items-center">메뉴 1</li>
        <li className="flex items-center">메뉴 2</li>
      </ul>
    </aside>
  );
};
