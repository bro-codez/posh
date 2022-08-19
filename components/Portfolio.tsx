
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
  categories: [
    {
      id: 'gypsum',
      name: 'Gypsum',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '/images/gyp1.jpg',
          imageAlt: 'Beautiful Gypsum.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '/images/gyp3.jpg',
          imageAlt: 'Beautiful Gypsum',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '/images/gyp2.jpg',
          imageAlt: 'Beautiful Gypsum',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: '/images/gyp4.jpg',
          imageAlt: 'Beautiful Gypsum',
        },
      ],
    },
    {
      id: 'fittings',
      name: 'Fittings',
      featured: [
        {
          name: 'fittings',
          href: '#',
          imageSrc: 'images/fit1.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
        
          href: '#',
          imageSrc: 'images/fit2.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
        
        {
        
          href: '#',
          imageSrc: 'images/fit3.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
        
        {
        
          href: '#',
          imageSrc: 'images/fit4.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      
    },
    {
      id: 'furniture',
      name: 'Furniture',
      featured: [
        {
    
          href: '#',
          imageSrc: '/images/fun1.jpg',
          imageAlt: 'furniture',
        },
        {
          
          href: '#',
          imageSrc: '/images/fun2.jpg',
          imageAlt:
            'furniture',
        },
        
        {
          
          href: '#',
          imageSrc: '/images/fun3.jpg',
          imageAlt:
            'furniture',
        },
        
        {
          
          href: '#',
          imageSrc: '/images/fun5.jpg',
          imageAlt:
            'furniture',
        },
      ],
      
    },
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  

  return (
    <div className="bg-white">

      
  
      <div className="relative bg-white">
       

        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
         

              {/* Flyout menus */}
              <Popover.Group className="mx-auto ">
                <div className="h-full flex space-x-1">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent bg-blue-400 text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 my-4 pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                    
                                <div className="max-w-7xl mx-auto px-8">
                          
                                    <div className="lg:grid grid-cols-4 gap-x-8">
                                    <div className="col-span-1">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg  overflow-hidden group-hover:opacity-75">
                                          
                                            
                                          
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className=" object-cover"
                                            />
                                            
                                          </div>
                                          
                                          
                                        </div>
                                      ))}
                                    </div>
                                    </div>
                                   
                  
                                </div>
                    
                            </Popover.Panel>
                
                        </>
                      )}
                    </Popover>
                  ))}

                </div>
              </Popover.Group>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
