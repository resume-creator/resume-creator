export interface GenericSectionItemProps {
  entity: {
    name: string;
    link?: string;
  };
  duration: string;
  location: string;
  title: string;
  details?: string[];
}

export interface GenericSectionProps {
  items: GenericSectionItemProps[];
}
