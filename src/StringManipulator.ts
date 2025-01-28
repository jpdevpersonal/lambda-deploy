export class StringManipulator {
    public reverseInput(body: string): string{
        if(!body){
            throw new Error ("body is empty")
        }

        return body.split('').reverse().join('');
    };
}

