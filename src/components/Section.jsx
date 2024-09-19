export const Section = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={`px-5 py-[24px] text-white flex flex-col items-center gap-8 mb-16 ${className}`}>
      {children}
    </section>
  )
}
