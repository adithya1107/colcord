import React from 'react';
import { ArrowRight, Users, BookOpen, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="hero-gradient min-h-screen flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Transform Education
              <br />
              <span className="text-white">with ColCord</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
              One dashboard for students, educators, and institutions. 
              Streamline learning, teaching, and administration.
            </p>
            <Link 
              to="/product" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition"
            >
              Explore Features <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">For Everyone in Education</h2>
            <p className="text-gray-400 text-xl">Tailored solutions for every role</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <Users className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Students</h3>
              <p className="text-gray-400">Track progress, access resources, and collaborate with peers.</p>
            </div>

            <div className="feature-card">
              <BookOpen className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Educators</h3>
              <p className="text-gray-400">Manage classes, create content, and monitor student performance.</p>
            </div>

            <div className="feature-card">
              <Building2 className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Institutions</h3>
              <p className="text-gray-400">Streamline administration, analyze data, and ensure compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;