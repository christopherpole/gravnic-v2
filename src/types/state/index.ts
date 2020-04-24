import IGame from './game';
import IUser from './user';
import IUi from './ui';

interface IState {
  game: IGame;
  user: IUser;
  ui: IUi;
}

export default IState;
