import { ReactNode } from "react";

interface ServiceLayoutProps {
    mainContent: ReactNode;
    sidebarContent: ReactNode;
}

export default function ServiceLayout({
    mainContent,
    sidebarContent,
}: ServiceLayoutProps) {
    return (
        <section className="section">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-9">{mainContent}</div>
                    <div className="md:col-span-3 overflow-visible">{sidebarContent}</div>
                </div>
            </div>
        </section>
    );
}
