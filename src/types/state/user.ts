import LanguageCodes from '@/types/languageCodes';

interface IUser {
  fastMode: boolean;
  locale: LanguageCodes;
  darkMode: boolean;
  showTutorials: boolean;
  playMusic: boolean;
  playSfx: boolean;
  progress: {
    [levelIndex: number]: number;
  };
}

export default IUser;
