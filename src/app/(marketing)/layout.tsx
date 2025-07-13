import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full grow relative">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};
