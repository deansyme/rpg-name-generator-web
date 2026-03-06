"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const notionTasksUrl =
  "https://www.notion.so/08deaa29f9094521b4183ddf6d092ad0?v=2ff01e4c4bed80189412000c6716b9ec";

type NavItem = { href: string; label: string; external?: boolean };

const items: NavItem[] = [
  { href: "/", label: "Dashboard" },
  // Opens Notion board (new tab)
  { href: notionTasksUrl, label: "Tasks", external: true },
  { href: "/projects", label: "Projects" },
  { href: "/scheduler", label: "Scheduler" },
  { href: "/memory", label: "Memory" },
  { href: "/activity", label: "Activity" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="panel h-[calc(100vh-32px)] rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-white/55">Mission Control</div>
          <div className="text-lg font-semibold tracking-tight">Serenity HQ</div>
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-teal-300/80 shadow-[0_0_18px_rgba(45,212,191,0.35)]" />
      </div>

      <nav className="space-y-1">
        {items.map((it) => {
          const active = it.external
            ? false
            : it.href === "/"
              ? pathname === "/"
              : pathname.startsWith(it.href);

          const className = `block rounded-xl px-3 py-2 text-sm transition border ${
            active
              ? "bg-white/5 border-teal-300/25 text-white"
              : "border-transparent text-white/70 hover:text-white hover:bg-white/5"
          }`;

          if (it.external) {
            return (
              <a
                key={it.href}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {it.label}
              </a>
            );
          }

          return (
            <Link key={it.href} href={it.href} className={className}>
              {it.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/45">
        Calm. Sharp. Persistent.
      </div>
    </aside>
  );
}
