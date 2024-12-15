"use client";

import { createChatBotMessage } from "react-chatbot-kit";
import ServiceButtons from "./ServiceButtons";

const botName = "ServiceBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi! I'm ${botName}. Click on a service below to learn more!`,
      { widget: "serviceButtons" }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
  },
  widgets: [
    {
      widgetName: "serviceButtons",
      widgetFunc: (props) => <ServiceButtons {...props} />,
    },
  ],
};

export default config;
