'use client';

import LandingPage from './landing/page';
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
        return <LandingPage />;
};

export default Page;
