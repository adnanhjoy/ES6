let Name = ['Adnan', 'Farhan', 'Joy'];

for(names of Name){
    console.log(names)
}


let userInfo = {
    Name: 'Adnan Hossain',
    Roll: 934677,
    University: 'DIU',
}

for(students in userInfo){
    // console.log(students)
    // console.log(userInfo[students])
    console.log(`${students}: ${userInfo[students]}`)
}