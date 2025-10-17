import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const PricingSection = () => {
    const services = [
    {
      title: 'Free',
      price: '0',
      description: 'Basic task management, single user, Email support.',
      features: [
        'Basic task management',
        'Single user',
        'Email support'
      ],
      button: 'Get Started'
    },
    {
      title: 'Pro',
      price: '14,899',
      description: 'Advanced features, reminders, unlimited projects Etc.',
      features: [
        'Advanced features',
        'Reminders',
        'Unlimited projects',
        'Collaboration tools',
        'File sharing'
      ],
      button: 'Choose Pro'
    },
    {
      title: 'Team',
      price: '19,999',
      description: 'Collaboration tools, shared worksapaces, priority support Etc.',
      features: [
        'Collaboration tools',
        'File sharing',
        'Team dashboards',
        'Shared workspaces',
        'Priority support'
      ],
      button: 'Contact Sales'
    }
  ];
  return (
      <section className="py-16 md:py-20">
        <div className="flex justify-center items-center md-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-[80%]">
            {services.map((service, index) => {
              const isFeatured = index === 1;
              return (
              <div key={index} className={`flex flex-col px-4 py-7 rounded-xl shadow-lg ${isFeatured ? 'bg-gradient-to-r border-2 border-green-600 md:scale-110' : 'bg-white'}`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div>
                    <h5 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h5>
                    <p>
                        <span className='text-2xl font-bold'>#{service.price}</span>/month
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    </div>
                </div>
                
                <div className="space-y-2">
                  <ul className="flex flex-col gap-1 text-sm p-0">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                        <FaCheckCircle className="w-3 h-3 font-bold text-gold rounded-full flex-shrink-0"/>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  <button className={`px-3 py-[0.6rem] mt-8 flex items-center gap-1 pricingBtn ${isFeatured ? 'bg-[#37ad3c] font-semibold text-white/95' : 'bg-black/15 text-black/95 font-semibold'}`}>
                    <a href={`/contact#form`} state={{ service: service.title }} className="text-black" style={{textDecoration: 'none'}}>
                    {service.button}
                    </a>
                  </button>
              </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default PricingSection