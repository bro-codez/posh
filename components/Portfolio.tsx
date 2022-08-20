import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  let [categories] = useState({
    All: [
      {
        id: 1,
        href: '#',
        imageSrc: '/images/gyp1.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 2,
        href: '#',
        imageSrc: '/images/fun1.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 3,
        href: '#',
        imageSrc: '/images/fit1.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 4,
        href: '#',
        imageSrc: '/images/gyp2.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 5,
        href: '#',
        imageSrc: '/images/fun2.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 6,
        href: '#',
        imageSrc: '/images/fit2.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 7,
        href: '#',
        imageSrc: '/images/fun2.jpg',
        imageAlt: 'gypsum',
      },{
        id: 8,
        href: '#',
        imageSrc: '/images/gyp2.jpg',
        imageAlt: 'gypsum',
      },
    
    ],
    Gypsum: [
      {
        id: 1,
        href: '#',
        imageSrc: '/images/gyp1.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 2,
        href: '#',
        imageSrc: '/images/gyp2.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 3,
        href: '#',
        imageSrc: '/images/gyp3.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 4,
        href: '#',
        imageSrc: '/images/gyp4.jpg',
        imageAlt: 'gypsum',
      },
    ],
    Furniture: [
      {
        id: 1,
        href: '#',
        imageSrc: '/images/fun1.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 2,
        href: '#',
        imageSrc: '/images/fun2.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 3,
        href: '#',
        imageSrc: '/images/fun4.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 4,
        href: '#',
        imageSrc: '/images/fun5.jpg',
        imageAlt: 'gypsum',
      },
    ],
    Fittings: [
      
      {
        id: 1,
        href: '#',
        imageSrc: '/images/fit1.jpg',
        imageAlt: 'gypsum',
            },
      {
        id: 2,
        href: '#',
        imageSrc: '/images/fit2.jpg',
        imageAlt: 'gypsum',
      },
      {
        id: 3,
        href: '#',
        imageSrc: '/images/fit3.jpg',
        imageAlt: 'gypsum',  
      },
    ],
  })

  return (
    <div className="w-full max-w-7xl mx-auto px-2 py-16 sm:px-0 text-black">
       <div className="lg:text-center py-4 my-8">
          <p className="mt-2 text-3xl leading-8 tracking-tight text-black font-bold sm:text-4xl">
        PROJECTS
          </p>
        </div>
      <Tab.Group>
        <Tab.List className="max-w-md mx-auto flex space-x-1 rounded-xl p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-black focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-black hover:bg-white/[0.12] hover:text-black'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((category, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {category.map((items) => (
            <a key={items.id} href={items.href} className="group">
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
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
