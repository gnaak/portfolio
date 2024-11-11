import React, { useState, useEffect } from "react";
import useModal from "@/hooks/useModal";

interface ReaditProps {
  close: () => void;
}

const Readit = ({ close }: ReaditProps) => {
  const [is0pen, op2n, clos2e] = useModal();
  const [selectedRange, setSelectedRange] = useState<Range | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  // Update the selectedRange whenever it changes
  useEffect(() => {
    console.log("selectedRange has been updated:", selectedRange);
  }, [selectedRange]);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      // Ensure there is selected text before updating the range
      if (!range.collapsed) {
        setSelectedRange(range); // Update the selected range
        console.log("range :", range);

        const rect = range.getBoundingClientRect();
        const buttonX = rect.right;
        const buttonY = rect.top - 30;

        setPosition({
          x: buttonX - 640,
          y: buttonY - 150,
          width: rect.width,
          height: rect.height,
        });

        setOpenMenu(true); // Only open menu when text is selected
      }
    }
  };

  const handleBold = () => {
    if (selectedRange && !selectedRange.collapsed) {
      // Check if there is a valid selection
      console.log("selectedRange :", selectedRange);
      const selectedText = selectedRange.toString();
      console.log("selectedText :", selectedText);
      if (selectedText) {
        console.log("gkdl");
        const span = document.createElement("span");
        console.log(selectedText);
        span.style.fontWeight = "bold";
        selectedRange.deleteContents();
        selectedRange.insertNode(span);
        span.textContent = selectedText; // Insert the selected text with bold style
      }
      setOpenMenu(false); // Close the menu after applying bold
    }
  };

  const setColor = (color: string) => {
    if (selectedRange && !selectedRange.collapsed) {
      // Check if there is a valid selection
      const span = document.createElement("span");
      span.style.backgroundColor = color;
      selectedRange.surroundContents(span);
      setOpenMenu(false); // Close the menu after applying color
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div
          className="absolute top-1 md:-right-1 -right-3 w-[10%] aspect-square rounded-xl flex items-center justify-center text-translate-x-1/2"
          onClick={close}
        >
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={close}
          >
            close
          </span>
        </div>

        <div
          className="px-5 pt-24 lg:text-base text-sm select-text"
          onMouseUp={handleMouseUp} // Add mouse up event on the container for entire text selection
        >
          {openMenu && position && (
            <div
              className="absolute 3xl:top-1 3xl:left-24 2xl:left-56 top-0 left-64  w-[70px] h-[40px] bg-white text-black rounded m-0 border border-black items-center justify-center"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
              }}
            >
              <div className="flex flex-row justify-between p-2 items-center">
                <span
                  className="text-black font-bold hover:cursor-pointer"
                  onClick={handleBold}
                >
                  B
                </span>
                <span
                  className="material-symbols-outlined hover:cursor-pointer"
                  onClick={op2n}
                >
                  format_ink_highlighter
                </span>

                {is0pen && (
                  <div className="absolute bottom-10 left-10 border border-gray rounded-xl flex flex-col bg-white p-3 gap-2 opacity-100">
                    <div className="flex flex-row gap-2">
                      <div
                        className="w-4 aspect-square bg-yellow-200 border border-yellow-400 rounded-xl hover:cursor-pointer"
                        onClick={() => {
                          setColor("yellow");
                          clos2e();
                        }}
                      ></div>
                      <div
                        className="w-4 aspect-square bg-pink-200 border border-pink-400 rounded-xl hover:cursor-pointer"
                        onClick={() => {
                          setColor("pink");
                          clos2e();
                        }}
                      ></div>
                      <div
                        className="w-4 aspect-square bg-blue-200 border border-blue-400 rounded-xl hover:cursor-pointer"
                        onClick={() => {
                          setColor("skyblue");
                          clos2e();
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </span>
          <span className="hidden 2xl:flex">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>

        </div>
      </div>
    </>
  );
};

export default Readit;
