import SignupForm from '@/components/auth/signup/SignupForm';
import SignupAccessControl from '@/components/common/TermsAccessControl';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
};

export default async function Signup() {
  return (
    <>
      <div className="scrollbar-hidden h-[calc(100vh-72px)] w-screen min-w-[375px] overflow-y-auto bg-[var(--color-background)] py-10 sm:h-full sm:w-full sm:py-0 dark:bg-[var(--color-black)]">
        <SignupAccessControl>
          <div className="flex justify-center font-medium text-[#2B2926] sm:text-[32px] dark:text-[var(--color-background)]">
            <p className="font-bold text-[#FF9526]">멍멍일지</p>
            <p>와 함께하는 즐거운 반려생활</p>
          </div>

          <SignupForm />
        </SignupAccessControl>
      </div>
    </>
  );
}
