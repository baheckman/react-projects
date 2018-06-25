import React from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = [
  {
    'quote': 'Not all who wander are lost.',
    'author': 'J.R.R. Tolkien'
  },
  {
    'quote': '"You miss 100% of the shots you don\'t take." - Wayne Gretzsky',
    'author': 'Michael Scott'
  },
  {
    'quote': 'Don\'t cry because it\'s over, smile because it happened.',
    'author': 'Dr. Seuss'
  },
  {
    'quote': 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
    'author': 'Marilyn Monroe'
  },
  {
    'quote': 'Be yourself; everyone else is already taken.',
    'author': 'Oscar Wilde'
  },
  {
    'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    'author': 'Albert Einstein'
  },
  {
    'quote': 'So many books, so little time.',
    'author': 'Frank Zappa'
  },
  {
    'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on.',
    'author': 'Robert Frost'
  },
  {
    'quote': 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
    'author': 'J.K. Rowling'
  },
  {
    'quote': 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
    'author': 'C.S. Lewis'
  },
  {
    'quote': 'If you tell the truth, you don\'t have to remember anything.',
    'author': 'Mark Twain'
  },
  {
    'quote': 'Speak softly and carry a big stick; you will go far.',
    'author': 'Theodore Roosevelt'
  }
];
const url = 'http://localhost:5000/new'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Quote Generator</h1>
        </header>
        <p className="App-intro"></p>
        <Quote/>
      </div>
    );
  }
}

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
    this.changeQuote = this.changeQuote.bind(this)
  }

  // componentDidMount() {
  //   fetch(url, {
  //     mode: 'no-cors' // 'cors' by default
  //   })
  //     .then(response => response.json())
  //     .then(data => this.setState({ 
  //       author: data.author,
  //       quote: data.quote
  //     }));
  // }

  changeQuote() {
    // var randNum = Math.floor(Math.random()*quotes.length);
    // var randQuote = quotes[randNum]['quote'];
    // var randAuthor = quotes[randNum]['author'];
    // this.setState({
    //   quote: randQuote,
    //   author: randAuthor
    // });
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => this.setState({
    //     quote: data.quote,
    //     author: data.author 
    //   })
    // );

    fetch(url, {
      mode: 'no-cors' // 'cors' by default
    })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      // return response.json();
      // console.log(response.json());
    })
    .then(function(data) {
      console.log(data)
    });
  }

  render() {
    return (
      <div>
        <div className="Quote">
          <p className="QuoteText">"{this.state.quote}"</p>
          <p className="QuoteAuthor">  - {this.state.author}</p>
          <button className="QuoteButton" onClick={this.changeQuote} type="submit">New Quote</button>
        </div>
        <br/>
        <div className="MoreInfo">
            <QuoteInfo />
            <AuthorInfo />
        </div>
      </div>
    );
  }
}

class AuthorInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="AuthorInfo">
        <p>Author Info HERE</p>
      </div>
    );
  }
}

class QuoteInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="QuoteInfo">
        <p>Quote Info HERE</p>
      </div>
    );
  }
}

export default App;
