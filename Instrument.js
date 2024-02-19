class Instrument {
  play() {
    console.log("Instrument is playing");
  }
}

class Piano extends Instrument {
  play() {
    console.log("Piano is playing tan tan tan tan");
  }
}

class Flute extends Instrument {
  play() {
    console.log("Flute is playing toot toot toot toot");
  }
}

class Guitar extends Instrument {
  play() {
    console.log("Guitar is playing tin tin tin");
  }
}

class Main {
  static main() {
    let instruments = new Array(10);

    for (let i = 0; i < instruments.length; i++) {
      if (i % 3 === 0) {
        instruments[i] = new Piano();
      } else if (i % 3 === 1) {
        instruments[i] = new Flute(); 
      } else {
        instruments[i] = new Guitar();
      }
    }

    for (let i = 0; i < instruments.length; i++) {
      if (instruments[i] instanceof Piano)
        console.log("Index " + i + ": Piano object");
      else if (instruments[i] instanceof Flute)
        console.log("Index " + i + ": Flute object");
      else if (instruments[i] instanceof Guitar)
        console.log("Index " + i + ": Guitar object");

      instruments[i].play();
    }
  }
}

Main.main();