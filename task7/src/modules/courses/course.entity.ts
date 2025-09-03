import type{ BaseEntity } from "../../shared/Repository";

export interface Course extends BaseEntity {
  title: string;
  description: string;
  image?: string;
  createdBy: string; 
}

