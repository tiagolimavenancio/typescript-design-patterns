import AudioSystem from '../classes/AudioSystem';
import VideoSystem from '../classes/VideoSystem';
import InputSystem from '../classes/InputSystem';

export default class Facade {
    protected audio: AudioSystem;
    protected video: VideoSystem;
    protected input: InputSystem;

    constructor() {
        this.video = new VideoSystem();
        this.video.configureColors()
        this.video.configureResolution();

        this.input = new InputSystem();
        this.input.configureJoystick();
        this.input.configureKeyboard();

        this.audio = new AudioSystem();
        this.audio.configureChannels();
        this.audio.configureFrequency();
        this.audio.configureVolume();
    }

    public playAudio(file: string) {
        this.audio.playAudio(file);
    }

    public renderImage(image: string) {
        this.video.renderImage(image);
    }

    public readInput() {
        this.input.readInput();
    }

}