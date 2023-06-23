import { Injectable, NestMiddleware } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request, NextFunction } from 'express';

@Injectable()
export class SearchMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const query  = req.query.query as string;
        const searchResalts = await this.userService.searchUser(query);
        req['searchResults'] = searchResalts;
        next();
    }
}