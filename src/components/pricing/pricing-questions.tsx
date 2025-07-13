"use client";

import React, { useState } from 'react'
import Wrapper from "../global/wrapper"
import Container from "../global/container"
import { cn } from "@/lib"
import { PlusIcon } from "lucide-react"
import { QUESTIONS } from "@/constants";

const PricingQuestions = () => {
    
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-left lg:text-center">
                            Wanna know more?
                        </h2>
                        <p className="text-base lg:text-lg text-muted-foreground text-left lg:text-center mt-2">
                            Let&apos;s dig deeper...
                        </p>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="mt-10 flex flex-col gap-4 max-w-3xl mx-auto w-full">
                        {QUESTIONS.map((question, index) => (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={cn(
                                    "w-full rounded-2xl border-[1.5px] border-border transition-all duration-300 cursor-pointer hover:border-primary/50",
                                    openIndex === index && "border-primary"
                                )}
                            >
                                <div className="flex items-center justify-between p-6">
                                    <h3 className="text-lg font-medium">
                                        {question.title}
                                    </h3>
                                    <PlusIcon
                                        className={cn(
                                            "size-5 text-muted-foreground transition-transform duration-300",
                                            openIndex === index && "rotate-45"
                                        )}
                                    />
                                </div>
                                <div
                                    className={cn(
                                        "max-h-0 overflow-hidden transition-all duration-300",
                                        openIndex === index && "max-h-[200px]"
                                    )}
                                >
                                    <p className="px-6 pb-6 text-muted-foreground">
                                        {question.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
}

export default PricingQuestions 