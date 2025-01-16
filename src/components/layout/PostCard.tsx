export const PostCard = ({
  title,
  company,
  author,
  time,
  content,
  comments,
}: any) => {
  return (
    <div className="p-6 mx-2 bg-white rounded shadow flex flex-col gap-4">
      <p className="font-semibold text-2xl">{title}</p>
      <div className="text-gray-600 text-sm w-full flex justify-between">
        <div>
          {company} <span className="text-blue-600">{author}</span>
        </div>
        <p>{time}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">{content}</p>
        <span className="text-sm text-gray-500">{comments}개의 댓글</span>
      </div>
    </div>
  );
};
