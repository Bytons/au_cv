import { SkillTree } from './skill';
export class SkillTreeComponent {
    private tree: SkillTree;

    public activate(data) {
        this.tree = data;
    }
}
