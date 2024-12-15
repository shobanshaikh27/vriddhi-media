"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Video } from 'lucide-react'

export function ScheduleMeeting() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-12">
                    Schedule a Time To Discuss your needs!
                </h2>
                <div className="max-w-2xl mx-auto">
                    <Card className="relative">
                        <Badge
                            variant="secondary"
                            className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 rotate-12"
                        >
                            Currently
                        </Badge>
                        <CardHeader className="text-center space-y-2">
                            <p className="text-gray-600">Rishabh Nanda</p>
                            <h3 className="text-xl font-semibold">
                                Strategic Intro with Vriddhi Solutions
                            </h3>
                            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>30 min</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Video className="h-4 w-4" />
                                    <span>Web conferencing details provided upon confirmation.</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <h4 className="font-medium text-center">Select a Date & Time</h4>
                                <div className="flex items-center justify-center w-full">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="mx-auto"
                                        initialFocus
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                                        <button
                                            key={time}
                                            className="p-2 text-sm text-center rounded-md border hover:bg-blue-50 hover:border-blue-200 transition-colors"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

