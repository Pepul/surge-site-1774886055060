import { CheckCircle } from 'lucide-react';

export default function Page() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-lg md:text-xl mb-8">Empower your team with our cutting-edge SaaS solution.</p>
          <a href="#pricing" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Real-time Collaboration", "Analytics Dashboard", "Seamless Integration"].map((feature, index) => (
              <div key={index} className="bg-blue-100 rounded-lg p-6 text-center">
                <CheckCircle className="mx-auto text-blue-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              { plan: "Basic", price: "$29/mo" },
              { plan: "Pro", price: "$59/mo" },
              { plan: "Enterprise", price: "$99/mo" },
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
                <h3 className="text-xl font-semibold mb-4 text-center">{plan.plan}</h3>
                <p className="text-center text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-8 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    Feature 1
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    Feature 2
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    Feature 3
                  </li>
                </ul>
                <a href="#" className="block text-center bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition">Choose Plan</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}