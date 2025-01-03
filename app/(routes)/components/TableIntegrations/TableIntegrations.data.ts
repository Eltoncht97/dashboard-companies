export interface TableIntegrationProps {
  app: string;
  icon: string;
  type: "Finance" | "CRM" | "Marketplace";
  rate: number;
  profit: number;
}

export const data: TableIntegrationProps[] = [
  {
    app: "Stripe",
    icon: "/images/stripe.png",
    type: "Finance",
    rate: 60,
    profit: 450,
  },
  {
    app: "Zapier",
    icon: "/images/zapier.png",
    type: "CRM",
    rate: 20,
    profit: 123.5,
  },
  {
    app: "Shopify",
    icon: "/images/shopify.png",
    type: "Marketplace",
    rate: 80,
    profit: 879.89,
  },
];
