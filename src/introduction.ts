import * as moment from 'moment';

export class Introduction {
    public heading: string = 'Who?';
    public birthDate = moment().diff(moment('19940116', 'YYYYMMDD'), 'years');
    public message: string = `A  ${this.birthDate} year old techie passionate about usability and use
     experience. I enjoy creating cool stuff out of scratch and automating everything. Life is simple when you only have to click once.`;
}
