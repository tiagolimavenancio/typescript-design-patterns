export default class VideoSystem {
    public configureResolution() {
        console.log('Configured Resolution');
    }

    public configureColors() {
        console.log('Configured the colors schema.');        
    }

    public renderImage(image: string) {
        console.log('Image: '+ image + 'render');
    }
}