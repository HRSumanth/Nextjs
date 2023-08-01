import MeetupList from './components/meetups/MeetupList'

const DUMMY_MEETUPS=[
  {
    id:'m1',
    title:'first meetup',
    Image:'https://www.google.com/search?rlz=1C1CHBF_enIN861IN861&q=image&tbm=isch&source=lnms&sa=X&ved=2ahUKEwib-J699KmAAxVkUGwGHcRUAu8Q0pQJegQIDRAB&biw=1366&bih=625&dpr=1#imgrc=O5RXpwJLOupVkM',
    address:'first road, some city',
  },
  {
    id:'m2',
    title:'second meetup',
    Image:'https://www.google.com/search?rlz=1C1CHBF_enIN861IN861&q=image&tbm=isch&source=lnms&sa=X&ved=2ahUKEwib-J699KmAAxVkUGwGHcRUAu8Q0pQJegQIDRAB&biw=1366&bih=625&dpr=1#imgrc=O5RXpwJLOupVkM',
    address:'second road, some city',
  }
]


export default function Home() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} ></MeetupList>
  )
}
