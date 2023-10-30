// → 1 ←
const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('длина строки - 17', 22);
checkStringLength('длина строки - 17', 17);
checkStringLength('длина строки - 17', 15);

// → 2 ←
const checkPalindrome = function(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return string === reverseString;
};

checkPalindrome('топот');
checkPalindrome('ДохОд');
checkPalindrome('Барсик');
checkPalindrome('      Тут  как ту т ');

// → 3 ←
const extractNumber = function(input) {
  const string = input.toString().replaceAll(' ', '');
  let output = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      output += string[i];
    }
  }

  return parseInt(output, 10);
};

extractNumber('2077 год');
extractNumber('2 банана, 1.5 листа');
extractNumber('agent 007');
extractNumber('где помидор???');
extractNumber(-2023.10);

// → 5.16 ←
const checkCompatibility = function(startWorking, endWorking, startMeeting, durationMeeting) {
  const parseTime = (time) => time.split(':').map((part) => parseInt(part, 10));

  const [startHours, startMinutes] = parseTime(startWorking);
  const [endHours, endMinutes] = parseTime(endWorking);
  const [meetingHours, meetingMinutes] = parseTime(startMeeting);

  const startMeetingMinutes = meetingHours * 60 + meetingMinutes;
  const endMeetingMinutes = startMeetingMinutes + durationMeeting;

  if (endMeetingMinutes <= endHours * 60 + endMinutes && startMeetingMinutes >= startHours * 60 + startMinutes) {
    return true; // не выходит за рамки рабочего дня
  }
  else {
    return false; // выходит за рамки рабочего дня
  }
};

checkCompatibility('08:00', '17:30', '14:00', 90); // true
checkCompatibility('8:0', '10:0', '8:0', 120);     // true
checkCompatibility('08:00', '14:30', '14:00', 90); // false
checkCompatibility('14:00', '17:30', '08:0', 90);  // false
checkCompatibility('8:00', '17:30', '08:00', 900); // false
