import { BlobData, BlobSasService } from "../../services/blob-sas-service";
import {inject} from 'aurelia-framework'

@inject(BlobSasService)
export class Home {
public text: string = "Let The Test Begin"
public starImgSrc: string = "https://starwars.blob.core.windows.net/images/star.svg";
public warsImgSrc: string = "https://starwars.blob.core.windows.net/images/wars.svg";
private blobData: BlobData;

constructor(private blobSasService: BlobSasService){}

async activate() {
    this.blobData = await this.blobSasService.GetSasParameters();
    this.starImgSrc = `${this.starImgSrc}?${this.blobData.sasParameters}`
    this.warsImgSrc = `${this.warsImgSrc}?${this.blobData.sasParameters}`
}

}
