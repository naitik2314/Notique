import React from 'react';
import { XIcon } from 'lucide-react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />
        <div className="relative z-50 w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl sm:max-w-lg">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
              <XIcon size={20} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>;
};
export default Modal;