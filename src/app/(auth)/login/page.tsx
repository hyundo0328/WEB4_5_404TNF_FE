import LoginForm from '@/components/auth/login/LoginForm';

export default async function Login() {
  return (
    <>
      <div className="w-screen max-w-[1548px] min-w-[375px] bg-[var(--color-background)] py-20 sm:w-[calc(100vw-276px)] sm:text-[32px]">
        <div className="flex justify-center font-medium text-[#2B2926]">
          <p className="font-bold text-[#FF9526]">멍멍일지</p>
          <p>와 함께하는 즐거운 반려생활</p>
        </div>
        <LoginForm />
      </div>
    </>
  );
}
