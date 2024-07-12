import { PodcastModel } from "./podcast-module";

export interface PodcastTransferModel{
    statusCode: number,
    body: PodcastModel[];
}