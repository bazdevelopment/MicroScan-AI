import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';
ffmpeg.setFfmpegPath(ffmpegPath.path);
import fs from 'fs';
import os from 'os';
import path from 'path';

export const extractFrames = (
  videoPath: string,
  outputPath: string,
  intervalInSeconds = 5, // Extract one frame every 5 seconds
) => {
  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .outputOptions([
        `-vf fps=1/${intervalInSeconds}`, // Extract one frame every `intervalInSeconds` seconds
      ])
      .output(`${outputPath}/frame-%03d.jpg`)
      .on('end', resolve)
      .on('error', reject)
      .run();
  });
};

export const getBase64ImageFrames = async (
  videoFileName: string,
  videoBuf: Buffer,
) => {
  // Save the video buffer as a temporary file
  const tempVideoPath = path.join(os.tmpdir(), videoFileName);
  fs.writeFileSync(tempVideoPath, videoBuf);

  const framesDir = path.join(os.tmpdir(), 'frames');
  if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir);
  }

  await extractFrames(tempVideoPath, framesDir, 5);

  // Convert frames to base64
  const base64Frames = fs
    .readdirSync(framesDir)
    .filter((fileName) => fileName.endsWith('.jpg'))
    .map((fileName) => {
      const frameBuffer = fs.readFileSync(path.join(framesDir, fileName));
      return convertBufferToBase64(frameBuffer);
    });

  // Clean up temporary files
  fs.unlinkSync(tempVideoPath);
  fs.rmdirSync(framesDir, { recursive: true });

  return base64Frames;
};

export const convertBufferToBase64 = (buffer: Buffer) =>
  buffer.toString('base64');
