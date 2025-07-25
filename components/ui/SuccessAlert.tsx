'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import checkAnimation from "@/lotties/Check Mark - Success.json";
import Lottie from "lottie-react";

interface SuccessAlertProps {
    message: string;
    show?: boolean;
    onClose?: () => void;
}

const SuccessAlert = ({ message, show = true, onClose }: SuccessAlertProps) => {

    return (

        <div
            className="outline outline-1 outline-orange-600 text-orange-600 px-6 py-4 rounded-lg flex items-center gap-3 z-50 shadow-[0_12px_14px_rgba(234,88,12,0.1)]"
        >
            <div className="w-8">
                <Lottie animationData={checkAnimation} />
            </div>
            <span className="text-lg font-medium">{message}</span>
        </div>
    );
};

export default SuccessAlert;
