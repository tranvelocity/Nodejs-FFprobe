import  ffprobe from 'ffprobe';
import  ffprobeStatic from 'ffprobe-static';

const videoFile = 'assets/sample.mp4';
const getMediaMetadata = async (source) => new Promise((resolve, reject) =>
    ffprobe(videoFile, { path: ffprobeStatic.path }, function (err, metadata) {
        if (err) return done(err);
        return resolve(metadata);
    }));

let metadata = await getMediaMetadata(videoFile);
console.log("MetaData :  " , metadata);
