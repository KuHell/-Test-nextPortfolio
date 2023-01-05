import React from 'react';

/* Types collection */
export interface Props {
  children: React.ReactNode;
}

export interface ProjectInfoProps {
  id: number;
  title: string;
  image: string[];
  content: string[];
  date: string;
  label: string;
}

export interface CardProps {
  date: string;
  image: string[];
  label: string;
  title: string;
}
