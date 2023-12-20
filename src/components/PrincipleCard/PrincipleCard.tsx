import { ReactNode } from 'react';
import './PrincipleCard.scss';

export interface PrincipleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const PrincipleCard = ({ title, description, icon }: PrincipleCardProps) => (
  <div className="principle-card">
    <div className="accent" />
    {icon}
    <div className="card-title">{title}</div>
    <div className="card-description">{description}</div>
    <div className="accent-corner" />
  </div>
);
