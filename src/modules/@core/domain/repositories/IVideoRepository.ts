
import EntityID from "@modules/@core/domain/value-objects/EntityID";
import Video from "../entities/Video";
import IRepository from "./IRepository";

export default interface IVideoRepository extends IRepository<Video> {
    addOrUpdateByVideoId(entity: Video): Promise<Video>; 
}
