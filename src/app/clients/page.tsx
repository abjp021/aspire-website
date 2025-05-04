import ClientLogoSlider from '@/components/clients/ClientLogoSlider';

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Our Clients
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            We are proud to work with industry leaders and innovative companies across various sectors.
            Our partnerships drive mutual success and technological advancements.
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft-xl p-8">
          <ClientLogoSlider />
        </div>
      </div>
    </main>
  );
} 