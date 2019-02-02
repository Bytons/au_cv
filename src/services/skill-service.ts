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
            { name: 'Service workers', type: 'abstraction', capability: 4, image: './images/logos/worker-logo.svg' },
            { name: 'Single page applications', type: 'abstraction', capability: 4, image: './images/logos/spa-logo.png' },
            { name: 'Progressive web applications', type: 'abstraction', capability: 3, image: './images/logos/pwa-logo.png' },
            { name: 'User-centered design', type: 'abstraction', capability: 3, image: './images/logos/user-design-logo.svg' },

        ]
    };

    public css: SkillTree = {
        type: 'Style & Web', values: [
            { name: 'HTML5', type: 'other', capability: 5, image: './images/logos/html5-logo.png' },
            { name: 'CSS', type: 'other', capability: 3, image: './images/logos/css-logo.png' },
            { name: 'Sass/scss', type: 'other', capability: 3, image: './images/logos/sass-logo.png' }
        ]
    };

    public tools: SkillTree = {
        type: 'Tools', values: [
            { name: 'Git', type: 'tool', capability: 5, image: './images/logos/git-logo.png' },
            { name: 'IntelliJ Idea', type: 'tool', capability: 5, image: './images/logos/intelliJ-logo.png' },
            { name: 'Visual studio Code', type: 'tool', capability: 5, image: './images/logos/vscode-logo.png' },
            { name: 'Notepad++', type: 'tool', capability: 5, image: './images/logos/notepad-logo.png' }
        ]
    };

    public frameworks: SkillTree = {
        type: 'Frameworks', values: [
            { name: 'Aurelia', type: 'framework', capability: 4, image: './images/logos/aurelia-logo.jpg' },
            { name: 'Grails', type: 'framework', capability: 5, image: './images/logos/grails_logo.svg' },
            { name: 'Spring', type: 'framework', capability: 5, image: './images/logos/spring-logo.png' },
        ]
    };

    public buildTools: SkillTree = {
        type: 'Build tools', values: [
            { name: 'npm', type: 'buildTool', capability: 3, image: './images/logos/npm-logo.png' },
            { name: 'Gradle', type: 'buildTool', capability: 2, image: './images/logos/gradle-logo.svg' },
            { name: 'Maven', type: 'buildTool', capability: 1, image: './images/logos/maven-logo.png' }
        ]
    };

    public database: SkillTree = {
        type: 'Database', values: [
            { name: 'MongoDb', type: 'database', capability: 4, image: './images/logos/mongodb-logo.png' },
            { name: 'MariaDB', type: 'database', capability: 3, image: './images/logos/mariadb-logo.png' },
            { name: 'mySQL', type: 'database', capability: 3, image: './images/logos/mySQL-logo.png' }
        ]
    };
    public getAllSkils() {
        return [this.languageSkills, this.abstractions, this.frameworks, this.buildTools, this.css, this.tools, this.database];
    }
}
