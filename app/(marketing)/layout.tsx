import React from "react";
import NavBar from "./_components/Navbar";

type Props = {
    children: React.ReactNode;
};

function MarketingLayout({ children }: Props) {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <NavBar />
            <main className="h-full pt-40">{children}</main>
        </div>
    );
}

export default MarketingLayout;
