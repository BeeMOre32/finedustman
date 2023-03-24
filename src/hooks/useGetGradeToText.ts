export default function useGetGradeToText(grade: string) {
  const gradeToText = (grade: number) => {
    switch (grade) {
      case 1:
        return '좋음';
      case 2:
        return '보통';
      case 3:
        return '한때나쁨';
      case 4:
        return '나쁨';
      case 5:
        return '매우나쁨';
      default:
        return '정보없음';
    }
  };

  return gradeToText(Number(grade));
}
