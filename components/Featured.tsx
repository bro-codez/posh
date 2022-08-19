/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, BadgeCheckIcon, ShieldCheckIcon, ScaleIcon, UsersIcon } from '@heroicons/react/outline'

const features = [
  {
 
    id: 1,
    name: 'RESIDENTIAL DESIGN',
    href: '#',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
 
    id: 1,
    name: 'COMMERCIAL DESIGN',
    href: '#',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
 
    id: 1,
    name: 'OFFICE DESIGN',
    href: '#',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  }
]

export default function Featured() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 tracking-tight text-indigo-900 sm:text-4xl">
        WHAT WE DO
          </p>
        </div>

        <div className="mt-10">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {features.map((items) => (
            <a key={items.id} href={items.href} className="group">
              
              <h3 className="mt-4 text-sm text-gray-700">{items.name}</h3>
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
      </div>
    </div>
  )
}