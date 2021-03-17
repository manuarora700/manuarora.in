import Container from "@/components/Container";
import Tweet from "@/components/Tweet";
import { getTweets } from "@/lib/twitter";

export default function Tweets({ tweets }) {
  return (
    <Container
      title="Tweets – Manu Arora"
      description="A collection of tweets that make me laugh, make me think and make me learn."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Collection of my personal favourite tweets. 🕊
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Also, not to forget, built using the Twitter API V2 (Super easy, super
          fun). 🕊
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    "1371103308425928708",
    "826528907381739520",
    "1308509070140162048",
    "997895977179721728",
    "1341090253864542208",
    "1026872652290379776",
    "1346113149112619016",
    "1340107217970683906",
    "992629481578745856",
    "989142253468708864",
    "1368058884837928970",
    "1341962177272537089",
    "1342869937841266688",
    "1116362674319908864",
    "1360610614490501126",
    "1371103308425928708",
  ]);

  return { props: { tweets } };
}

// export default function Tweets({ tweets }) {
//   return (
//     <Container
//       title="Tweets – Manu Arora"
//       description="A collection of tweets that make me laugh, make me think and make me learn."
//     >
//       <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
//         <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
//           Tweets
//         </h1>
//         <p className="text-gray-600 dark:text-gray-400 mb-4">
//           This is a collection of tweets I've enjoyed. I use Twitter quite a
//           bit, so I wanted a place to publicly share what inspires me, makes me
//           laugh, and makes me think.
//         </p>
//         {/* {tweets.map((tweet) => (
//           <Tweet key={tweet.id} {...tweet} />
//         ))} */}
//         <p className="text-gray-600 dark:text-gray-400 mb-4">Coming soon...</p>
//       </div>
//     </Container>
//   );
// }
