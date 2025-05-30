'use client';

import { ArrowDownIcon } from 'lucide-react';

export default function ArrowDownAnimated() {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10">
      <ArrowDownIcon 
        className="w-8 h-8 text-white animate-bounce cursor-pointer" 
        onClick={() => document.getElementById('importancia')?.scrollIntoView({ behavior: 'smooth' })}
      />
    </div>
  );
}

