import ServicePlan from "./ServicePlan";

const ServicePlans = () => {
  const servicePlans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: 10,
      features_included: [
        "Unlimited bandwidth",
        "5GB storage",
        "24/7 customer support",
      ],
      features_not_included: [
        "E-commerce functionality",
        "Custom domain",
        "Advanced analytics",
      ],
    },
    {
      id: "pro",
      name: "Pro Plan",
      price: 25,
      features_included: [
        "Unlimited bandwidth",
        "10GB storage",
        "E-commerce functionality",
        "Custom domain",
        "24/7 customer support",
      ],
      features_not_included: ["Advanced analytics"],
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 50,
      features_included: [
        "Unlimited bandwidth",
        "20GB storage",
        "E-commerce functionality",
        "Custom domain",
        "Advanced analytics",
        "24/7 customer support",
      ],
      features_not_included: [],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto py-4">
      {servicePlans.map((servicePlan) => (
        <ServicePlan key={servicePlan.id} servicePlan={servicePlan} />
      ))}
    </div>
  );
};

export default ServicePlans;
