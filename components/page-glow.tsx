/** Theme-tinted wash behind a page's header. Parent <main> needs `relative isolate`. */
export function PageGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
      style={{ backgroundImage: 'var(--header-bg)' }}
      aria-hidden="true"
    />
  )
}
