export class Time {
    hours = 0
    minutes = 0
    seconds = 0

    increment() {
        this.seconds++

        if (this.seconds < 60) return this
        
        this.seconds = 0
        this.minutes++

        if (this.minutes < 60) return this


        this.minutes = 0
        this.hours++

        return this
    }
}