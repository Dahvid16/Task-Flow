import React from 'react'
import { FaBell, FaHandshake } from 'react-icons/fa';
import { FaCalendar, FaMobileScreen } from 'react-icons/fa6';


const FeaturesSection = () => {
    const features = [
        {
          title: 'Smart Scheduling',
          description: 'AI Smart Scheduling optimizing your calendar by automatically suggesting the best times for meetings and tasks based on your preferences and availability.',
          icon: FaCalendar
        },
        {
          title: 'Team Collaboration',
          description: 'Share tasks, set deadlines, and communicate seamlessly with your team to boost productivity and ensure everyone is on the same page.',
          icon: FaHandshake
        },
        {
          title: 'Deadline Reminders',
          description: 'Get notified ahead of time about upcoming deadlines to ensure you never miss an important task or project milestone.',
          icon: FaBell
        },
        {
          title: 'Cross-Device Sync',
          description: 'Access your tasks and projects from any device, ensuring you stay productive whether you are at your desk or on the go.',
          icon: FaMobileScreen
        }
      ];

  return (
    <section className='flex flex-col justify-center items-center py-20 px-16'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-10/12 md:w-full">
            {features.map((value, index) => (
              <div key={index} className="card-elegant text-center hover-lift h-full">
                <span className='bg-green-300/20 p-4 rounded-full inline-block'>
                    <value.icon className="h-8 w-8" />
                </span>
                <h3 className="text-[1.5rem] font-semibold mb-3">{value.title}</h3>
                <p className="text-[.9rem]">{value.description}</p>
              </div>
            ))}
    </div>
    </section>
  )
}

export default FeaturesSection