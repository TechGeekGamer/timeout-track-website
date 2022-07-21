import { useState } from "react";
import Modal from "./components/modal";
function BuildPatchModal() {
  let [isPatchAcked, setIsPatchAcked] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function removePatch() {
    document.cookie = "build_patch=;expires=" + new Date(0).toUTCString();
    window.location.reload();
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  if (getCookie("build_patch") && isOpen === false && isPatchAcked === false) {
    setIsPatchAcked(true);
    openModal();
  }
  return (
    <Modal
      isModalOpen={isOpen}
      setIsModalOpen={setIsOpen}
      rawContent={
        <p className="text-sm text-gray-500">
          You're currently using the{" "}
          <span className="font-bold">{getCookie("build_patch")}</span> build
          patch. You may see a different version than the production build. To
          return to production, you can either remove the{" "}
          <code>build_patch</code> cookie, or press the remove button below.
        </p>
      }
      buttonsOverride={[
        {
          title: "Alright",
          action: undefined,
          color: "blue",
        },
        {
          title: "Remove it now",
          action: removePatch,
          color: "red",
        },
      ]}
      title="Build Patch Detected"
    ></Modal>
  );
}

export default BuildPatchModal;
