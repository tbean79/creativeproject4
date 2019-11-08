/*global Vue */
/*global axios */
/*global fetch */


var app = new Vue({
  el: '#app',
  data: {
    search: '',
    plot: '',
    rating: ''
  },
  methods: {
      fetchWords() {
      console.log("In Fetch " + this.prefix);
      var url = "http://tylerthesmiler.com:4202/movies?q=" + this.search;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((result) => {
          console.log("WordList");
          console.log(result);

          console.log("Got Wordlist");
          this.rating = result.imdbRating;
          this.rating = this.rating + "/10";
          this.plot = result.Plot;
          console.log(this.result);
        });
    },
    /*fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "http://tylerthesmiler.com:4202/getcity?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((citylist) => {
          console.log("CityList");
          console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push({ name: citylist[i].city });
          };
          console.log("Got Citylist");
        });
    },*/
  },
});
