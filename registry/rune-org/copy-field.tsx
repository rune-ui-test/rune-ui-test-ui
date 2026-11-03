"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function CopyField({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <div className={cn("flex w-80 items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 p-1.5 pl-3", className)}>
      <code className="flex-1 truncate text-sm text-neutral-200">{value}</code>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(value).catch(() => {});
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
