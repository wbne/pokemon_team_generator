names = ["Ben Wang", "Pranay", "Daniel", "Eb", "prydt", "tiffaniffaniff", "marshmallow", "polymatter", "3b1b", "tams", "orange", "Austin", "Dustin", "Choinut", "WBNE", "Minecraft", "cup", "table", "fork", "computer", "UwU-man", "OwO-woman", "shorty", "tally", "Wolfie", "Tookie", "Foxie", "Brad", "Pitt", "Ganon", "Roy", "Kirby", "Firey", "R.O.B", "Sonic", "horse", "Ben Taylor", "Ben Sun", "Kelly Liu", "CarDar", "Socks", "Dongle", "Grasshawk", "Rock", "Jingle", "Bucket", "Watermelon", "Truck", "Boomer", "Hack", "Hellong", "Jay Park", "Evan Carlisie", "Anthony Zhou", "Preston Wong", "blueberry", "strawberry", "headphone", "DIO", "napolean", "waterloo", "hhkb", "pranay has no sense of fun", "potato", "tomato", "canned air", "bottled cans", "airpower", "john generic", "lowercase letters", "mega ultra chicken bird", "Santa"] 
frustration = ["this piece of garbage exists", "xml requests can go send themselves away", "that insomniac cookie was really good", "don't ask me to draw anything. ANYTHING", "as long as it isn't a magikarp it's fine", "why don't they have a mechanical keyboard pokemon yet?", "I really like to hardcode things", "it's rumored that I still attend the CSO workshops to this day", "I'm a potato in disguise", "I could be a racoon", "siracha and grapes are not meant to be together", "gee isn't is great that they patched missingno out of the game?", "tfw tossing 11 ultra balls turns your screen into night mode", "if you wanted a good quote, just look at the commit history at github.com/wbne/pokemon_team_generator", "coding in html/css/js is like grad school... you never know how those 4 hours will turn out", "if you saw that one quote about grad school, yea I ended up wasting those 4 hours in sadness and frustration while eating a chicken sandwhich with polynesian sauce", "quaternions were made to bully us three-dimensional beings", "what is an imaginary polar coordinate?", "how many shrimps can I eat before I make my skin turn pink?", "who would win? A $2000+ Apple laptop vs one dust boi (pretend this was before their 16-inch laptop released)", "uwu", "owo", "Fruit Snacks are delicious", "wooloo and pichu are the two best pokemon in existance", "kirby lore is amazing", "it's your internet connection that's making this slow, not the 100+ quotes in the javascript file"]
flavor_text = ["They like to nap a lot", "Eating is one of its hobbies", "They were once was a pro League player... now they're washed up", "During its prime it was known to code at 30 errors a second", "They have a crippling addiction to mechanical keyboards", "Back when they were in undergrad, they decided to not wear goggles in chem lab", "Record holder for Bowser's Big Bean Burrito", " is fren", "Secretly a furry", "Secretly a scalie", "Occasionally uwu's and owo's to the dismay of its friends", "Was popular in high school", "Read the transcipt of the prequels and will now spew r/prequelmemes into their life", "Thought Maplestory was a fun game", "Thought goats was a really fun, balanced, and simple meta", "Knows that the Earth is a dinosaur", "Eats slowpoke tails", "Believes that they are in a game... but they aren't", "Had a laptop decked out in MLH stickers", "Likes Knack 2 BAYBEEEE", "Can only be quelled with the sound of Kailh Box Jades", "A TAMS alumni", "Has a pretty fluffy scarf", "Wishes for a Wooloo SO", "Streams drying paint on Twitch", "Is just another front-end developer", "Has a massive collection of gundam figurines", "Wears plate armour to simulate gravity on Jupiter", "Slept in Willis during closed weekend"]

const app = document.getElementById('root')
const NUMBER = 6;
var foo = 0;
var combinedName = "";

pickedNames = []
var averages = [0, 0, 0, 0, 0, 0] // Average hitpoints, attack, defense, special attack, special defense, and speed

for(var i = 1; i <= NUMBER; i++){
  var request = new XMLHttpRequest()
  pokemon_name = ""
  pokemon_description = ""
  pokemon_type = ""
  pokemon_sprite = ""

  const card = document.createElement('div')
  //New
  const back = document.createElement('div')
  test = document.createElement('p')
  random = Math.floor(Math.random() * flavor_text.length)
  test.textContent = (flavor_text[random])
  back.setAttribute('class', 'back')
  back.appendChild(test)
  card.appendChild(back)
  const front = document.createElement('div')
  front.setAttribute('class', 'front')
  card.setAttribute('class', 'card')
  card.appendChild(front)


  randomNameID = Math.floor(Math.random() * names.length)
  randomName = names[randomNameID]
  pickedNames.push(randomName)

  h22 = document.createElement('h2')
  h22.setAttribute('class', 'nickname')
  h22.textContent = randomName
  //changed
  front.appendChild(h22)
  combinedName += randomName.substr(Math.floor(Math.random() * randomName.length), Math.floor(Math.random() * randomName.length))

  randomPokemon = Math.floor((Math.random() * 800) + 1)
  randomString = 'https://pokeapi.co/api/v2/pokemon/' + randomPokemon
  request.open('GET', randomString, true)
  request.onload = function() {
  var data = JSON.parse(this.response)
  // Update averages
  averages[0] += data.stats[5]['base_stat'];
  averages[1] += data.stats[4]['base_stat'];
  averages[2] += data.stats[3]['base_stat'];
  averages[3] += data.stats[2]['base_stat'];
  averages[4] += data.stats[1]['base_stat'];
  averages[5] += data.stats[0]['base_stat'];
  
  pokemon_name = data.name
  const h33 = document.createElement('h3')
  h33.textContent = pokemon_name
  //changed
  front.appendChild(h33)
  h33.setAttribute('class', 'thicc')

   for(var j = 1; j <= data.types.length; j++){
	  pokemon_type = "Type " + j + ": " + data.types[j - 1].type.name + " "
          const ulul = document.createElement('ul')
          ulul.setAttribute('class', 'thiccc')
          ulul.textContent = pokemon_type
	  //changed
          front.appendChild(ulul)
          if(data.types.length == 1) {
            ewe = document.createElement('ul')
            ewe.setAttribute('class', 'thiccc')
            ewe.textContent = " ‏‏‎ "
	    //changed
            front.appendChild(ewe)
      }
   }

    pokemon_sprite = data.sprites.front_default
    const img = document.createElement('img')
    img.src = pokemon_sprite
    //changed
    front.appendChild(img)
    img.setAttribute('class', 'pic')

    const moves = document.createElement('h3')
    moves.textContent = "Moves: "
    moves.setAttribute('class', 'bottom-text')
    //changed
    front.appendChild(moves)
      for(var k = 0; k < 4; k++){
        randomNum = Math.floor(Math.random() * data.moves.length)
        const ul = document.createElement('ul')
        ul.textContent = data.moves[randomNum].move.name
	//changed
        front.appendChild(ul)
      }
      /*const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage) 
  If I want to add errors uwu*/
  
  if (++foo === NUMBER) {
    wolfram();
  }
}
  app.appendChild(card) 
  request.send()
}
/*
const flavor = document.getElementById('flavor')
for(i = 0; i < NUMBER; i++) {
	random = Math.floor(Math.random() * flavor_text.length)

	fl = document.createElement('p')
	fl.setAttribute('class', 'flavor-text')
	fl.textContent = (pickedNames[i] + ": " + flavor_text[random])
	flavor.appendChild(fl)
}
*/
const anger = document.getElementById('stages-of-grief')
dat_manip_doe = Math.floor(Math.random() * frustration.length)
piece_of_garbage = document.createElement('h2')
piece_of_garbage.setAttribute('class', 'frustration')
piece_of_garbage.textContent = "A not-so-wise man B. Wang once said: " + frustration[dat_manip_doe]
anger.appendChild(piece_of_garbage)

function refresh() {
  window.location.reload(false)
}

const button = document.getElementById('button');
button.onmouseover = logMouseOver;
button.onmouseout = logMouseOut;

function logMouseOver() {
  document.getElementById('button').style.background = '#073642';
}

function logMouseOut() {
  document.getElementById('button').style.background = '#002b36';
}

// Wolfram
function wolfram() {
  for (var i = 0; i < NUMBER; i++)
  {
    averages[i] /= NUMBER;
  }
  var string = averages.join(',')
  var request = new XMLHttpRequest()
  request.open('GET', 'https://www.wolframcloud.com/obj/1a00bd3c-f2ea-4472-8561-d2d73b5fa6af?x=' + string, true)
  request.onload = function() {
    var closest = this.responseText.substring(this.responseText.indexOf(':') + 1, this.responseText.length - 2)

    // Display new card
    const mix = document.createElement('div')
    mix.setAttribute('class', 'card')
    app.append(mix)
    const title = document.createElement('h2')
    title.setAttribute('class', 'potato')
    title.style.textAlign = 'center'
    title.style.fontFamily = 'pokemon-solid'
    title.textContent = 'Your team "' + combinedName + '" is closest in strength to ' + closest + '...'
    title.style.color = '#d33682'
    mix.appendChild(title)

  }
  request.send()
}
