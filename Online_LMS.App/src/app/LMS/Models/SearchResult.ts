

export class SearchResult {
    public Id: string = '';
    public Name: string = '';
    public Author: string = '';
    public Genre: string = '';

    public Read(data: any): void {
        if (data) {
            this.Id = data.Id;
            this.Name = data.Name;
            this.Author = data.Author;
            this.Genre = data.Genre;
        }
    }
}