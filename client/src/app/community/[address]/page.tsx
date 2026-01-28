'use client';

import { useRouter } from 'next/navigation';
import { CommunityInsightsPage } from '@/views/community-insights-view';

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
