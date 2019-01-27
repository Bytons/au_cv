import { autoinject } from 'aurelia-framework';
import { SkillService } from './services/skill-service';
import {  SkillTree } from './skill';

@autoinject
export class SkillTreeView {
public hardSkills: SkillTree[];

    constructor(private skillService: SkillService) { }

    protected async attached() {
        this.hardSkills = await this.skillService.getAllHardSkills();
    }
}
