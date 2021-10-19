
import {app} from "..//app"
import request from 'supertest';
describe("checking status code",()=>{
    it("should return 404 path", async () => {
        const res = await request(app).get('/tea');
        expect(res.statusCode).toBe(404);
    });
    it("should return 200 path", async () => {
        const res = await request(app).get('/teams');
        expect(res.statusCode).toBe(200);
    });
    it("should return 404 path", async () => {
        const res = await request(app).get('/teams/chennai-super-');
        expect(res.statusCode).toBe(404);
    });
    it("should return 200 path", async () => {
        const res = await request(app).get('/teams/chennai-super-kings');
        expect(res.statusCode).toBe(200);
    });
    
})