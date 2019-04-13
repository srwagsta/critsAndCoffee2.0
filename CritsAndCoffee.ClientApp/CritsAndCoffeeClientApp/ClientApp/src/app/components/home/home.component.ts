import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular Crits And Coffee';
  currentQuote:{quote:string, author:string} = {quote:'', author:''};

  constructor() { }

  ngOnInit() {
    this.currentQuote = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];
   }

  quoteList: {quote:string, author:string}[] = [
    {quote:'Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.', author:'Norman Augustine'},
    {quote:'Your most unhappy customers are your greatest source of learning.', author:'Bill Gates'},
    {quote:'Programs must be written for people to read, and only incidentally for machines to execute.', author:'Abelson and Sussman'},
    {quote:'Make everything as simple as possible, but not simpler.', author:'Albert Einstein'},
    {quote:'XML is not a language in the sense of a programming language any more than sketches on a napkin are a language.', author:'Charles Simonyi'},
    {quote:'If you think technology can solve your security problems, then you don’t understand the problems and you don’t understand the technology.', author:'Bruce Schneier'}
  ];

}
