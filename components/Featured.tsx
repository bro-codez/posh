
import { AnnotationIcon, BadgeCheckIcon, ShieldCheckIcon, ScaleIcon, UsersIcon } from '@heroicons/react/outline'

const features = [
  {
 
    id: 1,
    name: 'RESIDENTIAL DESIGN',
    href: '#',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`,
    imageSrc: '/images/fun2.jpg',
    imageAlt: 'furniture.',
  },
  {
 
    id: 1,
    name: 'COMMERCIAL DESIGN',
    href: '#',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`,
    imageSrc: '/images/commercial.jpg',
    imageAlt: 'furniture',
  },
  {
 
    id: 1,
    name: 'OFFICE DESIGN',
    href: '#',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`,
    imageSrc: '/images/fun1.jpg',
    imageAlt: 'furniture',
  },
  {
 
    id: 1,
    name: 'FURNITURE',
    href: '#',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`,
    imageSrc: '/images/fun1.jpg',
    imageAlt: 'furniture',
  }
  
]

export default function Featured() {
  return (
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="lg:text-center py-4 my-8">
          <p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-black sm:text-4xl">
          WHAT WE DO
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-auto">
          {features.map((items) => (
            <a key={items.id} href={items.href} className="group w-full mx-auto">
              
              <h3 className="mt-4 font-bold text-2xl text-gray-700">{items.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{items.description}</p>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={items.imageSrc}
                  alt={items.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
    
      </div>
    
  )
}