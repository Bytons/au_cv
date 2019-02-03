export class App {

    protected workerRegistration: ServiceWorkerRegistration;
    protected skillHeading: string = 'Technologies I am comfortable with';

    public async activate() {
        if ('serviceWorker' in navigator) {
            this.workerRegistration = await navigator.serviceWorker.register('./service-worker.js');
        } else {
            this.workerRegistration = null;
        }
    }
}
