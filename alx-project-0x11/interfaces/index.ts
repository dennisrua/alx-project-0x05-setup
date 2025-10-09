import { ReactNode } from 'react';

export interface ReactComponentPrompts {
  children: ReactNode;
}

export interface GenerateImageProps {
  imageUrl: string;
  prompt: string;
  width?: string;
  height?: string;
  action: (imagePath: string) => void;
}

export type RequestProps = {
  prompt: string;
};

export type ImageProps = Pick<GenerateImageProps, 'imageUrl' | 'prompt'>;
