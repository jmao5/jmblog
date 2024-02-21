export default interface Post {
  id: number;
  toonNum: number;
  title: string;
  imagePath: string;
  imagePath2: string;
  provider: string | null;
  genre: string;
  updateStatus: 'Y' | 'N';
  updateDate: [number, number, number];
  serialStatus: 'Y' | 'N';
  adultStatus: string | null;
  toonSummary: string;
  days: string;
  activedCount: number;
}