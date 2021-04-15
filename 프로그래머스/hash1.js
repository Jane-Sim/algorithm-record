// function solution(participant, completion) {
//   //
//   var participant = ["a", "b", "c", "a"];
//   var completion = ["a", "b", "a"];

//   var newList = participant.reduce((acc, p) => {
//     console.log(acc);
//     console.log("p " + p);
//     console.log("acc[p] " + acc[p]);
//     acc[p] = acc[p] ? acc[p] + 1 : 1;
//     console.log(acc);
//     return acc;
//   }, {});

//   completion.forEach((c) => {
//     if (newList[c]) {
//       newList[c] -= 1;
//     }
//     if (newList[c] === 0) {
//       delete newList[c];
//     }
//   });

//   return Object.keys(newList)[0];
// }

function solution(participant, completion) {
  var newList = completion.reduce((acc, c) => {
    acc[c] = acc[c] ? acc[c] + 1 : 1;
    return acc;
  }, {});
  return participant.find((c) => {
    if (newList[c]) {
      newList[c] -= 1;
    } else {
      return true;
    }
  });
}

// solution([], []);

var participants = ["a", "b", "c", "a"];
var completions = ["a", "b", "a"];

const myMap = new Map();

for (const participant of participants) {
  if (!myMap.get(participant)) {
    myMap.set(participant, 1);
  } else {
    myMap.set(participant, myMap.get(participant) + 1);
  }
}

for (const completion of completions) {
  if (myMap.get(completion)) {
    myMap.set(completion, myMap.get(completion) - 1);
  }
}

for (const participant of participants) {
  if (myMap.get(participant) && myMap.get(participant) >= 1) {
    answer = participant;
  }
}

function solution(participant, completion) {
  let completeMap = new Map();
  for (const person of completion) {
    const mapItem = completeMap.get(person);
    completeMap.set(person, mapItem ? mapItem + 1 : 1);
  }
  for (const person of participant) {
    const mapItem = completeMap.get(person);
    if (!mapItem) {
      return person;
    } else {
      completeMap.set(person, mapItem - 1);
    }
  }
}

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
