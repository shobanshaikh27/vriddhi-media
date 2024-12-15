"use client"
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
      actions.renderServiceButtons();
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi ')) {
      actions.handleHello();
    } else if (lowercaseMessage.includes('narrative') || lowercaseMessage.includes('pr')) {
      actions.handleShiftingNarratives();
    } else if (lowercaseMessage.includes('online presence') || lowercaseMessage.includes('community') || lowercaseMessage.includes('forum')) {
      actions.handleOnlinePresence();
    } else if (lowercaseMessage.includes('personal brand') || lowercaseMessage.includes('founder')) {
      actions.handlePersonalBranding();
    } else if (lowercaseMessage.includes('content') || lowercaseMessage.includes('traffic') || lowercaseMessage.includes('blog')) {
      actions.handleContentFunnel();
    } else {
      actions.handleUnknownQuery();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;