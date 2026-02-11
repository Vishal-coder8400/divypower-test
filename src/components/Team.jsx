import React, { useState } from 'react'
import { Users, Lock, ExternalLink, Shield, Clock, UserCheck } from 'lucide-react'
import Footer from './Footer'

const Team = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section>

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Team Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure access to internal team resources and collaboration tools
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Sampark Access Portal</h2>
            </div>
            <p className="text-blue-100">
              Internal team collaboration and management system
            </p>
          </div>

          <div className="p-8 md:p-12">
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Secure Access</h3>
                  <p className="text-sm text-gray-600">Authorized personnel only</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Team Collaboration</h3>
                  <p className="text-sm text-gray-600">Work together seamlessly</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">24/7 Available</h3>
                  <p className="text-sm text-gray-600">Access anytime, anywhere</p>
                </div>
              </div>
            </div>

            {/* Access Button */}
            <div className="text-center">
              <a 
                href="https://so365.in/smartapp_ess"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  type="button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-8 py-5 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-4">
                    <div className="text-left">
                      <div className="text-2xl font-bold mb-1 flex items-center gap-2">
                        Access Sampark Portal
                        <ExternalLink className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                      </div>
                      <div className="text-sm font-normal text-orange-50">
                        For Internal Team Members Only
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shine"></div>
                </button>
              </a>

              <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                This portal requires authentication and authorization
              </p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Need Access?</h3>
            <p className="text-gray-600 mb-4">
              Contact your team administrator or HR department to request access credentials for the Sampark portal.
            </p>
            <a href="/contact" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2">
              Contact Support
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-6 shadow-lg text-white">
            <h3 className="font-bold mb-3 text-lg">Having Issues?</h3>
            <p className="text-blue-100 mb-4">
              If you're experiencing login problems or technical difficulties, our support team is here to help.
            </p>
            <a href="mailto:admin@divypower.com" className="text-orange-300 font-semibold hover:text-orange-200 transition-colors inline-flex items-center gap-2">
              Email IT Support
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
            }
            to {
                opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
            }
            }
            
            .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-shine {
          animation: shine 0.6s ease-in-out;
        }
      `}
      </style>
    </div>
    <Footer/>
        </section>
  )
}

export default Team