import { t } from 'i18next'
import c from '../../assets/tools/c.webp'
import figma from '../../assets/tools/figma.webp'
import java from '../../assets/tools/java.webp'
import laravel from '../../assets/tools/laravel.webp'
import react from '../../assets/tools/react.webp'
import tailwind from '../../assets/tools/tailwind.webp'
import { Section } from '../Section'

export const Tools = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-2 mb-4">
        <p className="text-2xl text-font-light text-center">{t('tools.title')}</p>
      </div>

      <div className="flex flex-row items-center gap-8 flex-wrap justify-center">
        <img src={figma.src} alt="Logo Figma" className="h-12 white-logo hover:animate-spin-counter-clockwise" />
        <img src={tailwind.src} alt="Logo Tailwind" className="h-12 white-logo hover:animate-spin-counter-clockwise" />
        <img src={laravel.src} alt="Logo Laravel" className="h-16 white-logo hover:animate-spin-counter-clockwise" />
        <img src={react.src} alt="Logo React" className="h-16 white-logo hover:animate-spin-counter-clockwise" />
        <img src={c.src} alt="Logo C#" className="h-16 white-logo hover:animate-spin-counter-clockwise" />
        <img src={java.src} alt="Logo Java" className="h-16 white-logo hover:animate-spin-counter-clockwise" />
      </div>

      <p className="text-font-light text-center text-md">{t('tools.subtitle')}</p>
    </Section>
  )
}
