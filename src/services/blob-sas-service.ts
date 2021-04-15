export class BlobSasService {
    private basePath: string = "https://blobstoragesas20210414133236.azurewebsites.net"

    public async GetSasParameters(): Promise<BlobData> {
        const response = await fetch(`${this.basePath}/blob`);
        if(response.ok)
            return response.json();
        else
            console.log("i'm a bad programmer")
    }
}

export class BlobData {
    public sasParameters: string;
}