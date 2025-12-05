'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { LandingPage } from './components/LandingPage';
import { SearchPage } from './components/SearchPage';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // Check if search query parameter is present
    const searchParam = searchParams.get('search');
    if (searchParam === 'true') {
      setShowSearch(true);
    }
  }, [searchParams]);

  const handleSearchClick = () => {
    setShowSearch(true);
    router.push('/?search=true');
  };

  const handleHomeClick = () => {
    setShowSearch(false);
    router.push('/');
  };

  if (showSearch) {
    return <SearchPage onClose={handleHomeClick} />;
  }

  return (
    <LandingPage 
      onSearchClick={handleSearchClick} 
      onHomeClick={handleHomeClick}
    />
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <LandingPage 
        onSearchClick={() => {}} 
        onHomeClick={() => {}}
      />
    }>
      <HomeContent />
    </Suspense>
  );
}
