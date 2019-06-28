const Demo = {
    meetingDay: 'Monday',
    meetings: 0,
    meetingDone: 0,
    addMeeting: function(num){
        meetings = meetings + num;
    }
}

let addMetting = (todo, meet = 0) => {
    return todo.meetings = todo.meetings + meet;
}

let meetingDone = (todo, meet) => {
    todo.meetingDone = todo.meetings - meet
    return (
        // `You've ${todo.meetingDone} meetings left`
        console.log(`You've ${todo.meetingDone} meetings left`)
    )
}

let resetDay = (todo) => {
    return (todo.meetings = 0,
        todo.meetingDone = 0
    )
}

this.addmeetings(7);
console.log(addMetting(Demo, 10));
console.log(meetingDone(Demo, 5));
console.log(Demo);
