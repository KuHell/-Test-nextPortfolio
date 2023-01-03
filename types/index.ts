/* Types collection */
export type Props = {
  children: React.ReactNode;
};

export type ProjectInfoProps = {
  id: number
  title: string
  image: string[]
  content: string[]
  date: string
  label: string
};

export type CardProps = {
  date: string;
  image: string[];
  label: string;
  title: string;
}