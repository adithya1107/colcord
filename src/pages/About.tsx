import React from 'react';
import { Target, Heart, Lightbulb, MessageSquare, Layout, BarChart3, Puzzle } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About ColCord</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ColCord is a revolutionary college engagement platform designed to seamlessly integrate academic and social interactions within college communities. By simplifying how students and professors connect, ColCord offers features like assignment submissions, real-time communication, and activity tracking—all in one centralized space. Beyond streamlining academic processes, it fosters meaningful interactions through collaborative discussions and shared resources. With a focus on creating a connected, distraction-free digital ecosystem, ColCord empowers users to thrive in their college journey, making every interaction impactful and every engagement meaningful.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To make education more accessible, efficient, and engaging through 
                innovative technology solutions.
              </p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-300">
                Innovation, collaboration, and excellence in everything we do to 
                serve our educational community.
              </p>
            </div>

            <div className="text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading platform that transforms how education is delivered 
                and experienced globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We're Different */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We're Different</h2>
            <p className="text-gray-300">
              Our unique approach to educational technology sets us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <MessageSquare className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Real-Time Collaboration</h3>
              <p className="text-gray-300">
                Empower students and faculty to collaborate seamlessly through instant messaging, shared projects, and discussion forums. Foster a culture of collective growth and innovation.
              </p>
            </div>

            <div className="feature-card">
              <Layout className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Personalized Dashboards</h3>
              <p className="text-gray-300">
                Users can customize their dashboards with widgets tailored to their academic and social needs, ensuring an intuitive and engaging experience.
              </p>
            </div>

            <div className="feature-card">
              <BarChart3 className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
              <p className="text-gray-300">
                Gain actionable insights into academic progress, attendance trends, and engagement metrics, enabling data-driven decisions for both students and administrators.
              </p>
            </div>

            <div className="feature-card">
              <Puzzle className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Modular Integrations</h3>
              <p className="text-gray-300">
                ColCord integrates effortlessly with existing LMS and ERP systems, offering a unified platform without disrupting institutional workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300">
              A dedicated group of educators, technologists, and visionaries working 
              to transform education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="Team collaboration" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              alt="Team meeting" 
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;