import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Aspiretechno Global',
  description: 'Get in touch with Aspiretechno Global. We\'re here to help with your technology needs and answer any questions you may have.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 