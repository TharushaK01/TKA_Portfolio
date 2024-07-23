export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESRIPT = new Tag('TypeScript', 'darkred');
    static readonly HTML = new Tag('HTML', 'pink');
    static readonly CSS= new Tag('CSS', 'green');
    static readonly JAVASRIPT = new Tag('JavaScript', 'oragnge');
    static readonly SCSS = new Tag('SCSS', 'purple');



    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}
   