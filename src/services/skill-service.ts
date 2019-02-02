import { SkillTree } from 'skill';

export class SkillService {
    public languageSkills: SkillTree = {
        type: 'Programming languages', values: [
            { name: 'TypeScript', type: 'programming', capability: 5, image: './images/logos/ts-logo.png' },
            { name: 'JavaScript', type: 'programming', capability: 5, image: './images/logos/JS-logo.png' },
            { name: 'NodeJS', type: 'programming', capability: 2, image: './images/logos/node-logo.png' },
            { name: 'Java', type: 'programming', capability: 3, image: './images/logos/java-logo.png' },
            { name: 'Groovy', type: 'programming', capability: 5, image: './images/logos/groovy-logo.png' }
        ]
    };

    public abstractions: SkillTree = {
        type: 'Abstractions', values: [
            { name: 'Service workers', type: 'abstraction', capability: 4 },
            { name: 'Single page applications', type: 'abstraction', capability: 4 },
            { name: 'Progressive web applications', type: 'abstraction', capability: 3 },
            { name: 'User-centered design', type: 'abstraction', capability: 3 },

        ]
    };

    public css: SkillTree = {
        type: 'Style & Web', values: [
            { name: 'HTML5', type: 'other', capability: 5 },
            { name: 'CSS', type: 'other', capability: 3 },
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
        return [this.languageSkills, this.abstractions, this.frameworks, this.buildTools, this.css, this.tools, this.database];
    }
}
