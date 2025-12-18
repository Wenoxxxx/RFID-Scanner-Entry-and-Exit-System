import { useState } from "react";

export default function useConfirm() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(""); // "edit" | "delete"
  const [payload, setPayload] = useState(null);

  const openConfirm = (actionType, data = null) => {
    setType(actionType);
    setPayload(data);
    setIsOpen(true);
  };

  const closeConfirm = () => {
    setIsOpen(false);
    setType("");
    setPayload(null);
  };

  return {
    isOpen,
    type,
    payload,
    openConfirm,
    closeConfirm,
  };
}
