const User = "rmsparajuli";
const Pass = '123456';

const checkDetails = (data) => {
    if ((data.includes(123)) && (data.length > 8)) {
        console.log(true)
    } else { console.log(`${data} not match`) }
}

checkDetails(User)
checkDetails(Pass)