export class Booking{
    constructor(
        public id: string,
        public plceId: string,
        public userId: string,
        public placeTitle: string,
        public guestNumber: number
    ){}
}