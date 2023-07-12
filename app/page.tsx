import EventCards from "@components/EventCards";
import EventSlider from "@components/EventSlider";


const Home = () => {
  return (
      <div>
        <div>
          <EventSlider/>
        </div>
        <div>
          <EventCards/>
        </div>
      </div>
  )
}

export default Home;