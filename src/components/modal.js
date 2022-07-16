import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({
  title = "",
  content = "",
  rawContent = <></>,
  buttonText = "OK",
  isModalOpen,
  setIsModalOpen,
  disableClosing = false,
  disableButton = false,
  buttonAction,
  buttonsOverride,
  size = "md",
}) {
  function closeModal() {
    if (disableClosing) return;
    setIsModalOpen(false);
  }

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-${size} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{content}</p>
                  {rawContent}
                </div>

                {(buttonsOverride && (
                  <div className="flex flex-row-reverse gap-2 mt-4">
                    {buttonsOverride.map((button, index) => {
                      return (
                        <button
                          type="button"
                          className={`inline-flex justify-center rounded-md border border-transparent bg-${button.color}-100 px-4 py-2 text-sm font-medium text-${button.color}-900 hover:bg-${button.color}-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-${button.color}-500 focus-visible:ring-offset-2`}
                          onClick={button.action ? button.action : closeModal}
                          key={index}
                        >
                          {button.title}
                        </button>
                      );
                    })}
                  </div>
                )) || (
                  <div className="mt-4 text-right" hidden={disableButton}>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={buttonAction || closeModal}
                    >
                      {buttonText}
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
