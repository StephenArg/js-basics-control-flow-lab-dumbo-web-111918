// Write your code in this file!
function scuberGreetingForFeet(number) {
    let result
    if (number <= 400){
        result = "This one is on me!"
    } else if (number > 2500) {
        result = "No can do." 
    } else if (number > 2000) {
        result = "I will gladly take your thirty bucks."
    }
    return result
}

function ternaryCheckCity(city) {
    let result
    switch (city) {
        case "NYC":
            result = "Ok, sounds good."
            break
        default:
            result = "No go."
    }
    return result
}

function switchOnCharmFromTip(tip) {
    let result
    switch (tip) {
        case 'generous':
            result = "Thank you so much."
            break
        case 'not as generous':
            result = "Thank you."
            break
        default:
            result = "Bye."
    }
    return result
}