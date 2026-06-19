import { cn } from '@/lib/utils'

interface SkillTagProps {
  label: string
  variant?: 'default' | 'accent' | 'ghost'
  role?: string
}

export function SkillTag({ label, variant = 'default', role }: SkillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium tracking-wide',
        variant === 'accent' &&
          'bg-accent/15 text-accent border border-accent/25',
        variant === 'ghost' &&
          'bg-muted/40 text-muted-foreground border border-border/50',
        variant === 'default' &&
          'bg-secondary text-secondary-foreground border border-border/40'
      )}
      role={role}
    >
      {label}
    </span>
  )
}
