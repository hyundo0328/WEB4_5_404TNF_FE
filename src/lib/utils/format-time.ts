import dayjs from 'dayjs';

export default function getElapsedTime(createdAt: string) {
  const now = dayjs();
  const writeTime = dayjs(createdAt);

  const gap = now.diff(writeTime, 's');

  if (gap < 119) return `1분 전`;
  if (gap < 3600) return `${Math.floor(gap / 60)}분 전`;
  if (gap < 86400) return `${Math.floor(gap / 3600)}시간 전`;

  return writeTime.format('YYYY.MM.DD');
}
