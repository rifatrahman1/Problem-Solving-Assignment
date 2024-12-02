
// problem-1

function calculateTax(income, expenses) {
    if (income >= expenses && 0 <= income && 0 <= expenses) {
        const difference = income - expenses;
        const tax = (difference * 20) / 100;
        return tax;
    }
    else {
        return 'Invalid Input'
    }

}




// problem-2


function sendNotification(email) {
    const gmail = email.split('');
    const notification = ' sent you an email from ';
    const word = [];
    if (!email.includes('@')) {
        return 'Invalid Email'
    }
    for (const char of gmail) {
        if (char !== '@') {
            word.push(char);
        }
        else {
            word.push(notification);
        }
    }

    const sentence = word.join('');

    return sentence;
}


// probelm-3



function checkDigitsInName(name) {

    let thisNumber = false;

    for (const char of name) {
        if (typeof name === 'string') {
            if (!isNaN(char)) {
                thisNumber = true;
                break;
            }
        }
        else {
            return 'Invalid Input'
        }
    }
    return thisNumber;
}




// probelm-4



function calculateFinalScore(obj) {
    const isFFamily = 20;
    for (const key in obj) {
        if (typeof obj !== 'object') {
            return 'Invalid Input'
        }
        else if (obj.isFFamily === true && obj.testScore <= 50 && obj.schoolGrade <= 30 && (isFFamily + obj.testScore + obj.schoolGrade) >= 80) {
            return true;
        }
        else {
            return false;
        }
    }
}



// problem-5



function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes)) {
        return 'Invalid Input';
    }
    else if (typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }


    let sum = 0;
    for (const char of waitingTimes) {
        sum = sum + char;
    }
    const waiting_length = waitingTimes.length;
    const rounded_average = sum / waiting_length;

    const israt_serial_number = serialNumber - 1;
    const remaining_serial_number = israt_serial_number - waiting_length;
    const israt_waiting_times = remaining_serial_number * Math.round(rounded_average);
    return israt_waiting_times;
}










