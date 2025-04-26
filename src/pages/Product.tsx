import React from 'react';
import { 
  GraduationCap, Users, Building2, BookOpen, 
  Calendar, PieChart, MessageSquare, FileText,
  Database, Shield, Clock, Award
} from 'lucide-react';

const Product = () => {
  const features = {
    students: [
      { icon: Calendar, title: 'Schedule Management', description: 'Organize classes, assignments, and study sessions' },
      { icon: BookOpen, title: 'Learning Resources', description: 'Access course materials and study guides' },
      { icon: MessageSquare, title: 'Peer Collaboration', description: 'Connect and work with classmates' },
      { icon: PieChart, title: 'Progress Tracking', description: 'Monitor grades and performance metrics' }
    ],
    educators: [
      { icon: FileText, title: 'Course Creation', description: 'Design and manage course content' },
      { icon: Users, title: 'Class Management', description: 'Handle attendance and student participation' },
      { icon: Database, title: 'Grade Management', description: 'Record and analyze student performance' },
      { icon: Clock, title: 'Time Management', description: 'Schedule classes and office hours' }
    ],
    institutions: [
      { icon: Shield, title: 'Data Security', description: 'Ensure compliance and data protection' },
      { icon: Building2, title: 'Administrative Tools', description: 'Streamline operations and reporting' },
      { icon: Award, title: 'Performance Analytics', description: 'Track institutional metrics' },
      { icon: GraduationCap, title: 'Student Success', description: 'Monitor and support student achievement' }
    ]
  };

  const FeatureSection = ({ title, icon: Icon, features }) => (
    <div className="mb-24">
      <div className="flex items-center mb-8">
        <Icon className="h-8 w-8 mr-3" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <feature.icon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Features</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how ColCord empowers students, educators, and institutions with 
            powerful tools designed for modern education.
          </p>
        </div>

        <FeatureSection 
          title="For Students" 
          icon={Users} 
          features={features.students} 
        />

        <FeatureSection 
          title="For Educators" 
          icon={BookOpen} 
          features={features.educators} 
        />

        <FeatureSection 
          title="For Institutions" 
          icon={Building2} 
          features={features.institutions} 
        />

        {/* Contact Section */}
        <div className="text-center py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Education?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to learn more about how ColCord can benefit your institution.
          </p>
          <a 
            href="mailto:shrisai@colcord.in"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;