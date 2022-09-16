import ffmpeg from 'fluent-ffmpeg';

const videoFile = 'assets/sample.mp4';
const getMediaMetadata = async (source) => new Promise((resolve, reject) =>
    ffmpeg.ffprobe(source, (err, metadata) => {
        if (err) {
            return reject(err);
        }
        return resolve(metadata);
    }));

let metaData = await getMediaMetadata(videoFile);
console.log("MetaData:  " , metaData);
