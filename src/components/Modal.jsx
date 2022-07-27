import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const Modal = ({ direction, firstColor, secondColor, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="z-50 w-full flex justify-center items-center md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex justify-between items-start  rounded-t ">
            <button
              type="button"
              onClick={closeModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-blue-900 text-opacity-70 text-center ">
              background: linear-gradient(
              {`${direction}, ${firstColor}, ${secondColor}`})
            </p>

            <CopyToClipboard
              text={`background: linear-gradient(${direction}, ${firstColor}, ${secondColor})`}
            >
              <MdContentCopy cursor="pointer" />
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
