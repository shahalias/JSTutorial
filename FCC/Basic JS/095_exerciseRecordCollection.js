// Record Collection

/* 
You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
 */

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    console.log(
      'Records:' + records +
      ' ID: ' + id +
      ' Prop: ' + prop +
      ' Value: ' + value
    )
    if (prop == 'albumTitle') {
      let has = records[id].hasOwnProperty(prop) ? true : false;
      console.log("Has albumT: " + has)
      if (!has) { records[id].albumTitle = value }
      // console.log(records);
      return records;
    }
    if (prop == 'artist') {
      let has = records[id].hasOwnProperty(prop) ? true : false;
      console.log("Has artist: " + has)
      if (value == "") { delete records[id].artist; }
      else if (!has) { records[id].artist = value }
      // console.log(records)
      return records;
    }
    if (prop == 'tracks' && value != '') {
      let has = records[id].hasOwnProperty(prop) ? true : false;
      console.log("Has tracks: " + has)
      if (!has) { records[id].tracks = [] }
      records[id].tracks.push(value);
      return records;
    }
    else if (prop == 'tracks' && value == '') {
      delete records[id].tracks;
      return records;
      // console.log(records)
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  updateRecords(recordCollection, 2548, "artist", "");
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
  updateRecords(recordCollection, 2468, "tracks", "Free");
  updateRecords(recordCollection, 2548, "tracks", "");
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide");