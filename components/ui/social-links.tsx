import { cn } from '@/lib/utils'

export type SocialLink = {
  label: string
  href: string
  icon: string
  color?: string
}

type SocialLinksProps = {
  socials: readonly SocialLink[]
  className?: string
  itemClassName?: string
  iconClassName?: string
  showTitle?: boolean
  monochrome?: boolean
}

export function SocialIconGlyph({
  social,
  className = 'w-5 h-5',
  monochrome = false,
}: {
  social: SocialLink
  className?: string
  monochrome?: boolean
}) {
  return (
    <span
      className={cn('inline-block', className)}
      style={{
        backgroundColor: monochrome ? 'currentColor' : (social.color ?? 'currentColor'),
        maskImage: `url(${social.icon})`,
        WebkitMaskImage: `url(${social.icon})`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  )
}

export function SocialLinks({
  socials,
  className,
  itemClassName,
  iconClassName,
  showTitle = true,
  monochrome = false,
}: SocialLinksProps) {
  return (
    <div className={cn('flex gap-3', className)}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          title={showTitle ? social.label : undefined}
          className={cn('inline-flex items-center justify-center', itemClassName)}
        >
          <SocialIconGlyph social={social} className={iconClassName} monochrome={monochrome} />
        </a>
      ))}
    </div>
  )
}
