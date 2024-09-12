import NavbarCustom from "@/components/NavbarCustom";
import FooterCustom from "@/components/FooterCustom";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto pt-12 md:pt-24 lg:pt-32">{children}</main>
    </div>
  );
}
