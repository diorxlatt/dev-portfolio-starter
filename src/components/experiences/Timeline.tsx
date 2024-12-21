import React from 'react';
import { TimelineItem } from './TimelineItem';
import { Experience } from '../../types/experience';

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {experiences.map((experience) => (
        <TimelineItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}