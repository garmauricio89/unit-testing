import { InMemoryDataService } from './in-memory-data.service';
describe('InMemoryDataService', () => {
    let memoryService: InMemoryDataService;

    beforeEach(() => {
        memoryService = new InMemoryDataService;
    });

    it('length should be 10', () => {
        expect(memoryService.createDb().heroes.length).toBe(10);
    });
});
