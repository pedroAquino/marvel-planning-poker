import {
  Modal as CModal,
  ModalProps as CModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";

interface ModalProps extends CModalProps {
  title?: string;
  footer?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children , footer, title}: ModalProps) {
  return (
    <CModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter>
          {footer}
        </ModalFooter>
      </ModalContent>
    </CModal>
  );
}
