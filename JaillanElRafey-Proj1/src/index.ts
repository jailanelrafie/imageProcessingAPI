import sharp from 'sharp';
import fs from 'fs';
import { Request, Response } from 'express';
import path from 'path';

async function checkForImg(request: Request, response: Response): Promise<void | Response> {
  const filename: string = request.query.filename as unknown as string;
  const width: string = request.query.width as unknown as string;
  const height: string = request.query.height as unknown as string;

  try {
  const validImage: boolean = fs.existsSync(
    path.join(__dirname, `./../assets/${filename}.jpg`)
  );
  const alreadyResized: boolean = fs.existsSync(
    path.join(__dirname, `./../assets/${filename}-${width}x${height}.jpg`)
  );
  const validValues: boolean = isValid(width, height);

  if(validImage == false && validValues == false) {
    return response.send('Image does not exist and values for width and/or height are not correct');
  } else if (validImage === true && alreadyResized === false && validValues === true) {
    const resizedImgPath: string = await resizeImage(filename, width, height);
    return response.sendFile(resizedImgPath);
  } else if (validImage === false && alreadyResized === false && validValues === true) {
    return response.send('Image does not exist');
  } else if (alreadyResized === true) {
    return response.sendFile(
      path.join(__dirname, `./../assets/${filename}-${width}x${height}.jpg`)
    );
  } else if (validImage === true && validValues === false) {
    throw Error;
  }
  } catch (error) {
    return response.send('Please enter valid values for width and height');
  }
}

async function resizeImage(filename: string, width: string, height: string): Promise<string> {
  const imgPath = path.join(__dirname, `./../assets/${filename}.jpg`);
  const resizedImgPath = path.join(
    __dirname,
    `./../assets/${filename}-${width}x${height}.jpg`
  );
  const resizedImage = await sharp(imgPath)
    .resize(parseInt(width), parseInt(height))
    .toFile(resizedImgPath);

  return resizedImgPath;
}

function isValid(width: string, height: string): boolean {
  if(isNaN(Number(width)) || isNaN(Number(height))) {
    return false;
  } else if (parseInt(width) <= 0 || parseInt(height) <= 0) {
    return false;
  } else {
    return true;
  }
}

export { checkForImg, resizeImage };
