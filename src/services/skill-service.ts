import { SkillTree } from 'skill';

export class SkillService {
    public languageSkills: SkillTree = {
        type: 'Programming languages', values: [
            { name: 'TypeScript', type: 'programming', capability: 5 },
            { name: 'JavaScript', type: 'programming', capability: 5 },
            { name: 'NodeJS', type: 'programming', capability: 2 },
            { name: 'Java', type: 'programming', capability: 3 },
            { name: 'Groovy', type: 'programming', capability: 5 }
        ]
    };

    public css: SkillTree = {
        type: 'Style', values: [
            { name: 'css', type: 'other', capability: 3 },
            { name: 'Sass/scss', type: 'other', capability: 3 }
        ]
    };

    public tools: SkillTree = {
        type: 'Tools', values: [
            { name: 'IntelliJ Idea', type: 'tool', capability: 5 },
            { name: 'Visual studio Code', type: 'tool', capability: 5 },
            { name: 'Git', type: 'tool', capability: 5 },
            { name: 'Notepad++', type: 'tool', capability: 5 }
        ]
    };

    public frameworks: SkillTree = {
        type: 'Frameworks', values: [
            { name: 'Aurelia', type: 'framework', capability: 4 },
            { name: 'Grails', type: 'framework', capability: 5 },
            { name: 'Spring', type: 'framework', capability: 5 },
        ]
    };

    public buildTools: SkillTree = {
        type: 'Build tools', values: [
            { name: 'npm', type: 'buildTool', capability: 3 },
            { name: 'Gradle', type: 'buildTool', capability: 3 },
            { name: 'Maven', type: 'buildTool', capability: 3 }
        ]
    };

    public database: SkillTree = {
        type: 'Database', values: [
            { name: 'MongoDb', type: 'database', capability: 4 },
            { name: 'MariaDB', type: 'database', capability: 3 },
            { name: 'mySQL', type: 'database', capability: 3 }
        ]
    };
    public getAllSkils() {
        return [this.languageSkills, this.frameworks, this.buildTools, this.css, this.tools, this.database];
    }
}
