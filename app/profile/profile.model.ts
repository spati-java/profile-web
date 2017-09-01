import {Education} from "./education.model";
import {WorkExperience} from "./WorkExperience.model";
export class Profile{
   public title:string;
    name:string;
    image:string;
    totalExp;
    technologies:string[];
    companiesWithLocaltions:string[];
    education:Education;
    workExperience:WorkExperience;
}