'use client';

import { ValuationPage } from '@/app/components/ValuationPage';
import { useRouter } from 'next/navigation';

export default function ValuePage({ params }: { params: { address: string } }) {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleSearchClick = () => {
    router.push('/?search=true');
  };

  // Decode the address from the URL
  const decodedAddress = decodeURIComponent(params.address);

  return (
    <ValuationPage 
      address={decodedAddress} 
      onHomeClick={handleHomeClick}
      onSearchClick={handleSearchClick}
    />
  );
}

