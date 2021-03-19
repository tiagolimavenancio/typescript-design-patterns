export default class AudioSystem {
    public configureFrequency() {
		console.log("Configured Frequency");
	}

	public configureVolume() {
		console.log("Configured Volume");
	}

	public configureChannels() {
		console.log("Configured Channels");
	}

	public playAudio(file: string) {
		console.log("Playing: " + file);
	}
}