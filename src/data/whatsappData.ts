export interface WhatsAppConfig {
  enabled: boolean;
  phoneNumber: string;
  displayPhone: string;
  position: "bottom-right" | "bottom-left";
  showOnlineDot: boolean;
  tooltipText: string;
  productPageTooltipPrefix: string;
  defaultMessage: string;
  productMessageTemplate: string;
}

export const DEFAULT_WHATSAPP_CONFIG: WhatsAppConfig = {
  enabled: true,
  phoneNumber: "919876543210",
  displayPhone: "+91 98765 43210",
  position: "bottom-right",
  showOnlineDot: true,
  tooltipText: "Chat on WhatsApp",
  productPageTooltipPrefix: "Inquire about",
  defaultMessage:
    "Hello, I am interested in corrugated boxes. I would like to discuss my packaging requirement.",
  productMessageTemplate:
    "Hello, I am interested in your {productName}. Please share specifications and quotation.",
};
