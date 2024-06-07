"use client";
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { useGetCallById } from '@/hooks/useGetCallById';

import { Loader } from 'lucide-react';

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  
  if(!isLoaded || isCallLoading)return <Loader />

  return (
   <main className='h-screen w-full'>
    <StreamCall call={call}>
      <StreamTheme>
{!isSetupComplete ?(
  <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
): (
  <MeetingRoom />
)}
      </StreamTheme>
    </StreamCall>
   </main>
  )
}

export default MeetingPage