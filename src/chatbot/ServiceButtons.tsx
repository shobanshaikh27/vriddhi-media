"use client";

import { Button } from "@/components/ui/button";

interface ServiceButtonsProps {
  actionProvider: any;
}

const ServiceButtons: React.FC<ServiceButtonsProps> = ({ actionProvider }) => {
  const services = [
    {
      name: "Shifting Narratives",
      handler: actionProvider.handleShiftingNarratives,
    },
    {
      name: "Online Presence",
      handler: actionProvider.handleOnlinePresence,
    },
    {
      name: "Personal Branding",
      handler: actionProvider.handlePersonalBranding,
    },
    {
      name: "Content Funnel",
      handler: actionProvider.handleContentFunnel,
    },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center mx-2 p-2">
      {services.map((service, index) => (

          <Button
            key={index}
            onClick={service.handler}
            className="!bg-blue-500 !mx-2  text-white py-2 px-4 !rounded"
          >
            {service.name}
          </Button>
      ))}
    </div>
  );
};

export default ServiceButtons;
