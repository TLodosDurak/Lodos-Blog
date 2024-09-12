import NavbarCustom from "@/components/NavbarCustom"
import FooterCustom from "@/components/FooterCustom"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
