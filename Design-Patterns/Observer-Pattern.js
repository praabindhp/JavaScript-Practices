import { Subject } from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe(v => console.log(v + 'via Den TV'));
const tv2 = news.subscribe(v => console.log(v + 'via Cave TV'));
const tv3 = news.subscribe(v => console.log(v + 'via Rust TV'));

news.next('Breaking News : ');
news.next('The War Is Over... ');

