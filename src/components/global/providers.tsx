"use client";

import SmoothLayout from '@/constants/smoothscroll';
import React from 'react'
import { Toaster } from "sonner";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <SmoothLayout>
            <Toaster
                richColors
                theme="dark"
                position="bottom-center"
            />
            {children}
        </SmoothLayout>
    )
};

export default Providers
