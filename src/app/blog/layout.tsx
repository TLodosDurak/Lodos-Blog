import NavbarCustom from "@/components/NavbarCustom";
import FooterCustom from "@/components/FooterCustom";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarCustom />
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <FooterCustom />
    </div>
  );
}
