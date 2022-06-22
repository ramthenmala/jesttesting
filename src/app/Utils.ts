import { UrlWithParsedQuery, parse } from "url";

export class Utils{
    /* istanbul ignore next */
    public static toUpperCase(str:string):string {
        if(!str){
            throw new Error("No Text Provided");
        }
        return str.toUpperCase()
    }

    /* istanbul ignore next */
    public static parseUrl(url:string): UrlWithParsedQuery {
        if(!url){
            throw new Error('No URL Provided');
        }
        return parse(url, true)
    }
}