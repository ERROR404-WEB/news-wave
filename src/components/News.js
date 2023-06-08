import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loaderr"
import PropTypes from 'prop-types'
import error404 from './error404.jpg'
import Loader2 from "./loader2"
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country: "in",
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }


  articles = [
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "SpaceX cargo craft docks with space station - Times of India",
      "description": "SpaceX’s 28th commercial resupply services mission docked with the International Space Station Tuesday. SpaceX’s Dragon is delivering food, supplies, and equipment for the international crew. The incoming gear includes the next pair of IROSAs (Intern",
      "url": "https://timesofindia.indiatimes.com/videos/international/spacex-cargo-craft-docks-with-space-station/videoshow/100813030.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-100813030,imgsize-835831.cms",
      "publishedAt": "2023-06-07T06:32:59Z",
      "content": "Jun 07, 2023, 12:02PM ISTSource: APSpaceXs 28th commercial resupply services mission docked with the International Space Station Tuesday. SpaceXs Dragon is delivering food, supplies, and equipment fo… [+214 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Thehealthsite.com"
      },
      "author": "Tavishi Dogra",
      "title": "Atypical Teratoid Rhabdoid Tumor: A Rare And Aggressive Brain Tumor | TheHealthSite.com - TheHealthSite",
      "description": "Genetic testing and counselling may be recommended for individuals with ATRT to assess potential genetic predisposition and provide appropriate management strategies. TheHealthSite.com",
      "url": "https://www.thehealthsite.com/diseases-conditions/atypical-teratoid-rhabdoid-tumor-a-rare-and-aggressive-brain-tumor-983357/",
      "urlToImage": "https://st1.thehealthsite.com/wp-content/uploads/2022/11/Untitled.jpg",
      "publishedAt": "2023-06-07T06:30:00Z",
      "content": "Genetic testing and counselling may be recommended for individuals with ATRT to assess potential genetic predisposition and provide appropriate management strategies.\r\nWorld Brain Tumor Day 2023: Bra… [+3730 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Parmita Uniyal",
      "title": "Consume jamun seed powder to manage diabetes and blood pressure; all benefits - Hindustan Times",
      "description": "Not just the fruit, even the seeds of jamun can help manage a range of health disorders. Know all the health benefits from nutritionist. | Health",
      "url": "https://www.hindustantimes.com/lifestyle/health/consume-jamun-seed-powder-every-day-to-manage-diabetes-and-blood-pressure-know-all-benefits-101686116477342.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/07/1600x900/jamun_seed_powder_1686116668033_1686116675219.jpg",
      "publishedAt": "2023-06-07T05:50:59Z",
      "content": "The benefits of jamun for diabetes and digestive health are well-known. They have a special significance in ancient medicinal practice Ayurveda and have been used in treating blood pressure, blood su… [+2756 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GSMArena.com"
      },
      "author": "Sagar",
      "title": "It's official: Samsung Galaxy Unpacked will be hosted in last week of July for the unveiling of Fold5 and Flip5 - GSMArena.com news - GSMArena.com",
      "description": "It will take place in Seoul, South Korea. Last week, Lee Young-hee, the President of Samsung DX's Global Marketing Center, confirmed that Samsung's next...",
      "url": "https://www.gsmarena.com/samsung_galaxy_unpacked_galaxy_z_fold5_flip5_launch_late_july-news-58795.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/04/samsung-galaxy-z-fold5-design-renders/-952x498w6/gsmarena_002.jpg",
      "publishedAt": "2023-06-07T05:14:01Z",
      "content": "Last week, Lee Young-hee, the President of Samsung DX's Global Marketing Center, confirmed that Samsung's next Galaxy Unpacked event will be held in Seoul, South Korea. Young-hee didn't reveal the ev… [+1398 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBCTV18"
      },
      "author": "https://www.cnbctv18.com",
      "title": "TCS top brass salary jumps 120% in three years, former CEO Rajesh Gopinathan took home nearly Rs 30 cr in FY23 - CNBCTV18",
      "description": "TCS’ former CEO Rajesh Gopinathan took home nearly Rs 30 crore in FY23, which still lower than what his peers at HCL Tech, Infosys, Tech Mahindra and Wipro received as compensation in the previous fiscal.",
      "url": "https://www.cnbctv18.com/education/tcs-former-ceo-rajesh-gopinathan-salary-rs-30-crore-fy23-top-brass-compensation-up-120-percent-in-three-years-16869331.htm",
      "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2018/04/2018-04-19T154830Z_1_LYNXMPEE3I1HG_RTROPTP_4_TCS-RESULTS.jpg",
      "publishedAt": "2023-06-07T04:42:25Z",
      "content": "homeeducation NewsTCS top brass salary jumps 120% in three years, former CEO Rajesh Gopinathan took home nearly Rs 30 cr in FY23\r\nTCS former CEO Rajesh Gopinathan took home nearly Rs 30 crore in FY23… [+1060 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "House-sized asteroid hurtling towards Earth, NASA reveals crucial details! - HT Tech",
      "description": "NASA has revealed that a house-sized asteroid named Asteroid 2018 KR could make its closest trip to Earth soon. Know its speed, distance, and more details.",
      "url": "https://tech.hindustantimes.com/tech/news/housesized-asteroid-hurtling-towards-earth-nasa-reveals-crucial-details-71686112640341.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/07/1600x900/space-7288750_1280_1677829805863_1686112725493.jpg",
      "publishedAt": "2023-06-07T04:39:17Z",
      "content": "To determine the potential danger posed by asteroids that come close to Earth, NASA calculates its orbit to gauge the distance at which it will pass the planet. The asteroid's orbit is computed by fi… [+1917 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "What Happens \"2.3 Seconds After\" Alia Bhatt Is Left Alone - NDTV Movies",
      "description": "Alia Bhatt's post has the Internet's heart",
      "url": "https://www.ndtv.com/entertainment/what-happens-2-3-seconds-after-alia-bhatt-is-left-alone-4100735",
      "urlToImage": "https://c.ndtvimg.com/2023-06/cgfq1muo_alia-bhatt_625x300_07_June_23.jpg",
      "publishedAt": "2023-06-07T04:37:06Z",
      "content": "Alia Bhatt shared this image. (courtesy: aliaabhatt)\r\nNew Delhi: Stunning can't even begin to describe Alia Bhatt's latest Instagram entry. The actress, on Wednesday, shared a picture-perfect selfie … [+1670 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Vijay Kishore",
      "title": "Stock Market LIVE: Sensex gains 100 pts; Britannia, Tata Consumer shine | Mint - Mint",
      "description": "Share Market LIVE Updates: Benchmark indices remain in the green as Sensex gains around 100 pts and Nifty is above 18,600. PSU Bank and FMCG indices shine with all sectors trading in the green. Britannia, Tata Consumer and Nestle India take the lead. Kotak Ba…",
      "url": "https://www.livemint.com/market/stock-market-news/stock-market-live-sensex-nifty-set-to-gain-at-start-sgx-nifty-in-green-11686098455453.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/07/600x338/2-0-1244114454-iStock-839214100-0_1679615828655_1686098481186.jpg",
      "publishedAt": "2023-06-07T04:34:11Z",
      "content": "FIIs ended their three-day losing streak with an inflow of nearly 386 crore ($52 million) in Indian equities, while DIIs turned net sellers after three consecutive days of buying. Investors will be f… [+13620 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Torrent Power shares rise 9% on signing MoU with Maha govt for hydro projects - Moneycontrol",
      "description": "The company signed the MoU for the development of three pumped storage hydro projects of 5,700 MW capacity in the state of Maharashtra. The projects would entail an investment of about Rs. 27,000 crore and would provide employment to approximately 13,500 peop…",
      "url": "https://www.moneycontrol.com/news/business/stocks/torrent-power-shares-rise-9-on-signing-mou-with-maha-govt-for-hydro-projects-10754111.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/02/torrent-power-770x433.jpg",
      "publishedAt": "2023-06-07T04:19:58Z",
      "content": "Torrent Power share price rose 9 percent in early trade on June 7 as the company signed an MoU with the Maharashtra government for three pumped storage hydro projects.\r\nTorrent Power signed a Memoran… [+836 chars]"
    },
    {
      "source": {
        "id": "independent",
        "name": "Independent"
      },
      "author": "Alisha Rahaman Sarkar",
      "title": "Odisha train accident latest: Death toll at 288 as minister says locals saved over 1,000 lives - The Independent",
      "description": "At least 80 bodies remain unclaimed as officials revise the death toll to 288",
      "url": "https://www.independent.co.uk/asia/india/odisha-train-accident-death-toll-reason-b2352785.html",
      "urlToImage": "https://static.independent.co.uk/2023/06/07/04/AFP_33GZ7RF.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2023-06-07T03:48:29Z",
      "content": "Railways probe panel member disagrees with preliminary findings\r\nA railways official who was part of the five-member inquiry committee which conducted a preliminary investigation has disagreed with i… [+1076 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "News18"
      },
      "author": "Sumedha Kirti",
      "title": "Mumbai Hostel Murder: Teen Raped, Strangulated with 'Dupatta'; Suspect Guard Found Dead on Tracks | Details - News18",
      "description": "Mumbai Charni Road Murder: Maharashtra women and child welfare minister Mangalprabhat Lodha visited the hostel late at night, while BJP leader Chitra Wagh is expected to be at the site shortly. Police on Wednesday said the post-mortem is yet not over",
      "url": "https://www.news18.com/india/charni-road-mumbai-shocking-murder-woman-raped-murdered-suspect-guard-kills-himself-8017579.html",
      "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/06/mumbai-hostel-murder-charni-road-168611121016x9.png",
      "publishedAt": "2023-06-07T03:40:13Z",
      "content": "An 18-year-old woman from Maharashtras Vidarbha region was allegedly raped and strangled to death in her fourth floor room of a government womens hostel in south Mumbais Charni Road. The The suspect,… [+3730 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Rajeshwaari Kalla",
      "title": "Alcoholic liver disease: All the risk factors, besides heavy drinking, that lead to liver damage - Moneycontrol",
      "description": "Alcoholic liver disease progresses through fatty liver, alcoholic hepatitis, and alcoholic cirrhosis stages. Here are all the symptoms, risk factors, and prevention methods to safeguard your liver health.",
      "url": "https://www.moneycontrol.com/news/health-and-fitness/alcoholic-liver-disease-all-the-risk-factors-besides-heavy-drinking-that-lead-to-liver-damage-10754961.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/03/alcohol_6720-770x433.jpg",
      "publishedAt": "2023-06-07T03:36:20Z",
      "content": "Are your evenings incomplete without those obligatory shots of whiskey or vodka, accompanied by generous servings of spicy non-vegetarian dishes? Or perhaps you take pride in your role as the officia… [+3973 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Nitin Naik",
      "title": "WTC Final: Rohit Sharma marks 50th Test in biggest red-ball game - Indiatimes.com",
      "description": "Cricket News: Apart from early morning media commitments, like the one at 9.15 am London time at the Oval on Tuesday, the other thing that Rohit Sharma loves to hat",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-test-championship/wtc-final-rohit-sharma-marks-50th-test-in-biggest-red-ball-game/articleshow/100808713.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-100808691,width-1070,height-580,imgsize-35020,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-06-07T03:28:00Z",
      "content": "Records Kohli could break during WTC final"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "Will get married in Tirupati: Prabhas tells fans amid dating rumours with Kriti - Hindustan Times",
      "description": "For the last several months, Prabhas and Kriti Sanon have been rumoured to be dating. However, they have denied the same. | Bollywood",
      "url": "https://www.hindustantimes.com/entertainment/bollywood/will-get-married-in-tirupati-prabhas-tells-fans-kriti-sanon-dating-rumours-101686107410286.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/07/1600x900/prabhas_1683627484681_1686107956844.jpg",
      "publishedAt": "2023-06-07T03:23:49Z",
      "content": "The trailer of Om Rauts Adipurush, which is gearing up for release on June 16, was launched in a grand event in Tirupati on Tuesday evening. The film, which is a modern-day adaptation of Ramayana, fe… [+2217 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "AP",
      "title": "Tsitsipas regrets using sleep aid melatonin before French Open loss to Alcaraz - Hindustan Times",
      "description": "Tsitsipas, a 24-year-old from Greece, offered up an unusual explanation for his performance during a 6-2, 6-1, 7-6 (5) loss Carlos Alcaraz in the quarterfinals | Tennis News",
      "url": "https://www.hindustantimes.com/sports/tennis/tsitsipas-regrets-using-sleep-aid-melatonin-before-french-open-loss-to-alcaraz-101686107699059.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/07/1600x900/TENNIS-FRENCHOPEN--29_1686107799498_1686107857937.JPG",
      "publishedAt": "2023-06-07T03:19:03Z",
      "content": "Professional tennis players: Theyre just like you and me. Sometimes they take melatonin to try to get some Z's.\r\nStefanos Tsitsipas reacts during his quarter final match against Spain's Carlos Alcara… [+1248 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Tuhin Das Mahapatra",
      "title": "Dua Lipa emerges victorious as lawsuit against \"Levitating\" gets dismissed - Hindustan Times",
      "description": "In a major legal victory, Dua Lipa and her collaborators celebrate as a court dismisses a copyright infringement lawsuit against their hit song \"Levitating.",
      "url": "https://www.hindustantimes.com/entertainment/music/dua-lipa-emerges-victorious-as-copyright-infringement-lawsuit-against-levitating-gets-dropped-101686103671917.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/07/1600x900/DUA-LIPA-LEVITATING-LAWSUIT-2_1686107488819_1686107519977.JPG",
      "publishedAt": "2023-06-07T03:15:37Z",
      "content": "In a recent court ruling, British pop sensation Dua Lipa, along with songwriters Clarence Coffee Jr., Sarah Hudson, and Stephen Kozmeniuk, as well as Warner Records, celebrated a significant win as a… [+2889 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Bollywood Life"
      },
      "author": "Shivani Pawaskar",
      "title": "Shahid Kapoor reveals why he did not like himself in Deepika Padukone-Ranveer Singh starrer Padmaavat - Bollywood Life",
      "description": "Shahid Kapoor recently opened up on one character that he would like to play again by going back in time. And it is none other than his character in Sanjay Leela Bhansali's Padmaavat co-starring Deepika Padukone, Ranveer Singh and more.",
      "url": "https://www.bollywoodlife.com/news-gossip/shahid-kapoor-reveals-why-he-did-not-like-himself-in-deepika-padukone-ranveer-singh-starrer-padmaavat-entertainment-news-2461719/",
      "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2023/06/Shahid-Kapoor-Padmaavat-600x315.png",
      "publishedAt": "2023-06-07T02:39:41Z",
      "content": "Shahid Kapoor has been impressing everyone with his versatility these days. He has been taking up impressive subjects in the last couple of years and showcasing his talent, much to the happiness of f… [+2593 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "The Indian Express",
      "title": "Border situation with India stable, brooks no interference of third party: China - The Indian Express",
      "description": null,
      "url": "https://indianexpress.com/article/india/border-situation-with-india-stable-brooks-no-interference-of-third-party-china-8649368/",
      "urlToImage": null,
      "publishedAt": "2023-06-07T02:20:04Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Sharmila Bhadoria",
      "title": "Cyclone Biparjoy to intensify into very severe storm, IMD issues warning. Check latest updates | Mint - Mint",
      "description": "Cyclonic storm Biparjoy is expected to intensify into a very severe cyclonic storm in next twenty four hours. Coastal areas of Karnataka, Maharashtra, Goa, and Kerala are set to experience high speed wind and harsh weather. IMD has issued warning for fishermen",
      "url": "https://www.livemint.com/news/india/cyclone-biparjoy-to-intensify-very-severe-storm-imd-issues-warning-karnataka-maharashtra-goa-kerala-latest-updates-11686101150765.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/07/600x338/Cyclone_Biparjoy_1686101550598_1686101550824.jpg",
      "publishedAt": "2023-06-07T02:09:48Z",
      "content": "Cyclone Biparjoy located over the east-central and adjoining southeast Arabian Sea is likely to shift northwards and intensify into a severe cyclonic storm in the next few hours, as per the latest IM… [+2795 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Sports Desk",
      "title": "Government willing to have discussion with protesting wrestlers, says Sports Minister Anurag Thakur - The Indian Express",
      "description": "The statement comes four days after Union Home Minister Amit Shah met a delegation of protesting wrestlers at his official residence in the capital.",
      "url": "https://indianexpress.com/article/sports/sport-others/government-willing-to-have-discussion-with-protesting-wrestlers-says-sports-minister-anurag-thakur-8649370/",
      "urlToImage": "https://images.indianexpress.com/2023/01/Wrestlers-protest-1.jpg",
      "publishedAt": "2023-06-07T02:04:41Z",
      "content": "Minister of Youth Affairs and Sports of India, Anurag Thakur has tweeted that the central government is willing to have a ‘discussion’ with protesting wrestlers.“The government is willing to have a d… [+2193 chars]"
}];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    };
    let string = this.props.category;
    document.title = `NewsWave - ${string.charAt(0).toUpperCase() + string.slice(1)} `
  }


  updateNews = async (pageNo) => {
    this.props.setProgress(10);
    this.setState({ loading: true })
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=9`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: pageNo,
      loading: false
    })
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,

    })
  }
  async componentDidMount() {
    this.updateNews(1);

  }


  render() {
    return (
      <div className="container " style={{ marginTop: "6%" }}>


        <h2 className="text-center m-5">{this.props.heading}</h2>


        {this.state.loading && <Loader />}

        {this.state.articles.length === 0 && !this.state.loading && (
          <div className="text-center container" >
            <img src={error404} alt="error" style={{ width: "50%" }} />
          </div>
        )}


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader2 />}
        >
          <div className="container">
            <div className="row">

              {!this.state.loading && this.state.articles.map((element) => {

                return (

                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      NewsUrl={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                      author={element.author ? element.author.slice(0, 20) : "Unknown"}
                    />
                  </div>
                );
              })}

            </div>
          </div>
        </InfiniteScroll>


        {/* <div className="d-flex justify-content-between my-5">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary btn-sm"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Prev
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)}
            className="btn btn-primary  btn-sm"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
