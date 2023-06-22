import './App.css'

import CardItem from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => {
  const technologyCardsHeading = 'Learn 4.0 Technologies'
  const technologyCardsPara =
    'Get trained by alumni of IITs and top companies like Amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved in Product Development'
  //   eslint-disable-next-line no-return-assign
  return (
    <div className="technologyCards-bg-container">
      <h1 className="technologyCards-heading">{technologyCardsHeading}</h1>
      <p className="technologyCards-para">{technologyCardsPara}</p>
      <ul className="technologyCards-container">
        <div className="technologyCards-sub-container">
          <CardItem key={cardsList[0].id} cardItem={cardsList[0]} />
          <CardItem key={cardsList[1].id} cardItem={cardsList[1]} />
        </div>
        <div className="technologyCards-sub-container">
          <CardItem key={cardsList[2].id} cardItem={cardsList[2]} />
          <CardItem key={cardsList[3].id} cardItem={cardsList[3]} />
        </div>
      </ul>
    </div>
  )
}

export default App
