import { autoinject } from 'aurelia-framework';
import { SkillService } from './services/skill-service';
import { SkillTree } from './skill';

@autoinject
export class SkillTreeView {

    public skills: SkillTree[];

    constructor(private skillService: SkillService) { }

    protected async attached() {
        this.skills = await this.skillService.getAllSkils();
    }
}
