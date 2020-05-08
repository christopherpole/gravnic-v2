import LanguageCodes from '@/types/languageCodes';

interface IUser {
  fastMode: boolean;
  locale: LanguageCodes;
  progress: {
    [levelIndex: number]: number;
  };
  tutorialsSeen: {
    [name: string]: boolean;
  };
}

export default IUser;
