import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";
import StatisticCard from "@/components/ui/StatisticCard";
import TestimonialCard from "@/components/ui/TestimonialCard";

const features = [
  {
    icon: "/images/auth.svg",
    title: "User Authentication",
    description: "Secure and seamless user registration and login with NextAuth.js.",
  },
  {
    icon: "/images/subscription-management.svg",
    title: "Subscription Management",
    description: "Manage your subscriptions effortlessly with Stripe integration.",
  },
  {
    icon: "/images/feature3.svg",
    title: "Responsive Design",
    description: "Tailwind CSS ensures your application looks great on all devices.",
  },
  {
    icon: "/images/feature4.svg",
    title: "Admin Dashboard",
    description: "Monitor and manage your application with an intuitive admin panel.",
  },
  // Additional Features Targeting Executives
  {
    icon: "/images/feature5.svg",
    title: "Cost Efficiency",
    description: "Reduce operational costs with our optimized starter kit.",
  },
  {
    icon: "/images/feature6.svg",
    title: "Scalability",
    description: "Easily scale your application to handle growing user bases.",
  },
  {
    icon: "/images/feature7.svg",
    title: "Analytics Integration",
    description: "Gain insights with built-in analytics and reporting tools.",
  },
  {
    icon: "/images/feature8.svg",
    title: "Security Compliance",
    description: "Ensure your application meets industry-standard security protocols.",
  },
];



const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-16">
          {/* Text Content */}
          <div className="flex flex-col items-start justify-center flex-1 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Accelerate Your SaaS Development by 40 Hours
            </h1>
            <p className="text-gray-600 mb-6">
              Designed for CEOs, CFOs, CTOs, and tech leaders, our Next.js SaaS Starter Kit provides all the essential features you need to kickstart your SaaS project, including user authentication, subscription management, billing, and more. Save valuable time and resources, and bring your product to market faster.
            </p>
            <Button href="#features">Discover Our Features</Button>
          </div>
          {/* Hero Image */}
          <div className="flex-1">
            <Image
              src="/images/hero.webp"
              alt="Hero Image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistic Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              Save Up to 40 Hours in Initial Development
            </h2>
            <StatisticCard
              icon="/images/statistic.svg"
              title="40+ Hours Saved"
              subtitle="Accelerate your project timeline and reduce time-to-market."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Top Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            What Executives Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Jane Doe"
              role="CEO, Tech Innovators"
              photo="/images/testimonial1.jpg"
              quote="This starter kit has transformed our development process, saving us countless hours and accelerating our time-to-market."
            />
            <TestimonialCard
              name="John Smith"
              role="CTO, FinServe Solutions"
              photo="/images/testimonial2.jpg"
              quote="The comprehensive features and seamless integration with Stripe have been invaluable in launching our SaaS platform efficiently."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-white mb-6 text-center max-w-md">
            Join thousands of leaders who have accelerated their SaaS development with our starter kit. Save time, reduce costs, and bring your product to market faster.
          </p>
          <Button href="/auth/register" className="bg-white text-blue-600 hover:bg-gray-200">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;