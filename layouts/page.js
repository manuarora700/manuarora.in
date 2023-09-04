import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import ViewCounter from "@/components/ViewCounter";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function PageLayout({ children }) {
    return (
        <>
            <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
                <div className="prose dark:prose-dark max-w-none w-full">
                    {children}
                </div>
            </article>
        </>
    );
}
