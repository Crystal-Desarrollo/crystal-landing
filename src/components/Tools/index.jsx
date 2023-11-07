import { Section } from "../Section";

export const Tools = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-2 mb-4">
        <p className="text-2xl text-font-light text-center">
          Usamos las herramientas líderes en la industria
        </p>
      </div>

      <div className="flex flex-row items-center gap-8">
        <img
          src="/assets/figma.webp"
          alt="Logo Figma"
          className="h-12 white-logo"
        />
        <img
          src="/assets/tailwind.webp"
          alt="Logo Tailwind"
          className="h-12 white-logo"
        />
        <img
          src="/assets/laravel.png"
          alt="Logo Laravel"
          className="h-16 white-logo"
        />
        <img
          src="/assets/react.png"
          alt="Logo React"
          className="h-16 white-logo"
        />
        <img src="/assets/c.png" alt="Logo C#" className="h-16 white-logo" />
        <img
          src="/assets/java.png"
          alt="Logo Java"
          className="h-16 white-logo"
        />
      </div>

      <p className="text-font-light text-center text-md">
        Si necesitás algo que no está en la lista ¡no dudes en consultarnos!
      </p>
    </Section>
  );
};
