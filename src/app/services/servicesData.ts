import { 
  HiOutlineShieldCheck, 
  HiOutlineQrCode, 
  HiOutlineCloud, 
  HiOutlinePhone, 
  HiOutlineStar, 
  HiOutlineCheckCircle, 
  HiOutlineSquares2X2,
  HiOutlineServerStack,
  HiOutlineVideoCameraSlash,
  HiOutlineSignal,
  HiOutlineWrench
} from 'react-icons/hi2';

export const services = [
  {
    id: 'networking',
    title: 'Networking',
    category: 'networking',
    description: 'In today\'s interconnected world, reliable and secure networking solutions are essential for businesses to operate smoothly. We offer end-to-end networking services, from consultation and design to implementation and ongoing management.',
    icon: HiOutlineQrCode,
    color: 'blue',
    gradient: 'from-blue-500/20 to-purple-500/20',
    features: [
      'Network Design and Architecture - Custom-designed architecture optimizing data flow and scalability',
      'Network Monitoring and Management - 24/7 proactive monitoring and management',
      'Implementation and Integration - Seamless deployment and system integration',
      'Network Security - Advanced security with firewalls, intrusion detection, and VPN'
    ]
  },
  {
    id: 'data-centre',
    title: 'Data Centre and Server Solutions',
    category: 'infrastructure',
    description: 'Scalable, resilient, and high-performing infrastructure solutions with comprehensive security measures and compliance management.',
    icon: HiOutlineCloud,
    color: 'green',
    gradient: 'from-green-500/20 to-teal-500/20',
    features: [
      'Firewall and Intrusion Prevention - Blocking unauthorized access',
      'Endpoint Security - Protection for all connected devices',
      'Security Information and Event Management (SIEM) - Real-time threat analysis',
      'Risk Assessment and Compliance - Meeting industry standards'
    ]
  },
  {
    id: 'data-storage',
    title: 'Data Storage Solutions',
    category: 'infrastructure',
    description: 'Protecting your critical data with efficient and secure storage solutions that ensure accessibility and security.',
    icon: HiOutlineSquares2X2,
    color: 'yellow',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    features: [
      'High-Performance Storage - Rapid data access and processing',
      'Backup and Disaster Recovery - Business continuity assurance',
      'Data Archiving - Secure long-term storage solutions',
      'Secure & Scalable Solutions - Safe and accessible data management'
    ]
  },
  {
    id: 'virtualization',
    title: 'Virtualization',
    category: 'infrastructure',
    description: 'Advanced virtualization solutions to optimize resource utilization and enhance operational efficiency.',
    icon: HiOutlineServerStack,
    color: 'purple',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    features: [
      'Server Virtualization - Consolidate physical servers to reduce costs',
      'Desktop Virtualization - Access desktops from any device',
      'Network Virtualization - Enhanced security and traffic management',
      'Storage Virtualization - Optimized resource pooling'
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber-Security',
    category: 'security',
    description: 'Comprehensive protection for your digital assets and data with advanced security measures.',
    icon: HiOutlineShieldCheck,
    color: 'red',
    gradient: 'from-red-500/20 to-pink-500/20',
    features: [
      'Firewall and Intrusion Prevention - Advanced threat protection',
      'Endpoint Security - Complete device protection',
      'Security Information and Event Management - Swift threat response',
      'Risk Assessment and Compliance - Industry standard compliance'
    ]
  },
  {
    id: 'backup-solution',
    title: 'Backup Solutions',
    category: 'infrastructure',
    description: 'Safeguarding your business continuity with reliable and automated backup solutions.',
    icon: HiOutlineCloud,
    color: 'indigo',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    features: [
      'Automated Backup - Scheduled, intervention-free backups',
      'Cloud Backup Solutions - Secure offsite storage',
      'Data Recovery Services - Rapid recovery capabilities',
      'Backup Monitoring - Continuous process verification'
    ]
  },
  {
    id: 'video-conferencing',
    title: 'Video Conferencing & CCTV',
    category: 'security',
    description: 'Advanced communication and security systems for modern business needs.',
    icon: HiOutlineVideoCameraSlash,
    color: 'teal',
    gradient: 'from-teal-500/20 to-green-500/20',
    features: [
      'High-Definition Video Conferencing - Crystal-clear communication',
      'IP-Based Camera Surveillance - Scalable monitoring solutions',
      'Remote Access - Anywhere, anytime accessibility',
      'Secure Data Storage - Long-term video storage'
    ]
  },
  {
    id: 'wireless-networking',
    title: 'Wireless & Structured Cabling',
    category: 'networking',
    description: 'Streamlined, future-proof connectivity solutions for your business infrastructure.',
    icon: HiOutlineSignal,
    color: 'cyan',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    features: [
      'Wi-Fi Network Design - Optimized coverage solutions',
      'Access Point Deployment - Strategic connectivity placement',
      'Wireless Security - Comprehensive threat protection',
      'Network Performance Optimization - Consistent reliability'
    ]
  },
  {
    id: 'maintenance',
    title: 'Annual Maintenance Contracts',
    category: 'infrastructure',
    description: 'Proactive IT support ensuring uninterrupted operations and peak system performance.',
    icon: HiOutlineWrench,
    color: 'amber',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    features: [
      'Preventive Maintenance - Regular system check-ups',
      'Onsite and Remote Support - Quick issue resolution',
      'System Updates and Patches - Current security measures',
      'Performance Optimization - Regular system evaluation'
    ]
  }
] as const;

export type Service = typeof services[number];

export const stats = [
  { 
    label: 'Network Uptime', 
    value: '99.99', 
    suffix: '%',
    icon: HiOutlineCheckCircle,
    color: 'text-emerald-500',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  { 
    label: 'Protected Endpoints', 
    value: '50', 
    suffix: 'K+',
    icon: HiOutlineShieldCheck,
    color: 'text-blue-500',
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  { 
    label: 'Data Centers', 
    value: '10', 
    suffix: '+',
    icon: HiOutlineCloud,
    color: 'text-purple-500',
    gradient: 'from-purple-500/20 to-violet-500/20'
  },
  { 
    label: 'Client Satisfaction', 
    value: '99', 
    suffix: '%',
    icon: HiOutlineStar,
    color: 'text-amber-500',
    gradient: 'from-amber-500/20 to-yellow-500/20'
  }
];

export const testimonials = [
  {
    quote: "Aspiretechno's comprehensive networking and security solutions have revolutionized our infrastructure. Their 24/7 monitoring and rapid response have eliminated downtime concerns.",
    author: "James Wilson",
    role: "CTO, Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "The virtualization and data centre solutions provided by Aspiretechno have significantly reduced our operational costs while improving performance.",
    author: "Michael Chen",
    role: "IT Director, Global Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "Their proactive maintenance and backup solutions ensure our systems are always running optimally. The peace of mind is invaluable.",
    author: "Emily Rodriguez",
    role: "Operations Manager, FinTech Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  }
]; 