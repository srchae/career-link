import { Icons } from "../Icons";

export const Searchbar = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="관심있는 내용을 검색해보세요!"
        className="w-full pl-4 pr-10 py-2 border rounded-full shadow-sm focus:outline-[#aaa] focus:outline-dashed focus:outline-1 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
      >
        <Icons.SearchIcon />
      </button>
    </div>
  );
};
