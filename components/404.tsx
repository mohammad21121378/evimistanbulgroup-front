'use client';

import { useMemo } from 'react';
import Lottie from 'lottie-react';
import { FaHouseChimney } from 'react-icons/fa6';

import notFoundAnimate1 from "@/lotties/404 Error.json";
import notFoundAnimate2 from "@/lotties/404 Page Animation.json";
import notFoundAnimate3 from "@/lotties/Lonely 404.json";
import notFoundAnimate4 from "@/lotties/404 planet animation.json";

import Button from './ui/Button';
import Link from 'next/link';

export default function NotFound() {
  const animations = [notFoundAnimate1, notFoundAnimate2, notFoundAnimate3, notFoundAnimate4];

  const randomAnimation = useMemo(() => {
    const index = Math.floor(Math.random() * animations.length);
    return animations[index];
  }, []);

  return (
    <div className='container'>
      <div className="flex items-center justify-center h-full mt-36 pt-6 min-h-[80dvh] ">
        <div className="px-12 pb-10 text-center">

          <div className="max-w-2xl mx-auto">
            <Lottie animationData={randomAnimation} loop={true} />
          </div>

          <div className='text-3xl font-bold text-gray-700 mt-10'>
            The desired page was not found
          </div>

          <Link href={'/'}>

            <Button flex size='lg' className='mx-auto mt-10 '>
              <FaHouseChimney className='text-xl' />
              <div className='mt-px'>Return home</div>
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
}
