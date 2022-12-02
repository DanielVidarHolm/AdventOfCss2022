
class Pomodoro{
    constructor(minutes){
        this.seconds = 0
        this.minutes = minutes
        this.isOn = false
        setInterval(this.run.bind(this),100)
    }
    run(){
       
            if (this.isOn){
                if (this.seconds === 0){
                    
                    if (this.minutes === 0){
                        document.querySelector('.circle-container').style.border = '5px solid green'
                        alert('done')
                        this.isOn = false
                    }else{
                        this.minutes--
                        this.seconds = 59
                    }
                    
    
                }else{
                    this.seconds--
                }
                if(this.seconds < 10 && this.minutes < 10){
                    document.querySelector('#timer').innerText = `0${this.minutes}:0${this.seconds}`
                }else if(this.seconds < 10){
                    document.querySelector('#timer').innerText = `${this.minutes}:0${this.seconds}`
                }else if(this.minutes < 10){
                    document.querySelector('#timer').innerText = `0${this.minutes}:${this.seconds}`
                }else {
                    document.querySelector('#timer').innerText = `${this.minutes}:${this.seconds}`
                }
            }else{
                

            }
            
        
    }
}
let pomodoro = new Pomodoro(1)
if(pomodoro.seconds < 10 && pomodoro.minutes < 10){
    document.querySelector('#timer').innerText = `0${pomodoro.minutes}:0${pomodoro.seconds}`
}else if(pomodoro.seconds < 10){
    document.querySelector('#timer').innerText = `${pomodoro.minutes}:0${pomodoro.seconds}`
}else if(pomodoro.minutes < 10){
    document.querySelector('#timer').innerText = `0${pomodoro.minutes}:${pomodoro.seconds}`
}else {
    document.querySelector('#timer').innerText = `${pomodoro.minutes}:${pomodoro.seconds}`
}
document.querySelector('#timerButton').addEventListener('click', (event) => {
    
    event.target.innerText = pomodoro.isOn ? 'Start' : 'Stop';
    pomodoro.isOn = !pomodoro.isOn
    pomodoro.run()

})
document.querySelector('#settingsButton').addEventListener('click', (event) => {
    
    let minutes = prompt('how many minutes')
    pomodoro = new Pomodoro(minutes)
    if(pomodoro.seconds < 10 && pomodoro.minutes < 10){
        document.querySelector('#timer').innerText = `0${pomodoro.minutes}:0${pomodoro.seconds}`
    }else if(pomodoro.seconds < 10){
        document.querySelector('#timer').innerText = `${pomodoro.minutes}:0${pomodoro.seconds}`
    }else if(pomodoro.minutes < 10){
        document.querySelector('#timer').innerText = `0${pomodoro.minutes}:${pomodoro.seconds}`
    }else {
        document.querySelector('#timer').innerText = `${pomodoro.minutes}:${pomodoro.seconds}`
    }

})