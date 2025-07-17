import React, { useState } from 'react';
import { MessageCircle, Shield, FileText, Mail, MapPin, Menu, X, Bot, Zap, Users, BarChart3 } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Privacy Policy', id: 'privacy' },
    { name: 'Terms of Service', id: 'terms' },
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-xl">
                <Bot className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Barabot
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered Instagram messaging assistant that transforms customer conversations into meaningful connections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your Instagram customer service with intelligent automation and seamless human handoff
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-xl inline-block mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Replies</h3>
              <p className="text-gray-600 leading-relaxed">
                Respond to customer messages instantly with AI-powered automated replies that understand context and intent.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-indigo-100 p-4 rounded-xl inline-block mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Routing</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligently route conversations to human agents when needed, ensuring seamless customer experience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 p-4 rounded-xl inline-block mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get detailed analytics on customer interactions to improve engagement and optimize your messaging strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Barabot to enhance their Instagram customer experience
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );

  const PrivacyPolicyPage = () => (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy for Barabot</h1>
            <p className="text-gray-600">Last Updated: July 17, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Barabot we respects your privacy and is committed to protecting it through this Privacy Policy. This document explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Instagram Account Information:</strong> When you connect your Instagram Business Account, we collect your account ID, username, and associated public profile information.</li>
                  <li><strong>Messages:</strong> We collect and store the content of Instagram Direct Messages to provide automated replies and improve your experience.</li>
                  <li><strong>Technical Data:</strong> IP address, device information, and browser type for security and analytics purposes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your data to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Deliver our chatbot services and allow automated and human-assisted message replies.</li>
                  <li>Provide analytics and improve customer experience.</li>
                  <li>Comply with legal obligations and Meta Platform policies.</li>
                  <li>Prevent fraud, abuse, and spam.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Share Information</h2>
                <p className="text-gray-700">
                  We <strong>do not sell, rent, or share</strong> your personal information with third parties. We only share data when required by law or to enforce our Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Retention</h2>
                <p className="text-gray-700">
                  We retain Instagram message data only as long as necessary to provide our services. After termination of the user account, we delete data within <strong>30 days</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Deletion Requests</h2>
                <p className="text-gray-700">
                  You can request deletion of your data at any time by emailing us at <strong>imranewhait@gmail.com</strong>. We will process your request within <strong>7 business days</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Security</h2>
                <p className="text-gray-700">
                  We implement industry-standard security measures such as encryption, secure servers, and restricted access to protect your data from unauthorized access or disclosure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. GDPR and International Users</h2>
                <p className="text-gray-700 mb-4">If you are located in the European Union, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access, correct, or delete your personal data.</li>
                  <li>Restrict processing or object to our data use.</li>
                  <li>Lodge a complaint with a supervisory authority.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, contact us at <strong>imranewhait@gmail.com</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not directed to individuals under 13 years of age, and we do not knowingly collect data from them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. All changes will be posted on this page with an updated "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700">If you have any questions, contact us at:</p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    <strong>Email:</strong> imranewhait@gmail.com
                  </p>
                  <p className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <strong>Address:</strong> Rue du Gentilhomme 11, Brussels, 1000, Belgium
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TermsOfServicePage = () => (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service for Barabot</h1>
            <p className="text-gray-600">Last Updated: July 17, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Welcome to Barabot. By using our services, you agree to the following terms. Please read them carefully.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using Barabot, you confirm that you agree to these Terms of Service and our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
                <p className="text-gray-700 mb-4">Barabot provides businesses with an AI-powered messaging assistant for Instagram, enabling:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Automated replies to Direct Messages.</li>
                  <li>Smart routing and escalation to human agents.</li>
                  <li>Analytics for improving customer engagement.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate information when connecting your Instagram account.</li>
                  <li>Ensure you have the legal right to manage the account you connect.</li>
                  <li>Not use Barabot for spam, harassment, or any activity that violates Instagram or Meta's policies.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Activities</h2>
                <p className="text-gray-700 mb-4">You must NOT:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Use Barabot to send unsolicited messages or spam.</li>
                  <li>Attempt to reverse-engineer or exploit the platform.</li>
                  <li>Use the service for illegal activities.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Handling</h2>
                <p className="text-gray-700">
                  By using Barabot, you consent to our data practices as described in the Privacy Policy. You are responsible for ensuring compliance with any applicable data protection regulations in your region.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">Barabot is provided "as is" without warranties of any kind. We are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Any loss resulting from technical issues, downtime, or unauthorized access.</li>
                  <li>Any consequences of messages sent by automated systems.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-700">
                  We may suspend or terminate your access at any time for violation of these terms or misuse of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. Continued use of the service means you accept the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms are governed by and construed in accordance with the laws of Belgium, without regard to its conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700">If you have questions or concerns, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    <strong>Email:</strong> imranewhait@gmail.com
                  </p>
                  <p className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <strong>Address:</strong> Rue du Gentilhomme 11, Brussels, 1000, Belgium
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfServicePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Barabot</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Barabot</span>
              </div>
              <p className="text-gray-400">
                AI-powered Instagram messaging assistant for modern businesses.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setCurrentPage('privacy')}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setCurrentPage('terms')}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  imranewhait@gmail.com
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Brussels, Belgium
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Barabot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;