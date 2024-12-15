"use client"
import React, { useState, useEffect } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from "../chatbot/config"
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'
import "../chatbot/Chatbot.css"

export function ChatbotAvatar() {
    // Use state to manage client-side rendering
    const [isClient, setIsClient] = useState(false);
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    // Ensure component only renders on client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChatbotClick = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };
    const saveMessages = (messages, HTMLString) => {
        localStorage.setItem('chat_messages', JSON.stringify(messages));
    };

    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('chat_messages'));
        return messages;
    };
    // Only render on client side
    if (!isClient) return null;

    return (
        <div>
           

                <div
                    className="  bottom-10 left-[95%] right-0 z-30 fixed cursor-pointer"
                    onClick={handleChatbotClick}
                >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                            
                                <Avatar>
                                    <AvatarImage src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png" alt="@shadcn" />
                                    <AvatarFallback>BOT</AvatarFallback>
                                </Avatar>

                            </TooltipTrigger>
                            <TooltipContent>
                                <p>How May I help you?</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
          

            {isChatbotVisible && (
                <div className="fixed bottom-24 right-10 ">
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        messageHistory={loadMessages()}
                        runInitialMessagesWithHistory
                        saveMessages={saveMessages}
                    />
                </div>
            )}
        </div>
    )
}