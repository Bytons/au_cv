export interface ISkill {
    name: string;
    capability: number;
    type: string; // programming, tool, social
}

export class SkillTree {
    public type: string;
    public values: ISkill[];
}
