// app/components/Button.tsx
import Link from 'next/link';

//reUsable button link 

export default function ButtonLink({ href, children, color = 'blue' }) {

    const colorClass = color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                   color === 'red' ? 'bg-red-600 hover:bg-red-700' :
                   'bg-blue-600 hover:bg-blue-700';

  return (
    <Link href={href} className={`px-4 py-2 rounded-lg text-white font-semibold block text-center 
    w-full max-w-xs mx-auto my-2 transition-colors ${colorClass}`}>
    {children}
  </Link>
  );
}
