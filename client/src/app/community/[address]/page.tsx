'use client';

import { CommunityInsightsPage } from '@/app/components/CommunityInsightsPage';
import { useRouter } from 'next/navigation';

export default function CommunityPage({ params }: { params: { address: string } }) {
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
    <CommunityInsightsPage 
      address={decodedAddress} 
      onHomeClick={handleHomeClick}
      onSearchClick={handleSearchClick}
    />
  );
}
