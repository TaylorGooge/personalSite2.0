import { S3Client, GetObjectCommand, GetS } from "@aws-sdk/client-s3";

async function getS3Object(object){

    const creds = {
        accessKeyId: process.env.REACT_APP_AWS_KEY,
        accessSecretKey: process.env.REACT_APP_AWS_SECERET,

    }
    const REGION= 'us-east-1';
    const s3Client = new S3Client({region: REGION, credentials:creds, signatureVersion: 'v4',});
    const bucketParams = {
        Bucket: 'tgooge',
        Key: object
    }
    try{
       //const data = await s3Client.send(new GetObjectCommand(bucketParams));
       const data = await s3Client.getSignedUrl(bucketParams);
       return data
    } catch (err){
        console.log("Error", err)
    }

}
export {getS3Object}