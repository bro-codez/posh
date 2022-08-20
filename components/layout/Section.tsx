/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';

type ISectionProps = {
  display?:string;
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children: ReactNode;
  className?:string;
  flex?:string;
  color?:string;
  text?:string;
  
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-7xl mx-auto text-black overflow-hidden border-b ${props.yPadding ? props.yPadding : 'py-0'} ${props.xPadding}`}
  >
   
    {(props.title || props.description) && (
      <div className="mb-2 tracking-widest text-center ">
         {props.description && (
          <div className=" font-acrosmyth  text-xl text-center  underline">{props.description}</div>
        )} {props.title && (
          <>
          <h2 className="text-2xl font-bold md:text-4xl tracking-widest text-center uppercase w-full mx-auto">{props.title}</h2>
          
          </>
        )}

      </div>
    )}

    {props.children}
  </div>
);

export { Section };
