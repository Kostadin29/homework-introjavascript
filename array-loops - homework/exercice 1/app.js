console.log("It works");

function tellStory() {
    const arguments = ["Kostadin", "studying", "studying javascript"]
    const name = arguments[0];
    const mood = arguments[1];
    const activity = arguments[2];
    return `This is a ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end. `
  }
  
  console.log(tellStory());