"use client";
import { FullScreenContainer } from "@/components/layout/FullScreenContainer";

export default function Post() {
  return (
    <main className="w-full min-h-screen">
      <FullScreenContainer>
        <div className="flex w-full min-h-screen gap-6 py-8">
          {/* <div className="w-2/3 max-h-screen overflow-y-scroll scrollbar-hide space-y-6 px-2">
            test
          </div> */}
          <section className="space-y-4">
            <header className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Notes</h2>
              <span className="text-gray-500">notes.length</span>
            </header>

            {/* Input Section */}
            <div className="border rounded-lg p-4 space-y-4 bg-white">
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Type your note"
                // value={noteText}
                // onChange={(e) => setNoteText(e.target.value)}
              ></textarea>
              {/* Toolbar */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="p-2 text-gray-500 hover:text-black">
                    <b>B</b>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-black">
                    <i>I</i>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-black">
                    U
                  </button>
                  <button className="p-2 text-gray-500 hover:text-black">
                    🔗
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    //   onClick={() => setNoteText("")}
                  >
                    Cancel
                  </button>
                  <button
                    className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600"
                    //   onClick={handleAddNote}
                  >
                    Add note
                  </button>
                </div>
              </div>
            </div>

            {/* Notes List */}
            <div className="space-y-4">
              {/* {notes.map((note, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white">
                <header className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Note by note.author
                  </span>
                  <span className="text-sm text-gray-500">note.time</span>
                </header>
                <p className="mt-2 text-gray-800">note.text</p>
              </div>
            ))} */}
            </div>
          </section>
          {/* <Sidebar /> */}
        </div>
      </FullScreenContainer>
    </main>
  );
}
// export default function Post() {
//     const [notes, setNotes] = useState([]);
//   const [noteText, setNoteText] = useState("");

//     const handleAddNote = () => {
//       if (noteText.trim()) {
//         setNotes([
//           ...notes,
//           {
//             text: noteText,
//             author: "Esther Howard",
//             time: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           },
//         ]);
//         setNoteText("");
//       }
//     };

//   return (
//     <main className="w-full min-h-screen">
//       <div className="w-2/3 max-h-screen overflow-y-scroll scrollbar-hide space-y-6 px-2">
//         {/* Notes Section */}
//         <section className="space-y-4">
//           <header className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Notes</h2>
//             <span className="text-gray-500">notes.length</span>
//           </header>

//           {/* Input Section */}
//           <div className="border rounded-lg p-4 space-y-4 bg-white">
//             <textarea
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               placeholder="Type your note"
//               value={noteText}
//               onChange={(e) => setNoteText(e.target.value)}
//             ></textarea>
//             {/* Toolbar */}
//             <div className="flex items-center justify-between">
//               <div className="flex gap-2">
//                 <button className="p-2 text-gray-500 hover:text-black">
//                   <b>B</b>
//                 </button>
//                 <button className="p-2 text-gray-500 hover:text-black">
//                   <i>I</i>
//                 </button>
//                 <button className="p-2 text-gray-500 hover:text-black">
//                   U
//                 </button>
//                 <button className="p-2 text-gray-500 hover:text-black">
//                   🔗
//                 </button>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//                   //   onClick={() => setNoteText("")}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600"
//                   //   onClick={handleAddNote}
//                 >
//                   Add note
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Notes List */}
//           <div className="space-y-4">
//             {/* {notes.map((note, index) => (
//               <div key={index} className="border rounded-lg p-4 bg-white">
//                 <header className="flex justify-between items-center">
//                   <span className="text-sm font-medium text-gray-700">
//                     Note by note.author
//                   </span>
//                   <span className="text-sm text-gray-500">note.time</span>
//                 </header>
//                 <p className="mt-2 text-gray-800">note.text</p>
//               </div>
//             ))} */}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
