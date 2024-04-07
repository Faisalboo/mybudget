type ButtonProps = {
  name: string;
};

export function Button({ name }: ButtonProps) {
  return <button>{name}</button>;
}
