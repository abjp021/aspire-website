import CaseStudyContent from '@/components/case-studies/CaseStudyContent';

// This would typically come from a CMS or database
const caseStudyData = {
  'digital-transformation': {
    title: "Digital Transformation Journey",
    client: "Aaradhya Associates",
    industry: "Software Development",
    duration: "6 Months",
    heroImage: "/images/case-studies/aaradhya-hero.jpg",
    problemImage: "/images/case-studies/aaradhya-problem.jpg",
    solutionImage: "/images/case-studies/aaradhya-solution.jpg",
    impactImage: "/images/case-studies/aaradhya-impact.jpg",
    problem: {
      title: "The Challenge",
      description: "Aaradhya Associates faced significant challenges in their IT infrastructure, leading to operational inefficiencies and increased costs. Their legacy systems were unable to keep up with the growing demands of their business.",
      challenges: [
        "Outdated IT infrastructure causing system slowdowns",
        "High maintenance costs for legacy systems",
        "Limited scalability for business growth",
        "Security vulnerabilities in existing systems",
        "Poor integration between different departments"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive digital transformation strategy that modernized their entire IT infrastructure while ensuring minimal disruption to their operations.",
      steps: [
        "Conducted a thorough assessment of existing systems and identified key pain points",
        "Designed and implemented a cloud-based infrastructure solution",
        "Migrated critical business applications to the cloud",
        "Implemented advanced security measures and monitoring systems",
        "Provided comprehensive training and documentation for the new system"
      ]
    },
    impact: {
      title: "The Impact",
      description: "The digital transformation led to significant improvements in operational efficiency and cost savings, while providing a solid foundation for future growth.",
      metrics: [
        {
          label: "Cost Reduction",
          value: "30",
          unit: "%"
        },
        {
          label: "System Performance",
          value: "200",
          unit: "%"
        },
        {
          label: "Security Incidents",
          value: "0"
        },
        {
          label: "Employee Productivity",
          value: "45",
          unit: "%"
        }
      ]
    }
  }
};

// This function tells Next.js which paths to pre-render at build time
export function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({
    slug: slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudyData[params.slug as keyof typeof caseStudyData];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Case study not found</h1>
      </div>
    );
  }

  // Custom Hero Section (like About page)
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div className="absolute inset-0 bg-network-mesh opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500 to-transparent opacity-30 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent-500 to-transparent opacity-30 rounded-tr-full"></div>
        <div className="absolute inset-0 bg-glow-primary"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center py-24 sm:py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {caseStudy.client} &middot; {caseStudy.industry} &middot; {caseStudy.duration}
            </p>
          </div>
        </div>
      </section>
      <CaseStudyContent
        {...caseStudy}
      />
    </div>
  );
} 