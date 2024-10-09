import React, { useState, useEffect } from "react";
import FlipPage from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist/webpack";

const UploadPage = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfPages, setPdfPages] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfFile(file);
    }
  };

  useEffect(() => {
    if (pdfFile) {
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const typedarray = new Uint8Array(this.result);

        pdfjsLib.getDocument(typedarray).promise.then((pdf) => {
          let pagesArray = [];

          for (let i = 1; i <= pdf.numPages; i++) {
            pdf.getPage(i).then((page) => {
              const viewport = page.getViewport({ scale: 1.0 });
              const canvas = document.createElement("canvas");
              const context = canvas.getContext("2d");
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              };
              page.render(renderContext).promise.then(() => {
                pagesArray.push(canvas.toDataURL());
                if (pagesArray.length === pdf.numPages) {
                  setPdfPages(pagesArray);
                  console.log(pagesArray); // Log pages to verify
                }
              });
            });
          }
        });
      };
      fileReader.readAsArrayBuffer(pdfFile);
    }
  }, [pdfFile]);

  return (
    <div className="min-h-screen bg-[#282527] text-white flex flex-col items-center p-6">
      {/* ---------- Choose Demo Section ---------- */}
      <h2 className="text-4xl font-bold text-center mt-10">Choose Demo</h2>
      <div className="mt-4">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="62"
            viewBox="0 0 80 62"
            fill="none"
          >
            <path
              d="M10.5661 55.381L9.59587 55.5031L10.4224 56.0258C11.0888 56.4472 11.767 56.8064 12.4247 57.1425C12.5837 57.2238 12.7409 57.3034 12.8965 57.3822C13.3602 57.617 13.8086 57.844 14.24 58.082L14.2815 58.1502L14.3364 58.2404L14.4319 58.2854C14.9057 58.5084 15.1678 58.8499 15.2825 59.2236C15.3998 59.6056 15.3687 60.0426 15.2113 60.445C14.8914 61.2628 14.1246 61.8087 13.2462 61.5413C8.83662 60.199 4.47897 58.2468 1.02365 55.1664L1.02371 55.1663L1.01753 55.1611C0.68782 54.8805 0.455433 54.378 0.418023 53.8449C0.380795 53.3142 0.540051 52.8263 0.895158 52.5336L0.905639 52.5249L0.915414 52.5155C2.27511 51.2057 3.52458 49.7083 4.76665 48.2198C5.10131 47.8187 5.43542 47.4183 5.77102 47.0223C7.36119 45.1462 8.99349 43.3588 10.9175 41.9904L10.9209 41.9879C11.5703 41.5142 12.4069 41.7068 13.0045 42.2865C13.6011 42.8652 13.8225 43.6976 13.3701 44.3684C11.6763 46.7958 9.56826 48.8796 7.28863 51.0756L7.62436 51.6669C9.51585 51.1516 11.3696 50.7834 13.3017 50.3997C13.8178 50.2972 14.3394 50.1936 14.8689 50.0858L14.8689 50.0859L14.8762 50.0842C18.598 49.2431 22.1374 48.1059 25.6599 46.9742L25.667 46.9719L25.667 46.9721L25.6791 46.9678C33.1075 44.2774 40.2346 40.7558 46.8225 36.3433L46.8229 36.343C59.55 27.7912 70.6949 15.938 76.666 1.52466C76.8643 1.05802 77.3843 0.879804 77.9315 1.01541C78.4791 1.15111 78.8649 1.55524 78.8289 2.06743L78.8288 2.06742L78.8284 2.07669C78.4701 10.2594 73.3675 17.1734 68.1766 23.1627L68.1749 23.1646C62.8033 29.4536 56.5103 34.8941 49.7645 39.6017C42.8804 44.3927 35.3673 48.1559 27.6952 51.0066C23.7347 52.4049 19.5527 53.7394 15.2544 54.5439L15.2543 54.5437L15.2416 54.5466C13.6618 54.9036 12.2311 55.1713 10.5661 55.381Z"
              fill="#87AF05"
              stroke="#282527"
              strokeWidth="0.701892"
            />
          </svg>
        </div>
      </div>

      {/* ---------- Demo Cards on a Shelf ---------- */}
      <div className="relative w-full flex justify-center mb-16">
        <div className="flex gap-6 items-center overflow-auto no-scrollbar p-4">
          <img
            src="https://real3dflipbook.com/wp-content/uploads/2019/03/design-th.jpeg"
            alt="Demo 1"
            className="w-40 h-60 object-cover"
          />
          <img
            src="https://real3dflipbook.com/wp-content/uploads/2021/09/1-212x300.jpg"
            alt="Demo 2"
            className="w-40 h-60 object-cover"
          />
          <img
            src="https://real3dflipbook.com/wp-content/uploads/real3d-flipbook/flipbook_63/thumb1.jpg"
            alt="Demo 3"
            className="w-40 h-60 object-cover"
          />
          <img
            src="https://real3dflipbook.com/wp-content/uploads/2018/03/Bloom-Magazine-212x300.jpg"
            alt="Demo 4"
            className="w-40 h-60 object-cover"
          />
          <img
            src="https://real3dflipbook.com/wp-content/uploads/real3d-flipbook/flipbook_60/thumb.webp?1726563549047"
            alt="Demo 5"
            className="w-40 h-60 object-cover"
          />
        </div>
        {/* ----------Shelf Design ---------- */}
        <div className="absolute bottom-0 left-0 right-0 w-2/3 h-4 bg-orange-600 mx-auto rounded-lg"></div>
      </div>

      {/* ---------- Or Divider ---------- */}
      <div className="flex items-center my-3 w-full max-w-[90%]">
        <div className="border-t border-1 border-white border-dashed flex-grow"></div>
        <div className="px-5 py-1 font-semibold text-lg">Or</div>
        <div className="border-t border-1 border-white border-dashed flex-grow"></div>
      </div>

      {/* ------ Try your PDF or images ------ */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold mb-4">Try your PDF or images</h3>
        <div className="flex flex-col justify-center items-center p-4  rounded-lg">
          <label
            htmlFor="file-upload"
            className=" text-center border-2 border-gray-300 border-dashed p-6 rounded-lg w-full max-w-md mx-auto cursor-pointer"
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            {/* <div className="text-center text-white">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Select PDF
              </div>
            </div> */}
            <img
              className="mx-auto h-12 w-12"
              src="https://www.svgrepo.com/show/357902/image-upload.svg"
              alt="Upload Icon"
            />
            <h3 className="mt-2 text-md font-medium text-white">
              Select PDF or images
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </label>

          <div className="flex justify-center">
            {pdfPages.length > 0 && (
              <div className="mt-6  ">
                <FlipPage
                  width={300}
                  height={430}
                  className="book"
                  animationDuration={400}
                  showSwipeHint
                  showTouchHint
                  style={{ margin: "0 auto" }}
                >
                  {pdfPages.map((page, index) => (
                    <article key={index}>
                      <div className="page-content w-full h-full flex justify-center items-center ">
                        <img
                          src={page}
                          alt={`Page ${index + 1}`}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </article>
                  ))}
                </FlipPage>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
