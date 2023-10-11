import Layout from '/components/layout'
import Media from '/components/media'

export function Title() {

  return (
    <>
        Citi
    </>
    )
}

const classTitle = "Citi"


export function Desc() {

  return (
    <>
        <p><b>The Problem:</b> Citi wants to demonstrate their commitment to driving an equitable recovery for working women following the pandemic.</p>
        <p><b>The Big Idea:</b> Build the networks of working woman by creating a new kind of virtual learning rec league</p>
    </>
    )
}


export function Content() {

  return (
    <>

        <section class="work__section work__section--main light">
          <span></span><span></span>
        <div class="work__div">
            <h2 class="work-h2">The Women's Financial League</h2>
            <p>The WFL is one half financial literacy learning platform, and one half online rec league. Users will join one of two teams and compete against each other by finishing lessons.<br></br><br></br>Megan Rapinoe of the US Women's Soccer Team will serve as spokesperson for the league.</p>
        </div>
        <Media type="image" class="col-3" src="/images/citiOverview.jpg" alt=""/>

            <Media type="image" class="col-2" src="/images/citiLeaderboard.jpg" alt="A screenshot showing a quiz in progress. It has the same layout as the example lesson, except in place of a video there is a series of multiple choice questions."/>
            <p>Participants can earn points for their team by watching lessons, passing quizzes, and working together to complete a capstone project.</p>
            <Media type="image" class="col-2" src="/images/citiDiscussion.jpg" alt="A screenshot showing the dashboard of the learning platform. There is a navigation bar and three major sections. One shows the six weekly lessons, another shows a line graph tracking the users experience points over the week. The third displays a leaderboard and how the two teams are comparing to each other on three different metrics."/>
            <p>The WFL will foster community by providing a space to help others with the course, their careers, and financial well-being.</p>
            <Media type="image" class="col-2" src="/images/citiSwag.jpg" alt="Three prizes that can be won. One is a teal reusable water bottle, another is an orange tank top and the third is a planner. All three branded with the leagues energy swirls and colors."/>
            <p>To give studying together some extra encouragement, swag and prizes will be rewarded based on team performance, not individual.</p>
        </section>
        <section class="work__section work__section--accent">
            <div class="work__div col-2">
                <h2 class="work-h2 col-2">Live Events</h2>
                <p>WFL members who complete the six week course will gain access to exclusive networking events, conferences and workshops. These in-person events will take place across the country and focus on negotiating salaries, asserting boundaries in the workplace, finding mentors and other soft skills.</p>
                <p>WFL members will also be invited to private Facebook groups where they can speak more candidly about their experiences and help others navigate their careers.</p>
            </div>
            <Media type="image" src="/images/citiFlyer.jpg" alt="A poster featuring a women looking bravely forward. She looks confident and poweful. Energy spins around her. At the top of the post reads: The Other Side of the Coin, The WFL’s first speaker series peels back what it takes to make your own seat at the table. Listen to leading women tell their story and network with others on the rise. Followed by the dates and locations and a link to RSVP"/>
        </section>

    </>
  )
}

export default function page() {

  return (
    <>
        <Layout title={<Title/>} classTitle={classTitle} desc={<Desc/>} content={<Content/>}>
        </Layout>
    </>
    )
}
