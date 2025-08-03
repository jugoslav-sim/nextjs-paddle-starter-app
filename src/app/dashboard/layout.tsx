import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { DashboardLayout } from '@/components/dashboard/layout/dashboard-layout';

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  const { userId } = await auth();

  if (!userId) {
    redirect('/login');
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
