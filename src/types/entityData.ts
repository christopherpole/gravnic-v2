interface IEntityData {
  id: number;
  x: number;
  y: number;
  fading?: boolean;
  color?: string;
  type: string;
  shrinking?: boolean;
  stuck?: boolean;
}

export default IEntityData;
