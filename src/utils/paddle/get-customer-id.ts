import { auth, currentUser } from '@clerk/nextjs/server';
import { createClient } from '@/utils/supabase/server';

export async function getCustomerId() {
  const { userId } = await auth();

  if (!userId) {
    return '';
  }

  const user = await currentUser();

  if (user?.emailAddresses[0]?.emailAddress) {
    const supabase = await createClient();
    const customersData = await supabase
      .from('customers')
      .select('customer_id,email')
      .eq('email', user.emailAddresses[0].emailAddress)
      .single();
    if (customersData?.data?.customer_id) {
      return customersData?.data?.customer_id as string;
    }
  }
  return '';
}
