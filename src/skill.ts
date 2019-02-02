export interface ISkill {
    name: string;
    capability: number;
    type: string; // programming, tool, social
    image?: string;
}

export class SkillTree {
    public type: string;
    public values: ISkill[];
}
