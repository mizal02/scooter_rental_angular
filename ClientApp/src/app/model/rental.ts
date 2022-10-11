export interface Rental {
    id: string;
    startTime: Date;
    endTime: Date;
    completeTime: string;
    distanceString: string;
    isCompleted: boolean;
}