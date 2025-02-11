//blocking

//async code-->Event loop
//-->Call stack
//-->browser
//-->callback queue/TaskQueue

//->async code is handed to browser instead of executing which causes blocking
//->Browser starts timer of setTimeOut function
//->callback function in settimeout is sent to callback queue

//Eventloop-->checks when callstack is empty, it brings function from callback queue to main call stack 