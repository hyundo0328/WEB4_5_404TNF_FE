import { RefObject, useEffect, useState } from 'react';
import ToggleButton from './ToggleButton';

export default function Settings({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) {
  const [isNotiAll, setIsNotiAll] = useState(true);
  const [isNotiSchedule, setIsNotiSchedule] = useState(true);
  const [isNotiService, setIsNotiService] = useState(true);

  useEffect(() => {
    setIsNotiAll(sessionStorage.getItem('isNotiAll') === 'true');
    setIsNotiSchedule(sessionStorage.getItem('isNotiSchedule') === 'true');
    setIsNotiService(sessionStorage.getItem('isNotiService') === 'true');
  }, []);
  return (
    <div
      className="fixed bottom-[20%] left-[10%] flex w-58 flex-col items-center gap-2 rounded-[20px] border border-[var(--color-primary-200)] bg-[var(--color-background)] p-4 shadow-md dark:bg-[#343434] dark:text-[var(--color-background)]"
      ref={ref}
    >
      <div className="w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <span className="text-base font-semibold">다크 모드</span>
          </div>
          <ToggleButton id="mode" darkmode />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-lg font-semibold">알림 설정</h2>
          <div className="flex items-center justify-between">
            <span>전체</span>
            <ToggleButton id="all" isNoti={isNotiAll} />
          </div>
          <div className="flex items-center justify-between">
            <span>일정</span>
            <ToggleButton id="schedule" isNoti={isNotiSchedule} />
          </div>
          <div className="flex items-center justify-between">
            <span>서비스</span>
            <ToggleButton id="service" isNoti={isNotiService} />
          </div>
        </div>
      </div>
    </div>
  );
}
