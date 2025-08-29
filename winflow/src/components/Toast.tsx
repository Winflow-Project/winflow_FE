import React, { useEffect, useState, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiX,
  FiXCircle,
} from "react-icons/fi";

type ToastType = "success" | "error" | "warning" | "info";
type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";

interface ToastProps {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  position?: ToastPosition;
  onClose: (id: string) => void;
  className?: string;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  position = "top-right",
  onClose,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  }, [id, onClose]);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, handleClose]);

  const icons = {
    success: FiCheckCircle,
    error: FiXCircle,
    warning: FiAlertCircle,
    info: FiInfo,
  };

  const colors = {
    success: "bg-success-50 border-success-200 text-success-800",
    error: "bg-error-50 border-error-200 text-error-800",
    warning: "bg-warning-50 border-warning-200 text-warning-800",
    info: "bg-primary-50 border-primary-200 text-primary-800",
  };

  const iconColors = {
    success: "text-success-600",
    error: "text-error-600",
    warning: "text-warning-600",
    info: "text-primary-600",
  };

  const Icon = icons[type];

  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  const combinedClasses = twMerge(
    "fixed z-50 max-w-sm w-full bg-white border rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out",
    colors[type],
    positions[position],
    isVisible && !isLeaving
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-2",
    className
  );

  return (
    <div className={combinedClasses}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={twMerge("h-5 w-5", iconColors[type])} />
        </div>
        <div className="ml-3 w-0 flex-1">
          {title && <p className="text-sm font-medium">{title}</p>}
          <p className={twMerge("text-sm", title && "mt-1")}>{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
            onClick={handleClose}
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ToastContainerProps {
  toasts: Array<{
    id: string;
    type: ToastType;
    title?: string;
    message: string;
    duration?: number;
  }>;
  position?: ToastPosition;
  onRemoveToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = "top-right",
  onRemoveToast,
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          position={position}
          onClose={onRemoveToast}
        />
      ))}
    </div>
  );
};

export { Toast, ToastContainer };
export type { ToastType, ToastPosition };
