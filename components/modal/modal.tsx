import React from "react";
import cn from "classnames";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";

type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  className?: string;
};

export default function Modal({
  children,
  visible,
  onClose,
  className,
}: ModalProps) {
  React.useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) return null;

  return createPortal(
    <>
      <div className={cn(styles.overlay, className)} />
      <OutsideClickHandler onOutsideClick={onClose}>
        <div>{children}</div>
      </OutsideClickHandler>
    </>,
    document.body,
  );
}
