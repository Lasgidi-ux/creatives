import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <aside className="fixed inset-y-0 left-0 hidden w-[240px] flex-col justify-between border-r border-[color:var(--hair-2)] p-7 lg:flex">
        <div>
          <Link href="/" className="font-display text-2xl font-semibold">
            GLORY
          </Link>
          <nav className="mt-10 flex flex-col gap-1 text-sm text-[color:var(--color-ink-soft)]">
            <Link
              href="/dashboard/creator"
              className="rounded-md px-3 py-2 transition-colors hover:bg-[color:var(--color-panel)] hover:text-[color:var(--color-ink)]"
            >
              Creator
            </Link>
            <Link
              href="/dashboard/brand"
              className="rounded-md px-3 py-2 transition-colors hover:bg-[color:var(--color-panel)] hover:text-[color:var(--color-ink)]"
            >
              Brand
            </Link>
          </nav>
        </div>
        <p className="text-xs text-[color:var(--color-ink-mute)]">
          Phase 2 · scaffold. Auth (Clerk) + data (Supabase) + payouts (Stripe
          Connect) wire in next.
        </p>
      </aside>
      <div className="lg:pl-[240px]">{children}</div>
    </div>
  );
}
