import fs from 'fs';
import * as path from 'path';
import { PodcastModel } from '../models/podcast-module';

const pathData = path.join(__dirname, '../repositories/podcasts.json');
export const  repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> =>{
    const rawData = fs.readFileSync(pathData, 'utf8');
    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}