import { Searchbar } from "@/components/inputs/Searchbar";
import { FullScreenContainer } from "@/components/layout/FullScreenContainer";
import { PostCard } from "@/components/layout/PostCard";
import { Sidebar } from "@/components/layout/Sidebar";

export default function Home() {
  const posts = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `글 제목 ${index + 1}`,
    company: `회사 ${index + 1}`,
    author: `작성자 ${index + 1}`,
    time: `${index + 1}분 전`,
    content: `글 내용 ${index + 1}입니다.`,
    comments: Math.floor(Math.random() * 50), // 댓글 수 랜덤
  }));
  return (
    <main className="w-full min-h-screen">
      <FullScreenContainer>
        <div className="flex w-full min-h-screen gap-6 py-8">
          <div className="w-2/3 max-h-screen overflow-y-scroll scrollbar-hide space-y-6 px-2">
            <div className="sticky top-0 z-10 bg-white py-4 flex w-full items-center justify-center">
              <Searchbar />
            </div>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                company={post.company}
                author={post.author}
                time={post.time}
                content={post.content}
                comments={post.comments}
              />
            ))}
          </div>
          <Sidebar />
        </div>
      </FullScreenContainer>
    </main>
  );
}
