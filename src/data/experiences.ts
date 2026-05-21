import {
  Coffee,
  Mountain,
  Palette,
  Soup,
  TreePalm,
  Waypoints,
} from 'lucide-react';
import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    icon: Soup,
    title: 'Local food tour',
    description: 'Follow family recipes, market rituals, and street-side kitchens locals actually return to.',
  },
  {
    id: 2,
    icon: Waypoints,
    title: 'Cultural walking tour',
    description: 'Move through old quarters, temples, and neighborhoods with stories behind each doorway.',
  },
  {
    id: 3,
    icon: Mountain,
    title: 'Mountain adventure',
    description: 'Trace highland roads, village paths, terraces, and viewpoints with community-led stops.',
  },
  {
    id: 4,
    icon: TreePalm,
    title: 'Beach escape',
    description: 'Find quiet coves, fishing mornings, and coastal food trails beyond resort routines.',
  },
  {
    id: 5,
    icon: Palette,
    title: 'Handicraft workshop',
    description: 'Meet makers shaping lanterns, pottery, textiles, and everyday objects by hand.',
  },
  {
    id: 6,
    icon: Coffee,
    title: 'Coffee & local stories',
    description: 'Share slow cups with hosts who connect cafes to memory, craft, and city life.',
  },
];
