import LanguageCodes from '@/types/languageCodes';

interface IUser {
  fastMode: boolean;
  locale: LanguageCodes;
  progress: {
    [levelIndex: number]: number;
  };
}

export default IUser;
