import * as React from "react";
import { cn } from "@/lib/utils";

export function DotLoader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="status" aria-label="Loading" className={cn("flex items-center gap-1.5", className)} {...props}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-2 rounded-full bg-current motion-safe:animate-pulse"
          style={{ animationDelay: `${i * 200}ms` }}
        />
      ))}
    </div>
  );
}
