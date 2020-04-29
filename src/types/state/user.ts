import LanguageCodes from '@/types/languageCodes';

interface IUser {
  fastMode: boolean;
  locale: LanguageCodes;
  progress: {
    [levelId: string]: number;
  };
}

export default IUser;
