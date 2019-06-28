
const Demo = {
    meetingDay: 'Monday',
    meetings: 0,
    meetingDone: 0,
    addMeeting: function (num) {
        this.meetings = this.meetings + num;
        // meetings = meetings + num;   This is Wrong, that's why this keyword came out.
    },
    summary: function () { return ` you've ${this.meetings} meetings today. ` }
}

Demo.addMeeting(7)
console.log(Demo.summary())


Name = ()=> ` a     This is Ramesh Parajuli`
// HINT:
//  if we put return we have to add {} braces 
//  dont have to mention if we directly use or pass something;

console.log(Name().trim())