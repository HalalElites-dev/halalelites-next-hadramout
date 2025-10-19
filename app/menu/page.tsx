
import React from 'react';
import { MENU_CATEGORIES } from '@/lib/constants';

// Define proper types for menu items
interface MenuItem {
  title: string
  description?: string
  price: string | number | { [key: string]: string | number } // allow numbers and objects
  image?: string
  Image?: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
}



const MenuSection = ({ title, items }: MenuSectionProps) => (
  <div className="mb-16">
    <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 text-brand-primary font-body">{title}</h2>

    {/* 1 column mobile, 2 columns desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map((item, index) => {
        const price = item.price;
        const isPrimitivePrice = typeof price === 'string' || typeof price === 'number';

        return (
          <div
            key={item.title ?? index}
            className="flex items-center border-b border-brand-primary pb-6 cursor-pointer hover:bg-brand-primary/10 rounded-lg p-4 transition-colors duration-200"
          >
            {/* Text */}
            <div className="flex-grow">
              <h3 className="text-2xl md:text-4xl font-semibold text-brand-primary ">{item.title}</h3>
              <p className="text-sm text-white">{item.description}</p>
            </div>

            {/* Price */}
            <div className="text-sm font-bold text-brand-primary ml-4 ">
              {isPrimitivePrice ? (
                <span>{'$'}{price}</span>
              ) : price && typeof price === 'object' ? (
                <div className="flex flex-col text-sm font-medium">
                  {Object.entries(price).map(([size, value]) => (
                    <div key={size} className="mt-1">
                      <span className="font-bold text-brand-primary mr-2">
                        {size.charAt(0).toUpperCase() + size.slice(1)}:
                      </span>
                      <span className="text-brand-primary">{'$'}{value}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);


const Page = () => {


  return (
    <div id="menu" className="min-h-screen bg-[#181717]">
     
      {/* Menu Content */}
      <div  className="max-w-6xl mx-auto px-4 py-16">
         <div className="  py-20 mb-12 justify-center flex items-center w-full"> 
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-7xl md:text-8xl font-bold  text-brand-primary italic">Menu</h1>
          </div>
        </div>
        {MENU_CATEGORIES.map((section) => (
          <MenuSection
            key={section.category}
            title={section.category}
            items={section.items as MenuItem[]}
          />
        ))}
      </div>

    </div>
  )
}

export default Page
