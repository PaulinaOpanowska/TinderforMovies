import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ConfigService 
{
    constructor() {

    }

    public getBackendUrl(backendname: string): string 
    {
        let baseUrl = environment.baseBackednUrl;
        let targetBeckend = environment.backends[backendname] || `[${backendname}]`;
        targetBeckend = baseUrl + targetBeckend;
        return targetBeckend;
    }
}