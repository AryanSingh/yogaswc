import * as React from "react";

import { cn } from "../../lib/utils";

function Accordion({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("w-full", className)} {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<"details">) {
  return (
    <details
      className={cn("border-b border-border py-1", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"summary">) {
  return (
    <summary
      className={cn(
        "cursor-pointer list-none py-3 text-sm font-medium marker:content-none",
        className,
      )}
      {...props}
    >
      {children}
    </summary>
  );
}

function AccordionContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("pb-3 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
