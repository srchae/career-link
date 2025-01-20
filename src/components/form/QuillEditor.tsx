import "@/styles/QuillEditorOverrides.css";
import "@/styles/ToastifyOverrides.css";
import "quill/dist/quill.snow.css"; // Quill의 스타일 가져오기

import { useEffect, useRef, useState } from "react";

import Quill from "quill"; // Quill을 import로 가져옴
import { toast } from "react-toastify";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import { useRouter } from "nextjs-toploader/app";
import { Icons } from "../Icons";

const QuillEditor = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState("");
  const [charCount, setCharCount] = useState(0); // 글자 수 상태
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const handleDelete = () => {
    setIsOpen(false);
    router.push("/");
  };
  
  useEffect(() => {
    if (
      editorRef.current &&
      !editorRef.current.getAttribute("data-initialized")
    ) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        placeholder:
          "나누고 싶은 생각을 적어주세요.\n링크나 사진을 추가할 수도 있어요.",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }], // 헤더 크기
            ["bold", "italic", "underline", "strike"], // 텍스트 스타일
            [{ list: "ordered" }, { list: "bullet" }], // 리스트
            ["link", "image"], // 링크 및 이미지
            ["code-block", "blockquote"], // 코드브록
          ],
        },
      });

      // 텍스트 변경 시 글자 수 업데이트
      quill.on("text-change", () => {
        console.log("click");
        const text = quill.getText().trim(); // 텍스트 가져오기 (공백 제거)
        setCharCount(text.length); // 글자 수 업데이트
      });

      editorRef.current.setAttribute("data-initialized", "true");
    }
  }, []);

  const handleClick = () => {
    toast.success("작성 중인 내용을 임시 저장 했어요!", {
      theme: "colored",
    });
    return;
  };

  return (
    <div className="flex flex-col">
      {isOpen && (
        <>
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              aria-hidden="true"
            ></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto text-black">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  transition
                  className="w-[15%] max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out transform data-[closed]:scale-[95%] data-[closed]:opacity-0 text-black"
                >
                  <DialogTitle
                    as="h3"
                    className="text-base font-medium text-black"
                  >
                    <p>이 화면을 나가면 작성중인 게시물이 삭제됩니다.</p>
                  </DialogTitle>
                  <p className="mt-2 text-sm text-black/50">
                    임시 보관함에 저장하시겠습니까?
                  </p>
                  <div className="mt-4 w-full flex gap-2">
                    <Button
                      className="items-center gap-2 rounded-md bg-gray-700 py-2 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-800 focus:outline-1 focus:outline-white active:bg-gray-700 w-full text-center"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      임시 저장
                    </Button>
                    <Button
                      className="items-center gap-2 rounded-md bg-red-500 py-2 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-red-600 focus:outline-1 focus:outline-white active:bg-red-700 w-full text-center"
                      onClick={handleDelete}
                    >
                      삭제
                    </Button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </>
      )}

      <div className="w-full flex justify-between items-center">
        <button onClick={() => setIsOpen(true)}>
          <Icons.ArrowLeft />
        </button>
        <div className="flex gap-3">
          <button
            onClick={handleClick}
            className="border border-[#64748b] px-3 py-2 rounded-md"
          >
            임시 저장
          </button>
          <button className="px-3 py-2 rounded-md bg-[#334155] text-white">
            완료
          </button>
        </div>
      </div>
      <div className="quill-container py-5">
        <div className="title-char-count flex justify-end text-gray-500 text-sm mb-2">
          {title.length} / 40
        </div>
        {/* 제목 입력 필드 */}
        <div className="title-container">
          <input
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />
        </div>

        {/* Quill 에디터 */}
        <div ref={editorRef} style={{ minHeight: "200px", maxWidth: "100%" }}>
          {/* 글자 수 표시 */}
        </div>
        <div className="char-count flex justify-end text-gray-500">
          {charCount} / 800
        </div>
      </div>
    </div>
  );
};

export default QuillEditor;
