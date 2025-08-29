import React from "react";
import { twMerge } from "tailwind-merge";

type CardVariant = "default" | "elevated" | "outlined";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  padding = "md",
  hover = false,
  onClick,
}) => {
  const baseStyles =
    "bg-card text-card-foreground rounded-lg transition-all duration-200";

  const variants = {
    default: "shadow-sm",
    elevated: "shadow-lg",
    outlined: "border border-border shadow-none",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverStyles = hover
    ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
    : "";
  const clickableStyles = onClick ? "cursor-pointer" : "";

  const combinedClasses = twMerge(
    baseStyles,
    variants[variant],
    paddings[padding],
    hoverStyles,
    clickableStyles,
    className
  );

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={twMerge("flex flex-col space-y-1.5 pb-4", className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
  as: Component = "h3",
}) => {
  return (
    <Component
      className={twMerge(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p className={twMerge("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={twMerge("pt-0", className)}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={twMerge("flex items-center pt-4", className)}>
      {children}
    </div>
  );
};

export default Card;
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
