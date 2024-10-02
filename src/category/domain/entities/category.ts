export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};
export class Category {
  constructor(public readonly props: CategoryProperties) {}

  public getName = () => {
    return this.props.name;
  };
}
