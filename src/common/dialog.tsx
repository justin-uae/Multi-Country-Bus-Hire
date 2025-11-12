import React from "react";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

interface DialogTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const DialogContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <DialogContext.Provider value={{ open, setOpen: onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild, children, ...props }: DialogTriggerProps & any) {
  const { setOpen } = React.useContext(DialogContext);
  
  if (asChild) {
    return React.cloneElement(React.Children.only(children) as React.ReactElement, {
      ...props,
      onClick: () => setOpen(true)
    });
  }
  return React.cloneElement(React.Children.only(children) as React.ReactElement, {
    ...props,
    onClick: () => setOpen(true)
  });
}

export function DialogContent({ children, className = "" }: DialogContentProps) {
  const { open, setOpen } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className={`relative bg-white rounded-xl shadow-xl w-full max-w-md max-h-[85vh] overflow-hidden ${className}`}>
        {/* Close Button - FORCED RIGHT POSITION */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-50 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          style={{ right: '16px', left: 'auto' }} // Force right positioning
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className = "" }: DialogHeaderProps) {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 ${className}`}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, className = "" }: DialogTitleProps) {
  return (
    <h2 className={`text-xl font-bold text-white text-center ${className}`}>
      {children}
    </h2>
  );
}

export function DialogDescription({ children, className = "" }: DialogDescriptionProps) {
  return (
    <p className={`text-blue-100 text-center text-sm mt-1 ${className}`}>
      {children}
    </p>
  );
}