"use client"

import React from 'react';
import ServiceButtons from './ServiceButtons'; // Import the new component

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    
    const addServiceButtons = () => {
        const serviceButtonsWidget = createChatBotMessage("Want to know more? Please give us a Call", {
            widget: "serviceButtons",
        });
        
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, serviceButtonsWidget],
        }));
    }
    
    const handleHello = () => {
        const botMessage = createChatBotMessage("Hello! I'm here to help you understand our services. What would you like to know?");
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    const handleShiftingNarratives = () => {
        const botMessage = createChatBotMessage('Shifting The Narratives is our strategic approach to transform negative PR into positive outcomes. We use User-Generated Content (UGC) to reshape public perception and create a more favorable narrative for your brand.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        addServiceButtons();
    };
    
    const handleOnlinePresence = () => {
        const botMessage = createChatBotMessage('Building An Online Presence involves strategically positioning your brand in relevant communities and forums. We ensure your brand gets noticed by the right audience, increasing visibility and engagement.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        addServiceButtons();
    };

    const handlePersonalBranding = () => {
        const botMessage = createChatBotMessage('Personal Branding is about making founders more relatable. We help you create a authentic, compelling personal brand that connects deeply with your audience, making your brand more human and approachable.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        addServiceButtons();
    };
    
    const handleContentFunnel = () => {
        const botMessage = createChatBotMessage('Our Content Funnel service is designed to boost your online presence dramatically. We promise a 20% increase in website traffic and 35% boost in brand awareness through comprehensive content solutions including research, SEO-optimized blogs, and engaging videos.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        addServiceButtons();
    };
    
    const handleUnknownQuery = () => {
        const botMessage = createChatBotMessage('I\'m sorry, I couldn\'t understand your specific query. Could you please ask about our services like Shifting Narratives, Online Presence, Personal Branding, or Content Funnel?');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        addServiceButtons();
    };
    // Add a method to render service buttons
    const renderServiceButtons = () => <ServiceButtons actionProvider={{
        handleShiftingNarratives,
        handleOnlinePresence,
        handlePersonalBranding,
        handleContentFunnel
    }} />;
    


    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleShiftingNarratives,
                        handleOnlinePresence,
                        handlePersonalBranding,
                        handleContentFunnel,
                        handleUnknownQuery,
                        renderServiceButtons
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;