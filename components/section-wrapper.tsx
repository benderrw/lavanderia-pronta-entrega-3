import type { ReactNode } from "react";

/**
 * Padrão de espaçamento das seções:
 * - Horizontal: px-4 sm:px-6 lg:px-8 (todas as seções).
 * - Seções normais (default): max-w-6xl, py-16 lg:py-24, gap-8 entre filhos.
 * - Seções destaque (Sobre, Contato, FAQ): py-32; Sobre/Contato podem usar max-w-7xl.
 */
type SectionWrapperProps = {
  id: string;
  className?: string;
  containerClassName?: string;
  /** When set, section uses aria-labelledby instead of aria-label (e.g. "faq-heading") */
  ariaLabelledBy?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, className, containerClassName, ariaLabelledBy, children }: SectionWrapperProps) {
  const innerClasses = `mx-auto flex w-full flex-col gap-8 ${containerClassName ?? "max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"}`;
  const sectionClasses = className != null ? `w-full ${className}` : "w-full border-b border-border/40 bg-white";
  return (
    <section
      id={id}
      className={sectionClasses}
      aria-label={ariaLabelledBy ? undefined : id}
      aria-labelledby={ariaLabelledBy ?? undefined}
    >
      <div className={innerClasses}>
        {children}
      </div>
    </section>
  );
}

