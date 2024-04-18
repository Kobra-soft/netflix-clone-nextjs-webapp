import useSwr from 'swr'

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/current', fetcher);
  
  console.log('User data:', data);
  console.log('Fetch error:', error);

  if (error) {
    console.error('Error fetching current user:', error);
  }
  
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;
