import React from "react";

type Props = {
    children: React.ReactNode;
};

const PublicLayout = ({ children }: Props) => {
    return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
};

export default PublicLayout;
